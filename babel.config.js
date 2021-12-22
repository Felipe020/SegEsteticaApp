module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module-resolver', {
        root: ['./'],
        alias: {
          "assets": './src/assets',
          "components": './src/components',
          "config": './src/config',
          "constants": './src/constants',
          "hooks": './src/hooks',
          "modules": './modules',
          "lib": './lib',
          "screens": './src/screens',
          "types": './src/types',
          "stacks": './src/stacks'
        },
      }],
    ],
  };
};
