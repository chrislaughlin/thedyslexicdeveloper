module.exports = {
    "env": {
        "browser": true,
        "es6": true,
    },
    "plugins": [
        "react",
    ],
    "globals": {
        "graphql": false,
    },
    "parserOptions": {
        "sourceType": "module",
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true,
        },
    },
    "rules": {
        "indent": ["error", 4],
        "semi": ["error", "always"]
    }
}
