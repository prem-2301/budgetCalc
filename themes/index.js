import theme1 from "./theme1";
import theme2 from "./theme2";

export const themes = {
  theme1,
  theme2,
};

export const mapTheme = (data) => {
  return {
    "--color-1": data[1] || "",
    "--color-2": data[2] || "",
    "--color-3": data[3] || "",
    "--color-4": data[4] || "",
    "--color-primary": data.primary || "",
    "--font-1": data.f1 || "",
    "--font-2": data.f2 || "",
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
