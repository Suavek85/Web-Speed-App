module.exports = {
  setupFilesAfterEnv: [
    "<rootDir>src/setupTests.js"
  ],
  transformIgnorePatterns: ["/node_modules/", '/src/constants'],
  moduleNameMapper: {
    "\\.(scss)$": "identity-obj-proxy"
  },
  snapshotSerializers: ["enzyme-to-json/serializer"],
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,jsx}", 
    "!src/index.js", 
  ],
  coveragePathIgnorePatterns: [
    ".story.jsx",
    "/helpers/",
    "/i18n/"
  ],
  coverageReporters: ["text"]
}