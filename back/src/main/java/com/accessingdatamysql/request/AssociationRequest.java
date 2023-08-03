package com.accessingdatamysql.request;

public class AssociationRequest {
    private String wordEnglish;
    private String wordSimilar;
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

    public String getUsernameFK() {
        return usernameFK;
    }

    public void setUsernameFK(String usernameFK) {
        this.usernameFK = usernameFK;
    }
}
