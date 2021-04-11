const createProduct = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
  });
  return Product;
}

module.exports = createProduct;
