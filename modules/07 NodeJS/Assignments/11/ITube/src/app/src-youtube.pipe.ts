import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'srcYoutube'
})
export class SrcYoutubePipe implements PipeTransform {
constructor (private dom : DomSanitizer){

}
transform(value: any, args?: any): any {
  return this.dom.bypassSecurityTrustResourceUrl(value);
}

}