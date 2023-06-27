package com.example.server.user;

public class LoginDTO {

    private Long userId;

    public LoginDTO(Long userId) {
        this.userId = userId;
    }


    public Long getUserId() {
        return userId;
    }

    public void setUserId(Long userId) {
        this.userId = userId;
    }
}
