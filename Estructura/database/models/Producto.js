module.exports = (sequelize, dataTypes) => {
    let alias = 'Productos';
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
        },
        precio: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        cuotas: {
            type: dataTypes.INTEGER,
            allowNull: false,
            defaultValue: true
        },
        stock: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        descripcion: {
            type: dataTypes.TEXT,
            allowNull: false
        },
        categoria_id: {
            //foreign key
            type: dataTypes.INTEGER,
            allowNull: false
        },
        talle_id: {
            //foreign key
            type: dataTypes.INTEGER,
            allowNull: false
        },
        color_id: {
            //foreign key
            type: dataTypes.INTEGER,
            allowNull: false
        }
    };
    let config = {
        tableName: 'productos',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(modelos) {

        Producto.belongsToMany(modelos.Usuarios, {
            as: 'usuarios',
            through: 'pedidos',
            foreignKey: 'productos_id',
            otherKey: 'usuarios_id',
            timestamps: false
        });

        Producto.belongsTo(modelos.Categorias, {
            as: 'categorias',
            foreignKey: 'categoria_id'
        });

        Producto.belongsTo(modelos.Talles, {
            as: 'talles',
            foreignKey: 'talle_id'
        });

        Producto.belongsTo(modelos.Colores, {
            as: 'colores',
            foreignKey: 'color_id'
        });

        Producto.belongsToMany(modelos.Imagenes, {
            as: 'imagenes',
            through: 'imagen_producto',
            foreignKey: 'id_producto',
            otherKey: 'imagen_id',
            timestamps: false
        });


    }

    return Producto;
}