const vozController = require('../../controllers/voces/voz.controllers');
//const uc2Controller = require('../../controllers/uc2/uc2.controllers');

const upload = require('multer');
module.exports = (app) => {

    app.get('/voces', vozController.list);

    app.get('/voces-filter', vozController.listfilter);

    app.get('/voz/find/:id', vozController.getById);

    app.post('/voz/create', vozController.create);

    app.put('/voz/update', vozController.update);

    app.delete('/voz/remove/:id', vozController.remove);

}