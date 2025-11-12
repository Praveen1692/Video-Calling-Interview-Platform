import express from "express"
import dotenv from "dotenv"


dotenv.config()

const PORT = process.env.PORT || 8000;


const app = express();


app.get("/health", (req, res) => {
    return res.status(200).json({ message: "Server running.." })
})




app.listen(PORT, () => {
    console.log("server is running on port 3000");

})
