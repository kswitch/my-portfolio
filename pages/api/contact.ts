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

      //Add extra properties to the message after input checks and establishing a successful connection to the the database
      //------------------------------------------------------------------------------
      const date = Date.now()
      
      const messageToSend = {
        message_id: `${date.toString()}_message`,
        date: date,
        subject: `${message.length > 25 ? `${message.slice(0, 25)}...` : message}`,
        from: {
          name,
          email
        },
        messageBody: message,
        isRead: false,
        isStarred: false,
        isSpam: false,
        isTrash: false,
        isDraft: false,
      }
      //------------------------------------------------------------------------------

      try {
        await addMessageToMongoDB(
          client, 
          process.env.MONGODB_DATABASE, 
          process.env.MONGODB_COLLECTION, 
          messageToSend
        )

        client.close()
          
        res.status(201).json({ 
          message: 'Message Sent Successfully!',
          value: newMessage
        })
        return
      } 
      catch (error) {
        res.status(502).json({message: "Message not sent. Please contact Site Administrator"})
        console.log(error)
        return
      }
    } 
    catch (error) {
      res.status(502).json({ message: "Something went wrong. Please Contact Site Administrator"})
      console.log(error)
      return
    }
  }
}