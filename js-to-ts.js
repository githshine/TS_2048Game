module.exports = function (fileInfo, api) {
  const j = api.jscodeshift;
  const root = j(fileInfo.source);

  // Example: Rename .js imports to .ts
  root
    .find(j.ImportDeclaration)
    .filter((path) => path.node.source.value.endsWith('.js'))
    .forEach((path) => {
      path.node.source.value = path.node.source.value.replace('.js', '.ts');
    });

  // Add more transformations as needed

  return root.toSource();
};
