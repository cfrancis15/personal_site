const express = require("express")
const app = express()
const cors = require('cors')


//add cors to allow cross origin requests

app.use(cors())
app.use(express.json())


require('dotenv').config();

//linking our philosophy page
const philosophyRouter = require('./philosophy');
app.use('/api/philosophy', philosophyRouter);



//linking and using our stripe page
//const stripeRouter = require('./checkout');
//app.use('./api/checkout',stripeRouter);



//const admin = require('firebase-admin');

/*
//initializing firebase admin
const serviceAccount={
    project_id: process.env.FIREBASE_PROJECT_ID,
    private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g,'\n'),
    client_email: process.env.FIREBASE_CLIENT_EMAIL
}

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL:`https://${process.env.FIREBASE_PROJECT_ID}-default-rtdb.firebaseio.com/`
});



const db = admin.firestore();

//testing firebase connection

app.post("/test-firebase",async(req,res)=>{
    try{
        const testData = {
            message:"Test Data from server"
        };

        const docRef = await db.collection('test').add(testData);

        res.json({
            success:'true',
            messages:'Data written to firebase check check',
            docID: docRef.id,
            data:testData

        
        });
    }catch (error){
        res.json({
            success: false,
            error:error.message
        })
    }
})
*/


app.listen(5000,()=>{console.log("Server is running on port 5000")})

