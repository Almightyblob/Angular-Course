import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild
} from "@angular/core";

@Component({
  selector: "app-cockpit",
  templateUrl: "./cockpit.component.html",
  styleUrls: ["./cockpit.component.css"]
})
export class CockpitComponent implements OnInit {
  @Output("") serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output("bpCreated") blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  constructor() {}

  ngOnInit(): void {}

  onAddServer(serverNameInput: string, serverContentInput: string) {
    this.serverCreated.emit({
      serverName: serverNameInput,
      serverContent: serverContentInput
    });
  }

  onAddBlueprint(serverNameInput: string, serverContentInput: string) {
    this.blueprintCreated.emit({
      serverName: serverNameInput,
      serverContent: serverContentInput
    });
  }
}
