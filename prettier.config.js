// eslint-disable-next-line no-undef
module.exports = {
  plugins: [
    '@ianvs/prettier-plugin-sort-imports',
    'prettier-plugin-tailwindcss'
  ],
  singleQuote: true,
  trailingComma: 'none',
  arrowParens: 'avoid',
  proseWrap: 'preserve',
  quoteProps: 'as-needed',
  bracketSameLine: false,
  bracketSpacing: true,
  tabWidth: 2,
  endOfLine: 'lf',
  importOrder: [
    '^next(.*)$',
    '^react(.*)$',
    '<BUILTIN_MODULES>',
    '<THIRD_PARTY_MODULES>',
    '',
    '^@/(.*)$',
    '',
    '^[./]'
  ],
  importOrderParserPlugins: ['typescript', 'jsx'],
  importOrderTypeScriptVersion: '5.0.0'
};
