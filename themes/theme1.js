const theme1 = {
  1: "#4657a1",
  2: "#FFF",
  //Donut colors
  3: "#24326e",
  4: "#7083d4",
  5: "#4657a1",
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
  ...theme1,
  primary: theme1[1],
};

export default { ...newTheme };
