import RegistrationController from '../Controller/RegisterController.js';

const Registration = (app) => {

    app.route('/register')
        .post(RegistrationController);
}

export default Registration;