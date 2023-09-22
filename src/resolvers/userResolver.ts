import { ResponseEmpty } from "../dto/ResponseEmpty";
import { User } from "../model/User";

export const userResolvers = {
    Query: {
        users: async (_, args, {apis}): Promise<User[]>  => {
            return await apis.userApi.getUsers();
        },
        userById: async (_, {id}, {apis}): Promise<User> => {
            return await apis.userApi.getUserById(id);
        }
    },
    Mutation: {
        addUser: async (_, {user}, {apis}): Promise<User> => {
            user["createdAt"] = new Date().toISOString();
            return await apis.userApi.addUser(user);
        },
        updateUser: async (_, {id, user}, {apis}): Promise<User> => {
            user["createdAt"] = new Date().toISOString();
            return await apis.userApi.updateUser(id, user);
        },
        deleteUser: async (_, {id}, {apis}): Promise<ResponseEmpty> => {
            return await apis.userApi.deleteUser(id);
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
};