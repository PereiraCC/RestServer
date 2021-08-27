
const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos, validarJWT, esAdminRole } = require('../middlewares');
const { existeCategoriaPorId, existeProductoPorId } = require('../helpers/db-validators');

const { 
        obtenerProductos,
        obtenerProducto,
        crearProducto, 
        actualizarProducto,
        borrarProducto
      } = require('../controllers/productos');

const router = Router();

// Obtener todas las categorias = publico
router.get('/', obtenerProductos);

// Obtener una categoria por id = publico
router.get('/:id', [
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos
], obtenerProducto);

// Crear una categoria = cualquier persona con un token valido
router.post('/', [
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('categoria', 'La categoria es obligatoria').isMongoId(),
    check('categoria').custom( existeCategoriaPorId ),
    validarCampos
] , crearProducto);

// Actualizar una categoria por id = cualquier persona con un token valido
router.put('/:id', [
    validarJWT,
    check('id', 'No es un ID válido').isMongoId(),
    // check('categoria', 'No es un ID válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos
], actualizarProducto);

// Borrar una categoria = Admin
router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos
], borrarProducto);

module.exports = router;