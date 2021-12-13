module.exports = (sequelize, dataTypes) => {
    let alias = 'Categorias';
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
        tableName: 'categorias',
        timestamps: false
    }

    const Categoria = sequelize.define(alias, cols, config);

    Categoria.associate = function(modelos) {
        Categoria.hasMany(modelos.Productos, {
            as: 'productos',
            foreignKey: 'categoria_id'
        })
    }

    return Categoria;
}