const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
app.use(cors());


async function connectDB() {
    try {
        await mongoose.connect('mongodb://mongo:27017/titledb');
        console.log('Connected to titledb database');
    } catch (err) {
        console.error('Database connection error:', err);
        process.exit(1);
    }
}

(async () => {
    await connectDB();

    const titleSchema = new mongoose.Schema({
        title: String,
        index: Number
    }, { collection: 'titles' });

    const Title = mongoose.model('Title', titleSchema);

    app.get('/titles', async (req, res) => {
        try {
            const docs = await Title.find({});
            console.log(docs);
            const i = Math.floor(Math.random() * docs.length);
            res.json(docs[i]);
        } catch (err) {
            console.log(err);
            res.status(500).send('Server error');
        }
    });

    app.get('/health', (req, res) => {
        res.status(200).send('OK');
    });


    app.listen(5000, function() {
        console.log('Server is listening on port 5000');
    });
})();