import { Component, OnInit } from '@angular/core';

import * as Highcharts from 'highcharts';
import { ChartdataService } from '../chartdata.service';

@Component({
  selector: 'app-bar',
  templateUrl: './bar.component.html',
  styleUrls: ['./bar.component.scss']
})
export class BarComponent implements OnInit {
  Highcharts = Highcharts; // required
  chartConstructor = 'chart'; // optional string, defaults to 'chart'
  chartOptions ={
     chart: {
      type: "bar"
    },
    title: {
      text: 'Bar Chart'
    },
    tooltip: {
      formatter: function() {
        return 'x: ' +  this.x +   '  y: ' + this.y;
      }
    },
    labels: {
      enabled:true,
      items:[{html:"dsfd"},{style: {
        left: '100px',
        top: '100px'}
    }],
        format: "erer km"
      },
    series: [{
      name:'dom',
      data: []
    },{
      name:'dow',
      data: []
    },
    {
      name:'hour',
      data: []
    },{
      name:'SumHourly',
      data: []
    }]
  }// required
  chartCallback = function (chart) { return null; } // optional function, defaults to null

  runOutsideAngularFlag = false;
  chartdata: any;
  constructor(private chartservice:ChartdataService) { }

  ngOnInit(): void {
    this.chartservice.chartdata.subscribe(data=>{
      this.chartdata=data;
      this.chartdata.forEach(data=>{
        this.chartOptions.series[0].data.push(data.dom);
        this.chartOptions.series[1].data.push(data.dow);
        this.chartOptions.series[2].data.push(data.hour);
        this.chartOptions.series[3].data.push(data.SumHourly);
      })
    })
  }
  }


