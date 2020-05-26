import { Injectable } from "@angular/core";

@Injectable()
export default class CounterService {
  activeCount = 0;
  inactiveCount = 0;

  countActivation() {
    this.activeCount++;
    console.log("switched to active: " + this.activeCount);
  }

  countDeactivation() {
    this.inactiveCount++;
    console.log("switched to inactive " + this.inactiveCount);
  }
}
