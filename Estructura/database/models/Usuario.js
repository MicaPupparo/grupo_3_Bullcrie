module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuarios';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            unique: true
        },
        name: {
            type: dataTypes.STRING,
            allowNull: false
        },
        email: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        username: {
            type: dataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: dataTypes.STRING,
            allowNull: false
        },
        avatar: {
            type: dataTypes.STRING,
            allowNull: true
        }
    };
    let config = {
        tableName: 'usuarios',
        timestamps: false
    }

    const Usuario = sequelize.define(alias, cols, config);

    Usuario.associate = function(modelos) {
        Usuario.belognsToMany(modelos.Productos, {
            as: 'productos',
            through: 'pedidos',
            foreignKey: 'usuarios_id',
            otherKey: 'productos_id',
            timestamps: false
        });
    }

    return Usuario;
}