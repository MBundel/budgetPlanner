package com.example.server;

import jakarta.annotation.PostConstruct;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication


public class ServerApplication {



    public static void main(String[] args) {
        SpringApplication.run(ServerApplication.class, args);
    }


    @PostConstruct
    public void dummyData() {
/*
        // TODO: Einfügen, sobald Controller steht:
        if (userRepository.count() == 0) {
            userRepository.save(new User("Hans", "Hase", "hans.hase@gmail.com", "MeinPasswortkenntkeiner"));
            userRepository.save(new User("Trudi", "Tomate", "");
        }
*/
        System.out.println("Server Application läuft.");
    }

}
