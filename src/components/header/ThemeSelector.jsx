import React, { useEffect, useState } from "react";

let rootCss = document.querySelector(":root");

const ThemeSelector = () => {
  const [theme, setTheme] = useState("#fff");

  const changeTheme = (color) => {
    setTheme(color);
  };

  useEffect(() => {
    switch (theme) {
      case "DarkBlue":
        rootCss.style.setProperty("--color-primary", "#7ff2f8b9");
        rootCss.style.setProperty("--color-primary-variant", "#39eff9b9");
        rootCss.style.setProperty("--color-bg", "#1f3438dc");
        rootCss.style.setProperty("--color-bg-variant", "#2c616cc3");
        break;
      case "Dark":
        rootCss.style.setProperty("--color-primary", "#e6a05a");
        rootCss.style.setProperty("--color-primary-variant", "#063852");
        rootCss.style.setProperty("--color-bg", "#011a27");
        rootCss.style.setProperty("--color-bg-variant", "#e6cf5a");
        break;
      case "Green":
        rootCss.style.setProperty("--color-primary", "#6fb98f");
        rootCss.style.setProperty("--color-primary-variant", "#004455");
        rootCss.style.setProperty("--color-bg", "#2c7873");
        rootCss.style.setProperty("--color-bg-variant", "#04373b");
        break;
      case "Cute":
        rootCss.style.setProperty("--color-primary", "#e6d72a");
        rootCss.style.setProperty("--color-primary-variant", "#5bc8ac");
        rootCss.style.setProperty("--color-bg", "#98dbc6");
        rootCss.style.setProperty("--color-bg-variant", "#f18d9ece");
        break;
      case "Pastel":
        rootCss.style.setProperty("--color-primary", "#ffeb94");
        rootCss.style.setProperty("--color-primary-variant", "#fdd475");
        rootCss.style.setProperty("--color-bg", "#c1e1dc");
        rootCss.style.setProperty("--color-bg-variant", "#ffccac");
        break;
      case "Greece":
        rootCss.style.setProperty("--color-primary", "#e89f8b");
        rootCss.style.setProperty("--color-primary-variant", "#2f496e");
        rootCss.style.setProperty("--color-bg", "#2988bc");
        rootCss.style.setProperty("--color-bg-variant", "#f1dfca");
        break;
    }
  }, [theme]);
  return (
    <div className="color_selector">
      <ul className="change_color">
        <li>
          <input
            type="radio"
            id="DarkBlue"
            name="change_color"
            onChange={() => changeTheme("DarkBlue")}
          />
          <label htmlFor="DarkBlue" className="darkblue">
            {/* Cool */}
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="Dark"
            name="change_color"
            onChange={() => changeTheme("Dark")}
          />
          <label htmlFor="Dark" className="dark">
            {/* Bee */}
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="Green"
            name="change_color"
            onChange={() => changeTheme("Green")}
          />
          <label htmlFor="Green" className="green">
            {/* Forest */}
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="Cute"
            name="change_color"
            onChange={() => changeTheme("Cute")}
          />
          <label htmlFor="Cute" className="cute">
            {/* Cute */}
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="Pastel"
            name="change_color"
            onChange={() => changeTheme("Pastel")}
          />
          <label htmlFor="Pastel" className="pastel">
            {/* Pastel */}
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="Greece"
            name="change_color"
            onChange={() => changeTheme("Greece")}
          />
          <label htmlFor="Greece" className="greece">
            {/* Greece */}
          </label>
        </li>
      </ul>
    </div>
  );
};

export default ThemeSelector;
