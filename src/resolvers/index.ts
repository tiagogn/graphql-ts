import {mergeResolvers} from "@graphql-tools/merge";
import {userResolvers} from "../resolvers/userResolver.js"
import {bookResolvers} from "../resolvers/bookResolver.js"
import {resolvers as scalarResolvers} from "graphql-scalars";

export const resolvers = mergeResolvers([scalarResolvers, userResolvers, bookResolvers])
