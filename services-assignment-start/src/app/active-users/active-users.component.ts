import { Component, OnInit } from "@angular/core";
import AccountsServices from "../accounts.services";

@Component({
  selector: "app-active-users",
  templateUrl: "./active-users.component.html",
  styleUrls: ["./active-users.component.css"],
})
export class ActiveUsersComponent {
  constructor(private accountsServices: AccountsServices) {}

  users: string[];

  ngOnInit() {
    this.users = this.accountsServices.activeUsers;
  }

  onSetToInactive(id: number) {
    this.accountsServices.onSetToInactive(id);
  }
}
