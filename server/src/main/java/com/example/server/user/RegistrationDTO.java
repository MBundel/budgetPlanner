package com.example.server.user;
import jakarta.validation.constraints.NotEmpty;
import jakarta.validation.constraints.Size;

public class RegistrationDTO {

    // TODo: Funktioniert Validator?
    @NotEmpty
    private String first_name;
    private String last_name;
    private String email;

    @Size(min = 5, message = "Your password must have at least 5 characters.")
    private String password1;
    private String password2;

    public RegistrationDTO(String first_name, String last_name, String email, String password1, String password2) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.email = email;
        this.password1 = password1;
        this.password2 = password2;
    }

    public String getFirst_name() {
        return first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword1() {
        return password1;
    }

    public String getPassword2() {
        return password2;
    }
}
