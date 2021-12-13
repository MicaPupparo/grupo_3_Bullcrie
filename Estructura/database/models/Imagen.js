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
        
    }

    return Imagen;
}