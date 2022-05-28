const bdService = require("../bd.service");
const { VozModel } = require("../../models/portavoz.model");
const { sequelize } = require("../bd.service");
const { QueryTypes } = require("sequelize");

const list = async (query, pagestart = 1, pagelimit = 10) => {
  
    //Consulta en la Base de datos

    const VocesModelResults = await VozModel.findAll();
    

    const VocesArray = new Array();
    for (let i = 0; i < VocesModelResults.length; i++) {
        const vocesResult = VocesModelResults[i];
        VocesArray.push(vocesResult.dataValues);
    }
    return VocesArray;
}

const listfilter = async (query, pagestart = 1, pagelimit = 10) => {
   
      let vocesResult = await sequelize.query(`SELECT *
                                                FROM portavoz
                                                WHERE UPPER(nombre) LIKE :q
                                                 OR UPPER(descripcion) LIKE :q
                                                ORDER BY id_voz`,{
                                                    replacements:{
                                                q:(query ? '%' + query.toUpperCase() + '%' : '%')
                                                    },
                                                    //type: QueryTypes.SELECT
                                                });
  vocesResult = (vocesResult && vocesResult[0]) ? vocesResult[0]: [];
    console.log("VozResult",vocesResult);                                            
return vocesResult;                                            
}

const getById = async (id_voz) => {
    //Buscar en la Base de datos
    const vozModelResult = await VozModel.findByPk(id_voz);
   
    if (vozModelResult) {
        return vozModelResult.dataValues;
    } else {
        return null;
    }


}

const create = async (data) => {
    //Guardar el data en la Base de datos
    const vozModelResult = await VozModel.create(data);
    //console.log('Create data', data);
    if (vozModelResult) {
        return vozModelResult.dataValues;
    } else {
        return null;
    }

    return data;

}
const update = async (data) => {
    //Actualizar el data en la Base de datos
    //console.log(' Update data', data);

    const vozModelCount = await VozModel.update(data, {
                                                                where: {
                                                                    id_voz: data.id_voz
                                                                }
    });

    if (vozModelCount > 0) {
        const vozModelResult = await VozModel.findByPk(data.id_voz);
        return vozModelResult.dataValues;
    } else {
        return null;
    }

}
const remove = async (id_voz) => {
    //Eliminar el data en la Base de datos
   // console.log('Borrar id_voz', id_voz);
   
   const vozModelCount = await VozModel.destroy( {

    where: {
        id_voz
    }
});
if (vozModelCount > 0) {
    return true; 
}else{
    return false;
}
   
}

module.exports =
{
    list, listfilter, getById, create, update, remove
}