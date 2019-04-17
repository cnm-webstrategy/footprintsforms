import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-response-page',
  templateUrl: './response-page.component.html',
  styleUrls: ['./response-page.component.scss']
})
export class ResponsePageComponent implements OnInit {
  markup: any;

  constructor(private route: ActivatedRouteSnapshot ) { }

  ngOnInit() {
    // this.route.paramMap.pipe(
    //   switchMap(params => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.markup = params.get('markup');
    //   })
    // );
    // this.markup = this.route.snapshot.paramMap.get('markup')
    console.log(this.route.paramMap.get('id'))
  }

}
