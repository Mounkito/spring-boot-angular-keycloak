import { Component, OnInit } from '@angular/core';
import { BilouService } from '../bilou.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  message : string = '';

  constructor(private bilouService: BilouService) { }

  ngOnInit(): void {
    this.bilouService.getUser().subscribe( m  => this.message = m.message);
  }

}
