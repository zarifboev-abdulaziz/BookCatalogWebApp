import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Book } from './Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  httpClient = inject(HttpClient)
  constructor() { }

  getAllBooks(){
    return this.httpClient.get<Book[]>("http://localhost:8000/api/Books")
  }

  getBookById(id:number){
    return this.httpClient.get<Book>("http://localhost:8000/api/Books/" + id)
  }

  getAllCategories(){
    return this.httpClient.get("http://localhost:8000/api/Categories")
  }

  createBook(item:any){
    return this.httpClient.post("http://localhost:8000/api/Books", item)
  }

  editBook(item:any){
    return this.httpClient.put("http://localhost:8000/api/Books/" + item.id, item)
  }

  deleteBook(id:number){
    return this.httpClient.delete("http://localhost:8000/api/Books/" + id)
  }
  // http://localhost:5169/api/ToDo/Delete/5
}
