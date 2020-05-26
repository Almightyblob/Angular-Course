import { Component, OnInit } from "@angular/core";
import AccountsServices from "../accounts.services";

@Component({
  selector: "app-inactive-users",
  templateUrl: "./inactive-users.component.html",
  styleUrls: ["./inactive-users.component.css"],
})
export class InactiveUsersComponent {
  constructor(private accountsServices: AccountsServices) {}

  users: string[];

  ngOnInit() {
    this.users = this.accountsServices.inactiveUsers;
  }

  onSetToActive(id: number) {
    this.accountsServices.onSetToActive(id);
  }
}
