import { Component, OnInit, AfterViewInit } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { GlobalServiceService } from '../../global-service.service';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { Subject } from 'rxjs';
import { NgbModal, NgbDateParserFormatter, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit, AfterViewInit  {

  radioModel: string = 'Month';

  // lineChart1
  public lineChart1Data: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Series A'
    }
  ];
  public lineChart1Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 40 - 5,
          max: 84 + 5,
        }
      }],
    },
    elements: {
      line: {
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart1Colours: Array<any> = [
    {
      backgroundColor: getStyle('--primary'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart1Legend = false;
  public lineChart1Type = 'line';

  // lineChart2
  public lineChart2Data: Array<any> = [
    {
      data: [1, 18, 9, 17, 34, 22, 11],
      label: 'Series A'
    }
  ];
  public lineChart2Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart2Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          color: 'transparent',
          zeroLineColor: 'transparent'
        },
        ticks: {
          fontSize: 2,
          fontColor: 'transparent',
        }

      }],
      yAxes: [{
        display: false,
        ticks: {
          display: false,
          min: 1 - 5,
          max: 34 + 5,
        }
      }],
    },
    elements: {
      line: {
        tension: 0.00001,
        borderWidth: 1
      },
      point: {
        radius: 4,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart2Colours: Array<any> = [
    { // grey
      backgroundColor: getStyle('--info'),
      borderColor: 'rgba(255,255,255,.55)'
    }
  ];
  public lineChart2Legend = false;
  public lineChart2Type = 'line';


  // lineChart3
  public lineChart3Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'Series A'
    }
  ];
  public lineChart3Labels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChart3Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false
      }],
      yAxes: [{
        display: false
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
      },
    },
    legend: {
      display: false
    }
  };
  public lineChart3Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.2)',
      borderColor: 'rgba(255,255,255,.55)',
    }
  ];
  public lineChart3Legend = false;
  public lineChart3Type = 'line';


  // barChart1
  public barChart1Data: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40, 78, 81, 80, 45, 34, 12, 40, 12, 40],
      label: 'Series A',
      barPercentage: 0.6,
    }
  ];
  public barChart1Labels: Array<any> = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16'];
  public barChart1Options: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false
      }]
    },
    legend: {
      display: false
    }
  };
  public barChart1Colours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.3)',
      borderWidth: 0
    }
  ];
  public barChart1Legend = false;
  public barChart1Type = 'bar';

  // mainChart

  public mainChartElements = 27;
  public mainChartData1: Array<number> = [];
  public mainChartData2: Array<number> = [];
  public mainChartData3: Array<number> = [];

  public mainChartData: Array<any> = [
    {
      data: this.mainChartData1,
      label: 'Current'
    },
    {
      data: this.mainChartData2,
      label: 'Previous'
    },
    {
      data: this.mainChartData3,
      label: 'BEP'
    }
  ];
  /* tslint:disable:max-line-length */
  public mainChartLabels: Array<any> = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Thursday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  /* tslint:enable:max-line-length */
  public mainChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips,
      intersect: true,
      mode: 'index',
      position: 'nearest',
      callbacks: {
        labelColor: function(tooltipItem, chart) {
          return { backgroundColor: chart.data.datasets[tooltipItem.datasetIndex].borderColor };
        }
      }
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        gridLines: {
          drawOnChartArea: false,
        },
        ticks: {
          callback: function(value: any) {
            return value;
          }
        }
      }],
      yAxes: [{
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 5,
          stepSize: Math.ceil(250 / 5),
          max: 250
        }
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: true
    }
  };
  public mainChartColours: Array<any> = [
    // { // brandInfo
    //   backgroundColor: hexToRgba(getStyle('--info'), 10),
    //   borderColor: getStyle('--info'),
    //   pointHoverBackgroundColor: '#fff'
    // },
    // { // brandSuccess
    //   backgroundColor: 'transparent',
    //   borderColor: getStyle('--success'),
    //   pointHoverBackgroundColor: '#fff'
    // },
    // { // brandDanger
    //   backgroundColor: 'transparent',
    //   borderColor: getStyle('--danger'),
    //   pointHoverBackgroundColor: '#fff',
    //   borderWidth: 1,
    //   borderDash: [8, 5]
    // }
  ];
  public mainChartLegend = false;
  public mainChartType = 'line';

  // social box charts

  public brandBoxChartData1: Array<any> = [
    {
      data: [65, 59, 84, 84, 51, 55, 40],
      label: 'Facebook'
    }
  ];
  public brandBoxChartData2: Array<any> = [
    {
      data: [1, 13, 9, 17, 34, 41, 38],
      label: 'Twitter'
    }
  ];
  public brandBoxChartData3: Array<any> = [
    {
      data: [78, 81, 80, 45, 34, 12, 40],
      label: 'LinkedIn'
    }
  ];
  public brandBoxChartData4: Array<any> = [
    {
      data: [35, 23, 56, 22, 97, 23, 64],
      label: 'Google+'
    }
  ];

  public brandBoxChartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public brandBoxChartOptions: any = {
    tooltips: {
      enabled: false,
      custom: CustomTooltips
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: false,
      }],
      yAxes: [{
        display: false,
      }]
    },
    elements: {
      line: {
        borderWidth: 2
      },
      point: {
        radius: 0,
        hitRadius: 10,
        hoverRadius: 4,
        hoverBorderWidth: 3,
      }
    },
    legend: {
      display: false
    }
  };
  public brandBoxChartColours: Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,.1)',
      borderColor: 'rgba(255,255,255,.55)',
      pointHoverBackgroundColor: '#fff'
    }
  ];
  public brandBoxChartLegend = false;
  public brandBoxChartType = 'line';

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// ================================================================================================

  ngAfterViewInit(): void{

    if(localStorage.getItem('sessionRefresh') != "true"){

      localStorage.setItem('sessionRefresh', "true");

      window.location.reload();
    }


  }


  maxdate = {year: new Date().getFullYear(), month: new Date().getMonth(), day: new Date().getDate()};

  datemodst:NgbDateStruct;
  datemodend:NgbDateStruct;




  constructor(
    private http: HttpClient,
    public router:Router,
    public globalservice:GlobalServiceService,
    // private modalService: NgbModal
    private modalService: NgbModal,
    private parserFormatter: NgbDateParserFormatter

    ) {


      let prodres = null;

      this.globalservice.search('products',this.searchProdTerm$)
      .subscribe(results => {
        prodres = results;

        if(prodres.data.products.data.length < 1){

          this.searchProdTerm$.next('');

        }
        else{
          // this.allStat = statres.data.stations.data;

          this.allProd = prodres.data.products.data;
        }

        console.log(this.allProd);
        console.log(prodres);
      });


    }


    allProd: Object;
    searchProdTerm$ = new Subject<string>();

