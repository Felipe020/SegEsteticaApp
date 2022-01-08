module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver', {
          root: ['./'],
          alias: {
            "@seg-estetica/assets": './src/assets',
            "@seg-estetica/components": './src/components',
            "@seg-estetica/config": './src/config',
            "@seg-estetica/contexts": './src/contexts',
            // We don't have constants folder
            // "constants": './src/constants',
            // We don't have modules folder
            // "modules": './modules',
            // We aren't using lib folder structure
            // "lib": './lib',
            "@seg-estetica/hooks": './src/hooks',
            "@seg-estetica/mocks": './src/mocks',
            "@seg-estetica/screens": './src/screens',
            "@seg-estetica/stacks": './src/stacks',
            "@seg-estetica/types": './src/types',
          },
        }
      ],
    ],
  };
};
