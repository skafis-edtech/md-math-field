import resolve from "@rollup/plugin-node-resolve";

export default {
  input: "MdMathField.js",
  output: {
    file: "dist/index.js",
    format: "esm", // or 'cjs' for CommonJS, depending on your target
  },
  plugins: [resolve()],
};
