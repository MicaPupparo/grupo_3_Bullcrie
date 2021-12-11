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
        imagen: {
            type: dataTypes.INTEGER,
            allowNull: false,
            unique: true
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

    return Producto;
}