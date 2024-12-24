import express from 'express'
import env from 'dotenv'
import cors from 'cors'
import router from './backend/router.js';
import connection from './backend/connection.js';

const app=express();
env.config();

app.use(express.json({limit:"50mb"}));

app.use(cors());
app.use('/api',router)

connection().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log(`http://localhost:${process.env.PORT}`);
        
    })
}).catch((error)=>{
console.log(error);

})