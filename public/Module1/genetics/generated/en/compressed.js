// Automatically generated file.  Do not edit!

"use strict";
var b,
  g = { $l: {}, $y: 40, mz: 125, mE: 5, LE: 10, Od: 28 };
g.YD = g.Od;
g.aE = 8;
g.Qp = 250;
g.at = 10;
g.WD = 30;
g.tF = 750;
g.bG = 100;
g.nE = !0;
g.XE = 0.45;
g.YE = 0.65;
g.Pd = { width: 96, height: 124, url: "sprites.png" };
g.jb = 1;
g.Tf = 2;
g.zb = 3;
g.Uf = 4;
g.qh = 5;
g.Us = -1;
g.Ts = 0;
g.il = 1;
g.tL = 0;
g.uL = 1;
g.rL = 1;
g.sL = 2;
g.Bl = [];
g.Bl[g.jb] = g.Tf;
g.Bl[g.Tf] = g.jb;
g.Bl[g.zb] = g.Uf;
g.Bl[g.Uf] = g.zb;
g.Xj = 0;
g.zn = 1;
g.De = 2;
g.Ml = 3;
g.wy = null;
g.mt = 1;
g.xy = 2;
g.zc = "VARIABLE";
g.rG = "VARIABLE_DYNAMIC";
g.vn = "PROCEDURE";
g.wz = "RENAME_VARIABLE_ID";
g.yy = "DELETE_VARIABLE_ID";
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
g.g.Cb = {};
g.g.Cb.parse = function (a) {
  a = String(a).toLowerCase().trim();
  var c = g.g.Cb.names[a];
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
    ? g.g.Cb.ux(a, c, d)
    : null;
};
g.g.Cb.ux = function (a, c, d) {
  c = (a << 16) | (c << 8) | d;
  return 16 > a
    ? "#" + (16777216 | c).toString(16).substr(1)
    : "#" + c.toString(16);
};
g.g.Cb.KB = function (a) {
  a = g.g.Cb.parse(a);
  if (!a) return [0, 0, 0];
  a = parseInt(a.substr(1), 16);
  return [a >> 16, (a >> 8) & 255, a & 255];
};
g.g.Cb.OB = function (a) {
  var c = g.XE,
    d = 255 * g.YE,
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
  return g.g.Cb.ux(Math.floor(e), Math.floor(f), Math.floor(h));
};
g.g.Cb.qu = function (a, c, d) {
  a = g.g.Cb.parse(a);
  if (!a) return null;
  c = g.g.Cb.parse(c);
  if (!c) return null;
  a = g.g.Cb.KB(a);
  c = g.g.Cb.KB(c);
  return g.g.Cb.ux(
    Math.round(c[0] + d * (a[0] - c[0])),
    Math.round(c[1] + d * (a[1] - c[1])),
    Math.round(c[2] + d * (a[2] - c[2]))
  );
};
g.g.Cb.names = {
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
g.g.X = function (a, c) {
  this.x = a;
  this.y = c;
};
g.g.X.vf = function (a, c) {
  return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1;
};
g.g.X.fv = function (a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
};
g.g.X.JI = function (a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
g.g.X.Wn = function (a, c) {
  return new g.g.X(a.x - c.x, a.y - c.y);
};
g.g.X.sum = function (a, c) {
  return new g.g.X(a.x + c.x, a.y + c.y);
};
g.g.X.prototype.scale = function (a) {
  this.x *= a;
  this.y *= a;
  return this;
};
g.g.X.prototype.translate = function (a, c) {
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
g.g.qb = {};
g.g.qb.startsWith = function (a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.g.qb.Dx = function (a) {
  return a.length
    ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d;
      }).length
    : 0;
};
g.g.qb.UG = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.qb.Dx(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return d;
  return c;
};
g.g.qb.VG = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.qb.Dx(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return d;
  return c;
};
g.g.qb.AD = function (a, c) {
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) a[d] = g.g.qb.ZK(a[d], c);
  return a.join("\n");
};
g.g.qb.ZK = function (a, c) {
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
    a = g.g.qb.BD(d, a, c);
    e = g.g.qb.Wx(d, a, c);
    a = g.g.qb.$K(d, a);
    f++;
  } while (e > h);
  return k;
};
g.g.qb.Wx = function (a, c, d) {
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
g.g.qb.BD = function (a, c, d) {
  for (var e = g.g.qb.Wx(a, c, d), f, h = 0; h < c.length - 1; h++)
    if (c[h] != c[h + 1]) {
      var k = [].concat(c);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var l = g.g.qb.Wx(a, k, d);
      l > e && ((e = l), (f = k));
    }
  return f ? g.g.qb.BD(a, f, d) : c;
};
g.g.qb.$K = function (a, c) {
  for (var d = [], e = 0; e < a.length; e++)
    d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
  return d.join("");
};
g.g.hf = function (a, c) {
  this.width = a;
  this.height = c;
};
g.g.hf.vf = function (a, c) {
  return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1;
};
g.g.style = {};
g.g.style.Sh = function (a) {
  if ("none" != g.g.style.yB(a, "display")) return g.g.style.wB(a);
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
  return new g.g.hf(h, a);
};
g.g.style.wB = function (a) {
  return new g.g.hf(a.offsetWidth, a.offsetHeight);
};
g.g.style.yB = function (a, c) {
  return (
    g.g.style.getComputedStyle(a, c) ||
    g.g.style.OH(a, c) ||
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
g.g.style.OH = function (a, c) {
  return a.currentStyle ? a.currentStyle[c] : null;
};
g.g.style.mk = function (a) {
  var c = new g.g.X(0, 0);
  a = a.getBoundingClientRect();
  var d = document.documentElement;
  d = new g.g.X(
    window.pageXOffset || d.scrollLeft,
    window.pageYOffset || d.scrollTop
  );
  c.x = a.left + d.x;
  c.y = a.top + d.y;
  return c;
};
g.g.style.cI = function () {
  var a = document.body,
    c = document.documentElement;
  return new g.g.X(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop);
};
g.g.style.gO = function (a, c) {
  a.style.display = c ? "" : "none";
};
g.g.style.VN = function (a) {
  return "rtl" == g.g.style.yB(a, "direction");
};
g.g.style.LH = function (a) {
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
g.g.style.oK = function (a, c) {
  a = g.g.style.QH(a, c);
  c.scrollLeft = a.x;
  c.scrollTop = a.y;
};
g.g.style.QH = function (a, c) {
  var d = g.g.style.mk(a),
    e = g.g.style.mk(c),
    f = g.g.style.LH(c),
    h = d.x - e.x - f.left;
  d = d.y - e.y - f.top;
  a = g.g.style.wB(a);
  e = c.clientHeight - a.height;
  f = c.scrollLeft;
  var k = c.scrollTop;
  f += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
  k += Math.min(d, Math.max(d - e, 0));
  return new g.g.X(f, k);
};
g.g.userAgent = {};
(function (a) {
  function c(e) {
    return -1 != d.indexOf(e.toUpperCase());
  }
  g.g.userAgent.raw = a;
  var d = g.g.userAgent.raw.toUpperCase();
  g.g.userAgent.df = c("Trident") || c("MSIE");
  g.g.userAgent.Oj = c("Edge");
  g.g.userAgent.hF = c("JavaFX");
  g.g.userAgent.iL = (c("Chrome") || c("CriOS")) && !g.g.userAgent.Oj;
  g.g.userAgent.Wz = c("WebKit") && !g.g.userAgent.Oj;
  g.g.userAgent.RE =
    c("Gecko") && !g.g.userAgent.Wz && !g.g.userAgent.df && !g.g.userAgent.Oj;
  g.g.userAgent.Xm = c("Android");
  g.g.userAgent.tl = c("iPad");
  g.g.userAgent.Xy = c("iPod");
  g.g.userAgent.Wy = c("iPhone") && !g.g.userAgent.tl && !g.g.userAgent.Xy;
  g.g.userAgent.wF = c("Macintosh");
  g.g.userAgent.iG =
    g.g.userAgent.tl || (g.g.userAgent.Xm && !c("Mobile")) || c("Silk");
  g.g.userAgent.FF =
    !g.g.userAgent.iG &&
    (g.g.userAgent.Xy || g.g.userAgent.Wy || g.g.userAgent.Xm || c("IEMobile"));
})((g.g.global.navigator && g.g.global.navigator.userAgent) || "");
g.g.aJ = function (a) {
  a.preventDefault();
  a.stopPropagation();
};
g.g.Jr = function (a) {
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
    (a.target.dataset && "true" == a.target.dataset.XN)
  );
};
g.g.yf = function (a) {
  var c = new g.g.X(0, 0),
    d = a.getAttribute("x");
  d && (c.x = parseInt(d, 10));
  if ((d = a.getAttribute("y"))) c.y = parseInt(d, 10);
  if ((d = (d = a.getAttribute("transform")) && d.match(g.g.yf.tG)))
    (c.x += Number(d[1])), d[3] && (c.y += Number(d[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    (a = a.match(g.g.yf.uG)) &&
    ((c.x += Number(a[1])), a[3] && (c.y += Number(a[3])));
  return c;
};
g.g.oo = function (a) {
  for (var c = 0, d = 0; a; ) {
    var e = g.g.yf(a);
    c += e.x;
    d += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new g.g.X(c, d);
};
g.g.yf.tG = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
g.g.yf.uG = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
g.g.Fk = function (a) {
  return a.ctrlKey && g.g.userAgent.wF ? !0 : 2 == a.button;
};
g.g.Po = function (a, c, d) {
  var e = c.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  d || (d = c.getScreenCTM().inverse());
  return e.matrixTransform(d);
};
g.g.vB = function (a) {
  switch (a.deltaMode) {
    default:
      return { x: a.deltaX, y: a.deltaY };
    case 1:
      return { x: a.deltaX * g.$y, y: a.deltaY * g.$y };
    case 2:
      return { x: a.deltaX * g.mz, y: a.deltaY * g.mz };
  }
};
g.g.IK = function (a) {
  return g.g.Mx(a, !0);
};
g.g.xe = function (a) {
  if ("string" != typeof a) return a;
  a = g.g.Mx(a, !1);
  return a.length ? String(a[0]) : "";
};
g.g.rA = function (a) {
  for (var c = g.i, d = a.match(/%{BKY_[A-Z]\w*}/gi), e = 0; e < d.length; e++)
    void 0 == c[d[e].toUpperCase().slice(6, -1)] &&
      console.warn("No message string for " + d[e] + " in " + a);
};
g.g.Mx = function (a, c) {
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
                (l = g.g.qb.startsWith(l, "BKY_") ? l.substring(4) : null) &&
                l in g.i
                  ? ((f = g.i[l]),
                    "string" == typeof f
                      ? Array.prototype.push.apply(d, g.g.Mx(f, c))
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
g.g.Qh = function () {
  for (var a = g.g.Qh.bD.length, c = [], d = 0; 20 > d; d++)
    c[d] = g.g.Qh.bD.charAt(Math.random() * a);
  return c.join("");
};
g.g.Qh.bD =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.zk = function () {
  if (void 0 !== g.g.zk.Bu) return g.g.zk.Bu;
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
  g.g.zk.Bu = "none" !== c;
  return g.g.zk.Bu;
};
g.g.XC = function (a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" == document.readyState) a();
  else
    var c = setInterval(function () {
      "complete" == document.readyState && (clearInterval(c), a());
    }, 10);
};
g.g.bI = function () {
  var a = g.g.style.cI();
  return new g.g.Rect(
    a.y,
    document.documentElement.clientHeight + a.y,
    a.x,
    document.documentElement.clientWidth + a.x
  );
};
g.g.Hq = function (a, c) {
  c = a.indexOf(c);
  if (-1 == c) return !1;
  a.splice(c, 1);
  return !0;
};
g.g.VH = function () {
  var a = document.documentElement,
    c = window;
  return g.g.userAgent.df && c.pageYOffset != a.scrollTop
    ? new g.g.X(a.scrollLeft, a.scrollTop)
    : new g.g.X(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop);
};
g.g.Bv = function (a, c) {
  var d = Object.create(null),
    e = q(a, !0);
  c && (a = t(a)) && ((a = e.indexOf(a)), e.splice(a, e.length - a));
  for (a = 0; (c = e[a]); a++) d[c.type] ? d[c.type]++ : (d[c.type] = 1);
  return d;
};
g.g.nK = function (a, c) {
  var d = c.x;
  c = c.y;
  var e = aa(a).getBoundingClientRect();
  d = new g.g.X(d - e.left, c - e.top);
  c = g.g.oo(a.xb);
  return g.g.X.Wn(d, c).scale(1 / a.scale);
};
g.g.ls = function (a) {
  var c = "string" == typeof a ? g.g.xe(a) : a,
    d = Number(c);
  if (!isNaN(d) && 0 <= d && 360 >= d) return { pI: d, uo: g.g.Cb.OB(d) };
  if ((d = g.g.Cb.parse(c))) return { pI: null, uo: d };
  d = 'Invalid colour: "' + c + '"';
  a != c && (d += ' (from "' + a + '")');
  throw Error(d);
};
g.Touch = {};
g.Touch.Jz =
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
g.Touch.Bp = null;
g.Touch.vg = {};
g.g.global.PointerEvent
  ? (g.Touch.vg = {
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
  : g.Touch.Jz &&
    (g.Touch.vg = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"],
    });
g.Nr = 0;
g.HI = function (a, c) {
  g.kj();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (g.Nr = setTimeout(function () {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      c && ba(c, a);
    }, g.tF));
};
g.kj = function () {
  g.Nr && (clearTimeout(g.Nr), (g.Nr = 0));
};
g.Touch.ak = function () {
  g.Touch.Bp = null;
};
g.Touch.Fx = function (a) {
  return !g.Touch.zI(a) || g.Touch.QG(a);
};
g.Touch.Ar = function (a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 !== a.changedTouches[0].identifier &&
      null !== a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
g.Touch.QG = function (a) {
  var c = g.Touch.Ar(a);
  return void 0 !== g.Touch.Bp && null !== g.Touch.Bp
    ? g.Touch.Bp == c
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((g.Touch.Bp = c), !0)
    : !1;
};
g.Touch.qK = function (a) {
  if (g.g.qb.startsWith(a.type, "touch")) {
    var c = a.changedTouches[0];
    a.clientX = c.clientX;
    a.clientY = c.clientY;
  }
};
g.Touch.zI = function (a) {
  return (
    g.g.qb.startsWith(a.type, "touch") ||
    g.g.qb.startsWith(a.type, "mouse") ||
    g.g.qb.startsWith(a.type, "pointer")
  );
};
g.Touch.Lr = function (a) {
  return (
    g.g.qb.startsWith(a.type, "touch") || g.g.qb.startsWith(a.type, "pointer")
  );
};
g.Touch.zK = function (a) {
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
  this.FK = a;
};
g.g.G.prototype.toString = function () {
  return this.FK;
};
g.g.G.Vs = new g.g.G("animate");
g.g.G.dt = new g.g.G("circle");
g.g.G.Zm = new g.g.G("clipPath");
g.g.G.vy = new g.g.G("defs");
g.g.G.qt = new g.g.G("feComposite");
g.g.G.yE = new g.g.G("feComponentTransfer");
g.g.G.zE = new g.g.G("feFlood");
g.g.G.AE = new g.g.G("feFuncA");
g.g.G.BE = new g.g.G("feGaussianBlur");
g.g.G.CE = new g.g.G("fePointLight");
g.g.G.DE = new g.g.G("feSpecularLighting");
g.g.G.Hy = new g.g.G("filter");
g.g.G.ME = new g.g.G("foreignObject");
g.g.G.xc = new g.g.G("g");
g.g.G.Rj = new g.g.G("image");
g.g.G.hn = new g.g.G("line");
g.g.G.ne = new g.g.G("path");
g.g.G.nz = new g.g.G("pattern");
g.g.G.UF = new g.g.G("polygon");
g.g.G.Dc = new g.g.G("rect");
g.g.G.Wj = new g.g.G("svg");
g.g.G.Yt = new g.g.G("text");
g.g.G.Lz = new g.g.G("tspan");
g.g.o = {};
g.g.o.wq = "http://www.w3.org/2000/svg";
g.g.o.rl = "http://www.w3.org/1999/xhtml";
g.g.o.Yf = "http://www.w3.org/1999/xlink";
g.g.o.Gi = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  COMMENT_NODE: 8,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
};
g.g.o.$f = null;
g.g.o.yu = 0;
g.g.o.Oq = null;
g.g.o.M = function (a, c, d) {
  a = document.createElementNS(g.g.o.wq, String(a));
  for (var e in c) a.setAttribute(e, c[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  d && d.appendChild(a);
  return a;
};
g.g.o.Fa = function (a, c) {
  var d = a.getAttribute("class") || "";
  -1 == (" " + d + " ").indexOf(" " + c + " ") &&
    (d && (d += " "), a.setAttribute("class", d + c));
};
g.g.o.UC = function (a, c) {
  c = c.split(" ");
  for (var d = 0; d < c.length; d++) g.g.o.Vb(a, c[d]);
};
g.g.o.Vb = function (a, c) {
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
g.g.o.to = function (a, c) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ");
};
g.g.o.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
g.g.o.yk = function (a, c) {
  var d = c.nextSibling;
  c = c.parentNode;
  if (!c) throw Error("Reference node has no parent.");
  d ? c.insertBefore(a, d) : c.appendChild(a);
};
g.g.o.containsNode = function (a, c) {
  return !!(
    a.compareDocumentPosition(c) & g.g.o.Gi.DOCUMENT_POSITION_CONTAINED_BY
  );
};
g.g.o.jp = function (a, c) {
  a.style.transform = c;
  a.style["-webkit-transform"] = c;
};
g.g.o.tp = function () {
  g.g.o.yu++;
  g.g.o.$f || (g.g.o.$f = {});
};
g.g.o.up = function () {
  g.g.o.yu--;
  g.g.o.yu || (g.g.o.$f = null);
};
g.g.o.ON = function (a) {
  var c = a.textContent + "\n" + a.className.baseVal,
    d;
  if (g.g.o.$f && (d = g.g.o.$f[c])) return d;
  try {
    d =
      g.g.userAgent.df || g.g.userAgent.Oj
        ? a.getBBox().width
        : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  g.g.o.$f && (g.g.o.$f[c] = d);
  return d;
};
g.g.o.Gv = function (a, c, d, e) {
  return g.g.o.pB(a, c + "pt", d, e);
};
g.g.o.pB = function (a, c, d, e) {
  var f = a.textContent;
  a = f + "\n" + a.className.baseVal;
  var h;
  if (g.g.o.$f && (h = g.g.o.$f[a])) return h;
  g.g.o.Oq ||
    ((h = document.createElement("canvas")),
    (h.className = "blocklyComputeCanvas"),
    document.body.appendChild(h),
    (g.g.o.Oq = h.getContext("2d")));
  g.g.o.Oq.font = d + " " + c + " " + e;
  h = g.g.o.Oq.measureText(f).width;
  g.g.o.$f && (g.g.o.$f[a] = h);
  return h;
};
g.g.o.hC = function (a, c, d, e) {
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
      (d.lf = a.offsetTop - f.offsetTop),
      (c.style.alignItems = "flex-end"),
      (d.height = a.offsetTop - f.offsetTop);
  } finally {
    document.body.removeChild(c);
  }
  return d;
};
g.g.kM = function () {};
g.xn = function (a) {
  this.s = a;
  this.Af = new g.Ua(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.Nf = new g.Ua(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.Qn = g.g.o.M(
    g.g.G.Dc,
    { height: g.Ua.Qc, width: g.Ua.Qc, class: "blocklyScrollbarBackground" },
    null
  );
  g.g.o.yk(this.Qn, a.kg);
  this.ac = null;
};
g.xn.prototype.I = function () {
  g.g.o.removeNode(this.Qn);
  this.ac = this.s = this.Qn = null;
  this.Af.I();
  this.Af = null;
  this.Nf.I();
  this.Nf = null;
};
g.xn.prototype.resize = function () {
  var a = this.s.Yc();
  if (a) {
    var c = !1,
      d = !1;
    this.ac &&
    this.ac.Hb == a.Hb &&
    this.ac.Qb == a.Qb &&
    this.ac.Wc == a.Wc &&
    this.ac.Mc == a.Mc
      ? ((this.ac &&
          this.ac.rf == a.rf &&
          this.ac.Wb == a.Wb &&
          this.ac.jd == a.jd) ||
          (c = !0),
        (this.ac &&
          this.ac.Td == a.Td &&
          this.ac.ec == a.ec &&
          this.ac.Xc == a.Xc) ||
          (d = !0))
      : (d = c = !0);
    if (c || d) {
      try {
        g.h.disable(), c && this.Af.resize(a), d && this.Nf.resize(a);
      } finally {
        g.h.enable();
      }
      ca(this.s);
    }
    (this.ac && this.ac.Hb == a.Hb && this.ac.Mc == a.Mc) ||
      this.Qn.setAttribute("x", this.Nf.position.x);
    (this.ac && this.ac.Qb == a.Qb && this.ac.Wc == a.Wc) ||
      this.Qn.setAttribute("y", this.Af.position.y);
    this.ac = a;
  }
};
g.xn.prototype.set = function (a, c) {
  var d = {};
  a *= this.Af.ratio;
  c *= this.Nf.ratio;
  var e = this.Nf.Jf,
    f = a / this.Af.Jf;
  d.x = isNaN(f) ? 0 : f;
  e = c / e;
  d.y = isNaN(e) ? 0 : e;
  this.s.lp(d);
  da(this.Af, a);
  da(this.Nf, c);
};
g.Ua = function (a, c, d, e) {
  this.s = a;
  this.Am = d || !1;
  this.tk = c;
  this.ratio = this.ac = null;
  this.Ke(e);
  this.position = new g.g.X(0, 0);
  a = g.Ua.Qc;
  c
    ? (this.rd.setAttribute("height", a),
      this.Zg.setAttribute("height", a),
      this.ye.setAttribute("height", a - 5),
      this.ye.setAttribute("y", 2.5),
      (this.Ho = "width"),
      (this.JC = "x"))
    : (this.rd.setAttribute("width", a),
      this.Zg.setAttribute("width", a),
      this.ye.setAttribute("width", a - 5),
      this.ye.setAttribute("x", 2.5),
      (this.Ho = "height"),
      (this.JC = "y"));
  this.DC = g.ya(this.rd, "mousedown", this, this.kJ);
  this.EC = g.ya(this.ye, "mousedown", this, this.lJ);
};
b = g.Ua.prototype;
b.Tw = new g.g.X(0, 0);
b.eD = 0;
b.Jf = 0;
b.Xi = 0;
b.qo = 0;
b.Zh = !0;
b.ck = !0;
g.Ua.Qc = 15;
g.Touch.Jz && (g.Ua.Qc = 25);
g.Ua.KI = function (a, c) {
  return a &&
    c &&
    a.Hb == c.Hb &&
    a.Qb == c.Qb &&
    a.Wb == c.Wb &&
    a.ec == c.ec &&
    a.Wc == c.Wc &&
    a.Mc == c.Mc &&
    a.rf == c.rf &&
    a.Td == c.Td &&
    a.jd == c.jd &&
    a.Xc == c.Xc
    ? !0
    : !1;
};
g.Ua.prototype.I = function () {
  ea();
  g.Qa(this.DC);
  this.DC = null;
  g.Qa(this.EC);
  this.EC = null;
  g.g.o.removeNode(this.Zg);
  this.rd = this.N = this.Zg = null;
  this.ye && (this.s.Ac.unsubscribe(this.ye), (this.ye = null));
  this.s = null;
};
function da(a, c) {
  a.qo = c;
  a.ye.setAttribute(a.JC, a.qo);
}
function fa(a, c) {
  a.Jf = c;
  a.Zg.setAttribute(a.Ho, a.Jf);
  a.rd.setAttribute(a.Ho, a.Jf);
}
g.xn.prototype.Vk = function (a) {
  this.Af.Vk(a);
  this.Nf.Vk(a);
};
b = g.Ua.prototype;
b.setPosition = function (a, c) {
  this.position.x = a;
  this.position.y = c;
  g.g.o.jp(
    this.Zg,
    "translate(" +
      (this.position.x + this.Tw.x) +
      "px," +
      (this.position.y + this.Tw.y) +
      "px)"
  );
};
b.resize = function (a) {
  if (!a && ((a = this.s.Yc()), !a)) return;
  g.Ua.KI(a, this.ac) ||
    ((this.ac = a), this.tk ? ha(this, a) : ia(this, a), ja(this));
};
function ha(a, c) {
  var d = c.Hb - 1;
  a.Am && (d -= g.Ua.Qc);
  fa(a, Math.max(0, d));
  d = c.Mc + 0.5;
  a.Am && a.s.L && (d += g.Ua.Qc);
  a.setPosition(d, c.Wc + c.Qb - g.Ua.Qc - 0.5);
  ka(a, c);
}
function ka(a, c) {
  a.Am || a.Gb(a.Jf < c.rf);
  a.ratio = a.Jf / c.rf;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Xi = Math.max(0, c.Hb * a.ratio);
  a.ye.setAttribute(a.Ho, a.Xi);
  da(a, la(a, (c.Wb - c.jd) * a.ratio));
}
function ia(a, c) {
  var d = c.Qb - 1;
  a.Am && (d -= g.Ua.Qc);
  fa(a, Math.max(0, d));
  d = c.Mc + 0.5;
  a.s.L || (d += c.Hb - g.Ua.Qc - 1);
  a.setPosition(d, c.Wc + 0.5);
  ma(a, c);
}
function ma(a, c) {
  a.Am || a.Gb(a.Jf < c.Td);
  a.ratio = a.Jf / c.Td;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Xi = Math.max(0, c.Qb * a.ratio);
  a.ye.setAttribute(a.Ho, a.Xi);
  da(a, la(a, (c.ec - c.Xc) * a.ratio));
}
b.Ke = function (a) {
  var c = "blocklyScrollbar" + (this.tk ? "Horizontal" : "Vertical");
  a && (c += " " + a);
  this.Zg = g.g.o.M(g.g.G.Wj, { class: c }, null);
  this.N = g.g.o.M(g.g.G.xc, {}, this.Zg);
  this.rd = g.g.o.M(g.g.G.Dc, { class: "blocklyScrollbarBackground" }, this.N);
  a = Math.floor((g.Ua.Qc - 5) / 2);
  this.ye = g.g.o.M(
    g.g.G.Dc,
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.N
  );
  this.s.Ac.subscribe(this.ye, "scrollbarColour", "fill");
  this.s.Ac.subscribe(this.ye, "scrollbarOpacity", "fill-opacity");
  g.g.o.yk(this.Zg, u(this.s));
};
b.isVisible = function () {
  return this.Zh;
};
b.Vk = function (a) {
  var c = a != this.ck;
  this.ck = a;
  c && this.Ep();
};
b.Gb = function (a) {
  var c = a != this.isVisible();
  if (this.Am) throw Error("Unable to toggle visibility of paired scrollbars.");
  this.Zh = a;
  c && this.Ep();
};
b.Ep = function () {
  this.ck && this.isVisible()
    ? this.Zg.setAttribute("display", "block")
    : this.Zg.setAttribute("display", "none");
};
b.kJ = function (a) {
  na(this.s);
  g.Touch.ak();
  ea();
  if (g.g.Fk(a)) a.stopPropagation();
  else {
    var c = g.g.Po(a, u(this.s), oa(this.s));
    c = this.tk ? c.x : c.y;
    var d = g.g.oo(this.ye);
    d = this.tk ? d.x : d.y;
    var e = this.qo,
      f = 0.95 * this.Xi;
    c <= d ? (e -= f) : c >= d + this.Xi && (e += f);
    da(this, la(this, e));
    ja(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
b.lJ = function (a) {
  na(this.s);
  ea();
  g.g.Fk(a)
    ? a.stopPropagation()
    : ((this.AK = this.qo),
      pa(this.s),
      (this.eD = this.tk ? a.clientX : a.clientY),
      (g.Ua.od = g.ya(document, "mouseup", this, this.pJ)),
      (g.Ua.qj = g.ya(document, "mousemove", this, this.mJ)),
      a.stopPropagation(),
      a.preventDefault());
};
b.mJ = function (a) {
  da(this, la(this, this.AK + ((this.tk ? a.clientX : a.clientY) - this.eD)));
  ja(this);
};
b.pJ = function () {
  ra(this.s);
  g.Touch.ak();
  ea();
};
function ea() {
  g.Fc(!0);
  g.Ua.od && (g.Qa(g.Ua.od), (g.Ua.od = null));
  g.Ua.qj && (g.Qa(g.Ua.qj), (g.Ua.qj = null));
}
function la(a, c) {
  return (c = 0 >= c || isNaN(c) || a.Jf < a.Xi ? 0 : Math.min(c, a.Jf - a.Xi));
}
function ja(a) {
  var c = a.qo / a.Jf;
  isNaN(c) && (c = 0);
  var d = {};
  a.tk ? (d.x = c) : (d.y = c);
  a.s.lp(d);
}
b.set = function (a) {
  da(this, la(this, a * this.ratio));
  ja(this);
};
g.g.Ic = {};
g.g.Ic.Lx = function (a) {
  return (a * Math.PI) / 180;
};
g.g.Ic.mO = function (a) {
  return (180 * a) / Math.PI;
};
g.g.Ic.nf = function (a, c, d) {
  if (d < a) {
    var e = d;
    d = a;
    a = e;
  }
  return Math.max(a, Math.min(c, d));
};
g.C = {};
g.C.Rm = {};
g.C.bq = "default";
g.C.aa = function (a) {
  this.mj = a;
};
g.C.aa.prototype.toString = function () {
  return this.mj;
};
g.C.aa.oy = new g.C.aa("connectionChecker");
g.C.aa.fc = new g.C.aa("event");
g.C.aa.Cc = new g.C.aa("field");
g.C.aa.RENDERER = new g.C.aa("renderer");
g.C.aa.zq = new g.C.aa("toolbox");
g.C.aa.Zt = new g.C.aa("theme");
g.C.aa.Nl = new g.C.aa("toolboxItem");
g.C.aa.Jy = new g.C.aa("flyoutsVerticalToolbox");
g.C.aa.KE = new g.C.aa("flyoutsHorizontalToolbox");
g.C.register = function (a, c, d, e) {
  if (
    (!(a instanceof g.C.aa) && "string" != typeof a) ||
    "" == String(a).trim()
  )
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
  var f = g.C.Rm[a];
  f || (f = g.C.Rm[a] = {});
  g.C.RK(a, d);
  if (!e && f[c])
    throw Error('Name "' + c + '" with type "' + a + '" already registered.');
  f[c] = d;
};
g.C.RK = function (a, c) {
  switch (a) {
    case String(g.C.aa.Cc):
      if ("function" != typeof c.la)
        throw Error('Type "' + a + '" must have a fromJson function');
  }
};
g.C.unregister = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.Rm[a];
  d
    ? d[c]
      ? delete g.C.Rm[a][c]
      : console.warn('No name "' + c + '" with type "' + a + '" found')
    : console.warn('No type "' + a + '" found');
};
g.C.qB = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.Rm[a];
  return d
    ? d[c]
      ? d[c]
      : (console.warn('No name "' + c + '" with type "' + a + '" found'), null)
    : (console.warn('No type "' + a + '" found'), null);
};
g.C.mI = function (a) {
  var c = g.C.aa.Nl;
  c = String(c).toLowerCase();
  a = a.toLowerCase();
  return (c = g.C.Rm[c]) ? !!c[a] : !1;
};
g.C.jo = function (a, c) {
  return g.C.qB(a, c);
};
g.C.Kv = function (a, c) {
  return g.C.qB(a, c);
};
g.C.vr = function (a, c) {
  c = c.plugins[a.toString()] || g.C.bq;
  return "function" == typeof c ? c : g.C.jo(a, c);
};
g.sy = function () {};
function sa(a, c, d, e, f) {
  return a.Nq(c, d, e, f) == g.Ba.Up;
}
g.sy.prototype.Nq = function (a, c, d, e) {
  if (a && c) {
    if (v(a)) {
      var f = a.Y();
      var h = c.Y();
    } else (h = a.Y()), (f = c.Y());
    f =
      f == h
        ? g.Ba.rz
        : c.type != g.Bl[a.type]
        ? g.Ba.vz
        : f.u !== h.u
        ? g.Ba.pz
        : f.Oa && !h.Oa
        ? g.Ba.sz
        : g.Ba.Up;
  } else f = g.Ba.uz;
  return f != g.Ba.Up
    ? f
    : ta(a, c)
    ? d && !ua(a, c, e || 0)
      ? g.Ba.qz
      : g.Ba.Up
    : g.Ba.oz;
};
function va(a, c, d) {
  switch (a) {
    case g.Ba.rz:
      return "Attempted to connect a block to itself.";
    case g.Ba.pz:
      return "Blocks not on same workspace.";
    case g.Ba.vz:
      return "Attempt to connect incompatible types.";
    case g.Ba.uz:
      return "Target connection is null.";
    case g.Ba.oz:
      return (
        "Connection checks failed. " +
        (c + " expected " + c.Oi + ", found " + d.Oi)
      );
    case g.Ba.sz:
      return "Connecting non-shadow to shadow block.";
    case g.Ba.qz:
      return "Drag checks failed.";
    default:
      return "Unknown connection failure: this should never happen!";
  }
}
function ta(a, c) {
  a = a.Oi;
  c = c.Oi;
  if (!a || !c) return !0;
  for (var d = 0; d < a.length; d++) if (-1 != c.indexOf(a[d])) return !0;
  return !1;
}
function ua(a, c, d) {
  if (wa(a, c) > d || c.Y().we()) return !1;
  switch (c.type) {
    case g.Uf:
      return (
        a.na || -1 != g.gm.indexOf(c)
          ? (a = !1)
          : c.na
          ? ((a = c.ra()), (a = a.we() ? !(a.ba && a.ba.ra()) : !1))
          : (a = !0),
        a
      );
    case g.Tf:
      if ((c.isConnected() && !c.ra().we()) || a.isConnected()) return !1;
      break;
    case g.jb:
      if (c.isConnected() && !c.ra().Hc() && !c.ra().Oa) return !1;
      break;
    case g.zb:
      if (c.isConnected() && !a.Y().Z && !c.ra().Oa && c.ra().Z) return !1;
      break;
    default:
      return !1;
  }
  return -1 != g.gm.indexOf(c) ? !1 : !0;
}
g.C.register(g.C.aa.oy, g.C.bq, g.sy);
g.h = {};
g.h.FB = "";
g.h.ab = !0;
g.h.bv = 0;
g.h.Yp = "create";
g.h.Np = g.h.Yp;
g.h.Nj = "delete";
g.h.Xs = g.h.Nj;
g.h.Lj = "change";
g.h.ND = g.h.Lj;
g.h.mn = "move";
g.h.Ys = g.h.mn;
g.h.Pz = "var_create";
g.h.Qz = "var_delete";
g.h.Sz = "var_rename";
g.h.du = "ui";
g.h.iy = "drag";
g.h.Fl = "selected";
g.h.et = "click";
g.h.az = "marker_move";
g.h.Pp = "bubble_open";
g.h.Kz = "trashcan_open";
g.h.Iz = "toolbox_item_select";
g.h.Hz = "theme_change";
g.h.Tz = "viewport_change";
g.h.Vp = "comment_create";
g.h.ny = "comment_delete";
g.h.ly = "comment_change";
g.h.Wp = "comment_move";
g.h.Iy = "finished_loading";
g.h.SD = [g.h.Np, g.h.Ys, g.h.Vp, g.h.Wp];
g.h.dn = [];
g.h.Ga = function (a) {
  g.h.isEnabled() && (g.h.dn.length || setTimeout(g.h.FH, 0), g.h.dn.push(a));
};
g.h.FH = function () {
  for (
    var a = g.h.filter(g.h.dn, !0), c = (g.h.dn.length = 0), d;
    (d = a[c]);
    c++
  )
    if (d.Sc) {
      var e = g.Rb.io(d.Sc);
      if (e) {
        var f = d;
        if (f.ab)
          for (e.$k.push(f), e.Zo.length = 0; e.$k.length > e.cz && 0 <= e.cz; )
            e.$k.shift();
        for (var h = 0; (d = e.ge[h]); h++) d(f);
      }
    }
};
g.h.filter = function (a, c) {
  a = a.slice();
  c || a.reverse();
  for (var d = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.um()) {
      var k = [h.ew ? g.h.du : h.type, h.lb, h.Sc].join(" "),
        l = e[k],
        m = l ? l.event : null;
      if (!l) (e[k] = { event: h, index: f }), d.push(h);
      else if (h.type == g.h.mn && l.index == f - 1)
        (m.Ok = h.Ok), (m.Nk = h.Nk), (m.oj = h.oj), (l.index = f);
      else if (h.type == g.h.Lj && h.element == m.element && h.name == m.name)
        m.newValue = h.newValue;
      else if (h.type != g.h.et || m.type != g.h.Pp)
        (e[k] = { event: h, index: f }), d.push(h);
    }
  a = d.filter(function (n) {
    return !n.um();
  });
  c || a.reverse();
  for (f = 1; (h = a[f]); f++)
    h.type == g.h.Lj && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
g.h.TG = function () {
  for (var a = 0, c; (c = g.h.dn[a]); a++) c.ab = !1;
};
g.h.disable = function () {
  g.h.bv++;
};
g.h.enable = function () {
  g.h.bv--;
};
g.h.isEnabled = function () {
  return 0 == g.h.bv;
};
g.h.uc = function () {
  return g.h.FB;
};
g.h.ea = function (a) {
  g.h.FB = "boolean" == typeof a ? (a ? g.g.Qh() : "") : a;
};
g.h.mB = function (a) {
  var c = [];
  a = q(a, !1);
  for (var d = 0, e; (e = a[d]); d++) c[d] = e.id;
  return c;
};
g.h.la = function (a) {
  var c = g.C.jo(g.C.aa.fc, a.type);
  if (!c) throw Error("Unknown event type.");
  c = new c();
  c.la(a);
  c.Sc = (void 0).id;
  return c;
};
g.h.UA = function (a) {
  if ((a.type == g.h.mn || a.type == g.h.Yp) && a.Sc) {
    var c = g.Rb.io(a.Sc),
      d = c.Wd(a.lb);
    if (d) {
      a = g.h.ab;
      try {
        g.h.ab = !1;
        var e = d.getParent();
        if (e && e.isEnabled()) {
          var f = q(d, !1);
          c = 0;
          for (var h; (h = f[c]); c++) h.ie(!0);
        } else if ((d.O || d.ba) && !c.Gc()) {
          do d.ie(!1), (d = t(d));
          while (d);
        }
      } finally {
        g.h.ab = a;
      }
    }
  }
};
g.g.object = {};
g.g.object.W = function (a, c) {
  a.A = c.prototype;
  a.prototype = Object.create(c.prototype);
  a.prototype.constructor = a;
};
g.g.object.Re = function (a, c) {
  for (var d in c) a[d] = c[d];
};
g.g.object.dm = function (a, c) {
  for (var d in c)
    a[d] =
      null != c[d] && "object" === typeof c[d]
        ? g.g.object.dm(a[d] || Object.create(null), c[d])
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
g.Yj = function (a, c, d, e) {
  this.name = a;
  this.Mi = c || Object.create(null);
  this.Pq = d || Object.create(null);
  this.wA = e || Object.create(null);
  this.fontStyle = Object.create(null);
  this.Ix = null;
  g.C.register(g.C.aa.Zt, a, this);
};
g.Yj.prototype.dg = function () {
  return this.name + "-theme";
};
function xa(a, c) {
  return (c = a.wA[c]) && "string" == typeof c && xa(a, c)
    ? xa(a, c)
    : c
    ? String(c)
    : null;
}
g.Yj.jH = function (a, c) {
  var d = new g.Yj(a),
    e = c.base;
  e &&
    ("string" == typeof e && (e = g.C.Kv(g.C.aa.Zt, e)),
    e instanceof g.Yj && (g.g.object.dm(d, e), (d.name = a)));
  g.g.object.dm(d.Mi, c.blockStyles);
  g.g.object.dm(d.Pq, c.categoryStyles);
  g.g.object.dm(d.wA, c.componentStyles);
  g.g.object.dm(d.fontStyle, c.fontStyle);
  null != c.startHats && (d.Ix = c.startHats);
  return d;
};
g.Ah = {};
g.Ah.yi = {};
g.Ah.yi.gH = {
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
g.Ah.yi.Pq = {
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
g.Ah.yi = new g.Yj("classic", g.Ah.yi.gH, g.Ah.yi.Pq);
g.g.ul = {};
g.g.ul.$I = 0;
g.g.ul.Jv = function () {
  return "blockly-" + (g.g.ul.$I++).toString(36);
};
g.g.xa = {};
g.g.xa.ct = "categoryToolbox";
g.g.xa.Ky = "flyoutToolbox";
g.g.xa.Nd = { Aq: g.Xj, Zs: g.zn, xl: g.De, El: g.Ml };
g.g.xa.Ku = function (a) {
  if (!a) return null;
  if (a instanceof Element || "string" == typeof a)
    (a = g.g.xa.Yw(a)), (a = g.g.xa.bH(a));
  g.g.xa.QK(a);
  return a;
};
g.g.xa.QK = function (a) {
  var c = a.kind;
  a = a.contents;
  if (c && c != g.g.xa.Ky && c != g.g.xa.ct)
    throw Error(
      "Invalid toolbox kind " +
        c +
        ". Please supply either " +
        g.g.xa.Ky +
        " or " +
        g.g.xa.ct
    );
  if (!a) throw Error("Toolbox must have a contents attribute.");
};
g.g.xa.EA = function (a) {
  return a
    ? a.contents
      ? a.contents
      : Array.isArray(a) && 0 < a.length && !a[0].nodeType
      ? a
      : g.g.xa.Xx(a)
    : [];
};
g.g.xa.so = function (a) {
  if (!a) return !1;
  var c = a.kind;
  return c
    ? c == g.g.xa.ct
    : !!a.contents.filter(function (d) {
        return "CATEGORY" == d.kind.toUpperCase();
      }).length;
};
g.g.xa.TB = function (a) {
  return a && a.contents
    ? !!a.contents.filter(function (c) {
        return "CATEGORY" == c.kind.toUpperCase();
      }).length
    : !1;
};
g.g.xa.bH = function (a) {
  var c = { contents: g.g.xa.Xx(a) };
  a instanceof Node && g.g.xa.dA(a, c);
  return c;
};
g.g.xa.Xx = function (a) {
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
          (f.contents = g.g.xa.Xx(e));
      g.g.xa.dA(e, f);
      c.push(f);
    }
  return c;
};
g.g.xa.dA = function (a, c) {
  for (var d = 0; d < a.attributes.length; d++) {
    var e = a.attributes[d];
    -1 < e.nodeName.indexOf("css-")
      ? ((c.cssconfig = c.cssconfig || {}),
        (c.cssconfig[e.nodeName.replace("css-", "")] = e.value))
      : (c[e.nodeName] = e.value);
  }
};
g.g.xa.Yw = function (a) {
  if (a) {
    if (
      ("string" != typeof a &&
        (g.g.userAgent.df && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a &&
        ((a = g.V.Ye(a)), "xml" != a.nodeName.toLowerCase()))
    )
      throw TypeError("Toolbox should be an <xml> document.");
  } else a = null;
  return a;
};
g.h.Abstract = function () {
  this.Pe = null;
  this.Sc = void 0;
  this.group = g.h.uc();
  this.ab = g.h.ab;
};
b = g.h.Abstract.prototype;
b.ew = !1;
b.wa = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
b.la = function (a) {
  this.Pe = !1;
  this.group = a.group;
};
b.um = function () {
  return !1;
};
b.run = function () {};
function ya(a) {
  if (a.Sc) var c = g.Rb.io(a.Sc);
  if (!c)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return c;
}
g.g.xml = {};
g.g.xml.KF = "https://developers.google.com/blockly/xml";
g.g.xml.document = function () {
  return document;
};
g.g.xml.createElement = function (a) {
  return g.g.xml.document().createElementNS(g.g.xml.KF, a);
};
g.g.xml.createTextNode = function (a) {
  return g.g.xml.document().createTextNode(a);
};
g.g.xml.GK = function (a) {
  return new DOMParser().parseFromString(a, "text/xml");
};
g.g.xml.re = function (a) {
  return new XMLSerializer().serializeToString(a);
};
g.h.ng = function (a) {
  g.h.ng.A.constructor.call(this);
  this.lb = (this.Pe = "undefined" == typeof a) ? "" : a.id;
  this.Sc = this.Pe ? "" : a.u.id;
};
g.g.object.W(g.h.ng, g.h.Abstract);
g.h.ng.prototype.wa = function () {
  var a = g.h.ng.A.wa.call(this);
  a.blockId = this.lb;
  return a;
};
g.h.ng.prototype.la = function (a) {
  g.h.ng.A.la.call(this, a);
  this.lb = a.blockId;
};
g.h.xi = function (a, c, d, e, f) {
  g.h.xi.A.constructor.call(this, a);
  a &&
    ((this.element = "undefined" == typeof c ? "" : c),
    (this.name = "undefined" == typeof d ? "" : d),
    (this.oldValue = "undefined" == typeof e ? "" : e),
    (this.newValue = "undefined" == typeof f ? "" : f));
};
g.g.object.W(g.h.xi, g.h.ng);
g.h.lh = g.h.xi;
b = g.h.xi.prototype;
b.type = g.h.Lj;
b.wa = function () {
  var a = g.h.xi.A.wa.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.oldValue = this.oldValue;
  a.newValue = this.newValue;
  return a;
};
b.la = function (a) {
  g.h.xi.A.la.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.oldValue = a.oldValue;
  this.newValue = a.newValue;
};
b.um = function () {
  return this.oldValue == this.newValue;
};
b.run = function (a) {
  var c = ya(this).Wd(this.lb);
  if (c)
    switch (
      (c.nd && c.nd.Gb(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (c = w(c, this.name))
          ? c.setValue(a)
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        c.eh(a || null);
        break;
      case "collapsed":
        c.zj(!!a);
        break;
      case "disabled":
        c.ie(!a);
        break;
      case "inline":
        c.Rc(!!a);
        break;
      case "mutation":
        var d = "";
        c.ob && (d = (d = c.ob()) && g.V.re(d));
        if (c.Tb) {
          var e = g.V.Ye(a || "<mutation/>");
          c.Tb(e);
        }
        g.h.Ga(new g.h.xi(c, "mutation", null, d, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.lb);
};
g.h.Rf = function (a) {
  g.h.Rf.A.constructor.call(this, a);
  a &&
    (a.Oa && (this.ab = !1),
    (this.xml = a.u.pa ? g.V.tu(a) : g.V.Gh(a)),
    (this.bj = g.h.mB(a)));
};
g.g.object.W(g.h.Rf, g.h.ng);
g.h.Sp = g.h.Rf;
g.h.Rf.prototype.type = g.h.Yp;
g.h.Rf.prototype.wa = function () {
  var a = g.h.Rf.A.wa.call(this);
  a.xml = g.V.re(this.xml);
  a.ids = this.bj;
  this.ab || (a.recordUndo = this.ab);
  return a;
};
g.h.Rf.prototype.la = function (a) {
  g.h.Rf.A.la.call(this, a);
  this.xml = g.V.Ye(a.xml);
  this.bj = a.ids;
  void 0 !== a.recordUndo && (this.ab = a.recordUndo);
};
g.h.Rf.prototype.run = function (a) {
  var c = ya(this);
  if (a)
    (a = g.g.xml.createElement("xml")), a.appendChild(this.xml), g.V.Ti(a, c);
  else {
    a = 0;
    for (var d; (d = this.bj[a]); a++) {
      var e = c.Wd(d);
      e
        ? e.I(!1)
        : d == this.lb &&
          console.warn("Can't uncreate non-existent block: " + d);
    }
  }
};
g.h.qg = function (a) {
  g.h.qg.A.constructor.call(this, a);
  if (a) {
    if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
    a.Oa && (this.ab = !1);
    this.zm = a.u.pa ? g.V.tu(a) : g.V.Gh(a);
    this.bj = g.h.mB(a);
  }
};
g.g.object.W(g.h.qg, g.h.ng);
g.h.TD = g.h.qg;
g.h.qg.prototype.type = g.h.Nj;
g.h.qg.prototype.wa = function () {
  var a = g.h.qg.A.wa.call(this);
  a.oldXml = g.V.re(this.zm);
  a.ids = this.bj;
  this.ab || (a.recordUndo = this.ab);
  return a;
};
g.h.qg.prototype.la = function (a) {
  g.h.qg.A.la.call(this, a);
  this.zm = g.V.Ye(a.oldXml);
  this.bj = a.ids;
  void 0 !== a.recordUndo && (this.ab = a.recordUndo);
};
g.h.qg.prototype.run = function (a) {
  var c = ya(this);
  if (a) {
    a = 0;
    for (var d; (d = this.bj[a]); a++) {
      var e = c.Wd(d);
      e
        ? e.I(!1)
        : d == this.lb && console.warn("Can't delete non-existent block: " + d);
    }
  } else
    (a = g.g.xml.createElement("xml")), a.appendChild(this.zm), g.V.Ti(a, c);
};
g.h.Sj = function (a) {
  g.h.Sj.A.constructor.call(this, a);
  a &&
    (a.Oa && (this.ab = !1),
    (a = za(this)),
    (this.wC = a.GC),
    (this.sC = a.PB),
    (this.Iw = a.FA));
};
g.g.object.W(g.h.Sj, g.h.ng);
g.h.Ym = g.h.Sj;
b = g.h.Sj.prototype;
b.type = g.h.mn;
b.wa = function () {
  var a = g.h.Sj.A.wa.call(this);
  this.Ok && (a.newParentId = this.Ok);
  this.Nk && (a.newInputName = this.Nk);
  this.oj &&
    (a.newCoordinate = Math.round(this.oj.x) + "," + Math.round(this.oj.y));
  this.ab || (a.recordUndo = this.ab);
  return a;
};
b.la = function (a) {
  g.h.Sj.A.la.call(this, a);
  this.Ok = a.newParentId;
  this.Nk = a.newInputName;
  if (a.newCoordinate) {
    var c = a.newCoordinate.split(",");
    this.oj = new g.g.X(Number(c[0]), Number(c[1]));
  }
  void 0 !== a.recordUndo && (this.ab = a.recordUndo);
};
b.Tk = function () {
  var a = za(this);
  this.Ok = a.GC;
  this.Nk = a.PB;
  this.oj = a.FA;
};
function za(a) {
  var c = ya(a).Wd(a.lb);
  a = {};
  var d = c.getParent();
  if (d) {
    if (((a.GC = d.id), (c = Aa(d, c)))) a.PB = c.name;
  } else a.FA = c.Za();
  return a;
}
b.um = function () {
  return this.wC == this.Ok && this.sC == this.Nk && g.g.X.vf(this.Iw, this.oj);
};
b.run = function (a) {
  var c = ya(this),
    d = c.Wd(this.lb);
  if (d) {
    var e = a ? this.Ok : this.wC,
      f = a ? this.Nk : this.sC;
    a = a ? this.oj : this.Iw;
    var h = null;
    if (e && ((h = c.Wd(e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    d.getParent() && x(d);
    if (a) (f = d.Za()), d.moveBy(a.x - f.x, a.y - f.y);
    else {
      d = d.O || d.ba;
      if (f) {
        if ((c = z(h, f))) var k = c.connection;
      } else d.type == g.Uf && (k = h.Z);
      k
        ? d.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.lb);
};
g.C.register(g.C.aa.fc, g.h.Yp, g.h.Rf);
g.C.register(g.C.aa.fc, g.h.Nj, g.h.qg);
g.C.register(g.C.aa.fc, g.h.Lj, g.h.xi);
g.C.register(g.C.aa.fc, g.h.mn, g.h.Sj);
g.h.ql = function (a) {
  this.Pe = "undefined" == typeof a;
  this.Sc = a ? a.id : "";
  this.group = g.h.uc();
  this.ab = !1;
};
g.g.object.W(g.h.ql, g.h.Abstract);
g.h.ql.prototype.type = g.h.Iy;
g.h.ql.prototype.wa = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.Sc && (a.workspaceId = this.Sc);
  return a;
};
g.h.ql.prototype.la = function (a) {
  this.Pe = !1;
  this.Sc = a.workspaceId;
  this.group = a.group;
};
g.C.register(g.C.aa.fc, g.h.Iy, g.h.ql);
g.h.Dh = function (a) {
  g.h.Dh.A.constructor.call(this);
  this.Gj = (this.Pe = "undefined" == typeof a) ? "" : a.Ma();
  this.Sc = this.Pe ? "" : a.u.id;
};
g.g.object.W(g.h.Dh, g.h.Abstract);
g.h.Dh.prototype.wa = function () {
  var a = g.h.Dh.A.wa.call(this);
  a.varId = this.Gj;
  return a;
};
g.h.Dh.prototype.la = function (a) {
  g.h.Dh.A.wa.call(this);
  this.Gj = a.varId;
};
g.h.jf = function (a) {
  g.h.jf.A.constructor.call(this, a);
  a && ((this.cl = a.type), (this.bl = a.name));
};
g.g.object.W(g.h.jf, g.h.Dh);
g.h.jf.prototype.type = g.h.Pz;
g.h.jf.prototype.wa = function () {
  var a = g.h.jf.A.wa.call(this);
  a.varType = this.cl;
  a.varName = this.bl;
  return a;
};
g.h.jf.prototype.la = function (a) {
  g.h.jf.A.la.call(this, a);
  this.cl = a.varType;
  this.bl = a.varName;
};
g.h.jf.prototype.run = function (a) {
  var c = ya(this);
  a ? c.sf(this.bl, this.cl, this.Gj) : c.Oh(this.Gj);
};
g.h.Xf = function (a) {
  g.h.Xf.A.constructor.call(this, a);
  a && ((this.cl = a.type), (this.bl = a.name));
};
g.g.object.W(g.h.Xf, g.h.Dh);
g.h.Xf.prototype.type = g.h.Qz;
g.h.Xf.prototype.wa = function () {
  var a = g.h.Xf.A.wa.call(this);
  a.varType = this.cl;
  a.varName = this.bl;
  return a;
};
g.h.Xf.prototype.la = function (a) {
  g.h.Xf.A.la.call(this, a);
  this.cl = a.varType;
  this.bl = a.varName;
};
g.h.Xf.prototype.run = function (a) {
  var c = ya(this);
  a ? c.Oh(this.Gj) : c.sf(this.bl, this.cl, this.Gj);
};
g.h.yg = function (a, c) {
  g.h.yg.A.constructor.call(this, a);
  a && ((this.Kw = a.name), (this.Fw = "undefined" == typeof c ? "" : c));
};
g.g.object.W(g.h.yg, g.h.Dh);
g.h.yg.prototype.type = g.h.Sz;
g.h.yg.prototype.wa = function () {
  var a = g.h.yg.A.wa.call(this);
  a.oldName = this.Kw;
  a.newName = this.Fw;
  return a;
};
g.h.yg.prototype.la = function (a) {
  g.h.yg.A.la.call(this, a);
  this.Kw = a.oldName;
  this.Fw = a.newName;
};
g.h.yg.prototype.run = function (a) {
  var c = ya(this);
  a ? c.xj(this.Gj, this.Fw) : c.xj(this.Gj, this.Kw);
};
g.C.register(g.C.aa.fc, g.h.Pz, g.h.jf);
g.C.register(g.C.aa.fc, g.h.Qz, g.h.Xf);
g.C.register(g.C.aa.fc, g.h.Sz, g.h.yg);
g.V = {};
g.V.YK = function () {
  var a = A,
    c = g.g.xml.createElement("xml"),
    d = g.V.UK(g.$.hA(a));
  d.hasChildNodes() && c.appendChild(d);
  var e = [].concat(a.Ns);
  1 < e.length &&
    ((a.gh.offset = Math.sin(g.g.Ic.Lx(g.Rb.zz))),
    a.L && (a.gh.offset *= -1),
    e.sort(a.gh));
  d = 0;
  for (var f; (f = e[d]); d++) c.appendChild(f.nD(!0));
  a = a.$b(!0);
  for (d = 0; (e = a[d]); d++) c.appendChild(g.V.tu(e, !0));
  return c;
};
g.V.UK = function (a) {
  for (var c = g.g.xml.createElement("variables"), d = 0, e; (e = a[d]); d++) {
    var f = g.g.xml.createElement("variable");
    f.appendChild(g.g.xml.createTextNode(e.name));
    e.type && f.setAttribute("type", e.type);
    f.id = e.Ma();
    c.appendChild(f);
  }
  return c;
};
g.V.tu = function (a, c) {
  if (a.we() && ((a = Ba(a, !1)[0]), !a)) return new DocumentFragment();
  var d;
  a.u.L && (d = a.u.Rg());
  c = g.V.Gh(a, c);
  var e = a.Za();
  c.setAttribute("x", Math.round(a.u.L ? d - e.x : e.x));
  c.setAttribute("y", Math.round(e.y));
  return c;
};
g.V.EH = function (a) {
  var c = !1;
  a.name &&
    (a.Gl
      ? (c = !0)
      : a.cq &&
        (console.warn(
          "Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."
        ),
        (c = !0)));
  return c
    ? ((c = g.g.xml.createElement("field")),
      c.setAttribute("name", a.name || ""),
      a.mD(c))
    : null;
};
g.V.AG = function (a, c) {
  for (var d = 0, e; (e = a.U[d]); d++)
    for (var f = 0, h; (h = e.gb[f]); f++) (h = g.V.EH(h)) && c.appendChild(h);
};
g.V.Gh = function (a, c) {
  if (a.we()) return (a = Ba(a, !1)[0]) ? g.V.Gh(a) : new DocumentFragment();
  var d = g.g.xml.createElement(a.Oa ? "shadow" : "block");
  d.setAttribute("type", a.type);
  c || d.setAttribute("id", a.id);
  if (a.ob) {
    var e = a.ob();
    e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e);
  }
  g.V.AG(a, d);
  if ((e = a.Ie.text)) {
    var f = a.Ie.size,
      h = a.Ie.bx,
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
  for (e = 0; (f = a.U[e]); e++) {
    var l;
    h = !0;
    if (f.type != g.qh) {
      var m = f.connection.ra();
      f.type == g.jb
        ? (l = g.g.xml.createElement("value"))
        : f.type == g.zb && (l = g.g.xml.createElement("statement"));
      k = f.connection.km();
      !k || (m && m.Oa) || l.appendChild(g.V.tA(k, c));
      m &&
        ((k = g.V.Gh(m, c)),
        k.nodeType == g.g.o.Gi.ELEMENT_NODE && (l.appendChild(k), (h = !1)));
      l.setAttribute("name", f.name);
      h || d.appendChild(l);
    }
  }
  void 0 != a.Wh && a.Wh != a.tI && d.setAttribute("inline", a.Wh);
  a.isCollapsed() && d.setAttribute("collapsed", !0);
  a.isEnabled() || d.setAttribute("disabled", !0);
  a.ve() || a.Oa || d.setAttribute("deletable", !1);
  a.Hc() || a.Oa || d.setAttribute("movable", !1);
  a.ee() || d.setAttribute("editable", !1);
  if ((e = t(a)))
    (k = g.V.Gh(e, c)),
      k.nodeType == g.g.o.Gi.ELEMENT_NODE &&
        ((l = g.g.xml.createElement("next")),
        l.appendChild(k),
        d.appendChild(l));
  k = a.Z && a.Z.km();
  !k || (e && e.Oa) || l.appendChild(g.V.tA(k, c));
  return d;
};
g.V.tA = function (a, c) {
  for (var d = (a = a.cloneNode(!0)), e; d; )
    if ((c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild))
      d = d.firstChild;
    else {
      for (; d && !d.nextSibling; )
        (e = d),
          (d = d.parentNode),
          e.nodeType == g.g.o.Gi.TEXT_NODE &&
            "" == e.data.trim() &&
            d.firstChild != e &&
            g.g.o.removeNode(e);
      d &&
        ((e = d),
        (d = d.nextSibling),
        e.nodeType == g.g.o.Gi.TEXT_NODE &&
          "" == e.data.trim() &&
          g.g.o.removeNode(e));
    }
  return a;
};
g.V.re = function (a) {
  return g.g.xml.re(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>");
};
g.V.HN = function (a) {
  a = g.V.re(a).split("<");
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
g.V.Ye = function (a) {
  var c = g.g.xml.GK(a);
  if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length)
    throw Error("textToDom was unable to parse: " + a);
  return c.documentElement;
};
g.V.EN = function (a, c) {
  c.ad(!1);
  c.clear();
  a = g.V.Ti(a, c);
  c.ad(!0);
  return a;
};
g.V.Ti = function (a, c) {
  if (a instanceof g.Rb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  c.L && (e = c.Rg());
  d = [];
  g.g.o.tp();
  var f = g.h.uc();
  f || g.h.ea(!0);
  c.ad && c.ad(!1);
  var h = !0;
  try {
    for (var k = 0, l; (l = a.childNodes[k]); k++) {
      var m = l.nodeName.toLowerCase(),
        n = l;
      if ("block" == m || ("shadow" == m && !g.h.ab)) {
        var p = g.V.gk(n, c);
        d.push(p.id);
        var r = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10,
          y = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
        isNaN(r) || isNaN(y) || p.moveBy(c.L ? e - r : r, y);
        h = !1;
      } else {
        if ("shadow" == m)
          throw TypeError("Shadow block cannot be a top-level block.");
        if ("comment" == m)
          c.pa
            ? g.Pl
              ? g.Pl.co(n)
              : console.warn(
                  "Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment."
                )
            : g.aA
            ? g.aA.co(n)
            : console.warn(
                "Missing require for Blockly.WorkspaceComment, ignoring workspace comment."
              );
        else if ("variables" == m) {
          if (h) g.V.vH(n, c);
          else
            throw Error(
              "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
            );
          h = !1;
        }
      }
    }
  } finally {
    f || g.h.ea(!1), g.g.o.up();
  }
  c.ad && c.ad(!0);
  g.h.Ga(new g.h.ql(c));
  return d;
};
g.V.BN = function (a, c) {
  var d;
  Object.prototype.hasOwnProperty.call(c, "scale") && (d = Ca(c));
  a = g.V.Ti(a, c);
  if (d && d.top != d.bottom) {
    var e = d.bottom;
    var f = c.L ? d.right : d.left;
    var h = Infinity,
      k = -Infinity,
      l = Infinity;
    for (d = 0; d < a.length; d++) {
      var m = c.Wd(a[d]).Za();
      m.y < l && (l = m.y);
      m.x < h && (h = m.x);
      m.x > k && (k = m.x);
    }
    e = e - l + 10;
    f = c.L ? f - k : f - h;
    for (d = 0; d < a.length; d++) c.Wd(a[d]).moveBy(f, e);
  }
  return a;
};
g.V.gk = function (a, c) {
  if (a instanceof g.Rb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  g.h.disable();
  d = c.kk();
  try {
    var e = g.V.hv(a, c),
      f = q(e, !1);
    if (c.pa) {
      Da(e, !1);
      for (var h = f.length - 1; 0 <= h; h--) f[h].Bf();
      for (h = f.length - 1; 0 <= h; h--) f[h].Ha(!1);
      setTimeout(function () {
        e.cg || Da(e, !0);
      }, 1);
      Ea(e);
      Fa(c);
    } else for (h = f.length - 1; 0 <= h; h--) f[h].wk();
  } finally {
    g.h.enable();
  }
  if (g.h.isEnabled()) {
    a = g.$.jB(c, d);
    for (h = 0; h < a.length; h++) g.h.Ga(new g.h.jf(a[h]));
    g.h.Ga(new g.h.Sp(e));
  }
  return e;
};
g.V.vH = function (a, c) {
  for (var d = 0, e; (e = a.childNodes[d]); d++)
    if (e.nodeType == g.g.o.Gi.ELEMENT_NODE) {
      var f = e.getAttribute("type"),
        h = e.getAttribute("id");
      c.sf(e.textContent, f, h);
    }
};
g.V.hv = function (a, c) {
  var d = null,
    e = a.getAttribute("type");
  if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
  var f = a.getAttribute("id");
  d = c.nj(e, f);
  var h = null;
  f = 0;
  for (var k; (k = a.childNodes[f]); f++)
    if (k.nodeType != g.g.o.Gi.TEXT_NODE) {
      for (var l, m = (h = null), n = 0; (l = k.childNodes[n]); n++)
        l.nodeType == g.g.o.Gi.ELEMENT_NODE &&
          ("block" == l.nodeName.toLowerCase()
            ? (h = l)
            : "shadow" == l.nodeName.toLowerCase() && (m = l));
      n = !1;
      var p = k.getAttribute("name");
      l = k;
      switch (k.nodeName.toLowerCase()) {
        case "mutation":
          d.Tb && (d.Tb(l), d.Bf && (n = !0));
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
          d.eh(m);
          d.Ie.bx = h;
          isNaN(k) || isNaN(l) || (d.Ie.size = new g.g.hf(k, l));
          h &&
            d.PH &&
            !d.Nb &&
            setTimeout(function () {
              d.pf.Gb(!0);
            }, 1);
          break;
        case "data":
          d.data = k.textContent;
          break;
        case "title":
        case "field":
          g.V.uH(d, p, l);
          break;
        case "value":
        case "statement":
          l = z(d, p);
          if (!l) {
            console.warn("Ignoring non-existent input " + p + " in block " + e);
            break;
          }
          if (h)
            if (((h = g.V.hv(h, c)), h.O)) l.connection.connect(h.O);
            else if (h.ba) l.connection.connect(h.ba);
            else
              throw TypeError(
                "Child block does not have output or previous statement."
              );
          m && l.connection.Jm(m);
          break;
        case "next":
          if (h) {
            if (!d.Z) throw TypeError("Next statement does not exist.");
            if (d.Z.isConnected())
              throw TypeError("Next statement is already connected.");
            h = g.V.hv(h, c);
            if (!h.ba)
              throw TypeError("Next block does not have previous statement.");
            d.Z.connect(h.ba);
          }
          m && d.Z && d.Z.Jm(m);
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  n && d.Bf();
  (f = a.getAttribute("inline")) && d.Rc("true" == f);
  (f = a.getAttribute("disabled")) && d.ie("true" != f && "disabled" != f);
  if ((f = a.getAttribute("deletable"))) d.Uu = "true" == f;
  (f = a.getAttribute("movable")) && d.zs("true" == f);
  (f = a.getAttribute("editable")) && d.xx("true" == f);
  (f = a.getAttribute("collapsed")) && d.zj("true" == f);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = Ba(d, !1);
    for (f = 0; (c = a[f]); f++)
      if (!c.Oa) throw TypeError("Shadow block not allowed non-shadow child.");
    if (d.Th().length)
      throw TypeError("Shadow blocks cannot have variable references.");
    d.Ax(!0);
  }
  return d;
};
g.V.uH = function (a, c, d) {
  var e = w(a, c);
  e
    ? e.co(d)
    : console.warn("Ignoring non-existent field " + c + " in block " + a.type);
};
g.V.lH = function (a) {
  for (var c = 0, d; (d = a.childNodes[c]); c++)
    if ("next" == d.nodeName.toLowerCase()) {
      a.removeChild(d);
      break;
    }
};
g.Ld = function (a) {
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
    d = g.g.xa.Ku(a.toolbox);
    e = g.g.xa.so(d);
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
  var p = !!a.rtl,
    r = a.horizontalLayout;
  void 0 === r && (r = !1);
  var y = a.toolboxPosition;
  y = "end" !== y;
  y = r
    ? y
      ? g.g.xa.Nd.Aq
      : g.g.xa.Nd.Zs
    : y == p
    ? g.g.xa.Nd.El
    : g.g.xa.Nd.xl;
  var D = a.css;
  void 0 === D && (D = !0);
  var S = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (S = a.media) : a.path && (S = a.path + "media/");
  var qa = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
    Db = a.renderer || "geras",
    Qa = a.plugins || {};
  this.L = p;
  this.bi = qa;
  this.collapse = h;
  this.Ln = k;
  this.disable = l;
  this.readOnly = c;
  this.yw = a.maxBlocks || Infinity;
  this.Qr = a.maxInstances;
  this.sj = S;
  this.so = e;
  this.$c = g.Ld.tJ(a, e);
  this.IB = f;
  this.Rr = n;
  this.oI = m;
  this.lI = D;
  this.Ad = r;
  this.Xg = d;
  this.EB = g.Ld.sJ(a);
  this.sb = g.Ld.vJ(a);
  this.Ia = y;
  this.HK = g.Ld.uJ(a);
  this.bp = Db;
  this.cp = a.rendererOverrides;
  this.Qv = null;
  this.vc = a.parentWorkspace;
  this.plugins = Qa;
};
g.fL = function () {};
g.Ld.tJ = function (a, c) {
  var d = a.move || {},
    e = {};
  e.scrollbars =
    void 0 === d.scrollbars && void 0 === a.scrollbars
      ? c
      : !!d.scrollbars || !!a.scrollbars;
  e.Ij = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
  e.Ui = e.scrollbars ? (void 0 === d.drag ? !0 : !!d.drag) : !1;
  return e;
};
g.Ld.vJ = function (a) {
  a = a.zoom || {};
  var c = {};
  c.controls = void 0 === a.controls ? !1 : !!a.controls;
  c.Ij = void 0 === a.wheel ? !1 : !!a.wheel;
  c.fD = void 0 === a.startScale ? 1 : Number(a.startScale);
  c.Lo = void 0 === a.maxScale ? 3 : Number(a.maxScale);
  c.No = void 0 === a.minScale ? 0.3 : Number(a.minScale);
  c.mK = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
  c.ax = void 0 === a.pinch ? c.Ij || c.controls : !!a.pinch;
  return c;
};
g.Ld.sJ = function (a) {
  a = a.grid || {};
  var c = {};
  c.spacing = Number(a.spacing) || 0;
  c.Cb = a.colour || "#888";
  c.length = void 0 === a.length ? 1 : Number(a.length);
  c.jO = 0 < c.spacing && !!a.snap;
  return c;
};
g.Ld.uJ = function (a) {
  a = a.theme || g.Ah.yi;
  return "string" == typeof a
    ? g.C.Kv(g.C.aa.Zt, a)
    : a instanceof g.Yj
    ? a
    : g.Yj.jH(a.name || "builtin" + g.g.ul.Jv(), a);
};
g.Ld.Yw = function (a) {
  g.g.Vu.warn(
    "Blockly.Options.parseToolboxTree",
    "September 2020",
    "September 2021",
    "Blockly.utils.toolbox.parseToolboxTree"
  );
  return g.g.xa.Yw(a);
};
g.gu = function (a) {
  this.Ra = Object.create(null);
  this.u = a;
};
b = g.gu.prototype;
b.clear = function () {
  this.Ra = Object.create(null);
};
b.vs = function (a, c) {
  var d = this.ld(c, a.type),
    e = B(this.u);
  g.h.ea(!0);
  try {
    if (d && d.Ma() != a.Ma()) {
      var f = a.type;
      c != d.name && Ga(d, c, e);
      for (c = 0; c < e.length; c++) e[c].us(a.Ma(), d.Ma());
      g.h.Ga(new g.h.Xf(a));
      this.Ra[f].splice(this.po(f).indexOf(a), 1);
    } else Ga(a, c, e);
  } finally {
    g.h.ea(!1);
  }
};
b.xj = function (a, c) {
  var d = this.fg(a);
  if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.vs(d, c);
};
function Ga(a, c, d) {
  g.h.Ga(new g.h.yg(a, c));
  a.name = c;
  for (c = 0; c < d.length; c++) d[c].Os(a);
}
b.sf = function (a, c, d) {
  var e = this.ld(a, c);
  if (e) {
    if (d && e.Ma() != d)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.Ma() +
          '" which conflicts with the passed in id, "' +
          d +
          '".'
      );
    return e;
  }
  if (d && this.fg(d))
    throw Error('Variable id, "' + d + '", is already in use.');
  e = d || g.g.Qh();
  c = c || "";
  e = new g.An(this.u, a, c, e);
  a = this.Ra[c] || [];
  a.push(e);
  delete this.Ra[c];
  this.Ra[c] = a;
  return e;
};
b.Oh = function (a) {
  var c = this.fg(a);
  if (c) {
    var d = c.name,
      e = this.Pv(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = C(f, "NAME");
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
          k && c && Ha(h, c, e);
        }))
      : Ha(h, c, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
function Ha(a, c, d) {
  var e = g.h.uc();
  e || g.h.ea(!0);
  try {
    for (var f = 0; f < d.length; f++) d[f].I(!0);
    var h = a.Ra[c.type];
    a = 0;
    for (var k; (k = h[a]); a++)
      if (k.Ma() == c.Ma()) {
        h.splice(a, 1);
        g.h.Ga(new g.h.Xf(c));
        break;
      }
  } finally {
    e || g.h.ea(!1);
  }
}
b.ld = function (a, c) {
  if ((c = this.Ra[c || ""]))
    for (var d = 0, e; (e = c[d]); d++) if (g.Kd.vf(e.name, a)) return e;
  return null;
};
b.fg = function (a) {
  for (var c = Object.keys(this.Ra), d = 0; d < c.length; d++)
    for (var e = c[d], f = 0, h; (h = this.Ra[e][f]); f++)
      if (h.Ma() == a) return h;
  return null;
};
b.po = function (a) {
  return (a = this.Ra[a || ""]) ? a.slice() : [];
};
b.Ov = function (a) {
  var c = {};
  g.g.object.Re(c, this.Ra);
  a && a.tj && g.g.object.Re(c, a.tj.Ra);
  a = Object.keys(c);
  c = !1;
  for (var d = 0; d < a.length; d++) "" == a[d] && (c = !0);
  c || a.push("");
  return a;
};
b.kk = function () {
  var a = [],
    c;
  for (c in this.Ra) a = a.concat(this.Ra[c]);
  return a;
};
b.Av = function () {
  var a = [],
    c;
  for (c in this.Ra)
    for (var d = this.Ra[c], e = 0, f; (f = d[e]); e++) a.push(f.name);
  return a;
};
b.Pv = function (a) {
  for (var c = [], d = B(this.u), e = 0; e < d.length; e++) {
    var f = d[e].Th();
    if (f) for (var h = 0; h < f.length; h++) f[h].Ma() == a && c.push(d[e]);
  }
  return c;
};
g.Rb = function (a) {
  this.id = g.g.Qh();
  g.Rb.Cn[this.id] = this;
  this.options = a || new g.Ld({});
  this.L = !!this.options.L;
  this.Ad = !!this.options.Ad;
  this.Ia = this.options.Ia;
  this.Nn = new (g.C.vr(g.C.aa.oy, this.options))(this);
  this.Ap = [];
  this.Ns = [];
  this.Wq = Object.create(null);
  this.ge = [];
  this.$k = [];
  this.Zo = [];
  this.su = Object.create(null);
  this.si = Object.create(null);
  this.Ra = new g.gu(this);
  this.tj = null;
};
b = g.Rb.prototype;
b.pa = !1;
b.aw = !1;
b.cz = 1024;
b.Yq = null;
b.I = function () {
  this.ge.length = 0;
  this.clear();
  delete g.Rb.Cn[this.id];
};
g.Rb.zz = 3;
b = g.Rb.prototype;
b.gh = function (a, c) {
  a = a.Za();
  c = c.Za();
  return (
    a.y +
    g.Rb.prototype.gh.offset * a.x -
    (c.y + g.Rb.prototype.gh.offset * c.x)
  );
};
b.Fq = function (a) {
  this.Ap.push(a);
};
b.ss = function (a) {
  if (!g.g.Hq(this.Ap, a))
    throw Error("Block not present in workspace's list of top-most blocks.");
};
b.$b = function (a) {
  var c = [].concat(this.Ap);
  a &&
    1 < c.length &&
    ((this.gh.offset = Math.sin(g.g.Ic.Lx(g.Rb.zz))),
    this.L && (this.gh.offset *= -1),
    c.sort(this.gh));
  return c;
};
function Ia(a, c) {
  return a.si[c] ? a.si[c].slice(0) : [];
}
function B(a) {
  var c = a.$b(!1);
  for (a = 0; a < c.length; a++) c.push.apply(c, Ba(c[a], !1));
  return c.filter(function (d) {
    return !d.we();
  });
}
b.clear = function () {
  this.aw = !0;
  try {
    var a = g.h.uc();
    for (a || g.h.ea(!0); this.Ap.length; ) this.Ap[0].I(!1);
    for (; this.Ns.length; ) this.Ns[this.Ns.length - 1].I(!1);
    a || g.h.ea(!1);
    this.Ra.clear();
    this.tj && this.tj.clear();
  } finally {
    this.aw = !1;
  }
};
b.xj = function (a, c) {
  this.Ra.xj(a, c);
};
b.sf = function (a, c, d) {
  return this.Ra.sf(a, c, d);
};
b.Pv = function (a) {
  return this.Ra.Pv(a);
};
b.Oh = function (a) {
  this.Ra.Oh(a);
};
b.ld = function (a, c) {
  return this.Ra.ld(a, c);
};
b.fg = function (a) {
  return this.Ra.fg(a);
};
b.po = function (a) {
  return this.Ra.po(a);
};
b.Ov = function () {
  return this.Ra.Ov(this);
};
b.kk = function () {
  return this.Ra.kk();
};
b.Av = function () {
  return this.Ra.Av();
};
b.Rg = function () {
  return 0;
};
b.nj = function (a, c) {
  return new g.le(this, a, c);
};
function Ja(a) {
  return isNaN(a.options.yw) ? Infinity : a.options.yw - B(a).length;
}
function Ka(a, c) {
  if (!La(a)) return !0;
  var d = 0,
    e;
  for (e in c) {
    if (
      c[e] >
      (a.options.Qr
        ? (void 0 !== a.options.Qr[e] ? a.options.Qr[e] : Infinity) -
          Ia(a, e).length
        : Infinity)
    )
      return !1;
    d += c[e];
  }
  return d > Ja(a) ? !1 : !0;
}
function La(a) {
  return Infinity != a.options.yw || !!a.options.Qr;
}
function Ma(a, c) {
  var d = c ? a.Zo : a.$k;
  a = c ? a.$k : a.Zo;
  var e = d.pop();
  if (e) {
    for (var f = [e]; d.length && e.group && e.group == d[d.length - 1].group; )
      f.push(d.pop());
    for (d = 0; (e = f[d]); d++) a.push(e);
    f = g.h.filter(f, c);
    g.h.ab = !1;
    try {
      for (d = 0; (e = f[d]); d++) e.run(c);
    } finally {
      g.h.ab = !0;
    }
  }
}
function Na() {
  var a = A;
  a.$k.length = 0;
  a.Zo.length = 0;
  g.h.TG();
}
function E(a, c) {
  a.ge.push(c);
}
function Oa(a, c) {
  g.g.Hq(a.ge, c);
}
b.Wd = function (a) {
  return this.su[a] || null;
};
b.Cx = function (a) {
  this.Ra = a;
};
g.Rb.Cn = Object.create(null);
g.Rb.io = function (a) {
  return g.Rb.Cn[a] || null;
};
g.Rb.getAll = function () {
  var a = [],
    c;
  for (c in g.Rb.Cn) a.push(g.Rb.Cn[c]);
  return a;
};
g.sa = function (a, c, d, e, f, h) {
  this.s = a;
  this.Lh = c;
  this.uK = d;
  this.Nw = this.Mw = this.Cw = this.sx = null;
  this.cg = !1;
  d = g.sa.JD;
  this.s.L && (d = -d);
  this.DG = g.g.Ic.Lx(d);
  a.kg.appendChild(this.Ke(c, !(!f || !h)));
  this.nc = e;
  this.ws && Pa(this);
  (f && h) ||
    ((a = this.Lh.getBBox()),
    (f = a.width + 2 * g.sa.ud),
    (h = a.height + 2 * g.sa.ud));
  this.ip(f, h);
  Pa(this);
  Ra(this);
  this.ws = !0;
};
g.sa.ud = 6;
g.sa.KD = 5;
g.sa.JD = 20;
g.sa.ay = 4;
g.sa.FD = 8;
g.sa.od = null;
g.sa.qj = null;
g.sa.Px = function () {
  g.sa.od && (g.Qa(g.sa.od), (g.sa.od = null));
  g.sa.qj && (g.Qa(g.sa.qj), (g.sa.qj = null));
};
g.sa.IG = function () {
  g.Touch.ak();
  g.sa.Px();
};
b = g.sa.prototype;
b.ws = !1;
b.nc = null;
b.bh = 0;
b.wj = 0;
b.rb = 0;
b.Oc = 0;
b.pu = !0;
b.Ke = function (a, c) {
  this.mf = g.g.o.M(g.g.G.xc, {}, null);
  var d = { filter: "url(#" + this.s.Kb.ka().kr + ")" };
  g.g.userAgent.hF && (d = {});
  d = g.g.o.M(g.g.G.xc, d, this.mf);
  this.kA = g.g.o.M(g.g.G.ne, {}, d);
  this.Kq = g.g.o.M(
    g.g.G.Dc,
    { class: "blocklyDraggable", x: 0, y: 0, rx: g.sa.ud, ry: g.sa.ud },
    d
  );
  c
    ? ((this.gi = g.g.o.M(
        g.g.G.xc,
        { class: this.s.L ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.mf
      )),
      (c = 2 * g.sa.ud),
      g.g.o.M(
        g.g.G.UF,
        { points: "0,x x,x x,0".replace(/x/g, c.toString()) },
        this.gi
      ),
      g.g.o.M(
        g.g.G.hn,
        {
          class: "blocklyResizeLine",
          x1: c / 3,
          y1: c - 1,
          x2: c - 1,
          y2: c / 3,
        },
        this.gi
      ),
      g.g.o.M(
        g.g.G.hn,
        {
          class: "blocklyResizeLine",
          x1: (2 * c) / 3,
          y1: c - 1,
          x2: c - 1,
          y2: (2 * c) / 3,
        },
        this.gi
      ))
    : (this.gi = null);
  this.s.options.readOnly ||
    ((this.Mw = g.ya(this.Kq, "mousedown", this, this.HG)),
    this.gi && (this.Nw = g.ya(this.gi, "mousedown", this, this.jK)));
  this.mf.appendChild(a);
  return this.mf;
};
b.Na = function () {
  return this.mf;
};
function Sa(a, c) {
  a.mf.dataset && (a.mf.dataset.blockId = c);
}
b.HG = function (a) {
  var c = this.s.Rh(a);
  if (c) {
    if (c.pk)
      throw Error(
        "Tried to call gesture.handleBubbleStart, but the gesture had already been started."
      );
    c.Xe || (c.Xe = this);
    c.Ef = a;
  }
};
b.np = function () {};
b.ve = function () {
  return !1;
};
b.kp = function () {};
b.jK = function (a) {
  Ta(this);
  g.sa.Px();
  g.g.Fk(a) ||
    (this.s.Hx(a, new g.g.X(this.s.L ? -this.rb : this.rb, this.Oc)),
    (g.sa.od = g.ya(document, "mouseup", this, g.sa.IG)),
    (g.sa.qj = g.ya(document, "mousemove", this, this.kK)),
    g.Fc());
  a.stopPropagation();
};
b.kK = function (a) {
  this.pu = !1;
  var c = this.s;
  a = g.g.Po(a, u(c), oa(c));
  a.x /= c.scale;
  a.y /= c.scale;
  c = g.g.X.sum(c.ZA, a);
  this.ip(this.s.L ? -c.x : c.x, c.y);
  this.s.L && Pa(this);
};
function Ua(a, c) {
  a.Cw = c;
}
function Ta(a) {
  var c = a.mf.parentNode;
  return c.lastChild !== a.mf ? (c.appendChild(a.mf), !0) : !1;
}
function Va(a, c, d) {
  var e = a.s.L ? a.nc.x - c.x - a.rb : c.x + a.nc.x;
  c = c.y + a.nc.y;
  return Math.max(
    0,
    Math.min(
      1,
      ((Math.min(e + a.rb, d.Wb + d.Hb) - Math.max(e, d.Wb)) *
        (Math.min(c + a.Oc, d.ec + d.Qb) - Math.max(c, d.ec))) /
        (a.rb * a.Oc)
    )
  );
}
function Pa(a) {
  var c = a.nc.x;
  c = a.s.L ? c - (a.bh + a.rb) : c + a.bh;
  a.moveTo(c, a.wj + a.nc.y);
}
b.moveTo = function (a, c) {
  this.mf.setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.Aj = function (a) {
  !a && this.Cw && this.Cw();
};
b.Cv = function () {
  return new g.g.hf(this.rb, this.Oc);
};
b.ip = function (a, c) {
  var d = 2 * g.sa.ud;
  a = Math.max(a, d + 45);
  c = Math.max(c, d + 20);
  this.rb = a;
  this.Oc = c;
  this.Kq.setAttribute("width", a);
  this.Kq.setAttribute("height", c);
  this.gi &&
    (this.s.L
      ? this.gi.setAttribute(
          "transform",
          "translate(" + 2 * g.sa.ud + "," + (c - d) + ") scale(-1 1)"
        )
      : this.gi.setAttribute(
          "transform",
          "translate(" + (a - d) + "," + (c - d) + ")"
        ));
  if (this.pu) {
    a = this.s.Yc();
    a.Wb /= this.s.scale;
    a.Hb /= this.s.scale;
    a.ec /= this.s.scale;
    a.Qb /= this.s.scale;
    c = -this.rb / 4;
    if (!(this.rb > a.Hb)) {
      if (this.s.L) {
        d = this.nc.x - c;
        var e = d - this.rb;
        var f = a.Wb + a.Hb,
          h = a.Wb + g.Ua.Qc / this.s.scale;
      } else
        (e = c + this.nc.x),
          (d = e + this.rb),
          (h = a.Wb),
          (f = a.Wb + a.Hb - g.Ua.Qc / this.s.scale);
      this.s.L
        ? e < h
          ? (c = -(h - this.nc.x + this.rb))
          : d > f && (c = -(f - this.nc.x))
        : e < h
        ? (c = h - this.nc.x)
        : d > f && (c = f - this.nc.x - this.rb);
    }
    e = c;
    c = -this.Oc / 4;
    if (!(this.Oc > a.Qb)) {
      d = this.nc.y + c;
      f = d + this.Oc;
      h = a.ec;
      var k = a.ec + a.Qb - g.Ua.Qc / this.s.scale,
        l = this.nc.y;
      d < h ? (c = h - l) : f > k && (c = k - l - this.Oc);
    }
    h = c;
    f = this.uK.getBBox();
    c = { x: e, y: -this.Oc - this.s.Kb.ka().ln };
    d = { x: -this.rb - 30, y: h };
    h = { x: f.width, y: h };
    k = { x: e, y: f.height };
    e = f.width < f.height ? h : k;
    f = f.width < f.height ? k : h;
    h = Va(this, c, a);
    k = Va(this, d, a);
    l = Va(this, e, a);
    a = Math.max(h, k, l, Va(this, f, a));
    h == a
      ? ((this.bh = c.x), (this.wj = c.y))
      : k == a
      ? ((this.bh = d.x), (this.wj = d.y))
      : l == a
      ? ((this.bh = e.x), (this.wj = e.y))
      : ((this.bh = f.x), (this.wj = f.y));
  }
  Pa(this);
  Ra(this);
  this.sx && this.sx();
};
function Ra(a) {
  var c = [],
    d = a.rb / 2,
    e = a.Oc / 2,
    f = -a.bh,
    h = -a.wj;
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
      p = Math.cos(m),
      r = a.Cv();
    m = (r.width + r.height) / g.sa.KD;
    m = Math.min(m, r.width, r.height) / 4;
    r = 1 - g.sa.FD / k;
    f = d + r * f;
    h = e + r * h;
    r = d + m * p;
    var y = e + m * n;
    d -= m * p;
    e -= m * n;
    n = l + a.DG;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / g.sa.ay;
    k = (Math.cos(n) * k) / g.sa.ay;
    c.push("M" + r + "," + y);
    c.push(
      "C" + (r + k) + "," + (y + l) + " " + f + "," + h + " " + f + "," + h
    );
    c.push(
      "C" + f + "," + h + " " + (d + k) + "," + (e + l) + " " + d + "," + e
    );
  }
  c.push("z");
  a.kA.setAttribute("d", c.join(" "));
}
b.pd = function (a) {
  this.Kq.setAttribute("fill", a);
  this.kA.setAttribute("fill", a);
};
b.I = function () {
  this.Mw && g.Qa(this.Mw);
  this.Nw && g.Qa(this.Nw);
  g.sa.Px();
  g.g.o.removeNode(this.mf);
  this.cg = !0;
};
b.Dw = function (a, c) {
  a ? a.Zk(c.x, c.y) : this.moveTo(c.x, c.y);
  this.bh = this.s.L ? this.nc.x - c.x - this.rb : c.x - this.nc.x;
  this.wj = c.y - this.nc.y;
  Ra(this);
};
b.Za = function () {
  return new g.g.X(
    this.s.L ? -this.bh + this.nc.x - this.rb : this.nc.x + this.bh,
    this.nc.y + this.wj
  );
};
g.sa.Ye = function (a) {
  var c = g.g.o.M(
    g.g.G.Yt,
    {
      class: "blocklyText blocklyBubbleText blocklyNoPointerEvents",
      y: g.sa.ud,
    },
    null
  );
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) {
    var e = g.g.o.M(g.g.G.Lz, { dy: "1em", x: g.sa.ud }, c),
      f = document.createTextNode(a[d]);
    e.appendChild(f);
  }
  return c;
};
g.sa.HA = function (a, c, d) {
  d = new g.sa(c.u, a, c.Ob.dc, d, null, null);
  Sa(d, c.id);
  if (c.L) {
    c = a.getBBox().width;
    for (var e = 0, f; (f = a.childNodes[e]); e++)
      f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + g.sa.ud);
  }
  return d;
};
g.cd = {};
g.cd.Yv = !1;
g.cd.register = function (a) {
  if (g.cd.Yv) throw Error("CSS already injected");
  Array.prototype.push.apply(g.cd.gt, a);
  a.length = 0;
};
g.cd.xk = function (a, c) {
  if (!g.cd.Yv) {
    g.cd.Yv = !0;
    var d = g.cd.gt.join("\n");
    g.cd.gt.length = 0;
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
g.cd.gt = [
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
g.h.Fe = function (a) {
  g.h.Fe.A.constructor.call(this);
  this.Pe = "undefined" == typeof a;
  this.Sc = a ? a : "";
  this.ab = !1;
};
g.g.object.W(g.h.Fe, g.h.Abstract);
g.h.Fe.prototype.ew = !0;
g.h.Ki = function (a, c, d, e) {
  g.h.Ki.A.constructor.call(this, a ? a.u.id : void 0);
  this.lb = a ? a.id : null;
  this.element = "undefined" == typeof c ? "" : c;
  this.oldValue = "undefined" == typeof d ? "" : d;
  this.newValue = "undefined" == typeof e ? "" : e;
};
g.g.object.W(g.h.Ki, g.h.Fe);
g.h.Ki.prototype.type = g.h.du;
g.h.Ki.prototype.wa = function () {
  var a = g.h.Ki.A.wa.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.lb && (a.blockId = this.lb);
  return a;
};
g.h.Ki.prototype.la = function (a) {
  g.h.Ki.A.la.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.lb = a.blockId;
};
g.C.register(g.C.aa.fc, g.h.du, g.h.Ki);
g.h.Of = function (a, c, d) {
  g.h.Of.A.constructor.call(this, a ? a.u.id : void 0);
  this.lb = a ? a.id : null;
  this.vm = c;
  this.wu = d;
};
g.g.object.W(g.h.Of, g.h.Fe);
g.h.Of.prototype.type = g.h.Pp;
g.h.Of.prototype.wa = function () {
  var a = g.h.Of.A.wa.call(this);
  a.isOpen = this.vm;
  a.bubbleType = this.wu;
  a.blockId = this.lb;
  return a;
};
g.h.Of.prototype.la = function (a) {
  g.h.Of.A.la.call(this, a);
  this.vm = a.isOpen;
  this.wu = a.bubbleType;
  this.lb = a.blockId;
};
g.C.register(g.C.aa.fc, g.h.Pp, g.h.Of);
g.me = function (a) {
  this.S = a;
  this.ce = null;
};
b = g.me.prototype;
b.uA = !0;
b.vq = 17;
b.hc = null;
b.aj = null;
function Wa(a) {
  a.ce ||
    ((a.ce = g.g.o.M(g.g.G.xc, { class: "blocklyIconGroup" }, null)),
    a.S.Nb && g.g.o.Fa(a.ce, "blocklyIconGroupReadonly"),
    a.kv(a.ce),
    a.S.Na().appendChild(a.ce),
    g.ya(a.ce, "mouseup", a, a.Uv),
    a.ui());
}
b.I = function () {
  g.g.o.removeNode(this.ce);
  this.ce = null;
  this.Gb(!1);
  this.S = null;
};
b.ui = function () {};
b.isVisible = function () {
  return !!this.hc;
};
b.Uv = function (a) {
  this.S.u.Gc() || this.S.Nb || g.g.Fk(a) || this.Gb(!this.isVisible());
};
b.oc = function () {
  this.isVisible() && this.hc.pd(this.S.style.Pi);
};
function Xa(a) {
  var c = a.S.Za(),
    d = g.g.yf(a.ce);
  c = new g.g.X(c.x + d.x + a.vq / 2, c.y + d.y + a.vq / 2);
  g.g.X.vf(a.aj, c) ||
    ((a.aj = c), a.isVisible() && ((a = a.hc), (a.nc = c), a.ws && Pa(a)));
}
g.g.Vu = {};
g.g.Vu.warn = function (a, c, d, e) {
  a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
  e && (a += "\nUse " + e + " instead.");
  console.warn(a);
};
g.Bn = function (a) {
  g.Bn.A.constructor.call(this, a);
  Wa(this);
  this.ni = {};
};
g.g.object.W(g.Bn, g.me);
b = g.Bn.prototype;
b.uA = !1;
b.kv = function (a) {
  g.g.o.M(
    g.g.G.ne,
    {
      class: "blocklyIconShape",
      d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z",
    },
    a
  );
  g.g.o.M(
    g.g.G.ne,
    {
      class: "blocklyIconSymbol",
      d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z",
    },
    a
  );
  g.g.o.M(
    g.g.G.Dc,
    { class: "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" },
    a
  );
};
b.Gb = function (a) {
  a != this.isVisible() &&
    (g.h.Ga(new g.h.Of(this.S, a, "warning")), a ? this.Zq() : this.hr());
};
b.Zq = function () {
  this.Rk = g.sa.Ye(this.$d());
  this.hc = g.sa.HA(this.Rk, this.S, this.aj);
  this.oc();
};
b.hr = function () {
  this.hc.I();
  this.Rk = this.hc = null;
};
function Ya(a, c, d) {
  a.ni[d] != c &&
    (c ? (a.ni[d] = c) : delete a.ni[d], a.isVisible() && (a.Gb(!1), a.Gb(!0)));
}
b.$d = function () {
  var a = [],
    c;
  for (c in this.ni) a.push(this.ni[c]);
  return a.join("\n");
};
b.I = function () {
  this.S.$e = null;
  g.me.prototype.I.call(this);
};
g.Comment = function (a) {
  g.Comment.A.constructor.call(this, a);
  this.md = a.Ie;
  this.md.text = this.md.text || "";
  this.Au = "";
  this.$r = this.Yr = this.js = this.od = null;
  Wa(this);
};
g.g.object.W(g.Comment, g.me);
b = g.Comment.prototype;
b.kv = function (a) {
  g.g.o.M(g.g.G.dt, { class: "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
  g.g.o.M(
    g.g.G.ne,
    {
      class: "blocklyIconSymbol",
      d:
        "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z",
    },
    a
  );
  g.g.o.M(
    g.g.G.Dc,
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
b.Nu = function () {
  this.bo = g.g.o.M(g.g.G.ME, { x: g.sa.ud, y: g.sa.ud }, null);
  var a = document.createElementNS(g.g.o.rl, "body");
  a.setAttribute("xmlns", g.g.o.rl);
  a.className = "blocklyMinimalBody";
  var c = (this.Yk = document.createElementNS(g.g.o.rl, "textarea"));
  c.className = "blocklyCommentTextarea";
  c.setAttribute("dir", this.S.L ? "RTL" : "LTR");
  c.value = this.md.text;
  Za(this);
  a.appendChild(c);
  this.bo.appendChild(a);
  this.od = g.ya(c, "mouseup", this, this.BK, !0, !0);
  this.js = g.ya(c, "wheel", this, function (d) {
    d.stopPropagation();
  });
  this.Yr = g.ya(c, "change", this, function () {
    this.Au != this.md.text &&
      g.h.Ga(new g.h.lh(this.S, "comment", null, this.Au, this.md.text));
  });
  this.$r = g.ya(c, "input", this, function () {
    this.md.text = c.value;
  });
  setTimeout(c.focus.bind(c), 0);
  return this.bo;
};
b.ui = function () {
  g.Comment.A.ui.call(this);
  this.isVisible() && (this.hr(), this.Zq());
};
b.eJ = function () {
  this.isVisible() && ((this.md.size = this.hc.Cv()), Za(this));
};
function Za(a) {
  var c = a.md.size,
    d = 2 * g.sa.ud,
    e = c.width - d;
  c = c.height - d;
  a.bo.setAttribute("width", e);
  a.bo.setAttribute("height", c);
  a.Yk.style.width = e - 4 + "px";
  a.Yk.style.height = c - 4 + "px";
}
b.Gb = function (a) {
  a != this.isVisible() &&
    (g.h.Ga(new g.h.Of(this.S, a, "comment")),
    (this.md.bx = a) ? this.Zq() : this.hr());
};
b.Zq = function () {
  if (!this.S.ee() || g.g.userAgent.df)
    (this.Rk = g.sa.Ye(this.S.Ie.text)),
      (this.hc = g.sa.HA(this.Rk, this.S, this.aj));
  else {
    this.hc = new g.sa(
      this.S.u,
      this.Nu(),
      this.S.Ob.dc,
      this.aj,
      this.md.size.width,
      this.md.size.height
    );
    Sa(this.hc, this.S.id);
    var a = this.eJ.bind(this);
    this.hc.sx = a;
  }
  this.oc();
};
b.hr = function () {
  this.od && (g.Qa(this.od), (this.od = null));
  this.js && (g.Qa(this.js), (this.js = null));
  this.Yr && (g.Qa(this.Yr), (this.Yr = null));
  this.$r && (g.Qa(this.$r), (this.$r = null));
  this.hc.I();
  this.Rk = this.bo = this.Yk = this.hc = null;
};
b.BK = function () {
  Ta(this.hc) && this.Yk.focus();
  this.Au = this.md.text;
};
b.Cv = function () {
  return this.md.size;
};
b.ip = function (a, c) {
  this.hc
    ? this.hc.ip(a, c)
    : ((this.md.size.width = a), (this.md.size.height = c));
};
b.I = function () {
  this.S.Kn = null;
  g.me.prototype.I.call(this);
};
g.cd.register(
  ".blocklyCommentTextarea {,background-color: #fef49c;,border: 0;,outline: 0;,margin: 0;,padding: 3px;,resize: none;,display: block;,text-overflow: hidden;,}".split(
    ","
  )
);
g.Pj = function (a, c, d, e) {
  this.s = a;
  this.Js = c;
  this.ni = d.text;
  this.Sk = new g.g.X(0, 0);
  this.Yh = e;
  this.Mq = d.callbackKey || d.callbackkey;
  this.JA = d["web-class"] || null;
  this.od = null;
  this.info = d;
};
g.Pj.xF = 5;
g.Pj.yF = 2;
b = g.Pj.prototype;
b.width = 0;
b.height = 0;
b.Ya = function () {
  var a = this.Yh ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
  this.JA && (a += " " + this.JA);
  this.N = g.g.o.M(g.g.G.xc, { class: a }, this.s.xb);
  if (!this.Yh)
    var c = g.g.o.M(
      g.g.G.Dc,
      { class: "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 },
      this.N
    );
  a = g.g.o.M(
    g.g.G.Dc,
    {
      class: this.Yh
        ? "blocklyFlyoutLabelBackground"
        : "blocklyFlyoutButtonBackground",
      rx: 4,
      ry: 4,
    },
    this.N
  );
  var d = g.g.o.M(
      g.g.G.Yt,
      {
        class: this.Yh ? "blocklyFlyoutLabelText" : "blocklyText",
        x: 0,
        y: 0,
        "text-anchor": "middle",
      },
      this.N
    ),
    e = g.g.xe(this.ni);
  this.s.L && (e += "\u200f");
  d.textContent = e;
  this.Yh &&
    ((this.Kx = d),
    this.s.Ac.subscribe(this.Kx, "flyoutForegroundColour", "fill"));
  var f = g.g.style.getComputedStyle(d, "fontSize"),
    h = g.g.style.getComputedStyle(d, "fontWeight"),
    k = g.g.style.getComputedStyle(d, "fontFamily");
  this.width = g.g.o.pB(d, f, h, k);
  e = g.g.o.hC(e, f, h, k);
  this.height = e.height;
  this.Yh ||
    ((this.width += 2 * g.Pj.xF),
    (this.height += 2 * g.Pj.yF),
    c.setAttribute("width", this.width),
    c.setAttribute("height", this.height));
  a.setAttribute("width", this.width);
  a.setAttribute("height", this.height);
  d.setAttribute("x", this.width / 2);
  d.setAttribute("y", this.height / 2 - e.height / 2 + e.lf);
  $a(this);
  this.od = g.ya(this.N, "mouseup", this, this.qJ);
  return this.N;
};
b.show = function () {
  $a(this);
  this.N.setAttribute("display", "block");
};
function $a(a) {
  a.N.setAttribute("transform", "translate(" + a.Sk.x + "," + a.Sk.y + ")");
}
b.moveTo = function (a, c) {
  this.Sk.x = a;
  this.Sk.y = c;
  $a(this);
};
b.I = function () {
  this.od && g.Qa(this.od);
  this.N && g.g.o.removeNode(this.N);
  this.Kx && this.s.Ac.unsubscribe(this.Kx);
};
b.qJ = function (a) {
  (a = this.Js.Rh(a)) && a.cancel();
  this.Yh && this.Mq
    ? console.warn("Labels should not have callbacks. Label text: " + this.ni)
    : this.Yh || (this.Mq && ab(this.Js, this.Mq))
    ? this.Yh || ab(this.Js, this.Mq)(this)
    : console.warn("Buttons should have callbacks. Button text: " + this.ni);
};
g.cd.register(
  ".blocklyFlyoutButton {,fill: #888;,cursor: default;,},.blocklyFlyoutButtonShadow {,fill: #666;,},.blocklyFlyoutButton:hover {,fill: #aaa;,},.blocklyFlyoutLabel {,cursor: default;,},.blocklyFlyoutLabelBackground {,opacity: 0;,}".split(
    ","
  )
);
g.g.ua = {};
g.g.ua.HD = "aria-";
g.g.ua.$F = "role";
g.g.ua.Ii = {
  SL: "grid",
  TL: "gridcell",
  SE: "group",
  nF: "listbox",
  CF: "menu",
  DF: "menuitem",
  iM: "menuitemcheckbox",
  NF: "option",
  VF: "presentation",
  Tt: "row",
  mG: "tree",
  nG: "treeitem",
};
g.g.ua.State = {
  Ss: "activedescendant",
  kL: "colcount",
  kE: "disabled",
  wE: "expanded",
  Uy: "invalid",
  jF: "label",
  kF: "labelledby",
  lF: "level",
  YM: "orientation",
  dN: "posinset",
  jN: "rowcount",
  Fl: "selected",
  mN: "setsize",
  pG: "valuemax",
  qG: "valuemin",
};
g.g.ua.Kf = function (a, c) {
  a.setAttribute(g.g.ua.$F, c);
};
g.g.ua.qd = function (a, c, d) {
  Array.isArray(d) && (d = d.join(" "));
  a.setAttribute(g.g.ua.HD + c, d);
};
g.cu = function (a, c, d) {
  this.Vv = a.toolboxitemid || g.g.ul.Jv();
  this.kw = (this.di = d || null) ? this.di.kw + 1 : 0;
  this.Ks = a;
  this.ci = c;
  this.s = this.ci.s;
};
b = g.cu.prototype;
b.R = function () {};
b.no = function () {
  return null;
};
b.Ma = function () {
  return this.Vv;
};
b.getParent = function () {
  return null;
};
b.Wg = function () {
  return !1;
};
b.Ak = function () {
  return !1;
};
b.I = function () {};
g.Ee = function (a, c, d) {
  g.Ee.A.constructor.call(this, a, c, d);
  this.mj = g.g.xe(a.name);
  this.hd = bb(this, a);
  this.fw = this.wo = this.fp = this.Te = this.Pc = null;
  this.kd = this.qw();
  g.g.object.Re(this.kd, a.cssconfig || a.cssConfig);
  this.wI = this.bw = !1;
  this.Vi = [];
  this.HC(a);
};
g.g.object.W(g.Ee, g.cu);
g.Ee.vj = "category";
g.Ee.ZI = 19;
g.Ee.borderWidth = 8;
g.Ee.fH = "#57e";
b = g.Ee.prototype;
b.qw = function () {
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
b.HC = function (a) {
  var c = a.contents;
  if (a.custom) this.Vi = a.custom;
  else if (c) {
    a = 0;
    for (var d; (d = c[a]); a++) this.Vi.push(d);
  }
};
b.R = function () {
  this.Ke();
  "true" == this.Ks.hidden && this.Ka();
};
b.Ke = function () {
  this.Pc = this.Mu();
  g.g.ua.Kf(this.Pc, g.g.ua.Ii.nG);
  g.g.ua.qd(this.Pc, g.g.ua.State.Fl, !1);
  g.g.ua.qd(this.Pc, g.g.ua.State.lF, this.kw);
  var a = document.createElement("div");
  g.g.o.Fa(a, this.kd.row);
  var c = g.Ee.ZI * this.kw;
  c = c.toString() + "px";
  this.s.L ? (a.style.paddingRight = c) : (a.style.paddingLeft = c);
  this.Te = a;
  this.Te.style.pointerEvents = "auto";
  this.Pc.appendChild(this.Te);
  a = document.createElement("div");
  g.g.o.Fa(a, this.kd.rowcontentcontainer);
  this.fp = a;
  this.fp.style.pointerEvents = "none";
  this.Te.appendChild(this.fp);
  this.wo = this.GA();
  g.g.ua.Kf(this.wo, g.g.ua.Ii.VF);
  this.fp.appendChild(this.wo);
  a = this.mj;
  c = document.createElement("span");
  c.setAttribute("id", this.Ma() + ".label");
  c.textContent = a;
  g.g.o.Fa(c, this.kd.label);
  this.fw = c;
  this.fp.appendChild(this.fw);
  g.g.ua.qd(this.Pc, g.g.ua.State.kF, this.fw.getAttribute("id"));
  cb(this, this.hd);
  return this.Pc;
};
b.Mu = function () {
  var a = document.createElement("div");
  g.g.o.Fa(a, this.kd.container);
  return a;
};
b.GA = function () {
  var a = document.createElement("span");
  this.ci.rk || g.g.o.Fa(a, this.kd.icon);
  a.style.display = "inline-block";
  return a;
};
b.Fm = function () {
  this.hd = bb(this, this.Ks);
  cb(this, this.hd);
};
function cb(a, c) {
  c &&
    ((c = g.Ee.borderWidth + "px solid " + (c || "#ddd")),
    a.s.L ? (a.Te.style.borderRight = c) : (a.Te.style.borderLeft = c));
}
function bb(a, c) {
  var d = c.categorystyle || c.categoryStyle;
  if ((c = c.colour) && d)
    console.warn(
      'Toolbox category "' + a.mj + '" must not have both a style and a colour'
    );
  else {
    if (d)
      a: {
        c = a.s.Pg();
        if (d && c) {
          if ((c = c.Pq[d]) && c.Cb) {
            a = db(a, c.Cb);
            break a;
          }
          console.warn(
            'Style "' + d + '" must exist and contain a colour value'
          );
        }
        a = "";
      }
    else a = db(a, c);
    return a;
  }
  return "";
}
b.kB = function () {
  return this.Te;
};
function db(a, c) {
  c = g.g.xe(c);
  if (null == c || "" === c) return "";
  var d = Number(c);
  if (isNaN(d)) {
    if ((d = g.g.Cb.parse(c))) return d;
    console.warn(
      'Toolbox category "' + a.mj + '" has unrecognized colour attribute: ' + c
    );
    return "";
  }
  return g.qI(d);
}
b.Bs = function (a) {
  this.Pc.style.display = a ? "block" : "none";
  this.bw = !a;
  this.ci.pb == this && eb(this.ci, null);
};
b.Ka = function () {
  this.Bs(!1);
};
b.show = function () {
  this.Bs(!0);
};
b.isVisible = function () {
  var a;
  if ((a = !this.bw))
    a: {
      for (a = this; a.getParent(); )
        if (((a = a.getParent()), !a.ik)) {
          a = !1;
          break a;
        }
      a = !0;
    }
  return a;
};
b.Wg = function () {
  return this.isVisible() && !this.wI;
};
b.BC = function () {};
function fb(a, c) {
  if (c) {
    var d = db(a, g.Ee.fH);
    a.Te.style.backgroundColor = a.hd || d;
    g.g.o.Fa(a.Te, a.kd.selected);
  } else (a.Te.style.backgroundColor = ""), g.g.o.Vb(a.Te, a.kd.selected);
  g.g.ua.qd(a.Pc, g.g.ua.State.Fl, c);
}
b.Yd = function () {
  return this.mj;
};
b.getParent = function () {
  return this.di;
};
b.no = function () {
  return this.Pc;
};
b.I = function () {
  g.g.o.removeNode(this.Pc);
};
g.cd.register([
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
g.C.register(g.C.aa.Nl, g.Ee.vj, g.Ee);
g.wg = function (a, c) {
  g.wg.A.constructor.call(this, a, c);
  this.kd = { container: "blocklyTreeSeparator" };
  g.g.object.Re(this.kd, a.cssconfig || a.cssConfig);
};
g.g.object.W(g.wg, g.cu);
g.wg.vj = "sep";
g.wg.prototype.R = function () {
  this.Ke();
};
g.wg.prototype.Ke = function () {
  var a = document.createElement("div");
  g.g.o.Fa(a, this.kd.container);
  return (this.Pc = a);
};
g.wg.prototype.no = function () {
  return this.Pc;
};
g.wg.prototype.I = function () {
  g.g.o.removeNode(this.Pc);
};
g.cd.register(
  '.blocklyTreeSeparator {,border-bottom: solid #e5e5e5 1px;,height: 0;,margin: 5px 0;,},.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {,border-right: solid #e5e5e5 1px;,border-bottom: none;,height: auto;,margin: 0 5px 0 5px;,padding: 5px 0;,width: 0;,}'.split(
    ","
  )
);
g.C.register(g.C.aa.Nl, g.wg.vj, g.wg);
g.Qf = function (a, c, d) {
  this.vp = null;
  this.ik = !1;
  this.Ls = [];
  g.Qf.A.constructor.call(this, a, c, d);
};
g.g.object.W(g.Qf, g.Ee);
g.Qf.vj = "collapsibleCategory";
b = g.Qf.prototype;
b.qw = function () {
  var a = g.Qf.A.qw.call(this);
  a.contents = "blocklyToolboxContents";
  return a;
};
b.HC = function (a) {
  var c = a.contents,
    d = !0;
  if (a.custom) this.Vi = a.custom;
  else if (c) {
    a = 0;
    for (var e; (e = c[a]); a++)
      !g.C.mI(e.kind) || (e.kind.toLowerCase() == g.wg.vj && d)
        ? (this.Vi.push(e), (d = !0))
        : (this.Ou(e), (d = !1));
  }
};
b.Ou = function (a) {
  var c = a.kind;
  "CATEGORY" == c.toUpperCase() && g.g.xa.TB(a) && (c = g.Qf.vj);
  a = new (g.C.jo(g.C.aa.Nl, c))(a, this.ci, this);
  this.Ls.push(a);
};
b.R = function () {
  g.Qf.A.R.call(this);
  gb(this, "true" == this.Ks.expanded || this.Ks.expanded);
};
b.Ke = function () {
  g.Qf.A.Ke.call(this);
  var a = this.Ls,
    c = document.createElement("div");
  g.g.o.Fa(c, this.kd.contents);
  for (var d = 0; d < a.length; d++) {
    var e = a[d];
    e.R();
    c.appendChild(e.no());
    e.kB && e.Te.setAttribute("id", e.Ma());
  }
  this.vp = c;
  g.g.ua.Kf(this.vp, g.g.ua.Ii.SE);
  this.Pc.appendChild(this.vp);
  return this.Pc;
};
b.GA = function () {
  var a = document.createElement("span");
  this.ci.rk || (g.g.o.Fa(a, this.kd.icon), (a.style.visibility = "visible"));
  a.style.display = "inline-block";
  return a;
};
function gb(a, c) {
  if (a.ik != c) {
    if ((a.ik = c)) {
      a.vp.style.display = "block";
      var d = a.wo;
      d && (g.g.o.UC(d, a.kd.closedicon), g.g.o.Fa(d, a.kd.openicon));
    } else if (((a.vp.style.display = "none"), (d = a.wo)))
      g.g.o.UC(d, a.kd.openicon), g.g.o.Fa(d, a.kd.closedicon);
    g.g.ua.qd(a.Pc, g.g.ua.State.wE, c);
    a = a.ci;
    c = a.s;
    d = a.Ce.getBoundingClientRect();
    c.translate(
      a.Ia == g.De ? c.scrollX + d.width : c.scrollX,
      a.Ia == g.Xj ? c.scrollY + d.height : c.scrollY
    );
    g.Om(c);
  }
}
b.Bs = function (a) {
  this.Pc.style.display = a ? "block" : "none";
  for (var c = 0, d; (d = this.Ls[c]); c++) d.Bs(a);
  this.bw = !a;
  this.ci.pb == this && eb(this.ci, null);
};
b.Ak = function () {
  return !0;
};
b.BC = function () {
  gb(this, !this.ik);
};
b.no = function () {
  return this.Pc;
};
g.C.register(g.C.aa.Nl, g.Qf.vj, g.Qf);
g.h.Bh = function (a, c, d) {
  g.h.Bh.A.constructor.call(this, d);
  this.tC = a;
  this.oC = c;
};
g.g.object.W(g.h.Bh, g.h.Fe);
g.h.Bh.prototype.type = g.h.Iz;
g.h.Bh.prototype.wa = function () {
  var a = g.h.Bh.A.wa.call(this);
  a.oldItem = this.tC;
  a.newItem = this.oC;
  return a;
};
g.h.Bh.prototype.la = function (a) {
  g.h.Bh.A.la.call(this, a);
  this.tC = a.oldItem;
  this.oC = a.newItem;
};
g.C.register(g.C.aa.fc, g.h.Iz, g.h.Bh);
g.F = function (a, c, d) {
  if (!c) throw Error("Cannot create a node without a location.");
  this.Dp = a;
  this.qm = g.F.vI(a);
  this.Ea = c;
  this.Rs = null;
  (a = d || null) && a.CD && (this.Rs = a.CD);
};
g.F.types = {
  Cc: "field",
  lc: "block",
  ef: "input",
  Uj: "output",
  Jd: "next",
  Md: "previous",
  tg: "stack",
  Vc: "workspace",
};
g.F.Fi = !1;
g.F.hE = -20;
g.F.vI = function (a) {
  switch (a) {
    case g.F.types.Md:
    case g.F.types.Jd:
    case g.F.types.ef:
    case g.F.types.Uj:
      return !0;
  }
  return !1;
};
g.F.am = function (a) {
  return a ? new g.F(g.F.types.Cc, a) : null;
};
g.F.Eg = function (a) {
  return a
    ? a.type == g.jb || (a.type == g.zb && a.Og())
      ? g.F.dk(a.Og())
      : a.type == g.zb
      ? new g.F(g.F.types.Jd, a)
      : a.type == g.Tf
      ? new g.F(g.F.types.Uj, a)
      : a.type == g.Uf
      ? new g.F(g.F.types.Md, a)
      : null
    : null;
};
g.F.dk = function (a) {
  return a && a.connection ? new g.F(g.F.types.ef, a.connection) : null;
};
g.F.Dg = function (a) {
  return a ? new g.F(g.F.types.lc, a) : null;
};
g.F.Rn = function (a) {
  return a ? new g.F(g.F.types.tg, a) : null;
};
g.F.bm = function (a, c) {
  return c && a ? new g.F(g.F.types.Vc, a, { CD: c }) : null;
};
g.F.Pu = function (a) {
  var c = a.ba || a.O;
  return c ? g.F.Eg(c) : g.F.Dg(a);
};
b = g.F.prototype;
b.mb = function () {
  return this.Dp;
};
function hb(a, c) {
  a = a.Ea;
  a instanceof g.le || (a = a.Y());
  if (!a || !a.u) return null;
  var d = a.Zd();
  a = d.u.$b(!0);
  for (var e = 0, f; (f = a[e]); e++)
    if (d.id == f.id)
      return (
        (c = e + (c ? 1 : -1)), -1 == c || c == a.length ? null : g.F.Rn(a[c])
      );
  throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}
function ib(a) {
  if (!a) return null;
  do var c = a.ba && a.ba.ra();
  while (c && t(c) == a && (a = c));
  return (c = a.ba || a.O) && c.na && c.na.Og() ? g.F.dk(c.na.Og()) : g.F.Rn(a);
}
b.Y = function () {
  return this.mb() === g.F.types.lc
    ? this.Ea
    : this.mb() === g.F.types.tg
    ? this.Ea
    : this.mb() === g.F.types.Vc
    ? null
    : this.Ea.Y();
};
b.next = function () {
  switch (this.Dp) {
    case g.F.types.tg:
      return hb(this, !0);
    case g.F.types.Uj:
      var a = this.Ea;
      return g.F.Dg(a.Y());
    case g.F.types.Cc:
      a: {
        var c = this.Ea,
          d = c.Og();
        a = c.Y();
        c = d.gb.indexOf(c) + 1;
        d = a.U.indexOf(d);
        for (var e; (e = a.U[d]); d++) {
          for (var f = e.gb; c < f.length; ) {
            if (jb(f[c]) || g.F.Fi) {
              a = g.F.am(f[c]);
              break a;
            }
            c++;
          }
          c = 0;
          if (e.connection) {
            a = g.F.dk(e);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.ef:
      a: {
        c = this.Ea.Og();
        a = c.Y();
        for (c = a.U.indexOf(c) + 1; (d = a.U[c]); c++) {
          e = d.gb;
          f = 0;
          for (var h; (h = e[f]); f++)
            if (jb(h) || g.F.Fi) {
              a = g.F.am(h);
              break a;
            }
          if (d.connection) {
            a = g.F.dk(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.lc:
      return g.F.Eg(this.Ea.Z);
    case g.F.types.Md:
      return (a = this.Ea), g.F.Dg(a.Y());
    case g.F.types.Jd:
      return (a = this.Ea), g.F.Eg(a.na);
  }
  return null;
};
b.Ug = function () {
  switch (this.Dp) {
    case g.F.types.Vc:
      var a = this.Ea.$b(!0);
      if (0 < a.length) return g.F.Rn(a[0]);
      break;
    case g.F.types.tg:
      a = this.Ea;
      var c = a.ba || a.O;
      return c ? g.F.Eg(c) : g.F.Dg(a);
    case g.F.types.lc:
      a = this.Ea;
      a: {
        a = a.U;
        c = 0;
        for (var d; (d = a[c]); c++) {
          for (var e = d.gb, f = 0, h; (h = e[f]); f++)
            if (jb(h) || g.F.Fi) {
              a = g.F.am(h);
              break a;
            }
          if (d.connection) {
            a = g.F.dk(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.ef:
      return g.F.Eg(this.Ea.na);
  }
  return null;
};
b.If = function () {
  switch (this.Dp) {
    case g.F.types.tg:
      return hb(this, !1);
    case g.F.types.Cc:
      a: {
        var a = this.Ea;
        var c = a.Og();
        var d = a.Y();
        a = c.gb.indexOf(a) - 1;
        for (var e = d.U.indexOf(c), f; (f = d.U[e]); e--) {
          if (f.connection && f !== c) {
            c = g.F.dk(f);
            break a;
          }
          for (f = f.gb; -1 < a; ) {
            if (jb(f[a]) || g.F.Fi) {
              c = g.F.am(f[a]);
              break a;
            }
            a--;
          }
          0 <= e - 1 && (a = d.U[e - 1].gb.length - 1);
        }
        c = null;
      }
      return c;
    case g.F.types.ef:
      a: {
        c = this.Ea.Og();
        d = c.Y();
        for (a = d.U.indexOf(c); (e = d.U[a]); a--) {
          if (e.connection && e !== c) {
            c = g.F.dk(e);
            break a;
          }
          e = e.gb;
          f = e.length - 1;
          for (var h; (h = e[f]); f--)
            if (jb(h) || g.F.Fi) {
              c = g.F.am(h);
              break a;
            }
        }
        c = null;
      }
      return c;
    case g.F.types.lc:
      return (c = this.Ea), g.F.Eg(c.ba || c.O);
    case g.F.types.Md:
      c = this.Ea;
      if ((c = c.na) && !c.Og()) return g.F.Eg(c);
      break;
    case g.F.types.Jd:
      return (c = this.Ea), g.F.Dg(c.Y());
  }
  return null;
};
b.Yg = function () {
  switch (this.Dp) {
    case g.F.types.tg:
      var a = this.Ea,
        c = a.Za();
      return g.F.bm(a.u, new g.g.X(c.x, c.y + g.F.hE));
    case g.F.types.Uj:
      return (a = this.Ea), (c = a.na) ? g.F.Eg(c) : g.F.Rn(a.Y());
    case g.F.types.Cc:
      return g.F.Dg(this.Ea.Y());
    case g.F.types.ef:
      return (a = this.Ea), g.F.Dg(a.Y());
    case g.F.types.lc:
      return (a = this.Ea), ib(a);
    case g.F.types.Md:
      return (a = this.Ea), ib(a.Y());
    case g.F.types.Jd:
      return (a = this.Ea), ib(a.Y());
  }
  return null;
};
g.navigation = {};
g.navigation.ym = null;
g.navigation.Il = 1;
g.navigation.Wf = 2;
g.navigation.Jl = 3;
g.navigation.Zz = 40;
g.navigation.Le = g.navigation.Wf;
g.navigation.Ab = {
  Md: "previous",
  Jd: "next",
  vt: "in",
  Lt: "out",
  Ty: "insert",
  zF: "mark",
  lE: "disconnect",
  zq: "toolbox",
  vE: "exit",
  jG: "toggle_keyboard_nav",
  JF: "move workspace cursor up",
  GF: "move workspace cursor down",
  HF: "move workspace cursor left",
  IF: "move workspace cursor right",
};
g.navigation.kn = "local_marker_1";
g.navigation.Xd = function () {
  return g.navigation.Ng().Xd(g.navigation.kn);
};
g.navigation.Ng = function () {
  return g.Mg();
};
g.navigation.gB = function (a) {
  if ((a = a.Ja))
    if (
      ((g.navigation.Le = g.navigation.Jl),
      g.navigation.WC(!1),
      g.navigation.Xd().hb || g.navigation.vw(),
      !a.pb && 0 < a.Db.length)
    ) {
      var c = a.Db[0];
      c.Wg() && eb(a, c);
    }
};
g.navigation.fB = function (a) {
  g.navigation.Le = g.navigation.Il;
  var c = a.Ja;
  a = c ? c.ic() : a.ic();
  g.navigation.Xd().hb || g.navigation.vw();
  a &&
    a.s &&
    ((a = a.s.$b(!0)),
    0 < a.length && ((a = a[0]), (a = g.F.Rn(a)), F(g.navigation.im(), a)));
};
g.navigation.pr = function (a) {
  g.Fc();
  var c = a.Fb(),
    d = !!a.Ja,
    e = a.$b(!0);
  g.navigation.WC(d);
  g.navigation.Le = g.navigation.Wf;
  0 < e.length
    ? F(c, g.F.Pu(e[0]))
    : ((a = g.F.bm(a, new g.g.X(100, 100))), F(c, a));
};
g.navigation.im = function () {
  var a = g.navigation.Ng(),
    c = null;
  a.pa && (c = (a = (c = a.Ja) ? c.ic() : a.ic()) ? a.s.Fb() : null);
  return c;
};
g.navigation.uI = function (a) {
  var c = a.ic();
  if (c && c.isVisible()) {
    var d = g.navigation.im().hb.Ea;
    d.isEnabled()
      ? ((c = kb(c, d)),
        c.Ha(),
        Da(c, !0),
        F(a.Fb(), g.F.Dg(c)),
        g.navigation.iC() ||
          g.navigation.Ed(
            "Something went wrong while inserting a block from the flyout."
          ),
        g.navigation.pr(a),
        F(a.Fb(), g.F.Pu(c)),
        g.navigation.hK())
      : g.navigation.Ed("Can't insert a disabled block.");
  } else
    g.navigation.Ed(
      "Trying to insert from the flyout when the flyout does not  exist or is not visible"
    );
};
g.navigation.WC = function (a) {
  g.navigation.im() &&
    (g.navigation.im().Ka(), a && g.navigation.Ng().ic().Ka());
};
g.navigation.LI = function () {
  var a = g.navigation.Xd().hb,
    c = g.navigation.Ng().Fb().hb;
  if (!a) return g.navigation.Ed("Cannot insert with no marked node."), !1;
  if (!c) return g.navigation.Ed("Cannot insert with no cursor node."), !1;
  a = a.mb();
  c = c.mb();
  return a == g.F.types.Cc
    ? (g.navigation.Ed("Should not have been able to mark a field."), !1)
    : a == g.F.types.lc
    ? (g.navigation.Ed("Should not have been able to mark a block."), !1)
    : a == g.F.types.tg
    ? (g.navigation.Ed("Should not have been able to mark a stack."), !1)
    : c == g.F.types.Cc
    ? (g.navigation.Ed("Cannot attach a field to anything else."), !1)
    : c == g.F.types.Vc
    ? (g.navigation.Ed("Cannot attach a workspace to anything else."), !1)
    : !0;
};
g.navigation.RI = function (a, c) {
  if (!a) return !1;
  if (a.Oa)
    return g.navigation.Ed("Cannot move a shadow block to the workspace."), !1;
  a.getParent() && x(a, !1);
  a.moveTo(c.Rs);
  return !0;
};
g.navigation.iC = function () {
  var a = g.navigation.Xd().hb,
    c = g.navigation.Ng().Fb().hb;
  if (!g.navigation.LI()) return !1;
  var d = a.mb(),
    e = c.mb(),
    f = c.Ea,
    h = a.Ea;
  if (a.qm && c.qm) return g.navigation.ag(f, h);
  if (a.qm && (e == g.F.types.lc || e == g.F.types.tg))
    return g.navigation.RB(f, h);
  if (d == g.F.types.Vc) return (c = c ? c.Y() : null), g.navigation.RI(c, a);
  g.navigation.Ed("Unexpected state in Blockly.navigation.modify_.");
  return !1;
};
g.navigation.qH = function (a, c) {
  var d = a.Y(),
    e = c.Y();
  d.Zd() == e.Zd() &&
    (-1 < q(d, !1).indexOf(e)
      ? g.navigation.xr(c).disconnect()
      : g.navigation.xr(a).disconnect());
};
g.navigation.Bw = function (a, c) {
  if (!a || !c) return !1;
  var d = a.Y();
  return sa(lb(a), a, c, !1)
    ? (g.navigation.qH(a, c), v(c) || mb(d.Zd(), a, c), c.connect(a), !0)
    : !1;
};
g.navigation.xr = function (a) {
  var c = a.Y();
  return v(a) ? (c.ba ? c.ba : c.O ? c.O : null) : a;
};
g.navigation.zB = function (a) {
  return v(a) ? a : a.na ? a.na : null;
};
g.navigation.ag = function (a, c) {
  if (!a || !c) return !1;
  var d = g.navigation.xr(a),
    e = g.navigation.zB(c),
    f = g.navigation.zB(a),
    h = g.navigation.xr(c);
  if (
    (d && e && g.navigation.Bw(d, e)) ||
    (f && h && g.navigation.Bw(f, h)) ||
    g.navigation.Bw(a, c)
  )
    return !0;
  d = lb(a).Nq(a, c, !1);
  g.navigation.Ed("Connection failed with error: " + va(d, a, c));
  return !1;
};
g.navigation.RB = function (a, c) {
  switch (c.type) {
    case g.Uf:
      if (g.navigation.ag(a.Z, c)) return !0;
      break;
    case g.zb:
      if (g.navigation.ag(a.ba, c)) return !0;
      break;
    case g.jb:
      if (g.navigation.ag(a.O, c)) return !0;
      break;
    case g.Tf:
      for (var d = 0; d < a.U.length; d++) {
        var e = a.U[d].connection;
        if (e && e.type === g.jb && g.navigation.ag(e, c)) return !0;
      }
      if (a.O && g.navigation.ag(a.O, c)) return !0;
  }
  g.navigation.Ed("This block can not be inserted at the marked location.");
  return !1;
};
g.navigation.pH = function (a) {
  var c = a.Fb().hb;
  if (c.qm) {
    var d = c.Ea;
    d.isConnected()
      ? ((c = v(d) ? d : d.na),
        (d = v(d) ? d.na : d),
        d.Y().Oa
          ? g.navigation.ow("Cannot disconnect a shadow block")
          : (c.disconnect(),
            nb(d, c),
            ob(c.Y().Zd()),
            (c = g.F.Eg(c)),
            F(a.Fb(), c)))
      : g.navigation.ow("Cannot disconnect unconnected connection");
  } else
    g.navigation.ow(
      "Cannot disconnect blocks when the cursor is not on a connection"
    );
};
g.navigation.vw = function () {
  F(g.navigation.Xd(), g.navigation.Ng().Fb().hb);
};
g.navigation.hK = function () {
  var a = g.navigation.Xd();
  F(a, null);
  a.Ka();
};
g.navigation.qd = function (a) {
  g.navigation.Le = a;
};
g.navigation.SI = function (a) {
  var c = g.navigation.Ng();
  if (c && (c = c.Fb())) {
    var d = c.hb;
    d = d ? d.Y() : null;
    d === a
      ? d.getParent()
        ? (a = d.ba || d.O) && F(c, g.F.Eg(a.na))
        : F(c, g.F.bm(d.u, d.Za()))
      : d && -1 < Ba(a, !1).indexOf(d) && F(c, g.F.bm(d.u, d.Za()));
  }
};
g.navigation.TI = function (a) {
  var c = g.navigation.Ng().Fb();
  if (c) {
    var d = c.hb;
    d = d ? d.Y() : null;
    d === a && F(c, g.F.Dg(d));
  }
};
g.navigation.AH = function () {
  var a = g.navigation.Ng();
  a.vb || ((a.vb = !0), g.navigation.pr(a));
};
g.navigation.oH = function () {
  var a = g.navigation.Ng();
  a.vb &&
    ((a.vb = !1),
    a.Fb().Ka(),
    g.navigation.Xd().Ka(),
    g.navigation.im() && g.navigation.im().Ka());
};
g.navigation.ow = function (a) {
  g.navigation.ym ? g.navigation.ym("log", a) : console.log(a);
};
g.navigation.Ed = function (a) {
  g.navigation.ym ? g.navigation.ym("warn", a) : console.warn(a);
};
g.navigation.IN = function (a) {
  g.navigation.ym ? g.navigation.ym("error", a) : console.error(a);
};
g.navigation.Wr = function (a, c, d) {
  var e = a.Fb(),
    f = a.Fb().hb;
  if (f.mb() !== g.F.types.Vc) return !1;
  f = f.Rs;
  F(
    e,
    g.F.bm(a, new g.g.X(c * g.navigation.Zz + f.x, d * g.navigation.Zz + f.y))
  );
  return !0;
};
g.navigation.eI = function (a) {
  a = a.Fb().hb;
  var c = a.mb();
  c == g.F.types.Cc
    ? ((a = a.Ea), jb(a) && a.li(void 0))
    : a.qm || c == g.F.types.Vc
    ? g.navigation.vw()
    : c == g.F.types.lc
    ? g.navigation.Ed("Cannot mark a block.")
    : c == g.F.types.tg && g.navigation.Ed("Cannot mark a stack.");
};
g.navigation.$J = function () {
  var a = {
    name: g.navigation.Ab.Md,
    $a: function (c) {
      return c.vb;
    },
    za: function (c, d, e) {
      d = c.Ja;
      switch (g.navigation.Le) {
        case g.navigation.Wf:
          return c.Fb().jc(e);
        case g.navigation.Il:
          return (c = d ? d.ic() : c.ic()), !(!c || !c.jc(e));
        case g.navigation.Jl:
          return d && "function" == typeof d.jc ? d.jc(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.fb.C.register(a);
  G(g.g.T.Vz, a.name);
};
g.navigation.YJ = function () {
  var a = {
    name: g.navigation.Ab.Lt,
    $a: function (c) {
      return c.vb;
    },
    za: function (c, d, e) {
      switch (g.navigation.Le) {
        case g.navigation.Wf:
          return c.Fb().jc(e);
        case g.navigation.Il:
          return g.navigation.gB(c), !0;
        case g.navigation.Jl:
          return (c = c.Ja) && "function" == typeof c.jc ? c.jc(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.fb.C.register(a);
  G(g.g.T.Yx, a.name);
};
g.navigation.XJ = function () {
  var a = {
    name: g.navigation.Ab.Jd,
    $a: function (c) {
      return c.vb;
    },
    za: function (c, d, e) {
      d = c.Ja;
      switch (g.navigation.Le) {
        case g.navigation.Wf:
          return c.Fb().jc(e);
        case g.navigation.Il:
          return (c = d ? d.ic() : c.ic()), !(!c || !c.jc(e));
        case g.navigation.Jl:
          return d && "function" == typeof d.jc ? d.jc(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.fb.C.register(a);
  G(g.g.T.yz, a.name);
};
g.navigation.SJ = function () {
  var a = {
    name: g.navigation.Ab.vt,
    $a: function (c) {
      return c.vb;
    },
    za: function (c, d, e) {
      switch (g.navigation.Le) {
        case g.navigation.Wf:
          return c.Fb().jc(e);
        case g.navigation.Jl:
          return (
            ((d = c.Ja) && "function" == typeof d.jc && d.jc(e)) ||
              g.navigation.fB(c),
            !0
          );
        default:
          return !1;
      }
    },
  };
  g.fb.C.register(a);
  G(g.g.T.ty, a.name);
};
g.navigation.UJ = function () {
  var a = {
    name: g.navigation.Ab.Ty,
    $a: function (c) {
      return c.vb && !c.options.readOnly;
    },
    za: function () {
      switch (g.navigation.Le) {
        case g.navigation.Wf:
          return g.navigation.iC();
        default:
          return !1;
      }
    },
  };
  g.fb.C.register(a);
  G(g.g.T.ZE, a.name);
};
g.navigation.VJ = function () {
  var a = {
    name: g.navigation.Ab.zF,
    $a: function (c) {
      return c.vb && !c.options.readOnly;
    },
    za: function (c) {
      switch (g.navigation.Le) {
        case g.navigation.Wf:
          return g.navigation.eI(c), !0;
        case g.navigation.Il:
          return g.navigation.uI(c), !0;
        default:
          return !1;
      }
    },
  };
  g.fb.C.register(a);
  G(g.g.T.eq, a.name);
};
g.navigation.MJ = function () {
  var a = {
    name: g.navigation.Ab.lE,
    $a: function (c) {
      return c.vb && !c.options.readOnly;
    },
    za: function (c) {
      switch (g.navigation.Le) {
        case g.navigation.Wf:
          return g.navigation.pH(c), !0;
        default:
          return !1;
      }
    },
  };
  g.fb.C.register(a);
  G(g.g.T.Cq, a.name);
};
g.navigation.bK = function () {
  var a = {
    name: g.navigation.Ab.zq,
    $a: function (c) {
      return c.vb && !c.options.readOnly;
    },
    za: function (c) {
      switch (g.navigation.Le) {
        case g.navigation.Wf:
          return c.Ja ? g.navigation.gB(c) : g.navigation.fB(c), !0;
        default:
          return !1;
      }
    },
  };
  g.fb.C.register(a);
  G(g.g.T.gG, a.name);
};
g.navigation.PJ = function () {
  var a = {
    name: g.navigation.Ab.vE,
    $a: function (c) {
      return c.vb;
    },
    za: function (c) {
      switch (g.navigation.Le) {
        case g.navigation.Il:
          return g.navigation.pr(c), !0;
        case g.navigation.Jl:
          return g.navigation.pr(c), !0;
        default:
          return !1;
      }
    },
  };
  g.fb.C.register(a, !0);
  G(g.g.T.ot, a.name, !0);
  G(g.g.T.E, a.name, !0);
};
g.navigation.aK = function () {
  var a = {
    name: g.navigation.Ab.jG,
    za: function (d) {
      d.vb ? g.navigation.oH() : g.navigation.AH();
      return !0;
    },
  };
  g.fb.C.register(a);
  var c = H(g.g.T.iF, [g.g.T.wi, g.g.T.yh]);
  G(c, a.name);
};
g.navigation.dK = function () {
  var a = {
    name: g.navigation.Ab.HF,
    $a: function (d) {
      return d.vb && !d.options.readOnly;
    },
    za: function (d) {
      return g.navigation.Wr(d, -1, 0);
    },
  };
  g.fb.C.register(a);
  var c = H(g.g.T.Yx, [g.g.T.yh]);
  G(c, a.name);
};
g.navigation.eK = function () {
  var a = {
    name: g.navigation.Ab.IF,
    $a: function (d) {
      return d.vb && !d.options.readOnly;
    },
    za: function (d) {
      return g.navigation.Wr(d, 1, 0);
    },
  };
  g.fb.C.register(a);
  var c = H(g.g.T.ty, [g.g.T.yh]);
  G(c, a.name);
};
g.navigation.fK = function () {
  var a = {
    name: g.navigation.Ab.JF,
    $a: function (d) {
      return d.vb && !d.options.readOnly;
    },
    za: function (d) {
      return g.navigation.Wr(d, 0, -1);
    },
  };
  g.fb.C.register(a);
  var c = H(g.g.T.Vz, [g.g.T.yh]);
  G(c, a.name);
};
g.navigation.cK = function () {
  var a = {
    name: g.navigation.Ab.GF,
    $a: function (d) {
      return d.vb && !d.options.readOnly;
    },
    za: function (d) {
      return g.navigation.Wr(d, 0, 1);
    },
  };
  g.fb.C.register(a);
  var c = H(g.g.T.yz, [g.g.T.yh]);
  G(c, a.name);
};
g.navigation.WJ = function () {
  g.navigation.SJ();
  g.navigation.XJ();
  g.navigation.YJ();
  g.navigation.$J();
  g.navigation.cK();
  g.navigation.dK();
  g.navigation.eK();
  g.navigation.fK();
  g.navigation.MJ();
  g.navigation.PJ();
  g.navigation.UJ();
  g.navigation.VJ();
  g.navigation.aK();
  g.navigation.bK();
};
g.bu = function (a) {
  this.s = a;
  this.pD = a.options.Xg || { contents: [] };
  this.rk = a.options.Ad;
  this.Ri = this.Ce = null;
  this.Db = [];
  this.Oc = this.rb = 0;
  this.L = a.options.L;
  this.ma = null;
  this.Ju = {};
  this.Ia = a.options.Ia;
  this.pb = null;
  this.Hn = [];
};
b = g.bu.prototype;
b.R = function () {
  var a = this.s,
    c = u(a),
    d = this.s,
    e = new g.Ld({
      parentWorkspace: d,
      rtl: d.L,
      oneBasedIndex: d.options.bi,
      horizontalLayout: d.Ad,
      renderer: d.options.bp,
      rendererOverrides: d.options.cp,
    });
  e.Ia = d.options.Ia;
  d = d.Ad ? g.C.vr(g.C.aa.KE, d.options) : g.C.vr(g.C.aa.Jy, d.options);
  if (!d)
    throw Error(
      "Blockly.VerticalFlyout, Blockly.HorizontalFlyout or your own custom flyout must be required."
    );
  this.ma = new d(e);
  this.Ce = this.Ke(this.s);
  g.g.o.yk(this.ma.Ya("svg"), c);
  this.ma.R(a);
  this.Ha(this.pD);
  a = a.Ac;
  a.subscribe(this.Ce, "toolboxBackgroundColour", "background-color");
  a.subscribe(this.Ce, "toolboxForegroundColour", "color");
};
b.Ke = function (a) {
  var c = u(a);
  a = this.Mu();
  var d = document.createElement("div");
  g.g.o.Fa(d, "blocklyToolboxContents");
  this.rk && (d.style.flexDirection = "row");
  this.Ri = d;
  this.Ri.tabIndex = 0;
  g.g.ua.Kf(this.Ri, g.g.ua.Ii.mG);
  a.appendChild(this.Ri);
  c.parentNode.insertBefore(a, c);
  c = this.Ri;
  d = g.ya(a, "click", this, this.fJ, !1, !0);
  this.Hn.push(d);
  c = g.ya(c, "keydown", this, this.jJ, !1, !0);
  this.Hn.push(c);
  return a;
};
b.Mu = function () {
  var a = document.createElement("div");
  a.setAttribute("layout", this.rk ? "h" : "v");
  g.g.o.Fa(a, "blocklyToolboxDiv");
  g.g.o.Fa(a, "blocklyNonSelectable");
  a.setAttribute("dir", this.L ? "RTL" : "LTR");
  return a;
};
b.fJ = function (a) {
  if (g.g.Fk(a) || a.target == this.Ce) g.Fc(!1);
  else {
    if ((a = a.target.getAttribute("id")))
      (a = this.Ju[a]), a.Wg() && (eb(this, a), a.BC());
    g.Fc(!0);
  }
  g.Touch.ak();
};
b.jJ = function (a) {
  var c = !1;
  switch (a.keyCode) {
    case g.g.T.zy:
      c = pb(this);
      break;
    case g.g.T.Oz:
      c = qb(this);
      break;
    case g.g.T.xl:
      c = rb(this);
      break;
    case g.g.T.El:
      c = sb(this);
      break;
    case g.g.T.eq:
    case g.g.T.Bz:
      this.pb && this.pb.Ak() && ((c = this.pb), gb(c, !c.ik), (c = !0));
      break;
    default:
      c = !1;
  }
  !c && this.pb && this.pb.Ro && (c = this.pb.Ro(a));
  c && a.preventDefault();
};
b.Ha = function (a) {
  this.pD = a;
  for (var c = 0; c < this.Db.length; c++) {
    var d = this.Db[c];
    d && d.I();
  }
  this.Db = [];
  this.Ju = {};
  a = a.contents;
  c = document.createDocumentFragment();
  d = 0;
  for (var e; (e = a[d]); d++) this.Ou(e, c);
  this.Ri.appendChild(c);
  this.position();
};
b.Ou = function (a, c) {
  var d = a.kind;
  "CATEGORY" == d.toUpperCase() && g.g.xa.TB(a) && (d = g.Qf.vj);
  if ((d = g.C.jo(g.C.aa.Nl, d.toLowerCase())))
    (a = new d(a, this)),
      tb(this, a),
      a.R(),
      (d = a.no()) && c.appendChild(d),
      a.kB && a.Te.setAttribute("id", a.Ma());
};
function tb(a, c) {
  a.Db.push(c);
  a.Ju[c.Ma()] = c;
  if (c.Ak()) for (var d = 0, e; (e = c.Ls[d]); d++) tb(a, e);
}
b.Eq = function (a) {
  g.g.o.Fa(this.Ce, a);
};
b.rs = function (a) {
  g.g.o.Vb(this.Ce, a);
};
b.hm = function () {
  if (!this.Ce) return null;
  var a = this.Ce.getBoundingClientRect(),
    c = a.top,
    d = c + a.height,
    e = a.left;
  a = e + a.width;
  return this.Ia == g.g.xa.Nd.Aq
    ? new g.g.Rect(-1e7, d, -1e7, 1e7)
    : this.Ia == g.g.xa.Nd.Zs
    ? new g.g.Rect(c, 1e7, -1e7, 1e7)
    : this.Ia == g.g.xa.Nd.xl
    ? new g.g.Rect(-1e7, 1e7, -1e7, a)
    : new g.g.Rect(-1e7, 1e7, e, 1e7);
};
b.Rg = function () {
  return this.rb;
};
b.ic = function () {
  return this.ma;
};
b.position = function () {
  var a = this.Ce;
  a &&
    (this.rk
      ? ((a.style.left = "0"),
        (a.style.height = "auto"),
        (a.style.width = "100%"),
        (this.Oc = a.offsetHeight),
        this.Ia == g.Xj ? (a.style.top = "0") : (a.style.bottom = "0"))
      : (this.Ia == g.Ml ? (a.style.right = "0") : (a.style.left = "0"),
        (a.style.height = "100%"),
        (this.rb = a.offsetWidth)),
    this.ma.position());
};
b.Fm = function () {
  for (var a = 0; a < this.Db.length; a++) {
    var c = this.Db[a];
    c.Fm && c.Fm();
  }
};
b.Gb = function (a) {
  this.Ce.style.display = a ? "block" : "none";
};
function eb(a, c) {
  var d = a.pb;
  if ((c || d) && (!c || c.Wg())) {
    null == d ||
      (d.Ak() && d == c) ||
      null == d ||
      ((a.pb = null), fb(d, !1), g.g.ua.qd(a.Ri, g.g.ua.State.Ss, ""));
    null != c &&
      c != d &&
      null != c &&
      ((a.pb = c), fb(c, !0), g.g.ua.qd(a.Ri, g.g.ua.State.Ss, c.Ma()));
    (d != c || c.Ak()) && c && c.Vi.length
      ? (a.ma.show(c.Vi), a.ma.wx())
      : a.ma.Ka();
    var e = d && d.Yd(),
      f = c && c.Yd();
    d == c && (f = null);
    a = new g.h.Bh(e, f, a.s.id);
    g.h.Ga(a);
  }
}
b.jc = function (a) {
  if (!this.pb) return !1;
  switch (a.name) {
    case g.navigation.Ab.Md:
      return qb(this);
    case g.navigation.Ab.Lt:
      return rb(this);
    case g.navigation.Ab.Jd:
      return pb(this);
    case g.navigation.Ab.vt:
      return sb(this);
    default:
      return !1;
  }
};
function rb(a) {
  return a.pb
    ? a.pb.Ak() && a.pb.ik
      ? (gb(a.pb, !1), !0)
      : a.pb.getParent() && a.pb.getParent().Wg()
      ? (eb(a, a.pb.getParent()), !0)
      : !1
    : !1;
}
function sb(a) {
  if (!a.pb || !a.pb.Ak()) return !1;
  var c = a.pb;
  c.ik ? pb(a) : gb(c, !0);
  return !0;
}
function pb(a) {
  if (!a.pb) return !1;
  var c = a.Db.indexOf(a.pb) + 1;
  if (-1 < c && c < a.Db.length) {
    for (var d = a.Db[c]; d && !d.Wg(); ) d = a.Db[++c];
    if (d && d.Wg()) return eb(a, d), !0;
  }
  return !1;
}
function qb(a) {
  if (!a.pb) return !1;
  var c = a.Db.indexOf(a.pb) - 1;
  if (-1 < c && c < a.Db.length) {
    for (var d = a.Db[c]; d && !d.Wg(); ) d = a.Db[--c];
    if (d && d.Wg()) return eb(a, d), !0;
  }
  return !1;
}
b.I = function () {
  this.ma.I();
  for (var a = 0; a < this.Db.length; a++) this.Db[a].I();
  for (a = 0; a < this.Hn.length; a++) g.Qa(this.Hn[a]);
  this.Hn = [];
  this.Db = [];
  this.s.Ac.unsubscribe(this.Ce);
  g.g.o.removeNode(this.Ce);
};
g.cd.register([
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
g.C.register(g.C.aa.zq, g.C.bq, g.bu);
g.h.Ch = function (a, c) {
  g.h.Ch.A.constructor.call(this, c);
  this.vm = a;
};
g.g.object.W(g.h.Ch, g.h.Fe);
g.h.Ch.prototype.type = g.h.Kz;
g.h.Ch.prototype.wa = function () {
  var a = g.h.Ch.A.wa.call(this);
  a.isOpen = this.vm;
  return a;
};
g.h.Ch.prototype.la = function (a) {
  g.h.Ch.A.la.call(this, a);
  this.vm = a.isOpen;
};
g.C.register(g.C.aa.fc, g.h.Kz, g.h.Ch);
g.gd = function (a) {
  this.s = a;
  this.Db = [];
  this.Kg = null;
  if (!(0 >= this.s.options.Rr)) {
    a = new g.Ld({
      scrollbars: !0,
      parentWorkspace: this.s,
      rtl: this.s.L,
      oneBasedIndex: this.s.options.bi,
      renderer: this.s.options.bp,
      rendererOverrides: this.s.options.cp,
    });
    if (this.s.Ad) {
      a.Ia = this.s.Ia == g.g.xa.Nd.Aq ? g.g.xa.Nd.Zs : g.g.xa.Nd.Aq;
      if (!g.ut) throw Error("Missing require for Blockly.HorizontalFlyout");
      this.Kg = new g.ut(a);
    } else {
      a.Ia = this.s.Ia == g.g.xa.Nd.El ? g.g.xa.Nd.xl : g.g.xa.Nd.El;
      if (!g.Eh) throw Error("Missing require for Blockly.VerticalFlyout");
      this.Kg = new g.Eh(a);
    }
    E(this.s, this.gJ.bind(this));
  }
};
b = g.gd.prototype;
b.$j = 47;
b.Op = 44;
b.yl = 16;
b.Ct = 20;
b.jn = 20;
b.oq = 10;
b.Wt = 0;
b.Xt = 32;
b.TE = 0.1;
g.gd.GD = 80;
g.gd.$x = 4;
g.gd.iz = 0.4;
g.gd.MF = 0.8;
g.gd.bz = 45;
b = g.gd.prototype;
b.Hr = !1;
b.zw = 0;
b.N = null;
b.Is = null;
b.lw = 0;
b.jj = 0;
b.Go = 0;
b.Qm = 0;
b.Ya = function () {
  this.N = g.g.o.M(g.g.G.xc, { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var c = g.g.o.M(g.g.G.Zm, { id: "blocklyTrashBodyClipPath" + a }, this.N);
  g.g.o.M(g.g.G.Dc, { width: this.$j, height: this.Op, y: this.yl }, c);
  var d = g.g.o.M(
    g.g.G.Rj,
    {
      width: g.Pd.width,
      x: -this.Wt,
      height: g.Pd.height,
      y: -this.Xt,
      "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")",
    },
    this.N
  );
  d.setAttributeNS(g.g.o.Yf, "xlink:href", this.s.options.sj + g.Pd.url);
  c = g.g.o.M(g.g.G.Zm, { id: "blocklyTrashLidClipPath" + a }, this.N);
  g.g.o.M(g.g.G.Dc, { width: this.$j, height: this.yl }, c);
  this.Is = g.g.o.M(
    g.g.G.Rj,
    {
      width: g.Pd.width,
      x: -this.Wt,
      height: g.Pd.height,
      y: -this.Xt,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")",
    },
    this.N
  );
  this.Is.setAttributeNS(g.g.o.Yf, "xlink:href", this.s.options.sj + g.Pd.url);
  g.Rd(this.N, "mousedown", this, this.FG);
  g.Rd(this.N, "mouseup", this, this.click);
  g.Rd(d, "mouseover", this, this.QI);
  g.Rd(d, "mouseout", this, this.NI);
  this.lu();
  return this.N;
};
b.R = function (a) {
  0 < this.s.options.Rr &&
    (g.g.o.yk(this.Kg.Ya(g.g.G.Wj), u(this.s)), this.Kg.R(this.s));
  this.jh = this.Ct + a;
  ub(this, !1);
  return this.jh + this.Op + this.yl;
};
b.I = function () {
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.s = this.Is = null;
  clearTimeout(this.lw);
};
b.position = function () {
  if (this.jh) {
    var a = this.s.Yc();
    a &&
      ((this.Go =
        a.Ia == g.De || (this.s.Ad && !this.s.L)
          ? a.Hb + a.Mc - this.$j - this.jn - g.Ua.Qc
          : this.jn + g.Ua.Qc),
      (this.Qm =
        a.Ia == g.zn ? this.jh : a.Qb + a.Wc - (this.Op + this.yl) - this.jh),
      this.N.setAttribute(
        "transform",
        "translate(" + this.Go + "," + this.Qm + ")"
      ));
  }
};
b.hm = function () {
  if (!this.N) return null;
  var a = this.N.getBoundingClientRect(),
    c = a.top + this.Xt - this.oq;
  a = a.left + this.Wt - this.oq;
  return new g.g.Rect(
    c,
    c + this.yl + this.Op + 2 * this.oq,
    a,
    a + this.$j + 2 * this.oq
  );
};
function ub(a, c) {
  a.Hr != c && (clearTimeout(a.lw), (a.Hr = c), a.lu());
}
b.lu = function () {
  var a = 1 / (g.gd.$x + 1);
  this.jj += this.Hr ? a : -a;
  this.jj = Math.min(Math.max(this.jj, this.zw), 1);
  vb(this, this.jj * g.gd.bz);
  this.N.style.opacity = g.gd.iz + this.jj * (g.gd.MF - g.gd.iz);
  this.jj > this.zw &&
    1 > this.jj &&
    (this.lw = setTimeout(this.lu.bind(this), g.gd.GD / g.gd.$x));
};
function vb(a, c) {
  var d = a.s.Ia == g.Ml || (a.s.Ad && a.s.L);
  a.Is.setAttribute(
    "transform",
    "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.$j - 4) + "," + (a.yl - 2) + ")"
  );
}
b.Uq = function () {
  ub(this, !1);
};
b.click = function () {
  if (this.Db.length && !this.Kg.isVisible()) {
    for (var a = [], c = 0, d; (d = this.Db[c]); c++) a[c] = g.V.Ye(d);
    this.Kg.show(a);
    wb(this, !0);
  }
};
function wb(a, c) {
  a = new g.h.Ch(c, a.s.id);
  g.h.Ga(a);
}
b.FG = function (a) {
  !this.Kg.isVisible() && this.Db.length && a.stopPropagation();
};
b.QI = function () {
  this.Db.length && ub(this, !0);
};
b.NI = function () {
  ub(this, !1);
};
b.gJ = function (a) {
  if (
    !(0 >= this.s.options.Rr) &&
    a.type == g.h.Xs &&
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
    a = g.V.re(a);
    if (-1 == this.Db.indexOf(a)) {
      for (this.Db.unshift(a); this.Db.length > this.s.options.Rr; )
        this.Db.pop();
      this.zw = a = this.TE;
      this.Hr || vb(this, a * g.gd.bz);
    }
  }
};
g.P = Object.create(null);
g.Ba = function (a, c) {
  this.K = a;
  this.type = c;
};
g.Ba.Up = 0;
g.Ba.rz = 1;
g.Ba.vz = 2;
g.Ba.uz = 3;
g.Ba.oz = 4;
g.Ba.pz = 5;
g.Ba.sz = 6;
g.Ba.qz = 7;
b = g.Ba.prototype;
b.na = null;
b.cg = !1;
b.Oi = null;
b.Cs = null;
b.x = 0;
b.y = 0;
b.ag = function (a) {
  var c = this,
    d = c.Y(),
    e = a.Y();
  a.isConnected() && a.disconnect();
  if (c.isConnected()) {
    var f = c.ra(),
      h = c.km();
    c.Cs = null;
    if (f.Oa) (h = g.V.Gh(f)), f.I(!1), (f = null);
    else if (c.type == g.jb) {
      if (!f.O) throw Error("Orphan block does not have an output connection.");
      var k = g.Ba.$B(e, f);
      k && (f.O.connect(k), (f = null));
    } else if (c.type == g.zb) {
      if (!f.ba)
        throw Error("Orphan block does not have a previous connection.");
      for (k = e; k.Z; ) {
        var l = t(k);
        if (l && !l.Oa) k = l;
        else {
          sa(f.u.Nn, f.ba, k.Z, !1) && (k.Z.connect(f.ba), (f = null));
          break;
        }
      }
    }
    if (f && (c.disconnect(), g.h.ab)) {
      var m = g.h.uc();
      setTimeout(function () {
        f.u &&
          !f.getParent() &&
          (g.h.ea(m), f.O ? f.O.Zr(c) : f.ba && f.ba.Zr(c), g.h.ea(!1));
      }, g.Qp);
    }
    c.Cs = h;
  }
  var n;
  g.h.isEnabled() && (n = new g.h.Ym(e));
  g.Ba.YG(c, a);
  e.As(d);
  n && (n.Tk(), g.h.Ga(n));
};
b.I = function () {
  if (this.isConnected()) {
    this.Jm(null);
    var a = this.ra();
    a && x(a);
  }
  this.cg = !0;
};
b.Y = function () {
  return this.K;
};
function v(a) {
  return a.type == g.jb || a.type == g.zb;
}
b.isConnected = function () {
  return !!this.na;
};
b.Nq = function (a) {
  g.g.Vu.warn(
    "Connection.prototype.canConnectWithReason",
    "July 2020",
    "July 2021",
    "the workspace's connection checker"
  );
  return lb(this).Nq(this, a, !1);
};
function lb(a) {
  return a.K.u.Nn;
}
b.Zr = function () {};
b.connect = function (a) {
  if (this.na != a && sa(lb(this), this, a, !1)) {
    var c = g.h.uc();
    c || g.h.ea(!0);
    v(this) ? this.ag(a) : a.ag(this);
    c || g.h.ea(!1);
  }
};
g.Ba.YG = function (a, c) {
  if (!a || !c) throw Error("Cannot connect null connections.");
  a.na = c;
  c.na = a;
};
g.Ba.xK = function (a, c) {
  var d = null;
  c = c.O;
  for (var e = 0; e < a.U.length; e++) {
    var f = a.U[e].connection,
      h = lb(c);
    if (f && f.type == g.jb && sa(h, c, f, !1)) {
      if (d) return null;
      d = f;
    }
  }
  return d;
};
g.Ba.$B = function (a, c) {
  for (var d; (d = g.Ba.xK(a, c)); ) if (((a = d.ra()), !a || a.Oa)) return d;
  return null;
};
b = g.Ba.prototype;
b.disconnect = function () {
  var a = this.na;
  if (!a) throw Error("Source connection not connected.");
  if (a.na != this)
    throw Error("Target connection not connected to source connection.");
  if (v(this)) {
    var c = this.K;
    var d = a.Y();
    a = this;
  } else (c = a.Y()), (d = this.K);
  var e = g.h.uc();
  e || g.h.ea(!0);
  this.cv(c, d);
  d.Oa || a.ep();
  e || g.h.ea(!1);
};
b.cv = function (a, c) {
  var d;
  g.h.isEnabled() && (d = new g.h.Ym(c));
  this.na = this.na.na = null;
  c.As(null);
  d && (d.Tk(), g.h.Ga(d));
};
b.ep = function () {
  var a = this.Y(),
    c = this.km();
  if (a.u && c)
    if (((a = g.V.gk(c, a.u)), a.O)) this.connect(a.O);
    else if (a.ba) this.connect(a.ba);
    else throw Error("Child block does not have output or previous statement.");
};
b.ra = function () {
  return this.isConnected() ? this.na.Y() : null;
};
b.AC = function () {
  !this.isConnected() ||
    (this.na && sa(lb(this), this, this.na, !1)) ||
    x(v(this) ? this.ra() : this.K);
};
b.yb = function (a) {
  a
    ? (Array.isArray(a) || (a = [a]), (this.Oi = a), this.AC())
    : (this.Oi = null);
  return this;
};
b.Jm = function (a) {
  this.Cs = a;
  a = this.ra();
  a ? a.Oa && (a.I(!1), this.ep()) : this.ep();
};
b.km = function () {
  return this.Cs;
};
b.mC = function () {
  return [];
};
b.Og = function () {
  for (var a = null, c = this.K, d = c.U, e = 0; e < c.U.length; e++)
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
    else if (a.ba == this) c = "Previous Connection of ";
    else if (a.Z == this) c = "Next Connection of ";
    else {
      c = null;
      for (var d = 0, e; (e = a.U[d]); d++)
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
g.ga = {};
g.ga.Wm = {};
g.ga.register = function (a, c) {
  if ("string" != typeof a || "" == a.trim())
    throw Error('Error: Invalid extension name "' + a + '"');
  if (g.ga.Wm[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if ("function" != typeof c)
    throw Error('Error: Extension "' + a + '" must be a function');
  g.ga.Wm[a] = c;
};
g.ga.qs = function (a, c) {
  if (!c || "object" != typeof c)
    throw Error('Error: Mixin "' + a + '" must be a object');
  g.ga.register(a, function () {
    this.Re(c);
  });
};
g.ga.mx = function (a, c, d, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  g.ga.qA(f, c.Tb, "domToMutation");
  g.ga.qA(f, c.ob, "mutationToDom");
  var h = g.ga.sA(c, f);
  if (d && "function" != typeof d)
    throw Error('Extension "' + a + '" is not a function');
  g.ga.register(a, function () {
    if (h) {
      if (!g.mc) throw Error(f + "Missing require for Blockly.Mutator");
      this.Bj(new g.mc(e || []));
    }
    this.Re(c);
    d && d.apply(this);
  });
};
g.ga.unregister = function (a) {
  g.ga.Wm[a]
    ? delete g.ga.Wm[a]
    : console.warn(
        'No extension mapping for name "' + a + '" found to unregister'
      );
};
g.ga.apply = function (a, c, d) {
  var e = g.ga.Wm[a];
  if ("function" != typeof e)
    throw Error('Error: Extension "' + a + '" not found.');
  if (d) g.ga.PG(a, c);
  else var f = g.ga.Iv(c);
  e.apply(c);
  if (d) g.ga.NG('Error after applying mutator "' + a + '": ', c);
  else if (!g.ga.WI(f, c))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
g.ga.qA = function (a, c, d) {
  if (!c) throw Error(a + 'missing required property "' + d + '"');
  if ("function" != typeof c)
    throw Error(a + '" required property "' + d + '" must be a function');
};
g.ga.PG = function (a, c) {
  if (g.ga.Iv(c).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        c.id
    );
};
g.ga.sA = function (a, c) {
  var d = void 0 !== a.Kh,
    e = void 0 !== a.Nh;
  if (d && e) {
    if ("function" != typeof a.Kh)
      throw Error(c + "compose must be a function.");
    if ("function" != typeof a.Nh)
      throw Error(c + "decompose must be a function.");
    return !0;
  }
  if (d || e)
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
g.ga.NG = function (a, c) {
  if ("function" != typeof c.Tb)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof c.ob)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  g.ga.sA(c, a);
};
g.ga.Iv = function (a) {
  var c = [];
  void 0 !== a.Tb && c.push(a.Tb);
  void 0 !== a.ob && c.push(a.ob);
  void 0 !== a.Kh && c.push(a.Kh);
  void 0 !== a.Nh && c.push(a.Nh);
  return c;
};
g.ga.WI = function (a, c) {
  c = g.ga.Iv(c);
  if (c.length != a.length) return !1;
  for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
  return !0;
};
g.ga.Lq = function (a, c) {
  var d = [];
  "object" == typeof document &&
    g.g.XC(function () {
      for (var e in c) g.g.rA(c[e]);
    });
  return function () {
    this.type &&
      -1 == d.indexOf(this.type) &&
      (g.ga.OG(this, a, c), d.push(this.type));
    this.eb(
      function () {
        var e = String(C(this, a)),
          f = c[e];
        null == f
          ? -1 == d.indexOf(this.type) &&
            ((e = "No tooltip mapping for value " + e + " of field " + a),
            null != this.type && (e += " of block type " + this.type),
            console.warn(e + "."))
          : (f = g.g.xe(f));
        return f;
      }.bind(this)
    );
  };
};
g.ga.OG = function (a, c, d) {
  var e = w(a, c);
  if ("function" != typeof e.Lk) {
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
g.ga.xu = function (a) {
  "object" == typeof document &&
    g.g.XC(function () {
      g.g.rA(a);
    });
  return function () {
    this.eb(
      function () {
        var c = w(this, "VAR");
        return g.g.xe(a).replace("%1", c ? c.$d() : "");
      }.bind(this)
    );
  };
};
g.ga.DH = function () {
  this.JK = this.Mf;
  this.eb(
    function () {
      var a = this.getParent();
      return (a && xb(a) && a.Mf) || this.JK;
    }.bind(this)
  );
};
g.ga.register("parent_tooltip_when_inline", g.ga.DH);
g.Jg = {};
g.Jg.register = function (a, c) {
  g.C.register(g.C.aa.Cc, a, c);
};
g.Jg.unregister = function (a) {
  g.C.unregister(g.C.aa.Cc, a);
};
g.Jg.la = function (a) {
  var c = g.C.Kv(g.C.aa.Cc, a.type);
  return c
    ? c.la(a)
    : (console.warn(
        "Blockly could not create a field of type " +
          a.type +
          ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."
      ),
      null);
};
g.Bb = {};
g.Bb.dv = 0;
g.Bb.er = null;
g.Bb.sH = function (a) {
  var c = a.u,
    d = a.Na();
  c.Li.play("delete");
  a = yb(c, d);
  d = d.cloneNode(!0);
  d.LK = a.x;
  d.MK = a.y;
  d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  u(c).appendChild(d);
  d.iA = d.getBBox();
  g.Bb.XA(d, c.L, new Date(), c.scale);
};
g.Bb.XA = function (a, c, d, e) {
  var f = (new Date() - d) / 150;
  1 < f
    ? g.g.o.removeNode(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.LK + (((c ? -1 : 1) * a.iA.width * e) / 2) * f) +
          "," +
          (a.MK + a.iA.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(g.Bb.XA, 10, a, c, d, e));
};
g.Bb.ZG = function (a) {
  var c = a.u,
    d = c.scale;
  c.Li.play("click");
  if (!(1 > d)) {
    var e = yb(c, a.Na());
    a.O
      ? ((e.x += (a.L ? 3 : -3) * d), (e.y += 13 * d))
      : a.ba && ((e.x += (a.L ? -23 : 23) * d), (e.y += 3 * d));
    a = g.g.o.M(
      g.g.G.dt,
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
    g.Bb.AA(a, new Date(), d);
  }
};
g.Bb.AA = function (a, c, d) {
  var e = (new Date() - c) / 150;
  1 < e
    ? g.g.o.removeNode(a)
    : (a.setAttribute("r", 25 * e * d),
      (a.style.opacity = 1 - e),
      (g.Bb.dv = setTimeout(g.Bb.AA, 10, a, c, d)));
};
g.Bb.rH = function (a) {
  a.u.Li.play("disconnect");
  if (!(1 > a.u.scale)) {
    var c = I(a).height;
    c = (Math.atan(10 / c) / Math.PI) * 180;
    a.L || (c *= -1);
    g.Bb.WA(a.Na(), c, new Date());
  }
};
g.Bb.WA = function (a, c, d) {
  var e = (new Date() - d) / 200;
  1 < e
    ? (a.pp = "")
    : ((a.pp =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")"),
      (g.Bb.er = a),
      (g.Bb.dv = setTimeout(g.Bb.WA, 10, a, c, d)));
  a.setAttribute("transform", a.Cp + a.pp);
};
g.Bb.ev = function () {
  if (g.Bb.er) {
    clearTimeout(g.Bb.dv);
    var a = g.Bb.er;
    a.pp = "";
    a.setAttribute("transform", a.Cp);
    g.Bb.er = null;
  }
};
g.h.og = function (a, c, d) {
  g.h.og.A.constructor.call(this, a ? a.u.id : void 0);
  this.lb = a ? a.id : null;
  this.XB = c;
  this.jA = d;
};
g.g.object.W(g.h.og, g.h.Fe);
g.h.og.prototype.type = g.h.iy;
g.h.og.prototype.wa = function () {
  var a = g.h.og.A.wa.call(this);
  a.isStart = this.XB;
  a.blockId = this.lb;
  a.blocks = this.jA;
  return a;
};
g.h.og.prototype.la = function (a) {
  g.h.og.A.la.call(this, a);
  this.XB = a.isStart;
  this.lb = a.blockId;
  this.jA = a.blocks;
};
g.C.register(g.C.aa.fc, g.h.iy, g.h.og);
g.Sf = function (a) {
  this.pi = g.selected = a;
  this.s = a.u;
  this.ij = this.gw = null;
  this.ao = zb(this, this.pi);
  this.Bd = this.rc = null;
  this.kh = !1;
  this.Zn = this.Tv = this.Hk = null;
  this.Jq = Ab(this);
};
g.Sf.Dl = { wt: 0, bF: 1, xz: 2 };
g.Sf.prototype.I = function () {
  this.Jq.length = 0;
  g.h.disable();
  try {
    this.ao && this.ao.I(), this.ij && this.ij.I();
  } finally {
    g.h.enable();
  }
};
g.Sf.prototype.update = function (a, c) {
  var d = this.rc && this.Bd ? g.YD : g.Od;
  for (var e = null, f = null, h = 0; h < this.Jq.length; h++) {
    var k = this.Jq[h],
      l = k.closest(d, a);
    l.connection && ((e = l.connection), (f = k), (d = l.ps));
  }
  e = ((d = { closest: e, local: f, ps: d }), !!d.closest) && c != g.xy;
  if (
    (this.kh = !!c && !this.pi.getParent() && this.pi.ve() && !e) ||
    Bb(this, d, a)
  ) {
    g.h.disable();
    d.closest
      ? ((a = this.rc != d.closest),
        (c = this.Bd != d.local),
        this.rc && this.Bd && (a || c || this.kh) && Cb(this))
      : Cb(this);
    this.Bd = this.rc = this.Hk = null;
    if (!this.kh && ((a = d.closest), (c = d.local), a))
      if (a == this.rc || a.Y().we())
        console.log("Trying to connect to an insertion marker");
      else {
        this.rc = a;
        this.Bd = c;
        a = this.rc;
        d = this.Bd;
        c = this.pi;
        d.type == g.Tf || d.type == g.Uf
          ? ((e = !a.isConnected()) ||
              ((e = a.ra()),
              d.type == g.Tf
                ? ((d = e.O), (c = g.Ba.$B(c, e)))
                : ((d = e.ba), (c = c.Mr())),
              (e = c ? sa(lb(d), c, d, !1) : !1)),
            (c = e ? g.Sf.Dl.wt : g.Sf.Dl.xz))
          : (c = g.Sf.Dl.wt);
        switch (c) {
          case g.Sf.Dl.bF:
            this.Tv = this.rc.Y();
            break;
          case g.Sf.Dl.wt:
            e = this.Bd;
            c = this.rc;
            d = this.gw && e == this.gw ? this.ij : this.ao;
            e = d.Hv(e.Y(), e);
            if (e == this.Hk)
              throw Error(
                "Made it to showInsertionMarker_ even though the marker isn't changing"
              );
            d.Ha();
            d.pa = !0;
            d.Na().setAttribute("visibility", "visible");
            e && c && mb(d, e, c);
            c && e.connect(c);
            this.Hk = e;
            break;
          case g.Sf.Dl.xz:
            (this.Zn = this.rc.ra()), Eb(this.Zn.Ob, "blocklyReplaceable", !0);
        }
        a &&
          ((d = a.K.u.Kb.ka()),
          (c = Fb(d, a)),
          a.type == g.jb || a.type == g.Tf
            ? ((d = d.Ll),
              (c =
                g.g.D.moveBy(0, -d) +
                g.g.D.oa("v", d) +
                c.Hf +
                g.g.D.oa("v", d)))
            : ((d = d.pn - d.Lb),
              (c =
                g.g.D.moveBy(-d, 0) +
                g.g.D.oa("h", d) +
                c.rj +
                g.g.D.oa("h", d))),
          (d = a.K.Za()),
          (g.Ba.NB = g.g.o.M(
            g.g.G.ne,
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
            a.K.Na()
          )));
      }
    g.h.enable();
  }
};
function zb(a, c) {
  var d = c.type;
  g.h.disable();
  try {
    var e = a.s.nj(d);
    e.$C(!0);
    if (c.ob) {
      var f = c.ob();
      f && e.Tb(f);
    }
    for (a = 0; a < c.U.length; a++) {
      var h = c.U[a];
      if (h.name != g.le.$m) {
        var k = e.U[a];
        for (d = 0; d < h.gb.length; d++) k.gb[d].setValue(h.gb[d].getValue());
      }
    }
    e.zj(c.isCollapsed());
    e.Rc(xb(c));
    e.Bf();
    e.Na().setAttribute("visibility", "hidden");
  } finally {
    g.h.enable();
  }
  return e;
}
function Ab(a) {
  var c = a.pi.eg(!1),
    d = a.pi.Mr();
  if (d && d != a.pi.Z) {
    c.push(d);
    a.gw = d;
    if (a.ij) {
      g.h.disable();
      try {
        a.ij.I();
      } finally {
        g.h.enable();
      }
    }
    a.ij = zb(a, d.Y());
  }
  return c;
}
function Bb(a, c, d) {
  var e = c.local,
    f = c.closest;
  c = c.ps;
  if (e && f) {
    if (a.Bd && a.rc) {
      if (a.rc == f && a.Bd == e) return !1;
      e = a.Bd.x + d.x - a.rc.x;
      a = a.Bd.y + d.y - a.rc.y;
      a = Math.sqrt(e * e + a * a);
      return !(f && c > a - g.aE);
    }
    if (a.Bd || a.rc)
      console.error(
        "Only one of localConnection_ and closestConnection_ was set."
      );
    else return !0;
  } else return !(!a.Bd || !a.rc);
  console.error(
    "Returning true from shouldUpdatePreviews, but it's not clear why."
  );
  return !0;
}
function Cb(a) {
  a.rc && a.rc.ra() && (g.g.o.removeNode(g.Ba.NB), delete g.Ba.NB);
  if (a.Zn) Eb(a.Zn.Ob, "blocklyReplaceable", !1), (a.Zn = null);
  else if (a.Tv) a.Tv = null;
  else if (a.Hk)
    if (a.Hk) {
      var c = a.Hk,
        d = c.Y(),
        e = d.Z,
        f = d.ba,
        h = d.O;
      h = c.type == g.jb && !(h && h.na);
      !(c != e || (f && f.na)) || h
        ? x(c.ra(), !1)
        : c.type == g.zb && c != e
        ? ((e = c.na),
          x(e.Y(), !1),
          (f = f ? f.na : null),
          x(d, !0),
          f && f.connect(e))
        : x(d, !0);
      if (c.na)
        throw Error(
          "markerConnection_ still connected at the end of disconnectInsertionMarker"
        );
      a.Hk = null;
      d.Na().setAttribute("visibility", "hidden");
    } else console.log("No insertion marker connection to disconnect");
}
g.Sf.prototype.jm = function () {
  var a = [];
  this.ao && a.push(this.ao);
  this.ij && a.push(this.ij);
  return a;
};
g.Jj = function (a, c) {
  this.Jb = a;
  this.s = c;
  this.Ig = new g.Sf(this.Jb);
  this.ek = null;
  this.kh = !1;
  this.hh = this.Jb.Za();
  this.jr = g.Jj.rI(a);
};
g.Jj.prototype.I = function () {
  this.jr.length = 0;
  this.Ig && this.Ig.I();
};
g.Jj.rI = function (a) {
  var c = [];
  a = q(a, !1);
  for (var d = 0, e; (e = a[d]); d++) {
    e = Gb(e);
    for (var f = 0; f < e.length; f++)
      c.push({ location: e[f].aj, icon: e[f] });
  }
  return c;
};
function Hb(a, c, d) {
  d = a.Bm(d);
  var e = g.g.X.sum(a.hh, d);
  a.Jb.Dw(e);
  for (e = 0; e < a.jr.length; e++) {
    var f = a.jr[e],
      h = f.icon;
    f = g.g.X.sum(f.location, d);
    h.aj = f;
    h.isVisible() && ((h = h.hc), (h.nc = f), h.ws && Pa(h));
  }
  a.ek = Ib(a.s, c);
  a.Ig.update(d, a.ek);
  a.kh = a.Ig.kh;
  c = a.s.sd;
  a.kh
    ? (a.Jb.kp(!0), a.ek == g.mt && c && ub(c, !0))
    : (a.Jb.kp(!1), c && ub(c, !1));
}
function Jb(a, c, d) {
  Hb(a, c, d);
  a.jr = [];
  c = new g.h.og(a.Jb, !1, q(a.Jb, !1));
  g.h.Ga(c);
  g.g.o.up();
  g.Bb.ev();
  d = a.Bm(d);
  c = g.g.X.sum(a.hh, d);
  var e = a.Jb;
  e.Ip && (e.translate(c.x, c.y), e.u.Ge.Rq(e.u.xb));
  c = a.s.sd;
  a.kh
    ? (c && setTimeout(c.Uq.bind(c), 100), a.$n(), a.Jb.I(!1, !0), (g.gm = []))
    : c && c.Uq();
  a.kh ||
    (Kb(a.Jb, d.x, d.y),
    a.Jb.Aj(!1),
    a.$n(),
    a.Ig.rc
      ? ((d = a.Ig),
        d.rc &&
          (g.h.disable(),
          Cb(d),
          g.h.enable(),
          d.Bd.connect(d.rc),
          d.pi.pa && (g.Bb.ZG((v(d.Bd) ? d.rc : d.Bd).Y()), ob(d.pi.Zd()))))
      : a.Jb.Ha(),
    Lb(a.Jb));
  a.s.ad(!0);
  (d = a.s.Ja) &&
    "function" == typeof d.rs &&
    d.rs(a.Jb.ve() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.h.ea(!1);
}
g.Jj.prototype.$n = function () {
  var a = new g.h.Ym(this.Jb);
  a.Iw = this.hh;
  a.Tk();
  g.h.Ga(a);
};
g.Jj.prototype.Bm = function (a) {
  a = new g.g.X(a.x / this.s.scale, a.y / this.s.scale);
  this.s.Fo && a.scale(1 / this.s.options.vc.scale);
  return a;
};
g.Jj.prototype.jm = function () {
  return this.Ig && this.Ig.jm ? this.Ig.jm() : [];
};
g.h.mh = function (a) {
  this.Ag = (this.Pe = "undefined" == typeof a) ? "" : a.id;
  this.Sc = this.Pe ? "" : a.u.id;
  this.group = g.h.uc();
  this.ab = g.h.ab;
};
g.g.object.W(g.h.mh, g.h.Abstract);
g.h.mh.prototype.wa = function () {
  var a = g.h.mh.A.wa.call(this);
  this.Ag && (a.commentId = this.Ag);
  return a;
};
g.h.mh.prototype.la = function (a) {
  g.h.mh.A.la.call(this, a);
  this.Ag = a.commentId;
};
g.h.kl = function (a, c, d) {
  g.h.kl.A.constructor.call(this, a);
  a &&
    ((this.qC = "undefined" == typeof c ? "" : c),
    (this.Xr = "undefined" == typeof d ? "" : d));
};
g.g.object.W(g.h.kl, g.h.mh);
b = g.h.kl.prototype;
b.type = g.h.ly;
b.wa = function () {
  var a = g.h.kl.A.wa.call(this);
  a.newContents = this.Xr;
  return a;
};
b.la = function (a) {
  g.h.kl.A.la.call(this, a);
  this.Xr = a.newValue;
};
b.um = function () {
  return this.qC == this.Xr;
};
b.run = function (a) {
  var c;
  (c = ya(this).Wq[this.Ag] || null)
    ? c.fO(a ? this.Xr : this.qC)
    : console.warn("Can't change non-existent comment: " + this.Ag);
};
g.h.nh = function (a) {
  g.h.nh.A.constructor.call(this, a);
  a && (this.xml = a.nD());
};
g.g.object.W(g.h.nh, g.h.mh);
g.h.nh.prototype.type = g.h.Vp;
g.h.nh.prototype.wa = function () {
  var a = g.h.nh.A.wa.call(this);
  a.xml = g.V.re(this.xml);
  return a;
};
g.h.nh.prototype.la = function (a) {
  g.h.nh.A.la.call(this, a);
  this.xml = g.V.Ye(a.xml);
};
g.h.nh.prototype.run = function (a) {
  g.h.qy(this, a);
};
g.h.qy = function (a, c) {
  var d = ya(a);
  c
    ? ((c = g.g.xml.createElement("xml")), c.appendChild(a.xml), g.V.Ti(c, d))
    : (d = d.Wq[a.Ag] || null)
    ? d.I(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + a.Ag);
};
g.h.oh = function (a) {
  g.h.oh.A.constructor.call(this, a);
  a && (this.xml = a.nD());
};
g.g.object.W(g.h.oh, g.h.mh);
g.h.oh.prototype.type = g.h.ny;
g.h.oh.prototype.wa = function () {
  return g.h.oh.A.wa.call(this);
};
g.h.oh.prototype.la = function (a) {
  g.h.oh.A.la.call(this, a);
};
g.h.oh.prototype.run = function (a) {
  g.h.qy(this, !a);
};
g.h.Mj = function (a) {
  g.h.Mj.A.constructor.call(this, a);
  a && ((this.Iu = a), (this.Jw = a.DB()), (this.Mk = null));
};
g.g.object.W(g.h.Mj, g.h.mh);
b = g.h.Mj.prototype;
b.Tk = function () {
  if (!this.Iu)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.Mk = this.Iu.DB();
  this.Iu = null;
};
b.type = g.h.Wp;
b.wa = function () {
  var a = g.h.Mj.A.wa.call(this);
  this.Mk &&
    (a.newCoordinate = Math.round(this.Mk.x) + "," + Math.round(this.Mk.y));
  return a;
};
b.la = function (a) {
  g.h.Mj.A.la.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.Mk = new g.g.X(Number(a[0]), Number(a[1]))));
};
b.um = function () {
  return g.g.X.vf(this.Jw, this.Mk);
};
b.run = function (a) {
  var c;
  if ((c = ya(this).Wq[this.Ag] || null)) {
    a = a ? this.Mk : this.Jw;
    var d = c.DB();
    c.moveBy(a.x - d.x, a.y - d.y);
  } else console.warn("Can't move non-existent comment: " + this.Ag);
};
g.C.register(g.C.aa.fc, g.h.Vp, g.h.nh);
g.C.register(g.C.aa.fc, g.h.ly, g.h.kl);
g.C.register(g.C.aa.fc, g.h.Wp, g.h.Mj);
g.C.register(g.C.aa.fc, g.h.ny, g.h.oh);
g.Tp = function (a, c) {
  this.Nc = a;
  this.s = c;
  this.ek = null;
  this.Qs = !1;
  this.hh = this.Nc.Za();
  this.hk = g.g.zk() && c.Ge ? c.Ge : null;
};
g.Tp.prototype.I = function () {
  this.hk = this.s = this.Nc = null;
};
function Mb(a, c, d) {
  d = a.Bm(d);
  d = g.g.X.sum(a.hh, d);
  a.Nc.Dw(a.hk, d);
  a.Nc.ve() &&
    ((a.ek = Ib(a.s, c)),
    (a.Qs = a.ek != g.wy),
    (c = a.s.sd),
    a.Qs
      ? (a.Nc.kp(!0), a.ek == g.mt && c && ub(c, !0))
      : (a.Nc.kp(!1), c && ub(c, !1)));
}
function Nb(a, c, d) {
  Mb(a, c, d);
  c = a.Bm(d);
  c = g.g.X.sum(a.hh, c);
  a.Nc.moveTo(c.x, c.y);
  c = a.s.sd;
  a.Qs
    ? (c && setTimeout(c.Uq.bind(c), 100), a.$n(), a.Nc.I(!1, !0))
    : c && c.Uq();
  a.Qs || (a.hk && a.hk.Rq(a.s.kg), a.Nc.Aj && a.Nc.Aj(!1), a.$n());
  a.s.ad(!0);
  (c = a.s.Ja) &&
    "function" == typeof c.rs &&
    c.rs(a.Nc.ve() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.h.ea(!1);
}
g.Tp.prototype.$n = function () {
  if (this.Nc.RN) {
    var a = new g.h.Mj(this.Nc);
    a.Jw = this.hh;
    a.Tk();
    g.h.Ga(a);
  }
};
g.Tp.prototype.Bm = function (a) {
  a = new g.g.X(a.x / this.s.scale, a.y / this.s.scale);
  this.s.Fo && a.scale(1 / this.s.options.vc.scale);
  return a;
};
g.h.Pf = function (a, c, d) {
  g.h.Pf.A.constructor.call(this, a ? a.u.id : c);
  this.lb = a ? a.id : null;
  this.kD = d;
};
g.g.object.W(g.h.Pf, g.h.Fe);
g.h.Pf.prototype.type = g.h.et;
g.h.Pf.prototype.wa = function () {
  var a = g.h.Pf.A.wa.call(this);
  a.targetType = this.kD;
  this.lb && (a.blockId = this.lb);
  return a;
};
g.h.Pf.prototype.la = function (a) {
  g.h.Pf.A.la.call(this, a);
  this.kD = a.targetType;
  this.lb = a.blockId;
};
g.C.register(g.C.aa.fc, g.h.et, g.h.Pf);
g.Dn = function (a) {
  this.s = a;
  this.gD = new g.g.X(a.scrollX, a.scrollY);
};
g.Dn.prototype.I = function () {
  this.s = null;
};
g.Dn.prototype.Hx = function () {
  g.selected && Ob(g.selected);
  pa(this.s);
};
g.Dn.prototype.Ui = function (a) {
  a = g.g.X.sum(this.gD, a);
  this.s.scroll(a.x, a.y);
};
g.jq = function (a) {
  g.jq.A.constructor.call(this, a.s);
  this.YC = a.Pa;
  this.rk = a.Ad;
};
g.g.object.W(g.jq, g.Dn);
g.jq.prototype.Ui = function (a) {
  a = g.g.X.sum(this.gD, a);
  this.rk ? this.YC.set(-a.x) : this.YC.set(-a.y);
};
g.J = {};
g.J.visible = !1;
g.J.Vl = !1;
g.J.mF = 50;
g.J.kC = 0;
g.J.op = 0;
g.J.iw = 0;
g.J.jw = 0;
g.J.Eb = null;
g.J.Uo = null;
g.J.gz = 0;
g.J.hz = 10;
g.J.XF = 10;
g.J.WE = 750;
g.J.Bt = 5;
g.J.ib = null;
g.J.$H = function () {
  var a = g.J.BB(g.J.Eb);
  if (a) {
    for (a = a.Mf; "function" == typeof a; ) a = a();
    if ("string" != typeof a)
      throw Error("Tooltip function must return a string.");
    return a;
  }
  return "";
};
g.J.BB = function (a) {
  for (; a && a.Mf; ) {
    if ("string" == typeof a.Mf || "function" == typeof a.Mf) return a;
    a = a.Mf;
  }
  return null;
};
g.J.Ya = function () {
  g.J.ib ||
    ((g.J.ib = document.createElement("div")),
    (g.J.ib.className = "blocklyTooltipDiv"),
    (g.ks || document.body).appendChild(g.J.ib));
};
g.J.Ul = function (a) {
  a.OI = g.Rd(a, "mouseover", null, g.J.oJ);
  a.MI = g.Rd(a, "mouseout", null, g.J.nJ);
  a.addEventListener("mousemove", g.J.FC, !1);
};
g.J.Qx = function (a) {
  a && (g.Qa(a.OI), g.Qa(a.MI), a.removeEventListener("mousemove", g.J.FC));
};
g.J.oJ = function (a) {
  g.J.Vl ||
    ((a = g.J.BB(a.currentTarget)),
    g.J.Eb != a && (g.J.Ka(), (g.J.Uo = null), (g.J.Eb = a)),
    clearTimeout(g.J.kC));
};
g.J.nJ = function () {
  g.J.Vl ||
    ((g.J.kC = setTimeout(function () {
      g.J.Eb = null;
      g.J.Uo = null;
      g.J.Ka();
    }, 1)),
    clearTimeout(g.J.op));
};
g.J.FC = function (a) {
  if (g.J.Eb && g.J.Eb.Mf && !g.J.Vl)
    if (g.J.visible) {
      var c = g.J.iw - a.pageX;
      a = g.J.jw - a.pageY;
      Math.sqrt(c * c + a * a) > g.J.XF && g.J.Ka();
    } else
      g.J.Uo != g.J.Eb &&
        (clearTimeout(g.J.op),
        (g.J.iw = a.pageX),
        (g.J.jw = a.pageY),
        (g.J.op = setTimeout(g.J.wK, g.J.WE)));
};
g.J.I = function () {
  g.J.Eb = null;
  g.J.Uo = null;
  g.J.Ka();
};
g.J.Ka = function () {
  g.J.visible &&
    ((g.J.visible = !1), g.J.ib && (g.J.ib.style.display = "none"));
  g.J.op && clearTimeout(g.J.op);
};
g.J.block = function () {
  g.J.Ka();
  g.J.Vl = !0;
};
g.J.OK = function () {
  g.J.Vl = !1;
};
g.J.wK = function () {
  if (!g.J.Vl && ((g.J.Uo = g.J.Eb), g.J.ib)) {
    g.J.ib.textContent = "";
    var a = g.J.$H();
    a = g.g.qb.AD(a, g.J.mF);
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) {
      var d = document.createElement("div");
      d.appendChild(document.createTextNode(a[c]));
      g.J.ib.appendChild(d);
    }
    a = g.J.Eb.L;
    c = document.documentElement.clientWidth;
    d = document.documentElement.clientHeight;
    g.J.ib.style.direction = a ? "rtl" : "ltr";
    g.J.ib.style.display = "block";
    g.J.visible = !0;
    var e = g.J.iw;
    e = a ? e - (g.J.gz + g.J.ib.offsetWidth) : e + g.J.gz;
    var f = g.J.jw + g.J.hz;
    f + g.J.ib.offsetHeight > d + window.scrollY &&
      (f -= g.J.ib.offsetHeight + 2 * g.J.hz);
    a
      ? (e = Math.max(g.J.Bt - window.scrollX, e))
      : e + g.J.ib.offsetWidth > c + window.scrollX - 2 * g.J.Bt &&
        (e = c - g.J.ib.offsetWidth - 2 * g.J.Bt);
    g.J.ib.style.top = f + "px";
    g.J.ib.style.left = e + "px";
  }
};
g.rg = function (a, c) {
  this.jC = null;
  this.Ud = new g.g.X(0, 0);
  this.wc = this.Jc = this.Lm = this.Mm = this.Xe = null;
  this.Qu = c;
  this.Bo = this.Ck = this.Co = this.nk = !1;
  this.Ef = a;
  this.ma = this.fl = this.zg = this.Ni = this.hs = this.gs = null;
  this.Gr = this.pk = this.oA = !1;
  this.JB = !g.nE;
};
b = g.rg.prototype;
b.I = function () {
  g.Touch.ak();
  g.J.OK();
  this.Qu.zd = null;
  this.gs && g.Qa(this.gs);
  this.hs && g.Qa(this.hs);
  this.zg && this.zg.I();
  this.fl && this.fl.I();
  this.Ni && this.Ni.I();
};
function Pb(a, c) {
  a.Ud = g.g.X.Wn(new g.g.X(c.clientX, c.clientY), a.jC);
  if (a.nk) var d = !1;
  else (a.nk = g.g.X.JI(a.Ud) > (a.ma ? g.LE : g.mE)), (d = a.nk);
  if (d) {
    if (a.oA)
      throw Error("updateIsDragging_ should only be called once per gesture.");
    a.oA = !0;
    if (a.Xe) {
      a.Bo = !0;
      a.Ni = new g.Tp(a.Xe, a.wc);
      d = a.Ni;
      g.h.uc() || g.h.ea(!0);
      d.s.ad(!1);
      d.Nc.pu = !1;
      d.hk && (d.Nc.moveTo(0, 0), d.hk.Zk(d.hh.x, d.hh.y), Qb(d.hk, d.Nc.Na()));
      d.Nc.Aj && d.Nc.Aj(!0);
      var e = d.s.Ja;
      e &&
        "function" == typeof e.Eq &&
        e.Eq(d.Nc.ve() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      Mb(a.Ni, a.Ef, a.Ud);
      d = !0;
    } else d = !1;
    if (!d) {
      if (a.Jc)
        if (
          (a.ma
            ? (a.Jc && a.Jc.isEnabled()
                ? ((d = !Rb(a.ma)) ||
                    ((d = a.Ud),
                    (d = (Math.atan2(d.y, d.x) / Math.PI) * 180),
                    (e = a.ma.wH),
                    (d =
                      (d < e && d > -e) || d < -180 + e || d > 180 - e
                        ? !0
                        : !1)),
                  d
                    ? ((a.wc = a.ma.bb),
                      Sb(a.wc),
                      g.h.uc() || g.h.ea(!0),
                      (a.Lm = null),
                      (a.Jc = kb(a.ma, a.Jc)),
                      a.Jc.select(),
                      (d = !0))
                    : (d = !1))
                : (d = !1),
              (a.Ck = d))
            : a.Jc.Hc() && (a.Ck = !0),
          a.Ck)
        ) {
          a.zg = new g.Jj(a.Jc, a.wc);
          d = a.zg;
          e = a.Ud;
          var f = a.JB;
          g.h.uc() || g.h.ea(!0);
          var h = new g.h.og(d.Jb, !0, q(d.Jb, !1));
          g.h.Ga(h);
          d.s.Fo && ob(d.Jb);
          g.g.o.tp();
          d.s.ad(!1);
          g.Bb.ev();
          if (d.Jb.getParent() || (f && d.Jb.Z && d.Jb.Z.ra()))
            x(d.Jb, f),
              (e = d.Bm(e)),
              (e = g.g.X.sum(d.hh, e)),
              d.Jb.translate(e.x, e.y),
              g.Bb.rH(d.Jb),
              (e = d.Ig),
              (e.Jq = Ab(e));
          d.Jb.Aj(!0);
          e = d.Jb;
          e.Ip &&
            ((f = e.Za()),
            e.Na().removeAttribute("transform"),
            e.u.Ge.Zk(f.x, f.y),
            (f = e.Na()) && Qb(e.u.Ge, f));
          (e = d.s.Ja) &&
            "function" == typeof e.Eq &&
            e.Eq(d.Jb.ve() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
          Hb(a.zg, a.Ef, a.Ud);
          d = !0;
        } else d = !1;
      else d = !1;
      if ((d = !d))
        if (a.ma) d = Rb(a.ma);
        else if ((d = a.wc)) (d = a.wc), (d = d.options.$c && d.options.$c.Ui);
      d &&
        ((a.fl = a.ma ? new g.jq(a.ma) : new g.Dn(a.wc)),
        (a.Co = !0),
        a.fl.Hx());
    }
    g.kj();
  }
  a.Ef = c;
}
b.gv = function (a) {
  g.g.Jr(a)
    ? this.cancel()
    : ((this.pk = !0),
      g.Bb.ev(),
      Sb(this.wc),
      this.wc.Fo && this.wc.resize(),
      g.Fc(!!this.ma),
      na(this.wc),
      (this.Ef = a),
      g.J.block(),
      this.Jc &&
        (!this.Jc.Nb && a.shiftKey && this.Jc.u.vb
          ? F(this.Qu.Fb(), g.F.Pu(this.Jc))
          : this.Jc.select()),
      g.g.Fk(a)
        ? ba(this, a)
        : (("touchstart" != a.type.toLowerCase() &&
            "pointerdown" != a.type.toLowerCase()) ||
            "mouse" == a.pointerType ||
            g.HI(a, this),
          (this.jC = new g.g.X(a.clientX, a.clientY)),
          (this.JB = a.altKey || a.ctrlKey || a.metaKey),
          this.Ul(a)));
};
b.Ul = function (a) {
  this.gs = g.ya(document, "mousemove", null, this.mm.bind(this));
  this.hs = g.ya(document, "mouseup", null, this.Br.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
b.mm = function (a) {
  Pb(this, a);
  this.Co
    ? this.fl.Ui(this.Ud)
    : this.Ck
    ? Hb(this.zg, this.Ef, this.Ud)
    : this.Bo && Mb(this.Ni, this.Ef, this.Ud);
  a.preventDefault();
  a.stopPropagation();
};
b.Br = function (a) {
  Pb(this, a);
  g.kj();
  if (this.Gr) console.log("Trying to end a gesture recursively.");
  else {
    this.Gr = !0;
    if (this.Bo) Nb(this.Ni, a, this.Ud);
    else if (this.Ck) Jb(this.zg, a, this.Ud);
    else if (this.Co) {
      var c = this.fl;
      c.Ui(this.Ud);
      ra(c.s);
    } else if (this.Xe && !this.nk)
      this.Xe.rK && this.Xe.rK(), this.Xe.select && this.Xe.select();
    else if (Tb(this)) {
      c = this.Mm;
      var d = this.Ef;
      jb(c) && c.li(d);
      Ub(this);
    } else
      !this.Lm || this.nk || Tb(this)
        ? this.Lm ||
          this.Xe ||
          this.Mm ||
          this.nk ||
          ((c = this.Qu),
          a.shiftKey && c.vb
            ? ((d = g.g.nK(c, new g.g.X(a.clientX, a.clientY))),
              (d = g.F.bm(c, d)),
              F(c.Fb(), d))
            : g.selected && Ob(g.selected),
          (c = new g.h.Pf(null, (this.wc || c).id, "workspace")),
          g.h.Ga(c))
        : (this.ma && this.ma.Tl
            ? this.Jc.isEnabled() &&
              (g.h.uc() || g.h.ea(!0), Lb(kb(this.ma, this.Jc)))
            : ((c = new g.h.Pf(this.Lm, this.wc.id, "block")), g.h.Ga(c)),
          Ub(this),
          g.h.ea(!1));
    a.preventDefault();
    a.stopPropagation();
    this.I();
  }
};
b.cancel = function () {
  if (!this.Gr) {
    g.kj();
    if (this.Bo) Nb(this.Ni, this.Ef, this.Ud);
    else if (this.Ck) Jb(this.zg, this.Ef, this.Ud);
    else if (this.Co) {
      var a = this.fl;
      a.Ui(this.Ud);
      ra(a.s);
    }
    this.I();
  }
};
function ba(a, c) {
  a.Jc
    ? (Ub(a), g.Fc(!!a.ma), a.Jc.np(c))
    : a.Xe
    ? a.Xe.np(c)
    : a.wc && !a.ma && (g.Fc(), a.wc.np(c));
  c.preventDefault();
  c.stopPropagation();
  a.I();
}
function Vb(a, c, d) {
  if (a.pk)
    throw Error(
      "Tried to call gesture.handleWsStart, but the gesture had already been started."
    );
  a.wc || (a.wc = d);
  a.Ef = c;
  a.gv(c);
  a.wc.vb && g.navigation.qd(g.navigation.Wf);
}
function Wb(a, c, d) {
  if (a.pk)
    throw Error(
      "Tried to call gesture.handleFlyoutStart, but the gesture had already been started."
    );
  a.ma || (a.ma = d);
  Vb(a, c, d.s);
}
function Ub(a) {
  a.Jc && !a.ma && ob(a.Jc);
}
function Xb(a, c) {
  a.Lm || a.Xe || ((a.Lm = c), c.Nb && c != c.Zd() ? Yb(a, c.Zd()) : Yb(a, c));
}
function Yb(a, c) {
  c.Oa ? Yb(a, c.getParent()) : (a.Jc = c);
}
function Tb(a) {
  return (a.Mm ? jb(a.Mm) : !1) && !a.nk && (!a.ma || !a.ma.Tl);
}
b.Gc = function () {
  return this.Co || this.Ck || this.Bo;
};
b.jm = function () {
  return this.zg ? this.zg.jm() : [];
};
g.rg.vk = function () {
  for (var a = g.Rb.getAll(), c = 0, d; (d = a[c]); c++) if (d.zd) return !0;
  return !1;
};
g.Be = function (a, c, d) {
  this.Lc = this.an;
  this.rD = this.al = null;
  this.ke = new g.g.hf(0, 0);
  this.B = this.Aw = this.mi = this.Kc = this.qc = this.Me = this.ai = this.Mh = null;
  d && this.qf(d);
  this.setValue(a);
  c && (this.al = c);
};
b = g.Be.prototype;
b.an = null;
b.name = void 0;
b.cg = !1;
b.gC = 50;
b.K = null;
b.cj = !0;
b.Hj = !0;
b.Fu = null;
g.Be.fz = "\u00a0";
b = g.Be.prototype;
b.cq = !0;
b.Gl = !1;
b.qf = function (a) {
  var c = a.tooltip;
  "string" == typeof c && (c = g.g.xe(a.tooltip));
  c && this.eb(c);
};
b.Bx = function (a) {
  if (this.K) throw Error("Field already bound to a block.");
  this.K = a;
};
b.ka = function () {
  !this.B && this.K && this.K.u && this.K.u.pa && (this.B = this.K.u.Kb.ka());
  return this.B;
};
b.Y = function () {
  return this.K;
};
b.R = function () {
  this.Me ||
    ((this.Me = g.g.o.M(g.g.G.xc, {}, null)),
    this.isVisible() || (this.Me.style.display = "none"),
    this.K.Na().appendChild(this.Me),
    this.om(),
    this.ui(),
    this.eb(this.rD),
    g.J.Ul(Zb(this)),
    (this.Aw = g.ya(Zb(this), "mousedown", this, this.pj)),
    this.wk());
};
b.om = function () {
  $b(this);
  ac(this);
};
b.wk = function () {};
function $b(a) {
  a.qc = g.g.o.M(
    g.g.G.Dc,
    {
      rx: a.ka().gq,
      ry: a.ka().gq,
      x: 0,
      y: 0,
      height: a.ke.height,
      width: a.ke.width,
      class: "blocklyFieldRect",
    },
    a.Me
  );
}
function ac(a) {
  a.Kc = g.g.o.M(g.g.G.Yt, { class: "blocklyText" }, a.Me);
  a.ka().st && a.Kc.setAttribute("dominant-baseline", "central");
  a.mi = document.createTextNode("");
  a.Kc.appendChild(a.mi);
}
b.co = function (a) {
  this.setValue(a.textContent);
};
b.mD = function (a) {
  a.textContent = this.getValue();
  return a;
};
b.I = function () {
  g.H.vo(this);
  g.ca.vo(this);
  g.J.Qx(Zb(this));
  this.Aw && g.Qa(this.Aw);
  g.g.o.removeNode(this.Me);
  this.cg = !0;
};
b.ui = function () {
  var a = this.Me;
  this.cq &&
    a &&
    (this.K.ee()
      ? (g.g.o.Fa(a, "blocklyEditableText"),
        g.g.o.Vb(a, "blocklyNonEditableText"),
        (a.style.cursor = this.kt))
      : (g.g.o.Fa(a, "blocklyNonEditableText"),
        g.g.o.Vb(a, "blocklyEditableText"),
        (a.style.cursor = "")));
};
function jb(a) {
  return !!a.K && a.K.ee() && !!a.li && "function" === typeof a.li;
}
b.isVisible = function () {
  return this.Hj;
};
b.Gb = function (a) {
  if (this.Hj != a) {
    this.Hj = a;
    var c = this.Na();
    c && (c.style.display = a ? "block" : "none");
  }
};
function bc(a, c) {
  a.al = c;
}
b.CB = function () {
  return this.al;
};
b.Na = function () {
  return this.Me;
};
b.oc = function () {};
b.Hm = function () {
  this.mi && (this.mi.nodeValue = this.wr());
  cc(this);
};
function cc(a, c) {
  var d = a.ka();
  c = void 0 != c ? c : a.qc ? a.ka().ol : 0;
  var e = 2 * c,
    f = d.hq,
    h = 0;
  a.Kc && ((h = g.g.o.Gv(a.Kc, d.Ai, d.Bi, d.zi)), (e += h));
  a.qc && (f = Math.max(f, d.Ey));
  a.ke.height = f;
  a.ke.width = e;
  dc(a, c, h);
  ec(a);
}
function dc(a, c, d) {
  if (a.Kc) {
    var e = a.ka(),
      f = a.ke.height / 2;
    a.Kc.setAttribute("x", a.K.L ? a.ke.width - d - c : c);
    a.Kc.setAttribute("y", e.st ? f : f - e.hq / 2 + e.Gy);
  }
}
function ec(a) {
  a.qc &&
    (a.qc.setAttribute("width", a.ke.width),
    a.qc.setAttribute("height", a.ke.height),
    a.qc.setAttribute("rx", a.ka().gq),
    a.qc.setAttribute("ry", a.ka().gq));
}
b.Sh = function () {
  if (!this.isVisible()) return new g.g.hf(0, 0);
  this.cj
    ? (this.Hm(), (this.cj = !1))
    : this.Hj &&
      0 == this.ke.width &&
      (console.warn(
        "Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."
      ),
      this.Hm());
  return this.ke;
};
function fc(a) {
  if (a.qc)
    (c = a.qc.getBoundingClientRect()),
      (a = g.g.style.mk(a.qc)),
      (e = c.width),
      (c = c.height);
  else {
    var c = I(a.K),
      d = a.K.u.scale;
    a = g.g.style.mk(Zb(a));
    var e = c.width * d;
    c = c.height * d;
    g.g.userAgent.RE
      ? ((a.x += 1.5 * d), (a.y += 1.5 * d))
      : g.g.userAgent.Oj ||
        g.g.userAgent.df ||
        ((a.x -= 0.5 * d), (a.y -= 0.5 * d));
    e += 1 * d;
    c += 1 * d;
  }
  return new g.g.Rect(a.y, a.y + c, a.x, a.x + e);
}
b.wr = function () {
  var a = this.$d();
  if (!a) return g.Be.fz;
  a.length > this.gC && (a = a.substring(0, this.gC - 2) + "\u2026");
  a = a.replace(/\s/g, g.Be.fz);
  this.K && this.K.L && (a += "\u200f");
  return a;
};
b.$d = function () {
  if (this.Nv) {
    var a = this.Nv.call(this);
    if (null !== a) return String(a);
  }
  return String(this.getValue());
};
b.Ko = function () {
  this.cj = !0;
  this.B = null;
};
function gc(a) {
  a.cj = !0;
  a.K && a.K.pa && (a.K.Ha(), a.K.Zb(), a.Sx());
}
b.setValue = function (a) {
  if (null !== a) {
    var c = this.fk(a);
    a = hc(this, a, c);
    if (!(a instanceof Error)) {
      if ((c = this.CB()))
        if (((c = c.call(this, a)), (a = hc(this, a, c)), a instanceof Error))
          return;
      c = this.K;
      if (!c || !c.cg) {
        var d = this.getValue();
        d === a
          ? this.Ph(a)
          : (c &&
              g.h.isEnabled() &&
              g.h.Ga(new g.h.lh(c, "field", this.name || null, d, a)),
            this.Ph(a),
            this.cj && gc(this));
      }
    }
  }
};
function hc(a, c, d) {
  if (null === d) return a.YA(), a.cj && gc(a), Error();
  void 0 !== d && (c = d);
  return c;
}
b.getValue = function () {
  return this.Lc;
};
b.fk = function (a) {
  return null === a || void 0 === a ? null : a;
};
b.Ph = function (a) {
  this.Lc = a;
  this.cj = !0;
};
b.YA = function () {};
b.pj = function (a) {
  if (this.K && this.K.u && (a = this.K.u.Rh(a))) {
    if (a.pk)
      throw Error(
        "Tried to call gesture.setStartField, but the gesture had already been started."
      );
    a.Mm || (a.Mm = this);
  }
};
b.eb = function (a) {
  a || "" === a || (a = this.K);
  var c = Zb(this);
  c ? (c.Mf = a) : (this.rD = a);
};
function Zb(a) {
  return a.Fu || a.Na();
}
b.$o = function () {
  return !1;
};
b.Og = function () {
  for (var a = null, c = this.K, d = c.U, e = 0; e < c.U.length; e++)
    for (var f = d[e], h = f.gb, k = 0; k < h.length; k++)
      if (h[k] === this) {
        a = f;
        break;
      }
  return a;
};
b.YB = function () {
  return !1;
};
b.jc = function () {
  return !1;
};
b.ii = function (a) {
  a ? (this.Me.appendChild(a), (this.Mh = a)) : (this.Mh = null);
};
b.ki = function (a) {
  a ? (this.Me.appendChild(a), (this.ai = a)) : (this.ai = null);
};
b.Sx = function () {
  var a = this.K.u;
  a.vb && this.Mh && a.Fb().draw();
  a.vb && this.ai && a.Xd(g.navigation.kn).draw();
};
g.vd = function (a, c, d) {
  this.Qq = null;
  g.vd.A.constructor.call(this, a, null, d);
  d || (this.Qq = c || null);
};
g.g.object.W(g.vd, g.Be);
g.vd.prototype.an = "";
g.vd.la = function (a) {
  var c = g.g.xe(a.text);
  return new g.vd(c, void 0, a);
};
g.vd.prototype.cq = !1;
g.vd.prototype.qf = function (a) {
  g.vd.A.qf.call(this, a);
  this.Qq = a["class"];
};
g.vd.prototype.om = function () {
  ac(this);
  this.Qq && g.g.o.Fa(this.Kc, this.Qq);
};
g.vd.prototype.fk = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
g.Jg.register("field_label", g.vd);
g.Yy = function (a, c, d, e) {
  if (a != g.qh && !c)
    throw Error("Value inputs and statement inputs must have non-empty name.");
  this.type = a;
  this.name = c;
  this.K = d;
  this.connection = e;
  this.gb = [];
};
b = g.Yy.prototype;
b.align = g.Us;
b.Hj = !0;
b.Y = function () {
  return this.K;
};
function J(a, c, d) {
  ic(a, a.gb.length, c, d);
  return a;
}
function ic(a, c, d, e) {
  if (0 > c || c > a.gb.length) throw Error("index " + c + " out of bounds.");
  if (!(d || ("" == d && e))) return c;
  "string" == typeof d && (d = new g.vd(d));
  d.Bx(a.K);
  a.K.pa && (d.R(), d.oc());
  d.name = e;
  d.Gb(a.isVisible());
  e = d;
  e.gx && (c = ic(a, c, e.gx));
  a.gb.splice(c, 0, d);
  ++c;
  e.Jx && (c = ic(a, c, e.Jx));
  a.K.pa && ((a.K = a.K), a.K.Ha(), a.K.Zb());
  return c;
}
b.isVisible = function () {
  return this.Hj;
};
b.Gb = function (a) {
  if (this.Hj != a) {
    this.Hj = a;
    for (var c = 0, d; (d = this.gb[c]); c++) d.Gb(a);
    if (this.connection) {
      this.connection = this.connection;
      if (a) jc(this.connection);
      else if (((c = this.connection), kc(c, !1), c.na))
        for (c = q(c.ra(), !1), d = 0; d < c.length; d++) {
          for (var e = c[d], f = e.eg(!0), h = 0; h < f.length; h++)
            kc(f[h], !1);
          e = Gb(e);
          for (h = 0; h < e.length; h++) e[h].Gb(!1);
        }
      if ((c = this.connection.ra()))
        c.Na().style.display = a ? "block" : "none";
    }
  }
};
b.Ko = function () {
  for (var a = 0, c; (c = this.gb[a]); a++) c.Ko();
};
b.yb = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.yb(a);
  return this;
};
function lc(a, c) {
  a.align = c;
  a.K.pa && ((a.K = a.K), a.K.Ha());
  return a;
}
b.Jm = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Jm(a);
};
b.km = function () {
  if (!this.connection) throw Error("This input does not have a connection.");
  return this.connection.km();
};
b.R = function () {
  if (this.K.u.pa) for (var a = 0; a < this.gb.length; a++) this.gb[a].R();
};
b.I = function () {
  for (var a = 0, c; (c = this.gb[a]); a++) c.I();
  this.connection && this.connection.I();
  this.K = null;
};
g.le = function (a, c, d) {
  if (g.Generator && "undefined" != typeof g.Generator.prototype[c])
    throw Error(
      'Block prototypeName "' +
        c +
        '" conflicts with Blockly.Generator members.'
    );
  this.id = d && !a.Wd(d) ? d : g.g.Qh();
  a.su[this.id] = this;
  this.ba = this.Z = this.O = null;
  this.U = [];
  this.Wh = void 0;
  this.disabled = !1;
  this.Mf = "";
  this.contextMenu = !0;
  this.$g = null;
  this.Ih = [];
  this.aB = this.lC = this.Uu = !0;
  this.bk = this.Oa = !1;
  this.Kn = null;
  this.Ie = { text: null, bx: !1, size: new g.g.hf(160, 80) };
  this.DD = new g.g.X(0, 0);
  this.u = a;
  this.Nb = a.gg;
  this.L = a.L;
  this.tm = !1;
  this.Sg = void 0;
  this.pa = null;
  if (c) {
    this.type = c;
    d = g.P[c];
    if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
    g.g.object.Re(this, d);
  }
  a.Fq(this);
  a.si[this.type] || (a.si[this.type] = []);
  a.si[this.type].push(this);
  (a = g.h.uc()) || g.h.ea(!0);
  c = g.h.ab;
  try {
    "function" == typeof this.R && ((g.h.ab = !1), this.R(), (g.h.ab = c)),
      g.h.isEnabled() && g.h.Ga(new g.h.Sp(this));
  } finally {
    a || g.h.ea(!1), (g.h.ab = c);
  }
  this.tI = this.Wh;
  if ("function" == typeof this.onchange) {
    if ((a = this.onchange) && "function" != typeof a)
      throw Error("onchange must be a function.");
    this.So && Oa(this.u, this.So);
    if ((this.onchange = a)) (this.So = a.bind(this)), E(this.u, this.So);
  }
};
g.le.$m = "_TEMP_COLLAPSED_INPUT";
g.le.ft = "_TEMP_COLLAPSED_FIELD";
b = g.le.prototype;
b.data = null;
b.cg = !1;
b.hd = "#000000";
b.Wk = null;
b.I = function (a) {
  if (this.u) {
    this.So && Oa(this.u, this.So);
    x(this, a);
    g.h.isEnabled() && g.h.Ga(new g.h.TD(this));
    g.h.disable();
    try {
      if (this.u) {
        this.u.ss(this);
        var c = this.u;
        c.si[this.type].splice(c.si[this.type].indexOf(this), 1);
        c.si[this.type].length || delete c.si[this.type];
        delete this.u.su[this.id];
        this.u = null;
      }
      g.selected == this && (g.selected = null);
      for (var d = this.Ih.length - 1; 0 <= d; d--) this.Ih[d].I(!1);
      d = 0;
      for (var e; (e = this.U[d]); d++) e.I();
      this.U.length = 0;
      var f = this.eg(!0);
      d = 0;
      for (var h; (h = f[d]); d++) h.I();
    } finally {
      g.h.enable(), (this.cg = !0);
    }
  }
};
b.wk = function () {
  for (var a = 0, c; (c = this.U[a]); a++)
    for (var d = 0, e; (e = c.gb[d]); d++) e.wk && e.wk();
};
function x(a, c) {
  if (a.O) {
    var d = null;
    a.O.isConnected() && ((d = a.O.na), a.O.disconnect());
    if (d && c) {
      a: {
        c = null;
        for (var e = 0; e < a.U.length; e++) {
          var f = a.U[e].connection;
          if (f && f.type == g.jb && f.na) {
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
        !c.ra().Oa &&
        ((c = c.na),
        c.disconnect(),
        sa(a.u.Nn, c, d, !1) ? d.connect(c) : c.Zr(d));
    }
  } else
    a.ba &&
      ((d = null),
      a.ba.isConnected() && ((d = a.ba.na), a.ba.disconnect()),
      (e = t(a)),
      c &&
        e &&
        !e.Oa &&
        ((c = a.Z.na),
        c.disconnect(),
        d && sa(a.u.Nn, d, c, !1) && d.connect(c)));
}
b.eg = function () {
  var a = [];
  this.O && a.push(this.O);
  this.ba && a.push(this.ba);
  this.Z && a.push(this.Z);
  for (var c = 0, d; (d = this.U[c]); c++) d.connection && a.push(d.connection);
  return a;
};
b.Mr = function () {
  for (var a = this.Z; a; ) {
    var c = a.ra();
    if (!c) return a;
    a = c.Z;
  }
  return null;
};
b.Zb = function () {};
b.getParent = function () {
  return this.$g;
};
function Aa(a, c) {
  for (var d = 0, e; (e = a.U[d]); d++)
    if (e.connection && e.connection.ra() == c) return e;
  return null;
}
function mc(a) {
  do {
    var c = a;
    a = a.getParent();
    if (!a) return null;
  } while (t(a) == c);
  return a;
}
function t(a) {
  return a.Z && a.Z.ra();
}
b.Zd = function () {
  var a = this;
  do {
    var c = a;
    a = c.$g;
  } while (a);
  return c;
};
function Ba(a, c) {
  if (!c) return a.Ih;
  c = [];
  for (var d = 0, e; (e = a.U[d]); d++)
    e.connection && (e = e.connection.ra()) && c.push(e);
  (a = t(a)) && c.push(a);
  return c;
}
b.As = function (a) {
  if (a != this.$g) {
    if (this.$g) {
      g.g.Hq(this.$g.Ih, this);
      if (this.ba && this.ba.isConnected())
        throw Error("Still connected to previous block.");
      if (this.O && this.O.isConnected())
        throw Error("Still connected to parent block.");
      this.$g = null;
    } else this.u.ss(this);
    (this.$g = a) ? a.Ih.push(this) : this.u.Fq(this);
  }
};
function q(a, c) {
  var d = [a];
  a = Ba(a, c);
  for (var e, f = 0; (e = a[f]); f++) d.push.apply(d, q(e, c));
  return d;
}
b.ve = function () {
  return this.Uu && !this.Oa && !(this.u && this.u.options.readOnly);
};
b.Hc = function () {
  return this.lC && !this.Oa && !(this.u && this.u.options.readOnly);
};
b.zs = function (a) {
  this.lC = a;
};
b.Ax = function (a) {
  this.Oa = a;
};
b.we = function () {
  return this.tm;
};
b.$C = function (a) {
  this.tm = a;
};
b.ee = function () {
  return this.aB && !(this.u && this.u.options.readOnly);
};
b.xx = function (a) {
  this.aB = a;
  a = 0;
  for (var c; (c = this.U[a]); a++)
    for (var d = 0, e; (e = c.gb[d]); d++) e.ui();
};
b.Hv = function (a, c) {
  var d = this.eg(!0);
  a = a.eg(!0);
  if (d.length != a.length)
    throw Error("Connection lists did not match in length.");
  for (var e = 0; e < a.length; e++) if (a[e] == c) return d[e];
  return null;
};
b.eb = function (a) {
  this.Mf = a;
};
b.Ev = function () {
  return this.hd;
};
b.pd = function (a) {
  this.hd = g.g.ls(a).uo;
};
b.bc = function (a) {
  this.Wk = a;
};
function w(a, c) {
  for (var d = 0, e; (e = a.U[d]); d++)
    for (var f = 0, h; (h = e.gb[f]); f++) if (h.name == c) return h;
  return null;
}
b.Qg = function () {
  for (var a = [], c = 0, d; (d = this.U[c]); c++)
    for (var e = 0, f; (f = d.gb[e]); e++) f.$o() && a.push(f.getValue());
  return a;
};
b.Th = function () {
  for (var a = [], c = 0, d; (d = this.U[c]); c++)
    for (var e = 0, f; (f = d.gb[e]); e++)
      f.$o() && (f = this.u.fg(f.getValue())) && a.push(f);
  return a;
};
b.Os = function (a) {
  for (var c = 0, d; (d = this.U[c]); c++)
    for (var e = 0, f; (f = d.gb[e]); e++)
      f.$o() && a.Ma() == f.getValue() && gc(f);
};
b.us = function (a, c) {
  for (var d = 0, e; (e = this.U[d]); d++)
    for (var f = 0, h; (h = e.gb[f]); f++)
      h.$o() && a == h.getValue() && h.setValue(c);
};
function C(a, c) {
  return (a = w(a, c)) ? a.getValue() : null;
}
function nc(a, c, d) {
  a = w(a, d);
  if (!a) throw Error('Field "' + d + '" not found.');
  a.setValue(c);
}
b.We = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.ba) {
      if (this.O)
        throw Error(
          "Remove output connection prior to adding previous connection."
        );
      this.ba = this.Jo(g.Uf);
    }
    this.ba.yb(c);
  } else if (this.ba) {
    if (this.ba.isConnected())
      throw Error(
        "Must disconnect previous statement before removing connection."
      );
    this.ba.I();
    this.ba = null;
  }
};
b.Ve = function (a, c) {
  if (a)
    void 0 === c && (c = null),
      this.Z || (this.Z = this.Jo(g.zb)),
      this.Z.yb(c);
  else if (this.Z) {
    if (this.Z.isConnected())
      throw Error("Must disconnect next statement before removing connection.");
    this.Z.I();
    this.Z = null;
  }
};
b.je = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.O) {
      if (this.ba)
        throw Error(
          "Remove previous connection prior to adding output connection."
        );
      this.O = this.Jo(g.Tf);
    }
    this.O.yb(c);
  } else if (this.O) {
    if (this.O.isConnected())
      throw Error("Must disconnect output value before removing connection.");
    this.O.I();
    this.O = null;
  }
};
b.Rc = function (a) {
  this.Wh != a &&
    (g.h.Ga(new g.h.lh(this, "inline", null, this.Wh, a)), (this.Wh = a));
};
function xb(a) {
  if (void 0 != a.Wh) return a.Wh;
  for (var c = 1; c < a.U.length; c++)
    if (a.U[c - 1].type == g.qh && a.U[c].type == g.qh) return !1;
  for (c = 1; c < a.U.length; c++)
    if (a.U[c - 1].type == g.jb && a.U[c].type == g.qh) return !0;
  return !1;
}
b.isEnabled = function () {
  return !this.disabled;
};
b.ie = function (a) {
  this.isEnabled() != a &&
    (g.h.Ga(new g.h.lh(this, "disabled", null, this.disabled, !a)),
    (this.disabled = !a));
};
function oc(a) {
  for (a = mc(a); a; ) {
    if (a.disabled) return !0;
    a = mc(a);
  }
  return !1;
}
b.isCollapsed = function () {
  return this.bk;
};
b.zj = function (a) {
  this.bk != a &&
    (g.h.Ga(new g.h.lh(this, "collapsed", null, this.bk, a)), (this.bk = a));
};
b.toString = function (a, c) {
  function d(n) {
    var p = n.Oi;
    !p && n.na && (p = n.na.Oi);
    return !!p && (-1 != p.indexOf("Boolean") || -1 != p.indexOf("Number"));
  }
  function e() {
    k && k.mb() == l.mb() && k.Ea == l.Ea && (k = null);
  }
  var f = [];
  c = c || "?";
  var h = g.F.Fi;
  g.F.Fi = !0;
  for (var k = g.F.Dg(this), l = k; k; ) {
    switch (k.mb()) {
      case g.F.types.ef:
        var m = k.Ea;
        k.Ug() ? d(m) && f.push("(") : f.push(c);
        break;
      case g.F.types.Cc:
        (m = k.Ea), m.name != g.le.ft && f.push(m.$d());
    }
    m = k;
    k = m.Ug() || m.next();
    if (!k) {
      k = m.Yg();
      for (e(); k && !k.next(); )
        (k = k.Yg()),
          e(),
          k && k.mb() == g.F.types.ef && d(k.Ea) && f.push(")");
      k && (k = k.next());
    }
  }
  g.F.Fi = h;
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
function K(a, c) {
  return a.Gn(g.jb, c);
}
function pc(a, c) {
  return a.Gn(g.zb, c);
}
function L(a, c) {
  return a.Gn(g.qh, c || "");
}
function M(a, c) {
  var d = c.type ? 'Block "' + c.type + '": ' : "";
  if (c.output && c.previousStatement)
    throw Error(d + "Must not have both an output and a previousStatement.");
  c.style && c.style.Sg && ((a.Sg = c.style.Sg), (c.style = null));
  if (c.style && c.colour)
    throw Error(d + "Must not have both a colour and a style.");
  if (c.style) {
    var e = c.style;
    try {
      a.bc(e);
    } catch (S) {
      console.warn(d + "Style does not exist: ", e);
    }
  } else if ("colour" in c)
    if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
    else {
      e = c.colour;
      try {
        a.pd(e);
      } catch (S) {
        console.warn(d + "Illegal colour value: ", e);
      }
    }
  for (e = 0; void 0 !== c["message" + e]; ) {
    for (
      var f = a,
        h = c["args" + e] || [],
        k = c["lastDummyAlign" + e],
        l = d,
        m = g.g.IK(c["message" + e]),
        n = [],
        p = 0,
        r = [],
        y = 0;
      y < m.length;
      y++
    ) {
      var D = m[y];
      if ("number" == typeof D) {
        if (0 >= D || D > h.length)
          throw Error(
            'Block "' + f.type + '": Message index %' + D + " out of range."
          );
        if (n[D])
          throw Error(
            'Block "' + f.type + '": Message index %' + D + " duplicated."
          );
        n[D] = !0;
        p++;
        r.push(h[D - 1]);
      } else (D = D.trim()) && r.push(D);
    }
    if (p != h.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          h.length +
          " arg(s)."
      );
    r.length &&
      ("string" == typeof r[r.length - 1] ||
        g.g.qb.startsWith(r[r.length - 1].type, "field_")) &&
      ((y = { type: "input_dummy" }), k && (y.align = k), r.push(y));
    k = { LEFT: g.Us, RIGHT: g.il, CENTRE: g.Ts, CENTER: g.Ts };
    h = [];
    for (y = 0; y < r.length; y++)
      if (((n = r[y]), "string" == typeof n)) h.push([n, void 0]);
      else {
        m = p = null;
        do
          if (((D = !1), "string" == typeof n)) p = new g.vd(n);
          else
            switch (n.type) {
              case "input_value":
                m = K(f, n.name);
                break;
              case "input_statement":
                m = pc(f, n.name);
                break;
              case "input_dummy":
                m = L(f, n.name);
                break;
              default:
                (p = g.Jg.la(n)), !p && n.alt && ((n = n.alt), (D = !0));
            }
        while (D);
        if (p) h.push([p, n.name]);
        else if (m) {
          n.check && m.yb(n.check);
          n.align &&
            ((p = k[n.align.toUpperCase()]),
            void 0 === p
              ? console.warn(l + "Illegal align value: ", n.align)
              : lc(m, p));
          for (n = 0; n < h.length; n++) J(m, h[n][0], h[n][1]);
          h.length = 0;
        }
      }
    e++;
  }
  void 0 !== c.inputsInline && a.Rc(c.inputsInline);
  void 0 !== c.output && a.je(!0, c.output);
  void 0 !== c.previousStatement && a.We(!0, c.previousStatement);
  void 0 !== c.nextStatement && a.Ve(!0, c.nextStatement);
  void 0 !== c.tooltip && ((e = c.tooltip), (e = g.g.xe(e)), a.eb(e));
  void 0 !== c.enableContextMenu &&
    ((e = c.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== c.helpUrl && ((e = c.helpUrl), (e = g.g.xe(e)), (a.Ub = e));
  "string" == typeof c.extensions &&
    (console.warn(
      d +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        c.type +
        "' block."
    ),
    (c.extensions = [c.extensions]));
  void 0 !== c.mutator && g.ga.apply(c.mutator, a, !0);
  if (Array.isArray(c.extensions))
    for (c = c.extensions, d = 0; d < c.length; ++d) g.ga.apply(c[d], a, !1);
}
b.Re = function (a, c) {
  if (void 0 !== c && "boolean" != typeof c)
    throw Error("opt_disableCheck must be a boolean if provided");
  if (!c) {
    c = [];
    for (var d in a) void 0 !== this[d] && c.push(d);
    if (c.length)
      throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  }
  g.g.object.Re(this, a);
};
b.Gn = function (a, c) {
  var d = null;
  if (a == g.jb || a == g.zb) d = this.Jo(a);
  a = new g.Yy(a, c, this, d);
  this.U.push(a);
  return a;
};
function qc(a, c, d) {
  if (c != d) {
    for (var e = -1, f = d ? -1 : a.U.length, h = 0, k; (k = a.U[h]); h++)
      if (k.name == c) {
        if (((e = h), -1 != f)) break;
      } else if (d && k.name == d && ((f = h), -1 != e)) break;
    if (-1 == e) throw Error('Named input "' + c + '" not found.');
    if (-1 == f) throw Error('Reference input "' + d + '" not found.');
    a.Ew(e, f);
  }
}
b.Ew = function (a, c) {
  if (a == c) throw Error("Can't move input to itself.");
  if (a >= this.U.length)
    throw RangeError("Input index " + a + " out of bounds.");
  if (c > this.U.length)
    throw RangeError("Reference input " + c + " out of bounds.");
  var d = this.U[a];
  this.U.splice(a, 1);
  a < c && c--;
  this.U.splice(c, 0, d);
};
b.wb = function (a, c) {
  for (var d = 0, e; (e = this.U[d]); d++)
    if (e.name == a) return e.I(), this.U.splice(d, 1), !0;
  if (c) return !1;
  throw Error("Input not found: " + a);
};
function z(a, c) {
  for (var d = 0, e; (e = a.U[d]); d++) if (e.name == c) return e;
  return null;
}
function rc(a, c) {
  return (a = z(a, c)) && a.connection && a.connection.ra();
}
b.eh = function (a) {
  this.Ie.text != a &&
    (g.h.Ga(new g.h.lh(this, "comment", null, this.Ie.text, a)),
    (this.Kn = this.Ie.text = a));
};
b.Km = function () {};
b.Bj = function () {};
b.Za = function () {
  return this.DD;
};
b.moveBy = function (a, c) {
  if (this.$g) throw Error("Block has parent.");
  var d = new g.h.Ym(this);
  this.DD.translate(a, c);
  d.Tk();
  g.h.Ga(d);
};
b.Jo = function (a) {
  return new g.Ba(this, a);
};
g.m = {};
g.m.Hp = !1;
g.m.register = function (a, c) {
  g.C.register(g.C.aa.RENDERER, a, c);
};
g.m.unregister = function (a) {
  g.C.unregister(g.C.aa.RENDERER, a);
};
g.m.kO = function () {
  g.m.Hp = !0;
};
g.m.lO = function () {
  g.m.Hp = !1;
};
g.m.R = function (a, c, d) {
  a = new (g.C.jo(g.C.aa.RENDERER, a))(a);
  a.R(c, d);
  return a;
};
g.nn = function () {
  this.se = this.hb = this.Cb = null;
  this.type = "marker";
};
function F(a, c) {
  var d = a.hb;
  a.hb = c;
  a.se && a.se.draw(d, a.hb);
}
g.nn.prototype.draw = function () {
  this.se && this.se.draw(this.hb, this.hb);
};
g.nn.prototype.Ka = function () {
  this.se && this.se.Ka();
};
g.nn.prototype.I = function () {
  this.se && this.se.I();
};
g.ml = function () {
  g.ml.A.constructor.call(this);
  this.type = "cursor";
};
g.g.object.W(g.ml, g.nn);
b = g.ml.prototype;
b.next = function () {
  var a = this.hb;
  if (!a) return null;
  for (
    a = a.next();
    a && a.next() && (a.mb() == g.F.types.Jd || a.mb() == g.F.types.lc);

  )
    a = a.next();
  a && F(this, a);
  return a;
};
b.Ug = function () {
  var a = this.hb;
  if (!a) return null;
  if (a.mb() == g.F.types.Md || a.mb() == g.F.types.Uj) a = a.next();
  (a = a.Ug()) && F(this, a);
  return a;
};
b.If = function () {
  var a = this.hb;
  if (!a) return null;
  for (
    a = a.If();
    a && a.If() && (a.mb() == g.F.types.Jd || a.mb() == g.F.types.lc);

  )
    a = a.If();
  a && F(this, a);
  return a;
};
b.Yg = function () {
  var a = this.hb;
  if (!a) return null;
  (a = a.Yg()) && a.mb() == g.F.types.lc && (a = a.If() || a);
  a && F(this, a);
  return a;
};
b.jc = function (a) {
  if (this.hb && this.hb.mb() === g.F.types.Cc && this.hb.Ea.jc(a)) return !0;
  switch (a.name) {
    case g.navigation.Ab.Md:
      return this.If(), !0;
    case g.navigation.Ab.Lt:
      return this.Yg(), !0;
    case g.navigation.Ab.Jd:
      return this.next(), !0;
    case g.navigation.Ab.vt:
      return this.Ug(), !0;
    default:
      return !1;
  }
};
g.iq = function () {
  g.iq.A.constructor.call(this);
};
g.g.object.W(g.iq, g.ml);
b = g.iq.prototype;
b.jc = function (a) {
  switch (a.name) {
    case g.navigation.Ab.Md:
      return this.If(), !0;
    case g.navigation.Ab.Jd:
      return this.next(), !0;
    default:
      return !1;
  }
};
b.next = function () {
  var a = this.hb;
  if (!a) return null;
  (a = a.next()) && F(this, a);
  return a;
};
b.Ug = function () {
  return null;
};
b.If = function () {
  var a = this.hb;
  if (!a) return null;
  (a = a.If()) && F(this, a);
  return a;
};
b.Yg = function () {
  return null;
};
g.m.XL = function () {};
g.g.T = {
  zN: 0,
  cM: 3,
  LD: 8,
  hG: 9,
  oM: 12,
  eq: 13,
  yh: 16,
  wi: 17,
  jl: 18,
  $M: 19,
  gL: 20,
  ot: 27,
  Bz: 32,
  SF: 33,
  RF: 34,
  tE: 35,
  VE: 36,
  xl: 37,
  Oz: 38,
  El: 39,
  zy: 40,
  cN: 43,
  eN: 44,
  Ty: 45,
  Nj: 46,
  ZERO: 48,
  ONE: 49,
  uN: 50,
  sN: 51,
  RL: 52,
  QL: 53,
  pN: 54,
  nN: 55,
  vL: 56,
  mM: 57,
  OL: 59,
  ML: 61,
  LL: 173,
  NL: 163,
  fN: 63,
  bL: 64,
  Yx: 65,
  dL: 66,
  bt: 67,
  ty: 68,
  E: 69,
  xL: 70,
  xc: 71,
  UL: 72,
  ZE: 73,
  YL: 74,
  iF: 75,
  ZL: 76,
  bM: 77,
  lM: 78,
  EM: 79,
  ZM: 80,
  Q: 81,
  gN: 82,
  yz: 83,
  gG: 84,
  vN: 85,
  fu: 86,
  Vz: 87,
  Cq: 88,
  vG: 89,
  Ql: 90,
  zl: 91,
  AN: 92,
  mL: 93,
  DM: 96,
  wM: 97,
  CM: 98,
  BM: 99,
  sM: 100,
  rM: 101,
  AM: 102,
  zM: 103,
  qM: 104,
  vM: 105,
  uM: 106,
  yM: 107,
  tM: 109,
  xM: 110,
  pM: 111,
  yL: 112,
  CL: 113,
  DL: 114,
  EL: 115,
  FL: 116,
  GL: 117,
  HL: 118,
  IL: 119,
  JL: 120,
  zL: 121,
  AL: 122,
  BL: 123,
  nM: 144,
  kN: 145,
  PL: 166,
  $L: 183,
  lN: 186,
  oL: 189,
  wL: 187,
  lL: 188,
  aN: 190,
  qN: 191,
  aL: 192,
  tN: 192,
  oN: 222,
  FM: 219,
  eL: 220,
  jL: 221,
  yN: 224,
  dM: 224,
  eM: 91,
  fM: 93,
  xN: 229,
  wN: 252,
  bN: 255,
};
g.Dt = function () {
  this.Df = [];
  this.Uk = this.Eb = this.bs = this.Ur = this.Tr = this.Sq = this.Vr = this.$i = this.Sw = null;
};
b = g.Dt.prototype;
b.Ha = function (a) {
  var c = document.createElement("div");
  c.className = "blocklyMenu goog-menu blocklyNonSelectable";
  c.tabIndex = 0;
  this.Uk && g.g.ua.Kf(c, this.Uk);
  this.Eb = c;
  for (var d = 0, e; (e = this.Df[d]); d++) c.appendChild(e.Ya());
  this.Vr = g.ya(c, "mouseover", this, this.jI, !0);
  this.Sq = g.ya(c, "click", this, this.dI, !0);
  this.Tr = g.ya(c, "mouseenter", this, this.hI, !0);
  this.Ur = g.ya(c, "mouseleave", this, this.iI, !0);
  this.bs = g.ya(c, "keydown", this, this.fI);
  a.appendChild(c);
};
b.focus = function () {
  var a = this.Eb;
  a && (a.focus({ preventScroll: !0 }), g.g.o.Fa(a, "blocklyFocused"));
};
b.Kf = function (a) {
  this.Uk = a;
};
b.I = function () {
  this.Vr && (g.Qa(this.Vr), (this.Vr = null));
  this.Sq && (g.Qa(this.Sq), (this.Sq = null));
  this.Tr && (g.Qa(this.Tr), (this.Tr = null));
  this.Ur && (g.Qa(this.Ur), (this.Ur = null));
  this.bs && (g.Qa(this.bs), (this.bs = null));
  for (var a = 0, c; (c = this.Df[a]); a++) c.I();
  this.Eb = null;
};
function sc(a, c) {
  for (var d = a.Eb; c && c != d; ) {
    if (g.g.o.to(c, "blocklyMenuItem"))
      for (var e = 0, f; (f = a.Df[e]); e++) if (f.Eb == c) return f;
    c = c.parentElement;
  }
  return null;
}
b.ji = function (a) {
  var c = this.$i;
  c && (c.ji(!1), (this.$i = null));
  a &&
    (a.ji(!0),
    (this.$i = a),
    (c = this.Eb),
    g.g.style.oK(a.Eb, c),
    g.g.ua.qd(c, g.g.ua.State.Ss, a.Ma()));
};
function tc(a) {
  var c = a.Df.indexOf(a.$i);
  uc(a, 0 > c ? a.Df.length : c, -1);
}
function uc(a, c, d) {
  c += d;
  for (var e; (e = a.Df[c]); ) {
    if (e.isEnabled()) {
      a.ji(e);
      break;
    }
    c += d;
  }
}
b.jI = function (a) {
  (a = sc(this, a.target)) &&
    (a.isEnabled() ? this.$i != a && this.ji(a) : this.ji(null));
};
b.dI = function (a) {
  var c = this.Sw;
  this.Sw = null;
  (c &&
    "number" == typeof a.clientX &&
    1 > g.g.X.fv(c, new g.g.X(a.clientX, a.clientY))) ||
    ((a = sc(this, a.target)) && a.isEnabled() && a.En && a.En(a));
};
b.hI = function () {
  this.focus();
};
b.iI = function () {
  if (this.Eb) {
    var a = this.Eb;
    a && (a.blur(), g.g.o.Vb(a, "blocklyFocused"));
    this.ji(null);
  }
};
b.fI = function (a) {
  if (this.Df.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
    var c = this.$i;
    switch (a.keyCode) {
      case g.g.T.eq:
      case g.g.T.Bz:
        c && c.isEnabled() && c.En && c.En(c);
        break;
      case g.g.T.Oz:
        tc(this);
        break;
      case g.g.T.zy:
        uc(this, this.Df.indexOf(this.$i), 1);
        break;
      case g.g.T.SF:
      case g.g.T.VE:
        uc(this, -1, 1);
        break;
      case g.g.T.RF:
      case g.g.T.tE:
        uc(this, this.Df.length, -1);
        break;
      default:
        return;
    }
    a.preventDefault();
    a.stopPropagation();
  }
};
b.Sh = function () {
  var a = this.Eb,
    c = g.g.style.Sh(a);
  c.height = a.scrollHeight;
  return c;
};
g.Et = function (a, c) {
  this.Lh = a;
  this.Lc = c;
  this.lr = !0;
  this.Eb = null;
  this.vx = !1;
  this.Uk = null;
  this.MB = this.Eu = this.Du = !1;
  this.En = null;
};
b = g.Et.prototype;
b.Ya = function () {
  var a = document.createElement("div");
  a.id = g.g.ul.Jv();
  this.Eb = a;
  a.className =
    "blocklyMenuItem goog-menuitem " +
    (this.lr ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") +
    (this.Eu ? "blocklyMenuItemSelected goog-option-selected " : "") +
    (this.MB ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") +
    (this.vx ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
  var c = document.createElement("div");
  c.className = "blocklyMenuItemContent goog-menuitem-content";
  if (this.Du) {
    var d = document.createElement("div");
    d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
    c.appendChild(d);
  }
  d = this.Lh;
  "string" == typeof this.Lh && (d = document.createTextNode(this.Lh));
  c.appendChild(d);
  a.appendChild(c);
  this.Uk && g.g.ua.Kf(a, this.Uk);
  g.g.ua.qd(a, g.g.ua.State.Fl, (this.Du && this.Eu) || !1);
  g.g.ua.qd(a, g.g.ua.State.kE, !this.lr);
  return a;
};
b.I = function () {
  this.Eb = null;
};
b.Ma = function () {
  return this.Eb.id;
};
b.getValue = function () {
  return this.Lc;
};
b.Kf = function (a) {
  this.Uk = a;
};
b.ji = function (a) {
  this.MB = a;
  var c = this.Eb;
  c &&
    this.isEnabled() &&
    (a
      ? (g.g.o.Fa(c, "blocklyMenuItemHighlight"),
        g.g.o.Fa(c, "goog-menuitem-highlight"))
      : (g.g.o.Vb(c, "blocklyMenuItemHighlight"),
        g.g.o.Vb(c, "goog-menuitem-highlight")));
};
b.isEnabled = function () {
  return this.lr;
};
b.ie = function (a) {
  this.lr = a;
};
function vc(a, c, d) {
  a.En = c.bind(d);
}
g.Sa = {};
g.Sa.$q = null;
g.Sa.Zc = null;
g.Sa.show = function (a, c, d) {
  g.ca.show(g.Sa, d, g.Sa.I);
  if (c.length) {
    var e = g.Sa.wJ(c, d);
    g.Sa.Zc = e;
    g.Sa.Sk(e, a, d);
    setTimeout(function () {
      e.focus();
    }, 1);
    g.Sa.$q = null;
  } else g.Sa.Ka();
};
g.Sa.wJ = function (a, c) {
  var d = new g.Dt();
  d.Kf(g.g.ua.Ii.CF);
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new g.Et(f.text);
    h.vx = c;
    h.Kf(g.g.ua.Ii.DF);
    d.Df.push(h);
    h.ie(f.enabled);
    f.enabled &&
      vc(
        h,
        function () {
          g.Sa.Ka();
          this.za(this.scope);
        },
        f
      );
  }
  return d;
};
g.Sa.Sk = function (a, c, d) {
  var e = g.g.bI();
  c = new g.g.Rect(
    c.clientY + e.top,
    c.clientY + e.top,
    c.clientX + e.left,
    c.clientX + e.left
  );
  g.Sa.eH(a);
  var f = a.Sh();
  d &&
    ((c.left += f.width),
    (c.right += f.width),
    (e.left += f.width),
    (e.right += f.width));
  g.ca.xJ(e, c, f, d);
  a.focus();
};
g.Sa.eH = function (a) {
  a.Ha(g.ca.ib);
  var c = a.Eb;
  g.g.o.Fa(c, "blocklyContextMenu");
  g.ya(c, "contextmenu", null, g.g.aJ);
  a.focus();
};
g.Sa.Ka = function () {
  g.ca.vo(g.Sa);
  g.Sa.$q = null;
};
g.Sa.I = function () {
  g.Sa.Zc && (g.Sa.Zc.I(), (g.Sa.Zc = null));
};
g.Sa.Jn = function (a, c) {
  return function () {
    g.h.disable();
    try {
      var d = g.V.gk(c, a.u),
        e = a.Za();
      e.x = a.L ? e.x - g.Od : e.x + g.Od;
      e.y += 2 * g.Od;
      d.moveBy(e.x, e.y);
    } finally {
      g.h.enable();
    }
    g.h.isEnabled() && !d.Oa && g.h.Ga(new g.h.Sp(d));
    d.select();
  };
};
g.Sa.FN = function (a) {
  return {
    text: g.i.REMOVE_COMMENT,
    enabled: !0,
    za: function () {
      g.h.ea(!0);
      a.I(!0, !0);
      g.h.ea(!1);
    },
  };
};
g.Sa.GN = function (a) {
  return {
    text: g.i.DUPLICATE_COMMENT,
    enabled: !0,
    za: function () {
      g.duplicate(a);
    },
  };
};
g.Sa.oO = function (a, c) {
  if (!g.Pl) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
  var d = { enabled: !g.g.userAgent.df };
  d.text = g.i.ADD_COMMENT;
  d.za = function () {
    var e = new g.Pl(a, g.i.WORKSPACE_COMMENT_DEFAULT_TEXT, g.Pl.iE, g.Pl.iE),
      f = aa(a).getBoundingClientRect();
    f = new g.g.X(c.clientX - f.left, c.clientY - f.top);
    var h = g.g.oo(a.xb);
    f = g.g.X.Wn(f, h);
    f.scale(1 / a.scale);
    e.moveBy(f.x, f.y);
    a.pa && (e.Bf(), e.Ha(), e.select());
  };
  return d;
};
g.Ca = {};
g.Ca.ox = function () {
  g.Ta.C.register({
    Vd: function () {
      return g.i.UNDO;
    },
    $a: function (a) {
      return 0 < a.u.$k.length ? "enabled" : "disabled";
    },
    za: function (a) {
      Ma(a.u, !1);
    },
    Ue: g.Ta.Qd.Vc,
    id: "undoWorkspace",
    weight: 1,
  });
};
g.Ca.nx = function () {
  g.Ta.C.register({
    Vd: function () {
      return g.i.REDO;
    },
    $a: function (a) {
      return 0 < a.u.Zo.length ? "enabled" : "disabled";
    },
    za: function (a) {
      Ma(a.u, !0);
    },
    Ue: g.Ta.Qd.Vc,
    id: "redoWorkspace",
    weight: 2,
  });
};
g.Ca.CJ = function () {
  g.Ta.C.register({
    Vd: function () {
      return g.i.CLEAN_UP;
    },
    $a: function (a) {
      return a.u.Hc()
        ? 1 < a.u.$b(!1).length
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    za: function (a) {
      a = a.u;
      a.ad(!1);
      g.h.ea(!0);
      for (var c = a.$b(!0), d = 0, e = 0, f; (f = c[e]); e++)
        if (f.Hc()) {
          var h = f.Za();
          f.moveBy(-h.x, d - h.y);
          wc(f);
          d = f.Za().y + I(f).height + a.Kb.ka().ln;
        }
      g.h.ea(!1);
      a.ad(!0);
    },
    Ue: g.Ta.Qd.Vc,
    id: "cleanWorkspace",
    weight: 3,
  });
};
g.Ca.oD = function (a, c) {
  for (var d = 0, e = 0; e < c.length; e++)
    for (var f = c[e]; f; )
      setTimeout(f.zj.bind(f, a), d), (f = t(f)), (d += 10);
};
g.Ca.DJ = function () {
  g.Ta.C.register({
    Vd: function () {
      return g.i.COLLAPSE_ALL;
    },
    $a: function (a) {
      if (a.u.options.collapse) {
        a = a.u.$b(!1);
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
      g.Ca.oD(!0, a.u.$b(!0));
    },
    Ue: g.Ta.Qd.Vc,
    id: "collapseWorkspace",
    weight: 4,
  });
};
g.Ca.QJ = function () {
  g.Ta.C.register({
    Vd: function () {
      return g.i.EXPAND_ALL;
    },
    $a: function (a) {
      if (a.u.options.collapse) {
        a = a.u.$b(!1);
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
      g.Ca.oD(!1, a.u.$b(!0));
    },
    Ue: g.Ta.Qd.Vc,
    id: "expandWorkspace",
    weight: 5,
  });
};
g.Ca.eA = function (a, c) {
  if (a.ve()) Array.prototype.push.apply(c, q(a, !1));
  else {
    a = Ba(a, !1);
    for (var d = 0; d < a.length; d++) g.Ca.eA(a[d], c);
  }
};
g.Ca.Fv = function (a) {
  var c = [];
  a = a.$b(!0);
  for (var d = 0; d < a.length; d++) g.Ca.eA(a[d], c);
  return c;
};
g.Ca.cr = function (a, c) {
  g.h.ea(c);
  var d = a.shift();
  d && (d.u ? (d.I(!1, !0), setTimeout(g.Ca.cr, 10, a, c)) : g.Ca.cr(a, c));
  g.h.ea(!1);
};
g.Ca.KJ = function () {
  g.Ta.C.register({
    Vd: function (a) {
      if (a.u)
        return (
          (a = g.Ca.Fv(a.u).length),
          1 == a
            ? g.i.DELETE_BLOCK
            : g.i.DELETE_X_BLOCKS.replace("%1", String(a))
        );
    },
    $a: function (a) {
      if (a.u) return 0 < g.Ca.Fv(a.u).length ? "enabled" : "disabled";
    },
    za: function (a) {
      if (a.u) {
        xc(a.u);
        var c = g.Ca.Fv(a.u),
          d = g.g.Qh();
        2 > c.length
          ? g.Ca.cr(c, d)
          : g.confirm(
              g.i.DELETE_ALL_BLOCKS.replace("%1", c.length),
              function (e) {
                e && g.Ca.cr(c, d);
              }
            );
      }
    },
    Ue: g.Ta.Qd.Vc,
    id: "workspaceDelete",
    weight: 6,
  });
};
g.Ca.gK = function () {
  g.Ca.ox();
  g.Ca.nx();
  g.Ca.CJ();
  g.Ca.DJ();
  g.Ca.QJ();
  g.Ca.KJ();
};
g.Ca.NJ = function () {
  g.Ta.C.register({
    Vd: function () {
      return g.i.DUPLICATE_BLOCK;
    },
    $a: function (a) {
      a = a.block;
      return !a.Nb && a.ve() && a.Hc()
        ? (La(a.u) ? Ka(a.u, g.g.Bv(a, !0)) : 1)
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    za: function (a) {
      a.block && g.duplicate(a.block);
    },
    Ue: g.Ta.Qd.lc,
    id: "blockDuplicate",
    weight: 1,
  });
};
g.Ca.FJ = function () {
  g.Ta.C.register({
    Vd: function (a) {
      return a.block.pf ? g.i.REMOVE_COMMENT : g.i.ADD_COMMENT;
    },
    $a: function (a) {
      a = a.block;
      return g.g.userAgent.df ||
        a.Nb ||
        !a.u.options.Ln ||
        a.isCollapsed() ||
        !a.ee()
        ? "hidden"
        : "enabled";
    },
    za: function (a) {
      a = a.block;
      a.pf ? a.eh(null) : a.eh("");
    },
    Ue: g.Ta.Qd.lc,
    id: "blockComment",
    weight: 2,
  });
};
g.Ca.TJ = function () {
  g.Ta.C.register({
    Vd: function (a) {
      return xb(a.block) ? g.i.EXTERNAL_INPUTS : g.i.INLINE_INPUTS;
    },
    $a: function (a) {
      a = a.block;
      if (!a.Nb && a.Hc() && !a.isCollapsed())
        for (var c = 1; c < a.U.length; c++)
          if (a.U[c - 1].type != g.zb && a.U[c].type != g.zb) return "enabled";
      return "hidden";
    },
    za: function (a) {
      a.block.Rc(!xb(a.block));
    },
    Ue: g.Ta.Qd.lc,
    id: "blockInline",
    weight: 3,
  });
};
g.Ca.EJ = function () {
  g.Ta.C.register({
    Vd: function (a) {
      return a.block.isCollapsed() ? g.i.EXPAND_BLOCK : g.i.COLLAPSE_BLOCK;
    },
    $a: function (a) {
      a = a.block;
      return !a.Nb && a.Hc() ? "enabled" : "hidden";
    },
    za: function (a) {
      a.block.zj(!a.block.isCollapsed());
    },
    Ue: g.Ta.Qd.lc,
    id: "blockCollapseExpand",
    weight: 4,
  });
};
g.Ca.LJ = function () {
  g.Ta.C.register({
    Vd: function (a) {
      return a.block.isEnabled() ? g.i.DISABLE_BLOCK : g.i.ENABLE_BLOCK;
    },
    $a: function (a) {
      a = a.block;
      return !a.Nb && a.u.options.disable && a.ee()
        ? oc(a)
          ? "disabled"
          : "enabled"
        : "hidden";
    },
    za: function (a) {
      a = a.block;
      var c = g.h.uc();
      c || g.h.ea(!0);
      a.ie(!a.isEnabled());
      c || g.h.ea(!1);
    },
    Ue: g.Ta.Qd.lc,
    id: "blockDisable",
    weight: 5,
  });
};
g.Ca.lx = function () {
  g.Ta.C.register({
    Vd: function (a) {
      var c = a.block;
      a = q(c, !1).length;
      (c = t(c)) && (a -= q(c, !1).length);
      return 1 == a
        ? g.i.DELETE_BLOCK
        : g.i.DELETE_X_BLOCKS.replace("%1", String(a));
    },
    $a: function (a) {
      return !a.block.Nb && a.block.ve() ? "enabled" : "hidden";
    },
    za: function (a) {
      g.h.ea(!0);
      a.block.I(!0, !0);
      g.h.ea(!1);
    },
    Ue: g.Ta.Qd.lc,
    id: "blockDelete",
    weight: 6,
  });
};
g.Ca.RJ = function () {
  g.Ta.C.register({
    Vd: function () {
      return g.i.HELP;
    },
    $a: function (a) {
      a = a.block;
      return ("function" == typeof a.Ub ? a.Ub() : a.Ub) ? "enabled" : "hidden";
    },
    za: function (a) {
      a.block.showHelp();
    },
    Ue: g.Ta.Qd.lc,
    id: "blockHelp",
    weight: 7,
  });
};
g.Ca.BJ = function () {
  g.Ca.NJ();
  g.Ca.FJ();
  g.Ca.TJ();
  g.Ca.EJ();
  g.Ca.LJ();
  g.Ca.lx();
  g.Ca.RJ();
};
g.Ca.IJ = function () {
  g.Ca.gK();
  g.Ca.BJ();
};
g.Ta = function () {
  g.Ta.C = this;
  this.Se = {};
  g.Ca.IJ();
};
g.Ta.Qd = { lc: "block", Vc: "workspace" };
g.Ta.C = null;
g.Ta.prototype.register = function (a) {
  if (this.Se[a.id])
    throw Error('Menu item with id "' + a.id + '" is already registered.');
  this.Se[a.id] = a;
};
g.Ta.prototype.unregister = function (a) {
  if (this.Se[a]) delete this.Se[a];
  else throw Error('Menu item with id "' + a + '" not found.');
};
g.Ta.prototype.getItem = function (a) {
  return this.Se[a] ? this.Se[a] : null;
};
function yc(a, c) {
  var d = [],
    e = g.Ta.C.Se;
  Object.keys(e).forEach(function (f) {
    f = e[f];
    if (a == f.Ue) {
      var h = f.$a(c);
      "hidden" != h &&
        ((f = {
          text: "function" == typeof f.Vd ? f.Vd(c) : f.Vd,
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
new g.Ta();
g.h.ug = function (a, c, d) {
  g.h.ug.A.constructor.call(this, d);
  this.rC = a;
  this.nC = c;
};
g.g.object.W(g.h.ug, g.h.Fe);
g.h.ug.prototype.type = g.h.Fl;
g.h.ug.prototype.wa = function () {
  var a = g.h.ug.A.wa.call(this);
  a.oldElementId = this.rC;
  a.newElementId = this.nC;
  return a;
};
g.h.ug.prototype.la = function (a) {
  g.h.ug.A.la.call(this, a);
  this.rC = a.oldElementId;
  this.nC = a.newElementId;
};
g.C.register(g.C.aa.fc, g.h.Fl, g.h.ug);
g.yc = function (a, c) {
  g.yc.A.constructor.call(this, a, c);
  this.Gg = a.u.Yq[c];
  this.KA = a.u.Yq[g.Bl[c]];
  this.Pk = new g.g.X(0, 0);
  this.ri = g.yc.xg.Xz;
  this.na = null;
};
g.g.object.W(g.yc, g.Ba);
g.yc.xg = { Xz: -1, Nz: 0, Ol: 1 };
b = g.yc.prototype;
b.I = function () {
  g.yc.A.I.call(this);
  this.ri == g.yc.xg.Ol && zc(this.Gg, this, this.y);
};
b.Y = function () {
  return g.yc.A.Y.call(this);
};
b.ra = function () {
  return g.yc.A.ra.call(this);
};
function wa(a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
}
function nb(a, c) {
  if (!a.K.u.Gc()) {
    var d = a.K.Zd();
    if (!d.Nb) {
      var e = !1;
      if (!d.Hc()) {
        d = c.Y().Zd();
        if (!d.Hc()) return;
        c = a;
        e = !0;
      }
      var f = g.selected == d;
      f || d.Dq();
      var h = c.x + g.Od + Math.floor(Math.random() * g.at) - a.x,
        k = c.y + g.Od + Math.floor(Math.random() * g.at) - a.y;
      e && (k = -k);
      d.L && (h = c.x - g.Od - Math.floor(Math.random() * g.at) - a.x);
      d.moveBy(h, k);
      f || d.ap();
    }
  }
}
b.moveTo = function (a, c) {
  if (this.ri == g.yc.xg.Xz) {
    var d = this.Gg;
    d.tc.splice(Ac(d, c), 0, this);
    this.ri = g.yc.xg.Ol;
  } else
    this.ri == g.yc.xg.Ol &&
      (zc(this.Gg, this, this.y),
      (d = this.Gg),
      d.tc.splice(Ac(d, c), 0, this));
  this.x = a;
  this.y = c;
};
b.moveBy = function (a, c) {
  this.moveTo(this.x + a, this.y + c);
};
function Bc(a, c) {
  a.moveTo(c.x + a.Pk.x, c.y + a.Pk.y);
}
function Cc(a, c, d) {
  a.Pk.x = c;
  a.Pk.y = d;
}
function Dc(a) {
  var c = a.na.x - a.x,
    d = a.na.y - a.y;
  if (0 != c || 0 != d) {
    a = a.ra();
    var e = a.Na();
    if (!e) throw Error("block is not rendered.");
    e = g.g.yf(e);
    a.Na().setAttribute(
      "transform",
      "translate(" + (e.x - c) + "," + (e.y - d) + ")"
    );
    Kb(a, -c, -d);
  }
}
b.closest = function (a, c) {
  var d = this.KA;
  if (d.tc.length) {
    var e = this.y,
      f = this.x;
    this.x = f + c.x;
    this.y = e + c.y;
    var h = Ac(d, this.y);
    c = null;
    for (var k = a, l, m = h - 1; 0 <= m && Math.abs(d.tc[m].y - this.y) <= a; )
      (l = d.tc[m]),
        sa(d.zA, this, l, !0, k) && ((c = l), (k = wa(l, this))),
        m--;
    for (; h < d.tc.length && Math.abs(d.tc[h].y - this.y) <= a; )
      (l = d.tc[h]),
        sa(d.zA, this, l, !0, k) && ((c = l), (k = wa(l, this))),
        h++;
    this.x = f;
    this.y = e;
    a = { connection: c, ps: k };
  } else a = { connection: null, ps: a };
  return a;
};
function kc(a, c) {
  (c && a.ri == g.yc.xg.Ol) ||
    (!c && a.ri == g.yc.xg.Nz) ||
    a.K.Nb ||
    (c
      ? ((c = a.Gg), c.tc.splice(Ac(c, a.y), 0, a), (a.ri = g.yc.xg.Ol))
      : (a.ri == g.yc.xg.Ol && zc(a.Gg, a, a.y), (a.ri = g.yc.xg.Nz)));
}
function jc(a) {
  kc(a, !0);
  var c = [];
  if (a.type != g.jb && a.type != g.zb) return c;
  if ((a = a.ra())) {
    if (a.isCollapsed()) {
      var d = [];
      a.O && d.push(a.O);
      a.Z && d.push(a.Z);
      a.ba && d.push(a.ba);
    } else d = a.eg(!0);
    for (var e = 0; e < d.length; e++) c.push.apply(c, jc(d[e]));
    c.length || (c[0] = a);
  }
  return c;
}
b.Zr = function (a) {
  nb(this, a);
};
b.cv = function (a, c) {
  g.yc.A.cv.call(this, a, c);
  a.pa && a.Ha();
  c.pa && (Ea(c), c.Ha(), (c.Na().style.display = "block"));
};
b.ep = function () {
  g.yc.A.ep.call(this);
  var a = this.ra();
  a && (a.Bf(), a.Ha(!1), (a = this.Y()), a.pa && a.Ha());
};
b.mC = function (a) {
  return Ec(this.KA, this, a);
};
b.ag = function (a) {
  g.yc.A.ag.call(this, a);
  var c = this.Y();
  a = a.Y();
  var d = c.pa,
    e = a.pa;
  d && Ea(c);
  e && Ea(a);
  d && e && (this.type == g.zb || this.type == g.Uf ? a.Ha() : c.Ha());
  if ((c = Aa(c, a)))
    (c = c.isVisible()), (a.Na().style.display = c ? "block" : "none");
};
b.AC = function () {
  !this.isConnected() ||
    (this.na && sa(lb(this), this, this.na, !1)) ||
    (x(v(this) ? this.ra() : this.K), this.K.Zb());
};
g.Rp = function () {
  g.Rp.A.constructor.call(this);
};
g.g.object.W(g.Rp, g.ml);
b = g.Rp.prototype;
b.next = function () {
  var a = this.hb;
  if (!a) return null;
  (a = Fc(this, a, this.Tx)) && F(this, a);
  return a;
};
b.Ug = function () {
  return this.next();
};
b.If = function () {
  var a = this.hb;
  if (!a) return null;
  (a = Gc(this, a, this.Tx)) && F(this, a);
  return a;
};
b.Yg = function () {
  return this.If();
};
function Fc(a, c, d) {
  if (!c) return null;
  var e = c.Ug() || c.next();
  if (d(e)) return e;
  if (e) return Fc(a, e, d);
  c = Hc(a, c.Yg());
  return d(c) ? c : c ? Fc(a, c, d) : null;
}
function Gc(a, c, d) {
  if (!c) return null;
  var e = c.If();
  e = e ? Ic(a, e) : c.Yg();
  return d(e) ? e : e ? Gc(a, e, d) : null;
}
b.Tx = function (a) {
  var c = !1;
  a = a && a.mb();
  if (
    a == g.F.types.Uj ||
    a == g.F.types.ef ||
    a == g.F.types.Cc ||
    a == g.F.types.Jd ||
    a == g.F.types.Md ||
    a == g.F.types.Vc
  )
    c = !0;
  return c;
};
function Hc(a, c) {
  if (!c) return null;
  var d = c.next();
  return d ? d : Hc(a, c.Yg());
}
function Ic(a, c) {
  if (!c.Ug()) return c;
  for (c = c.Ug(); c.next(); ) c = c.next();
  return Ic(a, c);
}
g.Bq = function () {
  g.Bq.A.constructor.call(this);
};
g.g.object.W(g.Bq, g.Rp);
g.Bq.prototype.Tx = function (a) {
  var c = !1,
    d = a && a.mb();
  a && ((a = a.Ea), d == g.F.types.Cc && a && a.YB() && jb(a) && (c = !0));
  return c;
};
g.tb = function (a, c, d) {
  this.N = g.g.o.M(g.g.G.xc, {}, null);
  this.N.Cp = "";
  this.style = Jc(a.Kb.ka(), null);
  this.Ob = a.Kb.eC(this.N, this.style);
  this.px = this.pa = !1;
  this.u = a;
  this.ba = this.Z = this.O = null;
  this.Ip = g.g.zk() && !!a.Ge;
  var e = this.Ob.dc;
  e.Mf = this;
  g.J.Ul(e);
  g.tb.A.constructor.call(this, a, c, d);
  this.N.dataset
    ? (this.N.dataset.id = this.id)
    : g.g.userAgent.df && this.N.setAttribute("data-id", this.id);
};
g.g.object.W(g.tb, g.le);
g.tb.prototype.height = 0;
g.tb.prototype.width = 0;
g.tb.prototype.Ae = null;
g.tb.WL = -1;
g.tb.VD = "TEMP_COLLAPSED_WARNING_";
b = g.tb.prototype;
b.Bf = function () {
  if (!this.u.pa) throw TypeError("Workspace is headless.");
  for (var a = 0, c; (c = this.U[a]); a++) c.R();
  c = Gb(this);
  for (a = 0; a < c.length; a++) Wa(c[a]);
  this.oc();
  Eb(this.Ob, "blocklyDraggable", this.Hc());
  a = this.Na();
  this.u.options.readOnly ||
    this.CH ||
    !a ||
    g.ya(a, "mousedown", this, this.pj);
  this.CH = !0;
  a.parentNode || this.u.xb.appendChild(a);
};
b.select = function () {
  if (this.Oa && this.getParent()) this.getParent().select();
  else if (g.selected != this) {
    var a = null;
    if (g.selected) {
      a = g.selected.id;
      g.h.disable();
      try {
        Ob(g.selected);
      } finally {
        g.h.enable();
      }
    }
    a = new g.h.ug(a, this.id, this.u.id);
    g.h.Ga(a);
    g.selected = this;
    this.Dq();
  }
};
function Ob(a) {
  if (g.selected == a) {
    var c = new g.h.ug(a.id, null, a.u.id);
    c.Sc = a.u.id;
    g.h.Ga(c);
    g.selected = null;
    a.ap();
  }
}
b.nd = null;
b.Kn = null;
b.pf = null;
b.$e = null;
function Gb(a) {
  var c = [];
  a.nd && c.push(a.nd);
  a.pf && c.push(a.pf);
  a.$e && c.push(a.$e);
  return c;
}
b.As = function (a) {
  var c = this.$g;
  if (a != c) {
    g.g.o.tp();
    g.tb.A.As.call(this, a);
    g.g.o.up();
    var d = this.Na();
    if (!this.u.aw && d) {
      var e = this.Za();
      a
        ? (a.Na().appendChild(d),
          (a = this.Za()),
          Kb(this, a.x - e.x, a.y - e.y))
        : c && (this.u.xb.appendChild(d), this.translate(e.x, e.y));
      this.oc();
    }
  }
};
b.Za = function () {
  var a = 0,
    c = 0,
    d = this.Ip ? this.u.Ge.uc() : null,
    e = this.Na();
  if (e) {
    do {
      var f = g.g.yf(e);
      a += f.x;
      c += f.y;
      this.Ip &&
        this.u.Ge.Hg.firstChild == e &&
        ((f = this.u.Ge.Mv()), (a += f.x), (c += f.y));
      e = e.parentNode;
    } while (e && e != this.u.xb && e != d);
  }
  return new g.g.X(a, c);
};
b.moveBy = function (a, c) {
  if (this.$g) throw Error("Block has parent.");
  var d = g.h.isEnabled();
  if (d) var e = new g.h.Ym(this);
  var f = this.Za();
  this.translate(f.x + a, f.y + c);
  Kb(this, a, c);
  d && (e.Tk(), g.h.Ga(e));
  Fa(this.u);
};
b.translate = function (a, c) {
  this.Na().setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.moveTo = function (a) {
  var c = this.Za();
  this.moveBy(a.x - c.x, a.y - c.y);
};
b.Dw = function (a) {
  this.Ip
    ? this.u.Ge.Zk(a.x, a.y)
    : ((this.N.Cp = "translate(" + a.x + "," + a.y + ")"),
      this.N.setAttribute("transform", this.N.Cp + this.N.pp));
};
function wc(a) {
  if (a.u && !a.u.Gc() && !a.getParent() && !a.Nb) {
    var c = a.u.zf;
    if (c && c.yK) {
      var d = c.Gx,
        e = d / 2,
        f = a.Za();
      c = Math.round((f.x - e) / d) * d + e - f.x;
      d = Math.round((f.y - e) / d) * d + e - f.y;
      c = Math.round(c);
      d = Math.round(d);
      (0 == c && 0 == d) || a.moveBy(c, d);
    }
  }
}
function Kc(a) {
  var c = a.Za(),
    d = I(a);
  if (a.L) {
    a = c.x - d.width;
    var e = c.x;
  } else (a = c.x), (e = c.x + d.width);
  return new g.g.Rect(c.y, c.y + d.height, a, e);
}
b.Ko = function () {
  this.Ob.$l = this.u.Kb.ka();
  for (var a = 0, c; (c = this.U[a]); a++) c.Ko();
};
b.zj = function (a) {
  this.bk != a &&
    (g.tb.A.zj.call(this, a), a ? this.pa && this.Ha() : Lc(this));
};
function Lc(a) {
  for (var c = a.isCollapsed(), d = 0, e; (e = a.U[d]); d++)
    e.name != g.le.$m && e.Gb(!c);
  if (c) {
    e = Gb(a);
    for (d = 0; (c = e[d]); d++) c.Gb(!1);
    d = a.toString(g.WD);
    (e = w(a, g.le.ft))
      ? e.setValue(d)
      : ((e = z(a, g.le.$m) || L(a, g.le.$m)), J(e, new g.vd(d), g.le.ft));
  } else a.wb(g.le.$m);
}
b.pj = function (a) {
  var c = this.u && this.u.Rh(a);
  if (c) {
    if (c.pk)
      throw Error(
        "Tried to call gesture.handleBlockStart, but the gesture had already been started."
      );
    Xb(c, this);
    c.Ef = a;
  }
};
b.showHelp = function () {
  var a = "function" == typeof this.Ub ? this.Ub() : this.Ub;
  a && window.open(a);
};
b.np = function (a) {
  if (this.u.options.readOnly || !this.contextMenu) var c = null;
  else (c = yc(g.Ta.Qd.lc, { block: this })), this.Fg && this.Fg(c);
  c && c.length && (g.Sa.show(a, c, this.L), (g.Sa.$q = this));
};
function Kb(a, c, d) {
  if (a.pa) {
    for (var e = a.eg(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
    e = Gb(a);
    for (f = 0; f < e.length; f++) Xa(e[f]);
    for (f = 0; f < a.Ih.length; f++) Kb(a.Ih[f], c, d);
  }
}
b.Aj = function (a) {
  if (a) {
    var c = this.Na();
    c.Cp = "";
    c.pp = "";
    g.gm = g.gm.concat(this.eg(!0));
    g.g.o.Fa(this.N, "blocklyDragging");
  } else (g.gm = []), g.g.o.Vb(this.N, "blocklyDragging");
  for (c = 0; c < this.Ih.length; c++) this.Ih[c].Aj(a);
};
b.zs = function (a) {
  g.tb.A.zs.call(this, a);
  Eb(this.Ob, "blocklyDraggable", a);
};
b.xx = function (a) {
  g.tb.A.xx.call(this, a);
  a = Gb(this);
  for (var c = 0; c < a.length; c++) a[c].ui();
};
b.Ax = function (a) {
  g.tb.A.Ax.call(this, a);
  this.oc();
};
b.$C = function (a) {
  this.tm != a &&
    (this.tm = a) &&
    (this.pd(this.u.Kb.ka().xt), Eb(this.Ob, "blocklyInsertionMarker", !0));
};
b.Na = function () {
  return this.N;
};
b.I = function (a, c) {
  if (this.u) {
    g.J.I();
    g.J.Qx(this.Ob.dc);
    g.g.o.tp();
    var d = this.u;
    g.selected == this && (Ob(this), xc(this.u));
    g.Sa.$q == this && g.Sa.Ka();
    this.u.vb && g.navigation.SI(this);
    c && this.pa && (x(this, a), g.Bb.sH(this));
    this.pa = !1;
    if (this.Ae) {
      for (var e in this.Ae) clearTimeout(this.Ae[e]);
      this.Ae = null;
    }
    c = Gb(this);
    for (e = 0; e < c.length; e++) c[e].I();
    g.tb.A.I.call(this, !!a);
    g.g.o.removeNode(this.N);
    Fa(d);
    this.N = null;
    g.g.o.up();
  }
};
b.oc = function () {
  this.Ob.oc(this);
  for (var a = Gb(this), c = 0; c < a.length; c++) a[c].oc();
  for (a = 0; (c = this.U[a]); a++)
    for (var d = 0, e; (e = c.gb[d]); d++) e.oc();
};
function Ea(a) {
  var c = Ba(a, !1);
  a.oc();
  if (!a.isCollapsed()) {
    a = 0;
    for (var d; (d = c[a]); a++) d.pa && Ea(d);
  }
}
b.PH = function () {
  return this.pf;
};
b.eh = function (a) {
  if (!g.Comment) throw Error("Missing require for Blockly.Comment");
  this.Ie.text != a &&
    (g.tb.A.eh.call(this, a),
    (a = null != a),
    !!this.pf == a
      ? ((a = this.pf),
        a.Yk
          ? (a.Yk.value = a.md.text)
          : a.Rk && (a.Rk.firstChild.textContent = a.md.text))
      : (a
          ? (this.Kn = this.pf = new g.Comment(this))
          : (this.pf.I(), (this.Kn = this.pf = null)),
        this.pa && (this.Ha(), this.Zb())));
};
b.Km = function (a, c) {
  if (!g.Bn) throw Error("Missing require for Blockly.Warning");
  this.Ae || (this.Ae = Object.create(null));
  var d = c || "";
  if (d) this.Ae[d] && (clearTimeout(this.Ae[d]), delete this.Ae[d]);
  else for (var e in this.Ae) clearTimeout(this.Ae[e]), delete this.Ae[e];
  if (this.u.Gc()) {
    var f = this;
    this.Ae[d] = setTimeout(function () {
      f.u && (delete f.Ae[d], f.Km(a, d));
    }, 100);
  } else {
    this.Nb && (a = null);
    c = !1;
    if ("string" == typeof a) {
      e = mc(this);
      for (var h = null; e; ) e.isCollapsed() && (h = e), (e = mc(e));
      h && h.Km(g.i.COLLAPSED_WARNINGS_WARNING, g.tb.VD);
      this.$e || ((this.$e = new g.Bn(this)), (c = !0));
      Ya(this.$e, a, d);
    } else
      this.$e && !d
        ? (this.$e.I(), (c = !0))
        : this.$e &&
          ((c = this.$e.$d()),
          Ya(this.$e, "", d),
          (e = this.$e.$d()) || this.$e.I(),
          (c = c != e));
    c && this.pa && (this.Ha(), this.Zb());
  }
};
b.Bj = function (a) {
  this.nd && this.nd !== a && this.nd.I();
  a && ((a.S = this), (this.nd = a), Wa(a));
  this.pa && (this.Ha(), this.Zb());
};
b.ie = function (a) {
  this.isEnabled() != a &&
    (g.tb.A.ie.call(this, a), this.pa && !oc(this) && Ea(this));
};
b.ji = function (a) {
  this.pa && this.Ob.sD(a);
};
b.Dq = function () {
  Eb(this.Ob, "blocklySelected", !0);
};
b.ap = function () {
  Eb(this.Ob, "blocklySelected", !1);
};
b.kp = function (a) {
  Eb(this.Ob, "blocklyDraggingDelete", a);
};
b.Ev = function () {
  return this.style.Pi;
};
b.pd = function (a) {
  g.tb.A.pd.call(this, a);
  a = Mc(this.u.Kb.ka(), this.hd);
  this.Ob.bc(a.style);
  this.style = a.style;
  this.Wk = a.name;
  this.oc();
};
b.bc = function (a) {
  var c = Jc(this.u.Kb.ka(), a);
  this.Wk = a;
  if (c)
    (this.Sg = c.Sg),
      this.Ob.bc(c),
      (this.hd = c.Pi),
      (this.style = c),
      this.oc();
  else throw Error("Invalid style name: " + a);
};
function ob(a) {
  do {
    var c = a.Na(),
      d = c.parentNode,
      e = d.childNodes;
    e[e.length - 1] !== c && d.appendChild(c);
    a = a.getParent();
  } while (a);
}
b.We = function (a, c) {
  g.tb.A.We.call(this, a, c);
  this.pa && (this.Ha(), this.Zb());
};
b.Ve = function (a, c) {
  g.tb.A.Ve.call(this, a, c);
  this.pa && (this.Ha(), this.Zb());
};
b.je = function (a, c) {
  g.tb.A.je.call(this, a, c);
  this.pa && (this.Ha(), this.Zb());
};
b.Rc = function (a) {
  g.tb.A.Rc.call(this, a);
  this.pa && (this.Ha(), this.Zb());
};
b.wb = function (a, c) {
  a = g.tb.A.wb.call(this, a, c);
  this.pa && (this.Ha(), this.Zb());
  return a;
};
b.Ew = function (a, c) {
  g.tb.A.Ew.call(this, a, c);
  this.pa && (this.Ha(), this.Zb());
};
b.Gn = function (a, c) {
  a = g.tb.A.Gn.call(this, a, c);
  this.pa && (this.Ha(), this.Zb());
  return a;
};
function Da(a, c) {
  a.ba && kc(a.ba, c);
  a.O && kc(a.O, c);
  if (a.Z) {
    kc(a.Z, c);
    var d = a.Z.ra();
    d && Da(d, c);
  }
  if (!a.bk)
    for (d = 0; d < a.U.length; d++) {
      var e = a.U[d].connection;
      e && (kc(e, c), (e = e.ra()) && Da(e, c));
    }
}
b.eg = function (a) {
  var c = [];
  if (a || this.pa)
    if (
      (this.O && c.push(this.O),
      this.ba && c.push(this.ba),
      this.Z && c.push(this.Z),
      a || !this.bk)
    ) {
      a = 0;
      for (var d; (d = this.U[a]); a++) d.connection && c.push(d.connection);
    }
  return c;
};
b.Mr = function () {
  return g.tb.A.Mr.call(this);
};
b.Hv = function (a, c) {
  return g.tb.A.Hv.call(this, a, c);
};
b.Jo = function (a) {
  return new g.yc(this, a);
};
b.Zb = function () {
  if (this.u && !this.u.Gc()) {
    var a = this.Zd();
    if (!a.Nb)
      for (var c = this.eg(!1), d = 0, e; (e = c[d]); d++) {
        e.isConnected() && v(e) && e.ra().Zb();
        for (var f = e.mC(g.Od), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            (k.Y().Zd() != a && (v(e) ? nb(k, e) : nb(e, k)));
      }
  }
};
function Lb(a) {
  var c = g.h.uc();
  setTimeout(function () {
    g.h.ea(c);
    wc(a);
    g.h.ea(!1);
  }, g.Qp / 2);
  setTimeout(function () {
    g.h.ea(c);
    a.Zb();
    g.h.ea(!1);
  }, g.Qp);
}
function mb(a, c, d) {
  (c.type != g.zb && c.type != g.jb) || a.moveBy(d.x - c.x, d.y - c.y);
}
b.getParent = function () {
  return g.tb.A.getParent.call(this);
};
b.Zd = function () {
  return g.tb.A.Zd.call(this);
};
b.Ha = function (a) {
  if (!this.px) {
    this.px = !0;
    try {
      this.pa = !0;
      g.g.o.tp();
      this.isCollapsed() && Lc(this);
      this.u.Kb.Ha(this);
      var c = this.Za();
      this.ba && Bc(this.ba, c);
      this.O && Bc(this.O, c);
      for (var d = 0; d < this.U.length; d++) {
        var e = this.U[d].connection;
        e && (Bc(e, c), e.isConnected() && Dc(e));
      }
      this.Z && (Bc(this.Z, c), this.Z.isConnected() && Dc(this.Z));
      if (!1 !== a) {
        var f = this.getParent();
        f ? f.Ha(!0) : Fa(this.u);
      }
      g.g.o.up();
      this.Sx();
    } finally {
      this.px = !1;
    }
  }
};
b.Sx = function () {
  this.u.vb && this.Ob.Un && this.u.Fb().draw();
  this.u.vb && this.Ob.ww && this.u.Xd(g.navigation.kn).draw();
};
b.ii = function (a) {
  this.Ob.ii(a);
};
b.ki = function (a) {
  this.Ob.ki(a);
};
function I(a) {
  var c = a.height,
    d = a.width,
    e = t(a);
  e &&
    ((e = I(e)),
    (a = a.u.Kb.ka().Gt),
    (c += e.height - a),
    (d = Math.max(d, e.width)));
  return { height: c, width: d };
}
g.ll = function (a) {
  this.tc = [];
  this.zA = a;
};
function Nc(a, c, d) {
  if (!a.tc.length) return -1;
  var e = Ac(a, d);
  if (e >= a.tc.length) return -1;
  d = c.y;
  for (var f = e; 0 <= f && a.tc[f].y == d; ) {
    if (a.tc[f] == c) return f;
    f--;
  }
  for (; e < a.tc.length && a.tc[e].y == d; ) {
    if (a.tc[e] == c) return e;
    e++;
  }
  return -1;
}
function Ac(a, c) {
  if (!a.tc.length) return 0;
  for (var d = 0, e = a.tc.length; d < e; ) {
    var f = Math.floor((d + e) / 2);
    if (a.tc[f].y < c) d = f + 1;
    else if (a.tc[f].y > c) e = f;
    else {
      d = f;
      break;
    }
  }
  return d;
}
function zc(a, c, d) {
  c = Nc(a, c, d);
  if (-1 == c) throw Error("Unable to find connection in connectionDB.");
  a.tc.splice(c, 1);
}
function Ec(a, c, d) {
  function e(n) {
    var p = h - f[n].x,
      r = k - f[n].y;
    Math.sqrt(p * p + r * r) <= d && m.push(f[n]);
    return r < d;
  }
  var f = a.tc,
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
g.ll.R = function (a) {
  var c = [];
  c[g.jb] = new g.ll(a);
  c[g.Tf] = new g.ll(a);
  c[g.zb] = new g.ll(a);
  c[g.Uf] = new g.ll(a);
  return c;
};
g.h.zh = function (a, c) {
  g.h.zh.A.constructor.call(this, c);
  this.lD = a;
};
g.g.object.W(g.h.zh, g.h.Fe);
g.h.zh.prototype.type = g.h.Hz;
g.h.zh.prototype.wa = function () {
  var a = g.h.zh.A.wa.call(this);
  a.themeName = this.lD;
  return a;
};
g.h.zh.prototype.la = function (a) {
  g.h.zh.A.la.call(this, a);
  this.lD = a.themeName;
};
g.C.register(g.C.aa.fc, g.h.Hz, g.h.zh);
g.h.Fh = function (a, c, d, e) {
  g.h.Fh.A.constructor.call(this, e);
  this.ec = a;
  this.Wb = c;
  this.scale = d;
};
g.g.object.W(g.h.Fh, g.h.Fe);
g.h.Fh.prototype.type = g.h.Tz;
g.h.Fh.prototype.wa = function () {
  var a = g.h.Fh.A.wa.call(this);
  a.viewTop = this.ec;
  a.viewLeft = this.Wb;
  a.scale = this.scale;
  return a;
};
g.h.Fh.prototype.la = function (a) {
  g.h.Fh.A.la.call(this, a);
  this.ec = a.viewTop;
  this.Wb = a.viewLeft;
  this.scale = a.scale;
};
g.C.register(g.C.aa.fc, g.h.Tz, g.h.Fh);
g.Qj = function (a, c) {
  this.lm = a;
  this.Gx = c.spacing;
  this.bC = c.length;
  this.EI = (this.mw = a.firstChild) && this.mw.nextSibling;
  this.yK = c.snap;
};
g.Qj.prototype.yj = 1;
g.Qj.prototype.I = function () {
  this.lm = null;
};
g.Qj.prototype.update = function (a) {
  this.yj = a;
  var c = this.Gx * a || 100;
  this.lm.setAttribute("width", c);
  this.lm.setAttribute("height", c);
  c = Math.floor(this.Gx / 2) + 0.5;
  var d = c - this.bC / 2,
    e = c + this.bC / 2;
  c *= a;
  d *= a;
  e *= a;
  Oc(this.mw, a, d, e, c, c);
  Oc(this.EI, a, c, c, d, e);
};
function Oc(a, c, d, e, f, h) {
  a &&
    (a.setAttribute("stroke-width", c),
    a.setAttribute("x1", d),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h));
}
g.Qj.prototype.moveTo = function (a, c) {
  this.lm.setAttribute("x", a);
  this.lm.setAttribute("y", c);
  (g.g.userAgent.df || g.g.userAgent.Oj) && this.update(this.yj);
};
g.Qj.Ya = function (a, c, d) {
  a = g.g.o.M(
    g.g.G.nz,
    { id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse" },
    d
  );
  0 < c.length && 0 < c.spacing
    ? (g.g.o.M(g.g.G.hn, { stroke: c.colour }, a),
      1 < c.length && g.g.o.M(g.g.G.hn, { stroke: c.colour }, a))
    : g.g.o.M(g.g.G.hn, {}, a);
  return a;
};
g.ez = function (a) {
  this.Mh = this.tf = null;
  this.Kk = {};
  this.s = a;
};
function Pc(a, c) {
  var d = a.Kk[c];
  if (d) d.I(), delete a.Kk[c];
  else
    throw Error(
      "Marker with id " +
        c +
        " does not exist. Can only unregistermarkers that exist."
    );
}
b = g.ez.prototype;
b.Fb = function () {
  return this.tf;
};
b.Xd = function (a) {
  return this.Kk[a];
};
function Qc(a, c) {
  a.tf && a.tf.se && a.tf.se.I();
  a.tf = c;
  a.tf &&
    ((c = a.tf),
    (c = new g.m.uh(a.s, a.s.Kb.ka(), c)),
    (a.tf.se = c),
    a.ii(a.tf.se.Ya()));
}
b.ii = function (a) {
  a ? (this.s.xb.appendChild(a), (this.Mh = a)) : (this.Mh = null);
};
b.ki = function (a) {
  a
    ? this.s.xb &&
      (this.Mh ? this.s.xb.insertBefore(a, this.Mh) : this.s.xb.appendChild(a))
    : (this.ai = null);
};
b.I = function () {
  for (var a = Object.keys(this.Kk), c = 0, d; (d = a[c]); c++) Pc(this, d);
  this.Kk = null;
  this.tf && (this.tf.I(), (this.tf = null));
};
g.Mz = function (a, c) {
  this.s = a;
  this.oi = c;
  this.wp = [];
  this.Bg = Object.create(null);
};
b = g.Mz.prototype;
b.Pg = function () {
  return this.oi;
};
b.mp = function (a) {
  var c = this.oi;
  this.oi = a;
  if ((a = aa(this.s))) c && g.g.o.Vb(a, c.dg()), g.g.o.Fa(a, this.oi.dg());
  for (c = 0; (a = this.wp[c]); c++) a.Fm();
  c = 0;
  a = Object.keys(this.Bg);
  for (var d; (d = a[c]); c++)
    for (var e = 0, f; (f = this.Bg[d][e]); e++)
      f.element.style[f.propertyName] = (this.oi && xa(this.oi, d)) || "";
  g.Fc();
};
b.subscribe = function (a, c, d) {
  this.Bg[c] || (this.Bg[c] = []);
  this.Bg[c].push({ element: a, propertyName: d });
  a.style[d] = (this.oi && xa(this.oi, c)) || "";
};
b.unsubscribe = function (a) {
  if (a)
    for (var c = Object.keys(this.Bg), d = 0, e; (e = c[d]); d++) {
      for (var f = this.Bg[e], h = f.length - 1; 0 <= h; h--)
        f[h].element === a && f.splice(h, 1);
      this.Bg[e].length || delete this.Bg[e];
    }
};
b.I = function () {
  this.Bg = this.wp = this.oi = this.Gf = null;
};
g.pe = function (a, c) {
  g.pe.A.constructor.call(this, a, c);
  this.Ir = !1;
  this.He = Object.create(null);
  this.dD = this.Wo = 0;
  this.VB = this.Ow = null;
};
g.g.object.W(g.pe, g.rg);
g.pe.wG = 5;
g.pe.xG = 6;
b = g.pe.prototype;
b.gv = function (a) {
  this.VB = this.wc.options.sb && this.wc.options.sb.ax;
  g.pe.A.gv.call(this, a);
  !this.Gr && g.Touch.Lr(a) && Rc(this, a);
};
b.Ul = function (a) {
  this.Ow = g.ya(document, "mousedown", null, this.kI.bind(this), !0);
  this.gs = g.ya(document, "mousemove", null, this.mm.bind(this), !0);
  this.hs = g.ya(document, "mouseup", null, this.Br.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
b.kI = function (a) {
  !this.Gc() && g.Touch.Lr(a) && (Rc(this, a), this.Ir && g.kj());
};
b.mm = function (a) {
  if (this.Gc()) g.Touch.Fx(a) && g.pe.A.mm.call(this, a);
  else if (this.Ir) {
    if (g.Touch.Lr(a)) {
      this.He[g.Touch.Ar(a)] = Sc(this, a);
      var c = Object.keys(this.He);
      if (this.VB && 2 === c.length) {
        c = Object.keys(this.He);
        c = g.g.X.fv(this.He[c[0]], this.He[c[1]]) / this.dD;
        if (0 < this.Wo && Infinity > this.Wo) {
          var d = c - this.Wo;
          d = 0 < d ? d * g.pe.wG : d * g.pe.xG;
          var e = this.wc,
            f = g.g.Po(a, u(e), oa(e));
          e.zoom(f.x, f.y, d);
        }
        this.Wo = c;
        a.preventDefault();
      } else g.pe.A.mm.call(this, a);
    }
    g.kj();
  } else g.pe.A.mm.call(this, a);
};
b.Br = function (a) {
  if (g.Touch.Lr(a) && !this.Gc()) {
    var c = g.Touch.Ar(a);
    this.He[c] && delete this.He[c];
    2 > Object.keys(this.He).length &&
      ((this.He = Object.create(null)), (this.Wo = 0));
  }
  !this.Ir || this.Gc()
    ? g.Touch.Fx(a) && g.pe.A.Br.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.I());
};
b.I = function () {
  g.pe.A.I.call(this);
  this.Ow && g.Qa(this.Ow);
};
function Rc(a, c) {
  a.He[g.Touch.Ar(c)] = Sc(a, c);
  var d = Object.keys(a.He);
  2 == d.length &&
    ((a.dD = g.g.X.fv(a.He[d[0]], a.He[d[1]])),
    (a.Ir = !0),
    c.preventDefault());
}
function Sc(a, c) {
  return a.wc
    ? new g.g.X(
        c.pageX ? c.pageX : c.changedTouches[0].pageX,
        c.pageY ? c.pageY : c.changedTouches[0].pageY
      )
    : null;
}
g.$z = function (a) {
  this.Xw = a;
  this.wn = Object.create(null);
};
b = g.$z.prototype;
b.hw = null;
b.I = function () {
  this.wn = this.Xw = null;
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
    e && e.play && (this.wn[c] = e);
  }
};
b.preload = function () {
  for (var a in this.wn) {
    var c = this.wn[a];
    c.volume = 0.01;
    var d = c.play();
    void 0 !== d ? d.then(c.pause).catch(function () {}) : c.pause();
    if (g.g.userAgent.tl || g.g.userAgent.Wy) break;
  }
};
b.play = function (a, c) {
  var d = this.wn[a];
  d
    ? ((a = new Date()),
      (null != this.hw && a - this.hw < g.bG) ||
        ((this.hw = a),
        (d = g.g.userAgent.tl || g.g.userAgent.Xm ? d : d.cloneNode()),
        (d.volume = void 0 === c ? 1 : c),
        d.play()))
    : this.Xw && this.Xw.Li.play(a, c);
};
g.bA = function (a) {
  this.Pn = a;
  this.Ya();
};
b = g.bA.prototype;
b.Mb = null;
b.Pn = null;
b.Ya = function () {
  this.Mb ||
    ((this.Mb = g.g.o.M(
      g.g.G.Wj,
      {
        xmlns: g.g.o.wq,
        "xmlns:html": g.g.o.rl,
        "xmlns:xlink": g.g.o.Yf,
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible",
      },
      null
    )),
    this.Pn.appendChild(this.Mb));
};
b.Zk = function (a, c) {
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.Mb.style.display = "block";
  g.g.o.jp(this.Mb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.Mv = function () {
  return g.g.yf(this.Mb);
};
b.Rq = function (a) {
  if (!a)
    throw Error(
      "Couldn't clear and hide the drag surface: missing new surface."
    );
  var c = this.Mb.childNodes[0],
    d = this.Mb.childNodes[1];
  if (
    !(
      c &&
      d &&
      g.g.o.to(c, "blocklyBlockCanvas") &&
      g.g.o.to(d, "blocklyBubbleCanvas")
    )
  )
    throw Error(
      "Couldn't clear and hide the drag surface. A node was missing."
    );
  null != this.ix ? g.g.o.yk(c, this.ix) : a.insertBefore(c, a.firstChild);
  g.g.o.yk(d, c);
  this.Mb.style.display = "none";
  if (this.Mb.childNodes.length) throw Error("Drag surface was not cleared.");
  g.g.o.jp(this.Mb, "");
  this.ix = null;
};
g.ub = function (a, c, d) {
  g.ub.A.constructor.call(this, a);
  this.Yc = a.Yc || g.ub.aI;
  this.lp = a.lp || g.ub.tK;
  this.Yq = g.ll.R(this.Nn);
  c && (this.Ge = c);
  d && (this.dl = d);
  this.Ps = !!this.dl && g.g.zk();
  this.Li = new g.$z(a.vc);
  this.zf = this.options.Qv ? new g.Qj(this.options.Qv, a.EB) : null;
  this.Qe = new g.ez(this);
  this.Nx = {};
  this.yv = {};
  g.$ && g.$.jk && Tc(this, g.zc, g.$.jk);
  g.Uz && g.Uz.jk && Tc(this, g.rG, g.Uz.jk);
  g.Aa && g.Aa.jk && (Tc(this, g.vn, g.Aa.jk), E(this, g.Aa.VI));
  this.Ac = this.options.vc
    ? this.options.vc.Ac
    : new g.Mz(this, this.options.HK || g.Ah.yi);
  this.Ac.wp.push(this);
  this.Kb = g.m.R(this.options.bp || "geras", this.Pg(), this.options.cp);
  this.zu = null;
  this.vb = !1;
  this.Ms = [];
};
g.g.object.W(g.ub, g.Rb);
b = g.ub.prototype;
b.xs = null;
b.pa = !0;
b.Zh = !0;
b.gg = !1;
b.Fo = !1;
b.tx = !0;
b.scrollX = 0;
b.scrollY = 0;
b.ZA = null;
b.scale = 1;
b.xC = 1;
b.yC = 0;
b.uC = 0;
b.sd = null;
b.Pa = null;
b.ma = null;
b.Ja = null;
b.zd = null;
b.Ge = null;
b.dl = null;
b.Ps = !1;
b.Fr = !1;
b.Zv = null;
b.aC = null;
b.bb = null;
b.SB = null;
b.$v = !0;
b.ii = function (a) {
  this.Qe.ii(a);
};
b.ki = function (a) {
  this.Qe.ki(a);
};
b.Xd = function (a) {
  return this.Qe ? this.Qe.Xd(a) : null;
};
b.Fb = function () {
  return this.Qe ? this.Qe.Fb() : null;
};
b.Pg = function () {
  return this.Ac.Pg();
};
b.mp = function (a) {
  a || (a = g.Ah.yi);
  this.Ac.mp(a);
};
b.Fm = function () {
  this.N && this.Kb.kx(this.N, this.Pg());
  Uc(
    B(this).filter(function (c) {
      return void 0 !== c.Wk;
    })
  );
  Vc(this);
  this.Ja && this.Ja.Fm();
  this.isVisible() && this.Gb(!0);
  var a = new g.h.zh(this.Pg().name, this.id);
  g.h.Ga(a);
};
function Uc(a) {
  for (var c = 0, d; (d = a[c]); c++) {
    var e = d.Wk;
    if (e && (d.bc(e), d.nd)) {
      var f = d.nd.s;
      if (f && B(f)) {
        var h = B(f);
        for (d = 0; d < h.length; d++) (e = h[d]), e.bc(e.Wk);
        if ((d = f.ic()))
          for (f = B(d.s), d = 0; d < f.length; d++) (e = f[d]), e.bc(e.Wk);
      }
    }
  }
}
function oa(a) {
  if (a.$v) {
    var c = u(a).getScreenCTM();
    c && ((a.SB = c.inverse()), (a.$v = !1));
  }
  return a.SB;
}
b.Fp = function () {
  this.$v = !0;
};
b.isVisible = function () {
  return this.Zh;
};
function yb(a, c) {
  var d = 0,
    e = 0,
    f = 1;
  if (g.g.o.containsNode(a.xb, c) || g.g.o.containsNode(a.kg, c)) f = a.scale;
  do {
    var h = g.g.yf(c);
    if (c == a.xb || c == a.kg) f = 1;
    d += h.x * f;
    e += h.y * f;
    c = c.parentNode;
  } while (c && c != u(a));
  return new g.g.X(d, e);
}
function aa(a) {
  if (!a.Zv)
    for (var c = a.N; c; ) {
      if (
        -1 !=
        (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
      ) {
        a.Zv = c;
        break;
      }
      c = c.parentNode;
    }
  return a.Zv;
}
b.Ya = function (a) {
  this.N = g.g.o.M(g.g.G.xc, { class: "blocklyWorkspace" }, null);
  a &&
    ((this.rd = g.g.o.M(
      g.g.G.Dc,
      { height: "100%", width: "100%", class: a },
      this.N
    )),
    "blocklyMainBackground" == a && this.zf
      ? (this.rd.style.fill = "url(#" + this.zf.lm.id + ")")
      : this.Ac.subscribe(this.rd, "workspaceBackgroundColour", "fill"));
  this.xb = g.g.o.M(g.g.G.xc, { class: "blocklyBlockCanvas" }, this.N);
  this.kg = g.g.o.M(g.g.G.xc, { class: "blocklyBubbleCanvas" }, this.N);
  this.gg ||
    (g.ya(this.N, "mousedown", this, this.pj, !1, !0),
    g.ya(this.N, "wheel", this, this.rJ));
  if (this.options.so) {
    if (!g.bu) throw Error("Missing require for Blockly.Toolbox");
    this.Ja = new (g.C.vr(g.C.aa.zq, this.options))(this);
  }
  this.zf && this.zf.update(this.scale);
  Wc(this);
  Qc(this.Qe, new g.ml());
  a = this.Qe;
  var c = g.navigation.kn,
    d = new g.nn();
  a.Kk[c] && Pc(a, c);
  var e = new g.m.uh(a.s, a.s.Kb.ka(), d);
  d.se = e;
  a.ki(d.se.Ya());
  a.Kk[c] = d;
  this.Kb.Ya(this.N, this.Pg());
  return this.N;
};
b.I = function () {
  this.pa = !1;
  this.zd && this.zd.cancel();
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.kg = this.xb = null;
  this.Ja && (this.Ja.I(), (this.Ja = null));
  this.ma && (this.ma.I(), (this.ma = null));
  this.sd && (this.sd.I(), (this.sd = null));
  this.Pa && (this.Pa.I(), (this.Pa = null));
  this.hl && (this.hl.I(), (this.hl = null));
  this.Li && (this.Li.I(), (this.Li = null));
  this.zf && (this.zf.I(), (this.zf = null));
  this.Kb.I();
  this.Qe && (this.Qe.I(), (this.Qe = null));
  g.ub.A.I.call(this);
  if (this.Ac) {
    var a = this.Ac,
      c = a.wp.indexOf(this);
    if (0 > c)
      throw Error(
        "Cannot unsubscribe a workspace that hasn't been subscribed."
      );
    a.wp.splice(c, 1);
    this.Ac.unsubscribe(this.rd);
    this.options.vc || (this.Ac.I(), (this.Ac = null));
  }
  this.yv = this.Nx = this.Yq = null;
  this.options.vc ||
    ((a = u(this)) && a.parentNode && g.g.o.removeNode(a.parentNode));
  this.xs && (g.Qa(this.xs), (this.xs = null));
};
b.nj = function (a, c) {
  return new g.tb(this, a, c);
};
function Xc(a) {
  if (!g.gd) throw Error("Missing require for Blockly.Trashcan");
  a.sd = new g.gd(a);
  var c = a.sd.Ya();
  a.N.insertBefore(c, a.xb);
}
function Yc(a) {
  if (!g.ju) throw Error("Missing require for Blockly.ZoomControls");
  a.hl = new g.ju(a);
  var c = a.hl.Ya();
  a.N.appendChild(c);
}
function Zc(a, c) {
  var d = new g.Ld({
    parentWorkspace: a,
    rtl: a.L,
    oneBasedIndex: a.options.bi,
    horizontalLayout: a.Ad,
    renderer: a.options.bp,
    rendererOverrides: a.options.cp,
  });
  d.Ia = a.options.Ia;
  if (a.Ad) {
    if (!g.ut) throw Error("Missing require for Blockly.HorizontalFlyout");
    a.ma = new g.ut(d);
  } else {
    if (!g.Eh) throw Error("Missing require for Blockly.VerticalFlyout");
    a.ma = new g.Eh(d);
  }
  a.ma.Tl = !1;
  a.ma.s.Gb(!0);
  return a.ma.Ya(c);
}
b.ic = function (a) {
  return this.ma || a ? this.ma : this.Ja ? this.Ja.ic() : null;
};
function Fa(a) {
  a.tx && a.pa && (a.Pa && a.Pa.resize(), a.Fp());
}
b.resize = function () {
  this.Ja && this.Ja.position();
  this.ma && this.ma.position();
  this.sd && this.sd.position();
  this.hl && this.hl.position();
  this.Pa && this.Pa.resize();
  this.Fp();
  Wc(this);
};
function Sb(a) {
  var c = g.g.VH();
  g.g.X.vf(a.aC, c) || ((a.aC = c), a.Fp(), Wc(a));
}
function u(a) {
  if (!a.zu)
    for (var c = a.N; c; ) {
      if ("svg" == c.tagName) {
        a.zu = c;
        break;
      }
      c = c.parentNode;
    }
  return a.zu;
}
function ca(a) {
  if (g.h.isEnabled()) {
    var c = a.scale,
      d = -a.scrollY,
      e = -a.scrollX;
    (c == a.xC && 1 > Math.abs(d - a.yC) && 1 > Math.abs(e - a.uC)) ||
      ((a.xC = c),
      (a.yC = d),
      (a.uC = e),
      (a = new g.h.Fh(d, e, c, a.id)),
      g.h.Ga(a));
  }
}
b.translate = function (a, c) {
  if (this.Ps && this.Fr) this.dl.Zk(a, c);
  else {
    var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
    this.xb.setAttribute("transform", d);
    this.kg.setAttribute("transform", d);
  }
  if (this.Ge) {
    d = this.Ge;
    var e = this.scale;
    d.yj = e;
    d.Hg.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")"
    );
  }
  this.zf && this.zf.moveTo(a, c);
  ca(this);
};
function ra(a) {
  if (a.Ps) {
    a.Fr = !1;
    var c = a.dl.Mv();
    a.dl.Rq(a.N);
    c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
    a.xb.setAttribute("transform", c);
    a.kg.setAttribute("transform", c);
  }
}
function pa(a) {
  if (a.Ps && !a.Fr) {
    a.Fr = !0;
    var c = a.xb.previousSibling,
      d = parseInt(u(a).getAttribute("width"), 10),
      e = parseInt(u(a).getAttribute("height"), 10),
      f = g.g.yf(a.xb),
      h = a.dl,
      k = a.xb,
      l = a.kg,
      m = a.scale;
    if (h.Mb.childNodes.length) throw Error("Already dragging a block.");
    h.ix = c;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    h.Mb.setAttribute("width", d);
    h.Mb.setAttribute("height", e);
    h.Mb.appendChild(k);
    h.Mb.appendChild(l);
    h.Mb.style.display = "block";
    a.dl.Zk(f.x, f.y);
  }
}
b.Rg = function () {
  var a = this.Yc();
  return a ? a.Hb / this.scale : 0;
};
b.Gb = function (a) {
  this.Zh = a;
  if (this.N)
    if (
      (this.Pa && this.Pa.Vk(a),
      this.ic() && this.ic().Vk(a),
      (u(this).style.display = a ? "block" : "none"),
      this.Ja && this.Ja.Gb(a),
      a)
    ) {
      a = B(this);
      for (var c = a.length - 1; 0 <= c; c--) a[c].Ko();
      this.Ha();
      this.Ja && this.Ja.position();
    } else g.Fc(!0);
};
b.Ha = function () {
  for (var a = B(this), c = a.length - 1; 0 <= c; c--) a[c].Ha(!1);
  if (this.zd) for (a = this.zd.jm(), c = 0; c < a.length; c++) a[c].Ha(!1);
  c = this.Qe;
  c.s.vb && c.Mh && c.s.Fb().draw();
};
b.ns = function (a) {
  if (
    this.pa &&
    a.tagName &&
    !(a.getElementsByTagName("block").length >= Ja(this))
  )
    if ((this.zd && this.zd.cancel(), "comment" == a.tagName.toLowerCase())) {
      g.h.disable();
      try {
        var c = g.Pl.co(a),
          d = parseInt(a.getAttribute("x"), 10),
          e = parseInt(a.getAttribute("y"), 10);
        isNaN(d) || isNaN(e) || (this.L && (d = -d), c.moveBy(d + 50, e + 50));
      } finally {
        g.h.enable();
      }
      g.h.isEnabled() && g.aA.JN(c);
      c.select();
    } else
      a: {
        g.h.disable();
        try {
          var f = g.V.gk(a, this),
            h = this.Xd(g.navigation.kn).hb;
          if (this.vb && h && h.qm) {
            g.navigation.RB(f, h.Ea);
            break a;
          }
          var k = parseInt(a.getAttribute("x"), 10),
            l = parseInt(a.getAttribute("y"), 10);
          if (!isNaN(k) && !isNaN(l)) {
            this.L && (k = -k);
            do {
              a = !1;
              var m = B(this);
              c = 0;
              for (var n; (n = m[c]); c++) {
                var p = n.Za();
                if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) {
                  a = !0;
                  break;
                }
              }
              if (!a) {
                var r = f.eg(!1);
                c = 0;
                for (var y; (y = r[c]); c++)
                  if (y.closest(g.Od, new g.g.X(k, l)).connection) {
                    a = !0;
                    break;
                  }
              }
              a && ((k = this.L ? k - g.Od : k + g.Od), (l += 2 * g.Od));
            } while (a);
            f.moveBy(k, l);
          }
        } finally {
          g.h.enable();
        }
        g.h.isEnabled() && !f.Oa && g.h.Ga(new g.h.Sp(f));
        f.select();
      }
};
function Vc(a) {
  (a = a.gg ? a.bb : a) &&
    !a.zd &&
    a.Ja &&
    a.Ja.ic() &&
    ((a = a.Ja), a.pb && a.pb.Wg() && a.pb.Vi.length && a.ma.show(a.pb.Vi));
}
b.xj = function (a, c) {
  g.ub.A.xj.call(this, a, c);
  Vc(this);
};
b.Oh = function (a) {
  g.ub.A.Oh.call(this, a);
  Vc(this);
};
b.sf = function (a, c, d) {
  a = g.ub.A.sf.call(this, a, c, d);
  Vc(this);
  return a;
};
function Wc(a) {
  a.OA = a.sd && a.N.parentNode ? a.sd.hm() : null;
  a.NA = a.ma
    ? a.ma.hm()
    : a.Ja && "function" == typeof a.Ja.hm
    ? a.Ja.hm()
    : null;
}
function Ib(a, c) {
  return a.OA && a.OA.contains(c.clientX, c.clientY)
    ? g.mt
    : a.NA && a.NA.contains(c.clientX, c.clientY)
    ? g.xy
    : g.wy;
}
b.pj = function (a) {
  var c = this.Rh(a);
  c && Vb(c, a, this);
};
b.Hx = function (a, c) {
  a = g.g.Po(a, u(this), oa(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.ZA = g.g.X.Wn(c, a);
};
b.Gc = function () {
  return null != this.zd && this.zd.Gc();
};
function $c(a) {
  return (
    (a.options.$c && a.options.$c.scrollbars) ||
    (a.options.$c && a.options.$c.Ij) ||
    (a.options.$c && a.options.$c.Ui) ||
    (a.options.sb && a.options.sb.controls) ||
    (a.options.sb && a.options.sb.Ij) ||
    (a.options.sb && a.options.sb.ax)
  );
}
b.Hc = function () {
  return (
    (this.options.$c && this.options.$c.scrollbars) ||
    (this.options.$c && this.options.$c.Ij) ||
    (this.options.$c && this.options.$c.Ui) ||
    (this.options.sb && this.options.sb.Ij) ||
    (this.options.sb && this.options.sb.ax)
  );
};
b.rJ = function (a) {
  if (g.rg.vk()) a.preventDefault(), a.stopPropagation();
  else {
    var c = this.options.sb && this.options.sb.Ij,
      d = this.options.$c && this.options.$c.Ij;
    if (c || d) {
      var e = g.g.vB(a);
      !c || (!a.ctrlKey && d)
        ? ((c = this.scrollX - e.x),
          (d = this.scrollY - e.y),
          a.shiftKey && !e.x && ((c = this.scrollX - e.y), (d = this.scrollY)),
          this.scroll(c, d))
        : ((e = -e.y / 50),
          (c = g.g.Po(a, u(this), oa(this))),
          this.zoom(c.x, c.y, e));
      a.preventDefault();
    }
  }
};
function Ca(a) {
  a = [].concat(a.Ms);
  if (!a.length) return new g.g.Rect(0, 0, 0, 0);
  for (var c = Kc(a[0]), d = 1; d < a.length; d++) {
    var e = Kc(a[d]);
    e.top < c.top && (c.top = e.top);
    e.bottom > c.bottom && (c.bottom = e.bottom);
    e.left < c.left && (c.left = e.left);
    e.right > c.right && (c.right = e.right);
  }
  return c;
}
b.np = function (a) {
  if (!this.options.readOnly && !this.gg) {
    var c = yc(g.Ta.Qd.Vc, { u: this });
    this.WG && this.WG(c, a);
    g.Sa.show(a, c, this.L);
  }
};
function na(a) {
  if (a.options.vc) na(a.options.vc);
  else {
    g.Io = a;
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
  d = Math.pow(this.options.sb.mK, d);
  var e = this.scale * d;
  if (this.scale != e) {
    e > this.options.sb.Lo
      ? (d = this.options.sb.Lo / this.scale)
      : e < this.options.sb.No && (d = this.options.sb.No / this.scale);
    var f = this.xb.getCTM(),
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
b.BH = function () {
  g.g.o.Vb(this.xb, "blocklyCanvasTransitioning");
  g.g.o.Vb(this.kg, "blocklyCanvasTransitioning");
};
b.setScale = function (a) {
  this.options.sb.Lo && a > this.options.sb.Lo
    ? (a = this.options.sb.Lo)
    : this.options.sb.No && a < this.options.sb.No && (a = this.options.sb.No);
  this.scale = a;
  g.Fc(!1);
  this.ma && (this.ma.jx(), Wc(this));
  this.zf && this.zf.update(this.scale);
  a = this.Yc();
  this.scrollX -= a.Mc;
  this.scrollY -= a.Wc;
  a.Wb += a.Mc;
  a.ec += a.Wc;
  this.scroll(this.scrollX, this.scrollY);
  this.Pa &&
    (this.ma
      ? (ha(this.Pa.Af, a), ia(this.Pa.Nf, a))
      : (ka(this.Pa.Af, a), ma(this.Pa.Nf, a)));
};
function ad(a) {
  return a.options.vc ? ad(a.options.vc) : a.scale;
}
b.scroll = function (a, c) {
  g.Fc(!0);
  var d = this.Yc(),
    e = d.rf + d.jd - d.Hb,
    f = d.Td + d.Xc - d.Qb;
  a = Math.min(a, -d.jd);
  c = Math.min(c, -d.Xc);
  a = Math.max(a, -e);
  c = Math.max(c, -f);
  this.scrollX = a;
  this.scrollY = c;
  this.Pa &&
    (da(this.Pa.Af, -(a + d.jd) * this.Pa.Af.ratio),
    da(this.Pa.Nf, -(c + d.Xc) * this.Pa.Nf.ratio));
  a += d.Mc;
  c += d.Wc;
  this.translate(a, c);
};
g.ub.nB = function (a) {
  var c = 0,
    d = 0;
  a && ((c = a.Rg()), (d = a.Oc));
  return new g.g.hf(c, d);
};
g.ub.SH = function (a, c) {
  return $c(a) ? g.ub.RH(a, c) : g.ub.lB(a);
};
g.ub.lB = function (a) {
  var c = Ca(a),
    d = a.scale;
  a = c.top * d;
  var e = c.bottom * d,
    f = c.left * d;
  c = c.right * d;
  return { top: a, bottom: e, left: f, right: c, width: c - f, height: e - a };
};
g.ub.RH = function (a, c) {
  a = g.ub.lB(a);
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
g.ub.aI = function () {
  var a = g.ub.nB(this.Ja),
    c = g.ub.nB(this.ma),
    d = g.EK(u(this)),
    e = { height: d.height, width: d.width };
  if (this.Ja)
    if (this.Ia == g.Xj || this.Ia == g.zn) e.height -= a.height;
    else {
      if (this.Ia == g.De || this.Ia == g.Ml) e.width -= a.width;
    }
  else if (this.ma)
    if (this.Ia == g.Xj || this.Ia == g.zn) e.height -= c.height;
    else if (this.Ia == g.De || this.Ia == g.Ml) e.width -= c.width;
  var f = g.ub.SH(this, e),
    h = 0;
  this.Ja && this.Ia == g.De
    ? (h = a.width)
    : this.ma && this.Ia == g.De && (h = c.width);
  var k = 0;
  this.Ja && this.Ia == g.Xj
    ? (k = a.height)
    : this.ma && this.Ia == g.Xj && (k = c.height);
  return {
    Td: f.height,
    rf: f.width,
    Xc: f.top,
    jd: f.left,
    Qb: e.height,
    Hb: e.width,
    ec: -this.scrollY,
    Wb: -this.scrollX,
    Wc: k,
    Mc: h,
    iD: d.height,
    jD: d.width,
    qD: a.width,
    nO: a.height,
    Ia: this.Ia,
    MN: c.width,
    KN: c.height,
  };
};
g.ub.tK = function (a) {
  var c = this.Yc();
  "number" == typeof a.x && (this.scrollX = -c.rf * a.x - c.jd);
  "number" == typeof a.y && (this.scrollY = -c.Td * a.y - c.Xc);
  this.translate(this.scrollX + c.Mc, this.scrollY + c.Wc);
};
b = g.ub.prototype;
b.Wd = function (a) {
  return g.ub.A.Wd.call(this, a);
};
b.$b = function (a) {
  return g.ub.A.$b.call(this, a);
};
b.Fq = function (a) {
  this.Ms.push(a);
  g.ub.A.Fq.call(this, a);
};
b.ss = function (a) {
  g.g.Hq(this.Ms, a);
  g.ub.A.ss.call(this, a);
};
b.ad = function (a) {
  var c = !this.tx && a;
  this.tx = a;
  c && Fa(this);
};
b.clear = function () {
  this.ad(!1);
  g.ub.A.clear.call(this);
  this.Ms = [];
  this.ad(!0);
};
function bd(a, c) {
  if ("function" != typeof c)
    throw TypeError("Button callbacks must be functions.");
  a.yv.CREATE_VARIABLE = c;
}
function ab(a, c) {
  return (a = a.yv[c]) ? a : null;
}
function Tc(a, c, d) {
  if ("function" != typeof d)
    throw TypeError("Toolbox category callbacks must be functions.");
  a.Nx[c] = d;
}
b.Rh = function (a) {
  var c =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    d = this.zd;
  return d
    ? c && d.pk
      ? (console.warn("Tried to start the same gesture twice."),
        d.cancel(),
        null)
      : d
    : c
    ? (this.zd = new g.pe(a, this))
    : null;
};
function xc(a) {
  a.zd && a.zd.cancel();
}
g.fn = function (a) {
  a.Yc = this.yr.bind(this);
  a.lp = this.sK.bind(this);
  this.s = new g.ub(a);
  this.s.gg = !0;
  this.s.Gb(this.Zh);
  this.L = !!a.L;
  this.Ad = !1;
  this.Ej = a.Ia;
  this.tv = [];
  this.Pr = [];
  this.In = [];
  this.ge = [];
  this.$w = [];
  this.Pm = this.s.Kb.ka().yq;
  this.bb = null;
};
b = g.fn.prototype;
b.Tl = !0;
b.Zh = !1;
b.ck = !0;
b.Lb = 8;
b.Di = g.fn.prototype.Lb;
b.PE = 3 * g.fn.prototype.Di;
b.QE = 3 * g.fn.prototype.Di;
b.Ut = 2;
b.rb = 0;
b.Oc = 0;
b.wH = 70;
b.Ya = function (a) {
  this.N = g.g.o.M(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.rd = g.g.o.M(g.g.G.ne, { class: "blocklyFlyoutBackground" }, this.N);
  this.N.appendChild(this.s.Ya());
  this.s.Ac.subscribe(this.rd, "flyoutBackgroundColour", "fill");
  this.s.Ac.subscribe(this.rd, "flyoutOpacity", "fill-opacity");
  Qc(this.s.Qe, new g.iq());
  return this.N;
};
b.R = function (a) {
  this.bb = a;
  this.s.bb = a;
  this.Pa = new g.Ua(this.s, this.Ad, !1, "blocklyFlyoutScrollbar");
  this.Ka();
  Array.prototype.push.apply(this.tv, g.ya(this.N, "wheel", this, this.VK));
  this.Tl || ((this.mr = this.uv.bind(this)), E(this.bb, this.mr));
  Array.prototype.push.apply(
    this.tv,
    g.ya(this.rd, "mousedown", this, this.pj)
  );
  this.s.Rh = this.bb.Rh.bind(this.bb);
  this.s.Cx(this.bb.Ra);
  a = this.s;
  a.tj = new g.gu(a);
};
b.I = function () {
  this.Ka();
  g.Qa(this.tv);
  this.mr && (Oa(this.bb, this.mr), (this.mr = null));
  this.Pa && (this.Pa.I(), (this.Pa = null));
  this.s &&
    (this.s.Ac.unsubscribe(this.rd),
    (this.s.bb = null),
    this.s.I(),
    (this.s = null));
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.bb = this.rd = null;
};
b.Rg = function () {
  return this.rb;
};
b.isVisible = function () {
  return this.Zh;
};
b.Gb = function (a) {
  var c = a != this.isVisible();
  this.Zh = a;
  c && this.Ep();
};
b.Vk = function (a) {
  var c = a != this.ck;
  this.ck = a;
  c && this.Ep();
};
b.Ep = function () {
  var a = this.ck ? this.isVisible() : !1;
  this.N.style.display = a ? "block" : "none";
  this.Pa.Vk(a);
};
b.Ka = function () {
  if (this.isVisible()) {
    this.Gb(!1);
    for (var a = 0, c; (c = this.ge[a]); a++) g.Qa(c);
    this.ge.length = 0;
    this.uj && (Oa(this.s, this.uj), (this.uj = null));
  }
};
b.show = function (a) {
  this.s.ad(!1);
  this.Ka();
  cd(this);
  "string" == typeof a && (a = dd(this, a));
  this.Gb(!0);
  a = g.g.xa.EA(a);
  a = ed(this, a);
  fd(this, a.aH, a.IH);
  this.ge.push(
    g.ya(this.rd, "mouseover", this, function () {
      for (var c = this.s.$b(!1), d = 0, e; (e = c[d]); d++) e.ap();
    })
  );
  this.Ad ? (this.Oc = 0) : (this.rb = 0);
  this.s.ad(!0);
  this.jx();
  this.uv();
  this.position();
  this.uj = this.jx.bind(this);
  E(this.s, this.uj);
};
function ed(a, c) {
  var d = [],
    e = [];
  a.$w.length = 0;
  for (var f = a.Ad ? a.PE : a.QE, h = 0, k; (k = c[h]); h++) {
    if (k.custom) {
      var l = dd(a, k.custom);
      l = g.g.xa.EA(l);
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
          ? ((k = g.V.Ye(n)), (m.blockxml = k))
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
        n = g.V.gk(m, k.s);
        n.isEnabled() || k.$w.push(n);
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
        l = gd(a, k, !0);
        d.push({ type: "button", button: l });
        e.push(f);
        break;
      case "BUTTON":
        (l = gd(a, k, !1)), d.push({ type: "button", button: l }), e.push(f);
    }
  }
  return { aH: d, IH: e };
}
function dd(a, c) {
  c = a.s.bb.Nx[c] || null;
  if ("function" != typeof c)
    throw TypeError(
      "Couldn't find a callback function when opening a toolbox category."
    );
  a = c(a.s.bb);
  if (!Array.isArray(a))
    throw new TypeError(
      "Result of toolbox category callback must be an array."
    );
  return a;
}
function gd(a, c, d) {
  if (!g.Pj) throw Error("Missing require for Blockly.FlyoutButton");
  return new g.Pj(a.s, a.bb, c, d);
}
function cd(a) {
  for (var c = a.s.$b(!1), d = 0, e; (e = c[d]); d++) e.u == a.s && e.I(!1, !1);
  for (d = 0; d < a.Pr.length; d++)
    if ((c = a.Pr[d])) g.J.Qx(c), g.g.o.removeNode(c);
  for (d = a.Pr.length = 0; (c = a.In[d]); d++) c.I();
  a.In.length = 0;
  a.s.tj.clear();
}
function hd(a, c) {
  return function (d) {
    var e = a.bb.Rh(d);
    e && (Xb(e, c), Wb(e, d, a));
  };
}
b.pj = function (a) {
  var c = this.bb.Rh(a);
  c && Wb(c, a, this);
};
function kb(a, c) {
  var d = null;
  g.h.disable();
  var e = a.bb.kk();
  a.bb.ad(!1);
  try {
    var f = a.bb;
    if (!c.Na()) throw Error("oldBlock is not rendered.");
    var h = g.V.Gh(c, !0);
    f.ad(!1);
    var k = g.V.gk(h, f);
    if (!k.Na()) throw Error("block is not rendered.");
    var l = g.g.oo(f.xb),
      m = g.g.oo(a.s.xb),
      n = c.Za();
    n.scale(a.s.scale);
    var p = g.g.X.sum(m, n),
      r = g.g.X.Wn(p, l);
    r.scale(1 / f.scale);
    k.moveBy(r.x, r.y);
    d = k;
  } finally {
    g.h.enable();
  }
  g.Fc();
  c = g.$.jB(a.bb, e);
  if (g.h.isEnabled()) {
    g.h.ea(!0);
    for (e = 0; e < c.length; e++) g.h.Ga(new g.h.jf(c[e]));
    g.h.Ga(new g.h.Rf(d));
  }
  a.Tl ? a.Ka() : a.uv();
  return d;
}
b.uv = function () {
  for (var a = this.s.$b(!1), c = 0, d; (d = a[c]); c++)
    if (-1 == this.$w.indexOf(d))
      for (var e = Ka(this.bb, g.g.Bv(d)); d; ) d.ie(e), (d = t(d));
};
b.jx = function () {
  this.uj && Oa(this.s, this.uj);
  this.s.scale = this.bb.scale;
  for (var a = 0, c = this.s.$b(!1), d = 0, e; (e = c[d]); d++) {
    var f = I(e).width;
    e.O && (f -= this.Pm);
    a = Math.max(a, f);
  }
  for (d = 0; (e = this.In[d]); d++) a = Math.max(a, e.width);
  a += 1.5 * this.Di + this.Pm;
  a *= this.s.scale;
  a += g.Ua.Qc;
  if (this.rb != a) {
    for (d = 0; (e = c[d]); d++) {
      if (this.L) {
        f = e.Za().x;
        var h = a / this.s.scale - this.Di;
        e.O || (h -= this.Pm);
        e.moveBy(h - f, 0);
      }
      e.eB &&
        ((f = e.eB),
        (h = e),
        (e = I(h)),
        f.setAttribute("width", e.width),
        f.setAttribute("height", e.height),
        (h = h.Za()),
        f.setAttribute("y", h.y),
        f.setAttribute("x", this.L ? h.x - e.width : h.x));
    }
    if (this.L)
      for (d = 0; (e = this.In[d]); d++)
        e.moveTo(a / this.s.scale - e.width - this.Di - this.Pm, e.Sk.y);
    this.bb.Ia != this.Ej ||
      this.Ej != g.De ||
      this.bb.Ja ||
      this.bb.translate(this.bb.scrollX + a, this.bb.scrollY);
    this.rb = a;
    this.position();
  }
  this.uj && E(this.s, this.uj);
};
function Rb(a) {
  return a.Pa ? a.Pa.isVisible() : !1;
}
b.jc = function (a) {
  return this.s.Fb().jc(a);
};
g.ca = {};
g.ca.Gf = null;
g.ca.ir = null;
g.ca.hg = "";
g.ca.lg = "";
g.ca.Ya = function () {
  g.ca.ib ||
    ((g.ca.ib = document.createElement("div")),
    (g.ca.ib.className = "blocklyWidgetDiv"),
    (g.ks || document.body).appendChild(g.ca.ib));
};
g.ca.show = function (a, c, d) {
  g.ca.Ka();
  g.ca.Gf = a;
  g.ca.ir = d;
  a = g.ca.ib;
  a.style.direction = c ? "rtl" : "ltr";
  a.style.display = "block";
  c = g.Mg();
  g.ca.hg = c.Kb.dg();
  g.ca.lg = c.Pg().dg();
  g.g.o.Fa(a, g.ca.hg);
  g.g.o.Fa(a, g.ca.lg);
};
g.ca.Ka = function () {
  if (g.ca.isVisible()) {
    g.ca.Gf = null;
    var a = g.ca.ib;
    a.style.display = "none";
    a.style.left = "";
    a.style.top = "";
    g.ca.ir && g.ca.ir();
    g.ca.ir = null;
    a.textContent = "";
    g.ca.hg && (g.g.o.Vb(a, g.ca.hg), (g.ca.hg = ""));
    g.ca.lg && (g.g.o.Vb(a, g.ca.lg), (g.ca.lg = ""));
    na(g.Mg());
  }
};
g.ca.isVisible = function () {
  return !!g.ca.Gf;
};
g.ca.vo = function (a) {
  g.ca.Gf == a && g.ca.Ka();
};
g.ca.Vo = function (a, c, d) {
  g.ca.ib.style.left = a + "px";
  g.ca.ib.style.top = c + "px";
  g.ca.ib.style.height = d + "px";
};
g.ca.xJ = function (a, c, d, e) {
  var f = g.ca.LG(a, c, d);
  a = g.ca.KG(a, c, d, e);
  0 > f ? g.ca.Vo(a, 0, d.height + f) : g.ca.Vo(a, f, d.height);
};
g.ca.KG = function (a, c, d, e) {
  if (e)
    return (
      (c = Math.max(c.right - d.width, a.left)), Math.min(c, a.right - d.width)
    );
  c = Math.min(c.left, a.right - d.width);
  return Math.max(c, a.left);
};
g.ca.LG = function (a, c, d) {
  return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom;
};
g.Eh = function (a) {
  g.Eh.A.constructor.call(this, a);
};
g.g.object.W(g.Eh, g.fn);
g.Eh.bO = "verticalFlyout";
b = g.Eh.prototype;
b.yr = function () {
  if (!this.isVisible()) return null;
  try {
    var a = this.s.xb.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var c = this.Ut,
    d = this.Oc - 2 * this.Ut,
    e = this.rb;
  this.L || (e -= this.Ut);
  return {
    Td: a.height * this.s.scale + 2 * this.Di,
    rf: a.width * this.s.scale + 2 * this.Di,
    Xc: a.y,
    jd: a.x,
    Qb: d,
    Hb: e,
    ec: -this.s.scrollY + a.y,
    Wb: -this.s.scrollX,
    Wc: c,
    Mc: 0,
  };
};
b.sK = function (a) {
  var c = this.yr();
  c &&
    ("number" == typeof a.y && (this.s.scrollY = -c.Td * a.y),
    this.s.translate(this.s.scrollX + c.Mc, this.s.scrollY + c.Wc));
};
b.position = function () {
  if (this.isVisible()) {
    var a = this.bb.Yc();
    if (a) {
      this.Oc = a.Qb;
      var c = this.rb - this.Lb;
      a = a.Qb - 2 * this.Lb;
      var d = this.Ej == g.Ml,
        e = c + this.Lb;
      e = ["M " + (d ? e : 0) + ",0"];
      e.push("h", d ? -c : c);
      e.push(
        "a",
        this.Lb,
        this.Lb,
        0,
        0,
        d ? 0 : 1,
        d ? -this.Lb : this.Lb,
        this.Lb
      );
      e.push("v", Math.max(0, a));
      e.push(
        "a",
        this.Lb,
        this.Lb,
        0,
        0,
        d ? 0 : 1,
        d ? this.Lb : -this.Lb,
        this.Lb
      );
      e.push("h", d ? c : -c);
      e.push("z");
      this.rd.setAttribute("d", e.join(" "));
      c = (c = this.bb.Yc())
        ? this.bb.Ia == this.Ej
          ? c.qD
            ? this.Ej == g.De
              ? c.qD
              : c.Hb - this.rb
            : this.Ej == g.De
            ? 0
            : c.Hb
          : this.Ej == g.De
          ? 0
          : c.Hb + c.Mc - this.rb
        : 0;
      a = this.Oc;
      this.N.setAttribute("width", this.rb);
      this.N.setAttribute("height", a);
      "svg" == this.N.tagName
        ? g.g.o.jp(this.N, "translate(" + c + "px,0px)")
        : this.N.setAttribute("transform", "translate(" + c + ",0)");
      this.Pa &&
        ((this.Pa.Tw = new g.g.X(c, 0)),
        this.Pa.resize(),
        this.Pa.setPosition(this.Pa.position.x, this.Pa.position.y));
    }
  }
};
b.wx = function () {
  this.Pa.set(0);
};
b.VK = function (a) {
  var c = g.g.vB(a);
  if (c.y) {
    var d = this.yr();
    c = d.ec - d.Xc + c.y;
    c = Math.min(c, d.Td - d.Qb);
    c = Math.max(c, 0);
    this.Pa.set(c);
    g.ca.Ka();
    g.H.qk();
  }
  a.preventDefault();
  a.stopPropagation();
};
function fd(a, c, d) {
  a.s.scale = a.bb.scale;
  for (var e = a.Di, f = a.L ? e : e + a.Pm, h = 0, k; (k = c[h]); h++)
    if ("block" == k.type) {
      k = k.block;
      for (var l = q(k, !1), m = 0, n; (n = l[m]); m++) n.Nb = !0;
      k.Ha();
      n = k.Na();
      l = I(k);
      m = k.O ? f - a.Pm : f;
      k.moveBy(m, e);
      var p = a,
        r = k,
        y = h;
      m = g.g.o.M(
        g.g.G.Dc,
        {
          "fill-opacity": 0,
          x: a.L ? m - l.width : m,
          y: e,
          height: l.height,
          width: l.width,
        },
        null
      );
      m.Mf = r;
      g.J.Ul(m);
      p.s.xb.insertBefore(m, r.Na());
      r.eB = m;
      p.Pr[y] = m;
      p = a;
      p.ge.push(g.ya(n, "mousedown", null, hd(p, k)));
      p.ge.push(g.ya(m, "mousedown", null, hd(p, k)));
      p.ge.push(g.Rd(n, "mouseenter", k, k.Dq));
      p.ge.push(g.Rd(n, "mouseleave", k, k.ap));
      p.ge.push(g.Rd(m, "mouseenter", k, k.Dq));
      p.ge.push(g.Rd(m, "mouseleave", k, k.ap));
      e += l.height + d[h];
    } else
      "button" == k.type &&
        ((l = a),
        (m = k.button),
        (n = f),
        (p = e),
        (r = m.Ya()),
        m.moveTo(n, p),
        m.show(),
        l.ge.push(g.ya(r, "mousedown", l, l.pj)),
        l.In.push(m),
        (e += k.button.height + d[h]));
}
b.hm = function () {
  if (!this.N) return null;
  var a = this.N.getBoundingClientRect(),
    c = a.left;
  return this.Ej == g.De
    ? new g.g.Rect(-1e9, 1e9, -1e9, c + a.width)
    : new g.g.Rect(-1e9, 1e9, c, 1e9);
};
g.C.register(g.C.aa.Jy, g.C.bq, g.Eh);
g.ju = function (a) {
  this.s = a;
  this.Vm = this.Kp = this.Um = this.jh = this.Qw = this.Pw = this.Rw = null;
};
b = g.ju.prototype;
b.$j = 32;
b.Ny = 110;
b.Ct = 20;
b.jn = 20;
b.N = null;
b.Go = 0;
b.Qm = 0;
b.Ya = function () {
  this.N = g.g.o.M(g.g.G.xc, {}, null);
  var a = String(Math.random()).substring(2);
  this.Kp = g.g.o.M(g.g.G.xc, { class: "blocklyZoom" }, this.N);
  var c = g.g.o.M(g.g.G.Zm, { id: "blocklyZoomoutClipPath" + a }, this.Kp);
  g.g.o.M(g.g.G.Dc, { width: 32, height: 32 }, c);
  g.g.o
    .M(
      g.g.G.Rj,
      {
        width: g.Pd.width,
        height: g.Pd.height,
        x: -64,
        y: -92,
        "clip-path": "url(#blocklyZoomoutClipPath" + a + ")",
      },
      this.Kp
    )
    .setAttributeNS(g.g.o.Yf, "xlink:href", this.s.options.sj + g.Pd.url);
  this.Qw = g.ya(this.Kp, "mousedown", null, this.ED.bind(this, -1));
  this.Um = g.g.o.M(g.g.G.xc, { class: "blocklyZoom" }, this.N);
  c = g.g.o.M(g.g.G.Zm, { id: "blocklyZoominClipPath" + a }, this.Um);
  g.g.o.M(g.g.G.Dc, { width: 32, height: 32 }, c);
  g.g.o
    .M(
      g.g.G.Rj,
      {
        width: g.Pd.width,
        height: g.Pd.height,
        x: -32,
        y: -92,
        "clip-path": "url(#blocklyZoominClipPath" + a + ")",
      },
      this.Um
    )
    .setAttributeNS(g.g.o.Yf, "xlink:href", this.s.options.sj + g.Pd.url);
  this.Pw = g.ya(this.Um, "mousedown", null, this.ED.bind(this, 1));
  this.s.Hc() &&
    ((this.Vm = g.g.o.M(g.g.G.xc, { class: "blocklyZoom" }, this.N)),
    (c = g.g.o.M(g.g.G.Zm, { id: "blocklyZoomresetClipPath" + a }, this.Vm)),
    g.g.o.M(g.g.G.Dc, { width: 32, height: 32 }, c),
    g.g.o
      .M(
        g.g.G.Rj,
        {
          width: g.Pd.width,
          height: g.Pd.height,
          y: -92,
          "clip-path": "url(#blocklyZoomresetClipPath" + a + ")",
        },
        this.Vm
      )
      .setAttributeNS(g.g.o.Yf, "xlink:href", this.s.options.sj + g.Pd.url),
    (this.Rw = g.ya(this.Vm, "mousedown", null, this.iK.bind(this))));
  return this.N;
};
b.R = function (a) {
  this.jh = this.Ct + a;
  return this.jh + this.Ny;
};
b.I = function () {
  this.N && g.g.o.removeNode(this.N);
  this.Rw && g.Qa(this.Rw);
  this.Pw && g.Qa(this.Pw);
  this.Qw && g.Qa(this.Qw);
};
b.position = function () {
  if (this.jh) {
    var a = this.s.Yc();
    a &&
      ((this.Go =
        a.Ia == g.De || (this.s.Ad && !this.s.L)
          ? a.Hb + a.Mc - this.$j - this.jn - g.Ua.Qc
          : this.jn + g.Ua.Qc),
      a.Ia == g.zn
        ? ((this.Qm = this.jh),
          this.Um.setAttribute("transform", "translate(0, 34)"),
          this.Vm && this.Vm.setAttribute("transform", "translate(0, 77)"))
        : ((this.Qm = a.Qb + a.Wc - this.Ny - this.jh),
          this.Um.setAttribute("transform", "translate(0, 43)"),
          this.Kp.setAttribute("transform", "translate(0, 77)")),
      this.N.setAttribute(
        "transform",
        "translate(" + this.Go + "," + this.Qm + ")"
      ));
  }
};
b.ED = function (a, c) {
  na(this.s);
  var d = this.s,
    e = d.Yc();
  if (d.ma) {
    var f = e.jD ? e.jD / 2 : 0;
    e = e.iD ? e.iD / 2 : 0;
  } else (f = e.Hb / 2 + e.Mc), (e = e.Qb / 2 + e.Wc);
  d.zoom(f, e, a);
  id(this);
  g.Touch.ak();
  c.stopPropagation();
  c.preventDefault();
};
b.iK = function (a) {
  na(this.s);
  this.s.setScale(this.s.options.sb.fD);
  var c = this.s;
  g.g.o.Fa(c.xb, "blocklyCanvasTransitioning");
  g.g.o.Fa(c.kg, "blocklyCanvasTransitioning");
  c = this.s;
  if (c.Hc()) {
    var d = c.Yc(),
      e = (d.rf - d.Hb) / 2,
      f = (d.Td - d.Qb) / 2;
    e = -e - d.jd;
    f = -f - d.Xc;
    c.scroll(e, f);
  } else
    console.warn(
      "Tried to move a non-movable workspace. This could result in blocks becoming inaccessible."
    );
  setTimeout(this.s.BH.bind(this.s), 500);
  id(this);
  g.Touch.ak();
  a.stopPropagation();
  a.preventDefault();
};
function id(a) {
  a = new g.h.Pf(null, a.s.id, "zoom_controls");
  g.h.Ga(a);
}
g.cd.register([
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
  this.Pn = a;
  this.Ya();
};
b = g.ky.prototype;
b.Mb = null;
b.Hg = null;
b.Pn = null;
b.yj = 1;
b.xp = null;
b.Ya = function () {
  this.Mb ||
    ((this.Mb = g.g.o.M(
      g.g.G.Wj,
      {
        xmlns: g.g.o.wq,
        "xmlns:html": g.g.o.rl,
        "xmlns:xlink": g.g.o.Yf,
        version: "1.1",
        class: "blocklyBlockDragSurface",
      },
      this.Pn
    )),
    (this.Hg = g.g.o.M(g.g.G.xc, {}, this.Mb)));
};
function Qb(a, c) {
  if (a.Hg.childNodes.length) throw Error("Already dragging a block.");
  a.Hg.appendChild(c);
  a.Mb.style.display = "block";
  a.xp = new g.g.X(0, 0);
}
b.Zk = function (a, c) {
  this.xp = new g.g.X(a * this.yj, c * this.yj);
  a = this.xp.x;
  c = this.xp.y;
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.Mb.style.display = "block";
  g.g.o.jp(this.Mb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.Mv = function () {
  var a = g.g.yf(this.Mb);
  return new g.g.X(a.x / this.yj, a.y / this.yj);
};
b.uc = function () {
  return this.Hg;
};
b.Rq = function (a) {
  a
    ? a.appendChild(this.Hg.firstChild)
    : this.Hg.removeChild(this.Hg.firstChild);
  this.Mb.style.display = "none";
  if (this.Hg.childNodes.length) throw Error("Drag group was not cleared.");
  this.xp = null;
};
g.H = function () {};
g.H.vu = null;
g.H.Gf = null;
g.H.OC = null;
g.H.Mp = 16;
g.H.jy = 1;
g.H.ey = 12;
g.H.lz = 16;
g.H.Ws = 0.25;
g.H.mu = null;
g.H.Qk = null;
g.H.hg = "";
g.H.lg = "";
g.H.Ya = function () {
  if (!g.H.pg) {
    var a = document.createElement("div");
    a.className = "blocklyDropDownDiv";
    (g.ks || document.body).appendChild(a);
    g.H.pg = a;
    var c = document.createElement("div");
    c.className = "blocklyDropDownContent";
    a.appendChild(c);
    g.H.Lh = c;
    c = document.createElement("div");
    c.className = "blocklyDropDownArrow";
    a.appendChild(c);
    g.H.kf = c;
    g.H.pg.style.opacity = 0;
    g.H.pg.style.transition =
      "transform " + g.H.Ws + "s, opacity " + g.H.Ws + "s";
    a.addEventListener("focusin", function () {
      g.g.o.Fa(a, "blocklyFocused");
    });
    a.addEventListener("focusout", function () {
      g.g.o.Vb(a, "blocklyFocused");
    });
  }
};
g.H.pK = function (a) {
  g.H.vu = a;
};
g.H.TH = function () {
  return g.H.Lh;
};
g.H.SG = function () {
  g.H.Lh.textContent = "";
  g.H.Lh.style.width = "";
};
g.H.pd = function (a, c) {
  g.H.pg.style.backgroundColor = a;
  g.H.pg.style.borderColor = c;
};
g.H.iO = function (a, c, d, e) {
  return g.H.aD(g.H.tB(c), a, d, e);
};
g.H.vK = function (a, c) {
  g.H.OC = !0;
  g.H.aD(g.H.uB(a), a, c, void 0);
};
g.H.tB = function (a) {
  var c = a.Na(),
    d = c.getBBox(),
    e = a.u.scale;
  a = d.height * e;
  d = d.width * e;
  c = g.g.style.mk(c);
  return new g.g.Rect(c.y, c.y + a, c.x, c.x + d);
};
g.H.uB = function (a) {
  a = fc(a);
  return new g.g.Rect(a.top, a.bottom, a.left, a.right);
};
g.H.aD = function (a, c, d, e) {
  var f = a.left + (a.right - a.left) / 2,
    h = a.bottom;
  a = a.top;
  e && (a += e);
  e = c.Y();
  for (var k = e.u; k.options.vc; ) k = k.options.vc;
  g.H.pK(u(k).parentNode);
  return g.H.show(c, e.L, f, h, f, a, d);
};
g.H.show = function (a, c, d, e, f, h, k) {
  g.H.Gf = a;
  g.H.Qk = k || null;
  a = g.H.pg;
  a.style.direction = c ? "rtl" : "ltr";
  c = g.Mg();
  g.H.hg = c.Kb.dg();
  g.H.lg = c.Pg().dg();
  g.g.o.Fa(a, g.H.hg);
  g.g.o.Fa(a, g.H.lg);
  return g.H.Vo(d, e, f, h);
};
g.H.MH = function () {
  var a = g.g.style.mk(g.H.vu),
    c = g.g.style.Sh(g.H.vu);
  return {
    left: a.x,
    right: a.x + c.width,
    top: a.y,
    bottom: a.y + c.height,
    width: c.width,
    height: c.height,
  };
};
g.H.YH = function (a, c, d, e) {
  var f = g.H.MH(),
    h = g.g.style.Sh(g.H.pg);
  return c + h.height < f.bottom
    ? g.H.sB(a, c, f, h)
    : e - h.height > f.top
    ? g.H.rB(d, e, f, h)
    : c + h.height < document.documentElement.clientHeight
    ? g.H.sB(a, c, f, h)
    : e - h.height > document.documentElement.clientTop
    ? g.H.rB(d, e, f, h)
    : g.H.ZH(a, f, h);
};
g.H.sB = function (a, c, d, e) {
  a = g.H.Lv(a, d.left, d.right, e.width);
  return {
    Wv: a.fm,
    Xv: c,
    vv: a.fm,
    wv: c + g.H.lz,
    Rl: a.Rl,
    ou: -(g.H.Mp / 2 + g.H.jy),
    Iq: !0,
    nu: !0,
  };
};
g.H.rB = function (a, c, d, e) {
  a = g.H.Lv(a, d.left, d.right, e.width);
  return {
    Wv: a.fm,
    Xv: c - e.height,
    vv: a.fm,
    wv: c - e.height - g.H.lz,
    Rl: a.Rl,
    ou: e.height - 2 * g.H.jy - g.H.Mp / 2,
    Iq: !1,
    nu: !0,
  };
};
g.H.ZH = function (a, c, d) {
  a = g.H.Lv(a, c.left, c.right, d.width);
  return {
    Wv: a.fm,
    Xv: 0,
    vv: a.fm,
    wv: 0,
    Iq: null,
    Rl: null,
    ou: null,
    nu: !1,
  };
};
g.H.Lv = function (a, c, d, e) {
  var f = a;
  a = g.g.Ic.nf(c, a - e / 2, d - e);
  f -= g.H.Mp / 2;
  c = g.g.Ic.nf(g.H.ey, f - a, e - g.H.ey - g.H.Mp);
  return { Rl: c, fm: a };
};
g.H.isVisible = function () {
  return !!g.H.Gf;
};
g.H.vo = function (a, c) {
  g.H.Gf === a && (c ? g.H.qk() : g.H.Ka());
};
g.H.Ka = function () {
  var a = g.H.pg;
  a.style.transform = "translate(0, 0)";
  a.style.opacity = 0;
  g.H.mu = setTimeout(function () {
    g.H.qk();
  }, 1e3 * g.H.Ws);
  g.H.Qk && (g.H.Qk(), (g.H.Qk = null));
};
g.H.qk = function () {
  if (g.H.isVisible()) {
    g.H.mu && clearTimeout(g.H.mu);
    var a = g.H.pg;
    a.style.transform = "";
    a.style.left = "";
    a.style.top = "";
    a.style.opacity = 0;
    a.style.display = "none";
    a.style.backgroundColor = "";
    a.style.borderColor = "";
    g.H.Qk && (g.H.Qk(), (g.H.Qk = null));
    g.H.SG();
    g.H.Gf = null;
    g.H.hg && (g.g.o.Vb(a, g.H.hg), (g.H.hg = ""));
    g.H.lg && (g.g.o.Vb(a, g.H.lg), (g.H.lg = ""));
    na(g.Mg());
  }
};
g.H.Vo = function (a, c, d, e) {
  a = g.H.YH(a, c, d, e);
  a.nu
    ? ((g.H.kf.style.display = ""),
      (g.H.kf.style.transform =
        "translate(" + a.Rl + "px," + a.ou + "px) rotate(45deg)"),
      g.H.kf.setAttribute(
        "class",
        a.Iq
          ? "blocklyDropDownArrow blocklyArrowTop"
          : "blocklyDropDownArrow blocklyArrowBottom"
      ))
    : (g.H.kf.style.display = "none");
  c = Math.floor(a.Wv);
  d = Math.floor(a.Xv);
  e = Math.floor(a.vv);
  var f = Math.floor(a.wv),
    h = g.H.pg;
  h.style.left = c + "px";
  h.style.top = d + "px";
  h.style.display = "block";
  h.style.opacity = 1;
  h.style.transform = "translate(" + (e - c) + "px," + (f - d) + "px)";
  return !!a.Iq;
};
g.H.cO = function () {
  if (g.H.Gf) {
    var a = g.H.Gf,
      c = a.Y();
    a = g.H.OC ? g.H.uB(a) : g.H.tB(c);
    c = a.left + (a.right - a.left) / 2;
    g.H.Vo(c, a.bottom, c, a.top);
  } else g.H.Ka();
};
g.xk = function (a, c) {
  g.MG();
  "string" == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a));
  if (!a || !g.g.o.containsNode(document, a))
    throw Error("Error: container is not in current document.");
  c = new g.Ld(c || {});
  var d = document.createElement("div");
  d.className = "injectionDiv";
  d.tabIndex = 0;
  g.g.ua.qd(d, g.g.ua.State.jF, g.i.WORKSPACE_ARIA_LABEL);
  a.appendChild(d);
  a = g.Ke(d, c);
  var e = new g.ky(d),
    f = new g.bA(d),
    h = g.cH(a, c, e, f);
  g.sI(h);
  g.Io = h;
  g.Om(h);
  d.addEventListener("focusin", function () {
    g.Io = h;
  });
  return h;
};
g.Ke = function (a, c) {
  a.setAttribute("dir", "LTR");
  g.cd.xk(c.lI, c.sj);
  a = g.g.o.M(
    g.g.G.Wj,
    {
      xmlns: g.g.o.wq,
      "xmlns:html": g.g.o.rl,
      "xmlns:xlink": g.g.o.Yf,
      version: "1.1",
      class: "blocklySvg",
      tabindex: "0",
    },
    a
  );
  var d = g.g.o.M(g.g.G.vy, {}, a);
  c.Qv = g.Qj.Ya(String(Math.random()).substring(2), c.EB, d);
  return a;
};
g.cH = function (a, c, d, e) {
  c.vc = null;
  var f = new g.ub(c, d, e);
  c = f.options;
  f.scale = c.sb.fD;
  a.appendChild(f.Ya("blocklyMainBackground"));
  g.g.o.Fa(aa(f), f.Kb.dg());
  g.g.o.Fa(aa(f), f.Pg().dg());
  !c.so && c.Xg && ((d = Zc(f, g.g.G.Wj)), g.g.o.yk(d, a));
  c.IB && Xc(f);
  c.sb && c.sb.controls && Yc(f);
  f.Ac.subscribe(a, "workspaceBackgroundColour", "background-color");
  f.translate(0, 0);
  c.readOnly ||
    f.Hc() ||
    E(f, function (h) {
      if (!f.Gc() && !f.Hc() && -1 != g.h.SD.indexOf(h.type)) {
        var k = Object.create(null),
          l = f.Yc(),
          m = f.scale;
        k.L = f.L;
        k.Wb = l.Wb / m;
        k.ec = l.ec / m;
        k.zD = (l.Wb + l.Hb) / m;
        k.yD = (l.ec + l.Qb) / m;
        $c(f)
          ? ((l = Ca(f)),
            (k.jd = l.left),
            (k.Xc = l.top),
            (k.DA = l.right),
            (k.BA = l.bottom))
          : ((k.jd = l.jd / m),
            (k.Xc = l.Xc / m),
            (k.DA = (l.jd + l.rf) / m),
            (k.BA = (l.Xc + l.Td) / m));
        if (k.Xc < k.ec || k.BA > k.yD || k.jd < k.Wb || k.DA > k.zD) {
          l = null;
          h && ((l = g.h.uc()), g.h.ea(h.group));
          switch (h.type) {
            case g.h.Np:
            case g.h.Ys:
              var n = f.Wd(h.lb);
              n && (n = n.Zd());
              break;
            case g.h.Vp:
            case g.h.Wp:
              n = f.Wq[h.Ag] || null;
          }
          if (n) {
            m = Kc(n);
            m.height = m.bottom - m.top;
            m.width = m.right - m.left;
            var p = k.ec,
              r = k.yD - m.height;
            r = Math.max(p, r);
            p = g.g.Ic.nf(p, m.top, r) - m.top;
            r = k.Wb;
            var y = k.zD - m.width;
            k.L ? (r = Math.min(y, r)) : (y = Math.max(r, y));
            n.moveBy(g.g.Ic.nf(r, m.left, y) - m.left, p);
          }
          h &&
            (!h.group &&
              n &&
              console.warn(
                "Moved object in bounds but there was no event group. This may break undo."
              ),
            null !== l && g.h.ea(l));
        }
      }
    });
  g.Om(f);
  g.ca.Ya();
  g.H.Ya();
  g.J.Ya();
  return f;
};
g.sI = function (a) {
  var c = a.options,
    d = u(a);
  g.ya(d.parentNode, "contextmenu", null, function (f) {
    g.g.Jr(f) || f.preventDefault();
  });
  d = g.ya(window, "resize", null, function () {
    g.Fc(!0);
    g.Om(a);
  });
  a.xs = d;
  g.xk.EG();
  if (c.Xg) {
    d = a.Ja;
    var e = a.ic(!0);
    d
      ? d.R()
      : e && (e.R(a), e.show(c.Xg), "function" == typeof e.wx && e.wx());
  }
  d = g.Ua.Qc;
  c.IB && (d = a.sd.R(d));
  c.sb && c.sb.controls && a.hl.R(d);
  c.$c && c.$c.scrollbars
    ? ((a.Pa = new g.xn(a)), a.Pa.resize())
    : a.lp({ x: 0.5, y: 0.5 });
  c.oI && g.xk.FI(c.sj, a);
};
g.xk.EG = function () {
  g.tH ||
    (g.ya(document, "scroll", null, function () {
      for (var a = g.Rb.getAll(), c = 0, d; (d = a[c]); c++) d.Fp && d.Fp();
    }),
    g.ya(document, "keydown", null, g.Ro),
    g.Rd(document, "touchend", null, g.kj),
    g.Rd(document, "touchcancel", null, g.kj),
    g.g.userAgent.tl &&
      g.ya(window, "orientationchange", document, function () {
        g.Om(g.Mg());
      }));
  g.tH = !0;
};
g.xk.FI = function (a, c) {
  function d() {
    for (; f.length; ) g.Qa(f.pop());
    e.preload();
  }
  var e = c.Li;
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
g.Kd = function (a, c) {
  this.xD = c || "";
  this.VC = Object.create(null);
  if (a) for (a = a.split(","), c = 0; c < a.length; c++) this.VC[a[c]] = !0;
  this.reset();
};
g.Kd.nt = "DEVELOPER_VARIABLE";
g.Kd.prototype.reset = function () {
  this.Gg = Object.create(null);
  this.LA = Object.create(null);
  this.Ra = null;
};
g.Kd.prototype.Cx = function (a) {
  this.Ra = a;
};
g.Kd.prototype.Yd = function (a, c) {
  if (c == g.zc) {
    var d = a;
    this.Ra
      ? (d = (d = this.Ra.fg(d)) ? d.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (d = null));
    d && (a = d);
  }
  d = a.toLowerCase() + "_" + c;
  var e = c == g.zc || c == g.Kd.nt ? this.xD : "";
  if (d in this.Gg) return e + this.Gg[d];
  a = jd(this, a, c);
  this.Gg[d] = a.substr(e.length);
  return a;
};
function jd(a, c, d) {
  c
    ? ((c = encodeURI(c.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(c[0]) && (c = "my_" + c))
    : (c = g.i.UNNAMED_KEY || "unnamed");
  for (var e = ""; a.LA[c + e] || c + e in a.VC; ) e = e ? e + 1 : 2;
  c += e;
  a.LA[c] = !0;
  return (d == g.zc || d == g.Kd.nt ? a.xD : "") + c;
}
g.Kd.vf = function (a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.Aa = {};
g.Aa.qq = g.vn;
g.Aa.uy = "x";
g.Aa.BG = function (a) {
  var c = Ia(a, "procedures_defnoreturn").map(function (d) {
    return d.Wi();
  });
  a = Ia(a, "procedures_defreturn").map(function (d) {
    return d.Wi();
  });
  c.sort(g.Aa.QC);
  a.sort(g.Aa.QC);
  return [c, a];
};
g.Aa.QC = function (a, c) {
  return a[0].toLowerCase().localeCompare(c[0].toLowerCase());
};
g.Aa.nr = function (a, c) {
  if (c.Nb) return a;
  for (a = a || g.i.UNNAMED_KEY || "unnamed"; !g.Aa.yI(a, c.u, c); ) {
    var d = a.match(/^(.*?)(\d+)$/);
    a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2";
  }
  return a;
};
g.Aa.yI = function (a, c, d) {
  return !g.Aa.AI(a, c, d);
};
g.Aa.AI = function (a, c, d) {
  c = B(c);
  for (var e = 0; e < c.length; e++)
    if (c[e] != d && c[e].Wi) {
      var f = c[e].Wi();
      if (g.Kd.vf(f[0], a)) return !0;
    }
  return !1;
};
g.Aa.ts = function (a) {
  a = a.trim();
  var c = g.Aa.nr(a, this.Y()),
    d = this.getValue();
  if (d != a && d != c) {
    a = B(this.Y().u);
    for (var e = 0; e < a.length; e++) a[e].Gm && a[e].Gm(d, c);
  }
  return c;
};
g.Aa.jk = function (a) {
  function c(h, k) {
    for (var l = 0; l < h.length; l++) {
      var m = h[l][0],
        n = h[l][1],
        p = g.g.xml.createElement("block");
      p.setAttribute("type", k);
      p.setAttribute("gap", 16);
      var r = g.g.xml.createElement("mutation");
      r.setAttribute("name", m);
      p.appendChild(r);
      for (m = 0; m < n.length; m++) {
        var y = g.g.xml.createElement("arg");
        y.setAttribute("name", n[m]);
        r.appendChild(y);
      }
      d.push(p);
    }
  }
  var d = [];
  if (g.P.procedures_defnoreturn) {
    var e = g.g.xml.createElement("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = g.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFNORETURN_PROCEDURE));
    e.appendChild(f);
    d.push(e);
  }
  g.P.procedures_defreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = g.g.xml.createElement("field")),
    f.setAttribute("name", "NAME"),
    f.appendChild(g.g.xml.createTextNode(g.i.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    d.push(e));
  g.P.procedures_ifreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    d.push(e));
  d.length && d[d.length - 1].setAttribute("gap", 24);
  a = g.Aa.BG(a);
  c(a[0], "procedures_callnoreturn");
  c(a[1], "procedures_callreturn");
  return d;
};
g.Aa.tD = function (a) {
  for (
    var c = [], d = Ia(a, "procedures_mutatorarg"), e = 0, f;
    (f = d[e]);
    e++
  )
    c.push(C(f, "NAME"));
  d = g.g.xml.createElement("xml");
  e = g.g.xml.createElement("block");
  e.setAttribute("type", "procedures_mutatorarg");
  f = g.g.xml.createElement("field");
  f.setAttribute("name", "NAME");
  c = g.g.xml.createTextNode(g.$.iB(g.Aa.uy, c));
  f.appendChild(c);
  e.appendChild(f);
  d.appendChild(e);
  if ((c = g.g.xa.Ku(d))) {
    if (!a.options.Xg)
      throw Error("Existing toolbox is null.  Can't create new toolbox.");
    if (g.g.xa.so(c)) {
      if (!a.Ja)
        throw Error("Existing toolbox has no categories.  Can't change mode.");
      a.options.Xg = c;
      a.Ja.Ha(c);
    } else {
      if (!a.ma)
        throw Error("Existing toolbox has categories.  Can't change mode.");
      a.options.Xg = c;
      a.ma.show(c);
    }
  } else if (a.options.Xg) throw Error("Can't nullify an existing toolbox.");
};
g.Aa.VI = function (a) {
  if (a.type == g.h.Pp && "mutator" === a.wu && a.vm) {
    a = g.Rb.io(a.Sc).Wd(a.lb);
    var c = a.type;
    if ("procedures_defnoreturn" == c || "procedures_defreturn" == c)
      (a = a.nd.s), g.Aa.tD(a), E(a, g.Aa.UI);
  }
};
g.Aa.UI = function (a) {
  (a.type != g.h.Np && a.type != g.h.Xs && a.type != g.h.ND) ||
    g.Aa.tD(g.Rb.io(a.Sc));
};
g.Aa.NH = function (a, c) {
  var d = [];
  c = B(c);
  for (var e = 0; e < c.length; e++)
    if (c[e].Ne) {
      var f = c[e].Ne();
      f && g.Kd.vf(f, a) && d.push(c[e]);
    }
  return d;
};
g.Aa.Qo = function (a) {
  var c = g.h.ab,
    d = a.Wi()[0],
    e = a.ob(!0);
  a = g.Aa.NH(d, a.u);
  d = 0;
  for (var f; (f = a[d]); d++) {
    var h = f.ob();
    h = h && g.V.re(h);
    f.Tb(e);
    var k = f.ob();
    k = k && g.V.re(k);
    h != k &&
      ((g.h.ab = !1),
      g.h.Ga(new g.h.lh(f, "mutation", null, h, k)),
      (g.h.ab = c));
  }
};
g.Aa.lo = function (a, c) {
  c = c.$b(!1);
  for (var d = 0; d < c.length; d++)
    if (c[d].Wi) {
      var e = c[d].Wi();
      if (e && g.Kd.vf(e[0], a)) return c[d];
    }
  return null;
};
g.Yb = {};
g.Yb.names = {
  uE: "escape",
  Nj: "delete",
  $D: "copy",
  gE: "cut",
  TF: "paste",
  oG: "undo",
  YF: "redo",
};
g.Yb.OJ = function () {
  var a = {
    name: g.Yb.names.uE,
    $a: function (c) {
      return !c.options.readOnly;
    },
    za: function () {
      g.Fc();
      return !0;
    },
  };
  g.fb.C.register(a);
  G(g.g.T.ot, a.name);
};
g.Yb.lx = function () {
  var a = {
    name: g.Yb.names.Nj,
    $a: function (c) {
      return !c.options.readOnly && g.selected && g.selected.ve();
    },
    za: function (c, d) {
      d.preventDefault();
      if (g.rg.vk()) return !1;
      g.PA();
      return !0;
    },
  };
  g.fb.C.register(a);
  G(g.g.T.Nj, a.name);
  G(g.g.T.LD, a.name);
};
g.Yb.GJ = function () {
  var a = {
    name: g.Yb.names.$D,
    $a: function (d) {
      return (
        !d.options.readOnly &&
        !g.rg.vk() &&
        g.selected &&
        g.selected.ve() &&
        g.selected.Hc()
      );
    },
    za: function () {
      g.Fc();
      g.Lu(g.selected);
      return !0;
    },
  };
  g.fb.C.register(a);
  var c = H(g.g.T.bt, [g.g.T.wi]);
  G(c, a.name);
  c = H(g.g.T.bt, [g.g.T.jl]);
  G(c, a.name);
  c = H(g.g.T.bt, [g.g.T.zl]);
  G(c, a.name);
};
g.Yb.HJ = function () {
  var a = {
    name: g.Yb.names.gE,
    $a: function (d) {
      return (
        !d.options.readOnly &&
        !g.rg.vk() &&
        g.selected &&
        g.selected.ve() &&
        g.selected.Hc() &&
        !g.selected.u.gg
      );
    },
    za: function () {
      g.Lu(g.selected);
      g.PA();
      return !0;
    },
  };
  g.fb.C.register(a);
  var c = H(g.g.T.Cq, [g.g.T.wi]);
  G(c, a.name);
  c = H(g.g.T.Cq, [g.g.T.jl]);
  G(c, a.name);
  c = H(g.g.T.Cq, [g.g.T.zl]);
  G(c, a.name);
};
g.Yb.ZJ = function () {
  var a = {
    name: g.Yb.names.TF,
    $a: function (d) {
      return !d.options.readOnly && !g.rg.vk();
    },
    za: function () {
      return g.ns();
    },
  };
  g.fb.C.register(a);
  var c = H(g.g.T.fu, [g.g.T.wi]);
  G(c, a.name);
  c = H(g.g.T.fu, [g.g.T.jl]);
  G(c, a.name);
  c = H(g.g.T.fu, [g.g.T.zl]);
  G(c, a.name);
};
g.Yb.ox = function () {
  var a = {
    name: g.Yb.names.oG,
    $a: function (d) {
      return !d.options.readOnly && !g.rg.vk();
    },
    za: function (d) {
      g.Fc();
      Ma(d, !1);
      return !0;
    },
  };
  g.fb.C.register(a);
  var c = H(g.g.T.Ql, [g.g.T.wi]);
  G(c, a.name);
  c = H(g.g.T.Ql, [g.g.T.jl]);
  G(c, a.name);
  c = H(g.g.T.Ql, [g.g.T.zl]);
  G(c, a.name);
};
g.Yb.nx = function () {
  var a = {
    name: g.Yb.names.YF,
    $a: function (d) {
      return !g.rg.vk() && !d.options.readOnly;
    },
    za: function (d) {
      g.Fc();
      Ma(d, !0);
      return !0;
    },
  };
  g.fb.C.register(a);
  var c = H(g.g.T.Ql, [g.g.T.yh, g.g.T.wi]);
  G(c, a.name);
  c = H(g.g.T.Ql, [g.g.T.yh, g.g.T.jl]);
  G(c, a.name);
  c = H(g.g.T.Ql, [g.g.T.yh, g.g.T.zl]);
  G(c, a.name);
  c = H(g.g.T.vG, [g.g.T.wi]);
  G(c, a.name);
};
g.Yb.JJ = function () {
  g.Yb.OJ();
  g.Yb.lx();
  g.Yb.GJ();
  g.Yb.HJ();
  g.Yb.ZJ();
  g.Yb.ox();
  g.Yb.nx();
};
g.fb = function () {
  g.fb.C = this;
  this.Se = Object.create(null);
  this.xm = Object.create(null);
  g.Yb.JJ();
  g.navigation.WJ();
};
g.fb.Sr = { rN: g.g.T.yh, nL: g.g.T.wi, cL: g.g.T.jl, jM: g.g.T.zl };
g.fb.prototype.register = function (a, c) {
  if (this.Se[a.name] && !c)
    throw Error('Shortcut with name "' + a.name + '" already exists.');
  this.Se[a.name] = a;
};
g.fb.prototype.unregister = function (a) {
  if (!this.Se[a])
    return (
      console.warn('Keyboard shortcut with name "' + a + '" not found.'), !1
    );
  for (var c in this.xm) {
    var d = c,
      e = this.xm[d],
      f = e.indexOf(a);
    -1 < f && (e.splice(f, 1), 0 == e.length && delete this.xm[d]);
  }
  delete this.Se[a];
  return !0;
};
function G(a, c, d) {
  var e = g.fb.C,
    f = e.xm[a];
  if (f && !d)
    throw Error(
      'Shortcut with name "' + c + '" collides with shortcuts ' + f.toString()
    );
  f && d ? f.unshift(c) : (e.xm[a] = [c]);
}
g.fb.prototype.Ro = function (a, c) {
  var d = "";
  for (e in g.fb.Sr) c.getModifierState(e) && ("" != d && (d += "+"), (d += e));
  "" != d && c.keyCode
    ? (d = d + "+" + c.keyCode)
    : c.keyCode && (d = c.keyCode.toString());
  d = this.xm[d] || [];
  if (!d) return !1;
  var e = 0;
  for (var f; (f = d[e]); e++)
    if (((f = this.Se[f]), (!f.$a || f.$a(a)) && f.za && f.za(a, c, f)))
      return !0;
  return !1;
};
function H(a, c) {
  var d = "";
  if (c) {
    for (var e = g.g.object.values(g.fb.Sr), f = 0, h; (h = c[f]); f++)
      if (0 > e.indexOf(h)) throw Error(h + " is not a valid modifier key.");
    for (var k in g.fb.Sr)
      -1 < c.indexOf(g.fb.Sr[k]) && ("" != d && (d += "+"), (d += k));
  }
  "" != d && a ? (d = d + "+" + a) : a && (d = a.toString());
  return d;
}
new g.fb();
g.An = function (a, c, d, e) {
  this.u = a;
  this.name = c;
  this.type = d || "";
  this.Vv = e || g.g.Qh();
  g.h.Ga(new g.h.jf(this));
};
g.An.prototype.Ma = function () {
  return this.Vv;
};
g.An.vA = function (a, c) {
  a = a.name.toLowerCase();
  c = c.name.toLowerCase();
  return a < c ? -1 : a == c ? 0 : 1;
};
g.$ = {};
g.$.qq = g.zc;
g.$.hA = function (a) {
  var c = B(a);
  a = Object.create(null);
  for (var d = 0; d < c.length; d++) {
    var e = c[d].Th();
    if (e)
      for (var f = 0; f < e.length; f++) {
        var h = e[f],
          k = h.Ma();
        k && (a[k] = h);
      }
  }
  c = [];
  for (k in a) c.push(a[k]);
  return c;
};
g.$.Zx = {};
g.$.zG = function (a) {
  a = B(a);
  for (var c = Object.create(null), d = 0, e; (e = a[d]); d++) {
    var f = e.NN;
    !f &&
      e.UH &&
      ((f = e.UH),
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
g.$.jk = function (a) {
  var c = [],
    d = document.createElement("button");
  d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
  d.setAttribute("callbackKey", "CREATE_VARIABLE");
  bd(a, function (e) {
    g.$.IA(e.Js);
  });
  c.push(d);
  a = g.$.HH(a);
  return (c = c.concat(a));
};
g.$.HH = function (a) {
  a = a.po("");
  var c = [];
  if (0 < a.length) {
    var d = a[a.length - 1];
    if (g.P.variables_set) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", "variables_set");
      e.setAttribute("gap", g.P.math_change ? 8 : 24);
      e.appendChild(g.$.ho(d));
      c.push(e);
    }
    g.P.math_change &&
      ((e = g.g.xml.createElement("block")),
      e.setAttribute("type", "math_change"),
      e.setAttribute("gap", g.P.variables_get ? 20 : 8),
      e.appendChild(g.$.ho(d)),
      (d = g.V.Ye(
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
      )),
      e.appendChild(d),
      c.push(e));
    if (g.P.variables_get) {
      a.sort(g.An.vA);
      d = 0;
      for (var f; (f = a[d]); d++)
        (e = g.g.xml.createElement("block")),
          e.setAttribute("type", "variables_get"),
          e.setAttribute("gap", 8),
          e.appendChild(g.$.ho(f)),
          c.push(e);
    }
  }
  return c;
};
g.$.Rz = "ijkmnopqrstuvwxyzabcdefgh";
g.$.JH = function (a) {
  return g.$.iB(g.$.Rz.charAt(0), a.Av());
};
g.$.iB = function (a, c) {
  if (!c.length) return a;
  for (var d = g.$.Rz, e = "", f = d.indexOf(a); ; ) {
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
g.$.IA = function (a, c, d) {
  function e(h) {
    g.$.RC(g.i.NEW_VARIABLE_TITLE, h, function (k) {
      if (k) {
        var l = g.$.XI(k, a);
        if (l) {
          if (l.type == f)
            var m = g.i.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
          else
            (m = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (m = m.replace("%1", l.name).replace("%2", l.type));
          g.alert(m, function () {
            e(k);
          });
        } else a.sf(k, f), c && c(k);
      } else c && c(null);
    });
  }
  var f = d || "";
  e("");
};
g.$.sf = g.$.IA;
g.$.vs = function (a, c) {
  function d(e) {
    var f = g.i.RENAME_VARIABLE_TITLE.replace("%1", c.name);
    g.$.RC(f, e, function (h) {
      if (h) {
        var k = g.$.YI(h, c.type, a);
        k
          ? ((k = g.i.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              k.name
            ).replace("%2", k.type)),
            g.alert(k, function () {
              d(h);
            }))
          : a.xj(c.Ma(), h);
      }
    });
  }
  d("");
};
g.$.RC = function (a, c, d) {
  g.prompt(a, c, function (e) {
    e &&
      ((e = e.replace(/[\s\xa0]+/g, " ").trim()),
      e == g.i.RENAME_VARIABLE || e == g.i.NEW_VARIABLE) &&
      (e = null);
    d(e);
  });
};
g.$.YI = function (a, c, d) {
  d = d.Ra.kk();
  a = a.toLowerCase();
  for (var e = 0, f; (f = d[e]); e++)
    if (f.name.toLowerCase() == a && f.type != c) return f;
  return null;
};
g.$.XI = function (a, c) {
  c = c.Ra.kk();
  a = a.toLowerCase();
  for (var d = 0, e; (e = c[d]); d++) if (e.name.toLowerCase() == a) return e;
  return null;
};
g.$.ho = function (a) {
  var c = g.g.xml.createElement("field");
  c.setAttribute("name", "VAR");
  c.setAttribute("id", a.Ma());
  c.setAttribute("variabletype", a.type);
  a = g.g.xml.createTextNode(a.name);
  c.appendChild(a);
  return c;
};
g.$.zr = function (a, c, d, e) {
  var f = g.$.ld(a, c, d, e);
  f || (f = g.$.dH(a, c, d, e));
  return f;
};
g.$.ld = function (a, c, d, e) {
  var f = a.tj,
    h = null;
  if (c && ((h = a.fg(c)), !h && f && (h = f.fg(c)), h)) return h;
  if (d) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    h = a.ld(d, e);
    !h && f && (h = f.ld(d, e));
  }
  return h;
};
g.$.dH = function (a, c, d, e) {
  var f = a.tj;
  d || (d = g.$.JH(a.gg ? a.bb : a));
  return f ? f.sf(d, e, c) : a.sf(d, e, c);
};
g.$.jB = function (a, c) {
  a = a.kk();
  var d = [];
  if (c.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == c.indexOf(f) && d.push(f);
    }
  return d;
};
g.VERSION = "uncompiled";
g.Io = null;
g.selected = null;
g.gm = [];
g.Xl = null;
g.Tq = null;
g.Gu = null;
g.DN = null;
g.ks = null;
g.EK = function (a) {
  return new g.g.hf(a.mA, a.lA);
};
g.dO = function (a) {
  Fa(a);
};
g.Om = function (a) {
  for (; a.options.vc; ) a = a.options.vc;
  var c = u(a),
    d = c.parentNode;
  if (d) {
    var e = d.offsetWidth;
    d = d.offsetHeight;
    c.mA != e && (c.setAttribute("width", e + "px"), (c.mA = e));
    c.lA != d && (c.setAttribute("height", d + "px"), (c.lA = d));
    a.resize();
  }
};
g.Ro = function (a) {
  var c = g.Io;
  !c || g.g.Jr(a) || (c.pa && !c.isVisible()) || g.fb.C.Ro(c, a);
};
g.PA = function () {
  var a = g.selected;
  a.u.gg || (g.h.ea(!0), g.Fc(), a.I(!0, !0), g.h.ea(!1));
};
g.Lu = function (a) {
  if (a.tm) a = null;
  else {
    var c = g.V.Gh(a, !0);
    g.V.lH(c);
    var d = a.Za();
    c.setAttribute("x", a.L ? -d.x : d.x);
    c.setAttribute("y", d.y);
    a = { xml: c, source: a.u, NK: g.g.Bv(a, !0) };
  }
  a && ((g.Xl = a.xml), (g.Tq = a.source), (g.Gu = a.NK));
};
g.ns = function () {
  if (!g.Xl) return !1;
  var a = g.Tq;
  a.gg && (a = a.bb);
  return g.Gu && Ka(a, g.Gu) ? (g.h.ea(!0), a.ns(g.Xl), g.h.ea(!1), !0) : !1;
};
g.duplicate = function (a) {
  var c = g.Xl,
    d = g.Tq;
  g.Lu(a);
  a.u.ns(g.Xl);
  g.Xl = c;
  g.Tq = d;
};
g.$N = function (a) {
  g.g.Jr(a) || a.preventDefault();
};
g.Fc = function (a) {
  g.J.Ka();
  g.ca.Ka();
  g.H.qk();
  if (!a) {
    a = g.Mg();
    if (a.sd && a.sd.Kg) {
      var c = a.sd;
      c.Kg.isVisible() && (c.Kg.Ka(), wb(c, !1));
    }
    (a = a.Ja) && a.ic() && a.ic().Tl && eb(a, null);
  }
};
g.Mg = function () {
  return g.Io;
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
g.DI = function (a) {
  return function () {
    M(this, a);
  };
};
g.em = function (a) {
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
        : (g.P[e] &&
            console.warn(
              "Block definition #" +
                c +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (g.P[e] = { R: g.DI(d) }));
    } else
      console.warn(
        "Block definition #" + c + " in JSON array is " + d + ". Skipping."
      );
  }
};
g.ya = function (a, c, d, e, f, h) {
  function k(y) {
    var D = !f;
    y = g.Touch.zK(y);
    for (var S = 0, qa; (qa = y[S]); S++)
      if (!D || g.Touch.Fx(qa))
        g.Touch.qK(qa), d ? e.call(d, qa) : e(qa), (l = !0);
  }
  var l = !1,
    m = [];
  if (g.g.global.PointerEvent && c in g.Touch.vg)
    for (var n = 0, p; (p = g.Touch.vg[c][n]); n++)
      a.addEventListener(p, k, !1), m.push([a, p, k]);
  else if ((a.addEventListener(c, k, !1), m.push([a, c, k]), c in g.Touch.vg)) {
    var r = function (y) {
      k(y);
      var D = !h;
      l && D && y.preventDefault();
    };
    for (n = 0; (p = g.Touch.vg[c][n]); n++)
      a.addEventListener(p, r, !1), m.push([a, p, r]);
  }
  return m;
};
g.Rd = function (a, c, d, e) {
  function f(n) {
    d ? e.call(d, n) : e(n);
  }
  var h = [];
  if (g.g.global.PointerEvent && c in g.Touch.vg)
    for (var k = 0, l; (l = g.Touch.vg[c][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f]);
  else if ((a.addEventListener(c, f, !1), h.push([a, c, f]), c in g.Touch.vg)) {
    var m = function (n) {
      if (n.changedTouches && 1 == n.changedTouches.length) {
        var p = n.changedTouches[0];
        n.clientX = p.clientX;
        n.clientY = p.clientY;
      }
      f(n);
      n.preventDefault();
    };
    for (k = 0; (l = g.Touch.vg[c][k]); k++)
      a.addEventListener(l, m, !1), h.push([a, l, m]);
  }
  return h;
};
g.Qa = function (a) {
  for (; a.length; ) {
    var c = a.pop();
    c[0].removeEventListener(c[1], c[2], !1);
  }
};
g.hj = function (a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
g.qI = function (a) {
  return g.g.Cb.OB(a);
};
g.MG = function () {
  g.yd("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  g.yd("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  g.yd("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  g.yd("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  g.yd("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  g.yd("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  g.yd("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  g.yd("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  g.yd("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  g.yd("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  g.yd("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  g.yd("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  g.yd("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  g.yd("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  g.yd("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  g.yd("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
g.yd = function (a, c, d) {
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
g.hO = function (a) {
  g.ks = a;
};
g.g.D = {};
g.g.D.Va = function (a, c) {
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
g.m.ph = function () {
  this.sg = 0;
  this.aG = 3;
  this.gf = 5;
  this.dz = 8;
  this.Id = 10;
  this.Gz = this.gf;
  this.yn = 15;
  this.Ll = 5;
  this.yq = 8;
  this.LF = 15;
  this.Gt = 4;
  this.EF = 12;
  this.pE = 16;
  this.oE = this.Ay = this.yn;
  this.Lb = 8;
  this.fG = this.pn = 15;
  this.Dz = 0;
  this.Fz = 20;
  this.MD = 4;
  this.kG = this.gf;
  this.lG = this.Id;
  this.QD = this.gf;
  this.PD = this.Id;
  this.Lp = !1;
  this.dG = 15;
  this.eG = 100;
  this.cG = 15;
  this.ln = 24;
  this.rE = 14.5;
  this.qE = this.yn + 11;
  this.xE = 2;
  this.sE = this.ln;
  this.Cz = g.g.D.moveBy(0, 0);
  this.fF = 12;
  this.gF = 6;
  this.Ai = 11;
  this.Bi = "normal";
  this.zi = "sans-serif";
  this.Gy = this.hq = -1;
  this.gq = 4;
  this.Ey = 16;
  this.ol = 5;
  this.Dy = "#fff";
  this.st = !g.g.userAgent.df && !g.g.userAgent.Oj;
  this.Fy = this.Ey;
  this.GE = this.FE = this.rt = !1;
  this.IE = this.ol;
  this.cn = 12;
  this.HE =
    "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
  this.JE = !1;
  this.EE = this.ol - 3;
  this.Yo = String(Math.random()).substring(2);
  this.kr = "";
  this.rv = null;
  this.VA = "";
  this.Tn = this.Ru = this.av = null;
  this.Zp = "#cc0a0a";
  this.pq = "#4286f4";
  this.aq = 100;
  this.Yz = 5;
  this.$p = 10;
  this.bE = 2;
  this.dE = 4;
  this.Ly = !1;
  this.xt = "#000000";
  this.mq = 0.2;
  this.Az = { WF: 1, Al: 2 };
};
b = g.m.ph.prototype;
b.R = function () {
  this.wl = this.rw();
  this.Al = this.sw();
  this.Hl = this.uw();
  this.Ot = this.tw();
  var a = this.Lb,
    c = g.g.D.arc("a", "0 0,0", a, g.g.D.Va(-a, a)),
    d = g.g.D.arc("a", "0 0,0", a, g.g.D.Va(a, a));
  this.nq = { width: a, height: a, Zw: c, os: d };
  a = this.Lb;
  c = g.g.D.moveBy(0, a) + g.g.D.arc("a", "0 0,1", a, g.g.D.Va(a, -a));
  d = g.g.D.arc("a", "0 0,1", a, g.g.D.Va(a, a));
  var e = g.g.D.arc("a", "0 0,1", a, g.g.D.Va(-a, -a)),
    f = g.g.D.arc("a", "0 0,1", a, g.g.D.Va(-a, a));
  this.un = { Ox: c, KK: d, GG: f, uu: e, lK: a };
};
b.mp = function (a) {
  this.Mi = {};
  var c = a.Mi,
    d;
  for (d in c) this.Mi[d] = kd(c[d]);
  this.zi =
    a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.zi;
  this.Bi =
    a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.Bi;
  this.Ai =
    a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.Ai;
  c = g.g.o.hC("Hg", this.Ai + "pt", this.Bi, this.zi);
  this.hq = c.height;
  this.Gy = c.lf;
  this.Zp = xa(a, "cursorColour") || this.Zp;
  this.pq = xa(a, "markerColour") || this.pq;
  this.xt = xa(a, "insertionMarkerColour") || this.xt;
  this.mq = Number(xa(a, "insertionMarkerOpacity")) || this.mq;
  this.Lp = null != a.Ix ? a.Ix : this.Lp;
};
function Mc(a, c) {
  var d = "auto_" + c;
  a.Mi[d] || (a.Mi[d] = kd({ colourPrimary: c }));
  return { style: a.Mi[d], name: d };
}
function Jc(a, c) {
  return (
    a.Mi[c || ""] ||
    (c && 0 == c.indexOf("auto_")
      ? Mc(a, c.substring(5)).style
      : kd({ colourPrimary: "#000000" }))
  );
}
function kd(a) {
  var c = {};
  a && g.g.object.Re(c, a);
  a = g.g.ls(c.colourPrimary || "#000");
  c.Pi = a.uo;
  c.colourSecondary
    ? (a = g.g.ls(c.colourSecondary).uo)
    : ((a = c.Pi), (a = g.g.Cb.qu("#fff", a, 0.6) || a));
  c.Vq = a;
  c.colourTertiary
    ? (a = g.g.ls(c.colourTertiary).uo)
    : ((a = c.Pi), (a = g.g.Cb.qu("#fff", a, 0.3) || a));
  c.Jh = a;
  c.Sg = c.hat || "";
  return c;
}
b.I = function () {
  this.rv && g.g.o.removeNode(this.rv);
  this.av && g.g.o.removeNode(this.av);
  this.Ru && g.g.o.removeNode(this.Ru);
  this.Tn = null;
};
b.rw = function () {
  var a = this.fF,
    c = this.gF,
    d = g.g.D.line([
      g.g.D.Va(c, a / 4),
      g.g.D.Va(2 * -c, a / 2),
      g.g.D.Va(c, a / 4),
    ]);
  return { height: a, width: c, path: d };
};
b.uw = function () {
  var a = this.dG,
    c = this.eG,
    d = g.g.D.curve("c", [g.g.D.Va(30, -a), g.g.D.Va(70, -a), g.g.D.Va(c, 0)]);
  return { height: a, width: c, path: d };
};
b.tw = function () {
  function a(h) {
    h = h ? -1 : 1;
    var k = -h,
      l = d / 2,
      m = g.g.D.Va(c, h * l);
    return (
      g.g.D.curve("c", [
        g.g.D.Va(0, h * (l + 2.5)),
        g.g.D.Va(-c, k * (l + 0.5)),
        g.g.D.Va(-c, h * l),
      ]) + g.g.D.curve("s", [g.g.D.Va(c, 2.5 * k), m])
    );
  }
  var c = this.yq,
    d = this.yn,
    e = a(!0),
    f = a(!1);
  return { type: this.Az.WF, width: c, height: d, Hf: f, To: e };
};
b.sw = function () {
  function a(k) {
    return g.g.D.line([
      g.g.D.Va(k * e, d),
      g.g.D.Va(3 * k, 0),
      g.g.D.Va(k * e, -d),
    ]);
  }
  var c = this.LF,
    d = this.Gt,
    e = (c - 3) / 2,
    f = a(1),
    h = a(-1);
  return { type: this.Az.Al, width: c, height: d, rj: f, IC: h };
};
function Fb(a, c) {
  switch (c.type) {
    case g.jb:
    case g.Tf:
      return a.Ot;
    case g.Uf:
    case g.zb:
      return a.Al;
    default:
      throw Error("Unknown connection type");
  }
}
b.Ya = function (a, c, d) {
  d = this.Dv(d);
  c = "blockly-renderer-style-" + c;
  this.Tn = document.getElementById(c);
  var e = d.join("\n");
  this.Tn
    ? (this.Tn.firstChild.textContent = e)
    : ((d = document.createElement("style")),
      (d.id = c),
      (c = document.createTextNode(e)),
      d.appendChild(c),
      document.head.insertBefore(d, document.head.firstChild),
      (this.Tn = d));
  a = g.g.o.M(g.g.G.vy, {}, a);
  c = g.g.o.M(g.g.G.Hy, { id: "blocklyEmbossFilter" + this.Yo }, a);
  g.g.o.M(g.g.G.BE, { in: "SourceAlpha", stdDeviation: 1, result: "blur" }, c);
  d = g.g.o.M(
    g.g.G.DE,
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
  g.g.o.M(g.g.G.CE, { x: -5e3, y: -1e4, z: 2e4 }, d);
  g.g.o.M(
    g.g.G.qt,
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    c
  );
  g.g.o.M(
    g.g.G.qt,
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
  this.kr = c.id;
  this.rv = c;
  c = g.g.o.M(
    g.g.G.nz,
    {
      id: "blocklyDisabledPattern" + this.Yo,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10,
    },
    a
  );
  g.g.o.M(g.g.G.Dc, { width: 10, height: 10, fill: "#aaa" }, c);
  g.g.o.M(g.g.G.ne, { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, c);
  this.VA = c.id;
  this.av = c;
  g.m.By &&
    ((a = g.g.o.M(
      g.g.G.Hy,
      {
        id: "blocklyDebugFilter" + this.Yo,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%",
      },
      a
    )),
    (c = g.g.o.M(g.g.G.yE, { result: "outBlur" }, a)),
    g.g.o.M(
      g.g.G.AE,
      { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" },
      c
    ),
    g.g.o.M(
      g.g.G.zE,
      { "flood-color": "#ff0000", "flood-opacity": 0.5, result: "outColor" },
      a
    ),
    g.g.o.M(
      g.g.G.qt,
      { in: "outColor", in2: "outBlur", operator: "in", result: "outGlow" },
      a
    ),
    (this.Ru = a));
};
b.Dv = function (a) {
  return [
    a + " .blocklyText, ",
    a + " .blocklyFlyoutLabelText {",
    "font: " + this.Bi + " " + this.Ai + "pt " + this.zi + ";",
    "}",
    a + " .blocklyText {",
    "fill: #fff;",
    "}",
    a + " .blocklyNonEditableText>rect,",
    a + " .blocklyEditableText>rect {",
    "fill: " + this.Dy + ";",
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
    "font-family: " + this.zi + ";",
    "font-weight: " + this.Bi + ";",
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
    "fill-opacity: " + this.mq + ";",
    "stroke: none;",
    "}",
  ];
};
g.h.sh = function (a, c, d, e) {
  var f = a ? a.u.id : void 0;
  e && e.mb() == g.F.types.Vc && (f = e.Ea.id);
  g.h.sh.A.constructor.call(this, f);
  this.lb = a ? a.id : null;
  this.vC = d;
  this.pC = e;
  this.Vg = c;
};
g.g.object.W(g.h.sh, g.h.Fe);
g.h.sh.prototype.type = g.h.az;
g.h.sh.prototype.wa = function () {
  var a = g.h.sh.A.wa.call(this);
  a.isCursor = this.Vg;
  a.blockId = this.lb;
  a.oldNode = this.vC;
  a.newNode = this.pC;
  return a;
};
g.h.sh.prototype.la = function (a) {
  g.h.sh.A.la.call(this, a);
  this.Vg = a.isCursor;
  this.lb = a.blockId;
  this.vC = a.oldNode;
  this.pC = a.newNode;
};
g.C.register(g.C.aa.fc, g.h.az, g.h.sh);
g.m.uh = function (a, c, d) {
  this.s = a;
  this.xw = d;
  this.di = null;
  this.B = c;
  this.cm = null;
  a = this.Vg() ? this.B.Zp : this.B.pq;
  this.hd = d.Cb || a;
};
g.m.uh.cE = "blocklyCursor";
g.m.uh.AF = "blocklyMarker";
g.m.uh.UE = 0.75;
b = g.m.uh.prototype;
b.Na = function () {
  return this.N;
};
b.Xd = function () {
  return this.xw;
};
b.Vg = function () {
  return "cursor" == this.xw.type;
};
b.Ya = function () {
  var a = this.Vg() ? g.m.uh.cE : g.m.uh.AF;
  this.N = g.g.o.M(g.g.G.xc, { class: a }, null);
  this.ai = g.g.o.M(g.g.G.xc, { width: this.B.aq, height: this.B.Yz }, this.N);
  this.lj = g.g.o.M(
    g.g.G.Dc,
    { width: this.B.aq, height: this.B.Yz, style: "display: none" },
    this.ai
  );
  this.Jk = g.g.o.M(
    g.g.G.Dc,
    { class: "blocklyVerticalMarker", rx: 10, ry: 10, style: "display: none" },
    this.ai
  );
  this.Ik = g.g.o.M(
    g.g.G.ne,
    { transform: "", style: "display: none" },
    this.ai
  );
  this.$h = g.g.o.M(
    g.g.G.ne,
    {
      transform: "",
      style: "display: none",
      fill: "none",
      "stroke-width": this.B.dE,
    },
    this.ai
  );
  this.Vg() &&
    ((a = {
      attributeType: "XML",
      attributeName: "fill",
      dur: "1s",
      values: this.hd + ";transparent;transparent;",
      repeatCount: "indefinite",
    }),
    g.g.o.M(g.g.G.Vs, a, this.lj),
    g.g.o.M(g.g.G.Vs, a, this.Ik),
    (a.attributeName = "stroke"),
    g.g.o.M(g.g.G.Vs, a, this.$h));
  return this.N;
};
function ld(a, c) {
  a.Vg()
    ? (a.di && a.di.ii(null), c.ii(a.Na()))
    : (a.di && a.di.ki(null), c.ki(a.Na()));
  a.di = c;
}
b.draw = function (a, c) {
  if (c) {
    this.B = this.s.Kb.ka();
    var d = this.Vg() ? this.B.Zp : this.B.pq;
    this.hd = this.xw.Cb || d;
    this.lj.setAttribute("fill", this.hd);
    this.Jk.setAttribute("stroke", this.hd);
    this.Ik.setAttribute("fill", this.hd);
    this.$h.setAttribute("stroke", this.hd);
    this.Vg() &&
      ((d = this.hd + ";transparent;transparent;"),
      this.lj.firstChild.setAttribute("values", d),
      this.Ik.firstChild.setAttribute("values", d),
      this.$h.firstChild.setAttribute("values", d));
    d = c.Ea;
    if (c.mb() == g.F.types.lc) md(this, c);
    else if (c.mb() == g.F.types.Uj) md(this, c);
    else if (d.type == g.jb) {
      var e = c.Ea;
      d = e.Y();
      var f = e.Pk.x,
        h = e.Pk.y;
      e = g.g.D.moveTo(0, 0) + Fb(this.B, e).Hf;
      this.Ik.setAttribute("d", e);
      this.Ik.setAttribute(
        "transform",
        "translate(" + f + "," + h + ")" + (this.s.L ? " scale(-1 1)" : "")
      );
      this.cm = this.Ik;
      ld(this, d);
      nd(this);
    } else if (d.type == g.zb)
      (h = c.Ea),
        (d = h.Y()),
        (f = 0),
        (h = h.Pk.y),
        (e = I(d).width),
        this.s.L && (f = -e),
        od(this, f, h, e),
        ld(this, d),
        nd(this);
    else if (c.mb() == g.F.types.Md) md(this, c);
    else if (c.mb() == g.F.types.Cc)
      (d = c.Ea),
        (f = d.Sh().width),
        (h = d.Sh().height),
        pd(this, 0, 0, f, h),
        ld(this, d),
        nd(this);
    else if (c.mb() == g.F.types.Vc)
      (f = c.Rs),
        (d = f.x),
        (f = f.y),
        this.s.L && (d -= this.B.aq),
        od(this, d, f, this.B.aq),
        ld(this, this.s),
        nd(this);
    else if (c.mb() == g.F.types.tg) {
      d = c.Ea;
      h = I(d);
      f = h.width + this.B.$p;
      h = h.height + this.B.$p;
      var k = (e = -this.B.$p / 2),
        l = -this.B.$p / 2;
      this.s.L && (k = -(f + e));
      pd(this, k, l, f, h);
      ld(this, d);
      nd(this);
    }
    d = c.Y();
    a = new g.h.sh(d, this.Vg(), a, c);
    g.h.Ga(a);
    a = this.cm.childNodes[0];
    void 0 !== a && a.beginElement && a.beginElement();
  } else this.Ka();
};
function md(a, c) {
  c = c.Y();
  var d = c.width,
    e = c.height,
    f = e * g.m.uh.UE,
    h = a.B.bE;
  if (c.ba) {
    var k = Fb(a.B, c.ba);
    e = k;
    d =
      g.g.D.moveBy(-h, f) +
      g.g.D.oa("V", -h) +
      g.g.D.oa("H", a.B.pn) +
      e.rj +
      g.g.D.oa("H", d + 2 * h) +
      g.g.D.oa("V", f);
    a.$h.setAttribute("d", d);
  } else
    c.O
      ? ((f = k = Fb(a.B, c.O)),
        (d =
          g.g.D.moveBy(d, 0) +
          g.g.D.oa("h", -(d - f.width)) +
          g.g.D.oa("v", a.B.Ll) +
          f.Hf +
          g.g.D.oa("V", e) +
          g.g.D.oa("H", d)),
        a.$h.setAttribute("d", d))
      : ((d =
          g.g.D.moveBy(-h, f) +
          g.g.D.oa("V", -h) +
          g.g.D.oa("H", d + 2 * h) +
          g.g.D.oa("V", f)),
        a.$h.setAttribute("d", d));
  a.s.L && a.$h.setAttribute("transform", "scale(-1 1)");
  a.cm = a.$h;
  ld(a, c);
  nd(a);
}
function nd(a) {
  a.Ka();
  a.cm.style.display = "";
}
function od(a, c, d, e) {
  a.lj.setAttribute("x", c);
  a.lj.setAttribute("y", d);
  a.lj.setAttribute("width", e);
  a.cm = a.lj;
}
function pd(a, c, d, e, f) {
  a.Jk.setAttribute("x", c);
  a.Jk.setAttribute("y", d);
  a.Jk.setAttribute("width", e);
  a.Jk.setAttribute("height", f);
  a.cm = a.Jk;
}
b.Ka = function () {
  this.lj.style.display = "none";
  this.Jk.style.display = "none";
  this.Ik.style.display = "none";
  this.$h.style.display = "none";
};
b.I = function () {
  this.N && g.g.o.removeNode(this.N);
};
g.m.v = {
  NONE: 0,
  Cc: 1,
  My: 2,
  Qy: 4,
  Vt: 8,
  gy: 16,
  Vy: 32,
  Cy: 64,
  ef: 128,
  Ry: 256,
  Ez: 512,
  ZD: 1024,
  Nt: 2048,
  Ft: 4096,
  PF: 8192,
  jt: 16384,
  At: 32768,
  zt: 65536,
  St: 131072,
  Rt: 262144,
  Zy: 524288,
  Tt: 1048576,
  au: 2097152,
  $s: 4194304,
  Sy: 8388608,
};
g.m.v.aM = g.m.v.At | g.m.v.zt;
g.m.v.iN = g.m.v.St | g.m.v.Rt;
g.m.v.Hw = 16777216;
g.m.v.mb = function () {
  Object.prototype.hasOwnProperty.call(g.m.v, void 0) ||
    ((g.m.v[void 0] = g.m.v.Hw), (g.m.v.Hw <<= 1));
  return g.m.v[void 0];
};
g.m.v.Xh = function (a) {
  return a.type & g.m.v.Cc;
};
g.m.v.Ek = function (a) {
  return a.type & g.m.v.My;
};
g.m.v.rm = function (a) {
  return a.type & g.m.v.Qy;
};
g.m.v.Cf = function (a) {
  return a.type & g.m.v.Vt;
};
g.m.v.TN = function (a) {
  return a.type & g.m.v.Vy;
};
g.m.v.ej = function (a) {
  return a.type & g.m.v.ef;
};
g.m.v.Do = function (a) {
  return a.type & g.m.v.Cy;
};
g.m.v.dj = function (a) {
  return a.type & g.m.v.Ry;
};
g.m.v.Gk = function (a) {
  return a.type & g.m.v.Ez;
};
g.m.v.wm = function (a) {
  return a.type & g.m.v.Nt;
};
g.m.v.gj = function (a) {
  return a.type & g.m.v.Ft;
};
g.m.v.BI = function (a) {
  return a.type & (g.m.v.Nt | g.m.v.Ft);
};
g.m.v.fj = function (a) {
  return a.type & g.m.v.zt;
};
g.m.v.WB = function (a) {
  return a.type & g.m.v.Rt;
};
g.m.v.Eo = function (a) {
  return a.type & g.m.v.At;
};
g.m.v.UN = function (a) {
  return a.type & g.m.v.St;
};
g.m.v.SN = function (a) {
  return a.type & g.m.v.jt;
};
g.m.v.UB = function (a) {
  return a.type & g.m.v.Zy;
};
g.m.v.WN = function (a) {
  return a.type & g.m.v.Tt;
};
g.m.v.QN = function (a) {
  return a.type & g.m.v.gy;
};
g.m.v.Kr = function (a) {
  return a.type & g.m.v.au;
};
g.m.v.Er = function (a) {
  return a.type & g.m.v.$s;
};
g.m.v.CI = function (a) {
  return a.type & (g.m.v.au | g.m.v.$s);
};
g.m.v.xI = function (a) {
  return a.type & g.m.v.Sy;
};
g.m.Ei = function (a) {
  this.height = this.width = 0;
  this.type = g.m.v.NONE;
  this.Wl = this.Wa = 0;
  this.B = a;
  this.Ff = this.B.pn;
};
g.m.Ba = function (a, c) {
  g.m.Ba.A.constructor.call(this, a);
  this.Sd = c;
  this.shape = Fb(this.B, c);
  this.Dk = !!this.shape.isDynamic;
  this.type |= g.m.v.ZD;
};
g.g.object.W(g.m.Ba, g.m.Ei);
g.m.Mt = function (a, c) {
  g.m.Mt.A.constructor.call(this, a, c);
  this.type |= g.m.v.PF;
  this.height = this.Dk ? 0 : this.shape.height;
  this.Lf = this.width = this.Dk ? 0 : this.shape.width;
  this.Je = this.B.Ll;
  this.On = 0;
};
g.g.object.W(g.m.Mt, g.m.Ba);
g.m.Pt = function (a, c) {
  g.m.Pt.A.constructor.call(this, a, c);
  this.type |= g.m.v.Nt;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.W(g.m.Pt, g.m.Ba);
g.m.Ht = function (a, c) {
  g.m.Ht.A.constructor.call(this, a, c);
  this.type |= g.m.v.Ft;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.W(g.m.Ht, g.m.Ba);
g.m.gn = function (a, c) {
  g.m.gn.A.constructor.call(this, a, c.connection);
  this.type |= g.m.v.ef;
  this.input = c;
  this.align = c.align;
  (this.Qi = c.connection && c.connection.ra() ? c.connection.ra() : null)
    ? ((a = I(this.Qi)), (this.Mn = a.width), (this.Xq = a.height))
    : (this.Xq = this.Mn = 0);
  this.Je = this.On = 0;
};
g.g.object.W(g.m.gn, g.m.Ba);
g.m.Ci = function (a, c) {
  g.m.Ci.A.constructor.call(this, a, c);
  this.type |= g.m.v.Ry;
  this.Qi
    ? ((this.width = this.Mn), (this.height = this.Xq))
    : ((this.height = this.B.qE), (this.width = this.B.rE));
  this.Yl = this.Dk ? this.shape.height(this.height) : this.shape.height;
  this.Cg = this.Dk ? this.shape.width(this.height) : this.shape.width;
  this.Qi || (this.width += this.Cg * (this.Dk ? 2 : 1));
  this.Je = this.Dk ? this.shape.Je(this.Yl) : this.B.Ll;
  this.On = this.Dk ? this.shape.On(this.Cg) : 0;
};
g.g.object.W(g.m.Ci, g.m.gn);
g.m.Ji = function (a, c) {
  g.m.Ji.A.constructor.call(this, a, c);
  this.type |= g.m.v.Ez;
  this.height = this.Qi ? this.Xq + this.B.Dz : this.B.sE;
  this.width = this.B.fG + this.shape.width;
};
g.g.object.W(g.m.Ji, g.m.gn);
g.m.fq = function (a, c) {
  g.m.fq.A.constructor.call(this, a, c);
  this.type |= g.m.v.Cy;
  this.height = this.Qi ? this.Xq - this.B.Ll - this.B.gf : this.shape.height;
  this.width = this.shape.width + this.B.xE;
  this.Je = this.B.Ll;
  this.Yl = this.shape.height;
  this.Cg = this.shape.width;
};
g.g.object.W(g.m.fq, g.m.gn);
g.m.me = function (a, c) {
  g.m.me.A.constructor.call(this, a);
  this.icon = c;
  this.isVisible = c.isVisible();
  this.type |= g.m.v.Qy;
  a = new g.g.hf(g.me.prototype.vq, g.me.prototype.vq - 2);
  this.height = a.height;
  this.width = a.width;
};
g.g.object.W(g.m.me, g.m.Ei);
g.m.yt = function (a) {
  g.m.yt.A.constructor.call(this, a);
  this.type |= g.m.v.Zy;
  this.height = this.B.wl.height;
  this.width = this.B.wl.width;
};
g.g.object.W(g.m.yt, g.m.Ei);
g.m.Be = function (a, c) {
  g.m.Be.A.constructor.call(this, a);
  this.bB = c;
  this.ee = c.cq;
  this.GH = !1;
  this.type |= g.m.v.Cc;
  a = this.bB.Sh();
  this.height = a.height;
  this.width = a.width;
};
g.g.object.W(g.m.Be, g.m.Ei);
g.m.tt = function (a) {
  g.m.tt.A.constructor.call(this, a);
  this.type |= g.m.v.My;
  this.height = this.B.Hl.height;
  this.width = this.B.Hl.width;
  this.Sl = this.height;
};
g.g.object.W(g.m.tt, g.m.Ei);
g.m.Kl = function (a, c) {
  g.m.Kl.A.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.v.St : g.m.v.At) | g.m.v.jt;
  this.width = this.height = this.B.sg;
};
g.g.object.W(g.m.Kl, g.m.Ei);
g.m.uq = function (a, c) {
  g.m.uq.A.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.v.Rt : g.m.v.zt) | g.m.v.jt;
  this.width = this.B.Lb;
  this.height = this.B.Lb / 2;
};
g.g.object.W(g.m.uq, g.m.Ei);
g.m.rh = function (a, c) {
  g.m.rh.A.constructor.call(this, a);
  this.type = this.type | g.m.v.Vt | g.m.v.Vy;
  this.width = c;
  this.height = this.B.cG;
};
g.g.object.W(g.m.rh, g.m.Ei);
g.m.Vj = function (a) {
  this.type = g.m.v.Tt;
  this.elements = [];
  this.Wa = this.Tc = this.mg = this.minWidth = this.minHeight = this.width = this.height = 0;
  this.GB = this.nm = this.Rv = this.Ec = this.Yi = !1;
  this.B = a;
  this.Ff = this.B.pn;
  this.align = null;
};
g.m.Vj.prototype.measure = function () {
  throw Error("Unexpected attempt to measure a base Row.");
};
function qd(a) {
  for (var c = a.elements.length - 1, d; (d = a.elements[c]); c--)
    if (g.m.v.ej(d)) return d;
  return null;
}
g.m.Vj.prototype.Gs = function () {
  return !0;
};
g.m.Vj.prototype.Yn = function () {
  return !0;
};
g.m.Zj = function (a) {
  g.m.Zj.A.constructor.call(this, a);
  this.type |= g.m.v.au;
  this.Sl = this.Hh = 0;
  this.nI = !1;
  this.connection = null;
};
g.g.object.W(g.m.Zj, g.m.Vj);
g.m.Zj.prototype.Sv = function (a) {
  var c = (a.Sg ? "cap" === a.Sg : this.B.Lp) && !a.O && !a.ba,
    d = a.ba && a.ba.ra();
  return !!a.O || c || (d ? t(d) == a : !1);
};
g.m.Zj.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.v.Cf(f) ||
        (g.m.v.Ek(f) ? (d = Math.max(d, f.Sl)) : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Hh = this.Sl = d;
  this.mg = this.width;
};
g.m.Zj.prototype.Gs = function () {
  return !1;
};
g.m.Zj.prototype.Yn = function () {
  return !1;
};
g.m.Kj = function (a) {
  g.m.Kj.A.constructor.call(this, a);
  this.type |= g.m.v.$s;
  this.HB = !1;
  this.connection = null;
  this.lf = this.Vn = 0;
};
g.g.object.W(g.m.Kj, g.m.Vj);
g.m.Kj.prototype.Sv = function (a) {
  return !!a.O || !!t(a);
};
g.m.Kj.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.v.Cf(f) ||
        (g.m.v.gj(f)
          ? (d = Math.max(d, f.height))
          : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Vn = d;
  this.mg = this.width;
};
g.m.Kj.prototype.Gs = function () {
  return !1;
};
g.m.Kj.prototype.Yn = function () {
  return !1;
};
g.m.xq = function (a, c, d) {
  g.m.xq.A.constructor.call(this, a);
  this.type = this.type | g.m.v.Vt | g.m.v.gy;
  this.width = d;
  this.height = c;
  this.hB = !1;
  this.mg = 0;
  this.elements = [new g.m.rh(this.B, d)];
};
g.g.object.W(g.m.xq, g.m.Vj);
g.m.xq.prototype.measure = function () {};
g.m.vl = function (a) {
  g.m.vl.A.constructor.call(this, a);
  this.type |= g.m.v.Sy;
  this.yA = 0;
};
g.g.object.W(g.m.vl, g.m.Vj);
g.m.vl.prototype.measure = function () {
  this.width = this.minWidth;
  this.height = this.minHeight;
  for (var a = 0, c = 0, d; (d = this.elements[c]); c++)
    (this.width += d.width),
      g.m.v.ej(d) &&
        (g.m.v.Gk(d)
          ? (a += d.Mn)
          : g.m.v.Do(d) && 0 != d.Mn && (a += d.Mn - d.Cg)),
      g.m.v.Cf(d) || (this.height = Math.max(this.height, d.height));
  this.yA = a;
  this.mg = this.width + a;
};
g.m.vl.prototype.Yn = function () {
  return !this.Yi && !this.Ec;
};
g.m.Vf = function (a, c) {
  this.S = c;
  this.Kb = a;
  this.B = this.Kb.ka();
  this.O = c.O ? new g.m.Mt(this.B, c.O) : null;
  this.sm = xb(c) && !c.isCollapsed();
  this.isCollapsed = c.isCollapsed();
  this.we = c.we();
  this.L = c.L;
  this.Cj = this.width = this.Sm = this.height = 0;
  this.rows = [];
  this.QB = [];
  this.LB = [];
  this.Bc = new g.m.Zj(this.B);
  this.Sb = new g.m.Kj(this.B);
  this.Fs = this.Lf = 0;
};
b = g.m.Vf.prototype;
b.measure = function () {
  var a = !!this.S.ba,
    c = (this.S.Sg ? "cap" === this.S.Sg : this.B.Lp) && !this.O && !a;
  this.Bc.Sv(this.S)
    ? this.Bc.elements.push(new g.m.Kl(this.B))
    : this.Bc.elements.push(new g.m.uq(this.B));
  c
    ? ((a = new g.m.tt(this.B)), this.Bc.elements.push(a), (this.Bc.Hh = a.Sl))
    : a &&
      ((this.Bc.nI = !0),
      (this.Bc.connection = new g.m.Pt(this.B, this.S.ba)),
      this.Bc.elements.push(this.Bc.connection));
  this.S.U.length && this.S.U[0].type == g.zb && !this.S.isCollapsed()
    ? (this.Bc.minHeight = this.B.lG)
    : (this.Bc.minHeight = this.B.kG);
  this.Bc.elements.push(new g.m.Kl(this.B, "right"));
  this.rows.push(this.Bc);
  a = new g.m.vl(this.B);
  this.QB.push(a);
  var d = Gb(this.S);
  if (d.length) {
    c = 0;
    for (var e; (e = d[c]); c++) {
      var f = new g.m.me(this.B, e);
      this.isCollapsed && e.uA ? this.LB.push(f) : a.elements.push(f);
    }
  }
  e = null;
  for (c = 0; (d = this.S.U[c]); c++)
    if (d.isVisible()) {
      !e ||
        (d.type != g.zb &&
          e.type != g.zb &&
          ((d.type != g.jb && d.type != g.qh) || this.sm)) ||
        (this.rows.push(a), (a = new g.m.vl(this.B)), this.QB.push(a));
      for (e = 0; (f = d.gb[e]); e++) a.elements.push(new g.m.Be(this.B, f, d));
      this.gA(d, a);
      e = d;
    }
  this.isCollapsed && ((a.GB = !0), a.elements.push(new g.m.yt(this.B)));
  (a.elements.length || a.nm) && this.rows.push(a);
  this.ex();
  this.rows.push(this.Sb);
  this.fA();
  a = this.rows;
  this.rows = [];
  for (c = 0; c < a.length; c++)
    if ((this.rows.push(a[c]), c != a.length - 1)) {
      d = this.rows;
      e = d.push;
      f = a[c];
      var h = a[c + 1],
        k = new g.m.xq(this.B, this.xB(f, h), this.width - this.Lf);
      f.Ec && (k.hB = !0);
      h.Ec && (k.aO = !0);
      e.call(d, k);
    }
  for (e = d = c = a = 0; (f = this.rows[e]); e++)
    f.measure(),
      (c = Math.max(c, f.width)),
      f.Ec && (a = Math.max(a, f.width - qd(f).width)),
      (d = Math.max(d, f.mg));
  this.Cj = a;
  this.width = c;
  for (e = 0; (f = this.rows[e]); e++) f.Ec && (f.Cj = this.Cj);
  this.Sm = Math.max(c, d);
  this.O &&
    ((this.Lf = this.O.width),
    (this.width += this.O.width),
    (this.Sm += this.O.width));
  this.ku();
  this.cB();
};
b.ex = function () {
  this.Sb.HB = !!this.S.Z;
  this.Sb.minHeight =
    this.S.U.length && this.S.U[this.S.U.length - 1].type == g.zb
      ? this.B.PD
      : this.B.QD;
  this.Sb.Sv(this.S)
    ? this.Sb.elements.push(new g.m.Kl(this.B))
    : this.Sb.elements.push(new g.m.uq(this.B));
  this.Sb.HB &&
    ((this.Sb.connection = new g.m.Ht(this.B, this.S.Z)),
    this.Sb.elements.push(this.Sb.connection));
  this.Sb.elements.push(new g.m.Kl(this.B, "right"));
};
b.gA = function (a, c) {
  this.sm && a.type == g.jb
    ? (c.elements.push(new g.m.Ci(this.B, a)), (c.Rv = !0))
    : a.type == g.zb
    ? (c.elements.push(new g.m.Ji(this.B, a)), (c.Ec = !0))
    : a.type == g.jb
    ? (c.elements.push(new g.m.fq(this.B, a)), (c.Yi = !0))
    : a.type == g.qh &&
      ((c.minHeight = Math.max(
        c.minHeight,
        a.Y() && a.Y().Oa ? this.B.oE : this.B.Ay
      )),
      (c.nm = !0));
  null == c.align && (c.align = a.align);
};
b.fA = function () {
  for (var a = 0, c; (c = this.rows[a]); a++) {
    var d = c.elements;
    c.elements = [];
    c.Gs() && c.elements.push(new g.m.rh(this.B, this.lk(null, d[0])));
    if (d.length) {
      for (var e = 0; e < d.length - 1; e++)
        c.elements.push(d[e]),
          c.elements.push(new g.m.rh(this.B, this.lk(d[e], d[e + 1])));
      c.elements.push(d[d.length - 1]);
      c.Yn() &&
        c.elements.push(new g.m.rh(this.B, this.lk(d[d.length - 1], null)));
    }
  }
};
b.lk = function (a, c) {
  if (!a && c && g.m.v.Gk(c)) return this.B.Fz;
  if (a && g.m.v.ej(a) && !c) {
    if (g.m.v.Do(a)) return this.B.sg;
    if (g.m.v.dj(a)) return this.B.Id;
    if (g.m.v.Gk(a)) return this.B.sg;
  }
  return a && g.m.v.Eo(a) && c && (g.m.v.wm(c) || g.m.v.gj(c))
    ? c.Ff
    : a && g.m.v.fj(a) && c && (g.m.v.wm(c) || g.m.v.gj(c))
    ? c.Ff - this.B.Lb
    : this.B.gf;
};
b.ku = function () {
  for (var a = 0, c; (c = this.rows[a]); a++)
    if (c.Ec) rd(this, c);
    else {
      var d = this.mo(c) - c.width;
      0 < d && sd(c, d);
      g.m.v.CI(c) && (c.mg = c.width);
    }
};
b.mo = function () {
  return this.width - this.Lf;
};
function sd(a, c) {
  a: {
    var d = 0;
    for (var e; (e = a.elements[d]); d++)
      if (g.m.v.Cf(e)) {
        d = e;
        break a;
      }
    d = null;
  }
  a: {
    e = a.elements.length - 1;
    for (var f; (f = a.elements[e]); e--)
      if (g.m.v.Cf(f)) {
        e = f;
        break a;
      }
    e = null;
  }
  if (a.Yi || a.Ec) a.mg += c;
  a.align == g.Us
    ? (e.width += c)
    : a.align == g.Ts
    ? ((d.width += c / 2), (e.width += c / 2))
    : a.align == g.il
    ? (d.width += c)
    : (e.width += c);
  a.width += c;
}
function rd(a, c) {
  var d = qd(c),
    e = c.width - d.width,
    f = a.Cj;
  e = f - e;
  0 < e && sd(c, e);
  e = c.width;
  f = a.mo(c);
  d.width += f - e;
  d.height = Math.max(d.height, c.height);
  c.width += f - e;
  c.mg = Math.max(c.width, a.Cj + c.yA);
}
b.xB = function () {
  return this.B.gf;
};
b.oB = function (a, c) {
  return g.m.v.Cf(c)
    ? a.Tc + c.height / 2
    : g.m.v.Er(a)
    ? ((a = a.Tc + a.height - a.Vn),
      g.m.v.gj(c) ? a + c.height / 2 : a - c.height / 2)
    : g.m.v.Kr(a)
    ? g.m.v.Ek(c)
      ? a.Hh - c.height / 2
      : a.Hh + c.height / 2
    : a.Tc + a.height / 2;
};
function td(a, c) {
  for (var d = c.Wa, e = 0, f; (f = c.elements[e]); e++)
    g.m.v.Cf(f) && (f.height = c.height),
      (f.Wa = d),
      (f.Wl = a.oB(c, f)),
      (d += f.width);
}
b.cB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++)
    (e.Tc = c),
      (e.Wa = this.Lf),
      (c += e.height),
      (a = Math.max(a, e.mg)),
      td(this, e);
  this.O &&
    this.S.Z &&
    this.S.Z.isConnected() &&
    (a = Math.max(a, I(this.S.Z.ra()).width));
  this.Sm = a + this.Lf;
  this.height = c;
  this.Fs = this.Bc.Hh;
  this.Sb.lf = c - this.Sb.Vn;
};
g.m.Fd = function (a, c) {
  this.S = a;
  this.Da = c;
  a.Za();
  this.Dr = this.cb = "";
  this.B = c.Kb.ka();
};
b = g.m.Fd.prototype;
b.draw = function () {
  ud(this);
  vd(this);
  wd(this);
  this.S.Ob.yx(this.cb + "\n" + this.Dr);
  this.Da.L && this.S.Ob.xv();
  g.m.Hp && this.S.qx.xH(this.S, this.Da);
  xd(this);
};
function xd(a) {
  a.S.height = a.Da.height;
  a.S.width = a.Da.Sm;
}
function ud(a) {
  for (var c = 0, d; (d = a.Da.LB[c]); c++)
    d.icon.ce.setAttribute("display", "none");
}
function vd(a) {
  a.pv();
  for (var c = 1; c < a.Da.rows.length - 1; c++) {
    var d = a.Da.rows[c];
    d.GB ? a.Xn(d) : d.Ec ? a.ov(d) : d.Yi ? a.qv(d) : a.$A(d);
  }
  a.jv();
  a.nv();
}
b.pv = function () {
  var a = this.Da.Bc,
    c = a.elements,
    d = this.Da.Bc;
  if (d.connection) {
    var e = d.Wa + d.Ff;
    Cc(d.connection.Sd, this.Da.L ? -e : e, 0);
  }
  this.cb += g.g.D.moveBy(a.Wa, this.Da.Fs);
  for (d = 0; (e = c[d]); d++)
    g.m.v.fj(e)
      ? (this.cb += this.B.un.Ox)
      : g.m.v.WB(e)
      ? (this.cb += this.B.un.KK)
      : g.m.v.wm(e)
      ? (this.cb += e.shape.rj)
      : g.m.v.Ek(e)
      ? (this.cb += this.B.Hl.path)
      : g.m.v.Cf(e) && (this.cb += g.g.D.oa("h", e.width));
  this.cb += g.g.D.oa("v", a.height);
};
b.Xn = function (a) {
  this.cb += this.B.wl.path + g.g.D.oa("v", a.height - this.B.wl.height);
};
b.qv = function (a) {
  var c = qd(a);
  this.KC(a);
  var d = "function" == typeof c.shape.Hf ? c.shape.Hf(c.height) : c.shape.Hf;
  this.cb += g.g.D.oa("H", c.Wa + c.width) + d + g.g.D.oa("v", a.height - c.Yl);
};
b.ov = function (a) {
  var c = qd(a);
  this.cb +=
    g.g.D.oa("H", c.Wa + c.Ff + c.shape.width) +
    (c.shape.IC + g.g.D.oa("h", -(c.Ff - this.B.nq.width)) + this.B.nq.Zw) +
    g.g.D.oa("v", a.height - 2 * this.B.nq.height) +
    this.B.nq.os +
    g.g.D.oa("H", a.Wa + a.width);
  this.NC(a);
};
b.$A = function (a) {
  this.cb += g.g.D.oa("V", a.Tc + a.height);
};
b.jv = function () {
  var a = this.Da.Sb,
    c = a.elements;
  this.MC();
  for (var d = 0, e = "", f = c.length - 1, h; (h = c[f]); f--)
    g.m.v.gj(h)
      ? (e += h.shape.IC)
      : g.m.v.Eo(h)
      ? (e += g.g.D.oa("H", a.Wa))
      : g.m.v.fj(h)
      ? (e += this.B.un.uu)
      : g.m.v.WB(h)
      ? ((e += this.B.un.GG), (d = this.B.un.lK))
      : g.m.v.Cf(h) && (e += g.g.D.oa("h", -1 * h.width));
  this.cb += g.g.D.oa("V", a.lf - d);
  this.cb += e;
};
b.nv = function () {
  var a = this.Da.O;
  if (this.Da.O) {
    var c = this.Da.Lf + this.Da.O.On;
    Cc(this.S.O, this.Da.L ? -c : c, this.Da.O.Je);
  }
  a &&
    ((c = a.Je + a.height),
    (a = "function" == typeof a.shape.To ? a.shape.To(a.height) : a.shape.To),
    (this.cb += g.g.D.oa("V", c) + a));
  this.cb += "z";
};
function wd(a) {
  for (var c = 0, d; (d = a.Da.rows[c]); c++)
    for (var e = 0, f; (f = d.elements[e]); e++)
      if (g.m.v.dj(f)) a.mv(f);
      else if (g.m.v.rm(f) || g.m.v.Xh(f)) {
        var h = a;
        if (g.m.v.Xh(f)) var k = f.bB.Na();
        else g.m.v.rm(f) && (k = f.icon.ce);
        var l = f.Wl - f.height / 2,
          m = f.Wa,
          n = "";
        h.Da.L &&
          ((m = -(m + f.width)), f.GH && ((m += f.width), (n = "scale(-1 1)")));
        g.m.v.rm(f)
          ? (k.setAttribute("display", "block"),
            k.setAttribute("transform", "translate(" + m + "," + l + ")"),
            Xa(f.icon))
          : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        h.Da.we && k.setAttribute("display", "none");
      }
}
b.mv = function (a) {
  var c = a.width,
    d = a.height,
    e = a.Je,
    f = a.Yl + e;
  this.Dr +=
    g.g.D.moveTo(a.Wa + a.Cg, a.Wl - d / 2) +
    g.g.D.oa("v", e) +
    a.shape.Hf +
    g.g.D.oa("v", d - f) +
    g.g.D.oa("h", c - a.Cg) +
    g.g.D.oa("v", -d) +
    "z";
  this.LC(a);
};
b.LC = function (a) {
  var c = a.Wl - a.height / 2;
  if (a.Sd) {
    var d = a.Wa + a.Cg + a.On;
    this.Da.L && (d *= -1);
    Cc(a.Sd, d, c + a.Je);
  }
};
b.NC = function (a) {
  var c = qd(a);
  if (c.Sd) {
    var d = a.Wa + a.Cj + c.Ff;
    this.Da.L && (d *= -1);
    Cc(c.Sd, d, a.Tc);
  }
};
b.KC = function (a) {
  var c = qd(a);
  if (c.Sd) {
    var d = a.Wa + a.width;
    this.Da.L && (d *= -1);
    Cc(c.Sd, d, a.Tc);
  }
};
b.MC = function () {
  var a = this.Da.Sb;
  if (a.connection) {
    var c = a.connection,
      d = c.Wa;
    Cc(c.Sd, this.Da.L ? -d : d, a.lf);
  }
};
g.m.wh = function (a, c, d) {
  this.$l = d;
  this.ih = a;
  this.dc = g.g.o.M(g.g.G.ne, { class: "blocklyPath" }, this.ih);
  this.style = c;
  this.ww = this.Un = null;
};
b = g.m.wh.prototype;
b.yx = function (a) {
  this.dc.setAttribute("d", a);
};
b.xv = function () {
  this.dc.setAttribute("transform", "scale(-1 1)");
};
b.ii = function (a) {
  a ? (this.ih.appendChild(a), (this.Un = a)) : (this.Un = null);
};
b.ki = function (a) {
  a
    ? (this.Un ? this.ih.insertBefore(a, this.Un) : this.ih.appendChild(a),
      (this.ww = a))
    : (this.ww = null);
};
b.oc = function (a) {
  this.dc.setAttribute("stroke", this.style.Jh);
  this.dc.setAttribute("fill", this.style.Pi);
  this.uD(a.Oa);
  this.Rx(!a.isEnabled() || oc(a));
};
b.bc = function (a) {
  this.style = a;
};
function Eb(a, c, d) {
  d ? g.g.o.Fa(a.ih, c) : g.g.o.Vb(a.ih, c);
}
b.sD = function (a) {
  a
    ? this.dc.setAttribute("filter", "url(#" + this.$l.kr + ")")
    : this.dc.setAttribute("filter", "none");
};
b.uD = function (a) {
  a &&
    (this.dc.setAttribute("stroke", "none"),
    this.dc.setAttribute("fill", this.style.Vq));
};
b.Rx = function (a) {
  Eb(this, "blocklyDisabled", a);
  a && this.dc.setAttribute("fill", "url(#" + this.$l.VA + ")");
};
g.m.xh = function (a) {
  this.name = a;
  this.Vw = this.B = null;
};
b = g.m.xh.prototype;
b.dg = function () {
  return this.name + "-renderer";
};
b.R = function (a, c) {
  this.B = this.pw();
  c && ((this.Vw = c), g.g.object.Re(this.B, c));
  this.B.mp(a);
  this.B.R();
};
b.Ya = function (a, c) {
  this.B.Ya(a, this.name + "-" + c.name, "." + this.dg() + "." + c.dg());
};
b.kx = function (a, c) {
  var d = this.ka();
  d.I();
  this.B = this.pw();
  this.Vw && g.g.object.Re(this.B, this.Vw);
  this.B.Yo = d.Yo;
  this.B.mp(c);
  this.B.R();
  this.Ya(a, c);
};
b.I = function () {
  this.B && this.B.I();
};
b.pw = function () {
  return new g.m.ph();
};
b.fC = function (a) {
  return new g.m.Vf(this, a);
};
b.dC = function (a, c) {
  return new g.m.Fd(a, c);
};
b.eC = function (a, c) {
  return new g.m.wh(a, c, this.B);
};
b.ka = function () {
  return this.B;
};
b.Ha = function (a) {
  if (g.m.Hp && !a.qx) {
    if (!g.m.By)
      throw Error("Missing require for Blockly.blockRendering.Debug");
    var c = new g.m.By(this.ka());
    a.qx = c;
  }
  c = this.fC(a);
  c.measure();
  this.dC(a, c).draw();
};
g.qa = {};
g.qa.ph = function () {
  g.qa.ph.A.constructor.call(this);
  this.st = !1;
  this.dd = 1;
  this.BF = 30;
  this.Dz = -this.Gt / 2;
};
g.g.object.W(g.qa.ph, g.m.ph);
g.qa.ph.prototype.Dv = function (a) {
  return g.qa.ph.A.Dv.call(this, a).concat([
    a + " .blocklyInsertionMarker>.blocklyPathLight,",
    a + " .blocklyInsertionMarker>.blocklyPathDark {",
    "fill-opacity: " + this.mq + ";",
    "stroke: none;",
    "}",
  ]);
};
g.qa.Py = function (a) {
  this.Da = a;
  this.zo = this.va = "";
  this.ed = this.Da.L;
  a = a.Kb;
  this.B = a.ka();
  this.Oe = a.Oe;
  this.ue = this.Oe.OFFSET;
  this.Uw = this.Oe.QF;
  this.pm = this.Oe.cF;
  this.Xo = this.Oe.Ot;
  this.bJ = this.Oe.Al;
  this.CK = this.Oe.Hl;
  this.ZB = this.Oe.wl;
};
g.qa.Py.prototype.Xn = function (a) {
  this.Da.L &&
    (this.va +=
      this.ZB.rj + g.g.D.oa("v", a.height - this.ZB.height - this.ue));
};
function yd(a, c) {
  var d = c.Wa + c.width - a.ue;
  c.hB && (a.va += g.g.D.oa("H", d));
  a.ed &&
    ((a.va += g.g.D.oa("H", d)),
    c.height > a.ue && (a.va += g.g.D.oa("V", c.Tc + c.height - a.ue)));
}
g.qa.Ci = function (a, c) {
  g.qa.Ci.A.constructor.call(this, a, c);
  this.Qi && ((this.width += this.B.dd), (this.height += this.B.dd));
};
g.g.object.W(g.qa.Ci, g.m.Ci);
g.qa.Ji = function (a, c) {
  g.qa.Ji.A.constructor.call(this, a, c);
  this.Qi && (this.height += this.B.dd);
};
g.g.object.W(g.qa.Ji, g.m.Ji);
g.qa.Vf = function (a, c) {
  g.qa.Vf.A.constructor.call(this, a, c);
};
g.g.object.W(g.qa.Vf, g.m.Vf);
b = g.qa.Vf.prototype;
b.ex = function () {
  g.qa.Vf.A.ex.call(this);
  (this.S.U.length && this.S.U[this.S.U.length - 1].type == g.zb) ||
    (this.Sb.minHeight = this.B.gf - this.B.dd);
};
b.gA = function (a, c) {
  this.sm && a.type == g.jb
    ? (c.elements.push(new g.qa.Ci(this.B, a)), (c.Rv = !0))
    : a.type == g.zb
    ? (c.elements.push(new g.qa.Ji(this.B, a)), (c.Ec = !0))
    : a.type == g.jb
    ? (c.elements.push(new g.m.fq(this.B, a)), (c.Yi = !0))
    : a.type == g.qh &&
      ((c.minHeight = Math.max(c.minHeight, this.B.Ay)), (c.nm = !0));
  this.sm || null != c.align || (c.align = a.align);
};
b.fA = function () {
  for (var a = !1, c = 0, d; (d = this.rows[c]); c++) d.Yi && (a = !0);
  for (c = 0; (d = this.rows[c]); c++) {
    var e = d.elements;
    d.elements = [];
    d.Gs() && d.elements.push(new g.m.rh(this.B, this.lk(null, e[0])));
    if (e.length) {
      for (var f = 0; f < e.length - 1; f++) {
        d.elements.push(e[f]);
        var h = this.lk(e[f], e[f + 1]);
        d.elements.push(new g.m.rh(this.B, h));
      }
      d.elements.push(e[e.length - 1]);
      d.Yn() &&
        ((h = this.lk(e[e.length - 1], null)),
        a && d.nm && (h += this.B.yq),
        d.elements.push(new g.m.rh(this.B, h)));
    }
  }
};
b.lk = function (a, c) {
  if (!a)
    return c && g.m.v.Xh(c) && c.ee
      ? this.B.gf
      : c && g.m.v.dj(c)
      ? this.B.dz
      : c && g.m.v.Gk(c)
      ? this.B.Fz
      : this.B.Id;
  if (!g.m.v.ej(a) && (!c || g.m.v.Gk(c)))
    return g.m.v.Xh(a) && a.ee
      ? this.B.gf
      : g.m.v.rm(a)
      ? 2 * this.B.Id + 1
      : g.m.v.Ek(a)
      ? this.B.sg
      : g.m.v.BI(a)
      ? this.B.Id
      : g.m.v.fj(a)
      ? this.B.EF
      : g.m.v.UB(a)
      ? this.B.sg
      : this.B.Id;
  if (g.m.v.ej(a) && !c) {
    if (g.m.v.Do(a)) return this.B.sg;
    if (g.m.v.dj(a)) return this.B.Id;
    if (g.m.v.Gk(a)) return this.B.sg;
  }
  if (!g.m.v.ej(a) && c && g.m.v.ej(c)) {
    if (g.m.v.Xh(a) && a.ee) {
      if (g.m.v.dj(c) || g.m.v.Do(c)) return this.B.aG;
    } else {
      if (g.m.v.dj(c) || g.m.v.Do(c)) return this.B.dz;
      if (g.m.v.Gk(c)) return this.B.Id;
    }
    return this.B.Id - 1;
  }
  if (g.m.v.rm(a) && c && !g.m.v.ej(c)) return this.B.Id;
  if (g.m.v.dj(a) && c && g.m.v.Xh(c)) return c.ee ? this.B.gf : this.B.Id;
  if (g.m.v.Eo(a) && c) {
    if (g.m.v.Ek(c)) return this.B.sg;
    if (g.m.v.wm(c)) return c.Ff;
    if (g.m.v.gj(c)) return (a = ((this.L ? 1 : -1) * this.B.dd) / 2), c.Ff + a;
  }
  if (g.m.v.fj(a) && c) {
    if (g.m.v.wm(c)) return c.Ff - this.B.Lb;
    if (g.m.v.gj(c))
      return (a = ((this.L ? 1 : -1) * this.B.dd) / 2), c.Ff - this.B.Lb + a;
  }
  return (g.m.v.Xh(a) && c && g.m.v.Xh(c) && a.ee == c.ee) || (c && g.m.v.UB(c))
    ? this.B.Id
    : this.B.gf;
};
b.xB = function (a, c) {
  return g.m.v.Kr(a) && g.m.v.Er(c)
    ? this.B.pE
    : g.m.v.Kr(a) || g.m.v.Er(c)
    ? this.B.sg
    : a.Yi && c.Yi
    ? this.B.Id
    : !a.Ec && c.Ec
    ? this.B.MD
    : (a.Ec && c.Ec) || (!a.Ec && c.nm) || a.nm
    ? this.B.Id
    : this.B.gf;
};
b.oB = function (a, c) {
  if (g.m.v.Cf(c)) return a.Tc + c.height / 2;
  if (g.m.v.Er(a))
    return (
      (a = a.Tc + a.height - a.Vn),
      g.m.v.gj(c) ? a + c.height / 2 : a - c.height / 2
    );
  if (g.m.v.Kr(a))
    return g.m.v.Ek(c) ? a.Hh - c.height / 2 : a.Hh + c.height / 2;
  var d = a.Tc;
  g.m.v.Xh(c) || g.m.v.rm(c)
    ? ((d += c.height / 2),
      (a.Rv || a.Ec) && c.height + this.B.Gz <= a.height && (d += this.B.Gz))
    : (d = g.m.v.dj(c) ? d + c.height / 2 : d + a.height / 2);
  return d;
};
b.ku = function () {
  if (this.sm) {
    for (
      var a = 0, c = null, d = this.rows.length - 1, e;
      (e = this.rows[d]);
      d--
    )
      (e.Gw = a),
        g.m.v.xI(e) &&
          (e.Ec && rd(this, e),
          c && c.Ec && e.width < c.width ? (e.Gw = c.width) : (a = e.width),
          (c = e));
    for (d = a = 0; (e = this.rows[d]); d++)
      e.Ec
        ? (a = this.mo(e))
        : g.m.v.Cf(e)
        ? (e.width = Math.max(a, e.Gw))
        : ((a = Math.max(a, e.Gw) - e.width), 0 < a && sd(e, a), (a = e.width));
  } else g.qa.Vf.A.ku.call(this);
};
b.mo = function (a) {
  return this.sm && a.Ec
    ? this.Cj + this.B.BF + this.Lf
    : g.qa.Vf.A.mo.call(this, a);
};
b.cB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++) {
    e.Tc = c;
    e.Wa = this.Lf;
    c += e.height;
    a = Math.max(a, e.mg);
    var f = c - this.Bc.Sl;
    e == this.Sb &&
      f < this.B.ln &&
      ((f = this.B.ln - f), (this.Sb.height += f), (c += f));
    td(this, e);
  }
  this.O &&
    this.S.Z &&
    this.S.Z.isConnected() &&
    (a = Math.max(a, I(this.S.Z.ra()).width - this.B.dd));
  this.Sb.lf = c - this.Sb.Vn;
  this.Sm = a + this.Lf + this.B.dd;
  this.width += this.B.dd;
  this.height = c + this.B.dd;
  this.Fs = this.Bc.Hh;
};
g.qa.Fd = function (a, c) {
  g.qa.Fd.A.constructor.call(this, a, c);
  this.Tg = new g.qa.Py(c);
};
g.g.object.W(g.qa.Fd, g.m.Fd);
b = g.qa.Fd.prototype;
b.draw = function () {
  ud(this);
  vd(this);
  wd(this);
  var a = this.S.Ob;
  a.yx(this.cb + "\n" + this.Dr);
  var c = this.Tg;
  a.Xk.setAttribute("d", c.va + "\n" + c.zo);
  this.Da.L && a.xv();
  g.m.Hp && this.S.qx.xH(this.S, this.Da);
  xd(this);
};
b.pv = function () {
  var a = this.Tg,
    c = this.Da.Bc;
  a.va += g.g.D.moveBy(c.Wa, a.Da.Fs);
  for (var d = 0, e; (e = c.elements[d]); d++)
    g.m.v.Eo(e)
      ? (a.va += a.Oe.Cz)
      : g.m.v.fj(e)
      ? (a.va += a.Uw.Ox(a.ed))
      : g.m.v.wm(e)
      ? (a.va += a.bJ.rj)
      : g.m.v.Ek(e)
      ? (a.va += a.CK.path(a.ed))
      : g.m.v.Cf(e) &&
        0 != e.width &&
        (a.va += g.g.D.oa("H", e.Wa + e.width - a.ue));
  a.va += g.g.D.oa("H", c.Wa + c.width - a.ue);
  yd(this.Tg, this.Da.Bc);
  g.qa.Fd.A.pv.call(this);
};
b.Xn = function (a) {
  this.Tg.Xn(a);
  g.qa.Fd.A.Xn.call(this, a);
};
b.qv = function (a) {
  var c = this.Tg,
    d = qd(a);
  if (c.ed) {
    var e = a.height - d.Yl;
    c.va +=
      g.g.D.moveTo(d.Wa + d.width - c.ue, a.Tc) +
      c.Xo.Hf(c.ed) +
      g.g.D.oa("v", e);
  } else c.va += g.g.D.moveTo(d.Wa + d.width, a.Tc) + c.Xo.Hf(c.ed);
  g.qa.Fd.A.qv.call(this, a);
};
b.ov = function (a) {
  var c = this.Tg,
    d = qd(a);
  if (c.ed) {
    var e = a.height - 2 * c.pm.height;
    c.va +=
      g.g.D.moveTo(d.Wa, a.Tc) +
      c.pm.Zw(c.ed) +
      g.g.D.oa("v", e) +
      c.pm.os(c.ed) +
      g.g.D.lineTo(a.width - d.Wa - c.pm.width, 0);
  } else
    c.va +=
      g.g.D.moveTo(d.Wa, a.Tc + a.height) +
      c.pm.os(c.ed) +
      g.g.D.lineTo(a.width - d.Wa - c.pm.width, 0);
  g.qa.Fd.A.ov.call(this, a);
};
b.$A = function (a) {
  yd(this.Tg, a);
  this.cb += g.g.D.oa("H", a.Wa + a.width) + g.g.D.oa("V", a.Tc + a.height);
};
b.jv = function () {
  var a = this.Tg,
    c = this.Da.Sb;
  if (a.ed) a.va += g.g.D.oa("V", c.lf - a.ue);
  else {
    var d = a.Da.Sb.elements[0];
    g.m.v.Eo(d)
      ? (a.va += g.g.D.moveTo(c.Wa + a.ue, c.lf - a.ue))
      : g.m.v.fj(d) &&
        ((a.va += g.g.D.moveTo(c.Wa, c.lf)), (a.va += a.Uw.uu()));
  }
  g.qa.Fd.A.jv.call(this);
};
b.nv = function () {
  var a = this.Tg,
    c = a.Da.O;
  c &&
    ((c = c.Je + c.height),
    a.ed
      ? (a.va += g.g.D.moveTo(a.Da.Lf, c))
      : ((a.va += g.g.D.moveTo(a.Da.Lf + a.ue, a.Da.Sb.lf - a.ue)),
        (a.va += g.g.D.oa("V", c))),
    (a.va += a.Xo.To(a.ed)));
  a.ed ||
    ((c = a.Da.Bc),
    (a.va = g.m.v.fj(c.elements[0])
      ? a.va + g.g.D.oa("V", a.Uw.height)
      : a.va + g.g.D.oa("V", c.Hh + a.ue)));
  g.qa.Fd.A.nv.call(this);
};
b.mv = function (a) {
  var c = this.Tg,
    d = c.ue,
    e = a.Wa + a.Cg,
    f = a.Wl - a.height / 2,
    h = a.width - a.Cg,
    k = f + d;
  if (c.ed) {
    f = a.Je - d;
    var l = a.height - (a.Je + a.Yl) + d;
    c.zo +=
      g.g.D.moveTo(e - d, k) +
      g.g.D.oa("v", f) +
      c.Xo.Hf(c.ed) +
      g.g.D.oa("v", l) +
      g.g.D.oa("h", h);
  } else
    c.zo +=
      g.g.D.moveTo(a.Wa + a.width + d, k) +
      g.g.D.oa("v", a.height) +
      g.g.D.oa("h", -h) +
      g.g.D.moveTo(e, f + a.Je) +
      c.Xo.Hf(c.ed);
  g.qa.Fd.A.mv.call(this, a);
};
b.LC = function (a) {
  var c = a.Wl - a.height / 2;
  if (a.Sd) {
    var d = a.Wa + a.Cg + this.B.dd;
    this.Da.L && (d *= -1);
    Cc(a.Sd, d, c + a.Je + this.B.dd);
  }
};
b.NC = function (a) {
  var c = qd(a);
  if (c.Sd) {
    var d = a.Wa + a.Cj + c.Ff;
    d = this.Da.L ? -1 * d : d + this.B.dd;
    Cc(c.Sd, d, a.Tc + this.B.dd);
  }
};
b.KC = function (a) {
  var c = qd(a);
  if (c.Sd) {
    var d = a.Wa + a.width + this.B.dd;
    this.Da.L && (d *= -1);
    Cc(c.Sd, d, a.Tc);
  }
};
b.MC = function () {
  var a = this.Da.Sb;
  if (a.connection) {
    var c = a.connection,
      d = c.Wa;
    Cc(c.Sd, (this.Da.L ? -d : d) + this.B.dd / 2, a.lf + this.B.dd);
  }
};
g.qa.Oy = function (a) {
  this.Zl = a;
  this.OFFSET = 0.5;
  this.Cz = g.g.D.moveBy(this.OFFSET, this.OFFSET);
};
b = g.qa.Oy.prototype;
b.R = function () {
  this.cF = zd(this);
  this.QF = Ad(this);
  this.Ot = this.tw();
  this.Al = this.sw();
  this.wl = this.rw();
  this.Hl = this.uw();
};
function zd(a) {
  var c = a.Zl.Lb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c + a) - a,
    e =
      g.g.D.moveBy(d, d) + g.g.D.arc("a", "0 0,0", c, g.g.D.Va(-d - a, c - d)),
    f = g.g.D.arc("a", "0 0,0", c + a, g.g.D.Va(c + a, c + a)),
    h =
      g.g.D.moveBy(d, -d) +
      g.g.D.arc("a", "0 0,0", c + a, g.g.D.Va(c - d, d + a));
  return {
    width: c + a,
    height: c,
    Zw: function (k) {
      return k ? e : "";
    },
    os: function (k) {
      return k ? f : h;
    },
  };
}
function Ad(a) {
  var c = a.Zl.Lb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c - a) + a,
    e =
      g.g.D.moveBy(d, d) +
      g.g.D.arc("a", "0 0,1", c - a, g.g.D.Va(c - d, -d + a)),
    f =
      g.g.D.moveBy(a, c) + g.g.D.arc("a", "0 0,1", c - a, g.g.D.Va(c, -c + a)),
    h = -d,
    k =
      g.g.D.moveBy(d, h) +
      g.g.D.arc("a", "0 0,1", c - a, g.g.D.Va(-d + a, -h - c));
  return {
    height: c,
    Ox: function (l) {
      return l ? e : f;
    },
    uu: function () {
      return k;
    },
  };
}
b.tw = function () {
  var a = this.Zl.yq,
    c = this.Zl.yn,
    d = g.g.D.moveBy(-2, -c + 3.4) + g.g.D.lineTo(-0.45 * a, -2.1),
    e =
      g.g.D.oa("v", 2.5) +
      g.g.D.moveBy(0.97 * -a, 2.5) +
      g.g.D.curve("q", [g.g.D.Va(0.05 * -a, 10), g.g.D.Va(0.3 * a, 9.5)]) +
      g.g.D.moveBy(0.67 * a, -1.9) +
      g.g.D.oa("v", 2.5),
    f =
      g.g.D.oa("v", -1.5) +
      g.g.D.moveBy(-0.92 * a, -0.5) +
      g.g.D.curve("q", [g.g.D.Va(-0.19 * a, -5.5), g.g.D.Va(0, -11)]) +
      g.g.D.moveBy(0.92 * a, 1),
    h = g.g.D.moveBy(-5, c - 0.7) + g.g.D.lineTo(0.46 * a, -2.1);
  return {
    width: a,
    height: c,
    To: function (k) {
      return k ? d : f;
    },
    Hf: function (k) {
      return k ? e : h;
    },
  };
};
b.sw = function () {
  return { rj: g.g.D.oa("h", this.OFFSET) + this.Zl.Al.rj };
};
b.rw = function () {
  return {
    rj:
      g.g.D.lineTo(5.1, 2.6) +
      g.g.D.moveBy(-10.2, 6.8) +
      g.g.D.lineTo(5.1, 2.6),
    height: 12,
    width: 10.2,
  };
};
b.uw = function () {
  var a = this.Zl.Hl.height,
    c =
      g.g.D.moveBy(25, -8.7) +
      g.g.D.curve("c", [
        g.g.D.Va(29.7, -6.2),
        g.g.D.Va(57.2, -0.5),
        g.g.D.Va(75, 8.7),
      ]),
    d =
      g.g.D.curve("c", [
        g.g.D.Va(17.8, -9.2),
        g.g.D.Va(45.3, -14.9),
        g.g.D.Va(75, -8.7),
      ]) + g.g.D.moveTo(100.5, a + 0.5);
  return {
    path: function (e) {
      return e ? c : d;
    },
  };
};
g.qa.wh = function (a, c, d) {
  this.$l = d;
  this.ih = a;
  this.zp = g.g.o.M(
    g.g.G.ne,
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.ih
  );
  this.dc = g.g.o.M(g.g.G.ne, { class: "blocklyPath" }, this.ih);
  this.Xk = g.g.o.M(g.g.G.ne, { class: "blocklyPathLight" }, this.ih);
  this.Hu = "#000000";
  this.style = c;
};
g.g.object.W(g.qa.wh, g.m.wh);
b = g.qa.wh.prototype;
b.yx = function (a) {
  this.dc.setAttribute("d", a);
  this.zp.setAttribute("d", a);
};
b.xv = function () {
  this.dc.setAttribute("transform", "scale(-1 1)");
  this.Xk.setAttribute("transform", "scale(-1 1)");
  this.zp.setAttribute("transform", "translate(1,1) scale(-1 1)");
};
b.oc = function (a) {
  this.Xk.style.display = "";
  this.zp.style.display = "";
  this.Xk.setAttribute("stroke", this.style.Jh);
  this.zp.setAttribute("fill", this.Hu);
  g.qa.wh.A.oc.call(this, a);
  this.dc.setAttribute("stroke", "none");
};
b.bc = function (a) {
  this.style = a;
  this.Hu = g.g.Cb.qu("#000", this.style.Pi, 0.2) || this.Hu;
};
b.sD = function (a) {
  a
    ? (this.dc.setAttribute("filter", "url(#" + this.$l.kr + ")"),
      (this.Xk.style.display = "none"))
    : (this.dc.setAttribute("filter", "none"),
      (this.Xk.style.display = "inline"));
};
b.uD = function (a) {
  a &&
    ((this.Xk.style.display = "none"),
    this.zp.setAttribute("fill", this.style.Vq),
    this.dc.setAttribute("stroke", "none"),
    this.dc.setAttribute("fill", this.style.Vq));
};
b.Rx = function (a) {
  g.qa.wh.A.Rx.call(this, a);
  a && this.dc.setAttribute("stroke", "none");
};
g.qa.xh = function (a) {
  g.qa.xh.A.constructor.call(this, a);
  this.Oe = null;
};
g.g.object.W(g.qa.xh, g.m.xh);
b = g.qa.xh.prototype;
b.R = function (a, c) {
  g.qa.xh.A.R.call(this, a, c);
  this.Oe = new g.qa.Oy(this.ka());
  this.Oe.R();
};
b.kx = function (a, c) {
  g.qa.xh.A.kx.call(this, a, c);
  this.Oe.R();
};
b.pw = function () {
  return new g.qa.ph();
};
b.fC = function (a) {
  return new g.qa.Vf(this, a);
};
b.dC = function (a, c) {
  return new g.qa.Fd(a, c);
};
b.eC = function (a, c) {
  return new g.qa.wh(a, c, this.ka());
};
g.m.register("geras", g.qa.xh);
var Bd = {
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
  Cd = "ace ar fa he mzn ps ur".split(" "),
  Dd = window.BlocklyGamesLang,
  Ed = window.BlocklyGamesLanguages,
  Fd = /\.html$/.test(window.location.pathname),
  N,
  Gd = Number,
  Hd,
  Id = window.location.search.match(/[?&]level=([^&]+)/);
Hd = Id ? decodeURIComponent(Id[1].replace(/\+/g, "%20")) : "NaN";
var Jd = Gd(Hd);
N = isNaN(Jd) ? 1 : g.g.Ic.nf(1, Jd, 10);
function Kd() {
  document.title = document.getElementById("title").textContent;
  document.dir = -1 != Cd.indexOf(Dd) ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", Dd);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var c = [], d = 0; d < Ed.length; d++) {
      var e = Ed[d];
      c.push([Bd[e], e]);
    }
    c.sort(function (h, k) {
      return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0;
    });
    for (d = a.options.length = 0; d < c.length; d++) {
      var f = c[d];
      e = f[1];
      f = new Option(f[0], e);
      e == Dd && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (d = 1; 10 >= d; d++)
    (a = document.getElementById("level" + d)),
      (c = !!Ld(d)),
      a && c && (a.className += " level_done");
  (d = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(Md, 1);
}
function Ld(a) {
  try {
    var c = window.localStorage["genetics" + a];
  } catch (d) {}
  return c;
}
function O(a) {
  var c;
  (c = document.getElementById(a))
    ? ((c = c.textContent), (c = c.replace(/\\n/g, "\n")))
    : (c = null);
  return null === c ? "[Unknown message: " + a + "]" : c;
}
function Nd(a, c) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", c, !0);
  a.addEventListener("touchend", c, !0);
}
function Md() {
  if (!Fd) {
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
g.i.LOOPS_HUE = "120";
g.i.LISTS_HUE = "260";
g.i.LOGIC_HUE = "210";
g.i.VARIABLES_HUE = "330";
g.i.PROCEDURES_HUE = "290";
var BlocklyStorage = {},
  Od = null,
  Pd = null,
  Qd = null;
function Rd() {
  var a = Od();
  Sd("xml=" + encodeURIComponent(a), Td);
}
var Ud = {};
function Sd(a, c) {
  Ud["/storage"] && Ud["/storage"].abort();
  Ud["/storage"] = new XMLHttpRequest();
  Ud["/storage"].onload = function () {
    200 === this.status
      ? c && c.call(this)
      : Vd(O("Games_httpRequestError") + "\nXHR status: " + this.status);
    Ud["/storage"] = null;
  };
  Ud["/storage"].open("POST", "/storage");
  Ud["/storage"].setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  Ud["/storage"].send(a);
}
function Td() {
  window.location.hash = this.responseText.trim();
  Vd(O("Games_linkAlert").replace("%1", window.location.href));
  Qd = Od();
}
function Wd() {
  var a = this.responseText.trim();
  a.length
    ? Pd(a)
    : Vd(O("Games_hashError").replace("%1", window.location.hash));
  Qd = Od();
}
function Vd(a) {
  if ("object" === typeof P) {
    var c = document.getElementById("linkButton");
    P.DK(c, a);
  } else alert(a);
}
var A = null,
  Xd = null,
  Yd = !1;
function Zd() {
  Kd();
  var a = document.getElementById("linkButton");
  a && (Fd ? (a.style.display = "none") : ((Od = $d), (Pd = ae), Nd(a, Rd)));
  (a = document.getElementById("languageMenu")) &&
    a.addEventListener("change", be, !0);
}
function ce(a) {
  if (!Fd && 1 < window.location.hash.length)
    Sd("key=" + encodeURIComponent(window.location.hash.substring(1)), Wd);
  else {
    var c = null;
    try {
      c = window.sessionStorage.cC;
    } catch (e) {}
    c && delete window.sessionStorage.cC;
    var d = Ld(N);
    (a = c || d || a) && ae(a);
  }
}
function ae(a) {
  Xd ? Xd.setValue(a, -1) : ((a = g.V.Ye(a)), A.clear(), g.V.Ti(a, A), Na());
}
function $d() {
  if (Yd) var a = Xd.getValue();
  else {
    a = g.V.YK();
    if (1 == A.$b(!1).length && a.querySelector) {
      var c = a.querySelector("block");
      c && (c.removeAttribute("x"), c.removeAttribute("y"));
    }
    a = g.V.re(a);
  }
  return a;
}
function de() {
  return Yd ? Xd.getValue() : ee();
}
function fe() {
  "object" == typeof BlocklyStorage &&
    null !== Qd &&
    Qd != $d() &&
    ((window.location.hash = ""), (Qd = null));
}
function ge() {
  var a = { rtl: !1, trashcan: !0, zoom: { controls: !0, wheel: !0 } },
    c = document.getElementById("toolbox");
  c && (a.toolbox = c);
  a.media = "third-party/blockly/media/";
  a.oneBasedIndex = !1;
  A = g.xk("blockly", a);
  E(A, fe);
}
function he() {
  window.location = (Fd ? "index.html" : "./") + "?lang=" + Dd;
}
function be() {
  window.sessionStorage && (window.sessionStorage.cC = $d());
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
function ie() {
  10 > N
    ? (window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        Dd +
        "&level=" +
        (N + 1))
    : he();
}
function je() {
  var a = "".replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
  return a.replace(/\s+$/, "");
}
function ke(a) {
  if (
    ("click" == a.type && "touchend" == le && me + 2e3 > Date.now()) ||
    (le == a.type && me + 400 > Date.now())
  )
    return a.preventDefault(), a.stopPropagation(), !0;
  le = a.type;
  me = Date.now();
  return !1;
}
var le = null,
  me = 0;
function ne() {
  setTimeout(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/JS-Interpreter/compressed.js";
    document.head.appendChild(a);
  }, 1);
}
function oe() {
  setTimeout(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/babel.min.js";
    document.head.appendChild(a);
  }, 1);
}
function pe() {
  var a = window.ace;
  a.require("ace/ext/language_tools");
  Xd = a = a.edit("editor");
  a.setTheme("ace/theme/chrome");
  a.setShowPrintMargin(!1);
  a.setOptions({ enableBasicAutocompletion: !0, enableLiveAutocompletion: !0 });
  a = a.getSession();
  a.setMode("ace/mode/javascript");
  a.setTabSize(2);
  a.setUseSoftTabs(!0);
  a.on("change", fe);
  qe();
  return a;
}
function qe() {
  var a = Xd.getSession().getMode().$highlightRules.$keywordList;
  a
    ? a.splice(
        0,
        Infinity,
        "arguments",
        "this",
        "NaN",
        "Math",
        "JSON",
        "parseInt",
        "parseFloat",
        "isNaN",
        "isFinite",
        "eval",
        "String",
        "RegExp",
        "Object",
        "Number",
        "Function",
        "Date",
        "Boolean",
        "Array",
        "while",
        "var",
        "let",
        "typeof",
        "try",
        "throw",
        "switch",
        "return",
        "new",
        "instanceof",
        "of",
        "in",
        "if",
        "function",
        "for",
        "finally",
        "else",
        "do",
        "delete",
        "continue",
        "catch",
        "case",
        "break",
        "const",
        "undefined",
        "Infinity",
        "null",
        "false",
        "true"
      )
    : setTimeout(qe, (qe.MA *= 2));
}
qe.MA = 1;
var P = {
  Bk: !1,
  RA: null,
  dr: null,
  Ds: function (a, c, d, e, f, h) {
    function k() {
      P.Bk &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    P.Bk && P.Uh(!1);
    g.Mg() && g.Fc(!0);
    P.Bk = !0;
    P.RA = c;
    P.dr = h;
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
      (P.Wu = g.Rd(e, "mousedown", null, P.mH)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    d && c ? (P.Or(c, !1, 0.2), P.Or(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  SA: 0,
  TA: 0,
  mH: function (a) {
    P.Zu();
    if (!g.g.Fk(a)) {
      var c = document.getElementById("dialog");
      P.SA = c.offsetLeft - a.clientX;
      P.TA = c.offsetTop - a.clientY;
      P.Yu = g.Rd(document, "mouseup", null, P.Zu);
      P.Xu = g.Rd(document, "mousemove", null, P.nH);
      a.stopPropagation();
    }
  },
  nH: function (a) {
    var c = document.getElementById("dialog"),
      d = P.SA + a.clientX;
    a = P.TA + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - c.offsetHeight);
    d = Math.max(d, 0);
    d = Math.min(d, window.innerWidth - c.offsetWidth);
    c.style.left = d + "px";
    c.style.top = a + "px";
  },
  Zu: function () {
    P.Yu && (g.Qa(P.Yu), (P.Yu = null));
    P.Xu && (g.Qa(P.Xu), (P.Xu = null));
  },
  Uh: function (a) {
    function c() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (P.Bk) {
      P.Zu();
      P.Wu && (g.Qa(P.Wu), (P.Wu = null));
      P.Bk = !1;
      P.dr && P.dr();
      P.dr = null;
      var d = !1 === a ? null : P.RA;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      d && a ? (P.Or(a, !1, 0.8), P.Or(d, !0, 0.2), setTimeout(c, 175)) : c();
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
  Or: function (a, c, d) {
    function e() {
      f.style.width = h.width + "px";
      f.style.height = h.height + "px";
      f.style.left = h.x + "px";
      f.style.top = h.y + "px";
      f.style.opacity = d;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        h = P.KH(a);
      c
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  KH: function (a) {
    var c = g.g.style.mk(a);
    c = { x: c.x, y: c.y };
    a.getBBox
      ? ((a = a.getBBox()), (c.height = a.height), (c.width = a.width))
      : ((c.height = a.offsetHeight), (c.width = a.offsetWidth));
    return c;
  },
  DK: function (a, c) {
    var d = document.getElementById("containerStorage");
    d.textContent = "";
    c = c.split("\n");
    for (var e = 0; e < c.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(c[e]));
      d.appendChild(f);
    }
    d = document.getElementById("dialogStorage");
    P.Ds(d, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, P.hD);
    P.cD();
  },
  yG: function () {
    if (!Ld(N))
      if (P.Bk || A.Gc()) setTimeout(P.yG, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          c = document.getElementById("abortCancel");
        c.addEventListener("click", P.Uh, !0);
        c.addEventListener("touchend", P.Uh, !0);
        c = document.getElementById("abortOk");
        c.addEventListener("click", he, !0);
        c.addEventListener("touchend", he, !0);
        P.Ds(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function () {
            document.body.removeEventListener("keydown", P.cA, !0);
          }
        );
        document.body.addEventListener("keydown", P.cA, !0);
      }
  },
  XG: function () {
    var a = document.getElementById("dialogDone");
    if (A) {
      var c = document.getElementById("dialogLinesText");
      c.textContent = "";
      var d = je();
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
          ? O("Games_linesOfCode1")
          : O("Games_linesOfCode2").replace("%1", String(e));
      c.appendChild(document.createTextNode(d));
    }
    d =
      10 > N
        ? O("Games_nextLevel").replace("%1", String(N + 1))
        : O("Games_finalLevel");
    c = document.getElementById("doneCancel");
    c.addEventListener("click", P.Uh, !0);
    c.addEventListener("touchend", P.Uh, !0);
    c = document.getElementById("doneOk");
    c.addEventListener("click", ie, !0);
    c.addEventListener("touchend", ie, !0);
    P.Ds(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function () {
        document.body.removeEventListener("keydown", P.xA, !0);
      }
    );
    document.body.addEventListener("keydown", P.xA, !0);
    document.getElementById("dialogDoneText").textContent = d;
  },
  QA: function (a) {
    !P.Bk ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (P.Uh(!0), a.stopPropagation(), a.preventDefault());
  },
  cD: function () {
    document.body.addEventListener("keydown", P.QA, !0);
  },
  hD: function () {
    document.body.removeEventListener("keydown", P.QA, !0);
  },
  xA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      P.Uh(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && ie();
  },
  cA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      P.Uh(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && he();
  },
};
window.BlocklyDialogs = P;
P.hideDialog = P.Uh;
g.Generator = function (a) {
  this.mj = a;
  this.NE = new RegExp(this.af, "g");
};
g.Generator.qq = "generated_function";
b = g.Generator.prototype;
b.lq = null;
b.oe = null;
b.fd = null;
b.Hd = "  ";
b.XD = 60;
b.tq = [];
b.cw = null;
function ee() {
  var a = g.j,
    c = A;
  c ||
    (console.warn("No workspace specified in workspaceToCode call.  Guessing."),
    (c = g.Mg()));
  var d = [];
  a.R(c);
  c = c.$b(!0);
  for (var e = 0, f; (f = c[e]); e++) {
    var h = re(a, f);
    Array.isArray(h) && (h = h[0]);
    h &&
      (f.O &&
        ((h = a.ZC(h)),
        a.oe && !f.Dj && (h = Q(a.oe, f) + h),
        a.fd && !f.Dj && (h += Q(a.fd, f))),
      d.push(h));
  }
  d = d.join("\n");
  d = a.finish(d);
  d = d.replace(/^\s+\n/, "");
  d = d.replace(/\n\s+$/, "\n");
  return (d = d.replace(/[ \t]+\n/g, "\n"));
}
function se(a, c) {
  return c + a.replace(/(?!\n$)\n/g, "\n" + c);
}
function re(a, c) {
  !1 === a.cw &&
    console.warn(
      "Generator init was not called before blockToCode was called."
    );
  if (!c) return "";
  if (!c.isEnabled()) return re(a, t(c));
  if (c.we()) return re(a, Ba(c, !1)[0]);
  var d = a[c.type];
  if ("function" != typeof d)
    throw Error(
      'Language "' +
        a.mj +
        '" does not know how to generate  code for block type "' +
        c.type +
        '".'
    );
  d = d.call(c, c);
  if (Array.isArray(d)) {
    if (!c.O)
      throw TypeError("Expecting string from statement block: " + c.type);
    return [a.gp(c, d[0], void 0), d[1]];
  }
  if ("string" == typeof d)
    return (
      a.oe && !c.Dj && (d = Q(a.oe, c) + d),
      a.fd && !c.Dj && (d += Q(a.fd, c)),
      a.gp(c, d, void 0)
    );
  if (null === d) return "";
  throw SyntaxError("Invalid code generated: " + d);
}
function R(a, c, d) {
  var e = g.j;
  if (isNaN(d)) throw TypeError("Expecting valid order from block: " + a.type);
  var f = rc(a, c);
  if (!f) return "";
  c = re(e, f);
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
    for (f = !0, h = 0; h < e.tq.length; h++)
      if (e.tq[h][0] == d && e.tq[h][1] == c) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function te(a, c) {
  var d = g.j;
  a = rc(a, c);
  c = re(d, a);
  if ("string" != typeof c)
    throw TypeError("Expecting code from statement block: " + (a && a.type));
  c && (c = se(c, d.Hd));
  return c;
}
function ue(a, c) {
  var d = g.j;
  d.lq && (a = se(Q(d.lq, c), d.Hd) + a);
  d.fd && !c.Dj && (a = se(Q(d.fd, c), d.Hd) + a);
  d.oe && !c.Dj && (a += se(Q(d.oe, c), d.Hd));
  return a;
}
function Q(a, c) {
  c = c.id.replace(/\$/g, "$$$$");
  return a.replace(/%1/g, "'" + c + "'");
}
b.Qt = "";
function ve(a, c) {
  a.Qt += c + ",";
}
b.af = "{leCUI8hutHZI4480Dc}";
function we(a, c) {
  var d = g.j;
  if (!d.Si[a]) {
    var e = jd(d.Pb, a, g.vn);
    d.zv[a] = e;
    c = c.join("\n").replace(d.NE, e);
    for (var f; f != c; )
      (f = c), (c = c.replace(/^(( {2})*) {2}/gm, "$1\x00"));
    c = c.replace(/\0/g, d.Hd);
    d.Si[a] = c;
  }
  return d.zv[a];
}
b.R = function () {};
b.gp = function (a, c) {
  return c;
};
b.finish = function (a) {
  return a;
};
b.ZC = function (a) {
  return a;
};
g.j = new g.Generator("JavaScript");
ve(
  g.j,
  "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," +
    Object.getOwnPropertyNames(g.g.global).join(",")
);
g.j.Tj = 0;
g.j.TM = 1.1;
g.j.Xb = 1.2;
g.j.Ib = 2;
g.j.RM = 3;
g.j.NM = 3;
g.j.JM = 4.1;
g.j.VM = 4.2;
g.j.tn = 4.3;
g.j.rn = 4.4;
g.j.UM = 4.5;
g.j.WM = 4.6;
g.j.OM = 4.7;
g.j.HM = 4.8;
g.j.PM = 5;
g.j.Kt = 5.1;
g.j.qn = 5.2;
g.j.sn = 5.3;
g.j.Cl = 6.1;
g.j.Hi = 6.2;
g.j.LM = 7;
g.j.OF = 8;
g.j.QM = 8;
g.j.SM = 8;
g.j.kz = 9;
g.j.IM = 10;
g.j.MM = 11;
g.j.KM = 12;
g.j.It = 13;
g.j.Jt = 14;
g.j.rq = 15;
g.j.vh = 16;
g.j.XM = 17;
g.j.jz = 18;
g.j.kb = 99;
g.j.tq = [
  [g.j.Ib, g.j.Xb],
  [g.j.Ib, g.j.Ib],
  [g.j.Xb, g.j.Xb],
  [g.j.Xb, g.j.Ib],
  [g.j.rn, g.j.rn],
  [g.j.Kt, g.j.Kt],
  [g.j.Hi, g.j.Hi],
  [g.j.It, g.j.It],
  [g.j.Jt, g.j.Jt],
];
g.j.cw = !1;
g.j.R = function (a) {
  g.j.Si = Object.create(null);
  g.j.zv = Object.create(null);
  g.j.Pb ? g.j.Pb.reset() : (g.j.Pb = new g.Kd(g.j.Qt));
  g.j.Pb.Cx(a.Ra);
  for (var c = [], d = g.$.zG(a), e = 0; e < d.length; e++)
    c.push(g.j.Pb.Yd(d[e], g.Kd.nt));
  a = g.$.hA(a);
  for (e = 0; e < a.length; e++) c.push(g.j.Pb.Yd(a[e].Ma(), g.zc));
  c.length && (g.j.Si.variables = "var " + c.join(", ") + ";");
  this.cw = !0;
};
g.j.finish = function (a) {
  var c = [],
    d;
  for (d in g.j.Si) c.push(g.j.Si[d]);
  delete g.j.Si;
  delete g.j.zv;
  g.j.Pb.reset();
  return c.join("\n\n") + "\n\n\n" + a;
};
g.j.ZC = function (a) {
  return a + ";\n";
};
g.j.zJ = function (a) {
  a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
  return "'" + a + "'";
};
g.j.ZN = function (a) {
  return a.split(/\n/g).map(g.j.zJ).join(" + '\\n' +\n");
};
g.j.gp = function (a, c, d) {
  var e = "";
  if (!a.O || !a.O.na) {
    var f = a.Ie.text;
    f && ((f = g.g.qb.AD(f, g.j.XD - 3)), (e += se(f + "\n", "// ")));
    for (var h = 0; h < a.U.length; h++)
      if (a.U[h].type == g.jb) {
        var k = a.U[h].connection.ra();
        if (k) {
          f = [];
          k = q(k, !0);
          for (var l = 0; l < k.length; l++) {
            var m = k[l].Ie.text;
            m && f.push(m);
          }
          f.length && f.push("");
          (f = f.join("\n")) && (e += se(f, "// "));
        }
      }
  }
  a = a.Z && a.Z.ra();
  d = d ? "" : re(g.j, a);
  return e + c + d;
};
g.j.Lg = function (a, c, d, e, f) {
  d = d || 0;
  f = f || g.j.kb;
  a.u.options.bi && d--;
  var h = a.u.options.bi ? "1" : "0";
  a =
    0 < d
      ? R(a, c, g.j.Hi) || h
      : 0 > d
      ? R(a, c, g.j.Cl) || h
      : e
      ? R(a, c, g.j.tn) || h
      : R(a, c, f) || h;
  if (g.hj(a)) (a = Number(a) + d), e && (a = -a);
  else {
    if (0 < d) {
      a = a + " + " + d;
      var k = g.j.Hi;
    } else 0 > d && ((a = a + " - " + -d), (k = g.j.Cl));
    e && ((a = d ? "-(" + a + ")" : "-" + a), (k = g.j.tn));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
g.Xa = function (a, c, d) {
  "function" != typeof a && g.Xa.wD(a);
  this.Lk = a;
  this.Jx = this.gx = this.rr = null;
  a = this.Lk;
  if (Array.isArray(a)) {
    for (var e = !1, f = 0; f < a.length; f++) {
      var h = a[f][0];
      "string" == typeof h
        ? (a[f][0] = g.g.xe(h))
        : (null != h.alt && (a[f][0].alt = g.g.xe(h.alt)), (e = !0));
    }
    if (!(e || 2 > a.length)) {
      e = [];
      for (f = 0; f < a.length; f++) e.push(a[f][0]);
      f = g.g.qb.Dx(e);
      h = g.g.qb.UG(e, f);
      var k = g.g.qb.VG(e, f);
      (!h && !k) ||
        f <= h + k ||
        (h && (this.gx = e[0].substring(0, h - 1)),
        k && (this.Jx = e[0].substr(1 - k)),
        (this.Lk = g.Xa.CG(a, h, k)));
    }
  }
  this.Im = this.getOptions(!1)[0];
  g.Xa.A.constructor.call(this, this.Im[1], c, d);
  this.Nm = this.kf = this.Vh = this.Zc = this.hp = null;
};
g.g.object.W(g.Xa, g.Be);
g.Xa.la = function (a) {
  return new g.Xa(a.options, void 0, a);
};
g.Xa.prototype.Gl = !0;
g.Xa.hL = 25;
g.Xa.hM = 0.45;
g.Xa.$E = 5;
g.Xa.aF = 2 * g.Xa.$E;
g.Xa.by = g.g.userAgent.Xm ? "\u25bc" : "\u25be";
b = g.Xa.prototype;
b.kt = "default";
b.om = function () {
  this.Ex() ? $b(this) : (this.Fu = this.K.Na());
  ac(this);
  this.Vh = g.g.o.M(g.g.G.Rj, {}, this.Me);
  this.ka().GE
    ? ((this.Nm = g.g.o.M(
        g.g.G.Rj,
        { height: this.ka().cn + "px", width: this.ka().cn + "px" },
        this.Me
      )),
      this.Nm.setAttributeNS(g.g.o.Yf, "xlink:href", this.ka().HE))
    : ((this.kf = g.g.o.M(g.g.G.Lz, {}, this.Kc)),
      this.kf.appendChild(
        document.createTextNode(this.K.L ? g.Xa.by + " " : " " + g.Xa.by)
      ),
      this.K.L
        ? this.Kc.insertBefore(this.kf, this.mi)
        : this.Kc.appendChild(this.kf));
  this.qc && g.g.o.Fa(this.qc, "blocklyDropdownRect");
};
b.Ex = function () {
  return !this.ka().rt || (this.ka().rt && !this.K.Oa);
};
b.li = function (a) {
  var c = new g.Dt();
  c.Kf(g.g.ua.Ii.nF);
  var d = this.getOptions(!1);
  this.hp = null;
  for (var e = 0; e < d.length; e++) {
    var f = d[e][0],
      h = d[e][1];
    if ("object" == typeof f) {
      var k = new Image(f.width, f.height);
      k.src = f.src;
      k.alt = f.alt || "";
      f = k;
    }
    f = new g.Et(f, h);
    f.Kf(g.g.ua.Ii.NF);
    f.vx = this.K.L;
    f.Du = !0;
    c.Df.push(f);
    f.Eu = h == this.Lc;
    h == this.Lc && (this.hp = f);
    vc(f, this.gI, this);
  }
  this.Zc = c;
  this.Zc.Sw =
    a && "number" === typeof a.clientX ? new g.g.X(a.clientX, a.clientY) : null;
  this.Zc.Ha(g.H.TH());
  g.g.o.Fa(this.Zc.Eb, "blocklyDropdownMenu");
  this.ka().FE &&
    ((a = this.K.Oa ? this.K.getParent().Ev() : this.K.Ev()),
    (c = this.K.Oa ? this.K.getParent().style.Jh : this.K.style.Jh),
    g.H.pd(a, c));
  g.H.vK(this, this.zH.bind(this));
  this.Zc.focus();
  this.hp && this.Zc.ji(this.hp);
  this.oc();
};
b.zH = function () {
  this.Zc && this.Zc.I();
  this.hp = this.Zc = null;
  this.oc();
};
b.gI = function (a) {
  g.H.vo(this, !0);
  this.CC(a);
};
b.CC = function (a) {
  this.setValue(a.getValue());
};
g.Xa.CG = function (a, c, d) {
  for (var e = [], f = 0; f < a.length; f++) {
    var h = a[f][0],
      k = a[f][1];
    h = h.substring(c, h.length - d);
    e[f] = [h, k];
  }
  return e;
};
b = g.Xa.prototype;
b.getOptions = function (a) {
  return "function" == typeof this.Lk
    ? ((this.rr && a) || ((this.rr = this.Lk.call(this)), g.Xa.wD(this.rr)),
      this.rr)
    : this.Lk;
};
b.fk = function (a) {
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
b.Ph = function (a) {
  g.Xa.A.Ph.call(this, a);
  a = this.getOptions(!0);
  for (var c = 0, d; (d = a[c]); c++) d[1] == this.Lc && (this.Im = d);
};
b.oc = function () {
  this.qc &&
    (this.qc.setAttribute("stroke", this.K.style.Jh),
    this.Zc
      ? this.qc.setAttribute("fill", this.K.style.Jh)
      : this.qc.setAttribute("fill", "transparent"));
  this.K &&
    this.kf &&
    (this.kf.style.fill = this.K.Oa ? this.K.style.Vq : this.K.style.Pi);
};
b.Hm = function () {
  this.mi.nodeValue = "";
  this.Vh.style.display = "none";
  var a = this.Im && this.Im[0];
  if (a && "object" == typeof a) {
    this.Vh.style.display = "";
    this.Vh.setAttributeNS(g.g.o.Yf, "xlink:href", a.src);
    this.Vh.setAttribute("height", a.height);
    this.Vh.setAttribute("width", a.width);
    var c = Number(a.height);
    a = Number(a.width);
    var d = !!this.qc,
      e = Math.max(d ? this.ka().Fy : 0, c + g.Xa.aF);
    d = d ? this.ka().ol : 0;
    var f = this.Nm
      ? xe(this, a + d, e / 2 - this.ka().cn / 2)
      : g.g.o.Gv(this.kf, this.ka().Ai, this.ka().Bi, this.ka().zi);
    this.ke.width = a + f + 2 * d;
    this.ke.height = e;
    var h = 0;
    this.K.L
      ? this.Vh.setAttribute("x", d + f)
      : ((h = a + f),
        this.Kc.setAttribute("text-anchor", "end"),
        this.Vh.setAttribute("x", d));
    this.Vh.setAttribute("y", e / 2 - c / 2);
    dc(this, h + d, a + f);
  } else
    (this.mi.nodeValue = this.wr()),
      g.g.o.Fa(this.Kc, "blocklyDropdownText"),
      this.Kc.setAttribute("text-anchor", "start"),
      (e = !!this.qc),
      (c = Math.max(e ? this.ka().Fy : 0, this.ka().hq)),
      (a = g.g.o.Gv(this.Kc, this.ka().Ai, this.ka().Bi, this.ka().zi)),
      (e = e ? this.ka().ol : 0),
      (d = 0),
      this.Nm && (d = xe(this, a + e, c / 2 - this.ka().cn / 2)),
      (this.ke.width = a + d + 2 * e),
      (this.ke.height = c),
      dc(this, e, a);
  ec(this);
};
function xe(a, c, d) {
  if (!a.Nm) return 0;
  var e = a.qc ? a.ka().ol : 0,
    f = a.ka().IE,
    h = a.ka().cn;
  a.Nm.setAttribute(
    "transform",
    "translate(" + (a.K.L ? e : c + f) + "," + d + ")"
  );
  return h + f;
}
b.Nv = function () {
  if (!this.Im) return null;
  var a = this.Im[0];
  return "object" == typeof a ? a.alt : a;
};
g.Xa.wD = function (a) {
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
g.Xa.prototype.jc = function (a) {
  if (this.Zc)
    switch (a.name) {
      case g.navigation.Ab.Md:
        return tc(this.Zc), !0;
      case g.navigation.Ab.Jd:
        return (a = this.Zc), uc(a, a.Df.indexOf(a.$i), 1), !0;
      default:
        return !1;
    }
  return g.Xa.A.jc.call(this, a);
};
g.Jg.register("field_dropdown", g.Xa);
g.mc = function (a) {
  g.mc.A.constructor.call(this, null);
  this.SC = a;
};
g.g.object.W(g.mc, g.me);
b = g.mc.prototype;
b.Tm = 0;
b.Jp = 0;
b.kv = function (a) {
  g.g.o.M(
    g.g.G.Dc,
    { class: "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" },
    a
  );
  g.g.o.M(
    g.g.G.ne,
    {
      class: "blocklyIconSymbol",
      d:
        "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z",
    },
    a
  );
  g.g.o.M(
    g.g.G.dt,
    { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" },
    a
  );
};
b.Uv = function (a) {
  this.S.ee() && g.me.prototype.Uv.call(this, a);
};
b.Nu = function () {
  this.yp = g.g.o.M(g.g.G.Wj, { x: g.sa.ud, y: g.sa.ud }, null);
  if (this.SC.length)
    for (
      var a = g.g.xml.createElement("xml"), c = 0, d;
      (d = this.SC[c]);
      c++
    ) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", d);
      a.appendChild(e);
    }
  else a = null;
  c = new g.Ld({
    disable: !1,
    parentWorkspace: this.S.u,
    media: this.S.u.options.sj,
    rtl: this.S.L,
    horizontalLayout: !1,
    renderer: this.S.u.options.bp,
    rendererOverrides: this.S.u.options.cp,
  });
  c.Ia = this.S.L ? g.g.xa.Nd.El : g.g.xa.Nd.xl;
  if ((d = !!a)) (c.Xg = g.g.xa.Ku(a)), (c.Yc = this.WH.bind(this));
  this.s = new g.ub(c);
  this.s.Fo = !0;
  E(this.s, g.h.UA);
  a = d ? Zc(this.s, g.g.G.xc) : null;
  c = this.s.Ya("blocklyMutatorBackground");
  a && c.insertBefore(a, this.s.xb);
  this.yp.appendChild(c);
  return this.yp;
};
b.ui = function () {
  g.mc.A.ui.call(this);
  this.S.Nb ||
    (this.S.ee()
      ? this.ce && g.g.o.Vb(this.ce, "blocklyIconGroupReadonly")
      : (this.Gb(!1),
        this.ce && g.g.o.Fa(this.ce, "blocklyIconGroupReadonly")));
};
function ye(a) {
  var c = 2 * g.sa.ud,
    d = a.s.xb.getBBox(),
    e = d.width + d.x,
    f = d.height + 3 * c,
    h = a.s.ic();
  if (h) {
    var k = h.yr();
    f = Math.max(f, k.Td + 20);
    e += h.Rg();
  }
  a.S.L && (e = -d.x);
  e += 3 * c;
  if (Math.abs(a.Tm - e) > c || Math.abs(a.Jp - f) > c)
    (a.Tm = e),
      (a.Jp = f),
      a.hc.ip(e + c, f + c),
      a.yp.setAttribute("width", a.Tm),
      a.yp.setAttribute("height", a.Jp);
  a.S.L && a.s.xb.setAttribute("transform", "translate(" + a.Tm + ",0)");
  a.s.resize();
}
b.dJ = function () {
  this.s && Wc(this.s);
};
b.Gb = function (a) {
  if (a != this.isVisible())
    if ((g.h.Ga(new g.h.Of(this.S, a, "mutator")), a)) {
      this.hc = new g.sa(
        this.S.u,
        this.Nu(),
        this.S.Ob.dc,
        this.aj,
        null,
        null
      );
      Sa(this.hc, this.S.id);
      Ua(this.hc, this.dJ.bind(this));
      var c = this.s.options.Xg;
      a = this.s.ic();
      c && (a.R(this.s), a.show(c));
      this.dh = this.S.Nh(this.s);
      c = q(this.dh, !1);
      for (var d = 0, e; (e = c[d]); d++) e.Ha();
      this.dh.zs(!1);
      this.dh.Uu = !1;
      a ? ((c = 2 * a.Lb), (a = this.dh.L ? a.Rg() + c : c)) : (a = c = 16);
      this.S.L && (a = -a);
      this.dh.moveBy(a, c);
      if (this.S.ys) {
        var f = this,
          h = this.S;
        h.ys(this.dh);
        this.Es = function () {
          h.ys(f.dh);
        };
        E(this.S.u, this.Es);
      }
      ye(this);
      E(this.s, this.XK.bind(this));
      this.oc();
    } else
      (this.yp = null),
        this.s.I(),
        (this.dh = this.s = null),
        this.hc.I(),
        (this.hc = null),
        (this.Jp = this.Tm = 0),
        this.Es && (Oa(this.S.u, this.Es), (this.Es = null));
};
b.XK = function (a) {
  if (!(a.ew || (a.type == g.h.Lj && "disabled" == a.element))) {
    if (!this.s.Gc()) {
      a = this.s.$b(!1);
      for (var c = 0, d; (d = a[c]); c++) {
        var e = d.Za();
        20 > e.y && d.moveBy(0, 20 - e.y);
        if (d.L) {
          var f = -20,
            h = this.s.ic();
          h && (f -= h.Rg());
          e.x > f && d.moveBy(f - e.x, 0);
        } else 20 > e.x && d.moveBy(20 - e.x, 0);
      }
    }
    if (this.dh.u == this.s) {
      g.h.ea(!0);
      d = this.S;
      a = (a = d.ob()) && g.V.re(a);
      c = d.pa;
      d.pa = !1;
      d.Kh(this.dh);
      d.pa = c;
      d.Bf();
      g.Mg().vb && g.navigation.TI(d);
      d.pa && d.Ha();
      c = (c = d.ob()) && g.V.re(c);
      if (a != c) {
        g.h.Ga(new g.h.lh(d, "mutation", null, a, c));
        var k = g.h.uc();
        setTimeout(function () {
          g.h.ea(k);
          d.Zb();
          g.h.ea(!1);
        }, g.Qp);
      }
      this.s.Gc() || ye(this);
      g.h.ea(!1);
    }
  }
};
b.WH = function () {
  var a = this.s.ic();
  a = a ? a.Rg() : 0;
  return {
    Td: 0,
    rf: 0,
    Xc: 0,
    jd: 0,
    Qb: this.Jp,
    Hb: this.Tm - a,
    ec: 0,
    Wb: 0,
    Wc: 0,
    Mc: this.s.L ? 0 : a,
  };
};
b.I = function () {
  this.S.nd = null;
  g.me.prototype.I.call(this);
};
g.mc.Em = function (a, c, d) {
  if (!a || !a.Y().u) return !1;
  d = z(c, d).connection;
  var e = a.ra();
  return (e && e != c) || d.na == a
    ? !1
    : (d.isConnected() && d.disconnect(), d.connect(a), !0);
};
g.mc.dB = function (a) {
  var c = null;
  if (a && a.options) {
    var d = a.options.vc;
    a.gg ? d && d.options && (c = d.options.vc) : d && (c = d);
  }
  return c;
};
g.P.nw = {};
g.ta = {};
g.ta.vF = {};
g.ta.vF.kq = 260;
g.em([
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
g.P.lists_create_with = {
  R: function () {
    this.Ub = g.i.LISTS_CREATE_WITH_HELPURL;
    this.bc("list_blocks");
    this.fe = 3;
    this.bd();
    this.je(!0, "Array");
    this.Bj(new g.mc(["lists_create_with_item"]));
    this.eb(g.i.LISTS_CREATE_WITH_TOOLTIP);
  },
  ob: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("items", this.fe);
    return a;
  },
  Tb: function (a) {
    this.fe = parseInt(a.getAttribute("items"), 10);
    this.bd();
  },
  Nh: function (a) {
    var c = a.nj("lists_create_with_container");
    c.Bf();
    for (var d = z(c, "STACK").connection, e = 0; e < this.fe; e++) {
      var f = a.nj("lists_create_with_item");
      f.Bf();
      d.connect(f.ba);
      d = f.Z;
    }
    return c;
  },
  Kh: function (a) {
    var c = rc(a, "STACK");
    for (a = []; c && !c.we(); ) a.push(c.Ux), (c = c.Z && c.Z.ra());
    for (c = 0; c < this.fe; c++) {
      var d = z(this, "ADD" + c).connection.na;
      d && -1 == a.indexOf(d) && d.disconnect();
    }
    this.fe = a.length;
    this.bd();
    for (c = 0; c < this.fe; c++) g.mc.Em(a[c], this, "ADD" + c);
  },
  ys: function (a) {
    a = rc(a, "STACK");
    for (var c = 0; a; ) {
      var d = z(this, "ADD" + c);
      a.Ux = d && d.connection.na;
      c++;
      a = a.Z && a.Z.ra();
    }
  },
  bd: function () {
    this.fe && z(this, "EMPTY")
      ? this.wb("EMPTY")
      : this.fe ||
        z(this, "EMPTY") ||
        J(L(this, "EMPTY"), g.i.LISTS_CREATE_EMPTY_TITLE);
    for (var a = 0; a < this.fe; a++)
      if (!z(this, "ADD" + a)) {
        var c = lc(K(this, "ADD" + a), g.il);
        0 == a && J(c, g.i.LISTS_CREATE_WITH_INPUT_WITH);
      }
    for (; z(this, "ADD" + a); ) this.wb("ADD" + a), a++;
  },
};
g.P.lists_create_with_container = {
  R: function () {
    this.bc("list_blocks");
    J(L(this), g.i.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    pc(this, "STACK");
    this.eb(g.i.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.P.lists_create_with_item = {
  R: function () {
    this.bc("list_blocks");
    J(L(this), g.i.LISTS_CREATE_WITH_ITEM_TITLE);
    this.We(!0);
    this.Ve(!0);
    this.eb(g.i.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.P.lists_indexOf = {
  R: function () {
    var a = [
      [g.i.LISTS_INDEX_OF_FIRST, "FIRST"],
      [g.i.LISTS_INDEX_OF_LAST, "LAST"],
    ];
    this.Ub = g.i.LISTS_INDEX_OF_HELPURL;
    this.bc("list_blocks");
    this.je(!0, "Number");
    J(K(this, "VALUE").yb("Array"), g.i.LISTS_INDEX_OF_INPUT_IN_LIST);
    J(K(this, "FIND"), new g.Xa(a), "END");
    this.Rc(!0);
    var c = this;
    this.eb(function () {
      return g.i.LISTS_INDEX_OF_TOOLTIP.replace(
        "%1",
        c.u.options.bi ? "0" : "-1"
      );
    });
  },
};
g.P.lists_getIndex = {
  R: function () {
    var a = [
      [g.i.LISTS_GET_INDEX_GET, "GET"],
      [g.i.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
      [g.i.LISTS_GET_INDEX_REMOVE, "REMOVE"],
    ];
    this.iu = [
      [g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.i.LISTS_GET_INDEX_LAST, "LAST"],
      [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.Ub = g.i.LISTS_GET_INDEX_HELPURL;
    this.bc("list_blocks");
    a = new g.Xa(a, function (d) {
      d = "REMOVE" == d;
      this.Y().vD(d);
    });
    J(K(this, "VALUE").yb("Array"), g.i.LISTS_GET_INDEX_INPUT_IN_LIST);
    J(J(L(this), a, "MODE"), "", "SPACE");
    L(this, "AT");
    g.i.LISTS_GET_INDEX_TAIL && J(L(this, "TAIL"), g.i.LISTS_GET_INDEX_TAIL);
    this.Rc(!0);
    this.je(!0);
    this.Ze(!0);
    var c = this;
    this.eb(function () {
      var d = C(c, "MODE"),
        e = C(c, "WHERE"),
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
          ).replace("%1", c.u.options.bi ? "#1" : "#0");
      return f;
    });
  },
  ob: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("statement", !this.O);
    a.setAttribute("at", z(this, "AT").type == g.jb);
    return a;
  },
  Tb: function (a) {
    var c = "true" == a.getAttribute("statement");
    this.vD(c);
    a = "false" != a.getAttribute("at");
    this.Ze(a);
  },
  vD: function (a) {
    a != !this.O &&
      (x(this, !0),
      a
        ? (this.je(!1), this.We(!0), this.Ve(!0))
        : (this.We(!1), this.Ve(!1), this.je(!0)));
  },
  Ze: function (a) {
    this.wb("AT");
    this.wb("ORDINAL", !0);
    a
      ? (K(this, "AT").yb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          J(L(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX))
      : L(this, "AT");
    var c = new g.Xa(this.iu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.Y();
        f.Ze(e);
        nc(f, d, "WHERE");
        return null;
      }
    });
    J(z(this, "AT"), c, "WHERE");
    g.i.LISTS_GET_INDEX_TAIL && qc(this, "TAIL", null);
  },
};
g.P.lists_setIndex = {
  R: function () {
    var a = [
      [g.i.LISTS_SET_INDEX_SET, "SET"],
      [g.i.LISTS_SET_INDEX_INSERT, "INSERT"],
    ];
    this.iu = [
      [g.i.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.i.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.i.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.i.LISTS_GET_INDEX_LAST, "LAST"],
      [g.i.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.Ub = g.i.LISTS_SET_INDEX_HELPURL;
    this.bc("list_blocks");
    J(K(this, "LIST").yb("Array"), g.i.LISTS_SET_INDEX_INPUT_IN_LIST);
    J(J(L(this), new g.Xa(a), "MODE"), "", "SPACE");
    L(this, "AT");
    J(K(this, "TO"), g.i.LISTS_SET_INDEX_INPUT_TO);
    this.Rc(!0);
    this.We(!0);
    this.Ve(!0);
    this.eb(g.i.LISTS_SET_INDEX_TOOLTIP);
    this.Ze(!0);
    var c = this;
    this.eb(function () {
      var d = C(c, "MODE"),
        e = C(c, "WHERE"),
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
            c.u.options.bi ? "#1" : "#0"
          );
      return f;
    });
  },
  ob: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at", z(this, "AT").type == g.jb);
    return a;
  },
  Tb: function (a) {
    a = "false" != a.getAttribute("at");
    this.Ze(a);
  },
  Ze: function (a) {
    this.wb("AT");
    this.wb("ORDINAL", !0);
    a
      ? (K(this, "AT").yb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          J(L(this, "ORDINAL"), g.i.ORDINAL_NUMBER_SUFFIX))
      : L(this, "AT");
    var c = new g.Xa(this.iu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.Y();
        f.Ze(e);
        nc(f, d, "WHERE");
        return null;
      }
    });
    qc(this, "AT", "TO");
    z(this, "ORDINAL") && qc(this, "ORDINAL", "TO");
    J(z(this, "AT"), c, "WHERE");
  },
};
g.P.lists_getSublist = {
  R: function () {
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
    this.Ub = g.i.LISTS_GET_SUBLIST_HELPURL;
    this.bc("list_blocks");
    J(K(this, "LIST").yb("Array"), g.i.LISTS_GET_SUBLIST_INPUT_IN_LIST);
    L(this, "AT1");
    L(this, "AT2");
    g.i.LISTS_GET_SUBLIST_TAIL &&
      J(L(this, "TAIL"), g.i.LISTS_GET_SUBLIST_TAIL);
    this.Rc(!0);
    this.je(!0, "Array");
    this.Ze(1, !0);
    this.Ze(2, !0);
    this.eb(g.i.LISTS_GET_SUBLIST_TOOLTIP);
  },
  ob: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at1", z(this, "AT1").type == g.jb);
    a.setAttribute("at2", z(this, "AT2").type == g.jb);
    return a;
  },
  Tb: function (a) {
    var c = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.Ze(1, c);
    this.Ze(2, a);
  },
  Ze: function (a, c) {
    this.wb("AT" + a);
    this.wb("ORDINAL" + a, !0);
    c
      ? (K(this, "AT" + a).yb("Number"),
        g.i.ORDINAL_NUMBER_SUFFIX &&
          J(L(this, "ORDINAL" + a), g.i.ORDINAL_NUMBER_SUFFIX))
      : L(this, "AT" + a);
    var d = new g.Xa(this["WHERE_OPTIONS_" + a], function (e) {
      var f = "FROM_START" == e || "FROM_END" == e;
      if (f != c) {
        var h = this.Y();
        h.Ze(a, f);
        nc(h, e, "WHERE" + a);
        return null;
      }
    });
    J(z(this, "AT" + a), d, "WHERE" + a);
    1 == a &&
      (qc(this, "AT1", "AT2"),
      z(this, "ORDINAL1") && qc(this, "ORDINAL1", "AT2"));
    g.i.LISTS_GET_SUBLIST_TAIL && qc(this, "TAIL", null);
  },
};
g.P.lists_sort = {
  R: function () {
    M(this, {
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
g.P.lists_split = {
  R: function () {
    var a = this,
      c = new g.Xa(
        [
          [g.i.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
          [g.i.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"],
        ],
        function (d) {
          a.Fj(d);
        }
      );
    this.Ub = g.i.LISTS_SPLIT_HELPURL;
    this.bc("list_blocks");
    J(K(this, "INPUT").yb("String"), c, "MODE");
    J(K(this, "DELIM").yb("String"), g.i.LISTS_SPLIT_WITH_DELIMITER);
    this.Rc(!0);
    this.je(!0, "Array");
    this.eb(function () {
      var d = C(a, "MODE");
      if ("SPLIT" == d) return g.i.LISTS_SPLIT_TOOLTIP_SPLIT;
      if ("JOIN" == d) return g.i.LISTS_SPLIT_TOOLTIP_JOIN;
      throw Error("Unknown mode: " + d);
    });
  },
  Fj: function (a) {
    if (C(this, "MODE") != a) {
      var c = z(this, "INPUT").connection;
      c.Jm(null);
      var d = c.ra();
      d && (c.disconnect(), d.Oa ? d.I() : this.Zb());
    }
    "SPLIT" == a
      ? (this.O.yb("Array"), z(this, "INPUT").yb("String"))
      : (this.O.yb("String"), z(this, "INPUT").yb("Array"));
  },
  ob: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("mode", C(this, "MODE"));
    return a;
  },
  Tb: function (a) {
    this.Fj(a.getAttribute("mode"));
  },
};
g.P.GI = {};
g.ta.wd = {};
g.ta.wd.kq = 210;
g.em([
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
g.em([
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
g.ta.wd.$t = {
  EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
  NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
  LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
  LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
  GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
  GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
  AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
  OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}",
};
g.ga.register("logic_op_tooltip", g.ga.Lq("OP", g.ta.wd.$t));
g.ta.wd.ht = {
  te: 0,
  uf: 0,
  Dj: !0,
  ob: function () {
    if (!this.te && !this.uf) return null;
    var a = g.g.xml.createElement("mutation");
    this.te && a.setAttribute("elseif", this.te);
    this.uf && a.setAttribute("else", 1);
    return a;
  },
  Tb: function (a) {
    this.te = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.uf = parseInt(a.getAttribute("else"), 10) || 0;
    this.AJ();
  },
  Nh: function (a) {
    var c = a.nj("controls_if_if");
    c.Bf();
    for (var d = c.Z, e = 1; e <= this.te; e++) {
      var f = a.nj("controls_if_elseif");
      f.Bf();
      d.connect(f.ba);
      d = f.Z;
    }
    this.uf && ((a = a.nj("controls_if_else")), a.Bf(), d.connect(a.ba));
    return c;
  },
  Kh: function (a) {
    a = a.Z.ra();
    this.uf = this.te = 0;
    for (var c = [null], d = [null], e = null; a && !a.we(); ) {
      switch (a.type) {
        case "controls_if_elseif":
          this.te++;
          c.push(a.Ux);
          d.push(a.jg);
          break;
        case "controls_if_else":
          this.uf++;
          e = a.jg;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.Z && a.Z.ra();
    }
    this.bd();
    this.TC(c, d, e);
  },
  ys: function (a) {
    a = a.Z.ra();
    for (var c = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var d = z(this, "IF" + c),
            e = z(this, "DO" + c);
          a.Ux = d && d.connection.na;
          a.jg = e && e.connection.na;
          c++;
          break;
        case "controls_if_else":
          e = z(this, "ELSE");
          a.jg = e && e.connection.na;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.Z && a.Z.ra();
    }
  },
  AJ: function () {
    var a = [null],
      c = [null],
      d = null;
    z(this, "ELSE") && (d = z(this, "ELSE").connection.na);
    for (var e = 1; z(this, "IF" + e); ) {
      var f = z(this, "DO" + e);
      a.push(z(this, "IF" + e).connection.na);
      c.push(f.connection.na);
      e++;
    }
    this.bd();
    this.TC(a, c, d);
  },
  bd: function () {
    z(this, "ELSE") && this.wb("ELSE");
    for (var a = 1; z(this, "IF" + a); )
      this.wb("IF" + a), this.wb("DO" + a), a++;
    for (a = 1; a <= this.te; a++)
      J(K(this, "IF" + a).yb("Boolean"), g.i.CONTROLS_IF_MSG_ELSEIF),
        J(pc(this, "DO" + a), g.i.CONTROLS_IF_MSG_THEN);
    this.uf && J(pc(this, "ELSE"), g.i.CONTROLS_IF_MSG_ELSE);
  },
  TC: function (a, c, d) {
    for (var e = 1; e <= this.te; e++)
      g.mc.Em(a[e], this, "IF" + e), g.mc.Em(c[e], this, "DO" + e);
    g.mc.Em(d, this, "ELSE");
  },
};
g.ga.mx("controls_if_mutator", g.ta.wd.ht, null, [
  "controls_if_elseif",
  "controls_if_else",
]);
g.ta.wd.py = function () {
  this.eb(
    function () {
      if (this.te || this.uf) {
        if (!this.te && this.uf) return g.i.CONTROLS_IF_TOOLTIP_2;
        if (this.te && !this.uf) return g.i.CONTROLS_IF_TOOLTIP_3;
        if (this.te && this.uf) return g.i.CONTROLS_IF_TOOLTIP_4;
      } else return g.i.CONTROLS_IF_TOOLTIP_1;
      return "";
    }.bind(this)
  );
};
g.ga.register("controls_if_tooltip", g.ta.wd.py);
g.ta.wd.rF = {
  onchange: function (a) {
    this.Dm || (this.Dm = [null, null]);
    var c = rc(this, "A"),
      d = rc(this, "B");
    c &&
      d &&
      !ta(c.O, d.O) &&
      (g.h.ea(a.group),
      (a = this.Dm[0]),
      a !== c &&
        (x(c), !a || a.cg || a.Oa || z(this, "A").connection.connect(a.O)),
      (c = this.Dm[1]),
      c !== d &&
        (x(d), !c || c.cg || c.Oa || z(this, "B").connection.connect(c.O)),
      this.Zb(),
      g.h.ea(!1));
    this.Dm[0] = rc(this, "A");
    this.Dm[1] = rc(this, "B");
  },
};
g.ta.wd.qF = function () {
  this.Re(g.ta.wd.rF);
};
g.ga.register("logic_compare", g.ta.wd.qF);
g.ta.wd.sF = {
  PC: null,
  onchange: function (a) {
    var c = rc(this, "THEN"),
      d = rc(this, "ELSE"),
      e = this.O.na;
    if ((c || d) && e)
      for (var f = 0; 2 > f; f++) {
        var h = 1 == f ? c : d;
        h &&
          !ta(h.O, e) &&
          (g.h.ea(a.group),
          e === this.PC ? (x(this), e.Y().Zb()) : (x(h), h.Zb()),
          g.h.ea(!1));
      }
    this.PC = e;
  },
};
g.ga.qs("logic_ternary", g.ta.wd.sF);
g.Uc = function (a, c, d) {
  this.qp = !0;
  g.Uc.A.constructor.call(this, a, c, d);
  this.fs = this.ds = this.ae = null;
  this.qr = !1;
  this.s = null;
};
g.g.object.W(g.Uc, g.Be);
g.Uc.prototype.an = "";
g.Uc.la = function (a) {
  var c = g.g.xe(a.text);
  return new g.Uc(c, void 0, a);
};
g.Uc.prototype.Gl = !0;
g.Uc.OD = 4;
b = g.Uc.prototype;
b.kt = "text";
b.qf = function (a) {
  g.Uc.A.qf.call(this, a);
  "boolean" == typeof a.spellcheck && (this.qp = a.spellcheck);
};
b.om = function () {
  if (this.ka().Ly) {
    for (var a = 0, c = 0, d = 0, e; (e = this.K.U[d]); d++) {
      for (var f = 0; e.gb[f]; f++) a++;
      e.connection && c++;
    }
    this.qr = 1 >= a && this.K.O && !c;
  } else this.qr = !1;
  this.qr ? (this.Fu = this.K.Na()) : $b(this);
  ac(this);
};
b.fk = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
b.YA = function () {
  if (this.Ao) {
    this.dw = !1;
    var a = this.Lc;
    this.Lc = this.ae.PK;
    this.K &&
      g.h.isEnabled() &&
      g.h.Ga(new g.h.lh(this.K, "field", this.name || null, a, this.Lc));
  }
};
b.Ph = function (a) {
  this.dw = !0;
  this.Lc = a;
  this.Ao || (this.cj = !0);
};
b.oc = function () {
  this.K &&
    this.ka().Ly &&
    (this.qc
      ? this.qc.setAttribute("stroke", this.K.style.Jh)
      : this.K.Ob.dc.setAttribute("fill", this.ka().Dy));
};
b.Hm = function () {
  g.Uc.A.Hm.call(this);
  if (this.Ao) {
    ze(this);
    var a = this.ae;
    this.dw
      ? (g.g.o.Vb(a, "blocklyInvalidInput"), g.g.ua.qd(a, g.g.ua.State.Uy, !1))
      : (g.g.o.Fa(a, "blocklyInvalidInput"), g.g.ua.qd(a, g.g.ua.State.Uy, !0));
  }
};
function Ae(a) {
  0 != a.qp && ((a.qp = !1), a.ae && a.ae.setAttribute("spellcheck", a.qp));
}
b.li = function (a, c) {
  this.s = this.K.u;
  a = c || !1;
  !a && (g.g.userAgent.FF || g.g.userAgent.Xm || g.g.userAgent.tl)
    ? Be(this)
    : (g.ca.show(this, this.K.L, this.WK.bind(this)),
      (this.ae = this.Vx()),
      (this.Ao = !0),
      a || (this.ae.focus({ preventScroll: !0 }), this.ae.select()));
};
function Be(a) {
  g.prompt(
    g.i.CHANGE_VALUE_TITLE,
    a.$d(),
    function (c) {
      this.setValue(c);
    }.bind(a)
  );
}
b.Vx = function () {
  var a = g.ca.ib;
  g.g.o.Fa(Zb(this), "editing");
  var c = document.createElement("input");
  c.className = "blocklyHtmlInput";
  c.setAttribute("spellcheck", this.qp);
  var d = ad(this.s),
    e = this.ka().Ai * d + "pt";
  a.style.fontSize = e;
  c.style.fontSize = e;
  e = g.Uc.OD * d + "px";
  if (this.qr) {
    e = fc(this);
    e = (e.bottom - e.top) / 2 + "px";
    var f = this.K.getParent() ? this.K.getParent().style.Jh : this.K.style.Jh;
    c.style.border = 1 * d + "px solid " + f;
    a.style.borderRadius = e;
    a.style.transition = "box-shadow 0.25s ease 0s";
    this.ka().JE &&
      (a.style.boxShadow =
        "rgba(255, 255, 255, 0.3) 0px 0px 0px " + 4 * d + "px");
  }
  c.style.borderRadius = e;
  a.appendChild(c);
  c.value = c.defaultValue = String(this.Lc);
  c.PK = this.Lc;
  c.zC = null;
  ze(this);
  this.ds = g.ya(c, "keydown", this, this.iJ);
  this.fs = g.ya(c, "input", this, this.hJ);
  return c;
};
b.WK = function () {
  this.Ao = !1;
  this.dw = !0;
  gc(this);
  this.Lw && this.Lw(this.Lc);
  this.ds && (g.Qa(this.ds), (this.ds = null));
  this.fs && (g.Qa(this.fs), (this.fs = null));
  var a = g.ca.ib.style;
  a.width = "auto";
  a.height = "auto";
  a.fontSize = "";
  a.transition = "";
  a.boxShadow = "";
  this.ae = null;
  g.g.o.Vb(Zb(this), "editing");
};
b.iJ = function (a) {
  if (a.keyCode == g.g.T.eq) g.ca.Ka(), g.H.qk();
  else if (a.keyCode == g.g.T.ot)
    (this.ae.value = this.ae.defaultValue), g.ca.Ka(), g.H.qk();
  else if (a.keyCode == g.g.T.hG) {
    g.ca.Ka();
    g.H.qk();
    var c = this.K,
      d = !a.shiftKey,
      e = new g.Bq();
    F(e, g.F.am(this));
    var f = e.hb;
    e.jc({ name: d ? g.navigation.Ab.Jd : g.navigation.Ab.Md });
    (d = e.hb) &&
      d !== f &&
      ((f = d.Ea), jb(f) && f.li(void 0), c.u.vb && F(c.u.Fb(), d));
    a.preventDefault();
  }
};
b.hJ = function () {
  var a = this.ae.value;
  a !== this.ae.zC &&
    ((this.ae.zC = a),
    g.h.ea(!0),
    this.setValue(a),
    gc(this),
    ze(this),
    g.h.ea(!1));
};
function ze(a) {
  var c = g.ca.ib,
    d = fc(a);
  c.style.width = d.right - d.left + "px";
  c.style.height = d.bottom - d.top + "px";
  a = new g.g.X(a.K.L ? d.right - c.offsetWidth : d.left, d.top);
  c.style.left = a.x + "px";
  c.style.top = a.y + "px";
}
b.YB = function () {
  return !0;
};
b.Nv = function () {
  return this.Ao && this.ae ? this.ae.value : null;
};
g.Jg.register("field_input", g.Uc);
g.cf = function (a, c, d, e, f, h) {
  this.Oo = -Infinity;
  this.Mo = Infinity;
  this.Cm = 0;
  this.Su = null;
  g.cf.A.constructor.call(this, a, f, h);
  h || (Ce(this, c), De(this, d), Ee(this, e), this.setValue(this.getValue()));
};
g.g.object.W(g.cf, g.Uc);
g.cf.prototype.an = 0;
g.cf.la = function (a) {
  return new g.cf(a.value, void 0, void 0, void 0, void 0, a);
};
g.cf.prototype.Gl = !0;
g.cf.prototype.qf = function (a) {
  g.cf.A.qf.call(this, a);
  Ce(this, a.min);
  De(this, a.max);
  Ee(this, a.precision);
};
function Ce(a, c) {
  null == c ? (a.Oo = -Infinity) : ((c = Number(c)), isNaN(c) || (a.Oo = c));
}
function De(a, c) {
  null == c ? (a.Mo = Infinity) : ((c = Number(c)), isNaN(c) || (a.Mo = c));
}
function Ee(a, c) {
  null == c ? (a.Cm = 0) : ((c = Number(c)), isNaN(c) || (a.Cm = c));
  var d = a.Cm.toLocaleString("en-US", { maximumFractionDigits: 20 }),
    e = d.indexOf(".");
  a.Su = -1 == e ? (c ? 0 : null) : d.length - e - 1;
}
g.cf.prototype.fk = function (a) {
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = a.replace(/infinity/i, "Infinity");
  a = Number(a || 0);
  if (isNaN(a)) return null;
  a = Math.min(Math.max(a, this.Oo), this.Mo);
  this.Cm && isFinite(a) && (a = Math.round(a / this.Cm) * this.Cm);
  null != this.Su && (a = Number(a.toFixed(this.Su)));
  return a;
};
g.cf.prototype.Vx = function () {
  var a = g.cf.A.Vx.call(this);
  -Infinity < this.Oo && g.g.ua.qd(a, g.g.ua.State.qG, this.Oo);
  Infinity > this.Mo && g.g.ua.qd(a, g.g.ua.State.pG, this.Mo);
  return a;
};
g.Jg.register("field_number", g.cf);
g.Gd = function (a, c, d, e, f) {
  this.Lk = g.Gd.yH;
  this.iH = "string" === typeof a ? a : "";
  this.ke = new g.g.hf(0, 0);
  f && this.qf(f);
  c && (this.al = c);
  f || Fe(this, d, e);
};
g.g.object.W(g.Gd, g.Xa);
g.Gd.la = function (a) {
  var c = g.g.xe(a.variable);
  return new g.Gd(c, void 0, void 0, void 0, a);
};
b = g.Gd.prototype;
b.Gl = !0;
b.qf = function (a) {
  g.Gd.A.qf.call(this, a);
  Fe(this, a.variableTypes, a.defaultType);
};
b.wk = function () {
  if (!this.ze) {
    var a = g.$.zr(this.K.u, null, this.iH, this.hH);
    this.Ph(a.Ma());
  }
};
b.Ex = function () {
  return (
    g.Gd.A.Ex.call(this) && (!this.ka().rt || "variables_get" != this.K.type)
  );
};
b.co = function (a) {
  var c = a.getAttribute("id"),
    d = a.textContent,
    e = a.getAttribute("variabletype") || a.getAttribute("variableType") || "";
  c = g.$.zr(this.K.u, c, d, e);
  if (null != e && e !== c.type)
    throw Error(
      "Serialized variable type with id '" +
        c.Ma() +
        "' had type " +
        c.type +
        ", and does not match variable field that references it: " +
        g.V.re(a) +
        "."
    );
  this.setValue(c.Ma());
};
b.mD = function (a) {
  this.wk();
  a.id = this.ze.Ma();
  a.textContent = this.ze.name;
  this.ze.type && a.setAttribute("variabletype", this.ze.type);
  return a;
};
b.Bx = function (a) {
  if (a.Oa)
    throw Error("Variable fields are not allowed to exist on shadow blocks.");
  g.Gd.A.Bx.call(this, a);
};
b.getValue = function () {
  return this.ze ? this.ze.Ma() : null;
};
b.$d = function () {
  return this.ze ? this.ze.name : "";
};
b.ld = function () {
  return this.ze;
};
b.CB = function () {
  return this.ze ? this.al : null;
};
b.fk = function (a) {
  if (null === a) return null;
  var c = g.$.ld(this.K.u, a);
  if (!c)
    return (
      console.warn("Variable id doesn't point to a real variable! ID was " + a),
      null
    );
  c = c.type;
  var d;
  a: if ((d = Ge(this))) {
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
b.Ph = function (a) {
  this.ze = g.$.ld(this.K.u, a);
  g.Gd.A.Ph.call(this, a);
};
function Ge(a) {
  var c = a.SK;
  if (null === c && a.K && a.K.u) return a.K.u.Ov();
  c = c || [""];
  if (0 == c.length)
    throw (
      ((a = a.$d()),
      Error("'variableTypes' of field variable " + a + " was an empty list"))
    );
  return c;
}
function Fe(a, c, d) {
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
  a.hH = d;
  a.SK = c;
}
g.Gd.yH = function () {
  if (!this.ze)
    throw Error(
      "Tried to call dropdownCreate on a variable field with no variable selected."
    );
  var a = this.$d(),
    c = [];
  if (this.K && this.K.u)
    for (var d = Ge(this), e = 0; e < d.length; e++)
      c = c.concat(this.K.u.po(d[e]));
  c.sort(g.An.vA);
  d = [];
  for (e = 0; e < c.length; e++) d[e] = [c[e].name, c[e].Ma()];
  d.push([g.i.RENAME_VARIABLE, g.wz]);
  g.i.DELETE_VARIABLE && d.push([g.i.DELETE_VARIABLE.replace("%1", a), g.yy]);
  return d;
};
g.Gd.prototype.CC = function (a) {
  a = a.getValue();
  if (this.K && this.K.u) {
    if (a == g.wz) {
      g.$.vs(this.K.u, this.ze);
      return;
    }
    if (a == g.yy) {
      this.K.u.Oh(this.ze.Ma());
      return;
    }
  }
  this.setValue(a);
};
g.Gd.prototype.$o = function () {
  return !0;
};
g.Jg.register("field_variable", g.Gd);
g.P.II = {};
g.ta.ff = {};
g.ta.ff.kq = 120;
g.em([
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
g.ta.ff.sG = {
  WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
  UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}",
};
g.ga.register("controls_whileUntil_tooltip", g.ga.Lq("MODE", g.ta.ff.sG));
g.ta.ff.RD = {
  BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
  CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}",
};
g.ga.register("controls_flow_tooltip", g.ga.Lq("FLOW", g.ta.ff.RD));
g.ta.ff.eE = {
  Fg: function (a) {
    if (!this.Nb) {
      var c = w(this, "VAR").ld(),
        d = c.name;
      if (!this.isCollapsed() && null != d) {
        var e = { enabled: !0 };
        e.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", d);
        c = g.$.ho(c);
        d = g.g.xml.createElement("block");
        d.setAttribute("type", "variables_get");
        d.appendChild(c);
        e.za = g.Sa.Jn(this, d);
        a.push(e);
      }
    }
  },
};
g.ga.qs("contextMenu_newGetVariableBlock", g.ta.ff.eE);
g.ga.register("controls_for_tooltip", g.ga.xu("%{BKY_CONTROLS_FOR_TOOLTIP}"));
g.ga.register(
  "controls_forEach_tooltip",
  g.ga.xu("%{BKY_CONTROLS_FOREACH_TOOLTIP}")
);
g.ta.ff.Xp = {
  uF: [
    "controls_repeat",
    "controls_repeat_ext",
    "controls_forEach",
    "controls_for",
    "controls_whileUntil",
  ],
  Dj: !0,
  AB: function (a) {
    do {
      if (-1 != g.ta.ff.Xp.uF.indexOf(a.type)) return a;
      a = mc(a);
    } while (a);
    return null;
  },
  onchange: function (a) {
    if (this.u.Gc && !this.u.Gc() && a.type == g.h.Ys) {
      var c = g.ta.ff.Xp.AB(this);
      this.Km(c ? null : g.i.CONTROLS_FLOW_STATEMENTS_WARNING);
      if (!this.Nb) {
        var d = g.h.uc();
        g.h.ea(a.group);
        this.ie(c);
        g.h.ea(d);
      }
    }
  },
};
g.ga.qs("controls_flow_in_loop_check", g.ta.ff.Xp);
g.P.Ic = {};
g.ta.Math = {};
g.ta.Math.kq = 230;
g.em([
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
g.ta.Math.$t = {
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
g.ga.register("math_op_tooltip", g.ga.Lq("OP", g.ta.Math.$t));
g.ta.Math.dF = {
  ob: function () {
    var a = g.g.xml.createElement("mutation"),
      c = "DIVISIBLE_BY" == C(this, "PROPERTY");
    a.setAttribute("divisor_input", c);
    return a;
  },
  Tb: function (a) {
    a = "true" == a.getAttribute("divisor_input");
    this.bd(a);
  },
  bd: function (a) {
    var c = z(this, "DIVISOR");
    a ? c || K(this, "DIVISOR").yb("Number") : c && this.wb("DIVISOR");
  },
};
g.ta.Math.eF = function () {
  bc(w(this, "PROPERTY"), function (a) {
    a = "DIVISIBLE_BY" == a;
    this.Y().bd(a);
  });
};
g.ga.mx("math_is_divisibleby_mutator", g.ta.Math.dF, g.ta.Math.eF);
g.ga.register("math_change_tooltip", g.ga.xu("%{BKY_MATH_CHANGE_TOOLTIP}"));
g.ta.Math.pF = {
  Fj: function (a) {
    "MODE" == a ? this.O.yb("Array") : this.O.yb("Number");
  },
  ob: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("op", C(this, "OP"));
    return a;
  },
  Tb: function (a) {
    this.Fj(a.getAttribute("op"));
  },
};
g.ta.Math.oF = function () {
  bc(
    w(this, "OP"),
    function (a) {
      this.Fj(a);
    }.bind(this)
  );
};
g.ga.mx("math_modes_of_list_mutator", g.ta.Math.pF, g.ta.Math.oF);
g.bf = function (a, c, d) {
  this.pA = null;
  g.bf.A.constructor.call(this, a, c, d);
};
g.g.object.W(g.bf, g.Be);
g.bf.prototype.an = !1;
g.bf.la = function (a) {
  return new g.bf(a.checked, void 0, a);
};
g.bf.UD = "\u2713";
b = g.bf.prototype;
b.Gl = !0;
b.kt = "default";
b.qf = function (a) {
  g.bf.A.qf.call(this, a);
  a.checkCharacter && (this.pA = a.checkCharacter);
};
b.om = function () {
  g.bf.A.om.call(this);
  g.g.o.Fa(this.Kc, "blocklyCheckbox");
  this.Kc.style.display = this.Lc ? "block" : "none";
};
b.Hm = function () {
  this.mi && (this.mi.nodeValue = this.wr());
  cc(this, this.ka().EE);
};
b.wr = function () {
  return this.pA || g.bf.UD;
};
b.li = function () {
  this.setValue(!this.Lc);
};
b.fk = function (a) {
  return !0 === a || "TRUE" === a
    ? "TRUE"
    : !1 === a || "FALSE" === a
    ? "FALSE"
    : null;
};
b.Ph = function (a) {
  this.Lc = He(a);
  this.Kc && (this.Kc.style.display = this.Lc ? "block" : "none");
};
b.getValue = function () {
  return this.Lc ? "TRUE" : "FALSE";
};
b.$d = function () {
  return String(He(this.Lc));
};
function He(a) {
  return "string" == typeof a ? "TRUE" == a : !!a;
}
g.Jg.register("field_checkbox", g.bf);
g.P.yJ = {};
g.P.procedures_defnoreturn = {
  R: function () {
    var a = g.Aa.nr("", this);
    a = new g.Uc(a, g.Aa.ts);
    Ae(a);
    J(J(J(L(this), g.i.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
    this.Bj(new g.mc(["procedures_mutatorarg"]));
    (this.u.options.Ln ||
      (this.u.options.vc && this.u.options.vc.options.Ln)) &&
      g.i.PROCEDURES_DEFNORETURN_COMMENT &&
      this.eh(g.i.PROCEDURES_DEFNORETURN_COMMENT);
    this.bc("procedure_blocks");
    this.eb(g.i.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.Ub = g.i.PROCEDURES_DEFNORETURN_HELPURL;
    this.La = [];
    this.pc = [];
    this.fh(!0);
    this.jg = null;
  },
  fh: function (a) {
    this.Cr !== a &&
      (a
        ? (J(pc(this, "STACK"), g.i.PROCEDURES_DEFNORETURN_DO),
          z(this, "RETURN") && qc(this, "STACK", "RETURN"))
        : this.wb("STACK", !0),
      (this.Cr = a));
  },
  Gp: function () {
    var a = "";
    this.La.length &&
      (a = g.i.PROCEDURES_BEFORE_PARAMS + " " + this.La.join(", "));
    g.h.disable();
    try {
      nc(this, a, "PARAMS");
    } finally {
      g.h.enable();
    }
  },
  ob: function (a) {
    var c = g.g.xml.createElement("mutation");
    a && c.setAttribute("name", C(this, "NAME"));
    for (var d = 0; d < this.pc.length; d++) {
      var e = g.g.xml.createElement("arg"),
        f = this.pc[d];
      e.setAttribute("name", f.name);
      e.setAttribute("varid", f.Ma());
      a && this.Ww && e.setAttribute("paramId", this.Ww[d]);
      c.appendChild(e);
    }
    this.Cr || c.setAttribute("statements", "false");
    return c;
  },
  Tb: function (a) {
    this.La = [];
    this.pc = [];
    for (var c = 0, d; (d = a.childNodes[c]); c++)
      if ("arg" == d.nodeName.toLowerCase()) {
        var e = d.getAttribute("name");
        d = d.getAttribute("varid") || d.getAttribute("varId");
        this.La.push(e);
        d = g.$.zr(this.u, d, e, "");
        null != d
          ? this.pc.push(d)
          : console.log(
              "Failed to create a variable with name " + e + ", ignoring."
            );
      }
    this.Gp();
    g.Aa.Qo(this);
    this.fh("false" !== a.getAttribute("statements"));
  },
  Nh: function (a) {
    var c = g.g.xml.createElement("block");
    c.setAttribute("type", "procedures_mutatorcontainer");
    var d = g.g.xml.createElement("statement");
    d.setAttribute("name", "STACK");
    c.appendChild(d);
    for (var e = 0; e < this.La.length; e++) {
      var f = g.g.xml.createElement("block");
      f.setAttribute("type", "procedures_mutatorarg");
      var h = g.g.xml.createElement("field");
      h.setAttribute("name", "NAME");
      var k = g.g.xml.createTextNode(this.La[e]);
      h.appendChild(k);
      f.appendChild(h);
      h = g.g.xml.createElement("next");
      f.appendChild(h);
      d.appendChild(f);
      d = h;
    }
    a = g.V.gk(c, a);
    "procedures_defreturn" == this.type
      ? nc(a, this.Cr, "STATEMENTS")
      : a.wb("STATEMENT_INPUT");
    g.Aa.Qo(this);
    return a;
  },
  Kh: function (a) {
    this.La = [];
    this.Ww = [];
    this.pc = [];
    for (var c = rc(a, "STACK"); c && !c.we(); ) {
      var d = C(c, "NAME");
      this.La.push(d);
      d = this.u.ld(d, "");
      this.pc.push(d);
      this.Ww.push(c.id);
      c = c.Z && c.Z.ra();
    }
    this.Gp();
    g.Aa.Qo(this);
    a = C(a, "STATEMENTS");
    if (null !== a && ((a = "TRUE" == a), this.Cr != a))
      if (a) this.fh(!0), g.mc.Em(this.jg, this, "STACK"), (this.jg = null);
      else {
        a = z(this, "STACK").connection;
        if ((this.jg = a.na)) (a = a.ra()), x(a), a.Zb();
        this.fh(!1);
      }
  },
  Wi: function () {
    return [C(this, "NAME"), this.La, !1];
  },
  Qg: function () {
    return this.La;
  },
  Th: function () {
    return this.pc;
  },
  us: function (a, c) {
    var d = this.u.fg(a);
    if ("" == d.type) {
      d = d.name;
      c = this.u.fg(c);
      for (var e = !1, f = 0; f < this.pc.length; f++)
        this.pc[f].Ma() == a &&
          ((this.La[f] = c.name), (this.pc[f] = c), (e = !0));
      e && (this.gr(d, c.name), g.Aa.Qo(this));
    }
  },
  Os: function (a) {
    for (var c = a.name, d = !1, e = 0; e < this.pc.length; e++)
      if (this.pc[e].Ma() == a.Ma()) {
        var f = this.La[e];
        this.La[e] = c;
        d = !0;
      }
    d && (this.gr(f, c), g.Aa.Qo(this));
  },
  gr: function (a, c) {
    this.Gp();
    if (this.nd && this.nd.isVisible())
      for (var d = B(this.nd.s), e = 0, f; (f = d[e]); e++)
        "procedures_mutatorarg" == f.type &&
          g.Kd.vf(a, C(f, "NAME")) &&
          nc(f, c, "NAME");
  },
  Fg: function (a) {
    if (!this.Nb) {
      var c = { enabled: !0 },
        d = C(this, "NAME");
      c.text = g.i.PROCEDURES_CREATE_DO.replace("%1", d);
      var e = g.g.xml.createElement("mutation");
      e.setAttribute("name", d);
      for (d = 0; d < this.La.length; d++) {
        var f = g.g.xml.createElement("arg");
        f.setAttribute("name", this.La[d]);
        e.appendChild(f);
      }
      d = g.g.xml.createElement("block");
      d.setAttribute("type", this.nA);
      d.appendChild(e);
      c.za = g.Sa.Jn(this, d);
      a.push(c);
      if (!this.isCollapsed())
        for (d = 0; d < this.pc.length; d++)
          (c = { enabled: !0 }),
            (e = this.pc[d]),
            (c.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", e.name)),
            (e = g.$.ho(e)),
            (f = g.g.xml.createElement("block")),
            f.setAttribute("type", "variables_get"),
            f.appendChild(e),
            (c.za = g.Sa.Jn(this, f)),
            a.push(c);
    }
  },
  nA: "procedures_callnoreturn",
};
g.P.procedures_defreturn = {
  R: function () {
    var a = g.Aa.nr("", this);
    a = new g.Uc(a, g.Aa.ts);
    Ae(a);
    J(J(J(L(this), g.i.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
    J(lc(K(this, "RETURN"), g.il), g.i.PROCEDURES_DEFRETURN_RETURN);
    this.Bj(new g.mc(["procedures_mutatorarg"]));
    (this.u.options.Ln ||
      (this.u.options.vc && this.u.options.vc.options.Ln)) &&
      g.i.PROCEDURES_DEFRETURN_COMMENT &&
      this.eh(g.i.PROCEDURES_DEFRETURN_COMMENT);
    this.bc("procedure_blocks");
    this.eb(g.i.PROCEDURES_DEFRETURN_TOOLTIP);
    this.Ub = g.i.PROCEDURES_DEFRETURN_HELPURL;
    this.La = [];
    this.pc = [];
    this.fh(!0);
    this.jg = null;
  },
  fh: g.P.procedures_defnoreturn.fh,
  Gp: g.P.procedures_defnoreturn.Gp,
  ob: g.P.procedures_defnoreturn.ob,
  Tb: g.P.procedures_defnoreturn.Tb,
  Nh: g.P.procedures_defnoreturn.Nh,
  Kh: g.P.procedures_defnoreturn.Kh,
  Wi: function () {
    return [C(this, "NAME"), this.La, !0];
  },
  Qg: g.P.procedures_defnoreturn.Qg,
  Th: g.P.procedures_defnoreturn.Th,
  us: g.P.procedures_defnoreturn.us,
  Os: g.P.procedures_defnoreturn.Os,
  gr: g.P.procedures_defnoreturn.gr,
  Fg: g.P.procedures_defnoreturn.Fg,
  nA: "procedures_callreturn",
};
g.P.procedures_mutatorcontainer = {
  R: function () {
    J(L(this), g.i.PROCEDURES_MUTATORCONTAINER_TITLE);
    pc(this, "STACK");
    J(
      J(L(this, "STATEMENT_INPUT"), g.i.PROCEDURES_ALLOW_STATEMENTS),
      new g.bf("TRUE"),
      "STATEMENTS"
    );
    this.bc("procedure_blocks");
    this.eb(g.i.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.P.procedures_mutatorarg = {
  R: function () {
    var a = new g.Uc(g.Aa.uy, this.al);
    a.cJ = a.li;
    a.li = function () {
      this.Sn = [];
      this.cJ();
    };
    J(J(L(this), g.i.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
    this.We(!0);
    this.Ve(!0);
    this.bc("procedure_blocks");
    this.eb(g.i.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = !1;
    a.Lw = this.kH;
    a.Sn = [];
    a.Lw("x");
  },
  al: function (a) {
    var c = this.Y(),
      d = g.mc.dB(c.u);
    a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
    if (!a) return null;
    for (
      var e = B(c.u.bb || c.u), f = a.toLowerCase(), h = 0;
      h < e.length;
      h++
    )
      if (e[h].id != this.Y().id) {
        var k = C(e[h], "NAME");
        if (k && k.toLowerCase() == f) return null;
      }
    if (c.Nb) return a;
    (c = d.ld(a, "")) && c.name != a && d.xj(c.Ma(), a);
    c || ((c = d.sf(a, "")) && this.Sn && this.Sn.push(c));
    return a;
  },
  kH: function (a) {
    var c = g.mc.dB(this.Y().u);
    if (c)
      for (var d = 0; d < this.Sn.length; d++) {
        var e = this.Sn[d];
        e.name != a && c.Oh(e.Ma());
      }
  },
};
g.P.procedures_callnoreturn = {
  R: function () {
    J(L(this, "TOPROW"), "", "NAME");
    this.We(!0);
    this.Ve(!0);
    this.bc("procedure_blocks");
    this.Ub = g.i.PROCEDURES_CALLNORETURN_HELPURL;
    this.La = [];
    this.pc = [];
    this.ei = {};
    this.ah = null;
    this.hx = !0;
  },
  Ne: function () {
    return C(this, "NAME");
  },
  Gm: function (a, c) {
    g.Kd.vf(a, this.Ne()) &&
      (nc(this, c, "NAME"),
      this.eb(
        (this.O
          ? g.i.PROCEDURES_CALLRETURN_TOOLTIP
          : g.i.PROCEDURES_CALLNORETURN_TOOLTIP
        ).replace("%1", c)
      ));
  },
  zx: function (a, c) {
    var d = g.Aa.lo(this.Ne(), this.u),
      e = d && d.nd && d.nd.isVisible();
    e || ((this.ei = {}), (this.ah = null));
    if (c)
      if (a.join("\n") == this.La.join("\n")) this.ah = c;
      else {
        if (c.length != a.length)
          throw RangeError("paramNames and paramIds must be the same length.");
        this.zj(!1);
        this.ah || ((this.ei = {}), (this.ah = []));
        d = this.pa;
        this.pa = !1;
        for (var f = 0; f < this.La.length; f++) {
          var h = z(this, "ARG" + f);
          h &&
            ((h = h.connection.na),
            (this.ei[this.ah[f]] = h),
            e &&
              h &&
              -1 == c.indexOf(this.ah[f]) &&
              (h.disconnect(), h.Y().Zb()));
        }
        this.La = [].concat(a);
        this.pc = [];
        for (f = 0; f < this.La.length; f++)
          (a = g.$.zr(this.u, null, this.La[f], "")), this.pc.push(a);
        this.bd();
        if ((this.ah = c))
          for (f = 0; f < this.La.length; f++)
            (c = this.ah[f]),
              c in this.ei &&
                ((h = this.ei[c]),
                g.mc.Em(h, this, "ARG" + f) || delete this.ei[c]);
        (this.pa = d) && this.Ha();
      }
  },
  bd: function () {
    for (var a = 0; a < this.La.length; a++) {
      var c = w(this, "ARGNAME" + a);
      if (c) {
        g.h.disable();
        try {
          c.setValue(this.La[a]);
        } finally {
          g.h.enable();
        }
      } else
        (c = new g.vd(this.La[a])),
          J(lc(K(this, "ARG" + a), g.il), c, "ARGNAME" + a).R();
    }
    for (; z(this, "ARG" + a); ) this.wb("ARG" + a), a++;
    if ((a = z(this, "TOPROW")))
      if (this.La.length)
        w(this, "WITH") ||
          (J(a, g.i.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.R());
      else if (w(this, "WITH"))
        a: {
          c = 0;
          for (var d; (d = a.gb[c]); c++)
            if ("WITH" === d.name) {
              d.I();
              a.gb.splice(c, 1);
              a.K.pa && ((a.K = a.K), a.K.Ha(), a.K.Zb());
              break a;
            }
          throw Error('Field "WITH" not found.');
        }
  },
  ob: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("name", this.Ne());
    for (var c = 0; c < this.La.length; c++) {
      var d = g.g.xml.createElement("arg");
      d.setAttribute("name", this.La[c]);
      a.appendChild(d);
    }
    return a;
  },
  Tb: function (a) {
    var c = a.getAttribute("name");
    this.Gm(this.Ne(), c);
    c = [];
    for (var d = [], e = 0, f; (f = a.childNodes[e]); e++)
      "arg" == f.nodeName.toLowerCase() &&
        (c.push(f.getAttribute("name")), d.push(f.getAttribute("paramId")));
    this.zx(c, d);
  },
  Qg: function () {
    return this.La;
  },
  Th: function () {
    return this.pc;
  },
  onchange: function (a) {
    if (this.u && !this.u.gg && a.ab)
      if (a.type == g.h.Np && -1 != a.bj.indexOf(this.id)) {
        var c = this.Ne();
        c = g.Aa.lo(c, this.u);
        !c ||
          (c.type == this.Tu &&
            JSON.stringify(c.Qg()) == JSON.stringify(this.La)) ||
          (c = null);
        if (!c) {
          g.h.ea(a.group);
          a = g.g.xml.createElement("xml");
          c = g.g.xml.createElement("block");
          c.setAttribute("type", this.Tu);
          var d = this.Za(),
            e = d.y + 2 * g.Od;
          c.setAttribute("x", d.x + g.Od * (this.L ? -1 : 1));
          c.setAttribute("y", e);
          d = this.ob();
          c.appendChild(d);
          d = g.g.xml.createElement("field");
          d.setAttribute("name", "NAME");
          e = this.Ne();
          e || ((e = g.Aa.nr("", this)), this.Gm("", e));
          d.appendChild(g.g.xml.createTextNode(e));
          c.appendChild(d);
          a.appendChild(c);
          g.V.Ti(a, this.u);
          g.h.ea(!1);
        }
      } else
        a.type == g.h.Xs
          ? ((c = this.Ne()),
            (c = g.Aa.lo(c, this.u)),
            c || (g.h.ea(a.group), this.I(!0), g.h.ea(!1)))
          : a.type == g.h.Lj &&
            "disabled" == a.element &&
            ((c = this.Ne()),
            (c = g.Aa.lo(c, this.u)) &&
              c.id == a.lb &&
              ((c = g.h.uc()) &&
                console.log(
                  "Saw an existing group while responding to a definition change"
                ),
              g.h.ea(a.group),
              a.newValue
                ? ((this.hx = this.isEnabled()), this.ie(!1))
                : this.ie(this.hx),
              g.h.ea(c)));
  },
  Fg: function (a) {
    if (this.u.Hc()) {
      var c = { enabled: !0 };
      c.text = g.i.PROCEDURES_HIGHLIGHT_DEF;
      var d = this.Ne(),
        e = this.u;
      c.za = function () {
        var f = g.Aa.lo(d, e);
        if (f) {
          var h = f.id;
          if (e.Hc()) {
            if ((h = h ? e.Wd(h) : null)) {
              var k = h.Za(),
                l = I(h),
                m = e.scale;
              h = (k.x + ((e.L ? -1 : 1) * l.width) / 2) * m;
              k = (k.y + l.height / 2) * m;
              l = e.Yc();
              e.scroll(-(h - l.Hb / 2), -(k - l.Qb / 2));
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
  Tu: "procedures_defnoreturn",
};
g.P.procedures_callreturn = {
  R: function () {
    J(L(this, "TOPROW"), "", "NAME");
    this.je(!0);
    this.bc("procedure_blocks");
    this.Ub = g.i.PROCEDURES_CALLRETURN_HELPURL;
    this.La = [];
    this.pc = [];
    this.ei = {};
    this.ah = null;
    this.hx = !0;
  },
  Ne: g.P.procedures_callnoreturn.Ne,
  Gm: g.P.procedures_callnoreturn.Gm,
  zx: g.P.procedures_callnoreturn.zx,
  bd: g.P.procedures_callnoreturn.bd,
  ob: g.P.procedures_callnoreturn.ob,
  Tb: g.P.procedures_callnoreturn.Tb,
  Qg: g.P.procedures_callnoreturn.Qg,
  Th: g.P.procedures_callnoreturn.Th,
  onchange: g.P.procedures_callnoreturn.onchange,
  Fg: g.P.procedures_callnoreturn.Fg,
  Tu: "procedures_defreturn",
};
g.P.procedures_ifreturn = {
  R: function () {
    J(K(this, "CONDITION").yb("Boolean"), g.i.CONTROLS_IF_MSG_IF);
    J(K(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN);
    this.Rc(!0);
    this.We(!0);
    this.Ve(!0);
    this.bc("procedure_blocks");
    this.eb(g.i.PROCEDURES_IFRETURN_TOOLTIP);
    this.Ub = g.i.PROCEDURES_IFRETURN_HELPURL;
    this.Zi = !0;
  },
  ob: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("value", Number(this.Zi));
    return a;
  },
  Tb: function (a) {
    this.Zi = 1 == a.getAttribute("value");
    this.Zi ||
      (this.wb("VALUE"), J(L(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN));
  },
  onchange: function () {
    if (this.u.Gc && !this.u.Gc()) {
      var a = !1,
        c = this;
      do {
        if (-1 != this.OE.indexOf(c.type)) {
          a = !0;
          break;
        }
        c = mc(c);
      } while (c);
      a
        ? ("procedures_defnoreturn" == c.type && this.Zi
            ? (this.wb("VALUE"),
              J(L(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN),
              (this.Zi = !1))
            : "procedures_defreturn" != c.type ||
              this.Zi ||
              (this.wb("VALUE"),
              J(K(this, "VALUE"), g.i.PROCEDURES_DEFRETURN_RETURN),
              (this.Zi = !0)),
          this.Km(null),
          this.Nb || this.ie(!0))
        : (this.Km(g.i.PROCEDURES_IFRETURN_WARNING),
          this.Nb || oc(this) || this.ie(!1));
    }
  },
  OE: ["procedures_defnoreturn", "procedures_defreturn"],
};
g.P.TK = {};
g.ta.$ = {};
g.ta.$.kq = 330;
g.em([
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
g.ta.$.fE = {
  Fg: function (a) {
    if (!this.Nb) {
      if ("variables_get" == this.type)
        var c = "variables_set",
          d = g.i.VARIABLES_GET_CREATE_SET;
      else (c = "variables_get"), (d = g.i.VARIABLES_SET_CREATE_GET);
      var e = { enabled: 0 < Ja(this.u) },
        f = w(this, "VAR").$d();
      e.text = d.replace("%1", f);
      d = g.g.xml.createElement("field");
      d.setAttribute("name", "VAR");
      d.appendChild(g.g.xml.createTextNode(f));
      f = g.g.xml.createElement("block");
      f.setAttribute("type", c);
      f.appendChild(d);
      e.za = g.Sa.Jn(this, f);
      a.push(e);
    } else if (
      "variables_get" == this.type ||
      "variables_get_reporter" == this.type
    )
      (c = { text: g.i.hN, enabled: !0, za: g.ta.$.ZF(this) }),
        (f = w(this, "VAR").$d()),
        (e = {
          text: g.i.qL.replace("%1", f),
          enabled: !0,
          za: g.ta.$.jE(this),
        }),
        a.unshift(c),
        a.unshift(e);
  },
};
g.ta.$.ZF = function (a) {
  return function () {
    var c = a.u,
      d = w(a, "VAR").ld();
    g.$.vs(c, d);
  };
};
g.ta.$.jE = function (a) {
  return function () {
    var c = a.u,
      d = w(a, "VAR").ld();
    c.Oh(d.Ma());
    Vc(c);
  };
};
g.ga.qs("contextMenu_variableSetterGetter", g.ta.$.fE);
g.j.nw = {};
g.j.lists_create_empty = function () {
  return ["[]", g.j.Tj];
};
g.j.lists_create_with = function (a) {
  for (var c = Array(a.fe), d = 0; d < a.fe; d++)
    c[d] = R(a, "ADD" + d, g.j.kb) || "null";
  return ["[" + c.join(", ") + "]", g.j.Tj];
};
g.j.lists_repeat = function (a) {
  var c = we("listsRepeat", [
      "function " + g.j.af + "(value, n) {",
      "  var array = [];",
      "  for (var i = 0; i < n; i++) {",
      "    array[i] = value;",
      "  }",
      "  return array;",
      "}",
    ]),
    d = R(a, "ITEM", g.j.kb) || "null";
  a = R(a, "NUM", g.j.kb) || "0";
  return [c + "(" + d + ", " + a + ")", g.j.Ib];
};
g.j.lists_length = function (a) {
  return [(R(a, "VALUE", g.j.Xb) || "[]") + ".length", g.j.Xb];
};
g.j.lists_isEmpty = function (a) {
  return ["!" + (R(a, "VALUE", g.j.Xb) || "[]") + ".length", g.j.rn];
};
g.j.lists_indexOf = function (a) {
  var c = "FIRST" == C(a, "END") ? "indexOf" : "lastIndexOf",
    d = R(a, "FIND", g.j.kb) || "''";
  c = (R(a, "VALUE", g.j.Xb) || "[]") + "." + c + "(" + d + ")";
  return a.u.options.bi ? [c + " + 1", g.j.Hi] : [c, g.j.Ib];
};
g.j.lists_getIndex = function (a) {
  var c = C(a, "MODE") || "GET",
    d = C(a, "WHERE") || "FROM_START",
    e = R(a, "VALUE", "RANDOM" == d ? g.j.kb : g.j.Xb) || "[]";
  switch (d) {
    case "FIRST":
      if ("GET" == c) return [e + "[0]", g.j.Xb];
      if ("GET_REMOVE" == c) return [e + ".shift()", g.j.Xb];
      if ("REMOVE" == c) return e + ".shift();\n";
      break;
    case "LAST":
      if ("GET" == c) return [e + ".slice(-1)[0]", g.j.Xb];
      if ("GET_REMOVE" == c) return [e + ".pop()", g.j.Xb];
      if ("REMOVE" == c) return e + ".pop();\n";
      break;
    case "FROM_START":
      a = g.j.Lg(a, "AT");
      if ("GET" == c) return [e + "[" + a + "]", g.j.Xb];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.Ib];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);\n";
      break;
    case "FROM_END":
      a = g.j.Lg(a, "AT", 1, !0);
      if ("GET" == c) return [e + ".slice(" + a + ")[0]", g.j.Ib];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.Ib];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);";
      break;
    case "RANDOM":
      e =
        we("listsGetRandomItem", [
          "function " + g.j.af + "(list, remove) {",
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
      if ("GET" == c || "GET_REMOVE" == c) return [e, g.j.Ib];
      if ("REMOVE" == c) return e + ";\n";
  }
  throw Error("Unhandled combination (lists_getIndex).");
};
g.j.lists_setIndex = function (a) {
  function c() {
    if (d.match(/^\w+$/)) return "";
    var k = jd(g.j.Pb, "tmpList", g.zc),
      l = "var " + k + " = " + d + ";\n";
    d = k;
    return l;
  }
  var d = R(a, "LIST", g.j.Xb) || "[]",
    e = C(a, "MODE") || "GET",
    f = C(a, "WHERE") || "FROM_START",
    h = R(a, "TO", g.j.vh) || "null";
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
      f = g.j.Lg(a, "AT");
      if ("SET" == e) return d + "[" + f + "] = " + h + ";\n";
      if ("INSERT" == e) return d + ".splice(" + f + ", 0, " + h + ");\n";
      break;
    case "FROM_END":
      f = g.j.Lg(a, "AT", 1, !1, g.j.Cl);
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
      f = jd(g.j.Pb, "tmpX", g.zc);
      a += "var " + f + " = Math.floor(Math.random() * " + d + ".length);\n";
      if ("SET" == e) return a + (d + "[" + f + "] = " + h + ";\n");
      if ("INSERT" == e) return a + (d + ".splice(" + f + ", 0, " + h + ");\n");
  }
  throw Error("Unhandled combination (lists_setIndex).");
};
g.j.nw.XH = function (a, c, d) {
  return "FIRST" == c
    ? "0"
    : "FROM_END" == c
    ? a + ".length - 1 - " + d
    : "LAST" == c
    ? a + ".length - 1"
    : d;
};
g.j.lists_getSublist = function (a) {
  var c = R(a, "LIST", g.j.Xb) || "[]",
    d = C(a, "WHERE1"),
    e = C(a, "WHERE2");
  if ("FIRST" == d && "LAST" == e) c += ".slice(0)";
  else if (c.match(/^\w+$/) || ("FROM_END" != d && "FROM_START" == e)) {
    switch (d) {
      case "FROM_START":
        var f = g.j.Lg(a, "AT1");
        break;
      case "FROM_END":
        f = g.j.Lg(a, "AT1", 1, !1, g.j.Cl);
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
        a = g.j.Lg(a, "AT2", 1);
        break;
      case "FROM_END":
        a = g.j.Lg(a, "AT2", 0, !1, g.j.Cl);
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
    f = g.j.Lg(a, "AT1");
    a = g.j.Lg(a, "AT2");
    var h = g.j.nw.XH,
      k = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd",
      };
    c =
      we("subsequence" + k[d] + k[e], [
        "function " +
          g.j.af +
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
  return [c, g.j.Ib];
};
g.j.lists_sort = function (a) {
  var c = R(a, "LIST", g.j.Ib) || "[]",
    d = "1" === C(a, "DIRECTION") ? 1 : -1;
  a = C(a, "TYPE");
  var e = we("listsGetSortCompare", [
    "function " + g.j.af + "(type, direction) {",
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
  return [c + ".slice().sort(" + e + '("' + a + '", ' + d + "))", g.j.Ib];
};
g.j.lists_split = function (a) {
  var c = R(a, "INPUT", g.j.Xb),
    d = R(a, "DELIM", g.j.kb) || "''";
  a = C(a, "MODE");
  if ("SPLIT" == a) c || (c = "''"), (a = "split");
  else if ("JOIN" == a) c || (c = "[]"), (a = "join");
  else throw Error("Unknown mode: " + a);
  return [c + "." + a + "(" + d + ")", g.j.Ib];
};
g.j.lists_reverse = function (a) {
  return [(R(a, "LIST", g.j.Ib) || "[]") + ".slice().reverse()", g.j.Ib];
};
g.j.GI = {};
g.j.controls_if = function (a) {
  var c = 0,
    d = "";
  g.j.oe && (d += Q(g.j.oe, a));
  do {
    var e = R(a, "IF" + c, g.j.kb) || "false";
    var f = te(a, "DO" + c);
    g.j.fd && (f = se(Q(g.j.fd, a), g.j.Hd) + f);
    d += (0 < c ? " else " : "") + "if (" + e + ") {\n" + f + "}";
    ++c;
  } while (z(a, "IF" + c));
  if (z(a, "ELSE") || g.j.fd)
    (f = te(a, "ELSE")),
      g.j.fd && (f = se(Q(g.j.fd, a), g.j.Hd) + f),
      (d += " else {\n" + f + "}");
  return d + "\n";
};
g.j.controls_ifelse = g.j.controls_if;
g.j.logic_compare = function (a) {
  var c = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[
      C(a, "OP")
    ],
    d = "==" == c || "!=" == c ? g.j.kz : g.j.OF,
    e = R(a, "A", d) || "0";
  a = R(a, "B", d) || "0";
  return [e + " " + c + " " + a, d];
};
g.j.logic_operation = function (a) {
  var c = "AND" == C(a, "OP") ? "&&" : "||",
    d = "&&" == c ? g.j.It : g.j.Jt,
    e = R(a, "A", d);
  a = R(a, "B", d);
  if (e || a) {
    var f = "&&" == c ? "true" : "false";
    e || (e = f);
    a || (a = f);
  } else a = e = "false";
  return [e + " " + c + " " + a, d];
};
g.j.logic_negate = function (a) {
  var c = g.j.rn;
  return ["!" + (R(a, "BOOL", c) || "true"), c];
};
g.j.logic_boolean = function (a) {
  return ["TRUE" == C(a, "BOOL") ? "true" : "false", g.j.Tj];
};
g.j.logic_null = function () {
  return ["null", g.j.Tj];
};
g.j.logic_ternary = function (a) {
  var c = R(a, "IF", g.j.rq) || "false",
    d = R(a, "THEN", g.j.rq) || "null";
  a = R(a, "ELSE", g.j.rq) || "null";
  return [c + " ? " + d + " : " + a, g.j.rq];
};
g.j.II = {};
g.j.controls_repeat_ext = function (a) {
  var c = w(a, "TIMES")
      ? String(Number(C(a, "TIMES")))
      : R(a, "TIMES", g.j.vh) || "0",
    d = te(a, "DO");
  d = ue(d, a);
  a = "";
  var e = jd(g.j.Pb, "count", g.zc),
    f = c;
  c.match(/^\w+$/) ||
    g.hj(c) ||
    ((f = jd(g.j.Pb, "repeat_end", g.zc)),
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
g.j.controls_repeat = g.j.controls_repeat_ext;
g.j.controls_whileUntil = function (a) {
  var c = "UNTIL" == C(a, "MODE"),
    d = R(a, "BOOL", c ? g.j.rn : g.j.kb) || "false",
    e = te(a, "DO");
  e = ue(e, a);
  c && (d = "!" + d);
  return "while (" + d + ") {\n" + e + "}\n";
};
g.j.controls_for = function (a) {
  var c = g.j.Pb.Yd(C(a, "VAR"), g.zc),
    d = R(a, "FROM", g.j.vh) || "0",
    e = R(a, "TO", g.j.vh) || "0",
    f = R(a, "BY", g.j.vh) || "1",
    h = te(a, "DO");
  h = ue(h, a);
  if (g.hj(d) && g.hj(e) && g.hj(f)) {
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
        g.hj(d) ||
        ((k = jd(g.j.Pb, c + "_start", g.zc)),
        (a += "var " + k + " = " + d + ";\n")),
      (d = e),
      e.match(/^\w+$/) ||
        g.hj(e) ||
        ((d = jd(g.j.Pb, c + "_end", g.zc)),
        (a += "var " + d + " = " + e + ";\n")),
      (e = jd(g.j.Pb, c + "_inc", g.zc)),
      (a += "var " + e + " = "),
      (a = g.hj(f)
        ? a + (Math.abs(f) + ";\n")
        : a + ("Math.abs(" + f + ");\n")),
      (a =
        a +
        ("if (" + k + " > " + d + ") {\n") +
        (g.j.Hd + e + " = -" + e + ";\n")),
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
g.j.controls_forEach = function (a) {
  var c = g.j.Pb.Yd(C(a, "VAR"), g.zc),
    d = R(a, "LIST", g.j.vh) || "[]",
    e = te(a, "DO");
  e = ue(e, a);
  a = "";
  var f = d;
  d.match(/^\w+$/) ||
    ((f = jd(g.j.Pb, c + "_list", g.zc)),
    (a += "var " + f + " = " + d + ";\n"));
  d = jd(g.j.Pb, c + "_index", g.zc);
  e = g.j.Hd + c + " = " + f + "[" + d + "];\n" + e;
  return a + ("for (var " + d + " in " + f + ") {\n" + e + "}\n");
};
g.j.controls_flow_statements = function (a) {
  var c = "";
  g.j.oe && (c += Q(g.j.oe, a));
  g.j.fd && (c += Q(g.j.fd, a));
  if (g.j.oe) {
    var d = g.ta.ff.Xp.AB(a);
    d && !d.Dj && (c += Q(g.j.oe, d));
  }
  switch (C(a, "FLOW")) {
    case "BREAK":
      return c + "break;\n";
    case "CONTINUE":
      return c + "continue;\n";
  }
  throw Error("Unknown flow statement.");
};
g.j.Ic = {};
g.j.math_number = function (a) {
  a = Number(C(a, "NUM"));
  return [a, 0 <= a ? g.j.Tj : g.j.tn];
};
g.j.math_arithmetic = function (a) {
  var c = {
      ADD: [" + ", g.j.Hi],
      MINUS: [" - ", g.j.Cl],
      MULTIPLY: [" * ", g.j.Kt],
      DIVIDE: [" / ", g.j.qn],
      POWER: [null, g.j.kb],
    }[C(a, "OP")],
    d = c[0];
  c = c[1];
  var e = R(a, "A", c) || "0";
  a = R(a, "B", c) || "0";
  return d ? [e + d + a, c] : ["Math.pow(" + e + ", " + a + ")", g.j.Ib];
};
g.j.math_single = function (a) {
  var c = C(a, "OP");
  if ("NEG" == c)
    return (
      (a = R(a, "NUM", g.j.tn) || "0"),
      "-" == a[0] && (a = " " + a),
      ["-" + a, g.j.tn]
    );
  a =
    "SIN" == c || "COS" == c || "TAN" == c
      ? R(a, "NUM", g.j.qn) || "0"
      : R(a, "NUM", g.j.kb) || "0";
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
  if (d) return [d, g.j.Ib];
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
  return [d, g.j.qn];
};
g.j.math_constant = function (a) {
  return {
    PI: ["Math.PI", g.j.Xb],
    E: ["Math.E", g.j.Xb],
    GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", g.j.qn],
    SQRT2: ["Math.SQRT2", g.j.Xb],
    SQRT1_2: ["Math.SQRT1_2", g.j.Xb],
    INFINITY: ["Infinity", g.j.Tj],
  }[C(a, "CONSTANT")];
};
g.j.math_number_property = function (a) {
  var c = R(a, "NUMBER_TO_CHECK", g.j.sn) || "0",
    d = C(a, "PROPERTY");
  if ("PRIME" == d) {
    var e =
      we("mathIsPrime", [
        "function " + g.j.af + "(n) {",
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
    return [e, g.j.Ib];
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
      (a = R(a, "DIVISOR", g.j.sn) || "0"), (e = c + " % " + a + " == 0");
  }
  return [e, g.j.kz];
};
g.j.math_change = function (a) {
  var c = R(a, "DELTA", g.j.Hi) || "0";
  a = g.j.Pb.Yd(C(a, "VAR"), g.zc);
  return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + c + ";\n";
};
g.j.math_round = g.j.math_single;
g.j.math_trig = g.j.math_single;
g.j.math_on_list = function (a) {
  var c = C(a, "OP");
  switch (c) {
    case "SUM":
      a = R(a, "LIST", g.j.Xb) || "[]";
      a += ".reduce(function(x, y) {return x + y;})";
      break;
    case "MIN":
      a = R(a, "LIST", g.j.kb) || "[]";
      a = "Math.min.apply(null, " + a + ")";
      break;
    case "MAX":
      a = R(a, "LIST", g.j.kb) || "[]";
      a = "Math.max.apply(null, " + a + ")";
      break;
    case "AVERAGE":
      c = we("mathMean", [
        "function " + g.j.af + "(myList) {",
        "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;",
        "}",
      ]);
      a = R(a, "LIST", g.j.kb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MEDIAN":
      c = we("mathMedian", [
        "function " + g.j.af + "(myList) {",
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
      a = R(a, "LIST", g.j.kb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MODE":
      c = we("mathModes", [
        "function " + g.j.af + "(values) {",
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
      a = R(a, "LIST", g.j.kb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "STD_DEV":
      c = we("mathStandardDeviation", [
        "function " + g.j.af + "(numbers) {",
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
      a = R(a, "LIST", g.j.kb) || "[]";
      a = c + "(" + a + ")";
      break;
    case "RANDOM":
      c = we("mathRandomList", [
        "function " + g.j.af + "(list) {",
        "  var x = Math.floor(Math.random() * list.length);",
        "  return list[x];",
        "}",
      ]);
      a = R(a, "LIST", g.j.kb) || "[]";
      a = c + "(" + a + ")";
      break;
    default:
      throw Error("Unknown operator: " + c);
  }
  return [a, g.j.Ib];
};
g.j.math_modulo = function (a) {
  var c = R(a, "DIVIDEND", g.j.sn) || "0";
  a = R(a, "DIVISOR", g.j.sn) || "0";
  return [c + " % " + a, g.j.sn];
};
g.j.math_constrain = function (a) {
  var c = R(a, "VALUE", g.j.kb) || "0",
    d = R(a, "LOW", g.j.kb) || "0";
  a = R(a, "HIGH", g.j.kb) || "Infinity";
  return ["Math.min(Math.max(" + c + ", " + d + "), " + a + ")", g.j.Ib];
};
g.j.math_random_int = function (a) {
  var c = R(a, "FROM", g.j.kb) || "0";
  a = R(a, "TO", g.j.kb) || "0";
  return [
    we("mathRandomInt", [
      "function " + g.j.af + "(a, b) {",
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
    g.j.Ib,
  ];
};
g.j.math_random_float = function () {
  return ["Math.random()", g.j.Ib];
};
g.j.math_atan2 = function (a) {
  var c = R(a, "X", g.j.kb) || "0";
  return [
    "Math.atan2(" + (R(a, "Y", g.j.kb) || "0") + ", " + c + ") / Math.PI * 180",
    g.j.qn,
  ];
};
g.j.yJ = {};
g.j.procedures_defreturn = function (a) {
  var c = g.j.Pb.Yd(C(a, "NAME"), g.vn),
    d = "";
  g.j.oe && (d += Q(g.j.oe, a));
  g.j.fd && (d += Q(g.j.fd, a));
  d && (d = se(d, g.j.Hd));
  var e = "";
  g.j.lq && (e = se(Q(g.j.lq, a), g.j.Hd));
  var f = te(a, "STACK"),
    h = R(a, "RETURN", g.j.kb) || "",
    k = "";
  f && h && (k = d);
  h && (h = g.j.Hd + "return " + h + ";\n");
  for (var l = [], m = a.Qg(), n = 0; n < m.length; n++)
    l[n] = g.j.Pb.Yd(m[n], g.zc);
  d = "function " + c + "(" + l.join(", ") + ") {\n" + d + e + f + k + h + "}";
  d = g.j.gp(a, d);
  g.j.Si["%" + c] = d;
  return null;
};
g.j.procedures_defnoreturn = g.j.procedures_defreturn;
g.j.procedures_callreturn = function (a) {
  for (
    var c = g.j.Pb.Yd(C(a, "NAME"), g.vn), d = [], e = a.Qg(), f = 0;
    f < e.length;
    f++
  )
    d[f] = R(a, "ARG" + f, g.j.kb) || "null";
  return [c + "(" + d.join(", ") + ")", g.j.Ib];
};
g.j.procedures_callnoreturn = function (a) {
  return g.j.procedures_callreturn(a)[0] + ";\n";
};
g.j.procedures_ifreturn = function (a) {
  var c = "if (" + (R(a, "CONDITION", g.j.kb) || "false") + ") {\n";
  g.j.fd && (c += se(Q(g.j.fd, a), g.j.Hd));
  a.Zi
    ? ((a = R(a, "VALUE", g.j.kb) || "null"),
      (c += g.j.Hd + "return " + a + ";\n"))
    : (c += g.j.Hd + "return;\n");
  return c + "}\n";
};
g.j.TK = {};
g.j.variables_get = function (a) {
  return [g.j.Pb.Yd(C(a, "VAR"), g.zc), g.j.Tj];
};
g.j.variables_set = function (a) {
  var c = R(a, "VALUE", g.j.vh) || "0";
  return g.j.Pb.Yd(C(a, "VAR"), g.zc) + " = " + c + ";\n";
};
for (var Ie in g.ta.wd.ht) g.P.controls_if[Ie] = g.ta.wd.ht[Ie];
g.P.controls_if.R = function () {
  this.Ub = g.i.CONTROLS_IF_HELPURL;
  this.pd(g.i.LOGIC_HUE);
  J(K(this, "IF0").yb("Boolean"), "if (");
  J(L(this), ") {");
  pc(this, "DO0");
  J(L(this, "TAIL"), "}");
  this.Rc(!0);
  this.We(!0);
  this.Ve(!0);
  this.Bj(new g.mc(["controls_if_elseif", "controls_if_else"]));
  g.ta.wd.py.apply(this);
};
g.P.controls_if.bd = function () {
  z(this, "ELSE") && (this.wb("ELSEMSG"), this.wb("ELSE"));
  for (var a = 1; z(this, "IF" + a); )
    this.wb("IF" + a), this.wb("TAIL" + a), this.wb("DO" + a), a++;
  for (a = 1; a <= this.te; a++)
    J(K(this, "IF" + a).yb("Boolean"), "} else if ("),
      J(L(this, "TAIL" + a), ") {"),
      pc(this, "DO" + a);
  this.uf && (J(L(this, "ELSEMSG"), "} else {"), pc(this, "ELSE"));
  qc(this, "TAIL", null);
};
g.P.logic_compare.R = function () {
  this.Ub = g.i.LOGIC_COMPARE_HELPURL;
  this.pd(g.i.LOGIC_HUE);
  this.je(!0, "Boolean");
  K(this, "A");
  J(
    K(this, "B"),
    new g.Xa([
      ["==", "EQ"],
      ["!=", "NEQ"],
      ["<", "LT"],
      ["<=", "LTE"],
      [">", "GT"],
      [">=", "GTE"],
    ]),
    "OP"
  );
  this.Rc(!0);
  var a = this;
  this.eb(function () {
    var c = C(a, "OP");
    return {
      EQ: g.i.LOGIC_COMPARE_TOOLTIP_EQ,
      NEQ: g.i.LOGIC_COMPARE_TOOLTIP_NEQ,
      LT: g.i.LOGIC_COMPARE_TOOLTIP_LT,
      LTE: g.i.LOGIC_COMPARE_TOOLTIP_LTE,
      GT: g.i.LOGIC_COMPARE_TOOLTIP_GT,
      GTE: g.i.LOGIC_COMPARE_TOOLTIP_GTE,
    }[c];
  });
  this.Dm = [null, null];
};
g.i.LOGIC_OPERATION_AND = "&&";
g.i.LOGIC_OPERATION_OR = "||";
g.i.LOGIC_NEGATE_TITLE = "! %1";
g.i.LOGIC_BOOLEAN_TRUE = "true";
g.i.LOGIC_BOOLEAN_FALSE = "false";
g.P.controls_whileUntil.R = function () {
  M(this, {
    message0: "while ( %1 ) { %2 %3 }",
    args0: [
      { type: "input_value", name: "BOOL", check: "Boolean" },
      { type: "input_dummy" },
      { type: "input_statement", name: "DO" },
    ],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: g.i.LOOPS_HUE,
    tooltip: g.i.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE,
    helpUrl: g.i.CONTROLS_WHILEUNTIL_HELPURL,
  });
};
g.P.controls_for.R = function () {
  M(this, {
    message0: "for (var %1 = %2;  %3 < %4;  %5 += 1) { %6 %7 }",
    args0: [
      { type: "field_variable", name: "VAR", variable: null },
      { type: "input_value", name: "FROM", check: "Number", align: "RIGHT" },
      { type: "field_label", name: "VAR1", text: "?" },
      { type: "input_value", name: "TO", check: "Number", align: "RIGHT" },
      { type: "field_label", name: "VAR2", text: "?" },
      { type: "input_dummy" },
      { type: "input_statement", name: "DO" },
    ],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: g.i.LOOPS_HUE,
    helpUrl: g.i.CONTROLS_FOR_HELPURL,
  });
  var a = this;
  this.eb(function () {
    return g.i.CONTROLS_FOR_TOOLTIP.replace("%1", C(a, "VAR"));
  });
};
g.P.controls_for.onchange = function () {
  var a = w(this, "VAR").$d();
  nc(this, a, "VAR1");
  nc(this, a, "VAR2");
};
g.j.controls_for = function (a) {
  var c = g.j.Pb.Yd(C(a, "VAR"), g.$.qq),
    d = R(a, "FROM", g.j.vh) || "0",
    e = R(a, "TO", g.j.vh) || "0",
    f = te(a, "DO");
  f = ue(f, a.id);
  return (
    "for (var " +
    c +
    " = " +
    d +
    "; " +
    c +
    " < " +
    e +
    "; " +
    c +
    " += 1) {\n" +
    f +
    "}\n"
  );
};
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break ;";
g.i.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE = "continue ;";
g.P.math_arithmetic.R = function () {
  M(this, {
    message0: "%1 %2 %3",
    args0: [
      { type: "input_value", name: "A", check: "Number" },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["+", "ADD"],
          ["-", "MINUS"],
          ["*", "MULTIPLY"],
          ["/", "DIVIDE"],
        ],
      },
      { type: "input_value", name: "B", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    colour: g.i.MATH_HUE,
    helpUrl: g.i.MATH_ARITHMETIC_HELPURL,
  });
  var a = this;
  this.eb(function () {
    var c = C(a, "OP");
    return {
      ADD: g.i.MATH_ARITHMETIC_TOOLTIP_ADD,
      MINUS: g.i.MATH_ARITHMETIC_TOOLTIP_MINUS,
      MULTIPLY: g.i.MATH_ARITHMETIC_TOOLTIP_MULTIPLY,
      DIVIDE: g.i.MATH_ARITHMETIC_TOOLTIP_DIVIDE,
    }[c];
  });
};
g.P.math_change.R = function () {
  M(this, {
    message0: "%1 += %2;",
    args0: [
      { type: "field_variable", name: "VAR", variable: "name" },
      { type: "input_value", name: "DELTA", check: "Number" },
    ],
    inputsInline: !0,
    previousStatement: null,
    nextStatement: null,
    colour: g.i.VARIABLES_HUE,
    helpUrl: g.i.MATH_CHANGE_HELPURL,
  });
  var a = this;
  this.eb(function () {
    return g.i.MATH_CHANGE_TOOLTIP.replace("%1", w(a, "VAR").ld().name);
  });
};
g.j.math_change = function (a) {
  var c = R(a, "DELTA", g.j.Hi) || "0";
  return g.j.Pb.Yd(C(a, "VAR"), g.$.qq) + " += " + c + ";\n";
};
g.P.math_random_int.R = function () {
  M(this, {
    message0: "%1(%2,%3)",
    args0: [
      "Math.randomInt",
      { type: "input_value", name: "FROM", check: "Number" },
      { type: "input_value", name: "TO", check: "Number" },
    ],
    inputsInline: !0,
    output: "Number",
    colour: g.i.MATH_HUE,
    tooltip: g.i.MATH_RANDOM_INT_TOOLTIP,
    helpUrl: g.i.MATH_RANDOM_INT_HELPURL,
  });
};
g.i.MATH_RANDOM_FLOAT_TITLE_RANDOM = "Math.random  (  )";
g.i.LISTS_CREATE_EMPTY_TITLE = "[ ]";
g.i.LISTS_CREATE_WITH_INPUT_WITH = "[";
g.P.lists_create_with.bd = function () {
  z(this, "TAIL") && this.wb("TAIL");
  this.fe && z(this, "EMPTY")
    ? this.wb("EMPTY")
    : this.fe ||
      z(this, "EMPTY") ||
      J(L(this, "EMPTY"), g.i.LISTS_CREATE_EMPTY_TITLE);
  for (var a = 0; a < this.fe; a++)
    if (!z(this, "ADD" + a)) {
      var c = K(this, "ADD" + a);
      0 == a ? J(c, g.i.LISTS_CREATE_WITH_INPUT_WITH) : J(c, ",");
    }
  for (; z(this, "ADD" + a); ) this.wb("ADD" + a), a++;
  this.fe && J(L(this, "TAIL"), "]");
};
g.P.lists_getIndex = {
  R: function () {
    M(this, {
      message0: "%1[%2]",
      args0: [
        { type: "input_value", name: "VALUE", check: "Array" },
        { type: "input_value", name: "AT", check: "Number" },
      ],
      inputsInline: !0,
      output: null,
      colour: g.i.LISTS_HUE,
      tooltip:
        g.i.LISTS_GET_INDEX_TOOLTIP_GET_FROM +
        g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"),
      helpUrl: g.i.LISTS_GET_INDEX_HELPURL,
    });
  },
};
g.P.lists_setIndex = {
  R: function () {
    M(this, {
      message0: "%1[%2] = %3;",
      args0: [
        { type: "input_value", name: "LIST", check: "Array" },
        { type: "input_value", name: "AT", check: "Number" },
        { type: "input_value", name: "TO" },
      ],
      inputsInline: !0,
      previousStatement: null,
      nextStatement: null,
      colour: g.i.LISTS_HUE,
      tooltip:
        g.i.LISTS_SET_INDEX_TOOLTIP_SET_FROM +
        g.i.LISTS_INDEX_FROM_START_TOOLTIP.replace("%1", "#0"),
      helpUrl: g.i.LISTS_SET_INDEX_HELPURL,
    });
  },
};
g.i.LISTS_LENGTH_TITLE = "%1 . length";
g.P.variables_get.R = function () {
  this.Ub = g.i.VARIABLES_GET_HELPURL;
  this.pd(g.i.VARIABLES_HUE);
  J(L(this), new g.Gd("name"), "VAR");
  this.je(!0);
  this.eb(g.i.VARIABLES_GET_TOOLTIP);
};
g.P.variables_set.R = function () {
  this.Ub = g.i.VARIABLES_SET_HELPURL;
  this.pd(g.i.VARIABLES_HUE);
  J(J(J(K(this, "VALUE"), "var"), new g.Gd("name"), "VAR"), "=");
  J(L(this), ";");
  this.Rc(!0);
  this.We(!0);
  this.Ve(!0);
  this.eb(g.i.VARIABLES_SET_TOOLTIP);
};
g.P.procedures_defnoreturn.R = function () {
  var a = new g.Uc("", g.Aa.ts);
  J(J(J(J(J(L(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
  this.fh(!0);
  J(L(this), "}");
  this.Bj(new g.mc(["procedures_mutatorarg"]));
  g.i.PROCEDURES_DEFNORETURN_COMMENT &&
    this.eh(g.i.PROCEDURES_DEFNORETURN_COMMENT);
  this.pd(g.i.PROCEDURES_HUE);
  this.eb(g.i.PROCEDURES_DEFNORETURN_TOOLTIP);
  this.Ub = g.i.PROCEDURES_DEFNORETURN_HELPURL;
  this.La = [];
  this.pc = [];
  this.fh(!0);
  this.jg = null;
};
g.P.procedures_defreturn.R = function () {
  var a = new g.Uc("", g.Aa.ts);
  J(J(J(J(J(L(this), "function"), a, "NAME"), "("), "", "PARAMS"), ") {");
  J(lc(K(this, "RETURN"), g.il), "return");
  J(L(this), "}");
  this.Bj(new g.mc(["procedures_mutatorarg"]));
  g.i.PROCEDURES_DEFRETURN_COMMENT && this.eh(g.i.PROCEDURES_DEFRETURN_COMMENT);
  this.pd(g.i.PROCEDURES_HUE);
  this.eb(g.i.PROCEDURES_DEFRETURN_TOOLTIP);
  this.Ub = g.i.PROCEDURES_DEFRETURN_HELPURL;
  this.La = [];
  this.pc = [];
  this.fh(!0);
  this.jg = null;
};
g.i.PROCEDURES_BEFORE_PARAMS = "";
g.P.procedures_callnoreturn.R = function () {
  this.Ub = g.i.PROCEDURES_CALLNORETURN_HELPURL;
  this.pd(g.i.PROCEDURES_HUE);
  J(J(L(this), "", "NAME"), "(");
  J(L(this, "TAIL"), ");");
  this.Rc(!0);
  this.We(!0);
  this.Ve(!0);
  this.eb(g.i.PROCEDURES_CALLNORETURN_TOOLTIP);
  this.La = [];
  this.ei = {};
};
g.P.procedures_callnoreturn.bd = function () {
  for (var a = 0; a < this.La.length; a++)
    if (!z(this, "ARG" + a)) {
      new g.vd(this.La[a]);
      var c = K(this, "ARG" + a);
      0 < a && J(c, ",");
      c.R();
    }
  for (; z(this, "ARG" + a); ) this.wb("ARG" + a), a++;
  qc(this, "TAIL", null);
};
g.P.procedures_callreturn.R = function () {
  this.Ub = g.i.PROCEDURES_CALLRETURN_HELPURL;
  this.pd(g.i.PROCEDURES_HUE);
  J(J(L(this), "", "NAME"), "(");
  J(L(this, "TAIL"), ")");
  this.Rc(!0);
  this.je(!0);
  this.eb(g.i.PROCEDURES_CALLRETURN_TOOLTIP);
  this.La = [];
  this.ei = {};
};
g.P.procedures_callreturn.bd = g.P.procedures_callnoreturn.bd;
delete g.P.procedures_ifreturn;
function Je(a, c) {
  return function (d) {
    var e = te(d, "STACK"),
      f = R(d, "RETURN", g.j.kb) || "";
    e = "function " + a + "(" + c + ") {\n" + e + ("  return " + f + ";\n}");
    e = g.j.gp(d, e);
    g.j.Si[a] = e;
    return null;
  };
}
function Ke(a, c, d) {
  return function () {
    M(this, {
      message0: "function %1(%2) { %3 %4 return %5 }",
      args0: [
        a,
        c,
        { type: "input_dummy" },
        { type: "input_statement", name: "STACK" },
        { type: "input_value", check: d, align: "right", name: "RETURN" },
      ],
      inputsInline: !0,
      colour: 360,
      tooltip: O("Genetics_" + a + "Tooltip"),
    });
  };
}
g.P.genetics_pickFight = { R: Ke("pickFight", "", "Mouse") };
g.j.genetics_pickFight = Je("pickFight", "");
g.P.genetics_proposeMate = { R: Ke("proposeMate", "", "Mouse") };
g.j.genetics_proposeMate = Je("proposeMate", "");
g.P.genetics_acceptMate = {
  R: Ke("acceptMate", "suitor", "Boolean"),
  Qg: function () {
    return ["suitor"];
  },
  Fg: function (a) {
    if (!this.isCollapsed()) {
      var c = { enabled: !0 };
      c.text = g.i.VARIABLES_SET_CREATE_GET.replace("%1", "suitor");
      var d = g.g.xml.createElement("block");
      d.setAttribute("type", "variables_get");
      var e = g.g.xml.createElement("field");
      e.setAttribute("name", "VAR");
      var f = g.g.xml.createTextNode("suitor");
      e.appendChild(f);
      d.appendChild(e);
      c.za = g.Sa.Jn(this, d);
      a.push(c);
    }
  },
};
g.j.genetics_acceptMate = Je("acceptMate", "suitor");
g.P.genetics_getSelf = {
  R: function () {
    M(this, {
      message0: "%1(%2)",
      args0: ["getSelf", ""],
      output: "Mouse",
      colour: 20,
      tooltip: O("Genetics_getSelfTooltip"),
    });
  },
};
g.j.genetics_getSelf = function () {
  return ["getSelf()", g.j.Ib];
};
g.P.genetics_getMice = {
  R: function () {
    M(this, {
      message0: "%1(%2)",
      args0: ["getMice", ""],
      output: "Array",
      colour: 20,
      tooltip: O("Genetics_getMiceTooltip"),
    });
  },
};
g.j.genetics_getMice = function () {
  return ["getMice()", g.j.Ib];
};
g.P.genetics_getProperties = {
  R: function () {
    var a = this;
    this.pd(20);
    K(this, "MOUSE").yb("Mouse");
    var c = new g.Xa(
      [
        ["size", "SIZE"],
        ["aggressiveness", "AGGRESSIVENESS"],
        ["startAggressiveness", "START_AGGRESSIVENESS"],
        ["fertility", "FERTILITY"],
        ["startFertility", "START_FERTILITY"],
        ["sex", "SEX"],
        ["age", "AGE"],
        ["id", "ID"],
        ["pickFightOwner", "PICK_FIGHT"],
        ["proposeMateOwner", "PROPOSE_MATE"],
        ["acceptMateOwner", "ACCEPT_MATE"],
      ],
      function (d) {
        a.Fj(d);
      }
    );
    J(L(this), c, "PROPERTY");
    this.Rc(!0);
    this.je(!0, "Number");
    this.eb(function () {
      var d = C(a, "PROPERTY");
      return {
        SIZE: O("Genetics_sizeTooltip"),
        AGGRESSIVENESS: O("Genetics_aggressivenessTooltip"),
        FERTILITY: O("Genetics_fertilityTooltip"),
        START_FERTILITY: O("Genetics_startFertilityTooltip"),
        SEX: O("Genetics_sexTooltip"),
        AGE: O("Genetics_ageTooltip"),
        ID: O("Genetics_idTooltip"),
        PICK_FIGHT: O("Genetics_pickFightOwnerTooltip"),
        PROPOSE_MATE: O("Genetics_proposeMateOwnerTooltip"),
        ACCEPT_MATE: O("Genetics_acceptMateOwnerTooltip"),
      }[d];
    });
  },
  Fj: function (a) {
    "SEX" == a ? this.O.yb("String") : this.O.yb("Number");
  },
  ob: function () {
    var a = document.createElement("mutation");
    a.setAttribute("property", C(this, "PROPERTY"));
    return a;
  },
  Tb: function (a) {
    this.Fj(a.getAttribute("property"));
  },
};
g.j.genetics_getProperties = function (a) {
  var c = R(a, "MOUSE", g.j.kb) || "me()";
  a = C(a, "PROPERTY");
  c += ".";
  switch (a) {
    case "SIZE":
      c += "size";
      break;
    case "AGGRESSIVENESS":
      c += "aggressiveness";
      break;
    case "START_AGGRESSIVENESS":
      c += "startAggressiveness";
      break;
    case "FERTILITY":
      c += "fertility";
      break;
    case "START_FERTILITY":
      c += "startFertility";
      break;
    case "SEX":
      c += "sex";
      break;
    case "AGE":
      c += "age";
      break;
    case "ID":
      c += "id";
      break;
    case "PICK_FIGHT":
      c += "pickFightOwner";
      break;
    case "PROPOSE_MATE":
      c += "proposeMateOwner";
      break;
    case "ACCEPT_MATE":
      c += "acceptMateOwner";
      break;
    default:
      throw Error("Unknown mouse property: " + a);
  }
  return [c, g.j.Xb];
};
g.P.genetics_sex = {
  R: function () {
    M(this, {
      message0: "Sex.%1",
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            ["Male", "MALE"],
            ["Female", "FEMALE"],
          ],
        },
      ],
      output: "String",
      colour: 20,
    });
  },
};
g.j.genetics_sex = function (a) {
  var c = "Genetics.Mouse.Sex.";
  c = "MALE" == C(a, "TYPE") ? c + "Male" : c + "Female";
  return [c, g.j.Xb];
};
g.P.genetics_math_randomInt = {
  R: function () {
    M(this, {
      message0: "%1(%2,%3)",
      args0: [
        "Math.randomInt",
        { type: "input_value", name: "MIN_VALUE", check: "Number" },
        { type: "input_value", name: "MAX_VALUE", check: "Number" },
      ],
      inputsInline: !0,
      output: "Number",
      colour: g.i.MATH_HUE,
      helpUrl: g.i.MATH_RANDOM_INT_HELPURL,
      tooltip: g.i.MATH_RANDOM_INT_TOOLTIP,
    });
  },
};
g.j.genetics_math_randomInt = function (a) {
  var c = R(a, "MIN_VALUE", g.j.jz) || "0";
  a = R(a, "MAX_VALUE", g.j.jz) || "0";
  return ["Math.randomInt(" + c + ", " + a + ")", g.j.Ib];
};
function Le(a, c, d, e, f) {
  function h(m, n) {
    return Math.floor(Math.random() * n - m + 1) + m;
  }
  if (e && f) {
    d = h(0, 1);
    var k = h(0, 1),
      l = d === k ? !k : h(0, 1);
    this.Cd = d ? e.Cd : f.Cd;
    this.Dd = k ? e.Dd : f.Dd;
    this.xd = l ? e.xd : f.xd;
    this.size = g.g.Ic.nf((e.size + f.size) / 2 + h(-1, 1), 1, 10);
    this.Zf = this.rp = Math.max(0, Math.round((e.rp, f.rp) / 2) + h(-1, 1));
    this.sp = Math.max(0, Math.round((e.sp + f.sp) / 2) + h(-1, 1));
  } else
    (this.xd = this.Dd = this.Cd = d),
      (this.rp = this.size = 2),
      (this.Zf = 0),
      (this.sp = 4);
  this.wf = this.sp;
  this.Gq = 0;
  this.id = a;
  this.cc = c;
}
var Me = { gM: "Male", KL: "Female" };
var Ne = !0,
  T = [],
  U = [],
  Oe = [],
  V = {},
  Pe = 0,
  Qe = [],
  Re = !1,
  Se = {
    ADD: ["MOUSE"],
    START_GAME: [],
    NEXT_ROUND: [],
    FIGHT: ["ID", "RESULT", "OPT_OPPONENT"],
    MATE: ["ID", "RESULT", "OPT_PARTNER", "OPT_OFFSPRING"],
    RETIRE: ["ID"],
    OVERPOPULATION: ["ID"],
    EXPLODE: ["ID", "SOURCE", "CAUSE"],
    END_GAME: ["IS_SUCCESS", "OPT_RANKINGS"],
  };
function W(a, c) {
  var d = Se[a];
  this.TYPE = a;
  for (var e = 0; e < d.length; e++) this[d[e]] = arguments[e + 1];
}
function X(a) {
  Qe.push(a);
}
var Te = 0,
  Ue = 0,
  Ve = !1;
function We() {
  Ne = !0;
  clearTimeout(Pe);
  Qe.length = 0;
  V = {};
  U.length = 0;
  Te = Oe.length = 0;
}
var Xe = "",
  Ye = !1,
  Ze = !1,
  $e = !1;
function af() {
  if (Re || 100 > Qe.length) {
    0 == Oe.length &&
      (10 > Te && ((Oe = U.slice(0)), X(new W("NEXT_ROUND"))), Te++);
    if (Oe.length) {
      var a = Oe.shift();
      if ((0 != a.id && !Ye) || (0 == a.id && !Ze))
        if ((a.Gq++, !$e && 0 < a.Zf)) {
          var c = bf(a, "pickFight");
          a.Zf--;
          if (c.Hs)
            if (((c = c.value), null === c))
              X(new W("FIGHT", a.id, "NONE")), (a.Zf = 0);
            else if ("object" == typeof c && V.hasOwnProperty(c.id))
              if (((c = V[c.id]), a.id == c.id))
                X(new W("FIGHT", a.id, "SELF")), cf(a);
              else {
                var d = Ve
                  ? c.size - a.size
                  : Math.random() - a.size / (a.size + c.size);
                0.1 > Math.abs(d)
                  ? X(new W("FIGHT", a.id, "TIE", c.id))
                  : 0 > d
                  ? (X(new W("FIGHT", a.id, "WIN", c.id)), cf(c))
                  : (X(new W("FIGHT", a.id, "LOSS", c.id)), cf(a));
              }
            else
              X(new W("EXPLODE", a.id, "pickFight", "Invalid return")), cf(a);
          else X(new W("EXPLODE", a.id, "pickFight", c.Cu)), cf(a);
        } else if (0 < a.wf)
          if (((d = bf(a, "proposeMate")), d.Hs))
            if (((d = d.value), null === d))
              X(new W("MATE", a.id, "NONE")), (a.wf = 0);
            else if ("object" == typeof d && V.hasOwnProperty(d.id)) {
              d = V[d.id];
              if (df(a, d)) {
                for (var e = Ue++, f = 0, h = 0, k = 0, l; (l = U[k]); k++)
                  (f += l.wf), "Female" == l.cc && (h += l.wf);
                e = new Le(
                  e,
                  Math.random() < h / f ? "Male" : "Female",
                  null,
                  a,
                  d
                );
                V[e.id] = e;
                U.unshift(e);
                X(new W("MATE", a.id, "SUCCESS", d.id, e));
                if (50 < Object.keys(V).length) {
                  d = null;
                  for (c in V) if (((e = V[c]), !d || e.Gq > d.Gq)) d = e;
                  X(new W("OVERPOPULATION", d.id));
                  cf(d);
                }
              }
              a.wf--;
            } else
              X(new W("EXPLODE", a.id, "proposeMate", "Invalid return")), cf(a);
          else X(new W("EXPLODE", a.id, "proposeMate", d.Cu)), cf(a);
        else X(new W("RETIRE", a.id)), cf(a);
    }
    ef() && ((Ne = !0), clearTimeout(Pe));
  }
  Ne || (Pe = setTimeout(af, 50));
}
function ef() {
  var a = { pickFight: [], proposeMate: [], acceptMate: [] };
  if (0 == U.length) return X(new W("END_GAME", !1, a)), !0;
  for (
    var c = {
        pickFight: [0, 0, 0, 0],
        proposeMate: [0, 0, 0, 0],
        acceptMate: [0, 0, 0, 0],
      },
      d = 10 < Te,
      e = U[0],
      f = 0,
      h;
    (h = U[f]);
    f++
  ) {
    if (!d && (h.Cd != e.Cd || h.Dd != e.Dd || h.xd != e.xd)) return !1;
    c.pickFight[h.Cd]++;
    c.proposeMate[h.Dd]++;
    c.acceptMate[h.xd]++;
  }
  if (!d)
    return (
      (c = U[0].Cd),
      (f = U[0].Dd),
      (d = U[0].xd),
      a.pickFight.push([c]),
      a.proposeMate.push([f]),
      a.acceptMate.push([d]),
      X(new W("END_GAME", 0 == c && 0 == f && 0 == d, a)),
      !0
    );
  a = { pickFight: [], proposeMate: [], acceptMate: [] };
  d = ["pickFight", "proposeMate", "acceptMate"];
  for (e = 0; e < T.length; e++) {
    f = 0;
    for (var k; (k = d[f]); f++) {
      h = c[k];
      k = a[k];
      for (var l = !1, m = 0; !l && m < k.length; m++) {
        var n = k[m][0];
        h[e] == h[n]
          ? (k[m].push(e), (l = !0))
          : h[e] > h[n] && (k.splice(m, 0, [e]), (l = !0));
      }
      l || k.push([e]);
    }
  }
  X(new W("END_GAME", !1, a));
  return !0;
}
function df(a, c) {
  if (a.id == c.id) return X(new W("MATE", a.id, "SELF")), !1;
  var d = bf(c, "acceptMate", a);
  if (!d.Hs)
    return (
      X(new W("MATE", a.id, "MATE_EXPLODED", c.id)),
      X(new W("EXPLODE", c.id, "acceptMate", d.Cu)),
      cf(c),
      !1
    );
  if (!d.value) return X(new W("MATE", a.id, "REJECTION", c.id)), !1;
  c.wf--;
  return a.cc == c.cc
    ? (X(new W("MATE", a.id, "INCOMPATIBLE", c.id)), !1)
    : 0 > c.wf
    ? (X(new W("MATE", a.id, "INFERTILE", c.id)), !1)
    : !0;
}
function cf(a) {
  var c = U.indexOf(a);
  -1 != c && U.splice(c, 1);
  c = Oe.indexOf(a);
  -1 != c && U.splice(c, 1);
  delete V[a.id];
}
function bf(a, c, d) {
  switch (c) {
    case "pickFight":
      var e = a.Cd;
      break;
    case "proposeMate":
      e = a.Dd;
      break;
    case "acceptMate":
      e = a.xd;
  }
  var f = T[e].name,
    h = T[e].code;
  if ("function" == typeof h) h = T[e].JG;
  else if ("string" != typeof h)
    throw Error('Mouse "' + f + '" has invalid code: ' + h);
  try {
    var k =
      "object" == typeof Babel
        ? Babel.transform(h, { presets: ["es2015"] }).code
        : void 0;
    h = k || h;
  } catch (m) {
    throw (alert(m), Error('Mouse "' + f + '" has error in code:\n' + m));
  }
  try {
    var l = new Interpreter(h, ff.bind(null, a, d));
    switch (c) {
      case "pickFight":
        l.appendCode("proposeMate = null;");
        l.appendCode("acceptMate = null;");
        l.appendCode("pickFight();");
        break;
      case "proposeMate":
        l.appendCode("pickFight = null;");
        l.appendCode("acceptMate = null;");
        l.appendCode("proposeMate();");
        break;
      case "acceptMate":
        l.appendCode("pickFight = null;"),
          l.appendCode("proposeMate = null;"),
          l.appendCode("acceptMate(getSuitor());");
    }
  } catch (m) {
    l = new Interpreter("throw SyntaxError('" + c + "')", ff.bind(null, a, d));
  }
  a = l;
  c = {};
  try {
    for (d = 1e5; a.step(); ) if (0 >= d--) throw Infinity;
    c.Hs = !0;
    c.value = a.pseudoToNative(a.value);
  } catch (m) {
    (c.Cu = Infinity == m ? "Timeout" : m), (c.Hs = !1);
  }
  return c;
}
function ff(a, c, d, e) {
  for (
    var f = void 0, h = d.ARRAY, k = d.createObject(d.ARRAY), l = 0, m = 0, n;
    (n = U[m]);
    m++
  ) {
    var p = d.nativeToPseudo({
      pickFightOwner: n.Cd,
      proposeMateOwner: n.Dd,
      acceptMateOwner: n.xd,
      sex: n.cc,
      size: n.size,
      startAggressiveness: n.rp,
      aggressiveness: n.Zf,
      startFertility: n.sp,
      fertility: n.wf,
      age: n.Gq,
      id: n.id,
    });
    n.id == a.id
      ? (f = p)
      : (d.setProperty(k, l++, p), c && n.id == c.id && (h = p));
  }
  d.setProperty(
    e,
    "getSelf",
    d.createNativeFunction(function () {
      return f;
    })
  );
  d.setProperty(
    e,
    "getMice",
    d.createNativeFunction(function () {
      return k;
    })
  );
  h &&
    d.setProperty(
      e,
      "getSuitor",
      d.createNativeFunction(function () {
        return h;
      })
    );
  a = d.nativeToPseudo(Me);
  d.setProperty(e, "Sex", a);
  if ((a = d.getProperty(e, "Math")))
    (e = function (r, y) {
      return Math.floor(Math.random() * (y - r + 1)) + r;
    }),
      d.setProperty(a, "randomInt", d.createNativeFunction(e));
}
function gf(a) {
  function c() {
    var f = 400 + 100 * Math.random();
    hf || e.qe || jf(e, f);
    e.Fn[0] = setTimeout(c, f);
  }
  this.id = a.id;
  this.cc = a.cc;
  this.size = a.size;
  this.Cd = a.Cd;
  this.Dd = a.Dd;
  this.xd = a.xd;
  this.element = g.g.o.M("svg", { id: "mouse" + a.id, class: "mouse" }, null);
  this.element.style.transformOrigin = "20px 20px";
  var d = g.g.o.M(
    "clipPath",
    { id: "mouse" + a.id + "ClipPath" },
    this.element
  );
  g.g.o.M("rect", { width: "40px", height: "60px" }, d);
  this.xo = g.g.o.M(
    "image",
    {
      width: "120px",
      height: "120px",
      "clip-path": "url(#mouse" + a.id + "ClipPath)",
    },
    this.element
  );
  "Female" == this.cc && this.xo.setAttribute("y", "-60px");
  this.xo.setAttributeNS(g.g.o.Yf, "xlink:href", "genetics/mouse.png");
  a = 7.5 * (1 + 0.5 * Math.sqrt(3)) + 12.5;
  d = 7.5 * (1 - 0.5 * Math.sqrt(3)) + 12.5;
  g.g.o.M(
    "path",
    {
      fill: kf[this.Dd],
      d: "M 20 28.5 A 7.5 7.5, 0, 0, 1, " + a + " 39.75 L 20 36 Z",
    },
    this.element
  );
  g.g.o.M(
    "path",
    {
      fill: kf[this.Cd],
      d: "M " + a + " 39.75 A 7.5 7.5, 0, 0, 1, " + d + " 39.75 L 20 36 Z",
    },
    this.element
  );
  g.g.o.M(
    "path",
    {
      fill: kf[this.xd],
      d: "M " + d + " 39.75 A 7.5 7.5, 0, 0, 1, 20 28.5 L 20 36 Z",
    },
    this.element
  );
  this.$u = 2 * Math.random() * Math.PI;
  this.qe = !0;
  this.Fn = [0, 0];
  var e = this;
  c();
}
var lf = 0,
  hf = !1;
gf.prototype.setDirection = function (a) {
  a %= 2 * Math.PI;
  0 > a && (a += 2 * Math.PI);
  var c = this.$u - a;
  if (Math.abs(c) > Math.PI / 10) {
    var d = this.xo,
      e = function () {
        d.setAttribute("x", "0px");
      };
    0 < c
      ? (this.xo.setAttribute("x", "-40px"), setTimeout(e, 150))
      : 0 > c && (this.xo.setAttribute("x", "-80px"), setTimeout(e, 150));
  }
  this.element.style.transform = "rotate(" + (a + Math.PI / 2) + "rad)";
  this.$u = a;
};
gf.prototype.stop = function () {
  for (var a = 0; a < this.Fn.length; a++) clearTimeout(this.Fn[a]);
  mf(this);
  this.element.style.animation = "";
};
function mf(a) {
  var c = window.getComputedStyle(a.element),
    d = c.left;
  a.element.style.top = c.top;
  a.element.style.left = d;
  a.element.style.transition = "";
}
gf.prototype.move = function (a, c, d, e) {
  var f = g.g.Ic.nf(a, 0, lf - 40),
    h = g.g.Ic.nf(c, 0, lf - 40),
    k = parseInt(this.element.style.left, 10),
    l = parseInt(this.element.style.top, 10),
    m = f - k,
    n = h - l;
  e = null != e ? e : Math.hypot(Math.abs(m), Math.abs(n)) / 0.07;
  10 > e || (1 > Math.abs(m) && 1 > Math.abs(n))
    ? ((this.element.style.left = f + "px"),
      (this.element.style.top = h + "px"),
      this.setDirection(Math.atan2(c - l, a - k)))
    : (this.setDirection(Math.atan2(n, m)),
      (this.element.style.transition =
        "top " + e + "ms linear, left " + e + "ms linear"),
      (this.element.style.left = f + "px"),
      (this.element.style.top = h + "px"));
  this.Fn[1] = setTimeout(d, e);
};
function jf(a, c) {
  var d = Math.PI / 2;
  d = a.$u + Math.random() * d - d / 2;
  var e = 0.05 * c;
  a.move(
    parseInt(a.element.style.left, 10) + Math.cos(d) * e,
    parseInt(a.element.style.top, 10) + Math.sin(d) * e,
    function () {},
    c
  );
}
gf.prototype.xf = function (a) {
  a ? nf(this, this.xf.bind(this)) : (this.qe = !1);
};
function nf(a, c) {
  function d() {
    var f = 400 + 100 * Math.random();
    jf(a, f);
    3 > ++e ? (a.Fn[1] = setTimeout(d, f)) : c();
  }
  var e = 0;
  d();
}
var of = {},
  pf,
  kf = ["#ff8b00", "#c90015", "#166c0b", "#223068"],
  qf = !0,
  rf = !0,
  sf = null,
  tf = {},
  uf = !1,
  vf = null,
  wf = null,
  xf = null,
  yf = null,
  zf = null,
  Af = {},
  Bf = [],
  Cf = [],
  Df = [],
  Ef = 0;
function Ff() {
  function a(f) {
    return function () {
      if (!g.g.o.to(c[f], "tab-disabled")) {
        for (var h = 0; h < c.length; h++)
          f == h
            ? g.g.o.Fa(c[h], "tab-selected")
            : g.g.o.Vb(c[h], "tab-selected");
        e(f);
      }
    };
  }
  lf = 400;
  var c = Array.prototype.slice.call(
    document.querySelectorAll("#vizTabbar>.tab")
  );
  if (c.length) {
    for (var d = 0; d < c.length; d++) Nd(c[d], a(d));
    var e = function (f) {
      for (var h = ["displayContent", "charts"], k = 0, l; (l = h[k]); k++) {
        var m = document.getElementById(l);
        "displayContent" == l
          ? (m.style.visibility = k == f ? "visible" : "hidden")
          : ((uf = k == f),
            k == f && Gf(),
            (m.style.display = k == f ? "block" : "none"));
      }
    };
    e(0);
    Hf();
  }
  zf = document.getElementById("display");
}
function Hf() {
  setTimeout(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "https://www.gstatic.com/charts/loader.js";
    a.addEventListener("load", If);
    document.head.appendChild(a);
  }, 1);
}
function If() {
  if ("object" != typeof google)
    throw Error('Loaded Google Charts API, but no "google" object.');
  google.charts.load("current", { packages: ["corechart"] });
  google.charts.setOnLoadCallback(function () {
    function a() {
      this.colors = kf;
      this.isStacked = "relative";
      this.lineWidth = 0;
      this.areaOpacity = 0.8;
      this.vAxis.maxValue = 1;
    }
    function c() {
      this.hAxis = {
        title: "Time",
        titleTextStyle: { color: "#333" },
        format: "0",
      };
      this.vAxis = { minValue: 0 };
      this.chartArea = { left: "8%", top: "8%", width: "60%", height: "70%" };
      this.backgroundColor = "white";
    }
    a.prototype = new c();
    var d = new c(),
      e = new a(),
      f = new a(),
      h = new a();
    d.title = "Population";
    d.colors = ["#ADD8E6", "#FFB5C1"];
    d.isStacked = !0;
    d.vAxis.maxValue = 50;
    vf = new google.visualization.ChartWrapper({
      chartType: "AreaChart",
      options: d,
      containerId: "populationChart",
    });
    e.title = "Pick Fight";
    wf = new google.visualization.ChartWrapper({
      chartType: "AreaChart",
      options: e,
      containerId: "pickFightChart",
    });
    f.title = "Propose Mate";
    xf = new google.visualization.ChartWrapper({
      chartType: "AreaChart",
      options: f,
      containerId: "proposeMateChart",
    });
    h.title = "Accept Mate";
    yf = new google.visualization.ChartWrapper({
      chartType: "AreaChart",
      options: h,
      containerId: "acceptMateChart",
    });
    Jf();
    vf.draw();
    wf.draw();
    xf.draw();
    yf.draw();
    g.g.o.Vb(document.querySelectorAll("#vizTabbar>.tab")[1], "tab-disabled");
  });
}
function Jf() {
  if (vf) {
    vf.setDataTable(
      google.visualization.arrayToDataTable(
        [
          [
            { label: "Time", type: "number" },
            { label: "Male", type: "number" },
            { label: "Female", type: "number" },
          ],
        ],
        !1
      )
    );
    for (var a = [{ label: "Time", type: "number" }], c = 0, d; (d = T[c]); c++)
      a.push({ label: d.name, type: "number" });
    wf.setDataTable(google.visualization.arrayToDataTable([a], !1));
    xf.setDataTable(google.visualization.arrayToDataTable([a], !1));
    yf.setDataTable(google.visualization.arrayToDataTable([a], !1));
    Kf = !0;
  }
}
function Lf() {
  clearTimeout(Ef);
  qf = !0;
  for (var a in tf) tf[a].stop();
}
function Mf() {
  Lf();
  uf = !1;
  Nf = Of = 0;
  tf = {};
  Af.Male = 0;
  Af.Female = 0;
  Bf.length = 0;
  Cf.length = 0;
  for (var a = (Df.length = 0); a < T.length; a++)
    Bf.push(0), Cf.push(0), Df.push(0);
  Jf();
  Pf.length = 0;
  a = document.getElementById("playerNameRow");
  for (
    var c = document.getElementById("playerStatRow"), d = 0, e;
    (e = T[d]);
    d++
  ) {
    var f = kf[d],
      h = a.cells[d];
    h.style.borderColor = f;
    e = e.name;
    h.title = e;
    h.style.background = f;
    e = document.createTextNode(e);
    h.innerHTML = "";
    h.appendChild(e);
    h = c.cells[d];
    h.style.borderColor = f;
    e = {};
    var k = h.getElementsByClassName("pickFightStat")[0];
    k && ((k.style.background = f), (k.style.width = 0), (e.pickFightDiv = k));
    if ((k = h.getElementsByClassName("proposeMateStat")[0]))
      (k.style.background = f), (k.style.width = 0), (e.proposeMateDiv = k);
    if ((k = h.getElementsByClassName("acceptMateStat")[0]))
      (k.style.background = f), (k.style.width = 0), (e.acceptMateDiv = k);
    e.td = h;
    Pf.push(e);
  }
  zf.innerHTML = "";
}
function Qf() {
  if (!qf) {
    if (rf) {
      var a = !0;
      for (c in tf)
        if (tf[c].qe) {
          a = !1;
          break;
        }
      if (a) {
        Lf();
        if (sf) {
          a = { pickFight: "", proposeMate: "", acceptMate: "" };
          var c = ["pickFight", "proposeMate", "acceptMate"];
          for (var d = 0; d < c.length; d++)
            for (var e = c[d], f = sf[e][0], h = 0; f && h < f.length; h++)
              a[e] += T[f[h]].name + " ";
          Y(
            "Game ended with: PickFight Winners: " +
              a.pickFight +
              " proposeMate Winners: " +
              a.proposeMate +
              " acceptMate Winners: " +
              a.acceptMate
          );
        }
        pf
          ? (window.localStorage && (window.localStorage["genetics" + N] = ""),
            P.XG(),
            Y("Level Succeeded"))
          : sf || Y("Level Failed");
        return;
      }
    } else {
      for (; Nf < Qe.length; ) {
        c = Re ? Qe[Nf++] : Qe.shift();
        a = void 0 !== c.ID ? tf[c.ID] : null;
        if (void 0 === a) throw Error("Event has no mouse.");
        d = void 0 !== c.OPT_OPPONENT ? tf[c.OPT_OPPONENT] : null;
        e = void 0 !== c.OPT_PARTNER ? tf[c.OPT_PARTNER] : null;
        if ((a && a.qe) || (d && d.qe) || (e && e.qe)) {
          of.PN ? Nf-- : Qe.unshift(c);
          break;
        }
        switch (c.TYPE) {
          case "ADD":
            a = Rf(c.MOUSE);
            Sf(
              a,
              400 * Math.random() - 40,
              400 * Math.random() - 40,
              !1,
              a.xf.bind(a)
            );
            break;
          case "START_GAME":
            Y("Starting game with " + T.length + " players.");
            break;
          case "NEXT_ROUND":
            Of++;
            break;
          case "FIGHT":
            Tf(c, a, d);
            break;
          case "MATE":
            Uf(c, a, e);
            break;
          case "RETIRE":
            Vf(a, "RETIRE");
            Y(Z(a) + " dies after a productive life.");
            break;
          case "OVERPOPULATION":
            Vf(a, "OVERPOPULATION");
            Y(
              "Cage has gotten too cramped " +
                Z(a) +
                " can't compete with the younger mice and dies."
            );
            break;
          case "EXPLODE":
            d = c.SOURCE;
            c = c.CAUSE;
            Vf(a, "EXPLOSION");
            Y(Z(a) + " exploded in " + d + ' because "' + c + '"');
            break;
          case "END_GAME":
            rf = !0;
            pf = c.IS_SUCCESS;
            sf = c.OPT_RANKINGS;
            break;
          default:
            throw Error("unhandled visualization event " + JSON.stringify(c));
        }
      }
      Gf();
    }
    Ef = setTimeout(Qf, 50);
  }
}
var Kf = !0,
  Pf = [];
function Wf() {
  for (var a = Af.Male + Af.Female, c = 0; c < Pf.length; c++) {
    var d = Pf[c],
      e = (100 * Bf[c]) / a || 0;
    d.pickFightDiv && (d.pickFightDiv.style.width = e + "%");
    var f = (100 * Cf[c]) / a || 0;
    d.proposeMateDiv && (d.proposeMateDiv.style.width = f + "%");
    var h = (100 * Df[c]) / a || 0;
    d.acceptMateDiv && (d.acceptMateDiv.style.width = h + "%");
    d.td.title =
      "pickFight " +
      Math.round(100 * e) / 100 +
      "%\nproposeMate " +
      Math.round(100 * f) / 100 +
      "%\nacceptMate " +
      Math.round(100 * h) / 100 +
      "%";
  }
}
function Gf() {
  Kf && uf && (vf.draw(), wf.draw(), xf.draw(), yf.draw(), (Kf = !1));
}
var Of = 0,
  Nf = 0;
function Tf(a, c, d) {
  var e = a.RESULT;
  "NONE" == e
    ? ((c.qe = !0),
      Xf(c, "genetics/peace.png", 40, 1e3, function () {
        Y(Z(c) + " elected to never fight again.");
        c.xf();
      }))
    : ((a = function () {
        c.xf();
        "SELF" != e && d.xf();
      }),
      (c.qe = !0),
      "SELF" == e
        ? Yf(c, c, e, a)
        : ((d.qe = !0), Zf(c, d, Yf.bind(null, c, d, e, a))));
}
var $f = !0;
function Uf(a, c, d) {
  var e = a.RESULT;
  if ("NONE" == e) Y(Z(c) + " elected to never mate again.");
  else if ("SELF" == e)
    (c.qe = !0),
      Xf(c, "genetics/heart.png", 40, 1e3, function () {
        Y(Z(c) + " caught trying to mate with itself.");
        c.xf();
      });
  else if ("MATE_EXPLODED" == e)
    Y(Z(d) + " exploded after " + Z(c) + " asked it out.");
  else if ("REJECTION" == e) {
    var f =
        (parseInt(c.element.style.left, 10) +
          parseInt(d.element.style.left, 10)) /
          2 +
        20,
      h =
        (parseInt(c.element.style.top, 10) +
          parseInt(d.element.style.top, 10)) /
          2 +
        20;
    c.qe = !0;
    d.qe = !0;
    Zf(
      c,
      d,
      Xf.bind(null, c, "genetics/broken-heart.png", 40, 1e3, function () {
        Y(Z(c) + " asked " + Z(d) + " to mate, the answer is NO!");
        c.xf($f);
        d.xf($f);
      })
    );
  } else {
    Y(Z(c, !0, !0) + " asked " + Z(d, !0, !0) + " to mate, the answer is YES!");
    f =
      (parseInt(c.element.style.left, 10) +
        parseInt(d.element.style.left, 10)) /
        2 +
      20;
    h =
      (parseInt(c.element.style.top, 10) + parseInt(d.element.style.top, 10)) /
        2 +
      20;
    if ("SUCCESS" == e) {
      var k = Rf(a.OPT_OFFSPRING);
      var l = "genetics/heart.png";
    } else if ("INCOMPATIBLE" == e) {
      var m = Z(c) + " mated with " + Z(d) + ", another " + c.cc + ".";
      l = "genetics/rainbow-heart.png";
    } else
      "INFERTILE" == e &&
        ((m =
          "Mating between " +
          Z(c) +
          " and " +
          Z(d) +
          " failed because " +
          Z(d) +
          " is sterile."),
        (l = "genetics/grey-heart.png"));
    c.qe = !0;
    d.qe = !0;
    Zf(
      c,
      d,
      ag.bind(null, l, f, h, 50, 700, function () {
        "SUCCESS" == e ? Sf(k, f, h, !0, k.xf.bind(k)) : Y(m);
        c.xf($f);
        d.xf($f);
      })
    );
  }
}
function bg() {
  if (vf) {
    vf.getDataTable().addRow([Of, Af.Male, Af.Female]);
    for (var a = [Of], c = [Of], d = [Of], e = 0; e < T.length; e++)
      a.push(Bf[e]), c.push(Cf[e]), d.push(Df[e]);
    wf.getDataTable().addRow(a);
    xf.getDataTable().addRow(c);
    yf.getDataTable().addRow(d);
    Kf = !0;
  }
}
function Z(a, c, d) {
  var e = "Monica Danielle Zena Brianna Katie Lacy Leela Suzy Saphira Missie Flo Lisa".split(
      " "
    ),
    f = "Neil Chris Charlie Camden Rick Dean Xavier Zeke Han Samuel Wade Patrick".split(
      " "
    ),
    h = "(" + T[a.Dd].name + "/" + T[a.xd].name + "/" + T[a.Cd].name + ")",
    k = "[id:" + a.id + "/size:" + a.size + "/sex: " + a.cc + "]";
  f = "Female" == a.cc ? e : f;
  e = f[a.id % f.length || 0];
  a = Math.floor(a.id / f.length) + 1;
  if (1 < a) {
    f = "M CM D CD C XC L XL X IX V IV I".split(" ");
    var l = [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    if (!(0 >= a || 4e3 <= a)) {
      for (var m = "", n = 0; n < f.length; n++)
        for (; a >= l[n]; ) (a -= l[n]), (m += f[n]);
      a = m;
    }
    e += " " + a;
  }
  d && (e += " " + h);
  c && (e += " " + k);
  return e;
}
function Vf(a, c) {
  a.stop();
  zf.removeChild(a.element);
  delete tf[a.id];
  if ("FIGHT" != c) {
    var d = parseInt(a.element.style.left) + 20,
      e = parseInt(a.element.style.top) + 20;
    "EXPLOSION" == c
      ? ag("genetics/explode.png", d, e, 40, 1e3)
      : "OVERPOPULATION" == c
      ? ag("genetics/kickedOut.png", d, e, 40, 1e3)
      : ag("genetics/retire.png", d, e, 40, 1e3);
  }
  Af[a.cc]--;
  Bf[a.Cd]--;
  Cf[a.Dd]--;
  Df[a.xd]--;
  bg();
  Wf();
}
function Zf(a, c, d) {
  function e() {
    if (p) {
      var r = Math.atan2(l - n, k - m);
      a.setDirection(r);
      c.setDirection(r + Math.PI);
      d();
    }
    p = !0;
  }
  var f = parseInt(a.element.style.left, 10),
    h = parseInt(a.element.style.top, 10),
    k = (f + parseInt(c.element.style.left, 10)) / 2,
    l = (h + parseInt(c.element.style.top, 10)) / 2;
  h = Math.atan2(h - l, f - k);
  f = 20 * Math.cos(h);
  h = 20 * Math.sin(h);
  var m = k + f,
    n = l + h;
  f = k - f;
  h = l - h;
  var p = !1;
  a.move(m, n, e);
  c.move(f, h, e);
}
function Yf(a, c, d, e) {
  function f(l) {
    l.target == h &&
      (h.removeEventListener("animationend", f, !1),
      (a.element.style.display = ""),
      (c.element.style.display = ""),
      "WIN" == d
        ? (Y(Z(a) + " fights and kills " + Z(c) + "."), Vf(c, "FIGHT"))
        : "LOSS" == d
        ? (Y(Z(a) + " fights and is killed by " + Z(c) + "."), Vf(a, "FIGHT"))
        : "TIE" == d
        ? Y(Z(a) + " fights " + Z(c) + " to a draw.")
        : (Vf(a, "FIGHT"),
          Y(
            Z(a) +
              " chose itself when asked whom to fight with. " +
              Z(a) +
              " is being executed to put it out of its misery."
          )),
      h.parentNode.removeChild(h),
      e());
  }
  var h = document.getElementById("dust").cloneNode(!0),
    k =
      (parseInt(a.element.style.left, 10) +
        parseInt(c.element.style.left, 10)) /
        2 +
      20 -
      25;
  h.style.top =
    (parseInt(a.element.style.top, 10) + parseInt(c.element.style.top, 10)) /
      2 +
    20 -
    25 +
    "px";
  h.style.left = k + "px";
  h.addEventListener("animationend", f, !1);
  zf.appendChild(h);
  a.element.style.display = "none";
  c.element.style.display = "none";
}
function Sf(a, c, d, e, f) {
  function h(k) {
    k.target == a.element &&
      (e ? Y(Z(a, !0, !0) + " was born!") : Y(Z(a, !0, !0) + " added to game."),
      Af[a.cc]++,
      Bf[a.Cd]++,
      Cf[a.Dd]++,
      Df[a.xd]++,
      e && bg(),
      Wf(),
      (a.element.style.animationName = "none"),
      a.element.removeEventListener("animationEnd", h, !1),
      f());
  }
  d = g.g.Ic.nf(d - 20, 0, 355);
  a.element.style.left = g.g.Ic.nf(c - 20, 0, 360) + "px";
  a.element.style.top = d + "px";
  a.element.addEventListener("animationend", h, !1);
  a.element.style.animation = "bounceIn 500ms";
  a.element.style.display = "block";
}
function Xf(a, c, d, e, f) {
  mf(a);
  ag(
    c,
    parseInt(a.element.style.left, 10) + 20,
    parseInt(a.element.style.top, 10) + 20,
    d,
    e,
    f
  );
}
function ag(a, c, d, e, f, h) {
  var k = document.createElement("img");
  k.src = a;
  k.style.width = e + "px";
  k.style.height = e + "px";
  k.style.position = "absolute";
  k.style.left = c - e / 2 + "px";
  k.style.top = d - e / 2 + "px";
  k.addEventListener(
    "animationend",
    function (l) {
      l.target == k && (k.parentNode.removeChild(k), h && h());
    },
    !1
  );
  k.style.animation = "bounceIn " + f + "ms";
  zf.appendChild(k);
}
function Rf(a) {
  a = new gf(a);
  tf[a.id] = a;
  a.element.style.display = "none";
  zf.appendChild(a.element);
  return a;
}
var cg = cg || {};
function dg(a, c) {
  function d() {}
  d.prototype = c.prototype;
  a.A = c.prototype;
  a.prototype = new d();
  a.prototype.constructor = a;
  a.CN = function (e, f, h) {
    return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2));
  };
}
if (!eg) {
  var eg,
    fg = "";
  "undefined" !== typeof navigator &&
    navigator &&
    "string" == typeof navigator.userAgent &&
    (fg = navigator.userAgent);
  var gg = 0 == fg.indexOf("Opera");
  eg = {
    YN: { VL: "ScriptEngine" in window },
    GM: gg,
    df: !gg && -1 != fg.indexOf("MSIE"),
    Wz: !gg && -1 != fg.indexOf("WebKit"),
  };
}
if (!hg) var hg = {};
if (!ig) var ig = {};
if (!jg) var jg = {};
if (!kg) var kg = {};
if (!lg) var lg = {};
if (!mg) var mg = {};
var ng = cg.pL ? { eO: !0 } : {};
function og() {
  throw Error("Do not instantiate directly");
}
og.prototype.CA = null;
og.prototype.toString = function () {
  return this.content;
};
function pg(a) {
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
function qg() {
  og.call(this);
}
dg(qg, og);
qg.prototype.$G = ng;
function rg(a) {
  return null != a && a.$G === ng
    ? a
    : sg(String(String(a)).replace(tg, ug), pg(a));
}
var sg = (function (a) {
    function c() {}
    c.prototype = a.prototype;
    return function (d, e) {
      var f = new c();
      f.content = String(d);
      void 0 !== e && (f.CA = e);
      return f;
    };
  })(qg),
  vg = {
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
function ug(a) {
  return vg[a];
}
var tg = /[\x00\x22\x26\x27\x3c\x3e]/g;
function wg() {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
}
function xg() {
  var a =
    '<table width="100%"><tr><td><h1><span id="title">' +
    ((Fd
      ? '<a href="index.html?lang=' + rg(Dd) + '">'
      : '<a href="./?lang=' + rg(Dd) + '">') +
      "Codekid</a> : " +
      rg("Genetics") +
      "</span>");
  if (N) {
    var c = "";
    for (var d = " &nbsp; ", e = 11, f = 1; f < e; f++) {
      var h = "?lang=" + rg(Dd) + "&level=" + rg(f) + (c ? "&" + rg(c) : "");
      d +=
        " " +
        (f == N
          ? '<span class="level_number level_done" id="level' +
            rg(f) +
            '">' +
            rg(f) +
            "</span>"
          : 10 == f
          ? '<a class="level_number" id="level' +
            rg(f) +
            '" href="' +
            rg(h) +
            '">' +
            rg(f) +
            "</a>"
          : '<a class="level_dot" id="level' +
            rg(f) +
            '" href="' +
            rg(h) +
            '"></a>');
    }
    c = d;
  } else c = "";
  a =
    a +
    c +
    '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="helpButton">Help</button></td></tr></table>';
  c =
    '<div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>' +
    wg() +
    "</div>";
  d =
    '<div id="visualization">' +
    (9 <= N
      ? '<div id="vizTabbar" class="tab-bar"><div class="tab tab-selected">Visualization</div><div class="tab tab-disabled">Charts</div></div><div class="tab-bar-clear"></div>'
      : "") +
    '</style><div id="gameElements" style="display:none;"><div id="dust" class="dust"><div class="cloud cloud1"></div><div class="cloud cloud2"></div><p class="star1">&#9734;</p><p class="star2">&#9734;</p><p class="star3">&#9734;</p><p class="star4">&#9734;</p></div></div><div class="vizTabContent"><div id="displayContent"><div id="display"></div></div>' +
    (9 <= N
      ? '<div id="charts"><div id="populationChart"></div><div id="pickFightChart"></div><div id="proposeMateChart"></div><div id="acceptMateChart"></div></div>'
      : "") +
    '</div></div><table class="playerStatTable"><tbody><tr id="playerNameRow">';
  for (e = 0; 4 > e; e++) d += '<td class="playerStatName"></td>';
  d += '<tr id="playerStatRow">';
  for (e = 0; 4 > e; e++)
    d +=
      '<td><div class="mouseFunctionIcons"></div><div class="pickFightStat"></div>' +
      (5 <= N
        ? '<div class="proposeMateStat"></div>' +
          (7 <= N ? '<div class="acceptMateStat"></div>' : "")
        : "") +
      "</td>";
  return (
    '<div style="display: none"><span id="Games_name">Codekid</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Genetics_tutorEnemy">Enemy</span><span id="Genetics_simpleName">Simple</span><span id="Genetics_aggressiveName">Aggressive</span><span id="Genetics_highBreedingName">High Breeding</span><span id="Genetics_variantName">Variant</span><span id="Genetics_myName">Player</span><span id="Genetics_getMiceTooltip">Returns all other alive mice in the game.</span><span id="Genetics_getSelfTooltip">Returns the mouse making the decision.</span><span id="Genetics_pickFightTooltip">Defines the function for picking a mouse to fight against.</span><span id="Genetics_proposeMateTooltip">Defines the function for choosing a mouse to mate with.</span><span id="Genetics_acceptMateTooltip">Defines the function for the answer to a mate request.</span><span id="Genetics_sizeTooltip">Reports the size of the specified mouse.</span><span id="Genetics_aggressivenessTooltip">Reports the aggressiveness of the specified mouse.</span><span id="Genetics_fertilityTooltip">Reports the fertility of the specified mouse.</span><span id="Genetics_startFertilityTooltip">Reports the starting fertility of the specified mouse.</span><span id="Genetics_sexTooltip">Reports the sex of the specified mouse.</span><span id="Genetics_ageTooltip">Reports the age of the specified mouse.</span><span id="Genetics_idTooltip">Reports the id of the specified mouse.</span><span id="Genetics_pickFightOwnerTooltip">Reports the owner of the pickFight function of the specified mouse.</span><span id="Genetics_proposeMateOwnerTooltip">Reports the owner of the proposeMate function of the specified mouse.</span><span id="Genetics_acceptMateOwnerTooltip">Reports the owner of the acceptMate function of the specified mouse.</span></div>' +
    a +
    (d +
      '</tr></tbody></table><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><button id="docsButton" title="Display the language documentation.">Documentation</button></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><div id="dialogDocs" style="display: none"><img src="common/1x1.gif" class="close icon21" id="closeDocs"><iframe id="frameDocs"></iframe></div>') +
    (8 < N
      ? '<div id="tabarea"><div id="editorBar" class="tab-bar"><div class="tab tab-selected">Blocks</div><div class="tab">JavaScript</div></div><div class="tab-bar-clear"></div>'
      : "") +
    (8 < N || 1 == N % 2 ? '<div id="blockly"></div>' : "") +
    (8 < N || 0 == N % 2 ? '<div id="editor"></div>' : "") +
    (8 < N ? "</div>" : "") +
    ('<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Genetics"><block type="genetics_getMice"></block>' +
      (4 <= N ? '<block type="genetics_getSelf"></block>' : "") +
      (3 <= N ? '<block type="genetics_getProperties"></block>' : "") +
      (9 <= N ? '<block type="genetics_sex"></block>' : "") +
      '</category><category name="Lists">' +
      (9 <= N
        ? '<block type="lists_create_with"><mutation items="0"></mutation></block>'
        : "") +
      (2 <= N ? '<block type="lists_length"></block>' : "") +
      '<block type="lists_getIndex"><value name="VALUE"><shadow type="genetics_getMice"></shadow></value><value name="AT"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>' +
      (9 <= N
        ? '<block type="lists_setIndex"><value name="AT"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block>'
        : "") +
      "</category>" +
      (3 <= N
        ? '<category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block>' +
          (7 <= N ? '<block type="logic_boolean"></block>' : "") +
          (9 <= N ? '<block type="logic_negate"></block>' : "") +
          '<block type="logic_null"></block></category><category name="Loops"><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="TO"><shadow type="lists_length"><value name="VALUE"><shadow type="genetics_getMice"></shadow></value></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_flow_statements"></block></category>'
        : "") +
      '<category name="Math"><block type="math_number"></block>' +
      (2 <= N
        ? '<block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>'
        : "") +
      (9 <= N
        ? '<block type="genetics_math_randomInt"><value name="MIN_VALUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="MAX_VALUE"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_random_float"></block>'
        : "") +
      "</category>" +
      (3 <= N
        ? '<sep></sep><category name="Variables" custom="VARIABLE"></category>'
        : "") +
      (9 <= N
        ? '<category name="Functions" custom="PROCEDURE"></category>'
        : "") +
      '</xml>\n<div id="playerTutor" style="display: none">\n/* Tutor player */\nvar suitor;\nfunction pickFight() {\n  return null;\n}\nfunction proposeMate() {\n  var mice = getMice();\n  for (var i = 0, mouse; (mouse = mice[i]); i++) {\n    if (mouse.id == 0) {\n      return mouse;\n    }\n  }\n  // Should not get here.\n  return null;\n}\nfunction acceptMate(suitor) {\n  return true;\n}\n</div>\n\n<div id="playerSimple" style="display: none">\n/* Simple player */\nvar suitor;\nfunction pickFight() {\n  var mice = getMice();\n  var opponent = mice[Math.randomInt(0,mice.length-1)];\n  return opponent;\n}\nfunction proposeMate() {\n  var mice = getMice();\n  var mate = mice[Math.randomInt(0,mice.length-1)];\n  return mate;\n}\nfunction acceptMate(suitor) {\n  return true;\n}\n</div>\n\n<div id="playerAggressive" style="display: none">\n/* Aggressive player */\nvar suitor;\nfunction pickFight() {\n  var targetOwner = getSelf().pickFightOwner;\n  var mice = getMice();\n  // Choose the biggest opponent, smaller than itself.\n  var opponent = null;\n  for(var i = 0; i < mice.length; i++) {\n    var mouse = mice[i];\n    // Check that mouse is smaller than self and doesn\'t share function owner.\n    if (mouse.size < getSelf().size && mouse.pickFightOwner != targetOwner &&\n        mouse.proposeMateOwner != targetOwner && mouse.acceptMateOwner != targetOwner) {\n      // Set opponent choice if opponent is biggest we have seen.\n      if (!opponent || mouse.size > opponent.size) {\n        opponent = mouse;\n      }\n    }\n  }\n  return opponent;\n}\nfunction proposeMate() {\n  var mice = getMice();\n  // Choose the biggest valid mate.\n  var mate = null;\n  for(var i = 0; i < mice.length; i++) {\n    var mouse = mice[i];\n    // Check that potential mate is valid.\n    if (mouse != getSelf() && mouse.sex != getSelf().sex && mouse.fertility > 0) {\n      // Set mate choice if new mate is biggest we have seen.\n      if (!mate || mouse.size > mate.size) {\n        mate = mouse;\n      }\n    }\n  }\n  return mate;\n}\nfunction acceptMate(suitor) {\n  return suitor.proposeMateOwner == getSelf().acceptMateOwner ||\n      suitor.sex != getSelf().sex && suitor.size > getSelf().size;\n}\n</div>\n\n<div id="playerHighBreeding" style="display: none">\n/* High Breeding player */\nvar suitor;\nfunction pickFight() {\n  // Always choose not to fight.\n  return null;\n}\nfunction proposeMate() {\n  var mice = getMice();\n  // Choose the mate with the highest fertility gene.\n  var mate = null;\n  for(var i = 0; i < mice.length; i++) {\n    var mouse = mice[i];\n    // Check that potential mate is valid.\n    if (mouse != getSelf() && mouse.sex != getSelf().sex && mouse.fertility > 0) {\n      // Change mate choice if new mate would pass on higher fertility.\n      if (!mate || mouse.startingFertility > mate.startingFertility) {\n        mate = mouse;\n      }\n    }\n  }\n  return mate;\n}\nfunction acceptMate(suitor) {\n    return suitor.proposeMateOwner == getSelf().acceptMateOwner ||\n        suitor.sex != getSelf().sex && suitor.startingFertility > getSelf().startingFertility;\n}\n</div>\n<div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div>') +
    c +
    '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' +
    (1 == N
      ? "Use getMice() to get the list of other mice in the game.<BR>Use the []'s on the list of mice to get the FIRST element in the list and return it in pickFight."
      : 2 == N
      ? "Use getMice() to get the list of other mice in the game.<BR>Use the []'s on the list of mice to get the LAST element in the list and return it in pickFight.<BR>You can get the length of the list with .length."
      : 3 == N || 4 == N
      ? (3 == N
          ? "Bigger mice are more likely to win in a fight. Return a mouse that is smaller than 2 in pickFight.<BR>"
          : 4 == N
          ? "Bigger mice are more likely to win in a fight. Return a mouse that is smaller than yourself in pickFight.<BR>"
          : "") +
        "Use .size to get the size of a mouse." +
        (3 == N
          ? '<br><br><img src="genetics/docs/sizeProperty.png" height=40 width=162>'
          : 4 == N
          ? "<pre>mouse.size</pre><pre>getSelf()</pre>"
          : "")
      : 5 == N || 6 == N
      ? "Mice mate to pass on their functions to their children. If the other mate accepts a mate request and the mate is valid, a child is born.\n" +
        (5 == N
          ? 'Return a mouse that is fertile (fertility greater than 0) and of the opposite sex.<br><br><img src="genetics/docs/fertilityProperty.png" height=43 width=180><br><br><img src="genetics/docs/sexProperty.png" height=55 width=178><br><br>'
          : 6 == N
          ? "Return a mouse that is fertile (fertility greater than 0), of the opposite sex, and is bigger than yourself.<pre>mouse.fertility</pre><pre>mouse.sex</pre>"
          : "")
      : 7 == N || 8 == N
      ? "Mice answer mating requests with acceptMate. Accepting will use up some fertility but will make a child.<BR>" +
        (7 == N
          ? "Return true in acceptMate if the suitor is of the opposite sex."
          : 8 == N
          ? "Return true in acceptMate if the suitor is of the opposite sex and bigger than yourself."
          : "")
      : 9 == N
      ? "Write your own implementations for the mouse functions and compete to try to get majority of each function in the cage.<BR>WARNING: This level does not save."
      : 10 == N
      ? "Write your own implementations for the mouse functions and compete to try to get majority of each function in the cage. Watch out, these mice are much smarter than before.<BR>WARNING: This level does not save."
      : "") +
    "</div>" +
    wg() +
    "</div>"
  );
}
var yg = null,
  zg = !0;
function Ag() {
  if (1 == N)
    var a = [
      { id: 0, kc: 0, x: 200, y: 300, direction: -Math.PI / 2, size: 2, Zf: 1 },
      { id: 1, kc: 3, x: 300, y: 100, direction: Math.PI / 2, size: 3 },
      { id: 2, kc: 2, x: 200, y: 100, direction: Math.PI / 2, size: 2 },
      { id: 3, kc: 1, x: 100, y: 100, direction: Math.PI / 2, size: 1 },
    ];
  else if (2 == N)
    a = [
      { id: 0, kc: 0, x: 200, y: 300, direction: -Math.PI / 2, size: 2, Zf: 1 },
      { id: 1, kc: 3, x: 300, y: 100, direction: Math.PI / 2, size: 1 },
      { id: 2, kc: 2, x: 200, y: 100, direction: Math.PI / 2, size: 2 },
      { id: 3, kc: 1, x: 100, y: 100, direction: Math.PI / 2, size: 2 },
    ];
  else {
    if (4 >= N)
      a = [
        {
          id: 0,
          kc: 0,
          x: 200,
          y: 200,
          direction: -Math.PI / 2,
          size: 2,
          Zf: 3,
        },
        { id: 1, kc: 1, x: 150, y: 100, direction: Math.PI / 2, size: 3 },
        { id: 2, kc: 2, x: 250, y: 300, direction: Math.PI / 2, size: 3 },
        { id: 3, kc: 3, x: 300, y: 200, direction: Math.PI / 2, size: 2 },
        { id: 4, kc: 1, x: 250, y: 100, direction: Math.PI / 2, size: 1 },
        { id: 5, kc: 2, x: 150, y: 300, direction: Math.PI / 2, size: 1 },
        { id: 6, kc: 3, x: 100, y: 200, direction: Math.PI / 2, size: 1 },
      ];
    else if (8 >= N)
      a = [
        {
          id: 0,
          kc: 0,
          x: 200,
          y: 200,
          direction: -Math.PI / 2,
          size: 2,
          wf: 5,
        },
        {
          id: 1,
          kc: 1,
          x: 150,
          y: 100,
          direction: Math.PI / 2,
          size: 3,
          cc: "Male",
        },
        {
          id: 2,
          kc: 2,
          x: 250,
          y: 300,
          direction: Math.PI / 2,
          size: 3,
          cc: "Female",
        },
        {
          id: 3,
          kc: 3,
          x: 300,
          y: 200,
          direction: Math.PI / 2,
          size: 3,
          cc: "Male",
        },
        {
          id: 4,
          kc: 1,
          x: 250,
          y: 100,
          direction: Math.PI / 2,
          size: 3,
          cc: "Female",
        },
        {
          id: 5,
          kc: 2,
          x: 150,
          y: 300,
          direction: Math.PI / 2,
          size: 2,
          cc: "Female",
        },
        {
          id: 6,
          kc: 3,
          x: 100,
          y: 200,
          direction: Math.PI / 2,
          size: 2,
          cc: "Male",
        },
      ];
    else {
      a = [];
      for (var c = 0, d = 0; 4 > d; d++)
        for (var e = 0; 2 > e; e++)
          a.push({ id: c++, cc: 0 == e % 2 ? "Male" : "Female", kc: d });
    }
    e = a;
    for (c = e.length - 1; 0 < c; c--) {
      d = Math.floor(Math.random() * (c + 1));
      var f = e[c];
      e[c] = e[d];
      e[d] = f;
    }
  }
  e = 0;
  for (var h; (h = a[e]); e++)
    (d = new Le(h.id, h.cc || (0.5 < Math.random() ? "Male" : "Female"), h.kc)),
      null != h.size && (d.size = h.size),
      null != h.wf && (d.wf = h.wf),
      null != h.Zf && (d.Zf = h.Zf),
      (c = d),
      (V[c.id] = c),
      U.unshift(c),
      8 >= N
        ? ((c = h.x),
          (f = h.y),
          (h = h.direction),
          (d = Rf(d)),
          d.setDirection(h),
          (f = g.g.Ic.nf(f - 20, 0, 355)),
          (d.element.style.left = g.g.Ic.nf(c - 20, 0, 360) + "px"),
          (d.element.style.top = f + "px"),
          Af[d.cc]++,
          Bf[d.Cd]++,
          Cf[d.Dd]++,
          Df[d.xd]++,
          Wf(),
          (d.element.style.display = "block"),
          d.xf(),
          Y(Z(d, !0, !0) + " added to game."))
        : X(new W("ADD", d));
}
function Bg() {
  switch (N) {
    case 1:
    case 2:
      for (var a = 0, c; (c = Qe[a]); a++) {
        if ("FIGHT" == c.TYPE)
          return X(new W("END_GAME", "WIN" == c.RESULT)), !0;
        if ("START_GAME" != c.TYPE && "NEXT_ROUND" != c.TYPE)
          return X(new W("END_GAME", !1)), !0;
      }
      return !1;
    case 3:
    case 4:
      var d = 0;
      for (a = 0; (c = Qe[a]); a++)
        if ("FIGHT" == c.TYPE)
          if ("WIN" == c.RESULT) {
            if ((d++, 3 == d)) return X(new W("END_GAME", !0)), !0;
          } else return X(new W("END_GAME", !1)), !0;
        else if ("START_GAME" != c.TYPE && "NEXT_ROUND" != c.TYPE)
          return X(new W("END_GAME", !1)), !0;
      return !1;
    case 5:
    case 6:
      for (a = d = 0; (c = Qe[a]); a++)
        if ("MATE" == c.TYPE)
          if ("SUCCESS" == c.RESULT) {
            if (6 == N && 2 >= V[c.OPT_PARTNER].size)
              return X(new W("END_GAME", !1)), !0;
            d++;
            if (5 == d) return X(new W("END_GAME", !0)), !0;
          } else return X(new W("END_GAME", !1)), !0;
        else if ("START_GAME" != c.TYPE && "NEXT_ROUND" != c.TYPE)
          return X(new W("END_GAME", !1)), !0;
      return !1;
    case 7:
    case 8:
      for (a = d = 0; (c = Qe[a]); a++)
        if ("MATE" == c.TYPE)
          if ("SUCCESS" == c.RESULT) {
            if (8 == N && 2 >= V[c.ID].size)
              return X(new W("END_GAME", !1)), !0;
            d++;
            if (5 == d) return X(new W("END_GAME", !0)), !0;
          } else if ("REJECTION" == c.RESULT) {
            var e = V[0];
            c = V[c.ID];
            if (e.cc != c.cc && (8 != N || e.size < c.cc))
              return X(new W("END_GAME", !1)), !0;
          } else return X(new W("END_GAME", !1)), !0;
        else if (
          "START_GAME" != c.TYPE &&
          "NEXT_ROUND" != c.TYPE &&
          "RETIRE" != c.TYPE
        )
          return X(new W("END_GAME", !1)), !0;
      return !1;
    default:
      throw Error("unhandled checkForLevelEnd for level " + N);
  }
}
function Cg() {}
function Dg() {}
function Eg(a) {
  if (!ke(a)) {
    a = document.getElementById("runButton");
    var c = document.getElementById("resetButton");
    c.style.minWidth || (c.style.minWidth = a.offsetWidth + "px");
    a.style.display = "none";
    c.style.display = "inline";
    Fg();
  }
}
function Gg(a) {
  ke(a) ||
    ((document.getElementById("runButton").style.display = "inline"),
    (document.getElementById("resetButton").style.display = "none"),
    We(),
    Mf(),
    (hf = !0),
    Ag());
}
function Fg() {
  if ("Interpreter" in window) {
    hf = 2 >= N;
    var a = 8 >= N ? Bg : null;
    a && (ef = a);
    Ne = !1;
    Ue = U.length;
    a = 0;
    for (var c; (c = T[a]); a++)
      "function" == typeof c.code && (c.JG = Xe + "\n" + c.code());
    X(new W("START_GAME"));
    af();
    rf = !1;
    sf = null;
    qf = !1;
    Qf();
  } else setTimeout(Fg, 250);
}
function Hg() {
  var a = document.getElementById("help"),
    c = document.getElementById("helpButton");
  P.Ds(a, c, !0, !0, { width: "50%", left: "25%", top: "5em" }, P.hD);
  P.cD();
}
function Ig(a) {
  for (var c = ["blockly", "editor"], d = 0, e; (e = c[d]); d++)
    (e = document.getElementById(e)),
      (e.style.visibility = d == a ? "visible" : "hidden");
  c = [".blocklyTooltipDiv", ".blocklyToolboxDiv"];
  for (d = 0; (e = c[d]); d++)
    (e = document.querySelector(e)),
      (e.style.visibility = 0 == a ? "visible" : "hidden");
  1 != a || Yd || ((a = ee()), (zg = !0), Xd.setValue(a, -1), (zg = !1));
}
function Jg() {
  if (!zg) {
    var a = de();
    Yd
      ? a.trim() || (A.clear(), g.g.o.Vb(yg[0], "tab-disabled"), (Yd = !1))
      : !A.$b(!1).length || confirm(O("Games_breakLink"))
      ? (g.g.o.Fa(yg[0], "tab-disabled"), (Yd = !0))
      : ((zg = !0), Xd.setValue(a, -1), (zg = !1));
  }
}
function Y(a) {
  console.log(a);
}
window.addEventListener("load", function () {
  function a(D) {
    return function () {
      if (!g.g.o.to(c[D], "tab-disabled")) {
        for (var S = 0; S < c.length; S++)
          D == S
            ? g.g.o.Fa(c[S], "tab-selected")
            : g.g.o.Vb(c[S], "tab-selected");
        Ig(D);
      }
    };
  }
  document.body.innerHTML = xg();
  Zd();
  Ff();
  Nd("runButton", Eg);
  Nd("resetButton", Gg);
  Nd("docsButton", Cg);
  Nd("closeDocs", Dg);
  ne();
  if (8 < N) {
    for (
      var c = Array.prototype.slice.call(
          document.querySelectorAll("#editorBar>.tab")
        ),
        d = 0;
      d < c.length;
      d++
    )
      Nd(c[d], a(d));
    yg = c;
  }
  Nd("helpButton", Hg);
  2 > location.hash.length && !Ld(N) && setTimeout(Hg, 1e3);
  var e = -1 != Cd.indexOf(Dd),
    f = document.getElementById("visualization"),
    h = document.getElementById("tabarea"),
    k = document.getElementById("blockly");
  if ((d = document.getElementById("editor")) && k)
    var l = [k, d],
      m = function () {
        var D = f.offsetTop;
        h.style.top = D - window.pageYOffset + "px";
        h.style.left = e ? "10px" : "420px";
        h.style.width = window.innerWidth - 440 + "px";
        D = Math.max(0, D + h.offsetHeight - window.pageYOffset) + "px";
        for (
          var S = e ? "10px" : "420px",
            qa = window.innerWidth - 440 + "px",
            Db = 0,
            Qa;
          (Qa = l[Db]);
          Db++
        )
          (Qa.style.top = D), (Qa.style.left = S), (Qa.style.width = qa);
      };
  else {
    var n = k || d;
    m = function () {
      n.style.top = Math.max(10, f.offsetTop - window.pageYOffset) + "px";
      n.style.left = e ? "10px" : "420px";
      n.style.width = window.innerWidth - 440 + "px";
    };
  }
  window.addEventListener("scroll", function () {
    m(null);
    k && g.Om(A);
  });
  window.addEventListener("resize", m);
  m(null);
  if (d) {
    d = document.getElementById("containerCode");
    d.parentNode.removeChild(d);
    d = "";
    switch (N) {
      case 2:
        d =
          "/**\n * Return the last mouse from getMice().\n * @return {Mouse|null} The mouse chosen to fight with.\n */\nfunction pickFight() {\n  return null;\n}";
        break;
      case 4:
        d =
          "/**\n * Return a mouse from getMice() that is smaller than itself.\n * @return {Mouse|null} The mouse chosen to fight with.\n */\nfunction pickFight() {\n  for (var i = 0; i < getMice().length; i++) {\n    var mouse = getMice()[i];\n  }\n  return null;\n}";
        break;
      case 6:
        d =
          "/**\n * Return a mouse from getMice() that is fertile, of the opposite sex,\n * and bigger than itself.\n * @return {Mouse|null} The mouse chosen to attempt to mate with.\n */\nfunction proposeMate() {\n  for (var i = 0; i < getMice().length; i++) {\n    var mouse = getMice()[i];\n  }\n  return null;\n}";
        break;
      case 8:
        d =
          "/**\n *  Return true if the suitor mouse is of the opposite sex and bigger than itself.\n *  @param {Mouse} suitor the mouse requesting to mate.\n *  @return {Boolean} Whether the mate request is accepted.\n */\nfunction acceptMate(suitor) {\n  return false;\n}";
    }
    pe().on("change", Jg);
    d && ce(d + "\n");
    oe();
  }
  if (k) {
    ge();
    E(A, g.h.UA);
    switch (N) {
      case 1:
        var p =
          '<xml><block type="genetics_pickFight" deletable="false" editable="false" x="0" y="150"><comment pinned="true">Return the first mouse from getMice().\n@return {Mouse|null} The mouse chosen to fight with.</comment></block></xml>';
        break;
      case 3:
        p =
          '<xml><block type="genetics_pickFight" deletable="false" editable="false" x="0" y="150"><comment pinned="true">Return a mouse from getMice() that is smaller than 2.\n@return {Mouse|null} The mouse chosen to fight with.</comment><statement name="STACK"><block type="controls_for"><field name="VAR">i</field><value name="FROM"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="TO"><shadow type="lists_length"><value name="VALUE"><shadow type="genetics_getMice"></shadow></value></shadow></value><statement name="DO"><block type="variables_set"><field name="VAR">mouse</field><value name="VALUE"><block type="lists_getIndex"><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="genetics_getMice"></block></value><value name="AT"><block type="variables_get"><field name="VAR">i</field></block></value></block></value></block></statement></block></statement></block></xml>';
        break;
      case 5:
        p =
          '<xml><block type="genetics_proposeMate" deletable="false" editable="false" x="0" y="150"><comment pinned="true">Return a mouse from getMice() that is fertile and of the opposite sex.\n@return {Mouse|null} The mouse chosen to attempt to mate with.</comment><statement name="STACK"><block type="controls_for"><field name="VAR">i</field><value name="FROM"><shadow type="math_number"><field name="NUM">0</field></shadow></value><value name="TO"><shadow type="lists_length"><value name="VALUE"><shadow type="genetics_getMice"></shadow></value></shadow></value><statement name="DO"><block type="variables_set" ><field name="VAR">mouse</field><value name="VALUE"><block type="lists_getIndex"><field name="MODE">GET</field><field name="WHERE">FROM_START</field><value name="VALUE"><block type="genetics_getMice"></block></value><value name="AT"><block type="variables_get"><field name="VAR">i</field></block></value></block></value></block></statement></block></statement></block></xml>';
        break;
      case 7:
        p =
          '<xml><block type="genetics_acceptMate" deletable="false" editable="false" x="0" y="150"><comment pinned="true">Return true if the suitor mouse is of the opposite sex.\n@param {Mouse} suitor the mouse requesting to mate.\n@return {Boolean} Whether the mate request is accepted.</comment></block></xml>';
    }
    p && ce(p);
  }
  ve(g.j, "pickFight,proposeMate,acceptMate");
  h &&
    ((d = g.V.Ye(
      '<xml><block type="genetics_pickFight" deletable="false" editable="true" x="0" y="150"><comment pinned="false" h="65" w="560">Return a mouse from cage to pick a fight with. Returning itself will kill the mouse and returning null will result in no fights.\n@return {Mouse|null} The mouse chosen to fight with.</comment><value name="RETURN"><shadow type="logic_null"></shadow></value></block><block type="genetics_proposeMate" deletable="false" editable="true" x="0" y="350"><comment pinned="false" h="80" w="590">Return a mouse from cage to attempt to mate with. If the mate chosen accepts, is fertile, and is of the opposite sex, then a child will be born.\n@return {Mouse|null} The mouse chosen to attempt to mate with.</comment><value name="RETURN"><shadow type="logic_null"></shadow></value></block><block type="genetics_acceptMate" deletable="false" editable="true" x="0" y="550"><comment pinned="false" h="80" w="560">Return true to agree to a mate request or false to decline a mate request.\n@param {Mouse} suitor the mouse requesting to mate.\n@return {Boolean} Whether the mate request is accepted.</comment><value name="RETURN"><shadow type="logic_boolean"><field name="BOOL">TRUE</field></shadow></value></block></xml>'
    )),
    A.clear(),
    g.V.Ti(d, A),
    Na());
  Yd = null == k;
  8 >= N
    ? ((p = [
        { name: "Genetics_myName", code: null },
        { name: "Genetics_tutorEnemy", code: "playerTutor" },
        { name: "Genetics_tutorEnemy", code: "playerTutor" },
        { name: "Genetics_tutorEnemy", code: "playerTutor" },
      ]),
      ($f = !1),
      (Ve = Re = !0),
      (Ye = 6 >= N),
      ($e = 5 <= N),
      (Ze = 7 == N || 8 == N),
      (Xe = document.getElementById("playerTutor").textContent))
    : (p =
        9 == N
          ? [
              { name: "Genetics_myName", code: null },
              { name: "Genetics_simpleName", code: "playerSimple" },
              { name: "Genetics_simpleName", code: "playerSimple" },
              { name: "Genetics_simpleName", code: "playerSimple" },
            ]
          : [
              { name: "Genetics_myName", code: null },
              { name: "Genetics_aggressiveName", code: "playerAggressive" },
              { name: "Genetics_highBreedingName", code: "playerHighBreeding" },
              { name: "Genetics_simpleName", code: "playerSimple" },
            ]);
  var r;
  for (d = 0; (r = p[d]); d++) {
    var y = r.code ? document.getElementById(r.code).textContent : de;
    r = O(r.name);
    T.push({ name: r, code: y });
  }
  We();
  Mf();
  hf = !0;
  Ag();
  h && (Ig(0), (zg = !1));
});
