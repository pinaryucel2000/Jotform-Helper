const getMonth = (number) => {
  if (number == 1) {
    return "January";
  } else if (number == 2) {
    return "February";
  } else if (number == 3) {
    return "March";
  } else if (number == 4) {
    return "April";
  } else if (number == 5) {
    return "May";
  } else if (number == 6) {
    return "June";
  } else if (number == 7) {
    return "July";
  } else if (number == 8) {
    return "August";
  } else if (number == 9) {
    return "September";
  } else if (number == 10) {
    return "October";
  } else if (number == 11) {
    return "November";
  } else if (number == 12) {
    return "December";
  }
};

const getMessages = (categoryIndex, ruleIndex) => {
  var category = categories.filter((obj) => {
    return obj.id === categoryIndex;
  });

  var rule = category[0].rules.filter((obj) => {
    return obj.id === ruleIndex;
  });

  let messages = {};
  messages.shortMessage = rule[0].shortMessage;
  messages.longMessage = rule[0].longMessage;

  return messages;
};

const isPassive = (text, options) => {
  let re = new RegExp(
    "\\b(am|are|were|being|is|been|was|be)\\b\\s*([\\w]+ed|" +
      irregulars.join("|") +
      ")\\b",
    "gi"
  );
  let byRe;

  let r = options && options.by ? byRe || constructByRe() : re;

  while ((match = r.exec(text))) {
    if (exceptions.indexOf(match[2].toLowerCase()) === -1) {
      return true;
    }
  }
  return false;

  function constructByRe() {
    return (byRe = new RegExp(re.toString().slice(1, -3) + "\\s*by\\b", "gi"));
  }
};

const luminance = (r, g, b) => {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

const contrast = (rgb1, rgb2) => {
  var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
  var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
  var brightest = Math.max(lum1, lum2);
  var darkest = Math.min(lum1, lum2);
  return (brightest + 0.05) / (darkest + 0.05);
};

const hexToRgb = (hex) => {
  let bigint = parseInt(hex, 16);
  let r = (bigint >> 16) & 255;
  let g = (bigint >> 8) & 255;
  let b = bigint & 255;

  let rgb = [];
  rgb.push(r);
  rgb.push(g);
  rgb.push(b);
  return rgb;
};

const invertColor = (hex, bw) => {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    throw new Error("Invalid HEX color.");
  }
  var r = parseInt(hex.slice(0, 2), 16),
    g = parseInt(hex.slice(2, 4), 16),
    b = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);
  // pad each with zeros and return
  return "#" + padZero(r) + padZero(g) + padZero(b);
};

const padZero = (str, len) => {
  len = len || 2;
  var zeros = new Array(len).join("0");
  return (zeros + str).slice(-len);
};

const LightenDarkenColor = (col, amt) => {
  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00ff) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000ff) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
};
