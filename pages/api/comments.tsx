import type { NextApiRequest, NextApiResponse } from 'next'
import { GraphQLClient, gql } from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;
const GRAPHCMS_TOKEN = process.env.GRAPHCMS_TOKEN

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    // connection GraphQLclient to GraphCMS
    const graphQLClient = new GraphQLClient(graphqlAPI, {
        headers: {
            authorization: `Bearer ${GRAPHCMS_TOKEN}`
        }
    })

    // Mutation query
    const query = gql` 
        mutation CreateComment($name:String! , $email:String! , $comment:String! , $slug:String!){
            createComment(data:{name:$name , email:$email , comment:$comment , post:{connect:{slug:$slug}}})  {id}   
        }
    `
    try {
        // sending request and query to GRAPHQLCLIENT and expecting res as return
        const result = await graphQLClient.request(query, req.body)
        return res.status(200).send(result)
    }
    catch (err) {
        console.log("Error", err)
        return res.status(500).send(err)
    }
}