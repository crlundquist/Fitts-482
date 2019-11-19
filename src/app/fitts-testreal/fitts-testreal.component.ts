import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../services/data.service";
import { AngularCsv } from 'angular7-csv/dist/Angular-csv';

@Component({
  selector: 'app-fitts-testreal',
  templateUrl: './fitts-testreal.component.html',
  styleUrls: ['./fitts-testreal.component.scss'],
})
export class FittsTestrealComponent implements OnInit {

  public circleDatabase: any;

  constructor(private router: Router, private dataService: DataService) { }

  // ---------------------------- For timer ---------------------------------------------
  counter: number;
  timerRef;
  running: boolean = false;
  startText = "Start";
// ---------------------------------------------------------------------------------------

// -------------------------- export options -----------------------------------------
csvData :any;

csvOptions = {
  fieldSeparator: ',',
  quoteStrings: '"',
  decimalseparator: '.',
  showLabels: true,
  showTitle: true,
  title: 'Fitts Raw Data',
  useBom: true,
  noDownload: false,
  headers: ["Distance from center", "Size", "Direction", "Times", "Errors", "Distance Travelled"]
};
// --------------------------------------------------------------------------------------------

  // ---------------------- "Array" Set ----------------------------------------
  smallLeftShort = 10;
  smallRightShort = 10;
  smallLeftLo = 10;
  smallRightLo = 10;
  smallLeftHi = 10;
  smallRightHi = 10;
  smallLeftLong = 10;
  smallRightLong = 10;
  loLeftShort = 10;
  loRightShort = 10;
  loLeftLo = 10;
  loRightLo = 10;
  loLeftHi = 10;
  loRightHi = 10;
  loLeftLong = 10;
  loRightLong = 10;
  hiLeftShort = 10;
  hiRightShort = 10;
  hiLeftLo = 10;
  hiRightLo = 10;
  hiLeftHi = 10;
  hiRightHi = 10;
  hiLeftLong = 10;
  hiRightLong = 10;
  largeLeftShort = 10;
  largeRightShort = 10;
  largeLeftLo = 10;
  largeRightLo = 10;
  largeLeftHi = 10;
  largeRightHi = 10;
  largeLeftLong = 10;
  largeRightLong = 10;
  // -------------------------------------------------------------
  
  curentPickId = 0;
  totalTaken = 0;
  errorCount = 0;
  distanceBetween = 0;
  oldCursorX = 0;
  oldCursorY = 0;
  newCursorX = 0;
  newCursorY = 0;

