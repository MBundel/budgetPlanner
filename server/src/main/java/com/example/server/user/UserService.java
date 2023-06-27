package com.example.server.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Service
public class UserService {

    public UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User addUser (User user) {
        // TODO: ggf. hier UUID kreieren
        return userRepository.save(user);
    }



    public User updateUser (User user) {
        return userRepository.save(user);
    }

    // TODO: Wie sinnvoll ist die Methode? Untere Methode einkommentieren?
    // Oder UUID nehmen,falls möglich.
    public void deleteUser (Long id) {
        userRepository.deleteById(id);
    }

    public boolean existsByUsername(String userName) {
             User user = userRepository.findUserByUsername(userName).orElse(null);
             if(user != null) {
                 return true;
             }
             return false;
    }

    // Für Rest Client und Admin:
    public List<User> findAllUsers() {
        return userRepository.findAll();
    }



    public boolean existsByEmail(String email) {
        User user = userRepository.findUserByEmail(email).orElse(null);
        if(user != null) {
            return true;
        }
        return false;
    }

    //Login
    public boolean isValidUser(String username, String password) {
        User user = userRepository.findByUsername(username);
        return user != null && user.getPassword().equals(password);
    }

    /*
    public void deleteUser (User user) {
        userRepository.delete(user);
    }
     */
}
