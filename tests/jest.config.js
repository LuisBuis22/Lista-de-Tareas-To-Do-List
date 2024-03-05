module.exports = {
  // Le dice a Jest que haga funcionar los tests en un entorno de Node.js
  testEnvironment: "node",

  // Specify the directories that Jest should look for tests in
  testMatch: ["<rootDir>/tests/**/*.test.js", "<rootDir>/tests/**/*.test.ts"],

  // Add any additional configurations as needed
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],

  // Tiempo limite para realizar los distintos test
  testTimeout: 5000, // Timeout in milliseconds
};
