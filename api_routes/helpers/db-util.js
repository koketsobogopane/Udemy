import { MongoClient } from "mongodb";



export async function connectToMongo(){

    const client = await MongoClient.connect('mongodb+srv://koketsobogopanenov24:zFw9JKhIFncPjjgg@cluster0.ssgd9wx.mongodb.net/?retryWrites=true&w=majority');
   

    return client 
    
}

export async function insertDocument ( client, document, collection){
    const db = client.db()
    const results = db.collection(collection).insertOne(document)
    return results
}

export async function getAllComments( client, collection, sorting){
    const db = client.db();
    const comments = await db.collection(collection).find().toArry() 
    return comments
}

