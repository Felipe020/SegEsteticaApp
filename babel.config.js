module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        alias: {
          "@assets": './src/assets',
          "@components": './src/components',
          "@config": './src/config',
          "@contexts": './src/contexts',
          // We don't have constants folder
          // "constants": './src/constants',
          // We don't have modules folder
          // "modules": './modules',
          // We aren't using lib folder structure
          // "lib": './lib',
          "@hooks": './src/hooks',
          "@mocks": './src/mocks',
          "@screens": './src/screens',
          "@stacks": './src/stacks',
          "@types": './src/types',
          "@utils": './src/utils',
        },
      }],
    ],
  };
};
