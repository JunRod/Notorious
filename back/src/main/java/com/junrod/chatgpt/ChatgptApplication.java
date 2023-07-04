package com.junrod.chatgpt;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

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
@SpringBootApplication
public class ChatgptApplication {

    public static void main(String[] args) {
        SpringApplication.run(ChatgptApplication.class, args);
    }

    private final ChatgptService chatgptService;

    @GetMapping("/words")
    public ResponseEntity<String> sendWords(@RequestParam String message) {
        String responseMessage = chatgptService.multiChat(Arrays.asList(
                new MultiChatMessage("user", "Estoy memorizando, y necesito crear asociaciones entre palabras. " +
                        "Dame 5 palabras en espanol que existan, con una similitud del 90% en escritura a " + message
                        + ". Como estas similitudes: shower/chofer, snake/esnife, get/jet. Dame solo palabras que existan" +
                        "en la vida real." + " Que tu respuesta solo sean las palabras y elimina numeros y signos de tu respuesta.")
        ));
        return ResponseEntity.ok(responseMessage);
    }

    @GetMapping("/idea")
    public ResponseEntity<String> idea(@RequestParam String wordOne, @RequestParam String wordTwo) {
        String responseMessage = chatgptService.multiChat(Arrays.asList(
                new MultiChatMessage("user", "Estoy memorizando. Dame una sola Idea inverosimil corta de 30 palabras que incluya las palabras " + wordOne + " y " + wordTwo + ". " +
                        "Usa la mismas cantidad de letras de cada palabra y las mismas letras. ejemplo: Te doy las palabras Llenar y hilo, la idea seria asi: \"En el jardín encantado, " +
                        "hilos de luz tejían melodías brillantes que llenaban el aire de magia. El aroma de las flores danzaba en la brisa, mientras el sabor del néctar embriagaba los sentidos. " +
                        "Suaves caricias de hojas acariciaban la piel, y los susurros del viento susurraban secretos inaudibles. Todo un festín sensorial para el alma." +
                        "Y que mis 5 sentidos estén involucrados en la idea inverosimil.")
        ));
        return ResponseEntity.ok(responseMessage);
    }
}
