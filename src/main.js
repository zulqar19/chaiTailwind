
    // sab utility object mein add honge
    const utilityMap = {
      p: "padding",
      pt: "paddingTop",
      pb: "paddingBottom",
      pl: "paddingLeft",
      pr: "paddingRight",
      m: "margin",
      mt: "marginTop",
      mb: "marginBottom",
      ml: "marginLeft",
      mr: "marginRight",
      fs: "fontSize",
      rounded: "borderRadius",
      w: "width",
      h: "height",
      bw: "borderWidth",
      gap: "gap",
      z: "zIndex",
    };

    const staticMap = {
      text: "textAlign",
      bg: "backgroundColor",
      "text-color": "color",
      "align-items": "alignItems",
      "justify-content": "justifyContent",
      "flex-wrap": "flexWrap",
      "text-decoration": "textDecoration",
      d: "display",
      pos: "position",
      fw: "fontWeight",
      italic: "fontStyle",
      shadow: "boxShadow",
      cursor: "cursor",
      overflow: "overflow",
    };

    function addInlineStyle(element, type, value) {
      // Agar utility map mein exists karti hai
      if (utilityMap[type]) {
        const num = Number(value);
        const property = utilityMap[type];

        // 2. Dynamic Logic (Scaling)
        if (isNaN(num) || value < 2 || value > 12) {
          element.style[property] = type === "fs" ? "16px" : "4px"; // Default fallback
        } else {
          // Margin/Padding ke liye power of 2, Font-size/border ke liye value multiply 5
          element.style[property] =
            type === "fs" || type === "rounded"
              ? `${value * 5}px`
              : `${value ** 2}px`;
        }

        // Agar static map mein exists karti hai
      } else if (staticMap[type]) {
        const property = staticMap[type];
        element.style[property] = `${value}`;
      }
    }

    // Saara elements select hoga jisme 'chai-' class ho
    const elements = document.querySelectorAll('[class*="chai-"]');


    elements.forEach((element) => {
      element.classList.forEach((className) => {
        if (className.startsWith("chai-")) {
          const parts = className.split("-"); // ['chai', 'p', '13']

          // jb utility words 3 ho
          if (parts.length <= 3) {
            const type = parts[1]; // 'p', 'm','text' or 'fs'
            const value = parts[2]; // '13' or 'textAlign'

            addInlineStyle(element, type, value);
          }
          //jb utility words 3 se jyada ho
          else if (parts.length === 4) {
            const concatProperty = `${parts[1]}-${parts[2]}`; //text + - + color
            const type = concatProperty;
            const lastElement = parts.length - 1; // 4-1

            const value = parts[lastElement];

            addInlineStyle(element, type, value);
          }
        }
      });
    });