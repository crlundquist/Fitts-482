import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from "../services/data.service";

@Component({
  selector: 'app-fitts-testrun',
  templateUrl: './fitts-testrun.component.html',
  styleUrls: ['./fitts-testrun.component.scss'],
})
export class FittsTestrunComponent implements OnInit {

public circleDatabase: any;

  constructor(private router: Router, private dataService: DataService) { }

toInst() {
  this.router.navigate(['/FittsTest2']);
}

toReal() {
  this.router.navigate(['/FittsTestReal']);
}

totalTaken = 0;
smallLeft = 10;
testClicks() {
  document.getElementById("centerize").style.visibility = "hidden";
  document.getElementById("centerizes").style.visibility = "hidden";

  var pickId = Math.floor(Math.random() * 2) + 1;
  
  var circleId = pickId.toString();
  if (this.totalTaken >= 320) {
    this.router.navigate(['/FittsTest2']);
  }
  else if (this.smallLeft > 0) {
  document.getElementById(circleId).style.visibility = "visible";
  };

  // circ.innerHTML = "circID= " pickId;

//   for (i = 0; i < 5; i++) {
//     if (pickId == this.circleDatabase.ID) {
//       if (this.circleDatabase.Amount > 0) {
//       //Generate circle
//       this.circleDatabase.Amount -= 1;
//       }
//       else {
//         this.testClicks();
//       }
      
//     }
//     else {
//       this.testClicks();
//     }
// }
//Test is completed
// this.router.navigate(['/FittsTest2']);
}

recalibrate() {
  document.getElementById("centerizes").style.visibility = "visible";
  document.getElementById("centerize").style.visibility = "visible";
  document.getElementById("1").style.visibility = "hidden";
  document.getElementById("2").style.visibility = "hidden";
}

  ngOnInit() {}

}
