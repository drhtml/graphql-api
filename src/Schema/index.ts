import {GraphQLObjectType, GraphQLSchema} from "graphql";
import { CREATE_PROVIDER, DELETE_PROVIDER } from "./Mutations/provider";
import { CREATE_PROVIDERSERVICES, DELETE_PROVIDERSERVICES } from "./Mutations/providerservices";
import { GET_ALL_PROVIDER } from "./Queries/provider";
import { GET_ALL_PROVIDERSERVICES } from "./Queries/providerservices";


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        getAllUsers:GET_ALL_PROVIDER,
       getAll: GET_ALL_PROVIDERSERVICES
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        createprovider: CREATE_PROVIDER,
        deleteprovider: DELETE_PROVIDER,
        createproviderservices: CREATE_PROVIDERSERVICES,
        deleteproviderservices: DELETE_PROVIDERSERVICES
       

    },
});
export const schema = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
})