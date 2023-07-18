const theme2 = {
  1: "#657E79",
  2: "#FFF",
  //Donut colors
  3: "#3C5C55",
  4: "#9CB8B2",
  5: "#657E79",
  8: "#f5f7ff",
  f1: "'EuclidCircularB',serif,arial",
  f2: "'EuclidCircularBBold',serif,arial",
  b1: "0px",
  fsl: "16px",
  fsrh: "19px",
  fwrh: "600",
  fsrl: "19px",
  fwrl: "400",
  fscl: "18px",
  fwcl: "600",
};

const newTheme = {
  ...theme2,
  primary: theme2[1],
};

export default { ...newTheme };
