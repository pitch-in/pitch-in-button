module.exports = {
    "extends": "airbnb-base",
    "plugins": [
        "import"
    ],
    "rules": {
      "strict": "off",
      "no-console": "warn",
      "arrow-parens": ["error", "as-needed"],
      "comma-dangle": ["warn", "only-multiline"]
    },
    "globals": {
      "chrome": true,
      "WebSocket": true,
    }
};