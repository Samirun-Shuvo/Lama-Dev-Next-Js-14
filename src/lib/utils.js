const { default: mongoose } = require("mongoose");

//db connection password
//shuvo-dev
//RKDGFCtDEyy4Vcsa
//ZuYccZAly73NB8bI
//mbffMCMiKwjnBi3
//MONGO = mongodb+srv://shuvo-dev:RKDGFCtDEyy4Vcsa@cluster1.dzewntq.mongodb.net/NEXTJS-FULLSTACK-CRASH-COURSE-LAMA-DEV?retryWrites=true&w=majority

const connection = {};
export const connectToDb = async () => {
  try {
    if (connection.isConnected) {
      console.log("Usign existing connection");
      return;
    }
    const db = await mongoose.connect(process.env.MONGO);
    connection.isConnected = db.connections[0].readyState;
  } catch (error) {
    console.log(error);
    throw new Error("Couldn't connect to database");
  }
};
