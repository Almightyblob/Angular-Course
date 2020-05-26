import {
  Component,
  OnInit,
  Input,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck
} from "@angular/core";

@Component({
  selector: "app-server-element",
  templateUrl: "./server-element.component.html",
  styleUrls: ["./server-element.component.css"]
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck {
  @Input("srvElement") element: { type: string; name: string; content: string };

  constructor() {
    console.log("constructor called");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngonchanges called", changes);
  }

  ngOnInit(): void {
    console.log("ngoninit called");
  }

  ngDoCheck() {
    console.log("docheck called");
  }
}
