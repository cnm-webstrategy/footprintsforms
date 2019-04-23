import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SubmitService {

  constructor( private http: HttpClient,
               private router: Router ) { }

  submitForm( form: FormGroup, url ) {
    const body = new HttpParams({ fromObject: form.value});
    return this.http.post( url, body, {
      headers: new HttpHeaders()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('Accept', 'text/html, application/xhtml+xml, application/xml;q=0.9, */*;q=0.8'),
      responseType: 'text'
    }).subscribe(res => {

      // footprints returns a mess of an HTML fragment: over 600 lines of css it doesn't use,
      // and it DOESN'T EVEN CLOSE THE <BODY> TAG. This regex searches that pile of crap for
      // the actual message being returned, which is ONE FREAKING SENTENCE. That's from
      // 753 lines of code. This assumes the message will always be in a div with class `dialogMainContent`
      const strRemovedLinebreaks = res.replace(/(\r\n|\n|\r)/gm, '');
      const pattern = /[\s|\S]*<td class="dialogMainContent">([\s|\S]*)<\/td>[\s|\S]*/g;
      const filteredMessage = strRemovedLinebreaks.replace(pattern, '$1');

      // const bodyText = /<body>(.*?)<\/body>/g.exec(bodyMarkup);

      this.router.navigate(
        ['/response-page'],
        { queryParams: { markup: filteredMessage }}
      );
    }, error => console.error(error));
  }
}
