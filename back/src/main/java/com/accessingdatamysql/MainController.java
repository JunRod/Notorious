package com.accessingdatamysql;

import com.accessingdatamysql.models.Data;
import com.accessingdatamysql.models.User;
import com.accessingdatamysql.repositorys.DataRepository;
import com.accessingdatamysql.repositorys.UserRepository;
import com.accessingdatamysql.request.AssociationRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;
import java.util.HashMap;

@Controller
@RequestMapping(path = "/")
public class MainController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private DataRepository dataRepository;

    @PostMapping(path = "add")
    public @ResponseBody User addNewUser(@RequestParam String username, @RequestParam String password) {
        User user = new User();
        user.setUsername(username);
        user.setPassword(password);

        userRepository.save(user);
        return user;
    }

    @GetMapping(path = "getUser")
    public ResponseEntity<Object> getUser(@RequestParam String username) {
        User user = userRepository.findByUsername(username);

        if(user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.ok(new HashMap<>());
        }
    }

    @GetMapping(path = "all")
    public @ResponseBody Iterable<User> getAllUsers() {
        return userRepository.findAll();
    }

    @PostMapping(path = "addNewAssociation")
    public @ResponseBody String addNewAssociation (@RequestBody
                                                   AssociationRequest request) {

        User user = userRepository.findByUsername(request.getUsernameFK());
        if(user != null) {
            Data data = new Data();
            data.setUser(user);
            data.setWordEnglish(request.getWordEnglish());
            data.setWordSimilar(request.getWordSimilar());
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
