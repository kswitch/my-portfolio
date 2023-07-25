import { MongoClient } from "mongodb"
import { NewMessage } from '../pages/api/contact'

export async function connectToMongoDB(username:string, password:string, databaseClusterURL:string) {
    return MongoClient.connect(`mongodb+srv://${username}:${password}@${databaseClusterURL}/?retryWrites=true&w=majority`)
}

export async function addMessageToMongoDB(client:MongoClient, database:string, collection:string, message:NewMessage) {
    return client.db(database).collection(collection).insertOne(message)
}