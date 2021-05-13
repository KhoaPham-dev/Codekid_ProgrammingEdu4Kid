// Automatically generated file.  Do not edit!

"use strict";
var b,
  g = { lm: {}, Az: 40, Mz: 125, RE: 5, qF: 10, Vd: 28 };
g.yE = g.Vd;
g.DE = 8;
g.eq = 250;
g.zt = 10;
g.wE = 30;
g.$F = 750;
g.NG = 100;
g.SE = !0;
g.DF = 0.45;
g.EF = 0.65;
g.Wd = { width: 96, height: 124, url: "sprites.png" };
g.lb = 1;
g.Sf = 2;
g.gb = 3;
g.Tf = 4;
g.vh = 5;
g.st = -1;
g.rt = 0;
g.yl = 1;
g.iM = 0;
g.jM = 1;
g.gM = 1;
g.hM = 2;
g.Pl = [];
g.Pl[g.lb] = g.Sf;
g.Pl[g.Sf] = g.lb;
g.Pl[g.gb] = g.Tf;
g.Pl[g.Tf] = g.gb;
g.fk = 0;
g.On = 1;
g.Le = 2;
g.Xl = 3;
g.Wy = null;
g.Ht = 1;
g.Xy = 2;
g.tc = "VARIABLE";
g.kH = "VARIABLE_DYNAMIC";
g.Kn = "PROCEDURE";
g.Vz = "RENAME_VARIABLE_ID";
g.Yy = "DELETE_VARIABLE_ID";
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
    ? g.g.vb.Ux(a, c, d)
    : null;
};
g.g.vb.Ux = function (a, c, d) {
  c = (a << 16) | (c << 8) | d;
  return 16 > a
    ? "#" + (16777216 | c).toString(16).substr(1)
    : "#" + c.toString(16);
};
g.g.vb.jC = function (a) {
  a = g.g.vb.parse(a);
  if (!a) return [0, 0, 0];
  a = parseInt(a.substr(1), 16);
  return [a >> 16, (a >> 8) & 255, a & 255];
};
g.g.vb.nC = function (a) {
  var c = g.DF,
    d = 255 * g.EF,
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
  return g.g.vb.Ux(Math.floor(e), Math.floor(f), Math.floor(h));
};
g.g.vb.Pu = function (a, c, d) {
  a = g.g.vb.parse(a);
  if (!a) return null;
  c = g.g.vb.parse(c);
  if (!c) return null;
  a = g.g.vb.jC(a);
  c = g.g.vb.jC(c);
  return g.g.vb.Ux(
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
g.g.aa = function (a, c) {
  this.x = a;
  this.y = c;
};
g.g.aa.wf = function (a, c) {
  return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1;
};
g.g.aa.Dv = function (a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
};
g.g.aa.AJ = function (a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
g.g.aa.oo = function (a, c) {
  return new g.g.aa(a.x - c.x, a.y - c.y);
};
g.g.aa.sum = function (a, c) {
  return new g.g.aa(a.x + c.x, a.y + c.y);
};
g.g.aa.prototype.scale = function (a) {
  this.x *= a;
  this.y *= a;
  return this;
};
g.g.aa.prototype.translate = function (a, c) {
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
g.g.yb.ey = function (a) {
  return a.length
    ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d;
      }).length
    : 0;
};
g.g.yb.LH = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.yb.ey(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return d;
  return c;
};
g.g.yb.MH = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.yb.ey(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return d;
  return c;
};
g.g.yb.bE = function (a, c) {
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) a[d] = g.g.yb.QL(a[d], c);
  return a.join("\n");
};
g.g.yb.QL = function (a, c) {
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
    a = g.g.yb.cE(d, a, c);
    e = g.g.yb.By(d, a, c);
    a = g.g.yb.RL(d, a);
    f++;
  } while (e > h);
  return k;
};
g.g.yb.By = function (a, c, d) {
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
g.g.yb.cE = function (a, c, d) {
  for (var e = g.g.yb.By(a, c, d), f, h = 0; h < c.length - 1; h++)
    if (c[h] != c[h + 1]) {
      var k = [].concat(c);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var l = g.g.yb.By(a, k, d);
      l > e && ((e = l), (f = k));
    }
  return f ? g.g.yb.cE(a, f, d) : c;
};
g.g.yb.RL = function (a, c) {
  for (var d = [], e = 0; e < a.length; e++)
    d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
  return d.join("");
};
g.g.ue = function (a, c) {
  this.width = a;
  this.height = c;
};
g.g.ue.wf = function (a, c) {
  return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1;
};
g.g.style = {};
g.g.style.Xh = function (a) {
  if ("none" != g.g.style.YB(a, "display")) return g.g.style.WB(a);
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
  return new g.g.ue(h, a);
};
g.g.style.WB = function (a) {
  return new g.g.ue(a.offsetWidth, a.offsetHeight);
};
g.g.style.YB = function (a, c) {
  return (
    g.g.style.getComputedStyle(a, c) ||
    g.g.style.EI(a, c) ||
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
g.g.style.EI = function (a, c) {
  return a.currentStyle ? a.currentStyle[c] : null;
};
g.g.style.yk = function (a) {
  var c = new g.g.aa(0, 0);
  a = a.getBoundingClientRect();
  var d = document.documentElement;
  d = new g.g.aa(
    window.pageXOffset || d.scrollLeft,
    window.pageYOffset || d.scrollTop
  );
  c.x = a.left + d.x;
  c.y = a.top + d.y;
  return c;
};
g.g.style.TI = function () {
  var a = document.body,
    c = document.documentElement;
  return new g.g.aa(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop);
};
g.g.style.PO = function (a, c) {
  a.style.display = c ? "" : "none";
};
g.g.style.DO = function (a) {
  return "rtl" == g.g.style.YB(a, "direction");
};
g.g.style.BI = function (a) {
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
g.g.style.fL = function (a, c) {
  a = g.g.style.GI(a, c);
  c.scrollLeft = a.x;
  c.scrollTop = a.y;
};
g.g.style.GI = function (a, c) {
  var d = g.g.style.yk(a),
    e = g.g.style.yk(c),
    f = g.g.style.BI(c),
    h = d.x - e.x - f.left;
  d = d.y - e.y - f.top;
  a = g.g.style.WB(a);
  e = c.clientHeight - a.height;
  f = c.scrollLeft;
  var k = c.scrollTop;
  f += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
  k += Math.min(d, Math.max(d - e, 0));
  return new g.g.aa(f, k);
};
g.g.userAgent = {};
(function (a) {
  function c(e) {
    return -1 != d.indexOf(e.toUpperCase());
  }
  g.g.userAgent.raw = a;
  var d = g.g.userAgent.raw.toUpperCase();
  g.g.userAgent.gf = c("Trident") || c("MSIE");
  g.g.userAgent.Qj = c("Edge");
  g.g.userAgent.OF = c("JavaFX");
  g.g.userAgent.$L = (c("Chrome") || c("CriOS")) && !g.g.userAgent.Qj;
  g.g.userAgent.sA = c("WebKit") && !g.g.userAgent.Qj;
  g.g.userAgent.kz =
    c("Gecko") && !g.g.userAgent.sA && !g.g.userAgent.gf && !g.g.userAgent.Qj;
  g.g.userAgent.pn = c("Android");
  g.g.userAgent.Il = c("iPad");
  g.g.userAgent.wz = c("iPod");
  g.g.userAgent.vz = c("iPhone") && !g.g.userAgent.Il && !g.g.userAgent.wz;
  g.g.userAgent.cG = c("Macintosh");
  g.g.userAgent.VG =
    g.g.userAgent.Il || (g.g.userAgent.pn && !c("Mobile")) || c("Silk");
  g.g.userAgent.lG =
    !g.g.userAgent.VG &&
    (g.g.userAgent.wz || g.g.userAgent.vz || g.g.userAgent.pn || c("IEMobile"));
})((g.g.global.navigator && g.g.global.navigator.userAgent) || "");
g.g.SJ = function (a) {
  a.preventDefault();
  a.stopPropagation();
};
g.g.fs = function (a) {
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
    (a.target.dataset && "true" == a.target.dataset.FO)
  );
};
g.g.xf = function (a) {
  var c = new g.g.aa(0, 0),
    d = a.getAttribute("x");
  d && (c.x = parseInt(d, 10));
  if ((d = a.getAttribute("y"))) c.y = parseInt(d, 10);
  if ((d = (d = a.getAttribute("transform")) && d.match(g.g.xf.mH)))
    (c.x += Number(d[1])), d[3] && (c.y += Number(d[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    (a = a.match(g.g.xf.nH)) &&
    ((c.x += Number(a[1])), a[3] && (c.y += Number(a[3])));
  return c;
};
g.g.Eo = function (a) {
  for (var c = 0, d = 0; a; ) {
    var e = g.g.xf(a);
    c += e.x;
    d += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new g.g.aa(c, d);
};
g.g.xf.mH = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
g.g.xf.nH = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
g.g.Lk = function (a) {
  return a.ctrlKey && g.g.userAgent.cG ? !0 : 2 == a.button;
};
g.g.$o = function (a, c, d) {
  var e = c.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  d || (d = c.getScreenCTM().inverse());
  return e.matrixTransform(d);
};
g.g.VB = function (a) {
  switch (a.deltaMode) {
    default:
      return { x: a.deltaX, y: a.deltaY };
    case 1:
      return { x: a.deltaX * g.Az, y: a.deltaY * g.Az };
    case 2:
      return { x: a.deltaX * g.Mz, y: a.deltaY * g.Mz };
  }
};
g.g.zL = function (a) {
  return g.g.ty(a, !0);
};
g.g.Mc = function (a) {
  if ("string" != typeof a) return a;
  a = g.g.ty(a, !1);
  return a.length ? String(a[0]) : "";
};
g.g.QA = function (a) {
  for (var c = g.h, d = a.match(/%{BKY_[A-Z]\w*}/gi), e = 0; e < d.length; e++)
    void 0 == c[d[e].toUpperCase().slice(6, -1)] &&
      console.warn("No message string for " + d[e] + " in " + a);
};
g.g.ty = function (a, c) {
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
                      ? Array.prototype.push.apply(d, g.g.ty(f, c))
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
g.g.Vh = function () {
  for (var a = g.g.Vh.DD.length, c = [], d = 0; 20 > d; d++)
    c[d] = g.g.Vh.DD.charAt(Math.random() * a);
  return c.join("");
};
g.g.Vh.DD =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.Gk = function () {
  if (void 0 !== g.g.Gk.Yu) return g.g.Gk.Yu;
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
  g.g.Gk.Yu = "none" !== c;
  return g.g.Gk.Yu;
};
g.g.xD = function (a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" == document.readyState) a();
  else
    var c = setInterval(function () {
      "complete" == document.readyState && (clearInterval(c), a());
    }, 10);
};
g.g.SI = function () {
  var a = g.g.style.TI();
  return new g.g.Rect(
    a.y,
    document.documentElement.clientHeight + a.y,
    a.x,
    document.documentElement.clientWidth + a.x
  );
};
g.g.Un = function (a, c) {
  c = a.indexOf(c);
  if (-1 == c) return !1;
  a.splice(c, 1);
  return !0;
};
g.g.KI = function () {
  var a = document.documentElement,
    c = window;
  return g.g.userAgent.gf && c.pageYOffset != a.scrollTop
    ? new g.g.aa(a.scrollLeft, a.scrollTop)
    : new g.g.aa(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop);
};
g.g.Yv = function (a, c) {
  var d = Object.create(null),
    e = p(a, !0);
  c && (a = q(a)) && ((a = e.indexOf(a)), e.splice(a, e.length - a));
  for (a = 0; (c = e[a]); a++) d[c.type] ? d[c.type]++ : (d[c.type] = 1);
  return d;
};
g.g.eL = function (a, c) {
  var d = c.x;
  c = c.y;
  var e = aa(a).getBoundingClientRect();
  d = new g.g.aa(d - e.left, c - e.top);
  c = g.g.Eo(a.Hb);
  return g.g.aa.oo(d, c).scale(1 / a.scale);
};
g.g.Ls = function (a) {
  var c = "string" == typeof a ? g.g.Mc(a) : a,
    d = Number(c);
  if (!isNaN(d) && 0 <= d && 360 >= d) return { fJ: d, Io: g.g.vb.nC(d) };
  if ((d = g.g.vb.parse(c))) return { fJ: null, Io: d };
  d = 'Invalid colour: "' + c + '"';
  a != c && (d += ' (from "' + a + '")');
  throw Error(d);
};
g.Touch = {};
g.Touch.gA =
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
g.Touch.Mp = null;
g.Touch.zg = {};
g.g.global.PointerEvent
  ? (g.Touch.zg = {
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
  : g.Touch.gA &&
    (g.Touch.zg = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"],
    });
g.ls = 0;
g.yJ = function (a, c) {
  g.oj();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (g.ls = setTimeout(function () {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      c && ba(c, a);
    }, g.$F));
};
g.oj = function () {
  g.ls && (clearTimeout(g.ls), (g.ls = 0));
};
g.Touch.jk = function () {
  g.Touch.Mp = null;
};
g.Touch.iy = function (a) {
  return !g.Touch.qJ(a) || g.Touch.IH(a);
};
g.Touch.Ur = function (a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 !== a.changedTouches[0].identifier &&
      null !== a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
g.Touch.IH = function (a) {
  var c = g.Touch.Ur(a);
  return void 0 !== g.Touch.Mp && null !== g.Touch.Mp
    ? g.Touch.Mp == c
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((g.Touch.Mp = c), !0)
    : !1;
};
g.Touch.hL = function (a) {
  if (g.g.yb.startsWith(a.type, "touch")) {
    var c = a.changedTouches[0];
    a.clientX = c.clientX;
    a.clientY = c.clientY;
  }
};
g.Touch.qJ = function (a) {
  return (
    g.g.yb.startsWith(a.type, "touch") ||
    g.g.yb.startsWith(a.type, "mouse") ||
    g.g.yb.startsWith(a.type, "pointer")
  );
};
g.Touch.js = function (a) {
  return (
    g.g.yb.startsWith(a.type, "touch") || g.g.yb.startsWith(a.type, "pointer")
  );
};
g.Touch.pL = function (a) {
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
  this.vL = a;
};
g.g.F.prototype.toString = function () {
  return this.vL;
};
g.g.F.tt = new g.g.F("animate");
g.g.F.Ct = new g.g.F("circle");
g.g.F.rn = new g.g.F("clipPath");
g.g.F.Vy = new g.g.F("defs");
g.g.F.Lt = new g.g.F("feComposite");
g.g.F.bF = new g.g.F("feComponentTransfer");
g.g.F.cF = new g.g.F("feFlood");
g.g.F.dF = new g.g.F("feFuncA");
g.g.F.eF = new g.g.F("feGaussianBlur");
g.g.F.fF = new g.g.F("fePointLight");
g.g.F.gF = new g.g.F("feSpecularLighting");
g.g.F.fz = new g.g.F("filter");
g.g.F.rF = new g.g.F("foreignObject");
g.g.F.rc = new g.g.F("g");
g.g.F.Ei = new g.g.F("image");
g.g.F.yn = new g.g.F("line");
g.g.F.se = new g.g.F("path");
g.g.F.Nz = new g.g.F("pattern");
g.g.F.AG = new g.g.F("polygon");
g.g.F.Gc = new g.g.F("rect");
g.g.F.dk = new g.g.F("svg");
g.g.F.Qq = new g.g.F("text");
g.g.F.iA = new g.g.F("tspan");
g.g.o = {};
g.g.o.Nq = "http://www.w3.org/2000/svg";
g.g.o.Gl = "http://www.w3.org/1999/xhtml";
g.g.o.nf = "http://www.w3.org/1999/xlink";
g.g.o.Ji = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  COMMENT_NODE: 8,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
};
g.g.o.Zf = null;
g.g.o.Vu = 0;
g.g.o.jr = null;
g.g.o.M = function (a, c, d) {
  a = document.createElementNS(g.g.o.Nq, String(a));
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
g.g.o.tD = function (a, c) {
  c = c.split(" ");
  for (var d = 0; d < c.length; d++) g.g.o.ic(a, c[d]);
};
g.g.o.ic = function (a, c) {
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
g.g.o.mw = function (a, c) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ");
};
g.g.o.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
g.g.o.Fk = function (a, c) {
  var d = c.nextSibling;
  c = c.parentNode;
  if (!c) throw Error("Reference node has no parent.");
  d ? c.insertBefore(a, d) : c.appendChild(a);
};
g.g.o.containsNode = function (a, c) {
  return !!(
    a.compareDocumentPosition(c) & g.g.o.Ji.DOCUMENT_POSITION_CONTAINED_BY
  );
};
g.g.o.wp = function (a, c) {
  a.style.transform = c;
  a.style["-webkit-transform"] = c;
};
g.g.o.Dp = function () {
  g.g.o.Vu++;
  g.g.o.Zf || (g.g.o.Zf = {});
};
g.g.o.Ep = function () {
  g.g.o.Vu--;
  g.g.o.Vu || (g.g.o.Zf = null);
};
g.g.o.OI = function (a) {
  var c = a.textContent + "\n" + a.className.baseVal,
    d;
  if (g.g.o.Zf && (d = g.g.o.Zf[c])) return d;
  try {
    d =
      g.g.userAgent.gf || g.g.userAgent.Qj
        ? a.getBBox().width
        : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  g.g.o.Zf && (g.g.o.Zf[c] = d);
  return d;
};
g.g.o.cw = function (a, c, d, e) {
  return g.g.o.OB(a, c + "pt", d, e);
};
g.g.o.OB = function (a, c, d, e) {
  var f = a.textContent;
  a = f + "\n" + a.className.baseVal;
  var h;
  if (g.g.o.Zf && (h = g.g.o.Zf[a])) return h;
  g.g.o.jr ||
    ((h = document.createElement("canvas")),
    (h.className = "blocklyComputeCanvas"),
    document.body.appendChild(h),
    (g.g.o.jr = h.getContext("2d")));
  g.g.o.jr.font = d + " " + c + " " + e;
  h = g.g.o.jr.measureText(f).width;
  g.g.o.Zf && (g.g.o.Zf[a] = h);
  return h;
};
g.g.o.JC = function (a, c, d, e) {
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
      (d.qf = a.offsetTop - f.offsetTop),
      (c.style.alignItems = "flex-end"),
      (d.height = a.offsetTop - f.offsetTop);
  } finally {
    document.body.removeChild(c);
  }
  return d;
};
g.g.WM = function () {};
g.Mn = function (a) {
  this.s = a;
  this.zf = new g.Wa(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.Lf = new g.Wa(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.ho = g.g.o.M(
    g.g.F.Gc,
    { height: g.Wa.Wc, width: g.Wa.Wc, class: "blocklyScrollbarBackground" },
    null
  );
  g.g.o.Fk(this.ho, a.mg);
  this.hc = null;
};
g.Mn.prototype.J = function () {
  g.g.o.removeNode(this.ho);
  this.hc = this.s = this.ho = null;
  this.zf.J();
  this.zf = null;
  this.Lf.J();
  this.Lf = null;
};
g.Mn.prototype.resize = function () {
  var a = this.s.ed();
  if (a) {
    var c = !1,
      d = !1;
    this.hc &&
    this.hc.Qb == a.Qb &&
    this.hc.Vb == a.Vb &&
    this.hc.bd == a.bd &&
    this.hc.Sc == a.Sc
      ? ((this.hc &&
          this.hc.tf == a.tf &&
          this.hc.ac == a.ac &&
          this.hc.pd == a.pd) ||
          (c = !0),
        (this.hc &&
          this.hc.$d == a.$d &&
          this.hc.jc == a.jc &&
          this.hc.cd == a.cd) ||
          (d = !0))
      : (d = c = !0);
    if (c || d) {
      try {
        g.i.disable(), c && this.zf.resize(a), d && this.Lf.resize(a);
      } finally {
        g.i.enable();
      }
      ca(this.s);
    }
    (this.hc && this.hc.Qb == a.Qb && this.hc.Sc == a.Sc) ||
      this.ho.setAttribute("x", this.Lf.position.x);
    (this.hc && this.hc.Vb == a.Vb && this.hc.bd == a.bd) ||
      this.ho.setAttribute("y", this.zf.position.y);
    this.hc = a;
  }
};
g.Mn.prototype.set = function (a, c) {
  var d = {};
  a *= this.zf.ratio;
  c *= this.Lf.ratio;
  var e = this.Lf.If,
    f = a / this.zf.If;
  d.x = isNaN(f) ? 0 : f;
  e = c / e;
  d.y = isNaN(e) ? 0 : e;
  this.s.yp(d);
  da(this.zf, a);
  da(this.Lf, c);
};
g.Wa = function (a, c, d, e) {
  this.s = a;
  this.Qm = d || !1;
  this.Ck = c;
  this.ratio = this.hc = null;
  this.Se(e);
  this.position = new g.g.aa(0, 0);
  a = g.Wa.Wc;
  c
    ? (this.wd.setAttribute("height", a),
      this.eh.setAttribute("height", a),
      this.De.setAttribute("height", a - 5),
      this.De.setAttribute("y", 2.5),
      (this.So = "width"),
      (this.iD = "x"))
    : (this.wd.setAttribute("width", a),
      this.eh.setAttribute("width", a),
      this.De.setAttribute("width", a - 5),
      this.De.setAttribute("x", 2.5),
      (this.So = "height"),
      (this.iD = "y"));
  this.dD = g.ta(this.wd, "mousedown", this, this.ZJ);
  this.eD = g.ta(this.De, "mousedown", this, this.$J);
};
b = g.Wa.prototype;
b.xx = new g.g.aa(0, 0);
b.FD = 0;
b.If = 0;
b.Yi = 0;
b.Go = 0;
b.di = !0;
b.lk = !0;
g.Wa.Wc = 15;
g.Touch.gA && (g.Wa.Wc = 25);
g.Wa.BJ = function (a, c) {
  return a &&
    c &&
    a.Qb == c.Qb &&
    a.Vb == c.Vb &&
    a.ac == c.ac &&
    a.jc == c.jc &&
    a.bd == c.bd &&
    a.Sc == c.Sc &&
    a.tf == c.tf &&
    a.$d == c.$d &&
    a.pd == c.pd &&
    a.cd == c.cd
    ? !0
    : !1;
};
g.Wa.prototype.J = function () {
  ea();
  g.Na(this.dD);
  this.dD = null;
  g.Na(this.eD);
  this.eD = null;
  g.g.o.removeNode(this.eh);
  this.wd = this.N = this.eh = null;
  this.De && (this.s.Cc.unsubscribe(this.De), (this.De = null));
  this.s = null;
};
function da(a, c) {
  a.Go = c;
  a.De.setAttribute(a.iD, a.Go);
}
function fa(a, c) {
  a.If = c;
  a.eh.setAttribute(a.So, a.If);
  a.wd.setAttribute(a.So, a.If);
}
g.Mn.prototype.hl = function (a) {
  this.zf.hl(a);
  this.Lf.hl(a);
};
b = g.Wa.prototype;
b.setPosition = function (a, c) {
  this.position.x = a;
  this.position.y = c;
  g.g.o.wp(
    this.eh,
    "translate(" +
      (this.position.x + this.xx.x) +
      "px," +
      (this.position.y + this.xx.y) +
      "px)"
  );
};
b.resize = function (a) {
  if (!a && ((a = this.s.ed()), !a)) return;
  g.Wa.BJ(a, this.hc) ||
    ((this.hc = a), this.Ck ? ha(this, a) : ia(this, a), ja(this));
};
function ha(a, c) {
  var d = c.Qb - 1;
  a.Qm && (d -= g.Wa.Wc);
  fa(a, Math.max(0, d));
  d = c.Sc + 0.5;
  a.Qm && a.s.L && (d += g.Wa.Wc);
  a.setPosition(d, c.bd + c.Vb - g.Wa.Wc - 0.5);
  ka(a, c);
}
function ka(a, c) {
  a.Qm || a.Ob(a.If < c.tf);
  a.ratio = a.If / c.tf;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Yi = Math.max(0, c.Qb * a.ratio);
  a.De.setAttribute(a.So, a.Yi);
  da(a, la(a, (c.ac - c.pd) * a.ratio));
}
function ia(a, c) {
  var d = c.Vb - 1;
  a.Qm && (d -= g.Wa.Wc);
  fa(a, Math.max(0, d));
  d = c.Sc + 0.5;
  a.s.L || (d += c.Qb - g.Wa.Wc - 1);
  a.setPosition(d, c.bd + 0.5);
  ma(a, c);
}
function ma(a, c) {
  a.Qm || a.Ob(a.If < c.$d);
  a.ratio = a.If / c.$d;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Yi = Math.max(0, c.Vb * a.ratio);
  a.De.setAttribute(a.So, a.Yi);
  da(a, la(a, (c.jc - c.cd) * a.ratio));
}
b.Se = function (a) {
  var c = "blocklyScrollbar" + (this.Ck ? "Horizontal" : "Vertical");
  a && (c += " " + a);
  this.eh = g.g.o.M(g.g.F.dk, { class: c }, null);
  this.N = g.g.o.M(g.g.F.rc, {}, this.eh);
  this.wd = g.g.o.M(g.g.F.Gc, { class: "blocklyScrollbarBackground" }, this.N);
  a = Math.floor((g.Wa.Wc - 5) / 2);
  this.De = g.g.o.M(
    g.g.F.Gc,
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.N
  );
  this.s.Cc.subscribe(this.De, "scrollbarColour", "fill");
  this.s.Cc.subscribe(this.De, "scrollbarOpacity", "fill-opacity");
  g.g.o.Fk(this.eh, r(this.s));
};
b.isVisible = function () {
  return this.di;
};
b.hl = function (a) {
  var c = a != this.lk;
  this.lk = a;
  c && this.Pp();
};
b.Ob = function (a) {
  var c = a != this.isVisible();
  if (this.Qm) throw Error("Unable to toggle visibility of paired scrollbars.");
  this.di = a;
  c && this.Pp();
};
b.Pp = function () {
  this.lk && this.isVisible()
    ? this.eh.setAttribute("display", "block")
    : this.eh.setAttribute("display", "none");
};
b.ZJ = function (a) {
  na(this.s);
  g.Touch.jk();
  ea();
  if (g.g.Lk(a)) a.stopPropagation();
  else {
    var c = g.g.$o(a, r(this.s), oa(this.s));
    c = this.Ck ? c.x : c.y;
    var d = g.g.Eo(this.De);
    d = this.Ck ? d.x : d.y;
    var e = this.Go,
      f = 0.95 * this.Yi;
    c <= d ? (e -= f) : c >= d + this.Yi && (e += f);
    da(this, la(this, e));
    ja(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
b.$J = function (a) {
  na(this.s);
  ea();
  g.g.Lk(a)
    ? a.stopPropagation()
    : ((this.qL = this.Go),
      pa(this.s),
      (this.FD = this.Ck ? a.clientX : a.clientY),
      (g.Wa.ud = g.ta(document, "mouseup", this, this.fK)),
      (g.Wa.$e = g.ta(document, "mousemove", this, this.cK)),
      a.stopPropagation(),
      a.preventDefault());
};
b.cK = function (a) {
  da(this, la(this, this.qL + ((this.Ck ? a.clientX : a.clientY) - this.FD)));
  ja(this);
};
b.fK = function () {
  qa(this.s);
  g.Touch.jk();
  ea();
};
function ea() {
  g.Jc(!0);
  g.Wa.ud && (g.Na(g.Wa.ud), (g.Wa.ud = null));
  g.Wa.$e && (g.Na(g.Wa.$e), (g.Wa.$e = null));
}
function la(a, c) {
  return (c = 0 >= c || isNaN(c) || a.If < a.Yi ? 0 : Math.min(c, a.If - a.Yi));
}
function ja(a) {
  var c = a.Go / a.If;
  isNaN(c) && (c = 0);
  var d = {};
  a.Ck ? (d.x = c) : (d.y = c);
  a.s.yp(d);
}
b.set = function (a) {
  da(this, la(this, a * this.ratio));
  ja(this);
};
g.g.rd = {};
g.g.rd.gn = function (a) {
  return (a * Math.PI) / 180;
};
g.g.rd.VO = function (a) {
  return (180 * a) / Math.PI;
};
g.g.rd.hm = function (a, c, d) {
  if (d < a) {
    var e = d;
    d = a;
    a = e;
  }
  return Math.max(a, Math.min(c, d));
};
g.C = {};
g.C.jn = {};
g.C.uq = "default";
g.C.ea = function (a) {
  this.qj = a;
};
g.C.ea.prototype.toString = function () {
  return this.qj;
};
g.C.ea.Qy = new g.C.ea("connectionChecker");
g.C.ea.kc = new g.C.ea("event");
g.C.ea.Ec = new g.C.ea("field");
g.C.ea.RENDERER = new g.C.ea("renderer");
g.C.ea.Rq = new g.C.ea("toolbox");
g.C.ea.wu = new g.C.ea("theme");
g.C.ea.Yl = new g.C.ea("toolboxItem");
g.C.ea.hz = new g.C.ea("flyoutsVerticalToolbox");
g.C.ea.pF = new g.C.ea("flyoutsHorizontalToolbox");
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
  var f = g.C.jn[a];
  f || (f = g.C.jn[a] = {});
  g.C.IL(a, d);
  if (!e && f[c])
    throw Error('Name "' + c + '" with type "' + a + '" already registered.');
  f[c] = d;
};
g.C.IL = function (a, c) {
  switch (a) {
    case String(g.C.ea.Ec):
      if ("function" != typeof c.ma)
        throw Error('Type "' + a + '" must have a fromJson function');
  }
};
g.C.unregister = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.jn[a];
  d
    ? d[c]
      ? delete g.C.jn[a][c]
      : console.warn('No name "' + c + '" with type "' + a + '" found')
    : console.warn('No type "' + a + '" found');
};
g.C.QB = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.C.jn[a];
  return d
    ? d[c]
      ? d[c]
      : (console.warn('No name "' + c + '" with type "' + a + '" found'), null)
    : (console.warn('No type "' + a + '" found'), null);
};
g.C.cJ = function (a) {
  var c = g.C.ea.Yl;
  c = String(c).toLowerCase();
  a = a.toLowerCase();
  return (c = g.C.jn[c]) ? !!c[a] : !1;
};
g.C.Ao = function (a, c) {
  return g.C.QB(a, c);
};
g.C.gw = function (a, c) {
  return g.C.QB(a, c);
};
g.C.Or = function (a, c) {
  c = c.plugins[a.toString()] || g.C.uq;
  return "function" == typeof c ? c : g.C.Ao(a, c);
};
g.Sy = function () {};
function ra(a, c, d, e, f) {
  return a.ir(c, d, e, f) == g.Ba.iq;
}
g.Sy.prototype.ir = function (a, c, d, e) {
  if (a && c) {
    if (t(a)) {
      var f = a.Z();
      var h = c.Z();
    } else (h = a.Z()), (f = c.Z());
    f =
      f == h
        ? g.Ba.Rz
        : c.type != g.Pl[a.type]
        ? g.Ba.Uz
        : f.u !== h.u
        ? g.Ba.Pz
        : f.Ra && !h.Ra
        ? g.Ba.Sz
        : g.Ba.iq;
  } else f = g.Ba.Tz;
  return f != g.Ba.iq
    ? f
    : sa(a, c)
    ? d && !ta(a, c, e || 0)
      ? g.Ba.Qz
      : g.Ba.iq
    : g.Ba.Oz;
};
function va(a, c, d) {
  switch (a) {
    case g.Ba.Rz:
      return "Attempted to connect a block to itself.";
    case g.Ba.Pz:
      return "Blocks not on same workspace.";
    case g.Ba.Uz:
      return "Attempt to connect incompatible types.";
    case g.Ba.Tz:
      return "Target connection is null.";
    case g.Ba.Oz:
      return (
        "Connection checks failed. " +
        (c + " expected " + c.Pi + ", found " + d.Pi)
      );
    case g.Ba.Sz:
      return "Connecting non-shadow to shadow block.";
    case g.Ba.Qz:
      return "Drag checks failed.";
    default:
      return "Unknown connection failure: this should never happen!";
  }
}
function sa(a, c) {
  a = a.Pi;
  c = c.Pi;
  if (!a || !c) return !0;
  for (var d = 0; d < a.length; d++) if (-1 != c.indexOf(a[d])) return !0;
  return !1;
}
function ta(a, c, d) {
  if (wa(a, c) > d || c.Z().me()) return !1;
  switch (c.type) {
    case g.Tf:
      return (
        a.oa || -1 != g.rm.indexOf(c)
          ? (a = !1)
          : c.oa
          ? ((a = c.sa()), (a = a.me() ? !(a.ka && a.ka.sa()) : !1))
          : (a = !0),
        a
      );
    case g.Sf:
      if ((c.isConnected() && !c.sa().me()) || a.isConnected()) return !1;
      break;
    case g.lb:
      if (c.isConnected() && !c.sa().Lc() && !c.sa().Ra) return !1;
      break;
    case g.gb:
      if (c.isConnected() && !a.Z().Y && !c.sa().Ra && c.sa().Y) return !1;
      break;
    default:
      return !1;
  }
  return -1 != g.rm.indexOf(c) ? !1 : !0;
}
g.C.register(g.C.ea.Qy, g.C.uq, g.Sy);
g.i = {};
g.i.eC = "";
g.i.eb = !0;
g.i.zv = 0;
g.i.oq = "create";
g.i.aq = g.i.oq;
g.i.Pj = "delete";
g.i.vt = g.i.Pj;
g.i.Mj = "change";
g.i.nE = g.i.Mj;
g.i.Cn = "move";
g.i.wt = g.i.Cn;
g.i.lA = "var_create";
g.i.mA = "var_delete";
g.i.oA = "var_rename";
g.i.Cu = "ui";
g.i.Ky = "drag";
g.i.bk = "selected";
g.i.Dt = "click";
g.i.Bz = "marker_move";
g.i.cq = "bubble_open";
g.i.hA = "trashcan_open";
g.i.xu = "toolbox_item_select";
g.i.fA = "theme_change";
g.i.pA = "viewport_change";
g.i.lq = "comment_create";
g.i.Py = "comment_delete";
g.i.Oy = "comment_change";
g.i.mq = "comment_move";
g.i.gz = "finished_loading";
g.i.rE = [g.i.aq, g.i.wt, g.i.lq, g.i.mq];
g.i.vn = [];
g.i.Ia = function (a) {
  g.i.isEnabled() && (g.i.vn.length || setTimeout(g.i.vI, 0), g.i.vn.push(a));
};
g.i.vI = function () {
  for (
    var a = g.i.filter(g.i.vn, !0), c = (g.i.vn.length = 0), d;
    (d = a[c]);
    c++
  )
    if (d.Zc) {
      var e = g.Wb.zo(d.Zc);
      if (e) {
        var f = d;
        if (f.eb)
          for (e.ql.push(f), e.lp.length = 0; e.ql.length > e.Dz && 0 <= e.Dz; )
            e.ql.shift();
        for (var h = 0; (d = e.ne[h]); h++) d(f);
      }
    }
};
g.i.filter = function (a, c) {
  a = a.slice();
  c || a.reverse();
  for (var d = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.Jm()) {
      var k = [h.Aw ? g.i.Cu : h.type, h.ub, h.Zc].join(" "),
        l = e[k],
        m = l ? l.event : null;
      if (!l) (e[k] = { event: h, index: f }), d.push(h);
      else if (h.type == g.i.Cn && l.index == f - 1)
        (m.Uk = h.Uk), (m.Tk = h.Tk), (m.rj = h.rj), (l.index = f);
      else if (h.type == g.i.Mj && h.element == m.element && h.name == m.name)
        m.newValue = h.newValue;
      else if (h.type != g.i.Dt || m.type != g.i.cq)
        (e[k] = { event: h, index: f }), d.push(h);
    }
  a = d.filter(function (n) {
    return !n.Jm();
  });
  c || a.reverse();
  for (f = 1; (h = a[f]); f++)
    h.type == g.i.Mj && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
g.i.KH = function () {
  for (var a = 0, c; (c = g.i.vn[a]); a++) c.eb = !1;
};
g.i.disable = function () {
  g.i.zv++;
};
g.i.enable = function () {
  g.i.zv--;
};
g.i.isEnabled = function () {
  return 0 == g.i.zv;
};
g.i.xc = function () {
  return g.i.eC;
};
g.i.na = function (a) {
  g.i.eC = "boolean" == typeof a ? (a ? g.g.Vh() : "") : a;
};
g.i.LB = function (a) {
  var c = [];
  a = p(a, !1);
  for (var d = 0, e; (e = a[d]); d++) c[d] = e.id;
  return c;
};
g.i.ma = function (a) {
  var c = g.C.Ao(g.C.ea.kc, a.type);
  if (!c) throw Error("Unknown event type.");
  c = new c();
  c.ma(a);
  c.Zc = (void 0).id;
  return c;
};
g.i.fI = function (a) {
  if ((a.type == g.i.Cn || a.type == g.i.oq) && a.Zc) {
    var c = g.Wb.zo(a.Zc),
      d = c.Fd(a.ub);
    if (d) {
      a = g.i.eb;
      try {
        g.i.eb = !1;
        var e = d.getParent();
        if (e && e.isEnabled()) {
          var f = p(d, !1);
          c = 0;
          for (var h; (h = f[c]); c++) h.oe(!0);
        } else if ((d.O || d.ka) && !c.Kc()) {
          do d.oe(!1), (d = q(d));
          while (d);
        }
      } finally {
        g.i.eb = a;
      }
    }
  }
};
g.g.object = {};
g.g.object.X = function (a, c) {
  a.v = c.prototype;
  a.prototype = Object.create(c.prototype);
  a.prototype.constructor = a;
};
g.g.object.Ld = function (a, c) {
  for (var d in c) a[d] = c[d];
};
g.g.object.pm = function (a, c) {
  for (var d in c)
    a[d] =
      null != c[d] && "object" === typeof c[d]
        ? g.g.object.pm(a[d] || Object.create(null), c[d])
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
g.gk = function (a, c, d, e) {
  this.name = a;
  this.Ni = c || Object.create(null);
  this.kr = d || Object.create(null);
  this.VA = e || Object.create(null);
  this.fontStyle = Object.create(null);
  this.ny = null;
  g.C.register(g.C.ea.wu, a, this);
};
g.gk.prototype.eg = function () {
  return this.name + "-theme";
};
function xa(a, c) {
  return (c = a.VA[c]) && "string" == typeof c && xa(a, c)
    ? xa(a, c)
    : c
    ? String(c)
    : null;
}
g.gk.$H = function (a, c) {
  var d = new g.gk(a),
    e = c.base;
  e &&
    ("string" == typeof e && (e = g.C.gw(g.C.ea.wu, e)),
    e instanceof g.gk && (g.g.object.pm(d, e), (d.name = a)));
  g.g.object.pm(d.Ni, c.blockStyles);
  g.g.object.pm(d.kr, c.categoryStyles);
  g.g.object.pm(d.VA, c.componentStyles);
  g.g.object.pm(d.fontStyle, c.fontStyle);
  null != c.startHats && (d.ny = c.startHats);
  return d;
};
g.Fh = {};
g.Fh.Bi = {};
g.Fh.Bi.XH = {
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
g.Fh.Bi.kr = {
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
g.Fh.Bi = new g.gk("classic", g.Fh.Bi.XH, g.Fh.Bi.kr);
g.g.Vj = {};
g.g.Vj.RJ = 0;
g.g.Vj.Rr = function () {
  return "blockly-" + (g.g.Vj.RJ++).toString(36);
};
g.g.za = {};
g.g.za.Bt = "categoryToolbox";
g.g.za.iz = "flyoutToolbox";
g.g.za.Ud = { Sq: g.fk, xt: g.On, Wj: g.Le, $j: g.Xl };
g.g.za.fv = function (a) {
  if (!a) return null;
  if (a instanceof Element || "string" == typeof a)
    (a = g.g.za.Cx(a)), (a = g.g.za.SH(a));
  g.g.za.HL(a);
  return a;
};
g.g.za.HL = function (a) {
  var c = a.kind;
  a = a.contents;
  if (c && c != g.g.za.iz && c != g.g.za.Bt)
    throw Error(
      "Invalid toolbox kind " +
        c +
        ". Please supply either " +
        g.g.za.iz +
        " or " +
        g.g.za.Bt
    );
  if (!a) throw Error("Toolbox must have a contents attribute.");
};
g.g.za.dB = function (a) {
  return a
    ? a.contents
      ? a.contents
      : Array.isArray(a) && 0 < a.length && !a[0].nodeType
      ? a
      : g.g.za.Cy(a)
    : [];
};
g.g.za.Ho = function (a) {
  if (!a) return !1;
  var c = a.kind;
  return c
    ? c == g.g.za.Bt
    : !!a.contents.filter(function (d) {
        return "CATEGORY" == d.kind.toUpperCase();
      }).length;
};
g.g.za.tC = function (a) {
  return a && a.contents
    ? !!a.contents.filter(function (c) {
        return "CATEGORY" == c.kind.toUpperCase();
      }).length
    : !1;
};
g.g.za.SH = function (a) {
  var c = { contents: g.g.za.Cy(a) };
  a instanceof Node && g.g.za.BA(a, c);
  return c;
};
g.g.za.Cy = function (a) {
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
          (f.contents = g.g.za.Cy(e));
      g.g.za.BA(e, f);
      c.push(f);
    }
  return c;
};
g.g.za.BA = function (a, c) {
  for (var d = 0; d < a.attributes.length; d++) {
    var e = a.attributes[d];
    -1 < e.nodeName.indexOf("css-")
      ? ((c.cssconfig = c.cssconfig || {}),
        (c.cssconfig[e.nodeName.replace("css-", "")] = e.value))
      : (c[e.nodeName] = e.value);
  }
};
g.g.za.Cx = function (a) {
  if (a) {
    if (
      ("string" != typeof a &&
        (g.g.userAgent.gf && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a &&
        ((a = g.S.Ee(a)), "xml" != a.nodeName.toLowerCase()))
    )
      throw TypeError("Toolbox should be an <xml> document.");
  } else a = null;
  return a;
};
g.i.Abstract = function () {
  this.Ye = null;
  this.Zc = void 0;
  this.group = g.i.xc();
  this.eb = g.i.eb;
};
b = g.i.Abstract.prototype;
b.Aw = !1;
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
  if (a.Zc) var c = g.Wb.zo(a.Zc);
  if (!c)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return c;
}
g.g.xml = {};
g.g.xml.qG = "https://developers.google.com/blockly/xml";
g.g.xml.document = function () {
  return document;
};
g.g.xml.createElement = function (a) {
  return g.g.xml.document().createElementNS(g.g.xml.qG, a);
};
g.g.xml.createTextNode = function (a) {
  return g.g.xml.document().createTextNode(a);
};
g.g.xml.wL = function (a) {
  return new DOMParser().parseFromString(a, "text/xml");
};
g.g.xml.ee = function (a) {
  return new XMLSerializer().serializeToString(a);
};
g.i.qg = function (a) {
  g.i.qg.v.constructor.call(this);
  this.ub = (this.Ye = "undefined" == typeof a) ? "" : a.id;
  this.Zc = this.Ye ? "" : a.u.id;
};
g.g.object.X(g.i.qg, g.i.Abstract);
g.i.qg.prototype.ya = function () {
  var a = g.i.qg.v.ya.call(this);
  a.blockId = this.ub;
  return a;
};
g.i.qg.prototype.ma = function (a) {
  g.i.qg.v.ma.call(this, a);
  this.ub = a.blockId;
};
g.i.Ai = function (a, c, d, e, f) {
  g.i.Ai.v.constructor.call(this, a);
  a &&
    ((this.element = "undefined" == typeof c ? "" : c),
    (this.name = "undefined" == typeof d ? "" : d),
    (this.oldValue = "undefined" == typeof e ? "" : e),
    (this.newValue = "undefined" == typeof f ? "" : f));
};
g.g.object.X(g.i.Ai, g.i.qg);
g.i.ph = g.i.Ai;
b = g.i.Ai.prototype;
b.type = g.i.Mj;
b.ya = function () {
  var a = g.i.Ai.v.ya.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.oldValue = this.oldValue;
  a.newValue = this.newValue;
  return a;
};
b.ma = function (a) {
  g.i.Ai.v.ma.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.oldValue = a.oldValue;
  this.newValue = a.newValue;
};
b.Jm = function () {
  return this.oldValue == this.newValue;
};
b.run = function (a) {
  var c = ya(this).Fd(this.ub);
  if (c)
    switch (
      (c.td && c.td.Ob(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (c = w(c, this.name))
          ? c.setValue(a)
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        c.Cj(a || null);
        break;
      case "collapsed":
        c.Bj(!!a);
        break;
      case "disabled":
        c.oe(!a);
        break;
      case "inline":
        c.Ce(!!a);
        break;
      case "mutation":
        var d = "";
        c.Xa && (d = (d = c.Xa()) && g.S.ee(d));
        if (c.Eb) {
          var e = g.S.Ee(a || "<mutation/>");
          c.Eb(e);
        }
        g.i.Ia(new g.i.Ai(c, "mutation", null, d, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.ub);
};
g.i.Pf = function (a) {
  g.i.Pf.v.constructor.call(this, a);
  a &&
    (a.Ra && (this.eb = !1),
    (this.xml = a.u.ra ? g.S.Ru(a) : g.S.Lh(a)),
    (this.ej = g.i.LB(a)));
};
g.g.object.X(g.i.Pf, g.i.qg);
g.i.gq = g.i.Pf;
g.i.Pf.prototype.type = g.i.oq;
g.i.Pf.prototype.ya = function () {
  var a = g.i.Pf.v.ya.call(this);
  a.xml = g.S.ee(this.xml);
  a.ids = this.ej;
  this.eb || (a.recordUndo = this.eb);
  return a;
};
g.i.Pf.prototype.ma = function (a) {
  g.i.Pf.v.ma.call(this, a);
  this.xml = g.S.Ee(a.xml);
  this.ej = a.ids;
  void 0 !== a.recordUndo && (this.eb = a.recordUndo);
};
g.i.Pf.prototype.run = function (a) {
  var c = ya(this);
  if (a)
    (a = g.g.xml.createElement("xml")), a.appendChild(this.xml), g.S.Ui(a, c);
  else {
    a = 0;
    for (var d; (d = this.ej[a]); a++) {
      var e = c.Fd(d);
      e
        ? e.J(!1)
        : d == this.ub &&
          console.warn("Can't uncreate non-existent block: " + d);
    }
  }
};
g.i.tg = function (a) {
  g.i.tg.v.constructor.call(this, a);
  if (a) {
    if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
    a.Ra && (this.eb = !1);
    this.Pm = a.u.ra ? g.S.Ru(a) : g.S.Lh(a);
    this.ej = g.i.LB(a);
  }
};
g.g.object.X(g.i.tg, g.i.qg);
g.i.sE = g.i.tg;
g.i.tg.prototype.type = g.i.Pj;
g.i.tg.prototype.ya = function () {
  var a = g.i.tg.v.ya.call(this);
  a.oldXml = g.S.ee(this.Pm);
  a.ids = this.ej;
  this.eb || (a.recordUndo = this.eb);
  return a;
};
g.i.tg.prototype.ma = function (a) {
  g.i.tg.v.ma.call(this, a);
  this.Pm = g.S.Ee(a.oldXml);
  this.ej = a.ids;
  void 0 !== a.recordUndo && (this.eb = a.recordUndo);
};
g.i.tg.prototype.run = function (a) {
  var c = ya(this);
  if (a) {
    a = 0;
    for (var d; (d = this.ej[a]); a++) {
      var e = c.Fd(d);
      e
        ? e.J(!1)
        : d == this.ub && console.warn("Can't delete non-existent block: " + d);
    }
  } else
    (a = g.g.xml.createElement("xml")), a.appendChild(this.Pm), g.S.Ui(a, c);
};
g.i.Xj = function (a) {
  g.i.Xj.v.constructor.call(this, a);
  a &&
    (a.Ra && (this.eb = !1),
    (a = za(this)),
    (this.YC = a.fD),
    (this.UC = a.oC),
    (this.hx = a.eB));
};
g.g.object.X(g.i.Xj, g.i.qg);
g.i.qn = g.i.Xj;
b = g.i.Xj.prototype;
b.type = g.i.Cn;
b.ya = function () {
  var a = g.i.Xj.v.ya.call(this);
  this.Uk && (a.newParentId = this.Uk);
  this.Tk && (a.newInputName = this.Tk);
  this.rj &&
    (a.newCoordinate = Math.round(this.rj.x) + "," + Math.round(this.rj.y));
  this.eb || (a.recordUndo = this.eb);
  return a;
};
b.ma = function (a) {
  g.i.Xj.v.ma.call(this, a);
  this.Uk = a.newParentId;
  this.Tk = a.newInputName;
  if (a.newCoordinate) {
    var c = a.newCoordinate.split(",");
    this.rj = new g.g.aa(Number(c[0]), Number(c[1]));
  }
  void 0 !== a.recordUndo && (this.eb = a.recordUndo);
};
b.bl = function () {
  var a = za(this);
  this.Uk = a.fD;
  this.Tk = a.oC;
  this.rj = a.eB;
};
function za(a) {
  var c = ya(a).Fd(a.ub);
  a = {};
  var d = c.getParent();
  if (d) {
    if (((a.fD = d.id), (c = Aa(d, c)))) a.oC = c.name;
  } else a.eB = c.bb();
  return a;
}
b.Jm = function () {
  return (
    this.YC == this.Uk && this.UC == this.Tk && g.g.aa.wf(this.hx, this.rj)
  );
};
b.run = function (a) {
  var c = ya(this),
    d = c.Fd(this.ub);
  if (d) {
    var e = a ? this.Uk : this.YC,
      f = a ? this.Tk : this.UC;
    a = a ? this.rj : this.hx;
    var h = null;
    if (e && ((h = c.Fd(e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    d.getParent() && y(d);
    if (a) (f = d.bb()), d.moveBy(a.x - f.x, a.y - f.y);
    else {
      d = d.O || d.ka;
      if (f) {
        if ((c = z(h, f))) var k = c.connection;
      } else d.type == g.Tf && (k = h.Y);
      k
        ? d.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.ub);
};
g.C.register(g.C.ea.kc, g.i.oq, g.i.Pf);
g.C.register(g.C.ea.kc, g.i.Pj, g.i.tg);
g.C.register(g.C.ea.kc, g.i.Mj, g.i.Ai);
g.C.register(g.C.ea.kc, g.i.Cn, g.i.Xj);
g.i.Fl = function (a) {
  this.Ye = "undefined" == typeof a;
  this.Zc = a ? a.id : "";
  this.group = g.i.xc();
  this.eb = !1;
};
g.g.object.X(g.i.Fl, g.i.Abstract);
g.i.Fl.prototype.type = g.i.gz;
g.i.Fl.prototype.ya = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.Zc && (a.workspaceId = this.Zc);
  return a;
};
g.i.Fl.prototype.ma = function (a) {
  this.Ye = !1;
  this.Zc = a.workspaceId;
  this.group = a.group;
};
g.C.register(g.C.ea.kc, g.i.gz, g.i.Fl);
g.i.Ih = function (a) {
  g.i.Ih.v.constructor.call(this);
  this.Hj = (this.Ye = "undefined" == typeof a) ? "" : a.Qa();
  this.Zc = this.Ye ? "" : a.u.id;
};
g.g.object.X(g.i.Ih, g.i.Abstract);
g.i.Ih.prototype.ya = function () {
  var a = g.i.Ih.v.ya.call(this);
  a.varId = this.Hj;
  return a;
};
g.i.Ih.prototype.ma = function (a) {
  g.i.Ih.v.ya.call(this);
  this.Hj = a.varId;
};
g.i.mf = function (a) {
  g.i.mf.v.constructor.call(this, a);
  a && ((this.ul = a.type), (this.tl = a.name));
};
g.g.object.X(g.i.mf, g.i.Ih);
g.i.mf.prototype.type = g.i.lA;
g.i.mf.prototype.ya = function () {
  var a = g.i.mf.v.ya.call(this);
  a.varType = this.ul;
  a.varName = this.tl;
  return a;
};
g.i.mf.prototype.ma = function (a) {
  g.i.mf.v.ma.call(this, a);
  this.ul = a.varType;
  this.tl = a.varName;
};
g.i.mf.prototype.run = function (a) {
  var c = ya(this);
  a ? c.uf(this.tl, this.ul, this.Hj) : c.Th(this.Hj);
};
g.i.Xf = function (a) {
  g.i.Xf.v.constructor.call(this, a);
  a && ((this.ul = a.type), (this.tl = a.name));
};
g.g.object.X(g.i.Xf, g.i.Ih);
g.i.Xf.prototype.type = g.i.mA;
g.i.Xf.prototype.ya = function () {
  var a = g.i.Xf.v.ya.call(this);
  a.varType = this.ul;
  a.varName = this.tl;
  return a;
};
g.i.Xf.prototype.ma = function (a) {
  g.i.Xf.v.ma.call(this, a);
  this.ul = a.varType;
  this.tl = a.varName;
};
g.i.Xf.prototype.run = function (a) {
  var c = ya(this);
  a ? c.Th(this.Hj) : c.uf(this.tl, this.ul, this.Hj);
};
g.i.Cg = function (a, c) {
  g.i.Cg.v.constructor.call(this, a);
  a && ((this.jx = a.name), (this.bx = "undefined" == typeof c ? "" : c));
};
g.g.object.X(g.i.Cg, g.i.Ih);
g.i.Cg.prototype.type = g.i.oA;
g.i.Cg.prototype.ya = function () {
  var a = g.i.Cg.v.ya.call(this);
  a.oldName = this.jx;
  a.newName = this.bx;
  return a;
};
g.i.Cg.prototype.ma = function (a) {
  g.i.Cg.v.ma.call(this, a);
  this.jx = a.oldName;
  this.bx = a.newName;
};
g.i.Cg.prototype.run = function (a) {
  var c = ya(this);
  a ? c.zj(this.Hj, this.bx) : c.zj(this.Hj, this.jx);
};
g.C.register(g.C.ea.kc, g.i.lA, g.i.mf);
g.C.register(g.C.ea.kc, g.i.mA, g.i.Xf);
g.C.register(g.C.ea.kc, g.i.oA, g.i.Cg);
g.S = {};
g.S.PL = function () {
  var a = A,
    c = g.g.xml.createElement("xml"),
    d = g.S.LL(g.ga.FA(a));
  d.hasChildNodes() && c.appendChild(d);
  var e = [].concat(a.jt);
  1 < e.length &&
    ((a.kh.offset = Math.sin(g.g.rd.gn(g.Wb.Yz))),
    a.L && (a.kh.offset *= -1),
    e.sort(a.kh));
  d = 0;
  for (var f; (f = e[d]); d++) c.appendChild(f.OD(!0));
  a = a.dc(!0);
  for (d = 0; (e = a[d]); d++) c.appendChild(g.S.Ru(e, !0));
  return c;
};
g.S.LL = function (a) {
  for (var c = g.g.xml.createElement("variables"), d = 0, e; (e = a[d]); d++) {
    var f = g.g.xml.createElement("variable");
    f.appendChild(g.g.xml.createTextNode(e.name));
    e.type && f.setAttribute("type", e.type);
    f.id = e.Qa();
    c.appendChild(f);
  }
  return c;
};
g.S.Ru = function (a, c) {
  if (a.me() && ((a = Ba(a, !1)[0]), !a)) return new DocumentFragment();
  var d;
  a.u.L && (d = a.u.Ug());
  c = g.S.Lh(a, c);
  var e = a.bb();
  c.setAttribute("x", Math.round(a.u.L ? d - e.x : e.x));
  c.setAttribute("y", Math.round(e.y));
  return c;
};
g.S.uI = function (a) {
  var c = !1;
  a.name &&
    (a.ck
      ? (c = !0)
      : a.tn &&
        (console.warn(
          "Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."
        ),
        (c = !0)));
  return c
    ? ((c = g.g.xml.createElement("field")),
      c.setAttribute("name", a.name || ""),
      a.sy(c))
    : null;
};
g.S.tH = function (a, c) {
  for (var d = 0, e; (e = a.V[d]); d++)
    for (var f = 0, h; (h = e.ib[f]); f++) (h = g.S.uI(h)) && c.appendChild(h);
};
g.S.Lh = function (a, c) {
  if (a.me()) return (a = Ba(a, !1)[0]) ? g.S.Lh(a) : new DocumentFragment();
  var d = g.g.xml.createElement(a.Ra ? "shadow" : "block");
  d.setAttribute("type", a.type);
  c || d.setAttribute("id", a.id);
  if (a.Xa) {
    var e = a.Xa();
    e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e);
  }
  g.S.tH(a, d);
  if ((e = a.Qe.text)) {
    var f = a.Qe.size,
      h = a.Qe.Gx,
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
  for (e = 0; (f = a.V[e]); e++) {
    var l;
    h = !0;
    if (f.type != g.vh) {
      var m = f.connection.sa();
      f.type == g.lb
        ? (l = g.g.xml.createElement("value"))
        : f.type == g.gb && (l = g.g.xml.createElement("statement"));
      k = f.connection.ym();
      !k || (m && m.Ra) || l.appendChild(g.S.SA(k, c));
      m &&
        ((k = g.S.Lh(m, c)),
        k.nodeType == g.g.o.Ji.ELEMENT_NODE && (l.appendChild(k), (h = !1)));
      l.setAttribute("name", f.name);
      h || d.appendChild(l);
    }
  }
  void 0 != a.ai && a.ai != a.kJ && d.setAttribute("inline", a.ai);
  a.isCollapsed() && d.setAttribute("collapsed", !0);
  a.isEnabled() || d.setAttribute("disabled", !0);
  a.Be() || a.Ra || d.setAttribute("deletable", !1);
  a.Lc() || a.Ra || d.setAttribute("movable", !1);
  a.le() || d.setAttribute("editable", !1);
  if ((e = q(a)))
    (k = g.S.Lh(e, c)),
      k.nodeType == g.g.o.Ji.ELEMENT_NODE &&
        ((l = g.g.xml.createElement("next")),
        l.appendChild(k),
        d.appendChild(l));
  k = a.Y && a.Y.ym();
  !k || (e && e.Ra) || l.appendChild(g.S.SA(k, c));
  return d;
};
g.S.SA = function (a, c) {
  for (var d = (a = a.cloneNode(!0)), e; d; )
    if ((c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild))
      d = d.firstChild;
    else {
      for (; d && !d.nextSibling; )
        (e = d),
          (d = d.parentNode),
          e.nodeType == g.g.o.Ji.TEXT_NODE &&
            "" == e.data.trim() &&
            d.firstChild != e &&
            g.g.o.removeNode(e);
      d &&
        ((e = d),
        (d = d.nextSibling),
        e.nodeType == g.g.o.Ji.TEXT_NODE &&
          "" == e.data.trim() &&
          g.g.o.removeNode(e));
    }
  return a;
};
g.S.ee = function (a) {
  return g.g.xml.ee(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>");
};
g.S.sO = function (a) {
  a = g.S.ee(a).split("<");
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
g.S.Ee = function (a) {
  var c = g.g.xml.wL(a);
  if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length)
    throw Error("textToDom was unable to parse: " + a);
  return c.documentElement;
};
g.S.pO = function (a, c) {
  c.hd(!1);
  c.clear();
  a = g.S.Ui(a, c);
  c.hd(!0);
  return a;
};
g.S.Ui = function (a, c) {
  if (a instanceof g.Wb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  c.L && (e = c.Ug());
  d = [];
  g.g.o.Dp();
  var f = g.i.xc();
  f || g.i.na(!0);
  c.hd && c.hd(!1);
  var h = !0;
  try {
    for (var k = 0, l; (l = a.childNodes[k]); k++) {
      var m = l.nodeName.toLowerCase(),
        n = l;
      if ("block" == m || ("shadow" == m && !g.i.eb)) {
        var u = g.S.qk(n, c);
        d.push(u.id);
        var v = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10,
          x = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
        isNaN(v) || isNaN(x) || u.moveBy(c.L ? e - v : v, x);
        h = !1;
      } else {
        if ("shadow" == m)
          throw TypeError("Shadow block cannot be a top-level block.");
        if ("comment" == m)
          c.ra
            ? g.$l
              ? g.$l.tm(n)
              : console.warn(
                  "Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment."
                )
            : g.xA
            ? g.xA.tm(n)
            : console.warn(
                "Missing require for Blockly.WorkspaceComment, ignoring workspace comment."
              );
        else if ("variables" == m) {
          if (h) g.S.mI(n, c);
          else
            throw Error(
              "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
            );
          h = !1;
        }
      }
    }
  } finally {
    f || g.i.na(!1), g.g.o.Ep();
  }
  c.hd && c.hd(!0);
  g.i.Ia(new g.i.Fl(c));
  return d;
};
g.S.mO = function (a, c) {
  var d;
  Object.prototype.hasOwnProperty.call(c, "scale") && (d = Da(c));
  a = g.S.Ui(a, c);
  if (d && d.top != d.bottom) {
    var e = d.bottom;
    var f = c.L ? d.right : d.left;
    var h = Infinity,
      k = -Infinity,
      l = Infinity;
    for (d = 0; d < a.length; d++) {
      var m = c.Fd(a[d]).bb();
      m.y < l && (l = m.y);
      m.x < h && (h = m.x);
      m.x > k && (k = m.x);
    }
    e = e - l + 10;
    f = c.L ? f - k : f - h;
    for (d = 0; d < a.length; d++) c.Fd(a[d]).moveBy(f, e);
  }
  return a;
};
g.S.qk = function (a, c) {
  if (a instanceof g.Wb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  g.i.disable();
  d = c.wk();
  try {
    var e = g.S.Fv(a, c),
      f = p(e, !1);
    if (c.ra) {
      Ea(e, !1);
      for (var h = f.length - 1; 0 <= h; h--) f[h].Ae();
      for (h = f.length - 1; 0 <= h; h--) f[h].Ja(!1);
      setTimeout(function () {
        e.ag || Ea(e, !0);
      }, 1);
      Fa(e);
      Ga(c);
    } else for (h = f.length - 1; 0 <= h; h--) f[h].Ek();
  } finally {
    g.i.enable();
  }
  if (g.i.isEnabled()) {
    a = g.ga.HB(c, d);
    for (h = 0; h < a.length; h++) g.i.Ia(new g.i.mf(a[h]));
    g.i.Ia(new g.i.gq(e));
  }
  return e;
};
g.S.mI = function (a, c) {
  for (var d = 0, e; (e = a.childNodes[d]); d++)
    if (e.nodeType == g.g.o.Ji.ELEMENT_NODE) {
      var f = e.getAttribute("type"),
        h = e.getAttribute("id");
      c.uf(e.textContent, f, h);
    }
};
g.S.Fv = function (a, c) {
  var d = null,
    e = a.getAttribute("type");
  if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
  var f = a.getAttribute("id");
  d = c.bh(e, f);
  var h = null;
  f = 0;
  for (var k; (k = a.childNodes[f]); f++)
    if (k.nodeType != g.g.o.Ji.TEXT_NODE) {
      for (var l, m = (h = null), n = 0; (l = k.childNodes[n]); n++)
        l.nodeType == g.g.o.Ji.ELEMENT_NODE &&
          ("block" == l.nodeName.toLowerCase()
            ? (h = l)
            : "shadow" == l.nodeName.toLowerCase() && (m = l));
      n = !1;
      var u = k.getAttribute("name");
      l = k;
      switch (k.nodeName.toLowerCase()) {
        case "mutation":
          d.Eb && (d.Eb(l), d.Ae && (n = !0));
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
          d.Cj(m);
          d.Qe.Gx = h;
          isNaN(k) || isNaN(l) || (d.Qe.size = new g.g.ue(k, l));
          h &&
            d.FI &&
            !d.Ub &&
            setTimeout(function () {
              d.sf.Ob(!0);
            }, 1);
          break;
        case "data":
          d.data = k.textContent;
          break;
        case "title":
        case "field":
          g.S.lI(d, u, l);
          break;
        case "value":
        case "statement":
          l = z(d, u);
          if (!l) {
            console.warn("Ignoring non-existent input " + u + " in block " + e);
            break;
          }
          if (h)
            if (((h = g.S.Fv(h, c)), h.O)) l.connection.connect(h.O);
            else if (h.ka) l.connection.connect(h.ka);
            else
              throw TypeError(
                "Child block does not have output or previous statement."
              );
          m && l.connection.Xm(m);
          break;
        case "next":
          if (h) {
            if (!d.Y) throw TypeError("Next statement does not exist.");
            if (d.Y.isConnected())
              throw TypeError("Next statement is already connected.");
            h = g.S.Fv(h, c);
            if (!h.ka)
              throw TypeError("Next block does not have previous statement.");
            d.Y.connect(h.ka);
          }
          m && d.Y && d.Y.Xm(m);
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  n && d.Ae();
  (f = a.getAttribute("inline")) && d.Ce("true" == f);
  (f = a.getAttribute("disabled")) && d.oe("true" != f && "disabled" != f);
  if ((f = a.getAttribute("deletable"))) d.rv = "true" == f;
  (f = a.getAttribute("movable")) && d.Xs("true" == f);
  (f = a.getAttribute("editable")) && d.Xx("true" == f);
  (f = a.getAttribute("collapsed")) && d.Bj("true" == f);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = Ba(d, !1);
    for (f = 0; (c = a[f]); f++)
      if (!c.Ra) throw TypeError("Shadow block not allowed non-shadow child.");
    if (d.Yh().length)
      throw TypeError("Shadow blocks cannot have variable references.");
    d.$x(!0);
  }
  return d;
};
g.S.lI = function (a, c, d) {
  var e = w(a, c);
  e
    ? e.tm(d)
    : console.warn("Ignoring non-existent field " + c + " in block " + a.type);
};
g.S.bI = function (a) {
  for (var c = 0, d; (d = a.childNodes[c]); c++)
    if ("next" == d.nodeName.toLowerCase()) {
      a.removeChild(d);
      break;
    }
};
g.Td = function (a) {
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
    d = g.g.za.fv(a.toolbox);
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
  var u = !!a.rtl,
    v = a.horizontalLayout;
  void 0 === v && (v = !1);
  var x = a.toolboxPosition;
  x = "end" !== x;
  x = v
    ? x
      ? g.g.za.Ud.Sq
      : g.g.za.Ud.xt
    : x == u
    ? g.g.za.Ud.$j
    : g.g.za.Ud.Wj;
  var I = a.css;
  void 0 === I && (I = !0);
  var ua = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (ua = a.media) : a.path && (ua = a.path + "media/");
  var Ca = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
    Qe = a.renderer || "geras",
    Re = a.plugins || {};
  this.L = u;
  this.Ef = Ca;
  this.collapse = h;
  this.Zn = k;
  this.disable = l;
  this.readOnly = c;
  this.Vw = a.maxBlocks || Infinity;
  this.qs = a.maxInstances;
  this.uj = ua;
  this.Ho = e;
  this.gd = g.Td.jK(a, e);
  this.hC = f;
  this.rs = n;
  this.eJ = m;
  this.bJ = I;
  this.Id = v;
  this.ah = d;
  this.dC = g.Td.iK(a);
  this.Ab = g.Td.lK(a);
  this.La = x;
  this.yL = g.Td.kK(a);
  this.pp = Qe;
  this.qp = a.rendererOverrides;
  this.lw = null;
  this.yc = a.parentWorkspace;
  this.plugins = Re;
};
g.XL = function () {};
g.Td.jK = function (a, c) {
  var d = a.move || {},
    e = {};
  e.scrollbars =
    void 0 === d.scrollbars && void 0 === a.scrollbars
      ? c
      : !!d.scrollbars || !!a.scrollbars;
  e.Jj = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
  e.Vi = e.scrollbars ? (void 0 === d.drag ? !0 : !!d.drag) : !1;
  return e;
};
g.Td.lK = function (a) {
  a = a.zoom || {};
  var c = {};
  c.controls = void 0 === a.controls ? !1 : !!a.controls;
  c.Jj = void 0 === a.wheel ? !1 : !!a.wheel;
  c.GD = void 0 === a.startScale ? 1 : Number(a.startScale);
  c.Wo = void 0 === a.maxScale ? 3 : Number(a.maxScale);
  c.Yo = void 0 === a.minScale ? 0.3 : Number(a.minScale);
  c.dL = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
  c.Fx = void 0 === a.pinch ? c.Jj || c.controls : !!a.pinch;
  return c;
};
g.Td.iK = function (a) {
  a = a.grid || {};
  var c = {};
  c.spacing = Number(a.spacing) || 0;
  c.vb = a.colour || "#888";
  c.length = void 0 === a.length ? 1 : Number(a.length);
  c.SO = 0 < c.spacing && !!a.snap;
  return c;
};
g.Td.kK = function (a) {
  a = a.theme || g.Fh.Bi;
  return "string" == typeof a
    ? g.C.gw(g.C.ea.wu, a)
    : a instanceof g.gk
    ? a
    : g.gk.$H(a.name || "builtin" + g.g.Vj.Rr(), a);
};
g.Td.Cx = function (a) {
  g.g.tv.warn(
    "Blockly.Options.parseToolboxTree",
    "September 2020",
    "September 2021",
    "Blockly.utils.toolbox.parseToolboxTree"
  );
  return g.g.za.Cx(a);
};
g.Fu = function (a) {
  this.Ua = Object.create(null);
  this.u = a;
};
b = g.Fu.prototype;
b.clear = function () {
  this.Ua = Object.create(null);
};
b.Ts = function (a, c) {
  var d = this.Hd(c, a.type),
    e = B(this.u, !1);
  g.i.na(!0);
  try {
    if (d && d.Qa() != a.Qa()) {
      var f = a.type;
      c != d.name && Ha(d, c, e);
      for (c = 0; c < e.length; c++) e[c].Ss(a.Qa(), d.Qa());
      g.i.Ia(new g.i.Xf(a));
      this.Ua[f].splice(this.Fo(f).indexOf(a), 1);
    } else Ha(a, c, e);
  } finally {
    g.i.na(!1);
  }
};
b.zj = function (a, c) {
  var d = this.gg(a);
  if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.Ts(d, c);
};
function Ha(a, c, d) {
  g.i.Ia(new g.i.Cg(a, c));
  a.name = c;
  for (c = 0; c < d.length; c++) d[c].kt(a);
}
b.uf = function (a, c, d) {
  var e = this.Hd(a, c);
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
  if (d && this.gg(d))
    throw Error('Variable id, "' + d + '", is already in use.');
  e = d || g.g.Vh();
  c = c || "";
  e = new g.Pn(this.u, a, c, e);
  a = this.Ua[c] || [];
  a.push(e);
  delete this.Ua[c];
  this.Ua[c] = a;
  return e;
};
b.Th = function (a) {
  var c = this.gg(a);
  if (c) {
    var d = c.name,
      e = this.kw(a);
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
  var e = g.i.xc();
  e || g.i.na(!0);
  try {
    for (var f = 0; f < d.length; f++) d[f].J(!0);
    var h = a.Ua[c.type];
    a = 0;
    for (var k; (k = h[a]); a++)
      if (k.Qa() == c.Qa()) {
        h.splice(a, 1);
        g.i.Ia(new g.i.Xf(c));
        break;
      }
  } finally {
    e || g.i.na(!1);
  }
}
b.Hd = function (a, c) {
  if ((c = this.Ua[c || ""]))
    for (var d = 0, e; (e = c[d]); d++) if (g.Sd.wf(e.name, a)) return e;
  return null;
};
b.gg = function (a) {
  for (var c = Object.keys(this.Ua), d = 0; d < c.length; d++)
    for (var e = c[d], f = 0, h; (h = this.Ua[e][f]); f++)
      if (h.Qa() == a) return h;
  return null;
};
b.Fo = function (a) {
  return (a = this.Ua[a || ""]) ? a.slice() : [];
};
b.jw = function (a) {
  var c = {};
  g.g.object.Ld(c, this.Ua);
  a && a.vj && g.g.object.Ld(c, a.vj.Ua);
  a = Object.keys(c);
  c = !1;
  for (var d = 0; d < a.length; d++) "" == a[d] && (c = !0);
  c || a.push("");
  return a;
};
b.wk = function () {
  var a = [],
    c;
  for (c in this.Ua) a = a.concat(this.Ua[c]);
  return a;
};
b.Xv = function () {
  var a = [],
    c;
  for (c in this.Ua)
    for (var d = this.Ua[c], e = 0, f; (f = d[e]); e++) a.push(f.name);
  return a;
};
b.kw = function (a) {
  for (var c = [], d = B(this.u, !1), e = 0; e < d.length; e++) {
    var f = d[e].Yh();
    if (f) for (var h = 0; h < f.length; h++) f[h].Qa() == a && c.push(d[e]);
  }
  return c;
};
g.Wb = function (a) {
  this.id = g.g.Vh();
  g.Wb.Rn[this.id] = this;
  this.options = a || new g.Td({});
  this.L = !!this.options.L;
  this.Id = !!this.options.Id;
  this.La = this.options.La;
  this.ao = new (g.C.Or(g.C.ea.Qy, this.options))(this);
  this.Lp = [];
  this.jt = [];
  this.vr = Object.create(null);
  this.ne = [];
  this.ql = [];
  this.lp = [];
  this.Qu = Object.create(null);
  this.xi = Object.create(null);
  this.Ua = new g.Fu(this);
  this.vj = null;
};
b = g.Wb.prototype;
b.ra = !1;
b.xw = !1;
b.Dz = 1024;
b.xr = null;
b.J = function () {
  this.ne.length = 0;
  this.clear();
  delete g.Wb.Rn[this.id];
};
g.Wb.Yz = 3;
b = g.Wb.prototype;
b.kh = function (a, c) {
  a = a.bb();
  c = c.bb();
  return (
    a.y +
    g.Wb.prototype.kh.offset * a.x -
    (c.y + g.Wb.prototype.kh.offset * c.x)
  );
};
b.Xq = function (a) {
  this.Lp.push(a);
};
b.Rs = function (a) {
  if (!g.g.Un(this.Lp, a))
    throw Error("Block not present in workspace's list of top-most blocks.");
};
b.dc = function (a) {
  var c = [].concat(this.Lp);
  a &&
    1 < c.length &&
    ((this.kh.offset = Math.sin(g.g.rd.gn(g.Wb.Yz))),
    this.L && (this.kh.offset *= -1),
    c.sort(this.kh));
  return c;
};
function Ja(a, c) {
  return a.xi[c] ? a.xi[c].slice(0) : [];
}
function B(a, c) {
  if (c) {
    a = a.dc(!0);
    c = [];
    for (var d = 0; d < a.length; d++) c.push.apply(c, p(a[d], !0));
  } else
    for (c = a.dc(!1), d = 0; d < c.length; d++) c.push.apply(c, Ba(c[d], !1));
  return c.filter(function (e) {
    return !e.me();
  });
}
b.clear = function () {
  this.xw = !0;
  try {
    var a = g.i.xc();
    for (a || g.i.na(!0); this.Lp.length; ) this.Lp[0].J(!1);
    for (; this.jt.length; ) this.jt[this.jt.length - 1].J(!1);
    a || g.i.na(!1);
    this.Ua.clear();
    this.vj && this.vj.clear();
  } finally {
    this.xw = !1;
  }
};
b.zj = function (a, c) {
  this.Ua.zj(a, c);
};
b.uf = function (a, c, d) {
  return this.Ua.uf(a, c, d);
};
b.kw = function (a) {
  return this.Ua.kw(a);
};
b.Th = function (a) {
  this.Ua.Th(a);
};
b.Hd = function (a, c) {
  return this.Ua.Hd(a, c);
};
b.gg = function (a) {
  return this.Ua.gg(a);
};
b.Fo = function (a) {
  return this.Ua.Fo(a);
};
b.jw = function () {
  return this.Ua.jw(this);
};
b.wk = function () {
  return this.Ua.wk();
};
b.Xv = function () {
  return this.Ua.Xv();
};
b.Ug = function () {
  return 0;
};
b.bh = function (a, c) {
  return new g.qe(this, a, c);
};
function Ka(a) {
  return isNaN(a.options.Vw) ? Infinity : a.options.Vw - B(a, !1).length;
}
function La(a, c) {
  if (!Ma(a)) return !0;
  var d = 0,
    e;
  for (e in c) {
    if (
      c[e] >
      (a.options.qs
        ? (void 0 !== a.options.qs[e] ? a.options.qs[e] : Infinity) -
          Ja(a, e).length
        : Infinity)
    )
      return !1;
    d += c[e];
  }
  return d > Ka(a) ? !1 : !0;
}
function Ma(a) {
  return Infinity != a.options.Vw || !!a.options.qs;
}
function Na(a, c) {
  var d = c ? a.lp : a.ql;
  a = c ? a.ql : a.lp;
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
  a.ne.push(c);
}
function Oa(a, c) {
  g.g.Un(a.ne, c);
}
b.Fd = function (a) {
  return this.Qu[a] || null;
};
b.by = function (a) {
  this.Ua = a;
};
g.Wb.Rn = Object.create(null);
g.Wb.zo = function (a) {
  return g.Wb.Rn[a] || null;
};
g.Wb.getAll = function () {
  var a = [],
    c;
  for (c in g.Wb.Rn) a.push(g.Wb.Rn[c]);
  return a;
};
g.va = function (a, c, d, e, f, h) {
  this.s = a;
  this.Qh = c;
  this.lL = d;
  this.qx = this.px = this.Zw = this.Sx = null;
  this.ag = !1;
  d = g.va.jE;
  this.s.L && (d = -d);
  this.wH = g.g.rd.gn(d);
  a.mg.appendChild(this.Se(c, !(!f || !h)));
  this.uc = e;
  this.Us && Pa(this);
  (f && h) ||
    ((a = this.Qh.getBBox()),
    (f = a.width + 2 * g.va.zd),
    (h = a.height + 2 * g.va.zd));
  this.vp(f, h);
  Pa(this);
  Qa(this);
  this.Us = !0;
};
g.va.zd = 6;
g.va.kE = 5;
g.va.jE = 20;
g.va.Gy = 4;
g.va.gE = 8;
g.va.ud = null;
g.va.$e = null;
g.va.wy = function () {
  g.va.ud && (g.Na(g.va.ud), (g.va.ud = null));
  g.va.$e && (g.Na(g.va.$e), (g.va.$e = null));
};
g.va.BH = function () {
  g.Touch.jk();
  g.va.wy();
};
b = g.va.prototype;
b.Us = !1;
b.uc = null;
b.ih = 0;
b.yj = 0;
b.zb = 0;
b.Uc = 0;
b.Ou = !0;
b.Se = function (a, c) {
  this.rf = g.g.o.M(g.g.F.rc, {}, null);
  var d = { filter: "url(#" + this.s.Sb.W().Hr + ")" };
  g.g.userAgent.OF && (d = {});
  d = g.g.o.M(g.g.F.rc, d, this.rf);
  this.IA = g.g.o.M(g.g.F.se, {}, d);
  this.cr = g.g.o.M(
    g.g.F.Gc,
    { class: "blocklyDraggable", x: 0, y: 0, rx: g.va.zd, ry: g.va.zd },
    d
  );
  c
    ? ((this.li = g.g.o.M(
        g.g.F.rc,
        { class: this.s.L ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.rf
      )),
      (c = 2 * g.va.zd),
      g.g.o.M(
        g.g.F.AG,
        { points: "0,x x,x x,0".replace(/x/g, c.toString()) },
        this.li
      ),
      g.g.o.M(
        g.g.F.yn,
        {
          class: "blocklyResizeLine",
          x1: c / 3,
          y1: c - 1,
          x2: c - 1,
          y2: c / 3,
        },
        this.li
      ),
      g.g.o.M(
        g.g.F.yn,
        {
          class: "blocklyResizeLine",
          x1: (2 * c) / 3,
          y1: c - 1,
          x2: c - 1,
          y2: (2 * c) / 3,
        },
        this.li
      ))
    : (this.li = null);
  this.s.options.readOnly ||
    ((this.px = g.ta(this.cr, "mousedown", this, this.AH)),
    this.li && (this.qx = g.ta(this.li, "mousedown", this, this.aL)));
  this.rf.appendChild(a);
  return this.rf;
};
b.Pa = function () {
  return this.rf;
};
function Ra(a, c) {
  a.rf.dataset && (a.rf.dataset.blockId = c);
}
b.AH = function (a) {
  var c = this.s.Wh(a);
  if (c) {
    if (c.Ak)
      throw Error(
        "Tried to call gesture.handleBubbleStart, but the gesture had already been started."
      );
    c.df || (c.df = this);
    c.Cf = a;
  }
};
b.Ap = function () {};
b.Be = function () {
  return !1;
};
b.xp = function () {};
b.aL = function (a) {
  Sa(this);
  g.va.wy();
  g.g.Lk(a) ||
    (this.s.ly(a, new g.g.aa(this.s.L ? -this.zb : this.zb, this.Uc)),
    (g.va.ud = g.ta(document, "mouseup", this, g.va.BH)),
    (g.va.$e = g.ta(document, "mousemove", this, this.bL)),
    g.Jc());
  a.stopPropagation();
};
b.bL = function (a) {
  this.Ou = !1;
  var c = this.s;
  a = g.g.$o(a, r(c), oa(c));
  a.x /= c.scale;
  a.y /= c.scale;
  c = g.g.aa.sum(c.wB, a);
  this.vp(this.s.L ? -c.x : c.x, c.y);
  this.s.L && Pa(this);
};
function Ta(a, c) {
  a.Zw = c;
}
function Sa(a) {
  var c = a.rf.parentNode;
  return c.lastChild !== a.rf ? (c.appendChild(a.rf), !0) : !1;
}
function Ua(a, c, d) {
  var e = a.s.L ? a.uc.x - c.x - a.zb : c.x + a.uc.x;
  c = c.y + a.uc.y;
  return Math.max(
    0,
    Math.min(
      1,
      ((Math.min(e + a.zb, d.ac + d.Qb) - Math.max(e, d.ac)) *
        (Math.min(c + a.Uc, d.jc + d.Vb) - Math.max(c, d.jc))) /
        (a.zb * a.Uc)
    )
  );
}
function Pa(a) {
  var c = a.uc.x;
  c = a.s.L ? c - (a.ih + a.zb) : c + a.ih;
  a.moveTo(c, a.yj + a.uc.y);
}
b.moveTo = function (a, c) {
  this.rf.setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.Dj = function (a) {
  !a && this.Zw && this.Zw();
};
b.Zv = function () {
  return new g.g.ue(this.zb, this.Uc);
};
b.vp = function (a, c) {
  var d = 2 * g.va.zd;
  a = Math.max(a, d + 45);
  c = Math.max(c, d + 20);
  this.zb = a;
  this.Uc = c;
  this.cr.setAttribute("width", a);
  this.cr.setAttribute("height", c);
  this.li &&
    (this.s.L
      ? this.li.setAttribute(
          "transform",
          "translate(" + 2 * g.va.zd + "," + (c - d) + ") scale(-1 1)"
        )
      : this.li.setAttribute(
          "transform",
          "translate(" + (a - d) + "," + (c - d) + ")"
        ));
  if (this.Ou) {
    a = this.s.ed();
    a.ac /= this.s.scale;
    a.Qb /= this.s.scale;
    a.jc /= this.s.scale;
    a.Vb /= this.s.scale;
    c = -this.zb / 4;
    if (!(this.zb > a.Qb)) {
      if (this.s.L) {
        d = this.uc.x - c;
        var e = d - this.zb;
        var f = a.ac + a.Qb,
          h = a.ac + g.Wa.Wc / this.s.scale;
      } else
        (e = c + this.uc.x),
          (d = e + this.zb),
          (h = a.ac),
          (f = a.ac + a.Qb - g.Wa.Wc / this.s.scale);
      this.s.L
        ? e < h
          ? (c = -(h - this.uc.x + this.zb))
          : d > f && (c = -(f - this.uc.x))
        : e < h
        ? (c = h - this.uc.x)
        : d > f && (c = f - this.uc.x - this.zb);
    }
    e = c;
    c = -this.Uc / 4;
    if (!(this.Uc > a.Vb)) {
      d = this.uc.y + c;
      f = d + this.Uc;
      h = a.jc;
      var k = a.jc + a.Vb - g.Wa.Wc / this.s.scale,
        l = this.uc.y;
      d < h ? (c = h - l) : f > k && (c = k - l - this.Uc);
    }
    h = c;
    f = this.lL.getBBox();
    c = { x: e, y: -this.Uc - this.s.Sb.W().Bn };
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
      ? ((this.ih = c.x), (this.yj = c.y))
      : k == a
      ? ((this.ih = d.x), (this.yj = d.y))
      : l == a
      ? ((this.ih = e.x), (this.yj = e.y))
      : ((this.ih = f.x), (this.yj = f.y));
  }
  Pa(this);
  Qa(this);
  this.Sx && this.Sx();
};
function Qa(a) {
  var c = [],
    d = a.zb / 2,
    e = a.Uc / 2,
    f = -a.ih,
    h = -a.yj;
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
      u = Math.cos(m),
      v = a.Zv();
    m = (v.width + v.height) / g.va.kE;
    m = Math.min(m, v.width, v.height) / 4;
    v = 1 - g.va.gE / k;
    f = d + v * f;
    h = e + v * h;
    v = d + m * u;
    var x = e + m * n;
    d -= m * u;
    e -= m * n;
    n = l + a.wH;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / g.va.Gy;
    k = (Math.cos(n) * k) / g.va.Gy;
    c.push("M" + v + "," + x);
    c.push(
      "C" + (v + k) + "," + (x + l) + " " + f + "," + h + " " + f + "," + h
    );
    c.push(
      "C" + f + "," + h + " " + (d + k) + "," + (e + l) + " " + d + "," + e
    );
  }
  c.push("z");
  a.IA.setAttribute("d", c.join(" "));
}
b.vd = function (a) {
  this.cr.setAttribute("fill", a);
  this.IA.setAttribute("fill", a);
};
b.J = function () {
  this.px && g.Na(this.px);
  this.qx && g.Na(this.qx);
  g.va.wy();
  g.g.o.removeNode(this.rf);
  this.ag = !0;
};
b.$w = function (a, c) {
  a ? a.ol(c.x, c.y) : this.moveTo(c.x, c.y);
  this.ih = this.s.L ? this.uc.x - c.x - this.zb : c.x - this.uc.x;
  this.yj = c.y - this.uc.y;
  Qa(this);
};
b.bb = function () {
  return new g.g.aa(
    this.s.L ? -this.ih + this.uc.x - this.zb : this.uc.x + this.ih,
    this.uc.y + this.yj
  );
};
g.va.Ee = function (a) {
  var c = g.g.o.M(
    g.g.F.Qq,
    {
      class: "blocklyText blocklyBubbleText blocklyNoPointerEvents",
      y: g.va.zd,
    },
    null
  );
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) {
    var e = g.g.o.M(g.g.F.iA, { dy: "1em", x: g.va.zd }, c),
      f = document.createTextNode(a[d]);
    e.appendChild(f);
  }
  return c;
};
g.va.gB = function (a, c, d) {
  d = new g.va(c.u, a, c.Gb.Pb, d, null, null);
  Ra(d, c.id);
  if (c.L) {
    c = a.getBBox().width;
    for (var e = 0, f; (f = a.childNodes[e]); e++)
      f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + g.va.zd);
  }
  return d;
};
g.Qc = {};
g.Qc.uw = !1;
g.Qc.register = function (a) {
  if (g.Qc.uw) throw Error("CSS already injected");
  Array.prototype.push.apply(g.Qc.Ft, a);
  a.length = 0;
};
g.Qc.fj = function (a, c) {
  if (!g.Qc.uw) {
    g.Qc.uw = !0;
    var d = g.Qc.Ft.join("\n");
    g.Qc.Ft.length = 0;
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
g.Qc.Ft = [
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
g.i.Ne = function (a) {
  g.i.Ne.v.constructor.call(this);
  this.Ye = "undefined" == typeof a;
  this.Zc = a ? a : "";
  this.eb = !1;
};
g.g.object.X(g.i.Ne, g.i.Abstract);
g.i.Ne.prototype.Aw = !0;
g.i.Mi = function (a, c, d, e) {
  g.i.Mi.v.constructor.call(this, a ? a.u.id : void 0);
  this.ub = a ? a.id : null;
  this.element = "undefined" == typeof c ? "" : c;
  this.oldValue = "undefined" == typeof d ? "" : d;
  this.newValue = "undefined" == typeof e ? "" : e;
};
g.g.object.X(g.i.Mi, g.i.Ne);
g.i.Mi.prototype.type = g.i.Cu;
g.i.Mi.prototype.ya = function () {
  var a = g.i.Mi.v.ya.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.ub && (a.blockId = this.ub);
  return a;
};
g.i.Mi.prototype.ma = function (a) {
  g.i.Mi.v.ma.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.ub = a.blockId;
};
g.C.register(g.C.ea.kc, g.i.Cu, g.i.Mi);
g.i.Mf = function (a, c, d) {
  g.i.Mf.v.constructor.call(this, a ? a.u.id : void 0);
  this.ub = a ? a.id : null;
  this.Km = c;
  this.Uu = d;
};
g.g.object.X(g.i.Mf, g.i.Ne);
g.i.Mf.prototype.type = g.i.cq;
g.i.Mf.prototype.ya = function () {
  var a = g.i.Mf.v.ya.call(this);
  a.isOpen = this.Km;
  a.bubbleType = this.Uu;
  a.blockId = this.ub;
  return a;
};
g.i.Mf.prototype.ma = function (a) {
  g.i.Mf.v.ma.call(this, a);
  this.Km = a.isOpen;
  this.Uu = a.bubbleType;
  this.ub = a.blockId;
};
g.C.register(g.C.ea.kc, g.i.cq, g.i.Mf);
g.re = function (a) {
  this.T = a;
  this.je = null;
};
b = g.re.prototype;
b.TA = !0;
b.Mq = 17;
b.nc = null;
b.dj = null;
function Va(a) {
  a.je ||
    ((a.je = g.g.o.M(g.g.F.rc, { class: "blocklyIconGroup" }, null)),
    a.T.Ub && g.g.o.Ha(a.je, "blocklyIconGroupReadonly"),
    a.Hv(a.je),
    a.T.Pa().appendChild(a.je),
    g.ta(a.je, "mouseup", a, a.qw),
    a.yi());
}
b.J = function () {
  g.g.o.removeNode(this.je);
  this.je = null;
  this.Ob(!1);
  this.T = null;
};
b.yi = function () {};
b.isVisible = function () {
  return !!this.nc;
};
b.qw = function (a) {
  this.T.u.Kc() || this.T.Ub || g.g.Lk(a) || this.Ob(!this.isVisible());
};
b.mc = function () {
  this.isVisible() && this.nc.vd(this.T.style.Qi);
};
function Wa(a) {
  var c = a.T.bb(),
    d = g.g.xf(a.je);
  c = new g.g.aa(c.x + d.x + a.Mq / 2, c.y + d.y + a.Mq / 2);
  g.g.aa.wf(a.dj, c) ||
    ((a.dj = c), a.isVisible() && ((a = a.nc), (a.uc = c), a.Us && Pa(a)));
}
g.g.tv = {};
g.g.tv.warn = function (a, c, d, e) {
  a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
  e && (a += "\nUse " + e + " instead.");
  console.warn(a);
};
g.Qn = function (a) {
  g.Qn.v.constructor.call(this, a);
  Va(this);
  this.ri = {};
};
g.g.object.X(g.Qn, g.re);
b = g.Qn.prototype;
b.TA = !1;
b.Hv = function (a) {
  g.g.o.M(
    g.g.F.se,
    {
      class: "blocklyIconShape",
      d: "M2,15Q-1,15 0.5,12L6.5,1.7Q8,-1 9.5,1.7L15.5,12Q17,15 14,15z",
    },
    a
  );
  g.g.o.M(
    g.g.F.se,
    {
      class: "blocklyIconSymbol",
      d: "m7,4.8v3.16l0.27,2.27h1.46l0.27,-2.27v-3.16z",
    },
    a
  );
  g.g.o.M(
    g.g.F.Gc,
    { class: "blocklyIconSymbol", x: "7", y: "11", height: "2", width: "2" },
    a
  );
};
b.Ob = function (a) {
  a != this.isVisible() &&
    (g.i.Ia(new g.i.Mf(this.T, a, "warning")), a ? this.yr() : this.Er());
};
b.yr = function () {
  this.Xk = g.va.Ee(this.Gd());
  this.nc = g.va.gB(this.Xk, this.T, this.dj);
  this.mc();
};
b.Er = function () {
  this.nc.J();
  this.Xk = this.nc = null;
};
function Xa(a, c, d) {
  a.ri[d] != c &&
    (c ? (a.ri[d] = c) : delete a.ri[d], a.isVisible() && (a.Ob(!1), a.Ob(!0)));
}
b.Gd = function () {
  var a = [],
    c;
  for (c in this.ri) a.push(this.ri[c]);
  return a.join("\n");
};
b.J = function () {
  this.T.ef = null;
  g.re.prototype.J.call(this);
};
g.Comment = function (a) {
  g.Comment.v.constructor.call(this, a);
  this.sd = a.Qe;
  this.sd.text = this.sd.text || "";
  this.Xu = "";
  this.Bs = this.ys = this.Js = this.ud = null;
  Va(this);
};
g.g.object.X(g.Comment, g.re);
b = g.Comment.prototype;
b.Hv = function (a) {
  g.g.o.M(g.g.F.Ct, { class: "blocklyIconShape", r: "8", cx: "8", cy: "8" }, a);
  g.g.o.M(
    g.g.F.se,
    {
      class: "blocklyIconSymbol",
      d:
        "m6.8,10h2c0.003,-0.617 0.271,-0.962 0.633,-1.266 2.875,-2.4050.607,-5.534 -3.765,-3.874v1.7c3.12,-1.657 3.698,0.118 2.336,1.25-1.201,0.998 -1.201,1.528 -1.204,2.19z",
    },
    a
  );
  g.g.o.M(
    g.g.F.Gc,
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
b.jv = function () {
  this.wo = g.g.o.M(g.g.F.rF, { x: g.va.zd, y: g.va.zd }, null);
  var a = document.createElementNS(g.g.o.Gl, "body");
  a.setAttribute("xmlns", g.g.o.Gl);
  a.className = "blocklyMinimalBody";
  var c = (this.ml = document.createElementNS(g.g.o.Gl, "textarea"));
  c.className = "blocklyCommentTextarea";
  c.setAttribute("dir", this.T.L ? "RTL" : "LTR");
  c.value = this.sd.text;
  Ya(this);
  a.appendChild(c);
  this.wo.appendChild(a);
  this.ud = g.ta(c, "mouseup", this, this.rL, !0, !0);
  this.Js = g.ta(c, "wheel", this, function (d) {
    d.stopPropagation();
  });
  this.ys = g.ta(c, "change", this, function () {
    this.Xu != this.sd.text &&
      g.i.Ia(new g.i.ph(this.T, "comment", null, this.Xu, this.sd.text));
  });
  this.Bs = g.ta(c, "input", this, function () {
    this.sd.text = c.value;
  });
  setTimeout(c.focus.bind(c), 0);
  return this.wo;
};
b.yi = function () {
  g.Comment.v.yi.call(this);
  this.isVisible() && (this.Er(), this.yr());
};
b.WJ = function () {
  this.isVisible() && ((this.sd.size = this.nc.Zv()), Ya(this));
};
function Ya(a) {
  var c = a.sd.size,
    d = 2 * g.va.zd,
    e = c.width - d;
  c = c.height - d;
  a.wo.setAttribute("width", e);
  a.wo.setAttribute("height", c);
  a.ml.style.width = e - 4 + "px";
  a.ml.style.height = c - 4 + "px";
}
b.Ob = function (a) {
  a != this.isVisible() &&
    (g.i.Ia(new g.i.Mf(this.T, a, "comment")),
    (this.sd.Gx = a) ? this.yr() : this.Er());
};
b.yr = function () {
  if (!this.T.le() || g.g.userAgent.gf)
    (this.Xk = g.va.Ee(this.T.Qe.text)),
      (this.nc = g.va.gB(this.Xk, this.T, this.dj));
  else {
    this.nc = new g.va(
      this.T.u,
      this.jv(),
      this.T.Gb.Pb,
      this.dj,
      this.sd.size.width,
      this.sd.size.height
    );
    Ra(this.nc, this.T.id);
    var a = this.WJ.bind(this);
    this.nc.Sx = a;
  }
  this.mc();
};
b.Er = function () {
  this.ud && (g.Na(this.ud), (this.ud = null));
  this.Js && (g.Na(this.Js), (this.Js = null));
  this.ys && (g.Na(this.ys), (this.ys = null));
  this.Bs && (g.Na(this.Bs), (this.Bs = null));
  this.nc.J();
  this.Xk = this.wo = this.ml = this.nc = null;
};
b.rL = function () {
  Sa(this.nc) && this.ml.focus();
  this.Xu = this.sd.text;
};
b.Zv = function () {
  return this.sd.size;
};
b.vp = function (a, c) {
  this.nc
    ? this.nc.vp(a, c)
    : ((this.sd.size.width = a), (this.sd.size.height = c));
};
b.J = function () {
  this.T.Yn = null;
  g.re.prototype.J.call(this);
};
g.Qc.register(
  ".blocklyCommentTextarea {,background-color: #fef49c;,border: 0;,outline: 0;,margin: 0;,padding: 3px;,resize: none;,display: block;,text-overflow: hidden;,}".split(
    ","
  )
);
g.H = function () {};
g.H.Tu = null;
g.H.Ff = null;
g.H.nD = null;
g.H.$p = 16;
g.H.My = 1;
g.H.Iy = 12;
g.H.Lz = 16;
g.H.ut = 0.25;
g.H.Ku = null;
g.H.Wk = null;
g.H.jg = "";
g.H.ng = "";
g.H.ab = function () {
  if (!g.H.sg) {
    var a = document.createElement("div");
    a.className = "blocklyDropDownDiv";
    (g.Ks || document.body).appendChild(a);
    g.H.sg = a;
    var c = document.createElement("div");
    c.className = "blocklyDropDownContent";
    a.appendChild(c);
    g.H.Qh = c;
    c = document.createElement("div");
    c.className = "blocklyDropDownArrow";
    a.appendChild(c);
    g.H.pf = c;
    g.H.sg.style.opacity = 0;
    g.H.sg.style.transition =
      "transform " + g.H.ut + "s, opacity " + g.H.ut + "s";
    a.addEventListener("focusin", function () {
      g.g.o.Ha(a, "blocklyFocused");
    });
    a.addEventListener("focusout", function () {
      g.g.o.ic(a, "blocklyFocused");
    });
  }
};
g.H.gL = function (a) {
  g.H.Tu = a;
};
g.H.KB = function () {
  return g.H.Qh;
};
g.H.JH = function () {
  g.H.Qh.textContent = "";
  g.H.Qh.style.width = "";
};
g.H.vd = function (a, c) {
  g.H.sg.style.backgroundColor = a;
  g.H.sg.style.borderColor = c;
};
g.H.RO = function (a, c, d, e) {
  return g.H.CD(g.H.TB(c), a, d, e);
};
g.H.BD = function (a, c) {
  g.H.nD = !0;
  g.H.CD(g.H.UB(a), a, c, void 0);
};
g.H.TB = function (a) {
  var c = a.Pa(),
    d = c.getBBox(),
    e = a.u.scale;
  a = d.height * e;
  d = d.width * e;
  c = g.g.style.yk(c);
  return new g.g.Rect(c.y, c.y + a, c.x, c.x + d);
};
g.H.UB = function (a) {
  a = Za(a);
  return new g.g.Rect(a.top, a.bottom, a.left, a.right);
};
g.H.CD = function (a, c, d, e) {
  var f = a.left + (a.right - a.left) / 2,
    h = a.bottom;
  a = a.top;
  e && (a += e);
  e = c.Z();
  for (var k = e.u; k.options.yc; ) k = k.options.yc;
  g.H.gL(r(k).parentNode);
  return g.H.show(c, e.L, f, h, f, a, d);
};
g.H.show = function (a, c, d, e, f, h, k) {
  g.H.Ff = a;
  g.H.Wk = k || null;
  a = g.H.sg;
  a.style.direction = c ? "rtl" : "ltr";
  c = g.Qg();
  g.H.jg = c.Sb.eg();
  g.H.ng = c.Tg().eg();
  g.g.o.Ha(a, g.H.jg);
  g.g.o.Ha(a, g.H.ng);
  return g.H.gp(d, e, f, h);
};
g.H.CI = function () {
  var a = g.g.style.yk(g.H.Tu),
    c = g.g.style.Xh(g.H.Tu);
  return {
    left: a.x,
    right: a.x + c.width,
    top: a.y,
    bottom: a.y + c.height,
    width: c.width,
    height: c.height,
  };
};
g.H.MI = function (a, c, d, e) {
  var f = g.H.CI(),
    h = g.g.style.Xh(g.H.sg);
  return c + h.height < f.bottom
    ? g.H.SB(a, c, f, h)
    : e - h.height > f.top
    ? g.H.RB(d, e, f, h)
    : c + h.height < document.documentElement.clientHeight
    ? g.H.SB(a, c, f, h)
    : e - h.height > document.documentElement.clientTop
    ? g.H.RB(d, e, f, h)
    : g.H.NI(a, f, h);
};
g.H.SB = function (a, c, d, e) {
  a = g.H.hw(a, d.left, d.right, e.width);
  return {
    sw: a.qm,
    tw: c,
    Sv: a.qm,
    Tv: c + g.H.Lz,
    bm: a.bm,
    Nu: -(g.H.$p / 2 + g.H.My),
    Zq: !0,
    Mu: !0,
  };
};
g.H.RB = function (a, c, d, e) {
  a = g.H.hw(a, d.left, d.right, e.width);
  return {
    sw: a.qm,
    tw: c - e.height,
    Sv: a.qm,
    Tv: c - e.height - g.H.Lz,
    bm: a.bm,
    Nu: e.height - 2 * g.H.My - g.H.$p / 2,
    Zq: !1,
    Mu: !0,
  };
};
g.H.NI = function (a, c, d) {
  a = g.H.hw(a, c.left, c.right, d.width);
  return {
    sw: a.qm,
    tw: 0,
    Sv: a.qm,
    Tv: 0,
    Zq: null,
    bm: null,
    Nu: null,
    Mu: !1,
  };
};
g.H.hw = function (a, c, d, e) {
  var f = a;
  a = g.g.rd.hm(c, a - e / 2, d - e);
  f -= g.H.$p / 2;
  c = g.g.rd.hm(g.H.Iy, f - a, e - g.H.Iy - g.H.$p);
  return { bm: c, qm: a };
};
g.H.isVisible = function () {
  return !!g.H.Ff;
};
g.H.Cm = function (a, c) {
  g.H.Ff === a && (c ? g.H.aj() : g.H.Oa());
};
g.H.Oa = function () {
  var a = g.H.sg;
  a.style.transform = "translate(0, 0)";
  a.style.opacity = 0;
  g.H.Ku = setTimeout(function () {
    g.H.aj();
  }, 1e3 * g.H.ut);
  g.H.Wk && (g.H.Wk(), (g.H.Wk = null));
};
g.H.aj = function () {
  if (g.H.isVisible()) {
    g.H.Ku && clearTimeout(g.H.Ku);
    var a = g.H.sg;
    a.style.transform = "";
    a.style.left = "";
    a.style.top = "";
    a.style.opacity = 0;
    a.style.display = "none";
    a.style.backgroundColor = "";
    a.style.borderColor = "";
    g.H.Wk && (g.H.Wk(), (g.H.Wk = null));
    g.H.JH();
    g.H.Ff = null;
    g.H.jg && (g.g.o.ic(a, g.H.jg), (g.H.jg = ""));
    g.H.ng && (g.g.o.ic(a, g.H.ng), (g.H.ng = ""));
    na(g.Qg());
  }
};
g.H.gp = function (a, c, d, e) {
  a = g.H.MI(a, c, d, e);
  a.Mu
    ? ((g.H.pf.style.display = ""),
      (g.H.pf.style.transform =
        "translate(" + a.bm + "px," + a.Nu + "px) rotate(45deg)"),
      g.H.pf.setAttribute(
        "class",
        a.Zq
          ? "blocklyDropDownArrow blocklyArrowTop"
          : "blocklyDropDownArrow blocklyArrowBottom"
      ))
    : (g.H.pf.style.display = "none");
  c = Math.floor(a.sw);
  d = Math.floor(a.tw);
  e = Math.floor(a.Sv);
  var f = Math.floor(a.Tv),
    h = g.H.sg;
  h.style.left = c + "px";
  h.style.top = d + "px";
  h.style.display = "block";
  h.style.opacity = 1;
  h.style.transform = "translate(" + (e - c) + "px," + (f - d) + "px)";
  return !!a.Zq;
};
g.H.KO = function () {
  if (g.H.Ff) {
    var a = g.H.Ff,
      c = a.Z();
    a = g.H.nD ? g.H.UB(a) : g.H.TB(c);
    c = a.left + (a.right - a.left) / 2;
    g.H.gp(c, a.bottom, c, a.top);
  } else g.H.Oa();
};
g.G = function (a, c, d) {
  if (!c) throw Error("Cannot create a node without a location.");
  this.Op = a;
  this.Fm = g.G.mJ(a);
  this.Ga = c;
  this.qt = null;
  (a = d || null) && a.dE && (this.qt = a.dE);
};
g.G.types = {
  Ec: "field",
  qc: "block",
  hf: "input",
  Zj: "output",
  Ad: "next",
  Bd: "previous",
  xg: "stack",
  ad: "workspace",
};
g.G.Ii = !1;
g.G.ME = -20;
g.G.mJ = function (a) {
  switch (a) {
    case g.G.types.Bd:
    case g.G.types.Ad:
    case g.G.types.hf:
    case g.G.types.Zj:
      return !0;
  }
  return !1;
};
g.G.mm = function (a) {
  return a ? new g.G(g.G.types.Ec, a) : null;
};
g.G.Kg = function (a) {
  return a
    ? a.type == g.lb || (a.type == g.gb && a.Sg())
      ? g.G.mk(a.Sg())
      : a.type == g.gb
      ? new g.G(g.G.types.Ad, a)
      : a.type == g.Sf
      ? new g.G(g.G.types.Zj, a)
      : a.type == g.Tf
      ? new g.G(g.G.types.Bd, a)
      : null
    : null;
};
g.G.mk = function (a) {
  return a && a.connection ? new g.G(g.G.types.hf, a.connection) : null;
};
g.G.Jg = function (a) {
  return a ? new g.G(g.G.types.qc, a) : null;
};
g.G.io = function (a) {
  return a ? new g.G(g.G.types.xg, a) : null;
};
g.G.nm = function (a, c) {
  return c && a ? new g.G(g.G.types.ad, a, { dE: c }) : null;
};
g.G.mv = function (a) {
  var c = a.ka || a.O;
  return c ? g.G.Kg(c) : g.G.Jg(a);
};
b = g.G.prototype;
b.wb = function () {
  return this.Op;
};
function $a(a, c) {
  a = a.Ga;
  a instanceof g.qe || (a = a.Z());
  if (!a || !a.u) return null;
  var d = a.ie();
  a = d.u.dc(!0);
  for (var e = 0, f; (f = a[e]); e++)
    if (d.id == f.id)
      return (
        (c = e + (c ? 1 : -1)), -1 == c || c == a.length ? null : g.G.io(a[c])
      );
  throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}
function ab(a) {
  if (!a) return null;
  do var c = a.ka && a.ka.sa();
  while (c && q(c) == a && (a = c));
  return (c = a.ka || a.O) && c.oa && c.oa.Sg() ? g.G.mk(c.oa.Sg()) : g.G.io(a);
}
b.Z = function () {
  return this.wb() === g.G.types.qc
    ? this.Ga
    : this.wb() === g.G.types.xg
    ? this.Ga
    : this.wb() === g.G.types.ad
    ? null
    : this.Ga.Z();
};
b.next = function () {
  switch (this.Op) {
    case g.G.types.xg:
      return $a(this, !0);
    case g.G.types.Zj:
      var a = this.Ga;
      return g.G.Jg(a.Z());
    case g.G.types.Ec:
      a: {
        var c = this.Ga,
          d = c.Sg();
        a = c.Z();
        c = d.ib.indexOf(c) + 1;
        d = a.V.indexOf(d);
        for (var e; (e = a.V[d]); d++) {
          for (var f = e.ib; c < f.length; ) {
            if (bb(f[c]) || g.G.Ii) {
              a = g.G.mm(f[c]);
              break a;
            }
            c++;
          }
          c = 0;
          if (e.connection) {
            a = g.G.mk(e);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.G.types.hf:
      a: {
        c = this.Ga.Sg();
        a = c.Z();
        for (c = a.V.indexOf(c) + 1; (d = a.V[c]); c++) {
          e = d.ib;
          f = 0;
          for (var h; (h = e[f]); f++)
            if (bb(h) || g.G.Ii) {
              a = g.G.mm(h);
              break a;
            }
          if (d.connection) {
            a = g.G.mk(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.G.types.qc:
      return g.G.Kg(this.Ga.Y);
    case g.G.types.Bd:
      return (a = this.Ga), g.G.Jg(a.Z());
    case g.G.types.Ad:
      return (a = this.Ga), g.G.Kg(a.oa);
  }
  return null;
};
b.Xg = function () {
  switch (this.Op) {
    case g.G.types.ad:
      var a = this.Ga.dc(!0);
      if (0 < a.length) return g.G.io(a[0]);
      break;
    case g.G.types.xg:
      a = this.Ga;
      var c = a.ka || a.O;
      return c ? g.G.Kg(c) : g.G.Jg(a);
    case g.G.types.qc:
      a = this.Ga;
      a: {
        a = a.V;
        c = 0;
        for (var d; (d = a[c]); c++) {
          for (var e = d.ib, f = 0, h; (h = e[f]); f++)
            if (bb(h) || g.G.Ii) {
              a = g.G.mm(h);
              break a;
            }
          if (d.connection) {
            a = g.G.mk(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.G.types.hf:
      return g.G.Kg(this.Ga.oa);
  }
  return null;
};
b.Hf = function () {
  switch (this.Op) {
    case g.G.types.xg:
      return $a(this, !1);
    case g.G.types.Ec:
      a: {
        var a = this.Ga;
        var c = a.Sg();
        var d = a.Z();
        a = c.ib.indexOf(a) - 1;
        for (var e = d.V.indexOf(c), f; (f = d.V[e]); e--) {
          if (f.connection && f !== c) {
            c = g.G.mk(f);
            break a;
          }
          for (f = f.ib; -1 < a; ) {
            if (bb(f[a]) || g.G.Ii) {
              c = g.G.mm(f[a]);
              break a;
            }
            a--;
          }
          0 <= e - 1 && (a = d.V[e - 1].ib.length - 1);
        }
        c = null;
      }
      return c;
    case g.G.types.hf:
      a: {
        c = this.Ga.Sg();
        d = c.Z();
        for (a = d.V.indexOf(c); (e = d.V[a]); a--) {
          if (e.connection && e !== c) {
            c = g.G.mk(e);
            break a;
          }
          e = e.ib;
          f = e.length - 1;
          for (var h; (h = e[f]); f--)
            if (bb(h) || g.G.Ii) {
              c = g.G.mm(h);
              break a;
            }
        }
        c = null;
      }
      return c;
    case g.G.types.qc:
      return (c = this.Ga), g.G.Kg(c.ka || c.O);
    case g.G.types.Bd:
      c = this.Ga;
      if ((c = c.oa) && !c.Sg()) return g.G.Kg(c);
      break;
    case g.G.types.Ad:
      return (c = this.Ga), g.G.Jg(c.Z());
  }
  return null;
};
b.dh = function () {
  switch (this.Op) {
    case g.G.types.xg:
      var a = this.Ga,
        c = a.bb();
      return g.G.nm(a.u, new g.g.aa(c.x, c.y + g.G.ME));
    case g.G.types.Zj:
      return (a = this.Ga), (c = a.oa) ? g.G.Kg(c) : g.G.io(a.Z());
    case g.G.types.Ec:
      return g.G.Jg(this.Ga.Z());
    case g.G.types.hf:
      return (a = this.Ga), g.G.Jg(a.Z());
    case g.G.types.qc:
      return (a = this.Ga), ab(a);
    case g.G.types.Bd:
      return (a = this.Ga), ab(a.Z());
    case g.G.types.Ad:
      return (a = this.Ga), ab(a.Z());
  }
  return null;
};
g.Kb = {};
g.Kb.Bv = 0;
g.Kb.Cr = null;
g.Kb.jI = function (a) {
  var c = a.u,
    d = a.Pa();
  c.Dg.play("delete");
  a = cb(c, d);
  d = d.cloneNode(!0);
  d.DL = a.x;
  d.EL = a.y;
  d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  r(c).appendChild(d);
  d.GA = d.getBBox();
  g.Kb.uB(d, c.L, new Date(), c.scale);
};
g.Kb.uB = function (a, c, d, e) {
  var f = (new Date() - d) / 150;
  1 < f
    ? g.g.o.removeNode(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.DL + (((c ? -1 : 1) * a.GA.width * e) / 2) * f) +
          "," +
          (a.EL + a.GA.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(g.Kb.uB, 10, a, c, d, e));
};
g.Kb.QH = function (a) {
  var c = a.u,
    d = c.scale;
  c.Dg.play("click");
  if (!(1 > d)) {
    var e = cb(c, a.Pa());
    a.O
      ? ((e.x += (a.L ? 3 : -3) * d), (e.y += 13 * d))
      : a.ka && ((e.x += (a.L ? -23 : 23) * d), (e.y += 3 * d));
    a = g.g.o.M(
      g.g.F.Ct,
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
    g.Kb.ZA(a, new Date(), d);
  }
};
g.Kb.ZA = function (a, c, d) {
  var e = (new Date() - c) / 150;
  1 < e
    ? g.g.o.removeNode(a)
    : (a.setAttribute("r", 25 * e * d),
      (a.style.opacity = 1 - e),
      (g.Kb.Bv = setTimeout(g.Kb.ZA, 10, a, c, d)));
};
g.Kb.iI = function (a) {
  a.u.Dg.play("disconnect");
  if (!(1 > a.u.scale)) {
    var c = E(a).height;
    c = (Math.atan(10 / c) / Math.PI) * 180;
    a.L || (c *= -1);
    g.Kb.tB(a.Pa(), c, new Date());
  }
};
g.Kb.tB = function (a, c, d) {
  var e = (new Date() - d) / 200;
  1 < e
    ? (a.Cp = "")
    : ((a.Cp =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")"),
      (g.Kb.Cr = a),
      (g.Kb.Bv = setTimeout(g.Kb.tB, 10, a, c, d)));
  a.setAttribute("transform", a.Np + a.Cp);
};
g.Kb.Cv = function () {
  if (g.Kb.Cr) {
    clearTimeout(g.Kb.Bv);
    var a = g.Kb.Cr;
    a.Cp = "";
    a.setAttribute("transform", a.Np);
    g.Kb.Cr = null;
  }
};
g.i.rg = function (a, c, d) {
  g.i.rg.v.constructor.call(this, a ? a.u.id : void 0);
  this.ub = a ? a.id : null;
  this.xC = c;
  this.HA = d;
};
g.g.object.X(g.i.rg, g.i.Ne);
g.i.rg.prototype.type = g.i.Ky;
g.i.rg.prototype.ya = function () {
  var a = g.i.rg.v.ya.call(this);
  a.isStart = this.xC;
  a.blockId = this.ub;
  a.blocks = this.HA;
  return a;
};
g.i.rg.prototype.ma = function (a) {
  g.i.rg.v.ma.call(this, a);
  this.xC = a.isStart;
  this.ub = a.blockId;
  this.HA = a.blocks;
};
g.C.register(g.C.ea.kc, g.i.Ky, g.i.rg);
g.Rf = function (a) {
  this.ui = g.selected = a;
  this.s = a.u;
  this.mj = this.Dw = null;
  this.uo = db(this, this.ui);
  this.Kd = this.vc = null;
  this.oh = !1;
  this.so = this.pw = this.Nk = null;
  this.$q = eb(this);
};
g.Rf.Rl = { St: 0, IF: 1, Wz: 2 };
g.Rf.prototype.J = function () {
  this.$q.length = 0;
  g.i.disable();
  try {
    this.uo && this.uo.J(), this.mj && this.mj.J();
  } finally {
    g.i.enable();
  }
};
g.Rf.prototype.update = function (a, c) {
  var d = this.vc && this.Kd ? g.yE : g.Vd;
  for (var e = null, f = null, h = 0; h < this.$q.length; h++) {
    var k = this.$q[h],
      l = k.closest(d, a);
    l.connection && ((e = l.connection), (f = k), (d = l.Os));
  }
  e = ((d = { closest: e, local: f, Os: d }), !!d.closest) && c != g.Xy;
  if (
    (this.oh = !!c && !this.ui.getParent() && this.ui.Be() && !e) ||
    fb(this, d, a)
  ) {
    g.i.disable();
    d.closest
      ? ((a = this.vc != d.closest),
        (c = this.Kd != d.local),
        this.vc && this.Kd && (a || c || this.oh) && gb(this))
      : gb(this);
    this.Kd = this.vc = this.Nk = null;
    if (!this.oh && ((a = d.closest), (c = d.local), a))
      if (a == this.vc || a.Z().me())
        console.log("Trying to connect to an insertion marker");
      else {
        this.vc = a;
        this.Kd = c;
        a = this.vc;
        d = this.Kd;
        c = this.ui;
        d.type == g.Sf || d.type == g.Tf
          ? ((e = !a.isConnected()) ||
              ((e = a.sa()),
              d.type == g.Sf
                ? ((d = e.O), (c = g.Ba.CC(c, e)))
                : ((d = e.ka), (c = c.ks())),
              (e = c ? ra(hb(d), c, d, !1) : !1)),
            (c = e ? g.Rf.Rl.St : g.Rf.Rl.Wz))
          : (c = g.Rf.Rl.St);
        switch (c) {
          case g.Rf.Rl.IF:
            this.pw = this.vc.Z();
            break;
          case g.Rf.Rl.St:
            e = this.Kd;
            c = this.vc;
            d = this.Dw && e == this.Dw ? this.mj : this.uo;
            e = d.ew(e.Z(), e);
            if (e == this.Nk)
              throw Error(
                "Made it to showInsertionMarker_ even though the marker isn't changing"
              );
            d.Ja();
            d.ra = !0;
            d.Pa().setAttribute("visibility", "visible");
            e && c && ib(d, e, c);
            c && e.connect(c);
            this.Nk = e;
            break;
          case g.Rf.Rl.Wz:
            (this.so = this.vc.sa()), jb(this.so.Gb, "blocklyReplaceable", !0);
        }
        a &&
          ((d = a.I.u.Sb.W()),
          (c = kb(d, a)),
          a.type == g.lb || a.type == g.Sf
            ? ((d = d.Wl),
              (c =
                g.g.D.moveBy(0, -d) +
                g.g.D.qa("v", d) +
                c.Gf +
                g.g.D.qa("v", d)))
            : ((d = d.En - d.Tb),
              (c =
                g.g.D.moveBy(-d, 0) +
                g.g.D.qa("h", d) +
                c.tj +
                g.g.D.qa("h", d))),
          (d = a.I.bb()),
          (g.Ba.mC = g.g.o.M(
            g.g.F.se,
            {
              class: "blocklyHighlightedConnectionPath",
              d: c,
              transform:
                "translate(" +
                (a.x - d.x) +
                "," +
                (a.y - d.y) +
                ")" +
                (a.I.L ? " scale(-1 1)" : ""),
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
    var e = a.s.bh(d);
    e.AD(!0);
    if (c.Xa) {
      var f = c.Xa();
      f && e.Eb(f);
    }
    for (a = 0; a < c.V.length; a++) {
      var h = c.V[a];
      if (h.name != g.qe.sn) {
        var k = e.V[a];
        for (d = 0; d < h.ib.length; d++) k.ib[d].setValue(h.ib[d].getValue());
      }
    }
    e.Bj(c.isCollapsed());
    e.Ce(lb(c));
    e.Ae();
    e.Pa().setAttribute("visibility", "hidden");
  } finally {
    g.i.enable();
  }
  return e;
}
function eb(a) {
  var c = a.ui.fg(!1),
    d = a.ui.ks();
  if (d && d != a.ui.Y) {
    c.push(d);
    a.Dw = d;
    if (a.mj) {
      g.i.disable();
      try {
        a.mj.J();
      } finally {
        g.i.enable();
      }
    }
    a.mj = db(a, d.Z());
  }
  return c;
}
function fb(a, c, d) {
  var e = c.local,
    f = c.closest;
  c = c.Os;
  if (e && f) {
    if (a.Kd && a.vc) {
      if (a.vc == f && a.Kd == e) return !1;
      e = a.Kd.x + d.x - a.vc.x;
      a = a.Kd.y + d.y - a.vc.y;
      a = Math.sqrt(e * e + a * a);
      return !(f && c > a - g.DE);
    }
    if (a.Kd || a.vc)
      console.error(
        "Only one of localConnection_ and closestConnection_ was set."
      );
    else return !0;
  } else return !(!a.Kd || !a.vc);
  console.error(
    "Returning true from shouldUpdatePreviews, but it's not clear why."
  );
  return !0;
}
function gb(a) {
  a.vc && a.vc.sa() && (g.g.o.removeNode(g.Ba.mC), delete g.Ba.mC);
  if (a.so) jb(a.so.Gb, "blocklyReplaceable", !1), (a.so = null);
  else if (a.pw) a.pw = null;
  else if (a.Nk)
    if (a.Nk) {
      var c = a.Nk,
        d = c.Z(),
        e = d.Y,
        f = d.ka,
        h = d.O;
      h = c.type == g.lb && !(h && h.oa);
      !(c != e || (f && f.oa)) || h
        ? y(c.sa(), !1)
        : c.type == g.gb && c != e
        ? ((e = c.oa),
          y(e.Z(), !1),
          (f = f ? f.oa : null),
          y(d, !0),
          f && f.connect(e))
        : y(d, !0);
      if (c.oa)
        throw Error(
          "markerConnection_ still connected at the end of disconnectInsertionMarker"
        );
      a.Nk = null;
      d.Pa().setAttribute("visibility", "hidden");
    } else console.log("No insertion marker connection to disconnect");
}
g.Rf.prototype.xm = function () {
  var a = [];
  this.uo && a.push(this.uo);
  this.mj && a.push(this.mj);
  return a;
};
g.Kj = function (a, c) {
  this.Rb = a;
  this.s = c;
  this.Og = new g.Rf(this.Rb);
  this.pk = null;
  this.oh = !1;
  this.lh = this.Rb.bb();
  this.Gr = g.Kj.iJ(a);
};
g.Kj.prototype.J = function () {
  this.Gr.length = 0;
  this.Og && this.Og.J();
};
g.Kj.iJ = function (a) {
  var c = [];
  a = p(a, !1);
  for (var d = 0, e; (e = a[d]); d++) {
    e = mb(e);
    for (var f = 0; f < e.length; f++)
      c.push({ location: e[f].dj, icon: e[f] });
  }
  return c;
};
function nb(a, c, d) {
  d = a.Rm(d);
  var e = g.g.aa.sum(a.lh, d);
  a.Rb.$w(e);
  for (e = 0; e < a.Gr.length; e++) {
    var f = a.Gr[e],
      h = f.icon;
    f = g.g.aa.sum(f.location, d);
    h.dj = f;
    h.isVisible() && ((h = h.nc), (h.uc = f), h.Us && Pa(h));
  }
  a.pk = ob(a.s, c);
  a.Og.update(d, a.pk);
  a.oh = a.Og.oh;
  c = a.s.xd;
  a.oh
    ? (a.Rb.xp(!0), a.pk == g.Ht && c && pb(c, !0))
    : (a.Rb.xp(!1), c && pb(c, !1));
}
function qb(a, c, d) {
  nb(a, c, d);
  a.Gr = [];
  c = new g.i.rg(a.Rb, !1, p(a.Rb, !1));
  g.i.Ia(c);
  g.g.o.Ep();
  g.Kb.Cv();
  d = a.Rm(d);
  c = g.g.aa.sum(a.lh, d);
  var e = a.Rb;
  e.Up && (e.translate(c.x, c.y), e.u.Oe.mr(e.u.Hb));
  c = a.s.xd;
  a.oh
    ? (c && setTimeout(c.qr.bind(c), 100), a.to(), a.Rb.J(!1, !0), (g.rm = []))
    : c && c.qr();
  a.oh ||
    (rb(a.Rb, d.x, d.y),
    a.Rb.Dj(!1),
    a.to(),
    a.Og.vc
      ? ((d = a.Og),
        d.vc &&
          (g.i.disable(),
          gb(d),
          g.i.enable(),
          d.Kd.connect(d.vc),
          d.ui.ra && (g.Kb.QH((t(d.Kd) ? d.vc : d.Kd).Z()), sb(d.ui.ie()))))
      : a.Rb.Ja(),
    tb(a.Rb));
  a.s.hd(!0);
  (d = a.s.Ma) &&
    "function" == typeof d.Qs &&
    d.Qs(a.Rb.Be() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.i.na(!1);
}
g.Kj.prototype.to = function () {
  var a = new g.i.qn(this.Rb);
  a.hx = this.lh;
  a.bl();
  g.i.Ia(a);
};
g.Kj.prototype.Rm = function (a) {
  a = new g.g.aa(a.x / this.s.scale, a.y / this.s.scale);
  this.s.Qo && a.scale(1 / this.s.options.yc.scale);
  return a;
};
g.Kj.prototype.xm = function () {
  return this.Og && this.Og.xm ? this.Og.xm() : [];
};
g.i.qh = function (a) {
  this.Fg = (this.Ye = "undefined" == typeof a) ? "" : a.id;
  this.Zc = this.Ye ? "" : a.u.id;
  this.group = g.i.xc();
  this.eb = g.i.eb;
};
g.g.object.X(g.i.qh, g.i.Abstract);
g.i.qh.prototype.ya = function () {
  var a = g.i.qh.v.ya.call(this);
  this.Fg && (a.commentId = this.Fg);
  return a;
};
g.i.qh.prototype.ma = function (a) {
  g.i.qh.v.ma.call(this, a);
  this.Fg = a.commentId;
};
g.i.Al = function (a, c, d) {
  g.i.Al.v.constructor.call(this, a);
  a &&
    ((this.SC = "undefined" == typeof c ? "" : c),
    (this.xs = "undefined" == typeof d ? "" : d));
};
g.g.object.X(g.i.Al, g.i.qh);
b = g.i.Al.prototype;
b.type = g.i.Oy;
b.ya = function () {
  var a = g.i.Al.v.ya.call(this);
  a.newContents = this.xs;
  return a;
};
b.ma = function (a) {
  g.i.Al.v.ma.call(this, a);
  this.xs = a.newValue;
};
b.Jm = function () {
  return this.SC == this.xs;
};
b.run = function (a) {
  var c;
  (c = ya(this).vr[this.Fg] || null)
    ? c.OO(a ? this.xs : this.SC)
    : console.warn("Can't change non-existent comment: " + this.Fg);
};
g.i.rh = function (a) {
  g.i.rh.v.constructor.call(this, a);
  a && (this.xml = a.OD());
};
g.g.object.X(g.i.rh, g.i.qh);
g.i.rh.prototype.type = g.i.lq;
g.i.rh.prototype.ya = function () {
  var a = g.i.rh.v.ya.call(this);
  a.xml = g.S.ee(this.xml);
  return a;
};
g.i.rh.prototype.ma = function (a) {
  g.i.rh.v.ma.call(this, a);
  this.xml = g.S.Ee(a.xml);
};
g.i.rh.prototype.run = function (a) {
  g.i.Ry(this, a);
};
g.i.Ry = function (a, c) {
  var d = ya(a);
  c
    ? ((c = g.g.xml.createElement("xml")), c.appendChild(a.xml), g.S.Ui(c, d))
    : (d = d.vr[a.Fg] || null)
    ? d.J(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + a.Fg);
};
g.i.sh = function (a) {
  g.i.sh.v.constructor.call(this, a);
  a && (this.xml = a.OD());
};
g.g.object.X(g.i.sh, g.i.qh);
g.i.sh.prototype.type = g.i.Py;
g.i.sh.prototype.ya = function () {
  return g.i.sh.v.ya.call(this);
};
g.i.sh.prototype.ma = function (a) {
  g.i.sh.v.ma.call(this, a);
};
g.i.sh.prototype.run = function (a) {
  g.i.Ry(this, !a);
};
g.i.Nj = function (a) {
  g.i.Nj.v.constructor.call(this, a);
  a && ((this.dv = a), (this.ix = a.cC()), (this.Sk = null));
};
g.g.object.X(g.i.Nj, g.i.qh);
b = g.i.Nj.prototype;
b.bl = function () {
  if (!this.dv)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.Sk = this.dv.cC();
  this.dv = null;
};
b.type = g.i.mq;
b.ya = function () {
  var a = g.i.Nj.v.ya.call(this);
  this.Sk &&
    (a.newCoordinate = Math.round(this.Sk.x) + "," + Math.round(this.Sk.y));
  return a;
};
b.ma = function (a) {
  g.i.Nj.v.ma.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.Sk = new g.g.aa(Number(a[0]), Number(a[1]))));
};
b.Jm = function () {
  return g.g.aa.wf(this.ix, this.Sk);
};
b.run = function (a) {
  var c;
  if ((c = ya(this).vr[this.Fg] || null)) {
    a = a ? this.Sk : this.ix;
    var d = c.cC();
    c.moveBy(a.x - d.x, a.y - d.y);
  } else console.warn("Can't move non-existent comment: " + this.Fg);
};
g.C.register(g.C.ea.kc, g.i.lq, g.i.rh);
g.C.register(g.C.ea.kc, g.i.Oy, g.i.Al);
g.C.register(g.C.ea.kc, g.i.mq, g.i.Nj);
g.C.register(g.C.ea.kc, g.i.Py, g.i.sh);
g.hq = function (a, c) {
  this.Tc = a;
  this.s = c;
  this.pk = null;
  this.ot = !1;
  this.lh = this.Tc.bb();
  this.rk = g.g.Gk() && c.Oe ? c.Oe : null;
};
g.hq.prototype.J = function () {
  this.rk = this.s = this.Tc = null;
};
function ub(a, c, d) {
  d = a.Rm(d);
  d = g.g.aa.sum(a.lh, d);
  a.Tc.$w(a.rk, d);
  a.Tc.Be() &&
    ((a.pk = ob(a.s, c)),
    (a.ot = a.pk != g.Wy),
    (c = a.s.xd),
    a.ot
      ? (a.Tc.xp(!0), a.pk == g.Ht && c && pb(c, !0))
      : (a.Tc.xp(!1), c && pb(c, !1)));
}
function vb(a, c, d) {
  ub(a, c, d);
  c = a.Rm(d);
  c = g.g.aa.sum(a.lh, c);
  a.Tc.moveTo(c.x, c.y);
  c = a.s.xd;
  a.ot
    ? (c && setTimeout(c.qr.bind(c), 100), a.to(), a.Tc.J(!1, !0))
    : c && c.qr();
  a.ot || (a.rk && a.rk.mr(a.s.mg), a.Tc.Dj && a.Tc.Dj(!1), a.to());
  a.s.hd(!0);
  (c = a.s.Ma) &&
    "function" == typeof c.Qs &&
    c.Qs(a.Tc.Be() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.i.na(!1);
}
g.hq.prototype.to = function () {
  if (this.Tc.zO) {
    var a = new g.i.Nj(this.Tc);
    a.ix = this.lh;
    a.bl();
    g.i.Ia(a);
  }
};
g.hq.prototype.Rm = function (a) {
  a = new g.g.aa(a.x / this.s.scale, a.y / this.s.scale);
  this.s.Qo && a.scale(1 / this.s.options.yc.scale);
  return a;
};
g.i.Nf = function (a, c, d) {
  g.i.Nf.v.constructor.call(this, a ? a.u.id : c);
  this.ub = a ? a.id : null;
  this.LD = d;
};
g.g.object.X(g.i.Nf, g.i.Ne);
g.i.Nf.prototype.type = g.i.Dt;
g.i.Nf.prototype.ya = function () {
  var a = g.i.Nf.v.ya.call(this);
  a.targetType = this.LD;
  this.ub && (a.blockId = this.ub);
  return a;
};
g.i.Nf.prototype.ma = function (a) {
  g.i.Nf.v.ma.call(this, a);
  this.LD = a.targetType;
  this.ub = a.blockId;
};
g.C.register(g.C.ea.kc, g.i.Dt, g.i.Nf);
g.Sn = function (a) {
  this.s = a;
  this.HD = new g.g.aa(a.scrollX, a.scrollY);
};
g.Sn.prototype.J = function () {
  this.s = null;
};
g.Sn.prototype.ly = function () {
  g.selected && wb(g.selected);
  pa(this.s);
};
g.Sn.prototype.Vi = function (a) {
  a = g.g.aa.sum(this.HD, a);
  this.s.scroll(a.x, a.y);
};
g.yq = function (a) {
  g.yq.v.constructor.call(this, a.s);
  this.yD = a.Ta;
  this.Bk = a.Id;
};
g.g.object.X(g.yq, g.Sn);
g.yq.prototype.Vi = function (a) {
  a = g.g.aa.sum(this.HD, a);
  this.Bk ? this.yD.set(-a.x) : this.yD.set(-a.y);
};
g.navigation = {};
g.navigation.Nm = null;
g.navigation.Tl = 1;
g.navigation.Wf = 2;
g.navigation.Ul = 3;
g.navigation.vA = 40;
g.navigation.Te = g.navigation.Wf;
g.navigation.qb = {
  Bd: "previous",
  Ad: "next",
  zq: "in",
  Jq: "out",
  sz: "insert",
  fG: "mark",
  QE: "disconnect",
  Rq: "toolbox",
  $E: "exit",
  cH: "toggle_keyboard_nav",
  pG: "move workspace cursor up",
  mG: "move workspace cursor down",
  nG: "move workspace cursor left",
  oG: "move workspace cursor right",
};
g.navigation.An = "local_marker_1";
g.navigation.ge = function () {
  return g.navigation.Rg().ge(g.navigation.An);
};
g.navigation.Rg = function () {
  return g.Qg();
};
g.navigation.EB = function (a) {
  if ((a = a.Ma))
    if (
      ((g.navigation.Te = g.navigation.Ul),
      g.navigation.wD(!1),
      g.navigation.ge().rb || g.navigation.Sw(),
      !a.xb && 0 < a.Lb.length)
    ) {
      var c = a.Lb[0];
      c.$g() && xb(a, c);
    }
};
g.navigation.DB = function (a) {
  g.navigation.Te = g.navigation.Tl;
  var c = a.Ma;
  a = c ? c.oc() : a.oc();
  g.navigation.ge().rb || g.navigation.Sw();
  a &&
    a.s &&
    ((a = a.s.dc(!0)),
    0 < a.length && ((a = a[0]), (a = g.G.io(a)), F(g.navigation.wm(), a)));
};
g.navigation.Lr = function (a) {
  g.Jc();
  var c = a.Nb(),
    d = !!a.Ma,
    e = a.dc(!0);
  g.navigation.wD(d);
  g.navigation.Te = g.navigation.Wf;
  0 < e.length
    ? F(c, g.G.mv(e[0]))
    : ((a = g.G.nm(a, new g.g.aa(100, 100))), F(c, a));
};
g.navigation.wm = function () {
  var a = g.navigation.Rg(),
    c = null;
  a.ra && (c = (a = (c = a.Ma) ? c.oc() : a.oc()) ? a.s.Nb() : null);
  return c;
};
g.navigation.lJ = function (a) {
  var c = a.oc();
  if (c && c.isVisible()) {
    var d = g.navigation.wm().rb.Ga;
    d.isEnabled()
      ? ((c = yb(c, d)),
        c.Ja(),
        Ea(c, !0),
        F(a.Nb(), g.G.Jg(c)),
        g.navigation.KC() ||
          g.navigation.Nd(
            "Something went wrong while inserting a block from the flyout."
          ),
        g.navigation.Lr(a),
        F(a.Nb(), g.G.mv(c)),
        g.navigation.ZK())
      : g.navigation.Nd("Can't insert a disabled block.");
  } else
    g.navigation.Nd(
      "Trying to insert from the flyout when the flyout does not  exist or is not visible"
    );
};
g.navigation.wD = function (a) {
  g.navigation.wm() &&
    (g.navigation.wm().Oa(), a && g.navigation.Rg().oc().Oa());
};
g.navigation.CJ = function () {
  var a = g.navigation.ge().rb,
    c = g.navigation.Rg().Nb().rb;
  if (!a) return g.navigation.Nd("Cannot insert with no marked node."), !1;
  if (!c) return g.navigation.Nd("Cannot insert with no cursor node."), !1;
  a = a.wb();
  c = c.wb();
  return a == g.G.types.Ec
    ? (g.navigation.Nd("Should not have been able to mark a field."), !1)
    : a == g.G.types.qc
    ? (g.navigation.Nd("Should not have been able to mark a block."), !1)
    : a == g.G.types.xg
    ? (g.navigation.Nd("Should not have been able to mark a stack."), !1)
    : c == g.G.types.Ec
    ? (g.navigation.Nd("Cannot attach a field to anything else."), !1)
    : c == g.G.types.ad
    ? (g.navigation.Nd("Cannot attach a workspace to anything else."), !1)
    : !0;
};
g.navigation.HJ = function (a, c) {
  if (!a) return !1;
  if (a.Ra)
    return g.navigation.Nd("Cannot move a shadow block to the workspace."), !1;
  a.getParent() && y(a, !1);
  a.moveTo(c.qt);
  return !0;
};
g.navigation.KC = function () {
  var a = g.navigation.ge().rb,
    c = g.navigation.Rg().Nb().rb;
  if (!g.navigation.CJ()) return !1;
  var d = a.wb(),
    e = c.wb(),
    f = c.Ga,
    h = a.Ga;
  if (a.Fm && c.Fm) return g.navigation.$f(f, h);
  if (a.Fm && (e == g.G.types.qc || e == g.G.types.xg))
    return g.navigation.qC(f, h);
  if (d == g.G.types.ad) return (c = c ? c.Z() : null), g.navigation.HJ(c, a);
  g.navigation.Nd("Unexpected state in Blockly.navigation.modify_.");
  return !1;
};
g.navigation.hI = function (a, c) {
  var d = a.Z(),
    e = c.Z();
  d.ie() == e.ie() &&
    (-1 < p(d, !1).indexOf(e)
      ? g.navigation.Pr(c).disconnect()
      : g.navigation.Pr(a).disconnect());
};
g.navigation.Yw = function (a, c) {
  if (!a || !c) return !1;
  var d = a.Z();
  return ra(hb(a), a, c, !1)
    ? (g.navigation.hI(a, c), t(c) || ib(d.ie(), a, c), c.connect(a), !0)
    : !1;
};
g.navigation.Pr = function (a) {
  var c = a.Z();
  return t(a) ? (c.ka ? c.ka : c.O ? c.O : null) : a;
};
g.navigation.ZB = function (a) {
  return t(a) ? a : a.oa ? a.oa : null;
};
g.navigation.$f = function (a, c) {
  if (!a || !c) return !1;
  var d = g.navigation.Pr(a),
    e = g.navigation.ZB(c),
    f = g.navigation.ZB(a),
    h = g.navigation.Pr(c);
  if (
    (d && e && g.navigation.Yw(d, e)) ||
    (f && h && g.navigation.Yw(f, h)) ||
    g.navigation.Yw(a, c)
  )
    return !0;
  d = hb(a).ir(a, c, !1);
  g.navigation.Nd("Connection failed with error: " + va(d, a, c));
  return !1;
};
g.navigation.qC = function (a, c) {
  switch (c.type) {
    case g.Tf:
      if (g.navigation.$f(a.Y, c)) return !0;
      break;
    case g.gb:
      if (g.navigation.$f(a.ka, c)) return !0;
      break;
    case g.lb:
      if (g.navigation.$f(a.O, c)) return !0;
      break;
    case g.Sf:
      for (var d = 0; d < a.V.length; d++) {
        var e = a.V[d].connection;
        if (e && e.type === g.lb && g.navigation.$f(e, c)) return !0;
      }
      if (a.O && g.navigation.$f(a.O, c)) return !0;
  }
  g.navigation.Nd("This block can not be inserted at the marked location.");
  return !1;
};
g.navigation.gI = function (a) {
  var c = a.Nb().rb;
  if (c.Fm) {
    var d = c.Ga;
    d.isConnected()
      ? ((c = t(d) ? d : d.oa),
        (d = t(d) ? d.oa : d),
        d.Z().Ra
          ? g.navigation.Lw("Cannot disconnect a shadow block")
          : (c.disconnect(),
            zb(d, c),
            sb(c.Z().ie()),
            (c = g.G.Kg(c)),
            F(a.Nb(), c)))
      : g.navigation.Lw("Cannot disconnect unconnected connection");
  } else
    g.navigation.Lw(
      "Cannot disconnect blocks when the cursor is not on a connection"
    );
};
g.navigation.Sw = function () {
  F(g.navigation.ge(), g.navigation.Rg().Nb().rb);
};
g.navigation.ZK = function () {
  var a = g.navigation.ge();
  F(a, null);
  a.Oa();
};
g.navigation.Zb = function (a) {
  g.navigation.Te = a;
};
g.navigation.IJ = function (a) {
  var c = g.navigation.Rg();
  if (c && (c = c.Nb())) {
    var d = c.rb;
    d = d ? d.Z() : null;
    d === a
      ? d.getParent()
        ? (a = d.ka || d.O) && F(c, g.G.Kg(a.oa))
        : F(c, g.G.nm(d.u, d.bb()))
      : d && -1 < Ba(a, !1).indexOf(d) && F(c, g.G.nm(d.u, d.bb()));
  }
};
g.navigation.JJ = function (a) {
  var c = g.navigation.Rg().Nb();
  if (c) {
    var d = c.rb;
    d = d ? d.Z() : null;
    d === a && F(c, g.G.Jg(d));
  }
};
g.navigation.qI = function () {
  var a = g.navigation.Rg();
  a.Fb || ((a.Fb = !0), g.navigation.Lr(a));
};
g.navigation.eI = function () {
  var a = g.navigation.Rg();
  a.Fb &&
    ((a.Fb = !1),
    a.Nb().Oa(),
    g.navigation.ge().Oa(),
    g.navigation.wm() && g.navigation.wm().Oa());
};
g.navigation.Lw = function (a) {
  g.navigation.Nm ? g.navigation.Nm("log", a) : console.log(a);
};
g.navigation.Nd = function (a) {
  g.navigation.Nm ? g.navigation.Nm("warn", a) : console.warn(a);
};
g.navigation.tO = function (a) {
  g.navigation.Nm ? g.navigation.Nm("error", a) : console.error(a);
};
g.navigation.ws = function (a, c, d) {
  var e = a.Nb(),
    f = a.Nb().rb;
  if (f.wb() !== g.G.types.ad) return !1;
  f = f.qt;
  F(
    e,
    g.G.nm(a, new g.g.aa(c * g.navigation.vA + f.x, d * g.navigation.vA + f.y))
  );
  return !0;
};
g.navigation.VI = function (a) {
  a = a.Nb().rb;
  var c = a.wb();
  c == g.G.types.Ec
    ? ((a = a.Ga), bb(a) && a.lg(void 0))
    : a.Fm || c == g.G.types.ad
    ? g.navigation.Sw()
    : c == g.G.types.qc
    ? g.navigation.Nd("Cannot mark a block.")
    : c == g.G.types.xg && g.navigation.Nd("Cannot mark a stack.");
};
g.navigation.RK = function () {
  var a = {
    name: g.navigation.qb.Bd,
    cb: function (c) {
      return c.Fb;
    },
    Aa: function (c, d, e) {
      d = c.Ma;
      switch (g.navigation.Te) {
        case g.navigation.Wf:
          return c.Nb().Yb(e);
        case g.navigation.Tl:
          return (c = d ? d.oc() : c.oc()), !(!c || !c.Yb(e));
        case g.navigation.Ul:
          return d && "function" == typeof d.Yb ? d.Yb(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.rA, a.name);
};
g.navigation.PK = function () {
  var a = {
    name: g.navigation.qb.Jq,
    cb: function (c) {
      return c.Fb;
    },
    Aa: function (c, d, e) {
      switch (g.navigation.Te) {
        case g.navigation.Wf:
          return c.Nb().Yb(e);
        case g.navigation.Tl:
          return g.navigation.EB(c), !0;
        case g.navigation.Ul:
          return (c = c.Ma) && "function" == typeof c.Yb ? c.Yb(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Dy, a.name);
};
g.navigation.OK = function () {
  var a = {
    name: g.navigation.qb.Ad,
    cb: function (c) {
      return c.Fb;
    },
    Aa: function (c, d, e) {
      d = c.Ma;
      switch (g.navigation.Te) {
        case g.navigation.Wf:
          return c.Nb().Yb(e);
        case g.navigation.Tl:
          return (c = d ? d.oc() : c.oc()), !(!c || !c.Yb(e));
        case g.navigation.Ul:
          return d && "function" == typeof d.Yb ? d.Yb(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Xz, a.name);
};
g.navigation.JK = function () {
  var a = {
    name: g.navigation.qb.zq,
    cb: function (c) {
      return c.Fb;
    },
    Aa: function (c, d, e) {
      switch (g.navigation.Te) {
        case g.navigation.Wf:
          return c.Nb().Yb(e);
        case g.navigation.Ul:
          return (
            ((d = c.Ma) && "function" == typeof d.Yb && d.Yb(e)) ||
              g.navigation.DB(c),
            !0
          );
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Ty, a.name);
};
g.navigation.LK = function () {
  var a = {
    name: g.navigation.qb.sz,
    cb: function (c) {
      return c.Fb && !c.options.readOnly;
    },
    Aa: function () {
      switch (g.navigation.Te) {
        case g.navigation.Wf:
          return g.navigation.KC();
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.FF, a.name);
};
g.navigation.MK = function () {
  var a = {
    name: g.navigation.qb.fG,
    cb: function (c) {
      return c.Fb && !c.options.readOnly;
    },
    Aa: function (c) {
      switch (g.navigation.Te) {
        case g.navigation.Wf:
          return g.navigation.VI(c), !0;
        case g.navigation.Tl:
          return g.navigation.lJ(c), !0;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Dl, a.name);
};
g.navigation.DK = function () {
  var a = {
    name: g.navigation.qb.QE,
    cb: function (c) {
      return c.Fb && !c.options.readOnly;
    },
    Aa: function (c) {
      switch (g.navigation.Te) {
        case g.navigation.Wf:
          return g.navigation.gI(c), !0;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Uq, a.name);
};
g.navigation.TK = function () {
  var a = {
    name: g.navigation.qb.Rq,
    cb: function (c) {
      return c.Fb && !c.options.readOnly;
    },
    Aa: function (c) {
      switch (g.navigation.Te) {
        case g.navigation.Wf:
          return c.Ma ? g.navigation.EB(c) : g.navigation.DB(c), !0;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a);
  G(g.g.P.TG, a.name);
};
g.navigation.GK = function () {
  var a = {
    name: g.navigation.qb.$E,
    cb: function (c) {
      return c.Fb;
    },
    Aa: function (c) {
      switch (g.navigation.Te) {
        case g.navigation.Tl:
          return g.navigation.Lr(c), !0;
        case g.navigation.Ul:
          return g.navigation.Lr(c), !0;
        default:
          return !1;
      }
    },
  };
  g.mb.C.register(a, !0);
  G(g.g.P.Kt, a.name, !0);
  G(g.g.P.E, a.name, !0);
};
g.navigation.SK = function () {
  var a = {
    name: g.navigation.qb.cH,
    Aa: function (d) {
      d.Fb ? g.navigation.eI() : g.navigation.qI();
      return !0;
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.PF, [g.g.P.zi, g.g.P.Dh]);
  G(c, a.name);
};
g.navigation.VK = function () {
  var a = {
    name: g.navigation.qb.nG,
    cb: function (d) {
      return d.Fb && !d.options.readOnly;
    },
    Aa: function (d) {
      return g.navigation.ws(d, -1, 0);
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.Dy, [g.g.P.Dh]);
  G(c, a.name);
};
g.navigation.WK = function () {
  var a = {
    name: g.navigation.qb.oG,
    cb: function (d) {
      return d.Fb && !d.options.readOnly;
    },
    Aa: function (d) {
      return g.navigation.ws(d, 1, 0);
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.Ty, [g.g.P.Dh]);
  G(c, a.name);
};
g.navigation.XK = function () {
  var a = {
    name: g.navigation.qb.pG,
    cb: function (d) {
      return d.Fb && !d.options.readOnly;
    },
    Aa: function (d) {
      return g.navigation.ws(d, 0, -1);
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.rA, [g.g.P.Dh]);
  G(c, a.name);
};
g.navigation.UK = function () {
  var a = {
    name: g.navigation.qb.mG,
    cb: function (d) {
      return d.Fb && !d.options.readOnly;
    },
    Aa: function (d) {
      return g.navigation.ws(d, 0, 1);
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.Xz, [g.g.P.Dh]);
  G(c, a.name);
};
g.navigation.NK = function () {
  g.navigation.JK();
  g.navigation.OK();
  g.navigation.PK();
  g.navigation.RK();
  g.navigation.UK();
  g.navigation.VK();
  g.navigation.WK();
  g.navigation.XK();
  g.navigation.DK();
  g.navigation.GK();
  g.navigation.LK();
  g.navigation.MK();
  g.navigation.SK();
  g.navigation.TK();
};
g.K = {};
g.K.visible = !1;
g.K.fm = !1;
g.K.TF = 50;
g.K.MC = 0;
g.K.Bp = 0;
g.K.Fw = 0;
g.K.Gw = 0;
g.K.Mb = null;
g.K.fp = null;
g.K.Hz = 0;
g.K.Iz = 10;
g.K.HG = 10;
g.K.CF = 750;
g.K.Yt = 5;
g.K.pb = null;
g.K.QI = function () {
  var a = g.K.aC(g.K.Mb);
  if (a) {
    for (a = a.Kf; "function" == typeof a; ) a = a();
    if ("string" != typeof a)
      throw Error("Tooltip function must return a string.");
    return a;
  }
  return "";
};
g.K.aC = function (a) {
  for (; a && a.Kf; ) {
    if ("string" == typeof a.Kf || "function" == typeof a.Kf) return a;
    a = a.Kf;
  }
  return null;
};
g.K.ab = function () {
  g.K.pb ||
    ((g.K.pb = document.createElement("div")),
    (g.K.pb.className = "blocklyTooltipDiv"),
    (g.Ks || document.body).appendChild(g.K.pb));
};
g.K.em = function (a) {
  a.FJ = g.Yd(a, "mouseover", null, g.K.eK);
  a.DJ = g.Yd(a, "mouseout", null, g.K.dK);
  a.addEventListener("mousemove", g.K.Gs, !1);
};
g.K.xy = function (a) {
  a && (g.Na(a.FJ), g.Na(a.DJ), a.removeEventListener("mousemove", g.K.Gs));
};
g.K.eK = function (a) {
  g.K.fm ||
    ((a = g.K.aC(a.currentTarget)),
    g.K.Mb != a && (g.K.Oa(), (g.K.fp = null), (g.K.Mb = a)),
    clearTimeout(g.K.MC));
};
g.K.dK = function () {
  g.K.fm ||
    ((g.K.MC = setTimeout(function () {
      g.K.Mb = null;
      g.K.fp = null;
      g.K.Oa();
    }, 1)),
    clearTimeout(g.K.Bp));
};
g.K.Gs = function (a) {
  if (g.K.Mb && g.K.Mb.Kf && !g.K.fm)
    if (g.K.visible) {
      var c = g.K.Fw - a.pageX;
      a = g.K.Gw - a.pageY;
      Math.sqrt(c * c + a * a) > g.K.HG && g.K.Oa();
    } else
      g.K.fp != g.K.Mb &&
        (clearTimeout(g.K.Bp),
        (g.K.Fw = a.pageX),
        (g.K.Gw = a.pageY),
        (g.K.Bp = setTimeout(g.K.mL, g.K.CF)));
};
g.K.J = function () {
  g.K.Mb = null;
  g.K.fp = null;
  g.K.Oa();
};
g.K.Oa = function () {
  g.K.visible &&
    ((g.K.visible = !1), g.K.pb && (g.K.pb.style.display = "none"));
  g.K.Bp && clearTimeout(g.K.Bp);
};
g.K.block = function () {
  g.K.Oa();
  g.K.fm = !0;
};
g.K.GL = function () {
  g.K.fm = !1;
};
g.K.mL = function () {
  if (!g.K.fm && ((g.K.fp = g.K.Mb), g.K.pb)) {
    g.K.pb.textContent = "";
    var a = g.K.QI();
    a = g.g.yb.bE(a, g.K.TF);
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) {
      var d = document.createElement("div");
      d.appendChild(document.createTextNode(a[c]));
      g.K.pb.appendChild(d);
    }
    a = g.K.Mb.L;
    c = document.documentElement.clientWidth;
    d = document.documentElement.clientHeight;
    g.K.pb.style.direction = a ? "rtl" : "ltr";
    g.K.pb.style.display = "block";
    g.K.visible = !0;
    var e = g.K.Fw;
    e = a ? e - (g.K.Hz + g.K.pb.offsetWidth) : e + g.K.Hz;
    var f = g.K.Gw + g.K.Iz;
    f + g.K.pb.offsetHeight > d + window.scrollY &&
      (f -= g.K.pb.offsetHeight + 2 * g.K.Iz);
    a
      ? (e = Math.max(g.K.Yt - window.scrollX, e))
      : e + g.K.pb.offsetWidth > c + window.scrollX - 2 * g.K.Yt &&
        (e = c - g.K.pb.offsetWidth - 2 * g.K.Yt);
    g.K.pb.style.top = f + "px";
    g.K.pb.style.left = e + "px";
  }
};
g.ug = function (a, c) {
  this.LC = null;
  this.ae = new g.g.aa(0, 0);
  this.zc = this.Oc = this.$m = this.an = this.df = null;
  this.nv = c;
  this.Mo = this.Ik = this.No = this.zk = !1;
  this.Cf = a;
  this.pa = this.wl = this.Eg = this.Oi = this.Is = this.Hs = null;
  this.$r = this.Ak = this.MA = !1;
  this.iC = !g.SE;
};
b = g.ug.prototype;
b.J = function () {
  g.Touch.jk();
  g.K.GL();
  this.nv.Ed = null;
  this.Hs && g.Na(this.Hs);
  this.Is && g.Na(this.Is);
  this.Eg && this.Eg.J();
  this.wl && this.wl.J();
  this.Oi && this.Oi.J();
};
function Ab(a, c) {
  a.ae = g.g.aa.oo(new g.g.aa(c.clientX, c.clientY), a.LC);
  if (a.zk) var d = !1;
  else (a.zk = g.g.aa.AJ(a.ae) > (a.pa ? g.qF : g.RE)), (d = a.zk);
  if (d) {
    if (a.MA)
      throw Error("updateIsDragging_ should only be called once per gesture.");
    a.MA = !0;
    if (a.df) {
      a.Mo = !0;
      a.Oi = new g.hq(a.df, a.zc);
      d = a.Oi;
      g.i.xc() || g.i.na(!0);
      d.s.hd(!1);
      d.Tc.Ou = !1;
      d.rk && (d.Tc.moveTo(0, 0), d.rk.ol(d.lh.x, d.lh.y), Bb(d.rk, d.Tc.Pa()));
      d.Tc.Dj && d.Tc.Dj(!0);
      var e = d.s.Ma;
      e &&
        "function" == typeof e.Wq &&
        e.Wq(d.Tc.Be() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      ub(a.Oi, a.Cf, a.ae);
      d = !0;
    } else d = !1;
    if (!d) {
      if (a.Oc)
        if (
          (a.pa
            ? (a.Oc && a.Oc.isEnabled()
                ? ((d = !Cb(a.pa)) ||
                    ((d = a.ae),
                    (d = (Math.atan2(d.y, d.x) / Math.PI) * 180),
                    (e = a.pa.nI),
                    (d =
                      (d < e && d > -e) || d < -180 + e || d > 180 - e
                        ? !0
                        : !1)),
                  d
                    ? ((a.zc = a.pa.fb),
                      Db(a.zc),
                      g.i.xc() || g.i.na(!0),
                      (a.$m = null),
                      (a.Oc = yb(a.pa, a.Oc)),
                      a.Oc.select(),
                      (d = !0))
                    : (d = !1))
                : (d = !1),
              (a.Ik = d))
            : a.Oc.Lc() && (a.Ik = !0),
          a.Ik)
        ) {
          a.Eg = new g.Kj(a.Oc, a.zc);
          d = a.Eg;
          e = a.ae;
          var f = a.iC;
          g.i.xc() || g.i.na(!0);
          var h = new g.i.rg(d.Rb, !0, p(d.Rb, !1));
          g.i.Ia(h);
          d.s.Qo && sb(d.Rb);
          g.g.o.Dp();
          d.s.hd(!1);
          g.Kb.Cv();
          if (d.Rb.getParent() || (f && d.Rb.Y && d.Rb.Y.sa()))
            y(d.Rb, f),
              (e = d.Rm(e)),
              (e = g.g.aa.sum(d.lh, e)),
              d.Rb.translate(e.x, e.y),
              g.Kb.iI(d.Rb),
              (e = d.Og),
              (e.$q = eb(e));
          d.Rb.Dj(!0);
          e = d.Rb;
          e.Up &&
            ((f = e.bb()),
            e.Pa().removeAttribute("transform"),
            e.u.Oe.ol(f.x, f.y),
            (f = e.Pa()) && Bb(e.u.Oe, f));
          (e = d.s.Ma) &&
            "function" == typeof e.Wq &&
            e.Wq(d.Rb.Be() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
          nb(a.Eg, a.Cf, a.ae);
          d = !0;
        } else d = !1;
      else d = !1;
      if ((d = !d))
        if (a.pa) d = Cb(a.pa);
        else if ((d = a.zc)) (d = a.zc), (d = d.options.gd && d.options.gd.Vi);
      d &&
        ((a.wl = a.pa ? new g.yq(a.pa) : new g.Sn(a.zc)),
        (a.No = !0),
        a.wl.ly());
    }
    g.oj();
  }
  a.Cf = c;
}
b.Ev = function (a) {
  g.g.fs(a)
    ? this.cancel()
    : ((this.Ak = !0),
      g.Kb.Cv(),
      Db(this.zc),
      this.zc.Qo && this.zc.resize(),
      g.Jc(!!this.pa),
      na(this.zc),
      (this.Cf = a),
      g.K.block(),
      this.Oc &&
        (!this.Oc.Ub && a.shiftKey && this.Oc.u.Fb
          ? F(this.nv.Nb(), g.G.mv(this.Oc))
          : this.Oc.select()),
      g.g.Lk(a)
        ? ba(this, a)
        : (("touchstart" != a.type.toLowerCase() &&
            "pointerdown" != a.type.toLowerCase()) ||
            "mouse" == a.pointerType ||
            g.yJ(a, this),
          (this.LC = new g.g.aa(a.clientX, a.clientY)),
          (this.iC = a.altKey || a.ctrlKey || a.metaKey),
          this.em(a)));
};
b.em = function (a) {
  this.Hs = g.ta(document, "mousemove", null, this.Am.bind(this));
  this.Is = g.ta(document, "mouseup", null, this.Vr.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
b.Am = function (a) {
  Ab(this, a);
  this.No
    ? this.wl.Vi(this.ae)
    : this.Ik
    ? nb(this.Eg, this.Cf, this.ae)
    : this.Mo && ub(this.Oi, this.Cf, this.ae);
  a.preventDefault();
  a.stopPropagation();
};
b.Vr = function (a) {
  Ab(this, a);
  g.oj();
  if (this.$r) console.log("Trying to end a gesture recursively.");
  else {
    this.$r = !0;
    if (this.Mo) vb(this.Oi, a, this.ae);
    else if (this.Ik) qb(this.Eg, a, this.ae);
    else if (this.No) {
      var c = this.wl;
      c.Vi(this.ae);
      qa(c.s);
    } else if (this.df && !this.zk)
      this.df.iL && this.df.iL(), this.df.select && this.df.select();
    else if (Eb(this)) {
      c = this.an;
      var d = this.Cf;
      bb(c) && c.lg(d);
      Fb(this);
    } else
      !this.$m || this.zk || Eb(this)
        ? this.$m ||
          this.df ||
          this.an ||
          this.zk ||
          ((c = this.nv),
          a.shiftKey && c.Fb
            ? ((d = g.g.eL(c, new g.g.aa(a.clientX, a.clientY))),
              (d = g.G.nm(c, d)),
              F(c.Nb(), d))
            : g.selected && wb(g.selected),
          (c = new g.i.Nf(null, (this.zc || c).id, "workspace")),
          g.i.Ia(c))
        : (this.pa && this.pa.dm
            ? this.Oc.isEnabled() &&
              (g.i.xc() || g.i.na(!0), tb(yb(this.pa, this.Oc)))
            : ((c = new g.i.Nf(this.$m, this.zc.id, "block")), g.i.Ia(c)),
          Fb(this),
          g.i.na(!1));
    a.preventDefault();
    a.stopPropagation();
    this.J();
  }
};
b.cancel = function () {
  if (!this.$r) {
    g.oj();
    if (this.Mo) vb(this.Oi, this.Cf, this.ae);
    else if (this.Ik) qb(this.Eg, this.Cf, this.ae);
    else if (this.No) {
      var a = this.wl;
      a.Vi(this.ae);
      qa(a.s);
    }
    this.J();
  }
};
function ba(a, c) {
  a.Oc
    ? (Fb(a), g.Jc(!!a.pa), a.Oc.Ap(c))
    : a.df
    ? a.df.Ap(c)
    : a.zc && !a.pa && (g.Jc(), a.zc.Ap(c));
  c.preventDefault();
  c.stopPropagation();
  a.J();
}
function Gb(a, c, d) {
  if (a.Ak)
    throw Error(
      "Tried to call gesture.handleWsStart, but the gesture had already been started."
    );
  a.zc || (a.zc = d);
  a.Cf = c;
  a.Ev(c);
  a.zc.Fb && g.navigation.Zb(g.navigation.Wf);
}
function Hb(a, c, d) {
  if (a.Ak)
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
  a.$m || a.df || ((a.$m = c), c.Ub && c != c.ie() ? Jb(a, c.ie()) : Jb(a, c));
}
function Jb(a, c) {
  c.Ra ? Jb(a, c.getParent()) : (a.Oc = c);
}
function Eb(a) {
  return (a.an ? bb(a.an) : !1) && !a.zk && (!a.pa || !a.pa.dm);
}
b.Kc = function () {
  return this.No || this.Ik || this.Mo;
};
b.xm = function () {
  return this.Eg ? this.Eg.xm() : [];
};
g.ug.Dk = function () {
  for (var a = g.Wb.getAll(), c = 0, d; (d = a[c]); c++) if (d.Ed) return !0;
  return !1;
};
g.kd = function (a, c, d) {
  this.sb = this.Oj;
  this.SD = this.rl = null;
  this.Nc = new g.g.ue(0, 0);
  this.B = this.Xw = this.pi = this.Pc = this.Db = this.fe = this.gi = this.Rh = null;
  d && this.Dd(d);
  this.setValue(a);
  c && (this.rl = c);
};
b = g.kd.prototype;
b.Oj = null;
b.name = void 0;
b.ag = !1;
b.ps = 50;
b.I = null;
b.Zg = !0;
b.Ij = !0;
b.nr = null;
g.kd.Gq = "\u00a0";
b = g.kd.prototype;
b.tn = !0;
b.ck = !1;
b.Dd = function (a) {
  var c = a.tooltip;
  "string" == typeof c && (c = g.g.Mc(a.tooltip));
  c && this.Sa(c);
};
b.ay = function (a) {
  if (this.I) throw Error("Field already bound to a block.");
  this.I = a;
};
b.W = function () {
  !this.B && this.I && this.I.u && this.I.u.ra && (this.B = this.I.u.Sb.W());
  return this.B;
};
b.Z = function () {
  return this.I;
};
b.U = function () {
  this.fe ||
    ((this.fe = g.g.o.M(g.g.F.rc, {}, null)),
    this.isVisible() || (this.fe.style.display = "none"),
    this.I.Pa().appendChild(this.fe),
    this.$h(),
    this.yi(),
    this.Sa(this.SD),
    g.K.em(Kb(this)),
    (this.Xw = g.ta(Kb(this), "mousedown", this, this.sj)),
    this.Ek());
};
b.$h = function () {
  Lb(this);
  Mb(this);
};
b.Ek = function () {};
function Lb(a) {
  a.Db = g.g.o.M(
    g.g.F.Gc,
    {
      rx: a.W().wq,
      ry: a.W().wq,
      x: 0,
      y: 0,
      height: a.Nc.height,
      width: a.Nc.width,
      class: "blocklyFieldRect",
    },
    a.fe
  );
}
function Mb(a) {
  a.Pc = g.g.o.M(g.g.F.Qq, { class: "blocklyText" }, a.fe);
  a.W().Pt && a.Pc.setAttribute("dominant-baseline", "central");
  a.pi = document.createTextNode("");
  a.Pc.appendChild(a.pi);
}
b.tm = function (a) {
  this.setValue(a.textContent);
};
b.sy = function (a) {
  a.textContent = this.getValue();
  return a;
};
b.J = function () {
  g.H.Cm(this);
  g.la.Cm(this);
  g.K.xy(Kb(this));
  this.Xw && g.Na(this.Xw);
  g.g.o.removeNode(this.fe);
  this.ag = !0;
};
b.yi = function () {
  var a = this.fe;
  this.tn &&
    a &&
    (this.I.le()
      ? (g.g.o.Ha(a, "blocklyEditableText"),
        g.g.o.ic(a, "blocklyNonEditableText"),
        (a.style.cursor = this.pq))
      : (g.g.o.Ha(a, "blocklyNonEditableText"),
        g.g.o.ic(a, "blocklyEditableText"),
        (a.style.cursor = "")));
};
function bb(a) {
  return !!a.I && a.I.le() && !!a.lg && "function" === typeof a.lg;
}
b.isVisible = function () {
  return this.Ij;
};
b.Ob = function (a) {
  if (this.Ij != a) {
    this.Ij = a;
    var c = this.Pa();
    c && (c.style.display = a ? "block" : "none");
  }
};
function Nb(a, c) {
  a.rl = c;
}
b.bC = function () {
  return this.rl;
};
b.Pa = function () {
  return this.fe;
};
b.mc = function () {};
b.cl = function () {
  this.pi && (this.pi.nodeValue = this.vm());
  this.Sp();
};
b.Sp = function (a) {
  var c = this.W();
  a = void 0 != a ? a : this.Db ? this.W().wh : 0;
  var d = 2 * a,
    e = c.Rj,
    f = 0;
  this.Pc && ((f = g.g.o.cw(this.Pc, c.xh, c.Di, c.Ci)), (d += f));
  this.Db && (e = Math.max(e, c.Mt));
  this.Nc.height = e;
  this.Nc.width = d;
  Ob(this, a, f);
  Pb(this);
};
function Ob(a, c, d) {
  if (a.Pc) {
    var e = a.W(),
      f = a.Nc.height / 2;
    a.Pc.setAttribute("x", a.I.L ? a.Nc.width - d - c : c);
    a.Pc.setAttribute("y", e.Pt ? f : f - e.Rj / 2 + e.Ot);
  }
}
function Pb(a) {
  a.Db &&
    (a.Db.setAttribute("width", a.Nc.width),
    a.Db.setAttribute("height", a.Nc.height),
    a.Db.setAttribute("rx", a.W().wq),
    a.Db.setAttribute("ry", a.W().wq));
}
b.Xh = function () {
  if (!this.isVisible()) return new g.g.ue(0, 0);
  this.Zg
    ? (this.cl(), (this.Zg = !1))
    : this.Ij &&
      0 == this.Nc.width &&
      (console.warn(
        "Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."
      ),
      this.cl());
  return this.Nc;
};
function Za(a) {
  if (a.Db)
    (c = a.Db.getBoundingClientRect()),
      (a = g.g.style.yk(a.Db)),
      (e = c.width),
      (c = c.height);
  else {
    var c = E(a.I),
      d = a.I.u.scale;
    a = g.g.style.yk(Kb(a));
    var e = c.width * d;
    c = c.height * d;
    g.g.userAgent.kz
      ? ((a.x += 1.5 * d), (a.y += 1.5 * d))
      : g.g.userAgent.Qj ||
        g.g.userAgent.gf ||
        ((a.x -= 0.5 * d), (a.y -= 0.5 * d));
    e += 1 * d;
    c += 1 * d;
  }
  return new g.g.Rect(a.y, a.y + c, a.x, a.x + e);
}
b.vm = function () {
  var a = this.Gd();
  if (!a) return g.kd.Gq;
  a.length > this.ps && (a = a.substring(0, this.ps - 2) + "\u2026");
  a = a.replace(/\s/g, g.kd.Gq);
  this.I && this.I.L && (a += "\u200f");
  return a;
};
b.Gd = function () {
  if (this.Tr) {
    var a = this.Tr.call(this);
    if (null !== a) return String(a);
  }
  return String(this.getValue());
};
b.Vo = function () {
  this.Zg = !0;
  this.B = null;
};
function Qb(a) {
  a.Zg = !0;
  a.I && a.I.ra && (a.I.Ja(), a.I.cc(), a.zy());
}
b.setValue = function (a) {
  if (null !== a) {
    var c = this.Uh(a);
    a = Rb(this, a, c);
    if (!(a instanceof Error)) {
      if ((c = this.bC()))
        if (((c = c.call(this, a)), (a = Rb(this, a, c)), a instanceof Error))
          return;
      c = this.I;
      if (!c || !c.ag) {
        var d = this.getValue();
        d === a
          ? this.cg(a)
          : (c &&
              g.i.isEnabled() &&
              g.i.Ia(new g.i.ph(c, "field", this.name || null, d, a)),
            this.cg(a),
            this.Zg && Qb(this));
      }
    }
  }
};
function Rb(a, c, d) {
  if (null === d) return a.vB(), a.Zg && Qb(a), Error();
  void 0 !== d && (c = d);
  return c;
}
b.getValue = function () {
  return this.sb;
};
b.Uh = function (a) {
  return null === a || void 0 === a ? null : a;
};
b.cg = function (a) {
  this.sb = a;
  this.Zg = !0;
};
b.vB = function () {};
b.sj = function (a) {
  if (this.I && this.I.u && (a = this.I.u.Wh(a))) {
    if (a.Ak)
      throw Error(
        "Tried to call gesture.setStartField, but the gesture had already been started."
      );
    a.an || (a.an = this);
  }
};
b.Sa = function (a) {
  a || "" === a || (a = this.I);
  var c = Kb(this);
  c ? (c.Kf = a) : (this.SD = a);
};
function Kb(a) {
  return a.nr || a.Pa();
}
b.mp = function () {
  return !1;
};
b.Sg = function () {
  for (var a = null, c = this.I, d = c.V, e = 0; e < c.V.length; e++)
    for (var f = d[e], h = f.ib, k = 0; k < h.length; k++)
      if (h[k] === this) {
        a = f;
        break;
      }
  return a;
};
b.PB = function () {
  return !1;
};
b.yC = function () {
  return !1;
};
b.Yb = function () {
  return !1;
};
b.mi = function (a) {
  a ? (this.fe.appendChild(a), (this.Rh = a)) : (this.Rh = null);
};
b.ni = function (a) {
  a ? (this.fe.appendChild(a), (this.gi = a)) : (this.gi = null);
};
b.zy = function () {
  var a = this.I.u;
  a.Fb && this.Rh && a.Nb().draw();
  a.Fb && this.gi && a.ge(g.navigation.An).draw();
};
g.Ve = {};
g.Ve.register = function (a, c) {
  g.C.register(g.C.ea.Ec, a, c);
};
g.Ve.unregister = function (a) {
  g.C.unregister(g.C.ea.Ec, a);
};
g.Ve.ma = function (a) {
  var c = g.C.gw(g.C.ea.Ec, a.type);
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
g.g.$.iE = "aria-";
g.g.$.KG = "role";
g.g.$.Vf = {
  wF: "grid",
  xF: "gridcell",
  yF: "group",
  UF: "listbox",
  iG: "menu",
  jG: "menuitem",
  UM: "menuitemcheckbox",
  tG: "option",
  BG: "presentation",
  Kq: "row",
  fH: "tree",
  gH: "treeitem",
};
g.g.$.State = {
  Yp: "activedescendant",
  uE: "colcount",
  PE: "disabled",
  az: "expanded",
  Dq: "invalid",
  zz: "label",
  RF: "labelledby",
  SF: "level",
  JN: "orientation",
  QN: "posinset",
  LG: "rowcount",
  bk: "selected",
  YN: "setsize",
  iH: "valuemax",
  jH: "valuemin",
};
g.g.$.pe = function (a, c) {
  a.setAttribute(g.g.$.KG, c);
};
g.g.$.Zb = function (a, c, d) {
  Array.isArray(d) && (d = d.join(" "));
  a.setAttribute(g.g.$.iE + c, d);
};
g.g.P = {
  kO: 0,
  PM: 3,
  lE: 8,
  UG: 9,
  $M: 12,
  Dl: 13,
  Dh: 16,
  zi: 17,
  zl: 18,
  MN: 19,
  YL: 20,
  Kt: 27,
  $z: 32,
  yG: 33,
  xG: 34,
  YE: 35,
  BF: 36,
  Wj: 37,
  Du: 38,
  $j: 39,
  Jt: 40,
  PN: 43,
  RN: 44,
  sz: 45,
  Pj: 46,
  ZERO: 48,
  ONE: 49,
  fO: 50,
  dO: 51,
  FM: 52,
  EM: 53,
  aO: 54,
  ZN: 55,
  kM: 56,
  YM: 57,
  CM: 59,
  AM: 61,
  zM: 173,
  BM: 163,
  SN: 63,
  TL: 64,
  Dy: 65,
  VL: 66,
  At: 67,
  Ty: 68,
  E: 69,
  mM: 70,
  rc: 71,
  GM: 72,
  FF: 73,
  KM: 74,
  PF: 75,
  LM: 76,
  OM: 77,
  XM: 78,
  pN: 79,
  KN: 80,
  Q: 81,
  TN: 82,
  Xz: 83,
  TG: 84,
  gO: 85,
  Eu: 86,
  rA: 87,
  Uq: 88,
  oH: 89,
  am: 90,
  Nl: 91,
  lO: 92,
  cM: 93,
  oN: 96,
  hN: 97,
  nN: 98,
  mN: 99,
  dN: 100,
  cN: 101,
  lN: 102,
  kN: 103,
  bN: 104,
  gN: 105,
  fN: 106,
  jN: 107,
  eN: 109,
  iN: 110,
  aN: 111,
  nM: 112,
  rM: 113,
  sM: 114,
  tM: 115,
  uM: 116,
  vM: 117,
  wM: 118,
  xM: 119,
  yM: 120,
  oM: 121,
  pM: 122,
  qM: 123,
  ZM: 144,
  WN: 145,
  DM: 166,
  MM: 183,
  XN: 186,
  eM: 189,
  lM: 187,
  bM: 188,
  NN: 190,
  bO: 191,
  SL: 192,
  eO: 192,
  $N: 222,
  qN: 219,
  WL: 220,
  aM: 221,
  jO: 224,
  QM: 224,
  RM: 91,
  SM: 93,
  iO: 229,
  hO: 252,
  ON: 255,
};
g.lc = function (a, c, d) {
  g.lc.v.constructor.call(this, a, c, d);
  this.ii = this.Fs = this.Es = this.$e = this.zs = this.bj = this.gh = null;
};
g.g.object.X(g.lc, g.kd);
g.lc.ma = function (a) {
  return new g.lc(a.colour, void 0, a);
};
b = g.lc.prototype;
b.ck = !0;
b.pq = "default";
b.Zg = !1;
b.cv = null;
b.ND = null;
b.Xn = 0;
b.Dd = function (a) {
  g.lc.v.Dd.call(this, a);
  a.colourOptions && ((this.cv = a.colourOptions), (this.ND = a.colourTitles));
  a.columns && (this.Xn = a.columns);
};
b.$h = function () {
  this.Nc = new g.g.ue(this.W().jF, this.W().iF);
  this.W().dz
    ? (this.nr = this.I.Pa())
    : (Lb(this), (this.Db.style.fillOpacity = "1"));
};
b.mc = function () {
  this.W().dz
    ? (this.I.Gb.Pb.setAttribute("fill", this.getValue()),
      this.I.Gb.Pb.setAttribute("stroke", "#fff"))
    : this.Db && (this.Db.style.fill = this.getValue());
};
b.Uh = function (a) {
  return "string" != typeof a ? null : g.g.vb.parse(a);
};
b.cg = function (a) {
  this.sb = a;
  this.Db
    ? (this.Db.style.fill = a)
    : this.I &&
      this.I.ra &&
      (this.I.Gb.Pb.setAttribute("fill", a),
      this.I.Gb.Pb.setAttribute("stroke", "#fff"));
};
b.Gd = function () {
  var a = this.sb;
  /^#(.)\1(.)\2(.)\3$/.test(a) && (a = "#" + a[1] + a[3] + a[5]);
  return a;
};
g.lc.jq = "#ffffff #cccccc #c0c0c0 #999999 #666666 #333333 #000000 #ffcccc #ff6666 #ff0000 #cc0000 #990000 #660000 #330000 #ffcc99 #ff9966 #ff9900 #ff6600 #cc6600 #993300 #663300 #ffff99 #ffff66 #ffcc66 #ffcc33 #cc9933 #996633 #663333 #ffffcc #ffff33 #ffff00 #ffcc00 #999900 #666600 #333300 #99ff99 #66ff99 #33ff33 #33cc00 #009900 #006600 #003300 #99ffff #33ffff #66cccc #00cccc #339999 #336666 #003333 #ccffff #66ffff #33ccff #3366ff #3333ff #000099 #000066 #ccccff #9999ff #6666cc #6633ff #6600cc #333399 #330099 #ffccff #ff99ff #cc66cc #cc33cc #993399 #663366 #330033".split(
  " "
);
g.lc.prototype.Oj = g.lc.jq[0];
g.lc.bH = [];
g.lc.kq = 7;
b = g.lc.prototype;
b.setColumns = function (a) {
  this.Xn = a;
  return this;
};
b.lg = function () {
  this.gh = this.Nv();
  g.H.KB().appendChild(this.gh);
  g.H.BD(this, this.Ov.bind(this));
  this.gh.focus({ preventScroll: !0 });
};
b.lx = function (a) {
  a = (a = a.target) && a.label;
  null !== a && (this.setValue(a), g.H.Cm(this));
};
b.ox = function (a) {
  var c = !1;
  if (a.keyCode === g.g.P.Du) Sb(this, 0, -1), (c = !0);
  else if (a.keyCode === g.g.P.Jt) Sb(this, 0, 1), (c = !0);
  else if (a.keyCode === g.g.P.Wj) Sb(this, -1, 0), (c = !0);
  else if (a.keyCode === g.g.P.$j) Sb(this, 1, 0), (c = !0);
  else if (a.keyCode === g.g.P.Dl) {
    if ((c = Tb(this))) (c = c && c.label), null !== c && this.setValue(c);
    g.H.aj();
    c = !0;
  }
  c && a.stopPropagation();
};
b.Yb = function (a) {
  if (this.gh)
    switch (a.name) {
      case g.navigation.qb.Bd:
        return Sb(this, 0, -1), !0;
      case g.navigation.qb.Ad:
        return Sb(this, 0, 1), !0;
      case g.navigation.qb.Jq:
        return Sb(this, -1, 0), !0;
      case g.navigation.qb.zq:
        return Sb(this, 1, 0), !0;
      default:
        return !1;
    }
  return g.lc.v.Yb.call(this, a);
};
function Sb(a, c, d) {
  var e = a.cv || g.lc.jq,
    f = a.Xn || g.lc.kq,
    h = a.bj % f,
    k = Math.floor(a.bj / f);
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
  Ub(a, a.gh.childNodes[k].childNodes[h], k * f + h);
}
b.Gs = function (a) {
  var c = (a = a.target) && Number(a.getAttribute("data-index"));
  null !== c && c !== this.bj && Ub(this, a, c);
};
b.aK = function () {
  this.gh.focus({ preventScroll: !0 });
};
b.bK = function () {
  this.gh.blur();
  var a = Tb(this);
  a && g.g.o.ic(a, "blocklyColourHighlighted");
};
function Tb(a) {
  var c = a.Xn || g.lc.kq,
    d = a.gh.childNodes[Math.floor(a.bj / c)];
  return d ? d.childNodes[a.bj % c] : null;
}
function Ub(a, c, d) {
  var e = Tb(a);
  e && g.g.o.ic(e, "blocklyColourHighlighted");
  g.g.o.Ha(c, "blocklyColourHighlighted");
  a.bj = d;
  g.g.$.Zb(a.gh, g.g.$.State.Yp, c.getAttribute("id"));
}
b.Nv = function () {
  var a = this.Xn || g.lc.kq,
    c = this.cv || g.lc.jq,
    d = this.ND || g.lc.bH,
    e = this.getValue(),
    f = document.createElement("table");
  f.className = "blocklyColourTable";
  f.tabIndex = 0;
  f.dir = "ltr";
  g.g.$.pe(f, g.g.$.Vf.wF);
  g.g.$.Zb(f, g.g.$.State.az, !0);
  g.g.$.Zb(f, g.g.$.State.LG, Math.floor(c.length / a));
  g.g.$.Zb(f, g.g.$.State.uE, a);
  for (var h, k = 0; k < c.length; k++) {
    0 == k % a &&
      ((h = document.createElement("tr")),
      g.g.$.pe(h, g.g.$.Vf.Kq),
      f.appendChild(h));
    var l = document.createElement("td");
    h.appendChild(l);
    l.label = c[k];
    l.title = d[k] || c[k];
    l.id = g.g.Vj.Rr();
    l.setAttribute("data-index", k);
    g.g.$.pe(l, g.g.$.Vf.xF);
    g.g.$.Zb(l, g.g.$.State.zz, c[k]);
    g.g.$.Zb(l, g.g.$.State.bk, c[k] == e);
    l.style.backgroundColor = c[k];
    c[k] == e && ((l.className = "blocklyColourSelected"), (this.bj = k));
  }
  this.zs = g.ta(f, "click", this, this.lx, !0);
  this.$e = g.ta(f, "mousemove", this, this.Gs, !0);
  this.Es = g.ta(f, "mouseenter", this, this.aK, !0);
  this.Fs = g.ta(f, "mouseleave", this, this.bK, !0);
  this.ii = g.ta(f, "keydown", this, this.ox);
  return f;
};
b.Ov = function () {
  this.zs && (g.Na(this.zs), (this.zs = null));
  this.$e && (g.Na(this.$e), (this.$e = null));
  this.Es && (g.Na(this.Es), (this.Es = null));
  this.Fs && (g.Na(this.Fs), (this.Fs = null));
  this.ii && (g.Na(this.ii), (this.ii = null));
  this.bj = this.gh = null;
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
g.Ve.register("field_colour", g.lc);
g.Tj = function (a, c, d, e) {
  this.s = a;
  this.et = c;
  this.ri = d.text;
  this.Yk = new g.g.aa(0, 0);
  this.ci = e;
  this.hr = d.callbackKey || d.callbackkey;
  this.iB = d["web-class"] || null;
  this.ud = null;
  this.info = d;
};
g.Tj.dG = 5;
g.Tj.eG = 2;
b = g.Tj.prototype;
b.width = 0;
b.height = 0;
b.ab = function () {
  var a = this.ci ? "blocklyFlyoutLabel" : "blocklyFlyoutButton";
  this.iB && (a += " " + this.iB);
  this.N = g.g.o.M(g.g.F.rc, { class: a }, this.s.Hb);
  if (!this.ci)
    var c = g.g.o.M(
      g.g.F.Gc,
      { class: "blocklyFlyoutButtonShadow", rx: 4, ry: 4, x: 1, y: 1 },
      this.N
    );
  a = g.g.o.M(
    g.g.F.Gc,
    {
      class: this.ci
        ? "blocklyFlyoutLabelBackground"
        : "blocklyFlyoutButtonBackground",
      rx: 4,
      ry: 4,
    },
    this.N
  );
  var d = g.g.o.M(
      g.g.F.Qq,
      {
        class: this.ci ? "blocklyFlyoutLabelText" : "blocklyText",
        x: 0,
        y: 0,
        "text-anchor": "middle",
      },
      this.N
    ),
    e = g.g.Mc(this.ri);
  this.s.L && (e += "\u200f");
  d.textContent = e;
  this.ci &&
    ((this.qy = d),
    this.s.Cc.subscribe(this.qy, "flyoutForegroundColour", "fill"));
  var f = g.g.style.getComputedStyle(d, "fontSize"),
    h = g.g.style.getComputedStyle(d, "fontWeight"),
    k = g.g.style.getComputedStyle(d, "fontFamily");
  this.width = g.g.o.OB(d, f, h, k);
  e = g.g.o.JC(e, f, h, k);
  this.height = e.height;
  this.ci ||
    ((this.width += 2 * g.Tj.dG),
    (this.height += 2 * g.Tj.eG),
    c.setAttribute("width", this.width),
    c.setAttribute("height", this.height));
  a.setAttribute("width", this.width);
  a.setAttribute("height", this.height);
  d.setAttribute("x", this.width / 2);
  d.setAttribute("y", this.height / 2 - e.height / 2 + e.qf);
  Vb(this);
  this.ud = g.ta(this.N, "mouseup", this, this.gK);
  return this.N;
};
b.show = function () {
  Vb(this);
  this.N.setAttribute("display", "block");
};
function Vb(a) {
  a.N.setAttribute("transform", "translate(" + a.Yk.x + "," + a.Yk.y + ")");
}
b.moveTo = function (a, c) {
  this.Yk.x = a;
  this.Yk.y = c;
  Vb(this);
};
b.J = function () {
  this.ud && g.Na(this.ud);
  this.N && g.g.o.removeNode(this.N);
  this.qy && this.s.Cc.unsubscribe(this.qy);
};
b.gK = function (a) {
  (a = this.et.Wh(a)) && a.cancel();
  this.ci && this.hr
    ? console.warn("Labels should not have callbacks. Label text: " + this.ri)
    : this.ci || (this.hr && Wb(this.et, this.hr))
    ? this.ci || Wb(this.et, this.hr)(this)
    : console.warn("Buttons should have callbacks. Button text: " + this.ri);
};
g.Qc.register(
  ".blocklyFlyoutButton {,fill: #888;,cursor: default;,},.blocklyFlyoutButtonShadow {,fill: #666;,},.blocklyFlyoutButton:hover {,fill: #aaa;,},.blocklyFlyoutLabel {,cursor: default;,},.blocklyFlyoutLabelBackground {,opacity: 0;,}".split(
    ","
  )
);
g.Bu = function (a, c, d) {
  this.rw = a.toolboxitemid || g.g.Vj.Rr();
  this.Hw = (this.ki = d || null) ? this.ki.Hw + 1 : 0;
  this.ft = a;
  this.ji = c;
  this.s = this.ji.s;
};
b = g.Bu.prototype;
b.U = function () {};
b.Do = function () {
  return null;
};
b.Qa = function () {
  return this.rw;
};
b.getParent = function () {
  return null;
};
b.$g = function () {
  return !1;
};
b.Hk = function () {
  return !1;
};
b.J = function () {};
g.Me = function (a, c, d) {
  g.Me.v.constructor.call(this, a, c, d);
  this.qj = g.g.Mc(a.name);
  this.od = Xb(this, a);
  this.Cw = this.Ko = this.sp = this.bf = this.Vc = null;
  this.qd = this.Nw();
  g.g.object.Ld(this.qd, a.cssconfig || a.cssConfig);
  this.nJ = this.yw = !1;
  this.Wi = [];
  this.gD(a);
};
g.g.object.X(g.Me, g.Bu);
g.Me.xj = "category";
g.Me.QJ = 19;
g.Me.borderWidth = 8;
g.Me.WH = "#57e";
b = g.Me.prototype;
b.Nw = function () {
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
b.gD = function (a) {
  var c = a.contents;
  if (a.custom) this.Wi = a.custom;
  else if (c) {
    a = 0;
    for (var d; (d = c[a]); a++) this.Wi.push(d);
  }
};
b.U = function () {
  this.Se();
  "true" == this.ft.hidden && this.Oa();
};
b.Se = function () {
  this.Vc = this.hv();
  g.g.$.pe(this.Vc, g.g.$.Vf.gH);
  g.g.$.Zb(this.Vc, g.g.$.State.bk, !1);
  g.g.$.Zb(this.Vc, g.g.$.State.SF, this.Hw);
  var a = document.createElement("div");
  g.g.o.Ha(a, this.qd.row);
  var c = g.Me.QJ * this.Hw;
  c = c.toString() + "px";
  this.s.L ? (a.style.paddingRight = c) : (a.style.paddingLeft = c);
  this.bf = a;
  this.bf.style.pointerEvents = "auto";
  this.Vc.appendChild(this.bf);
  a = document.createElement("div");
  g.g.o.Ha(a, this.qd.rowcontentcontainer);
  this.sp = a;
  this.sp.style.pointerEvents = "none";
  this.bf.appendChild(this.sp);
  this.Ko = this.fB();
  g.g.$.pe(this.Ko, g.g.$.Vf.BG);
  this.sp.appendChild(this.Ko);
  a = this.qj;
  c = document.createElement("span");
  c.setAttribute("id", this.Qa() + ".label");
  c.textContent = a;
  g.g.o.Ha(c, this.qd.label);
  this.Cw = c;
  this.sp.appendChild(this.Cw);
  g.g.$.Zb(this.Vc, g.g.$.State.RF, this.Cw.getAttribute("id"));
  Yb(this, this.od);
  return this.Vc;
};
b.hv = function () {
  var a = document.createElement("div");
  g.g.o.Ha(a, this.qd.container);
  return a;
};
b.fB = function () {
  var a = document.createElement("span");
  this.ji.Bk || g.g.o.Ha(a, this.qd.icon);
  a.style.display = "inline-block";
  return a;
};
b.Tm = function () {
  this.od = Xb(this, this.ft);
  Yb(this, this.od);
};
function Yb(a, c) {
  c &&
    ((c = g.Me.borderWidth + "px solid " + (c || "#ddd")),
    a.s.L ? (a.bf.style.borderRight = c) : (a.bf.style.borderLeft = c));
}
function Xb(a, c) {
  var d = c.categorystyle || c.categoryStyle;
  if ((c = c.colour) && d)
    console.warn(
      'Toolbox category "' + a.qj + '" must not have both a style and a colour'
    );
  else {
    if (d)
      a: {
        c = a.s.Tg();
        if (d && c) {
          if ((c = c.kr[d]) && c.vb) {
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
b.IB = function () {
  return this.bf;
};
function Zb(a, c) {
  c = g.g.Mc(c);
  if (null == c || "" === c) return "";
  var d = Number(c);
  if (isNaN(d)) {
    if ((d = g.g.vb.parse(c))) return d;
    console.warn(
      'Toolbox category "' + a.qj + '" has unrecognized colour attribute: ' + c
    );
    return "";
  }
  return g.gJ(d);
}
b.Zs = function (a) {
  this.Vc.style.display = a ? "block" : "none";
  this.yw = !a;
  this.ji.xb == this && xb(this.ji, null);
};
b.Oa = function () {
  this.Zs(!1);
};
b.show = function () {
  this.Zs(!0);
};
b.isVisible = function () {
  var a;
  if ((a = !this.yw))
    a: {
      for (a = this; a.getParent(); )
        if (((a = a.getParent()), !a.tk)) {
          a = !1;
          break a;
        }
      a = !0;
    }
  return a;
};
b.$g = function () {
  return this.isVisible() && !this.nJ;
};
b.bD = function () {};
function $b(a, c) {
  if (c) {
    var d = Zb(a, g.Me.WH);
    a.bf.style.backgroundColor = a.od || d;
    g.g.o.Ha(a.bf, a.qd.selected);
  } else (a.bf.style.backgroundColor = ""), g.g.o.ic(a.bf, a.qd.selected);
  g.g.$.Zb(a.Vc, g.g.$.State.bk, c);
}
b.xe = function () {
  return this.qj;
};
b.getParent = function () {
  return this.ki;
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
g.C.register(g.C.ea.Yl, g.Me.xj, g.Me);
g.Ag = function (a, c) {
  g.Ag.v.constructor.call(this, a, c);
  this.qd = { container: "blocklyTreeSeparator" };
  g.g.object.Ld(this.qd, a.cssconfig || a.cssConfig);
};
g.g.object.X(g.Ag, g.Bu);
g.Ag.xj = "sep";
g.Ag.prototype.U = function () {
  this.Se();
};
g.Ag.prototype.Se = function () {
  var a = document.createElement("div");
  g.g.o.Ha(a, this.qd.container);
  return (this.Vc = a);
};
g.Ag.prototype.Do = function () {
  return this.Vc;
};
g.Ag.prototype.J = function () {
  g.g.o.removeNode(this.Vc);
};
g.Qc.register(
  '.blocklyTreeSeparator {,border-bottom: solid #e5e5e5 1px;,height: 0;,margin: 5px 0;,},.blocklyToolboxDiv[layout="h"] .blocklyTreeSeparator {,border-right: solid #e5e5e5 1px;,border-bottom: none;,height: auto;,margin: 0 5px 0 5px;,padding: 5px 0;,width: 0;,}'.split(
    ","
  )
);
g.C.register(g.C.ea.Yl, g.Ag.xj, g.Ag);
g.Of = function (a, c, d) {
  this.Fp = null;
  this.tk = !1;
  this.gt = [];
  g.Of.v.constructor.call(this, a, c, d);
};
g.g.object.X(g.Of, g.Me);
g.Of.xj = "collapsibleCategory";
b = g.Of.prototype;
b.Nw = function () {
  var a = g.Of.v.Nw.call(this);
  a.contents = "blocklyToolboxContents";
  return a;
};
b.gD = function (a) {
  var c = a.contents,
    d = !0;
  if (a.custom) this.Wi = a.custom;
  else if (c) {
    a = 0;
    for (var e; (e = c[a]); a++)
      !g.C.cJ(e.kind) || (e.kind.toLowerCase() == g.Ag.xj && d)
        ? (this.Wi.push(e), (d = !0))
        : (this.kv(e), (d = !1));
  }
};
b.kv = function (a) {
  var c = a.kind;
  "CATEGORY" == c.toUpperCase() && g.g.za.tC(a) && (c = g.Of.xj);
  a = new (g.C.Ao(g.C.ea.Yl, c))(a, this.ji, this);
  this.gt.push(a);
};
b.U = function () {
  g.Of.v.U.call(this);
  ac(this, "true" == this.ft.expanded || this.ft.expanded);
};
b.Se = function () {
  g.Of.v.Se.call(this);
  var a = this.gt,
    c = document.createElement("div");
  g.g.o.Ha(c, this.qd.contents);
  for (var d = 0; d < a.length; d++) {
    var e = a[d];
    e.U();
    c.appendChild(e.Do());
    e.IB && e.bf.setAttribute("id", e.Qa());
  }
  this.Fp = c;
  g.g.$.pe(this.Fp, g.g.$.Vf.yF);
  this.Vc.appendChild(this.Fp);
  return this.Vc;
};
b.fB = function () {
  var a = document.createElement("span");
  this.ji.Bk || (g.g.o.Ha(a, this.qd.icon), (a.style.visibility = "visible"));
  a.style.display = "inline-block";
  return a;
};
function ac(a, c) {
  if (a.tk != c) {
    if ((a.tk = c)) {
      a.Fp.style.display = "block";
      var d = a.Ko;
      d && (g.g.o.tD(d, a.qd.closedicon), g.g.o.Ha(d, a.qd.openicon));
    } else if (((a.Fp.style.display = "none"), (d = a.Ko)))
      g.g.o.tD(d, a.qd.openicon), g.g.o.Ha(d, a.qd.closedicon);
    g.g.$.Zb(a.Vc, g.g.$.State.az, c);
    a = a.ji;
    c = a.s;
    d = a.Je.getBoundingClientRect();
    c.translate(
      a.La == g.Le ? c.scrollX + d.width : c.scrollX,
      a.La == g.fk ? c.scrollY + d.height : c.scrollY
    );
    g.dn(c);
  }
}
b.Zs = function (a) {
  this.Vc.style.display = a ? "block" : "none";
  for (var c = 0, d; (d = this.gt[c]); c++) d.Zs(a);
  this.yw = !a;
  this.ji.xb == this && xb(this.ji, null);
};
b.Hk = function () {
  return !0;
};
b.bD = function () {
  ac(this, !this.tk);
};
b.Do = function () {
  return this.Vc;
};
g.C.register(g.C.ea.Yl, g.Of.xj, g.Of);
g.i.Gh = function (a, c, d) {
  g.i.Gh.v.constructor.call(this, d);
  this.VC = a;
  this.QC = c;
};
g.g.object.X(g.i.Gh, g.i.Ne);
g.i.Gh.prototype.type = g.i.xu;
g.i.Gh.prototype.ya = function () {
  var a = g.i.Gh.v.ya.call(this);
  a.oldItem = this.VC;
  a.newItem = this.QC;
  return a;
};
g.i.Gh.prototype.ma = function (a) {
  g.i.Gh.v.ma.call(this, a);
  this.VC = a.oldItem;
  this.QC = a.newItem;
};
g.C.register(g.C.ea.kc, g.i.xu, g.i.Gh);
g.Au = function (a) {
  this.s = a;
  this.QD = a.options.ah || { contents: [] };
  this.Bk = a.options.Id;
  this.Si = this.Je = null;
  this.Lb = [];
  this.Uc = this.zb = 0;
  this.L = a.options.L;
  this.pa = null;
  this.ev = {};
  this.La = a.options.La;
  this.xb = null;
  this.Vn = [];
};
b = g.Au.prototype;
b.U = function () {
  var a = this.s,
    c = r(a),
    d = this.s,
    e = new g.Td({
      parentWorkspace: d,
      rtl: d.L,
      oneBasedIndex: d.options.Ef,
      horizontalLayout: d.Id,
      renderer: d.options.pp,
      rendererOverrides: d.options.qp,
    });
  e.La = d.options.La;
  d = d.Id ? g.C.Or(g.C.ea.pF, d.options) : g.C.Or(g.C.ea.hz, d.options);
  if (!d)
    throw Error(
      "Blockly.VerticalFlyout, Blockly.HorizontalFlyout or your own custom flyout must be required."
    );
  this.pa = new d(e);
  this.Je = this.Se(this.s);
  g.g.o.Fk(this.pa.ab("svg"), c);
  this.pa.U(a);
  this.Ja(this.QD);
  a = a.Cc;
  a.subscribe(this.Je, "toolboxBackgroundColour", "background-color");
  a.subscribe(this.Je, "toolboxForegroundColour", "color");
};
b.Se = function (a) {
  var c = r(a);
  a = this.hv();
  var d = document.createElement("div");
  g.g.o.Ha(d, "blocklyToolboxContents");
  this.Bk && (d.style.flexDirection = "row");
  this.Si = d;
  this.Si.tabIndex = 0;
  g.g.$.pe(this.Si, g.g.$.Vf.fH);
  a.appendChild(this.Si);
  c.parentNode.insertBefore(a, c);
  c = this.Si;
  d = g.ta(a, "click", this, this.lx, !1, !0);
  this.Vn.push(d);
  c = g.ta(c, "keydown", this, this.ox, !1, !0);
  this.Vn.push(c);
  return a;
};
b.hv = function () {
  var a = document.createElement("div");
  a.setAttribute("layout", this.Bk ? "h" : "v");
  g.g.o.Ha(a, "blocklyToolboxDiv");
  g.g.o.Ha(a, "blocklyNonSelectable");
  a.setAttribute("dir", this.L ? "RTL" : "LTR");
  return a;
};
b.lx = function (a) {
  if (g.g.Lk(a) || a.target == this.Je) g.Jc(!1);
  else {
    if ((a = a.target.getAttribute("id")))
      (a = this.ev[a]), a.$g() && (xb(this, a), a.bD());
    g.Jc(!0);
  }
  g.Touch.jk();
};
b.ox = function (a) {
  var c = !1;
  switch (a.keyCode) {
    case g.g.P.Jt:
      c = bc(this);
      break;
    case g.g.P.Du:
      c = cc(this);
      break;
    case g.g.P.Wj:
      c = dc(this);
      break;
    case g.g.P.$j:
      c = ec(this);
      break;
    case g.g.P.Dl:
    case g.g.P.$z:
      this.xb && this.xb.Hk() && ((c = this.xb), ac(c, !c.tk), (c = !0));
      break;
    default:
      c = !1;
  }
  !c && this.xb && this.xb.bp && (c = this.xb.bp(a));
  c && a.preventDefault();
};
b.Ja = function (a) {
  this.QD = a;
  for (var c = 0; c < this.Lb.length; c++) {
    var d = this.Lb[c];
    d && d.J();
  }
  this.Lb = [];
  this.ev = {};
  a = a.contents;
  c = document.createDocumentFragment();
  d = 0;
  for (var e; (e = a[d]); d++) this.kv(e, c);
  this.Si.appendChild(c);
  this.position();
};
b.kv = function (a, c) {
  var d = a.kind;
  "CATEGORY" == d.toUpperCase() && g.g.za.tC(a) && (d = g.Of.xj);
  if ((d = g.C.Ao(g.C.ea.Yl, d.toLowerCase())))
    (a = new d(a, this)),
      fc(this, a),
      a.U(),
      (d = a.Do()) && c.appendChild(d),
      a.IB && a.bf.setAttribute("id", a.Qa());
};
function fc(a, c) {
  a.Lb.push(c);
  a.ev[c.Qa()] = c;
  if (c.Hk()) for (var d = 0, e; (e = c.gt[d]); d++) fc(a, e);
}
b.Wq = function (a) {
  g.g.o.Ha(this.Je, a);
};
b.Qs = function (a) {
  g.g.o.ic(this.Je, a);
};
b.um = function () {
  if (!this.Je) return null;
  var a = this.Je.getBoundingClientRect(),
    c = a.top,
    d = c + a.height,
    e = a.left;
  a = e + a.width;
  return this.La == g.g.za.Ud.Sq
    ? new g.g.Rect(-1e7, d, -1e7, 1e7)
    : this.La == g.g.za.Ud.xt
    ? new g.g.Rect(c, 1e7, -1e7, 1e7)
    : this.La == g.g.za.Ud.Wj
    ? new g.g.Rect(-1e7, 1e7, -1e7, a)
    : new g.g.Rect(-1e7, 1e7, e, 1e7);
};
b.Ug = function () {
  return this.zb;
};
b.oc = function () {
  return this.pa;
};
b.position = function () {
  var a = this.Je;
  a &&
    (this.Bk
      ? ((a.style.left = "0"),
        (a.style.height = "auto"),
        (a.style.width = "100%"),
        (this.Uc = a.offsetHeight),
        this.La == g.fk ? (a.style.top = "0") : (a.style.bottom = "0"))
      : (this.La == g.Xl ? (a.style.right = "0") : (a.style.left = "0"),
        (a.style.height = "100%"),
        (this.zb = a.offsetWidth)),
    this.pa.position());
};
b.Tm = function () {
  for (var a = 0; a < this.Lb.length; a++) {
    var c = this.Lb[a];
    c.Tm && c.Tm();
  }
};
b.Ob = function (a) {
  this.Je.style.display = a ? "block" : "none";
};
function xb(a, c) {
  var d = a.xb;
  if ((c || d) && (!c || c.$g())) {
    null == d ||
      (d.Hk() && d == c) ||
      null == d ||
      ((a.xb = null), $b(d, !1), g.g.$.Zb(a.Si, g.g.$.State.Yp, ""));
    null != c &&
      c != d &&
      null != c &&
      ((a.xb = c), $b(c, !0), g.g.$.Zb(a.Si, g.g.$.State.Yp, c.Qa()));
    (d != c || c.Hk()) && c && c.Wi.length
      ? (a.pa.show(c.Wi), a.pa.Wx())
      : a.pa.Oa();
    var e = d && d.xe(),
      f = c && c.xe();
    d == c && (f = null);
    a = new g.i.Gh(e, f, a.s.id);
    g.i.Ia(a);
  }
}
b.Yb = function (a) {
  if (!this.xb) return !1;
  switch (a.name) {
    case g.navigation.qb.Bd:
      return cc(this);
    case g.navigation.qb.Jq:
      return dc(this);
    case g.navigation.qb.Ad:
      return bc(this);
    case g.navigation.qb.zq:
      return ec(this);
    default:
      return !1;
  }
};
function dc(a) {
  return a.xb
    ? a.xb.Hk() && a.xb.tk
      ? (ac(a.xb, !1), !0)
      : a.xb.getParent() && a.xb.getParent().$g()
      ? (xb(a, a.xb.getParent()), !0)
      : !1
    : !1;
}
function ec(a) {
  if (!a.xb || !a.xb.Hk()) return !1;
  var c = a.xb;
  c.tk ? bc(a) : ac(c, !0);
  return !0;
}
function bc(a) {
  if (!a.xb) return !1;
  var c = a.Lb.indexOf(a.xb) + 1;
  if (-1 < c && c < a.Lb.length) {
    for (var d = a.Lb[c]; d && !d.$g(); ) d = a.Lb[++c];
    if (d && d.$g()) return xb(a, d), !0;
  }
  return !1;
}
function cc(a) {
  if (!a.xb) return !1;
  var c = a.Lb.indexOf(a.xb) - 1;
  if (-1 < c && c < a.Lb.length) {
    for (var d = a.Lb[c]; d && !d.$g(); ) d = a.Lb[--c];
    if (d && d.$g()) return xb(a, d), !0;
  }
  return !1;
}
b.J = function () {
  this.pa.J();
  for (var a = 0; a < this.Lb.length; a++) this.Lb[a].J();
  for (a = 0; a < this.Vn.length; a++) g.Na(this.Vn[a]);
  this.Vn = [];
  this.Lb = [];
  this.s.Cc.unsubscribe(this.Je);
  g.g.o.removeNode(this.Je);
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
g.C.register(g.C.ea.Rq, g.C.uq, g.Au);
g.i.Hh = function (a, c) {
  g.i.Hh.v.constructor.call(this, c);
  this.Km = a;
};
g.g.object.X(g.i.Hh, g.i.Ne);
g.i.Hh.prototype.type = g.i.hA;
g.i.Hh.prototype.ya = function () {
  var a = g.i.Hh.v.ya.call(this);
  a.isOpen = this.Km;
  return a;
};
g.i.Hh.prototype.ma = function (a) {
  g.i.Hh.v.ma.call(this, a);
  this.Km = a.isOpen;
};
g.C.register(g.C.ea.kc, g.i.hA, g.i.Hh);
g.nd = function (a) {
  this.s = a;
  this.Lb = [];
  this.Pg = null;
  if (!(0 >= this.s.options.rs)) {
    a = new g.Td({
      scrollbars: !0,
      parentWorkspace: this.s,
      rtl: this.s.L,
      oneBasedIndex: this.s.options.Ef,
      renderer: this.s.options.pp,
      rendererOverrides: this.s.options.qp,
    });
    if (this.s.Id) {
      a.La = this.s.La == g.g.za.Ud.Sq ? g.g.za.Ud.xt : g.g.za.Ud.Sq;
      if (!g.Rt) throw Error("Missing require for Blockly.HorizontalFlyout");
      this.Pg = new g.Rt(a);
    } else {
      a.La = this.s.La == g.g.za.Ud.$j ? g.g.za.Ud.Wj : g.g.za.Ud.$j;
      if (!g.Jh) throw Error("Missing require for Blockly.VerticalFlyout");
      this.Pg = new g.Jh(a);
    }
    D(this.s, this.XJ.bind(this));
  }
};
b = g.nd.prototype;
b.ik = 47;
b.bq = 44;
b.Ml = 16;
b.Zt = 20;
b.zn = 20;
b.Eq = 10;
b.uu = 0;
b.vu = 32;
b.zF = 0.1;
g.nd.hE = 80;
g.nd.Fy = 4;
g.nd.Jz = 0.4;
g.nd.sG = 0.8;
g.nd.Cz = 45;
b = g.nd.prototype;
b.bs = !1;
b.Ww = 0;
b.N = null;
b.dt = null;
b.Iw = 0;
b.nj = 0;
b.Ro = 0;
b.hn = 0;
b.ab = function () {
  this.N = g.g.o.M(g.g.F.rc, { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var c = g.g.o.M(g.g.F.rn, { id: "blocklyTrashBodyClipPath" + a }, this.N);
  g.g.o.M(g.g.F.Gc, { width: this.ik, height: this.bq, y: this.Ml }, c);
  var d = g.g.o.M(
    g.g.F.Ei,
    {
      width: g.Wd.width,
      x: -this.uu,
      height: g.Wd.height,
      y: -this.vu,
      "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")",
    },
    this.N
  );
  d.setAttributeNS(g.g.o.nf, "xlink:href", this.s.options.uj + g.Wd.url);
  c = g.g.o.M(g.g.F.rn, { id: "blocklyTrashLidClipPath" + a }, this.N);
  g.g.o.M(g.g.F.Gc, { width: this.ik, height: this.Ml }, c);
  this.dt = g.g.o.M(
    g.g.F.Ei,
    {
      width: g.Wd.width,
      x: -this.uu,
      height: g.Wd.height,
      y: -this.vu,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")",
    },
    this.N
  );
  this.dt.setAttributeNS(g.g.o.nf, "xlink:href", this.s.options.uj + g.Wd.url);
  g.Yd(this.N, "mousedown", this, this.yH);
  g.Yd(this.N, "mouseup", this, this.click);
  g.Yd(d, "mouseover", this, this.GJ);
  g.Yd(d, "mouseout", this, this.EJ);
  this.Ju();
  return this.N;
};
b.U = function (a) {
  0 < this.s.options.rs &&
    (g.g.o.Fk(this.Pg.ab(g.g.F.dk), r(this.s)), this.Pg.U(this.s));
  this.nh = this.Zt + a;
  pb(this, !1);
  return this.nh + this.bq + this.Ml;
};
b.J = function () {
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.s = this.dt = null;
  clearTimeout(this.Iw);
};
b.position = function () {
  if (this.nh) {
    var a = this.s.ed();
    a &&
      ((this.Ro =
        a.La == g.Le || (this.s.Id && !this.s.L)
          ? a.Qb + a.Sc - this.ik - this.zn - g.Wa.Wc
          : this.zn + g.Wa.Wc),
      (this.hn =
        a.La == g.On ? this.nh : a.Vb + a.bd - (this.bq + this.Ml) - this.nh),
      this.N.setAttribute(
        "transform",
        "translate(" + this.Ro + "," + this.hn + ")"
      ));
  }
};
b.um = function () {
  if (!this.N) return null;
  var a = this.N.getBoundingClientRect(),
    c = a.top + this.vu - this.Eq;
  a = a.left + this.uu - this.Eq;
  return new g.g.Rect(
    c,
    c + this.Ml + this.bq + 2 * this.Eq,
    a,
    a + this.ik + 2 * this.Eq
  );
};
function pb(a, c) {
  a.bs != c && (clearTimeout(a.Iw), (a.bs = c), a.Ju());
}
b.Ju = function () {
  var a = 1 / (g.nd.Fy + 1);
  this.nj += this.bs ? a : -a;
  this.nj = Math.min(Math.max(this.nj, this.Ww), 1);
  gc(this, this.nj * g.nd.Cz);
  this.N.style.opacity = g.nd.Jz + this.nj * (g.nd.sG - g.nd.Jz);
  this.nj > this.Ww &&
    1 > this.nj &&
    (this.Iw = setTimeout(this.Ju.bind(this), g.nd.hE / g.nd.Fy));
};
function gc(a, c) {
  var d = a.s.La == g.Xl || (a.s.Id && a.s.L);
  a.dt.setAttribute(
    "transform",
    "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.ik - 4) + "," + (a.Ml - 2) + ")"
  );
}
b.qr = function () {
  pb(this, !1);
};
b.click = function () {
  if (this.Lb.length && !this.Pg.isVisible()) {
    for (var a = [], c = 0, d; (d = this.Lb[c]); c++) a[c] = g.S.Ee(d);
    this.Pg.show(a);
    hc(this, !0);
  }
};
function hc(a, c) {
  a = new g.i.Hh(c, a.s.id);
  g.i.Ia(a);
}
b.yH = function (a) {
  !this.Pg.isVisible() && this.Lb.length && a.stopPropagation();
};
b.GJ = function () {
  this.Lb.length && pb(this, !0);
};
b.EJ = function () {
  pb(this, !1);
};
b.XJ = function (a) {
  if (
    !(0 >= this.s.options.rs) &&
    a.type == g.i.vt &&
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
    a = g.S.ee(a);
    if (-1 == this.Lb.indexOf(a)) {
      for (this.Lb.unshift(a); this.Lb.length > this.s.options.rs; )
        this.Lb.pop();
      this.Ww = a = this.zF;
      this.bs || gc(this, a * g.nd.Cz);
    }
  }
};
g.R = Object.create(null);
g.Ba = function (a, c) {
  this.I = a;
  this.type = c;
};
g.Ba.iq = 0;
g.Ba.Rz = 1;
g.Ba.Uz = 2;
g.Ba.Tz = 3;
g.Ba.Oz = 4;
g.Ba.Pz = 5;
g.Ba.Sz = 6;
g.Ba.Qz = 7;
b = g.Ba.prototype;
b.oa = null;
b.ag = !1;
b.Pi = null;
b.$s = null;
b.x = 0;
b.y = 0;
b.$f = function (a) {
  var c = this,
    d = c.Z(),
    e = a.Z();
  a.isConnected() && a.disconnect();
  if (c.isConnected()) {
    var f = c.sa(),
      h = c.ym();
    c.$s = null;
    if (f.Ra) (h = g.S.Lh(f)), f.J(!1), (f = null);
    else if (c.type == g.lb) {
      if (!f.O) throw Error("Orphan block does not have an output connection.");
      var k = g.Ba.CC(e, f);
      k && (f.O.connect(k), (f = null));
    } else if (c.type == g.gb) {
      if (!f.ka)
        throw Error("Orphan block does not have a previous connection.");
      for (k = e; k.Y; ) {
        var l = q(k);
        if (l && !l.Ra) k = l;
        else {
          ra(f.u.ao, f.ka, k.Y, !1) && (k.Y.connect(f.ka), (f = null));
          break;
        }
      }
    }
    if (f && (c.disconnect(), g.i.eb)) {
      var m = g.i.xc();
      setTimeout(function () {
        f.u &&
          !f.getParent() &&
          (g.i.na(m), f.O ? f.O.As(c) : f.ka && f.ka.As(c), g.i.na(!1));
      }, g.eq);
    }
    c.$s = h;
  }
  var n;
  g.i.isEnabled() && (n = new g.i.qn(e));
  g.Ba.PH(c, a);
  e.Ys(d);
  n && (n.bl(), g.i.Ia(n));
};
b.J = function () {
  if (this.isConnected()) {
    this.Xm(null);
    var a = this.sa();
    a && y(a);
  }
  this.ag = !0;
};
b.Z = function () {
  return this.I;
};
function t(a) {
  return a.type == g.lb || a.type == g.gb;
}
b.isConnected = function () {
  return !!this.oa;
};
b.ir = function (a) {
  g.g.tv.warn(
    "Connection.prototype.canConnectWithReason",
    "July 2020",
    "July 2021",
    "the workspace's connection checker"
  );
  return hb(this).ir(this, a, !1);
};
function hb(a) {
  return a.I.u.ao;
}
b.As = function () {};
b.connect = function (a) {
  if (this.oa != a && ra(hb(this), this, a, !1)) {
    var c = g.i.xc();
    c || g.i.na(!0);
    t(this) ? this.$f(a) : a.$f(this);
    c || g.i.na(!1);
  }
};
g.Ba.PH = function (a, c) {
  if (!a || !c) throw Error("Cannot connect null connections.");
  a.oa = c;
  c.oa = a;
};
g.Ba.nL = function (a, c) {
  var d = null;
  c = c.O;
  for (var e = 0; e < a.V.length; e++) {
    var f = a.V[e].connection,
      h = hb(c);
    if (f && f.type == g.lb && ra(h, c, f, !1)) {
      if (d) return null;
      d = f;
    }
  }
  return d;
};
g.Ba.CC = function (a, c) {
  for (var d; (d = g.Ba.nL(a, c)); ) if (((a = d.sa()), !a || a.Ra)) return d;
  return null;
};
b = g.Ba.prototype;
b.disconnect = function () {
  var a = this.oa;
  if (!a) throw Error("Source connection not connected.");
  if (a.oa != this)
    throw Error("Target connection not connected to source connection.");
  if (t(this)) {
    var c = this.I;
    var d = a.Z();
    a = this;
  } else (c = a.Z()), (d = this.I);
  var e = g.i.xc();
  e || g.i.na(!0);
  this.Av(c, d);
  d.Ra || a.rp();
  e || g.i.na(!1);
};
b.Av = function (a, c) {
  var d;
  g.i.isEnabled() && (d = new g.i.qn(c));
  this.oa = this.oa.oa = null;
  c.Ys(null);
  d && (d.bl(), g.i.Ia(d));
};
b.rp = function () {
  var a = this.Z(),
    c = this.ym();
  if (a.u && c)
    if (((a = g.S.qk(c, a.u)), a.O)) this.connect(a.O);
    else if (a.ka) this.connect(a.ka);
    else throw Error("Child block does not have output or previous statement.");
};
b.sa = function () {
  return this.isConnected() ? this.oa.Z() : null;
};
b.aD = function () {
  !this.isConnected() ||
    (this.oa && ra(hb(this), this, this.oa, !1)) ||
    y(t(this) ? this.sa() : this.I);
};
b.kb = function (a) {
  a
    ? (Array.isArray(a) || (a = [a]), (this.Pi = a), this.aD())
    : (this.Pi = null);
  return this;
};
b.Xm = function (a) {
  this.$s = a;
  a = this.sa();
  a ? a.Ra && (a.J(!1), this.rp()) : this.rp();
};
b.ym = function () {
  return this.$s;
};
b.OC = function () {
  return [];
};
b.Sg = function () {
  for (var a = null, c = this.I, d = c.V, e = 0; e < c.V.length; e++)
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
    else if (a.Y == this) c = "Next Connection of ";
    else {
      c = null;
      for (var d = 0, e; (e = a.V[d]); d++)
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
g.ca.on = {};
g.ca.register = function (a, c) {
  if ("string" != typeof a || "" == a.trim())
    throw Error('Error: Invalid extension name "' + a + '"');
  if (g.ca.on[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if ("function" != typeof c)
    throw Error('Error: Extension "' + a + '" must be a function');
  g.ca.on[a] = c;
};
g.ca.Ps = function (a, c) {
  if (!c || "object" != typeof c)
    throw Error('Error: Mixin "' + a + '" must be a object');
  g.ca.register(a, function () {
    this.Ld(c);
  });
};
g.ca.np = function (a, c, d, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  g.ca.PA(f, c.Eb, "domToMutation");
  g.ca.PA(f, c.Xa, "mutationToDom");
  var h = g.ca.RA(c, f);
  if (d && "function" != typeof d)
    throw Error('Extension "' + a + '" is not a function');
  g.ca.register(a, function () {
    if (h) {
      if (!g.Ac) throw Error(f + "Missing require for Blockly.Mutator");
      this.Wm(new g.Ac(e || []));
    }
    this.Ld(c);
    d && d.apply(this);
  });
};
g.ca.unregister = function (a) {
  g.ca.on[a]
    ? delete g.ca.on[a]
    : console.warn(
        'No extension mapping for name "' + a + '" found to unregister'
      );
};
g.ca.apply = function (a, c, d) {
  var e = g.ca.on[a];
  if ("function" != typeof e)
    throw Error('Error: Extension "' + a + '" not found.');
  if (d) g.ca.HH(a, c);
  else var f = g.ca.fw(c);
  e.apply(c);
  if (d) g.ca.FH('Error after applying mutator "' + a + '": ', c);
  else if (!g.ca.NJ(f, c))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
g.ca.PA = function (a, c, d) {
  if (!c) throw Error(a + 'missing required property "' + d + '"');
  if ("function" != typeof c)
    throw Error(a + '" required property "' + d + '" must be a function');
};
g.ca.HH = function (a, c) {
  if (g.ca.fw(c).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        c.id
    );
};
g.ca.RA = function (a, c) {
  var d = void 0 !== a.Hg,
    e = void 0 !== a.Mg;
  if (d && e) {
    if ("function" != typeof a.Hg)
      throw Error(c + "compose must be a function.");
    if ("function" != typeof a.Mg)
      throw Error(c + "decompose must be a function.");
    return !0;
  }
  if (d || e)
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
g.ca.FH = function (a, c) {
  if ("function" != typeof c.Eb)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof c.Xa)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  g.ca.RA(c, a);
};
g.ca.fw = function (a) {
  var c = [];
  void 0 !== a.Eb && c.push(a.Eb);
  void 0 !== a.Xa && c.push(a.Xa);
  void 0 !== a.Hg && c.push(a.Hg);
  void 0 !== a.Mg && c.push(a.Mg);
  return c;
};
g.ca.NJ = function (a, c) {
  c = g.ca.fw(c);
  if (c.length != a.length) return !1;
  for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
  return !0;
};
g.ca.dr = function (a, c) {
  var d = [];
  "object" == typeof document &&
    g.g.xD(function () {
      for (var e in c) g.g.QA(c[e]);
    });
  return function () {
    this.type &&
      -1 == d.indexOf(this.type) &&
      (g.ca.GH(this, a, c), d.push(this.type));
    this.Sa(
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
g.ca.GH = function (a, c, d) {
  var e = w(a, c);
  if ("function" != typeof e.Rk) {
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
g.ca.er = function (a) {
  "object" == typeof document &&
    g.g.xD(function () {
      g.g.QA(a);
    });
  return function () {
    this.Sa(
      function () {
        var c = w(this, "VAR");
        return g.g.Mc(a).replace("%1", c ? c.Gd() : "");
      }.bind(this)
    );
  };
};
g.ca.tI = function () {
  this.AL = this.Kf;
  this.Sa(
    function () {
      var a = this.getParent();
      return (a && lb(a) && a.Kf) || this.AL;
    }.bind(this)
  );
};
g.ca.register("parent_tooltip_when_inline", g.ca.tI);
g.Pd = function (a, c, d) {
  this.lr = null;
  g.Pd.v.constructor.call(this, a, null, d);
  d || (this.lr = c || null);
};
g.g.object.X(g.Pd, g.kd);
g.Pd.prototype.Oj = "";
g.Pd.ma = function (a) {
  var c = g.g.Mc(a.text);
  return new g.Pd(c, void 0, a);
};
g.Pd.prototype.tn = !1;
g.Pd.prototype.Dd = function (a) {
  g.Pd.v.Dd.call(this, a);
  this.lr = a["class"];
};
g.Pd.prototype.$h = function () {
  Mb(this);
  this.lr && g.g.o.Ha(this.Pc, this.lr);
};
g.Pd.prototype.Uh = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
g.Ve.register("field_label", g.Pd);
g.xz = function (a, c, d, e) {
  if (a != g.vh && !c)
    throw Error("Value inputs and statement inputs must have non-empty name.");
  this.type = a;
  this.name = c;
  this.I = d;
  this.connection = e;
  this.ib = [];
};
b = g.xz.prototype;
b.align = g.st;
b.Ij = !0;
b.Z = function () {
  return this.I;
};
function J(a, c, d) {
  jc(a, a.ib.length, c, d);
  return a;
}
function jc(a, c, d, e) {
  if (0 > c || c > a.ib.length) throw Error("index " + c + " out of bounds.");
  if (!(d || ("" == d && e))) return c;
  "string" == typeof d && (d = new g.Pd(d));
  d.ay(a.I);
  a.I.ra && (d.U(), d.mc());
  d.name = e;
  d.Ob(a.isVisible());
  e = d;
  e.Ix && (c = jc(a, c, e.Ix));
  a.ib.splice(c, 0, d);
  ++c;
  e.py && (c = jc(a, c, e.py));
  a.I.ra && ((a.I = a.I), a.I.Ja(), a.I.cc());
  return c;
}
b.isVisible = function () {
  return this.Ij;
};
b.Ob = function (a) {
  if (this.Ij != a) {
    this.Ij = a;
    for (var c = 0, d; (d = this.ib[c]); c++) d.Ob(a);
    if (this.connection) {
      this.connection = this.connection;
      if (a) kc(this.connection);
      else if (((c = this.connection), lc(c, !1), c.oa))
        for (c = p(c.sa(), !1), d = 0; d < c.length; d++) {
          for (var e = c[d], f = e.fg(!0), h = 0; h < f.length; h++)
            lc(f[h], !1);
          e = mb(e);
          for (h = 0; h < e.length; h++) e[h].Ob(!1);
        }
      if ((c = this.connection.sa()))
        c.Pa().style.display = a ? "block" : "none";
    }
  }
};
b.Vo = function () {
  for (var a = 0, c; (c = this.ib[a]); a++) c.Vo();
};
b.kb = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.kb(a);
  return this;
};
function mc(a, c) {
  a.align = c;
  a.I.ra && ((a.I = a.I), a.I.Ja());
  return a;
}
b.Xm = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Xm(a);
};
b.ym = function () {
  if (!this.connection) throw Error("This input does not have a connection.");
  return this.connection.ym();
};
b.U = function () {
  if (this.I.u.ra) for (var a = 0; a < this.ib.length; a++) this.ib[a].U();
};
b.J = function () {
  for (var a = 0, c; (c = this.ib[a]); a++) c.J();
  this.connection && this.connection.J();
  this.I = null;
};
g.qe = function (a, c, d) {
  if (g.Generator && "undefined" != typeof g.Generator.prototype[c])
    throw Error(
      'Block prototypeName "' +
        c +
        '" conflicts with Blockly.Generator members.'
    );
  this.id = d && !a.Fd(d) ? d : g.g.Vh();
  a.Qu[this.id] = this;
  this.ka = this.Y = this.O = null;
  this.V = [];
  this.ai = void 0;
  this.disabled = !1;
  this.Kf = "";
  this.contextMenu = !0;
  this.fh = null;
  this.Nh = [];
  this.yB = this.NC = this.rv = !0;
  this.kk = this.Ra = !1;
  this.Yn = null;
  this.Qe = { text: null, Gx: !1, size: new g.g.ue(160, 80) };
  this.eE = new g.g.aa(0, 0);
  this.u = a;
  this.Ub = a.hg;
  this.L = a.L;
  this.Im = !1;
  this.Vg = void 0;
  this.ra = null;
  if (c) {
    this.type = c;
    d = g.R[c];
    if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
    g.g.object.Ld(this, d);
  }
  a.Xq(this);
  a.xi[this.type] || (a.xi[this.type] = []);
  a.xi[this.type].push(this);
  (a = g.i.xc()) || g.i.na(!0);
  c = g.i.eb;
  try {
    "function" == typeof this.U && ((g.i.eb = !1), this.U(), (g.i.eb = c)),
      g.i.isEnabled() && g.i.Ia(new g.i.gq(this));
  } finally {
    a || g.i.na(!1), (g.i.eb = c);
  }
  this.kJ = this.ai;
  if ("function" == typeof this.onchange) {
    if ((a = this.onchange) && "function" != typeof a)
      throw Error("onchange must be a function.");
    this.cp && Oa(this.u, this.cp);
    if ((this.onchange = a)) (this.cp = a.bind(this)), D(this.u, this.cp);
  }
};
g.qe.sn = "_TEMP_COLLAPSED_INPUT";
g.qe.Et = "_TEMP_COLLAPSED_FIELD";
b = g.qe.prototype;
b.data = null;
b.ag = !1;
b.od = "#000000";
b.kl = null;
b.J = function (a) {
  if (this.u) {
    this.cp && Oa(this.u, this.cp);
    y(this, a);
    g.i.isEnabled() && g.i.Ia(new g.i.sE(this));
    g.i.disable();
    try {
      if (this.u) {
        this.u.Rs(this);
        var c = this.u;
        c.xi[this.type].splice(c.xi[this.type].indexOf(this), 1);
        c.xi[this.type].length || delete c.xi[this.type];
        delete this.u.Qu[this.id];
        this.u = null;
      }
      g.selected == this && (g.selected = null);
      for (var d = this.Nh.length - 1; 0 <= d; d--) this.Nh[d].J(!1);
      d = 0;
      for (var e; (e = this.V[d]); d++) e.J();
      this.V.length = 0;
      var f = this.fg(!0);
      d = 0;
      for (var h; (h = f[d]); d++) h.J();
    } finally {
      g.i.enable(), (this.ag = !0);
    }
  }
};
b.Ek = function () {
  for (var a = 0, c; (c = this.V[a]); a++)
    for (var d = 0, e; (e = c.ib[d]); d++) e.Ek && e.Ek();
};
function y(a, c) {
  if (a.O) {
    var d = null;
    a.O.isConnected() && ((d = a.O.oa), a.O.disconnect());
    if (d && c) {
      a: {
        c = null;
        for (var e = 0; e < a.V.length; e++) {
          var f = a.V[e].connection;
          if (f && f.type == g.lb && f.oa) {
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
        ra(a.u.ao, c, d, !1) ? d.connect(c) : c.As(d));
    }
  } else
    a.ka &&
      ((d = null),
      a.ka.isConnected() && ((d = a.ka.oa), a.ka.disconnect()),
      (e = q(a)),
      c &&
        e &&
        !e.Ra &&
        ((c = a.Y.oa),
        c.disconnect(),
        d && ra(a.u.ao, d, c, !1) && d.connect(c)));
}
b.fg = function () {
  var a = [];
  this.O && a.push(this.O);
  this.ka && a.push(this.ka);
  this.Y && a.push(this.Y);
  for (var c = 0, d; (d = this.V[c]); c++) d.connection && a.push(d.connection);
  return a;
};
b.ks = function () {
  for (var a = this.Y; a; ) {
    var c = a.sa();
    if (!c) return a;
    a = c.Y;
  }
  return null;
};
b.cc = function () {};
b.getParent = function () {
  return this.fh;
};
function Aa(a, c) {
  for (var d = 0, e; (e = a.V[d]); d++)
    if (e.connection && e.connection.sa() == c) return e;
  return null;
}
function nc(a) {
  do {
    var c = a;
    a = a.getParent();
    if (!a) return null;
  } while (q(a) == c);
  return a;
}
function q(a) {
  return a.Y && a.Y.sa();
}
b.ie = function () {
  var a = this;
  do {
    var c = a;
    a = c.fh;
  } while (a);
  return c;
};
function Ba(a, c) {
  if (!c) return a.Nh;
  c = [];
  for (var d = 0, e; (e = a.V[d]); d++)
    e.connection && (e = e.connection.sa()) && c.push(e);
  (a = q(a)) && c.push(a);
  return c;
}
b.Ys = function (a) {
  if (a != this.fh) {
    if (this.fh) {
      g.g.Un(this.fh.Nh, this);
      if (this.ka && this.ka.isConnected())
        throw Error("Still connected to previous block.");
      if (this.O && this.O.isConnected())
        throw Error("Still connected to parent block.");
      this.fh = null;
    } else this.u.Rs(this);
    (this.fh = a) ? a.Nh.push(this) : this.u.Xq(this);
  }
};
function p(a, c) {
  var d = [a];
  a = Ba(a, c);
  for (var e, f = 0; (e = a[f]); f++) d.push.apply(d, p(e, c));
  return d;
}
b.Be = function () {
  return this.rv && !this.Ra && !(this.u && this.u.options.readOnly);
};
b.Lc = function () {
  return this.NC && !this.Ra && !(this.u && this.u.options.readOnly);
};
b.Xs = function (a) {
  this.NC = a;
};
b.$x = function (a) {
  this.Ra = a;
};
b.me = function () {
  return this.Im;
};
b.AD = function (a) {
  this.Im = a;
};
b.le = function () {
  return this.yB && !(this.u && this.u.options.readOnly);
};
b.Xx = function (a) {
  this.yB = a;
  a = 0;
  for (var c; (c = this.V[a]); a++)
    for (var d = 0, e; (e = c.ib[d]); d++) e.yi();
};
b.ew = function (a, c) {
  var d = this.fg(!0);
  a = a.fg(!0);
  if (d.length != a.length)
    throw Error("Connection lists did not match in length.");
  for (var e = 0; e < a.length; e++) if (a[e] == c) return d[e];
  return null;
};
b.Sa = function (a) {
  this.Kf = a;
};
b.aw = function () {
  return this.od;
};
b.vd = function (a) {
  this.od = g.g.Ls(a).Io;
};
b.Jb = function (a) {
  this.kl = a;
};
function w(a, c) {
  for (var d = 0, e; (e = a.V[d]); d++)
    for (var f = 0, h; (h = e.ib[f]); f++) if (h.name == c) return h;
  return null;
}
b.Zh = function () {
  for (var a = [], c = 0, d; (d = this.V[c]); c++)
    for (var e = 0, f; (f = d.ib[e]); e++) f.mp() && a.push(f.getValue());
  return a;
};
b.Yh = function () {
  for (var a = [], c = 0, d; (d = this.V[c]); c++)
    for (var e = 0, f; (f = d.ib[e]); e++)
      f.mp() && (f = this.u.gg(f.getValue())) && a.push(f);
  return a;
};
b.kt = function (a) {
  for (var c = 0, d; (d = this.V[c]); c++)
    for (var e = 0, f; (f = d.ib[e]); e++)
      f.mp() && a.Qa() == f.getValue() && Qb(f);
};
b.Ss = function (a, c) {
  for (var d = 0, e; (e = this.V[d]); d++)
    for (var f = 0, h; (h = e.ib[f]); f++)
      h.mp() && a == h.getValue() && h.setValue(c);
};
function C(a, c) {
  return (a = w(a, c)) ? a.getValue() : null;
}
function oc(a, c, d) {
  a = w(a, d);
  if (!a) throw Error('Field "' + d + '" not found.');
  a.setValue(c);
}
b.Yc = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.ka) {
      if (this.O)
        throw Error(
          "Remove output connection prior to adding previous connection."
        );
      this.ka = this.Uo(g.Tf);
    }
    this.ka.kb(c);
  } else if (this.ka) {
    if (this.ka.isConnected())
      throw Error(
        "Must disconnect previous statement before removing connection."
      );
    this.ka.J();
    this.ka = null;
  }
};
b.Xc = function (a, c) {
  if (a)
    void 0 === c && (c = null),
      this.Y || (this.Y = this.Uo(g.gb)),
      this.Y.kb(c);
  else if (this.Y) {
    if (this.Y.isConnected())
      throw Error("Must disconnect next statement before removing connection.");
    this.Y.J();
    this.Y = null;
  }
};
b.Md = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.O) {
      if (this.ka)
        throw Error(
          "Remove previous connection prior to adding output connection."
        );
      this.O = this.Uo(g.Sf);
    }
    this.O.kb(c);
  } else if (this.O) {
    if (this.O.isConnected())
      throw Error("Must disconnect output value before removing connection.");
    this.O.J();
    this.O = null;
  }
};
b.Ce = function (a) {
  this.ai != a &&
    (g.i.Ia(new g.i.ph(this, "inline", null, this.ai, a)), (this.ai = a));
};
function lb(a) {
  if (void 0 != a.ai) return a.ai;
  for (var c = 1; c < a.V.length; c++)
    if (a.V[c - 1].type == g.vh && a.V[c].type == g.vh) return !1;
  for (c = 1; c < a.V.length; c++)
    if (a.V[c - 1].type == g.lb && a.V[c].type == g.vh) return !0;
  return !1;
}
b.isEnabled = function () {
  return !this.disabled;
};
b.oe = function (a) {
  this.isEnabled() != a &&
    (g.i.Ia(new g.i.ph(this, "disabled", null, this.disabled, !a)),
    (this.disabled = !a));
};
function pc(a) {
  for (a = nc(a); a; ) {
    if (a.disabled) return !0;
    a = nc(a);
  }
  return !1;
}
b.isCollapsed = function () {
  return this.kk;
};
b.Bj = function (a) {
  this.kk != a &&
    (g.i.Ia(new g.i.ph(this, "collapsed", null, this.kk, a)), (this.kk = a));
};
b.toString = function (a, c) {
  function d(n) {
    var u = n.Pi;
    !u && n.oa && (u = n.oa.Pi);
    return !!u && (-1 != u.indexOf("Boolean") || -1 != u.indexOf("Number"));
  }
  function e() {
    k && k.wb() == l.wb() && k.Ga == l.Ga && (k = null);
  }
  var f = [];
  c = c || "?";
  var h = g.G.Ii;
  g.G.Ii = !0;
  for (var k = g.G.Jg(this), l = k; k; ) {
    switch (k.wb()) {
      case g.G.types.hf:
        var m = k.Ga;
        k.Xg() ? d(m) && f.push("(") : f.push(c);
        break;
      case g.G.types.Ec:
        (m = k.Ga), m.name != g.qe.Et && f.push(m.Gd());
    }
    m = k;
    k = m.Xg() || m.next();
    if (!k) {
      k = m.dh();
      for (e(); k && !k.next(); )
        (k = k.dh()),
          e(),
          k && k.wb() == g.G.types.hf && d(k.Ga) && f.push(")");
      k && (k = k.next());
    }
  }
  g.G.Ii = h;
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
  return a.Yf(g.lb, c);
}
function L(a, c) {
  return a.Yf(g.vh, c || "");
}
function qc(a, c) {
  var d = c.type ? 'Block "' + c.type + '": ' : "";
  if (c.output && c.previousStatement)
    throw Error(d + "Must not have both an output and a previousStatement.");
  c.style && c.style.Vg && ((a.Vg = c.style.Vg), (c.style = null));
  if (c.style && c.colour)
    throw Error(d + "Must not have both a colour and a style.");
  if (c.style) {
    var e = c.style;
    try {
      a.Jb(e);
    } catch (ua) {
      console.warn(d + "Style does not exist: ", e);
    }
  } else if ("colour" in c)
    if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
    else {
      e = c.colour;
      try {
        a.vd(e);
      } catch (ua) {
        console.warn(d + "Illegal colour value: ", e);
      }
    }
  for (e = 0; void 0 !== c["message" + e]; ) {
    for (
      var f = a,
        h = c["args" + e] || [],
        k = c["lastDummyAlign" + e],
        l = d,
        m = g.g.zL(c["message" + e]),
        n = [],
        u = 0,
        v = [],
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
        u++;
        v.push(h[I - 1]);
      } else (I = I.trim()) && v.push(I);
    }
    if (u != h.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          h.length +
          " arg(s)."
      );
    v.length &&
      ("string" == typeof v[v.length - 1] ||
        g.g.yb.startsWith(v[v.length - 1].type, "field_")) &&
      ((x = { type: "input_dummy" }), k && (x.align = k), v.push(x));
    k = { LEFT: g.st, RIGHT: g.yl, CENTRE: g.rt, CENTER: g.rt };
    h = [];
    for (x = 0; x < v.length; x++)
      if (((n = v[x]), "string" == typeof n)) h.push([n, void 0]);
      else {
        m = u = null;
        do
          if (((I = !1), "string" == typeof n)) u = new g.Pd(n);
          else
            switch (n.type) {
              case "input_value":
                m = K(f, n.name);
                break;
              case "input_statement":
                m = f.Yf(g.gb, n.name);
                break;
              case "input_dummy":
                m = L(f, n.name);
                break;
              default:
                (u = g.Ve.ma(n)), !u && n.alt && ((n = n.alt), (I = !0));
            }
        while (I);
        if (u) h.push([u, n.name]);
        else if (m) {
          n.check && m.kb(n.check);
          n.align &&
            ((u = k[n.align.toUpperCase()]),
            void 0 === u
              ? console.warn(l + "Illegal align value: ", n.align)
              : mc(m, u));
          for (n = 0; n < h.length; n++) J(m, h[n][0], h[n][1]);
          h.length = 0;
        }
      }
    e++;
  }
  void 0 !== c.inputsInline && a.Ce(c.inputsInline);
  void 0 !== c.output && a.Md(!0, c.output);
  void 0 !== c.previousStatement && a.Yc(!0, c.previousStatement);
  void 0 !== c.nextStatement && a.Xc(!0, c.nextStatement);
  void 0 !== c.tooltip && ((e = c.tooltip), (e = g.g.Mc(e)), a.Sa(e));
  void 0 !== c.enableContextMenu &&
    ((e = c.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== c.helpUrl && ((e = c.helpUrl), (e = g.g.Mc(e)), (a.ec = e));
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
b.Ld = function (a, c) {
  if (void 0 !== c && "boolean" != typeof c)
    throw Error("opt_disableCheck must be a boolean if provided");
  if (!c) {
    c = [];
    for (var d in a) void 0 !== this[d] && c.push(d);
    if (c.length)
      throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  }
  g.g.object.Ld(this, a);
};
b.Yf = function (a, c) {
  var d = null;
  if (a == g.lb || a == g.gb) d = this.Uo(a);
  a = new g.xz(a, c, this, d);
  this.V.push(a);
  return a;
};
function rc(a, c, d) {
  if (c != d) {
    for (var e = -1, f = d ? -1 : a.V.length, h = 0, k; (k = a.V[h]); h++)
      if (k.name == c) {
        if (((e = h), -1 != f)) break;
      } else if (d && k.name == d && ((f = h), -1 != e)) break;
    if (-1 == e) throw Error('Named input "' + c + '" not found.');
    if (-1 == f) throw Error('Reference input "' + d + '" not found.');
    a.ax(e, f);
  }
}
b.ax = function (a, c) {
  if (a == c) throw Error("Can't move input to itself.");
  if (a >= this.V.length)
    throw RangeError("Input index " + a + " out of bounds.");
  if (c > this.V.length)
    throw RangeError("Reference input " + c + " out of bounds.");
  var d = this.V[a];
  this.V.splice(a, 1);
  a < c && c--;
  this.V.splice(c, 0, d);
};
b.Ib = function (a, c) {
  for (var d = 0, e; (e = this.V[d]); d++)
    if (e.name == a) return e.J(), this.V.splice(d, 1), !0;
  if (c) return !1;
  throw Error("Input not found: " + a);
};
function z(a, c) {
  for (var d = 0, e; (e = a.V[d]); d++) if (e.name == c) return e;
  return null;
}
function M(a, c) {
  return (a = z(a, c)) && a.connection && a.connection.sa();
}
b.Cj = function (a) {
  this.Qe.text != a &&
    (g.i.Ia(new g.i.ph(this, "comment", null, this.Qe.text, a)),
    (this.Yn = this.Qe.text = a));
};
b.Ym = function () {};
b.Wm = function () {};
b.bb = function () {
  return this.eE;
};
b.moveBy = function (a, c) {
  if (this.fh) throw Error("Block has parent.");
  var d = new g.i.qn(this);
  this.eE.translate(a, c);
  d.bl();
  g.i.Ia(d);
};
b.Uo = function (a) {
  return new g.Ba(this, a);
};
function ic(a) {
  var c = a.type ? '"' + a.type + '" block' : "Block";
  a.id && (c += ' (id="' + a.id + '")');
  return c;
}
g.m = {};
g.m.Tp = !1;
g.m.register = function (a, c) {
  g.C.register(g.C.ea.RENDERER, a, c);
};
g.m.unregister = function (a) {
  g.C.unregister(g.C.ea.RENDERER, a);
};
g.m.TO = function () {
  g.m.Tp = !0;
};
g.m.UO = function () {
  g.m.Tp = !1;
};
g.m.U = function (a, c, d) {
  a = new (g.C.Ao(g.C.ea.RENDERER, a))(a);
  a.U(c, d);
  return a;
};
g.Dn = function () {
  this.we = this.rb = this.vb = null;
  this.type = "marker";
};
function F(a, c) {
  var d = a.rb;
  a.rb = c;
  a.we && a.we.draw(d, a.rb);
}
g.Dn.prototype.draw = function () {
  this.we && this.we.draw(this.rb, this.rb);
};
g.Dn.prototype.Oa = function () {
  this.we && this.we.Oa();
};
g.Dn.prototype.J = function () {
  this.we && this.we.J();
};
g.Cl = function () {
  g.Cl.v.constructor.call(this);
  this.type = "cursor";
};
g.g.object.X(g.Cl, g.Dn);
b = g.Cl.prototype;
b.next = function () {
  var a = this.rb;
  if (!a) return null;
  for (
    a = a.next();
    a && a.next() && (a.wb() == g.G.types.Ad || a.wb() == g.G.types.qc);

  )
    a = a.next();
  a && F(this, a);
  return a;
};
b.Xg = function () {
  var a = this.rb;
  if (!a) return null;
  if (a.wb() == g.G.types.Bd || a.wb() == g.G.types.Zj) a = a.next();
  (a = a.Xg()) && F(this, a);
  return a;
};
b.Hf = function () {
  var a = this.rb;
  if (!a) return null;
  for (
    a = a.Hf();
    a && a.Hf() && (a.wb() == g.G.types.Ad || a.wb() == g.G.types.qc);

  )
    a = a.Hf();
  a && F(this, a);
  return a;
};
b.dh = function () {
  var a = this.rb;
  if (!a) return null;
  (a = a.dh()) && a.wb() == g.G.types.qc && (a = a.Hf() || a);
  a && F(this, a);
  return a;
};
b.Yb = function (a) {
  if (this.rb && this.rb.wb() === g.G.types.Ec && this.rb.Ga.Yb(a)) return !0;
  switch (a.name) {
    case g.navigation.qb.Bd:
      return this.Hf(), !0;
    case g.navigation.qb.Jq:
      return this.dh(), !0;
    case g.navigation.qb.Ad:
      return this.next(), !0;
    case g.navigation.qb.zq:
      return this.Xg(), !0;
    default:
      return !1;
  }
};
g.xq = function () {
  g.xq.v.constructor.call(this);
};
g.g.object.X(g.xq, g.Cl);
b = g.xq.prototype;
b.Yb = function (a) {
  switch (a.name) {
    case g.navigation.qb.Bd:
      return this.Hf(), !0;
    case g.navigation.qb.Ad:
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
b.Xg = function () {
  return null;
};
b.Hf = function () {
  var a = this.rb;
  if (!a) return null;
  (a = a.Hf()) && F(this, a);
  return a;
};
b.dh = function () {
  return null;
};
g.m.JM = function () {};
g.$t = function () {
  this.Bf = [];
  this.fl = this.Mb = this.Cs = this.us = this.ts = this.Oh = this.vs = this.cj = this.wx = null;
};
b = g.$t.prototype;
b.Ja = function (a) {
  var c = document.createElement("div");
  c.className = "blocklyMenu goog-menu blocklyNonSelectable";
  c.tabIndex = 0;
  this.fl && g.g.$.pe(c, this.fl);
  this.Mb = c;
  for (var d = 0, e; (e = this.Bf[d]); d++) c.appendChild(e.ab());
  this.vs = g.ta(c, "mouseover", this, this.$I, !0);
  this.Oh = g.ta(c, "click", this, this.UI, !0);
  this.ts = g.ta(c, "mouseenter", this, this.YI, !0);
  this.us = g.ta(c, "mouseleave", this, this.ZI, !0);
  this.Cs = g.ta(c, "keydown", this, this.WI);
  a.appendChild(c);
};
b.focus = function () {
  var a = this.Mb;
  a && (a.focus({ preventScroll: !0 }), g.g.o.Ha(a, "blocklyFocused"));
};
b.pe = function (a) {
  this.fl = a;
};
b.J = function () {
  this.vs && (g.Na(this.vs), (this.vs = null));
  this.Oh && (g.Na(this.Oh), (this.Oh = null));
  this.ts && (g.Na(this.ts), (this.ts = null));
  this.us && (g.Na(this.us), (this.us = null));
  this.Cs && (g.Na(this.Cs), (this.Cs = null));
  for (var a = 0, c; (c = this.Bf[a]); a++) c.J();
  this.Mb = null;
};
function sc(a, c) {
  for (var d = a.Mb; c && c != d; ) {
    if (g.g.o.mw(c, "blocklyMenuItem"))
      for (var e = 0, f; (f = a.Bf[e]); e++) if (f.Mb == c) return f;
    c = c.parentElement;
  }
  return null;
}
b.kg = function (a) {
  var c = this.cj;
  c && (c.kg(!1), (this.cj = null));
  a &&
    (a.kg(!0),
    (this.cj = a),
    (c = this.Mb),
    g.g.style.fL(a.Mb, c),
    g.g.$.Zb(c, g.g.$.State.Yp, a.Qa()));
};
function tc(a) {
  var c = a.Bf.indexOf(a.cj);
  uc(a, 0 > c ? a.Bf.length : c, -1);
}
function uc(a, c, d) {
  c += d;
  for (var e; (e = a.Bf[c]); ) {
    if (e.isEnabled()) {
      a.kg(e);
      break;
    }
    c += d;
  }
}
b.$I = function (a) {
  (a = sc(this, a.target)) &&
    (a.isEnabled() ? this.cj != a && this.kg(a) : this.kg(null));
};
b.UI = function (a) {
  var c = this.wx;
  this.wx = null;
  (c &&
    "number" == typeof a.clientX &&
    1 > g.g.aa.Dv(c, new g.g.aa(a.clientX, a.clientY))) ||
    ((a = sc(this, a.target)) && a.isEnabled() && a.Tn && a.Tn(a));
};
b.YI = function () {
  this.focus();
};
b.ZI = function () {
  if (this.Mb) {
    var a = this.Mb;
    a && (a.blur(), g.g.o.ic(a, "blocklyFocused"));
    this.kg(null);
  }
};
b.WI = function (a) {
  if (this.Bf.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
    var c = this.cj;
    switch (a.keyCode) {
      case g.g.P.Dl:
      case g.g.P.$z:
        c && c.isEnabled() && c.Tn && c.Tn(c);
        break;
      case g.g.P.Du:
        tc(this);
        break;
      case g.g.P.Jt:
        uc(this, this.Bf.indexOf(this.cj), 1);
        break;
      case g.g.P.yG:
      case g.g.P.BF:
        uc(this, -1, 1);
        break;
      case g.g.P.xG:
      case g.g.P.YE:
        uc(this, this.Bf.length, -1);
        break;
      default:
        return;
    }
    a.preventDefault();
    a.stopPropagation();
  }
};
b.Xh = function () {
  var a = this.Mb,
    c = g.g.style.Xh(a);
  c.height = a.scrollHeight;
  return c;
};
g.au = function (a, c) {
  this.Qh = a;
  this.sb = c;
  this.Ir = !0;
  this.Mb = null;
  this.Vx = !1;
  this.fl = null;
  this.lC = this.$u = this.Zu = !1;
  this.Tn = null;
};
b = g.au.prototype;
b.ab = function () {
  var a = document.createElement("div");
  a.id = g.g.Vj.Rr();
  this.Mb = a;
  a.className =
    "blocklyMenuItem goog-menuitem " +
    (this.Ir ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") +
    (this.$u ? "blocklyMenuItemSelected goog-option-selected " : "") +
    (this.lC ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") +
    (this.Vx ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
  var c = document.createElement("div");
  c.className = "blocklyMenuItemContent goog-menuitem-content";
  if (this.Zu) {
    var d = document.createElement("div");
    d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
    c.appendChild(d);
  }
  d = this.Qh;
  "string" == typeof this.Qh && (d = document.createTextNode(this.Qh));
  c.appendChild(d);
  a.appendChild(c);
  this.fl && g.g.$.pe(a, this.fl);
  g.g.$.Zb(a, g.g.$.State.bk, (this.Zu && this.$u) || !1);
  g.g.$.Zb(a, g.g.$.State.PE, !this.Ir);
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
b.pe = function (a) {
  this.fl = a;
};
b.kg = function (a) {
  this.lC = a;
  var c = this.Mb;
  c &&
    this.isEnabled() &&
    (a
      ? (g.g.o.Ha(c, "blocklyMenuItemHighlight"),
        g.g.o.Ha(c, "goog-menuitem-highlight"))
      : (g.g.o.ic(c, "blocklyMenuItemHighlight"),
        g.g.o.ic(c, "goog-menuitem-highlight")));
};
b.isEnabled = function () {
  return this.Ir;
};
b.oe = function (a) {
  this.Ir = a;
};
function vc(a, c, d) {
  a.Tn = c.bind(d);
}
g.$a = {};
g.$a.zr = null;
g.$a.fd = null;
g.$a.show = function (a, c, d) {
  g.la.show(g.$a, d, g.$a.J);
  if (c.length) {
    var e = g.$a.mK(c, d);
    g.$a.fd = e;
    g.$a.Yk(e, a, d);
    setTimeout(function () {
      e.focus();
    }, 1);
    g.$a.zr = null;
  } else g.$a.Oa();
};
g.$a.mK = function (a, c) {
  var d = new g.$t();
  d.pe(g.g.$.Vf.iG);
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new g.au(f.text);
    h.Vx = c;
    h.pe(g.g.$.Vf.jG);
    d.Bf.push(h);
    h.oe(f.enabled);
    f.enabled &&
      vc(
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
g.$a.Yk = function (a, c, d) {
  var e = g.g.SI();
  c = new g.g.Rect(
    c.clientY + e.top,
    c.clientY + e.top,
    c.clientX + e.left,
    c.clientX + e.left
  );
  g.$a.VH(a);
  var f = a.Xh();
  d &&
    ((c.left += f.width),
    (c.right += f.width),
    (e.left += f.width),
    (e.right += f.width));
  g.la.nK(e, c, f, d);
  a.focus();
};
g.$a.VH = function (a) {
  a.Ja(g.la.pb);
  var c = a.Mb;
  g.g.o.Ha(c, "blocklyContextMenu");
  g.ta(c, "contextmenu", null, g.g.SJ);
  a.focus();
};
g.$a.Oa = function () {
  g.la.Cm(g.$a);
  g.$a.zr = null;
};
g.$a.J = function () {
  g.$a.fd && (g.$a.fd.J(), (g.$a.fd = null));
};
g.$a.gr = function (a, c) {
  return function () {
    g.i.disable();
    try {
      var d = g.S.qk(c, a.u),
        e = a.bb();
      e.x = a.L ? e.x - g.Vd : e.x + g.Vd;
      e.y += 2 * g.Vd;
      d.moveBy(e.x, e.y);
    } finally {
      g.i.enable();
    }
    g.i.isEnabled() && !d.Ra && g.i.Ia(new g.i.gq(d));
    d.select();
  };
};
g.$a.qO = function (a) {
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
g.$a.rO = function (a) {
  return {
    text: g.h.DUPLICATE_COMMENT,
    enabled: !0,
    Aa: function () {
      g.duplicate(a);
    },
  };
};
g.$a.XO = function (a, c) {
  if (!g.$l) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
  var d = { enabled: !g.g.userAgent.gf };
  d.text = g.h.ADD_COMMENT;
  d.Aa = function () {
    var e = new g.$l(a, g.h.WORKSPACE_COMMENT_DEFAULT_TEXT, g.$l.NE, g.$l.NE),
      f = aa(a).getBoundingClientRect();
    f = new g.g.aa(c.clientX - f.left, c.clientY - f.top);
    var h = g.g.Eo(a.Hb);
    f = g.g.aa.oo(f, h);
    f.scale(1 / a.scale);
    e.moveBy(f.x, f.y);
    a.ra && (e.Ae(), e.Ja(), e.select());
  };
  return d;
};
g.Ca = {};
g.Ca.Px = function () {
  g.Va.C.register({
    ce: function () {
      return g.h.UNDO;
    },
    cb: function (a) {
      return 0 < a.u.ql.length ? "enabled" : "disabled";
    },
    Aa: function (a) {
      Na(a.u, !1);
    },
    cf: g.Va.Xd.ad,
    id: "undoWorkspace",
    weight: 1,
  });
};
g.Ca.Ox = function () {
  g.Va.C.register({
    ce: function () {
      return g.h.REDO;
    },
    cb: function (a) {
      return 0 < a.u.lp.length ? "enabled" : "disabled";
    },
    Aa: function (a) {
      Na(a.u, !0);
    },
    cf: g.Va.Xd.ad,
    id: "redoWorkspace",
    weight: 2,
  });
};
g.Ca.tK = function () {
  g.Va.C.register({
    ce: function () {
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
      a.hd(!1);
      g.i.na(!0);
      for (var c = a.dc(!0), d = 0, e = 0, f; (f = c[e]); e++)
        if (f.Lc()) {
          var h = f.bb();
          f.moveBy(-h.x, d - h.y);
          wc(f);
          d = f.bb().y + E(f).height + a.Sb.W().Bn;
        }
      g.i.na(!1);
      a.hd(!0);
    },
    cf: g.Va.Xd.ad,
    id: "cleanWorkspace",
    weight: 3,
  });
};
g.Ca.PD = function (a, c) {
  for (var d = 0, e = 0; e < c.length; e++)
    for (var f = c[e]; f; )
      setTimeout(f.Bj.bind(f, a), d), (f = q(f)), (d += 10);
};
g.Ca.uK = function () {
  g.Va.C.register({
    ce: function () {
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
      g.Ca.PD(!0, a.u.dc(!0));
    },
    cf: g.Va.Xd.ad,
    id: "collapseWorkspace",
    weight: 4,
  });
};
g.Ca.HK = function () {
  g.Va.C.register({
    ce: function () {
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
      g.Ca.PD(!1, a.u.dc(!0));
    },
    cf: g.Va.Xd.ad,
    id: "expandWorkspace",
    weight: 5,
  });
};
g.Ca.CA = function (a, c) {
  if (a.Be()) Array.prototype.push.apply(c, p(a, !1));
  else {
    a = Ba(a, !1);
    for (var d = 0; d < a.length; d++) g.Ca.CA(a[d], c);
  }
};
g.Ca.bw = function (a) {
  var c = [];
  a = a.dc(!0);
  for (var d = 0; d < a.length; d++) g.Ca.CA(a[d], c);
  return c;
};
g.Ca.Ar = function (a, c) {
  g.i.na(c);
  var d = a.shift();
  d && (d.u ? (d.J(!1, !0), setTimeout(g.Ca.Ar, 10, a, c)) : g.Ca.Ar(a, c));
  g.i.na(!1);
};
g.Ca.BK = function () {
  g.Va.C.register({
    ce: function (a) {
      if (a.u)
        return (
          (a = g.Ca.bw(a.u).length),
          1 == a
            ? g.h.DELETE_BLOCK
            : g.h.DELETE_X_BLOCKS.replace("%1", String(a))
        );
    },
    cb: function (a) {
      if (a.u) return 0 < g.Ca.bw(a.u).length ? "enabled" : "disabled";
    },
    Aa: function (a) {
      if (a.u) {
        xc(a.u);
        var c = g.Ca.bw(a.u),
          d = g.g.Vh();
        2 > c.length
          ? g.Ca.Ar(c, d)
          : g.confirm(
              g.h.DELETE_ALL_BLOCKS.replace("%1", c.length),
              function (e) {
                e && g.Ca.Ar(c, d);
              }
            );
      }
    },
    cf: g.Va.Xd.ad,
    id: "workspaceDelete",
    weight: 6,
  });
};
g.Ca.YK = function () {
  g.Ca.Px();
  g.Ca.Ox();
  g.Ca.tK();
  g.Ca.uK();
  g.Ca.HK();
  g.Ca.BK();
};
g.Ca.EK = function () {
  g.Va.C.register({
    ce: function () {
      return g.h.DUPLICATE_BLOCK;
    },
    cb: function (a) {
      a = a.block;
      return !a.Ub && a.Be() && a.Lc()
        ? (Ma(a.u) ? La(a.u, g.g.Yv(a, !0)) : 1)
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    Aa: function (a) {
      a.block && g.duplicate(a.block);
    },
    cf: g.Va.Xd.qc,
    id: "blockDuplicate",
    weight: 1,
  });
};
g.Ca.wK = function () {
  g.Va.C.register({
    ce: function (a) {
      return a.block.sf ? g.h.REMOVE_COMMENT : g.h.ADD_COMMENT;
    },
    cb: function (a) {
      a = a.block;
      return g.g.userAgent.gf ||
        a.Ub ||
        !a.u.options.Zn ||
        a.isCollapsed() ||
        !a.le()
        ? "hidden"
        : "enabled";
    },
    Aa: function (a) {
      a = a.block;
      a.sf ? a.Cj(null) : a.Cj("");
    },
    cf: g.Va.Xd.qc,
    id: "blockComment",
    weight: 2,
  });
};
g.Ca.KK = function () {
  g.Va.C.register({
    ce: function (a) {
      return lb(a.block) ? g.h.EXTERNAL_INPUTS : g.h.INLINE_INPUTS;
    },
    cb: function (a) {
      a = a.block;
      if (!a.Ub && a.Lc() && !a.isCollapsed())
        for (var c = 1; c < a.V.length; c++)
          if (a.V[c - 1].type != g.gb && a.V[c].type != g.gb) return "enabled";
      return "hidden";
    },
    Aa: function (a) {
      a.block.Ce(!lb(a.block));
    },
    cf: g.Va.Xd.qc,
    id: "blockInline",
    weight: 3,
  });
};
g.Ca.vK = function () {
  g.Va.C.register({
    ce: function (a) {
      return a.block.isCollapsed() ? g.h.EXPAND_BLOCK : g.h.COLLAPSE_BLOCK;
    },
    cb: function (a) {
      a = a.block;
      return !a.Ub && a.Lc() ? "enabled" : "hidden";
    },
    Aa: function (a) {
      a.block.Bj(!a.block.isCollapsed());
    },
    cf: g.Va.Xd.qc,
    id: "blockCollapseExpand",
    weight: 4,
  });
};
g.Ca.CK = function () {
  g.Va.C.register({
    ce: function (a) {
      return a.block.isEnabled() ? g.h.DISABLE_BLOCK : g.h.ENABLE_BLOCK;
    },
    cb: function (a) {
      a = a.block;
      return !a.Ub && a.u.options.disable && a.le()
        ? pc(a)
          ? "disabled"
          : "enabled"
        : "hidden";
    },
    Aa: function (a) {
      a = a.block;
      var c = g.i.xc();
      c || g.i.na(!0);
      a.oe(!a.isEnabled());
      c || g.i.na(!1);
    },
    cf: g.Va.Xd.qc,
    id: "blockDisable",
    weight: 5,
  });
};
g.Ca.Nx = function () {
  g.Va.C.register({
    ce: function (a) {
      var c = a.block;
      a = p(c, !1).length;
      (c = q(c)) && (a -= p(c, !1).length);
      return 1 == a
        ? g.h.DELETE_BLOCK
        : g.h.DELETE_X_BLOCKS.replace("%1", String(a));
    },
    cb: function (a) {
      return !a.block.Ub && a.block.Be() ? "enabled" : "hidden";
    },
    Aa: function (a) {
      g.i.na(!0);
      a.block.J(!0, !0);
      g.i.na(!1);
    },
    cf: g.Va.Xd.qc,
    id: "blockDelete",
    weight: 6,
  });
};
g.Ca.IK = function () {
  g.Va.C.register({
    ce: function () {
      return g.h.HELP;
    },
    cb: function (a) {
      a = a.block;
      return ("function" == typeof a.ec ? a.ec() : a.ec) ? "enabled" : "hidden";
    },
    Aa: function (a) {
      a.block.showHelp();
    },
    cf: g.Va.Xd.qc,
    id: "blockHelp",
    weight: 7,
  });
};
g.Ca.sK = function () {
  g.Ca.EK();
  g.Ca.wK();
  g.Ca.KK();
  g.Ca.vK();
  g.Ca.CK();
  g.Ca.Nx();
  g.Ca.IK();
};
g.Ca.zK = function () {
  g.Ca.YK();
  g.Ca.sK();
};
g.Va = function () {
  g.Va.C = this;
  this.af = {};
  g.Ca.zK();
};
g.Va.Xd = { qc: "block", ad: "workspace" };
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
function yc(a, c) {
  var d = [],
    e = g.Va.C.af;
  Object.keys(e).forEach(function (f) {
    f = e[f];
    if (a == f.cf) {
      var h = f.cb(c);
      "hidden" != h &&
        ((f = {
          text: "function" == typeof f.ce ? f.ce(c) : f.ce,
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
g.i.yg = function (a, c, d) {
  g.i.yg.v.constructor.call(this, d);
  this.TC = a;
  this.PC = c;
};
g.g.object.X(g.i.yg, g.i.Ne);
g.i.yg.prototype.type = g.i.bk;
g.i.yg.prototype.ya = function () {
  var a = g.i.yg.v.ya.call(this);
  a.oldElementId = this.TC;
  a.newElementId = this.PC;
  return a;
};
g.i.yg.prototype.ma = function (a) {
  g.i.yg.v.ma.call(this, a);
  this.TC = a.oldElementId;
  this.PC = a.newElementId;
};
g.C.register(g.C.ea.kc, g.i.bk, g.i.yg);
g.Bc = function (a, c) {
  g.Bc.v.constructor.call(this, a, c);
  this.Lg = a.u.xr[c];
  this.jB = a.u.xr[g.Pl[c]];
  this.Vk = new g.g.aa(0, 0);
  this.wi = g.Bc.Bg.tA;
  this.oa = null;
};
g.g.object.X(g.Bc, g.Ba);
g.Bc.Bg = { tA: -1, kA: 0, Zl: 1 };
b = g.Bc.prototype;
b.J = function () {
  g.Bc.v.J.call(this);
  this.wi == g.Bc.Bg.Zl && zc(this.Lg, this, this.y);
};
b.Z = function () {
  return g.Bc.v.Z.call(this);
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
  if (!a.I.u.Kc()) {
    var d = a.I.ie();
    if (!d.Ub) {
      var e = !1;
      if (!d.Lc()) {
        d = c.Z().ie();
        if (!d.Lc()) return;
        c = a;
        e = !0;
      }
      var f = g.selected == d;
      f || d.Vq();
      var h = c.x + g.Vd + Math.floor(Math.random() * g.zt) - a.x,
        k = c.y + g.Vd + Math.floor(Math.random() * g.zt) - a.y;
      e && (k = -k);
      d.L && (h = c.x - g.Vd - Math.floor(Math.random() * g.zt) - a.x);
      d.moveBy(h, k);
      f || d.op();
    }
  }
}
b.moveTo = function (a, c) {
  if (this.wi == g.Bc.Bg.tA) {
    var d = this.Lg;
    d.wc.splice(Ac(d, c), 0, this);
    this.wi = g.Bc.Bg.Zl;
  } else
    this.wi == g.Bc.Bg.Zl &&
      (zc(this.Lg, this, this.y),
      (d = this.Lg),
      d.wc.splice(Ac(d, c), 0, this));
  this.x = a;
  this.y = c;
};
b.moveBy = function (a, c) {
  this.moveTo(this.x + a, this.y + c);
};
function Bc(a, c) {
  a.moveTo(c.x + a.Vk.x, c.y + a.Vk.y);
}
function Cc(a, c, d) {
  a.Vk.x = c;
  a.Vk.y = d;
}
function Dc(a) {
  var c = a.oa.x - a.x,
    d = a.oa.y - a.y;
  if (0 != c || 0 != d) {
    a = a.sa();
    var e = a.Pa();
    if (!e) throw Error("block is not rendered.");
    e = g.g.xf(e);
    a.Pa().setAttribute(
      "transform",
      "translate(" + (e.x - c) + "," + (e.y - d) + ")"
    );
    rb(a, -c, -d);
  }
}
b.closest = function (a, c) {
  var d = this.jB;
  if (d.wc.length) {
    var e = this.y,
      f = this.x;
    this.x = f + c.x;
    this.y = e + c.y;
    var h = Ac(d, this.y);
    c = null;
    for (var k = a, l, m = h - 1; 0 <= m && Math.abs(d.wc[m].y - this.y) <= a; )
      (l = d.wc[m]),
        ra(d.YA, this, l, !0, k) && ((c = l), (k = wa(l, this))),
        m--;
    for (; h < d.wc.length && Math.abs(d.wc[h].y - this.y) <= a; )
      (l = d.wc[h]),
        ra(d.YA, this, l, !0, k) && ((c = l), (k = wa(l, this))),
        h++;
    this.x = f;
    this.y = e;
    a = { connection: c, Os: k };
  } else a = { connection: null, Os: a };
  return a;
};
function lc(a, c) {
  (c && a.wi == g.Bc.Bg.Zl) ||
    (!c && a.wi == g.Bc.Bg.kA) ||
    a.I.Ub ||
    (c
      ? ((c = a.Lg), c.wc.splice(Ac(c, a.y), 0, a), (a.wi = g.Bc.Bg.Zl))
      : (a.wi == g.Bc.Bg.Zl && zc(a.Lg, a, a.y), (a.wi = g.Bc.Bg.kA)));
}
function kc(a) {
  lc(a, !0);
  var c = [];
  if (a.type != g.lb && a.type != g.gb) return c;
  if ((a = a.sa())) {
    if (a.isCollapsed()) {
      var d = [];
      a.O && d.push(a.O);
      a.Y && d.push(a.Y);
      a.ka && d.push(a.ka);
    } else d = a.fg(!0);
    for (var e = 0; e < d.length; e++) c.push.apply(c, kc(d[e]));
    c.length || (c[0] = a);
  }
  return c;
}
b.As = function (a) {
  zb(this, a);
};
b.Av = function (a, c) {
  g.Bc.v.Av.call(this, a, c);
  a.ra && a.Ja();
  c.ra && (Fa(c), c.Ja(), (c.Pa().style.display = "block"));
};
b.rp = function () {
  g.Bc.v.rp.call(this);
  var a = this.sa();
  a && (a.Ae(), a.Ja(!1), (a = this.Z()), a.ra && a.Ja());
};
b.OC = function (a) {
  return Ec(this.jB, this, a);
};
b.$f = function (a) {
  g.Bc.v.$f.call(this, a);
  var c = this.Z();
  a = a.Z();
  var d = c.ra,
    e = a.ra;
  d && Fa(c);
  e && Fa(a);
  d && e && (this.type == g.gb || this.type == g.Tf ? a.Ja() : c.Ja());
  if ((c = Aa(c, a)))
    (c = c.isVisible()), (a.Pa().style.display = c ? "block" : "none");
};
b.aD = function () {
  !this.isConnected() ||
    (this.oa && ra(hb(this), this, this.oa, !1)) ||
    (y(t(this) ? this.sa() : this.I), this.I.cc());
};
g.fq = function () {
  g.fq.v.constructor.call(this);
};
g.g.object.X(g.fq, g.Cl);
b = g.fq.prototype;
b.next = function () {
  var a = this.rb;
  if (!a) return null;
  (a = Fc(this, a, this.Ay)) && F(this, a);
  return a;
};
b.Xg = function () {
  return this.next();
};
b.Hf = function () {
  var a = this.rb;
  if (!a) return null;
  (a = Gc(this, a, this.Ay)) && F(this, a);
  return a;
};
b.dh = function () {
  return this.Hf();
};
function Fc(a, c, d) {
  if (!c) return null;
  var e = c.Xg() || c.next();
  if (d(e)) return e;
  if (e) return Fc(a, e, d);
  c = Hc(a, c.dh());
  return d(c) ? c : c ? Fc(a, c, d) : null;
}
function Gc(a, c, d) {
  if (!c) return null;
  var e = c.Hf();
  e = e ? Ic(a, e) : c.dh();
  return d(e) ? e : e ? Gc(a, e, d) : null;
}
b.Ay = function (a) {
  var c = !1;
  a = a && a.wb();
  if (
    a == g.G.types.Zj ||
    a == g.G.types.hf ||
    a == g.G.types.Ec ||
    a == g.G.types.Ad ||
    a == g.G.types.Bd ||
    a == g.G.types.ad
  )
    c = !0;
  return c;
};
function Hc(a, c) {
  if (!c) return null;
  var d = c.next();
  return d ? d : Hc(a, c.dh());
}
function Ic(a, c) {
  if (!c.Xg()) return c;
  for (c = c.Xg(); c.next(); ) c = c.next();
  return Ic(a, c);
}
g.Tq = function () {
  g.Tq.v.constructor.call(this);
};
g.g.object.X(g.Tq, g.fq);
g.Tq.prototype.Ay = function (a) {
  var c = !1,
    d = a && a.wb();
  a && ((a = a.Ga), d == g.G.types.Ec && a && a.yC() && bb(a) && (c = !0));
  return c;
};
g.Bb = function (a, c, d) {
  this.N = g.g.o.M(g.g.F.rc, {}, null);
  this.N.Np = "";
  this.style = Jc(a.Sb.W(), null);
  this.Gb = a.Sb.HC(this.N, this.style);
  this.Qx = this.ra = !1;
  this.u = a;
  this.ka = this.Y = this.O = null;
  this.Up = g.g.Gk() && !!a.Oe;
  var e = this.Gb.Pb;
  e.Kf = this;
  g.K.em(e);
  g.Bb.v.constructor.call(this, a, c, d);
  this.N.dataset
    ? (this.N.dataset.id = this.id)
    : g.g.userAgent.gf && this.N.setAttribute("data-id", this.id);
};
g.g.object.X(g.Bb, g.qe);
g.Bb.prototype.height = 0;
g.Bb.prototype.width = 0;
g.Bb.prototype.Ge = null;
g.Bb.IM = -1;
g.Bb.vE = "TEMP_COLLAPSED_WARNING_";
b = g.Bb.prototype;
b.Ae = function () {
  if (!this.u.ra) throw TypeError("Workspace is headless.");
  for (var a = 0, c; (c = this.V[a]); a++) c.U();
  c = mb(this);
  for (a = 0; a < c.length; a++) Va(c[a]);
  this.mc();
  jb(this.Gb, "blocklyDraggable", this.Lc());
  a = this.Pa();
  this.u.options.readOnly ||
    this.sI ||
    !a ||
    g.ta(a, "mousedown", this, this.sj);
  this.sI = !0;
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
    a = new g.i.yg(a, this.id, this.u.id);
    g.i.Ia(a);
    g.selected = this;
    this.Vq();
  }
};
function wb(a) {
  if (g.selected == a) {
    var c = new g.i.yg(a.id, null, a.u.id);
    c.Zc = a.u.id;
    g.i.Ia(c);
    g.selected = null;
    a.op();
  }
}
b.td = null;
b.Yn = null;
b.sf = null;
b.ef = null;
function mb(a) {
  var c = [];
  a.td && c.push(a.td);
  a.sf && c.push(a.sf);
  a.ef && c.push(a.ef);
  return c;
}
b.Ys = function (a) {
  var c = this.fh;
  if (a != c) {
    g.g.o.Dp();
    g.Bb.v.Ys.call(this, a);
    g.g.o.Ep();
    var d = this.Pa();
    if (!this.u.xw && d) {
      var e = this.bb();
      a
        ? (a.Pa().appendChild(d),
          (a = this.bb()),
          rb(this, a.x - e.x, a.y - e.y))
        : c && (this.u.Hb.appendChild(d), this.translate(e.x, e.y));
      this.mc();
    }
  }
};
b.bb = function () {
  var a = 0,
    c = 0,
    d = this.Up ? this.u.Oe.xc() : null,
    e = this.Pa();
  if (e) {
    do {
      var f = g.g.xf(e);
      a += f.x;
      c += f.y;
      this.Up &&
        this.u.Oe.Ng.firstChild == e &&
        ((f = this.u.Oe.iw()), (a += f.x), (c += f.y));
      e = e.parentNode;
    } while (e && e != this.u.Hb && e != d);
  }
  return new g.g.aa(a, c);
};
b.moveBy = function (a, c) {
  if (this.fh) throw Error("Block has parent.");
  var d = g.i.isEnabled();
  if (d) var e = new g.i.qn(this);
  var f = this.bb();
  this.translate(f.x + a, f.y + c);
  rb(this, a, c);
  d && (e.bl(), g.i.Ia(e));
  Ga(this.u);
};
b.translate = function (a, c) {
  this.Pa().setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.moveTo = function (a) {
  var c = this.bb();
  this.moveBy(a.x - c.x, a.y - c.y);
};
b.$w = function (a) {
  this.Up
    ? this.u.Oe.ol(a.x, a.y)
    : ((this.N.Np = "translate(" + a.x + "," + a.y + ")"),
      this.N.setAttribute("transform", this.N.Np + this.N.Cp));
};
function wc(a) {
  if (a.u && !a.u.Kc() && !a.getParent() && !a.Ub) {
    var c = a.u.yf;
    if (c && c.oL) {
      var d = c.jy,
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
function Kc(a) {
  var c = a.bb(),
    d = E(a);
  if (a.L) {
    a = c.x - d.width;
    var e = c.x;
  } else (a = c.x), (e = c.x + d.width);
  return new g.g.Rect(c.y, c.y + d.height, a, e);
}
b.Vo = function () {
  this.Gb.lm = this.u.Sb.W();
  for (var a = 0, c; (c = this.V[a]); a++) c.Vo();
};
b.Bj = function (a) {
  this.kk != a &&
    (g.Bb.v.Bj.call(this, a), a ? this.ra && this.Ja() : Lc(this));
};
function Lc(a) {
  for (var c = a.isCollapsed(), d = 0, e; (e = a.V[d]); d++)
    e.name != g.qe.sn && e.Ob(!c);
  if (c) {
    e = mb(a);
    for (d = 0; (c = e[d]); d++) c.Ob(!1);
    d = a.toString(g.wE);
    (e = w(a, g.qe.Et))
      ? e.setValue(d)
      : ((e = z(a, g.qe.sn) || L(a, g.qe.sn)), J(e, new g.Pd(d), g.qe.Et));
  } else a.Ib(g.qe.sn);
}
b.sj = function (a) {
  var c = this.u && this.u.Wh(a);
  if (c) {
    if (c.Ak)
      throw Error(
        "Tried to call gesture.handleBlockStart, but the gesture had already been started."
      );
    Ib(c, this);
    c.Cf = a;
  }
};
b.showHelp = function () {
  var a = "function" == typeof this.ec ? this.ec() : this.ec;
  a && window.open(a);
};
b.Ap = function (a) {
  if (this.u.options.readOnly || !this.contextMenu) var c = null;
  else (c = yc(g.Va.Xd.qc, { block: this })), this.Sh && this.Sh(c);
  c && c.length && (g.$a.show(a, c, this.L), (g.$a.zr = this));
};
function rb(a, c, d) {
  if (a.ra) {
    for (var e = a.fg(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
    e = mb(a);
    for (f = 0; f < e.length; f++) Wa(e[f]);
    for (f = 0; f < a.Nh.length; f++) rb(a.Nh[f], c, d);
  }
}
b.Dj = function (a) {
  if (a) {
    var c = this.Pa();
    c.Np = "";
    c.Cp = "";
    g.rm = g.rm.concat(this.fg(!0));
    g.g.o.Ha(this.N, "blocklyDragging");
  } else (g.rm = []), g.g.o.ic(this.N, "blocklyDragging");
  for (c = 0; c < this.Nh.length; c++) this.Nh[c].Dj(a);
};
b.Xs = function (a) {
  g.Bb.v.Xs.call(this, a);
  jb(this.Gb, "blocklyDraggable", a);
};
b.Xx = function (a) {
  g.Bb.v.Xx.call(this, a);
  a = mb(this);
  for (var c = 0; c < a.length; c++) a[c].yi();
};
b.$x = function (a) {
  g.Bb.v.$x.call(this, a);
  this.mc();
};
b.AD = function (a) {
  this.Im != a &&
    (this.Im = a) &&
    (this.vd(this.u.Sb.W().Tt), jb(this.Gb, "blocklyInsertionMarker", !0));
};
b.Pa = function () {
  return this.N;
};
b.J = function (a, c) {
  if (this.u) {
    g.K.J();
    g.K.xy(this.Gb.Pb);
    g.g.o.Dp();
    var d = this.u;
    g.selected == this && (wb(this), xc(this.u));
    g.$a.zr == this && g.$a.Oa();
    this.u.Fb && g.navigation.IJ(this);
    c && this.ra && (y(this, a), g.Kb.jI(this));
    this.ra = !1;
    if (this.Ge) {
      for (var e in this.Ge) clearTimeout(this.Ge[e]);
      this.Ge = null;
    }
    c = mb(this);
    for (e = 0; e < c.length; e++) c[e].J();
    g.Bb.v.J.call(this, !!a);
    g.g.o.removeNode(this.N);
    Ga(d);
    this.N = null;
    g.g.o.Ep();
  }
};
b.mc = function () {
  this.Gb.mc(this);
  for (var a = mb(this), c = 0; c < a.length; c++) a[c].mc();
  for (a = 0; (c = this.V[a]); a++)
    for (var d = 0, e; (e = c.ib[d]); d++) e.mc();
};
function Fa(a) {
  var c = Ba(a, !1);
  a.mc();
  if (!a.isCollapsed()) {
    a = 0;
    for (var d; (d = c[a]); a++) d.ra && Fa(d);
  }
}
b.FI = function () {
  return this.sf;
};
b.Cj = function (a) {
  if (!g.Comment) throw Error("Missing require for Blockly.Comment");
  this.Qe.text != a &&
    (g.Bb.v.Cj.call(this, a),
    (a = null != a),
    !!this.sf == a
      ? ((a = this.sf),
        a.ml
          ? (a.ml.value = a.sd.text)
          : a.Xk && (a.Xk.firstChild.textContent = a.sd.text))
      : (a
          ? (this.Yn = this.sf = new g.Comment(this))
          : (this.sf.J(), (this.Yn = this.sf = null)),
        this.ra && (this.Ja(), this.cc())));
};
b.Ym = function (a, c) {
  if (!g.Qn) throw Error("Missing require for Blockly.Warning");
  this.Ge || (this.Ge = Object.create(null));
  var d = c || "";
  if (d) this.Ge[d] && (clearTimeout(this.Ge[d]), delete this.Ge[d]);
  else for (var e in this.Ge) clearTimeout(this.Ge[e]), delete this.Ge[e];
  if (this.u.Kc()) {
    var f = this;
    this.Ge[d] = setTimeout(function () {
      f.u && (delete f.Ge[d], f.Ym(a, d));
    }, 100);
  } else {
    this.Ub && (a = null);
    c = !1;
    if ("string" == typeof a) {
      e = nc(this);
      for (var h = null; e; ) e.isCollapsed() && (h = e), (e = nc(e));
      h && h.Ym(g.h.COLLAPSED_WARNINGS_WARNING, g.Bb.vE);
      this.ef || ((this.ef = new g.Qn(this)), (c = !0));
      Xa(this.ef, a, d);
    } else
      this.ef && !d
        ? (this.ef.J(), (c = !0))
        : this.ef &&
          ((c = this.ef.Gd()),
          Xa(this.ef, "", d),
          (e = this.ef.Gd()) || this.ef.J(),
          (c = c != e));
    c && this.ra && (this.Ja(), this.cc());
  }
};
b.Wm = function (a) {
  this.td && this.td !== a && this.td.J();
  a && ((a.T = this), (this.td = a), Va(a));
  this.ra && (this.Ja(), this.cc());
};
b.oe = function (a) {
  this.isEnabled() != a &&
    (g.Bb.v.oe.call(this, a), this.ra && !pc(this) && Fa(this));
};
b.kg = function (a) {
  this.ra && this.Gb.UD(a);
};
b.Vq = function () {
  jb(this.Gb, "blocklySelected", !0);
};
b.op = function () {
  jb(this.Gb, "blocklySelected", !1);
};
b.xp = function (a) {
  jb(this.Gb, "blocklyDraggingDelete", a);
};
b.aw = function () {
  return this.style.Qi;
};
b.vd = function (a) {
  g.Bb.v.vd.call(this, a);
  a = Mc(this.u.Sb.W(), this.od);
  this.Gb.Jb(a.style);
  this.style = a.style;
  this.kl = a.name;
  this.mc();
};
b.Jb = function (a) {
  var c = Jc(this.u.Sb.W(), a);
  this.kl = a;
  if (c)
    (this.Vg = c.Vg),
      this.Gb.Jb(c),
      (this.od = c.Qi),
      (this.style = c),
      this.mc();
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
b.Yc = function (a, c) {
  g.Bb.v.Yc.call(this, a, c);
  this.ra && (this.Ja(), this.cc());
};
b.Xc = function (a, c) {
  g.Bb.v.Xc.call(this, a, c);
  this.ra && (this.Ja(), this.cc());
};
b.Md = function (a, c) {
  g.Bb.v.Md.call(this, a, c);
  this.ra && (this.Ja(), this.cc());
};
b.Ce = function (a) {
  g.Bb.v.Ce.call(this, a);
  this.ra && (this.Ja(), this.cc());
};
b.Ib = function (a, c) {
  a = g.Bb.v.Ib.call(this, a, c);
  this.ra && (this.Ja(), this.cc());
  return a;
};
b.ax = function (a, c) {
  g.Bb.v.ax.call(this, a, c);
  this.ra && (this.Ja(), this.cc());
};
b.Yf = function (a, c) {
  a = g.Bb.v.Yf.call(this, a, c);
  this.ra && (this.Ja(), this.cc());
  return a;
};
function Ea(a, c) {
  a.ka && lc(a.ka, c);
  a.O && lc(a.O, c);
  if (a.Y) {
    lc(a.Y, c);
    var d = a.Y.sa();
    d && Ea(d, c);
  }
  if (!a.kk)
    for (d = 0; d < a.V.length; d++) {
      var e = a.V[d].connection;
      e && (lc(e, c), (e = e.sa()) && Ea(e, c));
    }
}
b.fg = function (a) {
  var c = [];
  if (a || this.ra)
    if (
      (this.O && c.push(this.O),
      this.ka && c.push(this.ka),
      this.Y && c.push(this.Y),
      a || !this.kk)
    ) {
      a = 0;
      for (var d; (d = this.V[a]); a++) d.connection && c.push(d.connection);
    }
  return c;
};
b.ks = function () {
  return g.Bb.v.ks.call(this);
};
b.ew = function (a, c) {
  return g.Bb.v.ew.call(this, a, c);
};
b.Uo = function (a) {
  return new g.Bc(this, a);
};
b.cc = function () {
  if (this.u && !this.u.Kc()) {
    var a = this.ie();
    if (!a.Ub)
      for (var c = this.fg(!1), d = 0, e; (e = c[d]); d++) {
        e.isConnected() && t(e) && e.sa().cc();
        for (var f = e.OC(g.Vd), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            (k.Z().ie() != a && (t(e) ? zb(k, e) : zb(e, k)));
      }
  }
};
function tb(a) {
  var c = g.i.xc();
  setTimeout(function () {
    g.i.na(c);
    wc(a);
    g.i.na(!1);
  }, g.eq / 2);
  setTimeout(function () {
    g.i.na(c);
    a.cc();
    g.i.na(!1);
  }, g.eq);
}
function ib(a, c, d) {
  (c.type != g.gb && c.type != g.lb) || a.moveBy(d.x - c.x, d.y - c.y);
}
b.getParent = function () {
  return g.Bb.v.getParent.call(this);
};
b.ie = function () {
  return g.Bb.v.ie.call(this);
};
b.Ja = function (a) {
  if (!this.Qx) {
    this.Qx = !0;
    try {
      this.ra = !0;
      g.g.o.Dp();
      this.isCollapsed() && Lc(this);
      this.u.Sb.Ja(this);
      var c = this.bb();
      this.ka && Bc(this.ka, c);
      this.O && Bc(this.O, c);
      for (var d = 0; d < this.V.length; d++) {
        var e = this.V[d].connection;
        e && (Bc(e, c), e.isConnected() && Dc(e));
      }
      this.Y && (Bc(this.Y, c), this.Y.isConnected() && Dc(this.Y));
      if (!1 !== a) {
        var f = this.getParent();
        f ? f.Ja(!0) : Ga(this.u);
      }
      g.g.o.Ep();
      this.zy();
    } finally {
      this.Qx = !1;
    }
  }
};
b.zy = function () {
  this.u.Fb && this.Gb.mo && this.u.Nb().draw();
  this.u.Fb && this.Gb.Tw && this.u.ge(g.navigation.An).draw();
};
b.mi = function (a) {
  this.Gb.mi(a);
};
b.ni = function (a) {
  this.Gb.ni(a);
};
function E(a) {
  var c = a.height,
    d = a.width,
    e = q(a);
  e &&
    ((e = E(e)),
    (a = a.u.Sb.W().cu),
    (c += e.height - a),
    (d = Math.max(d, e.width)));
  return { height: c, width: d };
}
g.Bl = function (a) {
  this.wc = [];
  this.YA = a;
};
function Nc(a, c, d) {
  if (!a.wc.length) return -1;
  var e = Ac(a, d);
  if (e >= a.wc.length) return -1;
  d = c.y;
  for (var f = e; 0 <= f && a.wc[f].y == d; ) {
    if (a.wc[f] == c) return f;
    f--;
  }
  for (; e < a.wc.length && a.wc[e].y == d; ) {
    if (a.wc[e] == c) return e;
    e++;
  }
  return -1;
}
function Ac(a, c) {
  if (!a.wc.length) return 0;
  for (var d = 0, e = a.wc.length; d < e; ) {
    var f = Math.floor((d + e) / 2);
    if (a.wc[f].y < c) d = f + 1;
    else if (a.wc[f].y > c) e = f;
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
  a.wc.splice(c, 1);
}
function Ec(a, c, d) {
  function e(n) {
    var u = h - f[n].x,
      v = k - f[n].y;
    Math.sqrt(u * u + v * v) <= d && m.push(f[n]);
    return v < d;
  }
  var f = a.wc,
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
g.Bl.U = function (a) {
  var c = [];
  c[g.lb] = new g.Bl(a);
  c[g.Sf] = new g.Bl(a);
  c[g.gb] = new g.Bl(a);
  c[g.Tf] = new g.Bl(a);
  return c;
};
g.i.Eh = function (a, c) {
  g.i.Eh.v.constructor.call(this, c);
  this.MD = a;
};
g.g.object.X(g.i.Eh, g.i.Ne);
g.i.Eh.prototype.type = g.i.fA;
g.i.Eh.prototype.ya = function () {
  var a = g.i.Eh.v.ya.call(this);
  a.themeName = this.MD;
  return a;
};
g.i.Eh.prototype.ma = function (a) {
  g.i.Eh.v.ma.call(this, a);
  this.MD = a.themeName;
};
g.C.register(g.C.ea.kc, g.i.fA, g.i.Eh);
g.i.Kh = function (a, c, d, e) {
  g.i.Kh.v.constructor.call(this, e);
  this.jc = a;
  this.ac = c;
  this.scale = d;
};
g.g.object.X(g.i.Kh, g.i.Ne);
g.i.Kh.prototype.type = g.i.pA;
g.i.Kh.prototype.ya = function () {
  var a = g.i.Kh.v.ya.call(this);
  a.viewTop = this.jc;
  a.viewLeft = this.ac;
  a.scale = this.scale;
  return a;
};
g.i.Kh.prototype.ma = function (a) {
  g.i.Kh.v.ma.call(this, a);
  this.jc = a.viewTop;
  this.ac = a.viewLeft;
  this.scale = a.scale;
};
g.C.register(g.C.ea.kc, g.i.pA, g.i.Kh);
g.Uj = function (a, c) {
  this.zm = a;
  this.jy = c.spacing;
  this.EC = c.length;
  this.vJ = (this.Jw = a.firstChild) && this.Jw.nextSibling;
  this.oL = c.snap;
};
g.Uj.prototype.Aj = 1;
g.Uj.prototype.J = function () {
  this.zm = null;
};
g.Uj.prototype.update = function (a) {
  this.Aj = a;
  var c = this.jy * a || 100;
  this.zm.setAttribute("width", c);
  this.zm.setAttribute("height", c);
  c = Math.floor(this.jy / 2) + 0.5;
  var d = c - this.EC / 2,
    e = c + this.EC / 2;
  c *= a;
  d *= a;
  e *= a;
  Oc(this.Jw, a, d, e, c, c);
  Oc(this.vJ, a, c, c, d, e);
};
function Oc(a, c, d, e, f, h) {
  a &&
    (a.setAttribute("stroke-width", c),
    a.setAttribute("x1", d),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h));
}
g.Uj.prototype.moveTo = function (a, c) {
  this.zm.setAttribute("x", a);
  this.zm.setAttribute("y", c);
  (g.g.userAgent.gf || g.g.userAgent.Qj) && this.update(this.Aj);
};
g.Uj.ab = function (a, c, d) {
  a = g.g.o.M(
    g.g.F.Nz,
    { id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse" },
    d
  );
  0 < c.length && 0 < c.spacing
    ? (g.g.o.M(g.g.F.yn, { stroke: c.colour }, a),
      1 < c.length && g.g.o.M(g.g.F.yn, { stroke: c.colour }, a))
    : g.g.o.M(g.g.F.yn, {}, a);
  return a;
};
g.Fz = function (a) {
  this.Rh = this.vf = null;
  this.Qk = {};
  this.s = a;
};
function Pc(a, c) {
  var d = a.Qk[c];
  if (d) d.J(), delete a.Qk[c];
  else
    throw Error(
      "Marker with id " +
        c +
        " does not exist. Can only unregistermarkers that exist."
    );
}
b = g.Fz.prototype;
b.Nb = function () {
  return this.vf;
};
b.ge = function (a) {
  return this.Qk[a];
};
function Qc(a, c) {
  a.vf && a.vf.we && a.vf.we.J();
  a.vf = c;
  a.vf &&
    ((c = a.vf),
    (c = new g.m.Ah(a.s, a.s.Sb.W(), c)),
    (a.vf.we = c),
    a.mi(a.vf.we.ab()));
}
b.mi = function (a) {
  a ? (this.s.Hb.appendChild(a), (this.Rh = a)) : (this.Rh = null);
};
b.ni = function (a) {
  a
    ? this.s.Hb &&
      (this.Rh ? this.s.Hb.insertBefore(a, this.Rh) : this.s.Hb.appendChild(a))
    : (this.gi = null);
};
b.J = function () {
  for (var a = Object.keys(this.Qk), c = 0, d; (d = a[c]); c++) Pc(this, d);
  this.Qk = null;
  this.vf && (this.vf.J(), (this.vf = null));
};
g.jA = function (a, c) {
  this.s = a;
  this.si = c;
  this.Gp = [];
  this.Gg = Object.create(null);
};
b = g.jA.prototype;
b.Tg = function () {
  return this.si;
};
b.zp = function (a) {
  var c = this.si;
  this.si = a;
  if ((a = aa(this.s))) c && g.g.o.ic(a, c.eg()), g.g.o.Ha(a, this.si.eg());
  for (c = 0; (a = this.Gp[c]); c++) a.Tm();
  c = 0;
  a = Object.keys(this.Gg);
  for (var d; (d = a[c]); c++)
    for (var e = 0, f; (f = this.Gg[d][e]); e++)
      f.element.style[f.propertyName] = (this.si && xa(this.si, d)) || "";
  g.Jc();
};
b.subscribe = function (a, c, d) {
  this.Gg[c] || (this.Gg[c] = []);
  this.Gg[c].push({ element: a, propertyName: d });
  a.style[d] = (this.si && xa(this.si, c)) || "";
};
b.unsubscribe = function (a) {
  if (a)
    for (var c = Object.keys(this.Gg), d = 0, e; (e = c[d]); d++) {
      for (var f = this.Gg[e], h = f.length - 1; 0 <= h; h--)
        f[h].element === a && f.splice(h, 1);
      this.Gg[e].length || delete this.Gg[e];
    }
};
b.J = function () {
  this.Gg = this.Gp = this.si = this.Ff = null;
};
g.ve = function (a, c) {
  g.ve.v.constructor.call(this, a, c);
  this.ds = !1;
  this.Pe = Object.create(null);
  this.ED = this.ip = 0;
  this.vC = this.sx = null;
};
g.g.object.X(g.ve, g.ug);
g.ve.qH = 5;
g.ve.rH = 6;
b = g.ve.prototype;
b.Ev = function (a) {
  this.vC = this.zc.options.Ab && this.zc.options.Ab.Fx;
  g.ve.v.Ev.call(this, a);
  !this.$r && g.Touch.js(a) && Rc(this, a);
};
b.em = function (a) {
  this.sx = g.ta(document, "mousedown", null, this.aJ.bind(this), !0);
  this.Hs = g.ta(document, "mousemove", null, this.Am.bind(this), !0);
  this.Is = g.ta(document, "mouseup", null, this.Vr.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
b.aJ = function (a) {
  !this.Kc() && g.Touch.js(a) && (Rc(this, a), this.ds && g.oj());
};
b.Am = function (a) {
  if (this.Kc()) g.Touch.iy(a) && g.ve.v.Am.call(this, a);
  else if (this.ds) {
    if (g.Touch.js(a)) {
      this.Pe[g.Touch.Ur(a)] = Sc(this, a);
      var c = Object.keys(this.Pe);
      if (this.vC && 2 === c.length) {
        c = Object.keys(this.Pe);
        c = g.g.aa.Dv(this.Pe[c[0]], this.Pe[c[1]]) / this.ED;
        if (0 < this.ip && Infinity > this.ip) {
          var d = c - this.ip;
          d = 0 < d ? d * g.ve.qH : d * g.ve.rH;
          var e = this.zc,
            f = g.g.$o(a, r(e), oa(e));
          e.zoom(f.x, f.y, d);
        }
        this.ip = c;
        a.preventDefault();
      } else g.ve.v.Am.call(this, a);
    }
    g.oj();
  } else g.ve.v.Am.call(this, a);
};
b.Vr = function (a) {
  if (g.Touch.js(a) && !this.Kc()) {
    var c = g.Touch.Ur(a);
    this.Pe[c] && delete this.Pe[c];
    2 > Object.keys(this.Pe).length &&
      ((this.Pe = Object.create(null)), (this.ip = 0));
  }
  !this.ds || this.Kc()
    ? g.Touch.iy(a) && g.ve.v.Vr.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.J());
};
b.J = function () {
  g.ve.v.J.call(this);
  this.sx && g.Na(this.sx);
};
function Rc(a, c) {
  a.Pe[g.Touch.Ur(c)] = Sc(a, c);
  var d = Object.keys(a.Pe);
  2 == d.length &&
    ((a.ED = g.g.aa.Dv(a.Pe[d[0]], a.Pe[d[1]])),
    (a.ds = !0),
    c.preventDefault());
}
function Sc(a, c) {
  return a.zc
    ? new g.g.aa(
        c.pageX ? c.pageX : c.changedTouches[0].pageX,
        c.pageY ? c.pageY : c.changedTouches[0].pageY
      )
    : null;
}
g.wA = function (a) {
  this.Bx = a;
  this.Ln = Object.create(null);
};
b = g.wA.prototype;
b.Ew = null;
b.J = function () {
  this.Ln = this.Bx = null;
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
    e && e.play && (this.Ln[c] = e);
  }
};
b.preload = function () {
  for (var a in this.Ln) {
    var c = this.Ln[a];
    c.volume = 0.01;
    var d = c.play();
    void 0 !== d ? d.then(c.pause).catch(function () {}) : c.pause();
    if (g.g.userAgent.Il || g.g.userAgent.vz) break;
  }
};
b.play = function (a, c) {
  var d = this.Ln[a];
  d
    ? ((a = new Date()),
      (null != this.Ew && a - this.Ew < g.NG) ||
        ((this.Ew = a),
        (d = g.g.userAgent.Il || g.g.userAgent.pn ? d : d.cloneNode()),
        (d.volume = void 0 === c ? 1 : c),
        d.play()))
    : this.Bx && this.Bx.Dg.play(a, c);
};
g.yA = function (a) {
  this.co = a;
  this.ab();
};
b = g.yA.prototype;
b.hb = null;
b.co = null;
b.ab = function () {
  this.hb ||
    ((this.hb = g.g.o.M(
      g.g.F.dk,
      {
        xmlns: g.g.o.Nq,
        "xmlns:html": g.g.o.Gl,
        "xmlns:xlink": g.g.o.nf,
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible",
      },
      null
    )),
    this.co.appendChild(this.hb));
};
b.ol = function (a, c) {
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.hb.style.display = "block";
  g.g.o.wp(this.hb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.iw = function () {
  return g.g.xf(this.hb);
};
b.mr = function (a) {
  if (!a)
    throw Error(
      "Couldn't clear and hide the drag surface: missing new surface."
    );
  var c = this.hb.childNodes[0],
    d = this.hb.childNodes[1];
  if (
    !(
      c &&
      d &&
      g.g.o.mw(c, "blocklyBlockCanvas") &&
      g.g.o.mw(d, "blocklyBubbleCanvas")
    )
  )
    throw Error(
      "Couldn't clear and hide the drag surface. A node was missing."
    );
  null != this.Kx ? g.g.o.Fk(c, this.Kx) : a.insertBefore(c, a.firstChild);
  g.g.o.Fk(d, c);
  this.hb.style.display = "none";
  if (this.hb.childNodes.length) throw Error("Drag surface was not cleared.");
  g.g.o.wp(this.hb, "");
  this.Kx = null;
};
g.Cb = function (a, c, d) {
  g.Cb.v.constructor.call(this, a);
  this.ed = a.ed || g.Cb.RI;
  this.yp = a.yp || g.Cb.kL;
  this.xr = g.Bl.U(this.ao);
  c && (this.Oe = c);
  d && (this.vl = d);
  this.mt = !!this.vl && g.g.Gk();
  this.Jo = [];
  this.Dg = new g.wA(a.yc);
  this.yf = this.options.lw ? new g.Uj(this.options.lw, a.dC) : null;
  this.Ze = new g.Fz(this);
  this.uy = {};
  this.Vv = {};
  g.ga && g.ga.vk && Tc(this, g.tc, g.ga.vk);
  g.qA && g.qA.vk && Tc(this, g.kH, g.qA.vk);
  g.Ea && g.Ea.vk && (Tc(this, g.Kn, g.Ea.vk), D(this, g.Ea.MJ));
  this.Cc = this.options.yc
    ? this.options.yc.Cc
    : new g.jA(this, this.options.yL || g.Fh.Bi);
  this.Cc.Gp.push(this);
  this.Sb = g.m.U(this.options.pp || "geras", this.Tg(), this.options.qp);
  this.Wu = null;
  this.Fb = !1;
  this.ht = [];
};
g.g.object.X(g.Cb, g.Wb);
b = g.Cb.prototype;
b.Vs = null;
b.ra = !0;
b.di = !0;
b.hg = !1;
b.Qo = !1;
b.Tx = !0;
b.scrollX = 0;
b.scrollY = 0;
b.wB = null;
b.scale = 1;
b.ZC = 1;
b.$C = 0;
b.WC = 0;
b.xd = null;
b.Ta = null;
b.pa = null;
b.Ma = null;
b.Ed = null;
b.Oe = null;
b.vl = null;
b.mt = !1;
b.Zr = !1;
b.vw = null;
b.DC = null;
b.fb = null;
b.rC = null;
b.ww = !0;
b.mi = function (a) {
  this.Ze.mi(a);
};
b.ni = function (a) {
  this.Ze.ni(a);
};
b.ge = function (a) {
  return this.Ze ? this.Ze.ge(a) : null;
};
b.Nb = function () {
  return this.Ze ? this.Ze.Nb() : null;
};
b.Tg = function () {
  return this.Cc.Tg();
};
b.zp = function (a) {
  a || (a = g.Fh.Bi);
  this.Cc.zp(a);
};
b.Tm = function () {
  this.N && this.Sb.Mx(this.N, this.Tg());
  Uc(
    B(this, !1).filter(function (c) {
      return void 0 !== c.kl;
    })
  );
  Vc(this);
  this.Ma && this.Ma.Tm();
  this.isVisible() && this.Ob(!0);
  var a = new g.i.Eh(this.Tg().name, this.id);
  g.i.Ia(a);
};
function Uc(a) {
  for (var c = 0, d; (d = a[c]); c++) {
    var e = d.kl;
    if (e && (d.Jb(e), d.td)) {
      var f = d.td.s;
      if (f && B(f, !1)) {
        var h = B(f, !1);
        for (d = 0; d < h.length; d++) (e = h[d]), e.Jb(e.kl);
        if ((d = f.oc()))
          for (f = B(d.s, !1), d = 0; d < f.length; d++) (e = f[d]), e.Jb(e.kl);
      }
    }
  }
}
function oa(a) {
  if (a.ww) {
    var c = r(a).getScreenCTM();
    c && ((a.rC = c.inverse()), (a.ww = !1));
  }
  return a.rC;
}
b.Qp = function () {
  this.ww = !0;
};
b.isVisible = function () {
  return this.di;
};
function cb(a, c) {
  var d = 0,
    e = 0,
    f = 1;
  if (g.g.o.containsNode(a.Hb, c) || g.g.o.containsNode(a.mg, c)) f = a.scale;
  do {
    var h = g.g.xf(c);
    if (c == a.Hb || c == a.mg) f = 1;
    d += h.x * f;
    e += h.y * f;
    c = c.parentNode;
  } while (c && c != r(a));
  return new g.g.aa(d, e);
}
function aa(a) {
  if (!a.vw)
    for (var c = a.N; c; ) {
      if (
        -1 !=
        (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
      ) {
        a.vw = c;
        break;
      }
      c = c.parentNode;
    }
  return a.vw;
}
b.ab = function (a) {
  this.N = g.g.o.M(g.g.F.rc, { class: "blocklyWorkspace" }, null);
  a &&
    ((this.wd = g.g.o.M(
      g.g.F.Gc,
      { height: "100%", width: "100%", class: a },
      this.N
    )),
    "blocklyMainBackground" == a && this.yf
      ? (this.wd.style.fill = "url(#" + this.yf.zm.id + ")")
      : this.Cc.subscribe(this.wd, "workspaceBackgroundColour", "fill"));
  this.Hb = g.g.o.M(g.g.F.rc, { class: "blocklyBlockCanvas" }, this.N);
  this.mg = g.g.o.M(g.g.F.rc, { class: "blocklyBubbleCanvas" }, this.N);
  this.hg ||
    (g.ta(this.N, "mousedown", this, this.sj, !1, !0),
    g.ta(this.N, "wheel", this, this.hK));
  if (this.options.Ho) {
    if (!g.Au) throw Error("Missing require for Blockly.Toolbox");
    this.Ma = new (g.C.Or(g.C.ea.Rq, this.options))(this);
  }
  this.yf && this.yf.update(this.scale);
  Wc(this);
  Qc(this.Ze, new g.Cl());
  a = this.Ze;
  var c = g.navigation.An,
    d = new g.Dn();
  a.Qk[c] && Pc(a, c);
  var e = new g.m.Ah(a.s, a.s.Sb.W(), d);
  d.we = e;
  a.ni(d.we.ab());
  a.Qk[c] = d;
  this.Sb.ab(this.N, this.Tg());
  return this.N;
};
b.J = function () {
  this.ra = !1;
  this.Ed && this.Ed.cancel();
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.mg = this.Hb = null;
  this.Ma && (this.Ma.J(), (this.Ma = null));
  this.pa && (this.pa.J(), (this.pa = null));
  this.xd && (this.xd.J(), (this.xd = null));
  this.Ta && (this.Ta.J(), (this.Ta = null));
  this.xl && (this.xl.J(), (this.xl = null));
  this.Dg && (this.Dg.J(), (this.Dg = null));
  this.yf && (this.yf.J(), (this.yf = null));
  this.Sb.J();
  this.Ze && (this.Ze.J(), (this.Ze = null));
  g.Cb.v.J.call(this);
  if (this.Cc) {
    var a = this.Cc,
      c = a.Gp.indexOf(this);
    if (0 > c)
      throw Error(
        "Cannot unsubscribe a workspace that hasn't been subscribed."
      );
    a.Gp.splice(c, 1);
    this.Cc.unsubscribe(this.wd);
    this.options.yc || (this.Cc.J(), (this.Cc = null));
  }
  this.Vv = this.uy = this.xr = null;
  this.options.yc ||
    ((a = r(this)) && a.parentNode && g.g.o.removeNode(a.parentNode));
  this.Vs && (g.Na(this.Vs), (this.Vs = null));
};
b.bh = function (a, c) {
  return new g.Bb(this, a, c);
};
function Xc(a) {
  if (!g.nd) throw Error("Missing require for Blockly.Trashcan");
  a.xd = new g.nd(a);
  var c = a.xd.ab();
  a.N.insertBefore(c, a.Hb);
}
function Yc(a) {
  if (!g.Hu) throw Error("Missing require for Blockly.ZoomControls");
  a.xl = new g.Hu(a);
  var c = a.xl.ab();
  a.N.appendChild(c);
}
function Zc(a, c) {
  var d = new g.Td({
    parentWorkspace: a,
    rtl: a.L,
    oneBasedIndex: a.options.Ef,
    horizontalLayout: a.Id,
    renderer: a.options.pp,
    rendererOverrides: a.options.qp,
  });
  d.La = a.options.La;
  if (a.Id) {
    if (!g.Rt) throw Error("Missing require for Blockly.HorizontalFlyout");
    a.pa = new g.Rt(d);
  } else {
    if (!g.Jh) throw Error("Missing require for Blockly.VerticalFlyout");
    a.pa = new g.Jh(d);
  }
  a.pa.dm = !1;
  a.pa.s.Ob(!0);
  return a.pa.ab(c);
}
b.oc = function (a) {
  return this.pa || a ? this.pa : this.Ma ? this.Ma.oc() : null;
};
function Ga(a) {
  a.Tx && a.ra && (a.Ta && a.Ta.resize(), a.Qp());
}
b.resize = function () {
  this.Ma && this.Ma.position();
  this.pa && this.pa.position();
  this.xd && this.xd.position();
  this.xl && this.xl.position();
  this.Ta && this.Ta.resize();
  this.Qp();
  Wc(this);
};
function Db(a) {
  var c = g.g.KI();
  g.g.aa.wf(a.DC, c) || ((a.DC = c), a.Qp(), Wc(a));
}
function r(a) {
  if (!a.Wu)
    for (var c = a.N; c; ) {
      if ("svg" == c.tagName) {
        a.Wu = c;
        break;
      }
      c = c.parentNode;
    }
  return a.Wu;
}
function ca(a) {
  if (g.i.isEnabled()) {
    var c = a.scale,
      d = -a.scrollY,
      e = -a.scrollX;
    (c == a.ZC && 1 > Math.abs(d - a.$C) && 1 > Math.abs(e - a.WC)) ||
      ((a.ZC = c),
      (a.$C = d),
      (a.WC = e),
      (a = new g.i.Kh(d, e, c, a.id)),
      g.i.Ia(a));
  }
}
b.translate = function (a, c) {
  if (this.mt && this.Zr) this.vl.ol(a, c);
  else {
    var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
    this.Hb.setAttribute("transform", d);
    this.mg.setAttribute("transform", d);
  }
  if (this.Oe) {
    d = this.Oe;
    var e = this.scale;
    d.Aj = e;
    d.Ng.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")"
    );
  }
  this.yf && this.yf.moveTo(a, c);
  ca(this);
};
function qa(a) {
  if (a.mt) {
    a.Zr = !1;
    var c = a.vl.iw();
    a.vl.mr(a.N);
    c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
    a.Hb.setAttribute("transform", c);
    a.mg.setAttribute("transform", c);
  }
}
function pa(a) {
  if (a.mt && !a.Zr) {
    a.Zr = !0;
    var c = a.Hb.previousSibling,
      d = parseInt(r(a).getAttribute("width"), 10),
      e = parseInt(r(a).getAttribute("height"), 10),
      f = g.g.xf(a.Hb),
      h = a.vl,
      k = a.Hb,
      l = a.mg,
      m = a.scale;
    if (h.hb.childNodes.length) throw Error("Already dragging a block.");
    h.Kx = c;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    h.hb.setAttribute("width", d);
    h.hb.setAttribute("height", e);
    h.hb.appendChild(k);
    h.hb.appendChild(l);
    h.hb.style.display = "block";
    a.vl.ol(f.x, f.y);
  }
}
b.Ug = function () {
  var a = this.ed();
  return a ? a.Qb / this.scale : 0;
};
b.Ob = function (a) {
  this.di = a;
  if (this.N)
    if (
      (this.Ta && this.Ta.hl(a),
      this.oc() && this.oc().hl(a),
      (r(this).style.display = a ? "block" : "none"),
      this.Ma && this.Ma.Ob(a),
      a)
    ) {
      a = B(this, !1);
      for (var c = a.length - 1; 0 <= c; c--) a[c].Vo();
      this.Ja();
      this.Ma && this.Ma.position();
    } else g.Jc(!0);
};
b.Ja = function () {
  for (var a = B(this, !1), c = a.length - 1; 0 <= c; c--) a[c].Ja(!1);
  if (this.Ed) for (a = this.Ed.xm(), c = 0; c < a.length; c++) a[c].Ja(!1);
  c = this.Ze;
  c.s.Fb && c.Rh && c.s.Nb().draw();
};
function $c(a, c) {
  var d = A;
  if (void 0 === c) {
    for (var e = 0, f; (f = d.Jo[e]); e++) f.kg(!1);
    d.Jo.length = 0;
  }
  if ((f = a ? d.Fd(a) : null))
    (a = void 0 === c || c)
      ? -1 == d.Jo.indexOf(f) && d.Jo.push(f)
      : g.g.Un(d.Jo, f),
      f.kg(a);
}
b.Ms = function (a) {
  if (
    this.ra &&
    a.tagName &&
    !(a.getElementsByTagName("block").length >= Ka(this))
  )
    if ((this.Ed && this.Ed.cancel(), "comment" == a.tagName.toLowerCase())) {
      g.i.disable();
      try {
        var c = g.$l.tm(a),
          d = parseInt(a.getAttribute("x"), 10),
          e = parseInt(a.getAttribute("y"), 10);
        isNaN(d) || isNaN(e) || (this.L && (d = -d), c.moveBy(d + 50, e + 50));
      } finally {
        g.i.enable();
      }
      g.i.isEnabled() && g.xA.uO(c);
      c.select();
    } else
      a: {
        g.i.disable();
        try {
          var f = g.S.qk(a, this),
            h = this.ge(g.navigation.An).rb;
          if (this.Fb && h && h.Fm) {
            g.navigation.qC(f, h.Ga);
            break a;
          }
          var k = parseInt(a.getAttribute("x"), 10),
            l = parseInt(a.getAttribute("y"), 10);
          if (!isNaN(k) && !isNaN(l)) {
            this.L && (k = -k);
            do {
              a = !1;
              var m = B(this, !1);
              c = 0;
              for (var n; (n = m[c]); c++) {
                var u = n.bb();
                if (1 >= Math.abs(k - u.x) && 1 >= Math.abs(l - u.y)) {
                  a = !0;
                  break;
                }
              }
              if (!a) {
                var v = f.fg(!1);
                c = 0;
                for (var x; (x = v[c]); c++)
                  if (x.closest(g.Vd, new g.g.aa(k, l)).connection) {
                    a = !0;
                    break;
                  }
              }
              a && ((k = this.L ? k - g.Vd : k + g.Vd), (l += 2 * g.Vd));
            } while (a);
            f.moveBy(k, l);
          }
        } finally {
          g.i.enable();
        }
        g.i.isEnabled() && !f.Ra && g.i.Ia(new g.i.gq(f));
        f.select();
      }
};
function Vc(a) {
  (a = a.hg ? a.fb : a) &&
    !a.Ed &&
    a.Ma &&
    a.Ma.oc() &&
    ((a = a.Ma), a.xb && a.xb.$g() && a.xb.Wi.length && a.pa.show(a.xb.Wi));
}
b.zj = function (a, c) {
  g.Cb.v.zj.call(this, a, c);
  Vc(this);
};
b.Th = function (a) {
  g.Cb.v.Th.call(this, a);
  Vc(this);
};
b.uf = function (a, c, d) {
  a = g.Cb.v.uf.call(this, a, c, d);
  Vc(this);
  return a;
};
function Wc(a) {
  a.mB = a.xd && a.N.parentNode ? a.xd.um() : null;
  a.lB = a.pa
    ? a.pa.um()
    : a.Ma && "function" == typeof a.Ma.um
    ? a.Ma.um()
    : null;
}
function ob(a, c) {
  return a.mB && a.mB.contains(c.clientX, c.clientY)
    ? g.Ht
    : a.lB && a.lB.contains(c.clientX, c.clientY)
    ? g.Xy
    : g.Wy;
}
b.sj = function (a) {
  var c = this.Wh(a);
  c && Gb(c, a, this);
};
b.ly = function (a, c) {
  a = g.g.$o(a, r(this), oa(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.wB = g.g.aa.oo(c, a);
};
b.Kc = function () {
  return null != this.Ed && this.Ed.Kc();
};
function ad(a) {
  return (
    (a.options.gd && a.options.gd.scrollbars) ||
    (a.options.gd && a.options.gd.Jj) ||
    (a.options.gd && a.options.gd.Vi) ||
    (a.options.Ab && a.options.Ab.controls) ||
    (a.options.Ab && a.options.Ab.Jj) ||
    (a.options.Ab && a.options.Ab.Fx)
  );
}
b.Lc = function () {
  return (
    (this.options.gd && this.options.gd.scrollbars) ||
    (this.options.gd && this.options.gd.Jj) ||
    (this.options.gd && this.options.gd.Vi) ||
    (this.options.Ab && this.options.Ab.Jj) ||
    (this.options.Ab && this.options.Ab.Fx)
  );
};
b.hK = function (a) {
  if (g.ug.Dk()) a.preventDefault(), a.stopPropagation();
  else {
    var c = this.options.Ab && this.options.Ab.Jj,
      d = this.options.gd && this.options.gd.Jj;
    if (c || d) {
      var e = g.g.VB(a);
      !c || (!a.ctrlKey && d)
        ? ((c = this.scrollX - e.x),
          (d = this.scrollY - e.y),
          a.shiftKey && !e.x && ((c = this.scrollX - e.y), (d = this.scrollY)),
          this.scroll(c, d))
        : ((e = -e.y / 50),
          (c = g.g.$o(a, r(this), oa(this))),
          this.zoom(c.x, c.y, e));
      a.preventDefault();
    }
  }
};
function Da(a) {
  a = [].concat(a.ht);
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
b.Ap = function (a) {
  if (!this.options.readOnly && !this.hg) {
    var c = yc(g.Va.Xd.ad, { u: this });
    this.NH && this.NH(c, a);
    g.$a.show(a, c, this.L);
  }
};
function na(a) {
  if (a.options.yc) na(a.options.yc);
  else {
    g.To = a;
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
  d = Math.pow(this.options.Ab.dL, d);
  var e = this.scale * d;
  if (this.scale != e) {
    e > this.options.Ab.Wo
      ? (d = this.options.Ab.Wo / this.scale)
      : e < this.options.Ab.Yo && (d = this.options.Ab.Yo / this.scale);
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
b.rI = function () {
  g.g.o.ic(this.Hb, "blocklyCanvasTransitioning");
  g.g.o.ic(this.mg, "blocklyCanvasTransitioning");
};
b.setScale = function (a) {
  this.options.Ab.Wo && a > this.options.Ab.Wo
    ? (a = this.options.Ab.Wo)
    : this.options.Ab.Yo && a < this.options.Ab.Yo && (a = this.options.Ab.Yo);
  this.scale = a;
  g.Jc(!1);
  this.pa && (this.pa.Lx(), Wc(this));
  this.yf && this.yf.update(this.scale);
  a = this.ed();
  this.scrollX -= a.Sc;
  this.scrollY -= a.bd;
  a.ac += a.Sc;
  a.jc += a.bd;
  this.scroll(this.scrollX, this.scrollY);
  this.Ta &&
    (this.pa
      ? (ha(this.Ta.zf, a), ia(this.Ta.Lf, a))
      : (ka(this.Ta.zf, a), ma(this.Ta.Lf, a)));
};
function bd(a) {
  return a.options.yc ? bd(a.options.yc) : a.scale;
}
b.scroll = function (a, c) {
  g.Jc(!0);
  var d = this.ed(),
    e = d.tf + d.pd - d.Qb,
    f = d.$d + d.cd - d.Vb;
  a = Math.min(a, -d.pd);
  c = Math.min(c, -d.cd);
  a = Math.max(a, -e);
  c = Math.max(c, -f);
  this.scrollX = a;
  this.scrollY = c;
  this.Ta &&
    (da(this.Ta.zf, -(a + d.pd) * this.Ta.zf.ratio),
    da(this.Ta.Lf, -(c + d.cd) * this.Ta.Lf.ratio));
  a += d.Sc;
  c += d.bd;
  this.translate(a, c);
};
g.Cb.MB = function (a) {
  var c = 0,
    d = 0;
  a && ((c = a.Ug()), (d = a.Uc));
  return new g.g.ue(c, d);
};
g.Cb.II = function (a, c) {
  return ad(a) ? g.Cb.HI(a, c) : g.Cb.JB(a);
};
g.Cb.JB = function (a) {
  var c = Da(a),
    d = a.scale;
  a = c.top * d;
  var e = c.bottom * d,
    f = c.left * d;
  c = c.right * d;
  return { top: a, bottom: e, left: f, right: c, width: c - f, height: e - a };
};
g.Cb.HI = function (a, c) {
  a = g.Cb.JB(a);
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
g.Cb.RI = function () {
  var a = g.Cb.MB(this.Ma),
    c = g.Cb.MB(this.pa),
    d = g.uL(r(this)),
    e = { height: d.height, width: d.width };
  if (this.Ma)
    if (this.La == g.fk || this.La == g.On) e.height -= a.height;
    else {
      if (this.La == g.Le || this.La == g.Xl) e.width -= a.width;
    }
  else if (this.pa)
    if (this.La == g.fk || this.La == g.On) e.height -= c.height;
    else if (this.La == g.Le || this.La == g.Xl) e.width -= c.width;
  var f = g.Cb.II(this, e),
    h = 0;
  this.Ma && this.La == g.Le
    ? (h = a.width)
    : this.pa && this.La == g.Le && (h = c.width);
  var k = 0;
  this.Ma && this.La == g.fk
    ? (k = a.height)
    : this.pa && this.La == g.fk && (k = c.height);
  return {
    $d: f.height,
    tf: f.width,
    cd: f.top,
    pd: f.left,
    Vb: e.height,
    Qb: e.width,
    jc: -this.scrollY,
    ac: -this.scrollX,
    bd: k,
    Sc: h,
    JD: d.height,
    KD: d.width,
    RD: a.width,
    WO: a.height,
    La: this.La,
    wO: c.width,
    vO: c.height,
  };
};
g.Cb.kL = function (a) {
  var c = this.ed();
  "number" == typeof a.x && (this.scrollX = -c.tf * a.x - c.pd);
  "number" == typeof a.y && (this.scrollY = -c.$d * a.y - c.cd);
  this.translate(this.scrollX + c.Sc, this.scrollY + c.bd);
};
b = g.Cb.prototype;
b.Fd = function (a) {
  return g.Cb.v.Fd.call(this, a);
};
b.dc = function (a) {
  return g.Cb.v.dc.call(this, a);
};
b.Xq = function (a) {
  this.ht.push(a);
  g.Cb.v.Xq.call(this, a);
};
b.Rs = function (a) {
  g.g.Un(this.ht, a);
  g.Cb.v.Rs.call(this, a);
};
b.hd = function (a) {
  var c = !this.Tx && a;
  this.Tx = a;
  c && Ga(this);
};
b.clear = function () {
  this.hd(!1);
  g.Cb.v.clear.call(this);
  this.ht = [];
  this.hd(!0);
};
function cd(a, c) {
  if ("function" != typeof c)
    throw TypeError("Button callbacks must be functions.");
  a.Vv.CREATE_VARIABLE = c;
}
function Wb(a, c) {
  return (a = a.Vv[c]) ? a : null;
}
function Tc(a, c, d) {
  if ("function" != typeof d)
    throw TypeError("Toolbox category callbacks must be functions.");
  a.uy[c] = d;
}
b.Wh = function (a) {
  var c =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    d = this.Ed;
  return d
    ? c && d.Ak
      ? (console.warn("Tried to start the same gesture twice."),
        d.cancel(),
        null)
      : d
    : c
    ? (this.Ed = new g.ve(a, this))
    : null;
};
function xc(a) {
  a.Ed && a.Ed.cancel();
}
g.wn = function (a) {
  a.ed = this.Qr.bind(this);
  a.yp = this.jL.bind(this);
  this.s = new g.Cb(a);
  this.s.hg = !0;
  this.s.Ob(this.di);
  this.L = !!a.L;
  this.Id = !1;
  this.Gj = a.La;
  this.Qv = [];
  this.os = [];
  this.Wn = [];
  this.ne = [];
  this.Ex = [];
  this.fn = this.s.Sb.W().Pq;
  this.fb = null;
};
b = g.wn.prototype;
b.dm = !0;
b.di = !1;
b.lk = !0;
b.Tb = 8;
b.Gi = g.wn.prototype.Tb;
b.uF = 3 * g.wn.prototype.Gi;
b.vF = 3 * g.wn.prototype.Gi;
b.su = 2;
b.zb = 0;
b.Uc = 0;
b.nI = 70;
b.ab = function (a) {
  this.N = g.g.o.M(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.wd = g.g.o.M(g.g.F.se, { class: "blocklyFlyoutBackground" }, this.N);
  this.N.appendChild(this.s.ab());
  this.s.Cc.subscribe(this.wd, "flyoutBackgroundColour", "fill");
  this.s.Cc.subscribe(this.wd, "flyoutOpacity", "fill-opacity");
  Qc(this.s.Ze, new g.xq());
  return this.N;
};
b.U = function (a) {
  this.fb = a;
  this.s.fb = a;
  this.Ta = new g.Wa(this.s, this.Id, !1, "blocklyFlyoutScrollbar");
  this.Oa();
  Array.prototype.push.apply(this.Qv, g.ta(this.N, "wheel", this, this.ML));
  this.dm || ((this.Jr = this.Rv.bind(this)), D(this.fb, this.Jr));
  Array.prototype.push.apply(
    this.Qv,
    g.ta(this.wd, "mousedown", this, this.sj)
  );
  this.s.Wh = this.fb.Wh.bind(this.fb);
  this.s.by(this.fb.Ua);
  a = this.s;
  a.vj = new g.Fu(a);
};
b.J = function () {
  this.Oa();
  g.Na(this.Qv);
  this.Jr && (Oa(this.fb, this.Jr), (this.Jr = null));
  this.Ta && (this.Ta.J(), (this.Ta = null));
  this.s &&
    (this.s.Cc.unsubscribe(this.wd),
    (this.s.fb = null),
    this.s.J(),
    (this.s = null));
  this.N && (g.g.o.removeNode(this.N), (this.N = null));
  this.fb = this.wd = null;
};
b.Ug = function () {
  return this.zb;
};
b.isVisible = function () {
  return this.di;
};
b.Ob = function (a) {
  var c = a != this.isVisible();
  this.di = a;
  c && this.Pp();
};
b.hl = function (a) {
  var c = a != this.lk;
  this.lk = a;
  c && this.Pp();
};
b.Pp = function () {
  var a = this.lk ? this.isVisible() : !1;
  this.N.style.display = a ? "block" : "none";
  this.Ta.hl(a);
};
b.Oa = function () {
  if (this.isVisible()) {
    this.Ob(!1);
    for (var a = 0, c; (c = this.ne[a]); a++) g.Na(c);
    this.ne.length = 0;
    this.wj && (Oa(this.s, this.wj), (this.wj = null));
  }
};
b.show = function (a) {
  this.s.hd(!1);
  this.Oa();
  dd(this);
  "string" == typeof a && (a = ed(this, a));
  this.Ob(!0);
  a = g.g.za.dB(a);
  a = fd(this, a);
  gd(this, a.RH, a.yI);
  this.ne.push(
    g.ta(this.wd, "mouseover", this, function () {
      for (var c = this.s.dc(!1), d = 0, e; (e = c[d]); d++) e.op();
    })
  );
  this.Id ? (this.Uc = 0) : (this.zb = 0);
  this.s.hd(!0);
  this.Lx();
  this.Rv();
  this.position();
  this.wj = this.Lx.bind(this);
  D(this.s, this.wj);
};
function fd(a, c) {
  var d = [],
    e = [];
  a.Ex.length = 0;
  for (var f = a.Id ? a.uF : a.vF, h = 0, k; (k = c[h]); h++) {
    if (k.custom) {
      var l = ed(a, k.custom);
      l = g.g.za.dB(l);
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
          ? ((k = g.S.Ee(n)), (m.blockxml = k))
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
        n = g.S.qk(m, k.s);
        n.isEnabled() || k.Ex.push(n);
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
        l = hd(a, k, !0);
        d.push({ type: "button", button: l });
        e.push(f);
        break;
      case "BUTTON":
        (l = hd(a, k, !1)), d.push({ type: "button", button: l }), e.push(f);
    }
  }
  return { RH: d, yI: e };
}
function ed(a, c) {
  c = a.s.fb.uy[c] || null;
  if ("function" != typeof c)
    throw TypeError(
      "Couldn't find a callback function when opening a toolbox category."
    );
  a = c(a.s.fb);
  if (!Array.isArray(a))
    throw new TypeError(
      "Result of toolbox category callback must be an array."
    );
  return a;
}
function hd(a, c, d) {
  if (!g.Tj) throw Error("Missing require for Blockly.FlyoutButton");
  return new g.Tj(a.s, a.fb, c, d);
}
function dd(a) {
  for (var c = a.s.dc(!1), d = 0, e; (e = c[d]); d++) e.u == a.s && e.J(!1, !1);
  for (d = 0; d < a.os.length; d++)
    if ((c = a.os[d])) g.K.xy(c), g.g.o.removeNode(c);
  for (d = a.os.length = 0; (c = a.Wn[d]); d++) c.J();
  a.Wn.length = 0;
  a.s.vj.clear();
}
function id(a, c) {
  return function (d) {
    var e = a.fb.Wh(d);
    e && (Ib(e, c), Hb(e, d, a));
  };
}
b.sj = function (a) {
  var c = this.fb.Wh(a);
  c && Hb(c, a, this);
};
function yb(a, c) {
  var d = null;
  g.i.disable();
  var e = a.fb.wk();
  a.fb.hd(!1);
  try {
    var f = a.fb;
    if (!c.Pa()) throw Error("oldBlock is not rendered.");
    var h = g.S.Lh(c, !0);
    f.hd(!1);
    var k = g.S.qk(h, f);
    if (!k.Pa()) throw Error("block is not rendered.");
    var l = g.g.Eo(f.Hb),
      m = g.g.Eo(a.s.Hb),
      n = c.bb();
    n.scale(a.s.scale);
    var u = g.g.aa.sum(m, n),
      v = g.g.aa.oo(u, l);
    v.scale(1 / f.scale);
    k.moveBy(v.x, v.y);
    d = k;
  } finally {
    g.i.enable();
  }
  g.Jc();
  c = g.ga.HB(a.fb, e);
  if (g.i.isEnabled()) {
    g.i.na(!0);
    for (e = 0; e < c.length; e++) g.i.Ia(new g.i.mf(c[e]));
    g.i.Ia(new g.i.Pf(d));
  }
  a.dm ? a.Oa() : a.Rv();
  return d;
}
b.Rv = function () {
  for (var a = this.s.dc(!1), c = 0, d; (d = a[c]); c++)
    if (-1 == this.Ex.indexOf(d))
      for (var e = La(this.fb, g.g.Yv(d)); d; ) d.oe(e), (d = q(d));
};
b.Lx = function () {
  this.wj && Oa(this.s, this.wj);
  this.s.scale = this.fb.scale;
  for (var a = 0, c = this.s.dc(!1), d = 0, e; (e = c[d]); d++) {
    var f = E(e).width;
    e.O && (f -= this.fn);
    a = Math.max(a, f);
  }
  for (d = 0; (e = this.Wn[d]); d++) a = Math.max(a, e.width);
  a += 1.5 * this.Gi + this.fn;
  a *= this.s.scale;
  a += g.Wa.Wc;
  if (this.zb != a) {
    for (d = 0; (e = c[d]); d++) {
      if (this.L) {
        f = e.bb().x;
        var h = a / this.s.scale - this.Gi;
        e.O || (h -= this.fn);
        e.moveBy(h - f, 0);
      }
      e.CB &&
        ((f = e.CB),
        (h = e),
        (e = E(h)),
        f.setAttribute("width", e.width),
        f.setAttribute("height", e.height),
        (h = h.bb()),
        f.setAttribute("y", h.y),
        f.setAttribute("x", this.L ? h.x - e.width : h.x));
    }
    if (this.L)
      for (d = 0; (e = this.Wn[d]); d++)
        e.moveTo(a / this.s.scale - e.width - this.Gi - this.fn, e.Yk.y);
    this.fb.La != this.Gj ||
      this.Gj != g.Le ||
      this.fb.Ma ||
      this.fb.translate(this.fb.scrollX + a, this.fb.scrollY);
    this.zb = a;
    this.position();
  }
  this.wj && D(this.s, this.wj);
};
function Cb(a) {
  return a.Ta ? a.Ta.isVisible() : !1;
}
b.Yb = function (a) {
  return this.s.Nb().Yb(a);
};
g.la = {};
g.la.Ff = null;
g.la.Fr = null;
g.la.jg = "";
g.la.ng = "";
g.la.ab = function () {
  g.la.pb ||
    ((g.la.pb = document.createElement("div")),
    (g.la.pb.className = "blocklyWidgetDiv"),
    (g.Ks || document.body).appendChild(g.la.pb));
};
g.la.show = function (a, c, d) {
  g.la.Oa();
  g.la.Ff = a;
  g.la.Fr = d;
  a = g.la.pb;
  a.style.direction = c ? "rtl" : "ltr";
  a.style.display = "block";
  c = g.Qg();
  g.la.jg = c.Sb.eg();
  g.la.ng = c.Tg().eg();
  g.g.o.Ha(a, g.la.jg);
  g.g.o.Ha(a, g.la.ng);
};
g.la.Oa = function () {
  if (g.la.isVisible()) {
    g.la.Ff = null;
    var a = g.la.pb;
    a.style.display = "none";
    a.style.left = "";
    a.style.top = "";
    g.la.Fr && g.la.Fr();
    g.la.Fr = null;
    a.textContent = "";
    g.la.jg && (g.g.o.ic(a, g.la.jg), (g.la.jg = ""));
    g.la.ng && (g.g.o.ic(a, g.la.ng), (g.la.ng = ""));
    na(g.Qg());
  }
};
g.la.isVisible = function () {
  return !!g.la.Ff;
};
g.la.Cm = function (a) {
  g.la.Ff == a && g.la.Oa();
};
g.la.gp = function (a, c, d) {
  g.la.pb.style.left = a + "px";
  g.la.pb.style.top = c + "px";
  g.la.pb.style.height = d + "px";
};
g.la.nK = function (a, c, d, e) {
  var f = g.la.DH(a, c, d);
  a = g.la.CH(a, c, d, e);
  0 > f ? g.la.gp(a, 0, d.height + f) : g.la.gp(a, f, d.height);
};
g.la.CH = function (a, c, d, e) {
  if (e)
    return (
      (c = Math.max(c.right - d.width, a.left)), Math.min(c, a.right - d.width)
    );
  c = Math.min(c.left, a.right - d.width);
  return Math.max(c, a.left);
};
g.la.DH = function (a, c, d) {
  return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom;
};
g.Jh = function (a) {
  g.Jh.v.constructor.call(this, a);
};
g.g.object.X(g.Jh, g.wn);
g.Jh.JO = "verticalFlyout";
b = g.Jh.prototype;
b.Qr = function () {
  if (!this.isVisible()) return null;
  try {
    var a = this.s.Hb.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var c = this.su,
    d = this.Uc - 2 * this.su,
    e = this.zb;
  this.L || (e -= this.su);
  return {
    $d: a.height * this.s.scale + 2 * this.Gi,
    tf: a.width * this.s.scale + 2 * this.Gi,
    cd: a.y,
    pd: a.x,
    Vb: d,
    Qb: e,
    jc: -this.s.scrollY + a.y,
    ac: -this.s.scrollX,
    bd: c,
    Sc: 0,
  };
};
b.jL = function (a) {
  var c = this.Qr();
  c &&
    ("number" == typeof a.y && (this.s.scrollY = -c.$d * a.y),
    this.s.translate(this.s.scrollX + c.Sc, this.s.scrollY + c.bd));
};
b.position = function () {
  if (this.isVisible()) {
    var a = this.fb.ed();
    if (a) {
      this.Uc = a.Vb;
      var c = this.zb - this.Tb;
      a = a.Vb - 2 * this.Tb;
      var d = this.Gj == g.Xl,
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
      this.wd.setAttribute("d", e.join(" "));
      c = (c = this.fb.ed())
        ? this.fb.La == this.Gj
          ? c.RD
            ? this.Gj == g.Le
              ? c.RD
              : c.Qb - this.zb
            : this.Gj == g.Le
            ? 0
            : c.Qb
          : this.Gj == g.Le
          ? 0
          : c.Qb + c.Sc - this.zb
        : 0;
      a = this.Uc;
      this.N.setAttribute("width", this.zb);
      this.N.setAttribute("height", a);
      "svg" == this.N.tagName
        ? g.g.o.wp(this.N, "translate(" + c + "px,0px)")
        : this.N.setAttribute("transform", "translate(" + c + ",0)");
      this.Ta &&
        ((this.Ta.xx = new g.g.aa(c, 0)),
        this.Ta.resize(),
        this.Ta.setPosition(this.Ta.position.x, this.Ta.position.y));
    }
  }
};
b.Wx = function () {
  this.Ta.set(0);
};
b.ML = function (a) {
  var c = g.g.VB(a);
  if (c.y) {
    var d = this.Qr();
    c = d.jc - d.cd + c.y;
    c = Math.min(c, d.$d - d.Vb);
    c = Math.max(c, 0);
    this.Ta.set(c);
    g.la.Oa();
    g.H.aj();
  }
  a.preventDefault();
  a.stopPropagation();
};
function gd(a, c, d) {
  a.s.scale = a.fb.scale;
  for (var e = a.Gi, f = a.L ? e : e + a.fn, h = 0, k; (k = c[h]); h++)
    if ("block" == k.type) {
      k = k.block;
      for (var l = p(k, !1), m = 0, n; (n = l[m]); m++) n.Ub = !0;
      k.Ja();
      n = k.Pa();
      l = E(k);
      m = k.O ? f - a.fn : f;
      k.moveBy(m, e);
      var u = a,
        v = k,
        x = h;
      m = g.g.o.M(
        g.g.F.Gc,
        {
          "fill-opacity": 0,
          x: a.L ? m - l.width : m,
          y: e,
          height: l.height,
          width: l.width,
        },
        null
      );
      m.Kf = v;
      g.K.em(m);
      u.s.Hb.insertBefore(m, v.Pa());
      v.CB = m;
      u.os[x] = m;
      u = a;
      u.ne.push(g.ta(n, "mousedown", null, id(u, k)));
      u.ne.push(g.ta(m, "mousedown", null, id(u, k)));
      u.ne.push(g.Yd(n, "mouseenter", k, k.Vq));
      u.ne.push(g.Yd(n, "mouseleave", k, k.op));
      u.ne.push(g.Yd(m, "mouseenter", k, k.Vq));
      u.ne.push(g.Yd(m, "mouseleave", k, k.op));
      e += l.height + d[h];
    } else
      "button" == k.type &&
        ((l = a),
        (m = k.button),
        (n = f),
        (u = e),
        (v = m.ab()),
        m.moveTo(n, u),
        m.show(),
        l.ne.push(g.ta(v, "mousedown", l, l.sj)),
        l.Wn.push(m),
        (e += k.button.height + d[h]));
}
b.um = function () {
  if (!this.N) return null;
  var a = this.N.getBoundingClientRect(),
    c = a.left;
  return this.Gj == g.Le
    ? new g.g.Rect(-1e9, 1e9, -1e9, c + a.width)
    : new g.g.Rect(-1e9, 1e9, c, 1e9);
};
g.C.register(g.C.ea.hz, g.C.uq, g.Jh);
g.Hu = function (a) {
  this.s = a;
  this.nn = this.Xp = this.mn = this.nh = this.ux = this.tx = this.vx = null;
};
b = g.Hu.prototype;
b.ik = 32;
b.mz = 110;
b.Zt = 20;
b.zn = 20;
b.N = null;
b.Ro = 0;
b.hn = 0;
b.ab = function () {
  this.N = g.g.o.M(g.g.F.rc, {}, null);
  var a = String(Math.random()).substring(2);
  this.Xp = g.g.o.M(g.g.F.rc, { class: "blocklyZoom" }, this.N);
  var c = g.g.o.M(g.g.F.rn, { id: "blocklyZoomoutClipPath" + a }, this.Xp);
  g.g.o.M(g.g.F.Gc, { width: 32, height: 32 }, c);
  g.g.o
    .M(
      g.g.F.Ei,
      {
        width: g.Wd.width,
        height: g.Wd.height,
        x: -64,
        y: -92,
        "clip-path": "url(#blocklyZoomoutClipPath" + a + ")",
      },
      this.Xp
    )
    .setAttributeNS(g.g.o.nf, "xlink:href", this.s.options.uj + g.Wd.url);
  this.ux = g.ta(this.Xp, "mousedown", null, this.fE.bind(this, -1));
  this.mn = g.g.o.M(g.g.F.rc, { class: "blocklyZoom" }, this.N);
  c = g.g.o.M(g.g.F.rn, { id: "blocklyZoominClipPath" + a }, this.mn);
  g.g.o.M(g.g.F.Gc, { width: 32, height: 32 }, c);
  g.g.o
    .M(
      g.g.F.Ei,
      {
        width: g.Wd.width,
        height: g.Wd.height,
        x: -32,
        y: -92,
        "clip-path": "url(#blocklyZoominClipPath" + a + ")",
      },
      this.mn
    )
    .setAttributeNS(g.g.o.nf, "xlink:href", this.s.options.uj + g.Wd.url);
  this.tx = g.ta(this.mn, "mousedown", null, this.fE.bind(this, 1));
  this.s.Lc() &&
    ((this.nn = g.g.o.M(g.g.F.rc, { class: "blocklyZoom" }, this.N)),
    (c = g.g.o.M(g.g.F.rn, { id: "blocklyZoomresetClipPath" + a }, this.nn)),
    g.g.o.M(g.g.F.Gc, { width: 32, height: 32 }, c),
    g.g.o
      .M(
        g.g.F.Ei,
        {
          width: g.Wd.width,
          height: g.Wd.height,
          y: -92,
          "clip-path": "url(#blocklyZoomresetClipPath" + a + ")",
        },
        this.nn
      )
      .setAttributeNS(g.g.o.nf, "xlink:href", this.s.options.uj + g.Wd.url),
    (this.vx = g.ta(this.nn, "mousedown", null, this.$K.bind(this))));
  return this.N;
};
b.U = function (a) {
  this.nh = this.Zt + a;
  return this.nh + this.mz;
};
b.J = function () {
  this.N && g.g.o.removeNode(this.N);
  this.vx && g.Na(this.vx);
  this.tx && g.Na(this.tx);
  this.ux && g.Na(this.ux);
};
b.position = function () {
  if (this.nh) {
    var a = this.s.ed();
    a &&
      ((this.Ro =
        a.La == g.Le || (this.s.Id && !this.s.L)
          ? a.Qb + a.Sc - this.ik - this.zn - g.Wa.Wc
          : this.zn + g.Wa.Wc),
      a.La == g.On
        ? ((this.hn = this.nh),
          this.mn.setAttribute("transform", "translate(0, 34)"),
          this.nn && this.nn.setAttribute("transform", "translate(0, 77)"))
        : ((this.hn = a.Vb + a.bd - this.mz - this.nh),
          this.mn.setAttribute("transform", "translate(0, 43)"),
          this.Xp.setAttribute("transform", "translate(0, 77)")),
      this.N.setAttribute(
        "transform",
        "translate(" + this.Ro + "," + this.hn + ")"
      ));
  }
};
b.fE = function (a, c) {
  na(this.s);
  var d = this.s,
    e = d.ed();
  if (d.pa) {
    var f = e.KD ? e.KD / 2 : 0;
    e = e.JD ? e.JD / 2 : 0;
  } else (f = e.Qb / 2 + e.Sc), (e = e.Vb / 2 + e.bd);
  d.zoom(f, e, a);
  jd(this);
  g.Touch.jk();
  c.stopPropagation();
  c.preventDefault();
};
b.$K = function (a) {
  na(this.s);
  this.s.setScale(this.s.options.Ab.GD);
  var c = this.s;
  g.g.o.Ha(c.Hb, "blocklyCanvasTransitioning");
  g.g.o.Ha(c.mg, "blocklyCanvasTransitioning");
  c = this.s;
  if (c.Lc()) {
    var d = c.ed(),
      e = (d.tf - d.Qb) / 2,
      f = (d.$d - d.Vb) / 2;
    e = -e - d.pd;
    f = -f - d.cd;
    c.scroll(e, f);
  } else
    console.warn(
      "Tried to move a non-movable workspace. This could result in blocks becoming inaccessible."
    );
  setTimeout(this.s.rI.bind(this.s), 500);
  jd(this);
  g.Touch.jk();
  a.stopPropagation();
  a.preventDefault();
};
function jd(a) {
  a = new g.i.Nf(null, a.s.id, "zoom_controls");
  g.i.Ia(a);
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
g.Ny = function (a) {
  this.co = a;
  this.ab();
};
b = g.Ny.prototype;
b.hb = null;
b.Ng = null;
b.co = null;
b.Aj = 1;
b.Hp = null;
b.ab = function () {
  this.hb ||
    ((this.hb = g.g.o.M(
      g.g.F.dk,
      {
        xmlns: g.g.o.Nq,
        "xmlns:html": g.g.o.Gl,
        "xmlns:xlink": g.g.o.nf,
        version: "1.1",
        class: "blocklyBlockDragSurface",
      },
      this.co
    )),
    (this.Ng = g.g.o.M(g.g.F.rc, {}, this.hb)));
};
function Bb(a, c) {
  if (a.Ng.childNodes.length) throw Error("Already dragging a block.");
  a.Ng.appendChild(c);
  a.hb.style.display = "block";
  a.Hp = new g.g.aa(0, 0);
}
b.ol = function (a, c) {
  this.Hp = new g.g.aa(a * this.Aj, c * this.Aj);
  a = this.Hp.x;
  c = this.Hp.y;
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.hb.style.display = "block";
  g.g.o.wp(this.hb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.iw = function () {
  var a = g.g.xf(this.hb);
  return new g.g.aa(a.x / this.Aj, a.y / this.Aj);
};
b.xc = function () {
  return this.Ng;
};
b.mr = function (a) {
  a
    ? a.appendChild(this.Ng.firstChild)
    : this.Ng.removeChild(this.Ng.firstChild);
  this.hb.style.display = "none";
  if (this.Ng.childNodes.length) throw Error("Drag group was not cleared.");
  this.Hp = null;
};
g.fj = function (a, c) {
  g.EH();
  "string" == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a));
  if (!a || !g.g.o.containsNode(document, a))
    throw Error("Error: container is not in current document.");
  c = new g.Td(c || {});
  var d = document.createElement("div");
  d.className = "injectionDiv";
  d.tabIndex = 0;
  g.g.$.Zb(d, g.g.$.State.zz, g.h.WORKSPACE_ARIA_LABEL);
  a.appendChild(d);
  a = g.Se(d, c);
  var e = new g.Ny(d),
    f = new g.yA(d),
    h = g.TH(a, c, e, f);
  g.jJ(h);
  g.To = h;
  g.dn(h);
  d.addEventListener("focusin", function () {
    g.To = h;
  });
  return h;
};
g.Se = function (a, c) {
  a.setAttribute("dir", "LTR");
  g.Qc.fj(c.bJ, c.uj);
  a = g.g.o.M(
    g.g.F.dk,
    {
      xmlns: g.g.o.Nq,
      "xmlns:html": g.g.o.Gl,
      "xmlns:xlink": g.g.o.nf,
      version: "1.1",
      class: "blocklySvg",
      tabindex: "0",
    },
    a
  );
  var d = g.g.o.M(g.g.F.Vy, {}, a);
  c.lw = g.Uj.ab(String(Math.random()).substring(2), c.dC, d);
  return a;
};
g.TH = function (a, c, d, e) {
  c.yc = null;
  var f = new g.Cb(c, d, e);
  c = f.options;
  f.scale = c.Ab.GD;
  a.appendChild(f.ab("blocklyMainBackground"));
  g.g.o.Ha(aa(f), f.Sb.eg());
  g.g.o.Ha(aa(f), f.Tg().eg());
  !c.Ho && c.ah && ((d = Zc(f, g.g.F.dk)), g.g.o.Fk(d, a));
  c.hC && Xc(f);
  c.Ab && c.Ab.controls && Yc(f);
  f.Cc.subscribe(a, "workspaceBackgroundColour", "background-color");
  f.translate(0, 0);
  c.readOnly ||
    f.Lc() ||
    D(f, function (h) {
      if (!f.Kc() && !f.Lc() && -1 != g.i.rE.indexOf(h.type)) {
        var k = Object.create(null),
          l = f.ed(),
          m = f.scale;
        k.L = f.L;
        k.ac = l.ac / m;
        k.jc = l.jc / m;
        k.aE = (l.ac + l.Qb) / m;
        k.$D = (l.jc + l.Vb) / m;
        ad(f)
          ? ((l = Da(f)),
            (k.pd = l.left),
            (k.cd = l.top),
            (k.cB = l.right),
            (k.$A = l.bottom))
          : ((k.pd = l.pd / m),
            (k.cd = l.cd / m),
            (k.cB = (l.pd + l.tf) / m),
            (k.$A = (l.cd + l.$d) / m));
        if (k.cd < k.jc || k.$A > k.$D || k.pd < k.ac || k.cB > k.aE) {
          l = null;
          h && ((l = g.i.xc()), g.i.na(h.group));
          switch (h.type) {
            case g.i.aq:
            case g.i.wt:
              var n = f.Fd(h.ub);
              n && (n = n.ie());
              break;
            case g.i.lq:
            case g.i.mq:
              n = f.vr[h.Fg] || null;
          }
          if (n) {
            m = Kc(n);
            m.height = m.bottom - m.top;
            m.width = m.right - m.left;
            var u = k.jc,
              v = k.$D - m.height;
            v = Math.max(u, v);
            u = g.g.rd.hm(u, m.top, v) - m.top;
            v = k.ac;
            var x = k.aE - m.width;
            k.L ? (v = Math.min(x, v)) : (x = Math.max(v, x));
            n.moveBy(g.g.rd.hm(v, m.left, x) - m.left, u);
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
  g.dn(f);
  g.la.ab();
  g.H.ab();
  g.K.ab();
  return f;
};
g.jJ = function (a) {
  var c = a.options,
    d = r(a);
  g.ta(d.parentNode, "contextmenu", null, function (f) {
    g.g.fs(f) || f.preventDefault();
  });
  d = g.ta(window, "resize", null, function () {
    g.Jc(!0);
    g.dn(a);
  });
  a.Vs = d;
  g.fj.xH();
  if (c.ah) {
    d = a.Ma;
    var e = a.oc(!0);
    d
      ? d.U()
      : e && (e.U(a), e.show(c.ah), "function" == typeof e.Wx && e.Wx());
  }
  d = g.Wa.Wc;
  c.hC && (d = a.xd.U(d));
  c.Ab && c.Ab.controls && a.xl.U(d);
  c.gd && c.gd.scrollbars
    ? ((a.Ta = new g.Mn(a)), a.Ta.resize())
    : a.yp({ x: 0.5, y: 0.5 });
  c.eJ && g.fj.wJ(c.uj, a);
};
g.fj.xH = function () {
  g.kI ||
    (g.ta(document, "scroll", null, function () {
      for (var a = g.Wb.getAll(), c = 0, d; (d = a[c]); c++) d.Qp && d.Qp();
    }),
    g.ta(document, "keydown", null, g.bp),
    g.Yd(document, "touchend", null, g.oj),
    g.Yd(document, "touchcancel", null, g.oj),
    g.g.userAgent.Il &&
      g.ta(window, "orientationchange", document, function () {
        g.dn(g.Qg());
      }));
  g.kI = !0;
};
g.fj.wJ = function (a, c) {
  function d() {
    for (; f.length; ) g.Na(f.pop());
    e.preload();
  }
  var e = c.Dg;
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
g.Sd = function (a, c) {
  this.ZD = c || "";
  this.vD = Object.create(null);
  if (a) for (a = a.split(","), c = 0; c < a.length; c++) this.vD[a[c]] = !0;
  this.reset();
};
g.Sd.It = "DEVELOPER_VARIABLE";
g.Sd.prototype.reset = function () {
  this.Lg = Object.create(null);
  this.kB = Object.create(null);
  this.Ua = null;
};
g.Sd.prototype.by = function (a) {
  this.Ua = a;
};
g.Sd.prototype.xe = function (a, c) {
  if (c == g.tc) {
    var d = a;
    this.Ua
      ? (d = (d = this.Ua.gg(d)) ? d.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (d = null));
    d && (a = d);
  }
  d = a.toLowerCase() + "_" + c;
  var e = c == g.tc || c == g.Sd.It ? this.ZD : "";
  if (d in this.Lg) return e + this.Lg[d];
  a = kd(this, a, c);
  this.Lg[d] = a.substr(e.length);
  return a;
};
function kd(a, c, d) {
  c
    ? ((c = encodeURI(c.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(c[0]) && (c = "my_" + c))
    : (c = g.h.UNNAMED_KEY || "unnamed");
  for (var e = ""; a.kB[c + e] || c + e in a.vD; ) e = e ? e + 1 : 2;
  c += e;
  a.kB[c] = !0;
  return (d == g.tc || d == g.Sd.It ? a.ZD : "") + c;
}
g.Sd.wf = function (a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.Ea = {};
g.Ea.Gz = g.Kn;
g.Ea.Uy = "x";
g.Ea.uH = function (a) {
  var c = Ja(a, "procedures_defnoreturn").map(function (d) {
    return d.Xi();
  });
  a = Ja(a, "procedures_defreturn").map(function (d) {
    return d.Xi();
  });
  c.sort(g.Ea.pD);
  a.sort(g.Ea.pD);
  return [c, a];
};
g.Ea.pD = function (a, c) {
  return a[0].toLowerCase().localeCompare(c[0].toLowerCase());
};
g.Ea.Kr = function (a, c) {
  if (c.Ub) return a;
  for (a = a || g.h.UNNAMED_KEY || "unnamed"; !g.Ea.pJ(a, c.u, c); ) {
    var d = a.match(/^(.*?)(\d+)$/);
    a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2";
  }
  return a;
};
g.Ea.pJ = function (a, c, d) {
  return !g.Ea.rJ(a, c, d);
};
g.Ea.rJ = function (a, c, d) {
  c = B(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e] != d && c[e].Xi) {
      var f = c[e].Xi();
      if (g.Sd.wf(f[0], a)) return !0;
    }
  return !1;
};
g.Ea.uD = function (a) {
  a = a.trim();
  var c = g.Ea.Kr(a, this.Z()),
    d = this.getValue();
  if (d != a && d != c) {
    a = B(this.Z().u, !1);
    for (var e = 0; e < a.length; e++) a[e].Um && a[e].Um(d, c);
  }
  return c;
};
g.Ea.vk = function (a) {
  function c(h, k) {
    for (var l = 0; l < h.length; l++) {
      var m = h[l][0],
        n = h[l][1],
        u = g.g.xml.createElement("block");
      u.setAttribute("type", k);
      u.setAttribute("gap", 16);
      var v = g.g.xml.createElement("mutation");
      v.setAttribute("name", m);
      u.appendChild(v);
      for (m = 0; m < n.length; m++) {
        var x = g.g.xml.createElement("arg");
        x.setAttribute("name", n[m]);
        v.appendChild(x);
      }
      d.push(u);
    }
  }
  var d = [];
  if (g.R.procedures_defnoreturn) {
    var e = g.g.xml.createElement("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = g.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    f.appendChild(g.g.xml.createTextNode(g.h.PROCEDURES_DEFNORETURN_PROCEDURE));
    e.appendChild(f);
    d.push(e);
  }
  g.R.procedures_defreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = g.g.xml.createElement("field")),
    f.setAttribute("name", "NAME"),
    f.appendChild(g.g.xml.createTextNode(g.h.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    d.push(e));
  g.R.procedures_ifreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    d.push(e));
  d.length && d[d.length - 1].setAttribute("gap", 24);
  a = g.Ea.uH(a);
  c(a[0], "procedures_callnoreturn");
  c(a[1], "procedures_callreturn");
  return d;
};
g.Ea.VD = function (a) {
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
  c = g.g.xml.createTextNode(g.ga.GB(g.Ea.Uy, c));
  f.appendChild(c);
  e.appendChild(f);
  d.appendChild(e);
  if ((c = g.g.za.fv(d))) {
    if (!a.options.ah)
      throw Error("Existing toolbox is null.  Can't create new toolbox.");
    if (g.g.za.Ho(c)) {
      if (!a.Ma)
        throw Error("Existing toolbox has no categories.  Can't change mode.");
      a.options.ah = c;
      a.Ma.Ja(c);
    } else {
      if (!a.pa)
        throw Error("Existing toolbox has categories.  Can't change mode.");
      a.options.ah = c;
      a.pa.show(c);
    }
  } else if (a.options.ah) throw Error("Can't nullify an existing toolbox.");
};
g.Ea.MJ = function (a) {
  if (a.type == g.i.cq && "mutator" === a.Uu && a.Km) {
    a = g.Wb.zo(a.Zc).Fd(a.ub);
    var c = a.type;
    if ("procedures_defnoreturn" == c || "procedures_defreturn" == c)
      (a = a.td.s), g.Ea.VD(a), D(a, g.Ea.LJ);
  }
};
g.Ea.LJ = function (a) {
  (a.type != g.i.aq && a.type != g.i.vt && a.type != g.i.nE) ||
    g.Ea.VD(g.Wb.zo(a.Zc));
};
g.Ea.DI = function (a, c) {
  var d = [];
  c = B(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e].We) {
      var f = c[e].We();
      f && g.Sd.wf(f, a) && d.push(c[e]);
    }
  return d;
};
g.Ea.ap = function (a) {
  var c = g.i.eb,
    d = a.Xi()[0],
    e = a.Xa(!0);
  a = g.Ea.DI(d, a.u);
  d = 0;
  for (var f; (f = a[d]); d++) {
    var h = f.Xa();
    h = h && g.S.ee(h);
    f.Eb(e);
    var k = f.Xa();
    k = k && g.S.ee(k);
    h != k &&
      ((g.i.eb = !1),
      g.i.Ia(new g.i.ph(f, "mutation", null, h, k)),
      (g.i.eb = c));
  }
};
g.Ea.Bo = function (a, c) {
  c = c.dc(!1);
  for (var d = 0; d < c.length; d++)
    if (c[d].Xi) {
      var e = c[d].Xi();
      if (e && g.Sd.wf(e[0], a)) return c[d];
    }
  return null;
};
g.bc = {};
g.bc.names = {
  ZE: "escape",
  Pj: "delete",
  CE: "copy",
  JE: "cut",
  zG: "paste",
  hH: "undo",
  IG: "redo",
};
g.bc.FK = function () {
  var a = {
    name: g.bc.names.ZE,
    cb: function (c) {
      return !c.options.readOnly;
    },
    Aa: function () {
      g.Jc();
      return !0;
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Kt, a.name);
};
g.bc.Nx = function () {
  var a = {
    name: g.bc.names.Pj,
    cb: function (c) {
      return !c.options.readOnly && g.selected && g.selected.Be();
    },
    Aa: function (c, d) {
      d.preventDefault();
      if (g.ug.Dk()) return !1;
      g.nB();
      return !0;
    },
  };
  g.mb.C.register(a);
  G(g.g.P.Pj, a.name);
  G(g.g.P.lE, a.name);
};
g.bc.xK = function () {
  var a = {
    name: g.bc.names.CE,
    cb: function (d) {
      return (
        !d.options.readOnly &&
        !g.ug.Dk() &&
        g.selected &&
        g.selected.Be() &&
        g.selected.Lc()
      );
    },
    Aa: function () {
      g.Jc();
      g.gv(g.selected);
      return !0;
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.At, [g.g.P.zi]);
  G(c, a.name);
  c = H(g.g.P.At, [g.g.P.zl]);
  G(c, a.name);
  c = H(g.g.P.At, [g.g.P.Nl]);
  G(c, a.name);
};
g.bc.yK = function () {
  var a = {
    name: g.bc.names.JE,
    cb: function (d) {
      return (
        !d.options.readOnly &&
        !g.ug.Dk() &&
        g.selected &&
        g.selected.Be() &&
        g.selected.Lc() &&
        !g.selected.u.hg
      );
    },
    Aa: function () {
      g.gv(g.selected);
      g.nB();
      return !0;
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.Uq, [g.g.P.zi]);
  G(c, a.name);
  c = H(g.g.P.Uq, [g.g.P.zl]);
  G(c, a.name);
  c = H(g.g.P.Uq, [g.g.P.Nl]);
  G(c, a.name);
};
g.bc.QK = function () {
  var a = {
    name: g.bc.names.zG,
    cb: function (d) {
      return !d.options.readOnly && !g.ug.Dk();
    },
    Aa: function () {
      return g.Ms();
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.Eu, [g.g.P.zi]);
  G(c, a.name);
  c = H(g.g.P.Eu, [g.g.P.zl]);
  G(c, a.name);
  c = H(g.g.P.Eu, [g.g.P.Nl]);
  G(c, a.name);
};
g.bc.Px = function () {
  var a = {
    name: g.bc.names.hH,
    cb: function (d) {
      return !d.options.readOnly && !g.ug.Dk();
    },
    Aa: function (d) {
      g.Jc();
      Na(d, !1);
      return !0;
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.am, [g.g.P.zi]);
  G(c, a.name);
  c = H(g.g.P.am, [g.g.P.zl]);
  G(c, a.name);
  c = H(g.g.P.am, [g.g.P.Nl]);
  G(c, a.name);
};
g.bc.Ox = function () {
  var a = {
    name: g.bc.names.IG,
    cb: function (d) {
      return !g.ug.Dk() && !d.options.readOnly;
    },
    Aa: function (d) {
      g.Jc();
      Na(d, !0);
      return !0;
    },
  };
  g.mb.C.register(a);
  var c = H(g.g.P.am, [g.g.P.Dh, g.g.P.zi]);
  G(c, a.name);
  c = H(g.g.P.am, [g.g.P.Dh, g.g.P.zl]);
  G(c, a.name);
  c = H(g.g.P.am, [g.g.P.Dh, g.g.P.Nl]);
  G(c, a.name);
  c = H(g.g.P.oH, [g.g.P.zi]);
  G(c, a.name);
};
g.bc.AK = function () {
  g.bc.FK();
  g.bc.Nx();
  g.bc.xK();
  g.bc.yK();
  g.bc.QK();
  g.bc.Px();
  g.bc.Ox();
};
g.mb = function () {
  g.mb.C = this;
  this.af = Object.create(null);
  this.Mm = Object.create(null);
  g.bc.AK();
  g.navigation.NK();
};
g.mb.ss = { cO: g.g.P.Dh, dM: g.g.P.zi, UL: g.g.P.zl, VM: g.g.P.Nl };
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
g.mb.prototype.bp = function (a, c) {
  var d = "";
  for (e in g.mb.ss) c.getModifierState(e) && ("" != d && (d += "+"), (d += e));
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
    for (var e = g.g.object.values(g.mb.ss), f = 0, h; (h = c[f]); f++)
      if (0 > e.indexOf(h)) throw Error(h + " is not a valid modifier key.");
    for (var k in g.mb.ss)
      -1 < c.indexOf(g.mb.ss[k]) && ("" != d && (d += "+"), (d += k));
  }
  "" != d && a ? (d = d + "+" + a) : a && (d = a.toString());
  return d;
}
new g.mb();
g.Pn = function (a, c, d, e) {
  this.u = a;
  this.name = c;
  this.type = d || "";
  this.rw = e || g.g.Vh();
  g.i.Ia(new g.i.mf(this));
};
g.Pn.prototype.Qa = function () {
  return this.rw;
};
g.Pn.UA = function (a, c) {
  a = a.name.toLowerCase();
  c = c.name.toLowerCase();
  return a < c ? -1 : a == c ? 0 : 1;
};
g.ga = {};
g.ga.Gz = g.tc;
g.ga.FA = function (a) {
  var c = B(a, !1);
  a = Object.create(null);
  for (var d = 0; d < c.length; d++) {
    var e = c[d].Yh();
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
g.ga.Ey = {};
g.ga.sH = function (a) {
  a = B(a, !1);
  for (var c = Object.create(null), d = 0, e; (e = a[d]); d++) {
    var f = e.xO;
    !f &&
      e.JI &&
      ((f = e.JI),
      g.ga.Ey[e.type] ||
        (console.warn(
          "Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" +
            e.type +
            "')"
        ),
        (g.ga.Ey[e.type] = !0)));
    if (f) for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0;
  }
  return Object.keys(c);
};
g.ga.vk = function (a) {
  var c = [],
    d = document.createElement("button");
  d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
  d.setAttribute("callbackKey", "CREATE_VARIABLE");
  cd(a, function (e) {
    g.ga.hB(e.et);
  });
  c.push(d);
  a = g.ga.xI(a);
  return (c = c.concat(a));
};
g.ga.xI = function (a) {
  a = a.Fo("");
  var c = [];
  if (0 < a.length) {
    var d = a[a.length - 1];
    if (g.R.variables_set) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", "variables_set");
      e.setAttribute("gap", g.R.math_change ? 8 : 24);
      e.appendChild(g.ga.xo(d));
      c.push(e);
    }
    g.R.math_change &&
      ((e = g.g.xml.createElement("block")),
      e.setAttribute("type", "math_change"),
      e.setAttribute("gap", g.R.variables_get ? 20 : 8),
      e.appendChild(g.ga.xo(d)),
      (d = g.S.Ee(
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
      )),
      e.appendChild(d),
      c.push(e));
    if (g.R.variables_get) {
      a.sort(g.Pn.UA);
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
g.ga.nA = "ijkmnopqrstuvwxyzabcdefgh";
g.ga.zI = function (a) {
  return g.ga.GB(g.ga.nA.charAt(0), a.Xv());
};
g.ga.GB = function (a, c) {
  if (!c.length) return a;
  for (var d = g.ga.nA, e = "", f = d.indexOf(a); ; ) {
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
g.ga.hB = function (a, c, d) {
  function e(h) {
    g.ga.qD(g.h.NEW_VARIABLE_TITLE, h, function (k) {
      if (k) {
        var l = g.ga.OJ(k, a);
        if (l) {
          if (l.type == f)
            var m = g.h.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
          else
            (m = g.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (m = m.replace("%1", l.name).replace("%2", l.type));
          g.alert(m, function () {
            e(k);
          });
        } else a.uf(k, f), c && c(k);
      } else c && c(null);
    });
  }
  var f = d || "";
  e("");
};
g.ga.uf = g.ga.hB;
g.ga.Ts = function (a, c) {
  function d(e) {
    var f = g.h.RENAME_VARIABLE_TITLE.replace("%1", c.name);
    g.ga.qD(f, e, function (h) {
      if (h) {
        var k = g.ga.PJ(h, c.type, a);
        k
          ? ((k = g.h.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              k.name
            ).replace("%2", k.type)),
            g.alert(k, function () {
              d(h);
            }))
          : a.zj(c.Qa(), h);
      }
    });
  }
  d("");
};
g.ga.qD = function (a, c, d) {
  g.prompt(a, c, function (e) {
    e &&
      ((e = e.replace(/[\s\xa0]+/g, " ").trim()),
      e == g.h.RENAME_VARIABLE || e == g.h.NEW_VARIABLE) &&
      (e = null);
    d(e);
  });
};
g.ga.PJ = function (a, c, d) {
  d = d.Ua.wk();
  a = a.toLowerCase();
  for (var e = 0, f; (f = d[e]); e++)
    if (f.name.toLowerCase() == a && f.type != c) return f;
  return null;
};
g.ga.OJ = function (a, c) {
  c = c.Ua.wk();
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
g.ga.Sr = function (a, c, d, e) {
  var f = g.ga.Hd(a, c, d, e);
  f || (f = g.ga.UH(a, c, d, e));
  return f;
};
g.ga.Hd = function (a, c, d, e) {
  var f = a.vj,
    h = null;
  if (c && ((h = a.gg(c)), !h && f && (h = f.gg(c)), h)) return h;
  if (d) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    h = a.Hd(d, e);
    !h && f && (h = f.Hd(d, e));
  }
  return h;
};
g.ga.UH = function (a, c, d, e) {
  var f = a.vj;
  d || (d = g.ga.zI(a.hg ? a.fb : a));
  return f ? f.uf(d, e, c) : a.uf(d, e, c);
};
g.ga.HB = function (a, c) {
  a = a.wk();
  var d = [];
  if (c.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == c.indexOf(f) && d.push(f);
    }
  return d;
};
g.VERSION = "uncompiled";
g.To = null;
g.selected = null;
g.rm = [];
g.im = null;
g.pr = null;
g.av = null;
g.oO = null;
g.Ks = null;
g.uL = function (a) {
  return new g.g.ue(a.KA, a.JA);
};
g.LO = function (a) {
  Ga(a);
};
g.dn = function (a) {
  for (; a.options.yc; ) a = a.options.yc;
  var c = r(a),
    d = c.parentNode;
  if (d) {
    var e = d.offsetWidth;
    d = d.offsetHeight;
    c.KA != e && (c.setAttribute("width", e + "px"), (c.KA = e));
    c.JA != d && (c.setAttribute("height", d + "px"), (c.JA = d));
    a.resize();
  }
};
g.bp = function (a) {
  var c = g.To;
  !c || g.g.fs(a) || (c.ra && !c.isVisible()) || g.mb.C.bp(c, a);
};
g.nB = function () {
  var a = g.selected;
  a.u.hg || (g.i.na(!0), g.Jc(), a.J(!0, !0), g.i.na(!1));
};
g.gv = function (a) {
  if (a.Im) a = null;
  else {
    var c = g.S.Lh(a, !0);
    g.S.bI(c);
    var d = a.bb();
    c.setAttribute("x", a.L ? -d.x : d.x);
    c.setAttribute("y", d.y);
    a = { xml: c, source: a.u, FL: g.g.Yv(a, !0) };
  }
  a && ((g.im = a.xml), (g.pr = a.source), (g.av = a.FL));
};
g.Ms = function () {
  if (!g.im) return !1;
  var a = g.pr;
  a.hg && (a = a.fb);
  return g.av && La(a, g.av) ? (g.i.na(!0), a.Ms(g.im), g.i.na(!1), !0) : !1;
};
g.duplicate = function (a) {
  var c = g.im,
    d = g.pr;
  g.gv(a);
  a.u.Ms(g.im);
  g.im = c;
  g.pr = d;
};
g.HO = function (a) {
  g.g.fs(a) || a.preventDefault();
};
g.Jc = function (a) {
  g.K.Oa();
  g.la.Oa();
  g.H.aj();
  if (!a) {
    a = g.Qg();
    if (a.xd && a.xd.Pg) {
      var c = a.xd;
      c.Pg.isVisible() && (c.Pg.Oa(), hc(c, !1));
    }
    (a = a.Ma) && a.oc() && a.oc().dm && xb(a, null);
  }
};
g.Qg = function () {
  return g.To;
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
g.uJ = function (a) {
  return function () {
    qc(this, a);
  };
};
g.Ti = function (a) {
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
        : (g.R[e] &&
            console.warn(
              "Block definition #" +
                c +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (g.R[e] = { U: g.uJ(d) }));
    } else
      console.warn(
        "Block definition #" + c + " in JSON array is " + d + ". Skipping."
      );
  }
};
g.ta = function (a, c, d, e, f, h) {
  function k(x) {
    var I = !f;
    x = g.Touch.pL(x);
    for (var ua = 0, Ca; (Ca = x[ua]); ua++)
      if (!I || g.Touch.iy(Ca))
        g.Touch.hL(Ca), d ? e.call(d, Ca) : e(Ca), (l = !0);
  }
  var l = !1,
    m = [];
  if (g.g.global.PointerEvent && c in g.Touch.zg)
    for (var n = 0, u; (u = g.Touch.zg[c][n]); n++)
      a.addEventListener(u, k, !1), m.push([a, u, k]);
  else if ((a.addEventListener(c, k, !1), m.push([a, c, k]), c in g.Touch.zg)) {
    var v = function (x) {
      k(x);
      var I = !h;
      l && I && x.preventDefault();
    };
    for (n = 0; (u = g.Touch.zg[c][n]); n++)
      a.addEventListener(u, v, !1), m.push([a, u, v]);
  }
  return m;
};
g.Yd = function (a, c, d, e) {
  function f(n) {
    d ? e.call(d, n) : e(n);
  }
  var h = [];
  if (g.g.global.PointerEvent && c in g.Touch.zg)
    for (var k = 0, l; (l = g.Touch.zg[c][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f]);
  else if ((a.addEventListener(c, f, !1), h.push([a, c, f]), c in g.Touch.zg)) {
    var m = function (n) {
      if (n.changedTouches && 1 == n.changedTouches.length) {
        var u = n.changedTouches[0];
        n.clientX = u.clientX;
        n.clientY = u.clientY;
      }
      f(n);
      n.preventDefault();
    };
    for (k = 0; (l = g.Touch.zg[c][k]); k++)
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
g.lj = function (a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
g.gJ = function (a) {
  return g.g.vb.nC(a);
};
g.EH = function () {
  g.Cd("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  g.Cd("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  g.Cd("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  g.Cd("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  g.Cd("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  g.Cd("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  g.Cd("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  g.Cd("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  g.Cd("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  g.Cd("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  g.Cd("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  g.Cd("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  g.Cd("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  g.Cd("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  g.Cd("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  g.Cd("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
g.Cd = function (a, c, d) {
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
g.QO = function (a) {
  g.Ks = a;
};
var ld = {
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
  md = "ace ar fa he mzn ps ur".split(" "),
  nd = window.BlocklyGamesLang,
  od = window.BlocklyGamesLanguages,
  pd = /\.html$/.test(window.location.pathname),
  N,
  qd = Number,
  rd,
  sd = window.location.search.match(/[?&]level=([^&]+)/);
rd = sd ? decodeURIComponent(sd[1].replace(/\+/g, "%20")) : "NaN";
var td = qd(rd);
N = isNaN(td) ? 1 : g.g.rd.hm(1, td, 10);
function ud() {
  document.title = document.getElementById("title").textContent;
  document.dir = -1 != md.indexOf(nd) ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", nd);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var c = [], d = 0; d < od.length; d++) {
      var e = od[d];
      c.push([ld[e], e]);
    }
    c.sort(function (h, k) {
      return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0;
    });
    for (d = a.options.length = 0; d < c.length; d++) {
      var f = c[d];
      e = f[1];
      f = new Option(f[0], e);
      e == nd && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (d = 1; 10 >= d; d++)
    (a = document.getElementById("level" + d)),
      (c = !!vd(d)),
      a && c && (a.className += " level_done");
  (d = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(wd, 1);
}
function vd(a) {
  var c = xd;
  try {
    var d = window.localStorage[c + a];
  } catch (e) {}
  return d;
}
function O(a) {
  var c;
  (c = document.getElementById(a))
    ? ((c = c.textContent), (c = c.replace(/\\n/g, "\n")))
    : (c = null);
  return null === c ? "[Unknown message: " + a + "]" : c;
}
function yd(a, c) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", c, !0);
  a.addEventListener("touchend", c, !0);
}
function wd() {
  if (!pd) {
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
g.m.uh = function () {
  this.vg = 0;
  this.MG = 3;
  this.kf = 5;
  this.Ez = 8;
  this.Rd = 10;
  this.eA = this.kf;
  this.Nn = 15;
  this.Wl = 5;
  this.Pq = 8;
  this.rG = 15;
  this.cu = 4;
  this.kG = 12;
  this.UE = 16;
  this.TE = this.Zy = this.Nn;
  this.Tb = 8;
  this.SG = this.En = 15;
  this.bA = 0;
  this.dA = 20;
  this.mE = 4;
  this.dH = this.kf;
  this.eH = this.Rd;
  this.pE = this.kf;
  this.oE = this.Rd;
  this.Zp = !1;
  this.PG = 15;
  this.QG = 100;
  this.OG = 15;
  this.Bn = 24;
  this.WE = 14.5;
  this.VE = this.Nn + 11;
  this.aF = 2;
  this.XE = this.Bn;
  this.aA = g.g.D.moveBy(0, 0);
  this.MF = 12;
  this.NF = 6;
  this.xh = 11;
  this.Di = "normal";
  this.Ci = "sans-serif";
  this.Ot = this.Rj = -1;
  this.wq = 4;
  this.Mt = 16;
  this.wh = 5;
  this.El = 3;
  this.cz = "#fff";
  this.Pt = !g.g.userAgent.gf && !g.g.userAgent.Qj;
  this.ez = this.Mt;
  this.lF = this.kF = this.Nt = !1;
  this.nF = this.wh;
  this.un = 12;
  this.mF =
    "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
  this.dz = this.oF = !1;
  this.jF = 26;
  this.iF = this.Mt;
  this.hF = this.wh - 3;
  this.kp = String(Math.random()).substring(2);
  this.Hr = "";
  this.Pv = null;
  this.sB = "";
  this.lo = this.ov = this.yv = null;
  this.qq = "#cc0a0a";
  this.Fq = "#4286f4";
  this.tq = 100;
  this.uA = 5;
  this.rq = 10;
  this.EE = 2;
  this.GE = 4;
  this.jz = !1;
  this.Tt = "#000000";
  this.Bq = 0.2;
  this.Zz = { CG: 1, Ol: 2 };
};
b = g.m.uh.prototype;
b.U = function () {
  this.Kl = this.Ow();
  this.Ol = this.Pw();
  this.Sl = this.Rw();
  this.lu = this.Qw();
  var a = this.Tb,
    c = g.g.D.arc("a", "0 0,0", a, g.g.D.Ya(-a, a)),
    d = g.g.D.arc("a", "0 0,0", a, g.g.D.Ya(a, a));
  this.Cq = { width: a, height: a, Dx: c, Ns: d };
  a = this.Tb;
  c = g.g.D.moveBy(0, a) + g.g.D.arc("a", "0 0,1", a, g.g.D.Ya(a, -a));
  d = g.g.D.arc("a", "0 0,1", a, g.g.D.Ya(a, a));
  var e = g.g.D.arc("a", "0 0,1", a, g.g.D.Ya(-a, -a)),
    f = g.g.D.arc("a", "0 0,1", a, g.g.D.Ya(-a, a));
  this.Jn = { vy: c, BL: d, zH: f, Su: e, cL: a };
};
b.zp = function (a) {
  this.Ni = {};
  var c = a.Ni,
    d;
  for (d in c) this.Ni[d] = zd(c[d]);
  this.Ci =
    a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.Ci;
  this.Di =
    a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.Di;
  this.xh =
    a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.xh;
  c = g.g.o.JC("Hg", this.xh + "pt", this.Di, this.Ci);
  this.Rj = c.height;
  this.Ot = c.qf;
  this.qq = xa(a, "cursorColour") || this.qq;
  this.Fq = xa(a, "markerColour") || this.Fq;
  this.Tt = xa(a, "insertionMarkerColour") || this.Tt;
  this.Bq = Number(xa(a, "insertionMarkerOpacity")) || this.Bq;
  this.Zp = null != a.ny ? a.ny : this.Zp;
};
function Mc(a, c) {
  var d = "auto_" + c;
  a.Ni[d] || (a.Ni[d] = zd({ colourPrimary: c }));
  return { style: a.Ni[d], name: d };
}
function Jc(a, c) {
  return (
    a.Ni[c || ""] ||
    (c && 0 == c.indexOf("auto_")
      ? Mc(a, c.substring(5)).style
      : zd({ colourPrimary: "#000000" }))
  );
}
function zd(a) {
  var c = {};
  a && g.g.object.Ld(c, a);
  a = g.g.Ls(c.colourPrimary || "#000");
  c.Qi = a.Io;
  c.colourSecondary
    ? (a = g.g.Ls(c.colourSecondary).Io)
    : ((a = c.Qi), (a = g.g.vb.Pu("#fff", a, 0.6) || a));
  c.rr = a;
  c.colourTertiary
    ? (a = g.g.Ls(c.colourTertiary).Io)
    : ((a = c.Qi), (a = g.g.vb.Pu("#fff", a, 0.3) || a));
  c.Ph = a;
  c.Vg = c.hat || "";
  return c;
}
b.J = function () {
  this.Pv && g.g.o.removeNode(this.Pv);
  this.yv && g.g.o.removeNode(this.yv);
  this.ov && g.g.o.removeNode(this.ov);
  this.lo = null;
};
b.Ow = function () {
  var a = this.MF,
    c = this.NF,
    d = g.g.D.line([
      g.g.D.Ya(c, a / 4),
      g.g.D.Ya(2 * -c, a / 2),
      g.g.D.Ya(c, a / 4),
    ]);
  return { height: a, width: c, path: d };
};
b.Rw = function () {
  var a = this.PG,
    c = this.QG,
    d = g.g.D.curve("c", [g.g.D.Ya(30, -a), g.g.D.Ya(70, -a), g.g.D.Ya(c, 0)]);
  return { height: a, width: c, path: d };
};
b.Qw = function () {
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
  var c = this.Pq,
    d = this.Nn,
    e = a(!0),
    f = a(!1);
  return { type: this.Zz.CG, width: c, height: d, Gf: f, ep: e };
};
b.Pw = function () {
  function a(k) {
    return g.g.D.line([
      g.g.D.Ya(k * e, d),
      g.g.D.Ya(3 * k, 0),
      g.g.D.Ya(k * e, -d),
    ]);
  }
  var c = this.rG,
    d = this.cu,
    e = (c - 3) / 2,
    f = a(1),
    h = a(-1);
  return { type: this.Zz.Ol, width: c, height: d, tj: f, hD: h };
};
function kb(a, c) {
  switch (c.type) {
    case g.lb:
    case g.Sf:
      return a.lu;
    case g.Tf:
    case g.gb:
      return a.Ol;
    default:
      throw Error("Unknown connection type");
  }
}
b.ab = function (a, c, d) {
  d = this.$v(d);
  c = "blockly-renderer-style-" + c;
  this.lo = document.getElementById(c);
  var e = d.join("\n");
  this.lo
    ? (this.lo.firstChild.textContent = e)
    : ((d = document.createElement("style")),
      (d.id = c),
      (c = document.createTextNode(e)),
      d.appendChild(c),
      document.head.insertBefore(d, document.head.firstChild),
      (this.lo = d));
  a = g.g.o.M(g.g.F.Vy, {}, a);
  c = g.g.o.M(g.g.F.fz, { id: "blocklyEmbossFilter" + this.kp }, a);
  g.g.o.M(g.g.F.eF, { in: "SourceAlpha", stdDeviation: 1, result: "blur" }, c);
  d = g.g.o.M(
    g.g.F.gF,
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
  g.g.o.M(g.g.F.fF, { x: -5e3, y: -1e4, z: 2e4 }, d);
  g.g.o.M(
    g.g.F.Lt,
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    c
  );
  g.g.o.M(
    g.g.F.Lt,
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
  this.Hr = c.id;
  this.Pv = c;
  c = g.g.o.M(
    g.g.F.Nz,
    {
      id: "blocklyDisabledPattern" + this.kp,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10,
    },
    a
  );
  g.g.o.M(g.g.F.Gc, { width: 10, height: 10, fill: "#aaa" }, c);
  g.g.o.M(g.g.F.se, { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, c);
  this.sB = c.id;
  this.yv = c;
  g.m.$y &&
    ((a = g.g.o.M(
      g.g.F.fz,
      {
        id: "blocklyDebugFilter" + this.kp,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%",
      },
      a
    )),
    (c = g.g.o.M(g.g.F.bF, { result: "outBlur" }, a)),
    g.g.o.M(
      g.g.F.dF,
      { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" },
      c
    ),
    g.g.o.M(
      g.g.F.cF,
      { "flood-color": "#ff0000", "flood-opacity": 0.5, result: "outColor" },
      a
    ),
    g.g.o.M(
      g.g.F.Lt,
      { in: "outColor", in2: "outBlur", operator: "in", result: "outGlow" },
      a
    ),
    (this.ov = a));
};
b.$v = function (a) {
  return [
    a + " .blocklyText, ",
    a + " .blocklyFlyoutLabelText {",
    "font: " + this.Di + " " + this.xh + "pt " + this.Ci + ";",
    "}",
    a + " .blocklyText {",
    "fill: #fff;",
    "}",
    a + " .blocklyNonEditableText>rect,",
    a + " .blocklyEditableText>rect {",
    "fill: " + this.cz + ";",
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
    "font-family: " + this.Ci + ";",
    "font-weight: " + this.Di + ";",
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
    "fill-opacity: " + this.Bq + ";",
    "stroke: none;",
    "}",
  ];
};
g.i.zh = function (a, c, d, e) {
  var f = a ? a.u.id : void 0;
  e && e.wb() == g.G.types.ad && (f = e.Ga.id);
  g.i.zh.v.constructor.call(this, f);
  this.ub = a ? a.id : null;
  this.XC = d;
  this.RC = e;
  this.Yg = c;
};
g.g.object.X(g.i.zh, g.i.Ne);
g.i.zh.prototype.type = g.i.Bz;
g.i.zh.prototype.ya = function () {
  var a = g.i.zh.v.ya.call(this);
  a.isCursor = this.Yg;
  a.blockId = this.ub;
  a.oldNode = this.XC;
  a.newNode = this.RC;
  return a;
};
g.i.zh.prototype.ma = function (a) {
  g.i.zh.v.ma.call(this, a);
  this.Yg = a.isCursor;
  this.ub = a.blockId;
  this.XC = a.oldNode;
  this.RC = a.newNode;
};
g.C.register(g.C.ea.kc, g.i.Bz, g.i.zh);
g.m.Ah = function (a, c, d) {
  this.s = a;
  this.Uw = d;
  this.ki = null;
  this.B = c;
  this.om = null;
  a = this.Yg() ? this.B.qq : this.B.Fq;
  this.od = d.vb || a;
};
g.m.Ah.FE = "blocklyCursor";
g.m.Ah.gG = "blocklyMarker";
g.m.Ah.AF = 0.75;
b = g.m.Ah.prototype;
b.Pa = function () {
  return this.N;
};
b.ge = function () {
  return this.Uw;
};
b.Yg = function () {
  return "cursor" == this.Uw.type;
};
b.ab = function () {
  var a = this.Yg() ? g.m.Ah.FE : g.m.Ah.gG;
  this.N = g.g.o.M(g.g.F.rc, { class: a }, null);
  this.gi = g.g.o.M(g.g.F.rc, { width: this.B.tq, height: this.B.uA }, this.N);
  this.pj = g.g.o.M(
    g.g.F.Gc,
    { width: this.B.tq, height: this.B.uA, style: "display: none" },
    this.gi
  );
  this.Pk = g.g.o.M(
    g.g.F.Gc,
    { class: "blocklyVerticalMarker", rx: 10, ry: 10, style: "display: none" },
    this.gi
  );
  this.Ok = g.g.o.M(
    g.g.F.se,
    { transform: "", style: "display: none" },
    this.gi
  );
  this.ei = g.g.o.M(
    g.g.F.se,
    {
      transform: "",
      style: "display: none",
      fill: "none",
      "stroke-width": this.B.GE,
    },
    this.gi
  );
  this.Yg() &&
    ((a = {
      attributeType: "XML",
      attributeName: "fill",
      dur: "1s",
      values: this.od + ";transparent;transparent;",
      repeatCount: "indefinite",
    }),
    g.g.o.M(g.g.F.tt, a, this.pj),
    g.g.o.M(g.g.F.tt, a, this.Ok),
    (a.attributeName = "stroke"),
    g.g.o.M(g.g.F.tt, a, this.ei));
  return this.N;
};
function Ad(a, c) {
  a.Yg()
    ? (a.ki && a.ki.mi(null), c.mi(a.Pa()))
    : (a.ki && a.ki.ni(null), c.ni(a.Pa()));
  a.ki = c;
}
b.draw = function (a, c) {
  if (c) {
    this.B = this.s.Sb.W();
    var d = this.Yg() ? this.B.qq : this.B.Fq;
    this.od = this.Uw.vb || d;
    this.pj.setAttribute("fill", this.od);
    this.Pk.setAttribute("stroke", this.od);
    this.Ok.setAttribute("fill", this.od);
    this.ei.setAttribute("stroke", this.od);
    this.Yg() &&
      ((d = this.od + ";transparent;transparent;"),
      this.pj.firstChild.setAttribute("values", d),
      this.Ok.firstChild.setAttribute("values", d),
      this.ei.firstChild.setAttribute("values", d));
    d = c.Ga;
    if (c.wb() == g.G.types.qc) Bd(this, c);
    else if (c.wb() == g.G.types.Zj) Bd(this, c);
    else if (d.type == g.lb) {
      var e = c.Ga;
      d = e.Z();
      var f = e.Vk.x,
        h = e.Vk.y;
      e = g.g.D.moveTo(0, 0) + kb(this.B, e).Gf;
      this.Ok.setAttribute("d", e);
      this.Ok.setAttribute(
        "transform",
        "translate(" + f + "," + h + ")" + (this.s.L ? " scale(-1 1)" : "")
      );
      this.om = this.Ok;
      Ad(this, d);
      Cd(this);
    } else if (d.type == g.gb)
      (h = c.Ga),
        (d = h.Z()),
        (f = 0),
        (h = h.Vk.y),
        (e = E(d).width),
        this.s.L && (f = -e),
        Dd(this, f, h, e),
        Ad(this, d),
        Cd(this);
    else if (c.wb() == g.G.types.Bd) Bd(this, c);
    else if (c.wb() == g.G.types.Ec)
      (d = c.Ga),
        (f = d.Xh().width),
        (h = d.Xh().height),
        Ed(this, 0, 0, f, h),
        Ad(this, d),
        Cd(this);
    else if (c.wb() == g.G.types.ad)
      (f = c.qt),
        (d = f.x),
        (f = f.y),
        this.s.L && (d -= this.B.tq),
        Dd(this, d, f, this.B.tq),
        Ad(this, this.s),
        Cd(this);
    else if (c.wb() == g.G.types.xg) {
      d = c.Ga;
      h = E(d);
      f = h.width + this.B.rq;
      h = h.height + this.B.rq;
      var k = (e = -this.B.rq / 2),
        l = -this.B.rq / 2;
      this.s.L && (k = -(f + e));
      Ed(this, k, l, f, h);
      Ad(this, d);
      Cd(this);
    }
    d = c.Z();
    a = new g.i.zh(d, this.Yg(), a, c);
    g.i.Ia(a);
    a = this.om.childNodes[0];
    void 0 !== a && a.beginElement && a.beginElement();
  } else this.Oa();
};
function Bd(a, c) {
  c = c.Z();
  var d = c.width,
    e = c.height,
    f = e * g.m.Ah.AF,
    h = a.B.EE;
  if (c.ka) {
    var k = kb(a.B, c.ka);
    e = k;
    d =
      g.g.D.moveBy(-h, f) +
      g.g.D.qa("V", -h) +
      g.g.D.qa("H", a.B.En) +
      e.tj +
      g.g.D.qa("H", d + 2 * h) +
      g.g.D.qa("V", f);
    a.ei.setAttribute("d", d);
  } else
    c.O
      ? ((f = k = kb(a.B, c.O)),
        (d =
          g.g.D.moveBy(d, 0) +
          g.g.D.qa("h", -(d - f.width)) +
          g.g.D.qa("v", a.B.Wl) +
          f.Gf +
          g.g.D.qa("V", e) +
          g.g.D.qa("H", d)),
        a.ei.setAttribute("d", d))
      : ((d =
          g.g.D.moveBy(-h, f) +
          g.g.D.qa("V", -h) +
          g.g.D.qa("H", d + 2 * h) +
          g.g.D.qa("V", f)),
        a.ei.setAttribute("d", d));
  a.s.L && a.vo(a.ei);
  a.om = a.ei;
  Ad(a, c);
  Cd(a);
}
function Cd(a) {
  a.Oa();
  a.om.style.display = "";
}
function Dd(a, c, d, e) {
  a.pj.setAttribute("x", c);
  a.pj.setAttribute("y", d);
  a.pj.setAttribute("width", e);
  a.om = a.pj;
}
function Ed(a, c, d, e, f) {
  a.Pk.setAttribute("x", c);
  a.Pk.setAttribute("y", d);
  a.Pk.setAttribute("width", e);
  a.Pk.setAttribute("height", f);
  a.om = a.Pk;
}
b.vo = function (a) {
  a.setAttribute("transform", "scale(-1 1)");
};
b.Oa = function () {
  this.pj.style.display = "none";
  this.Pk.style.display = "none";
  this.Ok.style.display = "none";
  this.ei.style.display = "none";
};
b.J = function () {
  this.N && g.g.o.removeNode(this.N);
};
g.m.A = {
  NONE: 0,
  Ec: 1,
  lz: 2,
  pz: 4,
  tu: 8,
  Jy: 16,
  uz: 32,
  bz: 64,
  hf: 128,
  qz: 256,
  cA: 512,
  zE: 1024,
  ku: 2048,
  bu: 4096,
  vG: 8192,
  Gt: 16384,
  Xt: 32768,
  Wt: 65536,
  qu: 131072,
  pu: 262144,
  yz: 524288,
  Kq: 1048576,
  zu: 2097152,
  yt: 4194304,
  rz: 8388608,
};
g.m.A.NM = g.m.A.Xt | g.m.A.Wt;
g.m.A.VN = g.m.A.qu | g.m.A.pu;
g.m.A.gx = 16777216;
g.m.A.wb = function () {
  Object.prototype.hasOwnProperty.call(g.m.A, void 0) ||
    ((g.m.A[void 0] = g.m.A.gx), (g.m.A.gx <<= 1));
  return g.m.A[void 0];
};
g.m.A.bi = function (a) {
  return a.type & g.m.A.Ec;
};
g.m.A.Kk = function (a) {
  return a.type & g.m.A.lz;
};
g.m.A.Gm = function (a) {
  return a.type & g.m.A.pz;
};
g.m.A.Af = function (a) {
  return a.type & g.m.A.tu;
};
g.m.A.BO = function (a) {
  return a.type & g.m.A.uz;
};
g.m.A.ij = function (a) {
  return a.type & g.m.A.hf;
};
g.m.A.Oo = function (a) {
  return a.type & g.m.A.bz;
};
g.m.A.hj = function (a) {
  return a.type & g.m.A.qz;
};
g.m.A.Mk = function (a) {
  return a.type & g.m.A.cA;
};
g.m.A.Lm = function (a) {
  return a.type & g.m.A.ku;
};
g.m.A.kj = function (a) {
  return a.type & g.m.A.bu;
};
g.m.A.sJ = function (a) {
  return a.type & (g.m.A.ku | g.m.A.bu);
};
g.m.A.jj = function (a) {
  return a.type & g.m.A.Wt;
};
g.m.A.wC = function (a) {
  return a.type & g.m.A.pu;
};
g.m.A.Po = function (a) {
  return a.type & g.m.A.Xt;
};
g.m.A.CO = function (a) {
  return a.type & g.m.A.qu;
};
g.m.A.AO = function (a) {
  return a.type & g.m.A.Gt;
};
g.m.A.uC = function (a) {
  return a.type & g.m.A.yz;
};
g.m.A.EO = function (a) {
  return a.type & g.m.A.Kq;
};
g.m.A.yO = function (a) {
  return a.type & g.m.A.Jy;
};
g.m.A.hs = function (a) {
  return a.type & g.m.A.zu;
};
g.m.A.Yr = function (a) {
  return a.type & g.m.A.yt;
};
g.m.A.tJ = function (a) {
  return a.type & (g.m.A.zu | g.m.A.yt);
};
g.m.A.oJ = function (a) {
  return a.type & g.m.A.rz;
};
g.m.Hi = function (a) {
  this.height = this.width = 0;
  this.type = g.m.A.NONE;
  this.gm = this.Za = 0;
  this.B = a;
  this.Df = this.B.En;
};
g.m.Ba = function (a, c) {
  g.m.Ba.v.constructor.call(this, a);
  this.Zd = c;
  this.shape = kb(this.B, c);
  this.Jk = !!this.shape.isDynamic;
  this.type |= g.m.A.zE;
};
g.g.object.X(g.m.Ba, g.m.Hi);
g.m.ju = function (a, c) {
  g.m.ju.v.constructor.call(this, a, c);
  this.type |= g.m.A.vG;
  this.height = this.Jk ? 0 : this.shape.height;
  this.Jf = this.width = this.Jk ? 0 : this.shape.width;
  this.Re = this.B.Wl;
  this.bo = 0;
};
g.g.object.X(g.m.ju, g.m.Ba);
g.m.mu = function (a, c) {
  g.m.mu.v.constructor.call(this, a, c);
  this.type |= g.m.A.ku;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.X(g.m.mu, g.m.Ba);
g.m.du = function (a, c) {
  g.m.du.v.constructor.call(this, a, c);
  this.type |= g.m.A.bu;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.X(g.m.du, g.m.Ba);
g.m.xn = function (a, c) {
  g.m.xn.v.constructor.call(this, a, c.connection);
  this.type |= g.m.A.hf;
  this.input = c;
  this.align = c.align;
  (this.Ri = c.connection && c.connection.sa() ? c.connection.sa() : null)
    ? ((a = E(this.Ri)), (this.$n = a.width), (this.wr = a.height))
    : (this.wr = this.$n = 0);
  this.Re = this.bo = 0;
};
g.g.object.X(g.m.xn, g.m.Ba);
g.m.Fi = function (a, c) {
  g.m.Fi.v.constructor.call(this, a, c);
  this.type |= g.m.A.qz;
  this.Ri
    ? ((this.width = this.$n), (this.height = this.wr))
    : ((this.height = this.B.VE), (this.width = this.B.WE));
  this.jm = this.Jk ? this.shape.height(this.height) : this.shape.height;
  this.Ig = this.Jk ? this.shape.width(this.height) : this.shape.width;
  this.Ri || (this.width += this.Ig * (this.Jk ? 2 : 1));
  this.Re = this.Jk ? this.shape.Re(this.jm) : this.B.Wl;
  this.bo = this.Jk ? this.shape.bo(this.Ig) : 0;
};
g.g.object.X(g.m.Fi, g.m.xn);
g.m.Li = function (a, c) {
  g.m.Li.v.constructor.call(this, a, c);
  this.type |= g.m.A.cA;
  this.height = this.Ri ? this.wr + this.B.bA : this.B.XE;
  this.width = this.B.SG + this.shape.width;
};
g.g.object.X(g.m.Li, g.m.xn);
g.m.vq = function (a, c) {
  g.m.vq.v.constructor.call(this, a, c);
  this.type |= g.m.A.bz;
  this.height = this.Ri ? this.wr - this.B.Wl - this.B.kf : this.shape.height;
  this.width = this.shape.width + this.B.aF;
  this.Re = this.B.Wl;
  this.jm = this.shape.height;
  this.Ig = this.shape.width;
};
g.g.object.X(g.m.vq, g.m.xn);
g.m.re = function (a, c) {
  g.m.re.v.constructor.call(this, a);
  this.icon = c;
  this.isVisible = c.isVisible();
  this.type |= g.m.A.pz;
  a = new g.g.ue(g.re.prototype.Mq, g.re.prototype.Mq - 2);
  this.height = a.height;
  this.width = a.width;
};
g.g.object.X(g.m.re, g.m.Hi);
g.m.Ut = function (a) {
  g.m.Ut.v.constructor.call(this, a);
  this.type |= g.m.A.yz;
  this.height = this.B.Kl.height;
  this.width = this.B.Kl.width;
};
g.g.object.X(g.m.Ut, g.m.Hi);
g.m.kd = function (a, c) {
  g.m.kd.v.constructor.call(this, a);
  this.zB = c;
  this.le = c.tn;
  this.wI = c.PB();
  this.type |= g.m.A.Ec;
  a = this.zB.Xh();
  this.height = a.height;
  this.width = a.width;
};
g.g.object.X(g.m.kd, g.m.Hi);
g.m.Qt = function (a) {
  g.m.Qt.v.constructor.call(this, a);
  this.type |= g.m.A.lz;
  this.height = this.B.Sl.height;
  this.width = this.B.Sl.width;
  this.cm = this.height;
};
g.g.object.X(g.m.Qt, g.m.Hi);
g.m.Vl = function (a, c) {
  g.m.Vl.v.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.A.qu : g.m.A.Xt) | g.m.A.Gt;
  this.width = this.height = this.B.vg;
};
g.g.object.X(g.m.Vl, g.m.Hi);
g.m.Lq = function (a, c) {
  g.m.Lq.v.constructor.call(this, a);
  this.type = (c && "left" != c ? g.m.A.pu : g.m.A.Wt) | g.m.A.Gt;
  this.width = this.B.Tb;
  this.height = this.B.Tb / 2;
};
g.g.object.X(g.m.Lq, g.m.Hi);
g.m.yh = function (a, c) {
  g.m.yh.v.constructor.call(this, a);
  this.type = this.type | g.m.A.tu | g.m.A.uz;
  this.width = c;
  this.height = this.B.OG;
};
g.g.object.X(g.m.yh, g.m.Hi);
g.m.ak = function (a) {
  this.type = g.m.A.Kq;
  this.elements = [];
  this.Za = this.$c = this.pg = this.minWidth = this.minHeight = this.width = this.height = 0;
  this.fC = this.Bm = this.nw = this.Ic = this.Zi = !1;
  this.B = a;
  this.Df = this.B.En;
  this.align = null;
};
g.m.ak.prototype.measure = function () {
  throw Error("Unexpected attempt to measure a base Row.");
};
function Fd(a) {
  for (var c = a.elements.length - 1, d; (d = a.elements[c]); c--)
    if (g.m.A.ij(d)) return d;
  return null;
}
g.m.ak.prototype.ct = function () {
  return !0;
};
g.m.ak.prototype.qo = function () {
  return !0;
};
g.m.hk = function (a) {
  g.m.hk.v.constructor.call(this, a);
  this.type |= g.m.A.zu;
  this.cm = this.Mh = 0;
  this.dJ = !1;
  this.connection = null;
};
g.g.object.X(g.m.hk, g.m.ak);
g.m.hk.prototype.ow = function (a) {
  var c = (a.Vg ? "cap" === a.Vg : this.B.Zp) && !a.O && !a.ka,
    d = a.ka && a.ka.sa();
  return !!a.O || c || (d ? q(d) == a : !1);
};
g.m.hk.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.A.Af(f) ||
        (g.m.A.Kk(f) ? (d = Math.max(d, f.cm)) : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Mh = this.cm = d;
  this.pg = this.width;
};
g.m.hk.prototype.ct = function () {
  return !1;
};
g.m.hk.prototype.qo = function () {
  return !1;
};
g.m.Lj = function (a) {
  g.m.Lj.v.constructor.call(this, a);
  this.type |= g.m.A.yt;
  this.gC = !1;
  this.connection = null;
  this.qf = this.no = 0;
};
g.g.object.X(g.m.Lj, g.m.ak);
g.m.Lj.prototype.ow = function (a) {
  return !!a.O || !!q(a);
};
g.m.Lj.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.m.A.Af(f) ||
        (g.m.A.kj(f)
          ? (d = Math.max(d, f.height))
          : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.no = d;
  this.pg = this.width;
};
g.m.Lj.prototype.ct = function () {
  return !1;
};
g.m.Lj.prototype.qo = function () {
  return !1;
};
g.m.Oq = function (a, c, d) {
  g.m.Oq.v.constructor.call(this, a);
  this.type = this.type | g.m.A.tu | g.m.A.Jy;
  this.width = d;
  this.height = c;
  this.FB = !1;
  this.pg = 0;
  this.elements = [new g.m.yh(this.B, d)];
};
g.g.object.X(g.m.Oq, g.m.ak);
g.m.Oq.prototype.measure = function () {};
g.m.Jl = function (a) {
  g.m.Jl.v.constructor.call(this, a);
  this.type |= g.m.A.rz;
  this.XA = 0;
};
g.g.object.X(g.m.Jl, g.m.ak);
g.m.Jl.prototype.measure = function () {
  this.width = this.minWidth;
  this.height = this.minHeight;
  for (var a = 0, c = 0, d; (d = this.elements[c]); c++)
    (this.width += d.width),
      g.m.A.ij(d) &&
        (g.m.A.Mk(d)
          ? (a += d.$n)
          : g.m.A.Oo(d) && 0 != d.$n && (a += d.$n - d.Ig)),
      g.m.A.Af(d) || (this.height = Math.max(this.height, d.height));
  this.XA = a;
  this.pg = this.width + a;
};
g.m.Jl.prototype.qo = function () {
  return !this.Zi && !this.Ic;
};
g.m.Uf = function (a, c) {
  this.T = c;
  this.Sb = a;
  this.B = this.Sb.W();
  this.O = c.O ? new g.m.ju(this.B, c.O) : null;
  this.Hm = lb(c) && !c.isCollapsed();
  this.isCollapsed = c.isCollapsed();
  this.me = c.me();
  this.L = c.L;
  this.Ej = this.width = this.kn = this.height = 0;
  this.rows = [];
  this.pC = [];
  this.kC = [];
  this.Dc = new g.m.hk(this.B);
  this.Xb = new g.m.Lj(this.B);
  this.bt = this.Jf = 0;
};
b = g.m.Uf.prototype;
b.measure = function () {
  var a = !!this.T.ka,
    c = (this.T.Vg ? "cap" === this.T.Vg : this.B.Zp) && !this.O && !a;
  this.Dc.ow(this.T)
    ? this.Dc.elements.push(new g.m.Vl(this.B))
    : this.Dc.elements.push(new g.m.Lq(this.B));
  c
    ? ((a = new g.m.Qt(this.B)), this.Dc.elements.push(a), (this.Dc.Mh = a.cm))
    : a &&
      ((this.Dc.dJ = !0),
      (this.Dc.connection = new g.m.mu(this.B, this.T.ka)),
      this.Dc.elements.push(this.Dc.connection));
  this.T.V.length && this.T.V[0].type == g.gb && !this.T.isCollapsed()
    ? (this.Dc.minHeight = this.B.eH)
    : (this.Dc.minHeight = this.B.dH);
  this.Dc.elements.push(new g.m.Vl(this.B, "right"));
  this.rows.push(this.Dc);
  a = new g.m.Jl(this.B);
  this.pC.push(a);
  var d = mb(this.T);
  if (d.length) {
    c = 0;
    for (var e; (e = d[c]); c++) {
      var f = new g.m.re(this.B, e);
      this.isCollapsed && e.TA ? this.kC.push(f) : a.elements.push(f);
    }
  }
  e = null;
  for (c = 0; (d = this.T.V[c]); c++)
    if (d.isVisible()) {
      !e ||
        (d.type != g.gb &&
          e.type != g.gb &&
          ((d.type != g.lb && d.type != g.vh) || this.Hm)) ||
        (this.rows.push(a), (a = new g.m.Jl(this.B)), this.pC.push(a));
      for (e = 0; (f = d.ib[e]); e++) a.elements.push(new g.m.kd(this.B, f, d));
      this.EA(d, a);
      e = d;
    }
  this.isCollapsed && ((a.fC = !0), a.elements.push(new g.m.Ut(this.B)));
  (a.elements.length || a.Bm) && this.rows.push(a);
  this.Hx();
  this.rows.push(this.Xb);
  this.DA();
  a = this.rows;
  this.rows = [];
  for (c = 0; c < a.length; c++)
    if ((this.rows.push(a[c]), c != a.length - 1)) {
      d = this.rows;
      e = d.push;
      f = a[c];
      var h = a[c + 1],
        k = new g.m.Oq(this.B, this.XB(f, h), this.width - this.Jf);
      f.Ic && (k.FB = !0);
      h.Ic && (k.IO = !0);
      e.call(d, k);
    }
  for (e = d = c = a = 0; (f = this.rows[e]); e++)
    f.measure(),
      (c = Math.max(c, f.width)),
      f.Ic && (a = Math.max(a, f.width - Fd(f).width)),
      (d = Math.max(d, f.pg));
  this.Ej = a;
  this.width = c;
  for (e = 0; (f = this.rows[e]); e++) f.Ic && (f.Ej = this.Ej);
  this.kn = Math.max(c, d);
  this.O &&
    ((this.Jf = this.O.width),
    (this.width += this.O.width),
    (this.kn += this.O.width));
  this.Iu();
  this.AB();
};
b.Hx = function () {
  this.Xb.gC = !!this.T.Y;
  this.Xb.minHeight =
    this.T.V.length && this.T.V[this.T.V.length - 1].type == g.gb
      ? this.B.oE
      : this.B.pE;
  this.Xb.ow(this.T)
    ? this.Xb.elements.push(new g.m.Vl(this.B))
    : this.Xb.elements.push(new g.m.Lq(this.B));
  this.Xb.gC &&
    ((this.Xb.connection = new g.m.du(this.B, this.T.Y)),
    this.Xb.elements.push(this.Xb.connection));
  this.Xb.elements.push(new g.m.Vl(this.B, "right"));
};
b.EA = function (a, c) {
  this.Hm && a.type == g.lb
    ? (c.elements.push(new g.m.Fi(this.B, a)), (c.nw = !0))
    : a.type == g.gb
    ? (c.elements.push(new g.m.Li(this.B, a)), (c.Ic = !0))
    : a.type == g.lb
    ? (c.elements.push(new g.m.vq(this.B, a)), (c.Zi = !0))
    : a.type == g.vh &&
      ((c.minHeight = Math.max(
        c.minHeight,
        a.Z() && a.Z().Ra ? this.B.TE : this.B.Zy
      )),
      (c.Bm = !0));
  null == c.align && (c.align = a.align);
};
b.DA = function () {
  for (var a = 0, c; (c = this.rows[a]); a++) {
    var d = c.elements;
    c.elements = [];
    c.ct() && c.elements.push(new g.m.yh(this.B, this.xk(null, d[0])));
    if (d.length) {
      for (var e = 0; e < d.length - 1; e++)
        c.elements.push(d[e]),
          c.elements.push(new g.m.yh(this.B, this.xk(d[e], d[e + 1])));
      c.elements.push(d[d.length - 1]);
      c.qo() &&
        c.elements.push(new g.m.yh(this.B, this.xk(d[d.length - 1], null)));
    }
  }
};
b.xk = function (a, c) {
  if (!a && c && g.m.A.Mk(c)) return this.B.dA;
  if (a && g.m.A.ij(a) && !c) {
    if (g.m.A.Oo(a)) return this.B.vg;
    if (g.m.A.hj(a)) return this.B.Rd;
    if (g.m.A.Mk(a)) return this.B.vg;
  }
  return a && g.m.A.Po(a) && c && (g.m.A.Lm(c) || g.m.A.kj(c))
    ? c.Df
    : a && g.m.A.jj(a) && c && (g.m.A.Lm(c) || g.m.A.kj(c))
    ? c.Df - this.B.Tb
    : this.B.kf;
};
b.Iu = function () {
  for (var a = 0, c; (c = this.rows[a]); a++)
    if (c.Ic) Gd(this, c);
    else {
      var d = this.Co(c) - c.width;
      0 < d && Hd(c, d);
      g.m.A.tJ(c) && (c.pg = c.width);
    }
};
b.Co = function () {
  return this.width - this.Jf;
};
function Hd(a, c) {
  a: {
    var d = 0;
    for (var e; (e = a.elements[d]); d++)
      if (g.m.A.Af(e)) {
        d = e;
        break a;
      }
    d = null;
  }
  a: {
    e = a.elements.length - 1;
    for (var f; (f = a.elements[e]); e--)
      if (g.m.A.Af(f)) {
        e = f;
        break a;
      }
    e = null;
  }
  if (a.Zi || a.Ic) a.pg += c;
  a.align == g.st
    ? (e.width += c)
    : a.align == g.rt
    ? ((d.width += c / 2), (e.width += c / 2))
    : a.align == g.yl
    ? (d.width += c)
    : (e.width += c);
  a.width += c;
}
function Gd(a, c) {
  var d = Fd(c),
    e = c.width - d.width,
    f = a.Ej;
  e = f - e;
  0 < e && Hd(c, e);
  e = c.width;
  f = a.Co(c);
  d.width += f - e;
  d.height = Math.max(d.height, c.height);
  c.width += f - e;
  c.pg = Math.max(c.width, a.Ej + c.XA);
}
b.XB = function () {
  return this.B.kf;
};
b.NB = function (a, c) {
  return g.m.A.Af(c)
    ? a.$c + c.height / 2
    : g.m.A.Yr(a)
    ? ((a = a.$c + a.height - a.no),
      g.m.A.kj(c) ? a + c.height / 2 : a - c.height / 2)
    : g.m.A.hs(a)
    ? g.m.A.Kk(c)
      ? a.Mh - c.height / 2
      : a.Mh + c.height / 2
    : a.$c + a.height / 2;
};
function Id(a, c) {
  for (var d = c.Za, e = 0, f; (f = c.elements[e]); e++)
    g.m.A.Af(f) && (f.height = c.height),
      (f.Za = d),
      (f.gm = a.NB(c, f)),
      (d += f.width);
}
b.AB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++)
    (e.$c = c),
      (e.Za = this.Jf),
      (c += e.height),
      (a = Math.max(a, e.pg)),
      Id(this, e);
  this.O &&
    this.T.Y &&
    this.T.Y.isConnected() &&
    (a = Math.max(a, E(this.T.Y.sa()).width));
  this.kn = a + this.Jf;
  this.height = c;
  this.bt = this.Dc.Mh;
  this.Xb.qf = c - this.Xb.no;
};
g.m.Od = function (a, c) {
  this.T = a;
  this.Fa = c;
  a.bb();
  this.Xr = this.jb = "";
  this.B = c.Sb.W();
};
b = g.m.Od.prototype;
b.draw = function () {
  Jd(this);
  Kd(this);
  Ld(this);
  this.T.Gb.Yx(this.jb + "\n" + this.Xr);
  this.Fa.L && this.T.Gb.Uv();
  g.m.Tp && this.T.Rx.oI(this.T, this.Fa);
  Md(this);
};
function Md(a) {
  a.T.height = a.Fa.height;
  a.T.width = a.Fa.kn;
}
function Jd(a) {
  for (var c = 0, d; (d = a.Fa.kC[c]); c++)
    d.icon.je.setAttribute("display", "none");
}
function Kd(a) {
  a.Lv();
  for (var c = 1; c < a.Fa.rows.length - 1; c++) {
    var d = a.Fa.rows[c];
    d.fC ? a.po(d) : d.Ic ? a.Kv(d) : d.Zi ? a.Mv(d) : a.xB(d);
  }
  a.Gv();
  a.Jv();
}
b.Lv = function () {
  var a = this.Fa.Dc,
    c = a.elements,
    d = this.Fa.Dc;
  if (d.connection) {
    var e = d.Za + d.Df;
    Cc(d.connection.Zd, this.Fa.L ? -e : e, 0);
  }
  this.jb += g.g.D.moveBy(a.Za, this.Fa.bt);
  for (d = 0; (e = c[d]); d++)
    g.m.A.jj(e)
      ? (this.jb += this.B.Jn.vy)
      : g.m.A.wC(e)
      ? (this.jb += this.B.Jn.BL)
      : g.m.A.Lm(e)
      ? (this.jb += e.shape.tj)
      : g.m.A.Kk(e)
      ? (this.jb += this.B.Sl.path)
      : g.m.A.Af(e) && (this.jb += g.g.D.qa("h", e.width));
  this.jb += g.g.D.qa("v", a.height);
};
b.po = function (a) {
  this.jb += this.B.Kl.path + g.g.D.qa("v", a.height - this.B.Kl.height);
};
b.Mv = function (a) {
  var c = Fd(a);
  this.jD(a);
  var d = "function" == typeof c.shape.Gf ? c.shape.Gf(c.height) : c.shape.Gf;
  this.jb += g.g.D.qa("H", c.Za + c.width) + d + g.g.D.qa("v", a.height - c.jm);
};
b.Kv = function (a) {
  var c = Fd(a);
  this.jb +=
    g.g.D.qa("H", c.Za + c.Df + c.shape.width) +
    (c.shape.hD + g.g.D.qa("h", -(c.Df - this.B.Cq.width)) + this.B.Cq.Dx) +
    g.g.D.qa("v", a.height - 2 * this.B.Cq.height) +
    this.B.Cq.Ns +
    g.g.D.qa("H", a.Za + a.width);
  this.mD(a);
};
b.xB = function (a) {
  this.jb += g.g.D.qa("V", a.$c + a.height);
};
b.Gv = function () {
  var a = this.Fa.Xb,
    c = a.elements;
  this.lD();
  for (var d = 0, e = "", f = c.length - 1, h; (h = c[f]); f--)
    g.m.A.kj(h)
      ? (e += h.shape.hD)
      : g.m.A.Po(h)
      ? (e += g.g.D.qa("H", a.Za))
      : g.m.A.jj(h)
      ? (e += this.B.Jn.Su)
      : g.m.A.wC(h)
      ? ((e += this.B.Jn.zH), (d = this.B.Jn.cL))
      : g.m.A.Af(h) && (e += g.g.D.qa("h", -1 * h.width));
  this.jb += g.g.D.qa("V", a.qf - d);
  this.jb += e;
};
b.Jv = function () {
  var a = this.Fa.O;
  if (this.Fa.O) {
    var c = this.Fa.Jf + this.Fa.O.bo;
    Cc(this.T.O, this.Fa.L ? -c : c, this.Fa.O.Re);
  }
  a &&
    ((c = a.Re + a.height),
    (a = "function" == typeof a.shape.ep ? a.shape.ep(a.height) : a.shape.ep),
    (this.jb += g.g.D.qa("V", c) + a));
  this.jb += "z";
};
function Ld(a) {
  for (var c = 0, d; (d = a.Fa.rows[c]); c++)
    for (var e = 0, f; (f = d.elements[e]); e++)
      if (g.m.A.hj(f)) a.Iv(f);
      else if (g.m.A.Gm(f) || g.m.A.bi(f)) {
        var h = a;
        if (g.m.A.bi(f)) var k = f.zB.Pa();
        else g.m.A.Gm(f) && (k = f.icon.je);
        var l = f.gm - f.height / 2,
          m = f.Za,
          n = "";
        h.Fa.L &&
          ((m = -(m + f.width)), f.wI && ((m += f.width), (n = "scale(-1 1)")));
        g.m.A.Gm(f)
          ? (k.setAttribute("display", "block"),
            k.setAttribute("transform", "translate(" + m + "," + l + ")"),
            Wa(f.icon))
          : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        h.Fa.me && k.setAttribute("display", "none");
      }
}
b.Iv = function (a) {
  var c = a.width,
    d = a.height,
    e = a.Re,
    f = a.jm + e;
  this.Xr +=
    g.g.D.moveTo(a.Za + a.Ig, a.gm - d / 2) +
    g.g.D.qa("v", e) +
    a.shape.Gf +
    g.g.D.qa("v", d - f) +
    g.g.D.qa("h", c - a.Ig) +
    g.g.D.qa("v", -d) +
    "z";
  this.kD(a);
};
b.kD = function (a) {
  var c = a.gm - a.height / 2;
  if (a.Zd) {
    var d = a.Za + a.Ig + a.bo;
    this.Fa.L && (d *= -1);
    Cc(a.Zd, d, c + a.Re);
  }
};
b.mD = function (a) {
  var c = Fd(a);
  if (c.Zd) {
    var d = a.Za + a.Ej + c.Df;
    this.Fa.L && (d *= -1);
    Cc(c.Zd, d, a.$c);
  }
};
b.jD = function (a) {
  var c = Fd(a);
  if (c.Zd) {
    var d = a.Za + a.width;
    this.Fa.L && (d *= -1);
    Cc(c.Zd, d, a.$c);
  }
};
b.lD = function () {
  var a = this.Fa.Xb;
  if (a.connection) {
    var c = a.connection,
      d = c.Za;
    Cc(c.Zd, this.Fa.L ? -d : d, a.qf);
  }
};
g.m.Bh = function (a, c, d) {
  this.lm = d;
  this.mh = a;
  this.Pb = g.g.o.M(g.g.F.se, { class: "blocklyPath" }, this.mh);
  this.style = c;
  this.Tw = this.mo = null;
};
b = g.m.Bh.prototype;
b.Yx = function (a) {
  this.Pb.setAttribute("d", a);
};
b.Uv = function () {
  this.Pb.setAttribute("transform", "scale(-1 1)");
};
b.mi = function (a) {
  a ? (this.mh.appendChild(a), (this.mo = a)) : (this.mo = null);
};
b.ni = function (a) {
  a
    ? (this.mo ? this.mh.insertBefore(a, this.mo) : this.mh.appendChild(a),
      (this.Tw = a))
    : (this.Tw = null);
};
b.mc = function (a) {
  this.Pb.setAttribute("stroke", this.style.Ph);
  this.Pb.setAttribute("fill", this.style.Qi);
  this.WD(a.Ra);
  this.yy(!a.isEnabled() || pc(a));
};
b.Jb = function (a) {
  this.style = a;
};
function jb(a, c, d) {
  d ? g.g.o.Ha(a.mh, c) : g.g.o.ic(a.mh, c);
}
b.UD = function (a) {
  a
    ? this.Pb.setAttribute("filter", "url(#" + this.lm.Hr + ")")
    : this.Pb.setAttribute("filter", "none");
};
b.WD = function (a) {
  a &&
    (this.Pb.setAttribute("stroke", "none"),
    this.Pb.setAttribute("fill", this.style.rr));
};
b.yy = function (a) {
  jb(this, "blocklyDisabled", a);
  a && this.Pb.setAttribute("fill", "url(#" + this.lm.sB + ")");
};
g.m.Ch = function (a) {
  this.name = a;
  this.zx = this.B = null;
};
b = g.m.Ch.prototype;
b.eg = function () {
  return this.name + "-renderer";
};
b.U = function (a, c) {
  this.B = this.Mw();
  c && ((this.zx = c), g.g.object.Ld(this.B, c));
  this.B.zp(a);
  this.B.U();
};
b.ab = function (a, c) {
  this.B.ab(a, this.name + "-" + c.name, "." + this.eg() + "." + c.eg());
};
b.Mx = function (a, c) {
  var d = this.W();
  d.J();
  this.B = this.Mw();
  this.zx && g.g.object.Ld(this.B, this.zx);
  this.B.kp = d.kp;
  this.B.zp(c);
  this.B.U();
  this.ab(a, c);
};
b.J = function () {
  this.B && this.B.J();
};
b.Mw = function () {
  return new g.m.uh();
};
b.IC = function (a) {
  return new g.m.Uf(this, a);
};
b.GC = function (a, c) {
  return new g.m.Od(a, c);
};
b.HC = function (a, c) {
  return new g.m.Bh(a, c, this.B);
};
b.W = function () {
  return this.B;
};
b.Ja = function (a) {
  if (g.m.Tp && !a.Rx) {
    if (!g.m.$y)
      throw Error("Missing require for Blockly.blockRendering.Debug");
    var c = new g.m.$y(this.W());
    a.Rx = c;
  }
  c = this.IC(a);
  c.measure();
  this.GC(a, c).draw();
};
g.ua = {};
g.ua.uh = function () {
  g.ua.uh.v.constructor.call(this);
  this.Pt = !1;
  this.jd = 1;
  this.hG = 30;
  this.bA = -this.cu / 2;
};
g.g.object.X(g.ua.uh, g.m.uh);
g.ua.uh.prototype.$v = function (a) {
  return g.ua.uh.v.$v
    .call(this, a)
    .concat([
      a + " .blocklyInsertionMarker>.blocklyPathLight,",
      a + " .blocklyInsertionMarker>.blocklyPathDark {",
      "fill-opacity: " + this.Bq + ";",
      "stroke: none;",
      "}",
    ]);
};
g.ua.oz = function (a) {
  this.Fa = a;
  this.Lo = this.xa = "";
  this.ld = this.Fa.L;
  a = a.Sb;
  this.B = a.W();
  this.Xe = a.Xe;
  this.ze = this.Xe.OFFSET;
  this.yx = this.Xe.wG;
  this.Dm = this.Xe.JF;
  this.jp = this.Xe.lu;
  this.TJ = this.Xe.Ol;
  this.sL = this.Xe.Sl;
  this.zC = this.Xe.Kl;
};
g.ua.oz.prototype.po = function (a) {
  this.Fa.L &&
    (this.xa +=
      this.zC.tj + g.g.D.qa("v", a.height - this.zC.height - this.ze));
};
function Nd(a, c) {
  var d = c.Za + c.width - a.ze;
  c.FB && (a.xa += g.g.D.qa("H", d));
  a.ld &&
    ((a.xa += g.g.D.qa("H", d)),
    c.height > a.ze && (a.xa += g.g.D.qa("V", c.$c + c.height - a.ze)));
}
g.ua.Fi = function (a, c) {
  g.ua.Fi.v.constructor.call(this, a, c);
  this.Ri && ((this.width += this.B.jd), (this.height += this.B.jd));
};
g.g.object.X(g.ua.Fi, g.m.Fi);
g.ua.Li = function (a, c) {
  g.ua.Li.v.constructor.call(this, a, c);
  this.Ri && (this.height += this.B.jd);
};
g.g.object.X(g.ua.Li, g.m.Li);
g.ua.Uf = function (a, c) {
  g.ua.Uf.v.constructor.call(this, a, c);
};
g.g.object.X(g.ua.Uf, g.m.Uf);
b = g.ua.Uf.prototype;
b.Hx = function () {
  g.ua.Uf.v.Hx.call(this);
  (this.T.V.length && this.T.V[this.T.V.length - 1].type == g.gb) ||
    (this.Xb.minHeight = this.B.kf - this.B.jd);
};
b.EA = function (a, c) {
  this.Hm && a.type == g.lb
    ? (c.elements.push(new g.ua.Fi(this.B, a)), (c.nw = !0))
    : a.type == g.gb
    ? (c.elements.push(new g.ua.Li(this.B, a)), (c.Ic = !0))
    : a.type == g.lb
    ? (c.elements.push(new g.m.vq(this.B, a)), (c.Zi = !0))
    : a.type == g.vh &&
      ((c.minHeight = Math.max(c.minHeight, this.B.Zy)), (c.Bm = !0));
  this.Hm || null != c.align || (c.align = a.align);
};
b.DA = function () {
  for (var a = !1, c = 0, d; (d = this.rows[c]); c++) d.Zi && (a = !0);
  for (c = 0; (d = this.rows[c]); c++) {
    var e = d.elements;
    d.elements = [];
    d.ct() && d.elements.push(new g.m.yh(this.B, this.xk(null, e[0])));
    if (e.length) {
      for (var f = 0; f < e.length - 1; f++) {
        d.elements.push(e[f]);
        var h = this.xk(e[f], e[f + 1]);
        d.elements.push(new g.m.yh(this.B, h));
      }
      d.elements.push(e[e.length - 1]);
      d.qo() &&
        ((h = this.xk(e[e.length - 1], null)),
        a && d.Bm && (h += this.B.Pq),
        d.elements.push(new g.m.yh(this.B, h)));
    }
  }
};
b.xk = function (a, c) {
  if (!a)
    return c && g.m.A.bi(c) && c.le
      ? this.B.kf
      : c && g.m.A.hj(c)
      ? this.B.Ez
      : c && g.m.A.Mk(c)
      ? this.B.dA
      : this.B.Rd;
  if (!g.m.A.ij(a) && (!c || g.m.A.Mk(c)))
    return g.m.A.bi(a) && a.le
      ? this.B.kf
      : g.m.A.Gm(a)
      ? 2 * this.B.Rd + 1
      : g.m.A.Kk(a)
      ? this.B.vg
      : g.m.A.sJ(a)
      ? this.B.Rd
      : g.m.A.jj(a)
      ? this.B.kG
      : g.m.A.uC(a)
      ? this.B.vg
      : this.B.Rd;
  if (g.m.A.ij(a) && !c) {
    if (g.m.A.Oo(a)) return this.B.vg;
    if (g.m.A.hj(a)) return this.B.Rd;
    if (g.m.A.Mk(a)) return this.B.vg;
  }
  if (!g.m.A.ij(a) && c && g.m.A.ij(c)) {
    if (g.m.A.bi(a) && a.le) {
      if (g.m.A.hj(c) || g.m.A.Oo(c)) return this.B.MG;
    } else {
      if (g.m.A.hj(c) || g.m.A.Oo(c)) return this.B.Ez;
      if (g.m.A.Mk(c)) return this.B.Rd;
    }
    return this.B.Rd - 1;
  }
  if (g.m.A.Gm(a) && c && !g.m.A.ij(c)) return this.B.Rd;
  if (g.m.A.hj(a) && c && g.m.A.bi(c)) return c.le ? this.B.kf : this.B.Rd;
  if (g.m.A.Po(a) && c) {
    if (g.m.A.Kk(c)) return this.B.vg;
    if (g.m.A.Lm(c)) return c.Df;
    if (g.m.A.kj(c)) return (a = ((this.L ? 1 : -1) * this.B.jd) / 2), c.Df + a;
  }
  if (g.m.A.jj(a) && c) {
    if (g.m.A.Lm(c)) return c.Df - this.B.Tb;
    if (g.m.A.kj(c))
      return (a = ((this.L ? 1 : -1) * this.B.jd) / 2), c.Df - this.B.Tb + a;
  }
  return (g.m.A.bi(a) && c && g.m.A.bi(c) && a.le == c.le) || (c && g.m.A.uC(c))
    ? this.B.Rd
    : this.B.kf;
};
b.XB = function (a, c) {
  return g.m.A.hs(a) && g.m.A.Yr(c)
    ? this.B.UE
    : g.m.A.hs(a) || g.m.A.Yr(c)
    ? this.B.vg
    : a.Zi && c.Zi
    ? this.B.Rd
    : !a.Ic && c.Ic
    ? this.B.mE
    : (a.Ic && c.Ic) || (!a.Ic && c.Bm) || a.Bm
    ? this.B.Rd
    : this.B.kf;
};
b.NB = function (a, c) {
  if (g.m.A.Af(c)) return a.$c + c.height / 2;
  if (g.m.A.Yr(a))
    return (
      (a = a.$c + a.height - a.no),
      g.m.A.kj(c) ? a + c.height / 2 : a - c.height / 2
    );
  if (g.m.A.hs(a))
    return g.m.A.Kk(c) ? a.Mh - c.height / 2 : a.Mh + c.height / 2;
  var d = a.$c;
  g.m.A.bi(c) || g.m.A.Gm(c)
    ? ((d += c.height / 2),
      (a.nw || a.Ic) && c.height + this.B.eA <= a.height && (d += this.B.eA))
    : (d = g.m.A.hj(c) ? d + c.height / 2 : d + a.height / 2);
  return d;
};
b.Iu = function () {
  if (this.Hm) {
    for (
      var a = 0, c = null, d = this.rows.length - 1, e;
      (e = this.rows[d]);
      d--
    )
      (e.ex = a),
        g.m.A.oJ(e) &&
          (e.Ic && Gd(this, e),
          c && c.Ic && e.width < c.width ? (e.ex = c.width) : (a = e.width),
          (c = e));
    for (d = a = 0; (e = this.rows[d]); d++)
      e.Ic
        ? (a = this.Co(e))
        : g.m.A.Af(e)
        ? (e.width = Math.max(a, e.ex))
        : ((a = Math.max(a, e.ex) - e.width), 0 < a && Hd(e, a), (a = e.width));
  } else g.ua.Uf.v.Iu.call(this);
};
b.Co = function (a) {
  return this.Hm && a.Ic
    ? this.Ej + this.B.hG + this.Jf
    : g.ua.Uf.v.Co.call(this, a);
};
b.AB = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++) {
    e.$c = c;
    e.Za = this.Jf;
    c += e.height;
    a = Math.max(a, e.pg);
    var f = c - this.Dc.cm;
    e == this.Xb &&
      f < this.B.Bn &&
      ((f = this.B.Bn - f), (this.Xb.height += f), (c += f));
    Id(this, e);
  }
  this.O &&
    this.T.Y &&
    this.T.Y.isConnected() &&
    (a = Math.max(a, E(this.T.Y.sa()).width - this.B.jd));
  this.Xb.qf = c - this.Xb.no;
  this.kn = a + this.Jf + this.B.jd;
  this.width += this.B.jd;
  this.height = c + this.B.jd;
  this.bt = this.Dc.Mh;
};
g.ua.Od = function (a, c) {
  g.ua.Od.v.constructor.call(this, a, c);
  this.Wg = new g.ua.oz(c);
};
g.g.object.X(g.ua.Od, g.m.Od);
b = g.ua.Od.prototype;
b.draw = function () {
  Jd(this);
  Kd(this);
  Ld(this);
  var a = this.T.Gb;
  a.Yx(this.jb + "\n" + this.Xr);
  var c = this.Wg;
  a.ll.setAttribute("d", c.xa + "\n" + c.Lo);
  this.Fa.L && a.Uv();
  g.m.Tp && this.T.Rx.oI(this.T, this.Fa);
  Md(this);
};
b.Lv = function () {
  var a = this.Wg,
    c = this.Fa.Dc;
  a.xa += g.g.D.moveBy(c.Za, a.Fa.bt);
  for (var d = 0, e; (e = c.elements[d]); d++)
    g.m.A.Po(e)
      ? (a.xa += a.Xe.aA)
      : g.m.A.jj(e)
      ? (a.xa += a.yx.vy(a.ld))
      : g.m.A.Lm(e)
      ? (a.xa += a.TJ.tj)
      : g.m.A.Kk(e)
      ? (a.xa += a.sL.path(a.ld))
      : g.m.A.Af(e) &&
        0 != e.width &&
        (a.xa += g.g.D.qa("H", e.Za + e.width - a.ze));
  a.xa += g.g.D.qa("H", c.Za + c.width - a.ze);
  Nd(this.Wg, this.Fa.Dc);
  g.ua.Od.v.Lv.call(this);
};
b.po = function (a) {
  this.Wg.po(a);
  g.ua.Od.v.po.call(this, a);
};
b.Mv = function (a) {
  var c = this.Wg,
    d = Fd(a);
  if (c.ld) {
    var e = a.height - d.jm;
    c.xa +=
      g.g.D.moveTo(d.Za + d.width - c.ze, a.$c) +
      c.jp.Gf(c.ld) +
      g.g.D.qa("v", e);
  } else c.xa += g.g.D.moveTo(d.Za + d.width, a.$c) + c.jp.Gf(c.ld);
  g.ua.Od.v.Mv.call(this, a);
};
b.Kv = function (a) {
  var c = this.Wg,
    d = Fd(a);
  if (c.ld) {
    var e = a.height - 2 * c.Dm.height;
    c.xa +=
      g.g.D.moveTo(d.Za, a.$c) +
      c.Dm.Dx(c.ld) +
      g.g.D.qa("v", e) +
      c.Dm.Ns(c.ld) +
      g.g.D.lineTo(a.width - d.Za - c.Dm.width, 0);
  } else
    c.xa +=
      g.g.D.moveTo(d.Za, a.$c + a.height) +
      c.Dm.Ns(c.ld) +
      g.g.D.lineTo(a.width - d.Za - c.Dm.width, 0);
  g.ua.Od.v.Kv.call(this, a);
};
b.xB = function (a) {
  Nd(this.Wg, a);
  this.jb += g.g.D.qa("H", a.Za + a.width) + g.g.D.qa("V", a.$c + a.height);
};
b.Gv = function () {
  var a = this.Wg,
    c = this.Fa.Xb;
  if (a.ld) a.xa += g.g.D.qa("V", c.qf - a.ze);
  else {
    var d = a.Fa.Xb.elements[0];
    g.m.A.Po(d)
      ? (a.xa += g.g.D.moveTo(c.Za + a.ze, c.qf - a.ze))
      : g.m.A.jj(d) &&
        ((a.xa += g.g.D.moveTo(c.Za, c.qf)), (a.xa += a.yx.Su()));
  }
  g.ua.Od.v.Gv.call(this);
};
b.Jv = function () {
  var a = this.Wg,
    c = a.Fa.O;
  c &&
    ((c = c.Re + c.height),
    a.ld
      ? (a.xa += g.g.D.moveTo(a.Fa.Jf, c))
      : ((a.xa += g.g.D.moveTo(a.Fa.Jf + a.ze, a.Fa.Xb.qf - a.ze)),
        (a.xa += g.g.D.qa("V", c))),
    (a.xa += a.jp.ep(a.ld)));
  a.ld ||
    ((c = a.Fa.Dc),
    (a.xa = g.m.A.jj(c.elements[0])
      ? a.xa + g.g.D.qa("V", a.yx.height)
      : a.xa + g.g.D.qa("V", c.Mh + a.ze)));
  g.ua.Od.v.Jv.call(this);
};
b.Iv = function (a) {
  var c = this.Wg,
    d = c.ze,
    e = a.Za + a.Ig,
    f = a.gm - a.height / 2,
    h = a.width - a.Ig,
    k = f + d;
  if (c.ld) {
    f = a.Re - d;
    var l = a.height - (a.Re + a.jm) + d;
    c.Lo +=
      g.g.D.moveTo(e - d, k) +
      g.g.D.qa("v", f) +
      c.jp.Gf(c.ld) +
      g.g.D.qa("v", l) +
      g.g.D.qa("h", h);
  } else
    c.Lo +=
      g.g.D.moveTo(a.Za + a.width + d, k) +
      g.g.D.qa("v", a.height) +
      g.g.D.qa("h", -h) +
      g.g.D.moveTo(e, f + a.Re) +
      c.jp.Gf(c.ld);
  g.ua.Od.v.Iv.call(this, a);
};
b.kD = function (a) {
  var c = a.gm - a.height / 2;
  if (a.Zd) {
    var d = a.Za + a.Ig + this.B.jd;
    this.Fa.L && (d *= -1);
    Cc(a.Zd, d, c + a.Re + this.B.jd);
  }
};
b.mD = function (a) {
  var c = Fd(a);
  if (c.Zd) {
    var d = a.Za + a.Ej + c.Df;
    d = this.Fa.L ? -1 * d : d + this.B.jd;
    Cc(c.Zd, d, a.$c + this.B.jd);
  }
};
b.jD = function (a) {
  var c = Fd(a);
  if (c.Zd) {
    var d = a.Za + a.width + this.B.jd;
    this.Fa.L && (d *= -1);
    Cc(c.Zd, d, a.$c);
  }
};
b.lD = function () {
  var a = this.Fa.Xb;
  if (a.connection) {
    var c = a.connection,
      d = c.Za;
    Cc(c.Zd, (this.Fa.L ? -d : d) + this.B.jd / 2, a.qf + this.B.jd);
  }
};
g.ua.nz = function (a) {
  this.km = a;
  this.OFFSET = 0.5;
  this.aA = g.g.D.moveBy(this.OFFSET, this.OFFSET);
};
b = g.ua.nz.prototype;
b.U = function () {
  this.JF = Od(this);
  this.wG = Pd(this);
  this.lu = this.Qw();
  this.Ol = this.Pw();
  this.Kl = this.Ow();
  this.Sl = this.Rw();
};
function Od(a) {
  var c = a.km.Tb;
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
    Dx: function (k) {
      return k ? e : "";
    },
    Ns: function (k) {
      return k ? f : h;
    },
  };
}
function Pd(a) {
  var c = a.km.Tb;
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
    vy: function (l) {
      return l ? e : f;
    },
    Su: function () {
      return k;
    },
  };
}
b.Qw = function () {
  var a = this.km.Pq,
    c = this.km.Nn,
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
    ep: function (k) {
      return k ? d : f;
    },
    Gf: function (k) {
      return k ? e : h;
    },
  };
};
b.Pw = function () {
  return { tj: g.g.D.qa("h", this.OFFSET) + this.km.Ol.tj };
};
b.Ow = function () {
  return {
    tj:
      g.g.D.lineTo(5.1, 2.6) +
      g.g.D.moveBy(-10.2, 6.8) +
      g.g.D.lineTo(5.1, 2.6),
    height: 12,
    width: 10.2,
  };
};
b.Rw = function () {
  var a = this.km.Sl.height,
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
g.ua.Bh = function (a, c, d) {
  this.lm = d;
  this.mh = a;
  this.Jp = g.g.o.M(
    g.g.F.se,
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.mh
  );
  this.Pb = g.g.o.M(g.g.F.se, { class: "blocklyPath" }, this.mh);
  this.ll = g.g.o.M(g.g.F.se, { class: "blocklyPathLight" }, this.mh);
  this.bv = "#000000";
  this.style = c;
};
g.g.object.X(g.ua.Bh, g.m.Bh);
b = g.ua.Bh.prototype;
b.Yx = function (a) {
  this.Pb.setAttribute("d", a);
  this.Jp.setAttribute("d", a);
};
b.Uv = function () {
  this.Pb.setAttribute("transform", "scale(-1 1)");
  this.ll.setAttribute("transform", "scale(-1 1)");
  this.Jp.setAttribute("transform", "translate(1,1) scale(-1 1)");
};
b.mc = function (a) {
  this.ll.style.display = "";
  this.Jp.style.display = "";
  this.ll.setAttribute("stroke", this.style.Ph);
  this.Jp.setAttribute("fill", this.bv);
  g.ua.Bh.v.mc.call(this, a);
  this.Pb.setAttribute("stroke", "none");
};
b.Jb = function (a) {
  this.style = a;
  this.bv = g.g.vb.Pu("#000", this.style.Qi, 0.2) || this.bv;
};
b.UD = function (a) {
  a
    ? (this.Pb.setAttribute("filter", "url(#" + this.lm.Hr + ")"),
      (this.ll.style.display = "none"))
    : (this.Pb.setAttribute("filter", "none"),
      (this.ll.style.display = "inline"));
};
b.WD = function (a) {
  a &&
    ((this.ll.style.display = "none"),
    this.Jp.setAttribute("fill", this.style.rr),
    this.Pb.setAttribute("stroke", "none"),
    this.Pb.setAttribute("fill", this.style.rr));
};
b.yy = function (a) {
  g.ua.Bh.v.yy.call(this, a);
  a && this.Pb.setAttribute("stroke", "none");
};
g.ua.Ch = function (a) {
  g.ua.Ch.v.constructor.call(this, a);
  this.Xe = null;
};
g.g.object.X(g.ua.Ch, g.m.Ch);
b = g.ua.Ch.prototype;
b.U = function (a, c) {
  g.ua.Ch.v.U.call(this, a, c);
  this.Xe = new g.ua.nz(this.W());
  this.Xe.U();
};
b.Mx = function (a, c) {
  g.ua.Ch.v.Mx.call(this, a, c);
  this.Xe.U();
};
b.Mw = function () {
  return new g.ua.uh();
};
b.IC = function (a) {
  return new g.ua.Uf(this, a);
};
b.GC = function (a, c) {
  return new g.ua.Od(a, c);
};
b.HC = function (a, c) {
  return new g.ua.Bh(a, c, this.W());
};
g.m.register("geras", g.ua.Ch);
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
g.h.LOOPS_HUE = "120";
g.h.COLOUR_HUE = "20";
var BlocklyStorage = {},
  Qd = null,
  Rd = null,
  Sd = null;
function Td() {
  var a = Qd();
  Ud("/storage", "xml=" + encodeURIComponent(a), Vd);
}
var Wd = {};
function Ud(a, c, d, e, f) {
  Wd[a] && Wd[a].abort();
  Wd[a] = new XMLHttpRequest();
  Wd[a].onload = function () {
    200 === this.status
      ? d && d.call(this)
      : e
      ? e.call(this)
      : Xd(O("Games_httpRequestError") + "\nXHR status: " + this.status);
    Wd[a] = null;
  };
  f = f || "POST";
  Wd[a].open(f, a);
  "POST" === f &&
    Wd[a].setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
  Wd[a].send(c);
}
function Vd() {
  window.location.hash = this.responseText.trim();
  Xd(O("Games_linkAlert").replace("%1", window.location.href));
  Sd = Qd();
}
function Yd() {
  var a = this.responseText.trim();
  a.length
    ? Rd(a)
    : Xd(O("Games_hashError").replace("%1", window.location.hash));
  Sd = Qd();
}
function Xd(a) {
  if ("object" === typeof P) {
    var c = document.getElementById("linkButton");
    P.ID(c, a);
  } else alert(a);
}
var A = null,
  Zd = "",
  $d = "";
function ae() {
  ud();
  var a = document.getElementById("linkButton");
  a && (pd ? (a.style.display = "none") : ((Qd = be), (Rd = ce), yd(a, Td)));
  (a = document.getElementById("languageMenu")) &&
    a.addEventListener("change", de, !0);
}
function ee() {
  var a =
      10 == N
        ? '<xml><block type="turtle_move" x="70" y="70"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block></xml>'
        : '<xml><block type="turtle_move_internal" x="70" y="70"><field name="VALUE">100</field></block></xml>',
    c = 10 != N || fe;
  if (!pd && 1 < window.location.hash.length)
    Ud(
      "/storage",
      "key=" + encodeURIComponent(window.location.hash.substring(1)),
      Yd
    );
  else {
    var d = null;
    try {
      d = window.sessionStorage.FC;
    } catch (h) {}
    d && delete window.sessionStorage.FC;
    var e = vd(N),
      f = c && vd(N - 1);
    f && "function" == typeof c && (f = c(f));
    (a = d || e || f || a) && ce(a);
  }
}
function ce(a) {
  a = g.S.Ee(a);
  A.clear();
  g.S.Ui(a, A);
  a = A;
  a.ql.length = 0;
  a.lp.length = 0;
  g.i.KH();
}
function be() {
  var a = g.S.PL();
  if (1 == A.dc(!1).length && a.querySelector) {
    var c = a.querySelector("block");
    c && (c.removeAttribute("x"), c.removeAttribute("y"));
  }
  return g.S.ee(a);
}
function ge() {
  "object" == typeof BlocklyStorage &&
    null !== Sd &&
    Sd != be() &&
    ((window.location.hash = ""), (Sd = null));
}
function he(a) {
  var c = document.getElementById("toolbox");
  c && (a.toolbox = c);
  a.media = "third-party/blockly/media/";
  a.oneBasedIndex = !1;
  A = g.fj("blockly", a);
  D(A, ge);
}
function ie() {
  window.location = (pd ? "index.html" : "./") + "?lang=" + nd;
}
function de() {
  window.sessionStorage && (window.sessionStorage.FC = be());
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
function je() {
  10 > N
    ? (window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        nd +
        "&level=" +
        (N + 1))
    : ie();
}
function ke(a, c) {
  a = document.getElementById(a);
  a.firstChild ||
    ((a = g.fj(a, { rtl: -1 != md.indexOf(nd), readOnly: !0 })),
    "string" != typeof c && (c = c.join("")),
    g.S.Ui(g.S.Ee(c), a));
}
function le(a) {
  a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
  return a.replace(/\s+$/, "");
}
function me(a) {
  if (
    ("click" == a.type && "touchend" == ne && oe + 2e3 > Date.now()) ||
    (ne == a.type && oe + 400 > Date.now())
  )
    return a.preventDefault(), a.stopPropagation(), !0;
  ne = a.type;
  oe = Date.now();
  return !1;
}
var ne = null,
  oe = 0;
function pe() {
  setTimeout(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/JS-Interpreter/compressed.js";
    document.head.appendChild(a);
  }, 1);
}
function qe() {
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
var P = {
  gj: !1,
  pB: null,
  Br: null,
  jl: function (a, c, d, e, f, h) {
    function k() {
      P.gj &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    P.gj && P.ye(!1);
    g.Qg() && g.Jc(!0);
    P.gj = !0;
    P.pB = c;
    P.Br = h;
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
      (P.uv = g.Yd(e, "mousedown", null, P.cI)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    d && c ? (P.ns(c, !1, 0.2), P.ns(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  qB: 0,
  rB: 0,
  cI: function (a) {
    P.xv();
    if (!g.g.Lk(a)) {
      var c = document.getElementById("dialog");
      P.qB = c.offsetLeft - a.clientX;
      P.rB = c.offsetTop - a.clientY;
      P.wv = g.Yd(document, "mouseup", null, P.xv);
      P.vv = g.Yd(document, "mousemove", null, P.dI);
      a.stopPropagation();
    }
  },
  dI: function (a) {
    var c = document.getElementById("dialog"),
      d = P.qB + a.clientX;
    a = P.rB + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - c.offsetHeight);
    d = Math.max(d, 0);
    d = Math.min(d, window.innerWidth - c.offsetWidth);
    c.style.left = d + "px";
    c.style.top = a + "px";
  },
  xv: function () {
    P.wv && (g.Na(P.wv), (P.wv = null));
    P.vv && (g.Na(P.vv), (P.vv = null));
  },
  ye: function (a) {
    function c() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (P.gj) {
      P.xv();
      P.uv && (g.Na(P.uv), (P.uv = null));
      P.gj = !1;
      P.Br && P.Br();
      P.Br = null;
      var d = !1 === a ? null : P.pB;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      d && a ? (P.ns(a, !1, 0.8), P.ns(d, !0, 0.2), setTimeout(c, 175)) : c();
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
  ns: function (a, c, d) {
    function e() {
      f.style.width = h.width + "px";
      f.style.height = h.height + "px";
      f.style.left = h.x + "px";
      f.style.top = h.y + "px";
      f.style.opacity = d;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        h = P.AI(a);
      c
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  AI: function (a) {
    var c = g.g.style.yk(a);
    c = { x: c.x, y: c.y };
    a.getBBox
      ? ((a = a.getBBox()), (c.height = a.height), (c.width = a.width))
      : ((c.height = a.offsetHeight), (c.width = a.offsetWidth));
    return c;
  },
  ID: function (a, c) {
    var d = document.getElementById("containerStorage");
    d.textContent = "";
    c = c.split("\n");
    for (var e = 0; e < c.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(c[e]));
      d.appendChild(f);
    }
    d = document.getElementById("dialogStorage");
    P.jl(d, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, P.oy);
    P.ky();
  },
  AA: function () {
    if (!vd(N))
      if (P.gj || A.Kc()) setTimeout(P.AA, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          c = document.getElementById("abortCancel");
        c.addEventListener("click", P.ye, !0);
        c.addEventListener("touchend", P.ye, !0);
        c = document.getElementById("abortOk");
        c.addEventListener("click", ie, !0);
        c.addEventListener("touchend", ie, !0);
        P.jl(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function () {
            document.body.removeEventListener("keydown", P.zA, !0);
          }
        );
        document.body.addEventListener("keydown", P.zA, !0);
      }
  },
  OH: function () {
    var a = document.getElementById("dialogDone");
    if (A) {
      var c = document.getElementById("dialogLinesText");
      c.textContent = "";
      var d = $d;
      d = le(d);
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
    c.addEventListener("click", P.ye, !0);
    c.addEventListener("touchend", P.ye, !0);
    c = document.getElementById("doneOk");
    c.addEventListener("click", je, !0);
    c.addEventListener("touchend", je, !0);
    P.jl(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function () {
        document.body.removeEventListener("keydown", P.WA, !0);
      }
    );
    document.body.addEventListener("keydown", P.WA, !0);
    document.getElementById("dialogDoneText").textContent = d;
  },
  oB: function (a) {
    !P.gj ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (P.ye(!0), a.stopPropagation(), a.preventDefault());
  },
  ky: function () {
    document.body.addEventListener("keydown", P.oB, !0);
  },
  oy: function () {
    document.body.removeEventListener("keydown", P.oB, !0);
  },
  WA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      P.ye(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && je();
  },
  zA: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      P.ye(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && ie();
  },
};
window.BlocklyDialogs = P;
P.hideDialog = P.ye;
function re() {
  document.getElementById("galleryXml").value = be();
  var a = document.getElementById("galleryDialog");
  if (!se) {
    var c = document.getElementById("galleryCancel");
    c.addEventListener("click", P.ye, !0);
    c.addEventListener("touchend", P.ye, !0);
    c = document.getElementById("galleryOk");
    c.addEventListener("click", te, !0);
    c.addEventListener("touchend", te, !0);
    se = !0;
  }
  c = document.getElementById("submitButton");
  P.jl(a, c, !0, !0, { width: "40%", left: "30%", top: "3em" }, function () {
    document.body.removeEventListener("keydown", ue, !0);
  });
  document.body.addEventListener("keydown", ue, !0);
  setTimeout(function () {
    document.getElementById("galleryTitle").focus();
  }, 250);
}
var se;
function ue(a) {
  27 == a.keyCode ? P.ye(!0) : 13 == a.keyCode && te();
}
function ve(a, c) {
  for (var d = [], e = 0, f; (f = a.elements[e]); e++)
    f.name &&
      d.push(encodeURIComponent(f.name) + "=" + encodeURIComponent(f.value));
  Ud(a.action, d.join("&"), c, void 0, void 0);
}
function te() {
  var a = document.getElementById("galleryTitle");
  a.value.trim()
    ? ((a = document.getElementById("galleryForm")),
      ve(a, function () {
        P.ID(null, O("Games_submitted"));
      }),
      P.ye(!0))
    : ((a.value = ""), a.focus());
}
function we(a) {
  this.QF = 23;
  this.Ll = 18;
  this.Vt = 132;
  this.ek = 20;
  this.sb = 0.5;
  this.NA = void 0;
  this.Lu = [];
  g.g.o.M("line", { class: "sliderTrack", x1: 10, y1: 35, x2: 140, y2: 35 }, a);
  this.CL = g.g.o.M(
    "rect",
    {
      style: "opacity: 0",
      x: 10 - this.ek,
      y: 35 - this.ek,
      width: 130 + 2 * this.ek,
      height: 2 * this.ek,
      rx: this.ek,
      ry: this.ek,
    },
    a
  );
  this.BC = g.g.o.M(
    "path",
    { class: "sliderKnob", d: "m 0,0 l -8,8 v 12 h 16 v -12 z" },
    a
  );
  this.Bw = g.g.o.M("circle", { style: "opacity: 0", r: this.ek, cy: 35 }, a);
  for (this.setValue(0.5); a && "svg" != a.nodeName.toLowerCase(); )
    a = a.parentNode;
  this.hb = a;
  xe(this.Bw, "mousedown", this, this.AC);
  xe(this.Bw, "touchstart", this, this.AC);
  xe(this.CL, "mousedown", this, this.rK);
  xe(this.hb, "mouseup", null, ye);
  xe(this.hb, "touchend", null, ye);
  xe(this.hb, "mousemove", null, ze);
  xe(this.hb, "touchmove", null, ze);
  xe(document, "mouseover", null, Ae);
}
var Be = null,
  Ce = 0,
  De = 0;
we.prototype.AC = function (a) {
  if ("touchstart" == a.type) {
    if (1 != a.changedTouches.length) return;
    Ee(a);
  }
  Be = this;
  Ce = Fe(this, a).x;
  De = 0;
  var c = this.BC.getAttribute("transform");
  c && (c = c.match(/translate\(\s*([-\d.]+)/)) && (De = Number(c[1]));
  a.preventDefault();
};
function ye() {
  Be = null;
}
function Ae(a) {
  if (Be) {
    a = a.target;
    do if (a == Be.hb) return;
    while ((a = a.parentNode));
    Be = null;
  }
}
function ze(a) {
  var c = Be;
  if (c) {
    if ("touchmove" == a.type) {
      if (1 != a.changedTouches.length) return;
      Ee(a);
    }
    a = Fe(c, a).x - Ce + De;
    c.setValue((a - c.Ll) / (c.Vt - c.Ll));
  }
}
we.prototype.rK = function (a) {
  if ("touchstart" == a.type) {
    if (1 != a.changedTouches.length) return;
    Ee(a);
  }
  a = Fe(this, a).x;
  Ge(this, (a - this.Ll) / (this.Vt - this.Ll));
};
we.prototype.getValue = function () {
  return this.sb;
};
function Ge(a, c) {
  function d(h) {
    return function () {
      a.setValue((h * (c - e)) / 9 + e);
    };
  }
  for (; a.Lu.length; ) clearTimeout(a.Lu.pop());
  for (var e = a.getValue(), f = 0; 10 > f; f++)
    a.Lu.push(setTimeout(d(f), (200 * f) / 10));
}
we.prototype.setValue = function (a) {
  this.sb = g.g.rd.hm(a, 0, 1);
  a = this.Ll + (this.Vt - this.Ll) * this.sb;
  this.BC.setAttribute("transform", "translate(" + a + "," + this.QF + ")");
  this.Bw.setAttribute("cx", a);
  this.NA && this.NA(this.sb);
};
function Fe(a, c) {
  var d = a.hb.createSVGPoint();
  d.x = c.clientX;
  d.y = c.clientY;
  a = a.hb.getScreenCTM().inverse();
  return d.matrixTransform(a);
}
function xe(a, c, d, e) {
  a.addEventListener(
    c,
    function (f) {
      e.apply(d, arguments);
    },
    !1
  );
}
function Ee(a) {
  var c = a.changedTouches[0];
  a.clientX = c.clientX;
  a.clientY = c.clientY;
}
var He, Q, Ie, R, Je, Ke, Le, Me;
function Ne() {
  function a(d) {
    for (var e = 0; 5 > e; e++) S(d), T(144);
  }
  switch (N) {
    case 1:
      for (var c = 0; 4 > c; c++) S(100), T(90);
      break;
    case 2:
      for (c = 0; 5 > c; c++) S(100), T(72);
      break;
    case 3:
      U("#ffff00");
      a(100);
      break;
    case 4:
      U("#ffff00");
      a(50);
      V(!1);
      S(150);
      V(!0);
      S(20);
      break;
    case 5:
      U("#ffff00");
      for (c = 0; 4 > c; c++) V(!1), S(150), T(90), V(!0), a(50);
      break;
    case 6:
      U("#ffff00");
      for (c = 0; 3 > c; c++) V(!1), S(150), T(120), V(!0), a(50);
      V(!1);
      T(-90);
      S(100);
      V(!0);
      U("#ffffff");
      S(50);
      break;
    case 7:
      U("#ffff00");
      for (c = 0; 3 > c; c++) V(!1), S(150), T(120), V(!0), a(50);
      V(!1);
      T(-90);
      S(100);
      V(!0);
      U("#ffffff");
      for (c = 0; 4 > c; c++) S(50), S(-50), T(45);
      break;
    case 8:
      U("#ffff00");
      for (c = 0; 3 > c; c++) V(!1), S(150), T(120), V(!0), a(50);
      V(!1);
      T(-90);
      S(100);
      V(!0);
      U("#ffffff");
      for (c = 0; 360 > c; c++) S(50), S(-50), T(1);
      break;
    case 9:
      U("#ffff00");
      for (c = 0; 3 > c; c++) V(!1), S(150), T(120), V(!0), a(50);
      V(!1);
      T(-90);
      S(100);
      V(!0);
      U("#ffffff");
      for (c = 0; 360 > c; c++) S(50), S(-50), T(1);
      T(120);
      S(20);
      U("#000000");
      for (c = 0; 360 > c; c++) S(50), S(-50), T(1);
  }
}
function Oe(a) {
  if (10 == N) return 1 < B(A).length;
  console.log("Pixel errors: " + a);
  if (a > (9 == N ? 600 : 100)) return !1;
  a = B(A).length;
  return (2 >= N && 3 < a) || (3 == N && 4 < a) || (5 == N && 10 < a)
    ? ((a = document.getElementById("helpUseLoop")),
      P.jl(a, null, !1, !0, { width: "30%", left: "35%", top: "12em" }, P.oy),
      P.ky(),
      !1)
    : !0;
}
g.R.vb = {};
g.ba = {};
g.ba.KE = {};
g.ba.KE.Hl = 20;
g.Ti([
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
g.Da = function (a, c, d) {
  "function" != typeof a && g.Da.YD(a);
  this.Rk = a;
  this.py = this.Ix = this.Nr = null;
  a = this.Rk;
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
      f = g.g.yb.ey(e);
      h = g.g.yb.LH(e, f);
      var k = g.g.yb.MH(e, f);
      (!h && !k) ||
        f <= h + k ||
        (h && (this.Ix = e[0].substring(0, h - 1)),
        k && (this.py = e[0].substr(1 - k)),
        (this.Rk = g.Da.vH(a, h, k)));
    }
  }
  this.Vm = this.getOptions(!1)[0];
  g.Da.v.constructor.call(this, this.Vm[1], c, d);
  this.cn = this.pf = this.ke = this.fd = this.up = null;
};
g.g.object.X(g.Da, g.kd);
g.Da.ma = function (a) {
  return new g.Da(a.options, void 0, a);
};
g.Da.prototype.ck = !0;
g.Da.ZL = 25;
g.Da.TM = 0.45;
g.Da.GF = 5;
g.Da.HF = 2 * g.Da.GF;
g.Da.Hy = g.g.userAgent.pn ? "\u25bc" : "\u25be";
b = g.Da.prototype;
b.pq = "default";
b.$h = function () {
  this.gy() ? Lb(this) : (this.nr = this.I.Pa());
  Mb(this);
  this.ke = g.g.o.M(g.g.F.Ei, {}, this.fe);
  this.W().lF
    ? ((this.cn = g.g.o.M(
        g.g.F.Ei,
        { height: this.W().un + "px", width: this.W().un + "px" },
        this.fe
      )),
      this.cn.setAttributeNS(g.g.o.nf, "xlink:href", this.W().mF))
    : ((this.pf = g.g.o.M(g.g.F.iA, {}, this.Pc)),
      this.pf.appendChild(
        document.createTextNode(this.I.L ? g.Da.Hy + " " : " " + g.Da.Hy)
      ),
      this.I.L
        ? this.Pc.insertBefore(this.pf, this.pi)
        : this.Pc.appendChild(this.pf));
  this.Db && g.g.o.Ha(this.Db, "blocklyDropdownRect");
};
b.gy = function () {
  return !this.W().Nt || (this.W().Nt && !this.I.Ra);
};
b.lg = function (a) {
  this.fd = this.Nv();
  this.fd.wx =
    a && "number" === typeof a.clientX
      ? new g.g.aa(a.clientX, a.clientY)
      : null;
  this.fd.Ja(g.H.KB());
  g.g.o.Ha(this.fd.Mb, "blocklyDropdownMenu");
  if (this.W().kF) {
    a = this.I.Ra ? this.I.getParent().aw() : this.I.aw();
    var c = this.I.Ra ? this.I.getParent().style.Ph : this.I.style.Ph;
    g.H.vd(a, c);
  }
  g.H.BD(this, this.Ov.bind(this));
  this.fd.focus();
  this.up && this.fd.kg(this.up);
  this.mc();
};
b.Nv = function () {
  var a = new g.$t();
  a.pe(g.g.$.Vf.UF);
  var c = this.getOptions(!1);
  this.up = null;
  for (var d = 0; d < c.length; d++) {
    var e = c[d][0],
      f = c[d][1];
    if ("object" == typeof e) {
      var h = new Image(e.width, e.height);
      h.src = e.src;
      h.alt = e.alt || "";
      e = h;
    }
    e = new g.au(e, f);
    e.pe(g.g.$.Vf.tG);
    e.Vx = this.I.L;
    e.Zu = !0;
    a.Bf.push(e);
    e.$u = f == this.sb;
    f == this.sb && (this.up = e);
    vc(e, this.XI, this);
  }
  return a;
};
b.Ov = function () {
  this.fd && this.fd.J();
  this.up = this.fd = null;
  this.mc();
};
b.XI = function (a) {
  g.H.Cm(this, !0);
  this.cD(a);
};
b.cD = function (a) {
  this.setValue(a.getValue());
};
g.Da.vH = function (a, c, d) {
  for (var e = [], f = 0; f < a.length; f++) {
    var h = a[f][0],
      k = a[f][1];
    h = h.substring(c, h.length - d);
    e[f] = [h, k];
  }
  return e;
};
b = g.Da.prototype;
b.getOptions = function (a) {
  return "function" == typeof this.Rk
    ? ((this.Nr && a) || ((this.Nr = this.Rk.call(this)), g.Da.YD(this.Nr)),
      this.Nr)
    : this.Rk;
};
b.Uh = function (a) {
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
b.cg = function (a) {
  g.Da.v.cg.call(this, a);
  a = this.getOptions(!0);
  for (var c = 0, d; (d = a[c]); c++) d[1] == this.sb && (this.Vm = d);
};
b.mc = function () {
  this.Db &&
    (this.Db.setAttribute("stroke", this.I.style.Ph),
    this.fd
      ? this.Db.setAttribute("fill", this.I.style.Ph)
      : this.Db.setAttribute("fill", "transparent"));
  this.I &&
    this.pf &&
    (this.pf.style.fill = this.I.Ra ? this.I.style.rr : this.I.style.Qi);
};
b.cl = function () {
  this.pi.nodeValue = "";
  this.ke.style.display = "none";
  var a = this.Vm && this.Vm[0];
  if (a && "object" == typeof a) {
    this.ke.style.display = "";
    this.ke.setAttributeNS(g.g.o.nf, "xlink:href", a.src);
    this.ke.setAttribute("height", a.height);
    this.ke.setAttribute("width", a.width);
    var c = Number(a.height);
    a = Number(a.width);
    var d = !!this.Db,
      e = Math.max(d ? this.W().ez : 0, c + g.Da.HF);
    d = d ? this.W().wh : 0;
    var f = this.cn
      ? Pe(this, a + d, e / 2 - this.W().un / 2)
      : g.g.o.cw(this.pf, this.W().xh, this.W().Di, this.W().Ci);
    this.Nc.width = a + f + 2 * d;
    this.Nc.height = e;
    var h = 0;
    this.I.L
      ? this.ke.setAttribute("x", d + f)
      : ((h = a + f),
        this.Pc.setAttribute("text-anchor", "end"),
        this.ke.setAttribute("x", d));
    this.ke.setAttribute("y", e / 2 - c / 2);
    Ob(this, h + d, a + f);
  } else
    (this.pi.nodeValue = this.vm()),
      g.g.o.Ha(this.Pc, "blocklyDropdownText"),
      this.Pc.setAttribute("text-anchor", "start"),
      (e = !!this.Db),
      (c = Math.max(e ? this.W().ez : 0, this.W().Rj)),
      (a = g.g.o.cw(this.Pc, this.W().xh, this.W().Di, this.W().Ci)),
      (e = e ? this.W().wh : 0),
      (d = 0),
      this.cn && (d = Pe(this, a + e, c / 2 - this.W().un / 2)),
      (this.Nc.width = a + d + 2 * e),
      (this.Nc.height = c),
      Ob(this, e, a);
  Pb(this);
};
function Pe(a, c, d) {
  if (!a.cn) return 0;
  var e = a.Db ? a.W().wh : 0,
    f = a.W().nF,
    h = a.W().un;
  a.cn.setAttribute(
    "transform",
    "translate(" + (a.I.L ? e : c + f) + "," + d + ")"
  );
  return h + f;
}
b.Tr = function () {
  if (!this.Vm) return null;
  var a = this.Vm[0];
  return "object" == typeof a ? a.alt : a;
};
g.Da.YD = function (a) {
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
g.Da.prototype.Yb = function (a) {
  if (this.fd)
    switch (a.name) {
      case g.navigation.qb.Bd:
        return tc(this.fd), !0;
      case g.navigation.qb.Ad:
        return (a = this.fd), uc(a, a.Bf.indexOf(a.cj), 1), !0;
      default:
        return !1;
    }
  return g.Da.v.Yb.call(this, a);
};
g.Ve.register("field_dropdown", g.Da);
g.Ac = function (a) {
  g.Ac.v.constructor.call(this, null);
  this.rD = a;
};
g.g.object.X(g.Ac, g.re);
b = g.Ac.prototype;
b.ln = 0;
b.Wp = 0;
b.Hv = function (a) {
  g.g.o.M(
    g.g.F.Gc,
    { class: "blocklyIconShape", rx: "4", ry: "4", height: "16", width: "16" },
    a
  );
  g.g.o.M(
    g.g.F.se,
    {
      class: "blocklyIconSymbol",
      d:
        "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z",
    },
    a
  );
  g.g.o.M(
    g.g.F.Ct,
    { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" },
    a
  );
};
b.qw = function (a) {
  this.T.le() && g.re.prototype.qw.call(this, a);
};
b.jv = function () {
  this.Ip = g.g.o.M(g.g.F.dk, { x: g.va.zd, y: g.va.zd }, null);
  if (this.rD.length)
    for (
      var a = g.g.xml.createElement("xml"), c = 0, d;
      (d = this.rD[c]);
      c++
    ) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", d);
      a.appendChild(e);
    }
  else a = null;
  c = new g.Td({
    disable: !1,
    parentWorkspace: this.T.u,
    media: this.T.u.options.uj,
    rtl: this.T.L,
    horizontalLayout: !1,
    renderer: this.T.u.options.pp,
    rendererOverrides: this.T.u.options.qp,
  });
  c.La = this.T.L ? g.g.za.Ud.$j : g.g.za.Ud.Wj;
  if ((d = !!a)) (c.ah = g.g.za.fv(a)), (c.ed = this.LI.bind(this));
  this.s = new g.Cb(c);
  this.s.Qo = !0;
  D(this.s, g.i.fI);
  a = d ? Zc(this.s, g.g.F.rc) : null;
  c = this.s.ab("blocklyMutatorBackground");
  a && c.insertBefore(a, this.s.Hb);
  this.Ip.appendChild(c);
  return this.Ip;
};
b.yi = function () {
  g.Ac.v.yi.call(this);
  this.T.Ub ||
    (this.T.le()
      ? this.je && g.g.o.ic(this.je, "blocklyIconGroupReadonly")
      : (this.Ob(!1),
        this.je && g.g.o.Ha(this.je, "blocklyIconGroupReadonly")));
};
function Se(a) {
  var c = 2 * g.va.zd,
    d = a.s.Hb.getBBox(),
    e = d.width + d.x,
    f = d.height + 3 * c,
    h = a.s.oc();
  if (h) {
    var k = h.Qr();
    f = Math.max(f, k.$d + 20);
    e += h.Ug();
  }
  a.T.L && (e = -d.x);
  e += 3 * c;
  if (Math.abs(a.ln - e) > c || Math.abs(a.Wp - f) > c)
    (a.ln = e),
      (a.Wp = f),
      a.nc.vp(e + c, f + c),
      a.Ip.setAttribute("width", a.ln),
      a.Ip.setAttribute("height", a.Wp);
  a.T.L && a.s.Hb.setAttribute("transform", "translate(" + a.ln + ",0)");
  a.s.resize();
}
b.VJ = function () {
  this.s && Wc(this.s);
};
b.Ob = function (a) {
  if (a != this.isVisible())
    if ((g.i.Ia(new g.i.Mf(this.T, a, "mutator")), a)) {
      this.nc = new g.va(
        this.T.u,
        this.jv(),
        this.T.Gb.Pb,
        this.dj,
        null,
        null
      );
      Ra(this.nc, this.T.id);
      Ta(this.nc, this.VJ.bind(this));
      var c = this.s.options.ah;
      a = this.s.oc();
      c && (a.U(this.s), a.show(c));
      this.jh = this.T.Mg(this.s);
      c = p(this.jh, !1);
      for (var d = 0, e; (e = c[d]); d++) e.Ja();
      this.jh.Xs(!1);
      this.jh.rv = !1;
      a ? ((c = 2 * a.Tb), (a = this.jh.L ? a.Ug() + c : c)) : (a = c = 16);
      this.T.L && (a = -a);
      this.jh.moveBy(a, c);
      if (this.T.tp) {
        var f = this,
          h = this.T;
        h.tp(this.jh);
        this.at = function () {
          h.tp(f.jh);
        };
        D(this.T.u, this.at);
      }
      Se(this);
      D(this.s, this.OL.bind(this));
      this.mc();
    } else
      (this.Ip = null),
        this.s.J(),
        (this.jh = this.s = null),
        this.nc.J(),
        (this.nc = null),
        (this.Wp = this.ln = 0),
        this.at && (Oa(this.T.u, this.at), (this.at = null));
};
b.OL = function (a) {
  if (!(a.Aw || (a.type == g.i.Mj && "disabled" == a.element))) {
    if (!this.s.Kc()) {
      a = this.s.dc(!1);
      for (var c = 0, d; (d = a[c]); c++) {
        var e = d.bb();
        20 > e.y && d.moveBy(0, 20 - e.y);
        if (d.L) {
          var f = -20,
            h = this.s.oc();
          h && (f -= h.Ug());
          e.x > f && d.moveBy(f - e.x, 0);
        } else 20 > e.x && d.moveBy(20 - e.x, 0);
      }
    }
    if (this.jh.u == this.s) {
      g.i.na(!0);
      d = this.T;
      a = (a = d.Xa()) && g.S.ee(a);
      c = d.ra;
      d.ra = !1;
      d.Hg(this.jh);
      d.ra = c;
      d.Ae();
      g.Qg().Fb && g.navigation.JJ(d);
      d.ra && d.Ja();
      c = (c = d.Xa()) && g.S.ee(c);
      if (a != c) {
        g.i.Ia(new g.i.ph(d, "mutation", null, a, c));
        var k = g.i.xc();
        setTimeout(function () {
          g.i.na(k);
          d.cc();
          g.i.na(!1);
        }, g.eq);
      }
      this.s.Kc() || Se(this);
      g.i.na(!1);
    }
  }
};
b.LI = function () {
  var a = this.s.oc();
  a = a ? a.Ug() : 0;
  return {
    $d: 0,
    tf: 0,
    cd: 0,
    pd: 0,
    Vb: this.Wp,
    Qb: this.ln - a,
    jc: 0,
    ac: 0,
    bd: 0,
    Sc: this.s.L ? 0 : a,
  };
};
b.J = function () {
  this.T.td = null;
  g.re.prototype.J.call(this);
};
g.Ac.al = function (a, c, d) {
  if (!a || !a.Z().u) return !1;
  d = z(c, d).connection;
  var e = a.sa();
  return (e && e != c) || d.oa == a
    ? !1
    : (d.isConnected() && d.disconnect(), d.connect(a), !0);
};
g.Ac.BB = function (a) {
  var c = null;
  if (a && a.options) {
    var d = a.options.yc;
    a.hg ? d && d.options && (c = d.options.yc) : d && (c = d);
  }
  return c;
};
g.R.Kw = {};
g.ba.bG = {};
g.ba.bG.Hl = 260;
g.Ti([
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
g.R.lists_create_with = {
  U: function () {
    this.ec = g.h.LISTS_CREATE_WITH_HELPURL;
    this.Jb("list_blocks");
    this.fc = 3;
    this.yd();
    this.Md(!0, "Array");
    this.Wm(new g.Ac(["lists_create_with_item"]));
    this.Sa(g.h.LISTS_CREATE_WITH_TOOLTIP);
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("items", this.fc);
    return a;
  },
  Eb: function (a) {
    this.fc = parseInt(a.getAttribute("items"), 10);
    this.yd();
  },
  Mg: function (a) {
    var c = a.bh("lists_create_with_container");
    c.Ae();
    for (var d = z(c, "STACK").connection, e = 0; e < this.fc; e++) {
      var f = a.bh("lists_create_with_item");
      f.Ae();
      d.connect(f.ka);
      d = f.Y;
    }
    return c;
  },
  Hg: function (a) {
    var c = M(a, "STACK");
    for (a = []; c && !c.me(); ) a.push(c.Vp), (c = c.Y && c.Y.sa());
    for (c = 0; c < this.fc; c++) {
      var d = z(this, "ADD" + c).connection.oa;
      d && -1 == a.indexOf(d) && d.disconnect();
    }
    this.fc = a.length;
    this.yd();
    for (c = 0; c < this.fc; c++) g.Ac.al(a[c], this, "ADD" + c);
  },
  tp: function (a) {
    a = M(a, "STACK");
    for (var c = 0; a; ) {
      var d = z(this, "ADD" + c);
      a.Vp = d && d.connection.oa;
      c++;
      a = a.Y && a.Y.sa();
    }
  },
  yd: function () {
    this.fc && z(this, "EMPTY")
      ? this.Ib("EMPTY")
      : this.fc ||
        z(this, "EMPTY") ||
        J(L(this, "EMPTY"), g.h.LISTS_CREATE_EMPTY_TITLE);
    for (var a = 0; a < this.fc; a++)
      if (!z(this, "ADD" + a)) {
        var c = mc(K(this, "ADD" + a), g.yl);
        0 == a && J(c, g.h.LISTS_CREATE_WITH_INPUT_WITH);
      }
    for (; z(this, "ADD" + a); ) this.Ib("ADD" + a), a++;
  },
};
g.R.lists_create_with_container = {
  U: function () {
    this.Jb("list_blocks");
    J(L(this), g.h.LISTS_CREATE_WITH_CONTAINER_TITLE_ADD);
    this.Yf(g.gb, "STACK");
    this.Sa(g.h.LISTS_CREATE_WITH_CONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.R.lists_create_with_item = {
  U: function () {
    this.Jb("list_blocks");
    J(L(this), g.h.LISTS_CREATE_WITH_ITEM_TITLE);
    this.Yc(!0);
    this.Xc(!0);
    this.Sa(g.h.LISTS_CREATE_WITH_ITEM_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.R.lists_indexOf = {
  U: function () {
    var a = [
      [g.h.LISTS_INDEX_OF_FIRST, "FIRST"],
      [g.h.LISTS_INDEX_OF_LAST, "LAST"],
    ];
    this.ec = g.h.LISTS_INDEX_OF_HELPURL;
    this.Jb("list_blocks");
    this.Md(!0, "Number");
    J(K(this, "VALUE").kb("Array"), g.h.LISTS_INDEX_OF_INPUT_IN_LIST);
    J(K(this, "FIND"), new g.Da(a), "END");
    this.Ce(!0);
    var c = this;
    this.Sa(function () {
      return g.h.LISTS_INDEX_OF_TOOLTIP.replace(
        "%1",
        c.u.options.Ef ? "0" : "-1"
      );
    });
  },
};
g.R.lists_getIndex = {
  U: function () {
    var a = [
      [g.h.LISTS_GET_INDEX_GET, "GET"],
      [g.h.LISTS_GET_INDEX_GET_REMOVE, "GET_REMOVE"],
      [g.h.LISTS_GET_INDEX_REMOVE, "REMOVE"],
    ];
    this.Gu = [
      [g.h.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.h.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.h.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.h.LISTS_GET_INDEX_LAST, "LAST"],
      [g.h.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.ec = g.h.LISTS_GET_INDEX_HELPURL;
    this.Jb("list_blocks");
    a = new g.Da(a, function (d) {
      d = "REMOVE" == d;
      this.Z().XD(d);
    });
    J(K(this, "VALUE").kb("Array"), g.h.LISTS_GET_INDEX_INPUT_IN_LIST);
    J(J(L(this), a, "MODE"), "", "SPACE");
    L(this, "AT");
    g.h.LISTS_GET_INDEX_TAIL && J(L(this, "TAIL"), g.h.LISTS_GET_INDEX_TAIL);
    this.Ce(!0);
    this.Md(!0);
    this.pc(!0);
    var c = this;
    this.Sa(function () {
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
          ).replace("%1", c.u.options.Ef ? "#1" : "#0");
      return f;
    });
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("statement", !this.O);
    a.setAttribute("at", z(this, "AT").type == g.lb);
    return a;
  },
  Eb: function (a) {
    var c = "true" == a.getAttribute("statement");
    this.XD(c);
    a = "false" != a.getAttribute("at");
    this.pc(a);
  },
  XD: function (a) {
    a != !this.O &&
      (y(this, !0),
      a
        ? (this.Md(!1), this.Yc(!0), this.Xc(!0))
        : (this.Yc(!1), this.Xc(!1), this.Md(!0)));
  },
  pc: function (a) {
    this.Ib("AT");
    this.Ib("ORDINAL", !0);
    a
      ? (K(this, "AT").kb("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          J(L(this, "ORDINAL"), g.h.ORDINAL_NUMBER_SUFFIX))
      : L(this, "AT");
    var c = new g.Da(this.Gu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.Z();
        f.pc(e);
        oc(f, d, "WHERE");
        return null;
      }
    });
    J(z(this, "AT"), c, "WHERE");
    g.h.LISTS_GET_INDEX_TAIL && rc(this, "TAIL", null);
  },
};
g.R.lists_setIndex = {
  U: function () {
    var a = [
      [g.h.LISTS_SET_INDEX_SET, "SET"],
      [g.h.LISTS_SET_INDEX_INSERT, "INSERT"],
    ];
    this.Gu = [
      [g.h.LISTS_GET_INDEX_FROM_START, "FROM_START"],
      [g.h.LISTS_GET_INDEX_FROM_END, "FROM_END"],
      [g.h.LISTS_GET_INDEX_FIRST, "FIRST"],
      [g.h.LISTS_GET_INDEX_LAST, "LAST"],
      [g.h.LISTS_GET_INDEX_RANDOM, "RANDOM"],
    ];
    this.ec = g.h.LISTS_SET_INDEX_HELPURL;
    this.Jb("list_blocks");
    J(K(this, "LIST").kb("Array"), g.h.LISTS_SET_INDEX_INPUT_IN_LIST);
    J(J(L(this), new g.Da(a), "MODE"), "", "SPACE");
    L(this, "AT");
    J(K(this, "TO"), g.h.LISTS_SET_INDEX_INPUT_TO);
    this.Ce(!0);
    this.Yc(!0);
    this.Xc(!0);
    this.Sa(g.h.LISTS_SET_INDEX_TOOLTIP);
    this.pc(!0);
    var c = this;
    this.Sa(function () {
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
            c.u.options.Ef ? "#1" : "#0"
          );
      return f;
    });
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at", z(this, "AT").type == g.lb);
    return a;
  },
  Eb: function (a) {
    a = "false" != a.getAttribute("at");
    this.pc(a);
  },
  pc: function (a) {
    this.Ib("AT");
    this.Ib("ORDINAL", !0);
    a
      ? (K(this, "AT").kb("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          J(L(this, "ORDINAL"), g.h.ORDINAL_NUMBER_SUFFIX))
      : L(this, "AT");
    var c = new g.Da(this.Gu, function (d) {
      var e = "FROM_START" == d || "FROM_END" == d;
      if (e != a) {
        var f = this.Z();
        f.pc(e);
        oc(f, d, "WHERE");
        return null;
      }
    });
    rc(this, "AT", "TO");
    z(this, "ORDINAL") && rc(this, "ORDINAL", "TO");
    J(z(this, "AT"), c, "WHERE");
  },
};
g.R.lists_getSublist = {
  U: function () {
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
    this.ec = g.h.LISTS_GET_SUBLIST_HELPURL;
    this.Jb("list_blocks");
    J(K(this, "LIST").kb("Array"), g.h.LISTS_GET_SUBLIST_INPUT_IN_LIST);
    L(this, "AT1");
    L(this, "AT2");
    g.h.LISTS_GET_SUBLIST_TAIL &&
      J(L(this, "TAIL"), g.h.LISTS_GET_SUBLIST_TAIL);
    this.Ce(!0);
    this.Md(!0, "Array");
    this.pc(1, !0);
    this.pc(2, !0);
    this.Sa(g.h.LISTS_GET_SUBLIST_TOOLTIP);
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at1", z(this, "AT1").type == g.lb);
    a.setAttribute("at2", z(this, "AT2").type == g.lb);
    return a;
  },
  Eb: function (a) {
    var c = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.pc(1, c);
    this.pc(2, a);
  },
  pc: function (a, c) {
    this.Ib("AT" + a);
    this.Ib("ORDINAL" + a, !0);
    c
      ? (K(this, "AT" + a).kb("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          J(L(this, "ORDINAL" + a), g.h.ORDINAL_NUMBER_SUFFIX))
      : L(this, "AT" + a);
    var d = new g.Da(this["WHERE_OPTIONS_" + a], function (e) {
      var f = "FROM_START" == e || "FROM_END" == e;
      if (f != c) {
        var h = this.Z();
        h.pc(a, f);
        oc(h, e, "WHERE" + a);
        return null;
      }
    });
    J(z(this, "AT" + a), d, "WHERE" + a);
    1 == a &&
      (rc(this, "AT1", "AT2"),
      z(this, "ORDINAL1") && rc(this, "ORDINAL1", "AT2"));
    g.h.LISTS_GET_SUBLIST_TAIL && rc(this, "TAIL", null);
  },
};
g.R.lists_sort = {
  U: function () {
    qc(this, {
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
g.R.lists_split = {
  U: function () {
    var a = this,
      c = new g.Da(
        [
          [g.h.LISTS_SPLIT_LIST_FROM_TEXT, "SPLIT"],
          [g.h.LISTS_SPLIT_TEXT_FROM_LIST, "JOIN"],
        ],
        function (d) {
          a.og(d);
        }
      );
    this.ec = g.h.LISTS_SPLIT_HELPURL;
    this.Jb("list_blocks");
    J(K(this, "INPUT").kb("String"), c, "MODE");
    J(K(this, "DELIM").kb("String"), g.h.LISTS_SPLIT_WITH_DELIMITER);
    this.Ce(!0);
    this.Md(!0, "Array");
    this.Sa(function () {
      var d = C(a, "MODE");
      if ("SPLIT" == d) return g.h.LISTS_SPLIT_TOOLTIP_SPLIT;
      if ("JOIN" == d) return g.h.LISTS_SPLIT_TOOLTIP_JOIN;
      throw Error("Unknown mode: " + d);
    });
  },
  og: function (a) {
    if (C(this, "MODE") != a) {
      var c = z(this, "INPUT").connection;
      c.Xm(null);
      var d = c.sa();
      d && (c.disconnect(), d.Ra ? d.J() : this.cc());
    }
    "SPLIT" == a
      ? (this.O.kb("Array"), z(this, "INPUT").kb("String"))
      : (this.O.kb("String"), z(this, "INPUT").kb("Array"));
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("mode", C(this, "MODE"));
    return a;
  },
  Eb: function (a) {
    this.og(a.getAttribute("mode"));
  },
};
g.R.xJ = {};
g.ba.Ke = {};
g.ba.Ke.Hl = 210;
g.Ti([
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
g.Ti([
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
g.ba.Ke.yu = {
  EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
  NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
  LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
  LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
  GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
  GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
  AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
  OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}",
};
g.ca.register("logic_op_tooltip", g.ca.dr("OP", g.ba.Ke.yu));
g.ba.Ke.AE = {
  Ue: 0,
  dg: 0,
  Fj: !0,
  Xa: function () {
    if (!this.Ue && !this.dg) return null;
    var a = g.g.xml.createElement("mutation");
    this.Ue && a.setAttribute("elseif", this.Ue);
    this.dg && a.setAttribute("else", 1);
    return a;
  },
  Eb: function (a) {
    this.Ue = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.dg = parseInt(a.getAttribute("else"), 10) || 0;
    this.qK();
  },
  Mg: function (a) {
    var c = a.bh("controls_if_if");
    c.Ae();
    for (var d = c.Y, e = 1; e <= this.Ue; e++) {
      var f = a.bh("controls_if_elseif");
      f.Ae();
      d.connect(f.ka);
      d = f.Y;
    }
    this.dg && ((a = a.bh("controls_if_else")), a.Ae(), d.connect(a.ka));
    return c;
  },
  Hg: function (a) {
    a = a.Y.sa();
    this.dg = this.Ue = 0;
    for (var c = [null], d = [null], e = null; a && !a.me(); ) {
      switch (a.type) {
        case "controls_if_elseif":
          this.Ue++;
          c.push(a.Vp);
          d.push(a.oi);
          break;
        case "controls_if_else":
          this.dg++;
          e = a.oi;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.Y && a.Y.sa();
    }
    this.yd();
    this.sD(c, d, e);
  },
  tp: function (a) {
    a = a.Y.sa();
    for (var c = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var d = z(this, "IF" + c),
            e = z(this, "DO" + c);
          a.Vp = d && d.connection.oa;
          a.oi = e && e.connection.oa;
          c++;
          break;
        case "controls_if_else":
          e = z(this, "ELSE");
          a.oi = e && e.connection.oa;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.Y && a.Y.sa();
    }
  },
  qK: function () {
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
    this.yd();
    this.sD(a, c, d);
  },
  yd: function () {
    z(this, "ELSE") && this.Ib("ELSE");
    for (var a = 1; z(this, "IF" + a); )
      this.Ib("IF" + a), this.Ib("DO" + a), a++;
    for (a = 1; a <= this.Ue; a++)
      J(K(this, "IF" + a).kb("Boolean"), g.h.CONTROLS_IF_MSG_ELSEIF),
        J(this.Yf(g.gb, "DO" + a), g.h.CONTROLS_IF_MSG_THEN);
    this.dg && J(this.Yf(g.gb, "ELSE"), g.h.CONTROLS_IF_MSG_ELSE);
  },
  sD: function (a, c, d) {
    for (var e = 1; e <= this.Ue; e++)
      g.Ac.al(a[e], this, "IF" + e), g.Ac.al(c[e], this, "DO" + e);
    g.Ac.al(d, this, "ELSE");
  },
};
g.ca.np("controls_if_mutator", g.ba.Ke.AE, null, [
  "controls_if_elseif",
  "controls_if_else",
]);
g.ba.Ke.BE = function () {
  this.Sa(
    function () {
      if (this.Ue || this.dg) {
        if (!this.Ue && this.dg) return g.h.CONTROLS_IF_TOOLTIP_2;
        if (this.Ue && !this.dg) return g.h.CONTROLS_IF_TOOLTIP_3;
        if (this.Ue && this.dg) return g.h.CONTROLS_IF_TOOLTIP_4;
      } else return g.h.CONTROLS_IF_TOOLTIP_1;
      return "";
    }.bind(this)
  );
};
g.ca.register("controls_if_tooltip", g.ba.Ke.BE);
g.ba.Ke.YF = {
  onchange: function (a) {
    this.hp || (this.hp = [null, null]);
    var c = M(this, "A"),
      d = M(this, "B");
    c &&
      d &&
      !sa(c.O, d.O) &&
      (g.i.na(a.group),
      (a = this.hp[0]),
      a !== c &&
        (y(c), !a || a.ag || a.Ra || z(this, "A").connection.connect(a.O)),
      (c = this.hp[1]),
      c !== d &&
        (y(d), !c || c.ag || c.Ra || z(this, "B").connection.connect(c.O)),
      this.cc(),
      g.i.na(!1));
    this.hp[0] = M(this, "A");
    this.hp[1] = M(this, "B");
  },
};
g.ba.Ke.XF = function () {
  this.Ld(g.ba.Ke.YF);
};
g.ca.register("logic_compare", g.ba.Ke.XF);
g.ba.Ke.ZF = {
  oD: null,
  onchange: function (a) {
    var c = M(this, "THEN"),
      d = M(this, "ELSE"),
      e = this.O.oa;
    if ((c || d) && e)
      for (var f = 0; 2 > f; f++) {
        var h = 1 == f ? c : d;
        h &&
          !sa(h.O, e) &&
          (g.i.na(a.group),
          e === this.oD ? (y(this), e.Z().cc()) : (y(h), h.cc()),
          g.i.na(!1));
      }
    this.oD = e;
  },
};
g.ca.Ps("logic_ternary", g.ba.Ke.ZF);
g.Rc = function (a, c, d) {
  this.Zm = !0;
  g.Rc.v.constructor.call(this, a, c, d);
  this.Ds = this.ii = this.Jd = null;
  this.Mr = !1;
  this.s = null;
};
g.g.object.X(g.Rc, g.kd);
g.Rc.prototype.Oj = "";
g.Rc.ma = function (a) {
  var c = g.g.Mc(a.text);
  return new g.Rc(c, void 0, a);
};
g.Rc.prototype.ck = !0;
g.Rc.Ly = 4;
b = g.Rc.prototype;
b.pq = "text";
b.Dd = function (a) {
  g.Rc.v.Dd.call(this, a);
  "boolean" == typeof a.spellcheck && (this.Zm = a.spellcheck);
};
b.$h = function () {
  if (this.W().jz) {
    for (var a = 0, c = 0, d = 0, e; (e = this.I.V[d]); d++) {
      for (var f = 0; e.ib[f]; f++) a++;
      e.connection && c++;
    }
    this.Mr = 1 >= a && this.I.O && !c;
  } else this.Mr = !1;
  this.Mr ? (this.nr = this.I.Pa()) : Lb(this);
  Mb(this);
};
b.Uh = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
b.vB = function () {
  if (this.Em) {
    this.gs = !1;
    var a = this.sb;
    this.sb = this.Jd.TD;
    this.I &&
      g.i.isEnabled() &&
      g.i.Ia(new g.i.ph(this.I, "field", this.name || null, a, this.sb));
  }
};
b.cg = function (a) {
  this.gs = !0;
  this.sb = a;
  this.Em || (this.Zg = !0);
};
b.mc = function () {
  this.I &&
    this.W().jz &&
    (this.Db
      ? this.Db.setAttribute("stroke", this.I.style.Ph)
      : this.I.Gb.Pb.setAttribute("fill", this.W().cz));
};
b.cl = function () {
  g.Rc.v.cl.call(this);
  if (this.Em) {
    this.dl();
    var a = this.Jd;
    this.gs
      ? (g.g.o.ic(a, "blocklyInvalidInput"), g.g.$.Zb(a, g.g.$.State.Dq, !1))
      : (g.g.o.Ha(a, "blocklyInvalidInput"), g.g.$.Zb(a, g.g.$.State.Dq, !0));
  }
};
function Te(a) {
  0 != a.Zm && ((a.Zm = !1), a.Jd && a.Jd.setAttribute("spellcheck", a.Zm));
}
b.lg = function (a, c) {
  this.s = this.I.u;
  a = c || !1;
  !a && (g.g.userAgent.lG || g.g.userAgent.pn || g.g.userAgent.Il)
    ? Ue(this)
    : (g.la.show(this, this.I.L, this.NL.bind(this)),
      (this.Jd = this.nt()),
      (this.Em = !0),
      a || (this.Jd.focus({ preventScroll: !0 }), this.Jd.select()));
};
function Ue(a) {
  g.prompt(
    g.h.CHANGE_VALUE_TITLE,
    a.Gd(),
    function (c) {
      this.setValue(c);
    }.bind(a)
  );
}
b.nt = function () {
  var a = g.la.pb;
  g.g.o.Ha(Kb(this), "editing");
  var c = document.createElement("input");
  c.className = "blocklyHtmlInput";
  c.setAttribute("spellcheck", this.Zm);
  var d = bd(this.s),
    e = this.W().xh * d + "pt";
  a.style.fontSize = e;
  c.style.fontSize = e;
  e = g.Rc.Ly * d + "px";
  if (this.Mr) {
    e = Za(this);
    e = (e.bottom - e.top) / 2 + "px";
    var f = this.I.getParent() ? this.I.getParent().style.Ph : this.I.style.Ph;
    c.style.border = 1 * d + "px solid " + f;
    a.style.borderRadius = e;
    a.style.transition = "box-shadow 0.25s ease 0s";
    this.W().oF &&
      (a.style.boxShadow =
        "rgba(255, 255, 255, 0.3) 0px 0px 0px " + 4 * d + "px");
  }
  c.style.borderRadius = e;
  a.appendChild(c);
  c.value = c.defaultValue = String(this.sb);
  c.TD = this.sb;
  c.kx = null;
  this.dl();
  Ve(this, c);
  return c;
};
b.NL = function () {
  this.Em = !1;
  this.gs = !0;
  Qb(this);
  this.mx && this.mx(this.sb);
  this.ii && (g.Na(this.ii), (this.ii = null));
  this.Ds && (g.Na(this.Ds), (this.Ds = null));
  var a = g.la.pb.style;
  a.width = "auto";
  a.height = "auto";
  a.fontSize = "";
  a.transition = "";
  a.boxShadow = "";
  this.Jd = null;
  g.g.o.ic(Kb(this), "editing");
};
function Ve(a, c) {
  a.ii = g.ta(c, "keydown", a, a.nx);
  a.Ds = g.ta(c, "input", a, a.YJ);
}
b.nx = function (a) {
  if (a.keyCode == g.g.P.Dl) g.la.Oa(), g.H.aj();
  else if (a.keyCode == g.g.P.Kt)
    (this.Jd.value = this.Jd.defaultValue), g.la.Oa(), g.H.aj();
  else if (a.keyCode == g.g.P.UG) {
    g.la.Oa();
    g.H.aj();
    var c = this.I,
      d = !a.shiftKey,
      e = new g.Tq();
    F(e, g.G.mm(this));
    var f = e.rb;
    e.Yb({ name: d ? g.navigation.qb.Ad : g.navigation.qb.Bd });
    (d = e.rb) &&
      d !== f &&
      ((f = d.Ga), bb(f) && f.lg(void 0), c.u.Fb && F(c.u.Nb(), d));
    a.preventDefault();
  }
};
b.YJ = function () {
  var a = this.Jd.value;
  a !== this.Jd.kx &&
    ((this.Jd.kx = a),
    g.i.na(!0),
    this.setValue(a),
    Qb(this),
    this.dl(),
    g.i.na(!1));
};
b.dl = function () {
  var a = g.la.pb,
    c = Za(this);
  a.style.width = c.right - c.left + "px";
  a.style.height = c.bottom - c.top + "px";
  c = new g.g.aa(this.I.L ? c.right - a.offsetWidth : c.left, c.top);
  a.style.left = c.x + "px";
  a.style.top = c.y + "px";
};
b.yC = function () {
  return !0;
};
b.Tr = function () {
  return this.Em && this.Jd ? this.Jd.value : null;
};
g.Ve.register("field_input", g.Rc);
g.He = function (a, c, d, e, f, h) {
  this.Zo = -Infinity;
  this.Xo = Infinity;
  this.Sm = 0;
  this.pv = null;
  g.He.v.constructor.call(this, a, f, h);
  h || (We(this, c), Xe(this, d), Ye(this, e), this.setValue(this.getValue()));
};
g.g.object.X(g.He, g.Rc);
g.He.prototype.Oj = 0;
g.He.ma = function (a) {
  return new g.He(a.value, void 0, void 0, void 0, void 0, a);
};
g.He.prototype.ck = !0;
g.He.prototype.Dd = function (a) {
  g.He.v.Dd.call(this, a);
  We(this, a.min);
  Xe(this, a.max);
  Ye(this, a.precision);
};
function We(a, c) {
  null == c ? (a.Zo = -Infinity) : ((c = Number(c)), isNaN(c) || (a.Zo = c));
}
function Xe(a, c) {
  null == c ? (a.Xo = Infinity) : ((c = Number(c)), isNaN(c) || (a.Xo = c));
}
function Ye(a, c) {
  null == c ? (a.Sm = 0) : ((c = Number(c)), isNaN(c) || (a.Sm = c));
  var d = a.Sm.toLocaleString("en-US", { maximumFractionDigits: 20 }),
    e = d.indexOf(".");
  a.pv = -1 == e ? (c ? 0 : null) : d.length - e - 1;
}
g.He.prototype.Uh = function (a) {
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = a.replace(/infinity/i, "Infinity");
  a = Number(a || 0);
  if (isNaN(a)) return null;
  a = Math.min(Math.max(a, this.Zo), this.Xo);
  this.Sm && isFinite(a) && (a = Math.round(a / this.Sm) * this.Sm);
  null != this.pv && (a = Number(a.toFixed(this.pv)));
  return a;
};
g.He.prototype.nt = function () {
  var a = g.He.v.nt.call(this);
  -Infinity < this.Zo && g.g.$.Zb(a, g.g.$.State.jH, this.Zo);
  Infinity > this.Xo && g.g.$.Zb(a, g.g.$.State.iH, this.Xo);
  return a;
};
g.Ve.register("field_number", g.He);
g.Ie = function (a, c, d, e, f) {
  this.Rk = g.Ie.pI;
  this.ZH = "string" === typeof a ? a : "";
  this.Nc = new g.g.ue(0, 0);
  f && this.Dd(f);
  c && (this.rl = c);
  f || Ze(this, d, e);
};
g.g.object.X(g.Ie, g.Da);
g.Ie.ma = function (a) {
  var c = g.g.Mc(a.variable);
  return new g.Ie(c, void 0, void 0, void 0, a);
};
b = g.Ie.prototype;
b.ck = !0;
b.Dd = function (a) {
  g.Ie.v.Dd.call(this, a);
  Ze(this, a.variableTypes, a.defaultType);
};
b.Ek = function () {
  if (!this.Fe) {
    var a = g.ga.Sr(this.I.u, null, this.ZH, this.YH);
    this.cg(a.Qa());
  }
};
b.gy = function () {
  return (
    g.Ie.v.gy.call(this) && (!this.W().Nt || "variables_get" != this.I.type)
  );
};
b.tm = function (a) {
  var c = a.getAttribute("id"),
    d = a.textContent,
    e = a.getAttribute("variabletype") || a.getAttribute("variableType") || "";
  c = g.ga.Sr(this.I.u, c, d, e);
  if (null != e && e !== c.type)
    throw Error(
      "Serialized variable type with id '" +
        c.Qa() +
        "' had type " +
        c.type +
        ", and does not match variable field that references it: " +
        g.S.ee(a) +
        "."
    );
  this.setValue(c.Qa());
};
b.sy = function (a) {
  this.Ek();
  a.id = this.Fe.Qa();
  a.textContent = this.Fe.name;
  this.Fe.type && a.setAttribute("variabletype", this.Fe.type);
  return a;
};
b.ay = function (a) {
  if (a.Ra)
    throw Error("Variable fields are not allowed to exist on shadow blocks.");
  g.Ie.v.ay.call(this, a);
};
b.getValue = function () {
  return this.Fe ? this.Fe.Qa() : null;
};
b.Gd = function () {
  return this.Fe ? this.Fe.name : "";
};
b.Hd = function () {
  return this.Fe;
};
b.bC = function () {
  return this.Fe ? this.rl : null;
};
b.Uh = function (a) {
  if (null === a) return null;
  var c = g.ga.Hd(this.I.u, a);
  if (!c)
    return (
      console.warn("Variable id doesn't point to a real variable! ID was " + a),
      null
    );
  c = c.type;
  var d;
  a: if ((d = $e(this))) {
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
b.cg = function (a) {
  this.Fe = g.ga.Hd(this.I.u, a);
  g.Ie.v.cg.call(this, a);
};
function $e(a) {
  var c = a.JL;
  if (null === c && a.I && a.I.u) return a.I.u.jw();
  c = c || [""];
  if (0 == c.length)
    throw (
      ((a = a.Gd()),
      Error("'variableTypes' of field variable " + a + " was an empty list"))
    );
  return c;
}
function Ze(a, c, d) {
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
  a.YH = d;
  a.JL = c;
}
g.Ie.pI = function () {
  if (!this.Fe)
    throw Error(
      "Tried to call dropdownCreate on a variable field with no variable selected."
    );
  var a = this.Gd(),
    c = [];
  if (this.I && this.I.u)
    for (var d = $e(this), e = 0; e < d.length; e++)
      c = c.concat(this.I.u.Fo(d[e]));
  c.sort(g.Pn.UA);
  d = [];
  for (e = 0; e < c.length; e++) d[e] = [c[e].name, c[e].Qa()];
  d.push([g.h.RENAME_VARIABLE, g.Vz]);
  g.h.DELETE_VARIABLE && d.push([g.h.DELETE_VARIABLE.replace("%1", a), g.Yy]);
  return d;
};
g.Ie.prototype.cD = function (a) {
  a = a.getValue();
  if (this.I && this.I.u) {
    if (a == g.Vz) {
      g.ga.Ts(this.I.u, this.Fe);
      return;
    }
    if (a == g.Yy) {
      this.I.u.Th(this.Fe.Qa());
      return;
    }
  }
  this.setValue(a);
};
g.Ie.prototype.mp = function () {
  return !0;
};
g.Ve.register("field_variable", g.Ie);
g.R.zJ = {};
g.ba.jf = {};
g.ba.jf.Hl = 120;
g.Ti([
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
g.ba.jf.lH = {
  WHILE: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_WHILE}",
  UNTIL: "%{BKY_CONTROLS_WHILEUNTIL_TOOLTIP_UNTIL}",
};
g.ca.register("controls_whileUntil_tooltip", g.ca.dr("MODE", g.ba.jf.lH));
g.ba.jf.qE = {
  BREAK: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_BREAK}",
  CONTINUE: "%{BKY_CONTROLS_FLOW_STATEMENTS_TOOLTIP_CONTINUE}",
};
g.ca.register("controls_flow_tooltip", g.ca.dr("FLOW", g.ba.jf.qE));
g.ba.jf.HE = {
  Sh: function (a) {
    if (!this.Ub) {
      var c = w(this, "VAR").Hd(),
        d = c.name;
      if (!this.isCollapsed() && null != d) {
        var e = { enabled: !0 };
        e.text = g.h.VARIABLES_SET_CREATE_GET.replace("%1", d);
        c = g.ga.xo(c);
        d = g.g.xml.createElement("block");
        d.setAttribute("type", "variables_get");
        d.appendChild(c);
        e.Aa = g.$a.gr(this, d);
        a.push(e);
      }
    }
  },
};
g.ca.Ps("contextMenu_newGetVariableBlock", g.ba.jf.HE);
g.ca.register("controls_for_tooltip", g.ca.er("%{BKY_CONTROLS_FOR_TOOLTIP}"));
g.ca.register(
  "controls_forEach_tooltip",
  g.ca.er("%{BKY_CONTROLS_FOREACH_TOOLTIP}")
);
g.ba.jf.nq = {
  aG: [
    "controls_repeat",
    "controls_repeat_ext",
    "controls_forEach",
    "controls_for",
    "controls_whileUntil",
  ],
  Fj: !0,
  $B: function (a) {
    do {
      if (-1 != g.ba.jf.nq.aG.indexOf(a.type)) return a;
      a = nc(a);
    } while (a);
    return null;
  },
  onchange: function (a) {
    if (this.u.Kc && !this.u.Kc() && a.type == g.i.wt) {
      var c = g.ba.jf.nq.$B(this);
      this.Ym(c ? null : g.h.CONTROLS_FLOW_STATEMENTS_WARNING);
      if (!this.Ub) {
        var d = g.i.xc();
        g.i.na(a.group);
        this.oe(c);
        g.i.na(d);
      }
    }
  },
};
g.ca.Ps("controls_flow_in_loop_check", g.ba.jf.nq);
g.R.rd = {};
g.ba.Math = {};
g.ba.Math.Hl = 230;
g.Ti([
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
g.ba.Math.yu = {
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
g.ca.register("math_op_tooltip", g.ca.dr("OP", g.ba.Math.yu));
g.ba.Math.KF = {
  Xa: function () {
    var a = g.g.xml.createElement("mutation"),
      c = "DIVISIBLE_BY" == C(this, "PROPERTY");
    a.setAttribute("divisor_input", c);
    return a;
  },
  Eb: function (a) {
    a = "true" == a.getAttribute("divisor_input");
    this.yd(a);
  },
  yd: function (a) {
    var c = z(this, "DIVISOR");
    a ? c || K(this, "DIVISOR").kb("Number") : c && this.Ib("DIVISOR");
  },
};
g.ba.Math.LF = function () {
  Nb(w(this, "PROPERTY"), function (a) {
    a = "DIVISIBLE_BY" == a;
    this.Z().yd(a);
  });
};
g.ca.np("math_is_divisibleby_mutator", g.ba.Math.KF, g.ba.Math.LF);
g.ca.register("math_change_tooltip", g.ca.er("%{BKY_MATH_CHANGE_TOOLTIP}"));
g.ba.Math.WF = {
  og: function (a) {
    "MODE" == a ? this.O.kb("Array") : this.O.kb("Number");
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("op", C(this, "OP"));
    return a;
  },
  Eb: function (a) {
    this.og(a.getAttribute("op"));
  },
};
g.ba.Math.VF = function () {
  Nb(
    w(this, "OP"),
    function (a) {
      this.og(a);
    }.bind(this)
  );
};
g.ca.np("math_modes_of_list_mutator", g.ba.Math.WF, g.ba.Math.VF);
g.ff = function (a, c, d) {
  this.OA = null;
  g.ff.v.constructor.call(this, a, c, d);
};
g.g.object.X(g.ff, g.kd);
g.ff.prototype.Oj = !1;
g.ff.ma = function (a) {
  return new g.ff(a.checked, void 0, a);
};
g.ff.tE = "\u2713";
b = g.ff.prototype;
b.ck = !0;
b.pq = "default";
b.Dd = function (a) {
  g.ff.v.Dd.call(this, a);
  a.checkCharacter && (this.OA = a.checkCharacter);
};
b.$h = function () {
  g.ff.v.$h.call(this);
  g.g.o.Ha(this.Pc, "blocklyCheckbox");
  this.Pc.style.display = this.sb ? "block" : "none";
};
b.cl = function () {
  this.pi && (this.pi.nodeValue = this.vm());
  this.Sp(this.W().hF);
};
b.vm = function () {
  return this.OA || g.ff.tE;
};
b.lg = function () {
  this.setValue(!this.sb);
};
b.Uh = function (a) {
  return !0 === a || "TRUE" === a
    ? "TRUE"
    : !1 === a || "FALSE" === a
    ? "FALSE"
    : null;
};
b.cg = function (a) {
  this.sb = af(a);
  this.Pc && (this.Pc.style.display = this.sb ? "block" : "none");
};
b.getValue = function () {
  return this.sb ? "TRUE" : "FALSE";
};
b.Gd = function () {
  return String(af(this.sb));
};
function af(a) {
  return "string" == typeof a ? "TRUE" == a : !!a;
}
g.Ve.register("field_checkbox", g.ff);
g.R.oK = {};
g.R.procedures_defnoreturn = {
  U: function () {
    var a = g.Ea.Kr("", this);
    a = new g.Rc(a, g.Ea.uD);
    Te(a);
    J(J(J(L(this), g.h.PROCEDURES_DEFNORETURN_TITLE), a, "NAME"), "", "PARAMS");
    this.Wm(new g.Ac(["procedures_mutatorarg"]));
    (this.u.options.Zn ||
      (this.u.options.yc && this.u.options.yc.options.Zn)) &&
      g.h.PROCEDURES_DEFNORETURN_COMMENT &&
      this.Cj(g.h.PROCEDURES_DEFNORETURN_COMMENT);
    this.Jb("procedure_blocks");
    this.Sa(g.h.PROCEDURES_DEFNORETURN_TOOLTIP);
    this.ec = g.h.PROCEDURES_DEFNORETURN_HELPURL;
    this.ob = [];
    this.Hc = [];
    this.il(!0);
    this.oi = null;
  },
  il: function (a) {
    this.Wr !== a &&
      (a
        ? (J(this.Yf(g.gb, "STACK"), g.h.PROCEDURES_DEFNORETURN_DO),
          z(this, "RETURN") && rc(this, "STACK", "RETURN"))
        : this.Ib("STACK", !0),
      (this.Wr = a));
  },
  Rp: function () {
    var a = "";
    this.ob.length &&
      (a = g.h.PROCEDURES_BEFORE_PARAMS + " " + this.ob.join(", "));
    g.i.disable();
    try {
      oc(this, a, "PARAMS");
    } finally {
      g.i.enable();
    }
  },
  Xa: function (a) {
    var c = g.g.xml.createElement("mutation");
    a && c.setAttribute("name", C(this, "NAME"));
    for (var d = 0; d < this.Hc.length; d++) {
      var e = g.g.xml.createElement("arg"),
        f = this.Hc[d];
      e.setAttribute("name", f.name);
      e.setAttribute("varid", f.Qa());
      a && this.Ax && e.setAttribute("paramId", this.Ax[d]);
      c.appendChild(e);
    }
    this.Wr || c.setAttribute("statements", "false");
    return c;
  },
  Eb: function (a) {
    this.ob = [];
    this.Hc = [];
    for (var c = 0, d; (d = a.childNodes[c]); c++)
      if ("arg" == d.nodeName.toLowerCase()) {
        var e = d.getAttribute("name");
        d = d.getAttribute("varid") || d.getAttribute("varId");
        this.ob.push(e);
        d = g.ga.Sr(this.u, d, e, "");
        null != d
          ? this.Hc.push(d)
          : console.log(
              "Failed to create a variable with name " + e + ", ignoring."
            );
      }
    this.Rp();
    g.Ea.ap(this);
    this.il("false" !== a.getAttribute("statements"));
  },
  Mg: function (a) {
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
    a = g.S.qk(c, a);
    "procedures_defreturn" == this.type
      ? oc(a, this.Wr, "STATEMENTS")
      : a.Ib("STATEMENT_INPUT");
    g.Ea.ap(this);
    return a;
  },
  Hg: function (a) {
    this.ob = [];
    this.Ax = [];
    this.Hc = [];
    for (var c = M(a, "STACK"); c && !c.me(); ) {
      var d = C(c, "NAME");
      this.ob.push(d);
      d = this.u.Hd(d, "");
      this.Hc.push(d);
      this.Ax.push(c.id);
      c = c.Y && c.Y.sa();
    }
    this.Rp();
    g.Ea.ap(this);
    a = C(a, "STATEMENTS");
    if (null !== a && ((a = "TRUE" == a), this.Wr != a))
      if (a) this.il(!0), g.Ac.al(this.oi, this, "STACK"), (this.oi = null);
      else {
        a = z(this, "STACK").connection;
        if ((this.oi = a.oa)) (a = a.sa()), y(a), a.cc();
        this.il(!1);
      }
  },
  Xi: function () {
    return [C(this, "NAME"), this.ob, !1];
  },
  Zh: function () {
    return this.ob;
  },
  Yh: function () {
    return this.Hc;
  },
  Ss: function (a, c) {
    var d = this.u.gg(a);
    if ("" == d.type) {
      d = d.name;
      c = this.u.gg(c);
      for (var e = !1, f = 0; f < this.Hc.length; f++)
        this.Hc[f].Qa() == a &&
          ((this.ob[f] = c.name), (this.Hc[f] = c), (e = !0));
      e && (this.Dr(d, c.name), g.Ea.ap(this));
    }
  },
  kt: function (a) {
    for (var c = a.name, d = !1, e = 0; e < this.Hc.length; e++)
      if (this.Hc[e].Qa() == a.Qa()) {
        var f = this.ob[e];
        this.ob[e] = c;
        d = !0;
      }
    d && (this.Dr(f, c), g.Ea.ap(this));
  },
  Dr: function (a, c) {
    this.Rp();
    if (this.td && this.td.isVisible())
      for (var d = B(this.td.s, !1), e = 0, f; (f = d[e]); e++)
        "procedures_mutatorarg" == f.type &&
          g.Sd.wf(a, C(f, "NAME")) &&
          oc(f, c, "NAME");
  },
  Sh: function (a) {
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
      d.setAttribute("type", this.LA);
      d.appendChild(e);
      c.Aa = g.$a.gr(this, d);
      a.push(c);
      if (!this.isCollapsed())
        for (d = 0; d < this.Hc.length; d++)
          (c = { enabled: !0 }),
            (e = this.Hc[d]),
            (c.text = g.h.VARIABLES_SET_CREATE_GET.replace("%1", e.name)),
            (e = g.ga.xo(e)),
            (f = g.g.xml.createElement("block")),
            f.setAttribute("type", "variables_get"),
            f.appendChild(e),
            (c.Aa = g.$a.gr(this, f)),
            a.push(c);
    }
  },
  LA: "procedures_callnoreturn",
};
g.R.procedures_defreturn = {
  U: function () {
    var a = g.Ea.Kr("", this);
    a = new g.Rc(a, g.Ea.uD);
    Te(a);
    J(J(J(L(this), g.h.PROCEDURES_DEFRETURN_TITLE), a, "NAME"), "", "PARAMS");
    J(mc(K(this, "RETURN"), g.yl), g.h.PROCEDURES_DEFRETURN_RETURN);
    this.Wm(new g.Ac(["procedures_mutatorarg"]));
    (this.u.options.Zn ||
      (this.u.options.yc && this.u.options.yc.options.Zn)) &&
      g.h.PROCEDURES_DEFRETURN_COMMENT &&
      this.Cj(g.h.PROCEDURES_DEFRETURN_COMMENT);
    this.Jb("procedure_blocks");
    this.Sa(g.h.PROCEDURES_DEFRETURN_TOOLTIP);
    this.ec = g.h.PROCEDURES_DEFRETURN_HELPURL;
    this.ob = [];
    this.Hc = [];
    this.il(!0);
    this.oi = null;
  },
  il: g.R.procedures_defnoreturn.il,
  Rp: g.R.procedures_defnoreturn.Rp,
  Xa: g.R.procedures_defnoreturn.Xa,
  Eb: g.R.procedures_defnoreturn.Eb,
  Mg: g.R.procedures_defnoreturn.Mg,
  Hg: g.R.procedures_defnoreturn.Hg,
  Xi: function () {
    return [C(this, "NAME"), this.ob, !0];
  },
  Zh: g.R.procedures_defnoreturn.Zh,
  Yh: g.R.procedures_defnoreturn.Yh,
  Ss: g.R.procedures_defnoreturn.Ss,
  kt: g.R.procedures_defnoreturn.kt,
  Dr: g.R.procedures_defnoreturn.Dr,
  Sh: g.R.procedures_defnoreturn.Sh,
  LA: "procedures_callreturn",
};
g.R.procedures_mutatorcontainer = {
  U: function () {
    J(L(this), g.h.PROCEDURES_MUTATORCONTAINER_TITLE);
    this.Yf(g.gb, "STACK");
    J(
      J(L(this, "STATEMENT_INPUT"), g.h.PROCEDURES_ALLOW_STATEMENTS),
      new g.ff("TRUE"),
      "STATEMENTS"
    );
    this.Jb("procedure_blocks");
    this.Sa(g.h.PROCEDURES_MUTATORCONTAINER_TOOLTIP);
    this.contextMenu = !1;
  },
};
g.R.procedures_mutatorarg = {
  U: function () {
    var a = new g.Rc(g.Ea.Uy, this.rl);
    a.UJ = a.lg;
    a.lg = function () {
      this.jo = [];
      this.UJ();
    };
    J(J(L(this), g.h.PROCEDURES_MUTATORARG_TITLE), a, "NAME");
    this.Yc(!0);
    this.Xc(!0);
    this.Jb("procedure_blocks");
    this.Sa(g.h.PROCEDURES_MUTATORARG_TOOLTIP);
    this.contextMenu = !1;
    a.mx = this.aI;
    a.jo = [];
    a.mx("x");
  },
  rl: function (a) {
    var c = this.Z(),
      d = g.Ac.BB(c.u);
    a = a.replace(/[\s\xa0]+/g, " ").replace(/^ | $/g, "");
    if (!a) return null;
    for (
      var e = B(c.u.fb || c.u, !1), f = a.toLowerCase(), h = 0;
      h < e.length;
      h++
    )
      if (e[h].id != this.Z().id) {
        var k = C(e[h], "NAME");
        if (k && k.toLowerCase() == f) return null;
      }
    if (c.Ub) return a;
    (c = d.Hd(a, "")) && c.name != a && d.zj(c.Qa(), a);
    c || ((c = d.uf(a, "")) && this.jo && this.jo.push(c));
    return a;
  },
  aI: function (a) {
    var c = g.Ac.BB(this.Z().u);
    if (c)
      for (var d = 0; d < this.jo.length; d++) {
        var e = this.jo[d];
        e.name != a && c.Th(e.Qa());
      }
  },
};
g.R.procedures_callnoreturn = {
  U: function () {
    J(L(this, "TOPROW"), "", "NAME");
    this.Yc(!0);
    this.Xc(!0);
    this.Jb("procedure_blocks");
    this.ec = g.h.PROCEDURES_CALLNORETURN_HELPURL;
    this.ob = [];
    this.Hc = [];
    this.Zk = {};
    this.hh = null;
    this.Jx = !0;
  },
  We: function () {
    return C(this, "NAME");
  },
  Um: function (a, c) {
    g.Sd.wf(a, this.We()) &&
      (oc(this, c, "NAME"),
      this.Sa(
        (this.O
          ? g.h.PROCEDURES_CALLRETURN_TOOLTIP
          : g.h.PROCEDURES_CALLNORETURN_TOOLTIP
        ).replace("%1", c)
      ));
  },
  Zx: function (a, c) {
    var d = g.Ea.Bo(this.We(), this.u),
      e = d && d.td && d.td.isVisible();
    e || ((this.Zk = {}), (this.hh = null));
    if (c)
      if (a.join("\n") == this.ob.join("\n")) this.hh = c;
      else {
        if (c.length != a.length)
          throw RangeError("paramNames and paramIds must be the same length.");
        this.Bj(!1);
        this.hh || ((this.Zk = {}), (this.hh = []));
        d = this.ra;
        this.ra = !1;
        for (var f = 0; f < this.ob.length; f++) {
          var h = z(this, "ARG" + f);
          h &&
            ((h = h.connection.oa),
            (this.Zk[this.hh[f]] = h),
            e &&
              h &&
              -1 == c.indexOf(this.hh[f]) &&
              (h.disconnect(), h.Z().cc()));
        }
        this.ob = [].concat(a);
        this.Hc = [];
        for (f = 0; f < this.ob.length; f++)
          (a = g.ga.Sr(this.u, null, this.ob[f], "")), this.Hc.push(a);
        this.yd();
        if ((this.hh = c))
          for (f = 0; f < this.ob.length; f++)
            (c = this.hh[f]),
              c in this.Zk &&
                ((h = this.Zk[c]),
                g.Ac.al(h, this, "ARG" + f) || delete this.Zk[c]);
        (this.ra = d) && this.Ja();
      }
  },
  yd: function () {
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
        (c = new g.Pd(this.ob[a])),
          J(mc(K(this, "ARG" + a), g.yl), c, "ARGNAME" + a).U();
    }
    for (; z(this, "ARG" + a); ) this.Ib("ARG" + a), a++;
    if ((a = z(this, "TOPROW")))
      if (this.ob.length)
        w(this, "WITH") ||
          (J(a, g.h.PROCEDURES_CALL_BEFORE_PARAMS, "WITH"), a.U());
      else if (w(this, "WITH"))
        a: {
          c = 0;
          for (var d; (d = a.ib[c]); c++)
            if ("WITH" === d.name) {
              d.J();
              a.ib.splice(c, 1);
              a.I.ra && ((a.I = a.I), a.I.Ja(), a.I.cc());
              break a;
            }
          throw Error('Field "WITH" not found.');
        }
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("name", this.We());
    for (var c = 0; c < this.ob.length; c++) {
      var d = g.g.xml.createElement("arg");
      d.setAttribute("name", this.ob[c]);
      a.appendChild(d);
    }
    return a;
  },
  Eb: function (a) {
    var c = a.getAttribute("name");
    this.Um(this.We(), c);
    c = [];
    for (var d = [], e = 0, f; (f = a.childNodes[e]); e++)
      "arg" == f.nodeName.toLowerCase() &&
        (c.push(f.getAttribute("name")), d.push(f.getAttribute("paramId")));
    this.Zx(c, d);
  },
  Zh: function () {
    return this.ob;
  },
  Yh: function () {
    return this.Hc;
  },
  onchange: function (a) {
    if (this.u && !this.u.hg && a.eb)
      if (a.type == g.i.aq && -1 != a.ej.indexOf(this.id)) {
        var c = this.We();
        c = g.Ea.Bo(c, this.u);
        !c ||
          (c.type == this.qv &&
            JSON.stringify(c.Zh()) == JSON.stringify(this.ob)) ||
          (c = null);
        if (!c) {
          g.i.na(a.group);
          a = g.g.xml.createElement("xml");
          c = g.g.xml.createElement("block");
          c.setAttribute("type", this.qv);
          var d = this.bb(),
            e = d.y + 2 * g.Vd;
          c.setAttribute("x", d.x + g.Vd * (this.L ? -1 : 1));
          c.setAttribute("y", e);
          d = this.Xa();
          c.appendChild(d);
          d = g.g.xml.createElement("field");
          d.setAttribute("name", "NAME");
          e = this.We();
          e || ((e = g.Ea.Kr("", this)), this.Um("", e));
          d.appendChild(g.g.xml.createTextNode(e));
          c.appendChild(d);
          a.appendChild(c);
          g.S.Ui(a, this.u);
          g.i.na(!1);
        }
      } else
        a.type == g.i.vt
          ? ((c = this.We()),
            (c = g.Ea.Bo(c, this.u)),
            c || (g.i.na(a.group), this.J(!0), g.i.na(!1)))
          : a.type == g.i.Mj &&
            "disabled" == a.element &&
            ((c = this.We()),
            (c = g.Ea.Bo(c, this.u)) &&
              c.id == a.ub &&
              ((c = g.i.xc()) &&
                console.log(
                  "Saw an existing group while responding to a definition change"
                ),
              g.i.na(a.group),
              a.newValue
                ? ((this.Jx = this.isEnabled()), this.oe(!1))
                : this.oe(this.Jx),
              g.i.na(c)));
  },
  Sh: function (a) {
    if (this.u.Lc()) {
      var c = { enabled: !0 };
      c.text = g.h.PROCEDURES_HIGHLIGHT_DEF;
      var d = this.We(),
        e = this.u;
      c.Aa = function () {
        var f = g.Ea.Bo(d, e);
        if (f) {
          var h = f.id;
          if (e.Lc()) {
            if ((h = h ? e.Fd(h) : null)) {
              var k = h.bb(),
                l = E(h),
                m = e.scale;
              h = (k.x + ((e.L ? -1 : 1) * l.width) / 2) * m;
              k = (k.y + l.height / 2) * m;
              l = e.ed();
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
  qv: "procedures_defnoreturn",
};
g.R.procedures_callreturn = {
  U: function () {
    J(L(this, "TOPROW"), "", "NAME");
    this.Md(!0);
    this.Jb("procedure_blocks");
    this.ec = g.h.PROCEDURES_CALLRETURN_HELPURL;
    this.ob = [];
    this.Hc = [];
    this.Zk = {};
    this.hh = null;
    this.Jx = !0;
  },
  We: g.R.procedures_callnoreturn.We,
  Um: g.R.procedures_callnoreturn.Um,
  Zx: g.R.procedures_callnoreturn.Zx,
  yd: g.R.procedures_callnoreturn.yd,
  Xa: g.R.procedures_callnoreturn.Xa,
  Eb: g.R.procedures_callnoreturn.Eb,
  Zh: g.R.procedures_callnoreturn.Zh,
  Yh: g.R.procedures_callnoreturn.Yh,
  onchange: g.R.procedures_callnoreturn.onchange,
  Sh: g.R.procedures_callnoreturn.Sh,
  qv: "procedures_defreturn",
};
g.R.procedures_ifreturn = {
  U: function () {
    J(K(this, "CONDITION").kb("Boolean"), g.h.CONTROLS_IF_MSG_IF);
    J(K(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN);
    this.Ce(!0);
    this.Yc(!0);
    this.Xc(!0);
    this.Jb("procedure_blocks");
    this.Sa(g.h.PROCEDURES_IFRETURN_TOOLTIP);
    this.ec = g.h.PROCEDURES_IFRETURN_HELPURL;
    this.$i = !0;
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("value", Number(this.$i));
    return a;
  },
  Eb: function (a) {
    this.$i = 1 == a.getAttribute("value");
    this.$i ||
      (this.Ib("VALUE"), J(L(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN));
  },
  onchange: function () {
    if (this.u.Kc && !this.u.Kc()) {
      var a = !1,
        c = this;
      do {
        if (-1 != this.tF.indexOf(c.type)) {
          a = !0;
          break;
        }
        c = nc(c);
      } while (c);
      a
        ? ("procedures_defnoreturn" == c.type && this.$i
            ? (this.Ib("VALUE"),
              J(L(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN),
              (this.$i = !1))
            : "procedures_defreturn" != c.type ||
              this.$i ||
              (this.Ib("VALUE"),
              J(K(this, "VALUE"), g.h.PROCEDURES_DEFRETURN_RETURN),
              (this.$i = !0)),
          this.Ym(null),
          this.Ub || this.oe(!0))
        : (this.Ym(g.h.PROCEDURES_IFRETURN_WARNING),
          this.Ub || pc(this) || this.oe(!1));
    }
  },
  tF: ["procedures_defnoreturn", "procedures_defreturn"],
};
g.Qf = function (a, c, d, e, f, h, k) {
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
  this.Yq = "";
  g.Qf.v.constructor.call(this, a, null, k);
  k || ((this.vo = !!h), (this.Yq = g.g.Mc(e) || ""));
  this.Nc = new g.g.ue(c, d + g.Qf.pH);
  this.hJ = d;
  this.Oh = null;
  "function" == typeof f && (this.Oh = f);
  this.ke = null;
};
g.g.object.X(g.Qf, g.kd);
g.Qf.prototype.Oj = "";
g.Qf.ma = function (a) {
  return new g.Qf(a.src, a.width, a.height, void 0, void 0, void 0, a);
};
g.Qf.pH = 1;
b = g.Qf.prototype;
b.tn = !1;
b.Zg = !1;
b.Dd = function (a) {
  g.Qf.v.Dd.call(this, a);
  this.vo = !!a.flipRtl;
  this.Yq = g.g.Mc(a.alt) || "";
};
b.$h = function () {
  this.ke = g.g.o.M(
    g.g.F.Ei,
    { height: this.hJ + "px", width: this.Nc.width + "px", alt: this.Yq },
    this.fe
  );
  this.ke.setAttributeNS(g.g.o.nf, "xlink:href", this.sb);
  this.Oh && (this.ke.style.cursor = "pointer");
};
b.Sp = function () {};
b.Uh = function (a) {
  return "string" != typeof a ? null : a;
};
b.cg = function (a) {
  this.sb = a;
  this.ke && this.ke.setAttributeNS(g.g.o.nf, "xlink:href", String(this.sb));
};
b.PB = function () {
  return this.vo;
};
b.lg = function () {
  this.Oh && this.Oh(this);
};
b.Tr = function () {
  return this.Yq;
};
g.Ve.register("field_image", g.Qf);
g.Sj = function (a, c, d) {
  g.Sj.v.constructor.call(this, a, c, d);
  this.Kp = null;
};
g.g.object.X(g.Sj, g.Rc);
g.Sj.ma = function (a) {
  var c = g.g.Mc(a.text);
  return new g.Sj(c, void 0, a);
};
b = g.Sj.prototype;
b.sy = function (a) {
  a.textContent = this.getValue().replace(/\n/g, "&#10;");
  return a;
};
b.tm = function (a) {
  this.setValue(a.textContent.replace(/&#10;/g, "\n"));
};
b.$h = function () {
  Lb(this);
  this.Kp = g.g.o.M(g.g.F.rc, { class: "blocklyEditableText" }, this.fe);
};
b.vm = function () {
  var a = this.Gd();
  if (!a) return g.kd.Gq;
  var c = a.split("\n");
  a = "";
  for (var d = 0; d < c.length; d++) {
    var e = c[d];
    e.length > this.ps && (e = e.substring(0, this.ps - 4) + "...");
    e = e.replace(/\s/g, g.kd.Gq);
    a += e;
    d !== c.length - 1 && (a += "\n");
  }
  this.I.L && (a += "\u200f");
  return a;
};
b.cl = function () {
  for (var a; (a = this.Kp.firstChild); ) this.Kp.removeChild(a);
  a = this.vm().split("\n");
  for (var c = 0, d = 0; d < a.length; d++) {
    var e = this.W().Rj + this.W().El;
    g.g.o
      .M(
        g.g.F.Qq,
        {
          class: "blocklyText blocklyMultilineText",
          x: this.W().wh,
          y: c + this.W().El,
          dy: this.W().Ot,
        },
        this.Kp
      )
      .appendChild(document.createTextNode(a[d]));
    c += e;
  }
  this.Sp();
  this.Em &&
    (this.I.L ? setTimeout(this.dl.bind(this), 0) : this.dl(),
    (a = this.Jd),
    this.gs
      ? (g.g.o.ic(a, "blocklyInvalidInput"), g.g.$.Zb(a, g.g.$.State.Dq, !1))
      : (g.g.o.Ha(a, "blocklyInvalidInput"), g.g.$.Zb(a, g.g.$.State.Dq, !0)));
};
b.Sp = function () {
  for (var a = this.Kp.childNodes, c = 0, d = 0, e = 0; e < a.length; e++) {
    var f = g.g.o.OI(a[e]);
    f > c && (c = f);
    d += this.W().Rj + (0 < e ? this.W().El : 0);
  }
  this.Db &&
    ((d += 2 * this.W().El),
    (c += 2 * this.W().wh),
    this.Db.setAttribute("width", c),
    this.Db.setAttribute("height", d));
  this.Nc.width = c;
  this.Nc.height = d;
  Pb(this);
};
b.nt = function () {
  var a = g.la.pb,
    c = bd(this.s),
    d = document.createElement("textarea");
  d.className = "blocklyHtmlInput blocklyHtmlTextAreaInput";
  d.setAttribute("spellcheck", this.Zm);
  var e = this.W().xh * c + "pt";
  a.style.fontSize = e;
  d.style.fontSize = e;
  d.style.borderRadius = g.Rc.Ly * c + "px";
  e = this.W().wh * c;
  var f = (this.W().El * c) / 2;
  d.style.padding = f + "px " + e + "px " + f + "px " + e + "px";
  e = this.W().Rj + this.W().El;
  d.style.lineHeight = e * c + "px";
  a.appendChild(d);
  d.value = d.defaultValue = String(this.sb);
  d.TD = this.sb;
  d.kx = null;
  g.g.userAgent.kz ? setTimeout(this.dl.bind(this), 0) : this.dl();
  Ve(this, d);
  return d;
};
b.nx = function (a) {
  a.keyCode !== g.g.P.Dl && g.Sj.v.nx.call(this, a);
};
g.Qc.register(
  ".blocklyHtmlTextAreaInput {,font-family: monospace;,resize: none;,overflow: hidden;,height: 100%;,text-align: left;,}".split(
    ","
  )
);
g.Ve.register("field_multilinetext", g.Sj);
g.R.xL = {};
g.ba.Text = {};
g.ba.Text.Hl = 160;
g.Ti([
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
g.R.text_getSubstring = {
  U: function () {
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
    this.ec = g.h.TEXT_GET_SUBSTRING_HELPURL;
    this.Jb("text_blocks");
    J(K(this, "STRING").kb("String"), g.h.TEXT_GET_SUBSTRING_INPUT_IN_TEXT);
    L(this, "AT1");
    L(this, "AT2");
    g.h.TEXT_GET_SUBSTRING_TAIL &&
      J(L(this, "TAIL"), g.h.TEXT_GET_SUBSTRING_TAIL);
    this.Ce(!0);
    this.Md(!0, "String");
    this.pc(1, !0);
    this.pc(2, !0);
    this.Sa(g.h.TEXT_GET_SUBSTRING_TOOLTIP);
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at1", z(this, "AT1").type == g.lb);
    a.setAttribute("at2", z(this, "AT2").type == g.lb);
    return a;
  },
  Eb: function (a) {
    var c = "true" == a.getAttribute("at1");
    a = "true" == a.getAttribute("at2");
    this.pc(1, c);
    this.pc(2, a);
  },
  pc: function (a, c) {
    this.Ib("AT" + a);
    this.Ib("ORDINAL" + a, !0);
    c
      ? (K(this, "AT" + a).kb("Number"),
        g.h.ORDINAL_NUMBER_SUFFIX &&
          J(L(this, "ORDINAL" + a), g.h.ORDINAL_NUMBER_SUFFIX))
      : L(this, "AT" + a);
    2 == a &&
      g.h.TEXT_GET_SUBSTRING_TAIL &&
      (this.Ib("TAIL", !0), J(L(this, "TAIL"), g.h.TEXT_GET_SUBSTRING_TAIL));
    var d = new g.Da(this["WHERE_OPTIONS_" + a], function (e) {
      var f = "FROM_START" == e || "FROM_END" == e;
      if (f != c) {
        var h = this.Z();
        h.pc(a, f);
        oc(h, e, "WHERE" + a);
        return null;
      }
    });
    J(z(this, "AT" + a), d, "WHERE" + a);
    1 == a &&
      (rc(this, "AT1", "AT2"),
      z(this, "ORDINAL1") && rc(this, "ORDINAL1", "AT2"));
  },
};
g.R.text_changeCase = {
  U: function () {
    var a = [
      [g.h.TEXT_CHANGECASE_OPERATOR_UPPERCASE, "UPPERCASE"],
      [g.h.TEXT_CHANGECASE_OPERATOR_LOWERCASE, "LOWERCASE"],
      [g.h.TEXT_CHANGECASE_OPERATOR_TITLECASE, "TITLECASE"],
    ];
    this.ec = g.h.TEXT_CHANGECASE_HELPURL;
    this.Jb("text_blocks");
    J(K(this, "TEXT").kb("String"), new g.Da(a), "CASE");
    this.Md(!0, "String");
    this.Sa(g.h.TEXT_CHANGECASE_TOOLTIP);
  },
};
g.R.text_trim = {
  U: function () {
    var a = [
      [g.h.TEXT_TRIM_OPERATOR_BOTH, "BOTH"],
      [g.h.TEXT_TRIM_OPERATOR_LEFT, "LEFT"],
      [g.h.TEXT_TRIM_OPERATOR_RIGHT, "RIGHT"],
    ];
    this.ec = g.h.TEXT_TRIM_HELPURL;
    this.Jb("text_blocks");
    J(K(this, "TEXT").kb("String"), new g.Da(a), "MODE");
    this.Md(!0, "String");
    this.Sa(g.h.TEXT_TRIM_TOOLTIP);
  },
};
g.R.text_print = {
  U: function () {
    qc(this, {
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
g.R.text_prompt_ext = {
  U: function () {
    var a = [
      [g.h.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
      [g.h.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"],
    ];
    this.ec = g.h.TEXT_PROMPT_HELPURL;
    this.Jb("text_blocks");
    var c = this;
    a = new g.Da(a, function (d) {
      c.og(d);
    });
    J(K(this, "TEXT"), a, "TYPE");
    this.Md(!0, "String");
    this.Sa(function () {
      return "TEXT" == C(c, "TYPE")
        ? g.h.TEXT_PROMPT_TOOLTIP_TEXT
        : g.h.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  },
  og: function (a) {
    this.O.kb("NUMBER" == a ? "Number" : "String");
  },
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("type", C(this, "TYPE"));
    return a;
  },
  Eb: function (a) {
    this.og(a.getAttribute("type"));
  },
};
g.R.text_prompt = {
  U: function () {
    this.Ld(g.ba.Text.nu);
    var a = [
        [g.h.TEXT_PROMPT_TYPE_TEXT, "TEXT"],
        [g.h.TEXT_PROMPT_TYPE_NUMBER, "NUMBER"],
      ],
      c = this;
    this.ec = g.h.TEXT_PROMPT_HELPURL;
    this.Jb("text_blocks");
    a = new g.Da(a, function (d) {
      c.og(d);
    });
    J(
      J(J(J(L(this), a, "TYPE"), this.Om(!0)), new g.Rc(""), "TEXT"),
      this.Om(!1)
    );
    this.Md(!0, "String");
    this.Sa(function () {
      return "TEXT" == C(c, "TYPE")
        ? g.h.TEXT_PROMPT_TOOLTIP_TEXT
        : g.h.TEXT_PROMPT_TOOLTIP_NUMBER;
    });
  },
  og: g.R.text_prompt_ext.og,
  Xa: g.R.text_prompt_ext.Xa,
  Eb: g.R.text_prompt_ext.Eb,
};
g.R.text_count = {
  U: function () {
    qc(this, {
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
g.R.text_replace = {
  U: function () {
    qc(this, {
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
g.R.text_reverse = {
  U: function () {
    qc(this, {
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
g.ba.Text.nu = {
  EG:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAn0lEQVQI1z3OMa5BURSF4f/cQhAKjUQhuQmFNwGJEUi0RKN5rU7FHKhpjEH3TEMtkdBSCY1EIv8r7nFX9e29V7EBAOvu7RPjwmWGH/VuF8CyN9/OAdvqIXYLvtRaNjx9mMTDyo+NjAN1HNcl9ZQ5oQMM3dgDUqDo1l8DzvwmtZN7mnD+PkmLa+4mhrxVA9fRowBWmVBhFy5gYEjKMfz9AylsaRRgGzvZAAAAAElFTkSuQmCC",
  FG:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAKCAQAAAAqJXdxAAAAqUlEQVQI1z3KvUpCcRiA8ef9E4JNHhI0aFEacm1o0BsI0Slx8wa8gLauoDnoBhq7DcfWhggONDmJJgqCPA7neJ7p934EOOKOnM8Q7PDElo/4x4lFb2DmuUjcUzS3URnGib9qaPNbuXvBO3sGPHJDRG6fGVdMSeWDP2q99FQdFrz26Gu5Tq7dFMzUvbXy8KXeAj57cOklgA+u1B5AoslLtGIHQMaCVnwDnADZIFIrXsoXrgAAAABJRU5ErkJggg==",
  GG: 12,
  DG: 12,
  pK: function (a) {
    for (var c = 0, d; (d = this.V[c]); c++)
      for (var e = 0, f; (f = d.ib[e]); e++)
        if (a == f.name) {
          jc(d, e, this.Om(!0));
          jc(d, e + 2, this.Om(!1));
          return;
        }
    console.warn('field named "' + a + '" not found in ' + ic(this));
  },
  Om: function (a) {
    a = this.L ? !a : a;
    return new g.Qf(
      a ? this.EG : this.FG,
      this.GG,
      this.DG,
      a ? "\u201c" : "\u201d"
    );
  },
};
g.ba.Text.aH = function () {
  this.Ld(g.ba.Text.nu);
  this.pK("TEXT");
};
g.ba.Text.$G = {
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("items", this.fc);
    return a;
  },
  Eb: function (a) {
    this.fc = parseInt(a.getAttribute("items"), 10);
    this.yd();
  },
  Mg: function (a) {
    var c = a.bh("text_create_join_container");
    c.Ae();
    for (var d = z(c, "STACK").connection, e = 0; e < this.fc; e++) {
      var f = a.bh("text_create_join_item");
      f.Ae();
      d.connect(f.ka);
      d = f.Y;
    }
    return c;
  },
  Hg: function (a) {
    var c = M(a, "STACK");
    for (a = []; c && !c.me(); ) a.push(c.Vp), (c = c.Y && c.Y.sa());
    for (c = 0; c < this.fc; c++) {
      var d = z(this, "ADD" + c).connection.oa;
      d && -1 == a.indexOf(d) && d.disconnect();
    }
    this.fc = a.length;
    this.yd();
    for (c = 0; c < this.fc; c++) g.Ac.al(a[c], this, "ADD" + c);
  },
  tp: function (a) {
    a = M(a, "STACK");
    for (var c = 0; a; ) {
      var d = z(this, "ADD" + c);
      a.Vp = d && d.connection.oa;
      c++;
      a = a.Y && a.Y.sa();
    }
  },
  yd: function () {
    this.fc && z(this, "EMPTY")
      ? this.Ib("EMPTY")
      : this.fc ||
        z(this, "EMPTY") ||
        J(J(L(this, "EMPTY"), this.Om(!0)), this.Om(!1));
    for (var a = 0; a < this.fc; a++)
      if (!z(this, "ADD" + a)) {
        var c = mc(K(this, "ADD" + a), g.yl);
        0 == a && J(c, g.h.TEXT_JOIN_TITLE_CREATEWITH);
      }
    for (; z(this, "ADD" + a); ) this.Ib("ADD" + a), a++;
  },
};
g.ba.Text.ZG = function () {
  this.Ld(g.ba.Text.nu);
  this.fc = 2;
  this.yd();
  this.Wm(new g.Ac(["text_create_join_item"]));
};
g.ca.register("text_append_tooltip", g.ca.er("%{BKY_TEXT_APPEND_TOOLTIP}"));
g.ba.Text.YG = function () {
  var a = this;
  this.Sa(function () {
    return g.h.TEXT_INDEXOF_TOOLTIP.replace("%1", a.u.options.Ef ? "0" : "-1");
  });
};
g.ba.Text.XG = {
  Xa: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("at", !!this.sC);
    return a;
  },
  Eb: function (a) {
    a = "false" != a.getAttribute("at");
    this.pc(a);
  },
  pc: function (a) {
    this.Ib("AT", !0);
    this.Ib("ORDINAL", !0);
    a &&
      (K(this, "AT").kb("Number"),
      g.h.ORDINAL_NUMBER_SUFFIX &&
        J(L(this, "ORDINAL"), g.h.ORDINAL_NUMBER_SUFFIX));
    g.h.TEXT_CHARAT_TAIL &&
      (this.Ib("TAIL", !0), J(L(this, "TAIL"), g.h.TEXT_CHARAT_TAIL));
    this.sC = a;
  },
};
g.ba.Text.WG = function () {
  Nb(w(this, "WHERE"), function (c) {
    c = "FROM_START" == c || "FROM_END" == c;
    c != this.sC && this.Z().pc(c);
  });
  this.pc(!0);
  var a = this;
  this.Sa(function () {
    var c = C(a, "WHERE"),
      d = g.h.TEXT_CHARAT_TOOLTIP;
    ("FROM_START" == c || "FROM_END" == c) &&
      (c =
        "FROM_START" == c
          ? g.h.LISTS_INDEX_FROM_START_TOOLTIP
          : g.h.LISTS_INDEX_FROM_END_TOOLTIP) &&
      (d += "  " + c.replace("%1", a.u.options.Ef ? "#1" : "#0"));
    return d;
  });
};
g.ca.register("text_indexOf_tooltip", g.ba.Text.YG);
g.ca.register("text_quotes", g.ba.Text.aH);
g.ca.np("text_join_mutator", g.ba.Text.$G, g.ba.Text.ZG);
g.ca.np("text_charAt_mutator", g.ba.Text.XG, g.ba.Text.WG);
g.R.KL = {};
g.ba.ga = {};
g.ba.ga.Hl = 330;
g.Ti([
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
g.ba.ga.IE = {
  Sh: function (a) {
    if (!this.Ub) {
      if ("variables_get" == this.type)
        var c = "variables_set",
          d = g.h.VARIABLES_GET_CREATE_SET;
      else (c = "variables_get"), (d = g.h.VARIABLES_SET_CREATE_GET);
      var e = { enabled: 0 < Ka(this.u) },
        f = w(this, "VAR").Gd();
      e.text = d.replace("%1", f);
      d = g.g.xml.createElement("field");
      d.setAttribute("name", "VAR");
      d.appendChild(g.g.xml.createTextNode(f));
      f = g.g.xml.createElement("block");
      f.setAttribute("type", c);
      f.appendChild(d);
      e.Aa = g.$a.gr(this, f);
      a.push(e);
    } else if (
      "variables_get" == this.type ||
      "variables_get_reporter" == this.type
    )
      (c = { text: g.h.UN, enabled: !0, Aa: g.ba.ga.JG(this) }),
        (f = w(this, "VAR").Gd()),
        (e = {
          text: g.h.fM.replace("%1", f),
          enabled: !0,
          Aa: g.ba.ga.OE(this),
        }),
        a.unshift(c),
        a.unshift(e);
  },
};
g.ba.ga.JG = function (a) {
  return function () {
    var c = a.u,
      d = w(a, "VAR").Hd();
    g.ga.Ts(c, d);
  };
};
g.ba.ga.OE = function (a) {
  return function () {
    var c = a.u,
      d = w(a, "VAR").Hd();
    c.Th(d.Qa());
    Vc(c);
  };
};
g.ca.Ps("contextMenu_variableSetterGetter", g.ba.ga.IE);
g.Generator = function (a) {
  this.qj = a;
  this.sF = new RegExp(this.Fc, "g");
};
g.Generator.Gz = "generated_function";
b = g.Generator.prototype;
b.Aq = null;
b.te = null;
b.md = null;
b.Qd = "  ";
b.xE = 60;
b.Iq = [];
b.zw = null;
function bf(a, c) {
  return c + a.replace(/(?!\n$)\n/g, "\n" + c);
}
function cf(a, c) {
  !1 === a.zw &&
    console.warn(
      "Generator init was not called before blockToCode was called."
    );
  if (!c) return "";
  if (!c.isEnabled()) return cf(a, q(c));
  if (c.me()) return cf(a, Ba(c, !1)[0]);
  var d = a[c.type];
  if ("function" != typeof d)
    throw Error(
      'Language "' +
        a.qj +
        '" does not know how to generate  code for block type "' +
        c.type +
        '".'
    );
  d = d.call(c, c);
  if (Array.isArray(d)) {
    if (!c.O)
      throw TypeError("Expecting string from statement block: " + c.type);
    return [a.Ws(c, d[0], void 0), d[1]];
  }
  if ("string" == typeof d)
    return (
      a.te && !c.Fj && (d = W(a.te, c) + d),
      a.md && !c.Fj && (d += W(a.md, c)),
      a.Ws(c, d, void 0)
    );
  if (null === d) return "";
  throw SyntaxError("Invalid code generated: " + d);
}
function X(a, c, d) {
  var e = g.j;
  if (isNaN(d)) throw TypeError("Expecting valid order from block: " + a.type);
  var f = M(a, c);
  if (!f) return "";
  c = cf(e, f);
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
    for (f = !0, h = 0; h < e.Iq.length; h++)
      if (e.Iq[h][0] == d && e.Iq[h][1] == c) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function df(a, c) {
  var d = g.j;
  a = M(a, c);
  c = cf(d, a);
  if ("string" != typeof c)
    throw TypeError("Expecting code from statement block: " + (a && a.type));
  c && (c = bf(c, d.Qd));
  return c;
}
function ef(a, c) {
  var d = g.j;
  d.Aq && (a = bf(W(d.Aq, c), d.Qd) + a);
  d.md && !c.Fj && (a = bf(W(d.md, c), d.Qd) + a);
  d.te && !c.Fj && (a += bf(W(d.te, c), d.Qd));
  return a;
}
function W(a, c) {
  c = c.id.replace(/\$/g, "$$$$");
  return a.replace(/%1/g, "'" + c + "'");
}
b.ou = "";
function ff(a, c) {
  a.ou += c + ",";
}
b.Fc = "{leCUI8hutHZI4480Dc}";
function Y(a, c) {
  var d = g.j;
  if (!d.nk[a]) {
    var e = kd(d.$b, a, g.Kn);
    d.Wv[a] = e;
    c = c.join("\n").replace(d.sF, e);
    for (var f; f != c; )
      (f = c), (c = c.replace(/^(( {2})*) {2}/gm, "$1\x00"));
    c = c.replace(/\0/g, d.Qd);
    d.nk[a] = c;
  }
  return d.Wv[a];
}
b.U = function () {};
b.Ws = function (a, c) {
  return c;
};
b.finish = function (a) {
  return a;
};
b.zD = function (a) {
  return a;
};
g.j = new g.Generator("JavaScript");
ff(
  g.j,
  "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," +
    Object.getOwnPropertyNames(g.g.global).join(",")
);
g.j.lf = 0;
g.j.EN = 1.1;
g.j.tb = 1.2;
g.j.Ka = 2;
g.j.CN = 3;
g.j.yN = 3;
g.j.uN = 4.1;
g.j.GN = 4.2;
g.j.In = 4.3;
g.j.Ql = 4.4;
g.j.FN = 4.5;
g.j.HN = 4.6;
g.j.zN = 4.7;
g.j.sN = 4.8;
g.j.AN = 5;
g.j.iu = 5.1;
g.j.Gn = 5.2;
g.j.Hn = 5.3;
g.j.Ki = 6.1;
g.j.wg = 6.2;
g.j.wN = 7;
g.j.uG = 8;
g.j.BN = 8;
g.j.DN = 8;
g.j.Kz = 9;
g.j.tN = 10;
g.j.xN = 11;
g.j.vN = 12;
g.j.fu = 13;
g.j.gu = 14;
g.j.Hq = 15;
g.j.Yj = 16;
g.j.IN = 17;
g.j.Fn = 18;
g.j.wa = 99;
g.j.Iq = [
  [g.j.Ka, g.j.tb],
  [g.j.Ka, g.j.Ka],
  [g.j.tb, g.j.tb],
  [g.j.tb, g.j.Ka],
  [g.j.Ql, g.j.Ql],
  [g.j.iu, g.j.iu],
  [g.j.wg, g.j.wg],
  [g.j.fu, g.j.fu],
  [g.j.gu, g.j.gu],
];
g.j.zw = !1;
g.j.U = function (a) {
  g.j.nk = Object.create(null);
  g.j.Wv = Object.create(null);
  g.j.$b ? g.j.$b.reset() : (g.j.$b = new g.Sd(g.j.ou));
  g.j.$b.by(a.Ua);
  for (var c = [], d = g.ga.sH(a), e = 0; e < d.length; e++)
    c.push(g.j.$b.xe(d[e], g.Sd.It));
  a = g.ga.FA(a);
  for (e = 0; e < a.length; e++) c.push(g.j.$b.xe(a[e].Qa(), g.tc));
  c.length && (g.j.nk.variables = "var " + c.join(", ") + ";");
  this.zw = !0;
};
g.j.finish = function (a) {
  var c = [],
    d;
  for (d in g.j.nk) c.push(g.j.nk[d]);
  delete g.j.nk;
  delete g.j.Wv;
  g.j.$b.reset();
  return c.join("\n\n") + "\n\n\n" + a;
};
g.j.zD = function (a) {
  return a + ";\n";
};
g.j.$k = function (a) {
  a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
  return "'" + a + "'";
};
g.j.KJ = function (a) {
  return a.split(/\n/g).map(g.j.$k).join(" + '\\n' +\n");
};
g.j.Ws = function (a, c, d) {
  var e = "";
  if (!a.O || !a.O.oa) {
    var f = a.Qe.text;
    f && ((f = g.g.yb.bE(f, g.j.xE - 3)), (e += bf(f + "\n", "// ")));
    for (var h = 0; h < a.V.length; h++)
      if (a.V[h].type == g.lb) {
        var k = a.V[h].connection.sa();
        if (k) {
          f = [];
          k = p(k, !0);
          for (var l = 0; l < k.length; l++) {
            var m = k[l].Qe.text;
            m && f.push(m);
          }
          f.length && f.push("");
          (f = f.join("\n")) && (e += bf(f, "// "));
        }
      }
  }
  a = a.Y && a.Y.sa();
  d = d ? "" : cf(g.j, a);
  return e + c + d;
};
g.j.dd = function (a, c, d, e, f) {
  d = d || 0;
  f = f || g.j.wa;
  a.u.options.Ef && d--;
  var h = a.u.options.Ef ? "1" : "0";
  a =
    0 < d
      ? X(a, c, g.j.wg) || h
      : 0 > d
      ? X(a, c, g.j.Ki) || h
      : e
      ? X(a, c, g.j.In) || h
      : X(a, c, f) || h;
  if (g.lj(a)) (a = Number(a) + d), e && (a = -a);
  else {
    if (0 < d) {
      a = a + " + " + d;
      var k = g.j.wg;
    } else 0 > d && ((a = a + " - " + -d), (k = g.j.Ki));
    e && ((a = d ? "-(" + a + ")" : "-" + a), (k = g.j.In));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
g.j.vb = {};
g.j.colour_picker = function (a) {
  return [g.j.$k(C(a, "COLOUR")), g.j.lf];
};
g.j.colour_random = function () {
  return [
    Y("colourRandom", [
      "function " + g.j.Fc + "() {",
      "  var num = Math.floor(Math.random() * Math.pow(2, 24));",
      "  return '#' + ('00000' + num.toString(16)).substr(-6);",
      "}",
    ]) + "()",
    g.j.Ka,
  ];
};
g.j.colour_rgb = function (a) {
  var c = X(a, "RED", g.j.wa) || 0,
    d = X(a, "GREEN", g.j.wa) || 0;
  a = X(a, "BLUE", g.j.wa) || 0;
  return [
    Y("colourRgb", [
      "function " + g.j.Fc + "(r, g, b) {",
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
  var c = X(a, "COLOUR1", g.j.wa) || "'#000000'",
    d = X(a, "COLOUR2", g.j.wa) || "'#000000'";
  a = X(a, "RATIO", g.j.wa) || 0.5;
  return [
    Y("colourBlend", [
      "function " + g.j.Fc + "(c1, c2, ratio) {",
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
g.j.Kw = {};
g.j.lists_create_empty = function () {
  return ["[]", g.j.lf];
};
g.j.lists_create_with = function (a) {
  for (var c = Array(a.fc), d = 0; d < a.fc; d++)
    c[d] = X(a, "ADD" + d, g.j.wa) || "null";
  return ["[" + c.join(", ") + "]", g.j.lf];
};
g.j.lists_repeat = function (a) {
  var c = Y("listsRepeat", [
      "function " + g.j.Fc + "(value, n) {",
      "  var array = [];",
      "  for (var i = 0; i < n; i++) {",
      "    array[i] = value;",
      "  }",
      "  return array;",
      "}",
    ]),
    d = X(a, "ITEM", g.j.wa) || "null";
  a = X(a, "NUM", g.j.wa) || "0";
  return [c + "(" + d + ", " + a + ")", g.j.Ka];
};
g.j.lists_length = function (a) {
  return [(X(a, "VALUE", g.j.tb) || "[]") + ".length", g.j.tb];
};
g.j.lists_isEmpty = function (a) {
  return ["!" + (X(a, "VALUE", g.j.tb) || "[]") + ".length", g.j.Ql];
};
g.j.lists_indexOf = function (a) {
  var c = "FIRST" == C(a, "END") ? "indexOf" : "lastIndexOf",
    d = X(a, "FIND", g.j.wa) || "''";
  c = (X(a, "VALUE", g.j.tb) || "[]") + "." + c + "(" + d + ")";
  return a.u.options.Ef ? [c + " + 1", g.j.wg] : [c, g.j.Ka];
};
g.j.lists_getIndex = function (a) {
  var c = C(a, "MODE") || "GET",
    d = C(a, "WHERE") || "FROM_START",
    e = X(a, "VALUE", "RANDOM" == d ? g.j.wa : g.j.tb) || "[]";
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
      a = g.j.dd(a, "AT");
      if ("GET" == c) return [e + "[" + a + "]", g.j.tb];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.Ka];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);\n";
      break;
    case "FROM_END":
      a = g.j.dd(a, "AT", 1, !0);
      if ("GET" == c) return [e + ".slice(" + a + ")[0]", g.j.Ka];
      if ("GET_REMOVE" == c) return [e + ".splice(" + a + ", 1)[0]", g.j.Ka];
      if ("REMOVE" == c) return e + ".splice(" + a + ", 1);";
      break;
    case "RANDOM":
      e =
        Y("listsGetRandomItem", [
          "function " + g.j.Fc + "(list, remove) {",
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
    var k = kd(g.j.$b, "tmpList", g.tc),
      l = "var " + k + " = " + d + ";\n";
    d = k;
    return l;
  }
  var d = X(a, "LIST", g.j.tb) || "[]",
    e = C(a, "MODE") || "GET",
    f = C(a, "WHERE") || "FROM_START",
    h = X(a, "TO", g.j.Yj) || "null";
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
      f = g.j.dd(a, "AT");
      if ("SET" == e) return d + "[" + f + "] = " + h + ";\n";
      if ("INSERT" == e) return d + ".splice(" + f + ", 0, " + h + ");\n";
      break;
    case "FROM_END":
      f = g.j.dd(a, "AT", 1, !1, g.j.Ki);
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
      f = kd(g.j.$b, "tmpX", g.tc);
      a += "var " + f + " = Math.floor(Math.random() * " + d + ".length);\n";
      if ("SET" == e) return a + (d + "[" + f + "] = " + h + ";\n");
      if ("INSERT" == e) return a + (d + ".splice(" + f + ", 0, " + h + ");\n");
  }
  throw Error("Unhandled combination (lists_setIndex).");
};
g.j.Kw.dw = function (a, c, d) {
  return "FIRST" == c
    ? "0"
    : "FROM_END" == c
    ? a + ".length - 1 - " + d
    : "LAST" == c
    ? a + ".length - 1"
    : d;
};
g.j.lists_getSublist = function (a) {
  var c = X(a, "LIST", g.j.tb) || "[]",
    d = C(a, "WHERE1"),
    e = C(a, "WHERE2");
  if ("FIRST" == d && "LAST" == e) c += ".slice(0)";
  else if (c.match(/^\w+$/) || ("FROM_END" != d && "FROM_START" == e)) {
    switch (d) {
      case "FROM_START":
        var f = g.j.dd(a, "AT1");
        break;
      case "FROM_END":
        f = g.j.dd(a, "AT1", 1, !1, g.j.Ki);
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
        a = g.j.dd(a, "AT2", 1);
        break;
      case "FROM_END":
        a = g.j.dd(a, "AT2", 0, !1, g.j.Ki);
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
    f = g.j.dd(a, "AT1");
    a = g.j.dd(a, "AT2");
    var h = g.j.Kw.dw,
      k = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd",
      };
    c =
      Y("subsequence" + k[d] + k[e], [
        "function " +
          g.j.Fc +
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
  var c = X(a, "LIST", g.j.Ka) || "[]",
    d = "1" === C(a, "DIRECTION") ? 1 : -1;
  a = C(a, "TYPE");
  var e = Y("listsGetSortCompare", [
    "function " + g.j.Fc + "(type, direction) {",
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
  var c = X(a, "INPUT", g.j.tb),
    d = X(a, "DELIM", g.j.wa) || "''";
  a = C(a, "MODE");
  if ("SPLIT" == a) c || (c = "''"), (a = "split");
  else if ("JOIN" == a) c || (c = "[]"), (a = "join");
  else throw Error("Unknown mode: " + a);
  return [c + "." + a + "(" + d + ")", g.j.Ka];
};
g.j.lists_reverse = function (a) {
  return [(X(a, "LIST", g.j.Ka) || "[]") + ".slice().reverse()", g.j.Ka];
};
g.j.xJ = {};
g.j.controls_if = function (a) {
  var c = 0,
    d = "";
  g.j.te && (d += W(g.j.te, a));
  do {
    var e = X(a, "IF" + c, g.j.wa) || "false";
    var f = df(a, "DO" + c);
    g.j.md && (f = bf(W(g.j.md, a), g.j.Qd) + f);
    d += (0 < c ? " else " : "") + "if (" + e + ") {\n" + f + "}";
    ++c;
  } while (z(a, "IF" + c));
  if (z(a, "ELSE") || g.j.md)
    (f = df(a, "ELSE")),
      g.j.md && (f = bf(W(g.j.md, a), g.j.Qd) + f),
      (d += " else {\n" + f + "}");
  return d + "\n";
};
g.j.controls_ifelse = g.j.controls_if;
g.j.logic_compare = function (a) {
  var c = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[
      C(a, "OP")
    ],
    d = "==" == c || "!=" == c ? g.j.Kz : g.j.uG,
    e = X(a, "A", d) || "0";
  a = X(a, "B", d) || "0";
  return [e + " " + c + " " + a, d];
};
g.j.logic_operation = function (a) {
  var c = "AND" == C(a, "OP") ? "&&" : "||",
    d = "&&" == c ? g.j.fu : g.j.gu,
    e = X(a, "A", d);
  a = X(a, "B", d);
  if (e || a) {
    var f = "&&" == c ? "true" : "false";
    e || (e = f);
    a || (a = f);
  } else a = e = "false";
  return [e + " " + c + " " + a, d];
};
g.j.logic_negate = function (a) {
  var c = g.j.Ql;
  return ["!" + (X(a, "BOOL", c) || "true"), c];
};
g.j.logic_boolean = function (a) {
  return ["TRUE" == C(a, "BOOL") ? "true" : "false", g.j.lf];
};
g.j.logic_null = function () {
  return ["null", g.j.lf];
};
g.j.logic_ternary = function (a) {
  var c = X(a, "IF", g.j.Hq) || "false",
    d = X(a, "THEN", g.j.Hq) || "null";
  a = X(a, "ELSE", g.j.Hq) || "null";
  return [c + " ? " + d + " : " + a, g.j.Hq];
};
g.j.zJ = {};
g.j.controls_repeat_ext = function (a) {
  var c = w(a, "TIMES")
      ? String(Number(C(a, "TIMES")))
      : X(a, "TIMES", g.j.Yj) || "0",
    d = df(a, "DO");
  d = ef(d, a);
  a = "";
  var e = kd(g.j.$b, "count", g.tc),
    f = c;
  c.match(/^\w+$/) ||
    g.lj(c) ||
    ((f = kd(g.j.$b, "repeat_end", g.tc)),
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
    d = X(a, "BOOL", c ? g.j.Ql : g.j.wa) || "false",
    e = df(a, "DO");
  e = ef(e, a);
  c && (d = "!" + d);
  return "while (" + d + ") {\n" + e + "}\n";
};
g.j.controls_for = function (a) {
  var c = g.j.$b.xe(C(a, "VAR"), g.tc),
    d = X(a, "FROM", g.j.Yj) || "0",
    e = X(a, "TO", g.j.Yj) || "0",
    f = X(a, "BY", g.j.Yj) || "1",
    h = df(a, "DO");
  h = ef(h, a);
  if (g.lj(d) && g.lj(e) && g.lj(f)) {
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
        g.lj(d) ||
        ((k = kd(g.j.$b, c + "_start", g.tc)),
        (a += "var " + k + " = " + d + ";\n")),
      (d = e),
      e.match(/^\w+$/) ||
        g.lj(e) ||
        ((d = kd(g.j.$b, c + "_end", g.tc)),
        (a += "var " + d + " = " + e + ";\n")),
      (e = kd(g.j.$b, c + "_inc", g.tc)),
      (a += "var " + e + " = "),
      (a = g.lj(f)
        ? a + (Math.abs(f) + ";\n")
        : a + ("Math.abs(" + f + ");\n")),
      (a =
        a +
        ("if (" + k + " > " + d + ") {\n") +
        (g.j.Qd + e + " = -" + e + ";\n")),
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
  var c = g.j.$b.xe(C(a, "VAR"), g.tc),
    d = X(a, "LIST", g.j.Yj) || "[]",
    e = df(a, "DO");
  e = ef(e, a);
  a = "";
  var f = d;
  d.match(/^\w+$/) ||
    ((f = kd(g.j.$b, c + "_list", g.tc)),
    (a += "var " + f + " = " + d + ";\n"));
  d = kd(g.j.$b, c + "_index", g.tc);
  e = g.j.Qd + c + " = " + f + "[" + d + "];\n" + e;
  return a + ("for (var " + d + " in " + f + ") {\n" + e + "}\n");
};
g.j.controls_flow_statements = function (a) {
  var c = "";
  g.j.te && (c += W(g.j.te, a));
  g.j.md && (c += W(g.j.md, a));
  if (g.j.te) {
    var d = g.ba.jf.nq.$B(a);
    d && !d.Fj && (c += W(g.j.te, d));
  }
  switch (C(a, "FLOW")) {
    case "BREAK":
      return c + "break;\n";
    case "CONTINUE":
      return c + "continue;\n";
  }
  throw Error("Unknown flow statement.");
};
g.j.rd = {};
g.j.math_number = function (a) {
  a = Number(C(a, "NUM"));
  return [a, 0 <= a ? g.j.lf : g.j.In];
};
g.j.math_arithmetic = function (a) {
  var c = {
      ADD: [" + ", g.j.wg],
      MINUS: [" - ", g.j.Ki],
      MULTIPLY: [" * ", g.j.iu],
      DIVIDE: [" / ", g.j.Gn],
      POWER: [null, g.j.wa],
    }[C(a, "OP")],
    d = c[0];
  c = c[1];
  var e = X(a, "A", c) || "0";
  a = X(a, "B", c) || "0";
  return d ? [e + d + a, c] : ["Math.pow(" + e + ", " + a + ")", g.j.Ka];
};
g.j.math_single = function (a) {
  var c = C(a, "OP");
  if ("NEG" == c)
    return (
      (a = X(a, "NUM", g.j.In) || "0"),
      "-" == a[0] && (a = " " + a),
      ["-" + a, g.j.In]
    );
  a =
    "SIN" == c || "COS" == c || "TAN" == c
      ? X(a, "NUM", g.j.Gn) || "0"
      : X(a, "NUM", g.j.wa) || "0";
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
  return [d, g.j.Gn];
};
g.j.math_constant = function (a) {
  return {
    PI: ["Math.PI", g.j.tb],
    E: ["Math.E", g.j.tb],
    GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", g.j.Gn],
    SQRT2: ["Math.SQRT2", g.j.tb],
    SQRT1_2: ["Math.SQRT1_2", g.j.tb],
    INFINITY: ["Infinity", g.j.lf],
  }[C(a, "CONSTANT")];
};
g.j.math_number_property = function (a) {
  var c = X(a, "NUMBER_TO_CHECK", g.j.Hn) || "0",
    d = C(a, "PROPERTY");
  if ("PRIME" == d) {
    var e =
      Y("mathIsPrime", [
        "function " + g.j.Fc + "(n) {",
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
      (a = X(a, "DIVISOR", g.j.Hn) || "0"), (e = c + " % " + a + " == 0");
  }
  return [e, g.j.Kz];
};
g.j.math_change = function (a) {
  var c = X(a, "DELTA", g.j.wg) || "0";
  a = g.j.$b.xe(C(a, "VAR"), g.tc);
  return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + c + ";\n";
};
g.j.math_round = g.j.math_single;
g.j.math_trig = g.j.math_single;
g.j.math_on_list = function (a) {
  var c = C(a, "OP");
  switch (c) {
    case "SUM":
      a = X(a, "LIST", g.j.tb) || "[]";
      a += ".reduce(function(x, y) {return x + y;})";
      break;
    case "MIN":
      a = X(a, "LIST", g.j.wa) || "[]";
      a = "Math.min.apply(null, " + a + ")";
      break;
    case "MAX":
      a = X(a, "LIST", g.j.wa) || "[]";
      a = "Math.max.apply(null, " + a + ")";
      break;
    case "AVERAGE":
      c = Y("mathMean", [
        "function " + g.j.Fc + "(myList) {",
        "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;",
        "}",
      ]);
      a = X(a, "LIST", g.j.wa) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MEDIAN":
      c = Y("mathMedian", [
        "function " + g.j.Fc + "(myList) {",
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
      a = X(a, "LIST", g.j.wa) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MODE":
      c = Y("mathModes", [
        "function " + g.j.Fc + "(values) {",
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
      a = X(a, "LIST", g.j.wa) || "[]";
      a = c + "(" + a + ")";
      break;
    case "STD_DEV":
      c = Y("mathStandardDeviation", [
        "function " + g.j.Fc + "(numbers) {",
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
      a = X(a, "LIST", g.j.wa) || "[]";
      a = c + "(" + a + ")";
      break;
    case "RANDOM":
      c = Y("mathRandomList", [
        "function " + g.j.Fc + "(list) {",
        "  var x = Math.floor(Math.random() * list.length);",
        "  return list[x];",
        "}",
      ]);
      a = X(a, "LIST", g.j.wa) || "[]";
      a = c + "(" + a + ")";
      break;
    default:
      throw Error("Unknown operator: " + c);
  }
  return [a, g.j.Ka];
};
g.j.math_modulo = function (a) {
  var c = X(a, "DIVIDEND", g.j.Hn) || "0";
  a = X(a, "DIVISOR", g.j.Hn) || "0";
  return [c + " % " + a, g.j.Hn];
};
g.j.math_constrain = function (a) {
  var c = X(a, "VALUE", g.j.wa) || "0",
    d = X(a, "LOW", g.j.wa) || "0";
  a = X(a, "HIGH", g.j.wa) || "Infinity";
  return ["Math.min(Math.max(" + c + ", " + d + "), " + a + ")", g.j.Ka];
};
g.j.math_random_int = function (a) {
  var c = X(a, "FROM", g.j.wa) || "0";
  a = X(a, "TO", g.j.wa) || "0";
  return [
    Y("mathRandomInt", [
      "function " + g.j.Fc + "(a, b) {",
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
  var c = X(a, "X", g.j.wa) || "0";
  return [
    "Math.atan2(" + (X(a, "Y", g.j.wa) || "0") + ", " + c + ") / Math.PI * 180",
    g.j.Gn,
  ];
};
g.j.oK = {};
g.j.procedures_defreturn = function (a) {
  var c = g.j.$b.xe(C(a, "NAME"), g.Kn),
    d = "";
  g.j.te && (d += W(g.j.te, a));
  g.j.md && (d += W(g.j.md, a));
  d && (d = bf(d, g.j.Qd));
  var e = "";
  g.j.Aq && (e = bf(W(g.j.Aq, a), g.j.Qd));
  var f = df(a, "STACK"),
    h = X(a, "RETURN", g.j.wa) || "",
    k = "";
  f && h && (k = d);
  h && (h = g.j.Qd + "return " + h + ";\n");
  for (var l = [], m = a.Zh(), n = 0; n < m.length; n++)
    l[n] = g.j.$b.xe(m[n], g.tc);
  d = "function " + c + "(" + l.join(", ") + ") {\n" + d + e + f + k + h + "}";
  d = g.j.Ws(a, d);
  g.j.nk["%" + c] = d;
  return null;
};
g.j.procedures_defnoreturn = g.j.procedures_defreturn;
g.j.procedures_callreturn = function (a) {
  for (
    var c = g.j.$b.xe(C(a, "NAME"), g.Kn), d = [], e = a.Zh(), f = 0;
    f < e.length;
    f++
  )
    d[f] = X(a, "ARG" + f, g.j.wa) || "null";
  return [c + "(" + d.join(", ") + ")", g.j.Ka];
};
g.j.procedures_callnoreturn = function (a) {
  return g.j.procedures_callreturn(a)[0] + ";\n";
};
g.j.procedures_ifreturn = function (a) {
  var c = "if (" + (X(a, "CONDITION", g.j.wa) || "false") + ") {\n";
  g.j.md && (c += bf(W(g.j.md, a), g.j.Qd));
  a.$i
    ? ((a = X(a, "VALUE", g.j.wa) || "null"),
      (c += g.j.Qd + "return " + a + ";\n"))
    : (c += g.j.Qd + "return;\n");
  return c + "}\n";
};
g.j.xL = {};
g.j.text = function (a) {
  return [g.j.$k(C(a, "TEXT")), g.j.lf];
};
g.j.text_multiline = function (a) {
  a = g.j.KJ(C(a, "TEXT"));
  return [a, -1 != a.indexOf("+") ? g.j.wg : g.j.lf];
};
g.j.text.sm = function (a) {
  return g.j.text.sm.tL.test(a) ? [a, g.j.lf] : ["String(" + a + ")", g.j.Ka];
};
g.j.text.sm.tL = /^\s*'([^']|\\')*'\s*$/;
g.j.text_join = function (a) {
  switch (a.fc) {
    case 0:
      return ["''", g.j.lf];
    case 1:
      return (a = X(a, "ADD0", g.j.wa) || "''"), g.j.text.sm(a);
    case 2:
      var c = X(a, "ADD0", g.j.wa) || "''";
      a = X(a, "ADD1", g.j.wa) || "''";
      a = g.j.text.sm(c)[0] + " + " + g.j.text.sm(a)[0];
      return [a, g.j.wg];
    default:
      c = Array(a.fc);
      for (var d = 0; d < a.fc; d++) c[d] = X(a, "ADD" + d, g.j.wa) || "''";
      a = "[" + c.join(",") + "].join('')";
      return [a, g.j.Ka];
  }
};
g.j.text_append = function (a) {
  var c = g.j.$b.xe(C(a, "VAR"), g.tc);
  a = X(a, "TEXT", g.j.wa) || "''";
  return c + " += " + g.j.text.sm(a)[0] + ";\n";
};
g.j.text_length = function (a) {
  return [(X(a, "VALUE", g.j.tb) || "''") + ".length", g.j.tb];
};
g.j.text_isEmpty = function (a) {
  return ["!" + (X(a, "VALUE", g.j.tb) || "''") + ".length", g.j.Ql];
};
g.j.text_indexOf = function (a) {
  var c = "FIRST" == C(a, "END") ? "indexOf" : "lastIndexOf",
    d = X(a, "FIND", g.j.wa) || "''";
  c = (X(a, "VALUE", g.j.tb) || "''") + "." + c + "(" + d + ")";
  return a.u.options.Ef ? [c + " + 1", g.j.wg] : [c, g.j.Ka];
};
g.j.text_charAt = function (a) {
  var c = C(a, "WHERE") || "FROM_START",
    d = X(a, "VALUE", "RANDOM" == c ? g.j.wa : g.j.tb) || "''";
  switch (c) {
    case "FIRST":
      return [d + ".charAt(0)", g.j.Ka];
    case "LAST":
      return [d + ".slice(-1)", g.j.Ka];
    case "FROM_START":
      return (a = g.j.dd(a, "AT")), [d + ".charAt(" + a + ")", g.j.Ka];
    case "FROM_END":
      return (
        (a = g.j.dd(a, "AT", 1, !0)),
        [d + ".slice(" + a + ").charAt(0)", g.j.Ka]
      );
    case "RANDOM":
      return (
        (d =
          Y("textRandomLetter", [
            "function " + g.j.Fc + "(text) {",
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
g.j.text.dw = function (a, c, d) {
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
    f = X(a, "STRING", e ? g.j.tb : g.j.wa) || "''";
  if ("FIRST" == c && "LAST" == d) return [f, g.j.wa];
  if (f.match(/^'?\w+'?$/) || e) {
    switch (c) {
      case "FROM_START":
        e = g.j.dd(a, "AT1");
        break;
      case "FROM_END":
        e = g.j.dd(a, "AT1", 1, !1, g.j.Ki);
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
        a = g.j.dd(a, "AT2", 1);
        break;
      case "FROM_END":
        a = g.j.dd(a, "AT2", 0, !1, g.j.Ki);
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
    e = g.j.dd(a, "AT1");
    a = g.j.dd(a, "AT2");
    var h = g.j.text.dw,
      k = {
        FIRST: "First",
        LAST: "Last",
        FROM_START: "FromStart",
        FROM_END: "FromEnd",
      };
    c =
      Y("subsequence" + k[c] + k[d], [
        "function " +
          g.j.Fc +
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
  a = X(a, "TEXT", c ? g.j.tb : g.j.wa) || "''";
  return [
    c
      ? a + c
      : Y("textToTitleCase", [
          "function " + g.j.Fc + "(str) {",
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
  return [(X(a, "TEXT", g.j.tb) || "''") + c, g.j.Ka];
};
g.j.text_print = function (a) {
  return "window.alert(" + (X(a, "TEXT", g.j.wa) || "''") + ");\n";
};
g.j.text_prompt_ext = function (a) {
  var c =
    "window.prompt(" +
    (w(a, "TEXT") ? g.j.$k(C(a, "TEXT")) : X(a, "TEXT", g.j.wa) || "''") +
    ")";
  "NUMBER" == C(a, "TYPE") && (c = "Number(" + c + ")");
  return [c, g.j.Ka];
};
g.j.text_prompt = g.j.text_prompt_ext;
g.j.text_count = function (a) {
  var c = X(a, "TEXT", g.j.wa) || "''";
  a = X(a, "SUB", g.j.wa) || "''";
  return [
    Y("textCount", [
      "function " + g.j.Fc + "(haystack, needle) {",
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
  var c = X(a, "TEXT", g.j.wa) || "''",
    d = X(a, "FROM", g.j.wa) || "''";
  a = X(a, "TO", g.j.wa) || "''";
  return [
    Y("textReplace", [
      "function " + g.j.Fc + "(haystack, needle, replacement) {",
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
    (X(a, "TEXT", g.j.tb) || "''") + ".split('').reverse().join('')",
    g.j.Ka,
  ];
};
g.j.KL = {};
g.j.variables_get = function (a) {
  return [g.j.$b.xe(C(a, "VAR"), g.tc), g.j.lf];
};
g.j.variables_set = function (a) {
  var c = X(a, "VALUE", g.j.Yj) || "0";
  return g.j.$b.xe(C(a, "VAR"), g.tc) + " = " + c + ";\n";
};
g.R.turtle_move = {
  U: function () {
    var a = [
      [O("Turtle_moveForward"), "moveForward"],
      [O("Turtle_moveBackward"), "moveBackward"],
    ];
    this.vd(160);
    J(K(this, "VALUE").kb("Number"), new g.Da(a), "DIR");
    this.Yc(!0);
    this.Xc(!0);
    this.Sa(O("Turtle_moveTooltip"));
  },
};
g.j.turtle_move = function (a) {
  var c = X(a, "VALUE", g.j.Fn) || "0";
  return C(a, "DIR") + "(" + c + ", 'block_id_" + a.id + "');\n";
};
g.R.turtle_move_internal = {
  U: function () {
    var a = [
      [O("Turtle_moveForward"), "moveForward"],
      [O("Turtle_moveBackward"), "moveBackward"],
    ];
    this.vd(160);
    J(
      J(L(this), new g.Da(a), "DIR"),
      new g.Da([
        ["20", "20"],
        ["50", "50"],
        ["100", "100"],
        ["150", "150"],
      ]),
      "VALUE"
    );
    this.Yc(!0);
    this.Xc(!0);
    this.Sa(O("Turtle_moveTooltip"));
  },
};
g.j.turtle_move_internal = function (a) {
  var c = Number(C(a, "VALUE"));
  return C(a, "DIR") + "(" + c + ", 'block_id_" + a.id + "');\n";
};
g.R.turtle_turn = {
  U: function () {
    var a = [
      [O("Turtle_turnRight"), "turnRight"],
      [O("Turtle_turnLeft"), "turnLeft"],
    ];
    a[0][0] += " \u21bb";
    a[1][0] += " \u21ba";
    this.vd(160);
    J(K(this, "VALUE").kb("Number"), new g.Da(a), "DIR");
    this.Yc(!0);
    this.Xc(!0);
    this.Sa(O("Turtle_turnTooltip"));
  },
};
g.j.turtle_turn = function (a) {
  var c = X(a, "VALUE", g.j.Fn) || "0";
  return C(a, "DIR") + "(" + c + ", 'block_id_" + a.id + "');\n";
};
g.R.turtle_turn_internal = {
  U: function () {
    var a = [
      [O("Turtle_turnRight"), "turnRight"],
      [O("Turtle_turnLeft"), "turnLeft"],
    ];
    a[0][0] += " \u21bb";
    a[1][0] += " \u21ba";
    this.vd(160);
    J(
      J(L(this), new g.Da(a), "DIR"),
      new g.Da([
        ["1\u00b0", "1"],
        ["45\u00b0", "45"],
        ["72\u00b0", "72"],
        ["90\u00b0", "90"],
        ["120\u00b0", "120"],
        ["144\u00b0", "144"],
      ]),
      "VALUE"
    );
    this.Yc(!0);
    this.Xc(!0);
    this.Sa(O("Turtle_turnTooltip"));
  },
};
g.j.turtle_turn_internal = function (a) {
  var c = Number(C(a, "VALUE"));
  return C(a, "DIR") + "(" + c + ", 'block_id_" + a.id + "');\n";
};
g.R.turtle_width = {
  U: function () {
    this.vd(160);
    J(K(this, "WIDTH").kb("Number"), O("Turtle_setWidth"));
    this.Yc(!0);
    this.Xc(!0);
    this.Sa(O("Turtle_widthTooltip"));
  },
};
g.j.turtle_width = function (a) {
  return (
    "penWidth(" +
    (X(a, "WIDTH", g.j.Fn) || "1") +
    ", 'block_id_" +
    a.id +
    "');\n"
  );
};
g.R.turtle_pen = {
  U: function () {
    qc(this, {
      message0: "%1",
      args0: [
        {
          type: "field_dropdown",
          name: "PEN",
          options: [
            [O("Turtle_penUp"), "penUp"],
            [O("Turtle_penDown"), "penDown"],
          ],
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 160,
      tooltip: O("Turtle_penTooltip"),
    });
  },
};
g.j.turtle_pen = function (a) {
  return C(a, "PEN") + "('block_id_" + a.id + "');\n";
};
g.R.turtle_colour = {
  U: function () {
    this.vd(g.h.COLOUR_HUE);
    J(K(this, "COLOUR").kb("Colour"), O("Turtle_setColour"));
    this.Yc(!0);
    this.Xc(!0);
    this.Sa(O("Turtle_colourTooltip"));
  },
};
g.j.turtle_colour = function (a) {
  return (
    "penColour(" +
    (X(a, "COLOUR", g.j.Fn) || "'#000000'") +
    ", 'block_id_" +
    a.id +
    "');\n"
  );
};
g.R.turtle_colour_internal = {
  U: function () {
    this.vd(g.h.COLOUR_HUE);
    J(J(L(this), O("Turtle_setColour")), new g.lc("#ff0000"), "COLOUR");
    this.Yc(!0);
    this.Xc(!0);
    this.Sa(O("Turtle_colourTooltip"));
  },
};
g.j.turtle_colour_internal = function (a) {
  return (
    "penColour(" + g.j.$k(C(a, "COLOUR")) + ", 'block_id_" + a.id + "');\n"
  );
};
g.R.turtle_visibility = {
  U: function () {
    qc(this, {
      message0: "%1",
      args0: [
        {
          type: "field_dropdown",
          name: "VISIBILITY",
          options: [
            [O("Turtle_hideTurtle"), "hideTurtle"],
            [O("Turtle_showTurtle"), "showTurtle"],
          ],
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: 160,
      tooltip: O("Turtle_turtleVisibilityTooltip"),
    });
  },
};
g.j.turtle_visibility = function (a) {
  return C(a, "VISIBILITY") + "('block_id_" + a.id + "');\n";
};
g.R.turtle_print = {
  U: function () {
    this.ec = O("Turtle_printHelpUrl");
    this.vd(160);
    J(K(this, "TEXT"), O("Turtle_print"));
    this.Yc(!0);
    this.Xc(!0);
    this.Sa(O("Turtle_printTooltip"));
  },
};
g.j.turtle_print = function (a) {
  return (
    "print(" +
    String(X(a, "TEXT", g.j.Fn) || "''") +
    ", 'block_id_" +
    a.id +
    "');\n"
  );
};
g.R.turtle_font = {
  U: function () {
    var a = [
      [O("Turtle_fontNormal"), "normal"],
      [O("Turtle_fontItalic"), "italic"],
      [O("Turtle_fontBold"), "bold"],
    ];
    this.ec = O("Turtle_fontHelpUrl");
    this.vd(160);
    J(
      J(L(this), O("Turtle_font")),
      new g.Da([
        ["Arial", "Arial"],
        ["Courier New", "Courier New"],
        ["Georgia", "Georgia"],
        ["Impact", "Impact"],
        ["Times New Roman", "Times New Roman"],
        ["Trebuchet MS", "Trebuchet MS"],
        ["Verdana", "Verdana"],
      ]),
      "FONT"
    );
    J(J(L(this), O("Turtle_fontSize")), new g.He(18, 1, 1e3), "FONTSIZE");
    J(L(this), new g.Da(a), "FONTSTYLE");
    this.Yc(!0);
    this.Xc(!0);
    this.Sa(O("Turtle_fontTooltip"));
  },
};
g.j.turtle_font = function (a) {
  var c = g.j.$k(C(a, "FONT")),
    d = Number(C(a, "FONTSIZE")),
    e = g.j.$k(C(a, "FONTSTYLE"));
  return "font(" + c + "," + d + "," + e + ", 'block_id_" + a.id + "');\n";
};
g.R.turtle_repeat_internal = {
  U: function () {
    qc(this, {
      message0: g.h.CONTROLS_REPEAT_TITLE,
      args0: [
        {
          type: "field_dropdown",
          name: "TIMES",
          options: [
            ["3", "3"],
            ["4", "4"],
            ["5", "5"],
            ["360", "360"],
          ],
        },
      ],
      previousStatement: null,
      nextStatement: null,
      colour: g.h.LOOPS_HUE,
      tooltip: g.h.CONTROLS_REPEAT_TOOLTIP,
      helpUrl: g.h.CONTROLS_REPEAT_HELPURL,
    });
    J(this.Yf(g.gb, "DO"), g.h.CONTROLS_REPEAT_INPUT_DO);
  },
};
g.j.turtle_repeat_internal = g.j.controls_repeat;
var gf = gf || {};
function hf(a, c) {
  function d() {}
  d.prototype = c.prototype;
  a.v = c.prototype;
  a.prototype = new d();
  a.prototype.constructor = a;
  a.nO = function (e, f, h) {
    return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2));
  };
}
if (!jf) {
  var jf,
    kf = "";
  "undefined" !== typeof navigator &&
    navigator &&
    "string" == typeof navigator.userAgent &&
    (kf = navigator.userAgent);
  var lf = 0 == kf.indexOf("Opera");
  jf = {
    GO: { HM: "ScriptEngine" in window },
    rN: lf,
    gf: !lf && -1 != kf.indexOf("MSIE"),
    sA: !lf && -1 != kf.indexOf("WebKit"),
  };
}
if (!mf) var mf = {};
if (!nf) var nf = {};
if (!of) var of = {};
if (!pf) var pf = {};
if (!qf) var qf = {};
if (!rf) var rf = {};
var sf = gf.LE ? { MO: !0 } : {},
  tf = gf.LE ? { NO: !0 } : {};
function uf() {
  throw Error("Do not instantiate directly");
}
uf.prototype.aB = null;
uf.prototype.toString = function () {
  return this.content;
};
function vf(a) {
  if (null != a)
    switch (a.aB) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function wf() {
  uf.call(this);
}
hf(wf, uf);
wf.prototype.bB = sf;
function Z(a) {
  return null != a && a.bB === sf
    ? a
    : xf(String(String(a)).replace(yf, zf), vf(a));
}
var xf = (function (a) {
    function c() {}
    c.prototype = a.prototype;
    return function (d, e) {
      var f = new c();
      f.content = String(d);
      void 0 !== e && (f.aB = e);
      return f;
    };
  })(wf),
  Af = {
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
function zf(a) {
  return Af[a];
}
var yf = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Bf() {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
}
function Cf() {
  var a = nd,
    c = N,
    d = 10,
    e = pd,
    f = "Turtle",
    h = "",
    k = !0,
    l = !0,
    m = "";
  f =
    '<table width="100%"><tr><td><h1><span id="title">' +
    ((e
      ? '<a href="index.html?lang=' + Z(a) + '">'
      : '<a href="./?lang=' + Z(a) + '">') +
      "Codekid</a> : " +
      Z(f) +
      "</span>");
  if (c) {
    h = "" + (h ? Z(h) : "");
    for (var n = " &nbsp; ", u = d + 1, v = 1; v < u; v++) {
      var x = "?lang=" + Z(a) + "&level=" + Z(v) + (h ? "&" + Z(h) : "");
      n +=
        " " +
        (v == c
          ? '<span class="level_number level_done" id="level' +
            Z(v) +
            '">' +
            Z(v) +
            "</span>"
          : v == d
          ? '<a class="level_number" id="level' +
            Z(v) +
            '" href="' +
            Z(x) +
            '">' +
            Z(v) +
            "</a>"
          : '<a class="level_dot" id="level' +
            Z(v) +
            '" href="' +
            Z(x) +
            '"></a>');
    }
    d = n;
  } else d = "";
  m = m ? "&nbsp;" + (null != m && m.bB === tf ? "zSoyz" : m) : "";
  return (
    '<div style="display: none"><span id="Games_name">Codekid</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Turtle_moveTooltip">Moves the turtle forward or backward by the specified amount.</span><span id="Turtle_moveForward">move forward by</span><span id="Turtle_moveBackward">move backward by</span><span id="Turtle_turnTooltip">Turns the turtle left or right by the specified number of degrees.</span><span id="Turtle_turnRight">turn right by</span><span id="Turtle_turnLeft">turn left by</span><span id="Turtle_widthTooltip">Changes the width of the pen.</span><span id="Turtle_setWidth">set width to</span><span id="Turtle_colourTooltip">Changes the colour of the pen.</span><span id="Turtle_setColour">set colour to</span><span id="Turtle_penTooltip">Lifts or lowers the pen, to stop or start drawing.</span><span id="Turtle_penUp">pen up</span><span id="Turtle_penDown">pen down</span><span id="Turtle_turtleVisibilityTooltip">Makes the turtle (circle and arrow) visible or invisible.</span><span id="Turtle_hideTurtle">hide turtle</span><span id="Turtle_showTurtle">show turtle</span><span id="Turtle_printHelpUrl">https://en.wikipedia.org/wiki/Printing</span><span id="Turtle_printTooltip">Draws text in the turtle\'s direction at its location.</span><span id="Turtle_print">print</span><span id="Turtle_fontHelpUrl">https://en.wikipedia.org/wiki/Font</span><span id="Turtle_fontTooltip">Sets the font used by the print block.</span><span id="Turtle_font">font</span><span id="Turtle_fontSize">font size</span><span id="Turtle_fontNormal">normal</span><span id="Turtle_fontBold">bold</span><span id="Turtle_fontItalic">italic</span><span id="Turtle_submitDisabled">Run your program until it stops. Then you may submit your drawing to the gallery.</span></div>' +
    (f +
      d +
      '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' +
      (k
        ? '&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>'
        : "") +
      (l ? '&nbsp;<button id="helpButton">Help</button>' : "") +
      m +
      '</td></tr></table><div id="visualization"><canvas id="scratch" width="400" height="400" style="display: none"></canvas><canvas id="answer" width="400" height="400" style="display: none"></canvas><canvas id="display" width="400" height="400"></canvas></div><table style="padding-top: 1em;"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><svg id="slider" xmlns="http://www.w3.org/2000/svg" xmlns:svg="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="150" height="50">\x3c!-- Slow icon. --\x3e<clipPath id="slowClipPath"><rect width=26 height=12 x=5 y=14 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=-21 y=-10 clip-path="url(#slowClipPath)" />\x3c!-- Fast icon. --\x3e<clipPath id="fastClipPath"><rect width=26 height=16 x=120 y=10 /></clipPath><image xlink:href="common/icons.png" height=63 width=84 x=120 y=-11 clip-path="url(#fastClipPath)" /></svg></td><td style="width: 15px;"><img id="spinner" style="visibility: hidden;" src="common/loading.gif" height=15 width=15></td><td style="width: 190px; text-align: center"><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table>') +
    (10 != c || e
      ? ""
      : '<table style="padding-top: 1em; width: 400px;"><tr><td style="text-align: center;"><form action="/gallery" target="turtle-gallery"><input type="hidden" name="app" value="turtle"><input type="hidden" name="lang" value="' +
        Z(a) +
        '"><button type="submit" title="Open the gallery of drawings."><img src="common/1x1.gif" class="gallery icon21"> See Gallery</button></form></td><td style="text-align: center;"><button id="submitButton" title="Submit your drawing to the gallery."><img src="common/1x1.gif" class="camera icon21"> Submit to Gallery</button></td></tr></table><div id="galleryDialog" class="dialogHiddenContent"><form id="galleryForm" action="/gallery-api/submit" method="post" onsubmit="return false"><header>Submit your drawing to the gallery.</header><canvas id="thumbnail" width="200" height="200"></canvas><input type="hidden" name="app" value="turtle"><input id="galleryThumb" type="hidden" name="thumb"><input id="galleryXml" type="hidden" name="xml"><div>Title: <input id="galleryTitle" type="text" name="title" required></div><div class="farSide"><button id="galleryCancel" type="button">Cancel</button><button id="galleryOk" class="secondary" type="submit">OK</button></div></form></div>') +
    ('<xml id="toolbox" xmlns="https://developers.google.com/blockly/xml">' +
      (10 == c
        ? '<category name="Turtle"><block type="turtle_move"><value name="VALUE"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="turtle_turn"><value name="VALUE"><shadow type="math_number"><field name="NUM">90</field></shadow></value></block><block type="turtle_width"><value name="WIDTH"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="turtle_pen"></block><block type="turtle_visibility"></block><block type="turtle_print"><value name="TEXT"><shadow type="text"></shadow></value></block><block type="turtle_font"></block></category><category name="Colour"><block type="turtle_colour"><value name="COLOUR"><shadow type="colour_picker"></shadow></value></block><block type="colour_picker"></block><block type="colour_random"></block><block type="colour_rgb"><value name="RED"><shadow type="math_number"><field name="NUM">100</field></shadow></value><value name="GREEN"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="BLUE"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="colour_blend"><value name="COLOUR1"><shadow type="colour_picker"><field name="COLOUR">#ff0000</field></shadow></value><value name="COLOUR2"><shadow type="colour_picker"><field name="COLOUR">#3333ff</field></shadow></value><value name="RATIO"><shadow type="math_number"><field name="NUM">0.5</field></shadow></value></block></category><category name="Logic"><block type="controls_if"></block><block type="logic_compare"></block><block type="logic_operation"></block><block type="logic_negate"></block><block type="logic_boolean"></block><block type="logic_ternary"></block></category><category name="Loops"><block type="controls_repeat_ext"><value name="TIMES"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="controls_whileUntil"></block><block type="controls_for"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">10</field></shadow></value><value name="BY"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="controls_flow_statements"></block></category><category name="Math"><block type="math_number"></block><block type="math_arithmetic"><value name="A"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="B"><shadow type="math_number"><field name="NUM">1</field></shadow></value></block><block type="math_single"><value name="NUM"><shadow type="math_number"><field name="NUM">9</field></shadow></value></block><block type="math_trig"><value name="NUM"><shadow type="math_number"><field name="NUM">45</field></shadow></value></block><block type="math_constant"></block><block type="math_number_property"><value name="NUMBER_TO_CHECK"><shadow type="math_number"><field name="NUM">0</field></shadow></value></block><block type="math_round"><value name="NUM"><shadow type="math_number"><field name="NUM">3.1</field></shadow></value></block><block type="math_modulo"><value name="DIVIDEND"><shadow type="math_number"><field name="NUM">64</field></shadow></value><value name="DIVISOR"><shadow type="math_number"><field name="NUM">10</field></shadow></value></block><block type="math_constrain"><value name="VALUE"><shadow type="math_number"><field name="NUM">50</field></shadow></value><value name="LOW"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="HIGH"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_int"><value name="FROM"><shadow type="math_number"><field name="NUM">1</field></shadow></value><value name="TO"><shadow type="math_number"><field name="NUM">100</field></shadow></value></block><block type="math_random_float"></block></category><category name="Lists"><block type="lists_create_with"><mutation items="0"></mutation></block><block type="lists_create_with"></block><block type="lists_repeat"><value name="NUM"><shadow type="math_number"><field name="NUM">5</field></shadow></value></block><block type="lists_length"></block><block type="lists_isEmpty"></block><block type="lists_indexOf"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getIndex"><value name="VALUE"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_setIndex"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_getSublist"><value name="LIST"><block type="variables_get"><field name="VAR">list</field></block></value></block><block type="lists_sort"></block><block type="lists_reverse"></block></category><sep></sep><category name="Variables" custom="VARIABLE"></category><category name="Functions" custom="PROCEDURE"></category>'
        : '<category name="Turtle"><block type="turtle_move_internal"><field name="VALUE">100</field></block><block type="turtle_turn_internal"><field name="VALUE">90</field></block>' +
          (3 < c ? '<block type="turtle_pen"></block>' : "") +
          "</category>" +
          (2 < c
            ? '<category name="Colour"><block type="turtle_colour_internal"></block></category>'
            : "") +
          '<category name="Loops"><block type="turtle_repeat_internal"><field name="TIMES">4</field></block></category>') +
      '</xml><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>') +
    (Bf() + "</div>") +
    (4 > c
      ? '<div id="helpUseLoop" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">Your solution works, but you can do better. ' +
        (3 > c
          ? "Draw the shape with just three blocks."
          : "Draw the star with just four blocks.") +
        "</div>" +
        Bf() +
        "</div>"
      : "") +
    '<div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">' +
    (1 == c
      ? 'Create a program that draws a square.<br><img src="turtle/square.gif" height=146 width=146 style="margin-bottom: -50px">'
      : 2 == c
      ? "Change your program to draw a pentagon instead of a square."
      : 3 == c
      ? 'There\'s a new block that allows you to change the colour:<div id="sampleHelp3" class="readonly"></div>Draw a yellow star.'
      : 4 == c
      ? 'There\'s a new block that allows you to lift your pen off the paper when you move:<div id="sampleHelp4" class="readonly"></div>Draw a small yellow star, then draw a line above it.'
      : 5 == c
      ? "Instead of one star, can you draw four stars arranged in a square?"
      : 6 == c
      ? "Draw three yellow stars, and one white line."
      : 7 == c
      ? "Draw the stars, then draw four white lines."
      : 8 == c
      ? "Drawing 360 white lines will look like the full moon."
      : 9 == c
      ? "Can you add a black circle so that the moon becomes a crescent?"
      : 10 == c
      ? "Draw anything you want. You've got a huge number of new blocks you can explore. Have fun!" +
        (e
          ? ""
          : '<br><br>Use the "See Gallery" button to see what other people have drawn. If you draw something interesting, use the "Submit to Gallery" button to publish it.')
      : "") +
    "</div>" +
    Bf() +
    "</div>" +
    (1 == c
      ? '<div id="helpToolbox" class="dialogHiddenContent"><div><img src="turtle/help_left.png" class="mirrorImg" height=23 width=64></div>Choose a category to see the blocks.</div>'
      : "")
  );
}
var xd = "turtle",
  Df = [],
  Ef = 0,
  Ff = null,
  Gf = !0,
  Hf = !1;
window.addEventListener("load", function () {
  function a() {
    d.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
    d.style.left = c ? "10px" : "420px";
    d.style.width = window.innerWidth - 440 + "px";
  }
  document.body.innerHTML = Cf();
  ae();
  var c = -1 != md.indexOf(nd),
    d = document.getElementById("blockly"),
    e = document.getElementById("visualization");
  window.addEventListener("scroll", function () {
    a(null);
    g.dn(A);
  });
  window.addEventListener("resize", a);
  a(null);
  10 > N &&
    ((g.lc.kq = 3),
    (g.lc.jq = "#ff0000 #ffcc33 #ffff00 #009900 #3333ff #cc33cc #ffffff #999999 #000000".split(
      " "
    )));
  he({
    rtl: c,
    trashcan: !0,
    zoom: 10 == N ? { controls: !0, wheel: !0 } : null,
  });
  ff(
    g.j,
    "moveForward,moveBackward,turnRight,turnLeft,penUp,penDown,penWidth,penColour,hideTurtle,showTurtle,print,font"
  );
  document.getElementById("submitButton") && yd("submitButton", If);
  var f = document.getElementById("slider");
  He = new we(f);
  ee();
  Q = document.getElementById("display").getContext("2d");
  Ie = document.getElementById("answer").getContext("2d");
  R = document.getElementById("scratch").getContext("2d");
  Jf();
  Ne();
  Ie.globalCompositeOperation = "copy";
  Ie.drawImage(R.canvas, 0, 0);
  Ie.globalCompositeOperation = "source-over";
  Jf();
  yd("runButton", Kf);
  yd("resetButton", Lf);
  A.Dg.load(["turtle/win.mp3", "turtle/win.ogg"], "win");
  pe();
  qe();
  yd("helpButton", Mf);
  2 > location.hash.length &&
    !vd(N) &&
    (setTimeout(Mf, 1e3), 9 == N && setTimeout(P.AA, 3e5));
  1 == N && D(A, Nf);
});
function fe(a) {
  for (var c = (a = g.S.Ee(a)); c; ) {
    if ("block" == c.nodeName.toLowerCase()) {
      for (
        var d = c.getAttribute("type"), e = c.lastChild;
        e && "field" != e.nodeName.toLowerCase();

      )
        e = e.previousSibling;
      var f = e && e.getAttribute("name");
      if ("turtle_colour_internal" == d && "COLOUR" == f) {
        c.setAttribute("type", "turtle_colour");
        c.removeChild(e);
        var h = document.createElement("value");
        h.setAttribute("name", "COLOUR");
        c.appendChild(h);
        var k = document.createElement("shadow");
        k.setAttribute("type", "colour_picker");
        h.appendChild(k);
        k.appendChild(e);
      }
      "turtle_repeat_internal" == d &&
        "TIMES" == f &&
        (c.setAttribute("type", "controls_repeat_ext"),
        c.removeChild(e),
        (h = document.createElement("value")),
        h.setAttribute("name", "TIMES"),
        c.appendChild(h),
        (k = document.createElement("shadow")),
        k.setAttribute("type", "math_number"),
        h.appendChild(k),
        e.setAttribute("name", "NUM"),
        k.appendChild(e));
      "turtle_move_internal" == d &&
        "VALUE" == f &&
        (c.setAttribute("type", "turtle_move"),
        c.removeChild(e),
        (h = document.createElement("value")),
        h.setAttribute("name", "VALUE"),
        c.appendChild(h),
        (k = document.createElement("shadow")),
        k.setAttribute("type", "math_number"),
        h.appendChild(k),
        e.setAttribute("name", "NUM"),
        k.appendChild(e));
      "turtle_turn_internal" == d &&
        "VALUE" == f &&
        (c.setAttribute("type", "turtle_turn"),
        c.removeChild(e),
        (h = document.createElement("value")),
        h.setAttribute("name", "VALUE"),
        c.appendChild(h),
        (k = document.createElement("shadow")),
        k.setAttribute("type", "math_number"),
        h.appendChild(k),
        e.setAttribute("name", "NUM"),
        k.appendChild(e));
    }
    c = Of(c);
  }
  return g.S.ee(a);
}
function Of(a) {
  if (a.firstChild) return a.firstChild;
  do if (a.nextSibling) return a.nextSibling;
  while ((a = a.parentNode));
  return a;
}
function Mf() {
  var a = document.getElementById("help"),
    c = document.getElementById("helpButton");
  3 == N
    ? ke(
        "sampleHelp3",
        '<xml><block type="turtle_colour_internal" x="5" y="10"><field name="COLOUR">#ffff00</field></block></xml>'
      )
    : 4 == N &&
      ke(
        "sampleHelp4",
        '<xml><block type="turtle_pen" x="5" y="10"></block></xml>'
      );
  P.jl(a, c, !0, !0, { width: "50%", left: "25%", top: "5em" }, Pf);
  P.ky();
}
function Pf() {
  P.oy();
  1 == N && setTimeout(Qf, 5e3);
}
function Qf() {
  if (!Rf && !P.gj) {
    var a = document.getElementById("helpToolbox"),
      c = { width: "25%", top: "3.3em" };
    -1 != md.indexOf(nd) ? (c.right = "525px") : (c.left = "525px");
    var d = document.getElementById(":0");
    P.jl(a, d, !0, !1, c, null);
  }
}
var Rf = !1;
function Nf(a) {
  a.type == g.i.xu && ((Rf = !0), P.ye(!1), Oa(A, Nf));
}
function Jf() {
  Ke = Je = 200;
  Le = 0;
  Gf = Me = !0;
  R.canvas.width = R.canvas.width;
  R.strokeStyle = "#ffffff";
  R.fillStyle = "#ffffff";
  R.lineWidth = 5;
  R.lineCap = "round";
  R.font = "normal 18pt Arial";
  Sf();
  for (var a = 0; a < Df.length; a++) clearTimeout(Df[a]);
  Df.length = 0;
  Ff = null;
}
function Sf() {
  Q.beginPath();
  Q.rect(0, 0, Q.canvas.width, Q.canvas.height);
  Q.fillStyle = "#000000";
  Q.fill();
  Q.globalCompositeOperation = "source-over";
  Q.globalAlpha = 0.2;
  Q.drawImage(Ie.canvas, 0, 0);
  Q.globalAlpha = 1;
  Q.globalCompositeOperation = "source-over";
  Q.drawImage(R.canvas, 0, 0);
  if (Gf) {
    Q.strokeStyle = R.strokeStyle;
    Q.fillStyle = R.fillStyle;
    var a = R.lineWidth / 2 + 10;
    Q.beginPath();
    Q.arc(Je, Ke, a, 0, 2 * Math.PI, !1);
    Q.lineWidth = 3;
    Q.stroke();
    var c = g.g.rd.gn(Le),
      d = Je + (a + 10) * Math.sin(c),
      e = Ke - (a + 10) * Math.cos(c);
    c -= 0.3;
    var f = Je + (a + 4) * Math.sin(c),
      h = Ke - (a + 4) * Math.cos(c);
    c += 0.15;
    var k = Je + (a + 6) * Math.sin(c),
      l = Ke - (a + 6) * Math.cos(c);
    c += 0.3;
    var m = Je + (a + 6) * Math.sin(c),
      n = Ke - (a + 6) * Math.cos(c);
    c += 0.15;
    var u = Je + (a + 4) * Math.sin(c);
    a = Ke - (a + 4) * Math.cos(c);
    Q.beginPath();
    Q.moveTo(d, e);
    Q.lineTo(f, h);
    Q.bezierCurveTo(k, l, m, n, u, a);
    Q.closePath();
    Q.fill();
  }
}
function Kf(a) {
  if (!me(a)) {
    a = document.getElementById("runButton");
    var c = document.getElementById("resetButton");
    c.style.minWidth || (c.style.minWidth = a.offsetWidth + "px");
    a.style.display = "none";
    c.style.display = "inline";
    document.getElementById("spinner").style.visibility = "visible";
    Tf();
  }
}
function Lf(a) {
  me(a) ||
    ((document.getElementById("runButton").style.display = "inline"),
    (document.getElementById("resetButton").style.display = "none"),
    (document.getElementById("spinner").style.visibility = "hidden"),
    $c(null),
    Jf(),
    (Hf = !1));
}
function Uf(a, c) {
  var d = function (e, f) {
    S(e, f);
  };
  a.setProperty(c, "moveForward", a.createNativeFunction(d));
  d = function (e, f) {
    S(-e, f);
  };
  a.setProperty(c, "moveBackward", a.createNativeFunction(d));
  d = function (e, f) {
    T(e, f);
  };
  a.setProperty(c, "turnRight", a.createNativeFunction(d));
  d = function (e, f) {
    T(-e, f);
  };
  a.setProperty(c, "turnLeft", a.createNativeFunction(d));
  d = function (e) {
    V(!1, e);
  };
  a.setProperty(c, "penUp", a.createNativeFunction(d));
  d = function (e) {
    V(!0, e);
  };
  a.setProperty(c, "penDown", a.createNativeFunction(d));
  d = function (e, f) {
    R.lineWidth = e;
    Vf(f);
  };
  a.setProperty(c, "penWidth", a.createNativeFunction(d));
  d = function (e, f) {
    U(e, f);
  };
  a.setProperty(c, "penColour", a.createNativeFunction(d));
  d = function (e) {
    Gf = !1;
    Vf(e);
  };
  a.setProperty(c, "hideTurtle", a.createNativeFunction(d));
  d = function (e) {
    Gf = !0;
    Vf(e);
  };
  a.setProperty(c, "showTurtle", a.createNativeFunction(d));
  d = function (e, f) {
    R.save();
    R.translate(Je, Ke);
    R.rotate(g.g.rd.gn(Le - 90));
    R.fillText(e, 0, 0);
    R.restore();
    Vf(f);
  };
  a.setProperty(c, "print", a.createNativeFunction(d));
  d = function (e, f, h, k) {
    R.font = h + " " + f + "pt " + e;
    Vf(k);
  };
  a.setProperty(c, "font", a.createNativeFunction(d));
}
function Tf() {
  if ("Interpreter" in window) {
    Jf();
    g.selected && wb(g.selected);
    var a = g.j;
    var c = A;
    c ||
      (console.warn(
        "No workspace specified in workspaceToCode call.  Guessing."
      ),
      (c = g.Qg()));
    var d = [];
    a.U(c);
    c = c.dc(!0);
    for (var e = 0, f; (f = c[e]); e++) {
      var h = cf(a, f);
      Array.isArray(h) && (h = h[0]);
      h &&
        (f.O &&
          ((h = a.zD(h)),
          a.te && !f.Fj && (h = W(a.te, f) + h),
          a.md && !f.Fj && (h += W(a.md, f))),
        d.push(h));
    }
    d = d.join("\n");
    d = a.finish(d);
    d = d.replace(/^\s+\n/, "");
    d = d.replace(/\n\s+$/, "\n");
    $d = a = d = d.replace(/[ \t]+\n/g, "\n");
    Zd = be();
    Ff = new Interpreter(a, Uf);
    Df.push(setTimeout(Wf, 100));
  } else setTimeout(Tf, 250);
}
function Wf() {
  Ef = Df.length = 0;
  do {
    try {
      var a = Ff.step();
    } catch (h) {
      alert(h), (a = !1);
    }
    a && Ef && ((a = !1), Df.push(setTimeout(Wf, Ef)));
  } while (a);
  if (!Ef) {
    document.getElementById("spinner").style.visibility = "hidden";
    $c(null);
    a = R.getImageData(0, 0, 400, 400);
    for (
      var c = Ie.getImageData(0, 0, 400, 400),
        d = Math.min(a.data.length, c.data.length),
        e = 0,
        f = 3;
      f < d;
      f += 4
    )
      64 < Math.abs(a.data[f] - c.data[f]) && e++;
    Oe(e)
      ? (window.localStorage && (window.localStorage[xd + N] = Zd),
        10 > N && (A.Dg.play("win", 0.5), P.OH()))
      : U("#ff0000");
    Hf = !0;
  }
}
function Vf(a) {
  if (a) {
    Sf();
    if (a) {
      var c = a.match(/^block_id_([^']+)$/);
      c && (a = c[1]);
    }
    $c(a, void 0);
    a = 1e3 * Math.pow(1 - He.getValue(), 2);
    Ef = Math.max(1, a);
  }
}
function S(a, c) {
  Me && (R.beginPath(), R.moveTo(Je, Ke));
  if (a) {
    var d = g.g.rd.gn(Le);
    Je += a * Math.sin(d);
    Ke -= a * Math.cos(d);
    a = 0;
  } else a = 0.1;
  Me && (R.lineTo(Je, Ke + a), R.stroke());
  Vf(c);
}
function T(a, c) {
  a = Le + a;
  a %= 360;
  0 > a && (a += 360);
  Le = a;
  Vf(c);
}
function V(a, c) {
  Me = a;
  Vf(c);
}
function U(a, c) {
  R.strokeStyle = a;
  R.fillStyle = a;
  Vf(c);
}
function If() {
  if (Hf) {
    var a = document.getElementById("thumbnail"),
      c = a.getContext("2d");
    c.globalCompositeOperation = "copy";
    c.drawImage(Q.canvas, 0, 0, 200, 200);
    a = a.toDataURL("image/png");
    document.getElementById("galleryThumb").value = a;
    re();
  } else alert(O("Turtle_submitDisabled"));
}
