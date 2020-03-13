import { Component, OnInit } from '@angular/core';
import { TimeService } from 'src/app/service/time.service';
import Time from '../add-edit-time/time';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-timelist',
  templateUrl: './timelist.component.html',
  styleUrls: ['./timelist.component.scss']
})
export class TimelistComponent implements OnInit {

  [x: string]: any;
  times: Time[] = [];
  FirstIn: string;
  LastIn: string;
  TimeIn: any;
  TimeOut: any;
  Diff: any;
  outTime: any;
  inTime: any;

  constructor(private timeService: TimeService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.getTime();
  }

  getTime() {
    this.outTimes = [];
    this.timeService.getTime().subscribe((data: Time[]) => {

      this.times = data;
      console.log(data);

      let outTimeTotal: number = 0;
      this.times.forEach(element => {

        let outTime = Date.parse("01/01/2020 " + element.TimeOut);
        let inTime = Date.parse("01/01/2020 " + element.TimeIn);

        let TimeIn = new Date(inTime);
        let TimeOut = new Date(outTime);
        let Diff: number = (TimeOut.getTime() - TimeIn.getTime());

        outTimeTotal += Diff;

        //let secDiff = Diff / 1000; //in s
        let minDiff = Diff / 60 / 1000; //in minutes
        let hDiff = Diff / 3600 / 1000; //in hours  
        let diff = this.msToTime(+Diff);
        element.TimeDiffrence = diff;
      });

      this.inTime = this.msToTime(outTimeTotal);
      this.FirstIn = data[0].TimeIn;
      this.LastIn = data[data.length - 1].TimeOut;

      let flTimeDiff = new Date(Date.parse("01/01/2020 " + this.LastIn)).getTime() - new Date(Date.parse("01/01/2020 " + this.FirstIn)).getTime();
      this.outTime = this.msToTime(flTimeDiff - outTimeTotal);
    });
  }

  //Delete TimeEntry
  deleteTime(id) {
    if (confirm("Are you sure to delete ")) {
      console.log("Implement delete functionality here");
    }
    this.timeService.deleteTime(id).subscribe(newData => {
      this.data = newData;
      console.log(this.data);
      this.getTime();
    });
  }

  msToTime(duration: number) {
    let milliseconds = (duration % 1000) / 100,
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);

    hours = (hours < 10) ? +("0" + hours) : hours;
    minutes = (minutes < 10) ? +("0" + minutes) : minutes;

    return hours + ":" + minutes;
  }

}
