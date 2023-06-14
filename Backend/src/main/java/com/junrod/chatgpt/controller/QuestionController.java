package com.junrod.chatgpt.controller;

import io.github.flashvayne.chatgpt.dto.chat.MultiChatMessage;
import io.github.flashvayne.chatgpt.service.ChatgptService;
import lombok.RequiredArgsConstructor;
import java.util.Arrays;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/questions")
@RequiredArgsConstructor
public class QuestionController {

    private final ChatgptService chatgptService;

    @GetMapping("/words")
    public String send(@RequestParam String message, Boolean bandera) {
        // true = word in english
        // false = word in spanish

        String completeText = (bandera ? "en español " : "");
        String responseMessage = chatgptService.multiChat(Arrays.asList(new MultiChatMessage("user",
                "dame 5 palabras " + completeText + "del diccionario con una similitud del 90% en escritura a " + message + ". Como estas similitudes: shower/chofer, snake/esnife")));
        return responseMessage;
    }

    @GetMapping("/idea")
    public String idea(@RequestParam String wordOne, String wordTwo) {
        String responseMessage = chatgptService.multiChat(Arrays.asList(new MultiChatMessage("user",
                "Estoy memorizando. Dame Idea inverosimil muy corta que incluya las palabras " + wordOne + " y " + wordTwo + ". Que mis 5 sentidos estén involucrados.")));
        return responseMessage;
    }

}