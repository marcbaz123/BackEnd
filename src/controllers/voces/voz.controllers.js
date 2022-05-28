const vozService = require("../../services/voces/voz.services")

// function funcionRaiz (req, res) {
const list = async (req, res) => {
    //res.send('Ejecucion del Servicio ejecutado con exito');
    //console.log("Params", query, pageStart, pageLimit);
    const voces = await vozService.list(req.query.q);

    res.send({
        success: true,
        voces
    });
}
    const listfilter = async (req, res) => {
        //res.send('Ejecucion del Servicio ejecutado con exito');
        //console.log("Params", query, pageStart, pageLimit);
        const voces = await vozService.listfilter(req.query.q);
    
        res.send({
            success: true,
            voces
        });

}
const getById = async (req, res) => {
    //  console.log("Ejecutado peticion 2", req.query);
    //res.send('Ejecucion del Servicio ejecutado con exito');
    const voces = await vozService.getById(req.params.id);
    let jsonResultado = req.query;
    jsonResultado['success'] = true;
    jsonResultado['voz'] = voces;

    //jsonResultado.success=true;
    res.status(201).send(jsonResultado);
}
const create = async (req, res) => {
    //console.log("Ejecutado peticion 3");
    //res.send('Ejecucion del Servicio ejecutado con exito');
    const voz = await vozService.create(req.body);
    res.status(202).send({
        success: true,
        voz
    });
}
const update = async (req, res) => {
    //console.log("Ejecutado peticion 3");
    //res.send('Ejecucion del Servicio ejecutado con exito');
    const voz = await vozService.update(req.body);
    res.status(202).send({
        success: true,
        voz
    });
}

const remove = async (req, res) => {
    //console.log("Ejecutado peticion 3");
    //res.send('Ejecucion del Servicio ejecutado con exito');
    const booleanValue = await vozService.remove(req.params.id);
    res.status(202).send({
        success: booleanValue,
    });
}

module.exports =
{
    list, listfilter, getById, create, update, remove
};