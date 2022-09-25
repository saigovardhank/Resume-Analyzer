import { Component, OnInit } from '@angular/core';
import {TooltipPosition} from '@angular/material/tooltip';

@Component({
  selector: 'app-analysis-report',
  templateUrl: './analysis-report.component.html',
  styleUrls: ['./analysis-report.component.css']
})
export class AnalysisReportComponent implements OnInit {
  positionOptions: TooltipPosition[] = ['below', 'above', 'left', 'right'];
  skills: any = [
    {
      key: 'java',
      name: 'Java',
      value: 40
    },
    {
      key: 'python',
      name: 'Python',
      value: 90
    },
    {
      key: 'cplusplus',
      name: 'C++',
      value: 40
    }
  ];
  links: any = [
    {
      key: 'javaBasics',
      url: "http://google.com",
      topic: "java"
    },
    {
      key: 'pythonBasics',
      url: "http://google.com",
      topic: "Basics of python"
    },
    {
      key: 'cBasics',
      url: "http://google.com",
      topic: "Intro to coding language"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
