module.exports = {
  arrowParens: "always",
  bracketSpacing: true,
  bracketSameLine: false,
  endOfLine: "lf",
  overrides: [
    {
      files: ["*.json", ".prettierrc", ".eslintrc"],
      options: { parser: "json" },
    },
  ],
  parser: "babel-ts",
  printWidth: 80,
  quoteProps: "consistent",
  semi: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
};
