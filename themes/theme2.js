const theme2 = {
  1: "#657E79",
  2: "#FFF",
  //Donut colors
  3: "#3C5C55",
  4: "#9CB8B2",
  f1: "'EuclidCircularB',serif,arial",
  f2: "'EuclidCircularBBold',serif,arial",
};

const newTheme = {
  ...theme2,
  primary: theme2[1],
};

export default { ...newTheme };
