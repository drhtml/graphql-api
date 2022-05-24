import { GraphQLID, GraphQLString } from "graphql";
import { providerType } from "../TypeDefs/provider";
import {provider} from "../../Entities/providers";
import { providerservicesType } from "../TypeDefs/providerservices";

export const CREATE_PROVIDER = {
    type:providerType,
    args:{
        providerid: { type:GraphQLID},
        providername: {type: GraphQLString}
    },
   async resolve(parent: any, args: any) {
const {name, username, password} = args;
await provider.insert({});
return args;
    },
};

export const DELETE_PROVIDER = {
    type: providerType,
    args: {
        id: {type: GraphQLID},
    },
    async resolve(parent: any, args: any){
        const id = args.id
        await provider.delete(id)
    },
};