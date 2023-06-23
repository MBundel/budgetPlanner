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

        if(registrationDTO.getUsername().equals("")) {
            return new RegistrationDTO("This field must not be empty.", "", "", "");
        }

        if(!registrationDTO.getPassword1().equals(registrationDTO.getPassword2())) {
            return new RegistrationDTO("", "", "The passwords do not match.", "");
        }

        if(userService.existsByUsername(registrationDTO.getUsername())) {
            return new RegistrationDTO("Username is already in use.", "", "", "");
        }

        if(userService.existsByEmail(registrationDTO.getEmail())) {
            return new RegistrationDTO("", "", "", "Email address is already in use.");
        }

        if(!registrationDTO.getEmail().matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
            return new RegistrationDTO("", "", "", "This is not a valid email address.");
        }

        if(!registrationDTO.getPassword1().matches("^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[@#$%^&+=])(?=\\S+$).{8,}$")) {
            return new RegistrationDTO("", "", "", "This is not a valid password.");
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
