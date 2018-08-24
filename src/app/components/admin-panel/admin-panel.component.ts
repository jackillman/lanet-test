import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.sass']
})
export class AdminPanelComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  backToMainPage(){
    this.router.navigate(['/'])
  }
}
