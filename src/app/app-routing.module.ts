import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from "./pages/home.page";
import { PdfExportPage } from "./pages/pdfexport.page";

const routes: Routes = [
  { path: "", component: HomePage },
  { path: "pdfexport", component: PdfExportPage },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
