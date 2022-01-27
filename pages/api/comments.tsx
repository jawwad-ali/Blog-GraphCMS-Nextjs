import type { NextApiRequest, NextApiResponse } from 'next'
import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse 
) {
 
}