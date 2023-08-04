package com.notorious;

import com.notorious.models.Data;
import com.notorious.models.User;
import com.notorious.repositorys.DataRepository;
import com.notorious.repositorys.UserRepository;
import com.notorious.request.AssociationRequest;
import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.completion.chat.ChatMessageRole;
import com.theokanning.openai.image.CreateImageRequest;
import com.theokanning.openai.service.OpenAiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "https://notorious-799tu.ondigitalocean.app"})
@RestController("/")
public class OpenAIController {
    Object response;
    OpenAiService service;
    final List<ChatMessage> messages;
    ChatMessage systemMessage;

    public OpenAIController(@Value("${openai.apikey}") String token) {
        this.service = new OpenAiService(token);
        this.systemMessage = new ChatMessage();
        this.response = "";
        messages = new ArrayList<>();
    }

    @GetMapping("hello")
    public String hello() {
        return "Hola!";
    }

    @GetMapping("words")
    public Object GenerateWords (String word) {

        /*Streaming chat completion...*/
        systemMessage = new ChatMessage(ChatMessageRole.USER.value(), "I am memorizing, and I need to create associations between words." + "Give me 5 Spanish words that exist, with a 90% similarity in writing to: " + word +
                ". Like these similarities: shower/chofer, snake/esnife, get/jet. Give me only words that exist in real life. May your answer only be the words, eliminate numbers and signs from your answer.");
        return getObject();
    }

    @GetMapping("idea")
    public Object GenerateWords (String wordOne, String wordTwo) {

        /*Streaming chat completion...*/
        systemMessage = new ChatMessage(ChatMessageRole.USER.value(), "I am memorizing Give me a single short implausible idea in Spanish with a maximum of 30 words that includes the words: " + wordOne + " and " + wordTwo + ". Let my 5 senses be involved in the implausible idea. that your answer is in spanish");
        return getObject();
    }

    private Object getObject() {
        messages.add(systemMessage);

        ChatCompletionRequest chatCompletionRequest = ChatCompletionRequest
                .builder()
                .model("gpt-3.5-turbo")
                .messages(messages)
                .n(1)
                .logitBias(new HashMap<>())
                .build();

        Object response = service.createChatCompletion(chatCompletionRequest).getChoices().get(0).getMessage();
        service.shutdownExecutor();

        return response;
    }

    @GetMapping("image")
    public Object ImageGenerate(String history) {

        //Creating Image
        CreateImageRequest request = CreateImageRequest.builder()
                .prompt(history)
                .size("256x256")
                .build();

        //Image is located at:
        response = service.createImage(request).getData().get(0);
        service.shutdownExecutor();

        return response;
    }


    /*______________________*/

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DataRepository dataRepository;

    //Añadir Usuario
    @PostMapping(path = "add")
    public @ResponseBody User addNewUser(@RequestParam String username, @RequestParam String password) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);

        userRepository.save(user);
        return user;
    }

    //Obtener Usuario
    @GetMapping(path = "getUser")
    public ResponseEntity<Object> getUser(@RequestParam String username) {
        User user = userRepository.findByUsername(username);

        if(user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.ok(new HashMap<>());
        }
    }

    //Obtener todos los usuarios
    @GetMapping(path = "all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    //Añadir nueva Asociacion
    @PostMapping(path = "addNewAssociation")
    public @ResponseBody String addNewAssociation (@RequestBody
                                                   AssociationRequest request) {

        User user = userRepository.findByUsername(request.getUsernameFK());
        if(user != null) {
            Data data = new Data();
            data.setUser(user);
            data.setWordEnglish(request.getWordEnglish());
            data.setWordSimilar(request.getWordSimilar());
            data.setIdea(request.getIdea());
            data.setImage(request.getImage());
            dataRepository.save(data);
            return "Data added successfully";
        } else {
            return "User not found";
        }
    }

    @GetMapping(path = "getAssociation")
    public @ResponseBody Data getAssociation (@RequestParam String wordEnglish) {
        Data data = dataRepository.findByWordEnglish(wordEnglish);
        return data;
    }

}
