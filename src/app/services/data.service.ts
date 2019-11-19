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
        Distance: 360,
        ID: 1,
        Size: 120,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 360,
        ID: 2,
        Size: 120,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 480,
        ID: 3,
        Size: 120,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 480,
        ID: 4,
        Size: 120,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 600,
        ID: 5,
        Size: 120,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 600,
        ID: 6,
        Size: 120,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 720,
        ID: 7,
        Size: 120,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 720,
        ID: 8,
        Size: 120,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 360,
        ID: 9,
        Size: 240,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 360,
        ID: 10,
        Size: 240,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 480,
        ID: 11,
        Size: 240,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 480,
        ID: 12,
        Size: 240,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 600,
        ID: 13,
        Size: 240,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 600,
        ID: 14,
        Size: 240,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 720,
        ID: 15,
        Size: 240,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 720,
        ID: 16,
        Size: 240,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 360,
        ID: 17,
        Size: 360,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 360,
        ID: 18,
        Size: 360,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 480,
        ID: 19,
        Size: 360,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 480,
        ID: 20,
        Size: 360,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 600,
        ID: 21,
        Size: 360,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 600,
        ID: 22,
        Size: 360,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 720,
        ID: 23,
        Size: 360,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 720,
        ID: 24,
        Size: 360,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 360,
        ID: 25,
        Size: 480,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 360,
        ID: 26,
        Size: 480,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 480,
        ID: 27,
        Size: 480,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 480,
        ID: 28,
        Size: 480,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 600,
        ID: 29,
        Size: 480,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 600,
        ID: 30,
        Size: 480,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 720,
        ID: 31,
        Size: 480,
        Direction: "left",
        Times: [],
        Errors: [], Traveled: [],
      },
      {
        Distance: 720,
        ID: 32,
        Size: 480,
        Direction: "right",
        Times: [],
        Errors: [], Traveled: [],
      },
    ];
  }

}
