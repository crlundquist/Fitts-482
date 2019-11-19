import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-fitts-testreal',
  templateUrl: './fitts-testreal.component.html',
  styleUrls: ['./fitts-testreal.component.scss'],
})
export class FittsTestrealComponent implements OnInit {

  public circleDatabase: any;

  constructor(private router: Router, private dataService: DataService) { }



  totalTaken = 0;
  // ---------------------- Array Set ----------------------------------------
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

  testClicks() {
    document.getElementById("centerize").style.visibility = "hidden";
    document.getElementById("centerizes").style.visibility = "hidden";
    var initialprog = 0.0031152648 * this.totalTaken;
    var prog = initialprog.toString();
    document.getElementById("progress").setAttribute("value", prog);

    var pickId = Math.floor(Math.random() * 31) + 1;
    var circleId = pickId.toString();
    if (this.totalTaken >= 320) {
      this.router.navigate(['/Finish']);
    }
    else if (pickId == 1) {
      if (this.smallLeftShort > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 2) {
      if (this.smallRightShort > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 3) {
      if (this.smallLeftLo > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 4) {
      if (this.smallRightLo > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 5) {
      if (this.smallLeftHi > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 6) {
      if (this.smallRightHi > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 7) {
      if (this.smallLeftLong > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 8) {
      if (this.smallRightLong > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 9) {
      if (this.loLeftShort > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 10) {
      if (this.loRightShort > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 11) {
      if (this.loLeftLo > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 12) {
      if (this.loRightLo > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 13) {
      if (this.loLeftHi > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 14) {
      if (this.loRightHi > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 15) {
      if (this.loLeftLong > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 16) {
      if (this.loRightLong > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 17) {
      if (this.hiLeftShort > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 18) {
      if (this.hiRightShort > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 19) {
      if (this.hiLeftLo > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 20) {
      if (this.hiRightLo > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 21) {
      if (this.hiLeftHi > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 22) {
      if (this.hiRightHi > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 23) {
      if (this.hiLeftLong > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 24) {
      if (this.hiRightLong > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 25) {
      if (this.largeLeftShort > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 26) {
      if (this.largeRightShort > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 27) {
      if (this.largeLeftLo > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 28) {
      if (this.largeRightLo > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 29) {
      if (this.largeLeftHi > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 30) {
      if (this.largeRightHi > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 31) {
      if (this.largeLeftLong > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
    else if (pickId == 32) {
      if (this.largeRightLong > 0) {
        this.totalTaken += 1;
        document.getElementById(circleId).style.visibility = "visible";
      }
      else { this.testClicks(); }
    }
  };


  recalibrate() {
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

  ngOnInit() { }

}