  testClicks() {
    document.getElementById("centerize").style.visibility = "hidden";
    document.getElementById("centerizes").style.visibility = "hidden";
    var initialprog = 0.0031152648 * this.totalTaken;
    var prog = initialprog.toString();
    document.getElementById("progress").setAttribute("value", prog);

   var pickId = Math.floor(Math.random() * 31) + 1;
    var circleId = pickId.toString();
    this.curentPickId = pickId;
    if (this.totalTaken >= 3) {
      this.router.navigate(['/Finish']);
      this.downloadCSV();
    }
    else if (pickId == 1) {
      if (this.smallLeftShort > 0) {
        console.log(this.csvData);
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 2) {
      if (this.smallRightShort > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 3) {
      if (this.smallLeftLo > 0) {
        // this.csvData = [{"Distance_From_Center":"480", "Size":"120", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 4) {
      if (this.smallRightLo > 0) {
        // this.csvData = [{"Distance_From_Center":"480", "Size":"120", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 5) {
      if (this.smallLeftHi > 0) {
        // this.csvData = [{"Distance_From_Center":"600", "Size":"120", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 6) {
      if (this.smallRightHi > 0) {
        // this.csvData = [{"Distance_From_Center":"600", "Size":"120", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 7) {
      if (this.smallLeftLong > 0) {
        // this.csvData = [{"Distance_From_Center":"720", "Size":"120", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 8) {
      if (this.smallRightLong > 0) {
        // this.csvData = [{"Distance_From_Center":"720", "Size":"120", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 9) {
      if (this.loLeftShort > 0) {
        // this.csvData = [{"Distance_From_Center":"360", "Size":"240", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 10) {
      if (this.loRightShort > 0) {
        // this.csvData = [{"Distance_From_Center":"360", "Size":"240", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 11) {
      if (this.loLeftLo > 0) {
        // this.csvData = [{"Distance_From_Center":"480", "Size":"240", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 12) {
      if (this.loRightLo > 0) {
        // this.csvData = [{"Distance_From_Center":"480", "Size":"240", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 13) {
      if (this.loLeftHi > 0) {
        // this.csvData = [{"Distance_From_Center":"600", "Size":"240", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 14) {
      if (this.loRightHi > 0) {
        // this.csvData = [{"Distance_From_Center":"600", "Size":"240", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 15) {
      if (this.loLeftLong > 0) {
        // this.csvData = [{"Distance_From_Center":"720", "Size":"240", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 16) {
      if (this.loRightLong > 0) {
        // this.csvData = [{"Distance_From_Center":"720", "Size":"240", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 17) {
      if (this.hiLeftShort > 0) {
        // this.csvData = [{"Distance_From_Center":"360", "Size":"360", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 18) {
      if (this.hiRightShort > 0) {
        // this.csvData = [{"Distance_From_Center":"360", "Size":"360", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 19) {
      if (this.hiLeftLo > 0) {
        // this.csvData = [{"Distance_From_Center":"480", "Size":"360", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 20) {
      if (this.hiRightLo > 0) {
        // this.csvData = [{"Distance_From_Center":"480", "Size":"360", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 21) {
      if (this.hiLeftHi > 0) {
        // this.csvData = [{"Distance_From_Center":"600", "Size":"360", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 22) {
      if (this.hiRightHi > 0) {
        // this.csvData = [{"Distance_From_Center":"600", "Size":"360", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 23) {
      if (this.hiLeftLong > 0) {
        // this.csvData = [{"Distance_From_Center":"720", "Size":"360", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 24) {
      if (this.hiRightLong > 0) {
        // this.csvData = [{"Distance_From_Center":"720", "Size":"360", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 25) {
      if (this.largeLeftShort > 0) {
        // this.csvData = [{"Distance_From_Center":"360", "Size":"480", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 26) {
      if (this.largeRightShort > 0) {
        // this.csvData = [{"Distance_From_Center":"360", "Size":"480", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 27) {
      if (this.largeLeftLo > 0) {
        // this.csvData = [{"Distance_From_Center":"480", "Size":"480", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 28) {
      if (this.largeRightLo > 0) {
        // this.csvData = [{"Distance_From_Center":"480", "Size":"480", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 29) {
      if (this.largeLeftHi > 0) {
        // this.csvData = [{"Distance_From_Center":"600", "Size":"480", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 30) {
      if (this.largeRightHi > 0) {
        // this.csvData = [{"Distance_From_Center":"600", "Size":"480", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 31) {
      if (this.largeLeftLong > 0) {
        // this.csvData = [{"Distance_From_Center":"720", "Size":"480", "Direction":"Left"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
    else if (pickId == 32) {
      if (this.largeRightLong > 0) {
        // this.csvData = [{"Distance_From_Center":"720", "Size":"480", "Direction":"Right"}];
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible"; this.startTimer()
      }
      else { this.testClicks(); }
    }
  };


  recalibrate() {
    // this.errorCount -= 1;
    this.clearTimer();

    document.getElementById("centerizes").style.visibility = "visible";
    document.getElementById("centerize").style.visibility = "visible";
    document.getElementById("1").style.visibility = "hidden";
    document.getElementById("2").style.visibility = "hidden";
    document.getElementById("3").style.visibility = "hidden";
    document.getElementById("4").style.visibility = "hidden";
    document.getElementById("5").style.visibility = "hidden";
    document.getElementById("6").style.visibility = "hidden";
    document.getElementById("7").style.visibility = "hidden";
    document.getElementById("8").style.visibility = "hidden";
    document.getElementById("9").style.visibility = "hidden";
    document.getElementById("10").style.visibility = "hidden";
    document.getElementById("11").style.visibility = "hidden";
    document.getElementById("12").style.visibility = "hidden";
    document.getElementById("13").style.visibility = "hidden";
    document.getElementById("14").style.visibility = "hidden";
    document.getElementById("15").style.visibility = "hidden";
    document.getElementById("16").style.visibility = "hidden";
    document.getElementById("17").style.visibility = "hidden";
    document.getElementById("18").style.visibility = "hidden";
    document.getElementById("19").style.visibility = "hidden";
    document.getElementById("20").style.visibility = "hidden";
    document.getElementById("21").style.visibility = "hidden";
    document.getElementById("22").style.visibility = "hidden";
    document.getElementById("23").style.visibility = "hidden";
    document.getElementById("24").style.visibility = "hidden";
    document.getElementById("25").style.visibility = "hidden";
    document.getElementById("26").style.visibility = "hidden";
    document.getElementById("27").style.visibility = "hidden";
    document.getElementById("28").style.visibility = "hidden";
    document.getElementById("29").style.visibility = "hidden";
    document.getElementById("30").style.visibility = "hidden";
    document.getElementById("31").style.visibility = "hidden";
    document.getElementById("32").style.visibility = "hidden";
  }

  startTimer() {
    var theCursorX;
    var theCursorY;
    function getCoords(e){
      theCursorX = e.pageX;
      theCursorY = e.pageY;
    }
    this.oldCursorX = theCursorX;
    this.oldCursorY = theCursorY;
    this.running = !this.running;
    if (this.running) {
      const startTime = Date.now() - (this.counter || 0);
      this.timerRef = setInterval(() => {
        this.counter = Date.now() - startTime;
      });
    } else {
      clearInterval(this.timerRef);
    }
  }

  clearTimer() {
    if (this.errorCount >= 2) {
    this.errorCount -= 2;}
    var theCursorX;
    var theCursorY;
    function getCoords(e){
      theCursorX = e.pageX;
      theCursorY = e.pageY;
    }
    this.newCursorX = theCursorX;
    this.newCursorY = theCursorY;
    this.distanceBetween = Math.sqrt((this.newCursorX - this.oldCursorX)*(this.newCursorX - this.oldCursorX) + (this.newCursorY - this.oldCursorY) * (this.newCursorY - this.oldCursorY));
    if (this.curentPickId == 1) {
      this.csvData.push({"Distance_From_Center":"360", "Size":"120", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 2) {
        
      this.csvData.push({"Distance_From_Center":"360", "Size":"120", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 3) {
      this.csvData.push({"Distance_From_Center":"480", "Size":"120", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 4) {
      this.csvData.push({"Distance_From_Center":"480", "Size":"120", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 5) {
      this.csvData.push({"Distance_From_Center":"600", "Size":"120", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 6) {
      this.csvData.push({"Distance_From_Center":"600", "Size":"120", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 7) {
      this.csvData.push({"Distance_From_Center":"720", "Size":"120", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 8) {
      this.csvData.push({"Distance_From_Center":"720", "Size":"120", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 9) {
      this.csvData.push({"Distance_From_Center":"360", "Size":"240", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 10) {
      this.csvData.push({"Distance_From_Center":"360", "Size":"240", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 11) {
      this.csvData.push({"Distance_From_Center":"480", "Size":"240", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 12) {
      this.csvData.push({"Distance_From_Center":"480", "Size":"240", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 13) {
      this.csvData.push({"Distance_From_Center":"600", "Size":"240", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 14) {
      this.csvData.push({"Distance_From_Center":"600", "Size":"240", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 15) {
      this.csvData.push({"Distance_From_Center":"720", "Size":"240", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 16) {
      this.csvData.push({"Distance_From_Center":"720", "Size":"240", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 17) {
      this.csvData.push({"Distance_From_Center":"360", "Size":"360", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 18) {
      this.csvData.push({"Distance_From_Center":"360", "Size":"360", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 19) {
      this.csvData.push({"Distance_From_Center":"480", "Size":"360", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 20) {
      this.csvData.push({"Distance_From_Center":"480", "Size":"360", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 21) {
      this.csvData.push({"Distance_From_Center":"600", "Size":"360", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 22) {
      this.csvData.push({"Distance_From_Center":"600", "Size":"360", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 23) {
      this.csvData.push({"Distance_From_Center":"720", "Size":"360", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 24) {
      this.csvData.push({"Distance_From_Center":"720", "Size":"360", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 25) {
      this.csvData.push({"Distance_From_Center":"360", "Size":"480", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 26) {
      this.csvData.push({"Distance_From_Center":"360", "Size":"480", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 27) {
      this.csvData.push({"Distance_From_Center":"480", "Size":"480", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 28) {
      this.csvData.push({"Distance_From_Center":"480", "Size":"480", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 29) {
      this.csvData.push({"Distance_From_Center":"600", "Size":"480", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 30) {
      this.csvData.push({"Distance_From_Center":"600", "Size":"480", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 31) {
      this.csvData.push({"Distance_From_Center":"720", "Size":"480", "Direction":"Left", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    else if (this.curentPickId == 32) {
      this.csvData.push({"Distance_From_Center":"720", "Size":"480", "Direction":"Right", "Times":this.counter, "Errors":this.errorCount, "Distance_Travelled":this.distanceBetween});
    }
    
    this.errorCount = 0;
    this.distanceBetween = 0;
    this.running = false;
    this.counter = undefined;
    clearInterval(this.timerRef);
  }

  ngOnDestroy() {
    clearInterval(this.timerRef);
  }

  errorClick() {
    this.errorCount += 1;
  }

  downloadCSV() {
    new AngularCsv(this.csvData, "Fitts Raw Data", this.csvOptions);
  }

  ngOnInit() { 
    this.csvData = [];
  }

}
