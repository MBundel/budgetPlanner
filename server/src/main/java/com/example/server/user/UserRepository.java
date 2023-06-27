package com.example.server.user;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

// Long ist der Primary Key (id):
public interface UserRepository extends JpaRepository<User, Long> {

    /* TODO ggf. einkommentieren:
    void deleteUserById(Long id);

    Optional<User> findUserById(Long id);

     */
    Optional<User> findUserByUsername(String userName);

    Optional<User> findUserByEmail(String userName);

    User findByUsernameIgnoreCase(String username);
}
