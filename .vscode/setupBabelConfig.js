import fs from 'fs';
import path from 'path';

const babelConfigPath = path.join(process.cwd(), 'babel.config.cjs');

const babelConfigContent = `// Lets jest load the project's ESM + JSX source through babel-jest.
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }]
  ]
};
`;

if (!fs.existsSync(babelConfigPath)) {
  fs.writeFileSync(babelConfigPath, babelConfigContent, { encoding: 'utf8' });
}