const { Router } = require("express");
const {
  getAllUsers,
  getUserById,
  getUserWithAddress,
  getUserWithTasks,
} = require("../Controllers/users.controllers");
const router = Router();
//para obtones a todos los usuarios -> get
router.get("/users", getAllUsers);

//obtener un usuario por su id -> /users/:id
router.get("/users/:id", getUserById);

router.get("/users/:id/address", getUserWithAddress);

router.get("/users/:id/tasks", getUserWithTasks);

module.exports = router;
