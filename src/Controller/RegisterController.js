import mongoose from 'mongoose';
import UserSchema from '../Schemas/UserSchema.js';

const User = mongoose.model('users', UserSchema);

const RegistrationController = (req, res) => {

    User.findOne({
        email: req.body.email
    }, (err, user) => {

        if (err)
            return res.json({ status: 'error', mssg: err, registration: false });

        if (user)
            return res.json({status: 'error', mssg: 'User already exists', registration: false });

        else {
            let newUser = new User(req.body);

            newUser.save((err, user) => {

                if (err)
                    return res.json({status: 'error', mssg: err, registration: false });

                else
                    return res.json({status: 'ok', mssg: 'User created', registration: true });
            }) 
        }
    });
}

export default RegistrationController;