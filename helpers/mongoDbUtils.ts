import { MongoClient } from "mongodb"

interface MessageDetailsProps extends Object {
    message_id: string
    date: number
    subject: string
    from: {
        name: string
        email: string
    }
    messageBody: string
    isRead: boolean
    isStarred: boolean
    isSpam: boolean
    isTrash: boolean
    isDraft: boolean
}

export async function connectToMongoDB(username:string, password:string, databaseClusterURL:string): Promise<MongoClient> {
    return MongoClient.connect(`mongodb+srv://${username}:${password}@${databaseClusterURL}/?retryWrites=true&w=majority`)
}

export async function addMessageToMongoDB(client:MongoClient, database:string, collection:string, message:MessageDetailsProps) {
    return client.db(database).collection(collection).insertOne(message)
}