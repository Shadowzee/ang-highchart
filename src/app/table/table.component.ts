import { Component, OnInit } from '@angular/core';
import { ChartdataService } from '../chartdata.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
chartdata;
  constructor(private chartservice:ChartdataService) { }

  ngOnInit(): void {
    this.chartservice.chartdata.subscribe(data=>{
      this.chartdata=data;
      // this.chartdata.forEach(data=>{
      //   this.chartOptions.series[0].data.push(data.dom);
      //   this.chartOptions.series[1].data.push(data.dow);
      //   this.chartOptions.series[2].data.push(data.hour);
      //   this.chartOptions.series[3].data.push(data.SumHourly);
      // })
    })
  }

}
