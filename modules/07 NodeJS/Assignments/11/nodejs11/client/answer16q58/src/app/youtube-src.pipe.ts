import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'youtubeSrc'
})
export class YoutubeSrcPipe implements PipeTransform {
  constructor(private dom: DomSanitizer) {}
  transform(url: string ): any {
    return this.dom.bypassSecurityTrustResourceUrl(url);
  }
}
