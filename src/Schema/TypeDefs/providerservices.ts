import { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } from "graphql";

export const providerservicesType = new GraphQLObjectType({
    name: "providerservices",
    fields: () => ({
        serviceid: { type: GraphQLID},
        providerid: {type: GraphQLInt},
        cost: {type: GraphQLString},
        description: {type: GraphQLString},
        service: {type: GraphQLString},
    })
})
