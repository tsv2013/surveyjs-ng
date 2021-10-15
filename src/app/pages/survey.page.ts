import { Component } from "@angular/core";

import json from "../../assets/survey.json";

@Component({
  selector: "survey-page",
  templateUrl: "./survey.page.html",
})
export class SurveyPage {
  title = "SurveyJS+Angular Demo Application";
  json: any;

  constructor() {
    this.json = json;
  }

  sendData(result: any) {
    //TODO update with your own behavior
    console.log(result);
  }
}
