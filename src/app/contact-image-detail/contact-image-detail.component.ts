import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ndc-contact-image-detail',
  templateUrl: './contact-image-detail.component.html',
  styleUrls: ['./contact-image-detail.component.css']
})
export class ContactImageDetailComponent implements OnInit {
  avatar: any= {};
  constructor() { }

  ngOnInit(): void {

    this.avatar.url = 'https://i.9mobi.vn/cf/images/ba/2018/4/16/anh-avatar-dep-4.jpg';
  }

}
