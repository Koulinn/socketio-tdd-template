import mongoose from 'mongoose'


const mongoUrl = process.env.MONGO_DEV_URL ? process.env.MONGO_DEV_URL : process.env.MONGO_PROD_URL

const connectToDB = ()=>{
    mongoose.connect(mongoUrl)
    // console.log(process.env)
    
    
    mongoose.connection.on('connected', () => {
        console.log('Mongo connected')
        // server.listen(process.env.PORT, async () => {
        //     console.log("🚀 Server is running on port ", process.env.PORT)
        // })
        mongoose.connection.on('error', error => {
            console.log('Mongo error: ', error)
        })
        // server.on("error", (error) =>
        //     console.log("🚀 Server is crashed due to ", error)
        // )
    })
}


export default connectToDB


