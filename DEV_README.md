# For devs

## test

````bash
npm run test
```

## publish

```bash
npm run deploy
````

## structure

- react
- vanilla js

# notes

```
{
  "name": "md-math-field",
  "author": "skafis",
  "version": "1.1.0",
  "description": "A MdMathField (carta-md with mathlive) package with Web Component, React and Svelte components",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "test": "npm run build && npm link && cd test-apps/react && npm link md-math-field && npm run dev",
    "build": "tsc && babel src --out-dir dist --copy-files",
    "build-vanilla": "rollup -c",
    "deploy": "npm run build && npm publish"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/skafis-edtech/md-math-field.git"
  },
  "keywords": [],
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/skafis-edtech/md-math-field/issues"
  },
  "homepage": "https://github.com/skafis-edtech/md-math-field#readme",
  "dependencies": {
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@babel/cli": "^7.26.4",
    "@babel/core": "^7.26.7",
    "@babel/preset-env": "^7.26.7",
    "@babel/preset-react": "^7.26.3",
    "@types/react": "^19.0.8",
    "@types/react-dom": "^19.0.3",
    "typescript": "^5.7.3"
  }
}
```
