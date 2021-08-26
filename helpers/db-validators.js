const Role = require('../models/role');
const { Categoria, Usuario } = require('../models');

const esRoleValido =  async (rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if(!existeRol) {
        throw new Error(`El rol ${rol} no esta registrado en la BD`)
    }
}

const emailExiste = async (correo = '') => {

    const band = await Usuario.findOne({ correo });
    if( band ){
        throw new Error(`El correo: ${correo} ya esta registrado`);
    }
}

const existeUsuarioPorId = async ( id = '') => {

    const existeUsuario = await Usuario.findById(id);
    if( !existeUsuario ){
        throw new Error(`El id no existe: ${id}`);
    }
}

const existeCategoriaPorId = async ( id = '') => {

    const query = {_id: id, estado: true};
    const existeCategoria = await Categoria.findOne(query);
    if( !existeCategoria ){
        throw new Error(`El id no existe: ${id}`);
    }
}


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId
}