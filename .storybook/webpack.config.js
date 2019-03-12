const path = require('path');

module.exports = ({config}) => {
  const rules = [];
  config.module.rules.forEach(rule => {
    const testCssString = "test.module.css";
    const regex = RegExp(rule.test);
    if (!regex.test(testCssString)) {
      rules.push(rule);
    }
  });
  config.module.rules = rules;

  config.module.rules = [
    {
      test: /\.module\.css$/,
      include: path.resolve(__dirname, '../src'),
      loaders: [
        "style-loader",
        {
          loader: "css-loader",
          options: {
            localIdentName: "[name]__[local]___[hash:base64:5]",
            modules: true,
          }
        }
      ]
    },
    {
      test: /\.css$/,
      include: path.resolve(__dirname, '../node_modules'),
      loaders: [
        "style-loader",
        {
          loader: "css-loader",
        }
      ]
    },
    ...rules
  ];

  return config;
};