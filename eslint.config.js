// export { default } from 'eslint-config-vuetify/index.ts.mjs'


// module.exports = {
//   extends: [
//     'plugin:vue/vue3-essential',
//     // or 'plugin:vue/vue3-recommended' for stricter rules
//     '@vue/typescript/recommended'
//   ],
//   rules: {
//     // Add any custom rules here
//     'vue/multi-word-component-names': 'off', // if you want single-word component names
//   }
// }

import vuetifyConfig from 'eslint-config-vuetify/index.ts.mjs'
import eslintConfigPrettier from "eslint-config-prettier";

export default [
  ...vuetifyConfig,
  {
    rules: {
      "vue/match-component-import-name": "warn",
      "vue/match-component-file-name": [
        "error",
        {
          extensions: ["vue"],
          shouldMatchCase: true,
        },
      ],
      "vue/component-definition-name-casing": ["error", "PascalCase"],
      "vue/block-tag-newline": [
        "warn",
        {
          singleline: "always",
          multiline: "always",
          maxEmptyLines: 0,
        },
      ],
      "vue/html-self-closing": [
        "error",
        {
          html: {
            void: "always",
            normal: "never",
            component: "always",
          },
          svg: "always",
          math: "always",
        },
      ],
      "vue/require-default-prop": "off",
    },
  },
  eslintConfigPrettier
]
