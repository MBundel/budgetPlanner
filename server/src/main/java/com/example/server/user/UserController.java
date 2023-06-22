package com.example.server.user;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {

        this.userService = userService;
    }

    @GetMapping("/registration")
    public RegistrationDTO showRegistration() {
        return new RegistrationDTO("", "", "", "");
    }

    @PostMapping("/registration")
    public RegistrationDTO register(@Valid @RequestBody RegistrationDTO registrationDTO, BindingResult bindingResult) {

        if(!registrationDTO.getPassword1().equals(registrationDTO.getPassword2())) {
            bindingResult.addError(new FieldError("registrationDTO", "password2", "Passwords are not matching."));
            return new RegistrationDTO("", "", "Passwort 2 stimmt nicht mit Passwort 1 überein.", "");
        }

        if(userService.existsByUsername(registrationDTO.getUsername())) {
            bindingResult.addError(new FieldError("registration", "username", "Username already in use."));
            return new RegistrationDTO("Username schon vergeben", "", "", "");
        }

        if(userService.existsByEmail(registrationDTO.getEmail())) {
            bindingResult.addError(new FieldError("registration", "email", "Email address already in use."));
            return new RegistrationDTO("", "", "", "Email-Adresse schon in Benutzung.");
        }

        User newUser = userService.addUser(new User(registrationDTO.getUsername(), registrationDTO.getPassword1(), registrationDTO.getEmail()));
        return new RegistrationDTO(newUser.getUsername(), newUser.getPassword(), newUser.getEmail(), newUser.getRole());
    }

    // Für Rest Client und Admin:
    @GetMapping("/all")
    public List<User> getAllUsers() {
         return userService.findAllUsers();
    }
}
