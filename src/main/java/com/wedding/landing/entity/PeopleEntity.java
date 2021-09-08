package com.wedding.landing.entity;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import java.time.LocalDateTime;

@Entity
@Table(name = "people")
@Data
public class PeopleEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @NotBlank(message = "Name is mandatory")
    private String first_name;
    @NotBlank(message = "Surname is mandatory")
    private String last_name;
    private LocalDateTime updatedTime;
}