module.exports = {
  'env': {
    'browser': true,
    'es2021': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'overrides': [
  ],
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    'indent': ['error', 2],
    'comma-dangle': 'off', // https://eslint.org/docs/rules/comma-dangle
    'function-paren-newline': 'off', // https://eslint.org/docs/rules/function-paren-newline
    'global-require': 'off', // https://eslint.org/docs/rules/global-require
    'import/no-dynamic-require': 'off', // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-dynamic-require.md
    'no-inner-declarations': 'off', // https://eslint.org/docs/rules/no-inner-declarations
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'no-irregular-whitespace': 'off',
    'semi': ['error', 'always'], // 規定要加分號
    'react/jsx-indent': ['error', 2],
    'react/jsx-closing-bracket-location': [
      'error',
      {
        'selfClosing': 'tag-aligned',
        'nonEmpty': 'tag-aligned',
      }
    ],
    'react/jsx-props-no-multi-spaces': ['error'],
    'react/jsx-closing-tag-location': ['error', 'tag-aligned'],
    'react/jsx-tag-spacing': ['error', {
      closingSlash: 'never',
      beforeSelfClosing: 'always',
      afterOpening: 'never',
      beforeClosing: 'never',
    }],
    'arrow-spacing': ['error', { before: true, after: true }],
    'space-infix-ops': 'error',
  }
};
