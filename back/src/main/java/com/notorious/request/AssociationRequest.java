package com.notorious.request;

public class AssociationRequest {
    private String wordEnglish;
    private String wordSimilar;
    private String idea;
    private String image;
    private String usernameFK;

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

    public String getIdea() {
        return idea;
    }

    public void setIdea(String idea) {
        this.idea = idea;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public String getUsernameFK() {
        return usernameFK;
    }

    public void setUsernameFK(String usernameFK) {
        this.usernameFK = usernameFK;
    }
}
