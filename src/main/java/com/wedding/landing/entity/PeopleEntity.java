package com.wedding.landing.entity;

import lombok.Data;
import org.springframework.boot.context.properties.bind.DefaultValue;

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
    private String firstName;
    @NotBlank(message = "Surname is mandatory")
    private String lastName;
    private Boolean isComing;
    private LocalDateTime updatedTime;
}