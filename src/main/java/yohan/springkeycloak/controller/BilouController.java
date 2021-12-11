package yohan.springkeycloak.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;
import java.util.Map;

@Controller
@RestController
@CrossOrigin
public class BilouController {

    @GetMapping("/user")
    @RolesAllowed("user")
    public Map<String, String> getMessageUser() {
       return Map.of("message","Hello user !");

    }

    @GetMapping("/admin")
    @RolesAllowed("admin")
    public Map<String, String> getMessageAdmin() {
        return Map.of("message","Hello admin !");
    }

}
