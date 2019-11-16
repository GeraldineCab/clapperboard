"use strict";

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const usuariosSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        default: "normal"
    },
    favoriteMovies: {
        type: [{ type: Schema.Types.ObjectId, ref: 'movies' }],
        required: false
    },
    description:{
        type: String,
        default:""
    }
});

const Usuarios = mongoose.model('usuarios', usuariosSchema);

module.exports = Usuarios;
