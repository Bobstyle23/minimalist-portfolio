const svgStack = {
  mode: {
    stack: {
      example: true,
    },
  },
};

const svgSymbol = {
  mode: {
    symbol: {
      sprite: "../sprite.symbol.svg",
    },
  },
  shape: {
    transform: [
      {
        svgo: {
          plugins: [
            {
              name: "removeAttrs",
              params: {
                attrs: "(fill|stroke)",
              },
            },
          ],
        },
      },
    ],
  },
};

const getFontWeight = (weight) => {
  const weightMap = {
    thin: 100,
    extralight: 200,
    light: 300,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    heavy: 800,
    black: 900,
  };

  return weightMap[weight?.toLowerCase()] || 400;
};

export { svgSymbol, svgStack, getFontWeight };
