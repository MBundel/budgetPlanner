package com.example.server.user;

public class LoginDTO {

    private Long userId;
    private String username;
    private String password;

    public LoginDTO(Long userId) {
        this.userId = userId;
    }

    public LoginDTO(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
