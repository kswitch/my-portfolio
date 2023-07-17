interface MessageBodyProp {
    name: string,
    email: string,
    message: string,
}

export default async function fetchRequest(messageBody:MessageBodyProp, url:string, method?:string) {
    if (method === 'POST') {
        const response = await fetch(url, {
            method : method,
            body: JSON.stringify(messageBody),
            headers: {
                "Content-type": "application/json"
            }        
        })
        const data = await response.json()
    
        if (!response.ok) {
            throw new Error(data.message || "Something went wrong")
        }

        return data
    }

    if (method === 'GET' || !method) {
        const response = await fetch(url)
        const data = await response.json()
    
        if (!response.ok) {
            throw new Error(data.message || "Something went wrong")
        }

        return data
    }
}