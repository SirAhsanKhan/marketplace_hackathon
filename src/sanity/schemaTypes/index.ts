import product from "./product";
import review from './reviwes';
import orders from './';

import { SchemaTypeDefinition } from 'sanity';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [product, review, orders] 
};
