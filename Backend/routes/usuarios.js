"use strict";

const express = require("express");
const usuariosRoute = express.Router();
const Usuarios = require("../models/usuarios");
const formidable = require('formidable');
const fs = require('fs');

//POST
usuariosRoute.post("/usuarios", (req, res, next) => {
  Usuarios.create(req.body)
    .then(Usuarios => {
      res.json(Usuarios);
      res.send(Usuarios);
    })
    .catch(next);
});

//GET

usuariosRoute.get("/usuarios/:email", (req, res, next) => {
  Usuarios.findOne({ email: req.params.email }, (err, usuarioExistente) => {
    if (usuarioExistente !== null) {
      Usuarios.findOne({ email: req.params.email }, req.body)
        .populate("favoriteMovies")
        .then(usuario => {
          res.json(usuario);
        })
        .catch(next);
    } else {
      res.json(null);
    }
  });
});

//GET QUE DEVUELVE TODOS LOS USUARIOS

usuariosRoute.get("/usuarios", (req, res, next) => {
  Usuarios.find()
    .populate("favoriteMovies")
    .then(usuarios => {
      res.json(usuarios);
    })
    .catch(next);
});

//PUT
usuariosRoute.put("/usuarios/:email", (req, res, next) => {
  Usuarios.findOneAndUpdate(
    {
      email: req.params.email
    },
    req.body,
    {
      new: true,
      useFindAndModify: false
    })
    .then(usuario => {
      res.json(usuario);
    })
    .catch(next);
});

//PATCH
usuariosRoute.patch("/usuarios/:email/movies", (req, res, next) => {
  Usuarios.findOneAndUpdate(
    { email: req.params.email },
    {
      $push: {
        favoriteMovies: req.body.movieId
      }
    },
    {
      new: true,
      useFindAndModify: false
    }
  )
    .populate("favoriteMovies")
    .then(usuario => {
      res.json(usuario);
    })
    .catch(next);
});

usuariosRoute.post("/usuarios/:email/imagen", (req, res, next) => {
  const form = new formidable.IncomingForm();

  form.parse(req, (err, fields, files) => {
    console.log(files)
    console.log(__dirname)
    fs.copyFileSync(files.image.path, `${__dirname}/../public/${files.image.name}`);
    Usuarios.findOneAndUpdate(
      {
        email:req.params.email
      },
      {
        image:files.image.name
      },
      {
        new: true,
        useFindAndModify: false
      }
    ).then(usuario => {
      res.json({files, usuario});
    })

  });
})

//DELETE PARA SACAR LAS PELICULAS DE FAVORITOS
usuariosRoute.delete("/usuarios/:email/movies/:movieId", (req, res, next) => {
  console.log("peticion del delete", req.params.email, req.body);
  Usuarios.findOneAndUpdate(
    { email: req.params.email },
    {
      $pull: {
        favoriteMovies: req.params.movieId
      }
    },
    {
      new: true,
      useFindAndModify: false
    }
  )
    .populate("favoriteMovies")
    .then(usuario => {
      res.json(usuario);
    })
    .catch(next);
});

//LLAMANDO
module.exports = usuariosRoute;
