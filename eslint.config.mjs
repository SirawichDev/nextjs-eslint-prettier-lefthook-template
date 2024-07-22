import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginSecurity from 'eslint-plugin-security';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  eslintConfigPrettier,
  ...tseslint.configs.recommended,
  pluginSecurity.configs.recommended,
);
