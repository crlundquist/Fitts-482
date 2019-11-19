import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';

@Component({
  selector: 'app-fitts-test',
  templateUrl: './fitts-test.component.html',
  styleUrls: ['./fitts-test.component.scss'],
})
export class FittsTestComponent implements OnInit {

  constructor(private router: Router) { }

// --------------------- Popup alert confirmation ------------------------------------------------
  async presentAlertConfirm() {
    if (confirm("Save your answers and continue?")) {
      this.downloadCSV();
      this.router.navigate(['/FittsTest2']);
    } else {

    }

  }
  // -------------------------------------------------------------------------------------------------

  // -------------------------- export options -----------------------------------------
csvData :any;

csvOptions = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalseparator: '.',
  showLabels: true,
  showTitle: true,
  title: 'Fitts Question Data',
  useBom: true,
  noDownload: false,
  headers: ["Age", "Gender", "Daily Usage", "Mouse or Trackpad", "Visual Impairment", "Condition"]
};
// --------------------------------------------------------------------------------------------


downloadCSV() {
  var age = document.getElementsByName("ageQ");
  var gender = document.getElementsByName("genderQ");
  var freq = document.getElementsByName("freqQ");
  var mouse = document.getElementsByName("mouseQ");
  var impair = document.getElementsByName("impairQ");
  var cond = document.getElementsByName("condQ");

//   var i;
//   for(i = 0; i < age.length; i++) { 
//     if(age[i].checked) {}
// } 

  // new AngularCsv(this.csvData, "Fitts Question Data", this.csvOptions);
}

  ngOnInit() {
    this.csvData = [];
  }

}
