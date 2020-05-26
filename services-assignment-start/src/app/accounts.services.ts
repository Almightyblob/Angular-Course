import CounterService from "./counter.services";
import { Injectable } from "@angular/core";

@Injectable()
export default class AccountsServices {
  activeUsers = ["Max", "Anna"];
  inactiveUsers = ["Chris", "Manu"];

  constructor(private counterService: CounterService) {}

  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.countDeactivation();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.countActivation();
  }
}
