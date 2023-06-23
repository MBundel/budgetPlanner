package com.example.server.user;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
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
    public RegistrationDTO register(@Valid @RequestBody RegistrationDTO registrationDTO) {
        RegistrationDTO response = new RegistrationDTO("", "", "", "");

        if(registrationDTO.getUsername().equals("")) {
            response.setUsername("This field must not be empty.");
            return response;
        }

        if(!registrationDTO.getPassword1().equals(registrationDTO.getPassword2())) {
            response.setPassword1("The passwords do not match.");
            return response;
        }

        if(userService.existsByUsername(registrationDTO.getUsername())) {
            // return new RegistrationDTO("Username is already in use.", "", "", "");
            response.setUsername("Username is already in use.");
            return response;
        }

        if(userService.existsByEmail(registrationDTO.getEmail())) {
            // return new RegistrationDTO("", "", "", "Email address is already in use.");
            response.setEmail("Email address is already in use.");
            return response;
        }

        if(!registrationDTO.getEmail().matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
            // return new RegistrationDTO("", "", "", "This is not a valid email address.");
            response.setEmail("This is not a valid email address.");
            return response;
        }
        // TODO: Fehler beheben!
        // "^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[@#$%^&+=])(?=\\S+$).{8,}$
        // if(!registrationDTO.getPassword1().matches("^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[@$!%?&])[A-Za-z\\d@$!%?&]{8,}$")) {
           if(registrationDTO.getPassword1().length() < 8) {
            // return new RegistrationDTO("", "", "", "This is not a valid password.");
            response.setPassword1("Your password mus have at least 8 characters.");
            return response;
        }

        User newUser = userService.addUser(new User(registrationDTO.getUsername(), registrationDTO.getPassword1(), registrationDTO.getEmail()));
        // return new RegistrationDTO(newUser.getUsername(), newUser.getPassword(), newUser.getEmail(), newUser.getRole());
        return response;
    }

    // Für Rest Client und Admin:
    @GetMapping("/all")
    public List<User> getAllUsers() {
         return userService.findAllUsers();
    }
}
