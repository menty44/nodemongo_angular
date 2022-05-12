import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

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

  delete(id: any) {
    const self = this;
    const config = {
      method: 'delete',
      url: `http://localhost:3000/api/delete/${id}`,
      headers: {}
    };

    // @ts-ignore
    axios(config)
      .then(function (response) {
        self.ngOnInit()
      })
      .catch(function (error) {
        console.log(error);
      });

  }
}
