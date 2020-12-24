import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LaunchDarklyService } from "./services/launchdarkly.service";
import { map } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  title = "featureflagapp";
  form: FormGroup;
  loginInvalid = false;
  featureFlag$: Observable<boolean>;

  constructor(
    private fb: FormBuilder,
    launchDarklyService: LaunchDarklyService
  ) {
    this.featureFlag$ = launchDarklyService.flagChange.pipe(
      map((flagChange) => {
        if (flagChange["wsibtestflag"].current) {
          return flagChange["wsibtestflag"].current;
        }
        return flagChange["wsibtestflag"];
      })
    );
  }
  ngOnInit(): void {
    this.form = this.fb.group({
      username: ["", Validators.email],
      password: ["", Validators.required],
    });
  }
  onSubmit() {
    console.log("Submit.....................");
  }
}
