package com.accessingdatamysql.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;

@Entity
public class Data {

    //Pienso ponerle column: nullable=false


    //Esto me permite hacer consultas en donde consulte por un Data y los User asociados a ese Data
    //Sin embargo, con JsonIgnore estamos anulando eso, por lo que esto es innecesario, mas ChatGPT
    //me dice que con DTO's se puede y mas adelante lo probare.
    //De momento solo puedo hacer consultas desde User
    @ManyToOne
    @JoinColumn(name = "usernameFK")
    @JsonIgnore
    private User user;

    @Id
    private String wordEnglish;

    private String wordSimilar;

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getWordEnglish() {
        return wordEnglish;
    }

    public void setWordEnglish(String wordEnglish) {
        this.wordEnglish = wordEnglish;
    }

    public String getWordSimilar() {
        return wordSimilar;
    }

    public void setWordSimilar(String wordSimilar) {
        this.wordSimilar = wordSimilar;
    }
}
