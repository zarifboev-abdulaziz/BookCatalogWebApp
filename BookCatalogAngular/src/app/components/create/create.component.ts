import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { BookService } from '../../book.service';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatSelectModule, FormsModule, MatButtonModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  router = inject(Router)
  bookService = inject(BookService)

  categories:any
  itemToCreate:any = {
    title:"",
    description:"",
    categoryId:0
  }

  selectedCategoryID:number = 0

  ngOnInit(){
    this.bookService.getAllCategories().subscribe(result => {
      this.categories = result
    })
  }

  onCreateBtn(){
    this.itemToCreate.categoryId = this.selectedCategoryID
    this.bookService.createBook(this.itemToCreate).subscribe(result  => {
      alert("Created")
      this.router.navigateByUrl("home")
    })
  }
}
