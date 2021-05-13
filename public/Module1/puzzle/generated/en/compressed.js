// Automatically generated file.  Do not edit!

"use strict";
var b,
  h = { g: {} };
h.g.mc = {};
h.g.mc.ai = function (a) {
  return (a * Math.PI) / 180;
};
h.g.mc.OD = function (a) {
  return (180 * a) / Math.PI;
};
h.g.mc.ck = function (a, c, d) {
  if (d < a) {
    var e = d;
    d = a;
    a = e;
  }
  return Math.max(a, Math.min(c, d));
};
h.Oi = {};
h.$s = 40;
h.kt = 125;
h.$x = 5;
h.By = 10;
h.hc = 28;
h.rs = h.hc;
h.Nx = 8;
h.Yn = 250;
h.Zn = 10;
h.Kx = 30;
h.Vy = 750;
h.xz = 100;
h.ay = !0;
h.Gy = 0.45;
h.Hy = 0.65;
h.mG = { width: 96, height: 124, url: "sprites.png" };
h.eb = 1;
h.Md = 2;
h.Ra = 3;
h.Nd = 4;
h.df = 5;
h.Tn = -1;
h.Sn = 0;
h.Ml = 1;
h.xE = 0;
h.yE = 1;
h.vE = 1;
h.wE = 2;
h.wi = [];
h.wi[h.eb] = h.Md;
h.wi[h.Md] = h.eb;
h.wi[h.Ra] = h.Nd;
h.wi[h.Nd] = h.Ra;
h.Xj = 0;
h.Qo = 1;
h.Wj = 2;
h.Ro = 3;
h.ys = null;
h.lo = 1;
h.zs = 2;
h.Nt = "VARIABLE";
h.Mz = "VARIABLE_DYNAMIC";
h.nt = "PROCEDURE";
h.cG = "RENAME_VARIABLE_ID";
h.tE = "DELETE_VARIABLE_ID";
h.A = {};
h.A.xj = {};
h.A.ws = "default";
h.A.Y = function (a) {
  this.oC = a;
};
h.A.Y.prototype.toString = function () {
  return this.oC;
};
h.A.Y.ss = new h.A.Y("connectionChecker");
h.A.Y.Fb = new h.A.Y("event");
h.A.Y.Nb = new h.A.Y("field");
h.A.Y.RENDERER = new h.A.Y("renderer");
h.A.Y.Po = new h.A.Y("toolbox");
h.A.Y.Oo = new h.A.Y("theme");
h.A.Y.rG = new h.A.Y("toolboxItem");
h.A.Y.WE = new h.A.Y("flyoutsVerticalToolbox");
h.A.Y.VE = new h.A.Y("flyoutsHorizontalToolbox");
h.A.register = function (a, c, d, e) {
  if ((!(a instanceof h.A.Y) && "string" != typeof a) || "" == String(a).trim())
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
  var f = h.A.xj[a];
  f || (f = h.A.xj[a] = {});
  h.A.XD(a, d);
  if (!e && f[c])
    throw Error('Name "' + c + '" with type "' + a + '" already registered.');
  f[c] = d;
};
h.A.XD = function (a, c) {
  switch (a) {
    case String(h.A.Y.Nb):
      if ("function" != typeof c.aa)
        throw Error('Type "' + a + '" must have a fromJson function');
  }
};
h.A.unregister = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = h.A.xj[a];
  d
    ? d[c]
      ? delete h.A.xj[a][c]
      : console.warn('No name "' + c + '" with type "' + a + '" found')
    : console.warn('No type "' + a + '" found');
};
h.A.mv = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = h.A.xj[a];
  return d
    ? d[c]
      ? d[c]
      : (console.warn('No name "' + c + '" with type "' + a + '" found'), null)
    : (console.warn('No type "' + a + '" found'), null);
};
h.A.qH = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  return (a = h.A.xj[a]) ? !!a[c] : !1;
};
h.A.$p = function (a, c) {
  return h.A.mv(a, c);
};
h.A.iq = function (a, c) {
  return h.A.mv(a, c);
};
h.A.ev = function (a, c) {
  c = c.plugins[a.toString()] || h.A.ws;
  return "function" == typeof c ? c : h.A.$p(a, c);
};
h.g.global = (function () {
  return "object" === typeof self
    ? self
    : "object" === typeof window
    ? window
    : "object" === typeof global
    ? global
    : this;
})();
h.K = {};
h.g.global.Blockly || (h.g.global.Blockly = {});
h.g.global.Blockly.Msg || (h.g.global.Blockly.Msg = h.K);
h.g.pb = {};
h.g.pb.parse = function (a) {
  a = String(a).toLowerCase().trim();
  var c = h.g.pb.names[a];
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
    ? h.g.pb.Dr(a, c, d)
    : null;
};
h.g.pb.Dr = function (a, c, d) {
  c = (a << 16) | (c << 8) | d;
  return 16 > a
    ? "#" + (16777216 | c).toString(16).substr(1)
    : "#" + c.toString(16);
};
h.g.pb.Fv = function (a) {
  a = h.g.pb.parse(a);
  if (!a) return [0, 0, 0];
  a = parseInt(a.substr(1), 16);
  return [a >> 16, (a >> 8) & 255, a & 255];
};
h.g.pb.Jv = function (a) {
  var c = h.Gy,
    d = 255 * h.Hy,
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
  return h.g.pb.Dr(Math.floor(e), Math.floor(f), Math.floor(g));
};
h.g.pb.cp = function (a, c, d) {
  a = h.g.pb.parse(a);
  if (!a) return null;
  c = h.g.pb.parse(c);
  if (!c) return null;
  a = h.g.pb.Fv(a);
  c = h.g.pb.Fv(c);
  return h.g.pb.Dr(
    Math.round(c[0] + d * (a[0] - c[0])),
    Math.round(c[1] + d * (a[1] - c[1])),
    Math.round(c[2] + d * (a[2] - c[2]))
  );
};
h.g.pb.names = {
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
h.g.P = function (a, c) {
  this.x = a;
  this.y = c;
};
h.g.P.Cf = function (a, c) {
  return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1;
};
h.g.P.Kp = function (a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
};
h.g.P.aC = function (a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
h.g.P.Fm = function (a, c) {
  return new h.g.P(a.x - c.x, a.y - c.y);
};
h.g.P.sum = function (a, c) {
  return new h.g.P(a.x + c.x, a.y + c.y);
};
h.g.P.prototype.scale = function (a) {
  this.x *= a;
  this.y *= a;
  return this;
};
h.g.P.prototype.translate = function (a, c) {
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
h.g.Pa = {};
h.g.Pa.startsWith = function (a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
h.g.Pa.Kr = function (a) {
  return a.length
    ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d;
      }).length
    : 0;
};
h.g.Pa.oA = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || h.g.Pa.Kr(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0][e], g = 1; g < a.length; g++) if (f != a[g][e]) return d;
    " " == f && (d = e + 1);
  }
  for (g = 1; g < a.length; g++) if ((f = a[g][e]) && " " != f) return d;
  return c;
};
h.g.Pa.pA = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || h.g.Pa.Kr(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0].substr(-e - 1, 1), g = 1; g < a.length; g++)
      if (f != a[g].substr(-e - 1, 1)) return d;
    " " == f && (d = e + 1);
  }
  for (g = 1; g < a.length; g++)
    if ((f = a[g].charAt(a[g].length - e - 1)) && " " != f) return d;
  return c;
};
h.g.Pa.$D = function (a) {
  var c = h.D.Ty;
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) a[d] = h.g.Pa.aE(a[d], c);
  return a.join("\n");
};
h.g.Pa.aE = function (a, c) {
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
    a = h.g.Pa.sx(d, a, c);
    e = h.g.Pa.Yr(d, a, c);
    a = h.g.Pa.bE(d, a);
    f++;
  } while (e > g);
  return k;
};
h.g.Pa.Yr = function (a, c, d) {
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
h.g.Pa.sx = function (a, c, d) {
  for (var e = h.g.Pa.Yr(a, c, d), f, g = 0; g < c.length - 1; g++)
    if (c[g] != c[g + 1]) {
      var k = [].concat(c);
      k[g] = !k[g];
      k[g + 1] = !k[g + 1];
      var l = h.g.Pa.Yr(a, k, d);
      l > e && ((e = l), (f = k));
    }
  return f ? h.g.Pa.sx(a, f, d) : c;
};
h.g.Pa.bE = function (a, c) {
  for (var d = [], e = 0; e < a.length; e++)
    d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
  return d.join("");
};
h.g.Qd = function (a, c) {
  this.width = a;
  this.height = c;
};
h.g.Qd.Cf = function (a, c) {
  return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1;
};
h.g.style = {};
h.g.style.Ef = function (a) {
  if ("none" != h.g.style.vv(a, "display")) return h.g.style.tv(a);
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
  return new h.g.Qd(g, a);
};
h.g.style.tv = function (a) {
  return new h.g.Qd(a.offsetWidth, a.offsetHeight);
};
h.g.style.vv = function (a, c) {
  return (
    h.g.style.getComputedStyle(a, c) ||
    h.g.style.dB(a, c) ||
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
h.g.style.dB = function (a, c) {
  return a.currentStyle ? a.currentStyle[c] : null;
};
h.g.style.wh = function (a) {
  var c = new h.g.P(0, 0);
  a = a.getBoundingClientRect();
  var d = document.documentElement;
  d = new h.g.P(
    window.pageXOffset || d.scrollLeft,
    window.pageYOffset || d.scrollTop
  );
  c.x = a.left + d.x;
  c.y = a.top + d.y;
  return c;
};
h.g.style.tB = function () {
  var a = document.body,
    c = document.documentElement;
  return new h.g.P(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop);
};
h.g.style.XH = function (a, c) {
  a.style.display = c ? "" : "none";
};
h.g.style.CH = function (a) {
  return "rtl" == h.g.style.vv(a, "direction");
};
h.g.style.aB = function (a) {
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
h.g.style.vD = function (a, c) {
  a = h.g.style.fB(a, c);
  c.scrollLeft = a.x;
  c.scrollTop = a.y;
};
h.g.style.fB = function (a, c) {
  var d = h.g.style.wh(a),
    e = h.g.style.wh(c),
    f = h.g.style.aB(c),
    g = d.x - e.x - f.left;
  d = d.y - e.y - f.top;
  a = h.g.style.tv(a);
  e = c.clientHeight - a.height;
  f = c.scrollLeft;
  var k = c.scrollTop;
  f += Math.min(g, Math.max(g - (c.clientWidth - a.width), 0));
  k += Math.min(d, Math.max(d - e, 0));
  return new h.g.P(f, k);
};
h.g.userAgent = {};
(function (a) {
  function c(e) {
    return -1 != d.indexOf(e.toUpperCase());
  }
  h.g.userAgent.raw = a;
  var d = h.g.userAgent.raw.toUpperCase();
  h.g.userAgent.Kd = c("Trident") || c("MSIE");
  h.g.userAgent.$g = c("Edge");
  h.g.userAgent.Qy = c("JavaFX");
  h.g.userAgent.kE = (c("Chrome") || c("CriOS")) && !h.g.userAgent.$g;
  h.g.userAgent.Wt = c("WebKit") && !h.g.userAgent.$g;
  h.g.userAgent.Cy =
    c("Gecko") && !h.g.userAgent.Wt && !h.g.userAgent.Kd && !h.g.userAgent.$g;
  h.g.userAgent.Nl = c("Android");
  h.g.userAgent.Ij = c("iPad");
  h.g.userAgent.Ws = c("iPod");
  h.g.userAgent.Vs = c("iPhone") && !h.g.userAgent.Ij && !h.g.userAgent.Ws;
  h.g.userAgent.Wy = c("Macintosh");
  h.g.userAgent.Ez =
    h.g.userAgent.Ij || (h.g.userAgent.Nl && !c("Mobile")) || c("Silk");
  h.g.userAgent.tF =
    !h.g.userAgent.Ez &&
    (h.g.userAgent.Ws || h.g.userAgent.Vs || h.g.userAgent.Nl || c("IEMobile"));
})((h.g.global.navigator && h.g.global.navigator.userAgent) || "");
h.g.qC = function (a) {
  a.preventDefault();
  a.stopPropagation();
};
h.g.an = function (a) {
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
    (a.target.dataset && "true" == a.target.dataset.EH)
  );
};
h.g.$d = function (a) {
  var c = new h.g.P(0, 0),
    d = a.getAttribute("x");
  d && (c.x = parseInt(d, 10));
  if ((d = a.getAttribute("y"))) c.y = parseInt(d, 10);
  if ((d = (d = a.getAttribute("transform")) && d.match(h.g.$d.Oz)))
    (c.x += Number(d[1])), d[3] && (c.y += Number(d[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    (a = a.match(h.g.$d.Pz)) &&
    ((c.x += Number(a[1])), a[3] && (c.y += Number(a[3])));
  return c;
};
h.g.fq = function (a) {
  for (var c = 0, d = 0; a; ) {
    var e = h.g.$d(a);
    c += e.x;
    d += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new h.g.P(c, d);
};
h.g.$d.Oz = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
h.g.$d.Pz = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
h.g.Nk = function (a) {
  return a.ctrlKey && h.g.userAgent.Wy ? !0 : 2 == a.button;
};
h.g.Xk = function (a, c, d) {
  var e = c.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  d || (d = c.getScreenCTM().inverse());
  return e.matrixTransform(d);
};
h.g.pB = function (a) {
  switch (a.deltaMode) {
    default:
      return { x: a.deltaX, y: a.deltaY };
    case 1:
      return { x: a.deltaX * h.$s, y: a.deltaY * h.$s };
    case 2:
      return { x: a.deltaX * h.kt, y: a.deltaY * h.kt };
  }
};
h.g.PD = function (a) {
  return h.g.Sr(a, !0);
};
h.g.Rc = function (a) {
  if ("string" != typeof a) return a;
  a = h.g.Sr(a, !1);
  return a.length ? String(a[0]) : "";
};
h.g.su = function (a) {
  for (var c = h.K, d = a.match(/%{BKY_[A-Z]\w*}/gi), e = 0; e < d.length; e++)
    void 0 == c[d[e].toUpperCase().slice(6, -1)] &&
      console.warn("No message string for " + d[e] + " in " + a);
};
h.g.Sr = function (a, c) {
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
                (l = h.g.Pa.startsWith(l, "BKY_") ? l.substring(4) : null) &&
                l in h.K
                  ? ((f = h.K[l]),
                    "string" == typeof f
                      ? Array.prototype.push.apply(d, h.g.Sr(f, c))
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
h.g.Df = function () {
  for (var a = h.g.Df.Tw.length, c = [], d = 0; 20 > d; d++)
    c[d] = h.g.Df.Tw.charAt(Math.random() * a);
  return c.join("");
};
h.g.Df.Tw =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
h.g.Eh = function () {
  if (void 0 !== h.g.Eh.kp) return h.g.Eh.kp;
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
  h.g.Eh.kp = "none" !== c;
  return h.g.Eh.kp;
};
h.g.Ow = function (a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" == document.readyState) a();
  else
    var c = setInterval(function () {
      "complete" == document.readyState && (clearInterval(c), a());
    }, 10);
};
h.g.sB = function () {
  var a = h.g.style.tB();
  return new h.g.Rect(
    a.y,
    document.documentElement.clientHeight + a.y,
    a.x,
    document.documentElement.clientWidth + a.x
  );
};
h.g.ak = function (a, c) {
  c = a.indexOf(c);
  if (-1 == c) return !1;
  a.splice(c, 1);
  return !0;
};
h.g.kB = function () {
  var a = document.documentElement,
    c = window;
  return h.g.userAgent.Kd && c.pageYOffset != a.scrollTop
    ? new h.g.P(a.scrollLeft, a.scrollTop)
    : new h.g.P(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop);
};
h.g.dv = function (a) {
  var c = Object.create(null),
    d = p(a, !0);
  if ((a = t(a))) (a = d.indexOf(a)), d.splice(a, d.length - a);
  a = 0;
  for (var e; (e = d[a]); a++) c[e.type] ? c[e.type]++ : (c[e.type] = 1);
  return c;
};
h.g.uD = function (a, c) {
  var d = c.x;
  c = c.y;
  var e = aa(a).getBoundingClientRect();
  d = new h.g.P(d - e.left, c - e.top);
  c = h.g.fq(a.Lb);
  return h.g.P.Fm(d, c).scale(1 / a.scale);
};
h.g.vn = function (a) {
  var c = "string" == typeof a ? h.g.Rc(a) : a,
    d = Number(c);
  if (!isNaN(d) && 0 <= d && 360 >= d) return { HB: d, Ek: h.g.pb.Jv(d) };
  if ((d = h.g.pb.parse(c))) return { HB: null, Ek: d };
  d = 'Invalid colour: "' + c + '"';
  a != c && (d += ' (from "' + a + '")');
  throw Error(d);
};
h.h = {};
h.h.Av = "";
h.h.Ga = !0;
h.h.Gp = 0;
h.h.Vl = "create";
h.h.Wn = h.h.Vl;
h.h.Zg = "delete";
h.h.Dx = h.h.Zg;
h.h.Bj = "change";
h.h.Cx = h.h.Bj;
h.h.Oj = "move";
h.h.ks = h.h.Oj;
h.h.Ot = "var_create";
h.h.Pt = "var_delete";
h.h.Rt = "var_rename";
h.h.Uo = "ui";
h.h.js = "drag";
h.h.im = "selected";
h.h.bo = "click";
h.h.at = "marker_move";
h.h.ns = "bubble_open";
h.h.tG = "trashcan_open";
h.h.sG = "toolbox_item_select";
h.h.It = "theme_change";
h.h.St = "viewport_change";
h.h.Tl = "comment_create";
h.h.qs = "comment_delete";
h.h.ps = "comment_change";
h.h.Ul = "comment_move";
h.h.Ks = "finished_loading";
h.h.Hx = [h.h.Wn, h.h.ks, h.h.Tl, h.h.Ul];
h.h.Hj = [];
h.h.Ja = function (a) {
  h.h.isEnabled() && (h.h.Hj.length || setTimeout(h.h.VA, 0), h.h.Hj.push(a));
};
h.h.VA = function () {
  for (
    var a = h.h.filter(h.h.Hj, !0), c = (h.h.Hj.length = 0), d;
    (d = a[c]);
    c++
  )
    if (d.Tb) {
      var e = h.mb.zk(d.Tb);
      if (e) {
        var f = d;
        if (f.Ga)
          for (e.ci.push(f), e.il.length = 0; e.ci.length > e.bt && 0 <= e.bt; )
            e.ci.shift();
        for (var g = 0; (d = e.Qk[g]); g++) d(f);
      }
    }
};
h.h.filter = function (a, c) {
  a = a.slice();
  c || a.reverse();
  for (var d = [], e = Object.create(null), f = 0, g; (g = a[f]); f++)
    if (!g.ij()) {
      var k = [g.Sv ? h.h.Uo : g.type, g.fb, g.Tb].join(" "),
        l = e[k],
        m = l ? l.event : null;
      if (!l) (e[k] = { event: g, index: f }), d.push(g);
      else if (g.type == h.h.Oj && l.index == f - 1)
        (m.Qh = g.Qh), (m.Ph = g.Ph), (m.Ig = g.Ig), (l.index = f);
      else if (g.type == h.h.Bj && g.element == m.element && g.name == m.name)
        m.newValue = g.newValue;
      else if (g.type != h.h.bo || m.type != h.h.ns)
        (e[k] = { event: g, index: f }), d.push(g);
    }
  a = d.filter(function (n) {
    return !n.ij();
  });
  c || a.reverse();
  for (f = 1; (g = a[f]); f++)
    g.type == h.h.Bj && "mutation" == g.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
h.h.mA = function () {
  for (var a = 0, c; (c = h.h.Hj[a]); a++) c.Ga = !1;
};
h.h.disable = function () {
  h.h.Gp++;
};
h.h.enable = function () {
  h.h.Gp--;
};
h.h.isEnabled = function () {
  return 0 == h.h.Gp;
};
h.h.Pb = function () {
  return h.h.Av;
};
h.h.ra = function (a) {
  h.h.Av = "boolean" == typeof a ? (a ? h.g.Df() : "") : a;
};
h.h.gv = function (a) {
  var c = [];
  a = p(a, !1);
  for (var d = 0, e; (e = a[d]); d++) c[d] = e.id;
  return c;
};
h.h.aa = function (a) {
  var c = h.A.$p(h.A.Y.Fb, a.type);
  if (!c) throw Error("Unknown event type.");
  c = new c();
  c.aa(a);
  c.Tb = (void 0).id;
  return c;
};
h.h.aH = function (a) {
  if ((a.type == h.h.Oj || a.type == h.h.Vl) && a.Tb) {
    var c = h.mb.zk(a.Tb),
      d = c.Lc(a.fb);
    if (d) {
      a = h.h.Ga;
      try {
        h.h.Ga = !1;
        var e = d.getParent();
        if (e && e.isEnabled()) {
          var f = p(d, !1);
          c = 0;
          for (var g; (g = f[c]); c++) g.Rf(!0);
        } else if ((d.M || d.T) && !c.wd()) {
          do d.Rf(!1), (d = t(d));
          while (d);
        }
      } finally {
        h.h.Ga = a;
      }
    }
  }
};
h.h.Abstract = function () {
  this.cd = null;
  this.Tb = void 0;
  this.group = h.h.Pb();
  this.Ga = h.h.Ga;
};
b = h.h.Abstract.prototype;
b.Sv = !1;
b.qa = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
b.aa = function (a) {
  this.cd = !1;
  this.group = a.group;
};
b.ij = function () {
  return !1;
};
b.run = function () {};
function v(a) {
  if (a.Tb) var c = h.mb.zk(a.Tb);
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
h.g.object.Hg = function (a, c) {
  for (var d in c) a[d] = c[d];
};
h.g.object.Ri = function (a, c) {
  for (var d in c)
    a[d] =
      null != c[d] && "object" === typeof c[d]
        ? h.g.object.Ri(a[d] || Object.create(null), c[d])
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
h.h.xe = function (a) {
  h.h.xe.u.constructor.call(this);
  this.cd = "undefined" == typeof a;
  this.Tb = a ? a : "";
  this.Ga = !1;
};
h.g.object.U(h.h.xe, h.h.Abstract);
h.h.xe.prototype.Sv = !0;
h.h.lg = function (a, c, d, e) {
  h.h.lg.u.constructor.call(this, a ? a.B.id : void 0);
  this.fb = a ? a.id : null;
  this.element = "undefined" == typeof c ? "" : c;
  this.oldValue = "undefined" == typeof d ? "" : d;
  this.newValue = "undefined" == typeof e ? "" : e;
};
h.g.object.U(h.h.lg, h.h.xe);
h.h.lg.prototype.type = h.h.Uo;
h.h.lg.prototype.qa = function () {
  var a = h.h.lg.u.qa.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.fb && (a.blockId = this.fb);
  return a;
};
h.h.lg.prototype.aa = function (a) {
  h.h.lg.u.aa.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.fb = a.blockId;
};
h.A.register(h.A.Y.Fb, h.h.Uo, h.h.lg);
h.g.F = function (a) {
  this.LD = a;
};
h.g.F.prototype.toString = function () {
  return this.LD;
};
h.g.F.Un = new h.g.F("animate");
h.g.F.Jx = new h.g.F("circle");
h.g.F.lE = new h.g.F("clipPath");
h.g.F.xs = new h.g.F("defs");
h.g.F.mo = new h.g.F("feComposite");
h.g.F.py = new h.g.F("feComponentTransfer");
h.g.F.qy = new h.g.F("feFlood");
h.g.F.sy = new h.g.F("feFuncA");
h.g.F.ty = new h.g.F("feGaussianBlur");
h.g.F.uy = new h.g.F("fePointLight");
h.g.F.vy = new h.g.F("feSpecularLighting");
h.g.F.Js = new h.g.F("filter");
h.g.F.XE = new h.g.F("foreignObject");
h.g.F.Wc = new h.g.F("g");
h.g.F.qo = new h.g.F("image");
h.g.F.Lj = new h.g.F("line");
h.g.F.hf = new h.g.F("path");
h.g.F.mt = new h.g.F("pattern");
h.g.F.qz = new h.g.F("polygon");
h.g.F.kf = new h.g.F("rect");
h.g.F.Tj = new h.g.F("svg");
h.g.F.Ht = new h.g.F("text");
h.g.F.Kt = new h.g.F("tspan");
h.g.j = {};
h.g.j.jm = "http://www.w3.org/2000/svg";
h.g.j.oo = "http://www.w3.org/1999/xhtml";
h.g.j.jh = "http://www.w3.org/1999/xlink";
h.g.j.jg = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  COMMENT_NODE: 8,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
};
h.g.j.Ud = null;
h.g.j.ip = 0;
h.g.j.tm = null;
h.g.j.R = function (a, c, d) {
  a = document.createElementNS(h.g.j.jm, String(a));
  for (var e in c) a.setAttribute(e, c[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  d && d.appendChild(a);
  return a;
};
h.g.j.Hb = function (a, c) {
  var d = a.getAttribute("class") || "";
  -1 == (" " + d + " ").indexOf(" " + c + " ") &&
    (d && (d += " "), a.setAttribute("class", d + c));
};
h.g.j.OH = function (a, c) {
  c = c.split(" ");
  for (var d = 0; d < c.length; d++) h.g.j.Qc(a, c[d]);
};
h.g.j.Qc = function (a, c) {
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
h.g.j.oq = function (a, c) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ");
};
h.g.j.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
h.g.j.Ik = function (a, c) {
  var d = c.nextSibling;
  c = c.parentNode;
  if (!c) throw Error("Reference node has no parent.");
  d ? c.insertBefore(a, d) : c.appendChild(a);
};
h.g.j.containsNode = function (a, c) {
  return !!(
    a.compareDocumentPosition(c) & h.g.j.jg.DOCUMENT_POSITION_CONTAINED_BY
  );
};
h.g.j.Cn = function (a, c) {
  a.style.transform = c;
  a.style["-webkit-transform"] = c;
};
h.g.j.xl = function () {
  h.g.j.ip++;
  h.g.j.Ud || (h.g.j.Ud = {});
};
h.g.j.yl = function () {
  h.g.j.ip--;
  h.g.j.ip || (h.g.j.Ud = null);
};
h.g.j.pH = function (a) {
  var c = a.textContent + "\n" + a.className.baseVal,
    d;
  if (h.g.j.Ud && (d = h.g.j.Ud[c])) return d;
  try {
    d =
      h.g.userAgent.Kd || h.g.userAgent.$g
        ? a.getBBox().width
        : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  h.g.j.Ud && (h.g.j.Ud[c] = d);
  return d;
};
h.g.j.eq = function (a, c, d, e) {
  return h.g.j.lB(a, c + "pt", d, e);
};
h.g.j.lB = function (a, c, d, e) {
  var f = a.textContent;
  a = f + "\n" + a.className.baseVal;
  var g;
  if (h.g.j.Ud && (g = h.g.j.Ud[a])) return g;
  h.g.j.tm ||
    ((g = document.createElement("canvas")),
    (g.className = "blocklyComputeCanvas"),
    document.body.appendChild(g),
    (h.g.j.tm = g.getContext("2d")));
  h.g.j.tm.font = d + " " + c + " " + e;
  g = h.g.j.tm.measureText(f).width;
  h.g.j.Ud && (h.g.j.Ud[a] = g);
  return g;
};
h.g.j.cC = function (a, c, d) {
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
      (d.Td = a.offsetTop - e.offsetTop),
      (c.style.alignItems = "flex-end"),
      (d.height = a.offsetTop - e.offsetTop);
  } finally {
    document.body.removeChild(c);
  }
  return d;
};
h.os = function (a) {
  this.hk = a;
  this.jb();
};
b = h.os.prototype;
b.ib = null;
b.He = null;
b.hk = null;
b.Ng = 1;
b.Bl = null;
b.jb = function () {
  this.ib ||
    ((this.ib = h.g.j.R(
      h.g.F.Tj,
      {
        xmlns: h.g.j.jm,
        "xmlns:html": h.g.j.oo,
        "xmlns:xlink": h.g.j.jh,
        version: "1.1",
        class: "blocklyBlockDragSurface",
      },
      this.hk
    )),
    (this.He = h.g.j.R(h.g.F.Wc, {}, this.ib)));
};
function ba(a, c) {
  if (a.He.childNodes.length) throw Error("Already dragging a block.");
  a.He.appendChild(c);
  a.ib.style.display = "block";
  a.Bl = new h.g.P(0, 0);
}
b.bi = function (a, c) {
  this.Bl = new h.g.P(a * this.Ng, c * this.Ng);
  a = this.Bl.x;
  c = this.Bl.y;
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.ib.style.display = "block";
  h.g.j.Cn(this.ib, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.kq = function () {
  var a = h.g.$d(this.ib);
  return new h.g.P(a.x / this.Ng, a.y / this.Ng);
};
b.Pb = function () {
  return this.He;
};
b.vm = function (a) {
  a
    ? a.appendChild(this.He.firstChild)
    : this.He.removeChild(this.He.firstChild);
  this.ib.style.display = "none";
  if (this.He.childNodes.length) throw Error("Drag group was not cleared.");
  this.Bl = null;
};
h.Id = {};
h.Id.wq = !1;
h.Id.register = function (a) {
  if (h.Id.wq) throw Error("CSS already injected");
  Array.prototype.push.apply(h.Id.ho, a);
  a.length = 0;
};
h.Id.xg = function (a, c) {
  if (!h.Id.wq) {
    h.Id.wq = !0;
    var d = h.Id.ho.join("\n");
    h.Id.ho.length = 0;
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
h.Id.ho = [
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
h.C = function () {};
h.C.hp = null;
h.C.Dd = null;
h.C.Fw = null;
h.C.Ol = 16;
h.C.ls = 1;
h.C.gs = 12;
h.C.jt = 16;
h.C.Vn = 0.25;
h.C.Yo = null;
h.C.Sh = null;
h.C.ee = "";
h.C.fe = "";
h.C.jb = function () {
  if (!h.C.pe) {
    var a = document.createElement("div");
    a.className = "blocklyDropDownDiv";
    (h.un || document.body).appendChild(a);
    h.C.pe = a;
    var c = document.createElement("div");
    c.className = "blocklyDropDownContent";
    a.appendChild(c);
    h.C.yf = c;
    c = document.createElement("div");
    c.className = "blocklyDropDownArrow";
    a.appendChild(c);
    h.C.qd = c;
    h.C.pe.style.opacity = 0;
    h.C.pe.style.transition =
      "transform " + h.C.Vn + "s, opacity " + h.C.Vn + "s";
    a.addEventListener("focusin", function () {
      h.g.j.Hb(a, "blocklyFocused");
    });
    a.addEventListener("focusout", function () {
      h.g.j.Qc(a, "blocklyFocused");
    });
  }
};
h.C.xD = function (a) {
  h.C.hp = a;
};
h.C.iB = function () {
  return h.C.yf;
};
h.C.lA = function () {
  h.C.yf.textContent = "";
  h.C.yf.style.width = "";
};
h.C.Te = function (a, c) {
  h.C.pe.style.backgroundColor = a;
  h.C.pe.style.borderColor = c;
};
h.C.$H = function (a, c, d, e) {
  return h.C.Sw(h.C.qv(c), a, d, e);
};
h.C.CD = function (a, c) {
  h.C.Fw = !0;
  h.C.Sw(h.C.rv(a), a, c, void 0);
};
h.C.qv = function (a) {
  var c = a.Ba(),
    d = c.getBBox(),
    e = a.B.scale;
  a = d.height * e;
  d = d.width * e;
  c = h.g.style.wh(c);
  return new h.g.Rect(c.y, c.y + a, c.x, c.x + d);
};
h.C.rv = function (a) {
  if (a.Jb)
    (c = a.Jb.getBoundingClientRect()),
      (a = h.g.style.wh(a.Jb)),
      (e = c.width),
      (c = c.height);
  else {
    var c = w(a.I);
    var d = a.I.B.scale;
    a = h.g.style.wh(ca(a));
    var e = c.width * d;
    c = c.height * d;
    h.g.userAgent.Cy
      ? ((a.x += 1.5 * d), (a.y += 1.5 * d))
      : h.g.userAgent.$g ||
        h.g.userAgent.Kd ||
        ((a.x -= 0.5 * d), (a.y -= 0.5 * d));
    e += 1 * d;
    c += 1 * d;
  }
  d = new h.g.Rect(a.y, a.y + c, a.x, a.x + e);
  return new h.g.Rect(d.top, d.bottom, d.left, d.right);
};
h.C.Sw = function (a, c, d, e) {
  var f = a.left + (a.right - a.left) / 2,
    g = a.bottom;
  a = a.top;
  e && (a += e);
  e = c.S();
  for (var k = e.B; k.options.Pc; ) k = k.options.Pc;
  h.C.xD(x(k).parentNode);
  return h.C.show(c, e.J, f, g, f, a, d);
};
h.C.show = function (a, c, d, e, f, g, k) {
  h.C.Dd = a;
  h.C.Sh = k || null;
  a = h.C.pe;
  a.style.direction = c ? "rtl" : "ltr";
  c = h.sg();
  h.C.ee = c.lb.Yd();
  h.C.fe = c.Ff().Yd();
  h.g.j.Hb(a, h.C.ee);
  h.g.j.Hb(a, h.C.fe);
  return h.C.cl(d, e, f, g);
};
h.C.bB = function () {
  var a = h.g.style.wh(h.C.hp),
    c = h.g.style.Ef(h.C.hp);
  return {
    left: a.x,
    right: a.x + c.width,
    top: a.y,
    bottom: a.y + c.height,
    width: c.width,
    height: c.height,
  };
};
h.C.mB = function (a, c, d, e) {
  var f = h.C.bB(),
    g = h.g.style.Ef(h.C.pe);
  return c + g.height < f.bottom
    ? h.C.pv(a, c, f, g)
    : e - g.height > f.top
    ? h.C.ov(d, e, f, g)
    : c + g.height < document.documentElement.clientHeight
    ? h.C.pv(a, c, f, g)
    : e - g.height > document.documentElement.clientTop
    ? h.C.ov(d, e, f, g)
    : h.C.nB(a, f, g);
};
h.C.pv = function (a, c, d, e) {
  a = h.C.jq(a, d.left, d.right, e.width);
  return {
    uq: a.Ti,
    vq: c,
    Up: a.Ti,
    Vp: c + h.C.jt,
    Gi: a.Gi,
    $o: -(h.C.Ol / 2 + h.C.ls),
    pm: !0,
    Zo: !0,
  };
};
h.C.ov = function (a, c, d, e) {
  a = h.C.jq(a, d.left, d.right, e.width);
  return {
    uq: a.Ti,
    vq: c - e.height,
    Up: a.Ti,
    Vp: c - e.height - h.C.jt,
    Gi: a.Gi,
    $o: e.height - 2 * h.C.ls - h.C.Ol / 2,
    pm: !1,
    Zo: !0,
  };
};
h.C.nB = function (a, c, d) {
  a = h.C.jq(a, c.left, c.right, d.width);
  return {
    uq: a.Ti,
    vq: 0,
    Up: a.Ti,
    Vp: 0,
    pm: null,
    Gi: null,
    $o: null,
    Zo: !1,
  };
};
h.C.jq = function (a, c, d, e) {
  var f = a;
  a = h.g.mc.ck(c, a - e / 2, d - e);
  f -= h.C.Ol / 2;
  c = h.g.mc.ck(h.C.gs, f - a, e - h.C.gs - h.C.Ol);
  return { Gi: c, Ti: a };
};
h.C.isVisible = function () {
  return !!h.C.Dd;
};
h.C.Fk = function (a, c) {
  h.C.Dd === a && (c ? h.C.rq() : h.C.$a());
};
h.C.$a = function () {
  var a = h.C.pe;
  a.style.transform = "translate(0, 0)";
  a.style.opacity = 0;
  h.C.Yo = setTimeout(function () {
    h.C.rq();
  }, 1e3 * h.C.Vn);
  h.C.Sh && (h.C.Sh(), (h.C.Sh = null));
};
h.C.rq = function () {
  if (h.C.isVisible()) {
    h.C.Yo && clearTimeout(h.C.Yo);
    var a = h.C.pe;
    a.style.transform = "";
    a.style.left = "";
    a.style.top = "";
    a.style.opacity = 0;
    a.style.display = "none";
    a.style.backgroundColor = "";
    a.style.borderColor = "";
    h.C.Sh && (h.C.Sh(), (h.C.Sh = null));
    h.C.lA();
    h.C.Dd = null;
    h.C.ee && (h.g.j.Qc(a, h.C.ee), (h.C.ee = ""));
    h.C.fe && (h.g.j.Qc(a, h.C.fe), (h.C.fe = ""));
    da(h.sg());
  }
};
h.C.cl = function (a, c, d, e) {
  a = h.C.mB(a, c, d, e);
  a.Zo
    ? ((h.C.qd.style.display = ""),
      (h.C.qd.style.transform =
        "translate(" + a.Gi + "px," + a.$o + "px) rotate(45deg)"),
      h.C.qd.setAttribute(
        "class",
        a.pm
          ? "blocklyDropDownArrow blocklyArrowTop"
          : "blocklyDropDownArrow blocklyArrowBottom"
      ))
    : (h.C.qd.style.display = "none");
  c = Math.floor(a.uq);
  d = Math.floor(a.vq);
  e = Math.floor(a.Up);
  var f = Math.floor(a.Vp),
    g = h.C.pe;
  g.style.left = c + "px";
  g.style.top = d + "px";
  g.style.display = "block";
  g.style.opacity = 1;
  g.style.transform = "translate(" + (e - c) + "px," + (f - d) + "px)";
  return !!a.pm;
};
h.C.QH = function () {
  if (h.C.Dd) {
    var a = h.C.Dd,
      c = a.S();
    a = h.C.Fw ? h.C.rv(a) : h.C.qv(c);
    c = a.left + (a.right - a.left) / 2;
    h.C.cl(c, a.bottom, c, a.top);
  } else h.C.$a();
};
h.bh = function (a, c) {
  this.$i = a;
  this.Mr = c.spacing;
  this.Wv = c.length;
  this.YB = (this.Fq = a.firstChild) && this.Fq.nextSibling;
  this.FD = c.snap;
};
h.bh.prototype.Ng = 1;
h.bh.prototype.H = function () {
  this.$i = null;
};
h.bh.prototype.update = function (a) {
  this.Ng = a;
  var c = this.Mr * a || 100;
  this.$i.setAttribute("width", c);
  this.$i.setAttribute("height", c);
  c = Math.floor(this.Mr / 2) + 0.5;
  var d = c - this.Wv / 2,
    e = c + this.Wv / 2;
  c *= a;
  d *= a;
  e *= a;
  ea(this.Fq, a, d, e, c, c);
  ea(this.YB, a, c, c, d, e);
};
function ea(a, c, d, e, f, g) {
  a &&
    (a.setAttribute("stroke-width", c),
    a.setAttribute("x1", d),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", g));
}
h.bh.prototype.moveTo = function (a, c) {
  this.$i.setAttribute("x", a);
  this.$i.setAttribute("y", c);
  (h.g.userAgent.Kd || h.g.userAgent.$g) && this.update(this.Ng);
};
h.bh.jb = function (a, c, d) {
  a = h.g.j.R(
    h.g.F.mt,
    { id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse" },
    d
  );
  0 < c.length && 0 < c.spacing
    ? (h.g.j.R(h.g.F.Lj, { stroke: c.colour }, a),
      1 < c.length && h.g.j.R(h.g.F.Lj, { stroke: c.colour }, a))
    : h.g.j.R(h.g.F.Lj, {}, a);
  return a;
};
h.hh = function (a, c, d, e) {
  this.name = a;
  this.mg = c || Object.create(null);
  this.lp = d || Object.create(null);
  this.wu = e || Object.create(null);
  this.fontStyle = Object.create(null);
  this.Pr = null;
  h.A.register(h.A.Y.Oo, a, this);
};
h.hh.prototype.Yd = function () {
  return this.name + "-theme";
};
function y(a, c) {
  return (c = a.wu[c]) && "string" == typeof c && y(a, c)
    ? y(a, c)
    : c
    ? String(c)
    : null;
}
h.hh.CA = function (a, c) {
  var d = new h.hh(a),
    e = c.base;
  e &&
    ("string" == typeof e && (e = h.A.iq(h.A.Y.Oo, e)),
    e instanceof h.hh && (h.g.object.Ri(d, e), (d.name = a)));
  h.g.object.Ri(d.mg, c.blockStyles);
  h.g.object.Ri(d.lp, c.categoryStyles);
  h.g.object.Ri(d.wu, c.componentStyles);
  h.g.object.Ri(d.fontStyle, c.fontStyle);
  null != c.startHats && (d.Pr = c.startHats);
  return d;
};
h.pf = {};
h.pf.cg = {};
h.pf.cg.BA = {
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
h.pf.cg.lp = {
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
h.pf.cg = new h.hh("classic", h.pf.cg.BA, h.pf.cg.lp);
h.g.Jj = {};
h.g.Jj.pC = 0;
h.g.Jj.nv = function () {
  return "blockly-" + (h.g.Jj.pC++).toString(36);
};
h.g.vF = function () {};
h.g.Ha = {};
h.g.Ha.ao = "categoryToolbox";
h.g.Ha.Ls = "flyoutToolbox";
h.g.Ha.fm = { Gz: h.Xj, Ex: h.Qo, Zs: h.Wj, xt: h.Ro };
h.g.Ha.Fu = function (a) {
  if (!a) return null;
  if (a instanceof Element || "string" == typeof a)
    (a = h.g.Ha.jr(a)), (a = h.g.Ha.vA(a));
  h.g.Ha.WD(a);
  return a;
};
h.g.Ha.WD = function (a) {
  var c = a.kind;
  a = a.contents;
  if (c && c != h.g.Ha.Ls && c != h.g.Ha.ao)
    throw Error(
      "Invalid toolbox kind " +
        c +
        ". Please supply either " +
        h.g.Ha.Ls +
        " or " +
        h.g.Ha.ao
    );
  if (!a) throw Error("Toolbox must have a contents attribute.");
};
h.g.Ha.YG = function (a) {
  return a
    ? a.contents
      ? a.contents
      : Array.isArray(a) && 0 < a.length && !a[0].nodeType
      ? a
      : h.g.Ha.Zr(a)
    : [];
};
h.g.Ha.Dk = function (a) {
  if (!a) return !1;
  var c = a.kind;
  return c
    ? c == h.g.Ha.ao
    : !!a.contents.filter(function (d) {
        return "CATEGORY" == d.kind.toUpperCase();
      }).length;
};
h.g.Ha.uH = function (a) {
  return a && a.contents
    ? !!a.contents.filter(function (c) {
        return "CATEGORY" == c.kind.toUpperCase();
      }).length
    : !1;
};
h.g.Ha.vA = function (a) {
  var c = { contents: h.g.Ha.Zr(a) };
  a instanceof Node && h.g.Ha.du(a, c);
  return c;
};
h.g.Ha.Zr = function (a) {
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
          (f.contents = h.g.Ha.Zr(e));
      h.g.Ha.du(e, f);
      c.push(f);
    }
  return c;
};
h.g.Ha.du = function (a, c) {
  for (var d = 0; d < a.attributes.length; d++) {
    var e = a.attributes[d];
    -1 < e.nodeName.indexOf("css-")
      ? ((c.cssconfig = c.cssconfig || {}),
        (c.cssconfig[e.nodeName.replace("css-", "")] = e.value))
      : (c[e.nodeName] = e.value);
  }
};
h.g.Ha.jr = function (a) {
  if (a) {
    if (
      ("string" != typeof a &&
        (h.g.userAgent.Kd && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a &&
        ((a = h.N.Xe(a)), "xml" != a.nodeName.toLowerCase()))
    )
      throw TypeError("Toolbox should be an <xml> document.");
  } else a = null;
  return a;
};
h.g.xml = {};
h.g.xml.hz = "https://developers.google.com/blockly/xml";
h.g.xml.document = function () {
  return document;
};
h.g.xml.createElement = function (a) {
  return h.g.xml.document().createElementNS(h.g.xml.hz, a);
};
h.g.xml.createTextNode = function (a) {
  return h.g.xml.document().createTextNode(a);
};
h.g.xml.MD = function (a) {
  return new DOMParser().parseFromString(a, "text/xml");
};
h.g.xml.Ge = function (a) {
  return new XMLSerializer().serializeToString(a);
};
h.h.ke = function (a) {
  h.h.ke.u.constructor.call(this);
  this.fb = (this.cd = "undefined" == typeof a) ? "" : a.id;
  this.Tb = this.cd ? "" : a.B.id;
};
h.g.object.U(h.h.ke, h.h.Abstract);
h.h.ke.prototype.qa = function () {
  var a = h.h.ke.u.qa.call(this);
  a.blockId = this.fb;
  return a;
};
h.h.ke.prototype.aa = function (a) {
  h.h.ke.u.aa.call(this, a);
  this.fb = a.blockId;
};
h.h.ag = function (a, c, d, e, f) {
  h.h.ag.u.constructor.call(this, a);
  a &&
    ((this.element = "undefined" == typeof c ? "" : c),
    (this.name = "undefined" == typeof d ? "" : d),
    (this.oldValue = "undefined" == typeof e ? "" : e),
    (this.newValue = "undefined" == typeof f ? "" : f));
};
h.g.object.U(h.h.ag, h.h.ke);
h.h.li = h.h.ag;
b = h.h.ag.prototype;
b.type = h.h.Bj;
b.qa = function () {
  var a = h.h.ag.u.qa.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.oldValue = this.oldValue;
  a.newValue = this.newValue;
  return a;
};
b.aa = function (a) {
  h.h.ag.u.aa.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.oldValue = a.oldValue;
  this.newValue = a.newValue;
};
b.ij = function () {
  return this.oldValue == this.newValue;
};
b.run = function (a) {
  var c = v(this).Lc(this.fb);
  if (c)
    switch (
      (c.ce && c.ce.Cc(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (c = z(c, this.name))
          ? c.setValue(a)
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        c.sj(a || null);
        break;
      case "collapsed":
        c.Xh(!!a);
        break;
      case "disabled":
        c.Rf(!a);
        break;
      case "inline":
        c.Pg(!!a);
        break;
      case "mutation":
        var d = "";
        c.nc && (d = (d = c.nc()) && h.N.Ge(d));
        if (c.ad) {
          var e = h.N.Xe(a || "<mutation/>");
          c.ad(e);
        }
        h.h.Ja(new h.h.ag(c, "mutation", null, d, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.fb);
};
h.h.oe = function (a) {
  h.h.oe.u.constructor.call(this, a);
  a &&
    (a.Ca && (this.Ga = !1),
    (this.xml = a.B.na ? h.N.fp(a) : h.N.ng(a)),
    (this.Bh = h.h.gv(a)));
};
h.g.object.U(h.h.oe, h.h.ke);
h.h.Ql = h.h.oe;
h.h.oe.prototype.type = h.h.Vl;
h.h.oe.prototype.qa = function () {
  var a = h.h.oe.u.qa.call(this);
  a.xml = h.N.Ge(this.xml);
  a.ids = this.Bh;
  this.Ga || (a.recordUndo = this.Ga);
  return a;
};
h.h.oe.prototype.aa = function (a) {
  h.h.oe.u.aa.call(this, a);
  this.xml = h.N.Xe(a.xml);
  this.Bh = a.ids;
  void 0 !== a.recordUndo && (this.Ga = a.recordUndo);
};
h.h.oe.prototype.run = function (a) {
  var c = v(this);
  if (a)
    (a = h.g.xml.createElement("xml")), a.appendChild(this.xml), h.N.rg(a, c);
  else {
    a = 0;
    for (var d; (d = this.Bh[a]); a++) {
      var e = c.Lc(d);
      e
        ? e.H(!1)
        : d == this.fb &&
          console.warn("Can't uncreate non-existent block: " + d);
    }
  }
};
h.h.qe = function (a) {
  h.h.qe.u.constructor.call(this, a);
  if (a) {
    if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
    a.Ca && (this.Ga = !1);
    this.Yq = a.B.na ? h.N.fp(a) : h.N.ng(a);
    this.Bh = h.h.gv(a);
  }
};
h.g.object.U(h.h.qe, h.h.ke);
h.h.Ix = h.h.qe;
h.h.qe.prototype.type = h.h.Zg;
h.h.qe.prototype.qa = function () {
  var a = h.h.qe.u.qa.call(this);
  a.oldXml = h.N.Ge(this.Yq);
  a.ids = this.Bh;
  this.Ga || (a.recordUndo = this.Ga);
  return a;
};
h.h.qe.prototype.aa = function (a) {
  h.h.qe.u.aa.call(this, a);
  this.Yq = h.N.Xe(a.oldXml);
  this.Bh = a.ids;
  void 0 !== a.recordUndo && (this.Ga = a.recordUndo);
};
h.h.qe.prototype.run = function (a) {
  var c = v(this);
  if (a) {
    a = 0;
    for (var d; (d = this.Bh[a]); a++) {
      var e = c.Lc(d);
      e
        ? e.H(!1)
        : d == this.fb && console.warn("Can't delete non-existent block: " + d);
    }
  } else
    (a = h.g.xml.createElement("xml")), a.appendChild(this.Yq), h.N.rg(a, c);
};
h.h.dh = function (a) {
  h.h.dh.u.constructor.call(this, a);
  a &&
    (a.Ca && (this.Ga = !1),
    (a = fa(this)),
    (this.ow = a.ww),
    (this.lw = a.Kv),
    (this.Vq = a.Gu));
};
h.g.object.U(h.h.dh, h.h.ke);
h.h.Aj = h.h.dh;
b = h.h.dh.prototype;
b.type = h.h.Oj;
b.qa = function () {
  var a = h.h.dh.u.qa.call(this);
  this.Qh && (a.newParentId = this.Qh);
  this.Ph && (a.newInputName = this.Ph);
  this.Ig &&
    (a.newCoordinate = Math.round(this.Ig.x) + "," + Math.round(this.Ig.y));
  this.Ga || (a.recordUndo = this.Ga);
  return a;
};
b.aa = function (a) {
  h.h.dh.u.aa.call(this, a);
  this.Qh = a.newParentId;
  this.Ph = a.newInputName;
  if (a.newCoordinate) {
    var c = a.newCoordinate.split(",");
    this.Ig = new h.g.P(Number(c[0]), Number(c[1]));
  }
  void 0 !== a.recordUndo && (this.Ga = a.recordUndo);
};
b.Uh = function () {
  var a = fa(this);
  this.Qh = a.ww;
  this.Ph = a.Kv;
  this.Ig = a.Gu;
};
function fa(a) {
  var c = v(a).Lc(a.fb);
  a = {};
  var d = c.getParent();
  if (d) {
    if (((a.ww = d.id), (c = ha(d, c)))) a.Kv = c.name;
  } else a.Gu = c.Sa();
  return a;
}
b.ij = function () {
  return this.ow == this.Qh && this.lw == this.Ph && h.g.P.Cf(this.Vq, this.Ig);
};
b.run = function (a) {
  var c = v(this),
    d = c.Lc(this.fb);
  if (d) {
    var e = a ? this.Qh : this.ow,
      f = a ? this.Ph : this.lw;
    a = a ? this.Ig : this.Vq;
    var g = null;
    if (e && ((g = c.Lc(e)), !g)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    d.getParent() && A(d);
    if (a) (f = d.Sa()), d.moveBy(a.x - f.x, a.y - f.y);
    else {
      d = d.M || d.T;
      if (f) {
        if ((c = ia(g, f))) var k = c.connection;
      } else d.type == h.Nd && (k = g.X);
      k
        ? d.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.fb);
};
h.A.register(h.A.Y.Fb, h.h.Vl, h.h.oe);
h.A.register(h.A.Y.Fb, h.h.Zg, h.h.qe);
h.A.register(h.A.Y.Fb, h.h.Bj, h.h.ag);
h.A.register(h.A.Y.Fb, h.h.Oj, h.h.dh);
h.h.oi = function (a) {
  this.cd = "undefined" == typeof a;
  this.Tb = a ? a.id : "";
  this.group = h.h.Pb();
  this.Ga = !1;
};
h.g.object.U(h.h.oi, h.h.Abstract);
h.h.oi.prototype.type = h.h.Ks;
h.h.oi.prototype.qa = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.Tb && (a.workspaceId = this.Tb);
  return a;
};
h.h.oi.prototype.aa = function (a) {
  this.cd = !1;
  this.Tb = a.workspaceId;
  this.group = a.group;
};
h.A.register(h.A.Y.Fb, h.h.Ks, h.h.oi);
h.h.qf = function (a) {
  h.h.qf.u.constructor.call(this);
  this.Tg = (this.cd = "undefined" == typeof a) ? "" : a.yc();
  this.Tb = this.cd ? "" : a.B.id;
};
h.g.object.U(h.h.qf, h.h.Abstract);
h.h.qf.prototype.qa = function () {
  var a = h.h.qf.u.qa.call(this);
  a.varId = this.Tg;
  return a;
};
h.h.qf.prototype.aa = function (a) {
  h.h.qf.u.qa.call(this);
  this.Tg = a.varId;
};
h.h.Rd = function (a) {
  h.h.Rd.u.constructor.call(this, a);
  a && ((this.ei = a.type), (this.di = a.name));
};
h.g.object.U(h.h.Rd, h.h.qf);
h.h.Rd.prototype.type = h.h.Ot;
h.h.Rd.prototype.qa = function () {
  var a = h.h.Rd.u.qa.call(this);
  a.varType = this.ei;
  a.varName = this.di;
  return a;
};
h.h.Rd.prototype.aa = function (a) {
  h.h.Rd.u.aa.call(this, a);
  this.ei = a.varType;
  this.di = a.varName;
};
h.h.Rd.prototype.run = function (a) {
  var c = v(this);
  a ? c.Xd(this.di, this.ei, this.Tg) : c.Si(this.Tg);
};
h.h.Sd = function (a) {
  h.h.Sd.u.constructor.call(this, a);
  a && ((this.ei = a.type), (this.di = a.name));
};
h.g.object.U(h.h.Sd, h.h.qf);
h.h.Sd.prototype.type = h.h.Pt;
h.h.Sd.prototype.qa = function () {
  var a = h.h.Sd.u.qa.call(this);
  a.varType = this.ei;
  a.varName = this.di;
  return a;
};
h.h.Sd.prototype.aa = function (a) {
  h.h.Sd.u.aa.call(this, a);
  this.ei = a.varType;
  this.di = a.varName;
};
h.h.Sd.prototype.run = function (a) {
  var c = v(this);
  a ? c.Si(this.Tg) : c.Xd(this.di, this.ei, this.Tg);
};
h.h.ye = function (a, c) {
  h.h.ye.u.constructor.call(this, a);
  a && ((this.Xq = a.name), (this.Sq = "undefined" == typeof c ? "" : c));
};
h.g.object.U(h.h.ye, h.h.qf);
h.h.ye.prototype.type = h.h.Rt;
h.h.ye.prototype.qa = function () {
  var a = h.h.ye.u.qa.call(this);
  a.oldName = this.Xq;
  a.newName = this.Sq;
  return a;
};
h.h.ye.prototype.aa = function (a) {
  h.h.ye.u.aa.call(this, a);
  this.Xq = a.oldName;
  this.Sq = a.newName;
};
h.h.ye.prototype.run = function (a) {
  var c = v(this);
  a ? c.Vh(this.Tg, this.Sq) : c.Vh(this.Tg, this.Xq);
};
h.A.register(h.A.Y.Fb, h.h.Ot, h.h.Rd);
h.A.register(h.A.Y.Fb, h.h.Pt, h.h.Sd);
h.A.register(h.A.Y.Fb, h.h.Rt, h.h.ye);
h.N = {};
h.N.ZD = function () {
  var a = B,
    c = h.g.xml.createElement("xml"),
    d = h.N.YD(h.ka.Yz(a));
  d.hasChildNodes() && c.appendChild(d);
  var e = [].concat(a.Nn);
  1 < e.length &&
    ((a.Ue.offset = Math.sin(h.g.mc.ai(h.mb.zt))),
    a.J && (a.Ue.offset *= -1),
    e.sort(a.Ue));
  d = 0;
  for (var f; (f = e[d]); d++) c.appendChild(f.$w(!0));
  a = a.Qb(!0);
  for (d = 0; (e = a[d]); d++) c.appendChild(h.N.fp(e, !0));
  return c;
};
h.N.YD = function (a) {
  for (var c = h.g.xml.createElement("variables"), d = 0, e; (e = a[d]); d++) {
    var f = h.g.xml.createElement("variable");
    f.appendChild(h.g.xml.createTextNode(e.name));
    e.type && f.setAttribute("type", e.type);
    f.id = e.yc();
    c.appendChild(f);
  }
  return c;
};
h.N.fp = function (a, c) {
  if (a.Pe() && ((a = C(a, !1)[0]), !a)) return new DocumentFragment();
  var d;
  a.B.J && (d = a.B.Sm());
  c = h.N.ng(a, c);
  var e = a.Sa();
  c.setAttribute("x", Math.round(a.B.J ? d - e.x : e.x));
  c.setAttribute("y", Math.round(e.y));
  return c;
};
h.N.TA = function (a) {
  var c = !1;
  a.name &&
    (a.At
      ? (c = !0)
      : a.Ej &&
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
h.N.Wz = function (a, c) {
  for (var d = 0, e; (e = a.O[d]); d++)
    for (var f = 0, g; (g = e.Za[f]); f++) (g = h.N.TA(g)) && c.appendChild(g);
};
h.N.ng = function (a, c) {
  if (a.Pe()) return (a = C(a, !1)[0]) ? h.N.ng(a) : new DocumentFragment();
  var d = h.g.xml.createElement(a.Ca ? "shadow" : "block");
  d.setAttribute("type", a.type);
  c || d.setAttribute("id", a.id);
  if (a.nc) {
    var e = a.nc();
    e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e);
  }
  h.N.Wz(a, d);
  if ((e = a.vf.text)) {
    var f = a.vf.size,
      g = a.vf.zw,
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
  for (e = 0; (f = a.O[e]); e++) {
    var l;
    g = !0;
    if (f.type != h.df) {
      var m = f.connection.va();
      f.type == h.eb
        ? (l = h.g.xml.createElement("value"))
        : f.type == h.Ra && (l = h.g.xml.createElement("statement"));
      k = f.connection.Zi();
      !k || (m && m.Ca) || l.appendChild(h.N.vu(k, c));
      m &&
        ((k = h.N.ng(m, c)),
        k.nodeType == h.g.j.jg.ELEMENT_NODE && (l.appendChild(k), (g = !1)));
      l.setAttribute("name", f.name);
      g || d.appendChild(l);
    }
  }
  void 0 != a.If && a.If != a.NB && d.setAttribute("inline", a.If);
  a.isCollapsed() && d.setAttribute("collapsed", !0);
  a.isEnabled() || d.setAttribute("disabled", !0);
  a.Nc() || a.Ca || d.setAttribute("deletable", !1);
  a.kc() || a.Ca || d.setAttribute("movable", !1);
  a.xd() || d.setAttribute("editable", !1);
  if ((e = t(a)))
    (k = h.N.ng(e, c)),
      k.nodeType == h.g.j.jg.ELEMENT_NODE &&
        ((l = h.g.xml.createElement("next")),
        l.appendChild(k),
        d.appendChild(l));
  k = a.X && a.X.Zi();
  !k || (e && e.Ca) || l.appendChild(h.N.vu(k, c));
  return d;
};
h.N.vu = function (a, c) {
  for (var d = (a = a.cloneNode(!0)), e; d; )
    if ((c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild))
      d = d.firstChild;
    else {
      for (; d && !d.nextSibling; )
        (e = d),
          (d = d.parentNode),
          e.nodeType == h.g.j.jg.TEXT_NODE &&
            "" == e.data.trim() &&
            d.firstChild != e &&
            h.g.j.removeNode(e);
      d &&
        ((e = d),
        (d = d.nextSibling),
        e.nodeType == h.g.j.jg.TEXT_NODE &&
          "" == e.data.trim() &&
          h.g.j.removeNode(e));
    }
  return a;
};
h.N.Ge = function (a) {
  return h.g.xml.Ge(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>");
};
h.N.bH = function (a) {
  a = h.N.Ge(a).split("<");
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
h.N.Xe = function (a) {
  var c = h.g.xml.MD(a);
  if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length)
    throw Error("textToDom was unable to parse: " + a);
  return c.documentElement;
};
h.N.SG = function (a, c) {
  c.Tc(!1);
  c.clear();
  a = h.N.rg(a, c);
  c.Tc(!0);
  return a;
};
h.N.rg = function (a, c) {
  if (a instanceof h.mb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  c.J && (e = c.Sm());
  d = [];
  h.g.j.xl();
  var f = h.h.Pb();
  f || h.h.ra(!0);
  c.Tc && c.Tc(!1);
  var g = !0;
  try {
    for (var k = 0, l; (l = a.childNodes[k]); k++) {
      var m = l.nodeName.toLowerCase(),
        n = l;
      if ("block" == m || ("shadow" == m && !h.h.Ga)) {
        var r = h.N.Jm(n, c);
        d.push(r.id);
        var q = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10,
          u = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
        isNaN(q) || isNaN(u) || r.moveBy(c.J ? e - q : q, u);
        g = !1;
      } else {
        if ("shadow" == m)
          throw TypeError("Shadow block cannot be a top-level block.");
        if ("comment" == m)
          c.na
            ? h.Ei
              ? h.Ei.setValue(n.textContent)
              : console.warn(
                  "Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment."
                )
            : h.au
            ? h.au.setValue(n.textContent)
            : console.warn(
                "Missing require for Blockly.WorkspaceComment, ignoring workspace comment."
              );
        else if ("variables" == m) {
          if (g) h.N.NA(n, c);
          else
            throw Error(
              "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
            );
          g = !1;
        }
      }
    }
  } finally {
    f || h.h.ra(!1), h.g.j.yl();
  }
  c.Tc && c.Tc(!0);
  h.h.Ja(new h.h.oi(c));
  return d;
};
h.N.HG = function (a, c) {
  var d;
  Object.prototype.hasOwnProperty.call(c, "scale") && (d = ja(c));
  a = h.N.rg(a, c);
  if (d && d.top != d.bottom) {
    var e = d.bottom;
    var f = c.J ? d.right : d.left;
    var g = Infinity,
      k = -Infinity,
      l = Infinity;
    for (d = 0; d < a.length; d++) {
      var m = c.Lc(a[d]).Sa();
      m.y < l && (l = m.y);
      m.x < g && (g = m.x);
      m.x > k && (k = m.x);
    }
    e = e - l + 10;
    f = c.J ? f - k : f - g;
    for (d = 0; d < a.length; d++) c.Lc(a[d]).moveBy(f, e);
  }
  return a;
};
h.N.Jm = function (a, c) {
  if (a instanceof h.mb) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  h.h.disable();
  d = c.Vi();
  try {
    var e = h.N.Mp(a, c),
      f = p(e, !1);
    if (c.na) {
      ka(e, !1);
      for (var g = f.length - 1; 0 <= g; g--) f[g].Dh();
      for (g = f.length - 1; 0 <= g; g--) f[g].Ea(!1);
      setTimeout(function () {
        e.Af || ka(e, !0);
      }, 1);
      la(e);
      ma(c);
    } else for (g = f.length - 1; 0 <= g; g--);
  } finally {
    h.h.enable();
  }
  if (h.h.isEnabled()) {
    a = h.ka.ZA(c, d);
    for (g = 0; g < a.length; g++) h.h.Ja(new h.h.Rd(a[g]));
    h.h.Ja(new h.h.Ql(e));
  }
  return e;
};
h.N.NA = function (a, c) {
  for (var d = 0, e; (e = a.childNodes[d]); d++)
    if (e.nodeType == h.g.j.jg.ELEMENT_NODE) {
      var f = e.getAttribute("type"),
        g = e.getAttribute("id");
      c.Xd(e.textContent, f, g);
    }
};
h.N.Mp = function (a, c) {
  var d = null,
    e = a.getAttribute("type");
  if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
  var f = a.getAttribute("id");
  d = c.nj(e, f);
  var g = null;
  f = 0;
  for (var k; (k = a.childNodes[f]); f++)
    if (k.nodeType != h.g.j.jg.TEXT_NODE) {
      for (var l, m = (g = null), n = 0; (l = k.childNodes[n]); n++)
        l.nodeType == h.g.j.jg.ELEMENT_NODE &&
          ("block" == l.nodeName.toLowerCase()
            ? (g = l)
            : "shadow" == l.nodeName.toLowerCase() && (m = l));
      n = !1;
      var r = k.getAttribute("name");
      l = k;
      switch (k.nodeName.toLowerCase()) {
        case "mutation":
          d.ad && (d.ad(l), d.Dh && (n = !0));
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
          d.sj(m);
          d.vf.zw = g;
          isNaN(k) || isNaN(l) || (d.vf.size = new h.g.Qd(k, l));
          g &&
            d.eB &&
            !d.Oc &&
            setTimeout(function () {
              d.Vd.Cc(!0);
            }, 1);
          break;
        case "data":
          d.data = k.textContent;
          break;
        case "title":
        case "field":
          h.N.MA(d, r, l);
          break;
        case "value":
        case "statement":
          l = ia(d, r);
          if (!l) {
            console.warn("Ignoring non-existent input " + r + " in block " + e);
            break;
          }
          if (g)
            if (((g = h.N.Mp(g, c)), g.M)) l.connection.connect(g.M);
            else if (g.T) l.connection.connect(g.T);
            else
              throw TypeError(
                "Child block does not have output or previous statement."
              );
          m && l.connection.ol(m);
          break;
        case "next":
          if (g) {
            if (!d.X) throw TypeError("Next statement does not exist.");
            if (d.X.isConnected())
              throw TypeError("Next statement is already connected.");
            g = h.N.Mp(g, c);
            if (!g.T)
              throw TypeError("Next block does not have previous statement.");
            d.X.connect(g.T);
          }
          m && d.X && d.X.ol(m);
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  n && d.Dh();
  (f = a.getAttribute("inline")) && d.Pg("true" == f);
  (f = a.getAttribute("disabled")) && d.Rf("true" != f && "disabled" != f);
  if ((f = a.getAttribute("deletable"))) d.zp = "true" == f;
  (f = a.getAttribute("movable")) && d.Hr("true" == f);
  (f = a.getAttribute("editable")) && d.Fr("true" == f);
  (f = a.getAttribute("collapsed")) && d.Xh("true" == f);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = C(d, !1);
    for (f = 0; (c = a[f]); f++)
      if (!c.Ca) throw TypeError("Shadow block not allowed non-shadow child.");
    if (na(d).length)
      throw TypeError("Shadow blocks cannot have variable references.");
    d.Jr(!0);
  }
  return d;
};
h.N.MA = function (a, c, d) {
  var e = z(a, c);
  e
    ? e.setValue(d.textContent)
    : console.warn("Ignoring non-existent field " + c + " in block " + a.type);
};
h.N.DA = function (a) {
  for (var c = 0, d; (d = a.childNodes[c]); c++)
    if ("next" == d.nodeName.toLowerCase()) {
      a.removeChild(d);
      break;
    }
};
h.ld = function (a) {
  var c = !!a.readOnly;
  if (c)
    var d = null,
      e = !1,
      f = !1,
      g = !1,
      k = !1,
      l = !1,
      m = !1;
  else
    (d = h.g.Ha.Fu(a.toolbox)),
      (e = h.g.Ha.Dk(d)),
      (f = a.trashcan),
      void 0 === f && (f = e),
      (g = a.collapse),
      void 0 === g && (g = e),
      (k = a.comments),
      void 0 === k && (k = e),
      (l = a.disable),
      void 0 === l && (l = e),
      (m = a.sounds),
      void 0 === m && (m = !0);
  var n = !!a.rtl,
    r = a.horizontalLayout;
  void 0 === r && (r = !1);
  var q = a.toolboxPosition;
  q = "end" !== q;
  q = r
    ? q
      ? h.g.Ha.fm.Gz
      : h.g.Ha.fm.Ex
    : q == n
    ? h.g.Ha.fm.xt
    : h.g.Ha.fm.Zs;
  var u = a.css;
  void 0 === u && (u = !0);
  var X = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (X = a.media) : a.path && (X = a.path + "media/");
  var xa = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
    Y = a.renderer || "geras",
    Xc = a.plugins || {};
  this.J = n;
  this.zC = xa;
  this.collapse = g;
  this.nA = k;
  this.disable = l;
  this.readOnly = c;
  this.Uk = a.maxBlocks || Infinity;
  this.jn = a.maxInstances;
  this.yw = X;
  this.Dk = e;
  this.Rb = h.ld.BC(a, e);
  this.Dv = f;
  this.EB = m;
  this.CB = u;
  this.Gk = r;
  this.Jh = d;
  this.zv = h.ld.AC(a);
  this.Qa = h.ld.DC(a);
  this.Yb = q;
  this.ND = h.ld.CC(a);
  this.Kw = Y;
  this.Lw = a.rendererOverrides;
  this.nq = null;
  this.Pc = a.parentWorkspace;
  this.plugins = Xc;
};
h.hE = function () {};
h.ld.BC = function (a, c) {
  var d = a.move || {},
    e = {};
  e.scrollbars =
    void 0 === d.scrollbars && void 0 === a.scrollbars
      ? c
      : !!d.scrollbars || !!a.scrollbars;
  e.Vg = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
  e.Bf = e.scrollbars ? (void 0 === d.drag ? !0 : !!d.drag) : !1;
  return e;
};
h.ld.DC = function (a) {
  a = a.zoom || {};
  var c = {};
  c.controls = void 0 === a.controls ? !1 : !!a.controls;
  c.Vg = void 0 === a.wheel ? !1 : !!a.wheel;
  c.JD = void 0 === a.startScale ? 1 : Number(a.startScale);
  c.Vk = void 0 === a.maxScale ? 3 : Number(a.maxScale);
  c.Wk = void 0 === a.minScale ? 0.3 : Number(a.minScale);
  c.tD = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
  c.lr = void 0 === a.pinch ? c.Vg || c.controls : !!a.pinch;
  return c;
};
h.ld.AC = function (a) {
  a = a.grid || {};
  var c = {};
  c.spacing = Number(a.spacing) || 0;
  c.pb = a.colour || "#888";
  c.length = void 0 === a.length ? 1 : Number(a.length);
  c.aI = 0 < c.spacing && !!a.snap;
  return c;
};
h.ld.CC = function (a) {
  a = a.theme || h.pf.cg;
  return "string" == typeof a
    ? h.A.iq(h.A.Y.Oo, a)
    : a instanceof h.hh
    ? a
    : h.hh.CA(a.name || "builtin" + h.g.Jj.nv(), a);
};
h.ld.jr = function (a) {
  h.g.Ap.warn(
    "Blockly.Options.parseToolboxTree",
    "September 2020",
    "September 2021",
    "Blockly.utils.toolbox.parseToolboxTree"
  );
  return h.g.Ha.jr(a);
};
h.Touch = {};
h.Touch.Jt =
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
h.Touch.Fl = null;
h.Touch.ve = {};
h.g.global.PointerEvent
  ? (h.Touch.ve = {
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
  : h.Touch.Jt &&
    (h.Touch.ve = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"],
    });
h.gn = 0;
h.$B = function (a, c) {
  h.Fg();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (h.gn = setTimeout(function () {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      c && oa(c, a);
    }, h.Vy));
};
h.Fg = function () {
  h.gn && (clearTimeout(h.gn), (h.gn = 0));
};
h.Touch.wm = function () {
  h.Touch.Fl = null;
};
h.Touch.Lr = function (a) {
  return !h.Touch.SB(a) || h.Touch.kA(a);
};
h.Touch.Qm = function (a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 !== a.changedTouches[0].identifier &&
      null !== a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
h.Touch.kA = function (a) {
  var c = h.Touch.Qm(a);
  return void 0 !== h.Touch.Fl && null !== h.Touch.Fl
    ? h.Touch.Fl == c
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((h.Touch.Fl = c), !0)
    : !1;
};
h.Touch.yD = function (a) {
  if (h.g.Pa.startsWith(a.type, "touch")) {
    var c = a.changedTouches[0];
    a.clientX = c.clientX;
    a.clientY = c.clientY;
  }
};
h.Touch.SB = function (a) {
  return (
    h.g.Pa.startsWith(a.type, "touch") ||
    h.g.Pa.startsWith(a.type, "mouse") ||
    h.g.Pa.startsWith(a.type, "pointer")
  );
};
h.Touch.dn = function (a) {
  return (
    h.g.Pa.startsWith(a.type, "touch") || h.g.Pa.startsWith(a.type, "pointer")
  );
};
h.Touch.GD = function (a) {
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
h.Uj = function (a) {
  this.G = a;
  this.vd = new h.Na(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.Hd = new h.Na(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.ik = h.g.j.R(
    h.g.F.kf,
    { height: h.Na.Sc, width: h.Na.Sc, class: "blocklyScrollbarBackground" },
    null
  );
  h.g.j.Ik(this.ik, a.Vf);
  this.sb = null;
};
h.Uj.prototype.H = function () {
  h.g.j.removeNode(this.ik);
  this.sb = this.G = this.ik = null;
  this.vd.H();
  this.vd = null;
  this.Hd.H();
  this.Hd = null;
};
h.Uj.prototype.resize = function () {
  var a = this.G.Je();
  if (a) {
    var c = !1,
      d = !1;
    this.sb &&
    this.sb.Sb == a.Sb &&
    this.sb.ec == a.ec &&
    this.sb.od == a.od &&
    this.sb.nd == a.nd
      ? ((this.sb &&
          this.sb.xf == a.xf &&
          this.sb.ub == a.ub &&
          this.sb.Hc == a.Hc) ||
          (c = !0),
        (this.sb &&
          this.sb.wf == a.wf &&
          this.sb.Eb == a.Eb &&
          this.sb.Ic == a.Ic) ||
          (d = !0))
      : (d = c = !0);
    if (c || d) {
      try {
        h.h.disable(), c && this.vd.resize(a), d && this.Hd.resize(a);
      } finally {
        h.h.enable();
      }
      pa(this.G);
    }
    (this.sb && this.sb.Sb == a.Sb && this.sb.nd == a.nd) ||
      this.ik.setAttribute("x", this.Hd.position.x);
    (this.sb && this.sb.ec == a.ec && this.sb.od == a.od) ||
      this.ik.setAttribute("y", this.vd.position.y);
    this.sb = a;
  }
};
h.Uj.prototype.set = function (a, c) {
  var d = {};
  a *= this.vd.ratio;
  c *= this.Hd.ratio;
  var e = this.Hd.Fd,
    f = a / this.vd.Fd;
  d.x = isNaN(f) ? 0 : f;
  e = c / e;
  d.y = isNaN(e) ? 0 : e;
  this.G.Dn(d);
  D(this.vd, a);
  D(this.Hd, c);
};
h.Na = function (a, c, d, e) {
  this.G = a;
  this.oj = d || !1;
  this.Ah = c;
  this.ratio = this.sb = null;
  this.jk(e);
  this.position = new h.g.P(0, 0);
  a = h.Na.Sc;
  c
    ? (this.Uf.setAttribute("height", a),
      this.Qe.setAttribute("height", a),
      this.Uc.setAttribute("height", a - 5),
      this.Uc.setAttribute("y", 2.5),
      (this.Pk = "width"),
      (this.Aw = "x"))
    : (this.Uf.setAttribute("width", a),
      this.Qe.setAttribute("width", a),
      this.Uc.setAttribute("width", a - 5),
      this.Uc.setAttribute("x", 2.5),
      (this.Pk = "height"),
      (this.Aw = "y"));
  this.sw = h.Oa(this.Uf, "mousedown", this, this.sC);
  this.tw = h.Oa(this.Uc, "mousedown", this, this.tC);
};
b = h.Na.prototype;
b.vw = new h.g.P(0, 0);
b.Vw = 0;
b.Fd = 0;
b.ug = 0;
b.Ck = 0;
b.Ok = !0;
b.tp = !0;
h.Na.Sc = 15;
h.Touch.Jt && (h.Na.Sc = 25);
h.Na.dC = function (a, c) {
  return a &&
    c &&
    a.Sb == c.Sb &&
    a.ec == c.ec &&
    a.ub == c.ub &&
    a.Eb == c.Eb &&
    a.od == c.od &&
    a.nd == c.nd &&
    a.xf == c.xf &&
    a.wf == c.wf &&
    a.Hc == c.Hc &&
    a.Ic == c.Ic
    ? !0
    : !1;
};
h.Na.prototype.H = function () {
  qa();
  h.tb(this.sw);
  this.sw = null;
  h.tb(this.tw);
  this.tw = null;
  h.g.j.removeNode(this.Qe);
  this.Uf = this.oa = this.Qe = null;
  this.Uc && (this.G.Vc.unsubscribe(this.Uc), (this.Uc = null));
  this.G = null;
};
function D(a, c) {
  a.Ck = c;
  a.Uc.setAttribute(a.Aw, a.Ck);
}
function ra(a, c) {
  a.Fd = c;
  a.Qe.setAttribute(a.Pk, a.Fd);
  a.Uf.setAttribute(a.Pk, a.Fd);
}
h.Uj.prototype.ll = function (a) {
  this.vd.ll(a);
  this.Hd.ll(a);
};
b = h.Na.prototype;
b.setPosition = function (a, c) {
  this.position.x = a;
  this.position.y = c;
  h.g.j.Cn(
    this.Qe,
    "translate(" +
      (this.position.x + this.vw.x) +
      "px," +
      (this.position.y + this.vw.y) +
      "px)"
  );
};
b.resize = function (a) {
  if (!a && ((a = this.G.Je()), !a)) return;
  h.Na.dC(a, this.sb) ||
    ((this.sb = a), this.Ah ? sa(this, a) : ta(this, a), ua(this));
};
function sa(a, c) {
  var d = c.Sb - 1;
  a.oj && (d -= h.Na.Sc);
  ra(a, Math.max(0, d));
  d = c.nd + 0.5;
  a.oj && a.G.J && (d += h.Na.Sc);
  a.setPosition(d, c.od + c.ec - h.Na.Sc - 0.5);
  va(a, c);
}
function va(a, c) {
  a.oj || a.Cc(a.Fd < c.xf);
  a.ratio = a.Fd / c.xf;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.ug = Math.max(0, c.Sb * a.ratio);
  a.Uc.setAttribute(a.Pk, a.ug);
  D(a, wa(a, (c.ub - c.Hc) * a.ratio));
}
function ta(a, c) {
  var d = c.ec - 1;
  a.oj && (d -= h.Na.Sc);
  ra(a, Math.max(0, d));
  d = c.nd + 0.5;
  a.G.J || (d += c.Sb - h.Na.Sc - 1);
  a.setPosition(d, c.od + 0.5);
  ya(a, c);
}
function ya(a, c) {
  a.oj || a.Cc(a.Fd < c.wf);
  a.ratio = a.Fd / c.wf;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.ug = Math.max(0, c.ec * a.ratio);
  a.Uc.setAttribute(a.Pk, a.ug);
  D(a, wa(a, (c.Eb - c.Ic) * a.ratio));
}
b.jk = function (a) {
  var c = "blocklyScrollbar" + (this.Ah ? "Horizontal" : "Vertical");
  a && (c += " " + a);
  this.Qe = h.g.j.R(h.g.F.Tj, { class: c }, null);
  this.oa = h.g.j.R(h.g.F.Wc, {}, this.Qe);
  this.Uf = h.g.j.R(h.g.F.kf, { class: "blocklyScrollbarBackground" }, this.oa);
  a = Math.floor((h.Na.Sc - 5) / 2);
  this.Uc = h.g.j.R(
    h.g.F.kf,
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.oa
  );
  this.G.Vc.subscribe(this.Uc, "scrollbarColour", "fill");
  this.G.Vc.subscribe(this.Uc, "scrollbarOpacity", "fill-opacity");
  h.g.j.Ik(this.Qe, x(this.G));
};
b.isVisible = function () {
  return this.Ok;
};
b.ll = function (a) {
  var c = a != this.tp;
  this.tp = a;
  c && za(this);
};
b.Cc = function (a) {
  var c = a != this.isVisible();
  if (this.oj) throw Error("Unable to toggle visibility of paired scrollbars.");
  this.Ok = a;
  c && za(this);
};
function za(a) {
  a.tp && a.isVisible()
    ? a.Qe.setAttribute("display", "block")
    : a.Qe.setAttribute("display", "none");
}
b.sC = function (a) {
  da(this.G);
  h.Touch.wm();
  qa();
  if (h.g.Nk(a)) a.stopPropagation();
  else {
    var c = h.g.Xk(a, x(this.G), Aa(this.G));
    c = this.Ah ? c.x : c.y;
    var d = h.g.fq(this.Uc);
    d = this.Ah ? d.x : d.y;
    var e = this.Ck,
      f = 0.95 * this.ug;
    c <= d ? (e -= f) : c >= d + this.ug && (e += f);
    D(this, wa(this, e));
    ua(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
b.tC = function (a) {
  da(this.G);
  qa();
  h.g.Nk(a)
    ? a.stopPropagation()
    : ((this.HD = this.Ck),
      Ba(this.G),
      (this.Vw = this.Ah ? a.clientX : a.clientY),
      (h.Na.Kg = h.Oa(document, "mouseup", this, this.xC)),
      (h.Na.Jg = h.Oa(document, "mousemove", this, this.uC)),
      a.stopPropagation(),
      a.preventDefault());
};
b.uC = function (a) {
  D(this, wa(this, this.HD + ((this.Ah ? a.clientX : a.clientY) - this.Vw)));
  ua(this);
};
b.xC = function () {
  Ca(this.G);
  h.Touch.wm();
  qa();
};
function qa() {
  h.cc(!0);
  h.Na.Kg && (h.tb(h.Na.Kg), (h.Na.Kg = null));
  h.Na.Jg && (h.tb(h.Na.Jg), (h.Na.Jg = null));
}
function wa(a, c) {
  return (c = 0 >= c || isNaN(c) || a.Fd < a.ug ? 0 : Math.min(c, a.Fd - a.ug));
}
function ua(a) {
  var c = a.Ck / a.Fd;
  isNaN(c) && (c = 0);
  var d = {};
  a.Ah ? (d.x = c) : (d.y = c);
  a.G.Dn(d);
}
b.set = function (a) {
  D(this, wa(this, a * this.ratio));
  ua(this);
};
h.D = {};
h.D.visible = !1;
h.D.Ii = !1;
h.D.Ty = 50;
h.D.dw = 0;
h.D.vl = 0;
h.D.Dq = 0;
h.D.Eq = 0;
h.D.Ya = null;
h.D.bl = null;
h.D.ft = 0;
h.D.gt = 10;
h.D.sz = 10;
h.D.Fy = 750;
h.D.zo = 5;
h.D.Ua = null;
h.D.qB = function () {
  var a = h.D.xv(h.D.Ya);
  if (a) {
    for (a = a.ge; "function" == typeof a; ) a = a();
    if ("string" != typeof a)
      throw Error("Tooltip function must return a string.");
    return a;
  }
  return "";
};
h.D.xv = function (a) {
  for (; a && a.ge; ) {
    if ("string" == typeof a.ge || "function" == typeof a.ge) return a;
    a = a.ge;
  }
  return null;
};
h.D.jb = function () {
  h.D.Ua ||
    ((h.D.Ua = document.createElement("div")),
    (h.D.Ua.className = "blocklyTooltipDiv"),
    (h.un || document.body).appendChild(h.D.Ua));
};
h.D.bk = function (a) {
  a.gC = h.lh(a, "mouseover", h.D.wC);
  a.fC = h.lh(a, "mouseout", h.D.vC);
  a.addEventListener("mousemove", h.D.uw, !1);
};
h.D.hx = function (a) {
  a && (h.tb(a.gC), h.tb(a.fC), a.removeEventListener("mousemove", h.D.uw));
};
h.D.wC = function (a) {
  h.D.Ii ||
    ((a = h.D.xv(a.currentTarget)),
    h.D.Ya != a && (h.D.$a(), (h.D.bl = null), (h.D.Ya = a)),
    clearTimeout(h.D.dw));
};
h.D.vC = function () {
  h.D.Ii ||
    ((h.D.dw = setTimeout(function () {
      h.D.Ya = null;
      h.D.bl = null;
      h.D.$a();
    }, 1)),
    clearTimeout(h.D.vl));
};
h.D.uw = function (a) {
  if (h.D.Ya && h.D.Ya.ge && !h.D.Ii)
    if (h.D.visible) {
      var c = h.D.Dq - a.pageX;
      a = h.D.Eq - a.pageY;
      Math.sqrt(c * c + a * a) > h.D.sz && h.D.$a();
    } else
      h.D.bl != h.D.Ya &&
        (clearTimeout(h.D.vl),
        (h.D.Dq = a.pageX),
        (h.D.Eq = a.pageY),
        (h.D.vl = setTimeout(h.D.DD, h.D.Fy)));
};
h.D.H = function () {
  h.D.Ya = null;
  h.D.bl = null;
  h.D.$a();
};
h.D.$a = function () {
  h.D.visible &&
    ((h.D.visible = !1), h.D.Ua && (h.D.Ua.style.display = "none"));
  h.D.vl && clearTimeout(h.D.vl);
};
h.D.block = function () {
  h.D.$a();
  h.D.Ii = !0;
};
h.D.VD = function () {
  h.D.Ii = !1;
};
h.D.DD = function () {
  if (!h.D.Ii && ((h.D.bl = h.D.Ya), h.D.Ua)) {
    h.D.Ua.textContent = "";
    var a = h.D.qB();
    a = h.g.Pa.$D(a);
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) {
      var d = document.createElement("div");
      d.appendChild(document.createTextNode(a[c]));
      h.D.Ua.appendChild(d);
    }
    a = h.D.Ya.J;
    c = document.documentElement.clientWidth;
    d = document.documentElement.clientHeight;
    h.D.Ua.style.direction = a ? "rtl" : "ltr";
    h.D.Ua.style.display = "block";
    h.D.visible = !0;
    var e = h.D.Dq;
    e = a ? e - (h.D.ft + h.D.Ua.offsetWidth) : e + h.D.ft;
    var f = h.D.Eq + h.D.gt;
    f + h.D.Ua.offsetHeight > d + window.scrollY &&
      (f -= h.D.Ua.offsetHeight + 2 * h.D.gt);
    a
      ? (e = Math.max(h.D.zo - window.scrollX, e))
      : e + h.D.Ua.offsetWidth > c + window.scrollX - 2 * h.D.zo &&
        (e = c - h.D.Ua.offsetWidth - 2 * h.D.zo);
    h.D.Ua.style.top = f + "px";
    h.D.Ua.style.left = e + "px";
  }
};
h.bu = function (a) {
  this.hk = a;
  this.jb();
};
b = h.bu.prototype;
b.ib = null;
b.hk = null;
b.jb = function () {
  this.ib ||
    ((this.ib = h.g.j.R(
      h.g.F.Tj,
      {
        xmlns: h.g.j.jm,
        "xmlns:html": h.g.j.oo,
        "xmlns:xlink": h.g.j.jh,
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible",
      },
      null
    )),
    this.hk.appendChild(this.ib));
};
b.bi = function (a, c) {
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.ib.style.display = "block";
  h.g.j.Cn(this.ib, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.kq = function () {
  return h.g.$d(this.ib);
};
b.vm = function (a) {
  if (!a)
    throw Error(
      "Couldn't clear and hide the drag surface: missing new surface."
    );
  var c = this.ib.childNodes[0],
    d = this.ib.childNodes[1];
  if (
    !(
      c &&
      d &&
      h.g.j.oq(c, "blocklyBlockCanvas") &&
      h.g.j.oq(d, "blocklyBubbleCanvas")
    )
  )
    throw Error(
      "Couldn't clear and hide the drag surface. A node was missing."
    );
  null != this.pr ? h.g.j.Ik(c, this.pr) : a.insertBefore(c, a.firstChild);
  h.g.j.Ik(d, c);
  this.ib.style.display = "none";
  if (this.ib.childNodes.length) throw Error("Drag surface was not cleared.");
  h.g.j.Cn(this.ib, "");
  this.pr = null;
};
h.v = function (a, c, d) {
  if (!c) throw Error("Cannot create a node without a location.");
  this.Hl = a;
  this.ej = h.v.PB(a);
  this.ma = c;
  this.Rn = null;
  (a = d || null) && a.tx && (this.Rn = a.tx);
};
h.v.types = {
  Nb: "field",
  vb: "block",
  hd: "input",
  fh: "output",
  kd: "next",
  md: "previous",
  te: "stack",
  Vb: "workspace",
};
h.v.hg = !1;
h.v.Vx = -20;
h.v.PB = function (a) {
  switch (a) {
    case h.v.types.md:
    case h.v.types.kd:
    case h.v.types.hd:
    case h.v.types.fh:
      return !0;
  }
  return !1;
};
h.v.kk = function (a) {
  return a ? new h.v(h.v.types.Nb, a) : null;
};
h.v.Fe = function (a) {
  return a
    ? a.type == h.eb || (a.type == h.Ra && a.Le())
      ? h.v.oh(a.Le())
      : a.type == h.Ra
      ? new h.v(h.v.types.kd, a)
      : a.type == h.Md
      ? new h.v(h.v.types.fh, a)
      : a.type == h.Nd
      ? new h.v(h.v.types.md, a)
      : null
    : null;
};
h.v.oh = function (a) {
  return a && a.connection ? new h.v(h.v.types.hd, a.connection) : null;
};
h.v.Ee = function (a) {
  return a ? new h.v(h.v.types.vb, a) : null;
};
h.v.lk = function (a) {
  return a ? new h.v(h.v.types.te, a) : null;
};
h.v.Pi = function (a, c) {
  return c && a ? new h.v(h.v.types.Vb, a, { tx: c }) : null;
};
h.v.vp = function (a) {
  var c = a.T || a.M;
  return c ? h.v.Fe(c) : h.v.Ee(a);
};
b = h.v.prototype;
b.La = function () {
  return this.Hl;
};
function Da(a, c) {
  a = a.ma;
  a instanceof h.Dc || (a = a.S());
  if (!a || !a.B) return null;
  var d = a.Ac();
  a = d.B.Qb(!0);
  for (var e = 0, f; (f = a[e]); e++)
    if (d.id == f.id)
      return (
        (c = e + (c ? 1 : -1)), -1 == c || c == a.length ? null : h.v.lk(a[c])
      );
  throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}
function Ea(a) {
  if (!a) return null;
  do var c = a.T && a.T.va();
  while (c && t(c) == a && (a = c));
  return (c = a.T || a.M) && c.pa && c.pa.Le() ? h.v.oh(c.pa.Le()) : h.v.lk(a);
}
b.S = function () {
  return this.La() === h.v.types.vb
    ? this.ma
    : this.La() === h.v.types.te
    ? this.ma
    : this.La() === h.v.types.Vb
    ? null
    : this.ma.S();
};
b.next = function () {
  switch (this.Hl) {
    case h.v.types.te:
      return Da(this, !0);
    case h.v.types.fh:
      var a = this.ma;
      return h.v.Ee(a.S());
    case h.v.types.Nb:
      a: {
        var c = this.ma,
          d = c.Le();
        a = c.S();
        c = d.Za.indexOf(c) + 1;
        d = a.O.indexOf(d);
        for (var e; (e = a.O[d]); d++) {
          for (var f = e.Za; c < f.length; ) {
            if (E(f[c]) || h.v.hg) {
              a = h.v.kk(f[c]);
              break a;
            }
            c++;
          }
          c = 0;
          if (e.connection) {
            a = h.v.oh(e);
            break a;
          }
        }
        a = null;
      }
      return a;
    case h.v.types.hd:
      a: {
        c = this.ma.Le();
        a = c.S();
        for (c = a.O.indexOf(c) + 1; (d = a.O[c]); c++) {
          e = d.Za;
          f = 0;
          for (var g; (g = e[f]); f++)
            if (E(g) || h.v.hg) {
              a = h.v.kk(g);
              break a;
            }
          if (d.connection) {
            a = h.v.oh(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case h.v.types.vb:
      return h.v.Fe(this.ma.X);
    case h.v.types.md:
      return (a = this.ma), h.v.Ee(a.S());
    case h.v.types.kd:
      return (a = this.ma), h.v.Fe(a.pa);
  }
  return null;
};
b.Hf = function () {
  switch (this.Hl) {
    case h.v.types.Vb:
      var a = this.ma.Qb(!0);
      if (0 < a.length) return h.v.lk(a[0]);
      break;
    case h.v.types.te:
      a = this.ma;
      var c = a.T || a.M;
      return c ? h.v.Fe(c) : h.v.Ee(a);
    case h.v.types.vb:
      a = this.ma;
      a: {
        a = a.O;
        c = 0;
        for (var d; (d = a[c]); c++) {
          for (var e = d.Za, f = 0, g; (g = e[f]); f++)
            if (E(g) || h.v.hg) {
              a = h.v.kk(g);
              break a;
            }
          if (d.connection) {
            a = h.v.oh(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case h.v.types.hd:
      return h.v.Fe(this.ma.pa);
  }
  return null;
};
b.Of = function () {
  switch (this.Hl) {
    case h.v.types.te:
      return Da(this, !1);
    case h.v.types.Nb:
      a: {
        var a = this.ma;
        var c = a.Le();
        var d = a.S();
        a = c.Za.indexOf(a) - 1;
        for (var e = d.O.indexOf(c), f; (f = d.O[e]); e--) {
          if (f.connection && f !== c) {
            c = h.v.oh(f);
            break a;
          }
          for (f = f.Za; -1 < a; ) {
            if (E(f[a]) || h.v.hg) {
              c = h.v.kk(f[a]);
              break a;
            }
            a--;
          }
          0 <= e - 1 && (a = d.O[e - 1].Za.length - 1);
        }
        c = null;
      }
      return c;
    case h.v.types.hd:
      a: {
        c = this.ma.Le();
        d = c.S();
        for (a = d.O.indexOf(c); (e = d.O[a]); a--) {
          if (e.connection && e !== c) {
            c = h.v.oh(e);
            break a;
          }
          e = e.Za;
          f = e.length - 1;
          for (var g; (g = e[f]); f--)
            if (E(g) || h.v.hg) {
              c = h.v.kk(g);
              break a;
            }
        }
        c = null;
      }
      return c;
    case h.v.types.vb:
      return (c = this.ma), h.v.Fe(c.T || c.M);
    case h.v.types.md:
      c = this.ma;
      if ((c = c.pa) && !c.Le()) return h.v.Fe(c);
      break;
    case h.v.types.kd:
      return (c = this.ma), h.v.Ee(c.S());
  }
  return null;
};
b.Nf = function () {
  switch (this.Hl) {
    case h.v.types.te:
      var a = this.ma,
        c = a.Sa();
      return h.v.Pi(a.B, new h.g.P(c.x, c.y + h.v.Vx));
    case h.v.types.fh:
      return (a = this.ma), (c = a.pa) ? h.v.Fe(c) : h.v.lk(a.S());
    case h.v.types.Nb:
      return h.v.Ee(this.ma.S());
    case h.v.types.hd:
      return (a = this.ma), h.v.Ee(a.S());
    case h.v.types.vb:
      return (a = this.ma), Ea(a);
    case h.v.types.md:
      return (a = this.ma), Ea(a.S());
    case h.v.types.kd:
      return (a = this.ma), Ea(a.S());
  }
  return null;
};
h.fc = Object.create(null);
h.g.Ap = {};
h.g.Ap.warn = function (a, c, d, e) {
  a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
  e && (a += "\nUse " + e + " instead.");
  console.warn(a);
};
h.ca = function (a, c) {
  this.I = a;
  this.type = c;
};
h.ca.Sl = 0;
h.ca.st = 1;
h.ca.vt = 2;
h.ca.ut = 3;
h.ca.ot = 4;
h.ca.qt = 5;
h.ca.tt = 6;
h.ca.rt = 7;
b = h.ca.prototype;
b.pa = null;
b.Af = !1;
b.pg = null;
b.In = null;
b.x = 0;
b.y = 0;
b.Wd = function (a) {
  var c = this,
    d = c.S(),
    e = a.S();
  a.isConnected() && a.disconnect();
  if (c.isConnected()) {
    var f = c.va(),
      g = c.Zi();
    c.In = null;
    if (f.Ca) (g = h.N.ng(f)), f.H(!1), (f = null);
    else if (c.type == h.eb) {
      if (!f.M) throw Error("Orphan block does not have an output connection.");
      var k = h.ca.Uv(e, f);
      k && (f.M.connect(k), (f = null));
    } else if (c.type == h.Ra) {
      if (!f.T)
        throw Error("Orphan block does not have a previous connection.");
      for (k = e; k.X; ) {
        var l = t(k);
        if (l && !l.Ca) k = l;
        else {
          F(f.B.fk, f.T, k.X, !1) && (k.X.connect(f.T), (f = null));
          break;
        }
      }
    }
    if (f && (c.disconnect(), h.h.Ga)) {
      var m = h.h.Pb();
      setTimeout(function () {
        f.B &&
          !f.getParent() &&
          (h.h.ra(m), f.M ? f.M.qn(c) : f.T && f.T.qn(c), h.h.ra(!1));
      }, h.Yn);
    }
    c.In = g;
  }
  var n;
  h.h.isEnabled() && (n = new h.h.Aj(e));
  h.ca.tA(c, a);
  e.Gn(d);
  n && (n.Uh(), h.h.Ja(n));
};
b.H = function () {
  if (this.isConnected()) {
    this.ol(null);
    var a = this.va();
    a && A(a);
  }
  this.Af = !0;
};
b.S = function () {
  return this.I;
};
function G(a) {
  return a.type == h.eb || a.type == h.Ra;
}
b.isConnected = function () {
  return !!this.pa;
};
b.sm = function (a) {
  h.g.Ap.warn(
    "Connection.prototype.canConnectWithReason",
    "July 2020",
    "July 2021",
    "the workspace's connection checker"
  );
  return H(this).sm(this, a, !1);
};
function H(a) {
  return a.I.B.fk;
}
b.qn = function () {};
b.connect = function (a) {
  if (this.pa != a && F(H(this), this, a, !1)) {
    var c = h.h.Pb();
    c || h.h.ra(!0);
    G(this) ? this.Wd(a) : a.Wd(this);
    c || h.h.ra(!1);
  }
};
h.ca.tA = function (a, c) {
  if (!a || !c) throw Error("Cannot connect null connections.");
  a.pa = c;
  c.pa = a;
};
h.ca.ED = function (a, c) {
  var d = null;
  c = c.M;
  for (var e = 0; e < a.O.length; e++) {
    var f = a.O[e].connection,
      g = H(c);
    if (f && f.type == h.eb && F(g, c, f, !1)) {
      if (d) return null;
      d = f;
    }
  }
  return d;
};
h.ca.Uv = function (a, c) {
  for (var d; (d = h.ca.ED(a, c)); ) if (((a = d.va()), !a || a.Ca)) return d;
  return null;
};
b = h.ca.prototype;
b.disconnect = function () {
  var a = this.pa;
  if (!a) throw Error("Source connection not connected.");
  if (a.pa != this)
    throw Error("Target connection not connected to source connection.");
  if (G(this)) {
    var c = this.I;
    var d = a.S();
    a = this;
  } else (c = a.S()), (d = this.I);
  var e = h.h.Pb();
  e || h.h.ra(!0);
  this.Hp(c, d);
  d.Ca || a.jl();
  e || h.h.ra(!1);
};
b.Hp = function (a, c) {
  var d;
  h.h.isEnabled() && (d = new h.h.Aj(c));
  this.pa = this.pa.pa = null;
  c.Gn(null);
  d && (d.Uh(), h.h.Ja(d));
};
b.jl = function () {
  var a = this.S(),
    c = this.Zi();
  if (a.B && c)
    if (((a = h.N.Jm(c, a.B)), a.M)) this.connect(a.M);
    else if (a.T) this.connect(a.T);
    else throw Error("Child block does not have output or previous statement.");
};
b.va = function () {
  return this.isConnected() ? this.pa.S() : null;
};
b.rw = function () {
  !this.isConnected() ||
    (this.pa && F(H(this), this, this.pa, !1)) ||
    A(G(this) ? this.va() : this.I);
};
b.rj = function (a) {
  a
    ? (Array.isArray(a) || (a = [a]), (this.pg = a), this.rw())
    : (this.pg = null);
};
b.ol = function (a) {
  this.In = a;
  a = this.va();
  a ? a.Ca && (a.H(!1), this.jl()) : this.jl();
};
b.Zi = function () {
  return this.In;
};
b.gw = function () {
  return [];
};
b.Le = function () {
  for (var a = null, c = this.I, d = c.O, e = 0; e < c.O.length; e++)
    if (d[e].connection === this) {
      a = d[e];
      break;
    }
  return a;
};
b.toString = function () {
  var a = this.I;
  if (a)
    if (a.M == this) var c = "Output Connection of ";
    else if (a.T == this) c = "Previous Connection of ";
    else if (a.X == this) c = "Next Connection of ";
    else {
      c = null;
      for (var d = 0, e; (e = a.O[d]); d++)
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
h.wa = {};
h.wa.zj = {};
h.wa.register = function (a, c) {
  if ("string" != typeof a || "" == a.trim())
    throw Error('Error: Invalid extension name "' + a + '"');
  if (h.wa.zj[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if ("function" != typeof c)
    throw Error('Error: Extension "' + a + '" must be a function');
  h.wa.zj[a] = c;
};
h.wa.MH = function (a, c) {
  if (!c || "object" != typeof c)
    throw Error('Error: Mixin "' + a + '" must be a object');
  h.wa.register(a, function () {
    this.Hg(c);
  });
};
h.wa.NH = function (a, c, d, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  h.wa.qu(f, c.ad, "domToMutation");
  h.wa.qu(f, c.nc, "mutationToDom");
  var g = h.wa.tu(c, f);
  if (d && "function" != typeof d)
    throw Error('Extension "' + a + '" is not a function');
  h.wa.register(a, function () {
    if (g) {
      if (!h.gz) throw Error(f + "Missing require for Blockly.Mutator");
      this.Rw(new h.gz(e || []));
    }
    this.Hg(c);
    d && d.apply(this);
  });
};
h.wa.unregister = function (a) {
  h.wa.zj[a]
    ? delete h.wa.zj[a]
    : console.warn(
        'No extension mapping for name "' + a + '" found to unregister'
      );
};
h.wa.apply = function (a, c, d) {
  var e = h.wa.zj[a];
  if ("function" != typeof e)
    throw Error('Error: Extension "' + a + '" not found.');
  if (d) h.wa.jA(a, c);
  else var f = h.wa.hq(c);
  e.apply(c);
  if (d) h.wa.hA('Error after applying mutator "' + a + '": ', c);
  else if (!h.wa.lC(f, c))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
h.wa.qu = function (a, c, d) {
  if (!c) throw Error(a + 'missing required property "' + d + '"');
  if ("function" != typeof c)
    throw Error(a + '" required property "' + d + '" must be a function');
};
h.wa.jA = function (a, c) {
  if (h.wa.hq(c).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        c.id
    );
};
h.wa.tu = function (a, c) {
  var d = void 0 !== a.sp,
    e = void 0 !== a.yp;
  if (d && e) {
    if ("function" != typeof a.sp)
      throw Error(c + "compose must be a function.");
    if ("function" != typeof a.yp)
      throw Error(c + "decompose must be a function.");
    return !0;
  }
  if (d || e)
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
h.wa.hA = function (a, c) {
  if ("function" != typeof c.ad)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof c.nc)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  h.wa.tu(c, a);
};
h.wa.hq = function (a) {
  var c = [];
  void 0 !== a.ad && c.push(a.ad);
  void 0 !== a.nc && c.push(a.nc);
  void 0 !== a.sp && c.push(a.sp);
  void 0 !== a.yp && c.push(a.yp);
  return c;
};
h.wa.lC = function (a, c) {
  c = h.wa.hq(c);
  if (c.length != a.length) return !1;
  for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
  return !0;
};
h.wa.KG = function (a, c) {
  var d = [];
  "object" == typeof document &&
    h.g.Ow(function () {
      for (var e in c) h.g.su(c[e]);
    });
  return function () {
    this.type &&
      -1 == d.indexOf(this.type) &&
      (h.wa.iA(this, a, c), d.push(this.type));
    this.Rg(
      function () {
        var e = String(Fa(this, a)),
          f = c[e];
        null == f
          ? -1 == d.indexOf(this.type) &&
            ((e = "No tooltip mapping for value " + e + " of field " + a),
            null != this.type && (e += " of block type " + this.type),
            console.warn(e + "."))
          : (f = h.g.Rc(f));
        return f;
      }.bind(this)
    );
  };
};
h.wa.iA = function (a, c, d) {
  var e = z(a, c);
  if ("function" != typeof e.mj) {
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
h.wa.LG = function (a, c) {
  "object" == typeof document &&
    h.g.Ow(function () {
      h.g.su(a);
    });
  return function () {
    this.Rg(
      function () {
        var d = z(this, c);
        return h.g.Rc(a).replace("%1", d ? Ga(d) : "");
      }.bind(this)
    );
  };
};
h.wa.SA = function () {
  this.QD = this.ge;
  this.Rg(
    function () {
      var a = this.getParent();
      return (a && Ha(a) && a.ge) || this.QD;
    }.bind(this)
  );
};
h.wa.register("parent_tooltip_when_inline", h.wa.SA);
h.sh = {};
h.sh.register = function (a, c) {
  h.A.register(h.A.Y.Nb, a, c);
};
h.sh.unregister = function (a) {
  h.A.unregister(h.A.Y.Nb, a);
};
h.sh.aa = function (a) {
  var c = h.A.iq(h.A.Y.Nb, a.type);
  return c
    ? c.aa(a)
    : (console.warn(
        "Blockly could not create a field of type " +
          a.type +
          ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."
      ),
      null);
};
h.Wa = {};
h.Wa.Ip = 0;
h.Wa.Gm = null;
h.Wa.KA = function (a) {
  var c = a.B,
    d = a.Ba();
  c.ze.play("delete");
  a = Ia(c, d);
  d = d.cloneNode(!0);
  d.SD = a.x;
  d.TD = a.y;
  d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  x(c).appendChild(d);
  d.ju = d.getBBox();
  h.Wa.Tu(d, c.J, new Date(), c.scale);
};
h.Wa.Tu = function (a, c, d, e) {
  var f = (new Date() - d) / 150;
  1 < f
    ? h.g.j.removeNode(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.SD + (((c ? -1 : 1) * a.ju.width * e) / 2) * f) +
          "," +
          (a.TD + a.ju.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(h.Wa.Tu, 10, a, c, d, e));
};
h.Wa.uA = function (a) {
  var c = a.B,
    d = c.scale;
  c.ze.play("click");
  if (!(1 > d)) {
    var e = Ia(c, a.Ba());
    a.M
      ? ((e.x += (a.J ? 3 : -3) * d), (e.y += 13 * d))
      : a.T && ((e.x += (a.J ? -23 : 23) * d), (e.y += 3 * d));
    a = h.g.j.R(
      h.g.F.Jx,
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
    h.Wa.Au(a, new Date(), d);
  }
};
h.Wa.Au = function (a, c, d) {
  var e = (new Date() - c) / 150;
  1 < e
    ? h.g.j.removeNode(a)
    : (a.setAttribute("r", 25 * e * d),
      (a.style.opacity = 1 - e),
      (h.Wa.Ip = setTimeout(h.Wa.Au, 10, a, c, d)));
};
h.Wa.JA = function (a) {
  a.B.ze.play("disconnect");
  if (!(1 > a.B.scale)) {
    var c = w(a).height;
    c = (Math.atan(10 / c) / Math.PI) * 180;
    a.J || (c *= -1);
    h.Wa.Su(a.Ba(), c, new Date());
  }
};
h.Wa.Su = function (a, c, d) {
  var e = (new Date() - d) / 200;
  1 < e
    ? (a.wl = "")
    : ((a.wl =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")"),
      (h.Wa.Gm = a),
      (h.Wa.Ip = setTimeout(h.Wa.Su, 10, a, c, d)));
  a.setAttribute("transform", a.Gl + a.wl);
};
h.Wa.Jp = function () {
  if (h.Wa.Gm) {
    clearTimeout(h.Wa.Ip);
    var a = h.Wa.Gm;
    a.wl = "";
    a.setAttribute("transform", a.Gl);
    h.Wa.Gm = null;
  }
};
h.h.le = function (a, c, d) {
  h.h.le.u.constructor.call(this, a ? a.B.id : void 0);
  this.fb = a ? a.id : null;
  this.Rv = c;
  this.ku = d;
};
h.g.object.U(h.h.le, h.h.xe);
h.h.le.prototype.type = h.h.js;
h.h.le.prototype.qa = function () {
  var a = h.h.le.u.qa.call(this);
  a.isStart = this.Rv;
  a.blockId = this.fb;
  a.blocks = this.ku;
  return a;
};
h.h.le.prototype.aa = function (a) {
  h.h.le.u.aa.call(this, a);
  this.Rv = a.isStart;
  this.fb = a.blockId;
  this.ku = a.blocks;
};
h.A.register(h.A.Y.Fb, h.h.js, h.h.le);
h.Ld = function (a) {
  this.Xf = h.selected = a;
  this.G = a.B;
  this.Eg = this.Bq = null;
  this.xk = Ja(this, this.Xf);
  this.lc = this.xb = null;
  this.Ze = !1;
  this.vk = this.tq = this.Kh = null;
  this.qm = Ka(this);
};
h.Ld.xi = { so: 0, My: 1, wt: 2 };
h.Ld.prototype.H = function () {
  this.qm.length = 0;
  h.h.disable();
  try {
    this.xk && this.xk.H(), this.Eg && this.Eg.H();
  } finally {
    h.h.enable();
  }
};
h.Ld.prototype.update = function (a, c) {
  var d = this.xb && this.lc ? h.rs : h.hc;
  for (var e = null, f = null, g = 0; g < this.qm.length; g++) {
    var k = this.qm[g],
      l = k.closest(d, a);
    l.connection && ((e = l.connection), (f = k), (d = l.zn));
  }
  e = ((d = { closest: e, local: f, zn: d }), !!d.closest) && c != h.zs;
  if (
    (this.Ze = !!c && !this.Xf.getParent() && this.Xf.Nc() && !e) ||
    La(this, d, a)
  ) {
    h.h.disable();
    d.closest
      ? ((a = this.xb != d.closest),
        (c = this.lc != d.local),
        this.xb && this.lc && (a || c || this.Ze) && Ma(this))
      : Ma(this);
    this.lc = this.xb = this.Kh = null;
    if (!this.Ze && ((a = d.closest), (c = d.local), a))
      if (a == this.xb || a.S().Pe())
        console.log("Trying to connect to an insertion marker");
      else {
        this.xb = a;
        this.lc = c;
        a = this.xb;
        d = this.lc;
        c = this.Xf;
        d.type == h.Md || d.type == h.Nd
          ? ((e = !a.isConnected()) ||
              ((e = a.va()),
              d.type == h.Md
                ? ((d = e.M), (c = h.ca.Uv(c, e)))
                : ((d = e.T), (c = c.fn())),
              (e = c ? F(H(d), c, d, !1) : !1)),
            (c = e ? h.Ld.xi.so : h.Ld.xi.wt))
          : (c = h.Ld.xi.so);
        switch (c) {
          case h.Ld.xi.My:
            this.tq = this.xb.S();
            break;
          case h.Ld.xi.so:
            e = this.lc;
            c = this.xb;
            d = this.Bq && e == this.Bq ? this.Eg : this.xk;
            e = d.gq(e.S(), e);
            if (e == this.Kh)
              throw Error(
                "Made it to showInsertionMarker_ even though the marker isn't changing"
              );
            d.Ea();
            d.na = !0;
            d.Ba().setAttribute("visibility", "visible");
            e && c && Na(d, e, c);
            c && e.connect(c);
            this.Kh = e;
            break;
          case h.Ld.xi.wt:
            (this.vk = this.xb.va()), I(this.vk.qb, "blocklyReplaceable", !0);
        }
        a &&
          ((d = a.I.B.lb.$()),
          (c = Oa(d, a)),
          a.type == h.eb || a.type == h.Md
            ? ((d = d.Ci),
              (c =
                h.g.s.moveBy(0, -d) + h.g.s.V("v", d) + c.Ed + h.g.s.V("v", d)))
            : ((d = d.Qj - d.me),
              (c =
                h.g.s.moveBy(-d, 0) +
                h.g.s.V("h", d) +
                c.Lg +
                h.g.s.V("h", d))),
          (d = a.I.Sa()),
          (h.ca.Iv = h.g.j.R(
            h.g.F.hf,
            {
              class: "blocklyHighlightedConnectionPath",
              d: c,
              transform:
                "translate(" +
                (a.x - d.x) +
                "," +
                (a.y - d.y) +
                ")" +
                (a.I.J ? " scale(-1 1)" : ""),
            },
            a.I.Ba()
          )));
      }
    h.h.enable();
  }
};
function Ja(a, c) {
  var d = c.type;
  h.h.disable();
  try {
    var e = a.G.nj(d);
    e.Qw(!0);
    if (c.nc) {
      var f = c.nc();
      f && e.ad(f);
    }
    for (a = 0; a < c.O.length; a++) {
      var g = c.O[a];
      if (g.name != h.Dc.Cj) {
        var k = e.O[a];
        for (d = 0; d < g.Za.length; d++) k.Za[d].setValue(g.Za[d].getValue());
      }
    }
    e.Xh(c.isCollapsed());
    e.Pg(Ha(c));
    e.Dh();
    e.Ba().setAttribute("visibility", "hidden");
  } finally {
    h.h.enable();
  }
  return e;
}
function Ka(a) {
  var c = a.Xf.Zd(!1),
    d = a.Xf.fn();
  if (d && d != a.Xf.X) {
    c.push(d);
    a.Bq = d;
    if (a.Eg) {
      h.h.disable();
      try {
        a.Eg.H();
      } finally {
        h.h.enable();
      }
    }
    a.Eg = Ja(a, d.S());
  }
  return c;
}
function La(a, c, d) {
  var e = c.local,
    f = c.closest;
  c = c.zn;
  if (e && f) {
    if (a.lc && a.xb) {
      if (a.xb == f && a.lc == e) return !1;
      e = a.lc.x + d.x - a.xb.x;
      a = a.lc.y + d.y - a.xb.y;
      a = Math.sqrt(e * e + a * a);
      return !(f && c > a - h.Nx);
    }
    if (a.lc || a.xb)
      console.error(
        "Only one of localConnection_ and closestConnection_ was set."
      );
    else return !0;
  } else return !(!a.lc || !a.xb);
  console.error(
    "Returning true from shouldUpdatePreviews, but it's not clear why."
  );
  return !0;
}
function Ma(a) {
  a.xb && a.xb.va() && (h.g.j.removeNode(h.ca.Iv), delete h.ca.Iv);
  if (a.vk) I(a.vk.qb, "blocklyReplaceable", !1), (a.vk = null);
  else if (a.tq) a.tq = null;
  else if (a.Kh)
    if (a.Kh) {
      var c = a.Kh,
        d = c.S(),
        e = d.X,
        f = d.T,
        g = d.M;
      g = c.type == h.eb && !(g && g.pa);
      !(c != e || (f && f.pa)) || g
        ? A(c.va(), !1)
        : c.type == h.Ra && c != e
        ? ((e = c.pa),
          A(e.S(), !1),
          (f = f ? f.pa : null),
          A(d, !0),
          f && f.connect(e))
        : A(d, !0);
      if (c.pa)
        throw Error(
          "markerConnection_ still connected at the end of disconnectInsertionMarker"
        );
      a.Kh = null;
      d.Ba().setAttribute("visibility", "hidden");
    } else console.log("No insertion marker connection to disconnect");
}
h.Ld.prototype.Xi = function () {
  var a = [];
  this.xk && a.push(this.xk);
  this.Eg && a.push(this.Eg);
  return a;
};
h.Wg = function (a, c) {
  this.gb = a;
  this.G = c;
  this.Ie = new h.Ld(this.gb);
  this.qh = null;
  this.Ze = !1;
  this.Ve = this.gb.Sa();
  this.Km = h.Wg.LB(a);
};
h.Wg.prototype.H = function () {
  this.Km.length = 0;
  this.Ie && this.Ie.H();
};
h.Wg.LB = function (a) {
  var c = [];
  a = p(a, !1);
  for (var d = 0, e; (e = a[d]); d++) {
    e = J(e);
    for (var f = 0; f < e.length; f++) {
      var g = { location: e[f].lH(), icon: e[f] };
      c.push(g);
    }
  }
  return c;
};
function Pa(a, c, d) {
  d = a.pj(d);
  var e = h.g.P.sum(a.Ve, d);
  a.gb.Rq(e);
  for (e = 0; e < a.Km.length; e++) {
    var f = a.Km[e];
    f.icon.YH(h.g.P.sum(f.location, d));
  }
  a.qh = Qa(a.G, c);
  a.Ie.update(d, a.qh);
  a.Ze = a.Ie.Ze;
  c = a.G.dc;
  a.Ze
    ? (a.gb.ml(!0), a.qh == h.lo && c && c.Gr(!0))
    : (a.gb.ml(!1), c && c.Gr(!1));
}
function Ra(a, c, d) {
  Pa(a, c, d);
  a.Km = [];
  c = new h.h.le(a.gb, !1, p(a.gb, !1));
  h.h.Ja(c);
  h.g.j.yl();
  h.Wa.Jp();
  d = a.pj(d);
  c = h.g.P.sum(a.Ve, d);
  var e = a.gb;
  e.Kl && (e.translate(c.x, c.y), e.B.Xc.vm(e.B.Lb));
  c = a.G.dc;
  a.Ze
    ? (c && setTimeout(c.pp.bind(c), 100), a.wk(), a.gb.H(!1, !0), (h.Ui = []))
    : c && c.pp();
  a.Ze ||
    (Sa(a.gb, d.x, d.y),
    a.gb.Og(!1),
    a.wk(),
    a.Ie.xb
      ? ((d = a.Ie),
        d.xb &&
          (h.h.disable(),
          Ma(d),
          h.h.enable(),
          d.lc.connect(d.xb),
          d.Xf.na && (h.Wa.uA((G(d.lc) ? d.xb : d.lc).S()), Ta(d.Xf.Ac()))))
      : a.gb.Ea(),
    Ua(a.gb));
  a.G.Tc(!0);
  (d = a.G.ta) &&
    "function" == typeof d.yr &&
    d.yr(a.gb.Nc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  h.h.ra(!1);
}
h.Wg.prototype.wk = function () {
  var a = new h.h.Aj(this.gb);
  a.Vq = this.Ve;
  a.Uh();
  h.h.Ja(a);
};
h.Wg.prototype.pj = function (a) {
  a = new h.g.P(a.x / this.G.scale, a.y / this.G.scale);
  this.G.$m && a.scale(1 / this.G.options.Pc.scale);
  return a;
};
h.Wg.prototype.Xi = function () {
  return this.Ie && this.Ie.Xi ? this.Ie.Xi() : [];
};
h.us = function () {};
function F(a, c, d, e, f) {
  return a.sm(c, d, e, f) == h.ca.Sl;
}
h.us.prototype.sm = function (a, c, d, e) {
  if (a && c) {
    if (G(a)) {
      var f = a.S();
      var g = c.S();
    } else (g = a.S()), (f = c.S());
    f =
      f == g
        ? h.ca.st
        : c.type != h.wi[a.type]
        ? h.ca.vt
        : f.B !== g.B
        ? h.ca.qt
        : f.Ca && !g.Ca
        ? h.ca.tt
        : h.ca.Sl;
  } else f = h.ca.ut;
  if (f != h.ca.Sl) a = f;
  else {
    a: if (((f = a.pg), (g = c.pg), f && g)) {
      for (var k = 0; k < f.length; k++)
        if (-1 != g.indexOf(f[k])) {
          f = !0;
          break a;
        }
      f = !1;
    } else f = !0;
    a = f ? (d && !Va(a, c, e || 0) ? h.ca.rt : h.ca.Sl) : h.ca.ot;
  }
  return a;
};
function Wa(a, c, d) {
  switch (a) {
    case h.ca.st:
      return "Attempted to connect a block to itself.";
    case h.ca.qt:
      return "Blocks not on same workspace.";
    case h.ca.vt:
      return "Attempt to connect incompatible types.";
    case h.ca.ut:
      return "Target connection is null.";
    case h.ca.ot:
      return (
        "Connection checks failed. " +
        (c + " expected " + c.pg + ", found " + d.pg)
      );
    case h.ca.tt:
      return "Connecting non-shadow to shadow block.";
    case h.ca.rt:
      return "Drag checks failed.";
    default:
      return "Unknown connection failure: this should never happen!";
  }
}
function Va(a, c, d) {
  if (Xa(a, c) > d || c.S().Pe()) return !1;
  switch (c.type) {
    case h.Nd:
      return (
        a.pa || -1 != h.Ui.indexOf(c)
          ? (a = !1)
          : c.pa
          ? ((a = c.va()), (a = a.Pe() ? !(a.T && a.T.va()) : !1))
          : (a = !0),
        a
      );
    case h.Md:
      if ((c.isConnected() && !c.va().Pe()) || a.isConnected()) return !1;
      break;
    case h.eb:
      if (c.isConnected() && !c.va().kc() && !c.va().Ca) return !1;
      break;
    case h.Ra:
      if (c.isConnected() && !a.S().X && !c.va().Ca && c.va().X) return !1;
      break;
    default:
      return !1;
  }
  return -1 != h.Ui.indexOf(c) ? !1 : !0;
}
h.A.register(h.A.Y.ss, h.A.ws, h.us);
h.Tt = function (a) {
  this.cb = Object.create(null);
  this.B = a;
};
b = h.Tt.prototype;
b.clear = function () {
  this.cb = Object.create(null);
};
b.Iw = function (a, c) {
  var d = this.tg(c, a.type),
    e = K(this.B, !1);
  h.h.ra(!0);
  try {
    if (d && d.yc() != a.yc()) {
      var f = a.type;
      c != d.name && Ya(d, c, e);
      for (c = 0; c < e.length; c++) {
        d = void 0;
        for (var g = 0; (d = e[c].O[g]); g++) for (var k = 0; d.Za[k]; k++);
      }
      h.h.Ja(new h.h.Sd(a));
      this.cb[f].splice(this.Rm(f).indexOf(a), 1);
    } else Ya(a, c, e);
  } finally {
    h.h.ra(!1);
  }
};
b.Vh = function (a, c) {
  var d = this.xh(a);
  if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.Iw(d, c);
};
function Ya(a, c, d) {
  h.h.Ja(new h.h.ye(a, c));
  a.name = c;
  for (a = 0; a < d.length; a++)
    for (var e = d[a], f = 0; (c = e.O[f]); f++) for (var g = 0; c.Za[g]; g++);
}
b.Xd = function (a, c, d) {
  var e = this.tg(a, c);
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
  if (d && this.xh(d))
    throw Error('Variable id, "' + d + '", is already in use.');
  e = d || h.g.Df();
  c = c || "";
  e = new h.lm(this.B, a, c, e);
  a = this.cb[c] || [];
  a.push(e);
  delete this.cb[c];
  this.cb[c] = a;
  return e;
};
b.Si = function (a) {
  var c = this.xh(a);
  if (c) {
    var d = c.name,
      e = this.mq(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = Fa(f, "NAME");
        d = h.K.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace(
          "%2",
          a
        );
        h.alert(d);
        return;
      }
    var g = this;
    1 < e.length
      ? ((d = h.K.DELETE_VARIABLE_CONFIRMATION.replace(
          "%1",
          String(e.length)
        ).replace("%2", d)),
        h.confirm(d, function (k) {
          k && c && Za(g, c, e);
        }))
      : Za(g, c, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
function Za(a, c, d) {
  var e = h.h.Pb();
  e || h.h.ra(!0);
  try {
    for (var f = 0; f < d.length; f++) d[f].H(!0);
    var g = a.cb[c.type];
    a = 0;
    for (var k; (k = g[a]); a++)
      if (k.yc() == c.yc()) {
        g.splice(a, 1);
        h.h.Ja(new h.h.Sd(c));
        break;
      }
  } finally {
    e || h.h.ra(!1);
  }
}
b.tg = function (a, c) {
  if ((c = this.cb[c || ""]))
    for (var d = 0, e; (e = c[d]); d++) if (h.eh.Cf(e.name, a)) return e;
  return null;
};
b.xh = function (a) {
  for (var c = Object.keys(this.cb), d = 0; d < c.length; d++)
    for (var e = c[d], f = 0, g; (g = this.cb[e][f]); f++)
      if (g.yc() == a) return g;
  return null;
};
b.Rm = function (a) {
  return (a = this.cb[a || ""]) ? a.slice() : [];
};
b.Vi = function () {
  var a = [],
    c;
  for (c in this.cb) a = a.concat(this.cb[c]);
  return a;
};
b.Yp = function () {
  var a = [],
    c;
  for (c in this.cb)
    for (var d = this.cb[c], e = 0, f; (f = d[e]); e++) a.push(f.name);
  return a;
};
b.mq = function (a) {
  for (var c = [], d = K(this.B, !1), e = 0; e < d.length; e++) {
    var f = na(d[e]);
    if (f) for (var g = 0; g < f.length; g++) f[g].yc() == a && c.push(d[e]);
  }
  return c;
};
h.mb = function (a) {
  this.id = h.g.Df();
  h.mb.Yj[this.id] = this;
  this.options = a || new h.ld({});
  this.J = !!this.options.J;
  this.Gk = !!this.options.Gk;
  this.Yb = this.options.Yb;
  this.fk = new (h.A.ev(h.A.Y.ss, this.options))(this);
  this.El = [];
  this.Nn = [];
  this.zm = Object.create(null);
  this.Qk = [];
  this.ci = [];
  this.il = [];
  this.ep = Object.create(null);
  this.Zf = Object.create(null);
  this.cb = new h.Tt(this);
  this.yn = null;
};
b = h.mb.prototype;
b.na = !1;
b.zq = !1;
b.bt = 1024;
b.Bm = null;
b.H = function () {
  this.Qk.length = 0;
  this.clear();
  delete h.mb.Yj[this.id];
};
h.mb.zt = 3;
b = h.mb.prototype;
b.Ue = function (a, c) {
  a = a.Sa();
  c = c.Sa();
  return (
    a.y +
    h.mb.prototype.Ue.offset * a.x -
    (c.y + h.mb.prototype.Ue.offset * c.x)
  );
};
b.nm = function (a) {
  this.El.push(a);
};
b.An = function (a) {
  if (!h.g.ak(this.El, a))
    throw Error("Block not present in workspace's list of top-most blocks.");
};
b.Qb = function (a) {
  var c = [].concat(this.El);
  a &&
    1 < c.length &&
    ((this.Ue.offset = Math.sin(h.g.mc.ai(h.mb.zt))),
    this.J && (this.Ue.offset *= -1),
    c.sort(this.Ue));
  return c;
};
function $a(a, c) {
  return a.Zf[c] ? a.Zf[c].slice(0) : [];
}
function K(a, c) {
  if (c) {
    a = a.Qb(!0);
    c = [];
    for (var d = 0; d < a.length; d++) c.push.apply(c, p(a[d], !0));
  } else
    for (c = a.Qb(!1), d = 0; d < c.length; d++) c.push.apply(c, C(c[d], !1));
  return c.filter(function (e) {
    return !e.Pe();
  });
}
b.clear = function () {
  this.zq = !0;
  try {
    var a = h.h.Pb();
    for (a || h.h.ra(!0); this.El.length; ) this.El[0].H(!1);
    for (; this.Nn.length; ) this.Nn[this.Nn.length - 1].H(!1);
    a || h.h.ra(!1);
    this.cb.clear();
    this.yn && this.yn.clear();
  } finally {
    this.zq = !1;
  }
};
b.Vh = function (a, c) {
  this.cb.Vh(a, c);
};
b.Xd = function (a, c, d) {
  return this.cb.Xd(a, c, d);
};
b.mq = function (a) {
  return this.cb.mq(a);
};
b.Si = function (a) {
  this.cb.Si(a);
};
b.tg = function (a, c) {
  return this.cb.tg(a, c);
};
b.xh = function (a) {
  return this.cb.xh(a);
};
b.Rm = function (a) {
  return this.cb.Rm(a);
};
b.Vi = function () {
  return this.cb.Vi();
};
b.Yp = function () {
  return this.cb.Yp();
};
b.Sm = function () {
  return 0;
};
b.nj = function (a, c) {
  return new h.Dc(this, a, c);
};
function ab(a, c) {
  if (!bb(a)) return !0;
  var d = 0,
    e;
  for (e in c) {
    if (
      c[e] >
      (a.options.jn
        ? (void 0 !== a.options.jn[e] ? a.options.jn[e] : Infinity) -
          $a(a, e).length
        : Infinity)
    )
      return !1;
    d += c[e];
  }
  return d > (isNaN(a.options.Uk) ? Infinity : a.options.Uk - K(a, !1).length)
    ? !1
    : !0;
}
function bb(a) {
  return Infinity != a.options.Uk || !!a.options.jn;
}
function cb(a, c) {
  var d = c ? a.il : a.ci;
  a = c ? a.ci : a.il;
  var e = d.pop();
  if (e) {
    for (var f = [e]; d.length && e.group && e.group == d[d.length - 1].group; )
      f.push(d.pop());
    for (d = 0; (e = f[d]); d++) a.push(e);
    f = h.h.filter(f, c);
    h.h.Ga = !1;
    try {
      for (d = 0; (e = f[d]); d++) e.run(c);
    } finally {
      h.h.Ga = !0;
    }
  }
}
function db() {
  var a = B;
  a.ci.length = 0;
  a.il.length = 0;
  h.h.mA();
}
function eb(a, c) {
  a.Qk.push(c);
}
b.Lc = function (a) {
  return this.ep[a] || null;
};
h.mb.Yj = Object.create(null);
h.mb.zk = function (a) {
  return h.mb.Yj[a] || null;
};
h.mb.getAll = function () {
  var a = [],
    c;
  for (c in h.mb.Yj) a.push(h.mb.Yj[c]);
  return a;
};
h.ua = function (a, c, d, e, f, g) {
  this.G = a;
  this.yf = c;
  this.BD = d;
  this.cr = this.$q = this.fw = this.Nw = null;
  this.Af = !1;
  d = h.ua.yx;
  this.G.J && (d = -d);
  this.$z = h.g.mc.ai(d);
  a.Vf.appendChild(this.jk(c, !(!f || !g)));
  this.Ib = e;
  this.Jw && fb(this);
  (f && g) ||
    ((a = this.yf.getBBox()),
    (f = a.width + 2 * h.ua.je),
    (g = a.height + 2 * h.ua.je));
  gb(this, f, g);
  fb(this);
  hb(this);
  this.Jw = !0;
};
h.ua.je = 6;
h.ua.zx = 5;
h.ua.yx = 20;
h.ua.ds = 4;
h.ua.wx = 8;
h.ua.Kg = null;
h.ua.Jg = null;
h.ua.Ur = function () {
  h.ua.Kg && (h.tb(h.ua.Kg), (h.ua.Kg = null));
  h.ua.Jg && (h.tb(h.ua.Jg), (h.ua.Jg = null));
};
h.ua.dA = function () {
  h.Touch.wm();
  h.ua.Ur();
};
b = h.ua.prototype;
b.Jw = !1;
b.Ib = null;
b.Se = 0;
b.Mg = 0;
b.Zb = 0;
b.ae = 0;
b.bp = !0;
b.jk = function (a, c) {
  this.rd = h.g.j.R(h.g.F.Wc, {}, null);
  var d = { filter: "url(#" + this.G.lb.$().Lm + ")" };
  h.g.userAgent.Qy && (d = {});
  d = h.g.j.R(h.g.F.Wc, d, this.rd);
  this.lu = h.g.j.R(h.g.F.hf, {}, d);
  this.rm = h.g.j.R(
    h.g.F.kf,
    { class: "blocklyDraggable", x: 0, y: 0, rx: h.ua.je, ry: h.ua.je },
    d
  );
  c
    ? ((this.Pf = h.g.j.R(
        h.g.F.Wc,
        { class: this.G.J ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.rd
      )),
      (c = 2 * h.ua.je),
      h.g.j.R(
        h.g.F.qz,
        { points: "0,x x,x x,0".replace(/x/g, c.toString()) },
        this.Pf
      ),
      h.g.j.R(
        h.g.F.Lj,
        {
          class: "blocklyResizeLine",
          x1: c / 3,
          y1: c - 1,
          x2: c - 1,
          y2: c / 3,
        },
        this.Pf
      ),
      h.g.j.R(
        h.g.F.Lj,
        {
          class: "blocklyResizeLine",
          x1: (2 * c) / 3,
          y1: c - 1,
          x2: c - 1,
          y2: (2 * c) / 3,
        },
        this.Pf
      ))
    : (this.Pf = null);
  this.G.options.readOnly ||
    ((this.$q = h.Oa(this.rm, "mousedown", this, this.cA)),
    this.Pf && (this.cr = h.Oa(this.Pf, "mousedown", this, this.qD)));
  this.rd.appendChild(a);
  return this.rd;
};
b.Ba = function () {
  return this.rd;
};
b.cA = function (a) {
  var c = ib(this.G, a);
  if (c) {
    if (c.cj)
      throw Error(
        "Tried to call gesture.handleBubbleStart, but the gesture had already been started."
      );
    c.fd || (c.fd = this);
    c.Bd = a;
  }
};
b.rl = function () {};
b.Nc = function () {
  return !1;
};
b.ml = function () {};
b.qD = function (a) {
  var c = this.rd.parentNode;
  c.lastChild !== this.rd && c.appendChild(this.rd);
  h.ua.Ur();
  h.g.Nk(a) ||
    (this.G.Or(a, new h.g.P(this.G.J ? -this.Zb : this.Zb, this.ae)),
    (h.ua.Kg = h.Oa(document, "mouseup", this, h.ua.dA)),
    (h.ua.Jg = h.Oa(document, "mousemove", this, this.rD)),
    h.cc());
  a.stopPropagation();
};
b.rD = function (a) {
  this.bp = !1;
  var c = this.G;
  a = h.g.Xk(a, x(c), Aa(c));
  a.x /= c.scale;
  a.y /= c.scale;
  c = h.g.P.sum(c.Uu, a);
  gb(this, this.G.J ? -c.x : c.x, c.y);
  this.G.J && fb(this);
};
function jb(a, c, d) {
  var e = a.G.J ? a.Ib.x - c.x - a.Zb : c.x + a.Ib.x;
  c = c.y + a.Ib.y;
  return Math.max(
    0,
    Math.min(
      1,
      ((Math.min(e + a.Zb, d.ub + d.Sb) - Math.max(e, d.ub)) *
        (Math.min(c + a.ae, d.Eb + d.ec) - Math.max(c, d.Eb))) /
        (a.Zb * a.ae)
    )
  );
}
function fb(a) {
  var c = a.Ib.x;
  c = a.G.J ? c - (a.Se + a.Zb) : c + a.Se;
  a.moveTo(c, a.Mg + a.Ib.y);
}
b.moveTo = function (a, c) {
  this.rd.setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.Og = function (a) {
  !a && this.fw && this.fw();
};
function gb(a, c, d) {
  var e = 2 * h.ua.je;
  c = Math.max(c, e + 45);
  d = Math.max(d, e + 20);
  a.Zb = c;
  a.ae = d;
  a.rm.setAttribute("width", c);
  a.rm.setAttribute("height", d);
  a.Pf &&
    (a.G.J
      ? a.Pf.setAttribute(
          "transform",
          "translate(" + 2 * h.ua.je + "," + (d - e) + ") scale(-1 1)"
        )
      : a.Pf.setAttribute(
          "transform",
          "translate(" + (c - e) + "," + (d - e) + ")"
        ));
  if (a.bp) {
    c = a.G.Je();
    c.ub /= a.G.scale;
    c.Sb /= a.G.scale;
    c.Eb /= a.G.scale;
    c.ec /= a.G.scale;
    d = -a.Zb / 4;
    if (!(a.Zb > c.Sb)) {
      if (a.G.J) {
        e = a.Ib.x - d;
        var f = e - a.Zb;
        var g = c.ub + c.Sb,
          k = c.ub + h.Na.Sc / a.G.scale;
      } else
        (f = d + a.Ib.x),
          (e = f + a.Zb),
          (k = c.ub),
          (g = c.ub + c.Sb - h.Na.Sc / a.G.scale);
      a.G.J
        ? f < k
          ? (d = -(k - a.Ib.x + a.Zb))
          : e > g && (d = -(g - a.Ib.x))
        : f < k
        ? (d = k - a.Ib.x)
        : e > g && (d = g - a.Ib.x - a.Zb);
    }
    f = d;
    d = -a.ae / 4;
    if (!(a.ae > c.ec)) {
      e = a.Ib.y + d;
      g = e + a.ae;
      k = c.Eb;
      var l = c.Eb + c.ec - h.Na.Sc / a.G.scale,
        m = a.Ib.y;
      e < k ? (d = k - m) : g > l && (d = l - m - a.ae);
    }
    k = d;
    g = a.BD.getBBox();
    d = { x: f, y: -a.ae - a.G.lb.$().Nj };
    e = { x: -a.Zb - 30, y: k };
    k = { x: g.width, y: k };
    l = { x: f, y: g.height };
    f = g.width < g.height ? k : l;
    g = g.width < g.height ? l : k;
    k = jb(a, d, c);
    l = jb(a, e, c);
    m = jb(a, f, c);
    c = Math.max(k, l, m, jb(a, g, c));
    k == c
      ? ((a.Se = d.x), (a.Mg = d.y))
      : l == c
      ? ((a.Se = e.x), (a.Mg = e.y))
      : m == c
      ? ((a.Se = f.x), (a.Mg = f.y))
      : ((a.Se = g.x), (a.Mg = g.y));
  }
  fb(a);
  hb(a);
  a.Nw && a.Nw();
}
function hb(a) {
  var c = [],
    d = a.Zb / 2,
    e = a.ae / 2,
    f = -a.Se,
    g = -a.Mg;
  if (d == f && e == g) c.push("M " + d + "," + e);
  else {
    g -= e;
    f -= d;
    a.G.J && (f *= -1);
    var k = Math.sqrt(g * g + f * f),
      l = Math.acos(f / k);
    0 > g && (l = 2 * Math.PI - l);
    var m = l + Math.PI / 2;
    m > 2 * Math.PI && (m -= 2 * Math.PI);
    var n = Math.sin(m),
      r = Math.cos(m),
      q = new h.g.Qd(a.Zb, a.ae);
    m = (q.width + q.height) / h.ua.zx;
    m = Math.min(m, q.width, q.height) / 4;
    q = 1 - h.ua.wx / k;
    f = d + q * f;
    g = e + q * g;
    q = d + m * r;
    var u = e + m * n;
    d -= m * r;
    e -= m * n;
    n = l + a.$z;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / h.ua.ds;
    k = (Math.cos(n) * k) / h.ua.ds;
    c.push("M" + q + "," + u);
    c.push(
      "C" + (q + k) + "," + (u + l) + " " + f + "," + g + " " + f + "," + g
    );
    c.push(
      "C" + f + "," + g + " " + (d + k) + "," + (e + l) + " " + d + "," + e
    );
  }
  c.push("z");
  a.lu.setAttribute("d", c.join(" "));
}
b.Te = function (a) {
  this.rm.setAttribute("fill", a);
  this.lu.setAttribute("fill", a);
};
b.H = function () {
  this.$q && h.tb(this.$q);
  this.cr && h.tb(this.cr);
  h.ua.Ur();
  h.g.j.removeNode(this.rd);
  this.Af = !0;
};
b.Rq = function (a, c) {
  a ? a.bi(c.x, c.y) : this.moveTo(c.x, c.y);
  this.Se = this.G.J ? this.Ib.x - c.x - this.Zb : c.x - this.Ib.x;
  this.Mg = c.y - this.Ib.y;
  hb(this);
};
b.Sa = function () {
  return new h.g.P(
    this.G.J ? -this.Se + this.Ib.x - this.Zb : this.Ib.x + this.Se,
    this.Ib.y + this.Mg
  );
};
h.ua.Xe = function (a) {
  var c = h.g.j.R(
    h.g.F.Ht,
    {
      class: "blocklyText blocklyBubbleText blocklyNoPointerEvents",
      y: h.ua.je,
    },
    null
  );
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) {
    var e = h.g.j.R(h.g.F.Kt, { dy: "1em", x: h.ua.je }, c),
      f = document.createTextNode(a[d]);
    e.appendChild(f);
  }
  return c;
};
h.ua.ZG = function (a, c, d) {
  d = new h.ua(c.B, a, c.qb.Cb, d, null, null);
  d.rd.dataset && (d.rd.dataset.blockId = c.id);
  if (c.J) {
    c = a.getBBox().width;
    for (var e = 0, f; (f = a.childNodes[e]); e++)
      f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + h.ua.je);
  }
  return d;
};
h.h.$e = function (a) {
  this.Be = (this.cd = "undefined" == typeof a) ? "" : a.id;
  this.Tb = this.cd ? "" : a.B.id;
  this.group = h.h.Pb();
  this.Ga = h.h.Ga;
};
h.g.object.U(h.h.$e, h.h.Abstract);
h.h.$e.prototype.qa = function () {
  var a = h.h.$e.u.qa.call(this);
  this.Be && (a.commentId = this.Be);
  return a;
};
h.h.$e.prototype.aa = function (a) {
  h.h.$e.u.aa.call(this, a);
  this.Be = a.commentId;
};
h.h.mi = function (a, c, d) {
  h.h.mi.u.constructor.call(this, a);
  a &&
    ((this.jw = "undefined" == typeof c ? "" : c),
    (this.pn = "undefined" == typeof d ? "" : d));
};
h.g.object.U(h.h.mi, h.h.$e);
b = h.h.mi.prototype;
b.type = h.h.ps;
b.qa = function () {
  var a = h.h.mi.u.qa.call(this);
  a.newContents = this.pn;
  return a;
};
b.aa = function (a) {
  h.h.mi.u.aa.call(this, a);
  this.pn = a.newValue;
};
b.ij = function () {
  return this.jw == this.pn;
};
b.run = function (a) {
  var c;
  (c = v(this).zm[this.Be] || null)
    ? c.WH(a ? this.pn : this.jw)
    : console.warn("Can't change non-existent comment: " + this.Be);
};
h.h.af = function (a) {
  h.h.af.u.constructor.call(this, a);
  a && (this.xml = a.$w());
};
h.g.object.U(h.h.af, h.h.$e);
h.h.af.prototype.type = h.h.Tl;
h.h.af.prototype.qa = function () {
  var a = h.h.af.u.qa.call(this);
  a.xml = h.N.Ge(this.xml);
  return a;
};
h.h.af.prototype.aa = function (a) {
  h.h.af.u.aa.call(this, a);
  this.xml = h.N.Xe(a.xml);
};
h.h.af.prototype.run = function (a) {
  h.h.ts(this, a);
};
h.h.ts = function (a, c) {
  var d = v(a);
  c
    ? ((c = h.g.xml.createElement("xml")), c.appendChild(a.xml), h.N.rg(c, d))
    : (d = d.zm[a.Be] || null)
    ? d.H(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + a.Be);
};
h.h.bf = function (a) {
  h.h.bf.u.constructor.call(this, a);
  a && (this.xml = a.$w());
};
h.g.object.U(h.h.bf, h.h.$e);
h.h.bf.prototype.type = h.h.qs;
h.h.bf.prototype.qa = function () {
  return h.h.bf.u.qa.call(this);
};
h.h.bf.prototype.aa = function (a) {
  h.h.bf.u.aa.call(this, a);
};
h.h.bf.prototype.run = function (a) {
  h.h.ts(this, !a);
};
h.h.Yg = function (a) {
  h.h.Yg.u.constructor.call(this, a);
  a && ((this.rp = a), (this.Wq = a.yv()), (this.Oh = null));
};
h.g.object.U(h.h.Yg, h.h.$e);
b = h.h.Yg.prototype;
b.Uh = function () {
  if (!this.rp)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.Oh = this.rp.yv();
  this.rp = null;
};
b.type = h.h.Ul;
b.qa = function () {
  var a = h.h.Yg.u.qa.call(this);
  this.Oh &&
    (a.newCoordinate = Math.round(this.Oh.x) + "," + Math.round(this.Oh.y));
  return a;
};
b.aa = function (a) {
  h.h.Yg.u.aa.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.Oh = new h.g.P(Number(a[0]), Number(a[1]))));
};
b.ij = function () {
  return h.g.P.Cf(this.Wq, this.Oh);
};
b.run = function (a) {
  var c;
  if ((c = v(this).zm[this.Be] || null)) {
    a = a ? this.Oh : this.Wq;
    var d = c.yv();
    c.moveBy(a.x - d.x, a.y - d.y);
  } else console.warn("Can't move non-existent comment: " + this.Be);
};
h.A.register(h.A.Y.Fb, h.h.Tl, h.h.af);
h.A.register(h.A.Y.Fb, h.h.ps, h.h.mi);
h.A.register(h.A.Y.Fb, h.h.Ul, h.h.Yg);
h.A.register(h.A.Y.Fb, h.h.qs, h.h.bf);
h.Rl = function (a, c) {
  this.Ob = a;
  this.G = c;
  this.qh = null;
  this.Qn = !1;
  this.Ve = this.Ob.Sa();
  this.rh = h.g.Eh() && c.Xc ? c.Xc : null;
};
h.Rl.prototype.H = function () {
  this.rh = this.G = this.Ob = null;
};
function kb(a, c, d) {
  d = a.pj(d);
  d = h.g.P.sum(a.Ve, d);
  a.Ob.Rq(a.rh, d);
  a.Ob.Nc() &&
    ((a.qh = Qa(a.G, c)),
    (a.Qn = a.qh != h.ys),
    (c = a.G.dc),
    a.Qn
      ? (a.Ob.ml(!0), a.qh == h.lo && c && c.Gr(!0))
      : (a.Ob.ml(!1), c && c.Gr(!1)));
}
function lb(a, c, d) {
  kb(a, c, d);
  c = a.pj(d);
  c = h.g.P.sum(a.Ve, c);
  a.Ob.moveTo(c.x, c.y);
  c = a.G.dc;
  a.Qn
    ? (c && setTimeout(c.pp.bind(c), 100), a.wk(), a.Ob.H(!1, !0))
    : c && c.pp();
  a.Qn || (a.rh && a.rh.vm(a.G.Vf), a.Ob.Og && a.Ob.Og(!1), a.wk());
  a.G.Tc(!0);
  (c = a.G.ta) &&
    "function" == typeof c.yr &&
    c.yr(a.Ob.Nc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  h.h.ra(!1);
}
h.Rl.prototype.wk = function () {
  if (this.Ob.vH) {
    var a = new h.h.Yg(this.Ob);
    a.Wq = this.Ve;
    a.Uh();
    h.h.Ja(a);
  }
};
h.Rl.prototype.pj = function (a) {
  a = new h.g.P(a.x / this.G.scale, a.y / this.G.scale);
  this.G.$m && a.scale(1 / this.G.options.Pc.scale);
  return a;
};
h.h.ne = function (a, c, d) {
  h.h.ne.u.constructor.call(this, a ? a.B.id : c);
  this.fb = a ? a.id : null;
  this.Yw = d;
};
h.g.object.U(h.h.ne, h.h.xe);
h.h.ne.prototype.type = h.h.bo;
h.h.ne.prototype.qa = function () {
  var a = h.h.ne.u.qa.call(this);
  a.targetType = this.Yw;
  this.fb && (a.blockId = this.fb);
  return a;
};
h.h.ne.prototype.aa = function (a) {
  h.h.ne.u.aa.call(this, a);
  this.Yw = a.targetType;
  this.fb = a.blockId;
};
h.A.register(h.A.Y.Fb, h.h.bo, h.h.ne);
h.Zj = function (a) {
  this.G = a;
  this.Ww = new h.g.P(a.scrollX, a.scrollY);
};
h.Zj.prototype.H = function () {
  this.G = null;
};
h.Zj.prototype.Or = function () {
  h.selected && mb(h.selected);
  Ba(this.G);
};
h.Zj.prototype.Bf = function (a) {
  a = h.g.P.sum(this.Ww, a);
  this.G.scroll(a.x, a.y);
};
h.bm = function (a) {
  h.bm.u.constructor.call(this, a.Bk());
  this.Pw = a.zb;
  this.FB = a.Gk;
};
h.g.object.U(h.bm, h.Zj);
h.bm.prototype.Bf = function (a) {
  a = h.g.P.sum(this.Ww, a);
  this.FB ? this.Pw.set(-a.x) : this.Pw.set(-a.y);
};
h.navigation = {};
h.navigation.lj = null;
h.navigation.zi = 1;
h.navigation.Pd = 2;
h.navigation.Ai = 3;
h.navigation.Zt = 40;
h.navigation.$c = h.navigation.Pd;
h.navigation.Gb = {
  md: "previous",
  kd: "next",
  Qs: "in",
  ht: "out",
  Ts: "insert",
  Xy: "mark",
  Yx: "disconnect",
  Po: "toolbox",
  ny: "exit",
  Fz: "toggle_keyboard_nav",
  fz: "move workspace cursor up",
  cz: "move workspace cursor down",
  dz: "move workspace cursor left",
  ez: "move workspace cursor right",
};
h.navigation.Mj = "local_marker_1";
h.navigation.zc = function () {
  return h.navigation.Ke().zc(h.navigation.Mj);
};
h.navigation.Ke = function () {
  return h.sg();
};
h.navigation.av = function (a) {
  if ((a = a.ta))
    (h.navigation.$c = h.navigation.Ai),
      h.navigation.Mw(!1),
      h.navigation.zc().Xa || h.navigation.Mq(),
      a.nH() || a.UH(0);
};
h.navigation.$u = function (a) {
  h.navigation.$c = h.navigation.zi;
  var c = a.ta;
  a = c ? L(c) : L(a);
  h.navigation.zc().Xa || h.navigation.Mq();
  a &&
    a.Bk() &&
    ((a = a.Bk().Qb(!0)),
    0 < a.length && ((a = a[0]), (a = h.v.lk(a)), M(h.navigation.Wi(), a)));
};
h.navigation.Nm = function (a) {
  h.cc();
  var c = a.kb(),
    d = !!a.ta,
    e = a.Qb(!0);
  h.navigation.Mw(d);
  h.navigation.$c = h.navigation.Pd;
  0 < e.length
    ? M(c, h.v.vp(e[0]))
    : ((a = h.v.Pi(a, new h.g.P(100, 100))), M(c, a));
};
h.navigation.Wi = function () {
  var a = h.navigation.Ke(),
    c = null;
  a.na && (c = (a = (c = a.ta) ? L(c) : L(a)) ? a.Bk().kb() : null);
  return c;
};
h.navigation.OB = function (a) {
  var c = L(a);
  if (c && c.isVisible()) {
    var d = h.navigation.Wi().Xa.ma;
    d.isEnabled()
      ? ((c = c.Hu(d)),
        c.Ea(),
        ka(c, !0),
        M(a.kb(), h.v.Ee(c)),
        h.navigation.bw() ||
          h.navigation.qc(
            "Something went wrong while inserting a block from the flyout."
          ),
        h.navigation.Nm(a),
        M(a.kb(), h.v.vp(c)),
        h.navigation.nD())
      : h.navigation.qc("Can't insert a disabled block.");
  } else
    h.navigation.qc(
      "Trying to insert from the flyout when the flyout does not  exist or is not visible"
    );
};
h.navigation.Mw = function (a) {
  h.navigation.Wi() && (h.navigation.Wi().$a(), a && L(h.navigation.Ke()).$a());
};
h.navigation.eC = function () {
  var a = h.navigation.zc().Xa,
    c = h.navigation.Ke().kb().Xa;
  if (!a) return h.navigation.qc("Cannot insert with no marked node."), !1;
  if (!c) return h.navigation.qc("Cannot insert with no cursor node."), !1;
  a = a.La();
  c = c.La();
  return a == h.v.types.Nb
    ? (h.navigation.qc("Should not have been able to mark a field."), !1)
    : a == h.v.types.vb
    ? (h.navigation.qc("Should not have been able to mark a block."), !1)
    : a == h.v.types.te
    ? (h.navigation.qc("Should not have been able to mark a stack."), !1)
    : c == h.v.types.Nb
    ? (h.navigation.qc("Cannot attach a field to anything else."), !1)
    : c == h.v.types.Vb
    ? (h.navigation.qc("Cannot attach a workspace to anything else."), !1)
    : !0;
};
h.navigation.hC = function (a, c) {
  if (!a) return !1;
  if (a.Ca)
    return h.navigation.qc("Cannot move a shadow block to the workspace."), !1;
  a.getParent() && A(a, !1);
  a.moveTo(c.Rn);
  return !0;
};
h.navigation.bw = function () {
  var a = h.navigation.zc().Xa,
    c = h.navigation.Ke().kb().Xa;
  if (!h.navigation.eC()) return !1;
  var d = a.La(),
    e = c.La(),
    f = c.ma,
    g = a.ma;
  if (a.ej && c.ej) return h.navigation.Wd(f, g);
  if (a.ej && (e == h.v.types.vb || e == h.v.types.te))
    return h.navigation.Mv(f, g);
  if (d == h.v.types.Vb) return (c = c ? c.S() : null), h.navigation.hC(c, a);
  h.navigation.qc("Unexpected state in Blockly.navigation.modify_.");
  return !1;
};
h.navigation.IA = function (a, c) {
  var d = a.S(),
    e = c.S();
  d.Ac() == e.Ac() &&
    (-1 < p(d, !1).indexOf(e)
      ? h.navigation.Pm(c).disconnect()
      : h.navigation.Pm(a).disconnect());
};
h.navigation.Qq = function (a, c) {
  if (!a || !c) return !1;
  var d = a.S();
  return F(H(a), a, c, !1)
    ? (h.navigation.IA(a, c), G(c) || Na(d.Ac(), a, c), c.connect(a), !0)
    : !1;
};
h.navigation.Pm = function (a) {
  var c = a.S();
  return G(a) ? (c.T ? c.T : c.M ? c.M : null) : a;
};
h.navigation.wv = function (a) {
  return G(a) ? a : a.pa ? a.pa : null;
};
h.navigation.Wd = function (a, c) {
  if (!a || !c) return !1;
  var d = h.navigation.Pm(a),
    e = h.navigation.wv(c),
    f = h.navigation.wv(a),
    g = h.navigation.Pm(c);
  if (
    (d && e && h.navigation.Qq(d, e)) ||
    (f && g && h.navigation.Qq(f, g)) ||
    h.navigation.Qq(a, c)
  )
    return !0;
  d = H(a).sm(a, c, !1);
  h.navigation.qc("Connection failed with error: " + Wa(d, a, c));
  return !1;
};
h.navigation.Mv = function (a, c) {
  switch (c.type) {
    case h.Nd:
      if (h.navigation.Wd(a.X, c)) return !0;
      break;
    case h.Ra:
      if (h.navigation.Wd(a.T, c)) return !0;
      break;
    case h.eb:
      if (h.navigation.Wd(a.M, c)) return !0;
      break;
    case h.Md:
      for (var d = 0; d < a.O.length; d++) {
        var e = a.O[d].connection;
        if (e && e.type === h.eb && h.navigation.Wd(e, c)) return !0;
      }
      if (a.M && h.navigation.Wd(a.M, c)) return !0;
  }
  h.navigation.qc("This block can not be inserted at the marked location.");
  return !1;
};
h.navigation.HA = function (a) {
  var c = a.kb().Xa;
  if (c.ej) {
    var d = c.ma;
    d.isConnected()
      ? ((c = G(d) ? d : d.pa),
        (d = G(d) ? d.pa : d),
        d.S().Ca
          ? h.navigation.Gq("Cannot disconnect a shadow block")
          : (c.disconnect(),
            nb(d, c),
            Ta(c.S().Ac()),
            (c = h.v.Fe(c)),
            M(a.kb(), c)))
      : h.navigation.Gq("Cannot disconnect unconnected connection");
  } else
    h.navigation.Gq(
      "Cannot disconnect blocks when the cursor is not on a connection"
    );
};
h.navigation.Mq = function () {
  M(h.navigation.zc(), h.navigation.Ke().kb().Xa);
};
h.navigation.nD = function () {
  var a = h.navigation.zc();
  M(a, null);
  a.$a();
};
h.navigation.tj = function (a) {
  h.navigation.$c = a;
};
h.navigation.iC = function (a) {
  var c = h.navigation.Ke();
  if (c && (c = c.kb())) {
    var d = c.Xa;
    d = d ? d.S() : null;
    d === a
      ? d.getParent()
        ? (a = d.T || d.M) && M(c, h.v.Fe(a.pa))
        : M(c, h.v.Pi(d.B, d.Sa()))
      : d && -1 < C(a, !1).indexOf(d) && M(c, h.v.Pi(d.B, d.Sa()));
  }
};
h.navigation.GH = function (a) {
  var c = h.navigation.Ke().kb();
  if (c) {
    var d = c.Xa;
    d = d ? d.S() : null;
    d === a && M(c, h.v.Ee(d));
  }
};
h.navigation.QA = function () {
  var a = h.navigation.Ke();
  a.bb || ((a.bb = !0), h.navigation.Nm(a));
};
h.navigation.GA = function () {
  var a = h.navigation.Ke();
  a.bb &&
    ((a.bb = !1),
    a.kb().$a(),
    h.navigation.zc().$a(),
    h.navigation.Wi() && h.navigation.Wi().$a());
};
h.navigation.Gq = function (a) {
  h.navigation.lj ? h.navigation.lj("log", a) : console.log(a);
};
h.navigation.qc = function (a) {
  h.navigation.lj ? h.navigation.lj("warn", a) : console.warn(a);
};
h.navigation.cH = function (a) {
  h.navigation.lj ? h.navigation.lj("error", a) : console.error(a);
};
h.navigation.on = function (a, c, d) {
  var e = a.kb(),
    f = a.kb().Xa;
  if (f.La() !== h.v.types.Vb) return !1;
  f = f.Rn;
  M(
    e,
    h.v.Pi(a, new h.g.P(c * h.navigation.Zt + f.x, d * h.navigation.Zt + f.y))
  );
  return !0;
};
h.navigation.vB = function (a) {
  a = a.kb().Xa;
  var c = a.La();
  c == h.v.types.Nb
    ? ((a = a.ma), E(a) && a.ul(void 0))
    : a.ej || c == h.v.types.Vb
    ? h.navigation.Mq()
    : c == h.v.types.vb
    ? h.navigation.qc("Cannot mark a block.")
    : c == h.v.types.te && h.navigation.qc("Cannot mark a stack.");
};
h.navigation.fD = function () {
  var a = {
    name: h.navigation.Gb.md,
    Da: function (c) {
      return c.bb;
    },
    sa: function (c, d, e) {
      d = c.ta;
      switch (h.navigation.$c) {
        case h.navigation.Pd:
          return c.kb().Xb(e);
        case h.navigation.zi:
          return (c = d ? L(d) : L(c)), !(!c || !c.Xb(e));
        case h.navigation.Ai:
          return d && "function" == typeof d.Xb ? d.Xb(e) : !1;
        default:
          return !1;
      }
    },
  };
  h.Ia.A.register(a);
  N(h.g.L.Vt, a.name);
};
h.navigation.dD = function () {
  var a = {
    name: h.navigation.Gb.ht,
    Da: function (c) {
      return c.bb;
    },
    sa: function (c, d, e) {
      switch (h.navigation.$c) {
        case h.navigation.Pd:
          return c.kb().Xb(e);
        case h.navigation.zi:
          return h.navigation.av(c), !0;
        case h.navigation.Ai:
          return (c = c.ta) && "function" == typeof c.Xb ? c.Xb(e) : !1;
        default:
          return !1;
      }
    },
  };
  h.Ia.A.register(a);
  N(h.g.L.$r, a.name);
};
h.navigation.cD = function () {
  var a = {
    name: h.navigation.Gb.kd,
    Da: function (c) {
      return c.bb;
    },
    sa: function (c, d, e) {
      d = c.ta;
      switch (h.navigation.$c) {
        case h.navigation.Pd:
          return c.kb().Xb(e);
        case h.navigation.zi:
          return (c = d ? L(d) : L(c)), !(!c || !c.Xb(e));
        case h.navigation.Ai:
          return d && "function" == typeof d.Xb ? d.Xb(e) : !1;
        default:
          return !1;
      }
    },
  };
  h.Ia.A.register(a);
  N(h.g.L.yt, a.name);
};
h.navigation.YC = function () {
  var a = {
    name: h.navigation.Gb.Qs,
    Da: function (c) {
      return c.bb;
    },
    sa: function (c, d, e) {
      switch (h.navigation.$c) {
        case h.navigation.Pd:
          return c.kb().Xb(e);
        case h.navigation.Ai:
          return (
            ((d = c.ta) && "function" == typeof d.Xb && d.Xb(e)) ||
              h.navigation.$u(c),
            !0
          );
        default:
          return !1;
      }
    },
  };
  h.Ia.A.register(a);
  N(h.g.L.vs, a.name);
};
h.navigation.$C = function () {
  var a = {
    name: h.navigation.Gb.Ts,
    Da: function (c) {
      return c.bb && !c.options.readOnly;
    },
    sa: function () {
      switch (h.navigation.$c) {
        case h.navigation.Pd:
          return h.navigation.bw();
        default:
          return !1;
      }
    },
  };
  h.Ia.A.register(a);
  N(h.g.L.Jy, a.name);
};
h.navigation.aD = function () {
  var a = {
    name: h.navigation.Gb.Xy,
    Da: function (c) {
      return c.bb && !c.options.readOnly;
    },
    sa: function (c) {
      switch (h.navigation.$c) {
        case h.navigation.Pd:
          return h.navigation.vB(c), !0;
        case h.navigation.zi:
          return h.navigation.OB(c), !0;
        default:
          return !1;
      }
    },
  };
  h.Ia.A.register(a);
  N(h.g.L.Cs, a.name);
};
h.navigation.SC = function () {
  var a = {
    name: h.navigation.Gb.Yx,
    Da: function (c) {
      return c.bb && !c.options.readOnly;
    },
    sa: function (c) {
      switch (h.navigation.$c) {
        case h.navigation.Pd:
          return h.navigation.HA(c), !0;
        default:
          return !1;
      }
    },
  };
  h.Ia.A.register(a);
  N(h.g.L.mm, a.name);
};
h.navigation.hD = function () {
  var a = {
    name: h.navigation.Gb.Po,
    Da: function (c) {
      return c.bb && !c.options.readOnly;
    },
    sa: function (c) {
      switch (h.navigation.$c) {
        case h.navigation.Pd:
          return c.ta ? h.navigation.av(c) : h.navigation.$u(c), !0;
        default:
          return !1;
      }
    },
  };
  h.Ia.A.register(a);
  N(h.g.L.Dz, a.name);
};
h.navigation.VC = function () {
  var a = {
    name: h.navigation.Gb.ny,
    Da: function (c) {
      return c.bb;
    },
    sa: function (c) {
      switch (h.navigation.$c) {
        case h.navigation.zi:
          return h.navigation.Nm(c), !0;
        case h.navigation.Ai:
          return h.navigation.Nm(c), !0;
        default:
          return !1;
      }
    },
  };
  h.Ia.A.register(a, !0);
  N(h.g.L.Ds, a.name, !0);
  N(h.g.L.E, a.name, !0);
};
h.navigation.gD = function () {
  var a = {
    name: h.navigation.Gb.Fz,
    sa: function (d) {
      d.bb ? h.navigation.GA() : h.navigation.QA();
      return !0;
    },
  };
  h.Ia.A.register(a);
  var c = O(h.g.L.Ry, [h.g.L.$f, h.g.L.mf]);
  N(c, a.name);
};
h.navigation.jD = function () {
  var a = {
    name: h.navigation.Gb.dz,
    Da: function (d) {
      return d.bb && !d.options.readOnly;
    },
    sa: function (d) {
      return h.navigation.on(d, -1, 0);
    },
  };
  h.Ia.A.register(a);
  var c = O(h.g.L.$r, [h.g.L.mf]);
  N(c, a.name);
};
h.navigation.kD = function () {
  var a = {
    name: h.navigation.Gb.ez,
    Da: function (d) {
      return d.bb && !d.options.readOnly;
    },
    sa: function (d) {
      return h.navigation.on(d, 1, 0);
    },
  };
  h.Ia.A.register(a);
  var c = O(h.g.L.vs, [h.g.L.mf]);
  N(c, a.name);
};
h.navigation.lD = function () {
  var a = {
    name: h.navigation.Gb.fz,
    Da: function (d) {
      return d.bb && !d.options.readOnly;
    },
    sa: function (d) {
      return h.navigation.on(d, 0, -1);
    },
  };
  h.Ia.A.register(a);
  var c = O(h.g.L.Vt, [h.g.L.mf]);
  N(c, a.name);
};
h.navigation.iD = function () {
  var a = {
    name: h.navigation.Gb.cz,
    Da: function (d) {
      return d.bb && !d.options.readOnly;
    },
    sa: function (d) {
      return h.navigation.on(d, 0, 1);
    },
  };
  h.Ia.A.register(a);
  var c = O(h.g.L.yt, [h.g.L.mf]);
  N(c, a.name);
};
h.navigation.bD = function () {
  h.navigation.YC();
  h.navigation.cD();
  h.navigation.dD();
  h.navigation.fD();
  h.navigation.iD();
  h.navigation.jD();
  h.navigation.kD();
  h.navigation.lD();
  h.navigation.SC();
  h.navigation.VC();
  h.navigation.$C();
  h.navigation.aD();
  h.navigation.gD();
  h.navigation.hD();
};
h.re = function (a, c) {
  this.cw = null;
  this.wc = new h.g.P(0, 0);
  this.Ab = this.Mb = this.uj = this.vj = this.fd = null;
  this.wp = c;
  this.Jk = this.Fh = this.Kk = this.yh = !1;
  this.Bd = a;
  this.la = this.ii = this.Ae = this.og = this.tn = this.sn = null;
  this.Ym = this.cj = this.pu = !1;
  this.Ev = !h.ay;
};
b = h.re.prototype;
b.H = function () {
  h.Touch.wm();
  h.D.VD();
  this.wp.jc = null;
  this.sn && h.tb(this.sn);
  this.tn && h.tb(this.tn);
  this.Ae && this.Ae.H();
  this.ii && this.ii.H();
  this.og && this.og.H();
};
function ob(a, c) {
  a.wc = h.g.P.Fm(new h.g.P(c.clientX, c.clientY), a.cw);
  if (a.yh) var d = !1;
  else (a.yh = h.g.P.aC(a.wc) > (a.la ? h.By : h.$x)), (d = a.yh);
  if (d) {
    if (a.pu)
      throw Error("updateIsDragging_ should only be called once per gesture.");
    a.pu = !0;
    if (a.fd) {
      a.Jk = !0;
      a.og = new h.Rl(a.fd, a.Ab);
      d = a.og;
      h.h.Pb() || h.h.ra(!0);
      d.G.Tc(!1);
      d.Ob.bp = !1;
      d.rh && (d.Ob.moveTo(0, 0), d.rh.bi(d.Ve.x, d.Ve.y), ba(d.rh, d.Ob.Ba()));
      d.Ob.Og && d.Ob.Og(!0);
      var e = d.G.ta;
      e &&
        "function" == typeof e.Wo &&
        e.Wo(d.Ob.Nc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      kb(a.og, a.Bd, a.wc);
      d = !0;
    } else d = !1;
    if (!d) {
      if (a.Mb)
        if (
          (a.la
            ? (a.Mb && a.la.tH(a.Mb)
                ? !a.la.VB() || a.la.xH(a.wc)
                  ? ((a.Ab = a.la.Ln),
                    pb(a.Ab),
                    h.h.Pb() || h.h.ra(!0),
                    (a.uj = null),
                    (a.Mb = a.la.Hu(a.Mb)),
                    a.Mb.select(),
                    (d = !0))
                  : (d = !1)
                : (d = !1),
              (a.Fh = d))
            : a.Mb.kc() && (a.Fh = !0),
          a.Fh)
        ) {
          a.Ae = new h.Wg(a.Mb, a.Ab);
          d = a.Ae;
          e = a.wc;
          var f = a.Ev;
          h.h.Pb() || h.h.ra(!0);
          var g = new h.h.le(d.gb, !0, p(d.gb, !1));
          h.h.Ja(g);
          d.G.$m && Ta(d.gb);
          h.g.j.xl();
          d.G.Tc(!1);
          h.Wa.Jp();
          if (d.gb.getParent() || (f && d.gb.X && d.gb.X.va()))
            A(d.gb, f),
              (e = d.pj(e)),
              (e = h.g.P.sum(d.Ve, e)),
              d.gb.translate(e.x, e.y),
              h.Wa.JA(d.gb),
              (e = d.Ie),
              (e.qm = Ka(e));
          d.gb.Og(!0);
          e = d.gb;
          e.Kl &&
            ((f = e.Sa()),
            e.Ba().removeAttribute("transform"),
            e.B.Xc.bi(f.x, f.y),
            (f = e.Ba()) && ba(e.B.Xc, f));
          (e = d.G.ta) &&
            "function" == typeof e.Wo &&
            e.Wo(d.gb.Nc() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
          Pa(a.Ae, a.Bd, a.wc);
          d = !0;
        } else d = !1;
      else d = !1;
      if ((d = !d))
        if (a.la) d = a.la.VB();
        else if ((d = a.Ab)) (d = a.Ab), (d = d.options.Rb && d.options.Rb.Bf);
      d &&
        ((a.ii = a.la ? new h.bm(a.la) : new h.Zj(a.Ab)),
        (a.Kk = !0),
        a.ii.Or());
    }
    h.Fg();
  }
  a.Bd = c;
}
b.Lp = function (a) {
  h.g.an(a)
    ? this.cancel()
    : ((this.cj = !0),
      h.Wa.Jp(),
      pb(this.Ab),
      this.Ab.$m && this.Ab.resize(),
      h.cc(!!this.la),
      da(this.Ab),
      (this.Bd = a),
      h.D.block(),
      this.Mb &&
        (!this.Mb.Oc && a.shiftKey && this.Mb.B.bb
          ? M(this.wp.kb(), h.v.vp(this.Mb))
          : this.Mb.select()),
      h.g.Nk(a)
        ? oa(this, a)
        : (("touchstart" != a.type.toLowerCase() &&
            "pointerdown" != a.type.toLowerCase()) ||
            "mouse" == a.pointerType ||
            h.$B(a, this),
          (this.cw = new h.g.P(a.clientX, a.clientY)),
          (this.Ev = a.altKey || a.ctrlKey || a.metaKey),
          this.bk(a)));
};
b.bk = function (a) {
  this.sn = h.Oa(document, "mousemove", null, this.aj.bind(this));
  this.tn = h.Oa(document, "mouseup", null, this.Tm.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
b.aj = function (a) {
  ob(this, a);
  this.Kk
    ? this.ii.Bf(this.wc)
    : this.Fh
    ? Pa(this.Ae, this.Bd, this.wc)
    : this.Jk && kb(this.og, this.Bd, this.wc);
  a.preventDefault();
  a.stopPropagation();
};
b.Tm = function (a) {
  ob(this, a);
  h.Fg();
  if (this.Ym) console.log("Trying to end a gesture recursively.");
  else {
    this.Ym = !0;
    if (this.Jk) lb(this.og, a, this.wc);
    else if (this.Fh) Ra(this.Ae, a, this.wc);
    else if (this.Kk) {
      var c = this.ii;
      c.Bf(this.wc);
      Ca(c.G);
    } else if (this.fd && !this.yh)
      this.fd.zD && this.fd.zD(), this.fd.select && this.fd.select();
    else if (qb(this)) {
      c = this.vj;
      var d = this.Bd;
      E(c) && c.ul(d);
      rb(this);
    } else
      !this.uj || this.yh || qb(this)
        ? this.uj ||
          this.fd ||
          this.vj ||
          this.yh ||
          ((c = this.wp),
          a.shiftKey && c.bb
            ? ((d = h.g.uD(c, new h.g.P(a.clientX, a.clientY))),
              (d = h.v.Pi(c, d)),
              M(c.kb(), d))
            : h.selected && mb(h.selected),
          (c = new h.h.ne(null, (this.Ab || c).id, "workspace")),
          h.h.Ja(c))
        : (this.la && this.la.ap
            ? this.Mb.isEnabled() &&
              (h.h.Pb() || h.h.ra(!0), Ua(this.la.Hu(this.Mb)))
            : ((c = new h.h.ne(this.uj, this.Ab.id, "block")), h.h.Ja(c)),
          rb(this),
          h.h.ra(!1));
    a.preventDefault();
    a.stopPropagation();
    this.H();
  }
};
b.cancel = function () {
  if (!this.Ym) {
    h.Fg();
    if (this.Jk) lb(this.og, this.Bd, this.wc);
    else if (this.Fh) Ra(this.Ae, this.Bd, this.wc);
    else if (this.Kk) {
      var a = this.ii;
      a.Bf(this.wc);
      Ca(a.G);
    }
    this.H();
  }
};
function oa(a, c) {
  a.Mb
    ? (rb(a), h.cc(!!a.la), a.Mb.rl(c))
    : a.fd
    ? a.fd.rl(c)
    : a.Ab && !a.la && (h.cc(), a.Ab.rl(c));
  c.preventDefault();
  c.stopPropagation();
  a.H();
}
function rb(a) {
  a.Mb && !a.la && Ta(a.Mb);
}
function sb(a, c) {
  c.Ca ? sb(a, c.getParent()) : (a.Mb = c);
}
function qb(a) {
  return (a.vj ? E(a.vj) : !1) && !a.yh && (!a.la || !a.la.ap);
}
b.wd = function () {
  return this.Kk || this.Fh || this.Jk;
};
b.Xi = function () {
  return this.Ae ? this.Ae.Xi() : [];
};
h.re.Ch = function () {
  for (var a = h.mb.getAll(), c = 0, d; (d = a[c]); c++) if (d.jc) return !0;
  return !1;
};
h.gd = function (a, c, d) {
  this.Ye = this.jo;
  this.ex = this.nx = null;
  this.oc = new h.g.Qd(0, 0);
  this.o = this.Pq = this.$h = this.pc = this.Jb = this.Kc = this.Mf = this.zf = null;
  d && this.dk(d);
  this.setValue(a);
  c && (this.nx = c);
};
b = h.gd.prototype;
b.jo = null;
b.name = void 0;
b.Af = !1;
b.aw = 50;
b.I = null;
b.yg = !0;
b.Ug = !0;
b.uu = null;
h.gd.et = "\u00a0";
b = h.gd.prototype;
b.Ej = !0;
b.At = !1;
b.dk = function (a) {
  var c = a.tooltip;
  "string" == typeof c && (c = h.g.Rc(a.tooltip));
  c && this.Rg(c);
};
b.$ = function () {
  !this.o && this.I && this.I.B && this.I.B.na && (this.o = this.I.B.lb.$());
  return this.o;
};
b.S = function () {
  return this.I;
};
b.ab = function () {
  this.Kc ||
    ((this.Kc = h.g.j.R(h.g.F.Wc, {}, null)),
    this.isVisible() || (this.Kc.style.display = "none"),
    this.I.Ba().appendChild(this.Kc),
    this.Um(),
    tb(this),
    this.Rg(this.ex),
    h.D.bk(ca(this)),
    (this.Pq = h.Oa(ca(this), "mousedown", this, this.Yk)));
};
b.Um = function () {
  ub(this);
  vb(this);
};
function ub(a) {
  a.Jb = h.g.j.R(
    h.g.F.kf,
    {
      rx: a.$().$l,
      ry: a.$().$l,
      x: 0,
      y: 0,
      height: a.oc.height,
      width: a.oc.width,
      class: "blocklyFieldRect",
    },
    a.Kc
  );
}
function vb(a) {
  a.pc = h.g.j.R(h.g.F.Ht, { class: "blocklyText" }, a.Kc);
  a.$().no && a.pc.setAttribute("dominant-baseline", "central");
  a.$h = document.createTextNode("");
  a.pc.appendChild(a.$h);
}
b.H = function () {
  h.C.Fk(this);
  h.W.Fk(this);
  h.D.hx(ca(this));
  this.Pq && h.tb(this.Pq);
  h.g.j.removeNode(this.Kc);
  this.Af = !0;
};
function tb(a) {
  var c = a.Kc;
  a.Ej &&
    c &&
    (a.I.xd()
      ? (h.g.j.Hb(c, "blocklyEditableText"),
        h.g.j.Qc(c, "blocklyNonEditableText"),
        (c.style.cursor = a.Ox))
      : (h.g.j.Hb(c, "blocklyNonEditableText"),
        h.g.j.Qc(c, "blocklyEditableText"),
        (c.style.cursor = "")));
}
function E(a) {
  return !!a.I && a.I.xd() && !!a.ul && "function" === typeof a.ul;
}
b.isVisible = function () {
  return this.Ug;
};
b.Cc = function (a) {
  if (this.Ug != a) {
    this.Ug = a;
    var c = this.Ba();
    c && (c.style.display = a ? "block" : "none");
  }
};
b.Ba = function () {
  return this.Kc;
};
b.bc = function () {};
b.Ar = function () {
  this.$h && (this.$h.nodeValue = wb(this));
  this.lx();
};
b.lx = function () {
  var a = this.$(),
    c = this.Jb ? this.$().Fj : 0,
    d = 2 * c,
    e = a.am,
    f = 0;
  this.pc && ((f = h.g.j.eq(this.pc, a.ah, a.eg, a.dg)), (d += f));
  this.Jb && (e = Math.max(e, a.Fs));
  this.oc.height = e;
  this.oc.width = d;
  xb(this, c, f);
  yb(this);
};
function xb(a, c, d) {
  if (a.pc) {
    var e = a.$(),
      f = a.oc.height / 2;
    a.pc.setAttribute("x", a.I.J ? a.oc.width - d - c : c);
    a.pc.setAttribute("y", e.no ? f : f - e.am / 2 + e.Is);
  }
}
function yb(a) {
  a.Jb &&
    (a.Jb.setAttribute("width", a.oc.width),
    a.Jb.setAttribute("height", a.oc.height),
    a.Jb.setAttribute("rx", a.$().$l),
    a.Jb.setAttribute("ry", a.$().$l));
}
b.Ef = function () {
  if (!this.isVisible()) return new h.g.Qd(0, 0);
  this.yg
    ? (this.Ar(), (this.yg = !1))
    : this.Ug &&
      0 == this.oc.width &&
      (console.warn(
        "Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."
      ),
      this.Ar());
  return this.oc;
};
function wb(a) {
  var c = Ga(a);
  if (!c) return h.gd.et;
  c.length > a.aw && (c = c.substring(0, a.aw - 2) + "\u2026");
  c = c.replace(/\s/g, h.gd.et);
  a.I && a.I.J && (c += "\u200f");
  return c;
}
function Ga(a) {
  if (a.lq) {
    var c = a.lq.call(a);
    if (null !== c) return String(c);
  }
  return String(a.getValue());
}
b.Tk = function () {
  this.yg = !0;
  this.o = null;
};
function zb(a) {
  a.yg = !0;
  a.I && a.I.na && (a.I.Ea(), a.I.Gc(), a.Wr());
}
b.setValue = function (a) {
  if (null !== a) {
    var c = this.Im(a);
    a = Ab(this, a, c);
    if (!(a instanceof Error)) {
      if ((c = this.nx))
        if (((c = c.call(this, a)), (a = Ab(this, a, c)), a instanceof Error))
          return;
      c = this.I;
      if (!c || !c.Af) {
        var d = this.getValue();
        d === a
          ? this.qk(a)
          : (c &&
              h.h.isEnabled() &&
              h.h.Ja(new h.h.li(c, "field", this.name || null, d, a)),
            this.qk(a),
            this.yg && zb(this));
      }
    }
  }
};
function Ab(a, c, d) {
  if (null === d) return a.yg && zb(a), Error();
  void 0 !== d && (c = d);
  return c;
}
b.getValue = function () {
  return this.Ye;
};
b.Im = function (a) {
  return null === a || void 0 === a ? null : a;
};
b.qk = function (a) {
  this.Ye = a;
  this.yg = !0;
};
b.Yk = function (a) {
  if (this.I && this.I.B && (a = ib(this.I.B, a))) {
    if (a.cj)
      throw Error(
        "Tried to call gesture.setStartField, but the gesture had already been started."
      );
    a.vj || (a.vj = this);
  }
};
b.Rg = function (a) {
  a || "" === a || (a = this.I);
  var c = ca(this);
  c ? (c.ge = a) : (this.ex = a);
};
function ca(a) {
  return a.uu || a.Ba();
}
b.Le = function () {
  for (var a = null, c = this.I, d = c.O, e = 0; e < c.O.length; e++)
    for (var f = d[e], g = f.Za, k = 0; k < g.length; k++)
      if (g[k] === this) {
        a = f;
        break;
      }
  return a;
};
b.kv = function () {
  return !1;
};
b.Xb = function () {
  return !1;
};
b.Qf = function (a) {
  a ? (this.Kc.appendChild(a), (this.zf = a)) : (this.zf = null);
};
b.Tf = function (a) {
  a ? (this.Kc.appendChild(a), (this.Mf = a)) : (this.Mf = null);
};
b.Wr = function () {
  var a = this.I.B;
  a.bb && this.zf && a.kb().draw();
  a.bb && this.Mf && a.zc(h.navigation.Mj).draw();
};
h.Ec = function (a, c, d) {
  this.um = null;
  h.Ec.u.constructor.call(this, a, null, d);
  d || (this.um = c || null);
};
h.g.object.U(h.Ec, h.gd);
h.Ec.prototype.jo = "";
h.Ec.aa = function (a) {
  var c = h.g.Rc(a.text);
  return new h.Ec(c, void 0, a);
};
h.Ec.prototype.Ej = !1;
h.Ec.prototype.dk = function (a) {
  h.Ec.u.dk.call(this, a);
  this.um = a["class"];
};
h.Ec.prototype.Um = function () {
  vb(this);
  this.um && h.g.j.Hb(this.pc, this.um);
};
h.Ec.prototype.Im = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
h.sh.register("field_label", h.Ec);
h.Xs = function (a, c, d, e) {
  if (a != h.df && !c)
    throw Error("Value inputs and statement inputs must have non-empty name.");
  this.type = a;
  this.name = c;
  this.I = d;
  this.connection = e;
  this.Za = [];
};
b = h.Xs.prototype;
b.align = h.Tn;
b.Ug = !0;
b.S = function () {
  return this.I;
};
function P(a, c, d) {
  Bb(a, a.Za.length, c, d);
  return a;
}
function Bb(a, c, d, e) {
  if (0 > c || c > a.Za.length) throw Error("index " + c + " out of bounds.");
  if (!(d || ("" == d && e))) return c;
  "string" == typeof d && (d = new h.Ec(d));
  if (d.I) throw Error("Field already bound to a block.");
  d.I = a.I;
  a.I.na && (d.ab(), d.bc());
  d.name = e;
  d.Cc(a.isVisible());
  e = d;
  e.nr && (c = Bb(a, c, e.nr));
  a.Za.splice(c, 0, d);
  ++c;
  e.Rr && (c = Bb(a, c, e.Rr));
  a.I.na && ((a.I = a.I), a.I.Ea(), a.I.Gc());
  return c;
}
b.isVisible = function () {
  return this.Ug;
};
b.Cc = function (a) {
  if (this.Ug != a) {
    this.Ug = a;
    for (var c = 0, d; (d = this.Za[c]); c++) d.Cc(a);
    if (this.connection) {
      this.connection = this.connection;
      if (a) Cb(this.connection);
      else if (((c = this.connection), Q(c, !1), c.pa))
        for (c = p(c.va(), !1), d = 0; d < c.length; d++) {
          for (var e = c[d], f = e.Zd(!0), g = 0; g < f.length; g++)
            Q(f[g], !1);
          e = J(e);
          for (g = 0; g < e.length; g++) e[g].Cc(!1);
        }
      if ((c = this.connection.va()))
        c.Ba().style.display = a ? "block" : "none";
    }
  }
};
b.Tk = function () {
  for (var a = 0, c; (c = this.Za[a]); a++) c.Tk();
};
b.rj = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.rj(a);
};
function Db(a, c) {
  a.align = c;
  a.I.na && ((a.I = a.I), a.I.Ea());
  return a;
}
b.ol = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.ol(a);
};
b.Zi = function () {
  if (!this.connection) throw Error("This input does not have a connection.");
  return this.connection.Zi();
};
b.ab = function () {
  if (this.I.B.na) for (var a = 0; a < this.Za.length; a++) this.Za[a].ab();
};
b.H = function () {
  for (var a = 0, c; (c = this.Za[a]); a++) c.H();
  this.connection && this.connection.H();
  this.I = null;
};
h.Dc = function (a, c, d) {
  if (h.Generator && "undefined" != typeof h.Generator.prototype[c])
    throw Error(
      'Block prototypeName "' +
        c +
        '" conflicts with Blockly.Generator members.'
    );
  this.id = d && !a.Lc(d) ? d : h.g.Df();
  a.ep[this.id] = this;
  this.T = this.X = this.M = null;
  this.O = [];
  this.If = void 0;
  this.disabled = !1;
  this.ge = "";
  this.contextMenu = !0;
  this.Re = null;
  this.tf = [];
  this.Wu = this.ew = this.zp = !0;
  this.mh = this.Ca = !1;
  this.vf = { text: null, zw: !1, size: new h.g.Qd(160, 80) };
  this.ux = new h.g.P(0, 0);
  this.B = a;
  this.Oc = a.zg;
  this.J = a.J;
  this.hj = !1;
  this.Me = void 0;
  this.na = null;
  if (c) {
    this.type = c;
    d = h.fc[c];
    if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
    h.g.object.Hg(this, d);
  }
  a.nm(this);
  a.Zf[this.type] || (a.Zf[this.type] = []);
  a.Zf[this.type].push(this);
  (a = h.h.Pb()) || h.h.ra(!0);
  c = h.h.Ga;
  try {
    "function" == typeof this.ab && ((h.h.Ga = !1), this.ab(), (h.h.Ga = c)),
      h.h.isEnabled() && h.h.Ja(new h.h.Ql(this));
  } finally {
    a || h.h.ra(!1), (h.h.Ga = c);
  }
  this.NB = this.If;
  if ("function" == typeof this.onchange) {
    if ((a = this.onchange) && "function" != typeof a)
      throw Error("onchange must be a function.");
    this.Zk && h.g.ak(this.B.Qk, this.Zk);
    if ((this.onchange = a)) (this.Zk = a.bind(this)), eb(this.B, this.Zk);
  }
};
h.Dc.Cj = "_TEMP_COLLAPSED_INPUT";
h.Dc.co = "_TEMP_COLLAPSED_FIELD";
b = h.Dc.prototype;
b.data = null;
b.Af = !1;
b.sd = "#000000";
b.zl = null;
b.H = function (a) {
  if (this.B) {
    this.Zk && h.g.ak(this.B.Qk, this.Zk);
    A(this, a);
    h.h.isEnabled() && h.h.Ja(new h.h.Ix(this));
    h.h.disable();
    try {
      if (this.B) {
        this.B.An(this);
        var c = this.B;
        c.Zf[this.type].splice(c.Zf[this.type].indexOf(this), 1);
        c.Zf[this.type].length || delete c.Zf[this.type];
        delete this.B.ep[this.id];
        this.B = null;
      }
      h.selected == this && (h.selected = null);
      for (var d = this.tf.length - 1; 0 <= d; d--) this.tf[d].H(!1);
      d = 0;
      for (var e; (e = this.O[d]); d++) e.H();
      this.O.length = 0;
      var f = this.Zd(!0);
      d = 0;
      for (var g; (g = f[d]); d++) g.H();
    } finally {
      h.h.enable(), (this.Af = !0);
    }
  }
};
function A(a, c) {
  if (a.M) {
    var d = null;
    a.M.isConnected() && ((d = a.M.pa), a.M.disconnect());
    if (d && c) {
      a: {
        c = null;
        for (var e = 0; e < a.O.length; e++) {
          var f = a.O[e].connection;
          if (f && f.type == h.eb && f.pa) {
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
        !c.va().Ca &&
        ((c = c.pa),
        c.disconnect(),
        F(a.B.fk, c, d, !1) ? d.connect(c) : c.qn(d));
    }
  } else
    a.T &&
      ((d = null),
      a.T.isConnected() && ((d = a.T.pa), a.T.disconnect()),
      (e = t(a)),
      c &&
        e &&
        !e.Ca &&
        ((c = a.X.pa),
        c.disconnect(),
        d && F(a.B.fk, d, c, !1) && d.connect(c)));
}
b.Zd = function () {
  var a = [];
  this.M && a.push(this.M);
  this.T && a.push(this.T);
  this.X && a.push(this.X);
  for (var c = 0, d; (d = this.O[c]); c++) d.connection && a.push(d.connection);
  return a;
};
b.fn = function () {
  for (var a = this.X; a; ) {
    var c = a.va();
    if (!c) return a;
    a = c.X;
  }
  return null;
};
b.Gc = function () {};
b.getParent = function () {
  return this.Re;
};
function ha(a, c) {
  for (var d = 0, e; (e = a.O[d]); d++)
    if (e.connection && e.connection.va() == c) return e;
  return null;
}
function Eb(a) {
  do {
    var c = a;
    a = a.getParent();
    if (!a) return null;
  } while (t(a) == c);
  return a;
}
function t(a) {
  return a.X && a.X.va();
}
b.Ac = function () {
  var a = this;
  do {
    var c = a;
    a = c.Re;
  } while (a);
  return c;
};
function C(a, c) {
  if (!c) return a.tf;
  c = [];
  for (var d = 0, e; (e = a.O[d]); d++)
    e.connection && (e = e.connection.va()) && c.push(e);
  (a = t(a)) && c.push(a);
  return c;
}
b.Gn = function (a) {
  if (a != this.Re) {
    if (this.Re) {
      h.g.ak(this.Re.tf, this);
      if (this.T && this.T.isConnected())
        throw Error("Still connected to previous block.");
      if (this.M && this.M.isConnected())
        throw Error("Still connected to parent block.");
      this.Re = null;
    } else this.B.An(this);
    (this.Re = a) ? a.tf.push(this) : this.B.nm(this);
  }
};
function p(a, c) {
  var d = [a];
  a = C(a, c);
  for (var e, f = 0; (e = a[f]); f++) d.push.apply(d, p(e, c));
  return d;
}
b.Nc = function () {
  return this.zp && !this.Ca && !(this.B && this.B.options.readOnly);
};
b.kc = function () {
  return this.ew && !this.Ca && !(this.B && this.B.options.readOnly);
};
b.Hr = function (a) {
  this.ew = a;
};
b.Jr = function (a) {
  this.Ca = a;
};
b.Pe = function () {
  return this.hj;
};
b.Qw = function (a) {
  this.hj = a;
};
b.xd = function () {
  return this.Wu && !(this.B && this.B.options.readOnly);
};
b.Fr = function (a) {
  this.Wu = a;
  a = 0;
  for (var c; (c = this.O[a]); a++)
    for (var d = 0, e; (e = c.Za[d]); d++) tb(e);
};
b.gq = function (a, c) {
  var d = this.Zd(!0);
  a = a.Zd(!0);
  if (d.length != a.length)
    throw Error("Connection lists did not match in length.");
  for (var e = 0; e < a.length; e++) if (a[e] == c) return d[e];
  return null;
};
b.Rg = function (a) {
  this.ge = a;
};
b.bq = function () {
  return this.sd;
};
b.Te = function (a) {
  this.sd = h.g.vn(a).Ek;
};
b.Yh = function (a) {
  this.zl = a;
};
function z(a, c) {
  for (var d = 0, e; (e = a.O[d]); d++)
    for (var f = 0, g; (g = e.Za[f]); f++) if (g.name == c) return g;
  return null;
}
function na(a) {
  for (var c = 0, d; (d = a.O[c]); c++) for (var e = 0; d.Za[e]; e++);
  return [];
}
function Fa(a, c) {
  return (a = z(a, c)) ? a.getValue() : null;
}
function Fb(a, c) {
  a = z(a, "NAME");
  if (!a) throw Error('Field "NAME" not found.');
  a.setValue(c);
}
b.Hn = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.T) {
      if (this.M)
        throw Error(
          "Remove output connection prior to adding previous connection."
        );
      this.T = this.Sk(h.Nd);
    }
    this.T.rj(c);
  } else if (this.T) {
    if (this.T.isConnected())
      throw Error(
        "Must disconnect previous statement before removing connection."
      );
    this.T.H();
    this.T = null;
  }
};
b.En = function (a, c) {
  if (a)
    void 0 === c && (c = null),
      this.X || (this.X = this.Sk(h.Ra)),
      this.X.rj(c);
  else if (this.X) {
    if (this.X.isConnected())
      throw Error("Must disconnect next statement before removing connection.");
    this.X.H();
    this.X = null;
  }
};
b.Fn = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.M) {
      if (this.T)
        throw Error(
          "Remove previous connection prior to adding output connection."
        );
      this.M = this.Sk(h.Md);
    }
    this.M.rj(c);
  } else if (this.M) {
    if (this.M.isConnected())
      throw Error("Must disconnect output value before removing connection.");
    this.M.H();
    this.M = null;
  }
};
b.Pg = function (a) {
  this.If != a &&
    (h.h.Ja(new h.h.li(this, "inline", null, this.If, a)), (this.If = a));
};
function Ha(a) {
  if (void 0 != a.If) return a.If;
  for (var c = 1; c < a.O.length; c++)
    if (a.O[c - 1].type == h.df && a.O[c].type == h.df) return !1;
  for (c = 1; c < a.O.length; c++)
    if (a.O[c - 1].type == h.eb && a.O[c].type == h.df) return !0;
  return !1;
}
b.isEnabled = function () {
  return !this.disabled;
};
b.Rf = function (a) {
  this.isEnabled() != a &&
    (h.h.Ja(new h.h.li(this, "disabled", null, this.disabled, !a)),
    (this.disabled = !a));
};
function Gb(a) {
  for (a = Eb(a); a; ) {
    if (a.disabled) return !0;
    a = Eb(a);
  }
  return !1;
}
b.isCollapsed = function () {
  return this.mh;
};
b.Xh = function (a) {
  this.mh != a &&
    (h.h.Ja(new h.h.li(this, "collapsed", null, this.mh, a)), (this.mh = a));
};
b.toString = function (a, c) {
  function d(n) {
    var r = n.pg;
    !r && n.pa && (r = n.pa.pg);
    return !!r && (-1 != r.indexOf("Boolean") || -1 != r.indexOf("Number"));
  }
  function e() {
    k && k.La() == l.La() && k.ma == l.ma && (k = null);
  }
  var f = [];
  c = c || "?";
  var g = h.v.hg;
  h.v.hg = !0;
  for (var k = h.v.Ee(this), l = k; k; ) {
    switch (k.La()) {
      case h.v.types.hd:
        var m = k.ma;
        k.Hf() ? d(m) && f.push("(") : f.push(c);
        break;
      case h.v.types.Nb:
        (m = k.ma), m.name != h.Dc.co && f.push(Ga(m));
    }
    m = k;
    k = m.Hf() || m.next();
    if (!k) {
      k = m.Nf();
      for (e(); k && !k.next(); )
        (k = k.Nf()),
          e(),
          k && k.La() == h.v.types.hd && d(k.ma) && f.push(")");
      k && (k = k.next());
    }
  }
  h.v.hg = g;
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
function Hb(a, c) {
  return a.kh(h.df, c || "");
}
b.Hg = function (a, c) {
  if (void 0 !== c && "boolean" != typeof c)
    throw Error("opt_disableCheck must be a boolean if provided");
  if (!c) {
    c = [];
    for (var d in a) void 0 !== this[d] && c.push(d);
    if (c.length)
      throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  }
  h.g.object.Hg(this, a);
};
b.kh = function (a, c) {
  var d = null;
  if (a == h.eb || a == h.Ra) d = this.Sk(a);
  a = new h.Xs(a, c, this, d);
  this.O.push(a);
  return a;
};
b.xr = function (a, c) {
  for (var d = 0, e; (e = this.O[d]); d++)
    if (e.name == a) return e.H(), this.O.splice(d, 1), !0;
  if (c) return !1;
  throw Error("Input not found: " + a);
};
function ia(a, c) {
  for (var d = 0, e; (e = a.O[d]); d++) if (e.name == c) return e;
  return null;
}
b.sj = function (a) {
  this.vf.text != a &&
    (h.h.Ja(new h.h.li(this, "comment", null, this.vf.text, a)),
    (this.vf.text = a));
};
b.Rw = function () {};
b.Sa = function () {
  return this.ux;
};
b.moveBy = function (a, c) {
  if (this.Re) throw Error("Block has parent.");
  var d = new h.h.Aj(this);
  this.ux.translate(a, c);
  d.Uh();
  h.h.Ja(d);
};
b.Sk = function (a) {
  return new h.ca(this, a);
};
h.i = {};
h.i.fF = function () {};
h.g.wb = {};
h.g.wb.xx = "aria-";
h.g.wb.vz = "role";
h.g.wb.gm = {
  ZE: "grid",
  $E: "gridcell",
  aF: "group",
  Uy: "listbox",
  $y: "menu",
  az: "menuitem",
  sF: "menuitemcheckbox",
  kz: "option",
  ZF: "presentation",
  Lo: "row",
  uG: "tree",
  vG: "treeitem",
};
h.g.wb.State = {
  vx: "activedescendant",
  nE: "colcount",
  Xx: "disabled",
  BE: "expanded",
  eF: "invalid",
  Sy: "label",
  iF: "labelledby",
  lF: "level",
  SF: "orientation",
  YF: "posinset",
  eG: "rowcount",
  im: "selected",
  hG: "setsize",
  zG: "valuemax",
  AG: "valuemin",
};
h.g.wb.Qg = function (a, c) {
  a.setAttribute(h.g.wb.vz, c);
};
h.g.wb.tj = function (a, c, d) {
  Array.isArray(d) && (d = d.join(" "));
  a.setAttribute(h.g.wb.xx + c, d);
};
h.g.L = {
  EG: 0,
  nF: 3,
  Ax: 8,
  oG: 9,
  zF: 12,
  Cs: 13,
  mf: 16,
  $f: 17,
  ki: 18,
  UF: 19,
  iE: 20,
  Ds: 27,
  yz: 32,
  oz: 33,
  nz: 34,
  ky: 35,
  Ey: 36,
  Zs: 37,
  Lz: 38,
  xt: 39,
  Zx: 40,
  XF: 43,
  $F: 44,
  Ts: 45,
  Zg: 46,
  ZERO: 48,
  ONE: 49,
  wG: 50,
  pG: 51,
  YE: 52,
  UE: 53,
  kG: 54,
  iG: 55,
  zE: 56,
  xF: 57,
  SE: 59,
  QE: 61,
  PE: 173,
  RE: 163,
  aG: 63,
  dE: 64,
  $r: 65,
  fE: 66,
  $n: 67,
  vs: 68,
  E: 69,
  CE: 70,
  Wc: 71,
  bF: 72,
  Jy: 73,
  gF: 74,
  Ry: 75,
  hF: 76,
  mF: 77,
  wF: 78,
  PF: 79,
  TF: 80,
  Q: 81,
  bG: 82,
  yt: 83,
  Dz: 84,
  yG: 85,
  Vo: 86,
  Vt: 87,
  mm: 88,
  Qz: 89,
  Fi: 90,
  si: 91,
  FG: 92,
  qE: 93,
  OF: 96,
  HF: 97,
  NF: 98,
  MF: 99,
  DF: 100,
  CF: 101,
  LF: 102,
  KF: 103,
  BF: 104,
  GF: 105,
  FF: 106,
  JF: 107,
  EF: 109,
  IF: 110,
  AF: 111,
  DE: 112,
  HE: 113,
  IE: 114,
  JE: 115,
  KE: 116,
  LE: 117,
  ME: 118,
  NE: 119,
  OE: 120,
  EE: 121,
  FE: 122,
  GE: 123,
  yF: 144,
  fG: 145,
  TE: 166,
  jF: 183,
  gG: 186,
  sE: 189,
  AE: 187,
  pE: 188,
  VF: 190,
  lG: 191,
  cE: 192,
  qG: 192,
  jG: 222,
  QF: 219,
  gE: 220,
  mE: 221,
  DG: 224,
  oF: 224,
  pF: 91,
  qF: 93,
  CG: 229,
  BG: 252,
  WF: 255,
};
h.Ao = function () {
  this.Ad = [];
  this.Wh = this.Ya = this.rn = this.mn = this.ln = this.uf = this.nn = this.wg = this.er = null;
};
b = h.Ao.prototype;
b.Ea = function (a) {
  var c = document.createElement("div");
  c.className = "blocklyMenu goog-menu blocklyNonSelectable";
  c.tabIndex = 0;
  this.Wh && h.g.wb.Qg(c, this.Wh);
  this.Ya = c;
  for (var d = 0, e; (e = this.Ad[d]); d++) c.appendChild(e.jb());
  this.nn = h.Oa(c, "mouseover", this, this.AB, !0);
  this.uf = h.Oa(c, "click", this, this.uB, !0);
  this.ln = h.Oa(c, "mouseenter", this, this.yB, !0);
  this.mn = h.Oa(c, "mouseleave", this, this.zB, !0);
  this.rn = h.Oa(c, "keydown", this, this.wB);
  a.appendChild(c);
};
b.focus = function () {
  var a = this.Ya;
  a && (a.focus({ preventScroll: !0 }), h.g.j.Hb(a, "blocklyFocused"));
};
b.Qg = function (a) {
  this.Wh = a;
};
b.H = function () {
  this.nn && (h.tb(this.nn), (this.nn = null));
  this.uf && (h.tb(this.uf), (this.uf = null));
  this.ln && (h.tb(this.ln), (this.ln = null));
  this.mn && (h.tb(this.mn), (this.mn = null));
  this.rn && (h.tb(this.rn), (this.rn = null));
  for (var a = 0, c; (c = this.Ad[a]); a++) c.H();
  this.Ya = null;
};
function Ib(a, c) {
  for (var d = a.Ya; c && c != d; ) {
    if (h.g.j.oq(c, "blocklyMenuItem"))
      for (var e = 0, f; (f = a.Ad[e]); e++) if (f.Ya == c) return f;
    c = c.parentElement;
  }
  return null;
}
b.Sf = function (a) {
  var c = this.wg;
  c && (c.Sf(!1), (this.wg = null));
  a &&
    (a.Sf(!0),
    (this.wg = a),
    (c = this.Ya),
    h.g.style.vD(a.Ya, c),
    h.g.wb.tj(c, h.g.wb.State.vx, a.yc()));
};
function Jb(a) {
  var c = a.Ad.indexOf(a.wg);
  Kb(a, 0 > c ? a.Ad.length : c, -1);
}
function Kb(a, c, d) {
  c += d;
  for (var e; (e = a.Ad[c]); ) {
    if (e.isEnabled()) {
      a.Sf(e);
      break;
    }
    c += d;
  }
}
b.AB = function (a) {
  (a = Ib(this, a.target)) &&
    (a.isEnabled() ? this.wg != a && this.Sf(a) : this.Sf(null));
};
b.uB = function (a) {
  var c = this.er;
  this.er = null;
  (c &&
    "number" == typeof a.clientX &&
    1 > h.g.P.Kp(c, new h.g.P(a.clientX, a.clientY))) ||
    ((a = Ib(this, a.target)) && a.isEnabled() && a.$j && a.$j(a));
};
b.yB = function () {
  this.focus();
};
b.zB = function () {
  if (this.Ya) {
    var a = this.Ya;
    a && (a.blur(), h.g.j.Qc(a, "blocklyFocused"));
    this.Sf(null);
  }
};
b.wB = function (a) {
  if (this.Ad.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
    var c = this.wg;
    switch (a.keyCode) {
      case h.g.L.Cs:
      case h.g.L.yz:
        c && c.isEnabled() && c.$j && c.$j(c);
        break;
      case h.g.L.Lz:
        Jb(this);
        break;
      case h.g.L.Zx:
        Kb(this, this.Ad.indexOf(this.wg), 1);
        break;
      case h.g.L.oz:
      case h.g.L.Ey:
        Kb(this, -1, 1);
        break;
      case h.g.L.nz:
      case h.g.L.ky:
        Kb(this, this.Ad.length, -1);
        break;
      default:
        return;
    }
    a.preventDefault();
    a.stopPropagation();
  }
};
b.Ef = function () {
  var a = this.Ya,
    c = h.g.style.Ef(a);
  c.height = a.scrollHeight;
  return c;
};
h.Bo = function (a, c) {
  this.yf = a;
  this.Ye = c;
  this.Mm = !0;
  this.Ya = null;
  this.Er = !1;
  this.Wh = null;
  this.Hv = this.np = this.mp = !1;
  this.$j = null;
};
b = h.Bo.prototype;
b.jb = function () {
  var a = document.createElement("div");
  a.id = h.g.Jj.nv();
  this.Ya = a;
  a.className =
    "blocklyMenuItem goog-menuitem " +
    (this.Mm ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") +
    (this.np ? "blocklyMenuItemSelected goog-option-selected " : "") +
    (this.Hv ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") +
    (this.Er ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
  var c = document.createElement("div");
  c.className = "blocklyMenuItemContent goog-menuitem-content";
  if (this.mp) {
    var d = document.createElement("div");
    d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
    c.appendChild(d);
  }
  d = this.yf;
  "string" == typeof this.yf && (d = document.createTextNode(this.yf));
  c.appendChild(d);
  a.appendChild(c);
  this.Wh && h.g.wb.Qg(a, this.Wh);
  h.g.wb.tj(a, h.g.wb.State.im, (this.mp && this.np) || !1);
  h.g.wb.tj(a, h.g.wb.State.Xx, !this.Mm);
  return a;
};
b.H = function () {
  this.Ya = null;
};
b.yc = function () {
  return this.Ya.id;
};
b.getValue = function () {
  return this.Ye;
};
b.Qg = function (a) {
  this.Wh = a;
};
b.Sf = function (a) {
  this.Hv = a;
  var c = this.Ya;
  c &&
    this.isEnabled() &&
    (a
      ? (h.g.j.Hb(c, "blocklyMenuItemHighlight"),
        h.g.j.Hb(c, "goog-menuitem-highlight"))
      : (h.g.j.Qc(c, "blocklyMenuItemHighlight"),
        h.g.j.Qc(c, "goog-menuitem-highlight")));
};
b.isEnabled = function () {
  return this.Mm;
};
b.Rf = function (a) {
  this.Mm = a;
};
function Lb(a, c, d) {
  a.$j = c.bind(d);
}
h.Ka = {};
h.Ka.Cm = null;
h.Ka.Wb = null;
h.Ka.show = function (a, c, d) {
  h.W.show(h.Ka, d, h.Ka.H);
  if (c.length) {
    var e = h.Ka.EC(c, d);
    h.Ka.Wb = e;
    h.Ka.GC(e, a, d);
    setTimeout(function () {
      e.focus();
    }, 1);
    h.Ka.Cm = null;
  } else h.Ka.$a();
};
h.Ka.EC = function (a, c) {
  var d = new h.Ao();
  d.Qg(h.g.wb.gm.$y);
  for (var e = 0, f; (f = a[e]); e++) {
    var g = new h.Bo(f.text);
    g.Er = c;
    g.Qg(h.g.wb.gm.az);
    d.Ad.push(g);
    g.Rf(f.enabled);
    f.enabled &&
      Lb(
        g,
        function () {
          h.Ka.$a();
          this.sa(this.scope);
        },
        f
      );
  }
  return d;
};
h.Ka.GC = function (a, c, d) {
  var e = h.g.sB();
  c = new h.g.Rect(
    c.clientY + e.top,
    c.clientY + e.top,
    c.clientX + e.left,
    c.clientX + e.left
  );
  h.Ka.zA(a);
  var f = a.Ef();
  d &&
    ((c.left += f.width),
    (c.right += f.width),
    (e.left += f.width),
    (e.right += f.width));
  h.W.FC(e, c, f, d);
  a.focus();
};
h.Ka.zA = function (a) {
  a.Ea(h.W.Ua);
  var c = a.Ya;
  h.g.j.Hb(c, "blocklyContextMenu");
  h.Oa(c, "contextmenu", null, h.g.qC);
  a.focus();
};
h.Ka.$a = function () {
  h.W.Fk(h.Ka);
  h.Ka.Cm = null;
};
h.Ka.H = function () {
  h.Ka.Wb && (h.Ka.Wb.H(), (h.Ka.Wb = null));
};
h.Ka.PG = function (a, c) {
  return function () {
    h.h.disable();
    try {
      var d = h.N.Jm(c, a.B),
        e = a.Sa();
      e.x = a.J ? e.x - h.hc : e.x + h.hc;
      e.y += 2 * h.hc;
      d.moveBy(e.x, e.y);
    } finally {
      h.h.enable();
    }
    h.h.isEnabled() && !d.Ca && h.h.Ja(new h.h.Ql(d));
    d.select();
  };
};
h.Ka.VG = function (a) {
  return {
    text: h.K.REMOVE_COMMENT,
    enabled: !0,
    sa: function () {
      h.h.ra(!0);
      a.H(!0, !0);
      h.h.ra(!1);
    },
  };
};
h.Ka.WG = function (a) {
  return {
    text: h.K.DUPLICATE_COMMENT,
    enabled: !0,
    sa: function () {
      h.duplicate(a);
    },
  };
};
h.Ka.jI = function (a, c) {
  if (!h.Ei) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
  var d = { enabled: !h.g.userAgent.Kd };
  d.text = h.K.ADD_COMMENT;
  d.sa = function () {
    var e = new h.Ei(a, h.K.WORKSPACE_COMMENT_DEFAULT_TEXT, h.Ei.Wx, h.Ei.Wx),
      f = aa(a).getBoundingClientRect();
    f = new h.g.P(c.clientX - f.left, c.clientY - f.top);
    var g = h.g.fq(a.Lb);
    f = h.g.P.Fm(f, g);
    f.scale(1 / a.scale);
    e.moveBy(f.x, f.y);
    a.na && (e.Dh(), e.Ea(), e.select());
  };
  return d;
};
h.ea = {};
h.ea.wr = function () {
  h.xa.A.register({
    xc: function () {
      return h.K.UNDO;
    },
    Da: function (a) {
      return 0 < a.B.ci.length ? "enabled" : "disabled";
    },
    sa: function (a) {
      cb(a.B, !1);
    },
    ed: h.xa.uc.Vb,
    id: "undoWorkspace",
    weight: 1,
  });
};
h.ea.vr = function () {
  h.xa.A.register({
    xc: function () {
      return h.K.REDO;
    },
    Da: function (a) {
      return 0 < a.B.il.length ? "enabled" : "disabled";
    },
    sa: function (a) {
      cb(a.B, !0);
    },
    ed: h.xa.uc.Vb,
    id: "redoWorkspace",
    weight: 2,
  });
};
h.ea.IC = function () {
  h.xa.A.register({
    xc: function () {
      return h.K.CLEAN_UP;
    },
    Da: function (a) {
      return a.B.kc()
        ? 1 < a.B.Qb(!1).length
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    sa: function (a) {
      a = a.B;
      a.Tc(!1);
      h.h.ra(!0);
      for (var c = a.Qb(!0), d = 0, e = 0, f; (f = c[e]); e++)
        if (f.kc()) {
          var g = f.Sa();
          f.moveBy(-g.x, d - g.y);
          Mb(f);
          d = f.Sa().y + w(f).height + a.lb.$().Nj;
        }
      h.h.ra(!1);
      a.Tc(!0);
    },
    ed: h.xa.uc.Vb,
    id: "cleanWorkspace",
    weight: 3,
  });
};
h.ea.ax = function (a, c) {
  for (var d = 0, e = 0; e < c.length; e++)
    for (var f = c[e]; f; )
      setTimeout(f.Xh.bind(f, a), d), (f = t(f)), (d += 10);
};
h.ea.JC = function () {
  h.xa.A.register({
    xc: function () {
      return h.K.COLLAPSE_ALL;
    },
    Da: function (a) {
      if (a.B.options.collapse) {
        a = a.B.Qb(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (!d.isCollapsed()) return "enabled";
            d = t(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    sa: function (a) {
      h.ea.ax(!0, a.B.Qb(!0));
    },
    ed: h.xa.uc.Vb,
    id: "collapseWorkspace",
    weight: 4,
  });
};
h.ea.WC = function () {
  h.xa.A.register({
    xc: function () {
      return h.K.EXPAND_ALL;
    },
    Da: function (a) {
      if (a.B.options.collapse) {
        a = a.B.Qb(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (d.isCollapsed()) return "enabled";
            d = t(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    sa: function (a) {
      h.ea.ax(!1, a.B.Qb(!0));
    },
    ed: h.xa.uc.Vb,
    id: "expandWorkspace",
    weight: 5,
  });
};
h.ea.fu = function (a, c) {
  if (a.Nc()) Array.prototype.push.apply(c, p(a, !1));
  else {
    a = C(a, !1);
    for (var d = 0; d < a.length; d++) h.ea.fu(a[d], c);
  }
};
h.ea.cq = function (a) {
  var c = [];
  a = a.Qb(!0);
  for (var d = 0; d < a.length; d++) h.ea.fu(a[d], c);
  return c;
};
h.ea.Dm = function (a, c) {
  h.h.ra(c);
  var d = a.shift();
  d && (d.B ? (d.H(!1, !0), setTimeout(h.ea.Dm, 10, a, c)) : h.ea.Dm(a, c));
  h.h.ra(!1);
};
h.ea.QC = function () {
  h.xa.A.register({
    xc: function (a) {
      if (a.B)
        return (
          (a = h.ea.cq(a.B).length),
          1 == a
            ? h.K.DELETE_BLOCK
            : h.K.DELETE_X_BLOCKS.replace("%1", String(a))
        );
    },
    Da: function (a) {
      if (a.B) return 0 < h.ea.cq(a.B).length ? "enabled" : "disabled";
    },
    sa: function (a) {
      if (a.B) {
        Nb(a.B);
        var c = h.ea.cq(a.B),
          d = h.g.Df();
        2 > c.length
          ? h.ea.Dm(c, d)
          : h.confirm(
              h.K.DELETE_ALL_BLOCKS.replace("%1", c.length),
              function (e) {
                e && h.ea.Dm(c, d);
              }
            );
      }
    },
    ed: h.xa.uc.Vb,
    id: "workspaceDelete",
    weight: 6,
  });
};
h.ea.mD = function () {
  h.ea.wr();
  h.ea.vr();
  h.ea.IC();
  h.ea.JC();
  h.ea.WC();
  h.ea.QC();
};
h.ea.TC = function () {
  h.xa.A.register({
    xc: function () {
      return h.K.DUPLICATE_BLOCK;
    },
    Da: function (a) {
      a = a.block;
      return !a.Oc && a.Nc() && a.kc()
        ? (bb(a.B) ? ab(a.B, h.g.dv(a)) : 1)
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    sa: function (a) {
      a.block && h.duplicate(a.block);
    },
    ed: h.xa.uc.vb,
    id: "blockDuplicate",
    weight: 1,
  });
};
h.ea.LC = function () {
  h.xa.A.register({
    xc: function (a) {
      return a.block.Vd ? h.K.REMOVE_COMMENT : h.K.ADD_COMMENT;
    },
    Da: function (a) {
      a = a.block;
      return h.g.userAgent.Kd ||
        a.Oc ||
        !a.B.options.nA ||
        a.isCollapsed() ||
        !a.xd()
        ? "hidden"
        : "enabled";
    },
    sa: function (a) {
      a = a.block;
      a.Vd ? a.sj(null) : a.sj("");
    },
    ed: h.xa.uc.vb,
    id: "blockComment",
    weight: 2,
  });
};
h.ea.ZC = function () {
  h.xa.A.register({
    xc: function (a) {
      return Ha(a.block) ? h.K.EXTERNAL_INPUTS : h.K.INLINE_INPUTS;
    },
    Da: function (a) {
      a = a.block;
      if (!a.Oc && a.kc() && !a.isCollapsed())
        for (var c = 1; c < a.O.length; c++)
          if (a.O[c - 1].type != h.Ra && a.O[c].type != h.Ra) return "enabled";
      return "hidden";
    },
    sa: function (a) {
      a.block.Pg(!Ha(a.block));
    },
    ed: h.xa.uc.vb,
    id: "blockInline",
    weight: 3,
  });
};
h.ea.KC = function () {
  h.xa.A.register({
    xc: function (a) {
      return a.block.isCollapsed() ? h.K.EXPAND_BLOCK : h.K.COLLAPSE_BLOCK;
    },
    Da: function (a) {
      a = a.block;
      return !a.Oc && a.kc() ? "enabled" : "hidden";
    },
    sa: function (a) {
      a.block.Xh(!a.block.isCollapsed());
    },
    ed: h.xa.uc.vb,
    id: "blockCollapseExpand",
    weight: 4,
  });
};
h.ea.RC = function () {
  h.xa.A.register({
    xc: function (a) {
      return a.block.isEnabled() ? h.K.DISABLE_BLOCK : h.K.ENABLE_BLOCK;
    },
    Da: function (a) {
      a = a.block;
      return !a.Oc && a.B.options.disable && a.xd()
        ? Gb(a)
          ? "disabled"
          : "enabled"
        : "hidden";
    },
    sa: function (a) {
      a = a.block;
      var c = h.h.Pb();
      c || h.h.ra(!0);
      a.Rf(!a.isEnabled());
      c || h.h.ra(!1);
    },
    ed: h.xa.uc.vb,
    id: "blockDisable",
    weight: 5,
  });
};
h.ea.rr = function () {
  h.xa.A.register({
    xc: function (a) {
      var c = a.block;
      a = p(c, !1).length;
      (c = t(c)) && (a -= p(c, !1).length);
      return 1 == a
        ? h.K.DELETE_BLOCK
        : h.K.DELETE_X_BLOCKS.replace("%1", String(a));
    },
    Da: function (a) {
      return !a.block.Oc && a.block.Nc() ? "enabled" : "hidden";
    },
    sa: function (a) {
      h.h.ra(!0);
      a.block.H(!0, !0);
      h.h.ra(!1);
    },
    ed: h.xa.uc.vb,
    id: "blockDelete",
    weight: 6,
  });
};
h.ea.XC = function () {
  h.xa.A.register({
    xc: function () {
      return h.K.HELP;
    },
    Da: function (a) {
      a = a.block;
      return ("function" == typeof a.zh ? a.zh() : a.zh) ? "enabled" : "hidden";
    },
    sa: function (a) {
      a.block.showHelp();
    },
    ed: h.xa.uc.vb,
    id: "blockHelp",
    weight: 7,
  });
};
h.ea.HC = function () {
  h.ea.TC();
  h.ea.LC();
  h.ea.ZC();
  h.ea.KC();
  h.ea.RC();
  h.ea.rr();
  h.ea.XC();
};
h.ea.OC = function () {
  h.ea.mD();
  h.ea.HC();
};
h.xa = function () {
  h.xa.A = this;
  this.dd = {};
  h.ea.OC();
};
h.xa.uc = { vb: "block", Vb: "workspace" };
h.xa.A = null;
h.xa.prototype.register = function (a) {
  if (this.dd[a.id])
    throw Error('Menu item with id "' + a.id + '" is already registered.');
  this.dd[a.id] = a;
};
h.xa.prototype.unregister = function (a) {
  if (this.dd[a]) delete this.dd[a];
  else throw Error('Menu item with id "' + a + '" not found.');
};
h.xa.prototype.getItem = function (a) {
  return this.dd[a] ? this.dd[a] : null;
};
function Ob(a, c) {
  var d = [],
    e = h.xa.A.dd;
  Object.keys(e).forEach(function (f) {
    f = e[f];
    if (a == f.ed) {
      var g = f.Da(c);
      "hidden" != g &&
        ((f = {
          text: "function" == typeof f.xc ? f.xc(c) : f.xc,
          enabled: "enabled" == g,
          sa: f.sa,
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
new h.xa();
h.h.ue = function (a, c, d) {
  h.h.ue.u.constructor.call(this, d);
  this.kw = a;
  this.hw = c;
};
h.g.object.U(h.h.ue, h.h.xe);
h.h.ue.prototype.type = h.h.im;
h.h.ue.prototype.qa = function () {
  var a = h.h.ue.u.qa.call(this);
  a.oldElementId = this.kw;
  a.newElementId = this.hw;
  return a;
};
h.h.ue.prototype.aa = function (a) {
  h.h.ue.u.aa.call(this, a);
  this.kw = a.oldElementId;
  this.hw = a.newElementId;
};
h.A.register(h.A.Y.Fb, h.h.im, h.h.ue);
h.Bb = function (a, c) {
  h.Bb.u.constructor.call(this, a, c);
  this.ph = a.B.Bm[c];
  this.Ju = a.B.Bm[h.wi[c]];
  this.Rh = new h.g.P(0, 0);
  this.Yf = h.Bb.we.Xt;
  this.pa = null;
};
h.g.object.U(h.Bb, h.ca);
h.Bb.we = { Xt: -1, Mt: 0, Di: 1 };
b = h.Bb.prototype;
b.H = function () {
  h.Bb.u.H.call(this);
  this.Yf == h.Bb.we.Di && Pb(this.ph, this, this.y);
};
b.S = function () {
  return h.Bb.u.S.call(this);
};
b.va = function () {
  return h.Bb.u.va.call(this);
};
function Xa(a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
}
function nb(a, c) {
  if (!a.I.B.wd()) {
    var d = a.I.Ac();
    if (!d.Oc) {
      var e = !1;
      if (!d.kc()) {
        d = c.S().Ac();
        if (!d.kc()) return;
        c = a;
        e = !0;
      }
      var f = h.selected == d;
      f || Qb(d.qb, !0);
      var g = c.x + h.hc + Math.floor(Math.random() * h.Zn) - a.x,
        k = c.y + h.hc + Math.floor(Math.random() * h.Zn) - a.y;
      e && (k = -k);
      d.J && (g = c.x - h.hc - Math.floor(Math.random() * h.Zn) - a.x);
      d.moveBy(g, k);
      f || Qb(d.qb, !1);
    }
  }
}
b.moveTo = function (a, c) {
  if (this.Yf == h.Bb.we.Xt) {
    var d = this.ph;
    d.yb.splice(Rb(d, c), 0, this);
    this.Yf = h.Bb.we.Di;
  } else
    this.Yf == h.Bb.we.Di &&
      (Pb(this.ph, this, this.y),
      (d = this.ph),
      d.yb.splice(Rb(d, c), 0, this));
  this.x = a;
  this.y = c;
};
b.moveBy = function (a, c) {
  this.moveTo(this.x + a, this.y + c);
};
function Sb(a, c) {
  a.moveTo(c.x + a.Rh.x, c.y + a.Rh.y);
}
function R(a, c, d) {
  a.Rh.x = c;
  a.Rh.y = d;
}
function Tb(a) {
  var c = a.pa.x - a.x,
    d = a.pa.y - a.y;
  if (0 != c || 0 != d) {
    a = a.va();
    var e = a.Ba();
    if (!e) throw Error("block is not rendered.");
    e = h.g.$d(e);
    a.Ba().setAttribute(
      "transform",
      "translate(" + (e.x - c) + "," + (e.y - d) + ")"
    );
    Sa(a, -c, -d);
  }
}
b.closest = function (a, c) {
  var d = this.Ju;
  if (d.yb.length) {
    var e = this.y,
      f = this.x;
    this.x = f + c.x;
    this.y = e + c.y;
    var g = Rb(d, this.y);
    c = null;
    for (var k = a, l, m = g - 1; 0 <= m && Math.abs(d.yb[m].y - this.y) <= a; )
      (l = d.yb[m]),
        F(d.zu, this, l, !0, k) && ((c = l), (k = Xa(l, this))),
        m--;
    for (; g < d.yb.length && Math.abs(d.yb[g].y - this.y) <= a; )
      (l = d.yb[g]),
        F(d.zu, this, l, !0, k) && ((c = l), (k = Xa(l, this))),
        g++;
    this.x = f;
    this.y = e;
    a = { connection: c, zn: k };
  } else a = { connection: null, zn: a };
  return a;
};
function Q(a, c) {
  (c && a.Yf == h.Bb.we.Di) ||
    (!c && a.Yf == h.Bb.we.Mt) ||
    a.I.Oc ||
    (c
      ? ((c = a.ph), c.yb.splice(Rb(c, a.y), 0, a), (a.Yf = h.Bb.we.Di))
      : (a.Yf == h.Bb.we.Di && Pb(a.ph, a, a.y), (a.Yf = h.Bb.we.Mt)));
}
function Cb(a) {
  Q(a, !0);
  var c = [];
  if (a.type != h.eb && a.type != h.Ra) return c;
  if ((a = a.va())) {
    if (a.isCollapsed()) {
      var d = [];
      a.M && d.push(a.M);
      a.X && d.push(a.X);
      a.T && d.push(a.T);
    } else d = a.Zd(!0);
    for (var e = 0; e < d.length; e++) c.push.apply(c, Cb(d[e]));
    c.length || (c[0] = a);
  }
  return c;
}
b.qn = function (a) {
  nb(this, a);
};
b.Hp = function (a, c) {
  h.Bb.u.Hp.call(this, a, c);
  a.na && a.Ea();
  c.na && (la(c), c.Ea(), (c.Ba().style.display = "block"));
};
b.jl = function () {
  h.Bb.u.jl.call(this);
  var a = this.va();
  a && (a.Dh(), a.Ea(!1), (a = this.S()), a.na && a.Ea());
};
b.gw = function (a) {
  return Ub(this.Ju, this, a);
};
b.Wd = function (a) {
  h.Bb.u.Wd.call(this, a);
  var c = this.S();
  a = a.S();
  var d = c.na,
    e = a.na;
  d && la(c);
  e && la(a);
  d && e && (this.type == h.Ra || this.type == h.Nd ? a.Ea() : c.Ea());
  if ((c = ha(c, a)))
    (c = c.isVisible()), (a.Ba().style.display = c ? "block" : "none");
};
b.rw = function () {
  !this.isConnected() ||
    (this.pa && F(H(this), this, this.pa, !1)) ||
    (A(G(this) ? this.va() : this.I), this.I.Gc());
};
h.Pj = function () {
  this.Jc = this.Xa = this.pb = null;
  this.type = "marker";
};
function M(a, c) {
  var d = a.Xa;
  a.Xa = c;
  a.Jc && a.Jc.draw(d, a.Xa);
}
h.Pj.prototype.draw = function () {
  this.Jc && this.Jc.draw(this.Xa, this.Xa);
};
h.Pj.prototype.$a = function () {
  this.Jc && this.Jc.$a();
};
h.Pj.prototype.H = function () {
  this.Jc && this.Jc.H();
};
h.Dj = function () {
  h.Dj.u.constructor.call(this);
  this.type = "cursor";
};
h.g.object.U(h.Dj, h.Pj);
b = h.Dj.prototype;
b.next = function () {
  var a = this.Xa;
  if (!a) return null;
  for (
    a = a.next();
    a && a.next() && (a.La() == h.v.types.kd || a.La() == h.v.types.vb);

  )
    a = a.next();
  a && M(this, a);
  return a;
};
b.Hf = function () {
  var a = this.Xa;
  if (!a) return null;
  if (a.La() == h.v.types.md || a.La() == h.v.types.fh) a = a.next();
  (a = a.Hf()) && M(this, a);
  return a;
};
b.Of = function () {
  var a = this.Xa;
  if (!a) return null;
  for (
    a = a.Of();
    a && a.Of() && (a.La() == h.v.types.kd || a.La() == h.v.types.vb);

  )
    a = a.Of();
  a && M(this, a);
  return a;
};
b.Nf = function () {
  var a = this.Xa;
  if (!a) return null;
  (a = a.Nf()) && a.La() == h.v.types.vb && (a = a.Of() || a);
  a && M(this, a);
  return a;
};
b.Xb = function (a) {
  if (this.Xa && this.Xa.La() === h.v.types.Nb && this.Xa.ma.Xb(a)) return !0;
  switch (a.name) {
    case h.navigation.Gb.md:
      return this.Of(), !0;
    case h.navigation.Gb.ht:
      return this.Nf(), !0;
    case h.navigation.Gb.kd:
      return this.next(), !0;
    case h.navigation.Gb.Qs:
      return this.Hf(), !0;
    default:
      return !1;
  }
};
h.Pl = function () {
  h.Pl.u.constructor.call(this);
};
h.g.object.U(h.Pl, h.Dj);
b = h.Pl.prototype;
b.next = function () {
  var a = this.Xa;
  if (!a) return null;
  (a = Vb(this, a, this.Xr)) && M(this, a);
  return a;
};
b.Hf = function () {
  return this.next();
};
b.Of = function () {
  var a = this.Xa;
  if (!a) return null;
  (a = Wb(this, a, this.Xr)) && M(this, a);
  return a;
};
b.Nf = function () {
  return this.Of();
};
function Vb(a, c, d) {
  if (!c) return null;
  var e = c.Hf() || c.next();
  if (d(e)) return e;
  if (e) return Vb(a, e, d);
  c = Xb(a, c.Nf());
  return d(c) ? c : c ? Vb(a, c, d) : null;
}
function Wb(a, c, d) {
  if (!c) return null;
  var e = c.Of();
  e = e ? Yb(a, e) : c.Nf();
  return d(e) ? e : e ? Wb(a, e, d) : null;
}
b.Xr = function (a) {
  var c = !1;
  a = a && a.La();
  if (
    a == h.v.types.fh ||
    a == h.v.types.hd ||
    a == h.v.types.Nb ||
    a == h.v.types.kd ||
    a == h.v.types.md ||
    a == h.v.types.Vb
  )
    c = !0;
  return c;
};
function Xb(a, c) {
  if (!c) return null;
  var d = c.next();
  return d ? d : Xb(a, c.Nf());
}
function Yb(a, c) {
  if (!c.Hf()) return c;
  for (c = c.Hf(); c.next(); ) c = c.next();
  return Yb(a, c);
}
h.To = function () {
  h.To.u.constructor.call(this);
};
h.g.object.U(h.To, h.Pl);
h.To.prototype.Xr = function (a) {
  a && a.La();
  return !1;
};
h.Ta = function (a, c, d) {
  this.oa = h.g.j.R(h.g.F.Wc, {}, null);
  this.oa.Gl = "";
  this.style = Zb(a.lb.$(), null);
  this.qb = a.lb.Zv(this.oa, this.style);
  this.zr = this.na = !1;
  this.B = a;
  this.T = this.X = this.M = null;
  this.Kl = h.g.Eh() && !!a.Xc;
  var e = this.qb.Cb;
  e.ge = this;
  h.D.bk(e);
  h.Ta.u.constructor.call(this, a, c, d);
  this.oa.dataset
    ? (this.oa.dataset.id = this.id)
    : h.g.userAgent.Kd && this.oa.setAttribute("data-id", this.id);
};
h.g.object.U(h.Ta, h.Dc);
h.Ta.prototype.height = 0;
h.Ta.prototype.width = 0;
h.Ta.prototype.Pn = null;
h.Ta.dF = -1;
h.Ta.oE = "TEMP_COLLAPSED_WARNING_";
b = h.Ta.prototype;
b.Dh = function () {
  if (!this.B.na) throw TypeError("Workspace is headless.");
  for (var a = 0, c; (c = this.O[a]); a++) c.ab();
  c = J(this);
  for (a = 0; a < c.length; a++) c[a].wA();
  this.bc();
  I(this.qb, "blocklyDraggable", this.kc());
  a = this.Ba();
  this.B.options.readOnly ||
    this.RA ||
    !a ||
    h.Oa(a, "mousedown", this, this.Yk);
  this.RA = !0;
  a.parentNode || this.B.Lb.appendChild(a);
};
b.select = function () {
  if (this.Ca && this.getParent()) this.getParent().select();
  else if (h.selected != this) {
    var a = null;
    if (h.selected) {
      a = h.selected.id;
      h.h.disable();
      try {
        mb(h.selected);
      } finally {
        h.h.enable();
      }
    }
    a = new h.h.ue(a, this.id, this.B.id);
    h.h.Ja(a);
    h.selected = this;
    Qb(this.qb, !0);
  }
};
function mb(a) {
  if (h.selected == a) {
    var c = new h.h.ue(a.id, null, a.B.id);
    c.Tb = a.B.id;
    h.h.Ja(c);
    h.selected = null;
    Qb(a.qb, !1);
  }
}
b.ce = null;
b.Vd = null;
b.qx = null;
function J(a) {
  var c = [];
  a.ce && c.push(a.ce);
  a.Vd && c.push(a.Vd);
  a.qx && c.push(a.qx);
  return c;
}
b.Gn = function (a) {
  var c = this.Re;
  if (a != c) {
    h.g.j.xl();
    h.Ta.u.Gn.call(this, a);
    h.g.j.yl();
    var d = this.Ba();
    if (!this.B.zq && d) {
      var e = this.Sa();
      a
        ? (a.Ba().appendChild(d),
          (a = this.Sa()),
          Sa(this, a.x - e.x, a.y - e.y))
        : c && (this.B.Lb.appendChild(d), this.translate(e.x, e.y));
      this.bc();
    }
  }
};
b.Sa = function () {
  var a = 0,
    c = 0,
    d = this.Kl ? this.B.Xc.Pb() : null,
    e = this.Ba();
  if (e) {
    do {
      var f = h.g.$d(e);
      a += f.x;
      c += f.y;
      this.Kl &&
        this.B.Xc.He.firstChild == e &&
        ((f = this.B.Xc.kq()), (a += f.x), (c += f.y));
      e = e.parentNode;
    } while (e && e != this.B.Lb && e != d);
  }
  return new h.g.P(a, c);
};
b.moveBy = function (a, c) {
  if (this.Re) throw Error("Block has parent.");
  var d = h.h.isEnabled();
  if (d) var e = new h.h.Aj(this);
  var f = this.Sa();
  this.translate(f.x + a, f.y + c);
  Sa(this, a, c);
  d && (e.Uh(), h.h.Ja(e));
  ma(this.B);
};
b.translate = function (a, c) {
  this.Ba().setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.moveTo = function (a) {
  var c = this.Sa();
  this.moveBy(a.x - c.x, a.y - c.y);
};
b.Rq = function (a) {
  this.Kl
    ? this.B.Xc.bi(a.x, a.y)
    : ((this.oa.Gl = "translate(" + a.x + "," + a.y + ")"),
      this.oa.setAttribute("transform", this.oa.Gl + this.oa.wl));
};
function Mb(a) {
  if (a.B && !a.B.wd() && !a.getParent() && !a.Oc) {
    var c = a.B.ud;
    if (c && c.FD) {
      var d = c.Mr,
        e = d / 2,
        f = a.Sa();
      c = Math.round((f.x - e) / d) * d + e - f.x;
      d = Math.round((f.y - e) / d) * d + e - f.y;
      c = Math.round(c);
      d = Math.round(d);
      (0 == c && 0 == d) || a.moveBy(c, d);
    }
  }
}
function $b(a) {
  var c = a.Sa(),
    d = w(a);
  if (a.J) {
    a = c.x - d.width;
    var e = c.x;
  } else (a = c.x), (e = c.x + d.width);
  return new h.g.Rect(c.y, c.y + d.height, a, e);
}
b.Tk = function () {
  this.qb.Oi = this.B.lb.$();
  for (var a = 0, c; (c = this.O[a]); a++) c.Tk();
};
b.Xh = function (a) {
  this.mh != a &&
    (h.Ta.u.Xh.call(this, a), a ? this.na && this.Ea() : ac(this));
};
function ac(a) {
  for (var c = a.isCollapsed(), d = 0, e; (e = a.O[d]); d++)
    e.name != h.Dc.Cj && e.Cc(!c);
  if (c) {
    e = J(a);
    for (d = 0; (c = e[d]); d++) c.Cc(!1);
    d = a.toString(h.Kx);
    (e = z(a, h.Dc.co))
      ? e.setValue(d)
      : ((e = ia(a, h.Dc.Cj) || Hb(a, h.Dc.Cj)), P(e, new h.Ec(d), h.Dc.co));
  } else a.xr(h.Dc.Cj);
}
b.Yk = function (a) {
  var c = this.B && ib(this.B, a);
  if (c) {
    if (c.cj)
      throw Error(
        "Tried to call gesture.handleBlockStart, but the gesture had already been started."
      );
    c.uj ||
      c.fd ||
      ((c.uj = this),
      this.Oc && this != this.Ac() ? sb(c, this.Ac()) : sb(c, this));
    c.Bd = a;
  }
};
b.showHelp = function () {
  var a = "function" == typeof this.zh ? this.zh() : this.zh;
  a && window.open(a);
};
b.rl = function (a) {
  if (this.B.options.readOnly || !this.contextMenu) var c = null;
  else (c = Ob(h.xa.uc.vb, { block: this })), this.AA && this.AA(c);
  c && c.length && (h.Ka.show(a, c, this.J), (h.Ka.Cm = this));
};
function Sa(a, c, d) {
  if (a.na) {
    for (var e = a.Zd(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
    e = J(a);
    for (f = 0; f < e.length; f++) e[f].rA();
    for (f = 0; f < a.tf.length; f++) Sa(a.tf[f], c, d);
  }
}
b.Og = function (a) {
  if (a) {
    var c = this.Ba();
    c.Gl = "";
    c.wl = "";
    h.Ui = h.Ui.concat(this.Zd(!0));
    h.g.j.Hb(this.oa, "blocklyDragging");
  } else (h.Ui = []), h.g.j.Qc(this.oa, "blocklyDragging");
  for (c = 0; c < this.tf.length; c++) this.tf[c].Og(a);
};
b.Hr = function (a) {
  h.Ta.u.Hr.call(this, a);
  I(this.qb, "blocklyDraggable", a);
};
b.Fr = function (a) {
  h.Ta.u.Fr.call(this, a);
  a = J(this);
  for (var c = 0; c < a.length; c++) tb(a[c]);
};
b.Jr = function (a) {
  h.Ta.u.Jr.call(this, a);
  this.bc();
};
b.Qw = function (a) {
  this.hj != a &&
    (this.hj = a) &&
    (this.Te(this.B.lb.$().to), I(this.qb, "blocklyInsertionMarker", !0));
};
b.Ba = function () {
  return this.oa;
};
b.H = function (a, c) {
  if (this.B) {
    h.D.H();
    h.D.hx(this.qb.Cb);
    h.g.j.xl();
    var d = this.B;
    h.selected == this && (mb(this), Nb(this.B));
    h.Ka.Cm == this && h.Ka.$a();
    this.B.bb && h.navigation.iC(this);
    c && this.na && (A(this, a), h.Wa.KA(this));
    this.na = !1;
    if (this.Pn) {
      for (var e in this.Pn) clearTimeout(this.Pn[e]);
      this.Pn = null;
    }
    c = J(this);
    for (e = 0; e < c.length; e++) c[e].H();
    h.Ta.u.H.call(this, !!a);
    h.g.j.removeNode(this.oa);
    ma(d);
    this.oa = null;
    h.g.j.yl();
  }
};
b.bc = function () {
  this.qb.bc(this);
  for (var a = J(this), c = 0; c < a.length; c++) a[c].bc();
  for (a = 0; (c = this.O[a]); a++)
    for (var d = 0, e; (e = c.Za[d]); d++) e.bc();
};
function la(a) {
  var c = C(a, !1);
  a.bc();
  if (!a.isCollapsed()) {
    a = 0;
    for (var d; (d = c[a]); a++) d.na && la(d);
  }
}
b.eB = function () {
  return this.Vd;
};
b.sj = function (a) {
  if (!h.Comment) throw Error("Missing require for Blockly.Comment");
  this.vf.text != a &&
    (h.Ta.u.sj.call(this, a),
    (a = null != a),
    !!this.Vd == a
      ? this.Vd.iI()
      : (a ? (this.Vd = new h.Comment(this)) : (this.Vd.H(), (this.Vd = null)),
        this.na && (this.Ea(), this.Gc())));
};
b.Rw = function (a) {
  this.ce && this.ce !== a && this.ce.H();
  a && (a.VH(this), (this.ce = a), a.wA());
  this.na && (this.Ea(), this.Gc());
};
b.Rf = function (a) {
  this.isEnabled() != a &&
    (h.Ta.u.Rf.call(this, a), this.na && !Gb(this) && la(this));
};
b.Sf = function (a) {
  this.na && this.qb.ix(a);
};
b.ml = function (a) {
  I(this.qb, "blocklyDraggingDelete", a);
};
b.bq = function () {
  return this.style.nh;
};
b.Te = function (a) {
  h.Ta.u.Te.call(this, a);
  a = bc(this.B.lb.$(), this.sd);
  this.qb.Yh(a.style);
  this.style = a.style;
  this.zl = a.name;
  this.bc();
};
b.Yh = function (a) {
  var c = Zb(this.B.lb.$(), a);
  this.zl = a;
  if (c)
    (this.Me = c.Me),
      this.qb.Yh(c),
      (this.sd = c.nh),
      (this.style = c),
      this.bc();
  else throw Error("Invalid style name: " + a);
};
function Ta(a) {
  do {
    var c = a.Ba(),
      d = c.parentNode,
      e = d.childNodes;
    e[e.length - 1] !== c && d.appendChild(c);
    a = a.getParent();
  } while (a);
}
b.Hn = function (a, c) {
  h.Ta.u.Hn.call(this, a, c);
  this.na && (this.Ea(), this.Gc());
};
b.En = function (a, c) {
  h.Ta.u.En.call(this, a, c);
  this.na && (this.Ea(), this.Gc());
};
b.Fn = function (a, c) {
  h.Ta.u.Fn.call(this, a, c);
  this.na && (this.Ea(), this.Gc());
};
b.Pg = function (a) {
  h.Ta.u.Pg.call(this, a);
  this.na && (this.Ea(), this.Gc());
};
b.xr = function (a, c) {
  a = h.Ta.u.xr.call(this, a, c);
  this.na && (this.Ea(), this.Gc());
  return a;
};
b.kh = function (a, c) {
  a = h.Ta.u.kh.call(this, a, c);
  this.na && (this.Ea(), this.Gc());
  return a;
};
function ka(a, c) {
  a.T && Q(a.T, c);
  a.M && Q(a.M, c);
  if (a.X) {
    Q(a.X, c);
    var d = a.X.va();
    d && ka(d, c);
  }
  if (!a.mh)
    for (d = 0; d < a.O.length; d++) {
      var e = a.O[d].connection;
      e && (Q(e, c), (e = e.va()) && ka(e, c));
    }
}
b.Zd = function (a) {
  var c = [];
  if (a || this.na)
    if (
      (this.M && c.push(this.M),
      this.T && c.push(this.T),
      this.X && c.push(this.X),
      a || !this.mh)
    ) {
      a = 0;
      for (var d; (d = this.O[a]); a++) d.connection && c.push(d.connection);
    }
  return c;
};
b.fn = function () {
  return h.Ta.u.fn.call(this);
};
b.gq = function (a, c) {
  return h.Ta.u.gq.call(this, a, c);
};
b.Sk = function (a) {
  return new h.Bb(this, a);
};
b.Gc = function () {
  if (this.B && !this.B.wd()) {
    var a = this.Ac();
    if (!a.Oc)
      for (var c = this.Zd(!1), d = 0, e; (e = c[d]); d++) {
        e.isConnected() && G(e) && e.va().Gc();
        for (var f = e.gw(h.hc), g = 0, k; (k = f[g]); g++)
          (e.isConnected() && k.isConnected()) ||
            (k.S().Ac() != a && (G(e) ? nb(k, e) : nb(e, k)));
      }
  }
};
function Ua(a) {
  var c = h.h.Pb();
  setTimeout(function () {
    h.h.ra(c);
    Mb(a);
    h.h.ra(!1);
  }, h.Yn / 2);
  setTimeout(function () {
    h.h.ra(c);
    a.Gc();
    h.h.ra(!1);
  }, h.Yn);
}
function Na(a, c, d) {
  (c.type != h.Ra && c.type != h.eb) || a.moveBy(d.x - c.x, d.y - c.y);
}
b.getParent = function () {
  return h.Ta.u.getParent.call(this);
};
b.Ac = function () {
  return h.Ta.u.Ac.call(this);
};
b.Ea = function (a) {
  if (!this.zr) {
    this.zr = !0;
    try {
      this.na = !0;
      h.g.j.xl();
      this.isCollapsed() && ac(this);
      this.B.lb.Ea(this);
      var c = this.Sa();
      this.T && Sb(this.T, c);
      this.M && Sb(this.M, c);
      for (var d = 0; d < this.O.length; d++) {
        var e = this.O[d].connection;
        e && (Sb(e, c), e.isConnected() && Tb(e));
      }
      this.X && (Sb(this.X, c), this.X.isConnected() && Tb(this.X));
      if (!1 !== a) {
        var f = this.getParent();
        f ? f.Ea(!0) : ma(this.B);
      }
      h.g.j.yl();
      this.Wr();
    } finally {
      this.zr = !1;
    }
  }
};
b.Wr = function () {
  this.B.bb && this.qb.nk && this.B.kb().draw();
  this.B.bb && this.qb.Nq && this.B.zc(h.navigation.Mj).draw();
};
b.Qf = function (a) {
  this.qb.Qf(a);
};
b.Tf = function (a) {
  this.qb.Tf(a);
};
function w(a) {
  var c = a.height,
    d = a.width,
    e = t(a);
  e &&
    ((e = w(e)),
    (a = a.B.lb.$().Do),
    (c += e.height - a),
    (d = Math.max(d, e.width)));
  return { height: c, width: d };
}
h.i.Jl = !1;
h.i.register = function (a, c) {
  h.A.register(h.A.Y.RENDERER, a, c);
};
h.i.unregister = function (a) {
  h.A.unregister(h.A.Y.RENDERER, a);
};
h.i.bI = function () {
  h.i.Jl = !0;
};
h.i.cI = function () {
  h.i.Jl = !1;
};
h.i.ab = function (a, c, d) {
  a = new (h.A.$p(h.A.Y.RENDERER, a))(a);
  a.ab(c, d);
  return a;
};
h.ni = function (a) {
  this.yb = [];
  this.zu = a;
};
function cc(a, c, d) {
  if (!a.yb.length) return -1;
  var e = Rb(a, d);
  if (e >= a.yb.length) return -1;
  d = c.y;
  for (var f = e; 0 <= f && a.yb[f].y == d; ) {
    if (a.yb[f] == c) return f;
    f--;
  }
  for (; e < a.yb.length && a.yb[e].y == d; ) {
    if (a.yb[e] == c) return e;
    e++;
  }
  return -1;
}
function Rb(a, c) {
  if (!a.yb.length) return 0;
  for (var d = 0, e = a.yb.length; d < e; ) {
    var f = Math.floor((d + e) / 2);
    if (a.yb[f].y < c) d = f + 1;
    else if (a.yb[f].y > c) e = f;
    else {
      d = f;
      break;
    }
  }
  return d;
}
function Pb(a, c, d) {
  c = cc(a, c, d);
  if (-1 == c) throw Error("Unable to find connection in connectionDB.");
  a.yb.splice(c, 1);
}
function Ub(a, c, d) {
  function e(n) {
    var r = g - f[n].x,
      q = k - f[n].y;
    Math.sqrt(r * r + q * q) <= d && m.push(f[n]);
    return q < d;
  }
  var f = a.yb,
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
h.ni.ab = function (a) {
  var c = [];
  c[h.eb] = new h.ni(a);
  c[h.Md] = new h.ni(a);
  c[h.Ra] = new h.ni(a);
  c[h.Nd] = new h.ni(a);
  return c;
};
h.h.nf = function (a, c) {
  h.h.nf.u.constructor.call(this, c);
  this.Zw = a;
};
h.g.object.U(h.h.nf, h.h.xe);
h.h.nf.prototype.type = h.h.It;
h.h.nf.prototype.qa = function () {
  var a = h.h.nf.u.qa.call(this);
  a.themeName = this.Zw;
  return a;
};
h.h.nf.prototype.aa = function (a) {
  h.h.nf.u.aa.call(this, a);
  this.Zw = a.themeName;
};
h.A.register(h.A.Y.Fb, h.h.It, h.h.nf);
h.h.rf = function (a, c, d, e) {
  h.h.rf.u.constructor.call(this, e);
  this.Eb = a;
  this.ub = c;
  this.scale = d;
};
h.g.object.U(h.h.rf, h.h.xe);
h.h.rf.prototype.type = h.h.St;
h.h.rf.prototype.qa = function () {
  var a = h.h.rf.u.qa.call(this);
  a.viewTop = this.Eb;
  a.viewLeft = this.ub;
  a.scale = this.scale;
  return a;
};
h.h.rf.prototype.aa = function (a) {
  h.h.rf.u.aa.call(this, a);
  this.Eb = a.viewTop;
  this.ub = a.viewLeft;
  this.scale = a.scale;
};
h.A.register(h.A.Y.Fb, h.h.St, h.h.rf);
h.dt = function (a) {
  this.zf = this.td = null;
  this.Nh = {};
  this.G = a;
};
function dc(a, c) {
  var d = a.Nh[c];
  if (d) d.H(), delete a.Nh[c];
  else
    throw Error(
      "Marker with id " +
        c +
        " does not exist. Can only unregistermarkers that exist."
    );
}
b = h.dt.prototype;
b.kb = function () {
  return this.td;
};
b.zc = function (a) {
  return this.Nh[a];
};
b.Qf = function (a) {
  a ? (this.G.Lb.appendChild(a), (this.zf = a)) : (this.zf = null);
};
b.Tf = function (a) {
  a
    ? this.G.Lb &&
      (this.zf ? this.G.Lb.insertBefore(a, this.zf) : this.G.Lb.appendChild(a))
    : (this.Mf = null);
};
b.H = function () {
  for (var a = Object.keys(this.Nh), c = 0, d; (d = a[c]); c++) dc(this, d);
  this.Nh = null;
  this.td && (this.td.H(), (this.td = null));
};
h.Lt = function (a, c) {
  this.G = a;
  this.Wf = c;
  this.Al = [];
  this.Ce = Object.create(null);
};
b = h.Lt.prototype;
b.Ff = function () {
  return this.Wf;
};
b.ql = function (a) {
  var c = this.Wf;
  this.Wf = a;
  if ((a = aa(this.G))) c && h.g.j.Qc(a, c.Yd()), h.g.j.Hb(a, this.Wf.Yd());
  for (c = 0; (a = this.Al[c]); c++) ec(a);
  c = 0;
  a = Object.keys(this.Ce);
  for (var d; (d = a[c]); c++)
    for (var e = 0, f; (f = this.Ce[d][e]); e++)
      f.element.style[f.propertyName] = (this.Wf && y(this.Wf, d)) || "";
  h.cc();
};
b.subscribe = function (a, c, d) {
  this.Ce[c] || (this.Ce[c] = []);
  this.Ce[c].push({ element: a, propertyName: d });
  a.style[d] = (this.Wf && y(this.Wf, c)) || "";
};
b.unsubscribe = function (a) {
  if (a)
    for (var c = Object.keys(this.Ce), d = 0, e; (e = c[d]); d++) {
      for (var f = this.Ce[e], g = f.length - 1; 0 <= g; g--)
        f[g].element === a && f.splice(g, 1);
      this.Ce[e].length || delete this.Ce[e];
    }
};
b.H = function () {
  this.Ce = this.Al = this.Wf = this.Dd = null;
};
h.Fc = function (a, c) {
  h.Fc.u.constructor.call(this, a, c);
  this.Zm = !1;
  this.Yc = Object.create(null);
  this.Uw = this.dl = 0;
  this.Pv = this.dr = null;
};
h.g.object.U(h.Fc, h.re);
h.Fc.Sz = 5;
h.Fc.Tz = 6;
b = h.Fc.prototype;
b.Lp = function (a) {
  this.Pv = this.Ab.options.Qa && this.Ab.options.Qa.lr;
  h.Fc.u.Lp.call(this, a);
  !this.Ym && h.Touch.dn(a) && fc(this, a);
};
b.bk = function (a) {
  this.dr = h.Oa(document, "mousedown", null, this.BB.bind(this), !0);
  this.sn = h.Oa(document, "mousemove", null, this.aj.bind(this), !0);
  this.tn = h.Oa(document, "mouseup", null, this.Tm.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
b.BB = function (a) {
  !this.wd() && h.Touch.dn(a) && (fc(this, a), this.Zm && h.Fg());
};
b.aj = function (a) {
  if (this.wd()) h.Touch.Lr(a) && h.Fc.u.aj.call(this, a);
  else if (this.Zm) {
    if (h.Touch.dn(a)) {
      this.Yc[h.Touch.Qm(a)] = gc(this, a);
      var c = Object.keys(this.Yc);
      if (this.Pv && 2 === c.length) {
        c = Object.keys(this.Yc);
        c = h.g.P.Kp(this.Yc[c[0]], this.Yc[c[1]]) / this.Uw;
        if (0 < this.dl && Infinity > this.dl) {
          var d = c - this.dl;
          d = 0 < d ? d * h.Fc.Sz : d * h.Fc.Tz;
          var e = this.Ab,
            f = h.g.Xk(a, x(e), Aa(e));
          e.zoom(f.x, f.y, d);
        }
        this.dl = c;
        a.preventDefault();
      } else h.Fc.u.aj.call(this, a);
    }
    h.Fg();
  } else h.Fc.u.aj.call(this, a);
};
b.Tm = function (a) {
  if (h.Touch.dn(a) && !this.wd()) {
    var c = h.Touch.Qm(a);
    this.Yc[c] && delete this.Yc[c];
    2 > Object.keys(this.Yc).length &&
      ((this.Yc = Object.create(null)), (this.dl = 0));
  }
  !this.Zm || this.wd()
    ? h.Touch.Lr(a) && h.Fc.u.Tm.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.H());
};
b.H = function () {
  h.Fc.u.H.call(this);
  this.dr && h.tb(this.dr);
};
function fc(a, c) {
  a.Yc[h.Touch.Qm(c)] = gc(a, c);
  var d = Object.keys(a.Yc);
  2 == d.length &&
    ((a.Uw = h.g.P.Kp(a.Yc[d[0]], a.Yc[d[1]])),
    (a.Zm = !0),
    c.preventDefault());
}
function gc(a, c) {
  return a.Ab
    ? new h.g.P(
        c.pageX ? c.pageX : c.changedTouches[0].pageX,
        c.pageY ? c.pageY : c.changedTouches[0].pageY
      )
    : null;
}
h.$t = function (a) {
  this.ir = a;
  this.Sj = Object.create(null);
};
b = h.$t.prototype;
b.Cq = null;
b.H = function () {
  this.Sj = this.ir = null;
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
    e && e.play && (this.Sj[c] = e);
  }
};
b.preload = function () {
  for (var a in this.Sj) {
    var c = this.Sj[a];
    c.volume = 0.01;
    var d = c.play();
    void 0 !== d ? d.then(c.pause).catch(function () {}) : c.pause();
    if (h.g.userAgent.Ij || h.g.userAgent.Vs) break;
  }
};
b.play = function (a, c) {
  var d = this.Sj[a];
  d
    ? ((a = new Date()),
      (null != this.Cq && a - this.Cq < h.xz) ||
        ((this.Cq = a),
        (d = h.g.userAgent.Ij || h.g.userAgent.Nl ? d : d.cloneNode()),
        (d.volume = void 0 === c ? 1 : c),
        d.play()))
    : this.ir && this.ir.ze.play(a, c);
};
h.Va = function (a, c, d) {
  h.Va.u.constructor.call(this, a);
  this.Je = a.Je || h.Va.rB;
  this.Dn = a.Dn || h.Va.AD;
  this.Bm = h.ni.ab(this.fk);
  c && (this.Xc = c);
  d && (this.gi = d);
  this.On = !!this.gi && h.g.Eh();
  this.ze = new h.$t(a.Pc);
  this.ud = this.options.nq ? new h.bh(this.options.nq, a.zv) : null;
  this.zd = new h.dt(this);
  this.bx = {};
  this.Zu = {};
  h.ka && h.ka.uh && hc(this, h.Nt, h.ka.uh);
  h.Ut && h.Ut.uh && hc(this, h.Mz, h.Ut.uh);
  h.Ma && h.Ma.uh && (hc(this, h.nt, h.Ma.uh), eb(this, h.Ma.kC));
  this.Vc = this.options.Pc
    ? this.options.Pc.Vc
    : new h.Lt(this, this.options.ND || h.pf.cg);
  this.Vc.Al.push(this);
  this.lb = h.i.ab(this.options.Kw || "geras", this.Ff(), this.options.Lw);
  this.jp = null;
  this.bb = !1;
  this.Mn = [];
};
h.g.object.U(h.Va, h.mb);
b = h.Va.prototype;
b.Bn = null;
b.na = !0;
b.Ok = !0;
b.zg = !1;
b.$m = !1;
b.Cr = !0;
b.scrollX = 0;
b.scrollY = 0;
b.Uu = null;
b.scale = 1;
b.pw = 1;
b.qw = 0;
b.mw = 0;
b.dc = null;
b.zb = null;
b.la = null;
b.ta = null;
b.jc = null;
b.Xc = null;
b.gi = null;
b.On = !1;
b.Xm = !1;
b.xq = null;
b.Vv = null;
b.Ln = null;
b.Nv = null;
b.yq = !0;
b.Qf = function (a) {
  this.zd.Qf(a);
};
b.Tf = function (a) {
  this.zd.Tf(a);
};
b.zc = function (a) {
  return this.zd ? this.zd.zc(a) : null;
};
b.kb = function () {
  return this.zd ? this.zd.kb() : null;
};
b.Ff = function () {
  return this.Vc.Ff();
};
b.ql = function (a) {
  a || (a = h.pf.cg);
  this.Vc.ql(a);
};
function ec(a) {
  a.oa && a.lb.qr(a.oa, a.Ff());
  ic(
    K(a, !1).filter(function (c) {
      return void 0 !== c.zl;
    })
  );
  jc(a);
  a.ta && ec(a.ta);
  a.isVisible() && a.Cc(!0);
  a = new h.h.nf(a.Ff().name, a.id);
  h.h.Ja(a);
}
function ic(a) {
  for (var c = 0, d; (d = a[c]); c++) {
    var e = d.zl;
    e && (d.Yh(e), d.ce && d.ce.hI());
  }
}
function Aa(a) {
  if (a.yq) {
    var c = x(a).getScreenCTM();
    c && ((a.Nv = c.inverse()), (a.yq = !1));
  }
  return a.Nv;
}
b.Il = function () {
  this.yq = !0;
};
b.isVisible = function () {
  return this.Ok;
};
function Ia(a, c) {
  var d = 0,
    e = 0,
    f = 1;
  if (h.g.j.containsNode(a.Lb, c) || h.g.j.containsNode(a.Vf, c)) f = a.scale;
  do {
    var g = h.g.$d(c);
    if (c == a.Lb || c == a.Vf) f = 1;
    d += g.x * f;
    e += g.y * f;
    c = c.parentNode;
  } while (c && c != x(a));
  return new h.g.P(d, e);
}
function aa(a) {
  if (!a.xq)
    for (var c = a.oa; c; ) {
      if (
        -1 !=
        (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
      ) {
        a.xq = c;
        break;
      }
      c = c.parentNode;
    }
  return a.xq;
}
b.jb = function (a) {
  this.oa = h.g.j.R(h.g.F.Wc, { class: "blocklyWorkspace" }, null);
  a &&
    ((this.Uf = h.g.j.R(
      h.g.F.kf,
      { height: "100%", width: "100%", class: a },
      this.oa
    )),
    "blocklyMainBackground" == a && this.ud
      ? (this.Uf.style.fill = "url(#" + this.ud.$i.id + ")")
      : this.Vc.subscribe(this.Uf, "workspaceBackgroundColour", "fill"));
  this.Lb = h.g.j.R(h.g.F.Wc, { class: "blocklyBlockCanvas" }, this.oa);
  this.Vf = h.g.j.R(h.g.F.Wc, { class: "blocklyBubbleCanvas" }, this.oa);
  this.zg ||
    (h.Oa(this.oa, "mousedown", this, this.Yk, !1, !0),
    h.Oa(this.oa, "wheel", this, this.yC));
  if (this.options.Dk) {
    if (!h.xG) throw Error("Missing require for Blockly.Toolbox");
    this.ta = new (h.A.ev(h.A.Y.Po, this.options))(this);
  }
  this.ud && this.ud.update(this.scale);
  kc(this);
  a = this.zd;
  var c = new h.Dj();
  a.td && a.td.Jc && a.td.Jc.H();
  a.td = c;
  a.td &&
    ((c = a.td),
    (c = new h.i.gf(a.G, a.G.lb.$(), c)),
    (a.td.Jc = c),
    a.Qf(a.td.Jc.jb()));
  a = this.zd;
  c = h.navigation.Mj;
  var d = new h.Pj();
  a.Nh[c] && dc(a, c);
  var e = new h.i.gf(a.G, a.G.lb.$(), d);
  d.Jc = e;
  a.Tf(d.Jc.jb());
  a.Nh[c] = d;
  this.lb.jb(this.oa, this.Ff());
  return this.oa;
};
b.H = function () {
  this.na = !1;
  this.jc && this.jc.cancel();
  this.oa && (h.g.j.removeNode(this.oa), (this.oa = null));
  this.Vf = this.Lb = null;
  this.ta && (this.ta.H(), (this.ta = null));
  this.la && (this.la.H(), (this.la = null));
  this.dc && (this.dc.H(), (this.dc = null));
  this.zb && (this.zb.H(), (this.zb = null));
  this.ji && (this.ji.H(), (this.ji = null));
  this.ze && (this.ze.H(), (this.ze = null));
  this.ud && (this.ud.H(), (this.ud = null));
  this.lb.H();
  this.zd && (this.zd.H(), (this.zd = null));
  h.Va.u.H.call(this);
  if (this.Vc) {
    var a = this.Vc,
      c = a.Al.indexOf(this);
    if (0 > c)
      throw Error(
        "Cannot unsubscribe a workspace that hasn't been subscribed."
      );
    a.Al.splice(c, 1);
    this.Vc.unsubscribe(this.Uf);
    this.options.Pc || (this.Vc.H(), (this.Vc = null));
  }
  this.Zu = this.bx = this.Bm = null;
  this.options.Pc ||
    ((a = x(this)) && a.parentNode && h.g.j.removeNode(a.parentNode));
  this.Bn && (h.tb(this.Bn), (this.Bn = null));
};
b.nj = function (a, c) {
  return new h.Ta(this, a, c);
};
function lc(a) {
  if (!h.Jz) throw Error("Missing require for Blockly.Trashcan");
  a.dc = new h.Jz(a);
  var c = a.dc.jb();
  a.oa.insertBefore(c, a.Lb);
}
function mc(a) {
  if (!h.Uz) throw Error("Missing require for Blockly.ZoomControls");
  a.ji = new h.Uz(a);
  var c = a.ji.jb();
  a.oa.appendChild(c);
}
function nc(a) {
  var c = h.g.F.Tj,
    d = new h.ld({
      parentWorkspace: a,
      rtl: a.J,
      oneBasedIndex: a.options.zC,
      horizontalLayout: a.Gk,
      renderer: a.options.Kw,
      rendererOverrides: a.options.Lw,
    });
  d.Yb = a.options.Yb;
  if (a.Gk) {
    if (!h.Iy) throw Error("Missing require for Blockly.HorizontalFlyout");
    a.la = new h.Iy(d);
  } else {
    if (!h.Nz) throw Error("Missing require for Blockly.VerticalFlyout");
    a.la = new h.Nz(d);
  }
  a.la.ap = !1;
  a.la.Bk().Cc(!0);
  return a.la.jb(c);
}
function L(a, c) {
  return a.la || c ? a.la : a.ta ? L(a.ta) : null;
}
function ma(a) {
  a.Cr && a.na && (a.zb && a.zb.resize(), a.Il());
}
b.resize = function () {
  this.ta && this.ta.position();
  this.la && this.la.position();
  this.dc && this.dc.position();
  this.ji && this.ji.position();
  this.zb && this.zb.resize();
  this.Il();
  kc(this);
};
function pb(a) {
  var c = h.g.kB();
  h.g.P.Cf(a.Vv, c) || ((a.Vv = c), a.Il(), kc(a));
}
function x(a) {
  if (!a.jp)
    for (var c = a.oa; c; ) {
      if ("svg" == c.tagName) {
        a.jp = c;
        break;
      }
      c = c.parentNode;
    }
  return a.jp;
}
function pa(a) {
  if (h.h.isEnabled()) {
    var c = a.scale,
      d = -a.scrollY,
      e = -a.scrollX;
    (c == a.pw && 1 > Math.abs(d - a.qw) && 1 > Math.abs(e - a.mw)) ||
      ((a.pw = c),
      (a.qw = d),
      (a.mw = e),
      (a = new h.h.rf(d, e, c, a.id)),
      h.h.Ja(a));
  }
}
b.translate = function (a, c) {
  if (this.On && this.Xm) this.gi.bi(a, c);
  else {
    var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
    this.Lb.setAttribute("transform", d);
    this.Vf.setAttribute("transform", d);
  }
  if (this.Xc) {
    d = this.Xc;
    var e = this.scale;
    d.Ng = e;
    d.He.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")"
    );
  }
  this.ud && this.ud.moveTo(a, c);
  pa(this);
};
function Ca(a) {
  if (a.On) {
    a.Xm = !1;
    var c = a.gi.kq();
    a.gi.vm(a.oa);
    c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
    a.Lb.setAttribute("transform", c);
    a.Vf.setAttribute("transform", c);
  }
}
function Ba(a) {
  if (a.On && !a.Xm) {
    a.Xm = !0;
    var c = a.Lb.previousSibling,
      d = parseInt(x(a).getAttribute("width"), 10),
      e = parseInt(x(a).getAttribute("height"), 10),
      f = h.g.$d(a.Lb),
      g = a.gi,
      k = a.Lb,
      l = a.Vf,
      m = a.scale;
    if (g.ib.childNodes.length) throw Error("Already dragging a block.");
    g.pr = c;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    g.ib.setAttribute("width", d);
    g.ib.setAttribute("height", e);
    g.ib.appendChild(k);
    g.ib.appendChild(l);
    g.ib.style.display = "block";
    a.gi.bi(f.x, f.y);
  }
}
b.Sm = function () {
  var a = this.Je();
  return a ? a.Sb / this.scale : 0;
};
b.Cc = function (a) {
  this.Ok = a;
  if (this.oa)
    if (
      (this.zb && this.zb.ll(a),
      L(this) && L(this).ll(a),
      (x(this).style.display = a ? "block" : "none"),
      this.ta && this.ta.Cc(a),
      a)
    ) {
      a = K(this, !1);
      for (var c = a.length - 1; 0 <= c; c--) a[c].Tk();
      this.Ea();
      this.ta && this.ta.position();
    } else h.cc(!0);
};
b.Ea = function () {
  for (var a = K(this, !1), c = a.length - 1; 0 <= c; c--) a[c].Ea(!1);
  if (this.jc) for (a = this.jc.Xi(), c = 0; c < a.length; c++) a[c].Ea(!1);
  c = this.zd;
  c.G.bb && c.zf && c.G.kb().draw();
};
b.wn = function (a) {
  if (
    this.na &&
    a.tagName &&
    !(
      a.getElementsByTagName("block").length >=
      (isNaN(this.options.Uk) ? Infinity : this.options.Uk - K(this, !1).length)
    )
  )
    if ((this.jc && this.jc.cancel(), "comment" == a.tagName.toLowerCase())) {
      h.h.disable();
      try {
        h.Ei.setValue(a.textContent);
        var c = void 0;
        var d = parseInt(a.getAttribute("x"), 10),
          e = parseInt(a.getAttribute("y"), 10);
        isNaN(d) || isNaN(e) || (this.J && (d = -d), c.moveBy(d + 50, e + 50));
      } finally {
        h.h.enable();
      }
      h.h.isEnabled() && h.au.dH(c);
      c.select();
    } else
      a: {
        h.h.disable();
        try {
          var f = h.N.Jm(a, this),
            g = this.zc(h.navigation.Mj).Xa;
          if (this.bb && g && g.ej) {
            h.navigation.Mv(f, g.ma);
            break a;
          }
          var k = parseInt(a.getAttribute("x"), 10),
            l = parseInt(a.getAttribute("y"), 10);
          if (!isNaN(k) && !isNaN(l)) {
            this.J && (k = -k);
            do {
              a = !1;
              var m = K(this, !1);
              c = 0;
              for (var n; (n = m[c]); c++) {
                var r = n.Sa();
                if (1 >= Math.abs(k - r.x) && 1 >= Math.abs(l - r.y)) {
                  a = !0;
                  break;
                }
              }
              if (!a) {
                var q = f.Zd(!1);
                c = 0;
                for (var u; (u = q[c]); c++)
                  if (u.closest(h.hc, new h.g.P(k, l)).connection) {
                    a = !0;
                    break;
                  }
              }
              a && ((k = this.J ? k - h.hc : k + h.hc), (l += 2 * h.hc));
            } while (a);
            f.moveBy(k, l);
          }
        } finally {
          h.h.enable();
        }
        h.h.isEnabled() && !f.Ca && h.h.Ja(new h.h.Ql(f));
        f.select();
      }
};
function jc(a) {
  (a = a.zg ? a.Ln : a) && !a.jc && a.ta && L(a.ta) && a.ta.LH();
}
b.Vh = function (a, c) {
  h.Va.u.Vh.call(this, a, c);
  jc(this);
};
b.Si = function (a) {
  h.Va.u.Si.call(this, a);
  jc(this);
};
b.Xd = function (a, c, d) {
  a = h.Va.u.Xd.call(this, a, c, d);
  jc(this);
  return a;
};
function kc(a) {
  a.Lu = a.dc && a.oa.parentNode ? a.dc.aq() : null;
  a.Ku = a.la
    ? a.la.aq()
    : a.ta && "function" == typeof a.ta.aq
    ? a.ta.aq()
    : null;
}
function Qa(a, c) {
  return a.Lu && a.Lu.contains(c.clientX, c.clientY)
    ? h.lo
    : a.Ku && a.Ku.contains(c.clientX, c.clientY)
    ? h.zs
    : h.ys;
}
b.Yk = function (a) {
  var c = ib(this, a);
  if (c) {
    if (c.cj)
      throw Error(
        "Tried to call gesture.handleWsStart, but the gesture had already been started."
      );
    c.Ab || (c.Ab = this);
    c.Bd = a;
    c.Lp(a);
    c.Ab.bb && h.navigation.tj(h.navigation.Pd);
  }
};
b.Or = function (a, c) {
  a = h.g.Xk(a, x(this), Aa(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.Uu = h.g.P.Fm(c, a);
};
b.wd = function () {
  return null != this.jc && this.jc.wd();
};
function oc(a) {
  return (
    (a.options.Rb && a.options.Rb.scrollbars) ||
    (a.options.Rb && a.options.Rb.Vg) ||
    (a.options.Rb && a.options.Rb.Bf) ||
    (a.options.Qa && a.options.Qa.controls) ||
    (a.options.Qa && a.options.Qa.Vg) ||
    (a.options.Qa && a.options.Qa.lr)
  );
}
b.kc = function () {
  return (
    (this.options.Rb && this.options.Rb.scrollbars) ||
    (this.options.Rb && this.options.Rb.Vg) ||
    (this.options.Rb && this.options.Rb.Bf) ||
    (this.options.Qa && this.options.Qa.Vg) ||
    (this.options.Qa && this.options.Qa.lr)
  );
};
b.yC = function (a) {
  if (h.re.Ch()) a.preventDefault(), a.stopPropagation();
  else {
    var c = this.options.Qa && this.options.Qa.Vg,
      d = this.options.Rb && this.options.Rb.Vg;
    if (c || d) {
      var e = h.g.pB(a);
      !c || (!a.ctrlKey && d)
        ? ((c = this.scrollX - e.x),
          (d = this.scrollY - e.y),
          a.shiftKey && !e.x && ((c = this.scrollX - e.y), (d = this.scrollY)),
          this.scroll(c, d))
        : ((e = -e.y / 50),
          (c = h.g.Xk(a, x(this), Aa(this))),
          this.zoom(c.x, c.y, e));
      a.preventDefault();
    }
  }
};
function ja(a) {
  a = [].concat(a.Mn);
  if (!a.length) return new h.g.Rect(0, 0, 0, 0);
  for (var c = $b(a[0]), d = 1; d < a.length; d++) {
    var e = $b(a[d]);
    e.top < c.top && (c.top = e.top);
    e.bottom > c.bottom && (c.bottom = e.bottom);
    e.left < c.left && (c.left = e.left);
    e.right > c.right && (c.right = e.right);
  }
  return c;
}
b.rl = function (a) {
  if (!this.options.readOnly && !this.zg) {
    var c = Ob(h.xa.uc.Vb, { B: this });
    this.sA && this.sA(c, a);
    h.Ka.show(a, c, this.J);
  }
};
function da(a) {
  if (a.options.Pc) da(a.options.Pc);
  else {
    h.Rk = a;
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
  d = Math.pow(this.options.Qa.tD, d);
  var e = this.scale * d;
  if (this.scale != e) {
    e > this.options.Qa.Vk
      ? (d = this.options.Qa.Vk / this.scale)
      : e < this.options.Qa.Wk && (d = this.options.Qa.Wk / this.scale);
    var f = this.Lb.getCTM(),
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
  this.options.Qa.Vk && a > this.options.Qa.Vk
    ? (a = this.options.Qa.Vk)
    : this.options.Qa.Wk && a < this.options.Qa.Wk && (a = this.options.Qa.Wk);
  this.scale = a;
  h.cc(!1);
  this.la && (this.la.KH(), kc(this));
  this.ud && this.ud.update(this.scale);
  a = this.Je();
  this.scrollX -= a.nd;
  this.scrollY -= a.od;
  a.ub += a.nd;
  a.Eb += a.od;
  this.scroll(this.scrollX, this.scrollY);
  this.zb &&
    (this.la
      ? (sa(this.zb.vd, a), ta(this.zb.Hd, a))
      : (va(this.zb.vd, a), ya(this.zb.Hd, a)));
};
b.scroll = function (a, c) {
  h.cc(!0);
  var d = this.Je(),
    e = d.xf + d.Hc - d.Sb,
    f = d.wf + d.Ic - d.ec;
  a = Math.min(a, -d.Hc);
  c = Math.min(c, -d.Ic);
  a = Math.max(a, -e);
  c = Math.max(c, -f);
  this.scrollX = a;
  this.scrollY = c;
  this.zb &&
    (D(this.zb.vd, -(a + d.Hc) * this.zb.vd.ratio),
    D(this.zb.Hd, -(c + d.Ic) * this.zb.Hd.ratio));
  a += d.nd;
  c += d.od;
  this.translate(a, c);
};
h.Va.hv = function (a) {
  var c = 0,
    d = 0;
  a && ((c = a.Sm()), (d = a.kH()));
  return new h.g.Qd(c, d);
};
h.Va.hB = function (a, c) {
  return oc(a) ? h.Va.gB(a, c) : h.Va.fv(a);
};
h.Va.fv = function (a) {
  var c = ja(a),
    d = a.scale;
  a = c.top * d;
  var e = c.bottom * d,
    f = c.left * d;
  c = c.right * d;
  return { top: a, bottom: e, left: f, right: c, width: c - f, height: e - a };
};
h.Va.gB = function (a, c) {
  a = h.Va.fv(a);
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
h.Va.rB = function () {
  var a = h.Va.hv(this.ta),
    c = h.Va.hv(this.la),
    d = h.Xw(x(this)),
    e = { height: d.height, width: d.width };
  if (this.ta)
    if (this.Yb == h.Xj || this.Yb == h.Qo) e.height -= a.height;
    else {
      if (this.Yb == h.Wj || this.Yb == h.Ro) e.width -= a.width;
    }
  else if (this.la)
    if (this.Yb == h.Xj || this.Yb == h.Qo) e.height -= c.height;
    else if (this.Yb == h.Wj || this.Yb == h.Ro) e.width -= c.width;
  var f = h.Va.hB(this, e),
    g = 0;
  this.ta && this.Yb == h.Wj
    ? (g = a.width)
    : this.la && this.Yb == h.Wj && (g = c.width);
  var k = 0;
  this.ta && this.Yb == h.Xj
    ? (k = a.height)
    : this.la && this.Yb == h.Xj && (k = c.height);
  return {
    wf: f.height,
    xf: f.width,
    Ic: f.top,
    Hc: f.left,
    ec: e.height,
    Sb: e.width,
    Eb: -this.scrollY,
    ub: -this.scrollX,
    od: k,
    nd: g,
    dI: d.height,
    eI: d.width,
    gI: a.width,
    fI: a.height,
    Yb: this.Yb,
    gH: c.width,
    fH: c.height,
  };
};
h.Va.AD = function (a) {
  var c = this.Je();
  "number" == typeof a.x && (this.scrollX = -c.xf * a.x - c.Hc);
  "number" == typeof a.y && (this.scrollY = -c.wf * a.y - c.Ic);
  this.translate(this.scrollX + c.nd, this.scrollY + c.od);
};
b = h.Va.prototype;
b.Lc = function (a) {
  return h.Va.u.Lc.call(this, a);
};
b.Qb = function (a) {
  return h.Va.u.Qb.call(this, a);
};
b.nm = function (a) {
  this.Mn.push(a);
  h.Va.u.nm.call(this, a);
};
b.An = function (a) {
  h.g.ak(this.Mn, a);
  h.Va.u.An.call(this, a);
};
b.Tc = function (a) {
  var c = !this.Cr && a;
  this.Cr = a;
  c && ma(this);
};
b.clear = function () {
  this.Tc(!1);
  h.Va.u.clear.call(this);
  this.Mn = [];
  this.Tc(!0);
};
function pc(a, c) {
  if ("function" != typeof c)
    throw TypeError("Button callbacks must be functions.");
  a.Zu.CREATE_VARIABLE = c;
}
function hc(a, c, d) {
  if ("function" != typeof d)
    throw TypeError("Toolbox category callbacks must be functions.");
  a.bx[c] = d;
}
function ib(a, c) {
  var d =
      "mousedown" == c.type ||
      "touchstart" == c.type ||
      "pointerdown" == c.type,
    e = a.jc;
  return e
    ? d && e.cj
      ? (console.warn("Tried to start the same gesture twice."),
        e.cancel(),
        null)
      : e
    : d
    ? ((a.jc = new h.Fc(c, a)), a.jc)
    : null;
}
function Nb(a) {
  a.jc && a.jc.cancel();
}
h.xg = function (a, c) {
  h.gA();
  "string" == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a));
  if (!a || !h.g.j.containsNode(document, a))
    throw Error("Error: container is not in current document.");
  c = new h.ld(c || {});
  var d = document.createElement("div");
  d.className = "injectionDiv";
  d.tabIndex = 0;
  h.g.wb.tj(d, h.g.wb.State.Sy, h.K.WORKSPACE_ARIA_LABEL);
  a.appendChild(d);
  a = h.jk(d, c);
  var e = new h.os(d),
    f = new h.bu(d),
    g = h.xA(a, c, e, f);
  h.MB(g);
  h.Rk = g;
  h.Dl(g);
  d.addEventListener("focusin", function () {
    h.Rk = g;
  });
  return g;
};
h.jk = function (a, c) {
  a.setAttribute("dir", "LTR");
  h.Id.xg(c.CB, c.yw);
  a = h.g.j.R(
    h.g.F.Tj,
    {
      xmlns: h.g.j.jm,
      "xmlns:html": h.g.j.oo,
      "xmlns:xlink": h.g.j.jh,
      version: "1.1",
      class: "blocklySvg",
      tabindex: "0",
    },
    a
  );
  var d = h.g.j.R(h.g.F.xs, {}, a);
  c.nq = h.bh.jb(String(Math.random()).substring(2), c.zv, d);
  return a;
};
h.xA = function (a, c, d, e) {
  c.Pc = null;
  var f = new h.Va(c, d, e);
  c = f.options;
  f.scale = c.Qa.JD;
  a.appendChild(f.jb("blocklyMainBackground"));
  h.g.j.Hb(aa(f), f.lb.Yd());
  h.g.j.Hb(aa(f), f.Ff().Yd());
  !c.Dk && c.Jh && ((d = nc(f)), h.g.j.Ik(d, a));
  c.Dv && lc(f);
  c.Qa && c.Qa.controls && mc(f);
  f.Vc.subscribe(a, "workspaceBackgroundColour", "background-color");
  f.translate(0, 0);
  c.readOnly ||
    f.kc() ||
    eb(f, function (g) {
      if (!f.wd() && !f.kc() && -1 != h.h.Hx.indexOf(g.type)) {
        var k = Object.create(null),
          l = f.Je(),
          m = f.scale;
        k.J = f.J;
        k.ub = l.ub / m;
        k.Eb = l.Eb / m;
        k.px = (l.ub + l.Sb) / m;
        k.ox = (l.Eb + l.ec) / m;
        oc(f)
          ? ((l = ja(f)),
            (k.Hc = l.left),
            (k.Ic = l.top),
            (k.Eu = l.right),
            (k.Bu = l.bottom))
          : ((k.Hc = l.Hc / m),
            (k.Ic = l.Ic / m),
            (k.Eu = (l.Hc + l.xf) / m),
            (k.Bu = (l.Ic + l.wf) / m));
        if (k.Ic < k.Eb || k.Bu > k.ox || k.Hc < k.ub || k.Eu > k.px) {
          l = null;
          g && ((l = h.h.Pb()), h.h.ra(g.group));
          switch (g.type) {
            case h.h.Wn:
            case h.h.ks:
              var n = f.Lc(g.fb);
              n && (n = n.Ac());
              break;
            case h.h.Tl:
            case h.h.Ul:
              n = f.zm[g.Be] || null;
          }
          if (n) {
            m = $b(n);
            m.height = m.bottom - m.top;
            m.width = m.right - m.left;
            var r = k.Eb,
              q = k.ox - m.height;
            q = Math.max(r, q);
            r = h.g.mc.ck(r, m.top, q) - m.top;
            q = k.ub;
            var u = k.px - m.width;
            k.J ? (q = Math.min(u, q)) : (u = Math.max(q, u));
            n.moveBy(h.g.mc.ck(q, m.left, u) - m.left, r);
          }
          g &&
            (!g.group &&
              n &&
              console.warn(
                "Moved object in bounds but there was no event group. This may break undo."
              ),
            null !== l && h.h.ra(l));
        }
      }
    });
  h.Dl(f);
  h.W.jb();
  h.C.jb();
  h.D.jb();
  return f;
};
h.MB = function (a) {
  var c = a.options,
    d = x(a);
  h.Oa(d.parentNode, "contextmenu", null, function (f) {
    h.g.an(f) || f.preventDefault();
  });
  d = h.Oa(window, "resize", null, function () {
    h.cc(!0);
    h.Dl(a);
  });
  a.Bn = d;
  h.xg.aA();
  if (c.Jh) {
    d = a.ta;
    var e = L(a, !0);
    d
      ? d.ab()
      : e && (e.ab(a), e.show(c.Jh), "function" == typeof e.wD && e.wD());
  }
  d = h.Na.Sc;
  c.Dv && (d = a.dc.ab(d));
  c.Qa && c.Qa.controls && a.ji.ab(d);
  c.Rb && c.Rb.scrollbars
    ? ((a.zb = new h.Uj(a)), a.zb.resize())
    : a.Dn({ x: 0.5, y: 0.5 });
  c.EB && h.xg.ZB(c.yw, a);
};
h.xg.aA = function () {
  h.LA ||
    (h.Oa(document, "scroll", null, function () {
      for (var a = h.mb.getAll(), c = 0, d; (d = a[c]); c++) d.Il && d.Il();
    }),
    h.Oa(document, "keydown", null, h.Zq),
    h.lh(document, "touchend", h.Fg),
    h.lh(document, "touchcancel", h.Fg),
    h.g.userAgent.Ij &&
      h.Oa(window, "orientationchange", document, function () {
        h.Dl(h.sg());
      }));
  h.LA = !0;
};
h.xg.ZB = function (a, c) {
  function d() {
    for (; f.length; ) h.tb(f.pop());
    e.preload();
  }
  var e = c.ze;
  e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
  e.load(
    [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"],
    "disconnect"
  );
  e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
  var f = [];
  f.push(h.Oa(document, "mousemove", null, d, !0));
  f.push(h.Oa(document, "touchstart", null, d, !0));
};
h.eh = function (a) {
  this.pD = Object.create(null);
  if (a) {
    a = a.split(",");
    for (var c = 0; c < a.length; c++) this.pD[a[c]] = !0;
  }
  this.reset();
};
h.eh.uE = "DEVELOPER_VARIABLE";
h.eh.prototype.reset = function () {
  this.ph = Object.create(null);
  Object.create(null);
  this.cb = null;
};
h.eh.Cf = function (a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
h.Ma = {};
h.Ma.iz = h.nt;
h.Ma.Ux = "x";
h.Ma.Xz = function (a) {
  var c = $a(a, "procedures_defnoreturn").map(function (d) {
    return d.Yi();
  });
  a = $a(a, "procedures_defreturn").map(function (d) {
    return d.Yi();
  });
  c.sort(h.Ma.Gw);
  a.sort(h.Ma.Gw);
  return [c, a];
};
h.Ma.Gw = function (a, c) {
  return a[0].toLowerCase().localeCompare(c[0].toLowerCase());
};
h.Ma.UA = function (a, c) {
  if (c.Oc) return a;
  for (a = a || h.K.UNNAMED_KEY || "unnamed"; !h.Ma.RB(a, c.B, c); ) {
    var d = a.match(/^(.*?)(\d+)$/);
    a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2";
  }
  return a;
};
h.Ma.RB = function (a, c, d) {
  return !h.Ma.TB(a, c, d);
};
h.Ma.TB = function (a, c, d) {
  c = K(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e] != d && c[e].Yi) {
      var f = c[e].Yi();
      if (h.eh.Cf(f[0], a)) return !0;
    }
  return !1;
};
h.Ma.PH = function (a) {
  a = a.trim();
  var c = h.Ma.UA(a, this.S()),
    d = this.getValue();
  if (d != a && d != c) {
    a = K(this.S().B, !1);
    for (var e = 0; e < a.length; e++) a[e].oD && a[e].oD(d, c);
  }
  return c;
};
h.Ma.uh = function (a) {
  function c(g, k) {
    for (var l = 0; l < g.length; l++) {
      var m = g[l][0],
        n = g[l][1],
        r = h.g.xml.createElement("block");
      r.setAttribute("type", k);
      r.setAttribute("gap", 16);
      var q = h.g.xml.createElement("mutation");
      q.setAttribute("name", m);
      r.appendChild(q);
      for (m = 0; m < n.length; m++) {
        var u = h.g.xml.createElement("arg");
        u.setAttribute("name", n[m]);
        q.appendChild(u);
      }
      d.push(r);
    }
  }
  var d = [];
  if (h.fc.procedures_defnoreturn) {
    var e = h.g.xml.createElement("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = h.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    f.appendChild(h.g.xml.createTextNode(h.K.PROCEDURES_DEFNORETURN_PROCEDURE));
    e.appendChild(f);
    d.push(e);
  }
  h.fc.procedures_defreturn &&
    ((e = h.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = h.g.xml.createElement("field")),
    f.setAttribute("name", "NAME"),
    f.appendChild(h.g.xml.createTextNode(h.K.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    d.push(e));
  h.fc.procedures_ifreturn &&
    ((e = h.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    d.push(e));
  d.length && d[d.length - 1].setAttribute("gap", 24);
  a = h.Ma.Xz(a);
  c(a[0], "procedures_callnoreturn");
  c(a[1], "procedures_callreturn");
  return d;
};
h.Ma.jx = function (a) {
  for (
    var c = [], d = $a(a, "procedures_mutatorarg"), e = 0, f;
    (f = d[e]);
    e++
  )
    c.push(Fa(f, "NAME"));
  d = h.g.xml.createElement("xml");
  e = h.g.xml.createElement("block");
  e.setAttribute("type", "procedures_mutatorarg");
  f = h.g.xml.createElement("field");
  f.setAttribute("name", "NAME");
  c = h.g.xml.createTextNode(h.ka.cv(h.Ma.Ux, c));
  f.appendChild(c);
  e.appendChild(f);
  d.appendChild(e);
  if ((c = h.g.Ha.Fu(d))) {
    if (!a.options.Jh)
      throw Error("Existing toolbox is null.  Can't create new toolbox.");
    if (h.g.Ha.Dk(c)) {
      if (!a.ta)
        throw Error("Existing toolbox has no categories.  Can't change mode.");
      a.options.Jh = c;
      a.ta.Ea(c);
    } else {
      if (!a.la)
        throw Error("Existing toolbox has categories.  Can't change mode.");
      a.options.Jh = c;
      a.la.show(c);
    }
  } else if (a.options.Jh) throw Error("Can't nullify an existing toolbox.");
};
h.Ma.kC = function (a) {
  if (a.type == h.h.ns && "mutator" === a.JG && a.AH) {
    a = h.mb.zk(a.Tb).Lc(a.fb);
    var c = a.type;
    if ("procedures_defnoreturn" == c || "procedures_defreturn" == c)
      (a = a.ce.Bk()), h.Ma.jx(a), eb(a, h.Ma.jC);
  }
};
h.Ma.jC = function (a) {
  (a.type != h.h.Wn && a.type != h.h.Dx && a.type != h.h.Cx) ||
    h.Ma.jx(h.mb.zk(a.Tb));
};
h.Ma.cB = function (a, c) {
  var d = [];
  c = K(c, !1);
  for (var e = 0; e < c.length; e++)
    if (c[e].oB) {
      var f = c[e].oB();
      f && h.eh.Cf(f, a) && d.push(c[e]);
    }
  return d;
};
h.Ma.HH = function (a) {
  var c = h.h.Ga,
    d = a.Yi()[0],
    e = a.nc(!0);
  a = h.Ma.cB(d, a.B);
  d = 0;
  for (var f; (f = a[d]); d++) {
    var g = f.nc();
    g = g && h.N.Ge(g);
    f.ad(e);
    var k = f.nc();
    k = k && h.N.Ge(k);
    g != k &&
      ((h.h.Ga = !1),
      h.h.Ja(new h.h.li(f, "mutation", null, g, k)),
      (h.h.Ga = c));
  }
};
h.Ma.iH = function (a, c) {
  c = c.Qb(!1);
  for (var d = 0; d < c.length; d++)
    if (c[d].Yi) {
      var e = c[d].Yi();
      if (e && h.eh.Cf(e[0], a)) return c[d];
    }
  return null;
};
h.rb = {};
h.rb.names = {
  ly: "escape",
  Zg: "delete",
  Mx: "copy",
  Sx: "cut",
  pz: "paste",
  Kz: "undo",
  uz: "redo",
};
h.rb.UC = function () {
  var a = {
    name: h.rb.names.ly,
    Da: function (c) {
      return !c.options.readOnly;
    },
    sa: function () {
      h.cc();
      return !0;
    },
  };
  h.Ia.A.register(a);
  N(h.g.L.Ds, a.name);
};
h.rb.rr = function () {
  var a = {
    name: h.rb.names.Zg,
    Da: function (c) {
      return !c.options.readOnly && h.selected && h.selected.Nc();
    },
    sa: function (c, d) {
      d.preventDefault();
      if (h.re.Ch()) return !1;
      h.Mu();
      return !0;
    },
  };
  h.Ia.A.register(a);
  N(h.g.L.Zg, a.name);
  N(h.g.L.Ax, a.name);
};
h.rb.MC = function () {
  var a = {
    name: h.rb.names.Mx,
    Da: function (d) {
      return (
        !d.options.readOnly &&
        !h.re.Ch() &&
        h.selected &&
        h.selected.Nc() &&
        h.selected.kc()
      );
    },
    sa: function () {
      h.cc();
      h.up(h.selected);
      return !0;
    },
  };
  h.Ia.A.register(a);
  var c = O(h.g.L.$n, [h.g.L.$f]);
  N(c, a.name);
  c = O(h.g.L.$n, [h.g.L.ki]);
  N(c, a.name);
  c = O(h.g.L.$n, [h.g.L.si]);
  N(c, a.name);
};
h.rb.NC = function () {
  var a = {
    name: h.rb.names.Sx,
    Da: function (d) {
      return (
        !d.options.readOnly &&
        !h.re.Ch() &&
        h.selected &&
        h.selected.Nc() &&
        h.selected.kc() &&
        !h.selected.B.zg
      );
    },
    sa: function () {
      h.up(h.selected);
      h.Mu();
      return !0;
    },
  };
  h.Ia.A.register(a);
  var c = O(h.g.L.mm, [h.g.L.$f]);
  N(c, a.name);
  c = O(h.g.L.mm, [h.g.L.ki]);
  N(c, a.name);
  c = O(h.g.L.mm, [h.g.L.si]);
  N(c, a.name);
};
h.rb.eD = function () {
  var a = {
    name: h.rb.names.pz,
    Da: function (d) {
      return !d.options.readOnly && !h.re.Ch();
    },
    sa: function () {
      return h.wn();
    },
  };
  h.Ia.A.register(a);
  var c = O(h.g.L.Vo, [h.g.L.$f]);
  N(c, a.name);
  c = O(h.g.L.Vo, [h.g.L.ki]);
  N(c, a.name);
  c = O(h.g.L.Vo, [h.g.L.si]);
  N(c, a.name);
};
h.rb.wr = function () {
  var a = {
    name: h.rb.names.Kz,
    Da: function (d) {
      return !d.options.readOnly && !h.re.Ch();
    },
    sa: function (d) {
      h.cc();
      cb(d, !1);
      return !0;
    },
  };
  h.Ia.A.register(a);
  var c = O(h.g.L.Fi, [h.g.L.$f]);
  N(c, a.name);
  c = O(h.g.L.Fi, [h.g.L.ki]);
  N(c, a.name);
  c = O(h.g.L.Fi, [h.g.L.si]);
  N(c, a.name);
};
h.rb.vr = function () {
  var a = {
    name: h.rb.names.uz,
    Da: function (d) {
      return !h.re.Ch() && !d.options.readOnly;
    },
    sa: function (d) {
      h.cc();
      cb(d, !0);
      return !0;
    },
  };
  h.Ia.A.register(a);
  var c = O(h.g.L.Fi, [h.g.L.mf, h.g.L.$f]);
  N(c, a.name);
  c = O(h.g.L.Fi, [h.g.L.mf, h.g.L.ki]);
  N(c, a.name);
  c = O(h.g.L.Fi, [h.g.L.mf, h.g.L.si]);
  N(c, a.name);
  c = O(h.g.L.Qz, [h.g.L.$f]);
  N(c, a.name);
};
h.rb.PC = function () {
  h.rb.UC();
  h.rb.rr();
  h.rb.MC();
  h.rb.NC();
  h.rb.eD();
  h.rb.wr();
  h.rb.vr();
};
h.Ia = function () {
  h.Ia.A = this;
  this.dd = Object.create(null);
  this.kj = Object.create(null);
  h.rb.PC();
  h.navigation.bD();
};
h.Ia.kn = { nG: h.g.L.mf, rE: h.g.L.$f, eE: h.g.L.ki, uF: h.g.L.si };
h.Ia.prototype.register = function (a, c) {
  if (this.dd[a.name] && !c)
    throw Error('Shortcut with name "' + a.name + '" already exists.');
  this.dd[a.name] = a;
};
h.Ia.prototype.unregister = function (a) {
  if (!this.dd[a])
    return (
      console.warn('Keyboard shortcut with name "' + a + '" not found.'), !1
    );
  for (var c in this.kj) {
    var d = c,
      e = this.kj[d],
      f = e.indexOf(a);
    -1 < f && (e.splice(f, 1), 0 == e.length && delete this.kj[d]);
  }
  delete this.dd[a];
  return !0;
};
function N(a, c, d) {
  var e = h.Ia.A,
    f = e.kj[a];
  if (f && !d)
    throw Error(
      'Shortcut with name "' + c + '" collides with shortcuts ' + f.toString()
    );
  f && d ? f.unshift(c) : (e.kj[a] = [c]);
}
h.Ia.prototype.Zq = function (a, c) {
  var d = "";
  for (e in h.Ia.kn) c.getModifierState(e) && ("" != d && (d += "+"), (d += e));
  "" != d && c.keyCode
    ? (d = d + "+" + c.keyCode)
    : c.keyCode && (d = c.keyCode.toString());
  d = this.kj[d] || [];
  if (!d) return !1;
  var e = 0;
  for (var f; (f = d[e]); e++)
    if (((f = this.dd[f]), (!f.Da || f.Da(a)) && f.sa && f.sa(a, c, f)))
      return !0;
  return !1;
};
function O(a, c) {
  var d = "";
  if (c) {
    for (var e = h.g.object.values(h.Ia.kn), f = 0, g; (g = c[f]); f++)
      if (0 > e.indexOf(g)) throw Error(g + " is not a valid modifier key.");
    for (var k in h.Ia.kn)
      -1 < c.indexOf(h.Ia.kn[k]) && ("" != d && (d += "+"), (d += k));
  }
  "" != d && a ? (d = d + "+" + a) : a && (d = a.toString());
  return d;
}
new h.Ia();
h.lm = function (a, c, d, e) {
  this.B = a;
  this.name = c;
  this.type = d || "";
  this.JB = e || h.g.Df();
  h.h.Ja(new h.h.Rd(this));
};
h.lm.prototype.yc = function () {
  return this.JB;
};
h.lm.qA = function (a, c) {
  a = a.name.toLowerCase();
  c = c.name.toLowerCase();
  return a < c ? -1 : a == c ? 0 : 1;
};
h.ka = {};
h.ka.iz = h.Nt;
h.ka.Yz = function (a) {
  var c = K(a, !1);
  a = Object.create(null);
  for (var d = 0; d < c.length; d++) {
    var e = na(c[d]);
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
h.ka.bs = {};
h.ka.GG = function (a) {
  a = K(a, !1);
  for (var c = Object.create(null), d = 0, e; (e = a[d]); d++) {
    var f = e.jH;
    !f &&
      e.jB &&
      ((f = e.jB),
      h.ka.bs[e.type] ||
        (console.warn(
          "Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" +
            e.type +
            "')"
        ),
        (h.ka.bs[e.type] = !0)));
    if (f) for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0;
  }
  return Object.keys(c);
};
h.ka.uh = function (a) {
  var c = [],
    d = document.createElement("button");
  d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
  d.setAttribute("callbackKey", "CREATE_VARIABLE");
  pc(a, function (e) {
    h.ka.Iu(e.oH());
  });
  c.push(d);
  a = h.ka.XA(a);
  return (c = c.concat(a));
};
h.ka.XA = function (a) {
  a = a.Rm("");
  var c = [];
  if (0 < a.length) {
    var d = a[a.length - 1];
    if (h.fc.variables_set) {
      var e = h.g.xml.createElement("block");
      e.setAttribute("type", "variables_set");
      e.setAttribute("gap", h.fc.math_change ? 8 : 24);
      e.appendChild(h.ka.Xp(d));
      c.push(e);
    }
    h.fc.math_change &&
      ((e = h.g.xml.createElement("block")),
      e.setAttribute("type", "math_change"),
      e.setAttribute("gap", h.fc.variables_get ? 20 : 8),
      e.appendChild(h.ka.Xp(d)),
      (d = h.N.Xe(
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
      )),
      e.appendChild(d),
      c.push(e));
    if (h.fc.variables_get) {
      a.sort(h.lm.qA);
      d = 0;
      for (var f; (f = a[d]); d++)
        (e = h.g.xml.createElement("block")),
          e.setAttribute("type", "variables_get"),
          e.setAttribute("gap", 8),
          e.appendChild(h.ka.Xp(f)),
          c.push(e);
    }
  }
  return c;
};
h.ka.Qt = "ijkmnopqrstuvwxyzabcdefgh";
h.ka.YA = function (a) {
  return h.ka.cv(h.ka.Qt.charAt(0), a.Yp());
};
h.ka.cv = function (a, c) {
  if (!c.length) return a;
  for (var d = h.ka.Qt, e = "", f = d.indexOf(a); ; ) {
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
h.ka.Iu = function (a, c, d) {
  function e(g) {
    h.ka.Hw(h.K.NEW_VARIABLE_TITLE, g, function (k) {
      if (k) {
        var l = h.ka.mC(k, a);
        if (l) {
          if (l.type == f)
            var m = h.K.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
          else
            (m = h.K.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (m = m.replace("%1", l.name).replace("%2", l.type));
          h.alert(m, function () {
            e(k);
          });
        } else a.Xd(k, f), c && c(k);
      } else c && c(null);
    });
  }
  var f = d || "";
  e("");
};
h.ka.Xd = h.ka.Iu;
h.ka.Iw = function (a, c) {
  function d(e) {
    var f = h.K.RENAME_VARIABLE_TITLE.replace("%1", c.name);
    h.ka.Hw(f, e, function (g) {
      if (g) {
        var k = h.ka.nC(g, c.type, a);
        k
          ? ((k = h.K.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              k.name
            ).replace("%2", k.type)),
            h.alert(k, function () {
              d(g);
            }))
          : a.Vh(c.yc(), g);
      }
    });
  }
  d("");
};
h.ka.Hw = function (a, c, d) {
  h.prompt(a, c, function (e) {
    e &&
      ((e = e.replace(/[\s\xa0]+/g, " ").trim()),
      e == h.K.RENAME_VARIABLE || e == h.K.NEW_VARIABLE) &&
      (e = null);
    d(e);
  });
};
h.ka.nC = function (a, c, d) {
  d = d.cb.Vi();
  a = a.toLowerCase();
  for (var e = 0, f; (f = d[e]); e++)
    if (f.name.toLowerCase() == a && f.type != c) return f;
  return null;
};
h.ka.mC = function (a, c) {
  c = c.cb.Vi();
  a = a.toLowerCase();
  for (var d = 0, e; (e = c[d]); d++) if (e.name.toLowerCase() == a) return e;
  return null;
};
h.ka.Xp = function (a) {
  var c = h.g.xml.createElement("field");
  c.setAttribute("name", "VAR");
  c.setAttribute("id", a.yc());
  c.setAttribute("variabletype", a.type);
  a = h.g.xml.createTextNode(a.name);
  c.appendChild(a);
  return c;
};
h.ka.mH = function (a, c, d, e) {
  var f = h.ka.tg(a, c, d, e);
  f || (f = h.ka.yA(a, c, d, e));
  return f;
};
h.ka.tg = function (a, c, d, e) {
  var f = a.yn,
    g = null;
  if (c && ((g = a.xh(c)), !g && f && (g = f.xh(c)), g)) return g;
  if (d) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    g = a.tg(d, e);
    !g && f && (g = f.tg(d, e));
  }
  return g;
};
h.ka.yA = function (a, c, d, e) {
  var f = a.yn;
  d || (d = h.ka.YA(a.zg ? a.Ln : a));
  return f ? f.Xd(d, e, c) : a.Xd(d, e, c);
};
h.ka.ZA = function (a, c) {
  a = a.Vi();
  var d = [];
  if (c.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == c.indexOf(f) && d.push(f);
    }
  return d;
};
h.W = {};
h.W.Dd = null;
h.W.Hm = null;
h.W.ee = "";
h.W.fe = "";
h.W.jb = function () {
  h.W.Ua ||
    ((h.W.Ua = document.createElement("div")),
    (h.W.Ua.className = "blocklyWidgetDiv"),
    (h.un || document.body).appendChild(h.W.Ua));
};
h.W.show = function (a, c, d) {
  h.W.$a();
  h.W.Dd = a;
  h.W.Hm = d;
  a = h.W.Ua;
  a.style.direction = c ? "rtl" : "ltr";
  a.style.display = "block";
  c = h.sg();
  h.W.ee = c.lb.Yd();
  h.W.fe = c.Ff().Yd();
  h.g.j.Hb(a, h.W.ee);
  h.g.j.Hb(a, h.W.fe);
};
h.W.$a = function () {
  if (h.W.isVisible()) {
    h.W.Dd = null;
    var a = h.W.Ua;
    a.style.display = "none";
    a.style.left = "";
    a.style.top = "";
    h.W.Hm && h.W.Hm();
    h.W.Hm = null;
    a.textContent = "";
    h.W.ee && (h.g.j.Qc(a, h.W.ee), (h.W.ee = ""));
    h.W.fe && (h.g.j.Qc(a, h.W.fe), (h.W.fe = ""));
    da(h.sg());
  }
};
h.W.isVisible = function () {
  return !!h.W.Dd;
};
h.W.Fk = function (a) {
  h.W.Dd == a && h.W.$a();
};
h.W.cl = function (a, c, d) {
  h.W.Ua.style.left = a + "px";
  h.W.Ua.style.top = c + "px";
  h.W.Ua.style.height = d + "px";
};
h.W.FC = function (a, c, d, e) {
  var f = h.W.fA(a, c, d);
  a = h.W.eA(a, c, d, e);
  0 > f ? h.W.cl(a, 0, d.height + f) : h.W.cl(a, f, d.height);
};
h.W.eA = function (a, c, d, e) {
  if (e)
    return (
      (c = Math.max(c.right - d.width, a.left)), Math.min(c, a.right - d.width)
    );
  c = Math.min(c.left, a.right - d.width);
  return Math.max(c, a.left);
};
h.W.fA = function (a, c, d) {
  return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom;
};
h.VERSION = "uncompiled";
h.Rk = null;
h.selected = null;
h.Ui = [];
h.Ki = null;
h.xm = null;
h.op = null;
h.MG = null;
h.un = null;
h.Xw = function (a) {
  return new h.g.Qd(a.nu, a.mu);
};
h.RH = function (a) {
  ma(a);
};
h.Dl = function (a) {
  for (; a.options.Pc; ) a = a.options.Pc;
  var c = x(a),
    d = c.parentNode;
  if (d) {
    var e = d.offsetWidth;
    d = d.offsetHeight;
    c.nu != e && (c.setAttribute("width", e + "px"), (c.nu = e));
    c.mu != d && (c.setAttribute("height", d + "px"), (c.mu = d));
    a.resize();
  }
};
h.Zq = function (a) {
  var c = h.Rk;
  !c || h.g.an(a) || (c.na && !c.isVisible()) || h.Ia.A.Zq(c, a);
};
h.Mu = function () {
  var a = h.selected;
  a.B.zg || (h.h.ra(!0), h.cc(), a.H(!0, !0), h.h.ra(!1));
};
h.up = function (a) {
  if (a.hj) a = null;
  else {
    var c = h.N.ng(a, !0);
    h.N.DA(c);
    var d = a.Sa();
    c.setAttribute("x", a.J ? -d.x : d.x);
    c.setAttribute("y", d.y);
    a = { xml: c, source: a.B, UD: h.g.dv(a) };
  }
  a && ((h.Ki = a.xml), (h.xm = a.source), (h.op = a.UD));
};
h.wn = function () {
  if (!h.Ki) return !1;
  var a = h.xm;
  a.zg && (a = a.Ln);
  return h.op && ab(a, h.op) ? (h.h.ra(!0), a.wn(h.Ki), h.h.ra(!1), !0) : !1;
};
h.duplicate = function (a) {
  var c = h.Ki,
    d = h.xm;
  h.up(a);
  a.B.wn(h.Ki);
  h.Ki = c;
  h.xm = d;
};
h.IH = function (a) {
  h.g.an(a) || a.preventDefault();
};
h.cc = function (a) {
  h.D.$a();
  h.W.$a();
  h.C.rq();
  a ||
    ((a = h.sg()),
    a.dc && a.dc.eH && a.dc.TG(),
    (a = a.ta) && L(a) && L(a).ap && a.QG());
};
h.sg = function () {
  return h.Rk;
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
h.XB = function (a) {
  return function () {
    var c = a.type ? 'Block "' + a.type + '": ' : "";
    if (a.output && a.previousStatement)
      throw Error(c + "Must not have both an output and a previousStatement.");
    a.style && a.style.Me && ((this.Me = a.style.Me), (a.style = null));
    if (a.style && a.colour)
      throw Error(c + "Must not have both a colour and a style.");
    if (a.style) {
      var d = a.style;
      try {
        this.Yh(d);
      } catch (u) {
        console.warn(c + "Style does not exist: ", d);
      }
    } else if ("colour" in a)
      if (void 0 === a.colour) console.warn(c + "Undefined colour value.");
      else {
        d = a.colour;
        try {
          this.Te(d);
        } catch (u) {
          console.warn(c + "Illegal colour value: ", d);
        }
      }
    for (d = 0; void 0 !== a["message" + d]; ) {
      for (
        var e = a["args" + d] || [],
          f = a["lastDummyAlign" + d],
          g = c,
          k = h.g.PD(a["message" + d]),
          l = [],
          m = 0,
          n = [],
          r = 0;
        r < k.length;
        r++
      ) {
        var q = k[r];
        if ("number" == typeof q) {
          if (0 >= q || q > e.length)
            throw Error(
              'Block "' +
                this.type +
                '": Message index %' +
                q +
                " out of range."
            );
          if (l[q])
            throw Error(
              'Block "' + this.type + '": Message index %' + q + " duplicated."
            );
          l[q] = !0;
          m++;
          n.push(e[q - 1]);
        } else (q = q.trim()) && n.push(q);
      }
      if (m != e.length)
        throw Error(
          'Block "' +
            this.type +
            '": Message does not reference all ' +
            e.length +
            " arg(s)."
        );
      n.length &&
        ("string" == typeof n[n.length - 1] ||
          h.g.Pa.startsWith(n[n.length - 1].type, "field_")) &&
        ((r = { type: "input_dummy" }), f && (r.align = f), n.push(r));
      f = { LEFT: h.Tn, RIGHT: h.Ml, CENTRE: h.Sn, CENTER: h.Sn };
      e = [];
      for (r = 0; r < n.length; r++)
        if (((l = n[r]), "string" == typeof l)) e.push([l, void 0]);
        else {
          k = m = null;
          do
            if (((q = !1), "string" == typeof l)) m = new h.Ec(l);
            else
              switch (l.type) {
                case "input_value":
                  k = this.kh(h.eb, l.name);
                  break;
                case "input_statement":
                  k = this.kh(h.Ra, l.name);
                  break;
                case "input_dummy":
                  k = Hb(this, l.name);
                  break;
                default:
                  (m = h.sh.aa(l)), !m && l.alt && ((l = l.alt), (q = !0));
              }
          while (q);
          if (m) e.push([m, l.name]);
          else if (k) {
            l.check && k.rj(l.check);
            l.align &&
              ((m = f[l.align.toUpperCase()]),
              void 0 === m
                ? console.warn(g + "Illegal align value: ", l.align)
                : Db(k, m));
            for (l = 0; l < e.length; l++) P(k, e[l][0], e[l][1]);
            e.length = 0;
          }
        }
      d++;
    }
    void 0 !== a.inputsInline && this.Pg(a.inputsInline);
    void 0 !== a.output && this.Fn(!0, a.output);
    void 0 !== a.previousStatement && this.Hn(!0, a.previousStatement);
    void 0 !== a.nextStatement && this.En(!0, a.nextStatement);
    void 0 !== a.tooltip && ((d = a.tooltip), (d = h.g.Rc(d)), this.Rg(d));
    void 0 !== a.enableContextMenu &&
      ((d = a.enableContextMenu), (this.contextMenu = !!d));
    void 0 !== a.helpUrl && ((d = a.helpUrl), (this.zh = h.g.Rc(d)));
    "string" == typeof a.extensions &&
      (console.warn(
        c +
          "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
          a.type +
          "' block."
      ),
      (a.extensions = [a.extensions]));
    void 0 !== a.mutator && h.wa.apply(a.mutator, this, !0);
    if (Array.isArray(a.extensions))
      for (c = a.extensions, d = 0; d < c.length; ++d)
        h.wa.apply(c[d], this, !1);
  };
};
h.$G = function (a) {
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
        : (h.fc[e] &&
            console.warn(
              "Block definition #" +
                c +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (h.fc[e] = { ab: h.XB(d) }));
    } else
      console.warn(
        "Block definition #" + c + " in JSON array is " + d + ". Skipping."
      );
  }
};
h.Oa = function (a, c, d, e, f, g) {
  function k(u) {
    var X = !f;
    u = h.Touch.GD(u);
    for (var xa = 0, Y; (Y = u[xa]); xa++)
      if (!X || h.Touch.Lr(Y)) h.Touch.yD(Y), d ? e.call(d, Y) : e(Y), (l = !0);
  }
  var l = !1,
    m = [];
  if (h.g.global.PointerEvent && c in h.Touch.ve)
    for (var n = 0, r; (r = h.Touch.ve[c][n]); n++)
      a.addEventListener(r, k, !1), m.push([a, r, k]);
  else if ((a.addEventListener(c, k, !1), m.push([a, c, k]), c in h.Touch.ve)) {
    var q = function (u) {
      k(u);
      var X = !g;
      l && X && u.preventDefault();
    };
    for (n = 0; (r = h.Touch.ve[c][n]); n++)
      a.addEventListener(r, q, !1), m.push([a, r, q]);
  }
  return m;
};
h.lh = function (a, c, d) {
  function e(m) {
    d(m);
  }
  var f = [];
  if (h.g.global.PointerEvent && c in h.Touch.ve)
    for (var g = 0, k; (k = h.Touch.ve[c][g]); g++)
      a.addEventListener(k, e, !1), f.push([a, k, e]);
  else if ((a.addEventListener(c, e, !1), f.push([a, c, e]), c in h.Touch.ve)) {
    var l = function (m) {
      if (m.changedTouches && 1 == m.changedTouches.length) {
        var n = m.changedTouches[0];
        m.clientX = n.clientX;
        m.clientY = n.clientY;
      }
      d(m);
      m.preventDefault();
    };
    for (g = 0; (k = h.Touch.ve[c][g]); g++)
      a.addEventListener(k, l, !1), f.push([a, k, l]);
  }
  return f;
};
h.tb = function (a) {
  for (; a.length; ) {
    var c = a.pop();
    c[0].removeEventListener(c[1], c[2], !1);
  }
};
h.zH = function (a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
h.rH = function (a) {
  return h.g.pb.Jv(a);
};
h.gA = function () {
  h.ic("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  h.ic("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  h.ic("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  h.ic("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  h.ic("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  h.ic("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  h.ic("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  h.ic("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  h.ic("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  h.ic("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  h.ic("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  h.ic("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  h.ic("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  h.ic("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  h.ic("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  h.ic("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
h.ic = function (a, c, d) {
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
h.ZH = function (a) {
  h.un = a;
};
var qc = {
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
  rc = "ace ar fa he mzn ps ur".split(" "),
  sc = window.BlocklyGamesLang,
  tc = window.BlocklyGamesLanguages,
  uc = /\.html$/.test(window.location.pathname);
function vc() {
  return -1 != rc.indexOf(sc);
}
var S,
  wc = Number,
  xc,
  yc = window.location.search.match(/[?&]level=([^&]+)/);
xc = yc ? decodeURIComponent(yc[1].replace(/\+/g, "%20")) : "NaN";
var zc = wc(xc);
S = isNaN(zc) ? 1 : h.g.mc.ck(1, zc, 10);
function Ac() {
  document.title = document.getElementById("title").textContent;
  document.dir = vc() ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", sc);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var c = [], d = 0; d < tc.length; d++) {
      var e = tc[d];
      c.push([qc[e], e]);
    }
    c.sort(function (g, k) {
      return g[0] > k[0] ? 1 : g[0] < k[0] ? -1 : 0;
    });
    for (d = a.options.length = 0; d < c.length; d++) {
      var f = c[d];
      e = f[1];
      f = new Option(f[0], e);
      e == sc && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (d = 1; 10 >= d; d++)
    (a = document.getElementById("level" + d)),
      (c = !!Bc(d)),
      a && c && (a.className += " level_done");
  (d = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(Cc, 1);
}
function Bc(a) {
  var c = Dc;
  try {
    var d = window.localStorage[c + a];
  } catch (e) {}
  return d;
}
function T(a) {
  var c = Ec(a);
  return null === c ? "[Unknown message: " + a + "]" : c;
}
function Ec(a) {
  return (a = document.getElementById(a))
    ? ((a = a.textContent), (a = a.replace(/\\n/g, "\n")))
    : null;
}
function Fc(a, c) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", c, !0);
  a.addEventListener("touchend", c, !0);
}
function Cc() {
  if (!uc) {
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
h.g.s = {};
h.g.s.za = function (a, c) {
  return " " + a + "," + c + " ";
};
h.g.s.curve = function (a, c) {
  return " " + a + c.join("");
};
h.g.s.moveTo = function (a, c) {
  return " M " + a + "," + c + " ";
};
h.g.s.moveBy = function (a, c) {
  return " m " + a + "," + c + " ";
};
h.g.s.lineTo = function (a, c) {
  return " l " + a + "," + c + " ";
};
h.g.s.line = function (a) {
  return " l" + a.join("");
};
h.g.s.V = function (a, c) {
  return " " + a + " " + c + " ";
};
h.g.s.arc = function (a, c, d, e) {
  return a + " " + d + " " + d + " " + c + e;
};
h.i.cf = function () {
  this.se = 0;
  this.wz = 3;
  this.jd = 5;
  this.ct = 8;
  this.tc = 10;
  this.Gt = this.jd;
  this.Vj = 15;
  this.Ci = 5;
  this.No = 8;
  this.jz = 15;
  this.Do = 4;
  this.bz = 12;
  this.ey = 16;
  this.by = this.As = this.Vj;
  this.me = 8;
  this.Cz = this.Qj = 15;
  this.Dt = 0;
  this.Ft = 20;
  this.Bx = 4;
  this.Hz = this.jd;
  this.Iz = this.tc;
  this.Gx = this.jd;
  this.Fx = this.tc;
  this.Ll = !1;
  this.Az = 15;
  this.Bz = 100;
  this.zz = 15;
  this.Nj = 24;
  this.iy = 14.5;
  this.gy = this.Vj + 11;
  this.oy = 2;
  this.jy = this.Nj;
  this.Ct = h.g.s.moveBy(0, 0);
  this.Oy = 12;
  this.Py = 6;
  this.ah = 11;
  this.eg = "normal";
  this.dg = "sans-serif";
  this.Is = this.am = -1;
  this.$l = 4;
  this.Fs = 16;
  this.Fj = 5;
  this.wy = "#fff";
  this.no = !h.g.userAgent.Kd && !h.g.userAgent.$g;
  this.Gs = this.Fs;
  this.yy = this.xy = this.Hs = !1;
  this.Ay = this.Fj;
  this.Gj = 12;
  this.zy =
    "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
  this.hl = String(Math.random()).substring(2);
  this.Lm = "";
  this.Tp = null;
  this.Ru = "";
  this.mk = this.xp = this.Fp = null;
  this.Wl = "#cc0a0a";
  this.em = "#4286f4";
  this.Yl = 100;
  this.Yt = 5;
  this.Xl = 10;
  this.Px = 2;
  this.Rx = 4;
  this.to = "#000000";
  this.cm = 0.2;
  this.Bt = { rz: 1, ui: 2 };
};
b = h.i.cf.prototype;
b.ab = function () {
  this.ri = this.Iq();
  this.ui = this.Jq();
  this.yi = this.Lq();
  this.Ho = this.Kq();
  var a = this.me,
    c = h.g.s.arc("a", "0 0,0", a, h.g.s.za(-a, a)),
    d = h.g.s.arc("a", "0 0,0", a, h.g.s.za(a, a));
  this.dm = { width: a, height: a, kr: c, xn: d };
  a = this.me;
  c = h.g.s.moveBy(0, a) + h.g.s.arc("a", "0 0,1", a, h.g.s.za(a, -a));
  d = h.g.s.arc("a", "0 0,1", a, h.g.s.za(a, a));
  var e = h.g.s.arc("a", "0 0,1", a, h.g.s.za(-a, -a)),
    f = h.g.s.arc("a", "0 0,1", a, h.g.s.za(-a, a));
  this.Rj = { Tr: c, RD: d, bA: f, gp: e, sD: a };
};
b.ql = function (a) {
  this.mg = {};
  var c = a.mg,
    d;
  for (d in c) this.mg[d] = Gc(c[d]);
  this.dg =
    a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.dg;
  this.eg =
    a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.eg;
  this.ah =
    a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.ah;
  c = h.g.j.cC(this.ah + "pt", this.eg, this.dg);
  this.am = c.height;
  this.Is = c.Td;
  this.Wl = y(a, "cursorColour") || this.Wl;
  this.em = y(a, "markerColour") || this.em;
  this.to = y(a, "insertionMarkerColour") || this.to;
  this.cm = Number(y(a, "insertionMarkerOpacity")) || this.cm;
  this.Ll = null != a.Pr ? a.Pr : this.Ll;
};
function bc(a, c) {
  var d = "auto_" + c;
  a.mg[d] || (a.mg[d] = Gc({ colourPrimary: c }));
  return { style: a.mg[d], name: d };
}
function Zb(a, c) {
  return (
    a.mg[c || ""] ||
    (c && 0 == c.indexOf("auto_")
      ? bc(a, c.substring(5)).style
      : Gc({ colourPrimary: "#000000" }))
  );
}
function Gc(a) {
  var c = {};
  a && h.g.object.Hg(c, a);
  a = h.g.vn(c.colourPrimary || "#000");
  c.nh = a.Ek;
  c.colourSecondary
    ? (a = h.g.vn(c.colourSecondary).Ek)
    : ((a = c.nh), (a = h.g.pb.cp("#fff", a, 0.6) || a));
  c.ym = a;
  c.colourTertiary
    ? (a = h.g.vn(c.colourTertiary).Ek)
    : ((a = c.nh), (a = h.g.pb.cp("#fff", a, 0.3) || a));
  c.Li = a;
  c.Me = c.hat || "";
  return c;
}
b.H = function () {
  this.Tp && h.g.j.removeNode(this.Tp);
  this.Fp && h.g.j.removeNode(this.Fp);
  this.xp && h.g.j.removeNode(this.xp);
  this.mk = null;
};
b.Iq = function () {
  var a = this.Oy,
    c = this.Py,
    d = h.g.s.line([
      h.g.s.za(c, a / 4),
      h.g.s.za(2 * -c, a / 2),
      h.g.s.za(c, a / 4),
    ]);
  return { height: a, width: c, path: d };
};
b.Lq = function () {
  var a = this.Az,
    c = this.Bz,
    d = h.g.s.curve("c", [h.g.s.za(30, -a), h.g.s.za(70, -a), h.g.s.za(c, 0)]);
  return { height: a, width: c, path: d };
};
b.Kq = function () {
  function a(g) {
    g = g ? -1 : 1;
    var k = -g,
      l = d / 2,
      m = h.g.s.za(c, g * l);
    return (
      h.g.s.curve("c", [
        h.g.s.za(0, g * (l + 2.5)),
        h.g.s.za(-c, k * (l + 0.5)),
        h.g.s.za(-c, g * l),
      ]) + h.g.s.curve("s", [h.g.s.za(c, 2.5 * k), m])
    );
  }
  var c = this.No,
    d = this.Vj,
    e = a(!0),
    f = a(!1);
  return { type: this.Bt.rz, width: c, height: d, Ed: f, al: e };
};
b.Jq = function () {
  function a(k) {
    return h.g.s.line([
      h.g.s.za(k * e, d),
      h.g.s.za(3 * k, 0),
      h.g.s.za(k * e, -d),
    ]);
  }
  var c = this.jz,
    d = this.Do,
    e = (c - 3) / 2,
    f = a(1),
    g = a(-1);
  return { type: this.Bt.ui, width: c, height: d, Lg: f, xw: g };
};
function Oa(a, c) {
  switch (c.type) {
    case h.eb:
    case h.Md:
      return a.Ho;
    case h.Nd:
    case h.Ra:
      return a.ui;
    default:
      throw Error("Unknown connection type");
  }
}
b.jb = function (a, c, d) {
  d = this.Zp(d);
  c = "blockly-renderer-style-" + c;
  this.mk = document.getElementById(c);
  var e = d.join("\n");
  this.mk
    ? (this.mk.firstChild.textContent = e)
    : ((d = document.createElement("style")),
      (d.id = c),
      (c = document.createTextNode(e)),
      d.appendChild(c),
      document.head.insertBefore(d, document.head.firstChild),
      (this.mk = d));
  a = h.g.j.R(h.g.F.xs, {}, a);
  c = h.g.j.R(h.g.F.Js, { id: "blocklyEmbossFilter" + this.hl }, a);
  h.g.j.R(h.g.F.ty, { in: "SourceAlpha", stdDeviation: 1, result: "blur" }, c);
  d = h.g.j.R(
    h.g.F.vy,
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
  h.g.j.R(h.g.F.uy, { x: -5e3, y: -1e4, z: 2e4 }, d);
  h.g.j.R(
    h.g.F.mo,
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    c
  );
  h.g.j.R(
    h.g.F.mo,
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
  this.Lm = c.id;
  this.Tp = c;
  c = h.g.j.R(
    h.g.F.mt,
    {
      id: "blocklyDisabledPattern" + this.hl,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10,
    },
    a
  );
  h.g.j.R(h.g.F.kf, { width: 10, height: 10, fill: "#aaa" }, c);
  h.g.j.R(h.g.F.hf, { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, c);
  this.Ru = c.id;
  this.Fp = c;
  h.i.Bs &&
    ((a = h.g.j.R(
      h.g.F.Js,
      {
        id: "blocklyDebugFilter" + this.hl,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%",
      },
      a
    )),
    (c = h.g.j.R(h.g.F.py, { result: "outBlur" }, a)),
    h.g.j.R(
      h.g.F.sy,
      { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" },
      c
    ),
    h.g.j.R(
      h.g.F.qy,
      { "flood-color": "#ff0000", "flood-opacity": 0.5, result: "outColor" },
      a
    ),
    h.g.j.R(
      h.g.F.mo,
      { in: "outColor", in2: "outBlur", operator: "in", result: "outGlow" },
      a
    ),
    (this.xp = a));
};
b.Zp = function (a) {
  return [
    a + " .blocklyText, ",
    a + " .blocklyFlyoutLabelText {",
    "font: " + this.eg + " " + this.ah + "pt " + this.dg + ";",
    "}",
    a + " .blocklyText {",
    "fill: #fff;",
    "}",
    a + " .blocklyNonEditableText>rect,",
    a + " .blocklyEditableText>rect {",
    "fill: " + this.wy + ";",
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
    "font-family: " + this.dg + ";",
    "font-weight: " + this.eg + ";",
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
    "fill-opacity: " + this.cm + ";",
    "stroke: none;",
    "}",
  ];
};
h.h.ff = function (a, c, d, e) {
  var f = a ? a.B.id : void 0;
  e && e.La() == h.v.types.Vb && (f = e.ma.id);
  h.h.ff.u.constructor.call(this, f);
  this.fb = a ? a.id : null;
  this.nw = d;
  this.iw = e;
  this.Oe = c;
};
h.g.object.U(h.h.ff, h.h.xe);
h.h.ff.prototype.type = h.h.at;
h.h.ff.prototype.qa = function () {
  var a = h.h.ff.u.qa.call(this);
  a.isCursor = this.Oe;
  a.blockId = this.fb;
  a.oldNode = this.nw;
  a.newNode = this.iw;
  return a;
};
h.h.ff.prototype.aa = function (a) {
  h.h.ff.u.aa.call(this, a);
  this.Oe = a.isCursor;
  this.fb = a.blockId;
  this.nw = a.oldNode;
  this.iw = a.newNode;
};
h.A.register(h.A.Y.Fb, h.h.at, h.h.ff);
h.i.gf = function (a, c, d) {
  this.G = a;
  this.Oq = d;
  this.$k = null;
  this.o = c;
  this.Qi = null;
  a = this.Oe() ? this.o.Wl : this.o.em;
  this.sd = d.pb || a;
};
h.i.gf.Qx = "blocklyCursor";
h.i.gf.Yy = "blocklyMarker";
h.i.gf.Dy = 0.75;
b = h.i.gf.prototype;
b.Ba = function () {
  return this.oa;
};
b.zc = function () {
  return this.Oq;
};
b.Oe = function () {
  return "cursor" == this.Oq.type;
};
b.jb = function () {
  var a = this.Oe() ? h.i.gf.Qx : h.i.gf.Yy;
  this.oa = h.g.j.R(h.g.F.Wc, { class: a }, null);
  this.Mf = h.g.j.R(h.g.F.Wc, { width: this.o.Yl, height: this.o.Yt }, this.oa);
  this.Gg = h.g.j.R(
    h.g.F.kf,
    { width: this.o.Yl, height: this.o.Yt, style: "display: none" },
    this.Mf
  );
  this.Mh = h.g.j.R(
    h.g.F.kf,
    { class: "blocklyVerticalMarker", rx: 10, ry: 10, style: "display: none" },
    this.Mf
  );
  this.Lh = h.g.j.R(
    h.g.F.hf,
    { transform: "", style: "display: none" },
    this.Mf
  );
  this.Lf = h.g.j.R(
    h.g.F.hf,
    {
      transform: "",
      style: "display: none",
      fill: "none",
      "stroke-width": this.o.Rx,
    },
    this.Mf
  );
  this.Oe() &&
    ((a = {
      attributeType: "XML",
      attributeName: "fill",
      dur: "1s",
      values: this.sd + ";transparent;transparent;",
      repeatCount: "indefinite",
    }),
    h.g.j.R(h.g.F.Un, a, this.Gg),
    h.g.j.R(h.g.F.Un, a, this.Lh),
    (a.attributeName = "stroke"),
    h.g.j.R(h.g.F.Un, a, this.Lf));
  return this.oa;
};
function Hc(a, c) {
  a.Oe()
    ? (a.$k && a.$k.Qf(null), c.Qf(a.Ba()))
    : (a.$k && a.$k.Tf(null), c.Tf(a.Ba()));
  a.$k = c;
}
b.draw = function (a, c) {
  if (c) {
    this.o = this.G.lb.$();
    var d = this.Oe() ? this.o.Wl : this.o.em;
    this.sd = this.Oq.pb || d;
    this.Gg.setAttribute("fill", this.sd);
    this.Mh.setAttribute("stroke", this.sd);
    this.Lh.setAttribute("fill", this.sd);
    this.Lf.setAttribute("stroke", this.sd);
    this.Oe() &&
      ((d = this.sd + ";transparent;transparent;"),
      this.Gg.firstChild.setAttribute("values", d),
      this.Lh.firstChild.setAttribute("values", d),
      this.Lf.firstChild.setAttribute("values", d));
    d = c.ma;
    if (c.La() == h.v.types.vb) Ic(this, c);
    else if (c.La() == h.v.types.fh) Ic(this, c);
    else if (d.type == h.eb) {
      var e = c.ma;
      d = e.S();
      var f = e.Rh.x,
        g = e.Rh.y;
      e = h.g.s.moveTo(0, 0) + Oa(this.o, e).Ed;
      this.Lh.setAttribute("d", e);
      this.Lh.setAttribute(
        "transform",
        "translate(" + f + "," + g + ")" + (this.G.J ? " scale(-1 1)" : "")
      );
      this.Qi = this.Lh;
      Hc(this, d);
      Jc(this);
    } else if (d.type == h.Ra)
      (g = c.ma),
        (d = g.S()),
        (f = 0),
        (g = g.Rh.y),
        (e = w(d).width),
        this.G.J && (f = -e),
        Kc(this, f, g, e),
        Hc(this, d),
        Jc(this);
    else if (c.La() == h.v.types.md) Ic(this, c);
    else if (c.La() == h.v.types.Nb)
      (d = c.ma),
        (f = d.Ef().width),
        (g = d.Ef().height),
        Lc(this, 0, 0, f, g),
        Hc(this, d),
        Jc(this);
    else if (c.La() == h.v.types.Vb)
      (f = c.Rn),
        (d = f.x),
        (f = f.y),
        this.G.J && (d -= this.o.Yl),
        Kc(this, d, f, this.o.Yl),
        Hc(this, this.G),
        Jc(this);
    else if (c.La() == h.v.types.te) {
      d = c.ma;
      g = w(d);
      f = g.width + this.o.Xl;
      g = g.height + this.o.Xl;
      var k = (e = -this.o.Xl / 2),
        l = -this.o.Xl / 2;
      this.G.J && (k = -(f + e));
      Lc(this, k, l, f, g);
      Hc(this, d);
      Jc(this);
    }
    d = c.S();
    a = new h.h.ff(d, this.Oe(), a, c);
    h.h.Ja(a);
    a = this.Qi.childNodes[0];
    void 0 !== a && a.beginElement && a.beginElement();
  } else this.$a();
};
function Ic(a, c) {
  c = c.S();
  var d = c.width,
    e = c.height,
    f = e * h.i.gf.Dy,
    g = a.o.Px;
  if (c.T) {
    var k = Oa(a.o, c.T);
    e = k;
    d =
      h.g.s.moveBy(-g, f) +
      h.g.s.V("V", -g) +
      h.g.s.V("H", a.o.Qj) +
      e.Lg +
      h.g.s.V("H", d + 2 * g) +
      h.g.s.V("V", f);
    a.Lf.setAttribute("d", d);
  } else
    c.M
      ? ((f = k = Oa(a.o, c.M)),
        (d =
          h.g.s.moveBy(d, 0) +
          h.g.s.V("h", -(d - f.width)) +
          h.g.s.V("v", a.o.Ci) +
          f.Ed +
          h.g.s.V("V", e) +
          h.g.s.V("H", d)),
        a.Lf.setAttribute("d", d))
      : ((d =
          h.g.s.moveBy(-g, f) +
          h.g.s.V("V", -g) +
          h.g.s.V("H", d + 2 * g) +
          h.g.s.V("V", f)),
        a.Lf.setAttribute("d", d));
  a.G.J && a.yk(a.Lf);
  a.Qi = a.Lf;
  Hc(a, c);
  Jc(a);
}
function Jc(a) {
  a.$a();
  a.Qi.style.display = "";
}
function Kc(a, c, d, e) {
  a.Gg.setAttribute("x", c);
  a.Gg.setAttribute("y", d);
  a.Gg.setAttribute("width", e);
  a.Qi = a.Gg;
}
function Lc(a, c, d, e, f) {
  a.Mh.setAttribute("x", c);
  a.Mh.setAttribute("y", d);
  a.Mh.setAttribute("width", e);
  a.Mh.setAttribute("height", f);
  a.Qi = a.Mh;
}
b.yk = function (a) {
  a.setAttribute("transform", "scale(-1 1)");
};
b.$a = function () {
  this.Gg.style.display = "none";
  this.Mh.style.display = "none";
  this.Lh.style.display = "none";
  this.Lf.style.display = "none";
};
b.H = function () {
  this.oa && h.g.j.removeNode(this.oa);
};
h.i.m = {
  NONE: 0,
  Nb: 1,
  Ms: 2,
  Ps: 4,
  Mo: 8,
  hs: 16,
  Us: 32,
  Es: 64,
  hd: 128,
  Rs: 256,
  Et: 512,
  Lx: 1024,
  Go: 2048,
  Co: 4096,
  lz: 8192,
  io: 16384,
  xo: 32768,
  wo: 65536,
  Ko: 131072,
  Jo: 262144,
  Ys: 524288,
  Lo: 1048576,
  So: 2097152,
  Xn: 4194304,
  Ss: 8388608,
};
h.i.m.kF = h.i.m.xo | h.i.m.wo;
h.i.m.dG = h.i.m.Ko | h.i.m.Jo;
h.i.m.Uq = 16777216;
h.i.m.La = function () {
  Object.prototype.hasOwnProperty.call(h.i.m, void 0) ||
    ((h.i.m[void 0] = h.i.m.Uq), (h.i.m.Uq <<= 1));
  return h.i.m[void 0];
};
h.i.m.Kf = function (a) {
  return a.type & h.i.m.Nb;
};
h.i.m.Hh = function (a) {
  return a.type & h.i.m.Ms;
};
h.i.m.fj = function (a) {
  return a.type & h.i.m.Ps;
};
h.i.m.yd = function (a) {
  return a.type & h.i.m.Mo;
};
h.i.m.yH = function (a) {
  return a.type & h.i.m.Us;
};
h.i.m.Bg = function (a) {
  return a.type & h.i.m.hd;
};
h.i.m.Lk = function (a) {
  return a.type & h.i.m.Es;
};
h.i.m.Ag = function (a) {
  return a.type & h.i.m.Rs;
};
h.i.m.Ih = function (a) {
  return a.type & h.i.m.Et;
};
h.i.m.jj = function (a) {
  return a.type & h.i.m.Go;
};
h.i.m.Dg = function (a) {
  return a.type & h.i.m.Co;
};
h.i.m.UB = function (a) {
  return a.type & (h.i.m.Go | h.i.m.Co);
};
h.i.m.Cg = function (a) {
  return a.type & h.i.m.wo;
};
h.i.m.Qv = function (a) {
  return a.type & h.i.m.Jo;
};
h.i.m.Mk = function (a) {
  return a.type & h.i.m.xo;
};
h.i.m.BH = function (a) {
  return a.type & h.i.m.Ko;
};
h.i.m.wH = function (a) {
  return a.type & h.i.m.io;
};
h.i.m.Ov = function (a) {
  return a.type & h.i.m.Ys;
};
h.i.m.DH = function (a) {
  return a.type & h.i.m.Lo;
};
h.i.m.sH = function (a) {
  return a.type & h.i.m.hs;
};
h.i.m.cn = function (a) {
  return a.type & h.i.m.So;
};
h.i.m.Wm = function (a) {
  return a.type & h.i.m.Xn;
};
h.i.m.WB = function (a) {
  return a.type & (h.i.m.So | h.i.m.Xn);
};
h.i.m.QB = function (a) {
  return a.type & h.i.m.Ss;
};
h.i.gg = function (a) {
  this.height = this.width = 0;
  this.type = h.i.m.NONE;
  this.Ji = this.Aa = 0;
  this.o = a;
  this.Cd = this.o.Qj;
};
h.i.ca = function (a, c) {
  h.i.ca.u.constructor.call(this, a);
  this.vc = c;
  this.shape = Oa(this.o, c);
  this.Gh = !!this.shape.isDynamic;
  this.type |= h.i.m.Lx;
};
h.g.object.U(h.i.ca, h.i.gg);
h.i.Fo = function (a, c) {
  h.i.Fo.u.constructor.call(this, a, c);
  this.type |= h.i.m.lz;
  this.height = this.Gh ? 0 : this.shape.height;
  this.Gd = this.width = this.Gh ? 0 : this.shape.width;
  this.Zc = this.o.Ci;
  this.gk = 0;
};
h.g.object.U(h.i.Fo, h.i.ca);
h.i.Io = function (a, c) {
  h.i.Io.u.constructor.call(this, a, c);
  this.type |= h.i.m.Go;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
h.g.object.U(h.i.Io, h.i.ca);
h.i.Eo = function (a, c) {
  h.i.Eo.u.constructor.call(this, a, c);
  this.type |= h.i.m.Co;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
h.g.object.U(h.i.Eo, h.i.ca);
h.i.Kj = function (a, c) {
  h.i.Kj.u.constructor.call(this, a, c.connection);
  this.type |= h.i.m.hd;
  this.input = c;
  this.align = c.align;
  (this.qg = c.connection && c.connection.va() ? c.connection.va() : null)
    ? ((a = w(this.qg)), (this.ek = a.width), (this.Am = a.height))
    : (this.Am = this.ek = 0);
  this.Zc = this.gk = 0;
};
h.g.object.U(h.i.Kj, h.i.ca);
h.i.fg = function (a, c) {
  h.i.fg.u.constructor.call(this, a, c);
  this.type |= h.i.m.Rs;
  this.qg
    ? ((this.width = this.ek), (this.height = this.Am))
    : ((this.height = this.o.gy), (this.width = this.o.iy));
  this.Mi = this.Gh ? this.shape.height(this.height) : this.shape.height;
  this.De = this.Gh ? this.shape.width(this.height) : this.shape.width;
  this.qg || (this.width += this.De * (this.Gh ? 2 : 1));
  this.Zc = this.Gh ? this.shape.Zc(this.Mi) : this.o.Ci;
  this.gk = this.Gh ? this.shape.gk(this.De) : 0;
};
h.g.object.U(h.i.fg, h.i.Kj);
h.i.kg = function (a, c) {
  h.i.kg.u.constructor.call(this, a, c);
  this.type |= h.i.m.Et;
  this.height = this.qg ? this.Am + this.o.Dt : this.o.jy;
  this.width = this.o.Cz + this.shape.width;
};
h.g.object.U(h.i.kg, h.i.Kj);
h.i.Zl = function (a, c) {
  h.i.Zl.u.constructor.call(this, a, c);
  this.type |= h.i.m.Es;
  this.height = this.qg ? this.Am - this.o.Ci - this.o.jd : this.shape.height;
  this.width = this.shape.width + this.o.oy;
  this.Zc = this.o.Ci;
  this.Mi = this.shape.height;
  this.De = this.shape.width;
};
h.g.object.U(h.i.Zl, h.i.Kj);
h.i.uo = function (a, c) {
  h.i.uo.u.constructor.call(this, a);
  this.icon = c;
  this.isVisible = c.isVisible();
  this.type |= h.i.m.Ps;
  a = c.hH();
  this.height = a.height;
  this.width = a.width;
};
h.g.object.U(h.i.uo, h.i.gg);
h.i.vo = function (a) {
  h.i.vo.u.constructor.call(this, a);
  this.type |= h.i.m.Ys;
  this.height = this.o.ri.height;
  this.width = this.o.ri.width;
};
h.g.object.U(h.i.vo, h.i.gg);
h.i.gd = function (a, c) {
  h.i.gd.u.constructor.call(this, a);
  this.Xu = c;
  this.xd = c.Ej;
  this.WA = c.kv();
  this.type |= h.i.m.Nb;
  a = this.Xu.Ef();
  this.height = a.height;
  this.width = a.width;
};
h.g.object.U(h.i.gd, h.i.gg);
h.i.po = function (a) {
  h.i.po.u.constructor.call(this, a);
  this.type |= h.i.m.Ms;
  this.height = this.o.yi.height;
  this.width = this.o.yi.width;
  this.Hi = this.height;
};
h.g.object.U(h.i.po, h.i.gg);
h.i.Bi = function (a, c) {
  h.i.Bi.u.constructor.call(this, a);
  this.type = (c && "left" != c ? h.i.m.Ko : h.i.m.xo) | h.i.m.io;
  this.width = this.height = this.o.se;
};
h.g.object.U(h.i.Bi, h.i.gg);
h.i.hm = function (a, c) {
  h.i.hm.u.constructor.call(this, a);
  this.type = (c && "left" != c ? h.i.m.Jo : h.i.m.wo) | h.i.m.io;
  this.width = this.o.me;
  this.height = this.o.me / 2;
};
h.g.object.U(h.i.hm, h.i.gg);
h.i.ef = function (a, c) {
  h.i.ef.u.constructor.call(this, a);
  this.type = this.type | h.i.m.Mo | h.i.m.Us;
  this.width = c;
  this.height = this.o.zz;
};
h.g.object.U(h.i.ef, h.i.gg);
h.i.gh = function (a) {
  this.type = h.i.m.Lo;
  this.elements = [];
  this.Aa = this.Ub = this.ie = this.minWidth = this.minHeight = this.width = this.height = 0;
  this.Bv = this.bj = this.pq = this.Kb = this.vg = !1;
  this.o = a;
  this.Cd = this.o.Qj;
  this.align = null;
};
h.i.gh.prototype.measure = function () {
  throw Error("Unexpected attempt to measure a base Row.");
};
function U(a) {
  for (var c = a.elements.length - 1, d; (d = a.elements[c]); c--)
    if (h.i.m.Bg(d)) return d;
  return null;
}
h.i.gh.prototype.Kn = function () {
  return !0;
};
h.i.gh.prototype.tk = function () {
  return !0;
};
h.i.ih = function (a) {
  h.i.ih.u.constructor.call(this, a);
  this.type |= h.i.m.So;
  this.Hi = this.sf = 0;
  this.DB = !1;
  this.connection = null;
};
h.g.object.U(h.i.ih, h.i.gh);
h.i.ih.prototype.qq = function (a) {
  var c = (a.Me ? "cap" === a.Me : this.o.Ll) && !a.M && !a.T,
    d = a.T && a.T.va();
  return !!a.M || c || (d ? t(d) == a : !1);
};
h.i.ih.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      h.i.m.yd(f) ||
        (h.i.m.Hh(f) ? (d = Math.max(d, f.Hi)) : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.sf = this.Hi = d;
  this.ie = this.width;
};
h.i.ih.prototype.Kn = function () {
  return !1;
};
h.i.ih.prototype.tk = function () {
  return !1;
};
h.i.Xg = function (a) {
  h.i.Xg.u.constructor.call(this, a);
  this.type |= h.i.m.Xn;
  this.Cv = !1;
  this.connection = null;
  this.Td = this.pk = 0;
};
h.g.object.U(h.i.Xg, h.i.gh);
h.i.Xg.prototype.qq = function (a) {
  return !!a.M || !!t(a);
};
h.i.Xg.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      h.i.m.yd(f) ||
        (h.i.m.Dg(f)
          ? (d = Math.max(d, f.height))
          : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.pk = d;
  this.ie = this.width;
};
h.i.Xg.prototype.Kn = function () {
  return !1;
};
h.i.Xg.prototype.tk = function () {
  return !1;
};
h.i.km = function (a, c, d) {
  h.i.km.u.constructor.call(this, a);
  this.type = this.type | h.i.m.Mo | h.i.m.hs;
  this.width = d;
  this.height = c;
  this.bv = !1;
  this.ie = 0;
  this.elements = [new h.i.ef(this.o, d)];
};
h.g.object.U(h.i.km, h.i.gh);
h.i.km.prototype.measure = function () {};
h.i.pi = function (a) {
  h.i.pi.u.constructor.call(this, a);
  this.type |= h.i.m.Ss;
  this.yu = 0;
};
h.g.object.U(h.i.pi, h.i.gh);
h.i.pi.prototype.measure = function () {
  this.width = this.minWidth;
  this.height = this.minHeight;
  for (var a = 0, c = 0, d; (d = this.elements[c]); c++)
    (this.width += d.width),
      h.i.m.Bg(d) &&
        (h.i.m.Ih(d)
          ? (a += d.ek)
          : h.i.m.Lk(d) && 0 != d.ek && (a += d.ek - d.De)),
      h.i.m.yd(d) || (this.height = Math.max(this.height, d.height));
  this.yu = a;
  this.ie = this.width + a;
};
h.i.pi.prototype.tk = function () {
  return !this.vg && !this.Kb;
};
h.i.Od = function (a, c) {
  this.ya = c;
  this.lb = a;
  this.o = this.lb.$();
  this.M = c.M ? new h.i.Fo(this.o, c.M) : null;
  this.gj = Ha(c) && !c.isCollapsed();
  this.isCollapsed = c.isCollapsed();
  this.Pe = c.Pe();
  this.J = c.J;
  this.Sg = this.width = this.yj = this.height = 0;
  this.rows = [];
  this.Lv = [];
  this.Gv = [];
  this.Db = new h.i.ih(this.o);
  this.ob = new h.i.Xg(this.o);
  this.Jn = this.Gd = 0;
};
b = h.i.Od.prototype;
b.measure = function () {
  var a = !!this.ya.T,
    c = (this.ya.Me ? "cap" === this.ya.Me : this.o.Ll) && !this.M && !a;
  this.Db.qq(this.ya)
    ? this.Db.elements.push(new h.i.Bi(this.o))
    : this.Db.elements.push(new h.i.hm(this.o));
  c
    ? ((a = new h.i.po(this.o)), this.Db.elements.push(a), (this.Db.sf = a.Hi))
    : a &&
      ((this.Db.DB = !0),
      (this.Db.connection = new h.i.Io(this.o, this.ya.T)),
      this.Db.elements.push(this.Db.connection));
  this.ya.O.length && this.ya.O[0].type == h.Ra && !this.ya.isCollapsed()
    ? (this.Db.minHeight = this.o.Iz)
    : (this.Db.minHeight = this.o.Hz);
  this.Db.elements.push(new h.i.Bi(this.o, "right"));
  this.rows.push(this.Db);
  a = new h.i.pi(this.o);
  this.Lv.push(a);
  var d = J(this.ya);
  if (d.length) {
    c = 0;
    for (var e; (e = d[c]); c++) {
      var f = new h.i.uo(this.o, e);
      this.isCollapsed && e.UG ? this.Gv.push(f) : a.elements.push(f);
    }
  }
  e = null;
  for (c = 0; (d = this.ya.O[c]); c++)
    if (d.isVisible()) {
      !e ||
        (d.type != h.Ra &&
          e.type != h.Ra &&
          ((d.type != h.eb && d.type != h.df) || this.gj)) ||
        (this.rows.push(a), (a = new h.i.pi(this.o)), this.Lv.push(a));
      for (e = 0; (f = d.Za[e]); e++) a.elements.push(new h.i.gd(this.o, f, d));
      this.iu(d, a);
      e = d;
    }
  this.isCollapsed && ((a.Bv = !0), a.elements.push(new h.i.vo(this.o)));
  (a.elements.length || a.bj) && this.rows.push(a);
  this.mr();
  this.rows.push(this.ob);
  this.gu();
  a = this.rows;
  this.rows = [];
  for (c = 0; c < a.length; c++)
    if ((this.rows.push(a[c]), c != a.length - 1)) {
      d = this.rows;
      e = d.push;
      f = a[c];
      var g = a[c + 1],
        k = new h.i.km(this.o, this.uv(f, g), this.width - this.Gd);
      f.Kb && (k.bv = !0);
      g.Kb && (k.JH = !0);
      e.call(d, k);
    }
  for (e = d = c = a = 0; (f = this.rows[e]); e++)
    f.measure(),
      (c = Math.max(c, f.width)),
      f.Kb && (a = Math.max(a, f.width - U(f).width)),
      (d = Math.max(d, f.ie));
  this.Sg = a;
  this.width = c;
  for (e = 0; (f = this.rows[e]); e++) f.Kb && (f.Sg = this.Sg);
  this.yj = Math.max(c, d);
  this.M &&
    ((this.Gd = this.M.width),
    (this.width += this.M.width),
    (this.yj += this.M.width));
  this.Xo();
  this.Yu();
};
b.mr = function () {
  this.ob.Cv = !!this.ya.X;
  this.ob.minHeight =
    this.ya.O.length && this.ya.O[this.ya.O.length - 1].type == h.Ra
      ? this.o.Fx
      : this.o.Gx;
  this.ob.qq(this.ya)
    ? this.ob.elements.push(new h.i.Bi(this.o))
    : this.ob.elements.push(new h.i.hm(this.o));
  this.ob.Cv &&
    ((this.ob.connection = new h.i.Eo(this.o, this.ya.X)),
    this.ob.elements.push(this.ob.connection));
  this.ob.elements.push(new h.i.Bi(this.o, "right"));
};
b.iu = function (a, c) {
  this.gj && a.type == h.eb
    ? (c.elements.push(new h.i.fg(this.o, a)), (c.pq = !0))
    : a.type == h.Ra
    ? (c.elements.push(new h.i.kg(this.o, a)), (c.Kb = !0))
    : a.type == h.eb
    ? (c.elements.push(new h.i.Zl(this.o, a)), (c.vg = !0))
    : a.type == h.df &&
      ((c.minHeight = Math.max(
        c.minHeight,
        a.S() && a.S().Ca ? this.o.by : this.o.As
      )),
      (c.bj = !0));
  null == c.align && (c.align = a.align);
};
b.gu = function () {
  for (var a = 0, c; (c = this.rows[a]); a++) {
    var d = c.elements;
    c.elements = [];
    c.Kn() && c.elements.push(new h.i.ef(this.o, this.vh(null, d[0])));
    if (d.length) {
      for (var e = 0; e < d.length - 1; e++)
        c.elements.push(d[e]),
          c.elements.push(new h.i.ef(this.o, this.vh(d[e], d[e + 1])));
      c.elements.push(d[d.length - 1]);
      c.tk() &&
        c.elements.push(new h.i.ef(this.o, this.vh(d[d.length - 1], null)));
    }
  }
};
b.vh = function (a, c) {
  if (!a && c && h.i.m.Ih(c)) return this.o.Ft;
  if (a && h.i.m.Bg(a) && !c) {
    if (h.i.m.Lk(a)) return this.o.se;
    if (h.i.m.Ag(a)) return this.o.tc;
    if (h.i.m.Ih(a)) return this.o.se;
  }
  return a && h.i.m.Mk(a) && c && (h.i.m.jj(c) || h.i.m.Dg(c))
    ? c.Cd
    : a && h.i.m.Cg(a) && c && (h.i.m.jj(c) || h.i.m.Dg(c))
    ? c.Cd - this.o.me
    : this.o.jd;
};
b.Xo = function () {
  for (var a = 0, c; (c = this.rows[a]); a++)
    if (c.Kb) Mc(this, c);
    else {
      var d = this.Ak(c) - c.width;
      0 < d && Nc(c, d);
      h.i.m.WB(c) && (c.ie = c.width);
    }
};
b.Ak = function () {
  return this.width - this.Gd;
};
function Nc(a, c) {
  a: {
    var d = 0;
    for (var e; (e = a.elements[d]); d++)
      if (h.i.m.yd(e)) {
        d = e;
        break a;
      }
    d = null;
  }
  a: {
    e = a.elements.length - 1;
    for (var f; (f = a.elements[e]); e--)
      if (h.i.m.yd(f)) {
        e = f;
        break a;
      }
    e = null;
  }
  if (a.vg || a.Kb) a.ie += c;
  a.align == h.Tn
    ? (e.width += c)
    : a.align == h.Sn
    ? ((d.width += c / 2), (e.width += c / 2))
    : a.align == h.Ml
    ? (d.width += c)
    : (e.width += c);
  a.width += c;
}
function Mc(a, c) {
  var d = U(c),
    e = c.width - d.width,
    f = a.Sg;
  e = f - e;
  0 < e && Nc(c, e);
  e = c.width;
  f = a.Ak(c);
  d.width += f - e;
  d.height = Math.max(d.height, c.height);
  c.width += f - e;
  c.ie = Math.max(c.width, a.Sg + c.yu);
}
b.uv = function () {
  return this.o.jd;
};
b.jv = function (a, c) {
  return h.i.m.yd(c)
    ? a.Ub + c.height / 2
    : h.i.m.Wm(a)
    ? ((a = a.Ub + a.height - a.pk),
      h.i.m.Dg(c) ? a + c.height / 2 : a - c.height / 2)
    : h.i.m.cn(a)
    ? h.i.m.Hh(c)
      ? a.sf - c.height / 2
      : a.sf + c.height / 2
    : a.Ub + a.height / 2;
};
function Oc(a, c) {
  for (var d = c.Aa, e = 0, f; (f = c.elements[e]); e++)
    h.i.m.yd(f) && (f.height = c.height),
      (f.Aa = d),
      (f.Ji = a.jv(c, f)),
      (d += f.width);
}
b.Yu = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++)
    (e.Ub = c),
      (e.Aa = this.Gd),
      (c += e.height),
      (a = Math.max(a, e.ie)),
      Oc(this, e);
  this.M &&
    this.ya.X &&
    this.ya.X.isConnected() &&
    (a = Math.max(a, w(this.ya.X.va()).width));
  this.yj = a + this.Gd;
  this.height = c;
  this.Jn = this.Db.sf;
  this.ob.Td = c - this.ob.pk;
};
h.i.rc = function (a, c) {
  this.ya = a;
  this.ga = c;
  a.Sa();
  this.Vm = this.Fa = "";
  this.o = c.lb.$();
};
b = h.i.rc.prototype;
b.draw = function () {
  Pc(this);
  Qc(this);
  Rc(this);
  this.ya.qb.Ir(this.Fa + "\n" + this.Vm);
  this.ga.J && this.ya.qb.Wp();
  h.i.Jl && this.ya.Br.OA(this.ya, this.ga);
  Sc(this);
};
function Sc(a) {
  a.ya.height = a.ga.height;
  a.ya.width = a.ga.yj;
}
function Pc(a) {
  for (var c = 0, d; (d = a.ga.Gv[c]); c++)
    d.icon.IB.setAttribute("display", "none");
}
function Qc(a) {
  a.Rp();
  for (var c = 1; c < a.ga.rows.length - 1; c++) {
    var d = a.ga.rows[c];
    d.Bv ? a.rk(d) : d.Kb ? a.Qp(d) : d.vg ? a.Sp(d) : a.Vu(d);
  }
  a.Np();
  a.Pp();
}
b.Rp = function () {
  var a = this.ga.Db,
    c = a.elements,
    d = this.ga.Db;
  if (d.connection) {
    var e = d.Aa + d.Cd;
    R(d.connection.vc, this.ga.J ? -e : e, 0);
  }
  this.Fa += h.g.s.moveBy(a.Aa, this.ga.Jn);
  for (d = 0; (e = c[d]); d++)
    h.i.m.Cg(e)
      ? (this.Fa += this.o.Rj.Tr)
      : h.i.m.Qv(e)
      ? (this.Fa += this.o.Rj.RD)
      : h.i.m.jj(e)
      ? (this.Fa += e.shape.Lg)
      : h.i.m.Hh(e)
      ? (this.Fa += this.o.yi.path)
      : h.i.m.yd(e) && (this.Fa += h.g.s.V("h", e.width));
  this.Fa += h.g.s.V("v", a.height);
};
b.rk = function (a) {
  this.Fa += this.o.ri.path + h.g.s.V("v", a.height - this.o.ri.height);
};
b.Sp = function (a) {
  var c = U(a);
  this.Bw(a);
  var d = "function" == typeof c.shape.Ed ? c.shape.Ed(c.height) : c.shape.Ed;
  this.Fa += h.g.s.V("H", c.Aa + c.width) + d + h.g.s.V("v", a.height - c.Mi);
};
b.Qp = function (a) {
  var c = U(a);
  this.Fa +=
    h.g.s.V("H", c.Aa + c.Cd + c.shape.width) +
    (c.shape.xw + h.g.s.V("h", -(c.Cd - this.o.dm.width)) + this.o.dm.kr) +
    h.g.s.V("v", a.height - 2 * this.o.dm.height) +
    this.o.dm.xn +
    h.g.s.V("H", a.Aa + a.width);
  this.Ew(a);
};
b.Vu = function (a) {
  this.Fa += h.g.s.V("V", a.Ub + a.height);
};
b.Np = function () {
  var a = this.ga.ob,
    c = a.elements;
  this.Dw();
  for (var d = 0, e = "", f = c.length - 1, g; (g = c[f]); f--)
    h.i.m.Dg(g)
      ? (e += g.shape.xw)
      : h.i.m.Mk(g)
      ? (e += h.g.s.V("H", a.Aa))
      : h.i.m.Cg(g)
      ? (e += this.o.Rj.gp)
      : h.i.m.Qv(g)
      ? ((e += this.o.Rj.bA), (d = this.o.Rj.sD))
      : h.i.m.yd(g) && (e += h.g.s.V("h", -1 * g.width));
  this.Fa += h.g.s.V("V", a.Td - d);
  this.Fa += e;
};
b.Pp = function () {
  var a = this.ga.M;
  if (this.ga.M) {
    var c = this.ga.Gd + this.ga.M.gk;
    R(this.ya.M, this.ga.J ? -c : c, this.ga.M.Zc);
  }
  a &&
    ((c = a.Zc + a.height),
    (a = "function" == typeof a.shape.al ? a.shape.al(a.height) : a.shape.al),
    (this.Fa += h.g.s.V("V", c) + a));
  this.Fa += "z";
};
function Rc(a) {
  for (var c = 0, d; (d = a.ga.rows[c]); c++)
    for (var e = 0, f; (f = d.elements[e]); e++)
      if (h.i.m.Ag(f)) a.Op(f);
      else if (h.i.m.fj(f) || h.i.m.Kf(f)) {
        var g = a;
        if (h.i.m.Kf(f)) var k = f.Xu.Ba();
        else h.i.m.fj(f) && (k = f.icon.IB);
        var l = f.Ji - f.height / 2,
          m = f.Aa,
          n = "";
        g.ga.J &&
          ((m = -(m + f.width)), f.WA && ((m += f.width), (n = "scale(-1 1)")));
        h.i.m.fj(f)
          ? (k.setAttribute("display", "block"),
            k.setAttribute("transform", "translate(" + m + "," + l + ")"),
            f.icon.rA())
          : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        g.ga.Pe && k.setAttribute("display", "none");
      }
}
b.Op = function (a) {
  var c = a.width,
    d = a.height,
    e = a.Zc,
    f = a.Mi + e;
  this.Vm +=
    h.g.s.moveTo(a.Aa + a.De, a.Ji - d / 2) +
    h.g.s.V("v", e) +
    a.shape.Ed +
    h.g.s.V("v", d - f) +
    h.g.s.V("h", c - a.De) +
    h.g.s.V("v", -d) +
    "z";
  this.Cw(a);
};
b.Cw = function (a) {
  var c = a.Ji - a.height / 2;
  if (a.vc) {
    var d = a.Aa + a.De + a.gk;
    this.ga.J && (d *= -1);
    R(a.vc, d, c + a.Zc);
  }
};
b.Ew = function (a) {
  var c = U(a);
  if (c.vc) {
    var d = a.Aa + a.Sg + c.Cd;
    this.ga.J && (d *= -1);
    R(c.vc, d, a.Ub);
  }
};
b.Bw = function (a) {
  var c = U(a);
  if (c.vc) {
    var d = a.Aa + a.width;
    this.ga.J && (d *= -1);
    R(c.vc, d, a.Ub);
  }
};
b.Dw = function () {
  var a = this.ga.ob;
  if (a.connection) {
    var c = a.connection,
      d = c.Aa;
    R(c.vc, this.ga.J ? -d : d, a.Td);
  }
};
h.i.jf = function (a, c, d) {
  this.Oi = d;
  this.We = a;
  this.Cb = h.g.j.R(h.g.F.hf, { class: "blocklyPath" }, this.We);
  this.style = c;
  this.Nq = this.nk = null;
};
b = h.i.jf.prototype;
b.Ir = function (a) {
  this.Cb.setAttribute("d", a);
};
b.Wp = function () {
  this.Cb.setAttribute("transform", "scale(-1 1)");
};
b.Qf = function (a) {
  a ? (this.We.appendChild(a), (this.nk = a)) : (this.nk = null);
};
b.Tf = function (a) {
  a
    ? (this.nk ? this.We.insertBefore(a, this.nk) : this.We.appendChild(a),
      (this.Nq = a))
    : (this.Nq = null);
};
b.bc = function (a) {
  this.Cb.setAttribute("stroke", this.style.Li);
  this.Cb.setAttribute("fill", this.style.nh);
  this.kx(a.Ca);
  this.Vr(!a.isEnabled() || Gb(a));
};
b.Yh = function (a) {
  this.style = a;
};
function I(a, c, d) {
  d ? h.g.j.Hb(a.We, c) : h.g.j.Qc(a.We, c);
}
b.ix = function (a) {
  a
    ? this.Cb.setAttribute("filter", "url(#" + this.Oi.Lm + ")")
    : this.Cb.setAttribute("filter", "none");
};
b.kx = function (a) {
  a &&
    (this.Cb.setAttribute("stroke", "none"),
    this.Cb.setAttribute("fill", this.style.ym));
};
b.Vr = function (a) {
  I(this, "blocklyDisabled", a);
  a && this.Cb.setAttribute("fill", "url(#" + this.Oi.Ru + ")");
};
function Qb(a, c) {
  I(a, "blocklySelected", c);
}
h.i.lf = function (a) {
  this.name = a;
  this.hr = this.o = null;
};
b = h.i.lf.prototype;
b.Yd = function () {
  return this.name + "-renderer";
};
b.ab = function (a, c) {
  this.o = this.Hq();
  c && ((this.hr = c), h.g.object.Hg(this.o, c));
  this.o.ql(a);
  this.o.ab();
};
b.jb = function (a, c) {
  this.o.jb(a, this.name + "-" + c.name, "." + this.Yd() + "." + c.Yd());
};
b.qr = function (a, c) {
  var d = this.$();
  d.H();
  this.o = this.Hq();
  this.hr && h.g.object.Hg(this.o, this.hr);
  this.o.hl = d.hl;
  this.o.ql(c);
  this.o.ab();
  this.jb(a, c);
};
b.H = function () {
  this.o && this.o.H();
};
b.Hq = function () {
  return new h.i.cf();
};
b.$v = function (a) {
  return new h.i.Od(this, a);
};
b.Yv = function (a, c) {
  return new h.i.rc(a, c);
};
b.Zv = function (a, c) {
  return new h.i.jf(a, c, this.o);
};
b.$ = function () {
  return this.o;
};
b.Ea = function (a) {
  if (h.i.Jl && !a.Br) {
    if (!h.i.Bs)
      throw Error("Missing require for Blockly.blockRendering.Debug");
    var c = new h.i.Bs(this.$());
    a.Br = c;
  }
  c = this.$v(a);
  c.measure();
  this.Yv(a, c).draw();
};
h.Z = {};
h.Z.cf = function () {
  h.Z.cf.u.constructor.call(this);
  this.no = !1;
  this.$b = 1;
  this.Zy = 30;
  this.Dt = -this.Do / 2;
};
h.g.object.U(h.Z.cf, h.i.cf);
h.Z.cf.prototype.Zp = function (a) {
  return h.Z.cf.u.Zp.call(this, a).concat([
    a + " .blocklyInsertionMarker>.blocklyPathLight,",
    a + " .blocklyInsertionMarker>.blocklyPathDark {",
    "fill-opacity: " + this.cm + ";",
    "stroke: none;",
    "}",
  ]);
};
h.Z.Os = function (a) {
  this.ga = a;
  this.Hk = this.ba = "";
  this.ac = this.ga.J;
  a = a.lb;
  this.o = a.$();
  this.bd = a.bd;
  this.Mc = this.bd.OFFSET;
  this.gr = this.bd.mz;
  this.dj = this.bd.Ny;
  this.fl = this.bd.Ho;
  this.rC = this.bd.ui;
  this.ID = this.bd.yi;
  this.Tv = this.bd.ri;
};
h.Z.Os.prototype.rk = function (a) {
  this.ga.J &&
    (this.ba += this.Tv.Lg + h.g.s.V("v", a.height - this.Tv.height - this.Mc));
};
function Tc(a, c) {
  var d = c.Aa + c.width - a.Mc;
  c.bv && (a.ba += h.g.s.V("H", d));
  a.ac &&
    ((a.ba += h.g.s.V("H", d)),
    c.height > a.Mc && (a.ba += h.g.s.V("V", c.Ub + c.height - a.Mc)));
}
h.Z.fg = function (a, c) {
  h.Z.fg.u.constructor.call(this, a, c);
  this.qg && ((this.width += this.o.$b), (this.height += this.o.$b));
};
h.g.object.U(h.Z.fg, h.i.fg);
h.Z.kg = function (a, c) {
  h.Z.kg.u.constructor.call(this, a, c);
  this.qg && (this.height += this.o.$b);
};
h.g.object.U(h.Z.kg, h.i.kg);
h.Z.Od = function (a, c) {
  h.Z.Od.u.constructor.call(this, a, c);
};
h.g.object.U(h.Z.Od, h.i.Od);
b = h.Z.Od.prototype;
b.mr = function () {
  h.Z.Od.u.mr.call(this);
  (this.ya.O.length && this.ya.O[this.ya.O.length - 1].type == h.Ra) ||
    (this.ob.minHeight = this.o.jd - this.o.$b);
};
b.iu = function (a, c) {
  this.gj && a.type == h.eb
    ? (c.elements.push(new h.Z.fg(this.o, a)), (c.pq = !0))
    : a.type == h.Ra
    ? (c.elements.push(new h.Z.kg(this.o, a)), (c.Kb = !0))
    : a.type == h.eb
    ? (c.elements.push(new h.i.Zl(this.o, a)), (c.vg = !0))
    : a.type == h.df &&
      ((c.minHeight = Math.max(c.minHeight, this.o.As)), (c.bj = !0));
  this.gj || null != c.align || (c.align = a.align);
};
b.gu = function () {
  for (var a = !1, c = 0, d; (d = this.rows[c]); c++) d.vg && (a = !0);
  for (c = 0; (d = this.rows[c]); c++) {
    var e = d.elements;
    d.elements = [];
    d.Kn() && d.elements.push(new h.i.ef(this.o, this.vh(null, e[0])));
    if (e.length) {
      for (var f = 0; f < e.length - 1; f++) {
        d.elements.push(e[f]);
        var g = this.vh(e[f], e[f + 1]);
        d.elements.push(new h.i.ef(this.o, g));
      }
      d.elements.push(e[e.length - 1]);
      d.tk() &&
        ((g = this.vh(e[e.length - 1], null)),
        a && d.bj && (g += this.o.No),
        d.elements.push(new h.i.ef(this.o, g)));
    }
  }
};
b.vh = function (a, c) {
  if (!a)
    return c && h.i.m.Kf(c) && c.xd
      ? this.o.jd
      : c && h.i.m.Ag(c)
      ? this.o.ct
      : c && h.i.m.Ih(c)
      ? this.o.Ft
      : this.o.tc;
  if (!h.i.m.Bg(a) && (!c || h.i.m.Ih(c)))
    return h.i.m.Kf(a) && a.xd
      ? this.o.jd
      : h.i.m.fj(a)
      ? 2 * this.o.tc + 1
      : h.i.m.Hh(a)
      ? this.o.se
      : h.i.m.UB(a)
      ? this.o.tc
      : h.i.m.Cg(a)
      ? this.o.bz
      : h.i.m.Ov(a)
      ? this.o.se
      : this.o.tc;
  if (h.i.m.Bg(a) && !c) {
    if (h.i.m.Lk(a)) return this.o.se;
    if (h.i.m.Ag(a)) return this.o.tc;
    if (h.i.m.Ih(a)) return this.o.se;
  }
  if (!h.i.m.Bg(a) && c && h.i.m.Bg(c)) {
    if (h.i.m.Kf(a) && a.xd) {
      if (h.i.m.Ag(c) || h.i.m.Lk(c)) return this.o.wz;
    } else {
      if (h.i.m.Ag(c) || h.i.m.Lk(c)) return this.o.ct;
      if (h.i.m.Ih(c)) return this.o.tc;
    }
    return this.o.tc - 1;
  }
  if (h.i.m.fj(a) && c && !h.i.m.Bg(c)) return this.o.tc;
  if (h.i.m.Ag(a) && c && h.i.m.Kf(c)) return c.xd ? this.o.jd : this.o.tc;
  if (h.i.m.Mk(a) && c) {
    if (h.i.m.Hh(c)) return this.o.se;
    if (h.i.m.jj(c)) return c.Cd;
    if (h.i.m.Dg(c)) return (a = ((this.J ? 1 : -1) * this.o.$b) / 2), c.Cd + a;
  }
  if (h.i.m.Cg(a) && c) {
    if (h.i.m.jj(c)) return c.Cd - this.o.me;
    if (h.i.m.Dg(c))
      return (a = ((this.J ? 1 : -1) * this.o.$b) / 2), c.Cd - this.o.me + a;
  }
  return (h.i.m.Kf(a) && c && h.i.m.Kf(c) && a.xd == c.xd) || (c && h.i.m.Ov(c))
    ? this.o.tc
    : this.o.jd;
};
b.uv = function (a, c) {
  return h.i.m.cn(a) && h.i.m.Wm(c)
    ? this.o.ey
    : h.i.m.cn(a) || h.i.m.Wm(c)
    ? this.o.se
    : a.vg && c.vg
    ? this.o.tc
    : !a.Kb && c.Kb
    ? this.o.Bx
    : (a.Kb && c.Kb) || (!a.Kb && c.bj) || a.bj
    ? this.o.tc
    : this.o.jd;
};
b.jv = function (a, c) {
  if (h.i.m.yd(c)) return a.Ub + c.height / 2;
  if (h.i.m.Wm(a))
    return (
      (a = a.Ub + a.height - a.pk),
      h.i.m.Dg(c) ? a + c.height / 2 : a - c.height / 2
    );
  if (h.i.m.cn(a))
    return h.i.m.Hh(c) ? a.sf - c.height / 2 : a.sf + c.height / 2;
  var d = a.Ub;
  h.i.m.Kf(c) || h.i.m.fj(c)
    ? ((d += c.height / 2),
      (a.pq || a.Kb) && c.height + this.o.Gt <= a.height && (d += this.o.Gt))
    : (d = h.i.m.Ag(c) ? d + c.height / 2 : d + a.height / 2);
  return d;
};
b.Xo = function () {
  if (this.gj) {
    for (
      var a = 0, c = null, d = this.rows.length - 1, e;
      (e = this.rows[d]);
      d--
    )
      (e.Tq = a),
        h.i.m.QB(e) &&
          (e.Kb && Mc(this, e),
          c && c.Kb && e.width < c.width ? (e.Tq = c.width) : (a = e.width),
          (c = e));
    for (d = a = 0; (e = this.rows[d]); d++)
      e.Kb
        ? (a = this.Ak(e))
        : h.i.m.yd(e)
        ? (e.width = Math.max(a, e.Tq))
        : ((a = Math.max(a, e.Tq) - e.width), 0 < a && Nc(e, a), (a = e.width));
  } else h.Z.Od.u.Xo.call(this);
};
b.Ak = function (a) {
  return this.gj && a.Kb
    ? this.Sg + this.o.Zy + this.Gd
    : h.Z.Od.u.Ak.call(this, a);
};
b.Yu = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++) {
    e.Ub = c;
    e.Aa = this.Gd;
    c += e.height;
    a = Math.max(a, e.ie);
    var f = c - this.Db.Hi;
    e == this.ob &&
      f < this.o.Nj &&
      ((f = this.o.Nj - f), (this.ob.height += f), (c += f));
    Oc(this, e);
  }
  this.M &&
    this.ya.X &&
    this.ya.X.isConnected() &&
    (a = Math.max(a, w(this.ya.X.va()).width - this.o.$b));
  this.ob.Td = c - this.ob.pk;
  this.yj = a + this.Gd + this.o.$b;
  this.width += this.o.$b;
  this.height = c + this.o.$b;
  this.Jn = this.Db.sf;
};
h.Z.rc = function (a, c) {
  h.Z.rc.u.constructor.call(this, a, c);
  this.Ne = new h.Z.Os(c);
};
h.g.object.U(h.Z.rc, h.i.rc);
b = h.Z.rc.prototype;
b.draw = function () {
  Pc(this);
  Qc(this);
  Rc(this);
  var a = this.ya.qb;
  a.Ir(this.Fa + "\n" + this.Vm);
  var c = this.Ne;
  a.Zh.setAttribute("d", c.ba + "\n" + c.Hk);
  this.ga.J && a.Wp();
  h.i.Jl && this.ya.Br.OA(this.ya, this.ga);
  Sc(this);
};
b.Rp = function () {
  var a = this.Ne,
    c = this.ga.Db;
  a.ba += h.g.s.moveBy(c.Aa, a.ga.Jn);
  for (var d = 0, e; (e = c.elements[d]); d++)
    h.i.m.Mk(e)
      ? (a.ba += a.bd.Ct)
      : h.i.m.Cg(e)
      ? (a.ba += a.gr.Tr(a.ac))
      : h.i.m.jj(e)
      ? (a.ba += a.rC.Lg)
      : h.i.m.Hh(e)
      ? (a.ba += a.ID.path(a.ac))
      : h.i.m.yd(e) &&
        0 != e.width &&
        (a.ba += h.g.s.V("H", e.Aa + e.width - a.Mc));
  a.ba += h.g.s.V("H", c.Aa + c.width - a.Mc);
  Tc(this.Ne, this.ga.Db);
  h.Z.rc.u.Rp.call(this);
};
b.rk = function (a) {
  this.Ne.rk(a);
  h.Z.rc.u.rk.call(this, a);
};
b.Sp = function (a) {
  var c = this.Ne,
    d = U(a);
  if (c.ac) {
    var e = a.height - d.Mi;
    c.ba +=
      h.g.s.moveTo(d.Aa + d.width - c.Mc, a.Ub) +
      c.fl.Ed(c.ac) +
      h.g.s.V("v", e);
  } else c.ba += h.g.s.moveTo(d.Aa + d.width, a.Ub) + c.fl.Ed(c.ac);
  h.Z.rc.u.Sp.call(this, a);
};
b.Qp = function (a) {
  var c = this.Ne,
    d = U(a);
  if (c.ac) {
    var e = a.height - 2 * c.dj.height;
    c.ba +=
      h.g.s.moveTo(d.Aa, a.Ub) +
      c.dj.kr(c.ac) +
      h.g.s.V("v", e) +
      c.dj.xn(c.ac) +
      h.g.s.lineTo(a.width - d.Aa - c.dj.width, 0);
  } else
    c.ba +=
      h.g.s.moveTo(d.Aa, a.Ub + a.height) +
      c.dj.xn(c.ac) +
      h.g.s.lineTo(a.width - d.Aa - c.dj.width, 0);
  h.Z.rc.u.Qp.call(this, a);
};
b.Vu = function (a) {
  Tc(this.Ne, a);
  this.Fa += h.g.s.V("H", a.Aa + a.width) + h.g.s.V("V", a.Ub + a.height);
};
b.Np = function () {
  var a = this.Ne,
    c = this.ga.ob;
  if (a.ac) a.ba += h.g.s.V("V", c.Td - a.Mc);
  else {
    var d = a.ga.ob.elements[0];
    h.i.m.Mk(d)
      ? (a.ba += h.g.s.moveTo(c.Aa + a.Mc, c.Td - a.Mc))
      : h.i.m.Cg(d) &&
        ((a.ba += h.g.s.moveTo(c.Aa, c.Td)), (a.ba += a.gr.gp()));
  }
  h.Z.rc.u.Np.call(this);
};
b.Pp = function () {
  var a = this.Ne,
    c = a.ga.M;
  c &&
    ((c = c.Zc + c.height),
    a.ac
      ? (a.ba += h.g.s.moveTo(a.ga.Gd, c))
      : ((a.ba += h.g.s.moveTo(a.ga.Gd + a.Mc, a.ga.ob.Td - a.Mc)),
        (a.ba += h.g.s.V("V", c))),
    (a.ba += a.fl.al(a.ac)));
  a.ac ||
    ((c = a.ga.Db),
    (a.ba = h.i.m.Cg(c.elements[0])
      ? a.ba + h.g.s.V("V", a.gr.height)
      : a.ba + h.g.s.V("V", c.sf + a.Mc)));
  h.Z.rc.u.Pp.call(this);
};
b.Op = function (a) {
  var c = this.Ne,
    d = c.Mc,
    e = a.Aa + a.De,
    f = a.Ji - a.height / 2,
    g = a.width - a.De,
    k = f + d;
  if (c.ac) {
    f = a.Zc - d;
    var l = a.height - (a.Zc + a.Mi) + d;
    c.Hk +=
      h.g.s.moveTo(e - d, k) +
      h.g.s.V("v", f) +
      c.fl.Ed(c.ac) +
      h.g.s.V("v", l) +
      h.g.s.V("h", g);
  } else
    c.Hk +=
      h.g.s.moveTo(a.Aa + a.width + d, k) +
      h.g.s.V("v", a.height) +
      h.g.s.V("h", -g) +
      h.g.s.moveTo(e, f + a.Zc) +
      c.fl.Ed(c.ac);
  h.Z.rc.u.Op.call(this, a);
};
b.Cw = function (a) {
  var c = a.Ji - a.height / 2;
  if (a.vc) {
    var d = a.Aa + a.De + this.o.$b;
    this.ga.J && (d *= -1);
    R(a.vc, d, c + a.Zc + this.o.$b);
  }
};
b.Ew = function (a) {
  var c = U(a);
  if (c.vc) {
    var d = a.Aa + a.Sg + c.Cd;
    d = this.ga.J ? -1 * d : d + this.o.$b;
    R(c.vc, d, a.Ub + this.o.$b);
  }
};
b.Bw = function (a) {
  var c = U(a);
  if (c.vc) {
    var d = a.Aa + a.width + this.o.$b;
    this.ga.J && (d *= -1);
    R(c.vc, d, a.Ub);
  }
};
b.Dw = function () {
  var a = this.ga.ob;
  if (a.connection) {
    var c = a.connection,
      d = c.Aa;
    R(c.vc, (this.ga.J ? -d : d) + this.o.$b / 2, a.Td + this.o.$b);
  }
};
h.Z.Ns = function (a) {
  this.Ni = a;
  this.OFFSET = 0.5;
  this.Ct = h.g.s.moveBy(this.OFFSET, this.OFFSET);
};
b = h.Z.Ns.prototype;
b.ab = function () {
  this.Ny = Uc(this);
  this.mz = Vc(this);
  this.Ho = this.Kq();
  this.ui = this.Jq();
  this.ri = this.Iq();
  this.yi = this.Lq();
};
function Uc(a) {
  var c = a.Ni.me;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c + a) - a,
    e =
      h.g.s.moveBy(d, d) + h.g.s.arc("a", "0 0,0", c, h.g.s.za(-d - a, c - d)),
    f = h.g.s.arc("a", "0 0,0", c + a, h.g.s.za(c + a, c + a)),
    g =
      h.g.s.moveBy(d, -d) +
      h.g.s.arc("a", "0 0,0", c + a, h.g.s.za(c - d, d + a));
  return {
    width: c + a,
    height: c,
    kr: function (k) {
      return k ? e : "";
    },
    xn: function (k) {
      return k ? f : g;
    },
  };
}
function Vc(a) {
  var c = a.Ni.me;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c - a) + a,
    e =
      h.g.s.moveBy(d, d) +
      h.g.s.arc("a", "0 0,1", c - a, h.g.s.za(c - d, -d + a)),
    f =
      h.g.s.moveBy(a, c) + h.g.s.arc("a", "0 0,1", c - a, h.g.s.za(c, -c + a)),
    g = -d,
    k =
      h.g.s.moveBy(d, g) +
      h.g.s.arc("a", "0 0,1", c - a, h.g.s.za(-d + a, -g - c));
  return {
    height: c,
    Tr: function (l) {
      return l ? e : f;
    },
    gp: function () {
      return k;
    },
  };
}
b.Kq = function () {
  var a = this.Ni.No,
    c = this.Ni.Vj,
    d = h.g.s.moveBy(-2, -c + 3.4) + h.g.s.lineTo(-0.45 * a, -2.1),
    e =
      h.g.s.V("v", 2.5) +
      h.g.s.moveBy(0.97 * -a, 2.5) +
      h.g.s.curve("q", [h.g.s.za(0.05 * -a, 10), h.g.s.za(0.3 * a, 9.5)]) +
      h.g.s.moveBy(0.67 * a, -1.9) +
      h.g.s.V("v", 2.5),
    f =
      h.g.s.V("v", -1.5) +
      h.g.s.moveBy(-0.92 * a, -0.5) +
      h.g.s.curve("q", [h.g.s.za(-0.19 * a, -5.5), h.g.s.za(0, -11)]) +
      h.g.s.moveBy(0.92 * a, 1),
    g = h.g.s.moveBy(-5, c - 0.7) + h.g.s.lineTo(0.46 * a, -2.1);
  return {
    width: a,
    height: c,
    al: function (k) {
      return k ? d : f;
    },
    Ed: function (k) {
      return k ? e : g;
    },
  };
};
b.Jq = function () {
  return { Lg: h.g.s.V("h", this.OFFSET) + this.Ni.ui.Lg };
};
b.Iq = function () {
  return {
    Lg:
      h.g.s.lineTo(5.1, 2.6) +
      h.g.s.moveBy(-10.2, 6.8) +
      h.g.s.lineTo(5.1, 2.6),
    height: 12,
    width: 10.2,
  };
};
b.Lq = function () {
  var a = this.Ni.yi.height,
    c =
      h.g.s.moveBy(25, -8.7) +
      h.g.s.curve("c", [
        h.g.s.za(29.7, -6.2),
        h.g.s.za(57.2, -0.5),
        h.g.s.za(75, 8.7),
      ]),
    d =
      h.g.s.curve("c", [
        h.g.s.za(17.8, -9.2),
        h.g.s.za(45.3, -14.9),
        h.g.s.za(75, -8.7),
      ]) + h.g.s.moveTo(100.5, a + 0.5);
  return {
    path: function (e) {
      return e ? c : d;
    },
  };
};
h.Z.jf = function (a, c, d) {
  this.Oi = d;
  this.We = a;
  this.Cl = h.g.j.R(
    h.g.F.hf,
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.We
  );
  this.Cb = h.g.j.R(h.g.F.hf, { class: "blocklyPath" }, this.We);
  this.Zh = h.g.j.R(h.g.F.hf, { class: "blocklyPathLight" }, this.We);
  this.qp = "#000000";
  this.style = c;
};
h.g.object.U(h.Z.jf, h.i.jf);
b = h.Z.jf.prototype;
b.Ir = function (a) {
  this.Cb.setAttribute("d", a);
  this.Cl.setAttribute("d", a);
};
b.Wp = function () {
  this.Cb.setAttribute("transform", "scale(-1 1)");
  this.Zh.setAttribute("transform", "scale(-1 1)");
  this.Cl.setAttribute("transform", "translate(1,1) scale(-1 1)");
};
b.bc = function (a) {
  this.Zh.style.display = "";
  this.Cl.style.display = "";
  this.Zh.setAttribute("stroke", this.style.Li);
  this.Cl.setAttribute("fill", this.qp);
  h.Z.jf.u.bc.call(this, a);
  this.Cb.setAttribute("stroke", "none");
};
b.Yh = function (a) {
  this.style = a;
  this.qp = h.g.pb.cp("#000", this.style.nh, 0.2) || this.qp;
};
b.ix = function (a) {
  a
    ? (this.Cb.setAttribute("filter", "url(#" + this.Oi.Lm + ")"),
      (this.Zh.style.display = "none"))
    : (this.Cb.setAttribute("filter", "none"),
      (this.Zh.style.display = "inline"));
};
b.kx = function (a) {
  a &&
    ((this.Zh.style.display = "none"),
    this.Cl.setAttribute("fill", this.style.ym),
    this.Cb.setAttribute("stroke", "none"),
    this.Cb.setAttribute("fill", this.style.ym));
};
b.Vr = function (a) {
  h.Z.jf.u.Vr.call(this, a);
  a && this.Cb.setAttribute("stroke", "none");
};
h.Z.lf = function (a) {
  h.Z.lf.u.constructor.call(this, a);
  this.bd = null;
};
h.g.object.U(h.Z.lf, h.i.lf);
b = h.Z.lf.prototype;
b.ab = function (a, c) {
  h.Z.lf.u.ab.call(this, a, c);
  this.bd = new h.Z.Ns(this.$());
  this.bd.ab();
};
b.qr = function (a, c) {
  h.Z.lf.u.qr.call(this, a, c);
  this.bd.ab();
};
b.Hq = function () {
  return new h.Z.cf();
};
b.$v = function (a) {
  return new h.Z.Od(this, a);
};
b.Yv = function (a, c) {
  return new h.Z.rc(a, c);
};
b.Zv = function (a, c) {
  return new h.Z.jf(a, c, this.$());
};
h.i.register("geras", h.Z.lf);
h.K.ADD_COMMENT = "Add Comment";
h.K.CANNOT_DELETE_VARIABLE_PROCEDURE =
  "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
h.K.CLEAN_UP = "Clean up Blocks";
h.K.COLLAPSE_ALL = "Collapse Blocks";
h.K.COLLAPSE_BLOCK = "Collapse Block";
h.K.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
h.K.DELETE_BLOCK = "Delete Block";
h.K.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
h.K.DELETE_X_BLOCKS = "Delete %1 Blocks";
h.K.DISABLE_BLOCK = "Disable Block";
h.K.DUPLICATE_BLOCK = "Duplicate";
h.K.DUPLICATE_COMMENT = "Duplicate Comment";
h.K.ENABLE_BLOCK = "Enable Block";
h.K.EXPAND_ALL = "Expand Blocks";
h.K.EXPAND_BLOCK = "Expand Block";
h.K.EXTERNAL_INPUTS = "External Inputs";
h.K.HELP = "Help";
h.K.INLINE_INPUTS = "Inline Inputs";
h.K.NEW_VARIABLE = "Create variable...";
h.K.NEW_VARIABLE_TITLE = "New variable name:";
h.K.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
h.K.REDO = "Redo";
h.K.REMOVE_COMMENT = "Remove Comment";
h.K.RENAME_VARIABLE = "Rename variable...";
h.K.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
h.K.UNDO = "Undo";
h.K.UNNAMED_KEY = "unnamed";
h.K.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
h.K.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "A variable named '%1' already exists for another type: '%2'.";
h.K.WORKSPACE_ARIA_LABEL = "Blockly Workspace";
h.K.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
h.K.PROCEDURES_DEFRETURN_PROCEDURE = h.K.PROCEDURES_DEFNORETURN_PROCEDURE;
var BlocklyStorage = {},
  Wc = null,
  Yc = null;
function Zc() {
  var a = Wc();
  $c("xml=" + encodeURIComponent(a));
}
var V = {};
function $c(a) {
  var c = ad;
  V["/storage"] && V["/storage"].abort();
  V["/storage"] = new XMLHttpRequest();
  V["/storage"].onload = function () {
    200 === this.status
      ? c && c.call(this)
      : bd(T("Games_httpRequestError") + "\nXHR status: " + this.status);
    V["/storage"] = null;
  };
  V["/storage"].open("POST", "/storage");
  V["/storage"].setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  V["/storage"].send(a);
}
function ad() {
  window.location.hash = this.responseText.trim();
  bd(T("Games_linkAlert").replace("%1", window.location.href));
  Yc = Wc();
}
function bd(a) {
  if ("object" === typeof W) {
    var c = document.getElementById("linkButton");
    W.KD(c, a);
  } else alert(a);
}
var B = null,
  cd = "";
function dd() {
  Ac();
  var a = document.getElementById("linkButton");
  a && (uc ? (a.style.display = "none") : ((Wc = ed), Fc(a, Zc)));
  (a = document.getElementById("languageMenu")) &&
    a.addEventListener("change", fd, !0);
}
function ed() {
  var a = h.N.ZD();
  if (1 == B.Qb(!1).length && a.querySelector) {
    var c = a.querySelector("block");
    c && (c.removeAttribute("x"), c.removeAttribute("y"));
  }
  return h.N.Ge(a);
}
function gd() {
  "object" == typeof BlocklyStorage &&
    null !== Yc &&
    Yc != ed() &&
    ((window.location.hash = ""), (Yc = null));
}
function hd(a) {
  var c = document.getElementById("toolbox");
  c && (a.toolbox = c);
  a.media = "third-party/blockly/media/";
  a.oneBasedIndex = !1;
  B = h.xg("blockly", a);
  eb(B, gd);
}
function id() {
  window.location = (uc ? "index.html" : "./") + "?lang=" + sc;
}
function fd() {
  window.sessionStorage && (window.sessionStorage.Xv = ed());
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
function jd() {
  10 > S
    ? (window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        sc +
        "&level=" +
        (S + 1))
    : id();
}
function kd() {
  var a = "".replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
  return a.replace(/\s+$/, "");
}
var W = {
  Jf: !1,
  Ou: null,
  Em: null,
  tl: function (a, c, d, e, f, g) {
    function k() {
      W.Jf &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    W.Jf && W.Gf(!1);
    h.sg() && h.cc(!0);
    W.Jf = !0;
    W.Ou = c;
    W.Em = g;
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
      (W.Bp = h.lh(e, "mousedown", W.EA)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    d && c ? (W.hn(c, !1, 0.2), W.hn(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  Pu: 0,
  Qu: 0,
  EA: function (a) {
    W.Ep();
    if (!h.g.Nk(a)) {
      var c = document.getElementById("dialog");
      W.Pu = c.offsetLeft - a.clientX;
      W.Qu = c.offsetTop - a.clientY;
      W.Dp = h.lh(document, "mouseup", W.Ep);
      W.Cp = h.lh(document, "mousemove", W.FA);
      a.stopPropagation();
    }
  },
  FA: function (a) {
    var c = document.getElementById("dialog"),
      d = W.Pu + a.clientX;
    a = W.Qu + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - c.offsetHeight);
    d = Math.max(d, 0);
    d = Math.min(d, window.innerWidth - c.offsetWidth);
    c.style.left = d + "px";
    c.style.top = a + "px";
  },
  Ep: function () {
    W.Dp && (h.tb(W.Dp), (W.Dp = null));
    W.Cp && (h.tb(W.Cp), (W.Cp = null));
  },
  Gf: function (a) {
    function c() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (W.Jf) {
      W.Ep();
      W.Bp && (h.tb(W.Bp), (W.Bp = null));
      W.Jf = !1;
      W.Em && W.Em();
      W.Em = null;
      var d = !1 === a ? null : W.Ou;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      d && a ? (W.hn(a, !1, 0.8), W.hn(d, !0, 0.2), setTimeout(c, 175)) : c();
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
  hn: function (a, c, d) {
    function e() {
      f.style.width = g.width + "px";
      f.style.height = g.height + "px";
      f.style.left = g.x + "px";
      f.style.top = g.y + "px";
      f.style.opacity = d;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        g = W.$A(a);
      c
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  $A: function (a) {
    var c = h.g.style.wh(a);
    c = { x: c.x, y: c.y };
    a.getBBox
      ? ((a = a.getBBox()), (c.height = a.height), (c.width = a.width))
      : ((c.height = a.offsetHeight), (c.width = a.offsetWidth));
    return c;
  },
  KD: function (a, c) {
    var d = document.getElementById("containerStorage");
    d.textContent = "";
    c = c.split("\n");
    for (var e = 0; e < c.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(c[e]));
      d.appendChild(f);
    }
    d = document.getElementById("dialogStorage");
    W.tl(d, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, W.Qr);
    W.Nr();
  },
  Vz: function () {
    if (!Bc(S))
      if (W.Jf || B.wd()) setTimeout(W.Vz, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          c = document.getElementById("abortCancel");
        c.addEventListener("click", W.Gf, !0);
        c.addEventListener("touchend", W.Gf, !0);
        c = document.getElementById("abortOk");
        c.addEventListener("click", id, !0);
        c.addEventListener("touchend", id, !0);
        W.tl(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function () {
            document.body.removeEventListener("keydown", W.cu, !0);
          }
        );
        document.body.addEventListener("keydown", W.cu, !0);
      }
  },
  XG: function () {
    var a = document.getElementById("dialogDone");
    if (B) {
      var c = document.getElementById("dialogLinesText");
      c.textContent = "";
      var d = kd();
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
          ? T("Games_linesOfCode1")
          : T("Games_linesOfCode2").replace("%1", String(e));
      c.appendChild(document.createTextNode(d));
    }
    d =
      10 > S
        ? T("Games_nextLevel").replace("%1", String(S + 1))
        : T("Games_finalLevel");
    c = document.getElementById("doneCancel");
    c.addEventListener("click", W.Gf, !0);
    c.addEventListener("touchend", W.Gf, !0);
    c = document.getElementById("doneOk");
    c.addEventListener("click", jd, !0);
    c.addEventListener("touchend", jd, !0);
    W.tl(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function () {
        document.body.removeEventListener("keydown", W.xu, !0);
      }
    );
    document.body.addEventListener("keydown", W.xu, !0);
    document.getElementById("dialogDoneText").textContent = d;
  },
  Nu: function (a) {
    !W.Jf ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (W.Gf(!0), a.stopPropagation(), a.preventDefault());
  },
  Nr: function () {
    document.body.addEventListener("keydown", W.Nu, !0);
  },
  Qr: function () {
    document.body.removeEventListener("keydown", W.Nu, !0);
  },
  xu: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      W.Gf(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && jd();
  },
  cu: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      W.Gf(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && id();
  },
};
window.BlocklyDialogs = W;
W.hideDialog = W.Gf;
var ld = ld || {};
function md(a, c) {
  function d() {}
  d.prototype = c.prototype;
  a.u = c.prototype;
  a.prototype = new d();
  a.prototype.constructor = a;
  a.IG = function (e, f, g) {
    return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2));
  };
}
if (!nd) {
  var nd,
    od = "";
  "undefined" !== typeof navigator &&
    navigator &&
    "string" == typeof navigator.userAgent &&
    (od = navigator.userAgent);
  var pd = 0 == od.indexOf("Opera");
  nd = {
    FH: { cF: "ScriptEngine" in window },
    RF: pd,
    Kd: !pd && -1 != od.indexOf("MSIE"),
    Wt: !pd && -1 != od.indexOf("WebKit"),
  };
}
if (!qd) var qd = {};
if (!rd) var rd = {};
if (!sd) var sd = {};
if (!td) var td = {};
if (!ud) var ud = {};
if (!vd) var vd = {};
var wd = ld.Tx ? { SH: !0 } : {},
  xd = ld.Tx ? { TH: !0 } : {};
function yd() {
  throw Error("Do not instantiate directly");
}
yd.prototype.Cu = null;
yd.prototype.toString = function () {
  return this.content;
};
function zd(a) {
  if (null != a)
    switch (a.Cu) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function Ad() {
  yd.call(this);
}
md(Ad, yd);
Ad.prototype.Du = wd;
function Z(a) {
  return null != a && a.Du === wd
    ? a
    : Bd(String(String(a)).replace(Cd, Dd), zd(a));
}
var Bd = (function (a) {
    function c() {}
    c.prototype = a.prototype;
    return function (d, e) {
      var f = new c();
      f.content = String(d);
      void 0 !== e && (f.Cu = e);
      return f;
    };
  })(Ad),
  Ed = {
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
function Dd(a) {
  return Ed[a];
}
var Cd = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Fd() {
  return '<div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div>';
}
function Gd() {
  var a = { lang: sc, GB: uc },
    c =
      '<table width="100%"><tr><td><h1><span id="title">' +
      ((a.GB
        ? '<a href="index.html?lang=' + Z(a.lang) + '">'
        : '<a href="./?lang=' + Z(a.lang) + '">') +
        "Codekid</a> : " +
        Z("Puzzle") +
        "</span>");
  if (a.level) {
    for (var d = "", e = " &nbsp; ", f = a.bC + 1, g = 1; g < f; g++) {
      var k = "?lang=" + Z(a.lang) + "&level=" + Z(g) + (d ? "&" + Z(d) : "");
      e +=
        " " +
        (g == a.level
          ? '<span class="level_number level_done" id="level' +
            Z(g) +
            '">' +
            Z(g) +
            "</span>"
          : g == a.bC
          ? '<a class="level_number" id="level' +
            Z(g) +
            '" href="' +
            Z(k) +
            '">' +
            Z(g) +
            "</a>"
          : '<a class="level_dot" id="level' +
            Z(g) +
            '" href="' +
            Z(k) +
            '"></a>');
    }
    a = e;
  } else a = "";
  d =
    "&nbsp;" +
    ('<button id="checkButton" class="primary">Check Answers</button>'.Du === xd
      ? "zSoyz"
      : '<button id="checkButton" class="primary">Check Answers</button>');
  return (
    '<div style="display: none"><span id="Puzzle_animal1">Duck</span><span id="Puzzle_animal1Pic">duck.jpg</span><span id="Puzzle_animal1PicHeight">70</span><span id="Puzzle_animal1PicWidth">100</span><span id="Puzzle_animal1Legs">&nbsp;&nbsp;2&nbsp;&nbsp;</span><span id="Puzzle_animal1Trait1">Feathers</span><span id="Puzzle_animal1Trait2">Beak</span><span id="Puzzle_animal1HelpUrl">https://en.wikipedia.org/wiki/Duck</span><span id="Puzzle_animal2">Cat</span><span id="Puzzle_animal2Pic">cat.jpg</span><span id="Puzzle_animal2PicHeight">70</span><span id="Puzzle_animal2PicWidth">100</span><span id="Puzzle_animal2Legs">&nbsp;&nbsp;4&nbsp;&nbsp;</span><span id="Puzzle_animal2Trait1">Whiskers</span><span id="Puzzle_animal2Trait2">Fur</span><span id="Puzzle_animal2HelpUrl">https://en.wikipedia.org/wiki/Cat</span><span id="Puzzle_animal3">Bee</span><span id="Puzzle_animal3Pic">bee.jpg</span><span id="Puzzle_animal3PicHeight">70</span><span id="Puzzle_animal3PicWidth">100</span><span id="Puzzle_animal3Legs">&nbsp;&nbsp;6&nbsp;&nbsp;</span><span id="Puzzle_animal3Trait1">Honey</span><span id="Puzzle_animal3Trait2">Stinger</span><span id="Puzzle_animal3HelpUrl">https://en.wikipedia.org/wiki/Bee</span><span id="Puzzle_animal4">Snail</span><span id="Puzzle_animal4Pic">snail.jpg</span><span id="Puzzle_animal4PicHeight">70</span><span id="Puzzle_animal4PicWidth">100</span><span id="Puzzle_animal4Legs">&nbsp;&nbsp;0&nbsp;&nbsp;</span><span id="Puzzle_animal4Trait1">Shell</span><span id="Puzzle_animal4Trait2">Slime</span><span id="Puzzle_animal4HelpUrl">https://en.wikipedia.org/wiki/Snail</span><span id="Puzzle_picture">picture:</span><span id="Puzzle_legs">legs:</span><span id="Puzzle_legsChoose">choose...</span><span id="Puzzle_traits">traits:</span><span id="Puzzle_error0">Perfect!\\nAll %1 blocks are correct.</span><span id="Puzzle_error1">Almost! One block is incorrect.</span><span id="Puzzle_error2">%1 blocks are incorrect.</span><span id="Puzzle_tryAgain">The highlighted block is not correct.\\nKeep trying.</span></div>' +
    (c +
      a +
      '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>&nbsp;<button id="helpButton">Help</button>' +
      d +
      '</td></tr></table><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="help" class="dialogHiddenContent"><div style="padding-bottom: 0.7ex">For each animal (green), attach its picture, choose its number of legs, and make a stack of its traits.</div><div id="sample" class="readonly"></div>') +
    Fd() +
    '</div><div id="answers" class="dialogHiddenContent"><div id="answerMessage"></div><div id="graph"><div id="graphValue"></div></div>' +
    Fd() +
    "</div>"
  );
}
h.hb = function (a, c, d) {
  "function" != typeof a && h.hb.mx(a);
  this.mj = a;
  this.Rr = this.nr = this.Om = null;
  a = this.mj;
  if (Array.isArray(a)) {
    for (var e = !1, f = 0; f < a.length; f++) {
      var g = a[f][0];
      "string" == typeof g
        ? (a[f][0] = h.g.Rc(g))
        : (null != g.alt && (a[f][0].alt = h.g.Rc(g.alt)), (e = !0));
    }
    if (!(e || 2 > a.length)) {
      e = [];
      for (f = 0; f < a.length; f++) e.push(a[f][0]);
      f = h.g.Pa.Kr(e);
      g = h.g.Pa.oA(e, f);
      var k = h.g.Pa.pA(e, f);
      (!g && !k) ||
        f <= g + k ||
        (g && (this.nr = e[0].substring(0, g - 1)),
        k && (this.Rr = e[0].substr(1 - k)),
        (this.mj = h.hb.Zz(a, g, k)));
    }
  }
  this.qj = this.getOptions(!1)[0];
  h.hb.u.constructor.call(this, this.qj[1], c, d);
  this.wj = this.qd = this.Bc = this.Wb = this.kl = null;
};
h.g.object.U(h.hb, h.gd);
h.hb.aa = function (a) {
  return new h.hb(a.options, void 0, a);
};
h.hb.prototype.At = !0;
h.hb.jE = 25;
h.hb.rF = 0.45;
h.hb.Ky = 5;
h.hb.Ly = 2 * h.hb.Ky;
h.hb.fs = h.g.userAgent.Nl ? "\u25bc" : "\u25be";
b = h.hb.prototype;
b.Ox = "default";
b.Um = function () {
  !this.$().Hs || (this.$().Hs && !this.I.Ca)
    ? ub(this)
    : (this.uu = this.I.Ba());
  vb(this);
  this.Bc = h.g.j.R(h.g.F.qo, {}, this.Kc);
  this.$().yy
    ? ((this.wj = h.g.j.R(
        h.g.F.qo,
        { height: this.$().Gj + "px", width: this.$().Gj + "px" },
        this.Kc
      )),
      this.wj.setAttributeNS(h.g.j.jh, "xlink:href", this.$().zy))
    : ((this.qd = h.g.j.R(h.g.F.Kt, {}, this.pc)),
      this.qd.appendChild(
        document.createTextNode(this.I.J ? h.hb.fs + " " : " " + h.hb.fs)
      ),
      this.I.J
        ? this.pc.insertBefore(this.qd, this.$h)
        : this.pc.appendChild(this.qd));
  this.Jb && h.g.j.Hb(this.Jb, "blocklyDropdownRect");
};
b.ul = function (a) {
  var c = new h.Ao();
  c.Qg(h.g.wb.gm.Uy);
  var d = this.getOptions(!1);
  this.kl = null;
  for (var e = 0; e < d.length; e++) {
    var f = d[e][0],
      g = d[e][1];
    if ("object" == typeof f) {
      var k = new Image(f.width, f.height);
      k.src = f.src;
      k.alt = f.alt || "";
      f = k;
    }
    f = new h.Bo(f, g);
    f.Qg(h.g.wb.gm.kz);
    f.Er = this.I.J;
    f.mp = !0;
    c.Ad.push(f);
    f.np = g == this.Ye;
    g == this.Ye && (this.kl = f);
    Lb(f, this.xB, this);
  }
  this.Wb = c;
  this.Wb.er =
    a && "number" === typeof a.clientX ? new h.g.P(a.clientX, a.clientY) : null;
  this.Wb.Ea(h.C.iB());
  h.g.j.Hb(this.Wb.Ya, "blocklyDropdownMenu");
  this.$().xy &&
    ((a = this.I.Ca ? this.I.getParent().bq() : this.I.bq()),
    (c = this.I.Ca ? this.I.getParent().style.Li : this.I.style.Li),
    h.C.Te(a, c));
  h.C.CD(this, this.PA.bind(this));
  this.Wb.focus();
  this.kl && this.Wb.Sf(this.kl);
  this.bc();
};
b.PA = function () {
  this.Wb && this.Wb.H();
  this.kl = this.Wb = null;
  this.bc();
};
b.xB = function (a) {
  h.C.Fk(this, !0);
  this.setValue(a.getValue());
};
h.hb.Zz = function (a, c, d) {
  for (var e = [], f = 0; f < a.length; f++) {
    var g = a[f][0],
      k = a[f][1];
    g = g.substring(c, g.length - d);
    e[f] = [g, k];
  }
  return e;
};
b = h.hb.prototype;
b.getOptions = function (a) {
  return "function" == typeof this.mj
    ? ((this.Om && a) || ((this.Om = this.mj.call(this)), h.hb.mx(this.Om)),
      this.Om)
    : this.mj;
};
b.Im = function (a) {
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
b.qk = function (a) {
  h.hb.u.qk.call(this, a);
  a = this.getOptions(!0);
  for (var c = 0, d; (d = a[c]); c++) d[1] == this.Ye && (this.qj = d);
};
b.bc = function () {
  this.Jb &&
    (this.Jb.setAttribute("stroke", this.I.style.Li),
    this.Wb
      ? this.Jb.setAttribute("fill", this.I.style.Li)
      : this.Jb.setAttribute("fill", "transparent"));
  this.I &&
    this.qd &&
    (this.qd.style.fill = this.I.Ca ? this.I.style.ym : this.I.style.nh);
};
b.Ar = function () {
  this.$h.nodeValue = "";
  this.Bc.style.display = "none";
  var a = this.qj && this.qj[0];
  if (a && "object" == typeof a) {
    this.Bc.style.display = "";
    this.Bc.setAttributeNS(h.g.j.jh, "xlink:href", a.src);
    this.Bc.setAttribute("height", a.height);
    this.Bc.setAttribute("width", a.width);
    var c = Number(a.height);
    a = Number(a.width);
    var d = !!this.Jb,
      e = Math.max(d ? this.$().Gs : 0, c + h.hb.Ly);
    d = d ? this.$().Fj : 0;
    var f = this.wj
      ? Hd(this, a + d, e / 2 - this.$().Gj / 2)
      : h.g.j.eq(this.qd, this.$().ah, this.$().eg, this.$().dg);
    this.oc.width = a + f + 2 * d;
    this.oc.height = e;
    var g = 0;
    this.I.J
      ? this.Bc.setAttribute("x", d + f)
      : ((g = a + f),
        this.pc.setAttribute("text-anchor", "end"),
        this.Bc.setAttribute("x", d));
    this.Bc.setAttribute("y", e / 2 - c / 2);
    xb(this, g + d, a + f);
  } else
    (this.$h.nodeValue = wb(this)),
      h.g.j.Hb(this.pc, "blocklyDropdownText"),
      this.pc.setAttribute("text-anchor", "start"),
      (e = !!this.Jb),
      (c = Math.max(e ? this.$().Gs : 0, this.$().am)),
      (a = h.g.j.eq(this.pc, this.$().ah, this.$().eg, this.$().dg)),
      (e = e ? this.$().Fj : 0),
      (d = 0),
      this.wj && (d = Hd(this, a + e, c / 2 - this.$().Gj / 2)),
      (this.oc.width = a + d + 2 * e),
      (this.oc.height = c),
      xb(this, e, a);
  yb(this);
};
function Hd(a, c, d) {
  if (!a.wj) return 0;
  var e = a.Jb ? a.$().Fj : 0,
    f = a.$().Ay,
    g = a.$().Gj;
  a.wj.setAttribute(
    "transform",
    "translate(" + (a.I.J ? e : c + f) + "," + d + ")"
  );
  return g + f;
}
b.lq = function () {
  if (!this.qj) return null;
  var a = this.qj[0];
  return "object" == typeof a ? a.alt : a;
};
h.hb.mx = function (a) {
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
h.hb.prototype.Xb = function (a) {
  if (this.Wb)
    switch (a.name) {
      case h.navigation.Gb.md:
        return Jb(this.Wb), !0;
      case h.navigation.Gb.kd:
        return (a = this.Wb), Kb(a, a.Ad.indexOf(a.wg), 1), !0;
      default:
        return !1;
    }
  return h.hb.u.Xb.call(this, a);
};
h.sh.register("field_dropdown", h.hb);
h.Jd = function (a, c, d, e, f, g, k) {
  if (!a) throw Error("Src value of an image field is required");
  a = h.g.Rc(a);
  d = Number(h.g.Rc(d));
  c = Number(h.g.Rc(c));
  if (isNaN(d) || isNaN(c))
    throw Error(
      "Height and width values of an image field must cast to numbers."
    );
  if (0 >= d || 0 >= c)
    throw Error(
      "Height and width values of an image field must be greater than 0."
    );
  this.yk = !1;
  this.om = "";
  h.Jd.u.constructor.call(this, a, null, k);
  k || ((this.yk = !!g), (this.om = h.g.Rc(e) || ""));
  this.oc = new h.g.Qd(c, d + h.Jd.Rz);
  this.KB = d;
  this.uf = null;
  "function" == typeof f && (this.uf = f);
  this.Bc = null;
};
h.g.object.U(h.Jd, h.gd);
h.Jd.prototype.jo = "";
h.Jd.aa = function (a) {
  return new h.Jd(a.src, a.width, a.height, void 0, void 0, void 0, a);
};
h.Jd.Rz = 1;
b = h.Jd.prototype;
b.Ej = !1;
b.yg = !1;
b.dk = function (a) {
  h.Jd.u.dk.call(this, a);
  this.yk = !!a.flipRtl;
  this.om = h.g.Rc(a.alt) || "";
};
b.Um = function () {
  this.Bc = h.g.j.R(
    h.g.F.qo,
    { height: this.KB + "px", width: this.oc.width + "px", alt: this.om },
    this.Kc
  );
  this.Bc.setAttributeNS(h.g.j.jh, "xlink:href", this.Ye);
  this.uf && (this.Bc.style.cursor = "pointer");
};
b.lx = function () {};
b.Im = function (a) {
  return "string" != typeof a ? null : a;
};
b.qk = function (a) {
  this.Ye = a;
  this.Bc && this.Bc.setAttributeNS(h.g.j.jh, "xlink:href", String(this.Ye));
};
b.kv = function () {
  return this.yk;
};
b.ul = function () {
  this.uf && this.uf(this);
};
b.lq = function () {
  return this.om;
};
h.sh.register("field_image", h.Jd);
h.fc.animal = {
  ab: function () {
    this.Te(120);
    P(Hb(this), "", "NAME");
    P(Db(this.kh(h.eb, "PIC"), h.Ml), T("Puzzle_picture"));
    P(P(Db(Hb(this), h.Ml), T("Puzzle_legs")), new h.hb(Id), "LEGS");
    P(this.kh(h.Ra, "TRAITS"), T("Puzzle_traits"));
    this.Pg(!1);
  },
  nc: function () {
    var a = document.createElement("mutation");
    a.setAttribute("animal", this.pd);
    return a;
  },
  ad: function (a) {
    this.Th(parseInt(a.getAttribute("animal"), 10));
  },
  pd: 0,
  Th: function (a) {
    this.pd = a;
    Fb(this, T("Puzzle_animal" + a));
    this.zh = T("Puzzle_animal" + a + "HelpUrl");
  },
  Aq: function () {
    return Fa(this, "LEGS") == this.pd;
  },
};
h.fc.picture = {
  ab: function () {
    this.Te(30);
    Hb(this, "PIC");
    this.Fn(!0);
    this.Rg("");
  },
  nc: h.fc.animal.nc,
  ad: h.fc.animal.ad,
  pd: 0,
  Th: function (a) {
    this.pd = a;
    var c = "puzzle/" + T("Puzzle_animal" + a + "Pic"),
      d = T("Puzzle_animal" + a + "PicHeight");
    a = T("Puzzle_animal" + a + "PicWidth");
    P(ia(this, "PIC"), new h.Jd(c, a, d));
  },
  Aq: function () {
    var a = this.getParent();
    return a && a.pd == this.pd;
  },
};
h.fc.trait = {
  ab: function () {
    this.Te(290);
    P(Hb(this), "", "NAME");
    this.Hn(!0);
    this.En(!0);
  },
  nc: function () {
    var a = document.createElement("mutation");
    a.setAttribute("animal", this.pd);
    a.setAttribute("trait", this.gx);
    return a;
  },
  ad: function (a) {
    this.Th(
      parseInt(a.getAttribute("animal"), 10),
      parseInt(a.getAttribute("trait"), 10)
    );
  },
  pd: 0,
  gx: 0,
  Th: function (a, c) {
    this.pd = a;
    this.gx = c;
    Fb(this, T("Puzzle_animal" + a + "Trait" + c));
  },
  Aq: function () {
    var a = Eb(this);
    return a && a.pd == this.pd;
  },
};
var Dc = "puzzle";
function Jd(a) {
  for (var c = a.length - 1; 0 < c; c--) {
    var d = Math.floor(Math.random() * (c + 1)),
      e = a[c];
    a[c] = a[d];
    a[d] = e;
  }
}
function Id() {
  for (
    var a = [[T("Puzzle_legsChoose"), "0"]], c = 1, d;
    (d = Ec("Puzzle_animal" + c + "Legs"));

  )
    (a[c] = [d, String(c)]), c++;
  a.sort(function (e, f) {
    return e[0] - f[0];
  });
  return a;
}
function Kd() {
  for (var a = K(B), c = 0, d = [], e = 0, f; (f = a[e]); e++)
    f.Aq() || (c++, f.select(), d.push(f));
  var g = document.getElementById("graphValue");
  setTimeout(function () {
    g.style.width = (100 * (a.length - c)) / a.length + "px";
  }, 500);
  1 == c
    ? (e = [T("Puzzle_error1"), T("Puzzle_tryAgain")])
    : c
    ? (e = [T("Puzzle_error2").replace("%1", c), T("Puzzle_tryAgain")])
    : ((e = [T("Puzzle_error0").replace("%1", a.length)]),
      (cd = ed()),
      window.localStorage && (window.localStorage[Dc + S] = cd));
  f = document.getElementById("answerMessage");
  f.textContent = "";
  for (var k = 0; k < e.length; k++) {
    var l = document.createElement("div");
    l.appendChild(document.createTextNode(e[k]));
    f.appendChild(l);
  }
  e = document.getElementById("answers");
  f = document.getElementById("checkButton");
  W.tl(
    e,
    f,
    !0,
    !0,
    { width: "25%", left: vc() ? "5%" : "70%", top: "5em" },
    c ? W.Qr : id
  );
  W.Nr();
  if (d.length) {
    Jd(d);
    var m = d[0],
      n = function () {
        m.select();
        W.Jf &&
          (setTimeout(function () {
            mb(m);
          }, 150),
          setTimeout(n, 300));
      };
    n();
  } else setTimeout(Ld, 2e3), h.selected && mb(h.selected);
}
function Ld() {
  B.ze.play("win", 0.5);
  B.options.Rb.Bf = !0;
  for (var a = B.Qb(!1), c = 0, d; (d = a[c]); c++) Md(d, (c / a.length) * 360);
}
function Md(a, c) {
  if (W.Jf) {
    var d = B.Je(),
      e = d.ec / 2,
      f = d.Sb / 2,
      g = w(a);
    d = a.Sa();
    vc() && (d.x -= g.width);
    var k = Math.max(175, Math.min(e, f) - Math.max(g.height, g.width) / 2),
      l = Date.now(),
      m = c + ((l / 50) % 360);
    k *= Math.sin(((l % 5e3) / 5e3) * 2 * Math.PI) / 8 + 0.875;
    f = k * Math.cos(h.g.mc.ai(m)) + f - g.width / 2;
    g = k * Math.sin(h.g.mc.ai(m)) + e - g.height / 2;
    5 > Math.sqrt(Math.pow(f - d.x, 2) + Math.pow(g - d.y, 2))
      ? ((e = f - d.x), (d = g - d.y))
      : ((d = h.g.mc.OD(Math.atan2(g - d.y, f - d.x))),
        (d %= 360),
        0 > d && (d += 360),
        (e = Math.round(5 * Math.cos(h.g.mc.ai(d)))),
        (d = Math.round(5 * Math.sin(h.g.mc.ai(d)))));
    a.moveBy(e, d);
    setTimeout(Md.bind(null, a, c), 50);
  }
}
function Nd(a) {
  var c = '<xml>;<block type="animal" x="5" y="5">;<mutation animal="1"></mutation>;<title name="LEGS">1</title>;<value name="PIC">;<block type="picture">;<mutation animal="1"></mutation>;</block>;</value>;<statement name="TRAITS">;<block type="trait">;<mutation animal="1" trait="2"></mutation>;<next>;<block type="trait">;<mutation animal="1" trait="1"></mutation>;</block>;</next>;</block>;</statement>;</block>;</xml>'.split(
      ";"
    ),
    d = document.getElementById("sample");
  d.firstChild ||
    ((d = h.xg(d, { rtl: vc(), readOnly: !0 })),
    "string" != typeof c && (c = c.join("")),
    h.N.rg(h.N.Xe(c), d));
  c = document.getElementById("help");
  d = document.getElementById("helpButton");
  W.tl(c, d, a, !0, { width: "50%", left: "25%", top: "5em" }, W.Qr);
  W.Nr();
}
window.addEventListener("load", function () {
  function a() {
    d.style.width = window.innerWidth - 20 + "px";
    d.style.height = window.innerHeight - d.offsetTop - 15 + "px";
  }
  document.body.innerHTML = Gd();
  dd();
  var c = vc(),
    d = document.getElementById("blockly");
  a(null);
  window.addEventListener("resize", a);
  hd({ rtl: c, scrollbars: !1, trashcan: !1 });
  var e = Bc(S);
  try {
    var f = window.sessionStorage.Xv;
  } catch (u) {
    f = null;
  }
  if (f) delete window.sessionStorage.Xv, (c = h.N.Xe(f)), h.N.rg(c, B);
  else if (e) (c = h.N.Xe(e)), h.N.rg(c, B);
  else {
    var g = [],
      k = [],
      l = [];
    f = 1;
    for (var m; Ec("Puzzle_animal" + f); ) {
      m = B.nj("animal");
      m.Th(f);
      g.push(m);
      m = B.nj("picture");
      m.Th(f);
      k.push(m);
      for (var n = 1; Ec("Puzzle_animal" + f + "Trait" + n); )
        (m = B.nj("trait")), m.Th(f, n), l.push(m), n++;
      f++;
    }
    Jd(g);
    Jd(k);
    Jd(l);
    g = [].concat(g, k, l);
    c && g.reverse();
    for (f = 0; (m = g[f]); f++) (m.zp = !1), m.Dh(), m.Ea();
    for (f = k = 0; (m = g[f]); f++)
      (l = m.Ba().getBBox()),
        (m.OG = l.width),
        (m.NG = l.height),
        (m.ou = l.width * l.height),
        (k += m.ou);
    h.Dl(B);
    n = h.Xw(x(B));
    n.width -= 50;
    n.height -= 50;
    var r = 0;
    for (f = 0; (m = g[f]); f++) {
      l = m.Ba().getBBox();
      var q = c ? l.width + (r / k) * n.width : (r / k) * (n.width - l.width);
      q = Math.round(q + 50 * Math.random());
      m.moveBy(q, Math.round(Math.random() * (n.height - l.height)));
      r += m.ou;
    }
  }
  db();
  Fc("checkButton", Kd);
  Fc("helpButton", function () {
    Nd(!0);
  });
  e || Nd(!1);
  h.hc *= 2;
  h.rs = h.hc;
  B.ze.load(["puzzle/win.mp3", "puzzle/win.ogg"], "win");
});
