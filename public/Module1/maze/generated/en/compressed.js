// Automatically generated file.  Do not edit!

"use strict";
var b,
  h = { A: {} };
h.A.bk = {};
h.A.jp = "default";
h.A.Z = function (a) {
  this.ks = a;
};
h.A.Z.prototype.toString = function () {
  return this.ks;
};
h.A.Z.Ut = new h.A.Z("connectionChecker");
h.A.Z.Lb = new h.A.Z("event");
h.A.Z.Wb = new h.A.Z("field");
h.A.Z.RENDERER = new h.A.Z("renderer");
h.A.Z.Sp = new h.A.Z("toolbox");
h.A.Z.Rp = new h.A.Z("theme");
h.A.Z.GI = new h.A.Z("toolboxItem");
h.A.Z.qA = new h.A.Z("flyoutsVerticalToolbox");
h.A.Z.MG = new h.A.Z("flyoutsHorizontalToolbox");
h.A.register = function (a, c, d, e) {
  if ((!(a instanceof h.A.Z) && "string" != typeof a) || "" == String(a).trim())
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
  var f = h.A.bk[a];
  f || (f = h.A.bk[a] = {});
  h.A.RF(a, d);
  if (!e && f[c])
    throw Error('Name "' + c + '" with type "' + a + '" already registered.');
  f[c] = d;
};
h.A.RF = function (a, c) {
  switch (a) {
    case String(h.A.Z.Wb):
      if ("function" != typeof c.ba)
        throw Error('Type "' + a + '" must have a fromJson function');
  }
};
h.A.unregister = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = h.A.bk[a];
  d
    ? d[c]
      ? delete h.A.bk[a][c]
      : console.warn('No name "' + c + '" with type "' + a + '" found')
    : console.warn('No type "' + a + '" found');
};
h.A.$w = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = h.A.bk[a];
  return d
    ? d[c]
      ? d[c]
      : (console.warn('No name "' + c + '" with type "' + a + '" found'), null)
    : (console.warn('No type "' + a + '" found'), null);
};
h.A.yJ = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  return (a = h.A.bk[a]) ? !!a[c] : !1;
};
h.A.hr = function (a, c) {
  return h.A.$w(a, c);
};
h.A.pr = function (a, c) {
  return h.A.$w(a, c);
};
h.A.Uw = function (a, c) {
  c = c.plugins[a.toString()] || h.A.jp;
  return "function" == typeof c ? c : h.A.hr(a, c);
};
h.g = {};
h.g.global = (function () {
  return "object" === typeof self
    ? self
    : "object" === typeof window
    ? window
    : "object" === typeof global
    ? global
    : this;
})();
h.P = {};
h.g.global.Blockly || (h.g.global.Blockly = {});
h.g.global.Blockly.Msg || (h.g.global.Blockly.Msg = h.P);
h.mj = {};
h.Du = 40;
h.Xu = 125;
h.Vz = 5;
h.rA = 10;
h.tc = 28;
h.Tt = h.tc;
h.Iz = 8;
h.ap = 250;
h.bp = 10;
h.Ez = 30;
h.PA = 750;
h.sB = 100;
h.Wz = !0;
h.AA = 0.45;
h.BA = 0.65;
h.Si = { width: 96, height: 124, url: "sprites.png" };
h.lb = 1;
h.ge = 2;
h.Ta = 3;
h.ie = 4;
h.Cf = 5;
h.Wo = -1;
h.Vo = 0;
h.Dt = 1;
h.oG = 0;
h.pG = 1;
h.mG = 1;
h.nG = 2;
h.Qi = [];
h.Qi[h.lb] = h.ge;
h.Qi[h.ge] = h.lb;
h.Qi[h.Ta] = h.ie;
h.Qi[h.ie] = h.Ta;
h.Ek = 0;
h.dn = 1;
h.me = 2;
h.Dk = 3;
h.Zt = null;
h.lp = 1;
h.$t = 2;
h.$i = "VARIABLE";
h.FB = "VARIABLE_DYNAMIC";
h.Zu = "PROCEDURE";
h.sI = "RENAME_VARIABLE_ID";
h.lG = "DELETE_VARIABLE_ID";
h.g.xb = {};
h.g.xb.parse = function (a) {
  a = String(a).toLowerCase().trim();
  var c = h.g.xb.names[a];
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
    ? h.g.xb.Xs(a, c, d)
    : null;
};
h.g.xb.Xs = function (a, c, d) {
  c = (a << 16) | (c << 8) | d;
  return 16 > a
    ? "#" + (16777216 | c).toString(16).substr(1)
    : "#" + c.toString(16);
};
h.g.xb.wx = function (a) {
  a = h.g.xb.parse(a);
  if (!a) return [0, 0, 0];
  a = parseInt(a.substr(1), 16);
  return [a >> 16, (a >> 8) & 255, a & 255];
};
h.g.xb.Ax = function (a) {
  var c = h.AA,
    d = 255 * h.BA,
    e = 0,
    f = 0,
    g = 0;
  if (0 == c) g = f = e = d;
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
        g = a;
        break;
      case 2:
        e = a;
        f = d;
        g = c;
        break;
      case 3:
        e = a;
        f = m;
        g = d;
        break;
      case 4:
        e = c;
        f = a;
        g = d;
        break;
      case 5:
        e = d;
        f = a;
        g = m;
        break;
      case 6:
      case 0:
        (e = d), (f = c), (g = a);
    }
  }
  return h.g.xb.Xs(Math.floor(e), Math.floor(f), Math.floor(g));
};
h.g.xb.gq = function (a, c, d) {
  a = h.g.xb.parse(a);
  if (!a) return null;
  c = h.g.xb.parse(c);
  if (!c) return null;
  a = h.g.xb.wx(a);
  c = h.g.xb.wx(c);
  return h.g.xb.Xs(
    Math.round(c[0] + d * (a[0] - c[0])),
    Math.round(c[1] + d * (a[1] - c[1])),
    Math.round(c[2] + d * (a[2] - c[2]))
  );
};
h.g.xb.names = {
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
h.g.T = function (a, c) {
  this.x = a;
  this.y = c;
};
h.g.T.Yf = function (a, c) {
  return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1;
};
h.g.T.Mq = function (a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
};
h.g.T.UD = function (a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
h.g.T.Yk = function (a, c) {
  return new h.g.T(a.x - c.x, a.y - c.y);
};
h.g.T.sum = function (a, c) {
  return new h.g.T(a.x + c.x, a.y + c.y);
};
h.g.T.prototype.scale = function (a) {
  this.x *= a;
  this.y *= a;
  return this;
};
h.g.T.prototype.translate = function (a, c) {
  this.x += a;
  this.y += c;
  return this;
};
h.g.Rect = function (a, c, d, e) {
  this.top = a;
  this.bottom = c;
  this.left = d;
  this.right = e;
};
h.g.Rect.prototype.contains = function (a, c) {
  return a >= this.left && a <= this.right && c >= this.top && c <= this.bottom;
};
h.g.Sa = {};
h.g.Sa.startsWith = function (a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
h.g.Sa.ft = function (a) {
  return a.length
    ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d;
      }).length
    : 0;
};
h.g.Sa.fw = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || h.g.Sa.ft(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0][e], g = 1; g < a.length; g++) if (f != a[g][e]) return d;
    " " == f && (d = e + 1);
  }
  for (g = 1; g < a.length; g++) if ((f = a[g][e]) && " " != f) return d;
  return c;
};
h.g.Sa.gw = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || h.g.Sa.ft(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0].substr(-e - 1, 1), g = 1; g < a.length; g++)
      if (f != a[g].substr(-e - 1, 1)) return d;
    " " == f && (d = e + 1);
  }
  for (g = 1; g < a.length; g++)
    if ((f = a[g].charAt(a[g].length - e - 1)) && " " != f) return d;
  return c;
};
h.g.Sa.lz = function (a, c) {
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) a[d] = h.g.Sa.UF(a[d], c);
  return a.join("\n");
};
h.g.Sa.UF = function (a, c) {
  if (a.length <= c) return a;
  for (var d = a.trim().split(/\s+/), e = 0; e < d.length; e++)
    d[e].length > c && (c = d[e].length);
  e = -Infinity;
  var f = 1;
  do {
    var g = e;
    var k = a;
    a = [];
    var l = d.length / f,
      m = 1;
    for (e = 0; e < d.length - 1; e++)
      m < (e + 1.5) / l ? (m++, (a[e] = !0)) : (a[e] = !1);
    a = h.g.Sa.mz(d, a, c);
    e = h.g.Sa.At(d, a, c);
    a = h.g.Sa.VF(d, a);
    f++;
  } while (e > g);
  return k;
};
h.g.Sa.At = function (a, c, d) {
  for (var e = [0], f = [], g = 0; g < a.length; g++)
    (e[e.length - 1] += a[g].length),
      !0 === c[g]
        ? (e.push(0), f.push(a[g].charAt(a[g].length - 1)))
        : !1 === c[g] && e[e.length - 1]++;
  a = Math.max.apply(Math, e);
  for (g = c = 0; g < e.length; g++)
    (c -= 2 * Math.pow(Math.abs(d - e[g]), 1.5)),
      (c -= Math.pow(a - e[g], 1.5)),
      -1 != ".?!".indexOf(f[g])
        ? (c += d / 3)
        : -1 != ",;)]}".indexOf(f[g]) && (c += d / 4);
  1 < e.length && e[e.length - 1] <= e[e.length - 2] && (c += 0.5);
  return c;
};
h.g.Sa.mz = function (a, c, d) {
  for (var e = h.g.Sa.At(a, c, d), f, g = 0; g < c.length - 1; g++)
    if (c[g] != c[g + 1]) {
      var k = [].concat(c);
      k[g] = !k[g];
      k[g + 1] = !k[g + 1];
      var l = h.g.Sa.At(a, k, d);
      l > e && ((e = l), (f = k));
    }
  return f ? h.g.Sa.mz(a, f, d) : c;
};
h.g.Sa.VF = function (a, c) {
  for (var d = [], e = 0; e < a.length; e++)
    d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
  return d.join("");
};
h.g.le = function (a, c) {
  this.width = a;
  this.height = c;
};
h.g.le.Yf = function (a, c) {
  return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1;
};
h.g.style = {};
h.g.style.ag = function (a) {
  if ("none" != h.g.style.lx(a, "display")) return h.g.style.jx(a);
  var c = a.style,
    d = c.display,
    e = c.visibility,
    f = c.position;
  c.visibility = "hidden";
  c.position = "absolute";
  c.display = "inline";
  var g = a.offsetWidth;
  a = a.offsetHeight;
  c.display = d;
  c.position = f;
  c.visibility = e;
  return new h.g.le(g, a);
};
h.g.style.jx = function (a) {
  return new h.g.le(a.offsetWidth, a.offsetHeight);
};
h.g.style.lx = function (a, c) {
  return (
    h.g.style.getComputedStyle(a, c) ||
    h.g.style.YC(a, c) ||
    (a.style && a.style[c])
  );
};
h.g.style.getComputedStyle = function (a, c) {
  return document.defaultView &&
    document.defaultView.getComputedStyle &&
    (a = document.defaultView.getComputedStyle(a, null))
    ? a[c] || a.getPropertyValue(c) || ""
    : "";
};
h.g.style.YC = function (a, c) {
  return a.currentStyle ? a.currentStyle[c] : null;
};
h.g.style.Oh = function (a) {
  var c = new h.g.T(0, 0);
  a = a.getBoundingClientRect();
  var d = document.documentElement;
  d = new h.g.T(
    window.pageXOffset || d.scrollLeft,
    window.pageYOffset || d.scrollTop
  );
  c.x = a.left + d.x;
  c.y = a.top + d.y;
  return c;
};
h.g.style.mD = function () {
  var a = document.body,
    c = document.documentElement;
  return new h.g.T(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop);
};
h.g.style.bK = function (a, c) {
  a.style.display = c ? "" : "none";
};
h.g.style.GJ = function (a) {
  return "rtl" == h.g.style.lx(a, "direction");
};
h.g.style.VC = function (a) {
  var c = h.g.style.getComputedStyle(a, "borderLeftWidth"),
    d = h.g.style.getComputedStyle(a, "borderRightWidth"),
    e = h.g.style.getComputedStyle(a, "borderTopWidth");
  a = h.g.style.getComputedStyle(a, "borderBottomWidth");
  return {
    top: parseFloat(e),
    right: parseFloat(d),
    bottom: parseFloat(a),
    left: parseFloat(c),
  };
};
h.g.style.oF = function (a, c) {
  a = h.g.style.$C(a, c);
  c.scrollLeft = a.x;
  c.scrollTop = a.y;
};
h.g.style.$C = function (a, c) {
  var d = h.g.style.Oh(a),
    e = h.g.style.Oh(c),
    f = h.g.style.VC(c),
    g = d.x - e.x - f.left;
  d = d.y - e.y - f.top;
  a = h.g.style.jx(a);
  e = c.clientHeight - a.height;
  f = c.scrollLeft;
  var k = c.scrollTop;
  f += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
  k += Math.min(d, Math.max(d - e, 0));
  return new h.g.T(f, k);
};
h.g.userAgent = {};
(function (a) {
  function c(e) {
    return -1 != d.indexOf(e.toUpperCase());
  }
  h.g.userAgent.raw = a;
  var d = h.g.userAgent.raw.toUpperCase();
  h.g.userAgent.ee = c("Trident") || c("MSIE");
  h.g.userAgent.vh = c("Edge");
  h.g.userAgent.KA = c("JavaFX");
  h.g.userAgent.dG = (c("Chrome") || c("CriOS")) && !h.g.userAgent.vh;
  h.g.userAgent.Hv = c("WebKit") && !h.g.userAgent.vh;
  h.g.userAgent.vA =
    c("Gecko") && !h.g.userAgent.Hv && !h.g.userAgent.ee && !h.g.userAgent.vh;
  h.g.userAgent.tm = c("Android");
  h.g.userAgent.nk = c("iPad");
  h.g.userAgent.Au = c("iPod");
  h.g.userAgent.zu = c("iPhone") && !h.g.userAgent.nk && !h.g.userAgent.Au;
  h.g.userAgent.QA = c("Macintosh");
  h.g.userAgent.zB =
    h.g.userAgent.nk || (h.g.userAgent.tm && !c("Mobile")) || c("Silk");
  h.g.userAgent.kH =
    !h.g.userAgent.zB &&
    (h.g.userAgent.Au || h.g.userAgent.zu || h.g.userAgent.tm || c("IEMobile"));
})((h.g.global.navigator && h.g.global.navigator.userAgent) || "");
h.g.jE = function (a) {
  a.preventDefault();
  a.stopPropagation();
};
h.g.$n = function (a) {
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
    (a.target.dataset && "true" == a.target.dataset.IJ)
  );
};
h.g.xe = function (a) {
  var c = new h.g.T(0, 0),
    d = a.getAttribute("x");
  d && (c.x = parseInt(d, 10));
  if ((d = a.getAttribute("y"))) c.y = parseInt(d, 10);
  if ((d = (d = a.getAttribute("transform")) && d.match(h.g.xe.GB)))
    (c.x += Number(d[1])), d[3] && (c.y += Number(d[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    (a = a.match(h.g.xe.HB)) &&
    ((c.x += Number(a[1])), a[3] && (c.y += Number(a[3])));
  return c;
};
h.g.kl = function (a) {
  for (var c = 0, d = 0; a; ) {
    var e = h.g.xe(a);
    c += e.x;
    d += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new h.g.T(c, d);
};
h.g.xe.GB = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
h.g.xe.HB = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
h.g.zl = function (a) {
  return a.ctrlKey && h.g.userAgent.QA ? !0 : 2 == a.button;
};
h.g.Gl = function (a, c, d) {
  var e = c.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  d || (d = c.getScreenCTM().inverse());
  return e.matrixTransform(d);
};
h.g.ix = function (a) {
  switch (a.deltaMode) {
    default:
      return { x: a.deltaX, y: a.deltaY };
    case 1:
      return { x: a.deltaX * h.Du, y: a.deltaY * h.Du };
    case 2:
      return { x: a.deltaX * h.Xu, y: a.deltaY * h.Xu };
  }
};
h.g.JF = function (a) {
  return h.g.rt(a, !0);
};
h.g.dd = function (a) {
  if ("string" != typeof a) return a;
  a = h.g.rt(a, !1);
  return a.length ? String(a[0]) : "";
};
h.g.bw = function (a) {
  for (var c = h.P, d = a.match(/%{BKY_[A-Z]\w*}/gi), e = 0; e < d.length; e++)
    void 0 == c[d[e].toUpperCase().slice(6, -1)] &&
      console.warn("No message string for " + d[e] + " in " + a);
};
h.g.rt = function (a, c) {
  var d = [],
    e = a.split("");
  e.push("");
  var f = 0;
  a = [];
  for (var g = null, k = 0; k < e.length; k++) {
    var l = e[k];
    0 == f
      ? "%" == l
        ? ((l = a.join("")) && d.push(l), (a.length = 0), (f = 1))
        : a.push(l)
      : 1 == f
      ? "%" == l
        ? (a.push(l), (f = 0))
        : c && "0" <= l && "9" >= l
        ? ((f = 2), (g = l), (l = a.join("")) && d.push(l), (a.length = 0))
        : "{" == l
        ? (f = 3)
        : (a.push("%", l), (f = 0))
      : 2 == f
      ? "0" <= l && "9" >= l
        ? (g += l)
        : (d.push(parseInt(g, 10)), k--, (f = 0))
      : 3 == f &&
        ("" == l
          ? (a.splice(0, 0, "%{"), k--, (f = 0))
          : "}" != l
          ? a.push(l)
          : ((f = a.join("")),
            /[A-Z]\w*/i.test(f)
              ? ((l = f.toUpperCase()),
                (l = h.g.Sa.startsWith(l, "BKY_") ? l.substring(4) : null) &&
                l in h.P
                  ? ((f = h.P[l]),
                    "string" == typeof f
                      ? Array.prototype.push.apply(d, h.g.rt(f, c))
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
h.g.Zf = function () {
  for (var a = h.g.Zf.Oy.length, c = [], d = 0; 20 > d; d++)
    c[d] = h.g.Zf.Oy.charAt(Math.random() * a);
  return c.join("");
};
h.g.Zf.Oy =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
h.g.Uh = function () {
  if (void 0 !== h.g.Uh.nq) return h.g.Uh.nq;
  if (!h.g.global.getComputedStyle) return !1;
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
      c = h.g.global.getComputedStyle(a);
      if (!c) return document.body.removeChild(a), !1;
      c = c.getPropertyValue(d[e]);
    }
  document.body.removeChild(a);
  h.g.Uh.nq = "none" !== c;
  return h.g.Uh.nq;
};
h.g.Hy = function (a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" == document.readyState) a();
  else
    var c = setInterval(function () {
      "complete" == document.readyState && (clearInterval(c), a());
    }, 10);
};
h.g.lD = function () {
  var a = h.g.style.mD();
  return new h.g.Rect(
    a.y,
    document.documentElement.clientHeight + a.y,
    a.x,
    document.documentElement.clientWidth + a.x
  );
};
h.g.Jk = function (a, c) {
  c = a.indexOf(c);
  if (-1 == c) return !1;
  a.splice(c, 1);
  return !0;
};
h.g.eD = function () {
  var a = document.documentElement,
    c = window;
  return h.g.userAgent.ee && c.pageYOffset != a.scrollTop
    ? new h.g.T(a.scrollLeft, a.scrollTop)
    : new h.g.T(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop);
};
h.g.er = function (a, c) {
  var d = Object.create(null),
    e = q(a, !0);
  c && (a = u(a)) && ((a = e.indexOf(a)), e.splice(a, e.length - a));
  for (a = 0; (c = e[a]); a++) d[c.type] ? d[c.type]++ : (d[c.type] = 1);
  return d;
};
h.g.nF = function (a, c) {
  var d = c.x;
  c = c.y;
  var e = aa(a).getBoundingClientRect();
  d = new h.g.T(d - e.left, c - e.top);
  c = h.g.kl(a.Ab);
  return h.g.T.Yk(d, c).scale(1 / a.scale);
};
h.g.Co = function (a) {
  var c = "string" == typeof a ? h.g.dd(a) : a,
    d = Number(c);
  if (!isNaN(d) && 0 <= d && 360 >= d) return { zD: d, ql: h.g.xb.Ax(d) };
  if ((d = h.g.xb.parse(c))) return { zD: null, ql: d };
  d = 'Invalid colour: "' + c + '"';
  a != c && (d += ' (from "' + a + '")');
  throw Error(d);
};
h.h = {};
h.h.qx = "";
h.h.Oa = !0;
h.h.Iq = 0;
h.h.Dm = "create";
h.h.Zo = h.h.Dm;
h.h.uh = "delete";
h.h.Jt = h.h.uh;
h.h.fk = "change";
h.h.yz = h.h.fk;
h.h.wk = "move";
h.h.Lt = h.h.wk;
h.h.Av = "var_create";
h.h.Bv = "var_delete";
h.h.Dv = "var_rename";
h.h.Wp = "ui";
h.h.Kt = "drag";
h.h.Xm = "selected";
h.h.fp = "click";
h.h.Fu = "marker_move";
h.h.Ot = "bubble_open";
h.h.wv = "trashcan_open";
h.h.HI = "toolbox_item_select";
h.h.uv = "theme_change";
h.h.Ev = "viewport_change";
h.h.Bm = "comment_create";
h.h.St = "comment_delete";
h.h.Rt = "comment_change";
h.h.Cm = "comment_move";
h.h.mu = "finished_loading";
h.h.Bz = [h.h.Zo, h.h.Lt, h.h.Bm, h.h.Cm];
h.h.kk = [];
h.h.Ea = function (a) {
  h.h.isEnabled() && (h.h.kk.length || setTimeout(h.h.PC, 0), h.h.kk.push(a));
};
h.h.PC = function () {
  for (
    var a = h.h.filter(h.h.kk, !0), c = (h.h.kk.length = 0), d;
    (d = a[c]);
    c++
  )
    if (d.ac) {
      var e = h.vb.hl(d.ac);
      if (e) {
        var f = d;
        if (f.Oa)
          for (e.zi.push(f), e.Pl.length = 0; e.zi.length > e.Hu && 0 <= e.Hu; )
            e.zi.shift();
        for (var g = 0; (d = e.Rc[g]); g++) d(f);
      }
    }
};
h.h.filter = function (a, c) {
  a = a.slice();
  c || a.reverse();
  for (var d = [], e = Object.create(null), f = 0, g; (g = a[f]); f++)
    if (!g.Jj()) {
      var k = [g.Kr ? h.h.Wp : g.type, g.mb, g.ac].join(" "),
        l = e[k],
        m = l ? l.event : null;
      if (!l) (e[k] = { event: g, index: f }), d.push(g);
      else if (g.type == h.h.wk && l.index == f - 1)
        (m.ii = g.ii), (m.gi = g.gi), (m.ah = g.ah), (l.index = f);
      else if (g.type == h.h.fk && g.element == m.element && g.name == m.name)
        m.newValue = g.newValue;
      else if (g.type != h.h.fp || m.type != h.h.Ot)
        (e[k] = { event: g, index: f }), d.push(g);
    }
  a = d.filter(function (n) {
    return !n.Jj();
  });
  c || a.reverse();
  for (f = 1; (g = a[f]); f++)
    g.type == h.h.fk && "mutation" == g.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
h.h.fC = function () {
  for (var a = 0, c; (c = h.h.kk[a]); a++) c.Oa = !1;
};
h.h.disable = function () {
  h.h.Iq++;
};
h.h.enable = function () {
  h.h.Iq--;
};
h.h.isEnabled = function () {
  return 0 == h.h.Iq;
};
h.h.Zb = function () {
  return h.h.qx;
};
h.h.ta = function (a) {
  h.h.qx = "boolean" == typeof a ? (a ? h.g.Zf() : "") : a;
};
h.h.Ww = function (a) {
  var c = [];
  a = q(a, !1);
  for (var d = 0, e; (e = a[d]); d++) c[d] = e.id;
  return c;
};
h.h.ba = function (a) {
  var c = h.A.hr(h.A.Z.Lb, a.type);
  if (!c) throw Error("Unknown event type.");
  c = new c();
  c.ba(a);
  c.ac = (void 0).id;
  return c;
};
h.h.iJ = function (a) {
  if ((a.type == h.h.wk || a.type == h.h.Dm) && a.ac) {
    var c = h.vb.hl(a.ac),
      d = c.Mc(a.mb);
    if (d) {
      a = h.h.Oa;
      try {
        h.h.Oa = !1;
        var e = d.getParent();
        if (e && e.isEnabled()) {
          var f = q(d, !1);
          c = 0;
          for (var g; (g = f[c]); c++) g.sf(!0);
        } else if ((d.M || d.W) && !c.rd()) {
          do d.sf(!1), (d = u(d));
          while (d);
        }
      } finally {
        h.h.Oa = a;
      }
    }
  }
};
h.h.Abstract = function () {
  this.qd = null;
  this.ac = void 0;
  this.group = h.h.Zb();
  this.Oa = h.h.Oa;
};
b = h.h.Abstract.prototype;
b.Kr = !1;
b.oa = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
b.ba = function (a) {
  this.qd = !1;
  this.group = a.group;
};
b.Jj = function () {
  return !1;
};
b.run = function () {};
function v(a) {
  if (a.ac) var c = h.vb.hl(a.ac);
  if (!c)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return c;
}
h.g.object = {};
h.g.object.U = function (a, c) {
  a.u = c.prototype;
  a.prototype = Object.create(c.prototype);
  a.prototype.constructor = a;
};
h.g.object.$g = function (a, c) {
  for (var d in c) a[d] = c[d];
};
h.g.object.pj = function (a, c) {
  for (var d in c)
    a[d] =
      null != c[d] && "object" === typeof c[d]
        ? h.g.object.pj(a[d] || Object.create(null), c[d])
        : c[d];
  return a;
};
h.g.object.values = function (a) {
  return Object.values
    ? Object.values(a)
    : Object.keys(a).map(function (c) {
        return a[c];
      });
};
h.g.xml = {};
h.g.xml.cB = "https://developers.google.com/blockly/xml";
h.g.xml.document = function () {
  return document;
};
h.g.xml.createElement = function (a) {
  return h.g.xml.document().createElementNS(h.g.xml.cB, a);
};
h.g.xml.createTextNode = function (a) {
  return h.g.xml.document().createTextNode(a);
};
h.g.xml.GF = function (a) {
  return new DOMParser().parseFromString(a, "text/xml");
};
h.g.xml.Hd = function (a) {
  return new XMLSerializer().serializeToString(a);
};
h.h.Ie = function (a) {
  h.h.Ie.u.constructor.call(this);
  this.mb = (this.qd = "undefined" == typeof a) ? "" : a.id;
  this.ac = this.qd ? "" : a.C.id;
};
h.g.object.U(h.h.Ie, h.h.Abstract);
h.h.Ie.prototype.oa = function () {
  var a = h.h.Ie.u.oa.call(this);
  a.blockId = this.mb;
  return a;
};
h.h.Ie.prototype.ba = function (a) {
  h.h.Ie.u.ba.call(this, a);
  this.mb = a.blockId;
};
h.h.tg = function (a, c, d, e, f) {
  h.h.tg.u.constructor.call(this, a);
  a &&
    ((this.element = "undefined" == typeof c ? "" : c),
    (this.name = "undefined" == typeof d ? "" : d),
    (this.oldValue = "undefined" == typeof e ? "" : e),
    (this.newValue = "undefined" == typeof f ? "" : f));
};
h.g.object.U(h.h.tg, h.h.Ie);
h.h.Gi = h.h.tg;
b = h.h.tg.prototype;
b.type = h.h.fk;
b.oa = function () {
  var a = h.h.tg.u.oa.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.oldValue = this.oldValue;
  a.newValue = this.newValue;
  return a;
};
b.ba = function (a) {
  h.h.tg.u.ba.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.oldValue = a.oldValue;
  this.newValue = a.newValue;
};
b.Jj = function () {
  return this.oldValue == this.newValue;
};
b.run = function (a) {
  var c = v(this).Mc(this.mb);
  if (c)
    switch (
      (c.ze && c.ze.$b(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (c = ba(c, this.name))
          ? c.setValue(a)
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        c.Uj(a || null);
        break;
      case "collapsed":
        c.oi(!!a);
        break;
      case "disabled":
        c.sf(!a);
        break;
      case "inline":
        c.ri(!!a);
        break;
      case "mutation":
        var d = "";
        c.Rd && (d = (d = c.Rd()) && h.N.Hd(d));
        if (c.Xf) {
          var e = h.N.Ee(a || "<mutation/>");
          c.Xf(e);
        }
        h.h.Ea(new h.h.tg(c, "mutation", null, d, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.mb);
};
h.h.$d = function (a) {
  h.h.$d.u.constructor.call(this, a);
  a &&
    (a.Ja && (this.Oa = !1),
    (this.xml = a.C.sa ? h.N.iq(a) : h.N.Qf(a)),
    (this.Sh = h.h.Ww(a)));
};
h.g.object.U(h.h.$d, h.h.Ie);
h.h.ym = h.h.$d;
h.h.$d.prototype.type = h.h.Dm;
h.h.$d.prototype.oa = function () {
  var a = h.h.$d.u.oa.call(this);
  a.xml = h.N.Hd(this.xml);
  a.ids = this.Sh;
  this.Oa || (a.recordUndo = this.Oa);
  return a;
};
h.h.$d.prototype.ba = function (a) {
  h.h.$d.u.ba.call(this, a);
  this.xml = h.N.Ee(a.xml);
  this.Sh = a.ids;
  void 0 !== a.recordUndo && (this.Oa = a.recordUndo);
};
h.h.$d.prototype.run = function (a) {
  var c = v(this);
  if (a)
    (a = h.g.xml.createElement("xml")), a.appendChild(this.xml), h.N.Ih(a, c);
  else {
    a = 0;
    for (var d; (d = this.Sh[a]); a++) {
      var e = c.Mc(d);
      e
        ? e.I(!1)
        : d == this.mb &&
          console.warn("Can't uncreate non-existent block: " + d);
    }
  }
};
h.h.Me = function (a) {
  h.h.Me.u.constructor.call(this, a);
  if (a) {
    if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
    a.Ja && (this.Oa = !1);
    this.Oj = a.C.sa ? h.N.iq(a) : h.N.Qf(a);
    this.Sh = h.h.Ww(a);
  }
};
h.g.object.U(h.h.Me, h.h.Ie);
h.h.Cz = h.h.Me;
h.h.Me.prototype.type = h.h.uh;
h.h.Me.prototype.oa = function () {
  var a = h.h.Me.u.oa.call(this);
  a.oldXml = h.N.Hd(this.Oj);
  a.ids = this.Sh;
  this.Oa || (a.recordUndo = this.Oa);
  return a;
};
h.h.Me.prototype.ba = function (a) {
  h.h.Me.u.ba.call(this, a);
  this.Oj = h.N.Ee(a.oldXml);
  this.Sh = a.ids;
  void 0 !== a.recordUndo && (this.Oa = a.recordUndo);
};
h.h.Me.prototype.run = function (a) {
  var c = v(this);
  if (a) {
    a = 0;
    for (var d; (d = this.Sh[a]); a++) {
      var e = c.Mc(d);
      e
        ? e.I(!1)
        : d == this.mb && console.warn("Can't delete non-existent block: " + d);
    }
  } else
    (a = h.g.xml.createElement("xml")), a.appendChild(this.Oj), h.N.Ih(a, c);
};
h.h.yh = function (a) {
  h.h.yh.u.constructor.call(this, a);
  a &&
    (a.Ja && (this.Oa = !1),
    (a = ca(this)),
    (this.iy = a.qy),
    (this.by = a.Bx),
    (this.qs = a.sw));
};
h.g.object.U(h.h.yh, h.h.Ie);
h.h.ek = h.h.yh;
b = h.h.yh.prototype;
b.type = h.h.wk;
b.oa = function () {
  var a = h.h.yh.u.oa.call(this);
  this.ii && (a.newParentId = this.ii);
  this.gi && (a.newInputName = this.gi);
  this.ah &&
    (a.newCoordinate = Math.round(this.ah.x) + "," + Math.round(this.ah.y));
  this.Oa || (a.recordUndo = this.Oa);
  return a;
};
b.ba = function (a) {
  h.h.yh.u.ba.call(this, a);
  this.ii = a.newParentId;
  this.gi = a.newInputName;
  if (a.newCoordinate) {
    var c = a.newCoordinate.split(",");
    this.ah = new h.g.T(Number(c[0]), Number(c[1]));
  }
  void 0 !== a.recordUndo && (this.Oa = a.recordUndo);
};
b.li = function () {
  var a = ca(this);
  this.ii = a.qy;
  this.gi = a.Bx;
  this.ah = a.sw;
};
function ca(a) {
  var c = v(a).Mc(a.mb);
  a = {};
  var d = c.getParent();
  if (d) {
    if (((a.qy = d.id), (c = da(d, c)))) a.Bx = c.name;
  } else a.sw = c.Wa();
  return a;
}
b.Jj = function () {
  return this.iy == this.ii && this.by == this.gi && h.g.T.Yf(this.qs, this.ah);
};
b.run = function (a) {
  var c = v(this),
    d = c.Mc(this.mb);
  if (d) {
    var e = a ? this.ii : this.iy,
      f = a ? this.gi : this.by;
    a = a ? this.ah : this.qs;
    var g = null;
    if (e && ((g = c.Mc(e)), !g)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    d.getParent() && w(d);
    if (a) (f = d.Wa()), d.moveBy(a.x - f.x, a.y - f.y);
    else {
      d = d.M || d.W;
      if (f) {
        if ((c = ea(g, f))) var k = c.connection;
      } else d.type == h.ie && (k = g.Y);
      k
        ? d.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.mb);
};
h.A.register(h.A.Z.Lb, h.h.Dm, h.h.$d);
h.A.register(h.A.Z.Lb, h.h.uh, h.h.Me);
h.A.register(h.A.Z.Lb, h.h.fk, h.h.tg);
h.A.register(h.A.Z.Lb, h.h.wk, h.h.yh);
h.B = function (a, c, d) {
  if (!c) throw Error("Cannot create a node without a location.");
  this.mm = a;
  this.Fj = h.B.ID(a);
  this.ra = c;
  this.Uo = null;
  (a = d || null) && a.nz && (this.Uo = a.nz);
};
h.B.types = {
  Wb: "field",
  Fb: "block",
  xd: "input",
  zh: "output",
  fd: "next",
  hd: "previous",
  Re: "stack",
  cc: "workspace",
};
h.B.Ag = !1;
h.B.Qz = -20;
h.B.ID = function (a) {
  switch (a) {
    case h.B.types.hd:
    case h.B.types.fd:
    case h.B.types.xd:
    case h.B.types.zh:
      return !0;
  }
  return !1;
};
h.B.Tk = function (a) {
  return a ? new h.B(h.B.types.Wb, a) : null;
};
h.B.bf = function (a) {
  return a
    ? a.type == h.lb || (a.type == h.Ta && a.hf())
      ? h.B.Gh(a.hf())
      : a.type == h.Ta
      ? new h.B(h.B.types.fd, a)
      : a.type == h.ge
      ? new h.B(h.B.types.zh, a)
      : a.type == h.ie
      ? new h.B(h.B.types.hd, a)
      : null
    : null;
};
h.B.Gh = function (a) {
  return a && a.connection ? new h.B(h.B.types.xd, a.connection) : null;
};
h.B.af = function (a) {
  return a ? new h.B(h.B.types.Fb, a) : null;
};
h.B.Uk = function (a) {
  return a ? new h.B(h.B.types.Re, a) : null;
};
h.B.nj = function (a, c) {
  return c && a ? new h.B(h.B.types.cc, a, { nz: c }) : null;
};
h.B.yq = function (a) {
  var c = a.W || a.M;
  return c ? h.B.bf(c) : h.B.af(a);
};
b = h.B.prototype;
b.Xa = function () {
  return this.mm;
};
function fa(a, c) {
  a = a.ra;
  a instanceof h.Sc || (a = a.V());
  if (!a || !a.C) return null;
  var d = a.Oc();
  a = d.C.qb(!0);
  for (var e = 0, f; (f = a[e]); e++)
    if (d.id == f.id)
      return (
        (c = e + (c ? 1 : -1)), -1 == c || c == a.length ? null : h.B.Uk(a[c])
      );
  throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}
function ha(a) {
  if (!a) return null;
  do var c = a.W && a.W.ua();
  while (c && u(c) == a && (a = c));
  return (c = a.W || a.M) && c.pa && c.pa.hf() ? h.B.Gh(c.pa.hf()) : h.B.Uk(a);
}
b.V = function () {
  return this.Xa() === h.B.types.Fb
    ? this.ra
    : this.Xa() === h.B.types.Re
    ? this.ra
    : this.Xa() === h.B.types.cc
    ? null
    : this.ra.V();
};
b.next = function () {
  switch (this.mm) {
    case h.B.types.Re:
      return fa(this, !0);
    case h.B.types.zh:
      var a = this.ra;
      return h.B.af(a.V());
    case h.B.types.Wb:
      a: {
        var c = this.ra,
          d = c.hf();
        a = c.V();
        c = d.hb.indexOf(c) + 1;
        d = a.S.indexOf(d);
        for (var e; (e = a.S[d]); d++) {
          for (var f = e.hb; c < f.length; ) {
            if (ia(f[c]) || h.B.Ag) {
              a = h.B.Tk(f[c]);
              break a;
            }
            c++;
          }
          c = 0;
          if (e.connection) {
            a = h.B.Gh(e);
            break a;
          }
        }
        a = null;
      }
      return a;
    case h.B.types.xd:
      a: {
        c = this.ra.hf();
        a = c.V();
        for (c = a.S.indexOf(c) + 1; (d = a.S[c]); c++) {
          e = d.hb;
          f = 0;
          for (var g; (g = e[f]); f++)
            if (ia(g) || h.B.Ag) {
              a = h.B.Tk(g);
              break a;
            }
          if (d.connection) {
            a = h.B.Gh(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case h.B.types.Fb:
      return h.B.bf(this.ra.Y);
    case h.B.types.hd:
      return (a = this.ra), h.B.af(a.V());
    case h.B.types.fd:
      return (a = this.ra), h.B.bf(a.pa);
  }
  return null;
};
b.lf = function () {
  switch (this.mm) {
    case h.B.types.cc:
      var a = this.ra.qb(!0);
      if (0 < a.length) return h.B.Uk(a[0]);
      break;
    case h.B.types.Re:
      a = this.ra;
      var c = a.W || a.M;
      return c ? h.B.bf(c) : h.B.af(a);
    case h.B.types.Fb:
      a = this.ra;
      a: {
        a = a.S;
        c = 0;
        for (var d; (d = a[c]); c++) {
          for (var e = d.hb, f = 0, g; (g = e[f]); f++)
            if (ia(g) || h.B.Ag) {
              a = h.B.Tk(g);
              break a;
            }
          if (d.connection) {
            a = h.B.Gh(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case h.B.types.xd:
      return h.B.bf(this.ra.pa);
  }
  return null;
};
b.Vd = function () {
  switch (this.mm) {
    case h.B.types.Re:
      return fa(this, !1);
    case h.B.types.Wb:
      a: {
        var a = this.ra;
        var c = a.hf();
        var d = a.V();
        a = c.hb.indexOf(a) - 1;
        for (var e = d.S.indexOf(c), f; (f = d.S[e]); e--) {
          if (f.connection && f !== c) {
            c = h.B.Gh(f);
            break a;
          }
          for (f = f.hb; -1 < a; ) {
            if (ia(f[a]) || h.B.Ag) {
              c = h.B.Tk(f[a]);
              break a;
            }
            a--;
          }
          0 <= e - 1 && (a = d.S[e - 1].hb.length - 1);
        }
        c = null;
      }
      return c;
    case h.B.types.xd:
      a: {
        c = this.ra.hf();
        d = c.V();
        for (a = d.S.indexOf(c); (e = d.S[a]); a--) {
          if (e.connection && e !== c) {
            c = h.B.Gh(e);
            break a;
          }
          e = e.hb;
          f = e.length - 1;
          for (var g; (g = e[f]); f--)
            if (ia(g) || h.B.Ag) {
              c = h.B.Tk(g);
              break a;
            }
        }
        c = null;
      }
      return c;
    case h.B.types.Fb:
      return (c = this.ra), h.B.bf(c.W || c.M);
    case h.B.types.hd:
      c = this.ra;
      if ((c = c.pa) && !c.hf()) return h.B.bf(c);
      break;
    case h.B.types.fd:
      return (c = this.ra), h.B.af(c.V());
  }
  return null;
};
b.nf = function () {
  switch (this.mm) {
    case h.B.types.Re:
      var a = this.ra,
        c = a.Wa();
      return h.B.nj(a.C, new h.g.T(c.x, c.y + h.B.Qz));
    case h.B.types.zh:
      return (a = this.ra), (c = a.pa) ? h.B.bf(c) : h.B.Uk(a.V());
    case h.B.types.Wb:
      return h.B.af(this.ra.V());
    case h.B.types.xd:
      return (a = this.ra), h.B.af(a.V());
    case h.B.types.Fb:
      return (a = this.ra), ha(a);
    case h.B.types.hd:
      return (a = this.ra), ha(a.V());
    case h.B.types.fd:
      return (a = this.ra), ha(a.V());
  }
  return null;
};
h.g.F = function (a) {
  this.FF = a;
};
h.g.F.prototype.toString = function () {
  return this.FF;
};
h.g.F.Xo = new h.g.F("animate");
h.g.F.Dz = new h.g.F("circle");
h.g.F.Qt = new h.g.F("clipPath");
h.g.F.Yt = new h.g.F("defs");
h.g.F.np = new h.g.F("feComposite");
h.g.F.fA = new h.g.F("feComponentTransfer");
h.g.F.gA = new h.g.F("feFlood");
h.g.F.hA = new h.g.F("feFuncA");
h.g.F.iA = new h.g.F("feGaussianBlur");
h.g.F.jA = new h.g.F("fePointLight");
h.g.F.kA = new h.g.F("feSpecularLighting");
h.g.F.lu = new h.g.F("filter");
h.g.F.NG = new h.g.F("foreignObject");
h.g.F.Uc = new h.g.F("g");
h.g.F.mk = new h.g.F("image");
h.g.F.rk = new h.g.F("line");
h.g.F.Pe = new h.g.F("path");
h.g.F.Yu = new h.g.F("pattern");
h.g.F.mB = new h.g.F("polygon");
h.g.F.Ad = new h.g.F("rect");
h.g.F.Wi = new h.g.F("svg");
h.g.F.tv = new h.g.F("text");
h.g.F.xv = new h.g.F("tspan");
h.g.j = {};
h.g.j.$m = "http://www.w3.org/2000/svg";
h.g.j.pp = "http://www.w3.org/1999/xhtml";
h.g.j.jd = "http://www.w3.org/1999/xlink";
h.g.j.Bg = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  COMMENT_NODE: 8,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
};
h.g.j.qe = null;
h.g.j.lq = 0;
h.g.j.pn = null;
h.g.j.K = function (a, c, d) {
  a = document.createElementNS(h.g.j.$m, String(a));
  for (var e in c) a.setAttribute(e, c[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  d && d.appendChild(a);
  return a;
};
h.g.j.Rb = function (a, c) {
  var d = a.getAttribute("class") || "";
  -1 == (" " + d + " ").indexOf(" " + c + " ") &&
    (d && (d += " "), a.setAttribute("class", d + c));
};
h.g.j.TJ = function (a, c) {
  c = c.split(" ");
  for (var d = 0; d < c.length; d++) h.g.j.cd(a, c[d]);
};
h.g.j.cd = function (a, c) {
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
h.g.j.yr = function (a, c) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ");
};
h.g.j.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
h.g.j.Dj = function (a, c) {
  var d = c.nextSibling;
  c = c.parentNode;
  if (!c) throw Error("Reference node has no parent.");
  d ? c.insertBefore(a, d) : c.appendChild(a);
};
h.g.j.containsNode = function (a, c) {
  return !!(
    a.compareDocumentPosition(c) & h.g.j.Bg.DOCUMENT_POSITION_CONTAINED_BY
  );
};
h.g.j.Tl = function (a, c) {
  a.style.transform = c;
  a.style["-webkit-transform"] = c;
};
h.g.j.cm = function () {
  h.g.j.lq++;
  h.g.j.qe || (h.g.j.qe = {});
};
h.g.j.dm = function () {
  h.g.j.lq--;
  h.g.j.lq || (h.g.j.qe = null);
};
h.g.j.xJ = function (a) {
  var c = a.textContent + "\n" + a.className.baseVal,
    d;
  if (h.g.j.qe && (d = h.g.j.qe[c])) return d;
  try {
    d =
      h.g.userAgent.ee || h.g.userAgent.vh
        ? a.getBBox().width
        : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  h.g.j.qe && (h.g.j.qe[c] = d);
  return d;
};
h.g.j.kr = function (a, c, d, e) {
  return h.g.j.fD(a, c + "pt", d, e);
};
h.g.j.fD = function (a, c, d, e) {
  var f = a.textContent;
  a = f + "\n" + a.className.baseVal;
  var g;
  if (h.g.j.qe && (g = h.g.j.qe[a])) return g;
  h.g.j.pn ||
    ((g = document.createElement("canvas")),
    (g.className = "blocklyComputeCanvas"),
    document.body.appendChild(g),
    (h.g.j.pn = g.getContext("2d")));
  h.g.j.pn.font = d + " " + c + " " + e;
  g = h.g.j.pn.measureText(f).width;
  h.g.j.qe && (h.g.j.qe[a] = g);
  return g;
};
h.g.j.VD = function (a, c, d) {
  var e = document.createElement("span");
  e.style.font = c + " " + a + " " + d;
  e.textContent = "Hg";
  a = document.createElement("div");
  a.style.width = "1px";
  a.style.height = "0px";
  c = document.createElement("div");
  c.setAttribute("style", "position: fixed; top: 0; left: 0; display: flex;");
  c.appendChild(e);
  c.appendChild(a);
  document.body.appendChild(c);
  try {
    (d = {}),
      (c.style.alignItems = "baseline"),
      (d.pe = a.offsetTop - e.offsetTop),
      (c.style.alignItems = "flex-end"),
      (d.height = a.offsetTop - e.offsetTop);
  } finally {
    document.body.removeChild(c);
  }
  return d;
};
h.fb = {};
h.fb.Kq = 0;
h.fb.En = null;
h.fb.DC = function (a) {
  var c = a.C,
    d = a.qa();
  c.Wc.play("delete");
  a = ka(c, d);
  d = d.cloneNode(!0);
  d.MF = a.x;
  d.NF = a.y;
  d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  x(c).appendChild(d);
  d.Vv = d.getBBox();
  h.fb.Gw(d, c.J, new Date(), c.scale);
};
h.fb.Gw = function (a, c, d, e) {
  var f = (new Date() - d) / 150;
  1 < f
    ? h.g.j.removeNode(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.MF + (((c ? -1 : 1) * a.Vv.width * e) / 2) * f) +
          "," +
          (a.NF + a.Vv.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(h.fb.Gw, 10, a, c, d, e));
};
h.fb.mC = function (a) {
  var c = a.C,
    d = c.scale;
  c.Wc.play("click");
  if (!(1 > d)) {
    var e = ka(c, a.qa());
    a.M
      ? ((e.x += (a.J ? 3 : -3) * d), (e.y += 13 * d))
      : a.W && ((e.x += (a.J ? -23 : 23) * d), (e.y += 3 * d));
    a = h.g.j.K(
      h.g.F.Dz,
      {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10,
      },
      x(c)
    );
    h.fb.lw(a, new Date(), d);
  }
};
h.fb.lw = function (a, c, d) {
  var e = (new Date() - c) / 150;
  1 < e
    ? h.g.j.removeNode(a)
    : (a.setAttribute("r", 25 * e * d),
      (a.style.opacity = 1 - e),
      (h.fb.Kq = setTimeout(h.fb.lw, 10, a, c, d)));
};
h.fb.CC = function (a) {
  a.C.Wc.play("disconnect");
  if (!(1 > a.C.scale)) {
    var c = y(a).height;
    c = (Math.atan(10 / c) / Math.PI) * 180;
    a.J || (c *= -1);
    h.fb.Fw(a.qa(), c, new Date());
  }
};
h.fb.Fw = function (a, c, d) {
  var e = (new Date() - d) / 200;
  1 < e
    ? (a.bm = "")
    : ((a.bm =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")"),
      (h.fb.En = a),
      (h.fb.Kq = setTimeout(h.fb.Fw, 10, a, c, d)));
  a.setAttribute("transform", a.lm + a.bm);
};
h.fb.Lq = function () {
  if (h.fb.En) {
    clearTimeout(h.fb.Kq);
    var a = h.fb.En;
    a.bm = "";
    a.setAttribute("transform", a.lm);
    h.fb.En = null;
  }
};
h.h.ne = function (a) {
  h.h.ne.u.constructor.call(this);
  this.qd = "undefined" == typeof a;
  this.ac = a ? a : "";
  this.Oa = !1;
};
h.g.object.U(h.h.ne, h.h.Abstract);
h.h.ne.prototype.Kr = !0;
h.h.Dg = function (a, c, d, e) {
  h.h.Dg.u.constructor.call(this, a ? a.C.id : void 0);
  this.mb = a ? a.id : null;
  this.element = "undefined" == typeof c ? "" : c;
  this.oldValue = "undefined" == typeof d ? "" : d;
  this.newValue = "undefined" == typeof e ? "" : e;
};
h.g.object.U(h.h.Dg, h.h.ne);
h.h.Dg.prototype.type = h.h.Wp;
h.h.Dg.prototype.oa = function () {
  var a = h.h.Dg.u.oa.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.mb && (a.blockId = this.mb);
  return a;
};
h.h.Dg.prototype.ba = function (a) {
  h.h.Dg.u.ba.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.mb = a.blockId;
};
h.A.register(h.A.Z.Lb, h.h.Wp, h.h.Dg);
h.h.Je = function (a, c, d) {
  h.h.Je.u.constructor.call(this, a ? a.C.id : void 0);
  this.mb = a ? a.id : null;
  this.Ix = c;
  this.Wv = d;
};
h.g.object.U(h.h.Je, h.h.ne);
h.h.Je.prototype.type = h.h.Kt;
h.h.Je.prototype.oa = function () {
  var a = h.h.Je.u.oa.call(this);
  a.isStart = this.Ix;
  a.blockId = this.mb;
  a.blocks = this.Wv;
  return a;
};
h.h.Je.prototype.ba = function (a) {
  h.h.Je.u.ba.call(this, a);
  this.Ix = a.isStart;
  this.mb = a.blockId;
  this.Wv = a.blocks;
};
h.A.register(h.A.Z.Lb, h.h.Kt, h.h.Je);
h.fe = function (a) {
  this.pg = h.selected = a;
  this.o = a.C;
  this.Wg = this.Lr = null;
  this.dl = la(this, this.pg);
  this.Ac = this.Ib = null;
  this.xf = !1;
  this.bl = this.Br = this.ai = null;
  this.mn = na(this);
};
h.fe.Ri = { sp: 0, GA: 1, gv: 2 };
h.fe.prototype.I = function () {
  this.mn.length = 0;
  h.h.disable();
  try {
    this.dl && this.dl.I(), this.Wg && this.Wg.I();
  } finally {
    h.h.enable();
  }
};
h.fe.prototype.update = function (a, c) {
  var d = this.Ib && this.Ac ? h.Tt : h.tc;
  for (var e = null, f = null, g = 0; g < this.mn.length; g++) {
    var k = this.mn[g],
      l = k.closest(d, a);
    l.connection && ((e = l.connection), (f = k), (d = l.Go));
  }
  e = ((d = { closest: e, local: f, Go: d }), !!d.closest) && c != h.$t;
  if (
    (this.xf = !!c && !this.pg.getParent() && this.pg.ad() && !e) ||
    oa(this, d, a)
  ) {
    h.h.disable();
    d.closest
      ? ((a = this.Ib != d.closest),
        (c = this.Ac != d.local),
        this.Ib && this.Ac && (a || c || this.xf) && pa(this))
      : pa(this);
    this.Ac = this.Ib = this.ai = null;
    if (!this.xf && ((a = d.closest), (c = d.local), a))
      if (a == this.Ib || a.V().ye())
        console.log("Trying to connect to an insertion marker");
      else {
        this.Ib = a;
        this.Ac = c;
        a = this.Ib;
        d = this.Ac;
        c = this.pg;
        d.type == h.ge || d.type == h.ie
          ? ((e = !a.isConnected()) ||
              ((e = a.ua()),
              d.type == h.ge
                ? ((d = e.M), (c = h.ga.Kx(c, e)))
                : ((d = e.W), (c = c.co())),
              (e = c ? z(qa(d), c, d, !1) : !1)),
            (c = e ? h.fe.Ri.sp : h.fe.Ri.gv))
          : (c = h.fe.Ri.sp);
        switch (c) {
          case h.fe.Ri.GA:
            this.Br = this.Ib.V();
            break;
          case h.fe.Ri.sp:
            e = this.Ac;
            c = this.Ib;
            d = this.Lr && e == this.Lr ? this.Wg : this.dl;
            e = d.lr(e.V(), e);
            if (e == this.ai)
              throw Error(
                "Made it to showInsertionMarker_ even though the marker isn't changing"
              );
            d.La();
            d.sa = !0;
            d.qa().setAttribute("visibility", "visible");
            e && c && ra(d, e, c);
            c && e.connect(c);
            this.ai = e;
            break;
          case h.fe.Ri.gv:
            (this.bl = this.Ib.ua()), sa(this.bl.Cb, "blocklyReplaceable", !0);
        }
        a &&
          ((d = a.L.C.rb.aa()),
          (c = ta(d, a)),
          a.type == h.lb || a.type == h.ge
            ? ((d = d.Yi),
              (c =
                h.g.v.moveBy(0, -d) + h.g.v.X("v", d) + c.Ud + h.g.v.X("v", d)))
            : ((d = d.yk - d.ub),
              (c =
                h.g.v.moveBy(-d, 0) +
                h.g.v.X("h", d) +
                c.fh +
                h.g.v.X("h", d))),
          (d = a.L.Wa()),
          (h.ga.zx = h.g.j.K(
            h.g.F.Pe,
            {
              class: "blocklyHighlightedConnectionPath",
              d: c,
              transform:
                "translate(" +
                (a.x - d.x) +
                "," +
                (a.y - d.y) +
                ")" +
                (a.L.J ? " scale(-1 1)" : ""),
            },
            a.L.qa()
          )));
      }
    h.h.enable();
  }
};
function la(a, c) {
  var d = c.type;
  h.h.disable();
  try {
    var e = a.o.ls(d);
    e.Ly(!0);
    if (c.Rd) {
      var f = c.Rd();
      f && e.Xf(f);
    }
    for (a = 0; a < c.S.length; a++) {
      var g = c.S[a];
      if (g.name != h.Sc.gk) {
        var k = e.S[a];
        for (d = 0; d < g.hb.length; d++) k.hb[d].setValue(g.hb[d].getValue());
      }
    }
    e.oi(c.isCollapsed());
    e.ri(ua(c));
    e.Cj();
    e.qa().setAttribute("visibility", "hidden");
  } finally {
    h.h.enable();
  }
  return e;
}
function na(a) {
  var c = a.pg.we(!1),
    d = a.pg.co();
  if (d && d != a.pg.Y) {
    c.push(d);
    a.Lr = d;
    if (a.Wg) {
      h.h.disable();
      try {
        a.Wg.I();
      } finally {
        h.h.enable();
      }
    }
    a.Wg = la(a, d.V());
  }
  return c;
}
function oa(a, c, d) {
  var e = c.local,
    f = c.closest;
  c = c.Go;
  if (e && f) {
    if (a.Ac && a.Ib) {
      if (a.Ib == f && a.Ac == e) return !1;
      e = a.Ac.x + d.x - a.Ib.x;
      a = a.Ac.y + d.y - a.Ib.y;
      a = Math.sqrt(e * e + a * a);
      return !(f && c > a - h.Iz);
    }
    if (a.Ac || a.Ib)
      console.error(
        "Only one of localConnection_ and closestConnection_ was set."
      );
    else return !0;
  } else return !(!a.Ac || !a.Ib);
  console.error(
    "Returning true from shouldUpdatePreviews, but it's not clear why."
  );
  return !0;
}
function pa(a) {
  a.Ib && a.Ib.ua() && (h.g.j.removeNode(h.ga.zx), delete h.ga.zx);
  if (a.bl) sa(a.bl.Cb, "blocklyReplaceable", !1), (a.bl = null);
  else if (a.Br) a.Br = null;
  else if (a.ai)
    if (a.ai) {
      var c = a.ai,
        d = c.V(),
        e = d.Y,
        f = d.W,
        g = d.M;
      g = c.type == h.lb && !(g && g.pa);
      !(c != e || (f && f.pa)) || g
        ? w(c.ua(), !1)
        : c.type == h.Ta && c != e
        ? ((e = c.pa),
          w(e.V(), !1),
          (f = f ? f.pa : null),
          w(d, !0),
          f && f.connect(e))
        : w(d, !0);
      if (c.pa)
        throw Error(
          "markerConnection_ still connected at the end of disconnectInsertionMarker"
        );
      a.ai = null;
      d.qa().setAttribute("visibility", "hidden");
    } else console.log("No insertion marker connection to disconnect");
}
h.fe.prototype.vj = function () {
  var a = [];
  this.dl && a.push(this.dl);
  this.Wg && a.push(this.Wg);
  return a;
};
h.qh = function (a, c) {
  this.ob = a;
  this.o = c;
  this.ef = new h.fe(this.ob);
  this.Hh = null;
  this.xf = !1;
  this.uf = this.ob.Wa();
  this.Hn = h.qh.DD(a);
};
h.qh.prototype.I = function () {
  this.Hn.length = 0;
  this.ef && this.ef.I();
};
h.qh.DD = function (a) {
  var c = [];
  a = q(a, !1);
  for (var d = 0, e; (e = a[d]); d++) {
    e = va(e);
    for (var f = 0; f < e.length; f++) {
      var g = { location: e[f].sJ(), icon: e[f] };
      c.push(g);
    }
  }
  return c;
};
function wa(a, c, d) {
  d = a.Qj(d);
  var e = h.g.T.sum(a.uf, d);
  a.ob.js(e);
  for (e = 0; e < a.Hn.length; e++) {
    var f = a.Hn[e];
    f.icon.cK(h.g.T.sum(f.location, d));
  }
  a.Hh = xa(a.o, c);
  a.ef.update(d, a.Hh);
  a.xf = a.ef.xf;
  c = a.o.qc;
  a.xf
    ? (a.ob.Ul(!0), a.Hh == h.lp && c && ya(c, !0))
    : (a.ob.Ul(!1), c && ya(c, !1));
}
function za(a, c, d) {
  wa(a, c, d);
  a.Hn = [];
  c = new h.h.Je(a.ob, !1, q(a.ob, !1));
  h.h.Ea(c);
  h.g.j.dm();
  h.fb.Lq();
  d = a.Qj(d);
  c = h.g.T.sum(a.uf, d);
  var e = a.ob;
  e.qm && (e.translate(c.x, c.y), e.C.kd.rn(e.C.Ab));
  c = a.o.qc;
  a.xf
    ? (c && setTimeout(c.un.bind(c), 100), a.cl(), a.ob.I(!1, !0), (h.tj = []))
    : c && c.un();
  a.xf ||
    (Aa(a.ob, d.x, d.y),
    a.ob.jh(!1),
    a.cl(),
    a.ef.Ib
      ? ((d = a.ef),
        d.Ib &&
          (h.h.disable(),
          pa(d),
          h.h.enable(),
          d.Ac.connect(d.Ib),
          d.pg.sa && (h.fb.mC((A(d.Ac) ? d.Ib : d.Ac).V()), Ba(d.pg.Oc()))))
      : a.ob.La(),
    Ca(a.ob));
  a.o.hc(!0);
  (d = a.o.wa) &&
    "function" == typeof d.Qs &&
    d.Qs(a.ob.ad() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  h.h.ta(!1);
}
h.qh.prototype.cl = function () {
  var a = new h.h.ek(this.ob);
  a.qs = this.uf;
  a.li();
  h.h.Ea(a);
};
h.qh.prototype.Qj = function (a) {
  a = new h.g.T(a.x / this.o.scale, a.y / this.o.scale);
  this.o.Zn && a.scale(1 / this.o.options.bd.scale);
  return a;
};
h.qh.prototype.vj = function () {
  return this.ef && this.ef.vj ? this.ef.vj() : [];
};
h.Touch = {};
h.Touch.vv =
  "ontouchstart" in h.g.global ||
  !!(
    h.g.global.document &&
    document.documentElement &&
    "ontouchstart" in document.documentElement
  ) ||
  !(
    !h.g.global.navigator ||
    (!h.g.global.navigator.maxTouchPoints &&
      !h.g.global.navigator.msMaxTouchPoints)
  );
h.Touch.km = null;
h.Touch.Te = {};
h.g.global.PointerEvent
  ? (h.Touch.Te = {
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
  : h.Touch.vv &&
    (h.Touch.Te = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"],
    });
h.ho = 0;
h.TD = function (a, c) {
  h.Yg();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (h.ho = setTimeout(function () {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      c && Da(c, a);
    }, h.PA));
};
h.Yg = function () {
  h.ho && (clearTimeout(h.ho), (h.ho = 0));
};
h.Touch.sn = function () {
  h.Touch.km = null;
};
h.Touch.gt = function (a) {
  return !h.Touch.LD(a) || h.Touch.dC(a);
};
h.Touch.On = function (a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 !== a.changedTouches[0].identifier &&
      null !== a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
h.Touch.dC = function (a) {
  var c = h.Touch.On(a);
  return void 0 !== h.Touch.km && null !== h.Touch.km
    ? h.Touch.km == c
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((h.Touch.km = c), !0)
    : !1;
};
h.Touch.qF = function (a) {
  if (h.g.Sa.startsWith(a.type, "touch")) {
    var c = a.changedTouches[0];
    a.clientX = c.clientX;
    a.clientY = c.clientY;
  }
};
h.Touch.LD = function (a) {
  return (
    h.g.Sa.startsWith(a.type, "touch") ||
    h.g.Sa.startsWith(a.type, "mouse") ||
    h.g.Sa.startsWith(a.type, "pointer")
  );
};
h.Touch.bo = function (a) {
  return (
    h.g.Sa.startsWith(a.type, "touch") || h.g.Sa.startsWith(a.type, "pointer")
  );
};
h.Touch.zF = function (a) {
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
h.g.mH = function () {};
h.Bk = function (a) {
  this.o = a;
  this.Jd = new h.Ma(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.Zd = new h.Ma(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.Rk = h.g.j.K(
    h.g.F.Ad,
    { height: h.Ma.nc, width: h.Ma.nc, class: "blocklyScrollbarBackground" },
    null
  );
  h.g.j.Dj(this.Rk, a.ng);
  this.zb = null;
};
h.Bk.prototype.I = function () {
  h.g.j.removeNode(this.Rk);
  this.zb = this.o = this.Rk = null;
  this.Jd.I();
  this.Jd = null;
  this.Zd.I();
  this.Zd = null;
};
h.Bk.prototype.resize = function () {
  var a = this.o.od();
  if (a) {
    var c = !1,
      d = !1;
    this.zb &&
    this.zb.Eb == a.Eb &&
    this.zb.Qb == a.Qb &&
    this.zb.Hc == a.Hc &&
    this.zb.uc == a.uc
      ? ((this.zb &&
          this.zb.$e == a.$e &&
          this.zb.Bb == a.Bb &&
          this.zb.Jc == a.Jc) ||
          (c = !0),
        (this.zb &&
          this.zb.Fd == a.Fd &&
          this.zb.Db == a.Db &&
          this.zb.wc == a.wc) ||
          (d = !0))
      : (d = c = !0);
    if (c || d) {
      try {
        h.h.disable(), c && this.Jd.resize(a), d && this.Zd.resize(a);
      } finally {
        h.h.enable();
      }
      Ea(this.o);
    }
    (this.zb && this.zb.Eb == a.Eb && this.zb.uc == a.uc) ||
      this.Rk.setAttribute("x", this.Zd.position.x);
    (this.zb && this.zb.Qb == a.Qb && this.zb.Hc == a.Hc) ||
      this.Rk.setAttribute("y", this.Jd.position.y);
    this.zb = a;
  }
};
h.Bk.prototype.set = function (a, c) {
  var d = {};
  a *= this.Jd.ratio;
  c *= this.Zd.ratio;
  var e = this.Zd.Wd,
    f = a / this.Jd.Wd;
  d.x = isNaN(f) ? 0 : f;
  e = c / e;
  d.y = isNaN(e) ? 0 : e;
  this.o.Vl(d);
  Fa(this.Jd, a);
  Fa(this.Zd, c);
};
h.Ma = function (a, c, d, e) {
  this.o = a;
  this.Pj = d || !1;
  this.Rh = c;
  this.ratio = this.zb = null;
  this.Sk(e);
  this.position = new h.g.T(0, 0);
  a = h.Ma.nc;
  c
    ? (this.oc.setAttribute("height", a),
      this.pf.setAttribute("height", a),
      this.ed.setAttribute("height", a - 5),
      this.ed.setAttribute("y", 2.5),
      (this.Al = "width"),
      (this.uy = "x"))
    : (this.oc.setAttribute("width", a),
      this.pf.setAttribute("width", a),
      this.ed.setAttribute("width", a - 5),
      this.ed.setAttribute("x", 2.5),
      (this.Al = "height"),
      (this.uy = "y"));
  this.ny = h.Ca(this.oc, "mousedown", this, this.mE);
  this.oy = h.Ca(this.ed, "mousedown", this, this.nE);
};
b = h.Ma.prototype;
b.ys = new h.g.T(0, 0);
b.Ry = 0;
b.Wd = 0;
b.Ng = 0;
b.ml = 0;
b.gg = !0;
b.Fh = !0;
h.Ma.nc = 15;
h.Touch.vv && (h.Ma.nc = 25);
h.Ma.WD = function (a, c) {
  return a &&
    c &&
    a.Eb == c.Eb &&
    a.Qb == c.Qb &&
    a.Bb == c.Bb &&
    a.Db == c.Db &&
    a.Hc == c.Hc &&
    a.uc == c.uc &&
    a.$e == c.$e &&
    a.Fd == c.Fd &&
    a.Jc == c.Jc &&
    a.wc == c.wc
    ? !0
    : !1;
};
h.Ma.prototype.I = function () {
  Ga();
  h.sb(this.ny);
  this.ny = null;
  h.sb(this.oy);
  this.oy = null;
  h.g.j.removeNode(this.pf);
  this.oc = this.O = this.pf = null;
  this.ed && (this.o.pc.unsubscribe(this.ed), (this.ed = null));
  this.o = null;
};
function Fa(a, c) {
  a.ml = c;
  a.ed.setAttribute(a.uy, a.ml);
}
function Ha(a, c) {
  a.Wd = c;
  a.pf.setAttribute(a.Al, a.Wd);
  a.oc.setAttribute(a.Al, a.Wd);
}
h.Bk.prototype.pi = function (a) {
  this.Jd.pi(a);
  this.Zd.pi(a);
};
b = h.Ma.prototype;
b.setPosition = function (a, c) {
  this.position.x = a;
  this.position.y = c;
  h.g.j.Tl(
    this.pf,
    "translate(" +
      (this.position.x + this.ys.x) +
      "px," +
      (this.position.y + this.ys.y) +
      "px)"
  );
};
b.resize = function (a) {
  if (!a && ((a = this.o.od()), !a)) return;
  h.Ma.WD(a, this.zb) ||
    ((this.zb = a), this.Rh ? Ia(this, a) : Ja(this, a), Ka(this));
};
function Ia(a, c) {
  var d = c.Eb - 1;
  a.Pj && (d -= h.Ma.nc);
  Ha(a, Math.max(0, d));
  d = c.uc + 0.5;
  a.Pj && a.o.J && (d += h.Ma.nc);
  a.setPosition(d, c.Hc + c.Qb - h.Ma.nc - 0.5);
  La(a, c);
}
function La(a, c) {
  a.Pj || a.$b(a.Wd < c.$e);
  a.ratio = a.Wd / c.$e;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Ng = Math.max(0, c.Eb * a.ratio);
  a.ed.setAttribute(a.Al, a.Ng);
  Fa(a, Ma(a, (c.Bb - c.Jc) * a.ratio));
}
function Ja(a, c) {
  var d = c.Qb - 1;
  a.Pj && (d -= h.Ma.nc);
  Ha(a, Math.max(0, d));
  d = c.uc + 0.5;
  a.o.J || (d += c.Eb - h.Ma.nc - 1);
  a.setPosition(d, c.Hc + 0.5);
  Na(a, c);
}
function Na(a, c) {
  a.Pj || a.$b(a.Wd < c.Fd);
  a.ratio = a.Wd / c.Fd;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Ng = Math.max(0, c.Qb * a.ratio);
  a.ed.setAttribute(a.Al, a.Ng);
  Fa(a, Ma(a, (c.Db - c.wc) * a.ratio));
}
b.Sk = function (a) {
  var c = "blocklyScrollbar" + (this.Rh ? "Horizontal" : "Vertical");
  a && (c += " " + a);
  this.pf = h.g.j.K(h.g.F.Wi, { class: c }, null);
  this.O = h.g.j.K(h.g.F.Uc, {}, this.pf);
  this.oc = h.g.j.K(h.g.F.Ad, { class: "blocklyScrollbarBackground" }, this.O);
  a = Math.floor((h.Ma.nc - 5) / 2);
  this.ed = h.g.j.K(
    h.g.F.Ad,
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.O
  );
  this.o.pc.subscribe(this.ed, "scrollbarColour", "fill");
  this.o.pc.subscribe(this.ed, "scrollbarOpacity", "fill-opacity");
  h.g.j.Dj(this.pf, x(this.o));
};
b.isVisible = function () {
  return this.gg;
};
b.pi = function (a) {
  var c = a != this.Fh;
  this.Fh = a;
  c && this.nm();
};
b.$b = function (a) {
  var c = a != this.isVisible();
  if (this.Pj) throw Error("Unable to toggle visibility of paired scrollbars.");
  this.gg = a;
  c && this.nm();
};
b.nm = function () {
  this.Fh && this.isVisible()
    ? this.pf.setAttribute("display", "block")
    : this.pf.setAttribute("display", "none");
};
b.mE = function (a) {
  Oa(this.o);
  h.Touch.sn();
  Ga();
  if (h.g.zl(a)) a.stopPropagation();
  else {
    var c = h.g.Gl(a, x(this.o), Pa(this.o));
    c = this.Rh ? c.x : c.y;
    var d = h.g.kl(this.ed);
    d = this.Rh ? d.x : d.y;
    var e = this.ml,
      f = 0.95 * this.Ng;
    c <= d ? (e -= f) : c >= d + this.Ng && (e += f);
    Fa(this, Ma(this, e));
    Ka(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
b.nE = function (a) {
  Oa(this.o);
  Ga();
  h.g.zl(a)
    ? a.stopPropagation()
    : ((this.AF = this.ml),
      Qa(this.o),
      (this.Ry = this.Rh ? a.clientX : a.clientY),
      (h.Ma.eh = h.Ca(document, "mouseup", this, this.rE)),
      (h.Ma.dh = h.Ca(document, "mousemove", this, this.oE)),
      a.stopPropagation(),
      a.preventDefault());
};
b.oE = function (a) {
  Fa(this, Ma(this, this.AF + ((this.Rh ? a.clientX : a.clientY) - this.Ry)));
  Ka(this);
};
b.rE = function () {
  Ra(this.o);
  h.Touch.sn();
  Ga();
};
function Ga() {
  h.dc(!0);
  h.Ma.eh && (h.sb(h.Ma.eh), (h.Ma.eh = null));
  h.Ma.dh && (h.sb(h.Ma.dh), (h.Ma.dh = null));
}
function Ma(a, c) {
  return (c = 0 >= c || isNaN(c) || a.Wd < a.Ng ? 0 : Math.min(c, a.Wd - a.Ng));
}
function Ka(a) {
  var c = a.ml / a.Wd;
  isNaN(c) && (c = 0);
  var d = {};
  a.Rh ? (d.x = c) : (d.y = c);
  a.o.Vl(d);
}
b.set = function (a) {
  Fa(this, Ma(this, a * this.ratio));
  Ka(this);
};
h.g.Od = {};
h.g.Od.qt = function (a) {
  return (a * Math.PI) / 180;
};
h.g.Od.IF = function (a) {
  return (180 * a) / Math.PI;
};
h.g.Od.Lk = function (a, c, d) {
  if (d < a) {
    var e = d;
    d = a;
    a = e;
  }
  return Math.max(a, Math.min(c, d));
};
h.Wt = function () {};
function z(a, c, d, e, f) {
  return a.on(c, d, e, f) == h.ga.Am;
}
h.Wt.prototype.on = function (a, c, d, e) {
  if (a && c) {
    if (A(a)) {
      var f = a.V();
      var g = c.V();
    } else (g = a.V()), (f = c.V());
    f =
      f == g
        ? h.ga.cv
        : c.type != h.Qi[a.type]
        ? h.ga.fv
        : f.C !== g.C
        ? h.ga.av
        : f.Ja && !g.Ja
        ? h.ga.dv
        : h.ga.Am;
  } else f = h.ga.ev;
  if (f != h.ga.Am) a = f;
  else {
    a: if (((f = a.Gg), (g = c.Gg), f && g)) {
      for (var k = 0; k < f.length; k++)
        if (-1 != g.indexOf(f[k])) {
          f = !0;
          break a;
        }
      f = !1;
    } else f = !0;
    a = f ? (d && !Sa(a, c, e || 0) ? h.ga.bv : h.ga.Am) : h.ga.$u;
  }
  return a;
};
function Ta(a, c, d) {
  switch (a) {
    case h.ga.cv:
      return "Attempted to connect a block to itself.";
    case h.ga.av:
      return "Blocks not on same workspace.";
    case h.ga.fv:
      return "Attempt to connect incompatible types.";
    case h.ga.ev:
      return "Target connection is null.";
    case h.ga.$u:
      return (
        "Connection checks failed. " +
        (c + " expected " + c.Gg + ", found " + d.Gg)
      );
    case h.ga.dv:
      return "Connecting non-shadow to shadow block.";
    case h.ga.bv:
      return "Drag checks failed.";
    default:
      return "Unknown connection failure: this should never happen!";
  }
}
function Sa(a, c, d) {
  if (Ua(a, c) > d || c.V().ye()) return !1;
  switch (c.type) {
    case h.ie:
      return (
        a.pa || -1 != h.tj.indexOf(c)
          ? (a = !1)
          : c.pa
          ? ((a = c.ua()), (a = a.ye() ? !(a.W && a.W.ua()) : !1))
          : (a = !0),
        a
      );
    case h.ge:
      if ((c.isConnected() && !c.ua().ye()) || a.isConnected()) return !1;
      break;
    case h.lb:
      if (c.isConnected() && !c.ua().zc() && !c.ua().Ja) return !1;
      break;
    case h.Ta:
      if (c.isConnected() && !a.V().Y && !c.ua().Ja && c.ua().Y) return !1;
      break;
    default:
      return !1;
  }
  return -1 != h.tj.indexOf(c) ? !1 : !0;
}
h.A.register(h.A.Z.Ut, h.A.jp, h.Wt);
h.Bh = function (a, c, d, e) {
  this.name = a;
  this.Eg = c || Object.create(null);
  this.oq = d || Object.create(null);
  this.hw = e || Object.create(null);
  this.fontStyle = Object.create(null);
  this.kt = null;
  h.A.register(h.A.Z.Rp, a, this);
};
h.Bh.prototype.ve = function () {
  return this.name + "-theme";
};
function Va(a, c) {
  return (c = a.hw[c]) && "string" == typeof c && Va(a, c)
    ? Va(a, c)
    : c
    ? String(c)
    : null;
}
h.Bh.vC = function (a, c) {
  var d = new h.Bh(a),
    e = c.base;
  e &&
    ("string" == typeof e && (e = h.A.pr(h.A.Z.Rp, e)),
    e instanceof h.Bh && (h.g.object.pj(d, e), (d.name = a)));
  h.g.object.pj(d.Eg, c.blockStyles);
  h.g.object.pj(d.oq, c.categoryStyles);
  h.g.object.pj(d.hw, c.componentStyles);
  h.g.object.pj(d.fontStyle, c.fontStyle);
  null != c.startHats && (d.kt = c.startHats);
  return d;
};
h.Kf = {};
h.Kf.ug = {};
h.Kf.ug.uC = {
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
h.Kf.ug.oq = {
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
h.Kf.ug = new h.Bh("classic", h.Kf.ug.uC, h.Kf.ug.oq);
h.g.pk = {};
h.g.pk.iE = 0;
h.g.pk.ax = function () {
  return "blockly-" + (h.g.pk.iE++).toString(36);
};
h.g.va = {};
h.g.va.ep = "categoryToolbox";
h.g.va.nu = "flyoutToolbox";
h.g.va.Qe = { Tp: h.Ek, Nt: h.dn, wp: h.me, Um: h.Dk };
h.g.va.rw = function (a) {
  if (!a) return null;
  if (a instanceof Element || "string" == typeof a)
    (a = h.g.va.Cs(a)), (a = h.g.va.oC(a));
  h.g.va.QF(a);
  return a;
};
h.g.va.QF = function (a) {
  var c = a.kind;
  a = a.contents;
  if (c && c != h.g.va.nu && c != h.g.va.ep)
    throw Error(
      "Invalid toolbox kind " +
        c +
        ". Please supply either " +
        h.g.va.nu +
        " or " +
        h.g.va.ep
    );
  if (!a) throw Error("Toolbox must have a contents attribute.");
};
h.g.va.qw = function (a) {
  return a
    ? a.contents
      ? a.contents
      : Array.isArray(a) && 0 < a.length && !a[0].nodeType
      ? a
      : h.g.va.Bt(a)
    : [];
};
h.g.va.ol = function (a) {
  if (!a) return !1;
  var c = a.kind;
  return c
    ? c == h.g.va.ep
    : !!a.contents.filter(function (d) {
        return "CATEGORY" == d.kind.toUpperCase();
      }).length;
};
h.g.va.BJ = function (a) {
  return a && a.contents
    ? !!a.contents.filter(function (c) {
        return "CATEGORY" == c.kind.toUpperCase();
      }).length
    : !1;
};
h.g.va.oC = function (a) {
  var c = { contents: h.g.va.Bt(a) };
  a instanceof Node && h.g.va.Qv(a, c);
  return c;
};
h.g.va.Bt = function (a) {
  var c = [],
    d = a.childNodes;
  d || (d = a);
  a = 0;
  for (var e; (e = d[a]); a++)
    if (e.tagName) {
      var f = {},
        g = e.tagName.toUpperCase();
      f.kind = g;
      "BLOCK" == g
        ? (f.blockxml = e)
        : e.childNodes &&
          0 < e.childNodes.length &&
          (f.contents = h.g.va.Bt(e));
      h.g.va.Qv(e, f);
      c.push(f);
    }
  return c;
};
h.g.va.Qv = function (a, c) {
  for (var d = 0; d < a.attributes.length; d++) {
    var e = a.attributes[d];
    -1 < e.nodeName.indexOf("css-")
      ? ((c.cssconfig = c.cssconfig || {}),
        (c.cssconfig[e.nodeName.replace("css-", "")] = e.value))
      : (c[e.nodeName] = e.value);
  }
};
h.g.va.Cs = function (a) {
  if (a) {
    if (
      ("string" != typeof a &&
        (h.g.userAgent.ee && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a &&
        ((a = h.N.Ee(a)), "xml" != a.nodeName.toLowerCase()))
    )
      throw TypeError("Toolbox should be an <xml> document.");
  } else a = null;
  return a;
};
h.h.Ki = function (a) {
  this.qd = "undefined" == typeof a;
  this.ac = a ? a.id : "";
  this.group = h.h.Zb();
  this.Oa = !1;
};
h.g.object.U(h.h.Ki, h.h.Abstract);
h.h.Ki.prototype.type = h.h.mu;
h.h.Ki.prototype.oa = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.ac && (a.workspaceId = this.ac);
  return a;
};
h.h.Ki.prototype.ba = function (a) {
  this.qd = !1;
  this.ac = a.workspaceId;
  this.group = a.group;
};
h.A.register(h.A.Z.Lb, h.h.mu, h.h.Ki);
h.h.Mf = function (a) {
  h.h.Mf.u.constructor.call(this);
  this.nh = (this.qd = "undefined" == typeof a) ? "" : a.yc();
  this.ac = this.qd ? "" : a.C.id;
};
h.g.object.U(h.h.Mf, h.h.Abstract);
h.h.Mf.prototype.oa = function () {
  var a = h.h.Mf.u.oa.call(this);
  a.varId = this.nh;
  return a;
};
h.h.Mf.prototype.ba = function (a) {
  h.h.Mf.u.oa.call(this);
  this.nh = a.varId;
};
h.h.Bd = function (a) {
  h.h.Bd.u.constructor.call(this, a);
  a && ((this.Bi = a.type), (this.Ai = a.name));
};
h.g.object.U(h.h.Bd, h.h.Mf);
h.h.Bd.prototype.type = h.h.Av;
h.h.Bd.prototype.oa = function () {
  var a = h.h.Bd.u.oa.call(this);
  a.varType = this.Bi;
  a.varName = this.Ai;
  return a;
};
h.h.Bd.prototype.ba = function (a) {
  h.h.Bd.u.ba.call(this, a);
  this.Bi = a.varType;
  this.Ai = a.varName;
};
h.h.Bd.prototype.run = function (a) {
  var c = v(this);
  a ? c.ue(this.Ai, this.Bi, this.nh) : c.qj(this.nh);
};
h.h.oe = function (a) {
  h.h.oe.u.constructor.call(this, a);
  a && ((this.Bi = a.type), (this.Ai = a.name));
};
h.g.object.U(h.h.oe, h.h.Mf);
h.h.oe.prototype.type = h.h.Bv;
h.h.oe.prototype.oa = function () {
  var a = h.h.oe.u.oa.call(this);
  a.varType = this.Bi;
  a.varName = this.Ai;
  return a;
};
h.h.oe.prototype.ba = function (a) {
  h.h.oe.u.ba.call(this, a);
  this.Bi = a.varType;
  this.Ai = a.varName;
};
h.h.oe.prototype.run = function (a) {
  var c = v(this);
  a ? c.qj(this.nh) : c.ue(this.Ai, this.Bi, this.nh);
};
h.h.Ve = function (a, c) {
  h.h.Ve.u.constructor.call(this, a);
  a && ((this.ss = a.name), (this.ns = "undefined" == typeof c ? "" : c));
};
h.g.object.U(h.h.Ve, h.h.Mf);
h.h.Ve.prototype.type = h.h.Dv;
h.h.Ve.prototype.oa = function () {
  var a = h.h.Ve.u.oa.call(this);
  a.oldName = this.ss;
  a.newName = this.ns;
  return a;
};
h.h.Ve.prototype.ba = function (a) {
  h.h.Ve.u.ba.call(this, a);
  this.ss = a.oldName;
  this.ns = a.newName;
};
h.h.Ve.prototype.run = function (a) {
  var c = v(this);
  a ? c.mi(this.nh, this.ns) : c.mi(this.nh, this.ss);
};
h.A.register(h.A.Z.Lb, h.h.Av, h.h.Bd);
h.A.register(h.A.Z.Lb, h.h.Bv, h.h.oe);
h.A.register(h.A.Z.Lb, h.h.Dv, h.h.Ve);
h.N = {};
h.N.kz = function (a) {
  var c = B,
    d = h.g.xml.createElement("xml"),
    e = h.N.SF(h.la.Uv(c));
  e.hasChildNodes() && d.appendChild(e);
  var f = [].concat(c.Po);
  1 < f.length &&
    ((c.tf.offset = Math.sin(h.g.Od.qt(h.vb.jv))),
    c.J && (c.tf.offset *= -1),
    f.sort(c.tf));
  e = 0;
  for (var g; (g = f[e]); e++) d.appendChild(g.Wy(a));
  c = c.qb(!0);
  for (e = 0; (f = c[e]); e++) d.appendChild(h.N.iq(f, a));
  return d;
};
h.N.SF = function (a) {
  for (var c = h.g.xml.createElement("variables"), d = 0, e; (e = a[d]); d++) {
    var f = h.g.xml.createElement("variable");
    f.appendChild(h.g.xml.createTextNode(e.name));
    e.type && f.setAttribute("type", e.type);
    f.id = e.yc();
    c.appendChild(f);
  }
  return c;
};
h.N.iq = function (a, c) {
  if (a.ye() && ((a = C(a, !1)[0]), !a)) return new DocumentFragment();
  var d;
  a.C.J && (d = a.C.ll());
  c = h.N.Qf(a, c);
  var e = a.Wa();
  c.setAttribute("x", Math.round(a.C.J ? d - e.x : e.x));
  c.setAttribute("y", Math.round(e.y));
  return c;
};
h.N.NC = function (a) {
  var c = !1;
  a.name &&
    (a.kv
      ? (c = !0)
      : a.hk &&
        (console.warn(
          "Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."
        ),
        (c = !0)));
  return c
    ? ((c = h.g.xml.createElement("field")),
      c.setAttribute("name", a.name || ""),
      (c.textContent = a.getValue()),
      c)
    : null;
};
h.N.PB = function (a, c) {
  for (var d = 0, e; (e = a.S[d]); d++)
    for (var f = 0, g; (g = e.hb[f]); f++) (g = h.N.NC(g)) && c.appendChild(g);
};
h.N.Qf = function (a, c) {
  if (a.ye()) return (a = C(a, !1)[0]) ? h.N.Qf(a) : new DocumentFragment();
  var d = h.g.xml.createElement(a.Ja ? "shadow" : "block");
  d.setAttribute("type", a.type);
  c || d.setAttribute("id", a.id);
  if (a.Rd) {
    var e = a.Rd();
    e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e);
  }
  h.N.PB(a, d);
  if ((e = a.se.text)) {
    var f = a.se.size,
      g = a.se.ty,
      k = h.g.xml.createElement("comment");
    k.appendChild(h.g.xml.createTextNode(e));
    k.setAttribute("pinned", g);
    k.setAttribute("h", f.height);
    k.setAttribute("w", f.width);
    d.appendChild(k);
  }
  a.data &&
    ((e = h.g.xml.createElement("data")),
    e.appendChild(h.g.xml.createTextNode(a.data)),
    d.appendChild(e));
  for (e = 0; (f = a.S[e]); e++) {
    var l;
    g = !0;
    if (f.type != h.Cf) {
      var m = f.connection.ua();
      f.type == h.lb
        ? (l = h.g.xml.createElement("value"))
        : f.type == h.Ta && (l = h.g.xml.createElement("statement"));
      k = f.connection.xj();
      !k || (m && m.Ja) || l.appendChild(h.N.ew(k, c));
      m &&
        ((k = h.N.Qf(m, c)),
        k.nodeType == h.g.j.Bg.ELEMENT_NODE && (l.appendChild(k), (g = !1)));
      l.setAttribute("name", f.name);
      g || d.appendChild(l);
    }
  }
  void 0 != a.dg && a.dg != a.GD && d.setAttribute("inline", a.dg);
  a.isCollapsed() && d.setAttribute("collapsed", !0);
  a.isEnabled() || d.setAttribute("disabled", !0);
  a.ad() || a.Ja || d.setAttribute("deletable", !1);
  a.zc() || a.Ja || d.setAttribute("movable", !1);
  a.Md() || d.setAttribute("editable", !1);
  if ((e = u(a)))
    (k = h.N.Qf(e, c)),
      k.nodeType == h.g.j.Bg.ELEMENT_NODE &&
        ((l = h.g.xml.createElement("next")),
        l.appendChild(k),
        d.appendChild(l));
  k = a.Y && a.Y.xj();
  !k || (e && e.Ja) || l.appendChild(h.N.ew(k, c));
  return d;
};
h.N.ew = function (a, c) {
  for (var d = (a = a.cloneNode(!0)), e; d; )
    if ((c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild))
      d = d.firstChild;
    else {
      for (; d && !d.nextSibling; )
        (e = d),
          (d = d.parentNode),
          e.nodeType == h.g.j.Bg.TEXT_NODE &&
            "" == e.data.trim() &&
            d.firstChild != e &&
            h.g.j.removeNode(e);
      d &&
        ((e = d),
        (d = d.nextSibling),
        e.nodeType == h.g.j.Bg.TEXT_NODE &&
          "" == e.data.trim() &&
          h.g.j.removeNode(e));
    }
  return a;
};
h.N.Hd = function (a) {
  return h.g.xml.Hd(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>");
};
h.N.jJ = function (a) {
  a = h.N.Hd(a).split("<");
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
h.N.Ee = function (a) {
  var c = h.g.xml.GF(a);
  if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length)
    throw Error("textToDom was unable to parse: " + a);
  return c.documentElement;
};
h.N.cJ = function (a, c) {
  c.hc(!1);
  c.clear();
  a = h.N.Ih(a, c);
  c.hc(!0);
  return a;
};
h.N.Ih = function (a, c) {
  if (a instanceof h.vb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  c.J && (e = c.ll());
  d = [];
  h.g.j.cm();
  var f = h.h.Zb();
  f || h.h.ta(!0);
  c.hc && c.hc(!1);
  var g = !0;
  try {
    for (var k = 0, l; (l = a.childNodes[k]); k++) {
      var m = l.nodeName.toLowerCase(),
        n = l;
      if ("block" == m || ("shadow" == m && !h.h.Oa)) {
        var p = h.N.sj(n, c);
        d.push(p.id);
        var r = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10,
          t = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
        isNaN(r) || isNaN(t) || p.moveBy(c.J ? e - r : r, t);
        g = !1;
      } else {
        if ("shadow" == m)
          throw TypeError("Shadow block cannot be a top-level block.");
        if ("comment" == m)
          c.sa
            ? h.aj
              ? h.aj.setValue(n.textContent)
              : console.warn(
                  "Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment."
                )
            : h.Mv
            ? h.Mv.setValue(n.textContent)
            : console.warn(
                "Missing require for Blockly.WorkspaceComment, ignoring workspace comment."
              );
        else if ("variables" == m) {
          if (g) h.N.GC(n, c);
          else
            throw Error(
              "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
            );
          g = !1;
        }
      }
    }
  } finally {
    f || h.h.ta(!1), h.g.j.dm();
  }
  c.hc && c.hc(!0);
  h.h.Ea(new h.h.Ki(c));
  return d;
};
h.N.VI = function (a, c) {
  var d;
  Object.prototype.hasOwnProperty.call(c, "scale") && (d = Wa(c));
  a = h.N.Ih(a, c);
  if (d && d.top != d.bottom) {
    var e = d.bottom;
    var f = c.J ? d.right : d.left;
    var g = Infinity,
      k = -Infinity,
      l = Infinity;
    for (d = 0; d < a.length; d++) {
      var m = c.Mc(a[d]).Wa();
      m.y < l && (l = m.y);
      m.x < g && (g = m.x);
      m.x > k && (k = m.x);
    }
    e = e - l + 10;
    f = c.J ? f - k : f - g;
    for (d = 0; d < a.length; d++) c.Mc(a[d]).moveBy(f, e);
  }
  return a;
};
h.N.sj = function (a, c) {
  if (a instanceof h.vb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  h.h.disable();
  d = c.Mh();
  try {
    var e = h.N.Oq(a, c),
      f = q(e, !1);
    if (c.sa) {
      Xa(e, !1);
      for (var g = f.length - 1; 0 <= g; g--) f[g].Cj();
      for (g = f.length - 1; 0 <= g; g--) f[g].La(!1);
      setTimeout(function () {
        e.Wf || Xa(e, !0);
      }, 1);
      Ya(e);
      Za(c);
    } else for (g = f.length - 1; 0 <= g; g--);
  } finally {
    h.h.enable();
  }
  if (h.h.isEnabled()) {
    a = h.la.Sw(c, d);
    for (g = 0; g < a.length; g++) h.h.Ea(new h.h.Bd(a[g]));
    h.h.Ea(new h.h.ym(e));
  }
  return e;
};
h.N.GC = function (a, c) {
  for (var d = 0, e; (e = a.childNodes[d]); d++)
    if (e.nodeType == h.g.j.Bg.ELEMENT_NODE) {
      var f = e.getAttribute("type"),
        g = e.getAttribute("id");
      c.ue(e.textContent, f, g);
    }
};
h.N.Oq = function (a, c) {
  var d = null,
    e = a.getAttribute("type");
  if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
  var f = a.getAttribute("id");
  d = c.ls(e, f);
  var g = null;
  f = 0;
  for (var k; (k = a.childNodes[f]); f++)
    if (k.nodeType != h.g.j.Bg.TEXT_NODE) {
      for (var l, m = (g = null), n = 0; (l = k.childNodes[n]); n++)
        l.nodeType == h.g.j.Bg.ELEMENT_NODE &&
          ("block" == l.nodeName.toLowerCase()
            ? (g = l)
            : "shadow" == l.nodeName.toLowerCase() && (m = l));
      n = !1;
      var p = k.getAttribute("name");
      l = k;
      switch (k.nodeName.toLowerCase()) {
        case "mutation":
          d.Xf && (d.Xf(l), d.Cj && (n = !0));
          break;
        case "comment":
          if (!h.Comment) {
            console.warn(
              "Missing require for Blockly.Comment, ignoring block comment."
            );
            break;
          }
          m = l.textContent;
          g = "true" == l.getAttribute("pinned");
          k = parseInt(l.getAttribute("w"), 10);
          l = parseInt(l.getAttribute("h"), 10);
          d.Uj(m);
          d.se.ty = g;
          isNaN(k) || isNaN(l) || (d.se.size = new h.g.le(k, l));
          g &&
            d.ZC &&
            !d.Qc &&
            setTimeout(function () {
              d.re.$b(!0);
            }, 1);
          break;
        case "data":
          d.data = k.textContent;
          break;
        case "title":
        case "field":
          h.N.FC(d, p, l);
          break;
        case "value":
        case "statement":
          l = ea(d, p);
          if (!l) {
            console.warn("Ignoring non-existent input " + p + " in block " + e);
            break;
          }
          if (g)
            if (((g = h.N.Oq(g, c)), g.M)) l.connection.connect(g.M);
            else if (g.W) l.connection.connect(g.W);
            else
              throw TypeError(
                "Child block does not have output or previous statement."
              );
          m && l.connection.Wl(m);
          break;
        case "next":
          if (g) {
            if (!d.Y) throw TypeError("Next statement does not exist.");
            if (d.Y.isConnected())
              throw TypeError("Next statement is already connected.");
            g = h.N.Oq(g, c);
            if (!g.W)
              throw TypeError("Next block does not have previous statement.");
            d.Y.connect(g.W);
          }
          m && d.Y && d.Y.Wl(m);
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  n && d.Cj();
  (f = a.getAttribute("inline")) && d.ri("true" == f);
  (f = a.getAttribute("disabled")) && d.sf("true" != f && "disabled" != f);
  if ((f = a.getAttribute("deletable"))) d.ww = "true" == f;
  (f = a.getAttribute("movable")) && d.at("true" == f);
  (f = a.getAttribute("editable")) && d.$s("true" == f);
  (f = a.getAttribute("collapsed")) && d.oi("true" == f);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = C(d, !1);
    for (f = 0; (c = a[f]); f++)
      if (!c.Ja) throw TypeError("Shadow block not allowed non-shadow child.");
    if ($a(d).length)
      throw TypeError("Shadow blocks cannot have variable references.");
    d.dt(!0);
  }
  return d;
};
h.N.FC = function (a, c, d) {
  var e = ba(a, c);
  e
    ? e.setValue(d.textContent)
    : console.warn("Ignoring non-existent field " + c + " in block " + a.type);
};
h.N.wC = function (a) {
  for (var c = 0, d; (d = a.childNodes[c]); c++)
    if ("next" == d.nodeName.toLowerCase()) {
      a.removeChild(d);
      break;
    }
};
h.gd = function (a) {
  var c = !!a.readOnly;
  if (c)
    var d = null,
      e = !1,
      f = !1,
      g = !1,
      k = !1,
      l = !1,
      m = !1;
  else {
    d = h.g.va.rw(a.toolbox);
    e = h.g.va.ol(d);
    f = a.trashcan;
    void 0 === f && (f = e);
    var n = a.maxTrashcanContents;
    f ? void 0 === n && (n = 32) : (n = 0);
    g = a.collapse;
    void 0 === g && (g = e);
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
  var t = a.toolboxPosition;
  t = "end" !== t;
  t = r
    ? t
      ? h.g.va.Qe.Tp
      : h.g.va.Qe.Nt
    : t == p
    ? h.g.va.Qe.Um
    : h.g.va.Qe.wp;
  var D = a.css;
  void 0 === D && (D = !0);
  var ja = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (ja = a.media) : a.path && (ja = a.path + "media/");
  var ma = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
    ce = a.renderer || "geras",
    de = a.plugins || {};
  this.J = p;
  this.Ao = ma;
  this.collapse = g;
  this.gC = k;
  this.disable = l;
  this.readOnly = c;
  this.ds = a.maxBlocks || Infinity;
  this.mo = a.maxInstances;
  this.Fo = ja;
  this.ol = e;
  this.fc = h.gd.uE(a, e);
  this.ux = f;
  this.no = n;
  this.xD = m;
  this.vD = D;
  this.Ld = r;
  this.$h = d;
  this.px = h.gd.tE(a);
  this.ab = h.gd.wE(a);
  this.jb = t;
  this.HF = h.gd.vE(a);
  this.Ts = ce;
  this.Us = a.rendererOverrides;
  this.xr = null;
  this.bd = a.parentWorkspace;
  this.plugins = de;
};
h.aG = function () {};
h.gd.uE = function (a, c) {
  var d = a.move || {},
    e = {};
  e.scrollbars =
    void 0 === d.scrollbars && void 0 === a.scrollbars
      ? c
      : !!d.scrollbars || !!a.scrollbars;
  e.ph = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
  e.Jg = e.scrollbars ? (void 0 === d.drag ? !0 : !!d.drag) : !1;
  return e;
};
h.gd.wE = function (a) {
  a = a.zoom || {};
  var c = {};
  c.controls = void 0 === a.controls ? !1 : !!a.controls;
  c.ph = void 0 === a.wheel ? !1 : !!a.wheel;
  c.CF = void 0 === a.startScale ? 1 : Number(a.startScale);
  c.El = void 0 === a.maxScale ? 3 : Number(a.maxScale);
  c.Fl = void 0 === a.minScale ? 0.3 : Number(a.minScale);
  c.mF = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
  c.Gs = void 0 === a.pinch ? c.ph || c.controls : !!a.pinch;
  return c;
};
h.gd.tE = function (a) {
  a = a.grid || {};
  var c = {};
  c.spacing = Number(a.spacing) || 0;
  c.xb = a.colour || "#888";
  c.length = void 0 === a.length ? 1 : Number(a.length);
  c.fK = 0 < c.spacing && !!a.snap;
  return c;
};
h.gd.vE = function (a) {
  a = a.theme || h.Kf.ug;
  return "string" == typeof a
    ? h.A.pr(h.A.Z.Rp, a)
    : a instanceof h.Bh
    ? a
    : h.Bh.vC(a.name || "builtin" + h.g.pk.ax(), a);
};
h.gd.Cs = function (a) {
  h.g.Cq.warn(
    "Blockly.Options.parseToolboxTree",
    "September 2020",
    "September 2021",
    "Blockly.utils.toolbox.parseToolboxTree"
  );
  return h.g.va.Cs(a);
};
h.Yp = function (a) {
  this.Qa = Object.create(null);
  this.C = a;
};
b = h.Yp.prototype;
b.clear = function () {
  this.Qa = Object.create(null);
};
b.Cy = function (a, c) {
  var d = this.Lg(c, a.type),
    e = E(this.C, !1);
  h.h.ta(!0);
  try {
    if (d && d.yc() != a.yc()) {
      var f = a.type;
      c != d.name && ab(d, c, e);
      for (c = 0; c < e.length; c++) {
        d = void 0;
        for (var g = 0; (d = e[c].S[g]); g++) for (var k = 0; d.hb[k]; k++);
      }
      h.h.Ea(new h.h.oe(a));
      this.Qa[f].splice(this.Pn(f).indexOf(a), 1);
    } else ab(a, c, e);
  } finally {
    h.h.ta(!1);
  }
};
b.mi = function (a, c) {
  var d = this.Mg(a);
  if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.Cy(d, c);
};
function ab(a, c, d) {
  h.h.Ea(new h.h.Ve(a, c));
  a.name = c;
  for (a = 0; a < d.length; a++)
    for (var e = d[a], f = 0; (c = e.S[f]); f++) for (var g = 0; c.hb[g]; g++);
}
b.ue = function (a, c, d) {
  var e = this.Lg(a, c);
  if (e) {
    if (d && e.yc() != d)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.yc() +
          '" which conflicts with the passed in id, "' +
          d +
          '".'
      );
    return e;
  }
  if (d && this.Mg(d))
    throw Error('Variable id, "' + d + '", is already in use.');
  e = d || h.g.Zf();
  c = c || "";
  e = new h.fn(this.C, a, c, e);
  a = this.Qa[c] || [];
  a.push(e);
  delete this.Qa[c];
  this.Qa[c] = a;
  return e;
};
b.qj = function (a) {
  var c = this.Mg(a);
  if (c) {
    var d = c.name,
      e = this.wr(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = bb(f, "NAME");
        d = h.P.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace(
          "%2",
          a
        );
        h.alert(d);
        return;
      }
    var g = this;
    1 < e.length
      ? ((d = h.P.DELETE_VARIABLE_CONFIRMATION.replace(
          "%1",
          String(e.length)
        ).replace("%2", d)),
        h.confirm(d, function (k) {
          k && c && cb(g, c, e);
        }))
      : cb(g, c, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
function cb(a, c, d) {
  var e = h.h.Zb();
  e || h.h.ta(!0);
  try {
    for (var f = 0; f < d.length; f++) d[f].I(!0);
    var g = a.Qa[c.type];
    a = 0;
    for (var k; (k = g[a]); a++)
      if (k.yc() == c.yc()) {
        g.splice(a, 1);
        h.h.Ea(new h.h.oe(c));
        break;
      }
  } finally {
    e || h.h.ta(!1);
  }
}
b.Lg = function (a, c) {
  if ((c = this.Qa[c || ""]))
    for (var d = 0, e; (e = c[d]); d++) if (h.zd.Yf(e.name, a)) return e;
  return null;
};
b.Mg = function (a) {
  for (var c = Object.keys(this.Qa), d = 0; d < c.length; d++)
    for (var e = c[d], f = 0, g; (g = this.Qa[e][f]); f++)
      if (g.yc() == a) return g;
  return null;
};
b.Pn = function (a) {
  return (a = this.Qa[a || ""]) ? a.slice() : [];
};
b.Mh = function () {
  var a = [],
    c;
  for (c in this.Qa) a = a.concat(this.Qa[c]);
  return a;
};
b.dr = function () {
  var a = [],
    c;
  for (c in this.Qa)
    for (var d = this.Qa[c], e = 0, f; (f = d[e]); e++) a.push(f.name);
  return a;
};
b.wr = function (a) {
  for (var c = [], d = E(this.C, !1), e = 0; e < d.length; e++) {
    var f = $a(d[e]);
    if (f) for (var g = 0; g < f.length; g++) f[g].yc() == a && c.push(d[e]);
  }
  return c;
};
h.vb = function (a) {
  this.id = h.g.Zf();
  h.vb.Gk[this.id] = this;
  this.options = a || new h.gd({});
  this.J = !!this.options.J;
  this.Ld = !!this.options.Ld;
  this.jb = this.options.jb;
  this.Ok = new (h.A.Uw(h.A.Z.Ut, this.options))(this);
  this.jm = [];
  this.Po = [];
  this.wn = Object.create(null);
  this.Rc = [];
  this.zi = [];
  this.Pl = [];
  this.hq = Object.create(null);
  this.rg = Object.create(null);
  this.Qa = new h.Yp(this);
  this.Rj = null;
};
b = h.vb.prototype;
b.sa = !1;
b.Hr = !1;
b.Hu = 1024;
b.yn = null;
b.I = function () {
  this.Rc.length = 0;
  this.clear();
  delete h.vb.Gk[this.id];
};
h.vb.jv = 3;
b = h.vb.prototype;
b.tf = function (a, c) {
  a = a.Wa();
  c = c.Wa();
  return (
    a.y +
    h.vb.prototype.tf.offset * a.x -
    (c.y + h.vb.prototype.tf.offset * c.x)
  );
};
b.jn = function (a) {
  this.jm.push(a);
};
b.Ho = function (a) {
  if (!h.g.Jk(this.jm, a))
    throw Error("Block not present in workspace's list of top-most blocks.");
};
b.qb = function (a) {
  var c = [].concat(this.jm);
  a &&
    1 < c.length &&
    ((this.tf.offset = Math.sin(h.g.Od.qt(h.vb.jv))),
    this.J && (this.tf.offset *= -1),
    c.sort(this.tf));
  return c;
};
function db(a, c) {
  return a.rg[c] ? a.rg[c].slice(0) : [];
}
function E(a, c) {
  if (c) {
    a = a.qb(!0);
    c = [];
    for (var d = 0; d < a.length; d++) c.push.apply(c, q(a[d], !0));
  } else
    for (c = a.qb(!1), d = 0; d < c.length; d++) c.push.apply(c, C(c[d], !1));
  return c.filter(function (e) {
    return !e.ye();
  });
}
b.clear = function () {
  this.Hr = !0;
  try {
    var a = h.h.Zb();
    for (a || h.h.ta(!0); this.jm.length; ) this.jm[0].I(!1);
    for (; this.Po.length; ) this.Po[this.Po.length - 1].I(!1);
    a || h.h.ta(!1);
    this.Qa.clear();
    this.Rj && this.Rj.clear();
  } finally {
    this.Hr = !1;
  }
};
b.mi = function (a, c) {
  this.Qa.mi(a, c);
};
b.ue = function (a, c, d) {
  return this.Qa.ue(a, c, d);
};
b.wr = function (a) {
  return this.Qa.wr(a);
};
b.qj = function (a) {
  this.Qa.qj(a);
};
b.Lg = function (a, c) {
  return this.Qa.Lg(a, c);
};
b.Mg = function (a) {
  return this.Qa.Mg(a);
};
b.Pn = function (a) {
  return this.Qa.Pn(a);
};
b.Mh = function () {
  return this.Qa.Mh();
};
b.dr = function () {
  return this.Qa.dr();
};
b.ll = function () {
  return 0;
};
b.ls = function (a, c) {
  return new h.Sc(this, a, c);
};
function eb(a) {
  return isNaN(a.options.ds) ? Infinity : a.options.ds - E(a, !1).length;
}
function fb(a, c) {
  if (!gb(a)) return !0;
  var d = 0,
    e;
  for (e in c) {
    if (
      c[e] >
      (a.options.mo
        ? (void 0 !== a.options.mo[e] ? a.options.mo[e] : Infinity) -
          db(a, e).length
        : Infinity)
    )
      return !1;
    d += c[e];
  }
  return d > eb(a) ? !1 : !0;
}
function gb(a) {
  return Infinity != a.options.ds || !!a.options.mo;
}
function hb(a, c) {
  var d = c ? a.Pl : a.zi;
  a = c ? a.zi : a.Pl;
  var e = d.pop();
  if (e) {
    for (var f = [e]; d.length && e.group && e.group == d[d.length - 1].group; )
      f.push(d.pop());
    for (d = 0; (e = f[d]); d++) a.push(e);
    f = h.h.filter(f, c);
    h.h.Oa = !1;
    try {
      for (d = 0; (e = f[d]); d++) e.run(c);
    } finally {
      h.h.Oa = !0;
    }
  }
}
function F(a, c) {
  a.Rc.push(c);
}
function ib(a, c) {
  h.g.Jk(a.Rc, c);
}
b.Mc = function (a) {
  return this.hq[a] || null;
};
b.et = function (a) {
  this.Qa = a;
};
h.vb.Gk = Object.create(null);
h.vb.hl = function (a) {
  return h.vb.Gk[a] || null;
};
h.vb.getAll = function () {
  var a = [],
    c;
  for (c in h.vb.Gk) a.push(h.vb.Gk[c]);
  return a;
};
h.ya = function (a, c, d, e, f, g) {
  this.o = a;
  this.Uf = c;
  this.uF = d;
  this.vs = this.us = this.Wx = this.Gy = null;
  this.Wf = !1;
  d = h.ya.uz;
  this.o.J && (d = -d);
  this.SB = h.g.Od.qt(d);
  a.ng.appendChild(this.Sk(c, !(!f || !g)));
  this.Sb = e;
  this.Dy && jb(this);
  (f && g) ||
    ((a = this.Uf.getBBox()),
    (f = a.width + 2 * h.ya.He),
    (g = a.height + 2 * h.ya.He));
  kb(this, f, g);
  jb(this);
  lb(this);
  this.Dy = !0;
};
h.ya.He = 6;
h.ya.vz = 5;
h.ya.uz = 20;
h.ya.Gt = 4;
h.ya.qz = 8;
h.ya.eh = null;
h.ya.dh = null;
h.ya.ut = function () {
  h.ya.eh && (h.sb(h.ya.eh), (h.ya.eh = null));
  h.ya.dh && (h.sb(h.ya.dh), (h.ya.dh = null));
};
h.ya.XB = function () {
  h.Touch.sn();
  h.ya.ut();
};
b = h.ya.prototype;
b.Dy = !1;
b.Sb = null;
b.rf = 0;
b.hh = 0;
b.kb = 0;
b.mc = 0;
b.fq = !0;
b.Sk = function (a, c) {
  this.Dd = h.g.j.K(h.g.F.Uc, {}, null);
  var d = { filter: "url(#" + this.o.rb.aa().In + ")" };
  h.g.userAgent.KA && (d = {});
  d = h.g.j.K(h.g.F.Uc, d, this.Dd);
  this.Xv = h.g.j.K(h.g.F.Pe, {}, d);
  this.nn = h.g.j.K(
    h.g.F.Ad,
    { class: "blocklyDraggable", x: 0, y: 0, rx: h.ya.He, ry: h.ya.He },
    d
  );
  c
    ? ((this.kg = h.g.j.K(
        h.g.F.Uc,
        { class: this.o.J ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.Dd
      )),
      (c = 2 * h.ya.He),
      h.g.j.K(
        h.g.F.mB,
        { points: "0,x x,x x,0".replace(/x/g, c.toString()) },
        this.kg
      ),
      h.g.j.K(
        h.g.F.rk,
        {
          class: "blocklyResizeLine",
          x1: c / 3,
          y1: c - 1,
          x2: c - 1,
          y2: c / 3,
        },
        this.kg
      ),
      h.g.j.K(
        h.g.F.rk,
        {
          class: "blocklyResizeLine",
          x1: (2 * c) / 3,
          y1: c - 1,
          x2: c - 1,
          y2: (2 * c) / 3,
        },
        this.kg
      ))
    : (this.kg = null);
  this.o.options.readOnly ||
    ((this.us = h.Ca(this.nn, "mousedown", this, this.WB)),
    this.kg && (this.vs = h.Ca(this.kg, "mousedown", this, this.jF)));
  this.Dd.appendChild(a);
  return this.Dd;
};
b.qa = function () {
  return this.Dd;
};
b.WB = function (a) {
  var c = this.o.Kg(a);
  if (c) {
    if (c.Qh)
      throw Error(
        "Tried to call gesture.handleBubbleStart, but the gesture had already been started."
      );
    c.vd || (c.vd = this);
    c.Qd = a;
  }
};
b.Yl = function () {};
b.ad = function () {
  return !1;
};
b.Ul = function () {};
b.jF = function (a) {
  var c = this.Dd.parentNode;
  c.lastChild !== this.Dd && c.appendChild(this.Dd);
  h.ya.ut();
  h.g.zl(a) ||
    (this.o.jt(a, new h.g.T(this.o.J ? -this.kb : this.kb, this.mc)),
    (h.ya.eh = h.Ca(document, "mouseup", this, h.ya.XB)),
    (h.ya.dh = h.Ca(document, "mousemove", this, this.kF)),
    h.dc());
  a.stopPropagation();
};
b.kF = function (a) {
  this.fq = !1;
  var c = this.o;
  a = h.g.Gl(a, x(c), Pa(c));
  a.x /= c.scale;
  a.y /= c.scale;
  c = h.g.T.sum(c.Hw, a);
  kb(this, this.o.J ? -c.x : c.x, c.y);
  this.o.J && jb(this);
};
function mb(a, c, d) {
  var e = a.o.J ? a.Sb.x - c.x - a.kb : c.x + a.Sb.x;
  c = c.y + a.Sb.y;
  return Math.max(
    0,
    Math.min(
      1,
      ((Math.min(e + a.kb, d.Bb + d.Eb) - Math.max(e, d.Bb)) *
        (Math.min(c + a.mc, d.Db + d.Qb) - Math.max(c, d.Db))) /
        (a.kb * a.mc)
    )
  );
}
function jb(a) {
  var c = a.Sb.x;
  c = a.o.J ? c - (a.rf + a.kb) : c + a.rf;
  a.moveTo(c, a.hh + a.Sb.y);
}
b.moveTo = function (a, c) {
  this.Dd.setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.jh = function (a) {
  !a && this.Wx && this.Wx();
};
function kb(a, c, d) {
  var e = 2 * h.ya.He;
  c = Math.max(c, e + 45);
  d = Math.max(d, e + 20);
  a.kb = c;
  a.mc = d;
  a.nn.setAttribute("width", c);
  a.nn.setAttribute("height", d);
  a.kg &&
    (a.o.J
      ? a.kg.setAttribute(
          "transform",
          "translate(" + 2 * h.ya.He + "," + (d - e) + ") scale(-1 1)"
        )
      : a.kg.setAttribute(
          "transform",
          "translate(" + (c - e) + "," + (d - e) + ")"
        ));
  if (a.fq) {
    c = a.o.od();
    c.Bb /= a.o.scale;
    c.Eb /= a.o.scale;
    c.Db /= a.o.scale;
    c.Qb /= a.o.scale;
    d = -a.kb / 4;
    if (!(a.kb > c.Eb)) {
      if (a.o.J) {
        e = a.Sb.x - d;
        var f = e - a.kb;
        var g = c.Bb + c.Eb,
          k = c.Bb + h.Ma.nc / a.o.scale;
      } else
        (f = d + a.Sb.x),
          (e = f + a.kb),
          (k = c.Bb),
          (g = c.Bb + c.Eb - h.Ma.nc / a.o.scale);
      a.o.J
        ? f < k
          ? (d = -(k - a.Sb.x + a.kb))
          : e > g && (d = -(g - a.Sb.x))
        : f < k
        ? (d = k - a.Sb.x)
        : e > g && (d = g - a.Sb.x - a.kb);
    }
    f = d;
    d = -a.mc / 4;
    if (!(a.mc > c.Qb)) {
      e = a.Sb.y + d;
      g = e + a.mc;
      k = c.Db;
      var l = c.Db + c.Qb - h.Ma.nc / a.o.scale,
        m = a.Sb.y;
      e < k ? (d = k - m) : g > l && (d = l - m - a.mc);
    }
    k = d;
    g = a.uF.getBBox();
    d = { x: f, y: -a.mc - a.o.rb.aa().vk };
    e = { x: -a.kb - 30, y: k };
    k = { x: g.width, y: k };
    l = { x: f, y: g.height };
    f = g.width < g.height ? k : l;
    g = g.width < g.height ? l : k;
    k = mb(a, d, c);
    l = mb(a, e, c);
    m = mb(a, f, c);
    c = Math.max(k, l, m, mb(a, g, c));
    k == c
      ? ((a.rf = d.x), (a.hh = d.y))
      : l == c
      ? ((a.rf = e.x), (a.hh = e.y))
      : m == c
      ? ((a.rf = f.x), (a.hh = f.y))
      : ((a.rf = g.x), (a.hh = g.y));
  }
  jb(a);
  lb(a);
  a.Gy && a.Gy();
}
function lb(a) {
  var c = [],
    d = a.kb / 2,
    e = a.mc / 2,
    f = -a.rf,
    g = -a.hh;
  if (d == f && e == g) c.push("M " + d + "," + e);
  else {
    g -= e;
    f -= d;
    a.o.J && (f *= -1);
    var k = Math.sqrt(g * g + f * f),
      l = Math.acos(f / k);
    0 > g && (l = 2 * Math.PI - l);
    var m = l + Math.PI / 2;
    m > 2 * Math.PI && (m -= 2 * Math.PI);
    var n = Math.sin(m),
      p = Math.cos(m),
      r = new h.g.le(a.kb, a.mc);
    m = (r.width + r.height) / h.ya.vz;
    m = Math.min(m, r.width, r.height) / 4;
    r = 1 - h.ya.qz / k;
    f = d + r * f;
    g = e + r * g;
    r = d + m * p;
    var t = e + m * n;
    d -= m * p;
    e -= m * n;
    n = l + a.SB;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / h.ya.Gt;
    k = (Math.cos(n) * k) / h.ya.Gt;
    c.push("M" + r + "," + t);
    c.push(
      "C" + (r + k) + "," + (t + l) + " " + f + "," + g + " " + f + "," + g
    );
    c.push(
      "C" + f + "," + g + " " + (d + k) + "," + (e + l) + " " + d + "," + e
    );
  }
  c.push("z");
  a.Xv.setAttribute("d", c.join(" "));
}
b.Be = function (a) {
  this.nn.setAttribute("fill", a);
  this.Xv.setAttribute("fill", a);
};
b.I = function () {
  this.us && h.sb(this.us);
  this.vs && h.sb(this.vs);
  h.ya.ut();
  h.g.j.removeNode(this.Dd);
  this.Wf = !0;
};
b.js = function (a, c) {
  a ? a.yi(c.x, c.y) : this.moveTo(c.x, c.y);
  this.rf = this.o.J ? this.Sb.x - c.x - this.kb : c.x - this.Sb.x;
  this.hh = c.y - this.Sb.y;
  lb(this);
};
b.Wa = function () {
  return new h.g.T(
    this.o.J ? -this.rf + this.Sb.x - this.kb : this.Sb.x + this.rf,
    this.Sb.y + this.hh
  );
};
h.ya.Ee = function (a) {
  var c = h.g.j.K(
    h.g.F.tv,
    {
      class: "blocklyText blocklyBubbleText blocklyNoPointerEvents",
      y: h.ya.He,
    },
    null
  );
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) {
    var e = h.g.j.K(h.g.F.xv, { dy: "1em", x: h.ya.He }, c),
      f = document.createTextNode(a[d]);
    e.appendChild(f);
  }
  return c;
};
h.ya.gJ = function (a, c, d) {
  d = new h.ya(c.C, a, c.Cb.Ob, d, null, null);
  d.Dd.dataset && (d.Dd.dataset.blockId = c.id);
  if (c.J) {
    c = a.getBBox().width;
    for (var e = 0, f; (f = a.childNodes[e]); e++)
      f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + h.ya.He);
  }
  return d;
};
h.h.yf = function (a) {
  this.Xe = (this.qd = "undefined" == typeof a) ? "" : a.id;
  this.ac = this.qd ? "" : a.C.id;
  this.group = h.h.Zb();
  this.Oa = h.h.Oa;
};
h.g.object.U(h.h.yf, h.h.Abstract);
h.h.yf.prototype.oa = function () {
  var a = h.h.yf.u.oa.call(this);
  this.Xe && (a.commentId = this.Xe);
  return a;
};
h.h.yf.prototype.ba = function (a) {
  h.h.yf.u.ba.call(this, a);
  this.Xe = a.commentId;
};
h.h.Hi = function (a, c, d) {
  h.h.Hi.u.constructor.call(this, a);
  a &&
    ((this.$x = "undefined" == typeof c ? "" : c),
    (this.uo = "undefined" == typeof d ? "" : d));
};
h.g.object.U(h.h.Hi, h.h.yf);
b = h.h.Hi.prototype;
b.type = h.h.Rt;
b.oa = function () {
  var a = h.h.Hi.u.oa.call(this);
  a.newContents = this.uo;
  return a;
};
b.ba = function (a) {
  h.h.Hi.u.ba.call(this, a);
  this.uo = a.newValue;
};
b.Jj = function () {
  return this.$x == this.uo;
};
b.run = function (a) {
  var c;
  (c = v(this).wn[this.Xe] || null)
    ? c.aK(a ? this.uo : this.$x)
    : console.warn("Can't change non-existent comment: " + this.Xe);
};
h.h.zf = function (a) {
  h.h.zf.u.constructor.call(this, a);
  a && (this.xml = a.Wy());
};
h.g.object.U(h.h.zf, h.h.yf);
h.h.zf.prototype.type = h.h.Bm;
h.h.zf.prototype.oa = function () {
  var a = h.h.zf.u.oa.call(this);
  a.xml = h.N.Hd(this.xml);
  return a;
};
h.h.zf.prototype.ba = function (a) {
  h.h.zf.u.ba.call(this, a);
  this.xml = h.N.Ee(a.xml);
};
h.h.zf.prototype.run = function (a) {
  h.h.Vt(this, a);
};
h.h.Vt = function (a, c) {
  var d = v(a);
  c
    ? ((c = h.g.xml.createElement("xml")), c.appendChild(a.xml), h.N.Ih(c, d))
    : (d = d.wn[a.Xe] || null)
    ? d.I(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + a.Xe);
};
h.h.Af = function (a) {
  h.h.Af.u.constructor.call(this, a);
  a && (this.xml = a.Wy());
};
h.g.object.U(h.h.Af, h.h.yf);
h.h.Af.prototype.type = h.h.St;
h.h.Af.prototype.oa = function () {
  return h.h.Af.u.oa.call(this);
};
h.h.Af.prototype.ba = function (a) {
  h.h.Af.u.ba.call(this, a);
};
h.h.Af.prototype.run = function (a) {
  h.h.Vt(this, !a);
};
h.h.sh = function (a) {
  h.h.sh.u.constructor.call(this, a);
  a && ((this.uq = a), (this.rs = a.ox()), (this.ei = null));
};
h.g.object.U(h.h.sh, h.h.yf);
b = h.h.sh.prototype;
b.li = function () {
  if (!this.uq)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.ei = this.uq.ox();
  this.uq = null;
};
b.type = h.h.Cm;
b.oa = function () {
  var a = h.h.sh.u.oa.call(this);
  this.ei &&
    (a.newCoordinate = Math.round(this.ei.x) + "," + Math.round(this.ei.y));
  return a;
};
b.ba = function (a) {
  h.h.sh.u.ba.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.ei = new h.g.T(Number(a[0]), Number(a[1]))));
};
b.Jj = function () {
  return h.g.T.Yf(this.rs, this.ei);
};
b.run = function (a) {
  var c;
  if ((c = v(this).wn[this.Xe] || null)) {
    a = a ? this.ei : this.rs;
    var d = c.ox();
    c.moveBy(a.x - d.x, a.y - d.y);
  } else console.warn("Can't move non-existent comment: " + this.Xe);
};
h.A.register(h.A.Z.Lb, h.h.Bm, h.h.zf);
h.A.register(h.A.Z.Lb, h.h.Rt, h.h.Hi);
h.A.register(h.A.Z.Lb, h.h.Cm, h.h.sh);
h.A.register(h.A.Z.Lb, h.h.St, h.h.Af);
h.zm = function (a, c) {
  this.Yb = a;
  this.o = c;
  this.Hh = null;
  this.To = !1;
  this.uf = this.Yb.Wa();
  this.Jh = h.g.Uh() && c.kd ? c.kd : null;
};
h.zm.prototype.I = function () {
  this.Jh = this.o = this.Yb = null;
};
function nb(a, c, d) {
  d = a.Qj(d);
  d = h.g.T.sum(a.uf, d);
  a.Yb.js(a.Jh, d);
  a.Yb.ad() &&
    ((a.Hh = xa(a.o, c)),
    (a.To = a.Hh != h.Zt),
    (c = a.o.qc),
    a.To
      ? (a.Yb.Ul(!0), a.Hh == h.lp && c && ya(c, !0))
      : (a.Yb.Ul(!1), c && ya(c, !1)));
}
function ob(a, c, d) {
  nb(a, c, d);
  c = a.Qj(d);
  c = h.g.T.sum(a.uf, c);
  a.Yb.moveTo(c.x, c.y);
  c = a.o.qc;
  a.To
    ? (c && setTimeout(c.un.bind(c), 100), a.cl(), a.Yb.I(!1, !0))
    : c && c.un();
  a.To || (a.Jh && a.Jh.rn(a.o.ng), a.Yb.jh && a.Yb.jh(!1), a.cl());
  a.o.hc(!0);
  (c = a.o.wa) &&
    "function" == typeof c.Qs &&
    c.Qs(a.Yb.ad() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  h.h.ta(!1);
}
h.zm.prototype.cl = function () {
  if (this.Yb.CJ) {
    var a = new h.h.sh(this.Yb);
    a.rs = this.uf;
    a.li();
    h.h.Ea(a);
  }
};
h.zm.prototype.Qj = function (a) {
  a = new h.g.T(a.x / this.o.scale, a.y / this.o.scale);
  this.o.Zn && a.scale(1 / this.o.options.bd.scale);
  return a;
};
h.h.Ke = function (a, c, d) {
  h.h.Ke.u.constructor.call(this, a ? a.C.id : c);
  this.mb = a ? a.id : null;
  this.Uy = d;
};
h.g.object.U(h.h.Ke, h.h.ne);
h.h.Ke.prototype.type = h.h.fp;
h.h.Ke.prototype.oa = function () {
  var a = h.h.Ke.u.oa.call(this);
  a.targetType = this.Uy;
  this.mb && (a.blockId = this.mb);
  return a;
};
h.h.Ke.prototype.ba = function (a) {
  h.h.Ke.u.ba.call(this, a);
  this.Uy = a.targetType;
  this.mb = a.blockId;
};
h.A.register(h.A.Z.Lb, h.h.fp, h.h.Ke);
h.Hk = function (a) {
  this.o = a;
  this.Sy = new h.g.T(a.scrollX, a.scrollY);
};
h.Hk.prototype.I = function () {
  this.o = null;
};
h.Hk.prototype.jt = function () {
  h.selected && pb(h.selected);
  Qa(this.o);
};
h.Hk.prototype.Jg = function (a) {
  a = h.g.T.sum(this.Sy, a);
  this.o.scroll(a.x, a.y);
};
h.Lm = function (a) {
  h.Lm.u.constructor.call(this, a.o);
  this.Jy = a.Aa;
  this.yD = a.Ld;
};
h.g.object.U(h.Lm, h.Hk);
h.Lm.prototype.Jg = function (a) {
  a = h.g.T.sum(this.Sy, a);
  this.yD ? this.Jy.set(-a.x) : this.Jy.set(-a.y);
};
h.navigation = {};
h.navigation.Mj = null;
h.navigation.Ui = 1;
h.navigation.ke = 2;
h.navigation.Vi = 3;
h.navigation.Kv = 40;
h.navigation.nd = h.navigation.ke;
h.navigation.Gb = {
  hd: "previous",
  fd: "next",
  tu: "in",
  Vu: "out",
  xu: "insert",
  SA: "mark",
  Tz: "disconnect",
  Sp: "toolbox",
  dA: "exit",
  AB: "toggle_keyboard_nav",
  aB: "move workspace cursor up",
  YA: "move workspace cursor down",
  ZA: "move workspace cursor left",
  $A: "move workspace cursor right",
};
h.navigation.tk = "local_marker_1";
h.navigation.Nc = function () {
  return h.navigation.gf().Nc(h.navigation.tk);
};
h.navigation.gf = function () {
  return h.$f();
};
h.navigation.Pw = function (a) {
  if ((a = a.wa))
    (h.navigation.nd = h.navigation.Vi),
      h.navigation.Fy(!1),
      h.navigation.Nc().$a || h.navigation.Zr(),
      a.vJ() || a.ZJ(0);
};
h.navigation.Ow = function (a) {
  h.navigation.nd = h.navigation.Ui;
  var c = a.wa;
  a = c ? G(c) : G(a);
  h.navigation.Nc().$a || h.navigation.Zr();
  a &&
    a.o &&
    ((a = a.o.qb(!0)),
    0 < a.length && ((a = a[0]), (a = h.B.Uk(a)), H(h.navigation.uj(), a)));
};
h.navigation.Ln = function (a) {
  h.dc();
  var c = a.pb(),
    d = !!a.wa,
    e = a.qb(!0);
  h.navigation.Fy(d);
  h.navigation.nd = h.navigation.ke;
  0 < e.length
    ? H(c, h.B.yq(e[0]))
    : ((a = h.B.nj(a, new h.g.T(100, 100))), H(c, a));
};
h.navigation.uj = function () {
  var a = h.navigation.gf(),
    c = null;
  a.sa && (c = (a = (c = a.wa) ? G(c) : G(a)) ? a.o.pb() : null);
  return c;
};
h.navigation.HD = function (a) {
  var c = G(a);
  if (c && c.isVisible()) {
    var d = h.navigation.uj().$a.ra;
    d.isEnabled()
      ? ((c = qb(c, d)),
        c.La(),
        Xa(c, !0),
        H(a.pb(), h.B.af(c)),
        h.navigation.Sx() ||
          h.navigation.Dc(
            "Something went wrong while inserting a block from the flyout."
          ),
        h.navigation.Ln(a),
        H(a.pb(), h.B.yq(c)),
        h.navigation.hF())
      : h.navigation.Dc("Can't insert a disabled block.");
  } else
    h.navigation.Dc(
      "Trying to insert from the flyout when the flyout does not  exist or is not visible"
    );
};
h.navigation.Fy = function (a) {
  h.navigation.uj() && (h.navigation.uj().Ia(), a && G(h.navigation.gf()).Ia());
};
h.navigation.XD = function () {
  var a = h.navigation.Nc().$a,
    c = h.navigation.gf().pb().$a;
  if (!a) return h.navigation.Dc("Cannot insert with no marked node."), !1;
  if (!c) return h.navigation.Dc("Cannot insert with no cursor node."), !1;
  a = a.Xa();
  c = c.Xa();
  return a == h.B.types.Wb
    ? (h.navigation.Dc("Should not have been able to mark a field."), !1)
    : a == h.B.types.Fb
    ? (h.navigation.Dc("Should not have been able to mark a block."), !1)
    : a == h.B.types.Re
    ? (h.navigation.Dc("Should not have been able to mark a stack."), !1)
    : c == h.B.types.Wb
    ? (h.navigation.Dc("Cannot attach a field to anything else."), !1)
    : c == h.B.types.cc
    ? (h.navigation.Dc("Cannot attach a workspace to anything else."), !1)
    : !0;
};
h.navigation.bE = function (a, c) {
  if (!a) return !1;
  if (a.Ja)
    return h.navigation.Dc("Cannot move a shadow block to the workspace."), !1;
  a.getParent() && w(a, !1);
  a.moveTo(c.Uo);
  return !0;
};
h.navigation.Sx = function () {
  var a = h.navigation.Nc().$a,
    c = h.navigation.gf().pb().$a;
  if (!h.navigation.XD()) return !1;
  var d = a.Xa(),
    e = c.Xa(),
    f = c.ra,
    g = a.ra;
  if (a.Fj && c.Fj) return h.navigation.te(f, g);
  if (a.Fj && (e == h.B.types.Fb || e == h.B.types.Re))
    return h.navigation.Dx(f, g);
  if (d == h.B.types.cc) return (c = c ? c.V() : null), h.navigation.bE(c, a);
  h.navigation.Dc("Unexpected state in Blockly.navigation.modify_.");
  return !1;
};
h.navigation.BC = function (a, c) {
  var d = a.V(),
    e = c.V();
  d.Oc() == e.Oc() &&
    (-1 < q(d, !1).indexOf(e)
      ? h.navigation.Nn(c).disconnect()
      : h.navigation.Nn(a).disconnect());
};
h.navigation.hs = function (a, c) {
  if (!a || !c) return !1;
  var d = a.V();
  return z(qa(a), a, c, !1)
    ? (h.navigation.BC(a, c), A(c) || ra(d.Oc(), a, c), c.connect(a), !0)
    : !1;
};
h.navigation.Nn = function (a) {
  var c = a.V();
  return A(a) ? (c.W ? c.W : c.M ? c.M : null) : a;
};
h.navigation.mx = function (a) {
  return A(a) ? a : a.pa ? a.pa : null;
};
h.navigation.te = function (a, c) {
  if (!a || !c) return !1;
  var d = h.navigation.Nn(a),
    e = h.navigation.mx(c),
    f = h.navigation.mx(a),
    g = h.navigation.Nn(c);
  if (
    (d && e && h.navigation.hs(d, e)) ||
    (f && g && h.navigation.hs(f, g)) ||
    h.navigation.hs(a, c)
  )
    return !0;
  d = qa(a).on(a, c, !1);
  h.navigation.Dc("Connection failed with error: " + Ta(d, a, c));
  return !1;
};
h.navigation.Dx = function (a, c) {
  switch (c.type) {
    case h.ie:
      if (h.navigation.te(a.Y, c)) return !0;
      break;
    case h.Ta:
      if (h.navigation.te(a.W, c)) return !0;
      break;
    case h.lb:
      if (h.navigation.te(a.M, c)) return !0;
      break;
    case h.ge:
      for (var d = 0; d < a.S.length; d++) {
        var e = a.S[d].connection;
        if (e && e.type === h.lb && h.navigation.te(e, c)) return !0;
      }
      if (a.M && h.navigation.te(a.M, c)) return !0;
  }
  h.navigation.Dc("This block can not be inserted at the marked location.");
  return !1;
};
h.navigation.AC = function (a) {
  var c = a.pb().$a;
  if (c.Fj) {
    var d = c.ra;
    d.isConnected()
      ? ((c = A(d) ? d : d.pa),
        (d = A(d) ? d.pa : d),
        d.V().Ja
          ? h.navigation.Sr("Cannot disconnect a shadow block")
          : (c.disconnect(),
            rb(d, c),
            Ba(c.V().Oc()),
            (c = h.B.bf(c)),
            H(a.pb(), c)))
      : h.navigation.Sr("Cannot disconnect unconnected connection");
  } else
    h.navigation.Sr(
      "Cannot disconnect blocks when the cursor is not on a connection"
    );
};
h.navigation.Zr = function () {
  H(h.navigation.Nc(), h.navigation.gf().pb().$a);
};
h.navigation.hF = function () {
  var a = h.navigation.Nc();
  H(a, null);
  a.Ia();
};
h.navigation.Wj = function (a) {
  h.navigation.nd = a;
};
h.navigation.cE = function (a) {
  var c = h.navigation.gf();
  if (c && (c = c.pb())) {
    var d = c.$a;
    d = d ? d.V() : null;
    d === a
      ? d.getParent()
        ? (a = d.W || d.M) && H(c, h.B.bf(a.pa))
        : H(c, h.B.nj(d.C, d.Wa()))
      : d && -1 < C(a, !1).indexOf(d) && H(c, h.B.nj(d.C, d.Wa()));
  }
};
h.navigation.KJ = function (a) {
  var c = h.navigation.gf().pb();
  if (c) {
    var d = c.$a;
    d = d ? d.V() : null;
    d === a && H(c, h.B.af(d));
  }
};
h.navigation.KC = function () {
  var a = h.navigation.gf();
  a.ib || ((a.ib = !0), h.navigation.Ln(a));
};
h.navigation.zC = function () {
  var a = h.navigation.gf();
  a.ib &&
    ((a.ib = !1),
    a.pb().Ia(),
    h.navigation.Nc().Ia(),
    h.navigation.uj() && h.navigation.uj().Ia());
};
h.navigation.Sr = function (a) {
  h.navigation.Mj ? h.navigation.Mj("log", a) : console.log(a);
};
h.navigation.Dc = function (a) {
  h.navigation.Mj ? h.navigation.Mj("warn", a) : console.warn(a);
};
h.navigation.kJ = function (a) {
  h.navigation.Mj ? h.navigation.Mj("error", a) : console.error(a);
};
h.navigation.to = function (a, c, d) {
  var e = a.pb(),
    f = a.pb().$a;
  if (f.Xa() !== h.B.types.cc) return !1;
  f = f.Uo;
  H(
    e,
    h.B.nj(a, new h.g.T(c * h.navigation.Kv + f.x, d * h.navigation.Kv + f.y))
  );
  return !0;
};
h.navigation.oD = function (a) {
  a = a.pb().$a;
  var c = a.Xa();
  c == h.B.types.Wb
    ? ((a = a.ra), ia(a) && a.$l(void 0))
    : a.Fj || c == h.B.types.cc
    ? h.navigation.Zr()
    : c == h.B.types.Fb
    ? h.navigation.Dc("Cannot mark a block.")
    : c == h.B.types.Re && h.navigation.Dc("Cannot mark a stack.");
};
h.navigation.$E = function () {
  var a = {
    name: h.navigation.Gb.hd,
    Ka: function (c) {
      return c.ib;
    },
    xa: function (c, d, e) {
      d = c.wa;
      switch (h.navigation.nd) {
        case h.navigation.ke:
          return c.pb().Nb(e);
        case h.navigation.Ui:
          return (c = d ? G(d) : G(c)), !(!c || !c.Nb(e));
        case h.navigation.Vi:
          return d && "function" == typeof d.Nb ? d.Nb(e) : !1;
        default:
          return !1;
      }
    },
  };
  h.Ra.A.register(a);
  I(h.g.R.Gv, a.name);
};
h.navigation.YE = function () {
  var a = {
    name: h.navigation.Gb.Vu,
    Ka: function (c) {
      return c.ib;
    },
    xa: function (c, d, e) {
      switch (h.navigation.nd) {
        case h.navigation.ke:
          return c.pb().Nb(e);
        case h.navigation.Ui:
          return h.navigation.Pw(c), !0;
        case h.navigation.Vi:
          return (c = c.wa) && "function" == typeof c.Nb ? c.Nb(e) : !1;
        default:
          return !1;
      }
    },
  };
  h.Ra.A.register(a);
  I(h.g.R.Ct, a.name);
};
h.navigation.XE = function () {
  var a = {
    name: h.navigation.Gb.fd,
    Ka: function (c) {
      return c.ib;
    },
    xa: function (c, d, e) {
      d = c.wa;
      switch (h.navigation.nd) {
        case h.navigation.ke:
          return c.pb().Nb(e);
        case h.navigation.Ui:
          return (c = d ? G(d) : G(c)), !(!c || !c.Nb(e));
        case h.navigation.Vi:
          return d && "function" == typeof d.Nb ? d.Nb(e) : !1;
        default:
          return !1;
      }
    },
  };
  h.Ra.A.register(a);
  I(h.g.R.hv, a.name);
};
h.navigation.SE = function () {
  var a = {
    name: h.navigation.Gb.tu,
    Ka: function (c) {
      return c.ib;
    },
    xa: function (c, d, e) {
      switch (h.navigation.nd) {
        case h.navigation.ke:
          return c.pb().Nb(e);
        case h.navigation.Vi:
          return (
            ((d = c.wa) && "function" == typeof d.Nb && d.Nb(e)) ||
              h.navigation.Ow(c),
            !0
          );
        default:
          return !1;
      }
    },
  };
  h.Ra.A.register(a);
  I(h.g.R.Xt, a.name);
};
h.navigation.UE = function () {
  var a = {
    name: h.navigation.Gb.xu,
    Ka: function (c) {
      return c.ib && !c.options.readOnly;
    },
    xa: function () {
      switch (h.navigation.nd) {
        case h.navigation.ke:
          return h.navigation.Sx();
        default:
          return !1;
      }
    },
  };
  h.Ra.A.register(a);
  I(h.g.R.CA, a.name);
};
h.navigation.VE = function () {
  var a = {
    name: h.navigation.Gb.SA,
    Ka: function (c) {
      return c.ib && !c.options.readOnly;
    },
    xa: function (c) {
      switch (h.navigation.nd) {
        case h.navigation.ke:
          return h.navigation.oD(c), !0;
        case h.navigation.Ui:
          return h.navigation.HD(c), !0;
        default:
          return !1;
      }
    },
  };
  h.Ra.A.register(a);
  I(h.g.R.cu, a.name);
};
h.navigation.ME = function () {
  var a = {
    name: h.navigation.Gb.Tz,
    Ka: function (c) {
      return c.ib && !c.options.readOnly;
    },
    xa: function (c) {
      switch (h.navigation.nd) {
        case h.navigation.ke:
          return h.navigation.AC(c), !0;
        default:
          return !1;
      }
    },
  };
  h.Ra.A.register(a);
  I(h.g.R.gn, a.name);
};
h.navigation.bF = function () {
  var a = {
    name: h.navigation.Gb.Sp,
    Ka: function (c) {
      return c.ib && !c.options.readOnly;
    },
    xa: function (c) {
      switch (h.navigation.nd) {
        case h.navigation.ke:
          return c.wa ? h.navigation.Pw(c) : h.navigation.Ow(c), !0;
        default:
          return !1;
      }
    },
  };
  h.Ra.A.register(a);
  I(h.g.R.yB, a.name);
};
h.navigation.PE = function () {
  var a = {
    name: h.navigation.Gb.dA,
    Ka: function (c) {
      return c.ib;
    },
    xa: function (c) {
      switch (h.navigation.nd) {
        case h.navigation.Ui:
          return h.navigation.Ln(c), !0;
        case h.navigation.Vi:
          return h.navigation.Ln(c), !0;
        default:
          return !1;
      }
    },
  };
  h.Ra.A.register(a, !0);
  I(h.g.R.du, a.name, !0);
  I(h.g.R.E, a.name, !0);
};
h.navigation.aF = function () {
  var a = {
    name: h.navigation.Gb.AB,
    xa: function (d) {
      d.ib ? h.navigation.zC() : h.navigation.KC();
      return !0;
    },
  };
  h.Ra.A.register(a);
  var c = J(h.g.R.LA, [h.g.R.sg, h.g.R.If]);
  I(c, a.name);
};
h.navigation.dF = function () {
  var a = {
    name: h.navigation.Gb.ZA,
    Ka: function (d) {
      return d.ib && !d.options.readOnly;
    },
    xa: function (d) {
      return h.navigation.to(d, -1, 0);
    },
  };
  h.Ra.A.register(a);
  var c = J(h.g.R.Ct, [h.g.R.If]);
  I(c, a.name);
};
h.navigation.eF = function () {
  var a = {
    name: h.navigation.Gb.$A,
    Ka: function (d) {
      return d.ib && !d.options.readOnly;
    },
    xa: function (d) {
      return h.navigation.to(d, 1, 0);
    },
  };
  h.Ra.A.register(a);
  var c = J(h.g.R.Xt, [h.g.R.If]);
  I(c, a.name);
};
h.navigation.fF = function () {
  var a = {
    name: h.navigation.Gb.aB,
    Ka: function (d) {
      return d.ib && !d.options.readOnly;
    },
    xa: function (d) {
      return h.navigation.to(d, 0, -1);
    },
  };
  h.Ra.A.register(a);
  var c = J(h.g.R.Gv, [h.g.R.If]);
  I(c, a.name);
};
h.navigation.cF = function () {
  var a = {
    name: h.navigation.Gb.YA,
    Ka: function (d) {
      return d.ib && !d.options.readOnly;
    },
    xa: function (d) {
      return h.navigation.to(d, 0, 1);
    },
  };
  h.Ra.A.register(a);
  var c = J(h.g.R.hv, [h.g.R.If]);
  I(c, a.name);
};
h.navigation.WE = function () {
  h.navigation.SE();
  h.navigation.XE();
  h.navigation.YE();
  h.navigation.$E();
  h.navigation.cF();
  h.navigation.dF();
  h.navigation.eF();
  h.navigation.fF();
  h.navigation.ME();
  h.navigation.PE();
  h.navigation.UE();
  h.navigation.VE();
  h.navigation.aF();
  h.navigation.bF();
};
h.G = {};
h.G.visible = !1;
h.G.gj = !1;
h.G.NA = 50;
h.G.Ux = 0;
h.G.am = 0;
h.G.Nr = 0;
h.G.Or = 0;
h.G.gb = null;
h.G.Kl = null;
h.G.Mu = 0;
h.G.Nu = 10;
h.G.oB = 10;
h.G.zA = 750;
h.G.zp = 5;
h.G.eb = null;
h.G.jD = function () {
  var a = h.G.nx(h.G.gb);
  if (a) {
    for (a = a.Yd; "function" == typeof a; ) a = a();
    if ("string" != typeof a)
      throw Error("Tooltip function must return a string.");
    return a;
  }
  return "";
};
h.G.nx = function (a) {
  for (; a && a.Yd; ) {
    if ("string" == typeof a.Yd || "function" == typeof a.Yd) return a;
    a = a.Yd;
  }
  return null;
};
h.G.Va = function () {
  h.G.eb ||
    ((h.G.eb = document.createElement("div")),
    (h.G.eb.className = "blocklyTooltipDiv"),
    (h.Bo || document.body).appendChild(h.G.eb));
};
h.G.fj = function (a) {
  a.$D = h.Xb(a, "mouseover", null, h.G.qE);
  a.YD = h.Xb(a, "mouseout", null, h.G.pE);
  a.addEventListener("mousemove", h.G.py, !1);
};
h.G.vt = function (a) {
  a && (h.sb(a.$D), h.sb(a.YD), a.removeEventListener("mousemove", h.G.py));
};
h.G.qE = function (a) {
  h.G.gj ||
    ((a = h.G.nx(a.currentTarget)),
    h.G.gb != a && (h.G.Ia(), (h.G.Kl = null), (h.G.gb = a)),
    clearTimeout(h.G.Ux));
};
h.G.pE = function () {
  h.G.gj ||
    ((h.G.Ux = setTimeout(function () {
      h.G.gb = null;
      h.G.Kl = null;
      h.G.Ia();
    }, 1)),
    clearTimeout(h.G.am));
};
h.G.py = function (a) {
  if (h.G.gb && h.G.gb.Yd && !h.G.gj)
    if (h.G.visible) {
      var c = h.G.Nr - a.pageX;
      a = h.G.Or - a.pageY;
      Math.sqrt(c * c + a * a) > h.G.oB && h.G.Ia();
    } else
      h.G.Kl != h.G.gb &&
        (clearTimeout(h.G.am),
        (h.G.Nr = a.pageX),
        (h.G.Or = a.pageY),
        (h.G.am = setTimeout(h.G.wF, h.G.zA)));
};
h.G.I = function () {
  h.G.gb = null;
  h.G.Kl = null;
  h.G.Ia();
};
h.G.Ia = function () {
  h.G.visible &&
    ((h.G.visible = !1), h.G.eb && (h.G.eb.style.display = "none"));
  h.G.am && clearTimeout(h.G.am);
};
h.G.block = function () {
  h.G.Ia();
  h.G.gj = !0;
};
h.G.PF = function () {
  h.G.gj = !1;
};
h.G.wF = function () {
  if (!h.G.gj && ((h.G.Kl = h.G.gb), h.G.eb)) {
    h.G.eb.textContent = "";
    var a = h.G.jD();
    a = h.g.Sa.lz(a, h.G.NA);
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) {
      var d = document.createElement("div");
      d.appendChild(document.createTextNode(a[c]));
      h.G.eb.appendChild(d);
    }
    a = h.G.gb.J;
    c = document.documentElement.clientWidth;
    d = document.documentElement.clientHeight;
    h.G.eb.style.direction = a ? "rtl" : "ltr";
    h.G.eb.style.display = "block";
    h.G.visible = !0;
    var e = h.G.Nr;
    e = a ? e - (h.G.Mu + h.G.eb.offsetWidth) : e + h.G.Mu;
    var f = h.G.Or + h.G.Nu;
    f + h.G.eb.offsetHeight > d + window.scrollY &&
      (f -= h.G.eb.offsetHeight + 2 * h.G.Nu);
    a
      ? (e = Math.max(h.G.zp - window.scrollX, e))
      : e + h.G.eb.offsetWidth > c + window.scrollX - 2 * h.G.zp &&
        (e = c - h.G.eb.offsetWidth - 2 * h.G.zp);
    h.G.eb.style.top = f + "px";
    h.G.eb.style.left = e + "px";
  }
};
h.Ne = function (a, c) {
  this.Tx = null;
  this.Kc = new h.g.T(0, 0);
  this.Kb = this.Vb = this.Yj = this.Zj = this.vd = null;
  this.zq = c;
  this.vl = this.Wh = this.wl = this.Ph = !1;
  this.Qd = a;
  this.ma = this.Di = this.We = this.Fg = this.zo = this.xo = null;
  this.Wn = this.Qh = this.$v = !1;
  this.vx = !h.Wz;
};
b = h.Ne.prototype;
b.I = function () {
  h.Touch.sn();
  h.G.PF();
  this.zq.xc = null;
  this.xo && h.sb(this.xo);
  this.zo && h.sb(this.zo);
  this.We && this.We.I();
  this.Di && this.Di.I();
  this.Fg && this.Fg.I();
};
function sb(a, c) {
  a.Kc = h.g.T.Yk(new h.g.T(c.clientX, c.clientY), a.Tx);
  if (a.Ph) var d = !1;
  else (a.Ph = h.g.T.UD(a.Kc) > (a.ma ? h.rA : h.Vz)), (d = a.Ph);
  if (d) {
    if (a.$v)
      throw Error("updateIsDragging_ should only be called once per gesture.");
    a.$v = !0;
    if (a.vd) {
      a.vl = !0;
      a.Fg = new h.zm(a.vd, a.Kb);
      d = a.Fg;
      h.h.Zb() || h.h.ta(!0);
      d.o.hc(!1);
      d.Yb.fq = !1;
      d.Jh && (d.Yb.moveTo(0, 0), d.Jh.yi(d.uf.x, d.uf.y), tb(d.Jh, d.Yb.qa()));
      d.Yb.jh && d.Yb.jh(!0);
      var e = d.o.wa;
      e &&
        "function" == typeof e.Zp &&
        e.Zp(d.Yb.ad() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      nb(a.Fg, a.Qd, a.Kc);
      d = !0;
    } else d = !1;
    if (!d) {
      if (a.Vb)
        if (
          (a.ma
            ? (a.Vb && a.Vb.isEnabled()
                ? ((d = !ub(a.ma)) ||
                    ((d = a.Kc),
                    (d = (Math.atan2(d.y, d.x) / Math.PI) * 180),
                    (e = a.ma.HC),
                    (d =
                      (d < e && d > -e) || d < -180 + e || d > 180 - e
                        ? !0
                        : !1)),
                  d
                    ? ((a.Kb = a.ma.Pa),
                      vb(a.Kb),
                      h.h.Zb() || h.h.ta(!0),
                      (a.Yj = null),
                      (a.Vb = qb(a.ma, a.Vb)),
                      a.Vb.select(),
                      (d = !0))
                    : (d = !1))
                : (d = !1),
              (a.Wh = d))
            : a.Vb.zc() && (a.Wh = !0),
          a.Wh)
        ) {
          a.We = new h.qh(a.Vb, a.Kb);
          d = a.We;
          e = a.Kc;
          var f = a.vx;
          h.h.Zb() || h.h.ta(!0);
          var g = new h.h.Je(d.ob, !0, q(d.ob, !1));
          h.h.Ea(g);
          d.o.Zn && Ba(d.ob);
          h.g.j.cm();
          d.o.hc(!1);
          h.fb.Lq();
          if (d.ob.getParent() || (f && d.ob.Y && d.ob.Y.ua()))
            w(d.ob, f),
              (e = d.Qj(e)),
              (e = h.g.T.sum(d.uf, e)),
              d.ob.translate(e.x, e.y),
              h.fb.CC(d.ob),
              (e = d.ef),
              (e.mn = na(e));
          d.ob.jh(!0);
          e = d.ob;
          e.qm &&
            ((f = e.Wa()),
            e.qa().removeAttribute("transform"),
            e.C.kd.yi(f.x, f.y),
            (f = e.qa()) && tb(e.C.kd, f));
          (e = d.o.wa) &&
            "function" == typeof e.Zp &&
            e.Zp(d.ob.ad() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
          wa(a.We, a.Qd, a.Kc);
          d = !0;
        } else d = !1;
      else d = !1;
      if ((d = !d))
        if (a.ma) d = ub(a.ma);
        else if ((d = a.Kb)) (d = a.Kb), (d = d.options.fc && d.options.fc.Jg);
      d &&
        ((a.Di = a.ma ? new h.Lm(a.ma) : new h.Hk(a.Kb)),
        (a.wl = !0),
        a.Di.jt());
    }
    h.Yg();
  }
  a.Qd = c;
}
b.Nq = function (a) {
  h.g.$n(a)
    ? this.cancel()
    : ((this.Qh = !0),
      h.fb.Lq(),
      vb(this.Kb),
      this.Kb.Zn && this.Kb.resize(),
      h.dc(!!this.ma),
      Oa(this.Kb),
      (this.Qd = a),
      h.G.block(),
      this.Vb &&
        (!this.Vb.Qc && a.shiftKey && this.Vb.C.ib
          ? H(this.zq.pb(), h.B.yq(this.Vb))
          : this.Vb.select()),
      h.g.zl(a)
        ? Da(this, a)
        : (("touchstart" != a.type.toLowerCase() &&
            "pointerdown" != a.type.toLowerCase()) ||
            "mouse" == a.pointerType ||
            h.TD(a, this),
          (this.Tx = new h.g.T(a.clientX, a.clientY)),
          (this.vx = a.altKey || a.ctrlKey || a.metaKey),
          this.fj(a)));
};
b.fj = function (a) {
  this.xo = h.Ca(document, "mousemove", null, this.zj.bind(this));
  this.zo = h.Ca(document, "mouseup", null, this.Qn.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
b.zj = function (a) {
  sb(this, a);
  this.wl
    ? this.Di.Jg(this.Kc)
    : this.Wh
    ? wa(this.We, this.Qd, this.Kc)
    : this.vl && nb(this.Fg, this.Qd, this.Kc);
  a.preventDefault();
  a.stopPropagation();
};
b.Qn = function (a) {
  sb(this, a);
  h.Yg();
  if (this.Wn) console.log("Trying to end a gesture recursively.");
  else {
    this.Wn = !0;
    if (this.vl) ob(this.Fg, a, this.Kc);
    else if (this.Wh) za(this.We, a, this.Kc);
    else if (this.wl) {
      var c = this.Di;
      c.Jg(this.Kc);
      Ra(c.o);
    } else if (this.vd && !this.Ph)
      this.vd.rF && this.vd.rF(), this.vd.select && this.vd.select();
    else if (wb(this)) {
      c = this.Zj;
      var d = this.Qd;
      ia(c) && c.$l(d);
      xb(this);
    } else
      !this.Yj || this.Ph || wb(this)
        ? this.Yj ||
          this.vd ||
          this.Zj ||
          this.Ph ||
          ((c = this.zq),
          a.shiftKey && c.ib
            ? ((d = h.g.nF(c, new h.g.T(a.clientX, a.clientY))),
              (d = h.B.nj(c, d)),
              H(c.pb(), d))
            : h.selected && pb(h.selected),
          (c = new h.h.Ke(null, (this.Kb || c).id, "workspace")),
          h.h.Ea(c))
        : (this.ma && this.ma.ej
            ? this.Vb.isEnabled() &&
              (h.h.Zb() || h.h.ta(!0), Ca(qb(this.ma, this.Vb)))
            : ((c = new h.h.Ke(this.Yj, this.Kb.id, "block")), h.h.Ea(c)),
          xb(this),
          h.h.ta(!1));
    a.preventDefault();
    a.stopPropagation();
    this.I();
  }
};
b.cancel = function () {
  if (!this.Wn) {
    h.Yg();
    if (this.vl) ob(this.Fg, this.Qd, this.Kc);
    else if (this.Wh) za(this.We, this.Qd, this.Kc);
    else if (this.wl) {
      var a = this.Di;
      a.Jg(this.Kc);
      Ra(a.o);
    }
    this.I();
  }
};
function Da(a, c) {
  a.Vb
    ? (xb(a), h.dc(!!a.ma), a.Vb.Yl(c))
    : a.vd
    ? a.vd.Yl(c)
    : a.Kb && !a.ma && (h.dc(), a.Kb.Yl(c));
  c.preventDefault();
  c.stopPropagation();
  a.I();
}
function yb(a, c, d) {
  if (a.Qh)
    throw Error(
      "Tried to call gesture.handleWsStart, but the gesture had already been started."
    );
  a.Kb || (a.Kb = d);
  a.Qd = c;
  a.Nq(c);
  a.Kb.ib && h.navigation.Wj(h.navigation.ke);
}
function zb(a, c, d) {
  if (a.Qh)
    throw Error(
      "Tried to call gesture.handleFlyoutStart, but the gesture had already been started."
    );
  a.ma || (a.ma = d);
  yb(a, c, d.o);
}
function xb(a) {
  a.Vb && !a.ma && Ba(a.Vb);
}
function Ab(a, c) {
  a.Yj || a.vd || ((a.Yj = c), c.Qc && c != c.Oc() ? Bb(a, c.Oc()) : Bb(a, c));
}
function Bb(a, c) {
  c.Ja ? Bb(a, c.getParent()) : (a.Vb = c);
}
function wb(a) {
  return (a.Zj ? ia(a.Zj) : !1) && !a.Ph && (!a.ma || !a.ma.ej);
}
b.rd = function () {
  return this.wl || this.Wh || this.vl;
};
b.vj = function () {
  return this.We ? this.We.vj() : [];
};
h.Ne.Th = function () {
  for (var a = h.vb.getAll(), c = 0, d; (d = a[c]); c++) if (d.xc) return !0;
  return !1;
};
h.wd = function (a, c, d) {
  this.wf = this.kp;
  this.Zy = this.fz = null;
  this.Bc = new h.g.le(0, 0);
  this.s = this.gs = this.xi = this.Cc = this.Tb = this.Zc = this.jg = this.Vf = null;
  d && this.Mk(d);
  this.setValue(a);
  c && (this.fz = c);
};
b = h.wd.prototype;
b.kp = null;
b.name = void 0;
b.Wf = !1;
b.Rx = 50;
b.L = null;
b.Rg = !0;
b.oh = !0;
b.dw = null;
h.wd.Lu = "\u00a0";
b = h.wd.prototype;
b.hk = !0;
b.kv = !1;
b.Mk = function (a) {
  var c = a.tooltip;
  "string" == typeof c && (c = h.g.dd(a.tooltip));
  c && this.De(c);
};
b.aa = function () {
  !this.s && this.L && this.L.C && this.L.C.sa && (this.s = this.L.C.rb.aa());
  return this.s;
};
b.V = function () {
  return this.L;
};
b.Fa = function () {
  this.Zc ||
    ((this.Zc = h.g.j.K(h.g.F.Uc, {}, null)),
    this.isVisible() || (this.Zc.style.display = "none"),
    this.L.qa().appendChild(this.Zc),
    this.Sn(),
    Cb(this),
    this.De(this.Zy),
    h.G.fj(Db(this)),
    (this.gs = h.Ca(Db(this), "mousedown", this, this.bh)));
};
b.Sn = function () {
  Eb(this);
  Fb(this);
};
function Eb(a) {
  a.Tb = h.g.j.K(
    h.g.F.Ad,
    {
      rx: a.aa().Im,
      ry: a.aa().Im,
      x: 0,
      y: 0,
      height: a.Bc.height,
      width: a.Bc.width,
      class: "blocklyFieldRect",
    },
    a.Zc
  );
}
function Fb(a) {
  a.Cc = h.g.j.K(h.g.F.tv, { class: "blocklyText" }, a.Zc);
  a.aa().op && a.Cc.setAttribute("dominant-baseline", "central");
  a.xi = document.createTextNode("");
  a.Cc.appendChild(a.xi);
}
b.I = function () {
  h.D.rl(this);
  h.$.rl(this);
  h.G.vt(Db(this));
  this.gs && h.sb(this.gs);
  h.g.j.removeNode(this.Zc);
  this.Wf = !0;
};
function Cb(a) {
  var c = a.Zc;
  a.hk &&
    c &&
    (a.L.Md()
      ? (h.g.j.Rb(c, "blocklyEditableText"),
        h.g.j.cd(c, "blocklyNonEditableText"),
        (c.style.cursor = a.Jz))
      : (h.g.j.Rb(c, "blocklyNonEditableText"),
        h.g.j.cd(c, "blocklyEditableText"),
        (c.style.cursor = "")));
}
function ia(a) {
  return !!a.L && a.L.Md() && !!a.$l && "function" === typeof a.$l;
}
b.isVisible = function () {
  return this.oh;
};
b.$b = function (a) {
  if (this.oh != a) {
    this.oh = a;
    var c = this.qa();
    c && (c.style.display = a ? "block" : "none");
  }
};
b.qa = function () {
  return this.Zc;
};
b.lc = function () {};
b.Ss = function () {
  this.xi && (this.xi.nodeValue = Gb(this));
  this.dz();
};
b.dz = function () {
  var a = this.aa(),
    c = this.Tb ? this.aa().ik : 0,
    d = 2 * c,
    e = a.Jm,
    f = 0;
  this.Cc && ((f = h.g.j.kr(this.Cc, a.wh, a.wg, a.vg)), (d += f));
  this.Tb && (e = Math.max(e, a.gu));
  this.Bc.height = e;
  this.Bc.width = d;
  Hb(this, c, f);
  Ib(this);
};
function Hb(a, c, d) {
  if (a.Cc) {
    var e = a.aa(),
      f = a.Bc.height / 2;
    a.Cc.setAttribute("x", a.L.J ? a.Bc.width - d - c : c);
    a.Cc.setAttribute("y", e.op ? f : f - e.Jm / 2 + e.ku);
  }
}
function Ib(a) {
  a.Tb &&
    (a.Tb.setAttribute("width", a.Bc.width),
    a.Tb.setAttribute("height", a.Bc.height),
    a.Tb.setAttribute("rx", a.aa().Im),
    a.Tb.setAttribute("ry", a.aa().Im));
}
b.ag = function () {
  if (!this.isVisible()) return new h.g.le(0, 0);
  this.Rg
    ? (this.Ss(), (this.Rg = !1))
    : this.oh &&
      0 == this.Bc.width &&
      (console.warn(
        "Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."
      ),
      this.Ss());
  return this.Bc;
};
function Gb(a) {
  var c = Jb(a);
  if (!c) return h.wd.Lu;
  c.length > a.Rx && (c = c.substring(0, a.Rx - 2) + "\u2026");
  c = c.replace(/\s/g, h.wd.Lu);
  a.L && a.L.J && (c += "\u200f");
  return c;
}
function Jb(a) {
  if (a.vr) {
    var c = a.vr.call(a);
    if (null !== c) return String(c);
  }
  return String(a.getValue());
}
b.Dl = function () {
  this.Rg = !0;
  this.s = null;
};
function Kb(a) {
  a.Rg = !0;
  a.L && a.L.sa && (a.L.La(), a.L.Xc(), a.xt());
}
b.setValue = function (a) {
  if (null !== a) {
    var c = this.Gn(a);
    a = Lb(this, a, c);
    if (!(a instanceof Error)) {
      if ((c = this.fz))
        if (((c = c.call(this, a)), (a = Lb(this, a, c)), a instanceof Error))
          return;
      c = this.L;
      if (!c || !c.Wf) {
        var d = this.getValue();
        d === a
          ? this.Zk(a)
          : (c &&
              h.h.isEnabled() &&
              h.h.Ea(new h.h.Gi(c, "field", this.name || null, d, a)),
            this.Zk(a),
            this.Rg && Kb(this));
      }
    }
  }
};
function Lb(a, c, d) {
  if (null === d) return a.Rg && Kb(a), Error();
  void 0 !== d && (c = d);
  return c;
}
b.getValue = function () {
  return this.wf;
};
b.Gn = function (a) {
  return null === a || void 0 === a ? null : a;
};
b.Zk = function (a) {
  this.wf = a;
  this.Rg = !0;
};
b.bh = function (a) {
  if (this.L && this.L.C && (a = this.L.C.Kg(a))) {
    if (a.Qh)
      throw Error(
        "Tried to call gesture.setStartField, but the gesture had already been started."
      );
    a.Zj || (a.Zj = this);
  }
};
b.De = function (a) {
  a || "" === a || (a = this.L);
  var c = Db(this);
  c ? (c.Yd = a) : (this.Zy = a);
};
function Db(a) {
  return a.dw || a.qa();
}
b.hf = function () {
  for (var a = null, c = this.L, d = c.S, e = 0; e < c.S.length; e++)
    for (var f = d[e], g = f.hb, k = 0; k < g.length; k++)
      if (g[k] === this) {
        a = f;
        break;
      }
  return a;
};
b.Zw = function () {
  return !1;
};
b.Nb = function () {
  return !1;
};
b.lg = function (a) {
  a ? (this.Zc.appendChild(a), (this.Vf = a)) : (this.Vf = null);
};
b.mg = function (a) {
  a ? (this.Zc.appendChild(a), (this.jg = a)) : (this.jg = null);
};
b.xt = function () {
  var a = this.L.C;
  a.ib && this.Vf && a.pb().draw();
  a.ib && this.jg && a.Nc(h.navigation.tk).draw();
};
h.Kh = {};
h.Kh.register = function (a, c) {
  h.A.register(h.A.Z.Wb, a, c);
};
h.Kh.unregister = function (a) {
  h.A.unregister(h.A.Z.Wb, a);
};
h.Kh.ba = function (a) {
  var c = h.A.pr(h.A.Z.Wb, a.type);
  return c
    ? c.ba(a)
    : (console.warn(
        "Blockly could not create a field of type " +
          a.type +
          ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."
      ),
      null);
};
h.g.Hb = {};
h.g.Hb.sz = "aria-";
h.g.Hb.qB = "role";
h.g.Hb.Vm = {
  PG: "grid",
  QG: "gridcell",
  SG: "group",
  OA: "listbox",
  VA: "menu",
  WA: "menuitem",
  jH: "menuitemcheckbox",
  fB: "option",
  oI: "presentation",
  Mp: "row",
  II: "tree",
  JI: "treeitem",
};
h.g.Hb.State = {
  pz: "activedescendant",
  fG: "colcount",
  Sz: "disabled",
  sG: "expanded",
  WG: "invalid",
  MA: "label",
  $G: "labelledby",
  cH: "level",
  hI: "orientation",
  nI: "posinset",
  uI: "rowcount",
  Xm: "selected",
  xI: "setsize",
  NI: "valuemax",
  OI: "valuemin",
};
h.g.Hb.kh = function (a, c) {
  a.setAttribute(h.g.Hb.qB, c);
};
h.g.Hb.Wj = function (a, c, d) {
  Array.isArray(d) && (d = d.join(" "));
  a.setAttribute(h.g.Hb.sz + c, d);
};
h.g.R = {
  TI: 0,
  eH: 3,
  wz: 8,
  DI: 9,
  qH: 12,
  cu: 13,
  If: 16,
  sg: 17,
  Fi: 18,
  jI: 19,
  bG: 20,
  du: 27,
  tB: 32,
  kB: 33,
  jB: 34,
  bA: 35,
  yA: 36,
  wp: 37,
  EB: 38,
  Um: 39,
  Uz: 40,
  mI: 43,
  pI: 44,
  xu: 45,
  uh: 46,
  ZERO: 48,
  ONE: 49,
  KI: 50,
  EI: 51,
  OG: 52,
  LG: 53,
  AI: 54,
  yI: 55,
  qG: 56,
  oH: 57,
  JG: 59,
  HG: 61,
  GG: 173,
  IG: 163,
  qI: 63,
  XF: 64,
  Ct: 65,
  ZF: 66,
  cp: 67,
  Xt: 68,
  E: 69,
  tG: 70,
  Uc: 71,
  TG: 72,
  CA: 73,
  YG: 74,
  LA: 75,
  ZG: 76,
  dH: 77,
  nH: 78,
  GH: 79,
  iI: 80,
  Q: 81,
  rI: 82,
  hv: 83,
  yB: 84,
  MI: 85,
  Xp: 86,
  Gv: 87,
  gn: 88,
  IB: 89,
  bj: 90,
  Oi: 91,
  UI: 92,
  iG: 93,
  FH: 96,
  yH: 97,
  EH: 98,
  DH: 99,
  uH: 100,
  tH: 101,
  CH: 102,
  BH: 103,
  sH: 104,
  xH: 105,
  wH: 106,
  AH: 107,
  vH: 109,
  zH: 110,
  rH: 111,
  uG: 112,
  yG: 113,
  zG: 114,
  AG: 115,
  BG: 116,
  CG: 117,
  DG: 118,
  EG: 119,
  FG: 120,
  vG: 121,
  wG: 122,
  xG: 123,
  pH: 144,
  vI: 145,
  KG: 166,
  aH: 183,
  wI: 186,
  kG: 189,
  rG: 187,
  hG: 188,
  kI: 190,
  BI: 191,
  WF: 192,
  FI: 192,
  zI: 222,
  HH: 219,
  $F: 220,
  eG: 221,
  SI: 224,
  fH: 224,
  gH: 91,
  hH: 93,
  RI: 229,
  QI: 252,
  lI: 255,
};
h.Ap = function () {
  this.Pd = [];
  this.ni = this.gb = this.wo = this.qo = this.po = this.Tf = this.so = this.Pg = this.xs = null;
};
b = h.Ap.prototype;
b.La = function (a) {
  var c = document.createElement("div");
  c.className = "blocklyMenu goog-menu blocklyNonSelectable";
  c.tabIndex = 0;
  this.ni && h.g.Hb.kh(c, this.ni);
  this.gb = c;
  for (var d = 0, e; (e = this.Pd[d]); d++) c.appendChild(e.Va());
  this.so = h.Ca(c, "mouseover", this, this.tD, !0);
  this.Tf = h.Ca(c, "click", this, this.nD, !0);
  this.po = h.Ca(c, "mouseenter", this, this.rD, !0);
  this.qo = h.Ca(c, "mouseleave", this, this.sD, !0);
  this.wo = h.Ca(c, "keydown", this, this.pD);
  a.appendChild(c);
};
b.focus = function () {
  var a = this.gb;
  a && (a.focus({ preventScroll: !0 }), h.g.j.Rb(a, "blocklyFocused"));
};
b.kh = function (a) {
  this.ni = a;
};
b.I = function () {
  this.so && (h.sb(this.so), (this.so = null));
  this.Tf && (h.sb(this.Tf), (this.Tf = null));
  this.po && (h.sb(this.po), (this.po = null));
  this.qo && (h.sb(this.qo), (this.qo = null));
  this.wo && (h.sb(this.wo), (this.wo = null));
  for (var a = 0, c; (c = this.Pd[a]); a++) c.I();
  this.gb = null;
};
function Mb(a, c) {
  for (var d = a.gb; c && c != d; ) {
    if (h.g.j.yr(c, "blocklyMenuItem"))
      for (var e = 0, f; (f = a.Pd[e]); e++) if (f.gb == c) return f;
    c = c.parentElement;
  }
  return null;
}
b.Ce = function (a) {
  var c = this.Pg;
  c && (c.Ce(!1), (this.Pg = null));
  a &&
    (a.Ce(!0),
    (this.Pg = a),
    (c = this.gb),
    h.g.style.oF(a.gb, c),
    h.g.Hb.Wj(c, h.g.Hb.State.pz, a.yc()));
};
function Nb(a) {
  var c = a.Pd.indexOf(a.Pg);
  Ob(a, 0 > c ? a.Pd.length : c, -1);
}
function Ob(a, c, d) {
  c += d;
  for (var e; (e = a.Pd[c]); ) {
    if (e.isEnabled()) {
      a.Ce(e);
      break;
    }
    c += d;
  }
}
b.tD = function (a) {
  (a = Mb(this, a.target)) &&
    (a.isEnabled() ? this.Pg != a && this.Ce(a) : this.Ce(null));
};
b.nD = function (a) {
  var c = this.xs;
  this.xs = null;
  (c &&
    "number" == typeof a.clientX &&
    1 > h.g.T.Mq(c, new h.g.T(a.clientX, a.clientY))) ||
    ((a = Mb(this, a.target)) && a.isEnabled() && a.Ik && a.Ik(a));
};
b.rD = function () {
  this.focus();
};
b.sD = function () {
  if (this.gb) {
    var a = this.gb;
    a && (a.blur(), h.g.j.cd(a, "blocklyFocused"));
    this.Ce(null);
  }
};
b.pD = function (a) {
  if (this.Pd.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
    var c = this.Pg;
    switch (a.keyCode) {
      case h.g.R.cu:
      case h.g.R.tB:
        c && c.isEnabled() && c.Ik && c.Ik(c);
        break;
      case h.g.R.EB:
        Nb(this);
        break;
      case h.g.R.Uz:
        Ob(this, this.Pd.indexOf(this.Pg), 1);
        break;
      case h.g.R.kB:
      case h.g.R.yA:
        Ob(this, -1, 1);
        break;
      case h.g.R.jB:
      case h.g.R.bA:
        Ob(this, this.Pd.length, -1);
        break;
      default:
        return;
    }
    a.preventDefault();
    a.stopPropagation();
  }
};
b.ag = function () {
  var a = this.gb,
    c = h.g.style.ag(a);
  c.height = a.scrollHeight;
  return c;
};
h.Bp = function (a, c) {
  this.Uf = a;
  this.wf = c;
  this.Jn = !0;
  this.gb = null;
  this.Ys = !1;
  this.ni = null;
  this.yx = this.qq = this.pq = !1;
  this.Ik = null;
};
b = h.Bp.prototype;
b.Va = function () {
  var a = document.createElement("div");
  a.id = h.g.pk.ax();
  this.gb = a;
  a.className =
    "blocklyMenuItem goog-menuitem " +
    (this.Jn ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") +
    (this.qq ? "blocklyMenuItemSelected goog-option-selected " : "") +
    (this.yx ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") +
    (this.Ys ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
  var c = document.createElement("div");
  c.className = "blocklyMenuItemContent goog-menuitem-content";
  if (this.pq) {
    var d = document.createElement("div");
    d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
    c.appendChild(d);
  }
  d = this.Uf;
  "string" == typeof this.Uf && (d = document.createTextNode(this.Uf));
  c.appendChild(d);
  a.appendChild(c);
  this.ni && h.g.Hb.kh(a, this.ni);
  h.g.Hb.Wj(a, h.g.Hb.State.Xm, (this.pq && this.qq) || !1);
  h.g.Hb.Wj(a, h.g.Hb.State.Sz, !this.Jn);
  return a;
};
b.I = function () {
  this.gb = null;
};
b.yc = function () {
  return this.gb.id;
};
b.getValue = function () {
  return this.wf;
};
b.kh = function (a) {
  this.ni = a;
};
b.Ce = function (a) {
  this.yx = a;
  var c = this.gb;
  c &&
    this.isEnabled() &&
    (a
      ? (h.g.j.Rb(c, "blocklyMenuItemHighlight"),
        h.g.j.Rb(c, "goog-menuitem-highlight"))
      : (h.g.j.cd(c, "blocklyMenuItemHighlight"),
        h.g.j.cd(c, "goog-menuitem-highlight")));
};
b.isEnabled = function () {
  return this.Jn;
};
b.sf = function (a) {
  this.Jn = a;
};
function Pb(a, c, d) {
  a.Ik = c.bind(d);
}
h.Ya = function (a, c, d) {
  "function" != typeof a && h.Ya.ez(a);
  this.Nj = a;
  this.mt = this.Is = this.Mn = null;
  a = this.Nj;
  if (Array.isArray(a)) {
    for (var e = !1, f = 0; f < a.length; f++) {
      var g = a[f][0];
      "string" == typeof g
        ? (a[f][0] = h.g.dd(g))
        : (null != g.alt && (a[f][0].alt = h.g.dd(g.alt)), (e = !0));
    }
    if (!(e || 2 > a.length)) {
      e = [];
      for (f = 0; f < a.length; f++) e.push(a[f][0]);
      f = h.g.Sa.ft(e);
      g = h.g.Sa.fw(e, f);
      var k = h.g.Sa.gw(e, f);
      (!g && !k) ||
        f <= g + k ||
        (g && (this.Is = e[0].substring(0, g - 1)),
        k && (this.mt = e[0].substr(1 - k)),
        (this.Nj = h.Ya.RB(a, g, k)));
    }
  }
  this.Sj = this.getOptions(!1)[0];
  h.Ya.u.constructor.call(this, this.Sj[1], c, d);
  this.$j = this.Cd = this.Pc = this.ec = this.Sl = null;
};
h.g.object.U(h.Ya, h.wd);
h.Ya.ba = function (a) {
  return new h.Ya(a.options, void 0, a);
};
h.Ya.prototype.kv = !0;
h.Ya.cG = 25;
h.Ya.iH = 0.45;
h.Ya.DA = 5;
h.Ya.EA = 2 * h.Ya.DA;
h.Ya.um = h.g.userAgent.tm ? "\u25bc" : "\u25be";
b = h.Ya.prototype;
b.Jz = "default";
b.Sn = function () {
  !this.aa().ju || (this.aa().ju && !this.L.Ja)
    ? Eb(this)
    : (this.dw = this.L.qa());
  Fb(this);
  this.Pc = h.g.j.K(h.g.F.mk, {}, this.Zc);
  this.aa().nA
    ? ((this.$j = h.g.j.K(
        h.g.F.mk,
        { height: this.aa().jk + "px", width: this.aa().jk + "px" },
        this.Zc
      )),
      this.$j.setAttributeNS(h.g.j.jd, "xlink:href", this.aa().oA))
    : ((this.Cd = h.g.j.K(h.g.F.xv, {}, this.Cc)),
      this.Cd.appendChild(
        document.createTextNode(this.L.J ? h.Ya.um + " " : " " + h.Ya.um)
      ),
      this.L.J
        ? this.Cc.insertBefore(this.Cd, this.xi)
        : this.Cc.appendChild(this.Cd));
  this.Tb && h.g.j.Rb(this.Tb, "blocklyDropdownRect");
};
b.$l = function (a) {
  var c = new h.Ap();
  c.kh(h.g.Hb.Vm.OA);
  var d = this.getOptions(!1);
  this.Sl = null;
  for (var e = 0; e < d.length; e++) {
    var f = d[e][0],
      g = d[e][1];
    if ("object" == typeof f) {
      var k = new Image(f.width, f.height);
      k.src = f.src;
      k.alt = f.alt || "";
      f = k;
    }
    f = new h.Bp(f, g);
    f.kh(h.g.Hb.Vm.fB);
    f.Ys = this.L.J;
    f.pq = !0;
    c.Pd.push(f);
    f.qq = g == this.wf;
    g == this.wf && (this.Sl = f);
    Pb(f, this.qD, this);
  }
  this.ec = c;
  this.ec.xs =
    a && "number" === typeof a.clientX ? new h.g.T(a.clientX, a.clientY) : null;
  this.ec.La(h.D.cD());
  h.g.j.Rb(this.ec.gb, "blocklyDropdownMenu");
  this.aa().mA &&
    ((a = this.L.Ja ? this.L.getParent().ir() : this.L.ir()),
    (c = this.L.Ja ? this.L.getParent().style.jj : this.L.style.jj),
    h.D.Be(a, c));
  h.D.vF(this, this.JC.bind(this));
  this.ec.focus();
  this.Sl && this.ec.Ce(this.Sl);
  this.lc();
};
b.JC = function () {
  this.ec && this.ec.I();
  this.Sl = this.ec = null;
  this.lc();
};
b.qD = function (a) {
  h.D.rl(this, !0);
  this.setValue(a.getValue());
};
h.Ya.RB = function (a, c, d) {
  for (var e = [], f = 0; f < a.length; f++) {
    var g = a[f][0],
      k = a[f][1];
    g = g.substring(c, g.length - d);
    e[f] = [g, k];
  }
  return e;
};
b = h.Ya.prototype;
b.getOptions = function (a) {
  return "function" == typeof this.Nj
    ? ((this.Mn && a) || ((this.Mn = this.Nj.call(this)), h.Ya.ez(this.Mn)),
      this.Mn)
    : this.Nj;
};
b.Gn = function (a) {
  for (var c = !1, d = this.getOptions(!0), e = 0, f; (f = d[e]); e++)
    if (f[1] == a) {
      c = !0;
      break;
    }
  return c
    ? a
    : (this.L &&
        console.warn(
          "Cannot set the dropdown's value to an unavailable option. Block type: " +
            this.L.type +
            ", Field name: " +
            this.name +
            ", Value: " +
            a
        ),
      null);
};
b.Zk = function (a) {
  h.Ya.u.Zk.call(this, a);
  a = this.getOptions(!0);
  for (var c = 0, d; (d = a[c]); c++) d[1] == this.wf && (this.Sj = d);
};
b.lc = function () {
  this.Tb &&
    (this.Tb.setAttribute("stroke", this.L.style.jj),
    this.ec
      ? this.Tb.setAttribute("fill", this.L.style.jj)
      : this.Tb.setAttribute("fill", "transparent"));
  this.L &&
    this.Cd &&
    (this.Cd.style.fill = this.L.Ja ? this.L.style.vn : this.L.style.Eh);
};
b.Ss = function () {
  this.xi.nodeValue = "";
  this.Pc.style.display = "none";
  var a = this.Sj && this.Sj[0];
  if (a && "object" == typeof a) {
    this.Pc.style.display = "";
    this.Pc.setAttributeNS(h.g.j.jd, "xlink:href", a.src);
    this.Pc.setAttribute("height", a.height);
    this.Pc.setAttribute("width", a.width);
    var c = Number(a.height);
    a = Number(a.width);
    var d = !!this.Tb,
      e = Math.max(d ? this.aa().iu : 0, c + h.Ya.EA);
    d = d ? this.aa().ik : 0;
    var f = this.$j
      ? Qb(this, a + d, e / 2 - this.aa().jk / 2)
      : h.g.j.kr(this.Cd, this.aa().wh, this.aa().wg, this.aa().vg);
    this.Bc.width = a + f + 2 * d;
    this.Bc.height = e;
    var g = 0;
    this.L.J
      ? this.Pc.setAttribute("x", d + f)
      : ((g = a + f),
        this.Cc.setAttribute("text-anchor", "end"),
        this.Pc.setAttribute("x", d));
    this.Pc.setAttribute("y", e / 2 - c / 2);
    Hb(this, g + d, a + f);
  } else
    (this.xi.nodeValue = Gb(this)),
      h.g.j.Rb(this.Cc, "blocklyDropdownText"),
      this.Cc.setAttribute("text-anchor", "start"),
      (e = !!this.Tb),
      (c = Math.max(e ? this.aa().iu : 0, this.aa().Jm)),
      (a = h.g.j.kr(this.Cc, this.aa().wh, this.aa().wg, this.aa().vg)),
      (e = e ? this.aa().ik : 0),
      (d = 0),
      this.$j && (d = Qb(this, a + e, c / 2 - this.aa().jk / 2)),
      (this.Bc.width = a + d + 2 * e),
      (this.Bc.height = c),
      Hb(this, e, a);
  Ib(this);
};
function Qb(a, c, d) {
  if (!a.$j) return 0;
  var e = a.Tb ? a.aa().ik : 0,
    f = a.aa().pA,
    g = a.aa().jk;
  a.$j.setAttribute(
    "transform",
    "translate(" + (a.L.J ? e : c + f) + "," + d + ")"
  );
  return g + f;
}
b.vr = function () {
  if (!this.Sj) return null;
  var a = this.Sj[0];
  return "object" == typeof a ? a.alt : a;
};
h.Ya.ez = function (a) {
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
h.Ya.prototype.Nb = function (a) {
  if (this.ec)
    switch (a.name) {
      case h.navigation.Gb.hd:
        return Nb(this.ec), !0;
      case h.navigation.Gb.fd:
        return (a = this.ec), Ob(a, a.Pd.indexOf(a.Pg), 1), !0;
      default:
        return !1;
    }
  return h.Ya.u.Nb.call(this, a);
};
h.Kh.register("field_dropdown", h.Ya);
h.h.Lf = function (a, c) {
  h.h.Lf.u.constructor.call(this, c);
  this.Jr = a;
};
h.g.object.U(h.h.Lf, h.h.ne);
h.h.Lf.prototype.type = h.h.wv;
h.h.Lf.prototype.oa = function () {
  var a = h.h.Lf.u.oa.call(this);
  a.isOpen = this.Jr;
  return a;
};
h.h.Lf.prototype.ba = function (a) {
  h.h.Lf.u.ba.call(this, a);
  this.Jr = a.isOpen;
};
h.A.register(h.A.Z.Lb, h.h.wv, h.h.Lf);
h.kc = function (a) {
  this.o = a;
  this.Ig = [];
  this.ff = null;
  if (!(0 >= this.o.options.no)) {
    a = new h.gd({
      scrollbars: !0,
      parentWorkspace: this.o,
      rtl: this.o.J,
      oneBasedIndex: this.o.options.Ao,
      renderer: this.o.options.Ts,
      rendererOverrides: this.o.options.Us,
    });
    if (this.o.Ld) {
      a.jb = this.o.jb == h.g.va.Qe.Tp ? h.g.va.Qe.Nt : h.g.va.Qe.Tp;
      if (!h.rp) throw Error("Missing require for Blockly.HorizontalFlyout");
      this.ff = new h.rp(a);
    } else {
      a.jb = this.o.jb == h.g.va.Qe.Um ? h.g.va.Qe.wp : h.g.va.Qe.Um;
      if (!h.Nf) throw Error("Missing require for Blockly.VerticalFlyout");
      this.ff = new h.Nf(a);
    }
    F(this.o, this.lE.bind(this));
  }
};
b = h.kc.prototype;
b.Fk = 47;
b.wm = 44;
b.Ni = 16;
b.RA = 20;
b.Eu = 20;
b.Om = 10;
b.Pp = 0;
b.Qp = 32;
b.wA = 0.1;
h.kc.rz = 80;
h.kc.Ft = 4;
h.kc.Ou = 0.4;
h.kc.eB = 0.8;
h.kc.Gu = 45;
b = h.kc.prototype;
b.Xn = !1;
b.fs = 0;
b.O = null;
b.No = null;
b.Pr = 0;
b.Xg = 0;
b.Mx = 0;
b.$y = 0;
b.Va = function () {
  this.O = h.g.j.K(h.g.F.Uc, { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var c = h.g.j.K(h.g.F.Qt, { id: "blocklyTrashBodyClipPath" + a }, this.O);
  h.g.j.K(h.g.F.Ad, { width: this.Fk, height: this.wm, y: this.Ni }, c);
  var d = h.g.j.K(
    h.g.F.mk,
    {
      width: h.Si.width,
      x: -this.Pp,
      height: h.Si.height,
      y: -this.Qp,
      "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")",
    },
    this.O
  );
  d.setAttributeNS(h.g.j.jd, "xlink:href", this.o.options.Fo + h.Si.url);
  c = h.g.j.K(h.g.F.Qt, { id: "blocklyTrashLidClipPath" + a }, this.O);
  h.g.j.K(h.g.F.Ad, { width: this.Fk, height: this.Ni }, c);
  this.No = h.g.j.K(
    h.g.F.mk,
    {
      width: h.Si.width,
      x: -this.Pp,
      height: h.Si.height,
      y: -this.Qp,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")",
    },
    this.O
  );
  this.No.setAttributeNS(h.g.j.jd, "xlink:href", this.o.options.Fo + h.Si.url);
  h.Xb(this.O, "mousedown", this, this.UB);
  h.Xb(this.O, "mouseup", this, this.click);
  h.Xb(d, "mouseover", this, this.aE);
  h.Xb(d, "mouseout", this, this.ZD);
  this.aq();
  return this.O;
};
b.Fa = function (a) {
  0 < this.o.options.no &&
    (h.g.j.Dj(this.ff.Va(h.g.F.Wi), x(this.o)), this.ff.Fa(this.o));
  this.Ro = this.RA + a;
  ya(this, !1);
  return this.Ro + this.wm + this.Ni;
};
b.I = function () {
  this.O && (h.g.j.removeNode(this.O), (this.O = null));
  this.o = this.No = null;
  clearTimeout(this.Pr);
};
b.position = function () {
  if (this.Ro) {
    var a = this.o.od();
    a &&
      ((this.Mx =
        a.jb == h.me || (this.o.Ld && !this.o.J)
          ? a.Eb + a.uc - this.Fk - this.Eu - h.Ma.nc
          : this.Eu + h.Ma.nc),
      (this.$y =
        a.jb == h.dn ? this.Ro : a.Qb + a.Hc - (this.wm + this.Ni) - this.Ro),
      this.O.setAttribute(
        "transform",
        "translate(" + this.Mx + "," + this.$y + ")"
      ));
  }
};
b.il = function () {
  if (!this.O) return null;
  var a = this.O.getBoundingClientRect(),
    c = a.top + this.Qp - this.Om;
  a = a.left + this.Pp - this.Om;
  return new h.g.Rect(
    c,
    c + this.Ni + this.wm + 2 * this.Om,
    a,
    a + this.Fk + 2 * this.Om
  );
};
function ya(a, c) {
  a.Xn != c && (clearTimeout(a.Pr), (a.Xn = c), a.aq());
}
b.aq = function () {
  var a = 1 / (h.kc.Ft + 1);
  this.Xg += this.Xn ? a : -a;
  this.Xg = Math.min(Math.max(this.Xg, this.fs), 1);
  Rb(this, this.Xg * h.kc.Gu);
  this.O.style.opacity = h.kc.Ou + this.Xg * (h.kc.eB - h.kc.Ou);
  this.Xg > this.fs &&
    1 > this.Xg &&
    (this.Pr = setTimeout(this.aq.bind(this), h.kc.rz / h.kc.Ft));
};
function Rb(a, c) {
  var d = a.o.jb == h.Dk || (a.o.Ld && a.o.J);
  a.No.setAttribute(
    "transform",
    "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.Fk - 4) + "," + (a.Ni - 2) + ")"
  );
}
b.un = function () {
  ya(this, !1);
};
b.click = function () {
  if (this.Ig.length && !this.ff.isVisible()) {
    for (var a = [], c = 0, d; (d = this.Ig[c]); c++) a[c] = h.N.Ee(d);
    this.ff.show(a);
    Sb(this, !0);
  }
};
function Sb(a, c) {
  a = new h.h.Lf(c, a.o.id);
  h.h.Ea(a);
}
b.UB = function (a) {
  !this.ff.isVisible() && this.Ig.length && a.stopPropagation();
};
b.aE = function () {
  this.Ig.length && ya(this, !0);
};
b.ZD = function () {
  ya(this, !1);
};
b.lE = function (a) {
  if (
    !(0 >= this.o.options.no) &&
    a.type == h.h.Jt &&
    a.Oj.tagName &&
    "shadow" != a.Oj.tagName.toLowerCase()
  ) {
    for (var c = (a = a.Oj.cloneNode(!0)); c; ) {
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
    a = h.N.Hd(a);
    if (-1 == this.Ig.indexOf(a)) {
      for (this.Ig.unshift(a); this.Ig.length > this.o.options.no; )
        this.Ig.pop();
      this.fs = a = this.wA;
      this.Xn || Rb(this, a * h.kc.Gu);
    }
  }
};
h.rc = Object.create(null);
h.g.Cq = {};
h.g.Cq.warn = function (a, c, d, e) {
  a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
  e && (a += "\nUse " + e + " instead.");
  console.warn(a);
};
h.ga = function (a, c) {
  this.L = a;
  this.type = c;
};
h.ga.Am = 0;
h.ga.cv = 1;
h.ga.fv = 2;
h.ga.ev = 3;
h.ga.$u = 4;
h.ga.av = 5;
h.ga.dv = 6;
h.ga.bv = 7;
b = h.ga.prototype;
b.pa = null;
b.Wf = !1;
b.Gg = null;
b.Ko = null;
b.x = 0;
b.y = 0;
b.te = function (a) {
  var c = this,
    d = c.V(),
    e = a.V();
  a.isConnected() && a.disconnect();
  if (c.isConnected()) {
    var f = c.ua(),
      g = c.xj();
    c.Ko = null;
    if (f.Ja) (g = h.N.Qf(f)), f.I(!1), (f = null);
    else if (c.type == h.lb) {
      if (!f.M) throw Error("Orphan block does not have an output connection.");
      var k = h.ga.Kx(e, f);
      k && (f.M.connect(k), (f = null));
    } else if (c.type == h.Ta) {
      if (!f.W)
        throw Error("Orphan block does not have a previous connection.");
      for (k = e; k.Y; ) {
        var l = u(k);
        if (l && !l.Ja) k = l;
        else {
          z(f.C.Ok, f.W, k.Y, !1) && (k.Y.connect(f.W), (f = null));
          break;
        }
      }
    }
    if (f && (c.disconnect(), h.h.Oa)) {
      var m = h.h.Zb();
      setTimeout(function () {
        f.C &&
          !f.getParent() &&
          (h.h.ta(m), f.M ? f.M.vo(c) : f.W && f.W.vo(c), h.h.ta(!1));
      }, h.ap);
    }
    c.Ko = g;
  }
  var n;
  h.h.isEnabled() && (n = new h.h.ek(e));
  h.ga.lC(c, a);
  e.Jo(d);
  n && (n.li(), h.h.Ea(n));
};
b.I = function () {
  if (this.isConnected()) {
    this.Wl(null);
    var a = this.ua();
    a && w(a);
  }
  this.Wf = !0;
};
b.V = function () {
  return this.L;
};
function A(a) {
  return a.type == h.lb || a.type == h.Ta;
}
b.isConnected = function () {
  return !!this.pa;
};
b.on = function (a) {
  h.g.Cq.warn(
    "Connection.prototype.canConnectWithReason",
    "July 2020",
    "July 2021",
    "the workspace's connection checker"
  );
  return qa(this).on(this, a, !1);
};
function qa(a) {
  return a.L.C.Ok;
}
b.vo = function () {};
b.connect = function (a) {
  if (this.pa != a && z(qa(this), this, a, !1)) {
    var c = h.h.Zb();
    c || h.h.ta(!0);
    A(this) ? this.te(a) : a.te(this);
    c || h.h.ta(!1);
  }
};
h.ga.lC = function (a, c) {
  if (!a || !c) throw Error("Cannot connect null connections.");
  a.pa = c;
  c.pa = a;
};
h.ga.xF = function (a, c) {
  var d = null;
  c = c.M;
  for (var e = 0; e < a.S.length; e++) {
    var f = a.S[e].connection,
      g = qa(c);
    if (f && f.type == h.lb && z(g, c, f, !1)) {
      if (d) return null;
      d = f;
    }
  }
  return d;
};
h.ga.Kx = function (a, c) {
  for (var d; (d = h.ga.xF(a, c)); ) if (((a = d.ua()), !a || a.Ja)) return d;
  return null;
};
b = h.ga.prototype;
b.disconnect = function () {
  var a = this.pa;
  if (!a) throw Error("Source connection not connected.");
  if (a.pa != this)
    throw Error("Target connection not connected to source connection.");
  if (A(this)) {
    var c = this.L;
    var d = a.V();
    a = this;
  } else (c = a.V()), (d = this.L);
  var e = h.h.Zb();
  e || h.h.ta(!0);
  this.Jq(c, d);
  d.Ja || a.Rl();
  e || h.h.ta(!1);
};
b.Jq = function (a, c) {
  var d;
  h.h.isEnabled() && (d = new h.h.ek(c));
  this.pa = this.pa.pa = null;
  c.Jo(null);
  d && (d.li(), h.h.Ea(d));
};
b.Rl = function () {
  var a = this.V(),
    c = this.xj();
  if (a.C && c)
    if (((a = h.N.sj(c, a.C)), a.M)) this.connect(a.M);
    else if (a.W) this.connect(a.W);
    else throw Error("Child block does not have output or previous statement.");
};
b.ua = function () {
  return this.isConnected() ? this.pa.V() : null;
};
b.ly = function () {
  !this.isConnected() ||
    (this.pa && z(qa(this), this, this.pa, !1)) ||
    w(A(this) ? this.ua() : this.L);
};
b.Tj = function (a) {
  a
    ? (Array.isArray(a) || (a = [a]), (this.Gg = a), this.ly())
    : (this.Gg = null);
};
b.Wl = function (a) {
  this.Ko = a;
  a = this.ua();
  a ? a.Ja && (a.I(!1), this.Rl()) : this.Rl();
};
b.xj = function () {
  return this.Ko;
};
b.Xx = function () {
  return [];
};
b.hf = function () {
  for (var a = null, c = this.L, d = c.S, e = 0; e < c.S.length; e++)
    if (d[e].connection === this) {
      a = d[e];
      break;
    }
  return a;
};
b.toString = function () {
  var a = this.L;
  if (a)
    if (a.M == this) var c = "Output Connection of ";
    else if (a.W == this) c = "Previous Connection of ";
    else if (a.Y == this) c = "Next Connection of ";
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
h.za = {};
h.za.dk = {};
h.za.register = function (a, c) {
  if ("string" != typeof a || "" == a.trim())
    throw Error('Error: Invalid extension name "' + a + '"');
  if (h.za.dk[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if ("function" != typeof c)
    throw Error('Error: Extension "' + a + '" must be a function');
  h.za.dk[a] = c;
};
h.za.QJ = function (a, c) {
  if (!c || "object" != typeof c)
    throw Error('Error: Mixin "' + a + '" must be a object');
  h.za.register(a, function () {
    this.$g(c);
  });
};
h.za.RJ = function (a, c, d, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  h.za.aw(f, c.Xf, "domToMutation");
  h.za.aw(f, c.Rd, "mutationToDom");
  var g = h.za.cw(c, f);
  if (d && "function" != typeof d)
    throw Error('Extension "' + a + '" is not a function');
  h.za.register(a, function () {
    if (g) {
      if (!h.bB) throw Error(f + "Missing require for Blockly.Mutator");
      this.My(new h.bB(e || []));
    }
    this.$g(c);
    d && d.apply(this);
  });
};
h.za.unregister = function (a) {
  h.za.dk[a]
    ? delete h.za.dk[a]
    : console.warn(
        'No extension mapping for name "' + a + '" found to unregister'
      );
};
h.za.apply = function (a, c, d) {
  var e = h.za.dk[a];
  if ("function" != typeof e)
    throw Error('Error: Extension "' + a + '" not found.');
  if (d) h.za.cC(a, c);
  else var f = h.za.nr(c);
  e.apply(c);
  if (d) h.za.aC('Error after applying mutator "' + a + '": ', c);
  else if (!h.za.fE(f, c))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
h.za.aw = function (a, c, d) {
  if (!c) throw Error(a + 'missing required property "' + d + '"');
  if ("function" != typeof c)
    throw Error(a + '" required property "' + d + '" must be a function');
};
h.za.cC = function (a, c) {
  if (h.za.nr(c).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        c.id
    );
};
h.za.cw = function (a, c) {
  var d = void 0 !== a.vq,
    e = void 0 !== a.Bq;
  if (d && e) {
    if ("function" != typeof a.vq)
      throw Error(c + "compose must be a function.");
    if ("function" != typeof a.Bq)
      throw Error(c + "decompose must be a function.");
    return !0;
  }
  if (d || e)
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
h.za.aC = function (a, c) {
  if ("function" != typeof c.Xf)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof c.Rd)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  h.za.cw(c, a);
};
h.za.nr = function (a) {
  var c = [];
  void 0 !== a.Xf && c.push(a.Xf);
  void 0 !== a.Rd && c.push(a.Rd);
  void 0 !== a.vq && c.push(a.vq);
  void 0 !== a.Bq && c.push(a.Bq);
  return c;
};
h.za.fE = function (a, c) {
  c = h.za.nr(c);
  if (c.length != a.length) return !1;
  for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
  return !0;
};
h.za.YI = function (a, c) {
  var d = [];
  "object" == typeof document &&
    h.g.Hy(function () {
      for (var e in c) h.g.bw(c[e]);
    });
  return function () {
    this.type &&
      -1 == d.indexOf(this.type) &&
      (h.za.bC(this, a, c), d.push(this.type));
    this.De(
      function () {
        var e = String(bb(this, a)),
          f = c[e];
        null == f
          ? -1 == d.indexOf(this.type) &&
            ((e = "No tooltip mapping for value " + e + " of field " + a),
            null != this.type && (e += " of block type " + this.type),
            console.warn(e + "."))
          : (f = h.g.dd(f));
        return f;
      }.bind(this)
    );
  };
};
h.za.bC = function (a, c, d) {
  var e = ba(a, c);
  if ("function" != typeof e.Nj) {
    e = e.getOptions();
    for (var f = 0; f < e.length; ++f) {
      var g = e[f][1];
      null == d[g] &&
        console.warn(
          "No tooltip mapping for value " +
            g +
            " of field " +
            c +
            " of block type " +
            a.type
        );
    }
  }
};
h.za.ZI = function (a, c) {
  "object" == typeof document &&
    h.g.Hy(function () {
      h.g.bw(a);
    });
  return function () {
    this.De(
      function () {
        var d = ba(this, c);
        return h.g.dd(a).replace("%1", d ? Jb(d) : "");
      }.bind(this)
    );
  };
};
h.za.MC = function () {
  this.KF = this.Yd;
  this.De(
    function () {
      var a = this.getParent();
      return (a && ua(a) && a.Yd) || this.KF;
    }.bind(this)
  );
};
h.za.register("parent_tooltip_when_inline", h.za.MC);
h.Tc = function (a, c, d) {
  this.qn = null;
  h.Tc.u.constructor.call(this, a, null, d);
  d || (this.qn = c || null);
};
h.g.object.U(h.Tc, h.wd);
h.Tc.prototype.kp = "";
h.Tc.ba = function (a) {
  var c = h.g.dd(a.text);
  return new h.Tc(c, void 0, a);
};
h.Tc.prototype.hk = !1;
h.Tc.prototype.Mk = function (a) {
  h.Tc.u.Mk.call(this, a);
  this.qn = a["class"];
};
h.Tc.prototype.Sn = function () {
  Fb(this);
  this.qn && h.g.j.Rb(this.Cc, this.qn);
};
h.Tc.prototype.Gn = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
h.Kh.register("field_label", h.Tc);
h.Bu = function (a, c, d, e) {
  if (a != h.Cf && !c)
    throw Error("Value inputs and statement inputs must have non-empty name.");
  this.type = a;
  this.name = c;
  this.L = d;
  this.connection = e;
  this.hb = [];
};
b = h.Bu.prototype;
b.align = h.Wo;
b.oh = !0;
b.V = function () {
  return this.L;
};
function K(a, c, d) {
  Tb(a, a.hb.length, c, d);
  return a;
}
function Tb(a, c, d, e) {
  if (0 > c || c > a.hb.length) throw Error("index " + c + " out of bounds.");
  if (!(d || ("" == d && e))) return c;
  "string" == typeof d && (d = new h.Tc(d));
  if (d.L) throw Error("Field already bound to a block.");
  d.L = a.L;
  a.L.sa && (d.Fa(), d.lc());
  d.name = e;
  d.$b(a.isVisible());
  e = d;
  e.Is && (c = Tb(a, c, e.Is));
  a.hb.splice(c, 0, d);
  ++c;
  e.mt && (c = Tb(a, c, e.mt));
  a.L.sa && ((a.L = a.L), a.L.La(), a.L.Xc());
  return c;
}
b.isVisible = function () {
  return this.oh;
};
b.$b = function (a) {
  if (this.oh != a) {
    this.oh = a;
    for (var c = 0, d; (d = this.hb[c]); c++) d.$b(a);
    if (this.connection) {
      this.connection = this.connection;
      if (a) Ub(this.connection);
      else if (((c = this.connection), Vb(c, !1), c.pa))
        for (c = q(c.ua(), !1), d = 0; d < c.length; d++) {
          for (var e = c[d], f = e.we(!0), g = 0; g < f.length; g++)
            Vb(f[g], !1);
          e = va(e);
          for (g = 0; g < e.length; g++) e[g].$b(!1);
        }
      if ((c = this.connection.ua()))
        c.qa().style.display = a ? "block" : "none";
    }
  }
};
b.Dl = function () {
  for (var a = 0, c; (c = this.hb[a]); a++) c.Dl();
};
b.Tj = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Tj(a);
};
b.Wl = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.Wl(a);
};
b.xj = function () {
  if (!this.connection) throw Error("This input does not have a connection.");
  return this.connection.xj();
};
b.Fa = function () {
  if (this.L.C.sa) for (var a = 0; a < this.hb.length; a++) this.hb[a].Fa();
};
b.I = function () {
  for (var a = 0, c; (c = this.hb[a]); a++) c.I();
  this.connection && this.connection.I();
  this.L = null;
};
h.Sc = function (a, c, d) {
  if (h.Generator && "undefined" != typeof h.Generator.prototype[c])
    throw Error(
      'Block prototypeName "' +
        c +
        '" conflicts with Blockly.Generator members.'
    );
  this.id = d && !a.Mc(d) ? d : h.g.Zf();
  a.hq[this.id] = this;
  this.W = this.Y = this.M = null;
  this.S = [];
  this.dg = void 0;
  this.disabled = !1;
  this.Yd = "";
  this.contextMenu = !0;
  this.qf = null;
  this.Sf = [];
  this.Jw = this.Vx = this.ww = !0;
  this.Dh = this.Ja = !1;
  this.se = { text: null, ty: !1, size: new h.g.le(160, 80) };
  this.oz = new h.g.T(0, 0);
  this.C = a;
  this.Qc = a.fg;
  this.J = a.J;
  this.Ij = !1;
  this.jf = void 0;
  this.sa = null;
  if (c) {
    this.type = c;
    d = h.rc[c];
    if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
    h.g.object.$g(this, d);
  }
  a.jn(this);
  a.rg[this.type] || (a.rg[this.type] = []);
  a.rg[this.type].push(this);
  (a = h.h.Zb()) || h.h.ta(!0);
  c = h.h.Oa;
  try {
    "function" == typeof this.Fa && ((h.h.Oa = !1), this.Fa(), (h.h.Oa = c)),
      h.h.isEnabled() && h.h.Ea(new h.h.ym(this));
  } finally {
    a || h.h.ta(!1), (h.h.Oa = c);
  }
  this.GD = this.dg;
  if ("function" == typeof this.onchange) {
    if ((a = this.onchange) && "function" != typeof a)
      throw Error("onchange must be a function.");
    this.Hl && ib(this.C, this.Hl);
    if ((this.onchange = a)) (this.Hl = a.bind(this)), F(this.C, this.Hl);
  }
};
h.Sc.gk = "_TEMP_COLLAPSED_INPUT";
h.Sc.gp = "_TEMP_COLLAPSED_FIELD";
b = h.Sc.prototype;
b.data = null;
b.Wf = !1;
b.Ed = "#000000";
b.em = null;
b.I = function (a) {
  if (this.C) {
    this.Hl && ib(this.C, this.Hl);
    w(this, a);
    h.h.isEnabled() && h.h.Ea(new h.h.Cz(this));
    h.h.disable();
    try {
      if (this.C) {
        this.C.Ho(this);
        var c = this.C;
        c.rg[this.type].splice(c.rg[this.type].indexOf(this), 1);
        c.rg[this.type].length || delete c.rg[this.type];
        delete this.C.hq[this.id];
        this.C = null;
      }
      h.selected == this && (h.selected = null);
      for (var d = this.Sf.length - 1; 0 <= d; d--) this.Sf[d].I(!1);
      d = 0;
      for (var e; (e = this.S[d]); d++) e.I();
      this.S.length = 0;
      var f = this.we(!0);
      d = 0;
      for (var g; (g = f[d]); d++) g.I();
    } finally {
      h.h.enable(), (this.Wf = !0);
    }
  }
};
function w(a, c) {
  if (a.M) {
    var d = null;
    a.M.isConnected() && ((d = a.M.pa), a.M.disconnect());
    if (d && c) {
      a: {
        c = null;
        for (var e = 0; e < a.S.length; e++) {
          var f = a.S[e].connection;
          if (f && f.type == h.lb && f.pa) {
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
        !c.ua().Ja &&
        ((c = c.pa),
        c.disconnect(),
        z(a.C.Ok, c, d, !1) ? d.connect(c) : c.vo(d));
    }
  } else
    a.W &&
      ((d = null),
      a.W.isConnected() && ((d = a.W.pa), a.W.disconnect()),
      (e = u(a)),
      c &&
        e &&
        !e.Ja &&
        ((c = a.Y.pa),
        c.disconnect(),
        d && z(a.C.Ok, d, c, !1) && d.connect(c)));
}
b.we = function () {
  var a = [];
  this.M && a.push(this.M);
  this.W && a.push(this.W);
  this.Y && a.push(this.Y);
  for (var c = 0, d; (d = this.S[c]); c++) d.connection && a.push(d.connection);
  return a;
};
b.co = function () {
  for (var a = this.Y; a; ) {
    var c = a.ua();
    if (!c) return a;
    a = c.Y;
  }
  return null;
};
b.Xc = function () {};
b.getParent = function () {
  return this.qf;
};
function da(a, c) {
  for (var d = 0, e; (e = a.S[d]); d++)
    if (e.connection && e.connection.ua() == c) return e;
  return null;
}
function Wb(a) {
  do {
    var c = a;
    a = a.getParent();
    if (!a) return null;
  } while (u(a) == c);
  return a;
}
function u(a) {
  return a.Y && a.Y.ua();
}
b.Oc = function () {
  var a = this;
  do {
    var c = a;
    a = c.qf;
  } while (a);
  return c;
};
function C(a, c) {
  if (!c) return a.Sf;
  c = [];
  for (var d = 0, e; (e = a.S[d]); d++)
    e.connection && (e = e.connection.ua()) && c.push(e);
  (a = u(a)) && c.push(a);
  return c;
}
b.Jo = function (a) {
  if (a != this.qf) {
    if (this.qf) {
      h.g.Jk(this.qf.Sf, this);
      if (this.W && this.W.isConnected())
        throw Error("Still connected to previous block.");
      if (this.M && this.M.isConnected())
        throw Error("Still connected to parent block.");
      this.qf = null;
    } else this.C.Ho(this);
    (this.qf = a) ? a.Sf.push(this) : this.C.jn(this);
  }
};
function q(a, c) {
  var d = [a];
  a = C(a, c);
  for (var e, f = 0; (e = a[f]); f++) d.push.apply(d, q(e, c));
  return d;
}
b.ad = function () {
  return this.ww && !this.Ja && !(this.C && this.C.options.readOnly);
};
b.zc = function () {
  return this.Vx && !this.Ja && !(this.C && this.C.options.readOnly);
};
b.at = function (a) {
  this.Vx = a;
};
b.dt = function (a) {
  this.Ja = a;
};
b.ye = function () {
  return this.Ij;
};
b.Ly = function (a) {
  this.Ij = a;
};
b.Md = function () {
  return this.Jw && !(this.C && this.C.options.readOnly);
};
b.$s = function (a) {
  this.Jw = a;
  a = 0;
  for (var c; (c = this.S[a]); a++)
    for (var d = 0, e; (e = c.hb[d]); d++) Cb(e);
};
b.lr = function (a, c) {
  var d = this.we(!0);
  a = a.we(!0);
  if (d.length != a.length)
    throw Error("Connection lists did not match in length.");
  for (var e = 0; e < a.length; e++) if (a[e] == c) return d[e];
  return null;
};
b.De = function (a) {
  this.Yd = a;
};
b.ir = function () {
  return this.Ed;
};
b.Be = function (a) {
  this.Ed = h.g.Co(a).ql;
};
b.ui = function (a) {
  this.em = a;
};
function ba(a, c) {
  for (var d = 0, e; (e = a.S[d]); d++)
    for (var f = 0, g; (g = e.hb[f]); f++) if (g.name == c) return g;
  return null;
}
function $a(a) {
  for (var c = 0, d; (d = a.S[c]); c++) for (var e = 0; d.hb[e]; e++);
  return [];
}
function bb(a, c) {
  return (a = ba(a, c)) ? a.getValue() : null;
}
b.si = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.W) {
      if (this.M)
        throw Error(
          "Remove output connection prior to adding previous connection."
        );
      this.W = this.Cl(h.ie);
    }
    this.W.Tj(c);
  } else if (this.W) {
    if (this.W.isConnected())
      throw Error(
        "Must disconnect previous statement before removing connection."
      );
    this.W.I();
    this.W = null;
  }
};
b.Vj = function (a, c) {
  if (a)
    void 0 === c && (c = null),
      this.Y || (this.Y = this.Cl(h.Ta)),
      this.Y.Tj(c);
  else if (this.Y) {
    if (this.Y.isConnected())
      throw Error("Must disconnect next statement before removing connection.");
    this.Y.I();
    this.Y = null;
  }
};
b.bt = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.M) {
      if (this.W)
        throw Error(
          "Remove previous connection prior to adding output connection."
        );
      this.M = this.Cl(h.ge);
    }
    this.M.Tj(c);
  } else if (this.M) {
    if (this.M.isConnected())
      throw Error("Must disconnect output value before removing connection.");
    this.M.I();
    this.M = null;
  }
};
b.ri = function (a) {
  this.dg != a &&
    (h.h.Ea(new h.h.Gi(this, "inline", null, this.dg, a)), (this.dg = a));
};
function ua(a) {
  if (void 0 != a.dg) return a.dg;
  for (var c = 1; c < a.S.length; c++)
    if (a.S[c - 1].type == h.Cf && a.S[c].type == h.Cf) return !1;
  for (c = 1; c < a.S.length; c++)
    if (a.S[c - 1].type == h.lb && a.S[c].type == h.Cf) return !0;
  return !1;
}
b.isEnabled = function () {
  return !this.disabled;
};
b.sf = function (a) {
  this.isEnabled() != a &&
    (h.h.Ea(new h.h.Gi(this, "disabled", null, this.disabled, !a)),
    (this.disabled = !a));
};
function Xb(a) {
  for (a = Wb(a); a; ) {
    if (a.disabled) return !0;
    a = Wb(a);
  }
  return !1;
}
b.isCollapsed = function () {
  return this.Dh;
};
b.oi = function (a) {
  this.Dh != a &&
    (h.h.Ea(new h.h.Gi(this, "collapsed", null, this.Dh, a)), (this.Dh = a));
};
b.toString = function (a, c) {
  function d(n) {
    var p = n.Gg;
    !p && n.pa && (p = n.pa.Gg);
    return !!p && (-1 != p.indexOf("Boolean") || -1 != p.indexOf("Number"));
  }
  function e() {
    k && k.Xa() == l.Xa() && k.ra == l.ra && (k = null);
  }
  var f = [];
  c = c || "?";
  var g = h.B.Ag;
  h.B.Ag = !0;
  for (var k = h.B.af(this), l = k; k; ) {
    switch (k.Xa()) {
      case h.B.types.xd:
        var m = k.ra;
        k.lf() ? d(m) && f.push("(") : f.push(c);
        break;
      case h.B.types.Wb:
        (m = k.ra), m.name != h.Sc.gp && f.push(Jb(m));
    }
    m = k;
    k = m.lf() || m.next();
    if (!k) {
      k = m.nf();
      for (e(); k && !k.next(); )
        (k = k.nf()),
          e(),
          k && k.Xa() == h.B.types.xd && d(k.ra) && f.push(")");
      k && (k = k.next());
    }
  }
  h.B.Ag = g;
  c = 2;
  for (g = f.length; c < g; c++)
    "(" == f[c - 2] &&
      ")" == f[c] &&
      ((f[c - 2] = f[c - 1]), f.splice(c - 1, 2), (g -= 2));
  f =
    f
      .join(" ")
      .replace(/(\() | (\))/gim, "$1$2")
      .trim() || "???";
  a && f.length > a && (f = f.substring(0, a - 3) + "...");
  return f;
};
function Yb(a, c) {
  return a.Pf(h.Cf, c || "");
}
function Zb(a, c) {
  var d = c.type ? 'Block "' + c.type + '": ' : "";
  if (c.output && c.previousStatement)
    throw Error(d + "Must not have both an output and a previousStatement.");
  c.style && c.style.jf && ((a.jf = c.style.jf), (c.style = null));
  if (c.style && c.colour)
    throw Error(d + "Must not have both a colour and a style.");
  if (c.style) {
    var e = c.style;
    try {
      a.ui(e);
    } catch (ja) {
      console.warn(d + "Style does not exist: ", e);
    }
  } else if ("colour" in c)
    if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
    else {
      e = c.colour;
      try {
        a.Be(e);
      } catch (ja) {
        console.warn(d + "Illegal colour value: ", e);
      }
    }
  for (e = 0; void 0 !== c["message" + e]; ) {
    for (
      var f = a,
        g = c["args" + e] || [],
        k = c["lastDummyAlign" + e],
        l = d,
        m = h.g.JF(c["message" + e]),
        n = [],
        p = 0,
        r = [],
        t = 0;
      t < m.length;
      t++
    ) {
      var D = m[t];
      if ("number" == typeof D) {
        if (0 >= D || D > g.length)
          throw Error(
            'Block "' + f.type + '": Message index %' + D + " out of range."
          );
        if (n[D])
          throw Error(
            'Block "' + f.type + '": Message index %' + D + " duplicated."
          );
        n[D] = !0;
        p++;
        r.push(g[D - 1]);
      } else (D = D.trim()) && r.push(D);
    }
    if (p != g.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          g.length +
          " arg(s)."
      );
    r.length &&
      ("string" == typeof r[r.length - 1] ||
        h.g.Sa.startsWith(r[r.length - 1].type, "field_")) &&
      ((t = { type: "input_dummy" }), k && (t.align = k), r.push(t));
    k = { LEFT: h.Wo, RIGHT: h.Dt, CENTRE: h.Vo, CENTER: h.Vo };
    g = [];
    for (t = 0; t < r.length; t++)
      if (((n = r[t]), "string" == typeof n)) g.push([n, void 0]);
      else {
        m = p = null;
        do
          if (((D = !1), "string" == typeof n)) p = new h.Tc(n);
          else
            switch (n.type) {
              case "input_value":
                m = f.Pf(h.lb, n.name);
                break;
              case "input_statement":
                m = f.Pf(h.Ta, n.name);
                break;
              case "input_dummy":
                m = Yb(f, n.name);
                break;
              default:
                (p = h.Kh.ba(n)), !p && n.alt && ((n = n.alt), (D = !0));
            }
        while (D);
        if (p) g.push([p, n.name]);
        else if (m) {
          n.check && m.Tj(n.check);
          n.align &&
            ((p = k[n.align.toUpperCase()]),
            void 0 === p
              ? console.warn(l + "Illegal align value: ", n.align)
              : ((n = m), (n.align = p), n.L.sa && ((n.L = n.L), n.L.La())));
          for (n = 0; n < g.length; n++) K(m, g[n][0], g[n][1]);
          g.length = 0;
        }
      }
    e++;
  }
  void 0 !== c.inputsInline && a.ri(c.inputsInline);
  void 0 !== c.output && a.bt(!0, c.output);
  void 0 !== c.previousStatement && a.si(!0, c.previousStatement);
  void 0 !== c.nextStatement && a.Vj(!0, c.nextStatement);
  void 0 !== c.tooltip && ((e = c.tooltip), (e = h.g.dd(e)), a.De(e));
  void 0 !== c.enableContextMenu &&
    ((e = c.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== c.helpUrl && ((e = c.helpUrl), (e = h.g.dd(e)), (a.Bj = e));
  "string" == typeof c.extensions &&
    (console.warn(
      d +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        c.type +
        "' block."
    ),
    (c.extensions = [c.extensions]));
  void 0 !== c.mutator && h.za.apply(c.mutator, a, !0);
  if (Array.isArray(c.extensions))
    for (c = c.extensions, d = 0; d < c.length; ++d) h.za.apply(c[d], a, !1);
}
b.$g = function (a, c) {
  if (void 0 !== c && "boolean" != typeof c)
    throw Error("opt_disableCheck must be a boolean if provided");
  if (!c) {
    c = [];
    for (var d in a) void 0 !== this[d] && c.push(d);
    if (c.length)
      throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  }
  h.g.object.$g(this, a);
};
b.Pf = function (a, c) {
  var d = null;
  if (a == h.lb || a == h.Ta) d = this.Cl(a);
  a = new h.Bu(a, c, this, d);
  this.S.push(a);
  return a;
};
b.Ps = function (a, c) {
  for (var d = 0, e; (e = this.S[d]); d++)
    if (e.name == a) return e.I(), this.S.splice(d, 1), !0;
  if (c) return !1;
  throw Error("Input not found: " + a);
};
function ea(a, c) {
  for (var d = 0, e; (e = a.S[d]); d++) if (e.name == c) return e;
  return null;
}
function $b(a, c) {
  return (a = ea(a, c)) && a.connection && a.connection.ua();
}
b.Uj = function (a) {
  this.se.text != a &&
    (h.h.Ea(new h.h.Gi(this, "comment", null, this.se.text, a)),
    (this.se.text = a));
};
b.My = function () {};
b.Wa = function () {
  return this.oz;
};
b.moveBy = function (a, c) {
  if (this.qf) throw Error("Block has parent.");
  var d = new h.h.ek(this);
  this.oz.translate(a, c);
  d.li();
  h.h.Ea(d);
};
b.Cl = function (a) {
  return new h.ga(this, a);
};
h.i = {};
h.i.pm = !1;
h.i.register = function (a, c) {
  h.A.register(h.A.Z.RENDERER, a, c);
};
h.i.unregister = function (a) {
  h.A.unregister(h.A.Z.RENDERER, a);
};
h.i.gK = function () {
  h.i.pm = !0;
};
h.i.hK = function () {
  h.i.pm = !1;
};
h.i.Fa = function (a, c, d) {
  a = new (h.A.hr(h.A.Z.RENDERER, a))(a);
  a.Fa(c, d);
  return a;
};
h.xk = function () {
  this.Yc = this.$a = this.xb = null;
  this.type = "marker";
};
function H(a, c) {
  var d = a.$a;
  a.$a = c;
  a.Yc && a.Yc.draw(d, a.$a);
}
h.xk.prototype.draw = function () {
  this.Yc && this.Yc.draw(this.$a, this.$a);
};
h.xk.prototype.Ia = function () {
  this.Yc && this.Yc.Ia();
};
h.xk.prototype.I = function () {
  this.Yc && this.Yc.I();
};
h.Ji = function () {
  h.Ji.u.constructor.call(this);
  this.type = "cursor";
};
h.g.object.U(h.Ji, h.xk);
b = h.Ji.prototype;
b.next = function () {
  var a = this.$a;
  if (!a) return null;
  for (
    a = a.next();
    a && a.next() && (a.Xa() == h.B.types.fd || a.Xa() == h.B.types.Fb);

  )
    a = a.next();
  a && H(this, a);
  return a;
};
b.lf = function () {
  var a = this.$a;
  if (!a) return null;
  if (a.Xa() == h.B.types.hd || a.Xa() == h.B.types.zh) a = a.next();
  (a = a.lf()) && H(this, a);
  return a;
};
b.Vd = function () {
  var a = this.$a;
  if (!a) return null;
  for (
    a = a.Vd();
    a && a.Vd() && (a.Xa() == h.B.types.fd || a.Xa() == h.B.types.Fb);

  )
    a = a.Vd();
  a && H(this, a);
  return a;
};
b.nf = function () {
  var a = this.$a;
  if (!a) return null;
  (a = a.nf()) && a.Xa() == h.B.types.Fb && (a = a.Vd() || a);
  a && H(this, a);
  return a;
};
b.Nb = function (a) {
  if (this.$a && this.$a.Xa() === h.B.types.Wb && this.$a.ra.Nb(a)) return !0;
  switch (a.name) {
    case h.navigation.Gb.hd:
      return this.Vd(), !0;
    case h.navigation.Gb.Vu:
      return this.nf(), !0;
    case h.navigation.Gb.fd:
      return this.next(), !0;
    case h.navigation.Gb.tu:
      return this.lf(), !0;
    default:
      return !1;
  }
};
h.Km = function () {
  h.Km.u.constructor.call(this);
};
h.g.object.U(h.Km, h.Ji);
b = h.Km.prototype;
b.Nb = function (a) {
  switch (a.name) {
    case h.navigation.Gb.hd:
      return this.Vd(), !0;
    case h.navigation.Gb.fd:
      return this.next(), !0;
    default:
      return !1;
  }
};
b.next = function () {
  var a = this.$a;
  if (!a) return null;
  (a = a.next()) && H(this, a);
  return a;
};
b.lf = function () {
  return null;
};
b.Vd = function () {
  var a = this.$a;
  if (!a) return null;
  (a = a.Vd()) && H(this, a);
  return a;
};
b.nf = function () {
  return null;
};
h.i.XG = function () {};
h.Ua = {};
h.Ua.An = null;
h.Ua.ec = null;
h.Ua.show = function (a, c, d) {
  h.$.show(h.Ua, d, h.Ua.I);
  if (c.length) {
    var e = h.Ua.xE(c, d);
    h.Ua.ec = e;
    h.Ua.zE(e, a, d);
    setTimeout(function () {
      e.focus();
    }, 1);
    h.Ua.An = null;
  } else h.Ua.Ia();
};
h.Ua.xE = function (a, c) {
  var d = new h.Ap();
  d.kh(h.g.Hb.Vm.VA);
  for (var e = 0, f; (f = a[e]); e++) {
    var g = new h.Bp(f.text);
    g.Ys = c;
    g.kh(h.g.Hb.Vm.WA);
    d.Pd.push(g);
    g.sf(f.enabled);
    f.enabled &&
      Pb(
        g,
        function () {
          h.Ua.Ia();
          this.xa(this.scope);
        },
        f
      );
  }
  return d;
};
h.Ua.zE = function (a, c, d) {
  var e = h.g.lD();
  c = new h.g.Rect(
    c.clientY + e.top,
    c.clientY + e.top,
    c.clientX + e.left,
    c.clientX + e.left
  );
  h.Ua.sC(a);
  var f = a.ag();
  d &&
    ((c.left += f.width),
    (c.right += f.width),
    (e.left += f.width),
    (e.right += f.width));
  h.$.yE(e, c, f, d);
  a.focus();
};
h.Ua.sC = function (a) {
  a.La(h.$.eb);
  var c = a.gb;
  h.g.j.Rb(c, "blocklyContextMenu");
  h.Ca(c, "contextmenu", null, h.g.jE);
  a.focus();
};
h.Ua.Ia = function () {
  h.$.rl(h.Ua);
  h.Ua.An = null;
};
h.Ua.I = function () {
  h.Ua.ec && (h.Ua.ec.I(), (h.Ua.ec = null));
};
h.Ua.aJ = function (a, c) {
  return function () {
    h.h.disable();
    try {
      var d = h.N.sj(c, a.C),
        e = a.Wa();
      e.x = a.J ? e.x - h.tc : e.x + h.tc;
      e.y += 2 * h.tc;
      d.moveBy(e.x, e.y);
    } finally {
      h.h.enable();
    }
    h.h.isEnabled() && !d.Ja && h.h.Ea(new h.h.ym(d));
    d.select();
  };
};
h.Ua.eJ = function (a) {
  return {
    text: h.P.REMOVE_COMMENT,
    enabled: !0,
    xa: function () {
      h.h.ta(!0);
      a.I(!0, !0);
      h.h.ta(!1);
    },
  };
};
h.Ua.fJ = function (a) {
  return {
    text: h.P.DUPLICATE_COMMENT,
    enabled: !0,
    xa: function () {
      h.duplicate(a);
    },
  };
};
h.Ua.nK = function (a, c) {
  if (!h.aj) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
  var d = { enabled: !h.g.userAgent.ee };
  d.text = h.P.ADD_COMMENT;
  d.xa = function () {
    var e = new h.aj(a, h.P.WORKSPACE_COMMENT_DEFAULT_TEXT, h.aj.Rz, h.aj.Rz),
      f = aa(a).getBoundingClientRect();
    f = new h.g.T(c.clientX - f.left, c.clientY - f.top);
    var g = h.g.kl(a.Ab);
    f = h.g.T.Yk(f, g);
    f.scale(1 / a.scale);
    e.moveBy(f.x, f.y);
    a.sa && (e.Cj(), e.La(), e.select());
  };
  return d;
};
h.ka = {};
h.ka.Os = function () {
  h.Ba.A.register({
    Lc: function () {
      return h.P.UNDO;
    },
    Ka: function (a) {
      return 0 < a.C.zi.length ? "enabled" : "disabled";
    },
    xa: function (a) {
      hb(a.C, !1);
    },
    ud: h.Ba.Gc.cc,
    id: "undoWorkspace",
    weight: 1,
  });
};
h.ka.Ns = function () {
  h.Ba.A.register({
    Lc: function () {
      return h.P.REDO;
    },
    Ka: function (a) {
      return 0 < a.C.Pl.length ? "enabled" : "disabled";
    },
    xa: function (a) {
      hb(a.C, !0);
    },
    ud: h.Ba.Gc.cc,
    id: "redoWorkspace",
    weight: 2,
  });
};
h.ka.CE = function () {
  h.Ba.A.register({
    Lc: function () {
      return h.P.CLEAN_UP;
    },
    Ka: function (a) {
      return a.C.zc()
        ? 1 < a.C.qb(!1).length
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    xa: function (a) {
      a = a.C;
      a.hc(!1);
      h.h.ta(!0);
      for (var c = a.qb(!0), d = 0, e = 0, f; (f = c[e]); e++)
        if (f.zc()) {
          var g = f.Wa();
          f.moveBy(-g.x, d - g.y);
          ac(f);
          d = f.Wa().y + y(f).height + a.rb.aa().vk;
        }
      h.h.ta(!1);
      a.hc(!0);
    },
    ud: h.Ba.Gc.cc,
    id: "cleanWorkspace",
    weight: 3,
  });
};
h.ka.Xy = function (a, c) {
  for (var d = 0, e = 0; e < c.length; e++)
    for (var f = c[e]; f; )
      setTimeout(f.oi.bind(f, a), d), (f = u(f)), (d += 10);
};
h.ka.DE = function () {
  h.Ba.A.register({
    Lc: function () {
      return h.P.COLLAPSE_ALL;
    },
    Ka: function (a) {
      if (a.C.options.collapse) {
        a = a.C.qb(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (!d.isCollapsed()) return "enabled";
            d = u(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    xa: function (a) {
      h.ka.Xy(!0, a.C.qb(!0));
    },
    ud: h.Ba.Gc.cc,
    id: "collapseWorkspace",
    weight: 4,
  });
};
h.ka.QE = function () {
  h.Ba.A.register({
    Lc: function () {
      return h.P.EXPAND_ALL;
    },
    Ka: function (a) {
      if (a.C.options.collapse) {
        a = a.C.qb(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (d.isCollapsed()) return "enabled";
            d = u(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    xa: function (a) {
      h.ka.Xy(!1, a.C.qb(!0));
    },
    ud: h.Ba.Gc.cc,
    id: "expandWorkspace",
    weight: 5,
  });
};
h.ka.Rv = function (a, c) {
  if (a.ad()) Array.prototype.push.apply(c, q(a, !1));
  else {
    a = C(a, !1);
    for (var d = 0; d < a.length; d++) h.ka.Rv(a[d], c);
  }
};
h.ka.jr = function (a) {
  var c = [];
  a = a.qb(!0);
  for (var d = 0; d < a.length; d++) h.ka.Rv(a[d], c);
  return c;
};
h.ka.Cn = function (a, c) {
  h.h.ta(c);
  var d = a.shift();
  d && (d.C ? (d.I(!1, !0), setTimeout(h.ka.Cn, 10, a, c)) : h.ka.Cn(a, c));
  h.h.ta(!1);
};
h.ka.KE = function () {
  h.Ba.A.register({
    Lc: function (a) {
      if (a.C)
        return (
          (a = h.ka.jr(a.C).length),
          1 == a
            ? h.P.DELETE_BLOCK
            : h.P.DELETE_X_BLOCKS.replace("%1", String(a))
        );
    },
    Ka: function (a) {
      if (a.C) return 0 < h.ka.jr(a.C).length ? "enabled" : "disabled";
    },
    xa: function (a) {
      if (a.C) {
        bc(a.C);
        var c = h.ka.jr(a.C),
          d = h.g.Zf();
        2 > c.length
          ? h.ka.Cn(c, d)
          : h.confirm(
              h.P.DELETE_ALL_BLOCKS.replace("%1", c.length),
              function (e) {
                e && h.ka.Cn(c, d);
              }
            );
      }
    },
    ud: h.Ba.Gc.cc,
    id: "workspaceDelete",
    weight: 6,
  });
};
h.ka.gF = function () {
  h.ka.Os();
  h.ka.Ns();
  h.ka.CE();
  h.ka.DE();
  h.ka.QE();
  h.ka.KE();
};
h.ka.NE = function () {
  h.Ba.A.register({
    Lc: function () {
      return h.P.DUPLICATE_BLOCK;
    },
    Ka: function (a) {
      a = a.block;
      return !a.Qc && a.ad() && a.zc()
        ? (gb(a.C) ? fb(a.C, h.g.er(a, !0)) : 1)
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    xa: function (a) {
      a.block && h.duplicate(a.block);
    },
    ud: h.Ba.Gc.Fb,
    id: "blockDuplicate",
    weight: 1,
  });
};
h.ka.FE = function () {
  h.Ba.A.register({
    Lc: function (a) {
      return a.block.re ? h.P.REMOVE_COMMENT : h.P.ADD_COMMENT;
    },
    Ka: function (a) {
      a = a.block;
      return h.g.userAgent.ee ||
        a.Qc ||
        !a.C.options.gC ||
        a.isCollapsed() ||
        !a.Md()
        ? "hidden"
        : "enabled";
    },
    xa: function (a) {
      a = a.block;
      a.re ? a.Uj(null) : a.Uj("");
    },
    ud: h.Ba.Gc.Fb,
    id: "blockComment",
    weight: 2,
  });
};
h.ka.TE = function () {
  h.Ba.A.register({
    Lc: function (a) {
      return ua(a.block) ? h.P.EXTERNAL_INPUTS : h.P.INLINE_INPUTS;
    },
    Ka: function (a) {
      a = a.block;
      if (!a.Qc && a.zc() && !a.isCollapsed())
        for (var c = 1; c < a.S.length; c++)
          if (a.S[c - 1].type != h.Ta && a.S[c].type != h.Ta) return "enabled";
      return "hidden";
    },
    xa: function (a) {
      a.block.ri(!ua(a.block));
    },
    ud: h.Ba.Gc.Fb,
    id: "blockInline",
    weight: 3,
  });
};
h.ka.EE = function () {
  h.Ba.A.register({
    Lc: function (a) {
      return a.block.isCollapsed() ? h.P.EXPAND_BLOCK : h.P.COLLAPSE_BLOCK;
    },
    Ka: function (a) {
      a = a.block;
      return !a.Qc && a.zc() ? "enabled" : "hidden";
    },
    xa: function (a) {
      a.block.oi(!a.block.isCollapsed());
    },
    ud: h.Ba.Gc.Fb,
    id: "blockCollapseExpand",
    weight: 4,
  });
};
h.ka.LE = function () {
  h.Ba.A.register({
    Lc: function (a) {
      return a.block.isEnabled() ? h.P.DISABLE_BLOCK : h.P.ENABLE_BLOCK;
    },
    Ka: function (a) {
      a = a.block;
      return !a.Qc && a.C.options.disable && a.Md()
        ? Xb(a)
          ? "disabled"
          : "enabled"
        : "hidden";
    },
    xa: function (a) {
      a = a.block;
      var c = h.h.Zb();
      c || h.h.ta(!0);
      a.sf(!a.isEnabled());
      c || h.h.ta(!1);
    },
    ud: h.Ba.Gc.Fb,
    id: "blockDisable",
    weight: 5,
  });
};
h.ka.Ms = function () {
  h.Ba.A.register({
    Lc: function (a) {
      var c = a.block;
      a = q(c, !1).length;
      (c = u(c)) && (a -= q(c, !1).length);
      return 1 == a
        ? h.P.DELETE_BLOCK
        : h.P.DELETE_X_BLOCKS.replace("%1", String(a));
    },
    Ka: function (a) {
      return !a.block.Qc && a.block.ad() ? "enabled" : "hidden";
    },
    xa: function (a) {
      h.h.ta(!0);
      a.block.I(!0, !0);
      h.h.ta(!1);
    },
    ud: h.Ba.Gc.Fb,
    id: "blockDelete",
    weight: 6,
  });
};
h.ka.RE = function () {
  h.Ba.A.register({
    Lc: function () {
      return h.P.HELP;
    },
    Ka: function (a) {
      a = a.block;
      return ("function" == typeof a.Bj ? a.Bj() : a.Bj) ? "enabled" : "hidden";
    },
    xa: function (a) {
      a.block.showHelp();
    },
    ud: h.Ba.Gc.Fb,
    id: "blockHelp",
    weight: 7,
  });
};
h.ka.BE = function () {
  h.ka.NE();
  h.ka.FE();
  h.ka.TE();
  h.ka.EE();
  h.ka.LE();
  h.ka.Ms();
  h.ka.RE();
};
h.ka.IE = function () {
  h.ka.gF();
  h.ka.BE();
};
h.Ba = function () {
  h.Ba.A = this;
  this.td = {};
  h.ka.IE();
};
h.Ba.Gc = { Fb: "block", cc: "workspace" };
h.Ba.A = null;
h.Ba.prototype.register = function (a) {
  if (this.td[a.id])
    throw Error('Menu item with id "' + a.id + '" is already registered.');
  this.td[a.id] = a;
};
h.Ba.prototype.unregister = function (a) {
  if (this.td[a]) delete this.td[a];
  else throw Error('Menu item with id "' + a + '" not found.');
};
h.Ba.prototype.getItem = function (a) {
  return this.td[a] ? this.td[a] : null;
};
function cc(a, c) {
  var d = [],
    e = h.Ba.A.td;
  Object.keys(e).forEach(function (f) {
    f = e[f];
    if (a == f.ud) {
      var g = f.Ka(c);
      "hidden" != g &&
        ((f = {
          text: "function" == typeof f.Lc ? f.Lc(c) : f.Lc,
          enabled: "enabled" == g,
          xa: f.xa,
          scope: c,
          weight: f.weight,
        }),
        d.push(f));
    }
  });
  d.sort(function (f, g) {
    return f.weight - g.weight;
  });
  return d;
}
new h.Ba();
h.h.Se = function (a, c, d) {
  h.h.Se.u.constructor.call(this, d);
  this.ay = a;
  this.Yx = c;
};
h.g.object.U(h.h.Se, h.h.ne);
h.h.Se.prototype.type = h.h.Xm;
h.h.Se.prototype.oa = function () {
  var a = h.h.Se.u.oa.call(this);
  a.oldElementId = this.ay;
  a.newElementId = this.Yx;
  return a;
};
h.h.Se.prototype.ba = function (a) {
  h.h.Se.u.ba.call(this, a);
  this.ay = a.oldElementId;
  this.Yx = a.newElementId;
};
h.A.register(h.A.Z.Lb, h.h.Xm, h.h.Se);
h.Mb = function (a, c) {
  h.Mb.u.constructor.call(this, a, c);
  this.cf = a.C.yn[c];
  this.uw = a.C.yn[h.Qi[c]];
  this.ji = new h.g.T(0, 0);
  this.qg = h.Mb.Ue.Iv;
  this.pa = null;
};
h.g.object.U(h.Mb, h.ga);
h.Mb.Ue = { Iv: -1, zv: 0, Zi: 1 };
b = h.Mb.prototype;
b.I = function () {
  h.Mb.u.I.call(this);
  this.qg == h.Mb.Ue.Zi && dc(this.cf, this, this.y);
};
b.V = function () {
  return h.Mb.u.V.call(this);
};
b.ua = function () {
  return h.Mb.u.ua.call(this);
};
function Ua(a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
}
function rb(a, c) {
  if (!a.L.C.rd()) {
    var d = a.L.Oc();
    if (!d.Qc) {
      var e = !1;
      if (!d.zc()) {
        d = c.V().Oc();
        if (!d.zc()) return;
        c = a;
        e = !0;
      }
      var f = h.selected == d;
      f || d.hn();
      var g = c.x + h.tc + Math.floor(Math.random() * h.bp) - a.x,
        k = c.y + h.tc + Math.floor(Math.random() * h.bp) - a.y;
      e && (k = -k);
      d.J && (g = c.x - h.tc - Math.floor(Math.random() * h.bp) - a.x);
      d.moveBy(g, k);
      f || d.Ql();
    }
  }
}
b.moveTo = function (a, c) {
  if (this.qg == h.Mb.Ue.Iv) {
    var d = this.cf;
    d.Jb.splice(ec(d, c), 0, this);
    this.qg = h.Mb.Ue.Zi;
  } else
    this.qg == h.Mb.Ue.Zi &&
      (dc(this.cf, this, this.y),
      (d = this.cf),
      d.Jb.splice(ec(d, c), 0, this));
  this.x = a;
  this.y = c;
};
b.moveBy = function (a, c) {
  this.moveTo(this.x + a, this.y + c);
};
function fc(a, c) {
  a.moveTo(c.x + a.ji.x, c.y + a.ji.y);
}
function L(a, c, d) {
  a.ji.x = c;
  a.ji.y = d;
}
function gc(a) {
  var c = a.pa.x - a.x,
    d = a.pa.y - a.y;
  if (0 != c || 0 != d) {
    a = a.ua();
    var e = a.qa();
    if (!e) throw Error("block is not rendered.");
    e = h.g.xe(e);
    a.qa().setAttribute(
      "transform",
      "translate(" + (e.x - c) + "," + (e.y - d) + ")"
    );
    Aa(a, -c, -d);
  }
}
b.closest = function (a, c) {
  var d = this.uw;
  if (d.Jb.length) {
    var e = this.y,
      f = this.x;
    this.x = f + c.x;
    this.y = e + c.y;
    var g = ec(d, this.y);
    c = null;
    for (var k = a, l, m = g - 1; 0 <= m && Math.abs(d.Jb[m].y - this.y) <= a; )
      (l = d.Jb[m]),
        z(d.kw, this, l, !0, k) && ((c = l), (k = Ua(l, this))),
        m--;
    for (; g < d.Jb.length && Math.abs(d.Jb[g].y - this.y) <= a; )
      (l = d.Jb[g]),
        z(d.kw, this, l, !0, k) && ((c = l), (k = Ua(l, this))),
        g++;
    this.x = f;
    this.y = e;
    a = { connection: c, Go: k };
  } else a = { connection: null, Go: a };
  return a;
};
function Vb(a, c) {
  (c && a.qg == h.Mb.Ue.Zi) ||
    (!c && a.qg == h.Mb.Ue.zv) ||
    a.L.Qc ||
    (c
      ? ((c = a.cf), c.Jb.splice(ec(c, a.y), 0, a), (a.qg = h.Mb.Ue.Zi))
      : (a.qg == h.Mb.Ue.Zi && dc(a.cf, a, a.y), (a.qg = h.Mb.Ue.zv)));
}
function Ub(a) {
  Vb(a, !0);
  var c = [];
  if (a.type != h.lb && a.type != h.Ta) return c;
  if ((a = a.ua())) {
    if (a.isCollapsed()) {
      var d = [];
      a.M && d.push(a.M);
      a.Y && d.push(a.Y);
      a.W && d.push(a.W);
    } else d = a.we(!0);
    for (var e = 0; e < d.length; e++) c.push.apply(c, Ub(d[e]));
    c.length || (c[0] = a);
  }
  return c;
}
b.vo = function (a) {
  rb(this, a);
};
b.Jq = function (a, c) {
  h.Mb.u.Jq.call(this, a, c);
  a.sa && a.La();
  c.sa && (Ya(c), c.La(), (c.qa().style.display = "block"));
};
b.Rl = function () {
  h.Mb.u.Rl.call(this);
  var a = this.ua();
  a && (a.Cj(), a.La(!1), (a = this.V()), a.sa && a.La());
};
b.Xx = function (a) {
  return hc(this.uw, this, a);
};
b.te = function (a) {
  h.Mb.u.te.call(this, a);
  var c = this.V();
  a = a.V();
  var d = c.sa,
    e = a.sa;
  d && Ya(c);
  e && Ya(a);
  d && e && (this.type == h.Ta || this.type == h.ie ? a.La() : c.La());
  if ((c = da(c, a)))
    (c = c.isVisible()), (a.qa().style.display = c ? "block" : "none");
};
b.ly = function () {
  !this.isConnected() ||
    (this.pa && z(qa(this), this, this.pa, !1)) ||
    (w(A(this) ? this.ua() : this.L), this.L.Xc());
};
h.xm = function () {
  h.xm.u.constructor.call(this);
};
h.g.object.U(h.xm, h.Ji);
b = h.xm.prototype;
b.next = function () {
  var a = this.$a;
  if (!a) return null;
  (a = ic(this, a, this.yt)) && H(this, a);
  return a;
};
b.lf = function () {
  return this.next();
};
b.Vd = function () {
  var a = this.$a;
  if (!a) return null;
  (a = jc(this, a, this.yt)) && H(this, a);
  return a;
};
b.nf = function () {
  return this.Vd();
};
function ic(a, c, d) {
  if (!c) return null;
  var e = c.lf() || c.next();
  if (d(e)) return e;
  if (e) return ic(a, e, d);
  c = kc(a, c.nf());
  return d(c) ? c : c ? ic(a, c, d) : null;
}
function jc(a, c, d) {
  if (!c) return null;
  var e = c.Vd();
  e = e ? lc(a, e) : c.nf();
  return d(e) ? e : e ? jc(a, e, d) : null;
}
b.yt = function (a) {
  var c = !1;
  a = a && a.Xa();
  if (
    a == h.B.types.zh ||
    a == h.B.types.xd ||
    a == h.B.types.Wb ||
    a == h.B.types.fd ||
    a == h.B.types.hd ||
    a == h.B.types.cc
  )
    c = !0;
  return c;
};
function kc(a, c) {
  if (!c) return null;
  var d = c.next();
  return d ? d : kc(a, c.nf());
}
function lc(a, c) {
  if (!c.lf()) return c;
  for (c = c.lf(); c.next(); ) c = c.next();
  return lc(a, c);
}
h.Vp = function () {
  h.Vp.u.constructor.call(this);
};
h.g.object.U(h.Vp, h.xm);
h.Vp.prototype.yt = function (a) {
  a && a.Xa();
  return !1;
};
h.cb = function (a, c, d) {
  this.O = h.g.j.K(h.g.F.Uc, {}, null);
  this.O.lm = "";
  this.style = mc(a.rb.aa(), null);
  this.Cb = a.rb.Px(this.O, this.style);
  this.Rs = this.sa = !1;
  this.C = a;
  this.W = this.Y = this.M = null;
  this.qm = h.g.Uh() && !!a.kd;
  var e = this.Cb.Ob;
  e.Yd = this;
  h.G.fj(e);
  h.cb.u.constructor.call(this, a, c, d);
  this.O.dataset
    ? (this.O.dataset.id = this.id)
    : h.g.userAgent.ee && this.O.setAttribute("data-id", this.id);
};
h.g.object.U(h.cb, h.Sc);
h.cb.prototype.height = 0;
h.cb.prototype.width = 0;
h.cb.prototype.So = null;
h.cb.VG = -1;
h.cb.gG = "TEMP_COLLAPSED_WARNING_";
b = h.cb.prototype;
b.Cj = function () {
  if (!this.C.sa) throw TypeError("Workspace is headless.");
  for (var a = 0, c; (c = this.S[a]); a++) c.Fa();
  c = va(this);
  for (a = 0; a < c.length; a++) c[a].pC();
  this.lc();
  sa(this.Cb, "blocklyDraggable", this.zc());
  a = this.qa();
  this.C.options.readOnly ||
    this.LC ||
    !a ||
    h.Ca(a, "mousedown", this, this.bh);
  this.LC = !0;
  a.parentNode || this.C.Ab.appendChild(a);
};
b.select = function () {
  if (this.Ja && this.getParent()) this.getParent().select();
  else if (h.selected != this) {
    var a = null;
    if (h.selected) {
      a = h.selected.id;
      h.h.disable();
      try {
        pb(h.selected);
      } finally {
        h.h.enable();
      }
    }
    a = new h.h.Se(a, this.id, this.C.id);
    h.h.Ea(a);
    h.selected = this;
    this.hn();
  }
};
function pb(a) {
  if (h.selected == a) {
    var c = new h.h.Se(a.id, null, a.C.id);
    c.ac = a.C.id;
    h.h.Ea(c);
    h.selected = null;
    a.Ql();
  }
}
b.ze = null;
b.re = null;
b.jz = null;
function va(a) {
  var c = [];
  a.ze && c.push(a.ze);
  a.re && c.push(a.re);
  a.jz && c.push(a.jz);
  return c;
}
b.Jo = function (a) {
  var c = this.qf;
  if (a != c) {
    h.g.j.cm();
    h.cb.u.Jo.call(this, a);
    h.g.j.dm();
    var d = this.qa();
    if (!this.C.Hr && d) {
      var e = this.Wa();
      a
        ? (a.qa().appendChild(d),
          (a = this.Wa()),
          Aa(this, a.x - e.x, a.y - e.y))
        : c && (this.C.Ab.appendChild(d), this.translate(e.x, e.y));
      this.lc();
    }
  }
};
b.Wa = function () {
  var a = 0,
    c = 0,
    d = this.qm ? this.C.kd.Zb() : null,
    e = this.qa();
  if (e) {
    do {
      var f = h.g.xe(e);
      a += f.x;
      c += f.y;
      this.qm &&
        this.C.kd.df.firstChild == e &&
        ((f = this.C.kd.rr()), (a += f.x), (c += f.y));
      e = e.parentNode;
    } while (e && e != this.C.Ab && e != d);
  }
  return new h.g.T(a, c);
};
b.moveBy = function (a, c) {
  if (this.qf) throw Error("Block has parent.");
  var d = h.h.isEnabled();
  if (d) var e = new h.h.ek(this);
  var f = this.Wa();
  this.translate(f.x + a, f.y + c);
  Aa(this, a, c);
  d && (e.li(), h.h.Ea(e));
  Za(this.C);
};
b.translate = function (a, c) {
  this.qa().setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.moveTo = function (a) {
  var c = this.Wa();
  this.moveBy(a.x - c.x, a.y - c.y);
};
b.js = function (a) {
  this.qm
    ? this.C.kd.yi(a.x, a.y)
    : ((this.O.lm = "translate(" + a.x + "," + a.y + ")"),
      this.O.setAttribute("transform", this.O.lm + this.O.bm));
};
function ac(a) {
  if (a.C && !a.C.rd() && !a.getParent() && !a.Qc) {
    var c = a.C.Id;
    if (c && c.yF) {
      var d = c.ht,
        e = d / 2,
        f = a.Wa();
      c = Math.round((f.x - e) / d) * d + e - f.x;
      d = Math.round((f.y - e) / d) * d + e - f.y;
      c = Math.round(c);
      d = Math.round(d);
      (0 == c && 0 == d) || a.moveBy(c, d);
    }
  }
}
function nc(a) {
  var c = a.Wa(),
    d = y(a);
  if (a.J) {
    a = c.x - d.width;
    var e = c.x;
  } else (a = c.x), (e = c.x + d.width);
  return new h.g.Rect(c.y, c.y + d.height, a, e);
}
b.Dl = function () {
  this.Cb.mj = this.C.rb.aa();
  for (var a = 0, c; (c = this.S[a]); a++) c.Dl();
};
b.oi = function (a) {
  this.Dh != a &&
    (h.cb.u.oi.call(this, a), a ? this.sa && this.La() : oc(this));
};
function oc(a) {
  for (var c = a.isCollapsed(), d = 0, e; (e = a.S[d]); d++)
    e.name != h.Sc.gk && e.$b(!c);
  if (c) {
    e = va(a);
    for (d = 0; (c = e[d]); d++) c.$b(!1);
    d = a.toString(h.Ez);
    (e = ba(a, h.Sc.gp))
      ? e.setValue(d)
      : ((e = ea(a, h.Sc.gk) || Yb(a, h.Sc.gk)), K(e, new h.Tc(d), h.Sc.gp));
  } else a.Ps(h.Sc.gk);
}
b.bh = function (a) {
  var c = this.C && this.C.Kg(a);
  if (c) {
    if (c.Qh)
      throw Error(
        "Tried to call gesture.handleBlockStart, but the gesture had already been started."
      );
    Ab(c, this);
    c.Qd = a;
  }
};
b.showHelp = function () {
  var a = "function" == typeof this.Bj ? this.Bj() : this.Bj;
  a && window.open(a);
};
b.Yl = function (a) {
  if (this.C.options.readOnly || !this.contextMenu) var c = null;
  else (c = cc(h.Ba.Gc.Fb, { block: this })), this.tC && this.tC(c);
  c && c.length && (h.Ua.show(a, c, this.J), (h.Ua.An = this));
};
function Aa(a, c, d) {
  if (a.sa) {
    for (var e = a.we(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
    e = va(a);
    for (f = 0; f < e.length; f++) e[f].iC();
    for (f = 0; f < a.Sf.length; f++) Aa(a.Sf[f], c, d);
  }
}
b.jh = function (a) {
  if (a) {
    var c = this.qa();
    c.lm = "";
    c.bm = "";
    h.tj = h.tj.concat(this.we(!0));
    h.g.j.Rb(this.O, "blocklyDragging");
  } else (h.tj = []), h.g.j.cd(this.O, "blocklyDragging");
  for (c = 0; c < this.Sf.length; c++) this.Sf[c].jh(a);
};
b.at = function (a) {
  h.cb.u.at.call(this, a);
  sa(this.Cb, "blocklyDraggable", a);
};
b.$s = function (a) {
  h.cb.u.$s.call(this, a);
  a = va(this);
  for (var c = 0; c < a.length; c++) Cb(a[c]);
};
b.dt = function (a) {
  h.cb.u.dt.call(this, a);
  this.lc();
};
b.Ly = function (a) {
  this.Ij != a &&
    (this.Ij = a) &&
    (this.Be(this.C.rb.aa().tp), sa(this.Cb, "blocklyInsertionMarker", !0));
};
b.qa = function () {
  return this.O;
};
b.I = function (a, c) {
  if (this.C) {
    h.G.I();
    h.G.vt(this.Cb.Ob);
    h.g.j.cm();
    var d = this.C;
    h.selected == this && (pb(this), bc(this.C));
    h.Ua.An == this && h.Ua.Ia();
    this.C.ib && h.navigation.cE(this);
    c && this.sa && (w(this, a), h.fb.DC(this));
    this.sa = !1;
    if (this.So) {
      for (var e in this.So) clearTimeout(this.So[e]);
      this.So = null;
    }
    c = va(this);
    for (e = 0; e < c.length; e++) c[e].I();
    h.cb.u.I.call(this, !!a);
    h.g.j.removeNode(this.O);
    Za(d);
    this.O = null;
    h.g.j.dm();
  }
};
b.lc = function () {
  this.Cb.lc(this);
  for (var a = va(this), c = 0; c < a.length; c++) a[c].lc();
  for (a = 0; (c = this.S[a]); a++)
    for (var d = 0, e; (e = c.hb[d]); d++) e.lc();
};
function Ya(a) {
  var c = C(a, !1);
  a.lc();
  if (!a.isCollapsed()) {
    a = 0;
    for (var d; (d = c[a]); a++) d.sa && Ya(d);
  }
}
b.ZC = function () {
  return this.re;
};
b.Uj = function (a) {
  if (!h.Comment) throw Error("Missing require for Blockly.Comment");
  this.se.text != a &&
    (h.cb.u.Uj.call(this, a),
    (a = null != a),
    !!this.re == a
      ? this.re.mK()
      : (a ? (this.re = new h.Comment(this)) : (this.re.I(), (this.re = null)),
        this.sa && (this.La(), this.Xc())));
};
b.My = function (a) {
  this.ze && this.ze !== a && this.ze.I();
  a && (a.$J(this), (this.ze = a), a.pC());
  this.sa && (this.La(), this.Xc());
};
b.sf = function (a) {
  this.isEnabled() != a &&
    (h.cb.u.sf.call(this, a), this.sa && !Xb(this) && Ya(this));
};
b.Ce = function (a) {
  this.sa && this.Cb.az(a);
};
b.hn = function () {
  sa(this.Cb, "blocklySelected", !0);
};
b.Ql = function () {
  sa(this.Cb, "blocklySelected", !1);
};
b.Ul = function (a) {
  sa(this.Cb, "blocklyDraggingDelete", a);
};
b.ir = function () {
  return this.style.Eh;
};
b.Be = function (a) {
  h.cb.u.Be.call(this, a);
  a = pc(this.C.rb.aa(), this.Ed);
  this.Cb.ui(a.style);
  this.style = a.style;
  this.em = a.name;
  this.lc();
};
b.ui = function (a) {
  var c = mc(this.C.rb.aa(), a);
  this.em = a;
  if (c)
    (this.jf = c.jf),
      this.Cb.ui(c),
      (this.Ed = c.Eh),
      (this.style = c),
      this.lc();
  else throw Error("Invalid style name: " + a);
};
function Ba(a) {
  do {
    var c = a.qa(),
      d = c.parentNode,
      e = d.childNodes;
    e[e.length - 1] !== c && d.appendChild(c);
    a = a.getParent();
  } while (a);
}
b.si = function (a, c) {
  h.cb.u.si.call(this, a, c);
  this.sa && (this.La(), this.Xc());
};
b.Vj = function (a, c) {
  h.cb.u.Vj.call(this, a, c);
  this.sa && (this.La(), this.Xc());
};
b.bt = function (a, c) {
  h.cb.u.bt.call(this, a, c);
  this.sa && (this.La(), this.Xc());
};
b.ri = function (a) {
  h.cb.u.ri.call(this, a);
  this.sa && (this.La(), this.Xc());
};
b.Ps = function (a, c) {
  a = h.cb.u.Ps.call(this, a, c);
  this.sa && (this.La(), this.Xc());
  return a;
};
b.Pf = function (a, c) {
  a = h.cb.u.Pf.call(this, a, c);
  this.sa && (this.La(), this.Xc());
  return a;
};
function Xa(a, c) {
  a.W && Vb(a.W, c);
  a.M && Vb(a.M, c);
  if (a.Y) {
    Vb(a.Y, c);
    var d = a.Y.ua();
    d && Xa(d, c);
  }
  if (!a.Dh)
    for (d = 0; d < a.S.length; d++) {
      var e = a.S[d].connection;
      e && (Vb(e, c), (e = e.ua()) && Xa(e, c));
    }
}
b.we = function (a) {
  var c = [];
  if (a || this.sa)
    if (
      (this.M && c.push(this.M),
      this.W && c.push(this.W),
      this.Y && c.push(this.Y),
      a || !this.Dh)
    ) {
      a = 0;
      for (var d; (d = this.S[a]); a++) d.connection && c.push(d.connection);
    }
  return c;
};
b.co = function () {
  return h.cb.u.co.call(this);
};
b.lr = function (a, c) {
  return h.cb.u.lr.call(this, a, c);
};
b.Cl = function (a) {
  return new h.Mb(this, a);
};
b.Xc = function () {
  if (this.C && !this.C.rd()) {
    var a = this.Oc();
    if (!a.Qc)
      for (var c = this.we(!1), d = 0, e; (e = c[d]); d++) {
        e.isConnected() && A(e) && e.ua().Xc();
        for (var f = e.Xx(h.tc), g = 0, k; (k = f[g]); g++)
          (e.isConnected() && k.isConnected()) ||
            (k.V().Oc() != a && (A(e) ? rb(k, e) : rb(e, k)));
      }
  }
};
function Ca(a) {
  var c = h.h.Zb();
  setTimeout(function () {
    h.h.ta(c);
    ac(a);
    h.h.ta(!1);
  }, h.ap / 2);
  setTimeout(function () {
    h.h.ta(c);
    a.Xc();
    h.h.ta(!1);
  }, h.ap);
}
function ra(a, c, d) {
  (c.type != h.Ta && c.type != h.lb) || a.moveBy(d.x - c.x, d.y - c.y);
}
b.getParent = function () {
  return h.cb.u.getParent.call(this);
};
b.Oc = function () {
  return h.cb.u.Oc.call(this);
};
b.La = function (a) {
  if (!this.Rs) {
    this.Rs = !0;
    try {
      this.sa = !0;
      h.g.j.cm();
      this.isCollapsed() && oc(this);
      this.C.rb.La(this);
      var c = this.Wa();
      this.W && fc(this.W, c);
      this.M && fc(this.M, c);
      for (var d = 0; d < this.S.length; d++) {
        var e = this.S[d].connection;
        e && (fc(e, c), e.isConnected() && gc(e));
      }
      this.Y && (fc(this.Y, c), this.Y.isConnected() && gc(this.Y));
      if (!1 !== a) {
        var f = this.getParent();
        f ? f.La(!0) : Za(this.C);
      }
      h.g.j.dm();
      this.xt();
    } finally {
      this.Rs = !1;
    }
  }
};
b.xt = function () {
  this.C.ib && this.Cb.Wk && this.C.pb().draw();
  this.C.ib && this.Cb.$r && this.C.Nc(h.navigation.tk).draw();
};
b.lg = function (a) {
  this.Cb.lg(a);
};
b.mg = function (a) {
  this.Cb.mg(a);
};
function y(a) {
  var c = a.height,
    d = a.width,
    e = u(a);
  e &&
    ((e = y(e)),
    (a = a.C.rb.aa().Dp),
    (c += e.height - a),
    (d = Math.max(d, e.width)));
  return { height: c, width: d };
}
h.Ii = function (a) {
  this.Jb = [];
  this.kw = a;
};
function qc(a, c, d) {
  if (!a.Jb.length) return -1;
  var e = ec(a, d);
  if (e >= a.Jb.length) return -1;
  d = c.y;
  for (var f = e; 0 <= f && a.Jb[f].y == d; ) {
    if (a.Jb[f] == c) return f;
    f--;
  }
  for (; e < a.Jb.length && a.Jb[e].y == d; ) {
    if (a.Jb[e] == c) return e;
    e++;
  }
  return -1;
}
function ec(a, c) {
  if (!a.Jb.length) return 0;
  for (var d = 0, e = a.Jb.length; d < e; ) {
    var f = Math.floor((d + e) / 2);
    if (a.Jb[f].y < c) d = f + 1;
    else if (a.Jb[f].y > c) e = f;
    else {
      d = f;
      break;
    }
  }
  return d;
}
function dc(a, c, d) {
  c = qc(a, c, d);
  if (-1 == c) throw Error("Unable to find connection in connectionDB.");
  a.Jb.splice(c, 1);
}
function hc(a, c, d) {
  function e(n) {
    var p = g - f[n].x,
      r = k - f[n].y;
    Math.sqrt(p * p + r * r) <= d && m.push(f[n]);
    return r < d;
  }
  var f = a.Jb,
    g = c.x,
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
h.Ii.Fa = function (a) {
  var c = [];
  c[h.lb] = new h.Ii(a);
  c[h.ge] = new h.Ii(a);
  c[h.Ta] = new h.Ii(a);
  c[h.ie] = new h.Ii(a);
  return c;
};
h.h.Jf = function (a, c) {
  h.h.Jf.u.constructor.call(this, c);
  this.Vy = a;
};
h.g.object.U(h.h.Jf, h.h.ne);
h.h.Jf.prototype.type = h.h.uv;
h.h.Jf.prototype.oa = function () {
  var a = h.h.Jf.u.oa.call(this);
  a.themeName = this.Vy;
  return a;
};
h.h.Jf.prototype.ba = function (a) {
  h.h.Jf.u.ba.call(this, a);
  this.Vy = a.themeName;
};
h.A.register(h.A.Z.Lb, h.h.uv, h.h.Jf);
h.h.Of = function (a, c, d, e) {
  h.h.Of.u.constructor.call(this, e);
  this.Db = a;
  this.Bb = c;
  this.scale = d;
};
h.g.object.U(h.h.Of, h.h.ne);
h.h.Of.prototype.type = h.h.Ev;
h.h.Of.prototype.oa = function () {
  var a = h.h.Of.u.oa.call(this);
  a.viewTop = this.Db;
  a.viewLeft = this.Bb;
  a.scale = this.scale;
  return a;
};
h.h.Of.prototype.ba = function (a) {
  h.h.Of.u.ba.call(this, a);
  this.Db = a.viewTop;
  this.Bb = a.viewLeft;
  this.scale = a.scale;
};
h.A.register(h.A.Z.Lb, h.h.Ev, h.h.Of);
h.xh = function (a, c) {
  this.yj = a;
  this.ht = c.spacing;
  this.Nx = c.length;
  this.RD = (this.Qr = a.firstChild) && this.Qr.nextSibling;
  this.yF = c.snap;
};
h.xh.prototype.ih = 1;
h.xh.prototype.I = function () {
  this.yj = null;
};
h.xh.prototype.update = function (a) {
  this.ih = a;
  var c = this.ht * a || 100;
  this.yj.setAttribute("width", c);
  this.yj.setAttribute("height", c);
  c = Math.floor(this.ht / 2) + 0.5;
  var d = c - this.Nx / 2,
    e = c + this.Nx / 2;
  c *= a;
  d *= a;
  e *= a;
  rc(this.Qr, a, d, e, c, c);
  rc(this.RD, a, c, c, d, e);
};
function rc(a, c, d, e, f, g) {
  a &&
    (a.setAttribute("stroke-width", c),
    a.setAttribute("x1", d),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", g));
}
h.xh.prototype.moveTo = function (a, c) {
  this.yj.setAttribute("x", a);
  this.yj.setAttribute("y", c);
  (h.g.userAgent.ee || h.g.userAgent.vh) && this.update(this.ih);
};
h.xh.Va = function (a, c, d) {
  a = h.g.j.K(
    h.g.F.Yu,
    { id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse" },
    d
  );
  0 < c.length && 0 < c.spacing
    ? (h.g.j.K(h.g.F.rk, { stroke: c.colour }, a),
      1 < c.length && h.g.j.K(h.g.F.rk, { stroke: c.colour }, a))
    : h.g.j.K(h.g.F.rk, {}, a);
  return a;
};
h.Ju = function (a) {
  this.Vf = this.Gd = null;
  this.di = {};
  this.o = a;
};
function sc(a, c) {
  var d = a.di[c];
  if (d) d.I(), delete a.di[c];
  else
    throw Error(
      "Marker with id " +
        c +
        " does not exist. Can only unregistermarkers that exist."
    );
}
b = h.Ju.prototype;
b.pb = function () {
  return this.Gd;
};
b.Nc = function (a) {
  return this.di[a];
};
function tc(a, c) {
  a.Gd && a.Gd.Yc && a.Gd.Yc.I();
  a.Gd = c;
  a.Gd &&
    ((c = a.Gd),
    (c = new h.i.Ff(a.o, a.o.rb.aa(), c)),
    (a.Gd.Yc = c),
    a.lg(a.Gd.Yc.Va()));
}
b.lg = function (a) {
  a ? (this.o.Ab.appendChild(a), (this.Vf = a)) : (this.Vf = null);
};
b.mg = function (a) {
  a
    ? this.o.Ab &&
      (this.Vf ? this.o.Ab.insertBefore(a, this.Vf) : this.o.Ab.appendChild(a))
    : (this.jg = null);
};
b.I = function () {
  for (var a = Object.keys(this.di), c = 0, d; (d = a[c]); c++) sc(this, d);
  this.di = null;
  this.Gd && (this.Gd.I(), (this.Gd = null));
};
h.yv = function (a, c) {
  this.o = a;
  this.og = c;
  this.fm = [];
  this.Ye = Object.create(null);
};
b = h.yv.prototype;
b.cg = function () {
  return this.og;
};
b.Xl = function (a) {
  var c = this.og;
  this.og = a;
  if ((a = aa(this.o))) c && h.g.j.cd(a, c.ve()), h.g.j.Rb(a, this.og.ve());
  for (c = 0; (a = this.fm[c]); c++) uc(a);
  c = 0;
  a = Object.keys(this.Ye);
  for (var d; (d = a[c]); c++)
    for (var e = 0, f; (f = this.Ye[d][e]); e++)
      f.element.style[f.propertyName] = (this.og && Va(this.og, d)) || "";
  h.dc();
};
b.subscribe = function (a, c, d) {
  this.Ye[c] || (this.Ye[c] = []);
  this.Ye[c].push({ element: a, propertyName: d });
  a.style[d] = (this.og && Va(this.og, c)) || "";
};
b.unsubscribe = function (a) {
  if (a)
    for (var c = Object.keys(this.Ye), d = 0, e; (e = c[d]); d++) {
      for (var f = this.Ye[e], g = f.length - 1; 0 <= g; g--)
        f[g].element === a && f.splice(g, 1);
      this.Ye[e].length || delete this.Ye[e];
    }
};
b.I = function () {
  this.Ye = this.fm = this.og = this.Td = null;
};
h.Vc = function (a, c) {
  h.Vc.u.constructor.call(this, a, c);
  this.Yn = !1;
  this.ld = Object.create(null);
  this.Qy = this.Ml = 0;
  this.Gx = this.ws = null;
};
h.g.object.U(h.Vc, h.Ne);
h.Vc.KB = 5;
h.Vc.LB = 6;
b = h.Vc.prototype;
b.Nq = function (a) {
  this.Gx = this.Kb.options.ab && this.Kb.options.ab.Gs;
  h.Vc.u.Nq.call(this, a);
  !this.Wn && h.Touch.bo(a) && vc(this, a);
};
b.fj = function (a) {
  this.ws = h.Ca(document, "mousedown", null, this.uD.bind(this), !0);
  this.xo = h.Ca(document, "mousemove", null, this.zj.bind(this), !0);
  this.zo = h.Ca(document, "mouseup", null, this.Qn.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
b.uD = function (a) {
  !this.rd() && h.Touch.bo(a) && (vc(this, a), this.Yn && h.Yg());
};
b.zj = function (a) {
  if (this.rd()) h.Touch.gt(a) && h.Vc.u.zj.call(this, a);
  else if (this.Yn) {
    if (h.Touch.bo(a)) {
      this.ld[h.Touch.On(a)] = wc(this, a);
      var c = Object.keys(this.ld);
      if (this.Gx && 2 === c.length) {
        c = Object.keys(this.ld);
        c = h.g.T.Mq(this.ld[c[0]], this.ld[c[1]]) / this.Qy;
        if (0 < this.Ml && Infinity > this.Ml) {
          var d = c - this.Ml;
          d = 0 < d ? d * h.Vc.KB : d * h.Vc.LB;
          var e = this.Kb,
            f = h.g.Gl(a, x(e), Pa(e));
          e.zoom(f.x, f.y, d);
        }
        this.Ml = c;
        a.preventDefault();
      } else h.Vc.u.zj.call(this, a);
    }
    h.Yg();
  } else h.Vc.u.zj.call(this, a);
};
b.Qn = function (a) {
  if (h.Touch.bo(a) && !this.rd()) {
    var c = h.Touch.On(a);
    this.ld[c] && delete this.ld[c];
    2 > Object.keys(this.ld).length &&
      ((this.ld = Object.create(null)), (this.Ml = 0));
  }
  !this.Yn || this.rd()
    ? h.Touch.gt(a) && h.Vc.u.Qn.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.I());
};
b.I = function () {
  h.Vc.u.I.call(this);
  this.ws && h.sb(this.ws);
};
function vc(a, c) {
  a.ld[h.Touch.On(c)] = wc(a, c);
  var d = Object.keys(a.ld);
  2 == d.length &&
    ((a.Qy = h.g.T.Mq(a.ld[d[0]], a.ld[d[1]])),
    (a.Yn = !0),
    c.preventDefault());
}
function wc(a, c) {
  return a.Kb
    ? new h.g.T(
        c.pageX ? c.pageX : c.changedTouches[0].pageX,
        c.pageY ? c.pageY : c.changedTouches[0].pageY
      )
    : null;
}
h.Lv = function (a) {
  this.Bs = a;
  this.Ak = Object.create(null);
};
b = h.Lv.prototype;
b.Mr = null;
b.I = function () {
  this.Ak = this.Bs = null;
};
b.load = function (a, c) {
  if (a.length) {
    try {
      var d = new h.g.global.Audio();
    } catch (l) {
      return;
    }
    for (var e, f = 0; f < a.length; f++) {
      var g = a[f],
        k = g.match(/\.(\w+)$/);
      if (k && d.canPlayType("audio/" + k[1])) {
        e = new h.g.global.Audio(g);
        break;
      }
    }
    e && e.play && (this.Ak[c] = e);
  }
};
b.preload = function () {
  for (var a in this.Ak) {
    var c = this.Ak[a];
    c.volume = 0.01;
    var d = c.play();
    void 0 !== d ? d.then(c.pause).catch(function () {}) : c.pause();
    if (h.g.userAgent.nk || h.g.userAgent.zu) break;
  }
};
b.play = function (a, c) {
  var d = this.Ak[a];
  d
    ? ((a = new Date()),
      (null != this.Mr && a - this.Mr < h.sB) ||
        ((this.Mr = a),
        (d = h.g.userAgent.nk || h.g.userAgent.tm ? d : d.cloneNode()),
        (d.volume = void 0 === c ? 1 : c),
        d.play()))
    : this.Bs && this.Bs.Wc.play(a, c);
};
h.Nv = function (a) {
  this.Qk = a;
  this.Va();
};
b = h.Nv.prototype;
b.tb = null;
b.Qk = null;
b.Va = function () {
  this.tb ||
    ((this.tb = h.g.j.K(
      h.g.F.Wi,
      {
        xmlns: h.g.j.$m,
        "xmlns:html": h.g.j.pp,
        "xmlns:xlink": h.g.j.jd,
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible",
      },
      null
    )),
    this.Qk.appendChild(this.tb));
};
b.yi = function (a, c) {
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.tb.style.display = "block";
  h.g.j.Tl(this.tb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.rr = function () {
  return h.g.xe(this.tb);
};
b.rn = function (a) {
  if (!a)
    throw Error(
      "Couldn't clear and hide the drag surface: missing new surface."
    );
  var c = this.tb.childNodes[0],
    d = this.tb.childNodes[1];
  if (
    !(
      c &&
      d &&
      h.g.j.yr(c, "blocklyBlockCanvas") &&
      h.g.j.yr(d, "blocklyBubbleCanvas")
    )
  )
    throw Error(
      "Couldn't clear and hide the drag surface. A node was missing."
    );
  null != this.Js ? h.g.j.Dj(c, this.Js) : a.insertBefore(c, a.firstChild);
  h.g.j.Dj(d, c);
  this.tb.style.display = "none";
  if (this.tb.childNodes.length) throw Error("Drag surface was not cleared.");
  h.g.j.Tl(this.tb, "");
  this.Js = null;
};
h.bb = function (a, c, d) {
  h.bb.u.constructor.call(this, a);
  this.od = a.od || h.bb.kD;
  this.Vl = a.Vl || h.bb.tF;
  this.yn = h.Ii.Fa(this.Ok);
  c && (this.kd = c);
  d && (this.Ci = d);
  this.Qo = !!this.Ci && h.g.Uh();
  this.tl = [];
  this.Wc = new h.Lv(a.bd);
  this.Id = this.options.xr ? new h.xh(this.options.xr, a.px) : null;
  this.sd = new h.Ju(this);
  this.st = {};
  this.Mw = {};
  h.la && h.la.Lh && xc(this, h.$i, h.la.Lh);
  h.Fv && h.Fv.Lh && xc(this, h.FB, h.Fv.Lh);
  h.Za && h.Za.Lh && (xc(this, h.Zu, h.Za.Lh), F(this, h.Za.eE));
  this.pc = this.options.bd
    ? this.options.bd.pc
    : new h.yv(this, this.options.HF || h.Kf.ug);
  this.pc.fm.push(this);
  this.rb = h.i.Fa(this.options.Ts || "geras", this.cg(), this.options.Us);
  this.mq = null;
  this.ib = !1;
  this.Oo = [];
};
h.g.object.U(h.bb, h.vb);
b = h.bb.prototype;
b.Io = null;
b.sa = !0;
b.gg = !0;
b.fg = !1;
b.Zn = !1;
b.Ws = !0;
b.scrollX = 0;
b.scrollY = 0;
b.Hw = null;
b.scale = 1;
b.jy = 1;
b.ky = 0;
b.ey = 0;
b.qc = null;
b.Aa = null;
b.ma = null;
b.wa = null;
b.xc = null;
b.kd = null;
b.Ci = null;
b.Qo = !1;
b.Vn = !1;
b.Fr = null;
b.Lx = null;
b.Pa = null;
b.Ex = null;
b.Gr = !0;
b.lg = function (a) {
  this.sd.lg(a);
};
b.mg = function (a) {
  this.sd.mg(a);
};
b.Nc = function (a) {
  return this.sd ? this.sd.Nc(a) : null;
};
b.pb = function () {
  return this.sd ? this.sd.pb() : null;
};
b.cg = function () {
  return this.pc.cg();
};
b.Xl = function (a) {
  a || (a = h.Kf.ug);
  this.pc.Xl(a);
};
function uc(a) {
  a.O && a.rb.Ls(a.O, a.cg());
  yc(
    E(a, !1).filter(function (c) {
      return void 0 !== c.em;
    })
  );
  zc(a);
  a.wa && uc(a.wa);
  a.isVisible() && a.$b(!0);
  a = new h.h.Jf(a.cg().name, a.id);
  h.h.Ea(a);
}
function yc(a) {
  for (var c = 0, d; (d = a[c]); c++) {
    var e = d.em;
    e && (d.ui(e), d.ze && d.ze.lK());
  }
}
function Pa(a) {
  if (a.Gr) {
    var c = x(a).getScreenCTM();
    c && ((a.Ex = c.inverse()), (a.Gr = !1));
  }
  return a.Ex;
}
b.om = function () {
  this.Gr = !0;
};
b.isVisible = function () {
  return this.gg;
};
function ka(a, c) {
  var d = 0,
    e = 0,
    f = 1;
  if (h.g.j.containsNode(a.Ab, c) || h.g.j.containsNode(a.ng, c)) f = a.scale;
  do {
    var g = h.g.xe(c);
    if (c == a.Ab || c == a.ng) f = 1;
    d += g.x * f;
    e += g.y * f;
    c = c.parentNode;
  } while (c && c != x(a));
  return new h.g.T(d, e);
}
function aa(a) {
  if (!a.Fr)
    for (var c = a.O; c; ) {
      if (
        -1 !=
        (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
      ) {
        a.Fr = c;
        break;
      }
      c = c.parentNode;
    }
  return a.Fr;
}
b.Va = function (a) {
  this.O = h.g.j.K(h.g.F.Uc, { class: "blocklyWorkspace" }, null);
  a &&
    ((this.oc = h.g.j.K(
      h.g.F.Ad,
      { height: "100%", width: "100%", class: a },
      this.O
    )),
    "blocklyMainBackground" == a && this.Id
      ? (this.oc.style.fill = "url(#" + this.Id.yj.id + ")")
      : this.pc.subscribe(this.oc, "workspaceBackgroundColour", "fill"));
  this.Ab = h.g.j.K(h.g.F.Uc, { class: "blocklyBlockCanvas" }, this.O);
  this.ng = h.g.j.K(h.g.F.Uc, { class: "blocklyBubbleCanvas" }, this.O);
  this.fg ||
    (h.Ca(this.O, "mousedown", this, this.bh, !1, !0),
    h.Ca(this.O, "wheel", this, this.sE));
  if (this.options.ol) {
    if (!h.LI) throw Error("Missing require for Blockly.Toolbox");
    this.wa = new (h.A.Uw(h.A.Z.Sp, this.options))(this);
  }
  this.Id && this.Id.update(this.scale);
  Ac(this);
  tc(this.sd, new h.Ji());
  a = this.sd;
  var c = h.navigation.tk,
    d = new h.xk();
  a.di[c] && sc(a, c);
  var e = new h.i.Ff(a.o, a.o.rb.aa(), d);
  d.Yc = e;
  a.mg(d.Yc.Va());
  a.di[c] = d;
  this.rb.Va(this.O, this.cg());
  return this.O;
};
b.I = function () {
  this.sa = !1;
  this.xc && this.xc.cancel();
  this.O && (h.g.j.removeNode(this.O), (this.O = null));
  this.ng = this.Ab = null;
  this.wa && (this.wa.I(), (this.wa = null));
  this.ma && (this.ma.I(), (this.ma = null));
  this.qc && (this.qc.I(), (this.qc = null));
  this.Aa && (this.Aa.I(), (this.Aa = null));
  this.Ei && (this.Ei.I(), (this.Ei = null));
  this.Wc && (this.Wc.I(), (this.Wc = null));
  this.Id && (this.Id.I(), (this.Id = null));
  this.rb.I();
  this.sd && (this.sd.I(), (this.sd = null));
  h.bb.u.I.call(this);
  if (this.pc) {
    var a = this.pc,
      c = a.fm.indexOf(this);
    if (0 > c)
      throw Error(
        "Cannot unsubscribe a workspace that hasn't been subscribed."
      );
    a.fm.splice(c, 1);
    this.pc.unsubscribe(this.oc);
    this.options.bd || (this.pc.I(), (this.pc = null));
  }
  this.Mw = this.st = this.yn = null;
  this.options.bd ||
    ((a = x(this)) && a.parentNode && h.g.j.removeNode(a.parentNode));
  this.Io && (h.sb(this.Io), (this.Io = null));
};
b.ls = function (a, c) {
  return new h.cb(this, a, c);
};
function Bc(a) {
  if (!h.kc) throw Error("Missing require for Blockly.Trashcan");
  a.qc = new h.kc(a);
  var c = a.qc.Va();
  a.O.insertBefore(c, a.Ab);
}
function Cc(a) {
  if (!h.MB) throw Error("Missing require for Blockly.ZoomControls");
  a.Ei = new h.MB(a);
  var c = a.Ei.Va();
  a.O.appendChild(c);
}
function Dc(a) {
  var c = h.g.F.Wi,
    d = new h.gd({
      parentWorkspace: a,
      rtl: a.J,
      oneBasedIndex: a.options.Ao,
      horizontalLayout: a.Ld,
      renderer: a.options.Ts,
      rendererOverrides: a.options.Us,
    });
  d.jb = a.options.jb;
  if (a.Ld) {
    if (!h.rp) throw Error("Missing require for Blockly.HorizontalFlyout");
    a.ma = new h.rp(d);
  } else {
    if (!h.Nf) throw Error("Missing require for Blockly.VerticalFlyout");
    a.ma = new h.Nf(d);
  }
  a.ma.ej = !1;
  a.ma.o.$b(!0);
  return a.ma.Va(c);
}
function G(a, c) {
  return a.ma || c ? a.ma : a.wa ? G(a.wa) : null;
}
function Za(a) {
  a.Ws && a.sa && (a.Aa && a.Aa.resize(), a.om());
}
b.resize = function () {
  this.wa && this.wa.position();
  this.ma && this.ma.position();
  this.qc && this.qc.position();
  this.Ei && this.Ei.position();
  this.Aa && this.Aa.resize();
  this.om();
  Ac(this);
};
function vb(a) {
  var c = h.g.eD();
  h.g.T.Yf(a.Lx, c) || ((a.Lx = c), a.om(), Ac(a));
}
function x(a) {
  if (!a.mq)
    for (var c = a.O; c; ) {
      if ("svg" == c.tagName) {
        a.mq = c;
        break;
      }
      c = c.parentNode;
    }
  return a.mq;
}
function Ea(a) {
  if (h.h.isEnabled()) {
    var c = a.scale,
      d = -a.scrollY,
      e = -a.scrollX;
    (c == a.jy && 1 > Math.abs(d - a.ky) && 1 > Math.abs(e - a.ey)) ||
      ((a.jy = c),
      (a.ky = d),
      (a.ey = e),
      (a = new h.h.Of(d, e, c, a.id)),
      h.h.Ea(a));
  }
}
b.translate = function (a, c) {
  if (this.Qo && this.Vn) this.Ci.yi(a, c);
  else {
    var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
    this.Ab.setAttribute("transform", d);
    this.ng.setAttribute("transform", d);
  }
  if (this.kd) {
    d = this.kd;
    var e = this.scale;
    d.ih = e;
    d.df.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")"
    );
  }
  this.Id && this.Id.moveTo(a, c);
  Ea(this);
};
function Ra(a) {
  if (a.Qo) {
    a.Vn = !1;
    var c = a.Ci.rr();
    a.Ci.rn(a.O);
    c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
    a.Ab.setAttribute("transform", c);
    a.ng.setAttribute("transform", c);
  }
}
function Qa(a) {
  if (a.Qo && !a.Vn) {
    a.Vn = !0;
    var c = a.Ab.previousSibling,
      d = parseInt(x(a).getAttribute("width"), 10),
      e = parseInt(x(a).getAttribute("height"), 10),
      f = h.g.xe(a.Ab),
      g = a.Ci,
      k = a.Ab,
      l = a.ng,
      m = a.scale;
    if (g.tb.childNodes.length) throw Error("Already dragging a block.");
    g.Js = c;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    g.tb.setAttribute("width", d);
    g.tb.setAttribute("height", e);
    g.tb.appendChild(k);
    g.tb.appendChild(l);
    g.tb.style.display = "block";
    a.Ci.yi(f.x, f.y);
  }
}
b.ll = function () {
  var a = this.od();
  return a ? a.Eb / this.scale : 0;
};
b.$b = function (a) {
  this.gg = a;
  if (this.O)
    if (
      (this.Aa && this.Aa.pi(a),
      G(this) && G(this).pi(a),
      (x(this).style.display = a ? "block" : "none"),
      this.wa && this.wa.$b(a),
      a)
    ) {
      a = E(this, !1);
      for (var c = a.length - 1; 0 <= c; c--) a[c].Dl();
      this.La();
      this.wa && this.wa.position();
    } else h.dc(!0);
};
b.La = function () {
  for (var a = E(this, !1), c = a.length - 1; 0 <= c; c--) a[c].La(!1);
  if (this.xc) for (a = this.xc.vj(), c = 0; c < a.length; c++) a[c].La(!1);
  c = this.sd;
  c.o.ib && c.Vf && c.o.pb().draw();
};
function Ec(a, c) {
  var d = B;
  if (void 0 === c) {
    for (var e = 0, f; (f = d.tl[e]); e++) f.Ce(!1);
    d.tl.length = 0;
  }
  if ((f = a ? d.Mc(a) : null))
    (a = void 0 === c || c)
      ? -1 == d.tl.indexOf(f) && d.tl.push(f)
      : h.g.Jk(d.tl, f),
      f.Ce(a);
}
b.Do = function (a) {
  if (
    this.sa &&
    a.tagName &&
    !(a.getElementsByTagName("block").length >= eb(this))
  )
    if ((this.xc && this.xc.cancel(), "comment" == a.tagName.toLowerCase())) {
      h.h.disable();
      try {
        h.aj.setValue(a.textContent);
        var c = void 0;
        var d = parseInt(a.getAttribute("x"), 10),
          e = parseInt(a.getAttribute("y"), 10);
        isNaN(d) || isNaN(e) || (this.J && (d = -d), c.moveBy(d + 50, e + 50));
      } finally {
        h.h.enable();
      }
      h.h.isEnabled() && h.Mv.lJ(c);
      c.select();
    } else
      a: {
        h.h.disable();
        try {
          var f = h.N.sj(a, this),
            g = this.Nc(h.navigation.tk).$a;
          if (this.ib && g && g.Fj) {
            h.navigation.Dx(f, g.ra);
            break a;
          }
          var k = parseInt(a.getAttribute("x"), 10),
            l = parseInt(a.getAttribute("y"), 10);
          if (!isNaN(k) && !isNaN(l)) {
            this.J && (k = -k);
            do {
              a = !1;
              var m = E(this, !1);
              c = 0;
              for (var n; (n = m[c]); c++) {
                var p = n.Wa();
                if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) {
                  a = !0;
                  break;
                }
              }
              if (!a) {
                var r = f.we(!1);
                c = 0;
                for (var t; (t = r[c]); c++)
                  if (t.closest(h.tc, new h.g.T(k, l)).connection) {
                    a = !0;
                    break;
                  }
              }
              a && ((k = this.J ? k - h.tc : k + h.tc), (l += 2 * h.tc));
            } while (a);
            f.moveBy(k, l);
          }
        } finally {
          h.h.enable();
        }
        h.h.isEnabled() && !f.Ja && h.h.Ea(new h.h.ym(f));
        f.select();
      }
};
function zc(a) {
  (a = a.fg ? a.Pa : a) && !a.xc && a.wa && G(a.wa) && a.wa.PJ();
}
b.mi = function (a, c) {
  h.bb.u.mi.call(this, a, c);
  zc(this);
};
b.qj = function (a) {
  h.bb.u.qj.call(this, a);
  zc(this);
};
b.ue = function (a, c, d) {
  a = h.bb.u.ue.call(this, a, c, d);
  zc(this);
  return a;
};
function Ac(a) {
  a.yw = a.qc && a.O.parentNode ? a.qc.il() : null;
  a.xw = a.ma
    ? a.ma.il()
    : a.wa && "function" == typeof a.wa.il
    ? a.wa.il()
    : null;
}
function xa(a, c) {
  return a.yw && a.yw.contains(c.clientX, c.clientY)
    ? h.lp
    : a.xw && a.xw.contains(c.clientX, c.clientY)
    ? h.$t
    : h.Zt;
}
b.bh = function (a) {
  var c = this.Kg(a);
  c && yb(c, a, this);
};
b.jt = function (a, c) {
  a = h.g.Gl(a, x(this), Pa(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.Hw = h.g.T.Yk(c, a);
};
b.rd = function () {
  return null != this.xc && this.xc.rd();
};
function Fc(a) {
  return (
    (a.options.fc && a.options.fc.scrollbars) ||
    (a.options.fc && a.options.fc.ph) ||
    (a.options.fc && a.options.fc.Jg) ||
    (a.options.ab && a.options.ab.controls) ||
    (a.options.ab && a.options.ab.ph) ||
    (a.options.ab && a.options.ab.Gs)
  );
}
b.zc = function () {
  return (
    (this.options.fc && this.options.fc.scrollbars) ||
    (this.options.fc && this.options.fc.ph) ||
    (this.options.fc && this.options.fc.Jg) ||
    (this.options.ab && this.options.ab.ph) ||
    (this.options.ab && this.options.ab.Gs)
  );
};
b.sE = function (a) {
  if (h.Ne.Th()) a.preventDefault(), a.stopPropagation();
  else {
    var c = this.options.ab && this.options.ab.ph,
      d = this.options.fc && this.options.fc.ph;
    if (c || d) {
      var e = h.g.ix(a);
      !c || (!a.ctrlKey && d)
        ? ((c = this.scrollX - e.x),
          (d = this.scrollY - e.y),
          a.shiftKey && !e.x && ((c = this.scrollX - e.y), (d = this.scrollY)),
          this.scroll(c, d))
        : ((e = -e.y / 50),
          (c = h.g.Gl(a, x(this), Pa(this))),
          this.zoom(c.x, c.y, e));
      a.preventDefault();
    }
  }
};
function Wa(a) {
  a = [].concat(a.Oo);
  if (!a.length) return new h.g.Rect(0, 0, 0, 0);
  for (var c = nc(a[0]), d = 1; d < a.length; d++) {
    var e = nc(a[d]);
    e.top < c.top && (c.top = e.top);
    e.bottom > c.bottom && (c.bottom = e.bottom);
    e.left < c.left && (c.left = e.left);
    e.right > c.right && (c.right = e.right);
  }
  return c;
}
b.Yl = function (a) {
  if (!this.options.readOnly && !this.fg) {
    var c = cc(h.Ba.Gc.cc, { C: this });
    this.jC && this.jC(c, a);
    h.Ua.show(a, c, this.J);
  }
};
function Oa(a) {
  if (a.options.bd) Oa(a.options.bd);
  else {
    h.Bl = a;
    document.activeElement &&
      document.activeElement.blur &&
      document.activeElement.blur();
    try {
      x(a).focus({ preventScroll: !0 });
    } catch (c) {
      try {
        x(a).parentNode.setActive();
      } catch (d) {
        x(a).parentNode.focus({ preventScroll: !0 });
      }
    }
  }
}
b.zoom = function (a, c, d) {
  d = Math.pow(this.options.ab.mF, d);
  var e = this.scale * d;
  if (this.scale != e) {
    e > this.options.ab.El
      ? (d = this.options.ab.El / this.scale)
      : e < this.options.ab.Fl && (d = this.options.ab.Fl / this.scale);
    var f = this.Ab.getCTM(),
      g = x(this).createSVGPoint();
    g.x = a;
    g.y = c;
    g = g.matrixTransform(f.inverse());
    a = g.x;
    c = g.y;
    f = f.translate(a * (1 - d), c * (1 - d)).scale(d);
    this.scrollX = f.e;
    this.scrollY = f.f;
    this.setScale(e);
  }
};
b.setScale = function (a) {
  this.options.ab.El && a > this.options.ab.El
    ? (a = this.options.ab.El)
    : this.options.ab.Fl && a < this.options.ab.Fl && (a = this.options.ab.Fl);
  this.scale = a;
  h.dc(!1);
  this.ma && (this.ma.Ks(), Ac(this));
  this.Id && this.Id.update(this.scale);
  a = this.od();
  this.scrollX -= a.uc;
  this.scrollY -= a.Hc;
  a.Bb += a.uc;
  a.Db += a.Hc;
  this.scroll(this.scrollX, this.scrollY);
  this.Aa &&
    (this.ma
      ? (Ia(this.Aa.Jd, a), Ja(this.Aa.Zd, a))
      : (La(this.Aa.Jd, a), Na(this.Aa.Zd, a)));
};
b.scroll = function (a, c) {
  h.dc(!0);
  var d = this.od(),
    e = d.$e + d.Jc - d.Eb,
    f = d.Fd + d.wc - d.Qb;
  a = Math.min(a, -d.Jc);
  c = Math.min(c, -d.wc);
  a = Math.max(a, -e);
  c = Math.max(c, -f);
  this.scrollX = a;
  this.scrollY = c;
  this.Aa &&
    (Fa(this.Aa.Jd, -(a + d.Jc) * this.Aa.Jd.ratio),
    Fa(this.Aa.Zd, -(c + d.wc) * this.Aa.Zd.ratio));
  a += d.uc;
  c += d.Hc;
  this.translate(a, c);
};
h.bb.Xw = function (a) {
  var c = 0,
    d = 0;
  a && ((c = a.ll()), (d = a.mc));
  return new h.g.le(c, d);
};
h.bb.bD = function (a, c) {
  return Fc(a) ? h.bb.aD(a, c) : h.bb.Vw(a);
};
h.bb.Vw = function (a) {
  var c = Wa(a),
    d = a.scale;
  a = c.top * d;
  var e = c.bottom * d,
    f = c.left * d;
  c = c.right * d;
  return { top: a, bottom: e, left: f, right: c, width: c - f, height: e - a };
};
h.bb.aD = function (a, c) {
  a = h.bb.Vw(a);
  var d = c.width;
  c = c.height;
  var e = d / 2,
    f = c / 2,
    g = Math.min(a.left - e, a.right - d),
    k = Math.min(a.top - f, a.bottom - c);
  return {
    left: g,
    top: k,
    height: Math.max(a.bottom + f, a.top + c) - k,
    width: Math.max(a.right + e, a.left + d) - g,
  };
};
h.bb.kD = function () {
  var a = h.bb.Xw(this.wa),
    c = h.bb.Xw(this.ma),
    d = h.EF(x(this)),
    e = { height: d.height, width: d.width };
  if (this.wa)
    if (this.jb == h.Ek || this.jb == h.dn) e.height -= a.height;
    else {
      if (this.jb == h.me || this.jb == h.Dk) e.width -= a.width;
    }
  else if (this.ma)
    if (this.jb == h.Ek || this.jb == h.dn) e.height -= c.height;
    else if (this.jb == h.me || this.jb == h.Dk) e.width -= c.width;
  var f = h.bb.bD(this, e),
    g = 0;
  this.wa && this.jb == h.me
    ? (g = a.width)
    : this.ma && this.jb == h.me && (g = c.width);
  var k = 0;
  this.wa && this.jb == h.Ek
    ? (k = a.height)
    : this.ma && this.jb == h.Ek && (k = c.height);
  return {
    Fd: f.height,
    $e: f.width,
    wc: f.top,
    Jc: f.left,
    Qb: e.height,
    Eb: e.width,
    Db: -this.scrollY,
    Bb: -this.scrollX,
    Hc: k,
    uc: g,
    iK: d.height,
    jK: d.width,
    Yy: a.width,
    kK: a.height,
    jb: this.jb,
    nJ: c.width,
    mJ: c.height,
  };
};
h.bb.tF = function (a) {
  var c = this.od();
  "number" == typeof a.x && (this.scrollX = -c.$e * a.x - c.Jc);
  "number" == typeof a.y && (this.scrollY = -c.Fd * a.y - c.wc);
  this.translate(this.scrollX + c.uc, this.scrollY + c.Hc);
};
b = h.bb.prototype;
b.Mc = function (a) {
  return h.bb.u.Mc.call(this, a);
};
b.qb = function (a) {
  return h.bb.u.qb.call(this, a);
};
b.jn = function (a) {
  this.Oo.push(a);
  h.bb.u.jn.call(this, a);
};
b.Ho = function (a) {
  h.g.Jk(this.Oo, a);
  h.bb.u.Ho.call(this, a);
};
b.hc = function (a) {
  var c = !this.Ws && a;
  this.Ws = a;
  c && Za(this);
};
b.clear = function () {
  this.hc(!1);
  h.bb.u.clear.call(this);
  this.Oo = [];
  this.hc(!0);
};
function Gc(a, c) {
  if ("function" != typeof c)
    throw TypeError("Button callbacks must be functions.");
  a.Mw.CREATE_VARIABLE = c;
}
function xc(a, c, d) {
  if ("function" != typeof d)
    throw TypeError("Toolbox category callbacks must be functions.");
  a.st[c] = d;
}
b.Kg = function (a) {
  var c =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    d = this.xc;
  return d
    ? c && d.Qh
      ? (console.warn("Tried to start the same gesture twice."),
        d.cancel(),
        null)
      : d
    : c
    ? (this.xc = new h.Vc(a, this))
    : null;
};
function bc(a) {
  a.xc && a.xc.cancel();
}
h.lk = function (a) {
  a.od = this.mr.bind(this);
  a.Vl = this.sF.bind(this);
  this.o = new h.bb(a);
  this.o.fg = !0;
  this.o.$b(this.gg);
  this.J = !!a.J;
  this.Ld = !1;
  this.mh = a.jb;
  this.Wq = [];
  this.lo = [];
  this.Kk = [];
  this.Rc = [];
  this.Fs = [];
  this.ak = this.o.rb.aa().cn;
  this.Pa = null;
};
b = h.lk.prototype;
b.ej = !0;
b.gg = !1;
b.Fh = !0;
b.ub = 8;
b.yg = h.lk.prototype.ub;
b.tA = 3 * h.lk.prototype.yg;
b.uA = 3 * h.lk.prototype.yg;
b.Np = 2;
b.kb = 0;
b.mc = 0;
b.HC = 70;
b.Va = function (a) {
  this.O = h.g.j.K(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.oc = h.g.j.K(h.g.F.Pe, { class: "blocklyFlyoutBackground" }, this.O);
  this.O.appendChild(this.o.Va());
  this.o.pc.subscribe(this.oc, "flyoutBackgroundColour", "fill");
  this.o.pc.subscribe(this.oc, "flyoutOpacity", "fill-opacity");
  tc(this.o.sd, new h.Km());
  return this.O;
};
b.Fa = function (a) {
  this.Pa = a;
  this.o.Pa = a;
  this.Aa = new h.Ma(this.o, this.Ld, !1, "blocklyFlyoutScrollbar");
  this.Ia();
  Array.prototype.push.apply(this.Wq, h.Ca(this.O, "wheel", this, this.TF));
  this.ej || ((this.Kn = this.Xq.bind(this)), F(this.Pa, this.Kn));
  Array.prototype.push.apply(
    this.Wq,
    h.Ca(this.oc, "mousedown", this, this.bh)
  );
  this.o.Kg = this.Pa.Kg.bind(this.Pa);
  this.o.et(this.Pa.Qa);
  a = this.o;
  a.Rj = new h.Yp(a);
};
b.I = function () {
  this.Ia();
  h.sb(this.Wq);
  this.Kn && (ib(this.Pa, this.Kn), (this.Kn = null));
  this.Aa && (this.Aa.I(), (this.Aa = null));
  this.o &&
    (this.o.pc.unsubscribe(this.oc),
    (this.o.Pa = null),
    this.o.I(),
    (this.o = null));
  this.O && (h.g.j.removeNode(this.O), (this.O = null));
  this.Pa = this.oc = null;
};
b.ll = function () {
  return this.kb;
};
b.isVisible = function () {
  return this.gg;
};
b.$b = function (a) {
  var c = a != this.isVisible();
  this.gg = a;
  c && this.nm();
};
b.pi = function (a) {
  var c = a != this.Fh;
  this.Fh = a;
  c && this.nm();
};
b.nm = function () {
  var a = this.Fh ? this.isVisible() : !1;
  this.O.style.display = a ? "block" : "none";
  this.Aa.pi(a);
};
b.Ia = function () {
  if (this.isVisible()) {
    this.$b(!1);
    for (var a = 0, c; (c = this.Rc[a]); a++) h.sb(c);
    this.Rc.length = 0;
    this.gh && (ib(this.o, this.gh), (this.gh = null));
  }
};
b.show = function (a) {
  this.o.hc(!1);
  this.Ia();
  Hc(this);
  "string" == typeof a && (a = Ic(this, a));
  this.$b(!0);
  a = h.g.va.qw(a);
  a = Jc(this, a);
  Kc(this, a.nC, a.TC);
  this.Rc.push(
    h.Ca(this.oc, "mouseover", this, function () {
      for (var c = this.o.qb(!1), d = 0, e; (e = c[d]); d++) e.Ql();
    })
  );
  this.Ld ? (this.mc = 0) : (this.kb = 0);
  this.o.hc(!0);
  this.Ks();
  this.Xq();
  this.position();
  this.gh = this.Ks.bind(this);
  F(this.o, this.gh);
};
function Jc(a, c) {
  var d = [],
    e = [];
  a.Fs.length = 0;
  for (var f = a.Ld ? a.tA : a.uA, g = 0, k; (k = c[g]); g++) {
    if (k.custom) {
      var l = Ic(a, k.custom);
      l = h.g.va.qw(l);
      c.splice.apply(c, [g, 1].concat(l));
      k = c[g];
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
          ? ((k = h.N.Ee(n)), (m.blockxml = k))
          : m.type &&
            ((k = h.g.xml.createElement("xml")),
            k.setAttribute("type", m.type),
            k.setAttribute("disabled", m.disabled),
            (m.blockxml = k));
        if (!k)
          throw Error(
            "Error: Invalid block definition. Block definition must have blockxml or type."
          );
        m = k;
        k = a;
        n = h.N.sj(m, k.o);
        n.isEnabled() || k.Fs.push(n);
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
        l = Lc(a, k, !0);
        d.push({ type: "button", button: l });
        e.push(f);
        break;
      case "BUTTON":
        (l = Lc(a, k, !1)), d.push({ type: "button", button: l }), e.push(f);
    }
  }
  return { nC: d, TC: e };
}
function Ic(a, c) {
  c = a.o.Pa.st[c] || null;
  if ("function" != typeof c)
    throw TypeError(
      "Couldn't find a callback function when opening a toolbox category."
    );
  a = c(a.o.Pa);
  if (!Array.isArray(a))
    throw new TypeError(
      "Result of toolbox category callback must be an array."
    );
  return a;
}
function Lc(a, c, d) {
  if (!h.sA) throw Error("Missing require for Blockly.FlyoutButton");
  return new h.sA(a.o, a.Pa, c, d);
}
function Hc(a) {
  for (var c = a.o.qb(!1), d = 0, e; (e = c[d]); d++) e.C == a.o && e.I(!1, !1);
  for (d = 0; d < a.lo.length; d++)
    if ((c = a.lo[d])) h.G.vt(c), h.g.j.removeNode(c);
  for (d = a.lo.length = 0; (c = a.Kk[d]); d++) c.I();
  a.Kk.length = 0;
  a.o.Rj.clear();
}
function Mc(a, c) {
  return function (d) {
    var e = a.Pa.Kg(d);
    e && (Ab(e, c), zb(e, d, a));
  };
}
b.bh = function (a) {
  var c = this.Pa.Kg(a);
  c && zb(c, a, this);
};
function qb(a, c) {
  var d = null;
  h.h.disable();
  var e = a.Pa.Mh();
  a.Pa.hc(!1);
  try {
    var f = a.Pa;
    if (!c.qa()) throw Error("oldBlock is not rendered.");
    var g = h.N.Qf(c, !0);
    f.hc(!1);
    var k = h.N.sj(g, f);
    if (!k.qa()) throw Error("block is not rendered.");
    var l = h.g.kl(f.Ab),
      m = h.g.kl(a.o.Ab),
      n = c.Wa();
    n.scale(a.o.scale);
    var p = h.g.T.sum(m, n),
      r = h.g.T.Yk(p, l);
    r.scale(1 / f.scale);
    k.moveBy(r.x, r.y);
    d = k;
  } finally {
    h.h.enable();
  }
  h.dc();
  c = h.la.Sw(a.Pa, e);
  if (h.h.isEnabled()) {
    h.h.ta(!0);
    for (e = 0; e < c.length; e++) h.h.Ea(new h.h.Bd(c[e]));
    h.h.Ea(new h.h.$d(d));
  }
  a.ej ? a.Ia() : a.Xq();
  return d;
}
b.Xq = function () {
  for (var a = this.o.qb(!1), c = 0, d; (d = a[c]); c++)
    if (-1 == this.Fs.indexOf(d))
      for (var e = fb(this.Pa, h.g.er(d)); d; ) d.sf(e), (d = u(d));
};
b.Ks = function () {
  this.gh && ib(this.o, this.gh);
  this.o.scale = this.Pa.scale;
  for (var a = 0, c = this.o.qb(!1), d = 0, e; (e = c[d]); d++) {
    var f = y(e).width;
    e.M && (f -= this.ak);
    a = Math.max(a, f);
  }
  for (d = 0; (e = this.Kk[d]); d++) a = Math.max(a, e.width);
  a += 1.5 * this.yg + this.ak;
  a *= this.o.scale;
  a += h.Ma.nc;
  if (this.kb != a) {
    for (d = 0; (e = c[d]); d++) {
      if (this.J) {
        f = e.Wa().x;
        var g = a / this.o.scale - this.yg;
        e.M || (g -= this.ak);
        e.moveBy(g - f, 0);
      }
      e.Nw &&
        ((f = e.Nw),
        (g = e),
        (e = y(g)),
        f.setAttribute("width", e.width),
        f.setAttribute("height", e.height),
        (g = g.Wa()),
        f.setAttribute("y", g.y),
        f.setAttribute("x", this.J ? g.x - e.width : g.x));
    }
    if (this.J)
      for (d = 0; (e = this.Kk[d]); d++)
        (c = e.uJ().y),
          e.moveTo(a / this.o.scale - e.width - this.yg - this.ak, c);
    this.Pa.jb != this.mh ||
      this.mh != h.me ||
      this.Pa.wa ||
      this.Pa.translate(this.Pa.scrollX + a, this.Pa.scrollY);
    this.kb = a;
    this.position();
  }
  this.gh && F(this.o, this.gh);
};
function ub(a) {
  return a.Aa ? a.Aa.isVisible() : !1;
}
b.Nb = function (a) {
  return this.o.pb().Nb(a);
};
h.$ = {};
h.$.Td = null;
h.$.Fn = null;
h.$.Ae = "";
h.$.Fe = "";
h.$.Va = function () {
  h.$.eb ||
    ((h.$.eb = document.createElement("div")),
    (h.$.eb.className = "blocklyWidgetDiv"),
    (h.Bo || document.body).appendChild(h.$.eb));
};
h.$.show = function (a, c, d) {
  h.$.Ia();
  h.$.Td = a;
  h.$.Fn = d;
  a = h.$.eb;
  a.style.direction = c ? "rtl" : "ltr";
  a.style.display = "block";
  c = h.$f();
  h.$.Ae = c.rb.ve();
  h.$.Fe = c.cg().ve();
  h.g.j.Rb(a, h.$.Ae);
  h.g.j.Rb(a, h.$.Fe);
};
h.$.Ia = function () {
  if (h.$.isVisible()) {
    h.$.Td = null;
    var a = h.$.eb;
    a.style.display = "none";
    a.style.left = "";
    a.style.top = "";
    h.$.Fn && h.$.Fn();
    h.$.Fn = null;
    a.textContent = "";
    h.$.Ae && (h.g.j.cd(a, h.$.Ae), (h.$.Ae = ""));
    h.$.Fe && (h.g.j.cd(a, h.$.Fe), (h.$.Fe = ""));
    Oa(h.$f());
  }
};
h.$.isVisible = function () {
  return !!h.$.Td;
};
h.$.rl = function (a) {
  h.$.Td == a && h.$.Ia();
};
h.$.Ll = function (a, c, d) {
  h.$.eb.style.left = a + "px";
  h.$.eb.style.top = c + "px";
  h.$.eb.style.height = d + "px";
};
h.$.yE = function (a, c, d, e) {
  var f = h.$.ZB(a, c, d);
  a = h.$.YB(a, c, d, e);
  0 > f ? h.$.Ll(a, 0, d.height + f) : h.$.Ll(a, f, d.height);
};
h.$.YB = function (a, c, d, e) {
  if (e)
    return (
      (c = Math.max(c.right - d.width, a.left)), Math.min(c, a.right - d.width)
    );
  c = Math.min(c.left, a.right - d.width);
  return Math.max(c, a.left);
};
h.$.ZB = function (a, c, d) {
  return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom;
};
h.Nf = function (a) {
  h.Nf.u.constructor.call(this, a);
};
h.g.object.U(h.Nf, h.lk);
h.Nf.SJ = "verticalFlyout";
b = h.Nf.prototype;
b.mr = function () {
  if (!this.isVisible()) return null;
  try {
    var a = this.o.Ab.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var c = this.Np,
    d = this.mc - 2 * this.Np,
    e = this.kb;
  this.J || (e -= this.Np);
  return {
    Fd: a.height * this.o.scale + 2 * this.yg,
    $e: a.width * this.o.scale + 2 * this.yg,
    wc: a.y,
    Jc: a.x,
    Qb: d,
    Eb: e,
    Db: -this.o.scrollY + a.y,
    Bb: -this.o.scrollX,
    Hc: c,
    uc: 0,
  };
};
b.sF = function (a) {
  var c = this.mr();
  c &&
    ("number" == typeof a.y && (this.o.scrollY = -c.Fd * a.y),
    this.o.translate(this.o.scrollX + c.uc, this.o.scrollY + c.Hc));
};
b.position = function () {
  if (this.isVisible()) {
    var a = this.Pa.od();
    if (a) {
      this.mc = a.Qb;
      var c = this.kb - this.ub;
      a = a.Qb - 2 * this.ub;
      var d = this.mh == h.Dk,
        e = c + this.ub;
      e = ["M " + (d ? e : 0) + ",0"];
      e.push("h", d ? -c : c);
      e.push(
        "a",
        this.ub,
        this.ub,
        0,
        0,
        d ? 0 : 1,
        d ? -this.ub : this.ub,
        this.ub
      );
      e.push("v", Math.max(0, a));
      e.push(
        "a",
        this.ub,
        this.ub,
        0,
        0,
        d ? 0 : 1,
        d ? this.ub : -this.ub,
        this.ub
      );
      e.push("h", d ? c : -c);
      e.push("z");
      this.oc.setAttribute("d", e.join(" "));
      c = (c = this.Pa.od())
        ? this.Pa.jb == this.mh
          ? c.Yy
            ? this.mh == h.me
              ? c.Yy
              : c.Eb - this.kb
            : this.mh == h.me
            ? 0
            : c.Eb
          : this.mh == h.me
          ? 0
          : c.Eb + c.uc - this.kb
        : 0;
      a = this.mc;
      this.O.setAttribute("width", this.kb);
      this.O.setAttribute("height", a);
      "svg" == this.O.tagName
        ? h.g.j.Tl(this.O, "translate(" + c + "px,0px)")
        : this.O.setAttribute("transform", "translate(" + c + ",0)");
      this.Aa &&
        ((this.Aa.ys = new h.g.T(c, 0)),
        this.Aa.resize(),
        this.Aa.setPosition(this.Aa.position.x, this.Aa.position.y));
    }
  }
};
b.Iy = function () {
  this.Aa.set(0);
};
b.TF = function (a) {
  var c = h.g.ix(a);
  if (c.y) {
    var d = this.mr();
    c = d.Db - d.wc + c.y;
    c = Math.min(c, d.Fd - d.Qb);
    c = Math.max(c, 0);
    this.Aa.set(c);
    h.$.Ia();
    h.D.Rn();
  }
  a.preventDefault();
  a.stopPropagation();
};
function Kc(a, c, d) {
  a.o.scale = a.Pa.scale;
  for (var e = a.yg, f = a.J ? e : e + a.ak, g = 0, k; (k = c[g]); g++)
    if ("block" == k.type) {
      k = k.block;
      for (var l = q(k, !1), m = 0, n; (n = l[m]); m++) n.Qc = !0;
      k.La();
      n = k.qa();
      l = y(k);
      m = k.M ? f - a.ak : f;
      k.moveBy(m, e);
      var p = a,
        r = k,
        t = g;
      m = h.g.j.K(
        h.g.F.Ad,
        {
          "fill-opacity": 0,
          x: a.J ? m - l.width : m,
          y: e,
          height: l.height,
          width: l.width,
        },
        null
      );
      m.Yd = r;
      h.G.fj(m);
      p.o.Ab.insertBefore(m, r.qa());
      r.Nw = m;
      p.lo[t] = m;
      p = a;
      p.Rc.push(h.Ca(n, "mousedown", null, Mc(p, k)));
      p.Rc.push(h.Ca(m, "mousedown", null, Mc(p, k)));
      p.Rc.push(h.Xb(n, "mouseenter", k, k.hn));
      p.Rc.push(h.Xb(n, "mouseleave", k, k.Ql));
      p.Rc.push(h.Xb(m, "mouseenter", k, k.hn));
      p.Rc.push(h.Xb(m, "mouseleave", k, k.Ql));
      e += l.height + d[g];
    } else
      "button" == k.type &&
        ((l = a),
        (m = k.button),
        (n = f),
        (p = e),
        (r = m.Va()),
        m.moveTo(n, p),
        m.show(),
        l.Rc.push(h.Ca(r, "mousedown", l, l.bh)),
        l.Kk.push(m),
        (e += k.button.height + d[g]));
}
b.il = function () {
  if (!this.O) return null;
  var a = this.O.getBoundingClientRect(),
    c = a.left;
  return this.mh == h.me
    ? new h.g.Rect(-1e9, 1e9, -1e9, c + a.width)
    : new h.g.Rect(-1e9, 1e9, c, 1e9);
};
h.A.register(h.A.Z.qA, h.A.jp, h.Nf);
h.Pt = function (a) {
  this.Qk = a;
  this.Va();
};
b = h.Pt.prototype;
b.tb = null;
b.df = null;
b.Qk = null;
b.ih = 1;
b.gm = null;
b.Va = function () {
  this.tb ||
    ((this.tb = h.g.j.K(
      h.g.F.Wi,
      {
        xmlns: h.g.j.$m,
        "xmlns:html": h.g.j.pp,
        "xmlns:xlink": h.g.j.jd,
        version: "1.1",
        class: "blocklyBlockDragSurface",
      },
      this.Qk
    )),
    (this.df = h.g.j.K(h.g.F.Uc, {}, this.tb)));
};
function tb(a, c) {
  if (a.df.childNodes.length) throw Error("Already dragging a block.");
  a.df.appendChild(c);
  a.tb.style.display = "block";
  a.gm = new h.g.T(0, 0);
}
b.yi = function (a, c) {
  this.gm = new h.g.T(a * this.ih, c * this.ih);
  a = this.gm.x;
  c = this.gm.y;
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.tb.style.display = "block";
  h.g.j.Tl(this.tb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.rr = function () {
  var a = h.g.xe(this.tb);
  return new h.g.T(a.x / this.ih, a.y / this.ih);
};
b.Zb = function () {
  return this.df;
};
b.rn = function (a) {
  a
    ? a.appendChild(this.df.firstChild)
    : this.df.removeChild(this.df.firstChild);
  this.tb.style.display = "none";
  if (this.df.childNodes.length) throw Error("Drag group was not cleared.");
  this.gm = null;
};
h.ae = {};
h.ae.Er = !1;
h.ae.register = function (a) {
  if (h.ae.Er) throw Error("CSS already injected");
  Array.prototype.push.apply(h.ae.hp, a);
  a.length = 0;
};
h.ae.Qg = function (a, c) {
  if (!h.ae.Er) {
    h.ae.Er = !0;
    var d = h.ae.hp.join("\n");
    h.ae.hp.length = 0;
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
h.ae.hp = [
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
h.D = function () {};
h.D.kq = null;
h.D.Td = null;
h.D.zy = null;
h.D.vm = 16;
h.D.Mt = 1;
h.D.Ht = 12;
h.D.Wu = 16;
h.D.Yo = 0.25;
h.D.bq = null;
h.D.ki = null;
h.D.Ae = "";
h.D.Fe = "";
h.D.Va = function () {
  if (!h.D.Le) {
    var a = document.createElement("div");
    a.className = "blocklyDropDownDiv";
    (h.Bo || document.body).appendChild(a);
    h.D.Le = a;
    var c = document.createElement("div");
    c.className = "blocklyDropDownContent";
    a.appendChild(c);
    h.D.Uf = c;
    c = document.createElement("div");
    c.className = "blocklyDropDownArrow";
    a.appendChild(c);
    h.D.Cd = c;
    h.D.Le.style.opacity = 0;
    h.D.Le.style.transition =
      "transform " + h.D.Yo + "s, opacity " + h.D.Yo + "s";
    a.addEventListener("focusin", function () {
      h.g.j.Rb(a, "blocklyFocused");
    });
    a.addEventListener("focusout", function () {
      h.g.j.cd(a, "blocklyFocused");
    });
  }
};
h.D.pF = function (a) {
  h.D.kq = a;
};
h.D.cD = function () {
  return h.D.Uf;
};
h.D.eC = function () {
  h.D.Uf.textContent = "";
  h.D.Uf.style.width = "";
};
h.D.Be = function (a, c) {
  h.D.Le.style.backgroundColor = a;
  h.D.Le.style.borderColor = c;
};
h.D.eK = function (a, c, d, e) {
  return h.D.Ny(h.D.gx(c), a, d, e);
};
h.D.vF = function (a, c) {
  h.D.zy = !0;
  h.D.Ny(h.D.hx(a), a, c, void 0);
};
h.D.gx = function (a) {
  var c = a.qa(),
    d = c.getBBox(),
    e = a.C.scale;
  a = d.height * e;
  d = d.width * e;
  c = h.g.style.Oh(c);
  return new h.g.Rect(c.y, c.y + a, c.x, c.x + d);
};
h.D.hx = function (a) {
  if (a.Tb)
    (c = a.Tb.getBoundingClientRect()),
      (a = h.g.style.Oh(a.Tb)),
      (e = c.width),
      (c = c.height);
  else {
    var c = y(a.L);
    var d = a.L.C.scale;
    a = h.g.style.Oh(Db(a));
    var e = c.width * d;
    c = c.height * d;
    h.g.userAgent.vA
      ? ((a.x += 1.5 * d), (a.y += 1.5 * d))
      : h.g.userAgent.vh ||
        h.g.userAgent.ee ||
        ((a.x -= 0.5 * d), (a.y -= 0.5 * d));
    e += 1 * d;
    c += 1 * d;
  }
  d = new h.g.Rect(a.y, a.y + c, a.x, a.x + e);
  return new h.g.Rect(d.top, d.bottom, d.left, d.right);
};
h.D.Ny = function (a, c, d, e) {
  var f = a.left + (a.right - a.left) / 2,
    g = a.bottom;
  a = a.top;
  e && (a += e);
  e = c.V();
  for (var k = e.C; k.options.bd; ) k = k.options.bd;
  h.D.pF(x(k).parentNode);
  return h.D.show(c, e.J, f, g, f, a, d);
};
h.D.show = function (a, c, d, e, f, g, k) {
  h.D.Td = a;
  h.D.ki = k || null;
  a = h.D.Le;
  a.style.direction = c ? "rtl" : "ltr";
  c = h.$f();
  h.D.Ae = c.rb.ve();
  h.D.Fe = c.cg().ve();
  h.g.j.Rb(a, h.D.Ae);
  h.g.j.Rb(a, h.D.Fe);
  return h.D.Ll(d, e, f, g);
};
h.D.WC = function () {
  var a = h.g.style.Oh(h.D.kq),
    c = h.g.style.ag(h.D.kq);
  return {
    left: a.x,
    right: a.x + c.width,
    top: a.y,
    bottom: a.y + c.height,
    width: c.width,
    height: c.height,
  };
};
h.D.gD = function (a, c, d, e) {
  var f = h.D.WC(),
    g = h.g.style.ag(h.D.Le);
  return c + g.height < f.bottom
    ? h.D.ex(a, c, f, g)
    : e - g.height > f.top
    ? h.D.bx(d, e, f, g)
    : c + g.height < document.documentElement.clientHeight
    ? h.D.ex(a, c, f, g)
    : e - g.height > document.documentElement.clientTop
    ? h.D.bx(d, e, f, g)
    : h.D.hD(a, f, g);
};
h.D.ex = function (a, c, d, e) {
  a = h.D.qr(a, d.left, d.right, e.width);
  return {
    Cr: a.rj,
    Dr: c,
    Yq: a.rj,
    Zq: c + h.D.Wu,
    cj: a.cj,
    eq: -(h.D.vm / 2 + h.D.Mt),
    ln: !0,
    cq: !0,
  };
};
h.D.bx = function (a, c, d, e) {
  a = h.D.qr(a, d.left, d.right, e.width);
  return {
    Cr: a.rj,
    Dr: c - e.height,
    Yq: a.rj,
    Zq: c - e.height - h.D.Wu,
    cj: a.cj,
    eq: e.height - 2 * h.D.Mt - h.D.vm / 2,
    ln: !1,
    cq: !0,
  };
};
h.D.hD = function (a, c, d) {
  a = h.D.qr(a, c.left, c.right, d.width);
  return {
    Cr: a.rj,
    Dr: 0,
    Yq: a.rj,
    Zq: 0,
    ln: null,
    cj: null,
    eq: null,
    cq: !1,
  };
};
h.D.qr = function (a, c, d, e) {
  var f = a;
  a = h.g.Od.Lk(c, a - e / 2, d - e);
  f -= h.D.vm / 2;
  c = h.g.Od.Lk(h.D.Ht, f - a, e - h.D.Ht - h.D.vm);
  return { cj: c, rj: a };
};
h.D.isVisible = function () {
  return !!h.D.Td;
};
h.D.rl = function (a, c) {
  h.D.Td === a && (c ? h.D.Rn() : h.D.Ia());
};
h.D.Ia = function () {
  var a = h.D.Le;
  a.style.transform = "translate(0, 0)";
  a.style.opacity = 0;
  h.D.bq = setTimeout(function () {
    h.D.Rn();
  }, 1e3 * h.D.Yo);
  h.D.ki && (h.D.ki(), (h.D.ki = null));
};
h.D.Rn = function () {
  if (h.D.isVisible()) {
    h.D.bq && clearTimeout(h.D.bq);
    var a = h.D.Le;
    a.style.transform = "";
    a.style.left = "";
    a.style.top = "";
    a.style.opacity = 0;
    a.style.display = "none";
    a.style.backgroundColor = "";
    a.style.borderColor = "";
    h.D.ki && (h.D.ki(), (h.D.ki = null));
    h.D.eC();
    h.D.Td = null;
    h.D.Ae && (h.g.j.cd(a, h.D.Ae), (h.D.Ae = ""));
    h.D.Fe && (h.g.j.cd(a, h.D.Fe), (h.D.Fe = ""));
    Oa(h.$f());
  }
};
h.D.Ll = function (a, c, d, e) {
  a = h.D.gD(a, c, d, e);
  a.cq
    ? ((h.D.Cd.style.display = ""),
      (h.D.Cd.style.transform =
        "translate(" + a.cj + "px," + a.eq + "px) rotate(45deg)"),
      h.D.Cd.setAttribute(
        "class",
        a.ln
          ? "blocklyDropDownArrow blocklyArrowTop"
          : "blocklyDropDownArrow blocklyArrowBottom"
      ))
    : (h.D.Cd.style.display = "none");
  c = Math.floor(a.Cr);
  d = Math.floor(a.Dr);
  e = Math.floor(a.Yq);
  var f = Math.floor(a.Zq),
    g = h.D.Le;
  g.style.left = c + "px";
  g.style.top = d + "px";
  g.style.display = "block";
  g.style.opacity = 1;
  g.style.transform = "translate(" + (e - c) + "px," + (f - d) + "px)";
  return !!a.ln;
};
h.D.VJ = function () {
  if (h.D.Td) {
    var a = h.D.Td,
      c = a.V();
    a = h.D.zy ? h.D.hx(a) : h.D.gx(c);
    c = a.left + (a.right - a.left) / 2;
    h.D.Ll(c, a.bottom, c, a.top);
  } else h.D.Ia();
};
h.Qg = function (a, c) {
  h.$B();
  "string" == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a));
  if (!a || !h.g.j.containsNode(document, a))
    throw Error("Error: container is not in current document.");
  c = new h.gd(c || {});
  var d = document.createElement("div");
  d.className = "injectionDiv";
  d.tabIndex = 0;
  h.g.Hb.Wj(d, h.g.Hb.State.MA, h.P.WORKSPACE_ARIA_LABEL);
  a.appendChild(d);
  a = h.Sk(d, c);
  var e = new h.Pt(d),
    f = new h.Nv(d),
    g = h.qC(a, c, e, f);
  h.ED(g);
  h.Bl = g;
  h.im(g);
  d.addEventListener("focusin", function () {
    h.Bl = g;
  });
  return g;
};
h.Sk = function (a, c) {
  a.setAttribute("dir", "LTR");
  h.ae.Qg(c.vD, c.Fo);
  a = h.g.j.K(
    h.g.F.Wi,
    {
      xmlns: h.g.j.$m,
      "xmlns:html": h.g.j.pp,
      "xmlns:xlink": h.g.j.jd,
      version: "1.1",
      class: "blocklySvg",
      tabindex: "0",
    },
    a
  );
  var d = h.g.j.K(h.g.F.Yt, {}, a);
  c.xr = h.xh.Va(String(Math.random()).substring(2), c.px, d);
  return a;
};
h.qC = function (a, c, d, e) {
  c.bd = null;
  var f = new h.bb(c, d, e);
  c = f.options;
  f.scale = c.ab.CF;
  a.appendChild(f.Va("blocklyMainBackground"));
  h.g.j.Rb(aa(f), f.rb.ve());
  h.g.j.Rb(aa(f), f.cg().ve());
  !c.ol && c.$h && ((d = Dc(f)), h.g.j.Dj(d, a));
  c.ux && Bc(f);
  c.ab && c.ab.controls && Cc(f);
  f.pc.subscribe(a, "workspaceBackgroundColour", "background-color");
  f.translate(0, 0);
  c.readOnly ||
    f.zc() ||
    F(f, function (g) {
      if (!f.rd() && !f.zc() && -1 != h.h.Bz.indexOf(g.type)) {
        var k = Object.create(null),
          l = f.od(),
          m = f.scale;
        k.J = f.J;
        k.Bb = l.Bb / m;
        k.Db = l.Db / m;
        k.iz = (l.Bb + l.Eb) / m;
        k.hz = (l.Db + l.Qb) / m;
        Fc(f)
          ? ((l = Wa(f)),
            (k.Jc = l.left),
            (k.wc = l.top),
            (k.pw = l.right),
            (k.mw = l.bottom))
          : ((k.Jc = l.Jc / m),
            (k.wc = l.wc / m),
            (k.pw = (l.Jc + l.$e) / m),
            (k.mw = (l.wc + l.Fd) / m));
        if (k.wc < k.Db || k.mw > k.hz || k.Jc < k.Bb || k.pw > k.iz) {
          l = null;
          g && ((l = h.h.Zb()), h.h.ta(g.group));
          switch (g.type) {
            case h.h.Zo:
            case h.h.Lt:
              var n = f.Mc(g.mb);
              n && (n = n.Oc());
              break;
            case h.h.Bm:
            case h.h.Cm:
              n = f.wn[g.Xe] || null;
          }
          if (n) {
            m = nc(n);
            m.height = m.bottom - m.top;
            m.width = m.right - m.left;
            var p = k.Db,
              r = k.hz - m.height;
            r = Math.max(p, r);
            p = h.g.Od.Lk(p, m.top, r) - m.top;
            r = k.Bb;
            var t = k.iz - m.width;
            k.J ? (r = Math.min(t, r)) : (t = Math.max(r, t));
            n.moveBy(h.g.Od.Lk(r, m.left, t) - m.left, p);
          }
          g &&
            (!g.group &&
              n &&
              console.warn(
                "Moved object in bounds but there was no event group. This may break undo."
              ),
            null !== l && h.h.ta(l));
        }
      }
    });
  h.im(f);
  h.$.Va();
  h.D.Va();
  h.G.Va();
  return f;
};
h.ED = function (a) {
  var c = a.options,
    d = x(a);
  h.Ca(d.parentNode, "contextmenu", null, function (f) {
    h.g.$n(f) || f.preventDefault();
  });
  d = h.Ca(window, "resize", null, function () {
    h.dc(!0);
    h.im(a);
  });
  a.Io = d;
  h.Qg.TB();
  if (c.$h) {
    d = a.wa;
    var e = G(a, !0);
    d
      ? d.Fa()
      : e && (e.Fa(a), e.show(c.$h), "function" == typeof e.Iy && e.Iy());
  }
  d = h.Ma.nc;
  c.ux && (d = a.qc.Fa(d));
  c.ab && c.ab.controls && a.Ei.Fa(d);
  c.fc && c.fc.scrollbars
    ? ((a.Aa = new h.Bk(a)), a.Aa.resize())
    : a.Vl({ x: 0.5, y: 0.5 });
  c.xD && h.Qg.SD(c.Fo, a);
};
h.Qg.TB = function () {
  h.EC ||
    (h.Ca(document, "scroll", null, function () {
      for (var a = h.vb.getAll(), c = 0, d; (d = a[c]); c++) d.om && d.om();
    }),
    h.Ca(document, "keydown", null, h.ts),
    h.Xb(document, "touchend", null, h.Yg),
    h.Xb(document, "touchcancel", null, h.Yg),
    h.g.userAgent.nk &&
      h.Ca(window, "orientationchange", document, function () {
        h.im(h.$f());
      }));
  h.EC = !0;
};
h.Qg.SD = function (a, c) {
  function d() {
    for (; f.length; ) h.sb(f.pop());
    e.preload();
  }
  var e = c.Wc;
  e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
  e.load(
    [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"],
    "disconnect"
  );
  e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
  var f = [];
  f.push(h.Ca(document, "mousemove", null, d, !0));
  f.push(h.Ca(document, "touchstart", null, d, !0));
};
h.zd = function (a, c) {
  this.gz = c || "";
  this.Ey = Object.create(null);
  if (a) for (a = a.split(","), c = 0; c < a.length; c++) this.Ey[a[c]] = !0;
  this.reset();
};
h.zd.mp = "DEVELOPER_VARIABLE";
h.zd.prototype.reset = function () {
  this.cf = Object.create(null);
  this.vw = Object.create(null);
  this.Qa = null;
};
h.zd.prototype.et = function (a) {
  this.Qa = a;
};
function Nc(a, c) {
  var d = h.H.rm;
  if (c == h.$i) {
    var e = a;
    d.Qa
      ? (e = (e = d.Qa.Mg(e)) ? e.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (e = null));
    e && (a = e);
  }
  e = a.toLowerCase() + "_" + c;
  var f = c == h.$i || c == h.zd.mp ? d.gz : "";
  if (e in d.cf) return f + d.cf[e];
  a
    ? ((a = encodeURI(a.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(a[0]) && (a = "my_" + a))
    : (a = h.P.UNNAMED_KEY || "unnamed");
  for (var g = ""; d.vw[a + g] || a + g in d.Ey; ) g = g ? g + 1 : 2;
  a += g;
  d.vw[a] = !0;
  c = (c == h.$i || c == h.zd.mp ? d.gz : "") + a;
  d.cf[e] = c.substr(f.length);
  return c;
}
h.zd.Yf = function (a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
h.Za = {};
h.Za.Ku = h.Zu;
h.Za.Pz = "x";
h.Za.QB = function (a) {
  var c = db(a, "procedures_defnoreturn").map(function (d) {
    return d.wj();
  });
  a = db(a, "procedures_defreturn").map(function (d) {
    return d.wj();
  });
  c.sort(h.Za.Ay);
  a.sort(h.Za.Ay);
  return [c, a];
};
h.Za.Ay = function (a, c) {
  return a[0].toLowerCase().localeCompare(c[0].toLowerCase());
};
h.Za.OC = function (a, c) {
  if (c.Qc) return a;
  for (a = a || h.P.UNNAMED_KEY || "unnamed"; !h.Za.KD(a, c.C, c); ) {
    var d = a.match(/^(.*?)(\d+)$/);
    a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2";
  }
  return a;
};
h.Za.KD = function (a, c, d) {
  return !h.Za.MD(a, c, d);
};
h.Za.MD = function (a, c, d) {
  c = E(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e] != d && c[e].wj) {
      var f = c[e].wj();
      if (h.zd.Yf(f[0], a)) return !0;
    }
  return !1;
};
h.Za.UJ = function (a) {
  a = a.trim();
  var c = h.Za.OC(a, this.V()),
    d = this.getValue();
  if (d != a && d != c) {
    a = E(this.V().C, !1);
    for (var e = 0; e < a.length; e++) a[e].iF && a[e].iF(d, c);
  }
  return c;
};
h.Za.Lh = function (a) {
  function c(g, k) {
    for (var l = 0; l < g.length; l++) {
      var m = g[l][0],
        n = g[l][1],
        p = h.g.xml.createElement("block");
      p.setAttribute("type", k);
      p.setAttribute("gap", 16);
      var r = h.g.xml.createElement("mutation");
      r.setAttribute("name", m);
      p.appendChild(r);
      for (m = 0; m < n.length; m++) {
        var t = h.g.xml.createElement("arg");
        t.setAttribute("name", n[m]);
        r.appendChild(t);
      }
      d.push(p);
    }
  }
  var d = [];
  if (h.rc.procedures_defnoreturn) {
    var e = h.g.xml.createElement("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = h.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    f.appendChild(h.g.xml.createTextNode(h.P.PROCEDURES_DEFNORETURN_PROCEDURE));
    e.appendChild(f);
    d.push(e);
  }
  h.rc.procedures_defreturn &&
    ((e = h.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = h.g.xml.createElement("field")),
    f.setAttribute("name", "NAME"),
    f.appendChild(h.g.xml.createTextNode(h.P.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    d.push(e));
  h.rc.procedures_ifreturn &&
    ((e = h.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    d.push(e));
  d.length && d[d.length - 1].setAttribute("gap", 24);
  a = h.Za.QB(a);
  c(a[0], "procedures_callnoreturn");
  c(a[1], "procedures_callreturn");
  return d;
};
h.Za.bz = function (a) {
  for (
    var c = [], d = db(a, "procedures_mutatorarg"), e = 0, f;
    (f = d[e]);
    e++
  )
    c.push(bb(f, "NAME"));
  d = h.g.xml.createElement("xml");
  e = h.g.xml.createElement("block");
  e.setAttribute("type", "procedures_mutatorarg");
  f = h.g.xml.createElement("field");
  f.setAttribute("name", "NAME");
  c = h.g.xml.createTextNode(h.la.Rw(h.Za.Pz, c));
  f.appendChild(c);
  e.appendChild(f);
  d.appendChild(e);
  if ((c = h.g.va.rw(d))) {
    if (!a.options.$h)
      throw Error("Existing toolbox is null.  Can't create new toolbox.");
    if (h.g.va.ol(c)) {
      if (!a.wa)
        throw Error("Existing toolbox has no categories.  Can't change mode.");
      a.options.$h = c;
      a.wa.La(c);
    } else {
      if (!a.ma)
        throw Error("Existing toolbox has categories.  Can't change mode.");
      a.options.$h = c;
      a.ma.show(c);
    }
  } else if (a.options.$h) throw Error("Can't nullify an existing toolbox.");
};
h.Za.eE = function (a) {
  if (a.type == h.h.Ot && "mutator" === a.XI && a.Jr) {
    a = h.vb.hl(a.ac).Mc(a.mb);
    var c = a.type;
    if ("procedures_defnoreturn" == c || "procedures_defreturn" == c)
      (a = a.ze.o), h.Za.bz(a), F(a, h.Za.dE);
  }
};
h.Za.dE = function (a) {
  (a.type != h.h.Zo && a.type != h.h.Jt && a.type != h.h.yz) ||
    h.Za.bz(h.vb.hl(a.ac));
};
h.Za.XC = function (a, c) {
  var d = [];
  c = E(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e].iD) {
      var f = c[e].iD();
      f && h.zd.Yf(f, a) && d.push(c[e]);
    }
  return d;
};
h.Za.MJ = function (a) {
  var c = h.h.Oa,
    d = a.wj()[0],
    e = a.Rd(!0);
  a = h.Za.XC(d, a.C);
  d = 0;
  for (var f; (f = a[d]); d++) {
    var g = f.Rd();
    g = g && h.N.Hd(g);
    f.Xf(e);
    var k = f.Rd();
    k = k && h.N.Hd(k);
    g != k &&
      ((h.h.Oa = !1),
      h.h.Ea(new h.h.Gi(f, "mutation", null, g, k)),
      (h.h.Oa = c));
  }
};
h.Za.qJ = function (a, c) {
  c = c.qb(!1);
  for (var d = 0; d < c.length; d++)
    if (c[d].wj) {
      var e = c[d].wj();
      if (e && h.zd.Yf(e[0], a)) return c[d];
    }
  return null;
};
h.yb = {};
h.yb.names = {
  cA: "escape",
  uh: "delete",
  Hz: "copy",
  Nz: "cut",
  lB: "paste",
  DB: "undo",
  pB: "redo",
};
h.yb.OE = function () {
  var a = {
    name: h.yb.names.cA,
    Ka: function (c) {
      return !c.options.readOnly;
    },
    xa: function () {
      h.dc();
      return !0;
    },
  };
  h.Ra.A.register(a);
  I(h.g.R.du, a.name);
};
h.yb.Ms = function () {
  var a = {
    name: h.yb.names.uh,
    Ka: function (c) {
      return !c.options.readOnly && h.selected && h.selected.ad();
    },
    xa: function (c, d) {
      d.preventDefault();
      if (h.Ne.Th()) return !1;
      h.zw();
      return !0;
    },
  };
  h.Ra.A.register(a);
  I(h.g.R.uh, a.name);
  I(h.g.R.wz, a.name);
};
h.yb.GE = function () {
  var a = {
    name: h.yb.names.Hz,
    Ka: function (d) {
      return (
        !d.options.readOnly &&
        !h.Ne.Th() &&
        h.selected &&
        h.selected.ad() &&
        h.selected.zc()
      );
    },
    xa: function () {
      h.dc();
      h.wq(h.selected);
      return !0;
    },
  };
  h.Ra.A.register(a);
  var c = J(h.g.R.cp, [h.g.R.sg]);
  I(c, a.name);
  c = J(h.g.R.cp, [h.g.R.Fi]);
  I(c, a.name);
  c = J(h.g.R.cp, [h.g.R.Oi]);
  I(c, a.name);
};
h.yb.HE = function () {
  var a = {
    name: h.yb.names.Nz,
    Ka: function (d) {
      return (
        !d.options.readOnly &&
        !h.Ne.Th() &&
        h.selected &&
        h.selected.ad() &&
        h.selected.zc() &&
        !h.selected.C.fg
      );
    },
    xa: function () {
      h.wq(h.selected);
      h.zw();
      return !0;
    },
  };
  h.Ra.A.register(a);
  var c = J(h.g.R.gn, [h.g.R.sg]);
  I(c, a.name);
  c = J(h.g.R.gn, [h.g.R.Fi]);
  I(c, a.name);
  c = J(h.g.R.gn, [h.g.R.Oi]);
  I(c, a.name);
};
h.yb.ZE = function () {
  var a = {
    name: h.yb.names.lB,
    Ka: function (d) {
      return !d.options.readOnly && !h.Ne.Th();
    },
    xa: function () {
      return h.Do();
    },
  };
  h.Ra.A.register(a);
  var c = J(h.g.R.Xp, [h.g.R.sg]);
  I(c, a.name);
  c = J(h.g.R.Xp, [h.g.R.Fi]);
  I(c, a.name);
  c = J(h.g.R.Xp, [h.g.R.Oi]);
  I(c, a.name);
};
h.yb.Os = function () {
  var a = {
    name: h.yb.names.DB,
    Ka: function (d) {
      return !d.options.readOnly && !h.Ne.Th();
    },
    xa: function (d) {
      h.dc();
      hb(d, !1);
      return !0;
    },
  };
  h.Ra.A.register(a);
  var c = J(h.g.R.bj, [h.g.R.sg]);
  I(c, a.name);
  c = J(h.g.R.bj, [h.g.R.Fi]);
  I(c, a.name);
  c = J(h.g.R.bj, [h.g.R.Oi]);
  I(c, a.name);
};
h.yb.Ns = function () {
  var a = {
    name: h.yb.names.pB,
    Ka: function (d) {
      return !h.Ne.Th() && !d.options.readOnly;
    },
    xa: function (d) {
      h.dc();
      hb(d, !0);
      return !0;
    },
  };
  h.Ra.A.register(a);
  var c = J(h.g.R.bj, [h.g.R.If, h.g.R.sg]);
  I(c, a.name);
  c = J(h.g.R.bj, [h.g.R.If, h.g.R.Fi]);
  I(c, a.name);
  c = J(h.g.R.bj, [h.g.R.If, h.g.R.Oi]);
  I(c, a.name);
  c = J(h.g.R.IB, [h.g.R.sg]);
  I(c, a.name);
};
h.yb.JE = function () {
  h.yb.OE();
  h.yb.Ms();
  h.yb.GE();
  h.yb.HE();
  h.yb.ZE();
  h.yb.Os();
  h.yb.Ns();
};
h.Ra = function () {
  h.Ra.A = this;
  this.td = Object.create(null);
  this.Lj = Object.create(null);
  h.yb.JE();
  h.navigation.WE();
};
h.Ra.oo = { CI: h.g.R.If, jG: h.g.R.sg, YF: h.g.R.Fi, lH: h.g.R.Oi };
h.Ra.prototype.register = function (a, c) {
  if (this.td[a.name] && !c)
    throw Error('Shortcut with name "' + a.name + '" already exists.');
  this.td[a.name] = a;
};
h.Ra.prototype.unregister = function (a) {
  if (!this.td[a])
    return (
      console.warn('Keyboard shortcut with name "' + a + '" not found.'), !1
    );
  for (var c in this.Lj) {
    var d = c,
      e = this.Lj[d],
      f = e.indexOf(a);
    -1 < f && (e.splice(f, 1), 0 == e.length && delete this.Lj[d]);
  }
  delete this.td[a];
  return !0;
};
function I(a, c, d) {
  var e = h.Ra.A,
    f = e.Lj[a];
  if (f && !d)
    throw Error(
      'Shortcut with name "' + c + '" collides with shortcuts ' + f.toString()
    );
  f && d ? f.unshift(c) : (e.Lj[a] = [c]);
}
h.Ra.prototype.ts = function (a, c) {
  var d = "";
  for (e in h.Ra.oo) c.getModifierState(e) && ("" != d && (d += "+"), (d += e));
  "" != d && c.keyCode
    ? (d = d + "+" + c.keyCode)
    : c.keyCode && (d = c.keyCode.toString());
  d = this.Lj[d] || [];
  if (!d) return !1;
  var e = 0;
  for (var f; (f = d[e]); e++)
    if (((f = this.td[f]), (!f.Ka || f.Ka(a)) && f.xa && f.xa(a, c, f)))
      return !0;
  return !1;
};
function J(a, c) {
  var d = "";
  if (c) {
    for (var e = h.g.object.values(h.Ra.oo), f = 0, g; (g = c[f]); f++)
      if (0 > e.indexOf(g)) throw Error(g + " is not a valid modifier key.");
    for (var k in h.Ra.oo)
      -1 < c.indexOf(h.Ra.oo[k]) && ("" != d && (d += "+"), (d += k));
  }
  "" != d && a ? (d = d + "+" + a) : a && (d = a.toString());
  return d;
}
new h.Ra();
h.fn = function (a, c, d, e) {
  this.C = a;
  this.name = c;
  this.type = d || "";
  this.BD = e || h.g.Zf();
  h.h.Ea(new h.h.Bd(this));
};
h.fn.prototype.yc = function () {
  return this.BD;
};
h.fn.hC = function (a, c) {
  a = a.name.toLowerCase();
  c = c.name.toLowerCase();
  return a < c ? -1 : a == c ? 0 : 1;
};
h.la = {};
h.la.Ku = h.$i;
h.la.Uv = function (a) {
  var c = E(a, !1);
  a = Object.create(null);
  for (var d = 0; d < c.length; d++) {
    var e = $a(c[d]);
    if (e)
      for (var f = 0; f < e.length; f++) {
        var g = e[f],
          k = g.yc();
        k && (a[k] = g);
      }
  }
  c = [];
  for (k in a) c.push(a[k]);
  return c;
};
h.la.Et = {};
h.la.OB = function (a) {
  a = E(a, !1);
  for (var c = Object.create(null), d = 0, e; (e = a[d]); d++) {
    var f = e.rJ;
    !f &&
      e.dD &&
      ((f = e.dD),
      h.la.Et[e.type] ||
        (console.warn(
          "Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" +
            e.type +
            "')"
        ),
        (h.la.Et[e.type] = !0)));
    if (f) for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0;
  }
  return Object.keys(c);
};
h.la.Lh = function (a) {
  var c = [],
    d = document.createElement("button");
  d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
  d.setAttribute("callbackKey", "CREATE_VARIABLE");
  Gc(a, function (e) {
    h.la.tw(e.wJ());
  });
  c.push(d);
  a = h.la.RC(a);
  return (c = c.concat(a));
};
h.la.RC = function (a) {
  a = a.Pn("");
  var c = [];
  if (0 < a.length) {
    var d = a[a.length - 1];
    if (h.rc.variables_set) {
      var e = h.g.xml.createElement("block");
      e.setAttribute("type", "variables_set");
      e.setAttribute("gap", h.rc.math_change ? 8 : 24);
      e.appendChild(h.la.cr(d));
      c.push(e);
    }
    h.rc.math_change &&
      ((e = h.g.xml.createElement("block")),
      e.setAttribute("type", "math_change"),
      e.setAttribute("gap", h.rc.variables_get ? 20 : 8),
      e.appendChild(h.la.cr(d)),
      (d = h.N.Ee(
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
      )),
      e.appendChild(d),
      c.push(e));
    if (h.rc.variables_get) {
      a.sort(h.fn.hC);
      d = 0;
      for (var f; (f = a[d]); d++)
        (e = h.g.xml.createElement("block")),
          e.setAttribute("type", "variables_get"),
          e.setAttribute("gap", 8),
          e.appendChild(h.la.cr(f)),
          c.push(e);
    }
  }
  return c;
};
h.la.Cv = "ijkmnopqrstuvwxyzabcdefgh";
h.la.UC = function (a) {
  return h.la.Rw(h.la.Cv.charAt(0), a.dr());
};
h.la.Rw = function (a, c) {
  if (!c.length) return a;
  for (var d = h.la.Cv, e = "", f = d.indexOf(a); ; ) {
    for (var g = !1, k = 0; k < c.length; k++)
      if (c[k].toLowerCase() == a) {
        g = !0;
        break;
      }
    if (!g) return a;
    f++;
    f == d.length && ((f = 0), (e = Number(e) + 1));
    a = d.charAt(f) + e;
  }
};
h.la.tw = function (a, c, d) {
  function e(g) {
    h.la.By(h.P.NEW_VARIABLE_TITLE, g, function (k) {
      if (k) {
        var l = h.la.gE(k, a);
        if (l) {
          if (l.type == f)
            var m = h.P.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
          else
            (m = h.P.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (m = m.replace("%1", l.name).replace("%2", l.type));
          h.alert(m, function () {
            e(k);
          });
        } else a.ue(k, f), c && c(k);
      } else c && c(null);
    });
  }
  var f = d || "";
  e("");
};
h.la.ue = h.la.tw;
h.la.Cy = function (a, c) {
  function d(e) {
    var f = h.P.RENAME_VARIABLE_TITLE.replace("%1", c.name);
    h.la.By(f, e, function (g) {
      if (g) {
        var k = h.la.hE(g, c.type, a);
        k
          ? ((k = h.P.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              k.name
            ).replace("%2", k.type)),
            h.alert(k, function () {
              d(g);
            }))
          : a.mi(c.yc(), g);
      }
    });
  }
  d("");
};
h.la.By = function (a, c, d) {
  h.prompt(a, c, function (e) {
    e &&
      ((e = e.replace(/[\s\xa0]+/g, " ").trim()),
      e == h.P.RENAME_VARIABLE || e == h.P.NEW_VARIABLE) &&
      (e = null);
    d(e);
  });
};
h.la.hE = function (a, c, d) {
  d = d.Qa.Mh();
  a = a.toLowerCase();
  for (var e = 0, f; (f = d[e]); e++)
    if (f.name.toLowerCase() == a && f.type != c) return f;
  return null;
};
h.la.gE = function (a, c) {
  c = c.Qa.Mh();
  a = a.toLowerCase();
  for (var d = 0, e; (e = c[d]); d++) if (e.name.toLowerCase() == a) return e;
  return null;
};
h.la.cr = function (a) {
  var c = h.g.xml.createElement("field");
  c.setAttribute("name", "VAR");
  c.setAttribute("id", a.yc());
  c.setAttribute("variabletype", a.type);
  a = h.g.xml.createTextNode(a.name);
  c.appendChild(a);
  return c;
};
h.la.tJ = function (a, c, d, e) {
  var f = h.la.Lg(a, c, d, e);
  f || (f = h.la.rC(a, c, d, e));
  return f;
};
h.la.Lg = function (a, c, d, e) {
  var f = a.Rj,
    g = null;
  if (c && ((g = a.Mg(c)), !g && f && (g = f.Mg(c)), g)) return g;
  if (d) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    g = a.Lg(d, e);
    !g && f && (g = f.Lg(d, e));
  }
  return g;
};
h.la.rC = function (a, c, d, e) {
  var f = a.Rj;
  d || (d = h.la.UC(a.fg ? a.Pa : a));
  return f ? f.ue(d, e, c) : a.ue(d, e, c);
};
h.la.Sw = function (a, c) {
  a = a.Mh();
  var d = [];
  if (c.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == c.indexOf(f) && d.push(f);
    }
  return d;
};
h.VERSION = "uncompiled";
h.Bl = null;
h.selected = null;
h.tj = [];
h.ij = null;
h.tn = null;
h.rq = null;
h.$I = null;
h.Bo = null;
h.EF = function (a) {
  return new h.g.le(a.Zv, a.Yv);
};
h.WJ = function (a) {
  Za(a);
};
h.im = function (a) {
  for (; a.options.bd; ) a = a.options.bd;
  var c = x(a),
    d = c.parentNode;
  if (d) {
    var e = d.offsetWidth;
    d = d.offsetHeight;
    c.Zv != e && (c.setAttribute("width", e + "px"), (c.Zv = e));
    c.Yv != d && (c.setAttribute("height", d + "px"), (c.Yv = d));
    a.resize();
  }
};
h.ts = function (a) {
  var c = h.Bl;
  !c || h.g.$n(a) || (c.sa && !c.isVisible()) || h.Ra.A.ts(c, a);
};
h.zw = function () {
  var a = h.selected;
  a.C.fg || (h.h.ta(!0), h.dc(), a.I(!0, !0), h.h.ta(!1));
};
h.wq = function (a) {
  if (a.Ij) a = null;
  else {
    var c = h.N.Qf(a, !0);
    h.N.wC(c);
    var d = a.Wa();
    c.setAttribute("x", a.J ? -d.x : d.x);
    c.setAttribute("y", d.y);
    a = { xml: c, source: a.C, OF: h.g.er(a, !0) };
  }
  a && ((h.ij = a.xml), (h.tn = a.source), (h.rq = a.OF));
};
h.Do = function () {
  if (!h.ij) return !1;
  var a = h.tn;
  a.fg && (a = a.Pa);
  return h.rq && fb(a, h.rq) ? (h.h.ta(!0), a.Do(h.ij), h.h.ta(!1), !0) : !1;
};
h.duplicate = function (a) {
  var c = h.ij,
    d = h.tn;
  h.wq(a);
  a.C.Do(h.ij);
  h.ij = c;
  h.tn = d;
};
h.NJ = function (a) {
  h.g.$n(a) || a.preventDefault();
};
h.dc = function (a) {
  h.G.Ia();
  h.$.Ia();
  h.D.Rn();
  if (!a) {
    a = h.$f();
    if (a.qc && a.qc.ff) {
      var c = a.qc;
      c.ff.isVisible() && (c.ff.Ia(), Sb(c, !1));
    }
    (a = a.wa) && G(a) && G(a).ej && a.bJ();
  }
};
h.$f = function () {
  return h.Bl;
};
h.alert = function (a, c) {
  alert(a);
  c && c();
};
h.confirm = function (a, c) {
  c(confirm(a));
};
h.prompt = function (a, c, d) {
  d(prompt(a, c));
};
h.QD = function (a) {
  return function () {
    Zb(this, a);
  };
};
h.hJ = function (a) {
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
        : (h.rc[e] &&
            console.warn(
              "Block definition #" +
                c +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (h.rc[e] = { Fa: h.QD(d) }));
    } else
      console.warn(
        "Block definition #" + c + " in JSON array is " + d + ". Skipping."
      );
  }
};
h.Ca = function (a, c, d, e, f, g) {
  function k(t) {
    var D = !f;
    t = h.Touch.zF(t);
    for (var ja = 0, ma; (ma = t[ja]); ja++)
      if (!D || h.Touch.gt(ma))
        h.Touch.qF(ma), d ? e.call(d, ma) : e(ma), (l = !0);
  }
  var l = !1,
    m = [];
  if (h.g.global.PointerEvent && c in h.Touch.Te)
    for (var n = 0, p; (p = h.Touch.Te[c][n]); n++)
      a.addEventListener(p, k, !1), m.push([a, p, k]);
  else if ((a.addEventListener(c, k, !1), m.push([a, c, k]), c in h.Touch.Te)) {
    var r = function (t) {
      k(t);
      var D = !g;
      l && D && t.preventDefault();
    };
    for (n = 0; (p = h.Touch.Te[c][n]); n++)
      a.addEventListener(p, r, !1), m.push([a, p, r]);
  }
  return m;
};
h.Xb = function (a, c, d, e) {
  function f(n) {
    d ? e.call(d, n) : e(n);
  }
  var g = [];
  if (h.g.global.PointerEvent && c in h.Touch.Te)
    for (var k = 0, l; (l = h.Touch.Te[c][k]); k++)
      a.addEventListener(l, f, !1), g.push([a, l, f]);
  else if ((a.addEventListener(c, f, !1), g.push([a, c, f]), c in h.Touch.Te)) {
    var m = function (n) {
      if (n.changedTouches && 1 == n.changedTouches.length) {
        var p = n.changedTouches[0];
        n.clientX = p.clientX;
        n.clientY = p.clientY;
      }
      f(n);
      n.preventDefault();
    };
    for (k = 0; (l = h.Touch.Te[c][k]); k++)
      a.addEventListener(l, m, !1), g.push([a, l, m]);
  }
  return g;
};
h.sb = function (a) {
  for (; a.length; ) {
    var c = a.pop();
    c[0].removeEventListener(c[1], c[2], !1);
  }
};
h.ND = function (a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
h.zJ = function (a) {
  return h.g.xb.Ax(a);
};
h.$B = function () {
  h.vc("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  h.vc("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  h.vc("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  h.vc("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  h.vc("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  h.vc("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  h.vc("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  h.vc("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  h.vc("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  h.vc("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  h.vc("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  h.vc("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  h.vc("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  h.vc("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  h.vc("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  h.vc("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
h.vc = function (a, c, d) {
  for (var e = "Blockly", f = h, g = 0; g < c.length; ++g)
    (e += "." + c[g]), f && (f = f[c[g]]);
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
h.dK = function (a) {
  h.Bo = a;
};
var Oc = {
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
  Pc = "ace ar fa he mzn ps ur".split(" "),
  M = window.BlocklyGamesLang,
  Qc = window.BlocklyGamesLanguages,
  Rc = /\.html$/.test(window.location.pathname);
function Sc(a, c, d) {
  var e = Number;
  a = (a = window.location.search.match(new RegExp("[?&]" + a + "=([^&]+)")))
    ? decodeURIComponent(a[1].replace(/\+/g, "%20"))
    : "NaN";
  e = e(a);
  return isNaN(e) ? c : h.g.Od.Lk(c, e, d);
}
var N = Sc("level", 1, 10);
function Tc() {
  document.title = document.getElementById("title").textContent;
  document.dir = -1 != Pc.indexOf(M) ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", M);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var c = [], d = 0; d < Qc.length; d++) {
      var e = Qc[d];
      c.push([Oc[e], e]);
    }
    c.sort(function (g, k) {
      return g[0] > k[0] ? 1 : g[0] < k[0] ? -1 : 0;
    });
    for (d = a.options.length = 0; d < c.length; d++) {
      var f = c[d];
      e = f[1];
      f = new Option(f[0], e);
      e == M && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (d = 1; 10 >= d; d++)
    (a = document.getElementById("level" + d)),
      (c = !!Uc(d)),
      a && c && (a.className += " level_done");
  (d = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(Vc, 1);
}
function Uc(a) {
  var c = Wc;
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
function Xc(a, c) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", c, !0);
  a.addEventListener("touchend", c, !0);
}
function Vc() {
  if (!Rc) {
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
h.g.v = {};
h.g.v.Ga = function (a, c) {
  return " " + a + "," + c + " ";
};
h.g.v.curve = function (a, c) {
  return " " + a + c.join("");
};
h.g.v.moveTo = function (a, c) {
  return " M " + a + "," + c + " ";
};
h.g.v.moveBy = function (a, c) {
  return " m " + a + "," + c + " ";
};
h.g.v.lineTo = function (a, c) {
  return " l " + a + "," + c + " ";
};
h.g.v.line = function (a) {
  return " l" + a.join("");
};
h.g.v.X = function (a, c) {
  return " " + a + " " + c + " ";
};
h.g.v.arc = function (a, c, d, e) {
  return a + " " + d + " " + d + " " + c + e;
};
h.i.Bf = function () {
  this.Oe = 0;
  this.rB = 3;
  this.yd = 5;
  this.Iu = 8;
  this.Fc = 10;
  this.rv = this.yd;
  this.Ck = 15;
  this.Yi = 5;
  this.cn = 8;
  this.dB = 15;
  this.Dp = 4;
  this.XA = 12;
  this.Yz = 16;
  this.Xz = this.au = this.Ck;
  this.ub = 8;
  this.xB = this.yk = 15;
  this.ov = 0;
  this.qv = 20;
  this.xz = 4;
  this.BB = this.yd;
  this.CB = this.Fc;
  this.Az = this.yd;
  this.zz = this.Fc;
  this.sm = !1;
  this.vB = 15;
  this.wB = 100;
  this.uB = 15;
  this.vk = 24;
  this.$z = 14.5;
  this.Zz = this.Ck + 11;
  this.eA = 2;
  this.aA = this.vk;
  this.nv = h.g.v.moveBy(0, 0);
  this.IA = 12;
  this.JA = 6;
  this.wh = 11;
  this.wg = "normal";
  this.vg = "sans-serif";
  this.ku = this.Jm = -1;
  this.Im = 4;
  this.gu = 16;
  this.ik = 5;
  this.lA = "#fff";
  this.op = !h.g.userAgent.ee && !h.g.userAgent.vh;
  this.iu = this.gu;
  this.nA = this.mA = this.ju = !1;
  this.pA = this.ik;
  this.jk = 12;
  this.oA =
    "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
  this.Ol = String(Math.random()).substring(2);
  this.In = "";
  this.Vq = null;
  this.Ew = "";
  this.Vk = this.Aq = this.Hq = null;
  this.Em = "#cc0a0a";
  this.Pm = "#4286f4";
  this.Gm = 100;
  this.Jv = 5;
  this.Fm = 10;
  this.Kz = 2;
  this.Mz = 4;
  this.tp = "#000000";
  this.Mm = 0.2;
  this.mv = { nB: 1, Pi: 2 };
};
b = h.i.Bf.prototype;
b.Fa = function () {
  this.Mi = this.Vr();
  this.Pi = this.Wr();
  this.Ti = this.Yr();
  this.Hp = this.Xr();
  var a = this.ub,
    c = h.g.v.arc("a", "0 0,0", a, h.g.v.Ga(-a, a)),
    d = h.g.v.arc("a", "0 0,0", a, h.g.v.Ga(a, a));
  this.Nm = { width: a, height: a, Ds: c, Eo: d };
  a = this.ub;
  c = h.g.v.moveBy(0, a) + h.g.v.arc("a", "0 0,1", a, h.g.v.Ga(a, -a));
  d = h.g.v.arc("a", "0 0,1", a, h.g.v.Ga(a, a));
  var e = h.g.v.arc("a", "0 0,1", a, h.g.v.Ga(-a, -a)),
    f = h.g.v.arc("a", "0 0,1", a, h.g.v.Ga(-a, a));
  this.zk = { tt: c, LF: d, VB: f, jq: e, lF: a };
};
b.Xl = function (a) {
  this.Eg = {};
  var c = a.Eg,
    d;
  for (d in c) this.Eg[d] = Yc(c[d]);
  this.vg =
    a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.vg;
  this.wg =
    a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.wg;
  this.wh =
    a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.wh;
  c = h.g.j.VD(this.wh + "pt", this.wg, this.vg);
  this.Jm = c.height;
  this.ku = c.pe;
  this.Em = Va(a, "cursorColour") || this.Em;
  this.Pm = Va(a, "markerColour") || this.Pm;
  this.tp = Va(a, "insertionMarkerColour") || this.tp;
  this.Mm = Number(Va(a, "insertionMarkerOpacity")) || this.Mm;
  this.sm = null != a.kt ? a.kt : this.sm;
};
function pc(a, c) {
  var d = "auto_" + c;
  a.Eg[d] || (a.Eg[d] = Yc({ colourPrimary: c }));
  return { style: a.Eg[d], name: d };
}
function mc(a, c) {
  return (
    a.Eg[c || ""] ||
    (c && 0 == c.indexOf("auto_")
      ? pc(a, c.substring(5)).style
      : Yc({ colourPrimary: "#000000" }))
  );
}
function Yc(a) {
  var c = {};
  a && h.g.object.$g(c, a);
  a = h.g.Co(c.colourPrimary || "#000");
  c.Eh = a.ql;
  c.colourSecondary
    ? (a = h.g.Co(c.colourSecondary).ql)
    : ((a = c.Eh), (a = h.g.xb.gq("#fff", a, 0.6) || a));
  c.vn = a;
  c.colourTertiary
    ? (a = h.g.Co(c.colourTertiary).ql)
    : ((a = c.Eh), (a = h.g.xb.gq("#fff", a, 0.3) || a));
  c.jj = a;
  c.jf = c.hat || "";
  return c;
}
b.I = function () {
  this.Vq && h.g.j.removeNode(this.Vq);
  this.Hq && h.g.j.removeNode(this.Hq);
  this.Aq && h.g.j.removeNode(this.Aq);
  this.Vk = null;
};
b.Vr = function () {
  var a = this.IA,
    c = this.JA,
    d = h.g.v.line([
      h.g.v.Ga(c, a / 4),
      h.g.v.Ga(2 * -c, a / 2),
      h.g.v.Ga(c, a / 4),
    ]);
  return { height: a, width: c, path: d };
};
b.Yr = function () {
  var a = this.vB,
    c = this.wB,
    d = h.g.v.curve("c", [h.g.v.Ga(30, -a), h.g.v.Ga(70, -a), h.g.v.Ga(c, 0)]);
  return { height: a, width: c, path: d };
};
b.Xr = function () {
  function a(g) {
    g = g ? -1 : 1;
    var k = -g,
      l = d / 2,
      m = h.g.v.Ga(c, g * l);
    return (
      h.g.v.curve("c", [
        h.g.v.Ga(0, g * (l + 2.5)),
        h.g.v.Ga(-c, k * (l + 0.5)),
        h.g.v.Ga(-c, g * l),
      ]) + h.g.v.curve("s", [h.g.v.Ga(c, 2.5 * k), m])
    );
  }
  var c = this.cn,
    d = this.Ck,
    e = a(!0),
    f = a(!1);
  return { type: this.mv.nB, width: c, height: d, Ud: f, Jl: e };
};
b.Wr = function () {
  function a(k) {
    return h.g.v.line([
      h.g.v.Ga(k * e, d),
      h.g.v.Ga(3 * k, 0),
      h.g.v.Ga(k * e, -d),
    ]);
  }
  var c = this.dB,
    d = this.Dp,
    e = (c - 3) / 2,
    f = a(1),
    g = a(-1);
  return { type: this.mv.Pi, width: c, height: d, fh: f, sy: g };
};
function ta(a, c) {
  switch (c.type) {
    case h.lb:
    case h.ge:
      return a.Hp;
    case h.ie:
    case h.Ta:
      return a.Pi;
    default:
      throw Error("Unknown connection type");
  }
}
b.Va = function (a, c, d) {
  d = this.gr(d);
  c = "blockly-renderer-style-" + c;
  this.Vk = document.getElementById(c);
  var e = d.join("\n");
  this.Vk
    ? (this.Vk.firstChild.textContent = e)
    : ((d = document.createElement("style")),
      (d.id = c),
      (c = document.createTextNode(e)),
      d.appendChild(c),
      document.head.insertBefore(d, document.head.firstChild),
      (this.Vk = d));
  a = h.g.j.K(h.g.F.Yt, {}, a);
  c = h.g.j.K(h.g.F.lu, { id: "blocklyEmbossFilter" + this.Ol }, a);
  h.g.j.K(h.g.F.iA, { in: "SourceAlpha", stdDeviation: 1, result: "blur" }, c);
  d = h.g.j.K(
    h.g.F.kA,
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
  h.g.j.K(h.g.F.jA, { x: -5e3, y: -1e4, z: 2e4 }, d);
  h.g.j.K(
    h.g.F.np,
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    c
  );
  h.g.j.K(
    h.g.F.np,
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
  this.In = c.id;
  this.Vq = c;
  c = h.g.j.K(
    h.g.F.Yu,
    {
      id: "blocklyDisabledPattern" + this.Ol,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10,
    },
    a
  );
  h.g.j.K(h.g.F.Ad, { width: 10, height: 10, fill: "#aaa" }, c);
  h.g.j.K(h.g.F.Pe, { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, c);
  this.Ew = c.id;
  this.Hq = c;
  h.i.bu &&
    ((a = h.g.j.K(
      h.g.F.lu,
      {
        id: "blocklyDebugFilter" + this.Ol,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%",
      },
      a
    )),
    (c = h.g.j.K(h.g.F.fA, { result: "outBlur" }, a)),
    h.g.j.K(
      h.g.F.hA,
      { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" },
      c
    ),
    h.g.j.K(
      h.g.F.gA,
      { "flood-color": "#ff0000", "flood-opacity": 0.5, result: "outColor" },
      a
    ),
    h.g.j.K(
      h.g.F.np,
      { in: "outColor", in2: "outBlur", operator: "in", result: "outGlow" },
      a
    ),
    (this.Aq = a));
};
b.gr = function (a) {
  return [
    a + " .blocklyText, ",
    a + " .blocklyFlyoutLabelText {",
    "font: " + this.wg + " " + this.wh + "pt " + this.vg + ";",
    "}",
    a + " .blocklyText {",
    "fill: #fff;",
    "}",
    a + " .blocklyNonEditableText>rect,",
    a + " .blocklyEditableText>rect {",
    "fill: " + this.lA + ";",
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
    "font-family: " + this.vg + ";",
    "font-weight: " + this.wg + ";",
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
    "fill-opacity: " + this.Mm + ";",
    "stroke: none;",
    "}",
  ];
};
h.h.Ef = function (a, c, d, e) {
  var f = a ? a.C.id : void 0;
  e && e.Xa() == h.B.types.cc && (f = e.ra.id);
  h.h.Ef.u.constructor.call(this, f);
  this.mb = a ? a.id : null;
  this.gy = d;
  this.Zx = e;
  this.mf = c;
};
h.g.object.U(h.h.Ef, h.h.ne);
h.h.Ef.prototype.type = h.h.Fu;
h.h.Ef.prototype.oa = function () {
  var a = h.h.Ef.u.oa.call(this);
  a.isCursor = this.mf;
  a.blockId = this.mb;
  a.oldNode = this.gy;
  a.newNode = this.Zx;
  return a;
};
h.h.Ef.prototype.ba = function (a) {
  h.h.Ef.u.ba.call(this, a);
  this.mf = a.isCursor;
  this.mb = a.blockId;
  this.gy = a.oldNode;
  this.Zx = a.newNode;
};
h.A.register(h.A.Z.Lb, h.h.Fu, h.h.Ef);
h.i.Ff = function (a, c, d) {
  this.o = a;
  this.bs = d;
  this.Il = null;
  this.s = c;
  this.oj = null;
  a = this.mf() ? this.s.Em : this.s.Pm;
  this.Ed = d.xb || a;
};
h.i.Ff.Lz = "blocklyCursor";
h.i.Ff.TA = "blocklyMarker";
h.i.Ff.xA = 0.75;
b = h.i.Ff.prototype;
b.qa = function () {
  return this.O;
};
b.Nc = function () {
  return this.bs;
};
b.mf = function () {
  return "cursor" == this.bs.type;
};
b.Va = function () {
  var a = this.mf() ? h.i.Ff.Lz : h.i.Ff.TA;
  this.O = h.g.j.K(h.g.F.Uc, { class: a }, null);
  this.jg = h.g.j.K(h.g.F.Uc, { width: this.s.Gm, height: this.s.Jv }, this.O);
  this.Zg = h.g.j.K(
    h.g.F.Ad,
    { width: this.s.Gm, height: this.s.Jv, style: "display: none" },
    this.jg
  );
  this.ci = h.g.j.K(
    h.g.F.Ad,
    { class: "blocklyVerticalMarker", rx: 10, ry: 10, style: "display: none" },
    this.jg
  );
  this.bi = h.g.j.K(
    h.g.F.Pe,
    { transform: "", style: "display: none" },
    this.jg
  );
  this.hg = h.g.j.K(
    h.g.F.Pe,
    {
      transform: "",
      style: "display: none",
      fill: "none",
      "stroke-width": this.s.Mz,
    },
    this.jg
  );
  this.mf() &&
    ((a = {
      attributeType: "XML",
      attributeName: "fill",
      dur: "1s",
      values: this.Ed + ";transparent;transparent;",
      repeatCount: "indefinite",
    }),
    h.g.j.K(h.g.F.Xo, a, this.Zg),
    h.g.j.K(h.g.F.Xo, a, this.bi),
    (a.attributeName = "stroke"),
    h.g.j.K(h.g.F.Xo, a, this.hg));
  return this.O;
};
function Zc(a, c) {
  a.mf()
    ? (a.Il && a.Il.lg(null), c.lg(a.qa()))
    : (a.Il && a.Il.mg(null), c.mg(a.qa()));
  a.Il = c;
}
b.draw = function (a, c) {
  if (c) {
    this.s = this.o.rb.aa();
    var d = this.mf() ? this.s.Em : this.s.Pm;
    this.Ed = this.bs.xb || d;
    this.Zg.setAttribute("fill", this.Ed);
    this.ci.setAttribute("stroke", this.Ed);
    this.bi.setAttribute("fill", this.Ed);
    this.hg.setAttribute("stroke", this.Ed);
    this.mf() &&
      ((d = this.Ed + ";transparent;transparent;"),
      this.Zg.firstChild.setAttribute("values", d),
      this.bi.firstChild.setAttribute("values", d),
      this.hg.firstChild.setAttribute("values", d));
    d = c.ra;
    if (c.Xa() == h.B.types.Fb) $c(this, c);
    else if (c.Xa() == h.B.types.zh) $c(this, c);
    else if (d.type == h.lb) {
      var e = c.ra;
      d = e.V();
      var f = e.ji.x,
        g = e.ji.y;
      e = h.g.v.moveTo(0, 0) + ta(this.s, e).Ud;
      this.bi.setAttribute("d", e);
      this.bi.setAttribute(
        "transform",
        "translate(" + f + "," + g + ")" + (this.o.J ? " scale(-1 1)" : "")
      );
      this.oj = this.bi;
      Zc(this, d);
      ad(this);
    } else if (d.type == h.Ta)
      (g = c.ra),
        (d = g.V()),
        (f = 0),
        (g = g.ji.y),
        (e = y(d).width),
        this.o.J && (f = -e),
        bd(this, f, g, e),
        Zc(this, d),
        ad(this);
    else if (c.Xa() == h.B.types.hd) $c(this, c);
    else if (c.Xa() == h.B.types.Wb)
      (d = c.ra),
        (f = d.ag().width),
        (g = d.ag().height),
        cd(this, 0, 0, f, g),
        Zc(this, d),
        ad(this);
    else if (c.Xa() == h.B.types.cc)
      (f = c.Uo),
        (d = f.x),
        (f = f.y),
        this.o.J && (d -= this.s.Gm),
        bd(this, d, f, this.s.Gm),
        Zc(this, this.o),
        ad(this);
    else if (c.Xa() == h.B.types.Re) {
      d = c.ra;
      g = y(d);
      f = g.width + this.s.Fm;
      g = g.height + this.s.Fm;
      var k = (e = -this.s.Fm / 2),
        l = -this.s.Fm / 2;
      this.o.J && (k = -(f + e));
      cd(this, k, l, f, g);
      Zc(this, d);
      ad(this);
    }
    d = c.V();
    a = new h.h.Ef(d, this.mf(), a, c);
    h.h.Ea(a);
    a = this.oj.childNodes[0];
    void 0 !== a && a.beginElement && a.beginElement();
  } else this.Ia();
};
function $c(a, c) {
  c = c.V();
  var d = c.width,
    e = c.height,
    f = e * h.i.Ff.xA,
    g = a.s.Kz;
  if (c.W) {
    var k = ta(a.s, c.W);
    e = k;
    d =
      h.g.v.moveBy(-g, f) +
      h.g.v.X("V", -g) +
      h.g.v.X("H", a.s.yk) +
      e.fh +
      h.g.v.X("H", d + 2 * g) +
      h.g.v.X("V", f);
    a.hg.setAttribute("d", d);
  } else
    c.M
      ? ((f = k = ta(a.s, c.M)),
        (d =
          h.g.v.moveBy(d, 0) +
          h.g.v.X("h", -(d - f.width)) +
          h.g.v.X("v", a.s.Yi) +
          f.Ud +
          h.g.v.X("V", e) +
          h.g.v.X("H", d)),
        a.hg.setAttribute("d", d))
      : ((d =
          h.g.v.moveBy(-g, f) +
          h.g.v.X("V", -g) +
          h.g.v.X("H", d + 2 * g) +
          h.g.v.X("V", f)),
        a.hg.setAttribute("d", d));
  a.o.J && a.fl(a.hg);
  a.oj = a.hg;
  Zc(a, c);
  ad(a);
}
function ad(a) {
  a.Ia();
  a.oj.style.display = "";
}
function bd(a, c, d, e) {
  a.Zg.setAttribute("x", c);
  a.Zg.setAttribute("y", d);
  a.Zg.setAttribute("width", e);
  a.oj = a.Zg;
}
function cd(a, c, d, e, f) {
  a.ci.setAttribute("x", c);
  a.ci.setAttribute("y", d);
  a.ci.setAttribute("width", e);
  a.ci.setAttribute("height", f);
  a.oj = a.ci;
}
b.fl = function (a) {
  a.setAttribute("transform", "scale(-1 1)");
};
b.Ia = function () {
  this.Zg.style.display = "none";
  this.ci.style.display = "none";
  this.bi.style.display = "none";
  this.hg.style.display = "none";
};
b.I = function () {
  this.O && h.g.j.removeNode(this.O);
};
h.i.m = {
  NONE: 0,
  Wb: 1,
  ou: 2,
  su: 4,
  Op: 8,
  It: 16,
  yu: 32,
  fu: 64,
  xd: 128,
  vu: 256,
  pv: 512,
  Gz: 1024,
  Gp: 2048,
  Cp: 4096,
  hB: 8192,
  ip: 16384,
  yp: 32768,
  xp: 65536,
  Lp: 131072,
  Kp: 262144,
  Cu: 524288,
  Mp: 1048576,
  Up: 2097152,
  $o: 4194304,
  wu: 8388608,
};
h.i.m.bH = h.i.m.yp | h.i.m.xp;
h.i.m.tI = h.i.m.Lp | h.i.m.Kp;
h.i.m.ps = 16777216;
h.i.m.Xa = function () {
  Object.prototype.hasOwnProperty.call(h.i.m, void 0) ||
    ((h.i.m[void 0] = h.i.m.ps), (h.i.m.ps <<= 1));
  return h.i.m[void 0];
};
h.i.m.eg = function (a) {
  return a.type & h.i.m.Wb;
};
h.i.m.Yh = function (a) {
  return a.type & h.i.m.ou;
};
h.i.m.Gj = function (a) {
  return a.type & h.i.m.su;
};
h.i.m.Nd = function (a) {
  return a.type & h.i.m.Op;
};
h.i.m.EJ = function (a) {
  return a.type & h.i.m.yu;
};
h.i.m.Tg = function (a) {
  return a.type & h.i.m.xd;
};
h.i.m.xl = function (a) {
  return a.type & h.i.m.fu;
};
h.i.m.Sg = function (a) {
  return a.type & h.i.m.vu;
};
h.i.m.Zh = function (a) {
  return a.type & h.i.m.pv;
};
h.i.m.Kj = function (a) {
  return a.type & h.i.m.Gp;
};
h.i.m.Vg = function (a) {
  return a.type & h.i.m.Cp;
};
h.i.m.OD = function (a) {
  return a.type & (h.i.m.Gp | h.i.m.Cp);
};
h.i.m.Ug = function (a) {
  return a.type & h.i.m.xp;
};
h.i.m.Hx = function (a) {
  return a.type & h.i.m.Kp;
};
h.i.m.yl = function (a) {
  return a.type & h.i.m.yp;
};
h.i.m.FJ = function (a) {
  return a.type & h.i.m.Lp;
};
h.i.m.DJ = function (a) {
  return a.type & h.i.m.ip;
};
h.i.m.Fx = function (a) {
  return a.type & h.i.m.Cu;
};
h.i.m.HJ = function (a) {
  return a.type & h.i.m.Mp;
};
h.i.m.AJ = function (a) {
  return a.type & h.i.m.It;
};
h.i.m.ao = function (a) {
  return a.type & h.i.m.Up;
};
h.i.m.Un = function (a) {
  return a.type & h.i.m.$o;
};
h.i.m.PD = function (a) {
  return a.type & (h.i.m.Up | h.i.m.$o);
};
h.i.m.JD = function (a) {
  return a.type & h.i.m.wu;
};
h.i.zg = function (a) {
  this.height = this.width = 0;
  this.type = h.i.m.NONE;
  this.hj = this.Ha = 0;
  this.s = a;
  this.Sd = this.s.yk;
};
h.i.ga = function (a, c) {
  h.i.ga.u.constructor.call(this, a);
  this.Ic = c;
  this.shape = ta(this.s, c);
  this.Xh = !!this.shape.isDynamic;
  this.type |= h.i.m.Gz;
};
h.g.object.U(h.i.ga, h.i.zg);
h.i.Fp = function (a, c) {
  h.i.Fp.u.constructor.call(this, a, c);
  this.type |= h.i.m.hB;
  this.height = this.Xh ? 0 : this.shape.height;
  this.Xd = this.width = this.Xh ? 0 : this.shape.width;
  this.md = this.s.Yi;
  this.Pk = 0;
};
h.g.object.U(h.i.Fp, h.i.ga);
h.i.Ip = function (a, c) {
  h.i.Ip.u.constructor.call(this, a, c);
  this.type |= h.i.m.Gp;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
h.g.object.U(h.i.Ip, h.i.ga);
h.i.Ep = function (a, c) {
  h.i.Ep.u.constructor.call(this, a, c);
  this.type |= h.i.m.Cp;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
h.g.object.U(h.i.Ep, h.i.ga);
h.i.qk = function (a, c) {
  h.i.qk.u.constructor.call(this, a, c.connection);
  this.type |= h.i.m.xd;
  this.input = c;
  this.align = c.align;
  (this.Hg = c.connection && c.connection.ua() ? c.connection.ua() : null)
    ? ((a = y(this.Hg)), (this.Nk = a.width), (this.xn = a.height))
    : (this.xn = this.Nk = 0);
  this.md = this.Pk = 0;
};
h.g.object.U(h.i.qk, h.i.ga);
h.i.xg = function (a, c) {
  h.i.xg.u.constructor.call(this, a, c);
  this.type |= h.i.m.vu;
  this.Hg
    ? ((this.width = this.Nk), (this.height = this.xn))
    : ((this.height = this.s.Zz), (this.width = this.s.$z));
  this.kj = this.Xh ? this.shape.height(this.height) : this.shape.height;
  this.Ze = this.Xh ? this.shape.width(this.height) : this.shape.width;
  this.Hg || (this.width += this.Ze * (this.Xh ? 2 : 1));
  this.md = this.Xh ? this.shape.md(this.kj) : this.s.Yi;
  this.Pk = this.Xh ? this.shape.Pk(this.Ze) : 0;
};
h.g.object.U(h.i.xg, h.i.qk);
h.i.Cg = function (a, c) {
  h.i.Cg.u.constructor.call(this, a, c);
  this.type |= h.i.m.pv;
  this.height = this.Hg ? this.xn + this.s.ov : this.s.aA;
  this.width = this.s.xB + this.shape.width;
};
h.g.object.U(h.i.Cg, h.i.qk);
h.i.Hm = function (a, c) {
  h.i.Hm.u.constructor.call(this, a, c);
  this.type |= h.i.m.fu;
  this.height = this.Hg ? this.xn - this.s.Yi - this.s.yd : this.shape.height;
  this.width = this.shape.width + this.s.eA;
  this.md = this.s.Yi;
  this.kj = this.shape.height;
  this.Ze = this.shape.width;
};
h.g.object.U(h.i.Hm, h.i.qk);
h.i.up = function (a, c) {
  h.i.up.u.constructor.call(this, a);
  this.icon = c;
  this.isVisible = c.isVisible();
  this.type |= h.i.m.su;
  a = c.pJ();
  this.height = a.height;
  this.width = a.width;
};
h.g.object.U(h.i.up, h.i.zg);
h.i.vp = function (a) {
  h.i.vp.u.constructor.call(this, a);
  this.type |= h.i.m.Cu;
  this.height = this.s.Mi.height;
  this.width = this.s.Mi.width;
};
h.g.object.U(h.i.vp, h.i.zg);
h.i.wd = function (a, c) {
  h.i.wd.u.constructor.call(this, a);
  this.Kw = c;
  this.Md = c.hk;
  this.QC = c.Zw();
  this.type |= h.i.m.Wb;
  a = this.Kw.ag();
  this.height = a.height;
  this.width = a.width;
};
h.g.object.U(h.i.wd, h.i.zg);
h.i.qp = function (a) {
  h.i.qp.u.constructor.call(this, a);
  this.type |= h.i.m.ou;
  this.height = this.s.Ti.height;
  this.width = this.s.Ti.width;
  this.dj = this.height;
};
h.g.object.U(h.i.qp, h.i.zg);
h.i.Xi = function (a, c) {
  h.i.Xi.u.constructor.call(this, a);
  this.type = (c && "left" != c ? h.i.m.Lp : h.i.m.yp) | h.i.m.ip;
  this.width = this.height = this.s.Oe;
};
h.g.object.U(h.i.Xi, h.i.zg);
h.i.Wm = function (a, c) {
  h.i.Wm.u.constructor.call(this, a);
  this.type = (c && "left" != c ? h.i.m.Kp : h.i.m.xp) | h.i.m.ip;
  this.width = this.s.ub;
  this.height = this.s.ub / 2;
};
h.g.object.U(h.i.Wm, h.i.zg);
h.i.Df = function (a, c) {
  h.i.Df.u.constructor.call(this, a);
  this.type = this.type | h.i.m.Op | h.i.m.yu;
  this.width = c;
  this.height = this.s.uB;
};
h.g.object.U(h.i.Df, h.i.zg);
h.i.Ah = function (a) {
  this.type = h.i.m.Mp;
  this.elements = [];
  this.Ha = this.bc = this.Ge = this.minWidth = this.minHeight = this.width = this.height = 0;
  this.sx = this.Aj = this.zr = this.Ub = this.Og = !1;
  this.s = a;
  this.Sd = this.s.yk;
  this.align = null;
};
h.i.Ah.prototype.measure = function () {
  throw Error("Unexpected attempt to measure a base Row.");
};
function P(a) {
  for (var c = a.elements.length - 1, d; (d = a.elements[c]); c--)
    if (h.i.m.Tg(d)) return d;
  return null;
}
h.i.Ah.prototype.Mo = function () {
  return !0;
};
h.i.Ah.prototype.al = function () {
  return !0;
};
h.i.Ch = function (a) {
  h.i.Ch.u.constructor.call(this, a);
  this.type |= h.i.m.Up;
  this.dj = this.Rf = 0;
  this.wD = !1;
  this.connection = null;
};
h.g.object.U(h.i.Ch, h.i.Ah);
h.i.Ch.prototype.Ar = function (a) {
  var c = (a.jf ? "cap" === a.jf : this.s.sm) && !a.M && !a.W,
    d = a.W && a.W.ua();
  return !!a.M || c || (d ? u(d) == a : !1);
};
h.i.Ch.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      h.i.m.Nd(f) ||
        (h.i.m.Yh(f) ? (d = Math.max(d, f.dj)) : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Rf = this.dj = d;
  this.Ge = this.width;
};
h.i.Ch.prototype.Mo = function () {
  return !1;
};
h.i.Ch.prototype.al = function () {
  return !1;
};
h.i.rh = function (a) {
  h.i.rh.u.constructor.call(this, a);
  this.type |= h.i.m.$o;
  this.tx = !1;
  this.connection = null;
  this.pe = this.Xk = 0;
};
h.g.object.U(h.i.rh, h.i.Ah);
h.i.rh.prototype.Ar = function (a) {
  return !!a.M || !!u(a);
};
h.i.rh.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      h.i.m.Nd(f) ||
        (h.i.m.Vg(f)
          ? (d = Math.max(d, f.height))
          : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Xk = d;
  this.Ge = this.width;
};
h.i.rh.prototype.Mo = function () {
  return !1;
};
h.i.rh.prototype.al = function () {
  return !1;
};
h.i.an = function (a, c, d) {
  h.i.an.u.constructor.call(this, a);
  this.type = this.type | h.i.m.Op | h.i.m.It;
  this.width = d;
  this.height = c;
  this.Qw = !1;
  this.Ge = 0;
  this.elements = [new h.i.Df(this.s, d)];
};
h.g.object.U(h.i.an, h.i.Ah);
h.i.an.prototype.measure = function () {};
h.i.Li = function (a) {
  h.i.Li.u.constructor.call(this, a);
  this.type |= h.i.m.wu;
  this.jw = 0;
};
h.g.object.U(h.i.Li, h.i.Ah);
h.i.Li.prototype.measure = function () {
  this.width = this.minWidth;
  this.height = this.minHeight;
  for (var a = 0, c = 0, d; (d = this.elements[c]); c++)
    (this.width += d.width),
      h.i.m.Tg(d) &&
        (h.i.m.Zh(d)
          ? (a += d.Nk)
          : h.i.m.xl(d) && 0 != d.Nk && (a += d.Nk - d.Ze)),
      h.i.m.Nd(d) || (this.height = Math.max(this.height, d.height));
  this.jw = a;
  this.Ge = this.width + a;
};
h.i.Li.prototype.al = function () {
  return !this.Og && !this.Ub;
};
h.i.je = function (a, c) {
  this.Da = c;
  this.rb = a;
  this.s = this.rb.aa();
  this.M = c.M ? new h.i.Fp(this.s, c.M) : null;
  this.Hj = ua(c) && !c.isCollapsed();
  this.isCollapsed = c.isCollapsed();
  this.ye = c.ye();
  this.J = c.J;
  this.lh = this.width = this.ck = this.height = 0;
  this.rows = [];
  this.Cx = [];
  this.xx = [];
  this.Pb = new h.i.Ch(this.s);
  this.wb = new h.i.rh(this.s);
  this.Lo = this.Xd = 0;
};
b = h.i.je.prototype;
b.measure = function () {
  var a = !!this.Da.W,
    c = (this.Da.jf ? "cap" === this.Da.jf : this.s.sm) && !this.M && !a;
  this.Pb.Ar(this.Da)
    ? this.Pb.elements.push(new h.i.Xi(this.s))
    : this.Pb.elements.push(new h.i.Wm(this.s));
  c
    ? ((a = new h.i.qp(this.s)), this.Pb.elements.push(a), (this.Pb.Rf = a.dj))
    : a &&
      ((this.Pb.wD = !0),
      (this.Pb.connection = new h.i.Ip(this.s, this.Da.W)),
      this.Pb.elements.push(this.Pb.connection));
  this.Da.S.length && this.Da.S[0].type == h.Ta && !this.Da.isCollapsed()
    ? (this.Pb.minHeight = this.s.CB)
    : (this.Pb.minHeight = this.s.BB);
  this.Pb.elements.push(new h.i.Xi(this.s, "right"));
  this.rows.push(this.Pb);
  a = new h.i.Li(this.s);
  this.Cx.push(a);
  var d = va(this.Da);
  if (d.length) {
    c = 0;
    for (var e; (e = d[c]); c++) {
      var f = new h.i.up(this.s, e);
      this.isCollapsed && e.dJ ? this.xx.push(f) : a.elements.push(f);
    }
  }
  e = null;
  for (c = 0; (d = this.Da.S[c]); c++)
    if (d.isVisible()) {
      !e ||
        (d.type != h.Ta &&
          e.type != h.Ta &&
          ((d.type != h.lb && d.type != h.Cf) || this.Hj)) ||
        (this.rows.push(a), (a = new h.i.Li(this.s)), this.Cx.push(a));
      for (e = 0; (f = d.hb[e]); e++) a.elements.push(new h.i.wd(this.s, f, d));
      this.Tv(d, a);
      e = d;
    }
  this.isCollapsed && ((a.sx = !0), a.elements.push(new h.i.vp(this.s)));
  (a.elements.length || a.Aj) && this.rows.push(a);
  this.Hs();
  this.rows.push(this.wb);
  this.Sv();
  a = this.rows;
  this.rows = [];
  for (c = 0; c < a.length; c++)
    if ((this.rows.push(a[c]), c != a.length - 1)) {
      d = this.rows;
      e = d.push;
      f = a[c];
      var g = a[c + 1],
        k = new h.i.an(this.s, this.kx(f, g), this.width - this.Xd);
      f.Ub && (k.Qw = !0);
      g.Ub && (k.OJ = !0);
      e.call(d, k);
    }
  for (e = d = c = a = 0; (f = this.rows[e]); e++)
    f.measure(),
      (c = Math.max(c, f.width)),
      f.Ub && (a = Math.max(a, f.width - P(f).width)),
      (d = Math.max(d, f.Ge));
  this.lh = a;
  this.width = c;
  for (e = 0; (f = this.rows[e]); e++) f.Ub && (f.lh = this.lh);
  this.ck = Math.max(c, d);
  this.M &&
    ((this.Xd = this.M.width),
    (this.width += this.M.width),
    (this.ck += this.M.width));
  this.$p();
  this.Lw();
};
b.Hs = function () {
  this.wb.tx = !!this.Da.Y;
  this.wb.minHeight =
    this.Da.S.length && this.Da.S[this.Da.S.length - 1].type == h.Ta
      ? this.s.zz
      : this.s.Az;
  this.wb.Ar(this.Da)
    ? this.wb.elements.push(new h.i.Xi(this.s))
    : this.wb.elements.push(new h.i.Wm(this.s));
  this.wb.tx &&
    ((this.wb.connection = new h.i.Ep(this.s, this.Da.Y)),
    this.wb.elements.push(this.wb.connection));
  this.wb.elements.push(new h.i.Xi(this.s, "right"));
};
b.Tv = function (a, c) {
  this.Hj && a.type == h.lb
    ? (c.elements.push(new h.i.xg(this.s, a)), (c.zr = !0))
    : a.type == h.Ta
    ? (c.elements.push(new h.i.Cg(this.s, a)), (c.Ub = !0))
    : a.type == h.lb
    ? (c.elements.push(new h.i.Hm(this.s, a)), (c.Og = !0))
    : a.type == h.Cf &&
      ((c.minHeight = Math.max(
        c.minHeight,
        a.V() && a.V().Ja ? this.s.Xz : this.s.au
      )),
      (c.Aj = !0));
  null == c.align && (c.align = a.align);
};
b.Sv = function () {
  for (var a = 0, c; (c = this.rows[a]); a++) {
    var d = c.elements;
    c.elements = [];
    c.Mo() && c.elements.push(new h.i.Df(this.s, this.Nh(null, d[0])));
    if (d.length) {
      for (var e = 0; e < d.length - 1; e++)
        c.elements.push(d[e]),
          c.elements.push(new h.i.Df(this.s, this.Nh(d[e], d[e + 1])));
      c.elements.push(d[d.length - 1]);
      c.al() &&
        c.elements.push(new h.i.Df(this.s, this.Nh(d[d.length - 1], null)));
    }
  }
};
b.Nh = function (a, c) {
  if (!a && c && h.i.m.Zh(c)) return this.s.qv;
  if (a && h.i.m.Tg(a) && !c) {
    if (h.i.m.xl(a)) return this.s.Oe;
    if (h.i.m.Sg(a)) return this.s.Fc;
    if (h.i.m.Zh(a)) return this.s.Oe;
  }
  return a && h.i.m.yl(a) && c && (h.i.m.Kj(c) || h.i.m.Vg(c))
    ? c.Sd
    : a && h.i.m.Ug(a) && c && (h.i.m.Kj(c) || h.i.m.Vg(c))
    ? c.Sd - this.s.ub
    : this.s.yd;
};
b.$p = function () {
  for (var a = 0, c; (c = this.rows[a]); a++)
    if (c.Ub) dd(this, c);
    else {
      var d = this.jl(c) - c.width;
      0 < d && ed(c, d);
      h.i.m.PD(c) && (c.Ge = c.width);
    }
};
b.jl = function () {
  return this.width - this.Xd;
};
function ed(a, c) {
  a: {
    var d = 0;
    for (var e; (e = a.elements[d]); d++)
      if (h.i.m.Nd(e)) {
        d = e;
        break a;
      }
    d = null;
  }
  a: {
    e = a.elements.length - 1;
    for (var f; (f = a.elements[e]); e--)
      if (h.i.m.Nd(f)) {
        e = f;
        break a;
      }
    e = null;
  }
  if (a.Og || a.Ub) a.Ge += c;
  a.align == h.Wo
    ? (e.width += c)
    : a.align == h.Vo
    ? ((d.width += c / 2), (e.width += c / 2))
    : a.align == h.Dt
    ? (d.width += c)
    : (e.width += c);
  a.width += c;
}
function dd(a, c) {
  var d = P(c),
    e = c.width - d.width,
    f = a.lh;
  e = f - e;
  0 < e && ed(c, e);
  e = c.width;
  f = a.jl(c);
  d.width += f - e;
  d.height = Math.max(d.height, c.height);
  c.width += f - e;
  c.Ge = Math.max(c.width, a.lh + c.jw);
}
b.kx = function () {
  return this.s.yd;
};
b.Yw = function (a, c) {
  return h.i.m.Nd(c)
    ? a.bc + c.height / 2
    : h.i.m.Un(a)
    ? ((a = a.bc + a.height - a.Xk),
      h.i.m.Vg(c) ? a + c.height / 2 : a - c.height / 2)
    : h.i.m.ao(a)
    ? h.i.m.Yh(c)
      ? a.Rf - c.height / 2
      : a.Rf + c.height / 2
    : a.bc + a.height / 2;
};
function fd(a, c) {
  for (var d = c.Ha, e = 0, f; (f = c.elements[e]); e++)
    h.i.m.Nd(f) && (f.height = c.height),
      (f.Ha = d),
      (f.hj = a.Yw(c, f)),
      (d += f.width);
}
b.Lw = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++)
    (e.bc = c),
      (e.Ha = this.Xd),
      (c += e.height),
      (a = Math.max(a, e.Ge)),
      fd(this, e);
  this.M &&
    this.Da.Y &&
    this.Da.Y.isConnected() &&
    (a = Math.max(a, y(this.Da.Y.ua()).width));
  this.ck = a + this.Xd;
  this.height = c;
  this.Lo = this.Pb.Rf;
  this.wb.pe = c - this.wb.Xk;
};
h.i.Ec = function (a, c) {
  this.Da = a;
  this.na = c;
  a.Wa();
  this.Tn = this.Na = "";
  this.s = c.rb.aa();
};
b = h.i.Ec.prototype;
b.draw = function () {
  gd(this);
  hd(this);
  id(this);
  this.Da.Cb.ct(this.Na + "\n" + this.Tn);
  this.na.J && this.Da.Cb.$q();
  h.i.pm && this.Da.Vs.IC(this.Da, this.na);
  jd(this);
};
function jd(a) {
  a.Da.height = a.na.height;
  a.Da.width = a.na.ck;
}
function gd(a) {
  for (var c = 0, d; (d = a.na.xx[c]); c++)
    d.icon.AD.setAttribute("display", "none");
}
function hd(a) {
  a.Tq();
  for (var c = 1; c < a.na.rows.length - 1; c++) {
    var d = a.na.rows[c];
    d.sx ? a.$k(d) : d.Ub ? a.Sq(d) : d.Og ? a.Uq(d) : a.Iw(d);
  }
  a.Pq();
  a.Rq();
}
b.Tq = function () {
  var a = this.na.Pb,
    c = a.elements,
    d = this.na.Pb;
  if (d.connection) {
    var e = d.Ha + d.Sd;
    L(d.connection.Ic, this.na.J ? -e : e, 0);
  }
  this.Na += h.g.v.moveBy(a.Ha, this.na.Lo);
  for (d = 0; (e = c[d]); d++)
    h.i.m.Ug(e)
      ? (this.Na += this.s.zk.tt)
      : h.i.m.Hx(e)
      ? (this.Na += this.s.zk.LF)
      : h.i.m.Kj(e)
      ? (this.Na += e.shape.fh)
      : h.i.m.Yh(e)
      ? (this.Na += this.s.Ti.path)
      : h.i.m.Nd(e) && (this.Na += h.g.v.X("h", e.width));
  this.Na += h.g.v.X("v", a.height);
};
b.$k = function (a) {
  this.Na += this.s.Mi.path + h.g.v.X("v", a.height - this.s.Mi.height);
};
b.Uq = function (a) {
  var c = P(a);
  this.vy(a);
  var d = "function" == typeof c.shape.Ud ? c.shape.Ud(c.height) : c.shape.Ud;
  this.Na += h.g.v.X("H", c.Ha + c.width) + d + h.g.v.X("v", a.height - c.kj);
};
b.Sq = function (a) {
  var c = P(a);
  this.Na +=
    h.g.v.X("H", c.Ha + c.Sd + c.shape.width) +
    (c.shape.sy + h.g.v.X("h", -(c.Sd - this.s.Nm.width)) + this.s.Nm.Ds) +
    h.g.v.X("v", a.height - 2 * this.s.Nm.height) +
    this.s.Nm.Eo +
    h.g.v.X("H", a.Ha + a.width);
  this.yy(a);
};
b.Iw = function (a) {
  this.Na += h.g.v.X("V", a.bc + a.height);
};
b.Pq = function () {
  var a = this.na.wb,
    c = a.elements;
  this.xy();
  for (var d = 0, e = "", f = c.length - 1, g; (g = c[f]); f--)
    h.i.m.Vg(g)
      ? (e += g.shape.sy)
      : h.i.m.yl(g)
      ? (e += h.g.v.X("H", a.Ha))
      : h.i.m.Ug(g)
      ? (e += this.s.zk.jq)
      : h.i.m.Hx(g)
      ? ((e += this.s.zk.VB), (d = this.s.zk.lF))
      : h.i.m.Nd(g) && (e += h.g.v.X("h", -1 * g.width));
  this.Na += h.g.v.X("V", a.pe - d);
  this.Na += e;
};
b.Rq = function () {
  var a = this.na.M;
  if (this.na.M) {
    var c = this.na.Xd + this.na.M.Pk;
    L(this.Da.M, this.na.J ? -c : c, this.na.M.md);
  }
  a &&
    ((c = a.md + a.height),
    (a = "function" == typeof a.shape.Jl ? a.shape.Jl(a.height) : a.shape.Jl),
    (this.Na += h.g.v.X("V", c) + a));
  this.Na += "z";
};
function id(a) {
  for (var c = 0, d; (d = a.na.rows[c]); c++)
    for (var e = 0, f; (f = d.elements[e]); e++)
      if (h.i.m.Sg(f)) a.Qq(f);
      else if (h.i.m.Gj(f) || h.i.m.eg(f)) {
        var g = a;
        if (h.i.m.eg(f)) var k = f.Kw.qa();
        else h.i.m.Gj(f) && (k = f.icon.AD);
        var l = f.hj - f.height / 2,
          m = f.Ha,
          n = "";
        g.na.J &&
          ((m = -(m + f.width)), f.QC && ((m += f.width), (n = "scale(-1 1)")));
        h.i.m.Gj(f)
          ? (k.setAttribute("display", "block"),
            k.setAttribute("transform", "translate(" + m + "," + l + ")"),
            f.icon.iC())
          : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        g.na.ye && k.setAttribute("display", "none");
      }
}
b.Qq = function (a) {
  var c = a.width,
    d = a.height,
    e = a.md,
    f = a.kj + e;
  this.Tn +=
    h.g.v.moveTo(a.Ha + a.Ze, a.hj - d / 2) +
    h.g.v.X("v", e) +
    a.shape.Ud +
    h.g.v.X("v", d - f) +
    h.g.v.X("h", c - a.Ze) +
    h.g.v.X("v", -d) +
    "z";
  this.wy(a);
};
b.wy = function (a) {
  var c = a.hj - a.height / 2;
  if (a.Ic) {
    var d = a.Ha + a.Ze + a.Pk;
    this.na.J && (d *= -1);
    L(a.Ic, d, c + a.md);
  }
};
b.yy = function (a) {
  var c = P(a);
  if (c.Ic) {
    var d = a.Ha + a.lh + c.Sd;
    this.na.J && (d *= -1);
    L(c.Ic, d, a.bc);
  }
};
b.vy = function (a) {
  var c = P(a);
  if (c.Ic) {
    var d = a.Ha + a.width;
    this.na.J && (d *= -1);
    L(c.Ic, d, a.bc);
  }
};
b.xy = function () {
  var a = this.na.wb;
  if (a.connection) {
    var c = a.connection,
      d = c.Ha;
    L(c.Ic, this.na.J ? -d : d, a.pe);
  }
};
h.i.Gf = function (a, c, d) {
  this.mj = d;
  this.vf = a;
  this.Ob = h.g.j.K(h.g.F.Pe, { class: "blocklyPath" }, this.vf);
  this.style = c;
  this.$r = this.Wk = null;
};
b = h.i.Gf.prototype;
b.ct = function (a) {
  this.Ob.setAttribute("d", a);
};
b.$q = function () {
  this.Ob.setAttribute("transform", "scale(-1 1)");
};
b.lg = function (a) {
  a ? (this.vf.appendChild(a), (this.Wk = a)) : (this.Wk = null);
};
b.mg = function (a) {
  a
    ? (this.Wk ? this.vf.insertBefore(a, this.Wk) : this.vf.appendChild(a),
      (this.$r = a))
    : (this.$r = null);
};
b.lc = function (a) {
  this.Ob.setAttribute("stroke", this.style.jj);
  this.Ob.setAttribute("fill", this.style.Eh);
  this.cz(a.Ja);
  this.wt(!a.isEnabled() || Xb(a));
};
b.ui = function (a) {
  this.style = a;
};
function sa(a, c, d) {
  d ? h.g.j.Rb(a.vf, c) : h.g.j.cd(a.vf, c);
}
b.az = function (a) {
  a
    ? this.Ob.setAttribute("filter", "url(#" + this.mj.In + ")")
    : this.Ob.setAttribute("filter", "none");
};
b.cz = function (a) {
  a &&
    (this.Ob.setAttribute("stroke", "none"),
    this.Ob.setAttribute("fill", this.style.vn));
};
b.wt = function (a) {
  sa(this, "blocklyDisabled", a);
  a && this.Ob.setAttribute("fill", "url(#" + this.mj.Ew + ")");
};
h.i.Hf = function (a) {
  this.name = a;
  this.As = this.s = null;
};
b = h.i.Hf.prototype;
b.ve = function () {
  return this.name + "-renderer";
};
b.Fa = function (a, c) {
  this.s = this.Ur();
  c && ((this.As = c), h.g.object.$g(this.s, c));
  this.s.Xl(a);
  this.s.Fa();
};
b.Va = function (a, c) {
  this.s.Va(a, this.name + "-" + c.name, "." + this.ve() + "." + c.ve());
};
b.Ls = function (a, c) {
  var d = this.aa();
  d.I();
  this.s = this.Ur();
  this.As && h.g.object.$g(this.s, this.As);
  this.s.Ol = d.Ol;
  this.s.Xl(c);
  this.s.Fa();
  this.Va(a, c);
};
b.I = function () {
  this.s && this.s.I();
};
b.Ur = function () {
  return new h.i.Bf();
};
b.Qx = function (a) {
  return new h.i.je(this, a);
};
b.Ox = function (a, c) {
  return new h.i.Ec(a, c);
};
b.Px = function (a, c) {
  return new h.i.Gf(a, c, this.s);
};
b.aa = function () {
  return this.s;
};
b.La = function (a) {
  if (h.i.pm && !a.Vs) {
    if (!h.i.bu)
      throw Error("Missing require for Blockly.blockRendering.Debug");
    var c = new h.i.bu(this.aa());
    a.Vs = c;
  }
  c = this.Qx(a);
  c.measure();
  this.Ox(a, c).draw();
};
h.ca = {};
h.ca.Bf = function () {
  h.ca.Bf.u.constructor.call(this);
  this.op = !1;
  this.ic = 1;
  this.UA = 30;
  this.ov = -this.Dp / 2;
};
h.g.object.U(h.ca.Bf, h.i.Bf);
h.ca.Bf.prototype.gr = function (a) {
  return h.ca.Bf.u.gr
    .call(this, a)
    .concat([
      a + " .blocklyInsertionMarker>.blocklyPathLight,",
      a + " .blocklyInsertionMarker>.blocklyPathDark {",
      "fill-opacity: " + this.Mm + ";",
      "stroke: none;",
      "}",
    ]);
};
h.ca.qu = function (a) {
  this.na = a;
  this.ul = this.ea = "";
  this.jc = this.na.J;
  a = a.rb;
  this.s = a.aa();
  this.pd = a.pd;
  this.$c = this.pd.OFFSET;
  this.zs = this.pd.iB;
  this.Ej = this.pd.HA;
  this.Nl = this.pd.Hp;
  this.kE = this.pd.Pi;
  this.BF = this.pd.Ti;
  this.Jx = this.pd.Mi;
};
h.ca.qu.prototype.$k = function (a) {
  this.na.J &&
    (this.ea += this.Jx.fh + h.g.v.X("v", a.height - this.Jx.height - this.$c));
};
function kd(a, c) {
  var d = c.Ha + c.width - a.$c;
  c.Qw && (a.ea += h.g.v.X("H", d));
  a.jc &&
    ((a.ea += h.g.v.X("H", d)),
    c.height > a.$c && (a.ea += h.g.v.X("V", c.bc + c.height - a.$c)));
}
h.ca.xg = function (a, c) {
  h.ca.xg.u.constructor.call(this, a, c);
  this.Hg && ((this.width += this.s.ic), (this.height += this.s.ic));
};
h.g.object.U(h.ca.xg, h.i.xg);
h.ca.Cg = function (a, c) {
  h.ca.Cg.u.constructor.call(this, a, c);
  this.Hg && (this.height += this.s.ic);
};
h.g.object.U(h.ca.Cg, h.i.Cg);
h.ca.je = function (a, c) {
  h.ca.je.u.constructor.call(this, a, c);
};
h.g.object.U(h.ca.je, h.i.je);
b = h.ca.je.prototype;
b.Hs = function () {
  h.ca.je.u.Hs.call(this);
  (this.Da.S.length && this.Da.S[this.Da.S.length - 1].type == h.Ta) ||
    (this.wb.minHeight = this.s.yd - this.s.ic);
};
b.Tv = function (a, c) {
  this.Hj && a.type == h.lb
    ? (c.elements.push(new h.ca.xg(this.s, a)), (c.zr = !0))
    : a.type == h.Ta
    ? (c.elements.push(new h.ca.Cg(this.s, a)), (c.Ub = !0))
    : a.type == h.lb
    ? (c.elements.push(new h.i.Hm(this.s, a)), (c.Og = !0))
    : a.type == h.Cf &&
      ((c.minHeight = Math.max(c.minHeight, this.s.au)), (c.Aj = !0));
  this.Hj || null != c.align || (c.align = a.align);
};
b.Sv = function () {
  for (var a = !1, c = 0, d; (d = this.rows[c]); c++) d.Og && (a = !0);
  for (c = 0; (d = this.rows[c]); c++) {
    var e = d.elements;
    d.elements = [];
    d.Mo() && d.elements.push(new h.i.Df(this.s, this.Nh(null, e[0])));
    if (e.length) {
      for (var f = 0; f < e.length - 1; f++) {
        d.elements.push(e[f]);
        var g = this.Nh(e[f], e[f + 1]);
        d.elements.push(new h.i.Df(this.s, g));
      }
      d.elements.push(e[e.length - 1]);
      d.al() &&
        ((g = this.Nh(e[e.length - 1], null)),
        a && d.Aj && (g += this.s.cn),
        d.elements.push(new h.i.Df(this.s, g)));
    }
  }
};
b.Nh = function (a, c) {
  if (!a)
    return c && h.i.m.eg(c) && c.Md
      ? this.s.yd
      : c && h.i.m.Sg(c)
      ? this.s.Iu
      : c && h.i.m.Zh(c)
      ? this.s.qv
      : this.s.Fc;
  if (!h.i.m.Tg(a) && (!c || h.i.m.Zh(c)))
    return h.i.m.eg(a) && a.Md
      ? this.s.yd
      : h.i.m.Gj(a)
      ? 2 * this.s.Fc + 1
      : h.i.m.Yh(a)
      ? this.s.Oe
      : h.i.m.OD(a)
      ? this.s.Fc
      : h.i.m.Ug(a)
      ? this.s.XA
      : h.i.m.Fx(a)
      ? this.s.Oe
      : this.s.Fc;
  if (h.i.m.Tg(a) && !c) {
    if (h.i.m.xl(a)) return this.s.Oe;
    if (h.i.m.Sg(a)) return this.s.Fc;
    if (h.i.m.Zh(a)) return this.s.Oe;
  }
  if (!h.i.m.Tg(a) && c && h.i.m.Tg(c)) {
    if (h.i.m.eg(a) && a.Md) {
      if (h.i.m.Sg(c) || h.i.m.xl(c)) return this.s.rB;
    } else {
      if (h.i.m.Sg(c) || h.i.m.xl(c)) return this.s.Iu;
      if (h.i.m.Zh(c)) return this.s.Fc;
    }
    return this.s.Fc - 1;
  }
  if (h.i.m.Gj(a) && c && !h.i.m.Tg(c)) return this.s.Fc;
  if (h.i.m.Sg(a) && c && h.i.m.eg(c)) return c.Md ? this.s.yd : this.s.Fc;
  if (h.i.m.yl(a) && c) {
    if (h.i.m.Yh(c)) return this.s.Oe;
    if (h.i.m.Kj(c)) return c.Sd;
    if (h.i.m.Vg(c)) return (a = ((this.J ? 1 : -1) * this.s.ic) / 2), c.Sd + a;
  }
  if (h.i.m.Ug(a) && c) {
    if (h.i.m.Kj(c)) return c.Sd - this.s.ub;
    if (h.i.m.Vg(c))
      return (a = ((this.J ? 1 : -1) * this.s.ic) / 2), c.Sd - this.s.ub + a;
  }
  return (h.i.m.eg(a) && c && h.i.m.eg(c) && a.Md == c.Md) || (c && h.i.m.Fx(c))
    ? this.s.Fc
    : this.s.yd;
};
b.kx = function (a, c) {
  return h.i.m.ao(a) && h.i.m.Un(c)
    ? this.s.Yz
    : h.i.m.ao(a) || h.i.m.Un(c)
    ? this.s.Oe
    : a.Og && c.Og
    ? this.s.Fc
    : !a.Ub && c.Ub
    ? this.s.xz
    : (a.Ub && c.Ub) || (!a.Ub && c.Aj) || a.Aj
    ? this.s.Fc
    : this.s.yd;
};
b.Yw = function (a, c) {
  if (h.i.m.Nd(c)) return a.bc + c.height / 2;
  if (h.i.m.Un(a))
    return (
      (a = a.bc + a.height - a.Xk),
      h.i.m.Vg(c) ? a + c.height / 2 : a - c.height / 2
    );
  if (h.i.m.ao(a))
    return h.i.m.Yh(c) ? a.Rf - c.height / 2 : a.Rf + c.height / 2;
  var d = a.bc;
  h.i.m.eg(c) || h.i.m.Gj(c)
    ? ((d += c.height / 2),
      (a.zr || a.Ub) && c.height + this.s.rv <= a.height && (d += this.s.rv))
    : (d = h.i.m.Sg(c) ? d + c.height / 2 : d + a.height / 2);
  return d;
};
b.$p = function () {
  if (this.Hj) {
    for (
      var a = 0, c = null, d = this.rows.length - 1, e;
      (e = this.rows[d]);
      d--
    )
      (e.os = a),
        h.i.m.JD(e) &&
          (e.Ub && dd(this, e),
          c && c.Ub && e.width < c.width ? (e.os = c.width) : (a = e.width),
          (c = e));
    for (d = a = 0; (e = this.rows[d]); d++)
      e.Ub
        ? (a = this.jl(e))
        : h.i.m.Nd(e)
        ? (e.width = Math.max(a, e.os))
        : ((a = Math.max(a, e.os) - e.width), 0 < a && ed(e, a), (a = e.width));
  } else h.ca.je.u.$p.call(this);
};
b.jl = function (a) {
  return this.Hj && a.Ub
    ? this.lh + this.s.UA + this.Xd
    : h.ca.je.u.jl.call(this, a);
};
b.Lw = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++) {
    e.bc = c;
    e.Ha = this.Xd;
    c += e.height;
    a = Math.max(a, e.Ge);
    var f = c - this.Pb.dj;
    e == this.wb &&
      f < this.s.vk &&
      ((f = this.s.vk - f), (this.wb.height += f), (c += f));
    fd(this, e);
  }
  this.M &&
    this.Da.Y &&
    this.Da.Y.isConnected() &&
    (a = Math.max(a, y(this.Da.Y.ua()).width - this.s.ic));
  this.wb.pe = c - this.wb.Xk;
  this.ck = a + this.Xd + this.s.ic;
  this.width += this.s.ic;
  this.height = c + this.s.ic;
  this.Lo = this.Pb.Rf;
};
h.ca.Ec = function (a, c) {
  h.ca.Ec.u.constructor.call(this, a, c);
  this.kf = new h.ca.qu(c);
};
h.g.object.U(h.ca.Ec, h.i.Ec);
b = h.ca.Ec.prototype;
b.draw = function () {
  gd(this);
  hd(this);
  id(this);
  var a = this.Da.Cb;
  a.ct(this.Na + "\n" + this.Tn);
  var c = this.kf;
  a.wi.setAttribute("d", c.ea + "\n" + c.ul);
  this.na.J && a.$q();
  h.i.pm && this.Da.Vs.IC(this.Da, this.na);
  jd(this);
};
b.Tq = function () {
  var a = this.kf,
    c = this.na.Pb;
  a.ea += h.g.v.moveBy(c.Ha, a.na.Lo);
  for (var d = 0, e; (e = c.elements[d]); d++)
    h.i.m.yl(e)
      ? (a.ea += a.pd.nv)
      : h.i.m.Ug(e)
      ? (a.ea += a.zs.tt(a.jc))
      : h.i.m.Kj(e)
      ? (a.ea += a.kE.fh)
      : h.i.m.Yh(e)
      ? (a.ea += a.BF.path(a.jc))
      : h.i.m.Nd(e) &&
        0 != e.width &&
        (a.ea += h.g.v.X("H", e.Ha + e.width - a.$c));
  a.ea += h.g.v.X("H", c.Ha + c.width - a.$c);
  kd(this.kf, this.na.Pb);
  h.ca.Ec.u.Tq.call(this);
};
b.$k = function (a) {
  this.kf.$k(a);
  h.ca.Ec.u.$k.call(this, a);
};
b.Uq = function (a) {
  var c = this.kf,
    d = P(a);
  if (c.jc) {
    var e = a.height - d.kj;
    c.ea +=
      h.g.v.moveTo(d.Ha + d.width - c.$c, a.bc) +
      c.Nl.Ud(c.jc) +
      h.g.v.X("v", e);
  } else c.ea += h.g.v.moveTo(d.Ha + d.width, a.bc) + c.Nl.Ud(c.jc);
  h.ca.Ec.u.Uq.call(this, a);
};
b.Sq = function (a) {
  var c = this.kf,
    d = P(a);
  if (c.jc) {
    var e = a.height - 2 * c.Ej.height;
    c.ea +=
      h.g.v.moveTo(d.Ha, a.bc) +
      c.Ej.Ds(c.jc) +
      h.g.v.X("v", e) +
      c.Ej.Eo(c.jc) +
      h.g.v.lineTo(a.width - d.Ha - c.Ej.width, 0);
  } else
    c.ea +=
      h.g.v.moveTo(d.Ha, a.bc + a.height) +
      c.Ej.Eo(c.jc) +
      h.g.v.lineTo(a.width - d.Ha - c.Ej.width, 0);
  h.ca.Ec.u.Sq.call(this, a);
};
b.Iw = function (a) {
  kd(this.kf, a);
  this.Na += h.g.v.X("H", a.Ha + a.width) + h.g.v.X("V", a.bc + a.height);
};
b.Pq = function () {
  var a = this.kf,
    c = this.na.wb;
  if (a.jc) a.ea += h.g.v.X("V", c.pe - a.$c);
  else {
    var d = a.na.wb.elements[0];
    h.i.m.yl(d)
      ? (a.ea += h.g.v.moveTo(c.Ha + a.$c, c.pe - a.$c))
      : h.i.m.Ug(d) &&
        ((a.ea += h.g.v.moveTo(c.Ha, c.pe)), (a.ea += a.zs.jq()));
  }
  h.ca.Ec.u.Pq.call(this);
};
b.Rq = function () {
  var a = this.kf,
    c = a.na.M;
  c &&
    ((c = c.md + c.height),
    a.jc
      ? (a.ea += h.g.v.moveTo(a.na.Xd, c))
      : ((a.ea += h.g.v.moveTo(a.na.Xd + a.$c, a.na.wb.pe - a.$c)),
        (a.ea += h.g.v.X("V", c))),
    (a.ea += a.Nl.Jl(a.jc)));
  a.jc ||
    ((c = a.na.Pb),
    (a.ea = h.i.m.Ug(c.elements[0])
      ? a.ea + h.g.v.X("V", a.zs.height)
      : a.ea + h.g.v.X("V", c.Rf + a.$c)));
  h.ca.Ec.u.Rq.call(this);
};
b.Qq = function (a) {
  var c = this.kf,
    d = c.$c,
    e = a.Ha + a.Ze,
    f = a.hj - a.height / 2,
    g = a.width - a.Ze,
    k = f + d;
  if (c.jc) {
    f = a.md - d;
    var l = a.height - (a.md + a.kj) + d;
    c.ul +=
      h.g.v.moveTo(e - d, k) +
      h.g.v.X("v", f) +
      c.Nl.Ud(c.jc) +
      h.g.v.X("v", l) +
      h.g.v.X("h", g);
  } else
    c.ul +=
      h.g.v.moveTo(a.Ha + a.width + d, k) +
      h.g.v.X("v", a.height) +
      h.g.v.X("h", -g) +
      h.g.v.moveTo(e, f + a.md) +
      c.Nl.Ud(c.jc);
  h.ca.Ec.u.Qq.call(this, a);
};
b.wy = function (a) {
  var c = a.hj - a.height / 2;
  if (a.Ic) {
    var d = a.Ha + a.Ze + this.s.ic;
    this.na.J && (d *= -1);
    L(a.Ic, d, c + a.md + this.s.ic);
  }
};
b.yy = function (a) {
  var c = P(a);
  if (c.Ic) {
    var d = a.Ha + a.lh + c.Sd;
    d = this.na.J ? -1 * d : d + this.s.ic;
    L(c.Ic, d, a.bc + this.s.ic);
  }
};
b.vy = function (a) {
  var c = P(a);
  if (c.Ic) {
    var d = a.Ha + a.width + this.s.ic;
    this.na.J && (d *= -1);
    L(c.Ic, d, a.bc);
  }
};
b.xy = function () {
  var a = this.na.wb;
  if (a.connection) {
    var c = a.connection,
      d = c.Ha;
    L(c.Ic, (this.na.J ? -d : d) + this.s.ic / 2, a.pe + this.s.ic);
  }
};
h.ca.pu = function (a) {
  this.lj = a;
  this.OFFSET = 0.5;
  this.nv = h.g.v.moveBy(this.OFFSET, this.OFFSET);
};
b = h.ca.pu.prototype;
b.Fa = function () {
  this.HA = ld(this);
  this.iB = md(this);
  this.Hp = this.Xr();
  this.Pi = this.Wr();
  this.Mi = this.Vr();
  this.Ti = this.Yr();
};
function ld(a) {
  var c = a.lj.ub;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c + a) - a,
    e =
      h.g.v.moveBy(d, d) + h.g.v.arc("a", "0 0,0", c, h.g.v.Ga(-d - a, c - d)),
    f = h.g.v.arc("a", "0 0,0", c + a, h.g.v.Ga(c + a, c + a)),
    g =
      h.g.v.moveBy(d, -d) +
      h.g.v.arc("a", "0 0,0", c + a, h.g.v.Ga(c - d, d + a));
  return {
    width: c + a,
    height: c,
    Ds: function (k) {
      return k ? e : "";
    },
    Eo: function (k) {
      return k ? f : g;
    },
  };
}
function md(a) {
  var c = a.lj.ub;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c - a) + a,
    e =
      h.g.v.moveBy(d, d) +
      h.g.v.arc("a", "0 0,1", c - a, h.g.v.Ga(c - d, -d + a)),
    f =
      h.g.v.moveBy(a, c) + h.g.v.arc("a", "0 0,1", c - a, h.g.v.Ga(c, -c + a)),
    g = -d,
    k =
      h.g.v.moveBy(d, g) +
      h.g.v.arc("a", "0 0,1", c - a, h.g.v.Ga(-d + a, -g - c));
  return {
    height: c,
    tt: function (l) {
      return l ? e : f;
    },
    jq: function () {
      return k;
    },
  };
}
b.Xr = function () {
  var a = this.lj.cn,
    c = this.lj.Ck,
    d = h.g.v.moveBy(-2, -c + 3.4) + h.g.v.lineTo(-0.45 * a, -2.1),
    e =
      h.g.v.X("v", 2.5) +
      h.g.v.moveBy(0.97 * -a, 2.5) +
      h.g.v.curve("q", [h.g.v.Ga(0.05 * -a, 10), h.g.v.Ga(0.3 * a, 9.5)]) +
      h.g.v.moveBy(0.67 * a, -1.9) +
      h.g.v.X("v", 2.5),
    f =
      h.g.v.X("v", -1.5) +
      h.g.v.moveBy(-0.92 * a, -0.5) +
      h.g.v.curve("q", [h.g.v.Ga(-0.19 * a, -5.5), h.g.v.Ga(0, -11)]) +
      h.g.v.moveBy(0.92 * a, 1),
    g = h.g.v.moveBy(-5, c - 0.7) + h.g.v.lineTo(0.46 * a, -2.1);
  return {
    width: a,
    height: c,
    Jl: function (k) {
      return k ? d : f;
    },
    Ud: function (k) {
      return k ? e : g;
    },
  };
};
b.Wr = function () {
  return { fh: h.g.v.X("h", this.OFFSET) + this.lj.Pi.fh };
};
b.Vr = function () {
  return {
    fh:
      h.g.v.lineTo(5.1, 2.6) +
      h.g.v.moveBy(-10.2, 6.8) +
      h.g.v.lineTo(5.1, 2.6),
    height: 12,
    width: 10.2,
  };
};
b.Yr = function () {
  var a = this.lj.Ti.height,
    c =
      h.g.v.moveBy(25, -8.7) +
      h.g.v.curve("c", [
        h.g.v.Ga(29.7, -6.2),
        h.g.v.Ga(57.2, -0.5),
        h.g.v.Ga(75, 8.7),
      ]),
    d =
      h.g.v.curve("c", [
        h.g.v.Ga(17.8, -9.2),
        h.g.v.Ga(45.3, -14.9),
        h.g.v.Ga(75, -8.7),
      ]) + h.g.v.moveTo(100.5, a + 0.5);
  return {
    path: function (e) {
      return e ? c : d;
    },
  };
};
h.ca.Gf = function (a, c, d) {
  this.mj = d;
  this.vf = a;
  this.hm = h.g.j.K(
    h.g.F.Pe,
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.vf
  );
  this.Ob = h.g.j.K(h.g.F.Pe, { class: "blocklyPath" }, this.vf);
  this.wi = h.g.j.K(h.g.F.Pe, { class: "blocklyPathLight" }, this.vf);
  this.tq = "#000000";
  this.style = c;
};
h.g.object.U(h.ca.Gf, h.i.Gf);
b = h.ca.Gf.prototype;
b.ct = function (a) {
  this.Ob.setAttribute("d", a);
  this.hm.setAttribute("d", a);
};
b.$q = function () {
  this.Ob.setAttribute("transform", "scale(-1 1)");
  this.wi.setAttribute("transform", "scale(-1 1)");
  this.hm.setAttribute("transform", "translate(1,1) scale(-1 1)");
};
b.lc = function (a) {
  this.wi.style.display = "";
  this.hm.style.display = "";
  this.wi.setAttribute("stroke", this.style.jj);
  this.hm.setAttribute("fill", this.tq);
  h.ca.Gf.u.lc.call(this, a);
  this.Ob.setAttribute("stroke", "none");
};
b.ui = function (a) {
  this.style = a;
  this.tq = h.g.xb.gq("#000", this.style.Eh, 0.2) || this.tq;
};
b.az = function (a) {
  a
    ? (this.Ob.setAttribute("filter", "url(#" + this.mj.In + ")"),
      (this.wi.style.display = "none"))
    : (this.Ob.setAttribute("filter", "none"),
      (this.wi.style.display = "inline"));
};
b.cz = function (a) {
  a &&
    ((this.wi.style.display = "none"),
    this.hm.setAttribute("fill", this.style.vn),
    this.Ob.setAttribute("stroke", "none"),
    this.Ob.setAttribute("fill", this.style.vn));
};
b.wt = function (a) {
  h.ca.Gf.u.wt.call(this, a);
  a && this.Ob.setAttribute("stroke", "none");
};
h.ca.Hf = function (a) {
  h.ca.Hf.u.constructor.call(this, a);
  this.pd = null;
};
h.g.object.U(h.ca.Hf, h.i.Hf);
b = h.ca.Hf.prototype;
b.Fa = function (a, c) {
  h.ca.Hf.u.Fa.call(this, a, c);
  this.pd = new h.ca.pu(this.aa());
  this.pd.Fa();
};
b.Ls = function (a, c) {
  h.ca.Hf.u.Ls.call(this, a, c);
  this.pd.Fa();
};
b.Ur = function () {
  return new h.ca.Bf();
};
b.Qx = function (a) {
  return new h.ca.je(this, a);
};
b.Ox = function (a, c) {
  return new h.ca.Ec(a, c);
};
b.Px = function (a, c) {
  return new h.ca.Gf(a, c, this.aa());
};
h.i.register("geras", h.ca.Hf);
h.P.ADD_COMMENT = "Add Comment";
h.P.CANNOT_DELETE_VARIABLE_PROCEDURE =
  "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
h.P.CLEAN_UP = "Clean up Blocks";
h.P.COLLAPSE_ALL = "Collapse Blocks";
h.P.COLLAPSE_BLOCK = "Collapse Block";
h.P.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
h.P.DELETE_BLOCK = "Delete Block";
h.P.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
h.P.DELETE_X_BLOCKS = "Delete %1 Blocks";
h.P.DISABLE_BLOCK = "Disable Block";
h.P.DUPLICATE_BLOCK = "Duplicate";
h.P.DUPLICATE_COMMENT = "Duplicate Comment";
h.P.ENABLE_BLOCK = "Enable Block";
h.P.EXPAND_ALL = "Expand Blocks";
h.P.EXPAND_BLOCK = "Expand Block";
h.P.EXTERNAL_INPUTS = "External Inputs";
h.P.HELP = "Help";
h.P.INLINE_INPUTS = "Inline Inputs";
h.P.NEW_VARIABLE = "Create variable...";
h.P.NEW_VARIABLE_TITLE = "New variable name:";
h.P.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
h.P.REDO = "Redo";
h.P.REMOVE_COMMENT = "Remove Comment";
h.P.RENAME_VARIABLE = "Rename variable...";
h.P.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
h.P.UNDO = "Undo";
h.P.UNNAMED_KEY = "unnamed";
h.P.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
h.P.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "A variable named '%1' already exists for another type: '%2'.";
h.P.WORKSPACE_ARIA_LABEL = "Blockly Workspace";
h.P.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
h.P.PROCEDURES_DEFRETURN_PROCEDURE = h.P.PROCEDURES_DEFNORETURN_PROCEDURE;
var BlocklyStorage = {},
  nd = null,
  od = null,
  pd = null;
function qd() {
  var a = nd();
  rd("xml=" + encodeURIComponent(a), sd);
}
var td = {};
function rd(a, c) {
  td["/storage"] && td["/storage"].abort();
  td["/storage"] = new XMLHttpRequest();
  td["/storage"].onload = function () {
    200 === this.status
      ? c && c.call(this)
      : ud(O("Games_httpRequestError") + "\nXHR status: " + this.status);
    td["/storage"] = null;
  };
  td["/storage"].open("POST", "/storage");
  td["/storage"].setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  td["/storage"].send(a);
}
function sd() {
  window.location.hash = this.responseText.trim();
  ud(O("Games_linkAlert").replace("%1", window.location.href));
  pd = nd();
}
function vd() {
  var a = this.responseText.trim();
  a.length
    ? od(a)
    : ud(O("Games_hashError").replace("%1", window.location.hash));
  pd = nd();
}
function ud(a) {
  if ("object" === typeof Q) {
    var c = document.getElementById("linkButton");
    Q.DF(c, a);
  } else alert(a);
}
var B = null,
  wd = "",
  xd = "";
function yd() {
  Tc();
  var a = document.getElementById("linkButton");
  a && (Rc ? (a.style.display = "none") : ((nd = zd), (od = Ad), Xc(a, qd)));
  (a = document.getElementById("languageMenu")) &&
    a.addEventListener("change", Bd, !0);
}
function Cd() {
  var a =
    '<xml><block movable="' +
    (1 != N) +
    '" type="maze_moveForward" x="70" y="70"></block></xml>';
  if (!Rc && 1 < window.location.hash.length)
    rd("key=" + encodeURIComponent(window.location.hash.substring(1)), vd);
  else {
    var c = null;
    try {
      c = window.sessionStorage.Rr;
    } catch (e) {}
    c && delete window.sessionStorage.Rr;
    var d = Uc(N);
    (a = c || d || a) && Ad(a);
  }
}
function Ad(a) {
  a = h.N.Ee(a);
  B.clear();
  h.N.Ih(a, B);
  a = B;
  a.zi.length = 0;
  a.Pl.length = 0;
  h.h.fC();
}
function zd() {
  var a = h.N.kz(!0);
  if (1 == B.qb(!1).length && a.querySelector) {
    var c = a.querySelector("block");
    c && (c.removeAttribute("x"), c.removeAttribute("y"));
  }
  return h.N.Hd(a);
}
function Dd() {
  "object" == typeof BlocklyStorage &&
    null !== pd &&
    pd != zd() &&
    ((window.location.hash = ""), (pd = null));
}
function Ed(a) {
  var c = document.getElementById("toolbox");
  c && (a.toolbox = c);
  a.media = "third-party/blockly/media/";
  a.oneBasedIndex = !1;
  B = h.Qg("blockly", a);
  F(B, Dd);
}
function Fd() {
  window.location = (Rc ? "index.html" : "./") + "?lang=" + M;
}
function Bd() {
  window.sessionStorage && (window.sessionStorage.Rr = zd());
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
function Gd() {
  10 > N
    ? (window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        M +
        "&level=" +
        (N + 1))
    : Fd();
}
function Hd(a) {
  if (a) {
    var c = a.match(/^block_id_([^']+)$/);
    c && (a = c[1]);
  }
  Ec(a, void 0);
}
function Id(a) {
  a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
  return a.replace(/\s+$/, "");
}
function Jd(a) {
  if (
    ("click" == a.type && "touchend" == Kd && Ld + 2e3 > Date.now()) ||
    (Kd == a.type && Ld + 400 > Date.now())
  )
    return a.preventDefault(), a.stopPropagation(), !0;
  Kd = a.type;
  Ld = Date.now();
  return !1;
}
var Kd = null,
  Ld = 0;
function Md() {
  setTimeout(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/JS-Interpreter/compressed.js";
    document.head.appendChild(a);
  }, 1);
}
function Nd() {
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
  Vh: !1,
  Bw: null,
  Dn: null,
  Zl: function (a, c, d, e, f, g) {
    function k() {
      Q.Vh &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    Q.Vh && Q.Kd(!1);
    h.$f() && h.dc(!0);
    Q.Vh = !0;
    Q.Bw = c;
    Q.Dn = g;
    var l = document.getElementById("dialog");
    g = document.getElementById("dialogShadow");
    var m = document.getElementById("dialogBorder"),
      n;
    for (n in f) l.style[n] = f[n];
    e &&
      ((g.style.visibility = "visible"),
      (g.style.opacity = 0.3),
      (g.style.zIndex = 9),
      (e = document.createElement("div")),
      (e.id = "dialogHeader"),
      l.appendChild(e),
      (Q.Dq = h.Xb(e, "mousedown", null, Q.xC)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    d && c ? (Q.jo(c, !1, 0.2), Q.jo(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  Cw: 0,
  Dw: 0,
  xC: function (a) {
    Q.Gq();
    if (!h.g.zl(a)) {
      var c = document.getElementById("dialog");
      Q.Cw = c.offsetLeft - a.clientX;
      Q.Dw = c.offsetTop - a.clientY;
      Q.Fq = h.Xb(document, "mouseup", null, Q.Gq);
      Q.Eq = h.Xb(document, "mousemove", null, Q.yC);
      a.stopPropagation();
    }
  },
  yC: function (a) {
    var c = document.getElementById("dialog"),
      d = Q.Cw + a.clientX;
    a = Q.Dw + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - c.offsetHeight);
    d = Math.max(d, 0);
    d = Math.min(d, window.innerWidth - c.offsetWidth);
    c.style.left = d + "px";
    c.style.top = a + "px";
  },
  Gq: function () {
    Q.Fq && (h.sb(Q.Fq), (Q.Fq = null));
    Q.Eq && (h.sb(Q.Eq), (Q.Eq = null));
  },
  Kd: function (a) {
    function c() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (Q.Vh) {
      Q.Gq();
      Q.Dq && (h.sb(Q.Dq), (Q.Dq = null));
      Q.Vh = !1;
      Q.Dn && Q.Dn();
      Q.Dn = null;
      var d = !1 === a ? null : Q.Bw;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      d && a ? (Q.jo(a, !1, 0.8), Q.jo(d, !0, 0.2), setTimeout(c, 175)) : c();
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
  jo: function (a, c, d) {
    function e() {
      f.style.width = g.width + "px";
      f.style.height = g.height + "px";
      f.style.left = g.x + "px";
      f.style.top = g.y + "px";
      f.style.opacity = d;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        g = Q.Tw(a);
      c
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  Tw: function (a) {
    var c = h.g.style.Oh(a);
    c = { x: c.x, y: c.y };
    a.getBBox
      ? ((a = a.getBBox()), (c.height = a.height), (c.width = a.width))
      : ((c.height = a.offsetHeight), (c.width = a.offsetWidth));
    return c;
  },
  DF: function (a, c) {
    var d = document.getElementById("containerStorage");
    d.textContent = "";
    c = c.split("\n");
    for (var e = 0; e < c.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(c[e]));
      d.appendChild(f);
    }
    d = document.getElementById("dialogStorage");
    Q.Zl(d, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, Q.Ty);
    Q.Py();
  },
  Pv: function () {
    if (!Uc(N))
      if (Q.Vh || B.rd()) setTimeout(Q.Pv, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          c = document.getElementById("abortCancel");
        c.addEventListener("click", Q.Kd, !0);
        c.addEventListener("touchend", Q.Kd, !0);
        c = document.getElementById("abortOk");
        c.addEventListener("click", Fd, !0);
        c.addEventListener("touchend", Fd, !0);
        Q.Zl(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function () {
            document.body.removeEventListener("keydown", Q.Ov, !0);
          }
        );
        document.body.addEventListener("keydown", Q.Ov, !0);
      }
  },
  kC: function () {
    var a = document.getElementById("dialogDone");
    if (B) {
      var c = document.getElementById("dialogLinesText");
      c.textContent = "";
      var d = xd;
      d = Id(d);
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
    c.addEventListener("click", Q.Kd, !0);
    c.addEventListener("touchend", Q.Kd, !0);
    c = document.getElementById("doneOk");
    c.addEventListener("click", Gd, !0);
    c.addEventListener("touchend", Gd, !0);
    Q.Zl(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function () {
        document.body.removeEventListener("keydown", Q.iw, !0);
      }
    );
    document.body.addEventListener("keydown", Q.iw, !0);
    document.getElementById("dialogDoneText").textContent = d;
  },
  Aw: function (a) {
    !Q.Vh ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (Q.Kd(!0), a.stopPropagation(), a.preventDefault());
  },
  Py: function () {
    document.body.addEventListener("keydown", Q.Aw, !0);
  },
  Ty: function () {
    document.body.removeEventListener("keydown", Q.Aw, !0);
  },
  iw: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      Q.Kd(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && Gd();
  },
  Ov: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      Q.Kd(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && Fd();
  },
};
window.BlocklyDialogs = Q;
Q.hideDialog = Q.Kd;
h.Generator = function (a) {
  this.ks = a;
};
h.Generator.Ku = "generated_function";
b = h.Generator.prototype;
b.uu = null;
b.Ym = null;
b.Zm = null;
b.FA = "  ";
b.Fz = 60;
b.Tm = [];
b.Ir = null;
function Od(a, c) {
  return c + a.replace(/(?!\n$)\n/g, "\n" + c);
}
function Pd(a, c) {
  !1 === a.Ir &&
    console.warn(
      "Generator init was not called before blockToCode was called."
    );
  if (!c) return "";
  if (!c.isEnabled()) return Pd(a, u(c));
  if (c.ye()) return Pd(a, C(c, !1)[0]);
  var d = a[c.type];
  if ("function" != typeof d)
    throw Error(
      'Language "' +
        a.ks +
        '" does not know how to generate  code for block type "' +
        c.type +
        '".'
    );
  d = d.call(c, c);
  if (Array.isArray(d)) {
    if (!c.M)
      throw TypeError("Expecting string from statement block: " + c.type);
    return [a.Zs(c, d[0], void 0), d[1]];
  }
  if ("string" == typeof d)
    return (
      a.Ym && !c.nt && (d = Qd(a.Ym, c) + d),
      a.Zm && !c.nt && (d += Qd(a.Zm, c)),
      a.Zs(c, d, void 0)
    );
  if (null === d) return "";
  throw SyntaxError("Invalid code generated: " + d);
}
function Rd(a, c, d) {
  var e = h.H;
  if (isNaN(d)) throw TypeError("Expecting valid order from block: " + a.type);
  var f = $b(a, c);
  if (!f) return "";
  c = Pd(e, f);
  if ("" === c) return "";
  if (!Array.isArray(c))
    throw TypeError("Expecting tuple from value block: " + f.type);
  a = c[0];
  c = c[1];
  if (isNaN(c))
    throw TypeError("Expecting valid order from value block: " + f.type);
  if (!a) return "";
  f = !1;
  var g = Math.floor(d),
    k = Math.floor(c);
  if (g <= k && (g != k || (0 != g && 99 != g)))
    for (f = !0, g = 0; g < e.Tm.length; g++)
      if (e.Tm[g][0] == d && e.Tm[g][1] == c) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function Sd(a, c) {
  var d = h.H;
  a = $b(a, c);
  c = Pd(d, a);
  if ("string" != typeof c)
    throw TypeError("Expecting code from statement block: " + (a && a.type));
  c && (c = Od(c, d.FA));
  return c;
}
function Qd(a, c) {
  c = c.id.replace(/\$/g, "$$$$");
  return a.replace(/%1/g, "'" + c + "'");
}
b.Jp = "";
function Td(a, c) {
  a.Jp += c + ",";
}
b.Fa = function () {};
b.Zs = function (a, c) {
  return c;
};
b.finish = function (a) {
  return a;
};
b.Ky = function (a) {
  return a;
};
h.H = new h.Generator("JavaScript");
Td(
  h.H,
  "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," +
    Object.getOwnPropertyNames(h.g.global).join(",")
);
h.H.KH = 0;
h.H.bI = 1.1;
h.H.Sm = 1.2;
h.H.Rm = 2;
h.H.ZH = 3;
h.H.TH = 3;
h.H.NH = 4.1;
h.H.eI = 4.2;
h.H.Uu = 4.3;
h.H.Qu = 4.4;
h.H.dI = 4.5;
h.H.fI = 4.6;
h.H.UH = 4.7;
h.H.LH = 4.8;
h.H.XH = 5;
h.H.Su = 5.1;
h.H.VH = 5.2;
h.H.aI = 5.3;
h.H.Tu = 6.1;
h.H.Qm = 6.2;
h.H.PH = 7;
h.H.cI = 8;
h.H.YH = 8;
h.H.$H = 8;
h.H.WH = 9;
h.H.MH = 10;
h.H.QH = 11;
h.H.OH = 12;
h.H.Pu = 13;
h.H.Ru = 14;
h.H.SH = 15;
h.H.JH = 16;
h.H.gI = 17;
h.H.RH = 18;
h.H.gB = 99;
h.H.Tm = [
  [h.H.Rm, h.H.Sm],
  [h.H.Rm, h.H.Rm],
  [h.H.Sm, h.H.Sm],
  [h.H.Sm, h.H.Rm],
  [h.H.Qu, h.H.Qu],
  [h.H.Su, h.H.Su],
  [h.H.Qm, h.H.Qm],
  [h.H.Pu, h.H.Pu],
  [h.H.Ru, h.H.Ru],
];
h.H.Ir = !1;
h.H.Fa = function (a) {
  h.H.Bn = Object.create(null);
  h.H.SC = Object.create(null);
  h.H.rm ? h.H.rm.reset() : (h.H.rm = new h.zd(h.H.Jp));
  h.H.rm.et(a.Qa);
  for (var c = [], d = h.la.OB(a), e = 0; e < d.length; e++)
    c.push(Nc(d[e], h.zd.mp));
  a = h.la.Uv(a);
  for (e = 0; e < a.length; e++) c.push(Nc(a[e].yc(), h.$i));
  c.length && (h.H.Bn.variables = "var " + c.join(", ") + ";");
  this.Ir = !0;
};
h.H.finish = function (a) {
  var c = [],
    d;
  for (d in h.H.Bn) c.push(h.H.Bn[d]);
  delete h.H.Bn;
  delete h.H.SC;
  h.H.rm.reset();
  return c.join("\n\n") + "\n\n\n" + a;
};
h.H.Ky = function (a) {
  return a + ";\n";
};
h.H.AE = function (a) {
  a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
  return "'" + a + "'";
};
h.H.LJ = function (a) {
  return a.split(/\n/g).map(h.H.AE).join(" + '\\n' +\n");
};
h.H.Zs = function (a, c, d) {
  var e = "";
  if (!a.M || !a.M.pa) {
    var f = a.se.text;
    f && ((f = h.g.Sa.lz(f, h.H.Fz - 3)), (e += Od(f + "\n", "// ")));
    for (var g = 0; g < a.S.length; g++)
      if (a.S[g].type == h.lb) {
        var k = a.S[g].connection.ua();
        if (k) {
          f = [];
          k = q(k, !0);
          for (var l = 0; l < k.length; l++) {
            var m = k[l].se.text;
            m && f.push(m);
          }
          f.length && f.push("");
          (f = f.join("\n")) && (e += Od(f, "// "));
        }
      }
  }
  a = a.Y && a.Y.ua();
  d = d ? "" : Pd(h.H, a);
  return e + c + d;
};
h.H.oJ = function (a, c, d, e, f) {
  d = d || 0;
  f = f || h.H.gB;
  a.C.options.Ao && d--;
  var g = a.C.options.Ao ? "1" : "0";
  a =
    0 < d
      ? Rd(a, c, h.H.Qm) || g
      : 0 > d
      ? Rd(a, c, h.H.Tu) || g
      : e
      ? Rd(a, c, h.H.Uu) || g
      : Rd(a, c, f) || g;
  if (h.ND(a)) (a = Number(a) + d), e && (a = -a);
  else {
    if (0 < d) {
      a = a + " + " + d;
      var k = h.H.Qm;
    } else 0 > d && ((a = a + " - " + -d), (k = h.H.Tu));
    e && ((a = d ? "-(" + a + ")" : "-" + a), (k = h.H.Uu));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
h.ce = function (a, c, d, e, f, g, k) {
  if (!a) throw Error("Src value of an image field is required");
  a = h.g.dd(a);
  d = Number(h.g.dd(d));
  c = Number(h.g.dd(c));
  if (isNaN(d) || isNaN(c))
    throw Error(
      "Height and width values of an image field must cast to numbers."
    );
  if (0 >= d || 0 >= c)
    throw Error(
      "Height and width values of an image field must be greater than 0."
    );
  this.fl = !1;
  this.kn = "";
  h.ce.u.constructor.call(this, a, null, k);
  k || ((this.fl = !!g), (this.kn = h.g.dd(e) || ""));
  this.Bc = new h.g.le(c, d + h.ce.JB);
  this.CD = d;
  this.Tf = null;
  "function" == typeof f && (this.Tf = f);
  this.Pc = null;
};
h.g.object.U(h.ce, h.wd);
h.ce.prototype.kp = "";
h.ce.ba = function (a) {
  return new h.ce(a.src, a.width, a.height, void 0, void 0, void 0, a);
};
h.ce.JB = 1;
b = h.ce.prototype;
b.hk = !1;
b.Rg = !1;
b.Mk = function (a) {
  h.ce.u.Mk.call(this, a);
  this.fl = !!a.flipRtl;
  this.kn = h.g.dd(a.alt) || "";
};
b.Sn = function () {
  this.Pc = h.g.j.K(
    h.g.F.mk,
    { height: this.CD + "px", width: this.Bc.width + "px", alt: this.kn },
    this.Zc
  );
  this.Pc.setAttributeNS(h.g.j.jd, "xlink:href", this.wf);
  this.Tf && (this.Pc.style.cursor = "pointer");
};
b.dz = function () {};
b.Gn = function (a) {
  return "string" != typeof a ? null : a;
};
b.Zk = function (a) {
  this.wf = a;
  this.Pc && this.Pc.setAttributeNS(h.g.j.jd, "xlink:href", String(this.wf));
};
b.Zw = function () {
  return this.fl;
};
b.$l = function () {
  this.Tf && this.Tf(this);
};
b.vr = function () {
  return this.kn;
};
h.Kh.register("field_image", h.ce);
var Ud = {},
  R,
  Vd,
  Wd,
  S,
  T,
  U,
  Xd;
h.rc.maze_moveForward = {
  Fa: function () {
    Zb(this, {
      message0: O("Maze_moveForward"),
      previousStatement: null,
      nextStatement: null,
      colour: 290,
      tooltip: O("Maze_moveForwardTooltip"),
    });
  },
};
h.H.maze_moveForward = function (a) {
  return "moveForward('block_id_" + a.id + "');\n";
};
h.rc.maze_turn = {
  Fa: function () {
    var a = [
      [O("Maze_turnLeft"), "turnLeft"],
      [O("Maze_turnRight"), "turnRight"],
    ];
    a[0][0] += " \u21ba";
    a[1][0] += " \u21bb";
    this.Be(290);
    K(Yb(this), new h.Ya(a), "DIR");
    this.si(!0);
    this.Vj(!0);
    this.De(O("Maze_turnTooltip"));
  },
};
h.H.maze_turn = function (a) {
  return bb(a, "DIR") + "('block_id_" + a.id + "');\n";
};
h.rc.maze_if = {
  Fa: function () {
    var a = [
      [O("Maze_pathAhead"), "isPathForward"],
      [O("Maze_pathLeft"), "isPathLeft"],
      [O("Maze_pathRight"), "isPathRight"],
    ];
    a[1][0] += " \u21ba";
    a[2][0] += " \u21bb";
    this.Be(210);
    K(Yb(this), new h.Ya(a), "DIR");
    K(this.Pf(h.Ta, "DO"), O("Maze_doCode"));
    this.De(O("Maze_ifTooltip"));
    this.si(!0);
    this.Vj(!0);
  },
};
h.H.maze_if = function (a) {
  var c = bb(a, "DIR") + "('block_id_" + a.id + "')";
  a = Sd(a, "DO");
  return "if (" + c + ") {\n" + a + "}\n";
};
h.rc.maze_ifElse = {
  Fa: function () {
    var a = [
      [O("Maze_pathAhead"), "isPathForward"],
      [O("Maze_pathLeft"), "isPathLeft"],
      [O("Maze_pathRight"), "isPathRight"],
    ];
    a[1][0] += " \u21ba";
    a[2][0] += " \u21bb";
    this.Be(210);
    K(Yb(this), new h.Ya(a), "DIR");
    K(this.Pf(h.Ta, "DO"), O("Maze_doCode"));
    K(this.Pf(h.Ta, "ELSE"), O("Maze_elseCode"));
    this.De(O("Maze_ifelseTooltip"));
    this.si(!0);
    this.Vj(!0);
  },
};
h.H.maze_ifElse = function (a) {
  var c = bb(a, "DIR") + "('block_id_" + a.id + "')",
    d = Sd(a, "DO");
  a = Sd(a, "ELSE");
  return "if (" + c + ") {\n" + d + "} else {\n" + a + "}\n";
};
h.rc.maze_forever = {
  Fa: function () {
    this.Be(120);
    K(K(Yb(this), O("Maze_repeatUntil")), new h.ce(V.io, 12, 16));
    K(this.Pf(h.Ta, "DO"), O("Maze_doCode"));
    this.si(!0);
    this.De(O("Maze_whileTooltip"));
  },
};
h.H.maze_forever = function (a) {
  var c = Sd(a, "DO");
  h.H.uu && (c = h.H.uu.replace(/%1/g, "'block_id_" + a.id + "'") + c);
  return "while (notDone()) {\n" + c + "}\n";
};
var Yd = Yd || {};
function Zd(a, c) {
  function d() {}
  d.prototype = c.prototype;
  a.u = c.prototype;
  a.prototype = new d();
  a.prototype.constructor = a;
  a.WI = function (e, f, g) {
    return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2));
  };
}
if (!$d) {
  var $d,
    ae = "";
  "undefined" !== typeof navigator &&
    navigator &&
    "string" == typeof navigator.userAgent &&
    (ae = navigator.userAgent);
  var be = 0 == ae.indexOf("Opera");
  $d = {
    JJ: { UG: "ScriptEngine" in window },
    IH: be,
    ee: !be && -1 != ae.indexOf("MSIE"),
    Hv: !be && -1 != ae.indexOf("WebKit"),
  };
}
if (!ee) var ee = {};
if (!fe) var fe = {};
if (!ge) var ge = {};
if (!he) var he = {};
if (!ie) var ie = {};
if (!je) var je = {};
var ke = Yd.Oz ? { XJ: !0 } : {},
  le = Yd.Oz ? { YJ: !0 } : {};
function me() {
  throw Error("Do not instantiate directly");
}
me.prototype.nw = null;
me.prototype.toString = function () {
  return this.content;
};
function ne(a) {
  if (null != a)
    switch (a.nw) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function oe() {
  me.call(this);
}
Zd(oe, me);
oe.prototype.ow = ke;
function W(a) {
  return null != a && a.ow === ke
    ? a
    : pe(String(String(a)).replace(qe, re), ne(a));
}
var pe = (function (a) {
    function c() {}
    c.prototype = a.prototype;
    return function (d, e) {
      var f = new c();
      f.content = String(d);
      void 0 !== e && (f.nw = e);
      return f;
    };
  })(oe),
  se = {
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
function re(a) {
  return se[a];
}
var qe = /[\x00\x22\x26\x27\x3c\x3e]/g;
function te() {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
}
function ue() {
  var a = M,
    c = N,
    d = 10,
    e = ve,
    f = Rc,
    g = "Maze",
    k = "skin=" + W(e);
  e = !0;
  var l = !1,
    m =
      '<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button>';
  f =
    '<table width="100%"><tr><td><h1><span id="title">' +
    ((f
      ? '<a href="index.html?lang=' + W(a) + '">'
      : '<a href="./?lang=' + W(a) + '">') +
      "Codekid</a> : " +
      W(g) +
      "</span>");
  if (c) {
    g = "" + (k ? W(k) : "");
    k = " &nbsp; ";
    for (var n = d + 1, p = 1; p < n; p++) {
      var r = "?lang=" + W(a) + "&level=" + W(p) + (g ? "&" + W(g) : "");
      k +=
        " " +
        (p == c
          ? '<span class="level_number level_done" id="level' +
            W(p) +
            '">' +
            W(p) +
            "</span>"
          : p == d
          ? '<a class="level_number" id="level' +
            W(p) +
            '" href="' +
            W(r) +
            '">' +
            W(p) +
            "</a>"
          : '<a class="level_dot" id="level' +
            W(p) +
            '" href="' +
            W(r) +
            '"></a>');
    }
    a = k;
  } else a = "";
  m
    ? ((d = m), (d = "&nbsp;" + (null != d && d.ow === le ? "zSoyz" : d)))
    : (d = "");
  return (
    '<div style="display: none"><span id="Games_name">Codekid</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Maze_moveForward">move forward</span><span id="Maze_turnLeft">turn left</span><span id="Maze_turnRight">turn right</span><span id="Maze_doCode">do</span><span id="Maze_elseCode">else</span><span id="Maze_helpIfElse">If-else blocks will do one thing or the other.</span><span id="Maze_pathAhead">if path ahead</span><span id="Maze_pathLeft">if path to the left</span><span id="Maze_pathRight">if path to the right</span><span id="Maze_repeatUntil">repeat until</span><span id="Maze_moveForwardTooltip">Moves the player forward one space.</span><span id="Maze_turnTooltip">Turns the player left or right by 90 degrees.</span><span id="Maze_ifTooltip">If there is a path in the specified direction, then do some actions.</span><span id="Maze_ifelseTooltip">If there is a path in the specified direction, then do the first block of actions. Otherwise, do the second block of actions.</span><span id="Maze_whileTooltip">Repeat the enclosed actions until finish point is reached.</span><span id="Maze_capacity0">You have %0 blocks left.</span><span id="Maze_capacity1">You have %1 block left.</span><span id="Maze_capacity2">You have %2 blocks left.</span></div>' +
    (f +
      a +
      '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' +
      (e
        ? '&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>'
        : "") +
      (l ? '&nbsp;<button id="helpButton">Help</button>' : "") +
      d +
      '</td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Makes the player do what the blocks say."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Put the player back at the start of the maze."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>') +
    ((2 < c
      ? '<block type="maze_forever"></block>' +
        (6 == c
          ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>'
          : 6 < c
          ? '<block type="maze_if"></block>' +
            (8 < c ? '<block type="maze_ifElse"></block>' : "")
          : "")
      : "") +
      '</xml><div id="blockly"></div><div id="pegmanMenu"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div>') +
    (te() + "</div>") +
    (1 == c
      ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Stack a couple of \'move forward\' blocks together to help me reach the goal.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>On this level, you need to stack together all of the blocks in the white workspace.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Run your program to see what happens.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>'
      : 2 == c
      ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Your program didn\'t solve the maze. Press \'Reset\' and try again.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>'
      : 3 == c || 4 == c
      ? (3 == c
          ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Reach the end of this path using only two blocks. Use \'repeat\' to run a block more than once.</td><td><img src="common/help.png"></td></tr></table></div>'
          : "") +
        '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>You have used up all the blocks for this level. To create a new block, you first need to delete an existing block.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>You can fit more than one block inside a \'repeat\' block.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 5 == c
      ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Choose your favourite player from this menu.</td><td><img src="maze/help_up.png"></td></tr></table></div>'
      : 6 == c
      ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>An \'if\' block will do something only if the condition is true. Try turning left if there is a path to the left.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 7 == c
      ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Click on %1 in the \'if\' block to change its condition.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 9 == c
      ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>If-else blocks will do one thing or the other.</td><td><img src="common/help.png"></td></tr></table></div>'
      : 10 == c
      ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Can you solve this complicated maze? Try following the left-hand wall. Advanced programmers only!' +
        te() +
        "</td></tr></table></div>"
      : "")
  );
}
var Wc = "maze";
Gd = function () {
  10 > N
    ? (window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        M +
        "&level=" +
        (N + 1) +
        "&skin=" +
        ve)
    : Fd();
};
var we = [void 0, Infinity, Infinity, 2, 5, 5, 5, 5, 10, 7, 10][N],
  xe = [
    {
      Xj: "maze/pegman.png",
      ot: "maze/tiles_pegman.png",
      io: "maze/marker.png",
      background: !1,
      Tr: "#000",
      zt: ["maze/win.mp3", "maze/win.ogg"],
      xq: ["maze/fail_pegman.mp3", "maze/fail_pegman.ogg"],
      zn: 1,
    },
    {
      Xj: "maze/astro.png",
      ot: "maze/tiles_astro.png",
      io: "maze/marker.png",
      background: "maze/bg_astro.jpg",
      Tr: "#fff",
      zt: ["maze/win.mp3", "maze/win.ogg"],
      xq: ["maze/fail_astro.mp3", "maze/fail_astro.ogg"],
      zn: 2,
    },
    {
      Xj: "maze/panda.png",
      ot: "maze/tiles_panda.png",
      io: "maze/marker.png",
      background: "maze/bg_panda.jpg",
      Tr: "#000",
      zt: ["maze/win.mp3", "maze/win.ogg"],
      xq: ["maze/fail_panda.mp3", "maze/fail_panda.ogg"],
      zn: 3,
    },
  ],
  ve = Sc("skin", 0, xe.length),
  V = xe[ve],
  X = [
    void 0,
    [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 2, 1, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 1, 3, 0, 0, 0],
      [0, 0, 2, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 2, 1, 1, 1, 1, 3, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 1],
      [0, 0, 0, 0, 0, 0, 1, 1],
      [0, 0, 0, 0, 0, 3, 1, 0],
      [0, 0, 0, 0, 1, 1, 0, 0],
      [0, 0, 0, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 0, 0, 0, 0],
      [0, 2, 1, 0, 0, 0, 0, 0],
      [1, 1, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 3, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 0, 0, 2, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0],
      [0, 1, 0, 0, 0, 1, 0, 0],
      [0, 1, 1, 3, 0, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 0, 0],
      [0, 2, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0],
      [0, 2, 1, 1, 1, 1, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 0],
      [0, 1, 1, 3, 0, 1, 0, 0],
      [0, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 0, 0, 1, 1, 0, 0],
      [0, 1, 1, 1, 0, 1, 0, 0],
      [0, 0, 0, 1, 0, 1, 0, 0],
      [0, 2, 1, 1, 0, 3, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 0, 0],
      [0, 0, 1, 0, 0, 0, 0, 0],
      [3, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 1, 0],
      [1, 1, 1, 1, 1, 0, 1, 0],
      [0, 1, 0, 1, 0, 2, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 1, 1, 0, 3, 0, 1, 0],
      [0, 1, 1, 0, 1, 1, 1, 0],
      [0, 1, 0, 1, 0, 1, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 0, 0, 1, 0],
      [0, 2, 1, 1, 1, 0, 1, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ],
  ][N],
  ye = X.length,
  ze = X[0].length,
  Ae = 50 * ze,
  Be = 50 * ye,
  Ce = 0,
  Y = [],
  De = {
    10010: [4, 0],
    10001: [3, 3],
    11e3: [0, 1],
    10100: [0, 2],
    11010: [4, 1],
    10101: [3, 2],
    10110: [0, 0],
    10011: [2, 0],
    11001: [4, 2],
    11100: [2, 3],
    11110: [1, 1],
    10111: [1, 0],
    11011: [2, 1],
    11101: [1, 2],
    11111: [2, 2],
    null0: [4, 3],
    null1: [3, 0],
    null2: [3, 1],
    null3: [0, 3],
    null4: [1, 3],
  };
function Ee() {
  function a(m, n) {
    return 0 > m || m >= ze || 0 > n || n >= ye
      ? "0"
      : 0 == X[n][m]
      ? "0"
      : "1";
  }
  var c = document.getElementById("svgMaze"),
    d = 50 * Math.max(ye, ze);
  c.setAttribute("viewBox", "0 0 " + d + " " + d);
  h.g.j.K(
    "rect",
    {
      height: Be,
      width: Ae,
      fill: "#F1EEE7",
      "stroke-width": 1,
      stroke: "#CCB",
    },
    c
  );
  if (V.background) {
    var e = h.g.j.K("image", { height: Be, width: Ae, x: 0, y: 0 }, c);
    e.setAttributeNS(h.g.j.jd, "xlink:href", V.background);
  }
  for (var f = (d = 0); f < ye; f++)
    for (var g = 0; g < ze; g++) {
      var k = a(g, f) + a(g, f - 1) + a(g + 1, f) + a(g, f + 1) + a(g - 1, f);
      De[k] ||
        (k =
          "00000" == k && 0.3 < Math.random()
            ? "null0"
            : "null" + Math.floor(1 + 4 * Math.random()));
      e = De[k][0];
      k = De[k][1];
      var l = h.g.j.K("clipPath", { id: "tileClipPath" + d }, c);
      h.g.j.K("rect", { height: 50, width: 50, x: 50 * g, y: 50 * f }, l);
      e = h.g.j.K(
        "image",
        {
          height: 200,
          width: 250,
          "clip-path": "url(#tileClipPath" + d + ")",
          x: 50 * (g - e),
          y: 50 * (f - k),
        },
        c
      );
      e.setAttributeNS(h.g.j.jd, "xlink:href", V.ot);
      d++;
    }
  h.g.j
    .K("image", { id: "finish", height: 34, width: 20 }, c)
    .setAttributeNS(h.g.j.jd, "xlink:href", V.io);
  d = h.g.j.K("clipPath", { id: "pegmanClipPath" }, c);
  h.g.j.K("rect", { id: "clipRect", height: 52, width: 49 }, d);
  h.g.j
    .K(
      "image",
      {
        id: "pegman",
        height: 52,
        width: 1029,
        "clip-path": "url(#pegmanClipPath)",
      },
      c
    )
    .setAttributeNS(h.g.j.jd, "xlink:href", V.Xj);
}
function Fe(a) {
  if (!((a && a.Kr) || B.rd() || 1 == Ce || Uc(N))) {
    a = -1 != Pc.indexOf(M);
    var c = h.N.Hd(h.N.kz()),
      d = B.ma.o.qb(!0),
      e = null,
      f = null,
      g = null;
    if (1 == N)
      2 > E(B).length
        ? ((e = document.getElementById("dialogHelpStack")),
          (g = { width: "370px", top: "130px" }),
          (g[a ? "right" : "left"] = "215px"),
          (f = d[0].qa()))
        : ((d = B.qb(!0)),
          1 < d.length
            ? ((e = '<xml>;<block type="maze_moveForward" x="10" y="10">;<next>;<block type="maze_moveForward"></block>;</next>;</block>;</xml>'.split(
                ";"
              )),
              (f = document.getElementById("sampleOneTopBlock")),
              f.firstChild ||
                ((f = h.Qg(f, { rtl: -1 != Pc.indexOf(M), readOnly: !0 })),
                "string" != typeof e && (e = e.join("")),
                h.N.Ih(h.N.Ee(e), f)),
              (e = document.getElementById("dialogHelpOneTopBlock")),
              (g = { width: "360px", top: "120px" }),
              (g[a ? "right" : "left"] = "225px"),
              (f = d[0].qa()))
            : 0 == Ce &&
              ((e = document.getElementById("dialogHelpRun")),
              (g = { width: "360px", top: "410px" }),
              (g[a ? "right" : "left"] = "400px"),
              (f = document.getElementById("runButton"))));
    else if (2 == N)
      0 != Ce &&
        "none" == document.getElementById("runButton").style.display &&
        ((e = document.getElementById("dialogHelpReset")),
        (g = { width: "360px", top: "410px" }),
        (g[a ? "right" : "left"] = "400px"),
        (f = document.getElementById("resetButton")));
    else if (3 == N)
      -1 == c.indexOf("maze_forever") &&
        (0 == eb(B)
          ? ((e = document.getElementById("dialogHelpCapacity")),
            (g = { width: "430px", top: "310px" }),
            (g[a ? "right" : "left"] = "50px"),
            (f = document.getElementById("capacityBubble")))
          : ((e = document.getElementById("dialogHelpRepeat")),
            (g = { width: "360px", top: "360px" }),
            (g[a ? "right" : "left"] = "425px"),
            (f = d[3].qa())));
    else if (4 == N)
      if (
        0 == eb(B) &&
        (-1 == c.indexOf("maze_forever") || 1 < B.qb(!1).length)
      )
        (e = document.getElementById("dialogHelpCapacity")),
          (g = { width: "430px", top: "310px" }),
          (g[a ? "right" : "left"] = "50px"),
          (f = document.getElementById("capacityBubble"));
      else {
        c = !0;
        for (var k = E(B), l = 0; l < k.length; l++) {
          var m = k[l];
          if ("maze_forever" == m.type) {
            for (var n = 0; m; ) (m = C(m)), (m = m.length ? m[0] : null), n++;
            if (2 < n) {
              c = !1;
              break;
            }
          }
        }
        c &&
          ((e = document.getElementById("dialogHelpRepeatMany")),
          (g = { width: "360px", top: "360px" }),
          (g[a ? "right" : "left"] = "425px"),
          (f = d[3].qa()));
      }
    else if (5 == N)
      0 != ve ||
        Ge.NB ||
        ((e = document.getElementById("dialogHelpSkins")),
        (g = { width: "360px", top: "60px" }),
        (g[a ? "left" : "right"] = "20px"),
        (f = document.getElementById("pegmanButton")));
    else if (6 == N)
      -1 == c.indexOf("maze_if") &&
        ((e = document.getElementById("dialogHelpIf")),
        (g = { width: "360px", top: "430px" }),
        (g[a ? "right" : "left"] = "425px"),
        (f = d[4].qa()));
    else if (7 == N) {
      if (!Fe.FD) {
        k = document.createElement("span");
        k.className = "helpMenuFake";
        l = [O("Maze_pathAhead"), O("Maze_pathLeft"), O("Maze_pathRight")];
        n = h.g.Sa.fw(l);
        m = h.g.Sa.gw(l);
        k.textContent =
          (m ? l[0].slice(n, -m) : l[0].substring(n)) + " " + h.Ya.um;
        n = document.getElementById("helpMenuText");
        l = n.textContent;
        n.textContent = "";
        m = l.split(/%\d/);
        for (l = 0; l < m.length; l++)
          n.appendChild(document.createTextNode(m[l])),
            l != m.length - 1 && n.appendChild(k.cloneNode(!0));
        Fe.FD = !0;
      }
      -1 == c.indexOf("isPathRight") &&
        ((e = document.getElementById("dialogHelpMenu")),
        (g = { width: "360px", top: "430px" }),
        (g[a ? "right" : "left"] = "425px"),
        (f = d[4].qa()));
    } else
      9 == N &&
        -1 == c.indexOf("maze_ifElse") &&
        ((e = document.getElementById("dialogHelpIfElse")),
        (g = { width: "360px", top: "305px" }),
        (g[a ? "right" : "left"] = "425px"),
        (f = d[5].qa()));
    e
      ? e.parentNode != document.getElementById("dialog") &&
        Q.Zl(e, f, !0, !1, g, null)
      : Q.Kd(!1);
  }
}
function Ge(a) {
  var c = document.getElementById("pegmanMenu");
  "block" == c.style.display
    ? He(a)
    : Jd(a) ||
      ((a = document.getElementById("pegmanButton")),
      a.classList.add("buttonHover"),
      (c.style.top = a.offsetTop + a.offsetHeight + "px"),
      (c.style.left = a.offsetLeft + "px"),
      (c.style.display = "block"),
      (Ud.Es = h.Xb(document.body, "mousedown", null, He)),
      (c = document.getElementById("dialogHelpSkins")) &&
        "dialogHiddenContent" != c.className &&
        Q.Kd(!1),
      (Ge.NB = !0));
}
function He(a) {
  Jd(a) ||
    ((document.getElementById("pegmanMenu").style.display = "none"),
    document.getElementById("pegmanButton").classList.remove("buttonHover"),
    Ud.Es && (h.sb(Ud.Es), delete Ud.Es));
}
function Ie(a) {
  for (var c = 0; c < Y.length; c++) clearTimeout(Y[c]);
  Y = [];
  S = Vd.x;
  T = Vd.y;
  a
    ? ((U = 2),
      Je(!1),
      Y.push(
        setTimeout(function () {
          R = 100;
          Ke([S, T, 4 * U - 4]);
          U++;
        }, 5 * R)
      ))
    : ((U = 1), Z(S, T, 4 * U));
  c = document.getElementById("finish");
  c.setAttribute("x", 50 * (Wd.x + 0.5) - c.getAttribute("width") / 2);
  c.setAttribute("y", 50 * (Wd.y + 0.6) - c.getAttribute("height"));
  c = document.getElementById("look");
  c.style.display = "none";
  c.parentNode.appendChild(c);
  a = c.getElementsByTagName("path");
  c = 0;
  for (var d; (d = a[c]); c++) d.setAttribute("stroke", V.Tr);
}
function Le(a) {
  if (!Jd(a))
    if ((Q.Kd(!1), 1 == N && 1 < B.qb(!1).length && 1 != Ce && !Uc(N))) Fe();
    else {
      a = document.getElementById("runButton");
      var c = document.getElementById("resetButton");
      c.style.minWidth || (c.style.minWidth = a.offsetWidth + "px");
      a.style.display = "none";
      c.style.display = "inline";
      Ie(!1);
      Me();
    }
}
function Ne(a) {
  Jd(a) ||
    ((document.getElementById("runButton").style.display = "inline"),
    (document.getElementById("resetButton").style.display = "none"),
    Ec(null),
    Ie(!1),
    Fe());
}
function Oe(a, c) {
  var d = function (e) {
    Pe(0, e);
  };
  a.setProperty(c, "moveForward", a.createNativeFunction(d));
  d = function (e) {
    Pe(2, e);
  };
  a.setProperty(c, "moveBackward", a.createNativeFunction(d));
  d = function (e) {
    Qe(0, e);
  };
  a.setProperty(c, "turnLeft", a.createNativeFunction(d));
  d = function (e) {
    Qe(1, e);
  };
  a.setProperty(c, "turnRight", a.createNativeFunction(d));
  d = function (e) {
    return Re(0, e);
  };
  a.setProperty(c, "isPathForward", a.createNativeFunction(d));
  d = function (e) {
    return Re(1, e);
  };
  a.setProperty(c, "isPathRight", a.createNativeFunction(d));
  d = function (e) {
    return Re(2, e);
  };
  a.setProperty(c, "isPathBackward", a.createNativeFunction(d));
  d = function (e) {
    return Re(3, e);
  };
  a.setProperty(c, "isPathLeft", a.createNativeFunction(d));
  a.setProperty(
    c,
    "notDone",
    a.createNativeFunction(function () {
      return S != Wd.x || T != Wd.y;
    })
  );
}
function Me() {
  if ("Interpreter" in window) {
    Xd = [];
    h.selected && pb(h.selected);
    var a = h.H;
    var c = B;
    c ||
      (console.warn(
        "No workspace specified in workspaceToCode call.  Guessing."
      ),
      (c = h.$f()));
    var d = [];
    a.Fa(c);
    c = c.qb(!0);
    for (var e = 0, f; (f = c[e]); e++) {
      var g = Pd(a, f);
      Array.isArray(g) && (g = g[0]);
      g &&
        (f.M &&
          ((g = a.Ky(g)),
          a.Ym && !f.nt && (g = Qd(a.Ym, f) + g),
          a.Zm && !f.nt && (g += Qd(a.Zm, f))),
        d.push(g));
    }
    d = d.join("\n");
    d = a.finish(d);
    d = d.replace(/^\s+\n/, "");
    d = d.replace(/\n\s+$/, "\n");
    xd = a = d = d.replace(/[ \t]+\n/g, "\n");
    wd = zd();
    Ce = 0;
    a = new Interpreter(a, Oe);
    try {
      for (d = 1e4; a.step(); ) if (0 == d--) throw Infinity;
      Ce = S != Wd.x || T != Wd.y ? -1 : 1;
    } catch (k) {
      Infinity === k ? (Ce = 2) : !1 === k ? (Ce = -2) : ((Ce = -2), alert(k));
    }
    1 == Ce ? ((R = 100), Xd.push(["finish", null])) : (R = 150);
    Ie(!1);
    Y.push(setTimeout(Se, 100));
  } else setTimeout(Me, 250);
}
function Se() {
  var a = Xd.shift();
  if (a) {
    Hd(a[1]);
    switch (a[0]) {
      case "north":
        Ke([S, T - 1, 4 * U]);
        T--;
        break;
      case "east":
        Ke([S + 1, T, 4 * U]);
        S++;
        break;
      case "south":
        Ke([S, T + 1, 4 * U]);
        T++;
        break;
      case "west":
        Ke([S - 1, T, 4 * U]);
        S--;
        break;
      case "look_north":
        Te(0);
        break;
      case "look_east":
        Te(1);
        break;
      case "look_south":
        Te(2);
        break;
      case "look_west":
        Te(3);
        break;
      case "fail_forward":
        Ue(!0);
        break;
      case "fail_backward":
        Ue(!1);
        break;
      case "left":
        Ke([S, T, 4 * U - 4]);
        U = Ve(U - 1);
        break;
      case "right":
        Ke([S, T, 4 * U + 4]);
        U = Ve(U + 1);
        break;
      case "finish":
        Je(!0),
          window.localStorage && (window.localStorage[Wc + N] = wd),
          setTimeout(Q.kC, 1e3);
    }
    Y.push(setTimeout(Se, 5 * R));
  } else Hd(null), Fe();
}
function We(a) {
  if (
    "dialogHiddenContent" != document.getElementById("dialogDone").className
  ) {
    var c = document.getElementById("pegSpin"),
      d = Q.Tw(c),
      e = a.clientX - (d.x + d.width / 2 - window.pageXOffset);
    a = h.g.Od.IF(
      Math.atan((a.clientY - (d.y + d.height / 2 - window.pageYOffset)) / e)
    );
    e = Math.round(((0 < e ? a + 90 : a + 270) / 360) * 16);
    16 == e && (e = 15);
    c.style.backgroundPosition = 49 * -e + "px 0px";
  }
}
function Ke(a) {
  var c = [S, T, 4 * U],
    d = [(a[0] - c[0]) / 4, (a[1] - c[1]) / 4, (a[2] - c[2]) / 4];
  Z(c[0] + d[0], c[1] + d[1], Xe(c[2] + d[2]));
  Y.push(
    setTimeout(function () {
      Z(c[0] + 2 * d[0], c[1] + 2 * d[1], Xe(c[2] + 2 * d[2]));
    }, R)
  );
  Y.push(
    setTimeout(function () {
      Z(c[0] + 3 * d[0], c[1] + 3 * d[1], Xe(c[2] + 3 * d[2]));
    }, 2 * R)
  );
  Y.push(
    setTimeout(function () {
      Z(a[0], a[1], Xe(a[2]));
    }, 3 * R)
  );
}
function Ue(a) {
  var c = 0,
    d = 0;
  switch (U) {
    case 0:
      d = -1;
      break;
    case 1:
      c = 1;
      break;
    case 2:
      d = 1;
      break;
    case 3:
      c = -1;
  }
  a || ((c = -c), (d = -d));
  if (1 == V.zn) {
    c /= 4;
    d /= 4;
    var e = Xe(4 * U);
    Z(S + c, T + d, e);
    B.Wc.play("fail", 0.5);
    Y.push(
      setTimeout(function () {
        Z(S, T, e);
      }, R)
    );
    Y.push(
      setTimeout(function () {
        Z(S + c, T + d, e);
        B.Wc.play("fail", 0.5);
      }, 2 * R)
    );
    Y.push(
      setTimeout(function () {
        Z(S, T, e);
      }, 3 * R)
    );
  } else {
    var f = 10 * (Math.random() - 0.5),
      g = (Math.random() - 0.5) / 2;
    c += (Math.random() - 0.5) / 4;
    d += (Math.random() - 0.5) / 4;
    c /= 8;
    d /= 8;
    var k = 0;
    3 == V.zn && (k = 0.01);
    Y.push(
      setTimeout(function () {
        B.Wc.play("fail", 0.5);
      }, 2 * R)
    );
    a = function (m) {
      return function () {
        Z(S + c * m, T + d * m, Xe(4 * U + g * m), f * m);
        d += k;
      };
    };
    for (var l = 1; 100 > l; l++) Y.push(setTimeout(a(l), (R * l) / 2));
  }
}
function Je(a) {
  var c = Xe(4 * U);
  Z(S, T, 16);
  a && B.Wc.play("win", 0.5);
  R = 150;
  Y.push(
    setTimeout(function () {
      Z(S, T, 18);
    }, R)
  );
  Y.push(
    setTimeout(function () {
      Z(S, T, 16);
    }, 2 * R)
  );
  Y.push(
    setTimeout(function () {
      Z(S, T, c);
    }, 3 * R)
  );
}
function Z(a, c, d, e) {
  var f = document.getElementById("pegman");
  f.setAttribute("x", 50 * a - 49 * d + 1);
  f.setAttribute("y", 50 * (c + 0.5) - 26 - 8);
  e
    ? f.setAttribute(
        "transform",
        "rotate(" + e + ", " + (50 * a + 25) + ", " + (50 * c + 25) + ")"
      )
    : f.setAttribute("transform", "rotate(0, 0, 0)");
  c = document.getElementById("clipRect");
  c.setAttribute("x", 50 * a + 1);
  c.setAttribute("y", f.getAttribute("y"));
}
function Te(a) {
  var c = S,
    d = T;
  switch (a) {
    case 0:
      c += 0.5;
      break;
    case 1:
      c += 1;
      d += 0.5;
      break;
    case 2:
      c += 0.5;
      d += 1;
      break;
    case 3:
      d += 0.5;
  }
  c *= 50;
  d *= 50;
  var e = 90 * a - 45;
  a = document.getElementById("look");
  a.setAttribute(
    "transform",
    "translate(" + c + ", " + d + ") rotate(" + e + " 0 0) scale(.4)"
  );
  c = a.getElementsByTagName("path");
  a.style.display = "inline";
  for (d = 0; (a = c[d]); d++) Ye(a, R * d);
}
function Ye(a, c) {
  Y.push(
    setTimeout(function () {
      a.style.display = "inline";
      setTimeout(function () {
        a.style.display = "none";
      }, 2 * R);
    }, c)
  );
}
function Ve(a) {
  a = Math.round(a) % 4;
  0 > a && (a += 4);
  return a;
}
function Xe(a) {
  a = Math.round(a) % 16;
  0 > a && (a += 16);
  return a;
}
function Pe(a, c) {
  if (!Re(a, null))
    throw (Xd.push(["fail_" + (a ? "backward" : "forward"), c]), !1);
  switch (Ve(U + a)) {
    case 0:
      T--;
      var d = "north";
      break;
    case 1:
      S++;
      d = "east";
      break;
    case 2:
      T++;
      d = "south";
      break;
    case 3:
      S--, (d = "west");
  }
  Xd.push([d, c]);
}
function Qe(a, c) {
  a ? (U++, Xd.push(["right", c])) : (U--, Xd.push(["left", c]));
  U = Ve(U);
}
function Re(a, c) {
  switch (Ve(U + a)) {
    case 0:
      var d = X[T - 1] && X[T - 1][S];
      var e = "look_north";
      break;
    case 1:
      d = X[T][S + 1];
      e = "look_east";
      break;
    case 2:
      d = X[T + 1] && X[T + 1][S];
      e = "look_south";
      break;
    case 3:
      (d = X[T][S - 1]), (e = "look_west");
  }
  c && Xd.push([e, c]);
  return 0 !== d && void 0 !== d;
}
window.addEventListener("load", function () {
  function a() {
    l.style.top = Math.max(10, m.offsetTop - window.pageYOffset) + "px";
    l.style.left = k ? "10px" : "420px";
    l.style.width = window.innerWidth - 440 + "px";
  }
  function c(n) {
    return function () {
      window.sessionStorage && (window.sessionStorage.Rr = zd());
      location =
        location.protocol +
        "//" +
        location.host +
        location.pathname +
        "?lang=" +
        M +
        "&level=" +
        N +
        "&skin=" +
        n;
    };
  }
  document.body.innerHTML = ue();
  yd();
  document.querySelector("#pegmanButton>img").style.backgroundImage =
    "url(" + V.Xj + ")";
  for (var d = document.getElementById("pegmanMenu"), e = 0; e < xe.length; e++)
    if (e != ve) {
      var f = document.createElement("div"),
        g = document.createElement("img");
      g.src = "common/1x1.gif";
      g.style.backgroundImage = "url(" + xe[e].Xj + ")";
      f.appendChild(g);
      d.appendChild(f);
      h.Xb(f, "mousedown", null, c(e));
    }
  h.Xb(window, "resize", null, He);
  d = document.getElementById("pegmanButton");
  h.Xb(d, "mousedown", null, Ge);
  d = document.getElementById("pegmanButtonArrow");
  e = document.createTextNode(h.Ya.um);
  d.appendChild(e);
  var k = -1 != Pc.indexOf(M),
    l = document.getElementById("blockly"),
    m = document.getElementById("visualization");
  window.addEventListener("scroll", function () {
    a(null);
    h.im(B);
  });
  window.addEventListener("resize", a);
  a(null);
  Ed({
    maxBlocks: we,
    rtl: k,
    trashcan: !0,
    zoom: { startScale: 1 + (1 - N / 10) / 3 },
  });
  B.Wc.load(V.zt, "win");
  B.Wc.load(V.xq, "fail");
  Td(
    h.H,
    "moveForward,moveBackward,turnRight,turnLeft,isPathForward,isPathRight,isPathBackward,isPathLeft"
  );
  Ee();
  Cd();
  for (d = 0; d < ye; d++)
    for (e = 0; e < ze; e++)
      2 == X[d][e]
        ? (Vd = { x: e, y: d })
        : 3 == X[d][e] && (Wd = { x: e, y: d });
  Ie(!0);
  F(B, function () {
    var n = eb(B),
      p = document.getElementById("capacity");
    if (Infinity == n) p.style.display = "none";
    else {
      p.style.display = "inline";
      p.innerHTML = "";
      n = Number(n);
      var r = document.createElement("span");
      r.className = "capacityNumber";
      r.appendChild(document.createTextNode(n));
      n = (0 == n
        ? O("Maze_capacity0")
        : 1 == n
        ? O("Maze_capacity1")
        : O("Maze_capacity2")
      ).split(/%\d/);
      for (var t = 0; t < n.length; t++)
        p.appendChild(document.createTextNode(n[t])),
          t != n.length - 1 && p.appendChild(r.cloneNode(!0));
    }
  });
  document.body.addEventListener("mousemove", We, !0);
  Xc("runButton", Le);
  Xc("resetButton", Ne);
  1 == N && ((h.tc *= 2), (h.Tt = h.tc));
  10 == N
    ? Uc(N) ||
      ((d = document.getElementById("dialogHelpWallFollow")),
      Q.Zl(d, null, !1, !0, { width: "30%", left: "35%", top: "12em" }, Q.Ty),
      Q.Py(),
      setTimeout(Q.Pv, 3e5))
    : setTimeout(function () {
        F(B, Fe);
        Fe();
      }, 5e3);
  d = document.getElementById("dialogDoneButtons");
  e = document.createElement("img");
  e.id = "pegSpin";
  e.src = "common/1x1.gif";
  e.style.backgroundImage = "url(" + V.Xj + ")";
  d.parentNode.insertBefore(e, d);
  Md();
  Nd();
});
