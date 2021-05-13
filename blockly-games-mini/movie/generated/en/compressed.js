// Automatically generated file.  Do not edit!

"use strict";
var b,
  g = { km: {}, Cz: 40, Oz: 125, WE: 5, vF: 10, Rd: 28 };
g.DE = g.Rd;
g.IE = 8;
g.fq = 250;
g.Dt = 10;
g.BE = 30;
g.eG = 750;
g.TG = 100;
g.XE = !0;
g.JF = 0.45;
g.KF = 0.65;
g.Sd = { width: 96, height: 124, url: "sprites.png" };
g.jb = 1;
g.Wf = 2;
g.kb = 3;
g.Xf = 4;
g.zh = 5;
g.wt = -1;
g.vt = 0;
g.Zc = 1;
g.nM = 0;
g.oM = 1;
g.lM = 1;
g.mM = 2;
g.Ol = [];
g.Ol[g.jb] = g.Wf;
g.Ol[g.Wf] = g.jb;
g.Ol[g.kb] = g.Xf;
g.Ol[g.Xf] = g.kb;
g.ik = 0;
g.Qn = 1;
g.Ke = 2;
g.Wl = 3;
g.Zy = null;
g.Lt = 1;
g.$y = 2;
g.rc = "VARIABLE";
g.pH = "VARIABLE_DYNAMIC";
g.Mn = "PROCEDURE";
g.Xz = "RENAME_VARIABLE_ID";
g.az = "DELETE_VARIABLE_ID";
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
g.h = {};
g.g.global.Blockly || (g.g.global.Blockly = {});
g.g.global.Blockly.Msg || (g.g.global.Blockly.Msg = g.h);
g.g.vb = {};
g.g.vb.parse = function (a) {
  a = String(a).toLowerCase().trim();
  var c = g.g.vb.names[a];
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
    ? g.g.vb.Wx(a, c, d)
    : null;
};
g.g.vb.Wx = function (a, c, d) {
  c = (a << 16) | (c << 8) | d;
  return 16 > a
    ? "#" + (16777216 | c).toString(16).substr(1)
    : "#" + c.toString(16);
};
g.g.vb.mC = function (a) {
  a = g.g.vb.parse(a);
  if (!a) return [0, 0, 0];
  a = parseInt(a.substr(1), 16);
  return [a >> 16, (a >> 8) & 255, a & 255];
};
g.g.vb.qC = function (a) {
  var c = g.JF,
    d = 255 * g.KF,
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
  return g.g.vb.Wx(Math.floor(e), Math.floor(f), Math.floor(h));
};
g.g.vb.Ru = function (a, c, d) {
  a = g.g.vb.parse(a);
  if (!a) return null;
  c = g.g.vb.parse(c);
  if (!c) return null;
  a = g.g.vb.mC(a);
  c = g.g.vb.mC(c);
  return g.g.vb.Wx(
    Math.round(c[0] + d * (a[0] - c[0])),
    Math.round(c[1] + d * (a[1] - c[1])),
    Math.round(c[2] + d * (a[2] - c[2]))
  );
};
g.g.vb.names = {
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
g.g.Z = function (a, c) {
  this.x = a;
  this.y = c;
};
g.g.Z.zf = function (a, c) {
  return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1;
};
g.g.Z.Fv = function (a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
};
g.g.Z.GJ = function (a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
g.g.Z.pm = function (a, c) {
  return new g.g.Z(a.x - c.x, a.y - c.y);
};
g.g.Z.sum = function (a, c) {
  return new g.g.Z(a.x + c.x, a.y + c.y);
};
g.g.Z.prototype.scale = function (a) {
  this.x *= a;
  this.y *= a;
  return this;
};
g.g.Z.prototype.translate = function (a, c) {
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
g.g.yb = {};
g.g.yb.startsWith = function (a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.g.yb.iy = function (a) {
  return a.length
    ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d;
      }).length
    : 0;
};
g.g.yb.RH = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.yb.iy(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return d;
  return c;
};
g.g.yb.SH = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.yb.iy(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return d;
  return c;
};
g.g.yb.gE = function (a, c) {
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) a[d] = g.g.yb.VL(a[d], c);
  return a.join("\n");
};
g.g.yb.VL = function (a, c) {
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
    a = g.g.yb.hE(d, a, c);
    e = g.g.yb.Ey(d, a, c);
    a = g.g.yb.WL(d, a);
    f++;
  } while (e > h);
  return k;
};
g.g.yb.Ey = function (a, c, d) {
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
g.g.yb.hE = function (a, c, d) {
  for (var e = g.g.yb.Ey(a, c, d), f, h = 0; h < c.length - 1; h++)
    if (c[h] != c[h + 1]) {
      var k = [].concat(c);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var l = g.g.yb.Ey(a, k, d);
      l > e && ((e = l), (f = k));
    }
  return f ? g.g.yb.hE(a, f, d) : c;
};
g.g.yb.WL = function (a, c) {
  for (var d = [], e = 0; e < a.length; e++)
    d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
  return d.join("");
};
g.g.re = function (a, c) {
  this.width = a;
  this.height = c;
};
g.g.re.zf = function (a, c) {
  return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1;
};
g.g.style = {};
g.g.style.ai = function (a) {
  if ("none" != g.g.style.$B(a, "display")) return g.g.style.YB(a);
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
  return new g.g.re(h, a);
};
g.g.style.YB = function (a) {
  return new g.g.re(a.offsetWidth, a.offsetHeight);
};
g.g.style.$B = function (a, c) {
  return (
    g.g.style.getComputedStyle(a, c) ||
    g.g.style.KI(a, c) ||
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
g.g.style.KI = function (a, c) {
  return a.currentStyle ? a.currentStyle[c] : null;
};
g.g.style.aj = function (a) {
  var c = new g.g.Z(0, 0);
  a = a.getBoundingClientRect();
  var d = document.documentElement;
  d = new g.g.Z(
    window.pageXOffset || d.scrollLeft,
    window.pageYOffset || d.scrollTop
  );
  c.x = a.left + d.x;
  c.y = a.top + d.y;
  return c;
};
g.g.style.eC = function () {
  var a = document.body,
    c = document.documentElement;
  return new g.g.Z(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop);
};
g.g.style.UO = function (a, c) {
  a.style.display = c ? "" : "none";
};
g.g.style.IO = function (a) {
  return "rtl" == g.g.style.$B(a, "direction");
};
g.g.style.HI = function (a) {
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
g.g.style.lL = function (a, c) {
  a = g.g.style.MI(a, c);
  c.scrollLeft = a.x;
  c.scrollTop = a.y;
};
g.g.style.MI = function (a, c) {
  var d = g.g.style.aj(a),
    e = g.g.style.aj(c),
    f = g.g.style.HI(c),
    h = d.x - e.x - f.left;
  d = d.y - e.y - f.top;
  a = g.g.style.YB(a);
  e = c.clientHeight - a.height;
  f = c.scrollLeft;
  var k = c.scrollTop;
  f += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
  k += Math.min(d, Math.max(d - e, 0));
  return new g.g.Z(f, k);
};
g.g.userAgent = {};
(function (a) {
  function c(e) {
    return -1 != d.indexOf(e.toUpperCase());
  }
  g.g.userAgent.raw = a;
  var d = g.g.userAgent.raw.toUpperCase();
  g.g.userAgent.kf = c("Trident") || c("MSIE");
  g.g.userAgent.Uj = c("Edge");
  g.g.userAgent.UF = c("JavaFX");
  g.g.userAgent.eM = (c("Chrome") || c("CriOS")) && !g.g.userAgent.Uj;
  g.g.userAgent.vA = c("WebKit") && !g.g.userAgent.Uj;
  g.g.userAgent.nz =
    c("Gecko") && !g.g.userAgent.vA && !g.g.userAgent.kf && !g.g.userAgent.Uj;
  g.g.userAgent.qn = c("Android");
  g.g.userAgent.Il = c("iPad");
  g.g.userAgent.yz = c("iPod");
  g.g.userAgent.xz = c("iPhone") && !g.g.userAgent.Il && !g.g.userAgent.yz;
  g.g.userAgent.hG = c("Macintosh");
  g.g.userAgent.$G =
    g.g.userAgent.Il || (g.g.userAgent.qn && !c("Mobile")) || c("Silk");
  g.g.userAgent.qG =
    !g.g.userAgent.$G &&
    (g.g.userAgent.yz || g.g.userAgent.xz || g.g.userAgent.qn || c("IEMobile"));
})((g.g.global.navigator && g.g.global.navigator.userAgent) || "");
g.g.YJ = function (a) {
  a.preventDefault();
  a.stopPropagation();
};
g.g.hs = function (a) {
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
    (a.target.dataset && "true" == a.target.dataset.KO)
  );
};
g.g.Af = function (a) {
  var c = new g.g.Z(0, 0),
    d = a.getAttribute("x");
  d && (c.x = parseInt(d, 10));
  if ((d = a.getAttribute("y"))) c.y = parseInt(d, 10);
  if ((d = (d = a.getAttribute("transform")) && d.match(g.g.Af.rH)))
    (c.x += Number(d[1])), d[3] && (c.y += Number(d[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    (a = a.match(g.g.Af.sH)) &&
    ((c.x += Number(a[1])), a[3] && (c.y += Number(a[3])));
  return c;
};
g.g.Eo = function (a) {
  for (var c = 0, d = 0; a; ) {
    var e = g.g.Af(a);
    c += e.x;
    d += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new g.g.Z(c, d);
};
g.g.Af.rH = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
g.g.Af.sH = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
g.g.Ok = function (a) {
  return a.ctrlKey && g.g.userAgent.hG ? !0 : 2 == a.button;
};
g.g.Zo = function (a, c, d) {
  var e = c.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  d || (d = c.getScreenCTM().inverse());
  return e.matrixTransform(d);
};
g.g.XB = function (a) {
  switch (a.deltaMode) {
    default:
      return { x: a.deltaX, y: a.deltaY };
    case 1:
      return { x: a.deltaX * g.Cz, y: a.deltaY * g.Cz };
    case 2:
      return { x: a.deltaX * g.Oz, y: a.deltaY * g.Oz };
  }
};
g.g.FL = function (a) {
  return g.g.wy(a, !0);
};
g.g.Mc = function (a) {
  if ("string" != typeof a) return a;
  a = g.g.wy(a, !1);
  return a.length ? String(a[0]) : "";
};
g.g.SA = function (a) {
  for (var c = g.h, d = a.match(/%{BKY_[A-Z]\w*}/gi), e = 0; e < d.length; e++)
    void 0 == c[d[e].toUpperCase().slice(6, -1)] &&
      console.warn("No message string for " + d[e] + " in " + a);
};
g.g.wy = function (a, c) {
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
                (l = g.g.yb.startsWith(l, "BKY_") ? l.substring(4) : null) &&
                l in g.h
                  ? ((f = g.h[l]),
                    "string" == typeof f
                      ? Array.prototype.push.apply(d, g.g.wy(f, c))
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
g.g.Zh = function () {
  for (var a = g.g.Zh.ID.length, c = [], d = 0; 20 > d; d++)
    c[d] = g.g.Zh.ID.charAt(Math.random() * a);
  return c.join("");
};
g.g.Zh.ID =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.Ik = function () {
  if (void 0 !== g.g.Ik.$u) return g.g.Ik.$u;
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
  g.g.Ik.$u = "none" !== c;
  return g.g.Ik.$u;
};
g.g.CD = function (a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" == document.readyState) a();
  else
    var c = setInterval(function () {
      "complete" == document.readyState && (clearInterval(c), a());
    }, 10);
};
g.g.YI = function () {
  var a = g.g.style.eC();
  return new g.g.Rect(
    a.y,
    document.documentElement.clientHeight + a.y,
    a.x,
    document.documentElement.clientWidth + a.x
  );
};
g.g.$q = function (a, c) {
  c = a.indexOf(c);
  if (-1 == c) return !1;
  a.splice(c, 1);
  return !0;
};
g.g.RI = function () {
  var a = document.documentElement,
    c = window;
  return g.g.userAgent.kf && c.pageYOffset != a.scrollTop
    ? new g.g.Z(a.scrollLeft, a.scrollTop)
    : new g.g.Z(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop);
};
g.g.$v = function (a, c) {
  var d = Object.create(null),
    e = p(a, !0);
  c && (a = q(a)) && ((a = e.indexOf(a)), e.splice(a, e.length - a));
  for (a = 0; (c = e[a]); a++) d[c.type] ? d[c.type]++ : (d[c.type] = 1);
  return d;
};
g.g.kL = function (a, c) {
  var d = c.x;
  c = c.y;
  var e = aa(a).getBoundingClientRect();
  d = new g.g.Z(d - e.left, c - e.top);
  c = g.g.Eo(a.Hb);
  return g.g.Z.pm(d, c).scale(1 / a.scale);
};
g.g.Os = function (a) {
  var c = "string" == typeof a ? g.g.Mc(a) : a,
    d = Number(c);
  if (!isNaN(d) && 0 <= d && 360 >= d) return { kJ: d, Io: g.g.vb.qC(d) };
  if ((d = g.g.vb.parse(c))) return { kJ: null, Io: d };
  d = 'Invalid colour: "' + c + '"';
  a != c && (d += ' (from "' + a + '")');
  throw Error(d);
};
g.Touch = {};
g.Touch.jA =
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
g.Touch.Np = null;
g.Touch.Cg = {};
g.g.global.PointerEvent
  ? (g.Touch.Cg = {
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
  : g.Touch.jA &&
    (g.Touch.Cg = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"],
    });
g.ps = 0;
g.EJ = function (a, c) {
  g.sj();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (g.ps = setTimeout(function () {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      c && ba(c, a);
    }, g.eG));
};
g.sj = function () {
  g.ps && (clearTimeout(g.ps), (g.ps = 0));
};
g.Touch.mk = function () {
  g.Touch.Np = null;
};
g.Touch.ky = function (a) {
  return !g.Touch.vJ(a) || g.Touch.OH(a);
};
g.Touch.Wr = function (a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 !== a.changedTouches[0].identifier &&
      null !== a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
g.Touch.OH = function (a) {
  var c = g.Touch.Wr(a);
  return void 0 !== g.Touch.Np && null !== g.Touch.Np
    ? g.Touch.Np == c
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((g.Touch.Np = c), !0)
    : !1;
};
g.Touch.nL = function (a) {
  if (g.g.yb.startsWith(a.type, "touch")) {
    var c = a.changedTouches[0];
    a.clientX = c.clientX;
    a.clientY = c.clientY;
  }
};
g.Touch.vJ = function (a) {
  return (
    g.g.yb.startsWith(a.type, "touch") ||
    g.g.yb.startsWith(a.type, "mouse") ||
    g.g.yb.startsWith(a.type, "pointer")
  );
};
g.Touch.ls = function (a) {
  return (
    g.g.yb.startsWith(a.type, "touch") || g.g.yb.startsWith(a.type, "pointer")
  );
};
g.Touch.vL = function (a) {
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
g.g.F = function (a) {
  this.BL = a;
};
g.g.F.prototype.toString = function () {
  return this.BL;
};
g.g.F.xt = new g.g.F("animate");
g.g.F.Gt = new g.g.F("circle");
g.g.F.sn = new g.g.F("clipPath");
g.g.F.Yy = new g.g.F("defs");
g.g.F.Pt = new g.g.F("feComposite");
g.g.F.gF = new g.g.F("feComponentTransfer");
g.g.F.hF = new g.g.F("feFlood");
g.g.F.iF = new g.g.F("feFuncA");
g.g.F.jF = new g.g.F("feGaussianBlur");
g.g.F.kF = new g.g.F("fePointLight");
g.g.F.lF = new g.g.F("feSpecularLighting");
g.g.F.iz = new g.g.F("filter");
g.g.F.wF = new g.g.F("foreignObject");
g.g.F.qc = new g.g.F("g");
g.g.F.Ii = new g.g.F("image");
g.g.F.Bn = new g.g.F("line");
g.g.F.pe = new g.g.F("path");
g.g.F.Pz = new g.g.F("pattern");
g.g.F.FG = new g.g.F("polygon");
g.g.F.Hc = new g.g.F("rect");
g.g.F.hk = new g.g.F("svg");
g.g.F.Rq = new g.g.F("text");
g.g.F.lA = new g.g.F("tspan");
g.g.o = {};
g.g.o.Oq = "http://www.w3.org/2000/svg";
g.g.o.Gl = "http://www.w3.org/1999/xhtml";
g.g.o.rf = "http://www.w3.org/1999/xlink";
g.g.o.Ni = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  COMMENT_NODE: 8,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
};
g.g.o.cg = null;
g.g.o.Xu = 0;
g.g.o.lr = null;
g.g.o.L = function (a, c, d) {
  a = document.createElementNS(g.g.o.Oq, String(a));
  for (var e in c) a.setAttribute(e, c[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  d && d.appendChild(a);
  return a;
};
g.g.o.Ga = function (a, c) {
  var d = a.getAttribute("class") || "";
  -1 == (" " + d + " ").indexOf(" " + c + " ") &&
    (d && (d += " "), a.setAttribute("class", d + c));
};
g.g.o.yD = function (a, c) {
  c = c.split(" ");
  for (var d = 0; d < c.length; d++) g.g.o.hc(a, c[d]);
};
g.g.o.hc = function (a, c) {
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
g.g.o.ow = function (a, c) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ");
};
g.g.o.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
g.g.o.Hk = function (a, c) {
  var d = c.nextSibling;
  c = c.parentNode;
  if (!c) throw Error("Reference node has no parent.");
  d ? c.insertBefore(a, d) : c.appendChild(a);
};
g.g.o.containsNode = function (a, c) {
  return !!(
    a.compareDocumentPosition(c) & g.g.o.Ni.DOCUMENT_POSITION_CONTAINED_BY
  );
};
g.g.o.xp = function (a, c) {
  a.style.transform = c;
  a.style["-webkit-transform"] = c;
};
g.g.o.Ep = function () {
  g.g.o.Xu++;
  g.g.o.cg || (g.g.o.cg = {});
};
g.g.o.Fp = function () {
  g.g.o.Xu--;
  g.g.o.Xu || (g.g.o.cg = null);
};
g.g.o.VI = function (a) {
  var c = a.textContent + "\n" + a.className.baseVal,
    d;
  if (g.g.o.cg && (d = g.g.o.cg[c])) return d;
  try {
    d =
      g.g.userAgent.kf || g.g.userAgent.Uj
        ? a.getBBox().width
        : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  g.g.o.cg && (g.g.o.cg[c] = d);
  return d;
};
g.g.o.ew = function (a, c, d, e) {
  return g.g.o.QB(a, c + "pt", d, e);
};
g.g.o.QB = function (a, c, d, e) {
  var f = a.textContent;
  a = f + "\n" + a.className.baseVal;
  var h;
  if (g.g.o.cg && (h = g.g.o.cg[a])) return h;
  g.g.o.lr ||
    ((h = document.createElement("canvas")),
    (h.className = "blocklyComputeCanvas"),
    document.body.appendChild(h),
    (g.g.o.lr = h.getContext("2d")));
  g.g.o.lr.font = d + " " + c + " " + e;
  h = g.g.o.lr.measureText(f).width;
  g.g.o.cg && (g.g.o.cg[a] = h);
  return h;
};
g.g.o.NC = function (a, c, d, e) {
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
      (d.tf = a.offsetTop - f.offsetTop),
      (c.style.alignItems = "flex-end"),
      (d.height = a.offsetTop - f.offsetTop);
  } finally {
    document.body.removeChild(c);
  }
  return d;
};
g.g.aN = function () {};
g.On = function (a) {
  this.s = a;
  this.Cf = new g.Wa(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.Of = new g.Wa(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.io = g.g.o.L(
    g.g.F.Hc,
    { height: g.Wa.Wc, width: g.Wa.Wc, class: "blocklyScrollbarBackground" },
    null
  );
  g.g.o.Hk(this.io, a.og);
  this.fc = null;
};
g.On.prototype.J = function () {
  g.g.o.removeNode(this.io);
  this.fc = this.s = this.io = null;
  this.Cf.J();
  this.Cf = null;
  this.Of.J();
  this.Of = null;
};
g.On.prototype.resize = function () {
  var a = this.s.dd();
  if (a) {
    var c = !1,
      d = !1;
    this.fc &&
    this.fc.Qb == a.Qb &&
    this.fc.Vb == a.Vb &&
    this.fc.ad == a.ad &&
    this.fc.Sc == a.Sc
      ? ((this.fc &&
          this.fc.wf == a.wf &&
          this.fc.ac == a.ac &&
          this.fc.od == a.od) ||
          (c = !0),
        (this.fc &&
          this.fc.Wd == a.Wd &&
          this.fc.ic == a.ic &&
          this.fc.bd == a.bd) ||
          (d = !0))
      : (d = c = !0);
    if (c || d) {
      try {
        g.i.disable(), c && this.Cf.resize(a), d && this.Of.resize(a);
      } finally {
        g.i.enable();
      }
      ca(this.s);
    }
    (this.fc && this.fc.Qb == a.Qb && this.fc.Sc == a.Sc) ||
      this.io.setAttribute("x", this.Of.position.x);
    (this.fc && this.fc.Vb == a.Vb && this.fc.ad == a.ad) ||
      this.io.setAttribute("y", this.Cf.position.y);
    this.fc = a;
  }
};
g.On.prototype.set = function (a, c) {
  var d = {};
  a *= this.Cf.ratio;
  c *= this.Of.ratio;
  var e = this.Of.Lf,
    f = a / this.Cf.Lf;
  d.x = isNaN(f) ? 0 : f;
  e = c / e;
  d.y = isNaN(e) ? 0 : e;
  this.s.zp(d);
  da(this.Cf, a);
  da(this.Of, c);
};
g.Wa = function (a, c, d, e) {
  this.s = a;
  this.Qm = d || !1;
  this.Ek = c;
  this.ratio = this.fc = null;
  this.Re(e);
  this.position = new g.g.Z(0, 0);
  a = g.Wa.Wc;
  c
    ? (this.ud.setAttribute("height", a),
      this.ih.setAttribute("height", a),
      this.De.setAttribute("height", a - 5),
      this.De.setAttribute("y", 2.5),
      (this.Ro = "width"),
      (this.mD = "x"))
    : (this.ud.setAttribute("width", a),
      this.ih.setAttribute("width", a),
      this.De.setAttribute("width", a - 5),
      this.De.setAttribute("x", 2.5),
      (this.Ro = "height"),
      (this.mD = "y"));
  this.hD = g.ta(this.ud, "mousedown", this, this.eK);
  this.iD = g.ta(this.De, "mousedown", this, this.fK);
};
b = g.Wa.prototype;
b.zx = new g.g.Z(0, 0);
b.KD = 0;
b.Lf = 0;
b.cj = 0;
b.Go = 0;
b.ji = !0;
b.pk = !0;
g.Wa.Wc = 15;
g.Touch.jA && (g.Wa.Wc = 25);
g.Wa.HJ = function (a, c) {
  return a &&
    c &&
    a.Qb == c.Qb &&
    a.Vb == c.Vb &&
    a.ac == c.ac &&
    a.ic == c.ic &&
    a.ad == c.ad &&
    a.Sc == c.Sc &&
    a.wf == c.wf &&
    a.Wd == c.Wd &&
    a.od == c.od &&
    a.bd == c.bd
    ? !0
    : !1;
};
g.Wa.prototype.J = function () {
  ea();
  g.Na(this.hD);
  this.hD = null;
  g.Na(this.iD);
  this.iD = null;
  g.g.o.removeNode(this.ih);
  this.ud = this.N = this.ih = null;
  this.De && (this.s.Dc.unsubscribe(this.De), (this.De = null));
  this.s = null;
};
function da(a, c) {
  a.Go = c;
  a.De.setAttribute(a.mD, a.Go);
}
function fa(a, c) {
  a.Lf = c;
  a.ih.setAttribute(a.Ro, a.Lf);
  a.ud.setAttribute(a.Ro, a.Lf);
}
g.On.prototype.jl = function (a) {
  this.Cf.jl(a);
  this.Of.jl(a);
};
b = g.Wa.prototype;
b.setPosition = function (a, c) {
  this.position.x = a;
  this.position.y = c;
  g.g.o.xp(
    this.ih,
    "translate(" +
      (this.position.x + this.zx.x) +
      "px," +
      (this.position.y + this.zx.y) +
      "px)"
  );
};
b.resize = function (a) {
  if (!a && ((a = this.s.dd()), !a)) return;
  g.Wa.HJ(a, this.fc) ||
    ((this.fc = a), this.Ek ? ha(this, a) : ia(this, a), ja(this));
};
function ha(a, c) {
  var d = c.Qb - 1;
  a.Qm && (d -= g.Wa.Wc);
  fa(a, Math.max(0, d));
  d = c.Sc + 0.5;
  a.Qm && a.s.M && (d += g.Wa.Wc);
  a.setPosition(d, c.ad + c.Vb - g.Wa.Wc - 0.5);
  ka(a, c);
}
function ka(a, c) {
  a.Qm || a.Ob(a.Lf < c.wf);
  a.ratio = a.Lf / c.wf;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.cj = Math.max(0, c.Qb * a.ratio);
  a.De.setAttribute(a.Ro, a.cj);
  da(a, la(a, (c.ac - c.od) * a.ratio));
}
function ia(a, c) {
  var d = c.Vb - 1;
  a.Qm && (d -= g.Wa.Wc);
  fa(a, Math.max(0, d));
  d = c.Sc + 0.5;
  a.s.M || (d += c.Qb - g.Wa.Wc - 1);
  a.setPosition(d, c.ad + 0.5);
  ma(a, c);
}
function ma(a, c) {
  a.Qm || a.Ob(a.Lf < c.Wd);
  a.ratio = a.Lf / c.Wd;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.cj = Math.max(0, c.Vb * a.ratio);
  a.De.setAttribute(a.Ro, a.cj);
  da(a, la(a, (c.ic - c.bd) * a.ratio));
}
b.Re = function (a) {
  var c = "blocklyScrollbar" + (this.Ek ? "Horizontal" : "Vertical");
  a && (c += " " + a);
  this.ih = g.g.o.L(g.g.F.hk, { class: c }, null);
  this.N = g.g.o.L(g.g.F.qc, {}, this.ih);
  this.ud = g.g.o.L(g.g.F.Hc, { class: "blocklyScrollbarBackground" }, this.N);
  a = Math.floor((g.Wa.Wc - 5) / 2);
  this.De = g.g.o.L(
    g.g.F.Hc,
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.N
  );
  this.s.Dc.subscribe(this.De, "scrollbarColour", "fill");
  this.s.Dc.subscribe(this.De, "scrollbarOpacity", "fill-opacity");
  g.g.o.Hk(this.ih, r(this.s));
};
b.isVisible = function () {
  return this.ji;
};
b.jl = function (a) {
  var c = a != this.pk;
  this.pk = a;
  c && this.Qp();
};
b.Ob = function (a) {
  var c = a != this.isVisible();
  if (this.Qm) throw Error("Unable to toggle visibility of paired scrollbars.");
  this.ji = a;
  c && this.Qp();
};
b.Qp = function () {
  this.pk && this.isVisible()
    ? this.ih.setAttribute("display", "block")
    : this.ih.setAttribute("display", "none");
};
b.eK = function (a) {
  na(this.s);
  g.Touch.mk();
  ea();
  if (g.g.Ok(a)) a.stopPropagation();
  else {
    var c = g.g.Zo(a, r(this.s), oa(this.s));
    c = this.Ek ? c.x : c.y;
    var d = g.g.Eo(this.De);
    d = this.Ek ? d.x : d.y;
    var e = this.Go,
      f = 0.95 * this.cj;
    c <= d ? (e -= f) : c >= d + this.cj && (e += f);
    da(this, la(this, e));
    ja(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
b.fK = function (a) {
  na(this.s);
  ea();
  g.g.Ok(a)
    ? a.stopPropagation()
    : ((this.wL = this.Go),
      pa(this.s),
      (this.KD = this.Ek ? a.clientX : a.clientY),
      (g.Wa.sd = g.ta(document, "mouseup", this, this.lK)),
      (g.Wa.$e = g.ta(document, "mousemove", this, this.iK)),
      a.stopPropagation(),
      a.preventDefault());
};
b.iK = function (a) {
  da(this, la(this, this.wL + ((this.Ek ? a.clientX : a.clientY) - this.KD)));
  ja(this);
};
b.lK = function () {
  qa(this.s);
  g.Touch.mk();
  ea();
};
function ea() {
  g.Kc(!0);
  g.Wa.sd && (g.Na(g.Wa.sd), (g.Wa.sd = null));
  g.Wa.$e && (g.Na(g.Wa.$e), (g.Wa.$e = null));
}
function la(a, c) {
  return (c = 0 >= c || isNaN(c) || a.Lf < a.cj ? 0 : Math.min(c, a.Lf - a.cj));
}
function ja(a) {
  var c = a.Go / a.Lf;
  isNaN(c) && (c = 0);
  var d = {};
  a.Ek ? (d.x = c) : (d.y = c);
  a.s.zp(d);
}
b.set = function (a) {
  da(this, la(this, a * this.ratio));
  ja(this);
};
g.g.ze = {};
g.g.ze.uy = function (a) {
  return (a * Math.PI) / 180;
};
g.g.ze.$O = function (a) {
  return (180 * a) / Math.PI;
};
g.g.ze.gm = function (a, c, d) {
  if (d < a) {
    var e = d;
    d = a;
    a = e;
  }
  return Math.max(a, Math.min(c, d));
};
g.C = {};
g.C.kn = {};
g.C.vq = "default";
g.C.ea = function (a) {
  this.uj = a;
};
g.C.ea.prototype.toString = function () {
  return this.uj;
};
g.C.ea.Ty = new g.C.ea("connectionChecker");
g.C.ea.jc = new g.C.ea("event");
g.C.ea.Fc = new g.C.ea("field");
g.C.ea.RENDERER = new g.C.ea("renderer");
g.C.ea.Sq = new g.C.ea("toolbox");
g.C.ea.zu = new g.C.ea("theme");
g.C.ea.Xl = new g.C.ea("toolboxItem");
g.C.ea.kz = new g.C.ea("flyoutsVerticalToolbox");
g.C.ea.uF = new g.C.ea("flyoutsHorizontalToolbox");
g.C.register = function (a, c, d, e) {
  if (
    (!(a instanceof g.C.ea) && "string" != typeof a) ||
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
  var f = g.C.kn[a];
  f || (f = g.C.kn[a] = {});
  g.C.NL(a, d);
  if (!e && f[c])
    throw Error('Name "' + c + '" with type "' + a + '" already registered.');
  f[c] = d;
};
g.C.NL = function (a, c) {
  switch (a) {
    case String(g.C.ea.Fc):
      if ("function" != typeof c.ma)
        throw Error('Type "' + a + '" must have a fromJson function');
  }
};
g.C.unregister = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.kn[a];
  d
    ? d[c]
      ? delete g.C.kn[a][c]
      : console.warn('No name "' + c + '" with type "' + a + '" found')
    : console.warn('No type "' + a + '" found');
};
g.C.SB = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.kn[a];
  return d
    ? d[c]
      ? d[c]
      : (console.warn('No name "' + c + '" with type "' + a + '" found'), null)
    : (console.warn('No type "' + a + '" found'), null);
};
g.C.hJ = function (a) {
  var c = g.C.ea.Xl;
  c = String(c).toLowerCase();
  a = a.toLowerCase();
  return (c = g.C.kn[c]) ? !!c[a] : !1;
};
g.C.Ao = function (a, c) {
  return g.C.SB(a, c);
};
g.C.iw = function (a, c) {
  return g.C.SB(a, c);
};
g.C.Qr = function (a, c) {
  c = c.plugins[a.toString()] || g.C.vq;
  return "function" == typeof c ? c : g.C.Ao(a, c);
};
g.Vy = function () {};
function ra(a, c, d, e, f) {
  return a.kr(c, d, e, f) == g.Ba.jq;
}
g.Vy.prototype.kr = function (a, c, d, e) {
  if (a && c) {
    if (v(a)) {
      var f = a.X();
      var h = c.X();
    } else (h = a.X()), (f = c.X());
    f =
      f == h
        ? g.Ba.Tz
        : c.type != g.Ol[a.type]
        ? g.Ba.Wz
        : f.u !== h.u
        ? g.Ba.Rz
        : f.Ra && !h.Ra
        ? g.Ba.Uz
        : g.Ba.jq;
  } else f = g.Ba.Vz;
  return f != g.Ba.jq
    ? f
    : ta(a, c)
    ? d && !ua(a, c, e || 0)
      ? g.Ba.Sz
      : g.Ba.jq
    : g.Ba.Qz;
};
function va(a, c, d) {
  switch (a) {
    case g.Ba.Tz:
      return "Attempted to connect a block to itself.";
    case g.Ba.Rz:
      return "Blocks not on same workspace.";
    case g.Ba.Wz:
      return "Attempt to connect incompatible types.";
    case g.Ba.Vz:
      return "Target connection is null.";
    case g.Ba.Qz:
      return (
        "Connection checks failed. " +
        (c + " expected " + c.Ti + ", found " + d.Ti)
      );
    case g.Ba.Uz:
      return "Connecting non-shadow to shadow block.";
    case g.Ba.Sz:
      return "Drag checks failed.";
    default:
      return "Unknown connection failure: this should never happen!";
  }
}
function ta(a, c) {
  a = a.Ti;
  c = c.Ti;
  if (!a || !c) return !0;
  for (var d = 0; d < a.length; d++) if (-1 != c.indexOf(a[d])) return !0;
  return !1;
}
function ua(a, c, d) {
  if (wa(a, c) > d || c.X().ie()) return !1;
  switch (c.type) {
    case g.Xf:
      return (
        a.oa || -1 != g.rm.indexOf(c)
          ? (a = !1)
          : c.oa
          ? ((a = c.sa()), (a = a.ie() ? !(a.ka && a.ka.sa()) : !1))
          : (a = !0),
        a
      );
    case g.Wf:
      if ((c.isConnected() && !c.sa().ie()) || a.isConnected()) return !1;
      break;
    case g.jb:
      if (c.isConnected() && !c.sa().Lc() && !c.sa().Ra) return !1;
      break;
    case g.kb:
      if (c.isConnected() && !a.X().W && !c.sa().Ra && c.sa().W) return !1;
      break;
    default:
      return !1;
  }
  return -1 != g.rm.indexOf(c) ? !1 : !0;
}
g.C.register(g.C.ea.Ty, g.C.vq, g.Vy);
g.i = {};
g.i.hC = "";
g.i.eb = !0;
g.i.Bv = 0;
g.i.pq = "create";
g.i.bq = g.i.pq;
g.i.Tj = "delete";
g.i.zt = g.i.Tj;
g.i.Qj = "change";
g.i.sE = g.i.Qj;
g.i.Fn = "move";
g.i.At = g.i.Fn;
g.i.oA = "var_create";
g.i.pA = "var_delete";
g.i.rA = "var_rename";
g.i.Eu = "ui";
g.i.Ny = "drag";
g.i.fk = "selected";
g.i.Ht = "click";
g.i.Dz = "marker_move";
g.i.eq = "bubble_open";
g.i.kA = "trashcan_open";
g.i.iA = "toolbox_item_select";
g.i.hA = "theme_change";
g.i.sA = "viewport_change";
g.i.mq = "comment_create";
g.i.Sy = "comment_delete";
g.i.Ry = "comment_change";
g.i.nq = "comment_move";
g.i.jz = "finished_loading";
g.i.wE = [g.i.bq, g.i.At, g.i.mq, g.i.nq];
g.i.wn = [];
g.i.Ha = function (a) {
  g.i.isEnabled() && (g.i.wn.length || setTimeout(g.i.BI, 0), g.i.wn.push(a));
};
g.i.BI = function () {
  for (
    var a = g.i.filter(g.i.wn, !0), c = (g.i.wn.length = 0), d;
    (d = a[c]);
    c++
  )
    if (d.Xc) {
      var e = g.Wb.zo(d.Xc);
      if (e) {
        var f = d;
        if (f.eb)
          for (e.rl.push(f), e.mp.length = 0; e.rl.length > e.Fz && 0 <= e.Fz; )
            e.rl.shift();
        for (var h = 0; (d = e.je[h]); h++) d(f);
      }
    }
};
g.i.filter = function (a, c) {
  a = a.slice();
  c || a.reverse();
  for (var d = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.Jm()) {
      var k = [h.ns ? g.i.Eu : h.type, h.ub, h.Xc].join(" "),
        l = e[k],
        m = l ? l.event : null;
      if (!l) (e[k] = { event: h, index: f }), d.push(h);
      else if (h.type == g.i.Fn && l.index == f - 1)
        (m.Xk = h.Xk), (m.Wk = h.Wk), (m.vj = h.vj), (l.index = f);
      else if (h.type == g.i.Qj && h.element == m.element && h.name == m.name)
        m.newValue = h.newValue;
      else if (h.type != g.i.Ht || m.type != g.i.eq)
        (e[k] = { event: h, index: f }), d.push(h);
    }
  a = d.filter(function (n) {
    return !n.Jm();
  });
  c || a.reverse();
  for (f = 1; (h = a[f]); f++)
    h.type == g.i.Qj && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
g.i.QH = function () {
  for (var a = 0, c; (c = g.i.wn[a]); a++) c.eb = !1;
};
g.i.disable = function () {
  g.i.Bv++;
};
g.i.enable = function () {
  g.i.Bv--;
};
g.i.isEnabled = function () {
  return 0 == g.i.Bv;
};
g.i.wc = function () {
  return g.i.hC;
};
g.i.na = function (a) {
  g.i.hC = "boolean" == typeof a ? (a ? g.g.Zh() : "") : a;
};
g.i.NB = function (a) {
  var c = [];
  a = p(a, !1);
  for (var d = 0, e; (e = a[d]); d++) c[d] = e.id;
  return c;
};
g.i.ma = function (a) {
  var c = g.C.Ao(g.C.ea.jc, a.type);
  if (!c) throw Error("Unknown event type.");
  c = new c();
  c.ma(a);
  c.Xc = (void 0).id;
  return c;
};
g.i.lI = function (a) {
  if ((a.type == g.i.Fn || a.type == g.i.pq) && a.Xc) {
    var c = g.Wb.zo(a.Xc),
      d = c.$d(a.ub);
    if (d) {
      a = g.i.eb;
      try {
        g.i.eb = !1;
        var e = d.getParent();
        if (e && e.isEnabled()) {
          var f = p(d, !1);
          c = 0;
          for (var h; (h = f[c]); c++) h.ke(!0);
        } else if ((d.O || d.ka) && !c.Cc()) {
          do d.ke(!1), (d = q(d));
          while (d);
        }
      } finally {
        g.i.eb = a;
      }
    }
  }
};
g.g.object = {};
g.g.object.V = function (a, c) {
  a.v = c.prototype;
  a.prototype = Object.create(c.prototype);
  a.prototype.constructor = a;
};
g.g.object.Id = function (a, c) {
  for (var d in c) a[d] = c[d];
};
g.g.object.om = function (a, c) {
  for (var d in c)
    a[d] =
      null != c[d] && "object" === typeof c[d]
        ? g.g.object.om(a[d] || Object.create(null), c[d])
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
g.jk = function (a, c, d, e) {
  this.name = a;
  this.Ri = c || Object.create(null);
  this.mr = d || Object.create(null);
  this.XA = e || Object.create(null);
  this.fontStyle = Object.create(null);
  this.py = null;
  g.C.register(g.C.ea.zu, a, this);
};
g.jk.prototype.hg = function () {
  return this.name + "-theme";
};
function xa(a, c) {
  return (c = a.XA[c]) && "string" == typeof c && xa(a, c)
    ? xa(a, c)
    : c
    ? String(c)
    : null;
}
g.jk.fI = function (a, c) {
  var d = new g.jk(a),
    e = c.base;
  e &&
    ("string" == typeof e && (e = g.C.iw(g.C.ea.zu, e)),
    e instanceof g.jk && (g.g.object.om(d, e), (d.name = a)));
  g.g.object.om(d.Ri, c.blockStyles);
  g.g.object.om(d.mr, c.categoryStyles);
  g.g.object.om(d.XA, c.componentStyles);
  g.g.object.om(d.fontStyle, c.fontStyle);
  null != c.startHats && (d.py = c.startHats);
  return d;
};
g.Jh = {};
g.Jh.Fi = {};
g.Jh.Fi.cI = {
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
g.Jh.Fi.mr = {
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
g.Jh.Fi = new g.jk("classic", g.Jh.Fi.cI, g.Jh.Fi.mr);
g.g.Zj = {};
g.g.Zj.XJ = 0;
g.g.Zj.Tr = function () {
  return "blockly-" + (g.g.Zj.XJ++).toString(36);
};
g.g.za = {};
g.g.za.Ft = "categoryToolbox";
g.g.za.lz = "flyoutToolbox";
g.g.za.Qd = { Tq: g.ik, Bt: g.Qn, $j: g.Ke, dk: g.Wl };
g.g.za.hv = function (a) {
  if (!a) return null;
  if (a instanceof Element || "string" == typeof a)
    (a = g.g.za.Ex(a)), (a = g.g.za.YH(a));
  g.g.za.ML(a);
  return a;
};
g.g.za.ML = function (a) {
  var c = a.kind;
  a = a.contents;
  if (c && c != g.g.za.lz && c != g.g.za.Ft)
    throw Error(
      "Invalid toolbox kind " +
        c +
        ". Please supply either " +
        g.g.za.lz +
        " or " +
        g.g.za.Ft
    );
  if (!a) throw Error("Toolbox must have a contents attribute.");
};
g.g.za.fB = function (a) {
  return a
    ? a.contents
      ? a.contents
      : Array.isArray(a) && 0 < a.length && !a[0].nodeType
      ? a
      : g.g.za.Fy(a)
    : [];
};
g.g.za.Ho = function (a) {
  if (!a) return !1;
  var c = a.kind;
  return c
    ? c == g.g.za.Ft
    : !!a.contents.filter(function (d) {
        return "CATEGORY" == d.kind.toUpperCase();
      }).length;
};
g.g.za.wC = function (a) {
  return a && a.contents
    ? !!a.contents.filter(function (c) {
        return "CATEGORY" == c.kind.toUpperCase();
      }).length
    : !1;
};
g.g.za.YH = function (a) {
  var c = { contents: g.g.za.Fy(a) };
  a instanceof Node && g.g.za.DA(a, c);
  return c;
};
g.g.za.Fy = function (a) {
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
          (f.contents = g.g.za.Fy(e));
      g.g.za.DA(e, f);
      c.push(f);
    }
  return c;
};
g.g.za.DA = function (a, c) {
  for (var d = 0; d < a.attributes.length; d++) {
    var e = a.attributes[d];
    -1 < e.nodeName.indexOf("css-")
      ? ((c.cssconfig = c.cssconfig || {}),
        (c.cssconfig[e.nodeName.replace("css-", "")] = e.value))
      : (c[e.nodeName] = e.value);
  }
};
g.g.za.Ex = function (a) {
  if (a) {
    if (
      ("string" != typeof a &&
        (g.g.userAgent.kf && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a &&
        ((a = g.T.ff(a)), "xml" != a.nodeName.toLowerCase()))
    )
      throw TypeError("Toolbox should be an <xml> document.");
  } else a = null;
  return a;
};
g.i.Abstract = function () {
  this.Ye = null;
  this.Xc = void 0;
  this.group = g.i.wc();
  this.eb = g.i.eb;
};
b = g.i.Abstract.prototype;
b.ns = !1;
b.ya = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
b.ma = function (a) {
  this.Ye = !1;
  this.group = a.group;
};
b.Jm = function () {
  return !1;
};
b.run = function () {};
function ya(a) {
  if (a.Xc) var c = g.Wb.zo(a.Xc);
  if (!c)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return c;
}
g.g.xml = {};
g.g.xml.vG = "https://developers.google.com/blockly/xml";
g.g.xml.document = function () {
  return document;
};
g.g.xml.createElement = function (a) {
  return g.g.xml.document().createElementNS(g.g.xml.vG, a);
};
g.g.xml.createTextNode = function (a) {
  return g.g.xml.document().createTextNode(a);
};
g.g.xml.CL = function (a) {
  return new DOMParser().parseFromString(a, "text/xml");
};
g.g.xml.te = function (a) {
  return new XMLSerializer().serializeToString(a);
};
g.i.sg = function (a) {
  g.i.sg.v.constructor.call(this);
  this.ub = (this.Ye = "undefined" == typeof a) ? "" : a.id;
  this.Xc = this.Ye ? "" : a.u.id;
};
g.g.object.V(g.i.sg, g.i.Abstract);
g.i.sg.prototype.ya = function () {
  var a = g.i.sg.v.ya.call(this);
  a.blockId = this.ub;
  return a;
};
g.i.sg.prototype.ma = function (a) {
  g.i.sg.v.ma.call(this, a);
  this.ub = a.blockId;
};
g.i.Ei = function (a, c, d, e, f) {
  g.i.Ei.v.constructor.call(this, a);
  a &&
    ((this.element = "undefined" == typeof c ? "" : c),
    (this.name = "undefined" == typeof d ? "" : d),
    (this.oldValue = "undefined" == typeof e ? "" : e),
    (this.newValue = "undefined" == typeof f ? "" : f));
};
g.g.object.V(g.i.Ei, g.i.sg);
g.i.uh = g.i.Ei;
b = g.i.Ei.prototype;
b.type = g.i.Qj;
b.ya = function () {
  var a = g.i.Ei.v.ya.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.oldValue = this.oldValue;
  a.newValue = this.newValue;
  return a;
};
b.ma = function (a) {
  g.i.Ei.v.ma.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.oldValue = a.oldValue;
  this.newValue = a.newValue;
};
b.Jm = function () {
  return this.oldValue == this.newValue;
};
b.run = function (a) {
  var c = ya(this).$d(this.ub);
  if (c)
    switch (
      (c.rd && c.rd.Ob(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (c = w(c, this.name))
          ? c.setValue(a)
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        c.Gj(a || null);
        break;
      case "collapsed":
        c.Fj(!!a);
        break;
      case "disabled":
        c.ke(!a);
        break;
      case "inline":
        c.Ae(!!a);
        break;
      case "mutation":
        var d = "";
        c.Xa && (d = (d = c.Xa()) && g.T.te(d));
        if (c.Eb) {
          var e = g.T.ff(a || "<mutation/>");
          c.Eb(e);
        }
        g.i.Ha(new g.i.Ei(c, "mutation", null, d, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.ub);
};
g.i.Sf = function (a) {
  g.i.Sf.v.constructor.call(this, a);
  a &&
    (a.Ra && (this.eb = !1),
    (this.xml = a.u.ra ? g.T.Tu(a) : g.T.Ph(a)),
    (this.jj = g.i.NB(a)));
};
g.g.object.V(g.i.Sf, g.i.sg);
g.i.hq = g.i.Sf;
g.i.Sf.prototype.type = g.i.pq;
g.i.Sf.prototype.ya = function () {
  var a = g.i.Sf.v.ya.call(this);
  a.xml = g.T.te(this.xml);
  a.ids = this.jj;
  this.eb || (a.recordUndo = this.eb);
  return a;
};
g.i.Sf.prototype.ma = function (a) {
  g.i.Sf.v.ma.call(this, a);
  this.xml = g.T.ff(a.xml);
  this.jj = a.ids;
  void 0 !== a.recordUndo && (this.eb = a.recordUndo);
};
g.i.Sf.prototype.run = function (a) {
  var c = ya(this);
  if (a)
    (a = g.g.xml.createElement("xml")), a.appendChild(this.xml), g.T.Yi(a, c);
  else {
    a = 0;
    for (var d; (d = this.jj[a]); a++) {
      var e = c.$d(d);
      e
        ? e.J(!1)
        : d == this.ub &&
          console.warn("Can't uncreate non-existent block: " + d);
    }
  }
};
g.i.vg = function (a) {
  g.i.vg.v.constructor.call(this, a);
  if (a) {
    if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
    a.Ra && (this.eb = !1);
    this.Pm = a.u.ra ? g.T.Tu(a) : g.T.Ph(a);
    this.jj = g.i.NB(a);
  }
};
g.g.object.V(g.i.vg, g.i.sg);
g.i.xE = g.i.vg;
g.i.vg.prototype.type = g.i.Tj;
g.i.vg.prototype.ya = function () {
  var a = g.i.vg.v.ya.call(this);
  a.oldXml = g.T.te(this.Pm);
  a.ids = this.jj;
  this.eb || (a.recordUndo = this.eb);
  return a;
};
g.i.vg.prototype.ma = function (a) {
  g.i.vg.v.ma.call(this, a);
  this.Pm = g.T.ff(a.oldXml);
  this.jj = a.ids;
  void 0 !== a.recordUndo && (this.eb = a.recordUndo);
};
g.i.vg.prototype.run = function (a) {
  var c = ya(this);
  if (a) {
    a = 0;
    for (var d; (d = this.jj[a]); a++) {
      var e = c.$d(d);
      e
        ? e.J(!1)
        : d == this.ub && console.warn("Can't delete non-existent block: " + d);
    }
  } else
    (a = g.g.xml.createElement("xml")), a.appendChild(this.Pm), g.T.Yi(a, c);
};
g.i.ak = function (a) {
  g.i.ak.v.constructor.call(this, a);
  a &&
    (a.Ra && (this.eb = !1),
    (a = Aa(this)),
    (this.bD = a.jD),
    (this.YC = a.rC),
    (this.jx = a.gB));
};
g.g.object.V(g.i.ak, g.i.sg);
g.i.rn = g.i.ak;
b = g.i.ak.prototype;
b.type = g.i.Fn;
b.ya = function () {
  var a = g.i.ak.v.ya.call(this);
  this.Xk && (a.newParentId = this.Xk);
  this.Wk && (a.newInputName = this.Wk);
  this.vj &&
    (a.newCoordinate = Math.round(this.vj.x) + "," + Math.round(this.vj.y));
  this.eb || (a.recordUndo = this.eb);
  return a;
};
b.ma = function (a) {
  g.i.ak.v.ma.call(this, a);
  this.Xk = a.newParentId;
  this.Wk = a.newInputName;
  if (a.newCoordinate) {
    var c = a.newCoordinate.split(",");
    this.vj = new g.g.Z(Number(c[0]), Number(c[1]));
  }
  void 0 !== a.recordUndo && (this.eb = a.recordUndo);
};
b.dl = function () {
  var a = Aa(this);
  this.Xk = a.jD;
  this.Wk = a.rC;
  this.vj = a.gB;
};
function Aa(a) {
  var c = ya(a).$d(a.ub);
  a = {};
  var d = c.getParent();
  if (d) {
    if (((a.jD = d.id), (c = Ba(d, c)))) a.rC = c.name;
  } else a.gB = c.bb();
  return a;
}
b.Jm = function () {
  return this.bD == this.Xk && this.YC == this.Wk && g.g.Z.zf(this.jx, this.vj);
};
b.run = function (a) {
  var c = ya(this),
    d = c.$d(this.ub);
  if (d) {
    var e = a ? this.Xk : this.bD,
      f = a ? this.Wk : this.YC;
    a = a ? this.vj : this.jx;
    var h = null;
    if (e && ((h = c.$d(e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    d.getParent() && y(d);
    if (a) (f = d.bb()), d.moveBy(a.x - f.x, a.y - f.y);
    else {
      d = d.O || d.ka;
      if (f) {
        if ((c = z(h, f))) var k = c.connection;
      } else d.type == g.Xf && (k = h.W);
      k
        ? d.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.ub);
};
g.C.register(g.C.ea.jc, g.i.pq, g.i.Sf);
g.C.register(g.C.ea.jc, g.i.Tj, g.i.vg);
g.C.register(g.C.ea.jc, g.i.Qj, g.i.Ei);
g.C.register(g.C.ea.jc, g.i.Fn, g.i.ak);
g.i.Fl = function (a) {
  this.Ye = "undefined" == typeof a;
  this.Xc = a ? a.id : "";
  this.group = g.i.wc();
  this.eb = !1;
};
g.g.object.V(g.i.Fl, g.i.Abstract);
g.i.Fl.prototype.type = g.i.jz;
g.i.Fl.prototype.ya = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.Xc && (a.workspaceId = this.Xc);
  return a;
};
g.i.Fl.prototype.ma = function (a) {
  this.Ye = !1;
  this.Xc = a.workspaceId;
  this.group = a.group;
};
g.C.register(g.C.ea.jc, g.i.jz, g.i.Fl);
g.i.Mh = function (a) {
  g.i.Mh.v.constructor.call(this);
  this.Lj = (this.Ye = "undefined" == typeof a) ? "" : a.Qa();
  this.Xc = this.Ye ? "" : a.u.id;
};
g.g.object.V(g.i.Mh, g.i.Abstract);
g.i.Mh.prototype.ya = function () {
  var a = g.i.Mh.v.ya.call(this);
  a.varId = this.Lj;
  return a;
};
g.i.Mh.prototype.ma = function (a) {
  g.i.Mh.v.ya.call(this);
  this.Lj = a.varId;
};
g.i.qf = function (a) {
  g.i.qf.v.constructor.call(this, a);
  a && ((this.vl = a.type), (this.ul = a.name));
};
g.g.object.V(g.i.qf, g.i.Mh);
g.i.qf.prototype.type = g.i.oA;
g.i.qf.prototype.ya = function () {
  var a = g.i.qf.v.ya.call(this);
  a.varType = this.vl;
  a.varName = this.ul;
  return a;
};
g.i.qf.prototype.ma = function (a) {
  g.i.qf.v.ma.call(this, a);
  this.vl = a.varType;
  this.ul = a.varName;
};
g.i.qf.prototype.run = function (a) {
  var c = ya(this);
  a ? c.xf(this.ul, this.vl, this.Lj) : c.Xh(this.Lj);
};
g.i.ag = function (a) {
  g.i.ag.v.constructor.call(this, a);
  a && ((this.vl = a.type), (this.ul = a.name));
};
g.g.object.V(g.i.ag, g.i.Mh);
g.i.ag.prototype.type = g.i.pA;
g.i.ag.prototype.ya = function () {
  var a = g.i.ag.v.ya.call(this);
  a.varType = this.vl;
  a.varName = this.ul;
  return a;
};
g.i.ag.prototype.ma = function (a) {
  g.i.ag.v.ma.call(this, a);
  this.vl = a.varType;
  this.ul = a.varName;
};
g.i.ag.prototype.run = function (a) {
  var c = ya(this);
  a ? c.Xh(this.Lj) : c.xf(this.ul, this.vl, this.Lj);
};
g.i.Fg = function (a, c) {
  g.i.Fg.v.constructor.call(this, a);
  a && ((this.lx = a.name), (this.gx = "undefined" == typeof c ? "" : c));
};
g.g.object.V(g.i.Fg, g.i.Mh);
g.i.Fg.prototype.type = g.i.rA;
g.i.Fg.prototype.ya = function () {
  var a = g.i.Fg.v.ya.call(this);
  a.oldName = this.lx;
  a.newName = this.gx;
  return a;
};
g.i.Fg.prototype.ma = function (a) {
  g.i.Fg.v.ma.call(this, a);
  this.lx = a.oldName;
  this.gx = a.newName;
};
g.i.Fg.prototype.run = function (a) {
  var c = ya(this);
  a ? c.Dj(this.Lj, this.gx) : c.Dj(this.Lj, this.lx);
};
g.C.register(g.C.ea.jc, g.i.oA, g.i.qf);
g.C.register(g.C.ea.jc, g.i.pA, g.i.ag);
g.C.register(g.C.ea.jc, g.i.rA, g.i.Fg);
g.T = {};
g.T.UL = function () {
  var a = A,
    c = g.g.xml.createElement("xml"),
    d = g.T.QL(g.ga.HA(a));
  d.hasChildNodes() && c.appendChild(d);
  var e = [].concat(a.ot);
  1 < e.length &&
    ((a.oh.offset = Math.sin(g.g.ze.uy(g.Wb.$z))),
    a.M && (a.oh.offset *= -1),
    e.sort(a.oh));
  d = 0;
  for (var f; (f = e[d]); d++) c.appendChild(f.TD(!0));
  a = a.dc(!0);
  for (d = 0; (e = a[d]); d++) c.appendChild(g.T.Tu(e, !0));
  return c;
};
g.T.QL = function (a) {
  for (var c = g.g.xml.createElement("variables"), d = 0, e; (e = a[d]); d++) {
    var f = g.g.xml.createElement("variable");
    f.appendChild(g.g.xml.createTextNode(e.name));
    e.type && f.setAttribute("type", e.type);
    f.id = e.Qa();
    c.appendChild(f);
  }
  return c;
};
g.T.Tu = function (a, c) {
  if (a.ie() && ((a = Ca(a, !1)[0]), !a)) return new DocumentFragment();
  var d;
  a.u.M && (d = a.u.Yg());
  c = g.T.Ph(a, c);
  var e = a.bb();
  c.setAttribute("x", Math.round(a.u.M ? d - e.x : e.x));
  c.setAttribute("y", Math.round(e.y));
  return c;
};
g.T.AI = function (a) {
  var c = !1;
  a.name &&
    (a.gk
      ? (c = !0)
      : a.un &&
        (console.warn(
          "Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."
        ),
        (c = !0)));
  return c
    ? ((c = g.g.xml.createElement("field")),
      c.setAttribute("name", a.name || ""),
      a.vy(c))
    : null;
};
g.T.zH = function (a, c) {
  for (var d = 0, e; (e = a.S[d]); d++)
    for (var f = 0, h; (h = e.hb[f]); f++) (h = g.T.AI(h)) && c.appendChild(h);
};
g.T.Ph = function (a, c) {
  if (a.ie()) return (a = Ca(a, !1)[0]) ? g.T.Ph(a) : new DocumentFragment();
  var d = g.g.xml.createElement(a.Ra ? "shadow" : "block");
  d.setAttribute("type", a.type);
  c || d.setAttribute("id", a.id);
  if (a.Xa) {
    var e = a.Xa();
    e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e);
  }
  g.T.zH(a, d);
  if ((e = a.Pe.text)) {
    var f = a.Pe.size,
      h = a.Pe.Ix,
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
    if (f.type != g.zh) {
      var m = f.connection.sa();
      f.type == g.jb
        ? (l = g.g.xml.createElement("value"))
        : f.type == g.kb && (l = g.g.xml.createElement("statement"));
      k = f.connection.ym();
      !k || (m && m.Ra) || l.appendChild(g.T.UA(k, c));
      m &&
        ((k = g.T.Ph(m, c)),
        k.nodeType == g.g.o.Ni.ELEMENT_NODE && (l.appendChild(k), (h = !1)));
      l.setAttribute("name", f.name);
      h || d.appendChild(l);
    }
  }
  void 0 != a.ei && a.ei != a.pJ && d.setAttribute("inline", a.ei);
  a.isCollapsed() && d.setAttribute("collapsed", !0);
  a.isEnabled() || d.setAttribute("disabled", !0);
  a.ye() || a.Ra || d.setAttribute("deletable", !1);
  a.Lc() || a.Ra || d.setAttribute("movable", !1);
  a.ge() || d.setAttribute("editable", !1);
  if ((e = q(a)))
    (k = g.T.Ph(e, c)),
      k.nodeType == g.g.o.Ni.ELEMENT_NODE &&
        ((l = g.g.xml.createElement("next")),
        l.appendChild(k),
        d.appendChild(l));
  k = a.W && a.W.ym();
  !k || (e && e.Ra) || l.appendChild(g.T.UA(k, c));
  return d;
};
g.T.UA = function (a, c) {
  for (var d = (a = a.cloneNode(!0)), e; d; )
    if ((c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild))
      d = d.firstChild;
    else {
      for (; d && !d.nextSibling; )
        (e = d),
          (d = d.parentNode),
          e.nodeType == g.g.o.Ni.TEXT_NODE &&
            "" == e.data.trim() &&
            d.firstChild != e &&
            g.g.o.removeNode(e);
      d &&
        ((e = d),
        (d = d.nextSibling),
        e.nodeType == g.g.o.Ni.TEXT_NODE &&
          "" == e.data.trim() &&
          g.g.o.removeNode(e));
    }
  return a;
};
g.T.te = function (a) {
  return g.g.xml.te(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>");
};
g.T.xO = function (a) {
  a = g.T.te(a).split("<");
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
g.T.ff = function (a) {
  var c = g.g.xml.CL(a);
  if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length)
    throw Error("textToDom was unable to parse: " + a);
  return c.documentElement;
};
g.T.uO = function (a, c) {
  c.gd(!1);
  c.clear();
  a = g.T.Yi(a, c);
  c.gd(!0);
  return a;
};
g.T.Yi = function (a, c) {
  if (a instanceof g.Wb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  c.M && (e = c.Yg());
  d = [];
  g.g.o.Ep();
  var f = g.i.wc();
  f || g.i.na(!0);
  c.gd && c.gd(!1);
  var h = !0;
  try {
    for (var k = 0, l; (l = a.childNodes[k]); k++) {
      var m = l.nodeName.toLowerCase(),
        n = l;
      if ("block" == m || ("shadow" == m && !g.i.eb)) {
        var t = g.T.vk(n, c);
        d.push(t.id);
        var u = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10,
          x = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
        isNaN(u) || isNaN(x) || t.moveBy(c.M ? e - u : u, x);
        h = !1;
      } else {
        if ("shadow" == m)
          throw TypeError("Shadow block cannot be a top-level block.");
        if ("comment" == m)
          c.ra
            ? g.Zl
              ? g.Zl.tm(n)
              : console.warn(
                  "Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment."
                )
            : g.AA
            ? g.AA.tm(n)
            : console.warn(
                "Missing require for Blockly.WorkspaceComment, ignoring workspace comment."
              );
        else if ("variables" == m) {
          if (h) g.T.sI(n, c);
          else
            throw Error(
              "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
            );
          h = !1;
        }
      }
    }
  } finally {
    f || g.i.na(!1), g.g.o.Fp();
  }
  c.gd && c.gd(!0);
  g.i.Ha(new g.i.Fl(c));
  return d;
};
g.T.rO = function (a, c) {
  var d;
  Object.prototype.hasOwnProperty.call(c, "scale") && (d = Da(c));
  a = g.T.Yi(a, c);
  if (d && d.top != d.bottom) {
    var e = d.bottom;
    var f = c.M ? d.right : d.left;
    var h = Infinity,
      k = -Infinity,
      l = Infinity;
    for (d = 0; d < a.length; d++) {
      var m = c.$d(a[d]).bb();
      m.y < l && (l = m.y);
      m.x < h && (h = m.x);
      m.x > k && (k = m.x);
    }
    e = e - l + 10;
    f = c.M ? f - k : f - h;
    for (d = 0; d < a.length; d++) c.$d(a[d]).moveBy(f, e);
  }
  return a;
};
g.T.vk = function (a, c) {
  if (a instanceof g.Wb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  g.i.disable();
  d = c.zk();
  try {
    var e = g.T.Hv(a, c),
      f = p(e, !1);
    if (c.ra) {
      Ea(e, !1);
      for (var h = f.length - 1; 0 <= h; h--) f[h].xe();
      for (h = f.length - 1; 0 <= h; h--) f[h].Ia(!1);
      setTimeout(function () {
        e.eg || Ea(e, !0);
      }, 1);
      Fa(e);
      Ga(c);
    } else for (h = f.length - 1; 0 <= h; h--) f[h].Gk();
  } finally {
    g.i.enable();
  }
  if (g.i.isEnabled()) {
    a = g.ga.JB(c, d);
    for (h = 0; h < a.length; h++) g.i.Ha(new g.i.qf(a[h]));
    g.i.Ha(new g.i.hq(e));
  }
  return e;
};
g.T.sI = function (a, c) {
  for (var d = 0, e; (e = a.childNodes[d]); d++)
    if (e.nodeType == g.g.o.Ni.ELEMENT_NODE) {
      var f = e.getAttribute("type"),
        h = e.getAttribute("id");
      c.xf(e.textContent, f, h);
    }
};
g.T.Hv = function (a, c) {
  var d = null,
    e = a.getAttribute("type");
  if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
  var f = a.getAttribute("id");
  d = c.gh(e, f);
  var h = null;
  f = 0;
  for (var k; (k = a.childNodes[f]); f++)
    if (k.nodeType != g.g.o.Ni.TEXT_NODE) {
      for (var l, m = (h = null), n = 0; (l = k.childNodes[n]); n++)
        l.nodeType == g.g.o.Ni.ELEMENT_NODE &&
          ("block" == l.nodeName.toLowerCase()
            ? (h = l)
            : "shadow" == l.nodeName.toLowerCase() && (m = l));
      n = !1;
      var t = k.getAttribute("name");
      l = k;
      switch (k.nodeName.toLowerCase()) {
        case "mutation":
          d.Eb && (d.Eb(l), d.xe && (n = !0));
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
          d.Gj(m);
          d.Pe.Ix = h;
          isNaN(k) || isNaN(l) || (d.Pe.size = new g.g.re(k, l));
          h &&
            d.LI &&
            !d.Ub &&
            setTimeout(function () {
              d.vf.Ob(!0);
            }, 1);
          break;
        case "data":
          d.data = k.textContent;
          break;
        case "title":
        case "field":
          g.T.rI(d, t, l);
          break;
        case "value":
        case "statement":
          l = z(d, t);
          if (!l) {
            console.warn("Ignoring non-existent input " + t + " in block " + e);
            break;
          }
          if (h)
            if (((h = g.T.Hv(h, c)), h.O)) l.connection.connect(h.O);
            else if (h.ka) l.connection.connect(h.ka);
            else
              throw TypeError(
                "Child block does not have output or previous statement."
              );
          m && l.connection.Ym(m);
          break;
        case "next":
          if (h) {
            if (!d.W) throw TypeError("Next statement does not exist.");
            if (d.W.isConnected())
              throw TypeError("Next statement is already connected.");
            h = g.T.Hv(h, c);
            if (!h.ka)
              throw TypeError("Next block does not have previous statement.");
            d.W.connect(h.ka);
          }
          m && d.W && d.W.Ym(m);
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  n && d.xe();
  (f = a.getAttribute("inline")) && d.Ae("true" == f);
  (f = a.getAttribute("disabled")) && d.ke("true" != f && "disabled" != f);
  if ((f = a.getAttribute("deletable"))) d.uv = "true" == f;
  (f = a.getAttribute("movable")) && d.at("true" == f);
  (f = a.getAttribute("editable")) && d.Zx("true" == f);
  (f = a.getAttribute("collapsed")) && d.Fj("true" == f);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = Ca(d, !1);
    for (f = 0; (c = a[f]); f++)
      if (!c.Ra) throw TypeError("Shadow block not allowed non-shadow child.");
    if (d.bi().length)
      throw TypeError("Shadow blocks cannot have variable references.");
    d.by(!0);
  }
  return d;
};
g.T.rI = function (a, c, d) {
  var e = w(a, c);
  e
    ? e.tm(d)
    : console.warn("Ignoring non-existent field " + c + " in block " + a.type);
};
g.T.hI = function (a) {
  for (var c = 0, d; (d = a.childNodes[c]); c++)
    if ("next" == d.nodeName.toLowerCase()) {
      a.removeChild(d);
      break;
    }
};
g.Pd = function (a) {
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
    d = g.g.za.hv(a.toolbox);
    e = g.g.za.Ho(d);
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
  var t = !!a.rtl,
    u = a.horizontalLayout;
  void 0 === u && (u = !1);
  var x = a.toolboxPosition;
  x = "end" !== x;
  x = u
    ? x
      ? g.g.za.Qd.Tq
      : g.g.za.Qd.Bt
    : x == t
    ? g.g.za.Qd.dk
    : g.g.za.Qd.$j;
  var I = a.css;
  void 0 === I && (I = !0);
  var sa = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (sa = a.media) : a.path && (sa = a.path + "media/");
  var za = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
    Ie = a.renderer || "geras",
    Je = a.plugins || {};
  this.M = t;
  this.Hf = za;
  this.collapse = h;
  this.$n = k;
  this.disable = l;
  this.readOnly = c;
  this.Xw = a.maxBlocks || Infinity;
  this.ts = a.maxInstances;
  this.yj = sa;
  this.Ho = e;
  this.fd = g.Pd.pK(a, e);
  this.kC = f;
  this.us = n;
  this.jJ = m;
  this.gJ = I;
  this.Fd = u;
  this.fh = d;
  this.gC = g.Pd.oK(a);
  this.Ab = g.Pd.rK(a);
  this.La = x;
  this.EL = g.Pd.qK(a);
  this.qp = Ie;
  this.rp = a.rendererOverrides;
  this.nw = null;
  this.yc = a.parentWorkspace;
  this.plugins = Je;
};
g.bM = function () {};
g.Pd.pK = function (a, c) {
  var d = a.move || {},
    e = {};
  e.scrollbars =
    void 0 === d.scrollbars && void 0 === a.scrollbars
      ? c
      : !!d.scrollbars || !!a.scrollbars;
  e.Nj = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
  e.Zi = e.scrollbars ? (void 0 === d.drag ? !0 : !!d.drag) : !1;
  return e;
};
g.Pd.rK = function (a) {
  a = a.zoom || {};
  var c = {};
  c.controls = void 0 === a.controls ? !1 : !!a.controls;
  c.Nj = void 0 === a.wheel ? !1 : !!a.wheel;
  c.LD = void 0 === a.startScale ? 1 : Number(a.startScale);
  c.Vo = void 0 === a.maxScale ? 3 : Number(a.maxScale);
  c.Xo = void 0 === a.minScale ? 0.3 : Number(a.minScale);
  c.jL = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
  c.Hx = void 0 === a.pinch ? c.Nj || c.controls : !!a.pinch;
  return c;
};
g.Pd.oK = function (a) {
  a = a.grid || {};
  var c = {};
  c.spacing = Number(a.spacing) || 0;
  c.vb = a.colour || "#888";
  c.length = void 0 === a.length ? 1 : Number(a.length);
  c.XO = 0 < c.spacing && !!a.snap;
  return c;
};
g.Pd.qK = function (a) {
  a = a.theme || g.Jh.Fi;
  return "string" == typeof a
    ? g.C.iw(g.C.ea.zu, a)
    : a instanceof g.jk
    ? a
    : g.jk.fI(a.name || "builtin" + g.g.Zj.Tr(), a);
};
g.Pd.Ex = function (a) {
  g.g.vv.warn(
    "Blockly.Options.parseToolboxTree",
    "September 2020",
    "September 2021",
    "Blockly.utils.toolbox.parseToolboxTree"
  );
  return g.g.za.Ex(a);
};
g.Hu = function (a) {
  this.Ua = Object.create(null);
  this.u = a;
};
b = g.Hu.prototype;
b.clear = function () {
  this.Ua = Object.create(null);
};
b.Xs = function (a, c) {
  var d = this.Ed(c, a.type),
    e = B(this.u, !1);
  g.i.na(!0);
  try {
    if (d && d.Qa() != a.Qa()) {
      var f = a.type;
      c != d.name && Ha(d, c, e);
      for (c = 0; c < e.length; c++) e[c].Ws(a.Qa(), d.Qa());
      g.i.Ha(new g.i.ag(a));
      this.Ua[f].splice(this.Fo(f).indexOf(a), 1);
    } else Ha(a, c, e);
  } finally {
    g.i.na(!1);
  }
};
b.Dj = function (a, c) {
  var d = this.kg(a);
  if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.Xs(d, c);
};
function Ha(a, c, d) {
  g.i.Ha(new g.i.Fg(a, c));
  a.name = c;
  for (c = 0; c < d.length; c++) d[c].qt(a);
}
b.xf = function (a, c, d) {
  var e = this.Ed(a, c);
  if (e) {
    if (d && e.Qa() != d)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.Qa() +
          '" which conflicts with the passed in id, "' +
          d +
          '".'
      );
    return e;
  }
  if (d && this.kg(d))
    throw Error('Variable id, "' + d + '", is already in use.');
  e = d || g.g.Zh();
  c = c || "";
  e = new g.Rn(this.u, a, c, e);
  a = this.Ua[c] || [];
  a.push(e);
  delete this.Ua[c];
  this.Ua[c] = a;
  return e;
};
b.Xh = function (a) {
  var c = this.kg(a);
  if (c) {
    var d = c.name,
      e = this.mw(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = C(f, "NAME");
        d = g.h.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace(
          "%2",
          a
        );
        g.alert(d);
        return;
      }
    var h = this;
    1 < e.length
      ? ((d = g.h.DELETE_VARIABLE_CONFIRMATION.replace(
          "%1",
          String(e.length)
        ).replace("%2", d)),
        g.confirm(d, function (k) {
          k && c && Ia(h, c, e);
        }))
      : Ia(h, c, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
function Ia(a, c, d) {
  var e = g.i.wc();
  e || g.i.na(!0);
  try {
    for (var f = 0; f < d.length; f++) d[f].J(!0);
    var h = a.Ua[c.type];
    a = 0;
    for (var k; (k = h[a]); a++)
      if (k.Qa() == c.Qa()) {
        h.splice(a, 1);
        g.i.Ha(new g.i.ag(c));
        break;
      }
  } finally {
    e || g.i.na(!1);
  }
}
b.Ed = function (a, c) {
  if ((c = this.Ua[c || ""]))
    for (var d = 0, e; (e = c[d]); d++) if (g.Od.zf(e.name, a)) return e;
  return null;
};
b.kg = function (a) {
  for (var c = Object.keys(this.Ua), d = 0; d < c.length; d++)
    for (var e = c[d], f = 0, h; (h = this.Ua[e][f]); f++)
      if (h.Qa() == a) return h;
  return null;
};
b.Fo = function (a) {
  return (a = this.Ua[a || ""]) ? a.slice() : [];
};
b.lw = function (a) {
  var c = {};
  g.g.object.Id(c, this.Ua);
  a && a.zj && g.g.object.Id(c, a.zj.Ua);
  a = Object.keys(c);
  c = !1;
  for (var d = 0; d < a.length; d++) "" == a[d] && (c = !0);
  c || a.push("");
  return a;
};
b.zk = function () {
  var a = [],
    c;
  for (c in this.Ua) a = a.concat(this.Ua[c]);
  return a;
};
b.Zv = function () {
  var a = [],
    c;
  for (c in this.Ua)
    for (var d = this.Ua[c], e = 0, f; (f = d[e]); e++) a.push(f.name);
  return a;
};
b.mw = function (a) {
  for (var c = [], d = B(this.u, !1), e = 0; e < d.length; e++) {
    var f = d[e].bi();
    if (f) for (var h = 0; h < f.length; h++) f[h].Qa() == a && c.push(d[e]);
  }
  return c;
};
g.Wb = function (a) {
  this.id = g.g.Zh();
  g.Wb.Tn[this.id] = this;
  this.options = a || new g.Pd({});
  this.M = !!this.options.M;
  this.Fd = !!this.options.Fd;
  this.La = this.options.La;
  this.bo = new (g.C.Qr(g.C.ea.Ty, this.options))(this);
  this.Mp = [];
  this.ot = [];
  this.xr = Object.create(null);
  this.je = [];
  this.rl = [];
  this.mp = [];
  this.Su = Object.create(null);
  this.Bi = Object.create(null);
  this.Ua = new g.Hu(this);
  this.zj = null;
};
b = g.Wb.prototype;
b.ra = !1;
b.zw = !1;
b.Fz = 1024;
b.zr = null;
b.J = function () {
  this.je.length = 0;
  this.clear();
  delete g.Wb.Tn[this.id];
};
g.Wb.$z = 3;
b = g.Wb.prototype;
b.oh = function (a, c) {
  a = a.bb();
  c = c.bb();
  return (
    a.y +
    g.Wb.prototype.oh.offset * a.x -
    (c.y + g.Wb.prototype.oh.offset * c.x)
  );
};
b.Yq = function (a) {
  this.Mp.push(a);
};
b.Vs = function (a) {
  if (!g.g.$q(this.Mp, a))
    throw Error("Block not present in workspace's list of top-most blocks.");
};
b.dc = function (a) {
  var c = [].concat(this.Mp);
  a &&
    1 < c.length &&
    ((this.oh.offset = Math.sin(g.g.ze.uy(g.Wb.$z))),
    this.M && (this.oh.offset *= -1),
    c.sort(this.oh));
  return c;
};
function Ja(a, c) {
  return a.Bi[c] ? a.Bi[c].slice(0) : [];
}
function B(a, c) {
  if (c) {
    a = a.dc(!0);
    c = [];
    for (var d = 0; d < a.length; d++) c.push.apply(c, p(a[d], !0));
  } else
    for (c = a.dc(!1), d = 0; d < c.length; d++) c.push.apply(c, Ca(c[d], !1));
  return c.filter(function (e) {
    return !e.ie();
  });
}
b.clear = function () {
  this.zw = !0;
  try {
    var a = g.i.wc();
    for (a || g.i.na(!0); this.Mp.length; ) this.Mp[0].J(!1);
    for (; this.ot.length; ) this.ot[this.ot.length - 1].J(!1);
    a || g.i.na(!1);
    this.Ua.clear();
    this.zj && this.zj.clear();
  } finally {
    this.zw = !1;
  }
};
b.Dj = function (a, c) {
  this.Ua.Dj(a, c);
};
b.xf = function (a, c, d) {
  return this.Ua.xf(a, c, d);
};
b.mw = function (a) {
  return this.Ua.mw(a);
};
b.Xh = function (a) {
  this.Ua.Xh(a);
};
b.Ed = function (a, c) {
  return this.Ua.Ed(a, c);
};
b.kg = function (a) {
  return this.Ua.kg(a);
};
b.Fo = function (a) {
  return this.Ua.Fo(a);
};
b.lw = function () {
  return this.Ua.lw(this);
};
b.zk = function () {
  return this.Ua.zk();
};
b.Zv = function () {
  return this.Ua.Zv();
};
b.Yg = function () {
  return 0;
};
b.gh = function (a, c) {
  return new g.ne(this, a, c);
};
function Ka(a) {
  return isNaN(a.options.Xw) ? Infinity : a.options.Xw - B(a, !1).length;
}
function La(a, c) {
  if (!Ma(a)) return !0;
  var d = 0,
    e;
  for (e in c) {
    if (
      c[e] >
      (a.options.ts
        ? (void 0 !== a.options.ts[e] ? a.options.ts[e] : Infinity) -
          Ja(a, e).length
        : Infinity)
    )
      return !1;
    d += c[e];
  }
  return d > Ka(a) ? !1 : !0;
}
function Ma(a) {
  return Infinity != a.options.Xw || !!a.options.ts;
}
function Na(a, c) {
  var d = c ? a.mp : a.rl;
  a = c ? a.rl : a.mp;
  var e = d.pop();
  if (e) {
    for (var f = [e]; d.length && e.group && e.group == d[d.length - 1].group; )
      f.push(d.pop());
    for (d = 0; (e = f[d]); d++) a.push(e);
    f = g.i.filter(f, c);
    g.i.eb = !1;
    try {
      for (d = 0; (e = f[d]); d++) e.run(c);
    } finally {
      g.i.eb = !0;
    }
  }
}
function D(a, c) {
  a.je.push(c);
}
function Oa(a, c) {
  g.g.$q(a.je, c);
}
b.$d = function (a) {
  return this.Su[a] || null;
};
b.gy = function (a) {
  this.Ua = a;
};
g.Wb.Tn = Object.create(null);
g.Wb.zo = function (a) {
  return g.Wb.Tn[a] || null;
};
g.Wb.getAll = function () {
  var a = [],
    c;
  for (c in g.Wb.Tn) a.push(g.Wb.Tn[c]);
  return a;
};
g.wa = function (a, c, d, e, f, h) {
  this.s = a;
  this.Uh = c;
  this.rL = d;
  this.tx = this.sx = this.ax = this.Ux = null;
  this.eg = !1;
  d = g.wa.oE;
  this.s.M && (d = -d);
  this.CH = g.g.ze.uy(d);
  a.og.appendChild(this.Re(c, !(!f || !h)));
  this.tc = e;
  this.Ys && Pa(this);
  (f && h) ||
    ((a = this.Uh.getBBox()),
    (f = a.width + 2 * g.wa.xd),
    (h = a.height + 2 * g.wa.xd));
  this.wp(f, h);
  Pa(this);
  Qa(this);
  this.Ys = !0;
};
g.wa.xd = 6;
g.wa.pE = 5;
g.wa.oE = 20;
g.wa.Jy = 4;
g.wa.lE = 8;
g.wa.sd = null;
g.wa.$e = null;
g.wa.zy = function () {
  g.wa.sd && (g.Na(g.wa.sd), (g.wa.sd = null));
  g.wa.$e && (g.Na(g.wa.$e), (g.wa.$e = null));
};
g.wa.HH = function () {
  g.Touch.mk();
  g.wa.zy();
};
b = g.wa.prototype;
b.Ys = !1;
b.tc = null;
b.mh = 0;
b.Cj = 0;
b.zb = 0;
b.Uc = 0;
b.Qu = !0;
b.Re = function (a, c) {
  this.uf = g.g.o.L(g.g.F.qc, {}, null);
  var d = { filter: "url(#" + this.s.Sb.U().Jr + ")" };
  g.g.userAgent.UF && (d = {});
  d = g.g.o.L(g.g.F.qc, d, this.uf);
  this.KA = g.g.o.L(g.g.F.pe, {}, d);
  this.er = g.g.o.L(
    g.g.F.Hc,
    { class: "blocklyDraggable", x: 0, y: 0, rx: g.wa.xd, ry: g.wa.xd },
    d
  );
  c
    ? ((this.pi = g.g.o.L(
        g.g.F.qc,
        { class: this.s.M ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.uf
      )),
      (c = 2 * g.wa.xd),
      g.g.o.L(
        g.g.F.FG,
        { points: "0,x x,x x,0".replace(/x/g, c.toString()) },
        this.pi
      ),
      g.g.o.L(
        g.g.F.Bn,
        {
          class: "blocklyResizeLine",
          x1: c / 3,
          y1: c - 1,
          x2: c - 1,
          y2: c / 3,
        },
        this.pi
      ),
      g.g.o.L(
        g.g.F.Bn,
        {
          class: "blocklyResizeLine",
          x1: (2 * c) / 3,
          y1: c - 1,
          x2: c - 1,
          y2: (2 * c) / 3,
        },
        this.pi
      ))
    : (this.pi = null);
  this.s.options.readOnly ||
    ((this.sx = g.ta(this.er, "mousedown", this, this.GH)),
    this.pi && (this.tx = g.ta(this.pi, "mousedown", this, this.gL)));
  this.uf.appendChild(a);
  return this.uf;
};
b.Pa = function () {
  return this.uf;
};
function Ra(a, c) {
  a.uf.dataset && (a.uf.dataset.blockId = c);
}
b.GH = function (a) {
  var c = this.s.$h(a);
  if (c) {
    if (c.Ck)
      throw Error(
        "Tried to call gesture.handleBubbleStart, but the gesture had already been started."
      );
    c.ef || (c.ef = this);
    c.Ff = a;
  }
};
b.Bp = function () {};
b.ye = function () {
  return !1;
};
b.yp = function () {};
b.gL = function (a) {
  Sa(this);
  g.wa.zy();
  g.g.Ok(a) ||
    (this.s.oy(a, new g.g.Z(this.s.M ? -this.zb : this.zb, this.Uc)),
    (g.wa.sd = g.ta(document, "mouseup", this, g.wa.HH)),
    (g.wa.$e = g.ta(document, "mousemove", this, this.hL)),
    g.Kc());
  a.stopPropagation();
};
b.hL = function (a) {
  this.Qu = !1;
  var c = this.s;
  a = g.g.Zo(a, r(c), oa(c));
  a.x /= c.scale;
  a.y /= c.scale;
  c = g.g.Z.sum(c.yB, a);
  this.wp(this.s.M ? -c.x : c.x, c.y);
  this.s.M && Pa(this);
};
function Ta(a, c) {
  a.ax = c;
}
function Sa(a) {
  var c = a.uf.parentNode;
  return c.lastChild !== a.uf ? (c.appendChild(a.uf), !0) : !1;
}
function Ua(a, c, d) {
  var e = a.s.M ? a.tc.x - c.x - a.zb : c.x + a.tc.x;
  c = c.y + a.tc.y;
  return Math.max(
    0,
    Math.min(
      1,
      ((Math.min(e + a.zb, d.ac + d.Qb) - Math.max(e, d.ac)) *
        (Math.min(c + a.Uc, d.ic + d.Vb) - Math.max(c, d.ic))) /
        (a.zb * a.Uc)
    )
  );
}
function Pa(a) {
  var c = a.tc.x;
  c = a.s.M ? c - (a.mh + a.zb) : c + a.mh;
  a.moveTo(c, a.Cj + a.tc.y);
}
b.moveTo = function (a, c) {
  this.uf.setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.Hj = function (a) {
  !a && this.ax && this.ax();
};
b.aw = function () {
  return new g.g.re(this.zb, this.Uc);
};
b.wp = function (a, c) {
  var d = 2 * g.wa.xd;
  a = Math.max(a, d + 45);
  c = Math.max(c, d + 20);
  this.zb = a;
  this.Uc = c;
  this.er.setAttribute("width", a);
  this.er.setAttribute("height", c);
  this.pi &&
    (this.s.M
      ? this.pi.setAttribute(
          "transform",
          "translate(" + 2 * g.wa.xd + "," + (c - d) + ") scale(-1 1)"
        )
      : this.pi.setAttribute(
          "transform",
          "translate(" + (a - d) + "," + (c - d) + ")"
        ));
  if (this.Qu) {
    a = this.s.dd();
    a.ac /= this.s.scale;
    a.Qb /= this.s.scale;
    a.ic /= this.s.scale;
    a.Vb /= this.s.scale;
    c = -this.zb / 4;
    if (!(this.zb > a.Qb)) {
      if (this.s.M) {
        d = this.tc.x - c;
        var e = d - this.zb;
        var f = a.ac + a.Qb,
          h = a.ac + g.Wa.Wc / this.s.scale;
      } else
        (e = c + this.tc.x),
          (d = e + this.zb),
          (h = a.ac),
          (f = a.ac + a.Qb - g.Wa.Wc / this.s.scale);
      this.s.M
        ? e < h
          ? (c = -(h - this.tc.x + this.zb))
          : d > f && (c = -(f - this.tc.x))
        : e < h
        ? (c = h - this.tc.x)
        : d > f && (c = f - this.tc.x - this.zb);
    }
    e = c;
    c = -this.Uc / 4;
    if (!(this.Uc > a.Vb)) {
      d = this.tc.y + c;
      f = d + this.Uc;
      h = a.ic;
      var k = a.ic + a.Vb - g.Wa.Wc / this.s.scale,
        l = this.tc.y;
      d < h ? (c = h - l) : f > k && (c = k - l - this.Uc);
    }
    h = c;
    f = this.rL.getBBox();
    c = { x: e, y: -this.Uc - this.s.Sb.U().En };
    d = { x: -this.zb - 30, y: h };
    h = { x: f.width, y: h };
    k = { x: e, y: f.height };
    e = f.width < f.height ? h : k;
    f = f.width < f.height ? k : h;
    h = Ua(this, c, a);
    k = Ua(this, d, a);
    l = Ua(this, e, a);
    a = Math.max(h, k, l, Ua(this, f, a));
    h == a
      ? ((this.mh = c.x), (this.Cj = c.y))
      : k == a
      ? ((this.mh = d.x), (this.Cj = d.y))
      : l == a
      ? ((this.mh = e.x), (this.Cj = e.y))
      : ((this.mh = f.x), (this.Cj = f.y));
  }
  Pa(this);
  Qa(this);
  this.Ux && this.Ux();
};
function Qa(a) {
  var c = [],
    d = a.zb / 2,
    e = a.Uc / 2,
    f = -a.mh,
    h = -a.Cj;
  if (d == f && e == h) c.push("M " + d + "," + e);
  else {
    h -= e;
    f -= d;
    a.s.M && (f *= -1);
    var k = Math.sqrt(h * h + f * f),
      l = Math.acos(f / k);
    0 > h && (l = 2 * Math.PI - l);
    var m = l + Math.PI / 2;
    m > 2 * Math.PI && (m -= 2 * Math.PI);
    var n = Math.sin(m),
      t = Math.cos(m),
      u = a.aw();
    m = (u.width + u.height) / g.wa.pE;
    m = Math.min(m, u.width, u.height) / 4;
    u = 1 - g.wa.lE / k;
    f = d + u * f;
    h = e + u * h;
    u = d + m * t;
    var x = e + m * n;
    d -= m * t;
    e -= m * n;
    n = l + a.CH;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / g.wa.Jy;
    k = (Math.cos(n) * k) / g.wa.Jy;
    c.push("M" + u + "," + x);
    c.push(
      "C" + (u + k) + "," + (x + l) + " " + f + "," + h + " " + f + "," + h
    );
    c.push(
      "C" + f + "," + h + " " + (d + k) + "," + (e + l) + " " + d + "," + e
    );
  }
  c.push("z");
  a.KA.setAttribute("d", c.join(" "));
}
b.df = function (a) {
  this.er.setAttribute("fill", a);
  this.KA.setAttribute("fill", a);
};
b.J = function () {
  this.sx && g.Na(this.sx);
  this.tx && g.Na(this.tx);
  g.wa.zy();
  g.g.o.removeNode(this.uf);
  this.eg = !0;
};
b.bx = function (a, c) {
  a ? a.ql(c.x, c.y) : this.moveTo(c.x, c.y);
  this.mh = this.s.M ? this.tc.x - c.x - this.zb : c.x - this.tc.x;
  this.Cj = c.y - this.tc.y;
  Qa(this);
};
b.bb = function () {
  return new g.g.Z(
    this.s.M ? -this.mh + this.tc.x - this.zb : this.tc.x + this.mh,
    this.tc.y + this.Cj
  );
};
g.wa.ff = function (a) {
  var c = g.g.o.L(
    g.g.F.Rq,
    {
      class: "blocklyText blocklyBubbleText blocklyNoPointerEvents",
      y: g.wa.xd,
    },
    null
  );
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) {
    var e = g.g.o.L(g.g.F.lA, { dy: "1em", x: g.wa.xd }, c),
      f = document.createTextNode(a[d]);
    e.appendChild(f);
  }
  return c;
};
g.wa.iB = function (a, c, d) {
  d = new g.wa(c.u, a, c.Gb.Pb, d, null, null);
  Ra(d, c.id);
  if (c.M) {
    c = a.getBBox().width;
    for (var e = 0, f; (f = a.childNodes[e]); e++)
      f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + g.wa.xd);
  }
  return d;
};
g.Qc = {};
g.Qc.ww = !1;
g.Qc.register = function (a) {
  if (g.Qc.ww) throw Error("CSS already injected");
  Array.prototype.push.apply(g.Qc.Jt, a);
  a.length = 0;
};
g.Qc.kj = function (a, c) {
  if (!g.Qc.ww) {
    g.Qc.ww = !0;
    var d = g.Qc.Jt.join("\n");
    g.Qc.Jt.length = 0;
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
g.Qc.Jt = [
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
g.i.Me = function (a) {
  g.i.Me.v.constructor.call(this);
  this.Ye = "undefined" == typeof a;
  this.Xc = a ? a : "";
  this.eb = !1;
};
g.g.object.V(g.i.Me, g.i.Abstract);
g.i.Me.prototype.ns = !0;
g.i.Qi = function (a, c, d, e) {
  g.i.Qi.v.constructor.call(this, a ? a.u.id : void 0);
  this.ub = a ? a.id : null;
  this.element = "undefined" == typeof c ? "" : c;
  this.oldValue = "undefined" == typeof d ? "" : d;
  this.newValue = "undefined" == typeof e ? "" : e;
};
g.g.object.V(g.i.Qi, g.i.Me);
g.i.Qi.prototype.type = g.i.Eu;
g.i.Qi.prototype.ya = function () {
  var a = g.i.Qi.v.ya.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.ub && (a.blockId = this.ub);
  return a;
};
g.i.Qi.prototype.ma = function (a) {
  g.i.Qi.v.ma.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.ub = a.blockId;
};
g.C.register(g.C.ea.jc, g.i.Eu, g.i.Qi);
g.i.Pf = function (a, c, d) {
  g.i.Pf.v.constructor.call(this, a ? a.u.id : void 0);
  this.ub = a ? a.id : null;
  this.Km = c;
  this.Wu = d;
};
g.g.object.V(g.i.Pf, g.i.Me);
g.i.Pf.prototype.type = g.i.eq;
g.i.Pf.prototype.ya = function () {
  var a = g.i.Pf.v.ya.call(this);
  a.isOpen = this.Km;
  a.bubbleType = this.Wu;
  a.blockId = this.ub;
  return a;
};
g.i.Pf.prototype.ma = function (a) {
  g.i.Pf.v.ma.call(this, a);
  this.Km = a.isOpen;
  this.Wu = a.bubbleType;
  this.ub = a.blockId;
};
g.C.register(g.C.ea.jc, g.i.eq, g.i.Pf);
g.oe = function (a) {
  this.R = a;
  this.ee = null;
};
b = g.oe.prototype;
b.VA = !0;
b.Nq = 17;
b.lc = null;
b.ij = null;
function Va(a) {
  a.ee ||
    ((a.ee = g.g.o.L(g.g.F.qc, { class: "blocklyIconGroup" }, null)),
    a.R.Ub && g.g.o.Ga(a.ee, "blocklyIconGroupReadonly"),
    a.Jv(a.ee),
    a.R.Pa().appendChild(a.ee),
    g.ta(a.ee, "mouseup", a, a.sw),
    a.Ci());
}
b.J = function () {
  g.g.o.removeNode(this.ee);
  this.ee = null;
  this.Ob(!1);
  this.R = null;
};
b.Ci = function () {};
b.isVisible = function () {
  return !!this.lc;
};
b.sw = function (a) {
  this.R.u.Cc() || this.R.Ub || g.g.Ok(a) || this.Ob(!this.isVisible());
};
b.kc = function () {
  this.isVisible() && this.lc.df(this.R.style.Ui);
};
function Wa(a) {
  var c = a.R.bb(),
    d = g.g.Af(a.ee);
  c = new g.g.Z(c.x + d.x + a.Nq / 2, c.y + d.y + a.Nq / 2);
  g.g.Z.zf(a.ij, c) ||
    ((a.ij = c), a.isVisible() && ((a = a.lc), (a.tc = c), a.Ys && Pa(a)));
}
g.g.vv = {};
g.g.vv.warn = function (a, c, d, e) {
  a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
  e && (a += "\nUse " + e + " instead.");
  console.warn(a);
};
g.Sn = function (a) {
  g.Sn.v.constructor.call(this, a);
  Va(this);
  this.me = {};
};
g.g.object.V(g.Sn, g.oe);
b = g.Sn.prototype;
b.VA = !1;
b.Jv = function (a) {
  g.g.o.L(
    g.g.F.pe,
    {
      class: "blocklyIconShape",
      d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z",
    },
    a
  );
  g.g.o.L(
    g.g.F.pe,
    {
      class: "blocklyIconSymbol",
      d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z",
    },
    a
  );
  g.g.o.L(
    g.g.F.Hc,
    { class: "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" },
    a
  );
};
b.Ob = function (a) {
  a != this.isVisible() &&
    (g.i.Ha(new g.i.Pf(this.R, a, "warning")), a ? this.Ar() : this.Gr());
};
b.Ar = function () {
  this.$k = g.wa.ff(this.Dd());
  this.lc = g.wa.iB(this.$k, this.R, this.ij);
  this.kc();
};
b.Gr = function () {
  this.lc.J();
  this.$k = this.lc = null;
};
function Xa(a, c, d) {
  a.me[d] != c &&
    (c ? (a.me[d] = c) : delete a.me[d], a.isVisible() && (a.Ob(!1), a.Ob(!0)));
}
b.Dd = function () {
  var a = [],
    c;
  for (c in this.me) a.push(this.me[c]);
  return a.join("\n");
};
b.J = function () {
  this.R.gf = null;
  g.oe.prototype.J.call(this);
};
g.Comment = function (a) {
  g.Comment.v.constructor.call(this, a);
  this.qd = a.Pe;
  this.qd.text = this.qd.text || "";
  this.Zu = "";
  this.Es = this.Bs = this.Ms = this.sd = null;
  Va(this);
};
g.g.object.V(g.Comment, g.oe);
b = g.Comment.prototype;
b.Jv = function (a) {
  g.g.o.L(g.g.F.Gt, { class: "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
  g.g.o.L(
    g.g.F.pe,
    {
      class: "blocklyIconSymbol",
      d:
        "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z",
    },
    a
  );
  g.g.o.L(
    g.g.F.Hc,
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
b.mv = function () {
  this.wo = g.g.o.L(g.g.F.wF, { x: g.wa.xd, y: g.wa.xd }, null);
  var a = document.createElementNS(g.g.o.Gl, "body");
  a.setAttribute("xmlns", g.g.o.Gl);
  a.className = "blocklyMinimalBody";
  var c = (this.ol = document.createElementNS(g.g.o.Gl, "textarea"));
  c.className = "blocklyCommentTextarea";
  c.setAttribute("dir", this.R.M ? "RTL" : "LTR");
  c.value = this.qd.text;
  Ya(this);
  a.appendChild(c);
  this.wo.appendChild(a);
  this.sd = g.ta(c, "mouseup", this, this.xL, !0, !0);
  this.Ms = g.ta(c, "wheel", this, function (d) {
    d.stopPropagation();
  });
  this.Bs = g.ta(c, "change", this, function () {
    this.Zu != this.qd.text &&
      g.i.Ha(new g.i.uh(this.R, "comment", null, this.Zu, this.qd.text));
  });
  this.Es = g.ta(c, "input", this, function () {
    this.qd.text = c.value;
  });
  setTimeout(c.focus.bind(c), 0);
  return this.wo;
};
b.Ci = function () {
  g.Comment.v.Ci.call(this);
  this.isVisible() && (this.Gr(), this.Ar());
};
b.bK = function () {
  this.isVisible() && ((this.qd.size = this.lc.aw()), Ya(this));
};
function Ya(a) {
  var c = a.qd.size,
    d = 2 * g.wa.xd,
    e = c.width - d;
  c = c.height - d;
  a.wo.setAttribute("width", e);
  a.wo.setAttribute("height", c);
  a.ol.style.width = e - 4 + "px";
  a.ol.style.height = c - 4 + "px";
}
b.Ob = function (a) {
  a != this.isVisible() &&
    (g.i.Ha(new g.i.Pf(this.R, a, "comment")),
    (this.qd.Ix = a) ? this.Ar() : this.Gr());
};
b.Ar = function () {
  if (!this.R.ge() || g.g.userAgent.kf)
    (this.$k = g.wa.ff(this.R.Pe.text)),
      (this.lc = g.wa.iB(this.$k, this.R, this.ij));
  else {
    this.lc = new g.wa(
      this.R.u,
      this.mv(),
      this.R.Gb.Pb,
      this.ij,
      this.qd.size.width,
      this.qd.size.height
    );
    Ra(this.lc, this.R.id);
    var a = this.bK.bind(this);
    this.lc.Ux = a;
  }
  this.kc();
};
b.Gr = function () {
  this.sd && (g.Na(this.sd), (this.sd = null));
  this.Ms && (g.Na(this.Ms), (this.Ms = null));
  this.Bs && (g.Na(this.Bs), (this.Bs = null));
  this.Es && (g.Na(this.Es), (this.Es = null));
  this.lc.J();
  this.$k = this.wo = this.ol = this.lc = null;
};
b.xL = function () {
  Sa(this.lc) && this.ol.focus();
  this.Zu = this.qd.text;
};
b.aw = function () {
  return this.qd.size;
};
b.wp = function (a, c) {
  this.lc
    ? this.lc.wp(a, c)
    : ((this.qd.size.width = a), (this.qd.size.height = c));
};
b.J = function () {
  this.R.Zn = null;
  g.oe.prototype.J.call(this);
};
g.Qc.register(
  ".blocklyCommentTextarea {,background-color: #fef49c;,border: 0;,outline: 0;,margin: 0;,padding: 3px;,resize: none;,display: block;,text-overflow: hidden;,}".split(
    ","
  )
);
g.H = function () {};
g.H.Vu = null;
g.H.If = null;
g.H.rD = null;
g.H.aq = 16;
g.H.Py = 1;
g.H.Ly = 12;
g.H.Nz = 16;
g.H.yt = 0.25;
g.H.Mu = null;
g.H.Zk = null;
g.H.mg = "";
g.H.pg = "";
g.H.ab = function () {
  if (!g.H.ug) {
    var a = document.createElement("div");
    a.className = "blocklyDropDownDiv";
    (g.Ns || document.body).appendChild(a);
    g.H.ug = a;
    var c = document.createElement("div");
    c.className = "blocklyDropDownContent";
    a.appendChild(c);
    g.H.Uh = c;
    c = document.createElement("div");
    c.className = "blocklyDropDownArrow";
    a.appendChild(c);
    g.H.sf = c;
    g.H.ug.style.opacity = 0;
    g.H.ug.style.transition =
      "transform " + g.H.yt + "s, opacity " + g.H.yt + "s";
    a.addEventListener("focusin", function () {
      g.g.o.Ga(a, "blocklyFocused");
    });
    a.addEventListener("focusout", function () {
      g.g.o.hc(a, "blocklyFocused");
    });
  }
};
g.H.mL = function (a) {
  g.H.Vu = a;
};
g.H.MB = function () {
  return g.H.Uh;
};
g.H.PH = function () {
  g.H.Uh.textContent = "";
  g.H.Uh.style.width = "";
};
g.H.df = function (a, c) {
  g.H.ug.style.backgroundColor = a;
  g.H.ug.style.borderColor = c;
};
g.H.WO = function (a, c, d, e) {
  return g.H.HD(g.H.VB(c), a, d, e);
};
g.H.GD = function (a, c) {
  g.H.rD = !0;
  g.H.HD(g.H.WB(a), a, c, void 0);
};
g.H.VB = function (a) {
  var c = a.Pa(),
    d = c.getBBox(),
    e = a.u.scale;
  a = d.height * e;
  d = d.width * e;
  c = g.g.style.aj(c);
  return new g.g.Rect(c.y, c.y + a, c.x, c.x + d);
};
g.H.WB = function (a) {
  a = Za(a);
  return new g.g.Rect(a.top, a.bottom, a.left, a.right);
};
g.H.HD = function (a, c, d, e) {
  var f = a.left + (a.right - a.left) / 2,
    h = a.bottom;
  a = a.top;
  e && (a += e);
  e = c.X();
  for (var k = e.u; k.options.yc; ) k = k.options.yc;
  g.H.mL(r(k).parentNode);
  return g.H.show(c, e.M, f, h, f, a, d);
};
g.H.show = function (a, c, d, e, f, h, k) {
  g.H.If = a;
  g.H.Zk = k || null;
  a = g.H.ug;
  a.style.direction = c ? "rtl" : "ltr";
  c = g.Ug();
  g.H.mg = c.Sb.hg();
  g.H.pg = c.Xg().hg();
  g.g.o.Ga(a, g.H.mg);
  g.g.o.Ga(a, g.H.pg);
  return g.H.hp(d, e, f, h);
};
g.H.II = function () {
  var a = g.g.style.aj(g.H.Vu),
    c = g.g.style.ai(g.H.Vu);
  return {
    left: a.x,
    right: a.x + c.width,
    top: a.y,
    bottom: a.y + c.height,
    width: c.width,
    height: c.height,
  };
};
g.H.TI = function (a, c, d, e) {
  var f = g.H.II(),
    h = g.g.style.ai(g.H.ug);
  return c + h.height < f.bottom
    ? g.H.UB(a, c, f, h)
    : e - h.height > f.top
    ? g.H.TB(d, e, f, h)
    : c + h.height < document.documentElement.clientHeight
    ? g.H.UB(a, c, f, h)
    : e - h.height > document.documentElement.clientTop
    ? g.H.TB(d, e, f, h)
    : g.H.UI(a, f, h);
};
g.H.UB = function (a, c, d, e) {
  a = g.H.jw(a, d.left, d.right, e.width);
  return {
    uw: a.qm,
    vw: c,
    Uv: a.qm,
    Vv: c + g.H.Nz,
    am: a.am,
    Pu: -(g.H.aq / 2 + g.H.Py),
    cr: !0,
    Ou: !0,
  };
};
g.H.TB = function (a, c, d, e) {
  a = g.H.jw(a, d.left, d.right, e.width);
  return {
    uw: a.qm,
    vw: c - e.height,
    Uv: a.qm,
    Vv: c - e.height - g.H.Nz,
    am: a.am,
    Pu: e.height - 2 * g.H.Py - g.H.aq / 2,
    cr: !1,
    Ou: !0,
  };
};
g.H.UI = function (a, c, d) {
  a = g.H.jw(a, c.left, c.right, d.width);
  return {
    uw: a.qm,
    vw: 0,
    Uv: a.qm,
    Vv: 0,
    cr: null,
    am: null,
    Pu: null,
    Ou: !1,
  };
};
g.H.jw = function (a, c, d, e) {
  var f = a;
  a = g.g.ze.gm(c, a - e / 2, d - e);
  f -= g.H.aq / 2;
  c = g.g.ze.gm(g.H.Ly, f - a, e - g.H.Ly - g.H.aq);
  return { am: c, qm: a };
};
g.H.isVisible = function () {
  return !!g.H.If;
};
g.H.Cm = function (a, c) {
  g.H.If === a && (c ? g.H.fj() : g.H.Oa());
};
g.H.Oa = function () {
  var a = g.H.ug;
  a.style.transform = "translate(0, 0)";
  a.style.opacity = 0;
  g.H.Mu = setTimeout(function () {
    g.H.fj();
  }, 1e3 * g.H.yt);
  g.H.Zk && (g.H.Zk(), (g.H.Zk = null));
};
g.H.fj = function () {
  if (g.H.isVisible()) {
    g.H.Mu && clearTimeout(g.H.Mu);
    var a = g.H.ug;
    a.style.transform = "";
    a.style.left = "";
    a.style.top = "";
    a.style.opacity = 0;
    a.style.display = "none";
    a.style.backgroundColor = "";
    a.style.borderColor = "";
    g.H.Zk && (g.H.Zk(), (g.H.Zk = null));
    g.H.PH();
    g.H.If = null;
    g.H.mg && (g.g.o.hc(a, g.H.mg), (g.H.mg = ""));
    g.H.pg && (g.g.o.hc(a, g.H.pg), (g.H.pg = ""));
    na(g.Ug());
  }
};
g.H.hp = function (a, c, d, e) {
  a = g.H.TI(a, c, d, e);
  a.Ou
    ? ((g.H.sf.style.display = ""),
      (g.H.sf.style.transform =
        "translate(" + a.am + "px," + a.Pu + "px) rotate(45deg)"),
      g.H.sf.setAttribute(
        "class",
        a.cr
          ? "blocklyDropDownArrow blocklyArrowTop"
          : "blocklyDropDownArrow blocklyArrowBottom"
      ))
    : (g.H.sf.style.display = "none");
  c = Math.floor(a.uw);
  d = Math.floor(a.vw);
  e = Math.floor(a.Uv);
  var f = Math.floor(a.Vv),
    h = g.H.ug;
  h.style.left = c + "px";
  h.style.top = d + "px";
  h.style.display = "block";
  h.style.opacity = 1;
  h.style.transform = "translate(" + (e - c) + "px," + (f - d) + "px)";
  return !!a.cr;
};
g.H.PO = function () {
  if (g.H.If) {
    var a = g.H.If,
      c = a.X();
    a = g.H.rD ? g.H.WB(a) : g.H.VB(c);
    c = a.left + (a.right - a.left) / 2;
    g.H.hp(c, a.bottom, c, a.top);
  } else g.H.Oa();
};
g.G = function (a, c, d) {
  if (!c) throw Error("Cannot create a node without a location.");
  this.Pp = a;
  this.Fm = g.G.rJ(a);
  this.Fa = c;
  this.ut = null;
  (a = d || null) && a.iE && (this.ut = a.iE);
};
g.G.types = {
  Fc: "field",
  oc: "block",
  lf: "input",
  ck: "output",
  yd: "next",
  zd: "previous",
  zg: "stack",
  $c: "workspace",
};
g.G.Mi = !1;
g.G.RE = -20;
g.G.rJ = function (a) {
  switch (a) {
    case g.G.types.zd:
    case g.G.types.yd:
    case g.G.types.lf:
    case g.G.types.ck:
      return !0;
  }
  return !1;
};
g.G.lm = function (a) {
  return a ? new g.G(g.G.types.Fc, a) : null;
};
g.G.Og = function (a) {
  return a
    ? a.type == g.jb || (a.type == g.kb && a.Wg())
      ? g.G.qk(a.Wg())
      : a.type == g.kb
      ? new g.G(g.G.types.yd, a)
      : a.type == g.Wf
      ? new g.G(g.G.types.ck, a)
      : a.type == g.Xf
      ? new g.G(g.G.types.zd, a)
      : null
    : null;
};
g.G.qk = function (a) {
  return a && a.connection ? new g.G(g.G.types.lf, a.connection) : null;
};
g.G.Ng = function (a) {
  return a ? new g.G(g.G.types.oc, a) : null;
};
g.G.jo = function (a) {
  return a ? new g.G(g.G.types.zg, a) : null;
};
g.G.mm = function (a, c) {
  return c && a ? new g.G(g.G.types.$c, a, { iE: c }) : null;
};
g.G.ov = function (a) {
  var c = a.ka || a.O;
  return c ? g.G.Og(c) : g.G.Ng(a);
};
b = g.G.prototype;
b.wb = function () {
  return this.Pp;
};
function $a(a, c) {
  a = a.Fa;
  a instanceof g.ne || (a = a.X());
  if (!a || !a.u) return null;
  var d = a.ce();
  a = d.u.dc(!0);
  for (var e = 0, f; (f = a[e]); e++)
    if (d.id == f.id)
      return (
        (c = e + (c ? 1 : -1)), -1 == c || c == a.length ? null : g.G.jo(a[c])
      );
  throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}
function ab(a) {
  if (!a) return null;
  do var c = a.ka && a.ka.sa();
  while (c && q(c) == a && (a = c));
  return (c = a.ka || a.O) && c.oa && c.oa.Wg() ? g.G.qk(c.oa.Wg()) : g.G.jo(a);
}
b.X = function () {
  return this.wb() === g.G.types.oc
    ? this.Fa
    : this.wb() === g.G.types.zg
    ? this.Fa
    : this.wb() === g.G.types.$c
    ? null
    : this.Fa.X();
};
b.next = function () {
  switch (this.Pp) {
    case g.G.types.zg:
      return $a(this, !0);
    case g.G.types.ck:
      var a = this.Fa;
      return g.G.Ng(a.X());
    case g.G.types.Fc:
      a: {
        var c = this.Fa,
          d = c.Wg();
        a = c.X();
        c = d.hb.indexOf(c) + 1;
        d = a.S.indexOf(d);
        for (var e; (e = a.S[d]); d++) {
          for (var f = e.hb; c < f.length; ) {
            if (bb(f[c]) || g.G.Mi) {
              a = g.G.lm(f[c]);
              break a;
            }
            c++;
          }
          c = 0;
          if (e.connection) {
            a = g.G.qk(e);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.G.types.lf:
      a: {
        c = this.Fa.Wg();
        a = c.X();
        for (c = a.S.indexOf(c) + 1; (d = a.S[c]); c++) {
          e = d.hb;
          f = 0;
          for (var h; (h = e[f]); f++)
            if (bb(h) || g.G.Mi) {
              a = g.G.lm(h);
              break a;
            }
          if (d.connection) {
            a = g.G.qk(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.G.types.oc:
      return g.G.Og(this.Fa.W);
    case g.G.types.zd:
      return (a = this.Fa), g.G.Ng(a.X());
    case g.G.types.yd:
      return (a = this.Fa), g.G.Og(a.oa);
  }
  return null;
};
b.ah = function () {
  switch (this.Pp) {
    case g.G.types.$c:
      var a = this.Fa.dc(!0);
      if (0 < a.length) return g.G.jo(a[0]);
      break;
    case g.G.types.zg:
      a = this.Fa;
      var c = a.ka || a.O;
      return c ? g.G.Og(c) : g.G.Ng(a);
    case g.G.types.oc:
      a = this.Fa;
      a: {
        a = a.S;
        c = 0;
        for (var d; (d = a[c]); c++) {
          for (var e = d.hb, f = 0, h; (h = e[f]); f++)
            if (bb(h) || g.G.Mi) {
              a = g.G.lm(h);
              break a;
            }
          if (d.connection) {
            a = g.G.qk(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.G.types.lf:
      return g.G.Og(this.Fa.oa);
  }
  return null;
};
b.Kf = function () {
  switch (this.Pp) {
    case g.G.types.zg:
      return $a(this, !1);
    case g.G.types.Fc:
      a: {
        var a = this.Fa;
        var c = a.Wg();
        var d = a.X();
        a = c.hb.indexOf(a) - 1;
        for (var e = d.S.indexOf(c), f; (f = d.S[e]); e--) {
          if (f.connection && f !== c) {
            c = g.G.qk(f);
            break a;
          }
          for (f = f.hb; -1 < a; ) {
            if (bb(f[a]) || g.G.Mi) {
              c = g.G.lm(f[a]);
              break a;
            }
            a--;
          }
          0 <= e - 1 && (a = d.S[e - 1].hb.length - 1);
        }
        c = null;
      }
      return c;
    case g.G.types.lf:
      a: {
        c = this.Fa.Wg();
        d = c.X();
        for (a = d.S.indexOf(c); (e = d.S[a]); a--) {
          if (e.connection && e !== c) {
            c = g.G.qk(e);
            break a;
          }
          e = e.hb;
          f = e.length - 1;
          for (var h; (h = e[f]); f--)
            if (bb(h) || g.G.Mi) {
              c = g.G.lm(h);
              break a;
            }
        }
        c = null;
      }
      return c;
    case g.G.types.oc:
      return (c = this.Fa), g.G.Og(c.ka || c.O);
    case g.G.types.zd:
      c = this.Fa;
      if ((c = c.oa) && !c.Wg()) return g.G.Og(c);
      break;
    case g.G.types.yd:
      return (c = this.Fa), g.G.Ng(c.X());
  }
  return null;
};
b.hh = function () {
  switch (this.Pp) {
    case g.G.types.zg:
      var a = this.Fa,
        c = a.bb();
      return g.G.mm(a.u, new g.g.Z(c.x, c.y + g.G.RE));
    case g.G.types.ck:
      return (a = this.Fa), (c = a.oa) ? g.G.Og(c) : g.G.jo(a.X());
    case g.G.types.Fc:
      return g.G.Ng(this.Fa.X());
    case g.G.types.lf:
      return (a = this.Fa), g.G.Ng(a.X());
    case g.G.types.oc:
      return (a = this.Fa), ab(a);
    case g.G.types.zd:
      return (a = this.Fa), ab(a.X());
    case g.G.types.yd:
      return (a = this.Fa), ab(a.X());
  }
  return null;
};
g.Kb = {};
g.Kb.Dv = 0;
g.Kb.Er = null;
g.Kb.pI = function (a) {
  var c = a.u,
    d = a.Pa();
  c.Hg.play("delete");
  a = cb(c, d);
  d = d.cloneNode(!0);
  d.IL = a.x;
  d.JL = a.y;
  d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  r(c).appendChild(d);
  d.IA = d.getBBox();
  g.Kb.wB(d, c.M, new Date(), c.scale);
};
g.Kb.wB = function (a, c, d, e) {
  var f = (new Date() - d) / 150;
  1 < f
    ? g.g.o.removeNode(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.IL + (((c ? -1 : 1) * a.IA.width * e) / 2) * f) +
          "," +
          (a.JL + a.IA.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(g.Kb.wB, 10, a, c, d, e));
};
g.Kb.WH = function (a) {
  var c = a.u,
    d = c.scale;
  c.Hg.play("click");
  if (!(1 > d)) {
    var e = cb(c, a.Pa());
    a.O
      ? ((e.x += (a.M ? 3 : -3) * d), (e.y += 13 * d))
      : a.ka && ((e.x += (a.M ? -23 : 23) * d), (e.y += 3 * d));
    a = g.g.o.L(
      g.g.F.Gt,
      {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10,
      },
      r(c)
    );
    g.Kb.aB(a, new Date(), d);
  }
};
g.Kb.aB = function (a, c, d) {
  var e = (new Date() - c) / 150;
  1 < e
    ? g.g.o.removeNode(a)
    : (a.setAttribute("r", 25 * e * d),
      (a.style.opacity = 1 - e),
      (g.Kb.Dv = setTimeout(g.Kb.aB, 10, a, c, d)));
};
g.Kb.oI = function (a) {
  a.u.Hg.play("disconnect");
  if (!(1 > a.u.scale)) {
    var c = E(a).height;
    c = (Math.atan(10 / c) / Math.PI) * 180;
    a.M || (c *= -1);
    g.Kb.vB(a.Pa(), c, new Date());
  }
};
g.Kb.vB = function (a, c, d) {
  var e = (new Date() - d) / 200;
  1 < e
    ? (a.Dp = "")
    : ((a.Dp =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")"),
      (g.Kb.Er = a),
      (g.Kb.Dv = setTimeout(g.Kb.vB, 10, a, c, d)));
  a.setAttribute("transform", a.Op + a.Dp);
};
g.Kb.Ev = function () {
  if (g.Kb.Er) {
    clearTimeout(g.Kb.Dv);
    var a = g.Kb.Er;
    a.Dp = "";
    a.setAttribute("transform", a.Op);
    g.Kb.Er = null;
  }
};
g.i.tg = function (a, c, d) {
  g.i.tg.v.constructor.call(this, a ? a.u.id : void 0);
  this.ub = a ? a.id : null;
  this.AC = c;
  this.JA = d;
};
g.g.object.V(g.i.tg, g.i.Me);
g.i.tg.prototype.type = g.i.Ny;
g.i.tg.prototype.ya = function () {
  var a = g.i.tg.v.ya.call(this);
  a.isStart = this.AC;
  a.blockId = this.ub;
  a.blocks = this.JA;
  return a;
};
g.i.tg.prototype.ma = function (a) {
  g.i.tg.v.ma.call(this, a);
  this.AC = a.isStart;
  this.ub = a.blockId;
  this.JA = a.blocks;
};
g.C.register(g.C.ea.jc, g.i.Ny, g.i.tg);
g.Uf = function (a) {
  this.zi = g.selected = a;
  this.s = a.u;
  this.qj = this.Fw = null;
  this.uo = db(this, this.zi);
  this.Hd = this.uc = null;
  this.sh = !1;
  this.so = this.rw = this.Qk = null;
  this.dr = eb(this);
};
g.Uf.Ql = { Wt: 0, OF: 1, Yz: 2 };
g.Uf.prototype.J = function () {
  this.dr.length = 0;
  g.i.disable();
  try {
    this.uo && this.uo.J(), this.qj && this.qj.J();
  } finally {
    g.i.enable();
  }
};
g.Uf.prototype.update = function (a, c) {
  var d = this.uc && this.Hd ? g.DE : g.Rd;
  for (var e = null, f = null, h = 0; h < this.dr.length; h++) {
    var k = this.dr[h],
      l = k.closest(d, a);
    l.connection && ((e = l.connection), (f = k), (d = l.Ss));
  }
  e = ((d = { closest: e, local: f, Ss: d }), !!d.closest) && c != g.$y;
  if (
    (this.sh = !!c && !this.zi.getParent() && this.zi.ye() && !e) ||
    fb(this, d, a)
  ) {
    g.i.disable();
    d.closest
      ? ((a = this.uc != d.closest),
        (c = this.Hd != d.local),
        this.uc && this.Hd && (a || c || this.sh) && gb(this))
      : gb(this);
    this.Hd = this.uc = this.Qk = null;
    if (!this.sh && ((a = d.closest), (c = d.local), a))
      if (a == this.uc || a.X().ie())
        console.log("Trying to connect to an insertion marker");
      else {
        this.uc = a;
        this.Hd = c;
        a = this.uc;
        d = this.Hd;
        c = this.zi;
        d.type == g.Wf || d.type == g.Xf
          ? ((e = !a.isConnected()) ||
              ((e = a.sa()),
              d.type == g.Wf
                ? ((d = e.O), (c = g.Ba.EC(c, e)))
                : ((d = e.ka), (c = c.os())),
              (e = c ? ra(hb(d), c, d, !1) : !1)),
            (c = e ? g.Uf.Ql.Wt : g.Uf.Ql.Yz))
          : (c = g.Uf.Ql.Wt);
        switch (c) {
          case g.Uf.Ql.OF:
            this.rw = this.uc.X();
            break;
          case g.Uf.Ql.Wt:
            e = this.Hd;
            c = this.uc;
            d = this.Fw && e == this.Fw ? this.qj : this.uo;
            e = d.gw(e.X(), e);
            if (e == this.Qk)
              throw Error(
                "Made it to showInsertionMarker_ even though the marker isn't changing"
              );
            d.Ia();
            d.ra = !0;
            d.Pa().setAttribute("visibility", "visible");
            e && c && ib(d, e, c);
            c && e.connect(c);
            this.Qk = e;
            break;
          case g.Uf.Ql.Yz:
            (this.so = this.uc.sa()), jb(this.so.Gb, "blocklyReplaceable", !0);
        }
        a &&
          ((d = a.I.u.Sb.U()),
          (c = kb(d, a)),
          a.type == g.jb || a.type == g.Wf
            ? ((d = d.Vl),
              (c =
                g.g.D.moveBy(0, -d) +
                g.g.D.qa("v", d) +
                c.Jf +
                g.g.D.qa("v", d)))
            : ((d = d.Hn - d.Tb),
              (c =
                g.g.D.moveBy(-d, 0) +
                g.g.D.qa("h", d) +
                c.xj +
                g.g.D.qa("h", d))),
          (d = a.I.bb()),
          (g.Ba.pC = g.g.o.L(
            g.g.F.pe,
            {
              class: "blocklyHighlightedConnectionPath",
              d: c,
              transform:
                "translate(" +
                (a.x - d.x) +
                "," +
                (a.y - d.y) +
                ")" +
                (a.I.M ? " scale(-1 1)" : ""),
            },
            a.I.Pa()
          )));
      }
    g.i.enable();
  }
};
function db(a, c) {
  var d = c.type;
  g.i.disable();
  try {
    var e = a.s.gh(d);
    e.FD(!0);
    if (c.Xa) {
      var f = c.Xa();
      f && e.Eb(f);
    }
    for (a = 0; a < c.S.length; a++) {
      var h = c.S[a];
      if (h.name != g.ne.tn) {
        var k = e.S[a];
        for (d = 0; d < h.hb.length; d++) k.hb[d].setValue(h.hb[d].getValue());
      }
    }
    e.Fj(c.isCollapsed());
    e.Ae(lb(c));
    e.xe();
    e.Pa().setAttribute("visibility", "hidden");
  } finally {
    g.i.enable();
  }
  return e;
}
function eb(a) {
  var c = a.zi.jg(!1),
    d = a.zi.os();
  if (d && d != a.zi.W) {
    c.push(d);
    a.Fw = d;
    if (a.qj) {
      g.i.disable();
      try {
        a.qj.J();
      } finally {
        g.i.enable();
      }
    }
    a.qj = db(a, d.X());
  }
  return c;
}
function fb(a, c, d) {
  var e = c.local,
    f = c.closest;
  c = c.Ss;
  if (e && f) {
    if (a.Hd && a.uc) {
      if (a.uc == f && a.Hd == e) return !1;
      e = a.Hd.x + d.x - a.uc.x;
      a = a.Hd.y + d.y - a.uc.y;
      a = Math.sqrt(e * e + a * a);
      return !(f && c > a - g.IE);
    }
    if (a.Hd || a.uc)
      console.error(
        "Only one of localConnection_ and closestConnection_ was set."
      );
    else return !0;
  } else return !(!a.Hd || !a.uc);
  console.error(
    "Returning true from shouldUpdatePreviews, but it's not clear why."
  );
  return !0;
}
function gb(a) {
  a.uc && a.uc.sa() && (g.g.o.removeNode(g.Ba.pC), delete g.Ba.pC);
  if (a.so) jb(a.so.Gb, "blocklyReplaceable", !1), (a.so = null);
  else if (a.rw) a.rw = null;
  else if (a.Qk)
    if (a.Qk) {
      var c = a.Qk,
        d = c.X(),
        e = d.W,
        f = d.ka,
        h = d.O;
      h = c.type == g.jb && !(h && h.oa);
      !(c != e || (f && f.oa)) || h
        ? y(c.sa(), !1)
        : c.type == g.kb && c != e
        ? ((e = c.oa),
          y(e.X(), !1),
          (f = f ? f.oa : null),
          y(d, !0),
          f && f.connect(e))
        : y(d, !0);
      if (c.oa)
        throw Error(
          "markerConnection_ still connected at the end of disconnectInsertionMarker"
        );
      a.Qk = null;
      d.Pa().setAttribute("visibility", "hidden");
    } else console.log("No insertion marker connection to disconnect");
}
g.Uf.prototype.xm = function () {
  var a = [];
  this.uo && a.push(this.uo);
  this.qj && a.push(this.qj);
  return a;
};
g.Oj = function (a, c) {
  this.Rb = a;
  this.s = c;
  this.Sg = new g.Uf(this.Rb);
  this.tk = null;
  this.sh = !1;
  this.ph = this.Rb.bb();
  this.Ir = g.Oj.nJ(a);
};
g.Oj.prototype.J = function () {
  this.Ir.length = 0;
  this.Sg && this.Sg.J();
};
g.Oj.nJ = function (a) {
  var c = [];
  a = p(a, !1);
  for (var d = 0, e; (e = a[d]); d++) {
    e = mb(e);
    for (var f = 0; f < e.length; f++)
      c.push({ location: e[f].ij, icon: e[f] });
  }
  return c;
};
function nb(a, c, d) {
  d = a.Rm(d);
  var e = g.g.Z.sum(a.ph, d);
  a.Rb.bx(e);
  for (e = 0; e < a.Ir.length; e++) {
    var f = a.Ir[e],
      h = f.icon;
    f = g.g.Z.sum(f.location, d);
    h.ij = f;
    h.isVisible() && ((h = h.lc), (h.tc = f), h.Ys && Pa(h));
  }
  a.tk = ob(a.s, c);
  a.Sg.update(d, a.tk);
  a.sh = a.Sg.sh;
  c = a.s.vd;
  a.sh
    ? (a.Rb.yp(!0), a.tk == g.Lt && c && pb(c, !0))
    : (a.Rb.yp(!1), c && pb(c, !1));
}
function qb(a, c, d) {
  nb(a, c, d);
  a.Ir = [];
  c = new g.i.tg(a.Rb, !1, p(a.Rb, !1));
  g.i.Ha(c);
  g.g.o.Fp();
  g.Kb.Ev();
  d = a.Rm(d);
  c = g.g.Z.sum(a.ph, d);
  var e = a.Rb;
  e.Vp && (e.translate(c.x, c.y), e.u.Ne.pr(e.u.Hb));
  c = a.s.vd;
  a.sh
    ? (c && setTimeout(c.vr.bind(c), 100), a.to(), a.Rb.J(!1, !0), (g.rm = []))
    : c && c.vr();
  a.sh ||
    (rb(a.Rb, d.x, d.y),
    a.Rb.Hj(!1),
    a.to(),
    a.Sg.uc
      ? ((d = a.Sg),
        d.uc &&
          (g.i.disable(),
          gb(d),
          g.i.enable(),
          d.Hd.connect(d.uc),
          d.zi.ra && (g.Kb.WH((v(d.Hd) ? d.uc : d.Hd).X()), sb(d.zi.ce()))))
      : a.Rb.Ia(),
    tb(a.Rb));
  a.s.gd(!0);
  (d = a.s.Ma) &&
    "function" == typeof d.Us &&
    d.Us(a.Rb.ye() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.i.na(!1);
}
g.Oj.prototype.to = function () {
  var a = new g.i.rn(this.Rb);
  a.jx = this.ph;
  a.dl();
  g.i.Ha(a);
};
g.Oj.prototype.Rm = function (a) {
  a = new g.g.Z(a.x / this.s.scale, a.y / this.s.scale);
  this.s.Po && a.scale(1 / this.s.options.yc.scale);
  return a;
};
g.Oj.prototype.xm = function () {
  return this.Sg && this.Sg.xm ? this.Sg.xm() : [];
};
g.i.vh = function (a) {
  this.Jg = (this.Ye = "undefined" == typeof a) ? "" : a.id;
  this.Xc = this.Ye ? "" : a.u.id;
  this.group = g.i.wc();
  this.eb = g.i.eb;
};
g.g.object.V(g.i.vh, g.i.Abstract);
g.i.vh.prototype.ya = function () {
  var a = g.i.vh.v.ya.call(this);
  this.Jg && (a.commentId = this.Jg);
  return a;
};
g.i.vh.prototype.ma = function (a) {
  g.i.vh.v.ma.call(this, a);
  this.Jg = a.commentId;
};
g.i.Al = function (a, c, d) {
  g.i.Al.v.constructor.call(this, a);
  a &&
    ((this.WC = "undefined" == typeof c ? "" : c),
    (this.As = "undefined" == typeof d ? "" : d));
};
g.g.object.V(g.i.Al, g.i.vh);
b = g.i.Al.prototype;
b.type = g.i.Ry;
b.ya = function () {
  var a = g.i.Al.v.ya.call(this);
  a.newContents = this.As;
  return a;
};
b.ma = function (a) {
  g.i.Al.v.ma.call(this, a);
  this.As = a.newValue;
};
b.Jm = function () {
  return this.WC == this.As;
};
b.run = function (a) {
  var c;
  (c = ya(this).xr[this.Jg] || null)
    ? c.TO(a ? this.As : this.WC)
    : console.warn("Can't change non-existent comment: " + this.Jg);
};
g.i.wh = function (a) {
  g.i.wh.v.constructor.call(this, a);
  a && (this.xml = a.TD());
};
g.g.object.V(g.i.wh, g.i.vh);
g.i.wh.prototype.type = g.i.mq;
g.i.wh.prototype.ya = function () {
  var a = g.i.wh.v.ya.call(this);
  a.xml = g.T.te(this.xml);
  return a;
};
g.i.wh.prototype.ma = function (a) {
  g.i.wh.v.ma.call(this, a);
  this.xml = g.T.ff(a.xml);
};
g.i.wh.prototype.run = function (a) {
  g.i.Uy(this, a);
};
g.i.Uy = function (a, c) {
  var d = ya(a);
  c
    ? ((c = g.g.xml.createElement("xml")), c.appendChild(a.xml), g.T.Yi(c, d))
    : (d = d.xr[a.Jg] || null)
    ? d.J(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + a.Jg);
};
g.i.xh = function (a) {
  g.i.xh.v.constructor.call(this, a);
  a && (this.xml = a.TD());
};
g.g.object.V(g.i.xh, g.i.vh);
g.i.xh.prototype.type = g.i.Sy;
g.i.xh.prototype.ya = function () {
  return g.i.xh.v.ya.call(this);
};
g.i.xh.prototype.ma = function (a) {
  g.i.xh.v.ma.call(this, a);
};
g.i.xh.prototype.run = function (a) {
  g.i.Uy(this, !a);
};
g.i.Rj = function (a) {
  g.i.Rj.v.constructor.call(this, a);
  a && ((this.fv = a), (this.kx = a.fC()), (this.Vk = null));
};
g.g.object.V(g.i.Rj, g.i.vh);
b = g.i.Rj.prototype;
b.dl = function () {
  if (!this.fv)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.Vk = this.fv.fC();
  this.fv = null;
};
b.type = g.i.nq;
b.ya = function () {
  var a = g.i.Rj.v.ya.call(this);
  this.Vk &&
    (a.newCoordinate = Math.round(this.Vk.x) + "," + Math.round(this.Vk.y));
  return a;
};
b.ma = function (a) {
  g.i.Rj.v.ma.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.Vk = new g.g.Z(Number(a[0]), Number(a[1]))));
};
b.Jm = function () {
  return g.g.Z.zf(this.kx, this.Vk);
};
b.run = function (a) {
  var c;
  if ((c = ya(this).xr[this.Jg] || null)) {
    a = a ? this.Vk : this.kx;
    var d = c.fC();
    c.moveBy(a.x - d.x, a.y - d.y);
  } else console.warn("Can't move non-existent comment: " + this.Jg);
};
g.C.register(g.C.ea.jc, g.i.mq, g.i.wh);
g.C.register(g.C.ea.jc, g.i.Ry, g.i.Al);
g.C.register(g.C.ea.jc, g.i.nq, g.i.Rj);
g.C.register(g.C.ea.jc, g.i.Sy, g.i.xh);
g.iq = function (a, c) {
  this.Tc = a;
  this.s = c;
  this.tk = null;
  this.tt = !1;
  this.ph = this.Tc.bb();
  this.wk = g.g.Ik() && c.Ne ? c.Ne : null;
};
g.iq.prototype.J = function () {
  this.wk = this.s = this.Tc = null;
};
function ub(a, c, d) {
  d = a.Rm(d);
  d = g.g.Z.sum(a.ph, d);
  a.Tc.bx(a.wk, d);
  a.Tc.ye() &&
    ((a.tk = ob(a.s, c)),
    (a.tt = a.tk != g.Zy),
    (c = a.s.vd),
    a.tt
      ? (a.Tc.yp(!0), a.tk == g.Lt && c && pb(c, !0))
      : (a.Tc.yp(!1), c && pb(c, !1)));
}
function vb(a, c, d) {
  ub(a, c, d);
  c = a.Rm(d);
  c = g.g.Z.sum(a.ph, c);
  a.Tc.moveTo(c.x, c.y);
  c = a.s.vd;
  a.tt
    ? (c && setTimeout(c.vr.bind(c), 100), a.to(), a.Tc.J(!1, !0))
    : c && c.vr();
  a.tt || (a.wk && a.wk.pr(a.s.og), a.Tc.Hj && a.Tc.Hj(!1), a.to());
  a.s.gd(!0);
  (c = a.s.Ma) &&
    "function" == typeof c.Us &&
    c.Us(a.Tc.ye() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.i.na(!1);
}
g.iq.prototype.to = function () {
  if (this.Tc.EO) {
    var a = new g.i.Rj(this.Tc);
    a.kx = this.ph;
    a.dl();
    g.i.Ha(a);
  }
};
g.iq.prototype.Rm = function (a) {
  a = new g.g.Z(a.x / this.s.scale, a.y / this.s.scale);
  this.s.Po && a.scale(1 / this.s.options.yc.scale);
  return a;
};
g.i.Qf = function (a, c, d) {
  g.i.Qf.v.constructor.call(this, a ? a.u.id : c);
  this.ub = a ? a.id : null;
  this.QD = d;
};
g.g.object.V(g.i.Qf, g.i.Me);
g.i.Qf.prototype.type = g.i.Ht;
g.i.Qf.prototype.ya = function () {
  var a = g.i.Qf.v.ya.call(this);
  a.targetType = this.QD;
  this.ub && (a.blockId = this.ub);
  return a;
};
g.i.Qf.prototype.ma = function (a) {
  g.i.Qf.v.ma.call(this, a);
  this.QD = a.targetType;
  this.ub = a.blockId;
};
g.C.register(g.C.ea.jc, g.i.Ht, g.i.Qf);
g.Un = function (a) {
  this.s = a;
  this.MD = new g.g.Z(a.scrollX, a.scrollY);
};
g.Un.prototype.J = function () {
  this.s = null;
};
g.Un.prototype.oy = function () {
  g.selected && wb(g.selected);
  pa(this.s);
};
g.Un.prototype.Zi = function (a) {
  a = g.g.Z.sum(this.MD, a);
  this.s.scroll(a.x, a.y);
};
g.zq = function (a) {
  g.zq.v.constructor.call(this, a.s);
  this.DD = a.Ta;
  this.Dk = a.Fd;
};
g.g.object.V(g.zq, g.Un);
g.zq.prototype.Zi = function (a) {
  a = g.g.Z.sum(this.MD, a);
  this.Dk ? this.DD.set(-a.x) : this.DD.set(-a.y);
};
g.navigation = {};
g.navigation.Nm = null;
g.navigation.Sl = 1;
g.navigation.$f = 2;
g.navigation.Tl = 3;
g.navigation.yA = 40;
g.navigation.Se = g.navigation.$f;
g.navigation.qb = {
  zd: "previous",
  yd: "next",
  Aq: "in",
  Kq: "out",
  vz: "insert",
  kG: "mark",
  VE: "disconnect",
  Sq: "toolbox",
  eF: "exit",
  hH: "toggle_keyboard_nav",
  uG: "move workspace cursor up",
  rG: "move workspace cursor down",
  sG: "move workspace cursor left",
  tG: "move workspace cursor right",
};
g.navigation.Dn = "local_marker_1";
g.navigation.ae = function () {
  return g.navigation.Vg().ae(g.navigation.Dn);
};
g.navigation.Vg = function () {
  return g.Ug();
};
g.navigation.GB = function (a) {
  if ((a = a.Ma))
    if (
      ((g.navigation.Se = g.navigation.Tl),
      g.navigation.BD(!1),
      g.navigation.ae().rb || g.navigation.Uw(),
      !a.xb && 0 < a.Lb.length)
    ) {
      var c = a.Lb[0];
      c.eh() && xb(a, c);
    }
};
g.navigation.FB = function (a) {
  g.navigation.Se = g.navigation.Sl;
  var c = a.Ma;
  a = c ? c.mc() : a.mc();
  g.navigation.ae().rb || g.navigation.Uw();
  a &&
    a.s &&
    ((a = a.s.dc(!0)),
    0 < a.length && ((a = a[0]), (a = g.G.jo(a)), F(g.navigation.wm(), a)));
};
g.navigation.Nr = function (a) {
  g.Kc();
  var c = a.Nb(),
    d = !!a.Ma,
    e = a.dc(!0);
  g.navigation.BD(d);
  g.navigation.Se = g.navigation.$f;
  0 < e.length
    ? F(c, g.G.ov(e[0]))
    : ((a = g.G.mm(a, new g.g.Z(100, 100))), F(c, a));
};
g.navigation.wm = function () {
  var a = g.navigation.Vg(),
    c = null;
  a.ra && (c = (a = (c = a.Ma) ? c.mc() : a.mc()) ? a.s.Nb() : null);
  return c;
};
g.navigation.qJ = function (a) {
  var c = a.mc();
  if (c && c.isVisible()) {
    var d = g.navigation.wm().rb.Fa;
    d.isEnabled()
      ? ((c = yb(c, d)),
        c.Ia(),
        Ea(c, !0),
        F(a.Nb(), g.G.Ng(c)),
        g.navigation.OC() ||
          g.navigation.Jd(
            "Something went wrong while inserting a block from the flyout."
          ),
        g.navigation.Nr(a),
        F(a.Nb(), g.G.ov(c)),
        g.navigation.eL())
      : g.navigation.Jd("Can't insert a disabled block.");
  } else
    g.navigation.Jd(
      "Trying to insert from the flyout when the flyout does not  exist or is not visible"
    );
};
g.navigation.BD = function (a) {
  g.navigation.wm() &&
    (g.navigation.wm().Oa(), a && g.navigation.Vg().mc().Oa());
};
g.navigation.IJ = function () {
  var a = g.navigation.ae().rb,
    c = g.navigation.Vg().Nb().rb;
  if (!a) return g.navigation.Jd("Cannot insert with no marked node."), !1;
  if (!c) return g.navigation.Jd("Cannot insert with no cursor node."), !1;
  a = a.wb();
  c = c.wb();
  return a == g.G.types.Fc
    ? (g.navigation.Jd("Should not have been able to mark a field."), !1)
    : a == g.G.types.oc
    ? (g.navigation.Jd("Should not have been able to mark a block."), !1)
    : a == g.G.types.zg
    ? (g.navigation.Jd("Should not have been able to mark a stack."), !1)
    : c == g.G.types.Fc
    ? (g.navigation.Jd("Cannot attach a field to anything else."), !1)
    : c == g.G.types.$c
    ? (g.navigation.Jd("Cannot attach a workspace to anything else."), !1)
    : !0;
};
g.navigation.NJ = function (a, c) {
  if (!a) return !1;
  if (a.Ra)
    return g.navigation.Jd("Cannot move a shadow block to the workspace."), !1;
  a.getParent() && y(a, !1);
  a.moveTo(c.ut);
  return !0;
};
g.navigation.OC = function () {
  var a = g.navigation.ae().rb,
    c = g.navigation.Vg().Nb().rb;
  if (!g.navigation.IJ()) return !1;
  var d = a.wb(),
    e = c.wb(),
    f = c.Fa,
    h = a.Fa;
  if (a.Fm && c.Fm) return g.navigation.dg(f, h);
  if (a.Fm && (e == g.G.types.oc || e == g.G.types.zg))
    return g.navigation.tC(f, h);
  if (d == g.G.types.$c) return (c = c ? c.X() : null), g.navigation.NJ(c, a);
  g.navigation.Jd("Unexpected state in Blockly.navigation.modify_.");
  return !1;
};
g.navigation.nI = function (a, c) {
  var d = a.X(),
    e = c.X();
  d.ce() == e.ce() &&
    (-1 < p(d, !1).indexOf(e)
      ? g.navigation.Rr(c).disconnect()
      : g.navigation.Rr(a).disconnect());
};
g.navigation.$w = function (a, c) {
  if (!a || !c) return !1;
  var d = a.X();
  return ra(hb(a), a, c, !1)
    ? (g.navigation.nI(a, c), v(c) || ib(d.ce(), a, c), c.connect(a), !0)
    : !1;
};
g.navigation.Rr = function (a) {
  var c = a.X();
  return v(a) ? (c.ka ? c.ka : c.O ? c.O : null) : a;
};
g.navigation.aC = function (a) {
  return v(a) ? a : a.oa ? a.oa : null;
};
g.navigation.dg = function (a, c) {
  if (!a || !c) return !1;
  var d = g.navigation.Rr(a),
    e = g.navigation.aC(c),
    f = g.navigation.aC(a),
    h = g.navigation.Rr(c);
  if (
    (d && e && g.navigation.$w(d, e)) ||
    (f && h && g.navigation.$w(f, h)) ||
    g.navigation.$w(a, c)
  )
    return !0;
  d = hb(a).kr(a, c, !1);
  g.navigation.Jd("Connection failed with error: " + va(d, a, c));
  return !1;
};
g.navigation.tC = function (a, c) {
  switch (c.type) {
    case g.Xf:
      if (g.navigation.dg(a.W, c)) return !0;
      break;
    case g.kb:
      if (g.navigation.dg(a.ka, c)) return !0;
      break;
    case g.jb:
      if (g.navigation.dg(a.O, c)) return !0;
      break;
    case g.Wf:
      for (var d = 0; d < a.S.length; d++) {
        var e = a.S[d].connection;
        if (e && e.type === g.jb && g.navigation.dg(e, c)) return !0;
      }
      if (a.O && g.navigation.dg(a.O, c)) return !0;
  }
  g.navigation.Jd("This block can not be inserted at the marked location.");
  return !1;
};
g.navigation.mI = function (a) {
  var c = a.Nb().rb;
  if (c.Fm) {
    var d = c.Fa;
    d.isConnected()
      ? ((c = v(d) ? d : d.oa),
        (d = v(d) ? d.oa : d),
        d.X().Ra
          ? g.navigation.Nw("Cannot disconnect a shadow block")
          : (c.disconnect(),
            zb(d, c),
            sb(c.X().ce()),
            (c = g.G.Og(c)),
            F(a.Nb(), c)))
      : g.navigation.Nw("Cannot disconnect unconnected connection");
  } else
    g.navigation.Nw(
      "Cannot disconnect blocks when the cursor is not on a connection"
    );
};
g.navigation.Uw = function () {
  F(g.navigation.ae(), g.navigation.Vg().Nb().rb);
};
g.navigation.eL = function () {
  var a = g.navigation.ae();
  F(a, null);
  a.Oa();
};
g.navigation.Zb = function (a) {
  g.navigation.Se = a;
};
g.navigation.OJ = function (a) {
  var c = g.navigation.Vg();
  if (c && (c = c.Nb())) {
    var d = c.rb;
    d = d ? d.X() : null;
    d === a
      ? d.getParent()
        ? (a = d.ka || d.O) && F(c, g.G.Og(a.oa))
        : F(c, g.G.mm(d.u, d.bb()))
      : d && -1 < Ca(a, !1).indexOf(d) && F(c, g.G.mm(d.u, d.bb()));
  }
};
g.navigation.PJ = function (a) {
  var c = g.navigation.Vg().Nb();
  if (c) {
    var d = c.rb;
    d = d ? d.X() : null;
    d === a && F(c, g.G.Ng(d));
  }
};
g.navigation.wI = function () {
  var a = g.navigation.Vg();
  a.Fb || ((a.Fb = !0), g.navigation.Nr(a));
};
g.navigation.kI = function () {
  var a = g.navigation.Vg();
  a.Fb &&
    ((a.Fb = !1),
    a.Nb().Oa(),
    g.navigation.ae().Oa(),
    g.navigation.wm() && g.navigation.wm().Oa());
};
g.navigation.Nw = function (a) {
  g.navigation.Nm ? g.navigation.Nm("log", a) : console.log(a);
};
g.navigation.Jd = function (a) {
  g.navigation.Nm ? g.navigation.Nm("warn", a) : console.warn(a);
};
g.navigation.yO = function (a) {
  g.navigation.Nm ? g.navigation.Nm("error", a) : console.error(a);
};
g.navigation.zs = function (a, c, d) {
  var e = a.Nb(),
    f = a.Nb().rb;
  if (f.wb() !== g.G.types.$c) return !1;
  f = f.ut;
  F(
    e,
    g.G.mm(a, new g.g.Z(c * g.navigation.yA + f.x, d * g.navigation.yA + f.y))
  );
  return !0;
};
g.navigation.$I = function (a) {
  a = a.Nb().rb;
  var c = a.wb();
  c == g.G.types.Fc
    ? ((a = a.Fa), bb(a) && a.ng(void 0))
    : a.Fm || c == g.G.types.$c
    ? g.navigation.Uw()
    : c == g.G.types.oc
    ? g.navigation.Jd("Cannot mark a block.")
    : c == g.G.types.zg && g.navigation.Jd("Cannot mark a stack.");
};
g.navigation.XK = function () {
  var a = {
    name: g.navigation.qb.zd,
    cb: function (c) {
      return c.Fb;
    },
    Aa: function (c, d, e) {
      d = c.Ma;
      switch (g.navigation.Se) {
        case g.navigation.$f:
          return c.Nb().Yb(e);
        case g.navigation.Sl:
          return (c = d ? d.mc() : c.mc()), !(!c || !c.Yb(e));
        case g.navigation.Tl:
          return d && "function" == typeof d.Yb ? d.Yb(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.uA, a.name);
};
g.navigation.VK = function () {
  var a = {
    name: g.navigation.qb.Kq,
    cb: function (c) {
      return c.Fb;
    },
    Aa: function (c, d, e) {
      switch (g.navigation.Se) {
        case g.navigation.$f:
          return c.Nb().Yb(e);
        case g.navigation.Sl:
          return g.navigation.GB(c), !0;
        case g.navigation.Tl:
          return (c = c.Ma) && "function" == typeof c.Yb ? c.Yb(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Gy, a.name);
};
g.navigation.UK = function () {
  var a = {
    name: g.navigation.qb.yd,
    cb: function (c) {
      return c.Fb;
    },
    Aa: function (c, d, e) {
      d = c.Ma;
      switch (g.navigation.Se) {
        case g.navigation.$f:
          return c.Nb().Yb(e);
        case g.navigation.Sl:
          return (c = d ? d.mc() : c.mc()), !(!c || !c.Yb(e));
        case g.navigation.Tl:
          return d && "function" == typeof d.Yb ? d.Yb(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Zz, a.name);
};
g.navigation.PK = function () {
  var a = {
    name: g.navigation.qb.Aq,
    cb: function (c) {
      return c.Fb;
    },
    Aa: function (c, d, e) {
      switch (g.navigation.Se) {
        case g.navigation.$f:
          return c.Nb().Yb(e);
        case g.navigation.Tl:
          return (
            ((d = c.Ma) && "function" == typeof d.Yb && d.Yb(e)) ||
              g.navigation.FB(c),
            !0
          );
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Wy, a.name);
};
g.navigation.RK = function () {
  var a = {
    name: g.navigation.qb.vz,
    cb: function (c) {
      return c.Fb && !c.options.readOnly;
    },
    Aa: function () {
      switch (g.navigation.Se) {
        case g.navigation.$f:
          return g.navigation.OC();
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.LF, a.name);
};
g.navigation.SK = function () {
  var a = {
    name: g.navigation.qb.kG,
    cb: function (c) {
      return c.Fb && !c.options.readOnly;
    },
    Aa: function (c) {
      switch (g.navigation.Se) {
        case g.navigation.$f:
          return g.navigation.$I(c), !0;
        case g.navigation.Sl:
          return g.navigation.qJ(c), !0;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Dl, a.name);
};
g.navigation.JK = function () {
  var a = {
    name: g.navigation.qb.VE,
    cb: function (c) {
      return c.Fb && !c.options.readOnly;
    },
    Aa: function (c) {
      switch (g.navigation.Se) {
        case g.navigation.$f:
          return g.navigation.mI(c), !0;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Vq, a.name);
};
g.navigation.ZK = function () {
  var a = {
    name: g.navigation.qb.Sq,
    cb: function (c) {
      return c.Fb && !c.options.readOnly;
    },
    Aa: function (c) {
      switch (g.navigation.Se) {
        case g.navigation.$f:
          return c.Ma ? g.navigation.GB(c) : g.navigation.FB(c), !0;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.YG, a.name);
};
g.navigation.MK = function () {
  var a = {
    name: g.navigation.qb.eF,
    cb: function (c) {
      return c.Fb;
    },
    Aa: function (c) {
      switch (g.navigation.Se) {
        case g.navigation.Sl:
          return g.navigation.Nr(c), !0;
        case g.navigation.Tl:
          return g.navigation.Nr(c), !0;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a, !0);
  G(g.g.P.Ot, a.name, !0);
  G(g.g.P.E, a.name, !0);
};
g.navigation.YK = function () {
  var a = {
    name: g.navigation.qb.hH,
    Aa: function (d) {
      d.Fb ? g.navigation.kI() : g.navigation.wI();
      return !0;
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.VF, [g.g.P.Di, g.g.P.Hh]);
  G(c, a.name);
};
g.navigation.aL = function () {
  var a = {
    name: g.navigation.qb.sG,
    cb: function (d) {
      return d.Fb && !d.options.readOnly;
    },
    Aa: function (d) {
      return g.navigation.zs(d, -1, 0);
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.Gy, [g.g.P.Hh]);
  G(c, a.name);
};
g.navigation.bL = function () {
  var a = {
    name: g.navigation.qb.tG,
    cb: function (d) {
      return d.Fb && !d.options.readOnly;
    },
    Aa: function (d) {
      return g.navigation.zs(d, 1, 0);
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.Wy, [g.g.P.Hh]);
  G(c, a.name);
};
g.navigation.cL = function () {
  var a = {
    name: g.navigation.qb.uG,
    cb: function (d) {
      return d.Fb && !d.options.readOnly;
    },
    Aa: function (d) {
      return g.navigation.zs(d, 0, -1);
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.uA, [g.g.P.Hh]);
  G(c, a.name);
};
g.navigation.$K = function () {
  var a = {
    name: g.navigation.qb.rG,
    cb: function (d) {
      return d.Fb && !d.options.readOnly;
    },
    Aa: function (d) {
      return g.navigation.zs(d, 0, 1);
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.Zz, [g.g.P.Hh]);
  G(c, a.name);
};
g.navigation.TK = function () {
  g.navigation.PK();
  g.navigation.UK();
  g.navigation.VK();
  g.navigation.XK();
  g.navigation.$K();
  g.navigation.aL();
  g.navigation.bL();
  g.navigation.cL();
  g.navigation.JK();
  g.navigation.MK();
  g.navigation.RK();
  g.navigation.SK();
  g.navigation.YK();
  g.navigation.ZK();
};
g.K = {};
g.K.visible = !1;
g.K.em = !1;
g.K.YF = 50;
g.K.QC = 0;
g.K.Cp = 0;
g.K.Hw = 0;
g.K.Iw = 0;
g.K.Mb = null;
g.K.gp = null;
g.K.Jz = 0;
g.K.Kz = 10;
g.K.MG = 10;
g.K.IF = 750;
g.K.au = 5;
g.K.pb = null;
g.K.WI = function () {
  var a = g.K.cC(g.K.Mb);
  if (a) {
    for (a = a.Nf; "function" == typeof a; ) a = a();
    if ("string" != typeof a)
      throw Error("Tooltip function must return a string.");
    return a;
  }
  return "";
};
g.K.cC = function (a) {
  for (; a && a.Nf; ) {
    if ("string" == typeof a.Nf || "function" == typeof a.Nf) return a;
    a = a.Nf;
  }
  return null;
};
g.K.ab = function () {
  g.K.pb ||
    ((g.K.pb = document.createElement("div")),
    (g.K.pb.className = "blocklyTooltipDiv"),
    (g.Ns || document.body).appendChild(g.K.pb));
};
g.K.dm = function (a) {
  a.LJ = g.Ud(a, "mouseover", null, g.K.kK);
  a.JJ = g.Ud(a, "mouseout", null, g.K.jK);
  a.addEventListener("mousemove", g.K.Js, !1);
};
g.K.Ay = function (a) {
  a && (g.Na(a.LJ), g.Na(a.JJ), a.removeEventListener("mousemove", g.K.Js));
};
g.K.kK = function (a) {
  g.K.em ||
    ((a = g.K.cC(a.currentTarget)),
    g.K.Mb != a && (g.K.Oa(), (g.K.gp = null), (g.K.Mb = a)),
    clearTimeout(g.K.QC));
};
g.K.jK = function () {
  g.K.em ||
    ((g.K.QC = setTimeout(function () {
      g.K.Mb = null;
      g.K.gp = null;
      g.K.Oa();
    }, 1)),
    clearTimeout(g.K.Cp));
};
g.K.Js = function (a) {
  if (g.K.Mb && g.K.Mb.Nf && !g.K.em)
    if (g.K.visible) {
      var c = g.K.Hw - a.pageX;
      a = g.K.Iw - a.pageY;
      Math.sqrt(c * c + a * a) > g.K.MG && g.K.Oa();
    } else
      g.K.gp != g.K.Mb &&
        (clearTimeout(g.K.Cp),
        (g.K.Hw = a.pageX),
        (g.K.Iw = a.pageY),
        (g.K.Cp = setTimeout(g.K.sL, g.K.IF)));
};
g.K.J = function () {
  g.K.Mb = null;
  g.K.gp = null;
  g.K.Oa();
};
g.K.Oa = function () {
  g.K.visible &&
    ((g.K.visible = !1), g.K.pb && (g.K.pb.style.display = "none"));
  g.K.Cp && clearTimeout(g.K.Cp);
};
g.K.block = function () {
  g.K.Oa();
  g.K.em = !0;
};
g.K.LL = function () {
  g.K.em = !1;
};
g.K.sL = function () {
  if (!g.K.em && ((g.K.gp = g.K.Mb), g.K.pb)) {
    g.K.pb.textContent = "";
    var a = g.K.WI();
    a = g.g.yb.gE(a, g.K.YF);
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) {
      var d = document.createElement("div");
      d.appendChild(document.createTextNode(a[c]));
      g.K.pb.appendChild(d);
    }
    a = g.K.Mb.M;
    c = document.documentElement.clientWidth;
    d = document.documentElement.clientHeight;
    g.K.pb.style.direction = a ? "rtl" : "ltr";
    g.K.pb.style.display = "block";
    g.K.visible = !0;
    var e = g.K.Hw;
    e = a ? e - (g.K.Jz + g.K.pb.offsetWidth) : e + g.K.Jz;
    var f = g.K.Iw + g.K.Kz;
    f + g.K.pb.offsetHeight > d + window.scrollY &&
      (f -= g.K.pb.offsetHeight + 2 * g.K.Kz);
    a
      ? (e = Math.max(g.K.au - window.scrollX, e))
      : e + g.K.pb.offsetWidth > c + window.scrollX - 2 * g.K.au &&
        (e = c - g.K.pb.offsetWidth - 2 * g.K.au);
    g.K.pb.style.top = f + "px";
    g.K.pb.style.left = e + "px";
  }
};
g.wg = function (a, c) {
  this.PC = null;
  this.Xd = new g.g.Z(0, 0);
  this.zc = this.Oc = this.cn = this.dn = this.ef = null;
  this.pv = c;
  this.Lo = this.Lk = this.Mo = this.Bk = !1;
  this.Ff = a;
  this.pa = this.xl = this.Ig = this.Si = this.Ls = this.Ks = null;
  this.ds = this.Ck = this.OA = !1;
  this.lC = !g.XE;
};
b = g.wg.prototype;
b.J = function () {
  g.Touch.mk();
  g.K.LL();
  this.pv.Cd = null;
  this.Ks && g.Na(this.Ks);
  this.Ls && g.Na(this.Ls);
  this.Ig && this.Ig.J();
  this.xl && this.xl.J();
  this.Si && this.Si.J();
};
function Ab(a, c) {
  a.Xd = g.g.Z.pm(new g.g.Z(c.clientX, c.clientY), a.PC);
  if (a.Bk) var d = !1;
  else (a.Bk = g.g.Z.GJ(a.Xd) > (a.pa ? g.vF : g.WE)), (d = a.Bk);
  if (d) {
    if (a.OA)
      throw Error("updateIsDragging_ should only be called once per gesture.");
    a.OA = !0;
    if (a.ef) {
      a.Lo = !0;
      a.Si = new g.iq(a.ef, a.zc);
      d = a.Si;
      g.i.wc() || g.i.na(!0);
      d.s.gd(!1);
      d.Tc.Qu = !1;
      d.wk && (d.Tc.moveTo(0, 0), d.wk.ql(d.ph.x, d.ph.y), Bb(d.wk, d.Tc.Pa()));
      d.Tc.Hj && d.Tc.Hj(!0);
      var e = d.s.Ma;
      e &&
        "function" == typeof e.Xq &&
        e.Xq(d.Tc.ye() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      ub(a.Si, a.Ff, a.Xd);
      d = !0;
    } else d = !1;
    if (!d) {
      if (a.Oc)
        if (
          (a.pa
            ? (a.Oc && a.Oc.isEnabled()
                ? ((d = !Cb(a.pa)) ||
                    ((d = a.Xd),
                    (d = (Math.atan2(d.y, d.x) / Math.PI) * 180),
                    (e = a.pa.tI),
                    (d =
                      (d < e && d > -e) || d < -180 + e || d > 180 - e
                        ? !0
                        : !1)),
                  d
                    ? ((a.zc = a.pa.gb),
                      Db(a.zc),
                      g.i.wc() || g.i.na(!0),
                      (a.cn = null),
                      (a.Oc = yb(a.pa, a.Oc)),
                      a.Oc.select(),
                      (d = !0))
                    : (d = !1))
                : (d = !1),
              (a.Lk = d))
            : a.Oc.Lc() && (a.Lk = !0),
          a.Lk)
        ) {
          a.Ig = new g.Oj(a.Oc, a.zc);
          d = a.Ig;
          e = a.Xd;
          var f = a.lC;
          g.i.wc() || g.i.na(!0);
          var h = new g.i.tg(d.Rb, !0, p(d.Rb, !1));
          g.i.Ha(h);
          d.s.Po && sb(d.Rb);
          g.g.o.Ep();
          d.s.gd(!1);
          g.Kb.Ev();
          if (d.Rb.getParent() || (f && d.Rb.W && d.Rb.W.sa()))
            y(d.Rb, f),
              (e = d.Rm(e)),
              (e = g.g.Z.sum(d.ph, e)),
              d.Rb.translate(e.x, e.y),
              g.Kb.oI(d.Rb),
              (e = d.Sg),
              (e.dr = eb(e));
          d.Rb.Hj(!0);
          e = d.Rb;
          e.Vp &&
            ((f = e.bb()),
            e.Pa().removeAttribute("transform"),
            e.u.Ne.ql(f.x, f.y),
            (f = e.Pa()) && Bb(e.u.Ne, f));
          (e = d.s.Ma) &&
            "function" == typeof e.Xq &&
            e.Xq(d.Rb.ye() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
          nb(a.Ig, a.Ff, a.Xd);
          d = !0;
        } else d = !1;
      else d = !1;
      if ((d = !d))
        if (a.pa) d = Cb(a.pa);
        else if ((d = a.zc)) (d = a.zc), (d = d.options.fd && d.options.fd.Zi);
      d &&
        ((a.xl = a.pa ? new g.zq(a.pa) : new g.Un(a.zc)),
        (a.Mo = !0),
        a.xl.oy());
    }
    g.sj();
  }
  a.Ff = c;
}
b.Gv = function (a) {
  g.g.hs(a)
    ? this.cancel()
    : ((this.Ck = !0),
      g.Kb.Ev(),
      Db(this.zc),
      this.zc.Po && this.zc.resize(),
      g.Kc(!!this.pa),
      na(this.zc),
      (this.Ff = a),
      g.K.block(),
      this.Oc &&
        (!this.Oc.Ub && a.shiftKey && this.Oc.u.Fb
          ? F(this.pv.Nb(), g.G.ov(this.Oc))
          : this.Oc.select()),
      g.g.Ok(a)
        ? ba(this, a)
        : (("touchstart" != a.type.toLowerCase() &&
            "pointerdown" != a.type.toLowerCase()) ||
            "mouse" == a.pointerType ||
            g.EJ(a, this),
          (this.PC = new g.g.Z(a.clientX, a.clientY)),
          (this.lC = a.altKey || a.ctrlKey || a.metaKey),
          this.dm(a)));
};
b.dm = function (a) {
  this.Ks = g.ta(document, "mousemove", null, this.Am.bind(this));
  this.Ls = g.ta(document, "mouseup", null, this.Xr.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
b.Am = function (a) {
  Ab(this, a);
  this.Mo
    ? this.xl.Zi(this.Xd)
    : this.Lk
    ? nb(this.Ig, this.Ff, this.Xd)
    : this.Lo && ub(this.Si, this.Ff, this.Xd);
  a.preventDefault();
  a.stopPropagation();
};
b.Xr = function (a) {
  Ab(this, a);
  g.sj();
  if (this.ds) console.log("Trying to end a gesture recursively.");
  else {
    this.ds = !0;
    if (this.Lo) vb(this.Si, a, this.Xd);
    else if (this.Lk) qb(this.Ig, a, this.Xd);
    else if (this.Mo) {
      var c = this.xl;
      c.Zi(this.Xd);
      qa(c.s);
    } else if (this.ef && !this.Bk)
      this.ef.oL && this.ef.oL(), this.ef.select && this.ef.select();
    else if (Eb(this)) {
      c = this.dn;
      var d = this.Ff;
      bb(c) && c.ng(d);
      Fb(this);
    } else
      !this.cn || this.Bk || Eb(this)
        ? this.cn ||
          this.ef ||
          this.dn ||
          this.Bk ||
          ((c = this.pv),
          a.shiftKey && c.Fb
            ? ((d = g.g.kL(c, new g.g.Z(a.clientX, a.clientY))),
              (d = g.G.mm(c, d)),
              F(c.Nb(), d))
            : g.selected && wb(g.selected),
          (c = new g.i.Qf(null, (this.zc || c).id, "workspace")),
          g.i.Ha(c))
        : (this.pa && this.pa.cm
            ? this.Oc.isEnabled() &&
              (g.i.wc() || g.i.na(!0), tb(yb(this.pa, this.Oc)))
            : ((c = new g.i.Qf(this.cn, this.zc.id, "block")), g.i.Ha(c)),
          Fb(this),
          g.i.na(!1));
    a.preventDefault();
    a.stopPropagation();
    this.J();
  }
};
b.cancel = function () {
  if (!this.ds) {
    g.sj();
    if (this.Lo) vb(this.Si, this.Ff, this.Xd);
    else if (this.Lk) qb(this.Ig, this.Ff, this.Xd);
    else if (this.Mo) {
      var a = this.xl;
      a.Zi(this.Xd);
      qa(a.s);
    }
    this.J();
  }
};
function ba(a, c) {
  a.Oc
    ? (Fb(a), g.Kc(!!a.pa), a.Oc.Bp(c))
    : a.ef
    ? a.ef.Bp(c)
    : a.zc && !a.pa && (g.Kc(), a.zc.Bp(c));
  c.preventDefault();
  c.stopPropagation();
  a.J();
}
function Gb(a, c, d) {
  if (a.Ck)
    throw Error(
      "Tried to call gesture.handleWsStart, but the gesture had already been started."
    );
  a.zc || (a.zc = d);
  a.Ff = c;
  a.Gv(c);
  a.zc.Fb && g.navigation.Zb(g.navigation.$f);
}
function Hb(a, c, d) {
  if (a.Ck)
    throw Error(
      "Tried to call gesture.handleFlyoutStart, but the gesture had already been started."
    );
  a.pa || (a.pa = d);
  Gb(a, c, d.s);
}
function Fb(a) {
  a.Oc && !a.pa && sb(a.Oc);
}
function Ib(a, c) {
  a.cn || a.ef || ((a.cn = c), c.Ub && c != c.ce() ? Jb(a, c.ce()) : Jb(a, c));
}
function Jb(a, c) {
  c.Ra ? Jb(a, c.getParent()) : (a.Oc = c);
}
function Eb(a) {
  return (a.dn ? bb(a.dn) : !1) && !a.Bk && (!a.pa || !a.pa.cm);
}
b.Cc = function () {
  return this.Mo || this.Lk || this.Lo;
};
b.xm = function () {
  return this.Ig ? this.Ig.xm() : [];
};
g.wg.Fk = function () {
  for (var a = g.Wb.getAll(), c = 0, d; (d = a[c]); c++) if (d.Cd) return !0;
  return !1;
};
g.jd = function (a, c, d) {
  this.sb = this.Sj;
  this.XD = this.tl = null;
  this.Nc = new g.g.re(0, 0);
  this.B = this.Zw = this.xi = this.Pc = this.Db = this.Zd = this.li = this.Vh = null;
  d && this.Bd(d);
  this.setValue(a);
  c && (this.tl = c);
};
b = g.jd.prototype;
b.Sj = null;
b.name = void 0;
b.eg = !1;
b.ss = 50;
b.I = null;
b.dh = !0;
b.Mj = !0;
b.qr = null;
g.jd.Hq = "\u00a0";
b = g.jd.prototype;
b.un = !0;
b.gk = !1;
b.Bd = function (a) {
  var c = a.tooltip;
  "string" == typeof c && (c = g.g.Mc(a.tooltip));
  c && this.fb(c);
};
b.ey = function (a) {
  if (this.I) throw Error("Field already bound to a block.");
  this.I = a;
};
b.U = function () {
  !this.B && this.I && this.I.u && this.I.u.ra && (this.B = this.I.u.Sb.U());
  return this.B;
};
b.X = function () {
  return this.I;
};
b.aa = function () {
  this.Zd ||
    ((this.Zd = g.g.o.L(g.g.F.qc, {}, null)),
    this.isVisible() || (this.Zd.style.display = "none"),
    this.I.Pa().appendChild(this.Zd),
    this.di(),
    this.Ci(),
    this.fb(this.XD),
    g.K.dm(Kb(this)),
    (this.Zw = g.ta(Kb(this), "mousedown", this, this.wj)),
    this.Gk());
};
b.di = function () {
  Lb(this);
  Mb(this);
};
b.Gk = function () {};
function Lb(a) {
  a.Db = g.g.o.L(
    g.g.F.Hc,
    {
      rx: a.U().xq,
      ry: a.U().xq,
      x: 0,
      y: 0,
      height: a.Nc.height,
      width: a.Nc.width,
      class: "blocklyFieldRect",
    },
    a.Zd
  );
}
function Mb(a) {
  a.Pc = g.g.o.L(g.g.F.Rq, { class: "blocklyText" }, a.Zd);
  a.U().Tt && a.Pc.setAttribute("dominant-baseline", "central");
  a.xi = document.createTextNode("");
  a.Pc.appendChild(a.xi);
}
b.tm = function (a) {
  this.setValue(a.textContent);
};
b.vy = function (a) {
  a.textContent = this.getValue();
  return a;
};
b.J = function () {
  g.H.Cm(this);
  g.la.Cm(this);
  g.K.Ay(Kb(this));
  this.Zw && g.Na(this.Zw);
  g.g.o.removeNode(this.Zd);
  this.eg = !0;
};
b.Ci = function () {
  var a = this.Zd;
  this.un &&
    a &&
    (this.I.ge()
      ? (g.g.o.Ga(a, "blocklyEditableText"),
        g.g.o.hc(a, "blocklyNonEditableText"),
        (a.style.cursor = this.qq))
      : (g.g.o.Ga(a, "blocklyNonEditableText"),
        g.g.o.hc(a, "blocklyEditableText"),
        (a.style.cursor = "")));
};
function bb(a) {
  return !!a.I && a.I.ge() && !!a.ng && "function" === typeof a.ng;
}
b.isVisible = function () {
  return this.Mj;
};
b.Ob = function (a) {
  if (this.Mj != a) {
    this.Mj = a;
    var c = this.Pa();
    c && (c.style.display = a ? "block" : "none");
  }
};
function Nb(a, c) {
  a.tl = c;
}
b.dC = function () {
  return this.tl;
};
b.Pa = function () {
  return this.Zd;
};
b.kc = function () {};
b.fl = function () {
  this.xi && (this.xi.nodeValue = this.vm());
  this.Tp();
};
b.Tp = function (a) {
  var c = this.U();
  a = void 0 != a ? a : this.Db ? this.U().Ah : 0;
  var d = 2 * a,
    e = c.Vj,
    f = 0;
  this.Pc && ((f = g.g.o.ew(this.Pc, c.Bh, c.Hi, c.Gi)), (d += f));
  this.Db && (e = Math.max(e, c.Qt));
  this.Nc.height = e;
  this.Nc.width = d;
  Ob(this, a, f);
  Pb(this);
};
function Ob(a, c, d) {
  if (a.Pc) {
    var e = a.U(),
      f = a.Nc.height / 2;
    a.Pc.setAttribute("x", a.I.M ? a.Nc.width - d - c : c);
    a.Pc.setAttribute("y", e.Tt ? f : f - e.Vj / 2 + e.St);
  }
}
function Pb(a) {
  a.Db &&
    (a.Db.setAttribute("width", a.Nc.width),
    a.Db.setAttribute("height", a.Nc.height),
    a.Db.setAttribute("rx", a.U().xq),
    a.Db.setAttribute("ry", a.U().xq));
}
b.ai = function () {
  if (!this.isVisible()) return new g.g.re(0, 0);
  this.dh
    ? (this.fl(), (this.dh = !1))
    : this.Mj &&
      0 == this.Nc.width &&
      (console.warn(
        "Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."
      ),
      this.fl());
  return this.Nc;
};
function Za(a) {
  if (a.Db)
    (c = a.Db.getBoundingClientRect()),
      (a = g.g.style.aj(a.Db)),
      (e = c.width),
      (c = c.height);
  else {
    var c = E(a.I),
      d = a.I.u.scale;
    a = g.g.style.aj(Kb(a));
    var e = c.width * d;
    c = c.height * d;
    g.g.userAgent.nz
      ? ((a.x += 1.5 * d), (a.y += 1.5 * d))
      : g.g.userAgent.Uj ||
        g.g.userAgent.kf ||
        ((a.x -= 0.5 * d), (a.y -= 0.5 * d));
    e += 1 * d;
    c += 1 * d;
  }
  return new g.g.Rect(a.y, a.y + c, a.x, a.x + e);
}
b.vm = function () {
  var a = this.Dd();
  if (!a) return g.jd.Hq;
  a.length > this.ss && (a = a.substring(0, this.ss - 2) + "\u2026");
  a = a.replace(/\s/g, g.jd.Hq);
  this.I && this.I.M && (a += "\u200f");
  return a;
};
b.Dd = function () {
  if (this.Vr) {
    var a = this.Vr.call(this);
    if (null !== a) return String(a);
  }
  return String(this.getValue());
};
b.Uo = function () {
  this.dh = !0;
  this.B = null;
};
function Qb(a) {
  a.dh = !0;
  a.I && a.I.ra && (a.I.Ia(), a.I.cc(), a.Cy());
}
b.setValue = function (a) {
  if (null !== a) {
    var c = this.Yh(a);
    a = Rb(this, a, c);
    if (!(a instanceof Error)) {
      if ((c = this.dC()))
        if (((c = c.call(this, a)), (a = Rb(this, a, c)), a instanceof Error))
          return;
      c = this.I;
      if (!c || !c.eg) {
        var d = this.getValue();
        d === a
          ? this.fg(a)
          : (c &&
              g.i.isEnabled() &&
              g.i.Ha(new g.i.uh(c, "field", this.name || null, d, a)),
            this.fg(a),
            this.dh && Qb(this));
      }
    }
  }
};
function Rb(a, c, d) {
  if (null === d) return a.xB(), a.dh && Qb(a), Error();
  void 0 !== d && (c = d);
  return c;
}
b.getValue = function () {
  return this.sb;
};
b.Yh = function (a) {
  return null === a || void 0 === a ? null : a;
};
b.fg = function (a) {
  this.sb = a;
  this.dh = !0;
};
b.xB = function () {};
b.wj = function (a) {
  if (this.I && this.I.u && (a = this.I.u.$h(a))) {
    if (a.Ck)
      throw Error(
        "Tried to call gesture.setStartField, but the gesture had already been started."
      );
    a.dn || (a.dn = this);
  }
};
b.fb = function (a) {
  a || "" === a || (a = this.I);
  var c = Kb(this);
  c ? (c.Nf = a) : (this.XD = a);
};
function Kb(a) {
  return a.qr || a.Pa();
}
b.np = function () {
  return !1;
};
b.Wg = function () {
  for (var a = null, c = this.I, d = c.S, e = 0; e < c.S.length; e++)
    for (var f = d[e], h = f.hb, k = 0; k < h.length; k++)
      if (h[k] === this) {
        a = f;
        break;
      }
  return a;
};
b.RB = function () {
  return !1;
};
b.BC = function () {
  return !1;
};
b.Yb = function () {
  return !1;
};
b.ri = function (a) {
  a ? (this.Zd.appendChild(a), (this.Vh = a)) : (this.Vh = null);
};
b.ui = function (a) {
  a ? (this.Zd.appendChild(a), (this.li = a)) : (this.li = null);
};
b.Cy = function () {
  var a = this.I.u;
  a.Fb && this.Vh && a.Nb().draw();
  a.Fb && this.li && a.ae(g.navigation.Dn).draw();
};
g.Ue = {};
g.Ue.register = function (a, c) {
  g.C.register(g.C.ea.Fc, a, c);
};
g.Ue.unregister = function (a) {
  g.C.unregister(g.C.ea.Fc, a);
};
g.Ue.ma = function (a) {
  var c = g.C.iw(g.C.ea.Fc, a.type);
  return c
    ? c.ma(a)
    : (console.warn(
        "Blockly could not create a field of type " +
          a.type +
          ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."
      ),
      null);
};
g.g.$ = {};
g.g.$.nE = "aria-";
g.g.$.PG = "role";
g.g.$.Zf = {
  CF: "grid",
  DF: "gridcell",
  EF: "group",
  ZF: "listbox",
  nG: "menu",
  oG: "menuitem",
  ZM: "menuitemcheckbox",
  yG: "option",
  GG: "presentation",
  Lq: "row",
  kH: "tree",
  lH: "treeitem",
};
g.g.$.State = {
  Zp: "activedescendant",
  zE: "colcount",
  UE: "disabled",
  dz: "expanded",
  Eq: "invalid",
  Bz: "label",
  WF: "labelledby",
  XF: "level",
  PN: "orientation",
  VN: "posinset",
  QG: "rowcount",
  fk: "selected",
  cO: "setsize",
  nH: "valuemax",
  oH: "valuemin",
};
g.g.$.le = function (a, c) {
  a.setAttribute(g.g.$.PG, c);
};
g.g.$.Zb = function (a, c, d) {
  Array.isArray(d) && (d = d.join(" "));
  a.setAttribute(g.g.$.nE + c, d);
};
g.g.P = {
  pO: 0,
  UM: 3,
  qE: 8,
  ZG: 9,
  eN: 12,
  Dl: 13,
  Hh: 16,
  Di: 17,
  zl: 18,
  RN: 19,
  cM: 20,
  Ot: 27,
  bA: 32,
  DG: 33,
  CG: 34,
  cF: 35,
  HF: 36,
  $j: 37,
  Fu: 38,
  dk: 39,
  Nt: 40,
  UN: 43,
  WN: 44,
  vz: 45,
  Tj: 46,
  ZERO: 48,
  ONE: 49,
  kO: 50,
  iO: 51,
  KM: 52,
  JM: 53,
  fO: 54,
  dO: 55,
  pM: 56,
  cN: 57,
  HM: 59,
  FM: 61,
  EM: 173,
  GM: 163,
  XN: 63,
  YL: 64,
  Gy: 65,
  $L: 66,
  Et: 67,
  Wy: 68,
  E: 69,
  rM: 70,
  qc: 71,
  LM: 72,
  LF: 73,
  PM: 74,
  VF: 75,
  QM: 76,
  TM: 77,
  bN: 78,
  uN: 79,
  QN: 80,
  Q: 81,
  YN: 82,
  Zz: 83,
  YG: 84,
  lO: 85,
  Gu: 86,
  uA: 87,
  Vq: 88,
  tH: 89,
  $l: 90,
  Ml: 91,
  qO: 92,
  hM: 93,
  tN: 96,
  mN: 97,
  sN: 98,
  rN: 99,
  iN: 100,
  hN: 101,
  qN: 102,
  pN: 103,
  gN: 104,
  lN: 105,
  kN: 106,
  oN: 107,
  jN: 109,
  nN: 110,
  fN: 111,
  sM: 112,
  wM: 113,
  xM: 114,
  yM: 115,
  zM: 116,
  AM: 117,
  BM: 118,
  CM: 119,
  DM: 120,
  tM: 121,
  uM: 122,
  vM: 123,
  dN: 144,
  aO: 145,
  IM: 166,
  RM: 183,
  bO: 186,
  jM: 189,
  qM: 187,
  gM: 188,
  SN: 190,
  gO: 191,
  XL: 192,
  jO: 192,
  eO: 222,
  vN: 219,
  aM: 220,
  fM: 221,
  oO: 224,
  VM: 224,
  WM: 91,
  XM: 93,
  nO: 229,
  mO: 252,
  TN: 255,
};
g.pc = function (a, c, d) {
  g.pc.v.constructor.call(this, a, c, d);
  this.mi = this.Is = this.Hs = this.$e = this.Cs = this.gj = this.kh = null;
};
g.g.object.V(g.pc, g.jd);
g.pc.ma = function (a) {
  return new g.pc(a.colour, void 0, a);
};
b = g.pc.prototype;
b.gk = !0;
b.qq = "default";
b.dh = !1;
b.ev = null;
b.SD = null;
b.Yn = 0;
b.Bd = function (a) {
  g.pc.v.Bd.call(this, a);
  a.colourOptions && ((this.ev = a.colourOptions), (this.SD = a.colourTitles));
  a.columns && (this.Yn = a.columns);
};
b.di = function () {
  this.Nc = new g.g.re(this.U().oF, this.U().nF);
  this.U().gz
    ? (this.qr = this.I.Pa())
    : (Lb(this), (this.Db.style.fillOpacity = "1"));
};
b.kc = function () {
  this.U().gz
    ? (this.I.Gb.Pb.setAttribute("fill", this.getValue()),
      this.I.Gb.Pb.setAttribute("stroke", "#fff"))
    : this.Db && (this.Db.style.fill = this.getValue());
};
b.Yh = function (a) {
  return "string" != typeof a ? null : g.g.vb.parse(a);
};
b.fg = function (a) {
  this.sb = a;
  this.Db
    ? (this.Db.style.fill = a)
    : this.I &&
      this.I.ra &&
      (this.I.Gb.Pb.setAttribute("fill", a),
      this.I.Gb.Pb.setAttribute("stroke", "#fff"));
};
b.Dd = function () {
  var a = this.sb;
  /^#(.)\1(.)\2(.)\3$/.test(a) && (a = "#" + a[1] + a[3] + a[5]);
  return a;
};
g.pc.kq = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(
  " "
);
g.pc.prototype.Sj = g.pc.kq[0];
g.pc.gH = [];
g.pc.lq = 7;
b = g.pc.prototype;
b.setColumns = function (a) {
  this.Yn = a;
  return this;
};
b.ng = function () {
  this.kh = this.Pv();
  g.H.MB().appendChild(this.kh);
  g.H.GD(this, this.Qv.bind(this));
  this.kh.focus({ preventScroll: !0 });
};
b.nx = function (a) {
  a = (a = a.target) && a.label;
  null !== a && (this.setValue(a), g.H.Cm(this));
};
b.qx = function (a) {
  var c = !1;
  if (a.keyCode === g.g.P.Fu) Sb(this, 0, -1), (c = !0);
  else if (a.keyCode === g.g.P.Nt) Sb(this, 0, 1), (c = !0);
  else if (a.keyCode === g.g.P.$j) Sb(this, -1, 0), (c = !0);
  else if (a.keyCode === g.g.P.dk) Sb(this, 1, 0), (c = !0);
  else if (a.keyCode === g.g.P.Dl) {
    if ((c = Tb(this))) (c = c && c.label), null !== c && this.setValue(c);
    g.H.fj();
    c = !0;
  }
  c && a.stopPropagation();
};
b.Yb = function (a) {
  if (this.kh)
    switch (a.name) {
      case g.navigation.qb.zd:
        return Sb(this, 0, -1), !0;
      case g.navigation.qb.yd:
        return Sb(this, 0, 1), !0;
      case g.navigation.qb.Kq:
        return Sb(this, -1, 0), !0;
      case g.navigation.qb.Aq:
        return Sb(this, 1, 0), !0;
      default:
        return !1;
    }
  return g.pc.v.Yb.call(this, a);
};
function Sb(a, c, d) {
  var e = a.ev || g.pc.kq,
    f = a.Yn || g.pc.lq,
    h = a.gj % f,
    k = Math.floor(a.gj / f);
  h += c;
  k += d;
  0 > c
    ? 0 > h && 0 < k
      ? ((h = f - 1), k--)
      : 0 > h && (h = 0)
    : 0 < c
    ? h > f - 1 && k < Math.floor(e.length / f) - 1
      ? ((h = 0), k++)
      : h > f - 1 && h--
    : 0 > d
    ? 0 > k && (k = 0)
    : 0 < d &&
      k > Math.floor(e.length / f) - 1 &&
      (k = Math.floor(e.length / f) - 1);
  Ub(a, a.kh.childNodes[k].childNodes[h], k * f + h);
}
b.Js = function (a) {
  var c = (a = a.target) && Number(a.getAttribute("data-index"));
  null !== c && c !== this.gj && Ub(this, a, c);
};
b.gK = function () {
  this.kh.focus({ preventScroll: !0 });
};
b.hK = function () {
  this.kh.blur();
  var a = Tb(this);
  a && g.g.o.hc(a, "blocklyColourHighlighted");
};
function Tb(a) {
  var c = a.Yn || g.pc.lq,
    d = a.kh.childNodes[Math.floor(a.gj / c)];
  return d ? d.childNodes[a.gj % c] : null;
}
function Ub(a, c, d) {
  var e = Tb(a);
  e && g.g.o.hc(e, "blocklyColourHighlighted");
  g.g.o.Ga(c, "blocklyColourHighlighted");
  a.gj = d;
  g.g.$.Zb(a.kh, g.g.$.State.Zp, c.getAttribute("id"));
}
b.Pv = function () {
  var a = this.Yn || g.pc.lq,
    c = this.ev || g.pc.kq,
    d = this.SD || g.pc.gH,
    e = this.getValue(),
    f = document.createElement("table");
  f.className = "blocklyColourTable";
  f.tabIndex = 0;
  f.dir = "ltr";
  g.g.$.le(f, g.g.$.Zf.CF);
  g.g.$.Zb(f, g.g.$.State.dz, !0);
  g.g.$.Zb(f, g.g.$.State.QG, Math.floor(c.length / a));
  g.g.$.Zb(f, g.g.$.State.zE, a);
  for (var h, k = 0; k < c.length; k++) {
    0 == k % a &&
      ((h = document.createElement("tr")),
      g.g.$.le(h, g.g.$.Zf.Lq),
      f.appendChild(h));
    var l = document.createElement("td");
    h.appendChild(l);
    l.label = c[k];
    l.title = d[k] || c[k];
    l.id = g.g.Zj.Tr();
    l.setAttribute("data-index", k);
    g.g.$.le(l, g.g.$.Zf.DF);
    g.g.$.Zb(l, g.g.$.State.Bz, c[k]);
    g.g.$.Zb(l, g.g.$.State.fk, c[k] == e);
    l.style.backgroundColor = c[k];
    c[k] == e && ((l.className = "blocklyColourSelected"), (this.gj = k));
  }
  this.Cs = g.ta(f, "click", this, this.nx, !0);
  this.$e = g.ta(f, "mousemove", this, this.Js, !0);
  this.Hs = g.ta(f, "mouseenter", this, this.gK, !0);
  this.Is = g.ta(f, "mouseleave", this, this.hK, !0);
  this.mi = g.ta(f, "keydown", this, this.qx);
  return f;
};
b.Qv = function () {
  this.Cs && (g.Na(this.Cs), (this.Cs = null));
  this.$e && (g.Na(this.$e), (this.$e = null));
  this.Hs && (g.Na(this.Hs), (this.Hs = null));
  this.Is && (g.Na(this.Is), (this.Is = null));
  this.mi && (g.Na(this.mi), (this.mi = null));
  this.gj = this.kh = null;
};
g.Qc.register([
  ".blocklyColourTable {",
  "border-collapse: collapse;",
  "display: block;",
  "outline: none;",
  "padding: 1px;",
  "}",
  ".blocklyColourTable>tr>td {",
  "border: .5px solid #888;",
  "box-sizing: border-box;",
  "cursor: pointer;",
  "display: inline-block;",
  "height: 20px;",
  "padding: 0;",
  "width: 20px;",
  "}",
  ".blocklyColourTable>tr>td.blocklyColourHighlighted {",
  "border-color: #eee;",
  "box-shadow: 2px 2px 7px 2px rgba(0,0,0,.3);",
  "position: relative;",
  "}",
  ".blocklyColourSelected, .blocklyColourSelected:hover {",
  "border-color: #eee !important;",
  "outline: 1px solid #333;",
  "position: relative;",
  "}",
]);
g.Ue.register("field_colour", g.pc);
g.Xj = function (a, c, d, e) {
  this.s = a;
  this.jt = c;
  this.me = d.text;
  this.al = new g.g.Z(0, 0);
  this.ii = e;
  this.jr = d.callbackKey || d.callbackkey;
  this.kB = d["web-class"] || null;
  this.sd = null;
  this.info = d;
};
g.Xj.iG = 5;
g.Xj.jG = 2;
b = g.Xj.prototype;
b.width = 0;
b.height = 0;
b.ab = function () {
  var a = this.ii ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
  this.kB && (a += " " + this.kB);
  this.N = g.g.o.L(g.g.F.qc, { class: a }, this.s.Hb);
  if (!this.ii)
    var c = g.g.o.L(
      g.g.F.Hc,
      { class: "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 },
      this.N
    );
  a = g.g.o.L(
    g.g.F.Hc,
    {
      class: this.ii
        ? "blocklyFlyoutLabelBackground"
        : "blocklyFlyoutButtonBackground",
      rx: 4,
      ry: 4,
    },
    this.N
  );
  var d = g.g.o.L(
      g.g.F.Rq,
      {
        class: this.ii ? "blocklyFlyoutLabelText" : "blocklyText",
        x: 0,
        y: 0,
        "text-anchor": "middle",
      },
      this.N
    ),
    e = g.g.Mc(this.me);
  this.s.M && (e += "\u200f");
  d.textContent = e;
  this.ii &&
    ((this.ty = d),
    this.s.Dc.subscribe(this.ty, "flyoutForegroundColour", "fill"));
  var f = g.g.style.getComputedStyle(d, "fontSize"),
    h = g.g.style.getComputedStyle(d, "fontWeight"),
    k = g.g.style.getComputedStyle(d, "fontFamily");
  this.width = g.g.o.QB(d, f, h, k);
  e = g.g.o.NC(e, f, h, k);
  this.height = e.height;
  this.ii ||
    ((this.width += 2 * g.Xj.iG),
    (this.height += 2 * g.Xj.jG),
    c.setAttribute("width", this.width),
    c.setAttribute("height", this.height));
  a.setAttribute("width", this.width);
  a.setAttribute("height", this.height);
  d.setAttribute("x", this.width / 2);
  d.setAttribute("y", this.height / 2 - e.height / 2 + e.tf);
  Vb(this);
  this.sd = g.ta(this.N, "mouseup", this, this.mK);
  return this.N;
};
b.show = function () {
  Vb(this);
  this.N.setAttribute("display", "block");
};
function Vb(a) {
  a.N.setAttribute("transform", "translate(" + a.al.x + "," + a.al.y + ")");
}
b.moveTo = function (a, c) {
  this.al.x = a;
  this.al.y = c;
  Vb(this);
};
b.J = function () {
  this.sd && g.Na(this.sd);
  this.N && g.g.o.removeNode(this.N);
  this.ty && this.s.Dc.unsubscribe(this.ty);
};
b.mK = function (a) {
  (a = this.jt.$h(a)) && a.cancel();
  this.ii && this.jr
    ? console.warn("Labels should not have callbacks. Label text: " + this.me)
    : this.ii || (this.jr && Wb(this.jt, this.jr))
    ? this.ii || Wb(this.jt, this.jr)(this)
    : console.warn("Buttons should have callbacks. Button text: " + this.me);
};
g.Qc.register(
  ".blocklyFlyoutButton {,fill: #888;,cursor: default;,},.blocklyFlyoutButtonShadow {,fill: #666;,},.blocklyFlyoutButton:hover {,fill: #aaa;,},.blocklyFlyoutLabel {,cursor: default;,},.blocklyFlyoutLabelBackground {,opacity: 0;,}".split(
    ","
  )
);
g.Du = function (a, c, d) {
  this.tw = a.toolboxitemid || g.g.Zj.Tr();
  this.Jw = (this.oi = d || null) ? this.oi.Jw + 1 : 0;
  this.kt = a;
  this.ni = c;
  this.s = this.ni.s;
};
b = g.Du.prototype;
b.aa = function () {};
b.Do = function () {
  return null;
};
b.Qa = function () {
  return this.tw;
};
b.getParent = function () {
  return null;
};
b.eh = function () {
  return !1;
};
b.Jk = function () {
  return !1;
};
b.J = function () {};
g.Le = function (a, c, d) {
  g.Le.v.constructor.call(this, a, c, d);
  this.uj = g.g.Mc(a.name);
  this.nd = Xb(this, a);
  this.Ew = this.Jo = this.tp = this.bf = this.Vc = null;
  this.pd = this.Pw();
  g.g.object.Id(this.pd, a.cssconfig || a.cssConfig);
  this.sJ = this.Aw = !1;
  this.$i = [];
  this.kD(a);
};
g.g.object.V(g.Le, g.Du);
g.Le.Bj = "category";
g.Le.WJ = 19;
g.Le.borderWidth = 8;
g.Le.bI = "#57e";
b = g.Le.prototype;
b.Pw = function () {
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
b.kD = function (a) {
  var c = a.contents;
  if (a.custom) this.$i = a.custom;
  else if (c) {
    a = 0;
    for (var d; (d = c[a]); a++) this.$i.push(d);
  }
};
b.aa = function () {
  this.Re();
  "true" == this.kt.hidden && this.Oa();
};
b.Re = function () {
  this.Vc = this.kv();
  g.g.$.le(this.Vc, g.g.$.Zf.lH);
  g.g.$.Zb(this.Vc, g.g.$.State.fk, !1);
  g.g.$.Zb(this.Vc, g.g.$.State.XF, this.Jw);
  var a = document.createElement("div");
  g.g.o.Ga(a, this.pd.row);
  var c = g.Le.WJ * this.Jw;
  c = c.toString() + "px";
  this.s.M ? (a.style.paddingRight = c) : (a.style.paddingLeft = c);
  this.bf = a;
  this.bf.style.pointerEvents = "auto";
  this.Vc.appendChild(this.bf);
  a = document.createElement("div");
  g.g.o.Ga(a, this.pd.rowcontentcontainer);
  this.tp = a;
  this.tp.style.pointerEvents = "none";
  this.bf.appendChild(this.tp);
  this.Jo = this.hB();
  g.g.$.le(this.Jo, g.g.$.Zf.GG);
  this.tp.appendChild(this.Jo);
  a = this.uj;
  c = document.createElement("span");
  c.setAttribute("id", this.Qa() + ".label");
  c.textContent = a;
  g.g.o.Ga(c, this.pd.label);
  this.Ew = c;
  this.tp.appendChild(this.Ew);
  g.g.$.Zb(this.Vc, g.g.$.State.WF, this.Ew.getAttribute("id"));
  Yb(this, this.nd);
  return this.Vc;
};
b.kv = function () {
  var a = document.createElement("div");
  g.g.o.Ga(a, this.pd.container);
  return a;
};
b.hB = function () {
  var a = document.createElement("span");
  this.ni.Dk || g.g.o.Ga(a, this.pd.icon);
  a.style.display = "inline-block";
  return a;
};
b.Um = function () {
  this.nd = Xb(this, this.kt);
  Yb(this, this.nd);
};
function Yb(a, c) {
  c &&
    ((c = g.Le.borderWidth + "px solid " + (c || "#ddd")),
    a.s.M ? (a.bf.style.borderRight = c) : (a.bf.style.borderLeft = c));
}
function Xb(a, c) {
  var d = c.categorystyle || c.categoryStyle;
  if ((c = c.colour) && d)
    console.warn(
      'Toolbox category "' + a.uj + '" must not have both a style and a colour'
    );
  else {
    if (d)
      a: {
        c = a.s.Xg();
        if (d && c) {
          if ((c = c.mr[d]) && c.vb) {
            a = Zb(a, c.vb);
            break a;
          }
          console.warn(
            'Style "' + d + '" must exist and contain a colour value'
          );
        }
        a = "";
      }
    else a = Zb(a, c);
    return a;
  }
  return "";
}
b.KB = function () {
  return this.bf;
};
function Zb(a, c) {
  c = g.g.Mc(c);
  if (null == c || "" === c) return "";
  var d = Number(c);
  if (isNaN(d)) {
    if ((d = g.g.vb.parse(c))) return d;
    console.warn(
      'Toolbox category "' + a.uj + '" has unrecognized colour attribute: ' + c
    );
    return "";
  }
  return g.lJ(d);
}
b.ct = function (a) {
  this.Vc.style.display = a ? "block" : "none";
  this.Aw = !a;
  this.ni.xb == this && xb(this.ni, null);
};
b.Oa = function () {
  this.ct(!1);
};
b.show = function () {
  this.ct(!0);
};
b.isVisible = function () {
  var a;
  if ((a = !this.Aw))
    a: {
      for (a = this; a.getParent(); )
        if (((a = a.getParent()), !a.xk)) {
          a = !1;
          break a;
        }
      a = !0;
    }
  return a;
};
b.eh = function () {
  return this.isVisible() && !this.sJ;
};
b.fD = function () {};
function $b(a, c) {
  if (c) {
    var d = Zb(a, g.Le.bI);
    a.bf.style.backgroundColor = a.nd || d;
    g.g.o.Ga(a.bf, a.pd.selected);
  } else (a.bf.style.backgroundColor = ""), g.g.o.hc(a.bf, a.pd.selected);
  g.g.$.Zb(a.Vc, g.g.$.State.fk, c);
}
b.ve = function () {
  return this.uj;
};
b.getParent = function () {
  return this.oi;
};
b.Do = function () {
  return this.Vc;
};
b.J = function () {
  g.g.o.removeNode(this.Vc);
};
g.Qc.register([
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
g.C.register(g.C.ea.Xl, g.Le.Bj, g.Le);
g.Dg = function (a, c) {
  g.Dg.v.constructor.call(this, a, c);
  this.pd = { container: "blocklyTreeSeparator" };
  g.g.object.Id(this.pd, a.cssconfig || a.cssConfig);
};
g.g.object.V(g.Dg, g.Du);
g.Dg.Bj = "sep";
g.Dg.prototype.aa = function () {
  this.Re();
};
g.Dg.prototype.Re = function () {
  var a = document.createElement("div");
  g.g.o.Ga(a, this.pd.container);
  return (this.Vc = a);
};
g.Dg.prototype.Do = function () {
  return this.Vc;
};
g.Dg.prototype.J = function () {
  g.g.o.removeNode(this.Vc);
};
g.Qc.register(
  '.blocklyTreeSeparator {,border-bottom: solid #e5e5e5 1px;,height: 0;,margin: 5px 0;,},.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {,border-right: solid #e5e5e5 1px;,border-bottom: none;,height: auto;,margin: 0 5px 0 5px;,padding: 5px 0;,width: 0;,}'.split(
    ","
  )
);
g.C.register(g.C.ea.Xl, g.Dg.Bj, g.Dg);
g.Rf = function (a, c, d) {
  this.Gp = null;
  this.xk = !1;
  this.mt = [];
  g.Rf.v.constructor.call(this, a, c, d);
};
g.g.object.V(g.Rf, g.Le);
g.Rf.Bj = "collapsibleCategory";
b = g.Rf.prototype;
b.Pw = function () {
  var a = g.Rf.v.Pw.call(this);
  a.contents = "blocklyToolboxContents";
  return a;
};
b.kD = function (a) {
  var c = a.contents,
    d = !0;
  if (a.custom) this.$i = a.custom;
  else if (c) {
    a = 0;
    for (var e; (e = c[a]); a++)
      !g.C.hJ(e.kind) || (e.kind.toLowerCase() == g.Dg.Bj && d)
        ? (this.$i.push(e), (d = !0))
        : (this.nv(e), (d = !1));
  }
};
b.nv = function (a) {
  var c = a.kind;
  "CATEGORY" == c.toUpperCase() && g.g.za.wC(a) && (c = g.Rf.Bj);
  a = new (g.C.Ao(g.C.ea.Xl, c))(a, this.ni, this);
  this.mt.push(a);
};
b.aa = function () {
  g.Rf.v.aa.call(this);
  ac(this, "true" == this.kt.expanded || this.kt.expanded);
};
b.Re = function () {
  g.Rf.v.Re.call(this);
  var a = this.mt,
    c = document.createElement("div");
  g.g.o.Ga(c, this.pd.contents);
  for (var d = 0; d < a.length; d++) {
    var e = a[d];
    e.aa();
    c.appendChild(e.Do());
    e.KB && e.bf.setAttribute("id", e.Qa());
  }
  this.Gp = c;
  g.g.$.le(this.Gp, g.g.$.Zf.EF);
  this.Vc.appendChild(this.Gp);
  return this.Vc;
};
b.hB = function () {
  var a = document.createElement("span");
  this.ni.Dk || (g.g.o.Ga(a, this.pd.icon), (a.style.visibility = "visible"));
  a.style.display = "inline-block";
  return a;
};
function ac(a, c) {
  if (a.xk != c) {
    if ((a.xk = c)) {
      a.Gp.style.display = "block";
      var d = a.Jo;
      d && (g.g.o.yD(d, a.pd.closedicon), g.g.o.Ga(d, a.pd.openicon));
    } else if (((a.Gp.style.display = "none"), (d = a.Jo)))
      g.g.o.yD(d, a.pd.openicon), g.g.o.Ga(d, a.pd.closedicon);
    g.g.$.Zb(a.Vc, g.g.$.State.dz, c);
    a = a.ni;
    c = a.s;
    d = a.He.getBoundingClientRect();
    c.translate(
      a.La == g.Ke ? c.scrollX + d.width : c.scrollX,
      a.La == g.ik ? c.scrollY + d.height : c.scrollY
    );
    g.gn(c);
  }
}
b.ct = function (a) {
  this.Vc.style.display = a ? "block" : "none";
  for (var c = 0, d; (d = this.mt[c]); c++) d.ct(a);
  this.Aw = !a;
  this.ni.xb == this && xb(this.ni, null);
};
b.Jk = function () {
  return !0;
};
b.fD = function () {
  ac(this, !this.xk);
};
b.Do = function () {
  return this.Vc;
};
g.C.register(g.C.ea.Xl, g.Rf.Bj, g.Rf);
g.i.Kh = function (a, c, d) {
  g.i.Kh.v.constructor.call(this, d);
  this.ZC = a;
  this.UC = c;
};
g.g.object.V(g.i.Kh, g.i.Me);
g.i.Kh.prototype.type = g.i.iA;
g.i.Kh.prototype.ya = function () {
  var a = g.i.Kh.v.ya.call(this);
  a.oldItem = this.ZC;
  a.newItem = this.UC;
  return a;
};
g.i.Kh.prototype.ma = function (a) {
  g.i.Kh.v.ma.call(this, a);
  this.ZC = a.oldItem;
  this.UC = a.newItem;
};
g.C.register(g.C.ea.jc, g.i.iA, g.i.Kh);
g.Cu = function (a) {
  this.s = a;
  this.VD = a.options.fh || { contents: [] };
  this.Dk = a.options.Fd;
  this.Wi = this.He = null;
  this.Lb = [];
  this.Uc = this.zb = 0;
  this.M = a.options.M;
  this.pa = null;
  this.gv = {};
  this.La = a.options.La;
  this.xb = null;
  this.Wn = [];
};
b = g.Cu.prototype;
b.aa = function () {
  var a = this.s,
    c = r(a),
    d = this.s,
    e = new g.Pd({
      parentWorkspace: d,
      rtl: d.M,
      oneBasedIndex: d.options.Hf,
      horizontalLayout: d.Fd,
      renderer: d.options.qp,
      rendererOverrides: d.options.rp,
    });
  e.La = d.options.La;
  d = d.Fd ? g.C.Qr(g.C.ea.uF, d.options) : g.C.Qr(g.C.ea.kz, d.options);
  if (!d)
    throw Error(
      "Blockly.VerticalFlyout, Blockly.HorizontalFlyout or your own custom flyout must be required."
    );
  this.pa = new d(e);
  this.He = this.Re(this.s);
  g.g.o.Hk(this.pa.ab("svg"), c);
  this.pa.aa(a);
  this.Ia(this.VD);
  a = a.Dc;
  a.subscribe(this.He, "toolboxBackgroundColour", "background-color");
  a.subscribe(this.He, "toolboxForegroundColour", "color");
};
b.Re = function (a) {
  var c = r(a);
  a = this.kv();
  var d = document.createElement("div");
  g.g.o.Ga(d, "blocklyToolboxContents");
  this.Dk && (d.style.flexDirection = "row");
  this.Wi = d;
  this.Wi.tabIndex = 0;
  g.g.$.le(this.Wi, g.g.$.Zf.kH);
  a.appendChild(this.Wi);
  c.parentNode.insertBefore(a, c);
  c = this.Wi;
  d = g.ta(a, "click", this, this.nx, !1, !0);
  this.Wn.push(d);
  c = g.ta(c, "keydown", this, this.qx, !1, !0);
  this.Wn.push(c);
  return a;
};
b.kv = function () {
  var a = document.createElement("div");
  a.setAttribute("layout", this.Dk ? "h" : "v");
  g.g.o.Ga(a, "blocklyToolboxDiv");
  g.g.o.Ga(a, "blocklyNonSelectable");
  a.setAttribute("dir", this.M ? "RTL" : "LTR");
  return a;
};
b.nx = function (a) {
  if (g.g.Ok(a) || a.target == this.He) g.Kc(!1);
  else {
    if ((a = a.target.getAttribute("id")))
      (a = this.gv[a]), a.eh() && (xb(this, a), a.fD());
    g.Kc(!0);
  }
  g.Touch.mk();
};
b.qx = function (a) {
  var c = !1;
  switch (a.keyCode) {
    case g.g.P.Nt:
      c = bc(this);
      break;
    case g.g.P.Fu:
      c = cc(this);
      break;
    case g.g.P.$j:
      c = dc(this);
      break;
    case g.g.P.dk:
      c = ec(this);
      break;
    case g.g.P.Dl:
    case g.g.P.bA:
      this.xb && this.xb.Jk() && ((c = this.xb), ac(c, !c.xk), (c = !0));
      break;
    default:
      c = !1;
  }
  !c && this.xb && this.xb.ap && (c = this.xb.ap(a));
  c && a.preventDefault();
};
b.Ia = function (a) {
  this.VD = a;
  for (var c = 0; c < this.Lb.length; c++) {
    var d = this.Lb[c];
    d && d.J();
  }
  this.Lb = [];
  this.gv = {};
  a = a.contents;
  c = document.createDocumentFragment();
  d = 0;
  for (var e; (e = a[d]); d++) this.nv(e, c);
  this.Wi.appendChild(c);
  this.position();
};
b.nv = function (a, c) {
  var d = a.kind;
  "CATEGORY" == d.toUpperCase() && g.g.za.wC(a) && (d = g.Rf.Bj);
  if ((d = g.C.Ao(g.C.ea.Xl, d.toLowerCase())))
    (a = new d(a, this)),
      fc(this, a),
      a.aa(),
      (d = a.Do()) && c.appendChild(d),
      a.KB && a.bf.setAttribute("id", a.Qa());
};
function fc(a, c) {
  a.Lb.push(c);
  a.gv[c.Qa()] = c;
  if (c.Jk()) for (var d = 0, e; (e = c.mt[d]); d++) fc(a, e);
}
b.Xq = function (a) {
  g.g.o.Ga(this.He, a);
};
b.Us = function (a) {
  g.g.o.hc(this.He, a);
};
b.um = function () {
  if (!this.He) return null;
  var a = this.He.getBoundingClientRect(),
    c = a.top,
    d = c + a.height,
    e = a.left;
  a = e + a.width;
  return this.La == g.g.za.Qd.Tq
    ? new g.g.Rect(-1e7, d, -1e7, 1e7)
    : this.La == g.g.za.Qd.Bt
    ? new g.g.Rect(c, 1e7, -1e7, 1e7)
    : this.La == g.g.za.Qd.$j
    ? new g.g.Rect(-1e7, 1e7, -1e7, a)
    : new g.g.Rect(-1e7, 1e7, e, 1e7);
};
b.Yg = function () {
  return this.zb;
};
b.mc = function () {
  return this.pa;
};
b.position = function () {
  var a = this.He;
  a &&
    (this.Dk
      ? ((a.style.left = "0"),
        (a.style.height = "auto"),
        (a.style.width = "100%"),
        (this.Uc = a.offsetHeight),
        this.La == g.ik ? (a.style.top = "0") : (a.style.bottom = "0"))
      : (this.La == g.Wl ? (a.style.right = "0") : (a.style.left = "0"),
        (a.style.height = "100%"),
        (this.zb = a.offsetWidth)),
    this.pa.position());
};
b.Um = function () {
  for (var a = 0; a < this.Lb.length; a++) {
    var c = this.Lb[a];
    c.Um && c.Um();
  }
};
b.Ob = function (a) {
  this.He.style.display = a ? "block" : "none";
};
function xb(a, c) {
  var d = a.xb;
  if ((c || d) && (!c || c.eh())) {
    null == d ||
      (d.Jk() && d == c) ||
      null == d ||
      ((a.xb = null), $b(d, !1), g.g.$.Zb(a.Wi, g.g.$.State.Zp, ""));
    null != c &&
      c != d &&
      null != c &&
      ((a.xb = c), $b(c, !0), g.g.$.Zb(a.Wi, g.g.$.State.Zp, c.Qa()));
    (d != c || c.Jk()) && c && c.$i.length
      ? (a.pa.show(c.$i), a.pa.Yx())
      : a.pa.Oa();
    var e = d && d.ve(),
      f = c && c.ve();
    d == c && (f = null);
    a = new g.i.Kh(e, f, a.s.id);
    g.i.Ha(a);
  }
}
b.Yb = function (a) {
  if (!this.xb) return !1;
  switch (a.name) {
    case g.navigation.qb.zd:
      return cc(this);
    case g.navigation.qb.Kq:
      return dc(this);
    case g.navigation.qb.yd:
      return bc(this);
    case g.navigation.qb.Aq:
      return ec(this);
    default:
      return !1;
  }
};
function dc(a) {
  return a.xb
    ? a.xb.Jk() && a.xb.xk
      ? (ac(a.xb, !1), !0)
      : a.xb.getParent() && a.xb.getParent().eh()
      ? (xb(a, a.xb.getParent()), !0)
      : !1
    : !1;
}
function ec(a) {
  if (!a.xb || !a.xb.Jk()) return !1;
  var c = a.xb;
  c.xk ? bc(a) : ac(c, !0);
  return !0;
}
function bc(a) {
  if (!a.xb) return !1;
  var c = a.Lb.indexOf(a.xb) + 1;
  if (-1 < c && c < a.Lb.length) {
    for (var d = a.Lb[c]; d && !d.eh(); ) d = a.Lb[++c];
    if (d && d.eh()) return xb(a, d), !0;
  }
  return !1;
}
function cc(a) {
  if (!a.xb) return !1;
  var c = a.Lb.indexOf(a.xb) - 1;
  if (-1 < c && c < a.Lb.length) {
    for (var d = a.Lb[c]; d && !d.eh(); ) d = a.Lb[--c];
    if (d && d.eh()) return xb(a, d), !0;
  }
  return !1;
}
b.J = function () {
  this.pa.J();
  for (var a = 0; a < this.Lb.length; a++) this.Lb[a].J();
  for (a = 0; a < this.Wn.length; a++) g.Na(this.Wn[a]);
  this.Wn = [];
  this.Lb = [];
  this.s.Dc.unsubscribe(this.He);
  g.g.o.removeNode(this.He);
};
g.Qc.register([
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
g.C.register(g.C.ea.Sq, g.C.vq, g.Cu);
g.i.Lh = function (a, c) {
  g.i.Lh.v.constructor.call(this, c);
  this.Km = a;
};
g.g.object.V(g.i.Lh, g.i.Me);
g.i.Lh.prototype.type = g.i.kA;
g.i.Lh.prototype.ya = function () {
  var a = g.i.Lh.v.ya.call(this);
  a.isOpen = this.Km;
  return a;
};
g.i.Lh.prototype.ma = function (a) {
  g.i.Lh.v.ma.call(this, a);
  this.Km = a.isOpen;
};
g.C.register(g.C.ea.jc, g.i.kA, g.i.Lh);
g.md = function (a) {
  this.s = a;
  this.Lb = [];
  this.Tg = null;
  if (!(0 >= this.s.options.us)) {
    a = new g.Pd({
      scrollbars: !0,
      parentWorkspace: this.s,
      rtl: this.s.M,
      oneBasedIndex: this.s.options.Hf,
      renderer: this.s.options.qp,
      rendererOverrides: this.s.options.rp,
    });
    if (this.s.Fd) {
      a.La = this.s.La == g.g.za.Qd.Tq ? g.g.za.Qd.Bt : g.g.za.Qd.Tq;
      if (!g.Vt) throw Error("Missing require for Blockly.HorizontalFlyout");
      this.Tg = new g.Vt(a);
    } else {
      a.La = this.s.La == g.g.za.Qd.dk ? g.g.za.Qd.$j : g.g.za.Qd.dk;
      if (!g.Nh) throw Error("Missing require for Blockly.VerticalFlyout");
      this.Tg = new g.Nh(a);
    }
    D(this.s, this.cK.bind(this));
  }
};
b = g.md.prototype;
b.lk = 47;
b.cq = 44;
b.Ll = 16;
b.bu = 20;
b.Cn = 20;
b.Fq = 10;
b.xu = 0;
b.yu = 32;
b.FF = 0.1;
g.md.mE = 80;
g.md.Iy = 4;
g.md.Lz = 0.4;
g.md.xG = 0.8;
g.md.Ez = 45;
b = g.md.prototype;
b.fs = !1;
b.Yw = 0;
b.N = null;
b.ht = null;
b.Kw = 0;
b.rj = 0;
b.Qo = 0;
b.jn = 0;
b.ab = function () {
  this.N = g.g.o.L(g.g.F.qc, { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var c = g.g.o.L(g.g.F.sn, { id: "blocklyTrashBodyClipPath" + a }, this.N);
  g.g.o.L(g.g.F.Hc, { width: this.lk, height: this.cq, y: this.Ll }, c);
  var d = g.g.o.L(
    g.g.F.Ii,
    {
      width: g.Sd.width,
      x: -this.xu,
      height: g.Sd.height,
      y: -this.yu,
      "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")",
    },
    this.N
  );
  d.setAttributeNS(g.g.o.rf, "xlink:href", this.s.options.yj + g.Sd.url);
  c = g.g.o.L(g.g.F.sn, { id: "blocklyTrashLidClipPath" + a }, this.N);
  g.g.o.L(g.g.F.Hc, { width: this.lk, height: this.Ll }, c);
  this.ht = g.g.o.L(
    g.g.F.Ii,
    {
      width: g.Sd.width,
      x: -this.xu,
      height: g.Sd.height,
      y: -this.yu,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")",
    },
    this.N
  );
  this.ht.setAttributeNS(g.g.o.rf, "xlink:href", this.s.options.yj + g.Sd.url);
  g.Ud(this.N, "mousedown", this, this.EH);
  g.Ud(this.N, "mouseup", this, this.click);
  g.Ud(d, "mouseover", this, this.MJ);
  g.Ud(d, "mouseout", this, this.KJ);
  this.Lu();
  return this.N;
};
b.aa = function (a) {
  0 < this.s.options.us &&
    (g.g.o.Hk(this.Tg.ab(g.g.F.hk), r(this.s)), this.Tg.aa(this.s));
  this.rh = this.bu + a;
  pb(this, !1);
  return this.rh + this.cq + this.Ll;
};
b.J = function () {
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.s = this.ht = null;
  clearTimeout(this.Kw);
};
b.position = function () {
  if (this.rh) {
    var a = this.s.dd();
    a &&
      ((this.Qo =
        a.La == g.Ke || (this.s.Fd && !this.s.M)
          ? a.Qb + a.Sc - this.lk - this.Cn - g.Wa.Wc
          : this.Cn + g.Wa.Wc),
      (this.jn =
        a.La == g.Qn ? this.rh : a.Vb + a.ad - (this.cq + this.Ll) - this.rh),
      this.N.setAttribute(
        "transform",
        "translate(" + this.Qo + "," + this.jn + ")"
      ));
  }
};
b.um = function () {
  if (!this.N) return null;
  var a = this.N.getBoundingClientRect(),
    c = a.top + this.yu - this.Fq;
  a = a.left + this.xu - this.Fq;
  return new g.g.Rect(
    c,
    c + this.Ll + this.cq + 2 * this.Fq,
    a,
    a + this.lk + 2 * this.Fq
  );
};
function pb(a, c) {
  a.fs != c && (clearTimeout(a.Kw), (a.fs = c), a.Lu());
}
b.Lu = function () {
  var a = 1 / (g.md.Iy + 1);
  this.rj += this.fs ? a : -a;
  this.rj = Math.min(Math.max(this.rj, this.Yw), 1);
  gc(this, this.rj * g.md.Ez);
  this.N.style.opacity = g.md.Lz + this.rj * (g.md.xG - g.md.Lz);
  this.rj > this.Yw &&
    1 > this.rj &&
    (this.Kw = setTimeout(this.Lu.bind(this), g.md.mE / g.md.Iy));
};
function gc(a, c) {
  var d = a.s.La == g.Wl || (a.s.Fd && a.s.M);
  a.ht.setAttribute(
    "transform",
    "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.lk - 4) + "," + (a.Ll - 2) + ")"
  );
}
b.vr = function () {
  pb(this, !1);
};
b.click = function () {
  if (this.Lb.length && !this.Tg.isVisible()) {
    for (var a = [], c = 0, d; (d = this.Lb[c]); c++) a[c] = g.T.ff(d);
    this.Tg.show(a);
    hc(this, !0);
  }
};
function hc(a, c) {
  a = new g.i.Lh(c, a.s.id);
  g.i.Ha(a);
}
b.EH = function (a) {
  !this.Tg.isVisible() && this.Lb.length && a.stopPropagation();
};
b.MJ = function () {
  this.Lb.length && pb(this, !0);
};
b.KJ = function () {
  pb(this, !1);
};
b.cK = function (a) {
  if (
    !(0 >= this.s.options.us) &&
    a.type == g.i.zt &&
    a.Pm.tagName &&
    "shadow" != a.Pm.tagName.toLowerCase()
  ) {
    for (var c = (a = a.Pm.cloneNode(!0)); c; ) {
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
    a = g.T.te(a);
    if (-1 == this.Lb.indexOf(a)) {
      for (this.Lb.unshift(a); this.Lb.length > this.s.options.us; )
        this.Lb.pop();
      this.Yw = a = this.FF;
      this.fs || gc(this, a * g.md.Ez);
    }
  }
};
g.Y = Object.create(null);
g.Ba = function (a, c) {
  this.I = a;
  this.type = c;
};
g.Ba.jq = 0;
g.Ba.Tz = 1;
g.Ba.Wz = 2;
g.Ba.Vz = 3;
g.Ba.Qz = 4;
g.Ba.Rz = 5;
g.Ba.Uz = 6;
g.Ba.Sz = 7;
b = g.Ba.prototype;
b.oa = null;
b.eg = !1;
b.Ti = null;
b.dt = null;
b.x = 0;
b.y = 0;
b.dg = function (a) {
  var c = this,
    d = c.X(),
    e = a.X();
  a.isConnected() && a.disconnect();
  if (c.isConnected()) {
    var f = c.sa(),
      h = c.ym();
    c.dt = null;
    if (f.Ra) (h = g.T.Ph(f)), f.J(!1), (f = null);
    else if (c.type == g.jb) {
      if (!f.O) throw Error("Orphan block does not have an output connection.");
      var k = g.Ba.EC(e, f);
      k && (f.O.connect(k), (f = null));
    } else if (c.type == g.kb) {
      if (!f.ka)
        throw Error("Orphan block does not have a previous connection.");
      for (k = e; k.W; ) {
        var l = q(k);
        if (l && !l.Ra) k = l;
        else {
          ra(f.u.bo, f.ka, k.W, !1) && (k.W.connect(f.ka), (f = null));
          break;
        }
      }
    }
    if (f && (c.disconnect(), g.i.eb)) {
      var m = g.i.wc();
      setTimeout(function () {
        f.u &&
          !f.getParent() &&
          (g.i.na(m), f.O ? f.O.Ds(c) : f.ka && f.ka.Ds(c), g.i.na(!1));
      }, g.fq);
    }
    c.dt = h;
  }
  var n;
  g.i.isEnabled() && (n = new g.i.rn(e));
  g.Ba.VH(c, a);
  e.bt(d);
  n && (n.dl(), g.i.Ha(n));
};
b.J = function () {
  if (this.isConnected()) {
    this.Ym(null);
    var a = this.sa();
    a && y(a);
  }
  this.eg = !0;
};
b.X = function () {
  return this.I;
};
function v(a) {
  return a.type == g.jb || a.type == g.kb;
}
b.isConnected = function () {
  return !!this.oa;
};
b.kr = function (a) {
  g.g.vv.warn(
    "Connection.prototype.canConnectWithReason",
    "July 2020",
    "July 2021",
    "the workspace's connection checker"
  );
  return hb(this).kr(this, a, !1);
};
function hb(a) {
  return a.I.u.bo;
}
b.Ds = function () {};
b.connect = function (a) {
  if (this.oa != a && ra(hb(this), this, a, !1)) {
    var c = g.i.wc();
    c || g.i.na(!0);
    v(this) ? this.dg(a) : a.dg(this);
    c || g.i.na(!1);
  }
};
g.Ba.VH = function (a, c) {
  if (!a || !c) throw Error("Cannot connect null connections.");
  a.oa = c;
  c.oa = a;
};
g.Ba.tL = function (a, c) {
  var d = null;
  c = c.O;
  for (var e = 0; e < a.S.length; e++) {
    var f = a.S[e].connection,
      h = hb(c);
    if (f && f.type == g.jb && ra(h, c, f, !1)) {
      if (d) return null;
      d = f;
    }
  }
  return d;
};
g.Ba.EC = function (a, c) {
  for (var d; (d = g.Ba.tL(a, c)); ) if (((a = d.sa()), !a || a.Ra)) return d;
  return null;
};
b = g.Ba.prototype;
b.disconnect = function () {
  var a = this.oa;
  if (!a) throw Error("Source connection not connected.");
  if (a.oa != this)
    throw Error("Target connection not connected to source connection.");
  if (v(this)) {
    var c = this.I;
    var d = a.X();
    a = this;
  } else (c = a.X()), (d = this.I);
  var e = g.i.wc();
  e || g.i.na(!0);
  this.Cv(c, d);
  d.Ra || a.sp();
  e || g.i.na(!1);
};
b.Cv = function (a, c) {
  var d;
  g.i.isEnabled() && (d = new g.i.rn(c));
  this.oa = this.oa.oa = null;
  c.bt(null);
  d && (d.dl(), g.i.Ha(d));
};
b.sp = function () {
  var a = this.X(),
    c = this.ym();
  if (a.u && c)
    if (((a = g.T.vk(c, a.u)), a.O)) this.connect(a.O);
    else if (a.ka) this.connect(a.ka);
    else throw Error("Child block does not have output or previous statement.");
};
b.sa = function () {
  return this.isConnected() ? this.oa.X() : null;
};
b.eD = function () {
  !this.isConnected() ||
    (this.oa && ra(hb(this), this, this.oa, !1)) ||
    y(v(this) ? this.sa() : this.I);
};
b.Ja = function (a) {
  a
    ? (Array.isArray(a) || (a = [a]), (this.Ti = a), this.eD())
    : (this.Ti = null);
  return this;
};
b.Ym = function (a) {
  this.dt = a;
  a = this.sa();
  a ? a.Ra && (a.J(!1), this.sp()) : this.sp();
};
b.ym = function () {
  return this.dt;
};
b.SC = function () {
  return [];
};
b.Wg = function () {
  for (var a = null, c = this.I, d = c.S, e = 0; e < c.S.length; e++)
    if (d[e].connection === this) {
      a = d[e];
      break;
    }
  return a;
};
b.toString = function () {
  var a = this.I;
  if (a)
    if (a.O == this) var c = "Output Connection of ";
    else if (a.ka == this) c = "Previous Connection of ";
    else if (a.W == this) c = "Next Connection of ";
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
  return c + ic(a);
};
g.ca = {};
g.ca.pn = {};
g.ca.register = function (a, c) {
  if ("string" != typeof a || "" == a.trim())
    throw Error('Error: Invalid extension name "' + a + '"');
  if (g.ca.pn[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if ("function" != typeof c)
    throw Error('Error: Extension "' + a + '" must be a function');
  g.ca.pn[a] = c;
};
g.ca.Ts = function (a, c) {
  if (!c || "object" != typeof c)
    throw Error('Error: Mixin "' + a + '" must be a object');
  g.ca.register(a, function () {
    this.Id(c);
  });
};
g.ca.op = function (a, c, d, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  g.ca.RA(f, c.Eb, "domToMutation");
  g.ca.RA(f, c.Xa, "mutationToDom");
  var h = g.ca.TA(c, f);
  if (d && "function" != typeof d)
    throw Error('Extension "' + a + '" is not a function');
  g.ca.register(a, function () {
    if (h) {
      if (!g.Ac) throw Error(f + "Missing require for Blockly.Mutator");
      this.Xm(new g.Ac(e || []));
    }
    this.Id(c);
    d && d.apply(this);
  });
};
g.ca.unregister = function (a) {
  g.ca.pn[a]
    ? delete g.ca.pn[a]
    : console.warn(
        'No extension mapping for name "' + a + '" found to unregister'
      );
};
g.ca.apply = function (a, c, d) {
  var e = g.ca.pn[a];
  if ("function" != typeof e)
    throw Error('Error: Extension "' + a + '" not found.');
  if (d) g.ca.NH(a, c);
  else var f = g.ca.hw(c);
  e.apply(c);
  if (d) g.ca.LH('Error after applying mutator "' + a + '": ', c);
  else if (!g.ca.TJ(f, c))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
g.ca.RA = function (a, c, d) {
  if (!c) throw Error(a + 'missing required property "' + d + '"');
  if ("function" != typeof c)
    throw Error(a + '" required property "' + d + '" must be a function');
};
g.ca.NH = function (a, c) {
  if (g.ca.hw(c).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        c.id
    );
};
g.ca.TA = function (a, c) {
  var d = void 0 !== a.Lg,
    e = void 0 !== a.Qg;
  if (d && e) {
    if ("function" != typeof a.Lg)
      throw Error(c + "compose must be a function.");
    if ("function" != typeof a.Qg)
      throw Error(c + "decompose must be a function.");
    return !0;
  }
  if (d || e)
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
g.ca.LH = function (a, c) {
  if ("function" != typeof c.Eb)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof c.Xa)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  g.ca.TA(c, a);
};
g.ca.hw = function (a) {
  var c = [];
  void 0 !== a.Eb && c.push(a.Eb);
  void 0 !== a.Xa && c.push(a.Xa);
  void 0 !== a.Lg && c.push(a.Lg);
  void 0 !== a.Qg && c.push(a.Qg);
  return c;
};
g.ca.TJ = function (a, c) {
  c = g.ca.hw(c);
  if (c.length != a.length) return !1;
  for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
  return !0;
};
g.ca.gr = function (a, c) {
  var d = [];
  "object" == typeof document &&
    g.g.CD(function () {
      for (var e in c) g.g.SA(c[e]);
    });
  return function () {
    this.type &&
      -1 == d.indexOf(this.type) &&
      (g.ca.MH(this, a, c), d.push(this.type));
    this.fb(
      function () {
        var e = String(C(this, a)),
          f = c[e];
        null == f
          ? -1 == d.indexOf(this.type) &&
            ((e = "No tooltip mapping for value " + e + " of field " + a),
            null != this.type && (e += " of block type " + this.type),
            console.warn(e + "."))
          : (f = g.g.Mc(f));
        return f;
      }.bind(this)
    );
  };
};
g.ca.MH = function (a, c, d) {
  var e = w(a, c);
  if ("function" != typeof e.Uk) {
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
g.ca.hr = function (a) {
  "object" == typeof document &&
    g.g.CD(function () {
      g.g.SA(a);
    });
  return function () {
    this.fb(
      function () {
        var c = w(this, "VAR");
        return g.g.Mc(a).replace("%1", c ? c.Dd() : "");
      }.bind(this)
    );
  };
};
g.ca.zI = function () {
  this.GL = this.Nf;
  this.fb(
    function () {
      var a = this.getParent();
      return (a && lb(a) && a.Nf) || this.GL;
    }.bind(this)
  );
};
g.ca.register("parent_tooltip_when_inline", g.ca.zI);
g.Ld = function (a, c, d) {
  this.nr = null;
  g.Ld.v.constructor.call(this, a, null, d);
  d || (this.nr = c || null);
};
g.g.object.V(g.Ld, g.jd);
g.Ld.prototype.Sj = "";
g.Ld.ma = function (a) {
  var c = g.g.Mc(a.text);
  return new g.Ld(c, void 0, a);
};
g.Ld.prototype.un = !1;
g.Ld.prototype.Bd = function (a) {
  g.Ld.v.Bd.call(this, a);
  this.nr = a["class"];
};
g.Ld.prototype.di = function () {
  Mb(this);
  this.nr && g.g.o.Ga(this.Pc, this.nr);
};
g.Ld.prototype.Yh = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
g.Ue.register("field_label", g.Ld);
g.zz = function (a, c, d, e) {
  if (a != g.zh && !c)
    throw Error("Value inputs and statement inputs must have non-empty name.");
  this.type = a;
  this.name = c;
  this.I = d;
  this.connection = e;
  this.hb = [];
};
b = g.zz.prototype;
b.align = g.wt;
b.Mj = !0;
b.X = function () {
  return this.I;
};
function J(a, c, d) {
  jc(a, a.hb.length, c, d);
  return a;
}
function jc(a, c, d, e) {
  if (0 > c || c > a.hb.length) throw Error("index " + c + " out of bounds.");
  if (!(d || ("" == d && e))) return c;
  "string" == typeof d && (d = new g.Ld(d));
  d.ey(a.I);
  a.I.ra && (d.aa(), d.kc());
  d.name = e;
  d.Ob(a.isVisible());
  e = d;
  e.Kx && (c = jc(a, c, e.Kx));
  a.hb.splice(c, 0, d);
  ++c;
  e.sy && (c = jc(a, c, e.sy));
  a.I.ra && ((a.I = a.I), a.I.Ia(), a.I.cc());
  return c;
}
b.isVisible = function () {
  return this.Mj;
};
b.Ob = function (a) {
  if (this.Mj != a) {
    this.Mj = a;
    for (var c = 0, d; (d = this.hb[c]); c++) d.Ob(a);
    if (this.connection) {
      this.connection = this.connection;
      if (a) kc(this.connection);
      else if (((c = this.connection), lc(c, !1), c.oa))
        for (c = p(c.sa(), !1), d = 0; d < c.length; d++) {
          for (var e = c[d], f = e.jg(!0), h = 0; h < f.length; h++)
            lc(f[h], !1);
          e = mb(e);
          for (h = 0; h < e.length; h++) e[h].Ob(!1);
        }
      if ((c = this.connection.sa()))
        c.Pa().style.display = a ? "block" : "none";
    }
  }
};
b.Uo = function () {
  for (var a = 0, c; (c = this.hb[a]); a++) c.Uo();
};
b.Ja = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Ja(a);
  return this;
};
function K(a, c) {
  a.align = c;
  a.I.ra && ((a.I = a.I), a.I.Ia());
  return a;
}
b.Ym = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Ym(a);
};
b.ym = function () {
  if (!this.connection) throw Error("This input does not have a connection.");
  return this.connection.ym();
};
b.aa = function () {
  if (this.I.u.ra) for (var a = 0; a < this.hb.length; a++) this.hb[a].aa();
};
b.J = function () {
  for (var a = 0, c; (c = this.hb[a]); a++) c.J();
  this.connection && this.connection.J();
  this.I = null;
};
g.ne = function (a, c, d) {
  if (g.Generator && "undefined" != typeof g.Generator.prototype[c])
    throw Error(
      'Block prototypeName "' +
        c +
        '" conflicts with Blockly.Generator members.'
    );
  this.id = d && !a.$d(d) ? d : g.g.Zh();
  a.Su[this.id] = this;
  this.ka = this.W = this.O = null;
  this.S = [];
  this.ei = void 0;
  this.disabled = !1;
  this.Nf = "";
  this.contextMenu = !0;
  this.jh = null;
  this.Rh = [];
  this.AB = this.RC = this.uv = !0;
  this.nk = this.Ra = !1;
  this.Zn = null;
  this.Pe = { text: null, Ix: !1, size: new g.g.re(160, 80) };
  this.jE = new g.g.Z(0, 0);
  this.u = a;
  this.Ub = a.lg;
  this.M = a.M;
  this.Im = !1;
  this.Zg = void 0;
  this.ra = null;
  if (c) {
    this.type = c;
    d = g.Y[c];
    if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
    g.g.object.Id(this, d);
  }
  a.Yq(this);
  a.Bi[this.type] || (a.Bi[this.type] = []);
  a.Bi[this.type].push(this);
  (a = g.i.wc()) || g.i.na(!0);
  c = g.i.eb;
  try {
    "function" == typeof this.aa && ((g.i.eb = !1), this.aa(), (g.i.eb = c)),
      g.i.isEnabled() && g.i.Ha(new g.i.hq(this));
  } finally {
    a || g.i.na(!1), (g.i.eb = c);
  }
  this.pJ = this.ei;
  if ("function" == typeof this.onchange) {
    if ((a = this.onchange) && "function" != typeof a)
      throw Error("onchange must be a function.");
    this.bp && Oa(this.u, this.bp);
    if ((this.onchange = a)) (this.bp = a.bind(this)), D(this.u, this.bp);
  }
};
g.ne.tn = "_TEMP_COLLAPSED_INPUT";
g.ne.It = "_TEMP_COLLAPSED_FIELD";
b = g.ne.prototype;
b.data = null;
b.eg = !1;
b.nd = "#000000";
b.ll = null;
b.J = function (a) {
  if (this.u) {
    this.bp && Oa(this.u, this.bp);
    y(this, a);
    g.i.isEnabled() && g.i.Ha(new g.i.xE(this));
    g.i.disable();
    try {
      if (this.u) {
        this.u.Vs(this);
        var c = this.u;
        c.Bi[this.type].splice(c.Bi[this.type].indexOf(this), 1);
        c.Bi[this.type].length || delete c.Bi[this.type];
        delete this.u.Su[this.id];
        this.u = null;
      }
      g.selected == this && (g.selected = null);
      for (var d = this.Rh.length - 1; 0 <= d; d--) this.Rh[d].J(!1);
      d = 0;
      for (var e; (e = this.S[d]); d++) e.J();
      this.S.length = 0;
      var f = this.jg(!0);
      d = 0;
      for (var h; (h = f[d]); d++) h.J();
    } finally {
      g.i.enable(), (this.eg = !0);
    }
  }
};
b.Gk = function () {
  for (var a = 0, c; (c = this.S[a]); a++)
    for (var d = 0, e; (e = c.hb[d]); d++) e.Gk && e.Gk();
};
function y(a, c) {
  if (a.O) {
    var d = null;
    a.O.isConnected() && ((d = a.O.oa), a.O.disconnect());
    if (d && c) {
      a: {
        c = null;
        for (var e = 0; e < a.S.length; e++) {
          var f = a.S[e].connection;
          if (f && f.type == g.jb && f.oa) {
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
        !c.sa().Ra &&
        ((c = c.oa),
        c.disconnect(),
        ra(a.u.bo, c, d, !1) ? d.connect(c) : c.Ds(d));
    }
  } else
    a.ka &&
      ((d = null),
      a.ka.isConnected() && ((d = a.ka.oa), a.ka.disconnect()),
      (e = q(a)),
      c &&
        e &&
        !e.Ra &&
        ((c = a.W.oa),
        c.disconnect(),
        d && ra(a.u.bo, d, c, !1) && d.connect(c)));
}
b.jg = function () {
  var a = [];
  this.O && a.push(this.O);
  this.ka && a.push(this.ka);
  this.W && a.push(this.W);
  for (var c = 0, d; (d = this.S[c]); c++) d.connection && a.push(d.connection);
  return a;
};
b.os = function () {
  for (var a = this.W; a; ) {
    var c = a.sa();
    if (!c) return a;
    a = c.W;
  }
  return null;
};
b.cc = function () {};
b.getParent = function () {
  return this.jh;
};
function Ba(a, c) {
  for (var d = 0, e; (e = a.S[d]); d++)
    if (e.connection && e.connection.sa() == c) return e;
  return null;
}
function mc(a) {
  do {
    var c = a;
    a = a.getParent();
    if (!a) return null;
  } while (q(a) == c);
  return a;
}
function q(a) {
  return a.W && a.W.sa();
}
b.ce = function () {
  var a = this;
  do {
    var c = a;
    a = c.jh;
  } while (a);
  return c;
};
function Ca(a, c) {
  if (!c) return a.Rh;
  c = [];
  for (var d = 0, e; (e = a.S[d]); d++)
    e.connection && (e = e.connection.sa()) && c.push(e);
  (a = q(a)) && c.push(a);
  return c;
}
b.bt = function (a) {
  if (a != this.jh) {
    if (this.jh) {
      g.g.$q(this.jh.Rh, this);
      if (this.ka && this.ka.isConnected())
        throw Error("Still connected to previous block.");
      if (this.O && this.O.isConnected())
        throw Error("Still connected to parent block.");
      this.jh = null;
    } else this.u.Vs(this);
    (this.jh = a) ? a.Rh.push(this) : this.u.Yq(this);
  }
};
function p(a, c) {
  var d = [a];
  a = Ca(a, c);
  for (var e, f = 0; (e = a[f]); f++) d.push.apply(d, p(e, c));
  return d;
}
b.ye = function () {
  return this.uv && !this.Ra && !(this.u && this.u.options.readOnly);
};
b.Lc = function () {
  return this.RC && !this.Ra && !(this.u && this.u.options.readOnly);
};
b.at = function (a) {
  this.RC = a;
};
b.by = function (a) {
  this.Ra = a;
};
b.ie = function () {
  return this.Im;
};
b.FD = function (a) {
  this.Im = a;
};
b.ge = function () {
  return this.AB && !(this.u && this.u.options.readOnly);
};
b.Zx = function (a) {
  this.AB = a;
  a = 0;
  for (var c; (c = this.S[a]); a++)
    for (var d = 0, e; (e = c.hb[d]); d++) e.Ci();
};
b.gw = function (a, c) {
  var d = this.jg(!0);
  a = a.jg(!0);
  if (d.length != a.length)
    throw Error("Connection lists did not match in length.");
  for (var e = 0; e < a.length; e++) if (a[e] == c) return d[e];
  return null;
};
b.fb = function (a) {
  this.Nf = a;
};
b.cw = function () {
  return this.nd;
};
b.df = function (a) {
  this.nd = g.g.Os(a).Io;
};
b.Jb = function (a) {
  this.ll = a;
};
function w(a, c) {
  for (var d = 0, e; (e = a.S[d]); d++)
    for (var f = 0, h; (h = e.hb[f]); f++) if (h.name == c) return h;
  return null;
}
b.ci = function () {
  for (var a = [], c = 0, d; (d = this.S[c]); c++)
    for (var e = 0, f; (f = d.hb[e]); e++) f.np() && a.push(f.getValue());
  return a;
};
b.bi = function () {
  for (var a = [], c = 0, d; (d = this.S[c]); c++)
    for (var e = 0, f; (f = d.hb[e]); e++)
      f.np() && (f = this.u.kg(f.getValue())) && a.push(f);
  return a;
};
b.qt = function (a) {
  for (var c = 0, d; (d = this.S[c]); c++)
    for (var e = 0, f; (f = d.hb[e]); e++)
      f.np() && a.Qa() == f.getValue() && Qb(f);
};
b.Ws = function (a, c) {
  for (var d = 0, e; (e = this.S[d]); d++)
    for (var f = 0, h; (h = e.hb[f]); f++)
      h.np() && a == h.getValue() && h.setValue(c);
};
function C(a, c) {
  return (a = w(a, c)) ? a.getValue() : null;
}
function nc(a, c, d) {
  a = w(a, d);
  if (!a) throw Error('Field "' + d + '" not found.');
  a.setValue(c);
}
b.Ce = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.ka) {
      if (this.O)
        throw Error(
          "Remove output connection prior to adding previous connection."
        );
      this.ka = this.To(g.Xf);
    }
    this.ka.Ja(c);
  } else if (this.ka) {
    if (this.ka.isConnected())
      throw Error(
        "Must disconnect previous statement before removing connection."
      );
    this.ka.J();
    this.ka = null;
  }
};
b.Be = function (a, c) {
  if (a)
    void 0 === c && (c = null),
      this.W || (this.W = this.To(g.kb)),
      this.W.Ja(c);
  else if (this.W) {
    if (this.W.isConnected())
      throw Error("Must disconnect next statement before removing connection.");
    this.W.J();
    this.W = null;
  }
};
b.td = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.O) {
      if (this.ka)
        throw Error(
          "Remove previous connection prior to adding output connection."
        );
      this.O = this.To(g.Wf);
    }
    this.O.Ja(c);
  } else if (this.O) {
    if (this.O.isConnected())
      throw Error("Must disconnect output value before removing connection.");
    this.O.J();
    this.O = null;
  }
};
b.Ae = function (a) {
  this.ei != a &&
    (g.i.Ha(new g.i.uh(this, "inline", null, this.ei, a)), (this.ei = a));
};
function lb(a) {
  if (void 0 != a.ei) return a.ei;
  for (var c = 1; c < a.S.length; c++)
    if (a.S[c - 1].type == g.zh && a.S[c].type == g.zh) return !1;
  for (c = 1; c < a.S.length; c++)
    if (a.S[c - 1].type == g.jb && a.S[c].type == g.zh) return !0;
  return !1;
}
b.isEnabled = function () {
  return !this.disabled;
};
b.ke = function (a) {
  this.isEnabled() != a &&
    (g.i.Ha(new g.i.uh(this, "disabled", null, this.disabled, !a)),
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
  return this.nk;
};
b.Fj = function (a) {
  this.nk != a &&
    (g.i.Ha(new g.i.uh(this, "collapsed", null, this.nk, a)), (this.nk = a));
};
b.toString = function (a, c) {
  function d(n) {
    var t = n.Ti;
    !t && n.oa && (t = n.oa.Ti);
    return !!t && (-1 != t.indexOf("Boolean") || -1 != t.indexOf("Number"));
  }
  function e() {
    k && k.wb() == l.wb() && k.Fa == l.Fa && (k = null);
  }
  var f = [];
  c = c || "?";
  var h = g.G.Mi;
  g.G.Mi = !0;
  for (var k = g.G.Ng(this), l = k; k; ) {
    switch (k.wb()) {
      case g.G.types.lf:
        var m = k.Fa;
        k.ah() ? d(m) && f.push("(") : f.push(c);
        break;
      case g.G.types.Fc:
        (m = k.Fa), m.name != g.ne.It && f.push(m.Dd());
    }
    m = k;
    k = m.ah() || m.next();
    if (!k) {
      k = m.hh();
      for (e(); k && !k.next(); )
        (k = k.hh()),
          e(),
          k && k.wb() == g.G.types.lf && d(k.Fa) && f.push(")");
      k && (k = k.next());
    }
  }
  g.G.Mi = h;
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
function L(a, c) {
  return a.Gg(g.jb, c);
}
function M(a, c) {
  return a.Gg(g.zh, c || "");
}
function pc(a, c) {
  var d = c.type ? 'Block "' + c.type + '": ' : "";
  if (c.output && c.previousStatement)
    throw Error(d + "Must not have both an output and a previousStatement.");
  c.style && c.style.Zg && ((a.Zg = c.style.Zg), (c.style = null));
  if (c.style && c.colour)
    throw Error(d + "Must not have both a colour and a style.");
  if (c.style) {
    var e = c.style;
    try {
      a.Jb(e);
    } catch (sa) {
      console.warn(d + "Style does not exist: ", e);
    }
  } else if ("colour" in c)
    if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
    else {
      e = c.colour;
      try {
        a.df(e);
      } catch (sa) {
        console.warn(d + "Illegal colour value: ", e);
      }
    }
  for (e = 0; void 0 !== c["message" + e]; ) {
    for (
      var f = a,
        h = c["args" + e] || [],
        k = c["lastDummyAlign" + e],
        l = d,
        m = g.g.FL(c["message" + e]),
        n = [],
        t = 0,
        u = [],
        x = 0;
      x < m.length;
      x++
    ) {
      var I = m[x];
      if ("number" == typeof I) {
        if (0 >= I || I > h.length)
          throw Error(
            'Block "' + f.type + '": Message index %' + I + " out of range."
          );
        if (n[I])
          throw Error(
            'Block "' + f.type + '": Message index %' + I + " duplicated."
          );
        n[I] = !0;
        t++;
        u.push(h[I - 1]);
      } else (I = I.trim()) && u.push(I);
    }
    if (t != h.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          h.length +
          " arg(s)."
      );
    u.length &&
      ("string" == typeof u[u.length - 1] ||
        g.g.yb.startsWith(u[u.length - 1].type, "field_")) &&
      ((x = { type: "input_dummy" }), k && (x.align = k), u.push(x));
    k = { LEFT: g.wt, RIGHT: g.Zc, CENTRE: g.vt, CENTER: g.vt };
    h = [];
    for (x = 0; x < u.length; x++)
      if (((n = u[x]), "string" == typeof n)) h.push([n, void 0]);
      else {
        m = t = null;
        do
          if (((I = !1), "string" == typeof n)) t = new g.Ld(n);
          else
            switch (n.type) {
              case "input_value":
                m = L(f, n.name);
                break;
              case "input_statement":
                m = f.Gg(g.kb, n.name);
                break;
              case "input_dummy":
                m = M(f, n.name);
                break;
              default:
                (t = g.Ue.ma(n)), !t && n.alt && ((n = n.alt), (I = !0));
            }
        while (I);
        if (t) h.push([t, n.name]);
        else if (m) {
          n.check && m.Ja(n.check);
          n.align &&
            ((t = k[n.align.toUpperCase()]),
            void 0 === t
              ? console.warn(l + "Illegal align value: ", n.align)
              : K(m, t));
          for (n = 0; n < h.length; n++) J(m, h[n][0], h[n][1]);
          h.length = 0;
        }
      }
    e++;
  }
  void 0 !== c.inputsInline && a.Ae(c.inputsInline);
  void 0 !== c.output && a.td(!0, c.output);
  void 0 !== c.previousStatement && a.Ce(!0, c.previousStatement);
  void 0 !== c.nextStatement && a.Be(!0, c.nextStatement);
  void 0 !== c.tooltip && ((e = c.tooltip), (e = g.g.Mc(e)), a.fb(e));
  void 0 !== c.enableContextMenu &&
    ((e = c.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== c.helpUrl && ((e = c.helpUrl), (e = g.g.Mc(e)), (a.xc = e));
  "string" == typeof c.extensions &&
    (console.warn(
      d +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        c.type +
        "' block."
    ),
    (c.extensions = [c.extensions]));
  void 0 !== c.mutator && g.ca.apply(c.mutator, a, !0);
  if (Array.isArray(c.extensions))
    for (c = c.extensions, d = 0; d < c.length; ++d) g.ca.apply(c[d], a, !1);
}
b.Id = function (a, c) {
  if (void 0 !== c && "boolean" != typeof c)
    throw Error("opt_disableCheck must be a boolean if provided");
  if (!c) {
    c = [];
    for (var d in a) void 0 !== this[d] && c.push(d);
    if (c.length)
      throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  }
  g.g.object.Id(this, a);
};
b.Gg = function (a, c) {
  var d = null;
  if (a == g.jb || a == g.kb) d = this.To(a);
  a = new g.zz(a, c, this, d);
  this.S.push(a);
  return a;
};
function qc(a, c, d) {
  if (c != d) {
    for (var e = -1, f = d ? -1 : a.S.length, h = 0, k; (k = a.S[h]); h++)
      if (k.name == c) {
        if (((e = h), -1 != f)) break;
      } else if (d && k.name == d && ((f = h), -1 != e)) break;
    if (-1 == e) throw Error('Named input "' + c + '" not found.');
    if (-1 == f) throw Error('Reference input "' + d + '" not found.');
    a.ex(e, f);
  }
}
b.ex = function (a, c) {
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
b.Ib = function (a, c) {
  for (var d = 0, e; (e = this.S[d]); d++)
    if (e.name == a) return e.J(), this.S.splice(d, 1), !0;
  if (c) return !1;
  throw Error("Input not found: " + a);
};
function z(a, c) {
  for (var d = 0, e; (e = a.S[d]); d++) if (e.name == c) return e;
  return null;
}
function N(a, c) {
  return (a = z(a, c)) && a.connection && a.connection.sa();
}
b.Gj = function (a) {
  this.Pe.text != a &&
    (g.i.Ha(new g.i.uh(this, "comment", null, this.Pe.text, a)),
    (this.Zn = this.Pe.text = a));
};
b.Zm = function () {};
b.Xm = function () {};
b.bb = function () {
  return this.jE;
};
b.moveBy = function (a, c) {
  if (this.jh) throw Error("Block has parent.");
  var d = new g.i.rn(this);
  this.jE.translate(a, c);
  d.dl();
  g.i.Ha(d);
};
b.To = function (a) {
  return new g.Ba(this, a);
};
function ic(a) {
  var c = a.type ? '"' + a.type + '" block' : "Block";
  a.id && (c += ' (id="' + a.id + '")');
  return c;
}
g.m = {};
g.m.Up = !1;
g.m.register = function (a, c) {
  g.C.register(g.C.ea.RENDERER, a, c);
};
g.m.unregister = function (a) {
  g.C.unregister(g.C.ea.RENDERER, a);
};
g.m.YO = function () {
  g.m.Up = !0;
};
g.m.ZO = function () {
  g.m.Up = !1;
};
g.m.aa = function (a, c, d) {
  a = new (g.C.Ao(g.C.ea.RENDERER, a))(a);
  a.aa(c, d);
  return a;
};
g.Gn = function () {
  this.ue = this.rb = this.vb = null;
  this.type = "marker";
};
function F(a, c) {
  var d = a.rb;
  a.rb = c;
  a.ue && a.ue.draw(d, a.rb);
}
g.Gn.prototype.draw = function () {
  this.ue && this.ue.draw(this.rb, this.rb);
};
g.Gn.prototype.Oa = function () {
  this.ue && this.ue.Oa();
};
g.Gn.prototype.J = function () {
  this.ue && this.ue.J();
};
g.Cl = function () {
  g.Cl.v.constructor.call(this);
  this.type = "cursor";
};
g.g.object.V(g.Cl, g.Gn);
b = g.Cl.prototype;
b.next = function () {
  var a = this.rb;
  if (!a) return null;
  for (
    a = a.next();
    a && a.next() && (a.wb() == g.G.types.yd || a.wb() == g.G.types.oc);

  )
    a = a.next();
  a && F(this, a);
  return a;
};
b.ah = function () {
  var a = this.rb;
  if (!a) return null;
  if (a.wb() == g.G.types.zd || a.wb() == g.G.types.ck) a = a.next();
  (a = a.ah()) && F(this, a);
  return a;
};
b.Kf = function () {
  var a = this.rb;
  if (!a) return null;
  for (
    a = a.Kf();
    a && a.Kf() && (a.wb() == g.G.types.yd || a.wb() == g.G.types.oc);

  )
    a = a.Kf();
  a && F(this, a);
  return a;
};
b.hh = function () {
  var a = this.rb;
  if (!a) return null;
  (a = a.hh()) && a.wb() == g.G.types.oc && (a = a.Kf() || a);
  a && F(this, a);
  return a;
};
b.Yb = function (a) {
  if (this.rb && this.rb.wb() === g.G.types.Fc && this.rb.Fa.Yb(a)) return !0;
  switch (a.name) {
    case g.navigation.qb.zd:
      return this.Kf(), !0;
    case g.navigation.qb.Kq:
      return this.hh(), !0;
    case g.navigation.qb.yd:
      return this.next(), !0;
    case g.navigation.qb.Aq:
      return this.ah(), !0;
    default:
      return !1;
  }
};
g.yq = function () {
  g.yq.v.constructor.call(this);
};
g.g.object.V(g.yq, g.Cl);
b = g.yq.prototype;
b.Yb = function (a) {
  switch (a.name) {
    case g.navigation.qb.zd:
      return this.Kf(), !0;
    case g.navigation.qb.yd:
      return this.next(), !0;
    default:
      return !1;
  }
};
b.next = function () {
  var a = this.rb;
  if (!a) return null;
  (a = a.next()) && F(this, a);
  return a;
};
b.ah = function () {
  return null;
};
b.Kf = function () {
  var a = this.rb;
  if (!a) return null;
  (a = a.Kf()) && F(this, a);
  return a;
};
b.hh = function () {
  return null;
};
g.m.OM = function () {};
g.cu = function () {
  this.Ef = [];
  this.il = this.Mb = this.Fs = this.xs = this.ws = this.Sh = this.ys = this.hj = this.yx = null;
};
b = g.cu.prototype;
b.Ia = function (a) {
  var c = document.createElement("div");
  c.className = "blocklyMenu goog-menu blocklyNonSelectable";
  c.tabIndex = 0;
  this.il && g.g.$.le(c, this.il);
  this.Mb = c;
  for (var d = 0, e; (e = this.Ef[d]); d++) c.appendChild(e.ab());
  this.ys = g.ta(c, "mouseover", this, this.eJ, !0);
  this.Sh = g.ta(c, "click", this, this.ZI, !0);
  this.ws = g.ta(c, "mouseenter", this, this.cJ, !0);
  this.xs = g.ta(c, "mouseleave", this, this.dJ, !0);
  this.Fs = g.ta(c, "keydown", this, this.aJ);
  a.appendChild(c);
};
b.focus = function () {
  var a = this.Mb;
  a && (a.focus({ preventScroll: !0 }), g.g.o.Ga(a, "blocklyFocused"));
};
b.le = function (a) {
  this.il = a;
};
b.J = function () {
  this.ys && (g.Na(this.ys), (this.ys = null));
  this.Sh && (g.Na(this.Sh), (this.Sh = null));
  this.ws && (g.Na(this.ws), (this.ws = null));
  this.xs && (g.Na(this.xs), (this.xs = null));
  this.Fs && (g.Na(this.Fs), (this.Fs = null));
  for (var a = 0, c; (c = this.Ef[a]); a++) c.J();
  this.Mb = null;
};
function rc(a, c) {
  for (var d = a.Mb; c && c != d; ) {
    if (g.g.o.ow(c, "blocklyMenuItem"))
      for (var e = 0, f; (f = a.Ef[e]); e++) if (f.Mb == c) return f;
    c = c.parentElement;
  }
  return null;
}
b.si = function (a) {
  var c = this.hj;
  c && (c.si(!1), (this.hj = null));
  a &&
    (a.si(!0),
    (this.hj = a),
    (c = this.Mb),
    g.g.style.lL(a.Mb, c),
    g.g.$.Zb(c, g.g.$.State.Zp, a.Qa()));
};
function sc(a) {
  var c = a.Ef.indexOf(a.hj);
  tc(a, 0 > c ? a.Ef.length : c, -1);
}
function tc(a, c, d) {
  c += d;
  for (var e; (e = a.Ef[c]); ) {
    if (e.isEnabled()) {
      a.si(e);
      break;
    }
    c += d;
  }
}
b.eJ = function (a) {
  (a = rc(this, a.target)) &&
    (a.isEnabled() ? this.hj != a && this.si(a) : this.si(null));
};
b.ZI = function (a) {
  var c = this.yx;
  this.yx = null;
  (c &&
    "number" == typeof a.clientX &&
    1 > g.g.Z.Fv(c, new g.g.Z(a.clientX, a.clientY))) ||
    ((a = rc(this, a.target)) && a.isEnabled() && a.Vn && a.Vn(a));
};
b.cJ = function () {
  this.focus();
};
b.dJ = function () {
  if (this.Mb) {
    var a = this.Mb;
    a && (a.blur(), g.g.o.hc(a, "blocklyFocused"));
    this.si(null);
  }
};
b.aJ = function (a) {
  if (this.Ef.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
    var c = this.hj;
    switch (a.keyCode) {
      case g.g.P.Dl:
      case g.g.P.bA:
        c && c.isEnabled() && c.Vn && c.Vn(c);
        break;
      case g.g.P.Fu:
        sc(this);
        break;
      case g.g.P.Nt:
        tc(this, this.Ef.indexOf(this.hj), 1);
        break;
      case g.g.P.DG:
      case g.g.P.HF:
        tc(this, -1, 1);
        break;
      case g.g.P.CG:
      case g.g.P.cF:
        tc(this, this.Ef.length, -1);
        break;
      default:
        return;
    }
    a.preventDefault();
    a.stopPropagation();
  }
};
b.ai = function () {
  var a = this.Mb,
    c = g.g.style.ai(a);
  c.height = a.scrollHeight;
  return c;
};
g.du = function (a, c) {
  this.Uh = a;
  this.sb = c;
  this.Kr = !0;
  this.Mb = null;
  this.Xx = !1;
  this.il = null;
  this.oC = this.bv = this.av = !1;
  this.Vn = null;
};
b = g.du.prototype;
b.ab = function () {
  var a = document.createElement("div");
  a.id = g.g.Zj.Tr();
  this.Mb = a;
  a.className =
    "blocklyMenuItem goog-menuitem " +
    (this.Kr ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") +
    (this.bv ? "blocklyMenuItemSelected goog-option-selected " : "") +
    (this.oC ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") +
    (this.Xx ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
  var c = document.createElement("div");
  c.className = "blocklyMenuItemContent goog-menuitem-content";
  if (this.av) {
    var d = document.createElement("div");
    d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
    c.appendChild(d);
  }
  d = this.Uh;
  "string" == typeof this.Uh && (d = document.createTextNode(this.Uh));
  c.appendChild(d);
  a.appendChild(c);
  this.il && g.g.$.le(a, this.il);
  g.g.$.Zb(a, g.g.$.State.fk, (this.av && this.bv) || !1);
  g.g.$.Zb(a, g.g.$.State.UE, !this.Kr);
  return a;
};
b.J = function () {
  this.Mb = null;
};
b.Qa = function () {
  return this.Mb.id;
};
b.getValue = function () {
  return this.sb;
};
b.le = function (a) {
  this.il = a;
};
b.si = function (a) {
  this.oC = a;
  var c = this.Mb;
  c &&
    this.isEnabled() &&
    (a
      ? (g.g.o.Ga(c, "blocklyMenuItemHighlight"),
        g.g.o.Ga(c, "goog-menuitem-highlight"))
      : (g.g.o.hc(c, "blocklyMenuItemHighlight"),
        g.g.o.hc(c, "goog-menuitem-highlight")));
};
b.isEnabled = function () {
  return this.Kr;
};
b.ke = function (a) {
  this.Kr = a;
};
function uc(a, c, d) {
  a.Vn = c.bind(d);
}
g.$a = {};
g.$a.Br = null;
g.$a.ed = null;
g.$a.show = function (a, c, d) {
  g.la.show(g.$a, d, g.$a.J);
  if (c.length) {
    var e = g.$a.sK(c, d);
    g.$a.ed = e;
    g.$a.al(e, a, d);
    setTimeout(function () {
      e.focus();
    }, 1);
    g.$a.Br = null;
  } else g.$a.Oa();
};
g.$a.sK = function (a, c) {
  var d = new g.cu();
  d.le(g.g.$.Zf.nG);
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new g.du(f.text);
    h.Xx = c;
    h.le(g.g.$.Zf.oG);
    d.Ef.push(h);
    h.ke(f.enabled);
    f.enabled &&
      uc(
        h,
        function () {
          g.$a.Oa();
          this.Aa(this.scope);
        },
        f
      );
  }
  return d;
};
g.$a.al = function (a, c, d) {
  var e = g.g.YI();
  c = new g.g.Rect(
    c.clientY + e.top,
    c.clientY + e.top,
    c.clientX + e.left,
    c.clientX + e.left
  );
  g.$a.aI(a);
  var f = a.ai();
  d &&
    ((c.left += f.width),
    (c.right += f.width),
    (e.left += f.width),
    (e.right += f.width));
  g.la.tK(e, c, f, d);
  a.focus();
};
g.$a.aI = function (a) {
  a.Ia(g.la.pb);
  var c = a.Mb;
  g.g.o.Ga(c, "blocklyContextMenu");
  g.ta(c, "contextmenu", null, g.g.YJ);
  a.focus();
};
g.$a.Oa = function () {
  g.la.Cm(g.$a);
  g.$a.Br = null;
};
g.$a.J = function () {
  g.$a.ed && (g.$a.ed.J(), (g.$a.ed = null));
};
g.$a.ir = function (a, c) {
  return function () {
    g.i.disable();
    try {
      var d = g.T.vk(c, a.u),
        e = a.bb();
      e.x = a.M ? e.x - g.Rd : e.x + g.Rd;
      e.y += 2 * g.Rd;
      d.moveBy(e.x, e.y);
    } finally {
      g.i.enable();
    }
    g.i.isEnabled() && !d.Ra && g.i.Ha(new g.i.hq(d));
    d.select();
  };
};
g.$a.vO = function (a) {
  return {
    text: g.h.REMOVE_COMMENT,
    enabled: !0,
    Aa: function () {
      g.i.na(!0);
      a.J(!0, !0);
      g.i.na(!1);
    },
  };
};
g.$a.wO = function (a) {
  return {
    text: g.h.DUPLICATE_COMMENT,
    enabled: !0,
    Aa: function () {
      g.duplicate(a);
    },
  };
};
g.$a.bP = function (a, c) {
  if (!g.Zl) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
  var d = { enabled: !g.g.userAgent.kf };
  d.text = g.h.ADD_COMMENT;
  d.Aa = function () {
    var e = new g.Zl(a, g.h.WORKSPACE_COMMENT_DEFAULT_TEXT, g.Zl.SE, g.Zl.SE),
      f = aa(a).getBoundingClientRect();
    f = new g.g.Z(c.clientX - f.left, c.clientY - f.top);
    var h = g.g.Eo(a.Hb);
    f = g.g.Z.pm(f, h);
    f.scale(1 / a.scale);
    e.moveBy(f.x, f.y);
    a.ra && (e.xe(), e.Ia(), e.select());
  };
  return d;
};
g.Ca = {};
g.Ca.Rx = function () {
  g.Va.C.register({
    Yd: function () {
      return g.h.UNDO;
    },
    cb: function (a) {
      return 0 < a.u.rl.length ? "enabled" : "disabled";
    },
    Aa: function (a) {
      Na(a.u, !1);
    },
    cf: g.Va.Td.$c,
    id: "undoWorkspace",
    weight: 1,
  });
};
g.Ca.Qx = function () {
  g.Va.C.register({
    Yd: function () {
      return g.h.REDO;
    },
    cb: function (a) {
      return 0 < a.u.mp.length ? "enabled" : "disabled";
    },
    Aa: function (a) {
      Na(a.u, !0);
    },
    cf: g.Va.Td.$c,
    id: "redoWorkspace",
    weight: 2,
  });
};
g.Ca.zK = function () {
  g.Va.C.register({
    Yd: function () {
      return g.h.CLEAN_UP;
    },
    cb: function (a) {
      return a.u.Lc()
        ? 1 < a.u.dc(!1).length
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    Aa: function (a) {
      a = a.u;
      a.gd(!1);
      g.i.na(!0);
      for (var c = a.dc(!0), d = 0, e = 0, f; (f = c[e]); e++)
        if (f.Lc()) {
          var h = f.bb();
          f.moveBy(-h.x, d - h.y);
          vc(f);
          d = f.bb().y + E(f).height + a.Sb.U().En;
        }
      g.i.na(!1);
      a.gd(!0);
    },
    cf: g.Va.Td.$c,
    id: "cleanWorkspace",
    weight: 3,
  });
};
g.Ca.UD = function (a, c) {
  for (var d = 0, e = 0; e < c.length; e++)
    for (var f = c[e]; f; )
      setTimeout(f.Fj.bind(f, a), d), (f = q(f)), (d += 10);
};
g.Ca.AK = function () {
  g.Va.C.register({
    Yd: function () {
      return g.h.COLLAPSE_ALL;
    },
    cb: function (a) {
      if (a.u.options.collapse) {
        a = a.u.dc(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (!d.isCollapsed()) return "enabled";
            d = q(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    Aa: function (a) {
      g.Ca.UD(!0, a.u.dc(!0));
    },
    cf: g.Va.Td.$c,
    id: "collapseWorkspace",
    weight: 4,
  });
};
g.Ca.NK = function () {
  g.Va.C.register({
    Yd: function () {
      return g.h.EXPAND_ALL;
    },
    cb: function (a) {
      if (a.u.options.collapse) {
        a = a.u.dc(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (d.isCollapsed()) return "enabled";
            d = q(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    Aa: function (a) {
      g.Ca.UD(!1, a.u.dc(!0));
    },
    cf: g.Va.Td.$c,
    id: "expandWorkspace",
    weight: 5,
  });
};
g.Ca.EA = function (a, c) {
  if (a.ye()) Array.prototype.push.apply(c, p(a, !1));
  else {
    a = Ca(a, !1);
    for (var d = 0; d < a.length; d++) g.Ca.EA(a[d], c);
  }
};
g.Ca.dw = function (a) {
  var c = [];
  a = a.dc(!0);
  for (var d = 0; d < a.length; d++) g.Ca.EA(a[d], c);
  return c;
};
g.Ca.Cr = function (a, c) {
  g.i.na(c);
  var d = a.shift();
  d && (d.u ? (d.J(!1, !0), setTimeout(g.Ca.Cr, 10, a, c)) : g.Ca.Cr(a, c));
  g.i.na(!1);
};
g.Ca.HK = function () {
  g.Va.C.register({
    Yd: function (a) {
      if (a.u)
        return (
          (a = g.Ca.dw(a.u).length),
          1 == a
            ? g.h.DELETE_BLOCK
            : g.h.DELETE_X_BLOCKS.replace("%1", String(a))
        );
    },
    cb: function (a) {
      if (a.u) return 0 < g.Ca.dw(a.u).length ? "enabled" : "disabled";
    },
    Aa: function (a) {
      if (a.u) {
        wc(a.u);
        var c = g.Ca.dw(a.u),
          d = g.g.Zh();
        2 > c.length
          ? g.Ca.Cr(c, d)
          : g.confirm(
              g.h.DELETE_ALL_BLOCKS.replace("%1", c.length),
              function (e) {
                e && g.Ca.Cr(c, d);
              }
            );
      }
    },
    cf: g.Va.Td.$c,
    id: "workspaceDelete",
    weight: 6,
  });
};
g.Ca.dL = function () {
  g.Ca.Rx();
  g.Ca.Qx();
  g.Ca.zK();
  g.Ca.AK();
  g.Ca.NK();
  g.Ca.HK();
};
g.Ca.KK = function () {
  g.Va.C.register({
    Yd: function () {
      return g.h.DUPLICATE_BLOCK;
    },
    cb: function (a) {
      a = a.block;
      return !a.Ub && a.ye() && a.Lc()
        ? (Ma(a.u) ? La(a.u, g.g.$v(a, !0)) : 1)
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    Aa: function (a) {
      a.block && g.duplicate(a.block);
    },
    cf: g.Va.Td.oc,
    id: "blockDuplicate",
    weight: 1,
  });
};
g.Ca.CK = function () {
  g.Va.C.register({
    Yd: function (a) {
      return a.block.vf ? g.h.REMOVE_COMMENT : g.h.ADD_COMMENT;
    },
    cb: function (a) {
      a = a.block;
      return g.g.userAgent.kf ||
        a.Ub ||
        !a.u.options.$n ||
        a.isCollapsed() ||
        !a.ge()
        ? "hidden"
        : "enabled";
    },
    Aa: function (a) {
      a = a.block;
      a.vf ? a.Gj(null) : a.Gj("");
    },
    cf: g.Va.Td.oc,
    id: "blockComment",
    weight: 2,
  });
};
g.Ca.QK = function () {
  g.Va.C.register({
    Yd: function (a) {
      return lb(a.block) ? g.h.EXTERNAL_INPUTS : g.h.INLINE_INPUTS;
    },
    cb: function (a) {
      a = a.block;
      if (!a.Ub && a.Lc() && !a.isCollapsed())
        for (var c = 1; c < a.S.length; c++)
          if (a.S[c - 1].type != g.kb && a.S[c].type != g.kb) return "enabled";
      return "hidden";
    },
    Aa: function (a) {
      a.block.Ae(!lb(a.block));
    },
    cf: g.Va.Td.oc,
    id: "blockInline",
    weight: 3,
  });
};
g.Ca.BK = function () {
  g.Va.C.register({
    Yd: function (a) {
      return a.block.isCollapsed() ? g.h.EXPAND_BLOCK : g.h.COLLAPSE_BLOCK;
    },
    cb: function (a) {
      a = a.block;
      return !a.Ub && a.Lc() ? "enabled" : "hidden";
    },
    Aa: function (a) {
      a.block.Fj(!a.block.isCollapsed());
    },
    cf: g.Va.Td.oc,
    id: "blockCollapseExpand",
    weight: 4,
  });
};
g.Ca.IK = function () {
  g.Va.C.register({
    Yd: function (a) {
      return a.block.isEnabled() ? g.h.DISABLE_BLOCK : g.h.ENABLE_BLOCK;
    },
    cb: function (a) {
      a = a.block;
      return !a.Ub && a.u.options.disable && a.ge()
        ? oc(a)
          ? "disabled"
          : "enabled"
        : "hidden";
    },
    Aa: function (a) {
      a = a.block;
      var c = g.i.wc();
      c || g.i.na(!0);
      a.ke(!a.isEnabled());
      c || g.i.na(!1);
    },
    cf: g.Va.Td.oc,
    id: "blockDisable",
    weight: 5,
  });
};
g.Ca.Px = function () {
  g.Va.C.register({
    Yd: function (a) {
      var c = a.block;
      a = p(c, !1).length;
      (c = q(c)) && (a -= p(c, !1).length);
      return 1 == a
        ? g.h.DELETE_BLOCK
        : g.h.DELETE_X_BLOCKS.replace("%1", String(a));
    },
    cb: function (a) {
      return !a.block.Ub && a.block.ye() ? "enabled" : "hidden";
    },
    Aa: function (a) {
      g.i.na(!0);
      a.block.J(!0, !0);
      g.i.na(!1);
    },
    cf: g.Va.Td.oc,
    id: "blockDelete",
    weight: 6,
  });
};
g.Ca.OK = function () {
  g.Va.C.register({
    Yd: function () {
      return g.h.HELP;
    },
    cb: function (a) {
      a = a.block;
      return ("function" == typeof a.xc ? a.xc() : a.xc) ? "enabled" : "hidden";
    },
    Aa: function (a) {
      a.block.showHelp();
    },
    cf: g.Va.Td.oc,
    id: "blockHelp",
    weight: 7,
  });
};
g.Ca.yK = function () {
  g.Ca.KK();
  g.Ca.CK();
  g.Ca.QK();
  g.Ca.BK();
  g.Ca.IK();
  g.Ca.Px();
  g.Ca.OK();
};
g.Ca.FK = function () {
  g.Ca.dL();
  g.Ca.yK();
};
g.Va = function () {
  g.Va.C = this;
  this.af = {};
  g.Ca.FK();
};
g.Va.Td = { oc: "block", $c: "workspace" };
g.Va.C = null;
g.Va.prototype.register = function (a) {
  if (this.af[a.id])
    throw Error('Menu item with id "' + a.id + '" is already registered.');
  this.af[a.id] = a;
};
g.Va.prototype.unregister = function (a) {
  if (this.af[a]) delete this.af[a];
  else throw Error('Menu item with id "' + a + '" not found.');
};
g.Va.prototype.getItem = function (a) {
  return this.af[a] ? this.af[a] : null;
};
function xc(a, c) {
  var d = [],
    e = g.Va.C.af;
  Object.keys(e).forEach(function (f) {
    f = e[f];
    if (a == f.cf) {
      var h = f.cb(c);
      "hidden" != h &&
        ((f = {
          text: "function" == typeof f.Yd ? f.Yd(c) : f.Yd,
          enabled: "enabled" == h,
          Aa: f.Aa,
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
new g.Va();
g.i.Ag = function (a, c, d) {
  g.i.Ag.v.constructor.call(this, d);
  this.XC = a;
  this.TC = c;
};
g.g.object.V(g.i.Ag, g.i.Me);
g.i.Ag.prototype.type = g.i.fk;
g.i.Ag.prototype.ya = function () {
  var a = g.i.Ag.v.ya.call(this);
  a.oldElementId = this.XC;
  a.newElementId = this.TC;
  return a;
};
g.i.Ag.prototype.ma = function (a) {
  g.i.Ag.v.ma.call(this, a);
  this.XC = a.oldElementId;
  this.TC = a.newElementId;
};
g.C.register(g.C.ea.jc, g.i.fk, g.i.Ag);
g.Bc = function (a, c) {
  g.Bc.v.constructor.call(this, a, c);
  this.Pg = a.u.zr[c];
  this.lB = a.u.zr[g.Ol[c]];
  this.Yk = new g.g.Z(0, 0);
  this.Ai = g.Bc.Eg.wA;
  this.oa = null;
};
g.g.object.V(g.Bc, g.Ba);
g.Bc.Eg = { wA: -1, nA: 0, Yl: 1 };
b = g.Bc.prototype;
b.J = function () {
  g.Bc.v.J.call(this);
  this.Ai == g.Bc.Eg.Yl && yc(this.Pg, this, this.y);
};
b.X = function () {
  return g.Bc.v.X.call(this);
};
b.sa = function () {
  return g.Bc.v.sa.call(this);
};
function wa(a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
}
function zb(a, c) {
  if (!a.I.u.Cc()) {
    var d = a.I.ce();
    if (!d.Ub) {
      var e = !1;
      if (!d.Lc()) {
        d = c.X().ce();
        if (!d.Lc()) return;
        c = a;
        e = !0;
      }
      var f = g.selected == d;
      f || d.Wq();
      var h = c.x + g.Rd + Math.floor(Math.random() * g.Dt) - a.x,
        k = c.y + g.Rd + Math.floor(Math.random() * g.Dt) - a.y;
      e && (k = -k);
      d.M && (h = c.x - g.Rd - Math.floor(Math.random() * g.Dt) - a.x);
      d.moveBy(h, k);
      f || d.pp();
    }
  }
}
b.moveTo = function (a, c) {
  if (this.Ai == g.Bc.Eg.wA) {
    var d = this.Pg;
    d.vc.splice(zc(d, c), 0, this);
    this.Ai = g.Bc.Eg.Yl;
  } else
    this.Ai == g.Bc.Eg.Yl &&
      (yc(this.Pg, this, this.y),
      (d = this.Pg),
      d.vc.splice(zc(d, c), 0, this));
  this.x = a;
  this.y = c;
};
b.moveBy = function (a, c) {
  this.moveTo(this.x + a, this.y + c);
};
function Ac(a, c) {
  a.moveTo(c.x + a.Yk.x, c.y + a.Yk.y);
}
function Bc(a, c, d) {
  a.Yk.x = c;
  a.Yk.y = d;
}
function Cc(a) {
  var c = a.oa.x - a.x,
    d = a.oa.y - a.y;
  if (0 != c || 0 != d) {
    a = a.sa();
    var e = a.Pa();
    if (!e) throw Error("block is not rendered.");
    e = g.g.Af(e);
    a.Pa().setAttribute(
      "transform",
      "translate(" + (e.x - c) + "," + (e.y - d) + ")"
    );
    rb(a, -c, -d);
  }
}
b.closest = function (a, c) {
  var d = this.lB;
  if (d.vc.length) {
    var e = this.y,
      f = this.x;
    this.x = f + c.x;
    this.y = e + c.y;
    var h = zc(d, this.y);
    c = null;
    for (var k = a, l, m = h - 1; 0 <= m && Math.abs(d.vc[m].y - this.y) <= a; )
      (l = d.vc[m]),
        ra(d.$A, this, l, !0, k) && ((c = l), (k = wa(l, this))),
        m--;
    for (; h < d.vc.length && Math.abs(d.vc[h].y - this.y) <= a; )
      (l = d.vc[h]),
        ra(d.$A, this, l, !0, k) && ((c = l), (k = wa(l, this))),
        h++;
    this.x = f;
    this.y = e;
    a = { connection: c, Ss: k };
  } else a = { connection: null, Ss: a };
  return a;
};
function lc(a, c) {
  (c && a.Ai == g.Bc.Eg.Yl) ||
    (!c && a.Ai == g.Bc.Eg.nA) ||
    a.I.Ub ||
    (c
      ? ((c = a.Pg), c.vc.splice(zc(c, a.y), 0, a), (a.Ai = g.Bc.Eg.Yl))
      : (a.Ai == g.Bc.Eg.Yl && yc(a.Pg, a, a.y), (a.Ai = g.Bc.Eg.nA)));
}
function kc(a) {
  lc(a, !0);
  var c = [];
  if (a.type != g.jb && a.type != g.kb) return c;
  if ((a = a.sa())) {
    if (a.isCollapsed()) {
      var d = [];
      a.O && d.push(a.O);
      a.W && d.push(a.W);
      a.ka && d.push(a.ka);
    } else d = a.jg(!0);
    for (var e = 0; e < d.length; e++) c.push.apply(c, kc(d[e]));
    c.length || (c[0] = a);
  }
  return c;
}
b.Ds = function (a) {
  zb(this, a);
};
b.Cv = function (a, c) {
  g.Bc.v.Cv.call(this, a, c);
  a.ra && a.Ia();
  c.ra && (Fa(c), c.Ia(), (c.Pa().style.display = "block"));
};
b.sp = function () {
  g.Bc.v.sp.call(this);
  var a = this.sa();
  a && (a.xe(), a.Ia(!1), (a = this.X()), a.ra && a.Ia());
};
b.SC = function (a) {
  return Dc(this.lB, this, a);
};
b.dg = function (a) {
  g.Bc.v.dg.call(this, a);
  var c = this.X();
  a = a.X();
  var d = c.ra,
    e = a.ra;
  d && Fa(c);
  e && Fa(a);
  d && e && (this.type == g.kb || this.type == g.Xf ? a.Ia() : c.Ia());
  if ((c = Ba(c, a)))
    (c = c.isVisible()), (a.Pa().style.display = c ? "block" : "none");
};
b.eD = function () {
  !this.isConnected() ||
    (this.oa && ra(hb(this), this, this.oa, !1)) ||
    (y(v(this) ? this.sa() : this.I), this.I.cc());
};
g.gq = function () {
  g.gq.v.constructor.call(this);
};
g.g.object.V(g.gq, g.Cl);
b = g.gq.prototype;
b.next = function () {
  var a = this.rb;
  if (!a) return null;
  (a = Ec(this, a, this.Dy)) && F(this, a);
  return a;
};
b.ah = function () {
  return this.next();
};
b.Kf = function () {
  var a = this.rb;
  if (!a) return null;
  (a = Fc(this, a, this.Dy)) && F(this, a);
  return a;
};
b.hh = function () {
  return this.Kf();
};
function Ec(a, c, d) {
  if (!c) return null;
  var e = c.ah() || c.next();
  if (d(e)) return e;
  if (e) return Ec(a, e, d);
  c = Gc(a, c.hh());
  return d(c) ? c : c ? Ec(a, c, d) : null;
}
function Fc(a, c, d) {
  if (!c) return null;
  var e = c.Kf();
  e = e ? Hc(a, e) : c.hh();
  return d(e) ? e : e ? Fc(a, e, d) : null;
}
b.Dy = function (a) {
  var c = !1;
  a = a && a.wb();
  if (
    a == g.G.types.ck ||
    a == g.G.types.lf ||
    a == g.G.types.Fc ||
    a == g.G.types.yd ||
    a == g.G.types.zd ||
    a == g.G.types.$c
  )
    c = !0;
  return c;
};
function Gc(a, c) {
  if (!c) return null;
  var d = c.next();
  return d ? d : Gc(a, c.hh());
}
function Hc(a, c) {
  if (!c.ah()) return c;
  for (c = c.ah(); c.next(); ) c = c.next();
  return Hc(a, c);
}
g.Uq = function () {
  g.Uq.v.constructor.call(this);
};
g.g.object.V(g.Uq, g.gq);
g.Uq.prototype.Dy = function (a) {
  var c = !1,
    d = a && a.wb();
  a && ((a = a.Fa), d == g.G.types.Fc && a && a.BC() && bb(a) && (c = !0));
  return c;
};
g.Bb = function (a, c, d) {
  this.N = g.g.o.L(g.g.F.qc, {}, null);
  this.N.Op = "";
  this.style = Ic(a.Sb.U(), null);
  this.Gb = a.Sb.LC(this.N, this.style);
  this.Sx = this.ra = !1;
  this.u = a;
  this.ka = this.W = this.O = null;
  this.Vp = g.g.Ik() && !!a.Ne;
  var e = this.Gb.Pb;
  e.Nf = this;
  g.K.dm(e);
  g.Bb.v.constructor.call(this, a, c, d);
  this.N.dataset
    ? (this.N.dataset.id = this.id)
    : g.g.userAgent.kf && this.N.setAttribute("data-id", this.id);
};
g.g.object.V(g.Bb, g.ne);
g.Bb.prototype.height = 0;
g.Bb.prototype.width = 0;
g.Bb.prototype.Fe = null;
g.Bb.NM = -1;
g.Bb.AE = "TEMP_COLLAPSED_WARNING_";
b = g.Bb.prototype;
b.xe = function () {
  if (!this.u.ra) throw TypeError("Workspace is headless.");
  for (var a = 0, c; (c = this.S[a]); a++) c.aa();
  c = mb(this);
  for (a = 0; a < c.length; a++) Va(c[a]);
  this.kc();
  jb(this.Gb, "blocklyDraggable", this.Lc());
  a = this.Pa();
  this.u.options.readOnly ||
    this.yI ||
    !a ||
    g.ta(a, "mousedown", this, this.wj);
  this.yI = !0;
  a.parentNode || this.u.Hb.appendChild(a);
};
b.select = function () {
  if (this.Ra && this.getParent()) this.getParent().select();
  else if (g.selected != this) {
    var a = null;
    if (g.selected) {
      a = g.selected.id;
      g.i.disable();
      try {
        wb(g.selected);
      } finally {
        g.i.enable();
      }
    }
    a = new g.i.Ag(a, this.id, this.u.id);
    g.i.Ha(a);
    g.selected = this;
    this.Wq();
  }
};
function wb(a) {
  if (g.selected == a) {
    var c = new g.i.Ag(a.id, null, a.u.id);
    c.Xc = a.u.id;
    g.i.Ha(c);
    g.selected = null;
    a.pp();
  }
}
b.rd = null;
b.Zn = null;
b.vf = null;
b.gf = null;
function mb(a) {
  var c = [];
  a.rd && c.push(a.rd);
  a.vf && c.push(a.vf);
  a.gf && c.push(a.gf);
  return c;
}
b.bt = function (a) {
  var c = this.jh;
  if (a != c) {
    g.g.o.Ep();
    g.Bb.v.bt.call(this, a);
    g.g.o.Fp();
    var d = this.Pa();
    if (!this.u.zw && d) {
      var e = this.bb();
      a
        ? (a.Pa().appendChild(d),
          (a = this.bb()),
          rb(this, a.x - e.x, a.y - e.y))
        : c && (this.u.Hb.appendChild(d), this.translate(e.x, e.y));
      this.kc();
    }
  }
};
b.bb = function () {
  var a = 0,
    c = 0,
    d = this.Vp ? this.u.Ne.wc() : null,
    e = this.Pa();
  if (e) {
    do {
      var f = g.g.Af(e);
      a += f.x;
      c += f.y;
      this.Vp &&
        this.u.Ne.Rg.firstChild == e &&
        ((f = this.u.Ne.kw()), (a += f.x), (c += f.y));
      e = e.parentNode;
    } while (e && e != this.u.Hb && e != d);
  }
  return new g.g.Z(a, c);
};
b.moveBy = function (a, c) {
  if (this.jh) throw Error("Block has parent.");
  var d = g.i.isEnabled();
  if (d) var e = new g.i.rn(this);
  var f = this.bb();
  this.translate(f.x + a, f.y + c);
  rb(this, a, c);
  d && (e.dl(), g.i.Ha(e));
  Ga(this.u);
};
b.translate = function (a, c) {
  this.Pa().setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.moveTo = function (a) {
  var c = this.bb();
  this.moveBy(a.x - c.x, a.y - c.y);
};
b.bx = function (a) {
  this.Vp
    ? this.u.Ne.ql(a.x, a.y)
    : ((this.N.Op = "translate(" + a.x + "," + a.y + ")"),
      this.N.setAttribute("transform", this.N.Op + this.N.Dp));
};
function vc(a) {
  if (a.u && !a.u.Cc() && !a.getParent() && !a.Ub) {
    var c = a.u.Bf;
    if (c && c.uL) {
      var d = c.ly,
        e = d / 2,
        f = a.bb();
      c = Math.round((f.x - e) / d) * d + e - f.x;
      d = Math.round((f.y - e) / d) * d + e - f.y;
      c = Math.round(c);
      d = Math.round(d);
      (0 == c && 0 == d) || a.moveBy(c, d);
    }
  }
}
function Jc(a) {
  var c = a.bb(),
    d = E(a);
  if (a.M) {
    a = c.x - d.width;
    var e = c.x;
  } else (a = c.x), (e = c.x + d.width);
  return new g.g.Rect(c.y, c.y + d.height, a, e);
}
b.Uo = function () {
  this.Gb.km = this.u.Sb.U();
  for (var a = 0, c; (c = this.S[a]); a++) c.Uo();
};
b.Fj = function (a) {
  this.nk != a &&
    (g.Bb.v.Fj.call(this, a), a ? this.ra && this.Ia() : Kc(this));
};
function Kc(a) {
  for (var c = a.isCollapsed(), d = 0, e; (e = a.S[d]); d++)
    e.name != g.ne.tn && e.Ob(!c);
  if (c) {
    e = mb(a);
    for (d = 0; (c = e[d]); d++) c.Ob(!1);
    d = a.toString(g.BE);
    (e = w(a, g.ne.It))
      ? e.setValue(d)
      : ((e = z(a, g.ne.tn) || M(a, g.ne.tn)), J(e, new g.Ld(d), g.ne.It));
  } else a.Ib(g.ne.tn);
}
b.wj = function (a) {
  var c = this.u && this.u.$h(a);
  if (c) {
    if (c.Ck)
      throw Error(
        "Tried to call gesture.handleBlockStart, but the gesture had already been started."
      );
    Ib(c, this);
    c.Ff = a;
  }
};
b.showHelp = function () {
  var a = "function" == typeof this.xc ? this.xc() : this.xc;
  a && window.open(a);
};
b.Bp = function (a) {
  if (this.u.options.readOnly || !this.contextMenu) var c = null;
  else (c = xc(g.Va.Td.oc, { block: this })), this.Wh && this.Wh(c);
  c && c.length && (g.$a.show(a, c, this.M), (g.$a.Br = this));
};
function rb(a, c, d) {
  if (a.ra) {
    for (var e = a.jg(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
    e = mb(a);
    for (f = 0; f < e.length; f++) Wa(e[f]);
    for (f = 0; f < a.Rh.length; f++) rb(a.Rh[f], c, d);
  }
}
b.Hj = function (a) {
  if (a) {
    var c = this.Pa();
    c.Op = "";
    c.Dp = "";
    g.rm = g.rm.concat(this.jg(!0));
    g.g.o.Ga(this.N, "blocklyDragging");
  } else (g.rm = []), g.g.o.hc(this.N, "blocklyDragging");
  for (c = 0; c < this.Rh.length; c++) this.Rh[c].Hj(a);
};
b.at = function (a) {
  g.Bb.v.at.call(this, a);
  jb(this.Gb, "blocklyDraggable", a);
};
b.Zx = function (a) {
  g.Bb.v.Zx.call(this, a);
  a = mb(this);
  for (var c = 0; c < a.length; c++) a[c].Ci();
};
b.by = function (a) {
  g.Bb.v.by.call(this, a);
  this.kc();
};
b.FD = function (a) {
  this.Im != a &&
    (this.Im = a) &&
    (this.df(this.u.Sb.U().Xt), jb(this.Gb, "blocklyInsertionMarker", !0));
};
b.Pa = function () {
  return this.N;
};
b.J = function (a, c) {
  if (this.u) {
    g.K.J();
    g.K.Ay(this.Gb.Pb);
    g.g.o.Ep();
    var d = this.u;
    g.selected == this && (wb(this), wc(this.u));
    g.$a.Br == this && g.$a.Oa();
    this.u.Fb && g.navigation.OJ(this);
    c && this.ra && (y(this, a), g.Kb.pI(this));
    this.ra = !1;
    if (this.Fe) {
      for (var e in this.Fe) clearTimeout(this.Fe[e]);
      this.Fe = null;
    }
    c = mb(this);
    for (e = 0; e < c.length; e++) c[e].J();
    g.Bb.v.J.call(this, !!a);
    g.g.o.removeNode(this.N);
    Ga(d);
    this.N = null;
    g.g.o.Fp();
  }
};
b.kc = function () {
  this.Gb.kc(this);
  for (var a = mb(this), c = 0; c < a.length; c++) a[c].kc();
  for (a = 0; (c = this.S[a]); a++)
    for (var d = 0, e; (e = c.hb[d]); d++) e.kc();
};
function Fa(a) {
  var c = Ca(a, !1);
  a.kc();
  if (!a.isCollapsed()) {
    a = 0;
    for (var d; (d = c[a]); a++) d.ra && Fa(d);
  }
}
b.LI = function () {
  return this.vf;
};
b.Gj = function (a) {
  if (!g.Comment) throw Error("Missing require for Blockly.Comment");
  this.Pe.text != a &&
    (g.Bb.v.Gj.call(this, a),
    (a = null != a),
    !!this.vf == a
      ? ((a = this.vf),
        a.ol
          ? (a.ol.value = a.qd.text)
          : a.$k && (a.$k.firstChild.textContent = a.qd.text))
      : (a
          ? (this.Zn = this.vf = new g.Comment(this))
          : (this.vf.J(), (this.Zn = this.vf = null)),
        this.ra && (this.Ia(), this.cc())));
};
b.Zm = function (a, c) {
  if (!g.Sn) throw Error("Missing require for Blockly.Warning");
  this.Fe || (this.Fe = Object.create(null));
  var d = c || "";
  if (d) this.Fe[d] && (clearTimeout(this.Fe[d]), delete this.Fe[d]);
  else for (var e in this.Fe) clearTimeout(this.Fe[e]), delete this.Fe[e];
  if (this.u.Cc()) {
    var f = this;
    this.Fe[d] = setTimeout(function () {
      f.u && (delete f.Fe[d], f.Zm(a, d));
    }, 100);
  } else {
    this.Ub && (a = null);
    c = !1;
    if ("string" == typeof a) {
      e = mc(this);
      for (var h = null; e; ) e.isCollapsed() && (h = e), (e = mc(e));
      h && h.Zm(g.h.COLLAPSED_WARNINGS_WARNING, g.Bb.AE);
      this.gf || ((this.gf = new g.Sn(this)), (c = !0));
      Xa(this.gf, a, d);
    } else
      this.gf && !d
        ? (this.gf.J(), (c = !0))
        : this.gf &&
          ((c = this.gf.Dd()),
          Xa(this.gf, "", d),
          (e = this.gf.Dd()) || this.gf.J(),
          (c = c != e));
    c && this.ra && (this.Ia(), this.cc());
  }
};
b.Xm = function (a) {
  this.rd && this.rd !== a && this.rd.J();
  a && ((a.R = this), (this.rd = a), Va(a));
  this.ra && (this.Ia(), this.cc());
};
b.ke = function (a) {
  this.isEnabled() != a &&
    (g.Bb.v.ke.call(this, a), this.ra && !oc(this) && Fa(this));
};
b.si = function (a) {
  this.ra && this.Gb.ZD(a);
};
b.Wq = function () {
  jb(this.Gb, "blocklySelected", !0);
};
b.pp = function () {
  jb(this.Gb, "blocklySelected", !1);
};
b.yp = function (a) {
  jb(this.Gb, "blocklyDraggingDelete", a);
};
b.cw = function () {
  return this.style.Ui;
};
b.df = function (a) {
  g.Bb.v.df.call(this, a);
  a = Lc(this.u.Sb.U(), this.nd);
  this.Gb.Jb(a.style);
  this.style = a.style;
  this.ll = a.name;
  this.kc();
};
b.Jb = function (a) {
  var c = Ic(this.u.Sb.U(), a);
  this.ll = a;
  if (c)
    (this.Zg = c.Zg),
      this.Gb.Jb(c),
      (this.nd = c.Ui),
      (this.style = c),
      this.kc();
  else throw Error("Invalid style name: " + a);
};
function sb(a) {
  do {
    var c = a.Pa(),
      d = c.parentNode,
      e = d.childNodes;
    e[e.length - 1] !== c && d.appendChild(c);
    a = a.getParent();
  } while (a);
}
b.Ce = function (a, c) {
  g.Bb.v.Ce.call(this, a, c);
  this.ra && (this.Ia(), this.cc());
};
b.Be = function (a, c) {
  g.Bb.v.Be.call(this, a, c);
  this.ra && (this.Ia(), this.cc());
};
b.td = function (a, c) {
  g.Bb.v.td.call(this, a, c);
  this.ra && (this.Ia(), this.cc());
};
b.Ae = function (a) {
  g.Bb.v.Ae.call(this, a);
  this.ra && (this.Ia(), this.cc());
};
b.Ib = function (a, c) {
  a = g.Bb.v.Ib.call(this, a, c);
  this.ra && (this.Ia(), this.cc());
  return a;
};
b.ex = function (a, c) {
  g.Bb.v.ex.call(this, a, c);
  this.ra && (this.Ia(), this.cc());
};
b.Gg = function (a, c) {
  a = g.Bb.v.Gg.call(this, a, c);
  this.ra && (this.Ia(), this.cc());
  return a;
};
function Ea(a, c) {
  a.ka && lc(a.ka, c);
  a.O && lc(a.O, c);
  if (a.W) {
    lc(a.W, c);
    var d = a.W.sa();
    d && Ea(d, c);
  }
  if (!a.nk)
    for (d = 0; d < a.S.length; d++) {
      var e = a.S[d].connection;
      e && (lc(e, c), (e = e.sa()) && Ea(e, c));
    }
}
b.jg = function (a) {
  var c = [];
  if (a || this.ra)
    if (
      (this.O && c.push(this.O),
      this.ka && c.push(this.ka),
      this.W && c.push(this.W),
      a || !this.nk)
    ) {
      a = 0;
      for (var d; (d = this.S[a]); a++) d.connection && c.push(d.connection);
    }
  return c;
};
b.os = function () {
  return g.Bb.v.os.call(this);
};
b.gw = function (a, c) {
  return g.Bb.v.gw.call(this, a, c);
};
b.To = function (a) {
  return new g.Bc(this, a);
};
b.cc = function () {
  if (this.u && !this.u.Cc()) {
    var a = this.ce();
    if (!a.Ub)
      for (var c = this.jg(!1), d = 0, e; (e = c[d]); d++) {
        e.isConnected() && v(e) && e.sa().cc();
        for (var f = e.SC(g.Rd), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            (k.X().ce() != a && (v(e) ? zb(k, e) : zb(e, k)));
      }
  }
};
function tb(a) {
  var c = g.i.wc();
  setTimeout(function () {
    g.i.na(c);
    vc(a);
    g.i.na(!1);
  }, g.fq / 2);
  setTimeout(function () {
    g.i.na(c);
    a.cc();
    g.i.na(!1);
  }, g.fq);
}
function ib(a, c, d) {
  (c.type != g.kb && c.type != g.jb) || a.moveBy(d.x - c.x, d.y - c.y);
}
b.getParent = function () {
  return g.Bb.v.getParent.call(this);
};
b.ce = function () {
  return g.Bb.v.ce.call(this);
};
b.Ia = function (a) {
  if (!this.Sx) {
    this.Sx = !0;
    try {
      this.ra = !0;
      g.g.o.Ep();
      this.isCollapsed() && Kc(this);
      this.u.Sb.Ia(this);
      var c = this.bb();
      this.ka && Ac(this.ka, c);
      this.O && Ac(this.O, c);
      for (var d = 0; d < this.S.length; d++) {
        var e = this.S[d].connection;
        e && (Ac(e, c), e.isConnected() && Cc(e));
      }
      this.W && (Ac(this.W, c), this.W.isConnected() && Cc(this.W));
      if (!1 !== a) {
        var f = this.getParent();
        f ? f.Ia(!0) : Ga(this.u);
      }
      g.g.o.Fp();
      this.Cy();
    } finally {
      this.Sx = !1;
    }
  }
};
b.Cy = function () {
  this.u.Fb && this.Gb.no && this.u.Nb().draw();
  this.u.Fb && this.Gb.Vw && this.u.ae(g.navigation.Dn).draw();
};
b.ri = function (a) {
  this.Gb.ri(a);
};
b.ui = function (a) {
  this.Gb.ui(a);
};
function E(a) {
  var c = a.height,
    d = a.width,
    e = q(a);
  e &&
    ((e = E(e)),
    (a = a.u.Sb.U().gu),
    (c += e.height - a),
    (d = Math.max(d, e.width)));
  return { height: c, width: d };
}
g.Bl = function (a) {
  this.vc = [];
  this.$A = a;
};
function Mc(a, c, d) {
  if (!a.vc.length) return -1;
  var e = zc(a, d);
  if (e >= a.vc.length) return -1;
  d = c.y;
  for (var f = e; 0 <= f && a.vc[f].y == d; ) {
    if (a.vc[f] == c) return f;
    f--;
  }
  for (; e < a.vc.length && a.vc[e].y == d; ) {
    if (a.vc[e] == c) return e;
    e++;
  }
  return -1;
}
function zc(a, c) {
  if (!a.vc.length) return 0;
  for (var d = 0, e = a.vc.length; d < e; ) {
    var f = Math.floor((d + e) / 2);
    if (a.vc[f].y < c) d = f + 1;
    else if (a.vc[f].y > c) e = f;
    else {
      d = f;
      break;
    }
  }
  return d;
}
function yc(a, c, d) {
  c = Mc(a, c, d);
  if (-1 == c) throw Error("Unable to find connection in connectionDB.");
  a.vc.splice(c, 1);
}
function Dc(a, c, d) {
  function e(n) {
    var t = h - f[n].x,
      u = k - f[n].y;
    Math.sqrt(t * t + u * u) <= d && m.push(f[n]);
    return u < d;
  }
  var f = a.vc,
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
g.Bl.aa = function (a) {
  var c = [];
  c[g.jb] = new g.Bl(a);
  c[g.Wf] = new g.Bl(a);
  c[g.kb] = new g.Bl(a);
  c[g.Xf] = new g.Bl(a);
  return c;
};
g.i.Ih = function (a, c) {
  g.i.Ih.v.constructor.call(this, c);
  this.RD = a;
};
g.g.object.V(g.i.Ih, g.i.Me);
g.i.Ih.prototype.type = g.i.hA;
g.i.Ih.prototype.ya = function () {
  var a = g.i.Ih.v.ya.call(this);
  a.themeName = this.RD;
  return a;
};
g.i.Ih.prototype.ma = function (a) {
  g.i.Ih.v.ma.call(this, a);
  this.RD = a.themeName;
};
g.C.register(g.C.ea.jc, g.i.hA, g.i.Ih);
g.i.Oh = function (a, c, d, e) {
  g.i.Oh.v.constructor.call(this, e);
  this.ic = a;
  this.ac = c;
  this.scale = d;
};
g.g.object.V(g.i.Oh, g.i.Me);
g.i.Oh.prototype.type = g.i.sA;
g.i.Oh.prototype.ya = function () {
  var a = g.i.Oh.v.ya.call(this);
  a.viewTop = this.ic;
  a.viewLeft = this.ac;
  a.scale = this.scale;
  return a;
};
g.i.Oh.prototype.ma = function (a) {
  g.i.Oh.v.ma.call(this, a);
  this.ic = a.viewTop;
  this.ac = a.viewLeft;
  this.scale = a.scale;
};
g.C.register(g.C.ea.jc, g.i.sA, g.i.Oh);
g.Yj = function (a, c) {
  this.zm = a;
  this.ly = c.spacing;
  this.IC = c.length;
  this.BJ = (this.Lw = a.firstChild) && this.Lw.nextSibling;
  this.uL = c.snap;
};
g.Yj.prototype.Ej = 1;
g.Yj.prototype.J = function () {
  this.zm = null;
};
g.Yj.prototype.update = function (a) {
  this.Ej = a;
  var c = this.ly * a || 100;
  this.zm.setAttribute("width", c);
  this.zm.setAttribute("height", c);
  c = Math.floor(this.ly / 2) + 0.5;
  var d = c - this.IC / 2,
    e = c + this.IC / 2;
  c *= a;
  d *= a;
  e *= a;
  Nc(this.Lw, a, d, e, c, c);
  Nc(this.BJ, a, c, c, d, e);
};
function Nc(a, c, d, e, f, h) {
  a &&
    (a.setAttribute("stroke-width", c),
    a.setAttribute("x1", d),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h));
}
g.Yj.prototype.moveTo = function (a, c) {
  this.zm.setAttribute("x", a);
  this.zm.setAttribute("y", c);
  (g.g.userAgent.kf || g.g.userAgent.Uj) && this.update(this.Ej);
};
g.Yj.ab = function (a, c, d) {
  a = g.g.o.L(
    g.g.F.Pz,
    { id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse" },
    d
  );
  0 < c.length && 0 < c.spacing
    ? (g.g.o.L(g.g.F.Bn, { stroke: c.colour }, a),
      1 < c.length && g.g.o.L(g.g.F.Bn, { stroke: c.colour }, a))
    : g.g.o.L(g.g.F.Bn, {}, a);
  return a;
};
g.Hz = function (a) {
  this.Vh = this.yf = null;
  this.Tk = {};
  this.s = a;
};
function Oc(a, c) {
  var d = a.Tk[c];
  if (d) d.J(), delete a.Tk[c];
  else
    throw Error(
      "Marker with id " +
        c +
        " does not exist. Can only unregistermarkers that exist."
    );
}
b = g.Hz.prototype;
b.Nb = function () {
  return this.yf;
};
b.ae = function (a) {
  return this.Tk[a];
};
function Pc(a, c) {
  a.yf && a.yf.ue && a.yf.ue.J();
  a.yf = c;
  a.yf &&
    ((c = a.yf),
    (c = new g.m.Eh(a.s, a.s.Sb.U(), c)),
    (a.yf.ue = c),
    a.ri(a.yf.ue.ab()));
}
b.ri = function (a) {
  a ? (this.s.Hb.appendChild(a), (this.Vh = a)) : (this.Vh = null);
};
b.ui = function (a) {
  a
    ? this.s.Hb &&
      (this.Vh ? this.s.Hb.insertBefore(a, this.Vh) : this.s.Hb.appendChild(a))
    : (this.li = null);
};
b.J = function () {
  for (var a = Object.keys(this.Tk), c = 0, d; (d = a[c]); c++) Oc(this, d);
  this.Tk = null;
  this.yf && (this.yf.J(), (this.yf = null));
};
g.mA = function (a, c) {
  this.s = a;
  this.yi = c;
  this.Hp = [];
  this.Kg = Object.create(null);
};
b = g.mA.prototype;
b.Xg = function () {
  return this.yi;
};
b.Ap = function (a) {
  var c = this.yi;
  this.yi = a;
  if ((a = aa(this.s))) c && g.g.o.hc(a, c.hg()), g.g.o.Ga(a, this.yi.hg());
  for (c = 0; (a = this.Hp[c]); c++) a.Um();
  c = 0;
  a = Object.keys(this.Kg);
  for (var d; (d = a[c]); c++)
    for (var e = 0, f; (f = this.Kg[d][e]); e++)
      f.element.style[f.propertyName] = (this.yi && xa(this.yi, d)) || "";
  g.Kc();
};
b.subscribe = function (a, c, d) {
  this.Kg[c] || (this.Kg[c] = []);
  this.Kg[c].push({ element: a, propertyName: d });
  a.style[d] = (this.yi && xa(this.yi, c)) || "";
};
b.unsubscribe = function (a) {
  if (a)
    for (var c = Object.keys(this.Kg), d = 0, e; (e = c[d]); d++) {
      for (var f = this.Kg[e], h = f.length - 1; 0 <= h; h--)
        f[h].element === a && f.splice(h, 1);
      this.Kg[e].length || delete this.Kg[e];
    }
};
b.J = function () {
  this.Kg = this.Hp = this.yi = this.If = null;
};
g.se = function (a, c) {
  g.se.v.constructor.call(this, a, c);
  this.gs = !1;
  this.Oe = Object.create(null);
  this.JD = this.jp = 0;
  this.yC = this.ux = null;
};
g.g.object.V(g.se, g.wg);
g.se.vH = 5;
g.se.wH = 6;
b = g.se.prototype;
b.Gv = function (a) {
  this.yC = this.zc.options.Ab && this.zc.options.Ab.Hx;
  g.se.v.Gv.call(this, a);
  !this.ds && g.Touch.ls(a) && Qc(this, a);
};
b.dm = function (a) {
  this.ux = g.ta(document, "mousedown", null, this.fJ.bind(this), !0);
  this.Ks = g.ta(document, "mousemove", null, this.Am.bind(this), !0);
  this.Ls = g.ta(document, "mouseup", null, this.Xr.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
b.fJ = function (a) {
  !this.Cc() && g.Touch.ls(a) && (Qc(this, a), this.gs && g.sj());
};
b.Am = function (a) {
  if (this.Cc()) g.Touch.ky(a) && g.se.v.Am.call(this, a);
  else if (this.gs) {
    if (g.Touch.ls(a)) {
      this.Oe[g.Touch.Wr(a)] = Rc(this, a);
      var c = Object.keys(this.Oe);
      if (this.yC && 2 === c.length) {
        c = Object.keys(this.Oe);
        c = g.g.Z.Fv(this.Oe[c[0]], this.Oe[c[1]]) / this.JD;
        if (0 < this.jp && Infinity > this.jp) {
          var d = c - this.jp;
          d = 0 < d ? d * g.se.vH : d * g.se.wH;
          var e = this.zc,
            f = g.g.Zo(a, r(e), oa(e));
          e.zoom(f.x, f.y, d);
        }
        this.jp = c;
        a.preventDefault();
      } else g.se.v.Am.call(this, a);
    }
    g.sj();
  } else g.se.v.Am.call(this, a);
};
b.Xr = function (a) {
  if (g.Touch.ls(a) && !this.Cc()) {
    var c = g.Touch.Wr(a);
    this.Oe[c] && delete this.Oe[c];
    2 > Object.keys(this.Oe).length &&
      ((this.Oe = Object.create(null)), (this.jp = 0));
  }
  !this.gs || this.Cc()
    ? g.Touch.ky(a) && g.se.v.Xr.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.J());
};
b.J = function () {
  g.se.v.J.call(this);
  this.ux && g.Na(this.ux);
};
function Qc(a, c) {
  a.Oe[g.Touch.Wr(c)] = Rc(a, c);
  var d = Object.keys(a.Oe);
  2 == d.length &&
    ((a.JD = g.g.Z.Fv(a.Oe[d[0]], a.Oe[d[1]])),
    (a.gs = !0),
    c.preventDefault());
}
function Rc(a, c) {
  return a.zc
    ? new g.g.Z(
        c.pageX ? c.pageX : c.changedTouches[0].pageX,
        c.pageY ? c.pageY : c.changedTouches[0].pageY
      )
    : null;
}
g.zA = function (a) {
  this.Dx = a;
  this.Nn = Object.create(null);
};
b = g.zA.prototype;
b.Gw = null;
b.J = function () {
  this.Nn = this.Dx = null;
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
    e && e.play && (this.Nn[c] = e);
  }
};
b.preload = function () {
  for (var a in this.Nn) {
    var c = this.Nn[a];
    c.volume = 0.01;
    var d = c.play();
    void 0 !== d ? d.then(c.pause).catch(function () {}) : c.pause();
    if (g.g.userAgent.Il || g.g.userAgent.xz) break;
  }
};
b.play = function (a, c) {
  var d = this.Nn[a];
  d
    ? ((a = new Date()),
      (null != this.Gw && a - this.Gw < g.TG) ||
        ((this.Gw = a),
        (d = g.g.userAgent.Il || g.g.userAgent.qn ? d : d.cloneNode()),
        (d.volume = void 0 === c ? 1 : c),
        d.play()))
    : this.Dx && this.Dx.Hg.play(a, c);
};
g.BA = function (a) {
  this.ho = a;
  this.ab();
};
b = g.BA.prototype;
b.lb = null;
b.ho = null;
b.ab = function () {
  this.lb ||
    ((this.lb = g.g.o.L(
      g.g.F.hk,
      {
        xmlns: g.g.o.Oq,
        "xmlns:html": g.g.o.Gl,
        "xmlns:xlink": g.g.o.rf,
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible",
      },
      null
    )),
    this.ho.appendChild(this.lb));
};
b.ql = function (a, c) {
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.lb.style.display = "block";
  g.g.o.xp(this.lb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.kw = function () {
  return g.g.Af(this.lb);
};
b.pr = function (a) {
  if (!a)
    throw Error(
      "Couldn't clear and hide the drag surface: missing new surface."
    );
  var c = this.lb.childNodes[0],
    d = this.lb.childNodes[1];
  if (
    !(
      c &&
      d &&
      g.g.o.ow(c, "blocklyBlockCanvas") &&
      g.g.o.ow(d, "blocklyBubbleCanvas")
    )
  )
    throw Error(
      "Couldn't clear and hide the drag surface. A node was missing."
    );
  null != this.Mx ? g.g.o.Hk(c, this.Mx) : a.insertBefore(c, a.firstChild);
  g.g.o.Hk(d, c);
  this.lb.style.display = "none";
  if (this.lb.childNodes.length) throw Error("Drag surface was not cleared.");
  g.g.o.xp(this.lb, "");
  this.Mx = null;
};
g.Cb = function (a, c, d) {
  g.Cb.v.constructor.call(this, a);
  this.dd = a.dd || g.Cb.XI;
  this.zp = a.zp || g.Cb.qL;
  this.zr = g.Bl.aa(this.bo);
  c && (this.Ne = c);
  d && (this.wl = d);
  this.rt = !!this.wl && g.g.Ik();
  this.Hg = new g.zA(a.yc);
  this.Bf = this.options.nw ? new g.Yj(this.options.nw, a.gC) : null;
  this.Ze = new g.Hz(this);
  this.xy = {};
  this.Xv = {};
  g.ga && g.ga.yk && Sc(this, g.rc, g.ga.yk);
  g.tA && g.tA.yk && Sc(this, g.pH, g.tA.yk);
  g.Da && g.Da.yk && (Sc(this, g.Mn, g.Da.yk), D(this, g.Da.SJ));
  this.Dc = this.options.yc
    ? this.options.yc.Dc
    : new g.mA(this, this.options.EL || g.Jh.Fi);
  this.Dc.Hp.push(this);
  this.Sb = g.m.aa(this.options.qp || "geras", this.Xg(), this.options.rp);
  this.Yu = null;
  this.Fb = !1;
  this.nt = [];
};
g.g.object.V(g.Cb, g.Wb);
b = g.Cb.prototype;
b.Zs = null;
b.ra = !0;
b.ji = !0;
b.lg = !1;
b.Po = !1;
b.Vx = !0;
b.scrollX = 0;
b.scrollY = 0;
b.yB = null;
b.scale = 1;
b.cD = 1;
b.dD = 0;
b.$C = 0;
b.vd = null;
b.Ta = null;
b.pa = null;
b.Ma = null;
b.Cd = null;
b.Ne = null;
b.wl = null;
b.rt = !1;
b.bs = !1;
b.xw = null;
b.HC = null;
b.gb = null;
b.uC = null;
b.yw = !0;
b.ri = function (a) {
  this.Ze.ri(a);
};
b.ui = function (a) {
  this.Ze.ui(a);
};
b.ae = function (a) {
  return this.Ze ? this.Ze.ae(a) : null;
};
b.Nb = function () {
  return this.Ze ? this.Ze.Nb() : null;
};
b.Xg = function () {
  return this.Dc.Xg();
};
b.Ap = function (a) {
  a || (a = g.Jh.Fi);
  this.Dc.Ap(a);
};
b.Um = function () {
  this.N && this.Sb.Ox(this.N, this.Xg());
  Tc(
    B(this, !1).filter(function (c) {
      return void 0 !== c.ll;
    })
  );
  Uc(this);
  this.Ma && this.Ma.Um();
  this.isVisible() && this.Ob(!0);
  var a = new g.i.Ih(this.Xg().name, this.id);
  g.i.Ha(a);
};
function Tc(a) {
  for (var c = 0, d; (d = a[c]); c++) {
    var e = d.ll;
    if (e && (d.Jb(e), d.rd)) {
      var f = d.rd.s;
      if (f && B(f, !1)) {
        var h = B(f, !1);
        for (d = 0; d < h.length; d++) (e = h[d]), e.Jb(e.ll);
        if ((d = f.mc()))
          for (f = B(d.s, !1), d = 0; d < f.length; d++) (e = f[d]), e.Jb(e.ll);
      }
    }
  }
}
function oa(a) {
  if (a.yw) {
    var c = r(a).getScreenCTM();
    c && ((a.uC = c.inverse()), (a.yw = !1));
  }
  return a.uC;
}
b.Rp = function () {
  this.yw = !0;
};
b.isVisible = function () {
  return this.ji;
};
function cb(a, c) {
  var d = 0,
    e = 0,
    f = 1;
  if (g.g.o.containsNode(a.Hb, c) || g.g.o.containsNode(a.og, c)) f = a.scale;
  do {
    var h = g.g.Af(c);
    if (c == a.Hb || c == a.og) f = 1;
    d += h.x * f;
    e += h.y * f;
    c = c.parentNode;
  } while (c && c != r(a));
  return new g.g.Z(d, e);
}
function aa(a) {
  if (!a.xw)
    for (var c = a.N; c; ) {
      if (
        -1 !=
        (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
      ) {
        a.xw = c;
        break;
      }
      c = c.parentNode;
    }
  return a.xw;
}
b.ab = function (a) {
  this.N = g.g.o.L(g.g.F.qc, { class: "blocklyWorkspace" }, null);
  a &&
    ((this.ud = g.g.o.L(
      g.g.F.Hc,
      { height: "100%", width: "100%", class: a },
      this.N
    )),
    "blocklyMainBackground" == a && this.Bf
      ? (this.ud.style.fill = "url(#" + this.Bf.zm.id + ")")
      : this.Dc.subscribe(this.ud, "workspaceBackgroundColour", "fill"));
  this.Hb = g.g.o.L(g.g.F.qc, { class: "blocklyBlockCanvas" }, this.N);
  this.og = g.g.o.L(g.g.F.qc, { class: "blocklyBubbleCanvas" }, this.N);
  this.lg ||
    (g.ta(this.N, "mousedown", this, this.wj, !1, !0),
    g.ta(this.N, "wheel", this, this.nK));
  if (this.options.Ho) {
    if (!g.Cu) throw Error("Missing require for Blockly.Toolbox");
    this.Ma = new (g.C.Qr(g.C.ea.Sq, this.options))(this);
  }
  this.Bf && this.Bf.update(this.scale);
  Vc(this);
  Pc(this.Ze, new g.Cl());
  a = this.Ze;
  var c = g.navigation.Dn,
    d = new g.Gn();
  a.Tk[c] && Oc(a, c);
  var e = new g.m.Eh(a.s, a.s.Sb.U(), d);
  d.ue = e;
  a.ui(d.ue.ab());
  a.Tk[c] = d;
  this.Sb.ab(this.N, this.Xg());
  return this.N;
};
b.J = function () {
  this.ra = !1;
  this.Cd && this.Cd.cancel();
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.og = this.Hb = null;
  this.Ma && (this.Ma.J(), (this.Ma = null));
  this.pa && (this.pa.J(), (this.pa = null));
  this.vd && (this.vd.J(), (this.vd = null));
  this.Ta && (this.Ta.J(), (this.Ta = null));
  this.yl && (this.yl.J(), (this.yl = null));
  this.Hg && (this.Hg.J(), (this.Hg = null));
  this.Bf && (this.Bf.J(), (this.Bf = null));
  this.Sb.J();
  this.Ze && (this.Ze.J(), (this.Ze = null));
  g.Cb.v.J.call(this);
  if (this.Dc) {
    var a = this.Dc,
      c = a.Hp.indexOf(this);
    if (0 > c)
      throw Error(
        "Cannot unsubscribe a workspace that hasn't been subscribed."
      );
    a.Hp.splice(c, 1);
    this.Dc.unsubscribe(this.ud);
    this.options.yc || (this.Dc.J(), (this.Dc = null));
  }
  this.Xv = this.xy = this.zr = null;
  this.options.yc ||
    ((a = r(this)) && a.parentNode && g.g.o.removeNode(a.parentNode));
  this.Zs && (g.Na(this.Zs), (this.Zs = null));
};
b.gh = function (a, c) {
  return new g.Bb(this, a, c);
};
function Wc(a) {
  if (!g.md) throw Error("Missing require for Blockly.Trashcan");
  a.vd = new g.md(a);
  var c = a.vd.ab();
  a.N.insertBefore(c, a.Hb);
}
function Xc(a) {
  if (!g.Ju) throw Error("Missing require for Blockly.ZoomControls");
  a.yl = new g.Ju(a);
  var c = a.yl.ab();
  a.N.appendChild(c);
}
function Yc(a, c) {
  var d = new g.Pd({
    parentWorkspace: a,
    rtl: a.M,
    oneBasedIndex: a.options.Hf,
    horizontalLayout: a.Fd,
    renderer: a.options.qp,
    rendererOverrides: a.options.rp,
  });
  d.La = a.options.La;
  if (a.Fd) {
    if (!g.Vt) throw Error("Missing require for Blockly.HorizontalFlyout");
    a.pa = new g.Vt(d);
  } else {
    if (!g.Nh) throw Error("Missing require for Blockly.VerticalFlyout");
    a.pa = new g.Nh(d);
  }
  a.pa.cm = !1;
  a.pa.s.Ob(!0);
  return a.pa.ab(c);
}
b.mc = function (a) {
  return this.pa || a ? this.pa : this.Ma ? this.Ma.mc() : null;
};
function Ga(a) {
  a.Vx && a.ra && (a.Ta && a.Ta.resize(), a.Rp());
}
b.resize = function () {
  this.Ma && this.Ma.position();
  this.pa && this.pa.position();
  this.vd && this.vd.position();
  this.yl && this.yl.position();
  this.Ta && this.Ta.resize();
  this.Rp();
  Vc(this);
};
function Db(a) {
  var c = g.g.RI();
  g.g.Z.zf(a.HC, c) || ((a.HC = c), a.Rp(), Vc(a));
}
function r(a) {
  if (!a.Yu)
    for (var c = a.N; c; ) {
      if ("svg" == c.tagName) {
        a.Yu = c;
        break;
      }
      c = c.parentNode;
    }
  return a.Yu;
}
function ca(a) {
  if (g.i.isEnabled()) {
    var c = a.scale,
      d = -a.scrollY,
      e = -a.scrollX;
    (c == a.cD && 1 > Math.abs(d - a.dD) && 1 > Math.abs(e - a.$C)) ||
      ((a.cD = c),
      (a.dD = d),
      (a.$C = e),
      (a = new g.i.Oh(d, e, c, a.id)),
      g.i.Ha(a));
  }
}
b.translate = function (a, c) {
  if (this.rt && this.bs) this.wl.ql(a, c);
  else {
    var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
    this.Hb.setAttribute("transform", d);
    this.og.setAttribute("transform", d);
  }
  if (this.Ne) {
    d = this.Ne;
    var e = this.scale;
    d.Ej = e;
    d.Rg.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")"
    );
  }
  this.Bf && this.Bf.moveTo(a, c);
  ca(this);
};
function qa(a) {
  if (a.rt) {
    a.bs = !1;
    var c = a.wl.kw();
    a.wl.pr(a.N);
    c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
    a.Hb.setAttribute("transform", c);
    a.og.setAttribute("transform", c);
  }
}
function pa(a) {
  if (a.rt && !a.bs) {
    a.bs = !0;
    var c = a.Hb.previousSibling,
      d = parseInt(r(a).getAttribute("width"), 10),
      e = parseInt(r(a).getAttribute("height"), 10),
      f = g.g.Af(a.Hb),
      h = a.wl,
      k = a.Hb,
      l = a.og,
      m = a.scale;
    if (h.lb.childNodes.length) throw Error("Already dragging a block.");
    h.Mx = c;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    h.lb.setAttribute("width", d);
    h.lb.setAttribute("height", e);
    h.lb.appendChild(k);
    h.lb.appendChild(l);
    h.lb.style.display = "block";
    a.wl.ql(f.x, f.y);
  }
}
b.Yg = function () {
  var a = this.dd();
  return a ? a.Qb / this.scale : 0;
};
b.Ob = function (a) {
  this.ji = a;
  if (this.N)
    if (
      (this.Ta && this.Ta.jl(a),
      this.mc() && this.mc().jl(a),
      (r(this).style.display = a ? "block" : "none"),
      this.Ma && this.Ma.Ob(a),
      a)
    ) {
      a = B(this, !1);
      for (var c = a.length - 1; 0 <= c; c--) a[c].Uo();
      this.Ia();
      this.Ma && this.Ma.position();
    } else g.Kc(!0);
};
b.Ia = function () {
  for (var a = B(this, !1), c = a.length - 1; 0 <= c; c--) a[c].Ia(!1);
  if (this.Cd) for (a = this.Cd.xm(), c = 0; c < a.length; c++) a[c].Ia(!1);
  c = this.Ze;
  c.s.Fb && c.Vh && c.s.Nb().draw();
};
b.Ps = function (a) {
  if (
    this.ra &&
    a.tagName &&
    !(a.getElementsByTagName("block").length >= Ka(this))
  )
    if ((this.Cd && this.Cd.cancel(), "comment" == a.tagName.toLowerCase())) {
      g.i.disable();
      try {
        var c = g.Zl.tm(a),
          d = parseInt(a.getAttribute("x"), 10),
          e = parseInt(a.getAttribute("y"), 10);
        isNaN(d) || isNaN(e) || (this.M && (d = -d), c.moveBy(d + 50, e + 50));
      } finally {
        g.i.enable();
      }
      g.i.isEnabled() && g.AA.zO(c);
      c.select();
    } else
      a: {
        g.i.disable();
        try {
          var f = g.T.vk(a, this),
            h = this.ae(g.navigation.Dn).rb;
          if (this.Fb && h && h.Fm) {
            g.navigation.tC(f, h.Fa);
            break a;
          }
          var k = parseInt(a.getAttribute("x"), 10),
            l = parseInt(a.getAttribute("y"), 10);
          if (!isNaN(k) && !isNaN(l)) {
            this.M && (k = -k);
            do {
              a = !1;
              var m = B(this, !1);
              c = 0;
              for (var n; (n = m[c]); c++) {
                var t = n.bb();
                if (1 >= Math.abs(k - t.x) && 1 >= Math.abs(l - t.y)) {
                  a = !0;
                  break;
                }
              }
              if (!a) {
                var u = f.jg(!1);
                c = 0;
                for (var x; (x = u[c]); c++)
                  if (x.closest(g.Rd, new g.g.Z(k, l)).connection) {
                    a = !0;
                    break;
                  }
              }
              a && ((k = this.M ? k - g.Rd : k + g.Rd), (l += 2 * g.Rd));
            } while (a);
            f.moveBy(k, l);
          }
        } finally {
          g.i.enable();
        }
        g.i.isEnabled() && !f.Ra && g.i.Ha(new g.i.hq(f));
        f.select();
      }
};
function Uc(a) {
  (a = a.lg ? a.gb : a) &&
    !a.Cd &&
    a.Ma &&
    a.Ma.mc() &&
    ((a = a.Ma), a.xb && a.xb.eh() && a.xb.$i.length && a.pa.show(a.xb.$i));
}
b.Dj = function (a, c) {
  g.Cb.v.Dj.call(this, a, c);
  Uc(this);
};
b.Xh = function (a) {
  g.Cb.v.Xh.call(this, a);
  Uc(this);
};
b.xf = function (a, c, d) {
  a = g.Cb.v.xf.call(this, a, c, d);
  Uc(this);
  return a;
};
function Vc(a) {
  a.oB = a.vd && a.N.parentNode ? a.vd.um() : null;
  a.nB = a.pa
    ? a.pa.um()
    : a.Ma && "function" == typeof a.Ma.um
    ? a.Ma.um()
    : null;
}
function ob(a, c) {
  return a.oB && a.oB.contains(c.clientX, c.clientY)
    ? g.Lt
    : a.nB && a.nB.contains(c.clientX, c.clientY)
    ? g.$y
    : g.Zy;
}
b.wj = function (a) {
  var c = this.$h(a);
  c && Gb(c, a, this);
};
b.oy = function (a, c) {
  a = g.g.Zo(a, r(this), oa(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.yB = g.g.Z.pm(c, a);
};
b.Cc = function () {
  return null != this.Cd && this.Cd.Cc();
};
function Zc(a) {
  return (
    (a.options.fd && a.options.fd.scrollbars) ||
    (a.options.fd && a.options.fd.Nj) ||
    (a.options.fd && a.options.fd.Zi) ||
    (a.options.Ab && a.options.Ab.controls) ||
    (a.options.Ab && a.options.Ab.Nj) ||
    (a.options.Ab && a.options.Ab.Hx)
  );
}
b.Lc = function () {
  return (
    (this.options.fd && this.options.fd.scrollbars) ||
    (this.options.fd && this.options.fd.Nj) ||
    (this.options.fd && this.options.fd.Zi) ||
    (this.options.Ab && this.options.Ab.Nj) ||
    (this.options.Ab && this.options.Ab.Hx)
  );
};
b.nK = function (a) {
  if (g.wg.Fk()) a.preventDefault(), a.stopPropagation();
  else {
    var c = this.options.Ab && this.options.Ab.Nj,
      d = this.options.fd && this.options.fd.Nj;
    if (c || d) {
      var e = g.g.XB(a);
      !c || (!a.ctrlKey && d)
        ? ((c = this.scrollX - e.x),
          (d = this.scrollY - e.y),
          a.shiftKey && !e.x && ((c = this.scrollX - e.y), (d = this.scrollY)),
          this.scroll(c, d))
        : ((e = -e.y / 50),
          (c = g.g.Zo(a, r(this), oa(this))),
          this.zoom(c.x, c.y, e));
      a.preventDefault();
    }
  }
};
function Da(a) {
  a = [].concat(a.nt);
  if (!a.length) return new g.g.Rect(0, 0, 0, 0);
  for (var c = Jc(a[0]), d = 1; d < a.length; d++) {
    var e = Jc(a[d]);
    e.top < c.top && (c.top = e.top);
    e.bottom > c.bottom && (c.bottom = e.bottom);
    e.left < c.left && (c.left = e.left);
    e.right > c.right && (c.right = e.right);
  }
  return c;
}
b.Bp = function (a) {
  if (!this.options.readOnly && !this.lg) {
    var c = xc(g.Va.Td.$c, { u: this });
    this.TH && this.TH(c, a);
    g.$a.show(a, c, this.M);
  }
};
function na(a) {
  if (a.options.yc) na(a.options.yc);
  else {
    g.So = a;
    document.activeElement &&
      document.activeElement.blur &&
      document.activeElement.blur();
    try {
      r(a).focus({ preventScroll: !0 });
    } catch (c) {
      try {
        r(a).parentNode.setActive();
      } catch (d) {
        r(a).parentNode.focus({ preventScroll: !0 });
      }
    }
  }
}
b.zoom = function (a, c, d) {
  d = Math.pow(this.options.Ab.jL, d);
  var e = this.scale * d;
  if (this.scale != e) {
    e > this.options.Ab.Vo
      ? (d = this.options.Ab.Vo / this.scale)
      : e < this.options.Ab.Xo && (d = this.options.Ab.Xo / this.scale);
    var f = this.Hb.getCTM(),
      h = r(this).createSVGPoint();
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
b.xI = function () {
  g.g.o.hc(this.Hb, "blocklyCanvasTransitioning");
  g.g.o.hc(this.og, "blocklyCanvasTransitioning");
};
b.setScale = function (a) {
  this.options.Ab.Vo && a > this.options.Ab.Vo
    ? (a = this.options.Ab.Vo)
    : this.options.Ab.Xo && a < this.options.Ab.Xo && (a = this.options.Ab.Xo);
  this.scale = a;
  g.Kc(!1);
  this.pa && (this.pa.Nx(), Vc(this));
  this.Bf && this.Bf.update(this.scale);
  a = this.dd();
  this.scrollX -= a.Sc;
  this.scrollY -= a.ad;
  a.ac += a.Sc;
  a.ic += a.ad;
  this.scroll(this.scrollX, this.scrollY);
  this.Ta &&
    (this.pa
      ? (ha(this.Ta.Cf, a), ia(this.Ta.Of, a))
      : (ka(this.Ta.Cf, a), ma(this.Ta.Of, a)));
};
function $c(a) {
  return a.options.yc ? $c(a.options.yc) : a.scale;
}
b.scroll = function (a, c) {
  g.Kc(!0);
  var d = this.dd(),
    e = d.wf + d.od - d.Qb,
    f = d.Wd + d.bd - d.Vb;
  a = Math.min(a, -d.od);
  c = Math.min(c, -d.bd);
  a = Math.max(a, -e);
  c = Math.max(c, -f);
  this.scrollX = a;
  this.scrollY = c;
  this.Ta &&
    (da(this.Ta.Cf, -(a + d.od) * this.Ta.Cf.ratio),
    da(this.Ta.Of, -(c + d.bd) * this.Ta.Of.ratio));
  a += d.Sc;
  c += d.ad;
  this.translate(a, c);
};
g.Cb.OB = function (a) {
  var c = 0,
    d = 0;
  a && ((c = a.Yg()), (d = a.Uc));
  return new g.g.re(c, d);
};
g.Cb.OI = function (a, c) {
  return Zc(a) ? g.Cb.NI(a, c) : g.Cb.LB(a);
};
g.Cb.LB = function (a) {
  var c = Da(a),
    d = a.scale;
  a = c.top * d;
  var e = c.bottom * d,
    f = c.left * d;
  c = c.right * d;
  return { top: a, bottom: e, left: f, right: c, width: c - f, height: e - a };
};
g.Cb.NI = function (a, c) {
  a = g.Cb.LB(a);
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
g.Cb.XI = function () {
  var a = g.Cb.OB(this.Ma),
    c = g.Cb.OB(this.pa),
    d = g.AL(r(this)),
    e = { height: d.height, width: d.width };
  if (this.Ma)
    if (this.La == g.ik || this.La == g.Qn) e.height -= a.height;
    else {
      if (this.La == g.Ke || this.La == g.Wl) e.width -= a.width;
    }
  else if (this.pa)
    if (this.La == g.ik || this.La == g.Qn) e.height -= c.height;
    else if (this.La == g.Ke || this.La == g.Wl) e.width -= c.width;
  var f = g.Cb.OI(this, e),
    h = 0;
  this.Ma && this.La == g.Ke
    ? (h = a.width)
    : this.pa && this.La == g.Ke && (h = c.width);
  var k = 0;
  this.Ma && this.La == g.ik
    ? (k = a.height)
    : this.pa && this.La == g.ik && (k = c.height);
  return {
    Wd: f.height,
    wf: f.width,
    bd: f.top,
    od: f.left,
    Vb: e.height,
    Qb: e.width,
    ic: -this.scrollY,
    ac: -this.scrollX,
    ad: k,
    Sc: h,
    OD: d.height,
    PD: d.width,
    WD: a.width,
    aP: a.height,
    La: this.La,
    BO: c.width,
    AO: c.height,
  };
};
g.Cb.qL = function (a) {
  var c = this.dd();
  "number" == typeof a.x && (this.scrollX = -c.wf * a.x - c.od);
  "number" == typeof a.y && (this.scrollY = -c.Wd * a.y - c.bd);
  this.translate(this.scrollX + c.Sc, this.scrollY + c.ad);
};
b = g.Cb.prototype;
b.$d = function (a) {
  return g.Cb.v.$d.call(this, a);
};
b.dc = function (a) {
  return g.Cb.v.dc.call(this, a);
};
b.Yq = function (a) {
  this.nt.push(a);
  g.Cb.v.Yq.call(this, a);
};
b.Vs = function (a) {
  g.g.$q(this.nt, a);
  g.Cb.v.Vs.call(this, a);
};
b.gd = function (a) {
  var c = !this.Vx && a;
  this.Vx = a;
  c && Ga(this);
};
b.clear = function () {
  this.gd(!1);
  g.Cb.v.clear.call(this);
  this.nt = [];
  this.gd(!0);
};
function ad(a, c) {
  if ("function" != typeof c)
    throw TypeError("Button callbacks must be functions.");
  a.Xv.CREATE_VARIABLE = c;
}
function Wb(a, c) {
  return (a = a.Xv[c]) ? a : null;
}
function Sc(a, c, d) {
  if ("function" != typeof d)
    throw TypeError("Toolbox category callbacks must be functions.");
  a.xy[c] = d;
}
b.$h = function (a) {
  var c =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    d = this.Cd;
  return d
    ? c && d.Ck
      ? (console.warn("Tried to start the same gesture twice."),
        d.cancel(),
        null)
      : d
    : c
    ? (this.Cd = new g.se(a, this))
    : null;
};
function wc(a) {
  a.Cd && a.Cd.cancel();
}
g.xn = function (a) {
  a.dd = this.Sr.bind(this);
  a.zp = this.pL.bind(this);
  this.s = new g.Cb(a);
  this.s.lg = !0;
  this.s.Ob(this.ji);
  this.M = !!a.M;
  this.Fd = !1;
  this.Kj = a.La;
  this.Sv = [];
  this.rs = [];
  this.Xn = [];
  this.je = [];
  this.Gx = [];
  this.hn = this.s.Sb.U().Qq;
  this.gb = null;
};
b = g.xn.prototype;
b.cm = !0;
b.ji = !1;
b.pk = !0;
b.Tb = 8;
b.Ki = g.xn.prototype.Tb;
b.AF = 3 * g.xn.prototype.Ki;
b.BF = 3 * g.xn.prototype.Ki;
b.vu = 2;
b.zb = 0;
b.Uc = 0;
b.tI = 70;
b.ab = function (a) {
  this.N = g.g.o.L(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.ud = g.g.o.L(g.g.F.pe, { class: "blocklyFlyoutBackground" }, this.N);
  this.N.appendChild(this.s.ab());
  this.s.Dc.subscribe(this.ud, "flyoutBackgroundColour", "fill");
  this.s.Dc.subscribe(this.ud, "flyoutOpacity", "fill-opacity");
  Pc(this.s.Ze, new g.yq());
  return this.N;
};
b.aa = function (a) {
  this.gb = a;
  this.s.gb = a;
  this.Ta = new g.Wa(this.s, this.Fd, !1, "blocklyFlyoutScrollbar");
  this.Oa();
  Array.prototype.push.apply(this.Sv, g.ta(this.N, "wheel", this, this.RL));
  this.cm || ((this.Lr = this.Tv.bind(this)), D(this.gb, this.Lr));
  Array.prototype.push.apply(
    this.Sv,
    g.ta(this.ud, "mousedown", this, this.wj)
  );
  this.s.$h = this.gb.$h.bind(this.gb);
  this.s.gy(this.gb.Ua);
  a = this.s;
  a.zj = new g.Hu(a);
};
b.J = function () {
  this.Oa();
  g.Na(this.Sv);
  this.Lr && (Oa(this.gb, this.Lr), (this.Lr = null));
  this.Ta && (this.Ta.J(), (this.Ta = null));
  this.s &&
    (this.s.Dc.unsubscribe(this.ud),
    (this.s.gb = null),
    this.s.J(),
    (this.s = null));
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.gb = this.ud = null;
};
b.Yg = function () {
  return this.zb;
};
b.isVisible = function () {
  return this.ji;
};
b.Ob = function (a) {
  var c = a != this.isVisible();
  this.ji = a;
  c && this.Qp();
};
b.jl = function (a) {
  var c = a != this.pk;
  this.pk = a;
  c && this.Qp();
};
b.Qp = function () {
  var a = this.pk ? this.isVisible() : !1;
  this.N.style.display = a ? "block" : "none";
  this.Ta.jl(a);
};
b.Oa = function () {
  if (this.isVisible()) {
    this.Ob(!1);
    for (var a = 0, c; (c = this.je[a]); a++) g.Na(c);
    this.je.length = 0;
    this.Aj && (Oa(this.s, this.Aj), (this.Aj = null));
  }
};
b.show = function (a) {
  this.s.gd(!1);
  this.Oa();
  bd(this);
  "string" == typeof a && (a = cd(this, a));
  this.Ob(!0);
  a = g.g.za.fB(a);
  a = dd(this, a);
  ed(this, a.XH, a.EI);
  this.je.push(
    g.ta(this.ud, "mouseover", this, function () {
      for (var c = this.s.dc(!1), d = 0, e; (e = c[d]); d++) e.pp();
    })
  );
  this.Fd ? (this.Uc = 0) : (this.zb = 0);
  this.s.gd(!0);
  this.Nx();
  this.Tv();
  this.position();
  this.Aj = this.Nx.bind(this);
  D(this.s, this.Aj);
};
function dd(a, c) {
  var d = [],
    e = [];
  a.Gx.length = 0;
  for (var f = a.Fd ? a.AF : a.BF, h = 0, k; (k = c[h]); h++) {
    if (k.custom) {
      var l = cd(a, k.custom);
      l = g.g.za.fB(l);
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
          ? ((k = g.T.ff(n)), (m.blockxml = k))
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
        n = g.T.vk(m, k.s);
        n.isEnabled() || k.Gx.push(n);
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
        l = fd(a, k, !0);
        d.push({ type: "button", button: l });
        e.push(f);
        break;
      case "BUTTON":
        (l = fd(a, k, !1)), d.push({ type: "button", button: l }), e.push(f);
    }
  }
  return { XH: d, EI: e };
}
function cd(a, c) {
  c = a.s.gb.xy[c] || null;
  if ("function" != typeof c)
    throw TypeError(
      "Couldn't find a callback function when opening a toolbox category."
    );
  a = c(a.s.gb);
  if (!Array.isArray(a))
    throw new TypeError(
      "Result of toolbox category callback must be an array."
    );
  return a;
}
function fd(a, c, d) {
  if (!g.Xj) throw Error("Missing require for Blockly.FlyoutButton");
  return new g.Xj(a.s, a.gb, c, d);
}
function bd(a) {
  for (var c = a.s.dc(!1), d = 0, e; (e = c[d]); d++) e.u == a.s && e.J(!1, !1);
  for (d = 0; d < a.rs.length; d++)
    if ((c = a.rs[d])) g.K.Ay(c), g.g.o.removeNode(c);
  for (d = a.rs.length = 0; (c = a.Xn[d]); d++) c.J();
  a.Xn.length = 0;
  a.s.zj.clear();
}
function gd(a, c) {
  return function (d) {
    var e = a.gb.$h(d);
    e && (Ib(e, c), Hb(e, d, a));
  };
}
b.wj = function (a) {
  var c = this.gb.$h(a);
  c && Hb(c, a, this);
};
function yb(a, c) {
  var d = null;
  g.i.disable();
  var e = a.gb.zk();
  a.gb.gd(!1);
  try {
    var f = a.gb;
    if (!c.Pa()) throw Error("oldBlock is not rendered.");
    var h = g.T.Ph(c, !0);
    f.gd(!1);
    var k = g.T.vk(h, f);
    if (!k.Pa()) throw Error("block is not rendered.");
    var l = g.g.Eo(f.Hb),
      m = g.g.Eo(a.s.Hb),
      n = c.bb();
    n.scale(a.s.scale);
    var t = g.g.Z.sum(m, n),
      u = g.g.Z.pm(t, l);
    u.scale(1 / f.scale);
    k.moveBy(u.x, u.y);
    d = k;
  } finally {
    g.i.enable();
  }
  g.Kc();
  c = g.ga.JB(a.gb, e);
  if (g.i.isEnabled()) {
    g.i.na(!0);
    for (e = 0; e < c.length; e++) g.i.Ha(new g.i.qf(c[e]));
    g.i.Ha(new g.i.Sf(d));
  }
  a.cm ? a.Oa() : a.Tv();
  return d;
}
b.Tv = function () {
  for (var a = this.s.dc(!1), c = 0, d; (d = a[c]); c++)
    if (-1 == this.Gx.indexOf(d))
      for (var e = La(this.gb, g.g.$v(d)); d; ) d.ke(e), (d = q(d));
};
b.Nx = function () {
  this.Aj && Oa(this.s, this.Aj);
  this.s.scale = this.gb.scale;
  for (var a = 0, c = this.s.dc(!1), d = 0, e; (e = c[d]); d++) {
    var f = E(e).width;
    e.O && (f -= this.hn);
    a = Math.max(a, f);
  }
  for (d = 0; (e = this.Xn[d]); d++) a = Math.max(a, e.width);
  a += 1.5 * this.Ki + this.hn;
  a *= this.s.scale;
  a += g.Wa.Wc;
  if (this.zb != a) {
    for (d = 0; (e = c[d]); d++) {
      if (this.M) {
        f = e.bb().x;
        var h = a / this.s.scale - this.Ki;
        e.O || (h -= this.hn);
        e.moveBy(h - f, 0);
      }
      e.EB &&
        ((f = e.EB),
        (h = e),
        (e = E(h)),
        f.setAttribute("width", e.width),
        f.setAttribute("height", e.height),
        (h = h.bb()),
        f.setAttribute("y", h.y),
        f.setAttribute("x", this.M ? h.x - e.width : h.x));
    }
    if (this.M)
      for (d = 0; (e = this.Xn[d]); d++)
        e.moveTo(a / this.s.scale - e.width - this.Ki - this.hn, e.al.y);
    this.gb.La != this.Kj ||
      this.Kj != g.Ke ||
      this.gb.Ma ||
      this.gb.translate(this.gb.scrollX + a, this.gb.scrollY);
    this.zb = a;
    this.position();
  }
  this.Aj && D(this.s, this.Aj);
};
function Cb(a) {
  return a.Ta ? a.Ta.isVisible() : !1;
}
b.Yb = function (a) {
  return this.s.Nb().Yb(a);
};
g.la = {};
g.la.If = null;
g.la.Hr = null;
g.la.mg = "";
g.la.pg = "";
g.la.ab = function () {
  g.la.pb ||
    ((g.la.pb = document.createElement("div")),
    (g.la.pb.className = "blocklyWidgetDiv"),
    (g.Ns || document.body).appendChild(g.la.pb));
};
g.la.show = function (a, c, d) {
  g.la.Oa();
  g.la.If = a;
  g.la.Hr = d;
  a = g.la.pb;
  a.style.direction = c ? "rtl" : "ltr";
  a.style.display = "block";
  c = g.Ug();
  g.la.mg = c.Sb.hg();
  g.la.pg = c.Xg().hg();
  g.g.o.Ga(a, g.la.mg);
  g.g.o.Ga(a, g.la.pg);
};
g.la.Oa = function () {
  if (g.la.isVisible()) {
    g.la.If = null;
    var a = g.la.pb;
    a.style.display = "none";
    a.style.left = "";
    a.style.top = "";
    g.la.Hr && g.la.Hr();
    g.la.Hr = null;
    a.textContent = "";
    g.la.mg && (g.g.o.hc(a, g.la.mg), (g.la.mg = ""));
    g.la.pg && (g.g.o.hc(a, g.la.pg), (g.la.pg = ""));
    na(g.Ug());
  }
};
g.la.isVisible = function () {
  return !!g.la.If;
};
g.la.Cm = function (a) {
  g.la.If == a && g.la.Oa();
};
g.la.hp = function (a, c, d) {
  g.la.pb.style.left = a + "px";
  g.la.pb.style.top = c + "px";
  g.la.pb.style.height = d + "px";
};
g.la.tK = function (a, c, d, e) {
  var f = g.la.JH(a, c, d);
  a = g.la.IH(a, c, d, e);
  0 > f ? g.la.hp(a, 0, d.height + f) : g.la.hp(a, f, d.height);
};
g.la.IH = function (a, c, d, e) {
  if (e)
    return (
      (c = Math.max(c.right - d.width, a.left)), Math.min(c, a.right - d.width)
    );
  c = Math.min(c.left, a.right - d.width);
  return Math.max(c, a.left);
};
g.la.JH = function (a, c, d) {
  return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom;
};
g.Nh = function (a) {
  g.Nh.v.constructor.call(this, a);
};
g.g.object.V(g.Nh, g.xn);
g.Nh.OO = "verticalFlyout";
b = g.Nh.prototype;
b.Sr = function () {
  if (!this.isVisible()) return null;
  try {
    var a = this.s.Hb.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var c = this.vu,
    d = this.Uc - 2 * this.vu,
    e = this.zb;
  this.M || (e -= this.vu);
  return {
    Wd: a.height * this.s.scale + 2 * this.Ki,
    wf: a.width * this.s.scale + 2 * this.Ki,
    bd: a.y,
    od: a.x,
    Vb: d,
    Qb: e,
    ic: -this.s.scrollY + a.y,
    ac: -this.s.scrollX,
    ad: c,
    Sc: 0,
  };
};
b.pL = function (a) {
  var c = this.Sr();
  c &&
    ("number" == typeof a.y && (this.s.scrollY = -c.Wd * a.y),
    this.s.translate(this.s.scrollX + c.Sc, this.s.scrollY + c.ad));
};
b.position = function () {
  if (this.isVisible()) {
    var a = this.gb.dd();
    if (a) {
      this.Uc = a.Vb;
      var c = this.zb - this.Tb;
      a = a.Vb - 2 * this.Tb;
      var d = this.Kj == g.Wl,
        e = c + this.Tb;
      e = ["M " + (d ? e : 0) + ",0"];
      e.push("h", d ? -c : c);
      e.push(
        "a",
        this.Tb,
        this.Tb,
        0,
        0,
        d ? 0 : 1,
        d ? -this.Tb : this.Tb,
        this.Tb
      );
      e.push("v", Math.max(0, a));
      e.push(
        "a",
        this.Tb,
        this.Tb,
        0,
        0,
        d ? 0 : 1,
        d ? this.Tb : -this.Tb,
        this.Tb
      );
      e.push("h", d ? c : -c);
      e.push("z");
      this.ud.setAttribute("d", e.join(" "));
      c = (c = this.gb.dd())
        ? this.gb.La == this.Kj
          ? c.WD
            ? this.Kj == g.Ke
              ? c.WD
              : c.Qb - this.zb
            : this.Kj == g.Ke
            ? 0
            : c.Qb
          : this.Kj == g.Ke
          ? 0
          : c.Qb + c.Sc - this.zb
        : 0;
      a = this.Uc;
      this.N.setAttribute("width", this.zb);
      this.N.setAttribute("height", a);
      "svg" == this.N.tagName
        ? g.g.o.xp(this.N, "translate(" + c + "px,0px)")
        : this.N.setAttribute("transform", "translate(" + c + ",0)");
      this.Ta &&
        ((this.Ta.zx = new g.g.Z(c, 0)),
        this.Ta.resize(),
        this.Ta.setPosition(this.Ta.position.x, this.Ta.position.y));
    }
  }
};
b.Yx = function () {
  this.Ta.set(0);
};
b.RL = function (a) {
  var c = g.g.XB(a);
  if (c.y) {
    var d = this.Sr();
    c = d.ic - d.bd + c.y;
    c = Math.min(c, d.Wd - d.Vb);
    c = Math.max(c, 0);
    this.Ta.set(c);
    g.la.Oa();
    g.H.fj();
  }
  a.preventDefault();
  a.stopPropagation();
};
function ed(a, c, d) {
  a.s.scale = a.gb.scale;
  for (var e = a.Ki, f = a.M ? e : e + a.hn, h = 0, k; (k = c[h]); h++)
    if ("block" == k.type) {
      k = k.block;
      for (var l = p(k, !1), m = 0, n; (n = l[m]); m++) n.Ub = !0;
      k.Ia();
      n = k.Pa();
      l = E(k);
      m = k.O ? f - a.hn : f;
      k.moveBy(m, e);
      var t = a,
        u = k,
        x = h;
      m = g.g.o.L(
        g.g.F.Hc,
        {
          "fill-opacity": 0,
          x: a.M ? m - l.width : m,
          y: e,
          height: l.height,
          width: l.width,
        },
        null
      );
      m.Nf = u;
      g.K.dm(m);
      t.s.Hb.insertBefore(m, u.Pa());
      u.EB = m;
      t.rs[x] = m;
      t = a;
      t.je.push(g.ta(n, "mousedown", null, gd(t, k)));
      t.je.push(g.ta(m, "mousedown", null, gd(t, k)));
      t.je.push(g.Ud(n, "mouseenter", k, k.Wq));
      t.je.push(g.Ud(n, "mouseleave", k, k.pp));
      t.je.push(g.Ud(m, "mouseenter", k, k.Wq));
      t.je.push(g.Ud(m, "mouseleave", k, k.pp));
      e += l.height + d[h];
    } else
      "button" == k.type &&
        ((l = a),
        (m = k.button),
        (n = f),
        (t = e),
        (u = m.ab()),
        m.moveTo(n, t),
        m.show(),
        l.je.push(g.ta(u, "mousedown", l, l.wj)),
        l.Xn.push(m),
        (e += k.button.height + d[h]));
}
b.um = function () {
  if (!this.N) return null;
  var a = this.N.getBoundingClientRect(),
    c = a.left;
  return this.Kj == g.Ke
    ? new g.g.Rect(-1e9, 1e9, -1e9, c + a.width)
    : new g.g.Rect(-1e9, 1e9, c, 1e9);
};
g.C.register(g.C.ea.kz, g.C.vq, g.Nh);
g.Ju = function (a) {
  this.s = a;
  this.on = this.Yp = this.nn = this.rh = this.wx = this.vx = this.xx = null;
};
b = g.Ju.prototype;
b.lk = 32;
b.yn = 110;
b.bu = 20;
b.Cn = 20;
b.N = null;
b.Qo = 0;
b.jn = 0;
b.ab = function () {
  this.N = g.g.o.L(g.g.F.qc, {}, null);
  var a = String(Math.random()).substring(2);
  this.Yp = g.g.o.L(g.g.F.qc, { class: "blocklyZoom" }, this.N);
  var c = g.g.o.L(g.g.F.sn, { id: "blocklyZoomoutClipPath" + a }, this.Yp);
  g.g.o.L(g.g.F.Hc, { width: 32, height: 32 }, c);
  g.g.o
    .L(
      g.g.F.Ii,
      {
        width: g.Sd.width,
        height: g.Sd.height,
        x: -64,
        y: -92,
        "clip-path": "url(#blocklyZoomoutClipPath" + a + ")",
      },
      this.Yp
    )
    .setAttributeNS(g.g.o.rf, "xlink:href", this.s.options.yj + g.Sd.url);
  this.wx = g.ta(this.Yp, "mousedown", null, this.kE.bind(this, -1));
  this.nn = g.g.o.L(g.g.F.qc, { class: "blocklyZoom" }, this.N);
  c = g.g.o.L(g.g.F.sn, { id: "blocklyZoominClipPath" + a }, this.nn);
  g.g.o.L(g.g.F.Hc, { width: 32, height: 32 }, c);
  g.g.o
    .L(
      g.g.F.Ii,
      {
        width: g.Sd.width,
        height: g.Sd.height,
        x: -32,
        y: -92,
        "clip-path": "url(#blocklyZoominClipPath" + a + ")",
      },
      this.nn
    )
    .setAttributeNS(g.g.o.rf, "xlink:href", this.s.options.yj + g.Sd.url);
  this.vx = g.ta(this.nn, "mousedown", null, this.kE.bind(this, 1));
  this.s.Lc() &&
    ((this.on = g.g.o.L(g.g.F.qc, { class: "blocklyZoom" }, this.N)),
    (c = g.g.o.L(g.g.F.sn, { id: "blocklyZoomresetClipPath" + a }, this.on)),
    g.g.o.L(g.g.F.Hc, { width: 32, height: 32 }, c),
    g.g.o
      .L(
        g.g.F.Ii,
        {
          width: g.Sd.width,
          height: g.Sd.height,
          y: -92,
          "clip-path": "url(#blocklyZoomresetClipPath" + a + ")",
        },
        this.on
      )
      .setAttributeNS(g.g.o.rf, "xlink:href", this.s.options.yj + g.Sd.url),
    (this.xx = g.ta(this.on, "mousedown", null, this.fL.bind(this))));
  return this.N;
};
b.aa = function (a) {
  this.rh = this.bu + a;
  return this.rh + this.yn;
};
b.J = function () {
  this.N && g.g.o.removeNode(this.N);
  this.xx && g.Na(this.xx);
  this.vx && g.Na(this.vx);
  this.wx && g.Na(this.wx);
};
b.position = function () {
  if (this.rh) {
    var a = this.s.dd();
    a &&
      ((this.Qo =
        a.La == g.Ke || (this.s.Fd && !this.s.M)
          ? a.Qb + a.Sc - this.lk - this.Cn - g.Wa.Wc
          : this.Cn + g.Wa.Wc),
      a.La == g.Qn
        ? ((this.jn = this.rh),
          this.nn.setAttribute("transform", "translate(0, 34)"),
          this.on && this.on.setAttribute("transform", "translate(0, 77)"))
        : ((this.jn = a.Vb + a.ad - this.yn - this.rh),
          this.nn.setAttribute("transform", "translate(0, 43)"),
          this.Yp.setAttribute("transform", "translate(0, 77)")),
      this.N.setAttribute(
        "transform",
        "translate(" + this.Qo + "," + this.jn + ")"
      ));
  }
};
b.kE = function (a, c) {
  na(this.s);
  var d = this.s,
    e = d.dd();
  if (d.pa) {
    var f = e.PD ? e.PD / 2 : 0;
    e = e.OD ? e.OD / 2 : 0;
  } else (f = e.Qb / 2 + e.Sc), (e = e.Vb / 2 + e.ad);
  d.zoom(f, e, a);
  hd(this);
  g.Touch.mk();
  c.stopPropagation();
  c.preventDefault();
};
b.fL = function (a) {
  na(this.s);
  this.s.setScale(this.s.options.Ab.LD);
  var c = this.s;
  g.g.o.Ga(c.Hb, "blocklyCanvasTransitioning");
  g.g.o.Ga(c.og, "blocklyCanvasTransitioning");
  c = this.s;
  if (c.Lc()) {
    var d = c.dd(),
      e = (d.wf - d.Qb) / 2,
      f = (d.Wd - d.Vb) / 2;
    e = -e - d.od;
    f = -f - d.bd;
    c.scroll(e, f);
  } else
    console.warn(
      "Tried to move a non-movable workspace. This could result in blocks becoming inaccessible."
    );
  setTimeout(this.s.xI.bind(this.s), 500);
  hd(this);
  g.Touch.mk();
  a.stopPropagation();
  a.preventDefault();
};
function hd(a) {
  a = new g.i.Qf(null, a.s.id, "zoom_controls");
  g.i.Ha(a);
}
g.Qc.register([
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
g.Qy = function (a) {
  this.ho = a;
  this.ab();
};
b = g.Qy.prototype;
b.lb = null;
b.Rg = null;
b.ho = null;
b.Ej = 1;
b.Ip = null;
b.ab = function () {
  this.lb ||
    ((this.lb = g.g.o.L(
      g.g.F.hk,
      {
        xmlns: g.g.o.Oq,
        "xmlns:html": g.g.o.Gl,
        "xmlns:xlink": g.g.o.rf,
        version: "1.1",
        class: "blocklyBlockDragSurface",
      },
      this.ho
    )),
    (this.Rg = g.g.o.L(g.g.F.qc, {}, this.lb)));
};
function Bb(a, c) {
  if (a.Rg.childNodes.length) throw Error("Already dragging a block.");
  a.Rg.appendChild(c);
  a.lb.style.display = "block";
  a.Ip = new g.g.Z(0, 0);
}
b.ql = function (a, c) {
  this.Ip = new g.g.Z(a * this.Ej, c * this.Ej);
  a = this.Ip.x;
  c = this.Ip.y;
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.lb.style.display = "block";
  g.g.o.xp(this.lb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.kw = function () {
  var a = g.g.Af(this.lb);
  return new g.g.Z(a.x / this.Ej, a.y / this.Ej);
};
b.wc = function () {
  return this.Rg;
};
b.pr = function (a) {
  a
    ? a.appendChild(this.Rg.firstChild)
    : this.Rg.removeChild(this.Rg.firstChild);
  this.lb.style.display = "none";
  if (this.Rg.childNodes.length) throw Error("Drag group was not cleared.");
  this.Ip = null;
};
g.kj = function (a, c) {
  g.KH();
  "string" == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a));
  if (!a || !g.g.o.containsNode(document, a))
    throw Error("Error: container is not in current document.");
  c = new g.Pd(c || {});
  var d = document.createElement("div");
  d.className = "injectionDiv";
  d.tabIndex = 0;
  g.g.$.Zb(d, g.g.$.State.Bz, g.h.WORKSPACE_ARIA_LABEL);
  a.appendChild(d);
  a = g.Re(d, c);
  var e = new g.Qy(d),
    f = new g.BA(d),
    h = g.ZH(a, c, e, f);
  g.oJ(h);
  g.So = h;
  g.gn(h);
  d.addEventListener("focusin", function () {
    g.So = h;
  });
  return h;
};
g.Re = function (a, c) {
  a.setAttribute("dir", "LTR");
  g.Qc.kj(c.gJ, c.yj);
  a = g.g.o.L(
    g.g.F.hk,
    {
      xmlns: g.g.o.Oq,
      "xmlns:html": g.g.o.Gl,
      "xmlns:xlink": g.g.o.rf,
      version: "1.1",
      class: "blocklySvg",
      tabindex: "0",
    },
    a
  );
  var d = g.g.o.L(g.g.F.Yy, {}, a);
  c.nw = g.Yj.ab(String(Math.random()).substring(2), c.gC, d);
  return a;
};
g.ZH = function (a, c, d, e) {
  c.yc = null;
  var f = new g.Cb(c, d, e);
  c = f.options;
  f.scale = c.Ab.LD;
  a.appendChild(f.ab("blocklyMainBackground"));
  g.g.o.Ga(aa(f), f.Sb.hg());
  g.g.o.Ga(aa(f), f.Xg().hg());
  !c.Ho && c.fh && ((d = Yc(f, g.g.F.hk)), g.g.o.Hk(d, a));
  c.kC && Wc(f);
  c.Ab && c.Ab.controls && Xc(f);
  f.Dc.subscribe(a, "workspaceBackgroundColour", "background-color");
  f.translate(0, 0);
  c.readOnly ||
    f.Lc() ||
    D(f, function (h) {
      if (!f.Cc() && !f.Lc() && -1 != g.i.wE.indexOf(h.type)) {
        var k = Object.create(null),
          l = f.dd(),
          m = f.scale;
        k.M = f.M;
        k.ac = l.ac / m;
        k.ic = l.ic / m;
        k.fE = (l.ac + l.Qb) / m;
        k.eE = (l.ic + l.Vb) / m;
        Zc(f)
          ? ((l = Da(f)),
            (k.od = l.left),
            (k.bd = l.top),
            (k.eB = l.right),
            (k.bB = l.bottom))
          : ((k.od = l.od / m),
            (k.bd = l.bd / m),
            (k.eB = (l.od + l.wf) / m),
            (k.bB = (l.bd + l.Wd) / m));
        if (k.bd < k.ic || k.bB > k.eE || k.od < k.ac || k.eB > k.fE) {
          l = null;
          h && ((l = g.i.wc()), g.i.na(h.group));
          switch (h.type) {
            case g.i.bq:
            case g.i.At:
              var n = f.$d(h.ub);
              n && (n = n.ce());
              break;
            case g.i.mq:
            case g.i.nq:
              n = f.xr[h.Jg] || null;
          }
          if (n) {
            m = Jc(n);
            m.height = m.bottom - m.top;
            m.width = m.right - m.left;
            var t = k.ic,
              u = k.eE - m.height;
            u = Math.max(t, u);
            t = g.g.ze.gm(t, m.top, u) - m.top;
            u = k.ac;
            var x = k.fE - m.width;
            k.M ? (u = Math.min(x, u)) : (x = Math.max(u, x));
            n.moveBy(g.g.ze.gm(u, m.left, x) - m.left, t);
          }
          h &&
            (!h.group &&
              n &&
              console.warn(
                "Moved object in bounds but there was no event group. This may break undo."
              ),
            null !== l && g.i.na(l));
        }
      }
    });
  g.gn(f);
  g.la.ab();
  g.H.ab();
  g.K.ab();
  return f;
};
g.oJ = function (a) {
  var c = a.options,
    d = r(a);
  g.ta(d.parentNode, "contextmenu", null, function (f) {
    g.g.hs(f) || f.preventDefault();
  });
  d = g.ta(window, "resize", null, function () {
    g.Kc(!0);
    g.gn(a);
  });
  a.Zs = d;
  g.kj.DH();
  if (c.fh) {
    d = a.Ma;
    var e = a.mc(!0);
    d
      ? d.aa()
      : e && (e.aa(a), e.show(c.fh), "function" == typeof e.Yx && e.Yx());
  }
  d = g.Wa.Wc;
  c.kC && (d = a.vd.aa(d));
  c.Ab && c.Ab.controls && a.yl.aa(d);
  c.fd && c.fd.scrollbars
    ? ((a.Ta = new g.On(a)), a.Ta.resize())
    : a.zp({ x: 0.5, y: 0.5 });
  c.jJ && g.kj.CJ(c.yj, a);
};
g.kj.DH = function () {
  g.qI ||
    (g.ta(document, "scroll", null, function () {
      for (var a = g.Wb.getAll(), c = 0, d; (d = a[c]); c++) d.Rp && d.Rp();
    }),
    g.ta(document, "keydown", null, g.ap),
    g.Ud(document, "touchend", null, g.sj),
    g.Ud(document, "touchcancel", null, g.sj),
    g.g.userAgent.Il &&
      g.ta(window, "orientationchange", document, function () {
        g.gn(g.Ug());
      }));
  g.qI = !0;
};
g.kj.CJ = function (a, c) {
  function d() {
    for (; f.length; ) g.Na(f.pop());
    e.preload();
  }
  var e = c.Hg;
  e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
  e.load(
    [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"],
    "disconnect"
  );
  e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
  var f = [];
  f.push(g.ta(document, "mousemove", null, d, !0));
  f.push(g.ta(document, "touchstart", null, d, !0));
};
g.Od = function (a, c) {
  this.dE = c || "";
  this.AD = Object.create(null);
  if (a) for (a = a.split(","), c = 0; c < a.length; c++) this.AD[a[c]] = !0;
  this.reset();
};
g.Od.Mt = "DEVELOPER_VARIABLE";
g.Od.prototype.reset = function () {
  this.Pg = Object.create(null);
  this.mB = Object.create(null);
  this.Ua = null;
};
g.Od.prototype.gy = function (a) {
  this.Ua = a;
};
g.Od.prototype.ve = function (a, c) {
  if (c == g.rc) {
    var d = a;
    this.Ua
      ? (d = (d = this.Ua.kg(d)) ? d.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (d = null));
    d && (a = d);
  }
  d = a.toLowerCase() + "_" + c;
  var e = c == g.rc || c == g.Od.Mt ? this.dE : "";
  if (d in this.Pg) return e + this.Pg[d];
  a = id(this, a, c);
  this.Pg[d] = a.substr(e.length);
  return a;
};
function id(a, c, d) {
  c
    ? ((c = encodeURI(c.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(c[0]) && (c = "my_" + c))
    : (c = g.h.UNNAMED_KEY || "unnamed");
  for (var e = ""; a.mB[c + e] || c + e in a.AD; ) e = e ? e + 1 : 2;
  c += e;
  a.mB[c] = !0;
  return (d == g.rc || d == g.Od.Mt ? a.dE : "") + c;
}
g.Od.zf = function (a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.Da = {};
g.Da.Iz = g.Mn;
g.Da.Xy = "x";
g.Da.AH = function (a) {
  var c = Ja(a, "procedures_defnoreturn").map(function (d) {
    return d.bj();
  });
  a = Ja(a, "procedures_defreturn").map(function (d) {
    return d.bj();
  });
  c.sort(g.Da.tD);
  a.sort(g.Da.tD);
  return [c, a];
};
g.Da.tD = function (a, c) {
  return a[0].toLowerCase().localeCompare(c[0].toLowerCase());
};
g.Da.Mr = function (a, c) {
  if (c.Ub) return a;
  for (a = a || g.h.UNNAMED_KEY || "unnamed"; !g.Da.uJ(a, c.u, c); ) {
    var d = a.match(/^(.*?)(\d+)$/);
    a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2";
  }
  return a;
};
g.Da.uJ = function (a, c, d) {
  return !g.Da.wJ(a, c, d);
};
g.Da.wJ = function (a, c, d) {
  c = B(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e] != d && c[e].bj) {
      var f = c[e].bj();
      if (g.Od.zf(f[0], a)) return !0;
    }
  return !1;
};
g.Da.zD = function (a) {
  a = a.trim();
  var c = g.Da.Mr(a, this.X()),
    d = this.getValue();
  if (d != a && d != c) {
    a = B(this.X().u, !1);
    for (var e = 0; e < a.length; e++) a[e].Vm && a[e].Vm(d, c);
  }
  return c;
};
g.Da.yk = function (a) {
  function c(h, k) {
    for (var l = 0; l < h.length; l++) {
      var m = h[l][0],
        n = h[l][1],
        t = g.g.xml.createElement("block");
      t.setAttribute("type", k);
      t.setAttribute("gap", 16);
      var u = g.g.xml.createElement("mutation");
      u.setAttribute("name", m);
      t.appendChild(u);
      for (m = 0; m < n.length; m++) {
        var x = g.g.xml.createElement("arg");
        x.setAttribute("name", n[m]);
        u.appendChild(x);
      }
      d.push(t);
    }
  }
  var d = [];
  if (g.Y.procedures_defnoreturn) {
    var e = g.g.xml.createElement("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = g.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    f.appendChild(g.g.xml.createTextNode(g.h.PROCEDURES_DEFNORETURN_PROCEDURE));
    e.appendChild(f);
    d.push(e);
  }
  g.Y.procedures_defreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = g.g.xml.createElement("field")),
    f.setAttribute("name", "NAME"),
    f.appendChild(g.g.xml.createTextNode(g.h.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    d.push(e));
  g.Y.procedures_ifreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    d.push(e));
  d.length && d[d.length - 1].setAttribute("gap", 24);
  a = g.Da.AH(a);
  c(a[0], "procedures_callnoreturn");
  c(a[1], "procedures_callreturn");
  return d;
};
g.Da.$D = function (a) {
  for (
    var c = [], d = Ja(a, "procedures_mutatorarg"), e = 0, f;
    (f = d[e]);
    e++
  )
    c.push(C(f, "NAME"));
  d = g.g.xml.createElement("xml");
  e = g.g.xml.createElement("block");
  e.setAttribute("type", "procedures_mutatorarg");
  f = g.g.xml.createElement("field");
  f.setAttribute("name", "NAME");
  c = g.g.xml.createTextNode(g.ga.IB(g.Da.Xy, c));
  f.appendChild(c);
  e.appendChild(f);
  d.appendChild(e);
  if ((c = g.g.za.hv(d))) {
    if (!a.options.fh)
      throw Error("Existing toolbox is null.  Can't create new toolbox.");
    if (g.g.za.Ho(c)) {
      if (!a.Ma)
        throw Error("Existing toolbox has no categories.  Can't change mode.");
      a.options.fh = c;
      a.Ma.Ia(c);
    } else {
      if (!a.pa)
        throw Error("Existing toolbox has categories.  Can't change mode.");
      a.options.fh = c;
      a.pa.show(c);
    }
  } else if (a.options.fh) throw Error("Can't nullify an existing toolbox.");
};
g.Da.SJ = function (a) {
  if (a.type == g.i.eq && "mutator" === a.Wu && a.Km) {
    a = g.Wb.zo(a.Xc).$d(a.ub);
    var c = a.type;
    if ("procedures_defnoreturn" == c || "procedures_defreturn" == c)
      (a = a.rd.s), g.Da.$D(a), D(a, g.Da.RJ);
  }
};
g.Da.RJ = function (a) {
  (a.type != g.i.bq && a.type != g.i.zt && a.type != g.i.sE) ||
    g.Da.$D(g.Wb.zo(a.Xc));
};
g.Da.JI = function (a, c) {
  var d = [];
  c = B(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e].Ve) {
      var f = c[e].Ve();
      f && g.Od.zf(f, a) && d.push(c[e]);
    }
  return d;
};
g.Da.$o = function (a) {
  var c = g.i.eb,
    d = a.bj()[0],
    e = a.Xa(!0);
  a = g.Da.JI(d, a.u);
  d = 0;
  for (var f; (f = a[d]); d++) {
    var h = f.Xa();
    h = h && g.T.te(h);
    f.Eb(e);
    var k = f.Xa();
    k = k && g.T.te(k);
    h != k &&
      ((g.i.eb = !1),
      g.i.Ha(new g.i.uh(f, "mutation", null, h, k)),
      (g.i.eb = c));
  }
};
g.Da.Bo = function (a, c) {
  c = c.dc(!1);
  for (var d = 0; d < c.length; d++)
    if (c[d].bj) {
      var e = c[d].bj();
      if (e && g.Od.zf(e[0], a)) return c[d];
    }
  return null;
};
g.bc = {};
g.bc.names = {
  dF: "escape",
  Tj: "delete",
  HE: "copy",
  OE: "cut",
  EG: "paste",
  mH: "undo",
  NG: "redo",
};
g.bc.LK = function () {
  var a = {
    name: g.bc.names.dF,
    cb: function (c) {
      return !c.options.readOnly;
    },
    Aa: function () {
      g.Kc();
      return !0;
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Ot, a.name);
};
g.bc.Px = function () {
  var a = {
    name: g.bc.names.Tj,
    cb: function (c) {
      return !c.options.readOnly && g.selected && g.selected.ye();
    },
    Aa: function (c, d) {
      d.preventDefault();
      if (g.wg.Fk()) return !1;
      g.pB();
      return !0;
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Tj, a.name);
  G(g.g.P.qE, a.name);
};
g.bc.DK = function () {
  var a = {
    name: g.bc.names.HE,
    cb: function (d) {
      return (
        !d.options.readOnly &&
        !g.wg.Fk() &&
        g.selected &&
        g.selected.ye() &&
        g.selected.Lc()
      );
    },
    Aa: function () {
      g.Kc();
      g.jv(g.selected);
      return !0;
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.Et, [g.g.P.Di]);
  G(c, a.name);
  c = H(g.g.P.Et, [g.g.P.zl]);
  G(c, a.name);
  c = H(g.g.P.Et, [g.g.P.Ml]);
  G(c, a.name);
};
g.bc.EK = function () {
  var a = {
    name: g.bc.names.OE,
    cb: function (d) {
      return (
        !d.options.readOnly &&
        !g.wg.Fk() &&
        g.selected &&
        g.selected.ye() &&
        g.selected.Lc() &&
        !g.selected.u.lg
      );
    },
    Aa: function () {
      g.jv(g.selected);
      g.pB();
      return !0;
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.Vq, [g.g.P.Di]);
  G(c, a.name);
  c = H(g.g.P.Vq, [g.g.P.zl]);
  G(c, a.name);
  c = H(g.g.P.Vq, [g.g.P.Ml]);
  G(c, a.name);
};
g.bc.WK = function () {
  var a = {
    name: g.bc.names.EG,
    cb: function (d) {
      return !d.options.readOnly && !g.wg.Fk();
    },
    Aa: function () {
      return g.Ps();
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.Gu, [g.g.P.Di]);
  G(c, a.name);
  c = H(g.g.P.Gu, [g.g.P.zl]);
  G(c, a.name);
  c = H(g.g.P.Gu, [g.g.P.Ml]);
  G(c, a.name);
};
g.bc.Rx = function () {
  var a = {
    name: g.bc.names.mH,
    cb: function (d) {
      return !d.options.readOnly && !g.wg.Fk();
    },
    Aa: function (d) {
      g.Kc();
      Na(d, !1);
      return !0;
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.$l, [g.g.P.Di]);
  G(c, a.name);
  c = H(g.g.P.$l, [g.g.P.zl]);
  G(c, a.name);
  c = H(g.g.P.$l, [g.g.P.Ml]);
  G(c, a.name);
};
g.bc.Qx = function () {
  var a = {
    name: g.bc.names.NG,
    cb: function (d) {
      return !g.wg.Fk() && !d.options.readOnly;
    },
    Aa: function (d) {
      g.Kc();
      Na(d, !0);
      return !0;
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.$l, [g.g.P.Hh, g.g.P.Di]);
  G(c, a.name);
  c = H(g.g.P.$l, [g.g.P.Hh, g.g.P.zl]);
  G(c, a.name);
  c = H(g.g.P.$l, [g.g.P.Hh, g.g.P.Ml]);
  G(c, a.name);
  c = H(g.g.P.tH, [g.g.P.Di]);
  G(c, a.name);
};
g.bc.GK = function () {
  g.bc.LK();
  g.bc.Px();
  g.bc.DK();
  g.bc.EK();
  g.bc.WK();
  g.bc.Rx();
  g.bc.Qx();
};
g.mb = function () {
  g.mb.C = this;
  this.af = Object.create(null);
  this.Mm = Object.create(null);
  g.bc.GK();
  g.navigation.TK();
};
g.mb.vs = { hO: g.g.P.Hh, iM: g.g.P.Di, ZL: g.g.P.zl, $M: g.g.P.Ml };
g.mb.prototype.register = function (a, c) {
  if (this.af[a.name] && !c)
    throw Error('Shortcut with name "' + a.name + '" already exists.');
  this.af[a.name] = a;
};
g.mb.prototype.unregister = function (a) {
  if (!this.af[a])
    return (
      console.warn('Keyboard shortcut with name "' + a + '" not found.'), !1
    );
  for (var c in this.Mm) {
    var d = c,
      e = this.Mm[d],
      f = e.indexOf(a);
    -1 < f && (e.splice(f, 1), 0 == e.length && delete this.Mm[d]);
  }
  delete this.af[a];
  return !0;
};
function G(a, c, d) {
  var e = g.mb.C,
    f = e.Mm[a];
  if (f && !d)
    throw Error(
      'Shortcut with name "' + c + '" collides with shortcuts ' + f.toString()
    );
  f && d ? f.unshift(c) : (e.Mm[a] = [c]);
}
g.mb.prototype.ap = function (a, c) {
  var d = "";
  for (e in g.mb.vs) c.getModifierState(e) && ("" != d && (d += "+"), (d += e));
  "" != d && c.keyCode
    ? (d = d + "+" + c.keyCode)
    : c.keyCode && (d = c.keyCode.toString());
  d = this.Mm[d] || [];
  if (!d) return !1;
  var e = 0;
  for (var f; (f = d[e]); e++)
    if (((f = this.af[f]), (!f.cb || f.cb(a)) && f.Aa && f.Aa(a, c, f)))
      return !0;
  return !1;
};
function H(a, c) {
  var d = "";
  if (c) {
    for (var e = g.g.object.values(g.mb.vs), f = 0, h; (h = c[f]); f++)
      if (0 > e.indexOf(h)) throw Error(h + " is not a valid modifier key.");
    for (var k in g.mb.vs)
      -1 < c.indexOf(g.mb.vs[k]) && ("" != d && (d += "+"), (d += k));
  }
  "" != d && a ? (d = d + "+" + a) : a && (d = a.toString());
  return d;
}
new g.mb();
g.Rn = function (a, c, d, e) {
  this.u = a;
  this.name = c;
  this.type = d || "";
  this.tw = e || g.g.Zh();
  g.i.Ha(new g.i.qf(this));
};
g.Rn.prototype.Qa = function () {
  return this.tw;
};
g.Rn.WA = function (a, c) {
  a = a.name.toLowerCase();
  c = c.name.toLowerCase();
  return a < c ? -1 : a == c ? 0 : 1;
};
g.ga = {};
g.ga.Iz = g.rc;
g.ga.HA = function (a) {
  var c = B(a, !1);
  a = Object.create(null);
  for (var d = 0; d < c.length; d++) {
    var e = c[d].bi();
    if (e)
      for (var f = 0; f < e.length; f++) {
        var h = e[f],
          k = h.Qa();
        k && (a[k] = h);
      }
  }
  c = [];
  for (k in a) c.push(a[k]);
  return c;
};
g.ga.Hy = {};
g.ga.yH = function (a) {
  a = B(a, !1);
  for (var c = Object.create(null), d = 0, e; (e = a[d]); d++) {
    var f = e.CO;
    !f &&
      e.QI &&
      ((f = e.QI),
      g.ga.Hy[e.type] ||
        (console.warn(
          "Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" +
            e.type +
            "')"
        ),
        (g.ga.Hy[e.type] = !0)));
    if (f) for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0;
  }
  return Object.keys(c);
};
g.ga.yk = function (a) {
  var c = [],
    d = document.createElement("button");
  d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
  d.setAttribute("callbackKey", "CREATE_VARIABLE");
  ad(a, function (e) {
    g.ga.jB(e.jt);
  });
  c.push(d);
  a = g.ga.DI(a);
  return (c = c.concat(a));
};
g.ga.DI = function (a) {
  a = a.Fo("");
  var c = [];
  if (0 < a.length) {
    var d = a[a.length - 1];
    if (g.Y.variables_set) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", "variables_set");
      e.setAttribute("gap", g.Y.math_change ? 8 : 24);
      e.appendChild(g.ga.xo(d));
      c.push(e);
    }
    g.Y.math_change &&
      ((e = g.g.xml.createElement("block")),
      e.setAttribute("type", "math_change"),
      e.setAttribute("gap", g.Y.variables_get ? 20 : 8),
      e.appendChild(g.ga.xo(d)),
      (d = g.T.ff(
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
      )),
      e.appendChild(d),
      c.push(e));
    if (g.Y.variables_get) {
      a.sort(g.Rn.WA);
      d = 0;
      for (var f; (f = a[d]); d++)
        (e = g.g.xml.createElement("block")),
          e.setAttribute("type", "variables_get"),
          e.setAttribute("gap", 8),
          e.appendChild(g.ga.xo(f)),
          c.push(e);
    }
  }
  return c;
};
g.ga.qA = "ijkmnopqrstuvwxyzabcdefgh";
g.ga.FI = function (a) {
  return g.ga.IB(g.ga.qA.charAt(0), a.Zv());
};
g.ga.IB = function (a, c) {
  if (!c.length) return a;
  for (var d = g.ga.qA, e = "", f = d.indexOf(a); ; ) {
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
g.ga.jB = function (a, c, d) {
  function e(h) {
    g.ga.vD(g.h.NEW_VARIABLE_TITLE, h, function (k) {
      if (k) {
        var l = g.ga.UJ(k, a);
        if (l) {
          if (l.type == f)
            var m = g.h.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
          else
            (m = g.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (m = m.replace("%1", l.name).replace("%2", l.type));
          g.alert(m, function () {
            e(k);
          });
        } else a.xf(k, f), c && c(k);
      } else c && c(null);
    });
  }
  var f = d || "";
  e("");
};
g.ga.xf = g.ga.jB;
g.ga.Xs = function (a, c) {
  function d(e) {
    var f = g.h.RENAME_VARIABLE_TITLE.replace("%1", c.name);
    g.ga.vD(f, e, function (h) {
      if (h) {
        var k = g.ga.VJ(h, c.type, a);
        k
          ? ((k = g.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              k.name
            ).replace("%2", k.type)),
            g.alert(k, function () {
              d(h);
            }))
          : a.Dj(c.Qa(), h);
      }
    });
  }
  d("");
};
g.ga.vD = function (a, c, d) {
  g.prompt(a, c, function (e) {
    e &&
      ((e = e.replace(/[\s\xa0]+/g, " ").trim()),
      e == g.h.RENAME_VARIABLE || e == g.h.NEW_VARIABLE) &&
      (e = null);
    d(e);
  });
};
g.ga.VJ = function (a, c, d) {
  d = d.Ua.zk();
  a = a.toLowerCase();
  for (var e = 0, f; (f = d[e]); e++)
    if (f.name.toLowerCase() == a && f.type != c) return f;
  return null;
};
g.ga.UJ = function (a, c) {
  c = c.Ua.zk();
  a = a.toLowerCase();
  for (var d = 0, e; (e = c[d]); d++) if (e.name.toLowerCase() == a) return e;
  return null;
};
g.ga.xo = function (a) {
  var c = g.g.xml.createElement("field");
  c.setAttribute("name", "VAR");
  c.setAttribute("id", a.Qa());
  c.setAttribute("variabletype", a.type);
  a = g.g.xml.createTextNode(a.name);
  c.appendChild(a);
  return c;
};
g.ga.Ur = function (a, c, d, e) {
  var f = g.ga.Ed(a, c, d, e);
  f || (f = g.ga.$H(a, c, d, e));
  return f;
};
g.ga.Ed = function (a, c, d, e) {
  var f = a.zj,
    h = null;
  if (c && ((h = a.kg(c)), !h && f && (h = f.kg(c)), h)) return h;
  if (d) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    h = a.Ed(d, e);
    !h && f && (h = f.Ed(d, e));
  }
  return h;
};
g.ga.$H = function (a, c, d, e) {
  var f = a.zj;
  d || (d = g.ga.FI(a.lg ? a.gb : a));
  return f ? f.xf(d, e, c) : a.xf(d, e, c);
};
g.ga.JB = function (a, c) {
  a = a.zk();
  var d = [];
  if (c.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == c.indexOf(f) && d.push(f);
    }
  return d;
};
g.VERSION = "uncompiled";
g.So = null;
g.selected = null;
g.rm = [];
g.hm = null;
g.rr = null;
g.cv = null;
g.tO = null;
g.Ns = null;
g.AL = function (a) {
  return new g.g.re(a.MA, a.LA);
};
g.QO = function (a) {
  Ga(a);
};
g.gn = function (a) {
  for (; a.options.yc; ) a = a.options.yc;
  var c = r(a),
    d = c.parentNode;
  if (d) {
    var e = d.offsetWidth;
    d = d.offsetHeight;
    c.MA != e && (c.setAttribute("width", e + "px"), (c.MA = e));
    c.LA != d && (c.setAttribute("height", d + "px"), (c.LA = d));
    a.resize();
  }
};
g.ap = function (a) {
  var c = g.So;
  !c || g.g.hs(a) || (c.ra && !c.isVisible()) || g.mb.C.ap(c, a);
};
g.pB = function () {
  var a = g.selected;
  a.u.lg || (g.i.na(!0), g.Kc(), a.J(!0, !0), g.i.na(!1));
};
g.jv = function (a) {
  if (a.Im) a = null;
  else {
    var c = g.T.Ph(a, !0);
    g.T.hI(c);
    var d = a.bb();
    c.setAttribute("x", a.M ? -d.x : d.x);
    c.setAttribute("y", d.y);
    a = { xml: c, source: a.u, KL: g.g.$v(a, !0) };
  }
  a && ((g.hm = a.xml), (g.rr = a.source), (g.cv = a.KL));
};
g.Ps = function () {
  if (!g.hm) return !1;
  var a = g.rr;
  a.lg && (a = a.gb);
  return g.cv && La(a, g.cv) ? (g.i.na(!0), a.Ps(g.hm), g.i.na(!1), !0) : !1;
};
g.duplicate = function (a) {
  var c = g.hm,
    d = g.rr;
  g.jv(a);
  a.u.Ps(g.hm);
  g.hm = c;
  g.rr = d;
};
g.MO = function (a) {
  g.g.hs(a) || a.preventDefault();
};
g.Kc = function (a) {
  g.K.Oa();
  g.la.Oa();
  g.H.fj();
  if (!a) {
    a = g.Ug();
    if (a.vd && a.vd.Tg) {
      var c = a.vd;
      c.Tg.isVisible() && (c.Tg.Oa(), hc(c, !1));
    }
    (a = a.Ma) && a.mc() && a.mc().cm && xb(a, null);
  }
};
g.Ug = function () {
  return g.So;
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
g.zJ = function (a) {
  return function () {
    pc(this, a);
  };
};
g.Xi = function (a) {
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
        : (g.Y[e] &&
            console.warn(
              "Block definition #" +
                c +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (g.Y[e] = { aa: g.zJ(d) }));
    } else
      console.warn(
        "Block definition #" + c + " in JSON array is " + d + ". Skipping."
      );
  }
};
g.ta = function (a, c, d, e, f, h) {
  function k(x) {
    var I = !f;
    x = g.Touch.vL(x);
    for (var sa = 0, za; (za = x[sa]); sa++)
      if (!I || g.Touch.ky(za))
        g.Touch.nL(za), d ? e.call(d, za) : e(za), (l = !0);
  }
  var l = !1,
    m = [];
  if (g.g.global.PointerEvent && c in g.Touch.Cg)
    for (var n = 0, t; (t = g.Touch.Cg[c][n]); n++)
      a.addEventListener(t, k, !1), m.push([a, t, k]);
  else if ((a.addEventListener(c, k, !1), m.push([a, c, k]), c in g.Touch.Cg)) {
    var u = function (x) {
      k(x);
      var I = !h;
      l && I && x.preventDefault();
    };
    for (n = 0; (t = g.Touch.Cg[c][n]); n++)
      a.addEventListener(t, u, !1), m.push([a, t, u]);
  }
  return m;
};
g.Ud = function (a, c, d, e) {
  function f(n) {
    d ? e.call(d, n) : e(n);
  }
  var h = [];
  if (g.g.global.PointerEvent && c in g.Touch.Cg)
    for (var k = 0, l; (l = g.Touch.Cg[c][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f]);
  else if ((a.addEventListener(c, f, !1), h.push([a, c, f]), c in g.Touch.Cg)) {
    var m = function (n) {
      if (n.changedTouches && 1 == n.changedTouches.length) {
        var t = n.changedTouches[0];
        n.clientX = t.clientX;
        n.clientY = t.clientY;
      }
      f(n);
      n.preventDefault();
    };
    for (k = 0; (l = g.Touch.Cg[c][k]); k++)
      a.addEventListener(l, m, !1), h.push([a, l, m]);
  }
  return h;
};
g.Na = function (a) {
  for (; a.length; ) {
    var c = a.pop();
    c[0].removeEventListener(c[1], c[2], !1);
  }
};
g.pj = function (a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
g.lJ = function (a) {
  return g.g.vb.qC(a);
};
g.KH = function () {
  g.Ad("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  g.Ad("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  g.Ad("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  g.Ad("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  g.Ad("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  g.Ad("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  g.Ad("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  g.Ad("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  g.Ad("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  g.Ad("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  g.Ad("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  g.Ad("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  g.Ad("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  g.Ad("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  g.Ad("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  g.Ad("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
g.Ad = function (a, c, d) {
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
g.VO = function (a) {
  g.Ns = a;
};
var jd = {
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
  kd = "ace ar fa he mzn ps ur".split(" "),
  ld = window.BlocklyGamesLang,
  md = window.BlocklyGamesLanguages,
  nd = /\.html$/.test(window.location.pathname);
function od() {
  return -1 != kd.indexOf(ld);
}
var O,
  pd = Number,
  qd,
  rd = window.location.search.match(/[?&]level=([^&]+)/);
qd = rd ? decodeURIComponent(rd[1].replace(/\+/g, "%20")) : "NaN";
var sd = pd(qd);
O = isNaN(sd) ? 1 : g.g.ze.gm(1, sd, 10);
function td() {
  document.title = document.getElementById("title").textContent;
  document.dir = od() ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", ld);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var c = [], d = 0; d < md.length; d++) {
      var e = md[d];
      c.push([jd[e], e]);
    }
    c.sort(function (h, k) {
      return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0;
    });
    for (d = a.options.length = 0; d < c.length; d++) {
      var f = c[d];
      e = f[1];
      f = new Option(f[0], e);
      e == ld && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (d = 1; 10 >= d; d++)
    (a = document.getElementById("level" + d)),
      (c = !!ud(d)),
      a && c && (a.className += " level_done");
  (d = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(vd, 1);
}
function ud(a) {
  var c = wd;
  try {
    var d = window.localStorage[c + a];
  } catch (e) {}
  return d;
}
function P(a) {
  var c;
  (c = document.getElementById(a))
    ? ((c = c.textContent), (c = c.replace(/\\n/g, "\n")))
    : (c = null);
  return null === c ? "[Unknown message: " + a + "]" : c;
}
function xd(a, c) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", c, !0);
  a.addEventListener("touchend", c, !0);
}
function vd() {
  if (!nd) {
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
g.g.D.Ya = function (a, c) {
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
g.g.D.qa = function (a, c) {
  return " " + a + " " + c + " ";
};
g.g.D.arc = function (a, c, d, e) {
  return a + " " + d + " " + d + " " + c + e;
};
g.m.yh = function () {
  this.xg = 0;
  this.SG = 3;
  this.nf = 5;
  this.Gz = 8;
  this.Nd = 10;
  this.gA = this.nf;
  this.Pn = 15;
  this.Vl = 5;
  this.Qq = 8;
  this.wG = 15;
  this.gu = 4;
  this.pG = 12;
  this.ZE = 16;
  this.YE = this.bz = this.Pn;
  this.Tb = 8;
  this.XG = this.Hn = 15;
  this.dA = 0;
  this.fA = 20;
  this.rE = 4;
  this.iH = this.nf;
  this.jH = this.Nd;
  this.uE = this.nf;
  this.tE = this.Nd;
  this.$p = !1;
  this.VG = 15;
  this.WG = 100;
  this.UG = 15;
  this.En = 24;
  this.aF = 14.5;
  this.$E = this.Pn + 11;
  this.fF = 2;
  this.bF = this.En;
  this.cA = g.g.D.moveBy(0, 0);
  this.SF = 12;
  this.TF = 6;
  this.Bh = 11;
  this.Hi = "normal";
  this.Gi = "sans-serif";
  this.St = this.Vj = -1;
  this.xq = 4;
  this.Qt = 16;
  this.Ah = 5;
  this.El = 3;
  this.fz = "#fff";
  this.Tt = !g.g.userAgent.kf && !g.g.userAgent.Uj;
  this.hz = this.Qt;
  this.qF = this.pF = this.Rt = !1;
  this.sF = this.Ah;
  this.vn = 12;
  this.rF =
    "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
  this.gz = this.tF = !1;
  this.oF = 26;
  this.nF = this.Qt;
  this.mF = this.Ah - 3;
  this.lp = String(Math.random()).substring(2);
  this.Jr = "";
  this.Rv = null;
  this.uB = "";
  this.mo = this.qv = this.Av = null;
  this.rq = "#cc0a0a";
  this.Gq = "#4286f4";
  this.uq = 100;
  this.xA = 5;
  this.tq = 10;
  this.JE = 2;
  this.LE = 4;
  this.mz = !1;
  this.Xt = "#000000";
  this.Cq = 0.2;
  this.aA = { HG: 1, Nl: 2 };
};
b = g.m.yh.prototype;
b.aa = function () {
  this.Kl = this.Qw();
  this.Nl = this.Rw();
  this.Rl = this.Tw();
  this.ou = this.Sw();
  var a = this.Tb,
    c = g.g.D.arc("a", "0 0,0", a, g.g.D.Ya(-a, a)),
    d = g.g.D.arc("a", "0 0,0", a, g.g.D.Ya(a, a));
  this.Dq = { width: a, height: a, Fx: c, Qs: d };
  a = this.Tb;
  c = g.g.D.moveBy(0, a) + g.g.D.arc("a", "0 0,1", a, g.g.D.Ya(a, -a));
  d = g.g.D.arc("a", "0 0,1", a, g.g.D.Ya(a, a));
  var e = g.g.D.arc("a", "0 0,1", a, g.g.D.Ya(-a, -a)),
    f = g.g.D.arc("a", "0 0,1", a, g.g.D.Ya(-a, a));
  this.Ln = { yy: c, HL: d, FH: f, Uu: e, iL: a };
};
b.Ap = function (a) {
  this.Ri = {};
  var c = a.Ri,
    d;
  for (d in c) this.Ri[d] = yd(c[d]);
  this.Gi =
    a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.Gi;
  this.Hi =
    a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.Hi;
  this.Bh =
    a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.Bh;
  c = g.g.o.NC("Hg", this.Bh + "pt", this.Hi, this.Gi);
  this.Vj = c.height;
  this.St = c.tf;
  this.rq = xa(a, "cursorColour") || this.rq;
  this.Gq = xa(a, "markerColour") || this.Gq;
  this.Xt = xa(a, "insertionMarkerColour") || this.Xt;
  this.Cq = Number(xa(a, "insertionMarkerOpacity")) || this.Cq;
  this.$p = null != a.py ? a.py : this.$p;
};
function Lc(a, c) {
  var d = "auto_" + c;
  a.Ri[d] || (a.Ri[d] = yd({ colourPrimary: c }));
  return { style: a.Ri[d], name: d };
}
function Ic(a, c) {
  return (
    a.Ri[c || ""] ||
    (c && 0 == c.indexOf("auto_")
      ? Lc(a, c.substring(5)).style
      : yd({ colourPrimary: "#000000" }))
  );
}
function yd(a) {
  var c = {};
  a && g.g.object.Id(c, a);
  a = g.g.Os(c.colourPrimary || "#000");
  c.Ui = a.Io;
  c.colourSecondary
    ? (a = g.g.Os(c.colourSecondary).Io)
    : ((a = c.Ui), (a = g.g.vb.Ru("#fff", a, 0.6) || a));
  c.wr = a;
  c.colourTertiary
    ? (a = g.g.Os(c.colourTertiary).Io)
    : ((a = c.Ui), (a = g.g.vb.Ru("#fff", a, 0.3) || a));
  c.Th = a;
  c.Zg = c.hat || "";
  return c;
}
b.J = function () {
  this.Rv && g.g.o.removeNode(this.Rv);
  this.Av && g.g.o.removeNode(this.Av);
  this.qv && g.g.o.removeNode(this.qv);
  this.mo = null;
};
b.Qw = function () {
  var a = this.SF,
    c = this.TF,
    d = g.g.D.line([
      g.g.D.Ya(c, a / 4),
      g.g.D.Ya(2 * -c, a / 2),
      g.g.D.Ya(c, a / 4),
    ]);
  return { height: a, width: c, path: d };
};
b.Tw = function () {
  var a = this.VG,
    c = this.WG,
    d = g.g.D.curve("c", [g.g.D.Ya(30, -a), g.g.D.Ya(70, -a), g.g.D.Ya(c, 0)]);
  return { height: a, width: c, path: d };
};
b.Sw = function () {
  function a(h) {
    h = h ? -1 : 1;
    var k = -h,
      l = d / 2,
      m = g.g.D.Ya(c, h * l);
    return (
      g.g.D.curve("c", [
        g.g.D.Ya(0, h * (l + 2.5)),
        g.g.D.Ya(-c, k * (l + 0.5)),
        g.g.D.Ya(-c, h * l),
      ]) + g.g.D.curve("s", [g.g.D.Ya(c, 2.5 * k), m])
    );
  }
  var c = this.Qq,
    d = this.Pn,
    e = a(!0),
    f = a(!1);
  return { type: this.aA.HG, width: c, height: d, Jf: f, cp: e };
};
b.Rw = function () {
  function a(k) {
    return g.g.D.line([
      g.g.D.Ya(k * e, d),
      g.g.D.Ya(3 * k, 0),
      g.g.D.Ya(k * e, -d),
    ]);
  }
  var c = this.wG,
    d = this.gu,
    e = (c - 3) / 2,
    f = a(1),
    h = a(-1);
  return { type: this.aA.Nl, width: c, height: d, xj: f, lD: h };
};
function kb(a, c) {
  switch (c.type) {
    case g.jb:
    case g.Wf:
      return a.ou;
    case g.Xf:
    case g.kb:
      return a.Nl;
    default:
      throw Error("Unknown connection type");
  }
}
b.ab = function (a, c, d) {
  d = this.bw(d);
  c = "blockly-renderer-style-" + c;
  this.mo = document.getElementById(c);
  var e = d.join("\n");
  this.mo
    ? (this.mo.firstChild.textContent = e)
    : ((d = document.createElement("style")),
      (d.id = c),
      (c = document.createTextNode(e)),
      d.appendChild(c),
      document.head.insertBefore(d, document.head.firstChild),
      (this.mo = d));
  a = g.g.o.L(g.g.F.Yy, {}, a);
  c = g.g.o.L(g.g.F.iz, { id: "blocklyEmbossFilter" + this.lp }, a);
  g.g.o.L(g.g.F.jF, { in: "SourceAlpha", stdDeviation: 1, result: "blur" }, c);
  d = g.g.o.L(
    g.g.F.lF,
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
  g.g.o.L(g.g.F.kF, { x: -5e3, y: -1e4, z: 2e4 }, d);
  g.g.o.L(
    g.g.F.Pt,
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    c
  );
  g.g.o.L(
    g.g.F.Pt,
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
  this.Jr = c.id;
  this.Rv = c;
  c = g.g.o.L(
    g.g.F.Pz,
    {
      id: "blocklyDisabledPattern" + this.lp,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10,
    },
    a
  );
  g.g.o.L(g.g.F.Hc, { width: 10, height: 10, fill: "#aaa" }, c);
  g.g.o.L(g.g.F.pe, { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, c);
  this.uB = c.id;
  this.Av = c;
  g.m.cz &&
    ((a = g.g.o.L(
      g.g.F.iz,
      {
        id: "blocklyDebugFilter" + this.lp,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%",
      },
      a
    )),
    (c = g.g.o.L(g.g.F.gF, { result: "outBlur" }, a)),
    g.g.o.L(
      g.g.F.iF,
      { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" },
      c
    ),
    g.g.o.L(
      g.g.F.hF,
      { "flood-color": "#ff0000", "flood-opacity": 0.5, result: "outColor" },
      a
    ),
    g.g.o.L(
      g.g.F.Pt,
      { in: "outColor", in2: "outBlur", operator: "in", result: "outGlow" },
      a
    ),
    (this.qv = a));
};
b.bw = function (a) {
  return [
    a + " .blocklyText, ",
    a + " .blocklyFlyoutLabelText {",
    "font: " + this.Hi + " " + this.Bh + "pt " + this.Gi + ";",
    "}",
    a + " .blocklyText {",
    "fill: #fff;",
    "}",
    a + " .blocklyNonEditableText>rect,",
    a + " .blocklyEditableText>rect {",
    "fill: " + this.fz + ";",
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
    "font-family: " + this.Gi + ";",
    "font-weight: " + this.Hi + ";",
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
    "fill-opacity: " + this.Cq + ";",
    "stroke: none;",
    "}",
  ];
};
g.i.Dh = function (a, c, d, e) {
  var f = a ? a.u.id : void 0;
  e && e.wb() == g.G.types.$c && (f = e.Fa.id);
  g.i.Dh.v.constructor.call(this, f);
  this.ub = a ? a.id : null;
  this.aD = d;
  this.VC = e;
  this.bh = c;
};
g.g.object.V(g.i.Dh, g.i.Me);
g.i.Dh.prototype.type = g.i.Dz;
g.i.Dh.prototype.ya = function () {
  var a = g.i.Dh.v.ya.call(this);
  a.isCursor = this.bh;
  a.blockId = this.ub;
  a.oldNode = this.aD;
  a.newNode = this.VC;
  return a;
};
g.i.Dh.prototype.ma = function (a) {
  g.i.Dh.v.ma.call(this, a);
  this.bh = a.isCursor;
  this.ub = a.blockId;
  this.aD = a.oldNode;
  this.VC = a.newNode;
};
g.C.register(g.C.ea.jc, g.i.Dz, g.i.Dh);
g.m.Eh = function (a, c, d) {
  this.s = a;
  this.Ww = d;
  this.oi = null;
  this.B = c;
  this.nm = null;
  a = this.bh() ? this.B.rq : this.B.Gq;
  this.nd = d.vb || a;
};
g.m.Eh.KE = "blocklyCursor";
g.m.Eh.lG = "blocklyMarker";
g.m.Eh.GF = 0.75;
b = g.m.Eh.prototype;
b.Pa = function () {
  return this.N;
};
b.ae = function () {
  return this.Ww;
};
b.bh = function () {
  return "cursor" == this.Ww.type;
};
b.ab = function () {
  var a = this.bh() ? g.m.Eh.KE : g.m.Eh.lG;
  this.N = g.g.o.L(g.g.F.qc, { class: a }, null);
  this.li = g.g.o.L(g.g.F.qc, { width: this.B.uq, height: this.B.xA }, this.N);
  this.tj = g.g.o.L(
    g.g.F.Hc,
    { width: this.B.uq, height: this.B.xA, style: "display: none" },
    this.li
  );
  this.Sk = g.g.o.L(
    g.g.F.Hc,
    { class: "blocklyVerticalMarker", rx: 10, ry: 10, style: "display: none" },
    this.li
  );
  this.Rk = g.g.o.L(
    g.g.F.pe,
    { transform: "", style: "display: none" },
    this.li
  );
  this.ki = g.g.o.L(
    g.g.F.pe,
    {
      transform: "",
      style: "display: none",
      fill: "none",
      "stroke-width": this.B.LE,
    },
    this.li
  );
  this.bh() &&
    ((a = {
      attributeType: "XML",
      attributeName: "fill",
      dur: "1s",
      values: this.nd + ";transparent;transparent;",
      repeatCount: "indefinite",
    }),
    g.g.o.L(g.g.F.xt, a, this.tj),
    g.g.o.L(g.g.F.xt, a, this.Rk),
    (a.attributeName = "stroke"),
    g.g.o.L(g.g.F.xt, a, this.ki));
  return this.N;
};
function zd(a, c) {
  a.bh()
    ? (a.oi && a.oi.ri(null), c.ri(a.Pa()))
    : (a.oi && a.oi.ui(null), c.ui(a.Pa()));
  a.oi = c;
}
b.draw = function (a, c) {
  if (c) {
    this.B = this.s.Sb.U();
    var d = this.bh() ? this.B.rq : this.B.Gq;
    this.nd = this.Ww.vb || d;
    this.tj.setAttribute("fill", this.nd);
    this.Sk.setAttribute("stroke", this.nd);
    this.Rk.setAttribute("fill", this.nd);
    this.ki.setAttribute("stroke", this.nd);
    this.bh() &&
      ((d = this.nd + ";transparent;transparent;"),
      this.tj.firstChild.setAttribute("values", d),
      this.Rk.firstChild.setAttribute("values", d),
      this.ki.firstChild.setAttribute("values", d));
    d = c.Fa;
    if (c.wb() == g.G.types.oc) Ad(this, c);
    else if (c.wb() == g.G.types.ck) Ad(this, c);
    else if (d.type == g.jb) {
      var e = c.Fa;
      d = e.X();
      var f = e.Yk.x,
        h = e.Yk.y;
      e = g.g.D.moveTo(0, 0) + kb(this.B, e).Jf;
      this.Rk.setAttribute("d", e);
      this.Rk.setAttribute(
        "transform",
        "translate(" + f + "," + h + ")" + (this.s.M ? " scale(-1 1)" : "")
      );
      this.nm = this.Rk;
      zd(this, d);
      Bd(this);
    } else if (d.type == g.kb)
      (h = c.Fa),
        (d = h.X()),
        (f = 0),
        (h = h.Yk.y),
        (e = E(d).width),
        this.s.M && (f = -e),
        Cd(this, f, h, e),
        zd(this, d),
        Bd(this);
    else if (c.wb() == g.G.types.zd) Ad(this, c);
    else if (c.wb() == g.G.types.Fc)
      (d = c.Fa),
        (f = d.ai().width),
        (h = d.ai().height),
        Dd(this, 0, 0, f, h),
        zd(this, d),
        Bd(this);
    else if (c.wb() == g.G.types.$c)
      (f = c.ut),
        (d = f.x),
        (f = f.y),
        this.s.M && (d -= this.B.uq),
        Cd(this, d, f, this.B.uq),
        zd(this, this.s),
        Bd(this);
    else if (c.wb() == g.G.types.zg) {
      d = c.Fa;
      h = E(d);
      f = h.width + this.B.tq;
      h = h.height + this.B.tq;
      var k = (e = -this.B.tq / 2),
        l = -this.B.tq / 2;
      this.s.M && (k = -(f + e));
      Dd(this, k, l, f, h);
      zd(this, d);
      Bd(this);
    }
    d = c.X();
    a = new g.i.Dh(d, this.bh(), a, c);
    g.i.Ha(a);
    a = this.nm.childNodes[0];
    void 0 !== a && a.beginElement && a.beginElement();
  } else this.Oa();
};
function Ad(a, c) {
  c = c.X();
  var d = c.width,
    e = c.height,
    f = e * g.m.Eh.GF,
    h = a.B.JE;
  if (c.ka) {
    var k = kb(a.B, c.ka);
    e = k;
    d =
      g.g.D.moveBy(-h, f) +
      g.g.D.qa("V", -h) +
      g.g.D.qa("H", a.B.Hn) +
      e.xj +
      g.g.D.qa("H", d + 2 * h) +
      g.g.D.qa("V", f);
    a.ki.setAttribute("d", d);
  } else
    c.O
      ? ((f = k = kb(a.B, c.O)),
        (d =
          g.g.D.moveBy(d, 0) +
          g.g.D.qa("h", -(d - f.width)) +
          g.g.D.qa("v", a.B.Vl) +
          f.Jf +
          g.g.D.qa("V", e) +
          g.g.D.qa("H", d)),
        a.ki.setAttribute("d", d))
      : ((d =
          g.g.D.moveBy(-h, f) +
          g.g.D.qa("V", -h) +
          g.g.D.qa("H", d + 2 * h) +
          g.g.D.qa("V", f)),
        a.ki.setAttribute("d", d));
  a.s.M && a.vo(a.ki);
  a.nm = a.ki;
  zd(a, c);
  Bd(a);
}
function Bd(a) {
  a.Oa();
  a.nm.style.display = "";
}
function Cd(a, c, d, e) {
  a.tj.setAttribute("x", c);
  a.tj.setAttribute("y", d);
  a.tj.setAttribute("width", e);
  a.nm = a.tj;
}
function Dd(a, c, d, e, f) {
  a.Sk.setAttribute("x", c);
  a.Sk.setAttribute("y", d);
  a.Sk.setAttribute("width", e);
  a.Sk.setAttribute("height", f);
  a.nm = a.Sk;
}
b.vo = function (a) {
  a.setAttribute("transform", "scale(-1 1)");
};
b.Oa = function () {
  this.tj.style.display = "none";
  this.Sk.style.display = "none";
  this.Rk.style.display = "none";
  this.ki.style.display = "none";
};
b.J = function () {
  this.N && g.g.o.removeNode(this.N);
};
g.m.A = {
  NONE: 0,
  Fc: 1,
  oz: 2,
  rz: 4,
  wu: 8,
  My: 16,
  wz: 32,
  ez: 64,
  lf: 128,
  sz: 256,
  eA: 512,
  EE: 1024,
  nu: 2048,
  fu: 4096,
  AG: 8192,
  Kt: 16384,
  $t: 32768,
  Zt: 65536,
  uu: 131072,
  tu: 262144,
  Az: 524288,
  Lq: 1048576,
  Bu: 2097152,
  Ct: 4194304,
  uz: 8388608,
};
g.m.A.SM = g.m.A.$t | g.m.A.Zt;
g.m.A.$N = g.m.A.uu | g.m.A.tu;
g.m.A.ix = 16777216;
g.m.A.wb = function () {
  Object.prototype.hasOwnProperty.call(g.m.A, void 0) ||
    ((g.m.A[void 0] = g.m.A.ix), (g.m.A.ix <<= 1));
  return g.m.A[void 0];
};
g.m.A.gi = function (a) {
  return a.type & g.m.A.Fc;
};
g.m.A.Nk = function (a) {
  return a.type & g.m.A.oz;
};
g.m.A.Gm = function (a) {
  return a.type & g.m.A.rz;
};
g.m.A.Df = function (a) {
  return a.type & g.m.A.wu;
};
g.m.A.GO = function (a) {
  return a.type & g.m.A.wz;
};
g.m.A.mj = function (a) {
  return a.type & g.m.A.lf;
};
g.m.A.No = function (a) {
  return a.type & g.m.A.ez;
};
g.m.A.lj = function (a) {
  return a.type & g.m.A.sz;
};
g.m.A.Pk = function (a) {
  return a.type & g.m.A.eA;
};
g.m.A.Lm = function (a) {
  return a.type & g.m.A.nu;
};
g.m.A.oj = function (a) {
  return a.type & g.m.A.fu;
};
g.m.A.xJ = function (a) {
  return a.type & (g.m.A.nu | g.m.A.fu);
};
g.m.A.nj = function (a) {
  return a.type & g.m.A.Zt;
};
g.m.A.zC = function (a) {
  return a.type & g.m.A.tu;
};
g.m.A.Oo = function (a) {
  return a.type & g.m.A.$t;
};
g.m.A.HO = function (a) {
  return a.type & g.m.A.uu;
};
g.m.A.FO = function (a) {
  return a.type & g.m.A.Kt;
};
g.m.A.xC = function (a) {
  return a.type & g.m.A.Az;
};
g.m.A.JO = function (a) {
  return a.type & g.m.A.Lq;
};
g.m.A.DO = function (a) {
  return a.type & g.m.A.My;
};
g.m.A.ks = function (a) {
  return a.type & g.m.A.Bu;
};
g.m.A.$r = function (a) {
  return a.type & g.m.A.Ct;
};
g.m.A.yJ = function (a) {
  return a.type & (g.m.A.Bu | g.m.A.Ct);
};
g.m.A.tJ = function (a) {
  return a.type & g.m.A.uz;
};
g.m.Li = function (a) {
  this.height = this.width = 0;
  this.type = g.m.A.NONE;
  this.fm = this.Za = 0;
  this.B = a;
  this.Gf = this.B.Hn;
};
g.m.Ba = function (a, c) {
  g.m.Ba.v.constructor.call(this, a);
  this.Vd = c;
  this.shape = kb(this.B, c);
  this.Mk = !!this.shape.isDynamic;
  this.type |= g.m.A.EE;
};
g.g.object.V(g.m.Ba, g.m.Li);
g.m.mu = function (a, c) {
  g.m.mu.v.constructor.call(this, a, c);
  this.type |= g.m.A.AG;
  this.height = this.Mk ? 0 : this.shape.height;
  this.Mf = this.width = this.Mk ? 0 : this.shape.width;
  this.Qe = this.B.Vl;
  this.co = 0;
};
g.g.object.V(g.m.mu, g.m.Ba);
g.m.pu = function (a, c) {
  g.m.pu.v.constructor.call(this, a, c);
  this.type |= g.m.A.nu;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.V(g.m.pu, g.m.Ba);
g.m.iu = function (a, c) {
  g.m.iu.v.constructor.call(this, a, c);
  this.type |= g.m.A.fu;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.V(g.m.iu, g.m.Ba);
g.m.zn = function (a, c) {
  g.m.zn.v.constructor.call(this, a, c.connection);
  this.type |= g.m.A.lf;
  this.input = c;
  this.align = c.align;
  (this.Vi = c.connection && c.connection.sa() ? c.connection.sa() : null)
    ? ((a = E(this.Vi)), (this.ao = a.width), (this.yr = a.height))
    : (this.yr = this.ao = 0);
  this.Qe = this.co = 0;
};
g.g.object.V(g.m.zn, g.m.Ba);
g.m.Ji = function (a, c) {
  g.m.Ji.v.constructor.call(this, a, c);
  this.type |= g.m.A.sz;
  this.Vi
    ? ((this.width = this.ao), (this.height = this.yr))
    : ((this.height = this.B.$E), (this.width = this.B.aF));
  this.im = this.Mk ? this.shape.height(this.height) : this.shape.height;
  this.Mg = this.Mk ? this.shape.width(this.height) : this.shape.width;
  this.Vi || (this.width += this.Mg * (this.Mk ? 2 : 1));
  this.Qe = this.Mk ? this.shape.Qe(this.im) : this.B.Vl;
  this.co = this.Mk ? this.shape.co(this.Mg) : 0;
};
g.g.object.V(g.m.Ji, g.m.zn);
g.m.Pi = function (a, c) {
  g.m.Pi.v.constructor.call(this, a, c);
  this.type |= g.m.A.eA;
  this.height = this.Vi ? this.yr + this.B.dA : this.B.bF;
  this.width = this.B.XG + this.shape.width;
};
g.g.object.V(g.m.Pi, g.m.zn);
g.m.wq = function (a, c) {
  g.m.wq.v.constructor.call(this, a, c);
  this.type |= g.m.A.ez;
  this.height = this.Vi ? this.yr - this.B.Vl - this.B.nf : this.shape.height;
  this.width = this.shape.width + this.B.fF;
  this.Qe = this.B.Vl;
  this.im = this.shape.height;
  this.Mg = this.shape.width;
};
g.g.object.V(g.m.wq, g.m.zn);
g.m.oe = function (a, c) {
  g.m.oe.v.constructor.call(this, a);
  this.icon = c;
  this.isVisible = c.isVisible();
  this.type |= g.m.A.rz;
  a = new g.g.re(g.oe.prototype.Nq, g.oe.prototype.Nq - 2);
  this.height = a.height;
  this.width = a.width;
};
g.g.object.V(g.m.oe, g.m.Li);
g.m.Yt = function (a) {
  g.m.Yt.v.constructor.call(this, a);
  this.type |= g.m.A.Az;
  this.height = this.B.Kl.height;
  this.width = this.B.Kl.width;
};
g.g.object.V(g.m.Yt, g.m.Li);
g.m.jd = function (a, c) {
  g.m.jd.v.constructor.call(this, a);
  this.BB = c;
  this.ge = c.un;
  this.CI = c.RB();
  this.type |= g.m.A.Fc;
  a = this.BB.ai();
  this.height = a.height;
  this.width = a.width;
};
g.g.object.V(g.m.jd, g.m.Li);
g.m.Ut = function (a) {
  g.m.Ut.v.constructor.call(this, a);
  this.type |= g.m.A.oz;
  this.height = this.B.Rl.height;
  this.width = this.B.Rl.width;
  this.bm = this.height;
};
g.g.object.V(g.m.Ut, g.m.Li);
g.m.Ul = function (a, c) {
  g.m.Ul.v.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.A.uu : g.m.A.$t) | g.m.A.Kt;
  this.width = this.height = this.B.xg;
};
g.g.object.V(g.m.Ul, g.m.Li);
g.m.Mq = function (a, c) {
  g.m.Mq.v.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.A.tu : g.m.A.Zt) | g.m.A.Kt;
  this.width = this.B.Tb;
  this.height = this.B.Tb / 2;
};
g.g.object.V(g.m.Mq, g.m.Li);
g.m.Ch = function (a, c) {
  g.m.Ch.v.constructor.call(this, a);
  this.type = this.type | g.m.A.wu | g.m.A.wz;
  this.width = c;
  this.height = this.B.UG;
};
g.g.object.V(g.m.Ch, g.m.Li);
g.m.ek = function (a) {
  this.type = g.m.A.Lq;
  this.elements = [];
  this.Za = this.Yc = this.rg = this.minWidth = this.minHeight = this.width = this.height = 0;
  this.iC = this.Bm = this.pw = this.Jc = this.dj = !1;
  this.B = a;
  this.Gf = this.B.Hn;
  this.align = null;
};
g.m.ek.prototype.measure = function () {
  throw Error("Unexpected attempt to measure a base Row.");
};
function Ed(a) {
  for (var c = a.elements.length - 1, d; (d = a.elements[c]); c--)
    if (g.m.A.mj(d)) return d;
  return null;
}
g.m.ek.prototype.gt = function () {
  return !0;
};
g.m.ek.prototype.qo = function () {
  return !0;
};
g.m.kk = function (a) {
  g.m.kk.v.constructor.call(this, a);
  this.type |= g.m.A.Bu;
  this.bm = this.Qh = 0;
  this.iJ = !1;
  this.connection = null;
};
g.g.object.V(g.m.kk, g.m.ek);
g.m.kk.prototype.qw = function (a) {
  var c = (a.Zg ? "cap" === a.Zg : this.B.$p) && !a.O && !a.ka,
    d = a.ka && a.ka.sa();
  return !!a.O || c || (d ? q(d) == a : !1);
};
g.m.kk.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.A.Df(f) ||
        (g.m.A.Nk(f) ? (d = Math.max(d, f.bm)) : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Qh = this.bm = d;
  this.rg = this.width;
};
g.m.kk.prototype.gt = function () {
  return !1;
};
g.m.kk.prototype.qo = function () {
  return !1;
};
g.m.Pj = function (a) {
  g.m.Pj.v.constructor.call(this, a);
  this.type |= g.m.A.Ct;
  this.jC = !1;
  this.connection = null;
  this.tf = this.oo = 0;
};
g.g.object.V(g.m.Pj, g.m.ek);
g.m.Pj.prototype.qw = function (a) {
  return !!a.O || !!q(a);
};
g.m.Pj.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.A.Df(f) ||
        (g.m.A.oj(f)
          ? (d = Math.max(d, f.height))
          : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.oo = d;
  this.rg = this.width;
};
g.m.Pj.prototype.gt = function () {
  return !1;
};
g.m.Pj.prototype.qo = function () {
  return !1;
};
g.m.Pq = function (a, c, d) {
  g.m.Pq.v.constructor.call(this, a);
  this.type = this.type | g.m.A.wu | g.m.A.My;
  this.width = d;
  this.height = c;
  this.HB = !1;
  this.rg = 0;
  this.elements = [new g.m.Ch(this.B, d)];
};
g.g.object.V(g.m.Pq, g.m.ek);
g.m.Pq.prototype.measure = function () {};
g.m.Jl = function (a) {
  g.m.Jl.v.constructor.call(this, a);
  this.type |= g.m.A.uz;
  this.ZA = 0;
};
g.g.object.V(g.m.Jl, g.m.ek);
g.m.Jl.prototype.measure = function () {
  this.width = this.minWidth;
  this.height = this.minHeight;
  for (var a = 0, c = 0, d; (d = this.elements[c]); c++)
    (this.width += d.width),
      g.m.A.mj(d) &&
        (g.m.A.Pk(d)
          ? (a += d.ao)
          : g.m.A.No(d) && 0 != d.ao && (a += d.ao - d.Mg)),
      g.m.A.Df(d) || (this.height = Math.max(this.height, d.height));
  this.ZA = a;
  this.rg = this.width + a;
};
g.m.Jl.prototype.qo = function () {
  return !this.dj && !this.Jc;
};
g.m.Yf = function (a, c) {
  this.R = c;
  this.Sb = a;
  this.B = this.Sb.U();
  this.O = c.O ? new g.m.mu(this.B, c.O) : null;
  this.Hm = lb(c) && !c.isCollapsed();
  this.isCollapsed = c.isCollapsed();
  this.ie = c.ie();
  this.M = c.M;
  this.Ij = this.width = this.ln = this.height = 0;
  this.rows = [];
  this.sC = [];
  this.nC = [];
  this.Ec = new g.m.kk(this.B);
  this.Xb = new g.m.Pj(this.B);
  this.ft = this.Mf = 0;
};
b = g.m.Yf.prototype;
b.measure = function () {
  var a = !!this.R.ka,
    c = (this.R.Zg ? "cap" === this.R.Zg : this.B.$p) && !this.O && !a;
  this.Ec.qw(this.R)
    ? this.Ec.elements.push(new g.m.Ul(this.B))
    : this.Ec.elements.push(new g.m.Mq(this.B));
  c
    ? ((a = new g.m.Ut(this.B)), this.Ec.elements.push(a), (this.Ec.Qh = a.bm))
    : a &&
      ((this.Ec.iJ = !0),
      (this.Ec.connection = new g.m.pu(this.B, this.R.ka)),
      this.Ec.elements.push(this.Ec.connection));
  this.R.S.length && this.R.S[0].type == g.kb && !this.R.isCollapsed()
    ? (this.Ec.minHeight = this.B.jH)
    : (this.Ec.minHeight = this.B.iH);
  this.Ec.elements.push(new g.m.Ul(this.B, "right"));
  this.rows.push(this.Ec);
  a = new g.m.Jl(this.B);
  this.sC.push(a);
  var d = mb(this.R);
  if (d.length) {
    c = 0;
    for (var e; (e = d[c]); c++) {
      var f = new g.m.oe(this.B, e);
      this.isCollapsed && e.VA ? this.nC.push(f) : a.elements.push(f);
    }
  }
  e = null;
  for (c = 0; (d = this.R.S[c]); c++)
    if (d.isVisible()) {
      !e ||
        (d.type != g.kb &&
          e.type != g.kb &&
          ((d.type != g.jb && d.type != g.zh) || this.Hm)) ||
        (this.rows.push(a), (a = new g.m.Jl(this.B)), this.sC.push(a));
      for (e = 0; (f = d.hb[e]); e++) a.elements.push(new g.m.jd(this.B, f, d));
      this.GA(d, a);
      e = d;
    }
  this.isCollapsed && ((a.iC = !0), a.elements.push(new g.m.Yt(this.B)));
  (a.elements.length || a.Bm) && this.rows.push(a);
  this.Jx();
  this.rows.push(this.Xb);
  this.FA();
  a = this.rows;
  this.rows = [];
  for (c = 0; c < a.length; c++)
    if ((this.rows.push(a[c]), c != a.length - 1)) {
      d = this.rows;
      e = d.push;
      f = a[c];
      var h = a[c + 1],
        k = new g.m.Pq(this.B, this.ZB(f, h), this.width - this.Mf);
      f.Jc && (k.HB = !0);
      h.Jc && (k.NO = !0);
      e.call(d, k);
    }
  for (e = d = c = a = 0; (f = this.rows[e]); e++)
    f.measure(),
      (c = Math.max(c, f.width)),
      f.Jc && (a = Math.max(a, f.width - Ed(f).width)),
      (d = Math.max(d, f.rg));
  this.Ij = a;
  this.width = c;
  for (e = 0; (f = this.rows[e]); e++) f.Jc && (f.Ij = this.Ij);
  this.ln = Math.max(c, d);
  this.O &&
    ((this.Mf = this.O.width),
    (this.width += this.O.width),
    (this.ln += this.O.width));
  this.Ku();
  this.CB();
};
b.Jx = function () {
  this.Xb.jC = !!this.R.W;
  this.Xb.minHeight =
    this.R.S.length && this.R.S[this.R.S.length - 1].type == g.kb
      ? this.B.tE
      : this.B.uE;
  this.Xb.qw(this.R)
    ? this.Xb.elements.push(new g.m.Ul(this.B))
    : this.Xb.elements.push(new g.m.Mq(this.B));
  this.Xb.jC &&
    ((this.Xb.connection = new g.m.iu(this.B, this.R.W)),
    this.Xb.elements.push(this.Xb.connection));
  this.Xb.elements.push(new g.m.Ul(this.B, "right"));
};
b.GA = function (a, c) {
  this.Hm && a.type == g.jb
    ? (c.elements.push(new g.m.Ji(this.B, a)), (c.pw = !0))
    : a.type == g.kb
    ? (c.elements.push(new g.m.Pi(this.B, a)), (c.Jc = !0))
    : a.type == g.jb
    ? (c.elements.push(new g.m.wq(this.B, a)), (c.dj = !0))
    : a.type == g.zh &&
      ((c.minHeight = Math.max(
        c.minHeight,
        a.X() && a.X().Ra ? this.B.YE : this.B.bz
      )),
      (c.Bm = !0));
  null == c.align && (c.align = a.align);
};
b.FA = function () {
  for (var a = 0, c; (c = this.rows[a]); a++) {
    var d = c.elements;
    c.elements = [];
    c.gt() && c.elements.push(new g.m.Ch(this.B, this.Ak(null, d[0])));
    if (d.length) {
      for (var e = 0; e < d.length - 1; e++)
        c.elements.push(d[e]),
          c.elements.push(new g.m.Ch(this.B, this.Ak(d[e], d[e + 1])));
      c.elements.push(d[d.length - 1]);
      c.qo() &&
        c.elements.push(new g.m.Ch(this.B, this.Ak(d[d.length - 1], null)));
    }
  }
};
b.Ak = function (a, c) {
  if (!a && c && g.m.A.Pk(c)) return this.B.fA;
  if (a && g.m.A.mj(a) && !c) {
    if (g.m.A.No(a)) return this.B.xg;
    if (g.m.A.lj(a)) return this.B.Nd;
    if (g.m.A.Pk(a)) return this.B.xg;
  }
  return a && g.m.A.Oo(a) && c && (g.m.A.Lm(c) || g.m.A.oj(c))
    ? c.Gf
    : a && g.m.A.nj(a) && c && (g.m.A.Lm(c) || g.m.A.oj(c))
    ? c.Gf - this.B.Tb
    : this.B.nf;
};
b.Ku = function () {
  for (var a = 0, c; (c = this.rows[a]); a++)
    if (c.Jc) Fd(this, c);
    else {
      var d = this.Co(c) - c.width;
      0 < d && Gd(c, d);
      g.m.A.yJ(c) && (c.rg = c.width);
    }
};
b.Co = function () {
  return this.width - this.Mf;
};
function Gd(a, c) {
  a: {
    var d = 0;
    for (var e; (e = a.elements[d]); d++)
      if (g.m.A.Df(e)) {
        d = e;
        break a;
      }
    d = null;
  }
  a: {
    e = a.elements.length - 1;
    for (var f; (f = a.elements[e]); e--)
      if (g.m.A.Df(f)) {
        e = f;
        break a;
      }
    e = null;
  }
  if (a.dj || a.Jc) a.rg += c;
  a.align == g.wt
    ? (e.width += c)
    : a.align == g.vt
    ? ((d.width += c / 2), (e.width += c / 2))
    : a.align == g.Zc
    ? (d.width += c)
    : (e.width += c);
  a.width += c;
}
function Fd(a, c) {
  var d = Ed(c),
    e = c.width - d.width,
    f = a.Ij;
  e = f - e;
  0 < e && Gd(c, e);
  e = c.width;
  f = a.Co(c);
  d.width += f - e;
  d.height = Math.max(d.height, c.height);
  c.width += f - e;
  c.rg = Math.max(c.width, a.Ij + c.ZA);
}
b.ZB = function () {
  return this.B.nf;
};
b.PB = function (a, c) {
  return g.m.A.Df(c)
    ? a.Yc + c.height / 2
    : g.m.A.$r(a)
    ? ((a = a.Yc + a.height - a.oo),
      g.m.A.oj(c) ? a + c.height / 2 : a - c.height / 2)
    : g.m.A.ks(a)
    ? g.m.A.Nk(c)
      ? a.Qh - c.height / 2
      : a.Qh + c.height / 2
    : a.Yc + a.height / 2;
};
function Hd(a, c) {
  for (var d = c.Za, e = 0, f; (f = c.elements[e]); e++)
    g.m.A.Df(f) && (f.height = c.height),
      (f.Za = d),
      (f.fm = a.PB(c, f)),
      (d += f.width);
}
b.CB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++)
    (e.Yc = c),
      (e.Za = this.Mf),
      (c += e.height),
      (a = Math.max(a, e.rg)),
      Hd(this, e);
  this.O &&
    this.R.W &&
    this.R.W.isConnected() &&
    (a = Math.max(a, E(this.R.W.sa()).width));
  this.ln = a + this.Mf;
  this.height = c;
  this.ft = this.Ec.Qh;
  this.Xb.tf = c - this.Xb.oo;
};
g.m.Kd = function (a, c) {
  this.R = a;
  this.Ea = c;
  a.bb();
  this.Zr = this.ib = "";
  this.B = c.Sb.U();
};
b = g.m.Kd.prototype;
b.draw = function () {
  Id(this);
  Jd(this);
  Kd(this);
  this.R.Gb.$x(this.ib + "\n" + this.Zr);
  this.Ea.M && this.R.Gb.Wv();
  g.m.Up && this.R.Tx.uI(this.R, this.Ea);
  Ld(this);
};
function Ld(a) {
  a.R.height = a.Ea.height;
  a.R.width = a.Ea.ln;
}
function Id(a) {
  for (var c = 0, d; (d = a.Ea.nC[c]); c++)
    d.icon.ee.setAttribute("display", "none");
}
function Jd(a) {
  a.Nv();
  for (var c = 1; c < a.Ea.rows.length - 1; c++) {
    var d = a.Ea.rows[c];
    d.iC ? a.po(d) : d.Jc ? a.Mv(d) : d.dj ? a.Ov(d) : a.zB(d);
  }
  a.Iv();
  a.Lv();
}
b.Nv = function () {
  var a = this.Ea.Ec,
    c = a.elements,
    d = this.Ea.Ec;
  if (d.connection) {
    var e = d.Za + d.Gf;
    Bc(d.connection.Vd, this.Ea.M ? -e : e, 0);
  }
  this.ib += g.g.D.moveBy(a.Za, this.Ea.ft);
  for (d = 0; (e = c[d]); d++)
    g.m.A.nj(e)
      ? (this.ib += this.B.Ln.yy)
      : g.m.A.zC(e)
      ? (this.ib += this.B.Ln.HL)
      : g.m.A.Lm(e)
      ? (this.ib += e.shape.xj)
      : g.m.A.Nk(e)
      ? (this.ib += this.B.Rl.path)
      : g.m.A.Df(e) && (this.ib += g.g.D.qa("h", e.width));
  this.ib += g.g.D.qa("v", a.height);
};
b.po = function (a) {
  this.ib += this.B.Kl.path + g.g.D.qa("v", a.height - this.B.Kl.height);
};
b.Ov = function (a) {
  var c = Ed(a);
  this.nD(a);
  var d = "function" == typeof c.shape.Jf ? c.shape.Jf(c.height) : c.shape.Jf;
  this.ib += g.g.D.qa("H", c.Za + c.width) + d + g.g.D.qa("v", a.height - c.im);
};
b.Mv = function (a) {
  var c = Ed(a);
  this.ib +=
    g.g.D.qa("H", c.Za + c.Gf + c.shape.width) +
    (c.shape.lD + g.g.D.qa("h", -(c.Gf - this.B.Dq.width)) + this.B.Dq.Fx) +
    g.g.D.qa("v", a.height - 2 * this.B.Dq.height) +
    this.B.Dq.Qs +
    g.g.D.qa("H", a.Za + a.width);
  this.qD(a);
};
b.zB = function (a) {
  this.ib += g.g.D.qa("V", a.Yc + a.height);
};
b.Iv = function () {
  var a = this.Ea.Xb,
    c = a.elements;
  this.pD();
  for (var d = 0, e = "", f = c.length - 1, h; (h = c[f]); f--)
    g.m.A.oj(h)
      ? (e += h.shape.lD)
      : g.m.A.Oo(h)
      ? (e += g.g.D.qa("H", a.Za))
      : g.m.A.nj(h)
      ? (e += this.B.Ln.Uu)
      : g.m.A.zC(h)
      ? ((e += this.B.Ln.FH), (d = this.B.Ln.iL))
      : g.m.A.Df(h) && (e += g.g.D.qa("h", -1 * h.width));
  this.ib += g.g.D.qa("V", a.tf - d);
  this.ib += e;
};
b.Lv = function () {
  var a = this.Ea.O;
  if (this.Ea.O) {
    var c = this.Ea.Mf + this.Ea.O.co;
    Bc(this.R.O, this.Ea.M ? -c : c, this.Ea.O.Qe);
  }
  a &&
    ((c = a.Qe + a.height),
    (a = "function" == typeof a.shape.cp ? a.shape.cp(a.height) : a.shape.cp),
    (this.ib += g.g.D.qa("V", c) + a));
  this.ib += "z";
};
function Kd(a) {
  for (var c = 0, d; (d = a.Ea.rows[c]); c++)
    for (var e = 0, f; (f = d.elements[e]); e++)
      if (g.m.A.lj(f)) a.Kv(f);
      else if (g.m.A.Gm(f) || g.m.A.gi(f)) {
        var h = a;
        if (g.m.A.gi(f)) var k = f.BB.Pa();
        else g.m.A.Gm(f) && (k = f.icon.ee);
        var l = f.fm - f.height / 2,
          m = f.Za,
          n = "";
        h.Ea.M &&
          ((m = -(m + f.width)), f.CI && ((m += f.width), (n = "scale(-1 1)")));
        g.m.A.Gm(f)
          ? (k.setAttribute("display", "block"),
            k.setAttribute("transform", "translate(" + m + "," + l + ")"),
            Wa(f.icon))
          : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        h.Ea.ie && k.setAttribute("display", "none");
      }
}
b.Kv = function (a) {
  var c = a.width,
    d = a.height,
    e = a.Qe,
    f = a.im + e;
  this.Zr +=
    g.g.D.moveTo(a.Za + a.Mg, a.fm - d / 2) +
    g.g.D.qa("v", e) +
    a.shape.Jf +
    g.g.D.qa("v", d - f) +
    g.g.D.qa("h", c - a.Mg) +
    g.g.D.qa("v", -d) +
    "z";
  this.oD(a);
};
b.oD = function (a) {
  var c = a.fm - a.height / 2;
  if (a.Vd) {
    var d = a.Za + a.Mg + a.co;
    this.Ea.M && (d *= -1);
    Bc(a.Vd, d, c + a.Qe);
  }
};
b.qD = function (a) {
  var c = Ed(a);
  if (c.Vd) {
    var d = a.Za + a.Ij + c.Gf;
    this.Ea.M && (d *= -1);
    Bc(c.Vd, d, a.Yc);
  }
};
b.nD = function (a) {
  var c = Ed(a);
  if (c.Vd) {
    var d = a.Za + a.width;
    this.Ea.M && (d *= -1);
    Bc(c.Vd, d, a.Yc);
  }
};
b.pD = function () {
  var a = this.Ea.Xb;
  if (a.connection) {
    var c = a.connection,
      d = c.Za;
    Bc(c.Vd, this.Ea.M ? -d : d, a.tf);
  }
};
g.m.Fh = function (a, c, d) {
  this.km = d;
  this.qh = a;
  this.Pb = g.g.o.L(g.g.F.pe, { class: "blocklyPath" }, this.qh);
  this.style = c;
  this.Vw = this.no = null;
};
b = g.m.Fh.prototype;
b.$x = function (a) {
  this.Pb.setAttribute("d", a);
};
b.Wv = function () {
  this.Pb.setAttribute("transform", "scale(-1 1)");
};
b.ri = function (a) {
  a ? (this.qh.appendChild(a), (this.no = a)) : (this.no = null);
};
b.ui = function (a) {
  a
    ? (this.no ? this.qh.insertBefore(a, this.no) : this.qh.appendChild(a),
      (this.Vw = a))
    : (this.Vw = null);
};
b.kc = function (a) {
  this.Pb.setAttribute("stroke", this.style.Th);
  this.Pb.setAttribute("fill", this.style.Ui);
  this.aE(a.Ra);
  this.By(!a.isEnabled() || oc(a));
};
b.Jb = function (a) {
  this.style = a;
};
function jb(a, c, d) {
  d ? g.g.o.Ga(a.qh, c) : g.g.o.hc(a.qh, c);
}
b.ZD = function (a) {
  a
    ? this.Pb.setAttribute("filter", "url(#" + this.km.Jr + ")")
    : this.Pb.setAttribute("filter", "none");
};
b.aE = function (a) {
  a &&
    (this.Pb.setAttribute("stroke", "none"),
    this.Pb.setAttribute("fill", this.style.wr));
};
b.By = function (a) {
  jb(this, "blocklyDisabled", a);
  a && this.Pb.setAttribute("fill", "url(#" + this.km.uB + ")");
};
g.m.Gh = function (a) {
  this.name = a;
  this.Bx = this.B = null;
};
b = g.m.Gh.prototype;
b.hg = function () {
  return this.name + "-renderer";
};
b.aa = function (a, c) {
  this.B = this.Ow();
  c && ((this.Bx = c), g.g.object.Id(this.B, c));
  this.B.Ap(a);
  this.B.aa();
};
b.ab = function (a, c) {
  this.B.ab(a, this.name + "-" + c.name, "." + this.hg() + "." + c.hg());
};
b.Ox = function (a, c) {
  var d = this.U();
  d.J();
  this.B = this.Ow();
  this.Bx && g.g.object.Id(this.B, this.Bx);
  this.B.lp = d.lp;
  this.B.Ap(c);
  this.B.aa();
  this.ab(a, c);
};
b.J = function () {
  this.B && this.B.J();
};
b.Ow = function () {
  return new g.m.yh();
};
b.MC = function (a) {
  return new g.m.Yf(this, a);
};
b.KC = function (a, c) {
  return new g.m.Kd(a, c);
};
b.LC = function (a, c) {
  return new g.m.Fh(a, c, this.B);
};
b.U = function () {
  return this.B;
};
b.Ia = function (a) {
  if (g.m.Up && !a.Tx) {
    if (!g.m.cz)
      throw Error("Missing require for Blockly.blockRendering.Debug");
    var c = new g.m.cz(this.U());
    a.Tx = c;
  }
  c = this.MC(a);
  c.measure();
  this.KC(a, c).draw();
};
g.va = {};
g.va.yh = function () {
  g.va.yh.v.constructor.call(this);
  this.Tt = !1;
  this.hd = 1;
  this.mG = 30;
  this.dA = -this.gu / 2;
};
g.g.object.V(g.va.yh, g.m.yh);
g.va.yh.prototype.bw = function (a) {
  return g.va.yh.v.bw
    .call(this, a)
    .concat([
      a + " .blocklyInsertionMarker>.blocklyPathLight,",
      a + " .blocklyInsertionMarker>.blocklyPathDark {",
      "fill-opacity: " + this.Cq + ";",
      "stroke: none;",
      "}",
    ]);
};
g.va.qz = function (a) {
  this.Ea = a;
  this.Ko = this.xa = "";
  this.kd = this.Ea.M;
  a = a.Sb;
  this.B = a.U();
  this.Xe = a.Xe;
  this.we = this.Xe.OFFSET;
  this.Ax = this.Xe.BG;
  this.Dm = this.Xe.PF;
  this.kp = this.Xe.ou;
  this.ZJ = this.Xe.Nl;
  this.yL = this.Xe.Rl;
  this.CC = this.Xe.Kl;
};
g.va.qz.prototype.po = function (a) {
  this.Ea.M &&
    (this.xa +=
      this.CC.xj + g.g.D.qa("v", a.height - this.CC.height - this.we));
};
function Md(a, c) {
  var d = c.Za + c.width - a.we;
  c.HB && (a.xa += g.g.D.qa("H", d));
  a.kd &&
    ((a.xa += g.g.D.qa("H", d)),
    c.height > a.we && (a.xa += g.g.D.qa("V", c.Yc + c.height - a.we)));
}
g.va.Ji = function (a, c) {
  g.va.Ji.v.constructor.call(this, a, c);
  this.Vi && ((this.width += this.B.hd), (this.height += this.B.hd));
};
g.g.object.V(g.va.Ji, g.m.Ji);
g.va.Pi = function (a, c) {
  g.va.Pi.v.constructor.call(this, a, c);
  this.Vi && (this.height += this.B.hd);
};
g.g.object.V(g.va.Pi, g.m.Pi);
g.va.Yf = function (a, c) {
  g.va.Yf.v.constructor.call(this, a, c);
};
g.g.object.V(g.va.Yf, g.m.Yf);
b = g.va.Yf.prototype;
b.Jx = function () {
  g.va.Yf.v.Jx.call(this);
  (this.R.S.length && this.R.S[this.R.S.length - 1].type == g.kb) ||
    (this.Xb.minHeight = this.B.nf - this.B.hd);
};
b.GA = function (a, c) {
  this.Hm && a.type == g.jb
    ? (c.elements.push(new g.va.Ji(this.B, a)), (c.pw = !0))
    : a.type == g.kb
    ? (c.elements.push(new g.va.Pi(this.B, a)), (c.Jc = !0))
    : a.type == g.jb
    ? (c.elements.push(new g.m.wq(this.B, a)), (c.dj = !0))
    : a.type == g.zh &&
      ((c.minHeight = Math.max(c.minHeight, this.B.bz)), (c.Bm = !0));
  this.Hm || null != c.align || (c.align = a.align);
};
b.FA = function () {
  for (var a = !1, c = 0, d; (d = this.rows[c]); c++) d.dj && (a = !0);
  for (c = 0; (d = this.rows[c]); c++) {
    var e = d.elements;
    d.elements = [];
    d.gt() && d.elements.push(new g.m.Ch(this.B, this.Ak(null, e[0])));
    if (e.length) {
      for (var f = 0; f < e.length - 1; f++) {
        d.elements.push(e[f]);
        var h = this.Ak(e[f], e[f + 1]);
        d.elements.push(new g.m.Ch(this.B, h));
      }
      d.elements.push(e[e.length - 1]);
      d.qo() &&
        ((h = this.Ak(e[e.length - 1], null)),
        a && d.Bm && (h += this.B.Qq),
        d.elements.push(new g.m.Ch(this.B, h)));
    }
  }
};
b.Ak = function (a, c) {
  if (!a)
    return c && g.m.A.gi(c) && c.ge
      ? this.B.nf
      : c && g.m.A.lj(c)
      ? this.B.Gz
      : c && g.m.A.Pk(c)
      ? this.B.fA
      : this.B.Nd;
  if (!g.m.A.mj(a) && (!c || g.m.A.Pk(c)))
    return g.m.A.gi(a) && a.ge
      ? this.B.nf
      : g.m.A.Gm(a)
      ? 2 * this.B.Nd + 1
      : g.m.A.Nk(a)
      ? this.B.xg
      : g.m.A.xJ(a)
      ? this.B.Nd
      : g.m.A.nj(a)
      ? this.B.pG
      : g.m.A.xC(a)
      ? this.B.xg
      : this.B.Nd;
  if (g.m.A.mj(a) && !c) {
    if (g.m.A.No(a)) return this.B.xg;
    if (g.m.A.lj(a)) return this.B.Nd;
    if (g.m.A.Pk(a)) return this.B.xg;
  }
  if (!g.m.A.mj(a) && c && g.m.A.mj(c)) {
    if (g.m.A.gi(a) && a.ge) {
      if (g.m.A.lj(c) || g.m.A.No(c)) return this.B.SG;
    } else {
      if (g.m.A.lj(c) || g.m.A.No(c)) return this.B.Gz;
      if (g.m.A.Pk(c)) return this.B.Nd;
    }
    return this.B.Nd - 1;
  }
  if (g.m.A.Gm(a) && c && !g.m.A.mj(c)) return this.B.Nd;
  if (g.m.A.lj(a) && c && g.m.A.gi(c)) return c.ge ? this.B.nf : this.B.Nd;
  if (g.m.A.Oo(a) && c) {
    if (g.m.A.Nk(c)) return this.B.xg;
    if (g.m.A.Lm(c)) return c.Gf;
    if (g.m.A.oj(c)) return (a = ((this.M ? 1 : -1) * this.B.hd) / 2), c.Gf + a;
  }
  if (g.m.A.nj(a) && c) {
    if (g.m.A.Lm(c)) return c.Gf - this.B.Tb;
    if (g.m.A.oj(c))
      return (a = ((this.M ? 1 : -1) * this.B.hd) / 2), c.Gf - this.B.Tb + a;
  }
  return (g.m.A.gi(a) && c && g.m.A.gi(c) && a.ge == c.ge) || (c && g.m.A.xC(c))
    ? this.B.Nd
    : this.B.nf;
};
b.ZB = function (a, c) {
  return g.m.A.ks(a) && g.m.A.$r(c)
    ? this.B.ZE
    : g.m.A.ks(a) || g.m.A.$r(c)
    ? this.B.xg
    : a.dj && c.dj
    ? this.B.Nd
    : !a.Jc && c.Jc
    ? this.B.rE
    : (a.Jc && c.Jc) || (!a.Jc && c.Bm) || a.Bm
    ? this.B.Nd
    : this.B.nf;
};
b.PB = function (a, c) {
  if (g.m.A.Df(c)) return a.Yc + c.height / 2;
  if (g.m.A.$r(a))
    return (
      (a = a.Yc + a.height - a.oo),
      g.m.A.oj(c) ? a + c.height / 2 : a - c.height / 2
    );
  if (g.m.A.ks(a))
    return g.m.A.Nk(c) ? a.Qh - c.height / 2 : a.Qh + c.height / 2;
  var d = a.Yc;
  g.m.A.gi(c) || g.m.A.Gm(c)
    ? ((d += c.height / 2),
      (a.pw || a.Jc) && c.height + this.B.gA <= a.height && (d += this.B.gA))
    : (d = g.m.A.lj(c) ? d + c.height / 2 : d + a.height / 2);
  return d;
};
b.Ku = function () {
  if (this.Hm) {
    for (
      var a = 0, c = null, d = this.rows.length - 1, e;
      (e = this.rows[d]);
      d--
    )
      (e.hx = a),
        g.m.A.tJ(e) &&
          (e.Jc && Fd(this, e),
          c && c.Jc && e.width < c.width ? (e.hx = c.width) : (a = e.width),
          (c = e));
    for (d = a = 0; (e = this.rows[d]); d++)
      e.Jc
        ? (a = this.Co(e))
        : g.m.A.Df(e)
        ? (e.width = Math.max(a, e.hx))
        : ((a = Math.max(a, e.hx) - e.width), 0 < a && Gd(e, a), (a = e.width));
  } else g.va.Yf.v.Ku.call(this);
};
b.Co = function (a) {
  return this.Hm && a.Jc
    ? this.Ij + this.B.mG + this.Mf
    : g.va.Yf.v.Co.call(this, a);
};
b.CB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++) {
    e.Yc = c;
    e.Za = this.Mf;
    c += e.height;
    a = Math.max(a, e.rg);
    var f = c - this.Ec.bm;
    e == this.Xb &&
      f < this.B.En &&
      ((f = this.B.En - f), (this.Xb.height += f), (c += f));
    Hd(this, e);
  }
  this.O &&
    this.R.W &&
    this.R.W.isConnected() &&
    (a = Math.max(a, E(this.R.W.sa()).width - this.B.hd));
  this.Xb.tf = c - this.Xb.oo;
  this.ln = a + this.Mf + this.B.hd;
  this.width += this.B.hd;
  this.height = c + this.B.hd;
  this.ft = this.Ec.Qh;
};
g.va.Kd = function (a, c) {
  g.va.Kd.v.constructor.call(this, a, c);
  this.$g = new g.va.qz(c);
};
g.g.object.V(g.va.Kd, g.m.Kd);
b = g.va.Kd.prototype;
b.draw = function () {
  Id(this);
  Jd(this);
  Kd(this);
  var a = this.R.Gb;
  a.$x(this.ib + "\n" + this.Zr);
  var c = this.$g;
  a.ml.setAttribute("d", c.xa + "\n" + c.Ko);
  this.Ea.M && a.Wv();
  g.m.Up && this.R.Tx.uI(this.R, this.Ea);
  Ld(this);
};
b.Nv = function () {
  var a = this.$g,
    c = this.Ea.Ec;
  a.xa += g.g.D.moveBy(c.Za, a.Ea.ft);
  for (var d = 0, e; (e = c.elements[d]); d++)
    g.m.A.Oo(e)
      ? (a.xa += a.Xe.cA)
      : g.m.A.nj(e)
      ? (a.xa += a.Ax.yy(a.kd))
      : g.m.A.Lm(e)
      ? (a.xa += a.ZJ.xj)
      : g.m.A.Nk(e)
      ? (a.xa += a.yL.path(a.kd))
      : g.m.A.Df(e) &&
        0 != e.width &&
        (a.xa += g.g.D.qa("H", e.Za + e.width - a.we));
  a.xa += g.g.D.qa("H", c.Za + c.width - a.we);
  Md(this.$g, this.Ea.Ec);
  g.va.Kd.v.Nv.call(this);
};
b.po = function (a) {
  this.$g.po(a);
  g.va.Kd.v.po.call(this, a);
};
b.Ov = function (a) {
  var c = this.$g,
    d = Ed(a);
  if (c.kd) {
    var e = a.height - d.im;
    c.xa +=
      g.g.D.moveTo(d.Za + d.width - c.we, a.Yc) +
      c.kp.Jf(c.kd) +
      g.g.D.qa("v", e);
  } else c.xa += g.g.D.moveTo(d.Za + d.width, a.Yc) + c.kp.Jf(c.kd);
  g.va.Kd.v.Ov.call(this, a);
};
b.Mv = function (a) {
  var c = this.$g,
    d = Ed(a);
  if (c.kd) {
    var e = a.height - 2 * c.Dm.height;
    c.xa +=
      g.g.D.moveTo(d.Za, a.Yc) +
      c.Dm.Fx(c.kd) +
      g.g.D.qa("v", e) +
      c.Dm.Qs(c.kd) +
      g.g.D.lineTo(a.width - d.Za - c.Dm.width, 0);
  } else
    c.xa +=
      g.g.D.moveTo(d.Za, a.Yc + a.height) +
      c.Dm.Qs(c.kd) +
      g.g.D.lineTo(a.width - d.Za - c.Dm.width, 0);
  g.va.Kd.v.Mv.call(this, a);
};
b.zB = function (a) {
  Md(this.$g, a);
  this.ib += g.g.D.qa("H", a.Za + a.width) + g.g.D.qa("V", a.Yc + a.height);
};
b.Iv = function () {
  var a = this.$g,
    c = this.Ea.Xb;
  if (a.kd) a.xa += g.g.D.qa("V", c.tf - a.we);
  else {
    var d = a.Ea.Xb.elements[0];
    g.m.A.Oo(d)
      ? (a.xa += g.g.D.moveTo(c.Za + a.we, c.tf - a.we))
      : g.m.A.nj(d) &&
        ((a.xa += g.g.D.moveTo(c.Za, c.tf)), (a.xa += a.Ax.Uu()));
  }
  g.va.Kd.v.Iv.call(this);
};
b.Lv = function () {
  var a = this.$g,
    c = a.Ea.O;
  c &&
    ((c = c.Qe + c.height),
    a.kd
      ? (a.xa += g.g.D.moveTo(a.Ea.Mf, c))
      : ((a.xa += g.g.D.moveTo(a.Ea.Mf + a.we, a.Ea.Xb.tf - a.we)),
        (a.xa += g.g.D.qa("V", c))),
    (a.xa += a.kp.cp(a.kd)));
  a.kd ||
    ((c = a.Ea.Ec),
    (a.xa = g.m.A.nj(c.elements[0])
      ? a.xa + g.g.D.qa("V", a.Ax.height)
      : a.xa + g.g.D.qa("V", c.Qh + a.we)));
  g.va.Kd.v.Lv.call(this);
};
b.Kv = function (a) {
  var c = this.$g,
    d = c.we,
    e = a.Za + a.Mg,
    f = a.fm - a.height / 2,
    h = a.width - a.Mg,
    k = f + d;
  if (c.kd) {
    f = a.Qe - d;
    var l = a.height - (a.Qe + a.im) + d;
    c.Ko +=
      g.g.D.moveTo(e - d, k) +
      g.g.D.qa("v", f) +
      c.kp.Jf(c.kd) +
      g.g.D.qa("v", l) +
      g.g.D.qa("h", h);
  } else
    c.Ko +=
      g.g.D.moveTo(a.Za + a.width + d, k) +
      g.g.D.qa("v", a.height) +
      g.g.D.qa("h", -h) +
      g.g.D.moveTo(e, f + a.Qe) +
      c.kp.Jf(c.kd);
  g.va.Kd.v.Kv.call(this, a);
};
b.oD = function (a) {
  var c = a.fm - a.height / 2;
  if (a.Vd) {
    var d = a.Za + a.Mg + this.B.hd;
    this.Ea.M && (d *= -1);
    Bc(a.Vd, d, c + a.Qe + this.B.hd);
  }
};
b.qD = function (a) {
  var c = Ed(a);
  if (c.Vd) {
    var d = a.Za + a.Ij + c.Gf;
    d = this.Ea.M ? -1 * d : d + this.B.hd;
    Bc(c.Vd, d, a.Yc + this.B.hd);
  }
};
b.nD = function (a) {
  var c = Ed(a);
  if (c.Vd) {
    var d = a.Za + a.width + this.B.hd;
    this.Ea.M && (d *= -1);
    Bc(c.Vd, d, a.Yc);
  }
};
b.pD = function () {
  var a = this.Ea.Xb;
  if (a.connection) {
    var c = a.connection,
      d = c.Za;
    Bc(c.Vd, (this.Ea.M ? -d : d) + this.B.hd / 2, a.tf + this.B.hd);
  }
};
g.va.pz = function (a) {
  this.jm = a;
  this.OFFSET = 0.5;
  this.cA = g.g.D.moveBy(this.OFFSET, this.OFFSET);
};
b = g.va.pz.prototype;
b.aa = function () {
  this.PF = Nd(this);
  this.BG = Od(this);
  this.ou = this.Sw();
  this.Nl = this.Rw();
  this.Kl = this.Qw();
  this.Rl = this.Tw();
};
function Nd(a) {
  var c = a.jm.Tb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c + a) - a,
    e =
      g.g.D.moveBy(d, d) + g.g.D.arc("a", "0 0,0", c, g.g.D.Ya(-d - a, c - d)),
    f = g.g.D.arc("a", "0 0,0", c + a, g.g.D.Ya(c + a, c + a)),
    h =
      g.g.D.moveBy(d, -d) +
      g.g.D.arc("a", "0 0,0", c + a, g.g.D.Ya(c - d, d + a));
  return {
    width: c + a,
    height: c,
    Fx: function (k) {
      return k ? e : "";
    },
    Qs: function (k) {
      return k ? f : h;
    },
  };
}
function Od(a) {
  var c = a.jm.Tb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c - a) + a,
    e =
      g.g.D.moveBy(d, d) +
      g.g.D.arc("a", "0 0,1", c - a, g.g.D.Ya(c - d, -d + a)),
    f =
      g.g.D.moveBy(a, c) + g.g.D.arc("a", "0 0,1", c - a, g.g.D.Ya(c, -c + a)),
    h = -d,
    k =
      g.g.D.moveBy(d, h) +
      g.g.D.arc("a", "0 0,1", c - a, g.g.D.Ya(-d + a, -h - c));
  return {
    height: c,
    yy: function (l) {
      return l ? e : f;
    },
    Uu: function () {
      return k;
    },
  };
}
b.Sw = function () {
  var a = this.jm.Qq,
    c = this.jm.Pn,
    d = g.g.D.moveBy(-2, -c + 3.4) + g.g.D.lineTo(-0.45 * a, -2.1),
    e =
      g.g.D.qa("v", 2.5) +
      g.g.D.moveBy(0.97 * -a, 2.5) +
      g.g.D.curve("q", [g.g.D.Ya(0.05 * -a, 10), g.g.D.Ya(0.3 * a, 9.5)]) +
      g.g.D.moveBy(0.67 * a, -1.9) +
      g.g.D.qa("v", 2.5),
    f =
      g.g.D.qa("v", -1.5) +
      g.g.D.moveBy(-0.92 * a, -0.5) +
      g.g.D.curve("q", [g.g.D.Ya(-0.19 * a, -5.5), g.g.D.Ya(0, -11)]) +
      g.g.D.moveBy(0.92 * a, 1),
    h = g.g.D.moveBy(-5, c - 0.7) + g.g.D.lineTo(0.46 * a, -2.1);
  return {
    width: a,
    height: c,
    cp: function (k) {
      return k ? d : f;
    },
    Jf: function (k) {
      return k ? e : h;
    },
  };
};
b.Rw = function () {
  return { xj: g.g.D.qa("h", this.OFFSET) + this.jm.Nl.xj };
};
b.Qw = function () {
  return {
    xj:
      g.g.D.lineTo(5.1, 2.6) +
      g.g.D.moveBy(-10.2, 6.8) +
      g.g.D.lineTo(5.1, 2.6),
    height: 12,
    width: 10.2,
  };
};
b.Tw = function () {
  var a = this.jm.Rl.height,
    c =
      g.g.D.moveBy(25, -8.7) +
      g.g.D.curve("c", [
        g.g.D.Ya(29.7, -6.2),
        g.g.D.Ya(57.2, -0.5),
        g.g.D.Ya(75, 8.7),
      ]),
    d =
      g.g.D.curve("c", [
        g.g.D.Ya(17.8, -9.2),
        g.g.D.Ya(45.3, -14.9),
        g.g.D.Ya(75, -8.7),
      ]) + g.g.D.moveTo(100.5, a + 0.5);
  return {
    path: function (e) {
      return e ? c : d;
    },
  };
};
g.va.Fh = function (a, c, d) {
  this.km = d;
  this.qh = a;
  this.Kp = g.g.o.L(
    g.g.F.pe,
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.qh
  );
  this.Pb = g.g.o.L(g.g.F.pe, { class: "blocklyPath" }, this.qh);
  this.ml = g.g.o.L(g.g.F.pe, { class: "blocklyPathLight" }, this.qh);
  this.dv = "#000000";
  this.style = c;
};
g.g.object.V(g.va.Fh, g.m.Fh);
b = g.va.Fh.prototype;
b.$x = function (a) {
  this.Pb.setAttribute("d", a);
  this.Kp.setAttribute("d", a);
};
b.Wv = function () {
  this.Pb.setAttribute("transform", "scale(-1 1)");
  this.ml.setAttribute("transform", "scale(-1 1)");
  this.Kp.setAttribute("transform", "translate(1,1) scale(-1 1)");
};
b.kc = function (a) {
  this.ml.style.display = "";
  this.Kp.style.display = "";
  this.ml.setAttribute("stroke", this.style.Th);
  this.Kp.setAttribute("fill", this.dv);
  g.va.Fh.v.kc.call(this, a);
  this.Pb.setAttribute("stroke", "none");
};
b.Jb = function (a) {
  this.style = a;
  this.dv = g.g.vb.Ru("#000", this.style.Ui, 0.2) || this.dv;
};
b.ZD = function (a) {
  a
    ? (this.Pb.setAttribute("filter", "url(#" + this.km.Jr + ")"),
      (this.ml.style.display = "none"))
    : (this.Pb.setAttribute("filter", "none"),
      (this.ml.style.display = "inline"));
};
b.aE = function (a) {
  a &&
    ((this.ml.style.display = "none"),
    this.Kp.setAttribute("fill", this.style.wr),
    this.Pb.setAttribute("stroke", "none"),
    this.Pb.setAttribute("fill", this.style.wr));
};
b.By = function (a) {
  g.va.Fh.v.By.call(this, a);
  a && this.Pb.setAttribute("stroke", "none");
};
g.va.Gh = function (a) {
  g.va.Gh.v.constructor.call(this, a);
  this.Xe = null;
};
g.g.object.V(g.va.Gh, g.m.Gh);
b = g.va.Gh.prototype;
b.aa = function (a, c) {
  g.va.Gh.v.aa.call(this, a, c);
  this.Xe = new g.va.pz(this.U());
  this.Xe.aa();
};
b.Ox = function (a, c) {
  g.va.Gh.v.Ox.call(this, a, c);
  this.Xe.aa();
};
b.Ow = function () {
  return new g.va.yh();
};
b.MC = function (a) {
  return new g.va.Yf(this, a);
};
b.KC = function (a, c) {
  return new g.va.Kd(a, c);
};
b.LC = function (a, c) {
  return new g.va.Fh(a, c, this.U());
};
g.m.register("geras", g.va.Gh);
g.h.ADD_COMMENT = "Add Comment";
g.h.CANNOT_DELETE_VARIABLE_PROCEDURE =
  "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
g.h.CHANGE_VALUE_TITLE = "Change value:";
g.h.CLEAN_UP = "Clean up Blocks";
g.h.COLLAPSED_WARNINGS_WARNING = "Collapsed blocks contain warnings.";
g.h.COLLAPSE_ALL = "Collapse Blocks";
g.h.COLLAPSE_BLOCK = "Collapse Block";
g.h.COLOUR_BLEND_COLOUR1 = "colour 1";
g.h.COLOUR_BLEND_COLOUR2 = "colour 2";
g.h.COLOUR_BLEND_HELPURL =
  "https://meyerweb.com/eric/tools/color-blend/#:::rgbp";
g.h.COLOUR_BLEND_RATIO = "ratio";
g.h.COLOUR_BLEND_TITLE = "blend";
g.h.COLOUR_BLEND_TOOLTIP =
  "Blends two colours together with a given ratio (0.0 - 1.0).";
g.h.COLOUR_PICKER_HELPURL = "https://en.wikipedia.org/wiki/Color";
g.h.COLOUR_PICKER_TOOLTIP = "Choose a colour from the palette.";
g.h.COLOUR_RANDOM_HELPURL = "http://randomcolour.com";
g.h.COLOUR_RANDOM_TITLE = "random colour";
g.h.COLOUR_RANDOM_TOOLTIP = "Choose a colour at random.";
g.h.COLOUR_RGB_BLUE = "blue";
g.h.COLOUR_RGB_GREEN = "green";
g.h.COLOUR_RGB_HELPURL =
  "https://www.december.com/html/spec/colorpercompact.html";
g.h.COLOUR_RGB_RED = "red";
g.h.COLOUR_RGB_TITLE = "colour with";
g.h.COLOUR_RGB_TOOLTIP =
  "Create a colour with the specified amount of red, green, and blue. All values must be between 0 and 100.";
g.h.CONTROLS_FLOW_STATEMENTS_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#loop-termination-blocks";
g.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_BREAK = "break out of loop";
g.h.CONTROLS_FLOW_STATEMENTS_OPERATOR_CONTINUE =
  "continue with next iteration of loop";
g.h.CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK =
  "Break out of the containing loop.";
g.h.CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE =
  "Skip the rest of this loop, and continue with the next iteration.";
g.h.CONTROLS_FLOW_STATEMENTS_WARNING =
  "Warning: This block may only be used within a loop.";
g.h.CONTROLS_FOREACH_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#for-each";
g.h.CONTROLS_FOREACH_TITLE = "for each item %1 in list %2";
g.h.CONTROLS_FOREACH_TOOLTIP =
  "For each item in a list, set the variable '%1' to the item, and then do some statements.";
g.h.CONTROLS_FOR_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#count-with";
g.h.CONTROLS_FOR_TITLE = "count with %1 from %2 to %3 by %4";
g.h.CONTROLS_FOR_TOOLTIP =
  "Have the variable '%1' take on the values from the start number to the end number, counting by the specified interval, and do the specified blocks.";
g.h.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
g.h.CONTROLS_IF_ELSE_TOOLTIP =
  "Add a final, catch-all condition to the if block.";
g.h.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
g.h.CONTROLS_IF_IF_TOOLTIP =
  "Add, remove, or reorder sections to reconfigure this if block.";
g.h.CONTROLS_IF_MSG_ELSE = "else";
g.h.CONTROLS_IF_MSG_ELSEIF = "else if";
g.h.CONTROLS_IF_MSG_IF = "if";
g.h.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
g.h.CONTROLS_IF_TOOLTIP_2 =
  "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
g.h.CONTROLS_IF_TOOLTIP_3 =
  "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
g.h.CONTROLS_IF_TOOLTIP_4 =
  "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
g.h.CONTROLS_REPEAT_HELPURL = "https://en.wikipedia.org/wiki/For_loop";
g.h.CONTROLS_REPEAT_INPUT_DO = "do";
g.h.CONTROLS_REPEAT_TITLE = "repeat %1 times";
g.h.CONTROLS_REPEAT_TOOLTIP = "Do some statements several times.";
g.h.CONTROLS_WHILEUNTIL_HELPURL =
  "https://github.com/google/blockly/wiki/Loops#repeat";
g.h.CONTROLS_WHILEUNTIL_OPERATOR_UNTIL = "repeat until";
g.h.CONTROLS_WHILEUNTIL_OPERATOR_WHILE = "repeat while";
g.h.CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL =
  "While a value is false, then do some statements.";
g.h.CONTROLS_WHILEUNTIL_TOOLTIP_WHILE =
  "While a value is true, then do some statements.";
g.h.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
g.h.DELETE_BLOCK = "Delete Block";
g.h.DELETE_VARIABLE = "Delete the '%1' variable";
g.h.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
g.h.DELETE_X_BLOCKS = "Delete %1 Blocks";
g.h.DISABLE_BLOCK = "Disable Block";
g.h.DUPLICATE_BLOCK = "Duplicate";
g.h.DUPLICATE_COMMENT = "Duplicate Comment";
g.h.ENABLE_BLOCK = "Enable Block";
g.h.EXPAND_ALL = "Expand Blocks";
g.h.EXPAND_BLOCK = "Expand Block";
g.h.EXTERNAL_INPUTS = "External Inputs";
g.h.HELP = "Help";
g.h.INLINE_INPUTS = "Inline Inputs";
g.h.LISTS_CREATE_EMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-empty-list";
g.h.LISTS_CREATE_EMPTY_TITLE = "create empty list";
g.h.LISTS_CREATE_EMPTY_TOOLTIP =
  "Returns a list, of length 0, containing no data records";
g.h.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD = "list";
g.h.LISTS_CREATE_WITH_CONTAINER_TOOLTIP =
  "Add, remove, or reorder sections to reconfigure this list block.";
g.h.LISTS_CREATE_WITH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.h.LISTS_CREATE_WITH_INPUT_WITH = "create list with";
g.h.LISTS_CREATE_WITH_ITEM_TOOLTIP = "Add an item to the list.";
g.h.LISTS_CREATE_WITH_TOOLTIP = "Create a list with any number of items.";
g.h.LISTS_GET_INDEX_FIRST = "first";
g.h.LISTS_GET_INDEX_FROM_END = "# from end";
g.h.LISTS_GET_INDEX_FROM_START = "#";
g.h.LISTS_GET_INDEX_GET = "get";
g.h.LISTS_GET_INDEX_GET_REMOVE = "get and remove";
g.h.LISTS_GET_INDEX_LAST = "last";
g.h.LISTS_GET_INDEX_RANDOM = "random";
g.h.LISTS_GET_INDEX_REMOVE = "remove";
g.h.LISTS_GET_INDEX_TAIL = "";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_FIRST = "Returns the first item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_FROM =
  "Returns the item at the specified position in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_LAST = "Returns the last item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM = "Returns a random item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST =
  "Removes and returns the first item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM =
  "Removes and returns the item at the specified position in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST =
  "Removes and returns the last item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM =
  "Removes and returns a random item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST = "Removes the first item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM =
  "Removes the item at the specified position in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST = "Removes the last item in a list.";
g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM = "Removes a random item in a list.";
g.h.LISTS_GET_SUBLIST_END_FROM_END = "to # from end";
g.h.LISTS_GET_SUBLIST_END_FROM_START = "to #";
g.h.LISTS_GET_SUBLIST_END_LAST = "to last";
g.h.LISTS_GET_SUBLIST_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-a-sublist";
g.h.LISTS_GET_SUBLIST_START_FIRST = "get sub-list from first";
g.h.LISTS_GET_SUBLIST_START_FROM_END = "get sub-list from # from end";
g.h.LISTS_GET_SUBLIST_START_FROM_START = "get sub-list from #";
g.h.LISTS_GET_SUBLIST_TAIL = "";
g.h.LISTS_GET_SUBLIST_TOOLTIP =
  "Creates a copy of the specified portion of a list.";
g.h.LISTS_INDEX_FROM_END_TOOLTIP = "%1 is the last item.";
g.h.LISTS_INDEX_FROM_START_TOOLTIP = "%1 is the first item.";
g.h.LISTS_INDEX_OF_FIRST = "find first occurrence of item";
g.h.LISTS_INDEX_OF_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#getting-items-from-a-list";
g.h.LISTS_INDEX_OF_LAST = "find last occurrence of item";
g.h.LISTS_INDEX_OF_TOOLTIP =
  "Returns the index of the first/last occurrence of the item in the list. Returns %1 if item is not found.";
g.h.LISTS_INLIST = "in list";
g.h.LISTS_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#is-empty";
g.h.LISTS_ISEMPTY_TITLE = "%1 is empty";
g.h.LISTS_ISEMPTY_TOOLTIP = "Returns true if the list is empty.";
g.h.LISTS_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#length-of";
g.h.LISTS_LENGTH_TITLE = "length of %1";
g.h.LISTS_LENGTH_TOOLTIP = "Returns the length of a list.";
g.h.LISTS_REPEAT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#create-list-with";
g.h.LISTS_REPEAT_TITLE = "create list with item %1 repeated %2 times";
g.h.LISTS_REPEAT_TOOLTIP =
  "Creates a list consisting of the given value repeated the specified number of times.";
g.h.LISTS_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#reversing-a-list";
g.h.LISTS_REVERSE_MESSAGE0 = "reverse %1";
g.h.LISTS_REVERSE_TOOLTIP = "Reverse a copy of a list.";
g.h.LISTS_SET_INDEX_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#in-list--set";
g.h.LISTS_SET_INDEX_INPUT_TO = "as";
g.h.LISTS_SET_INDEX_INSERT = "insert at";
g.h.LISTS_SET_INDEX_SET = "set";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST =
  "Inserts the item at the start of a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM =
  "Inserts the item at the specified position in a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST =
  "Append the item to the end of a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM =
  "Inserts the item randomly in a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_FIRST = "Sets the first item in a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_FROM =
  "Sets the item at the specified position in a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_LAST = "Sets the last item in a list.";
g.h.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM = "Sets a random item in a list.";
g.h.LISTS_SORT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#sorting-a-list";
g.h.LISTS_SORT_ORDER_ASCENDING = "ascending";
g.h.LISTS_SORT_ORDER_DESCENDING = "descending";
g.h.LISTS_SORT_TITLE = "sort %1 %2 %3";
g.h.LISTS_SORT_TOOLTIP = "Sort a copy of a list.";
g.h.LISTS_SORT_TYPE_IGNORECASE = "alphabetic, ignore case";
g.h.LISTS_SORT_TYPE_NUMERIC = "numeric";
g.h.LISTS_SORT_TYPE_TEXT = "alphabetic";
g.h.LISTS_SPLIT_HELPURL =
  "https://github.com/google/blockly/wiki/Lists#splitting-strings-and-joining-lists";
g.h.LISTS_SPLIT_LIST_FROM_TEXT = "make list from text";
g.h.LISTS_SPLIT_TEXT_FROM_LIST = "make text from list";
g.h.LISTS_SPLIT_TOOLTIP_JOIN =
  "Join a list of texts into one text, separated by a delimiter.";
g.h.LISTS_SPLIT_TOOLTIP_SPLIT =
  "Split text into a list of texts, breaking at each delimiter.";
g.h.LISTS_SPLIT_WITH_DELIMITER = "with delimiter";
g.h.LOGIC_BOOLEAN_FALSE = "false";
g.h.LOGIC_BOOLEAN_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#values";
g.h.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
g.h.LOGIC_BOOLEAN_TRUE = "true";
g.h.LOGIC_COMPARE_HELPURL =
  "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
g.h.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
g.h.LOGIC_COMPARE_TOOLTIP_GT =
  "Return true if the first input is greater than the second input.";
g.h.LOGIC_COMPARE_TOOLTIP_GTE =
  "Return true if the first input is greater than or equal to the second input.";
g.h.LOGIC_COMPARE_TOOLTIP_LT =
  "Return true if the first input is smaller than the second input.";
g.h.LOGIC_COMPARE_TOOLTIP_LTE =
  "Return true if the first input is smaller than or equal to the second input.";
g.h.LOGIC_COMPARE_TOOLTIP_NEQ =
  "Return true if both inputs are not equal to each other.";
g.h.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
g.h.LOGIC_NEGATE_TITLE = "not %1";
g.h.LOGIC_NEGATE_TOOLTIP =
  "Returns true if the input is false. Returns false if the input is true.";
g.h.LOGIC_NULL = "null";
g.h.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
g.h.LOGIC_NULL_TOOLTIP = "Returns null.";
g.h.LOGIC_OPERATION_AND = "and";
g.h.LOGIC_OPERATION_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#logical-operations";
g.h.LOGIC_OPERATION_OR = "or";
g.h.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
g.h.LOGIC_OPERATION_TOOLTIP_OR =
  "Return true if at least one of the inputs is true.";
g.h.LOGIC_TERNARY_CONDITION = "test";
g.h.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
g.h.LOGIC_TERNARY_IF_FALSE = "if false";
g.h.LOGIC_TERNARY_IF_TRUE = "if true";
g.h.LOGIC_TERNARY_TOOLTIP =
  "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
g.h.MATH_ADDITION_SYMBOL = "+";
g.h.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
g.h.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
g.h.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
g.h.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
g.h.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
g.h.MATH_ARITHMETIC_TOOLTIP_POWER =
  "Return the first number raised to the power of the second number.";
g.h.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2";
g.h.MATH_ATAN2_TITLE = "atan2 of X:%1 Y:%2";
g.h.MATH_ATAN2_TOOLTIP =
  "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
g.h.MATH_CHANGE_HELPURL =
  "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
g.h.MATH_CHANGE_TITLE = "change %1 by %2";
g.h.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
g.h.MATH_CONSTANT_HELPURL =
  "https://en.wikipedia.org/wiki/Mathematical_constant";
g.h.MATH_CONSTANT_TOOLTIP =
  "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
g.h.MATH_CONSTRAIN_HELPURL =
  "https://en.wikipedia.org/wiki/Clamping_(graphics)";
g.h.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
g.h.MATH_CONSTRAIN_TOOLTIP =
  "Constrain a number to be between the specified limits (inclusive).";
g.h.MATH_DIVISION_SYMBOL = "\u00f7";
g.h.MATH_IS_DIVISIBLE_BY = "is divisible by";
g.h.MATH_IS_EVEN = "is even";
g.h.MATH_IS_NEGATIVE = "is negative";
g.h.MATH_IS_ODD = "is odd";
g.h.MATH_IS_POSITIVE = "is positive";
g.h.MATH_IS_PRIME = "is prime";
g.h.MATH_IS_TOOLTIP =
  "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
g.h.MATH_IS_WHOLE = "is whole";
g.h.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
g.h.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
g.h.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
g.h.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
g.h.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
g.h.MATH_NUMBER_TOOLTIP = "A number.";
g.h.MATH_ONLIST_HELPURL = "";
g.h.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
g.h.MATH_ONLIST_OPERATOR_MAX = "max of list";
g.h.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
g.h.MATH_ONLIST_OPERATOR_MIN = "min of list";
g.h.MATH_ONLIST_OPERATOR_MODE = "modes of list";
g.h.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
g.h.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
g.h.MATH_ONLIST_OPERATOR_SUM = "sum of list";
g.h.MATH_ONLIST_TOOLTIP_AVERAGE =
  "Return the average (arithmetic mean) of the numeric values in the list.";
g.h.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
g.h.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
g.h.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
g.h.MATH_ONLIST_TOOLTIP_MODE =
  "Return a list of the most common item(s) in the list.";
g.h.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
g.h.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
g.h.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
g.h.MATH_POWER_SYMBOL = "^";
g.h.MATH_RANDOM_FLOAT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.h.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
g.h.MATH_RANDOM_FLOAT_TOOLTIP =
  "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
g.h.MATH_RANDOM_INT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.h.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
g.h.MATH_RANDOM_INT_TOOLTIP =
  "Return a random integer between the two specified limits, inclusive.";
g.h.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
g.h.MATH_ROUND_OPERATOR_ROUND = "round";
g.h.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
g.h.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
g.h.MATH_ROUND_TOOLTIP = "Round a number up or down.";
g.h.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
g.h.MATH_SINGLE_OP_ABSOLUTE = "absolute";
g.h.MATH_SINGLE_OP_ROOT = "square root";
g.h.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
g.h.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
g.h.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
g.h.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
g.h.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
g.h.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
g.h.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
g.h.MATH_SUBTRACTION_SYMBOL = "-";
g.h.MATH_TRIG_ACOS = "acos";
g.h.MATH_TRIG_ASIN = "asin";
g.h.MATH_TRIG_ATAN = "atan";
g.h.MATH_TRIG_COS = "cos";
g.h.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
g.h.MATH_TRIG_SIN = "sin";
g.h.MATH_TRIG_TAN = "tan";
g.h.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
g.h.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
g.h.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
g.h.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
g.h.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
g.h.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
g.h.NEW_VARIABLE = "Create variable...";
g.h.NEW_VARIABLE_TITLE = "New variable name:";
g.h.ORDINAL_NUMBER_SUFFIX = "";
g.h.PROCEDURES_ALLOW_STATEMENTS = "allow statements";
g.h.PROCEDURES_BEFORE_PARAMS = "with:";
g.h.PROCEDURES_CALLNORETURN_HELPURL =
  "https://en.wikipedia.org/wiki/Subroutine";
g.h.PROCEDURES_CALLNORETURN_TOOLTIP = "Run the user-defined function '%1'.";
g.h.PROCEDURES_CALLRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.h.PROCEDURES_CALLRETURN_TOOLTIP =
  "Run the user-defined function '%1' and use its output.";
g.h.PROCEDURES_CALL_BEFORE_PARAMS = "with:";
g.h.PROCEDURES_CREATE_DO = "Create '%1'";
g.h.PROCEDURES_DEFNORETURN_COMMENT = "Describe this function...";
g.h.PROCEDURES_DEFNORETURN_DO = "";
g.h.PROCEDURES_DEFNORETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.h.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
g.h.PROCEDURES_DEFNORETURN_TITLE = "to";
g.h.PROCEDURES_DEFNORETURN_TOOLTIP = "Creates a function with no output.";
g.h.PROCEDURES_DEFRETURN_HELPURL = "https://en.wikipedia.org/wiki/Subroutine";
g.h.PROCEDURES_DEFRETURN_RETURN = "return";
g.h.PROCEDURES_DEFRETURN_TOOLTIP = "Creates a function with an output.";
g.h.PROCEDURES_HIGHLIGHT_DEF = "Highlight function definition";
g.h.PROCEDURES_IFRETURN_HELPURL = "http://c2.com/cgi/wiki?GuardClause";
g.h.PROCEDURES_IFRETURN_TOOLTIP =
  "If a value is true, then return a second value.";
g.h.PROCEDURES_IFRETURN_WARNING =
  "Warning: This block may be used only within a function definition.";
g.h.PROCEDURES_MUTATORARG_TITLE = "input name:";
g.h.PROCEDURES_MUTATORARG_TOOLTIP = "Add an input to the function.";
g.h.PROCEDURES_MUTATORCONTAINER_TITLE = "inputs";
g.h.PROCEDURES_MUTATORCONTAINER_TOOLTIP =
  "Add, remove, or reorder inputs to this function.";
g.h.REDO = "Redo";
g.h.REMOVE_COMMENT = "Remove Comment";
g.h.RENAME_VARIABLE = "Rename variable...";
g.h.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
g.h.TEXT_APPEND_TITLE = "to %1 append text %2";
g.h.TEXT_APPEND_TOOLTIP = "Append some text to variable '%1'.";
g.h.TEXT_CHANGECASE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#adjusting-text-case";
g.h.TEXT_CHANGECASE_OPERATOR_LOWERCASE = "to lower case";
g.h.TEXT_CHANGECASE_OPERATOR_TITLECASE = "to Title Case";
g.h.TEXT_CHANGECASE_OPERATOR_UPPERCASE = "to UPPER CASE";
g.h.TEXT_CHANGECASE_TOOLTIP = "Return a copy of the text in a different case.";
g.h.TEXT_CHARAT_FIRST = "get first letter";
g.h.TEXT_CHARAT_FROM_END = "get letter # from end";
g.h.TEXT_CHARAT_FROM_START = "get letter #";
g.h.TEXT_CHARAT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#extracting-text";
g.h.TEXT_CHARAT_LAST = "get last letter";
g.h.TEXT_CHARAT_RANDOM = "get random letter";
g.h.TEXT_CHARAT_TAIL = "";
g.h.TEXT_CHARAT_TITLE = "in text %1 %2";
g.h.TEXT_CHARAT_TOOLTIP = "Returns the letter at the specified position.";
g.h.TEXT_COUNT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#counting-substrings";
g.h.TEXT_COUNT_MESSAGE0 = "count %1 in %2";
g.h.TEXT_COUNT_TOOLTIP =
  "Count how many times some text occurs within some other text.";
g.h.TEXT_CREATE_JOIN_ITEM_TOOLTIP = "Add an item to the text.";
g.h.TEXT_CREATE_JOIN_TITLE_JOIN = "join";
g.h.TEXT_CREATE_JOIN_TOOLTIP =
  "Add, remove, or reorder sections to reconfigure this text block.";
g.h.TEXT_GET_SUBSTRING_END_FROM_END = "to letter # from end";
g.h.TEXT_GET_SUBSTRING_END_FROM_START = "to letter #";
g.h.TEXT_GET_SUBSTRING_END_LAST = "to last letter";
g.h.TEXT_GET_SUBSTRING_HELPURL =
  "https://github.com/google/blockly/wiki/Text#extracting-a-region-of-text";
g.h.TEXT_GET_SUBSTRING_INPUT_IN_TEXT = "in text";
g.h.TEXT_GET_SUBSTRING_START_FIRST = "get substring from first letter";
g.h.TEXT_GET_SUBSTRING_START_FROM_END = "get substring from letter # from end";
g.h.TEXT_GET_SUBSTRING_START_FROM_START = "get substring from letter #";
g.h.TEXT_GET_SUBSTRING_TAIL = "";
g.h.TEXT_GET_SUBSTRING_TOOLTIP = "Returns a specified portion of the text.";
g.h.TEXT_INDEXOF_HELPURL =
  "https://github.com/google/blockly/wiki/Text#finding-text";
g.h.TEXT_INDEXOF_OPERATOR_FIRST = "find first occurrence of text";
g.h.TEXT_INDEXOF_OPERATOR_LAST = "find last occurrence of text";
g.h.TEXT_INDEXOF_TITLE = "in text %1 %2 %3";
g.h.TEXT_INDEXOF_TOOLTIP =
  "Returns the index of the first/last occurrence of the first text in the second text. Returns %1 if text is not found.";
g.h.TEXT_ISEMPTY_HELPURL =
  "https://github.com/google/blockly/wiki/Text#checking-for-empty-text";
g.h.TEXT_ISEMPTY_TITLE = "%1 is empty";
g.h.TEXT_ISEMPTY_TOOLTIP = "Returns true if the provided text is empty.";
g.h.TEXT_JOIN_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-creation";
g.h.TEXT_JOIN_TITLE_CREATEWITH = "create text with";
g.h.TEXT_JOIN_TOOLTIP =
  "Create a piece of text by joining together any number of items.";
g.h.TEXT_LENGTH_HELPURL =
  "https://github.com/google/blockly/wiki/Text#text-modification";
g.h.TEXT_LENGTH_TITLE = "length of %1";
g.h.TEXT_LENGTH_TOOLTIP =
  "Returns the number of letters (including spaces) in the provided text.";
g.h.TEXT_PRINT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#printing-text";
g.h.TEXT_PRINT_TITLE = "print %1";
g.h.TEXT_PRINT_TOOLTIP = "Print the specified text, number or other value.";
g.h.TEXT_PROMPT_HELPURL =
  "https://github.com/google/blockly/wiki/Text#getting-input-from-the-user";
g.h.TEXT_PROMPT_TOOLTIP_NUMBER = "Prompt for user for a number.";
g.h.TEXT_PROMPT_TOOLTIP_TEXT = "Prompt for user for some text.";
g.h.TEXT_PROMPT_TYPE_NUMBER = "prompt for number with message";
g.h.TEXT_PROMPT_TYPE_TEXT = "prompt for text with message";
g.h.TEXT_REPLACE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#replacing-substrings";
g.h.TEXT_REPLACE_MESSAGE0 = "replace %1 with %2 in %3";
g.h.TEXT_REPLACE_TOOLTIP =
  "Replace all occurances of some text within some other text.";
g.h.TEXT_REVERSE_HELPURL =
  "https://github.com/google/blockly/wiki/Text#reversing-text";
g.h.TEXT_REVERSE_MESSAGE0 = "reverse %1";
g.h.TEXT_REVERSE_TOOLTIP = "Reverses the order of the characters in the text.";
g.h.TEXT_TEXT_HELPURL =
  "https://en.wikipedia.org/wiki/String_(computer_science)";
g.h.TEXT_TEXT_TOOLTIP = "A letter, word, or line of text.";
g.h.TEXT_TRIM_HELPURL =
  "https://github.com/google/blockly/wiki/Text#trimming-removing-spaces";
g.h.TEXT_TRIM_OPERATOR_BOTH = "trim spaces from both sides of";
g.h.TEXT_TRIM_OPERATOR_LEFT = "trim spaces from left side of";
g.h.TEXT_TRIM_OPERATOR_RIGHT = "trim spaces from right side of";
g.h.TEXT_TRIM_TOOLTIP =
  "Return a copy of the text with spaces removed from one or both ends.";
g.h.UNDO = "Undo";
g.h.UNNAMED_KEY = "unnamed";
g.h.VARIABLES_DEFAULT_NAME = "item";
g.h.VARIABLES_GET_CREATE_SET = "Create 'set %1'";
g.h.VARIABLES_GET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#get";
g.h.VARIABLES_GET_TOOLTIP = "Returns the value of this variable.";
g.h.VARIABLES_SET = "set %1 to %2";
g.h.VARIABLES_SET_CREATE_GET = "Create 'get %1'";
g.h.VARIABLES_SET_HELPURL =
  "https://github.com/google/blockly/wiki/Variables#set";
g.h.VARIABLES_SET_TOOLTIP = "Sets this variable to be equal to the input.";
g.h.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
g.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "A variable named '%1' already exists for another type: '%2'.";
g.h.WORKSPACE_ARIA_LABEL = "Blockly Workspace";
g.h.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
g.h.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = g.h.CONTROLS_IF_MSG_ELSEIF;
g.h.CONTROLS_IF_ELSE_TITLE_ELSE = g.h.CONTROLS_IF_MSG_ELSE;
g.h.CONTROLS_IF_IF_TITLE_IF = g.h.CONTROLS_IF_MSG_IF;
g.h.CONTROLS_IF_MSG_THEN = g.h.CONTROLS_REPEAT_INPUT_DO;
g.h.LISTS_CREATE_WITH_ITEM_TITLE = g.h.VARIABLES_DEFAULT_NAME;
g.h.LISTS_GET_INDEX_HELPURL = g.h.LISTS_INDEX_OF_HELPURL;
g.h.LISTS_GET_INDEX_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.LISTS_GET_SUBLIST_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.LISTS_INDEX_OF_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.LISTS_SET_INDEX_INPUT_IN_LIST = g.h.LISTS_INLIST;
g.h.MATH_CHANGE_TITLE_ITEM = g.h.VARIABLES_DEFAULT_NAME;
g.h.PROCEDURES_DEFRETURN_COMMENT = g.h.PROCEDURES_DEFNORETURN_COMMENT;
g.h.PROCEDURES_DEFRETURN_PROCEDURE = g.h.PROCEDURES_DEFNORETURN_PROCEDURE;
g.h.PROCEDURES_DEFRETURN_TITLE = g.h.PROCEDURES_DEFNORETURN_TITLE;
g.h.TEXT_APPEND_VARIABLE = g.h.VARIABLES_DEFAULT_NAME;
g.h.TEXT_CREATE_JOIN_ITEM_TITLE_ITEM = g.h.VARIABLES_DEFAULT_NAME;
g.h.VARIABLES_HUE = "330";
g.h.COLOUR_HUE = "20";
var BlocklyStorage = {},
  Pd = null,
  Qd = null,
  Rd = null;
function Sd() {
  var a = Pd();
  Td("/storage", "xml=" + encodeURIComponent(a), Ud);
}
var Vd = {};
function Td(a, c, d, e, f) {
  Vd[a] && Vd[a].abort();
  Vd[a] = new XMLHttpRequest();
  Vd[a].onload = function () {
    200 === this.status
      ? d && d.call(this)
      : e
      ? e.call(this)
      : Wd(P("Games_httpRequestError") + "\nXHR status: " + this.status);
    Vd[a] = null;
  };
  f = f || "POST";
  Vd[a].open(f, a);
  "POST" === f &&
    Vd[a].setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  Vd[a].send(c);
}
function Ud() {
  window.location.hash = this.responseText.trim();
  Wd(P("Games_linkAlert").replace("%1", window.location.href));
  Rd = Pd();
}
function Xd() {
  var a = this.responseText.trim();
  a.length
    ? Qd(a)
    : Wd(P("Games_hashError").replace("%1", window.location.hash));
  Rd = Pd();
}
function Wd(a) {
  if ("object" === typeof Q) {
    var c = document.getElementById("linkButton");
    Q.ND(c, a);
  } else alert(a);
}
var A = null,
  Yd = "",
  Zd = "";
function $d() {
  td();
  var a = document.getElementById("linkButton");
  a && (nd ? (a.style.display = "none") : ((Pd = ae), (Qd = be), xd(a, Sd)));
  (a = document.getElementById("languageMenu")) &&
    a.addEventListener("change", ce, !0);
}
function de() {
  if (!nd && 1 < window.location.hash.length)
    Td(
      "/storage",
      "key=" + encodeURIComponent(window.location.hash.substring(1)),
      Xd
    );
  else {
    var a = null;
    try {
      a = window.sessionStorage.JC;
    } catch (e) {}
    a && delete window.sessionStorage.JC;
    var c = ud(O),
      d = ud(O - 1);
    be(a || c || d || "<xml></xml>");
  }
}
function be(a) {
  a = g.T.ff(a);
  A.clear();
  g.T.Yi(a, A);
  a = A;
  a.rl.length = 0;
  a.mp.length = 0;
  g.i.QH();
}
function ae() {
  var a = g.T.UL();
  if (1 == A.dc(!1).length && a.querySelector) {
    var c = a.querySelector("block");
    c && (c.removeAttribute("x"), c.removeAttribute("y"));
  }
  return g.T.te(a);
}
function ee() {
  "object" == typeof BlocklyStorage &&
    null !== Rd &&
    Rd != ae() &&
    ((window.location.hash = ""), (Rd = null));
}
function fe(a) {
  var c = document.getElementById("toolbox");
  c && (a.toolbox = c);
  a.media = "third-party/blockly/media/";
  a.oneBasedIndex = !1;
  A = g.kj("blockly", a);
  D(A, ee);
}
function ge() {
  window.location = (nd ? "index.html" : "./") + "?lang=" + ld;
}
function ce() {
  window.sessionStorage && (window.sessionStorage.JC = ae());
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
function he() {
  10 > O
    ? (window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        ld +
        "&level=" +
        (O + 1))
    : ge();
}
function ie(a) {
  a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
  return a.replace(/\s+$/, "");
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
var Q = {
  Kk: !1,
  rB: null,
  Dr: null,
  $m: function (a, c, d, e, f, h) {
    function k() {
      Q.Kk &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    Q.Kk && Q.We(!1);
    g.Ug() && g.Kc(!0);
    Q.Kk = !0;
    Q.rB = c;
    Q.Dr = h;
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
      (Q.wv = g.Ud(e, "mousedown", null, Q.iI)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    d && c ? (Q.qs(c, !1, 0.2), Q.qs(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  sB: 0,
  tB: 0,
  iI: function (a) {
    Q.zv();
    if (!g.g.Ok(a)) {
      var c = document.getElementById("dialog");
      Q.sB = c.offsetLeft - a.clientX;
      Q.tB = c.offsetTop - a.clientY;
      Q.yv = g.Ud(document, "mouseup", null, Q.zv);
      Q.xv = g.Ud(document, "mousemove", null, Q.jI);
      a.stopPropagation();
    }
  },
  jI: function (a) {
    var c = document.getElementById("dialog"),
      d = Q.sB + a.clientX;
    a = Q.tB + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - c.offsetHeight);
    d = Math.max(d, 0);
    d = Math.min(d, window.innerWidth - c.offsetWidth);
    c.style.left = d + "px";
    c.style.top = a + "px";
  },
  zv: function () {
    Q.yv && (g.Na(Q.yv), (Q.yv = null));
    Q.xv && (g.Na(Q.xv), (Q.xv = null));
  },
  We: function (a) {
    function c() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (Q.Kk) {
      Q.zv();
      Q.wv && (g.Na(Q.wv), (Q.wv = null));
      Q.Kk = !1;
      Q.Dr && Q.Dr();
      Q.Dr = null;
      var d = !1 === a ? null : Q.rB;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      d && a ? (Q.qs(a, !1, 0.8), Q.qs(d, !0, 0.2), setTimeout(c, 175)) : c();
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
  qs: function (a, c, d) {
    function e() {
      f.style.width = h.width + "px";
      f.style.height = h.height + "px";
      f.style.left = h.x + "px";
      f.style.top = h.y + "px";
      f.style.opacity = d;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        h = Q.GI(a);
      c
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  GI: function (a) {
    var c = g.g.style.aj(a);
    c = { x: c.x, y: c.y };
    a.getBBox
      ? ((a = a.getBBox()), (c.height = a.height), (c.width = a.width))
      : ((c.height = a.offsetHeight), (c.width = a.offsetWidth));
    return c;
  },
  ND: function (a, c) {
    var d = document.getElementById("containerStorage");
    d.textContent = "";
    c = c.split("\n");
    for (var e = 0; e < c.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(c[e]));
      d.appendChild(f);
    }
    d = document.getElementById("dialogStorage");
    Q.$m(d, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, Q.qy);
    Q.ny();
  },
  xH: function () {
    if (!ud(O))
      if (Q.Kk || A.Cc()) setTimeout(Q.xH, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          c = document.getElementById("abortCancel");
        c.addEventListener("click", Q.We, !0);
        c.addEventListener("touchend", Q.We, !0);
        c = document.getElementById("abortOk");
        c.addEventListener("click", ge, !0);
        c.addEventListener("touchend", ge, !0);
        Q.$m(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function () {
            document.body.removeEventListener("keydown", Q.CA, !0);
          }
        );
        document.body.addEventListener("keydown", Q.CA, !0);
      }
  },
  UH: function () {
    var a = document.getElementById("dialogDone");
    if (A) {
      var c = document.getElementById("dialogLinesText");
      c.textContent = "";
      var d = Zd;
      d = ie(d);
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
          ? P("Games_linesOfCode1")
          : P("Games_linesOfCode2").replace("%1", String(e));
      c.appendChild(document.createTextNode(d));
    }
    d =
      10 > O
        ? P("Games_nextLevel").replace("%1", String(O + 1))
        : P("Games_finalLevel");
    c = document.getElementById("doneCancel");
    c.addEventListener("click", Q.We, !0);
    c.addEventListener("touchend", Q.We, !0);
    c = document.getElementById("doneOk");
    c.addEventListener("click", he, !0);
    c.addEventListener("touchend", he, !0);
    Q.$m(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function () {
        document.body.removeEventListener("keydown", Q.YA, !0);
      }
    );
    document.body.addEventListener("keydown", Q.YA, !0);
    document.getElementById("dialogDoneText").textContent = d;
  },
  qB: function (a) {
    !Q.Kk ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (Q.We(!0), a.stopPropagation(), a.preventDefault());
  },
  ny: function () {
    document.body.addEventListener("keydown", Q.qB, !0);
  },
  qy: function () {
    document.body.removeEventListener("keydown", Q.qB, !0);
  },
  YA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      Q.We(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && he();
  },
  CA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      Q.We(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && ge();
  },
};
window.BlocklyDialogs = Q;
Q.hideDialog = Q.We;
function ne() {
  document.getElementById("galleryXml").value = ae();
  var a = document.getElementById("galleryDialog");
  if (!oe) {
    var c = document.getElementById("galleryCancel");
    c.addEventListener("click", Q.We, !0);
    c.addEventListener("touchend", Q.We, !0);
    c = document.getElementById("galleryOk");
    c.addEventListener("click", pe, !0);
    c.addEventListener("touchend", pe, !0);
    oe = !0;
  }
  c = document.getElementById("submitButton");
  Q.$m(a, c, !0, !0, { width: "40%", left: "30%", top: "3em" }, function () {
    document.body.removeEventListener("keydown", qe, !0);
  });
  document.body.addEventListener("keydown", qe, !0);
  setTimeout(function () {
    document.getElementById("galleryTitle").focus();
  }, 250);
}
var oe;
function qe(a) {
  27 == a.keyCode ? Q.We(!0) : 13 == a.keyCode && pe();
}
function re(a, c) {
  for (var d = [], e = 0, f; (f = a.elements[e]); e++)
    f.name &&
      d.push(encodeURIComponent(f.name) + "=" + encodeURIComponent(f.value));
  Td(a.action, d.join("&"), c, void 0, void 0);
}
function pe() {
  var a = document.getElementById("galleryTitle");
  a.value.trim()
    ? ((a = document.getElementById("galleryForm")),
      re(a, function () {
        Q.ND(null, P("Games_submitted"));
      }),
      Q.We(!0))
    : ((a.value = ""), a.focus());
}
var R, S;
function se() {
  if (10 == O) return 1 < B(A).length;
  for (var a = 0; a <= te; a++)
    if (50 != a) {
      if (void 0 === ue[a]) return !1;
      if (100 < ue[a])
        return console.log("Pixel errors (frame " + a + "): " + ue[a]), !1;
    }
  if (9 == O) {
    a = B(A, !0);
    for (var c = 0, d; (d = a[c]); c++)
      if ("movie_circle" == d.type) {
        if ("math_arithmetic" != N(d, "RADIUS").type)
          return (
            (a = document.getElementById("helpLayer")),
            Q.$m(
              a,
              null,
              !1,
              !0,
              { width: "30%", left: "35%", top: "12em" },
              Q.qy
            ),
            Q.ny(),
            !1
          );
        break;
      }
  }
  return !0;
}
g.Y.vb = {};
g.ba = {};
g.ba.PE = {};
g.ba.PE.Hl = 20;
g.Xi([
  {
    type: "colour_picker",
    message0: "%1",
    args0: [{ type: "field_colour", name: "COLOUR", colour: "#ff0000" }],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_PICKER_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_PICKER_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"],
  },
  {
    type: "colour_random",
    message0: "%{BKY_COLOUR_RANDOM_TITLE}",
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_RANDOM_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_RANDOM_TOOLTIP}",
  },
  {
    type: "colour_rgb",
    message0:
      "%{BKY_COLOUR_RGB_TITLE} %{BKY_COLOUR_RGB_RED} %1 %{BKY_COLOUR_RGB_GREEN} %2 %{BKY_COLOUR_RGB_BLUE} %3",
    args0: [
      { type: "input_value", name: "RED", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "GREEN", check: "Number", align: "RIGHT" },
      { type: "input_value", name: "BLUE", check: "Number", align: "RIGHT" },
    ],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_RGB_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_RGB_TOOLTIP}",
  },
  {
    type: "colour_blend",
    message0:
      "%{BKY_COLOUR_BLEND_TITLE} %{BKY_COLOUR_BLEND_COLOUR1} %1 %{BKY_COLOUR_BLEND_COLOUR2} %2 %{BKY_COLOUR_BLEND_RATIO} %3",
    args0: [
      { type: "input_value", name: "COLOUR1", check: "Colour", align: "RIGHT" },
      { type: "input_value", name: "COLOUR2", check: "Colour", align: "RIGHT" },
      { type: "input_value", name: "RATIO", check: "Number", align: "RIGHT" },
    ],
    output: "Colour",
    helpUrl: "%{BKY_COLOUR_BLEND_HELPURL}",
    style: "colour_blocks",
    tooltip: "%{BKY_COLOUR_BLEND_TOOLTIP}",
  },
]);
g.Sa = function (a, c, d) {
  "function" != typeof a && g.Sa.cE(a);
  this.Uk = a;
  this.sy = this.Kx = this.Pr = null;
  a = this.Uk;
  if (Array.isArray(a)) {
    for (var e = !1, f = 0; f < a.length; f++) {
      var h = a[f][0];
      "string" == typeof h
        ? (a[f][0] = g.g.Mc(h))
        : (null != h.alt && (a[f][0].alt = g.g.Mc(h.alt)), (e = !0));
    }
    if (!(e || 2 > a.length)) {
      e = [];
      for (f = 0; f < a.length; f++) e.push(a[f][0]);
      f = g.g.yb.iy(e);
      h = g.g.yb.RH(e, f);
      var k = g.g.yb.SH(e, f);
      (!h && !k) ||
        f <= h + k ||
        (h && (this.Kx = e[0].substring(0, h - 1)),
        k && (this.sy = e[0].substr(1 - k)),
        (this.Uk = g.Sa.BH(a, h, k)));
    }
  }
  this.Wm = this.getOptions(!1)[0];
  g.Sa.v.constructor.call(this, this.Wm[1], c, d);
  this.fn = this.sf = this.fe = this.ed = this.vp = null;
};
g.g.object.V(g.Sa, g.jd);
g.Sa.ma = function (a) {
  return new g.Sa(a.options, void 0, a);
};
g.Sa.prototype.gk = !0;
g.Sa.dM = 25;
g.Sa.YM = 0.45;
g.Sa.MF = 5;
g.Sa.NF = 2 * g.Sa.MF;
g.Sa.Ky = g.g.userAgent.qn ? "\u25bc" : "\u25be";
b = g.Sa.prototype;
b.qq = "default";
b.di = function () {
  this.jy() ? Lb(this) : (this.qr = this.I.Pa());
  Mb(this);
  this.fe = g.g.o.L(g.g.F.Ii, {}, this.Zd);
  this.U().qF
    ? ((this.fn = g.g.o.L(
        g.g.F.Ii,
        { height: this.U().vn + "px", width: this.U().vn + "px" },
        this.Zd
      )),
      this.fn.setAttributeNS(g.g.o.rf, "xlink:href", this.U().rF))
    : ((this.sf = g.g.o.L(g.g.F.lA, {}, this.Pc)),
      this.sf.appendChild(
        document.createTextNode(this.I.M ? g.Sa.Ky + " " : " " + g.Sa.Ky)
      ),
      this.I.M
        ? this.Pc.insertBefore(this.sf, this.xi)
        : this.Pc.appendChild(this.sf));
  this.Db && g.g.o.Ga(this.Db, "blocklyDropdownRect");
};
b.jy = function () {
  return !this.U().Rt || (this.U().Rt && !this.I.Ra);
};
b.ng = function (a) {
  this.ed = this.Pv();
  this.ed.yx =
    a && "number" === typeof a.clientX ? new g.g.Z(a.clientX, a.clientY) : null;
  this.ed.Ia(g.H.MB());
  g.g.o.Ga(this.ed.Mb, "blocklyDropdownMenu");
  if (this.U().pF) {
    a = this.I.Ra ? this.I.getParent().cw() : this.I.cw();
    var c = this.I.Ra ? this.I.getParent().style.Th : this.I.style.Th;
    g.H.df(a, c);
  }
  g.H.GD(this, this.Qv.bind(this));
  this.ed.focus();
  this.vp && this.ed.si(this.vp);
  this.kc();
};
b.Pv = function () {
  var a = new g.cu();
  a.le(g.g.$.Zf.ZF);
  var c = this.getOptions(!1);
  this.vp = null;
  for (var d = 0; d < c.length; d++) {
    var e = c[d][0],
      f = c[d][1];
    if ("object" == typeof e) {
      var h = new Image(e.width, e.height);
      h.src = e.src;
      h.alt = e.alt || "";
      e = h;
    }
    e = new g.du(e, f);
    e.le(g.g.$.Zf.yG);
    e.Xx = this.I.M;
    e.av = !0;
    a.Ef.push(e);
    e.bv = f == this.sb;
    f == this.sb && (this.vp = e);
    uc(e, this.bJ, this);
  }
  return a;
};
b.Qv = function () {
  this.ed && this.ed.J();
  this.vp = this.ed = null;
  this.kc();
};
b.bJ = function (a) {
  g.H.Cm(this, !0);
  this.gD(a);
};
b.gD = function (a) {
  this.setValue(a.getValue());
};
g.Sa.BH = function (a, c, d) {
  for (var e = [], f = 0; f < a.length; f++) {
    var h = a[f][0],
      k = a[f][1];
    h = h.substring(c, h.length - d);
    e[f] = [h, k];
  }
  return e;
};
b = g.Sa.prototype;
b.getOptions = function (a) {
  return "function" == typeof this.Uk
    ? ((this.Pr && a) || ((this.Pr = this.Uk.call(this)), g.Sa.cE(this.Pr)),
      this.Pr)
    : this.Uk;
};
b.Yh = function (a) {
  for (var c = !1, d = this.getOptions(!0), e = 0, f; (f = d[e]); e++)
    if (f[1] == a) {
      c = !0;
      break;
    }
  return c
    ? a
    : (this.I &&
        console.warn(
          "Cannot set the dropdown's value to an unavailable option. Block type: " +
            this.I.type +
            ", Field name: " +
            this.name +
            ", Value: " +
            a
        ),
      null);
};
b.fg = function (a) {
  g.Sa.v.fg.call(this, a);
  a = this.getOptions(!0);
  for (var c = 0, d; (d = a[c]); c++) d[1] == this.sb && (this.Wm = d);
};
b.kc = function () {
  this.Db &&
    (this.Db.setAttribute("stroke", this.I.style.Th),
    this.ed
      ? this.Db.setAttribute("fill", this.I.style.Th)
      : this.Db.setAttribute("fill", "transparent"));
  this.I &&
    this.sf &&
    (this.sf.style.fill = this.I.Ra ? this.I.style.wr : this.I.style.Ui);
};
b.fl = function () {
  this.xi.nodeValue = "";
  this.fe.style.display = "none";
  var a = this.Wm && this.Wm[0];
  if (a && "object" == typeof a) {
    this.fe.style.display = "";
    this.fe.setAttributeNS(g.g.o.rf, "xlink:href", a.src);
    this.fe.setAttribute("height", a.height);
    this.fe.setAttribute("width", a.width);
    var c = Number(a.height);
    a = Number(a.width);
    var d = !!this.Db,
      e = Math.max(d ? this.U().hz : 0, c + g.Sa.NF);
    d = d ? this.U().Ah : 0;
    var f = this.fn
      ? ve(this, a + d, e / 2 - this.U().vn / 2)
      : g.g.o.ew(this.sf, this.U().Bh, this.U().Hi, this.U().Gi);
    this.Nc.width = a + f + 2 * d;
    this.Nc.height = e;
    var h = 0;
    this.I.M
      ? this.fe.setAttribute("x", d + f)
      : ((h = a + f),
        this.Pc.setAttribute("text-anchor", "end"),
        this.fe.setAttribute("x", d));
    this.fe.setAttribute("y", e / 2 - c / 2);
    Ob(this, h + d, a + f);
  } else
    (this.xi.nodeValue = this.vm()),
      g.g.o.Ga(this.Pc, "blocklyDropdownText"),
      this.Pc.setAttribute("text-anchor", "start"),
      (e = !!this.Db),
      (c = Math.max(e ? this.U().hz : 0, this.U().Vj)),
      (a = g.g.o.ew(this.Pc, this.U().Bh, this.U().Hi, this.U().Gi)),
      (e = e ? this.U().Ah : 0),
      (d = 0),
      this.fn && (d = ve(this, a + e, c / 2 - this.U().vn / 2)),
      (this.Nc.width = a + d + 2 * e),
      (this.Nc.height = c),
      Ob(this, e, a);
  Pb(this);
};
function ve(a, c, d) {
  if (!a.fn) return 0;
  var e = a.Db ? a.U().Ah : 0,
    f = a.U().sF,
    h = a.U().vn;
  a.fn.setAttribute(
    "transform",
    "translate(" + (a.I.M ? e : c + f) + "," + d + ")"
  );
  return h + f;
}
b.Vr = function () {
  if (!this.Wm) return null;
  var a = this.Wm[0];
  return "object" == typeof a ? a.alt : a;
};
g.Sa.cE = function (a) {
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
g.Sa.prototype.Yb = function (a) {
  if (this.ed)
    switch (a.name) {
      case g.navigation.qb.zd:
        return sc(this.ed), !0;
      case g.navigation.qb.yd:
        return (a = this.ed), tc(a, a.Ef.indexOf(a.hj), 1), !0;
      default:
        return !1;
    }
  return g.Sa.v.Yb.call(this, a);
};
g.Ue.register("field_dropdown", g.Sa);
g.Ac = function (a) {
  g.Ac.v.constructor.call(this, null);
  this.wD = a;
};
g.g.object.V(g.Ac, g.oe);
b = g.Ac.prototype;
b.mn = 0;
b.Xp = 0;
b.Jv = function (a) {
  g.g.o.L(
    g.g.F.Hc,
    { class: "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" },
    a
  );
  g.g.o.L(
    g.g.F.pe,
    {
      class: "blocklyIconSymbol",
      d:
        "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z",
    },
    a
  );
  g.g.o.L(
    g.g.F.Gt,
    { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" },
    a
  );
};
b.sw = function (a) {
  this.R.ge() && g.oe.prototype.sw.call(this, a);
};
b.mv = function () {
  this.Jp = g.g.o.L(g.g.F.hk, { x: g.wa.xd, y: g.wa.xd }, null);
  if (this.wD.length)
    for (
      var a = g.g.xml.createElement("xml"), c = 0, d;
      (d = this.wD[c]);
      c++
    ) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", d);
      a.appendChild(e);
    }
  else a = null;
  c = new g.Pd({
    disable: !1,
    parentWorkspace: this.R.u,
    media: this.R.u.options.yj,
    rtl: this.R.M,
    horizontalLayout: !1,
    renderer: this.R.u.options.qp,
    rendererOverrides: this.R.u.options.rp,
  });
  c.La = this.R.M ? g.g.za.Qd.dk : g.g.za.Qd.$j;
  if ((d = !!a)) (c.fh = g.g.za.hv(a)), (c.dd = this.SI.bind(this));
  this.s = new g.Cb(c);
  this.s.Po = !0;
  D(this.s, g.i.lI);
  a = d ? Yc(this.s, g.g.F.qc) : null;
  c = this.s.ab("blocklyMutatorBackground");
  a && c.insertBefore(a, this.s.Hb);
  this.Jp.appendChild(c);
  return this.Jp;
};
b.Ci = function () {
  g.Ac.v.Ci.call(this);
  this.R.Ub ||
    (this.R.ge()
      ? this.ee && g.g.o.hc(this.ee, "blocklyIconGroupReadonly")
      : (this.Ob(!1),
        this.ee && g.g.o.Ga(this.ee, "blocklyIconGroupReadonly")));
};
function we(a) {
  var c = 2 * g.wa.xd,
    d = a.s.Hb.getBBox(),
    e = d.width + d.x,
    f = d.height + 3 * c,
    h = a.s.mc();
  if (h) {
    var k = h.Sr();
    f = Math.max(f, k.Wd + 20);
    e += h.Yg();
  }
  a.R.M && (e = -d.x);
  e += 3 * c;
  if (Math.abs(a.mn - e) > c || Math.abs(a.Xp - f) > c)
    (a.mn = e),
      (a.Xp = f),
      a.lc.wp(e + c, f + c),
      a.Jp.setAttribute("width", a.mn),
      a.Jp.setAttribute("height", a.Xp);
  a.R.M && a.s.Hb.setAttribute("transform", "translate(" + a.mn + ",0)");
  a.s.resize();
}
b.aK = function () {
  this.s && Vc(this.s);
};
b.Ob = function (a) {
  if (a != this.isVisible())
    if ((g.i.Ha(new g.i.Pf(this.R, a, "mutator")), a)) {
      this.lc = new g.wa(
        this.R.u,
        this.mv(),
        this.R.Gb.Pb,
        this.ij,
        null,
        null
      );
      Ra(this.lc, this.R.id);
      Ta(this.lc, this.aK.bind(this));
      var c = this.s.options.fh;
      a = this.s.mc();
      c && (a.aa(this.s), a.show(c));
      this.nh = this.R.Qg(this.s);
      c = p(this.nh, !1);
      for (var d = 0, e; (e = c[d]); d++) e.Ia();
      this.nh.at(!1);
      this.nh.uv = !1;
      a ? ((c = 2 * a.Tb), (a = this.nh.M ? a.Yg() + c : c)) : (a = c = 16);
      this.R.M && (a = -a);
      this.nh.moveBy(a, c);
      if (this.R.up) {
        var f = this,
          h = this.R;
        h.up(this.nh);
        this.et = function () {
          h.up(f.nh);
        };
        D(this.R.u, this.et);
      }
      we(this);
      D(this.s, this.TL.bind(this));
      this.kc();
    } else
      (this.Jp = null),
        this.s.J(),
        (this.nh = this.s = null),
        this.lc.J(),
        (this.lc = null),
        (this.Xp = this.mn = 0),
        this.et && (Oa(this.R.u, this.et), (this.et = null));
};
b.TL = function (a) {
  if (!(a.ns || (a.type == g.i.Qj && "disabled" == a.element))) {
    if (!this.s.Cc()) {
      a = this.s.dc(!1);
      for (var c = 0, d; (d = a[c]); c++) {
        var e = d.bb();
        20 > e.y && d.moveBy(0, 20 - e.y);
        if (d.M) {
          var f = -20,
            h = this.s.mc();
          h && (f -= h.Yg());
          e.x > f && d.moveBy(f - e.x, 0);
        } else 20 > e.x && d.moveBy(20 - e.x, 0);
      }
    }
    if (this.nh.u == this.s) {
      g.i.na(!0);
      d = this.R;
      a = (a = d.Xa()) && g.T.te(a);
      c = d.ra;
      d.ra = !1;
      d.Lg(this.nh);
      d.ra = c;
      d.xe();
      g.Ug().Fb && g.navigation.PJ(d);
      d.ra && d.Ia();
      c = (c = d.Xa()) && g.T.te(c);
      if (a != c) {
        g.i.Ha(new g.i.uh(d, "mutation", null, a, c));
        var k = g.i.wc();
        setTimeout(function () {
          g.i.na(k);
          d.cc();
          g.i.na(!1);
        }, g.fq);
      }
      this.s.Cc() || we(this);
      g.i.na(!1);
    }
  }
};
b.SI = function () {
  var a = this.s.mc();
  a = a ? a.Yg() : 0;
  return {
    Wd: 0,
    wf: 0,
    bd: 0,
    od: 0,
    Vb: this.Xp,
    Qb: this.mn - a,
    ic: 0,
    ac: 0,
    ad: 0,
    Sc: this.s.M ? 0 : a,
  };
};
b.J = function () {
  this.R.rd = null;
  g.oe.prototype.J.call(this);
};
g.Ac.cl = function (a, c, d) {
  if (!a || !a.X().u) return !1;
  d = z(c, d).connection;
  var e = a.sa();
  return (e && e != c) || d.oa == a
    ? !1
    : (d.isConnected() && d.disconnect(), d.connect(a), !0);
};
g.Ac.DB = function (a) {
  var c = null;
  if (a && a.options) {
    var d = a.options.yc;
    a.lg ? d && d.options && (c = d.options.yc) : d && (c = d);
  }
  return c;
};
g.Y.Mw = {};
g.ba.gG = {};
g.ba.gG.Hl = 260;
g.Xi([
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
g.Y.lists_create_with = {
  aa: function () {
    this.xc = g.h.LISTS_CREATE_WITH_HELPURL;
    this.Jb("list_blocks");
    this.ec = 3;
    this.wd();
    this.td(!0, "Array");
    this.Xm(new g.Ac(["lists_create_with_item"]));
    this.fb(g.h.LISTS_CREATE_WITH_TOOLTIP);
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("items", this.ec);
    return a;
  },
  Eb: function (a) {
    this.ec = parseInt(a.getAttribute("items"), 10);
    this.wd();
  },
  Qg: function (a) {
    var c = a.gh("lists_create_with_container");
    c.xe();
    for (var d = z(c, "STACK").connection, e = 0; e < this.ec; e++) {
      var f = a.gh("lists_create_with_item");
      f.xe();
      d.connect(f.ka);
      d = f.W;
    }
    return c;
  },
  Lg: function (a) {
    var c = N(a, "STACK");
    for (a = []; c && !c.ie(); ) a.push(c.Wp), (c = c.W && c.W.sa());
    for (c = 0; c < this.ec; c++) {
      var d = z(this, "ADD" + c).connection.oa;
      d && -1 == a.indexOf(d) && d.disconnect();
    }
    this.ec = a.length;
    this.wd();
    for (c = 0; c < this.ec; c++) g.Ac.cl(a[c], this, "ADD" + c);
  },
  up: function (a) {
    a = N(a, "STACK");
    for (var c = 0; a; ) {
      var d = z(this, "ADD" + c);
      a.Wp = d && d.connection.oa;
      c++;
      a = a.W && a.W.sa();
    }
  },
  wd: function () {
    this.ec && z(this, "EMPTY")
      ? this.Ib("EMPTY")
      : this.ec ||
        z(this, "EMPTY") ||
        J(M(this, "EMPTY"), g.h.LISTS_CREATE_EMPTY_TITLE);
    for (var a = 0; a < this.ec; a++)
      if (!z(this, "ADD" + a)) {
        var c = K(L(this, "ADD" + a), g.Zc);
        0 == a && J(c, g.h.LISTS_CREATE_WITH_INPUT_WITH);
      }
    for (; z(this, "ADD" + a); ) this.Ib("ADD" + a), a++;
  },
};
g.Y.lists_create_with_container = {
  aa: function () {
    this.Jb("list_blocks");
    J(M(this), g.h.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.Gg(g.kb, "STACK");
    this.fb(g.h.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.Y.lists_create_with_item = {
  aa: function () {
    this.Jb("list_blocks");
    J(M(this), g.h.LISTS_CREATE_WITH_ITEM_TITLE);
    this.Ce(!0);
    this.Be(!0);
    this.fb(g.h.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.Y.lists_indexOf = {
  aa: function () {
    var a = [
      [g.h.LISTS_INDEX_OF_FIRST, "FIRST"],
      [g.h.LISTS_INDEX_OF_LAST, "LAST"],
    ];
    this.xc = g.h.LISTS_INDEX_OF_HELPURL;
    this.Jb("list_blocks");
    this.td(!0, "Number");
    J(L(this, "VALUE").Ja("Array"), g.h.LISTS_INDEX_OF_INPUT_IN_LIST);
    J(L(this, "FIND"), new g.Sa(a), "END");
    this.Ae(!0);
    var c = this;
    this.fb(function () {
      return g.h.LISTS_INDEX_OF_TOOLTIP.replace(
        "%1",
        c.u.options.Hf ? "0" : "-1"
      );
    });
  },
};
g.Y.lists_getIndex = {
  aa: function () {
    var a = [
      [g.h.LISTS_GET_INDEX_GET, "GET"],
      [g.h.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
      [g.h.LISTS_GET_INDEX_REMOVE, "REMOVE"],
    ];
    this.Iu = [
      [g.h.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.h.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.h.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.h.LISTS_GET_INDEX_LAST, "LAST"],
      [g.h.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.xc = g.h.LISTS_GET_INDEX_HELPURL;
    this.Jb("list_blocks");
    a = new g.Sa(a, function (d) {
      d = "REMOVE" == d;
      this.X().bE(d);
    });
    J(L(this, "VALUE").Ja("Array"), g.h.LISTS_GET_INDEX_INPUT_IN_LIST);
    J(J(M(this), a, "MODE"), "", "SPACE");
    M(this, "AT");
    g.h.LISTS_GET_INDEX_TAIL && J(M(this, "TAIL"), g.h.LISTS_GET_INDEX_TAIL);
    this.Ae(!0);
    this.td(!0);
    this.nc(!0);
    var c = this;
    this.fb(function () {
      var d = C(c, "MODE"),
        e = C(c, "WHERE"),
        f = "";
      switch (d + " " + e) {
        case "GET FROM_START":
        case "GET FROM_END":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_FROM;
          break;
        case "GET FIRST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_FIRST;
          break;
        case "GET LAST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_LAST;
          break;
        case "GET RANDOM":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_RANDOM;
          break;
        case "GET_REMOVE FROM_START":
        case "GET_REMOVE FROM_END":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FROM;
          break;
        case "GET_REMOVE FIRST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_FIRST;
          break;
        case "GET_REMOVE LAST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_LAST;
          break;
        case "GET_REMOVE RANDOM":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_GET_REMOVE_RANDOM;
          break;
        case "REMOVE FROM_START":
        case "REMOVE FROM_END":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FROM;
          break;
        case "REMOVE FIRST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_FIRST;
          break;
        case "REMOVE LAST":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_LAST;
          break;
        case "REMOVE RANDOM":
          f = g.h.LISTS_GET_INDEX_TOOLTIP_REMOVE_RANDOM;
      }
      if ("FROM_START" == e || "FROM_END" == e)
        f +=
          "  " +
          ("FROM_START" == e
            ? g.h.LISTS_INDEX_FROM_START_TOOLTIP
            : g.h.LISTS_INDEX_FROM_END_TOOLTIP
          ).replace("%1", c.u.options.Hf ? "#1" : "#0");
      return f;
    });
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("statement", !this.O);
    a.setAttribute("at", z(this, "AT").type == g.jb);
    return a;
  },
  Eb: function (a) {
    var c = "true" == a.getAttribute("statement");
    this.bE(c);
    a = "false" != a.getAttribute("at");
    this.nc(a);
  },
  bE: function (a) {
    a != !this.O &&
      (y(this, !0),
      a
        ? (this.td(!1), this.Ce(!0), this.Be(!0))
        : (this.Ce(!1), this.Be(!1), this.td(!0)));
  },
  nc: function (a) {
    this.Ib("AT");
    this.Ib("ORDINAL", !0);
    a
      ? (L(this, "AT").Ja("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          J(M(this, "ORDINAL"), g.h.ORDINAL_NUMBER_SUFFIX))
      : M(this, "AT");
    var c = new g.Sa(this.Iu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.X();
        f.nc(e);
        nc(f, d, "WHERE");
        return null;
      }
    });
    J(z(this, "AT"), c, "WHERE");
    g.h.LISTS_GET_INDEX_TAIL && qc(this, "TAIL", null);
  },
};
g.Y.lists_setIndex = {
  aa: function () {
    var a = [
      [g.h.LISTS_SET_INDEX_SET, "SET"],
      [g.h.LISTS_SET_INDEX_INSERT, "INSERT"],
    ];
    this.Iu = [
      [g.h.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.h.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.h.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.h.LISTS_GET_INDEX_LAST, "LAST"],
      [g.h.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.xc = g.h.LISTS_SET_INDEX_HELPURL;
    this.Jb("list_blocks");
    J(L(this, "LIST").Ja("Array"), g.h.LISTS_SET_INDEX_INPUT_IN_LIST);
    J(J(M(this), new g.Sa(a), "MODE"), "", "SPACE");
    M(this, "AT");
    J(L(this, "TO"), g.h.LISTS_SET_INDEX_INPUT_TO);
    this.Ae(!0);
    this.Ce(!0);
    this.Be(!0);
    this.fb(g.h.LISTS_SET_INDEX_TOOLTIP);
    this.nc(!0);
    var c = this;
    this.fb(function () {
      var d = C(c, "MODE"),
        e = C(c, "WHERE"),
        f = "";
      switch (d + " " + e) {
        case "SET FROM_START":
        case "SET FROM_END":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_FROM;
          break;
        case "SET FIRST":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_FIRST;
          break;
        case "SET LAST":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_LAST;
          break;
        case "SET RANDOM":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_SET_RANDOM;
          break;
        case "INSERT FROM_START":
        case "INSERT FROM_END":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FROM;
          break;
        case "INSERT FIRST":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_FIRST;
          break;
        case "INSERT LAST":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_LAST;
          break;
        case "INSERT RANDOM":
          f = g.h.LISTS_SET_INDEX_TOOLTIP_INSERT_RANDOM;
      }
      if ("FROM_START" == e || "FROM_END" == e)
        f +=
          "  " +
          g.h.LISTS_INDEX_FROM_START_TOOLTIP.replace(
            "%1",
            c.u.options.Hf ? "#1" : "#0"
          );
      return f;
    });
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at", z(this, "AT").type == g.jb);
    return a;
  },
  Eb: function (a) {
    a = "false" != a.getAttribute("at");
    this.nc(a);
  },
  nc: function (a) {
    this.Ib("AT");
    this.Ib("ORDINAL", !0);
    a
      ? (L(this, "AT").Ja("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          J(M(this, "ORDINAL"), g.h.ORDINAL_NUMBER_SUFFIX))
      : M(this, "AT");
    var c = new g.Sa(this.Iu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.X();
        f.nc(e);
        nc(f, d, "WHERE");
        return null;
      }
    });
    qc(this, "AT", "TO");
    z(this, "ORDINAL") && qc(this, "ORDINAL", "TO");
    J(z(this, "AT"), c, "WHERE");
  },
};
g.Y.lists_getSublist = {
  aa: function () {
    this.WHERE_OPTIONS_1 = [
      [g.h.LISTS_GET_SUBLIST_START_FROM_START, "FROM_START"],
      [g.h.LISTS_GET_SUBLIST_START_FROM_END, "FROM_END"],
      [g.h.LISTS_GET_SUBLIST_START_FIRST, "FIRST"],
    ];
    this.WHERE_OPTIONS_2 = [
      [g.h.LISTS_GET_SUBLIST_END_FROM_START, "FROM_START"],
      [g.h.LISTS_GET_SUBLIST_END_FROM_END, "FROM_END"],
      [g.h.LISTS_GET_SUBLIST_END_LAST, "LAST"],
    ];
    this.xc = g.h.LISTS_GET_SUBLIST_HELPURL;
    this.Jb("list_blocks");
    J(L(this, "LIST").Ja("Array"), g.h.LISTS_GET_SUBLIST_INPUT_IN_LIST);
    M(this, "AT1");
    M(this, "AT2");
    g.h.LISTS_GET_SUBLIST_TAIL &&
      J(M(this, "TAIL"), g.h.LISTS_GET_SUBLIST_TAIL);
    this.Ae(!0);
    this.td(!0, "Array");
    this.nc(1, !0);
    this.nc(2, !0);
    this.fb(g.h.LISTS_GET_SUBLIST_TOOLTIP);
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at1", z(this, "AT1").type == g.jb);
    a.setAttribute("at2", z(this, "AT2").type == g.jb);
    return a;
  },
  Eb: function (a) {
    var c = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.nc(1, c);
    this.nc(2, a);
  },
  nc: function (a, c) {
    this.Ib("AT" + a);
    this.Ib("ORDINAL" + a, !0);
    c
      ? (L(this, "AT" + a).Ja("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          J(M(this, "ORDINAL" + a), g.h.ORDINAL_NUMBER_SUFFIX))
      : M(this, "AT" + a);
    var d = new g.Sa(this["WHERE_OPTIONS_" + a], function (e) {
      var f = "FROM_START" == e || "FROM_END" == e;
      if (f != c) {
        var h = this.X();
        h.nc(a, f);
        nc(h, e, "WHERE" + a);
        return null;
      }
    });
    J(z(this, "AT" + a), d, "WHERE" + a);
    1 == a &&
      (qc(this, "AT1", "AT2"),
      z(this, "ORDINAL1") && qc(this, "ORDINAL1", "AT2"));
    g.h.LISTS_GET_SUBLIST_TAIL && qc(this, "TAIL", null);
  },
};
g.Y.lists_sort = {
  aa: function () {
    pc(this, {
      message0: g.h.LISTS_SORT_TITLE,
      args0: [
        {
          type: "field_dropdown",
          name: "TYPE",
          options: [
            [g.h.LISTS_SORT_TYPE_NUMERIC, "NUMERIC"],
            [g.h.LISTS_SORT_TYPE_TEXT, "TEXT"],
            [g.h.LISTS_SORT_TYPE_IGNORECASE, "IGNORE_CASE"],
          ],
        },
        {
          type: "field_dropdown",
          name: "DIRECTION",
          options: [
            [g.h.LISTS_SORT_ORDER_ASCENDING, "1"],
            [g.h.LISTS_SORT_ORDER_DESCENDING, "-1"],
          ],
        },
        { type: "input_value", name: "LIST", check: "Array" },
      ],
      output: "Array",
      style: "list_blocks",
      tooltip: g.h.LISTS_SORT_TOOLTIP,
      helpUrl: g.h.LISTS_SORT_HELPURL,
    });
  },
};
g.Y.lists_split = {
  aa: function () {
    var a = this,
      c = new g.Sa(
        [
          [g.h.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
          [g.h.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"],
        ],
        function (d) {
          a.qg(d);
        }
      );
    this.xc = g.h.LISTS_SPLIT_HELPURL;
    this.Jb("list_blocks");
    J(L(this, "INPUT").Ja("String"), c, "MODE");
    J(L(this, "DELIM").Ja("String"), g.h.LISTS_SPLIT_WITH_DELIMITER);
    this.Ae(!0);
    this.td(!0, "Array");
    this.fb(function () {
      var d = C(a, "MODE");
      if ("SPLIT" == d) return g.h.LISTS_SPLIT_TOOLTIP_SPLIT;
      if ("JOIN" == d) return g.h.LISTS_SPLIT_TOOLTIP_JOIN;
      throw Error("Unknown mode: " + d);
    });
  },
  qg: function (a) {
    if (C(this, "MODE") != a) {
      var c = z(this, "INPUT").connection;
      c.Ym(null);
      var d = c.sa();
      d && (c.disconnect(), d.Ra ? d.J() : this.cc());
    }
    "SPLIT" == a
      ? (this.O.Ja("Array"), z(this, "INPUT").Ja("String"))
      : (this.O.Ja("String"), z(this, "INPUT").Ja("Array"));
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("mode", C(this, "MODE"));
    return a;
  },
  Eb: function (a) {
    this.qg(a.getAttribute("mode"));
  },
};
g.Y.DJ = {};
g.ba.Ie = {};
g.ba.Ie.Hl = 210;
g.Xi([
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
g.Xi([
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
g.ba.Ie.Au = {
  EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
  NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
  LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
  LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
  GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
  GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
  AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
  OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}",
};
g.ca.register("logic_op_tooltip", g.ca.gr("OP", g.ba.Ie.Au));
g.ba.Ie.FE = {
  Te: 0,
  gg: 0,
  Jj: !0,
  Xa: function () {
    if (!this.Te && !this.gg) return null;
    var a = g.g.xml.createElement("mutation");
    this.Te && a.setAttribute("elseif", this.Te);
    this.gg && a.setAttribute("else", 1);
    return a;
  },
  Eb: function (a) {
    this.Te = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.gg = parseInt(a.getAttribute("else"), 10) || 0;
    this.wK();
  },
  Qg: function (a) {
    var c = a.gh("controls_if_if");
    c.xe();
    for (var d = c.W, e = 1; e <= this.Te; e++) {
      var f = a.gh("controls_if_elseif");
      f.xe();
      d.connect(f.ka);
      d = f.W;
    }
    this.gg && ((a = a.gh("controls_if_else")), a.xe(), d.connect(a.ka));
    return c;
  },
  Lg: function (a) {
    a = a.W.sa();
    this.gg = this.Te = 0;
    for (var c = [null], d = [null], e = null; a && !a.ie(); ) {
      switch (a.type) {
        case "controls_if_elseif":
          this.Te++;
          c.push(a.Wp);
          d.push(a.wi);
          break;
        case "controls_if_else":
          this.gg++;
          e = a.wi;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.W && a.W.sa();
    }
    this.wd();
    this.xD(c, d, e);
  },
  up: function (a) {
    a = a.W.sa();
    for (var c = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var d = z(this, "IF" + c),
            e = z(this, "DO" + c);
          a.Wp = d && d.connection.oa;
          a.wi = e && e.connection.oa;
          c++;
          break;
        case "controls_if_else":
          e = z(this, "ELSE");
          a.wi = e && e.connection.oa;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.W && a.W.sa();
    }
  },
  wK: function () {
    var a = [null],
      c = [null],
      d = null;
    z(this, "ELSE") && (d = z(this, "ELSE").connection.oa);
    for (var e = 1; z(this, "IF" + e); ) {
      var f = z(this, "DO" + e);
      a.push(z(this, "IF" + e).connection.oa);
      c.push(f.connection.oa);
      e++;
    }
    this.wd();
    this.xD(a, c, d);
  },
  wd: function () {
    z(this, "ELSE") && this.Ib("ELSE");
    for (var a = 1; z(this, "IF" + a); )
      this.Ib("IF" + a), this.Ib("DO" + a), a++;
    for (a = 1; a <= this.Te; a++)
      J(L(this, "IF" + a).Ja("Boolean"), g.h.CONTROLS_IF_MSG_ELSEIF),
        J(this.Gg(g.kb, "DO" + a), g.h.CONTROLS_IF_MSG_THEN);
    this.gg && J(this.Gg(g.kb, "ELSE"), g.h.CONTROLS_IF_MSG_ELSE);
  },
  xD: function (a, c, d) {
    for (var e = 1; e <= this.Te; e++)
      g.Ac.cl(a[e], this, "IF" + e), g.Ac.cl(c[e], this, "DO" + e);
    g.Ac.cl(d, this, "ELSE");
  },
};
g.ca.op("controls_if_mutator", g.ba.Ie.FE, null, [
  "controls_if_elseif",
  "controls_if_else",
]);
g.ba.Ie.GE = function () {
  this.fb(
    function () {
      if (this.Te || this.gg) {
        if (!this.Te && this.gg) return g.h.CONTROLS_IF_TOOLTIP_2;
        if (this.Te && !this.gg) return g.h.CONTROLS_IF_TOOLTIP_3;
        if (this.Te && this.gg) return g.h.CONTROLS_IF_TOOLTIP_4;
      } else return g.h.CONTROLS_IF_TOOLTIP_1;
      return "";
    }.bind(this)
  );
};
g.ca.register("controls_if_tooltip", g.ba.Ie.GE);
g.ba.Ie.cG = {
  onchange: function (a) {
    this.ip || (this.ip = [null, null]);
    var c = N(this, "A"),
      d = N(this, "B");
    c &&
      d &&
      !ta(c.O, d.O) &&
      (g.i.na(a.group),
      (a = this.ip[0]),
      a !== c &&
        (y(c), !a || a.eg || a.Ra || z(this, "A").connection.connect(a.O)),
      (c = this.ip[1]),
      c !== d &&
        (y(d), !c || c.eg || c.Ra || z(this, "B").connection.connect(c.O)),
      this.cc(),
      g.i.na(!1));
    this.ip[0] = N(this, "A");
    this.ip[1] = N(this, "B");
  },
};
g.ba.Ie.bG = function () {
  this.Id(g.ba.Ie.cG);
};
g.ca.register("logic_compare", g.ba.Ie.bG);
g.ba.Ie.dG = {
  sD: null,
  onchange: function (a) {
    var c = N(this, "THEN"),
      d = N(this, "ELSE"),
      e = this.O.oa;
    if ((c || d) && e)
      for (var f = 0; 2 > f; f++) {
        var h = 1 == f ? c : d;
        h &&
          !ta(h.O, e) &&
          (g.i.na(a.group),
          e === this.sD ? (y(this), e.X().cc()) : (y(h), h.cc()),
          g.i.na(!1));
      }
    this.sD = e;
  },
};
g.ca.Ts("logic_ternary", g.ba.Ie.dG);
g.Rc = function (a, c, d) {
  this.an = !0;
  g.Rc.v.constructor.call(this, a, c, d);
  this.Gs = this.mi = this.Gd = null;
  this.Or = !1;
  this.s = null;
};
g.g.object.V(g.Rc, g.jd);
g.Rc.prototype.Sj = "";
g.Rc.ma = function (a) {
  var c = g.g.Mc(a.text);
  return new g.Rc(c, void 0, a);
};
g.Rc.prototype.gk = !0;
g.Rc.Oy = 4;
b = g.Rc.prototype;
b.qq = "text";
b.Bd = function (a) {
  g.Rc.v.Bd.call(this, a);
  "boolean" == typeof a.spellcheck && (this.an = a.spellcheck);
};
b.di = function () {
  if (this.U().mz) {
    for (var a = 0, c = 0, d = 0, e; (e = this.I.S[d]); d++) {
      for (var f = 0; e.hb[f]; f++) a++;
      e.connection && c++;
    }
    this.Or = 1 >= a && this.I.O && !c;
  } else this.Or = !1;
  this.Or ? (this.qr = this.I.Pa()) : Lb(this);
  Mb(this);
};
b.Yh = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
b.xB = function () {
  if (this.Em) {
    this.js = !1;
    var a = this.sb;
    this.sb = this.Gd.YD;
    this.I &&
      g.i.isEnabled() &&
      g.i.Ha(new g.i.uh(this.I, "field", this.name || null, a, this.sb));
  }
};
b.fg = function (a) {
  this.js = !0;
  this.sb = a;
  this.Em || (this.dh = !0);
};
b.kc = function () {
  this.I &&
    this.U().mz &&
    (this.Db
      ? this.Db.setAttribute("stroke", this.I.style.Th)
      : this.I.Gb.Pb.setAttribute("fill", this.U().fz));
};
b.fl = function () {
  g.Rc.v.fl.call(this);
  if (this.Em) {
    this.hl();
    var a = this.Gd;
    this.js
      ? (g.g.o.hc(a, "blocklyInvalidInput"), g.g.$.Zb(a, g.g.$.State.Eq, !1))
      : (g.g.o.Ga(a, "blocklyInvalidInput"), g.g.$.Zb(a, g.g.$.State.Eq, !0));
  }
};
function xe(a) {
  0 != a.an && ((a.an = !1), a.Gd && a.Gd.setAttribute("spellcheck", a.an));
}
b.ng = function (a, c) {
  this.s = this.I.u;
  a = c || !1;
  !a && (g.g.userAgent.qG || g.g.userAgent.qn || g.g.userAgent.Il)
    ? ye(this)
    : (g.la.show(this, this.I.M, this.SL.bind(this)),
      (this.Gd = this.st()),
      (this.Em = !0),
      a || (this.Gd.focus({ preventScroll: !0 }), this.Gd.select()));
};
function ye(a) {
  g.prompt(
    g.h.CHANGE_VALUE_TITLE,
    a.Dd(),
    function (c) {
      this.setValue(c);
    }.bind(a)
  );
}
b.st = function () {
  var a = g.la.pb;
  g.g.o.Ga(Kb(this), "editing");
  var c = document.createElement("input");
  c.className = "blocklyHtmlInput";
  c.setAttribute("spellcheck", this.an);
  var d = $c(this.s),
    e = this.U().Bh * d + "pt";
  a.style.fontSize = e;
  c.style.fontSize = e;
  e = g.Rc.Oy * d + "px";
  if (this.Or) {
    e = Za(this);
    e = (e.bottom - e.top) / 2 + "px";
    var f = this.I.getParent() ? this.I.getParent().style.Th : this.I.style.Th;
    c.style.border = 1 * d + "px solid " + f;
    a.style.borderRadius = e;
    a.style.transition = "box-shadow 0.25s ease 0s";
    this.U().tF &&
      (a.style.boxShadow =
        "rgba(255, 255, 255, 0.3) 0px 0px 0px " + 4 * d + "px");
  }
  c.style.borderRadius = e;
  a.appendChild(c);
  c.value = c.defaultValue = String(this.sb);
  c.YD = this.sb;
  c.mx = null;
  this.hl();
  ze(this, c);
  return c;
};
b.SL = function () {
  this.Em = !1;
  this.js = !0;
  Qb(this);
  this.ox && this.ox(this.sb);
  this.mi && (g.Na(this.mi), (this.mi = null));
  this.Gs && (g.Na(this.Gs), (this.Gs = null));
  var a = g.la.pb.style;
  a.width = "auto";
  a.height = "auto";
  a.fontSize = "";
  a.transition = "";
  a.boxShadow = "";
  this.Gd = null;
  g.g.o.hc(Kb(this), "editing");
};
function ze(a, c) {
  a.mi = g.ta(c, "keydown", a, a.px);
  a.Gs = g.ta(c, "input", a, a.dK);
}
b.px = function (a) {
  if (a.keyCode == g.g.P.Dl) g.la.Oa(), g.H.fj();
  else if (a.keyCode == g.g.P.Ot)
    (this.Gd.value = this.Gd.defaultValue), g.la.Oa(), g.H.fj();
  else if (a.keyCode == g.g.P.ZG) {
    g.la.Oa();
    g.H.fj();
    var c = this.I,
      d = !a.shiftKey,
      e = new g.Uq();
    F(e, g.G.lm(this));
    var f = e.rb;
    e.Yb({ name: d ? g.navigation.qb.yd : g.navigation.qb.zd });
    (d = e.rb) &&
      d !== f &&
      ((f = d.Fa), bb(f) && f.ng(void 0), c.u.Fb && F(c.u.Nb(), d));
    a.preventDefault();
  }
};
b.dK = function () {
  var a = this.Gd.value;
  a !== this.Gd.mx &&
    ((this.Gd.mx = a),
    g.i.na(!0),
    this.setValue(a),
    Qb(this),
    this.hl(),
    g.i.na(!1));
};
b.hl = function () {
  var a = g.la.pb,
    c = Za(this);
  a.style.width = c.right - c.left + "px";
  a.style.height = c.bottom - c.top + "px";
  c = new g.g.Z(this.I.M ? c.right - a.offsetWidth : c.left, c.top);
  a.style.left = c.x + "px";
  a.style.top = c.y + "px";
};
b.BC = function () {
  return !0;
};
b.Vr = function () {
  return this.Em && this.Gd ? this.Gd.value : null;
};
g.Ue.register("field_input", g.Rc);
g.jf = function (a, c, d, e, f, h) {
  this.Yo = -Infinity;
  this.Wo = Infinity;
  this.Tm = 0;
  this.rv = null;
  g.jf.v.constructor.call(this, a, f, h);
  h || (Ae(this, c), Be(this, d), Ce(this, e), this.setValue(this.getValue()));
};
g.g.object.V(g.jf, g.Rc);
g.jf.prototype.Sj = 0;
g.jf.ma = function (a) {
  return new g.jf(a.value, void 0, void 0, void 0, void 0, a);
};
g.jf.prototype.gk = !0;
g.jf.prototype.Bd = function (a) {
  g.jf.v.Bd.call(this, a);
  Ae(this, a.min);
  Be(this, a.max);
  Ce(this, a.precision);
};
function Ae(a, c) {
  null == c ? (a.Yo = -Infinity) : ((c = Number(c)), isNaN(c) || (a.Yo = c));
}
function Be(a, c) {
  null == c ? (a.Wo = Infinity) : ((c = Number(c)), isNaN(c) || (a.Wo = c));
}
function Ce(a, c) {
  null == c ? (a.Tm = 0) : ((c = Number(c)), isNaN(c) || (a.Tm = c));
  var d = a.Tm.toLocaleString("en-US", { maximumFractionDigits: 20 }),
    e = d.indexOf(".");
  a.rv = -1 == e ? (c ? 0 : null) : d.length - e - 1;
}
g.jf.prototype.Yh = function (a) {
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = a.replace(/infinity/i, "Infinity");
  a = Number(a || 0);
  if (isNaN(a)) return null;
  a = Math.min(Math.max(a, this.Yo), this.Wo);
  this.Tm && isFinite(a) && (a = Math.round(a / this.Tm) * this.Tm);
  null != this.rv && (a = Number(a.toFixed(this.rv)));
  return a;
};
g.jf.prototype.st = function () {
  var a = g.jf.v.st.call(this);
  -Infinity < this.Yo && g.g.$.Zb(a, g.g.$.State.oH, this.Yo);
  Infinity > this.Wo && g.g.$.Zb(a, g.g.$.State.nH, this.Wo);
  return a;
};
g.Ue.register("field_number", g.jf);
g.Ge = function (a, c, d, e, f) {
  this.Uk = g.Ge.vI;
  this.eI = "string" === typeof a ? a : "";
  this.Nc = new g.g.re(0, 0);
  f && this.Bd(f);
  c && (this.tl = c);
  f || De(this, d, e);
};
g.g.object.V(g.Ge, g.Sa);
g.Ge.ma = function (a) {
  var c = g.g.Mc(a.variable);
  return new g.Ge(c, void 0, void 0, void 0, a);
};
b = g.Ge.prototype;
b.gk = !0;
b.Bd = function (a) {
  g.Ge.v.Bd.call(this, a);
  De(this, a.variableTypes, a.defaultType);
};
b.Gk = function () {
  if (!this.Ee) {
    var a = g.ga.Ur(this.I.u, null, this.eI, this.dI);
    this.fg(a.Qa());
  }
};
b.jy = function () {
  return (
    g.Ge.v.jy.call(this) && (!this.U().Rt || "variables_get" != this.I.type)
  );
};
b.tm = function (a) {
  var c = a.getAttribute("id"),
    d = a.textContent,
    e = a.getAttribute("variabletype") || a.getAttribute("variableType") || "";
  c = g.ga.Ur(this.I.u, c, d, e);
  if (null != e && e !== c.type)
    throw Error(
      "Serialized variable type with id '" +
        c.Qa() +
        "' had type " +
        c.type +
        ", and does not match variable field that references it: " +
        g.T.te(a) +
        "."
    );
  this.setValue(c.Qa());
};
b.vy = function (a) {
  this.Gk();
  a.id = this.Ee.Qa();
  a.textContent = this.Ee.name;
  this.Ee.type && a.setAttribute("variabletype", this.Ee.type);
  return a;
};
b.ey = function (a) {
  if (a.Ra)
    throw Error("Variable fields are not allowed to exist on shadow blocks.");
  g.Ge.v.ey.call(this, a);
};
b.getValue = function () {
  return this.Ee ? this.Ee.Qa() : null;
};
b.Dd = function () {
  return this.Ee ? this.Ee.name : "";
};
b.Ed = function () {
  return this.Ee;
};
b.dC = function () {
  return this.Ee ? this.tl : null;
};
b.Yh = function (a) {
  if (null === a) return null;
  var c = g.ga.Ed(this.I.u, a);
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
b.fg = function (a) {
  this.Ee = g.ga.Ed(this.I.u, a);
  g.Ge.v.fg.call(this, a);
};
function Ee(a) {
  var c = a.OL;
  if (null === c && a.I && a.I.u) return a.I.u.lw();
  c = c || [""];
  if (0 == c.length)
    throw (
      ((a = a.Dd()),
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
  a.dI = d;
  a.OL = c;
}
g.Ge.vI = function () {
  if (!this.Ee)
    throw Error(
      "Tried to call dropdownCreate on a variable field with no variable selected."
    );
  var a = this.Dd(),
    c = [];
  if (this.I && this.I.u)
    for (var d = Ee(this), e = 0; e < d.length; e++)
      c = c.concat(this.I.u.Fo(d[e]));
  c.sort(g.Rn.WA);
  d = [];
  for (e = 0; e < c.length; e++) d[e] = [c[e].name, c[e].Qa()];
  d.push([g.h.RENAME_VARIABLE, g.Xz]);
  g.h.DELETE_VARIABLE && d.push([g.h.DELETE_VARIABLE.replace("%1", a), g.az]);
  return d;
};
g.Ge.prototype.gD = function (a) {
  a = a.getValue();
  if (this.I && this.I.u) {
    if (a == g.Xz) {
      g.ga.Xs(this.I.u, this.Ee);
      return;
    }
    if (a == g.az) {
      this.I.u.Xh(this.Ee.Qa());
      return;
    }
  }
  this.setValue(a);
};
g.Ge.prototype.np = function () {
  return !0;
};
g.Ue.register("field_variable", g.Ge);
g.Y.FJ = {};
g.ba.mf = {};
g.ba.mf.Hl = 120;
g.Xi([
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
g.ba.mf.qH = {
  WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
  UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}",
};
g.ca.register("controls_whileUntil_tooltip", g.ca.gr("MODE", g.ba.mf.qH));
g.ba.mf.vE = {
  BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
  CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}",
};
g.ca.register("controls_flow_tooltip", g.ca.gr("FLOW", g.ba.mf.vE));
g.ba.mf.ME = {
  Wh: function (a) {
    if (!this.Ub) {
      var c = w(this, "VAR").Ed(),
        d = c.name;
      if (!this.isCollapsed() && null != d) {
        var e = { enabled: !0 };
        e.text = g.h.VARIABLES_SET_CREATE_GET.replace("%1", d);
        c = g.ga.xo(c);
        d = g.g.xml.createElement("block");
        d.setAttribute("type", "variables_get");
        d.appendChild(c);
        e.Aa = g.$a.ir(this, d);
        a.push(e);
      }
    }
  },
};
g.ca.Ts("contextMenu_newGetVariableBlock", g.ba.mf.ME);
g.ca.register("controls_for_tooltip", g.ca.hr("%{BKY_CONTROLS_FOR_TOOLTIP}"));
g.ca.register(
  "controls_forEach_tooltip",
  g.ca.hr("%{BKY_CONTROLS_FOREACH_TOOLTIP}")
);
g.ba.mf.oq = {
  fG: [
    "controls_repeat",
    "controls_repeat_ext",
    "controls_forEach",
    "controls_for",
    "controls_whileUntil",
  ],
  Jj: !0,
  bC: function (a) {
    do {
      if (-1 != g.ba.mf.oq.fG.indexOf(a.type)) return a;
      a = mc(a);
    } while (a);
    return null;
  },
  onchange: function (a) {
    if (this.u.Cc && !this.u.Cc() && a.type == g.i.At) {
      var c = g.ba.mf.oq.bC(this);
      this.Zm(c ? null : g.h.CONTROLS_FLOW_STATEMENTS_WARNING);
      if (!this.Ub) {
        var d = g.i.wc();
        g.i.na(a.group);
        this.ke(c);
        g.i.na(d);
      }
    }
  },
};
g.ca.Ts("controls_flow_in_loop_check", g.ba.mf.oq);
g.Y.ze = {};
g.ba.Math = {};
g.ba.Math.Hl = 230;
g.Xi([
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
g.ba.Math.Au = {
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
g.ca.register("math_op_tooltip", g.ca.gr("OP", g.ba.Math.Au));
g.ba.Math.QF = {
  Xa: function () {
    var a = g.g.xml.createElement("mutation"),
      c = "DIVISIBLE_BY" == C(this, "PROPERTY");
    a.setAttribute("divisor_input", c);
    return a;
  },
  Eb: function (a) {
    a = "true" == a.getAttribute("divisor_input");
    this.wd(a);
  },
  wd: function (a) {
    var c = z(this, "DIVISOR");
    a ? c || L(this, "DIVISOR").Ja("Number") : c && this.Ib("DIVISOR");
  },
};
g.ba.Math.RF = function () {
  Nb(w(this, "PROPERTY"), function (a) {
    a = "DIVISIBLE_BY" == a;
    this.X().wd(a);
  });
};
g.ca.op("math_is_divisibleby_mutator", g.ba.Math.QF, g.ba.Math.RF);
g.ca.register("math_change_tooltip", g.ca.hr("%{BKY_MATH_CHANGE_TOOLTIP}"));
g.ba.Math.aG = {
  qg: function (a) {
    "MODE" == a ? this.O.Ja("Array") : this.O.Ja("Number");
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("op", C(this, "OP"));
    return a;
  },
  Eb: function (a) {
    this.qg(a.getAttribute("op"));
  },
};
g.ba.Math.$F = function () {
  Nb(
    w(this, "OP"),
    function (a) {
      this.qg(a);
    }.bind(this)
  );
};
g.ca.op("math_modes_of_list_mutator", g.ba.Math.aG, g.ba.Math.$F);
g.hf = function (a, c, d) {
  this.QA = null;
  g.hf.v.constructor.call(this, a, c, d);
};
g.g.object.V(g.hf, g.jd);
g.hf.prototype.Sj = !1;
g.hf.ma = function (a) {
  return new g.hf(a.checked, void 0, a);
};
g.hf.yE = "\u2713";
b = g.hf.prototype;
b.gk = !0;
b.qq = "default";
b.Bd = function (a) {
  g.hf.v.Bd.call(this, a);
  a.checkCharacter && (this.QA = a.checkCharacter);
};
b.di = function () {
  g.hf.v.di.call(this);
  g.g.o.Ga(this.Pc, "blocklyCheckbox");
  this.Pc.style.display = this.sb ? "block" : "none";
};
b.fl = function () {
  this.xi && (this.xi.nodeValue = this.vm());
  this.Tp(this.U().mF);
};
b.vm = function () {
  return this.QA || g.hf.yE;
};
b.ng = function () {
  this.setValue(!this.sb);
};
b.Yh = function (a) {
  return !0 === a || "TRUE" === a
    ? "TRUE"
    : !1 === a || "FALSE" === a
    ? "FALSE"
    : null;
};
b.fg = function (a) {
  this.sb = Fe(a);
  this.Pc && (this.Pc.style.display = this.sb ? "block" : "none");
};
b.getValue = function () {
  return this.sb ? "TRUE" : "FALSE";
};
b.Dd = function () {
  return String(Fe(this.sb));
};
function Fe(a) {
  return "string" == typeof a ? "TRUE" == a : !!a;
}
g.Ue.register("field_checkbox", g.hf);
g.Y.uK = {};
g.Y.procedures_defnoreturn = {
  aa: function () {
    var a = g.Da.Mr("", this);
    a = new g.Rc(a, g.Da.zD);
    xe(a);
    J(J(J(M(this), g.h.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
    this.Xm(new g.Ac(["procedures_mutatorarg"]));
    (this.u.options.$n ||
      (this.u.options.yc && this.u.options.yc.options.$n)) &&
      g.h.PROCEDURES_DEFNORETURN_COMMENT &&
      this.Gj(g.h.PROCEDURES_DEFNORETURN_COMMENT);
    this.Jb("procedure_blocks");
    this.fb(g.h.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.xc = g.h.PROCEDURES_DEFNORETURN_HELPURL;
    this.ob = [];
    this.Ic = [];
    this.kl(!0);
    this.wi = null;
  },
  kl: function (a) {
    this.Yr !== a &&
      (a
        ? (J(this.Gg(g.kb, "STACK"), g.h.PROCEDURES_DEFNORETURN_DO),
          z(this, "RETURN") && qc(this, "STACK", "RETURN"))
        : this.Ib("STACK", !0),
      (this.Yr = a));
  },
  Sp: function () {
    var a = "";
    this.ob.length &&
      (a = g.h.PROCEDURES_BEFORE_PARAMS + " " + this.ob.join(", "));
    g.i.disable();
    try {
      nc(this, a, "PARAMS");
    } finally {
      g.i.enable();
    }
  },
  Xa: function (a) {
    var c = g.g.xml.createElement("mutation");
    a && c.setAttribute("name", C(this, "NAME"));
    for (var d = 0; d < this.Ic.length; d++) {
      var e = g.g.xml.createElement("arg"),
        f = this.Ic[d];
      e.setAttribute("name", f.name);
      e.setAttribute("varid", f.Qa());
      a && this.Cx && e.setAttribute("paramId", this.Cx[d]);
      c.appendChild(e);
    }
    this.Yr || c.setAttribute("statements", "false");
    return c;
  },
  Eb: function (a) {
    this.ob = [];
    this.Ic = [];
    for (var c = 0, d; (d = a.childNodes[c]); c++)
      if ("arg" == d.nodeName.toLowerCase()) {
        var e = d.getAttribute("name");
        d = d.getAttribute("varid") || d.getAttribute("varId");
        this.ob.push(e);
        d = g.ga.Ur(this.u, d, e, "");
        null != d
          ? this.Ic.push(d)
          : console.log(
              "Failed to create a variable with name " + e + ", ignoring."
            );
      }
    this.Sp();
    g.Da.$o(this);
    this.kl("false" !== a.getAttribute("statements"));
  },
  Qg: function (a) {
    var c = g.g.xml.createElement("block");
    c.setAttribute("type", "procedures_mutatorcontainer");
    var d = g.g.xml.createElement("statement");
    d.setAttribute("name", "STACK");
    c.appendChild(d);
    for (var e = 0; e < this.ob.length; e++) {
      var f = g.g.xml.createElement("block");
      f.setAttribute("type", "procedures_mutatorarg");
      var h = g.g.xml.createElement("field");
      h.setAttribute("name", "NAME");
      var k = g.g.xml.createTextNode(this.ob[e]);
      h.appendChild(k);
      f.appendChild(h);
      h = g.g.xml.createElement("next");
      f.appendChild(h);
      d.appendChild(f);
      d = h;
    }
    a = g.T.vk(c, a);
    "procedures_defreturn" == this.type
      ? nc(a, this.Yr, "STATEMENTS")
      : a.Ib("STATEMENT_INPUT");
    g.Da.$o(this);
    return a;
  },
  Lg: function (a) {
    this.ob = [];
    this.Cx = [];
    this.Ic = [];
    for (var c = N(a, "STACK"); c && !c.ie(); ) {
      var d = C(c, "NAME");
      this.ob.push(d);
      d = this.u.Ed(d, "");
      this.Ic.push(d);
      this.Cx.push(c.id);
      c = c.W && c.W.sa();
    }
    this.Sp();
    g.Da.$o(this);
    a = C(a, "STATEMENTS");
    if (null !== a && ((a = "TRUE" == a), this.Yr != a))
      if (a) this.kl(!0), g.Ac.cl(this.wi, this, "STACK"), (this.wi = null);
      else {
        a = z(this, "STACK").connection;
        if ((this.wi = a.oa)) (a = a.sa()), y(a), a.cc();
        this.kl(!1);
      }
  },
  bj: function () {
    return [C(this, "NAME"), this.ob, !1];
  },
  ci: function () {
    return this.ob;
  },
  bi: function () {
    return this.Ic;
  },
  Ws: function (a, c) {
    var d = this.u.kg(a);
    if ("" == d.type) {
      d = d.name;
      c = this.u.kg(c);
      for (var e = !1, f = 0; f < this.Ic.length; f++)
        this.Ic[f].Qa() == a &&
          ((this.ob[f] = c.name), (this.Ic[f] = c), (e = !0));
      e && (this.Fr(d, c.name), g.Da.$o(this));
    }
  },
  qt: function (a) {
    for (var c = a.name, d = !1, e = 0; e < this.Ic.length; e++)
      if (this.Ic[e].Qa() == a.Qa()) {
        var f = this.ob[e];
        this.ob[e] = c;
        d = !0;
      }
    d && (this.Fr(f, c), g.Da.$o(this));
  },
  Fr: function (a, c) {
    this.Sp();
    if (this.rd && this.rd.isVisible())
      for (var d = B(this.rd.s, !1), e = 0, f; (f = d[e]); e++)
        "procedures_mutatorarg" == f.type &&
          g.Od.zf(a, C(f, "NAME")) &&
          nc(f, c, "NAME");
  },
  Wh: function (a) {
    if (!this.Ub) {
      var c = { enabled: !0 },
        d = C(this, "NAME");
      c.text = g.h.PROCEDURES_CREATE_DO.replace("%1", d);
      var e = g.g.xml.createElement("mutation");
      e.setAttribute("name", d);
      for (d = 0; d < this.ob.length; d++) {
        var f = g.g.xml.createElement("arg");
        f.setAttribute("name", this.ob[d]);
        e.appendChild(f);
      }
      d = g.g.xml.createElement("block");
      d.setAttribute("type", this.NA);
      d.appendChild(e);
      c.Aa = g.$a.ir(this, d);
      a.push(c);
      if (!this.isCollapsed())
        for (d = 0; d < this.Ic.length; d++)
          (c = { enabled: !0 }),
            (e = this.Ic[d]),
            (c.text = g.h.VARIABLES_SET_CREATE_GET.replace("%1", e.name)),
            (e = g.ga.xo(e)),
            (f = g.g.xml.createElement("block")),
            f.setAttribute("type", "variables_get"),
            f.appendChild(e),
            (c.Aa = g.$a.ir(this, f)),
            a.push(c);
    }
  },
  NA: "procedures_callnoreturn",
};
g.Y.procedures_defreturn = {
  aa: function () {
    var a = g.Da.Mr("", this);
    a = new g.Rc(a, g.Da.zD);
    xe(a);
    J(J(J(M(this), g.h.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
    J(K(L(this, "RETURN"), g.Zc), g.h.PROCEDURES_DEFRETURN_RETURN);
    this.Xm(new g.Ac(["procedures_mutatorarg"]));
    (this.u.options.$n ||
      (this.u.options.yc && this.u.options.yc.options.$n)) &&
      g.h.PROCEDURES_DEFRETURN_COMMENT &&
      this.Gj(g.h.PROCEDURES_DEFRETURN_COMMENT);
    this.Jb("procedure_blocks");
    this.fb(g.h.PROCEDURES_DEFRETURN_TOOLTIP);
    this.xc = g.h.PROCEDURES_DEFRETURN_HELPURL;
    this.ob = [];
    this.Ic = [];
    this.kl(!0);
    this.wi = null;
  },
  kl: g.Y.procedures_defnoreturn.kl,
  Sp: g.Y.procedures_defnoreturn.Sp,
  Xa: g.Y.procedures_defnoreturn.Xa,
  Eb: g.Y.procedures_defnoreturn.Eb,
  Qg: g.Y.procedures_defnoreturn.Qg,
  Lg: g.Y.procedures_defnoreturn.Lg,
  bj: function () {
    return [C(this, "NAME"), this.ob, !0];
  },
  ci: g.Y.procedures_defnoreturn.ci,
  bi: g.Y.procedures_defnoreturn.bi,
  Ws: g.Y.procedures_defnoreturn.Ws,
  qt: g.Y.procedures_defnoreturn.qt,
  Fr: g.Y.procedures_defnoreturn.Fr,
  Wh: g.Y.procedures_defnoreturn.Wh,
  NA: "procedures_callreturn",
};
g.Y.procedures_mutatorcontainer = {
  aa: function () {
    J(M(this), g.h.PROCEDURES_MUTATORCONTAINER_TITLE);
    this.Gg(g.kb, "STACK");
    J(
      J(M(this, "STATEMENT_INPUT"), g.h.PROCEDURES_ALLOW_STATEMENTS),
      new g.hf("TRUE"),
      "STATEMENTS"
    );
    this.Jb("procedure_blocks");
    this.fb(g.h.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.Y.procedures_mutatorarg = {
  aa: function () {
    var a = new g.Rc(g.Da.Xy, this.tl);
    a.$J = a.ng;
    a.ng = function () {
      this.lo = [];
      this.$J();
    };
    J(J(M(this), g.h.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
    this.Ce(!0);
    this.Be(!0);
    this.Jb("procedure_blocks");
    this.fb(g.h.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = !1;
    a.ox = this.gI;
    a.lo = [];
    a.ox("x");
  },
  tl: function (a) {
    var c = this.X(),
      d = g.Ac.DB(c.u);
    a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
    if (!a) return null;
    for (
      var e = B(c.u.gb || c.u, !1), f = a.toLowerCase(), h = 0;
      h < e.length;
      h++
    )
      if (e[h].id != this.X().id) {
        var k = C(e[h], "NAME");
        if (k && k.toLowerCase() == f) return null;
      }
    if (c.Ub) return a;
    (c = d.Ed(a, "")) && c.name != a && d.Dj(c.Qa(), a);
    c || ((c = d.xf(a, "")) && this.lo && this.lo.push(c));
    return a;
  },
  gI: function (a) {
    var c = g.Ac.DB(this.X().u);
    if (c)
      for (var d = 0; d < this.lo.length; d++) {
        var e = this.lo[d];
        e.name != a && c.Xh(e.Qa());
      }
  },
};
g.Y.procedures_callnoreturn = {
  aa: function () {
    J(M(this, "TOPROW"), "", "NAME");
    this.Ce(!0);
    this.Be(!0);
    this.Jb("procedure_blocks");
    this.xc = g.h.PROCEDURES_CALLNORETURN_HELPURL;
    this.ob = [];
    this.Ic = [];
    this.bl = {};
    this.lh = null;
    this.Lx = !0;
  },
  Ve: function () {
    return C(this, "NAME");
  },
  Vm: function (a, c) {
    g.Od.zf(a, this.Ve()) &&
      (nc(this, c, "NAME"),
      this.fb(
        (this.O
          ? g.h.PROCEDURES_CALLRETURN_TOOLTIP
          : g.h.PROCEDURES_CALLNORETURN_TOOLTIP
        ).replace("%1", c)
      ));
  },
  ay: function (a, c) {
    var d = g.Da.Bo(this.Ve(), this.u),
      e = d && d.rd && d.rd.isVisible();
    e || ((this.bl = {}), (this.lh = null));
    if (c)
      if (a.join("\n") == this.ob.join("\n")) this.lh = c;
      else {
        if (c.length != a.length)
          throw RangeError("paramNames and paramIds must be the same length.");
        this.Fj(!1);
        this.lh || ((this.bl = {}), (this.lh = []));
        d = this.ra;
        this.ra = !1;
        for (var f = 0; f < this.ob.length; f++) {
          var h = z(this, "ARG" + f);
          h &&
            ((h = h.connection.oa),
            (this.bl[this.lh[f]] = h),
            e &&
              h &&
              -1 == c.indexOf(this.lh[f]) &&
              (h.disconnect(), h.X().cc()));
        }
        this.ob = [].concat(a);
        this.Ic = [];
        for (f = 0; f < this.ob.length; f++)
          (a = g.ga.Ur(this.u, null, this.ob[f], "")), this.Ic.push(a);
        this.wd();
        if ((this.lh = c))
          for (f = 0; f < this.ob.length; f++)
            (c = this.lh[f]),
              c in this.bl &&
                ((h = this.bl[c]),
                g.Ac.cl(h, this, "ARG" + f) || delete this.bl[c]);
        (this.ra = d) && this.Ia();
      }
  },
  wd: function () {
    for (var a = 0; a < this.ob.length; a++) {
      var c = w(this, "ARGNAME" + a);
      if (c) {
        g.i.disable();
        try {
          c.setValue(this.ob[a]);
        } finally {
          g.i.enable();
        }
      } else
        (c = new g.Ld(this.ob[a])),
          J(K(L(this, "ARG" + a), g.Zc), c, "ARGNAME" + a).aa();
    }
    for (; z(this, "ARG" + a); ) this.Ib("ARG" + a), a++;
    if ((a = z(this, "TOPROW")))
      if (this.ob.length)
        w(this, "WITH") ||
          (J(a, g.h.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.aa());
      else if (w(this, "WITH"))
        a: {
          c = 0;
          for (var d; (d = a.hb[c]); c++)
            if ("WITH" === d.name) {
              d.J();
              a.hb.splice(c, 1);
              a.I.ra && ((a.I = a.I), a.I.Ia(), a.I.cc());
              break a;
            }
          throw Error('Field "WITH" not found.');
        }
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("name", this.Ve());
    for (var c = 0; c < this.ob.length; c++) {
      var d = g.g.xml.createElement("arg");
      d.setAttribute("name", this.ob[c]);
      a.appendChild(d);
    }
    return a;
  },
  Eb: function (a) {
    var c = a.getAttribute("name");
    this.Vm(this.Ve(), c);
    c = [];
    for (var d = [], e = 0, f; (f = a.childNodes[e]); e++)
      "arg" == f.nodeName.toLowerCase() &&
        (c.push(f.getAttribute("name")), d.push(f.getAttribute("paramId")));
    this.ay(c, d);
  },
  ci: function () {
    return this.ob;
  },
  bi: function () {
    return this.Ic;
  },
  onchange: function (a) {
    if (this.u && !this.u.lg && a.eb)
      if (a.type == g.i.bq && -1 != a.jj.indexOf(this.id)) {
        var c = this.Ve();
        c = g.Da.Bo(c, this.u);
        !c ||
          (c.type == this.tv &&
            JSON.stringify(c.ci()) == JSON.stringify(this.ob)) ||
          (c = null);
        if (!c) {
          g.i.na(a.group);
          a = g.g.xml.createElement("xml");
          c = g.g.xml.createElement("block");
          c.setAttribute("type", this.tv);
          var d = this.bb(),
            e = d.y + 2 * g.Rd;
          c.setAttribute("x", d.x + g.Rd * (this.M ? -1 : 1));
          c.setAttribute("y", e);
          d = this.Xa();
          c.appendChild(d);
          d = g.g.xml.createElement("field");
          d.setAttribute("name", "NAME");
          e = this.Ve();
          e || ((e = g.Da.Mr("", this)), this.Vm("", e));
          d.appendChild(g.g.xml.createTextNode(e));
          c.appendChild(d);
          a.appendChild(c);
          g.T.Yi(a, this.u);
          g.i.na(!1);
        }
      } else
        a.type == g.i.zt
          ? ((c = this.Ve()),
            (c = g.Da.Bo(c, this.u)),
            c || (g.i.na(a.group), this.J(!0), g.i.na(!1)))
          : a.type == g.i.Qj &&
            "disabled" == a.element &&
            ((c = this.Ve()),
            (c = g.Da.Bo(c, this.u)) &&
              c.id == a.ub &&
              ((c = g.i.wc()) &&
                console.log(
                  "Saw an existing group while responding to a definition change"
                ),
              g.i.na(a.group),
              a.newValue
                ? ((this.Lx = this.isEnabled()), this.ke(!1))
                : this.ke(this.Lx),
              g.i.na(c)));
  },
  Wh: function (a) {
    if (this.u.Lc()) {
      var c = { enabled: !0 };
      c.text = g.h.PROCEDURES_HIGHLIGHT_DEF;
      var d = this.Ve(),
        e = this.u;
      c.Aa = function () {
        var f = g.Da.Bo(d, e);
        if (f) {
          var h = f.id;
          if (e.Lc()) {
            if ((h = h ? e.$d(h) : null)) {
              var k = h.bb(),
                l = E(h),
                m = e.scale;
              h = (k.x + ((e.M ? -1 : 1) * l.width) / 2) * m;
              k = (k.y + l.height / 2) * m;
              l = e.dd();
              e.scroll(-(h - l.Qb / 2), -(k - l.Vb / 2));
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
  tv: "procedures_defnoreturn",
};
g.Y.procedures_callreturn = {
  aa: function () {
    J(M(this, "TOPROW"), "", "NAME");
    this.td(!0);
    this.Jb("procedure_blocks");
    this.xc = g.h.PROCEDURES_CALLRETURN_HELPURL;
    this.ob = [];
    this.Ic = [];
    this.bl = {};
    this.lh = null;
    this.Lx = !0;
  },
  Ve: g.Y.procedures_callnoreturn.Ve,
  Vm: g.Y.procedures_callnoreturn.Vm,
  ay: g.Y.procedures_callnoreturn.ay,
  wd: g.Y.procedures_callnoreturn.wd,
  Xa: g.Y.procedures_callnoreturn.Xa,
  Eb: g.Y.procedures_callnoreturn.Eb,
  ci: g.Y.procedures_callnoreturn.ci,
  bi: g.Y.procedures_callnoreturn.bi,
  onchange: g.Y.procedures_callnoreturn.onchange,
  Wh: g.Y.procedures_callnoreturn.Wh,
  tv: "procedures_defreturn",
};
g.Y.procedures_ifreturn = {
  aa: function () {
    J(L(this, "CONDITION").Ja("Boolean"), g.h.CONTROLS_IF_MSG_IF);
    J(L(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN);
    this.Ae(!0);
    this.Ce(!0);
    this.Be(!0);
    this.Jb("procedure_blocks");
    this.fb(g.h.PROCEDURES_IFRETURN_TOOLTIP);
    this.xc = g.h.PROCEDURES_IFRETURN_HELPURL;
    this.ej = !0;
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("value", Number(this.ej));
    return a;
  },
  Eb: function (a) {
    this.ej = 1 == a.getAttribute("value");
    this.ej ||
      (this.Ib("VALUE"), J(M(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN));
  },
  onchange: function () {
    if (this.u.Cc && !this.u.Cc()) {
      var a = !1,
        c = this;
      do {
        if (-1 != this.zF.indexOf(c.type)) {
          a = !0;
          break;
        }
        c = mc(c);
      } while (c);
      a
        ? ("procedures_defnoreturn" == c.type && this.ej
            ? (this.Ib("VALUE"),
              J(M(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN),
              (this.ej = !1))
            : "procedures_defreturn" != c.type ||
              this.ej ||
              (this.Ib("VALUE"),
              J(L(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN),
              (this.ej = !0)),
          this.Zm(null),
          this.Ub || this.ke(!0))
        : (this.Zm(g.h.PROCEDURES_IFRETURN_WARNING),
          this.Ub || oc(this) || this.ke(!1));
    }
  },
  zF: ["procedures_defnoreturn", "procedures_defreturn"],
};
g.Tf = function (a, c, d, e, f, h, k) {
  if (!a) throw Error("Src value of an image field is required");
  a = g.g.Mc(a);
  d = Number(g.g.Mc(d));
  c = Number(g.g.Mc(c));
  if (isNaN(d) || isNaN(c))
    throw Error(
      "Height and width values of an image field must cast to numbers."
    );
  if (0 >= d || 0 >= c)
    throw Error(
      "Height and width values of an image field must be greater than 0."
    );
  this.vo = !1;
  this.Zq = "";
  g.Tf.v.constructor.call(this, a, null, k);
  k || ((this.vo = !!h), (this.Zq = g.g.Mc(e) || ""));
  this.Nc = new g.g.re(c, d + g.Tf.uH);
  this.mJ = d;
  this.Sh = null;
  "function" == typeof f && (this.Sh = f);
  this.fe = null;
};
g.g.object.V(g.Tf, g.jd);
g.Tf.prototype.Sj = "";
g.Tf.ma = function (a) {
  return new g.Tf(a.src, a.width, a.height, void 0, void 0, void 0, a);
};
g.Tf.uH = 1;
b = g.Tf.prototype;
b.un = !1;
b.dh = !1;
b.Bd = function (a) {
  g.Tf.v.Bd.call(this, a);
  this.vo = !!a.flipRtl;
  this.Zq = g.g.Mc(a.alt) || "";
};
b.di = function () {
  this.fe = g.g.o.L(
    g.g.F.Ii,
    { height: this.mJ + "px", width: this.Nc.width + "px", alt: this.Zq },
    this.Zd
  );
  this.fe.setAttributeNS(g.g.o.rf, "xlink:href", this.sb);
  this.Sh && (this.fe.style.cursor = "pointer");
};
b.Tp = function () {};
b.Yh = function (a) {
  return "string" != typeof a ? null : a;
};
b.fg = function (a) {
  this.sb = a;
  this.fe && this.fe.setAttributeNS(g.g.o.rf, "xlink:href", String(this.sb));
};
b.RB = function () {
  return this.vo;
};
b.ng = function () {
  this.Sh && this.Sh(this);
};
b.Vr = function () {
  return this.Zq;
};
g.Ue.register("field_image", g.Tf);
g.Wj = function (a, c, d) {
  g.Wj.v.constructor.call(this, a, c, d);
  this.Lp = null;
};
g.g.object.V(g.Wj, g.Rc);
g.Wj.ma = function (a) {
  var c = g.g.Mc(a.text);
  return new g.Wj(c, void 0, a);
};
b = g.Wj.prototype;
b.vy = function (a) {
  a.textContent = this.getValue().replace(/\n/g, "&#10;");
  return a;
};
b.tm = function (a) {
  this.setValue(a.textContent.replace(/&#10;/g, "\n"));
};
b.di = function () {
  Lb(this);
  this.Lp = g.g.o.L(g.g.F.qc, { class: "blocklyEditableText" }, this.Zd);
};
b.vm = function () {
  var a = this.Dd();
  if (!a) return g.jd.Hq;
  var c = a.split("\n");
  a = "";
  for (var d = 0; d < c.length; d++) {
    var e = c[d];
    e.length > this.ss && (e = e.substring(0, this.ss - 4) + "...");
    e = e.replace(/\s/g, g.jd.Hq);
    a += e;
    d !== c.length - 1 && (a += "\n");
  }
  this.I.M && (a += "\u200f");
  return a;
};
b.fl = function () {
  for (var a; (a = this.Lp.firstChild); ) this.Lp.removeChild(a);
  a = this.vm().split("\n");
  for (var c = 0, d = 0; d < a.length; d++) {
    var e = this.U().Vj + this.U().El;
    g.g.o
      .L(
        g.g.F.Rq,
        {
          class: "blocklyText blocklyMultilineText",
          x: this.U().Ah,
          y: c + this.U().El,
          dy: this.U().St,
        },
        this.Lp
      )
      .appendChild(document.createTextNode(a[d]));
    c += e;
  }
  this.Tp();
  this.Em &&
    (this.I.M ? setTimeout(this.hl.bind(this), 0) : this.hl(),
    (a = this.Gd),
    this.js
      ? (g.g.o.hc(a, "blocklyInvalidInput"), g.g.$.Zb(a, g.g.$.State.Eq, !1))
      : (g.g.o.Ga(a, "blocklyInvalidInput"), g.g.$.Zb(a, g.g.$.State.Eq, !0)));
};
b.Tp = function () {
  for (var a = this.Lp.childNodes, c = 0, d = 0, e = 0; e < a.length; e++) {
    var f = g.g.o.VI(a[e]);
    f > c && (c = f);
    d += this.U().Vj + (0 < e ? this.U().El : 0);
  }
  this.Db &&
    ((d += 2 * this.U().El),
    (c += 2 * this.U().Ah),
    this.Db.setAttribute("width", c),
    this.Db.setAttribute("height", d));
  this.Nc.width = c;
  this.Nc.height = d;
  Pb(this);
};
b.st = function () {
  var a = g.la.pb,
    c = $c(this.s),
    d = document.createElement("textarea");
  d.className = "blocklyHtmlInput blocklyHtmlTextAreaInput";
  d.setAttribute("spellcheck", this.an);
  var e = this.U().Bh * c + "pt";
  a.style.fontSize = e;
  d.style.fontSize = e;
  d.style.borderRadius = g.Rc.Oy * c + "px";
  e = this.U().Ah * c;
  var f = (this.U().El * c) / 2;
  d.style.padding = f + "px " + e + "px " + f + "px " + e + "px";
  e = this.U().Vj + this.U().El;
  d.style.lineHeight = e * c + "px";
  a.appendChild(d);
  d.value = d.defaultValue = String(this.sb);
  d.YD = this.sb;
  d.mx = null;
  g.g.userAgent.nz ? setTimeout(this.hl.bind(this), 0) : this.hl();
  ze(this, d);
  return d;
};
b.px = function (a) {
  a.keyCode !== g.g.P.Dl && g.Wj.v.px.call(this, a);
};
g.Qc.register(
  ".blocklyHtmlTextAreaInput {,font-family: monospace;,resize: none;,overflow: hidden;,height: 100%;,text-align: left;,}".split(
    ","
  )
);
g.Ue.register("field_multilinetext", g.Wj);
g.Y.DL = {};
g.ba.Text = {};
g.ba.Text.Hl = 160;
g.Xi([
  {
    type: "text",
    message0: "%1",
    args0: [{ type: "field_input", name: "TEXT", text: "" }],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["text_quotes", "parent_tooltip_when_inline"],
  },
  {
    type: "text_multiline",
    message0: "%1 %2",
    args0: [
      {
        type: "field_image",
        src:
          "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAARCAYAAADpPU2iAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAdhgAAHYYBXaITgQAAABh0RVh0U29mdHdhcmUAcGFpbnQubmV0IDQuMS42/U4J6AAAAP1JREFUOE+Vks0KQUEYhjmRIja4ABtZ2dm5A3t3Ia6AUm7CylYuQRaUhZSlLZJiQbFAyRnPN33y01HOW08z8873zpwzM4F3GWOCruvGIE4/rLaV+Nq1hVGMBqzhqlxgCys4wJA65xnogMHsQ5lujnYHTejBBCK2mE4abjCgMGhNxHgDFWjDSG07kdfVa2pZMf4ZyMAdWmpZMfYOsLiDMYMjlMB+K613QISRhTnITnsYg5yUd0DETmEoMlkFOeIT/A58iyK5E18BuTBfgYXfwNJv4P9/oEBerLylOnRhygmGdPpTTBZAPkde61lbQe4moWUvYUZYLfUNftIY4zwA5X2Z9AYnQrEAAAAASUVORK5CYII=",
        width: 12,
        height: 17,
        alt: "\u00b6",
      },
      { type: "field_multilinetext", name: "TEXT", text: "" },
    ],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_TEXT_HELPURL}",
    tooltip: "%{BKY_TEXT_TEXT_TOOLTIP}",
    extensions: ["parent_tooltip_when_inline"],
  },
  {
    type: "text_join",
    message0: "",
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_JOIN_HELPURL}",
    tooltip: "%{BKY_TEXT_JOIN_TOOLTIP}",
    mutator: "text_join_mutator",
  },
  {
    type: "text_create_join_container",
    message0: "%{BKY_TEXT_CREATE_JOIN_TITLE_JOIN} %1 %2",
    args0: [
      { type: "input_dummy" },
      { type: "input_statement", name: "STACK" },
    ],
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_TOOLTIP}",
    enableContextMenu: !1,
  },
  {
    type: "text_create_join_item",
    message0: "%{BKY_TEXT_CREATE_JOIN_ITEM_TITLE_ITEM}",
    previousStatement: null,
    nextStatement: null,
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_CREATE_JOIN_ITEM_TOOLTIP}",
    enableContextMenu: !1,
  },
  {
    type: "text_append",
    message0: "%{BKY_TEXT_APPEND_TITLE}",
    args0: [
      {
        type: "field_variable",
        name: "VAR",
        variable: "%{BKY_TEXT_APPEND_VARIABLE}",
      },
      { type: "input_value", name: "TEXT" },
    ],
    previousStatement: null,
    nextStatement: null,
    style: "text_blocks",
    extensions: ["text_append_tooltip"],
  },
  {
    type: "text_length",
    message0: "%{BKY_TEXT_LENGTH_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Number",
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_LENGTH_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_LENGTH_HELPURL}",
  },
  {
    type: "text_isEmpty",
    message0: "%{BKY_TEXT_ISEMPTY_TITLE}",
    args0: [{ type: "input_value", name: "VALUE", check: ["String", "Array"] }],
    output: "Boolean",
    style: "text_blocks",
    tooltip: "%{BKY_TEXT_ISEMPTY_TOOLTIP}",
    helpUrl: "%{BKY_TEXT_ISEMPTY_HELPURL}",
  },
  {
    type: "text_indexOf",
    message0: "%{BKY_TEXT_INDEXOF_TITLE}",
    args0: [
      { type: "input_value", name: "VALUE", check: "String" },
      {
        type: "field_dropdown",
        name: "END",
        options: [
          ["%{BKY_TEXT_INDEXOF_OPERATOR_FIRST}", "FIRST"],
          ["%{BKY_TEXT_INDEXOF_OPERATOR_LAST}", "LAST"],
        ],
      },
      { type: "input_value", name: "FIND", check: "String" },
    ],
    output: "Number",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_INDEXOF_HELPURL}",
    inputsInline: !0,
    extensions: ["text_indexOf_tooltip"],
  },
  {
    type: "text_charAt",
    message0: "%{BKY_TEXT_CHARAT_TITLE}",
    args0: [
      { type: "input_value", name: "VALUE", check: "String" },
      {
        type: "field_dropdown",
        name: "WHERE",
        options: [
          ["%{BKY_TEXT_CHARAT_FROM_START}", "FROM_START"],
          ["%{BKY_TEXT_CHARAT_FROM_END}", "FROM_END"],
          ["%{BKY_TEXT_CHARAT_FIRST}", "FIRST"],
          ["%{BKY_TEXT_CHARAT_LAST}", "LAST"],
          ["%{BKY_TEXT_CHARAT_RANDOM}", "RANDOM"],
        ],
      },
    ],
    output: "String",
    style: "text_blocks",
    helpUrl: "%{BKY_TEXT_CHARAT_HELPURL}",
    inputsInline: !0,
    mutator: "text_charAt_mutator",
  },
]);
g.Y.text_getSubstring = {
  aa: function () {
    this.WHERE_OPTIONS_1 = [
      [g.h.TEXT_GET_SUBSTRING_START_FROM_START, "FROM_START"],
      [g.h.TEXT_GET_SUBSTRING_START_FROM_END, "FROM_END"],
      [g.h.TEXT_GET_SUBSTRING_START_FIRST, "FIRST"],
    ];
    this.WHERE_OPTIONS_2 = [
      [g.h.TEXT_GET_SUBSTRING_END_FROM_START, "FROM_START"],
      [g.h.TEXT_GET_SUBSTRING_END_FROM_END, "FROM_END"],
      [g.h.TEXT_GET_SUBSTRING_END_LAST, "LAST"],
    ];
    this.xc = g.h.TEXT_GET_SUBSTRING_HELPURL;
    this.Jb("text_blocks");
    J(L(this, "STRING").Ja("String"), g.h.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
    M(this, "AT1");
    M(this, "AT2");
    g.h.TEXT_GET_SUBSTRING_TAIL &&
      J(M(this, "TAIL"), g.h.TEXT_GET_SUBSTRING_TAIL);
    this.Ae(!0);
    this.td(!0, "String");
    this.nc(1, !0);
    this.nc(2, !0);
    this.fb(g.h.TEXT_GET_SUBSTRING_TOOLTIP);
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at1", z(this, "AT1").type == g.jb);
    a.setAttribute("at2", z(this, "AT2").type == g.jb);
    return a;
  },
  Eb: function (a) {
    var c = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.nc(1, c);
    this.nc(2, a);
  },
  nc: function (a, c) {
    this.Ib("AT" + a);
    this.Ib("ORDINAL" + a, !0);
    c
      ? (L(this, "AT" + a).Ja("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          J(M(this, "ORDINAL" + a), g.h.ORDINAL_NUMBER_SUFFIX))
      : M(this, "AT" + a);
    2 == a &&
      g.h.TEXT_GET_SUBSTRING_TAIL &&
      (this.Ib("TAIL", !0), J(M(this, "TAIL"), g.h.TEXT_GET_SUBSTRING_TAIL));
    var d = new g.Sa(this["WHERE_OPTIONS_" + a], function (e) {
      var f = "FROM_START" == e || "FROM_END" == e;
      if (f != c) {
        var h = this.X();
        h.nc(a, f);
        nc(h, e, "WHERE" + a);
        return null;
      }
    });
    J(z(this, "AT" + a), d, "WHERE" + a);
    1 == a &&
      (qc(this, "AT1", "AT2"),
      z(this, "ORDINAL1") && qc(this, "ORDINAL1", "AT2"));
  },
};
g.Y.text_changeCase = {
  aa: function () {
    var a = [
      [g.h.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"],
      [g.h.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"],
      [g.h.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"],
    ];
    this.xc = g.h.TEXT_CHANGECASE_HELPURL;
    this.Jb("text_blocks");
    J(L(this, "TEXT").Ja("String"), new g.Sa(a), "CASE");
    this.td(!0, "String");
    this.fb(g.h.TEXT_CHANGECASE_TOOLTIP);
  },
};
g.Y.text_trim = {
  aa: function () {
    var a = [
      [g.h.TEXT_TRIM_OPERATOR_BOTH, "BOTH"],
      [g.h.TEXT_TRIM_OPERATOR_LEFT, "LEFT"],
      [g.h.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"],
    ];
    this.xc = g.h.TEXT_TRIM_HELPURL;
    this.Jb("text_blocks");
    J(L(this, "TEXT").Ja("String"), new g.Sa(a), "MODE");
    this.td(!0, "String");
    this.fb(g.h.TEXT_TRIM_TOOLTIP);
  },
};
g.Y.text_print = {
  aa: function () {
    pc(this, {
      message0: g.h.TEXT_PRINT_TITLE,
      args0: [{ type: "input_value", name: "TEXT" }],
      previousStatement: null,
      nextStatement: null,
      style: "text_blocks",
      tooltip: g.h.TEXT_PRINT_TOOLTIP,
      helpUrl: g.h.TEXT_PRINT_HELPURL,
    });
  },
};
g.Y.text_prompt_ext = {
  aa: function () {
    var a = [
      [g.h.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
      [g.h.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"],
    ];
    this.xc = g.h.TEXT_PROMPT_HELPURL;
    this.Jb("text_blocks");
    var c = this;
    a = new g.Sa(a, function (d) {
      c.qg(d);
    });
    J(L(this, "TEXT"), a, "TYPE");
    this.td(!0, "String");
    this.fb(function () {
      return "TEXT" == C(c, "TYPE")
        ? g.h.TEXT_PROMPT_TOOLTIP_TEXT
        : g.h.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  },
  qg: function (a) {
    this.O.Ja("NUMBER" == a ? "Number" : "String");
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("type", C(this, "TYPE"));
    return a;
  },
  Eb: function (a) {
    this.qg(a.getAttribute("type"));
  },
};
g.Y.text_prompt = {
  aa: function () {
    this.Id(g.ba.Text.qu);
    var a = [
        [g.h.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
        [g.h.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"],
      ],
      c = this;
    this.xc = g.h.TEXT_PROMPT_HELPURL;
    this.Jb("text_blocks");
    a = new g.Sa(a, function (d) {
      c.qg(d);
    });
    J(
      J(J(J(M(this), a, "TYPE"), this.Om(!0)), new g.Rc(""), "TEXT"),
      this.Om(!1)
    );
    this.td(!0, "String");
    this.fb(function () {
      return "TEXT" == C(c, "TYPE")
        ? g.h.TEXT_PROMPT_TOOLTIP_TEXT
        : g.h.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  },
  qg: g.Y.text_prompt_ext.qg,
  Xa: g.Y.text_prompt_ext.Xa,
  Eb: g.Y.text_prompt_ext.Eb,
};
g.Y.text_count = {
  aa: function () {
    pc(this, {
      message0: g.h.TEXT_COUNT_MESSAGE0,
      args0: [
        { type: "input_value", name: "SUB", check: "String" },
        { type: "input_value", name: "TEXT", check: "String" },
      ],
      output: "Number",
      inputsInline: !0,
      style: "text_blocks",
      tooltip: g.h.TEXT_COUNT_TOOLTIP,
      helpUrl: g.h.TEXT_COUNT_HELPURL,
    });
  },
};
g.Y.text_replace = {
  aa: function () {
    pc(this, {
      message0: g.h.TEXT_REPLACE_MESSAGE0,
      args0: [
        { type: "input_value", name: "FROM", check: "String" },
        { type: "input_value", name: "TO", check: "String" },
        { type: "input_value", name: "TEXT", check: "String" },
      ],
      output: "String",
      inputsInline: !0,
      style: "text_blocks",
      tooltip: g.h.TEXT_REPLACE_TOOLTIP,
      helpUrl: g.h.TEXT_REPLACE_HELPURL,
    });
  },
};
g.Y.text_reverse = {
  aa: function () {
    pc(this, {
      message0: g.h.TEXT_REVERSE_MESSAGE0,
      args0: [{ type: "input_value", name: "TEXT", check: "String" }],
      output: "String",
      inputsInline: !0,
      style: "text_blocks",
      tooltip: g.h.TEXT_REVERSE_TOOLTIP,
      helpUrl: g.h.TEXT_REVERSE_HELPURL,
    });
  },
};
g.ba.Text.qu = {
  JG:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
  KG:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
  LG: 12,
  IG: 12,
  vK: function (a) {
    for (var c = 0, d; (d = this.S[c]); c++)
      for (var e = 0, f; (f = d.hb[e]); e++)
        if (a == f.name) {
          jc(d, e, this.Om(!0));
          jc(d, e + 2, this.Om(!1));
          return;
        }
    console.warn('field named "' + a + '" not found in ' + ic(this));
  },
  Om: function (a) {
    a = this.M ? !a : a;
    return new g.Tf(
      a ? this.JG : this.KG,
      this.LG,
      this.IG,
      a ? "\u201c" : "\u201d"
    );
  },
};
g.ba.Text.fH = function () {
  this.Id(g.ba.Text.qu);
  this.vK("TEXT");
};
g.ba.Text.eH = {
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("items", this.ec);
    return a;
  },
  Eb: function (a) {
    this.ec = parseInt(a.getAttribute("items"), 10);
    this.wd();
  },
  Qg: function (a) {
    var c = a.gh("text_create_join_container");
    c.xe();
    for (var d = z(c, "STACK").connection, e = 0; e < this.ec; e++) {
      var f = a.gh("text_create_join_item");
      f.xe();
      d.connect(f.ka);
      d = f.W;
    }
    return c;
  },
  Lg: function (a) {
    var c = N(a, "STACK");
    for (a = []; c && !c.ie(); ) a.push(c.Wp), (c = c.W && c.W.sa());
    for (c = 0; c < this.ec; c++) {
      var d = z(this, "ADD" + c).connection.oa;
      d && -1 == a.indexOf(d) && d.disconnect();
    }
    this.ec = a.length;
    this.wd();
    for (c = 0; c < this.ec; c++) g.Ac.cl(a[c], this, "ADD" + c);
  },
  up: function (a) {
    a = N(a, "STACK");
    for (var c = 0; a; ) {
      var d = z(this, "ADD" + c);
      a.Wp = d && d.connection.oa;
      c++;
      a = a.W && a.W.sa();
    }
  },
  wd: function () {
    this.ec && z(this, "EMPTY")
      ? this.Ib("EMPTY")
      : this.ec ||
        z(this, "EMPTY") ||
        J(J(M(this, "EMPTY"), this.Om(!0)), this.Om(!1));
    for (var a = 0; a < this.ec; a++)
      if (!z(this, "ADD" + a)) {
        var c = K(L(this, "ADD" + a), g.Zc);
        0 == a && J(c, g.h.TEXT_JOIN_TITLE_CREATEWITH);
      }
    for (; z(this, "ADD" + a); ) this.Ib("ADD" + a), a++;
  },
};
g.ba.Text.dH = function () {
  this.Id(g.ba.Text.qu);
  this.ec = 2;
  this.wd();
  this.Xm(new g.Ac(["text_create_join_item"]));
};
g.ca.register("text_append_tooltip", g.ca.hr("%{BKY_TEXT_APPEND_TOOLTIP}"));
g.ba.Text.cH = function () {
  var a = this;
  this.fb(function () {
    return g.h.TEXT_INDEXOF_TOOLTIP.replace("%1", a.u.options.Hf ? "0" : "-1");
  });
};
g.ba.Text.bH = {
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at", !!this.vC);
    return a;
  },
  Eb: function (a) {
    a = "false" != a.getAttribute("at");
    this.nc(a);
  },
  nc: function (a) {
    this.Ib("AT", !0);
    this.Ib("ORDINAL", !0);
    a &&
      (L(this, "AT").Ja("Number"),
      g.h.ORDINAL_NUMBER_SUFFIX &&
        J(M(this, "ORDINAL"), g.h.ORDINAL_NUMBER_SUFFIX));
    g.h.TEXT_CHARAT_TAIL &&
      (this.Ib("TAIL", !0), J(M(this, "TAIL"), g.h.TEXT_CHARAT_TAIL));
    this.vC = a;
  },
};
g.ba.Text.aH = function () {
  Nb(w(this, "WHERE"), function (c) {
    c = "FROM_START" == c || "FROM_END" == c;
    c != this.vC && this.X().nc(c);
  });
  this.nc(!0);
  var a = this;
  this.fb(function () {
    var c = C(a, "WHERE"),
      d = g.h.TEXT_CHARAT_TOOLTIP;
    ("FROM_START" == c || "FROM_END" == c) &&
      (c =
        "FROM_START" == c
          ? g.h.LISTS_INDEX_FROM_START_TOOLTIP
          : g.h.LISTS_INDEX_FROM_END_TOOLTIP) &&
      (d += "  " + c.replace("%1", a.u.options.Hf ? "#1" : "#0"));
    return d;
  });
};
g.ca.register("text_indexOf_tooltip", g.ba.Text.cH);
g.ca.register("text_quotes", g.ba.Text.fH);
g.ca.op("text_join_mutator", g.ba.Text.eH, g.ba.Text.dH);
g.ca.op("text_charAt_mutator", g.ba.Text.bH, g.ba.Text.aH);
g.Y.PL = {};
g.ba.ga = {};
g.ba.ga.Hl = 330;
g.Xi([
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
g.ba.ga.NE = {
  Wh: function (a) {
    if (!this.Ub) {
      if ("variables_get" == this.type)
        var c = "variables_set",
          d = g.h.VARIABLES_GET_CREATE_SET;
      else (c = "variables_get"), (d = g.h.VARIABLES_SET_CREATE_GET);
      var e = { enabled: 0 < Ka(this.u) },
        f = w(this, "VAR").Dd();
      e.text = d.replace("%1", f);
      d = g.g.xml.createElement("field");
      d.setAttribute("name", "VAR");
      d.appendChild(g.g.xml.createTextNode(f));
      f = g.g.xml.createElement("block");
      f.setAttribute("type", c);
      f.appendChild(d);
      e.Aa = g.$a.ir(this, f);
      a.push(e);
    } else if (
      "variables_get" == this.type ||
      "variables_get_reporter" == this.type
    )
      (c = { text: g.h.ZN, enabled: !0, Aa: g.ba.ga.OG(this) }),
        (f = w(this, "VAR").Dd()),
        (e = {
          text: g.h.kM.replace("%1", f),
          enabled: !0,
          Aa: g.ba.ga.TE(this),
        }),
        a.unshift(c),
        a.unshift(e);
  },
};
g.ba.ga.OG = function (a) {
  return function () {
    var c = a.u,
      d = w(a, "VAR").Ed();
    g.ga.Xs(c, d);
  };
};
g.ba.ga.TE = function (a) {
  return function () {
    var c = a.u,
      d = w(a, "VAR").Ed();
    c.Xh(d.Qa());
    Uc(c);
  };
};
g.ca.Ts("contextMenu_variableSetterGetter", g.ba.ga.NE);
g.Generator = function (a) {
  this.uj = a;
  this.yF = new RegExp(this.Gc, "g");
};
g.Generator.Iz = "generated_function";
b = g.Generator.prototype;
b.Bq = null;
b.qe = null;
b.ld = null;
b.Md = "  ";
b.CE = 60;
b.Jq = [];
b.Bw = null;
function Ge() {
  var a = g.j,
    c = A;
  c ||
    (console.warn("No workspace specified in workspaceToCode call.  Guessing."),
    (c = g.Ug()));
  var d = [];
  a.aa(c);
  c = c.dc(!0);
  for (var e = 0, f; (f = c[e]); e++) {
    var h = He(a, f);
    Array.isArray(h) && (h = h[0]);
    h &&
      (f.O &&
        ((h = a.ED(h)),
        a.qe && !f.Jj && (h = T(a.qe, f) + h),
        a.ld && !f.Jj && (h += T(a.ld, f))),
      d.push(h));
  }
  d = d.join("\n");
  d = a.finish(d);
  d = d.replace(/^\s+\n/, "");
  d = d.replace(/\n\s+$/, "\n");
  return (d = d.replace(/[ \t]+\n/g, "\n"));
}
function Ke(a, c) {
  return c + a.replace(/(?!\n$)\n/g, "\n" + c);
}
function He(a, c) {
  !1 === a.Bw &&
    console.warn(
      "Generator init was not called before blockToCode was called."
    );
  if (!c) return "";
  if (!c.isEnabled()) return He(a, q(c));
  if (c.ie()) return He(a, Ca(c, !1)[0]);
  var d = a[c.type];
  if ("function" != typeof d)
    throw Error(
      'Language "' +
        a.uj +
        '" does not know how to generate  code for block type "' +
        c.type +
        '".'
    );
  d = d.call(c, c);
  if (Array.isArray(d)) {
    if (!c.O)
      throw TypeError("Expecting string from statement block: " + c.type);
    return [a.$s(c, d[0], void 0), d[1]];
  }
  if ("string" == typeof d)
    return (
      a.qe && !c.Jj && (d = T(a.qe, c) + d),
      a.ld && !c.Jj && (d += T(a.ld, c)),
      a.$s(c, d, void 0)
    );
  if (null === d) return "";
  throw SyntaxError("Invalid code generated: " + d);
}
function U(a, c, d) {
  var e = g.j;
  if (isNaN(d)) throw TypeError("Expecting valid order from block: " + a.type);
  var f = N(a, c);
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
    for (f = !0, h = 0; h < e.Jq.length; h++)
      if (e.Jq[h][0] == d && e.Jq[h][1] == c) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function Le(a, c) {
  var d = g.j;
  a = N(a, c);
  c = He(d, a);
  if ("string" != typeof c)
    throw TypeError("Expecting code from statement block: " + (a && a.type));
  c && (c = Ke(c, d.Md));
  return c;
}
function Me(a, c) {
  var d = g.j;
  d.Bq && (a = Ke(T(d.Bq, c), d.Md) + a);
  d.ld && !c.Jj && (a = Ke(T(d.ld, c), d.Md) + a);
  d.qe && !c.Jj && (a += Ke(T(d.qe, c), d.Md));
  return a;
}
function T(a, c) {
  c = c.id.replace(/\$/g, "$$$$");
  return a.replace(/%1/g, "'" + c + "'");
}
b.su = "";
function Ne(a, c) {
  a.su += c + ",";
}
b.Gc = "{leCUI8hutHZI4480Dc}";
function V(a, c) {
  var d = g.j;
  if (!d.rk[a]) {
    var e = id(d.$b, a, g.Mn);
    d.Yv[a] = e;
    c = c.join("\n").replace(d.yF, e);
    for (var f; f != c; )
      (f = c), (c = c.replace(/^(( {2})*) {2}/gm, "$1\x00"));
    c = c.replace(/\0/g, d.Md);
    d.rk[a] = c;
  }
  return d.Yv[a];
}
b.aa = function () {};
b.$s = function (a, c) {
  return c;
};
b.finish = function (a) {
  return a;
};
b.ED = function (a) {
  return a;
};
g.j = new g.Generator("JavaScript");
Ne(
  g.j,
  "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," +
    Object.getOwnPropertyNames(g.g.global).join(",")
);
g.j.Je = 0;
g.j.JN = 1.1;
g.j.tb = 1.2;
g.j.Ka = 2;
g.j.HN = 3;
g.j.DN = 3;
g.j.zN = 4.1;
g.j.MN = 4.2;
g.j.Kn = 4.3;
g.j.Pl = 4.4;
g.j.KN = 4.5;
g.j.NN = 4.6;
g.j.EN = 4.7;
g.j.xN = 4.8;
g.j.FN = 5;
g.j.lu = 5.1;
g.j.In = 5.2;
g.j.Jn = 5.3;
g.j.Oi = 6.1;
g.j.yg = 6.2;
g.j.BN = 7;
g.j.zG = 8;
g.j.GN = 8;
g.j.IN = 8;
g.j.Mz = 9;
g.j.yN = 10;
g.j.CN = 11;
g.j.AN = 12;
g.j.ju = 13;
g.j.ku = 14;
g.j.Iq = 15;
g.j.bk = 16;
g.j.ON = 17;
g.j.pf = 18;
g.j.ua = 99;
g.j.Jq = [
  [g.j.Ka, g.j.tb],
  [g.j.Ka, g.j.Ka],
  [g.j.tb, g.j.tb],
  [g.j.tb, g.j.Ka],
  [g.j.Pl, g.j.Pl],
  [g.j.lu, g.j.lu],
  [g.j.yg, g.j.yg],
  [g.j.ju, g.j.ju],
  [g.j.ku, g.j.ku],
];
g.j.Bw = !1;
g.j.aa = function (a) {
  g.j.rk = Object.create(null);
  g.j.Yv = Object.create(null);
  g.j.$b ? g.j.$b.reset() : (g.j.$b = new g.Od(g.j.su));
  g.j.$b.gy(a.Ua);
  for (var c = [], d = g.ga.yH(a), e = 0; e < d.length; e++)
    c.push(g.j.$b.ve(d[e], g.Od.Mt));
  a = g.ga.HA(a);
  for (e = 0; e < a.length; e++) c.push(g.j.$b.ve(a[e].Qa(), g.rc));
  c.length && (g.j.rk.variables = "var " + c.join(", ") + ";");
  this.Bw = !0;
};
g.j.finish = function (a) {
  var c = [],
    d;
  for (d in g.j.rk) c.push(g.j.rk[d]);
  delete g.j.rk;
  delete g.j.Yv;
  g.j.$b.reset();
  return c.join("\n\n") + "\n\n\n" + a;
};
g.j.ED = function (a) {
  return a + ";\n";
};
g.j.Rs = function (a) {
  a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
  return "'" + a + "'";
};
g.j.QJ = function (a) {
  return a.split(/\n/g).map(g.j.Rs).join(" + '\\n' +\n");
};
g.j.$s = function (a, c, d) {
  var e = "";
  if (!a.O || !a.O.oa) {
    var f = a.Pe.text;
    f && ((f = g.g.yb.gE(f, g.j.CE - 3)), (e += Ke(f + "\n", "// ")));
    for (var h = 0; h < a.S.length; h++)
      if (a.S[h].type == g.jb) {
        var k = a.S[h].connection.sa();
        if (k) {
          f = [];
          k = p(k, !0);
          for (var l = 0; l < k.length; l++) {
            var m = k[l].Pe.text;
            m && f.push(m);
          }
          f.length && f.push("");
          (f = f.join("\n")) && (e += Ke(f, "// "));
        }
      }
  }
  a = a.W && a.W.sa();
  d = d ? "" : He(g.j, a);
  return e + c + d;
};
g.j.cd = function (a, c, d, e, f) {
  d = d || 0;
  f = f || g.j.ua;
  a.u.options.Hf && d--;
  var h = a.u.options.Hf ? "1" : "0";
  a =
    0 < d
      ? U(a, c, g.j.yg) || h
      : 0 > d
      ? U(a, c, g.j.Oi) || h
      : e
      ? U(a, c, g.j.Kn) || h
      : U(a, c, f) || h;
  if (g.pj(a)) (a = Number(a) + d), e && (a = -a);
  else {
    if (0 < d) {
      a = a + " + " + d;
      var k = g.j.yg;
    } else 0 > d && ((a = a + " - " + -d), (k = g.j.Oi));
    e && ((a = d ? "-(" + a + ")" : "-" + a), (k = g.j.Kn));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
g.j.vb = {};
g.j.colour_picker = function (a) {
  return [g.j.Rs(C(a, "COLOUR")), g.j.Je];
};
g.j.colour_random = function () {
  return [
    V("colourRandom", [
      "function " + g.j.Gc + "() {",
      "  var num = Math.floor(Math.random() * Math.pow(2, 24));",
      "  return '#' + ('00000' + num.toString(16)).substr(-6);",
      "}",
    ]) + "()",
    g.j.Ka,
  ];
};
g.j.colour_rgb = function (a) {
  var c = U(a, "RED", g.j.ua) || 0,
    d = U(a, "GREEN", g.j.ua) || 0;
  a = U(a, "BLUE", g.j.ua) || 0;
  return [
    V("colourRgb", [
      "function " + g.j.Gc + "(r, g, b) {",
      "  r = Math.max(Math.min(Number(r), 100), 0) * 2.55;",
      "  g = Math.max(Math.min(Number(g), 100), 0) * 2.55;",
      "  b = Math.max(Math.min(Number(b), 100), 0) * 2.55;",
      "  r = ('0' + (Math.round(r) || 0).toString(16)).slice(-2);",
      "  g = ('0' + (Math.round(g) || 0).toString(16)).slice(-2);",
      "  b = ('0' + (Math.round(b) || 0).toString(16)).slice(-2);",
      "  return '#' + r + g + b;",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      d +
      ", " +
      a +
      ")",
    g.j.Ka,
  ];
};
g.j.colour_blend = function (a) {
  var c = U(a, "COLOUR1", g.j.ua) || "'#000000'",
    d = U(a, "COLOUR2", g.j.ua) || "'#000000'";
  a = U(a, "RATIO", g.j.ua) || 0.5;
  return [
    V("colourBlend", [
      "function " + g.j.Gc + "(c1, c2, ratio) {",
      "  ratio = Math.max(Math.min(Number(ratio), 1), 0);",
      "  var r1 = parseInt(c1.substring(1, 3), 16);",
      "  var g1 = parseInt(c1.substring(3, 5), 16);",
      "  var b1 = parseInt(c1.substring(5, 7), 16);",
      "  var r2 = parseInt(c2.substring(1, 3), 16);",
      "  var g2 = parseInt(c2.substring(3, 5), 16);",
      "  var b2 = parseInt(c2.substring(5, 7), 16);",
      "  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);",
      "  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);",
      "  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);",
      "  r = ('0' + (r || 0).toString(16)).slice(-2);",
      "  g = ('0' + (g || 0).toString(16)).slice(-2);",
      "  b = ('0' + (b || 0).toString(16)).slice(-2);",
      "  return '#' + r + g + b;",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      d +
      ", " +
      a +
      ")",
    g.j.Ka,
  ];
};
g.j.Mw = {};
g.j.lists_create_empty = function () {
  return ["[]", g.j.Je];
};
g.j.lists_create_with = function (a) {
  for (var c = Array(a.ec), d = 0; d < a.ec; d++)
    c[d] = U(a, "ADD" + d, g.j.ua) || "null";
  return ["[" + c.join(", ") + "]", g.j.Je];
};
g.j.lists_repeat = function (a) {
  var c = V("listsRepeat", [
      "function " + g.j.Gc + "(value, n) {",
      "  var array = [];",
      "  for (var i = 0; i < n; i++) {",
      "    array[i] = value;",
      "  }",
      "  return array;",
      "}",
    ]),
    d = U(a, "ITEM", g.j.ua) || "null";
  a = U(a, "NUM", g.j.ua) || "0";
  return [c + "(" + d + ", " + a + ")", g.j.Ka];
};
g.j.lists_length = function (a) {
  return [(U(a, "VALUE", g.j.tb) || "[]") + ".length", g.j.tb];
};
g.j.lists_isEmpty = function (a) {
  return ["!" + (U(a, "VALUE", g.j.tb) || "[]") + ".length", g.j.Pl];
};
g.j.lists_indexOf = function (a) {
  var c = "FIRST" == C(a, "END") ? "indexOf" : "lastIndexOf",
    d = U(a, "FIND", g.j.ua) || "''";
  c = (U(a, "VALUE", g.j.tb) || "[]") + "." + c + "(" + d + ")";
  return a.u.options.Hf ? [c + " + 1", g.j.yg] : [c, g.j.Ka];
};
g.j.lists_getIndex = function (a) {
  var c = C(a, "MODE") || "GET",
    d = C(a, "WHERE") || "FROM_START",
    e = U(a, "VALUE", "RANDOM" == d ? g.j.ua : g.j.tb) || "[]";
  switch (d) {
    case "FIRST":
      if ("GET" == c) return [e + "[0]", g.j.tb];
      if ("GET_REMOVE" == c) return [e + ".shift()", g.j.tb];
      if ("REMOVE" == c) return e + ".shift();\n";
      break;
    case "LAST":
      if ("GET" == c) return [e + ".slice(-1)[0]", g.j.tb];
      if ("GET_REMOVE" == c) return [e + ".pop()", g.j.tb];
      if ("REMOVE" == c) return e + ".pop();\n";
      break;
    case "FROM_START":
      a = g.j.cd(a, "AT");
      if ("GET" == c) return [e + "[" + a + "]", g.j.tb];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.Ka];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);\n";
      break;
    case "FROM_END":
      a = g.j.cd(a, "AT", 1, !0);
      if ("GET" == c) return [e + ".slice(" + a + ")[0]", g.j.Ka];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.Ka];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);";
      break;
    case "RANDOM":
      e =
        V("listsGetRandomItem", [
          "function " + g.j.Gc + "(list, remove) {",
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
      if ("GET" == c || "GET_REMOVE" == c) return [e, g.j.Ka];
      if ("REMOVE" == c) return e + ";\n";
  }
  throw Error("Unhandled combination (lists_getIndex).");
};
g.j.lists_setIndex = function (a) {
  function c() {
    if (d.match(/^\w+$/)) return "";
    var k = id(g.j.$b, "tmpList", g.rc),
      l = "var " + k + " = " + d + ";\n";
    d = k;
    return l;
  }
  var d = U(a, "LIST", g.j.tb) || "[]",
    e = C(a, "MODE") || "GET",
    f = C(a, "WHERE") || "FROM_START",
    h = U(a, "TO", g.j.bk) || "null";
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
      f = g.j.cd(a, "AT");
      if ("SET" == e) return d + "[" + f + "] = " + h + ";\n";
      if ("INSERT" == e) return d + ".splice(" + f + ", 0, " + h + ");\n";
      break;
    case "FROM_END":
      f = g.j.cd(a, "AT", 1, !1, g.j.Oi);
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
      f = id(g.j.$b, "tmpX", g.rc);
      a += "var " + f + " = Math.floor(Math.random() * " + d + ".length);\n";
      if ("SET" == e) return a + (d + "[" + f + "] = " + h + ";\n");
      if ("INSERT" == e) return a + (d + ".splice(" + f + ", 0, " + h + ");\n");
  }
  throw Error("Unhandled combination (lists_setIndex).");
};
g.j.Mw.fw = function (a, c, d) {
  return "FIRST" == c
    ? "0"
    : "FROM_END" == c
    ? a + ".length - 1 - " + d
    : "LAST" == c
    ? a + ".length - 1"
    : d;
};
g.j.lists_getSublist = function (a) {
  var c = U(a, "LIST", g.j.tb) || "[]",
    d = C(a, "WHERE1"),
    e = C(a, "WHERE2");
  if ("FIRST" == d && "LAST" == e) c += ".slice(0)";
  else if (c.match(/^\w+$/) || ("FROM_END" != d && "FROM_START" == e)) {
    switch (d) {
      case "FROM_START":
        var f = g.j.cd(a, "AT1");
        break;
      case "FROM_END":
        f = g.j.cd(a, "AT1", 1, !1, g.j.Oi);
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
        a = g.j.cd(a, "AT2", 1);
        break;
      case "FROM_END":
        a = g.j.cd(a, "AT2", 0, !1, g.j.Oi);
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
    f = g.j.cd(a, "AT1");
    a = g.j.cd(a, "AT2");
    var h = g.j.Mw.fw,
      k = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd",
      };
    c =
      V("subsequence" + k[d] + k[e], [
        "function " +
          g.j.Gc +
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
  return [c, g.j.Ka];
};
g.j.lists_sort = function (a) {
  var c = U(a, "LIST", g.j.Ka) || "[]",
    d = "1" === C(a, "DIRECTION") ? 1 : -1;
  a = C(a, "TYPE");
  var e = V("listsGetSortCompare", [
    "function " + g.j.Gc + "(type, direction) {",
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
  return [c + ".slice().sort(" + e + '("' + a + '", ' + d + "))", g.j.Ka];
};
g.j.lists_split = function (a) {
  var c = U(a, "INPUT", g.j.tb),
    d = U(a, "DELIM", g.j.ua) || "''";
  a = C(a, "MODE");
  if ("SPLIT" == a) c || (c = "''"), (a = "split");
  else if ("JOIN" == a) c || (c = "[]"), (a = "join");
  else throw Error("Unknown mode: " + a);
  return [c + "." + a + "(" + d + ")", g.j.Ka];
};
g.j.lists_reverse = function (a) {
  return [(U(a, "LIST", g.j.Ka) || "[]") + ".slice().reverse()", g.j.Ka];
};
g.j.DJ = {};
g.j.controls_if = function (a) {
  var c = 0,
    d = "";
  g.j.qe && (d += T(g.j.qe, a));
  do {
    var e = U(a, "IF" + c, g.j.ua) || "false";
    var f = Le(a, "DO" + c);
    g.j.ld && (f = Ke(T(g.j.ld, a), g.j.Md) + f);
    d += (0 < c ? " else " : "") + "if (" + e + ") {\n" + f + "}";
    ++c;
  } while (z(a, "IF" + c));
  if (z(a, "ELSE") || g.j.ld)
    (f = Le(a, "ELSE")),
      g.j.ld && (f = Ke(T(g.j.ld, a), g.j.Md) + f),
      (d += " else {\n" + f + "}");
  return d + "\n";
};
g.j.controls_ifelse = g.j.controls_if;
g.j.logic_compare = function (a) {
  var c = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[
      C(a, "OP")
    ],
    d = "==" == c || "!=" == c ? g.j.Mz : g.j.zG,
    e = U(a, "A", d) || "0";
  a = U(a, "B", d) || "0";
  return [e + " " + c + " " + a, d];
};
g.j.logic_operation = function (a) {
  var c = "AND" == C(a, "OP") ? "&&" : "||",
    d = "&&" == c ? g.j.ju : g.j.ku,
    e = U(a, "A", d);
  a = U(a, "B", d);
  if (e || a) {
    var f = "&&" == c ? "true" : "false";
    e || (e = f);
    a || (a = f);
  } else a = e = "false";
  return [e + " " + c + " " + a, d];
};
g.j.logic_negate = function (a) {
  var c = g.j.Pl;
  return ["!" + (U(a, "BOOL", c) || "true"), c];
};
g.j.logic_boolean = function (a) {
  return ["TRUE" == C(a, "BOOL") ? "true" : "false", g.j.Je];
};
g.j.logic_null = function () {
  return ["null", g.j.Je];
};
g.j.logic_ternary = function (a) {
  var c = U(a, "IF", g.j.Iq) || "false",
    d = U(a, "THEN", g.j.Iq) || "null";
  a = U(a, "ELSE", g.j.Iq) || "null";
  return [c + " ? " + d + " : " + a, g.j.Iq];
};
g.j.FJ = {};
g.j.controls_repeat_ext = function (a) {
  var c = w(a, "TIMES")
      ? String(Number(C(a, "TIMES")))
      : U(a, "TIMES", g.j.bk) || "0",
    d = Le(a, "DO");
  d = Me(d, a);
  a = "";
  var e = id(g.j.$b, "count", g.rc),
    f = c;
  c.match(/^\w+$/) ||
    g.pj(c) ||
    ((f = id(g.j.$b, "repeat_end", g.rc)),
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
    d = U(a, "BOOL", c ? g.j.Pl : g.j.ua) || "false",
    e = Le(a, "DO");
  e = Me(e, a);
  c && (d = "!" + d);
  return "while (" + d + ") {\n" + e + "}\n";
};
g.j.controls_for = function (a) {
  var c = g.j.$b.ve(C(a, "VAR"), g.rc),
    d = U(a, "FROM", g.j.bk) || "0",
    e = U(a, "TO", g.j.bk) || "0",
    f = U(a, "BY", g.j.bk) || "1",
    h = Le(a, "DO");
  h = Me(h, a);
  if (g.pj(d) && g.pj(e) && g.pj(f)) {
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
        g.pj(d) ||
        ((k = id(g.j.$b, c + "_start", g.rc)),
        (a += "var " + k + " = " + d + ";\n")),
      (d = e),
      e.match(/^\w+$/) ||
        g.pj(e) ||
        ((d = id(g.j.$b, c + "_end", g.rc)),
        (a += "var " + d + " = " + e + ";\n")),
      (e = id(g.j.$b, c + "_inc", g.rc)),
      (a += "var " + e + " = "),
      (a = g.pj(f)
        ? a + (Math.abs(f) + ";\n")
        : a + ("Math.abs(" + f + ");\n")),
      (a =
        a +
        ("if (" + k + " > " + d + ") {\n") +
        (g.j.Md + e + " = -" + e + ";\n")),
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
  var c = g.j.$b.ve(C(a, "VAR"), g.rc),
    d = U(a, "LIST", g.j.bk) || "[]",
    e = Le(a, "DO");
  e = Me(e, a);
  a = "";
  var f = d;
  d.match(/^\w+$/) ||
    ((f = id(g.j.$b, c + "_list", g.rc)),
    (a += "var " + f + " = " + d + ";\n"));
  d = id(g.j.$b, c + "_index", g.rc);
  e = g.j.Md + c + " = " + f + "[" + d + "];\n" + e;
  return a + ("for (var " + d + " in " + f + ") {\n" + e + "}\n");
};
g.j.controls_flow_statements = function (a) {
  var c = "";
  g.j.qe && (c += T(g.j.qe, a));
  g.j.ld && (c += T(g.j.ld, a));
  if (g.j.qe) {
    var d = g.ba.mf.oq.bC(a);
    d && !d.Jj && (c += T(g.j.qe, d));
  }
  switch (C(a, "FLOW")) {
    case "BREAK":
      return c + "break;\n";
    case "CONTINUE":
      return c + "continue;\n";
  }
  throw Error("Unknown flow statement.");
};
g.j.ze = {};
g.j.math_number = function (a) {
  a = Number(C(a, "NUM"));
  return [a, 0 <= a ? g.j.Je : g.j.Kn];
};
g.j.math_arithmetic = function (a) {
  var c = {
      ADD: [" + ", g.j.yg],
      MINUS: [" - ", g.j.Oi],
      MULTIPLY: [" * ", g.j.lu],
      DIVIDE: [" / ", g.j.In],
      POWER: [null, g.j.ua],
    }[C(a, "OP")],
    d = c[0];
  c = c[1];
  var e = U(a, "A", c) || "0";
  a = U(a, "B", c) || "0";
  return d ? [e + d + a, c] : ["Math.pow(" + e + ", " + a + ")", g.j.Ka];
};
g.j.math_single = function (a) {
  var c = C(a, "OP");
  if ("NEG" == c)
    return (
      (a = U(a, "NUM", g.j.Kn) || "0"),
      "-" == a[0] && (a = " " + a),
      ["-" + a, g.j.Kn]
    );
  a =
    "SIN" == c || "COS" == c || "TAN" == c
      ? U(a, "NUM", g.j.In) || "0"
      : U(a, "NUM", g.j.ua) || "0";
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
  if (d) return [d, g.j.Ka];
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
  return [d, g.j.In];
};
g.j.math_constant = function (a) {
  return {
    PI: ["Math.PI", g.j.tb],
    E: ["Math.E", g.j.tb],
    GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", g.j.In],
    SQRT2: ["Math.SQRT2", g.j.tb],
    SQRT1_2: ["Math.SQRT1_2", g.j.tb],
    INFINITY: ["Infinity", g.j.Je],
  }[C(a, "CONSTANT")];
};
g.j.math_number_property = function (a) {
  var c = U(a, "NUMBER_TO_CHECK", g.j.Jn) || "0",
    d = C(a, "PROPERTY");
  if ("PRIME" == d) {
    var e =
      V("mathIsPrime", [
        "function " + g.j.Gc + "(n) {",
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
    return [e, g.j.Ka];
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
      (a = U(a, "DIVISOR", g.j.Jn) || "0"), (e = c + " % " + a + " == 0");
  }
  return [e, g.j.Mz];
};
g.j.math_change = function (a) {
  var c = U(a, "DELTA", g.j.yg) || "0";
  a = g.j.$b.ve(C(a, "VAR"), g.rc);
  return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + c + ";\n";
};
g.j.math_round = g.j.math_single;
g.j.math_trig = g.j.math_single;
g.j.math_on_list = function (a) {
  var c = C(a, "OP");
  switch (c) {
    case "SUM":
      a = U(a, "LIST", g.j.tb) || "[]";
      a += ".reduce(function(x, y) {return x + y;})";
      break;
    case "MIN":
      a = U(a, "LIST", g.j.ua) || "[]";
      a = "Math.min.apply(null, " + a + ")";
      break;
    case "MAX":
      a = U(a, "LIST", g.j.ua) || "[]";
      a = "Math.max.apply(null, " + a + ")";
      break;
    case "AVERAGE":
      c = V("mathMean", [
        "function " + g.j.Gc + "(myList) {",
        "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;",
        "}",
      ]);
      a = U(a, "LIST", g.j.ua) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MEDIAN":
      c = V("mathMedian", [
        "function " + g.j.Gc + "(myList) {",
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
      a = U(a, "LIST", g.j.ua) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MODE":
      c = V("mathModes", [
        "function " + g.j.Gc + "(values) {",
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
      a = U(a, "LIST", g.j.ua) || "[]";
      a = c + "(" + a + ")";
      break;
    case "STD_DEV":
      c = V("mathStandardDeviation", [
        "function " + g.j.Gc + "(numbers) {",
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
      a = U(a, "LIST", g.j.ua) || "[]";
      a = c + "(" + a + ")";
      break;
    case "RANDOM":
      c = V("mathRandomList", [
        "function " + g.j.Gc + "(list) {",
        "  var x = Math.floor(Math.random() * list.length);",
        "  return list[x];",
        "}",
      ]);
      a = U(a, "LIST", g.j.ua) || "[]";
      a = c + "(" + a + ")";
      break;
    default:
      throw Error("Unknown operator: " + c);
  }
  return [a, g.j.Ka];
};
g.j.math_modulo = function (a) {
  var c = U(a, "DIVIDEND", g.j.Jn) || "0";
  a = U(a, "DIVISOR", g.j.Jn) || "0";
  return [c + " % " + a, g.j.Jn];
};
g.j.math_constrain = function (a) {
  var c = U(a, "VALUE", g.j.ua) || "0",
    d = U(a, "LOW", g.j.ua) || "0";
  a = U(a, "HIGH", g.j.ua) || "Infinity";
  return ["Math.min(Math.max(" + c + ", " + d + "), " + a + ")", g.j.Ka];
};
g.j.math_random_int = function (a) {
  var c = U(a, "FROM", g.j.ua) || "0";
  a = U(a, "TO", g.j.ua) || "0";
  return [
    V("mathRandomInt", [
      "function " + g.j.Gc + "(a, b) {",
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
    g.j.Ka,
  ];
};
g.j.math_random_float = function () {
  return ["Math.random()", g.j.Ka];
};
g.j.math_atan2 = function (a) {
  var c = U(a, "X", g.j.ua) || "0";
  return [
    "Math.atan2(" + (U(a, "Y", g.j.ua) || "0") + ", " + c + ") / Math.PI * 180",
    g.j.In,
  ];
};
g.j.uK = {};
g.j.procedures_defreturn = function (a) {
  var c = g.j.$b.ve(C(a, "NAME"), g.Mn),
    d = "";
  g.j.qe && (d += T(g.j.qe, a));
  g.j.ld && (d += T(g.j.ld, a));
  d && (d = Ke(d, g.j.Md));
  var e = "";
  g.j.Bq && (e = Ke(T(g.j.Bq, a), g.j.Md));
  var f = Le(a, "STACK"),
    h = U(a, "RETURN", g.j.ua) || "",
    k = "";
  f && h && (k = d);
  h && (h = g.j.Md + "return " + h + ";\n");
  for (var l = [], m = a.ci(), n = 0; n < m.length; n++)
    l[n] = g.j.$b.ve(m[n], g.rc);
  d = "function " + c + "(" + l.join(", ") + ") {\n" + d + e + f + k + h + "}";
  d = g.j.$s(a, d);
  g.j.rk["%" + c] = d;
  return null;
};
g.j.procedures_defnoreturn = g.j.procedures_defreturn;
g.j.procedures_callreturn = function (a) {
  for (
    var c = g.j.$b.ve(C(a, "NAME"), g.Mn), d = [], e = a.ci(), f = 0;
    f < e.length;
    f++
  )
    d[f] = U(a, "ARG" + f, g.j.ua) || "null";
  return [c + "(" + d.join(", ") + ")", g.j.Ka];
};
g.j.procedures_callnoreturn = function (a) {
  return g.j.procedures_callreturn(a)[0] + ";\n";
};
g.j.procedures_ifreturn = function (a) {
  var c = "if (" + (U(a, "CONDITION", g.j.ua) || "false") + ") {\n";
  g.j.ld && (c += Ke(T(g.j.ld, a), g.j.Md));
  a.ej
    ? ((a = U(a, "VALUE", g.j.ua) || "null"),
      (c += g.j.Md + "return " + a + ";\n"))
    : (c += g.j.Md + "return;\n");
  return c + "}\n";
};
g.j.DL = {};
g.j.text = function (a) {
  return [g.j.Rs(C(a, "TEXT")), g.j.Je];
};
g.j.text_multiline = function (a) {
  a = g.j.QJ(C(a, "TEXT"));
  return [a, -1 != a.indexOf("+") ? g.j.yg : g.j.Je];
};
g.j.text.sm = function (a) {
  return g.j.text.sm.zL.test(a) ? [a, g.j.Je] : ["String(" + a + ")", g.j.Ka];
};
g.j.text.sm.zL = /^\s*'([^']|\\')*'\s*$/;
g.j.text_join = function (a) {
  switch (a.ec) {
    case 0:
      return ["''", g.j.Je];
    case 1:
      return (a = U(a, "ADD0", g.j.ua) || "''"), g.j.text.sm(a);
    case 2:
      var c = U(a, "ADD0", g.j.ua) || "''";
      a = U(a, "ADD1", g.j.ua) || "''";
      a = g.j.text.sm(c)[0] + " + " + g.j.text.sm(a)[0];
      return [a, g.j.yg];
    default:
      c = Array(a.ec);
      for (var d = 0; d < a.ec; d++) c[d] = U(a, "ADD" + d, g.j.ua) || "''";
      a = "[" + c.join(",") + "].join('')";
      return [a, g.j.Ka];
  }
};
g.j.text_append = function (a) {
  var c = g.j.$b.ve(C(a, "VAR"), g.rc);
  a = U(a, "TEXT", g.j.ua) || "''";
  return c + " += " + g.j.text.sm(a)[0] + ";\n";
};
g.j.text_length = function (a) {
  return [(U(a, "VALUE", g.j.tb) || "''") + ".length", g.j.tb];
};
g.j.text_isEmpty = function (a) {
  return ["!" + (U(a, "VALUE", g.j.tb) || "''") + ".length", g.j.Pl];
};
g.j.text_indexOf = function (a) {
  var c = "FIRST" == C(a, "END") ? "indexOf" : "lastIndexOf",
    d = U(a, "FIND", g.j.ua) || "''";
  c = (U(a, "VALUE", g.j.tb) || "''") + "." + c + "(" + d + ")";
  return a.u.options.Hf ? [c + " + 1", g.j.yg] : [c, g.j.Ka];
};
g.j.text_charAt = function (a) {
  var c = C(a, "WHERE") || "FROM_START",
    d = U(a, "VALUE", "RANDOM" == c ? g.j.ua : g.j.tb) || "''";
  switch (c) {
    case "FIRST":
      return [d + ".charAt(0)", g.j.Ka];
    case "LAST":
      return [d + ".slice(-1)", g.j.Ka];
    case "FROM_START":
      return (a = g.j.cd(a, "AT")), [d + ".charAt(" + a + ")", g.j.Ka];
    case "FROM_END":
      return (
        (a = g.j.cd(a, "AT", 1, !0)),
        [d + ".slice(" + a + ").charAt(0)", g.j.Ka]
      );
    case "RANDOM":
      return (
        (d =
          V("textRandomLetter", [
            "function " + g.j.Gc + "(text) {",
            "  var x = Math.floor(Math.random() * text.length);",
            "  return text[x];",
            "}",
          ]) +
          "(" +
          d +
          ")"),
        [d, g.j.Ka]
      );
  }
  throw Error("Unhandled option (text_charAt).");
};
g.j.text.fw = function (a, c, d) {
  return "FIRST" == c
    ? "0"
    : "FROM_END" == c
    ? a + ".length - 1 - " + d
    : "LAST" == c
    ? a + ".length - 1"
    : d;
};
g.j.text_getSubstring = function (a) {
  var c = C(a, "WHERE1"),
    d = C(a, "WHERE2"),
    e = "FROM_END" != c && "LAST" != c && "FROM_END" != d && "LAST" != d,
    f = U(a, "STRING", e ? g.j.tb : g.j.ua) || "''";
  if ("FIRST" == c && "LAST" == d) return [f, g.j.ua];
  if (f.match(/^'?\w+'?$/) || e) {
    switch (c) {
      case "FROM_START":
        e = g.j.cd(a, "AT1");
        break;
      case "FROM_END":
        e = g.j.cd(a, "AT1", 1, !1, g.j.Oi);
        e = f + ".length - " + e;
        break;
      case "FIRST":
        e = "0";
        break;
      default:
        throw Error("Unhandled option (text_getSubstring).");
    }
    switch (d) {
      case "FROM_START":
        a = g.j.cd(a, "AT2", 1);
        break;
      case "FROM_END":
        a = g.j.cd(a, "AT2", 0, !1, g.j.Oi);
        a = f + ".length - " + a;
        break;
      case "LAST":
        a = f + ".length";
        break;
      default:
        throw Error("Unhandled option (text_getSubstring).");
    }
    c = f + ".slice(" + e + ", " + a + ")";
  } else {
    e = g.j.cd(a, "AT1");
    a = g.j.cd(a, "AT2");
    var h = g.j.text.fw,
      k = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd",
      };
    c =
      V("subsequence" + k[c] + k[d], [
        "function " +
          g.j.Gc +
          "(sequence" +
          ("FROM_END" == c || "FROM_START" == c ? ", at1" : "") +
          ("FROM_END" == d || "FROM_START" == d ? ", at2" : "") +
          ") {",
        "  var start = " + h("sequence", c, "at1") + ";",
        "  var end = " + h("sequence", d, "at2") + " + 1;",
        "  return sequence.slice(start, end);",
        "}",
      ]) +
      "(" +
      f +
      ("FROM_END" == c || "FROM_START" == c ? ", " + e : "") +
      ("FROM_END" == d || "FROM_START" == d ? ", " + a : "") +
      ")";
  }
  return [c, g.j.Ka];
};
g.j.text_changeCase = function (a) {
  var c = {
    UPPERCASE: ".toUpperCase()",
    LOWERCASE: ".toLowerCase()",
    TITLECASE: null,
  }[C(a, "CASE")];
  a = U(a, "TEXT", c ? g.j.tb : g.j.ua) || "''";
  return [
    c
      ? a + c
      : V("textToTitleCase", [
          "function " + g.j.Gc + "(str) {",
          "  return str.replace(/\\S+/g,",
          "      function(txt) {return txt[0].toUpperCase() + txt.substring(1).toLowerCase();});",
          "}",
        ]) +
        "(" +
        a +
        ")",
    g.j.Ka,
  ];
};
g.j.text_trim = function (a) {
  var c = {
    LEFT: ".replace(/^[\\s\\xa0]+/, '')",
    RIGHT: ".replace(/[\\s\\xa0]+$/, '')",
    BOTH: ".trim()",
  }[C(a, "MODE")];
  return [(U(a, "TEXT", g.j.tb) || "''") + c, g.j.Ka];
};
g.j.text_print = function (a) {
  return "window.alert(" + (U(a, "TEXT", g.j.ua) || "''") + ");\n";
};
g.j.text_prompt_ext = function (a) {
  var c =
    "window.prompt(" +
    (w(a, "TEXT") ? g.j.Rs(C(a, "TEXT")) : U(a, "TEXT", g.j.ua) || "''") +
    ")";
  "NUMBER" == C(a, "TYPE") && (c = "Number(" + c + ")");
  return [c, g.j.Ka];
};
g.j.text_prompt = g.j.text_prompt_ext;
g.j.text_count = function (a) {
  var c = U(a, "TEXT", g.j.ua) || "''";
  a = U(a, "SUB", g.j.ua) || "''";
  return [
    V("textCount", [
      "function " + g.j.Gc + "(haystack, needle) {",
      "  if (needle.length === 0) {",
      "    return haystack.length + 1;",
      "  } else {",
      "    return haystack.split(needle).length - 1;",
      "  }",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      a +
      ")",
    g.j.Ka,
  ];
};
g.j.text_replace = function (a) {
  var c = U(a, "TEXT", g.j.ua) || "''",
    d = U(a, "FROM", g.j.ua) || "''";
  a = U(a, "TO", g.j.ua) || "''";
  return [
    V("textReplace", [
      "function " + g.j.Gc + "(haystack, needle, replacement) {",
      '  needle = needle.replace(/([-()\\[\\]{}+?*.$\\^|,:#<!\\\\])/g,"\\\\$1")',
      '                 .replace(/\\x08/g,"\\\\x08");',
      "  return haystack.replace(new RegExp(needle, 'g'), replacement);",
      "}",
    ]) +
      "(" +
      c +
      ", " +
      d +
      ", " +
      a +
      ")",
    g.j.Ka,
  ];
};
g.j.text_reverse = function (a) {
  return [
    (U(a, "TEXT", g.j.tb) || "''") + ".split('').reverse().join('')",
    g.j.Ka,
  ];
};
g.j.PL = {};
g.j.variables_get = function (a) {
  return [g.j.$b.ve(C(a, "VAR"), g.rc), g.j.Je];
};
g.j.variables_set = function (a) {
  var c = U(a, "VALUE", g.j.bk) || "0";
  return g.j.$b.ve(C(a, "VAR"), g.rc) + " = " + c + ";\n";
};
g.Y.movie_circle = {
  aa: function () {
    this.df(160);
    J(
      J(K(L(this, "X").Ja("Number"), g.Zc), P("Movie_circleDraw")),
      P("Movie_x")
    );
    J(K(L(this, "Y").Ja("Number"), g.Zc), P("Movie_y"));
    J(K(L(this, "RADIUS").Ja("Number"), g.Zc), P("Movie_radius"));
    this.Ce(!0);
    this.Be(!0);
    this.fb(P("Movie_circleTooltip"));
  },
};
g.j.movie_circle = function (a) {
  var c = U(a, "X", g.j.pf) || "0",
    d = U(a, "Y", g.j.pf) || "0";
  a = U(a, "RADIUS", g.j.pf) || "0";
  return "circle(" + c + ", " + d + ", " + a + ");\n";
};
g.Y.movie_rect = {
  aa: function () {
    this.df(160);
    J(J(K(L(this, "X").Ja("Number"), g.Zc), P("Movie_rectDraw")), P("Movie_x"));
    J(K(L(this, "Y").Ja("Number"), g.Zc), P("Movie_y"));
    J(K(L(this, "WIDTH").Ja("Number"), g.Zc), P("Movie_width"));
    J(K(L(this, "HEIGHT").Ja("Number"), g.Zc), P("Movie_height"));
    this.Ce(!0);
    this.Be(!0);
    this.fb(P("Movie_rectTooltip"));
  },
};
g.j.movie_rect = function (a) {
  var c = U(a, "X", g.j.pf) || "0",
    d = U(a, "Y", g.j.pf) || "0",
    e = U(a, "WIDTH", g.j.pf) || "0";
  a = U(a, "HEIGHT", g.j.pf) || "0";
  return "rect(" + c + ", " + d + ", " + e + ", " + a + ");\n";
};
g.Y.movie_line = {
  aa: function () {
    this.df(160);
    J(
      J(K(L(this, "X1").Ja("Number"), g.Zc), P("Movie_lineDraw")),
      P("Movie_x1")
    );
    J(K(L(this, "Y1").Ja("Number"), g.Zc), P("Movie_y1"));
    J(K(L(this, "X2").Ja("Number"), g.Zc), P("Movie_x2"));
    J(K(L(this, "Y2").Ja("Number"), g.Zc), P("Movie_y2"));
    J(K(L(this, "WIDTH").Ja("Number"), g.Zc), P("Movie_width"));
    this.Ce(!0);
    this.Be(!0);
    this.fb(P("Movie_rectTooltip"));
  },
};
g.j.movie_line = function (a) {
  var c = U(a, "X1", g.j.pf) || "0",
    d = U(a, "Y1", g.j.pf) || "0",
    e = U(a, "X2", g.j.pf) || "0",
    f = U(a, "Y2", g.j.pf) || "0";
  a = U(a, "WIDTH", g.j.pf) || "0";
  return "line(" + c + ", " + d + ", " + e + ", " + f + ", " + a + ");\n";
};
g.Y.movie_time = {
  aa: function () {
    this.df(g.h.VARIABLES_HUE);
    J(M(this), "time (0\u2192100)");
    this.td(!0, "Number");
    this.fb(P("Movie_timeTooltip"));
  },
};
g.j.movie_time = function () {
  return ["time()", g.j.Je];
};
g.Y.movie_colour = {
  aa: function () {
    this.df(g.h.COLOUR_HUE);
    J(L(this, "COLOUR").Ja("Colour"), P("Movie_setColour"));
    this.Ce(!0);
    this.Be(!0);
    this.fb(P("Movie_colourTooltip"));
  },
};
g.j.movie_colour = function (a) {
  return "penColour(" + (U(a, "COLOUR", g.j.ua) || "'#000000'") + ");\n";
};
var Oe = Oe || {};
function Pe(a, c) {
  function d() {}
  d.prototype = c.prototype;
  a.v = c.prototype;
  a.prototype = new d();
  a.prototype.constructor = a;
  a.sO = function (e, f, h) {
    return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2));
  };
}
if (!Qe) {
  var Qe,
    Re = "";
  "undefined" !== typeof navigator &&
    navigator &&
    "string" == typeof navigator.userAgent &&
    (Re = navigator.userAgent);
  var Se = 0 == Re.indexOf("Opera");
  Qe = {
    LO: { MM: "ScriptEngine" in window },
    wN: Se,
    kf: !Se && -1 != Re.indexOf("MSIE"),
    vA: !Se && -1 != Re.indexOf("WebKit"),
  };
}
if (!Te) var Te = {};
if (!Ue) var Ue = {};
if (!Ve) var Ve = {};
if (!We) var We = {};
if (!Xe) var Xe = {};
if (!Ye) var Ye = {};
var Ze = Oe.QE ? { RO: !0 } : {},
  $e = Oe.QE ? { SO: !0 } : {};
function af() {
  throw Error("Do not instantiate directly");
}
af.prototype.cB = null;
af.prototype.toString = function () {
  return this.content;
};
function bf(a) {
  if (null != a)
    switch (a.cB) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function cf() {
  af.call(this);
}
Pe(cf, af);
cf.prototype.dB = Ze;
function W(a) {
  return null != a && a.dB === Ze
    ? a
    : df(String(String(a)).replace(ef, ff), bf(a));
}
var df = (function (a) {
    function c() {}
    c.prototype = a.prototype;
    return function (d, e) {
      var f = new c();
      f.content = String(d);
      void 0 !== e && (f.cB = e);
      return f;
    };
  })(cf),
  gf = {
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
function ff(a) {
  return gf[a];
}
var ef = /[\x00\x22\x26\x27\x3c\x3e]/g;
function hf() {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
}
function jf() {
  var a = ld,
    c = O,
    d = 10,
    e = nd,
    f = "Movie",
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
    for (var n = " &nbsp; ", t = d + 1, u = 1; u < t; u++) {
      var x = "?lang=" + W(a) + "&level=" + W(u) + (h ? "&" + W(h) : "");
      n +=
        " " +
        (u == c
          ? '<span class="level_number level_done" id="level' +
            W(u) +
            '">' +
            W(u) +
            "</span>"
          : u == d
          ? '<a class="level_number" id="level' +
            W(u) +
            '" href="' +
            W(x) +
            '">' +
            W(u) +
            "</a>"
          : '<a class="level_dot" id="level' +
            W(u) +
            '" href="' +
            W(x) +
            '"></a>');
    }
    d = n;
  } else d = "";
  m = m ? "&nbsp;" + (null != m && m.dB === $e ? "zSoyz" : m) : "";
  return (
    '<div style="display: none"><span id="Games_name">Codekid</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Movie_x">x</span><span id="Movie_y">y</span><span id="Movie_x1">start x</span><span id="Movie_y1">start y</span><span id="Movie_x2">end x</span><span id="Movie_y2">end y</span><span id="Movie_radius">radius</span><span id="Movie_width">width</span><span id="Movie_height">height</span><span id="Movie_circleTooltip">Draws a circle at the specified location and with the specified radius.</span><span id="Movie_circleDraw">circle</span><span id="Movie_rectTooltip">Draws a rectangle at the specified location and with the specified width and height.</span><span id="Movie_rectDraw">rectangle</span><span id="Movie_lineTooltip">Draws a line from one point to another with the specified width.</span><span id="Movie_lineDraw">line</span><span id="Movie_timeTooltip">Returns the current time in the animation (0-100).</span><span id="Movie_colourTooltip">Changes the colour of the pen.</span><span id="Movie_setColour">set colour to</span><span id="Movie_submitDisabled">Your movie doesn\'t move. Use blocks to make something interesting. Then you may submit your movie to the gallery.</span></div>' +
    (f +
      d +
      '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' +
      (k
        ? '&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>'
        : "") +
      (l ? '&nbsp;<button id="helpButton">Help</button>' : "") +
      m +
      '</td></tr></table><div id="visualization"><div id="coordinates"><span id="x"></span><span id="y"></span></div><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="hatching" width="400" height="400" style="display: none"></canvas><canvas id="axies" width="400" height="400" style="display: none" dir="ltr"></canvas><canvas id="display" width="400" height="400" style="vertical-align: bottom"></canvas></div><svg id="scrubber" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="402" height="24"><image xlink:href="movie/youtube-bg.png" height=25 width=402 x=0 y=-1 /></svg>') +
    (10 != c || e
      ? ""
      : '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="movie-gallery"><input type="hidden" name="app" value="movie"><input type="hidden" name="lang" value="' +
        W(a) +
        '"><button type="submit" title="Open the gallery of movies."><img src="common/1x1.gif" class="gallery icon21"> See Gallery</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your movie to the gallery."><img src="common/1x1.gif" class="camera icon21"> Submit to Gallery</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Submit your movie to the gallery.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="movie"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Cancel</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>') +
    ('<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><category name="Movie"><block type="movie_circle"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="RADIUS"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_rect"><value name="X"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="Y"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="HEIGHT"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="movie_line"><value name="X1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="Y1"><shadow type="math_number"><field name="NUM">40</field></shadow></value><value name="X2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="Y2"><shadow type="math_number"><field name="NUM">60</field></shadow></value><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' +
      (1 < c ? '<block type="movie_time"></block>' : "") +
      '</category><category name="Colour"><block type="movie_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block>' +
      (10 == c
        ? '<block type="colour_picker"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block>'
        : "") +
      "</category>" +
      (6 < c
        ? '<category name="Logic"><block type="controls_if">' +
          (10 > c ? '<mutation else="1"></mutation>' : "") +
          '</block><block type="logic_compare"></block>' +
          (10 == c
            ? '<block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block>'
            : "") +
          "</category>"
        : "") +
      (10 == c
        ? '<category name="Loops"><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category>'
        : "") +
      (2 < c
        ? '<category name="Math"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block>' +
          (10 == c
            ? '<block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block>'
            : "") +
          "</category>"
        : "") +
      (10 == c
        ? '<category name="Lists"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category>'
        : "") +
      '</xml><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>') +
    (hf() + "</div>") +
    (9 == c
      ? '<div id="helpLayer" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Move the background circle to the top of your program.  Then it will appear behind the person.</div>' +
        hf() +
        "</div>"
      : "") +
    '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' +
    (1 == c
      ? "Use simple shapes to draw this person."
      : 2 == c
      ? "This level is a movie. You want the person's arm to move across the screen. Press the play button to see a preview.<div id=\"sampleHelp2\" class=\"readonly\"></div>As the movie plays, the value of the 'time' block counts from 0 to 100. Since you want the 'y' position of the arm to start at 0 and go to 100 this should be easy."
      : 3 == c
      ? "The 'time' block counts from 0 to 100. But now you want the 'y' position of the other arm to start at 100 and go to 0. Can you figure out a simple mathematical formula that flips the direction?"
      : 4 == c
      ? "Use what you learned in the previous level to make legs that cross."
      : 5 == c
      ? 'The mathematical formula for the arm is complicated. Here\'s the answer:<br><br><code class="ltr">y = ((time - 50) &divide; 5) ^ 2</code><code class="rtl">&lrm;2 ^ (5 &divide; (50 - time)) = y&lrm;</code>'
      : 6 == c
      ? "Give the person a couple of hands."
      : 7 == c
      ? "Use the 'if' block to draw a small head for the first half of the movie. Then draw a big head for the second half of the movie."
      : 8 == c
      ? "Make the legs reverse direction half way through the movie."
      : 9 == c
      ? "Draw an expanding circle behind the person."
      : 10 == c
      ? "Make a movie of anything you want. You've got a huge number of new blocks you can explore. Have fun!" +
        (e
          ? ""
          : '<br><br>Use the "See Gallery" button to see movies that other people have made. If you make an interesting movie, use the "Submit to Gallery" button to publish it.')
      : "") +
    "</div>" +
    hf() +
    "</div>"
  );
}
function kf(a) {
  var c = lf;
  this.Vf = 42;
  this.An = 328;
  this.yn = 11.5;
  this.Bg = 12;
  this.sb = 0;
  this.PA = c;
  this.Nu = [];
  this.uD = [];
  this.me = g.g.o.L(
    "text",
    { style: "font-size: 10pt", x: this.An + 9, y: 16 },
    a
  );
  od() && this.me.setAttribute("text-anchor", "end");
  c = "#ff3333 #f72f2f #ef2a2a #e72727 #df2222 #d71f1f #cf1a1a".split(" ");
  for (var d = 0; d < c.length; d++)
    this.uD[d] = g.g.o.L(
      "rect",
      { style: "fill: " + c[d], x: this.Vf, y: 8 + d, height: 1 },
      a
    );
  c = g.g.o.L(
    "rect",
    {
      style: "opacity: 0",
      x: this.Vf - this.Bg,
      y: this.yn - this.Bg,
      height: 2 * this.Bg,
      width: this.An - this.Vf + 2 * this.Bg,
      rx: this.Bg,
      ry: this.Bg,
    },
    a
  );
  d = g.g.o.L("clipPath", { id: "knobClipPath" }, a);
  this.AJ = g.g.o.L("rect", { height: 16, width: 16, y: 3 }, d);
  this.Dw = g.g.o.L(
    "image",
    { height: 63, width: 84, "clip-path": "url(#knobClipPath)", y: -39 },
    a
  );
  this.Dw.setAttributeNS(
    "http://www.w3.org/1999/xlink",
    "xlink:href",
    "common/icons.png"
  );
  this.Cw = g.g.o.L(
    "rect",
    {
      style: "opacity: 0",
      height: 2 * this.Bg,
      width: 2 * this.Bg,
      y: this.yn - this.Bg,
    },
    a
  );
  this.setValue(0);
  d = g.g.o.L("clipPath", { id: "playClipPath" }, a);
  g.g.o.L("rect", { height: 21, width: 21, x: 4, y: 1 }, d);
  this.fp = g.g.o.L(
    "image",
    {
      "clip-path": "url(#playClipPath)",
      height: 63,
      width: 84,
      x: -16,
      y: -41,
    },
    a
  );
  for (
    this.fp.setAttributeNS(
      "http://www.w3.org/1999/xlink",
      "xlink:href",
      "common/icons.png"
    );
    a && "svg" != a.nodeName.toLowerCase();

  )
    a = a.parentElement;
  this.lb = a;
  mf(this.Cw, "mousedown", this, this.DC);
  mf(this.Cw, "touchstart", this, this.DC);
  mf(c, "mousedown", this, this.xK);
  mf(this.lb, "mouseup", null, nf);
  mf(this.lb, "touchend", null, nf);
  mf(this.lb, "mousemove", null, of);
  mf(this.lb, "touchmove", null, of);
  mf(this.fp, "click", this, this.ep);
  mf(this.fp, "touchend", this, this.ep);
}
var pf = null,
  qf = 0,
  rf = 0;
b = kf.prototype;
b.DC = function (a) {
  this.Sm && this.ep();
  if ("touchstart" == a.type) {
    if (1 != a.changedTouches.length) return;
    sf(a);
  }
  pf = this;
  qf = tf(this, a).x;
  rf = Number(this.Dw.getAttribute("x")) + this.Vf + 8 + 21;
  a.preventDefault();
};
function nf() {
  pf = null;
}
function of(a) {
  var c = pf;
  if (c) {
    if ("touchmove" == a.type) {
      if (1 != a.changedTouches.length) return;
      sf(a);
    }
    a = tf(c, a).x - qf + rf;
    c.setValue((a - c.Vf) / (c.An - c.Vf));
  }
}
b.xK = function (a) {
  this.Sm && this.ep();
  if ("touchstart" == a.type) {
    if (1 != a.changedTouches.length) return;
    sf(a);
  }
  a = tf(this, a).x;
  uf(this, (a - this.Vf) / (this.An - this.Vf));
};
b.Sm = 0;
b.ep = function (a) {
  var c;
  (c = !a) ||
    ("click" == a.type && "touchend" == je && ke + 2e3 > Date.now()
      ? (a.preventDefault(), a.stopPropagation(), (a = !0))
      : je == a.type && ke + 400 > Date.now()
      ? (a.preventDefault(), a.stopPropagation(), (a = !0))
      : ((je = a.type), (ke = Date.now()), (a = !1)),
    (c = !a));
  c &&
    (this.Sm
      ? (this.fp.setAttribute("x", -16),
        clearTimeout(this.Sm),
        (this.Sm = 0),
        vf())
      : (this.fp.setAttribute("x", 5),
        1 <= this.getValue() && this.setValue(0),
        wf(this)));
};
b.GC = 0;
b.FC = 0;
b.xF = 25;
function wf(a) {
  var c = a.getValue();
  if (1 <= c) a.ep();
  else {
    a.setValue(c + 0.01);
    c = Date.now();
    var d = Math.max(1, 1e3 / a.xF - (c - a.GC - a.FC));
    a.Sm = setTimeout(function () {
      wf(a);
    }, d);
    a.GC = c;
    a.FC = d;
  }
}
b.getValue = function () {
  return this.sb;
};
function uf(a, c) {
  function d(h) {
    return function () {
      a.setValue((h * (c - e)) / 9 + e);
    };
  }
  for (; a.Nu.length; ) clearTimeout(a.Nu.pop());
  for (var e = a.getValue(), f = 0; 10 > f; f++)
    a.Nu.push(setTimeout(d(f), (200 * f) / 10));
}
b.setValue = function (a) {
  this.sb = g.g.ze.gm(a, 0, 1);
  a = this.Vf + (this.An - this.Vf) * this.sb;
  this.AJ.setAttribute("x", a - 8);
  this.Dw.setAttribute("x", a - 63 - 8);
  this.Cw.setAttribute("x", a - this.Bg);
  for (var c = 0, d; (d = this.uD[c]); c++)
    d.setAttribute("width", a - this.Vf);
  for (; this.me.firstChild; ) this.me.removeChild(this.me.firstChild);
  a = Math.round(100 * this.sb);
  c = document.createTextNode("time = " + a);
  this.me.appendChild(c);
  this.PA && this.PA(a);
};
function tf(a, c) {
  var d = a.lb.createSVGPoint();
  d.x = c.clientX;
  d.y = c.clientY;
  a = a.lb.getScreenCTM().inverse();
  return d.matrixTransform(a);
}
function mf(a, c, d, e) {
  a.addEventListener(
    c,
    function (f) {
      e.apply(d, arguments);
    },
    !1
  );
}
function sf(a) {
  var c = a.changedTouches[0];
  a.clientX = c.clientX;
  a.clientY = c.clientY;
}
var wd = "movie",
  te = 1 == O ? 0 : 100,
  ue = Array(te),
  xf = !1,
  yf = 0;
function zf() {
  document.getElementById("coordinates").style.display = "block";
}
function Af() {
  document.getElementById("coordinates").style.display = "none";
}
function Bf(a) {
  var c = od(),
    d = a.clientX;
  a = a.clientY;
  c && (d -= window.innerWidth);
  var e = document.getElementById("visualization");
  e = g.g.style.aj(e);
  e = g.g.Z.pm(e, g.g.style.eC());
  d += c ? e.x : -e.x;
  a -= e.y;
  d /= 4;
  a = 100 - a / 4;
  c && (d += 100);
  10 == O
    ? ((d = Math.round(d)), (a = Math.round(a)))
    : ((d = 10 * Math.round(d / 10)), (a = 10 * Math.round(a / 10)));
  0 <= d && 100 >= d && 0 <= a && 100 >= a
    ? ((document.getElementById("x").textContent = "x = " + d),
      (document.getElementById("y").textContent = "y = " + a))
    : Af();
}
function Cf() {
  var a = document.getElementById("help"),
    c = document.getElementById("helpButton");
  if (2 == O) {
    var d = '<xml><block type="movie_time" x="15" y="10"></block></xml>',
      e = document.getElementById("sampleHelp2");
    e.firstChild ||
      ((e = g.kj(e, { rtl: od(), readOnly: !0 })),
      "string" != typeof d && (d = d.join("")),
      g.T.Yi(g.T.ff(d), e));
  }
  Q.$m(a, c, !0, !0, { width: "50%", left: "25%", top: "5em" }, Df);
  Q.ny();
}
function Df() {
  Q.qy();
}
function Ef(a) {
  var c = document.getElementById("visualization");
  S.strokeStyle = "#000";
  S.fillStyle = "#000";
  var d = document.createElement("canvas");
  d.id = "answer" + a;
  d.width = 400;
  d.height = 400;
  d.style.display = "none";
  c.appendChild(d);
  S.canvas.width = S.canvas.width;
  switch (O) {
    case 1:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      Ff(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 70, 5);
      Z(60, 50, 80, 70, 5);
      break;
    case 2:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      Ff(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 70, 5);
      Z(60, 50, 80, a, 5);
      break;
    case 3:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      Ff(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, a, 5);
      break;
    case 4:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      Ff(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, a, 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      break;
    case 5:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      Ff(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      break;
    case 6:
      X("#ff0000");
      Y(50, 70, 10);
      X("#3333ff");
      Ff(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      X("#ff0000");
      Y(20, 100 - a, 5);
      Y(80, Math.pow((a - 50) / 5, 2), 5);
      break;
    case 7:
      X("#ff0000");
      50 > a ? Y(50, 70, 10) : Y(50, 80, 20);
      X("#3333ff");
      Ff(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      Z(40, 20, a, 0, 5);
      Z(60, 20, 100 - a, 0, 5);
      X("#ff0000");
      Y(20, 100 - a, 5);
      Y(80, Math.pow((a - 50) / 5, 2), 5);
      break;
    case 8:
      X("#ff0000");
      50 > a ? Y(50, 70, 10) : Y(50, 80, 20);
      X("#3333ff");
      Ff(50, 40, 20, 40);
      X("#000000");
      Z(40, 50, 20, 100 - a, 5);
      Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5);
      50 > a
        ? (Z(40, 20, a, 0, 5), Z(60, 20, 100 - a, 0, 5))
        : (Z(40, 20, 100 - a, 0, 5), Z(60, 20, a, 0, 5));
      X("#ff0000");
      Y(20, 100 - a, 5);
      Y(80, Math.pow((a - 50) / 5, 2), 5);
      break;
    case 9:
      X("#00ff00"),
        Y(50, a / 2, a / 2),
        X("#ff0000"),
        50 > a ? Y(50, 70, 10) : Y(50, 80, 20),
        X("#3333ff"),
        Ff(50, 40, 20, 40),
        X("#000000"),
        Z(40, 50, 20, 100 - a, 5),
        Z(60, 50, 80, Math.pow((a - 50) / 5, 2), 5),
        50 > a
          ? (Z(40, 20, a, 0, 5), Z(60, 20, 100 - a, 0, 5))
          : (Z(40, 20, 100 - a, 0, 5), Z(60, 20, a, 0, 5)),
        X("#ff0000"),
        Y(20, 100 - a, 5),
        Y(80, Math.pow((a - 50) / 5, 2), 5);
  }
  a = d.getContext("2d");
  a.globalCompositeOperation = "copy";
  a.drawImage(S.canvas, 0, 0);
}
function Gf() {
  var a = document.getElementById("hatching").getContext("2d");
  a.strokeStyle = "#fff";
  a.lineWidth = 1;
  for (var c = -400; 400 > c; c += 4)
    a.beginPath(), a.moveTo(c, -c), a.lineTo(c + 400, -c + 400), a.stroke();
}
function Hf() {
  var a = document.getElementById("axies").getContext("2d");
  a.lineWidth = 1;
  a.strokeStyle = "#bba";
  a.fillStyle = "#bba";
  a.font = "normal 14px sans-serif";
  for (var c = 1, d = 0.1; 0.9 > d; d += 0.1)
    a.beginPath(),
      a.moveTo(400 * d, 400),
      a.lineTo(400 * d, 400 - 9 * c),
      a.stroke(),
      a.beginPath(),
      a.moveTo(0, 400 * d),
      a.lineTo(9 * c, 400 * d),
      a.stroke(),
      2 == c &&
        (a.fillText(Math.round(100 * d), 400 * d + 2, 396),
        a.fillText(Math.round(100 - 100 * d), 3, 400 * d - 2)),
      (c = 1 == c ? 2 : 1);
}
function If(a) {
  S.canvas.width = S.canvas.width;
  S.strokeStyle = "#000";
  S.fillStyle = "#000";
  S.globalAlpha = 10 == O ? 1 : 0.9;
  for (var c = !0, d = 0; c && 1e4 > d; d++)
    try {
      c = a.step();
    } catch (e) {
      alert(e), (c = !1);
    }
}
function Jf(a) {
  a.ns ||
    A.Cc() ||
    ((a = Ge()), Zd != a && ((ue = Array(te)), (Zd = a), (Yd = ae()), lf()));
}
function lf(a) {
  if ("Interpreter" in window) {
    "number" == typeof a && (yf = a);
    var c = yf;
    R.beginPath();
    R.rect(0, 0, R.canvas.width, R.canvas.height);
    R.fillStyle = "#ffffff";
    R.fill();
    if ((c = document.getElementById("answer" + c)))
      (R.globalAlpha = 0.2), R.drawImage(c, 0, 0), (R.globalAlpha = 1);
    c = document.getElementById("hatching");
    R.drawImage(c, 0, 0);
    c = Zd;
    try {
      var d = new Interpreter(c, Kf);
    } catch (e) {
      console.error(e);
    }
    d ? If(d) : (S.canvas.width = S.canvas.width);
    R.drawImage(S.canvas, 0, 0);
    R.drawImage(document.getElementById("axies"), 0, 0);
    Lf();
    1 == O && setTimeout(vf, 1e3);
  } else
    setTimeout(function () {
      lf(a);
    }, 250);
}
function Kf(a, c) {
  var d = function (e, f, h) {
    Y(e, f, h);
  };
  a.setProperty(c, "circle", a.createNativeFunction(d));
  d = function (e, f, h, k) {
    Ff(e, f, h, k);
  };
  a.setProperty(c, "rect", a.createNativeFunction(d));
  d = function (e, f, h, k, l) {
    Z(e, f, h, k, l);
  };
  a.setProperty(c, "line", a.createNativeFunction(d));
  d = function (e) {
    X(e);
  };
  a.setProperty(c, "penColour", a.createNativeFunction(d));
  a.setProperty(
    c,
    "time",
    a.createNativeFunction(function () {
      return yf;
    })
  );
}
function Y(a, c, d) {
  a *= 4;
  c = 4 * (100 - c);
  d = Math.max(4 * d, 0);
  S.beginPath();
  S.arc(a, c, d, 0, 2 * Math.PI, !1);
  S.fill();
}
function Ff(a, c, d, e) {
  a *= 4;
  c = 4 * (100 - c);
  d = Math.max(4 * d, 0);
  e = Math.max(4 * e, 0);
  S.beginPath();
  S.rect(a - d / 2, c - e / 2, d, e);
  S.fill();
}
function Z(a, c, d, e, f) {
  a *= 4;
  c = 4 * (100 - c);
  d *= 4;
  e = 4 * (100 - e);
  f *= 4;
  S.beginPath();
  S.moveTo(a, c);
  S.lineTo(d, e);
  S.lineWidth = Math.max(f, 0);
  S.stroke();
}
function X(a) {
  S.strokeStyle = a;
  S.fillStyle = a;
}
function Lf() {
  var a = document.getElementById("answer" + yf);
  if (a) {
    a = a.getContext("2d").getImageData(0, 0, 400, 400);
    for (
      var c = S.getImageData(0, 0, 400, 400),
        d = Math.min(c.data.length, a.data.length),
        e = 0,
        f = 3;
      f < d;
      f += 4
    )
      96 < Math.abs(c.data[f] - a.data[f]) && e++;
    ue[yf] = e;
  }
}
function vf() {
  (1 < O && yf != te) ||
    !se() ||
    xf ||
    ((xf = !0),
    window.localStorage && (window.localStorage[wd + O] = Yd),
    10 > O && (A.Hg.play("win", 0.5), Q.UH()));
}
function Mf() {
  var a = B(A).length,
    c = Ge();
  if (4 > a || -1 == c.indexOf("time()")) alert(P("Movie_submitDisabled"));
  else {
    a = new Interpreter(c, Kf);
    c = yf;
    try {
      (yf = Math.round(te / 2)), If(a);
    } finally {
      yf = c;
    }
    a = document.getElementById("thumbnail");
    c = a.getContext("2d");
    c.globalCompositeOperation = "copy";
    c.drawImage(S.canvas, 0, 0, 200, 200);
    a = a.toDataURL("image/png");
    document.getElementById("galleryThumb").value = a;
    ne();
  }
}
window.addEventListener("load", function () {
  function a() {
    d.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
    d.style.left = c ? "10px" : "420px";
    d.style.width = window.innerWidth - 440 + "px";
  }
  document.body.innerHTML = jf();
  $d();
  var c = od(),
    d = document.getElementById("blockly"),
    e = document.getElementById("visualization");
  window.addEventListener("scroll", function () {
    a(null);
    g.gn(A);
  });
  window.addEventListener("resize", a);
  a(null);
  10 > O &&
    ((g.pc.lq = 3),
    (g.pc.kq = "#ff0000 #ffcc33 #ffff00 #009900 #3333ff #cc33cc #ffffff #999999 #000000".split(
      " "
    )));
  fe({
    rtl: c,
    trashcan: !0,
    zoom: 10 == O ? { controls: !0, wheel: !0 } : null,
  });
  Ne(g.j, "circle,rect,line,penColour,time");
  document.getElementById("submitButton") && xd("submitButton", Mf);
  de();
  R = document.getElementById("display").getContext("2d");
  R.globalCompositeOperation = "source-over";
  S = document.getElementById("scratch").getContext("2d");
  Gf();
  Ef(0);
  setTimeout(function () {
    for (var h = 1; h <= te; h++) Ef(h);
  }, 1);
  Hf();
  Jf();
  D(A, Jf);
  lf();
  var f = document.getElementById("scrubber");
  new kf(f);
  1 == O && (f.style.display = "none");
  A.Hg.load(["movie/win.mp3", "movie/win.ogg"], "win");
  le();
  me();
  xd("helpButton", Cf);
  2 > location.hash.length && !ud(O) && setTimeout(Cf, 1e3);
  e.addEventListener("mouseover", zf);
  e.addEventListener("mouseout", Af);
  e.addEventListener("mousemove", Bf);
});
