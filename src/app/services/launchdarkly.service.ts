import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { initialize, LDClient, LDFlagSet } from "ldclient-js";

@Injectable({
  providedIn: "root",
})
export class LaunchDarklyService {
  ldClient: LDClient;
  flags: LDFlagSet;
  flagChange: Subject<Object> = new Subject<Object>();
  constructor() {
    console.log("LaunchDarklyService.............................");
    this.flags = { wsibtestflag: false };

    this.ldClient = initialize("5fdb8c0351479b0ae4bb300f", {
      key: "QA",
      anonymous: true,
    });

    this.ldClient.on("change", (flags) => {
      console.log(flags);
      if (flags["wsibtestflag"] !== undefined) {
        this.flags["wsibtestflag"] = flags["wsibtestflag"];
      }

      this.flagChange.next(this.flags);
      console.log("Flags updated.");
    });

    this.ldClient.on("ready", () => {
      this.setFlags();
    });
  }

  setFlags() {
    this.flags = this.ldClient.allFlags();
    console.log("Flags initialized.");
    console.log(this.flags);
  }

  changeUser(user) {
    if (user !== "Anonymous") {
      this.ldClient.identify({ key: user, name: user, anonymous: false });
    } else {
      this.ldClient.identify({ key: "anon", anonymous: true });
    }
  }
}
