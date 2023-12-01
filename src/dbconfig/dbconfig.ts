// import mongoose from "mongoose";

// const url = process.env.MONGO_URL as string;
// const connect = async ()=>{
//     try {
//         mongoose.connect(url)
//         const connection = mongoose.connection;
//         connection.on('connected', () => {
//             console.log('MongoDB connected successfully!');
//         })
//         connection.on('error', (err) => {
//             console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
//             process.exit();
//         });
//     } catch (error) {
//         console.log('Something went wrong');
//         console.log(error);
//     }
// }
// export default connect();