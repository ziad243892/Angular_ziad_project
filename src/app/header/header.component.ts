import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userName = 'Ziad Abuzayyad';
  imageSourse = '../../assets/images/ziad.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
