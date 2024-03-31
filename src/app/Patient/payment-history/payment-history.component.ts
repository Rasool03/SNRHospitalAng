import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-history',
  templateUrl: './payment-history.component.html',
  styleUrls: ['./payment-history.component.css']
})
export class PaymentHistoryComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  navigateBill(){
    this.router.navigate(['billDetails'])
  }
}
