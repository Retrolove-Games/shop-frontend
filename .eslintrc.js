module.exports = {
  rules: {
    quotes: ["warn", "double", { allowTemplateLiterals: true }],
    "quote-props": ["error", "as-needed"],
    "import/prefer-default-export": "off",
    "arrow-body-style": "off",
    "import/extensions": [
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
  },
  extends: ["gatsby-standard", "airbnb-base", "react-app", "prettier"],
};
