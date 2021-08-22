const { response, request } = require('express');


const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No Name', apikey, page = 1, limit} = req.query;

    res.json({
        ok: true,
        msg: 'get API - controlador',
        q, nombre, apikey, page, limit
    })
}

const usuariosPut = (req, res = response) => {

    const id = req.params.id;

    res.status(500).json({
        ok: true,
        msg: 'put API - controlador',
        id
    })
}

const usuariosPost = (req, res = response) => {
    
    const { nombre, edad, id} = req.body;

    res.status(201).json({
        ok: true,
        msg: 'post API - controlador',
        nombre, edad, id
    })
}

const usuariosDelete = (req, res = response) => {

    const id = req.params.id;

    res.json({
        ok: true,
        msg: 'delete API - controlador',
        id
    })
}

const usuariosPatch = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'patch API - controlador'
    })
}

module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete,
    usuariosPatch
}