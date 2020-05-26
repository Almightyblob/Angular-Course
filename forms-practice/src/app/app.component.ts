import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, FormArray, Validators } from "@angular/forms";
import { Observable } from 'rxjs';


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "forms-practice";
  form: FormGroup;
  submitted= false
  inputData = {
    name: '',
    email: '',
    status: ''
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl(null, [], this.nameValidation),
      email: new FormControl(null),
      status: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.form);

    this.submitted = true;
    this.inputData.name = this.form.value.name
    this.inputData.email = this.form.value.email
    this.inputData.status = this.form.value.status
  }

  // nameValidation(control: FormControl): {[s: string]: boolean} {
  //   if (control.value === "Test") {
  //     return {nameIsForbidden: true} 
  //   } else {
  //     return null
  //   }
  // }

  nameValidation(control: FormControl): Promise<any> | Observable<any>  {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === "Test") {
          resolve({nameIsForbidden: true})
        } else {
          resolve(null)
        }
      }, 1500)
    });
    return promise;
  }
}
