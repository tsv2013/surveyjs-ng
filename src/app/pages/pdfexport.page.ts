import { Component } from "@angular/core";
import * as SurveyPDF from "survey-pdf";

import json from "../../assets/survey.json";

@Component({
  selector: "pdfexport-page",
  templateUrl: "./pdfexport.page.html",
})
export class PdfExportPage {
  json = json;
  result = undefined;
  savePDF() {
    var options = {
      fontSize: 14,
      margins: {
        left: 10,
        right: 10,
        top: 10,
        bot: 10,
      },
    };
    const surveyPDF = new SurveyPDF.SurveyPDF(this.json, options);
    console.log(this.result);
    surveyPDF.data = this.result;
    surveyPDF.save("survey PDF example");
  }
}
