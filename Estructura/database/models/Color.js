module.exports = (sequelize, dataTypes) => {
    let alias = 'Colores';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        nombre: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        }
    };
    let config = {
        tableName: 'colores',
        timestamps: false
    }

    const Color = sequelize.define(alias, cols, config);

    return Color;
}