package com.example.server.user;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    private UserService userService;
    private UserRepository userRepository;

    @Autowired
    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    @GetMapping("/registration")
    public RegistrationDTO showRegistration() {
        return new RegistrationDTO("", "", "", "");
    }

    @PostMapping("/registration")
    public ResponseEntity<RegistrationDTO> register(@Valid @RequestBody RegistrationDTO registrationDTO) {
        RegistrationDTO response = new RegistrationDTO("", "", "", "");

        if(registrationDTO.getUsername().equals("")) {
            response.setUsername("This field must not be empty.");
            return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
        }

        if(!registrationDTO.getPassword1().equals(registrationDTO.getPassword2())) {
            response.setPassword1("The passwords do not match.");
            return new ResponseEntity<>(response, HttpStatus.NOT_ACCEPTABLE);
        }

        if(userService.existsByUsername(registrationDTO.getUsername())) {
            response.setUsername("Username is already in use.");
            return new ResponseEntity<>(response, HttpStatus.FORBIDDEN);
        }

        if(userService.existsByEmail(registrationDTO.getEmail())) {
            response.setEmail("Email address is already in use.");
            return new ResponseEntity<>(response, HttpStatus.CONFLICT);
        }

        if(!registrationDTO.getEmail().matches("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
            response.setEmail("This is not a valid email address.");
            return new ResponseEntity<>(response, HttpStatus.METHOD_NOT_ALLOWED);
        }
        // TODO: Fehler beheben!
        // "^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[@#$%^&+=])(?=\\S+$).{8,}$
        // if(!registrationDTO.getPassword1().matches("^(?=.[a-z])(?=.[A-Z])(?=.\\d)(?=.[@$!%?&])[A-Za-z\\d@$!%?&]{8,}$")) {
           if(registrationDTO.getPassword1().length() < 8) {
            response.setPassword1("Your password must have at least 8 characters.");
            return new ResponseEntity<>(response, HttpStatus.LENGTH_REQUIRED);
        }

        userService.addUser(new User(registrationDTO.getUsername(), registrationDTO.getPassword1(), registrationDTO.getEmail()));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    //Login
    @PostMapping("/login")
    public LoginDTO login(@RequestBody User user) {
        boolean isValid = userService.isValidUser(user.getUsername(), user.getPassword());
        LoginDTO userId;
        if (isValid) {
            userId = new LoginDTO(userRepository.findByUsername(user.getUsername()).getId());
            return userId;
        } else
            userId = new LoginDTO(0L);
            return userId;
    }


    // Für Rest Client und Admin:
    @GetMapping("/all")
    public List<User> getAllUsers() {
         return userService.findAllUsers();
    }
}
