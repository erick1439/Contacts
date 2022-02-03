import express from 'express';
import cors from 'cors';
import Registration from './src/Routes/Registration.js'
import Login from './src/Routes/Login.js';
import GetProfile from './src/Routes/GetProfile.js';
import AddContact from './src/Routes/AddContact.js';
import DeleteContact from './src/Routes/DeleteContact.js';
import UpdateContact from './src/Routes/UpdateContact.js'
import mongoose from 'mongoose';

const PORT = process.env.PORT || 4000;
const app = express();

app.use(cors());
app.use(express.json());

// Establish database connection
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/ContactsDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

Registration(app);
Login(app);
GetProfile(app);
AddContact(app);
DeleteContact(app);
UpdateContact(app);

app.get('/', (req, res) => {

    res.send('App running');
});

if (process.env.NODE_ENV || 'production') {
    app.use(express.static('client/build'));
}

app.listen(PORT);