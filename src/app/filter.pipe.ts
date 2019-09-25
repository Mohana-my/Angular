import { Pipe, PipeTransform, ComponentFactoryResolver } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employee: any, search:string): any { 
    
    if(!employee || !search)
    {
      return employee;
    }
    return ( employee.filter(employee => employee.name.toLowerCase().indexOf(search.toLowerCase()) != -1));
  }

}
