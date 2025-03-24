import express from 'express';

const app = express();

const usersData = [
    {
        name: "Nihal soni",
        id: 1
    },
    {
        name: "rahul soni",
        id: 2
    },
    {
        name: "utkarsh bhai",
        id: 3
    }
]
app.get('/' , (req, res) => {
    res.send("Hello world")
})

app.get('/users', (req,res) => {
    res.send("usersData")
})

app.listen()