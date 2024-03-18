import { Component, inject } from '@angular/core';
import { BookService } from '../../book.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../../Book';
import { MatChipsModule } from '@angular/material/chips'
import { MatCardModule } from '@angular/material/card'


@Component({
  selector: 'app-details',
  standalone: true,
  imports: [MatChipsModule, MatCardModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  sericeBook = inject(BookService)
  activatedRouter = inject(ActivatedRoute)

  book:Book = {
    id:0,
    title: "string",
    description: "string",
    categoryId: 0,
    category:{
        id:0,
        name: "string"
    }
  }

  ngOnInit() {
    this.sericeBook.getBookById(this.activatedRouter.snapshot.params["id"]).subscribe(result => {
      this.book = result
    })
  }
}
