

import { connectToMongo, getAllComments, insertDocument } from "../../../helpers/db-util";

async function handler(req, res){
    const eventId = req.query.eventId;

    let client

    try {
        client = await connectToMongo()
    } catch (error){
        res.status(500).json({ message: 'Could not connect to database'})
        return 
    }


    if ( req.method === 'POST'){
        const { email, name, text } = req.body;

        if ( 
            !email.includes('@') ||
            !name  ||
            name.trim() === ''||
            !text ||
            !text.trim()=== ""
        ){
            res.status(422).json({ message: 'Invalid input.'})
            return;
        }

        const newComment = {
           eventId,
            email,
            name,
            text
        };


        
    
    try{
        const result = await insertDocument( client, newComment, 'comments')
                newComment._id = result.insertedId
                console.log(result)
                res.status(201).json({ message: 'Added comment', comment: newComment});
    } catch (error){
        res.status(500).json('Error adding comment.')
    }
   
    }

    if ( req.method === 'GET'){

        try {
            const comments = await getAllComments( client, 'comments', {_id: -1})
            res.status(200).json({ comments: comments})
        } catch (error) {
            res.status(500).json("Couldn't get all the comments.")
        }
         
    }
    client.close()
}

export default handler