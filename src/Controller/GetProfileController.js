import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import UserSchema from '../Schemas/UserSchema';

const User = mongoose.model('users', UserSchema);
const SECRET = process.env.SECRET || 'Secreat123';

const GetProfileController = (req, res) => {

    const token = req.headers['x-access-token'];

    jwt.verify(token, SECRET, (err, decoded) => {

        if (err) 
            return res.json({ status: 'error', mssg: error });

        if (!decoded)
            return res.json({ status: 'error', mssg: 'Invalid token' });

        else {

            User.findOne({email: decoded.email}, (err, user) => {

                if (err)
                    return res.json({ status: 'error', mssg: error, user: false});
                
                return res.json(
                    { status: 'ok',  
                    firstName : user.firstName,
                    lastName : user.lastName,
                    contacts: user.contacts, 
                });
            });
        }
    });

}

export default GetProfileController;