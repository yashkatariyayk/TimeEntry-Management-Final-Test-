import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TimeService } from 'src/app/service/time.service';
import Time from './time';




@Component({
  selector: 'app-add-edit-time',
  templateUrl: './add-edit-time.component.html',
  styleUrls: ['./add-edit-time.component.scss']
})
export class AddEditTimeComponent implements OnInit {


  form: FormGroup;
  Time = [];
  times: Time[];
  time: Time;
  time1 = { hour: 13, minute: 30 };


  constructor(
    public formbuilder: FormBuilder,
    public route: ActivatedRoute,
    public timeService: TimeService

  ) {
    this.createForm();


  }

  createForm() {
    // Reactive Form
    this.form = this.formbuilder.group({
      TimeIn: ['', Validators.required],
      TimeOut: ['', Validators.required]
    })
  }

  ngOnInit() {
    this.route.params.subscribe(params => { });
    this.time = new Time();

    this.getId();
  }

  addTime(time) {
    this.timeService.addTime(time);
  }

  getId() {
    this.route.params.subscribe(params => {
      this.timeService
        .editTime(params["id"])
        .subscribe((res: Time) => {
          if (res) {
            this.time = res;
          } else {
            this.time = new Time();
          }
        });

    });
  }

}


