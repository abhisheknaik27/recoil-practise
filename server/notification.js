import express from 'express';
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json());

app.get('/sample', (req, res) => {
    res.status(200).json({
        "network": 6,
        "jobs": 4,
        "messages": 10,
        "notifications": 2
    })
})

app.listen(2000);