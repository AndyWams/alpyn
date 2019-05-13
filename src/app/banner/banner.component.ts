import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function () {
      $('.go-up').on('click', function () {
        $('html, body').animate({
          scrollTop: $('.main-content').offset().top
        }, 1000);
      });
    });
  }

}
