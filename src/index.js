import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});

connectDB();

/*


const app = express();



(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("ERROR", (error) => {
      console.log(error);
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(`App is listining on http://localhost:${process.env.PORT}`);
    });
  } catch (error) {
    console.error("ERROR :", error);
    throw error;
  }
})();

 */
