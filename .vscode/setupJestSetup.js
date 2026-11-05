import fs from 'fs';
import path from 'path';

const jestSetupPath = path.join(process.cwd(), 'tests', 'setup', 'jest.setup.js');

const jestSetupContent = `// Adds jest-dom matchers (toBeInTheDocument, etc.) to the client test environment.
require('@testing-library/jest-dom');
`;

if (!fs.existsSync(jestSetupPath)) {
  fs.mkdirSync(path.dirname(jestSetupPath), { recursive: true });
  fs.writeFileSync(jestSetupPath, jestSetupContent, { encoding: 'utf8' });
}