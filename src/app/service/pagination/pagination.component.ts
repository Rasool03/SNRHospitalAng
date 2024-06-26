import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageChange = new EventEmitter<number>();
  pages:number[]=[]
  constructor() { }
  // *ngFor="let page of Array.from({ length: totalPages }, (_, index) => index + 1)"
  ngOnInit(): void {
 this.pages=Array.from({ length: this.totalPages }, (_, index) => index + 1)

  }
  prevPage() {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }
  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }
  pageClicked(page:number){
    this.pageChange.emit(page)
  }
}
