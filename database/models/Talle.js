module.exports = (sequelize, dataTypes) => {
    let alias = 'Talles';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        talles: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        }
    };
    let config = {
        tableName: 'talles',
        timestamps: false
    }

    const Talle = sequelize.define(alias, cols, config);

    return Talle;
}