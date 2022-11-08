const db = require("../utils/database"),
  { DataTypes } = require("sequelize"),
  Categories = db.define(
    "categories",
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
module.exports = Categories;
