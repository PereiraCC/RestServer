const Role = require('../models/role');
const { Categoria, Usuario, Producto } = require('../models');

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

const existeProductoPorId = async ( id = '') => {

    const query = {_id: id, estado: true};
    const existeProducto = await Producto.findOne(query);
    if( !existeProducto ){
        throw new Error(`El id no existe: ${id}`);
    }
}

const coleccionesPermitidas = ( coleccion = '', colecciones = []) => {

    const incluida = colecciones.includes( coleccion );
    if( !incluida ) {
        throw new Error(`La coleccion ${ coleccion } no es permitida, ${colecciones}`);
    }
    return true;

}


module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId,
    coleccionesPermitidas
}