import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import UserSchema from '../Schemas/UserSchema';

const User = mongoose.model('users', UserSchema);
const SECRET = process.env.SECRET || 'Secreat123';

const LoginController = (req, res) => {

    User.findOne({
        email: req.body.email,
        password: req.body.password

    }, (err, user) => {

        if (err)
            return res.json({ status: 'error', mssg: error, user: false});

        if (user) {

            const token = jwt.sign(
                {
                    email: user.email
                }, SECRET
            );

            return res.json({ status: 'ok', mssg: 'User Found', user: token});
        }

        else
            return res.json({status: 'error', mssg: 'Wrong email or password', user: false})
    });

}

export default LoginController;
