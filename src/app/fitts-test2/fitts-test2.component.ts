import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fitts-test2',
  templateUrl: './fitts-test2.component.html',
  styleUrls: ['./fitts-test2.component.scss'],
})
export class FittsTest2Component implements OnInit {

  constructor(private router: Router) { }

toTest() {
  this.router.navigate(['/FittsTestRun']);
}

toReal() {
  this.router.navigate(['/FittsTestReal']);
}

  ngOnInit() {}

}
