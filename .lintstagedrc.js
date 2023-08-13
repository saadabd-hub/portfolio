const path = require('path');

const lintAndFormatCommands = (filenames) => {
  const files = filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ');

  return [`next lint --fix --file ${files}`, `npx prettier --write ${files}`];
};

module.exports = {
  '*.{js,jsx,ts,tsx}': lintAndFormatCommands,
};
