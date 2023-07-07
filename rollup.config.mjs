import replace from "@rollup/plugin-replace";
import resolve from "@rollup/plugin-node-resolve";
import terser from "@rollup/plugin-terser";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "./lit-components/index.ts",
  output: {
    file: "./dist/index.js",
    format: "esm",
  },
  plugins: [
    replace({
      preventAssignment: true,
      // eslint-disable-next-line no-undef
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
    }),
    resolve(),
    terser(),
    commonjs(),
    typescript({
      tsconfig: "./lit-components/tsconfig.json",
    }),
  ],
};
