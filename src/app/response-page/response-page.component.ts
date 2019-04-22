import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';


@Component({
  selector: 'app-response-page',
  templateUrl: './response-page.component.html',
  styleUrls: ['./response-page.component.scss']
})
export class ResponsePageComponent implements OnInit {
  markup: any;

  constructor(private route: ActivatedRoute ) {

  }

  ngOnInit() {
    this.getParams();
  }

  getParams(): void {
    this.markup = this.route.snapshot.queryParamMap.get('markup');

  }
}
