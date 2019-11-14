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

testClicks() {
  var pickId = Math.floor(Math.random() * 2) + 1;

  var i;
  for (i = 0; i < 5; i++) {
    if (pickId == this.circleDatabase.ID) {
      if (this.circleDatabase.Amount > 0) {
      //Generate circle
      this.circleDatabase.Amount -= 1;
      }
      else {
        this.testClicks();
      }
      
    }
    else {
      this.testClicks();
    }
}
//Test is completed
this.router.navigate(['/FittsTest2']);
}

recalibrate() {
  document.getElementById("centerize").hidden = false;
  document.getElementById("center").hidden = false;
}

  ngOnInit() {}

}
