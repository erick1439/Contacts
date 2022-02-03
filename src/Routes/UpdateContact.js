import UpdateContactController from '../Controller/UpdateContactController.js';

const UpdateContact = (app) => {

    app.route('/updateContact')
        .put(UpdateContactController);
}

export default UpdateContact;