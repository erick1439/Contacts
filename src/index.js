
import path from 'path';
import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import Login from './Routes/Login.js';
import GetProfile from './Routes/GetProfile.js';
import AddContact from './Routes/AddContact.js';
import Registration from './Routes/Registration.js'
import DeleteContact from './Routes/DeleteContact.js';
import UpdateContact from './Routes/UpdateContact.js'

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

Login(app);
Registration(app);
GetProfile(app);
AddContact(app);
DeleteContact(app);
UpdateContact(app);

if (process.env.NODE_ENV === 'production') {
 
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, '../', 'client', 'build', 'index.html'));
    });
  }

app.listen(PORT);