package com.example.server;

import com.example.server.user.User;
import com.example.server.user.UserRepository;
import jakarta.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication


public class ServerApplication {



    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }


    private UserRepository userRepository;

    @Autowired
    public ServerApplication(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @PostConstruct
    public void dummyData() {

        if (userRepository.count() == 0) {
            userRepository.save(new User("Trudi Tröte", "Tomate", "trudi@gmx.net"));
            userRepository.save(new User("Fraubert Angelripper", "meinPasswortkenntkeiner", "ich@zuhause.de"));
        }

        System.out.println("Server Application läuft.");
    }

}
