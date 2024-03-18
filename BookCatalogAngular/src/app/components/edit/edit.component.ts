import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BookService } from '../../book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Book } from '../../Book';


function findIndexById(jsonArray: any[], indexToFind: number): number {
  return jsonArray.findIndex((item) => item.id === indexToFind)
}


@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatButtonModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css'
})
export class EditComponent {
  bookService = inject(BookService)
  activatedRoute = inject(ActivatedRoute)
  router = inject(Router)

  editBook: Book = {
    id:0,
    title: "string",
    description: "string",
    categoryId: 0,
    category:{
        id:0,
        name: "string"
    }
  };

  categoryObject: any;
  selected: any;
  categoryId: number=0;

  ngOnInit(){
    this.bookService.getBookById(this.activatedRoute.snapshot.params['id']).subscribe(result => {
      this.editBook = result;
      this.selected = this.editBook.categoryId
    });

    this.bookService.getAllCategories().subscribe((result) => {
      this.categoryObject = result
    });
  }

  toHome(){
    this.router.navigateByUrl("home")
  }

  edit(){
    this.editBook.categoryId = this.categoryId
    this.editBook.category = this.categoryObject[findIndexById(this.categoryObject, this.categoryId)]

    this.bookService.editBook(this.editBook).subscribe(res => {
      alert("Book is changed")
      this.router.navigateByUrl("home")
    })
  }

}
