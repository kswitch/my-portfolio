// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

interface Data {
  message: string,
  value?: NewMessage
}

interface NewMessage extends Object {
  name: string,
  email: string,
  message: string
}

async function connectToDatabase() {

}

export default function Contact(req: NextApiRequest,res: NextApiResponse<Data>) {
  if (req.method === "POST") {
    const {name, email, message} = req.body

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

    //Connect to Database function here
    /**
     * 
    */
    try {
      
    } catch (error) {
      
    }

    const newMessage = {name, email, message}

    res.status(201).json({ 
      message: 'Message Sent Successfully!',
      value: newMessage
    })
  }
}
