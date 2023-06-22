package com.example.server.user;

import jakarta.persistence.*;

import java.io.Serializable;

@Entity
@Table(name="user_profile")
// Serializable: formt Daten in Strings um, um sie verschicken zu können
public class User implements Serializable {

    // TODO: Überprüfen, in Datenbank andere Reihenfolge (alphabetisch), kein Problem?
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(nullable = false, updatable = false)
    private Long id;
    private String user_name;
    private String password;
    private String email;
    private String role;


    public User() {
    }

    public User(String user_name, String password, String email) {
        this.user_name = user_name;
        this.password = password;
        this.email = email;
        this.role = "user";
    }


    public Long getId() {
        return id;
    }


    public String getUser_name() {
        return user_name;
    }

    public void setUser_name(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }


    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", user_name='" + user_name + '\'' +
                ", password='" + password + '\'' +
                ", email='" + email + '\'' +
                '}';
    }
}

