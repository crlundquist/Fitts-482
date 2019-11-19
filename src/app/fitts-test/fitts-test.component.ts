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
  // var age = document.getElementsByName("ageQ");
  // var gender = document.getElementsByName("genderQ");
  // var freq = document.getElementsByName("freqQ");
  // var mouse = document.getElementsByName("mouseQ");
  // var impair = document.getElementsByName("impairQ");
  // var cond = document.getElementsByName("condQ");



  new AngularCsv(this.csvData, "Fitts Question Data", this.csvOptions);
}

onAge1Change(value) {
  this.csvData.push({"Age":"18-21"});
}
onAge2Change(value) {
  this.csvData.push({"Age":"22-25"});
}
onAge3Change(value) {
  this.csvData.push({"Age":"26-29"});
}
onAge4Change(value) {
  this.csvData.push({"Age":"30-33"});
}
onAge5Change(value) {
  this.csvData.push({"Age":"34+"});
}

onGender1Change(value) {
  this.csvData.push({"Gender":"male"});
}
onGender2Change(value) {
  this.csvData.push({"Gender":"female"});
}
onGender3Change(value) {
  this.csvData.push({"Gender":"prefer not to answer"});
}

onFreq1Change(value) {
  this.csvData.push({"Freq":"0-1 hour"});
}
onFreq2Change(value) {
  this.csvData.push({"Freq":"1-2 hours"});
}
onFreq3Change(value) {
  this.csvData.push({"Freq":"3-4 hours"});
}
onFreq4Change(value) {
  this.csvData.push({"Freq":"4-5 hours"});
}
onFreq5Change(value) {
  this.csvData.push({"Freq":"5+ hours"});
}

onMouse1Change(value) {
  this.csvData.push({"Mouse":"mouse"});
}
onMouse2Change(value) {
  this.csvData.push({"Mouse":"trackpad"});
}

onImpair1Change(value) {
  this.csvData.push({"Impair":"yes"});
}
onImpair2Change(value) {
  this.csvData.push({"Impair":"no"});
}
onImpair3Change(value) {
  this.csvData.push({"Impair":"prefer not to answer"});
}

onCond1Change(value) {
  this.csvData.push({"Cond":"yes"});
}
onCond2Change(value) {
  this.csvData.push({"Cond":"no"});
}
onCond3Change(value) {
  this.csvData.push({"Cond":"prefer not to answer"});
}

  ngOnInit() {
    this.csvData = [];
  }

}
