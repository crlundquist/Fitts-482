import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
      this.router.navigate(['/FittsTest2']);
    } else {

    }

  }
  // -------------------------------------------------------------------------------------------------

  ngOnInit() {}

}
