package com.junrod.chatgpt.controller;

import io.github.flashvayne.chatgpt.dto.chat.MultiChatMessage;
import io.github.flashvayne.chatgpt.service.ChatgptService;
import lombok.RequiredArgsConstructor;
import java.util.Arrays;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.http.ResponseEntity;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class QuestionController {

    private final ChatgptService chatgptService;

    @GetMapping("/words")
    public ResponseEntity<String> sendWords(@RequestParam String message) {
        String responseMessage = chatgptService.multiChat(Arrays.asList(
                new MultiChatMessage("user", "dame 5 palabras en español del diccionario con una similitud del 90% en escritura a " + message + ". Como estas similitudes: shower/chofer, snake/esnife. Que tu respuesta solo sean las palabras.")
        ));
        return ResponseEntity.ok(responseMessage);
    }

    @GetMapping("/idea")
    public ResponseEntity<String> idea(@RequestParam String wordOne, @RequestParam String wordTwo) {
        String responseMessage = chatgptService.multiChat(Arrays.asList(
                new MultiChatMessage("user", "Estoy memorizando. Dame Idea inverosimil muy corta que incluya las palabras " + wordOne + " y " + wordTwo + ". Que mis 5 sentidos estén involucrados.")
        ));
        return ResponseEntity.ok(responseMessage);
    }

}
