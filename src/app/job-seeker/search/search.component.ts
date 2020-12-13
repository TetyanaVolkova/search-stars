import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  jobs = [];
  moreDetails = false;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.httpService.getJobs(null)
    .subscribe((jobs) => {
      this.jobs = jobs['jobs'];
      console.log(this.jobs)
    })
  }

  onSubmit(myForm) {
    this.httpService.getJobs(myForm.form.controls.search.value)
    .subscribe((jobs) => {
      this.jobs = jobs['jobs'];
      console.log(this.jobs)
    })

    console.log(myForm.form.controls.search.value);
    myForm.form.controls.search.setValue('');
  }

  onMoreDetails(job) {
    console.log(job.description);
    this.moreDetails = !this.moreDetails;
    const description = job.description;
    if(this.moreDetails) {
      document.getElementById(job.id).innerHTML = description;
    } else {
      document.getElementById(job.id).innerHTML = '';
    }
  }

}
