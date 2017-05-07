module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "env": {
      "browser": true
    },
    "rules": {
      "strict": "off",
      "no-console": "warn",
      "arrow-parens": ["warn", "as-needed"],
      "arrow-body-style": "off",
      "comma-dangle": ["warn", "only-multiline"],
      "no-unused-vars": ["error", { "argsIgnorePattern": "^_" }]
    },
    "globals": {
      "chrome": true,
      "WebSocket": true,
    }
};