import {Component, NgZone, OnInit} from '@angular/core';
import axios from "axios";
import {Router} from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  constructor(private router: Router, private zone: NgZone) { }

  name: any;
  sacks: any;
  goals: any;
  tdown: any;
  ryards: any;
  age: any;

  highest_touch_down: any;
  highest_rushingyards: any;
  highest_sacks: any;
  players: any;
  least_rushingyards: any;

  ngOnInit(): void {

    let self = this;

    axios.get('http://localhost:3000/api/touchdowns')
      .then(function (response) {
        // handle success
        console.log(response.data);
        self.highest_touch_down = response.data[0];
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    axios.get('http://localhost:3000/api/rushingyards')
      .then(function (response1) {
        // handle success
        console.log(response1.data);
        self.highest_rushingyards = response1.data[0];
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    axios.get('http://localhost:3000/api/rushingyards/least')
      .then(function (response2) {
        // handle success
        console.log(response2.data);
        self.least_rushingyards = response2.data[0];
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    axios.get('http://localhost:3000/api/sacks')
      .then(function (response3) {
        // handle success
        console.log(response3.data);
        self.highest_sacks = response3.data[0];
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });

    axios.get('http://localhost:3000/api/getAll/goals/desc')
      .then(function (response4) {
        // handle success
        console.log(response4.data);
        self.players = response4.data;
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  doUpdate(name: any, sacks: any, goals: any, tdown: any, ryards: any, age: any) {

    let self = this;
   let id_str =  localStorage.getItem("id");
    if (id_str != null) {
      axios.patch(`http://localhost:3000/api/update/${id_str}`, {
        name: name,
        age: age,
        sacks: sacks,
        goals: goals,
        touchdown: tdown,
        rushing_yards: ryards
      })
        .then(function (response) {
          console.log(response);
          localStorage.clear();
          self.ngOnInit();
          window.location.reload();
        })
        .catch(function (error) {
          console.log(error);
        });

    }
  }
}
