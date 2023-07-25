// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { connectToMongoDB, addMessageToMongoDB } from '@/helpers/mongoDbUtils'

interface Data {
  message: string,
  value?: NewMessage
}

export interface NewMessage extends Object {
  name: string,
  email: string,
  message: string
}

export default async function Contact(req: NextApiRequest,res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    const {name, email, message} = req.body

    // Some Minor Server-side checks on the form values

    if (!name || name.trim() === "") {
      res.status(422).json({ message: "Message Not Sent. Invalid Name Input."})
      return
    }
    if (!email || !email.includes("@") ) {
      res.status(422).json({ message: "Message Not Sent. Invalid Email Input."})
      return
    }
    if (!message || message.trim() === "") {
      res.status(422).json({ message: "Message Not Sent. No message, please write me a message."})
      return
    }

    const newMessage = {name, email, message}

    try {
      const client = await connectToMongoDB(process.env.MONGODB_USER, process.env.MONGODB_PASS, process.env.MONGODB_HOST)
      console.log('Successfully Connected to Mongo Database!')

      try {
        const messageStatus = await addMessageToMongoDB(
          client, 
          process.env.MONGODB_DATABASE, 
          process.env.MONGODB_COLLECTION, 
          newMessage
        )
        console.log("Message sent to database successfully!")
        console.log('Status', messageStatus)

        res.status(201).json({ 
          message: 'Message Sent Successfully!',
          value: newMessage
        })
        client.close()
        return
      } 
      catch (error) {
        res.status(502).json({message: "Something went wrong. Please contact Site Administrator"})
        console.log(error)
      }
    } 
    catch (error: any) {
      res.status(502).json({ message: error})
      console.log(error)
    }
  } 
}