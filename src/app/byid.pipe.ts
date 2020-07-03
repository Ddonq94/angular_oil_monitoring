import { Pipe, PipeTransform } from '@angular/core';
import { GlobalServiceService } from './global-service.service';

@Pipe({
  name: 'byid',
  pure: false
})
export class ByidPipe implements PipeTransform {

  constructor(

    public globalservice:GlobalServiceService,

    ) {}

  private res
  transform(value: any, node:any): any {
    // return node+value;
    this.globalservice.getNodeByID(value,node)
    .then(data => {

      console.log(data);

      this.res = data;

      if(this.res.status == "success"){

          return this.res.data[node].name ? this.res.data[node].name : 'Not Found'  ;

      }
      else{
        console.log(this.res);
      return 'Not Found';

      }

    },
    err=> {
      console.log(err);
      console.log('err');
      return null;

    })
    .catch(err=> {
      console.log(err);
      console.log('err');
      return null;


    })
    .finally(() => {

      return null;
    });
  }

}
