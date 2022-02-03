import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import UserSchema from '../Schemas/UserSchema';

const User = mongoose.model('users', UserSchema);
const SECRET = process.env.SECRET || 'Secreat123';

const AddContactController = (req, res) => {

    const token = req.headers['x-access-token'];

    jwt.verify(token, SECRET, async (err, decoded) => {

        if (err)
            return res.json({ status: 'error', mssg: error });

        if (!decoded)
            return res.json({ status: 'error', mssg: 'Invalid token' });   
            
        else { 

            User.findOne({ email: decoded.email }, (err, user) => {

                if (err)
                    return res.json({ status: 'error', mssg: error, user: false});

                const newContact = {
                    id: new mongoose.Types.ObjectId().toString(),
                    fullName: req.body.fullName,
                    city: req.body.city,
                    email: req.body.email,
                    phoneNumber: req.body.phoneNumber
                }

                User.updateOne(
                    {email: user.email},
                    { $push: {contacts: newContact}},
                    (err) => {

                        if (err) 
                            return res.json({ status: 'error', mssg: error, user: false});

                        else
                            return res.json({ status: 'ok', msgg: 'Contact added'});
                    }
                );
            });
        }

    });
}

export default AddContactController;
