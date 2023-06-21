package com.example.server.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

    /*
    public void deleteUser (User user) {
        userRepository.delete(user);
    }
     */
}
