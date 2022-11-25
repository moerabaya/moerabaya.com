import User from "./models/User";
import mongoose from "mongoose";

const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/website";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

// Mongo connection
mongoose.Promise = global.Promise;

async function connection() {
  await mongoose.connect(MONGODB_URI!, {});
  return mongoose;
  //   if (cached.conn) {
  //     return cached.conn;
  //   }

  //   if (!cached.promise) {
  //     const opts = {
  //       useNewUrlParser: true,
  //       useUnifiedTopology: true,
  //       bufferCommands: false,
  //       bufferMaxEntries: 0,
  //       useFindAndModify: false,
  //       useCreateIndex: true,
  //     };

  //     cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongoose) => {
  //       return mongoose;
  //     });
  //   }
  //   cached.conn = await cached.promise;
  //   return cached.conn;
}

export default connection;

// export default mongoose;
