import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import vue from 'rollup-plugin-vue';
import { defineConfig } from 'rollup';

import packageJson from './package.json' assert { type: 'json' };

export default defineConfig({
  input: './src/index.ts',
  output: [
    {
      format: 'cjs',
      file: packageJson.main,
      sourcemap: true,
      exports: 'named'
    },
    {
      format: 'esm',
      file: packageJson.module,
      sourcemap: true,
      exports: 'named'
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript(),
    vue(),
  ],
});
