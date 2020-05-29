module.exports = {
  devServer: {
    proxy: {
      "/api/v1": {
        target: "you deno backend api url",
      },
    },
  },
};
