import { Component, OnInit } from '@angular/core';
import { BilouService } from '../bilou.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  message : string = '';

  constructor(private bilouService: BilouService) { }

  ngOnInit(): void {
    this.bilouService.getAdmin().subscribe( m  => this.message = m.message);
  }

}
