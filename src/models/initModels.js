const Address = require("./address.models");
const TaskCategories = require("./taskcategories.models");
const Users = require("./users.models"),
  Tasks = require("./tasks.models"),
  Categories = require("./categories.models");

const initModels = () => {
  // --relacion uno a uno, one to one ------------------------
  //relación users tiene una dirección
  Users.hasOne(Address, { as: "home", foreignKey: "user_id" });
  //una dirección pertenece a un usuario
  Address.belongsTo(Users, { as: "user", foreignKey: "user_id" });

  // -- relacion uno a muchos, one to man -------------------
  //un usuario tiene muschas tareas
  Users.hasMany(Tasks, { as: "todo", foreignKey: "user_id" });
  //una tarea pertenece a un usuario
  Tasks.belongsTo(Users, { as: "autor", foreignKey: "user_id" });

  //relacion muchos a muchos, many to many -------------------
  // primera forma
  /*
  Tasks.belongsToMany(Categories, { through: "task_categories" });
  Categories.belongsToMany(Tasks, { through: "task_categories" });
  //Through: si no existe la tabla task_categories la crea 
  * /
  
  /*segunda forma
  manejamos la relacion directamente con la tabla pivote*/
  //1-N -> de tasks -> categories_tasks
  Tasks.hasMany(TaskCategories, { as: "categories", foreignKey: "task_id" });
  TaskCategories.belongsTo(Tasks, { as: "todo", foreignKey: "task_id" });
  //1-M -> de categories -> categories_tasks
  Categories.hasMany(TaskCategories, {
    as: "todos",
    foreignKey: "category_id",
  });
  TaskCategories.belongsTo(Categories, {
    as: "categories",
    foreignKey: "category_id",
  });
};

module.exports = initModels;
