import {RESTDataSource} from "@apollo/datasource-rest";
import { Book } from "../model/Book"
import { ResponseEmpty } from "../dto/ResponseEmpty";
export class BooksApi extends RESTDataSource {
    
    override baseURL = 'http://localhost:3000'
    
    async getBooks(): Promise<Book[]> {
        return this.get<Book[]>('/book');
    }
    
    async getBookById(id: number): Promise<Book> {
        return this.get<Book>(`/book/${id}`)
    }

    async addBook(book: Book): Promise<Book> {
        return this.post<Book>('/book', {body: book});
    }

    async updateBook(book: Book): Promise<Book> {
        return this.put<Book>(`/book/${book.id}`, {body: book});
    }

    async deleteBook(id: number): Promise<ResponseEmpty> {
        this.delete<Book>(`/book/${id}`);
        return {code: 200, message: "Book was removed"};
    }
}