prodd = [];
prod;
to;
from;
depdropdownSettings:IDropdownSettings = {};



onItemSelect(item: any,nodekey, inskey?) {
  console.log(item);

  if(nodekey == 'prod'){
    // this.depotd = item;
    this.prod = item.id;

    this.getAllNode('dashboard',this.prod,this.to, this.from);


  }

}


onItemDeSelect(item: any,nodekey, inskey?) {
  console.log(item);

  if(nodekey == 'prod'){
    // this.depotd = item;
    this.prod = "";

    this.getAllNode('dashboard',this.prod,this.to, this.from);


  }

}



onFilterChange(item: any,nodekey) {
  console.log(item);

  if(nodekey == 'prod'){
    this.searchProdTerm$.next(item);
  }


}

mindate;

toggle = false;

setfrom(ev){
  this.from = this.parserFormatter.format(this.datemodst);
  this.to = this.parserFormatter.format(this.datemodend);
  this.toggle = true;
  console.log(ev, this.from, this.to);
  this.mindate = this.datemodst;
  // this.getAllNode('dashboard',this.prod,this.to, this.from);

}


setto(ev){

    this.from = this.parserFormatter.format(this.datemodst);
    this.to = this.parserFormatter.format(this.datemodend);

    let dfrom = new Date(this.from);
    let dto = new Date(this.to);

    console.log(ev, this.from, this.to);

    if(dto >= dfrom){

      this.getAllNode('dashboard',this.prod,this.to, this.from);
    }
    else{
      alert('End Date must be later than Start Date');
    }


}



    res:any = null;
    dash:any = null;
  load:any = false;
  eload:any = false;

  inputSuccess:any = "";
  inputErr:any = "";


  // reg
  tvid;
  tvit;
  tvis;

  prodName;


