import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../book.service';
import { Book } from '../../Book';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  router = inject(Router)
  bookService = inject(BookService)

  bookList:Book[] = [];

  ngOnInit(){
    this.bookService.getAllBooks().subscribe(result => {
      this.bookList = result
    })
  }

  displayedColumns: string[] = ['ID', 'Title', 'Description', 'Category Name', 'Actions'];


  EditClicked(Id:number){
    this.router.navigateByUrl("edit/" + Id)
  }

  DetailsClicked(Id:number){
    this.router.navigateByUrl("details/" + Id)

  }

  DeleteClicked(Id:number){
    this.router.navigateByUrl("delete/" + Id)
  }

}
