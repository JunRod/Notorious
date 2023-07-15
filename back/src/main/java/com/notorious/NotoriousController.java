package com.notorious;

import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.completion.chat.ChatMessageRole;
import com.theokanning.openai.image.CreateImageRequest;
import com.theokanning.openai.service.OpenAiService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@CrossOrigin(origins = {"http://localhost:3000", "https://notorious-learn.vercel.app"})
@RestController("/")
public class NotoriousController {
    Object response;
    OpenAiService service;
    final List<ChatMessage> messages;
    ChatMessage systemMessage;

    public NotoriousController(@Value("${openai.apikey}") String token) {
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
                .responseFormat("b64_json")
                .build();

        //Image is located at:
        response = service.createImage(request).getData().get(0);
        service.shutdownExecutor();

        return response;
    }

}
