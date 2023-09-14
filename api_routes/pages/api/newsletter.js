import { MongoClient } from 'mongodb'
import { connectToMongo, insertDocument } from '../../helpers/db-util'

async function handler( req, res){
    if ( req.method === 'POST'){
        const userEmail = req.body.email

        if (!userEmail || !userEmail.includes('@')){
            res.status(422).json({ message: 'Invalid email address.'})
            return 
        }

        const client = await connectToMongo()
        await insertDocument( client, {email: userEmail}, 'newsletter')
        
        client.close()
        
        res.status(201).json({ message: 'Signed up'})

    }
}

export default handler