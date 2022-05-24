import { GraphQLID, GraphQLString } from "graphql";
import { providerservices } from "../../Entities/providerservices";
import { providerservicesType } from "../TypeDefs/providerservices";

export const CREATE_PROVIDERSERVICES = {
    type:providerservicesType,
    args:{
        serviceid: { type: GraphQLID},
        providerid: {type: GraphQLID},
        cost: {type: GraphQLString},
        description: {type: GraphQLString},
        service: {type: GraphQLString},
    },
    resolve(parent: any, args: any) {
const {serviceid, providerid, cost,description,service} = args;
return args;
    },
};

export const DELETE_PROVIDERSERVICES = {
    type: providerservicesType,
    args: {
        id: {type: GraphQLID},
    },
    async resolve(parent: any, args: any){
        const id = args.id
        await providerservices.delete(id)
    },
};