import { GraphQLList } from 'graphql'
import { providerType } from '../TypeDefs/provider'
import {provider} from '../../Entities/providers'


export const GET_ALL_PROVIDER ={
type: new GraphQLList (providerType),
resolve() {
return provider.find();
},
};
























































