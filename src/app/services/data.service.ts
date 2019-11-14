import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public circleDatabase: any = [];

  constructor(private router: Router) { 
    this.circleDatabase = [
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 1,
        Size: 120,
        Direction: "left",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 2,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 3,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 4,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 5,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 6,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 7,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 8,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 9,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 10,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 11,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 12,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 13,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 14,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 15,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 16,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 17,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 18,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 19,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 20,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 21,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 22,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 23,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 24,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 25,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 26,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 27,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 28,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 29,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 30,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 31,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
      {
        Icon: "https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-circle-filled-512.png",
        Distance: 120,
        ID: 32,
        Size: 120,
        Direction: "right",
        Amount: 10,
      },
    ];
  }

  

  pickCircleDatabase() {
    var pickId = Math.floor(Math.random() * 32) + 1;

    var i;
    for (i = 0; i < 320; i++) {
      if (pickId == this.circleDatabase.ID) {
        if (this.circleDatabase.Amount > 0) {
          //Generate circle
          this.circleDatabase.Amount -= 1;
          }
          else {
            this.pickCircleDatabase();
          }
      }
      else {
        this.router.navigate(['/Finish']);
        //Test is completed
      }
    }
  }

  testPick() {
    var pickId = Math.floor(Math.random() * 2) + 1;

    var i;
    for (i = 0; i < 5; i++) {
      if (pickId == this.circleDatabase.ID) {
        if (this.circleDatabase.Amount > 0) {
        //Generate circle
        this.circleDatabase.Amount -= 1;
        }
        else {
          this.testPick();
        }
        
      }
      else {
        this.router.navigate(['/FittsTest2']);
        //Test is completed
      }
  }
}}
