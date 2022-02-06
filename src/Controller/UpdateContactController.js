import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import UserSchema from '../Schemas/UserSchema';

const User = mongoose.model('users', UserSchema);
const SECRET = process.env.SECRET || 'Secreat123';

const UpdateContactController = (req, res) => {

    const token = req.headers['x-access-token'];

    jwt.verify(token, SECRET, (err, decoded) => {

        if (err)
            return res.json({ status: 'error', mssg: error });

        if (!decoded)
            return res.json({ status: 'error', mssg: 'Invalid token' });


        else {

            User.findOne({ email: decoded.email }, (err, user) => {

                if (err)
                    return res.json({ status: 'error', mssg: error, user: false});


                User.updateOne(
                    { email: user.email, 'contacts.id': req.body.id },
                    { $set : { 
                        'contacts.$.fullName': req.body.newFullName, 
                        'contacts.$.city': req.body.newCity,
                        'contacts.$.email': req.body.newEmail,
                        'contacts.$.phoneNumber': req.body.newPhoneNumber
                    }},
                    (err) => {

                        if (err) 
                            return res.json({ status: 'error', mssg: error, user: false});

                        else
                            return res.json({ status: 'ok', msgg: 'Contact Updated'});
                    }
                )
            });
        }
    })
}

export default UpdateContactController;