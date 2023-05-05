module.exports = {
  // Indica que el entorno de prueba debe ser jsdom.
  testEnvironment: "jsdom",
  // Indica la ubicación de los archivos de prueba.
  testMatch: ["<rootDir>/test/**/*.spec.js"],
  // Indica la ubicación de los archivos que deben ignorarse durante las pruebas.
  testPathIgnorePatterns: ["/node_modules/"],
  // Indica la ubicación de los archivos que deben transpilarse antes de las pruebas.
  transform: {
    "^.+\\.js$": "babel-jest",
  },
};
