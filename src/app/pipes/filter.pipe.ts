import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(allBlog:any[],searchTerm:String,propsName:string): any[] {
    const result:any[]=[]
    if(!allBlog||searchTerm==''||propsName=='')
    {
      return allBlog
    }
    allBlog.forEach((item:any)=>{
      if(item[propsName].trim().toLowerCase().includes(searchTerm.trim().toLowerCase()))
      {
        result.push(item)
      }
    })
    return result;
  }

}
