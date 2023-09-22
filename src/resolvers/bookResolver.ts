import { Book } from "../model/Book";

export const bookResolvers = {
    Query: {
        books: async (parent, args, {apis}): Promise<Book[]> => {
            return await apis.bookApi.getBooks();
        },
        bookById: async (parent, {id}, {apis}): Promise<Book> => {
            return await apis.bookApi.getBookById(id);
        } 
    },
    Mutation: {
        addBook: async (parent, {title}, {apis}): Promise<Book> => {
            return await apis.bookApi.addBook({id: 0, title: title});
        },
        updateBook: async (parent, {id, title}, {apis}): Promise<Book> => {
            return await apis.bookApi.updateBook( {id: id, title: title});
        },
        deleteBook: async (parent, {id}, {apis}): Promise<number> => {
            return await apis.bookApi.deleteBook(id);
        }
    },
    Response: {
        __resolveType(obj, context, info){
            if (obj.errors) {
                return 'ResponseError';
            }
            else {
                return 'ResponseEmpty';
            }
        }
    }
}