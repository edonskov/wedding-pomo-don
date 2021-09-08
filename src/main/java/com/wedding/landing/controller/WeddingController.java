package com.wedding.landing.controller;

import com.wedding.landing.entity.PeopleEntity;
import com.wedding.landing.repository.WeddingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import javax.validation.Valid;

@Controller
public class WeddingController {
    @Autowired
    WeddingRepository weddingRepository;

    @GetMapping("/index")
    public String showUserList(Model model) {
        model.addAttribute("users", weddingRepository.findAll());
        return "landing";
    }

    @GetMapping("/signup")
    public String showSignUpForm(PeopleEntity peopleEntity) {
        return "add-user";
    }

    @PostMapping("/adduser")
    public String addUser(@Valid PeopleEntity peopleEntity, BindingResult result, Model model) {
        if (result.hasErrors()) {
            return "add-user";
        }

        weddingRepository.save(peopleEntity);
        return "redirect:/index";
    }

    @GetMapping("/edit/{id}")
    public String showUpdateForm(@PathVariable("id") long id, Model model) {
        PeopleEntity user = weddingRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
        model.addAttribute("user", user);

        return "update-user";
    }

    @PostMapping("/update/{id}")
    public String updateUser(@PathVariable("id") long id, @Valid PeopleEntity user, BindingResult result, Model model) {
        if (result.hasErrors()) {
            user.setId(id);
            return "update-user";
        }

        weddingRepository.save(user);

        return "redirect:/index";
    }

    @GetMapping("/delete/{id}")
    public String deleteUser(@PathVariable("id") long id, Model model) {
        PeopleEntity user = weddingRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Invalid user Id:" + id));
        weddingRepository.delete(user);

        return "redirect:/index";
    }
}
