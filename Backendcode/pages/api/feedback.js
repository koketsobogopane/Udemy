function handler (req, res){
    if ( req.method === 'POST'){
        const email = req.body.email
        const feedback = req.body.text

        const newFeedback = {
            id: new Date().toISOString(),
            email: email,
            text: feedback
        }
    }

    res.status(200).json({ message: 'This works'})
}

export default handler