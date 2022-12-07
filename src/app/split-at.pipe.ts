import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitAt'
})
export class SplitAtPipe implements PipeTransform {

  transform(spliceHomePage:string,s:string):any {
    return spliceHomePage?.split(s).slice(0,1);
  }

}
