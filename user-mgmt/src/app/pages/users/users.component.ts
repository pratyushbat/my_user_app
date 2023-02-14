import { Component, OnInit } from "@angular/core";
import { UsersService } from "src/app/services/users.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"],
})
export class UsersComponent implements OnInit {
  users: any;
  constructor(public userService: UsersService) {}

  ngOnInit() {
    this.getUsers();
  }
  getUsers() {
    this.userService.getUsers().subscribe(
      (result) => {
        this.users = result;
      },
      (error) => console.log(error)
    );
  }
}
