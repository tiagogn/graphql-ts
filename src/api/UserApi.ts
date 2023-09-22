import { RESTDataSource } from "@apollo/datasource-rest";
import { User } from "../model/User";
import { ResponseEmpty } from "../dto/ResponseEmpty";

export class UserApi extends RESTDataSource {

    override baseURL = 'http://localhost:3000'

    async getUsers(): Promise<User[]> {
        return this.get<User[]>('/users');
    }

    async getUserById(id: number): Promise<User> {
        return this.get<User>(`/users/${id}`)
    }

    async addUser(user: User): Promise<User> {
        return this.post<User>('/users', { body: user });
    }

    async updateUser(id: number, user: User): Promise<User> {
        return this.put<User>(`/users/${id}`, { body: user });
    }

    async deleteUser(id: number): Promise<ResponseEmpty> {
        this.delete(`/users/${id}`);
        return { code: 200, message: "User was removed"};
    }
}