module.exports = function (api) {
  api.cache(true);
  return {
    // eslint-disable-next-line quotes
    presets: ["babel-preset-expo"],
  };
};
