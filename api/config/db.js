import mongoose from 'mongoose'; 

// mongodb connection
const mongoDBConnection = async () => {

    try {

        const connection = await mongoose.connect(process.env.MONGODB);
        console.log(`MONGODB is connected`.bgYellow.black);
        
    } catch (error) {
        console.log(`${error}`.bgRed.black);
    }

}


// export 
export default mongoDBConnection;