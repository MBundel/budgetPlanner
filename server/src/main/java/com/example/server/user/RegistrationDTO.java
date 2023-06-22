package com.example.server.user;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class RegistrationDTO {

    // TODO: Funktioniert Validator?
    @NotEmpty
    private String user_name;
    private String email;
    @Size(min = 5, message = "Your password must have at least 5 characters.")
    private String password1;
    private String password2;

    // private String role;

    public RegistrationDTO(String user_name, String password1, String password2, String email) {
        this.user_name = user_name;
        this.password1 = password1;
        this.password2 = password2;
        this.email = email;
    }

    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword1() {
        return password1;
    }

    public void setPassword1(String password1) {
        this.password1 = password1;
    }

    public String getPassword2() {
        return password2;
    }

    public void setPassword2(String password2) {
        this.password2 = password2;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
/*
    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

 */
}
