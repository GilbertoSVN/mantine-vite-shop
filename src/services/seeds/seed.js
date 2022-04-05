const {
  randUuid,
  randFloat,
  randImg,
  randProductName,
  randProductDescription,
} = require("@ngneat/falso");

module.exports = () => {
  const data = { products: [] };

  for (let i = 1; i < 10; i++) {
    data.products.push({
      id: randUuid(),
      name: randProductName(),
      description: randProductDescription(),
      price: randFloat({ min: 2, max: 120 }),
      image: randImg(),
    });
  }

  return data;
};
