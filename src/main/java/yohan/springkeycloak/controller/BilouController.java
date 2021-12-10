package yohan.springkeycloak.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.security.RolesAllowed;

@Controller
@RestController
public class BilouController {

    @GetMapping("/user")
    @RolesAllowed("user")
    public String getMessageUser() {
       return "Hello user !";
    }

    @GetMapping("/admin")
    @RolesAllowed("admin")
    public String getMessageAdmin() {
        return "Hello admin !";
    }

}
