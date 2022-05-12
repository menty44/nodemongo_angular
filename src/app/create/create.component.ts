import { Component, OnInit } from '@angular/core';
import axios from "axios";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

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

  constructor() { }

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

  doCreate(name: any, sacks: any, goals: any, tdown: any, ryards: any, age: any) {

    let self = this;
      axios.post(`http://localhost:3000/api/post`, {
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
