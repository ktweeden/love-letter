module.exports = {
    'extends': 'airbnb-base',
    'plugins': [
        'import'
    ],
    'rules': {
      'semi': 'off',
      'no-underscore-dangle': 'off',
      'no-plusplus': ['error', {'allowForLoopAfterthoughts': true}],
      'no-console': 'off',
      'no-param-reassign': 'off',
      'class-methods-use-this': 'off'
    }
}
