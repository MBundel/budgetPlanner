package com.example.server.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
// TODO: RequestMapping erforderlich?
// @RequestMapping("user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    /*
    Von Zwitscher-App:
    @GetMapping("/register")
    public String register(Model model) {
        model.addAttribute("registration", new RegistrationDTO("", "", ""));
        return "register";
    }


    @PostMapping("/register")
    public String register(@Valid @ModelAttribute("registration") RegistrationDTO registration, BindingResult bindingResult) {

        if(!registration.getPassword1().equals(registration.getPassword2())) {
            bindingResult.addError(new FieldError("registration", "password2", "passwords are not matching"));
        }

        if(userRepository.existsByUsername(registration.getUsername())) {
            bindingResult.addError(new FieldError("registration", "username", "username already in use"));
        }

        if(bindingResult.hasErrors()) {
            return "register";
        }

        // Everything okay with signing up!!!
        User user = new User(registration.getUsername(), registration.getPassword1());
        userRepository.save(user);

        return "redirect:/login";
    }
     */

}