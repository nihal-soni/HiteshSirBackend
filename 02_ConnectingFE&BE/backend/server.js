import express from "express";
const app = express();


app.get('/', (req, res) => {
    res.send("server is working")
})

app.get ('/users', (req, res) => {
    const users = [
        {
            "name": "nihal soni",
            "email": "nihal@gmail.com",
            "profile": "Full stack Developer"
        },
        {
            "name": "rahul ",
            "email": "rahul23@gmail.com",
             "profile": "Data scientist"
        }
    ]
    res.send(users)
})

const port = process.env.PORT || 3000;

app.listen(port , () => {
    console.log(`server is at http://localhost:{port}`)
}
);