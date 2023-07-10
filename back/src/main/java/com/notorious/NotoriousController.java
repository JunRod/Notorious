package com.notorious;

import com.theokanning.openai.completion.chat.ChatCompletionRequest;
import com.theokanning.openai.completion.chat.ChatMessage;
import com.theokanning.openai.completion.chat.ChatMessageRole;
import com.theokanning.openai.image.CreateImageRequest;
import com.theokanning.openai.service.OpenAiService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

@RestController
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

    @GetMapping("/words")
    public Object GenerateWords (String word) {

        /*Streaming chat completion...*/
        systemMessage = new ChatMessage(ChatMessageRole.USER.value(), "I am memorizing, and I need to create associations between words." + "Give me 5 Spanish words that exist, with a 90% similarity in writing to: " + word +
                ". Like these similarities: shower/chofer, snake/esnife, get/jet. Give me only words that exist in real life. May your answer only be the words, eliminate numbers and signs from your answer.");
        return getObject();
    }

    @GetMapping("/idea")
    public Object GenerateWords (String wordOne, String wordTwo) {

        /*Streaming chat completion...*/
        systemMessage = new ChatMessage(ChatMessageRole.USER.value(), "Estoy memorizando. Dame una sola Idea " +
                "inverosimil corta de 30 palabras que incluya las palabras" + wordOne + " y " + wordTwo + " Usa " +
                "la mismas cantidad de letras de cada palabra y las mismas letras. ejemplo: Te doy las palabras Llenar " +
                "y hilo, la idea seria asi: En el jardín encantado, hilos de luz tejían melodías brillantes que " +
                "llenaban el aire de magia. El aroma de las flores danzaba en la brisa, mientras el sabor del néctar embriagaba" +
                " los sentidos. Suaves caricias de hojas acariciaban la piel, y los susurros del viento susurraban secretos inaudibles. Todo un festín sensorial para el alma. Que mis 5 sentidos estén involucrados en la idea inverosimil.");
        return getObject();
    }

    private Object getObject() {
        messages.add(systemMessage);

        ChatCompletionRequest chatCompletionRequest = ChatCompletionRequest
                .builder()
                .model("gpt-3.5-turbo")
                .messages(messages)
                .n(1)
                .maxTokens(50)
                .logitBias(new HashMap<>())
                .build();

        Object response = service.createChatCompletion(chatCompletionRequest).getChoices().get(0).getMessage();
        service.shutdownExecutor();

        return response;
    }

    @GetMapping("/image")
    public Object ImageGenerate(String history) {

        //Creating Image
        CreateImageRequest request = CreateImageRequest.builder()
                .prompt(history)
                .size("256x256")
                .build();

        //Image is located at:
        response = service.createImage(request).getData().get(0).getUrl();
        service.shutdownExecutor();

        return response;
    }

}
