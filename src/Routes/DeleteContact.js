import DeleteContactController from '../Controller/DeleteContactController.js';

const DeleteContact = (app) => {

    app.route('/deleteContact')
        .put(DeleteContactController);
}

export default DeleteContact;