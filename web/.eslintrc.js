module.exports = {
  extends: [
    'next/babel',
    'next/core-web-vitals',
    'standard',
    'standard-react',
    'prettier',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:react/recommended',
  ],
  rules: {
    'object-curly-spacing': ['error', 'never'],
    'comma-dangle': 0,
    '@next/next/no-img-element': 0,
  },
}
