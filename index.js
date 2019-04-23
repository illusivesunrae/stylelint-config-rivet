'use strict';

module.exports = {
  extends: 'stylelint-config-reconmmended',
  defaultSeverity: 'warning',
  rules: {
    'block-closing-brace-newline-after': 'always',
    'block-opening-brace-newline-after': 'always',
    'block-closing-brace-newline-before': 'always',
    'block-opening-brace-space-before': 'always',
    'color-hex-case': 'lower',
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-colon-space-after': 'always-single-line',
    'indentation': 2,
    'number-leading-zero': never,
    'rule-empty-line-before': ['always', { except: ['first-nested'] }],
    'selector-list-comma-newline-after': 'always'
  }
};
