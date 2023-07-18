import theme1 from "./theme1";
import theme2 from "./theme2";
import theme3 from "./theme3";

export const themes = {
  theme1,
  theme2,
  theme3,
};

export const mapTheme = (data) => {
  return {
    "--color-1": data[1] || "",
    "--color-2": data[2] || "",
    "--color-3": data[3] || "",
    "--color-4": data[4] || "",
    "--color-5": data[5] || "",
    "--color-button": data[6] || data.primary,
    "--color-amount": data[7] || data.primary,
    "--color-result-bg": data[8] || "",
    "--color-primary": data.primary || "",
    "--font-1": data.f1 || "",
    "--font-2": data.f2 || "",
    "--border-1": data.b1 || "",
    "--input-label-heading": data.fsl || "",
    "--result-heading-fs": data.fsrh || "",
    "--result-heading-fw": data.fwrh || "",
    "--result-label-fs": data.fsrl || "",
    "--result-label-fw": data.fwrl || "",
    "--chart-label-fs": data.fscl || "",
    "--chart-label-fw": data.fwcl || "",
  };
};

export const applyTheme = (theme) => {
  if (!theme) return false;

  const themeObj = mapTheme(themes[theme]);

  if (!themeObj) return false;

  let style = ":root {";
  Object.keys(themeObj).forEach((property) => {
    if (property === "name") {
      return;
    }

    style += `${property} : ${themeObj[property]};`;
  });
  style += "}";
  return style;
};
