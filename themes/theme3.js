const theme3 = {
  1: "#67C574",
  2: "#FFF",
  //Donut colors
  3: "#399D6D",
  4: "#228E5E",
  5: "#33B274",
  //button
  6: "#1665CE",
  //amountColor
  7: "#039855",
  8: "#FFF",
  f1: "'Unify Sans',arial",
  f2: "'Unify Sans',arial",
  b1: "0.5px solid rgb(226, 225, 225)",
  fsl: "14px",
  fsrh: "16px",
  fwrh: "700",
  fsrl: "16px",
  fwrl: "400",
  fscl: "12px",
  fwcl: "700",
};

const newTheme = {
  ...theme3,
  primary: theme3[1],
};

export default { ...newTheme };
