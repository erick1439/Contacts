import GetProfileController from '../Controller/GetProfileController.js';

const GetProfile = (app) => {

    app.route('/getProfile')
        .get(GetProfileController);

}

export default GetProfile;