const theme1 = {
  1: "#4657a1",
  2: "#FFF",
  //Donut colors
  3: "#24326e",
  4: "#7083d4",
  f1: "'EuclidCircularB',serif,arial",
  f2: "'EuclidCircularBBold',serif,arial",
};

const newTheme = {
  ...theme1,
  primary: theme1[1],
};

export default { ...newTheme };
