
import { MongoClient } from "mongodb";
import { connectToMongo, getAllComments, insertDocument } from "../../../helpers/db-util";

async function handler(req, res){
    const eventId = req.query.eventId;

    const client = new MongoClient('mongodb+srv://koketsobogopanenov24:zFw9JKhIFncPjjgg@cluster0.ssgd9wx.mongodb.net/');


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


        
    //    const db = client.db();
    const client = await connectToMongo()
    const result = await insertDocument( client, newComment, 'comments')
    //    const result = await db.collection('comments').insertOne(newComment);

    //    console.log(result);

        
        newComment._id = result.insertedId
        console.log(result)
        res.status(201).json({ message: 'Added comment', comment: newComment});
    }

    if ( req.method === 'GET'){

        const client = await connectToMongo()
        const comments = await getAllComments( client, 'comments', {})

                
            
        console.log(comments)
        // const collection = await connectToMongo('comments')
        // const commentList = await collection.find({}).toArray()
        
        res.status(200).json({ comments: comments})
    }
    client.close()
}

export default handler