cards:any = [];
charts:any = [];
events:any = [];
tabs:any = [];

bscolors:any = ['primary','secondary', 'warning', 'danger', 'info', 'success']

lcColours:any = [
  [{
    backgroundColor: getStyle('--primary'),
    borderColor: 'rgba(255,255,255,.55)'
  }],
  // [{
  //   backgroundColor: getStyle('--secondary'),
  //   borderColor: 'rgba(255,255,255,.55)'
  // }],
  // [{
  //   backgroundColor: getStyle('--warning'),
  //   borderColor: 'rgba(255,255,255,.55)'
  // }],
  // [{
  //   backgroundColor: getStyle('--danger'),
  //   borderColor: 'rgba(255,255,255,.55)'
  // }],
  // [{
  //   backgroundColor: getStyle('--info'),
  //   borderColor: 'rgba(255,255,255,.55)'
  // }],
  // [{
  //   backgroundColor: getStyle('--success'),
  //   borderColor: 'rgba(255,255,255,.55)'
  // }]
]



  type = JSON.parse(localStorage.getItem('sessionData')) ?  JSON.parse(localStorage.getItem('sessionData')).user.type : 'N/A';



  getAllNode(node,prod?,to?,from?){

    let param = {};

    if(prod){
      param['product_id'] = prod;
    }

    if(to){
      param['to'] = to;
    }

    if(from){
      param['from'] = from;
    }


    this.globalservice.getAllEntity(node,param)
    .then(data => {

      // this.load= false;
      console.log(this.lcColours);
      console.log(data);

      this.res = data;

      if(this.res.status == "success"){

        if(node=='products'){

          this.allProd = this.res.data.products.data;
        }
        else{


          this.dash = this.res.data.dashboard;

          this.prodName = this.dash.product_name;

          this.cards = this.dash.cards;
          this.charts = this.dash.charts;
          this.events = this.dash.events;
          this.tabs = this.dash.tables;

          console.log(Object.keys(this.charts[0].data)[0]);

          let labels = Object.keys(this.charts[0].data);
          this.mainChartLabels = Object.keys(this.charts[0].data[labels[0]]);

          this.mainChartData.length=0;
          // this.mainChartColours.length=0;

          labels.forEach((element,ind )=> {

            console.log(element);
            console.log(Object.values(this.charts[0].data[element]));

              this.mainChartColours.push({

                backgroundColor: hexToRgba(getStyle('--'+this.bscolors[ind]), 10),
                borderColor: getStyle('--'+this.bscolors[ind]),
                pointHoverBackgroundColor: '#fff'
              });



              this.mainChartData.push({

                data:Object.values(this.charts[0].data[element]),
                label:element.toUpperCase()

              });


          });

        }

      }
      else{
        alert(this.res.message);
      //   console.log("something failed in api", data);
      }

    },
    err=> {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');


    })
    .catch(err=> {
      this.inputErr = 'Something went wrong, Please Check Your Network or Contact Admin ';
      console.log(err);
      console.log('err');


    })
    .finally(() => {
      // this.eload= false;

    });

  }



  lineChart2Col(ind){

    return [
      { // grey
        backgroundColor: hexToRgba(getStyle('--'+this.bscolors[ind+1]), 5),
        borderColor: hexToRgba(getStyle('--'+this.bscolors[ind+1]), 10)
      }
    ];

  }




  ngOnInit(): void {

    this.getAllNode("products");

    this.getAllNode('dashboard');


    this.depdropdownSettings = {
      singleSelection: true,
      idField: 'id',
      textField: 'name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      closeDropDownOnSelection: true,
      allowSearchFilter: true,
      clearSearchFilter: true
    };


    // generate random values for mainChart
    for (let i = 0; i <= this.mainChartElements; i++) {
      this.mainChartData1.push(this.random(50, 200));
      this.mainChartData2.push(this.random(80, 100));
      this.mainChartData3.push(65);
    }
  }



}
