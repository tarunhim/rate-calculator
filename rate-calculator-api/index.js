import bodyParser from "body-parser";
import express from "express";
import cors from "cors";


const app = express();
app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(cors()); 

app.get("/", async(req,res) => {
    res.end("welcome to the rate calculator api");
})

app.post("/total", async(req,res) => {
    const{ type, srcPin, desPin, weight, length, width, height } = req.body;
    try{
        let sum = 0;
        sum += type === "cod" ? 200 : 0;
        sum += Math.max((weight*100,(length*width*height)));
        if(srcPin === desPin) {
            sum += sum/2;
        } else {
            sum += sum;
        }
        console.log(req.body);
        res.status(200).json({total:sum});
    } catch(error) {
        res.status(400).json({message:error.message});
    }
})

const PORT = 5000;

app.listen(PORT,() => console.log("Server running on port :"+PORT));
