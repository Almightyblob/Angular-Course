import { Component } from "@angular/core";
import AccountsServices from "./accounts.services";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [AccountsServices],
})
export class AppComponent {
  constructor(private accountsServices: AccountsServices) {}
  inactiveUsers = this.accountsServices.inactiveUsers;
  activeUsers = this.accountsServices.activeUsers;
}
