import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const providerType = new GraphQLObjectType({
    name: "provider",
    fields: () => ({
      
        providerid: {type: GraphQLID},
       providername: {type: GraphQLString},
       
    })
})