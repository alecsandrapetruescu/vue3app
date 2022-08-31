module.exports = {
    root: true,
    env: {
      "node": true
    },
    extends: [
      //"plugin:vue/essential",
      'plugin:vue/vue3-recommended',
      'eslint:recommended'
    ],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: "@babel/eslint-parser",
        sourceType: "module",
        requireConfigFile: false,
        babelOptions: {
           babelrc: false,
           configFile: false,
          // your babel options
          presets: ["@babel/preset-env"],
        },
   }	
}
