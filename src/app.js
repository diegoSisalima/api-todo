const express = require("express");
const initModels = require("./models/initModels");
const db = require("./utils/database");
const app = express();
//importamos las rutas de usuario
const userRoutes = require("./Routes/users.routes");
const UserServices = require("./Services/users.services");
const { prototype } = require("./Services/users.services");
//Importación de las variables de entorno (clase 1 de la semana 4)
require("dotenv").config();
app.use(express.json());
const PORT = process.env.PORT || 8000;

db.authenticate()
  .then(() => console.log("Autenticación exitosa"))
  .catch((error) => console.log(error));
//devuekve una promesa

//para sincronizar la base de datos
db.sync({ force: false }) //force: true--> borra todo estructura y datos para generarla denuevo
  .then(() => console.log("base sincronizada"))
  .catch((error) => console.log(error));

initModels();

app.get("/", (req, res) => {
  res.status(200).json("todo bien");
});

app.use("/api/v1", userRoutes);

app.listen(PORT, () => console.log("Servidor correindo en el puerto: ", PORT));
