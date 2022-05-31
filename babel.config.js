module.exports = {
  presets: [
    "@babel/preset-env",
    // No need to import react whenever using jsx
    // Babel will take care of that transpiling by using the runtime: automatic
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};
