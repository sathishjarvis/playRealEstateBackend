const express = require("express");
const router = express.Router();
// const {createUsers,getAllUsers,getUserById,updateUser, deleteUser} = require("../controller/directory.controller");

const directoryController = require('../controller/directory.controler.list');

// GET all directories
router.get('/list', directoryController.getAllDirectories);

// GET single directory
router.get('/list/:id', directoryController.getDirectory);

// POST new directory
router.post('/', directoryController.createDirectory);

// PUT update directory
router.put('/list/:id', directoryController.updateDirectory);

// DELETE directory
router.delete('/list/:id', directoryController.deleteDirectory);

// router.post("/", createUsers);

// router.get("/data", getAllUsers);

// router.get("/data/:id", getUserById);

// router.put("/data/:id", updateUser);

// router.delete("/data/:id", deleteUser);

module.exports = router;