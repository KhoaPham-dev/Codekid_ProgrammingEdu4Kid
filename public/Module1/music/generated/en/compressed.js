// Automatically generated file.  Do not edit!

"use strict";
var b,
  g = { Zl: {}, Zy: 40, lz: 125, vE: 5, UE: 10, Id: 28 };
g.dE = g.Id;
g.iE = 8;
g.Kp = 250;
g.Ws = 10;
g.bE = 30;
g.DF = 750;
g.mG = 100;
g.wE = !0;
g.fF = 0.45;
g.gF = 0.65;
g.Jd = { width: 96, height: 124, url: "sprites.png" };
g.kb = 1;
g.Lf = 2;
g.fb = 3;
g.Mf = 4;
g.lh = 5;
g.Ps = -1;
g.Os = 0;
g.Um = 1;
g.DL = 0;
g.EL = 1;
g.BL = 1;
g.CL = 2;
g.Al = [];
g.Al[g.kb] = g.Lf;
g.Al[g.Lf] = g.kb;
g.Al[g.fb] = g.Mf;
g.Al[g.Mf] = g.fb;
g.Tj = 0;
g.xn = 1;
g.te = 2;
g.Ll = 3;
g.vy = null;
g.et = 1;
g.wy = 2;
g.uc = "VARIABLE";
g.CG = "VARIABLE_DYNAMIC";
g.tn = "PROCEDURE";
g.vz = "RENAME_VARIABLE_ID";
g.xy = "DELETE_VARIABLE_ID";
g.g = {};
g.g.global = (function () {
  return "object" === typeof self
    ? self
    : "object" === typeof window
    ? window
    : "object" === typeof global
    ? global
    : this;
})();
g.i = {};
g.g.global.Blockly || (g.g.global.Blockly = {});
g.g.global.Blockly.Msg || (g.g.global.Blockly.Msg = g.i);
g.g.Ab = {};
g.g.Ab.parse = function (a) {
  a = String(a).toLowerCase().trim();
  var c = g.g.Ab.names[a];
  if (c) return c;
  c = "0x" == a.substring(0, 2) ? "#" + a.substring(2) : a;
  c = "#" == c[0] ? c : "#" + c;
  if (/^#[0-9a-f]{6}$/.test(c)) return c;
  if (/^#[0-9a-f]{3}$/.test(c))
    return ["#", c[1], c[1], c[2], c[2], c[3], c[3]].join("");
  var d = a.match(/^(?:rgb)?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/);
  return d &&
    ((a = Number(d[1])),
    (c = Number(d[2])),
    (d = Number(d[3])),
    0 <= a && 256 > a && 0 <= c && 256 > c && 0 <= d && 256 > d)
    ? g.g.Ab.sx(a, c, d)
    : null;
};
g.g.Ab.sx = function (a, c, d) {
  c = (a << 16) | (c << 8) | d;
  return 16 > a
    ? "#" + (16777216 | c).toString(16).substr(1)
    : "#" + c.toString(16);
};
g.g.Ab.MB = function (a) {
  a = g.g.Ab.parse(a);
  if (!a) return [0, 0, 0];
  a = parseInt(a.substr(1), 16);
  return [a >> 16, (a >> 8) & 255, a & 255];
};
g.g.Ab.QB = function (a) {
  var c = g.fF,
    d = 255 * g.gF,
    e = 0,
    f = 0,
    h = 0;
  if (0 == c) h = f = e = d;
  else {
    var k = Math.floor(a / 60),
      l = a / 60 - k;
    a = d * (1 - c);
    var m = d * (1 - c * l);
    c = d * (1 - c * (1 - l));
    switch (k) {
      case 1:
        e = m;
        f = d;
        h = a;
        break;
      case 2:
        e = a;
        f = d;
        h = c;
        break;
      case 3:
        e = a;
        f = m;
        h = d;
        break;
      case 4:
        e = c;
        f = a;
        h = d;
        break;
      case 5:
        e = d;
        f = a;
        h = m;
        break;
      case 6:
      case 0:
        (e = d), (f = c), (h = a);
    }
  }
  return g.g.Ab.sx(Math.floor(e), Math.floor(f), Math.floor(h));
};
g.g.Ab.mu = function (a, c, d) {
  a = g.g.Ab.parse(a);
  if (!a) return null;
  c = g.g.Ab.parse(c);
  if (!c) return null;
  a = g.g.Ab.MB(a);
  c = g.g.Ab.MB(c);
  return g.g.Ab.sx(
    Math.round(c[0] + d * (a[0] - c[0])),
    Math.round(c[1] + d * (a[1] - c[1])),
    Math.round(c[2] + d * (a[2] - c[2]))
  );
};
g.g.Ab.names = {
  aqua: "#00ffff",
  black: "#000000",
  blue: "#0000ff",
  fuchsia: "#ff00ff",
  gray: "#808080",
  green: "#008000",
  lime: "#00ff00",
  maroon: "#800000",
  navy: "#000080",
  olive: "#808000",
  purple: "#800080",
  red: "#ff0000",
  silver: "#c0c0c0",
  teal: "#008080",
  white: "#ffffff",
  yellow: "#ffff00",
};
g.g.V = function (a, c) {
  this.x = a;
  this.y = c;
};
g.g.V.kf = function (a, c) {
  return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1;
};
g.g.V.Zu = function (a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
};
g.g.V.UI = function (a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
g.g.V.Sn = function (a, c) {
  return new g.g.V(a.x - c.x, a.y - c.y);
};
g.g.V.sum = function (a, c) {
  return new g.g.V(a.x + c.x, a.y + c.y);
};
g.g.V.prototype.scale = function (a) {
  this.x *= a;
  this.y *= a;
  return this;
};
g.g.V.prototype.translate = function (a, c) {
  this.x += a;
  this.y += c;
  return this;
};
g.g.Rect = function (a, c, d, e) {
  this.top = a;
  this.bottom = c;
  this.left = d;
  this.right = e;
};
g.g.Rect.prototype.contains = function (a, c) {
  return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom;
};
g.g.pb = {};
g.g.pb.startsWith = function (a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.g.pb.Bx = function (a) {
  return a.length
    ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d;
      }).length
    : 0;
};
g.g.pb.fH = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.pb.Bx(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return d;
  return c;
};
g.g.pb.gH = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.pb.Bx(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return d;
  return c;
};
g.g.pb.HD = function (a, c) {
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) a[d] = g.g.pb.jL(a[d], c);
  return a.join("\n");
};
g.g.pb.jL = function (a, c) {
  if (a.length <= c) return a;
  for (var d = a.trim().split(/\s+/), e = 0; e < d.length; e++)
    d[e].length > c && (c = d[e].length);
  e = -Infinity;
  var f = 1;
  do {
    var h = e;
    var k = a;
    a = [];
    var l = d.length / f,
      m = 1;
    for (e = 0; e < d.length - 1; e++)
      m < (e + 1.5) / l ? (m++, (a[e] = !0)) : (a[e] = !1);
    a = g.g.pb.ID(d, a, c);
    e = g.g.pb.Wx(d, a, c);
    a = g.g.pb.kL(d, a);
    f++;
  } while (e > h);
  return k;
};
g.g.pb.Wx = function (a, c, d) {
  for (var e = [0], f = [], h = 0; h < a.length; h++)
    (e[e.length - 1] += a[h].length),
      !0 === c[h]
        ? (e.push(0), f.push(a[h].charAt(a[h].length - 1)))
        : !1 === c[h] && e[e.length - 1]++;
  a = Math.max.apply(Math, e);
  for (h = c = 0; h < e.length; h++)
    (c -= 2 * Math.pow(Math.abs(d - e[h]), 1.5)),
      (c -= Math.pow(a - e[h], 1.5)),
      -1 != ".?!".indexOf(f[h])
        ? (c += d / 3)
        : -1 != ",;)]}".indexOf(f[h]) && (c += d / 4);
  1 < e.length && e[e.length - 1] <= e[e.length - 2] && (c += 0.5);
  return c;
};
g.g.pb.ID = function (a, c, d) {
  for (var e = g.g.pb.Wx(a, c, d), f, h = 0; h < c.length - 1; h++)
    if (c[h] != c[h + 1]) {
      var k = [].concat(c);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var l = g.g.pb.Wx(a, k, d);
      l > e && ((e = l), (f = k));
    }
  return f ? g.g.pb.ID(a, f, d) : c;
};
g.g.pb.kL = function (a, c) {
  for (var d = [], e = 0; e < a.length; e++)
    d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
  return d.join("");
};
g.g.se = function (a, c) {
  this.width = a;
  this.height = c;
};
g.g.se.kf = function (a, c) {
  return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1;
};
g.g.style = {};
g.g.style.Nh = function (a) {
  if ("none" != g.g.style.AB(a, "display")) return g.g.style.yB(a);
  var c = a.style,
    d = c.display,
    e = c.visibility,
    f = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  var h = a.offsetWidth;
  a = a.offsetHeight;
  c.display = d;
  c.position = f;
  c.visibility = e;
  return new g.g.se(h, a);
};
g.g.style.yB = function (a) {
  return new g.g.se(a.offsetWidth, a.offsetHeight);
};
g.g.style.AB = function (a, c) {
  return (
    g.g.style.getComputedStyle(a, c) ||
    g.g.style.YH(a, c) ||
    (a.style && a.style[c])
  );
};
g.g.style.getComputedStyle = function (a, c) {
  return document.defaultView &&
    document.defaultView.getComputedStyle &&
    (a = document.defaultView.getComputedStyle(a, null))
    ? a[c] || a.getPropertyValue(c) || ""
    : "";
};
g.g.style.YH = function (a, c) {
  return a.currentStyle ? a.currentStyle[c] : null;
};
g.g.style.ik = function (a) {
  var c = new g.g.V(0, 0);
  a = a.getBoundingClientRect();
  var d = document.documentElement;
  d = new g.g.V(
    window.pageXOffset || d.scrollLeft,
    window.pageYOffset || d.scrollTop
  );
  c.x = a.left + d.x;
  c.y = a.top + d.y;
  return c;
};
g.g.style.lI = function () {
  var a = document.body,
    c = document.documentElement;
  return new g.g.V(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop);
};
g.g.style.oO = function (a, c) {
  a.style.display = c ? "" : "none";
};
g.g.style.bO = function (a) {
  return "rtl" == g.g.style.AB(a, "direction");
};
g.g.style.VH = function (a) {
  var c = g.g.style.getComputedStyle(a, "borderLeftWidth"),
    d = g.g.style.getComputedStyle(a, "borderRightWidth"),
    e = g.g.style.getComputedStyle(a, "borderTopWidth");
  a = g.g.style.getComputedStyle(a, "borderBottomWidth");
  return {
    top: parseFloat(e),
    right: parseFloat(d),
    bottom: parseFloat(a),
    left: parseFloat(c),
  };
};
g.g.style.AK = function (a, c) {
  a = g.g.style.$H(a, c);
  c.scrollLeft = a.x;
  c.scrollTop = a.y;
};
g.g.style.$H = function (a, c) {
  var d = g.g.style.ik(a),
    e = g.g.style.ik(c),
    f = g.g.style.VH(c),
    h = d.x - e.x - f.left;
  d = d.y - e.y - f.top;
  a = g.g.style.yB(a);
  e = c.clientHeight - a.height;
  f = c.scrollLeft;
  var k = c.scrollTop;
  f += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
  k += Math.min(d, Math.max(d - e, 0));
  return new g.g.V(f, k);
};
g.g.userAgent = {};
(function (a) {
  function c(e) {
    return -1 != d.indexOf(e.toUpperCase());
  }
  g.g.userAgent.raw = a;
  var d = g.g.userAgent.raw.toUpperCase();
  g.g.userAgent.Xe = c("Trident") || c("MSIE");
  g.g.userAgent.Jj = c("Edge");
  g.g.userAgent.qF = c("JavaFX");
  g.g.userAgent.tL = (c("Chrome") || c("CriOS")) && !g.g.userAgent.Jj;
  g.g.userAgent.Vz = c("WebKit") && !g.g.userAgent.Jj;
  g.g.userAgent.$E =
    c("Gecko") && !g.g.userAgent.Vz && !g.g.userAgent.Xe && !g.g.userAgent.Jj;
  g.g.userAgent.Wm = c("Android");
  g.g.userAgent.ql = c("iPad");
  g.g.userAgent.Wy = c("iPod");
  g.g.userAgent.Vy = c("iPhone") && !g.g.userAgent.ql && !g.g.userAgent.Wy;
  g.g.userAgent.GF = c("Macintosh");
  g.g.userAgent.tG =
    g.g.userAgent.ql || (g.g.userAgent.Wm && !c("Mobile")) || c("Silk");
  g.g.userAgent.PF =
    !g.g.userAgent.tG &&
    (g.g.userAgent.Wy || g.g.userAgent.Vy || g.g.userAgent.Wm || c("IEMobile"));
})((g.g.global.navigator && g.g.global.navigator.userAgent) || "");
g.g.lJ = function (a) {
  a.preventDefault();
  a.stopPropagation();
};
g.g.Cr = function (a) {
  return (
    "textarea" == a.target.type ||
    "text" == a.target.type ||
    "number" == a.target.type ||
    "email" == a.target.type ||
    "password" == a.target.type ||
    "search" == a.target.type ||
    "tel" == a.target.type ||
    "url" == a.target.type ||
    a.target.isContentEditable ||
    (a.target.dataset && "true" == a.target.dataset.dO)
  );
};
g.g.mf = function (a) {
  var c = new g.g.V(0, 0),
    d = a.getAttribute("x");
  d && (c.x = parseInt(d, 10));
  if ((d = a.getAttribute("y"))) c.y = parseInt(d, 10);
  if ((d = (d = a.getAttribute("transform")) && d.match(g.g.mf.EG)))
    (c.x += Number(d[1])), d[3] && (c.y += Number(d[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    (a = a.match(g.g.mf.FG)) &&
    ((c.x += Number(a[1])), a[3] && (c.y += Number(a[3])));
  return c;
};
g.g.jo = function (a) {
  for (var c = 0, d = 0; a; ) {
    var e = g.g.mf(a);
    c += e.x;
    d += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new g.g.V(c, d);
};
g.g.mf.EG = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
g.g.mf.FG = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
g.g.Bk = function (a) {
  return a.ctrlKey && g.g.userAgent.GF ? !0 : 2 == a.button;
};
g.g.Jo = function (a, c, d) {
  var e = c.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  d || (d = c.getScreenCTM().inverse());
  return e.matrixTransform(d);
};
g.g.xB = function (a) {
  switch (a.deltaMode) {
    default:
      return { x: a.deltaX, y: a.deltaY };
    case 1:
      return { x: a.deltaX * g.Zy, y: a.deltaY * g.Zy };
    case 2:
      return { x: a.deltaX * g.lz, y: a.deltaY * g.lz };
  }
};
g.g.SK = function (a) {
  return g.g.Lx(a, !0);
};
g.g.Nc = function (a) {
  if ("string" != typeof a) return a;
  a = g.g.Lx(a, !1);
  return a.length ? String(a[0]) : "";
};
g.g.rA = function (a) {
  for (var c = g.i, d = a.match(/%{BKY_[A-Z]\w*}/gi), e = 0; e < d.length; e++)
    void 0 == c[d[e].toUpperCase().slice(6, -1)] &&
      console.warn("No message string for " + d[e] + " in " + a);
};
g.g.Lx = function (a, c) {
  var d = [],
    e = a.split("");
  e.push("");
  var f = 0;
  a = [];
  for (var h = null, k = 0; k < e.length; k++) {
    var l = e[k];
    0 == f
      ? "%" == l
        ? ((l = a.join("")) && d.push(l), (a.length = 0), (f = 1))
        : a.push(l)
      : 1 == f
      ? "%" == l
        ? (a.push(l), (f = 0))
        : c && "0" <= l && "9" >= l
        ? ((f = 2), (h = l), (l = a.join("")) && d.push(l), (a.length = 0))
        : "{" == l
        ? (f = 3)
        : (a.push("%", l), (f = 0))
      : 2 == f
      ? "0" <= l && "9" >= l
        ? (h += l)
        : (d.push(parseInt(h, 10)), k--, (f = 0))
      : 3 == f &&
        ("" == l
          ? (a.splice(0, 0, "%{"), k--, (f = 0))
          : "}" != l
          ? a.push(l)
          : ((f = a.join("")),
            /[A-Z]\w*/i.test(f)
              ? ((l = f.toUpperCase()),
                (l = g.g.pb.startsWith(l, "BKY_") ? l.substring(4) : null) &&
                l in g.i
                  ? ((f = g.i[l]),
                    "string" == typeof f
                      ? Array.prototype.push.apply(d, g.g.Lx(f, c))
                      : c
                      ? d.push(String(f))
                      : d.push(f))
                  : d.push("%{" + f + "}"))
              : d.push("%{" + f + "}"),
            (f = a.length = 0)));
  }
  (l = a.join("")) && d.push(l);
  c = [];
  for (k = a.length = 0; k < d.length; ++k)
    "string" == typeof d[k]
      ? a.push(d[k])
      : ((l = a.join("")) && c.push(l), (a.length = 0), c.push(d[k]));
  (l = a.join("")) && c.push(l);
  a.length = 0;
  return c;
};
g.g.Lh = function () {
  for (var a = g.g.Lh.jD.length, c = [], d = 0; 20 > d; d++)
    c[d] = g.g.Lh.jD.charAt(Math.random() * a);
  return c.join("");
};
g.g.Lh.jD =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.tk = function () {
  if (void 0 !== g.g.tk.xu) return g.g.tk.xu;
  if (!g.g.global.getComputedStyle) return !1;
  var a = document.createElement("p"),
    c = "none",
    d = {
      webkitTransform: "-webkit-transform",
      OTransform: "-o-transform",
      msTransform: "-ms-transform",
      MozTransform: "-moz-transform",
      transform: "transform",
    };
  document.body.insertBefore(a, null);
  for (var e in d)
    if (void 0 !== a.style[e]) {
      a.style[e] = "translate3d(1px,1px,1px)";
      c = g.g.global.getComputedStyle(a);
      if (!c) return document.body.removeChild(a), !1;
      c = c.getPropertyValue(d[e]);
    }
  document.body.removeChild(a);
  g.g.tk.xu = "none" !== c;
  return g.g.tk.xu;
};
g.g.dD = function (a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" == document.readyState) a();
  else
    var c = setInterval(function () {
      "complete" == document.readyState && (clearInterval(c), a());
    }, 10);
};
g.g.kI = function () {
  var a = g.g.style.lI();
  return new g.g.Rect(
    a.y,
    document.documentElement.clientHeight + a.y,
    a.x,
    document.documentElement.clientWidth + a.x
  );
};
g.g.Dn = function (a, c) {
  c = a.indexOf(c);
  if (-1 == c) return !1;
  a.splice(c, 1);
  return !0;
};
g.g.dI = function () {
  var a = document.documentElement,
    c = window;
  return g.g.userAgent.Xe && c.pageYOffset != a.scrollTop
    ? new g.g.V(a.scrollLeft, a.scrollTop)
    : new g.g.V(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop);
};
g.g.wv = function (a, c) {
  var d = Object.create(null),
    e = p(a, !0);
  c && (a = t(a)) && ((a = e.indexOf(a)), e.splice(a, e.length - a));
  for (a = 0; (c = e[a]); a++) d[c.type] ? d[c.type]++ : (d[c.type] = 1);
  return d;
};
g.g.zK = function (a, c) {
  var d = c.x;
  c = c.y;
  var e = aa(a).getBoundingClientRect();
  d = new g.g.V(d - e.left, c - e.top);
  c = g.g.jo(a.wb);
  return g.g.V.Sn(d, c).scale(1 / a.scale);
};
g.g.ds = function (a) {
  var c = "string" == typeof a ? g.g.Nc(a) : a,
    d = Number(c);
  if (!isNaN(d) && 0 <= d && 360 >= d) return { zI: d, oo: g.g.Ab.QB(d) };
  if ((d = g.g.Ab.parse(c))) return { zI: null, oo: d };
  d = 'Invalid colour: "' + c + '"';
  a != c && (d += ' (from "' + a + '")');
  throw Error(d);
};
g.Touch = {};
g.Touch.Iz =
  "ontouchstart" in g.g.global ||
  !!(
    g.g.global.document &&
    document.documentElement &&
    "ontouchstart" in document.documentElement
  ) ||
  !(
    !g.g.global.navigator ||
    (!g.g.global.navigator.maxTouchPoints &&
      !g.g.global.navigator.msMaxTouchPoints)
  );
g.Touch.up = null;
g.Touch.og = {};
g.g.global.PointerEvent
  ? (g.Touch.og = {
      mousedown: ["pointerdown"],
      mouseenter: ["pointerenter"],
      mouseleave: ["pointerleave"],
      mousemove: ["pointermove"],
      mouseout: ["pointerout"],
      mouseover: ["pointerover"],
      mouseup: ["pointerup", "pointercancel"],
      touchend: ["pointerup"],
      touchcancel: ["pointercancel"],
    })
  : g.Touch.Iz &&
    (g.Touch.og = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"],
    });
g.Hr = 0;
g.SI = function (a, c) {
  g.ej();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (g.Hr = setTimeout(function () {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      c && ba(c, a);
    }, g.DF));
};
g.ej = function () {
  g.Hr && (clearTimeout(g.Hr), (g.Hr = 0));
};
g.Touch.Yj = function () {
  g.Touch.up = null;
};
g.Touch.Dx = function (a) {
  return !g.Touch.JI(a) || g.Touch.bH(a);
};
g.Touch.qr = function (a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 !== a.changedTouches[0].identifier &&
      null !== a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
g.Touch.bH = function (a) {
  var c = g.Touch.qr(a);
  return void 0 !== g.Touch.up && null !== g.Touch.up
    ? g.Touch.up == c
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((g.Touch.up = c), !0)
    : !1;
};
g.Touch.CK = function (a) {
  if (g.g.pb.startsWith(a.type, "touch")) {
    var c = a.changedTouches[0];
    a.clientX = c.clientX;
    a.clientY = c.clientY;
  }
};
g.Touch.JI = function (a) {
  return (
    g.g.pb.startsWith(a.type, "touch") ||
    g.g.pb.startsWith(a.type, "mouse") ||
    g.g.pb.startsWith(a.type, "pointer")
  );
};
g.Touch.Er = function (a) {
  return (
    g.g.pb.startsWith(a.type, "touch") || g.g.pb.startsWith(a.type, "pointer")
  );
};
g.Touch.KK = function (a) {
  var c = [];
  if (a.changedTouches)
    for (var d = 0; d < a.changedTouches.length; d++)
      c[d] = {
        type: a.type,
        changedTouches: [a.changedTouches[d]],
        target: a.target,
        stopPropagation: function () {
          a.stopPropagation();
        },
        preventDefault: function () {
          a.preventDefault();
        },
      };
  else c.push(a);
  return c;
};
g.g.G = function (a) {
  this.PK = a;
};
g.g.G.prototype.toString = function () {
  return this.PK;
};
g.g.G.Qs = new g.g.G("animate");
g.g.G.Zs = new g.g.G("circle");
g.g.G.Ym = new g.g.G("clipPath");
g.g.G.uy = new g.g.G("defs");
g.g.G.ht = new g.g.G("feComposite");
g.g.G.HE = new g.g.G("feComponentTransfer");
g.g.G.IE = new g.g.G("feFlood");
g.g.G.JE = new g.g.G("feFuncA");
g.g.G.KE = new g.g.G("feGaussianBlur");
g.g.G.LE = new g.g.G("fePointLight");
g.g.G.ME = new g.g.G("feSpecularLighting");
g.g.G.Gy = new g.g.G("filter");
g.g.G.VE = new g.g.G("foreignObject");
g.g.G.rc = new g.g.G("g");
g.g.G.si = new g.g.G("image");
g.g.G.gn = new g.g.G("line");
g.g.G.$d = new g.g.G("path");
g.g.G.mz = new g.g.G("pattern");
g.g.G.eG = new g.g.G("polygon");
g.g.G.Bc = new g.g.G("rect");
g.g.G.Rj = new g.g.G("svg");
g.g.G.Tt = new g.g.G("text");
g.g.G.Kz = new g.g.G("tspan");
g.g.o = {};
g.g.o.nq = "http://www.w3.org/2000/svg";
g.g.o.ol = "http://www.w3.org/1999/xhtml";
g.g.o.bf = "http://www.w3.org/1999/xlink";
g.g.o.zi = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  COMMENT_NODE: 8,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
};
g.g.o.Qf = null;
g.g.o.uu = 0;
g.g.o.Gq = null;
g.g.o.M = function (a, c, d) {
  a = document.createElementNS(g.g.o.nq, String(a));
  for (var e in c) a.setAttribute(e, c[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  d && d.appendChild(a);
  return a;
};
g.g.o.Ha = function (a, c) {
  var d = a.getAttribute("class") || "";
  -1 == (" " + d + " ").indexOf(" " + c + " ") &&
    (d && (d += " "), a.setAttribute("class", d + c));
};
g.g.o.aD = function (a, c) {
  c = c.split(" ");
  for (var d = 0; d < c.length; d++) g.g.o.wc(a, c[d]);
};
g.g.o.wc = function (a, c) {
  var d = a.getAttribute("class");
  if (-1 != (" " + d + " ").indexOf(" " + c + " ")) {
    d = d.split(/\s+/);
    for (var e = 0; e < d.length; e++)
      (d[e] && d[e] != c) || (d.splice(e, 1), e--);
    d.length
      ? a.setAttribute("class", d.join(" "))
      : a.removeAttribute("class");
  }
};
g.g.o.Mv = function (a, c) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ");
};
g.g.o.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
g.g.o.rk = function (a, c) {
  var d = c.nextSibling;
  c = c.parentNode;
  if (!c) throw Error("Reference node has no parent.");
  d ? c.insertBefore(a, d) : c.appendChild(a);
};
g.g.o.containsNode = function (a, c) {
  return !!(
    a.compareDocumentPosition(c) & g.g.o.zi.DOCUMENT_POSITION_CONTAINED_BY
  );
};
g.g.o.cp = function (a, c) {
  a.style.transform = c;
  a.style["-webkit-transform"] = c;
};
g.g.o.mp = function () {
  g.g.o.uu++;
  g.g.o.Qf || (g.g.o.Qf = {});
};
g.g.o.np = function () {
  g.g.o.uu--;
  g.g.o.uu || (g.g.o.Qf = null);
};
g.g.o.WN = function (a) {
  var c = a.textContent + "\n" + a.className.baseVal,
    d;
  if (g.g.o.Qf && (d = g.g.o.Qf[c])) return d;
  try {
    d =
      g.g.userAgent.Xe || g.g.userAgent.Jj
        ? a.getBBox().width
        : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  g.g.o.Qf && (g.g.o.Qf[c] = d);
  return d;
};
g.g.o.Bv = function (a, c, d, e) {
  return g.g.o.qB(a, c + "pt", d, e);
};
g.g.o.qB = function (a, c, d, e) {
  var f = a.textContent;
  a = f + "\n" + a.className.baseVal;
  var h;
  if (g.g.o.Qf && (h = g.g.o.Qf[a])) return h;
  g.g.o.Gq ||
    ((h = document.createElement("canvas")),
    (h.className = "blocklyComputeCanvas"),
    document.body.appendChild(h),
    (g.g.o.Gq = h.getContext("2d")));
  g.g.o.Gq.font = d + " " + c + " " + e;
  h = g.g.o.Gq.measureText(f).width;
  g.g.o.Qf && (g.g.o.Qf[a] = h);
  return h;
};
g.g.o.nC = function (a, c, d, e) {
  var f = document.createElement("span");
  f.style.font = d + " " + c + " " + e;
  f.textContent = a;
  a = document.createElement("div");
  a.style.width = "1px";
  a.style.height = "0px";
  c = document.createElement("div");
  c.setAttribute("style", "position: fixed; top: 0; left: 0; display: flex;");
  c.appendChild(f);
  c.appendChild(a);
  document.body.appendChild(c);
  try {
    (d = {}),
      (c.style.alignItems = "baseline"),
      (d.df = a.offsetTop - f.offsetTop),
      (c.style.alignItems = "flex-end"),
      (d.height = a.offsetTop - f.offsetTop);
  } finally {
    document.body.removeChild(c);
  }
  return d;
};
g.g.sM = function () {};
g.vn = function (a) {
  this.s = a;
  this.pf = new g.Sa(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.Ff = new g.Sa(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.Mn = g.g.o.M(
    g.g.G.Bc,
    { height: g.Sa.Oc, width: g.Sa.Oc, class: "blocklyScrollbarBackground" },
    null
  );
  g.g.o.rk(this.Mn, a.cg);
  this.Xb = null;
};
g.vn.prototype.I = function () {
  g.g.o.removeNode(this.Mn);
  this.Xb = this.s = this.Mn = null;
  this.pf.I();
  this.pf = null;
  this.Ff.I();
  this.Ff = null;
};
g.vn.prototype.resize = function () {
  var a = this.s.Vc();
  if (a) {
    var c = !1,
      d = !1;
    this.Xb &&
    this.Xb.Gb == a.Gb &&
    this.Xb.Nb == a.Nb &&
    this.Xb.Tc == a.Tc &&
    this.Xb.Jc == a.Jc
      ? ((this.Xb &&
          this.Xb.gf == a.gf &&
          this.Xb.Rb == a.Rb &&
          this.Xb.gd == a.gd) ||
          (c = !0),
        (this.Xb &&
          this.Xb.Md == a.Md &&
          this.Xb.bc == a.bc &&
          this.Xb.Uc == a.Uc) ||
          (d = !0))
      : (d = c = !0);
    if (c || d) {
      try {
        g.h.disable(), c && this.pf.resize(a), d && this.Ff.resize(a);
      } finally {
        g.h.enable();
      }
      ca(this.s);
    }
    (this.Xb && this.Xb.Gb == a.Gb && this.Xb.Jc == a.Jc) ||
      this.Mn.setAttribute("x", this.Ff.position.x);
    (this.Xb && this.Xb.Nb == a.Nb && this.Xb.Tc == a.Tc) ||
      this.Mn.setAttribute("y", this.pf.position.y);
    this.Xb = a;
  }
};
g.vn.prototype.set = function (a, c) {
  var d = {};
  a *= this.pf.ratio;
  c *= this.Ff.ratio;
  var e = this.Ff.yf,
    f = a / this.pf.yf;
  d.x = isNaN(f) ? 0 : f;
  e = c / e;
  d.y = isNaN(e) ? 0 : e;
  this.s.fp(d);
  da(this.pf, a);
  da(this.Ff, c);
};
g.Sa = function (a, c, d, e) {
  this.s = a;
  this.Am = d || !1;
  this.mk = c;
  this.ratio = this.Xb = null;
  this.Ae(e);
  this.position = new g.g.V(0, 0);
  a = g.Sa.Oc;
  c
    ? (this.od.setAttribute("height", a),
      this.Tg.setAttribute("height", a),
      this.me.setAttribute("height", a - 5),
      this.me.setAttribute("y", 2.5),
      (this.Bo = "width"),
      (this.PC = "x"))
    : (this.od.setAttribute("width", a),
      this.Tg.setAttribute("width", a),
      this.me.setAttribute("width", a - 5),
      this.me.setAttribute("x", 2.5),
      (this.Bo = "height"),
      (this.PC = "y"));
  this.JC = g.ya(this.od, "mousedown", this, this.vJ);
  this.KC = g.ya(this.me, "mousedown", this, this.wJ);
};
b = g.Sa.prototype;
b.Pw = new g.g.V(0, 0);
b.lD = 0;
b.yf = 0;
b.Ri = 0;
b.mo = 0;
b.Uh = !0;
b.$j = !0;
g.Sa.Oc = 15;
g.Touch.Iz && (g.Sa.Oc = 25);
g.Sa.VI = function (a, c) {
  return a &&
    c &&
    a.Gb == c.Gb &&
    a.Nb == c.Nb &&
    a.Rb == c.Rb &&
    a.bc == c.bc &&
    a.Tc == c.Tc &&
    a.Jc == c.Jc &&
    a.gf == c.gf &&
    a.Md == c.Md &&
    a.gd == c.gd &&
    a.Uc == c.Uc
    ? !0
    : !1;
};
g.Sa.prototype.I = function () {
  ea();
  g.Oa(this.JC);
  this.JC = null;
  g.Oa(this.KC);
  this.KC = null;
  g.g.o.removeNode(this.Tg);
  this.od = this.N = this.Tg = null;
  this.me && (this.s.yc.unsubscribe(this.me), (this.me = null));
  this.s = null;
};
function da(a, c) {
  a.mo = c;
  a.me.setAttribute(a.PC, a.mo);
}
function fa(a, c) {
  a.yf = c;
  a.Tg.setAttribute(a.Bo, a.yf);
  a.od.setAttribute(a.Bo, a.yf);
}
g.vn.prototype.Sk = function (a) {
  this.pf.Sk(a);
  this.Ff.Sk(a);
};
b = g.Sa.prototype;
b.setPosition = function (a, c) {
  this.position.x = a;
  this.position.y = c;
  g.g.o.cp(
    this.Tg,
    "translate(" +
      (this.position.x + this.Pw.x) +
      "px," +
      (this.position.y + this.Pw.y) +
      "px)"
  );
};
b.resize = function (a) {
  if (!a && ((a = this.s.Vc()), !a)) return;
  g.Sa.VI(a, this.Xb) ||
    ((this.Xb = a), this.mk ? ha(this, a) : ia(this, a), ja(this));
};
function ha(a, c) {
  var d = c.Gb - 1;
  a.Am && (d -= g.Sa.Oc);
  fa(a, Math.max(0, d));
  d = c.Jc + 0.5;
  a.Am && a.s.L && (d += g.Sa.Oc);
  a.setPosition(d, c.Tc + c.Nb - g.Sa.Oc - 0.5);
  ka(a, c);
}
function ka(a, c) {
  a.Am || a.Eb(a.yf < c.gf);
  a.ratio = a.yf / c.gf;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Ri = Math.max(0, c.Gb * a.ratio);
  a.me.setAttribute(a.Bo, a.Ri);
  da(a, la(a, (c.Rb - c.gd) * a.ratio));
}
function ia(a, c) {
  var d = c.Nb - 1;
  a.Am && (d -= g.Sa.Oc);
  fa(a, Math.max(0, d));
  d = c.Jc + 0.5;
  a.s.L || (d += c.Gb - g.Sa.Oc - 1);
  a.setPosition(d, c.Tc + 0.5);
  ma(a, c);
}
function ma(a, c) {
  a.Am || a.Eb(a.yf < c.Md);
  a.ratio = a.yf / c.Md;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Ri = Math.max(0, c.Nb * a.ratio);
  a.me.setAttribute(a.Bo, a.Ri);
  da(a, la(a, (c.bc - c.Uc) * a.ratio));
}
b.Ae = function (a) {
  var c = "blocklyScrollbar" + (this.mk ? "Horizontal" : "Vertical");
  a && (c += " " + a);
  this.Tg = g.g.o.M(g.g.G.Rj, { class: c }, null);
  this.N = g.g.o.M(g.g.G.rc, {}, this.Tg);
  this.od = g.g.o.M(g.g.G.Bc, { class: "blocklyScrollbarBackground" }, this.N);
  a = Math.floor((g.Sa.Oc - 5) / 2);
  this.me = g.g.o.M(
    g.g.G.Bc,
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.N
  );
  this.s.yc.subscribe(this.me, "scrollbarColour", "fill");
  this.s.yc.subscribe(this.me, "scrollbarOpacity", "fill-opacity");
  g.g.o.rk(this.Tg, u(this.s));
};
b.isVisible = function () {
  return this.Uh;
};
b.Sk = function (a) {
  var c = a != this.$j;
  this.$j = a;
  c && this.xp();
};
b.Eb = function (a) {
  var c = a != this.isVisible();
  if (this.Am) throw Error("Unable to toggle visibility of paired scrollbars.");
  this.Uh = a;
  c && this.xp();
};
b.xp = function () {
  this.$j && this.isVisible()
    ? this.Tg.setAttribute("display", "block")
    : this.Tg.setAttribute("display", "none");
};
b.vJ = function (a) {
  na(this.s);
  g.Touch.Yj();
  ea();
  if (g.g.Bk(a)) a.stopPropagation();
  else {
    var c = g.g.Jo(a, u(this.s), pa(this.s));
    c = this.mk ? c.x : c.y;
    var d = g.g.jo(this.me);
    d = this.mk ? d.x : d.y;
    var e = this.mo,
      f = 0.95 * this.Ri;
    c <= d ? (e -= f) : c >= d + this.Ri && (e += f);
    da(this, la(this, e));
    ja(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
b.wJ = function (a) {
  na(this.s);
  ea();
  g.g.Bk(a)
    ? a.stopPropagation()
    : ((this.LK = this.mo),
      qa(this.s),
      (this.lD = this.mk ? a.clientX : a.clientY),
      (g.Sa.ld = g.ya(document, "mouseup", this, this.BJ)),
      (g.Sa.kj = g.ya(document, "mousemove", this, this.yJ)),
      a.stopPropagation(),
      a.preventDefault());
};
b.yJ = function (a) {
  da(this, la(this, this.LK + ((this.mk ? a.clientX : a.clientY) - this.lD)));
  ja(this);
};
b.BJ = function () {
  ra(this.s);
  g.Touch.Yj();
  ea();
};
function ea() {
  g.Dc(!0);
  g.Sa.ld && (g.Oa(g.Sa.ld), (g.Sa.ld = null));
  g.Sa.kj && (g.Oa(g.Sa.kj), (g.Sa.kj = null));
}
function la(a, c) {
  return (c = 0 >= c || isNaN(c) || a.yf < a.Ri ? 0 : Math.min(c, a.yf - a.Ri));
}
function ja(a) {
  var c = a.mo / a.yf;
  isNaN(c) && (c = 0);
  var d = {};
  a.mk ? (d.x = c) : (d.y = c);
  a.s.fp(d);
}
b.set = function (a) {
  da(this, la(this, a * this.ratio));
  ja(this);
};
g.g.Vd = {};
g.g.Vd.Kx = function (a) {
  return (a * Math.PI) / 180;
};
g.g.Vd.uO = function (a) {
  return (180 * a) / Math.PI;
};
g.g.Vd.Xj = function (a, c, d) {
  if (d < a) {
    var e = d;
    d = a;
    a = e;
  }
  return Math.max(a, Math.min(c, d));
};
g.C = {};
g.C.Pm = {};
g.C.Wp = "default";
g.C.Z = function (a) {
  this.gj = a;
};
g.C.Z.prototype.toString = function () {
  return this.gj;
};
g.C.Z.oy = new g.C.Z("connectionChecker");
g.C.Z.cc = new g.C.Z("event");
g.C.Z.Ac = new g.C.Z("field");
g.C.Z.RENDERER = new g.C.Z("renderer");
g.C.Z.qq = new g.C.Z("toolbox");
g.C.Z.Ut = new g.C.Z("theme");
g.C.Z.Ml = new g.C.Z("toolboxItem");
g.C.Z.Iy = new g.C.Z("flyoutsVerticalToolbox");
g.C.Z.TE = new g.C.Z("flyoutsHorizontalToolbox");
g.C.register = function (a, c, d, e) {
  if ((!(a instanceof g.C.Z) && "string" != typeof a) || "" == String(a).trim())
    throw Error(
      'Invalid type "' +
        a +
        '". The type must be a non-empty string or a Blockly.registry.Type.'
    );
  a = String(a).toLowerCase();
  if ("string" != typeof c || "" == c.trim())
    throw Error(
      'Invalid name "' + c + '". The name must be a non-empty string.'
    );
  c = c.toLowerCase();
  if (!d) throw Error("Can not register a null value");
  var f = g.C.Pm[a];
  f || (f = g.C.Pm[a] = {});
  g.C.bL(a, d);
  if (!e && f[c])
    throw Error('Name "' + c + '" with type "' + a + '" already registered.');
  f[c] = d;
};
g.C.bL = function (a, c) {
  switch (a) {
    case String(g.C.Z.Ac):
      if ("function" != typeof c.ea)
        throw Error('Type "' + a + '" must have a fromJson function');
  }
};
g.C.unregister = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.Pm[a];
  d
    ? d[c]
      ? delete g.C.Pm[a][c]
      : console.warn('No name "' + c + '" with type "' + a + '" found')
    : console.warn('No type "' + a + '" found');
};
g.C.sB = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.Pm[a];
  return d
    ? d[c]
      ? d[c]
      : (console.warn('No name "' + c + '" with type "' + a + '" found'), null)
    : (console.warn('No type "' + a + '" found'), null);
};
g.C.vI = function (a) {
  var c = g.C.Z.Ml;
  c = String(c).toLowerCase();
  a = a.toLowerCase();
  return (c = g.C.Pm[c]) ? !!c[a] : !1;
};
g.C.co = function (a, c) {
  return g.C.sB(a, c);
};
g.C.Fv = function (a, c) {
  return g.C.sB(a, c);
};
g.C.jr = function (a, c) {
  c = c.plugins[a.toString()] || g.C.Wp;
  return "function" == typeof c ? c : g.C.co(a, c);
};
g.qy = function () {};
function v(a, c, d, e, f) {
  return a.Fq(c, d, e, f) == g.Aa.Op;
}
g.qy.prototype.Fq = function (a, c, d, e) {
  if (a && c) {
    if (x(a)) {
      var f = a.W();
      var h = c.W();
    } else (h = a.W()), (f = c.W());
    f =
      f == h
        ? g.Aa.qz
        : c.type != g.Al[a.type]
        ? g.Aa.uz
        : f.u !== h.u
        ? g.Aa.oz
        : f.Na && !h.Na
        ? g.Aa.rz
        : g.Aa.Op;
  } else f = g.Aa.sz;
  return f != g.Aa.Op
    ? f
    : sa(a, c)
    ? d && !ta(a, c, e || 0)
      ? g.Aa.pz
      : g.Aa.Op
    : g.Aa.nz;
};
function ua(a, c, d) {
  switch (a) {
    case g.Aa.qz:
      return "Attempted to connect a block to itself.";
    case g.Aa.oz:
      return "Blocks not on same workspace.";
    case g.Aa.uz:
      return "Attempt to connect incompatible types.";
    case g.Aa.sz:
      return "Target connection is null.";
    case g.Aa.nz:
      return (
        "Connection checks failed. " +
        (c + " expected " + c.Hi + ", found " + d.Hi)
      );
    case g.Aa.rz:
      return "Connecting non-shadow to shadow block.";
    case g.Aa.pz:
      return "Drag checks failed.";
    default:
      return "Unknown connection failure: this should never happen!";
  }
}
function sa(a, c) {
  a = a.Hi;
  c = c.Hi;
  if (!a || !c) return !0;
  for (var d = 0; d < a.length; d++) if (-1 != c.indexOf(a[d])) return !0;
  return !1;
}
function ta(a, c, d) {
  if (va(a, c) > d || c.W().Td()) return !1;
  switch (c.type) {
    case g.Mf:
      return (
        a.na || -1 != g.fm.indexOf(c)
          ? (a = !1)
          : c.na
          ? ((a = c.ra()), (a = a.Td() ? !(a.ca && a.ca.ra()) : !1))
          : (a = !0),
        a
      );
    case g.Lf:
      if ((c.isConnected() && !c.ra().Td()) || a.isConnected()) return !1;
      break;
    case g.kb:
      if (c.isConnected() && !c.ra().Fc() && !c.ra().Na) return !1;
      break;
    case g.fb:
      if (c.isConnected() && !a.W().X && !c.ra().Na && c.ra().X) return !1;
      break;
    default:
      return !1;
  }
  return -1 != g.fm.indexOf(c) ? !1 : !0;
}
g.C.register(g.C.Z.oy, g.C.Wp, g.qy);
g.h = {};
g.h.HB = "";
g.h.Za = !0;
g.h.Vu = 0;
g.h.Sp = "create";
g.h.Hp = g.h.Sp;
g.h.Ij = "delete";
g.h.Ss = g.h.Ij;
g.h.Gj = "change";
g.h.TD = g.h.Gj;
g.h.ln = "move";
g.h.Ts = g.h.ln;
g.h.Oz = "var_create";
g.h.Pz = "var_delete";
g.h.Rz = "var_rename";
g.h.Zt = "ui";
g.h.iy = "drag";
g.h.El = "selected";
g.h.$s = "click";
g.h.$y = "marker_move";
g.h.Jp = "bubble_open";
g.h.Jz = "trashcan_open";
g.h.Hz = "toolbox_item_select";
g.h.Gz = "theme_change";
g.h.Sz = "viewport_change";
g.h.Pp = "comment_create";
g.h.ny = "comment_delete";
g.h.ly = "comment_change";
g.h.Qp = "comment_move";
g.h.Hy = "finished_loading";
g.h.YD = [g.h.Hp, g.h.Ts, g.h.Pp, g.h.Qp];
g.h.cn = [];
g.h.Fa = function (a) {
  g.h.isEnabled() && (g.h.cn.length || setTimeout(g.h.PH, 0), g.h.cn.push(a));
};
g.h.PH = function () {
  for (
    var a = g.h.filter(g.h.cn, !0), c = (g.h.cn.length = 0), d;
    (d = a[c]);
    c++
  )
    if (d.Pc) {
      var e = g.Ob.bo(d.Pc);
      if (e) {
        var f = d;
        if (f.Za)
          for (e.Yk.push(f), e.Uo.length = 0; e.Yk.length > e.bz && 0 <= e.bz; )
            e.Yk.shift();
        for (var h = 0; (d = e.Ud[h]); h++) d(f);
      }
    }
};
g.h.filter = function (a, c) {
  a = a.slice();
  c || a.reverse();
  for (var d = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.um()) {
      var k = [h.Fr ? g.h.Zt : h.type, h.lb, h.Pc].join(" "),
        l = e[k],
        m = l ? l.event : null;
      if (!l) (e[k] = { event: h, index: f }), d.push(h);
      else if (h.type == g.h.ln && l.index == f - 1)
        (m.Kk = h.Kk), (m.Jk = h.Jk), (m.ij = h.ij), (l.index = f);
      else if (h.type == g.h.Gj && h.element == m.element && h.name == m.name)
        m.newValue = h.newValue;
      else if (h.type != g.h.$s || m.type != g.h.Jp)
        (e[k] = { event: h, index: f }), d.push(h);
    }
  a = d.filter(function (n) {
    return !n.um();
  });
  c || a.reverse();
  for (f = 1; (h = a[f]); f++)
    h.type == g.h.Gj && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
g.h.dH = function () {
  for (var a = 0, c; (c = g.h.cn[a]); a++) c.Za = !1;
};
g.h.disable = function () {
  g.h.Vu++;
};
g.h.enable = function () {
  g.h.Vu--;
};
g.h.isEnabled = function () {
  return 0 == g.h.Vu;
};
g.h.oc = function () {
  return g.h.HB;
};
g.h.ga = function (a) {
  g.h.HB = "boolean" == typeof a ? (a ? g.g.Lh() : "") : a;
};
g.h.nB = function (a) {
  var c = [];
  a = p(a, !1);
  for (var d = 0, e; (e = a[d]); d++) c[d] = e.id;
  return c;
};
g.h.ea = function (a) {
  var c = g.C.co(g.C.Z.cc, a.type);
  if (!c) throw Error("Unknown event type.");
  c = new c();
  c.ea(a);
  c.Pc = (void 0).id;
  return c;
};
g.h.UA = function (a) {
  if ((a.type == g.h.ln || a.type == g.h.Sp) && a.Pc) {
    var c = g.Ob.bo(a.Pc),
      d = c.td(a.lb);
    if (d) {
      a = g.h.Za;
      try {
        g.h.Za = !1;
        var e = d.getParent();
        if (e && e.isEnabled()) {
          var f = p(d, !1);
          c = 0;
          for (var h; (h = f[c]); c++) h.Wd(!0);
        } else if ((d.O || d.ca) && !c.Ec()) {
          do d.Wd(!1), (d = t(d));
          while (d);
        }
      } finally {
        g.h.Za = a;
      }
    }
  }
};
g.g.object = {};
g.g.object.U = function (a, c) {
  a.v = c.prototype;
  a.prototype = Object.create(c.prototype);
  a.prototype.constructor = a;
};
g.g.object.Je = function (a, c) {
  for (var d in c) a[d] = c[d];
};
g.g.object.cm = function (a, c) {
  for (var d in c)
    a[d] =
      null != c[d] && "object" === typeof c[d]
        ? g.g.object.cm(a[d] || Object.create(null), c[d])
        : c[d];
  return a;
};
g.g.object.values = function (a) {
  return Object.values
    ? Object.values(a)
    : Object.keys(a).map(function (c) {
        return a[c];
      });
};
g.Uj = function (a, c, d, e) {
  this.name = a;
  this.Fi = c || Object.create(null);
  this.Hq = d || Object.create(null);
  this.wA = e || Object.create(null);
  this.fontStyle = Object.create(null);
  this.Hx = null;
  g.C.register(g.C.Z.Ut, a, this);
};
g.Uj.prototype.Uf = function () {
  return this.name + "-theme";
};
function xa(a, c) {
  return (c = a.wA[c]) && "string" == typeof c && xa(a, c)
    ? xa(a, c)
    : c
    ? String(c)
    : null;
}
g.Uj.uH = function (a, c) {
  var d = new g.Uj(a),
    e = c.base;
  e &&
    ("string" == typeof e && (e = g.C.Fv(g.C.Z.Ut, e)),
    e instanceof g.Uj && (g.g.object.cm(d, e), (d.name = a)));
  g.g.object.cm(d.Fi, c.blockStyles);
  g.g.object.cm(d.Hq, c.categoryStyles);
  g.g.object.cm(d.wA, c.componentStyles);
  g.g.object.cm(d.fontStyle, c.fontStyle);
  null != c.startHats && (d.Hx = c.startHats);
  return d;
};
g.uh = {};
g.uh.ni = {};
g.uh.ni.rH = {
  colour_blocks: { colourPrimary: "20" },
  list_blocks: { colourPrimary: "260" },
  logic_blocks: { colourPrimary: "210" },
  loop_blocks: { colourPrimary: "120" },
  math_blocks: { colourPrimary: "230" },
  procedure_blocks: { colourPrimary: "290" },
  text_blocks: { colourPrimary: "160" },
  variable_blocks: { colourPrimary: "330" },
  variable_dynamic_blocks: { colourPrimary: "310" },
  hat_blocks: { colourPrimary: "330", hat: "cap" },
};
g.uh.ni.Hq = {
  colour_category: { colour: "20" },
  list_category: { colour: "260" },
  logic_category: { colour: "210" },
  loop_category: { colour: "120" },
  math_category: { colour: "230" },
  procedure_category: { colour: "290" },
  text_category: { colour: "160" },
  variable_category: { colour: "330" },
  variable_dynamic_category: { colour: "310" },
};
g.uh.ni = new g.Uj("classic", g.uh.ni.rH, g.uh.ni.Hq);
g.g.rl = {};
g.g.rl.kJ = 0;
g.g.rl.Ev = function () {
  return "blockly-" + (g.g.rl.kJ++).toString(36);
};
g.g.wa = {};
g.g.wa.Ys = "categoryToolbox";
g.g.wa.Jy = "flyoutToolbox";
g.g.wa.Hd = { rq: g.Tj, Us: g.xn, wl: g.te, Dl: g.Ll };
g.g.wa.Fu = function (a) {
  if (!a) return null;
  if (a instanceof Element || "string" == typeof a)
    (a = g.g.wa.Uw(a)), (a = g.g.wa.mH(a));
  g.g.wa.aL(a);
  return a;
};
g.g.wa.aL = function (a) {
  var c = a.kind;
  a = a.contents;
  if (c && c != g.g.wa.Jy && c != g.g.wa.Ys)
    throw Error(
      "Invalid toolbox kind " +
        c +
        ". Please supply either " +
        g.g.wa.Jy +
        " or " +
        g.g.wa.Ys
    );
  if (!a) throw Error("Toolbox must have a contents attribute.");
};
g.g.wa.FA = function (a) {
  return a
    ? a.contents
      ? a.contents
      : Array.isArray(a) && 0 < a.length && !a[0].nodeType
      ? a
      : g.g.wa.Xx(a)
    : [];
};
g.g.wa.no = function (a) {
  if (!a) return !1;
  var c = a.kind;
  return c
    ? c == g.g.wa.Ys
    : !!a.contents.filter(function (d) {
        return "CATEGORY" == d.kind.toUpperCase();
      }).length;
};
g.g.wa.WB = function (a) {
  return a && a.contents
    ? !!a.contents.filter(function (c) {
        return "CATEGORY" == c.kind.toUpperCase();
      }).length
    : !1;
};
g.g.wa.mH = function (a) {
  var c = { contents: g.g.wa.Xx(a) };
  a instanceof Node && g.g.wa.cA(a, c);
  return c;
};
g.g.wa.Xx = function (a) {
  var c = [],
    d = a.childNodes;
  d || (d = a);
  a = 0;
  for (var e; (e = d[a]); a++)
    if (e.tagName) {
      var f = {},
        h = e.tagName.toUpperCase();
      f.kind = h;
      "BLOCK" == h
        ? (f.blockxml = e)
        : e.childNodes &&
          0 < e.childNodes.length &&
          (f.contents = g.g.wa.Xx(e));
      g.g.wa.cA(e, f);
      c.push(f);
    }
  return c;
};
g.g.wa.cA = function (a, c) {
  for (var d = 0; d < a.attributes.length; d++) {
    var e = a.attributes[d];
    -1 < e.nodeName.indexOf("css-")
      ? ((c.cssconfig = c.cssconfig || {}),
        (c.cssconfig[e.nodeName.replace("css-", "")] = e.value))
      : (c[e.nodeName] = e.value);
  }
};
g.g.wa.Uw = function (a) {
  if (a) {
    if (
      ("string" != typeof a &&
        (g.g.userAgent.Xe && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a &&
        ((a = g.T.Pe(a)), "xml" != a.nodeName.toLowerCase()))
    )
      throw TypeError("Toolbox should be an <xml> document.");
  } else a = null;
  return a;
};
g.h.Abstract = function () {
  this.He = null;
  this.Pc = void 0;
  this.group = g.h.oc();
  this.Za = g.h.Za;
};
b = g.h.Abstract.prototype;
b.Fr = !1;
b.va = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
b.ea = function (a) {
  this.He = !1;
  this.group = a.group;
};
b.um = function () {
  return !1;
};
b.run = function () {};
function y(a) {
  if (a.Pc) var c = g.Ob.bo(a.Pc);
  if (!c)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return c;
}
g.g.xml = {};
g.g.xml.UF = "https://developers.google.com/blockly/xml";
g.g.xml.document = function () {
  return document;
};
g.g.xml.createElement = function (a) {
  return g.g.xml.document().createElementNS(g.g.xml.UF, a);
};
g.g.xml.createTextNode = function (a) {
  return g.g.xml.document().createTextNode(a);
};
g.g.xml.QK = function (a) {
  return new DOMParser().parseFromString(a, "text/xml");
};
g.g.xml.fe = function (a) {
  return new XMLSerializer().serializeToString(a);
};
g.h.fg = function (a) {
  g.h.fg.v.constructor.call(this);
  this.lb = (this.He = "undefined" == typeof a) ? "" : a.id;
  this.Pc = this.He ? "" : a.u.id;
};
g.g.object.U(g.h.fg, g.h.Abstract);
g.h.fg.prototype.va = function () {
  var a = g.h.fg.v.va.call(this);
  a.blockId = this.lb;
  return a;
};
g.h.fg.prototype.ea = function (a) {
  g.h.fg.v.ea.call(this, a);
  this.lb = a.blockId;
};
g.h.mi = function (a, c, d, e, f) {
  g.h.mi.v.constructor.call(this, a);
  a &&
    ((this.element = "undefined" == typeof c ? "" : c),
    (this.name = "undefined" == typeof d ? "" : d),
    (this.oldValue = "undefined" == typeof e ? "" : e),
    (this.newValue = "undefined" == typeof f ? "" : f));
};
g.g.object.U(g.h.mi, g.h.fg);
g.h.gh = g.h.mi;
b = g.h.mi.prototype;
b.type = g.h.Gj;
b.va = function () {
  var a = g.h.mi.v.va.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.oldValue = this.oldValue;
  a.newValue = this.newValue;
  return a;
};
b.ea = function (a) {
  g.h.mi.v.ea.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.oldValue = a.oldValue;
  this.newValue = a.newValue;
};
b.um = function () {
  return this.oldValue == this.newValue;
};
b.run = function (a) {
  var c = y(this).td(this.lb);
  if (c)
    switch (
      (c.kd && c.kd.Eb(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (c = z(c, this.name))
          ? c.setValue(a)
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        c.vj(a || null);
        break;
      case "collapsed":
        c.uj(!!a);
        break;
      case "disabled":
        c.Wd(!a);
        break;
      case "inline":
        c.Ne(!!a);
        break;
      case "mutation":
        var d = "";
        c.vb && (d = (d = c.vb()) && g.T.fe(d));
        if (c.Vb) {
          var e = g.T.Pe(a || "<mutation/>");
          c.Vb(e);
        }
        g.h.Fa(new g.h.mi(c, "mutation", null, d, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.lb);
};
g.h.Te = function (a) {
  g.h.Te.v.constructor.call(this, a);
  a &&
    (a.Na && (this.Za = !1),
    (this.xml = a.u.pa ? g.T.ou(a) : g.T.Ah(a)),
    (this.Qh = g.h.nB(a)));
};
g.g.object.U(g.h.Te, g.h.fg);
g.h.Mp = g.h.Te;
g.h.Te.prototype.type = g.h.Sp;
g.h.Te.prototype.va = function () {
  var a = g.h.Te.v.va.call(this);
  a.xml = g.T.fe(this.xml);
  a.ids = this.Qh;
  this.Za || (a.recordUndo = this.Za);
  return a;
};
g.h.Te.prototype.ea = function (a) {
  g.h.Te.v.ea.call(this, a);
  this.xml = g.T.Pe(a.xml);
  this.Qh = a.ids;
  void 0 !== a.recordUndo && (this.Za = a.recordUndo);
};
g.h.Te.prototype.run = function (a) {
  var c = y(this);
  if (a)
    (a = g.g.xml.createElement("xml")), a.appendChild(this.xml), g.T.Mi(a, c);
  else {
    a = 0;
    for (var d; (d = this.Qh[a]); a++) {
      var e = c.td(d);
      e
        ? e.I(!1)
        : d == this.lb &&
          console.warn("Can't uncreate non-existent block: " + d);
    }
  }
};
g.h.Jf = function (a) {
  g.h.Jf.v.constructor.call(this, a);
  if (a) {
    if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
    a.Na && (this.Za = !1);
    this.zm = a.u.pa ? g.T.ou(a) : g.T.Ah(a);
    this.Qh = g.h.nB(a);
  }
};
g.g.object.U(g.h.Jf, g.h.fg);
g.h.ZD = g.h.Jf;
g.h.Jf.prototype.type = g.h.Ij;
g.h.Jf.prototype.va = function () {
  var a = g.h.Jf.v.va.call(this);
  a.oldXml = g.T.fe(this.zm);
  a.ids = this.Qh;
  this.Za || (a.recordUndo = this.Za);
  return a;
};
g.h.Jf.prototype.ea = function (a) {
  g.h.Jf.v.ea.call(this, a);
  this.zm = g.T.Pe(a.oldXml);
  this.Qh = a.ids;
  void 0 !== a.recordUndo && (this.Za = a.recordUndo);
};
g.h.Jf.prototype.run = function (a) {
  var c = y(this);
  if (a) {
    a = 0;
    for (var d; (d = this.Qh[a]); a++) {
      var e = c.td(d);
      e
        ? e.I(!1)
        : d == this.lb && console.warn("Can't delete non-existent block: " + d);
    }
  } else
    (a = g.g.xml.createElement("xml")), a.appendChild(this.zm), g.T.Mi(a, c);
};
g.h.Mj = function (a) {
  g.h.Mj.v.constructor.call(this, a);
  a &&
    (a.Na && (this.Za = !1),
    (a = ya(this)),
    (this.CC = a.MC),
    (this.yC = a.RB),
    (this.Ew = a.GA));
};
g.g.object.U(g.h.Mj, g.h.fg);
g.h.Xm = g.h.Mj;
b = g.h.Mj.prototype;
b.type = g.h.ln;
b.va = function () {
  var a = g.h.Mj.v.va.call(this);
  this.Kk && (a.newParentId = this.Kk);
  this.Jk && (a.newInputName = this.Jk);
  this.ij &&
    (a.newCoordinate = Math.round(this.ij.x) + "," + Math.round(this.ij.y));
  this.Za || (a.recordUndo = this.Za);
  return a;
};
b.ea = function (a) {
  g.h.Mj.v.ea.call(this, a);
  this.Kk = a.newParentId;
  this.Jk = a.newInputName;
  if (a.newCoordinate) {
    var c = a.newCoordinate.split(",");
    this.ij = new g.g.V(Number(c[0]), Number(c[1]));
  }
  void 0 !== a.recordUndo && (this.Za = a.recordUndo);
};
b.Qk = function () {
  var a = ya(this);
  this.Kk = a.MC;
  this.Jk = a.RB;
  this.ij = a.GA;
};
function ya(a) {
  var c = y(a).td(a.lb);
  a = {};
  var d = c.getParent();
  if (d) {
    if (((a.MC = d.id), (c = za(d, c)))) a.RB = c.name;
  } else a.GA = c.Xa();
  return a;
}
b.um = function () {
  return this.CC == this.Kk && this.yC == this.Jk && g.g.V.kf(this.Ew, this.ij);
};
b.run = function (a) {
  var c = y(this),
    d = c.td(this.lb);
  if (d) {
    var e = a ? this.Kk : this.CC,
      f = a ? this.Jk : this.yC;
    a = a ? this.ij : this.Ew;
    var h = null;
    if (e && ((h = c.td(e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    d.getParent() && A(d);
    if (a) (f = d.Xa()), d.moveBy(a.x - f.x, a.y - f.y);
    else {
      d = d.O || d.ca;
      if (f) {
        if ((c = B(h, f))) var k = c.connection;
      } else d.type == g.Mf && (k = h.X);
      k
        ? d.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.lb);
};
g.C.register(g.C.Z.cc, g.h.Sp, g.h.Te);
g.C.register(g.C.Z.cc, g.h.Ij, g.h.Jf);
g.C.register(g.C.Z.cc, g.h.Gj, g.h.mi);
g.C.register(g.C.Z.cc, g.h.ln, g.h.Mj);
g.h.ml = function (a) {
  this.He = "undefined" == typeof a;
  this.Pc = a ? a.id : "";
  this.group = g.h.oc();
  this.Za = !1;
};
g.g.object.U(g.h.ml, g.h.Abstract);
g.h.ml.prototype.type = g.h.Hy;
g.h.ml.prototype.va = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.Pc && (a.workspaceId = this.Pc);
  return a;
};
g.h.ml.prototype.ea = function (a) {
  this.He = !1;
  this.Pc = a.workspaceId;
  this.group = a.group;
};
g.C.register(g.C.Z.cc, g.h.Hy, g.h.ml);
g.h.xh = function (a) {
  g.h.xh.v.constructor.call(this);
  this.Bj = (this.He = "undefined" == typeof a) ? "" : a.La();
  this.Pc = this.He ? "" : a.u.id;
};
g.g.object.U(g.h.xh, g.h.Abstract);
g.h.xh.prototype.va = function () {
  var a = g.h.xh.v.va.call(this);
  a.varId = this.Bj;
  return a;
};
g.h.xh.prototype.ea = function (a) {
  g.h.xh.v.va.call(this);
  this.Bj = a.varId;
};
g.h.af = function (a) {
  g.h.af.v.constructor.call(this, a);
  a && ((this.al = a.type), (this.$k = a.name));
};
g.g.object.U(g.h.af, g.h.xh);
g.h.af.prototype.type = g.h.Oz;
g.h.af.prototype.va = function () {
  var a = g.h.af.v.va.call(this);
  a.varType = this.al;
  a.varName = this.$k;
  return a;
};
g.h.af.prototype.ea = function (a) {
  g.h.af.v.ea.call(this, a);
  this.al = a.varType;
  this.$k = a.varName;
};
g.h.af.prototype.run = function (a) {
  var c = y(this);
  a ? c.hf(this.$k, this.al, this.Bj) : c.Jh(this.Bj);
};
g.h.Pf = function (a) {
  g.h.Pf.v.constructor.call(this, a);
  a && ((this.al = a.type), (this.$k = a.name));
};
g.g.object.U(g.h.Pf, g.h.xh);
g.h.Pf.prototype.type = g.h.Pz;
g.h.Pf.prototype.va = function () {
  var a = g.h.Pf.v.va.call(this);
  a.varType = this.al;
  a.varName = this.$k;
  return a;
};
g.h.Pf.prototype.ea = function (a) {
  g.h.Pf.v.ea.call(this, a);
  this.al = a.varType;
  this.$k = a.varName;
};
g.h.Pf.prototype.run = function (a) {
  var c = y(this);
  a ? c.Jh(this.Bj) : c.hf(this.$k, this.al, this.Bj);
};
g.h.rg = function (a, c) {
  g.h.rg.v.constructor.call(this, a);
  a && ((this.Gw = a.name), (this.Bw = "undefined" == typeof c ? "" : c));
};
g.g.object.U(g.h.rg, g.h.xh);
g.h.rg.prototype.type = g.h.Rz;
g.h.rg.prototype.va = function () {
  var a = g.h.rg.v.va.call(this);
  a.oldName = this.Gw;
  a.newName = this.Bw;
  return a;
};
g.h.rg.prototype.ea = function (a) {
  g.h.rg.v.ea.call(this, a);
  this.Gw = a.oldName;
  this.Bw = a.newName;
};
g.h.rg.prototype.run = function (a) {
  var c = y(this);
  a ? c.rj(this.Bj, this.Bw) : c.rj(this.Bj, this.Gw);
};
g.C.register(g.C.Z.cc, g.h.Oz, g.h.af);
g.C.register(g.C.Z.cc, g.h.Pz, g.h.Pf);
g.C.register(g.C.Z.cc, g.h.Rz, g.h.rg);
g.T = {};
g.T.iL = function () {
  var a = C,
    c = g.g.xml.createElement("xml"),
    d = g.T.eL(g.$.gA(a));
  d.hasChildNodes() && c.appendChild(d);
  var e = [].concat(a.Is);
  1 < e.length &&
    ((a.$g.offset = Math.sin(g.g.Vd.Kx(g.Ob.yz))),
    a.L && (a.$g.offset *= -1),
    e.sort(a.$g));
  d = 0;
  for (var f; (f = e[d]); d++) c.appendChild(f.uD(!0));
  a = a.Ib(!0);
  for (d = 0; (e = a[d]); d++) c.appendChild(g.T.ou(e, !0));
  return c;
};
g.T.eL = function (a) {
  for (var c = g.g.xml.createElement("variables"), d = 0, e; (e = a[d]); d++) {
    var f = g.g.xml.createElement("variable");
    f.appendChild(g.g.xml.createTextNode(e.name));
    e.type && f.setAttribute("type", e.type);
    f.id = e.La();
    c.appendChild(f);
  }
  return c;
};
g.T.ou = function (a, c) {
  if (a.Td() && ((a = Aa(a, !1)[0]), !a)) return new DocumentFragment();
  var d;
  a.u.L && (d = a.u.Kg());
  c = g.T.Ah(a, c);
  var e = a.Xa();
  c.setAttribute("x", Math.round(a.u.L ? d - e.x : e.x));
  c.setAttribute("y", Math.round(e.y));
  return c;
};
g.T.OH = function (a) {
  var c = !1;
  a.name &&
    (a.Fl
      ? (c = !0)
      : a.$m &&
        (console.warn(
          "Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."
        ),
        (c = !0)));
  return c
    ? ((c = g.g.xml.createElement("field")),
      c.setAttribute("name", a.name || ""),
      a.tD(c))
    : null;
};
g.T.MG = function (a, c) {
  for (var d = 0, e; (e = a.S[d]); d++)
    for (var f = 0, h; (h = e.hb[f]); f++) (h = g.T.OH(h)) && c.appendChild(h);
};
g.T.Ah = function (a, c) {
  if (a.Td()) return (a = Aa(a, !1)[0]) ? g.T.Ah(a) : new DocumentFragment();
  var d = g.g.xml.createElement(a.Na ? "shadow" : "block");
  d.setAttribute("type", a.type);
  c || d.setAttribute("id", a.id);
  if (a.vb) {
    var e = a.vb();
    e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e);
  }
  g.T.MG(a, d);
  if ((e = a.ye.text)) {
    var f = a.ye.size,
      h = a.ye.Yw,
      k = g.g.xml.createElement("comment");
    k.appendChild(g.g.xml.createTextNode(e));
    k.setAttribute("pinned", h);
    k.setAttribute("h", f.height);
    k.setAttribute("w", f.width);
    d.appendChild(k);
  }
  a.data &&
    ((e = g.g.xml.createElement("data")),
    e.appendChild(g.g.xml.createTextNode(a.data)),
    d.appendChild(e));
  for (e = 0; (f = a.S[e]); e++) {
    var l;
    h = !0;
    if (f.type != g.lh) {
      var m = f.connection.ra();
      f.type == g.kb
        ? (l = g.g.xml.createElement("value"))
        : f.type == g.fb && (l = g.g.xml.createElement("statement"));
      k = f.connection.jm();
      !k || (m && m.Na) || l.appendChild(g.T.tA(k, c));
      m &&
        ((k = g.T.Ah(m, c)),
        k.nodeType == g.g.o.zi.ELEMENT_NODE && (l.appendChild(k), (h = !1)));
      l.setAttribute("name", f.name);
      h || d.appendChild(l);
    }
  }
  void 0 != a.Rh && a.Rh != a.EI && d.setAttribute("inline", a.Rh);
  a.isCollapsed() && d.setAttribute("collapsed", !0);
  a.isEnabled() || d.setAttribute("disabled", !0);
  a.le() || a.Na || d.setAttribute("deletable", !1);
  a.Fc() || a.Na || d.setAttribute("movable", !1);
  a.Sd() || d.setAttribute("editable", !1);
  if ((e = t(a)))
    (k = g.T.Ah(e, c)),
      k.nodeType == g.g.o.zi.ELEMENT_NODE &&
        ((l = g.g.xml.createElement("next")),
        l.appendChild(k),
        d.appendChild(l));
  k = a.X && a.X.jm();
  !k || (e && e.Na) || l.appendChild(g.T.tA(k, c));
  return d;
};
g.T.tA = function (a, c) {
  for (var d = (a = a.cloneNode(!0)), e; d; )
    if ((c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild))
      d = d.firstChild;
    else {
      for (; d && !d.nextSibling; )
        (e = d),
          (d = d.parentNode),
          e.nodeType == g.g.o.zi.TEXT_NODE &&
            "" == e.data.trim() &&
            d.firstChild != e &&
            g.g.o.removeNode(e);
      d &&
        ((e = d),
        (d = d.nextSibling),
        e.nodeType == g.g.o.zi.TEXT_NODE &&
          "" == e.data.trim() &&
          g.g.o.removeNode(e));
    }
  return a;
};
g.T.fe = function (a) {
  return g.g.xml.fe(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>");
};
g.T.QN = function (a) {
  a = g.T.fe(a).split("<");
  for (var c = "", d = 1; d < a.length; d++) {
    var e = a[d];
    "/" == e[0] && (c = c.substring(2));
    a[d] = c + "<" + e;
    "/" != e[0] && "/>" != e.slice(-2) && (c += "  ");
  }
  a = a.join("\n");
  a = a.replace(/(<(\w+)\b[^>]*>[^\n]*)\n *<\/\2>/g, "$1</$2>");
  return a.replace(/^\n/, "");
};
g.T.Pe = function (a) {
  var c = g.g.xml.QK(a);
  if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length)
    throw Error("textToDom was unable to parse: " + a);
  return c.documentElement;
};
g.T.NN = function (a, c) {
  c.Zc(!1);
  c.clear();
  a = g.T.Mi(a, c);
  c.Zc(!0);
  return a;
};
g.T.Mi = function (a, c) {
  if (a instanceof g.Ob) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  c.L && (e = c.Kg());
  d = [];
  g.g.o.mp();
  var f = g.h.oc();
  f || g.h.ga(!0);
  c.Zc && c.Zc(!1);
  var h = !0;
  try {
    for (var k = 0, l; (l = a.childNodes[k]); k++) {
      var m = l.nodeName.toLowerCase(),
        n = l;
      if ("block" == m || ("shadow" == m && !g.h.Za)) {
        var q = g.T.ck(n, c);
        d.push(q.id);
        var r = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10,
          w = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
        isNaN(r) || isNaN(w) || q.moveBy(c.L ? e - r : r, w);
        h = !1;
      } else {
        if ("shadow" == m)
          throw TypeError("Shadow block cannot be a top-level block.");
        if ("comment" == m)
          c.pa
            ? g.Ol
              ? g.Ol.$n(n)
              : console.warn(
                  "Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment."
                )
            : g.$z
            ? g.$z.$n(n)
            : console.warn(
                "Missing require for Blockly.WorkspaceComment, ignoring workspace comment."
              );
        else if ("variables" == m) {
          if (h) g.T.GH(n, c);
          else
            throw Error(
              "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
            );
          h = !1;
        }
      }
    }
  } finally {
    f || g.h.ga(!1), g.g.o.np();
  }
  c.Zc && c.Zc(!0);
  g.h.Fa(new g.h.ml(c));
  return d;
};
g.T.JN = function (a, c) {
  var d;
  Object.prototype.hasOwnProperty.call(c, "scale") && (d = Ba(c));
  a = g.T.Mi(a, c);
  if (d && d.top != d.bottom) {
    var e = d.bottom;
    var f = c.L ? d.right : d.left;
    var h = Infinity,
      k = -Infinity,
      l = Infinity;
    for (d = 0; d < a.length; d++) {
      var m = c.td(a[d]).Xa();
      m.y < l && (l = m.y);
      m.x < h && (h = m.x);
      m.x > k && (k = m.x);
    }
    e = e - l + 10;
    f = c.L ? f - k : f - h;
    for (d = 0; d < a.length; d++) c.td(a[d]).moveBy(f, e);
  }
  return a;
};
g.T.ck = function (a, c) {
  if (a instanceof g.Ob) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  g.h.disable();
  d = c.gk();
  try {
    var e = g.T.av(a, c),
      f = p(e, !1);
    if (c.pa) {
      Ca(e, !1);
      for (var h = f.length - 1; 0 <= h; h--) f[h].qf();
      for (h = f.length - 1; 0 <= h; h--) f[h].Ga(!1);
      setTimeout(function () {
        e.Sf || Ca(e, !0);
      }, 1);
      Da(e);
      Ea(c);
    } else for (h = f.length - 1; 0 <= h; h--) f[h].pk();
  } finally {
    g.h.enable();
  }
  if (g.h.isEnabled()) {
    a = g.$.jB(c, d);
    for (h = 0; h < a.length; h++) g.h.Fa(new g.h.af(a[h]));
    g.h.Fa(new g.h.Mp(e));
  }
  return e;
};
g.T.GH = function (a, c) {
  for (var d = 0, e; (e = a.childNodes[d]); d++)
    if (e.nodeType == g.g.o.zi.ELEMENT_NODE) {
      var f = e.getAttribute("type"),
        h = e.getAttribute("id");
      c.hf(e.textContent, f, h);
    }
};
g.T.av = function (a, c) {
  var d = null,
    e = a.getAttribute("type");
  if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
  var f = a.getAttribute("id");
  d = c.hj(e, f);
  var h = null;
  f = 0;
  for (var k; (k = a.childNodes[f]); f++)
    if (k.nodeType != g.g.o.zi.TEXT_NODE) {
      for (var l, m = (h = null), n = 0; (l = k.childNodes[n]); n++)
        l.nodeType == g.g.o.zi.ELEMENT_NODE &&
          ("block" == l.nodeName.toLowerCase()
            ? (h = l)
            : "shadow" == l.nodeName.toLowerCase() && (m = l));
      n = !1;
      var q = k.getAttribute("name");
      l = k;
      switch (k.nodeName.toLowerCase()) {
        case "mutation":
          d.Vb && (d.Vb(l), d.qf && (n = !0));
          break;
        case "comment":
          if (!g.Comment) {
            console.warn(
              "Missing require for Blockly.Comment, ignoring block comment."
            );
            break;
          }
          m = l.textContent;
          h = "true" == l.getAttribute("pinned");
          k = parseInt(l.getAttribute("w"), 10);
          l = parseInt(l.getAttribute("h"), 10);
          d.vj(m);
          d.ye.Yw = h;
          isNaN(k) || isNaN(l) || (d.ye.size = new g.g.se(k, l));
          h &&
            d.ZH &&
            !d.Lb &&
            setTimeout(function () {
              d.ff.Eb(!0);
            }, 1);
          break;
        case "data":
          d.data = k.textContent;
          break;
        case "title":
        case "field":
          g.T.FH(d, q, l);
          break;
        case "value":
        case "statement":
          l = B(d, q);
          if (!l) {
            console.warn("Ignoring non-existent input " + q + " in block " + e);
            break;
          }
          if (h)
            if (((h = g.T.av(h, c)), h.O)) l.connection.connect(h.O);
            else if (h.ca) l.connection.connect(h.ca);
            else
              throw TypeError(
                "Child block does not have output or previous statement."
              );
          m && l.connection.Hm(m);
          break;
        case "next":
          if (h) {
            if (!d.X) throw TypeError("Next statement does not exist.");
            if (d.X.isConnected())
              throw TypeError("Next statement is already connected.");
            h = g.T.av(h, c);
            if (!h.ca)
              throw TypeError("Next block does not have previous statement.");
            d.X.connect(h.ca);
          }
          m && d.X && d.X.Hm(m);
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  n && d.qf();
  (f = a.getAttribute("inline")) && d.Ne("true" == f);
  (f = a.getAttribute("disabled")) && d.Wd("true" != f && "disabled" != f);
  if ((f = a.getAttribute("deletable"))) d.Sq = "true" == f;
  (f = a.getAttribute("movable")) && d.us("true" == f);
  (f = a.getAttribute("editable")) && d.vx("true" == f);
  (f = a.getAttribute("collapsed")) && d.uj("true" == f);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = Aa(d, !1);
    for (f = 0; (c = a[f]); f++)
      if (!c.Na) throw TypeError("Shadow block not allowed non-shadow child.");
    if (d.Oh().length)
      throw TypeError("Shadow blocks cannot have variable references.");
    d.yx(!0);
  }
  return d;
};
g.T.FH = function (a, c, d) {
  var e = z(a, c);
  e
    ? e.$n(d)
    : console.warn("Ignoring non-existent field " + c + " in block " + a.type);
};
g.T.wH = function (a) {
  for (var c = 0, d; (d = a.childNodes[c]); c++)
    if ("next" == d.nodeName.toLowerCase()) {
      a.removeChild(d);
      break;
    }
};
g.Fd = function (a) {
  var c = !!a.readOnly;
  if (c)
    var d = null,
      e = !1,
      f = !1,
      h = !1,
      k = !1,
      l = !1,
      m = !1;
  else {
    d = g.g.wa.Fu(a.toolbox);
    e = g.g.wa.no(d);
    f = a.trashcan;
    void 0 === f && (f = e);
    var n = a.maxTrashcanContents;
    f ? void 0 === n && (n = 32) : (n = 0);
    h = a.collapse;
    void 0 === h && (h = e);
    k = a.comments;
    void 0 === k && (k = e);
    l = a.disable;
    void 0 === l && (l = e);
    m = a.sounds;
    void 0 === m && (m = !0);
  }
  var q = !!a.rtl,
    r = a.horizontalLayout;
  void 0 === r && (r = !1);
  var w = a.toolboxPosition;
  w = "end" !== w;
  w = r
    ? w
      ? g.g.wa.Hd.rq
      : g.g.wa.Hd.Us
    : w == q
    ? g.g.wa.Hd.Dl
    : g.g.wa.Hd.wl;
  var F = a.css;
  void 0 === F && (F = !0);
  var oa = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (oa = a.media) : a.path && (oa = a.path + "media/");
  var wa = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
    Qe = a.renderer || "geras",
    Re = a.plugins || {};
  this.L = q;
  this.Xh = wa;
  this.collapse = h;
  this.Hn = k;
  this.disable = l;
  this.readOnly = c;
  this.uw = a.maxBlocks || Infinity;
  this.Kr = a.maxInstances;
  this.mj = oa;
  this.no = e;
  this.Yc = g.Fd.FJ(a, e);
  this.KB = f;
  this.Lr = n;
  this.xI = m;
  this.uI = F;
  this.vd = r;
  this.Rg = d;
  this.GB = g.Fd.EJ(a);
  this.rb = g.Fd.HJ(a);
  this.Ja = w;
  this.RK = g.Fd.GJ(a);
  this.Xo = Qe;
  this.Yo = a.rendererOverrides;
  this.Lv = null;
  this.pc = a.parentWorkspace;
  this.plugins = Re;
};
g.qL = function () {};
g.Fd.FJ = function (a, c) {
  var d = a.move || {},
    e = {};
  e.scrollbars =
    void 0 === d.scrollbars && void 0 === a.scrollbars
      ? c
      : !!d.scrollbars || !!a.scrollbars;
  e.Dj = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
  e.Ni = e.scrollbars ? (void 0 === d.drag ? !0 : !!d.drag) : !1;
  return e;
};
g.Fd.HJ = function (a) {
  a = a.zoom || {};
  var c = {};
  c.controls = void 0 === a.controls ? !1 : !!a.controls;
  c.Dj = void 0 === a.wheel ? !1 : !!a.wheel;
  c.mD = void 0 === a.startScale ? 1 : Number(a.startScale);
  c.Fo = void 0 === a.maxScale ? 3 : Number(a.maxScale);
  c.Ho = void 0 === a.minScale ? 0.3 : Number(a.minScale);
  c.yK = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
  c.Xw = void 0 === a.pinch ? c.Dj || c.controls : !!a.pinch;
  return c;
};
g.Fd.EJ = function (a) {
  a = a.grid || {};
  var c = {};
  c.spacing = Number(a.spacing) || 0;
  c.Ab = a.colour || "#888";
  c.length = void 0 === a.length ? 1 : Number(a.length);
  c.rO = 0 < c.spacing && !!a.snap;
  return c;
};
g.Fd.GJ = function (a) {
  a = a.theme || g.uh.ni;
  return "string" == typeof a
    ? g.C.Fv(g.C.Z.Ut, a)
    : a instanceof g.Uj
    ? a
    : g.Uj.uH(a.name || "builtin" + g.g.rl.Ev(), a);
};
g.Fd.Uw = function (a) {
  g.g.Pu.warn(
    "Blockly.Options.parseToolboxTree",
    "September 2020",
    "September 2021",
    "Blockly.utils.toolbox.parseToolboxTree"
  );
  return g.g.wa.Uw(a);
};
g.au = function (a) {
  this.Qa = Object.create(null);
  this.u = a;
};
b = g.au.prototype;
b.clear = function () {
  this.Qa = Object.create(null);
};
b.ps = function (a, c) {
  var d = this.ud(c, a.type),
    e = D(this.u, !1);
  g.h.ga(!0);
  try {
    if (d && d.La() != a.La()) {
      var f = a.type;
      c != d.name && Fa(d, c, e);
      for (c = 0; c < e.length; c++) e[c].os(a.La(), d.La());
      g.h.Fa(new g.h.Pf(a));
      this.Qa[f].splice(this.lo(f).indexOf(a), 1);
    } else Fa(a, c, e);
  } finally {
    g.h.ga(!1);
  }
};
b.rj = function (a, c) {
  var d = this.Wf(a);
  if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.ps(d, c);
};
function Fa(a, c, d) {
  g.h.Fa(new g.h.rg(a, c));
  a.name = c;
  for (c = 0; c < d.length; c++) d[c].Js(a);
}
b.hf = function (a, c, d) {
  var e = this.ud(a, c);
  if (e) {
    if (d && e.La() != d)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.La() +
          '" which conflicts with the passed in id, "' +
          d +
          '".'
      );
    return e;
  }
  if (d && this.Wf(d))
    throw Error('Variable id, "' + d + '", is already in use.');
  e = d || g.g.Lh();
  c = c || "";
  e = new g.yn(this.u, a, c, e);
  a = this.Qa[c] || [];
  a.push(e);
  delete this.Qa[c];
  this.Qa[c] = a;
  return e;
};
b.Jh = function (a) {
  var c = this.Wf(a);
  if (c) {
    var d = c.name,
      e = this.Kv(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = E(f, "NAME");
        d = g.i.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace(
          "%2",
          a
        );
        g.alert(d);
        return;
      }
    var h = this;
    1 < e.length
      ? ((d = g.i.DELETE_VARIABLE_CONFIRMATION.replace(
          "%1",
          String(e.length)
        ).replace("%2", d)),
        g.confirm(d, function (k) {
          k && c && Ga(h, c, e);
        }))
      : Ga(h, c, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
function Ga(a, c, d) {
  var e = g.h.oc();
  e || g.h.ga(!0);
  try {
    for (var f = 0; f < d.length; f++) d[f].I(!0);
    var h = a.Qa[c.type];
    a = 0;
    for (var k; (k = h[a]); a++)
      if (k.La() == c.La()) {
        h.splice(a, 1);
        g.h.Fa(new g.h.Pf(c));
        break;
      }
  } finally {
    e || g.h.ga(!1);
  }
}
b.ud = function (a, c) {
  if ((c = this.Qa[c || ""]))
    for (var d = 0, e; (e = c[d]); d++) if (g.Ed.kf(e.name, a)) return e;
  return null;
};
b.Wf = function (a) {
  for (var c = Object.keys(this.Qa), d = 0; d < c.length; d++)
    for (var e = c[d], f = 0, h; (h = this.Qa[e][f]); f++)
      if (h.La() == a) return h;
  return null;
};
b.lo = function (a) {
  return (a = this.Qa[a || ""]) ? a.slice() : [];
};
b.Jv = function (a) {
  var c = {};
  g.g.object.Je(c, this.Qa);
  a && a.nj && g.g.object.Je(c, a.nj.Qa);
  a = Object.keys(c);
  c = !1;
  for (var d = 0; d < a.length; d++) "" == a[d] && (c = !0);
  c || a.push("");
  return a;
};
b.gk = function () {
  var a = [],
    c;
  for (c in this.Qa) a = a.concat(this.Qa[c]);
  return a;
};
b.vv = function () {
  var a = [],
    c;
  for (c in this.Qa)
    for (var d = this.Qa[c], e = 0, f; (f = d[e]); e++) a.push(f.name);
  return a;
};
b.Kv = function (a) {
  for (var c = [], d = D(this.u, !1), e = 0; e < d.length; e++) {
    var f = d[e].Oh();
    if (f) for (var h = 0; h < f.length; h++) f[h].La() == a && c.push(d[e]);
  }
  return c;
};
g.Ob = function (a) {
  this.id = g.g.Lh();
  g.Ob.An[this.id] = this;
  this.options = a || new g.Fd({});
  this.L = !!this.options.L;
  this.vd = !!this.options.vd;
  this.Ja = this.options.Ja;
  this.Jn = new (g.C.jr(g.C.Z.oy, this.options))(this);
  this.tp = [];
  this.Is = [];
  this.Nq = Object.create(null);
  this.Ud = [];
  this.Yk = [];
  this.Uo = [];
  this.nu = Object.create(null);
  this.ji = Object.create(null);
  this.Qa = new g.au(this);
  this.nj = null;
};
b = g.Ob.prototype;
b.pa = !1;
b.Xv = !1;
b.bz = 1024;
b.Pq = null;
b.I = function () {
  this.Ud.length = 0;
  this.clear();
  delete g.Ob.An[this.id];
};
g.Ob.yz = 3;
b = g.Ob.prototype;
b.$g = function (a, c) {
  a = a.Xa();
  c = c.Xa();
  return (
    a.y +
    g.Ob.prototype.$g.offset * a.x -
    (c.y + g.Ob.prototype.$g.offset * c.x)
  );
};
b.xq = function (a) {
  this.tp.push(a);
};
b.ns = function (a) {
  if (!g.g.Dn(this.tp, a))
    throw Error("Block not present in workspace's list of top-most blocks.");
};
b.Ib = function (a) {
  var c = [].concat(this.tp);
  a &&
    1 < c.length &&
    ((this.$g.offset = Math.sin(g.g.Vd.Kx(g.Ob.yz))),
    this.L && (this.$g.offset *= -1),
    c.sort(this.$g));
  return c;
};
function Ha(a, c) {
  return a.ji[c] ? a.ji[c].slice(0) : [];
}
function D(a, c) {
  if (c) {
    a = a.Ib(!0);
    c = [];
    for (var d = 0; d < a.length; d++) c.push.apply(c, p(a[d], !0));
  } else
    for (c = a.Ib(!1), d = 0; d < c.length; d++) c.push.apply(c, Aa(c[d], !1));
  return c.filter(function (e) {
    return !e.Td();
  });
}
b.clear = function () {
  this.Xv = !0;
  try {
    var a = g.h.oc();
    for (a || g.h.ga(!0); this.tp.length; ) this.tp[0].I(!1);
    for (; this.Is.length; ) this.Is[this.Is.length - 1].I(!1);
    a || g.h.ga(!1);
    this.Qa.clear();
    this.nj && this.nj.clear();
  } finally {
    this.Xv = !1;
  }
};
b.rj = function (a, c) {
  this.Qa.rj(a, c);
};
b.hf = function (a, c, d) {
  return this.Qa.hf(a, c, d);
};
b.Kv = function (a) {
  return this.Qa.Kv(a);
};
b.Jh = function (a) {
  this.Qa.Jh(a);
};
b.ud = function (a, c) {
  return this.Qa.ud(a, c);
};
b.Wf = function (a) {
  return this.Qa.Wf(a);
};
b.lo = function (a) {
  return this.Qa.lo(a);
};
b.Jv = function () {
  return this.Qa.Jv(this);
};
b.gk = function () {
  return this.Qa.gk();
};
b.vv = function () {
  return this.Qa.vv();
};
b.Kg = function () {
  return 0;
};
b.hj = function (a, c) {
  return new g.Xd(this, a, c);
};
function Ia(a) {
  return isNaN(a.options.uw) ? Infinity : a.options.uw - D(a, !1).length;
}
function Ja(a, c) {
  if (!Ka(a)) return !0;
  var d = 0,
    e;
  for (e in c) {
    if (
      c[e] >
      (a.options.Kr
        ? (void 0 !== a.options.Kr[e] ? a.options.Kr[e] : Infinity) -
          Ha(a, e).length
        : Infinity)
    )
      return !1;
    d += c[e];
  }
  return d > Ia(a) ? !1 : !0;
}
function Ka(a) {
  return Infinity != a.options.uw || !!a.options.Kr;
}
function La(a, c) {
  var d = c ? a.Uo : a.Yk;
  a = c ? a.Yk : a.Uo;
  var e = d.pop();
  if (e) {
    for (var f = [e]; d.length && e.group && e.group == d[d.length - 1].group; )
      f.push(d.pop());
    for (d = 0; (e = f[d]); d++) a.push(e);
    f = g.h.filter(f, c);
    g.h.Za = !1;
    try {
      for (d = 0; (e = f[d]); d++) e.run(c);
    } finally {
      g.h.Za = !0;
    }
  }
}
function G(a, c) {
  a.Ud.push(c);
}
function Ma(a, c) {
  g.g.Dn(a.Ud, c);
}
b.td = function (a) {
  return this.nu[a] || null;
};
b.Ax = function (a) {
  this.Qa = a;
};
g.Ob.An = Object.create(null);
g.Ob.bo = function (a) {
  return g.Ob.An[a] || null;
};
g.Ob.getAll = function () {
  var a = [],
    c;
  for (c in g.Ob.An) a.push(g.Ob.An[c]);
  return a;
};
g.sa = function (a, c, d, e, f, h) {
  this.s = a;
  this.Fh = c;
  this.GK = d;
  this.Jw = this.Iw = this.yw = this.ox = null;
  this.Sf = !1;
  d = g.sa.PD;
  this.s.L && (d = -d);
  this.PG = g.g.Vd.Kx(d);
  a.cg.appendChild(this.Ae(c, !(!f || !h)));
  this.jc = e;
  this.qs && Na(this);
  (f && h) ||
    ((a = this.Fh.getBBox()),
    (f = a.width + 2 * g.sa.qd),
    (h = a.height + 2 * g.sa.qd));
  this.bp(f, h);
  Na(this);
  Oa(this);
  this.qs = !0;
};
g.sa.qd = 6;
g.sa.QD = 5;
g.sa.PD = 20;
g.sa.ay = 4;
g.sa.MD = 8;
g.sa.ld = null;
g.sa.kj = null;
g.sa.Ox = function () {
  g.sa.ld && (g.Oa(g.sa.ld), (g.sa.ld = null));
  g.sa.kj && (g.Oa(g.sa.kj), (g.sa.kj = null));
};
g.sa.VG = function () {
  g.Touch.Yj();
  g.sa.Ox();
};
b = g.sa.prototype;
b.qs = !1;
b.jc = null;
b.Wg = 0;
b.qj = 0;
b.qb = 0;
b.Lc = 0;
b.lu = !0;
b.Ae = function (a, c) {
  this.ef = g.g.o.M(g.g.G.rc, {}, null);
  var d = { filter: "url(#" + this.s.Jb.la().$q + ")" };
  g.g.userAgent.qF && (d = {});
  d = g.g.o.M(g.g.G.rc, d, this.ef);
  this.jA = g.g.o.M(g.g.G.$d, {}, d);
  this.Bq = g.g.o.M(
    g.g.G.Bc,
    { class: "blocklyDraggable", x: 0, y: 0, rx: g.sa.qd, ry: g.sa.qd },
    d
  );
  c
    ? ((this.$h = g.g.o.M(
        g.g.G.rc,
        { class: this.s.L ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.ef
      )),
      (c = 2 * g.sa.qd),
      g.g.o.M(
        g.g.G.eG,
        { points: "0,x x,x x,0".replace(/x/g, c.toString()) },
        this.$h
      ),
      g.g.o.M(
        g.g.G.gn,
        {
          class: "blocklyResizeLine",
          x1: c / 3,
          y1: c - 1,
          x2: c - 1,
          y2: c / 3,
        },
        this.$h
      ),
      g.g.o.M(
        g.g.G.gn,
        {
          class: "blocklyResizeLine",
          x1: (2 * c) / 3,
          y1: c - 1,
          x2: c - 1,
          y2: (2 * c) / 3,
        },
        this.$h
      ))
    : (this.$h = null);
  this.s.options.readOnly ||
    ((this.Iw = g.ya(this.Bq, "mousedown", this, this.UG)),
    this.$h && (this.Jw = g.ya(this.$h, "mousedown", this, this.vK)));
  this.ef.appendChild(a);
  return this.ef;
};
b.Ma = function () {
  return this.ef;
};
function Pa(a, c) {
  a.ef.dataset && (a.ef.dataset.blockId = c);
}
b.UG = function (a) {
  var c = this.s.Mh(a);
  if (c) {
    if (c.kk)
      throw Error(
        "Tried to call gesture.handleBubbleStart, but the gesture had already been started."
      );
    c.Oe || (c.Oe = this);
    c.tf = a;
  }
};
b.ip = function () {};
b.le = function () {
  return !1;
};
b.ep = function () {};
b.vK = function (a) {
  Qa(this);
  g.sa.Ox();
  g.g.Bk(a) ||
    (this.s.Gx(a, new g.g.V(this.s.L ? -this.qb : this.qb, this.Lc)),
    (g.sa.ld = g.ya(document, "mouseup", this, g.sa.VG)),
    (g.sa.kj = g.ya(document, "mousemove", this, this.wK)),
    g.Dc());
  a.stopPropagation();
};
b.wK = function (a) {
  this.lu = !1;
  var c = this.s;
  a = g.g.Jo(a, u(c), pa(c));
  a.x /= c.scale;
  a.y /= c.scale;
  c = g.g.V.sum(c.ZA, a);
  this.bp(this.s.L ? -c.x : c.x, c.y);
  this.s.L && Na(this);
};
function Ra(a, c) {
  a.yw = c;
}
function Qa(a) {
  var c = a.ef.parentNode;
  return c.lastChild !== a.ef ? (c.appendChild(a.ef), !0) : !1;
}
function Sa(a, c, d) {
  var e = a.s.L ? a.jc.x - c.x - a.qb : c.x + a.jc.x;
  c = c.y + a.jc.y;
  return Math.max(
    0,
    Math.min(
      1,
      ((Math.min(e + a.qb, d.Rb + d.Gb) - Math.max(e, d.Rb)) *
        (Math.min(c + a.Lc, d.bc + d.Nb) - Math.max(c, d.bc))) /
        (a.qb * a.Lc)
    )
  );
}
function Na(a) {
  var c = a.jc.x;
  c = a.s.L ? c - (a.Wg + a.qb) : c + a.Wg;
  a.moveTo(c, a.qj + a.jc.y);
}
b.moveTo = function (a, c) {
  this.ef.setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.wj = function (a) {
  !a && this.yw && this.yw();
};
b.xv = function () {
  return new g.g.se(this.qb, this.Lc);
};
b.bp = function (a, c) {
  var d = 2 * g.sa.qd;
  a = Math.max(a, d + 45);
  c = Math.max(c, d + 20);
  this.qb = a;
  this.Lc = c;
  this.Bq.setAttribute("width", a);
  this.Bq.setAttribute("height", c);
  this.$h &&
    (this.s.L
      ? this.$h.setAttribute(
          "transform",
          "translate(" + 2 * g.sa.qd + "," + (c - d) + ") scale(-1 1)"
        )
      : this.$h.setAttribute(
          "transform",
          "translate(" + (a - d) + "," + (c - d) + ")"
        ));
  if (this.lu) {
    a = this.s.Vc();
    a.Rb /= this.s.scale;
    a.Gb /= this.s.scale;
    a.bc /= this.s.scale;
    a.Nb /= this.s.scale;
    c = -this.qb / 4;
    if (!(this.qb > a.Gb)) {
      if (this.s.L) {
        d = this.jc.x - c;
        var e = d - this.qb;
        var f = a.Rb + a.Gb,
          h = a.Rb + g.Sa.Oc / this.s.scale;
      } else
        (e = c + this.jc.x),
          (d = e + this.qb),
          (h = a.Rb),
          (f = a.Rb + a.Gb - g.Sa.Oc / this.s.scale);
      this.s.L
        ? e < h
          ? (c = -(h - this.jc.x + this.qb))
          : d > f && (c = -(f - this.jc.x))
        : e < h
        ? (c = h - this.jc.x)
        : d > f && (c = f - this.jc.x - this.qb);
    }
    e = c;
    c = -this.Lc / 4;
    if (!(this.Lc > a.Nb)) {
      d = this.jc.y + c;
      f = d + this.Lc;
      h = a.bc;
      var k = a.bc + a.Nb - g.Sa.Oc / this.s.scale,
        l = this.jc.y;
      d < h ? (c = h - l) : f > k && (c = k - l - this.Lc);
    }
    h = c;
    f = this.GK.getBBox();
    c = { x: e, y: -this.Lc - this.s.Jb.la().kn };
    d = { x: -this.qb - 30, y: h };
    h = { x: f.width, y: h };
    k = { x: e, y: f.height };
    e = f.width < f.height ? h : k;
    f = f.width < f.height ? k : h;
    h = Sa(this, c, a);
    k = Sa(this, d, a);
    l = Sa(this, e, a);
    a = Math.max(h, k, l, Sa(this, f, a));
    h == a
      ? ((this.Wg = c.x), (this.qj = c.y))
      : k == a
      ? ((this.Wg = d.x), (this.qj = d.y))
      : l == a
      ? ((this.Wg = e.x), (this.qj = e.y))
      : ((this.Wg = f.x), (this.qj = f.y));
  }
  Na(this);
  Oa(this);
  this.ox && this.ox();
};
function Oa(a) {
  var c = [],
    d = a.qb / 2,
    e = a.Lc / 2,
    f = -a.Wg,
    h = -a.qj;
  if (d == f && e == h) c.push("M " + d + "," + e);
  else {
    h -= e;
    f -= d;
    a.s.L && (f *= -1);
    var k = Math.sqrt(h * h + f * f),
      l = Math.acos(f / k);
    0 > h && (l = 2 * Math.PI - l);
    var m = l + Math.PI / 2;
    m > 2 * Math.PI && (m -= 2 * Math.PI);
    var n = Math.sin(m),
      q = Math.cos(m),
      r = a.xv();
    m = (r.width + r.height) / g.sa.QD;
    m = Math.min(m, r.width, r.height) / 4;
    r = 1 - g.sa.MD / k;
    f = d + r * f;
    h = e + r * h;
    r = d + m * q;
    var w = e + m * n;
    d -= m * q;
    e -= m * n;
    n = l + a.PG;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / g.sa.ay;
    k = (Math.cos(n) * k) / g.sa.ay;
    c.push("M" + r + "," + w);
    c.push(
      "C" + (r + k) + "," + (w + l) + " " + f + "," + h + " " + f + "," + h
    );
    c.push(
      "C" + f + "," + h + " " + (d + k) + "," + (e + l) + " " + d + "," + e
    );
  }
  c.push("z");
  a.jA.setAttribute("d", c.join(" "));
}
b.$f = function (a) {
  this.Bq.setAttribute("fill", a);
  this.jA.setAttribute("fill", a);
};
b.I = function () {
  this.Iw && g.Oa(this.Iw);
  this.Jw && g.Oa(this.Jw);
  g.sa.Ox();
  g.g.o.removeNode(this.ef);
  this.Sf = !0;
};
b.zw = function (a, c) {
  a ? a.Xk(c.x, c.y) : this.moveTo(c.x, c.y);
  this.Wg = this.s.L ? this.jc.x - c.x - this.qb : c.x - this.jc.x;
  this.qj = c.y - this.jc.y;
  Oa(this);
};
b.Xa = function () {
  return new g.g.V(
    this.s.L ? -this.Wg + this.jc.x - this.qb : this.jc.x + this.Wg,
    this.jc.y + this.qj
  );
};
g.sa.Pe = function (a) {
  var c = g.g.o.M(
    g.g.G.Tt,
    {
      class: "blocklyText blocklyBubbleText blocklyNoPointerEvents",
      y: g.sa.qd,
    },
    null
  );
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) {
    var e = g.g.o.M(g.g.G.Kz, { dy: "1em", x: g.sa.qd }, c),
      f = document.createTextNode(a[d]);
    e.appendChild(f);
  }
  return c;
};
g.sa.IA = function (a, c, d) {
  d = new g.sa(c.u, a, c.Mb.$b, d, null, null);
  Pa(d, c.id);
  if (c.L) {
    c = a.getBBox().width;
    for (var e = 0, f; (f = a.childNodes[e]); e++)
      f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + g.sa.qd);
  }
  return d;
};
g.$c = {};
g.$c.Uv = !1;
g.$c.register = function (a) {
  if (g.$c.Uv) throw Error("CSS already injected");
  Array.prototype.push.apply(g.$c.bt, a);
  a.length = 0;
};
g.$c.Xi = function (a, c) {
  if (!g.$c.Uv) {
    g.$c.Uv = !0;
    var d = g.$c.bt.join("\n");
    g.$c.bt.length = 0;
    a &&
      ((a = c.replace(/[\\/]$/, "")),
      (d = d.replace(/<<<PATH>>>/g, a)),
      (a = document.createElement("style")),
      (a.id = "blockly-common-style"),
      (d = document.createTextNode(d)),
      a.appendChild(d),
      document.head.insertBefore(a, document.head.firstChild));
  }
};
g.$c.bt = [
  ".blocklySvg {",
  "background-color: #fff;",
  "outline: none;",
  "overflow: hidden;",
  "position: absolute;",
  "display: block;",
  "}",
  ".blocklyWidgetDiv {",
  "display: none;",
  "position: absolute;",
  "z-index: 99999;",
  "}",
  ".injectionDiv {",
  "height: 100%;",
  "position: relative;",
  "overflow: hidden;",
  "touch-action: none;",
  "}",
  ".blocklyNonSelectable {",
  "user-select: none;",
  "-ms-user-select: none;",
  "-webkit-user-select: none;",
  "}",
  ".blocklyWsDragSurface {",
  "display: none;",
  "position: absolute;",
  "top: 0;",
  "left: 0;",
  "}",
  ".blocklyWsDragSurface.blocklyOverflowVisible {",
  "overflow: visible;",
  "}",
  ".blocklyBlockDragSurface {",
  "display: none;",
  "position: absolute;",
  "top: 0;",
  "left: 0;",
  "right: 0;",
  "bottom: 0;",
  "overflow: visible !important;",
  "z-index: 50;",
  "}",
  ".blocklyBlockCanvas.blocklyCanvasTransitioning,",
  ".blocklyBubbleCanvas.blocklyCanvasTransitioning {",
  "transition: transform .5s;",
  "}",
  ".blocklyTooltipDiv {",
  "background-color: #ffffc7;",
  "border: 1px solid #ddc;",
  "box-shadow: 4px 4px 20px 1px rgba(0,0,0,.15);",
  "color: #000;",
  "display: none;",
  "font: 9pt sans-serif;",
  "opacity: .9;",
  "padding: 2px;",
  "position: absolute;",
  "z-index: 100000;",
  "}",
  ".blocklyDropDownDiv {",
  "position: absolute;",
  "left: 0;",
  "top: 0;",
  "z-index: 1000;",
  "display: none;",
  "border: 1px solid;",
  "border-color: #dadce0;",
  "background-color: #fff;",
  "border-radius: 2px;",
  "padding: 4px;",
  "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownDiv.blocklyFocused {",
  "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownContent {",
  "max-height: 300px;",
  "overflow: auto;",
  "overflow-x: hidden;",
  "position: relative;",
  "}",
  ".blocklyDropDownArrow {",
  "position: absolute;",
  "left: 0;",
  "top: 0;",
  "width: 16px;",
  "height: 16px;",
  "z-index: -1;",
  "background-color: inherit;",
  "border-color: inherit;",
  "}",
  ".blocklyDropDownButton {",
  "display: inline-block;",
  "float: left;",
  "padding: 0;",
  "margin: 4px;",
  "border-radius: 4px;",
  "outline: none;",
  "border: 1px solid;",
  "transition: box-shadow .1s;",
  "cursor: pointer;",
  "}",
  ".blocklyArrowTop {",
  "border-top: 1px solid;",
  "border-left: 1px solid;",
  "border-top-left-radius: 4px;",
  "border-color: inherit;",
  "}",
  ".blocklyArrowBottom {",
  "border-bottom: 1px solid;",
  "border-right: 1px solid;",
  "border-bottom-right-radius: 4px;",
  "border-color: inherit;",
  "}",
  ".blocklyResizeSE {",
  "cursor: se-resize;",
  "fill: #aaa;",
  "}",
  ".blocklyResizeSW {",
  "cursor: sw-resize;",
  "fill: #aaa;",
  "}",
  ".blocklyResizeLine {",
  "stroke: #515A5A;",
  "stroke-width: 1;",
  "}",
  ".blocklyHighlightedConnectionPath {",
  "fill: none;",
  "stroke: #fc3;",
  "stroke-width: 4px;",
  "}",
  ".blocklyPathLight {",
  "fill: none;",
  "stroke-linecap: round;",
  "stroke-width: 1;",
  "}",
  ".blocklySelected>.blocklyPathLight {",
  "display: none;",
  "}",
  ".blocklyDraggable {",
  'cursor: url("<<<PATH>>>/handopen.cur"), auto;',
  "cursor: grab;",
  "cursor: -webkit-grab;",
  "}",
  ".blocklyDragging {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyDraggable:active {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyBlockDragSurface .blocklyDraggable {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyDragging.blocklyDraggingDelete {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyDragging>.blocklyPath,",
  ".blocklyDragging>.blocklyPathLight {",
  "fill-opacity: .8;",
  "stroke-opacity: .8;",
  "}",
  ".blocklyDragging>.blocklyPathDark {",
  "display: none;",
  "}",
  ".blocklyDisabled>.blocklyPath {",
  "fill-opacity: .5;",
  "stroke-opacity: .5;",
  "}",
  ".blocklyDisabled>.blocklyPathLight,",
  ".blocklyDisabled>.blocklyPathDark {",
  "display: none;",
  "}",
  ".blocklyInsertionMarker>.blocklyPath,",
  ".blocklyInsertionMarker>.blocklyPathLight,",
  ".blocklyInsertionMarker>.blocklyPathDark {",
  "fill-opacity: .2;",
  "stroke: none;",
  "}",
  ".blocklyMultilineText {",
  "font-family: monospace;",
  "}",
  ".blocklyNonEditableText>text {",
  "pointer-events: none;",
  "}",
  ".blocklyFlyout {",
  "position: absolute;",
  "z-index: 20;",
  "}",
  ".blocklyText text {",
  "cursor: default;",
  "}",
  ".blocklySvg text,",
  ".blocklyBlockDragSurface text {",
  "user-select: none;",
  "-ms-user-select: none;",
  "-webkit-user-select: none;",
  "cursor: inherit;",
  "}",
  ".blocklyHidden {",
  "display: none;",
  "}",
  ".blocklyFieldDropdown:not(.blocklyHidden) {",
  "display: block;",
  "}",
  ".blocklyIconGroup {",
  "cursor: default;",
  "}",
  ".blocklyIconGroup:not(:hover),",
  ".blocklyIconGroupReadonly {",
  "opacity: .6;",
  "}",
  ".blocklyIconShape {",
  "fill: #00f;",
  "stroke: #fff;",
  "stroke-width: 1px;",
  "}",
  ".blocklyIconSymbol {",
  "fill: #fff;",
  "}",
  ".blocklyMinimalBody {",
  "margin: 0;",
  "padding: 0;",
  "}",
  ".blocklyHtmlInput {",
  "border: none;",
  "border-radius: 4px;",
  "height: 100%;",
  "margin: 0;",
  "outline: none;",
  "padding: 0;",
  "width: 100%;",
  "text-align: center;",
  "display: block;",
  "box-sizing: border-box;",
  "}",
  ".blocklyHtmlInput::-ms-clear {",
  "display: none;",
  "}",
  ".blocklyMainBackground {",
  "stroke-width: 1;",
  "stroke: #c6c6c6;",
  "}",
  ".blocklyMutatorBackground {",
  "fill: #fff;",
  "stroke: #ddd;",
  "stroke-width: 1;",
  "}",
  ".blocklyFlyoutBackground {",
  "fill: #ddd;",
  "fill-opacity: .8;",
  "}",
  ".blocklyMainWorkspaceScrollbar {",
  "z-index: 20;",
  "}",
  ".blocklyFlyoutScrollbar {",
  "z-index: 30;",
  "}",
  ".blocklyScrollbarHorizontal,",
  ".blocklyScrollbarVertical {",
  "position: absolute;",
  "outline: none;",
  "}",
  ".blocklyScrollbarBackground {",
  "opacity: 0;",
  "}",
  ".blocklyScrollbarHandle {",
  "fill: #ccc;",
  "}",
  ".blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
  ".blocklyScrollbarHandle:hover {",
  "fill: #bbb;",
  "}",
  ".blocklyFlyout .blocklyScrollbarHandle {",
  "fill: #bbb;",
  "}",
  ".blocklyFlyout .blocklyScrollbarBackground:hover+.blocklyScrollbarHandle,",
  ".blocklyFlyout .blocklyScrollbarHandle:hover {",
  "fill: #aaa;",
  "}",
  ".blocklyInvalidInput {",
  "background: #faa;",
  "}",
  ".blocklyVerticalMarker {",
  "stroke-width: 3px;",
  "fill: rgba(255,255,255,.5);",
  "pointer-events: none;",
  "}",
  ".blocklyComputeCanvas {",
  "position: absolute;",
  "width: 0;",
  "height: 0;",
  "}",
  ".blocklyNoPointerEvents {",
  "pointer-events: none;",
  "}",
  ".blocklyContextMenu {",
  "border-radius: 4px;",
  "max-height: 100%;",
  "}",
  ".blocklyDropdownMenu {",
  "border-radius: 2px;",
  "padding: 0 !important;",
  "}",
  ".blocklyDropdownMenu .blocklyMenuItem {",
  "padding-left: 28px;",
  "}",
  ".blocklyDropdownMenu .blocklyMenuItemRtl {",
  "padding-left: 5px;",
  "padding-right: 28px;",
  "}",
  ".blocklyWidgetDiv .blocklyMenu {",
  "background: #fff;",
  "border: 1px solid transparent;",
  "box-shadow: 0 0 3px 1px rgba(0,0,0,.3);",
  "font: normal 13px Arial, sans-serif;",
  "margin: 0;",
  "outline: none;",
  "padding: 4px 0;",
  "position: absolute;",
  "overflow-y: auto;",
  "overflow-x: hidden;",
  "max-height: 100%;",
  "z-index: 20000;",
  "}",
  ".blocklyWidgetDiv .blocklyMenu.blocklyFocused {",
  "box-shadow: 0 0 6px 1px rgba(0,0,0,.3);",
  "}",
  ".blocklyDropDownDiv .blocklyMenu {",
  "background: inherit;",
  "border: inherit;",
  'font: normal 13px "Helvetica Neue", Helvetica, sans-serif;',
  "outline: none;",
  "position: relative;",
  "z-index: 20000;",
  "}",
  ".blocklyMenuItem {",
  "border: none;",
  "color: #000;",
  "cursor: pointer;",
  "list-style: none;",
  "margin: 0;",
  "min-width: 7em;",
  "padding: 6px 15px;",
  "white-space: nowrap;",
  "}",
  ".blocklyMenuItemDisabled {",
  "color: #ccc;",
  "cursor: inherit;",
  "}",
  ".blocklyMenuItemHighlight {",
  "background-color: rgba(0,0,0,.1);",
  "}",
  ".blocklyMenuItemCheckbox {",
  "height: 16px;",
  "position: absolute;",
  "width: 16px;",
  "}",
  ".blocklyMenuItemSelected .blocklyMenuItemCheckbox {",
  "background: url(<<<PATH>>>/sprites.png) no-repeat -48px -16px;",
  "float: left;",
  "margin-left: -24px;",
  "position: static;",
  "}",
  ".blocklyMenuItemRtl .blocklyMenuItemCheckbox {",
  "float: right;",
  "margin-right: -24px;",
  "}",
];
g.h.ve = function (a) {
  g.h.ve.v.constructor.call(this);
  this.He = "undefined" == typeof a;
  this.Pc = a ? a : "";
  this.Za = !1;
};
g.g.object.U(g.h.ve, g.h.Abstract);
g.h.ve.prototype.Fr = !0;
g.h.Di = function (a, c, d, e) {
  g.h.Di.v.constructor.call(this, a ? a.u.id : void 0);
  this.lb = a ? a.id : null;
  this.element = "undefined" == typeof c ? "" : c;
  this.oldValue = "undefined" == typeof d ? "" : d;
  this.newValue = "undefined" == typeof e ? "" : e;
};
g.g.object.U(g.h.Di, g.h.ve);
g.h.Di.prototype.type = g.h.Zt;
g.h.Di.prototype.va = function () {
  var a = g.h.Di.v.va.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.lb && (a.blockId = this.lb);
  return a;
};
g.h.Di.prototype.ea = function (a) {
  g.h.Di.v.ea.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.lb = a.blockId;
};
g.C.register(g.C.Z.cc, g.h.Zt, g.h.Di);
g.h.Gf = function (a, c, d) {
  g.h.Gf.v.constructor.call(this, a ? a.u.id : void 0);
  this.lb = a ? a.id : null;
  this.vm = c;
  this.su = d;
};
g.g.object.U(g.h.Gf, g.h.ve);
g.h.Gf.prototype.type = g.h.Jp;
g.h.Gf.prototype.va = function () {
  var a = g.h.Gf.v.va.call(this);
  a.isOpen = this.vm;
  a.bubbleType = this.su;
  a.blockId = this.lb;
  return a;
};
g.h.Gf.prototype.ea = function (a) {
  g.h.Gf.v.ea.call(this, a);
  this.vm = a.isOpen;
  this.su = a.bubbleType;
  this.lb = a.blockId;
};
g.C.register(g.C.Z.cc, g.h.Jp, g.h.Gf);
g.Zd = function (a) {
  this.P = a;
  this.Rd = null;
};
b = g.Zd.prototype;
b.uA = !0;
b.mq = 17;
b.dc = null;
b.Wi = null;
function Ta(a) {
  a.Rd ||
    ((a.Rd = g.g.o.M(g.g.G.rc, { class: "blocklyIconGroup" }, null)),
    a.P.Lb && g.g.o.Ha(a.Rd, "blocklyIconGroupReadonly"),
    a.cv(a.Rd),
    a.P.Ma().appendChild(a.Rd),
    g.ya(a.Rd, "mouseup", a, a.Qv),
    a.ki());
}
b.I = function () {
  g.g.o.removeNode(this.Rd);
  this.Rd = null;
  this.Eb(!1);
  this.P = null;
};
b.ki = function () {};
b.isVisible = function () {
  return !!this.dc;
};
b.Qv = function (a) {
  this.P.u.Ec() || this.P.Lb || g.g.Bk(a) || this.Eb(!this.isVisible());
};
b.kc = function () {
  this.isVisible() && this.dc.$f(this.P.style.Ii);
};
function Ua(a) {
  var c = a.P.Xa(),
    d = g.g.mf(a.Rd);
  c = new g.g.V(c.x + d.x + a.mq / 2, c.y + d.y + a.mq / 2);
  g.g.V.kf(a.Wi, c) ||
    ((a.Wi = c), a.isVisible() && ((a = a.dc), (a.jc = c), a.qs && Na(a)));
}
g.g.Pu = {};
g.g.Pu.warn = function (a, c, d, e) {
  a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
  e && (a += "\nUse " + e + " instead.");
  console.warn(a);
};
g.zn = function (a) {
  g.zn.v.constructor.call(this, a);
  Ta(this);
  this.di = {};
};
g.g.object.U(g.zn, g.Zd);
b = g.zn.prototype;
b.uA = !1;
b.cv = function (a) {
  g.g.o.M(
    g.g.G.$d,
    {
      class: "blocklyIconShape",
      d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z",
    },
    a
  );
  g.g.o.M(
    g.g.G.$d,
    {
      class: "blocklyIconSymbol",
      d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z",
    },
    a
  );
  g.g.o.M(
    g.g.G.Bc,
    { class: "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" },
    a
  );
};
b.Eb = function (a) {
  a != this.isVisible() &&
    (g.h.Fa(new g.h.Gf(this.P, a, "warning")), a ? this.Qq() : this.Xq());
};
b.Qq = function () {
  this.Nk = g.sa.Pe(this.je());
  this.dc = g.sa.IA(this.Nk, this.P, this.Wi);
  this.kc();
};
b.Xq = function () {
  this.dc.I();
  this.Nk = this.dc = null;
};
function Va(a, c, d) {
  a.di[d] != c &&
    (c ? (a.di[d] = c) : delete a.di[d], a.isVisible() && (a.Eb(!1), a.Eb(!0)));
}
b.je = function () {
  var a = [],
    c;
  for (c in this.di) a.push(this.di[c]);
  return a.join("\n");
};
b.I = function () {
  this.P.Se = null;
  g.Zd.prototype.I.call(this);
};
g.Comment = function (a) {
  g.Comment.v.constructor.call(this, a);
  this.jd = a.ye;
  this.jd.text = this.jd.text || "";
  this.wu = "";
  this.Ur = this.Sr = this.$r = this.ld = null;
  Ta(this);
};
g.g.object.U(g.Comment, g.Zd);
b = g.Comment.prototype;
b.cv = function (a) {
  g.g.o.M(g.g.G.Zs, { class: "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
  g.g.o.M(
    g.g.G.$d,
    {
      class: "blocklyIconSymbol",
      d:
        "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z",
    },
    a
  );
  g.g.o.M(
    g.g.G.Bc,
    {
      class: "blocklyIconSymbol",
      x: "6.8",
      y: "10.78",
      height: "2",
      width: "2",
    },
    a
  );
};
b.Iu = function () {
  this.Zn = g.g.o.M(g.g.G.VE, { x: g.sa.qd, y: g.sa.qd }, null);
  var a = document.createElementNS(g.g.o.ol, "body");
  a.setAttribute("xmlns", g.g.o.ol);
  a.className = "blocklyMinimalBody";
  var c = (this.Wk = document.createElementNS(g.g.o.ol, "textarea"));
  c.className = "blocklyCommentTextarea";
  c.setAttribute("dir", this.P.L ? "RTL" : "LTR");
  c.value = this.jd.text;
  Wa(this);
  a.appendChild(c);
  this.Zn.appendChild(a);
  this.ld = g.ya(c, "mouseup", this, this.MK, !0, !0);
  this.$r = g.ya(c, "wheel", this, function (d) {
    d.stopPropagation();
  });
  this.Sr = g.ya(c, "change", this, function () {
    this.wu != this.jd.text &&
      g.h.Fa(new g.h.gh(this.P, "comment", null, this.wu, this.jd.text));
  });
  this.Ur = g.ya(c, "input", this, function () {
    this.jd.text = c.value;
  });
  setTimeout(c.focus.bind(c), 0);
  return this.Zn;
};
b.ki = function () {
  g.Comment.v.ki.call(this);
  this.isVisible() && (this.Xq(), this.Qq());
};
b.pJ = function () {
  this.isVisible() && ((this.jd.size = this.dc.xv()), Wa(this));
};
function Wa(a) {
  var c = a.jd.size,
    d = 2 * g.sa.qd,
    e = c.width - d;
  c = c.height - d;
  a.Zn.setAttribute("width", e);
  a.Zn.setAttribute("height", c);
  a.Wk.style.width = e - 4 + "px";
  a.Wk.style.height = c - 4 + "px";
}
b.Eb = function (a) {
  a != this.isVisible() &&
    (g.h.Fa(new g.h.Gf(this.P, a, "comment")),
    (this.jd.Yw = a) ? this.Qq() : this.Xq());
};
b.Qq = function () {
  if (!this.P.Sd() || g.g.userAgent.Xe)
    (this.Nk = g.sa.Pe(this.P.ye.text)),
      (this.dc = g.sa.IA(this.Nk, this.P, this.Wi));
  else {
    this.dc = new g.sa(
      this.P.u,
      this.Iu(),
      this.P.Mb.$b,
      this.Wi,
      this.jd.size.width,
      this.jd.size.height
    );
    Pa(this.dc, this.P.id);
    var a = this.pJ.bind(this);
    this.dc.ox = a;
  }
  this.kc();
};
b.Xq = function () {
  this.ld && (g.Oa(this.ld), (this.ld = null));
  this.$r && (g.Oa(this.$r), (this.$r = null));
  this.Sr && (g.Oa(this.Sr), (this.Sr = null));
  this.Ur && (g.Oa(this.Ur), (this.Ur = null));
  this.dc.I();
  this.Nk = this.Zn = this.Wk = this.dc = null;
};
b.MK = function () {
  Qa(this.dc) && this.Wk.focus();
  this.wu = this.jd.text;
};
b.xv = function () {
  return this.jd.size;
};
b.bp = function (a, c) {
  this.dc
    ? this.dc.bp(a, c)
    : ((this.jd.size.width = a), (this.jd.size.height = c));
};
b.I = function () {
  this.P.Gn = null;
  g.Zd.prototype.I.call(this);
};
g.$c.register(
  ".blocklyCommentTextarea {,background-color: #fef49c;,border: 0;,outline: 0;,margin: 0;,padding: 3px;,resize: none;,display: block;,text-overflow: hidden;,}".split(
    ","
  )
);
g.Kj = function (a, c, d, e) {
  this.s = a;
  this.Es = c;
  this.di = d.text;
  this.Ok = new g.g.V(0, 0);
  this.Th = e;
  this.Eq = d.callbackKey || d.callbackkey;
  this.KA = d["web-class"] || null;
  this.ld = null;
  this.info = d;
};
g.Kj.HF = 5;
g.Kj.IF = 2;
b = g.Kj.prototype;
b.width = 0;
b.height = 0;
b.Wa = function () {
  var a = this.Th ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
  this.KA && (a += " " + this.KA);
  this.N = g.g.o.M(g.g.G.rc, { class: a }, this.s.wb);
  if (!this.Th)
    var c = g.g.o.M(
      g.g.G.Bc,
      { class: "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 },
      this.N
    );
  a = g.g.o.M(
    g.g.G.Bc,
    {
      class: this.Th
        ? "blocklyFlyoutLabelBackground"
        : "blocklyFlyoutButtonBackground",
      rx: 4,
      ry: 4,
    },
    this.N
  );
  var d = g.g.o.M(
      g.g.G.Tt,
      {
        class: this.Th ? "blocklyFlyoutLabelText" : "blocklyText",
        x: 0,
        y: 0,
        "text-anchor": "middle",
      },
      this.N
    ),
    e = g.g.Nc(this.di);
  this.s.L && (e += "\u200f");
  d.textContent = e;
  this.Th &&
    ((this.Jx = d),
    this.s.yc.subscribe(this.Jx, "flyoutForegroundColour", "fill"));
  var f = g.g.style.getComputedStyle(d, "fontSize"),
    h = g.g.style.getComputedStyle(d, "fontWeight"),
    k = g.g.style.getComputedStyle(d, "fontFamily");
  this.width = g.g.o.qB(d, f, h, k);
  e = g.g.o.nC(e, f, h, k);
  this.height = e.height;
  this.Th ||
    ((this.width += 2 * g.Kj.HF),
    (this.height += 2 * g.Kj.IF),
    c.setAttribute("width", this.width),
    c.setAttribute("height", this.height));
  a.setAttribute("width", this.width);
  a.setAttribute("height", this.height);
  d.setAttribute("x", this.width / 2);
  d.setAttribute("y", this.height / 2 - e.height / 2 + e.df);
  Xa(this);
  this.ld = g.ya(this.N, "mouseup", this, this.CJ);
  return this.N;
};
b.show = function () {
  Xa(this);
  this.N.setAttribute("display", "block");
};
function Xa(a) {
  a.N.setAttribute("transform", "translate(" + a.Ok.x + "," + a.Ok.y + ")");
}
b.moveTo = function (a, c) {
  this.Ok.x = a;
  this.Ok.y = c;
  Xa(this);
};
b.I = function () {
  this.ld && g.Oa(this.ld);
  this.N && g.g.o.removeNode(this.N);
  this.Jx && this.s.yc.unsubscribe(this.Jx);
};
b.CJ = function (a) {
  (a = this.Es.Mh(a)) && a.cancel();
  this.Th && this.Eq
    ? console.warn("Labels should not have callbacks. Label text: " + this.di)
    : this.Th || (this.Eq && Ya(this.Es, this.Eq))
    ? this.Th || Ya(this.Es, this.Eq)(this)
    : console.warn("Buttons should have callbacks. Button text: " + this.di);
};
g.$c.register(
  ".blocklyFlyoutButton {,fill: #888;,cursor: default;,},.blocklyFlyoutButtonShadow {,fill: #666;,},.blocklyFlyoutButton:hover {,fill: #aaa;,},.blocklyFlyoutLabel {,cursor: default;,},.blocklyFlyoutLabelBackground {,opacity: 0;,}".split(
    ","
  )
);
g.g.ta = {};
g.g.ta.OD = "aria-";
g.g.ta.kG = "role";
g.g.ta.Bi = {
  aM: "grid",
  bM: "gridcell",
  aF: "group",
  xF: "listbox",
  MF: "menu",
  NF: "menuitem",
  qM: "menuitemcheckbox",
  XF: "option",
  fG: "presentation",
  Ot: "row",
  xG: "tree",
  yG: "treeitem",
};
g.g.ta.State = {
  Ns: "activedescendant",
  vL: "colcount",
  tE: "disabled",
  FE: "expanded",
  Ty: "invalid",
  tF: "label",
  uF: "labelledby",
  vF: "level",
  fN: "orientation",
  lN: "posinset",
  rN: "rowcount",
  El: "selected",
  uN: "setsize",
  AG: "valuemax",
  BG: "valuemin",
};
g.g.ta.Af = function (a, c) {
  a.setAttribute(g.g.ta.kG, c);
};
g.g.ta.md = function (a, c, d) {
  Array.isArray(d) && (d = d.join(" "));
  a.setAttribute(g.g.ta.OD + c, d);
};
g.Yt = function (a, c, d) {
  this.Rv = a.toolboxitemid || g.g.rl.Ev();
  this.gw = (this.Zh = d || null) ? this.Zh.gw + 1 : 0;
  this.Fs = a;
  this.Yh = c;
  this.s = this.Yh.s;
};
b = g.Yt.prototype;
b.Y = function () {};
b.Pi = function () {
  return null;
};
b.La = function () {
  return this.Rv;
};
b.getParent = function () {
  return null;
};
b.Qg = function () {
  return !1;
};
b.wk = function () {
  return !1;
};
b.I = function () {};
g.ue = function (a, c, d) {
  g.ue.v.constructor.call(this, a, c, d);
  this.gj = g.g.Nc(a.name);
  this.fd = Za(this, a);
  this.bw = this.so = this.$o = this.Le = this.Mc = null;
  this.hd = this.mw();
  g.g.object.Je(this.hd, a.cssconfig || a.cssConfig);
  this.XB = this.Yv = !1;
  this.Oi = [];
  this.NC(a);
};
g.g.object.U(g.ue, g.Yt);
g.ue.pj = "category";
g.ue.jJ = 19;
g.ue.borderWidth = 8;
g.ue.qH = "#57e";
b = g.ue.prototype;
b.mw = function () {
  return {
    container: "blocklyToolboxCategory",
    row: "blocklyTreeRow",
    rowcontentcontainer: "blocklyTreeRowContentContainer",
    icon: "blocklyTreeIcon",
    label: "blocklyTreeLabel",
    contents: "blocklyToolboxContents",
    selected: "blocklyTreeSelected",
    openicon: "blocklyTreeIconOpen",
    closedicon: "blocklyTreeIconClosed",
  };
};
b.NC = function (a) {
  var c = a.contents;
  if (a.custom) this.Oi = a.custom;
  else if (c) {
    a = 0;
    for (var d; (d = c[a]); a++) this.Oi.push(d);
  }
};
b.Y = function () {
  this.Ae();
  "true" == this.Fs.hidden && this.Ia();
};
b.Ae = function () {
  this.Mc = this.Hu();
  g.g.ta.Af(this.Mc, g.g.ta.Bi.yG);
  g.g.ta.md(this.Mc, g.g.ta.State.El, !1);
  g.g.ta.md(this.Mc, g.g.ta.State.vF, this.gw);
  var a = document.createElement("div");
  g.g.o.Ha(a, this.hd.row);
  var c = g.ue.jJ * this.gw;
  c = c.toString() + "px";
  this.s.L ? (a.style.paddingRight = c) : (a.style.paddingLeft = c);
  this.Le = a;
  this.Le.style.pointerEvents = "auto";
  this.Mc.appendChild(this.Le);
  a = document.createElement("div");
  g.g.o.Ha(a, this.hd.rowcontentcontainer);
  this.$o = a;
  this.$o.style.pointerEvents = "none";
  this.Le.appendChild(this.$o);
  this.so = this.HA();
  g.g.ta.Af(this.so, g.g.ta.Bi.fG);
  this.$o.appendChild(this.so);
  a = this.gj;
  c = document.createElement("span");
  c.setAttribute("id", this.La() + ".label");
  c.textContent = a;
  g.g.o.Ha(c, this.hd.label);
  this.bw = c;
  this.$o.appendChild(this.bw);
  g.g.ta.md(this.Mc, g.g.ta.State.uF, this.bw.getAttribute("id"));
  $a(this, this.fd);
  return this.Mc;
};
b.Hu = function () {
  var a = document.createElement("div");
  g.g.o.Ha(a, this.hd.container);
  return a;
};
b.HA = function () {
  var a = document.createElement("span");
  this.Yh.lk || g.g.o.Ha(a, this.hd.icon);
  a.style.display = "inline-block";
  return a;
};
b.Em = function () {
  this.fd = Za(this, this.Fs);
  $a(this, this.fd);
};
function $a(a, c) {
  c &&
    ((c = g.ue.borderWidth + "px solid " + (c || "#ddd")),
    a.s.L ? (a.Le.style.borderRight = c) : (a.Le.style.borderLeft = c));
}
function Za(a, c) {
  var d = c.categorystyle || c.categoryStyle;
  if ((c = c.colour) && d)
    console.warn(
      'Toolbox category "' + a.gj + '" must not have both a style and a colour'
    );
  else {
    if (d)
      a: {
        c = a.s.Jg();
        if (d && c) {
          if ((c = c.Hq[d]) && c.Ab) {
            a = ab(a, c.Ab);
            break a;
          }
          console.warn(
            'Style "' + d + '" must exist and contain a colour value'
          );
        }
        a = "";
      }
    else a = ab(a, c);
    return a;
  }
  return "";
}
b.kB = function () {
  return this.Le;
};
function ab(a, c) {
  c = g.g.Nc(c);
  if (null == c || "" === c) return "";
  var d = Number(c);
  if (isNaN(d)) {
    if ((d = g.g.Ab.parse(c))) return d;
    console.warn(
      'Toolbox category "' + a.gj + '" has unrecognized colour attribute: ' + c
    );
    return "";
  }
  return g.AI(d);
}
b.ws = function (a) {
  this.Mc.style.display = a ? "block" : "none";
  this.Yv = !a;
  this.Yh.ob == this && bb(this.Yh, null);
};
b.Ia = function () {
  this.ws(!1);
};
b.show = function () {
  this.ws(!0);
};
b.isVisible = function () {
  var a;
  if ((a = !this.Yv))
    a: {
      for (a = this; a.getParent(); )
        if (((a = a.getParent()), !a.ek)) {
          a = !1;
          break a;
        }
      a = !0;
    }
  return a;
};
b.Qg = function () {
  return this.isVisible() && !this.XB;
};
b.HC = function () {};
function cb(a, c) {
  if (c) {
    var d = ab(a, g.ue.qH);
    a.Le.style.backgroundColor = a.fd || d;
    g.g.o.Ha(a.Le, a.hd.selected);
  } else (a.Le.style.backgroundColor = ""), g.g.o.wc(a.Le, a.hd.selected);
  g.g.ta.md(a.Mc, g.g.ta.State.El, c);
}
function db(a, c) {
  a.XB = c;
  a.Pi().setAttribute("disabled", c);
  c
    ? a.Pi().setAttribute("disabled", "true")
    : a.Pi().removeAttribute("disabled");
}
b.De = function () {
  return this.gj;
};
b.getParent = function () {
  return this.Zh;
};
b.Pi = function () {
  return this.Mc;
};
b.I = function () {
  g.g.o.removeNode(this.Mc);
};
g.$c.register([
  ".blocklyTreeRow:not(.blocklyTreeSelected):hover {",
  "background-color: rgba(255, 255, 255, 0.2);",
  "}",
  '.blocklyToolboxDiv[layout="h"] .blocklyToolboxCategory {',
  "margin: 1px 5px 1px 0;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"][layout="h"] .blocklyToolboxCategory {',
  "margin: 1px 0 1px 5px;",
  "}",
  ".blocklyTreeRow {",
  "height: 22px;",
  "line-height: 22px;",
  "margin-bottom: 3px;",
  "padding-right: 8px;",
  "white-space: nowrap;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeRow {',
  "margin-left: 8px;",
  "padding-right: 0px",
  "}",
  ".blocklyTreeIcon {",
  "background-image: url(<<<PATH>>>/sprites.png);",
  "height: 16px;",
  "vertical-align: middle;",
  "visibility: hidden;",
  "width: 16px;",
  "}",
  ".blocklyTreeIconClosed {",
  "background-position: -32px -1px;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeIconClosed {',
  "background-position: 0 -1px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconClosed {",
  "background-position: -32px -17px;",
  "}",
  '.blocklyToolboxDiv[dir="RTL"] .blocklyTreeSelected>.blocklyTreeIconClosed {',
  "background-position: 0 -17px;",
  "}",
  ".blocklyTreeIconOpen {",
  "background-position: -16px -1px;",
  "}",
  ".blocklyTreeSelected>.blocklyTreeIconOpen {",
  "background-position: -16px -17px;",
  "}",
  ".blocklyTreeLabel {",
  "cursor: default;",
  "font: 16px sans-serif;",
  "padding: 0 3px;",
  "vertical-align: middle;",
  "}",
  ".blocklyToolboxDelete .blocklyTreeLabel {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyTreeSelected .blocklyTreeLabel {",
  "color: #fff;",
  "}",
]);
g.C.register(g.C.Z.Ml, g.ue.pj, g.ue);
g.pg = function (a, c) {
  g.pg.v.constructor.call(this, a, c);
  this.hd = { container: "blocklyTreeSeparator" };
  g.g.object.Je(this.hd, a.cssconfig || a.cssConfig);
};
g.g.object.U(g.pg, g.Yt);
g.pg.pj = "sep";
g.pg.prototype.Y = function () {
  this.Ae();
};
g.pg.prototype.Ae = function () {
  var a = document.createElement("div");
  g.g.o.Ha(a, this.hd.container);
  return (this.Mc = a);
};
g.pg.prototype.Pi = function () {
  return this.Mc;
};
g.pg.prototype.I = function () {
  g.g.o.removeNode(this.Mc);
};
g.$c.register(
  '.blocklyTreeSeparator {,border-bottom: solid #e5e5e5 1px;,height: 0;,margin: 5px 0;,},.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {,border-right: solid #e5e5e5 1px;,border-bottom: none;,height: auto;,margin: 0 5px 0 5px;,padding: 5px 0;,width: 0;,}'.split(
    ","
  )
);
g.C.register(g.C.Z.Ml, g.pg.pj, g.pg);
g.If = function (a, c, d) {
  this.op = null;
  this.ek = !1;
  this.Gs = [];
  g.If.v.constructor.call(this, a, c, d);
};
g.g.object.U(g.If, g.ue);
g.If.pj = "collapsibleCategory";
b = g.If.prototype;
b.mw = function () {
  var a = g.If.v.mw.call(this);
  a.contents = "blocklyToolboxContents";
  return a;
};
b.NC = function (a) {
  var c = a.contents,
    d = !0;
  if (a.custom) this.Oi = a.custom;
  else if (c) {
    a = 0;
    for (var e; (e = c[a]); a++)
      !g.C.vI(e.kind) || (e.kind.toLowerCase() == g.pg.pj && d)
        ? (this.Oi.push(e), (d = !0))
        : (this.Ju(e), (d = !1));
  }
};
b.Ju = function (a) {
  var c = a.kind;
  "CATEGORY" == c.toUpperCase() && g.g.wa.WB(a) && (c = g.If.pj);
  a = new (g.C.co(g.C.Z.Ml, c))(a, this.Yh, this);
  this.Gs.push(a);
};
b.Y = function () {
  g.If.v.Y.call(this);
  eb(this, "true" == this.Fs.expanded || this.Fs.expanded);
};
b.Ae = function () {
  g.If.v.Ae.call(this);
  var a = this.Gs,
    c = document.createElement("div");
  g.g.o.Ha(c, this.hd.contents);
  for (var d = 0; d < a.length; d++) {
    var e = a[d];
    e.Y();
    c.appendChild(e.Pi());
    e.kB && e.Le.setAttribute("id", e.La());
  }
  this.op = c;
  g.g.ta.Af(this.op, g.g.ta.Bi.aF);
  this.Mc.appendChild(this.op);
  return this.Mc;
};
b.HA = function () {
  var a = document.createElement("span");
  this.Yh.lk || (g.g.o.Ha(a, this.hd.icon), (a.style.visibility = "visible"));
  a.style.display = "inline-block";
  return a;
};
function eb(a, c) {
  if (a.ek != c) {
    if ((a.ek = c)) {
      a.op.style.display = "block";
      var d = a.so;
      d && (g.g.o.aD(d, a.hd.closedicon), g.g.o.Ha(d, a.hd.openicon));
    } else if (((a.op.style.display = "none"), (d = a.so)))
      g.g.o.aD(d, a.hd.openicon), g.g.o.Ha(d, a.hd.closedicon);
    g.g.ta.md(a.Mc, g.g.ta.State.FE, c);
    a = a.Yh;
    c = a.s;
    d = a.qe.getBoundingClientRect();
    c.translate(
      a.Ja == g.te ? c.scrollX + d.width : c.scrollX,
      a.Ja == g.Tj ? c.scrollY + d.height : c.scrollY
    );
    g.Mm(c);
  }
}
b.ws = function (a) {
  this.Mc.style.display = a ? "block" : "none";
  for (var c = 0, d; (d = this.Gs[c]); c++) d.ws(a);
  this.Yv = !a;
  this.Yh.ob == this && bb(this.Yh, null);
};
b.wk = function () {
  return !0;
};
b.HC = function () {
  eb(this, !this.ek);
};
b.Pi = function () {
  return this.Mc;
};
g.C.register(g.C.Z.Ml, g.If.pj, g.If);
g.h.vh = function (a, c, d) {
  g.h.vh.v.constructor.call(this, d);
  this.zC = a;
  this.uC = c;
};
g.g.object.U(g.h.vh, g.h.ve);
g.h.vh.prototype.type = g.h.Hz;
g.h.vh.prototype.va = function () {
  var a = g.h.vh.v.va.call(this);
  a.oldItem = this.zC;
  a.newItem = this.uC;
  return a;
};
g.h.vh.prototype.ea = function (a) {
  g.h.vh.v.ea.call(this, a);
  this.zC = a.oldItem;
  this.uC = a.newItem;
};
g.C.register(g.C.Z.cc, g.h.Hz, g.h.vh);
g.F = function (a, c, d) {
  if (!c) throw Error("Cannot create a node without a location.");
  this.wp = a;
  this.qm = g.F.GI(a);
  this.Ea = c;
  this.Ms = null;
  (a = d || null) && a.JD && (this.Ms = a.JD);
};
g.F.types = {
  Ac: "field",
  hc: "block",
  Ye: "input",
  Pj: "output",
  Dd: "next",
  Gd: "previous",
  mg: "stack",
  Sc: "workspace",
};
g.F.yi = !1;
g.F.qE = -20;
g.F.GI = function (a) {
  switch (a) {
    case g.F.types.Gd:
    case g.F.types.Dd:
    case g.F.types.Ye:
    case g.F.types.Pj:
      return !0;
  }
  return !1;
};
g.F.$l = function (a) {
  return a ? new g.F(g.F.types.Ac, a) : null;
};
g.F.zg = function (a) {
  return a
    ? a.type == g.kb || (a.type == g.fb && a.Ig())
      ? g.F.ak(a.Ig())
      : a.type == g.fb
      ? new g.F(g.F.types.Dd, a)
      : a.type == g.Lf
      ? new g.F(g.F.types.Pj, a)
      : a.type == g.Mf
      ? new g.F(g.F.types.Gd, a)
      : null
    : null;
};
g.F.ak = function (a) {
  return a && a.connection ? new g.F(g.F.types.Ye, a.connection) : null;
};
g.F.yg = function (a) {
  return a ? new g.F(g.F.types.hc, a) : null;
};
g.F.Nn = function (a) {
  return a ? new g.F(g.F.types.mg, a) : null;
};
g.F.am = function (a, c) {
  return c && a ? new g.F(g.F.types.Sc, a, { JD: c }) : null;
};
g.F.Ku = function (a) {
  var c = a.ca || a.O;
  return c ? g.F.zg(c) : g.F.yg(a);
};
b = g.F.prototype;
b.mb = function () {
  return this.wp;
};
function fb(a, c) {
  a = a.Ea;
  a instanceof g.Xd || (a = a.W());
  if (!a || !a.u) return null;
  var d = a.Qd();
  a = d.u.Ib(!0);
  for (var e = 0, f; (f = a[e]); e++)
    if (d.id == f.id)
      return (
        (c = e + (c ? 1 : -1)), -1 == c || c == a.length ? null : g.F.Nn(a[c])
      );
  throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}
function gb(a) {
  if (!a) return null;
  do var c = a.ca && a.ca.ra();
  while (c && t(c) == a && (a = c));
  return (c = a.ca || a.O) && c.na && c.na.Ig() ? g.F.ak(c.na.Ig()) : g.F.Nn(a);
}
b.W = function () {
  return this.mb() === g.F.types.hc
    ? this.Ea
    : this.mb() === g.F.types.mg
    ? this.Ea
    : this.mb() === g.F.types.Sc
    ? null
    : this.Ea.W();
};
b.next = function () {
  switch (this.wp) {
    case g.F.types.mg:
      return fb(this, !0);
    case g.F.types.Pj:
      var a = this.Ea;
      return g.F.yg(a.W());
    case g.F.types.Ac:
      a: {
        var c = this.Ea,
          d = c.Ig();
        a = c.W();
        c = d.hb.indexOf(c) + 1;
        d = a.S.indexOf(d);
        for (var e; (e = a.S[d]); d++) {
          for (var f = e.hb; c < f.length; ) {
            if (hb(f[c]) || g.F.yi) {
              a = g.F.$l(f[c]);
              break a;
            }
            c++;
          }
          c = 0;
          if (e.connection) {
            a = g.F.ak(e);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.Ye:
      a: {
        c = this.Ea.Ig();
        a = c.W();
        for (c = a.S.indexOf(c) + 1; (d = a.S[c]); c++) {
          e = d.hb;
          f = 0;
          for (var h; (h = e[f]); f++)
            if (hb(h) || g.F.yi) {
              a = g.F.$l(h);
              break a;
            }
          if (d.connection) {
            a = g.F.ak(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.hc:
      return g.F.zg(this.Ea.X);
    case g.F.types.Gd:
      return (a = this.Ea), g.F.yg(a.W());
    case g.F.types.Dd:
      return (a = this.Ea), g.F.zg(a.na);
  }
  return null;
};
b.Ng = function () {
  switch (this.wp) {
    case g.F.types.Sc:
      var a = this.Ea.Ib(!0);
      if (0 < a.length) return g.F.Nn(a[0]);
      break;
    case g.F.types.mg:
      a = this.Ea;
      var c = a.ca || a.O;
      return c ? g.F.zg(c) : g.F.yg(a);
    case g.F.types.hc:
      a = this.Ea;
      a: {
        a = a.S;
        c = 0;
        for (var d; (d = a[c]); c++) {
          for (var e = d.hb, f = 0, h; (h = e[f]); f++)
            if (hb(h) || g.F.yi) {
              a = g.F.$l(h);
              break a;
            }
          if (d.connection) {
            a = g.F.ak(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.Ye:
      return g.F.zg(this.Ea.na);
  }
  return null;
};
b.xf = function () {
  switch (this.wp) {
    case g.F.types.mg:
      return fb(this, !1);
    case g.F.types.Ac:
      a: {
        var a = this.Ea;
        var c = a.Ig();
        var d = a.W();
        a = c.hb.indexOf(a) - 1;
        for (var e = d.S.indexOf(c), f; (f = d.S[e]); e--) {
          if (f.connection && f !== c) {
            c = g.F.ak(f);
            break a;
          }
          for (f = f.hb; -1 < a; ) {
            if (hb(f[a]) || g.F.yi) {
              c = g.F.$l(f[a]);
              break a;
            }
            a--;
          }
          0 <= e - 1 && (a = d.S[e - 1].hb.length - 1);
        }
        c = null;
      }
      return c;
    case g.F.types.Ye:
      a: {
        c = this.Ea.Ig();
        d = c.W();
        for (a = d.S.indexOf(c); (e = d.S[a]); a--) {
          if (e.connection && e !== c) {
            c = g.F.ak(e);
            break a;
          }
          e = e.hb;
          f = e.length - 1;
          for (var h; (h = e[f]); f--)
            if (hb(h) || g.F.yi) {
              c = g.F.$l(h);
              break a;
            }
        }
        c = null;
      }
      return c;
    case g.F.types.hc:
      return (c = this.Ea), g.F.zg(c.ca || c.O);
    case g.F.types.Gd:
      c = this.Ea;
      if ((c = c.na) && !c.Ig()) return g.F.zg(c);
      break;
    case g.F.types.Dd:
      return (c = this.Ea), g.F.yg(c.W());
  }
  return null;
};
b.Sg = function () {
  switch (this.wp) {
    case g.F.types.mg:
      var a = this.Ea,
        c = a.Xa();
      return g.F.am(a.u, new g.g.V(c.x, c.y + g.F.qE));
    case g.F.types.Pj:
      return (a = this.Ea), (c = a.na) ? g.F.zg(c) : g.F.Nn(a.W());
    case g.F.types.Ac:
      return g.F.yg(this.Ea.W());
    case g.F.types.Ye:
      return (a = this.Ea), g.F.yg(a.W());
    case g.F.types.hc:
      return (a = this.Ea), gb(a);
    case g.F.types.Gd:
      return (a = this.Ea), gb(a.W());
    case g.F.types.Dd:
      return (a = this.Ea), gb(a.W());
  }
  return null;
};
g.navigation = {};
g.navigation.ym = null;
g.navigation.Hl = 1;
g.navigation.Of = 2;
g.navigation.Il = 3;
g.navigation.Yz = 40;
g.navigation.Be = g.navigation.Of;
g.navigation.yb = {
  Gd: "previous",
  Dd: "next",
  ot: "in",
  Gt: "out",
  Sy: "insert",
  JF: "mark",
  uE: "disconnect",
  qq: "toolbox",
  EE: "exit",
  uG: "toggle_keyboard_nav",
  TF: "move workspace cursor up",
  QF: "move workspace cursor down",
  RF: "move workspace cursor left",
  SF: "move workspace cursor right",
};
g.navigation.jn = "local_marker_1";
g.navigation.Pd = function () {
  return g.navigation.Hg().Pd(g.navigation.jn);
};
g.navigation.Hg = function () {
  return g.Gg();
};
g.navigation.gB = function (a) {
  if ((a = a.Ka))
    if (
      ((g.navigation.Be = g.navigation.Il),
      g.navigation.cD(!1),
      g.navigation.Pd().jb || g.navigation.rw(),
      !a.ob && 0 < a.Bb.length)
    ) {
      var c = a.Bb[0];
      c.Qg() && bb(a, c);
    }
};
g.navigation.fB = function (a) {
  g.navigation.Be = g.navigation.Hl;
  var c = a.Ka;
  a = c ? c.ec() : a.ec();
  g.navigation.Pd().jb || g.navigation.rw();
  a &&
    a.s &&
    ((a = a.s.Ib(!0)),
    0 < a.length && ((a = a[0]), (a = g.F.Nn(a)), H(g.navigation.hm(), a)));
};
g.navigation.gr = function (a) {
  g.Dc();
  var c = a.Db(),
    d = !!a.Ka,
    e = a.Ib(!0);
  g.navigation.cD(d);
  g.navigation.Be = g.navigation.Of;
  0 < e.length
    ? H(c, g.F.Ku(e[0]))
    : ((a = g.F.am(a, new g.g.V(100, 100))), H(c, a));
};
g.navigation.hm = function () {
  var a = g.navigation.Hg(),
    c = null;
  a.pa && (c = (a = (c = a.Ka) ? c.ec() : a.ec()) ? a.s.Db() : null);
  return c;
};
g.navigation.FI = function (a) {
  var c = a.ec();
  if (c && c.isVisible()) {
    var d = g.navigation.hm().jb.Ea;
    d.isEnabled()
      ? ((c = ib(c, d)),
        c.Ga(),
        Ca(c, !0),
        H(a.Db(), g.F.yg(c)),
        g.navigation.oC() ||
          g.navigation.yd(
            "Something went wrong while inserting a block from the flyout."
          ),
        g.navigation.gr(a),
        H(a.Db(), g.F.Ku(c)),
        g.navigation.tK())
      : g.navigation.yd("Can't insert a disabled block.");
  } else
    g.navigation.yd(
      "Trying to insert from the flyout when the flyout does not  exist or is not visible"
    );
};
g.navigation.cD = function (a) {
  g.navigation.hm() &&
    (g.navigation.hm().Ia(), a && g.navigation.Hg().ec().Ia());
};
g.navigation.WI = function () {
  var a = g.navigation.Pd().jb,
    c = g.navigation.Hg().Db().jb;
  if (!a) return g.navigation.yd("Cannot insert with no marked node."), !1;
  if (!c) return g.navigation.yd("Cannot insert with no cursor node."), !1;
  a = a.mb();
  c = c.mb();
  return a == g.F.types.Ac
    ? (g.navigation.yd("Should not have been able to mark a field."), !1)
    : a == g.F.types.hc
    ? (g.navigation.yd("Should not have been able to mark a block."), !1)
    : a == g.F.types.mg
    ? (g.navigation.yd("Should not have been able to mark a stack."), !1)
    : c == g.F.types.Ac
    ? (g.navigation.yd("Cannot attach a field to anything else."), !1)
    : c == g.F.types.Sc
    ? (g.navigation.yd("Cannot attach a workspace to anything else."), !1)
    : !0;
};
g.navigation.aJ = function (a, c) {
  if (!a) return !1;
  if (a.Na)
    return g.navigation.yd("Cannot move a shadow block to the workspace."), !1;
  a.getParent() && A(a, !1);
  a.moveTo(c.Ms);
  return !0;
};
g.navigation.oC = function () {
  var a = g.navigation.Pd().jb,
    c = g.navigation.Hg().Db().jb;
  if (!g.navigation.WI()) return !1;
  var d = a.mb(),
    e = c.mb(),
    f = c.Ea,
    h = a.Ea;
  if (a.qm && c.qm) return g.navigation.Rf(f, h);
  if (a.qm && (e == g.F.types.hc || e == g.F.types.mg))
    return g.navigation.TB(f, h);
  if (d == g.F.types.Sc) return (c = c ? c.W() : null), g.navigation.aJ(c, a);
  g.navigation.yd("Unexpected state in Blockly.navigation.modify_.");
  return !1;
};
g.navigation.BH = function (a, c) {
  var d = a.W(),
    e = c.W();
  d.Qd() == e.Qd() &&
    (-1 < p(d, !1).indexOf(e)
      ? g.navigation.mr(c).disconnect()
      : g.navigation.mr(a).disconnect());
};
g.navigation.xw = function (a, c) {
  if (!a || !c) return !1;
  var d = a.W();
  return v(jb(a), a, c, !1)
    ? (g.navigation.BH(a, c), x(c) || kb(d.Qd(), a, c), c.connect(a), !0)
    : !1;
};
g.navigation.mr = function (a) {
  var c = a.W();
  return x(a) ? (c.ca ? c.ca : c.O ? c.O : null) : a;
};
g.navigation.BB = function (a) {
  return x(a) ? a : a.na ? a.na : null;
};
g.navigation.Rf = function (a, c) {
  if (!a || !c) return !1;
  var d = g.navigation.mr(a),
    e = g.navigation.BB(c),
    f = g.navigation.BB(a),
    h = g.navigation.mr(c);
  if (
    (d && e && g.navigation.xw(d, e)) ||
    (f && h && g.navigation.xw(f, h)) ||
    g.navigation.xw(a, c)
  )
    return !0;
  d = jb(a).Fq(a, c, !1);
  g.navigation.yd("Connection failed with error: " + ua(d, a, c));
  return !1;
};
g.navigation.TB = function (a, c) {
  switch (c.type) {
    case g.Mf:
      if (g.navigation.Rf(a.X, c)) return !0;
      break;
    case g.fb:
      if (g.navigation.Rf(a.ca, c)) return !0;
      break;
    case g.kb:
      if (g.navigation.Rf(a.O, c)) return !0;
      break;
    case g.Lf:
      for (var d = 0; d < a.S.length; d++) {
        var e = a.S[d].connection;
        if (e && e.type === g.kb && g.navigation.Rf(e, c)) return !0;
      }
      if (a.O && g.navigation.Rf(a.O, c)) return !0;
  }
  g.navigation.yd("This block can not be inserted at the marked location.");
  return !1;
};
g.navigation.AH = function (a) {
  var c = a.Db().jb;
  if (c.qm) {
    var d = c.Ea;
    d.isConnected()
      ? ((c = x(d) ? d : d.na),
        (d = x(d) ? d.na : d),
        d.W().Na
          ? g.navigation.kw("Cannot disconnect a shadow block")
          : (c.disconnect(),
            lb(d, c),
            mb(c.W().Qd()),
            (c = g.F.zg(c)),
            H(a.Db(), c)))
      : g.navigation.kw("Cannot disconnect unconnected connection");
  } else
    g.navigation.kw(
      "Cannot disconnect blocks when the cursor is not on a connection"
    );
};
g.navigation.rw = function () {
  H(g.navigation.Pd(), g.navigation.Hg().Db().jb);
};
g.navigation.tK = function () {
  var a = g.navigation.Pd();
  H(a, null);
  a.Ia();
};
g.navigation.md = function (a) {
  g.navigation.Be = a;
};
g.navigation.bJ = function (a) {
  var c = g.navigation.Hg();
  if (c && (c = c.Db())) {
    var d = c.jb;
    d = d ? d.W() : null;
    d === a
      ? d.getParent()
        ? (a = d.ca || d.O) && H(c, g.F.zg(a.na))
        : H(c, g.F.am(d.u, d.Xa()))
      : d && -1 < Aa(a, !1).indexOf(d) && H(c, g.F.am(d.u, d.Xa()));
  }
};
g.navigation.cJ = function (a) {
  var c = g.navigation.Hg().Db();
  if (c) {
    var d = c.jb;
    d = d ? d.W() : null;
    d === a && H(c, g.F.yg(d));
  }
};
g.navigation.KH = function () {
  var a = g.navigation.Hg();
  a.ub || ((a.ub = !0), g.navigation.gr(a));
};
g.navigation.zH = function () {
  var a = g.navigation.Hg();
  a.ub &&
    ((a.ub = !1),
    a.Db().Ia(),
    g.navigation.Pd().Ia(),
    g.navigation.hm() && g.navigation.hm().Ia());
};
g.navigation.kw = function (a) {
  g.navigation.ym ? g.navigation.ym("log", a) : console.log(a);
};
g.navigation.yd = function (a) {
  g.navigation.ym ? g.navigation.ym("warn", a) : console.warn(a);
};
g.navigation.RN = function (a) {
  g.navigation.ym ? g.navigation.ym("error", a) : console.error(a);
};
g.navigation.Qr = function (a, c, d) {
  var e = a.Db(),
    f = a.Db().jb;
  if (f.mb() !== g.F.types.Sc) return !1;
  f = f.Ms;
  H(
    e,
    g.F.am(a, new g.g.V(c * g.navigation.Yz + f.x, d * g.navigation.Yz + f.y))
  );
  return !0;
};
g.navigation.nI = function (a) {
  a = a.Db().jb;
  var c = a.mb();
  c == g.F.types.Ac
    ? ((a = a.Ea), hb(a) && a.Bf(void 0))
    : a.qm || c == g.F.types.Sc
    ? g.navigation.rw()
    : c == g.F.types.hc
    ? g.navigation.yd("Cannot mark a block.")
    : c == g.F.types.mg && g.navigation.yd("Cannot mark a stack.");
};
g.navigation.lK = function () {
  var a = {
    name: g.navigation.yb.Gd,
    Ya: function (c) {
      return c.ub;
    },
    za: function (c, d, e) {
      d = c.Ka;
      switch (g.navigation.Be) {
        case g.navigation.Of:
          return c.Db().fc(e);
        case g.navigation.Hl:
          return (c = d ? d.ec() : c.ec()), !(!c || !c.fc(e));
        case g.navigation.Il:
          return d && "function" == typeof d.fc ? d.fc(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.gb.C.register(a);
  I(g.g.R.Uz, a.name);
};
g.navigation.jK = function () {
  var a = {
    name: g.navigation.yb.Gt,
    Ya: function (c) {
      return c.ub;
    },
    za: function (c, d, e) {
      switch (g.navigation.Be) {
        case g.navigation.Of:
          return c.Db().fc(e);
        case g.navigation.Hl:
          return g.navigation.gB(c), !0;
        case g.navigation.Il:
          return (c = c.Ka) && "function" == typeof c.fc ? c.fc(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.gb.C.register(a);
  I(g.g.R.Yx, a.name);
};
g.navigation.iK = function () {
  var a = {
    name: g.navigation.yb.Dd,
    Ya: function (c) {
      return c.ub;
    },
    za: function (c, d, e) {
      d = c.Ka;
      switch (g.navigation.Be) {
        case g.navigation.Of:
          return c.Db().fc(e);
        case g.navigation.Hl:
          return (c = d ? d.ec() : c.ec()), !(!c || !c.fc(e));
        case g.navigation.Il:
          return d && "function" == typeof d.fc ? d.fc(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.gb.C.register(a);
  I(g.g.R.xz, a.name);
};
g.navigation.dK = function () {
  var a = {
    name: g.navigation.yb.ot,
    Ya: function (c) {
      return c.ub;
    },
    za: function (c, d, e) {
      switch (g.navigation.Be) {
        case g.navigation.Of:
          return c.Db().fc(e);
        case g.navigation.Il:
          return (
            ((d = c.Ka) && "function" == typeof d.fc && d.fc(e)) ||
              g.navigation.fB(c),
            !0
          );
        default:
          return !1;
      }
    },
  };
  g.gb.C.register(a);
  I(g.g.R.sy, a.name);
};
g.navigation.fK = function () {
  var a = {
    name: g.navigation.yb.Sy,
    Ya: function (c) {
      return c.ub && !c.options.readOnly;
    },
    za: function () {
      switch (g.navigation.Be) {
        case g.navigation.Of:
          return g.navigation.oC();
        default:
          return !1;
      }
    },
  };
  g.gb.C.register(a);
  I(g.g.R.hF, a.name);
};
g.navigation.gK = function () {
  var a = {
    name: g.navigation.yb.JF,
    Ya: function (c) {
      return c.ub && !c.options.readOnly;
    },
    za: function (c) {
      switch (g.navigation.Be) {
        case g.navigation.Of:
          return g.navigation.nI(c), !0;
        case g.navigation.Hl:
          return g.navigation.FI(c), !0;
        default:
          return !1;
      }
    },
  };
  g.gb.C.register(a);
  I(g.g.R.Xp, a.name);
};
g.navigation.YJ = function () {
  var a = {
    name: g.navigation.yb.uE,
    Ya: function (c) {
      return c.ub && !c.options.readOnly;
    },
    za: function (c) {
      switch (g.navigation.Be) {
        case g.navigation.Of:
          return g.navigation.AH(c), !0;
        default:
          return !1;
      }
    },
  };
  g.gb.C.register(a);
  I(g.g.R.uq, a.name);
};
g.navigation.nK = function () {
  var a = {
    name: g.navigation.yb.qq,
    Ya: function (c) {
      return c.ub && !c.options.readOnly;
    },
    za: function (c) {
      switch (g.navigation.Be) {
        case g.navigation.Of:
          return c.Ka ? g.navigation.gB(c) : g.navigation.fB(c), !0;
        default:
          return !1;
      }
    },
  };
  g.gb.C.register(a);
  I(g.g.R.rG, a.name);
};
g.navigation.aK = function () {
  var a = {
    name: g.navigation.yb.EE,
    Ya: function (c) {
      return c.ub;
    },
    za: function (c) {
      switch (g.navigation.Be) {
        case g.navigation.Hl:
          return g.navigation.gr(c), !0;
        case g.navigation.Il:
          return g.navigation.gr(c), !0;
        default:
          return !1;
      }
    },
  };
  g.gb.C.register(a, !0);
  I(g.g.R.gt, a.name, !0);
  I(g.g.R.E, a.name, !0);
};
g.navigation.mK = function () {
  var a = {
    name: g.navigation.yb.uG,
    za: function (d) {
      d.ub ? g.navigation.zH() : g.navigation.KH();
      return !0;
    },
  };
  g.gb.C.register(a);
  var c = J(g.g.R.rF, [g.g.R.li, g.g.R.rh]);
  I(c, a.name);
};
g.navigation.pK = function () {
  var a = {
    name: g.navigation.yb.RF,
    Ya: function (d) {
      return d.ub && !d.options.readOnly;
    },
    za: function (d) {
      return g.navigation.Qr(d, -1, 0);
    },
  };
  g.gb.C.register(a);
  var c = J(g.g.R.Yx, [g.g.R.rh]);
  I(c, a.name);
};
g.navigation.qK = function () {
  var a = {
    name: g.navigation.yb.SF,
    Ya: function (d) {
      return d.ub && !d.options.readOnly;
    },
    za: function (d) {
      return g.navigation.Qr(d, 1, 0);
    },
  };
  g.gb.C.register(a);
  var c = J(g.g.R.sy, [g.g.R.rh]);
  I(c, a.name);
};
g.navigation.rK = function () {
  var a = {
    name: g.navigation.yb.TF,
    Ya: function (d) {
      return d.ub && !d.options.readOnly;
    },
    za: function (d) {
      return g.navigation.Qr(d, 0, -1);
    },
  };
  g.gb.C.register(a);
  var c = J(g.g.R.Uz, [g.g.R.rh]);
  I(c, a.name);
};
g.navigation.oK = function () {
  var a = {
    name: g.navigation.yb.QF,
    Ya: function (d) {
      return d.ub && !d.options.readOnly;
    },
    za: function (d) {
      return g.navigation.Qr(d, 0, 1);
    },
  };
  g.gb.C.register(a);
  var c = J(g.g.R.xz, [g.g.R.rh]);
  I(c, a.name);
};
g.navigation.hK = function () {
  g.navigation.dK();
  g.navigation.iK();
  g.navigation.jK();
  g.navigation.lK();
  g.navigation.oK();
  g.navigation.pK();
  g.navigation.qK();
  g.navigation.rK();
  g.navigation.YJ();
  g.navigation.aK();
  g.navigation.fK();
  g.navigation.gK();
  g.navigation.mK();
  g.navigation.nK();
};
g.Xt = function (a) {
  this.s = a;
  this.wD = a.options.Rg || { contents: [] };
  this.lk = a.options.vd;
  this.Ki = this.qe = null;
  this.Bb = [];
  this.Lc = this.qb = 0;
  this.L = a.options.L;
  this.ma = null;
  this.Eu = {};
  this.Ja = a.options.Ja;
  this.ob = null;
  this.En = [];
};
b = g.Xt.prototype;
b.Y = function () {
  var a = this.s,
    c = u(a),
    d = this.s,
    e = new g.Fd({
      parentWorkspace: d,
      rtl: d.L,
      oneBasedIndex: d.options.Xh,
      horizontalLayout: d.vd,
      renderer: d.options.Xo,
      rendererOverrides: d.options.Yo,
    });
  e.Ja = d.options.Ja;
  d = d.vd ? g.C.jr(g.C.Z.TE, d.options) : g.C.jr(g.C.Z.Iy, d.options);
  if (!d)
    throw Error(
      "Blockly.VerticalFlyout, Blockly.HorizontalFlyout or your own custom flyout must be required."
    );
  this.ma = new d(e);
  this.qe = this.Ae(this.s);
  g.g.o.rk(this.ma.Wa("svg"), c);
  this.ma.Y(a);
  this.Ga(this.wD);
  a = a.yc;
  a.subscribe(this.qe, "toolboxBackgroundColour", "background-color");
  a.subscribe(this.qe, "toolboxForegroundColour", "color");
};
b.Ae = function (a) {
  var c = u(a);
  a = this.Hu();
  var d = document.createElement("div");
  g.g.o.Ha(d, "blocklyToolboxContents");
  this.lk && (d.style.flexDirection = "row");
  this.Ki = d;
  this.Ki.tabIndex = 0;
  g.g.ta.Af(this.Ki, g.g.ta.Bi.xG);
  a.appendChild(this.Ki);
  c.parentNode.insertBefore(a, c);
  c = this.Ki;
  d = g.ya(a, "click", this, this.qJ, !1, !0);
  this.En.push(d);
  c = g.ya(c, "keydown", this, this.uJ, !1, !0);
  this.En.push(c);
  return a;
};
b.Hu = function () {
  var a = document.createElement("div");
  a.setAttribute("layout", this.lk ? "h" : "v");
  g.g.o.Ha(a, "blocklyToolboxDiv");
  g.g.o.Ha(a, "blocklyNonSelectable");
  a.setAttribute("dir", this.L ? "RTL" : "LTR");
  return a;
};
b.qJ = function (a) {
  if (g.g.Bk(a) || a.target == this.qe) g.Dc(!1);
  else {
    if ((a = a.target.getAttribute("id")))
      (a = this.Eu[a]), a.Qg() && (bb(this, a), a.HC());
    g.Dc(!0);
  }
  g.Touch.Yj();
};
b.uJ = function (a) {
  var c = !1;
  switch (a.keyCode) {
    case g.g.R.yy:
      c = nb(this);
      break;
    case g.g.R.Nz:
      c = ob(this);
      break;
    case g.g.R.wl:
      c = pb(this);
      break;
    case g.g.R.Dl:
      c = qb(this);
      break;
    case g.g.R.Xp:
    case g.g.R.Az:
      this.ob && this.ob.wk() && ((c = this.ob), eb(c, !c.ek), (c = !0));
      break;
    default:
      c = !1;
  }
  !c && this.ob && this.ob.Lo && (c = this.ob.Lo(a));
  c && a.preventDefault();
};
b.Ga = function (a) {
  this.wD = a;
  for (var c = 0; c < this.Bb.length; c++) {
    var d = this.Bb[c];
    d && d.I();
  }
  this.Bb = [];
  this.Eu = {};
  a = a.contents;
  c = document.createDocumentFragment();
  d = 0;
  for (var e; (e = a[d]); d++) this.Ju(e, c);
  this.Ki.appendChild(c);
  this.position();
};
b.Ju = function (a, c) {
  var d = a.kind;
  "CATEGORY" == d.toUpperCase() && g.g.wa.WB(a) && (d = g.If.pj);
  if ((d = g.C.co(g.C.Z.Ml, d.toLowerCase())))
    (a = new d(a, this)),
      rb(this, a),
      a.Y(),
      (d = a.Pi()) && c.appendChild(d),
      a.kB && a.Le.setAttribute("id", a.La());
};
function rb(a, c) {
  a.Bb.push(c);
  a.Eu[c.La()] = c;
  if (c.wk()) for (var d = 0, e; (e = c.Gs[d]); d++) rb(a, e);
}
b.wq = function (a) {
  g.g.o.Ha(this.qe, a);
};
b.ls = function (a) {
  g.g.o.wc(this.qe, a);
};
b.gm = function () {
  if (!this.qe) return null;
  var a = this.qe.getBoundingClientRect(),
    c = a.top,
    d = c + a.height,
    e = a.left;
  a = e + a.width;
  return this.Ja == g.g.wa.Hd.rq
    ? new g.g.Rect(-1e7, d, -1e7, 1e7)
    : this.Ja == g.g.wa.Hd.Us
    ? new g.g.Rect(c, 1e7, -1e7, 1e7)
    : this.Ja == g.g.wa.Hd.wl
    ? new g.g.Rect(-1e7, 1e7, -1e7, a)
    : new g.g.Rect(-1e7, 1e7, e, 1e7);
};
b.Kg = function () {
  return this.qb;
};
b.ec = function () {
  return this.ma;
};
b.position = function () {
  var a = this.qe;
  a &&
    (this.lk
      ? ((a.style.left = "0"),
        (a.style.height = "auto"),
        (a.style.width = "100%"),
        (this.Lc = a.offsetHeight),
        this.Ja == g.Tj ? (a.style.top = "0") : (a.style.bottom = "0"))
      : (this.Ja == g.Ll ? (a.style.right = "0") : (a.style.left = "0"),
        (a.style.height = "100%"),
        (this.qb = a.offsetWidth)),
    this.ma.position());
};
b.Em = function () {
  for (var a = 0; a < this.Bb.length; a++) {
    var c = this.Bb[a];
    c.Em && c.Em();
  }
};
b.Eb = function (a) {
  this.qe.style.display = a ? "block" : "none";
};
function bb(a, c) {
  var d = a.ob;
  if ((c || d) && (!c || c.Qg())) {
    null == d ||
      (d.wk() && d == c) ||
      null == d ||
      ((a.ob = null), cb(d, !1), g.g.ta.md(a.Ki, g.g.ta.State.Ns, ""));
    null != c &&
      c != d &&
      null != c &&
      ((a.ob = c), cb(c, !0), g.g.ta.md(a.Ki, g.g.ta.State.Ns, c.La()));
    (d != c || c.wk()) && c && c.Oi.length
      ? (a.ma.show(c.Oi), a.ma.ux())
      : a.ma.Ia();
    var e = d && d.De(),
      f = c && c.De();
    d == c && (f = null);
    a = new g.h.vh(e, f, a.s.id);
    g.h.Fa(a);
  }
}
b.fc = function (a) {
  if (!this.ob) return !1;
  switch (a.name) {
    case g.navigation.yb.Gd:
      return ob(this);
    case g.navigation.yb.Gt:
      return pb(this);
    case g.navigation.yb.Dd:
      return nb(this);
    case g.navigation.yb.ot:
      return qb(this);
    default:
      return !1;
  }
};
function pb(a) {
  return a.ob
    ? a.ob.wk() && a.ob.ek
      ? (eb(a.ob, !1), !0)
      : a.ob.getParent() && a.ob.getParent().Qg()
      ? (bb(a, a.ob.getParent()), !0)
      : !1
    : !1;
}
function qb(a) {
  if (!a.ob || !a.ob.wk()) return !1;
  var c = a.ob;
  c.ek ? nb(a) : eb(c, !0);
  return !0;
}
function nb(a) {
  if (!a.ob) return !1;
  var c = a.Bb.indexOf(a.ob) + 1;
  if (-1 < c && c < a.Bb.length) {
    for (var d = a.Bb[c]; d && !d.Qg(); ) d = a.Bb[++c];
    if (d && d.Qg()) return bb(a, d), !0;
  }
  return !1;
}
function ob(a) {
  if (!a.ob) return !1;
  var c = a.Bb.indexOf(a.ob) - 1;
  if (-1 < c && c < a.Bb.length) {
    for (var d = a.Bb[c]; d && !d.Qg(); ) d = a.Bb[--c];
    if (d && d.Qg()) return bb(a, d), !0;
  }
  return !1;
}
b.I = function () {
  this.ma.I();
  for (var a = 0; a < this.Bb.length; a++) this.Bb[a].I();
  for (a = 0; a < this.En.length; a++) g.Oa(this.En[a]);
  this.En = [];
  this.Bb = [];
  this.s.yc.unsubscribe(this.qe);
  g.g.o.removeNode(this.qe);
};
g.$c.register([
  ".blocklyToolboxDelete {",
  'cursor: url("<<<PATH>>>/handdelete.cur"), auto;',
  "}",
  ".blocklyToolboxGrab {",
  'cursor: url("<<<PATH>>>/handclosed.cur"), auto;',
  "cursor: grabbing;",
  "cursor: -webkit-grabbing;",
  "}",
  ".blocklyToolboxDiv {",
  "background-color: #ddd;",
  "overflow-x: visible;",
  "overflow-y: auto;",
  "padding: 4px 0 4px 0;",
  "position: absolute;",
  "z-index: 70;",
  "-webkit-tap-highlight-color: transparent;",
  "}",
  ".blocklyToolboxContents {",
  "display: flex;",
  "flex-wrap: wrap;",
  "flex-direction: column;",
  "}",
  ".blocklyToolboxContents:focus {",
  "outline: none;",
  "}",
]);
g.C.register(g.C.Z.qq, g.C.Wp, g.Xt);
g.h.wh = function (a, c) {
  g.h.wh.v.constructor.call(this, c);
  this.vm = a;
};
g.g.object.U(g.h.wh, g.h.ve);
g.h.wh.prototype.type = g.h.Jz;
g.h.wh.prototype.va = function () {
  var a = g.h.wh.v.va.call(this);
  a.isOpen = this.vm;
  return a;
};
g.h.wh.prototype.ea = function (a) {
  g.h.wh.v.ea.call(this, a);
  this.vm = a.isOpen;
};
g.C.register(g.C.Z.cc, g.h.Jz, g.h.wh);
g.dd = function (a) {
  this.s = a;
  this.Bb = [];
  this.Eg = null;
  if (!(0 >= this.s.options.Lr)) {
    a = new g.Fd({
      scrollbars: !0,
      parentWorkspace: this.s,
      rtl: this.s.L,
      oneBasedIndex: this.s.options.Xh,
      renderer: this.s.options.Xo,
      rendererOverrides: this.s.options.Yo,
    });
    if (this.s.vd) {
      a.Ja = this.s.Ja == g.g.wa.Hd.rq ? g.g.wa.Hd.Us : g.g.wa.Hd.rq;
      if (!g.nt) throw Error("Missing require for Blockly.HorizontalFlyout");
      this.Eg = new g.nt(a);
    } else {
      a.Ja = this.s.Ja == g.g.wa.Hd.Dl ? g.g.wa.Hd.wl : g.g.wa.Hd.Dl;
      if (!g.yh) throw Error("Missing require for Blockly.VerticalFlyout");
      this.Eg = new g.yh(a);
    }
    G(this.s, this.rJ.bind(this));
  }
};
b = g.dd.prototype;
b.Wj = 47;
b.Ip = 44;
b.xl = 16;
b.xt = 20;
b.hn = 20;
b.hq = 10;
b.Rt = 0;
b.St = 32;
b.bF = 0.1;
g.dd.ND = 80;
g.dd.$x = 4;
g.dd.iz = 0.4;
g.dd.WF = 0.8;
g.dd.az = 45;
b = g.dd.prototype;
b.Ar = !1;
b.vw = 0;
b.N = null;
b.Ds = null;
b.hw = 0;
b.dj = 0;
b.Ao = 0;
b.Om = 0;
b.Wa = function () {
  this.N = g.g.o.M(g.g.G.rc, { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var c = g.g.o.M(g.g.G.Ym, { id: "blocklyTrashBodyClipPath" + a }, this.N);
  g.g.o.M(g.g.G.Bc, { width: this.Wj, height: this.Ip, y: this.xl }, c);
  var d = g.g.o.M(
    g.g.G.si,
    {
      width: g.Jd.width,
      x: -this.Rt,
      height: g.Jd.height,
      y: -this.St,
      "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")",
    },
    this.N
  );
  d.setAttributeNS(g.g.o.bf, "xlink:href", this.s.options.mj + g.Jd.url);
  c = g.g.o.M(g.g.G.Ym, { id: "blocklyTrashLidClipPath" + a }, this.N);
  g.g.o.M(g.g.G.Bc, { width: this.Wj, height: this.xl }, c);
  this.Ds = g.g.o.M(
    g.g.G.si,
    {
      width: g.Jd.width,
      x: -this.Rt,
      height: g.Jd.height,
      y: -this.St,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")",
    },
    this.N
  );
  this.Ds.setAttributeNS(g.g.o.bf, "xlink:href", this.s.options.mj + g.Jd.url);
  g.ed(this.N, "mousedown", this, this.SG);
  g.ed(this.N, "mouseup", this, this.click);
  g.ed(d, "mouseover", this, this.$I);
  g.ed(d, "mouseout", this, this.YI);
  this.fu();
  return this.N;
};
b.Y = function (a) {
  0 < this.s.options.Lr &&
    (g.g.o.rk(this.Eg.Wa(g.g.G.Rj), u(this.s)), this.Eg.Y(this.s));
  this.eh = this.xt + a;
  sb(this, !1);
  return this.eh + this.Ip + this.xl;
};
b.I = function () {
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.s = this.Ds = null;
  clearTimeout(this.hw);
};
b.position = function () {
  if (this.eh) {
    var a = this.s.Vc();
    a &&
      ((this.Ao =
        a.Ja == g.te || (this.s.vd && !this.s.L)
          ? a.Gb + a.Jc - this.Wj - this.hn - g.Sa.Oc
          : this.hn + g.Sa.Oc),
      (this.Om =
        a.Ja == g.xn ? this.eh : a.Nb + a.Tc - (this.Ip + this.xl) - this.eh),
      this.N.setAttribute(
        "transform",
        "translate(" + this.Ao + "," + this.Om + ")"
      ));
  }
};
b.gm = function () {
  if (!this.N) return null;
  var a = this.N.getBoundingClientRect(),
    c = a.top + this.St - this.hq;
  a = a.left + this.Rt - this.hq;
  return new g.g.Rect(
    c,
    c + this.xl + this.Ip + 2 * this.hq,
    a,
    a + this.Wj + 2 * this.hq
  );
};
function sb(a, c) {
  a.Ar != c && (clearTimeout(a.hw), (a.Ar = c), a.fu());
}
b.fu = function () {
  var a = 1 / (g.dd.$x + 1);
  this.dj += this.Ar ? a : -a;
  this.dj = Math.min(Math.max(this.dj, this.vw), 1);
  tb(this, this.dj * g.dd.az);
  this.N.style.opacity = g.dd.iz + this.dj * (g.dd.WF - g.dd.iz);
  this.dj > this.vw &&
    1 > this.dj &&
    (this.hw = setTimeout(this.fu.bind(this), g.dd.ND / g.dd.$x));
};
function tb(a, c) {
  var d = a.s.Ja == g.Ll || (a.s.vd && a.s.L);
  a.Ds.setAttribute(
    "transform",
    "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.Wj - 4) + "," + (a.xl - 2) + ")"
  );
}
b.Lq = function () {
  sb(this, !1);
};
b.click = function () {
  if (this.Bb.length && !this.Eg.isVisible()) {
    for (var a = [], c = 0, d; (d = this.Bb[c]); c++) a[c] = g.T.Pe(d);
    this.Eg.show(a);
    ub(this, !0);
  }
};
function ub(a, c) {
  a = new g.h.wh(c, a.s.id);
  g.h.Fa(a);
}
b.SG = function (a) {
  !this.Eg.isVisible() && this.Bb.length && a.stopPropagation();
};
b.$I = function () {
  this.Bb.length && sb(this, !0);
};
b.YI = function () {
  sb(this, !1);
};
b.rJ = function (a) {
  if (
    !(0 >= this.s.options.Lr) &&
    a.type == g.h.Ss &&
    a.zm.tagName &&
    "shadow" != a.zm.tagName.toLowerCase()
  ) {
    for (var c = (a = a.zm.cloneNode(!0)); c; ) {
      c.removeAttribute &&
        (c.removeAttribute("x"),
        c.removeAttribute("y"),
        c.removeAttribute("id"),
        c.removeAttribute("disabled"),
        "comment" == c.nodeName &&
          (c.removeAttribute("h"),
          c.removeAttribute("w"),
          c.removeAttribute("pinned")));
      var d = c.firstChild || c.nextSibling;
      if (!d)
        for (d = c.parentNode; d; ) {
          if (d.nextSibling) {
            d = d.nextSibling;
            break;
          }
          d = d.parentNode;
        }
      c = d;
    }
    a = g.T.fe(a);
    if (-1 == this.Bb.indexOf(a)) {
      for (this.Bb.unshift(a); this.Bb.length > this.s.options.Lr; )
        this.Bb.pop();
      this.vw = a = this.bF;
      this.Ar || tb(this, a * g.dd.az);
    }
  }
};
g.aa = Object.create(null);
g.Aa = function (a, c) {
  this.K = a;
  this.type = c;
};
g.Aa.Op = 0;
g.Aa.qz = 1;
g.Aa.uz = 2;
g.Aa.sz = 3;
g.Aa.nz = 4;
g.Aa.oz = 5;
g.Aa.rz = 6;
g.Aa.pz = 7;
b = g.Aa.prototype;
b.na = null;
b.Sf = !1;
b.Hi = null;
b.xs = null;
b.x = 0;
b.y = 0;
b.Rf = function (a) {
  var c = this,
    d = c.W(),
    e = a.W();
  a.isConnected() && a.disconnect();
  if (c.isConnected()) {
    var f = c.ra(),
      h = c.jm();
    c.xs = null;
    if (f.Na) (h = g.T.Ah(f)), f.I(!1), (f = null);
    else if (c.type == g.kb) {
      if (!f.O) throw Error("Orphan block does not have an output connection.");
      var k = g.Aa.fC(e, f);
      k && (f.O.connect(k), (f = null));
    } else if (c.type == g.fb) {
      if (!f.ca)
        throw Error("Orphan block does not have a previous connection.");
      for (k = e; k.X; ) {
        var l = t(k);
        if (l && !l.Na) k = l;
        else {
          v(f.u.Jn, f.ca, k.X, !1) && (k.X.connect(f.ca), (f = null));
          break;
        }
      }
    }
    if (f && (c.disconnect(), g.h.Za)) {
      var m = g.h.oc();
      setTimeout(function () {
        f.u &&
          !f.getParent() &&
          (g.h.ga(m), f.O ? f.O.Tr(c) : f.ca && f.ca.Tr(c), g.h.ga(!1));
      }, g.Kp);
    }
    c.xs = h;
  }
  var n;
  g.h.isEnabled() && (n = new g.h.Xm(e));
  g.Aa.jH(c, a);
  e.vs(d);
  n && (n.Qk(), g.h.Fa(n));
};
b.I = function () {
  if (this.isConnected()) {
    this.Hm(null);
    var a = this.ra();
    a && A(a);
  }
  this.Sf = !0;
};
b.W = function () {
  return this.K;
};
function x(a) {
  return a.type == g.kb || a.type == g.fb;
}
b.isConnected = function () {
  return !!this.na;
};
b.Fq = function (a) {
  g.g.Pu.warn(
    "Connection.prototype.canConnectWithReason",
    "July 2020",
    "July 2021",
    "the workspace's connection checker"
  );
  return jb(this).Fq(this, a, !1);
};
function jb(a) {
  return a.K.u.Jn;
}
b.Tr = function () {};
b.connect = function (a) {
  if (this.na != a && v(jb(this), this, a, !1)) {
    var c = g.h.oc();
    c || g.h.ga(!0);
    x(this) ? this.Rf(a) : a.Rf(this);
    c || g.h.ga(!1);
  }
};
g.Aa.jH = function (a, c) {
  if (!a || !c) throw Error("Cannot connect null connections.");
  a.na = c;
  c.na = a;
};
g.Aa.IK = function (a, c) {
  var d = null;
  c = c.O;
  for (var e = 0; e < a.S.length; e++) {
    var f = a.S[e].connection,
      h = jb(c);
    if (f && f.type == g.kb && v(h, c, f, !1)) {
      if (d) return null;
      d = f;
    }
  }
  return d;
};
g.Aa.fC = function (a, c) {
  for (var d; (d = g.Aa.IK(a, c)); ) if (((a = d.ra()), !a || a.Na)) return d;
  return null;
};
b = g.Aa.prototype;
b.disconnect = function () {
  var a = this.na;
  if (!a) throw Error("Source connection not connected.");
  if (a.na != this)
    throw Error("Target connection not connected to source connection.");
  if (x(this)) {
    var c = this.K;
    var d = a.W();
    a = this;
  } else (c = a.W()), (d = this.K);
  var e = g.h.oc();
  e || g.h.ga(!0);
  this.Wu(c, d);
  d.Na || a.Zo();
  e || g.h.ga(!1);
};
b.Wu = function (a, c) {
  var d;
  g.h.isEnabled() && (d = new g.h.Xm(c));
  this.na = this.na.na = null;
  c.vs(null);
  d && (d.Qk(), g.h.Fa(d));
};
b.Zo = function () {
  var a = this.W(),
    c = this.jm();
  if (a.u && c)
    if (((a = g.T.ck(c, a.u)), a.O)) this.connect(a.O);
    else if (a.ca) this.connect(a.ca);
    else throw Error("Child block does not have output or previous statement.");
};
b.ra = function () {
  return this.isConnected() ? this.na.W() : null;
};
b.GC = function () {
  !this.isConnected() ||
    (this.na && v(jb(this), this, this.na, !1)) ||
    A(x(this) ? this.ra() : this.K);
};
b.Yb = function (a) {
  a
    ? (Array.isArray(a) || (a = [a]), (this.Hi = a), this.GC())
    : (this.Hi = null);
  return this;
};
b.Hm = function (a) {
  this.xs = a;
  a = this.ra();
  a ? a.Na && (a.I(!1), this.Zo()) : this.Zo();
};
b.jm = function () {
  return this.xs;
};
b.sC = function () {
  return [];
};
b.Ig = function () {
  for (var a = null, c = this.K, d = c.S, e = 0; e < c.S.length; e++)
    if (d[e].connection === this) {
      a = d[e];
      break;
    }
  return a;
};
b.toString = function () {
  var a = this.K;
  if (a)
    if (a.O == this) var c = "Output Connection of ";
    else if (a.ca == this) c = "Previous Connection of ";
    else if (a.X == this) c = "Next Connection of ";
    else {
      c = null;
      for (var d = 0, e; (e = a.S[d]); d++)
        if (e.connection == this) {
          c = e;
          break;
        }
      if (c) c = 'Input "' + c.name + '" connection on ';
      else
        return (
          console.warn("Connection not actually connected to sourceBlock_"),
          "Orphan Connection"
        );
    }
  else return "Orphan Connection";
  d = a.type ? '"' + a.type + '" block' : "Block";
  a.id && (d += ' (id="' + a.id + '")');
  return c + d;
};
g.ka = {};
g.ka.Vm = {};
g.ka.register = function (a, c) {
  if ("string" != typeof a || "" == a.trim())
    throw Error('Error: Invalid extension name "' + a + '"');
  if (g.ka.Vm[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if ("function" != typeof c)
    throw Error('Error: Extension "' + a + '" must be a function');
  g.ka.Vm[a] = c;
};
g.ka.ks = function (a, c) {
  if (!c || "object" != typeof c)
    throw Error('Error: Mixin "' + a + '" must be a object');
  g.ka.register(a, function () {
    this.Je(c);
  });
};
g.ka.ix = function (a, c, d, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  g.ka.qA(f, c.Vb, "domToMutation");
  g.ka.qA(f, c.vb, "mutationToDom");
  var h = g.ka.sA(c, f);
  if (d && "function" != typeof d)
    throw Error('Extension "' + a + '" is not a function');
  g.ka.register(a, function () {
    if (h) {
      if (!g.Ic) throw Error(f + "Missing require for Blockly.Mutator");
      this.gp(new g.Ic(e || []));
    }
    this.Je(c);
    d && d.apply(this);
  });
};
g.ka.unregister = function (a) {
  g.ka.Vm[a]
    ? delete g.ka.Vm[a]
    : console.warn(
        'No extension mapping for name "' + a + '" found to unregister'
      );
};
g.ka.apply = function (a, c, d) {
  var e = g.ka.Vm[a];
  if ("function" != typeof e)
    throw Error('Error: Extension "' + a + '" not found.');
  if (d) g.ka.aH(a, c);
  else var f = g.ka.Dv(c);
  e.apply(c);
  if (d) g.ka.ZG('Error after applying mutator "' + a + '": ', c);
  else if (!g.ka.gJ(f, c))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
g.ka.qA = function (a, c, d) {
  if (!c) throw Error(a + 'missing required property "' + d + '"');
  if ("function" != typeof c)
    throw Error(a + '" required property "' + d + '" must be a function');
};
g.ka.aH = function (a, c) {
  if (g.ka.Dv(c).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        c.id
    );
};
g.ka.sA = function (a, c) {
  var d = void 0 !== a.Eh,
    e = void 0 !== a.Ih;
  if (d && e) {
    if ("function" != typeof a.Eh)
      throw Error(c + "compose must be a function.");
    if ("function" != typeof a.Ih)
      throw Error(c + "decompose must be a function.");
    return !0;
  }
  if (d || e)
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
g.ka.ZG = function (a, c) {
  if ("function" != typeof c.Vb)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof c.vb)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  g.ka.sA(c, a);
};
g.ka.Dv = function (a) {
  var c = [];
  void 0 !== a.Vb && c.push(a.Vb);
  void 0 !== a.vb && c.push(a.vb);
  void 0 !== a.Eh && c.push(a.Eh);
  void 0 !== a.Ih && c.push(a.Ih);
  return c;
};
g.ka.gJ = function (a, c) {
  c = g.ka.Dv(c);
  if (c.length != a.length) return !1;
  for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
  return !0;
};
g.ka.Cq = function (a, c) {
  var d = [];
  "object" == typeof document &&
    g.g.dD(function () {
      for (var e in c) g.g.rA(c[e]);
    });
  return function () {
    this.type &&
      -1 == d.indexOf(this.type) &&
      (g.ka.$G(this, a, c), d.push(this.type));
    this.Qb(
      function () {
        var e = String(E(this, a)),
          f = c[e];
        null == f
          ? -1 == d.indexOf(this.type) &&
            ((e = "No tooltip mapping for value " + e + " of field " + a),
            null != this.type && (e += " of block type " + this.type),
            console.warn(e + "."))
          : (f = g.g.Nc(f));
        return f;
      }.bind(this)
    );
  };
};
g.ka.$G = function (a, c, d) {
  var e = z(a, c);
  if ("function" != typeof e.Hk) {
    e = e.getOptions();
    for (var f = 0; f < e.length; ++f) {
      var h = e[f][1];
      null == d[h] &&
        console.warn(
          "No tooltip mapping for value " +
            h +
            " of field " +
            c +
            " of block type " +
            a.type
        );
    }
  }
};
g.ka.tu = function (a) {
  "object" == typeof document &&
    g.g.dD(function () {
      g.g.rA(a);
    });
  return function () {
    this.Qb(
      function () {
        var c = z(this, "VAR");
        return g.g.Nc(a).replace("%1", c ? c.je() : "");
      }.bind(this)
    );
  };
};
g.ka.NH = function () {
  this.TK = this.Ef;
  this.Qb(
    function () {
      var a = this.getParent();
      return (a && vb(a) && a.Ef) || this.TK;
    }.bind(this)
  );
};
g.ka.register("parent_tooltip_when_inline", g.ka.NH);
g.lf = {};
g.lf.register = function (a, c) {
  g.C.register(g.C.Z.Ac, a, c);
};
g.lf.unregister = function (a) {
  g.C.unregister(g.C.Z.Ac, a);
};
g.lf.ea = function (a) {
  var c = g.C.Fv(g.C.Z.Ac, a.type);
  return c
    ? c.ea(a)
    : (console.warn(
        "Blockly could not create a field of type " +
          a.type +
          ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."
      ),
      null);
};
g.zb = {};
g.zb.Xu = 0;
g.zb.Vq = null;
g.zb.DH = function (a) {
  var c = a.u,
    d = a.Ma();
  c.Ei.play("delete");
  a = wb(c, d);
  d = d.cloneNode(!0);
  d.WK = a.x;
  d.XK = a.y;
  d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  u(c).appendChild(d);
  d.hA = d.getBBox();
  g.zb.XA(d, c.L, new Date(), c.scale);
};
g.zb.XA = function (a, c, d, e) {
  var f = (new Date() - d) / 150;
  1 < f
    ? g.g.o.removeNode(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.WK + (((c ? -1 : 1) * a.hA.width * e) / 2) * f) +
          "," +
          (a.XK + a.hA.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(g.zb.XA, 10, a, c, d, e));
};
g.zb.kH = function (a) {
  var c = a.u,
    d = c.scale;
  c.Ei.play("click");
  if (!(1 > d)) {
    var e = wb(c, a.Ma());
    a.O
      ? ((e.x += (a.L ? 3 : -3) * d), (e.y += 13 * d))
      : a.ca && ((e.x += (a.L ? -23 : 23) * d), (e.y += 3 * d));
    a = g.g.o.M(
      g.g.G.Zs,
      {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10,
      },
      u(c)
    );
    g.zb.AA(a, new Date(), d);
  }
};
g.zb.AA = function (a, c, d) {
  var e = (new Date() - c) / 150;
  1 < e
    ? g.g.o.removeNode(a)
    : (a.setAttribute("r", 25 * e * d),
      (a.style.opacity = 1 - e),
      (g.zb.Xu = setTimeout(g.zb.AA, 10, a, c, d)));
};
g.zb.CH = function (a) {
  a.u.Ei.play("disconnect");
  if (!(1 > a.u.scale)) {
    var c = K(a).height;
    c = (Math.atan(10 / c) / Math.PI) * 180;
    a.L || (c *= -1);
    g.zb.WA(a.Ma(), c, new Date());
  }
};
g.zb.WA = function (a, c, d) {
  var e = (new Date() - d) / 200;
  1 < e
    ? (a.kp = "")
    : ((a.kp =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")"),
      (g.zb.Vq = a),
      (g.zb.Xu = setTimeout(g.zb.WA, 10, a, c, d)));
  a.setAttribute("transform", a.vp + a.kp);
};
g.zb.Yu = function () {
  if (g.zb.Vq) {
    clearTimeout(g.zb.Xu);
    var a = g.zb.Vq;
    a.kp = "";
    a.setAttribute("transform", a.vp);
    g.zb.Vq = null;
  }
};
g.h.gg = function (a, c, d) {
  g.h.gg.v.constructor.call(this, a ? a.u.id : void 0);
  this.lb = a ? a.id : null;
  this.aC = c;
  this.iA = d;
};
g.g.object.U(g.h.gg, g.h.ve);
g.h.gg.prototype.type = g.h.iy;
g.h.gg.prototype.va = function () {
  var a = g.h.gg.v.va.call(this);
  a.isStart = this.aC;
  a.blockId = this.lb;
  a.blocks = this.iA;
  return a;
};
g.h.gg.prototype.ea = function (a) {
  g.h.gg.v.ea.call(this, a);
  this.aC = a.isStart;
  this.lb = a.blockId;
  this.iA = a.blocks;
};
g.C.register(g.C.Z.cc, g.h.iy, g.h.gg);
g.Kf = function (a) {
  this.gi = g.selected = a;
  this.s = a.u;
  this.cj = this.cw = null;
  this.Xn = xb(this, this.gi);
  this.xd = this.mc = null;
  this.fh = !1;
  this.Vn = this.Pv = this.Dk = null;
  this.Aq = yb(this);
};
g.Kf.Cl = { qt: 0, kF: 1, wz: 2 };
g.Kf.prototype.I = function () {
  this.Aq.length = 0;
  g.h.disable();
  try {
    this.Xn && this.Xn.I(), this.cj && this.cj.I();
  } finally {
    g.h.enable();
  }
};
g.Kf.prototype.update = function (a, c) {
  var d = this.mc && this.xd ? g.dE : g.Id;
  for (var e = null, f = null, h = 0; h < this.Aq.length; h++) {
    var k = this.Aq[h],
      l = k.closest(d, a);
    l.connection && ((e = l.connection), (f = k), (d = l.js));
  }
  e = ((d = { closest: e, local: f, js: d }), !!d.closest) && c != g.wy;
  if (
    (this.fh = !!c && !this.gi.getParent() && this.gi.le() && !e) ||
    zb(this, d, a)
  ) {
    g.h.disable();
    d.closest
      ? ((a = this.mc != d.closest),
        (c = this.xd != d.local),
        this.mc && this.xd && (a || c || this.fh) && Ab(this))
      : Ab(this);
    this.xd = this.mc = this.Dk = null;
    if (!this.fh && ((a = d.closest), (c = d.local), a))
      if (a == this.mc || a.W().Td())
        console.log("Trying to connect to an insertion marker");
      else {
        this.mc = a;
        this.xd = c;
        a = this.mc;
        d = this.xd;
        c = this.gi;
        d.type == g.Lf || d.type == g.Mf
          ? ((e = !a.isConnected()) ||
              ((e = a.ra()),
              d.type == g.Lf
                ? ((d = e.O), (c = g.Aa.fC(c, e)))
                : ((d = e.ca), (c = c.Gr())),
              (e = c ? v(jb(d), c, d, !1) : !1)),
            (c = e ? g.Kf.Cl.qt : g.Kf.Cl.wz))
          : (c = g.Kf.Cl.qt);
        switch (c) {
          case g.Kf.Cl.kF:
            this.Pv = this.mc.W();
            break;
          case g.Kf.Cl.qt:
            e = this.xd;
            c = this.mc;
            d = this.cw && e == this.cw ? this.cj : this.Xn;
            e = d.Cv(e.W(), e);
            if (e == this.Dk)
              throw Error(
                "Made it to showInsertionMarker_ even though the marker isn't changing"
              );
            d.Ga();
            d.pa = !0;
            d.Ma().setAttribute("visibility", "visible");
            e && c && kb(d, e, c);
            c && e.connect(c);
            this.Dk = e;
            break;
          case g.Kf.Cl.wz:
            (this.Vn = this.mc.ra()), Bb(this.Vn.Mb, "blocklyReplaceable", !0);
        }
        a &&
          ((d = a.K.u.Jb.la()),
          (c = Cb(d, a)),
          a.type == g.kb || a.type == g.Lf
            ? ((d = d.Kl),
              (c =
                g.g.D.moveBy(0, -d) +
                g.g.D.oa("v", d) +
                c.wf +
                g.g.D.oa("v", d)))
            : ((d = d.nn - d.Kb),
              (c =
                g.g.D.moveBy(-d, 0) +
                g.g.D.oa("h", d) +
                c.lj +
                g.g.D.oa("h", d))),
          (d = a.K.Xa()),
          (g.Aa.PB = g.g.o.M(
            g.g.G.$d,
            {
              class: "blocklyHighlightedConnectionPath",
              d: c,
              transform:
                "translate(" +
                (a.x - d.x) +
                "," +
                (a.y - d.y) +
                ")" +
                (a.K.L ? " scale(-1 1)" : ""),
            },
            a.K.Ma()
          )));
      }
    g.h.enable();
  }
};
function xb(a, c) {
  var d = c.type;
  g.h.disable();
  try {
    var e = a.s.hj(d);
    e.gD(!0);
    if (c.vb) {
      var f = c.vb();
      f && e.Vb(f);
    }
    for (a = 0; a < c.S.length; a++) {
      var h = c.S[a];
      if (h.name != g.Xd.Zm) {
        var k = e.S[a];
        for (d = 0; d < h.hb.length; d++) k.hb[d].setValue(h.hb[d].getValue());
      }
    }
    e.uj(c.isCollapsed());
    e.Ne(vb(c));
    e.qf();
    e.Ma().setAttribute("visibility", "hidden");
  } finally {
    g.h.enable();
  }
  return e;
}
function yb(a) {
  var c = a.gi.Vf(!1),
    d = a.gi.Gr();
  if (d && d != a.gi.X) {
    c.push(d);
    a.cw = d;
    if (a.cj) {
      g.h.disable();
      try {
        a.cj.I();
      } finally {
        g.h.enable();
      }
    }
    a.cj = xb(a, d.W());
  }
  return c;
}
function zb(a, c, d) {
  var e = c.local,
    f = c.closest;
  c = c.js;
  if (e && f) {
    if (a.xd && a.mc) {
      if (a.mc == f && a.xd == e) return !1;
      e = a.xd.x + d.x - a.mc.x;
      a = a.xd.y + d.y - a.mc.y;
      a = Math.sqrt(e * e + a * a);
      return !(f && c > a - g.iE);
    }
    if (a.xd || a.mc)
      console.error(
        "Only one of localConnection_ and closestConnection_ was set."
      );
    else return !0;
  } else return !(!a.xd || !a.mc);
  console.error(
    "Returning true from shouldUpdatePreviews, but it's not clear why."
  );
  return !0;
}
function Ab(a) {
  a.mc && a.mc.ra() && (g.g.o.removeNode(g.Aa.PB), delete g.Aa.PB);
  if (a.Vn) Bb(a.Vn.Mb, "blocklyReplaceable", !1), (a.Vn = null);
  else if (a.Pv) a.Pv = null;
  else if (a.Dk)
    if (a.Dk) {
      var c = a.Dk,
        d = c.W(),
        e = d.X,
        f = d.ca,
        h = d.O;
      h = c.type == g.kb && !(h && h.na);
      !(c != e || (f && f.na)) || h
        ? A(c.ra(), !1)
        : c.type == g.fb && c != e
        ? ((e = c.na),
          A(e.W(), !1),
          (f = f ? f.na : null),
          A(d, !0),
          f && f.connect(e))
        : A(d, !0);
      if (c.na)
        throw Error(
          "markerConnection_ still connected at the end of disconnectInsertionMarker"
        );
      a.Dk = null;
      d.Ma().setAttribute("visibility", "hidden");
    } else console.log("No insertion marker connection to disconnect");
}
g.Kf.prototype.im = function () {
  var a = [];
  this.Xn && a.push(this.Xn);
  this.cj && a.push(this.cj);
  return a;
};
g.Ej = function (a, c) {
  this.Hb = a;
  this.s = c;
  this.Dg = new g.Kf(this.Hb);
  this.bk = null;
  this.fh = !1;
  this.ah = this.Hb.Xa();
  this.Zq = g.Ej.CI(a);
};
g.Ej.prototype.I = function () {
  this.Zq.length = 0;
  this.Dg && this.Dg.I();
};
g.Ej.CI = function (a) {
  var c = [];
  a = p(a, !1);
  for (var d = 0, e; (e = a[d]); d++) {
    e = Db(e);
    for (var f = 0; f < e.length; f++)
      c.push({ location: e[f].Wi, icon: e[f] });
  }
  return c;
};
function Eb(a, c, d) {
  d = a.Bm(d);
  var e = g.g.V.sum(a.ah, d);
  a.Hb.zw(e);
  for (e = 0; e < a.Zq.length; e++) {
    var f = a.Zq[e],
      h = f.icon;
    f = g.g.V.sum(f.location, d);
    h.Wi = f;
    h.isVisible() && ((h = h.dc), (h.jc = f), h.qs && Na(h));
  }
  a.bk = Fb(a.s, c);
  a.Dg.update(d, a.bk);
  a.fh = a.Dg.fh;
  c = a.s.pd;
  a.fh
    ? (a.Hb.ep(!0), a.bk == g.et && c && sb(c, !0))
    : (a.Hb.ep(!1), c && sb(c, !1));
}
function Gb(a, c, d) {
  Eb(a, c, d);
  a.Zq = [];
  c = new g.h.gg(a.Hb, !1, p(a.Hb, !1));
  g.h.Fa(c);
  g.g.o.np();
  g.zb.Yu();
  d = a.Bm(d);
  c = g.g.V.sum(a.ah, d);
  var e = a.Hb;
  e.Cp && (e.translate(c.x, c.y), e.u.we.Jq(e.u.wb));
  c = a.s.pd;
  a.fh
    ? (c && setTimeout(c.Lq.bind(c), 100), a.Wn(), a.Hb.I(!1, !0), (g.fm = []))
    : c && c.Lq();
  a.fh ||
    (Hb(a.Hb, d.x, d.y),
    a.Hb.wj(!1),
    a.Wn(),
    a.Dg.mc
      ? ((d = a.Dg),
        d.mc &&
          (g.h.disable(),
          Ab(d),
          g.h.enable(),
          d.xd.connect(d.mc),
          d.gi.pa && (g.zb.kH((x(d.xd) ? d.mc : d.xd).W()), mb(d.gi.Qd()))))
      : a.Hb.Ga(),
    Ib(a.Hb));
  a.s.Zc(!0);
  (d = a.s.Ka) &&
    "function" == typeof d.ls &&
    d.ls(a.Hb.le() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.h.ga(!1);
}
g.Ej.prototype.Wn = function () {
  var a = new g.h.Xm(this.Hb);
  a.Ew = this.ah;
  a.Qk();
  g.h.Fa(a);
};
g.Ej.prototype.Bm = function (a) {
  a = new g.g.V(a.x / this.s.scale, a.y / this.s.scale);
  this.s.zo && a.scale(1 / this.s.options.pc.scale);
  return a;
};
g.Ej.prototype.im = function () {
  return this.Dg && this.Dg.im ? this.Dg.im() : [];
};
g.h.hh = function (a) {
  this.vg = (this.He = "undefined" == typeof a) ? "" : a.id;
  this.Pc = this.He ? "" : a.u.id;
  this.group = g.h.oc();
  this.Za = g.h.Za;
};
g.g.object.U(g.h.hh, g.h.Abstract);
g.h.hh.prototype.va = function () {
  var a = g.h.hh.v.va.call(this);
  this.vg && (a.commentId = this.vg);
  return a;
};
g.h.hh.prototype.ea = function (a) {
  g.h.hh.v.ea.call(this, a);
  this.vg = a.commentId;
};
g.h.hl = function (a, c, d) {
  g.h.hl.v.constructor.call(this, a);
  a &&
    ((this.wC = "undefined" == typeof c ? "" : c),
    (this.Rr = "undefined" == typeof d ? "" : d));
};
g.g.object.U(g.h.hl, g.h.hh);
b = g.h.hl.prototype;
b.type = g.h.ly;
b.va = function () {
  var a = g.h.hl.v.va.call(this);
  a.newContents = this.Rr;
  return a;
};
b.ea = function (a) {
  g.h.hl.v.ea.call(this, a);
  this.Rr = a.newValue;
};
b.um = function () {
  return this.wC == this.Rr;
};
b.run = function (a) {
  var c;
  (c = y(this).Nq[this.vg] || null)
    ? c.nO(a ? this.Rr : this.wC)
    : console.warn("Can't change non-existent comment: " + this.vg);
};
g.h.ih = function (a) {
  g.h.ih.v.constructor.call(this, a);
  a && (this.xml = a.uD());
};
g.g.object.U(g.h.ih, g.h.hh);
g.h.ih.prototype.type = g.h.Pp;
g.h.ih.prototype.va = function () {
  var a = g.h.ih.v.va.call(this);
  a.xml = g.T.fe(this.xml);
  return a;
};
g.h.ih.prototype.ea = function (a) {
  g.h.ih.v.ea.call(this, a);
  this.xml = g.T.Pe(a.xml);
};
g.h.ih.prototype.run = function (a) {
  g.h.py(this, a);
};
g.h.py = function (a, c) {
  var d = y(a);
  c
    ? ((c = g.g.xml.createElement("xml")), c.appendChild(a.xml), g.T.Mi(c, d))
    : (d = d.Nq[a.vg] || null)
    ? d.I(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + a.vg);
};
g.h.jh = function (a) {
  g.h.jh.v.constructor.call(this, a);
  a && (this.xml = a.uD());
};
g.g.object.U(g.h.jh, g.h.hh);
g.h.jh.prototype.type = g.h.ny;
g.h.jh.prototype.va = function () {
  return g.h.jh.v.va.call(this);
};
g.h.jh.prototype.ea = function (a) {
  g.h.jh.v.ea.call(this, a);
};
g.h.jh.prototype.run = function (a) {
  g.h.py(this, !a);
};
g.h.Hj = function (a) {
  g.h.Hj.v.constructor.call(this, a);
  a && ((this.Du = a), (this.Fw = a.FB()), (this.Ik = null));
};
g.g.object.U(g.h.Hj, g.h.hh);
b = g.h.Hj.prototype;
b.Qk = function () {
  if (!this.Du)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.Ik = this.Du.FB();
  this.Du = null;
};
b.type = g.h.Qp;
b.va = function () {
  var a = g.h.Hj.v.va.call(this);
  this.Ik &&
    (a.newCoordinate = Math.round(this.Ik.x) + "," + Math.round(this.Ik.y));
  return a;
};
b.ea = function (a) {
  g.h.Hj.v.ea.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.Ik = new g.g.V(Number(a[0]), Number(a[1]))));
};
b.um = function () {
  return g.g.V.kf(this.Fw, this.Ik);
};
b.run = function (a) {
  var c;
  if ((c = y(this).Nq[this.vg] || null)) {
    a = a ? this.Ik : this.Fw;
    var d = c.FB();
    c.moveBy(a.x - d.x, a.y - d.y);
  } else console.warn("Can't move non-existent comment: " + this.vg);
};
g.C.register(g.C.Z.cc, g.h.Pp, g.h.ih);
g.C.register(g.C.Z.cc, g.h.ly, g.h.hl);
g.C.register(g.C.Z.cc, g.h.Qp, g.h.Hj);
g.C.register(g.C.Z.cc, g.h.ny, g.h.jh);
g.Np = function (a, c) {
  this.Kc = a;
  this.s = c;
  this.bk = null;
  this.Ls = !1;
  this.ah = this.Kc.Xa();
  this.dk = g.g.tk() && c.we ? c.we : null;
};
g.Np.prototype.I = function () {
  this.dk = this.s = this.Kc = null;
};
function Jb(a, c, d) {
  d = a.Bm(d);
  d = g.g.V.sum(a.ah, d);
  a.Kc.zw(a.dk, d);
  a.Kc.le() &&
    ((a.bk = Fb(a.s, c)),
    (a.Ls = a.bk != g.vy),
    (c = a.s.pd),
    a.Ls
      ? (a.Kc.ep(!0), a.bk == g.et && c && sb(c, !0))
      : (a.Kc.ep(!1), c && sb(c, !1)));
}
function Kb(a, c, d) {
  Jb(a, c, d);
  c = a.Bm(d);
  c = g.g.V.sum(a.ah, c);
  a.Kc.moveTo(c.x, c.y);
  c = a.s.pd;
  a.Ls
    ? (c && setTimeout(c.Lq.bind(c), 100), a.Wn(), a.Kc.I(!1, !0))
    : c && c.Lq();
  a.Ls || (a.dk && a.dk.Jq(a.s.cg), a.Kc.wj && a.Kc.wj(!1), a.Wn());
  a.s.Zc(!0);
  (c = a.s.Ka) &&
    "function" == typeof c.ls &&
    c.ls(a.Kc.le() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.h.ga(!1);
}
g.Np.prototype.Wn = function () {
  if (this.Kc.YN) {
    var a = new g.h.Hj(this.Kc);
    a.Fw = this.ah;
    a.Qk();
    g.h.Fa(a);
  }
};
g.Np.prototype.Bm = function (a) {
  a = new g.g.V(a.x / this.s.scale, a.y / this.s.scale);
  this.s.zo && a.scale(1 / this.s.options.pc.scale);
  return a;
};
g.h.Hf = function (a, c, d) {
  g.h.Hf.v.constructor.call(this, a ? a.u.id : c);
  this.lb = a ? a.id : null;
  this.rD = d;
};
g.g.object.U(g.h.Hf, g.h.ve);
g.h.Hf.prototype.type = g.h.$s;
g.h.Hf.prototype.va = function () {
  var a = g.h.Hf.v.va.call(this);
  a.targetType = this.rD;
  this.lb && (a.blockId = this.lb);
  return a;
};
g.h.Hf.prototype.ea = function (a) {
  g.h.Hf.v.ea.call(this, a);
  this.rD = a.targetType;
  this.lb = a.blockId;
};
g.C.register(g.C.Z.cc, g.h.$s, g.h.Hf);
g.Bn = function (a) {
  this.s = a;
  this.nD = new g.g.V(a.scrollX, a.scrollY);
};
g.Bn.prototype.I = function () {
  this.s = null;
};
g.Bn.prototype.Gx = function () {
  g.selected && Lb(g.selected);
  qa(this.s);
};
g.Bn.prototype.Ni = function (a) {
  a = g.g.V.sum(this.nD, a);
  this.s.scroll(a.x, a.y);
};
g.bq = function (a) {
  g.bq.v.constructor.call(this, a.s);
  this.eD = a.Pa;
  this.lk = a.vd;
};
g.g.object.U(g.bq, g.Bn);
g.bq.prototype.Ni = function (a) {
  a = g.g.V.sum(this.nD, a);
  this.lk ? this.eD.set(-a.x) : this.eD.set(-a.y);
};
g.J = {};
g.J.visible = !1;
g.J.Ul = !1;
g.J.wF = 50;
g.J.qC = 0;
g.J.jp = 0;
g.J.ew = 0;
g.J.fw = 0;
g.J.Cb = null;
g.J.Oo = null;
g.J.gz = 0;
g.J.hz = 10;
g.J.hG = 10;
g.J.eF = 750;
g.J.wt = 5;
g.J.ib = null;
g.J.iI = function () {
  var a = g.J.DB(g.J.Cb);
  if (a) {
    for (a = a.Ef; "function" == typeof a; ) a = a();
    if ("string" != typeof a)
      throw Error("Tooltip function must return a string.");
    return a;
  }
  return "";
};
g.J.DB = function (a) {
  for (; a && a.Ef; ) {
    if ("string" == typeof a.Ef || "function" == typeof a.Ef) return a;
    a = a.Ef;
  }
  return null;
};
g.J.Wa = function () {
  g.J.ib ||
    ((g.J.ib = document.createElement("div")),
    (g.J.ib.className = "blocklyTooltipDiv"),
    (g.bs || document.body).appendChild(g.J.ib));
};
g.J.Tl = function (a) {
  a.ZI = g.ed(a, "mouseover", null, g.J.AJ);
  a.XI = g.ed(a, "mouseout", null, g.J.zJ);
  a.addEventListener("mousemove", g.J.LC, !1);
};
g.J.Px = function (a) {
  a && (g.Oa(a.ZI), g.Oa(a.XI), a.removeEventListener("mousemove", g.J.LC));
};
g.J.AJ = function (a) {
  g.J.Ul ||
    ((a = g.J.DB(a.currentTarget)),
    g.J.Cb != a && (g.J.Ia(), (g.J.Oo = null), (g.J.Cb = a)),
    clearTimeout(g.J.qC));
};
g.J.zJ = function () {
  g.J.Ul ||
    ((g.J.qC = setTimeout(function () {
      g.J.Cb = null;
      g.J.Oo = null;
      g.J.Ia();
    }, 1)),
    clearTimeout(g.J.jp));
};
g.J.LC = function (a) {
  if (g.J.Cb && g.J.Cb.Ef && !g.J.Ul)
    if (g.J.visible) {
      var c = g.J.ew - a.pageX;
      a = g.J.fw - a.pageY;
      Math.sqrt(c * c + a * a) > g.J.hG && g.J.Ia();
    } else
      g.J.Oo != g.J.Cb &&
        (clearTimeout(g.J.jp),
        (g.J.ew = a.pageX),
        (g.J.fw = a.pageY),
        (g.J.jp = setTimeout(g.J.HK, g.J.eF)));
};
g.J.I = function () {
  g.J.Cb = null;
  g.J.Oo = null;
  g.J.Ia();
};
g.J.Ia = function () {
  g.J.visible &&
    ((g.J.visible = !1), g.J.ib && (g.J.ib.style.display = "none"));
  g.J.jp && clearTimeout(g.J.jp);
};
g.J.block = function () {
  g.J.Ia();
  g.J.Ul = !0;
};
g.J.ZK = function () {
  g.J.Ul = !1;
};
g.J.HK = function () {
  if (!g.J.Ul && ((g.J.Oo = g.J.Cb), g.J.ib)) {
    g.J.ib.textContent = "";
    var a = g.J.iI();
    a = g.g.pb.HD(a, g.J.wF);
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) {
      var d = document.createElement("div");
      d.appendChild(document.createTextNode(a[c]));
      g.J.ib.appendChild(d);
    }
    a = g.J.Cb.L;
    c = document.documentElement.clientWidth;
    d = document.documentElement.clientHeight;
    g.J.ib.style.direction = a ? "rtl" : "ltr";
    g.J.ib.style.display = "block";
    g.J.visible = !0;
    var e = g.J.ew;
    e = a ? e - (g.J.gz + g.J.ib.offsetWidth) : e + g.J.gz;
    var f = g.J.fw + g.J.hz;
    f + g.J.ib.offsetHeight > d + window.scrollY &&
      (f -= g.J.ib.offsetHeight + 2 * g.J.hz);
    a
      ? (e = Math.max(g.J.wt - window.scrollX, e))
      : e + g.J.ib.offsetWidth > c + window.scrollX - 2 * g.J.wt &&
        (e = c - g.J.ib.offsetWidth - 2 * g.J.wt);
    g.J.ib.style.top = f + "px";
    g.J.ib.style.left = e + "px";
  }
};
g.kg = function (a, c) {
  this.pC = null;
  this.Nd = new g.g.V(0, 0);
  this.qc = this.Gc = this.Jm = this.Km = this.Oe = null;
  this.Lu = c;
  this.uo = this.yk = this.vo = this.jk = !1;
  this.tf = a;
  this.ma = this.cl = this.tg = this.Gi = this.Zr = this.Yr = null;
  this.zr = this.kk = this.nA = !1;
  this.LB = !g.wE;
};
b = g.kg.prototype;
b.I = function () {
  g.Touch.Yj();
  g.J.ZK();
  this.Lu.sd = null;
  this.Yr && g.Oa(this.Yr);
  this.Zr && g.Oa(this.Zr);
  this.tg && this.tg.I();
  this.cl && this.cl.I();
  this.Gi && this.Gi.I();
};
function Mb(a, c) {
  a.Nd = g.g.V.Sn(new g.g.V(c.clientX, c.clientY), a.pC);
  if (a.jk) var d = !1;
  else (a.jk = g.g.V.UI(a.Nd) > (a.ma ? g.UE : g.vE)), (d = a.jk);
  if (d) {
    if (a.nA)
      throw Error("updateIsDragging_ should only be called once per gesture.");
    a.nA = !0;
    if (a.Oe) {
      a.uo = !0;
      a.Gi = new g.Np(a.Oe, a.qc);
      d = a.Gi;
      g.h.oc() || g.h.ga(!0);
      d.s.Zc(!1);
      d.Kc.lu = !1;
      d.dk && (d.Kc.moveTo(0, 0), d.dk.Xk(d.ah.x, d.ah.y), Nb(d.dk, d.Kc.Ma()));
      d.Kc.wj && d.Kc.wj(!0);
      var e = d.s.Ka;
      e &&
        "function" == typeof e.wq &&
        e.wq(d.Kc.le() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      Jb(a.Gi, a.tf, a.Nd);
      d = !0;
    } else d = !1;
    if (!d) {
      if (a.Gc)
        if (
          (a.ma
            ? (a.Gc && a.Gc.isEnabled()
                ? ((d = !Ob(a.ma)) ||
                    ((d = a.Nd),
                    (d = (Math.atan2(d.y, d.x) / Math.PI) * 180),
                    (e = a.ma.HH),
                    (d =
                      (d < e && d > -e) || d < -180 + e || d > 180 - e
                        ? !0
                        : !1)),
                  d
                    ? ((a.qc = a.ma.$a),
                      Pb(a.qc),
                      g.h.oc() || g.h.ga(!0),
                      (a.Jm = null),
                      (a.Gc = ib(a.ma, a.Gc)),
                      a.Gc.select(),
                      (d = !0))
                    : (d = !1))
                : (d = !1),
              (a.yk = d))
            : a.Gc.Fc() && (a.yk = !0),
          a.yk)
        ) {
          a.tg = new g.Ej(a.Gc, a.qc);
          d = a.tg;
          e = a.Nd;
          var f = a.LB;
          g.h.oc() || g.h.ga(!0);
          var h = new g.h.gg(d.Hb, !0, p(d.Hb, !1));
          g.h.Fa(h);
          d.s.zo && mb(d.Hb);
          g.g.o.mp();
          d.s.Zc(!1);
          g.zb.Yu();
          if (d.Hb.getParent() || (f && d.Hb.X && d.Hb.X.ra()))
            A(d.Hb, f),
              (e = d.Bm(e)),
              (e = g.g.V.sum(d.ah, e)),
              d.Hb.translate(e.x, e.y),
              g.zb.CH(d.Hb),
              (e = d.Dg),
              (e.Aq = yb(e));
          d.Hb.wj(!0);
          e = d.Hb;
          e.Cp &&
            ((f = e.Xa()),
            e.Ma().removeAttribute("transform"),
            e.u.we.Xk(f.x, f.y),
            (f = e.Ma()) && Nb(e.u.we, f));
          (e = d.s.Ka) &&
            "function" == typeof e.wq &&
            e.wq(d.Hb.le() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
          Eb(a.tg, a.tf, a.Nd);
          d = !0;
        } else d = !1;
      else d = !1;
      if ((d = !d))
        if (a.ma) d = Ob(a.ma);
        else if ((d = a.qc)) (d = a.qc), (d = d.options.Yc && d.options.Yc.Ni);
      d &&
        ((a.cl = a.ma ? new g.bq(a.ma) : new g.Bn(a.qc)),
        (a.vo = !0),
        a.cl.Gx());
    }
    g.ej();
  }
  a.tf = c;
}
b.$u = function (a) {
  g.g.Cr(a)
    ? this.cancel()
    : ((this.kk = !0),
      g.zb.Yu(),
      Pb(this.qc),
      this.qc.zo && this.qc.resize(),
      g.Dc(!!this.ma),
      na(this.qc),
      (this.tf = a),
      g.J.block(),
      this.Gc &&
        (!this.Gc.Lb && a.shiftKey && this.Gc.u.ub
          ? H(this.Lu.Db(), g.F.Ku(this.Gc))
          : this.Gc.select()),
      g.g.Bk(a)
        ? ba(this, a)
        : (("touchstart" != a.type.toLowerCase() &&
            "pointerdown" != a.type.toLowerCase()) ||
            "mouse" == a.pointerType ||
            g.SI(a, this),
          (this.pC = new g.g.V(a.clientX, a.clientY)),
          (this.LB = a.altKey || a.ctrlKey || a.metaKey),
          this.Tl(a)));
};
b.Tl = function (a) {
  this.Yr = g.ya(document, "mousemove", null, this.mm.bind(this));
  this.Zr = g.ya(document, "mouseup", null, this.rr.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
b.mm = function (a) {
  Mb(this, a);
  this.vo
    ? this.cl.Ni(this.Nd)
    : this.yk
    ? Eb(this.tg, this.tf, this.Nd)
    : this.uo && Jb(this.Gi, this.tf, this.Nd);
  a.preventDefault();
  a.stopPropagation();
};
b.rr = function (a) {
  Mb(this, a);
  g.ej();
  if (this.zr) console.log("Trying to end a gesture recursively.");
  else {
    this.zr = !0;
    if (this.uo) Kb(this.Gi, a, this.Nd);
    else if (this.yk) Gb(this.tg, a, this.Nd);
    else if (this.vo) {
      var c = this.cl;
      c.Ni(this.Nd);
      ra(c.s);
    } else if (this.Oe && !this.jk)
      this.Oe.DK && this.Oe.DK(), this.Oe.select && this.Oe.select();
    else if (Qb(this)) {
      c = this.Km;
      var d = this.tf;
      hb(c) && c.Bf(d);
      Rb(this);
    } else
      !this.Jm || this.jk || Qb(this)
        ? this.Jm ||
          this.Oe ||
          this.Km ||
          this.jk ||
          ((c = this.Lu),
          a.shiftKey && c.ub
            ? ((d = g.g.zK(c, new g.g.V(a.clientX, a.clientY))),
              (d = g.F.am(c, d)),
              H(c.Db(), d))
            : g.selected && Lb(g.selected),
          (c = new g.h.Hf(null, (this.qc || c).id, "workspace")),
          g.h.Fa(c))
        : (this.ma && this.ma.Sl
            ? this.Gc.isEnabled() &&
              (g.h.oc() || g.h.ga(!0), Ib(ib(this.ma, this.Gc)))
            : ((c = new g.h.Hf(this.Jm, this.qc.id, "block")), g.h.Fa(c)),
          Rb(this),
          g.h.ga(!1));
    a.preventDefault();
    a.stopPropagation();
    this.I();
  }
};
b.cancel = function () {
  if (!this.zr) {
    g.ej();
    if (this.uo) Kb(this.Gi, this.tf, this.Nd);
    else if (this.yk) Gb(this.tg, this.tf, this.Nd);
    else if (this.vo) {
      var a = this.cl;
      a.Ni(this.Nd);
      ra(a.s);
    }
    this.I();
  }
};
function ba(a, c) {
  a.Gc
    ? (Rb(a), g.Dc(!!a.ma), a.Gc.ip(c))
    : a.Oe
    ? a.Oe.ip(c)
    : a.qc && !a.ma && (g.Dc(), a.qc.ip(c));
  c.preventDefault();
  c.stopPropagation();
  a.I();
}
function Sb(a, c, d) {
  if (a.kk)
    throw Error(
      "Tried to call gesture.handleWsStart, but the gesture had already been started."
    );
  a.qc || (a.qc = d);
  a.tf = c;
  a.$u(c);
  a.qc.ub && g.navigation.md(g.navigation.Of);
}
function Tb(a, c, d) {
  if (a.kk)
    throw Error(
      "Tried to call gesture.handleFlyoutStart, but the gesture had already been started."
    );
  a.ma || (a.ma = d);
  Sb(a, c, d.s);
}
function Rb(a) {
  a.Gc && !a.ma && mb(a.Gc);
}
function Ub(a, c) {
  a.Jm || a.Oe || ((a.Jm = c), c.Lb && c != c.Qd() ? Vb(a, c.Qd()) : Vb(a, c));
}
function Vb(a, c) {
  c.Na ? Vb(a, c.getParent()) : (a.Gc = c);
}
function Qb(a) {
  return (a.Km ? hb(a.Km) : !1) && !a.jk && (!a.ma || !a.ma.Sl);
}
b.Ec = function () {
  return this.vo || this.yk || this.uo;
};
b.im = function () {
  return this.tg ? this.tg.im() : [];
};
g.kg.nk = function () {
  for (var a = g.Ob.getAll(), c = 0, d; (d = a[c]); c++) if (d.sd) return !0;
  return !1;
};
g.Yd = function (a, c, d) {
  this.Fb = this.kl;
  this.yD = this.Zk = null;
  this.nd = new g.g.se(0, 0);
  this.B = this.ww = this.ci = this.Hc = this.lc = this.ie = this.Wh = this.Gh = null;
  d && this.ee(d);
  this.setValue(a);
  c && (this.Zk = c);
};
b = g.Yd.prototype;
b.kl = null;
b.name = void 0;
b.Sf = !1;
b.mC = 50;
b.K = null;
b.Pg = !0;
b.Cj = !0;
b.Au = null;
g.Yd.fz = "\u00a0";
b = g.Yd.prototype;
b.$m = !0;
b.Fl = !1;
b.ee = function (a) {
  var c = a.tooltip;
  "string" == typeof c && (c = g.g.Nc(a.tooltip));
  c && this.Qb(c);
};
b.zx = function (a) {
  if (this.K) throw Error("Field already bound to a block.");
  this.K = a;
};
b.la = function () {
  !this.B && this.K && this.K.u && this.K.u.pa && (this.B = this.K.u.Jb.la());
  return this.B;
};
b.W = function () {
  return this.K;
};
b.Y = function () {
  this.ie ||
    ((this.ie = g.g.o.M(g.g.G.rc, {}, null)),
    this.isVisible() || (this.ie.style.display = "none"),
    this.K.Ma().appendChild(this.ie),
    this.qk(),
    this.ki(),
    this.Qb(this.yD),
    g.J.Tl(Wb(this)),
    (this.ww = g.ya(Wb(this), "mousedown", this, this.jj)),
    this.pk());
};
b.qk = function () {
  Xb(this);
  Yb(this);
};
b.pk = function () {};
function Xb(a) {
  a.lc = g.g.o.M(
    g.g.G.Bc,
    {
      rx: a.la().Zp,
      ry: a.la().Zp,
      x: 0,
      y: 0,
      height: a.nd.height,
      width: a.nd.width,
      class: "blocklyFieldRect",
    },
    a.ie
  );
}
function Yb(a) {
  a.Hc = g.g.o.M(g.g.G.Tt, { class: "blocklyText" }, a.ie);
  a.la().kt && a.Hc.setAttribute("dominant-baseline", "central");
  a.ci = document.createTextNode("");
  a.Hc.appendChild(a.ci);
}
b.$n = function (a) {
  this.setValue(a.textContent);
};
b.tD = function (a) {
  a.textContent = this.getValue();
  return a;
};
b.I = function () {
  g.H.po(this);
  g.ba.po(this);
  g.J.Px(Wb(this));
  this.ww && g.Oa(this.ww);
  g.g.o.removeNode(this.ie);
  this.Sf = !0;
};
b.ki = function () {
  var a = this.ie;
  this.$m &&
    a &&
    (this.K.Sd()
      ? (g.g.o.Ha(a, "blocklyEditableText"),
        g.g.o.wc(a, "blocklyNonEditableText"),
        (a.style.cursor = this.dt))
      : (g.g.o.Ha(a, "blocklyNonEditableText"),
        g.g.o.wc(a, "blocklyEditableText"),
        (a.style.cursor = "")));
};
function hb(a) {
  return !!a.K && a.K.Sd() && !!a.Bf && "function" === typeof a.Bf;
}
b.isVisible = function () {
  return this.Cj;
};
b.Eb = function (a) {
  if (this.Cj != a) {
    this.Cj = a;
    var c = this.Ma();
    c && (c.style.display = a ? "block" : "none");
  }
};
function Zb(a, c) {
  a.Zk = c;
}
b.EB = function () {
  return this.Zk;
};
b.Ma = function () {
  return this.ie;
};
b.kc = function () {};
b.sj = function () {
  this.ci && (this.ci.nodeValue = this.lr());
  this.Sx();
};
b.Sx = function (a) {
  var c = this.la();
  a = void 0 != a ? a : this.lc ? this.la().ll : 0;
  var d = 2 * a,
    e = c.$p,
    f = 0;
  this.Hc && ((f = g.g.o.Bv(this.Hc, c.pi, c.ri, c.oi)), (d += f));
  this.lc && (e = Math.max(e, c.Dy));
  this.nd.height = e;
  this.nd.width = d;
  $b(this, a, f);
  ac(this);
};
function $b(a, c, d) {
  if (a.Hc) {
    var e = a.la(),
      f = a.nd.height / 2;
    a.Hc.setAttribute("x", a.K.L ? a.nd.width - d - c : c);
    a.Hc.setAttribute("y", e.kt ? f : f - e.$p / 2 + e.Fy);
  }
}
function ac(a) {
  a.lc &&
    (a.lc.setAttribute("width", a.nd.width),
    a.lc.setAttribute("height", a.nd.height),
    a.lc.setAttribute("rx", a.la().Zp),
    a.lc.setAttribute("ry", a.la().Zp));
}
b.Nh = function () {
  if (!this.isVisible()) return new g.g.se(0, 0);
  this.Pg
    ? (this.sj(), (this.Pg = !1))
    : this.Cj &&
      0 == this.nd.width &&
      (console.warn(
        "Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."
      ),
      this.sj());
  return this.nd;
};
function bc(a) {
  if (a.lc)
    (c = a.lc.getBoundingClientRect()),
      (a = g.g.style.ik(a.lc)),
      (e = c.width),
      (c = c.height);
  else {
    var c = K(a.K),
      d = a.K.u.scale;
    a = g.g.style.ik(Wb(a));
    var e = c.width * d;
    c = c.height * d;
    g.g.userAgent.$E
      ? ((a.x += 1.5 * d), (a.y += 1.5 * d))
      : g.g.userAgent.Jj ||
        g.g.userAgent.Xe ||
        ((a.x -= 0.5 * d), (a.y -= 0.5 * d));
    e += 1 * d;
    c += 1 * d;
  }
  return new g.g.Rect(a.y, a.y + c, a.x, a.x + e);
}
b.lr = function () {
  var a = this.je();
  if (!a) return g.Yd.fz;
  a.length > this.mC && (a = a.substring(0, this.mC - 2) + "\u2026");
  a = a.replace(/\s/g, g.Yd.fz);
  this.K && this.K.L && (a += "\u200f");
  return a;
};
b.je = function () {
  if (this.km) {
    var a = this.km.call(this);
    if (null !== a) return String(a);
  }
  return String(this.getValue());
};
b.Eo = function () {
  this.Pg = !0;
  this.B = null;
};
function cc(a) {
  a.Pg = !0;
  a.K && a.K.pa && (a.K.Ga(), a.K.Ub(), a.Rx());
}
b.setValue = function (a) {
  if (null !== a) {
    var c = this.Kh(a);
    a = dc(this, a, c);
    if (!(a instanceof Error)) {
      if ((c = this.EB()))
        if (((c = c.call(this, a)), (a = dc(this, a, c)), a instanceof Error))
          return;
      c = this.K;
      if (!c || !c.Sf) {
        var d = this.getValue();
        d === a
          ? this.Bg(a)
          : (c &&
              g.h.isEnabled() &&
              g.h.Fa(new g.h.gh(c, "field", this.name || null, d, a)),
            this.Bg(a),
            this.Pg && cc(this));
      }
    }
  }
};
function dc(a, c, d) {
  if (null === d) return a.YA(), a.Pg && cc(a), Error();
  void 0 !== d && (c = d);
  return c;
}
b.getValue = function () {
  return this.Fb;
};
b.Kh = function (a) {
  return null === a || void 0 === a ? null : a;
};
b.Bg = function (a) {
  this.Fb = a;
  this.Pg = !0;
};
b.YA = function () {};
b.jj = function (a) {
  if (this.K && this.K.u && (a = this.K.u.Mh(a))) {
    if (a.kk)
      throw Error(
        "Tried to call gesture.setStartField, but the gesture had already been started."
      );
    a.Km || (a.Km = this);
  }
};
b.Qb = function (a) {
  a || "" === a || (a = this.K);
  var c = Wb(this);
  c ? (c.Ef = a) : (this.yD = a);
};
function Wb(a) {
  return a.Au || a.Ma();
}
b.Vo = function () {
  return !1;
};
b.Ig = function () {
  for (var a = null, c = this.K, d = c.S, e = 0; e < c.S.length; e++)
    for (var f = d[e], h = f.hb, k = 0; k < h.length; k++)
      if (h[k] === this) {
        a = f;
        break;
      }
  return a;
};
b.rB = function () {
  return !1;
};
b.bC = function () {
  return !1;
};
b.fc = function () {
  return !1;
};
b.ai = function (a) {
  a ? (this.ie.appendChild(a), (this.Gh = a)) : (this.Gh = null);
};
b.bi = function (a) {
  a ? (this.ie.appendChild(a), (this.Wh = a)) : (this.Wh = null);
};
b.Rx = function () {
  var a = this.K.u;
  a.ub && this.Gh && a.Db().draw();
  a.ub && this.Wh && a.Pd(g.navigation.jn).draw();
};
g.Ad = function (a, c, d) {
  this.Iq = null;
  g.Ad.v.constructor.call(this, a, null, d);
  d || (this.Iq = c || null);
};
g.g.object.U(g.Ad, g.Yd);
g.Ad.prototype.kl = "";
g.Ad.ea = function (a) {
  var c = g.g.Nc(a.text);
  return new g.Ad(c, void 0, a);
};
g.Ad.prototype.$m = !1;
g.Ad.prototype.ee = function (a) {
  g.Ad.v.ee.call(this, a);
  this.Iq = a["class"];
};
g.Ad.prototype.qk = function () {
  Yb(this);
  this.Iq && g.g.o.Ha(this.Hc, this.Iq);
};
g.Ad.prototype.Kh = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
g.lf.register("field_label", g.Ad);
g.Xy = function (a, c, d, e) {
  if (a != g.lh && !c)
    throw Error("Value inputs and statement inputs must have non-empty name.");
  this.type = a;
  this.name = c;
  this.K = d;
  this.connection = e;
  this.hb = [];
};
b = g.Xy.prototype;
b.align = g.Ps;
b.Cj = !0;
b.W = function () {
  return this.K;
};
function L(a, c, d) {
  ec(a, a.hb.length, c, d);
  return a;
}
function ec(a, c, d, e) {
  if (0 > c || c > a.hb.length) throw Error("index " + c + " out of bounds.");
  if (!(d || ("" == d && e))) return c;
  "string" == typeof d && (d = new g.Ad(d));
  d.zx(a.K);
  a.K.pa && (d.Y(), d.kc());
  d.name = e;
  d.Eb(a.isVisible());
  e = d;
  e.$w && (c = ec(a, c, e.$w));
  a.hb.splice(c, 0, d);
  ++c;
  e.Ix && (c = ec(a, c, e.Ix));
  a.K.pa && ((a.K = a.K), a.K.Ga(), a.K.Ub());
  return c;
}
b.isVisible = function () {
  return this.Cj;
};
b.Eb = function (a) {
  if (this.Cj != a) {
    this.Cj = a;
    for (var c = 0, d; (d = this.hb[c]); c++) d.Eb(a);
    if (this.connection) {
      this.connection = this.connection;
      if (a) fc(this.connection);
      else if (((c = this.connection), gc(c, !1), c.na))
        for (c = p(c.ra(), !1), d = 0; d < c.length; d++) {
          for (var e = c[d], f = e.Vf(!0), h = 0; h < f.length; h++)
            gc(f[h], !1);
          e = Db(e);
          for (h = 0; h < e.length; h++) e[h].Eb(!1);
        }
      if ((c = this.connection.ra()))
        c.Ma().style.display = a ? "block" : "none";
    }
  }
};
b.Eo = function () {
  for (var a = 0, c; (c = this.hb[a]); a++) c.Eo();
};
b.Yb = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Yb(a);
  return this;
};
function hc(a, c) {
  a.align = c;
  a.K.pa && ((a.K = a.K), a.K.Ga());
  return a;
}
b.Hm = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Hm(a);
};
b.jm = function () {
  if (!this.connection) throw Error("This input does not have a connection.");
  return this.connection.jm();
};
b.Y = function () {
  if (this.K.u.pa) for (var a = 0; a < this.hb.length; a++) this.hb[a].Y();
};
b.I = function () {
  for (var a = 0, c; (c = this.hb[a]); a++) c.I();
  this.connection && this.connection.I();
  this.K = null;
};
g.Xd = function (a, c, d) {
  if (g.Generator && "undefined" != typeof g.Generator.prototype[c])
    throw Error(
      'Block prototypeName "' +
        c +
        '" conflicts with Blockly.Generator members.'
    );
  this.id = d && !a.td(d) ? d : g.g.Lh();
  a.nu[this.id] = this;
  this.ca = this.X = this.O = null;
  this.S = [];
  this.Rh = void 0;
  this.disabled = !1;
  this.Ef = "";
  this.contextMenu = !0;
  this.Ug = null;
  this.Ch = [];
  this.aB = this.rC = this.Sq = !0;
  this.Zj = this.Na = !1;
  this.Gn = null;
  this.ye = { text: null, Yw: !1, size: new g.g.se(160, 80) };
  this.KD = new g.g.V(0, 0);
  this.u = a;
  this.Lb = a.Xf;
  this.L = a.L;
  this.tm = !1;
  this.Lg = void 0;
  this.pa = null;
  if (c) {
    this.type = c;
    d = g.aa[c];
    if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
    g.g.object.Je(this, d);
  }
  a.xq(this);
  a.ji[this.type] || (a.ji[this.type] = []);
  a.ji[this.type].push(this);
  (a = g.h.oc()) || g.h.ga(!0);
  c = g.h.Za;
  try {
    "function" == typeof this.Y && ((g.h.Za = !1), this.Y(), (g.h.Za = c)),
      g.h.isEnabled() && g.h.Fa(new g.h.Mp(this));
  } finally {
    a || g.h.ga(!1), (g.h.Za = c);
  }
  this.EI = this.Rh;
  if ("function" == typeof this.onchange) {
    if ((a = this.onchange) && "function" != typeof a)
      throw Error("onchange must be a function.");
    this.Mo && Ma(this.u, this.Mo);
    if ((this.onchange = a)) (this.Mo = a.bind(this)), G(this.u, this.Mo);
  }
};
g.Xd.Zm = "_TEMP_COLLAPSED_INPUT";
g.Xd.at = "_TEMP_COLLAPSED_FIELD";
b = g.Xd.prototype;
b.data = null;
b.Sf = !1;
b.fd = "#000000";
b.Uk = null;
b.I = function (a) {
  if (this.u) {
    this.Mo && Ma(this.u, this.Mo);
    A(this, a);
    g.h.isEnabled() && g.h.Fa(new g.h.ZD(this));
    g.h.disable();
    try {
      if (this.u) {
        this.u.ns(this);
        var c = this.u;
        c.ji[this.type].splice(c.ji[this.type].indexOf(this), 1);
        c.ji[this.type].length || delete c.ji[this.type];
        delete this.u.nu[this.id];
        this.u = null;
      }
      g.selected == this && (g.selected = null);
      for (var d = this.Ch.length - 1; 0 <= d; d--) this.Ch[d].I(!1);
      d = 0;
      for (var e; (e = this.S[d]); d++) e.I();
      this.S.length = 0;
      var f = this.Vf(!0);
      d = 0;
      for (var h; (h = f[d]); d++) h.I();
    } finally {
      g.h.enable(), (this.Sf = !0);
    }
  }
};
b.pk = function () {
  for (var a = 0, c; (c = this.S[a]); a++)
    for (var d = 0, e; (e = c.hb[d]); d++) e.pk && e.pk();
};
function A(a, c) {
  if (a.O) {
    var d = null;
    a.O.isConnected() && ((d = a.O.na), a.O.disconnect());
    if (d && c) {
      a: {
        c = null;
        for (var e = 0; e < a.S.length; e++) {
          var f = a.S[e].connection;
          if (f && f.type == g.kb && f.na) {
            if (c) {
              c = null;
              break a;
            }
            c = f;
          }
        }
      }
      c &&
        c.isConnected() &&
        !c.ra().Na &&
        ((c = c.na),
        c.disconnect(),
        v(a.u.Jn, c, d, !1) ? d.connect(c) : c.Tr(d));
    }
  } else
    a.ca &&
      ((d = null),
      a.ca.isConnected() && ((d = a.ca.na), a.ca.disconnect()),
      (e = t(a)),
      c &&
        e &&
        !e.Na &&
        ((c = a.X.na),
        c.disconnect(),
        d && v(a.u.Jn, d, c, !1) && d.connect(c)));
}
b.Vf = function () {
  var a = [];
  this.O && a.push(this.O);
  this.ca && a.push(this.ca);
  this.X && a.push(this.X);
  for (var c = 0, d; (d = this.S[c]); c++) d.connection && a.push(d.connection);
  return a;
};
b.Gr = function () {
  for (var a = this.X; a; ) {
    var c = a.ra();
    if (!c) return a;
    a = c.X;
  }
  return null;
};
b.Ub = function () {};
b.getParent = function () {
  return this.Ug;
};
function za(a, c) {
  for (var d = 0, e; (e = a.S[d]); d++)
    if (e.connection && e.connection.ra() == c) return e;
  return null;
}
function ic(a) {
  do {
    var c = a;
    a = a.getParent();
    if (!a) return null;
  } while (t(a) == c);
  return a;
}
function t(a) {
  return a.X && a.X.ra();
}
b.Qd = function () {
  var a = this;
  do {
    var c = a;
    a = c.Ug;
  } while (a);
  return c;
};
function Aa(a, c) {
  if (!c) return a.Ch;
  c = [];
  for (var d = 0, e; (e = a.S[d]); d++)
    e.connection && (e = e.connection.ra()) && c.push(e);
  (a = t(a)) && c.push(a);
  return c;
}
b.vs = function (a) {
  if (a != this.Ug) {
    if (this.Ug) {
      g.g.Dn(this.Ug.Ch, this);
      if (this.ca && this.ca.isConnected())
        throw Error("Still connected to previous block.");
      if (this.O && this.O.isConnected())
        throw Error("Still connected to parent block.");
      this.Ug = null;
    } else this.u.ns(this);
    (this.Ug = a) ? a.Ch.push(this) : this.u.xq(this);
  }
};
function p(a, c) {
  var d = [a];
  a = Aa(a, c);
  for (var e, f = 0; (e = a[f]); f++) d.push.apply(d, p(e, c));
  return d;
}
b.le = function () {
  return this.Sq && !this.Na && !(this.u && this.u.options.readOnly);
};
b.Fc = function () {
  return this.rC && !this.Na && !(this.u && this.u.options.readOnly);
};
b.us = function (a) {
  this.rC = a;
};
b.yx = function (a) {
  this.Na = a;
};
b.Td = function () {
  return this.tm;
};
b.gD = function (a) {
  this.tm = a;
};
b.Sd = function () {
  return this.aB && !(this.u && this.u.options.readOnly);
};
b.vx = function (a) {
  this.aB = a;
  a = 0;
  for (var c; (c = this.S[a]); a++)
    for (var d = 0, e; (e = c.hb[d]); d++) e.ki();
};
b.Cv = function (a, c) {
  var d = this.Vf(!0);
  a = a.Vf(!0);
  if (d.length != a.length)
    throw Error("Connection lists did not match in length.");
  for (var e = 0; e < a.length; e++) if (a[e] == c) return d[e];
  return null;
};
b.Qb = function (a) {
  this.Ef = a;
};
b.kr = function () {
  return this.fd;
};
b.$f = function (a) {
  this.fd = g.g.ds(a).oo;
};
b.Zb = function (a) {
  this.Uk = a;
};
function z(a, c) {
  for (var d = 0, e; (e = a.S[d]); d++)
    for (var f = 0, h; (h = e.hb[f]); f++) if (h.name == c) return h;
  return null;
}
b.Ph = function () {
  for (var a = [], c = 0, d; (d = this.S[c]); c++)
    for (var e = 0, f; (f = d.hb[e]); e++) f.Vo() && a.push(f.getValue());
  return a;
};
b.Oh = function () {
  for (var a = [], c = 0, d; (d = this.S[c]); c++)
    for (var e = 0, f; (f = d.hb[e]); e++)
      f.Vo() && (f = this.u.Wf(f.getValue())) && a.push(f);
  return a;
};
b.Js = function (a) {
  for (var c = 0, d; (d = this.S[c]); c++)
    for (var e = 0, f; (f = d.hb[e]); e++)
      f.Vo() && a.La() == f.getValue() && cc(f);
};
b.os = function (a, c) {
  for (var d = 0, e; (e = this.S[d]); d++)
    for (var f = 0, h; (h = e.hb[f]); f++)
      h.Vo() && a == h.getValue() && h.setValue(c);
};
function E(a, c) {
  return (a = z(a, c)) ? a.getValue() : null;
}
function jc(a, c, d) {
  a = z(a, d);
  if (!a) throw Error('Field "' + d + '" not found.');
  a.setValue(c);
}
b.Zg = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.ca) {
      if (this.O)
        throw Error(
          "Remove output connection prior to adding previous connection."
        );
      this.ca = this.Do(g.Mf);
    }
    this.ca.Yb(c);
  } else if (this.ca) {
    if (this.ca.isConnected())
      throw Error(
        "Must disconnect previous statement before removing connection."
      );
    this.ca.I();
    this.ca = null;
  }
};
b.Yg = function (a, c) {
  if (a)
    void 0 === c && (c = null),
      this.X || (this.X = this.Do(g.fb)),
      this.X.Yb(c);
  else if (this.X) {
    if (this.X.isConnected())
      throw Error("Must disconnect next statement before removing connection.");
    this.X.I();
    this.X = null;
  }
};
b.zf = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.O) {
      if (this.ca)
        throw Error(
          "Remove previous connection prior to adding output connection."
        );
      this.O = this.Do(g.Lf);
    }
    this.O.Yb(c);
  } else if (this.O) {
    if (this.O.isConnected())
      throw Error("Must disconnect output value before removing connection.");
    this.O.I();
    this.O = null;
  }
};
b.Ne = function (a) {
  this.Rh != a &&
    (g.h.Fa(new g.h.gh(this, "inline", null, this.Rh, a)), (this.Rh = a));
};
function vb(a) {
  if (void 0 != a.Rh) return a.Rh;
  for (var c = 1; c < a.S.length; c++)
    if (a.S[c - 1].type == g.lh && a.S[c].type == g.lh) return !1;
  for (c = 1; c < a.S.length; c++)
    if (a.S[c - 1].type == g.kb && a.S[c].type == g.lh) return !0;
  return !1;
}
b.isEnabled = function () {
  return !this.disabled;
};
b.Wd = function (a) {
  this.isEnabled() != a &&
    (g.h.Fa(new g.h.gh(this, "disabled", null, this.disabled, !a)),
    (this.disabled = !a));
};
function kc(a) {
  for (a = ic(a); a; ) {
    if (a.disabled) return !0;
    a = ic(a);
  }
  return !1;
}
b.isCollapsed = function () {
  return this.Zj;
};
b.uj = function (a) {
  this.Zj != a &&
    (g.h.Fa(new g.h.gh(this, "collapsed", null, this.Zj, a)), (this.Zj = a));
};
b.toString = function (a, c) {
  function d(n) {
    var q = n.Hi;
    !q && n.na && (q = n.na.Hi);
    return !!q && (-1 != q.indexOf("Boolean") || -1 != q.indexOf("Number"));
  }
  function e() {
    k && k.mb() == l.mb() && k.Ea == l.Ea && (k = null);
  }
  var f = [];
  c = c || "?";
  var h = g.F.yi;
  g.F.yi = !0;
  for (var k = g.F.yg(this), l = k; k; ) {
    switch (k.mb()) {
      case g.F.types.Ye:
        var m = k.Ea;
        k.Ng() ? d(m) && f.push("(") : f.push(c);
        break;
      case g.F.types.Ac:
        (m = k.Ea), m.name != g.Xd.at && f.push(m.je());
    }
    m = k;
    k = m.Ng() || m.next();
    if (!k) {
      k = m.Sg();
      for (e(); k && !k.next(); )
        (k = k.Sg()),
          e(),
          k && k.mb() == g.F.types.Ye && d(k.Ea) && f.push(")");
      k && (k = k.next());
    }
  }
  g.F.yi = h;
  c = 2;
  for (h = f.length; c < h; c++)
    "(" == f[c - 2] &&
      ")" == f[c] &&
      ((f[c - 2] = f[c - 1]), f.splice(c - 1, 2), (h -= 2));
  f =
    f
      .join(" ")
      .replace(/(\() | (\))/gim, "$1$2")
      .trim() || "???";
  a && f.length > a && (f = f.substring(0, a - 3) + "...");
  return f;
};
function M(a, c) {
  return a.sg(g.kb, c);
}
function N(a, c) {
  return a.sg(g.lh, c || "");
}
function lc(a, c) {
  var d = c.type ? 'Block "' + c.type + '": ' : "";
  if (c.output && c.previousStatement)
    throw Error(d + "Must not have both an output and a previousStatement.");
  c.style && c.style.Lg && ((a.Lg = c.style.Lg), (c.style = null));
  if (c.style && c.colour)
    throw Error(d + "Must not have both a colour and a style.");
  if (c.style) {
    var e = c.style;
    try {
      a.Zb(e);
    } catch (oa) {
      console.warn(d + "Style does not exist: ", e);
    }
  } else if ("colour" in c)
    if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
    else {
      e = c.colour;
      try {
        a.$f(e);
      } catch (oa) {
        console.warn(d + "Illegal colour value: ", e);
      }
    }
  for (e = 0; void 0 !== c["message" + e]; ) {
    for (
      var f = a,
        h = c["args" + e] || [],
        k = c["lastDummyAlign" + e],
        l = d,
        m = g.g.SK(c["message" + e]),
        n = [],
        q = 0,
        r = [],
        w = 0;
      w < m.length;
      w++
    ) {
      var F = m[w];
      if ("number" == typeof F) {
        if (0 >= F || F > h.length)
          throw Error(
            'Block "' + f.type + '": Message index %' + F + " out of range."
          );
        if (n[F])
          throw Error(
            'Block "' + f.type + '": Message index %' + F + " duplicated."
          );
        n[F] = !0;
        q++;
        r.push(h[F - 1]);
      } else (F = F.trim()) && r.push(F);
    }
    if (q != h.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          h.length +
          " arg(s)."
      );
    r.length &&
      ("string" == typeof r[r.length - 1] ||
        g.g.pb.startsWith(r[r.length - 1].type, "field_")) &&
      ((w = { type: "input_dummy" }), k && (w.align = k), r.push(w));
    k = { LEFT: g.Ps, RIGHT: g.Um, CENTRE: g.Os, CENTER: g.Os };
    h = [];
    for (w = 0; w < r.length; w++)
      if (((n = r[w]), "string" == typeof n)) h.push([n, void 0]);
      else {
        m = q = null;
        do
          if (((F = !1), "string" == typeof n)) q = new g.Ad(n);
          else
            switch (n.type) {
              case "input_value":
                m = M(f, n.name);
                break;
              case "input_statement":
                m = f.sg(g.fb, n.name);
                break;
              case "input_dummy":
                m = N(f, n.name);
                break;
              default:
                (q = g.lf.ea(n)), !q && n.alt && ((n = n.alt), (F = !0));
            }
        while (F);
        if (q) h.push([q, n.name]);
        else if (m) {
          n.check && m.Yb(n.check);
          n.align &&
            ((q = k[n.align.toUpperCase()]),
            void 0 === q
              ? console.warn(l + "Illegal align value: ", n.align)
              : hc(m, q));
          for (n = 0; n < h.length; n++) L(m, h[n][0], h[n][1]);
          h.length = 0;
        }
      }
    e++;
  }
  void 0 !== c.inputsInline && a.Ne(c.inputsInline);
  void 0 !== c.output && a.zf(!0, c.output);
  void 0 !== c.previousStatement && a.Zg(!0, c.previousStatement);
  void 0 !== c.nextStatement && a.Yg(!0, c.nextStatement);
  void 0 !== c.tooltip && ((e = c.tooltip), (e = g.g.Nc(e)), a.Qb(e));
  void 0 !== c.enableContextMenu &&
    ((e = c.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== c.helpUrl && ((e = c.helpUrl), (e = g.g.Nc(e)), (a.Wc = e));
  "string" == typeof c.extensions &&
    (console.warn(
      d +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        c.type +
        "' block."
    ),
    (c.extensions = [c.extensions]));
  void 0 !== c.mutator && g.ka.apply(c.mutator, a, !0);
  if (Array.isArray(c.extensions))
    for (c = c.extensions, d = 0; d < c.length; ++d) g.ka.apply(c[d], a, !1);
}
b.Je = function (a, c) {
  if (void 0 !== c && "boolean" != typeof c)
    throw Error("opt_disableCheck must be a boolean if provided");
  if (!c) {
    c = [];
    for (var d in a) void 0 !== this[d] && c.push(d);
    if (c.length)
      throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  }
  g.g.object.Je(this, a);
};
b.sg = function (a, c) {
  var d = null;
  if (a == g.kb || a == g.fb) d = this.Do(a);
  a = new g.Xy(a, c, this, d);
  this.S.push(a);
  return a;
};
function mc(a, c, d) {
  if (c != d) {
    for (var e = -1, f = d ? -1 : a.S.length, h = 0, k; (k = a.S[h]); h++)
      if (k.name == c) {
        if (((e = h), -1 != f)) break;
      } else if (d && k.name == d && ((f = h), -1 != e)) break;
    if (-1 == e) throw Error('Named input "' + c + '" not found.');
    if (-1 == f) throw Error('Reference input "' + d + '" not found.');
    a.Aw(e, f);
  }
}
b.Aw = function (a, c) {
  if (a == c) throw Error("Can't move input to itself.");
  if (a >= this.S.length)
    throw RangeError("Input index " + a + " out of bounds.");
  if (c > this.S.length)
    throw RangeError("Reference input " + c + " out of bounds.");
  var d = this.S[a];
  this.S.splice(a, 1);
  a < c && c--;
  this.S.splice(c, 0, d);
};
b.xc = function (a, c) {
  for (var d = 0, e; (e = this.S[d]); d++)
    if (e.name == a) return e.I(), this.S.splice(d, 1), !0;
  if (c) return !1;
  throw Error("Input not found: " + a);
};
function B(a, c) {
  for (var d = 0, e; (e = a.S[d]); d++) if (e.name == c) return e;
  return null;
}
function O(a, c) {
  return (a = B(a, c)) && a.connection && a.connection.ra();
}
b.vj = function (a) {
  this.ye.text != a &&
    (g.h.Fa(new g.h.gh(this, "comment", null, this.ye.text, a)),
    (this.Gn = this.ye.text = a));
};
b.Im = function () {};
b.gp = function () {};
b.Xa = function () {
  return this.KD;
};
b.moveBy = function (a, c) {
  if (this.Ug) throw Error("Block has parent.");
  var d = new g.h.Xm(this);
  this.KD.translate(a, c);
  d.Qk();
  g.h.Fa(d);
};
b.Do = function (a) {
  return new g.Aa(this, a);
};
g.j = {};
g.j.Bp = !1;
g.j.register = function (a, c) {
  g.C.register(g.C.Z.RENDERER, a, c);
};
g.j.unregister = function (a) {
  g.C.unregister(g.C.Z.RENDERER, a);
};
g.j.sO = function () {
  g.j.Bp = !0;
};
g.j.tO = function () {
  g.j.Bp = !1;
};
g.j.Y = function (a, c, d) {
  a = new (g.C.co(g.C.Z.RENDERER, a))(a);
  a.Y(c, d);
  return a;
};
g.mn = function () {
  this.ge = this.jb = this.Ab = null;
  this.type = "marker";
};
function H(a, c) {
  var d = a.jb;
  a.jb = c;
  a.ge && a.ge.draw(d, a.jb);
}
g.mn.prototype.draw = function () {
  this.ge && this.ge.draw(this.jb, this.jb);
};
g.mn.prototype.Ia = function () {
  this.ge && this.ge.Ia();
};
g.mn.prototype.I = function () {
  this.ge && this.ge.I();
};
g.jl = function () {
  g.jl.v.constructor.call(this);
  this.type = "cursor";
};
g.g.object.U(g.jl, g.mn);
b = g.jl.prototype;
b.next = function () {
  var a = this.jb;
  if (!a) return null;
  for (
    a = a.next();
    a && a.next() && (a.mb() == g.F.types.Dd || a.mb() == g.F.types.hc);

  )
    a = a.next();
  a && H(this, a);
  return a;
};
b.Ng = function () {
  var a = this.jb;
  if (!a) return null;
  if (a.mb() == g.F.types.Gd || a.mb() == g.F.types.Pj) a = a.next();
  (a = a.Ng()) && H(this, a);
  return a;
};
b.xf = function () {
  var a = this.jb;
  if (!a) return null;
  for (
    a = a.xf();
    a && a.xf() && (a.mb() == g.F.types.Dd || a.mb() == g.F.types.hc);

  )
    a = a.xf();
  a && H(this, a);
  return a;
};
b.Sg = function () {
  var a = this.jb;
  if (!a) return null;
  (a = a.Sg()) && a.mb() == g.F.types.hc && (a = a.xf() || a);
  a && H(this, a);
  return a;
};
b.fc = function (a) {
  if (this.jb && this.jb.mb() === g.F.types.Ac && this.jb.Ea.fc(a)) return !0;
  switch (a.name) {
    case g.navigation.yb.Gd:
      return this.xf(), !0;
    case g.navigation.yb.Gt:
      return this.Sg(), !0;
    case g.navigation.yb.Dd:
      return this.next(), !0;
    case g.navigation.yb.ot:
      return this.Ng(), !0;
    default:
      return !1;
  }
};
g.aq = function () {
  g.aq.v.constructor.call(this);
};
g.g.object.U(g.aq, g.jl);
b = g.aq.prototype;
b.fc = function (a) {
  switch (a.name) {
    case g.navigation.yb.Gd:
      return this.xf(), !0;
    case g.navigation.yb.Dd:
      return this.next(), !0;
    default:
      return !1;
  }
};
b.next = function () {
  var a = this.jb;
  if (!a) return null;
  (a = a.next()) && H(this, a);
  return a;
};
b.Ng = function () {
  return null;
};
b.xf = function () {
  var a = this.jb;
  if (!a) return null;
  (a = a.xf()) && H(this, a);
  return a;
};
b.Sg = function () {
  return null;
};
g.j.fM = function () {};
g.g.R = {
  HN: 0,
  lM: 3,
  RD: 8,
  sG: 9,
  wM: 12,
  Xp: 13,
  rh: 16,
  li: 17,
  fl: 18,
  hN: 19,
  rL: 20,
  gt: 27,
  Az: 32,
  cG: 33,
  bG: 34,
  CE: 35,
  dF: 36,
  wl: 37,
  Nz: 38,
  Dl: 39,
  yy: 40,
  kN: 43,
  mN: 44,
  Sy: 45,
  Ij: 46,
  ZERO: 48,
  ONE: 49,
  CN: 50,
  AN: 51,
  $L: 52,
  ZL: 53,
  xN: 54,
  vN: 55,
  FL: 56,
  uM: 57,
  XL: 59,
  VL: 61,
  UL: 173,
  WL: 163,
  nN: 63,
  mL: 64,
  Yx: 65,
  oL: 66,
  Xs: 67,
  sy: 68,
  E: 69,
  HL: 70,
  rc: 71,
  cM: 72,
  hF: 73,
  gM: 74,
  rF: 75,
  hM: 76,
  kM: 77,
  tM: 78,
  MM: 79,
  gN: 80,
  Q: 81,
  oN: 82,
  xz: 83,
  rG: 84,
  DN: 85,
  $t: 86,
  Uz: 87,
  uq: 88,
  GG: 89,
  Pl: 90,
  yl: 91,
  IN: 92,
  xL: 93,
  LM: 96,
  EM: 97,
  KM: 98,
  JM: 99,
  AM: 100,
  zM: 101,
  IM: 102,
  HM: 103,
  yM: 104,
  DM: 105,
  CM: 106,
  GM: 107,
  BM: 109,
  FM: 110,
  xM: 111,
  IL: 112,
  ML: 113,
  NL: 114,
  OL: 115,
  PL: 116,
  QL: 117,
  RL: 118,
  SL: 119,
  TL: 120,
  JL: 121,
  KL: 122,
  LL: 123,
  vM: 144,
  sN: 145,
  YL: 166,
  iM: 183,
  tN: 186,
  zL: 189,
  GL: 187,
  wL: 188,
  iN: 190,
  yN: 191,
  lL: 192,
  BN: 192,
  wN: 222,
  NM: 219,
  pL: 220,
  uL: 221,
  GN: 224,
  mM: 224,
  nM: 91,
  oM: 93,
  FN: 229,
  EN: 252,
  jN: 255,
};
g.yt = function () {
  this.sf = [];
  this.Rk = this.Cb = this.Vr = this.Or = this.Nr = this.Dh = this.Pr = this.Vi = this.Ow = null;
};
b = g.yt.prototype;
b.Ga = function (a) {
  var c = document.createElement("div");
  c.className = "blocklyMenu goog-menu blocklyNonSelectable";
  c.tabIndex = 0;
  this.Rk && g.g.ta.Af(c, this.Rk);
  this.Cb = c;
  for (var d = 0, e; (e = this.sf[d]); d++) c.appendChild(e.Wa());
  this.Pr = g.ya(c, "mouseover", this, this.sI, !0);
  this.Dh = g.ya(c, "click", this, this.mI, !0);
  this.Nr = g.ya(c, "mouseenter", this, this.qI, !0);
  this.Or = g.ya(c, "mouseleave", this, this.rI, !0);
  this.Vr = g.ya(c, "keydown", this, this.oI);
  a.appendChild(c);
};
b.focus = function () {
  var a = this.Cb;
  a && (a.focus({ preventScroll: !0 }), g.g.o.Ha(a, "blocklyFocused"));
};
b.Af = function (a) {
  this.Rk = a;
};
b.I = function () {
  this.Pr && (g.Oa(this.Pr), (this.Pr = null));
  this.Dh && (g.Oa(this.Dh), (this.Dh = null));
  this.Nr && (g.Oa(this.Nr), (this.Nr = null));
  this.Or && (g.Oa(this.Or), (this.Or = null));
  this.Vr && (g.Oa(this.Vr), (this.Vr = null));
  for (var a = 0, c; (c = this.sf[a]); a++) c.I();
  this.Cb = null;
};
function nc(a, c) {
  for (var d = a.Cb; c && c != d; ) {
    if (g.g.o.Mv(c, "blocklyMenuItem"))
      for (var e = 0, f; (f = a.sf[e]); e++) if (f.Cb == c) return f;
    c = c.parentElement;
  }
  return null;
}
b.ag = function (a) {
  var c = this.Vi;
  c && (c.ag(!1), (this.Vi = null));
  a &&
    (a.ag(!0),
    (this.Vi = a),
    (c = this.Cb),
    g.g.style.AK(a.Cb, c),
    g.g.ta.md(c, g.g.ta.State.Ns, a.La()));
};
function oc(a) {
  var c = a.sf.indexOf(a.Vi);
  pc(a, 0 > c ? a.sf.length : c, -1);
}
function pc(a, c, d) {
  c += d;
  for (var e; (e = a.sf[c]); ) {
    if (e.isEnabled()) {
      a.ag(e);
      break;
    }
    c += d;
  }
}
b.sI = function (a) {
  (a = nc(this, a.target)) &&
    (a.isEnabled() ? this.Vi != a && this.ag(a) : this.ag(null));
};
b.mI = function (a) {
  var c = this.Ow;
  this.Ow = null;
  (c &&
    "number" == typeof a.clientX &&
    1 > g.g.V.Zu(c, new g.g.V(a.clientX, a.clientY))) ||
    ((a = nc(this, a.target)) && a.isEnabled() && a.Cn && a.Cn(a));
};
b.qI = function () {
  this.focus();
};
b.rI = function () {
  if (this.Cb) {
    var a = this.Cb;
    a && (a.blur(), g.g.o.wc(a, "blocklyFocused"));
    this.ag(null);
  }
};
b.oI = function (a) {
  if (this.sf.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
    var c = this.Vi;
    switch (a.keyCode) {
      case g.g.R.Xp:
      case g.g.R.Az:
        c && c.isEnabled() && c.Cn && c.Cn(c);
        break;
      case g.g.R.Nz:
        oc(this);
        break;
      case g.g.R.yy:
        pc(this, this.sf.indexOf(this.Vi), 1);
        break;
      case g.g.R.cG:
      case g.g.R.dF:
        pc(this, -1, 1);
        break;
      case g.g.R.bG:
      case g.g.R.CE:
        pc(this, this.sf.length, -1);
        break;
      default:
        return;
    }
    a.preventDefault();
    a.stopPropagation();
  }
};
b.Nh = function () {
  var a = this.Cb,
    c = g.g.style.Nh(a);
  c.height = a.scrollHeight;
  return c;
};
g.zt = function (a, c) {
  this.Fh = a;
  this.Fb = c;
  this.cr = !0;
  this.Cb = null;
  this.tx = !1;
  this.Rk = null;
  this.OB = this.zu = this.yu = !1;
  this.Cn = null;
};
b = g.zt.prototype;
b.Wa = function () {
  var a = document.createElement("div");
  a.id = g.g.rl.Ev();
  this.Cb = a;
  a.className =
    "blocklyMenuItem goog-menuitem " +
    (this.cr ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") +
    (this.zu ? "blocklyMenuItemSelected goog-option-selected " : "") +
    (this.OB ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") +
    (this.tx ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
  var c = document.createElement("div");
  c.className = "blocklyMenuItemContent goog-menuitem-content";
  if (this.yu) {
    var d = document.createElement("div");
    d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
    c.appendChild(d);
  }
  d = this.Fh;
  "string" == typeof this.Fh && (d = document.createTextNode(this.Fh));
  c.appendChild(d);
  a.appendChild(c);
  this.Rk && g.g.ta.Af(a, this.Rk);
  g.g.ta.md(a, g.g.ta.State.El, (this.yu && this.zu) || !1);
  g.g.ta.md(a, g.g.ta.State.tE, !this.cr);
  return a;
};
b.I = function () {
  this.Cb = null;
};
b.La = function () {
  return this.Cb.id;
};
b.getValue = function () {
  return this.Fb;
};
b.Af = function (a) {
  this.Rk = a;
};
b.ag = function (a) {
  this.OB = a;
  var c = this.Cb;
  c &&
    this.isEnabled() &&
    (a
      ? (g.g.o.Ha(c, "blocklyMenuItemHighlight"),
        g.g.o.Ha(c, "goog-menuitem-highlight"))
      : (g.g.o.wc(c, "blocklyMenuItemHighlight"),
        g.g.o.wc(c, "goog-menuitem-highlight")));
};
b.isEnabled = function () {
  return this.cr;
};
b.Wd = function (a) {
  this.cr = a;
};
function qc(a, c, d) {
  a.Cn = c.bind(d);
}
g.Va = {};
g.Va.Rq = null;
g.Va.Xc = null;
g.Va.show = function (a, c, d) {
  g.ba.show(g.Va, d, g.Va.I);
  if (c.length) {
    var e = g.Va.IJ(c, d);
    g.Va.Xc = e;
    g.Va.Ok(e, a, d);
    setTimeout(function () {
      e.focus();
    }, 1);
    g.Va.Rq = null;
  } else g.Va.Ia();
};
g.Va.IJ = function (a, c) {
  var d = new g.yt();
  d.Af(g.g.ta.Bi.MF);
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new g.zt(f.text);
    h.tx = c;
    h.Af(g.g.ta.Bi.NF);
    d.sf.push(h);
    h.Wd(f.enabled);
    f.enabled &&
      qc(
        h,
        function () {
          g.Va.Ia();
          this.za(this.scope);
        },
        f
      );
  }
  return d;
};
g.Va.Ok = function (a, c, d) {
  var e = g.g.kI();
  c = new g.g.Rect(
    c.clientY + e.top,
    c.clientY + e.top,
    c.clientX + e.left,
    c.clientX + e.left
  );
  g.Va.pH(a);
  var f = a.Nh();
  d &&
    ((c.left += f.width),
    (c.right += f.width),
    (e.left += f.width),
    (e.right += f.width));
  g.ba.JJ(e, c, f, d);
  a.focus();
};
g.Va.pH = function (a) {
  a.Ga(g.ba.ib);
  var c = a.Cb;
  g.g.o.Ha(c, "blocklyContextMenu");
  g.ya(c, "contextmenu", null, g.g.lJ);
  a.focus();
};
g.Va.Ia = function () {
  g.ba.po(g.Va);
  g.Va.Rq = null;
};
g.Va.I = function () {
  g.Va.Xc && (g.Va.Xc.I(), (g.Va.Xc = null));
};
g.Va.Dq = function (a, c) {
  return function () {
    g.h.disable();
    try {
      var d = g.T.ck(c, a.u),
        e = a.Xa();
      e.x = a.L ? e.x - g.Id : e.x + g.Id;
      e.y += 2 * g.Id;
      d.moveBy(e.x, e.y);
    } finally {
      g.h.enable();
    }
    g.h.isEnabled() && !d.Na && g.h.Fa(new g.h.Mp(d));
    d.select();
  };
};
g.Va.ON = function (a) {
  return {
    text: g.i.REMOVE_COMMENT,
    enabled: !0,
    za: function () {
      g.h.ga(!0);
      a.I(!0, !0);
      g.h.ga(!1);
    },
  };
};
g.Va.PN = function (a) {
  return {
    text: g.i.DUPLICATE_COMMENT,
    enabled: !0,
    za: function () {
      g.duplicate(a);
    },
  };
};
g.Va.wO = function (a, c) {
  if (!g.Ol) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
  var d = { enabled: !g.g.userAgent.Xe };
  d.text = g.i.ADD_COMMENT;
  d.za = function () {
    var e = new g.Ol(a, g.i.WORKSPACE_COMMENT_DEFAULT_TEXT, g.Ol.rE, g.Ol.rE),
      f = aa(a).getBoundingClientRect();
    f = new g.g.V(c.clientX - f.left, c.clientY - f.top);
    var h = g.g.jo(a.wb);
    f = g.g.V.Sn(f, h);
    f.scale(1 / a.scale);
    e.moveBy(f.x, f.y);
    a.pa && (e.qf(), e.Ga(), e.select());
  };
  return d;
};
g.Ba = {};
g.Ba.kx = function () {
  g.Ra.C.register({
    Od: function () {
      return g.i.UNDO;
    },
    Ya: function (a) {
      return 0 < a.u.Yk.length ? "enabled" : "disabled";
    },
    za: function (a) {
      La(a.u, !1);
    },
    Me: g.Ra.Kd.Sc,
    id: "undoWorkspace",
    weight: 1,
  });
};
g.Ba.jx = function () {
  g.Ra.C.register({
    Od: function () {
      return g.i.REDO;
    },
    Ya: function (a) {
      return 0 < a.u.Uo.length ? "enabled" : "disabled";
    },
    za: function (a) {
      La(a.u, !0);
    },
    Me: g.Ra.Kd.Sc,
    id: "redoWorkspace",
    weight: 2,
  });
};
g.Ba.OJ = function () {
  g.Ra.C.register({
    Od: function () {
      return g.i.CLEAN_UP;
    },
    Ya: function (a) {
      return a.u.Fc()
        ? 1 < a.u.Ib(!1).length
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    za: function (a) {
      a = a.u;
      a.Zc(!1);
      g.h.ga(!0);
      for (var c = a.Ib(!0), d = 0, e = 0, f; (f = c[e]); e++)
        if (f.Fc()) {
          var h = f.Xa();
          f.moveBy(-h.x, d - h.y);
          rc(f);
          d = f.Xa().y + K(f).height + a.Jb.la().kn;
        }
      g.h.ga(!1);
      a.Zc(!0);
    },
    Me: g.Ra.Kd.Sc,
    id: "cleanWorkspace",
    weight: 3,
  });
};
g.Ba.vD = function (a, c) {
  for (var d = 0, e = 0; e < c.length; e++)
    for (var f = c[e]; f; )
      setTimeout(f.uj.bind(f, a), d), (f = t(f)), (d += 10);
};
g.Ba.PJ = function () {
  g.Ra.C.register({
    Od: function () {
      return g.i.COLLAPSE_ALL;
    },
    Ya: function (a) {
      if (a.u.options.collapse) {
        a = a.u.Ib(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (!d.isCollapsed()) return "enabled";
            d = t(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    za: function (a) {
      g.Ba.vD(!0, a.u.Ib(!0));
    },
    Me: g.Ra.Kd.Sc,
    id: "collapseWorkspace",
    weight: 4,
  });
};
g.Ba.bK = function () {
  g.Ra.C.register({
    Od: function () {
      return g.i.EXPAND_ALL;
    },
    Ya: function (a) {
      if (a.u.options.collapse) {
        a = a.u.Ib(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (d.isCollapsed()) return "enabled";
            d = t(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    za: function (a) {
      g.Ba.vD(!1, a.u.Ib(!0));
    },
    Me: g.Ra.Kd.Sc,
    id: "expandWorkspace",
    weight: 5,
  });
};
g.Ba.dA = function (a, c) {
  if (a.le()) Array.prototype.push.apply(c, p(a, !1));
  else {
    a = Aa(a, !1);
    for (var d = 0; d < a.length; d++) g.Ba.dA(a[d], c);
  }
};
g.Ba.zv = function (a) {
  var c = [];
  a = a.Ib(!0);
  for (var d = 0; d < a.length; d++) g.Ba.dA(a[d], c);
  return c;
};
g.Ba.Tq = function (a, c) {
  g.h.ga(c);
  var d = a.shift();
  d && (d.u ? (d.I(!1, !0), setTimeout(g.Ba.Tq, 10, a, c)) : g.Ba.Tq(a, c));
  g.h.ga(!1);
};
g.Ba.WJ = function () {
  g.Ra.C.register({
    Od: function (a) {
      if (a.u)
        return (
          (a = g.Ba.zv(a.u).length),
          1 == a
            ? g.i.DELETE_BLOCK
            : g.i.DELETE_X_BLOCKS.replace("%1", String(a))
        );
    },
    Ya: function (a) {
      if (a.u) return 0 < g.Ba.zv(a.u).length ? "enabled" : "disabled";
    },
    za: function (a) {
      if (a.u) {
        sc(a.u);
        var c = g.Ba.zv(a.u),
          d = g.g.Lh();
        2 > c.length
          ? g.Ba.Tq(c, d)
          : g.confirm(
              g.i.DELETE_ALL_BLOCKS.replace("%1", c.length),
              function (e) {
                e && g.Ba.Tq(c, d);
              }
            );
      }
    },
    Me: g.Ra.Kd.Sc,
    id: "workspaceDelete",
    weight: 6,
  });
};
g.Ba.sK = function () {
  g.Ba.kx();
  g.Ba.jx();
  g.Ba.OJ();
  g.Ba.PJ();
  g.Ba.bK();
  g.Ba.WJ();
};
g.Ba.ZJ = function () {
  g.Ra.C.register({
    Od: function () {
      return g.i.DUPLICATE_BLOCK;
    },
    Ya: function (a) {
      a = a.block;
      return !a.Lb && a.le() && a.Fc()
        ? (Ka(a.u) ? Ja(a.u, g.g.wv(a, !0)) : 1)
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    za: function (a) {
      a.block && g.duplicate(a.block);
    },
    Me: g.Ra.Kd.hc,
    id: "blockDuplicate",
    weight: 1,
  });
};
g.Ba.RJ = function () {
  g.Ra.C.register({
    Od: function (a) {
      return a.block.ff ? g.i.REMOVE_COMMENT : g.i.ADD_COMMENT;
    },
    Ya: function (a) {
      a = a.block;
      return g.g.userAgent.Xe ||
        a.Lb ||
        !a.u.options.Hn ||
        a.isCollapsed() ||
        !a.Sd()
        ? "hidden"
        : "enabled";
    },
    za: function (a) {
      a = a.block;
      a.ff ? a.vj(null) : a.vj("");
    },
    Me: g.Ra.Kd.hc,
    id: "blockComment",
    weight: 2,
  });
};
g.Ba.eK = function () {
  g.Ra.C.register({
    Od: function (a) {
      return vb(a.block) ? g.i.EXTERNAL_INPUTS : g.i.INLINE_INPUTS;
    },
    Ya: function (a) {
      a = a.block;
      if (!a.Lb && a.Fc() && !a.isCollapsed())
        for (var c = 1; c < a.S.length; c++)
          if (a.S[c - 1].type != g.fb && a.S[c].type != g.fb) return "enabled";
      return "hidden";
    },
    za: function (a) {
      a.block.Ne(!vb(a.block));
    },
    Me: g.Ra.Kd.hc,
    id: "blockInline",
    weight: 3,
  });
};
g.Ba.QJ = function () {
  g.Ra.C.register({
    Od: function (a) {
      return a.block.isCollapsed() ? g.i.EXPAND_BLOCK : g.i.COLLAPSE_BLOCK;
    },
    Ya: function (a) {
      a = a.block;
      return !a.Lb && a.Fc() ? "enabled" : "hidden";
    },
    za: function (a) {
      a.block.uj(!a.block.isCollapsed());
    },
    Me: g.Ra.Kd.hc,
    id: "blockCollapseExpand",
    weight: 4,
  });
};
g.Ba.XJ = function () {
  g.Ra.C.register({
    Od: function (a) {
      return a.block.isEnabled() ? g.i.DISABLE_BLOCK : g.i.ENABLE_BLOCK;
    },
    Ya: function (a) {
      a = a.block;
      return !a.Lb && a.u.options.disable && a.Sd()
        ? kc(a)
          ? "disabled"
          : "enabled"
        : "hidden";
    },
    za: function (a) {
      a = a.block;
      var c = g.h.oc();
      c || g.h.ga(!0);
      a.Wd(!a.isEnabled());
      c || g.h.ga(!1);
    },
    Me: g.Ra.Kd.hc,
    id: "blockDisable",
    weight: 5,
  });
};
g.Ba.hx = function () {
  g.Ra.C.register({
    Od: function (a) {
      var c = a.block;
      a = p(c, !1).length;
      (c = t(c)) && (a -= p(c, !1).length);
      return 1 == a
        ? g.i.DELETE_BLOCK
        : g.i.DELETE_X_BLOCKS.replace("%1", String(a));
    },
    Ya: function (a) {
      return !a.block.Lb && a.block.le() ? "enabled" : "hidden";
    },
    za: function (a) {
      g.h.ga(!0);
      a.block.I(!0, !0);
      g.h.ga(!1);
    },
    Me: g.Ra.Kd.hc,
    id: "blockDelete",
    weight: 6,
  });
};
g.Ba.cK = function () {
  g.Ra.C.register({
    Od: function () {
      return g.i.HELP;
    },
    Ya: function (a) {
      a = a.block;
      return ("function" == typeof a.Wc ? a.Wc() : a.Wc) ? "enabled" : "hidden";
    },
    za: function (a) {
      a.block.showHelp();
    },
    Me: g.Ra.Kd.hc,
    id: "blockHelp",
    weight: 7,
  });
};
g.Ba.NJ = function () {
  g.Ba.ZJ();
  g.Ba.RJ();
  g.Ba.eK();
  g.Ba.QJ();
  g.Ba.XJ();
  g.Ba.hx();
  g.Ba.cK();
};
g.Ba.UJ = function () {
  g.Ba.sK();
  g.Ba.NJ();
};
g.Ra = function () {
  g.Ra.C = this;
  this.Ke = {};
  g.Ba.UJ();
};
g.Ra.Kd = { hc: "block", Sc: "workspace" };
g.Ra.C = null;
g.Ra.prototype.register = function (a) {
  if (this.Ke[a.id])
    throw Error('Menu item with id "' + a.id + '" is already registered.');
  this.Ke[a.id] = a;
};
g.Ra.prototype.unregister = function (a) {
  if (this.Ke[a]) delete this.Ke[a];
  else throw Error('Menu item with id "' + a + '" not found.');
};
g.Ra.prototype.getItem = function (a) {
  return this.Ke[a] ? this.Ke[a] : null;
};
function tc(a, c) {
  var d = [],
    e = g.Ra.C.Ke;
  Object.keys(e).forEach(function (f) {
    f = e[f];
    if (a == f.Me) {
      var h = f.Ya(c);
      "hidden" != h &&
        ((f = {
          text: "function" == typeof f.Od ? f.Od(c) : f.Od,
          enabled: "enabled" == h,
          za: f.za,
          scope: c,
          weight: f.weight,
        }),
        d.push(f));
    }
  });
  d.sort(function (f, h) {
    return f.weight - h.weight;
  });
  return d;
}
new g.Ra();
g.h.ng = function (a, c, d) {
  g.h.ng.v.constructor.call(this, d);
  this.xC = a;
  this.tC = c;
};
g.g.object.U(g.h.ng, g.h.ve);
g.h.ng.prototype.type = g.h.El;
g.h.ng.prototype.va = function () {
  var a = g.h.ng.v.va.call(this);
  a.oldElementId = this.xC;
  a.newElementId = this.tC;
  return a;
};
g.h.ng.prototype.ea = function (a) {
  g.h.ng.v.ea.call(this, a);
  this.xC = a.oldElementId;
  this.tC = a.newElementId;
};
g.C.register(g.C.Z.cc, g.h.El, g.h.ng);
g.tc = function (a, c) {
  g.tc.v.constructor.call(this, a, c);
  this.Ag = a.u.Pq[c];
  this.LA = a.u.Pq[g.Al[c]];
  this.Lk = new g.g.V(0, 0);
  this.ii = g.tc.qg.Wz;
  this.na = null;
};
g.g.object.U(g.tc, g.Aa);
g.tc.qg = { Wz: -1, Mz: 0, Nl: 1 };
b = g.tc.prototype;
b.I = function () {
  g.tc.v.I.call(this);
  this.ii == g.tc.qg.Nl && uc(this.Ag, this, this.y);
};
b.W = function () {
  return g.tc.v.W.call(this);
};
b.ra = function () {
  return g.tc.v.ra.call(this);
};
function va(a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
}
function lb(a, c) {
  if (!a.K.u.Ec()) {
    var d = a.K.Qd();
    if (!d.Lb) {
      var e = !1;
      if (!d.Fc()) {
        d = c.W().Qd();
        if (!d.Fc()) return;
        c = a;
        e = !0;
      }
      var f = g.selected == d;
      f || d.vq();
      var h = c.x + g.Id + Math.floor(Math.random() * g.Ws) - a.x,
        k = c.y + g.Id + Math.floor(Math.random() * g.Ws) - a.y;
      e && (k = -k);
      d.L && (h = c.x - g.Id - Math.floor(Math.random() * g.Ws) - a.x);
      d.moveBy(h, k);
      f || d.Wo();
    }
  }
}
b.moveTo = function (a, c) {
  if (this.ii == g.tc.qg.Wz) {
    var d = this.Ag;
    d.nc.splice(vc(d, c), 0, this);
    this.ii = g.tc.qg.Nl;
  } else
    this.ii == g.tc.qg.Nl &&
      (uc(this.Ag, this, this.y),
      (d = this.Ag),
      d.nc.splice(vc(d, c), 0, this));
  this.x = a;
  this.y = c;
};
b.moveBy = function (a, c) {
  this.moveTo(this.x + a, this.y + c);
};
function wc(a, c) {
  a.moveTo(c.x + a.Lk.x, c.y + a.Lk.y);
}
function xc(a, c, d) {
  a.Lk.x = c;
  a.Lk.y = d;
}
function yc(a) {
  var c = a.na.x - a.x,
    d = a.na.y - a.y;
  if (0 != c || 0 != d) {
    a = a.ra();
    var e = a.Ma();
    if (!e) throw Error("block is not rendered.");
    e = g.g.mf(e);
    a.Ma().setAttribute(
      "transform",
      "translate(" + (e.x - c) + "," + (e.y - d) + ")"
    );
    Hb(a, -c, -d);
  }
}
b.closest = function (a, c) {
  var d = this.LA;
  if (d.nc.length) {
    var e = this.y,
      f = this.x;
    this.x = f + c.x;
    this.y = e + c.y;
    var h = vc(d, this.y);
    c = null;
    for (var k = a, l, m = h - 1; 0 <= m && Math.abs(d.nc[m].y - this.y) <= a; )
      (l = d.nc[m]),
        v(d.zA, this, l, !0, k) && ((c = l), (k = va(l, this))),
        m--;
    for (; h < d.nc.length && Math.abs(d.nc[h].y - this.y) <= a; )
      (l = d.nc[h]),
        v(d.zA, this, l, !0, k) && ((c = l), (k = va(l, this))),
        h++;
    this.x = f;
    this.y = e;
    a = { connection: c, js: k };
  } else a = { connection: null, js: a };
  return a;
};
function gc(a, c) {
  (c && a.ii == g.tc.qg.Nl) ||
    (!c && a.ii == g.tc.qg.Mz) ||
    a.K.Lb ||
    (c
      ? ((c = a.Ag), c.nc.splice(vc(c, a.y), 0, a), (a.ii = g.tc.qg.Nl))
      : (a.ii == g.tc.qg.Nl && uc(a.Ag, a, a.y), (a.ii = g.tc.qg.Mz)));
}
function fc(a) {
  gc(a, !0);
  var c = [];
  if (a.type != g.kb && a.type != g.fb) return c;
  if ((a = a.ra())) {
    if (a.isCollapsed()) {
      var d = [];
      a.O && d.push(a.O);
      a.X && d.push(a.X);
      a.ca && d.push(a.ca);
    } else d = a.Vf(!0);
    for (var e = 0; e < d.length; e++) c.push.apply(c, fc(d[e]));
    c.length || (c[0] = a);
  }
  return c;
}
b.Tr = function (a) {
  lb(this, a);
};
b.Wu = function (a, c) {
  g.tc.v.Wu.call(this, a, c);
  a.pa && a.Ga();
  c.pa && (Da(c), c.Ga(), (c.Ma().style.display = "block"));
};
b.Zo = function () {
  g.tc.v.Zo.call(this);
  var a = this.ra();
  a && (a.qf(), a.Ga(!1), (a = this.W()), a.pa && a.Ga());
};
b.sC = function (a) {
  return zc(this.LA, this, a);
};
b.Rf = function (a) {
  g.tc.v.Rf.call(this, a);
  var c = this.W();
  a = a.W();
  var d = c.pa,
    e = a.pa;
  d && Da(c);
  e && Da(a);
  d && e && (this.type == g.fb || this.type == g.Mf ? a.Ga() : c.Ga());
  if ((c = za(c, a)))
    (c = c.isVisible()), (a.Ma().style.display = c ? "block" : "none");
};
b.GC = function () {
  !this.isConnected() ||
    (this.na && v(jb(this), this, this.na, !1)) ||
    (A(x(this) ? this.ra() : this.K), this.K.Ub());
};
g.Lp = function () {
  g.Lp.v.constructor.call(this);
};
g.g.object.U(g.Lp, g.jl);
b = g.Lp.prototype;
b.next = function () {
  var a = this.jb;
  if (!a) return null;
  (a = Ac(this, a, this.Tx)) && H(this, a);
  return a;
};
b.Ng = function () {
  return this.next();
};
b.xf = function () {
  var a = this.jb;
  if (!a) return null;
  (a = Bc(this, a, this.Tx)) && H(this, a);
  return a;
};
b.Sg = function () {
  return this.xf();
};
function Ac(a, c, d) {
  if (!c) return null;
  var e = c.Ng() || c.next();
  if (d(e)) return e;
  if (e) return Ac(a, e, d);
  c = Cc(a, c.Sg());
  return d(c) ? c : c ? Ac(a, c, d) : null;
}
function Bc(a, c, d) {
  if (!c) return null;
  var e = c.xf();
  e = e ? Dc(a, e) : c.Sg();
  return d(e) ? e : e ? Bc(a, e, d) : null;
}
b.Tx = function (a) {
  var c = !1;
  a = a && a.mb();
  if (
    a == g.F.types.Pj ||
    a == g.F.types.Ye ||
    a == g.F.types.Ac ||
    a == g.F.types.Dd ||
    a == g.F.types.Gd ||
    a == g.F.types.Sc
  )
    c = !0;
  return c;
};
function Cc(a, c) {
  if (!c) return null;
  var d = c.next();
  return d ? d : Cc(a, c.Sg());
}
function Dc(a, c) {
  if (!c.Ng()) return c;
  for (c = c.Ng(); c.next(); ) c = c.next();
  return Dc(a, c);
}
g.tq = function () {
  g.tq.v.constructor.call(this);
};
g.g.object.U(g.tq, g.Lp);
g.tq.prototype.Tx = function (a) {
  var c = !1,
    d = a && a.mb();
  a && ((a = a.Ea), d == g.F.types.Ac && a && a.bC() && hb(a) && (c = !0));
  return c;
};
g.sb = function (a, c, d) {
  this.N = g.g.o.M(g.g.G.rc, {}, null);
  this.N.vp = "";
  this.style = Ec(a.Jb.la(), null);
  this.Mb = a.Jb.kC(this.N, this.style);
  this.mx = this.pa = !1;
  this.u = a;
  this.ca = this.X = this.O = null;
  this.Cp = g.g.tk() && !!a.we;
  var e = this.Mb.$b;
  e.Ef = this;
  g.J.Tl(e);
  g.sb.v.constructor.call(this, a, c, d);
  this.N.dataset
    ? (this.N.dataset.id = this.id)
    : g.g.userAgent.Xe && this.N.setAttribute("data-id", this.id);
};
g.g.object.U(g.sb, g.Xd);
g.sb.prototype.height = 0;
g.sb.prototype.width = 0;
g.sb.prototype.oe = null;
g.sb.eM = -1;
g.sb.aE = "TEMP_COLLAPSED_WARNING_";
b = g.sb.prototype;
b.qf = function () {
  if (!this.u.pa) throw TypeError("Workspace is headless.");
  for (var a = 0, c; (c = this.S[a]); a++) c.Y();
  c = Db(this);
  for (a = 0; a < c.length; a++) Ta(c[a]);
  this.kc();
  Bb(this.Mb, "blocklyDraggable", this.Fc());
  a = this.Ma();
  this.u.options.readOnly ||
    this.MH ||
    !a ||
    g.ya(a, "mousedown", this, this.jj);
  this.MH = !0;
  a.parentNode || this.u.wb.appendChild(a);
};
b.select = function () {
  if (this.Na && this.getParent()) this.getParent().select();
  else if (g.selected != this) {
    var a = null;
    if (g.selected) {
      a = g.selected.id;
      g.h.disable();
      try {
        Lb(g.selected);
      } finally {
        g.h.enable();
      }
    }
    a = new g.h.ng(a, this.id, this.u.id);
    g.h.Fa(a);
    g.selected = this;
    this.vq();
  }
};
function Lb(a) {
  if (g.selected == a) {
    var c = new g.h.ng(a.id, null, a.u.id);
    c.Pc = a.u.id;
    g.h.Fa(c);
    g.selected = null;
    a.Wo();
  }
}
b.kd = null;
b.Gn = null;
b.ff = null;
b.Se = null;
function Db(a) {
  var c = [];
  a.kd && c.push(a.kd);
  a.ff && c.push(a.ff);
  a.Se && c.push(a.Se);
  return c;
}
b.vs = function (a) {
  var c = this.Ug;
  if (a != c) {
    g.g.o.mp();
    g.sb.v.vs.call(this, a);
    g.g.o.np();
    var d = this.Ma();
    if (!this.u.Xv && d) {
      var e = this.Xa();
      a
        ? (a.Ma().appendChild(d),
          (a = this.Xa()),
          Hb(this, a.x - e.x, a.y - e.y))
        : c && (this.u.wb.appendChild(d), this.translate(e.x, e.y));
      this.kc();
    }
  }
};
b.Xa = function () {
  var a = 0,
    c = 0,
    d = this.Cp ? this.u.we.oc() : null,
    e = this.Ma();
  if (e) {
    do {
      var f = g.g.mf(e);
      a += f.x;
      c += f.y;
      this.Cp &&
        this.u.we.Cg.firstChild == e &&
        ((f = this.u.we.Hv()), (a += f.x), (c += f.y));
      e = e.parentNode;
    } while (e && e != this.u.wb && e != d);
  }
  return new g.g.V(a, c);
};
b.moveBy = function (a, c) {
  if (this.Ug) throw Error("Block has parent.");
  var d = g.h.isEnabled();
  if (d) var e = new g.h.Xm(this);
  var f = this.Xa();
  this.translate(f.x + a, f.y + c);
  Hb(this, a, c);
  d && (e.Qk(), g.h.Fa(e));
  Ea(this.u);
};
b.translate = function (a, c) {
  this.Ma().setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.moveTo = function (a) {
  var c = this.Xa();
  this.moveBy(a.x - c.x, a.y - c.y);
};
b.zw = function (a) {
  this.Cp
    ? this.u.we.Xk(a.x, a.y)
    : ((this.N.vp = "translate(" + a.x + "," + a.y + ")"),
      this.N.setAttribute("transform", this.N.vp + this.N.kp));
};
function rc(a) {
  if (a.u && !a.u.Ec() && !a.getParent() && !a.Lb) {
    var c = a.u.nf;
    if (c && c.JK) {
      var d = c.Fx,
        e = d / 2,
        f = a.Xa();
      c = Math.round((f.x - e) / d) * d + e - f.x;
      d = Math.round((f.y - e) / d) * d + e - f.y;
      c = Math.round(c);
      d = Math.round(d);
      (0 == c && 0 == d) || a.moveBy(c, d);
    }
  }
}
function Fc(a) {
  var c = a.Xa(),
    d = K(a);
  if (a.L) {
    a = c.x - d.width;
    var e = c.x;
  } else (a = c.x), (e = c.x + d.width);
  return new g.g.Rect(c.y, c.y + d.height, a, e);
}
b.Eo = function () {
  this.Mb.Zl = this.u.Jb.la();
  for (var a = 0, c; (c = this.S[a]); a++) c.Eo();
};
b.uj = function (a) {
  this.Zj != a &&
    (g.sb.v.uj.call(this, a), a ? this.pa && this.Ga() : Gc(this));
};
function Gc(a) {
  for (var c = a.isCollapsed(), d = 0, e; (e = a.S[d]); d++)
    e.name != g.Xd.Zm && e.Eb(!c);
  if (c) {
    e = Db(a);
    for (d = 0; (c = e[d]); d++) c.Eb(!1);
    d = a.toString(g.bE);
    (e = z(a, g.Xd.at))
      ? e.setValue(d)
      : ((e = B(a, g.Xd.Zm) || N(a, g.Xd.Zm)), L(e, new g.Ad(d), g.Xd.at));
  } else a.xc(g.Xd.Zm);
}
b.jj = function (a) {
  var c = this.u && this.u.Mh(a);
  if (c) {
    if (c.kk)
      throw Error(
        "Tried to call gesture.handleBlockStart, but the gesture had already been started."
      );
    Ub(c, this);
    c.tf = a;
  }
};
b.showHelp = function () {
  var a = "function" == typeof this.Wc ? this.Wc() : this.Wc;
  a && window.open(a);
};
b.ip = function (a) {
  if (this.u.options.readOnly || !this.contextMenu) var c = null;
  else (c = tc(g.Ra.Kd.hc, { block: this })), this.Hh && this.Hh(c);
  c && c.length && (g.Va.show(a, c, this.L), (g.Va.Rq = this));
};
function Hb(a, c, d) {
  if (a.pa) {
    for (var e = a.Vf(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
    e = Db(a);
    for (f = 0; f < e.length; f++) Ua(e[f]);
    for (f = 0; f < a.Ch.length; f++) Hb(a.Ch[f], c, d);
  }
}
b.wj = function (a) {
  if (a) {
    var c = this.Ma();
    c.vp = "";
    c.kp = "";
    g.fm = g.fm.concat(this.Vf(!0));
    g.g.o.Ha(this.N, "blocklyDragging");
  } else (g.fm = []), g.g.o.wc(this.N, "blocklyDragging");
  for (c = 0; c < this.Ch.length; c++) this.Ch[c].wj(a);
};
b.us = function (a) {
  g.sb.v.us.call(this, a);
  Bb(this.Mb, "blocklyDraggable", a);
};
b.vx = function (a) {
  g.sb.v.vx.call(this, a);
  a = Db(this);
  for (var c = 0; c < a.length; c++) a[c].ki();
};
b.yx = function (a) {
  g.sb.v.yx.call(this, a);
  this.kc();
};
b.gD = function (a) {
  this.tm != a &&
    (this.tm = a) &&
    (this.$f(this.u.Jb.la().rt), Bb(this.Mb, "blocklyInsertionMarker", !0));
};
b.Ma = function () {
  return this.N;
};
b.I = function (a, c) {
  if (this.u) {
    g.J.I();
    g.J.Px(this.Mb.$b);
    g.g.o.mp();
    var d = this.u;
    g.selected == this && (Lb(this), sc(this.u));
    g.Va.Rq == this && g.Va.Ia();
    this.u.ub && g.navigation.bJ(this);
    c && this.pa && (A(this, a), g.zb.DH(this));
    this.pa = !1;
    if (this.oe) {
      for (var e in this.oe) clearTimeout(this.oe[e]);
      this.oe = null;
    }
    c = Db(this);
    for (e = 0; e < c.length; e++) c[e].I();
    g.sb.v.I.call(this, !!a);
    g.g.o.removeNode(this.N);
    Ea(d);
    this.N = null;
    g.g.o.np();
  }
};
b.kc = function () {
  this.Mb.kc(this);
  for (var a = Db(this), c = 0; c < a.length; c++) a[c].kc();
  for (a = 0; (c = this.S[a]); a++)
    for (var d = 0, e; (e = c.hb[d]); d++) e.kc();
};
function Da(a) {
  var c = Aa(a, !1);
  a.kc();
  if (!a.isCollapsed()) {
    a = 0;
    for (var d; (d = c[a]); a++) d.pa && Da(d);
  }
}
b.ZH = function () {
  return this.ff;
};
b.vj = function (a) {
  if (!g.Comment) throw Error("Missing require for Blockly.Comment");
  this.ye.text != a &&
    (g.sb.v.vj.call(this, a),
    (a = null != a),
    !!this.ff == a
      ? ((a = this.ff),
        a.Wk
          ? (a.Wk.value = a.jd.text)
          : a.Nk && (a.Nk.firstChild.textContent = a.jd.text))
      : (a
          ? (this.Gn = this.ff = new g.Comment(this))
          : (this.ff.I(), (this.Gn = this.ff = null)),
        this.pa && (this.Ga(), this.Ub())));
};
b.Im = function (a, c) {
  if (!g.zn) throw Error("Missing require for Blockly.Warning");
  this.oe || (this.oe = Object.create(null));
  var d = c || "";
  if (d) this.oe[d] && (clearTimeout(this.oe[d]), delete this.oe[d]);
  else for (var e in this.oe) clearTimeout(this.oe[e]), delete this.oe[e];
  if (this.u.Ec()) {
    var f = this;
    this.oe[d] = setTimeout(function () {
      f.u && (delete f.oe[d], f.Im(a, d));
    }, 100);
  } else {
    this.Lb && (a = null);
    c = !1;
    if ("string" == typeof a) {
      e = ic(this);
      for (var h = null; e; ) e.isCollapsed() && (h = e), (e = ic(e));
      h && h.Im(g.i.COLLAPSED_WARNINGS_WARNING, g.sb.aE);
      this.Se || ((this.Se = new g.zn(this)), (c = !0));
      Va(this.Se, a, d);
    } else
      this.Se && !d
        ? (this.Se.I(), (c = !0))
        : this.Se &&
          ((c = this.Se.je()),
          Va(this.Se, "", d),
          (e = this.Se.je()) || this.Se.I(),
          (c = c != e));
    c && this.pa && (this.Ga(), this.Ub());
  }
};
b.gp = function (a) {
  this.kd && this.kd !== a && this.kd.I();
  a && ((a.P = this), (this.kd = a), Ta(a));
  this.pa && (this.Ga(), this.Ub());
};
b.Wd = function (a) {
  this.isEnabled() != a &&
    (g.sb.v.Wd.call(this, a), this.pa && !kc(this) && Da(this));
};
b.ag = function (a) {
  this.pa && this.Mb.zD(a);
};
b.vq = function () {
  Bb(this.Mb, "blocklySelected", !0);
};
b.Wo = function () {
  Bb(this.Mb, "blocklySelected", !1);
};
b.ep = function (a) {
  Bb(this.Mb, "blocklyDraggingDelete", a);
};
b.kr = function () {
  return this.style.Ii;
};
b.$f = function (a) {
  g.sb.v.$f.call(this, a);
  a = Hc(this.u.Jb.la(), this.fd);
  this.Mb.Zb(a.style);
  this.style = a.style;
  this.Uk = a.name;
  this.kc();
};
b.Zb = function (a) {
  var c = Ec(this.u.Jb.la(), a);
  this.Uk = a;
  if (c)
    (this.Lg = c.Lg),
      this.Mb.Zb(c),
      (this.fd = c.Ii),
      (this.style = c),
      this.kc();
  else throw Error("Invalid style name: " + a);
};
function mb(a) {
  do {
    var c = a.Ma(),
      d = c.parentNode,
      e = d.childNodes;
    e[e.length - 1] !== c && d.appendChild(c);
    a = a.getParent();
  } while (a);
}
b.Zg = function (a, c) {
  g.sb.v.Zg.call(this, a, c);
  this.pa && (this.Ga(), this.Ub());
};
b.Yg = function (a, c) {
  g.sb.v.Yg.call(this, a, c);
  this.pa && (this.Ga(), this.Ub());
};
b.zf = function (a, c) {
  g.sb.v.zf.call(this, a, c);
  this.pa && (this.Ga(), this.Ub());
};
b.Ne = function (a) {
  g.sb.v.Ne.call(this, a);
  this.pa && (this.Ga(), this.Ub());
};
b.xc = function (a, c) {
  a = g.sb.v.xc.call(this, a, c);
  this.pa && (this.Ga(), this.Ub());
  return a;
};
b.Aw = function (a, c) {
  g.sb.v.Aw.call(this, a, c);
  this.pa && (this.Ga(), this.Ub());
};
b.sg = function (a, c) {
  a = g.sb.v.sg.call(this, a, c);
  this.pa && (this.Ga(), this.Ub());
  return a;
};
function Ca(a, c) {
  a.ca && gc(a.ca, c);
  a.O && gc(a.O, c);
  if (a.X) {
    gc(a.X, c);
    var d = a.X.ra();
    d && Ca(d, c);
  }
  if (!a.Zj)
    for (d = 0; d < a.S.length; d++) {
      var e = a.S[d].connection;
      e && (gc(e, c), (e = e.ra()) && Ca(e, c));
    }
}
b.Vf = function (a) {
  var c = [];
  if (a || this.pa)
    if (
      (this.O && c.push(this.O),
      this.ca && c.push(this.ca),
      this.X && c.push(this.X),
      a || !this.Zj)
    ) {
      a = 0;
      for (var d; (d = this.S[a]); a++) d.connection && c.push(d.connection);
    }
  return c;
};
b.Gr = function () {
  return g.sb.v.Gr.call(this);
};
b.Cv = function (a, c) {
  return g.sb.v.Cv.call(this, a, c);
};
b.Do = function (a) {
  return new g.tc(this, a);
};
b.Ub = function () {
  if (this.u && !this.u.Ec()) {
    var a = this.Qd();
    if (!a.Lb)
      for (var c = this.Vf(!1), d = 0, e; (e = c[d]); d++) {
        e.isConnected() && x(e) && e.ra().Ub();
        for (var f = e.sC(g.Id), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            (k.W().Qd() != a && (x(e) ? lb(k, e) : lb(e, k)));
      }
  }
};
function Ib(a) {
  var c = g.h.oc();
  setTimeout(function () {
    g.h.ga(c);
    rc(a);
    g.h.ga(!1);
  }, g.Kp / 2);
  setTimeout(function () {
    g.h.ga(c);
    a.Ub();
    g.h.ga(!1);
  }, g.Kp);
}
function kb(a, c, d) {
  (c.type != g.fb && c.type != g.kb) || a.moveBy(d.x - c.x, d.y - c.y);
}
b.getParent = function () {
  return g.sb.v.getParent.call(this);
};
b.Qd = function () {
  return g.sb.v.Qd.call(this);
};
b.Ga = function (a) {
  if (!this.mx) {
    this.mx = !0;
    try {
      this.pa = !0;
      g.g.o.mp();
      this.isCollapsed() && Gc(this);
      this.u.Jb.Ga(this);
      var c = this.Xa();
      this.ca && wc(this.ca, c);
      this.O && wc(this.O, c);
      for (var d = 0; d < this.S.length; d++) {
        var e = this.S[d].connection;
        e && (wc(e, c), e.isConnected() && yc(e));
      }
      this.X && (wc(this.X, c), this.X.isConnected() && yc(this.X));
      if (!1 !== a) {
        var f = this.getParent();
        f ? f.Ga(!0) : Ea(this.u);
      }
      g.g.o.np();
      this.Rx();
    } finally {
      this.mx = !1;
    }
  }
};
b.Rx = function () {
  this.u.ub && this.Mb.Qn && this.u.Db().draw();
  this.u.ub && this.Mb.sw && this.u.Pd(g.navigation.jn).draw();
};
b.ai = function (a) {
  this.Mb.ai(a);
};
b.bi = function (a) {
  this.Mb.bi(a);
};
function K(a) {
  var c = a.height,
    d = a.width,
    e = t(a);
  e &&
    ((e = K(e)),
    (a = a.u.Jb.la().Bt),
    (c += e.height - a),
    (d = Math.max(d, e.width)));
  return { height: c, width: d };
}
g.il = function (a) {
  this.nc = [];
  this.zA = a;
};
function Ic(a, c, d) {
  if (!a.nc.length) return -1;
  var e = vc(a, d);
  if (e >= a.nc.length) return -1;
  d = c.y;
  for (var f = e; 0 <= f && a.nc[f].y == d; ) {
    if (a.nc[f] == c) return f;
    f--;
  }
  for (; e < a.nc.length && a.nc[e].y == d; ) {
    if (a.nc[e] == c) return e;
    e++;
  }
  return -1;
}
function vc(a, c) {
  if (!a.nc.length) return 0;
  for (var d = 0, e = a.nc.length; d < e; ) {
    var f = Math.floor((d + e) / 2);
    if (a.nc[f].y < c) d = f + 1;
    else if (a.nc[f].y > c) e = f;
    else {
      d = f;
      break;
    }
  }
  return d;
}
function uc(a, c, d) {
  c = Ic(a, c, d);
  if (-1 == c) throw Error("Unable to find connection in connectionDB.");
  a.nc.splice(c, 1);
}
function zc(a, c, d) {
  function e(n) {
    var q = h - f[n].x,
      r = k - f[n].y;
    Math.sqrt(q * q + r * r) <= d && m.push(f[n]);
    return r < d;
  }
  var f = a.nc,
    h = c.x,
    k = c.y;
  a = 0;
  for (var l = (c = f.length - 2); a < l; )
    f[l].y < k ? (a = l) : (c = l), (l = Math.floor((a + c) / 2));
  var m = [];
  c = a = l;
  if (f.length) {
    for (; 0 <= a && e(a); ) a--;
    do c++;
    while (c < f.length && e(c));
  }
  return m;
}
g.il.Y = function (a) {
  var c = [];
  c[g.kb] = new g.il(a);
  c[g.Lf] = new g.il(a);
  c[g.fb] = new g.il(a);
  c[g.Mf] = new g.il(a);
  return c;
};
g.h.sh = function (a, c) {
  g.h.sh.v.constructor.call(this, c);
  this.sD = a;
};
g.g.object.U(g.h.sh, g.h.ve);
g.h.sh.prototype.type = g.h.Gz;
g.h.sh.prototype.va = function () {
  var a = g.h.sh.v.va.call(this);
  a.themeName = this.sD;
  return a;
};
g.h.sh.prototype.ea = function (a) {
  g.h.sh.v.ea.call(this, a);
  this.sD = a.themeName;
};
g.C.register(g.C.Z.cc, g.h.Gz, g.h.sh);
g.h.zh = function (a, c, d, e) {
  g.h.zh.v.constructor.call(this, e);
  this.bc = a;
  this.Rb = c;
  this.scale = d;
};
g.g.object.U(g.h.zh, g.h.ve);
g.h.zh.prototype.type = g.h.Sz;
g.h.zh.prototype.va = function () {
  var a = g.h.zh.v.va.call(this);
  a.viewTop = this.bc;
  a.viewLeft = this.Rb;
  a.scale = this.scale;
  return a;
};
g.h.zh.prototype.ea = function (a) {
  g.h.zh.v.ea.call(this, a);
  this.bc = a.viewTop;
  this.Rb = a.viewLeft;
  this.scale = a.scale;
};
g.C.register(g.C.Z.cc, g.h.Sz, g.h.zh);
g.Lj = function (a, c) {
  this.lm = a;
  this.Fx = c.spacing;
  this.hC = c.length;
  this.OI = (this.iw = a.firstChild) && this.iw.nextSibling;
  this.JK = c.snap;
};
g.Lj.prototype.tj = 1;
g.Lj.prototype.I = function () {
  this.lm = null;
};
g.Lj.prototype.update = function (a) {
  this.tj = a;
  var c = this.Fx * a || 100;
  this.lm.setAttribute("width", c);
  this.lm.setAttribute("height", c);
  c = Math.floor(this.Fx / 2) + 0.5;
  var d = c - this.hC / 2,
    e = c + this.hC / 2;
  c *= a;
  d *= a;
  e *= a;
  Jc(this.iw, a, d, e, c, c);
  Jc(this.OI, a, c, c, d, e);
};
function Jc(a, c, d, e, f, h) {
  a &&
    (a.setAttribute("stroke-width", c),
    a.setAttribute("x1", d),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h));
}
g.Lj.prototype.moveTo = function (a, c) {
  this.lm.setAttribute("x", a);
  this.lm.setAttribute("y", c);
  (g.g.userAgent.Xe || g.g.userAgent.Jj) && this.update(this.tj);
};
g.Lj.Wa = function (a, c, d) {
  a = g.g.o.M(
    g.g.G.mz,
    { id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse" },
    d
  );
  0 < c.length && 0 < c.spacing
    ? (g.g.o.M(g.g.G.gn, { stroke: c.colour }, a),
      1 < c.length && g.g.o.M(g.g.G.gn, { stroke: c.colour }, a))
    : g.g.o.M(g.g.G.gn, {}, a);
  return a;
};
g.dz = function (a) {
  this.Gh = this.jf = null;
  this.Gk = {};
  this.s = a;
};
function Kc(a, c) {
  var d = a.Gk[c];
  if (d) d.I(), delete a.Gk[c];
  else
    throw Error(
      "Marker with id " +
        c +
        " does not exist. Can only unregistermarkers that exist."
    );
}
b = g.dz.prototype;
b.Db = function () {
  return this.jf;
};
b.Pd = function (a) {
  return this.Gk[a];
};
function Lc(a, c) {
  a.jf && a.jf.ge && a.jf.ge.I();
  a.jf = c;
  a.jf &&
    ((c = a.jf),
    (c = new g.j.oh(a.s, a.s.Jb.la(), c)),
    (a.jf.ge = c),
    a.ai(a.jf.ge.Wa()));
}
b.ai = function (a) {
  a ? (this.s.wb.appendChild(a), (this.Gh = a)) : (this.Gh = null);
};
b.bi = function (a) {
  a
    ? this.s.wb &&
      (this.Gh ? this.s.wb.insertBefore(a, this.Gh) : this.s.wb.appendChild(a))
    : (this.Wh = null);
};
b.I = function () {
  for (var a = Object.keys(this.Gk), c = 0, d; (d = a[c]); c++) Kc(this, d);
  this.Gk = null;
  this.jf && (this.jf.I(), (this.jf = null));
};
g.Lz = function (a, c) {
  this.s = a;
  this.ei = c;
  this.pp = [];
  this.wg = Object.create(null);
};
b = g.Lz.prototype;
b.Jg = function () {
  return this.ei;
};
b.hp = function (a) {
  var c = this.ei;
  this.ei = a;
  if ((a = aa(this.s))) c && g.g.o.wc(a, c.Uf()), g.g.o.Ha(a, this.ei.Uf());
  for (c = 0; (a = this.pp[c]); c++) a.Em();
  c = 0;
  a = Object.keys(this.wg);
  for (var d; (d = a[c]); c++)
    for (var e = 0, f; (f = this.wg[d][e]); e++)
      f.element.style[f.propertyName] = (this.ei && xa(this.ei, d)) || "";
  g.Dc();
};
b.subscribe = function (a, c, d) {
  this.wg[c] || (this.wg[c] = []);
  this.wg[c].push({ element: a, propertyName: d });
  a.style[d] = (this.ei && xa(this.ei, c)) || "";
};
b.unsubscribe = function (a) {
  if (a)
    for (var c = Object.keys(this.wg), d = 0, e; (e = c[d]); d++) {
      for (var f = this.wg[e], h = f.length - 1; 0 <= h; h--)
        f[h].element === a && f.splice(h, 1);
      this.wg[e].length || delete this.wg[e];
    }
};
b.I = function () {
  this.wg = this.pp = this.ei = this.vf = null;
};
g.ce = function (a, c) {
  g.ce.v.constructor.call(this, a, c);
  this.Br = !1;
  this.xe = Object.create(null);
  this.kD = this.Ro = 0;
  this.ZB = this.Kw = null;
};
g.g.object.U(g.ce, g.kg);
g.ce.IG = 5;
g.ce.JG = 6;
b = g.ce.prototype;
b.$u = function (a) {
  this.ZB = this.qc.options.rb && this.qc.options.rb.Xw;
  g.ce.v.$u.call(this, a);
  !this.zr && g.Touch.Er(a) && Mc(this, a);
};
b.Tl = function (a) {
  this.Kw = g.ya(document, "mousedown", null, this.tI.bind(this), !0);
  this.Yr = g.ya(document, "mousemove", null, this.mm.bind(this), !0);
  this.Zr = g.ya(document, "mouseup", null, this.rr.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
b.tI = function (a) {
  !this.Ec() && g.Touch.Er(a) && (Mc(this, a), this.Br && g.ej());
};
b.mm = function (a) {
  if (this.Ec()) g.Touch.Dx(a) && g.ce.v.mm.call(this, a);
  else if (this.Br) {
    if (g.Touch.Er(a)) {
      this.xe[g.Touch.qr(a)] = Nc(this, a);
      var c = Object.keys(this.xe);
      if (this.ZB && 2 === c.length) {
        c = Object.keys(this.xe);
        c = g.g.V.Zu(this.xe[c[0]], this.xe[c[1]]) / this.kD;
        if (0 < this.Ro && Infinity > this.Ro) {
          var d = c - this.Ro;
          d = 0 < d ? d * g.ce.IG : d * g.ce.JG;
          var e = this.qc,
            f = g.g.Jo(a, u(e), pa(e));
          e.zoom(f.x, f.y, d);
        }
        this.Ro = c;
        a.preventDefault();
      } else g.ce.v.mm.call(this, a);
    }
    g.ej();
  } else g.ce.v.mm.call(this, a);
};
b.rr = function (a) {
  if (g.Touch.Er(a) && !this.Ec()) {
    var c = g.Touch.qr(a);
    this.xe[c] && delete this.xe[c];
    2 > Object.keys(this.xe).length &&
      ((this.xe = Object.create(null)), (this.Ro = 0));
  }
  !this.Br || this.Ec()
    ? g.Touch.Dx(a) && g.ce.v.rr.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.I());
};
b.I = function () {
  g.ce.v.I.call(this);
  this.Kw && g.Oa(this.Kw);
};
function Mc(a, c) {
  a.xe[g.Touch.qr(c)] = Nc(a, c);
  var d = Object.keys(a.xe);
  2 == d.length &&
    ((a.kD = g.g.V.Zu(a.xe[d[0]], a.xe[d[1]])),
    (a.Br = !0),
    c.preventDefault());
}
function Nc(a, c) {
  return a.qc
    ? new g.g.V(
        c.pageX ? c.pageX : c.changedTouches[0].pageX,
        c.pageY ? c.pageY : c.changedTouches[0].pageY
      )
    : null;
}
g.Zz = function (a) {
  this.Tw = a;
  this.un = Object.create(null);
};
b = g.Zz.prototype;
b.dw = null;
b.I = function () {
  this.un = this.Tw = null;
};
b.load = function (a, c) {
  if (a.length) {
    try {
      var d = new g.g.global.Audio();
    } catch (l) {
      return;
    }
    for (var e, f = 0; f < a.length; f++) {
      var h = a[f],
        k = h.match(/\.(\w+)$/);
      if (k && d.canPlayType("audio/" + k[1])) {
        e = new g.g.global.Audio(h);
        break;
      }
    }
    e && e.play && (this.un[c] = e);
  }
};
b.preload = function () {
  for (var a in this.un) {
    var c = this.un[a];
    c.volume = 0.01;
    var d = c.play();
    void 0 !== d ? d.then(c.pause).catch(function () {}) : c.pause();
    if (g.g.userAgent.ql || g.g.userAgent.Vy) break;
  }
};
b.play = function (a, c) {
  var d = this.un[a];
  d
    ? ((a = new Date()),
      (null != this.dw && a - this.dw < g.mG) ||
        ((this.dw = a),
        (d = g.g.userAgent.ql || g.g.userAgent.Wm ? d : d.cloneNode()),
        (d.volume = void 0 === c ? 1 : c),
        d.play()))
    : this.Tw && this.Tw.Ei.play(a, c);
};
g.aA = function (a) {
  this.Ln = a;
  this.Wa();
};
b = g.aA.prototype;
b.ab = null;
b.Ln = null;
b.Wa = function () {
  this.ab ||
    ((this.ab = g.g.o.M(
      g.g.G.Rj,
      {
        xmlns: g.g.o.nq,
        "xmlns:html": g.g.o.ol,
        "xmlns:xlink": g.g.o.bf,
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible",
      },
      null
    )),
    this.Ln.appendChild(this.ab));
};
b.Xk = function (a, c) {
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.ab.style.display = "block";
  g.g.o.cp(this.ab, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.Hv = function () {
  return g.g.mf(this.ab);
};
b.Jq = function (a) {
  if (!a)
    throw Error(
      "Couldn't clear and hide the drag surface: missing new surface."
    );
  var c = this.ab.childNodes[0],
    d = this.ab.childNodes[1];
  if (
    !(
      c &&
      d &&
      g.g.o.Mv(c, "blocklyBlockCanvas") &&
      g.g.o.Mv(d, "blocklyBubbleCanvas")
    )
  )
    throw Error(
      "Couldn't clear and hide the drag surface. A node was missing."
    );
  null != this.bx ? g.g.o.rk(c, this.bx) : a.insertBefore(c, a.firstChild);
  g.g.o.rk(d, c);
  this.ab.style.display = "none";
  if (this.ab.childNodes.length) throw Error("Drag surface was not cleared.");
  g.g.o.cp(this.ab, "");
  this.bx = null;
};
g.tb = function (a, c, d) {
  g.tb.v.constructor.call(this, a);
  this.Vc = a.Vc || g.tb.jI;
  this.fp = a.fp || g.tb.FK;
  this.Pq = g.il.Y(this.Jn);
  c && (this.we = c);
  d && (this.bl = d);
  this.Ks = !!this.bl && g.g.tk();
  this.qo = [];
  this.Ei = new g.Zz(a.pc);
  this.nf = this.options.Lv ? new g.Lj(this.options.Lv, a.GB) : null;
  this.Ie = new g.dz(this);
  this.Mx = {};
  this.tv = {};
  g.$ && g.$.fk && Oc(this, g.uc, g.$.fk);
  g.Tz && g.Tz.fk && Oc(this, g.CG, g.Tz.fk);
  g.Ca && g.Ca.fk && (Oc(this, g.tn, g.Ca.fk), G(this, g.Ca.fJ));
  this.yc = this.options.pc
    ? this.options.pc.yc
    : new g.Lz(this, this.options.RK || g.uh.ni);
  this.yc.pp.push(this);
  this.Jb = g.j.Y(this.options.Xo || "geras", this.Jg(), this.options.Yo);
  this.vu = null;
  this.ub = !1;
  this.Hs = [];
};
g.g.object.U(g.tb, g.Ob);
b = g.tb.prototype;
b.rs = null;
b.pa = !0;
b.Uh = !0;
b.Xf = !1;
b.zo = !1;
b.px = !0;
b.scrollX = 0;
b.scrollY = 0;
b.ZA = null;
b.scale = 1;
b.DC = 1;
b.EC = 0;
b.AC = 0;
b.pd = null;
b.Pa = null;
b.ma = null;
b.Ka = null;
b.sd = null;
b.we = null;
b.bl = null;
b.Ks = !1;
b.yr = !1;
b.Vv = null;
b.gC = null;
b.$a = null;
b.VB = null;
b.Wv = !0;
b.ai = function (a) {
  this.Ie.ai(a);
};
b.bi = function (a) {
  this.Ie.bi(a);
};
b.Pd = function (a) {
  return this.Ie ? this.Ie.Pd(a) : null;
};
b.Db = function () {
  return this.Ie ? this.Ie.Db() : null;
};
b.Jg = function () {
  return this.yc.Jg();
};
b.hp = function (a) {
  a || (a = g.uh.ni);
  this.yc.hp(a);
};
b.Em = function () {
  this.N && this.Jb.gx(this.N, this.Jg());
  Pc(
    D(this, !1).filter(function (c) {
      return void 0 !== c.Uk;
    })
  );
  Qc(this);
  this.Ka && this.Ka.Em();
  this.isVisible() && this.Eb(!0);
  var a = new g.h.sh(this.Jg().name, this.id);
  g.h.Fa(a);
};
function Pc(a) {
  for (var c = 0, d; (d = a[c]); c++) {
    var e = d.Uk;
    if (e && (d.Zb(e), d.kd)) {
      var f = d.kd.s;
      if (f && D(f, !1)) {
        var h = D(f, !1);
        for (d = 0; d < h.length; d++) (e = h[d]), e.Zb(e.Uk);
        if ((d = f.ec()))
          for (f = D(d.s, !1), d = 0; d < f.length; d++) (e = f[d]), e.Zb(e.Uk);
      }
    }
  }
}
function pa(a) {
  if (a.Wv) {
    var c = u(a).getScreenCTM();
    c && ((a.VB = c.inverse()), (a.Wv = !1));
  }
  return a.VB;
}
b.yp = function () {
  this.Wv = !0;
};
b.isVisible = function () {
  return this.Uh;
};
function wb(a, c) {
  var d = 0,
    e = 0,
    f = 1;
  if (g.g.o.containsNode(a.wb, c) || g.g.o.containsNode(a.cg, c)) f = a.scale;
  do {
    var h = g.g.mf(c);
    if (c == a.wb || c == a.cg) f = 1;
    d += h.x * f;
    e += h.y * f;
    c = c.parentNode;
  } while (c && c != u(a));
  return new g.g.V(d, e);
}
function aa(a) {
  if (!a.Vv)
    for (var c = a.N; c; ) {
      if (
        -1 !=
        (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
      ) {
        a.Vv = c;
        break;
      }
      c = c.parentNode;
    }
  return a.Vv;
}
b.Wa = function (a) {
  this.N = g.g.o.M(g.g.G.rc, { class: "blocklyWorkspace" }, null);
  a &&
    ((this.od = g.g.o.M(
      g.g.G.Bc,
      { height: "100%", width: "100%", class: a },
      this.N
    )),
    "blocklyMainBackground" == a && this.nf
      ? (this.od.style.fill = "url(#" + this.nf.lm.id + ")")
      : this.yc.subscribe(this.od, "workspaceBackgroundColour", "fill"));
  this.wb = g.g.o.M(g.g.G.rc, { class: "blocklyBlockCanvas" }, this.N);
  this.cg = g.g.o.M(g.g.G.rc, { class: "blocklyBubbleCanvas" }, this.N);
  this.Xf ||
    (g.ya(this.N, "mousedown", this, this.jj, !1, !0),
    g.ya(this.N, "wheel", this, this.DJ));
  if (this.options.no) {
    if (!g.Xt) throw Error("Missing require for Blockly.Toolbox");
    this.Ka = new (g.C.jr(g.C.Z.qq, this.options))(this);
  }
  this.nf && this.nf.update(this.scale);
  Rc(this);
  Lc(this.Ie, new g.jl());
  a = this.Ie;
  var c = g.navigation.jn,
    d = new g.mn();
  a.Gk[c] && Kc(a, c);
  var e = new g.j.oh(a.s, a.s.Jb.la(), d);
  d.ge = e;
  a.bi(d.ge.Wa());
  a.Gk[c] = d;
  this.Jb.Wa(this.N, this.Jg());
  return this.N;
};
b.I = function () {
  this.pa = !1;
  this.sd && this.sd.cancel();
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.cg = this.wb = null;
  this.Ka && (this.Ka.I(), (this.Ka = null));
  this.ma && (this.ma.I(), (this.ma = null));
  this.pd && (this.pd.I(), (this.pd = null));
  this.Pa && (this.Pa.I(), (this.Pa = null));
  this.dl && (this.dl.I(), (this.dl = null));
  this.Ei && (this.Ei.I(), (this.Ei = null));
  this.nf && (this.nf.I(), (this.nf = null));
  this.Jb.I();
  this.Ie && (this.Ie.I(), (this.Ie = null));
  g.tb.v.I.call(this);
  if (this.yc) {
    var a = this.yc,
      c = a.pp.indexOf(this);
    if (0 > c)
      throw Error(
        "Cannot unsubscribe a workspace that hasn't been subscribed."
      );
    a.pp.splice(c, 1);
    this.yc.unsubscribe(this.od);
    this.options.pc || (this.yc.I(), (this.yc = null));
  }
  this.tv = this.Mx = this.Pq = null;
  this.options.pc ||
    ((a = u(this)) && a.parentNode && g.g.o.removeNode(a.parentNode));
  this.rs && (g.Oa(this.rs), (this.rs = null));
};
b.hj = function (a, c) {
  return new g.sb(this, a, c);
};
function Sc(a) {
  if (!g.dd) throw Error("Missing require for Blockly.Trashcan");
  a.pd = new g.dd(a);
  var c = a.pd.Wa();
  a.N.insertBefore(c, a.wb);
}
function Tc(a) {
  if (!g.cu) throw Error("Missing require for Blockly.ZoomControls");
  a.dl = new g.cu(a);
  var c = a.dl.Wa();
  a.N.appendChild(c);
}
function Uc(a, c) {
  var d = new g.Fd({
    parentWorkspace: a,
    rtl: a.L,
    oneBasedIndex: a.options.Xh,
    horizontalLayout: a.vd,
    renderer: a.options.Xo,
    rendererOverrides: a.options.Yo,
  });
  d.Ja = a.options.Ja;
  if (a.vd) {
    if (!g.nt) throw Error("Missing require for Blockly.HorizontalFlyout");
    a.ma = new g.nt(d);
  } else {
    if (!g.yh) throw Error("Missing require for Blockly.VerticalFlyout");
    a.ma = new g.yh(d);
  }
  a.ma.Sl = !1;
  a.ma.s.Eb(!0);
  return a.ma.Wa(c);
}
b.ec = function (a) {
  return this.ma || a ? this.ma : this.Ka ? this.Ka.ec() : null;
};
function Ea(a) {
  a.px && a.pa && (a.Pa && a.Pa.resize(), a.yp());
}
b.resize = function () {
  this.Ka && this.Ka.position();
  this.ma && this.ma.position();
  this.pd && this.pd.position();
  this.dl && this.dl.position();
  this.Pa && this.Pa.resize();
  this.yp();
  Rc(this);
};
function Pb(a) {
  var c = g.g.dI();
  g.g.V.kf(a.gC, c) || ((a.gC = c), a.yp(), Rc(a));
}
function u(a) {
  if (!a.vu)
    for (var c = a.N; c; ) {
      if ("svg" == c.tagName) {
        a.vu = c;
        break;
      }
      c = c.parentNode;
    }
  return a.vu;
}
function ca(a) {
  if (g.h.isEnabled()) {
    var c = a.scale,
      d = -a.scrollY,
      e = -a.scrollX;
    (c == a.DC && 1 > Math.abs(d - a.EC) && 1 > Math.abs(e - a.AC)) ||
      ((a.DC = c),
      (a.EC = d),
      (a.AC = e),
      (a = new g.h.zh(d, e, c, a.id)),
      g.h.Fa(a));
  }
}
b.translate = function (a, c) {
  if (this.Ks && this.yr) this.bl.Xk(a, c);
  else {
    var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
    this.wb.setAttribute("transform", d);
    this.cg.setAttribute("transform", d);
  }
  if (this.we) {
    d = this.we;
    var e = this.scale;
    d.tj = e;
    d.Cg.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")"
    );
  }
  this.nf && this.nf.moveTo(a, c);
  ca(this);
};
function ra(a) {
  if (a.Ks) {
    a.yr = !1;
    var c = a.bl.Hv();
    a.bl.Jq(a.N);
    c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
    a.wb.setAttribute("transform", c);
    a.cg.setAttribute("transform", c);
  }
}
function qa(a) {
  if (a.Ks && !a.yr) {
    a.yr = !0;
    var c = a.wb.previousSibling,
      d = parseInt(u(a).getAttribute("width"), 10),
      e = parseInt(u(a).getAttribute("height"), 10),
      f = g.g.mf(a.wb),
      h = a.bl,
      k = a.wb,
      l = a.cg,
      m = a.scale;
    if (h.ab.childNodes.length) throw Error("Already dragging a block.");
    h.bx = c;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    h.ab.setAttribute("width", d);
    h.ab.setAttribute("height", e);
    h.ab.appendChild(k);
    h.ab.appendChild(l);
    h.ab.style.display = "block";
    a.bl.Xk(f.x, f.y);
  }
}
b.Kg = function () {
  var a = this.Vc();
  return a ? a.Gb / this.scale : 0;
};
b.Eb = function (a) {
  this.Uh = a;
  if (this.N)
    if (
      (this.Pa && this.Pa.Sk(a),
      this.ec() && this.ec().Sk(a),
      (u(this).style.display = a ? "block" : "none"),
      this.Ka && this.Ka.Eb(a),
      a)
    ) {
      a = D(this, !1);
      for (var c = a.length - 1; 0 <= c; c--) a[c].Eo();
      this.Ga();
      this.Ka && this.Ka.position();
    } else g.Dc(!0);
};
b.Ga = function () {
  for (var a = D(this, !1), c = a.length - 1; 0 <= c; c--) a[c].Ga(!1);
  if (this.sd) for (a = this.sd.im(), c = 0; c < a.length; c++) a[c].Ga(!1);
  c = this.Ie;
  c.s.ub && c.Gh && c.s.Db().draw();
};
function Vc(a, c) {
  var d = C;
  if (void 0 === c) {
    for (var e = 0, f; (f = d.qo[e]); e++) f.ag(!1);
    d.qo.length = 0;
  }
  if ((f = a ? d.td(a) : null))
    (a = void 0 === c || c)
      ? -1 == d.qo.indexOf(f) && d.qo.push(f)
      : g.g.Dn(d.qo, f),
      f.ag(a);
}
b.fs = function (a) {
  if (
    this.pa &&
    a.tagName &&
    !(a.getElementsByTagName("block").length >= Ia(this))
  )
    if ((this.sd && this.sd.cancel(), "comment" == a.tagName.toLowerCase())) {
      g.h.disable();
      try {
        var c = g.Ol.$n(a),
          d = parseInt(a.getAttribute("x"), 10),
          e = parseInt(a.getAttribute("y"), 10);
        isNaN(d) || isNaN(e) || (this.L && (d = -d), c.moveBy(d + 50, e + 50));
      } finally {
        g.h.enable();
      }
      g.h.isEnabled() && g.$z.SN(c);
      c.select();
    } else
      a: {
        g.h.disable();
        try {
          var f = g.T.ck(a, this),
            h = this.Pd(g.navigation.jn).jb;
          if (this.ub && h && h.qm) {
            g.navigation.TB(f, h.Ea);
            break a;
          }
          var k = parseInt(a.getAttribute("x"), 10),
            l = parseInt(a.getAttribute("y"), 10);
          if (!isNaN(k) && !isNaN(l)) {
            this.L && (k = -k);
            do {
              a = !1;
              var m = D(this, !1);
              c = 0;
              for (var n; (n = m[c]); c++) {
                var q = n.Xa();
                if (1 >= Math.abs(k - q.x) && 1 >= Math.abs(l - q.y)) {
                  a = !0;
                  break;
                }
              }
              if (!a) {
                var r = f.Vf(!1);
                c = 0;
                for (var w; (w = r[c]); c++)
                  if (w.closest(g.Id, new g.g.V(k, l)).connection) {
                    a = !0;
                    break;
                  }
              }
              a && ((k = this.L ? k - g.Id : k + g.Id), (l += 2 * g.Id));
            } while (a);
            f.moveBy(k, l);
          }
        } finally {
          g.h.enable();
        }
        g.h.isEnabled() && !f.Na && g.h.Fa(new g.h.Mp(f));
        f.select();
      }
};
function Qc(a) {
  (a = a.Xf ? a.$a : a) &&
    !a.sd &&
    a.Ka &&
    a.Ka.ec() &&
    ((a = a.Ka), a.ob && a.ob.Qg() && a.ob.Oi.length && a.ma.show(a.ob.Oi));
}
b.rj = function (a, c) {
  g.tb.v.rj.call(this, a, c);
  Qc(this);
};
b.Jh = function (a) {
  g.tb.v.Jh.call(this, a);
  Qc(this);
};
b.hf = function (a, c, d) {
  a = g.tb.v.hf.call(this, a, c, d);
  Qc(this);
  return a;
};
function Rc(a) {
  a.OA = a.pd && a.N.parentNode ? a.pd.gm() : null;
  a.NA = a.ma
    ? a.ma.gm()
    : a.Ka && "function" == typeof a.Ka.gm
    ? a.Ka.gm()
    : null;
}
function Fb(a, c) {
  return a.OA && a.OA.contains(c.clientX, c.clientY)
    ? g.et
    : a.NA && a.NA.contains(c.clientX, c.clientY)
    ? g.wy
    : g.vy;
}
b.jj = function (a) {
  var c = this.Mh(a);
  c && Sb(c, a, this);
};
b.Gx = function (a, c) {
  a = g.g.Jo(a, u(this), pa(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.ZA = g.g.V.Sn(c, a);
};
b.Ec = function () {
  return null != this.sd && this.sd.Ec();
};
function Wc(a) {
  return (
    (a.options.Yc && a.options.Yc.scrollbars) ||
    (a.options.Yc && a.options.Yc.Dj) ||
    (a.options.Yc && a.options.Yc.Ni) ||
    (a.options.rb && a.options.rb.controls) ||
    (a.options.rb && a.options.rb.Dj) ||
    (a.options.rb && a.options.rb.Xw)
  );
}
b.Fc = function () {
  return (
    (this.options.Yc && this.options.Yc.scrollbars) ||
    (this.options.Yc && this.options.Yc.Dj) ||
    (this.options.Yc && this.options.Yc.Ni) ||
    (this.options.rb && this.options.rb.Dj) ||
    (this.options.rb && this.options.rb.Xw)
  );
};
b.DJ = function (a) {
  if (g.kg.nk()) a.preventDefault(), a.stopPropagation();
  else {
    var c = this.options.rb && this.options.rb.Dj,
      d = this.options.Yc && this.options.Yc.Dj;
    if (c || d) {
      var e = g.g.xB(a);
      !c || (!a.ctrlKey && d)
        ? ((c = this.scrollX - e.x),
          (d = this.scrollY - e.y),
          a.shiftKey && !e.x && ((c = this.scrollX - e.y), (d = this.scrollY)),
          this.scroll(c, d))
        : ((e = -e.y / 50),
          (c = g.g.Jo(a, u(this), pa(this))),
          this.zoom(c.x, c.y, e));
      a.preventDefault();
    }
  }
};
function Ba(a) {
  a = [].concat(a.Hs);
  if (!a.length) return new g.g.Rect(0, 0, 0, 0);
  for (var c = Fc(a[0]), d = 1; d < a.length; d++) {
    var e = Fc(a[d]);
    e.top < c.top && (c.top = e.top);
    e.bottom > c.bottom && (c.bottom = e.bottom);
    e.left < c.left && (c.left = e.left);
    e.right > c.right && (c.right = e.right);
  }
  return c;
}
b.ip = function (a) {
  if (!this.options.readOnly && !this.Xf) {
    var c = tc(g.Ra.Kd.Sc, { u: this });
    this.hH && this.hH(c, a);
    g.Va.show(a, c, this.L);
  }
};
function Xc(a, c) {
  if ((c = g.g.wa.Fu(c))) {
    if (!a.options.Rg)
      throw Error("Existing toolbox is null.  Can't create new toolbox.");
    if (g.g.wa.no(c)) {
      if (!a.Ka)
        throw Error("Existing toolbox has no categories.  Can't change mode.");
      a.options.Rg = c;
      a.Ka.Ga(c);
    } else {
      if (!a.ma)
        throw Error("Existing toolbox has categories.  Can't change mode.");
      a.options.Rg = c;
      a.ma.show(c);
    }
  } else if (a.options.Rg) throw Error("Can't nullify an existing toolbox.");
}
function na(a) {
  if (a.options.pc) na(a.options.pc);
  else {
    g.Co = a;
    document.activeElement &&
      document.activeElement.blur &&
      document.activeElement.blur();
    try {
      u(a).focus({ preventScroll: !0 });
    } catch (c) {
      try {
        u(a).parentNode.setActive();
      } catch (d) {
        u(a).parentNode.focus({ preventScroll: !0 });
      }
    }
  }
}
b.zoom = function (a, c, d) {
  d = Math.pow(this.options.rb.yK, d);
  var e = this.scale * d;
  if (this.scale != e) {
    e > this.options.rb.Fo
      ? (d = this.options.rb.Fo / this.scale)
      : e < this.options.rb.Ho && (d = this.options.rb.Ho / this.scale);
    var f = this.wb.getCTM(),
      h = u(this).createSVGPoint();
    h.x = a;
    h.y = c;
    h = h.matrixTransform(f.inverse());
    a = h.x;
    c = h.y;
    f = f.translate(a * (1 - d), c * (1 - d)).scale(d);
    this.scrollX = f.e;
    this.scrollY = f.f;
    this.setScale(e);
  }
};
b.LH = function () {
  g.g.o.wc(this.wb, "blocklyCanvasTransitioning");
  g.g.o.wc(this.cg, "blocklyCanvasTransitioning");
};
b.setScale = function (a) {
  this.options.rb.Fo && a > this.options.rb.Fo
    ? (a = this.options.rb.Fo)
    : this.options.rb.Ho && a < this.options.rb.Ho && (a = this.options.rb.Ho);
  this.scale = a;
  g.Dc(!1);
  this.ma && (this.ma.ex(), Rc(this));
  this.nf && this.nf.update(this.scale);
  a = this.Vc();
  this.scrollX -= a.Jc;
  this.scrollY -= a.Tc;
  a.Rb += a.Jc;
  a.bc += a.Tc;
  this.scroll(this.scrollX, this.scrollY);
  this.Pa &&
    (this.ma
      ? (ha(this.Pa.pf, a), ia(this.Pa.Ff, a))
      : (ka(this.Pa.pf, a), ma(this.Pa.Ff, a)));
};
function Yc(a) {
  return a.options.pc ? Yc(a.options.pc) : a.scale;
}
b.scroll = function (a, c) {
  g.Dc(!0);
  var d = this.Vc(),
    e = d.gf + d.gd - d.Gb,
    f = d.Md + d.Uc - d.Nb;
  a = Math.min(a, -d.gd);
  c = Math.min(c, -d.Uc);
  a = Math.max(a, -e);
  c = Math.max(c, -f);
  this.scrollX = a;
  this.scrollY = c;
  this.Pa &&
    (da(this.Pa.pf, -(a + d.gd) * this.Pa.pf.ratio),
    da(this.Pa.Ff, -(c + d.Uc) * this.Pa.Ff.ratio));
  a += d.Jc;
  c += d.Tc;
  this.translate(a, c);
};
g.tb.oB = function (a) {
  var c = 0,
    d = 0;
  a && ((c = a.Kg()), (d = a.Lc));
  return new g.g.se(c, d);
};
g.tb.bI = function (a, c) {
  return Wc(a) ? g.tb.aI(a, c) : g.tb.lB(a);
};
g.tb.lB = function (a) {
  var c = Ba(a),
    d = a.scale;
  a = c.top * d;
  var e = c.bottom * d,
    f = c.left * d;
  c = c.right * d;
  return { top: a, bottom: e, left: f, right: c, width: c - f, height: e - a };
};
g.tb.aI = function (a, c) {
  a = g.tb.lB(a);
  var d = c.width;
  c = c.height;
  var e = d / 2,
    f = c / 2,
    h = Math.min(a.left - e, a.right - d),
    k = Math.min(a.top - f, a.bottom - c);
  return {
    left: h,
    top: k,
    height: Math.max(a.bottom + f, a.top + c) - k,
    width: Math.max(a.right + e, a.left + d) - h,
  };
};
g.tb.jI = function () {
  var a = g.tb.oB(this.Ka),
    c = g.tb.oB(this.ma),
    d = g.OK(u(this)),
    e = { height: d.height, width: d.width };
  if (this.Ka)
    if (this.Ja == g.Tj || this.Ja == g.xn) e.height -= a.height;
    else {
      if (this.Ja == g.te || this.Ja == g.Ll) e.width -= a.width;
    }
  else if (this.ma)
    if (this.Ja == g.Tj || this.Ja == g.xn) e.height -= c.height;
    else if (this.Ja == g.te || this.Ja == g.Ll) e.width -= c.width;
  var f = g.tb.bI(this, e),
    h = 0;
  this.Ka && this.Ja == g.te
    ? (h = a.width)
    : this.ma && this.Ja == g.te && (h = c.width);
  var k = 0;
  this.Ka && this.Ja == g.Tj
    ? (k = a.height)
    : this.ma && this.Ja == g.Tj && (k = c.height);
  return {
    Md: f.height,
    gf: f.width,
    Uc: f.top,
    gd: f.left,
    Nb: e.height,
    Gb: e.width,
    bc: -this.scrollY,
    Rb: -this.scrollX,
    Tc: k,
    Jc: h,
    pD: d.height,
    qD: d.width,
    xD: a.width,
    vO: a.height,
    Ja: this.Ja,
    UN: c.width,
    TN: c.height,
  };
};
g.tb.FK = function (a) {
  var c = this.Vc();
  "number" == typeof a.x && (this.scrollX = -c.gf * a.x - c.gd);
  "number" == typeof a.y && (this.scrollY = -c.Md * a.y - c.Uc);
  this.translate(this.scrollX + c.Jc, this.scrollY + c.Tc);
};
b = g.tb.prototype;
b.td = function (a) {
  return g.tb.v.td.call(this, a);
};
b.Ib = function (a) {
  return g.tb.v.Ib.call(this, a);
};
b.xq = function (a) {
  this.Hs.push(a);
  g.tb.v.xq.call(this, a);
};
b.ns = function (a) {
  g.g.Dn(this.Hs, a);
  g.tb.v.ns.call(this, a);
};
b.Zc = function (a) {
  var c = !this.px && a;
  this.px = a;
  c && Ea(this);
};
b.clear = function () {
  this.Zc(!1);
  g.tb.v.clear.call(this);
  this.Hs = [];
  this.Zc(!0);
};
function Zc(a, c) {
  if ("function" != typeof c)
    throw TypeError("Button callbacks must be functions.");
  a.tv.CREATE_VARIABLE = c;
}
function Ya(a, c) {
  return (a = a.tv[c]) ? a : null;
}
function Oc(a, c, d) {
  if ("function" != typeof d)
    throw TypeError("Toolbox category callbacks must be functions.");
  a.Mx[c] = d;
}
b.Mh = function (a) {
  var c =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    d = this.sd;
  return d
    ? c && d.kk
      ? (console.warn("Tried to start the same gesture twice."),
        d.cancel(),
        null)
      : d
    : c
    ? (this.sd = new g.ce(a, this))
    : null;
};
function sc(a) {
  a.sd && a.sd.cancel();
}
g.dn = function (a) {
  a.Vc = this.nr.bind(this);
  a.fp = this.EK.bind(this);
  this.s = new g.tb(a);
  this.s.Xf = !0;
  this.s.Eb(this.Uh);
  this.L = !!a.L;
  this.vd = !1;
  this.Aj = a.Ja;
  this.nv = [];
  this.Jr = [];
  this.Fn = [];
  this.Ud = [];
  this.Ww = [];
  this.Nm = this.s.Jb.la().pq;
  this.$a = null;
};
b = g.dn.prototype;
b.Sl = !0;
b.Uh = !1;
b.$j = !0;
b.Kb = 8;
b.wi = g.dn.prototype.Kb;
b.YE = 3 * g.dn.prototype.wi;
b.ZE = 3 * g.dn.prototype.wi;
b.Pt = 2;
b.qb = 0;
b.Lc = 0;
b.HH = 70;
b.Wa = function (a) {
  this.N = g.g.o.M(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.od = g.g.o.M(g.g.G.$d, { class: "blocklyFlyoutBackground" }, this.N);
  this.N.appendChild(this.s.Wa());
  this.s.yc.subscribe(this.od, "flyoutBackgroundColour", "fill");
  this.s.yc.subscribe(this.od, "flyoutOpacity", "fill-opacity");
  Lc(this.s.Ie, new g.aq());
  return this.N;
};
b.Y = function (a) {
  this.$a = a;
  this.s.$a = a;
  this.Pa = new g.Sa(this.s, this.vd, !1, "blocklyFlyoutScrollbar");
  this.Ia();
  Array.prototype.push.apply(this.nv, g.ya(this.N, "wheel", this, this.fL));
  this.Sl || ((this.dr = this.ov.bind(this)), G(this.$a, this.dr));
  Array.prototype.push.apply(
    this.nv,
    g.ya(this.od, "mousedown", this, this.jj)
  );
  this.s.Mh = this.$a.Mh.bind(this.$a);
  this.s.Ax(this.$a.Qa);
  a = this.s;
  a.nj = new g.au(a);
};
b.I = function () {
  this.Ia();
  g.Oa(this.nv);
  this.dr && (Ma(this.$a, this.dr), (this.dr = null));
  this.Pa && (this.Pa.I(), (this.Pa = null));
  this.s &&
    (this.s.yc.unsubscribe(this.od),
    (this.s.$a = null),
    this.s.I(),
    (this.s = null));
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.$a = this.od = null;
};
b.Kg = function () {
  return this.qb;
};
b.isVisible = function () {
  return this.Uh;
};
b.Eb = function (a) {
  var c = a != this.isVisible();
  this.Uh = a;
  c && this.xp();
};
b.Sk = function (a) {
  var c = a != this.$j;
  this.$j = a;
  c && this.xp();
};
b.xp = function () {
  var a = this.$j ? this.isVisible() : !1;
  this.N.style.display = a ? "block" : "none";
  this.Pa.Sk(a);
};
b.Ia = function () {
  if (this.isVisible()) {
    this.Eb(!1);
    for (var a = 0, c; (c = this.Ud[a]); a++) g.Oa(c);
    this.Ud.length = 0;
    this.oj && (Ma(this.s, this.oj), (this.oj = null));
  }
};
b.show = function (a) {
  this.s.Zc(!1);
  this.Ia();
  $c(this);
  "string" == typeof a && (a = ad(this, a));
  this.Eb(!0);
  a = g.g.wa.FA(a);
  a = bd(this, a);
  cd(this, a.lH, a.SH);
  this.Ud.push(
    g.ya(this.od, "mouseover", this, function () {
      for (var c = this.s.Ib(!1), d = 0, e; (e = c[d]); d++) e.Wo();
    })
  );
  this.vd ? (this.Lc = 0) : (this.qb = 0);
  this.s.Zc(!0);
  this.ex();
  this.ov();
  this.position();
  this.oj = this.ex.bind(this);
  G(this.s, this.oj);
};
function bd(a, c) {
  var d = [],
    e = [];
  a.Ww.length = 0;
  for (var f = a.vd ? a.YE : a.ZE, h = 0, k; (k = c[h]); h++) {
    if (k.custom) {
      var l = ad(a, k.custom);
      l = g.g.wa.FA(l);
      c.splice.apply(c, [h, 1].concat(l));
      k = c[h];
    }
    switch (k.kind.toUpperCase()) {
      case "BLOCK":
        l = k;
        var m = l;
        k = null;
        var n = m.blockxml;
        n && "string" != typeof n
          ? (k = n)
          : n && "string" == typeof n
          ? ((k = g.T.Pe(n)), (m.blockxml = k))
          : m.type &&
            ((k = g.g.xml.createElement("xml")),
            k.setAttribute("type", m.type),
            k.setAttribute("disabled", m.disabled),
            (m.blockxml = k));
        if (!k)
          throw Error(
            "Error: Invalid block definition. Block definition must have blockxml or type."
          );
        m = k;
        k = a;
        n = g.T.ck(m, k.s);
        n.isEnabled() || k.Ww.push(n);
        k = n;
        l = parseInt(l.gap || m.getAttribute("gap"), 10);
        e.push(isNaN(l) ? f : l);
        d.push({ type: "block", block: k });
        break;
      case "SEP":
        l = e;
        m = f;
        k = parseInt(k.gap, 10);
        !isNaN(k) && 0 < l.length ? (l[l.length - 1] = k) : l.push(m);
        break;
      case "LABEL":
        l = dd(a, k, !0);
        d.push({ type: "button", button: l });
        e.push(f);
        break;
      case "BUTTON":
        (l = dd(a, k, !1)), d.push({ type: "button", button: l }), e.push(f);
    }
  }
  return { lH: d, SH: e };
}
function ad(a, c) {
  c = a.s.$a.Mx[c] || null;
  if ("function" != typeof c)
    throw TypeError(
      "Couldn't find a callback function when opening a toolbox category."
    );
  a = c(a.s.$a);
  if (!Array.isArray(a))
    throw new TypeError(
      "Result of toolbox category callback must be an array."
    );
  return a;
}
function dd(a, c, d) {
  if (!g.Kj) throw Error("Missing require for Blockly.FlyoutButton");
  return new g.Kj(a.s, a.$a, c, d);
}
function $c(a) {
  for (var c = a.s.Ib(!1), d = 0, e; (e = c[d]); d++) e.u == a.s && e.I(!1, !1);
  for (d = 0; d < a.Jr.length; d++)
    if ((c = a.Jr[d])) g.J.Px(c), g.g.o.removeNode(c);
  for (d = a.Jr.length = 0; (c = a.Fn[d]); d++) c.I();
  a.Fn.length = 0;
  a.s.nj.clear();
}
function ed(a, c) {
  return function (d) {
    var e = a.$a.Mh(d);
    e && (Ub(e, c), Tb(e, d, a));
  };
}
b.jj = function (a) {
  var c = this.$a.Mh(a);
  c && Tb(c, a, this);
};
function ib(a, c) {
  var d = null;
  g.h.disable();
  var e = a.$a.gk();
  a.$a.Zc(!1);
  try {
    var f = a.$a;
    if (!c.Ma()) throw Error("oldBlock is not rendered.");
    var h = g.T.Ah(c, !0);
    f.Zc(!1);
    var k = g.T.ck(h, f);
    if (!k.Ma()) throw Error("block is not rendered.");
    var l = g.g.jo(f.wb),
      m = g.g.jo(a.s.wb),
      n = c.Xa();
    n.scale(a.s.scale);
    var q = g.g.V.sum(m, n),
      r = g.g.V.Sn(q, l);
    r.scale(1 / f.scale);
    k.moveBy(r.x, r.y);
    d = k;
  } finally {
    g.h.enable();
  }
  g.Dc();
  c = g.$.jB(a.$a, e);
  if (g.h.isEnabled()) {
    g.h.ga(!0);
    for (e = 0; e < c.length; e++) g.h.Fa(new g.h.af(c[e]));
    g.h.Fa(new g.h.Te(d));
  }
  a.Sl ? a.Ia() : a.ov();
  return d;
}
b.ov = function () {
  for (var a = this.s.Ib(!1), c = 0, d; (d = a[c]); c++)
    if (-1 == this.Ww.indexOf(d))
      for (var e = Ja(this.$a, g.g.wv(d)); d; ) d.Wd(e), (d = t(d));
};
b.ex = function () {
  this.oj && Ma(this.s, this.oj);
  this.s.scale = this.$a.scale;
  for (var a = 0, c = this.s.Ib(!1), d = 0, e; (e = c[d]); d++) {
    var f = K(e).width;
    e.O && (f -= this.Nm);
    a = Math.max(a, f);
  }
  for (d = 0; (e = this.Fn[d]); d++) a = Math.max(a, e.width);
  a += 1.5 * this.wi + this.Nm;
  a *= this.s.scale;
  a += g.Sa.Oc;
  if (this.qb != a) {
    for (d = 0; (e = c[d]); d++) {
      if (this.L) {
        f = e.Xa().x;
        var h = a / this.s.scale - this.wi;
        e.O || (h -= this.Nm);
        e.moveBy(h - f, 0);
      }
      e.eB &&
        ((f = e.eB),
        (h = e),
        (e = K(h)),
        f.setAttribute("width", e.width),
        f.setAttribute("height", e.height),
        (h = h.Xa()),
        f.setAttribute("y", h.y),
        f.setAttribute("x", this.L ? h.x - e.width : h.x));
    }
    if (this.L)
      for (d = 0; (e = this.Fn[d]); d++)
        e.moveTo(a / this.s.scale - e.width - this.wi - this.Nm, e.Ok.y);
    this.$a.Ja != this.Aj ||
      this.Aj != g.te ||
      this.$a.Ka ||
      this.$a.translate(this.$a.scrollX + a, this.$a.scrollY);
    this.qb = a;
    this.position();
  }
  this.oj && G(this.s, this.oj);
};
function Ob(a) {
  return a.Pa ? a.Pa.isVisible() : !1;
}
b.fc = function (a) {
  return this.s.Db().fc(a);
};
g.ba = {};
g.ba.vf = null;
g.ba.Yq = null;
g.ba.Zf = "";
g.ba.dg = "";
g.ba.Wa = function () {
  g.ba.ib ||
    ((g.ba.ib = document.createElement("div")),
    (g.ba.ib.className = "blocklyWidgetDiv"),
    (g.bs || document.body).appendChild(g.ba.ib));
};
g.ba.show = function (a, c, d) {
  g.ba.Ia();
  g.ba.vf = a;
  g.ba.Yq = d;
  a = g.ba.ib;
  a.style.direction = c ? "rtl" : "ltr";
  a.style.display = "block";
  c = g.Gg();
  g.ba.Zf = c.Jb.Uf();
  g.ba.dg = c.Jg().Uf();
  g.g.o.Ha(a, g.ba.Zf);
  g.g.o.Ha(a, g.ba.dg);
};
g.ba.Ia = function () {
  if (g.ba.isVisible()) {
    g.ba.vf = null;
    var a = g.ba.ib;
    a.style.display = "none";
    a.style.left = "";
    a.style.top = "";
    g.ba.Yq && g.ba.Yq();
    g.ba.Yq = null;
    a.textContent = "";
    g.ba.Zf && (g.g.o.wc(a, g.ba.Zf), (g.ba.Zf = ""));
    g.ba.dg && (g.g.o.wc(a, g.ba.dg), (g.ba.dg = ""));
    na(g.Gg());
  }
};
g.ba.isVisible = function () {
  return !!g.ba.vf;
};
g.ba.po = function (a) {
  g.ba.vf == a && g.ba.Ia();
};
g.ba.Po = function (a, c, d) {
  g.ba.ib.style.left = a + "px";
  g.ba.ib.style.top = c + "px";
  g.ba.ib.style.height = d + "px";
};
g.ba.JJ = function (a, c, d, e) {
  var f = g.ba.XG(a, c, d);
  a = g.ba.WG(a, c, d, e);
  0 > f ? g.ba.Po(a, 0, d.height + f) : g.ba.Po(a, f, d.height);
};
g.ba.WG = function (a, c, d, e) {
  if (e)
    return (
      (c = Math.max(c.right - d.width, a.left)), Math.min(c, a.right - d.width)
    );
  c = Math.min(c.left, a.right - d.width);
  return Math.max(c, a.left);
};
g.ba.XG = function (a, c, d) {
  return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom;
};
g.yh = function (a) {
  g.yh.v.constructor.call(this, a);
};
g.g.object.U(g.yh, g.dn);
g.yh.iO = "verticalFlyout";
b = g.yh.prototype;
b.nr = function () {
  if (!this.isVisible()) return null;
  try {
    var a = this.s.wb.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var c = this.Pt,
    d = this.Lc - 2 * this.Pt,
    e = this.qb;
  this.L || (e -= this.Pt);
  return {
    Md: a.height * this.s.scale + 2 * this.wi,
    gf: a.width * this.s.scale + 2 * this.wi,
    Uc: a.y,
    gd: a.x,
    Nb: d,
    Gb: e,
    bc: -this.s.scrollY + a.y,
    Rb: -this.s.scrollX,
    Tc: c,
    Jc: 0,
  };
};
b.EK = function (a) {
  var c = this.nr();
  c &&
    ("number" == typeof a.y && (this.s.scrollY = -c.Md * a.y),
    this.s.translate(this.s.scrollX + c.Jc, this.s.scrollY + c.Tc));
};
b.position = function () {
  if (this.isVisible()) {
    var a = this.$a.Vc();
    if (a) {
      this.Lc = a.Nb;
      var c = this.qb - this.Kb;
      a = a.Nb - 2 * this.Kb;
      var d = this.Aj == g.Ll,
        e = c + this.Kb;
      e = ["M " + (d ? e : 0) + ",0"];
      e.push("h", d ? -c : c);
      e.push(
        "a",
        this.Kb,
        this.Kb,
        0,
        0,
        d ? 0 : 1,
        d ? -this.Kb : this.Kb,
        this.Kb
      );
      e.push("v", Math.max(0, a));
      e.push(
        "a",
        this.Kb,
        this.Kb,
        0,
        0,
        d ? 0 : 1,
        d ? this.Kb : -this.Kb,
        this.Kb
      );
      e.push("h", d ? c : -c);
      e.push("z");
      this.od.setAttribute("d", e.join(" "));
      c = (c = this.$a.Vc())
        ? this.$a.Ja == this.Aj
          ? c.xD
            ? this.Aj == g.te
              ? c.xD
              : c.Gb - this.qb
            : this.Aj == g.te
            ? 0
            : c.Gb
          : this.Aj == g.te
          ? 0
          : c.Gb + c.Jc - this.qb
        : 0;
      a = this.Lc;
      this.N.setAttribute("width", this.qb);
      this.N.setAttribute("height", a);
      "svg" == this.N.tagName
        ? g.g.o.cp(this.N, "translate(" + c + "px,0px)")
        : this.N.setAttribute("transform", "translate(" + c + ",0)");
      this.Pa &&
        ((this.Pa.Pw = new g.g.V(c, 0)),
        this.Pa.resize(),
        this.Pa.setPosition(this.Pa.position.x, this.Pa.position.y));
    }
  }
};
b.ux = function () {
  this.Pa.set(0);
};
b.fL = function (a) {
  var c = g.g.xB(a);
  if (c.y) {
    var d = this.nr();
    c = d.bc - d.Uc + c.y;
    c = Math.min(c, d.Md - d.Nb);
    c = Math.max(c, 0);
    this.Pa.set(c);
    g.ba.Ia();
    g.H.Ui();
  }
  a.preventDefault();
  a.stopPropagation();
};
function cd(a, c, d) {
  a.s.scale = a.$a.scale;
  for (var e = a.wi, f = a.L ? e : e + a.Nm, h = 0, k; (k = c[h]); h++)
    if ("block" == k.type) {
      k = k.block;
      for (var l = p(k, !1), m = 0, n; (n = l[m]); m++) n.Lb = !0;
      k.Ga();
      n = k.Ma();
      l = K(k);
      m = k.O ? f - a.Nm : f;
      k.moveBy(m, e);
      var q = a,
        r = k,
        w = h;
      m = g.g.o.M(
        g.g.G.Bc,
        {
          "fill-opacity": 0,
          x: a.L ? m - l.width : m,
          y: e,
          height: l.height,
          width: l.width,
        },
        null
      );
      m.Ef = r;
      g.J.Tl(m);
      q.s.wb.insertBefore(m, r.Ma());
      r.eB = m;
      q.Jr[w] = m;
      q = a;
      q.Ud.push(g.ya(n, "mousedown", null, ed(q, k)));
      q.Ud.push(g.ya(m, "mousedown", null, ed(q, k)));
      q.Ud.push(g.ed(n, "mouseenter", k, k.vq));
      q.Ud.push(g.ed(n, "mouseleave", k, k.Wo));
      q.Ud.push(g.ed(m, "mouseenter", k, k.vq));
      q.Ud.push(g.ed(m, "mouseleave", k, k.Wo));
      e += l.height + d[h];
    } else
      "button" == k.type &&
        ((l = a),
        (m = k.button),
        (n = f),
        (q = e),
        (r = m.Wa()),
        m.moveTo(n, q),
        m.show(),
        l.Ud.push(g.ya(r, "mousedown", l, l.jj)),
        l.Fn.push(m),
        (e += k.button.height + d[h]));
}
b.gm = function () {
  if (!this.N) return null;
  var a = this.N.getBoundingClientRect(),
    c = a.left;
  return this.Aj == g.te
    ? new g.g.Rect(-1e9, 1e9, -1e9, c + a.width)
    : new g.g.Rect(-1e9, 1e9, c, 1e9);
};
g.C.register(g.C.Z.Iy, g.C.Wp, g.yh);
g.cu = function (a) {
  this.s = a;
  this.Tm = this.Ep = this.Sm = this.eh = this.Mw = this.Lw = this.Nw = null;
};
b = g.cu.prototype;
b.Wj = 32;
b.My = 110;
b.xt = 20;
b.hn = 20;
b.N = null;
b.Ao = 0;
b.Om = 0;
b.Wa = function () {
  this.N = g.g.o.M(g.g.G.rc, {}, null);
  var a = String(Math.random()).substring(2);
  this.Ep = g.g.o.M(g.g.G.rc, { class: "blocklyZoom" }, this.N);
  var c = g.g.o.M(g.g.G.Ym, { id: "blocklyZoomoutClipPath" + a }, this.Ep);
  g.g.o.M(g.g.G.Bc, { width: 32, height: 32 }, c);
  g.g.o
    .M(
      g.g.G.si,
      {
        width: g.Jd.width,
        height: g.Jd.height,
        x: -64,
        y: -92,
        "clip-path": "url(#blocklyZoomoutClipPath" + a + ")",
      },
      this.Ep
    )
    .setAttributeNS(g.g.o.bf, "xlink:href", this.s.options.mj + g.Jd.url);
  this.Mw = g.ya(this.Ep, "mousedown", null, this.LD.bind(this, -1));
  this.Sm = g.g.o.M(g.g.G.rc, { class: "blocklyZoom" }, this.N);
  c = g.g.o.M(g.g.G.Ym, { id: "blocklyZoominClipPath" + a }, this.Sm);
  g.g.o.M(g.g.G.Bc, { width: 32, height: 32 }, c);
  g.g.o
    .M(
      g.g.G.si,
      {
        width: g.Jd.width,
        height: g.Jd.height,
        x: -32,
        y: -92,
        "clip-path": "url(#blocklyZoominClipPath" + a + ")",
      },
      this.Sm
    )
    .setAttributeNS(g.g.o.bf, "xlink:href", this.s.options.mj + g.Jd.url);
  this.Lw = g.ya(this.Sm, "mousedown", null, this.LD.bind(this, 1));
  this.s.Fc() &&
    ((this.Tm = g.g.o.M(g.g.G.rc, { class: "blocklyZoom" }, this.N)),
    (c = g.g.o.M(g.g.G.Ym, { id: "blocklyZoomresetClipPath" + a }, this.Tm)),
    g.g.o.M(g.g.G.Bc, { width: 32, height: 32 }, c),
    g.g.o
      .M(
        g.g.G.si,
        {
          width: g.Jd.width,
          height: g.Jd.height,
          y: -92,
          "clip-path": "url(#blocklyZoomresetClipPath" + a + ")",
        },
        this.Tm
      )
      .setAttributeNS(g.g.o.bf, "xlink:href", this.s.options.mj + g.Jd.url),
    (this.Nw = g.ya(this.Tm, "mousedown", null, this.uK.bind(this))));
  return this.N;
};
b.Y = function (a) {
  this.eh = this.xt + a;
  return this.eh + this.My;
};
b.I = function () {
  this.N && g.g.o.removeNode(this.N);
  this.Nw && g.Oa(this.Nw);
  this.Lw && g.Oa(this.Lw);
  this.Mw && g.Oa(this.Mw);
};
b.position = function () {
  if (this.eh) {
    var a = this.s.Vc();
    a &&
      ((this.Ao =
        a.Ja == g.te || (this.s.vd && !this.s.L)
          ? a.Gb + a.Jc - this.Wj - this.hn - g.Sa.Oc
          : this.hn + g.Sa.Oc),
      a.Ja == g.xn
        ? ((this.Om = this.eh),
          this.Sm.setAttribute("transform", "translate(0, 34)"),
          this.Tm && this.Tm.setAttribute("transform", "translate(0, 77)"))
        : ((this.Om = a.Nb + a.Tc - this.My - this.eh),
          this.Sm.setAttribute("transform", "translate(0, 43)"),
          this.Ep.setAttribute("transform", "translate(0, 77)")),
      this.N.setAttribute(
        "transform",
        "translate(" + this.Ao + "," + this.Om + ")"
      ));
  }
};
b.LD = function (a, c) {
  na(this.s);
  var d = this.s,
    e = d.Vc();
  if (d.ma) {
    var f = e.qD ? e.qD / 2 : 0;
    e = e.pD ? e.pD / 2 : 0;
  } else (f = e.Gb / 2 + e.Jc), (e = e.Nb / 2 + e.Tc);
  d.zoom(f, e, a);
  fd(this);
  g.Touch.Yj();
  c.stopPropagation();
  c.preventDefault();
};
b.uK = function (a) {
  na(this.s);
  this.s.setScale(this.s.options.rb.mD);
  var c = this.s;
  g.g.o.Ha(c.wb, "blocklyCanvasTransitioning");
  g.g.o.Ha(c.cg, "blocklyCanvasTransitioning");
  c = this.s;
  if (c.Fc()) {
    var d = c.Vc(),
      e = (d.gf - d.Gb) / 2,
      f = (d.Md - d.Nb) / 2;
    e = -e - d.gd;
    f = -f - d.Uc;
    c.scroll(e, f);
  } else
    console.warn(
      "Tried to move a non-movable workspace. This could result in blocks becoming inaccessible."
    );
  setTimeout(this.s.LH.bind(this.s), 500);
  fd(this);
  g.Touch.Yj();
  a.stopPropagation();
  a.preventDefault();
};
function fd(a) {
  a = new g.h.Hf(null, a.s.id, "zoom_controls");
  g.h.Fa(a);
}
g.$c.register([
  ".blocklyZoom>image, .blocklyZoom>svg>image {",
  "opacity: .4;",
  "}",
  ".blocklyZoom>image:hover, .blocklyZoom>svg>image:hover {",
  "opacity: .6;",
  "}",
  ".blocklyZoom>image:active, .blocklyZoom>svg>image:active {",
  "opacity: .8;",
  "}",
]);
g.ky = function (a) {
  this.Ln = a;
  this.Wa();
};
b = g.ky.prototype;
b.ab = null;
b.Cg = null;
b.Ln = null;
b.tj = 1;
b.qp = null;
b.Wa = function () {
  this.ab ||
    ((this.ab = g.g.o.M(
      g.g.G.Rj,
      {
        xmlns: g.g.o.nq,
        "xmlns:html": g.g.o.ol,
        "xmlns:xlink": g.g.o.bf,
        version: "1.1",
        class: "blocklyBlockDragSurface",
      },
      this.Ln
    )),
    (this.Cg = g.g.o.M(g.g.G.rc, {}, this.ab)));
};
function Nb(a, c) {
  if (a.Cg.childNodes.length) throw Error("Already dragging a block.");
  a.Cg.appendChild(c);
  a.ab.style.display = "block";
  a.qp = new g.g.V(0, 0);
}
b.Xk = function (a, c) {
  this.qp = new g.g.V(a * this.tj, c * this.tj);
  a = this.qp.x;
  c = this.qp.y;
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.ab.style.display = "block";
  g.g.o.cp(this.ab, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.Hv = function () {
  var a = g.g.mf(this.ab);
  return new g.g.V(a.x / this.tj, a.y / this.tj);
};
b.oc = function () {
  return this.Cg;
};
b.Jq = function (a) {
  a
    ? a.appendChild(this.Cg.firstChild)
    : this.Cg.removeChild(this.Cg.firstChild);
  this.ab.style.display = "none";
  if (this.Cg.childNodes.length) throw Error("Drag group was not cleared.");
  this.qp = null;
};
g.H = function () {};
g.H.qu = null;
g.H.vf = null;
g.H.UC = null;
g.H.Gp = 16;
g.H.jy = 1;
g.H.ey = 12;
g.H.kz = 16;
g.H.Rs = 0.25;
g.H.gu = null;
g.H.Mk = null;
g.H.Zf = "";
g.H.dg = "";
g.H.Wa = function () {
  if (!g.H.hg) {
    var a = document.createElement("div");
    a.className = "blocklyDropDownDiv";
    (g.bs || document.body).appendChild(a);
    g.H.hg = a;
    var c = document.createElement("div");
    c.className = "blocklyDropDownContent";
    a.appendChild(c);
    g.H.Fh = c;
    c = document.createElement("div");
    c.className = "blocklyDropDownArrow";
    a.appendChild(c);
    g.H.cf = c;
    g.H.hg.style.opacity = 0;
    g.H.hg.style.transition =
      "transform " + g.H.Rs + "s, opacity " + g.H.Rs + "s";
    a.addEventListener("focusin", function () {
      g.g.o.Ha(a, "blocklyFocused");
    });
    a.addEventListener("focusout", function () {
      g.g.o.wc(a, "blocklyFocused");
    });
  }
};
g.H.BK = function (a) {
  g.H.qu = a;
};
g.H.mB = function () {
  return g.H.Fh;
};
g.H.cH = function () {
  g.H.Fh.textContent = "";
  g.H.Fh.style.width = "";
};
g.H.$f = function (a, c) {
  g.H.hg.style.backgroundColor = a;
  g.H.hg.style.borderColor = c;
};
g.H.qO = function (a, c, d, e) {
  return g.H.iD(g.H.vB(c), a, d, e);
};
g.H.hD = function (a, c) {
  g.H.UC = !0;
  g.H.iD(g.H.wB(a), a, c, void 0);
};
g.H.vB = function (a) {
  var c = a.Ma(),
    d = c.getBBox(),
    e = a.u.scale;
  a = d.height * e;
  d = d.width * e;
  c = g.g.style.ik(c);
  return new g.g.Rect(c.y, c.y + a, c.x, c.x + d);
};
g.H.wB = function (a) {
  a = bc(a);
  return new g.g.Rect(a.top, a.bottom, a.left, a.right);
};
g.H.iD = function (a, c, d, e) {
  var f = a.left + (a.right - a.left) / 2,
    h = a.bottom;
  a = a.top;
  e && (a += e);
  e = c.W();
  for (var k = e.u; k.options.pc; ) k = k.options.pc;
  g.H.BK(u(k).parentNode);
  return g.H.show(c, e.L, f, h, f, a, d);
};
g.H.show = function (a, c, d, e, f, h, k) {
  g.H.vf = a;
  g.H.Mk = k || null;
  a = g.H.hg;
  a.style.direction = c ? "rtl" : "ltr";
  c = g.Gg();
  g.H.Zf = c.Jb.Uf();
  g.H.dg = c.Jg().Uf();
  g.g.o.Ha(a, g.H.Zf);
  g.g.o.Ha(a, g.H.dg);
  return g.H.Po(d, e, f, h);
};
g.H.WH = function () {
  var a = g.g.style.ik(g.H.qu),
    c = g.g.style.Nh(g.H.qu);
  return {
    left: a.x,
    right: a.x + c.width,
    top: a.y,
    bottom: a.y + c.height,
    width: c.width,
    height: c.height,
  };
};
g.H.gI = function (a, c, d, e) {
  var f = g.H.WH(),
    h = g.g.style.Nh(g.H.hg);
  return c + h.height < f.bottom
    ? g.H.uB(a, c, f, h)
    : e - h.height > f.top
    ? g.H.tB(d, e, f, h)
    : c + h.height < document.documentElement.clientHeight
    ? g.H.uB(a, c, f, h)
    : e - h.height > document.documentElement.clientTop
    ? g.H.tB(d, e, f, h)
    : g.H.hI(a, f, h);
};
g.H.uB = function (a, c, d, e) {
  a = g.H.Gv(a, d.left, d.right, e.width);
  return {
    Sv: a.em,
    Tv: c,
    pv: a.em,
    qv: c + g.H.kz,
    Ql: a.Ql,
    ku: -(g.H.Gp / 2 + g.H.jy),
    zq: !0,
    ju: !0,
  };
};
g.H.tB = function (a, c, d, e) {
  a = g.H.Gv(a, d.left, d.right, e.width);
  return {
    Sv: a.em,
    Tv: c - e.height,
    pv: a.em,
    qv: c - e.height - g.H.kz,
    Ql: a.Ql,
    ku: e.height - 2 * g.H.jy - g.H.Gp / 2,
    zq: !1,
    ju: !0,
  };
};
g.H.hI = function (a, c, d) {
  a = g.H.Gv(a, c.left, c.right, d.width);
  return {
    Sv: a.em,
    Tv: 0,
    pv: a.em,
    qv: 0,
    zq: null,
    Ql: null,
    ku: null,
    ju: !1,
  };
};
g.H.Gv = function (a, c, d, e) {
  var f = a;
  a = g.g.Vd.Xj(c, a - e / 2, d - e);
  f -= g.H.Gp / 2;
  c = g.g.Vd.Xj(g.H.ey, f - a, e - g.H.ey - g.H.Gp);
  return { Ql: c, em: a };
};
g.H.isVisible = function () {
  return !!g.H.vf;
};
g.H.po = function (a, c) {
  g.H.vf === a && (c ? g.H.Ui() : g.H.Ia());
};
g.H.Ia = function () {
  var a = g.H.hg;
  a.style.transform = "translate(0, 0)";
  a.style.opacity = 0;
  g.H.gu = setTimeout(function () {
    g.H.Ui();
  }, 1e3 * g.H.Rs);
  g.H.Mk && (g.H.Mk(), (g.H.Mk = null));
};
g.H.Ui = function () {
  if (g.H.isVisible()) {
    g.H.gu && clearTimeout(g.H.gu);
    var a = g.H.hg;
    a.style.transform = "";
    a.style.left = "";
    a.style.top = "";
    a.style.opacity = 0;
    a.style.display = "none";
    a.style.backgroundColor = "";
    a.style.borderColor = "";
    g.H.Mk && (g.H.Mk(), (g.H.Mk = null));
    g.H.cH();
    g.H.vf = null;
    g.H.Zf && (g.g.o.wc(a, g.H.Zf), (g.H.Zf = ""));
    g.H.dg && (g.g.o.wc(a, g.H.dg), (g.H.dg = ""));
    na(g.Gg());
  }
};
g.H.Po = function (a, c, d, e) {
  a = g.H.gI(a, c, d, e);
  a.ju
    ? ((g.H.cf.style.display = ""),
      (g.H.cf.style.transform =
        "translate(" + a.Ql + "px," + a.ku + "px) rotate(45deg)"),
      g.H.cf.setAttribute(
        "class",
        a.zq
          ? "blocklyDropDownArrow blocklyArrowTop"
          : "blocklyDropDownArrow blocklyArrowBottom"
      ))
    : (g.H.cf.style.display = "none");
  c = Math.floor(a.Sv);
  d = Math.floor(a.Tv);
  e = Math.floor(a.pv);
  var f = Math.floor(a.qv),
    h = g.H.hg;
  h.style.left = c + "px";
  h.style.top = d + "px";
  h.style.display = "block";
  h.style.opacity = 1;
  h.style.transform = "translate(" + (e - c) + "px," + (f - d) + "px)";
  return !!a.zq;
};
g.H.jO = function () {
  if (g.H.vf) {
    var a = g.H.vf,
      c = a.W();
    a = g.H.UC ? g.H.wB(a) : g.H.vB(c);
    c = a.left + (a.right - a.left) / 2;
    g.H.Po(c, a.bottom, c, a.top);
  } else g.H.Ia();
};
g.Xi = function (a, c) {
  g.YG();
  "string" == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a));
  if (!a || !g.g.o.containsNode(document, a))
    throw Error("Error: container is not in current document.");
  c = new g.Fd(c || {});
  var d = document.createElement("div");
  d.className = "injectionDiv";
  d.tabIndex = 0;
  g.g.ta.md(d, g.g.ta.State.tF, g.i.WORKSPACE_ARIA_LABEL);
  a.appendChild(d);
  a = g.Ae(d, c);
  var e = new g.ky(d),
    f = new g.aA(d),
    h = g.nH(a, c, e, f);
  g.DI(h);
  g.Co = h;
  g.Mm(h);
  d.addEventListener("focusin", function () {
    g.Co = h;
  });
  return h;
};
g.Ae = function (a, c) {
  a.setAttribute("dir", "LTR");
  g.$c.Xi(c.uI, c.mj);
  a = g.g.o.M(
    g.g.G.Rj,
    {
      xmlns: g.g.o.nq,
      "xmlns:html": g.g.o.ol,
      "xmlns:xlink": g.g.o.bf,
      version: "1.1",
      class: "blocklySvg",
      tabindex: "0",
    },
    a
  );
  var d = g.g.o.M(g.g.G.uy, {}, a);
  c.Lv = g.Lj.Wa(String(Math.random()).substring(2), c.GB, d);
  return a;
};
g.nH = function (a, c, d, e) {
  c.pc = null;
  var f = new g.tb(c, d, e);
  c = f.options;
  f.scale = c.rb.mD;
  a.appendChild(f.Wa("blocklyMainBackground"));
  g.g.o.Ha(aa(f), f.Jb.Uf());
  g.g.o.Ha(aa(f), f.Jg().Uf());
  !c.no && c.Rg && ((d = Uc(f, g.g.G.Rj)), g.g.o.rk(d, a));
  c.KB && Sc(f);
  c.rb && c.rb.controls && Tc(f);
  f.yc.subscribe(a, "workspaceBackgroundColour", "background-color");
  f.translate(0, 0);
  c.readOnly ||
    f.Fc() ||
    G(f, function (h) {
      if (!f.Ec() && !f.Fc() && -1 != g.h.YD.indexOf(h.type)) {
        var k = Object.create(null),
          l = f.Vc(),
          m = f.scale;
        k.L = f.L;
        k.Rb = l.Rb / m;
        k.bc = l.bc / m;
        k.GD = (l.Rb + l.Gb) / m;
        k.FD = (l.bc + l.Nb) / m;
        Wc(f)
          ? ((l = Ba(f)),
            (k.gd = l.left),
            (k.Uc = l.top),
            (k.EA = l.right),
            (k.BA = l.bottom))
          : ((k.gd = l.gd / m),
            (k.Uc = l.Uc / m),
            (k.EA = (l.gd + l.gf) / m),
            (k.BA = (l.Uc + l.Md) / m));
        if (k.Uc < k.bc || k.BA > k.FD || k.gd < k.Rb || k.EA > k.GD) {
          l = null;
          h && ((l = g.h.oc()), g.h.ga(h.group));
          switch (h.type) {
            case g.h.Hp:
            case g.h.Ts:
              var n = f.td(h.lb);
              n && (n = n.Qd());
              break;
            case g.h.Pp:
            case g.h.Qp:
              n = f.Nq[h.vg] || null;
          }
          if (n) {
            m = Fc(n);
            m.height = m.bottom - m.top;
            m.width = m.right - m.left;
            var q = k.bc,
              r = k.FD - m.height;
            r = Math.max(q, r);
            q = g.g.Vd.Xj(q, m.top, r) - m.top;
            r = k.Rb;
            var w = k.GD - m.width;
            k.L ? (r = Math.min(w, r)) : (w = Math.max(r, w));
            n.moveBy(g.g.Vd.Xj(r, m.left, w) - m.left, q);
          }
          h &&
            (!h.group &&
              n &&
              console.warn(
                "Moved object in bounds but there was no event group. This may break undo."
              ),
            null !== l && g.h.ga(l));
        }
      }
    });
  g.Mm(f);
  g.ba.Wa();
  g.H.Wa();
  g.J.Wa();
  return f;
};
g.DI = function (a) {
  var c = a.options,
    d = u(a);
  g.ya(d.parentNode, "contextmenu", null, function (f) {
    g.g.Cr(f) || f.preventDefault();
  });
  d = g.ya(window, "resize", null, function () {
    g.Dc(!0);
    g.Mm(a);
  });
  a.rs = d;
  g.Xi.QG();
  if (c.Rg) {
    d = a.Ka;
    var e = a.ec(!0);
    d
      ? d.Y()
      : e && (e.Y(a), e.show(c.Rg), "function" == typeof e.ux && e.ux());
  }
  d = g.Sa.Oc;
  c.KB && (d = a.pd.Y(d));
  c.rb && c.rb.controls && a.dl.Y(d);
  c.Yc && c.Yc.scrollbars
    ? ((a.Pa = new g.vn(a)), a.Pa.resize())
    : a.fp({ x: 0.5, y: 0.5 });
  c.xI && g.Xi.QI(c.mj, a);
};
g.Xi.QG = function () {
  g.EH ||
    (g.ya(document, "scroll", null, function () {
      for (var a = g.Ob.getAll(), c = 0, d; (d = a[c]); c++) d.yp && d.yp();
    }),
    g.ya(document, "keydown", null, g.Lo),
    g.ed(document, "touchend", null, g.ej),
    g.ed(document, "touchcancel", null, g.ej),
    g.g.userAgent.ql &&
      g.ya(window, "orientationchange", document, function () {
        g.Mm(g.Gg());
      }));
  g.EH = !0;
};
g.Xi.QI = function (a, c) {
  function d() {
    for (; f.length; ) g.Oa(f.pop());
    e.preload();
  }
  var e = c.Ei;
  e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
  e.load(
    [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"],
    "disconnect"
  );
  e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
  var f = [];
  f.push(g.ya(document, "mousemove", null, d, !0));
  f.push(g.ya(document, "touchstart", null, d, !0));
};
g.Ed = function (a, c) {
  this.ED = c || "";
  this.bD = Object.create(null);
  if (a) for (a = a.split(","), c = 0; c < a.length; c++) this.bD[a[c]] = !0;
  this.reset();
};
g.Ed.ft = "DEVELOPER_VARIABLE";
g.Ed.prototype.reset = function () {
  this.Ag = Object.create(null);
  this.MA = Object.create(null);
  this.Qa = null;
};
g.Ed.prototype.Ax = function (a) {
  this.Qa = a;
};
g.Ed.prototype.De = function (a, c) {
  if (c == g.uc) {
    var d = a;
    this.Qa
      ? (d = (d = this.Qa.Wf(d)) ? d.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (d = null));
    d && (a = d);
  }
  d = a.toLowerCase() + "_" + c;
  var e = c == g.uc || c == g.Ed.ft ? this.ED : "";
  if (d in this.Ag) return e + this.Ag[d];
  a = P(this, a, c);
  this.Ag[d] = a.substr(e.length);
  return a;
};
function P(a, c, d) {
  c
    ? ((c = encodeURI(c.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(c[0]) && (c = "my_" + c))
    : (c = g.i.UNNAMED_KEY || "unnamed");
  for (var e = ""; a.MA[c + e] || c + e in a.bD; ) e = e ? e + 1 : 2;
  c += e;
  a.MA[c] = !0;
  return (d == g.uc || d == g.Ed.ft ? a.ED : "") + c;
}
g.Ed.kf = function (a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.Ca = {};
g.Ca.ez = g.tn;
g.Ca.ty = "x";
g.Ca.NG = function (a) {
  var c = Ha(a, "procedures_defnoreturn").map(function (d) {
    return d.Qi();
  });
  a = Ha(a, "procedures_defreturn").map(function (d) {
    return d.Qi();
  });
  c.sort(g.Ca.WC);
  a.sort(g.Ca.WC);
  return [c, a];
};
g.Ca.WC = function (a, c) {
  return a[0].toLowerCase().localeCompare(c[0].toLowerCase());
};
g.Ca.er = function (a, c) {
  if (c.Lb) return a;
  for (a = a || g.i.UNNAMED_KEY || "unnamed"; !g.Ca.II(a, c.u, c); ) {
    var d = a.match(/^(.*?)(\d+)$/);
    a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2";
  }
  return a;
};
g.Ca.II = function (a, c, d) {
  return !g.Ca.KI(a, c, d);
};
g.Ca.KI = function (a, c, d) {
  c = D(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e] != d && c[e].Qi) {
      var f = c[e].Qi();
      if (g.Ed.kf(f[0], a)) return !0;
    }
  return !1;
};
g.Ca.lx = function (a) {
  a = a.trim();
  var c = g.Ca.er(a, this.W()),
    d = this.getValue();
  if (d != a && d != c) {
    a = D(this.W().u, !1);
    for (var e = 0; e < a.length; e++) a[e].Fm && a[e].Fm(d, c);
  }
  return c;
};
g.Ca.fk = function (a) {
  function c(h, k) {
    for (var l = 0; l < h.length; l++) {
      var m = h[l][0],
        n = h[l][1],
        q = g.g.xml.createElement("block");
      q.setAttribute("type", k);
      q.setAttribute("gap", 16);
      var r = g.g.xml.createElement("mutation");
      r.setAttribute("name", m);
      q.appendChild(r);
      for (m = 0; m < n.length; m++) {
        var w = g.g.xml.createElement("arg");
        w.setAttribute("name", n[m]);
        r.appendChild(w);
      }
      d.push(q);
    }
  }
  var d = [];
  if (g.aa.procedures_defnoreturn) {
    var e = g.g.xml.createElement("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = g.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFNORETURN_PROCEDURE));
    e.appendChild(f);
    d.push(e);
  }
  g.aa.procedures_defreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = g.g.xml.createElement("field")),
    f.setAttribute("name", "NAME"),
    f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    d.push(e));
  g.aa.procedures_ifreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    d.push(e));
  d.length && d[d.length - 1].setAttribute("gap", 24);
  a = g.Ca.NG(a);
  c(a[0], "procedures_callnoreturn");
  c(a[1], "procedures_callreturn");
  return d;
};
g.Ca.AD = function (a) {
  for (
    var c = [], d = Ha(a, "procedures_mutatorarg"), e = 0, f;
    (f = d[e]);
    e++
  )
    c.push(E(f, "NAME"));
  d = g.g.xml.createElement("xml");
  e = g.g.xml.createElement("block");
  e.setAttribute("type", "procedures_mutatorarg");
  f = g.g.xml.createElement("field");
  f.setAttribute("name", "NAME");
  c = g.g.xml.createTextNode(g.$.iB(g.Ca.ty, c));
  f.appendChild(c);
  e.appendChild(f);
  d.appendChild(e);
  Xc(a, d);
};
g.Ca.fJ = function (a) {
  if (a.type == g.h.Jp && "mutator" === a.su && a.vm) {
    a = g.Ob.bo(a.Pc).td(a.lb);
    var c = a.type;
    if ("procedures_defnoreturn" == c || "procedures_defreturn" == c)
      (a = a.kd.s), g.Ca.AD(a), G(a, g.Ca.eJ);
  }
};
g.Ca.eJ = function (a) {
  (a.type != g.h.Hp && a.type != g.h.Ss && a.type != g.h.TD) ||
    g.Ca.AD(g.Ob.bo(a.Pc));
};
g.Ca.XH = function (a, c) {
  var d = [];
  c = D(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e].Ee) {
      var f = c[e].Ee();
      f && g.Ed.kf(f, a) && d.push(c[e]);
    }
  return d;
};
g.Ca.Ko = function (a) {
  var c = g.h.Za,
    d = a.Qi()[0],
    e = a.vb(!0);
  a = g.Ca.XH(d, a.u);
  d = 0;
  for (var f; (f = a[d]); d++) {
    var h = f.vb();
    h = h && g.T.fe(h);
    f.Vb(e);
    var k = f.vb();
    k = k && g.T.fe(k);
    h != k &&
      ((g.h.Za = !1),
      g.h.Fa(new g.h.gh(f, "mutation", null, h, k)),
      (g.h.Za = c));
  }
};
g.Ca.ho = function (a, c) {
  c = c.Ib(!1);
  for (var d = 0; d < c.length; d++)
    if (c[d].Qi) {
      var e = c[d].Qi();
      if (e && g.Ed.kf(e[0], a)) return c[d];
    }
  return null;
};
g.Tb = {};
g.Tb.names = {
  DE: "escape",
  Ij: "delete",
  hE: "copy",
  oE: "cut",
  dG: "paste",
  zG: "undo",
  iG: "redo",
};
g.Tb.$J = function () {
  var a = {
    name: g.Tb.names.DE,
    Ya: function (c) {
      return !c.options.readOnly;
    },
    za: function () {
      g.Dc();
      return !0;
    },
  };
  g.gb.C.register(a);
  I(g.g.R.gt, a.name);
};
g.Tb.hx = function () {
  var a = {
    name: g.Tb.names.Ij,
    Ya: function (c) {
      return !c.options.readOnly && g.selected && g.selected.le();
    },
    za: function (c, d) {
      d.preventDefault();
      if (g.kg.nk()) return !1;
      g.PA();
      return !0;
    },
  };
  g.gb.C.register(a);
  I(g.g.R.Ij, a.name);
  I(g.g.R.RD, a.name);
};
g.Tb.SJ = function () {
  var a = {
    name: g.Tb.names.hE,
    Ya: function (d) {
      return (
        !d.options.readOnly &&
        !g.kg.nk() &&
        g.selected &&
        g.selected.le() &&
        g.selected.Fc()
      );
    },
    za: function () {
      g.Dc();
      g.Gu(g.selected);
      return !0;
    },
  };
  g.gb.C.register(a);
  var c = J(g.g.R.Xs, [g.g.R.li]);
  I(c, a.name);
  c = J(g.g.R.Xs, [g.g.R.fl]);
  I(c, a.name);
  c = J(g.g.R.Xs, [g.g.R.yl]);
  I(c, a.name);
};
g.Tb.TJ = function () {
  var a = {
    name: g.Tb.names.oE,
    Ya: function (d) {
      return (
        !d.options.readOnly &&
        !g.kg.nk() &&
        g.selected &&
        g.selected.le() &&
        g.selected.Fc() &&
        !g.selected.u.Xf
      );
    },
    za: function () {
      g.Gu(g.selected);
      g.PA();
      return !0;
    },
  };
  g.gb.C.register(a);
  var c = J(g.g.R.uq, [g.g.R.li]);
  I(c, a.name);
  c = J(g.g.R.uq, [g.g.R.fl]);
  I(c, a.name);
  c = J(g.g.R.uq, [g.g.R.yl]);
  I(c, a.name);
};
g.Tb.kK = function () {
  var a = {
    name: g.Tb.names.dG,
    Ya: function (d) {
      return !d.options.readOnly && !g.kg.nk();
    },
    za: function () {
      return g.fs();
    },
  };
  g.gb.C.register(a);
  var c = J(g.g.R.$t, [g.g.R.li]);
  I(c, a.name);
  c = J(g.g.R.$t, [g.g.R.fl]);
  I(c, a.name);
  c = J(g.g.R.$t, [g.g.R.yl]);
  I(c, a.name);
};
g.Tb.kx = function () {
  var a = {
    name: g.Tb.names.zG,
    Ya: function (d) {
      return !d.options.readOnly && !g.kg.nk();
    },
    za: function (d) {
      g.Dc();
      La(d, !1);
      return !0;
    },
  };
  g.gb.C.register(a);
  var c = J(g.g.R.Pl, [g.g.R.li]);
  I(c, a.name);
  c = J(g.g.R.Pl, [g.g.R.fl]);
  I(c, a.name);
  c = J(g.g.R.Pl, [g.g.R.yl]);
  I(c, a.name);
};
g.Tb.jx = function () {
  var a = {
    name: g.Tb.names.iG,
    Ya: function (d) {
      return !g.kg.nk() && !d.options.readOnly;
    },
    za: function (d) {
      g.Dc();
      La(d, !0);
      return !0;
    },
  };
  g.gb.C.register(a);
  var c = J(g.g.R.Pl, [g.g.R.rh, g.g.R.li]);
  I(c, a.name);
  c = J(g.g.R.Pl, [g.g.R.rh, g.g.R.fl]);
  I(c, a.name);
  c = J(g.g.R.Pl, [g.g.R.rh, g.g.R.yl]);
  I(c, a.name);
  c = J(g.g.R.GG, [g.g.R.li]);
  I(c, a.name);
};
g.Tb.VJ = function () {
  g.Tb.$J();
  g.Tb.hx();
  g.Tb.SJ();
  g.Tb.TJ();
  g.Tb.kK();
  g.Tb.kx();
  g.Tb.jx();
};
g.gb = function () {
  g.gb.C = this;
  this.Ke = Object.create(null);
  this.xm = Object.create(null);
  g.Tb.VJ();
  g.navigation.hK();
};
g.gb.Mr = { zN: g.g.R.rh, yL: g.g.R.li, nL: g.g.R.fl, rM: g.g.R.yl };
g.gb.prototype.register = function (a, c) {
  if (this.Ke[a.name] && !c)
    throw Error('Shortcut with name "' + a.name + '" already exists.');
  this.Ke[a.name] = a;
};
g.gb.prototype.unregister = function (a) {
  if (!this.Ke[a])
    return (
      console.warn('Keyboard shortcut with name "' + a + '" not found.'), !1
    );
  for (var c in this.xm) {
    var d = c,
      e = this.xm[d],
      f = e.indexOf(a);
    -1 < f && (e.splice(f, 1), 0 == e.length && delete this.xm[d]);
  }
  delete this.Ke[a];
  return !0;
};
function I(a, c, d) {
  var e = g.gb.C,
    f = e.xm[a];
  if (f && !d)
    throw Error(
      'Shortcut with name "' + c + '" collides with shortcuts ' + f.toString()
    );
  f && d ? f.unshift(c) : (e.xm[a] = [c]);
}
g.gb.prototype.Lo = function (a, c) {
  var d = "";
  for (e in g.gb.Mr) c.getModifierState(e) && ("" != d && (d += "+"), (d += e));
  "" != d && c.keyCode
    ? (d = d + "+" + c.keyCode)
    : c.keyCode && (d = c.keyCode.toString());
  d = this.xm[d] || [];
  if (!d) return !1;
  var e = 0;
  for (var f; (f = d[e]); e++)
    if (((f = this.Ke[f]), (!f.Ya || f.Ya(a)) && f.za && f.za(a, c, f)))
      return !0;
  return !1;
};
function J(a, c) {
  var d = "";
  if (c) {
    for (var e = g.g.object.values(g.gb.Mr), f = 0, h; (h = c[f]); f++)
      if (0 > e.indexOf(h)) throw Error(h + " is not a valid modifier key.");
    for (var k in g.gb.Mr)
      -1 < c.indexOf(g.gb.Mr[k]) && ("" != d && (d += "+"), (d += k));
  }
  "" != d && a ? (d = d + "+" + a) : a && (d = a.toString());
  return d;
}
new g.gb();
g.yn = function (a, c, d, e) {
  this.u = a;
  this.name = c;
  this.type = d || "";
  this.Rv = e || g.g.Lh();
  g.h.Fa(new g.h.af(this));
};
g.yn.prototype.La = function () {
  return this.Rv;
};
g.yn.vA = function (a, c) {
  a = a.name.toLowerCase();
  c = c.name.toLowerCase();
  return a < c ? -1 : a == c ? 0 : 1;
};
g.$ = {};
g.$.ez = g.uc;
g.$.gA = function (a) {
  var c = D(a, !1);
  a = Object.create(null);
  for (var d = 0; d < c.length; d++) {
    var e = c[d].Oh();
    if (e)
      for (var f = 0; f < e.length; f++) {
        var h = e[f],
          k = h.La();
        k && (a[k] = h);
      }
  }
  c = [];
  for (k in a) c.push(a[k]);
  return c;
};
g.$.Zx = {};
g.$.LG = function (a) {
  a = D(a, !1);
  for (var c = Object.create(null), d = 0, e; (e = a[d]); d++) {
    var f = e.VN;
    !f &&
      e.cI &&
      ((f = e.cI),
      g.$.Zx[e.type] ||
        (console.warn(
          "Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" +
            e.type +
            "')"
        ),
        (g.$.Zx[e.type] = !0)));
    if (f) for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0;
  }
  return Object.keys(c);
};
g.$.fk = function (a) {
  var c = [],
    d = document.createElement("button");
  d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
  d.setAttribute("callbackKey", "CREATE_VARIABLE");
  Zc(a, function (e) {
    g.$.JA(e.Es);
  });
  c.push(d);
  a = g.$.RH(a);
  return (c = c.concat(a));
};
g.$.RH = function (a) {
  a = a.lo("");
  var c = [];
  if (0 < a.length) {
    var d = a[a.length - 1];
    if (g.aa.variables_set) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", "variables_set");
      e.setAttribute("gap", g.aa.math_change ? 8 : 24);
      e.appendChild(g.$.ao(d));
      c.push(e);
    }
    g.aa.math_change &&
      ((e = g.g.xml.createElement("block")),
      e.setAttribute("type", "math_change"),
      e.setAttribute("gap", g.aa.variables_get ? 20 : 8),
      e.appendChild(g.$.ao(d)),
      (d = g.T.Pe(
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
      )),
      e.appendChild(d),
      c.push(e));
    if (g.aa.variables_get) {
      a.sort(g.yn.vA);
      d = 0;
      for (var f; (f = a[d]); d++)
        (e = g.g.xml.createElement("block")),
          e.setAttribute("type", "variables_get"),
          e.setAttribute("gap", 8),
          e.appendChild(g.$.ao(f)),
          c.push(e);
    }
  }
  return c;
};
g.$.Qz = "ijkmnopqrstuvwxyzabcdefgh";
g.$.TH = function (a) {
  return g.$.iB(g.$.Qz.charAt(0), a.vv());
};
g.$.iB = function (a, c) {
  if (!c.length) return a;
  for (var d = g.$.Qz, e = "", f = d.indexOf(a); ; ) {
    for (var h = !1, k = 0; k < c.length; k++)
      if (c[k].toLowerCase() == a) {
        h = !0;
        break;
      }
    if (!h) return a;
    f++;
    f == d.length && ((f = 0), (e = Number(e) + 1));
    a = d.charAt(f) + e;
  }
};
g.$.JA = function (a, c, d) {
  function e(h) {
    g.$.XC(g.i.NEW_VARIABLE_TITLE, h, function (k) {
      if (k) {
        var l = g.$.hJ(k, a);
        if (l) {
          if (l.type == f)
            var m = g.i.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
          else
            (m = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (m = m.replace("%1", l.name).replace("%2", l.type));
          g.alert(m, function () {
            e(k);
          });
        } else a.hf(k, f), c && c(k);
      } else c && c(null);
    });
  }
  var f = d || "";
  e("");
};
g.$.hf = g.$.JA;
g.$.ps = function (a, c) {
  function d(e) {
    var f = g.i.RENAME_VARIABLE_TITLE.replace("%1", c.name);
    g.$.XC(f, e, function (h) {
      if (h) {
        var k = g.$.iJ(h, c.type, a);
        k
          ? ((k = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              k.name
            ).replace("%2", k.type)),
            g.alert(k, function () {
              d(h);
            }))
          : a.rj(c.La(), h);
      }
    });
  }
  d("");
};
g.$.XC = function (a, c, d) {
  g.prompt(a, c, function (e) {
    e &&
      ((e = e.replace(/[\s\xa0]+/g, " ").trim()),
      e == g.i.RENAME_VARIABLE || e == g.i.NEW_VARIABLE) &&
      (e = null);
    d(e);
  });
};
g.$.iJ = function (a, c, d) {
  d = d.Qa.gk();
  a = a.toLowerCase();
  for (var e = 0, f; (f = d[e]); e++)
    if (f.name.toLowerCase() == a && f.type != c) return f;
  return null;
};
g.$.hJ = function (a, c) {
  c = c.Qa.gk();
  a = a.toLowerCase();
  for (var d = 0, e; (e = c[d]); d++) if (e.name.toLowerCase() == a) return e;
  return null;
};
g.$.ao = function (a) {
  var c = g.g.xml.createElement("field");
  c.setAttribute("name", "VAR");
  c.setAttribute("id", a.La());
  c.setAttribute("variabletype", a.type);
  a = g.g.xml.createTextNode(a.name);
  c.appendChild(a);
  return c;
};
g.$.pr = function (a, c, d, e) {
  var f = g.$.ud(a, c, d, e);
  f || (f = g.$.oH(a, c, d, e));
  return f;
};
g.$.ud = function (a, c, d, e) {
  var f = a.nj,
    h = null;
  if (c && ((h = a.Wf(c)), !h && f && (h = f.Wf(c)), h)) return h;
  if (d) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    h = a.ud(d, e);
    !h && f && (h = f.ud(d, e));
  }
  return h;
};
g.$.oH = function (a, c, d, e) {
  var f = a.nj;
  d || (d = g.$.TH(a.Xf ? a.$a : a));
  return f ? f.hf(d, e, c) : a.hf(d, e, c);
};
g.$.jB = function (a, c) {
  a = a.gk();
  var d = [];
  if (c.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == c.indexOf(f) && d.push(f);
    }
  return d;
};
g.VERSION = "uncompiled";
g.Co = null;
g.selected = null;
g.fm = [];
g.Wl = null;
g.Kq = null;
g.Bu = null;
g.MN = null;
g.bs = null;
g.OK = function (a) {
  return new g.g.se(a.lA, a.kA);
};
g.kO = function (a) {
  Ea(a);
};
g.Mm = function (a) {
  for (; a.options.pc; ) a = a.options.pc;
  var c = u(a),
    d = c.parentNode;
  if (d) {
    var e = d.offsetWidth;
    d = d.offsetHeight;
    c.lA != e && (c.setAttribute("width", e + "px"), (c.lA = e));
    c.kA != d && (c.setAttribute("height", d + "px"), (c.kA = d));
    a.resize();
  }
};
g.Lo = function (a) {
  var c = g.Co;
  !c || g.g.Cr(a) || (c.pa && !c.isVisible()) || g.gb.C.Lo(c, a);
};
g.PA = function () {
  var a = g.selected;
  a.u.Xf || (g.h.ga(!0), g.Dc(), a.I(!0, !0), g.h.ga(!1));
};
g.Gu = function (a) {
  if (a.tm) a = null;
  else {
    var c = g.T.Ah(a, !0);
    g.T.wH(c);
    var d = a.Xa();
    c.setAttribute("x", a.L ? -d.x : d.x);
    c.setAttribute("y", d.y);
    a = { xml: c, source: a.u, YK: g.g.wv(a, !0) };
  }
  a && ((g.Wl = a.xml), (g.Kq = a.source), (g.Bu = a.YK));
};
g.fs = function () {
  if (!g.Wl) return !1;
  var a = g.Kq;
  a.Xf && (a = a.$a);
  return g.Bu && Ja(a, g.Bu) ? (g.h.ga(!0), a.fs(g.Wl), g.h.ga(!1), !0) : !1;
};
g.duplicate = function (a) {
  var c = g.Wl,
    d = g.Kq;
  g.Gu(a);
  a.u.fs(g.Wl);
  g.Wl = c;
  g.Kq = d;
};
g.gO = function (a) {
  g.g.Cr(a) || a.preventDefault();
};
g.Dc = function (a) {
  g.J.Ia();
  g.ba.Ia();
  g.H.Ui();
  if (!a) {
    a = g.Gg();
    if (a.pd && a.pd.Eg) {
      var c = a.pd;
      c.Eg.isVisible() && (c.Eg.Ia(), ub(c, !1));
    }
    (a = a.Ka) && a.ec() && a.ec().Sl && bb(a, null);
  }
};
g.Gg = function () {
  return g.Co;
};
g.alert = function (a, c) {
  alert(a);
  c && c();
};
g.confirm = function (a, c) {
  c(confirm(a));
};
g.prompt = function (a, c, d) {
  d(prompt(a, c));
};
g.NI = function (a) {
  return function () {
    lc(this, a);
  };
};
g.dm = function (a) {
  for (var c = 0; c < a.length; c++) {
    var d = a[c];
    if (d) {
      var e = d.type;
      null == e || "" === e
        ? console.warn(
            "Block definition #" +
              c +
              " in JSON array is missing a type attribute. Skipping."
          )
        : (g.aa[e] &&
            console.warn(
              "Block definition #" +
                c +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (g.aa[e] = { Y: g.NI(d) }));
    } else
      console.warn(
        "Block definition #" + c + " in JSON array is " + d + ". Skipping."
      );
  }
};
g.ya = function (a, c, d, e, f, h) {
  function k(w) {
    var F = !f;
    w = g.Touch.KK(w);
    for (var oa = 0, wa; (wa = w[oa]); oa++)
      if (!F || g.Touch.Dx(wa))
        g.Touch.CK(wa), d ? e.call(d, wa) : e(wa), (l = !0);
  }
  var l = !1,
    m = [];
  if (g.g.global.PointerEvent && c in g.Touch.og)
    for (var n = 0, q; (q = g.Touch.og[c][n]); n++)
      a.addEventListener(q, k, !1), m.push([a, q, k]);
  else if ((a.addEventListener(c, k, !1), m.push([a, c, k]), c in g.Touch.og)) {
    var r = function (w) {
      k(w);
      var F = !h;
      l && F && w.preventDefault();
    };
    for (n = 0; (q = g.Touch.og[c][n]); n++)
      a.addEventListener(q, r, !1), m.push([a, q, r]);
  }
  return m;
};
g.ed = function (a, c, d, e) {
  function f(n) {
    d ? e.call(d, n) : e(n);
  }
  var h = [];
  if (g.g.global.PointerEvent && c in g.Touch.og)
    for (var k = 0, l; (l = g.Touch.og[c][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f]);
  else if ((a.addEventListener(c, f, !1), h.push([a, c, f]), c in g.Touch.og)) {
    var m = function (n) {
      if (n.changedTouches && 1 == n.changedTouches.length) {
        var q = n.changedTouches[0];
        n.clientX = q.clientX;
        n.clientY = q.clientY;
      }
      f(n);
      n.preventDefault();
    };
    for (k = 0; (l = g.Touch.og[c][k]); k++)
      a.addEventListener(l, m, !1), h.push([a, l, m]);
  }
  return h;
};
g.Oa = function (a) {
  for (; a.length; ) {
    var c = a.pop();
    c[0].removeEventListener(c[1], c[2], !1);
  }
};
g.bj = function (a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
g.AI = function (a) {
  return g.g.Ab.QB(a);
};
g.YG = function () {
  g.rd("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  g.rd("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  g.rd("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  g.rd("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  g.rd("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  g.rd("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  g.rd("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  g.rd("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  g.rd("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  g.rd("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  g.rd("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  g.rd("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  g.rd("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  g.rd("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  g.rd("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  g.rd("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
g.rd = function (a, c, d) {
  for (var e = "Blockly", f = g, h = 0; h < c.length; ++h)
    (e += "." + c[h]), f && (f = f[c[h]]);
  f &&
    f !== d &&
    ((a = (void 0 === d
      ? '%1 has been removed. Use Blockly.Msg["%2"].'
      : '%1 is deprecated and unused. Override Blockly.Msg["%2"].'
    )
      .replace("%1", e)
      .replace("%2", a)),
    console.warn(a));
};
g.pO = function (a) {
  g.bs = a;
};
var gd = {
    ar: "\u0627\u0644\u0639\u0631\u0628\u064a\u0629",
    be: "\u0431\u0435\u043b\u0430\u0440\u0443\u0441\u043a\u0456",
    "be-tarask": "Tara\u0161kievica",
    bg:
      "\u0431\u044a\u043b\u0433\u0430\u0440\u0441\u043a\u0438 \u0435\u0437\u0438\u043a",
    bn: "\u09ac\u09be\u0982\u09b2\u09be",
    br: "Brezhoneg",
    cs: "\u010cesky",
    da: "Dansk",
    de: "Deutsch",
    el: "\u0395\u03bb\u03bb\u03b7\u03bd\u03b9\u03ba\u03ac",
    en: "English",
    eo: "Esperanto",
    es: "Espa\u00f1ol",
    eu: "Euskara",
    fa: "\u0641\u0627\u0631\u0633\u06cc",
    fi: "Suomi",
    fo: "F\u00f8royskt",
    fr: "Fran\u00e7ais",
    gl: "Galego",
    ha: "Hausa",
    he: "\u05e2\u05d1\u05e8\u05d9\u05ea",
    hi: "\u0939\u093f\u0928\u094d\u0926\u0940",
    hu: "Magyar",
    hy: "\u0570\u0561\u0575\u0565\u0580\u0567\u0576",
    ia: "Interlingua",
    id: "Bahasa Indonesia",
    ig: "As\u1ee5s\u1ee5 Igbo",
    is: "\u00cdslenska",
    it: "Italiano",
    ja: "\u65e5\u672c\u8a9e",
    kab: "Taqbaylit",
    ko: "\ud55c\uad6d\uc5b4",
    lt: "Lietuvi\u0173",
    lv: "Latvie\u0161u",
    ms: "Bahasa Melayu",
    my: "\u1019\u103c\u1014\u103a\u1019\u102c\u1005\u102c",
    nb: "Norsk Bokm\u00e5l",
    nl: "Nederlands, Vlaams",
    pl: "Polski",
    pms: "Piemont\u00e8is",
    pt: "Portugu\u00eas",
    "pt-br": "Portugu\u00eas Brasileiro",
    ro: "Rom\u00e2n\u0103",
    ru: "\u0420\u0443\u0441\u0441\u043a\u0438\u0439",
    sc: "Sardu",
    sk: "Sloven\u010dina",
    sl: "Sloven\u0161\u010dina",
    sq: "Shqip",
    sr: "\u0421\u0440\u043f\u0441\u043a\u0438",
    sv: "Svenska",
    th: "\u0e20\u0e32\u0e29\u0e32\u0e44\u0e17\u0e22",
    ti: "\u1275\u130d\u122d\u129b",
    tr: "T\u00fcrk\u00e7e",
    uk: "\u0423\u043a\u0440\u0430\u0457\u043d\u0441\u044c\u043a\u0430",
    ur: "\u0627\u064f\u0631\u062f\u064f\u0648\u202c",
    vi: "Ti\u1ebfng Vi\u1ec7t",
    yo: "\u00c8d\u00e8 Yor\u00f9b\u00e1",
    "zh-hans": "\u7b80\u4f53\u4e2d\u6587",
    "zh-hant": "\u6b63\u9ad4\u4e2d\u6587",
  },
  hd = "ace ar fa he mzn ps ur".split(" "),
  id = window.BlocklyGamesLang,
  jd = window.BlocklyGamesLanguages,
  kd = /\.html$/.test(window.location.pathname),
  Q,
  ld = Number,
  md,
  nd = window.location.search.match(/[?&]level=([^&]+)/);
md = nd ? decodeURIComponent(nd[1].replace(/\+/g, "%20")) : "NaN";
var od = ld(md);
Q = isNaN(od) ? 1 : g.g.Vd.Xj(1, od, 10);
function pd() {
  document.title = document.getElementById("title").textContent;
  document.dir = -1 != hd.indexOf(id) ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", id);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var c = [], d = 0; d < jd.length; d++) {
      var e = jd[d];
      c.push([gd[e], e]);
    }
    c.sort(function (h, k) {
      return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0;
    });
    for (d = a.options.length = 0; d < c.length; d++) {
      var f = c[d];
      e = f[1];
      f = new Option(f[0], e);
      e == id && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (d = 1; 10 >= d; d++)
    (a = document.getElementById("level" + d)),
      (c = !!qd(d)),
      a && c && (a.className += " level_done");
  (d = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(rd, 1);
}
function qd(a) {
  var c = sd;
  try {
    var d = window.localStorage[c + a];
  } catch (e) {}
  return d;
}
function R(a) {
  var c;
  (c = document.getElementById(a))
    ? ((c = c.textContent), (c = c.replace(/\\n/g, "\n")))
    : (c = null);
  return null === c ? "[Unknown message: " + a + "]" : c;
}
function td(a, c) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", c, !0);
  a.addEventListener("touchend", c, !0);
}
function rd() {
  if (!kd) {
    window.GoogleAnalyticsObject = "GoogleAnalyticsFunction";
    var a = function (d) {
      (a.q = a.q || []).push(arguments);
    };
    window.GoogleAnalyticsFunction = a;
    a.l = 1 * new Date();
    var c = document.createElement("script");
    c.async = 1;
    c.src = "//www.google-analytics.com/analytics.js";
    document.head.appendChild(c);
    a("create", "UA-50448074-1", "auto");
    a("send", "pageview");
  }
}
g.g.D = {};
g.g.D.Ta = function (a, c) {
  return " " + a + "," + c + " ";
};
g.g.D.curve = function (a, c) {
  return " " + a + c.join("");
};
g.g.D.moveTo = function (a, c) {
  return " M " + a + "," + c + " ";
};
g.g.D.moveBy = function (a, c) {
  return " m " + a + "," + c + " ";
};
g.g.D.lineTo = function (a, c) {
  return " l " + a + "," + c + " ";
};
g.g.D.line = function (a) {
  return " l" + a.join("");
};
g.g.D.oa = function (a, c) {
  return " " + a + " " + c + " ";
};
g.g.D.arc = function (a, c, d, e) {
  return a + " " + d + " " + d + " " + c + e;
};
g.j.kh = function () {
  this.lg = 0;
  this.lG = 3;
  this.$e = 5;
  this.cz = 8;
  this.Cd = 10;
  this.Fz = this.$e;
  this.wn = 15;
  this.Kl = 5;
  this.pq = 8;
  this.VF = 15;
  this.Bt = 4;
  this.OF = 12;
  this.yE = 16;
  this.xE = this.zy = this.wn;
  this.Kb = 8;
  this.qG = this.nn = 15;
  this.Cz = 0;
  this.Ez = 20;
  this.SD = 4;
  this.vG = this.$e;
  this.wG = this.Cd;
  this.WD = this.$e;
  this.VD = this.Cd;
  this.Fp = !1;
  this.oG = 15;
  this.pG = 100;
  this.nG = 15;
  this.kn = 24;
  this.AE = 14.5;
  this.zE = this.wn + 11;
  this.GE = 2;
  this.BE = this.kn;
  this.Bz = g.g.D.moveBy(0, 0);
  this.oF = 12;
  this.pF = 6;
  this.pi = 11;
  this.ri = "normal";
  this.oi = "sans-serif";
  this.Fy = this.$p = -1;
  this.Zp = 4;
  this.Dy = 16;
  this.ll = 5;
  this.Cy = "#fff";
  this.kt = !g.g.userAgent.Xe && !g.g.userAgent.Jj;
  this.Ey = this.Dy;
  this.PE = this.OE = this.jt = !1;
  this.RE = this.ll;
  this.an = 12;
  this.QE =
    "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
  this.SE = !1;
  this.NE = this.ll - 3;
  this.To = String(Math.random()).substring(2);
  this.$q = "";
  this.mv = null;
  this.VA = "";
  this.Pn = this.Mu = this.Uu = null;
  this.Tp = "#cc0a0a";
  this.iq = "#4286f4";
  this.Vp = 100;
  this.Xz = 5;
  this.Up = 10;
  this.jE = 2;
  this.lE = 4;
  this.Ky = !1;
  this.rt = "#000000";
  this.fq = 0.2;
  this.zz = { gG: 1, zl: 2 };
};
b = g.j.kh.prototype;
b.Y = function () {
  this.ul = this.nw();
  this.zl = this.ow();
  this.Gl = this.qw();
  this.Jt = this.pw();
  var a = this.Kb,
    c = g.g.D.arc("a", "0 0,0", a, g.g.D.Ta(-a, a)),
    d = g.g.D.arc("a", "0 0,0", a, g.g.D.Ta(a, a));
  this.gq = { width: a, height: a, Vw: c, gs: d };
  a = this.Kb;
  c = g.g.D.moveBy(0, a) + g.g.D.arc("a", "0 0,1", a, g.g.D.Ta(a, -a));
  d = g.g.D.arc("a", "0 0,1", a, g.g.D.Ta(a, a));
  var e = g.g.D.arc("a", "0 0,1", a, g.g.D.Ta(-a, -a)),
    f = g.g.D.arc("a", "0 0,1", a, g.g.D.Ta(-a, a));
  this.sn = { Nx: c, UK: d, TG: f, pu: e, xK: a };
};
b.hp = function (a) {
  this.Fi = {};
  var c = a.Fi,
    d;
  for (d in c) this.Fi[d] = ud(c[d]);
  this.oi =
    a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.oi;
  this.ri =
    a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.ri;
  this.pi =
    a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.pi;
  c = g.g.o.nC("Hg", this.pi + "pt", this.ri, this.oi);
  this.$p = c.height;
  this.Fy = c.df;
  this.Tp = xa(a, "cursorColour") || this.Tp;
  this.iq = xa(a, "markerColour") || this.iq;
  this.rt = xa(a, "insertionMarkerColour") || this.rt;
  this.fq = Number(xa(a, "insertionMarkerOpacity")) || this.fq;
  this.Fp = null != a.Hx ? a.Hx : this.Fp;
};
function Hc(a, c) {
  var d = "auto_" + c;
  a.Fi[d] || (a.Fi[d] = ud({ colourPrimary: c }));
  return { style: a.Fi[d], name: d };
}
function Ec(a, c) {
  return (
    a.Fi[c || ""] ||
    (c && 0 == c.indexOf("auto_")
      ? Hc(a, c.substring(5)).style
      : ud({ colourPrimary: "#000000" }))
  );
}
function ud(a) {
  var c = {};
  a && g.g.object.Je(c, a);
  a = g.g.ds(c.colourPrimary || "#000");
  c.Ii = a.oo;
  c.colourSecondary
    ? (a = g.g.ds(c.colourSecondary).oo)
    : ((a = c.Ii), (a = g.g.Ab.mu("#fff", a, 0.6) || a));
  c.Mq = a;
  c.colourTertiary
    ? (a = g.g.ds(c.colourTertiary).oo)
    : ((a = c.Ii), (a = g.g.Ab.mu("#fff", a, 0.3) || a));
  c.ug = a;
  c.Lg = c.hat || "";
  return c;
}
b.I = function () {
  this.mv && g.g.o.removeNode(this.mv);
  this.Uu && g.g.o.removeNode(this.Uu);
  this.Mu && g.g.o.removeNode(this.Mu);
  this.Pn = null;
};
b.nw = function () {
  var a = this.oF,
    c = this.pF,
    d = g.g.D.line([
      g.g.D.Ta(c, a / 4),
      g.g.D.Ta(2 * -c, a / 2),
      g.g.D.Ta(c, a / 4),
    ]);
  return { height: a, width: c, path: d };
};
b.qw = function () {
  var a = this.oG,
    c = this.pG,
    d = g.g.D.curve("c", [g.g.D.Ta(30, -a), g.g.D.Ta(70, -a), g.g.D.Ta(c, 0)]);
  return { height: a, width: c, path: d };
};
b.pw = function () {
  function a(h) {
    h = h ? -1 : 1;
    var k = -h,
      l = d / 2,
      m = g.g.D.Ta(c, h * l);
    return (
      g.g.D.curve("c", [
        g.g.D.Ta(0, h * (l + 2.5)),
        g.g.D.Ta(-c, k * (l + 0.5)),
        g.g.D.Ta(-c, h * l),
      ]) + g.g.D.curve("s", [g.g.D.Ta(c, 2.5 * k), m])
    );
  }
  var c = this.pq,
    d = this.wn,
    e = a(!0),
    f = a(!1);
  return { type: this.zz.gG, width: c, height: d, wf: f, No: e };
};
b.ow = function () {
  function a(k) {
    return g.g.D.line([
      g.g.D.Ta(k * e, d),
      g.g.D.Ta(3 * k, 0),
      g.g.D.Ta(k * e, -d),
    ]);
  }
  var c = this.VF,
    d = this.Bt,
    e = (c - 3) / 2,
    f = a(1),
    h = a(-1);
  return { type: this.zz.zl, width: c, height: d, lj: f, OC: h };
};
function Cb(a, c) {
  switch (c.type) {
    case g.kb:
    case g.Lf:
      return a.Jt;
    case g.Mf:
    case g.fb:
      return a.zl;
    default:
      throw Error("Unknown connection type");
  }
}
b.Wa = function (a, c, d) {
  d = this.yv(d);
  c = "blockly-renderer-style-" + c;
  this.Pn = document.getElementById(c);
  var e = d.join("\n");
  this.Pn
    ? (this.Pn.firstChild.textContent = e)
    : ((d = document.createElement("style")),
      (d.id = c),
      (c = document.createTextNode(e)),
      d.appendChild(c),
      document.head.insertBefore(d, document.head.firstChild),
      (this.Pn = d));
  a = g.g.o.M(g.g.G.uy, {}, a);
  c = g.g.o.M(g.g.G.Gy, { id: "blocklyEmbossFilter" + this.To }, a);
  g.g.o.M(g.g.G.KE, { in: "SourceAlpha", stdDeviation: 1, result: "blur" }, c);
  d = g.g.o.M(
    g.g.G.ME,
    {
      in: "blur",
      surfaceScale: 1,
      specularConstant: 0.5,
      specularExponent: 10,
      "lighting-color": "white",
      result: "specOut",
    },
    c
  );
  g.g.o.M(g.g.G.LE, { x: -5e3, y: -1e4, z: 2e4 }, d);
  g.g.o.M(
    g.g.G.ht,
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    c
  );
  g.g.o.M(
    g.g.G.ht,
    {
      in: "SourceGraphic",
      in2: "specOut",
      operator: "arithmetic",
      k1: 0,
      k2: 1,
      k3: 1,
      k4: 0,
    },
    c
  );
  this.$q = c.id;
  this.mv = c;
  c = g.g.o.M(
    g.g.G.mz,
    {
      id: "blocklyDisabledPattern" + this.To,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10,
    },
    a
  );
  g.g.o.M(g.g.G.Bc, { width: 10, height: 10, fill: "#aaa" }, c);
  g.g.o.M(g.g.G.$d, { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, c);
  this.VA = c.id;
  this.Uu = c;
  g.j.Ay &&
    ((a = g.g.o.M(
      g.g.G.Gy,
      {
        id: "blocklyDebugFilter" + this.To,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%",
      },
      a
    )),
    (c = g.g.o.M(g.g.G.HE, { result: "outBlur" }, a)),
    g.g.o.M(
      g.g.G.JE,
      { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" },
      c
    ),
    g.g.o.M(
      g.g.G.IE,
      { "flood-color": "#ff0000", "flood-opacity": 0.5, result: "outColor" },
      a
    ),
    g.g.o.M(
      g.g.G.ht,
      { in: "outColor", in2: "outBlur", operator: "in", result: "outGlow" },
      a
    ),
    (this.Mu = a));
};
b.yv = function (a) {
  return [
    a + " .blocklyText, ",
    a + " .blocklyFlyoutLabelText {",
    "font: " + this.ri + " " + this.pi + "pt " + this.oi + ";",
    "}",
    a + " .blocklyText {",
    "fill: #fff;",
    "}",
    a + " .blocklyNonEditableText>rect,",
    a + " .blocklyEditableText>rect {",
    "fill: " + this.Cy + ";",
    "fill-opacity: .6;",
    "stroke: none;",
    "}",
    a + " .blocklyNonEditableText>text,",
    a + " .blocklyEditableText>text {",
    "fill: #000;",
    "}",
    a + " .blocklyFlyoutLabelText {",
    "fill: #000;",
    "}",
    a + " .blocklyText.blocklyBubbleText {",
    "fill: #000;",
    "}",
    a + " .blocklyEditableText:not(.editing):hover>rect {",
    "stroke: #fff;",
    "stroke-width: 2;",
    "}",
    a + " .blocklyHtmlInput {",
    "font-family: " + this.oi + ";",
    "font-weight: " + this.ri + ";",
    "}",
    a + " .blocklySelected>.blocklyPath {",
    "stroke: #fc3;",
    "stroke-width: 3px;",
    "}",
    a + " .blocklyHighlightedConnectionPath {",
    "stroke: #fc3;",
    "}",
    a + " .blocklyReplaceable .blocklyPath {",
    "fill-opacity: .5;",
    "}",
    a + " .blocklyReplaceable .blocklyPathLight,",
    a + " .blocklyReplaceable .blocklyPathDark {",
    "display: none;",
    "}",
    a + " .blocklyInsertionMarker>.blocklyPath {",
    "fill-opacity: " + this.fq + ";",
    "stroke: none;",
    "}",
  ];
};
g.h.nh = function (a, c, d, e) {
  var f = a ? a.u.id : void 0;
  e && e.mb() == g.F.types.Sc && (f = e.Ea.id);
  g.h.nh.v.constructor.call(this, f);
  this.lb = a ? a.id : null;
  this.BC = d;
  this.vC = e;
  this.Og = c;
};
g.g.object.U(g.h.nh, g.h.ve);
g.h.nh.prototype.type = g.h.$y;
g.h.nh.prototype.va = function () {
  var a = g.h.nh.v.va.call(this);
  a.isCursor = this.Og;
  a.blockId = this.lb;
  a.oldNode = this.BC;
  a.newNode = this.vC;
  return a;
};
g.h.nh.prototype.ea = function (a) {
  g.h.nh.v.ea.call(this, a);
  this.Og = a.isCursor;
  this.lb = a.blockId;
  this.BC = a.oldNode;
  this.vC = a.newNode;
};
g.C.register(g.C.Z.cc, g.h.$y, g.h.nh);
g.j.oh = function (a, c, d) {
  this.s = a;
  this.tw = d;
  this.Zh = null;
  this.B = c;
  this.bm = null;
  a = this.Og() ? this.B.Tp : this.B.iq;
  this.fd = d.Ab || a;
};
g.j.oh.kE = "blocklyCursor";
g.j.oh.KF = "blocklyMarker";
g.j.oh.cF = 0.75;
b = g.j.oh.prototype;
b.Ma = function () {
  return this.N;
};
b.Pd = function () {
  return this.tw;
};
b.Og = function () {
  return "cursor" == this.tw.type;
};
b.Wa = function () {
  var a = this.Og() ? g.j.oh.kE : g.j.oh.KF;
  this.N = g.g.o.M(g.g.G.rc, { class: a }, null);
  this.Wh = g.g.o.M(g.g.G.rc, { width: this.B.Vp, height: this.B.Xz }, this.N);
  this.fj = g.g.o.M(
    g.g.G.Bc,
    { width: this.B.Vp, height: this.B.Xz, style: "display: none" },
    this.Wh
  );
  this.Fk = g.g.o.M(
    g.g.G.Bc,
    { class: "blocklyVerticalMarker", rx: 10, ry: 10, style: "display: none" },
    this.Wh
  );
  this.Ek = g.g.o.M(
    g.g.G.$d,
    { transform: "", style: "display: none" },
    this.Wh
  );
  this.Vh = g.g.o.M(
    g.g.G.$d,
    {
      transform: "",
      style: "display: none",
      fill: "none",
      "stroke-width": this.B.lE,
    },
    this.Wh
  );
  this.Og() &&
    ((a = {
      attributeType: "XML",
      attributeName: "fill",
      dur: "1s",
      values: this.fd + ";transparent;transparent;",
      repeatCount: "indefinite",
    }),
    g.g.o.M(g.g.G.Qs, a, this.fj),
    g.g.o.M(g.g.G.Qs, a, this.Ek),
    (a.attributeName = "stroke"),
    g.g.o.M(g.g.G.Qs, a, this.Vh));
  return this.N;
};
function vd(a, c) {
  a.Og()
    ? (a.Zh && a.Zh.ai(null), c.ai(a.Ma()))
    : (a.Zh && a.Zh.bi(null), c.bi(a.Ma()));
  a.Zh = c;
}
b.draw = function (a, c) {
  if (c) {
    this.B = this.s.Jb.la();
    var d = this.Og() ? this.B.Tp : this.B.iq;
    this.fd = this.tw.Ab || d;
    this.fj.setAttribute("fill", this.fd);
    this.Fk.setAttribute("stroke", this.fd);
    this.Ek.setAttribute("fill", this.fd);
    this.Vh.setAttribute("stroke", this.fd);
    this.Og() &&
      ((d = this.fd + ";transparent;transparent;"),
      this.fj.firstChild.setAttribute("values", d),
      this.Ek.firstChild.setAttribute("values", d),
      this.Vh.firstChild.setAttribute("values", d));
    d = c.Ea;
    if (c.mb() == g.F.types.hc) wd(this, c);
    else if (c.mb() == g.F.types.Pj) wd(this, c);
    else if (d.type == g.kb) {
      var e = c.Ea;
      d = e.W();
      var f = e.Lk.x,
        h = e.Lk.y;
      e = g.g.D.moveTo(0, 0) + Cb(this.B, e).wf;
      this.Ek.setAttribute("d", e);
      this.Ek.setAttribute(
        "transform",
        "translate(" + f + "," + h + ")" + (this.s.L ? " scale(-1 1)" : "")
      );
      this.bm = this.Ek;
      vd(this, d);
      xd(this);
    } else if (d.type == g.fb)
      (h = c.Ea),
        (d = h.W()),
        (f = 0),
        (h = h.Lk.y),
        (e = K(d).width),
        this.s.L && (f = -e),
        yd(this, f, h, e),
        vd(this, d),
        xd(this);
    else if (c.mb() == g.F.types.Gd) wd(this, c);
    else if (c.mb() == g.F.types.Ac)
      (d = c.Ea),
        (f = d.Nh().width),
        (h = d.Nh().height),
        zd(this, 0, 0, f, h),
        vd(this, d),
        xd(this);
    else if (c.mb() == g.F.types.Sc)
      (f = c.Ms),
        (d = f.x),
        (f = f.y),
        this.s.L && (d -= this.B.Vp),
        yd(this, d, f, this.B.Vp),
        vd(this, this.s),
        xd(this);
    else if (c.mb() == g.F.types.mg) {
      d = c.Ea;
      h = K(d);
      f = h.width + this.B.Up;
      h = h.height + this.B.Up;
      var k = (e = -this.B.Up / 2),
        l = -this.B.Up / 2;
      this.s.L && (k = -(f + e));
      zd(this, k, l, f, h);
      vd(this, d);
      xd(this);
    }
    d = c.W();
    a = new g.h.nh(d, this.Og(), a, c);
    g.h.Fa(a);
    a = this.bm.childNodes[0];
    void 0 !== a && a.beginElement && a.beginElement();
  } else this.Ia();
};
function wd(a, c) {
  c = c.W();
  var d = c.width,
    e = c.height,
    f = e * g.j.oh.cF,
    h = a.B.jE;
  if (c.ca) {
    var k = Cb(a.B, c.ca);
    e = k;
    d =
      g.g.D.moveBy(-h, f) +
      g.g.D.oa("V", -h) +
      g.g.D.oa("H", a.B.nn) +
      e.lj +
      g.g.D.oa("H", d + 2 * h) +
      g.g.D.oa("V", f);
    a.Vh.setAttribute("d", d);
  } else
    c.O
      ? ((f = k = Cb(a.B, c.O)),
        (d =
          g.g.D.moveBy(d, 0) +
          g.g.D.oa("h", -(d - f.width)) +
          g.g.D.oa("v", a.B.Kl) +
          f.wf +
          g.g.D.oa("V", e) +
          g.g.D.oa("H", d)),
        a.Vh.setAttribute("d", d))
      : ((d =
          g.g.D.moveBy(-h, f) +
          g.g.D.oa("V", -h) +
          g.g.D.oa("H", d + 2 * h) +
          g.g.D.oa("V", f)),
        a.Vh.setAttribute("d", d));
  a.s.L && a.Yn(a.Vh);
  a.bm = a.Vh;
  vd(a, c);
  xd(a);
}
function xd(a) {
  a.Ia();
  a.bm.style.display = "";
}
function yd(a, c, d, e) {
  a.fj.setAttribute("x", c);
  a.fj.setAttribute("y", d);
  a.fj.setAttribute("width", e);
  a.bm = a.fj;
}
function zd(a, c, d, e, f) {
  a.Fk.setAttribute("x", c);
  a.Fk.setAttribute("y", d);
  a.Fk.setAttribute("width", e);
  a.Fk.setAttribute("height", f);
  a.bm = a.Fk;
}
b.Yn = function (a) {
  a.setAttribute("transform", "scale(-1 1)");
};
b.Ia = function () {
  this.fj.style.display = "none";
  this.Fk.style.display = "none";
  this.Ek.style.display = "none";
  this.Vh.style.display = "none";
};
b.I = function () {
  this.N && g.g.o.removeNode(this.N);
};
g.j.A = {
  NONE: 0,
  Ac: 1,
  Ly: 2,
  Py: 4,
  Qt: 8,
  gy: 16,
  Uy: 32,
  By: 64,
  Ye: 128,
  Qy: 256,
  Dz: 512,
  eE: 1024,
  It: 2048,
  At: 4096,
  $F: 8192,
  ct: 16384,
  vt: 32768,
  ut: 65536,
  Nt: 131072,
  Mt: 262144,
  Yy: 524288,
  Ot: 1048576,
  Wt: 2097152,
  Vs: 4194304,
  Ry: 8388608,
};
g.j.A.jM = g.j.A.vt | g.j.A.ut;
g.j.A.qN = g.j.A.Nt | g.j.A.Mt;
g.j.A.Dw = 16777216;
g.j.A.mb = function () {
  Object.prototype.hasOwnProperty.call(g.j.A, void 0) ||
    ((g.j.A[void 0] = g.j.A.Dw), (g.j.A.Dw <<= 1));
  return g.j.A[void 0];
};
g.j.A.Sh = function (a) {
  return a.type & g.j.A.Ac;
};
g.j.A.Ak = function (a) {
  return a.type & g.j.A.Ly;
};
g.j.A.rm = function (a) {
  return a.type & g.j.A.Py;
};
g.j.A.rf = function (a) {
  return a.type & g.j.A.Qt;
};
g.j.A.$N = function (a) {
  return a.type & g.j.A.Uy;
};
g.j.A.Zi = function (a) {
  return a.type & g.j.A.Ye;
};
g.j.A.wo = function (a) {
  return a.type & g.j.A.By;
};
g.j.A.Yi = function (a) {
  return a.type & g.j.A.Qy;
};
g.j.A.Ck = function (a) {
  return a.type & g.j.A.Dz;
};
g.j.A.wm = function (a) {
  return a.type & g.j.A.It;
};
g.j.A.aj = function (a) {
  return a.type & g.j.A.At;
};
g.j.A.LI = function (a) {
  return a.type & (g.j.A.It | g.j.A.At);
};
g.j.A.$i = function (a) {
  return a.type & g.j.A.ut;
};
g.j.A.$B = function (a) {
  return a.type & g.j.A.Mt;
};
g.j.A.xo = function (a) {
  return a.type & g.j.A.vt;
};
g.j.A.aO = function (a) {
  return a.type & g.j.A.Nt;
};
g.j.A.ZN = function (a) {
  return a.type & g.j.A.ct;
};
g.j.A.YB = function (a) {
  return a.type & g.j.A.Yy;
};
g.j.A.cO = function (a) {
  return a.type & g.j.A.Ot;
};
g.j.A.XN = function (a) {
  return a.type & g.j.A.gy;
};
g.j.A.Dr = function (a) {
  return a.type & g.j.A.Wt;
};
g.j.A.xr = function (a) {
  return a.type & g.j.A.Vs;
};
g.j.A.MI = function (a) {
  return a.type & (g.j.A.Wt | g.j.A.Vs);
};
g.j.A.HI = function (a) {
  return a.type & g.j.A.Ry;
};
g.j.xi = function (a) {
  this.height = this.width = 0;
  this.type = g.j.A.NONE;
  this.Vl = this.Ua = 0;
  this.B = a;
  this.uf = this.B.nn;
};
g.j.Aa = function (a, c) {
  g.j.Aa.v.constructor.call(this, a);
  this.Ld = c;
  this.shape = Cb(this.B, c);
  this.zk = !!this.shape.isDynamic;
  this.type |= g.j.A.eE;
};
g.g.object.U(g.j.Aa, g.j.xi);
g.j.Ht = function (a, c) {
  g.j.Ht.v.constructor.call(this, a, c);
  this.type |= g.j.A.$F;
  this.height = this.zk ? 0 : this.shape.height;
  this.Cf = this.width = this.zk ? 0 : this.shape.width;
  this.ze = this.B.Kl;
  this.Kn = 0;
};
g.g.object.U(g.j.Ht, g.j.Aa);
g.j.Kt = function (a, c) {
  g.j.Kt.v.constructor.call(this, a, c);
  this.type |= g.j.A.It;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.U(g.j.Kt, g.j.Aa);
g.j.Ct = function (a, c) {
  g.j.Ct.v.constructor.call(this, a, c);
  this.type |= g.j.A.At;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.U(g.j.Ct, g.j.Aa);
g.j.fn = function (a, c) {
  g.j.fn.v.constructor.call(this, a, c.connection);
  this.type |= g.j.A.Ye;
  this.input = c;
  this.align = c.align;
  (this.Ji = c.connection && c.connection.ra() ? c.connection.ra() : null)
    ? ((a = K(this.Ji)), (this.In = a.width), (this.Oq = a.height))
    : (this.Oq = this.In = 0);
  this.ze = this.Kn = 0;
};
g.g.object.U(g.j.fn, g.j.Aa);
g.j.ui = function (a, c) {
  g.j.ui.v.constructor.call(this, a, c);
  this.type |= g.j.A.Qy;
  this.Ji
    ? ((this.width = this.In), (this.height = this.Oq))
    : ((this.height = this.B.zE), (this.width = this.B.AE));
  this.Xl = this.zk ? this.shape.height(this.height) : this.shape.height;
  this.xg = this.zk ? this.shape.width(this.height) : this.shape.width;
  this.Ji || (this.width += this.xg * (this.zk ? 2 : 1));
  this.ze = this.zk ? this.shape.ze(this.Xl) : this.B.Kl;
  this.Kn = this.zk ? this.shape.Kn(this.xg) : 0;
};
g.g.object.U(g.j.ui, g.j.fn);
g.j.Ci = function (a, c) {
  g.j.Ci.v.constructor.call(this, a, c);
  this.type |= g.j.A.Dz;
  this.height = this.Ji ? this.Oq + this.B.Cz : this.B.BE;
  this.width = this.B.qG + this.shape.width;
};
g.g.object.U(g.j.Ci, g.j.fn);
g.j.Yp = function (a, c) {
  g.j.Yp.v.constructor.call(this, a, c);
  this.type |= g.j.A.By;
  this.height = this.Ji ? this.Oq - this.B.Kl - this.B.$e : this.shape.height;
  this.width = this.shape.width + this.B.GE;
  this.ze = this.B.Kl;
  this.Xl = this.shape.height;
  this.xg = this.shape.width;
};
g.g.object.U(g.j.Yp, g.j.fn);
g.j.Zd = function (a, c) {
  g.j.Zd.v.constructor.call(this, a);
  this.icon = c;
  this.isVisible = c.isVisible();
  this.type |= g.j.A.Py;
  a = new g.g.se(g.Zd.prototype.mq, g.Zd.prototype.mq - 2);
  this.height = a.height;
  this.width = a.width;
};
g.g.object.U(g.j.Zd, g.j.xi);
g.j.st = function (a) {
  g.j.st.v.constructor.call(this, a);
  this.type |= g.j.A.Yy;
  this.height = this.B.ul.height;
  this.width = this.B.ul.width;
};
g.g.object.U(g.j.st, g.j.xi);
g.j.Yd = function (a, c) {
  g.j.Yd.v.constructor.call(this, a);
  this.bB = c;
  this.Sd = c.$m;
  this.QH = c.rB();
  this.type |= g.j.A.Ac;
  a = this.bB.Nh();
  this.height = a.height;
  this.width = a.width;
};
g.g.object.U(g.j.Yd, g.j.xi);
g.j.mt = function (a) {
  g.j.mt.v.constructor.call(this, a);
  this.type |= g.j.A.Ly;
  this.height = this.B.Gl.height;
  this.width = this.B.Gl.width;
  this.Rl = this.height;
};
g.g.object.U(g.j.mt, g.j.xi);
g.j.Jl = function (a, c) {
  g.j.Jl.v.constructor.call(this, a);
  this.type = (c && "left" != c ? g.j.A.Nt : g.j.A.vt) | g.j.A.ct;
  this.width = this.height = this.B.lg;
};
g.g.object.U(g.j.Jl, g.j.xi);
g.j.lq = function (a, c) {
  g.j.lq.v.constructor.call(this, a);
  this.type = (c && "left" != c ? g.j.A.Mt : g.j.A.ut) | g.j.A.ct;
  this.width = this.B.Kb;
  this.height = this.B.Kb / 2;
};
g.g.object.U(g.j.lq, g.j.xi);
g.j.mh = function (a, c) {
  g.j.mh.v.constructor.call(this, a);
  this.type = this.type | g.j.A.Qt | g.j.A.Uy;
  this.width = c;
  this.height = this.B.nG;
};
g.g.object.U(g.j.mh, g.j.xi);
g.j.Qj = function (a) {
  this.type = g.j.A.Ot;
  this.elements = [];
  this.Ua = this.Qc = this.eg = this.minWidth = this.minHeight = this.width = this.height = 0;
  this.IB = this.nm = this.Nv = this.Cc = this.Si = !1;
  this.B = a;
  this.uf = this.B.nn;
  this.align = null;
};
g.j.Qj.prototype.measure = function () {
  throw Error("Unexpected attempt to measure a base Row.");
};
function Ad(a) {
  for (var c = a.elements.length - 1, d; (d = a.elements[c]); c--)
    if (g.j.A.Zi(d)) return d;
  return null;
}
g.j.Qj.prototype.Bs = function () {
  return !0;
};
g.j.Qj.prototype.Un = function () {
  return !0;
};
g.j.Vj = function (a) {
  g.j.Vj.v.constructor.call(this, a);
  this.type |= g.j.A.Wt;
  this.Rl = this.Bh = 0;
  this.wI = !1;
  this.connection = null;
};
g.g.object.U(g.j.Vj, g.j.Qj);
g.j.Vj.prototype.Ov = function (a) {
  var c = (a.Lg ? "cap" === a.Lg : this.B.Fp) && !a.O && !a.ca,
    d = a.ca && a.ca.ra();
  return !!a.O || c || (d ? t(d) == a : !1);
};
g.j.Vj.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.j.A.rf(f) ||
        (g.j.A.Ak(f) ? (d = Math.max(d, f.Rl)) : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Bh = this.Rl = d;
  this.eg = this.width;
};
g.j.Vj.prototype.Bs = function () {
  return !1;
};
g.j.Vj.prototype.Un = function () {
  return !1;
};
g.j.Fj = function (a) {
  g.j.Fj.v.constructor.call(this, a);
  this.type |= g.j.A.Vs;
  this.JB = !1;
  this.connection = null;
  this.df = this.Rn = 0;
};
g.g.object.U(g.j.Fj, g.j.Qj);
g.j.Fj.prototype.Ov = function (a) {
  return !!a.O || !!t(a);
};
g.j.Fj.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.j.A.rf(f) ||
        (g.j.A.aj(f)
          ? (d = Math.max(d, f.height))
          : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Rn = d;
  this.eg = this.width;
};
g.j.Fj.prototype.Bs = function () {
  return !1;
};
g.j.Fj.prototype.Un = function () {
  return !1;
};
g.j.oq = function (a, c, d) {
  g.j.oq.v.constructor.call(this, a);
  this.type = this.type | g.j.A.Qt | g.j.A.gy;
  this.width = d;
  this.height = c;
  this.hB = !1;
  this.eg = 0;
  this.elements = [new g.j.mh(this.B, d)];
};
g.g.object.U(g.j.oq, g.j.Qj);
g.j.oq.prototype.measure = function () {};
g.j.tl = function (a) {
  g.j.tl.v.constructor.call(this, a);
  this.type |= g.j.A.Ry;
  this.yA = 0;
};
g.g.object.U(g.j.tl, g.j.Qj);
g.j.tl.prototype.measure = function () {
  this.width = this.minWidth;
  this.height = this.minHeight;
  for (var a = 0, c = 0, d; (d = this.elements[c]); c++)
    (this.width += d.width),
      g.j.A.Zi(d) &&
        (g.j.A.Ck(d)
          ? (a += d.In)
          : g.j.A.wo(d) && 0 != d.In && (a += d.In - d.xg)),
      g.j.A.rf(d) || (this.height = Math.max(this.height, d.height));
  this.yA = a;
  this.eg = this.width + a;
};
g.j.tl.prototype.Un = function () {
  return !this.Si && !this.Cc;
};
g.j.Nf = function (a, c) {
  this.P = c;
  this.Jb = a;
  this.B = this.Jb.la();
  this.O = c.O ? new g.j.Ht(this.B, c.O) : null;
  this.sm = vb(c) && !c.isCollapsed();
  this.isCollapsed = c.isCollapsed();
  this.Td = c.Td();
  this.L = c.L;
  this.yj = this.width = this.Qm = this.height = 0;
  this.rows = [];
  this.SB = [];
  this.NB = [];
  this.zc = new g.j.Vj(this.B);
  this.Pb = new g.j.Fj(this.B);
  this.As = this.Cf = 0;
};
b = g.j.Nf.prototype;
b.measure = function () {
  var a = !!this.P.ca,
    c = (this.P.Lg ? "cap" === this.P.Lg : this.B.Fp) && !this.O && !a;
  this.zc.Ov(this.P)
    ? this.zc.elements.push(new g.j.Jl(this.B))
    : this.zc.elements.push(new g.j.lq(this.B));
  c
    ? ((a = new g.j.mt(this.B)), this.zc.elements.push(a), (this.zc.Bh = a.Rl))
    : a &&
      ((this.zc.wI = !0),
      (this.zc.connection = new g.j.Kt(this.B, this.P.ca)),
      this.zc.elements.push(this.zc.connection));
  this.P.S.length && this.P.S[0].type == g.fb && !this.P.isCollapsed()
    ? (this.zc.minHeight = this.B.wG)
    : (this.zc.minHeight = this.B.vG);
  this.zc.elements.push(new g.j.Jl(this.B, "right"));
  this.rows.push(this.zc);
  a = new g.j.tl(this.B);
  this.SB.push(a);
  var d = Db(this.P);
  if (d.length) {
    c = 0;
    for (var e; (e = d[c]); c++) {
      var f = new g.j.Zd(this.B, e);
      this.isCollapsed && e.uA ? this.NB.push(f) : a.elements.push(f);
    }
  }
  e = null;
  for (c = 0; (d = this.P.S[c]); c++)
    if (d.isVisible()) {
      !e ||
        (d.type != g.fb &&
          e.type != g.fb &&
          ((d.type != g.kb && d.type != g.lh) || this.sm)) ||
        (this.rows.push(a), (a = new g.j.tl(this.B)), this.SB.push(a));
      for (e = 0; (f = d.hb[e]); e++) a.elements.push(new g.j.Yd(this.B, f, d));
      this.fA(d, a);
      e = d;
    }
  this.isCollapsed && ((a.IB = !0), a.elements.push(new g.j.st(this.B)));
  (a.elements.length || a.nm) && this.rows.push(a);
  this.Zw();
  this.rows.push(this.Pb);
  this.eA();
  a = this.rows;
  this.rows = [];
  for (c = 0; c < a.length; c++)
    if ((this.rows.push(a[c]), c != a.length - 1)) {
      d = this.rows;
      e = d.push;
      f = a[c];
      var h = a[c + 1],
        k = new g.j.oq(this.B, this.zB(f, h), this.width - this.Cf);
      f.Cc && (k.hB = !0);
      h.Cc && (k.hO = !0);
      e.call(d, k);
    }
  for (e = d = c = a = 0; (f = this.rows[e]); e++)
    f.measure(),
      (c = Math.max(c, f.width)),
      f.Cc && (a = Math.max(a, f.width - Ad(f).width)),
      (d = Math.max(d, f.eg));
  this.yj = a;
  this.width = c;
  for (e = 0; (f = this.rows[e]); e++) f.Cc && (f.yj = this.yj);
  this.Qm = Math.max(c, d);
  this.O &&
    ((this.Cf = this.O.width),
    (this.width += this.O.width),
    (this.Qm += this.O.width));
  this.du();
  this.cB();
};
b.Zw = function () {
  this.Pb.JB = !!this.P.X;
  this.Pb.minHeight =
    this.P.S.length && this.P.S[this.P.S.length - 1].type == g.fb
      ? this.B.VD
      : this.B.WD;
  this.Pb.Ov(this.P)
    ? this.Pb.elements.push(new g.j.Jl(this.B))
    : this.Pb.elements.push(new g.j.lq(this.B));
  this.Pb.JB &&
    ((this.Pb.connection = new g.j.Ct(this.B, this.P.X)),
    this.Pb.elements.push(this.Pb.connection));
  this.Pb.elements.push(new g.j.Jl(this.B, "right"));
};
b.fA = function (a, c) {
  this.sm && a.type == g.kb
    ? (c.elements.push(new g.j.ui(this.B, a)), (c.Nv = !0))
    : a.type == g.fb
    ? (c.elements.push(new g.j.Ci(this.B, a)), (c.Cc = !0))
    : a.type == g.kb
    ? (c.elements.push(new g.j.Yp(this.B, a)), (c.Si = !0))
    : a.type == g.lh &&
      ((c.minHeight = Math.max(
        c.minHeight,
        a.W() && a.W().Na ? this.B.xE : this.B.zy
      )),
      (c.nm = !0));
  null == c.align && (c.align = a.align);
};
b.eA = function () {
  for (var a = 0, c; (c = this.rows[a]); a++) {
    var d = c.elements;
    c.elements = [];
    c.Bs() && c.elements.push(new g.j.mh(this.B, this.hk(null, d[0])));
    if (d.length) {
      for (var e = 0; e < d.length - 1; e++)
        c.elements.push(d[e]),
          c.elements.push(new g.j.mh(this.B, this.hk(d[e], d[e + 1])));
      c.elements.push(d[d.length - 1]);
      c.Un() &&
        c.elements.push(new g.j.mh(this.B, this.hk(d[d.length - 1], null)));
    }
  }
};
b.hk = function (a, c) {
  if (!a && c && g.j.A.Ck(c)) return this.B.Ez;
  if (a && g.j.A.Zi(a) && !c) {
    if (g.j.A.wo(a)) return this.B.lg;
    if (g.j.A.Yi(a)) return this.B.Cd;
    if (g.j.A.Ck(a)) return this.B.lg;
  }
  return a && g.j.A.xo(a) && c && (g.j.A.wm(c) || g.j.A.aj(c))
    ? c.uf
    : a && g.j.A.$i(a) && c && (g.j.A.wm(c) || g.j.A.aj(c))
    ? c.uf - this.B.Kb
    : this.B.$e;
};
b.du = function () {
  for (var a = 0, c; (c = this.rows[a]); a++)
    if (c.Cc) Bd(this, c);
    else {
      var d = this.io(c) - c.width;
      0 < d && Cd(c, d);
      g.j.A.MI(c) && (c.eg = c.width);
    }
};
b.io = function () {
  return this.width - this.Cf;
};
function Cd(a, c) {
  a: {
    var d = 0;
    for (var e; (e = a.elements[d]); d++)
      if (g.j.A.rf(e)) {
        d = e;
        break a;
      }
    d = null;
  }
  a: {
    e = a.elements.length - 1;
    for (var f; (f = a.elements[e]); e--)
      if (g.j.A.rf(f)) {
        e = f;
        break a;
      }
    e = null;
  }
  if (a.Si || a.Cc) a.eg += c;
  a.align == g.Ps
    ? (e.width += c)
    : a.align == g.Os
    ? ((d.width += c / 2), (e.width += c / 2))
    : a.align == g.Um
    ? (d.width += c)
    : (e.width += c);
  a.width += c;
}
function Bd(a, c) {
  var d = Ad(c),
    e = c.width - d.width,
    f = a.yj;
  e = f - e;
  0 < e && Cd(c, e);
  e = c.width;
  f = a.io(c);
  d.width += f - e;
  d.height = Math.max(d.height, c.height);
  c.width += f - e;
  c.eg = Math.max(c.width, a.yj + c.yA);
}
b.zB = function () {
  return this.B.$e;
};
b.pB = function (a, c) {
  return g.j.A.rf(c)
    ? a.Qc + c.height / 2
    : g.j.A.xr(a)
    ? ((a = a.Qc + a.height - a.Rn),
      g.j.A.aj(c) ? a + c.height / 2 : a - c.height / 2)
    : g.j.A.Dr(a)
    ? g.j.A.Ak(c)
      ? a.Bh - c.height / 2
      : a.Bh + c.height / 2
    : a.Qc + a.height / 2;
};
function Dd(a, c) {
  for (var d = c.Ua, e = 0, f; (f = c.elements[e]); e++)
    g.j.A.rf(f) && (f.height = c.height),
      (f.Ua = d),
      (f.Vl = a.pB(c, f)),
      (d += f.width);
}
b.cB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++)
    (e.Qc = c),
      (e.Ua = this.Cf),
      (c += e.height),
      (a = Math.max(a, e.eg)),
      Dd(this, e);
  this.O &&
    this.P.X &&
    this.P.X.isConnected() &&
    (a = Math.max(a, K(this.P.X.ra()).width));
  this.Qm = a + this.Cf;
  this.height = c;
  this.As = this.zc.Bh;
  this.Pb.df = c - this.Pb.Rn;
};
g.j.zd = function (a, c) {
  this.P = a;
  this.Da = c;
  a.Xa();
  this.wr = this.cb = "";
  this.B = c.Jb.la();
};
b = g.j.zd.prototype;
b.draw = function () {
  Ed(this);
  Fd(this);
  Gd(this);
  this.P.Mb.wx(this.cb + "\n" + this.wr);
  this.Da.L && this.P.Mb.rv();
  g.j.Bp && this.P.nx.IH(this.P, this.Da);
  Hd(this);
};
function Hd(a) {
  a.P.height = a.Da.height;
  a.P.width = a.Da.Qm;
}
function Ed(a) {
  for (var c = 0, d; (d = a.Da.NB[c]); c++)
    d.icon.Rd.setAttribute("display", "none");
}
function Fd(a) {
  a.gv();
  for (var c = 1; c < a.Da.rows.length - 1; c++) {
    var d = a.Da.rows[c];
    d.IB ? a.Tn(d) : d.Cc ? a.fv(d) : d.Si ? a.hv(d) : a.$A(d);
  }
  a.bv();
  a.ev();
}
b.gv = function () {
  var a = this.Da.zc,
    c = a.elements,
    d = this.Da.zc;
  if (d.connection) {
    var e = d.Ua + d.uf;
    xc(d.connection.Ld, this.Da.L ? -e : e, 0);
  }
  this.cb += g.g.D.moveBy(a.Ua, this.Da.As);
  for (d = 0; (e = c[d]); d++)
    g.j.A.$i(e)
      ? (this.cb += this.B.sn.Nx)
      : g.j.A.$B(e)
      ? (this.cb += this.B.sn.UK)
      : g.j.A.wm(e)
      ? (this.cb += e.shape.lj)
      : g.j.A.Ak(e)
      ? (this.cb += this.B.Gl.path)
      : g.j.A.rf(e) && (this.cb += g.g.D.oa("h", e.width));
  this.cb += g.g.D.oa("v", a.height);
};
b.Tn = function (a) {
  this.cb += this.B.ul.path + g.g.D.oa("v", a.height - this.B.ul.height);
};
b.hv = function (a) {
  var c = Ad(a);
  this.QC(a);
  var d = "function" == typeof c.shape.wf ? c.shape.wf(c.height) : c.shape.wf;
  this.cb += g.g.D.oa("H", c.Ua + c.width) + d + g.g.D.oa("v", a.height - c.Xl);
};
b.fv = function (a) {
  var c = Ad(a);
  this.cb +=
    g.g.D.oa("H", c.Ua + c.uf + c.shape.width) +
    (c.shape.OC + g.g.D.oa("h", -(c.uf - this.B.gq.width)) + this.B.gq.Vw) +
    g.g.D.oa("v", a.height - 2 * this.B.gq.height) +
    this.B.gq.gs +
    g.g.D.oa("H", a.Ua + a.width);
  this.TC(a);
};
b.$A = function (a) {
  this.cb += g.g.D.oa("V", a.Qc + a.height);
};
b.bv = function () {
  var a = this.Da.Pb,
    c = a.elements;
  this.SC();
  for (var d = 0, e = "", f = c.length - 1, h; (h = c[f]); f--)
    g.j.A.aj(h)
      ? (e += h.shape.OC)
      : g.j.A.xo(h)
      ? (e += g.g.D.oa("H", a.Ua))
      : g.j.A.$i(h)
      ? (e += this.B.sn.pu)
      : g.j.A.$B(h)
      ? ((e += this.B.sn.TG), (d = this.B.sn.xK))
      : g.j.A.rf(h) && (e += g.g.D.oa("h", -1 * h.width));
  this.cb += g.g.D.oa("V", a.df - d);
  this.cb += e;
};
b.ev = function () {
  var a = this.Da.O;
  if (this.Da.O) {
    var c = this.Da.Cf + this.Da.O.Kn;
    xc(this.P.O, this.Da.L ? -c : c, this.Da.O.ze);
  }
  a &&
    ((c = a.ze + a.height),
    (a = "function" == typeof a.shape.No ? a.shape.No(a.height) : a.shape.No),
    (this.cb += g.g.D.oa("V", c) + a));
  this.cb += "z";
};
function Gd(a) {
  for (var c = 0, d; (d = a.Da.rows[c]); c++)
    for (var e = 0, f; (f = d.elements[e]); e++)
      if (g.j.A.Yi(f)) a.dv(f);
      else if (g.j.A.rm(f) || g.j.A.Sh(f)) {
        var h = a;
        if (g.j.A.Sh(f)) var k = f.bB.Ma();
        else g.j.A.rm(f) && (k = f.icon.Rd);
        var l = f.Vl - f.height / 2,
          m = f.Ua,
          n = "";
        h.Da.L &&
          ((m = -(m + f.width)), f.QH && ((m += f.width), (n = "scale(-1 1)")));
        g.j.A.rm(f)
          ? (k.setAttribute("display", "block"),
            k.setAttribute("transform", "translate(" + m + "," + l + ")"),
            Ua(f.icon))
          : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        h.Da.Td && k.setAttribute("display", "none");
      }
}
b.dv = function (a) {
  var c = a.width,
    d = a.height,
    e = a.ze,
    f = a.Xl + e;
  this.wr +=
    g.g.D.moveTo(a.Ua + a.xg, a.Vl - d / 2) +
    g.g.D.oa("v", e) +
    a.shape.wf +
    g.g.D.oa("v", d - f) +
    g.g.D.oa("h", c - a.xg) +
    g.g.D.oa("v", -d) +
    "z";
  this.RC(a);
};
b.RC = function (a) {
  var c = a.Vl - a.height / 2;
  if (a.Ld) {
    var d = a.Ua + a.xg + a.Kn;
    this.Da.L && (d *= -1);
    xc(a.Ld, d, c + a.ze);
  }
};
b.TC = function (a) {
  var c = Ad(a);
  if (c.Ld) {
    var d = a.Ua + a.yj + c.uf;
    this.Da.L && (d *= -1);
    xc(c.Ld, d, a.Qc);
  }
};
b.QC = function (a) {
  var c = Ad(a);
  if (c.Ld) {
    var d = a.Ua + a.width;
    this.Da.L && (d *= -1);
    xc(c.Ld, d, a.Qc);
  }
};
b.SC = function () {
  var a = this.Da.Pb;
  if (a.connection) {
    var c = a.connection,
      d = c.Ua;
    xc(c.Ld, this.Da.L ? -d : d, a.df);
  }
};
g.j.ph = function (a, c, d) {
  this.Zl = d;
  this.dh = a;
  this.$b = g.g.o.M(g.g.G.$d, { class: "blocklyPath" }, this.dh);
  this.style = c;
  this.sw = this.Qn = null;
};
b = g.j.ph.prototype;
b.wx = function (a) {
  this.$b.setAttribute("d", a);
};
b.rv = function () {
  this.$b.setAttribute("transform", "scale(-1 1)");
};
b.ai = function (a) {
  a ? (this.dh.appendChild(a), (this.Qn = a)) : (this.Qn = null);
};
b.bi = function (a) {
  a
    ? (this.Qn ? this.dh.insertBefore(a, this.Qn) : this.dh.appendChild(a),
      (this.sw = a))
    : (this.sw = null);
};
b.kc = function (a) {
  this.$b.setAttribute("stroke", this.style.ug);
  this.$b.setAttribute("fill", this.style.Ii);
  this.BD(a.Na);
  this.Qx(!a.isEnabled() || kc(a));
};
b.Zb = function (a) {
  this.style = a;
};
function Bb(a, c, d) {
  d ? g.g.o.Ha(a.dh, c) : g.g.o.wc(a.dh, c);
}
b.zD = function (a) {
  a
    ? this.$b.setAttribute("filter", "url(#" + this.Zl.$q + ")")
    : this.$b.setAttribute("filter", "none");
};
b.BD = function (a) {
  a &&
    (this.$b.setAttribute("stroke", "none"),
    this.$b.setAttribute("fill", this.style.Mq));
};
b.Qx = function (a) {
  Bb(this, "blocklyDisabled", a);
  a && this.$b.setAttribute("fill", "url(#" + this.Zl.VA + ")");
};
g.j.qh = function (a) {
  this.name = a;
  this.Rw = this.B = null;
};
b = g.j.qh.prototype;
b.Uf = function () {
  return this.name + "-renderer";
};
b.Y = function (a, c) {
  this.B = this.lw();
  c && ((this.Rw = c), g.g.object.Je(this.B, c));
  this.B.hp(a);
  this.B.Y();
};
b.Wa = function (a, c) {
  this.B.Wa(a, this.name + "-" + c.name, "." + this.Uf() + "." + c.Uf());
};
b.gx = function (a, c) {
  var d = this.la();
  d.I();
  this.B = this.lw();
  this.Rw && g.g.object.Je(this.B, this.Rw);
  this.B.To = d.To;
  this.B.hp(c);
  this.B.Y();
  this.Wa(a, c);
};
b.I = function () {
  this.B && this.B.I();
};
b.lw = function () {
  return new g.j.kh();
};
b.lC = function (a) {
  return new g.j.Nf(this, a);
};
b.jC = function (a, c) {
  return new g.j.zd(a, c);
};
b.kC = function (a, c) {
  return new g.j.ph(a, c, this.B);
};
b.la = function () {
  return this.B;
};
b.Ga = function (a) {
  if (g.j.Bp && !a.nx) {
    if (!g.j.Ay)
      throw Error("Missing require for Blockly.blockRendering.Debug");
    var c = new g.j.Ay(this.la());
    a.nx = c;
  }
  c = this.lC(a);
  c.measure();
  this.jC(a, c).draw();
};
g.qa = {};
g.qa.kh = function () {
  g.qa.kh.v.constructor.call(this);
  this.kt = !1;
  this.ad = 1;
  this.LF = 30;
  this.Cz = -this.Bt / 2;
};
g.g.object.U(g.qa.kh, g.j.kh);
g.qa.kh.prototype.yv = function (a) {
  return g.qa.kh.v.yv
    .call(this, a)
    .concat([
      a + " .blocklyInsertionMarker>.blocklyPathLight,",
      a + " .blocklyInsertionMarker>.blocklyPathDark {",
      "fill-opacity: " + this.fq + ";",
      "stroke: none;",
      "}",
    ]);
};
g.qa.Oy = function (a) {
  this.Da = a;
  this.to = this.ua = "";
  this.bd = this.Da.L;
  a = a.Jb;
  this.B = a.la();
  this.Ge = a.Ge;
  this.ke = this.Ge.OFFSET;
  this.Qw = this.Ge.aG;
  this.pm = this.Ge.lF;
  this.So = this.Ge.Jt;
  this.mJ = this.Ge.zl;
  this.NK = this.Ge.Gl;
  this.cC = this.Ge.ul;
};
g.qa.Oy.prototype.Tn = function (a) {
  this.Da.L &&
    (this.ua +=
      this.cC.lj + g.g.D.oa("v", a.height - this.cC.height - this.ke));
};
function Id(a, c) {
  var d = c.Ua + c.width - a.ke;
  c.hB && (a.ua += g.g.D.oa("H", d));
  a.bd &&
    ((a.ua += g.g.D.oa("H", d)),
    c.height > a.ke && (a.ua += g.g.D.oa("V", c.Qc + c.height - a.ke)));
}
g.qa.ui = function (a, c) {
  g.qa.ui.v.constructor.call(this, a, c);
  this.Ji && ((this.width += this.B.ad), (this.height += this.B.ad));
};
g.g.object.U(g.qa.ui, g.j.ui);
g.qa.Ci = function (a, c) {
  g.qa.Ci.v.constructor.call(this, a, c);
  this.Ji && (this.height += this.B.ad);
};
g.g.object.U(g.qa.Ci, g.j.Ci);
g.qa.Nf = function (a, c) {
  g.qa.Nf.v.constructor.call(this, a, c);
};
g.g.object.U(g.qa.Nf, g.j.Nf);
b = g.qa.Nf.prototype;
b.Zw = function () {
  g.qa.Nf.v.Zw.call(this);
  (this.P.S.length && this.P.S[this.P.S.length - 1].type == g.fb) ||
    (this.Pb.minHeight = this.B.$e - this.B.ad);
};
b.fA = function (a, c) {
  this.sm && a.type == g.kb
    ? (c.elements.push(new g.qa.ui(this.B, a)), (c.Nv = !0))
    : a.type == g.fb
    ? (c.elements.push(new g.qa.Ci(this.B, a)), (c.Cc = !0))
    : a.type == g.kb
    ? (c.elements.push(new g.j.Yp(this.B, a)), (c.Si = !0))
    : a.type == g.lh &&
      ((c.minHeight = Math.max(c.minHeight, this.B.zy)), (c.nm = !0));
  this.sm || null != c.align || (c.align = a.align);
};
b.eA = function () {
  for (var a = !1, c = 0, d; (d = this.rows[c]); c++) d.Si && (a = !0);
  for (c = 0; (d = this.rows[c]); c++) {
    var e = d.elements;
    d.elements = [];
    d.Bs() && d.elements.push(new g.j.mh(this.B, this.hk(null, e[0])));
    if (e.length) {
      for (var f = 0; f < e.length - 1; f++) {
        d.elements.push(e[f]);
        var h = this.hk(e[f], e[f + 1]);
        d.elements.push(new g.j.mh(this.B, h));
      }
      d.elements.push(e[e.length - 1]);
      d.Un() &&
        ((h = this.hk(e[e.length - 1], null)),
        a && d.nm && (h += this.B.pq),
        d.elements.push(new g.j.mh(this.B, h)));
    }
  }
};
b.hk = function (a, c) {
  if (!a)
    return c && g.j.A.Sh(c) && c.Sd
      ? this.B.$e
      : c && g.j.A.Yi(c)
      ? this.B.cz
      : c && g.j.A.Ck(c)
      ? this.B.Ez
      : this.B.Cd;
  if (!g.j.A.Zi(a) && (!c || g.j.A.Ck(c)))
    return g.j.A.Sh(a) && a.Sd
      ? this.B.$e
      : g.j.A.rm(a)
      ? 2 * this.B.Cd + 1
      : g.j.A.Ak(a)
      ? this.B.lg
      : g.j.A.LI(a)
      ? this.B.Cd
      : g.j.A.$i(a)
      ? this.B.OF
      : g.j.A.YB(a)
      ? this.B.lg
      : this.B.Cd;
  if (g.j.A.Zi(a) && !c) {
    if (g.j.A.wo(a)) return this.B.lg;
    if (g.j.A.Yi(a)) return this.B.Cd;
    if (g.j.A.Ck(a)) return this.B.lg;
  }
  if (!g.j.A.Zi(a) && c && g.j.A.Zi(c)) {
    if (g.j.A.Sh(a) && a.Sd) {
      if (g.j.A.Yi(c) || g.j.A.wo(c)) return this.B.lG;
    } else {
      if (g.j.A.Yi(c) || g.j.A.wo(c)) return this.B.cz;
      if (g.j.A.Ck(c)) return this.B.Cd;
    }
    return this.B.Cd - 1;
  }
  if (g.j.A.rm(a) && c && !g.j.A.Zi(c)) return this.B.Cd;
  if (g.j.A.Yi(a) && c && g.j.A.Sh(c)) return c.Sd ? this.B.$e : this.B.Cd;
  if (g.j.A.xo(a) && c) {
    if (g.j.A.Ak(c)) return this.B.lg;
    if (g.j.A.wm(c)) return c.uf;
    if (g.j.A.aj(c)) return (a = ((this.L ? 1 : -1) * this.B.ad) / 2), c.uf + a;
  }
  if (g.j.A.$i(a) && c) {
    if (g.j.A.wm(c)) return c.uf - this.B.Kb;
    if (g.j.A.aj(c))
      return (a = ((this.L ? 1 : -1) * this.B.ad) / 2), c.uf - this.B.Kb + a;
  }
  return (g.j.A.Sh(a) && c && g.j.A.Sh(c) && a.Sd == c.Sd) || (c && g.j.A.YB(c))
    ? this.B.Cd
    : this.B.$e;
};
b.zB = function (a, c) {
  return g.j.A.Dr(a) && g.j.A.xr(c)
    ? this.B.yE
    : g.j.A.Dr(a) || g.j.A.xr(c)
    ? this.B.lg
    : a.Si && c.Si
    ? this.B.Cd
    : !a.Cc && c.Cc
    ? this.B.SD
    : (a.Cc && c.Cc) || (!a.Cc && c.nm) || a.nm
    ? this.B.Cd
    : this.B.$e;
};
b.pB = function (a, c) {
  if (g.j.A.rf(c)) return a.Qc + c.height / 2;
  if (g.j.A.xr(a))
    return (
      (a = a.Qc + a.height - a.Rn),
      g.j.A.aj(c) ? a + c.height / 2 : a - c.height / 2
    );
  if (g.j.A.Dr(a))
    return g.j.A.Ak(c) ? a.Bh - c.height / 2 : a.Bh + c.height / 2;
  var d = a.Qc;
  g.j.A.Sh(c) || g.j.A.rm(c)
    ? ((d += c.height / 2),
      (a.Nv || a.Cc) && c.height + this.B.Fz <= a.height && (d += this.B.Fz))
    : (d = g.j.A.Yi(c) ? d + c.height / 2 : d + a.height / 2);
  return d;
};
b.du = function () {
  if (this.sm) {
    for (
      var a = 0, c = null, d = this.rows.length - 1, e;
      (e = this.rows[d]);
      d--
    )
      (e.Cw = a),
        g.j.A.HI(e) &&
          (e.Cc && Bd(this, e),
          c && c.Cc && e.width < c.width ? (e.Cw = c.width) : (a = e.width),
          (c = e));
    for (d = a = 0; (e = this.rows[d]); d++)
      e.Cc
        ? (a = this.io(e))
        : g.j.A.rf(e)
        ? (e.width = Math.max(a, e.Cw))
        : ((a = Math.max(a, e.Cw) - e.width), 0 < a && Cd(e, a), (a = e.width));
  } else g.qa.Nf.v.du.call(this);
};
b.io = function (a) {
  return this.sm && a.Cc
    ? this.yj + this.B.LF + this.Cf
    : g.qa.Nf.v.io.call(this, a);
};
b.cB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++) {
    e.Qc = c;
    e.Ua = this.Cf;
    c += e.height;
    a = Math.max(a, e.eg);
    var f = c - this.zc.Rl;
    e == this.Pb &&
      f < this.B.kn &&
      ((f = this.B.kn - f), (this.Pb.height += f), (c += f));
    Dd(this, e);
  }
  this.O &&
    this.P.X &&
    this.P.X.isConnected() &&
    (a = Math.max(a, K(this.P.X.ra()).width - this.B.ad));
  this.Pb.df = c - this.Pb.Rn;
  this.Qm = a + this.Cf + this.B.ad;
  this.width += this.B.ad;
  this.height = c + this.B.ad;
  this.As = this.zc.Bh;
};
g.qa.zd = function (a, c) {
  g.qa.zd.v.constructor.call(this, a, c);
  this.Mg = new g.qa.Oy(c);
};
g.g.object.U(g.qa.zd, g.j.zd);
b = g.qa.zd.prototype;
b.draw = function () {
  Ed(this);
  Fd(this);
  Gd(this);
  var a = this.P.Mb;
  a.wx(this.cb + "\n" + this.wr);
  var c = this.Mg;
  a.Vk.setAttribute("d", c.ua + "\n" + c.to);
  this.Da.L && a.rv();
  g.j.Bp && this.P.nx.IH(this.P, this.Da);
  Hd(this);
};
b.gv = function () {
  var a = this.Mg,
    c = this.Da.zc;
  a.ua += g.g.D.moveBy(c.Ua, a.Da.As);
  for (var d = 0, e; (e = c.elements[d]); d++)
    g.j.A.xo(e)
      ? (a.ua += a.Ge.Bz)
      : g.j.A.$i(e)
      ? (a.ua += a.Qw.Nx(a.bd))
      : g.j.A.wm(e)
      ? (a.ua += a.mJ.lj)
      : g.j.A.Ak(e)
      ? (a.ua += a.NK.path(a.bd))
      : g.j.A.rf(e) &&
        0 != e.width &&
        (a.ua += g.g.D.oa("H", e.Ua + e.width - a.ke));
  a.ua += g.g.D.oa("H", c.Ua + c.width - a.ke);
  Id(this.Mg, this.Da.zc);
  g.qa.zd.v.gv.call(this);
};
b.Tn = function (a) {
  this.Mg.Tn(a);
  g.qa.zd.v.Tn.call(this, a);
};
b.hv = function (a) {
  var c = this.Mg,
    d = Ad(a);
  if (c.bd) {
    var e = a.height - d.Xl;
    c.ua +=
      g.g.D.moveTo(d.Ua + d.width - c.ke, a.Qc) +
      c.So.wf(c.bd) +
      g.g.D.oa("v", e);
  } else c.ua += g.g.D.moveTo(d.Ua + d.width, a.Qc) + c.So.wf(c.bd);
  g.qa.zd.v.hv.call(this, a);
};
b.fv = function (a) {
  var c = this.Mg,
    d = Ad(a);
  if (c.bd) {
    var e = a.height - 2 * c.pm.height;
    c.ua +=
      g.g.D.moveTo(d.Ua, a.Qc) +
      c.pm.Vw(c.bd) +
      g.g.D.oa("v", e) +
      c.pm.gs(c.bd) +
      g.g.D.lineTo(a.width - d.Ua - c.pm.width, 0);
  } else
    c.ua +=
      g.g.D.moveTo(d.Ua, a.Qc + a.height) +
      c.pm.gs(c.bd) +
      g.g.D.lineTo(a.width - d.Ua - c.pm.width, 0);
  g.qa.zd.v.fv.call(this, a);
};
b.$A = function (a) {
  Id(this.Mg, a);
  this.cb += g.g.D.oa("H", a.Ua + a.width) + g.g.D.oa("V", a.Qc + a.height);
};
b.bv = function () {
  var a = this.Mg,
    c = this.Da.Pb;
  if (a.bd) a.ua += g.g.D.oa("V", c.df - a.ke);
  else {
    var d = a.Da.Pb.elements[0];
    g.j.A.xo(d)
      ? (a.ua += g.g.D.moveTo(c.Ua + a.ke, c.df - a.ke))
      : g.j.A.$i(d) &&
        ((a.ua += g.g.D.moveTo(c.Ua, c.df)), (a.ua += a.Qw.pu()));
  }
  g.qa.zd.v.bv.call(this);
};
b.ev = function () {
  var a = this.Mg,
    c = a.Da.O;
  c &&
    ((c = c.ze + c.height),
    a.bd
      ? (a.ua += g.g.D.moveTo(a.Da.Cf, c))
      : ((a.ua += g.g.D.moveTo(a.Da.Cf + a.ke, a.Da.Pb.df - a.ke)),
        (a.ua += g.g.D.oa("V", c))),
    (a.ua += a.So.No(a.bd)));
  a.bd ||
    ((c = a.Da.zc),
    (a.ua = g.j.A.$i(c.elements[0])
      ? a.ua + g.g.D.oa("V", a.Qw.height)
      : a.ua + g.g.D.oa("V", c.Bh + a.ke)));
  g.qa.zd.v.ev.call(this);
};
b.dv = function (a) {
  var c = this.Mg,
    d = c.ke,
    e = a.Ua + a.xg,
    f = a.Vl - a.height / 2,
    h = a.width - a.xg,
    k = f + d;
  if (c.bd) {
    f = a.ze - d;
    var l = a.height - (a.ze + a.Xl) + d;
    c.to +=
      g.g.D.moveTo(e - d, k) +
      g.g.D.oa("v", f) +
      c.So.wf(c.bd) +
      g.g.D.oa("v", l) +
      g.g.D.oa("h", h);
  } else
    c.to +=
      g.g.D.moveTo(a.Ua + a.width + d, k) +
      g.g.D.oa("v", a.height) +
      g.g.D.oa("h", -h) +
      g.g.D.moveTo(e, f + a.ze) +
      c.So.wf(c.bd);
  g.qa.zd.v.dv.call(this, a);
};
b.RC = function (a) {
  var c = a.Vl - a.height / 2;
  if (a.Ld) {
    var d = a.Ua + a.xg + this.B.ad;
    this.Da.L && (d *= -1);
    xc(a.Ld, d, c + a.ze + this.B.ad);
  }
};
b.TC = function (a) {
  var c = Ad(a);
  if (c.Ld) {
    var d = a.Ua + a.yj + c.uf;
    d = this.Da.L ? -1 * d : d + this.B.ad;
    xc(c.Ld, d, a.Qc + this.B.ad);
  }
};
b.QC = function (a) {
  var c = Ad(a);
  if (c.Ld) {
    var d = a.Ua + a.width + this.B.ad;
    this.Da.L && (d *= -1);
    xc(c.Ld, d, a.Qc);
  }
};
b.SC = function () {
  var a = this.Da.Pb;
  if (a.connection) {
    var c = a.connection,
      d = c.Ua;
    xc(c.Ld, (this.Da.L ? -d : d) + this.B.ad / 2, a.df + this.B.ad);
  }
};
g.qa.Ny = function (a) {
  this.Yl = a;
  this.OFFSET = 0.5;
  this.Bz = g.g.D.moveBy(this.OFFSET, this.OFFSET);
};
b = g.qa.Ny.prototype;
b.Y = function () {
  this.lF = Jd(this);
  this.aG = Kd(this);
  this.Jt = this.pw();
  this.zl = this.ow();
  this.ul = this.nw();
  this.Gl = this.qw();
};
function Jd(a) {
  var c = a.Yl.Kb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c + a) - a,
    e =
      g.g.D.moveBy(d, d) + g.g.D.arc("a", "0 0,0", c, g.g.D.Ta(-d - a, c - d)),
    f = g.g.D.arc("a", "0 0,0", c + a, g.g.D.Ta(c + a, c + a)),
    h =
      g.g.D.moveBy(d, -d) +
      g.g.D.arc("a", "0 0,0", c + a, g.g.D.Ta(c - d, d + a));
  return {
    width: c + a,
    height: c,
    Vw: function (k) {
      return k ? e : "";
    },
    gs: function (k) {
      return k ? f : h;
    },
  };
}
function Kd(a) {
  var c = a.Yl.Kb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c - a) + a,
    e =
      g.g.D.moveBy(d, d) +
      g.g.D.arc("a", "0 0,1", c - a, g.g.D.Ta(c - d, -d + a)),
    f =
      g.g.D.moveBy(a, c) + g.g.D.arc("a", "0 0,1", c - a, g.g.D.Ta(c, -c + a)),
    h = -d,
    k =
      g.g.D.moveBy(d, h) +
      g.g.D.arc("a", "0 0,1", c - a, g.g.D.Ta(-d + a, -h - c));
  return {
    height: c,
    Nx: function (l) {
      return l ? e : f;
    },
    pu: function () {
      return k;
    },
  };
}
b.pw = function () {
  var a = this.Yl.pq,
    c = this.Yl.wn,
    d = g.g.D.moveBy(-2, -c + 3.4) + g.g.D.lineTo(-0.45 * a, -2.1),
    e =
      g.g.D.oa("v", 2.5) +
      g.g.D.moveBy(0.97 * -a, 2.5) +
      g.g.D.curve("q", [g.g.D.Ta(0.05 * -a, 10), g.g.D.Ta(0.3 * a, 9.5)]) +
      g.g.D.moveBy(0.67 * a, -1.9) +
      g.g.D.oa("v", 2.5),
    f =
      g.g.D.oa("v", -1.5) +
      g.g.D.moveBy(-0.92 * a, -0.5) +
      g.g.D.curve("q", [g.g.D.Ta(-0.19 * a, -5.5), g.g.D.Ta(0, -11)]) +
      g.g.D.moveBy(0.92 * a, 1),
    h = g.g.D.moveBy(-5, c - 0.7) + g.g.D.lineTo(0.46 * a, -2.1);
  return {
    width: a,
    height: c,
    No: function (k) {
      return k ? d : f;
    },
    wf: function (k) {
      return k ? e : h;
    },
  };
};
b.ow = function () {
  return { lj: g.g.D.oa("h", this.OFFSET) + this.Yl.zl.lj };
};
b.nw = function () {
  return {
    lj:
      g.g.D.lineTo(5.1, 2.6) +
      g.g.D.moveBy(-10.2, 6.8) +
      g.g.D.lineTo(5.1, 2.6),
    height: 12,
    width: 10.2,
  };
};
b.qw = function () {
  var a = this.Yl.Gl.height,
    c =
      g.g.D.moveBy(25, -8.7) +
      g.g.D.curve("c", [
        g.g.D.Ta(29.7, -6.2),
        g.g.D.Ta(57.2, -0.5),
        g.g.D.Ta(75, 8.7),
      ]),
    d =
      g.g.D.curve("c", [
        g.g.D.Ta(17.8, -9.2),
        g.g.D.Ta(45.3, -14.9),
        g.g.D.Ta(75, -8.7),
      ]) + g.g.D.moveTo(100.5, a + 0.5);
  return {
    path: function (e) {
      return e ? c : d;
    },
  };
};
g.qa.ph = function (a, c, d) {
  this.Zl = d;
  this.dh = a;
  this.sp = g.g.o.M(
    g.g.G.$d,
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.dh
  );
  this.$b = g.g.o.M(g.g.G.$d, { class: "blocklyPath" }, this.dh);
  this.Vk = g.g.o.M(g.g.G.$d, { class: "blocklyPathLight" }, this.dh);
  this.Cu = "#000000";
  this.style = c;
};
g.g.object.U(g.qa.ph, g.j.ph);
b = g.qa.ph.prototype;
b.wx = function (a) {
  this.$b.setAttribute("d", a);
  this.sp.setAttribute("d", a);
};
b.rv = function () {
  this.$b.setAttribute("transform", "scale(-1 1)");
  this.Vk.setAttribute("transform", "scale(-1 1)");
  this.sp.setAttribute("transform", "translate(1,1) scale(-1 1)");
};
b.kc = function (a) {
  this.Vk.style.display = "";
  this.sp.style.display = "";
  this.Vk.setAttribute("stroke", this.style.ug);
  this.sp.setAttribute("fill", this.Cu);
  g.qa.ph.v.kc.call(this, a);
  this.$b.setAttribute("stroke", "none");
};
b.Zb = function (a) {
  this.style = a;
  this.Cu = g.g.Ab.mu("#000", this.style.Ii, 0.2) || this.Cu;
};
b.zD = function (a) {
  a
    ? (this.$b.setAttribute("filter", "url(#" + this.Zl.$q + ")"),
      (this.Vk.style.display = "none"))
    : (this.$b.setAttribute("filter", "none"),
      (this.Vk.style.display = "inline"));
};
b.BD = function (a) {
  a &&
    ((this.Vk.style.display = "none"),
    this.sp.setAttribute("fill", this.style.Mq),
    this.$b.setAttribute("stroke", "none"),
    this.$b.setAttribute("fill", this.style.Mq));
};
b.Qx = function (a) {
  g.qa.ph.v.Qx.call(this, a);
  a && this.$b.setAttribute("stroke", "none");
};
g.qa.qh = function (a) {
  g.qa.qh.v.constructor.call(this, a);
  this.Ge = null;
};
g.g.object.U(g.qa.qh, g.j.qh);
b = g.qa.qh.prototype;
b.Y = function (a, c) {
  g.qa.qh.v.Y.call(this, a, c);
  this.Ge = new g.qa.Ny(this.la());
  this.Ge.Y();
};
b.gx = function (a, c) {
  g.qa.qh.v.gx.call(this, a, c);
  this.Ge.Y();
};
b.lw = function () {
  return new g.qa.kh();
};
b.lC = function (a) {
  return new g.qa.Nf(this, a);
};
b.jC = function (a, c) {
  return new g.qa.zd(a, c);
};
b.kC = function (a, c) {
  return new g.qa.ph(a, c, this.la());
};
g.j.register("geras", g.qa.qh);
g.i.ADD_COMMENT = "Add Comment";
g.i.CANNOT_DELETE_VARIABLE_PROCEDURE =
  "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
g.i.CHANGE_VALUE_TITLE = "Change value:";
g.i.CLEAN_UP = "Clean up Blocks";
g.i.COLLAPSED_WARNINGS_WARNING = "Collapsed blocks contain warnings.";
g.i.COLLAPSE_ALL = "Collapse Blocks";
g.i.COLLAPSE_BLOCK = "Collapse Block";
g.i.CONTROLS_FLOW_STATEMENTS_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =
  "continue with next iteration of loop";
g.i.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK =
  "Break out of the containing loop.";
g.i.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =
  "Skip the rest of this loop, and continue with the next iteration.";
g.i.CONTROLS_FLOW_STATEMENTS_WARNING =
  "Warning: This block may only be used within a loop.";
g.i.CONTROLS_FOREACH_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#for-each";
g.i.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
g.i.CONTROLS_FOREACH_TOOLTIP =
  "For each item in a list, set the variable '%1' to the item, and then do some statements.";
g.i.CONTROLS_FOR_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#count-with";
g.i.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
g.i.CONTROLS_FOR_TOOLTIP =
  "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
g.i.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
g.i.CONTROLS_IF_ELSE_TOOLTIP =
  "Add a final, catch-all condition to the if block.";
g.i.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
g.i.CONTROLS_IF_IF_TOOLTIP =
  "Add, remove, or reorder sections to reconfigure this if block.";
g.i.CONTROLS_IF_MSG_ELSE = "else";
g.i.CONTROLS_IF_MSG_ELSEIF = "else if";
g.i.CONTROLS_IF_MSG_IF = "if";
g.i.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
g.i.CONTROLS_IF_TOOLTIP_2 =
  "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
g.i.CONTROLS_IF_TOOLTIP_3 =
  "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
g.i.CONTROLS_IF_TOOLTIP_4 =
  "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
g.i.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
g.i.CONTROLS_REPEAT_INPUT_DO = "do";
g.i.CONTROLS_REPEAT_TITLE = "repeat %1 times";
g.i.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
g.i.CONTROLS_WHILEUNTIL_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#repeat";
g.i.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
g.i.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
g.i.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =
  "While a value is false, then do some statements.";
g.i.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =
  "While a value is true, then do some statements.";
g.i.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
g.i.DELETE_BLOCK = "Delete Block";
g.i.DELETE_VARIABLE = "Delete the '%1' variable";
g.i.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
g.i.DELETE_X_BLOCKS = "Delete %1 Blocks";
g.i.DISABLE_BLOCK = "Disable Block";
g.i.DUPLICATE_BLOCK = "Duplicate";
g.i.DUPLICATE_COMMENT = "Duplicate Comment";
g.i.ENABLE_BLOCK = "Enable Block";
g.i.EXPAND_ALL = "Expand Blocks";
g.i.EXPAND_BLOCK = "Expand Block";
g.i.EXTERNAL_INPUTS = "External Inputs";
g.i.HELP = "Help";
g.i.INLINE_INPUTS = "Inline Inputs";
g.i.LISTS_CREATE_EMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-empty-list";
g.i.LISTS_CREATE_EMPTY_TITLE = "create empty list";
g.i.LISTS_CREATE_EMPTY_TOOLTIP =
  "Returns a list, of length 0, containing no data records";
g.i.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
g.i.LISTS_CREATE_WITH_CONTAINER_TOOLTIP =
  "Add, remove, or reorder sections to reconfigure this list block.";
g.i.LISTS_CREATE_WITH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.i.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
g.i.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
g.i.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
g.i.LISTS_GET_INDEX_FIRST = "first";
g.i.LISTS_GET_INDEX_FROM_END = "# from end";
g.i.LISTS_GET_INDEX_FROM_START = "#";
g.i.LISTS_GET_INDEX_GET = "get";
g.i.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
g.i.LISTS_GET_INDEX_LAST = "last";
g.i.LISTS_GET_INDEX_RANDOM = "random";
g.i.LISTS_GET_INDEX_REMOVE = "remove";
g.i.LISTS_GET_INDEX_TAIL = "";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM =
  "Returns the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST =
  "Removes and returns the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM =
  "Removes and returns the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST =
  "Removes and returns the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM =
  "Removes and returns a random item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM =
  "Removes the item at the specified position in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
g.i.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
g.i.LISTS_GET_SUBLIST_END_FROM_START = "to #";
g.i.LISTS_GET_SUBLIST_END_LAST = "to last";
g.i.LISTS_GET_SUBLIST_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
g.i.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
g.i.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
g.i.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
g.i.LISTS_GET_SUBLIST_TAIL = "";
g.i.LISTS_GET_SUBLIST_TOOLTIP =
  "Creates a copy of the specified portion of a list.";
g.i.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.";
g.i.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.";
g.i.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
g.i.LISTS_INDEX_OF_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
g.i.LISTS_INDEX_OF_LAST = "find last occurrence of item";
g.i.LISTS_INDEX_OF_TOOLTIP =
  "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
g.i.LISTS_INLIST = "in list";
g.i.LISTS_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#is-empty";
g.i.LISTS_ISEMPTY_TITLE = "%1 is empty";
g.i.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
g.i.LISTS_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#length-of";
g.i.LISTS_LENGTH_TITLE = "length of %1";
g.i.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
g.i.LISTS_REPEAT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.i.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
g.i.LISTS_REPEAT_TOOLTIP =
  "Creates a list consisting of the given value repeated the specified number of times.";
g.i.LISTS_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
g.i.LISTS_REVERSE_MESSAGE0 = "reverse %1";
g.i.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
g.i.LISTS_SET_INDEX_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#in-list--set";
g.i.LISTS_SET_INDEX_INPUT_TO = "as";
g.i.LISTS_SET_INDEX_INSERT = "insert at";
g.i.LISTS_SET_INDEX_SET = "set";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST =
  "Inserts the item at the start of a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM =
  "Inserts the item at the specified position in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST =
  "Append the item to the end of a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM =
  "Inserts the item randomly in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM =
  "Sets the item at the specified position in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
g.i.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
g.i.LISTS_SORT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
g.i.LISTS_SORT_ORDER_ASCENDING = "ascending";
g.i.LISTS_SORT_ORDER_DESCENDING = "descending";
g.i.LISTS_SORT_TITLE = "sort %1 %2 %3";
g.i.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";
g.i.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";
g.i.LISTS_SORT_TYPE_NUMERIC = "numeric";
g.i.LISTS_SORT_TYPE_TEXT = "alphabetic";
g.i.LISTS_SPLIT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
g.i.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
g.i.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
g.i.LISTS_SPLIT_TOOLTIP_JOIN =
  "Join a list of texts into one text, separated by a delimiter.";
g.i.LISTS_SPLIT_TOOLTIP_SPLIT =
  "Split text into a list of texts, breaking at each delimiter.";
g.i.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
g.i.LOGIC_BOOLEAN_FALSE = "false";
g.i.LOGIC_BOOLEAN_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#values";
g.i.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
g.i.LOGIC_BOOLEAN_TRUE = "true";
g.i.LOGIC_COMPARE_HELPURL =
  "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
g.i.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
g.i.LOGIC_COMPARE_TOOLTIP_GT =
  "Return true if the first input is greater than the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_GTE =
  "Return true if the first input is greater than or equal to the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_LT =
  "Return true if the first input is smaller than the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_LTE =
  "Return true if the first input is smaller than or equal to the second input.";
g.i.LOGIC_COMPARE_TOOLTIP_NEQ =
  "Return true if both inputs are not equal to each other.";
g.i.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
g.i.LOGIC_NEGATE_TITLE = "not %1";
g.i.LOGIC_NEGATE_TOOLTIP =
  "Returns true if the input is false. Returns false if the input is true.";
g.i.LOGIC_NULL = "null";
g.i.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
g.i.LOGIC_NULL_TOOLTIP = "Returns null.";
g.i.LOGIC_OPERATION_AND = "and";
g.i.LOGIC_OPERATION_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#logical-operations";
g.i.LOGIC_OPERATION_OR = "or";
g.i.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
g.i.LOGIC_OPERATION_TOOLTIP_OR =
  "Return true if at least one of the inputs is true.";
g.i.LOGIC_TERNARY_CONDITION = "test";
g.i.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
g.i.LOGIC_TERNARY_IF_FALSE = "if false";
g.i.LOGIC_TERNARY_IF_TRUE = "if true";
g.i.LOGIC_TERNARY_TOOLTIP =
  "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
g.i.MATH_ADDITION_SYMBOL = "+";
g.i.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
g.i.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
g.i.MATH_ARITHMETIC_TOOLTIP_POWER =
  "Return the first number raised to the power of the second number.";
g.i.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2";
g.i.MATH_ATAN2_TITLE = "atan2 of X:%1 Y:%2";
g.i.MATH_ATAN2_TOOLTIP =
  "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
g.i.MATH_CHANGE_HELPURL =
  "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
g.i.MATH_CHANGE_TITLE = "change %1 by %2";
g.i.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
g.i.MATH_CONSTANT_HELPURL =
  "https://en.wikipedia.org/wiki/Mathematical_constant";
g.i.MATH_CONSTANT_TOOLTIP =
  "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
g.i.MATH_CONSTRAIN_HELPURL =
  "https://en.wikipedia.org/wiki/Clamping_(graphics)";
g.i.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
g.i.MATH_CONSTRAIN_TOOLTIP =
  "Constrain a number to be between the specified limits (inclusive).";
g.i.MATH_DIVISION_SYMBOL = "\u00f7";
g.i.MATH_IS_DIVISIBLE_BY = "is divisible by";
g.i.MATH_IS_EVEN = "is even";
g.i.MATH_IS_NEGATIVE = "is negative";
g.i.MATH_IS_ODD = "is odd";
g.i.MATH_IS_POSITIVE = "is positive";
g.i.MATH_IS_PRIME = "is prime";
g.i.MATH_IS_TOOLTIP =
  "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
g.i.MATH_IS_WHOLE = "is whole";
g.i.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
g.i.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
g.i.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
g.i.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
g.i.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
g.i.MATH_NUMBER_TOOLTIP = "A number.";
g.i.MATH_ONLIST_HELPURL = "";
g.i.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
g.i.MATH_ONLIST_OPERATOR_MAX = "max of list";
g.i.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
g.i.MATH_ONLIST_OPERATOR_MIN = "min of list";
g.i.MATH_ONLIST_OPERATOR_MODE = "modes of list";
g.i.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
g.i.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
g.i.MATH_ONLIST_OPERATOR_SUM = "sum of list";
g.i.MATH_ONLIST_TOOLTIP_AVERAGE =
  "Return the average (arithmetic mean) of the numeric values in the list.";
g.i.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
g.i.MATH_ONLIST_TOOLTIP_MODE =
  "Return a list of the most common item(s) in the list.";
g.i.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
g.i.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
g.i.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
g.i.MATH_POWER_SYMBOL = "^";
g.i.MATH_RANDOM_FLOAT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.i.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
g.i.MATH_RANDOM_FLOAT_TOOLTIP =
  "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
g.i.MATH_RANDOM_INT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.i.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
g.i.MATH_RANDOM_INT_TOOLTIP =
  "Return a random integer between the two specified limits, inclusive.";
g.i.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
g.i.MATH_ROUND_OPERATOR_ROUND = "round";
g.i.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
g.i.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
g.i.MATH_ROUND_TOOLTIP = "Round a number up or down.";
g.i.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
g.i.MATH_SINGLE_OP_ABSOLUTE = "absolute";
g.i.MATH_SINGLE_OP_ROOT = "square root";
g.i.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
g.i.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
g.i.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
g.i.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
g.i.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
g.i.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
g.i.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
g.i.MATH_SUBTRACTION_SYMBOL = "-";
g.i.MATH_TRIG_ACOS = "acos";
g.i.MATH_TRIG_ASIN = "asin";
g.i.MATH_TRIG_ATAN = "atan";
g.i.MATH_TRIG_COS = "cos";
g.i.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
g.i.MATH_TRIG_SIN = "sin";
g.i.MATH_TRIG_TAN = "tan";
g.i.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
g.i.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
g.i.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
g.i.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
g.i.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
g.i.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
g.i.NEW_VARIABLE = "Create variable...";
g.i.NEW_VARIABLE_TITLE = "New variable name:";
g.i.ORDINAL_NUMBER_SUFFIX = "";
g.i.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
g.i.PROCEDURES_BEFORE_PARAMS = "with:";
g.i.PROCEDURES_CALLNORETURN_HELPURL =
  "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
g.i.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_CALLRETURN_TOOLTIP =
  "Run the user-defined function '%1' and use its output.";
g.i.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
g.i.PROCEDURES_CREATE_DO = "Create '%1'";
g.i.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
g.i.PROCEDURES_DEFNORETURN_DO = "";
g.i.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
g.i.PROCEDURES_DEFNORETURN_TITLE = "to";
g.i.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
g.i.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.i.PROCEDURES_DEFRETURN_RETURN = "return";
g.i.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
g.i.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
g.i.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
g.i.PROCEDURES_IFRETURN_TOOLTIP =
  "If a value is true, then return a second value.";
g.i.PROCEDURES_IFRETURN_WARNING =
  "Warning: This block may be used only within a function definition.";
g.i.PROCEDURES_MUTATORARG_TITLE = "input name:";
g.i.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
g.i.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
g.i.PROCEDURES_MUTATORCONTAINER_TOOLTIP =
  "Add, remove, or reorder inputs to this function.";
g.i.REDO = "Redo";
g.i.REMOVE_COMMENT = "Remove Comment";
g.i.RENAME_VARIABLE = "Rename variable...";
g.i.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
g.i.UNDO = "Undo";
g.i.UNNAMED_KEY = "unnamed";
g.i.VARIABLES_DEFAULT_NAME = "item";
g.i.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
g.i.VARIABLES_GET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#get";
g.i.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
g.i.VARIABLES_SET = "set %1 to %2";
g.i.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
g.i.VARIABLES_SET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#set";
g.i.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
g.i.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "A variable named '%1' already exists for another type: '%2'.";
g.i.WORKSPACE_ARIA_LABEL = "Blockly Workspace";
g.i.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
g.i.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = g.i.CONTROLS_IF_MSG_ELSEIF;
g.i.CONTROLS_IF_ELSE_TITLE_ELSE = g.i.CONTROLS_IF_MSG_ELSE;
g.i.CONTROLS_IF_IF_TITLE_IF = g.i.CONTROLS_IF_MSG_IF;
g.i.CONTROLS_IF_MSG_THEN = g.i.CONTROLS_REPEAT_INPUT_DO;
g.i.LISTS_CREATE_WITH_ITEM_TITLE = g.i.VARIABLES_DEFAULT_NAME;
g.i.LISTS_GET_INDEX_HELPURL = g.i.LISTS_INDEX_OF_HELPURL;
g.i.LISTS_GET_INDEX_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_GET_SUBLIST_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_INDEX_OF_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.LISTS_SET_INDEX_INPUT_IN_LIST = g.i.LISTS_INLIST;
g.i.MATH_CHANGE_TITLE_ITEM = g.i.VARIABLES_DEFAULT_NAME;
g.i.PROCEDURES_DEFRETURN_COMMENT = g.i.PROCEDURES_DEFNORETURN_COMMENT;
g.i.PROCEDURES_DEFRETURN_PROCEDURE = g.i.PROCEDURES_DEFNORETURN_PROCEDURE;
g.i.PROCEDURES_DEFRETURN_TITLE = g.i.PROCEDURES_DEFNORETURN_TITLE;
g.i.MATH_HUE = "230";
g.i.PROCEDURES_HUE = "290";
var BlocklyStorage = {},
  Ld = null,
  Md = null,
  Nd = null;
function Od() {
  var a = Ld();
  Pd("/storage", "xml=" + encodeURIComponent(a), Qd);
}
var Rd = {};
function Pd(a, c, d, e, f) {
  Rd[a] && Rd[a].abort();
  Rd[a] = new XMLHttpRequest();
  Rd[a].onload = function () {
    200 === this.status
      ? d && d.call(this)
      : e
      ? e.call(this)
      : Sd(R("Games_httpRequestError") + "\nXHR status: " + this.status);
    Rd[a] = null;
  };
  f = f || "POST";
  Rd[a].open(f, a);
  "POST" === f &&
    Rd[a].setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  Rd[a].send(c);
}
function Qd() {
  window.location.hash = this.responseText.trim();
  Sd(R("Games_linkAlert").replace("%1", window.location.href));
  Nd = Ld();
}
function Td() {
  var a = this.responseText.trim();
  a.length
    ? Md(a)
    : Sd(R("Games_hashError").replace("%1", window.location.hash));
  Nd = Ld();
}
function Sd(a) {
  if ("object" === typeof S) {
    var c = document.getElementById("linkButton");
    S.oD(c, a);
  } else alert(a);
}
var C = null,
  Ud = "",
  Vd = "";
function Wd() {
  pd();
  var a = document.getElementById("linkButton");
  a && (kd ? (a.style.display = "none") : ((Ld = Xd), (Md = Yd), td(a, Od)));
  (a = document.getElementById("languageMenu")) &&
    a.addEventListener("change", Zd, !0);
}
function $d() {
  var a =
      '<xml><block type="music_start" deletable="' +
      (6 < Q) +
      '" x="180" y="50"></block></xml>',
    c = 10 != Q || ae;
  if (!kd && 1 < window.location.hash.length)
    Pd(
      "/storage",
      "key=" + encodeURIComponent(window.location.hash.substring(1)),
      Td
    );
  else {
    var d = null;
    try {
      d = window.sessionStorage.iC;
    } catch (h) {}
    d && delete window.sessionStorage.iC;
    var e = qd(Q),
      f = c && qd(Q - 1);
    f && "function" == typeof c && (f = c(f));
    (a = d || e || f || a) && Yd(a);
  }
}
function Yd(a) {
  a = g.T.Pe(a);
  C.clear();
  g.T.Mi(a, C);
  a = C;
  a.Yk.length = 0;
  a.Uo.length = 0;
  g.h.dH();
}
function Xd() {
  var a = g.T.iL();
  if (1 == C.Ib(!1).length && a.querySelector) {
    var c = a.querySelector("block");
    c && (c.removeAttribute("x"), c.removeAttribute("y"));
  }
  return g.T.fe(a);
}
function be() {
  "object" == typeof BlocklyStorage &&
    null !== Nd &&
    Nd != Xd() &&
    ((window.location.hash = ""), (Nd = null));
}
function ce(a) {
  var c = document.getElementById("toolbox");
  c && (a.toolbox = c);
  a.media = "third-party/blockly/media/";
  a.oneBasedIndex = !1;
  C = g.Xi("blockly", a);
  G(C, be);
}
function de() {
  window.location = (kd ? "index.html" : "./") + "?lang=" + id;
}
function Zd() {
  window.sessionStorage && (window.sessionStorage.iC = Xd());
  var a = document.getElementById("languageMenu");
  a = encodeURIComponent(a.options[a.selectedIndex].value);
  var c = window.location.search;
  c =
    1 >= c.length
      ? "?lang=" + a
      : /[?&]lang=[^&]*/.test(c)
      ? c.replace(/([?&]lang=)[^&]*/, "$1" + a)
      : c.replace(/\?/, "?lang=" + a + "&");
  window.location =
    window.location.protocol +
    "//" +
    window.location.host +
    window.location.pathname +
    c;
}
function ee() {
  10 > Q
    ? (window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        id +
        "&level=" +
        (Q + 1))
    : de();
}
function fe(a, c) {
  if (a) {
    var d = a.match(/^block_id_([^']+)$/);
    d && (a = d[1]);
  }
  Vc(a, c);
}
function ge(a, c) {
  a = document.getElementById(a);
  a.firstChild ||
    ((a = g.Xi(a, { rtl: -1 != hd.indexOf(id), readOnly: !0 })),
    "string" != typeof c && (c = c.join("")),
    g.T.Mi(g.T.Pe(c), a));
}
function he(a) {
  a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
  return a.replace(/\s+$/, "");
}
function ie(a) {
  if (
    ("click" == a.type && "touchend" == je && ke + 2e3 > Date.now()) ||
    (je == a.type && ke + 400 > Date.now())
  )
    return a.preventDefault(), a.stopPropagation(), !0;
  je = a.type;
  ke = Date.now();
  return !1;
}
var je = null,
  ke = 0;
function le() {
  setTimeout(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/JS-Interpreter/compressed.js";
    document.head.appendChild(a);
  }, 1);
}
function me() {
  setTimeout(function () {
    var a = document.createElement("link");
    a.rel = "stylesheet";
    a.type = "text/css";
    a.href = "common/prettify.css";
    document.head.appendChild(a);
    a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "common/prettify.js";
    document.head.appendChild(a);
  }, 1);
}
var S = {
  xk: !1,
  RA: null,
  Uq: null,
  Tk: function (a, c, d, e, f, h) {
    function k() {
      S.xk &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    S.xk && S.Fe(!1);
    g.Gg() && g.Dc(!0);
    S.xk = !0;
    S.RA = c;
    S.Uq = h;
    var l = document.getElementById("dialog");
    h = document.getElementById("dialogShadow");
    var m = document.getElementById("dialogBorder"),
      n;
    for (n in f) l.style[n] = f[n];
    e &&
      ((h.style.visibility = "visible"),
      (h.style.opacity = 0.3),
      (h.style.zIndex = 9),
      (e = document.createElement("div")),
      (e.id = "dialogHeader"),
      l.appendChild(e),
      (S.Qu = g.ed(e, "mousedown", null, S.xH)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    d && c ? (S.Ir(c, !1, 0.2), S.Ir(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  SA: 0,
  TA: 0,
  xH: function (a) {
    S.Tu();
    if (!g.g.Bk(a)) {
      var c = document.getElementById("dialog");
      S.SA = c.offsetLeft - a.clientX;
      S.TA = c.offsetTop - a.clientY;
      S.Su = g.ed(document, "mouseup", null, S.Tu);
      S.Ru = g.ed(document, "mousemove", null, S.yH);
      a.stopPropagation();
    }
  },
  yH: function (a) {
    var c = document.getElementById("dialog"),
      d = S.SA + a.clientX;
    a = S.TA + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - c.offsetHeight);
    d = Math.max(d, 0);
    d = Math.min(d, window.innerWidth - c.offsetWidth);
    c.style.left = d + "px";
    c.style.top = a + "px";
  },
  Tu: function () {
    S.Su && (g.Oa(S.Su), (S.Su = null));
    S.Ru && (g.Oa(S.Ru), (S.Ru = null));
  },
  Fe: function (a) {
    function c() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (S.xk) {
      S.Tu();
      S.Qu && (g.Oa(S.Qu), (S.Qu = null));
      S.xk = !1;
      S.Uq && S.Uq();
      S.Uq = null;
      var d = !1 === a ? null : S.RA;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      d && a ? (S.Ir(a, !1, 0.8), S.Ir(d, !0, 0.2), setTimeout(c, 175)) : c();
      a.style.visibility = "hidden";
      a.style.zIndex = -1;
      for (
        (d = document.getElementById("dialogHeader")) &&
        d.parentNode.removeChild(d);
        a.firstChild;

      )
        (d = a.firstChild),
          (d.className += " dialogHiddenContent"),
          document.body.appendChild(d);
    }
  },
  Ir: function (a, c, d) {
    function e() {
      f.style.width = h.width + "px";
      f.style.height = h.height + "px";
      f.style.left = h.x + "px";
      f.style.top = h.y + "px";
      f.style.opacity = d;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        h = S.UH(a);
      c
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  UH: function (a) {
    var c = g.g.style.ik(a);
    c = { x: c.x, y: c.y };
    a.getBBox
      ? ((a = a.getBBox()), (c.height = a.height), (c.width = a.width))
      : ((c.height = a.offsetHeight), (c.width = a.offsetWidth));
    return c;
  },
  oD: function (a, c) {
    var d = document.getElementById("containerStorage");
    d.textContent = "";
    c = c.split("\n");
    for (var e = 0; e < c.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(c[e]));
      d.appendChild(f);
    }
    d = document.getElementById("dialogStorage");
    S.Tk(d, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, S.Cs);
    S.zs();
  },
  KG: function () {
    if (!qd(Q))
      if (S.xk || C.Ec()) setTimeout(S.KG, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          c = document.getElementById("abortCancel");
        c.addEventListener("click", S.Fe, !0);
        c.addEventListener("touchend", S.Fe, !0);
        c = document.getElementById("abortOk");
        c.addEventListener("click", de, !0);
        c.addEventListener("touchend", de, !0);
        S.Tk(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function () {
            document.body.removeEventListener("keydown", S.bA, !0);
          }
        );
        document.body.addEventListener("keydown", S.bA, !0);
      }
  },
  iH: function () {
    var a = document.getElementById("dialogDone");
    if (C) {
      var c = document.getElementById("dialogLinesText");
      c.textContent = "";
      var d = Vd;
      d = he(d);
      var e = d.replace(/\/\/[^\n]*/g, "");
      e = e.replace(/\/\*.*\*\//g, "");
      e = e.replace(/[ \t]+\n/g, "\n");
      e = e.replace(/\n+/g, "\n");
      e = e.trim();
      e = e.split("\n").length;
      var f = document.getElementById("containerCode");
      f.textContent = d;
      "function" == typeof prettyPrintOne &&
        ((d = f.innerHTML), (d = prettyPrintOne(d, "js")), (f.innerHTML = d));
      d =
        1 == e
          ? R("Games_linesOfCode1")
          : R("Games_linesOfCode2").replace("%1", String(e));
      c.appendChild(document.createTextNode(d));
    }
    d =
      10 > Q
        ? R("Games_nextLevel").replace("%1", String(Q + 1))
        : R("Games_finalLevel");
    c = document.getElementById("doneCancel");
    c.addEventListener("click", S.Fe, !0);
    c.addEventListener("touchend", S.Fe, !0);
    c = document.getElementById("doneOk");
    c.addEventListener("click", ee, !0);
    c.addEventListener("touchend", ee, !0);
    S.Tk(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function () {
        document.body.removeEventListener("keydown", S.xA, !0);
      }
    );
    document.body.addEventListener("keydown", S.xA, !0);
    document.getElementById("dialogDoneText").textContent = d;
  },
  QA: function (a) {
    !S.xk ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (S.Fe(!0), a.stopPropagation(), a.preventDefault());
  },
  zs: function () {
    document.body.addEventListener("keydown", S.QA, !0);
  },
  Cs: function () {
    document.body.removeEventListener("keydown", S.QA, !0);
  },
  xA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      S.Fe(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && ee();
  },
  bA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      S.Fe(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && de();
  },
};
window.BlocklyDialogs = S;
S.hideDialog = S.Fe;
function ne() {
  document.getElementById("galleryXml").value = Xd();
  var a = document.getElementById("galleryDialog");
  if (!oe) {
    var c = document.getElementById("galleryCancel");
    c.addEventListener("click", S.Fe, !0);
    c.addEventListener("touchend", S.Fe, !0);
    c = document.getElementById("galleryOk");
    c.addEventListener("click", pe, !0);
    c.addEventListener("touchend", pe, !0);
    oe = !0;
  }
  c = document.getElementById("submitButton");
  S.Tk(a, c, !0, !0, { width: "40%", left: "30%", top: "3em" }, function () {
    document.body.removeEventListener("keydown", qe, !0);
  });
  document.body.addEventListener("keydown", qe, !0);
  setTimeout(function () {
    document.getElementById("galleryTitle").focus();
  }, 250);
}
var oe;
function qe(a) {
  27 == a.keyCode ? S.Fe(!0) : 13 == a.keyCode && pe();
}
function re(a, c) {
  for (var d = [], e = 0, f; (f = a.elements[e]); e++)
    f.name &&
      d.push(encodeURIComponent(f.name) + "=" + encodeURIComponent(f.value));
  Pd(a.action, d.join("&"), c, void 0, void 0);
}
function pe() {
  var a = document.getElementById("galleryTitle");
  a.value.trim()
    ? ((a = document.getElementById("galleryForm")),
      re(a, function () {
        S.oD(null, R("Games_submitted"));
      }),
      S.Fe(!0))
    : ((a.value = ""), a.focus());
}
g.Rc = function (a, c, d) {
  this.lp = !0;
  g.Rc.v.constructor.call(this, a, c, d);
  this.Xr = this.Wr = this.wd = null;
  this.hr = !1;
  this.s = null;
};
g.g.object.U(g.Rc, g.Yd);
g.Rc.prototype.kl = "";
g.Rc.ea = function (a) {
  var c = g.g.Nc(a.text);
  return new g.Rc(c, void 0, a);
};
g.Rc.prototype.Fl = !0;
g.Rc.UD = 4;
b = g.Rc.prototype;
b.dt = "text";
b.ee = function (a) {
  g.Rc.v.ee.call(this, a);
  "boolean" == typeof a.spellcheck && (this.lp = a.spellcheck);
};
b.qk = function () {
  if (this.la().Ky) {
    for (var a = 0, c = 0, d = 0, e; (e = this.K.S[d]); d++) {
      for (var f = 0; e.hb[f]; f++) a++;
      e.connection && c++;
    }
    this.hr = 1 >= a && this.K.O && !c;
  } else this.hr = !1;
  this.hr ? (this.Au = this.K.Ma()) : Xb(this);
  Yb(this);
};
b.Kh = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
b.YA = function () {
  if (this.vk) {
    this.$v = !1;
    var a = this.Fb;
    this.Fb = this.wd.$K;
    this.K &&
      g.h.isEnabled() &&
      g.h.Fa(new g.h.gh(this.K, "field", this.name || null, a, this.Fb));
  }
};
b.Bg = function (a) {
  this.$v = !0;
  this.Fb = a;
  this.vk || (this.Pg = !0);
};
b.kc = function () {
  this.K &&
    this.la().Ky &&
    (this.lc
      ? this.lc.setAttribute("stroke", this.K.style.ug)
      : this.K.Mb.$b.setAttribute("fill", this.la().Cy));
};
b.sj = function () {
  g.Rc.v.sj.call(this);
  if (this.vk) {
    se(this);
    var a = this.wd;
    this.$v
      ? (g.g.o.wc(a, "blocklyInvalidInput"), g.g.ta.md(a, g.g.ta.State.Ty, !1))
      : (g.g.o.Ha(a, "blocklyInvalidInput"), g.g.ta.md(a, g.g.ta.State.Ty, !0));
  }
};
function te(a) {
  0 != a.lp && ((a.lp = !1), a.wd && a.wd.setAttribute("spellcheck", a.lp));
}
b.Bf = function (a, c) {
  this.s = this.K.u;
  a = c || !1;
  !a && (g.g.userAgent.PF || g.g.userAgent.Wm || g.g.userAgent.ql)
    ? ue(this)
    : (g.ba.show(this, this.K.L, this.gL.bind(this)),
      (this.wd = this.Vx()),
      (this.vk = !0),
      a || (this.wd.focus({ preventScroll: !0 }), this.wd.select()));
};
function ue(a) {
  g.prompt(
    g.i.CHANGE_VALUE_TITLE,
    a.je(),
    function (c) {
      this.setValue(this.Iv(c));
    }.bind(a)
  );
}
b.Vx = function () {
  var a = g.ba.ib;
  g.g.o.Ha(Wb(this), "editing");
  var c = document.createElement("input");
  c.className = "blocklyHtmlInput";
  c.setAttribute("spellcheck", this.lp);
  var d = Yc(this.s),
    e = this.la().pi * d + "pt";
  a.style.fontSize = e;
  c.style.fontSize = e;
  e = g.Rc.UD * d + "px";
  if (this.hr) {
    e = bc(this);
    e = (e.bottom - e.top) / 2 + "px";
    var f = this.K.getParent() ? this.K.getParent().style.ug : this.K.style.ug;
    c.style.border = 1 * d + "px solid " + f;
    a.style.borderRadius = e;
    a.style.transition = "box-shadow 0.25s ease 0s";
    this.la().SE &&
      (a.style.boxShadow =
        "rgba(255, 255, 255, 0.3) 0px 0px 0px " + 4 * d + "px");
  }
  c.style.borderRadius = e;
  a.appendChild(c);
  c.value = c.defaultValue = this.Av(this.Fb);
  c.$K = this.Fb;
  c.FC = null;
  se(this);
  this.Wr = g.ya(c, "keydown", this, this.tJ);
  this.Xr = g.ya(c, "input", this, this.sJ);
  return c;
};
b.gL = function () {
  this.vk = !1;
  this.$v = !0;
  cc(this);
  this.Hw && this.Hw(this.Fb);
  this.Wr && (g.Oa(this.Wr), (this.Wr = null));
  this.Xr && (g.Oa(this.Xr), (this.Xr = null));
  var a = g.ba.ib.style;
  a.width = "auto";
  a.height = "auto";
  a.fontSize = "";
  a.transition = "";
  a.boxShadow = "";
  this.wd = null;
  g.g.o.wc(Wb(this), "editing");
};
b.tJ = function (a) {
  if (a.keyCode == g.g.R.Xp) g.ba.Ia(), g.H.Ui();
  else if (a.keyCode == g.g.R.gt)
    (this.wd.value = this.wd.defaultValue), g.ba.Ia(), g.H.Ui();
  else if (a.keyCode == g.g.R.sG) {
    g.ba.Ia();
    g.H.Ui();
    var c = this.K,
      d = !a.shiftKey,
      e = new g.tq();
    H(e, g.F.$l(this));
    var f = e.jb;
    e.fc({ name: d ? g.navigation.yb.Dd : g.navigation.yb.Gd });
    (d = e.jb) &&
      d !== f &&
      ((f = d.Ea), hb(f) && f.Bf(void 0), c.u.ub && H(c.u.Db(), d));
    a.preventDefault();
  }
};
b.sJ = function () {
  var a = this.wd.value;
  a !== this.wd.FC &&
    ((this.wd.FC = a),
    g.h.ga(!0),
    this.setValue(this.Iv(a)),
    cc(this),
    se(this),
    g.h.ga(!1));
};
function se(a) {
  var c = g.ba.ib,
    d = bc(a);
  c.style.width = d.right - d.left + "px";
  c.style.height = d.bottom - d.top + "px";
  a = new g.g.V(a.K.L ? d.right - c.offsetWidth : d.left, d.top);
  c.style.left = a.x + "px";
  c.style.top = a.y + "px";
}
b.bC = function () {
  return !0;
};
b.km = function () {
  return this.vk && this.wd ? this.wd.value : null;
};
b.Av = function (a) {
  return String(a);
};
b.Iv = function (a) {
  return a;
};
g.lf.register("field_input", g.Rc);
function ve(a) {
  ve.v.constructor.call(this, a);
}
g.g.object.U(ve, g.Rc);
ve.ea = function (a) {
  return new ve(a.pitch);
};
var we = "C3 D3 E3 F3 G3 A3 B3 C4 D4 E4 F4 G4 A4".split(/ /);
b = ve.prototype;
b.Bf = function () {
  ve.v.Bf.call(this);
  if (g.ba.ib.firstChild) {
    var a = this.jv();
    g.H.mB().appendChild(a);
    g.H.$f(this.K.kr(), this.K.style.ug);
    g.H.hD(this, this.kv.bind(this));
    this.eH = g.ed(this.Wb, "click", this, this.yI);
    this.dJ = g.ed(this.Wb, "mousemove", this, this.xJ);
    xe(this);
  }
};
b.jv = function () {
  this.Wb = document.createElement("div");
  this.Wb.id = "notePicker";
  return this.Wb;
};
b.kv = function () {
  g.Oa(this.eH);
  g.Oa(this.dJ);
};
b.yI = function () {
  g.ba.Ia();
  g.H.Ui();
};
b.xJ = function (a) {
  var c = this.Wb.getBoundingClientRect();
  a = g.g.Vd.Xj(Math.round(13.5 - (a.clientY - c.top) / 7.5), 0, 12);
  this.Wb.style.backgroundPosition = 37 * -a + "px 0";
  this.Pg = !0;
  this.vk && (this.wd.value = this.Av(a));
  this.setValue(a);
};
b.km = function () {
  if (this.vk) var a = ve.v.km.call(this);
  else (a = this.getValue()), (a = we[Number(a)] || null);
  return a;
};
b.Av = function (a) {
  return we[Number(a)];
};
b.Iv = function (a) {
  a = we.indexOf(a.trim().toUpperCase());
  return -1 < a ? a : void 0;
};
b.sj = function () {
  ve.v.sj.call(this);
  xe(this);
};
function xe(a) {
  if (a.Wb) {
    var c = a.getValue();
    a.Wb.style.backgroundPosition = 37 * -c + "px 0";
  }
}
b.Kh = function (a) {
  return null === a || void 0 === a ? null : we[Number(a)] ? a : null;
};
g.lf.register("field_pitch", ve);
g.eb = function (a, c, d) {
  "function" != typeof a && g.eb.DD(a);
  this.Hk = a;
  this.Ix = this.$w = this.ir = null;
  a = this.Hk;
  if (Array.isArray(a)) {
    for (var e = !1, f = 0; f < a.length; f++) {
      var h = a[f][0];
      "string" == typeof h
        ? (a[f][0] = g.g.Nc(h))
        : (null != h.alt && (a[f][0].alt = g.g.Nc(h.alt)), (e = !0));
    }
    if (!(e || 2 > a.length)) {
      e = [];
      for (f = 0; f < a.length; f++) e.push(a[f][0]);
      f = g.g.pb.Bx(e);
      h = g.g.pb.fH(e, f);
      var k = g.g.pb.gH(e, f);
      (!h && !k) ||
        f <= h + k ||
        (h && (this.$w = e[0].substring(0, h - 1)),
        k && (this.Ix = e[0].substr(1 - k)),
        (this.Hk = g.eb.OG(a, h, k)));
    }
  }
  this.Gm = this.getOptions(!1)[0];
  g.eb.v.constructor.call(this, this.Gm[1], c, d);
  this.Lm = this.cf = this.Wb = this.Xc = this.ap = null;
};
g.g.object.U(g.eb, g.Yd);
g.eb.ea = function (a) {
  return new g.eb(a.options, void 0, a);
};
g.eb.prototype.Fl = !0;
g.eb.sL = 25;
g.eb.pM = 0.45;
g.eb.iF = 5;
g.eb.jF = 2 * g.eb.iF;
g.eb.by = g.g.userAgent.Wm ? "\u25bc" : "\u25be";
b = g.eb.prototype;
b.dt = "default";
b.qk = function () {
  this.Cx() ? Xb(this) : (this.Au = this.K.Ma());
  Yb(this);
  this.Wb = g.g.o.M(g.g.G.si, {}, this.ie);
  this.la().PE
    ? ((this.Lm = g.g.o.M(
        g.g.G.si,
        { height: this.la().an + "px", width: this.la().an + "px" },
        this.ie
      )),
      this.Lm.setAttributeNS(g.g.o.bf, "xlink:href", this.la().QE))
    : ((this.cf = g.g.o.M(g.g.G.Kz, {}, this.Hc)),
      this.cf.appendChild(
        document.createTextNode(this.K.L ? g.eb.by + " " : " " + g.eb.by)
      ),
      this.K.L
        ? this.Hc.insertBefore(this.cf, this.ci)
        : this.Hc.appendChild(this.cf));
  this.lc && g.g.o.Ha(this.lc, "blocklyDropdownRect");
};
b.Cx = function () {
  return !this.la().jt || (this.la().jt && !this.K.Na);
};
b.Bf = function (a) {
  this.Xc = this.jv();
  this.Xc.Ow =
    a && "number" === typeof a.clientX ? new g.g.V(a.clientX, a.clientY) : null;
  this.Xc.Ga(g.H.mB());
  g.g.o.Ha(this.Xc.Cb, "blocklyDropdownMenu");
  if (this.la().OE) {
    a = this.K.Na ? this.K.getParent().kr() : this.K.kr();
    var c = this.K.Na ? this.K.getParent().style.ug : this.K.style.ug;
    g.H.$f(a, c);
  }
  g.H.hD(this, this.kv.bind(this));
  this.Xc.focus();
  this.ap && this.Xc.ag(this.ap);
  this.kc();
};
b.jv = function () {
  var a = new g.yt();
  a.Af(g.g.ta.Bi.xF);
  var c = this.getOptions(!1);
  this.ap = null;
  for (var d = 0; d < c.length; d++) {
    var e = c[d][0],
      f = c[d][1];
    if ("object" == typeof e) {
      var h = new Image(e.width, e.height);
      h.src = e.src;
      h.alt = e.alt || "";
      e = h;
    }
    e = new g.zt(e, f);
    e.Af(g.g.ta.Bi.XF);
    e.tx = this.K.L;
    e.yu = !0;
    a.sf.push(e);
    e.zu = f == this.Fb;
    f == this.Fb && (this.ap = e);
    qc(e, this.pI, this);
  }
  return a;
};
b.kv = function () {
  this.Xc && this.Xc.I();
  this.ap = this.Xc = null;
  this.kc();
};
b.pI = function (a) {
  g.H.po(this, !0);
  this.IC(a);
};
b.IC = function (a) {
  this.setValue(a.getValue());
};
g.eb.OG = function (a, c, d) {
  for (var e = [], f = 0; f < a.length; f++) {
    var h = a[f][0],
      k = a[f][1];
    h = h.substring(c, h.length - d);
    e[f] = [h, k];
  }
  return e;
};
b = g.eb.prototype;
b.getOptions = function (a) {
  return "function" == typeof this.Hk
    ? ((this.ir && a) || ((this.ir = this.Hk.call(this)), g.eb.DD(this.ir)),
      this.ir)
    : this.Hk;
};
b.Kh = function (a) {
  for (var c = !1, d = this.getOptions(!0), e = 0, f; (f = d[e]); e++)
    if (f[1] == a) {
      c = !0;
      break;
    }
  return c
    ? a
    : (this.K &&
        console.warn(
          "Cannot set the dropdown's value to an unavailable option. Block type: " +
            this.K.type +
            ", Field name: " +
            this.name +
            ", Value: " +
            a
        ),
      null);
};
b.Bg = function (a) {
  g.eb.v.Bg.call(this, a);
  a = this.getOptions(!0);
  for (var c = 0, d; (d = a[c]); c++) d[1] == this.Fb && (this.Gm = d);
};
b.kc = function () {
  this.lc &&
    (this.lc.setAttribute("stroke", this.K.style.ug),
    this.Xc
      ? this.lc.setAttribute("fill", this.K.style.ug)
      : this.lc.setAttribute("fill", "transparent"));
  this.K &&
    this.cf &&
    (this.cf.style.fill = this.K.Na ? this.K.style.Mq : this.K.style.Ii);
};
b.sj = function () {
  this.ci.nodeValue = "";
  this.Wb.style.display = "none";
  var a = this.Gm && this.Gm[0];
  if (a && "object" == typeof a) {
    this.Wb.style.display = "";
    this.Wb.setAttributeNS(g.g.o.bf, "xlink:href", a.src);
    this.Wb.setAttribute("height", a.height);
    this.Wb.setAttribute("width", a.width);
    var c = Number(a.height);
    a = Number(a.width);
    var d = !!this.lc,
      e = Math.max(d ? this.la().Ey : 0, c + g.eb.jF);
    d = d ? this.la().ll : 0;
    var f = this.Lm
      ? ye(this, a + d, e / 2 - this.la().an / 2)
      : g.g.o.Bv(this.cf, this.la().pi, this.la().ri, this.la().oi);
    this.nd.width = a + f + 2 * d;
    this.nd.height = e;
    var h = 0;
    this.K.L
      ? this.Wb.setAttribute("x", d + f)
      : ((h = a + f),
        this.Hc.setAttribute("text-anchor", "end"),
        this.Wb.setAttribute("x", d));
    this.Wb.setAttribute("y", e / 2 - c / 2);
    $b(this, h + d, a + f);
  } else
    (this.ci.nodeValue = this.lr()),
      g.g.o.Ha(this.Hc, "blocklyDropdownText"),
      this.Hc.setAttribute("text-anchor", "start"),
      (e = !!this.lc),
      (c = Math.max(e ? this.la().Ey : 0, this.la().$p)),
      (a = g.g.o.Bv(this.Hc, this.la().pi, this.la().ri, this.la().oi)),
      (e = e ? this.la().ll : 0),
      (d = 0),
      this.Lm && (d = ye(this, a + e, c / 2 - this.la().an / 2)),
      (this.nd.width = a + d + 2 * e),
      (this.nd.height = c),
      $b(this, e, a);
  ac(this);
};
function ye(a, c, d) {
  if (!a.Lm) return 0;
  var e = a.lc ? a.la().ll : 0,
    f = a.la().RE,
    h = a.la().an;
  a.Lm.setAttribute(
    "transform",
    "translate(" + (a.K.L ? e : c + f) + "," + d + ")"
  );
  return h + f;
}
b.km = function () {
  if (!this.Gm) return null;
  var a = this.Gm[0];
  return "object" == typeof a ? a.alt : a;
};
g.eb.DD = function (a) {
  if (!Array.isArray(a))
    throw TypeError("FieldDropdown options must be an array.");
  if (!a.length)
    throw TypeError("FieldDropdown options must not be an empty array.");
  for (var c = !1, d = 0; d < a.length; ++d) {
    var e = a[d];
    Array.isArray(e)
      ? "string" != typeof e[1]
        ? ((c = !0),
          console.error(
            "Invalid option[" +
              d +
              "]: Each FieldDropdown option id must be a string. Found " +
              e[1] +
              " in: ",
            e
          ))
        : e[0] &&
          "string" != typeof e[0] &&
          "string" != typeof e[0].src &&
          ((c = !0),
          console.error(
            "Invalid option[" +
              d +
              "]: Each FieldDropdown option must have a string label or image description. Found" +
              e[0] +
              " in: ",
            e
          ))
      : ((c = !0),
        console.error(
          "Invalid option[" +
            d +
            "]: Each FieldDropdown option must be an array. Found: ",
          e
        ));
  }
  if (c) throw TypeError("Found invalid FieldDropdown options.");
};
g.eb.prototype.fc = function (a) {
  if (this.Xc)
    switch (a.name) {
      case g.navigation.yb.Gd:
        return oc(this.Xc), !0;
      case g.navigation.yb.Dd:
        return (a = this.Xc), pc(a, a.sf.indexOf(a.Vi), 1), !0;
      default:
        return !1;
    }
  return g.eb.v.fc.call(this, a);
};
g.lf.register("field_dropdown", g.eb);
g.Ic = function (a) {
  g.Ic.v.constructor.call(this, null);
  this.YC = a;
};
g.g.object.U(g.Ic, g.Zd);
b = g.Ic.prototype;
b.Rm = 0;
b.Dp = 0;
b.cv = function (a) {
  g.g.o.M(
    g.g.G.Bc,
    { class: "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" },
    a
  );
  g.g.o.M(
    g.g.G.$d,
    {
      class: "blocklyIconSymbol",
      d:
        "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z",
    },
    a
  );
  g.g.o.M(
    g.g.G.Zs,
    { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" },
    a
  );
};
b.Qv = function (a) {
  this.P.Sd() && g.Zd.prototype.Qv.call(this, a);
};
b.Iu = function () {
  this.rp = g.g.o.M(g.g.G.Rj, { x: g.sa.qd, y: g.sa.qd }, null);
  if (this.YC.length)
    for (
      var a = g.g.xml.createElement("xml"), c = 0, d;
      (d = this.YC[c]);
      c++
    ) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", d);
      a.appendChild(e);
    }
  else a = null;
  c = new g.Fd({
    disable: !1,
    parentWorkspace: this.P.u,
    media: this.P.u.options.mj,
    rtl: this.P.L,
    horizontalLayout: !1,
    renderer: this.P.u.options.Xo,
    rendererOverrides: this.P.u.options.Yo,
  });
  c.Ja = this.P.L ? g.g.wa.Hd.Dl : g.g.wa.Hd.wl;
  if ((d = !!a)) (c.Rg = g.g.wa.Fu(a)), (c.Vc = this.eI.bind(this));
  this.s = new g.tb(c);
  this.s.zo = !0;
  G(this.s, g.h.UA);
  a = d ? Uc(this.s, g.g.G.rc) : null;
  c = this.s.Wa("blocklyMutatorBackground");
  a && c.insertBefore(a, this.s.wb);
  this.rp.appendChild(c);
  return this.rp;
};
b.ki = function () {
  g.Ic.v.ki.call(this);
  this.P.Lb ||
    (this.P.Sd()
      ? this.Rd && g.g.o.wc(this.Rd, "blocklyIconGroupReadonly")
      : (this.Eb(!1),
        this.Rd && g.g.o.Ha(this.Rd, "blocklyIconGroupReadonly")));
};
function ze(a) {
  var c = 2 * g.sa.qd,
    d = a.s.wb.getBBox(),
    e = d.width + d.x,
    f = d.height + 3 * c,
    h = a.s.ec();
  if (h) {
    var k = h.nr();
    f = Math.max(f, k.Md + 20);
    e += h.Kg();
  }
  a.P.L && (e = -d.x);
  e += 3 * c;
  if (Math.abs(a.Rm - e) > c || Math.abs(a.Dp - f) > c)
    (a.Rm = e),
      (a.Dp = f),
      a.dc.bp(e + c, f + c),
      a.rp.setAttribute("width", a.Rm),
      a.rp.setAttribute("height", a.Dp);
  a.P.L && a.s.wb.setAttribute("transform", "translate(" + a.Rm + ",0)");
  a.s.resize();
}
b.oJ = function () {
  this.s && Rc(this.s);
};
b.Eb = function (a) {
  if (a != this.isVisible())
    if ((g.h.Fa(new g.h.Gf(this.P, a, "mutator")), a)) {
      this.dc = new g.sa(
        this.P.u,
        this.Iu(),
        this.P.Mb.$b,
        this.Wi,
        null,
        null
      );
      Pa(this.dc, this.P.id);
      Ra(this.dc, this.oJ.bind(this));
      var c = this.s.options.Rg;
      a = this.s.ec();
      c && (a.Y(this.s), a.show(c));
      this.Xg = this.P.Ih(this.s);
      c = p(this.Xg, !1);
      for (var d = 0, e; (e = c[d]); d++) e.Ga();
      this.Xg.us(!1);
      this.Xg.Sq = !1;
      a ? ((c = 2 * a.Kb), (a = this.Xg.L ? a.Kg() + c : c)) : (a = c = 16);
      this.P.L && (a = -a);
      this.Xg.moveBy(a, c);
      if (this.P.ss) {
        var f = this,
          h = this.P;
        h.ss(this.Xg);
        this.ys = function () {
          h.ss(f.Xg);
        };
        G(this.P.u, this.ys);
      }
      ze(this);
      G(this.s, this.hL.bind(this));
      this.kc();
    } else
      (this.rp = null),
        this.s.I(),
        (this.Xg = this.s = null),
        this.dc.I(),
        (this.dc = null),
        (this.Dp = this.Rm = 0),
        this.ys && (Ma(this.P.u, this.ys), (this.ys = null));
};
b.hL = function (a) {
  if (!(a.Fr || (a.type == g.h.Gj && "disabled" == a.element))) {
    if (!this.s.Ec()) {
      a = this.s.Ib(!1);
      for (var c = 0, d; (d = a[c]); c++) {
        var e = d.Xa();
        20 > e.y && d.moveBy(0, 20 - e.y);
        if (d.L) {
          var f = -20,
            h = this.s.ec();
          h && (f -= h.Kg());
          e.x > f && d.moveBy(f - e.x, 0);
        } else 20 > e.x && d.moveBy(20 - e.x, 0);
      }
    }
    if (this.Xg.u == this.s) {
      g.h.ga(!0);
      d = this.P;
      a = (a = d.vb()) && g.T.fe(a);
      c = d.pa;
      d.pa = !1;
      d.Eh(this.Xg);
      d.pa = c;
      d.qf();
      g.Gg().ub && g.navigation.cJ(d);
      d.pa && d.Ga();
      c = (c = d.vb()) && g.T.fe(c);
      if (a != c) {
        g.h.Fa(new g.h.gh(d, "mutation", null, a, c));
        var k = g.h.oc();
        setTimeout(function () {
          g.h.ga(k);
          d.Ub();
          g.h.ga(!1);
        }, g.Kp);
      }
      this.s.Ec() || ze(this);
      g.h.ga(!1);
    }
  }
};
b.eI = function () {
  var a = this.s.ec();
  a = a ? a.Kg() : 0;
  return {
    Md: 0,
    gf: 0,
    Uc: 0,
    gd: 0,
    Nb: this.Dp,
    Gb: this.Rm - a,
    bc: 0,
    Rb: 0,
    Tc: 0,
    Jc: this.s.L ? 0 : a,
  };
};
b.I = function () {
  this.P.kd = null;
  g.Zd.prototype.I.call(this);
};
g.Ic.Dm = function (a, c, d) {
  if (!a || !a.W().u) return !1;
  d = B(c, d).connection;
  var e = a.ra();
  return (e && e != c) || d.na == a
    ? !1
    : (d.isConnected() && d.disconnect(), d.connect(a), !0);
};
g.Ic.dB = function (a) {
  var c = null;
  if (a && a.options) {
    var d = a.options.pc;
    a.Xf ? d && d.options && (c = d.options.pc) : d && (c = d);
  }
  return c;
};
g.aa.jw = {};
g.xa = {};
g.xa.FF = {};
g.xa.FF.cq = 260;
g.dm([
  {
    type: "lists_create_empty",
    message0: "%{BKY_LISTS_CREATE_EMPTY_TITLE}",
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_CREATE_EMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_CREATE_EMPTY_HELPURL}",
  },
  {
    type: "lists_repeat",
    message0: "%{BKY_LISTS_REPEAT_TITLE}",
    args0: [
      { type: "input_value", name: "ITEM" },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Array",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REPEAT_HELPURL}",
  },
  {
    type: "lists_reverse",
    message0: "%{BKY_LISTS_REVERSE_MESSAGE0}",
    args0: [{ type: "input_value", name: "LIST", check: "Array" }],
    output: "Array",
    inputsInline: !0,
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_REVERSE_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_REVERSE_HELPURL}",
  },
  {
    type: "lists_isEmpty",
    message0: "%{BKY_LISTS_ISEMPTY_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Boolean",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_ISEMPTY_HELPURL}",
  },
  {
    type: "lists_length",
    message0: "%{BKY_LISTS_LENGTH_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Number",
    style: "list_blocks",
    tooltip: "%{BKY_LISTS_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_LISTS_LENGTH_HELPURL}",
  },
]);
g.aa.lists_create_with = {
  Y: function () {
    this.Wc = g.i.LISTS_CREATE_WITH_HELPURL;
    this.Zb("list_blocks");
    this.Yf = 3;
    this.Re();
    this.zf(!0, "Array");
    this.gp(new g.Ic(["lists_create_with_item"]));
    this.Qb(g.i.LISTS_CREATE_WITH_TOOLTIP);
  },
  vb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("items", this.Yf);
    return a;
  },
  Vb: function (a) {
    this.Yf = parseInt(a.getAttribute("items"), 10);
    this.Re();
  },
  Ih: function (a) {
    var c = a.hj("lists_create_with_container");
    c.qf();
    for (var d = B(c, "STACK").connection, e = 0; e < this.Yf; e++) {
      var f = a.hj("lists_create_with_item");
      f.qf();
      d.connect(f.ca);
      d = f.X;
    }
    return c;
  },
  Eh: function (a) {
    var c = O(a, "STACK");
    for (a = []; c && !c.Td(); ) a.push(c.Ux), (c = c.X && c.X.ra());
    for (c = 0; c < this.Yf; c++) {
      var d = B(this, "ADD" + c).connection.na;
      d && -1 == a.indexOf(d) && d.disconnect();
    }
    this.Yf = a.length;
    this.Re();
    for (c = 0; c < this.Yf; c++) g.Ic.Dm(a[c], this, "ADD" + c);
  },
  ss: function (a) {
    a = O(a, "STACK");
    for (var c = 0; a; ) {
      var d = B(this, "ADD" + c);
      a.Ux = d && d.connection.na;
      c++;
      a = a.X && a.X.ra();
    }
  },
  Re: function () {
    this.Yf && B(this, "EMPTY")
      ? this.xc("EMPTY")
      : this.Yf ||
        B(this, "EMPTY") ||
        L(N(this, "EMPTY"), g.i.LISTS_CREATE_EMPTY_TITLE);
    for (var a = 0; a < this.Yf; a++)
      if (!B(this, "ADD" + a)) {
        var c = hc(M(this, "ADD" + a), g.Um);
        0 == a && L(c, g.i.LISTS_CREATE_WITH_INPUT_WITH);
      }
    for (; B(this, "ADD" + a); ) this.xc("ADD" + a), a++;
  },
};
g.aa.lists_create_with_container = {
  Y: function () {
    this.Zb("list_blocks");
    L(N(this), g.i.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.sg(g.fb, "STACK");
    this.Qb(g.i.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.aa.lists_create_with_item = {
  Y: function () {
    this.Zb("list_blocks");
    L(N(this), g.i.LISTS_CREATE_WITH_ITEM_TITLE);
    this.Zg(!0);
    this.Yg(!0);
    this.Qb(g.i.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.aa.lists_indexOf = {
  Y: function () {
    var a = [
      [g.i.LISTS_INDEX_OF_FIRST, "FIRST"],
      [g.i.LISTS_INDEX_OF_LAST, "LAST"],
    ];
    this.Wc = g.i.LISTS_INDEX_OF_HELPURL;
    this.Zb("list_blocks");
    this.zf(!0, "Number");
    L(M(this, "VALUE").Yb("Array"), g.i.LISTS_INDEX_OF_INPUT_IN_LIST);
    L(M(this, "FIND"), new g.eb(a), "END");
    this.Ne(!0);
    var c = this;
    this.Qb(function () {
      return g.i.LISTS_INDEX_OF_TOOLTIP.replace(
        "%1",
        c.u.options.Xh ? "0" : "-1"
      );
    });
  },
};
g.aa.lists_getIndex = {
  Y: function () {
    var a = [
      [g.i.LISTS_GET_INDEX_GET, "GET"],
      [g.i.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
      [g.i.LISTS_GET_INDEX_REMOVE, "REMOVE"],
    ];
    this.bu = [
      [g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.i.LISTS_GET_INDEX_LAST, "LAST"],
      [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.Wc = g.i.LISTS_GET_INDEX_HELPURL;
    this.Zb("list_blocks");
    a = new g.eb(a, function (d) {
      d = "REMOVE" == d;
      this.W().CD(d);
    });
    L(M(this, "VALUE").Yb("Array"), g.i.LISTS_GET_INDEX_INPUT_IN_LIST);
    L(L(N(this), a, "MODE"), "", "SPACE");
    N(this, "AT");
    g.i.LISTS_GET_INDEX_TAIL && L(N(this, "TAIL"), g.i.LISTS_GET_INDEX_TAIL);
    this.Ne(!0);
    this.zf(!0);
    this.Qe(!0);
    var c = this;
    this.Qb(function () {
      var d = E(c, "MODE"),
        e = E(c, "WHERE"),
        f = "";
      switch (d + " " + e) {
        case "GET FROM_START":
        case "GET FROM_END":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
          break;
        case "GET FIRST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
          break;
        case "GET LAST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
          break;
        case "GET RANDOM":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
          break;
        case "GET_REMOVE FROM_START":
        case "GET_REMOVE FROM_END":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
          break;
        case "GET_REMOVE FIRST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
          break;
        case "GET_REMOVE LAST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
          break;
        case "GET_REMOVE RANDOM":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
          break;
        case "REMOVE FROM_START":
        case "REMOVE FROM_END":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
          break;
        case "REMOVE FIRST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
          break;
        case "REMOVE LAST":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
          break;
        case "REMOVE RANDOM":
          f = g.i.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
      }
      if ("FROM_START" == e || "FROM_END" == e)
        f +=
          "  " +
          ("FROM_START" == e
            ? g.i.LISTS_INDEX_FROM_START_TOOLTIP
            : g.i.LISTS_INDEX_FROM_END_TOOLTIP
          ).replace("%1", c.u.options.Xh ? "#1" : "#0");
      return f;
    });
  },
  vb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("statement", !this.O);
    a.setAttribute("at", B(this, "AT").type == g.kb);
    return a;
  },
  Vb: function (a) {
    var c = "true" == a.getAttribute("statement");
    this.CD(c);
    a = "false" != a.getAttribute("at");
    this.Qe(a);
  },
  CD: function (a) {
    a != !this.O &&
      (A(this, !0),
      a
        ? (this.zf(!1), this.Zg(!0), this.Yg(!0))
        : (this.Zg(!1), this.Yg(!1), this.zf(!0)));
  },
  Qe: function (a) {
    this.xc("AT");
    this.xc("ORDINAL", !0);
    a
      ? (M(this, "AT").Yb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          L(N(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX))
      : N(this, "AT");
    var c = new g.eb(this.bu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.W();
        f.Qe(e);
        jc(f, d, "WHERE");
        return null;
      }
    });
    L(B(this, "AT"), c, "WHERE");
    g.i.LISTS_GET_INDEX_TAIL && mc(this, "TAIL", null);
  },
};
g.aa.lists_setIndex = {
  Y: function () {
    var a = [
      [g.i.LISTS_SET_INDEX_SET, "SET"],
      [g.i.LISTS_SET_INDEX_INSERT, "INSERT"],
    ];
    this.bu = [
      [g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.i.LISTS_GET_INDEX_LAST, "LAST"],
      [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.Wc = g.i.LISTS_SET_INDEX_HELPURL;
    this.Zb("list_blocks");
    L(M(this, "LIST").Yb("Array"), g.i.LISTS_SET_INDEX_INPUT_IN_LIST);
    L(L(N(this), new g.eb(a), "MODE"), "", "SPACE");
    N(this, "AT");
    L(M(this, "TO"), g.i.LISTS_SET_INDEX_INPUT_TO);
    this.Ne(!0);
    this.Zg(!0);
    this.Yg(!0);
    this.Qb(g.i.LISTS_SET_INDEX_TOOLTIP);
    this.Qe(!0);
    var c = this;
    this.Qb(function () {
      var d = E(c, "MODE"),
        e = E(c, "WHERE"),
        f = "";
      switch (d + " " + e) {
        case "SET FROM_START":
        case "SET FROM_END":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
          break;
        case "SET FIRST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
          break;
        case "SET LAST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
          break;
        case "SET RANDOM":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
          break;
        case "INSERT FROM_START":
        case "INSERT FROM_END":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
          break;
        case "INSERT FIRST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
          break;
        case "INSERT LAST":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
          break;
        case "INSERT RANDOM":
          f = g.i.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;
      }
      if ("FROM_START" == e || "FROM_END" == e)
        f +=
          "  " +
          g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace(
            "%1",
            c.u.options.Xh ? "#1" : "#0"
          );
      return f;
    });
  },
  vb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at", B(this, "AT").type == g.kb);
    return a;
  },
  Vb: function (a) {
    a = "false" != a.getAttribute("at");
    this.Qe(a);
  },
  Qe: function (a) {
    this.xc("AT");
    this.xc("ORDINAL", !0);
    a
      ? (M(this, "AT").Yb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          L(N(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX))
      : N(this, "AT");
    var c = new g.eb(this.bu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.W();
        f.Qe(e);
        jc(f, d, "WHERE");
        return null;
      }
    });
    mc(this, "AT", "TO");
    B(this, "ORDINAL") && mc(this, "ORDINAL", "TO");
    L(B(this, "AT"), c, "WHERE");
  },
};
g.aa.lists_getSublist = {
  Y: function () {
    this.WHERE_OPTIONS_1 = [
      [g.i.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_SUBLIST_START_FIRST, "FIRST"],
    ];
    this.WHERE_OPTIONS_2 = [
      [g.i.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_SUBLIST_END_LAST, "LAST"],
    ];
    this.Wc = g.i.LISTS_GET_SUBLIST_HELPURL;
    this.Zb("list_blocks");
    L(M(this, "LIST").Yb("Array"), g.i.LISTS_GET_SUBLIST_INPUT_IN_LIST);
    N(this, "AT1");
    N(this, "AT2");
    g.i.LISTS_GET_SUBLIST_TAIL &&
      L(N(this, "TAIL"), g.i.LISTS_GET_SUBLIST_TAIL);
    this.Ne(!0);
    this.zf(!0, "Array");
    this.Qe(1, !0);
    this.Qe(2, !0);
    this.Qb(g.i.LISTS_GET_SUBLIST_TOOLTIP);
  },
  vb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at1", B(this, "AT1").type == g.kb);
    a.setAttribute("at2", B(this, "AT2").type == g.kb);
    return a;
  },
  Vb: function (a) {
    var c = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.Qe(1, c);
    this.Qe(2, a);
  },
  Qe: function (a, c) {
    this.xc("AT" + a);
    this.xc("ORDINAL" + a, !0);
    c
      ? (M(this, "AT" + a).Yb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          L(N(this, "ORDINAL" + a), g.i.ORDINAL_NUMBER_SUFFIX))
      : N(this, "AT" + a);
    var d = new g.eb(this["WHERE_OPTIONS_" + a], function (e) {
      var f = "FROM_START" == e || "FROM_END" == e;
      if (f != c) {
        var h = this.W();
        h.Qe(a, f);
        jc(h, e, "WHERE" + a);
        return null;
      }
    });
    L(B(this, "AT" + a), d, "WHERE" + a);
    1 == a &&
      (mc(this, "AT1", "AT2"),
      B(this, "ORDINAL1") && mc(this, "ORDINAL1", "AT2"));
    g.i.LISTS_GET_SUBLIST_TAIL && mc(this, "TAIL", null);
  },
};
g.aa.lists_sort = {
  Y: function () {
    lc(this, {
      message0: g.i.LISTS_SORT_TITLE,
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            [g.i.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"],
            [g.i.LISTS_SORT_TYPE_TEXT, "TEXT"],
            [g.i.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"],
          ],
        },
        {
          type: "field_dropdown",
          name: "DIRECTION",
          options: [
            [g.i.LISTS_SORT_ORDER_ASCENDING, "1"],
            [g.i.LISTS_SORT_ORDER_DESCENDING, "-1"],
          ],
        },
        { type: "input_value", name: "LIST", check: "Array" },
      ],
      output: "Array",
      style: "list_blocks",
      tooltip: g.i.LISTS_SORT_TOOLTIP,
      helpUrl: g.i.LISTS_SORT_HELPURL,
    });
  },
};
g.aa.lists_split = {
  Y: function () {
    var a = this,
      c = new g.eb(
        [
          [g.i.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
          [g.i.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"],
        ],
        function (d) {
          a.Ap(d);
        }
      );
    this.Wc = g.i.LISTS_SPLIT_HELPURL;
    this.Zb("list_blocks");
    L(M(this, "INPUT").Yb("String"), c, "MODE");
    L(M(this, "DELIM").Yb("String"), g.i.LISTS_SPLIT_WITH_DELIMITER);
    this.Ne(!0);
    this.zf(!0, "Array");
    this.Qb(function () {
      var d = E(a, "MODE");
      if ("SPLIT" == d) return g.i.LISTS_SPLIT_TOOLTIP_SPLIT;
      if ("JOIN" == d) return g.i.LISTS_SPLIT_TOOLTIP_JOIN;
      throw Error("Unknown mode: " + d);
    });
  },
  Ap: function (a) {
    if (E(this, "MODE") != a) {
      var c = B(this, "INPUT").connection;
      c.Hm(null);
      var d = c.ra();
      d && (c.disconnect(), d.Na ? d.I() : this.Ub());
    }
    "SPLIT" == a
      ? (this.O.Yb("Array"), B(this, "INPUT").Yb("String"))
      : (this.O.Yb("String"), B(this, "INPUT").Yb("Array"));
  },
  vb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("mode", E(this, "MODE"));
    return a;
  },
  Vb: function (a) {
    this.Ap(a.getAttribute("mode"));
  },
};
g.aa.RI = {};
g.xa.re = {};
g.xa.re.cq = 210;
g.dm([
  {
    type: "logic_boolean",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "BOOL",
        options: [
          ["%{BKY_LOGIC_BOOLEAN_TRUE}", "TRUE"],
          ["%{BKY_LOGIC_BOOLEAN_FALSE}", "FALSE"],
        ],
      },
    ],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_BOOLEAN_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_BOOLEAN_HELPURL}",
  },
  {
    type: "controls_if",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{ type: "input_statement", name: "DO0" }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    mutator: "controls_if_mutator",
    extensions: ["controls_if_tooltip"],
  },
  {
    type: "controls_ifelse",
    message0: "%{BKY_CONTROLS_IF_MSG_IF} %1",
    args0: [{ type: "input_value", name: "IF0", check: "Boolean" }],
    message1: "%{BKY_CONTROLS_IF_MSG_THEN} %1",
    args1: [{ type: "input_statement", name: "DO0" }],
    message2: "%{BKY_CONTROLS_IF_MSG_ELSE} %1",
    args2: [{ type: "input_statement", name: "ELSE" }],
    previousStatement: null,
    nextStatement: null,
    style: "logic_blocks",
    tooltip: "%{BKYCONTROLS_IF_TOOLTIP_2}",
    helpUrl: "%{BKY_CONTROLS_IF_HELPURL}",
    extensions: ["controls_if_tooltip"],
  },
  {
    type: "logic_compare",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["=", "EQ"],
          ["\u2260", "NEQ"],
          ["\u200f<", "LT"],
          ["\u200f\u2264", "LTE"],
          ["\u200f>", "GT"],
          ["\u200f\u2265", "GTE"],
        ],
      },
      { type: "input_value", name: "B" },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_COMPARE_HELPURL}",
    extensions: ["logic_compare", "logic_op_tooltip"],
  },
  {
    type: "logic_operation",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Boolean" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_LOGIC_OPERATION_AND}", "AND"],
          ["%{BKY_LOGIC_OPERATION_OR}", "OR"],
        ],
      },
      { type: "input_value", name: "B", check: "Boolean" },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "logic_blocks",
    helpUrl: "%{BKY_LOGIC_OPERATION_HELPURL}",
    extensions: ["logic_op_tooltip"],
  },
  {
    type: "logic_negate",
    message0: "%{BKY_LOGIC_NEGATE_TITLE}",
    args0: [{ type: "input_value", name: "BOOL", check: "Boolean" }],
    output: "Boolean",
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NEGATE_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NEGATE_HELPURL}",
  },
  {
    type: "logic_null",
    message0: "%{BKY_LOGIC_NULL}",
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_NULL_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_NULL_HELPURL}",
  },
  {
    type: "logic_ternary",
    message0: "%{BKY_LOGIC_TERNARY_CONDITION} %1",
    args0: [{ type: "input_value", name: "IF", check: "Boolean" }],
    message1: "%{BKY_LOGIC_TERNARY_IF_TRUE} %1",
    args1: [{ type: "input_value", name: "THEN" }],
    message2: "%{BKY_LOGIC_TERNARY_IF_FALSE} %1",
    args2: [{ type: "input_value", name: "ELSE" }],
    output: null,
    style: "logic_blocks",
    tooltip: "%{BKY_LOGIC_TERNARY_TOOLTIP}",
    helpUrl: "%{BKY_LOGIC_TERNARY_HELPURL}",
    extensions: ["logic_ternary"],
  },
]);
g.dm([
  {
    type: "controls_if_if",
    message0: "%{BKY_CONTROLS_IF_IF_TITLE_IF}",
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_IF_TOOLTIP}",
  },
  {
    type: "controls_if_elseif",
    message0: "%{BKY_CONTROLS_IF_ELSEIF_TITLE_ELSEIF}",
    previousStatement: null,
    nextStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSEIF_TOOLTIP}",
  },
  {
    type: "controls_if_else",
    message0: "%{BKY_CONTROLS_IF_ELSE_TITLE_ELSE}",
    previousStatement: null,
    enableContextMenu: !1,
    style: "logic_blocks",
    tooltip: "%{BKY_CONTROLS_IF_ELSE_TOOLTIP}",
  },
]);
g.xa.re.Vt = {
  EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
  NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
  LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
  LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
  GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
  GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
  AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
  OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}",
};
g.ka.register("logic_op_tooltip", g.ka.Cq("OP", g.xa.re.Vt));
g.xa.re.fE = {
  Ce: 0,
  Tf: 0,
  zj: !0,
  vb: function () {
    if (!this.Ce && !this.Tf) return null;
    var a = g.g.xml.createElement("mutation");
    this.Ce && a.setAttribute("elseif", this.Ce);
    this.Tf && a.setAttribute("else", 1);
    return a;
  },
  Vb: function (a) {
    this.Ce = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.Tf = parseInt(a.getAttribute("else"), 10) || 0;
    this.LJ();
  },
  Ih: function (a) {
    var c = a.hj("controls_if_if");
    c.qf();
    for (var d = c.X, e = 1; e <= this.Ce; e++) {
      var f = a.hj("controls_if_elseif");
      f.qf();
      d.connect(f.ca);
      d = f.X;
    }
    this.Tf && ((a = a.hj("controls_if_else")), a.qf(), d.connect(a.ca));
    return c;
  },
  Eh: function (a) {
    a = a.X.ra();
    this.Tf = this.Ce = 0;
    for (var c = [null], d = [null], e = null; a && !a.Td(); ) {
      switch (a.type) {
        case "controls_if_elseif":
          this.Ce++;
          c.push(a.Ux);
          d.push(a.bh);
          break;
        case "controls_if_else":
          this.Tf++;
          e = a.bh;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.X && a.X.ra();
    }
    this.Re();
    this.$C(c, d, e);
  },
  ss: function (a) {
    a = a.X.ra();
    for (var c = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var d = B(this, "IF" + c),
            e = B(this, "DO" + c);
          a.Ux = d && d.connection.na;
          a.bh = e && e.connection.na;
          c++;
          break;
        case "controls_if_else":
          e = B(this, "ELSE");
          a.bh = e && e.connection.na;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.X && a.X.ra();
    }
  },
  LJ: function () {
    var a = [null],
      c = [null],
      d = null;
    B(this, "ELSE") && (d = B(this, "ELSE").connection.na);
    for (var e = 1; B(this, "IF" + e); ) {
      var f = B(this, "DO" + e);
      a.push(B(this, "IF" + e).connection.na);
      c.push(f.connection.na);
      e++;
    }
    this.Re();
    this.$C(a, c, d);
  },
  Re: function () {
    B(this, "ELSE") && this.xc("ELSE");
    for (var a = 1; B(this, "IF" + a); )
      this.xc("IF" + a), this.xc("DO" + a), a++;
    for (a = 1; a <= this.Ce; a++)
      L(M(this, "IF" + a).Yb("Boolean"), g.i.CONTROLS_IF_MSG_ELSEIF),
        L(this.sg(g.fb, "DO" + a), g.i.CONTROLS_IF_MSG_THEN);
    this.Tf && L(this.sg(g.fb, "ELSE"), g.i.CONTROLS_IF_MSG_ELSE);
  },
  $C: function (a, c, d) {
    for (var e = 1; e <= this.Ce; e++)
      g.Ic.Dm(a[e], this, "IF" + e), g.Ic.Dm(c[e], this, "DO" + e);
    g.Ic.Dm(d, this, "ELSE");
  },
};
g.ka.ix("controls_if_mutator", g.xa.re.fE, null, [
  "controls_if_elseif",
  "controls_if_else",
]);
g.xa.re.gE = function () {
  this.Qb(
    function () {
      if (this.Ce || this.Tf) {
        if (!this.Ce && this.Tf) return g.i.CONTROLS_IF_TOOLTIP_2;
        if (this.Ce && !this.Tf) return g.i.CONTROLS_IF_TOOLTIP_3;
        if (this.Ce && this.Tf) return g.i.CONTROLS_IF_TOOLTIP_4;
      } else return g.i.CONTROLS_IF_TOOLTIP_1;
      return "";
    }.bind(this)
  );
};
g.ka.register("controls_if_tooltip", g.xa.re.gE);
g.xa.re.BF = {
  onchange: function (a) {
    this.Qo || (this.Qo = [null, null]);
    var c = O(this, "A"),
      d = O(this, "B");
    c &&
      d &&
      !sa(c.O, d.O) &&
      (g.h.ga(a.group),
      (a = this.Qo[0]),
      a !== c &&
        (A(c), !a || a.Sf || a.Na || B(this, "A").connection.connect(a.O)),
      (c = this.Qo[1]),
      c !== d &&
        (A(d), !c || c.Sf || c.Na || B(this, "B").connection.connect(c.O)),
      this.Ub(),
      g.h.ga(!1));
    this.Qo[0] = O(this, "A");
    this.Qo[1] = O(this, "B");
  },
};
g.xa.re.AF = function () {
  this.Je(g.xa.re.BF);
};
g.ka.register("logic_compare", g.xa.re.AF);
g.xa.re.CF = {
  VC: null,
  onchange: function (a) {
    var c = O(this, "THEN"),
      d = O(this, "ELSE"),
      e = this.O.na;
    if ((c || d) && e)
      for (var f = 0; 2 > f; f++) {
        var h = 1 == f ? c : d;
        h &&
          !sa(h.O, e) &&
          (g.h.ga(a.group),
          e === this.VC ? (A(this), e.W().Ub()) : (A(h), h.Ub()),
          g.h.ga(!1));
      }
    this.VC = e;
  },
};
g.ka.ks("logic_ternary", g.xa.re.CF);
g.We = function (a, c, d, e, f, h) {
  this.Io = -Infinity;
  this.Go = Infinity;
  this.Cm = 0;
  this.Nu = null;
  g.We.v.constructor.call(this, a, f, h);
  h || (Ae(this, c), Be(this, d), Ce(this, e), this.setValue(this.getValue()));
};
g.g.object.U(g.We, g.Rc);
g.We.prototype.kl = 0;
g.We.ea = function (a) {
  return new g.We(a.value, void 0, void 0, void 0, void 0, a);
};
g.We.prototype.Fl = !0;
g.We.prototype.ee = function (a) {
  g.We.v.ee.call(this, a);
  Ae(this, a.min);
  Be(this, a.max);
  Ce(this, a.precision);
};
function Ae(a, c) {
  null == c ? (a.Io = -Infinity) : ((c = Number(c)), isNaN(c) || (a.Io = c));
}
function Be(a, c) {
  null == c ? (a.Go = Infinity) : ((c = Number(c)), isNaN(c) || (a.Go = c));
}
function Ce(a, c) {
  null == c ? (a.Cm = 0) : ((c = Number(c)), isNaN(c) || (a.Cm = c));
  var d = a.Cm.toLocaleString("en-US", { maximumFractionDigits: 20 }),
    e = d.indexOf(".");
  a.Nu = -1 == e ? (c ? 0 : null) : d.length - e - 1;
}
g.We.prototype.Kh = function (a) {
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = a.replace(/infinity/i, "Infinity");
  a = Number(a || 0);
  if (isNaN(a)) return null;
  a = Math.min(Math.max(a, this.Io), this.Go);
  this.Cm && isFinite(a) && (a = Math.round(a / this.Cm) * this.Cm);
  null != this.Nu && (a = Number(a.toFixed(this.Nu)));
  return a;
};
g.We.prototype.Vx = function () {
  var a = g.We.v.Vx.call(this);
  -Infinity < this.Io && g.g.ta.md(a, g.g.ta.State.BG, this.Io);
  Infinity > this.Go && g.g.ta.md(a, g.g.ta.State.AG, this.Go);
  return a;
};
g.lf.register("field_number", g.We);
g.pe = function (a, c, d, e, f) {
  this.Hk = g.pe.JH;
  this.tH = "string" === typeof a ? a : "";
  this.nd = new g.g.se(0, 0);
  f && this.ee(f);
  c && (this.Zk = c);
  f || De(this, d, e);
};
g.g.object.U(g.pe, g.eb);
g.pe.ea = function (a) {
  var c = g.g.Nc(a.variable);
  return new g.pe(c, void 0, void 0, void 0, a);
};
b = g.pe.prototype;
b.Fl = !0;
b.ee = function (a) {
  g.pe.v.ee.call(this, a);
  De(this, a.variableTypes, a.defaultType);
};
b.pk = function () {
  if (!this.ne) {
    var a = g.$.pr(this.K.u, null, this.tH, this.sH);
    this.Bg(a.La());
  }
};
b.Cx = function () {
  return (
    g.pe.v.Cx.call(this) && (!this.la().jt || "variables_get" != this.K.type)
  );
};
b.$n = function (a) {
  var c = a.getAttribute("id"),
    d = a.textContent,
    e = a.getAttribute("variabletype") || a.getAttribute("variableType") || "";
  c = g.$.pr(this.K.u, c, d, e);
  if (null != e && e !== c.type)
    throw Error(
      "Serialized variable type with id '" +
        c.La() +
        "' had type " +
        c.type +
        ", and does not match variable field that references it: " +
        g.T.fe(a) +
        "."
    );
  this.setValue(c.La());
};
b.tD = function (a) {
  this.pk();
  a.id = this.ne.La();
  a.textContent = this.ne.name;
  this.ne.type && a.setAttribute("variabletype", this.ne.type);
  return a;
};
b.zx = function (a) {
  if (a.Na)
    throw Error("Variable fields are not allowed to exist on shadow blocks.");
  g.pe.v.zx.call(this, a);
};
b.getValue = function () {
  return this.ne ? this.ne.La() : null;
};
b.je = function () {
  return this.ne ? this.ne.name : "";
};
b.ud = function () {
  return this.ne;
};
b.EB = function () {
  return this.ne ? this.Zk : null;
};
b.Kh = function (a) {
  if (null === a) return null;
  var c = g.$.ud(this.K.u, a);
  if (!c)
    return (
      console.warn("Variable id doesn't point to a real variable! ID was " + a),
      null
    );
  c = c.type;
  var d;
  a: if ((d = Ee(this))) {
    for (var e = 0; e < d.length; e++)
      if (c == d[e]) {
        d = !0;
        break a;
      }
    d = !1;
  } else d = !0;
  return d
    ? a
    : (console.warn("Variable type doesn't match this field!  Type was " + c),
      null);
};
b.Bg = function (a) {
  this.ne = g.$.ud(this.K.u, a);
  g.pe.v.Bg.call(this, a);
};
function Ee(a) {
  var c = a.cL;
  if (null === c && a.K && a.K.u) return a.K.u.Jv();
  c = c || [""];
  if (0 == c.length)
    throw (
      ((a = a.je()),
      Error("'variableTypes' of field variable " + a + " was an empty list"))
    );
  return c;
}
function De(a, c, d) {
  d = d || "";
  if (null == c || void 0 == c) c = null;
  else if (Array.isArray(c)) {
    for (var e = !1, f = 0; f < c.length; f++) c[f] == d && (e = !0);
    if (!e)
      throw Error(
        "Invalid default type '" + d + "' in the definition of a FieldVariable"
      );
  } else
    throw Error(
      "'variableTypes' was not an array in the definition of a FieldVariable"
    );
  a.sH = d;
  a.cL = c;
}
g.pe.JH = function () {
  if (!this.ne)
    throw Error(
      "Tried to call dropdownCreate on a variable field with no variable selected."
    );
  var a = this.je(),
    c = [];
  if (this.K && this.K.u)
    for (var d = Ee(this), e = 0; e < d.length; e++)
      c = c.concat(this.K.u.lo(d[e]));
  c.sort(g.yn.vA);
  d = [];
  for (e = 0; e < c.length; e++) d[e] = [c[e].name, c[e].La()];
  d.push([g.i.RENAME_VARIABLE, g.vz]);
  g.i.DELETE_VARIABLE && d.push([g.i.DELETE_VARIABLE.replace("%1", a), g.xy]);
  return d;
};
g.pe.prototype.IC = function (a) {
  a = a.getValue();
  if (this.K && this.K.u) {
    if (a == g.vz) {
      g.$.ps(this.K.u, this.ne);
      return;
    }
    if (a == g.xy) {
      this.K.u.Jh(this.ne.La());
      return;
    }
  }
  this.setValue(a);
};
g.pe.prototype.Vo = function () {
  return !0;
};
g.lf.register("field_variable", g.pe);
g.aa.TI = {};
g.xa.Ze = {};
g.xa.Ze.cq = 120;
g.dm([
  {
    type: "controls_repeat_ext",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [{ type: "input_value", name: "TIMES", check: "Number" }],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}",
  },
  {
    type: "controls_repeat",
    message0: "%{BKY_CONTROLS_REPEAT_TITLE}",
    args0: [
      { type: "field_number", name: "TIMES", value: 10, min: 0, precision: 1 },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    tooltip: "%{BKY_CONTROLS_REPEAT_TOOLTIP}",
    helpUrl: "%{BKY_CONTROLS_REPEAT_HELPURL}",
  },
  {
    type: "controls_whileUntil",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "MODE",
        options: [
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_WHILE}", "WHILE"],
          ["%{BKY_CONTROLS_WHILEUNTIL_OPERATOR_UNTIL}", "UNTIL"],
        ],
      },
      { type: "input_value", name: "BOOL", check: "Boolean" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_WHILEUNTIL_HELPURL}",
    extensions: ["controls_whileUntil_tooltip"],
  },
  {
    type: "controls_for",
    message0: "%{BKY_CONTROLS_FOR_TITLE}",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "TO", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "BY", check: "Number", align: "RIGHT" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOR_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_for_tooltip"],
  },
  {
    type: "controls_forEach",
    message0: "%{BKY_CONTROLS_FOREACH_TITLE}",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "LIST", check: "Array" },
    ],
    message1: "%{BKY_CONTROLS_REPEAT_INPUT_DO} %1",
    args1: [{ type: "input_statement", name: "DO" }],
    previousStatement: null,
    nextStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FOREACH_HELPURL}",
    extensions: ["contextMenu_newGetVariableBlock", "controls_forEach_tooltip"],
  },
  {
    type: "controls_flow_statements",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "FLOW",
        options: [
          ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK}", "BREAK"],
          ["%{BKY_CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE}", "CONTINUE"],
        ],
      },
    ],
    previousStatement: null,
    style: "loop_blocks",
    helpUrl: "%{BKY_CONTROLS_FLOW_STATEMENTS_HELPURL}",
    extensions: ["controls_flow_tooltip", "controls_flow_in_loop_check"],
  },
]);
g.xa.Ze.DG = {
  WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
  UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}",
};
g.ka.register("controls_whileUntil_tooltip", g.ka.Cq("MODE", g.xa.Ze.DG));
g.xa.Ze.XD = {
  BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
  CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}",
};
g.ka.register("controls_flow_tooltip", g.ka.Cq("FLOW", g.xa.Ze.XD));
g.xa.Ze.mE = {
  Hh: function (a) {
    if (!this.Lb) {
      var c = z(this, "VAR").ud(),
        d = c.name;
      if (!this.isCollapsed() && null != d) {
        var e = { enabled: !0 };
        e.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", d);
        c = g.$.ao(c);
        d = g.g.xml.createElement("block");
        d.setAttribute("type", "variables_get");
        d.appendChild(c);
        e.za = g.Va.Dq(this, d);
        a.push(e);
      }
    }
  },
};
g.ka.ks("contextMenu_newGetVariableBlock", g.xa.Ze.mE);
g.ka.register("controls_for_tooltip", g.ka.tu("%{BKY_CONTROLS_FOR_TOOLTIP}"));
g.ka.register(
  "controls_forEach_tooltip",
  g.ka.tu("%{BKY_CONTROLS_FOREACH_TOOLTIP}")
);
g.xa.Ze.Rp = {
  EF: [
    "controls_repeat",
    "controls_repeat_ext",
    "controls_forEach",
    "controls_for",
    "controls_whileUntil",
  ],
  zj: !0,
  CB: function (a) {
    do {
      if (-1 != g.xa.Ze.Rp.EF.indexOf(a.type)) return a;
      a = ic(a);
    } while (a);
    return null;
  },
  onchange: function (a) {
    if (this.u.Ec && !this.u.Ec() && a.type == g.h.Ts) {
      var c = g.xa.Ze.Rp.CB(this);
      this.Im(c ? null : g.i.CONTROLS_FLOW_STATEMENTS_WARNING);
      if (!this.Lb) {
        var d = g.h.oc();
        g.h.ga(a.group);
        this.Wd(c);
        g.h.ga(d);
      }
    }
  },
};
g.ka.ks("controls_flow_in_loop_check", g.xa.Ze.Rp);
g.aa.Vd = {};
g.xa.Math = {};
g.xa.Math.cq = 230;
g.dm([
  {
    type: "math_number",
    message0: "%1",
    args0: [{ type: "field_number", name: "NUM", value: 0 }],
    output: "Number",
    helpUrl: "%{BKY_MATH_NUMBER_HELPURL}",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_NUMBER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"],
  },
  {
    type: "math_arithmetic",
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Number" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ADDITION_SYMBOL}", "ADD"],
          ["%{BKY_MATH_SUBTRACTION_SYMBOL}", "MINUS"],
          ["%{BKY_MATH_MULTIPLICATION_SYMBOL}", "MULTIPLY"],
          ["%{BKY_MATH_DIVISION_SYMBOL}", "DIVIDE"],
          ["%{BKY_MATH_POWER_SYMBOL}", "POWER"],
        ],
      },
      { type: "input_value", name: "B", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ARITHMETIC_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_single",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_SINGLE_OP_ROOT}", "ROOT"],
          ["%{BKY_MATH_SINGLE_OP_ABSOLUTE}", "ABS"],
          ["-", "NEG"],
          ["ln", "LN"],
          ["log10", "LOG10"],
          ["e^", "EXP"],
          ["10^", "POW10"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_SINGLE_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_trig",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_TRIG_SIN}", "SIN"],
          ["%{BKY_MATH_TRIG_COS}", "COS"],
          ["%{BKY_MATH_TRIG_TAN}", "TAN"],
          ["%{BKY_MATH_TRIG_ASIN}", "ASIN"],
          ["%{BKY_MATH_TRIG_ACOS}", "ACOS"],
          ["%{BKY_MATH_TRIG_ATAN}", "ATAN"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_TRIG_HELPURL}",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_constant",
    message0: "%1",
    args0: [
      {
        type: "field_dropdown",
        name: "CONSTANT",
        options: [
          ["\u03c0", "PI"],
          ["e", "E"],
          ["\u03c6", "GOLDEN_RATIO"],
          ["sqrt(2)", "SQRT2"],
          ["sqrt(\u00bd)", "SQRT1_2"],
          ["\u221e", "INFINITY"],
        ],
      },
    ],
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTANT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTANT_HELPURL}",
  },
  {
    type: "math_number_property",
    message0: "%1 %2",
    args0: [
      { type: "input_value", name: "NUMBER_TO_CHECK", check: "Number" },
      {
        type: "field_dropdown",
        name: "PROPERTY",
        options: [
          ["%{BKY_MATH_IS_EVEN}", "EVEN"],
          ["%{BKY_MATH_IS_ODD}", "ODD"],
          ["%{BKY_MATH_IS_PRIME}", "PRIME"],
          ["%{BKY_MATH_IS_WHOLE}", "WHOLE"],
          ["%{BKY_MATH_IS_POSITIVE}", "POSITIVE"],
          ["%{BKY_MATH_IS_NEGATIVE}", "NEGATIVE"],
          ["%{BKY_MATH_IS_DIVISIBLE_BY}", "DIVISIBLE_BY"],
        ],
      },
    ],
    inputsInline: !0,
    output: "Boolean",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_IS_TOOLTIP}",
    mutator: "math_is_divisibleby_mutator",
  },
  {
    type: "math_change",
    message0: "%{BKY_MATH_CHANGE_TITLE}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_MATH_CHANGE_TITLE_ITEM}",
      },
      { type: "input_value", name: "DELTA", check: "Number" },
    ],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_MATH_CHANGE_HELPURL}",
    extensions: ["math_change_tooltip"],
  },
  {
    type: "math_round",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ROUND_OPERATOR_ROUND}", "ROUND"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDUP}", "ROUNDUP"],
          ["%{BKY_MATH_ROUND_OPERATOR_ROUNDDOWN}", "ROUNDDOWN"],
        ],
      },
      { type: "input_value", name: "NUM", check: "Number" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ROUND_HELPURL}",
    tooltip: "%{BKY_MATH_ROUND_TOOLTIP}",
  },
  {
    type: "math_on_list",
    message0: "%1 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["%{BKY_MATH_ONLIST_OPERATOR_SUM}", "SUM"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MIN}", "MIN"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MAX}", "MAX"],
          ["%{BKY_MATH_ONLIST_OPERATOR_AVERAGE}", "AVERAGE"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MEDIAN}", "MEDIAN"],
          ["%{BKY_MATH_ONLIST_OPERATOR_MODE}", "MODE"],
          ["%{BKY_MATH_ONLIST_OPERATOR_STD_DEV}", "STD_DEV"],
          ["%{BKY_MATH_ONLIST_OPERATOR_RANDOM}", "RANDOM"],
        ],
      },
      { type: "input_value", name: "LIST", check: "Array" },
    ],
    output: "Number",
    style: "math_blocks",
    helpUrl: "%{BKY_MATH_ONLIST_HELPURL}",
    mutator: "math_modes_of_list_mutator",
    extensions: ["math_op_tooltip"],
  },
  {
    type: "math_modulo",
    message0: "%{BKY_MATH_MODULO_TITLE}",
    args0: [
      { type: "input_value", name: "DIVIDEND", check: "Number" },
      { type: "input_value", name: "DIVISOR", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_MODULO_TOOLTIP}",
    helpUrl: "%{BKY_MATH_MODULO_HELPURL}",
  },
  {
    type: "math_constrain",
    message0: "%{BKY_MATH_CONSTRAIN_TITLE}",
    args0: [
      { type: "input_value", name: "VALUE", check: "Number" },
      { type: "input_value", name: "LOW", check: "Number" },
      { type: "input_value", name: "HIGH", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_CONSTRAIN_TOOLTIP}",
    helpUrl: "%{BKY_MATH_CONSTRAIN_HELPURL}",
  },
  {
    type: "math_random_int",
    message0: "%{BKY_MATH_RANDOM_INT_TITLE}",
    args0: [
      { type: "input_value", name: "FROM", check: "Number" },
      { type: "input_value", name: "TO", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_INT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_INT_HELPURL}",
  },
  {
    type: "math_random_float",
    message0: "%{BKY_MATH_RANDOM_FLOAT_TITLE_RANDOM}",
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_RANDOM_FLOAT_TOOLTIP}",
    helpUrl: "%{BKY_MATH_RANDOM_FLOAT_HELPURL}",
  },
  {
    type: "math_atan2",
    message0: "%{BKY_MATH_ATAN2_TITLE}",
    args0: [
      { type: "input_value", name: "X", check: "Number" },
      { type: "input_value", name: "Y", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    style: "math_blocks",
    tooltip: "%{BKY_MATH_ATAN2_TOOLTIP}",
    helpUrl: "%{BKY_MATH_ATAN2_HELPURL}",
  },
]);
g.xa.Math.Vt = {
  ADD: "%{BKY_MATH_ARITHMETIC_TOOLTIP_ADD}",
  MINUS: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MINUS}",
  MULTIPLY: "%{BKY_MATH_ARITHMETIC_TOOLTIP_MULTIPLY}",
  DIVIDE: "%{BKY_MATH_ARITHMETIC_TOOLTIP_DIVIDE}",
  POWER: "%{BKY_MATH_ARITHMETIC_TOOLTIP_POWER}",
  ROOT: "%{BKY_MATH_SINGLE_TOOLTIP_ROOT}",
  ABS: "%{BKY_MATH_SINGLE_TOOLTIP_ABS}",
  NEG: "%{BKY_MATH_SINGLE_TOOLTIP_NEG}",
  LN: "%{BKY_MATH_SINGLE_TOOLTIP_LN}",
  LOG10: "%{BKY_MATH_SINGLE_TOOLTIP_LOG10}",
  EXP: "%{BKY_MATH_SINGLE_TOOLTIP_EXP}",
  POW10: "%{BKY_MATH_SINGLE_TOOLTIP_POW10}",
  SIN: "%{BKY_MATH_TRIG_TOOLTIP_SIN}",
  COS: "%{BKY_MATH_TRIG_TOOLTIP_COS}",
  TAN: "%{BKY_MATH_TRIG_TOOLTIP_TAN}",
  ASIN: "%{BKY_MATH_TRIG_TOOLTIP_ASIN}",
  ACOS: "%{BKY_MATH_TRIG_TOOLTIP_ACOS}",
  ATAN: "%{BKY_MATH_TRIG_TOOLTIP_ATAN}",
  SUM: "%{BKY_MATH_ONLIST_TOOLTIP_SUM}",
  MIN: "%{BKY_MATH_ONLIST_TOOLTIP_MIN}",
  MAX: "%{BKY_MATH_ONLIST_TOOLTIP_MAX}",
  AVERAGE: "%{BKY_MATH_ONLIST_TOOLTIP_AVERAGE}",
  MEDIAN: "%{BKY_MATH_ONLIST_TOOLTIP_MEDIAN}",
  MODE: "%{BKY_MATH_ONLIST_TOOLTIP_MODE}",
  STD_DEV: "%{BKY_MATH_ONLIST_TOOLTIP_STD_DEV}",
  RANDOM: "%{BKY_MATH_ONLIST_TOOLTIP_RANDOM}",
};
g.ka.register("math_op_tooltip", g.ka.Cq("OP", g.xa.Math.Vt));
g.xa.Math.mF = {
  vb: function () {
    var a = g.g.xml.createElement("mutation"),
      c = "DIVISIBLE_BY" == E(this, "PROPERTY");
    a.setAttribute("divisor_input", c);
    return a;
  },
  Vb: function (a) {
    a = "true" == a.getAttribute("divisor_input");
    this.Re(a);
  },
  Re: function (a) {
    var c = B(this, "DIVISOR");
    a ? c || M(this, "DIVISOR").Yb("Number") : c && this.xc("DIVISOR");
  },
};
g.xa.Math.nF = function () {
  Zb(z(this, "PROPERTY"), function (a) {
    a = "DIVISIBLE_BY" == a;
    this.W().Re(a);
  });
};
g.ka.ix("math_is_divisibleby_mutator", g.xa.Math.mF, g.xa.Math.nF);
g.ka.register("math_change_tooltip", g.ka.tu("%{BKY_MATH_CHANGE_TOOLTIP}"));
g.xa.Math.zF = {
  Ap: function (a) {
    "MODE" == a ? this.O.Yb("Array") : this.O.Yb("Number");
  },
  vb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("op", E(this, "OP"));
    return a;
  },
  Vb: function (a) {
    this.Ap(a.getAttribute("op"));
  },
};
g.xa.Math.yF = function () {
  Zb(
    z(this, "OP"),
    function (a) {
      this.Ap(a);
    }.bind(this)
  );
};
g.ka.ix("math_modes_of_list_mutator", g.xa.Math.zF, g.xa.Math.yF);
g.Ve = function (a, c, d) {
  this.pA = null;
  g.Ve.v.constructor.call(this, a, c, d);
};
g.g.object.U(g.Ve, g.Yd);
g.Ve.prototype.kl = !1;
g.Ve.ea = function (a) {
  return new g.Ve(a.checked, void 0, a);
};
g.Ve.$D = "\u2713";
b = g.Ve.prototype;
b.Fl = !0;
b.dt = "default";
b.ee = function (a) {
  g.Ve.v.ee.call(this, a);
  a.checkCharacter && (this.pA = a.checkCharacter);
};
b.qk = function () {
  g.Ve.v.qk.call(this);
  g.g.o.Ha(this.Hc, "blocklyCheckbox");
  this.Hc.style.display = this.Fb ? "block" : "none";
};
b.sj = function () {
  this.ci && (this.ci.nodeValue = this.lr());
  this.Sx(this.la().NE);
};
b.lr = function () {
  return this.pA || g.Ve.$D;
};
b.Bf = function () {
  this.setValue(!this.Fb);
};
b.Kh = function (a) {
  return !0 === a || "TRUE" === a
    ? "TRUE"
    : !1 === a || "FALSE" === a
    ? "FALSE"
    : null;
};
b.Bg = function (a) {
  this.Fb = Fe(a);
  this.Hc && (this.Hc.style.display = this.Fb ? "block" : "none");
};
b.getValue = function () {
  return this.Fb ? "TRUE" : "FALSE";
};
b.je = function () {
  return String(Fe(this.Fb));
};
function Fe(a) {
  return "string" == typeof a ? "TRUE" == a : !!a;
}
g.lf.register("field_checkbox", g.Ve);
g.aa.KJ = {};
g.aa.procedures_defnoreturn = {
  Y: function () {
    var a = g.Ca.er("", this);
    a = new g.Rc(a, g.Ca.lx);
    te(a);
    L(L(L(N(this), g.i.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
    this.gp(new g.Ic(["procedures_mutatorarg"]));
    (this.u.options.Hn ||
      (this.u.options.pc && this.u.options.pc.options.Hn)) &&
      g.i.PROCEDURES_DEFNORETURN_COMMENT &&
      this.vj(g.i.PROCEDURES_DEFNORETURN_COMMENT);
    this.Zb("procedure_blocks");
    this.Qb(g.i.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.Wc = g.i.PROCEDURES_DEFNORETURN_HELPURL;
    this.bb = [];
    this.vc = [];
    this.xj(!0);
    this.bh = null;
  },
  xj: function (a) {
    this.vr !== a &&
      (a
        ? (L(this.sg(g.fb, "STACK"), g.i.PROCEDURES_DEFNORETURN_DO),
          B(this, "RETURN") && mc(this, "STACK", "RETURN"))
        : this.xc("STACK", !0),
      (this.vr = a));
  },
  zp: function () {
    var a = "";
    this.bb.length &&
      (a = g.i.PROCEDURES_BEFORE_PARAMS + " " + this.bb.join(", "));
    g.h.disable();
    try {
      jc(this, a, "PARAMS");
    } finally {
      g.h.enable();
    }
  },
  vb: function (a) {
    var c = g.g.xml.createElement("mutation");
    a && c.setAttribute("name", E(this, "NAME"));
    for (var d = 0; d < this.vc.length; d++) {
      var e = g.g.xml.createElement("arg"),
        f = this.vc[d];
      e.setAttribute("name", f.name);
      e.setAttribute("varid", f.La());
      a && this.Sw && e.setAttribute("paramId", this.Sw[d]);
      c.appendChild(e);
    }
    this.vr || c.setAttribute("statements", "false");
    return c;
  },
  Vb: function (a) {
    this.bb = [];
    this.vc = [];
    for (var c = 0, d; (d = a.childNodes[c]); c++)
      if ("arg" == d.nodeName.toLowerCase()) {
        var e = d.getAttribute("name");
        d = d.getAttribute("varid") || d.getAttribute("varId");
        this.bb.push(e);
        d = g.$.pr(this.u, d, e, "");
        null != d
          ? this.vc.push(d)
          : console.log(
              "Failed to create a variable with name " + e + ", ignoring."
            );
      }
    this.zp();
    g.Ca.Ko(this);
    this.xj("false" !== a.getAttribute("statements"));
  },
  Ih: function (a) {
    var c = g.g.xml.createElement("block");
    c.setAttribute("type", "procedures_mutatorcontainer");
    var d = g.g.xml.createElement("statement");
    d.setAttribute("name", "STACK");
    c.appendChild(d);
    for (var e = 0; e < this.bb.length; e++) {
      var f = g.g.xml.createElement("block");
      f.setAttribute("type", "procedures_mutatorarg");
      var h = g.g.xml.createElement("field");
      h.setAttribute("name", "NAME");
      var k = g.g.xml.createTextNode(this.bb[e]);
      h.appendChild(k);
      f.appendChild(h);
      h = g.g.xml.createElement("next");
      f.appendChild(h);
      d.appendChild(f);
      d = h;
    }
    a = g.T.ck(c, a);
    "procedures_defreturn" == this.type
      ? jc(a, this.vr, "STATEMENTS")
      : a.xc("STATEMENT_INPUT");
    g.Ca.Ko(this);
    return a;
  },
  Eh: function (a) {
    this.bb = [];
    this.Sw = [];
    this.vc = [];
    for (var c = O(a, "STACK"); c && !c.Td(); ) {
      var d = E(c, "NAME");
      this.bb.push(d);
      d = this.u.ud(d, "");
      this.vc.push(d);
      this.Sw.push(c.id);
      c = c.X && c.X.ra();
    }
    this.zp();
    g.Ca.Ko(this);
    a = E(a, "STATEMENTS");
    if (null !== a && ((a = "TRUE" == a), this.vr != a))
      if (a) this.xj(!0), g.Ic.Dm(this.bh, this, "STACK"), (this.bh = null);
      else {
        a = B(this, "STACK").connection;
        if ((this.bh = a.na)) (a = a.ra()), A(a), a.Ub();
        this.xj(!1);
      }
  },
  Qi: function () {
    return [E(this, "NAME"), this.bb, !1];
  },
  Ph: function () {
    return this.bb;
  },
  Oh: function () {
    return this.vc;
  },
  os: function (a, c) {
    var d = this.u.Wf(a);
    if ("" == d.type) {
      d = d.name;
      c = this.u.Wf(c);
      for (var e = !1, f = 0; f < this.vc.length; f++)
        this.vc[f].La() == a &&
          ((this.bb[f] = c.name), (this.vc[f] = c), (e = !0));
      e && (this.Wq(d, c.name), g.Ca.Ko(this));
    }
  },
  Js: function (a) {
    for (var c = a.name, d = !1, e = 0; e < this.vc.length; e++)
      if (this.vc[e].La() == a.La()) {
        var f = this.bb[e];
        this.bb[e] = c;
        d = !0;
      }
    d && (this.Wq(f, c), g.Ca.Ko(this));
  },
  Wq: function (a, c) {
    this.zp();
    if (this.kd && this.kd.isVisible())
      for (var d = D(this.kd.s, !1), e = 0, f; (f = d[e]); e++)
        "procedures_mutatorarg" == f.type &&
          g.Ed.kf(a, E(f, "NAME")) &&
          jc(f, c, "NAME");
  },
  Hh: function (a) {
    if (!this.Lb) {
      var c = { enabled: !0 },
        d = E(this, "NAME");
      c.text = g.i.PROCEDURES_CREATE_DO.replace("%1", d);
      var e = g.g.xml.createElement("mutation");
      e.setAttribute("name", d);
      for (d = 0; d < this.bb.length; d++) {
        var f = g.g.xml.createElement("arg");
        f.setAttribute("name", this.bb[d]);
        e.appendChild(f);
      }
      d = g.g.xml.createElement("block");
      d.setAttribute("type", this.mA);
      d.appendChild(e);
      c.za = g.Va.Dq(this, d);
      a.push(c);
      if (!this.isCollapsed())
        for (d = 0; d < this.vc.length; d++)
          (c = { enabled: !0 }),
            (e = this.vc[d]),
            (c.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", e.name)),
            (e = g.$.ao(e)),
            (f = g.g.xml.createElement("block")),
            f.setAttribute("type", "variables_get"),
            f.appendChild(e),
            (c.za = g.Va.Dq(this, f)),
            a.push(c);
    }
  },
  mA: "procedures_callnoreturn",
};
g.aa.procedures_defreturn = {
  Y: function () {
    var a = g.Ca.er("", this);
    a = new g.Rc(a, g.Ca.lx);
    te(a);
    L(L(L(N(this), g.i.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
    L(hc(M(this, "RETURN"), g.Um), g.i.PROCEDURES_DEFRETURN_RETURN);
    this.gp(new g.Ic(["procedures_mutatorarg"]));
    (this.u.options.Hn ||
      (this.u.options.pc && this.u.options.pc.options.Hn)) &&
      g.i.PROCEDURES_DEFRETURN_COMMENT &&
      this.vj(g.i.PROCEDURES_DEFRETURN_COMMENT);
    this.Zb("procedure_blocks");
    this.Qb(g.i.PROCEDURES_DEFRETURN_TOOLTIP);
    this.Wc = g.i.PROCEDURES_DEFRETURN_HELPURL;
    this.bb = [];
    this.vc = [];
    this.xj(!0);
    this.bh = null;
  },
  xj: g.aa.procedures_defnoreturn.xj,
  zp: g.aa.procedures_defnoreturn.zp,
  vb: g.aa.procedures_defnoreturn.vb,
  Vb: g.aa.procedures_defnoreturn.Vb,
  Ih: g.aa.procedures_defnoreturn.Ih,
  Eh: g.aa.procedures_defnoreturn.Eh,
  Qi: function () {
    return [E(this, "NAME"), this.bb, !0];
  },
  Ph: g.aa.procedures_defnoreturn.Ph,
  Oh: g.aa.procedures_defnoreturn.Oh,
  os: g.aa.procedures_defnoreturn.os,
  Js: g.aa.procedures_defnoreturn.Js,
  Wq: g.aa.procedures_defnoreturn.Wq,
  Hh: g.aa.procedures_defnoreturn.Hh,
  mA: "procedures_callreturn",
};
g.aa.procedures_mutatorcontainer = {
  Y: function () {
    L(N(this), g.i.PROCEDURES_MUTATORCONTAINER_TITLE);
    this.sg(g.fb, "STACK");
    L(
      L(N(this, "STATEMENT_INPUT"), g.i.PROCEDURES_ALLOW_STATEMENTS),
      new g.Ve("TRUE"),
      "STATEMENTS"
    );
    this.Zb("procedure_blocks");
    this.Qb(g.i.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.aa.procedures_mutatorarg = {
  Y: function () {
    var a = new g.Rc(g.Ca.ty, this.Zk);
    a.nJ = a.Bf;
    a.Bf = function () {
      this.On = [];
      this.nJ();
    };
    L(L(N(this), g.i.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
    this.Zg(!0);
    this.Yg(!0);
    this.Zb("procedure_blocks");
    this.Qb(g.i.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = !1;
    a.Hw = this.vH;
    a.On = [];
    a.Hw("x");
  },
  Zk: function (a) {
    var c = this.W(),
      d = g.Ic.dB(c.u);
    a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
    if (!a) return null;
    for (
      var e = D(c.u.$a || c.u, !1), f = a.toLowerCase(), h = 0;
      h < e.length;
      h++
    )
      if (e[h].id != this.W().id) {
        var k = E(e[h], "NAME");
        if (k && k.toLowerCase() == f) return null;
      }
    if (c.Lb) return a;
    (c = d.ud(a, "")) && c.name != a && d.rj(c.La(), a);
    c || ((c = d.hf(a, "")) && this.On && this.On.push(c));
    return a;
  },
  vH: function (a) {
    var c = g.Ic.dB(this.W().u);
    if (c)
      for (var d = 0; d < this.On.length; d++) {
        var e = this.On[d];
        e.name != a && c.Jh(e.La());
      }
  },
};
g.aa.procedures_callnoreturn = {
  Y: function () {
    L(N(this, "TOPROW"), "", "NAME");
    this.Zg(!0);
    this.Yg(!0);
    this.Zb("procedure_blocks");
    this.Wc = g.i.PROCEDURES_CALLNORETURN_HELPURL;
    this.bb = [];
    this.vc = [];
    this.Pk = {};
    this.Vg = null;
    this.ax = !0;
  },
  Ee: function () {
    return E(this, "NAME");
  },
  Fm: function (a, c) {
    g.Ed.kf(a, this.Ee()) &&
      (jc(this, c, "NAME"),
      this.Qb(
        (this.O
          ? g.i.PROCEDURES_CALLRETURN_TOOLTIP
          : g.i.PROCEDURES_CALLNORETURN_TOOLTIP
        ).replace("%1", c)
      ));
  },
  xx: function (a, c) {
    var d = g.Ca.ho(this.Ee(), this.u),
      e = d && d.kd && d.kd.isVisible();
    e || ((this.Pk = {}), (this.Vg = null));
    if (c)
      if (a.join("\n") == this.bb.join("\n")) this.Vg = c;
      else {
        if (c.length != a.length)
          throw RangeError("paramNames and paramIds must be the same length.");
        this.uj(!1);
        this.Vg || ((this.Pk = {}), (this.Vg = []));
        d = this.pa;
        this.pa = !1;
        for (var f = 0; f < this.bb.length; f++) {
          var h = B(this, "ARG" + f);
          h &&
            ((h = h.connection.na),
            (this.Pk[this.Vg[f]] = h),
            e &&
              h &&
              -1 == c.indexOf(this.Vg[f]) &&
              (h.disconnect(), h.W().Ub()));
        }
        this.bb = [].concat(a);
        this.vc = [];
        for (f = 0; f < this.bb.length; f++)
          (a = g.$.pr(this.u, null, this.bb[f], "")), this.vc.push(a);
        this.Re();
        if ((this.Vg = c))
          for (f = 0; f < this.bb.length; f++)
            (c = this.Vg[f]),
              c in this.Pk &&
                ((h = this.Pk[c]),
                g.Ic.Dm(h, this, "ARG" + f) || delete this.Pk[c]);
        (this.pa = d) && this.Ga();
      }
  },
  Re: function () {
    for (var a = 0; a < this.bb.length; a++) {
      var c = z(this, "ARGNAME" + a);
      if (c) {
        g.h.disable();
        try {
          c.setValue(this.bb[a]);
        } finally {
          g.h.enable();
        }
      } else
        (c = new g.Ad(this.bb[a])),
          L(hc(M(this, "ARG" + a), g.Um), c, "ARGNAME" + a).Y();
    }
    for (; B(this, "ARG" + a); ) this.xc("ARG" + a), a++;
    if ((a = B(this, "TOPROW")))
      if (this.bb.length)
        z(this, "WITH") ||
          (L(a, g.i.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.Y());
      else if (z(this, "WITH"))
        a: {
          c = 0;
          for (var d; (d = a.hb[c]); c++)
            if ("WITH" === d.name) {
              d.I();
              a.hb.splice(c, 1);
              a.K.pa && ((a.K = a.K), a.K.Ga(), a.K.Ub());
              break a;
            }
          throw Error('Field "WITH" not found.');
        }
  },
  vb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("name", this.Ee());
    for (var c = 0; c < this.bb.length; c++) {
      var d = g.g.xml.createElement("arg");
      d.setAttribute("name", this.bb[c]);
      a.appendChild(d);
    }
    return a;
  },
  Vb: function (a) {
    var c = a.getAttribute("name");
    this.Fm(this.Ee(), c);
    c = [];
    for (var d = [], e = 0, f; (f = a.childNodes[e]); e++)
      "arg" == f.nodeName.toLowerCase() &&
        (c.push(f.getAttribute("name")), d.push(f.getAttribute("paramId")));
    this.xx(c, d);
  },
  Ph: function () {
    return this.bb;
  },
  Oh: function () {
    return this.vc;
  },
  onchange: function (a) {
    if (this.u && !this.u.Xf && a.Za)
      if (a.type == g.h.Hp && -1 != a.Qh.indexOf(this.id)) {
        var c = this.Ee();
        c = g.Ca.ho(c, this.u);
        !c ||
          (c.type == this.Ou &&
            JSON.stringify(c.Ph()) == JSON.stringify(this.bb)) ||
          (c = null);
        if (!c) {
          g.h.ga(a.group);
          a = g.g.xml.createElement("xml");
          c = g.g.xml.createElement("block");
          c.setAttribute("type", this.Ou);
          var d = this.Xa(),
            e = d.y + 2 * g.Id;
          c.setAttribute("x", d.x + g.Id * (this.L ? -1 : 1));
          c.setAttribute("y", e);
          d = this.vb();
          c.appendChild(d);
          d = g.g.xml.createElement("field");
          d.setAttribute("name", "NAME");
          e = this.Ee();
          e || ((e = g.Ca.er("", this)), this.Fm("", e));
          d.appendChild(g.g.xml.createTextNode(e));
          c.appendChild(d);
          a.appendChild(c);
          g.T.Mi(a, this.u);
          g.h.ga(!1);
        }
      } else
        a.type == g.h.Ss
          ? ((c = this.Ee()),
            (c = g.Ca.ho(c, this.u)),
            c || (g.h.ga(a.group), this.I(!0), g.h.ga(!1)))
          : a.type == g.h.Gj &&
            "disabled" == a.element &&
            ((c = this.Ee()),
            (c = g.Ca.ho(c, this.u)) &&
              c.id == a.lb &&
              ((c = g.h.oc()) &&
                console.log(
                  "Saw an existing group while responding to a definition change"
                ),
              g.h.ga(a.group),
              a.newValue
                ? ((this.ax = this.isEnabled()), this.Wd(!1))
                : this.Wd(this.ax),
              g.h.ga(c)));
  },
  Hh: function (a) {
    if (this.u.Fc()) {
      var c = { enabled: !0 };
      c.text = g.i.PROCEDURES_HIGHLIGHT_DEF;
      var d = this.Ee(),
        e = this.u;
      c.za = function () {
        var f = g.Ca.ho(d, e);
        if (f) {
          var h = f.id;
          if (e.Fc()) {
            if ((h = h ? e.td(h) : null)) {
              var k = h.Xa(),
                l = K(h),
                m = e.scale;
              h = (k.x + ((e.L ? -1 : 1) * l.width) / 2) * m;
              k = (k.y + l.height / 2) * m;
              l = e.Vc();
              e.scroll(-(h - l.Gb / 2), -(k - l.Nb / 2));
            }
          } else
            console.warn(
              "Tried to move a non-movable workspace. This could result in blocks becoming inaccessible."
            );
          f.select();
        }
      };
      a.push(c);
    }
  },
  Ou: "procedures_defnoreturn",
};
g.aa.procedures_callreturn = {
  Y: function () {
    L(N(this, "TOPROW"), "", "NAME");
    this.zf(!0);
    this.Zb("procedure_blocks");
    this.Wc = g.i.PROCEDURES_CALLRETURN_HELPURL;
    this.bb = [];
    this.vc = [];
    this.Pk = {};
    this.Vg = null;
    this.ax = !0;
  },
  Ee: g.aa.procedures_callnoreturn.Ee,
  Fm: g.aa.procedures_callnoreturn.Fm,
  xx: g.aa.procedures_callnoreturn.xx,
  Re: g.aa.procedures_callnoreturn.Re,
  vb: g.aa.procedures_callnoreturn.vb,
  Vb: g.aa.procedures_callnoreturn.Vb,
  Ph: g.aa.procedures_callnoreturn.Ph,
  Oh: g.aa.procedures_callnoreturn.Oh,
  onchange: g.aa.procedures_callnoreturn.onchange,
  Hh: g.aa.procedures_callnoreturn.Hh,
  Ou: "procedures_defreturn",
};
g.aa.procedures_ifreturn = {
  Y: function () {
    L(M(this, "CONDITION").Yb("Boolean"), g.i.CONTROLS_IF_MSG_IF);
    L(M(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN);
    this.Ne(!0);
    this.Zg(!0);
    this.Yg(!0);
    this.Zb("procedure_blocks");
    this.Qb(g.i.PROCEDURES_IFRETURN_TOOLTIP);
    this.Wc = g.i.PROCEDURES_IFRETURN_HELPURL;
    this.Ti = !0;
  },
  vb: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("value", Number(this.Ti));
    return a;
  },
  Vb: function (a) {
    this.Ti = 1 == a.getAttribute("value");
    this.Ti ||
      (this.xc("VALUE"), L(N(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN));
  },
  onchange: function () {
    if (this.u.Ec && !this.u.Ec()) {
      var a = !1,
        c = this;
      do {
        if (-1 != this.XE.indexOf(c.type)) {
          a = !0;
          break;
        }
        c = ic(c);
      } while (c);
      a
        ? ("procedures_defnoreturn" == c.type && this.Ti
            ? (this.xc("VALUE"),
              L(N(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN),
              (this.Ti = !1))
            : "procedures_defreturn" != c.type ||
              this.Ti ||
              (this.xc("VALUE"),
              L(M(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN),
              (this.Ti = !0)),
          this.Im(null),
          this.Lb || this.Wd(!0))
        : (this.Im(g.i.PROCEDURES_IFRETURN_WARNING),
          this.Lb || kc(this) || this.Wd(!1));
    }
  },
  XE: ["procedures_defnoreturn", "procedures_defreturn"],
};
g.aa.dL = {};
g.xa.$ = {};
g.xa.$.cq = 330;
g.dm([
  {
    type: "variables_get",
    message0: "%1",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      },
    ],
    output: null,
    style: "variable_blocks",
    helpUrl: "%{BKY_VARIABLES_GET_HELPURL}",
    tooltip: "%{BKY_VARIABLES_GET_TOOLTIP}",
    extensions: ["contextMenu_variableSetterGetter"],
  },
  {
    type: "variables_set",
    message0: "%{BKY_VARIABLES_SET}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_VARIABLES_DEFAULT_NAME}",
      },
      { type: "input_value", name: "VALUE" },
    ],
    previousStatement: null,
    nextStatement: null,
    style: "variable_blocks",
    tooltip: "%{BKY_VARIABLES_SET_TOOLTIP}",
    helpUrl: "%{BKY_VARIABLES_SET_HELPURL}",
    extensions: ["contextMenu_variableSetterGetter"],
  },
]);
g.xa.$.nE = {
  Hh: function (a) {
    if (!this.Lb) {
      if ("variables_get" == this.type)
        var c = "variables_set",
          d = g.i.VARIABLES_GET_CREATE_SET;
      else (c = "variables_get"), (d = g.i.VARIABLES_SET_CREATE_GET);
      var e = { enabled: 0 < Ia(this.u) },
        f = z(this, "VAR").je();
      e.text = d.replace("%1", f);
      d = g.g.xml.createElement("field");
      d.setAttribute("name", "VAR");
      d.appendChild(g.g.xml.createTextNode(f));
      f = g.g.xml.createElement("block");
      f.setAttribute("type", c);
      f.appendChild(d);
      e.za = g.Va.Dq(this, f);
      a.push(e);
    } else if (
      "variables_get" == this.type ||
      "variables_get_reporter" == this.type
    )
      (c = { text: g.i.pN, enabled: !0, za: g.xa.$.jG(this) }),
        (f = z(this, "VAR").je()),
        (e = {
          text: g.i.AL.replace("%1", f),
          enabled: !0,
          za: g.xa.$.sE(this),
        }),
        a.unshift(c),
        a.unshift(e);
  },
};
g.xa.$.jG = function (a) {
  return function () {
    var c = a.u,
      d = z(a, "VAR").ud();
    g.$.ps(c, d);
  };
};
g.xa.$.sE = function (a) {
  return function () {
    var c = a.u,
      d = z(a, "VAR").ud();
    c.Jh(d.La());
    Qc(c);
  };
};
g.ka.ks("contextMenu_variableSetterGetter", g.xa.$.nE);
g.jg = function (a, c, d, e, f, h, k) {
  if (!a) throw Error("Src value of an image field is required");
  a = g.g.Nc(a);
  d = Number(g.g.Nc(d));
  c = Number(g.g.Nc(c));
  if (isNaN(d) || isNaN(c))
    throw Error(
      "Height and width values of an image field must cast to numbers."
    );
  if (0 >= d || 0 >= c)
    throw Error(
      "Height and width values of an image field must be greater than 0."
    );
  this.Yn = !1;
  this.yq = "";
  g.jg.v.constructor.call(this, a, null, k);
  k || ((this.Yn = !!h), (this.yq = g.g.Nc(e) || ""));
  this.nd = new g.g.se(c, d + g.jg.HG);
  this.BI = d;
  this.Dh = null;
  "function" == typeof f && (this.Dh = f);
  this.Wb = null;
};
g.g.object.U(g.jg, g.Yd);
g.jg.prototype.kl = "";
g.jg.ea = function (a) {
  return new g.jg(a.src, a.width, a.height, void 0, void 0, void 0, a);
};
g.jg.HG = 1;
b = g.jg.prototype;
b.$m = !1;
b.Pg = !1;
b.ee = function (a) {
  g.jg.v.ee.call(this, a);
  this.Yn = !!a.flipRtl;
  this.yq = g.g.Nc(a.alt) || "";
};
b.qk = function () {
  this.Wb = g.g.o.M(
    g.g.G.si,
    { height: this.BI + "px", width: this.nd.width + "px", alt: this.yq },
    this.ie
  );
  this.Wb.setAttributeNS(g.g.o.bf, "xlink:href", this.Fb);
  this.Dh && (this.Wb.style.cursor = "pointer");
};
b.Sx = function () {};
b.Kh = function (a) {
  return "string" != typeof a ? null : a;
};
b.Bg = function (a) {
  this.Fb = a;
  this.Wb && this.Wb.setAttributeNS(g.g.o.bf, "xlink:href", String(this.Fb));
};
b.rB = function () {
  return this.Yn;
};
b.Bf = function () {
  this.Dh && this.Dh(this);
};
b.km = function () {
  return this.yq;
};
g.lf.register("field_image", g.jg);
g.Generator = function (a) {
  this.gj = a;
  this.WE = new RegExp(this.Ue, "g");
};
g.Generator.ez = "generated_function";
b = g.Generator.prototype;
b.eq = null;
b.ae = null;
b.cd = null;
b.Bd = "  ";
b.cE = 60;
b.kq = [];
b.Zv = null;
function Ge(a, c) {
  return c + a.replace(/(?!\n$)\n/g, "\n" + c);
}
function He(a, c) {
  !1 === a.Zv &&
    console.warn(
      "Generator init was not called before blockToCode was called."
    );
  if (!c) return "";
  if (!c.isEnabled()) return He(a, t(c));
  if (c.Td()) return He(a, Aa(c, !1)[0]);
  var d = a[c.type];
  if ("function" != typeof d)
    throw Error(
      'Language "' +
        a.gj +
        '" does not know how to generate  code for block type "' +
        c.type +
        '".'
    );
  d = d.call(c, c);
  if (Array.isArray(d)) {
    if (!c.O)
      throw TypeError("Expecting string from statement block: " + c.type);
    return [a.ts(c, d[0], void 0), d[1]];
  }
  if ("string" == typeof d)
    return (
      a.ae && !c.zj && (d = T(a.ae, c) + d),
      a.cd && !c.zj && (d += T(a.cd, c)),
      a.ts(c, d, void 0)
    );
  if (null === d) return "";
  throw SyntaxError("Invalid code generated: " + d);
}
function U(a, c, d) {
  var e = g.m;
  if (isNaN(d)) throw TypeError("Expecting valid order from block: " + a.type);
  var f = O(a, c);
  if (!f) return "";
  c = He(e, f);
  if ("" === c) return "";
  if (!Array.isArray(c))
    throw TypeError("Expecting tuple from value block: " + f.type);
  a = c[0];
  c = c[1];
  if (isNaN(c))
    throw TypeError("Expecting valid order from value block: " + f.type);
  if (!a) return "";
  f = !1;
  var h = Math.floor(d),
    k = Math.floor(c);
  if (h <= k && (h != k || (0 != h && 99 != h)))
    for (f = !0, h = 0; h < e.kq.length; h++)
      if (e.kq[h][0] == d && e.kq[h][1] == c) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function Ie(a, c) {
  var d = g.m;
  a = O(a, c);
  c = He(d, a);
  if ("string" != typeof c)
    throw TypeError("Expecting code from statement block: " + (a && a.type));
  c && (c = Ge(c, d.Bd));
  return c;
}
function Je(a, c) {
  var d = g.m;
  d.eq && (a = Ge(T(d.eq, c), d.Bd) + a);
  d.cd && !c.zj && (a = Ge(T(d.cd, c), d.Bd) + a);
  d.ae && !c.zj && (a += Ge(T(d.ae, c), d.Bd));
  return a;
}
function T(a, c) {
  c = c.id.replace(/\$/g, "$$$$");
  return a.replace(/%1/g, "'" + c + "'");
}
b.Lt = "";
function Ke(a, c) {
  a.Lt += c + ",";
}
b.Ue = "{leCUI8hutHZI4480Dc}";
function Le(a, c) {
  var d = g.m;
  if (!d.Li[a]) {
    var e = P(d.ac, a, g.tn);
    d.uv[a] = e;
    c = c.join("\n").replace(d.WE, e);
    for (var f; f != c; )
      (f = c), (c = c.replace(/^(( {2})*) {2}/gm, "$1\x00"));
    c = c.replace(/\0/g, d.Bd);
    d.Li[a] = c;
  }
  return d.uv[a];
}
b.Y = function () {};
b.ts = function (a, c) {
  return c;
};
b.finish = function (a) {
  return a;
};
b.fD = function (a) {
  return a;
};
g.m = new g.Generator("JavaScript");
Ke(
  g.m,
  "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," +
    Object.getOwnPropertyNames(g.g.global).join(",")
);
g.m.Ai = 0;
g.m.aN = 1.1;
g.m.ic = 1.2;
g.m.Sb = 2;
g.m.ZM = 3;
g.m.VM = 3;
g.m.RM = 4.1;
g.m.cN = 4.2;
g.m.rn = 4.3;
g.m.pn = 4.4;
g.m.bN = 4.5;
g.m.dN = 4.6;
g.m.WM = 4.7;
g.m.PM = 4.8;
g.m.XM = 5;
g.m.Ft = 5.1;
g.m.on = 5.2;
g.m.qn = 5.3;
g.m.Bl = 6.1;
g.m.Nj = 6.2;
g.m.TM = 7;
g.m.ZF = 8;
g.m.YM = 8;
g.m.$M = 8;
g.m.jz = 9;
g.m.QM = 10;
g.m.UM = 11;
g.m.SM = 12;
g.m.Dt = 13;
g.m.Et = 14;
g.m.jq = 15;
g.m.Oj = 16;
g.m.eN = 17;
g.m.YF = 18;
g.m.xb = 99;
g.m.kq = [
  [g.m.Sb, g.m.ic],
  [g.m.Sb, g.m.Sb],
  [g.m.ic, g.m.ic],
  [g.m.ic, g.m.Sb],
  [g.m.pn, g.m.pn],
  [g.m.Ft, g.m.Ft],
  [g.m.Nj, g.m.Nj],
  [g.m.Dt, g.m.Dt],
  [g.m.Et, g.m.Et],
];
g.m.Zv = !1;
g.m.Y = function (a) {
  g.m.Li = Object.create(null);
  g.m.uv = Object.create(null);
  g.m.ac ? g.m.ac.reset() : (g.m.ac = new g.Ed(g.m.Lt));
  g.m.ac.Ax(a.Qa);
  for (var c = [], d = g.$.LG(a), e = 0; e < d.length; e++)
    c.push(g.m.ac.De(d[e], g.Ed.ft));
  a = g.$.gA(a);
  for (e = 0; e < a.length; e++) c.push(g.m.ac.De(a[e].La(), g.uc));
  c.length && (g.m.Li.variables = "var " + c.join(", ") + ";");
  this.Zv = !0;
};
g.m.finish = function (a) {
  var c = [],
    d;
  for (d in g.m.Li) c.push(g.m.Li[d]);
  delete g.m.Li;
  delete g.m.uv;
  g.m.ac.reset();
  return c.join("\n\n") + "\n\n\n" + a;
};
g.m.fD = function (a) {
  return a + ";\n";
};
g.m.ZC = function (a) {
  a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
  return "'" + a + "'";
};
g.m.fO = function (a) {
  return a.split(/\n/g).map(g.m.ZC).join(" + '\\n' +\n");
};
g.m.ts = function (a, c, d) {
  var e = "";
  if (!a.O || !a.O.na) {
    var f = a.ye.text;
    f && ((f = g.g.pb.HD(f, g.m.cE - 3)), (e += Ge(f + "\n", "// ")));
    for (var h = 0; h < a.S.length; h++)
      if (a.S[h].type == g.kb) {
        var k = a.S[h].connection.ra();
        if (k) {
          f = [];
          k = p(k, !0);
          for (var l = 0; l < k.length; l++) {
            var m = k[l].ye.text;
            m && f.push(m);
          }
          f.length && f.push("");
          (f = f.join("\n")) && (e += Ge(f, "// "));
        }
      }
  }
  a = a.X && a.X.ra();
  d = d ? "" : He(g.m, a);
  return e + c + d;
};
g.m.Fg = function (a, c, d, e, f) {
  d = d || 0;
  f = f || g.m.xb;
  a.u.options.Xh && d--;
  var h = a.u.options.Xh ? "1" : "0";
  a =
    0 < d
      ? U(a, c, g.m.Nj) || h
      : 0 > d
      ? U(a, c, g.m.Bl) || h
      : e
      ? U(a, c, g.m.rn) || h
      : U(a, c, f) || h;
  if (g.bj(a)) (a = Number(a) + d), e && (a = -a);
  else {
    if (0 < d) {
      a = a + " + " + d;
      var k = g.m.Nj;
    } else 0 > d && ((a = a + " - " + -d), (k = g.m.Bl));
    e && ((a = d ? "-(" + a + ")" : "-" + a), (k = g.m.rn));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
g.m.jw = {};
g.m.lists_create_empty = function () {
  return ["[]", g.m.Ai];
};
g.m.lists_create_with = function (a) {
  for (var c = Array(a.Yf), d = 0; d < a.Yf; d++)
    c[d] = U(a, "ADD" + d, g.m.xb) || "null";
  return ["[" + c.join(", ") + "]", g.m.Ai];
};
g.m.lists_repeat = function (a) {
  var c = Le("listsRepeat", [
      "function " + g.m.Ue + "(value, n) {",
      "  var array = [];",
      "  for (var i = 0; i < n; i++) {",
      "    array[i] = value;",
      "  }",
      "  return array;",
      "}",
    ]),
    d = U(a, "ITEM", g.m.xb) || "null";
  a = U(a, "NUM", g.m.xb) || "0";
  return [c + "(" + d + ", " + a + ")", g.m.Sb];
};
g.m.lists_length = function (a) {
  return [(U(a, "VALUE", g.m.ic) || "[]") + ".length", g.m.ic];
};
g.m.lists_isEmpty = function (a) {
  return ["!" + (U(a, "VALUE", g.m.ic) || "[]") + ".length", g.m.pn];
};
g.m.lists_indexOf = function (a) {
  var c = "FIRST" == E(a, "END") ? "indexOf" : "lastIndexOf",
    d = U(a, "FIND", g.m.xb) || "''";
  c = (U(a, "VALUE", g.m.ic) || "[]") + "." + c + "(" + d + ")";
  return a.u.options.Xh ? [c + " + 1", g.m.Nj] : [c, g.m.Sb];
};
g.m.lists_getIndex = function (a) {
  var c = E(a, "MODE") || "GET",
    d = E(a, "WHERE") || "FROM_START",
    e = U(a, "VALUE", "RANDOM" == d ? g.m.xb : g.m.ic) || "[]";
  switch (d) {
    case "FIRST":
      if ("GET" == c) return [e + "[0]", g.m.ic];
      if ("GET_REMOVE" == c) return [e + ".shift()", g.m.ic];
      if ("REMOVE" == c) return e + ".shift();\n";
      break;
    case "LAST":
      if ("GET" == c) return [e + ".slice(-1)[0]", g.m.ic];
      if ("GET_REMOVE" == c) return [e + ".pop()", g.m.ic];
      if ("REMOVE" == c) return e + ".pop();\n";
      break;
    case "FROM_START":
      a = g.m.Fg(a, "AT");
      if ("GET" == c) return [e + "[" + a + "]", g.m.ic];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.m.Sb];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);\n";
      break;
    case "FROM_END":
      a = g.m.Fg(a, "AT", 1, !0);
      if ("GET" == c) return [e + ".slice(" + a + ")[0]", g.m.Sb];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.m.Sb];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);";
      break;
    case "RANDOM":
      e =
        Le("listsGetRandomItem", [
          "function " + g.m.Ue + "(list, remove) {",
          "  var x = Math.floor(Math.random() * list.length);",
          "  if (remove) {",
          "    return list.splice(x, 1)[0];",
          "  } else {",
          "    return list[x];",
          "  }",
          "}",
        ]) +
        "(" +
        e +
        ", " +
        ("GET" != c) +
        ")";
      if ("GET" == c || "GET_REMOVE" == c) return [e, g.m.Sb];
      if ("REMOVE" == c) return e + ";\n";
  }
  throw Error("Unhandled combination (lists_getIndex).");
};
g.m.lists_setIndex = function (a) {
  function c() {
    if (d.match(/^\w+$/)) return "";
    var k = P(g.m.ac, "tmpList", g.uc),
      l = "var " + k + " = " + d + ";\n";
    d = k;
    return l;
  }
  var d = U(a, "LIST", g.m.ic) || "[]",
    e = E(a, "MODE") || "GET",
    f = E(a, "WHERE") || "FROM_START",
    h = U(a, "TO", g.m.Oj) || "null";
  switch (f) {
    case "FIRST":
      if ("SET" == e) return d + "[0] = " + h + ";\n";
      if ("INSERT" == e) return d + ".unshift(" + h + ");\n";
      break;
    case "LAST":
      if ("SET" == e)
        return (a = c()), a + (d + "[" + d + ".length - 1] = " + h + ";\n");
      if ("INSERT" == e) return d + ".push(" + h + ");\n";
      break;
    case "FROM_START":
      f = g.m.Fg(a, "AT");
      if ("SET" == e) return d + "[" + f + "] = " + h + ";\n";
      if ("INSERT" == e) return d + ".splice(" + f + ", 0, " + h + ");\n";
      break;
    case "FROM_END":
      f = g.m.Fg(a, "AT", 1, !1, g.m.Bl);
      a = c();
      if ("SET" == e)
        return a + (d + "[" + d + ".length - " + f + "] = " + h + ";\n");
      if ("INSERT" == e)
        return (
          a + (d + ".splice(" + d + ".length - " + f + ", 0, " + h + ");\n")
        );
      break;
    case "RANDOM":
      a = c();
      f = P(g.m.ac, "tmpX", g.uc);
      a += "var " + f + " = Math.floor(Math.random() * " + d + ".length);\n";
      if ("SET" == e) return a + (d + "[" + f + "] = " + h + ";\n");
      if ("INSERT" == e) return a + (d + ".splice(" + f + ", 0, " + h + ");\n");
  }
  throw Error("Unhandled combination (lists_setIndex).");
};
g.m.jw.fI = function (a, c, d) {
  return "FIRST" == c
    ? "0"
    : "FROM_END" == c
    ? a + ".length - 1 - " + d
    : "LAST" == c
    ? a + ".length - 1"
    : d;
};
g.m.lists_getSublist = function (a) {
  var c = U(a, "LIST", g.m.ic) || "[]",
    d = E(a, "WHERE1"),
    e = E(a, "WHERE2");
  if ("FIRST" == d && "LAST" == e) c += ".slice(0)";
  else if (c.match(/^\w+$/) || ("FROM_END" != d && "FROM_START" == e)) {
    switch (d) {
      case "FROM_START":
        var f = g.m.Fg(a, "AT1");
        break;
      case "FROM_END":
        f = g.m.Fg(a, "AT1", 1, !1, g.m.Bl);
        f = c + ".length - " + f;
        break;
      case "FIRST":
        f = "0";
        break;
      default:
        throw Error("Unhandled option (lists_getSublist).");
    }
    switch (e) {
      case "FROM_START":
        a = g.m.Fg(a, "AT2", 1);
        break;
      case "FROM_END":
        a = g.m.Fg(a, "AT2", 0, !1, g.m.Bl);
        a = c + ".length - " + a;
        break;
      case "LAST":
        a = c + ".length";
        break;
      default:
        throw Error("Unhandled option (lists_getSublist).");
    }
    c = c + ".slice(" + f + ", " + a + ")";
  } else {
    f = g.m.Fg(a, "AT1");
    a = g.m.Fg(a, "AT2");
    var h = g.m.jw.fI,
      k = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd",
      };
    c =
      Le("subsequence" + k[d] + k[e], [
        "function " +
          g.m.Ue +
          "(sequence" +
          ("FROM_END" == d || "FROM_START" == d ? ", at1" : "") +
          ("FROM_END" == e || "FROM_START" == e ? ", at2" : "") +
          ") {",
        "  var start = " + h("sequence", d, "at1") + ";",
        "  var end = " + h("sequence", e, "at2") + " + 1;",
        "  return sequence.slice(start, end);",
        "}",
      ]) +
      "(" +
      c +
      ("FROM_END" == d || "FROM_START" == d ? ", " + f : "") +
      ("FROM_END" == e || "FROM_START" == e ? ", " + a : "") +
      ")";
  }
  return [c, g.m.Sb];
};
g.m.lists_sort = function (a) {
  var c = U(a, "LIST", g.m.Sb) || "[]",
    d = "1" === E(a, "DIRECTION") ? 1 : -1;
  a = E(a, "TYPE");
  var e = Le("listsGetSortCompare", [
    "function " + g.m.Ue + "(type, direction) {",
    "  var compareFuncs = {",
    '    "NUMERIC": function(a, b) {',
    "        return Number(a) - Number(b); },",
    '    "TEXT": function(a, b) {',
    "        return a.toString() > b.toString() ? 1 : -1; },",
    '    "IGNORE_CASE": function(a, b) {',
    "        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },",
    "  };",
    "  var compare = compareFuncs[type];",
    "  return function(a, b) { return compare(a, b) * direction; }",
    "}",
  ]);
  return [c + ".slice().sort(" + e + '("' + a + '", ' + d + "))", g.m.Sb];
};
g.m.lists_split = function (a) {
  var c = U(a, "INPUT", g.m.ic),
    d = U(a, "DELIM", g.m.xb) || "''";
  a = E(a, "MODE");
  if ("SPLIT" == a) c || (c = "''"), (a = "split");
  else if ("JOIN" == a) c || (c = "[]"), (a = "join");
  else throw Error("Unknown mode: " + a);
  return [c + "." + a + "(" + d + ")", g.m.Sb];
};
g.m.lists_reverse = function (a) {
  return [(U(a, "LIST", g.m.Sb) || "[]") + ".slice().reverse()", g.m.Sb];
};
g.m.RI = {};
g.m.controls_if = function (a) {
  var c = 0,
    d = "";
  g.m.ae && (d += T(g.m.ae, a));
  do {
    var e = U(a, "IF" + c, g.m.xb) || "false";
    var f = Ie(a, "DO" + c);
    g.m.cd && (f = Ge(T(g.m.cd, a), g.m.Bd) + f);
    d += (0 < c ? " else " : "") + "if (" + e + ") {\n" + f + "}";
    ++c;
  } while (B(a, "IF" + c));
  if (B(a, "ELSE") || g.m.cd)
    (f = Ie(a, "ELSE")),
      g.m.cd && (f = Ge(T(g.m.cd, a), g.m.Bd) + f),
      (d += " else {\n" + f + "}");
  return d + "\n";
};
g.m.controls_ifelse = g.m.controls_if;
g.m.logic_compare = function (a) {
  var c = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[
      E(a, "OP")
    ],
    d = "==" == c || "!=" == c ? g.m.jz : g.m.ZF,
    e = U(a, "A", d) || "0";
  a = U(a, "B", d) || "0";
  return [e + " " + c + " " + a, d];
};
g.m.logic_operation = function (a) {
  var c = "AND" == E(a, "OP") ? "&&" : "||",
    d = "&&" == c ? g.m.Dt : g.m.Et,
    e = U(a, "A", d);
  a = U(a, "B", d);
  if (e || a) {
    var f = "&&" == c ? "true" : "false";
    e || (e = f);
    a || (a = f);
  } else a = e = "false";
  return [e + " " + c + " " + a, d];
};
g.m.logic_negate = function (a) {
  var c = g.m.pn;
  return ["!" + (U(a, "BOOL", c) || "true"), c];
};
g.m.logic_boolean = function (a) {
  return ["TRUE" == E(a, "BOOL") ? "true" : "false", g.m.Ai];
};
g.m.logic_null = function () {
  return ["null", g.m.Ai];
};
g.m.logic_ternary = function (a) {
  var c = U(a, "IF", g.m.jq) || "false",
    d = U(a, "THEN", g.m.jq) || "null";
  a = U(a, "ELSE", g.m.jq) || "null";
  return [c + " ? " + d + " : " + a, g.m.jq];
};
g.m.TI = {};
g.m.controls_repeat_ext = function (a) {
  var c = z(a, "TIMES")
      ? String(Number(E(a, "TIMES")))
      : U(a, "TIMES", g.m.Oj) || "0",
    d = Ie(a, "DO");
  d = Je(d, a);
  a = "";
  var e = P(g.m.ac, "count", g.uc),
    f = c;
  c.match(/^\w+$/) ||
    g.bj(c) ||
    ((f = P(g.m.ac, "repeat_end", g.uc)),
    (a += "var " + f + " = " + c + ";\n"));
  return (
    a +
    ("for (var " +
      e +
      " = 0; " +
      e +
      " < " +
      f +
      "; " +
      e +
      "++) {\n" +
      d +
      "}\n")
  );
};
g.m.controls_repeat = g.m.controls_repeat_ext;
g.m.controls_whileUntil = function (a) {
  var c = "UNTIL" == E(a, "MODE"),
    d = U(a, "BOOL", c ? g.m.pn : g.m.xb) || "false",
    e = Ie(a, "DO");
  e = Je(e, a);
  c && (d = "!" + d);
  return "while (" + d + ") {\n" + e + "}\n";
};
g.m.controls_for = function (a) {
  var c = g.m.ac.De(E(a, "VAR"), g.uc),
    d = U(a, "FROM", g.m.Oj) || "0",
    e = U(a, "TO", g.m.Oj) || "0",
    f = U(a, "BY", g.m.Oj) || "1",
    h = Ie(a, "DO");
  h = Je(h, a);
  if (g.bj(d) && g.bj(e) && g.bj(f)) {
    var k = Number(d) <= Number(e);
    a =
      "for (" + c + " = " + d + "; " + c + (k ? " <= " : " >= ") + e + "; " + c;
    c = Math.abs(Number(f));
    a =
      (1 == c ? a + (k ? "++" : "--") : a + ((k ? " += " : " -= ") + c)) +
      (") {\n" + h + "}\n");
  } else
    (a = ""),
      (k = d),
      d.match(/^\w+$/) ||
        g.bj(d) ||
        ((k = P(g.m.ac, c + "_start", g.uc)),
        (a += "var " + k + " = " + d + ";\n")),
      (d = e),
      e.match(/^\w+$/) ||
        g.bj(e) ||
        ((d = P(g.m.ac, c + "_end", g.uc)),
        (a += "var " + d + " = " + e + ";\n")),
      (e = P(g.m.ac, c + "_inc", g.uc)),
      (a += "var " + e + " = "),
      (a = g.bj(f)
        ? a + (Math.abs(f) + ";\n")
        : a + ("Math.abs(" + f + ");\n")),
      (a =
        a +
        ("if (" + k + " > " + d + ") {\n") +
        (g.m.Bd + e + " = -" + e + ";\n")),
      (a += "}\n"),
      (a +=
        "for (" +
        c +
        " = " +
        k +
        "; " +
        e +
        " >= 0 ? " +
        c +
        " <= " +
        d +
        " : " +
        c +
        " >= " +
        d +
        "; " +
        c +
        " += " +
        e +
        ") {\n" +
        h +
        "}\n");
  return a;
};
g.m.controls_forEach = function (a) {
  var c = g.m.ac.De(E(a, "VAR"), g.uc),
    d = U(a, "LIST", g.m.Oj) || "[]",
    e = Ie(a, "DO");
  e = Je(e, a);
  a = "";
  var f = d;
  d.match(/^\w+$/) ||
    ((f = P(g.m.ac, c + "_list", g.uc)), (a += "var " + f + " = " + d + ";\n"));
  d = P(g.m.ac, c + "_index", g.uc);
  e = g.m.Bd + c + " = " + f + "[" + d + "];\n" + e;
  return a + ("for (var " + d + " in " + f + ") {\n" + e + "}\n");
};
g.m.controls_flow_statements = function (a) {
  var c = "";
  g.m.ae && (c += T(g.m.ae, a));
  g.m.cd && (c += T(g.m.cd, a));
  if (g.m.ae) {
    var d = g.xa.Ze.Rp.CB(a);
    d && !d.zj && (c += T(g.m.ae, d));
  }
  switch (E(a, "FLOW")) {
    case "BREAK":
      return c + "break;\n";
    case "CONTINUE":
      return c + "continue;\n";
  }
  throw Error("Unknown flow statement.");
};
g.m.Vd = {};
g.m.math_number = function (a) {
  a = Number(E(a, "NUM"));
  return [a, 0 <= a ? g.m.Ai : g.m.rn];
};
g.m.math_arithmetic = function (a) {
  var c = {
      ADD: [" + ", g.m.Nj],
      MINUS: [" - ", g.m.Bl],
      MULTIPLY: [" * ", g.m.Ft],
      DIVIDE: [" / ", g.m.on],
      POWER: [null, g.m.xb],
    }[E(a, "OP")],
    d = c[0];
  c = c[1];
  var e = U(a, "A", c) || "0";
  a = U(a, "B", c) || "0";
  return d ? [e + d + a, c] : ["Math.pow(" + e + ", " + a + ")", g.m.Sb];
};
g.m.math_single = function (a) {
  var c = E(a, "OP");
  if ("NEG" == c)
    return (
      (a = U(a, "NUM", g.m.rn) || "0"),
      "-" == a[0] && (a = " " + a),
      ["-" + a, g.m.rn]
    );
  a =
    "SIN" == c || "COS" == c || "TAN" == c
      ? U(a, "NUM", g.m.on) || "0"
      : U(a, "NUM", g.m.xb) || "0";
  switch (c) {
    case "ABS":
      var d = "Math.abs(" + a + ")";
      break;
    case "ROOT":
      d = "Math.sqrt(" + a + ")";
      break;
    case "LN":
      d = "Math.log(" + a + ")";
      break;
    case "EXP":
      d = "Math.exp(" + a + ")";
      break;
    case "POW10":
      d = "Math.pow(10," + a + ")";
      break;
    case "ROUND":
      d = "Math.round(" + a + ")";
      break;
    case "ROUNDUP":
      d = "Math.ceil(" + a + ")";
      break;
    case "ROUNDDOWN":
      d = "Math.floor(" + a + ")";
      break;
    case "SIN":
      d = "Math.sin(" + a + " / 180 * Math.PI)";
      break;
    case "COS":
      d = "Math.cos(" + a + " / 180 * Math.PI)";
      break;
    case "TAN":
      d = "Math.tan(" + a + " / 180 * Math.PI)";
  }
  if (d) return [d, g.m.Sb];
  switch (c) {
    case "LOG10":
      d = "Math.log(" + a + ") / Math.log(10)";
      break;
    case "ASIN":
      d = "Math.asin(" + a + ") / Math.PI * 180";
      break;
    case "ACOS":
      d = "Math.acos(" + a + ") / Math.PI * 180";
      break;
    case "ATAN":
      d = "Math.atan(" + a + ") / Math.PI * 180";
      break;
    default:
      throw Error("Unknown math operator: " + c);
  }
  return [d, g.m.on];
};
g.m.math_constant = function (a) {
  return {
    PI: ["Math.PI", g.m.ic],
    E: ["Math.E", g.m.ic],
    GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", g.m.on],
    SQRT2: ["Math.SQRT2", g.m.ic],
    SQRT1_2: ["Math.SQRT1_2", g.m.ic],
    INFINITY: ["Infinity", g.m.Ai],
  }[E(a, "CONSTANT")];
};
g.m.math_number_property = function (a) {
  var c = U(a, "NUMBER_TO_CHECK", g.m.qn) || "0",
    d = E(a, "PROPERTY");
  if ("PRIME" == d) {
    var e =
      Le("mathIsPrime", [
        "function " + g.m.Ue + "(n) {",
        "  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods",
        "  if (n == 2 || n == 3) {",
        "    return true;",
        "  }",
        "  // False if n is NaN, negative, is 1, or not whole.",
        "  // And false if n is divisible by 2 or 3.",
        "  if (isNaN(n) || n <= 1 || n % 1 != 0 || n % 2 == 0 || n % 3 == 0) {",
        "    return false;",
        "  }",
        "  // Check all the numbers of form 6k +/- 1, up to sqrt(n).",
        "  for (var x = 6; x <= Math.sqrt(n) + 1; x += 6) {",
        "    if (n % (x - 1) == 0 || n % (x + 1) == 0) {",
        "      return false;",
        "    }",
        "  }",
        "  return true;",
        "}",
      ]) +
      "(" +
      c +
      ")";
    return [e, g.m.Sb];
  }
  switch (d) {
    case "EVEN":
      e = c + " % 2 == 0";
      break;
    case "ODD":
      e = c + " % 2 == 1";
      break;
    case "WHOLE":
      e = c + " % 1 == 0";
      break;
    case "POSITIVE":
      e = c + " > 0";
      break;
    case "NEGATIVE":
      e = c + " < 0";
      break;
    case "DIVISIBLE_BY":
      (a = U(a, "DIVISOR", g.m.qn) || "0"), (e = c + " % " + a + " == 0");
  }
  return [e, g.m.jz];
};
g.m.math_change = function (a) {
  var c = U(a, "DELTA", g.m.Nj) || "0";
  a = g.m.ac.De(E(a, "VAR"), g.uc);
  return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + c + ";\n";
};
g.m.math_round = g.m.math_single;
g.m.math_trig = g.m.math_single;
g.m.math_on_list = function (a) {
  var c = E(a, "OP");
  switch (c) {
    case "SUM":
      a = U(a, "LIST", g.m.ic) || "[]";
      a += ".reduce(function(x, y) {return x + y;})";
      break;
    case "MIN":
      a = U(a, "LIST", g.m.xb) || "[]";
      a = "Math.min.apply(null, " + a + ")";
      break;
    case "MAX":
      a = U(a, "LIST", g.m.xb) || "[]";
      a = "Math.max.apply(null, " + a + ")";
      break;
    case "AVERAGE":
      c = Le("mathMean", [
        "function " + g.m.Ue + "(myList) {",
        "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;",
        "}",
      ]);
      a = U(a, "LIST", g.m.xb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MEDIAN":
      c = Le("mathMedian", [
        "function " + g.m.Ue + "(myList) {",
        "  var localList = myList.filter(function (x) {return typeof x == 'number';});",
        "  if (!localList.length) return null;",
        "  localList.sort(function(a, b) {return b - a;});",
        "  if (localList.length % 2 == 0) {",
        "    return (localList[localList.length / 2 - 1] + localList[localList.length / 2]) / 2;",
        "  } else {",
        "    return localList[(localList.length - 1) / 2];",
        "  }",
        "}",
      ]);
      a = U(a, "LIST", g.m.xb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MODE":
      c = Le("mathModes", [
        "function " + g.m.Ue + "(values) {",
        "  var modes = [];",
        "  var counts = [];",
        "  var maxCount = 0;",
        "  for (var i = 0; i < values.length; i++) {",
        "    var value = values[i];",
        "    var found = false;",
        "    var thisCount;",
        "    for (var j = 0; j < counts.length; j++) {",
        "      if (counts[j][0] === value) {",
        "        thisCount = ++counts[j][1];",
        "        found = true;",
        "        break;",
        "      }",
        "    }",
        "    if (!found) {",
        "      counts.push([value, 1]);",
        "      thisCount = 1;",
        "    }",
        "    maxCount = Math.max(thisCount, maxCount);",
        "  }",
        "  for (var j = 0; j < counts.length; j++) {",
        "    if (counts[j][1] == maxCount) {",
        "        modes.push(counts[j][0]);",
        "    }",
        "  }",
        "  return modes;",
        "}",
      ]);
      a = U(a, "LIST", g.m.xb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "STD_DEV":
      c = Le("mathStandardDeviation", [
        "function " + g.m.Ue + "(numbers) {",
        "  var n = numbers.length;",
        "  if (!n) return null;",
        "  var mean = numbers.reduce(function(x, y) {return x + y;}) / n;",
        "  var variance = 0;",
        "  for (var j = 0; j < n; j++) {",
        "    variance += Math.pow(numbers[j] - mean, 2);",
        "  }",
        "  variance = variance / n;",
        "  return Math.sqrt(variance);",
        "}",
      ]);
      a = U(a, "LIST", g.m.xb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "RANDOM":
      c = Le("mathRandomList", [
        "function " + g.m.Ue + "(list) {",
        "  var x = Math.floor(Math.random() * list.length);",
        "  return list[x];",
        "}",
      ]);
      a = U(a, "LIST", g.m.xb) || "[]";
      a = c + "(" + a + ")";
      break;
    default:
      throw Error("Unknown operator: " + c);
  }
  return [a, g.m.Sb];
};
g.m.math_modulo = function (a) {
  var c = U(a, "DIVIDEND", g.m.qn) || "0";
  a = U(a, "DIVISOR", g.m.qn) || "0";
  return [c + " % " + a, g.m.qn];
};
g.m.math_constrain = function (a) {
  var c = U(a, "VALUE", g.m.xb) || "0",
    d = U(a, "LOW", g.m.xb) || "0";
  a = U(a, "HIGH", g.m.xb) || "Infinity";
  return ["Math.min(Math.max(" + c + ", " + d + "), " + a + ")", g.m.Sb];
};
g.m.math_random_int = function (a) {
  var c = U(a, "FROM", g.m.xb) || "0";
  a = U(a, "TO", g.m.xb) || "0";
  return [
    Le("mathRandomInt", [
      "function " + g.m.Ue + "(a, b) {",
      "  if (a > b) {",
      "    // Swap a and b to ensure a is smaller.",
      "    var c = a;",
      "    a = b;",
      "    b = c;",
      "  }",
      "  return Math.floor(Math.random() * (b - a + 1) + a);",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      a +
      ")",
    g.m.Sb,
  ];
};
g.m.math_random_float = function () {
  return ["Math.random()", g.m.Sb];
};
g.m.math_atan2 = function (a) {
  var c = U(a, "X", g.m.xb) || "0";
  return [
    "Math.atan2(" + (U(a, "Y", g.m.xb) || "0") + ", " + c + ") / Math.PI * 180",
    g.m.on,
  ];
};
g.m.KJ = {};
g.m.procedures_defreturn = function (a) {
  var c = g.m.ac.De(E(a, "NAME"), g.tn),
    d = "";
  g.m.ae && (d += T(g.m.ae, a));
  g.m.cd && (d += T(g.m.cd, a));
  d && (d = Ge(d, g.m.Bd));
  var e = "";
  g.m.eq && (e = Ge(T(g.m.eq, a), g.m.Bd));
  var f = Ie(a, "STACK"),
    h = U(a, "RETURN", g.m.xb) || "",
    k = "";
  f && h && (k = d);
  h && (h = g.m.Bd + "return " + h + ";\n");
  for (var l = [], m = a.Ph(), n = 0; n < m.length; n++)
    l[n] = g.m.ac.De(m[n], g.uc);
  d = "function " + c + "(" + l.join(", ") + ") {\n" + d + e + f + k + h + "}";
  d = g.m.ts(a, d);
  g.m.Li["%" + c] = d;
  return null;
};
g.m.procedures_defnoreturn = g.m.procedures_defreturn;
g.m.procedures_callreturn = function (a) {
  for (
    var c = g.m.ac.De(E(a, "NAME"), g.tn), d = [], e = a.Ph(), f = 0;
    f < e.length;
    f++
  )
    d[f] = U(a, "ARG" + f, g.m.xb) || "null";
  return [c + "(" + d.join(", ") + ")", g.m.Sb];
};
g.m.procedures_callnoreturn = function (a) {
  return g.m.procedures_callreturn(a)[0] + ";\n";
};
g.m.procedures_ifreturn = function (a) {
  var c = "if (" + (U(a, "CONDITION", g.m.xb) || "false") + ") {\n";
  g.m.cd && (c += Ge(T(g.m.cd, a), g.m.Bd));
  a.Ti
    ? ((a = U(a, "VALUE", g.m.xb) || "null"),
      (c += g.m.Bd + "return " + a + ";\n"))
    : (c += g.m.Bd + "return;\n");
  return c + "}\n";
};
g.m.dL = {};
g.m.variables_get = function (a) {
  return [g.m.ac.De(E(a, "VAR"), g.uc), g.m.Ai];
};
g.m.variables_set = function (a) {
  var c = U(a, "VALUE", g.m.Oj) || "0";
  return g.m.ac.De(E(a, "VAR"), g.uc) + " = " + c + ";\n";
};
var Me;
g.aa.music_pitch = {
  Y: function () {
    L(N(this), new ve("7"), "PITCH");
    this.zf(!0, "Number");
    this.$f(g.i.MATH_HUE);
    this.Qb(R("Music_pitchTooltip"));
  },
};
g.m.music_pitch = function (a) {
  return [Number(E(a, "PITCH")), g.m.Ai];
};
g.aa.music_note = {
  Y: function () {
    var a = [
      [{ src: "music/note1.png", width: 9, height: 19, alt: "whole" }, "1"],
      [{ src: "music/note0.5.png", width: 9, height: 19, alt: "half" }, "0.5"],
      [
        { src: "music/note0.25.png", width: 9, height: 19, alt: "quarter" },
        "0.25",
      ],
      [
        { src: "music/note0.125.png", width: 9, height: 19, alt: "eighth" },
        "0.125",
      ],
      [
        { src: "music/note0.0625.png", width: 9, height: 19, alt: "sixteenth" },
        "0.0625",
      ],
    ];
    10 > Q && (a.shift(), a.pop());
    lc(this, {
      message0: R("Music_playNote"),
      args0: [
        { type: "field_dropdown", name: "DURATION", options: a },
        { type: "input_value", name: "PITCH", check: "Number" },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: 160,
      tooltip: R("Music_playNoteTooltip"),
    });
  },
};
g.m.music_note = function (a) {
  var c = U(a, "PITCH", g.m.YF) || "7";
  return (
    "play(" +
    Number(E(a, "DURATION")) +
    ", " +
    c +
    ", 'block_id_" +
    a.id +
    "');\n"
  );
};
g.aa.music_rest_whole = {
  Y: function () {
    lc(this, {
      message0: R("Music_rest"),
      args0: [
        {
          type: "field_image",
          src: "music/rest1.png",
          width: 10,
          height: 20,
          alt: "-",
        },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: 160,
      tooltip: R("Music_restWholeTooltip"),
    });
  },
};
g.m.music_rest_whole = function (a) {
  return "rest(1, 'block_id_" + a.id + "');\n";
};
g.aa.music_rest = {
  Y: function () {
    lc(this, {
      message0: R("Music_rest"),
      args0: [
        {
          type: "field_dropdown",
          name: "DURATION",
          options: [
            [
              { src: "music/rest1.png", width: 10, height: 20, alt: "whole" },
              "1",
            ],
            [
              { src: "music/rest0.5.png", width: 10, height: 20, alt: "half" },
              "0.5",
            ],
            [
              {
                src: "music/rest0.25.png",
                width: 10,
                height: 20,
                alt: "quarter",
              },
              "0.25",
            ],
            [
              {
                src: "music/rest0.125.png",
                width: 10,
                height: 20,
                alt: "eighth",
              },
              "0.125",
            ],
            [
              {
                src: "music/rest0.0625.png",
                width: 10,
                height: 20,
                alt: "sixteenth",
              },
              "0.0625",
            ],
          ],
        },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: 160,
      tooltip: R("Music_restTooltip"),
    });
  },
};
g.m.music_rest = function (a) {
  return "rest(" + Number(E(a, "DURATION")) + ", 'block_id_" + a.id + "');\n";
};
g.aa.music_instrument = {
  Y: function () {
    lc(this, {
      message0: R("Music_setInstrument"),
      args0: [
        {
          type: "field_dropdown",
          name: "INSTRUMENT",
          options: [
            [R("Music_piano"), "piano"],
            [R("Music_trumpet"), "trumpet"],
            [R("Music_banjo"), "banjo"],
            [R("Music_violin"), "violin"],
            [R("Music_guitar"), "guitar"],
            [R("Music_flute"), "flute"],
            [R("Music_drum"), "drum"],
            [R("Music_choir"), "choir"],
          ],
        },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: 160,
      tooltip: R("Music_setInstrumentTooltip"),
    });
  },
};
g.m.music_instrument = function (a) {
  return (
    "setInstrument(" +
    g.m.ZC(E(a, "INSTRUMENT")) +
    ", 'block_id_" +
    a.id +
    "');\n"
  );
};
g.aa.music_start = {
  Y: function () {
    lc(this, {
      message0: R("Music_start"),
      args0: [
        {
          type: "field_image",
          src: "music/play.png",
          width: 17,
          height: 17,
          alt: "\u25b6",
        },
      ],
      message1: "%1",
      args1: [{ type: "input_statement", name: "STACK" }],
      colour: 0,
      tooltip: R("Music_startTooltip"),
    });
  },
};
g.m.music_start = function (a) {
  V++;
  a = Ie(a, "STACK");
  g.m.Li["%start" + V] = "function start" + V + "() {\n" + a + "}\n";
  return null;
};
10 > Q &&
  ((g.aa.procedures_defnoreturn.Y = function () {
    var a = new g.Rc("", g.Ca.lx);
    te(a);
    L(L(L(N(this), g.i.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
    this.$f(g.i.PROCEDURES_HUE);
    this.Qb(g.i.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.Wc = g.i.PROCEDURES_DEFNORETURN_HELPURL;
    this.bb = [];
    this.vc = [];
    this.xj(!0);
    this.bh = null;
  }),
  delete g.aa.procedures_defreturn,
  delete g.aa.procedures_ifreturn);
var Ne = Ne || {};
function Oe(a, c) {
  function d() {}
  d.prototype = c.prototype;
  a.v = c.prototype;
  a.prototype = new d();
  a.prototype.constructor = a;
  a.KN = function (e, f, h) {
    return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2));
  };
}
if (!Pe) {
  var Pe,
    Se = "";
  "undefined" !== typeof navigator &&
    navigator &&
    "string" == typeof navigator.userAgent &&
    (Se = navigator.userAgent);
  var Te = 0 == Se.indexOf("Opera");
  Pe = {
    eO: { dM: "ScriptEngine" in window },
    OM: Te,
    Xe: !Te && -1 != Se.indexOf("MSIE"),
    Vz: !Te && -1 != Se.indexOf("WebKit"),
  };
}
if (!Ue) var Ue = {};
if (!Ve) var Ve = {};
if (!We) var We = {};
if (!Xe) var Xe = {};
if (!Ye) var Ye = {};
if (!Ze) var Ze = {};
var $e = Ne.pE ? { lO: !0 } : {},
  af = Ne.pE ? { mO: !0 } : {};
function bf() {
  throw Error("Do not instantiate directly");
}
bf.prototype.CA = null;
bf.prototype.toString = function () {
  return this.content;
};
function cf(a) {
  if (null != a)
    switch (a.CA) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function df() {
  bf.call(this);
}
Oe(df, bf);
df.prototype.DA = $e;
function W(a) {
  return null != a && a.DA === $e
    ? a
    : ef(String(String(a)).replace(ff, gf), cf(a));
}
var ef = (function (a) {
    function c() {}
    c.prototype = a.prototype;
    return function (d, e) {
      var f = new c();
      f.content = String(d);
      void 0 !== e && (f.CA = e);
      return f;
    };
  })(df),
  hf = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\x0B": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;",
  };
function gf(a) {
  return hf[a];
}
var ff = /[\x00\x22\x26\x27\x3c\x3e]/g;
function jf() {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
}
function kf() {
  var a = id,
    c = Q,
    d = 10,
    e = kd,
    f = "Music",
    h = "",
    k = !0,
    l = !0,
    m = "";
  f =
    '<table width="100%"><tr><td><h1><span id="title">' +
    ((e
      ? '<a href="index.html?lang=' + W(a) + '">'
      : '<a href="./?lang=' + W(a) + '">') +
      "Codekid</a> : " +
      W(f) +
      "</span>");
  if (c) {
    h = "" + (h ? W(h) : "");
    for (var n = " &nbsp; ", q = d + 1, r = 1; r < q; r++) {
      var w = "?lang=" + W(a) + "&level=" + W(r) + (h ? "&" + W(h) : "");
      n +=
        " " +
        (r == c
          ? '<span class="level_number level_done" id="level' +
            W(r) +
            '">' +
            W(r) +
            "</span>"
          : r == d
          ? '<a class="level_number" id="level' +
            W(r) +
            '" href="' +
            W(w) +
            '">' +
            W(r) +
            "</a>"
          : '<a class="level_dot" id="level' +
            W(r) +
            '" href="' +
            W(w) +
            '"></a>');
    }
    d = n;
  } else d = "";
  m = m ? "&nbsp;" + (null != m && m.DA === af ? "zSoyz" : m) : "";
  return (
    '<div style="display: none"><span id="Games_name">Codekid</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Music_playNoteTooltip">Plays one musical note of the specified duration and pitch.</span><span id="Music_playNote">play %1 note %2</span><span id="Music_restTooltip">Waits for the specified duration.</span><span id="Music_restWholeTooltip">Waits for one whole note.</span><span id="Music_rest">rest %1</span><span id="Music_setInstrumentTooltip">Switches to the specified instrument when playing subsequent musical notes.</span><span id="Music_setInstrument">set instrument to %1</span><span id="Music_startTooltip">Executes the blocks inside when the \'Run Program\' button is clicked.</span><span id="Music_start">when %1 clicked</span><span id="Music_pitchTooltip">One note (C4 is 7).</span><span id="Music_firstPart">first part</span><span id="Music_piano">piano</span><span id="Music_trumpet">trumpet</span><span id="Music_banjo">banjo</span><span id="Music_violin">violin</span><span id="Music_guitar">guitar</span><span id="Music_flute">flute</span><span id="Music_drum">drum</span><span id="Music_choir">choir</span><span id="Music_submitDisabled">Run your program until it stops. Then you may submit your music to the gallery.</span></div>' +
    (f +
      d +
      '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' +
      (k
        ? '&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>'
        : "") +
      (l ? '&nbsp;<button id="helpButton">Help</button>' : "") +
      m +
      '</td></tr></table><div id="paddingBox"></div><div id="staveBox"></div><div id="musicBox"><div id="musicContainer"></div></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50">\x3c!-- Slow icon. --\x3e<clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" />\x3c!-- Fast icon. --\x3e<clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>') +
    (10 != c || e
      ? ""
      : '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="music-gallery"><input type="hidden" name="app" value="music"><input type="hidden" name="lang" value="' +
        W(a) +
        '"><button type="submit" title="Open the gallery of music."><img src="common/1x1.gif" class="gallery icon21"> See Gallery</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your music to the gallery."><img src="common/1x1.gif" class="camera icon21"> Submit to Gallery</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Submit your music to the gallery.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="music"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Cancel</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>') +
    ('<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' +
      (10 == c
        ? '<category name="Music"><block type="music_pitch"><field name="PITCH">7</field></block><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block><block type="music_rest"></block><block type="music_instrument"></block><block type="music_start" id="music_start"></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Loops"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_forEach"></block><block type="controls_flow_statements"></block></category><category name="Math"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Lists"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category>'
        : '<category name="Music"><block type="music_note"><field name="DURATION">0.25</field><value name="PITCH"><shadow type="music_pitch"><field name="PITCH">7</field></shadow></value></block>' +
          (6 < c ? '<block type="music_rest_whole"></block>' : "") +
          (5 < c ? '<block type="music_instrument"></block>' : "") +
          (6 < c ? '<block type="music_start" id="music_start"></block>' : "") +
          "</category>" +
          (1 < c
            ? '<category name="Functions" custom="PROCEDURE"></category>'
            : "")) +
      '</xml><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>') +
    (jf() +
      '</div><div id="helpUseFunctions" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better.  Use functions to reduce the amount of repeated code.</div>') +
    jf() +
    '</div><div id="helpUseInstruments" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">The music will sound better if you use a different instrument in each start block.</div>' +
    jf() +
    '</div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' +
    (1 == c
      ? "Compose the first four notes of 'Fr\u00e8re Jacques'.<p>C4 - D4 - E4 - C4</p>"
      : 2 == c
      ? "A 'function' allows you to group blocks together, then run them more than once.<div id=\"sampleHelp2\" class=\"readonly\"></div>Create a function to play the first four notes of 'Fr\u00e8re Jacques'. Run that function twice.  Don't add any new note blocks."
      : 3 == c
      ? 'Create a second function for the next part of \'Fr\u00e8re Jacques\'. The last note is longer.<br><img src="music/note0.5.png" class="sampleNote">'
      : 4 == c
      ? 'Create a third function for the next part of \'Fr\u00e8re Jacques\'. The first four notes are shorter.<br><img src="music/note0.125.png" class="sampleNote">'
      : 5 == c
      ? "Complete the full tune of 'Fr\u00e8re Jacques'."
      : 6 == c
      ? 'This new block lets you change to another instrument.<div id="sampleHelp6" class="readonly"></div>Play your tune with a violin.'
      : 7 == c
      ? 'This new block adds a silent delay.<div id="sampleHelp7" class="readonly"></div>Create a second start block that has two delay blocks, then also plays \'Fr\u00e8re Jacques\'.'
      : 8 == c
      ? "Each start block should play 'Fr\u00e8re Jacques' twice."
      : 9 == c
      ? "Create four start blocks that each play 'Fr\u00e8re Jacques' twice. Add the correct number of delay blocks."
      : 10 == c
      ? "Compose anything you want. You've got a huge number of new blocks you can explore. Have fun!" +
        (e
          ? ""
          : '<br><br>Use the "See Gallery" button to see what other people have composed. If you compose something interesting, use the "Submit to Gallery" button to publish it.')
      : "") +
    "</div>" +
    jf() +
    "</div>"
  );
}
function lf(a) {
  var c = mf;
  this.sF = 23;
  this.vl = 18;
  this.tt = 132;
  this.Sj = 20;
  this.Fb = 0.5;
  this.oA = c;
  this.iu = [];
  g.g.o.M("line", { class: "sliderTrack", x1: 10, y1: 35, x2: 140, y2: 35 }, a);
  this.VK = g.g.o.M(
    "rect",
    {
      style: "opacity: 0",
      x: 10 - this.Sj,
      y: 35 - this.Sj,
      width: 130 + 2 * this.Sj,
      height: 2 * this.Sj,
      rx: this.Sj,
      ry: this.Sj,
    },
    a
  );
  this.eC = g.g.o.M(
    "path",
    { class: "sliderKnob", d: "m 0,0 l -8,8 v 12 h 16 v -12 z" },
    a
  );
  this.aw = g.g.o.M("circle", { style: "opacity: 0", r: this.Sj, cy: 35 }, a);
  for (this.setValue(0.5); a && "svg" != a.nodeName.toLowerCase(); )
    a = a.parentNode;
  this.ab = a;
  nf(this.aw, "mousedown", this, this.dC);
  nf(this.aw, "touchstart", this, this.dC);
  nf(this.VK, "mousedown", this, this.MJ);
  nf(this.ab, "mouseup", null, of);
  nf(this.ab, "touchend", null, of);
  nf(this.ab, "mousemove", null, pf);
  nf(this.ab, "touchmove", null, pf);
  nf(document, "mouseover", null, qf);
}
var rf = null,
  sf = 0,
  tf = 0;
lf.prototype.dC = function (a) {
  if ("touchstart" == a.type) {
    if (1 != a.changedTouches.length) return;
    uf(a);
  }
  rf = this;
  sf = vf(this, a).x;
  tf = 0;
  var c = this.eC.getAttribute("transform");
  c && (c = c.match(/translate\(\s*([-\d.]+)/)) && (tf = Number(c[1]));
  a.preventDefault();
};
function of() {
  rf = null;
}
function qf(a) {
  if (rf) {
    a = a.target;
    do if (a == rf.ab) return;
    while ((a = a.parentNode));
    rf = null;
  }
}
function pf(a) {
  var c = rf;
  if (c) {
    if ("touchmove" == a.type) {
      if (1 != a.changedTouches.length) return;
      uf(a);
    }
    a = vf(c, a).x - sf + tf;
    c.setValue((a - c.vl) / (c.tt - c.vl));
  }
}
lf.prototype.MJ = function (a) {
  if ("touchstart" == a.type) {
    if (1 != a.changedTouches.length) return;
    uf(a);
  }
  a = vf(this, a).x;
  wf(this, (a - this.vl) / (this.tt - this.vl));
};
lf.prototype.getValue = function () {
  return this.Fb;
};
function wf(a, c) {
  function d(h) {
    return function () {
      a.setValue((h * (c - e)) / 9 + e);
    };
  }
  for (; a.iu.length; ) clearTimeout(a.iu.pop());
  for (var e = a.getValue(), f = 0; 10 > f; f++)
    a.iu.push(setTimeout(d(f), (200 * f) / 10));
}
lf.prototype.setValue = function (a) {
  this.Fb = g.g.Vd.Xj(a, 0, 1);
  a = this.vl + (this.tt - this.vl) * this.Fb;
  this.eC.setAttribute("transform", "translate(" + a + "," + this.sF + ")");
  this.aw.setAttribute("cx", a);
  this.oA && this.oA(this.Fb);
};
function vf(a, c) {
  var d = a.ab.createSVGPoint();
  d.x = c.clientX;
  d.y = c.clientY;
  a = a.ab.getScreenCTM().inverse();
  return d.matrixTransform(a);
}
function nf(a, c, d, e) {
  a.addEventListener(
    c,
    function (f) {
      e.apply(d, arguments);
    },
    !1
  );
}
function uf(a) {
  var c = a.changedTouches[0];
  a.clientX = c.clientX;
  a.clientY = c.clientY;
}
var sd = "music",
  xf = 0,
  V = 0,
  yf = 0,
  zf = 0,
  Af = null,
  Bf = [],
  Cf = 0,
  X = 0,
  Y = null,
  Df = !1;
window.addEventListener("load", function () {
  function a() {
    var n = e.offsetTop;
    f.style.top = n + "px";
    h.style.top = n + "px";
    d.style.top = Math.max(10, n - window.pageYOffset) + "px";
    d.style.left = c ? "10px" : "420px";
    d.style.width = window.innerWidth - 440 + "px";
  }
  document.body.innerHTML = kf();
  Wd();
  var c = -1 != hd.indexOf(id),
    d = document.getElementById("blockly"),
    e = document.getElementById("paddingBox"),
    f = document.getElementById("staveBox"),
    h = document.getElementById("musicBox");
  window.addEventListener("scroll", function () {
    a(null);
    g.Mm(C);
  });
  window.addEventListener("resize", a);
  a(null);
  ce({
    disable: !1,
    rtl: c,
    zoom: {
      maxScale: 2,
      controls: !0,
      wheel: !0,
      startScale: 1.03333 - 0.0333333 * Q,
    },
  });
  G(C, g.h.UA);
  G(C, Ef);
  G(C, Ff);
  Ke(
    g.m,
    "play,rest,setInstrument,start0,start1,start2,start3,start4,start5,start6,start7,start8,start9"
  );
  document.getElementById("submitButton") && td("submitButton", Gf);
  var k = document.getElementById("slider");
  Me = new lf(k);
  $d();
  if (6 < Q) {
    k = C.Ib(!1);
    for (var l = 0, m; (m = k[l]); l++) m.Sq = !0;
  }
  Hf();
  If();
  td("runButton", Jf);
  td("resetButton", Kf);
  le();
  me();
  setTimeout(Lf, 1);
  td("helpButton", Mf);
  2 > location.hash.length && !qd(Q) && setTimeout(Mf, 1e3);
});
function Lf() {
  var a = document.createElement("script");
  a.type = "text/javascript";
  a.src = "third-party/SoundJS/soundjs.min.js";
  a.onload = Nf;
  document.head.appendChild(a);
}
function Nf() {
  for (
    var a = "piano trumpet violin drum flute banjo guitar choir".split(" "),
      c = [],
      d = 0;
    d < a.length;
    d++
  )
    for (var e = 0; e < we.length; e++)
      c.push({ src: a[d] + "/" + we[e] + ".mp3", id: a[d] + e });
  createjs.Sound.registerSounds(c, "third-party/soundfonts/");
}
function mf() {
  Cf = 0;
}
function Of(a) {
  yf = a;
  for (var c = document.getElementById("staveBox"), d = 1; d <= a; d++) {
    var e = Pf(d, a),
      f = document.createElement("img");
    f.src = "music/stave.png";
    f.className = "stave";
    f.style.top = Math.round(e) + "px";
    c.appendChild(f);
  }
}
function Pf(a, c) {
  return (a = ((2 * a - 1) / (2 * c)) * 385 - 34.5 + 5);
}
function Qf(a, c, d, e, f) {
  for (; 1 < e; ) Qf(a, c, d, 1, f), (c += 1), --e;
  a = Pf(a, yf);
  a = -1 == d ? Math.round(a + 21) : Math.floor(a + (-4.5 * d + 32));
  c = Math.round(256 * c + 10);
  var h = document.getElementById("musicContainer"),
    k = document.createElement("img"),
    l = -1 == d ? "rest" : "note";
  k.src = "music/" + l + e + ".png";
  k.className = f + " " + l;
  k.style.top = a + "px";
  k.style.left = c + "px";
  -1 != d && (k.title = we[d]);
  h.appendChild(k);
  if (!f) {
    var m = k.cloneNode();
    h.appendChild(m);
    setTimeout(function () {
      m.className = "splash " + l;
    }, 0);
    setTimeout(function () {
      g.g.o.removeNode(m);
    }, 1e3);
  }
  if ("0" == d || "12" == d)
    (d = document.createElement("img")),
      (d.src = "music/black1x1.gif"),
      (d.className = f + (1 == e ? " ledgerLineWide" : " ledgerLine")),
      (d.style.top = a + 32 + "px"),
      (d.style.left = c - 5 + "px"),
      h.appendChild(d);
}
function Mf() {
  var a = document.getElementById("help"),
    c = document.getElementById("helpButton");
  if (2 == Q) {
    var d =
        '<xml><block type="procedures_defnoreturn" x="5" y="10"><field name="NAME">%1</field></block><block type="procedures_callnoreturn" x="5" y="85"><mutation name="%1"></mutation><next><block type="procedures_callnoreturn"><mutation name="%1"></mutation></block></next></block></xml>',
      e = R("Music_firstPart");
    e = e.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    d = d.replace(/%1/g, e);
    ge("sampleHelp2", d);
  } else
    6 == Q
      ? ge(
          "sampleHelp6",
          '<xml><block type="music_instrument" x="5" y="10"></block></xml>'
        )
      : 7 == Q &&
        ge(
          "sampleHelp7",
          '<xml><block type="music_rest_whole" x="5" y="10"></block></xml>'
        );
  S.Tk(a, c, !0, !0, { width: "50%", left: "25%", top: "5em" }, Rf);
  S.zs();
}
function Rf() {
  S.Cs();
}
function Ef(a) {
  var c = document.getElementById("toolbox"),
    d = document.getElementById("music_start");
  if (d) {
    var e = Z ? Z.length : 4,
      f = V;
    if (a instanceof g.h.Te) {
      for (var h = [], k = C.Ib(!1), l = 0, m; (m = k[l]); l++)
        "music_start" != m.type || m.Td() || h.push(m);
      if (e < h.length)
        for (l = 0; (k = a.Qh[l]); l++) {
          m = 0;
          for (var n; (n = h[m]); m++) n.id == k && db(n, !0);
        }
      e <= h.length
        ? (d.setAttribute("disabled", "true"), Xc(C, c), (V = e))
        : (V = h.length);
    } else if (a instanceof g.h.Jf) {
      a = [];
      h = [];
      k = C.Ib(!0);
      for (l = 0; (m = k[l]); l++)
        "music_start" == m.type && (m.isEnabled() ? a : h).push(m);
      for (; e > a.length && h.length; ) (m = h.shift()), db(m, !1), a.push(m);
      e > a.length && (d.setAttribute("disabled", "false"), Xc(C, c));
      V = a.length;
    }
    V != f && Kf();
  }
}
function Ff(a) {
  a.Fr || (Df = !1);
}
function If() {
  clearTimeout(xf);
  for (var a = 0, c; (c = Bf[a]); a++) Sf(c);
  Y = Af = null;
  Cf = X = Bf.length = 0;
  Df = !1;
  document.getElementById("staveBox").innerHTML = "";
  a = document.getElementById("musicContainer");
  a.innerHTML = "";
  zf = 0;
  c = document.createElement("img");
  c.id = "musicContainerWidth";
  c.src = "common/1x1.gif";
  a.appendChild(c);
  if (Z) {
    Of(Z.length);
    for (a = 0; a < Z.length; a++) {
      c = Z[a];
      for (var d = 0, e = 0; e < c.length; e += 2) {
        var f = c[e + 1];
        Qf(a + 1, d, String(c[e]), f, "goal");
        d += f;
      }
    }
    setTimeout(Tf, 0);
  } else Of(V || 1);
}
function Jf(a) {
  if (!ie(a)) {
    a = document.getElementById("runButton");
    var c = document.getElementById("resetButton");
    c.style.minWidth || (c.style.minWidth = a.offsetWidth + "px");
    a.style.display = "none";
    c.style.display = "inline";
    document.getElementById("spinner").style.visibility = "visible";
    Uf();
  }
}
function Kf(a) {
  (a && ie(a)) ||
    ((document.getElementById("runButton").style.display = "inline"),
    (document.getElementById("resetButton").style.display = "none"),
    (document.getElementById("spinner").style.visibility = "hidden"),
    Vc(null),
    If());
}
function Vf(a, c) {
  var d = function (e, f, h) {
    if (Y.qx) {
      for (var k = Infinity, l = 0, m; (m = Bf[l]); l++)
        m.qx && m.Df < k && (k = m.Df);
      for (l = 0; (m = Bf[l]); l++)
        if (k == m.Df) {
          l = Y.Df;
          Y.Df = k;
          m.Df = l;
          break;
        }
      Y.qx = !1;
    }
    Sf(Y);
    Y.Ex = createjs.Sound.play(Y.UB + f);
    Y.hs = 64 * e + X;
    Y.transcript.push(f, e);
    k = !1;
    if (10 > Q) {
      m = Z[Y.Df - 1];
      var n = Y.transcript;
      l = n.length - 2;
      if (m[l] != n[l] || m[l + 1] != n[l + 1]) k = !0;
    }
    Qf(Y.Df, X / 64, String(f), e, k ? "wrong" : "");
    Wf(h);
  };
  a.setProperty(c, "play", a.createNativeFunction(d));
  d = function (e, f) {
    Sf(Y);
    Y.hs = 64 * e + X;
    1 < Y.transcript.length && -1 == Y.transcript[Y.transcript.length - 2]
      ? (Y.transcript[Y.transcript.length - 1] += e)
      : Y.transcript.push(-1, e);
    var h = !1;
    if (10 > Q) {
      var k = Z[Y.Df - 1],
        l = Y.transcript,
        m = l.length - 2;
      if (k[m] != l[m] || k[m + 1] < l[m + 1]) h = !0;
    }
    Qf(Y.Df, X / 64, "-1", e, h ? "wrong" : "");
    Wf(f);
  };
  a.setProperty(c, "rest", a.createNativeFunction(d));
  d = function (e) {
    Y.UB = e;
  };
  a.setProperty(c, "setInstrument", a.createNativeFunction(d));
}
function Uf() {
  if ("Interpreter" in window)
    if ("createjs" in window && createjs.Sound.isReady()) {
      If();
      g.selected && Lb(g.selected);
      V = 0;
      var a = g.m;
      var c = C;
      c ||
        (console.warn(
          "No workspace specified in workspaceToCode call.  Guessing."
        ),
        (c = g.Gg()));
      var d = [];
      a.Y(c);
      c = c.Ib(!0);
      for (var e = 0, f; (f = c[e]); e++) {
        var h = He(a, f);
        Array.isArray(h) && (h = h[0]);
        h &&
          (f.O &&
            ((h = a.fD(h)),
            a.ae && !f.zj && (h = T(a.ae, f) + h),
            a.cd && !f.zj && (h += T(a.cd, f))),
          d.push(h));
      }
      d = d.join("\n");
      d = a.finish(d);
      d = d.replace(/^\s+\n/, "");
      d = d.replace(/\n\s+$/, "\n");
      Vd = a = d = d.replace(/[ \t]+\n/g, "\n");
      Ud = Xd();
      0 == V && Kf();
      Af = new Interpreter(a, Vf);
      for (a = 1; a <= V; a++)
        (d = new Interpreter("")),
          (d.stateStack[0].scope = Af.globalScope),
          d.appendCode("start" + a + "();\n"),
          Bf.push(new Xf(a, d.stateStack));
      setTimeout(Yf, 100);
    } else setTimeout(Uf, 250);
  else setTimeout(Uf, 250);
}
function Yf() {
  var a = (1e3 * (2.5 - 2 * Me.getValue())) / 64;
  Cf || (Cf = Date.now() - X * a);
  for (var c = !0, d = 0, e; (e = Bf[d]); d++)
    if (!e.done && ((c = !1), e.hs <= X))
      a: {
        var f = void 0;
        Y = e;
        Af.stateStack = e.stateStack;
        Af.stateStack = e.stateStack;
        var h = 1e4;
        do {
          try {
            f = Af.step();
          } catch (k) {
            alert(k), (f = !1);
          }
          if (0 == h--) {
            console.warn("Thread " + e.Df + " is running slowly.");
            break a;
          }
          if (e.hs > X) break a;
        } while (f);
        Sf(e);
        e.om && (fe(e.om, !1), (e.om = null));
        e.done = !0;
      }
  c
    ? (Zf() &&
        (window.localStorage && (window.localStorage[sd + Q] = Ud),
        10 > Q && ((V = 0), S.iH())),
      (document.getElementById("spinner").style.visibility = "hidden"),
      Vc(null),
      (Df = !0))
    : (Tf(), X++, (xf = setTimeout(Yf, Cf + X * a - Date.now())));
}
function Sf(a) {
  var c = a.Ex;
  c && (setTimeout(c.stop.bind(c), 100), (a.Ex = null));
}
function Tf() {
  var a = document.getElementById("musicBox"),
    c = document.getElementById("musicContainer"),
    d = document.getElementById("musicContainerWidth"),
    e = 10 > Q ? 200 : 100;
  e = X ? Math.round((X / 64) * 256 + 10 + e) : a.scrollWidth + e;
  for (d.width = e; zf < Math.floor(e / 256); )
    for (zf++, d = 1; d <= yf; d++) {
      var f = Pf(d, yf),
        h = document.createElement("img");
      h.src = "music/black1x1.gif";
      h.className = "barLine";
      h.style.top = f + 18 + "px";
      h.style.left = 256 * zf + 10 - 5 + "px";
      c.appendChild(h);
    }
  a.scrollLeft = 4 * X - 182;
}
function Wf(a) {
  a && (Y.om && fe(Y.om, !1), fe(a, !0), (Y.om = a));
}
var Z = void 0;
function Hf() {
  function a(m) {
    return (c = c.concat(m).concat(m));
  }
  var c = [],
    d = [a([7, 0.25, 8, 0.25, 9, 0.25, 7, 0.25])],
    e = [a([9, 0.25, 10, 0.25, 11, 0.5])],
    f = [a([11, 0.125, 12, 0.125, 11, 0.125, 10, 0.125, 9, 0.25, 7, 0.25])],
    h = [a([7, 0.25, 4, 0.25, 7, 0.5])],
    k = [c],
    l = [c, [-1, 2].concat(c)];
  c = c.concat(c);
  Z = [
    void 0,
    [[7, 0.25, 8, 0.25, 9, 0.25, 7, 0.25]],
    d,
    e,
    f,
    h,
    k,
    l,
    [c, [-1, 2].concat(c)],
    [c, [-1, 2].concat(c), [-1, 4].concat(c), [-1, 6].concat(c)],
    void 0,
  ][Q];
}
function Zf() {
  if (!Z) return !0;
  if (Z.length != Bf.length)
    return (
      console.log("Expected " + Z.length + " voices, found " + Bf.length), !1
    );
  for (var a = 0; a < Z.length; a++)
    if (Bf[a].Df == a + 1 && String(Z[a]) != String(Bf[a].transcript))
      return !1;
  if (6 <= Q) {
    var c = Vd.match(/setInstrument\('\w+'/g) || [],
      d = {};
    for (a = 0; a < c.length; a++) d[c[a]] = !0;
    delete d["setInstrument('piano'"];
    a = Object.keys(d).length;
    if (6 == Q && 1 > a) return !1;
    if (((7 == Q || 8 == Q) && 1 > a) || (9 == Q && 3 > a))
      return (
        console.log("Not enough instruments.  Found: " + a),
        (a = document.getElementById("helpUseInstruments")),
        (c = { width: "30%", left: "35%", top: "12em" }),
        S.Tk(a, null, !1, !0, c, S.Cs),
        S.zs(),
        !1
      );
  }
  c = [void 0, void 0, 16, 23, 38, 47, 47, 53, 55, 71, void 0][Q];
  d = 0;
  var e = D(C);
  a = 0;
  for (var f; (f = e[a]); a++)
    "music_instrument" != f.type && f.isEnabled() && !kc(f) && d++;
  return c && d > c
    ? (console.log("Too many blocks.  Found: " + d + " Max: " + c),
      (a = document.getElementById("helpUseFunctions")),
      (c = { width: "30%", left: "35%", top: "12em" }),
      S.Tk(a, null, !1, !0, c, S.Cs),
      S.zs(),
      !1)
    : !0;
}
function ae(a) {
  return a.replace(/"music_rest_whole"/g, '"music_rest"');
}
function Gf() {
  if (Df && V) {
    var a =
        "data:image/png;base64," +
        [
          void 0,
          "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAACxMAAAsTAQCanBgAAAAHdElNRQfhDAQXCQ8DSgv8AAACEklEQVRo3mP8z0B7wMQwasmoJaOWjFoyasmoJaOWjFpCR0samV3p4JN/IqNxMjIt+UsPS248oIMll3fRI04WvKeDJcfX0yN1TaaHJRd66JFP+n7SwZLnsfTI8dtW09gSRlYGhq/Vn2lrSdACVgaGR620tYQvqp6N4efcczS15DtDdRgzw5sptI74xS4MDAu20zp1zZVl+D+B1pZIb+Fl2LWF1jWjXgwDQz/Nq99KXYZ9p2ltiWwKA8NMmjck/PUY9tDcEvkAhte7aG0Jg6/gt4M0t8SEi+EC7Rt3dgxvaW/Jf4Zf9Gim/qeHJay0t4SRgY32ljxn4KW9JfcZNGluyeefDLI0t2T3Nx4tmlty+hOTO80t2c9gQPNS+PAD1nCaW3LiJUMArS15sZ3JVorWlvyTlMkkSiELBZZIdb3XobolV7afu8bMZRyCaHpJE1tUEws22/NCCkMuOYaI/yQBYn1yqmY3jPntEanhSqQlTRPfURB5xFlSOPU3A60tKUZvvf+j/gDOHIyRAXHqWzIZPay4jUltbRAE3Rh6FH6QloSJ8MlSdAH2Cnaq+4QHXUvwfxIBI+HGGQfaKIrjTlYGqkc8WlJy2k6qHcRYkoTM4Sncy056biQcok8cECGnsvs/GYCYUvhxoSoDAwMDk1bK0v9kAUai1kjcvPCAQVBOSY3cFvPoQoxRS0YtGbVk1JLhbgkATHAP6cDyYR8AAAAASUVORK5CYII=",
          "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAB8klEQVRo3u3aO0/CUBQA4FMjJsaBTg4uxcHEzZLowlLG3on6CwyDM/EXgLMD8AuAXyDbrYvt4uojTg4GBgc10dY4OZg6FHld0tflOJhzN3pP79f7OL20oASAX1aAEEIIIYQQTGTYj6pVlnGrv7TPNl8i6ldlgTdu8/eYGDnknttOgjAJ5ILbD8kiMyLPnNufiaOzINecX6U6IS3yzTkfpL2qdMix8/SVoevpkNfHRUcPGLNdQMyTNcZMDcDGy5MCM1kONU9KzNwHzDzZYCbbAsw82TEZA9Q8MUy2h7yE10su/qa1mwN8hL5IEEIIIYQQQgghhBBCyB8ivWpRUZRi24+JC9KUujH1wWuov42olhF1Wvae9LYb4w74fZyn32oX9cEUAMA/dPEn/sTFX10tYawKSxgu/w5AGzfknwoBliwybLu3AAB6fXSgK+SFZsnlyaA8CVbDdDCEVpzIJmKRxuwLifCk+XIUyCDe3DAsRmKMGMTTYRFSSWfEIMJ0hsjMC+f8eSCFNIXBr4xulJMjNS+QQjxVQDqjKiccMaPpJbl5RyEdwdCmah1nkHSHiEIqKdMh034i5HWtjL/9HrUQ9vi56653s25wkasrPz3nGecjNk9utDHRCSRKzA9nLdf9yOu6VQaZotAfMQghhBBC/jvyA6C+2c6ogwZuAAAAAElFTkSuQmCC",
          "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAAB4ElEQVRo3u2aPVKDUBCAl4ytA7U6k1hZQio7SUorMuMBoicgOQG5AXKC4AGcxMoyuQFJaQWeAGbsXYvEwPuBBxkZR2e3y9t979tfMnlEQ2hfOkAQghCEIASRyonS4vXjSq54Oz0rU9xyK6iSYXPPHe4IKjxBfnNO4PxOvv58cV2iaA65+Qzkiu1gVqKwqPAEIQhBCEIQghCEIAQhCEEIQpA/DcmeHi41TesH2Y/+jmcQ0+Xu8M3ksS1IMMv9T9qBZNPwuJo0gGTDTfuFP5rRADI5mlGVrmwLYBqHOovXOCN+IXkHsBtAkmCZAAAMvP2C2LE2exn0Eq4zADBGnnia9Jo2GuQGPRsREXvCzqi4I8z1Rs/jjpNCJqzHO0Ne/BKnAKAGJOXuxOSQcZFhQCWkU3ccuuxHtzCXy77qOSYEYgkFRkTEeXFJX1XEUSNdYm/sEzPOEV5a6RUsFJBYjPXb64UDAADOnEGwIe4yiwqIL2wxC9rVKhbSK/a2p4LY1eMgSlzpVc1XG3OrWi98rehh4weke68w4FtLX1vKFna5OJQvipAdoK4su0J36cXsRmoG211uijUgGB0o3RphsJPllDglTnzq2wC67UVYV2LXBDAdPy4z0OiPGAQhCEEI8t8hX5wfXfFkGIkcAAAAAElFTkSuQmCC",
          "iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAAAAABVicqIAAACU0lEQVRo3u2aTY7aQBCFnyMWkRLJZjkrs8rWzlwAcwLgBMAJ4AYWJwBOYOYEkBPYXCD2Ohs7J7AjJcomUmXhAf90N+OMbWmkVG2A6nZ/7q56JSijEfq3d2AIQxjy/0AGUu/w93v59B8fBooBXe7/84sATVq7hll32yAOPKdw1R4e5P6vnz4qBh7l/p/fAIBkNnZJbvBVAwq/DyLiwDOEIQxhCEMYwhCGMIQhDGEIQ97iT+ymdgkCwJhNjd4g2eGYAADOxq4vyHZ/a1hlq34g2STqPfDR5xoj6R6STOqL9gCZC/3DUeeQvRAPszUkOUyGmqbNn66OgzBlc3eBl1tR4ew22clbUb6wipnea0W9mMLZdl98CCovJTsabXQSrZrIwXPaiDGayNrQ9SB7yzZiTKQMLCs9c9NftlL8XNFOPxdvdTdy/rHUJ9+BcRFOIR56vqATbi75LjYzlUAuhXjKkC/HIANgONfCvVXKwQ6SIIEzUhCSp3MEAPbSqurkVFxgjFwiori5HCqWlmJko9TPTasH68o1FzZheEZd7YN7qSrIwW4waXVUlJWwLljZcemnJvtYSgAgIoqFopDXrkXZZcVNGGuoIGKi5zedWkXIvSYISRitZ4gnjOjXLHItADAXjU6KiMSUdp8hDuSnle/G91Nqar78dkFEr5SDxFxhqR0pHm3oZ6OrL6iLjaJA6nu7K8Z4f8sws8oI6dVWS6FF6THRqTwwTamFWVLxonoDU59aWaEs001rD7zitQWY011Mrc2b6tDH64qwNP5zDEMYwpBu7S/9DO5PRs/ScgAAAABJRU5ErkJggg==",
        ][V],
      c = document.getElementById("thumbnail").getContext("2d");
    c.globalCompositeOperation = "copy";
    var d = new Image();
    d.onload = function () {
      c.drawImage(d, 0, 0, 200, 200);
    };
    d.src = a;
    document.getElementById("galleryThumb").value = a;
    ne();
  } else alert(R("Music_submitDisabled"));
}
function Xf(a, c) {
  this.Df = a;
  this.stateStack = c;
  this.transcript = [];
  this.UB = "piano";
  this.hs = 0;
  this.Ex = this.om = null;
  this.qx = 10 > Q;
  this.done = !1;
}
