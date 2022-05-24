import { GraphQLList } from 'graphql'

import {providerservices} from '../../Entities/providerservices'
import { providerservicesType } from '../TypeDefs/providerservices';


export const GET_ALL_PROVIDERSERVICES ={
type: new GraphQLList (providerservicesType),
resolve() {
return providerservices.find();
},
};