const { default: mongoose } = require("mongoose");

//.env
// MONGO = mongodb+srv://shuvo-dev:RKDGFCtDEyy4Vcsa@cluster1.dzewntq.mongodb.net/NEXTJS-FULLSTACK-CRASH-COURSE-LAMA-DEV?retryWrites=true&w=majority

// AUTH_SECRET = c1ofoodrhqNbSg2ltoLLNpneV0fNymCV7v0sYEXE20Y=
// AUTH_URL = http://localhost:3000/api/auth

// GITHUB_ID = 574abc6d27a9c8fe65cc
// GITHUB_SECRET = dd679501ff317622edec42a903665d7634ece25d

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
