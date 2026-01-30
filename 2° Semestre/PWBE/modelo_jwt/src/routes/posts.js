const express = require('express');

const postsController = require("../controllers/posts");
const validate = require("../middlewares/auth");

const postsRoutes = express.Router();

postsRoutes.get('/posts', postsController.listarposts);

module.exports = postsRoutes;