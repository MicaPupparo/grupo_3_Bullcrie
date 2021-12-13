module.exports = (sequelize, dataTypes) => {
    let alias = 'Imagenes';
    let cols = {
        nombre: {
            type: dataTypes.STRING,
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        producto_id: {
            type: dataTypes.INTEGER,
            allowNull: false,
        }
    };
    let config = {
        tableName: 'imagenes',
        timestamps: false
    }

    const Imagen = sequelize.define(alias, cols, config);

    Imagen.associate = function(modelos) {
        Imagen.belongsToMany(modelos.Productos, {
            as: 'productos',
            through: 'imagen_producto',
            foreignKey: 'imagen_id',
            otherKey: 'id_producto',
            timestamps: false
        });
    }

    return Imagen;
}