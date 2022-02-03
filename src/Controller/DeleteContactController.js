import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import UserSchema from '../Schemas/UserSchema';

const User = mongoose.model('users', UserSchema);

const DeleteContactController = (req, res) => {

    const token = req.headers['x-access-token'];

    jwt.verify(token, 'Secrete123', async (err, decoded) => {

        if (err)
            return res.json({ status: 'error', mssg: error });

        if (!decoded)
            return res.json({ status: 'error', mssg: 'Invalid token' });

        else {

            User.findOne({ email: decoded.email }, (err, user) => {

                if (err)
                    return res.json({ status: 'error', mssg: error, user: false});


                User.updateOne(
                    { email: user.email },
                    { $pull : {contacts: { id: req.body.id, email: req.body.email }}},
                    (err) => {

                        if (err) 
                            return res.json({ status: 'error', mssg: error, user: false});

                        else
                            return res.json({ status: 'ok', msgg: 'Contact deleted'});
                    }
                )

            });
        }

    });
}

export default DeleteContactController;