module.exports = (sequelize, dataTypes) => {
    let alias = 'Pedidos';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        usuarios_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        productos_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        },
        fecha_creacion: {
            type: dataTypes.DATE,
            allowNull: false,
        }
    };
    let config = {
        tableName: 'pedidos',
        timestamps: false
    }

    const Pedido = sequelize.define(alias, cols, config);

    return Pedido;
}