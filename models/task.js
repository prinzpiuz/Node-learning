const Sequelize = require('sequelize');

const sequelize = require('../util/db');

const Task = sequelize.define('task', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    userName: Sequelize.STRING,
    task: Sequelize.STRING,
    reference: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Task;