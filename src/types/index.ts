import { mergeTypeDefs } from "@graphql-tools/merge"
import {readFileSync} from "node:fs";
import {typeDefs as scalarTypeDefs} from "graphql-scalars";
const usertypeDef = readFileSync('./src/types/user.graphql', {encoding: "utf-8"});
const bookTypeDef = readFileSync('./src/types/book.graphql', {encoding: "utf-8"});
const genericTypeDefs = readFileSync('./src/types/generic.graphql', {encoding: "utf-8"});

export const typeDefs = mergeTypeDefs([scalarTypeDefs, genericTypeDefs, usertypeDef, bookTypeDef]);