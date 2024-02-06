import { Component, OnInit } from '@angular/core';
import { IpServiceService } from '../service/ip-service.service';

@Component({
  selector: 'app-ip',
  templateUrl: './ip.component.html',
  styleUrls: ['./ip.component.css']
})
export class IpComponent implements OnInit {
  ip: string;

  constructor(private ipService: IpServiceService) { }

  ngOnInit(): void {
    this.ipService.getPublicIp().subscribe(data => {
      this.ip = data.ip;
    });
  }
}