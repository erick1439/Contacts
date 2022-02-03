import AddContactController from '../Controller/AddContactController.js';

const AddContact = (app) => {

    app.route('/addContact')
        .put(AddContactController);
}

export default AddContact;