import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/http.service';
import { RadarChartComponent} from '../../radar-chart/radar-chart.component';

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
    this.moreDetails = !this.moreDetails;
    const description = job.description;
    if(this.moreDetails) {
      document.getElementById(job.id).innerHTML = description;
      document.getElementById('card-'+job.id).classList.add('more_details');
      document.getElementById('search_wrapper').classList.add('overflow_hidden');
    } else {
      document.getElementById(job.id).innerHTML = '';
      document.getElementById('card-'+job.id).classList.remove('more_details');
      document.getElementById('search_wrapper').classList.remove('overflow_hidden');
    }
  }

}
