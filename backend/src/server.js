import express from "express"
import dotenv from "dotenv"
import path from "path";

dotenv.config()

const PORT = process.env.PORT || 8000;
const __dirname = path.resolve()


const app = express();


app.get("/health", (req, res) => {
    return res.status(200).json({ message: "Server running.." })
})


// make our app  ready for deployment
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../frontend/dist")))

    app.get("/{*any}", (req, res) => {
        res.sendFile(path.join(__dirname, "../frontend/dist/index.html"));
    });

}




app.listen(PORT, () => {
    console.log("server is running on port 3000");

})
