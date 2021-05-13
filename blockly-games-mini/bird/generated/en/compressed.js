// Automatically generated file.  Do not edit!

"use strict";
var b,
  g = { mk: {}, mw: 40, Dw: 125, FB: 5, bC: 10, Cd: 28 };
g.pB = g.Cd;
g.uB = 8;
g.Rn = 250;
g.Dq = 10;
g.nB = 30;
g.HC = 750;
g.jD = 100;
g.GB = !0;
g.lC = 0.45;
g.mC = 0.65;
g.Uj = { width: 96, height: 124, url: "sprites.png" };
g.rb = 1;
g.Ie = 2;
g.Ua = 3;
g.Je = 4;
g.Ee = 5;
g.yq = -1;
g.xq = 0;
g.nv = 1;
g.uI = 0;
g.vI = 1;
g.sI = 1;
g.tI = 2;
g.Pj = [];
g.Pj[g.rb] = g.Ie;
g.Pj[g.Ie] = g.rb;
g.Pj[g.Ua] = g.Je;
g.Pj[g.Je] = g.Ua;
g.Nl = 0;
g.Fo = 1;
g.Me = 2;
g.Ml = 3;
g.Kv = null;
g.Mq = 1;
g.Lv = 2;
g.Bi = "VARIABLE";
g.yD = "VARIABLE_DYNAMIC";
g.pr = "PROCEDURE";
g.Mw = "RENAME_VARIABLE_ID";
g.Mv = "DELETE_VARIABLE_ID";
g.D = {};
g.D.hl = {};
g.D.Lq = "default";
g.D.ba = function (a) {
  this.Wt = a;
};
g.D.ba.prototype.toString = function () {
  return this.Wt;
};
g.D.ba.Ev = new g.D.ba("connectionChecker");
g.D.ba.Pb = new g.D.ba("event");
g.D.ba.Zb = new g.D.ba("field");
g.D.ba.RENDERER = new g.D.ba("renderer");
g.D.ba.Er = new g.D.ba("toolbox");
g.D.ba.Dr = new g.D.ba("theme");
g.D.ba.CK = new g.D.ba("toolboxItem");
g.D.ba.aC = new g.D.ba("flyoutsVerticalToolbox");
g.D.ba.TI = new g.D.ba("flyoutsHorizontalToolbox");
g.D.register = function (a, c, d, e) {
  if (
    (!(a instanceof g.D.ba) && "string" != typeof a) ||
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
  var f = g.D.hl[a];
  f || (f = g.D.hl[a] = {});
  g.D.UH(a, d);
  if (!e && f[c])
    throw Error('Name "' + c + '" with type "' + a + '" already registered.');
  f[c] = d;
};
g.D.UH = function (a, c) {
  switch (a) {
    case String(g.D.ba.Zb):
      if ("function" != typeof c.aa)
        throw Error('Type "' + a + '" must have a fromJson function');
  }
};
g.D.unregister = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.D.hl[a];
  d
    ? d[c]
      ? delete g.D.hl[a][c]
      : console.warn('No name "' + c + '" with type "' + a + '" found')
    : console.warn('No type "' + a + '" found');
};
g.D.Ky = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  var d = g.D.hl[a];
  return d
    ? d[c]
      ? d[c]
      : (console.warn('No name "' + c + '" with type "' + a + '" found'), null)
    : (console.warn('No type "' + a + '" found'), null);
};
g.D.jL = function (a, c) {
  a = String(a).toLowerCase();
  c = c.toLowerCase();
  return (a = g.D.hl[a]) ? !!a[c] : !1;
};
g.D.Zs = function (a, c) {
  return g.D.Ky(a, c);
};
g.D.et = function (a, c) {
  return g.D.Ky(a, c);
};
g.D.Ey = function (a, c) {
  c = c.plugins[a.toString()] || g.D.Lq;
  return "function" == typeof c ? c : g.D.Zs(a, c);
};
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
g.m = {};
g.g.global.Blockly || (g.g.global.Blockly = {});
g.g.global.Blockly.Msg || (g.g.global.Blockly.Msg = g.m);
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
    ? g.g.Cb.Ju(a, c, d)
    : null;
};
g.g.Cb.Ju = function (a, c, d) {
  c = (a << 16) | (c << 8) | d;
  return 16 > a
    ? "#" + (16777216 | c).toString(16).substr(1)
    : "#" + c.toString(16);
};
g.g.Cb.ez = function (a) {
  a = g.g.Cb.parse(a);
  if (!a) return [0, 0, 0];
  a = parseInt(a.substr(1), 16);
  return [a >> 16, (a >> 8) & 255, a & 255];
};
g.g.Cb.iz = function (a) {
  var c = g.lC,
    d = 255 * g.mC,
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
  return g.g.Cb.Ju(Math.floor(e), Math.floor(f), Math.floor(h));
};
g.g.Cb.Tr = function (a, c, d) {
  a = g.g.Cb.parse(a);
  if (!a) return null;
  c = g.g.Cb.parse(c);
  if (!c) return null;
  a = g.g.Cb.ez(a);
  c = g.g.Cb.ez(c);
  return g.g.Cb.Ju(
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
g.g.K = function (a, c) {
  this.x = a;
  this.y = c;
};
g.g.K.Gf = function (a, c) {
  return a == c ? !0 : a && c ? a.x == c.x && a.y == c.y : !1;
};
g.g.K.Jg = function (a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
};
g.g.K.OF = function (a) {
  return Math.sqrt(a.x * a.x + a.y * a.y);
};
g.g.K.jm = function (a, c) {
  return new g.g.K(a.x - c.x, a.y - c.y);
};
g.g.K.sum = function (a, c) {
  return new g.g.K(a.x + c.x, a.y + c.y);
};
g.g.K.prototype.scale = function (a) {
  this.x *= a;
  this.y *= a;
  return this;
};
g.g.K.prototype.translate = function (a, c) {
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
g.g.$a = {};
g.g.$a.startsWith = function (a, c) {
  return 0 == a.lastIndexOf(c, 0);
};
g.g.$a.Su = function (a) {
  return a.length
    ? a.reduce(function (c, d) {
        return c.length < d.length ? c : d;
      }).length
    : 0;
};
g.g.$a.bE = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.$a.Su(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0][e], h = 1; h < a.length; h++) if (f != a[h][e]) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++) if ((f = a[h][e]) && " " != f) return d;
  return c;
};
g.g.$a.cE = function (a, c) {
  if (!a.length) return 0;
  if (1 == a.length) return a[0].length;
  var d = 0;
  c = c || g.g.$a.Su(a);
  for (var e = 0; e < c; e++) {
    for (var f = a[0].substr(-e - 1, 1), h = 1; h < a.length; h++)
      if (f != a[h].substr(-e - 1, 1)) return d;
    " " == f && (d = e + 1);
  }
  for (h = 1; h < a.length; h++)
    if ((f = a[h].charAt(a[h].length - e - 1)) && " " != f) return d;
  return c;
};
g.g.$a.UA = function (a, c) {
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) a[d] = g.g.$a.aI(a[d], c);
  return a.join("\n");
};
g.g.$a.aI = function (a, c) {
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
    a = g.g.$a.VA(d, a, c);
    e = g.g.$a.jv(d, a, c);
    a = g.g.$a.bI(d, a);
    f++;
  } while (e > h);
  return k;
};
g.g.$a.jv = function (a, c, d) {
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
g.g.$a.VA = function (a, c, d) {
  for (var e = g.g.$a.jv(a, c, d), f, h = 0; h < c.length - 1; h++)
    if (c[h] != c[h + 1]) {
      var k = [].concat(c);
      k[h] = !k[h];
      k[h + 1] = !k[h + 1];
      var l = g.g.$a.jv(a, k, d);
      l > e && ((e = l), (f = k));
    }
  return f ? g.g.$a.VA(a, f, d) : c;
};
g.g.$a.bI = function (a, c) {
  for (var d = [], e = 0; e < a.length; e++)
    d.push(a[e]), void 0 !== c[e] && d.push(c[e] ? "\n" : " ");
  return d.join("");
};
g.g.Zd = function (a, c) {
  this.width = a;
  this.height = c;
};
g.g.Zd.Gf = function (a, c) {
  return a == c ? !0 : a && c ? a.width == c.width && a.height == c.height : !1;
};
g.g.style = {};
g.g.style.Lg = function (a) {
  if ("none" != g.g.style.Uy(a, "display")) return g.g.style.Sy(a);
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
  return new g.g.Zd(h, a);
};
g.g.style.Sy = function (a) {
  return new g.g.Zd(a.offsetWidth, a.offsetHeight);
};
g.g.style.Uy = function (a, c) {
  return (
    g.g.style.getComputedStyle(a, c) ||
    g.g.style.TE(a, c) ||
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
g.g.style.TE = function (a, c) {
  return a.currentStyle ? a.currentStyle[c] : null;
};
g.g.style.Lf = function (a) {
  var c = new g.g.K(0, 0);
  a = a.getBoundingClientRect();
  var d = document.documentElement;
  d = new g.g.K(
    window.pageXOffset || d.scrollLeft,
    window.pageYOffset || d.scrollTop
  );
  c.x = a.left + d.x;
  c.y = a.top + d.y;
  return c;
};
g.g.style.hF = function () {
  var a = document.body,
    c = document.documentElement;
  return new g.g.K(a.scrollLeft || c.scrollLeft, a.scrollTop || c.scrollTop);
};
g.g.style.JL = function (a, c) {
  a.style.display = c ? "" : "none";
};
g.g.style.rL = function (a) {
  return "rtl" == g.g.style.Uy(a, "direction");
};
g.g.style.QE = function (a) {
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
g.g.style.qH = function (a, c) {
  a = g.g.style.VE(a, c);
  c.scrollLeft = a.x;
  c.scrollTop = a.y;
};
g.g.style.VE = function (a, c) {
  var d = g.g.style.Lf(a),
    e = g.g.style.Lf(c),
    f = g.g.style.QE(c),
    h = d.x - e.x - f.left;
  d = d.y - e.y - f.top;
  a = g.g.style.Sy(a);
  e = c.clientHeight - a.height;
  f = c.scrollLeft;
  var k = c.scrollTop;
  f += Math.min(h, Math.max(h - (c.clientWidth - a.width), 0));
  k += Math.min(d, Math.max(d - e, 0));
  return new g.g.K(f, k);
};
g.g.userAgent = {};
(function (a) {
  function c(e) {
    return -1 != d.indexOf(e.toUpperCase());
  }
  g.g.userAgent.raw = a;
  var d = g.g.userAgent.raw.toUpperCase();
  g.g.userAgent.Fe = c("Trident") || c("MSIE");
  g.g.userAgent.pi = c("Edge");
  g.g.userAgent.xC = c("JavaFX");
  g.g.userAgent.kI = (c("Chrome") || c("CriOS")) && !g.g.userAgent.pi;
  g.g.userAgent.mx = c("WebKit") && !g.g.userAgent.pi;
  g.g.userAgent.gC =
    c("Gecko") && !g.g.userAgent.mx && !g.g.userAgent.Fe && !g.g.userAgent.pi;
  g.g.userAgent.Ej = c("Android");
  g.g.userAgent.si = c("iPad");
  g.g.userAgent.jw = c("iPod");
  g.g.userAgent.iw = c("iPhone") && !g.g.userAgent.si && !g.g.userAgent.jw;
  g.g.userAgent.IC = c("Macintosh");
  g.g.userAgent.rD =
    g.g.userAgent.si || (g.g.userAgent.Ej && !c("Mobile")) || c("Silk");
  g.g.userAgent.sw =
    !g.g.userAgent.rD &&
    (g.g.userAgent.jw || g.g.userAgent.iw || g.g.userAgent.Ej || c("IEMobile"));
})((g.g.global.navigator && g.g.global.navigator.userAgent) || "");
g.g.eG = function (a) {
  a.preventDefault();
  a.stopPropagation();
};
g.g.yp = function (a) {
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
    (a.target.dataset && "true" == a.target.dataset.tL)
  );
};
g.g.le = function (a) {
  var c = new g.g.K(0, 0),
    d = a.getAttribute("x");
  d && (c.x = parseInt(d, 10));
  if ((d = a.getAttribute("y"))) c.y = parseInt(d, 10);
  if ((d = (d = a.getAttribute("transform")) && d.match(g.g.le.AD)))
    (c.x += Number(d[1])), d[3] && (c.y += Number(d[3]));
  (a = a.getAttribute("style")) &&
    -1 < a.indexOf("translate") &&
    (a = a.match(g.g.le.BD)) &&
    ((c.x += Number(a[1])), a[3] && (c.y += Number(a[3])));
  return c;
};
g.g.um = function (a) {
  for (var c = 0, d = 0; a; ) {
    var e = g.g.le(a);
    c += e.x;
    d += e.y;
    if (
      -1 !=
      (" " + (a.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
    )
      break;
    a = a.parentNode;
  }
  return new g.g.K(c, d);
};
g.g.le.AD = /translate\(\s*([-+\d.e]+)([ ,]\s*([-+\d.e]+)\s*)?/;
g.g.le.BD = /transform:\s*translate(?:3d)?\(\s*([-+\d.e]+)\s*px([ ,]\s*([-+\d.e]+)\s*px)?/;
g.g.Sk = function (a) {
  return a.ctrlKey && g.g.userAgent.IC ? !0 : 2 == a.button;
};
g.g.Qm = function (a, c, d) {
  var e = c.createSVGPoint();
  e.x = a.clientX;
  e.y = a.clientY;
  d || (d = c.getScreenCTM().inverse());
  return e.matrixTransform(d);
};
g.g.Ry = function (a) {
  switch (a.deltaMode) {
    default:
      return { x: a.deltaX, y: a.deltaY };
    case 1:
      return { x: a.deltaX * g.mw, y: a.deltaY * g.mw };
    case 2:
      return { x: a.deltaX * g.Dw, y: a.deltaY * g.Dw };
  }
};
g.g.LH = function (a) {
  return g.g.$u(a, !0);
};
g.g.df = function (a) {
  if ("string" != typeof a) return a;
  a = g.g.$u(a, !1);
  return a.length ? String(a[0]) : "";
};
g.g.Jx = function (a) {
  for (var c = g.m, d = a.match(/%{BKY_[A-Z]\w*}/gi), e = 0; e < d.length; e++)
    void 0 == c[d[e].toUpperCase().slice(6, -1)] &&
      console.warn("No message string for " + d[e] + " in " + a);
};
g.g.$u = function (a, c) {
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
                (l = g.g.$a.startsWith(l, "BKY_") ? l.substring(4) : null) &&
                l in g.m
                  ? ((f = g.m[l]),
                    "string" == typeof f
                      ? Array.prototype.push.apply(d, g.g.$u(f, c))
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
g.g.Kg = function () {
  for (var a = g.g.Kg.vA.length, c = [], d = 0; 20 > d; d++)
    c[d] = g.g.Kg.vA.charAt(Math.random() * a);
  return c.join("");
};
g.g.Kg.vA =
  "!#$%()*+,-./:;=?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
g.g.Ui = function () {
  if (void 0 !== g.g.Ui.bs) return g.g.Ui.bs;
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
  g.g.Ui.bs = "none" !== c;
  return g.g.Ui.bs;
};
g.g.nA = function (a) {
  if ("object" != typeof document)
    throw Error("Blockly.utils.runAfterPageLoad() requires browser document.");
  if ("complete" == document.readyState) a();
  else
    var c = setInterval(function () {
      "complete" == document.readyState && (clearInterval(c), a());
    }, 10);
};
g.g.gF = function () {
  var a = g.g.style.hF();
  return new g.g.Rect(
    a.y,
    document.documentElement.clientHeight + a.y,
    a.x,
    document.documentElement.clientWidth + a.x
  );
};
g.g.Tl = function (a, c) {
  c = a.indexOf(c);
  if (-1 == c) return !1;
  a.splice(c, 1);
  return !0;
};
g.g.ZE = function () {
  var a = document.documentElement,
    c = window;
  return g.g.userAgent.Fe && c.pageYOffset != a.scrollTop
    ? new g.g.K(a.scrollLeft, a.scrollTop)
    : new g.g.K(c.pageXOffset || a.scrollLeft, c.pageYOffset || a.scrollTop);
};
g.g.Xs = function (a, c) {
  var d = Object.create(null),
    e = r(a, !0);
  c && (a = u(a)) && ((a = e.indexOf(a)), e.splice(a, e.length - a));
  for (a = 0; (c = e[a]); a++) d[c.type] ? d[c.type]++ : (d[c.type] = 1);
  return d;
};
g.g.pH = function (a, c) {
  var d = c.x;
  c = c.y;
  var e = aa(a).getBoundingClientRect();
  d = new g.g.K(d - e.left, c - e.top);
  c = g.g.um(a.vb);
  return g.g.K.jm(d, c).scale(1 / a.scale);
};
g.g.Wp = function (a) {
  var c = "string" == typeof a ? g.g.df(a) : a,
    d = Number(c);
  if (!isNaN(d) && 0 <= d && 360 >= d) return { vF: d, ym: g.g.Cb.iz(d) };
  if ((d = g.g.Cb.parse(c))) return { vF: null, ym: d };
  d = 'Invalid colour: "' + c + '"';
  a != c && (d += ' (from "' + a + '")');
  throw Error(d);
};
g.h = {};
g.h.$y = "";
g.h.Qa = !0;
g.h.As = 0;
g.h.Yn = "create";
g.h.Bq = g.h.Yn;
g.h.oi = "delete";
g.h.vv = g.h.oi;
g.h.Fj = "change";
g.h.gB = g.h.Fj;
g.h.Bl = "move";
g.h.xv = g.h.Bl;
g.h.ex = "var_create";
g.h.gx = "var_delete";
g.h.ix = "var_rename";
g.h.Jr = "ui";
g.h.wv = "drag";
g.h.Bo = "selected";
g.h.Hq = "click";
g.h.ow = "marker_move";
g.h.Qn = "bubble_open";
g.h.Zw = "trashcan_open";
g.h.DK = "toolbox_item_select";
g.h.Xw = "theme_change";
g.h.jx = "viewport_change";
g.h.Wn = "comment_create";
g.h.Dv = "comment_delete";
g.h.Cv = "comment_change";
g.h.Xn = "comment_move";
g.h.Wv = "finished_loading";
g.h.kB = [g.h.Bq, g.h.xv, g.h.Wn, g.h.Xn];
g.h.ul = [];
g.h.Ea = function (a) {
  g.h.isEnabled() && (g.h.ul.length || setTimeout(g.h.KE, 0), g.h.ul.push(a));
};
g.h.KE = function () {
  for (
    var a = g.h.filter(g.h.ul, !0), c = (g.h.ul.length = 0), d;
    (d = a[c]);
    c++
  )
    if (d.ic) {
      var e = g.Ab.rm(d.ic);
      if (e) {
        var f = d;
        if (f.Qa)
          for (e.wj.push(f), e.cn.length = 0; e.wj.length > e.qw && 0 <= e.qw; )
            e.wj.shift();
        for (var h = 0; (d = e.bd[h]); h++) d(f);
      }
    }
};
g.h.filter = function (a, c) {
  a = a.slice();
  c || a.reverse();
  for (var d = [], e = Object.create(null), f = 0, h; (h = a[f]); f++)
    if (!h.Pk()) {
      var k = [h.Bt ? g.h.Jr : h.type, h.fb, h.ic].join(" "),
        l = e[k],
        m = l ? l.event : null;
      if (!l) (e[k] = { event: h, index: f }), d.push(h);
      else if (h.type == g.h.Bl && l.index == f - 1)
        (m.gj = h.gj), (m.fj = h.fj), (m.Th = h.Th), (l.index = f);
      else if (h.type == g.h.Fj && h.element == m.element && h.name == m.name)
        m.newValue = h.newValue;
      else if (h.type != g.h.Hq || m.type != g.h.Qn)
        (e[k] = { event: h, index: f }), d.push(h);
    }
  a = d.filter(function (n) {
    return !n.Pk();
  });
  c || a.reverse();
  for (f = 1; (h = a[f]); f++)
    h.type == g.h.Fj && "mutation" == h.element && a.unshift(a.splice(f, 1)[0]);
  return a;
};
g.h.ZD = function () {
  for (var a = 0, c; (c = g.h.ul[a]); a++) c.Qa = !1;
};
g.h.disable = function () {
  g.h.As++;
};
g.h.enable = function () {
  g.h.As--;
};
g.h.isEnabled = function () {
  return 0 == g.h.As;
};
g.h.ac = function () {
  return g.h.$y;
};
g.h.ea = function (a) {
  g.h.$y = "boolean" == typeof a ? (a ? g.g.Kg() : "") : a;
};
g.h.Hy = function (a) {
  var c = [];
  a = r(a, !1);
  for (var d = 0, e; (e = a[d]); d++) c[d] = e.id;
  return c;
};
g.h.aa = function (a) {
  var c = g.D.Zs(g.D.ba.Pb, a.type);
  if (!c) throw Error("Unknown event type.");
  c = new c();
  c.aa(a);
  c.ic = (void 0).id;
  return c;
};
g.h.ly = function (a) {
  if ((a.type == g.h.Bl || a.type == g.h.Yn) && a.ic) {
    var c = g.Ab.rm(a.ic),
      d = c.Yc(a.fb);
    if (d) {
      a = g.h.Qa;
      try {
        g.h.Qa = !1;
        var e = d.getParent();
        if (e && e.isEnabled()) {
          var f = r(d, !1);
          c = 0;
          for (var h; (h = f[c]); c++) h.Zf(!0);
        } else if ((d.O || d.Z) && !c.Lc()) {
          do d.Zf(!1), (d = u(d));
          while (d);
        }
      } finally {
        g.h.Qa = a;
      }
    }
  }
};
g.h.Abstract = function () {
  this.Kd = null;
  this.ic = void 0;
  this.group = g.h.ac();
  this.Qa = g.h.Qa;
};
b = g.h.Abstract.prototype;
b.Bt = !1;
b.sa = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  return a;
};
b.aa = function (a) {
  this.Kd = !1;
  this.group = a.group;
};
b.Pk = function () {
  return !1;
};
b.run = function () {};
function v(a) {
  if (a.ic) var c = g.Ab.rm(a.ic);
  if (!c)
    throw Error(
      "Workspace is null. Event must have been generated from real Blockly events."
    );
  return c;
}
g.g.object = {};
g.g.object.V = function (a, c) {
  a.A = c.prototype;
  a.prototype = Object.create(c.prototype);
  a.prototype.constructor = a;
};
g.g.object.bf = function (a, c) {
  for (var d in c) a[d] = c[d];
};
g.g.object.rk = function (a, c) {
  for (var d in c)
    a[d] =
      null != c[d] && "object" === typeof c[d]
        ? g.g.object.rk(a[d] || Object.create(null), c[d])
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
g.h.$d = function (a) {
  g.h.$d.A.constructor.call(this);
  this.Kd = "undefined" == typeof a;
  this.ic = a ? a : "";
  this.Qa = !1;
};
g.g.object.V(g.h.$d, g.h.Abstract);
g.h.$d.prototype.Bt = !0;
g.h.yh = function (a, c, d, e) {
  g.h.yh.A.constructor.call(this, a ? a.B.id : void 0);
  this.fb = a ? a.id : null;
  this.element = "undefined" == typeof c ? "" : c;
  this.oldValue = "undefined" == typeof d ? "" : d;
  this.newValue = "undefined" == typeof e ? "" : e;
};
g.g.object.V(g.h.yh, g.h.$d);
g.h.yh.prototype.type = g.h.Jr;
g.h.yh.prototype.sa = function () {
  var a = g.h.yh.A.sa.call(this);
  a.element = this.element;
  void 0 !== this.newValue && (a.newValue = this.newValue);
  this.fb && (a.blockId = this.fb);
  return a;
};
g.h.yh.prototype.aa = function (a) {
  g.h.yh.A.aa.call(this, a);
  this.element = a.element;
  this.newValue = a.newValue;
  this.fb = a.blockId;
};
g.D.register(g.D.ba.Pb, g.h.Jr, g.h.yh);
g.g.H = function (a) {
  this.IH = a;
};
g.g.H.prototype.toString = function () {
  return this.IH;
};
g.g.H.zq = new g.g.H("animate");
g.g.H.Gq = new g.g.H("circle");
g.g.H.Bv = new g.g.H("clipPath");
g.g.H.Jv = new g.g.H("defs");
g.g.H.Qq = new g.g.H("feComposite");
g.g.H.QB = new g.g.H("feComponentTransfer");
g.g.H.RB = new g.g.H("feFlood");
g.g.H.SB = new g.g.H("feFuncA");
g.g.H.TB = new g.g.H("feGaussianBlur");
g.g.H.UB = new g.g.H("fePointLight");
g.g.H.VB = new g.g.H("feSpecularLighting");
g.g.H.Vv = new g.g.H("filter");
g.g.H.UI = new g.g.H("foreignObject");
g.g.H.Gc = new g.g.H("g");
g.g.H.no = new g.g.H("image");
g.g.H.ui = new g.g.H("line");
g.g.H.Xd = new g.g.H("path");
g.g.H.Ew = new g.g.H("pattern");
g.g.H.cD = new g.g.H("polygon");
g.g.H.Bd = new g.g.H("rect");
g.g.H.wh = new g.g.H("svg");
g.g.H.Ww = new g.g.H("text");
g.g.H.Ir = new g.g.H("tspan");
g.g.j = {};
g.g.j.Jl = "http://www.w3.org/2000/svg";
g.g.j.mo = "http://www.w3.org/1999/xhtml";
g.g.j.Oe = "http://www.w3.org/1999/xlink";
g.g.j.vh = {
  ELEMENT_NODE: 1,
  TEXT_NODE: 3,
  COMMENT_NODE: 8,
  DOCUMENT_POSITION_CONTAINED_BY: 16,
};
g.g.j.Re = null;
g.g.j.Zr = 0;
g.g.j.Oo = null;
g.g.j.N = function (a, c, d) {
  a = document.createElementNS(g.g.j.Jl, String(a));
  for (var e in c) a.setAttribute(e, c[e]);
  document.body.runtimeStyle && (a.runtimeStyle = a.currentStyle = a.style);
  d && d.appendChild(a);
  return a;
};
g.g.j.Hb = function (a, c) {
  var d = a.getAttribute("class") || "";
  -1 == (" " + d + " ").indexOf(" " + c + " ") &&
    (d && (d += " "), a.setAttribute("class", d + c));
};
g.g.j.BL = function (a, c) {
  c = c.split(" ");
  for (var d = 0; d < c.length; d++) g.g.j.Ac(a, c[d]);
};
g.g.j.Ac = function (a, c) {
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
g.g.j.nt = function (a, c) {
  return -1 != (" " + a.getAttribute("class") + " ").indexOf(" " + c + " ");
};
g.g.j.removeNode = function (a) {
  return a && a.parentNode ? a.parentNode.removeChild(a) : null;
};
g.g.j.Ik = function (a, c) {
  var d = c.nextSibling;
  c = c.parentNode;
  if (!c) throw Error("Reference node has no parent.");
  d ? c.insertBefore(a, d) : c.appendChild(a);
};
g.g.j.containsNode = function (a, c) {
  return !!(
    a.compareDocumentPosition(c) & g.g.j.vh.DOCUMENT_POSITION_CONTAINED_BY
  );
};
g.g.j.jn = function (a, c) {
  a.style.transform = c;
  a.style["-webkit-transform"] = c;
};
g.g.j.tn = function () {
  g.g.j.Zr++;
  g.g.j.Re || (g.g.j.Re = {});
};
g.g.j.un = function () {
  g.g.j.Zr--;
  g.g.j.Zr || (g.g.j.Re = null);
};
g.g.j.iL = function (a) {
  var c = a.textContent + "\n" + a.className.baseVal,
    d;
  if (g.g.j.Re && (d = g.g.j.Re[c])) return d;
  try {
    d =
      g.g.userAgent.Fe || g.g.userAgent.pi
        ? a.getBBox().width
        : a.getComputedTextLength();
  } catch (e) {
    return 8 * a.textContent.length;
  }
  g.g.j.Re && (g.g.j.Re[c] = d);
  return d;
};
g.g.j.bt = function (a, c, d, e) {
  return g.g.j.$E(a, c + "pt", d, e);
};
g.g.j.$E = function (a, c, d, e) {
  var f = a.textContent;
  a = f + "\n" + a.className.baseVal;
  var h;
  if (g.g.j.Re && (h = g.g.j.Re[a])) return h;
  g.g.j.Oo ||
    ((h = document.createElement("canvas")),
    (h.className = "blocklyComputeCanvas"),
    document.body.appendChild(h),
    (g.g.j.Oo = h.getContext("2d")));
  g.g.j.Oo.font = d + " " + c + " " + e;
  h = g.g.j.Oo.measureText(f).width;
  g.g.j.Re && (g.g.j.Re[a] = h);
  return h;
};
g.g.j.PF = function (a, c, d) {
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
      (d.Qe = a.offsetTop - e.offsetTop),
      (c.style.alignItems = "flex-end"),
      (d.height = a.offsetTop - e.offsetTop);
  } finally {
    document.body.removeChild(c);
  }
  return d;
};
g.Av = function (a) {
  this.am = a;
  this.Va();
};
b = g.Av.prototype;
b.yb = null;
b.Ef = null;
b.am = null;
b.ai = 1;
b.wn = null;
b.Va = function () {
  this.yb ||
    ((this.yb = g.g.j.N(
      g.g.H.wh,
      {
        xmlns: g.g.j.Jl,
        "xmlns:html": g.g.j.mo,
        "xmlns:xlink": g.g.j.Oe,
        version: "1.1",
        class: "blocklyBlockDragSurface",
      },
      this.am
    )),
    (this.Ef = g.g.j.N(g.g.H.Gc, {}, this.yb)));
};
function ba(a, c) {
  if (a.Ef.childNodes.length) throw Error("Already dragging a block.");
  a.Ef.appendChild(c);
  a.yb.style.display = "block";
  a.wn = new g.g.K(0, 0);
}
b.vj = function (a, c) {
  this.wn = new g.g.K(a * this.ai, c * this.ai);
  a = this.wn.x;
  c = this.wn.y;
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.yb.style.display = "block";
  g.g.j.jn(this.yb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.gt = function () {
  var a = g.g.le(this.yb);
  return new g.g.K(a.x / this.ai, a.y / this.ai);
};
b.ac = function () {
  return this.Ef;
};
b.Qo = function (a) {
  a
    ? a.appendChild(this.Ef.firstChild)
    : this.Ef.removeChild(this.Ef.firstChild);
  this.yb.style.display = "none";
  if (this.Ef.childNodes.length) throw Error("Drag group was not cleared.");
  this.wn = null;
};
g.Rd = {};
g.Rd.vt = !1;
g.Rd.register = function (a) {
  if (g.Rd.vt) throw Error("CSS already injected");
  Array.prototype.push.apply(g.Rd.Jq, a);
  a.length = 0;
};
g.Rd.Ti = function (a, c) {
  if (!g.Rd.vt) {
    g.Rd.vt = !0;
    var d = g.Rd.Jq.join("\n");
    g.Rd.Jq.length = 0;
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
g.Rd.Jq = [
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
g.g.hc = {};
g.g.hc.uj = function (a) {
  return (a * Math.PI) / 180;
};
g.g.hc.DA = function (a) {
  return (180 * a) / Math.PI;
};
g.g.hc.Vl = function (a, c, d) {
  if (d < a) {
    var e = d;
    d = a;
    a = e;
  }
  return Math.max(a, Math.min(c, d));
};
g.G = function () {};
g.G.Xr = null;
g.G.ue = null;
g.G.eA = null;
g.G.On = 16;
g.G.yv = 1;
g.G.tv = 12;
g.G.Cw = 16;
g.G.Aq = 0.25;
g.G.Pr = null;
g.G.jj = null;
g.G.cf = "";
g.G.ff = "";
g.G.Va = function () {
  if (!g.G.lf) {
    var a = document.createElement("div");
    a.className = "blocklyDropDownDiv";
    (g.Vp || document.body).appendChild(a);
    g.G.lf = a;
    var c = document.createElement("div");
    c.className = "blocklyDropDownContent";
    a.appendChild(c);
    g.G.Hg = c;
    c = document.createElement("div");
    c.className = "blocklyDropDownArrow";
    a.appendChild(c);
    g.G.ce = c;
    g.G.lf.style.opacity = 0;
    g.G.lf.style.transition =
      "transform " + g.G.Aq + "s, opacity " + g.G.Aq + "s";
    a.addEventListener("focusin", function () {
      g.g.j.Hb(a, "blocklyFocused");
    });
    a.addEventListener("focusout", function () {
      g.g.j.Ac(a, "blocklyFocused");
    });
  }
};
g.G.rH = function (a) {
  g.G.Xr = a;
};
g.G.Gy = function () {
  return g.G.Hg;
};
g.G.YD = function () {
  g.G.Hg.textContent = "";
  g.G.Hg.style.width = "";
};
g.G.Pd = function (a, c) {
  g.G.lf.style.backgroundColor = a;
  g.G.lf.style.borderColor = c;
};
g.G.LL = function (a, c, d, e) {
  return g.G.uA(g.G.Py(c), a, d, e);
};
g.G.tA = function (a, c) {
  g.G.eA = !0;
  g.G.uA(g.G.Qy(a), a, c, void 0);
};
g.G.Py = function (a) {
  var c = a.pa(),
    d = c.getBBox(),
    e = a.B.scale;
  a = d.height * e;
  d = d.width * e;
  c = g.g.style.Lf(c);
  return new g.g.Rect(c.y, c.y + a, c.x, c.x + d);
};
g.G.Qy = function (a) {
  a = ca(a);
  return new g.g.Rect(a.top, a.bottom, a.left, a.right);
};
g.G.uA = function (a, c, d, e) {
  var f = a.left + (a.right - a.left) / 2,
    h = a.bottom;
  a = a.top;
  e && (a += e);
  e = c.W();
  for (var k = e.B; k.options.qc; ) k = k.options.qc;
  g.G.rH(w(k).parentNode);
  return g.G.show(c, e.M, f, h, f, a, d);
};
g.G.show = function (a, c, d, e, f, h, k) {
  g.G.ue = a;
  g.G.jj = k || null;
  a = g.G.lf;
  a.style.direction = c ? "rtl" : "ltr";
  c = g.Jf();
  g.G.cf = c.ub.Ze();
  g.G.ff = c.Mg().Ze();
  g.g.j.Hb(a, g.G.cf);
  g.g.j.Hb(a, g.G.ff);
  return g.G.Xm(d, e, f, h);
};
g.G.RE = function () {
  var a = g.g.style.Lf(g.G.Xr),
    c = g.g.style.Lg(g.G.Xr);
  return {
    left: a.x,
    right: a.x + c.width,
    top: a.y,
    bottom: a.y + c.height,
    width: c.width,
    height: c.height,
  };
};
g.G.bF = function (a, c, d, e) {
  var f = g.G.RE(),
    h = g.g.style.Lg(g.G.lf);
  return c + h.height < f.bottom
    ? g.G.Oy(a, c, f, h)
    : e - h.height > f.top
    ? g.G.Ny(d, e, f, h)
    : c + h.height < document.documentElement.clientHeight
    ? g.G.Oy(a, c, f, h)
    : e - h.height > document.documentElement.clientTop
    ? g.G.Ny(d, e, f, h)
    : g.G.cF(a, f, h);
};
g.G.Oy = function (a, c, d, e) {
  a = g.G.ft(a, d.left, d.right, e.width);
  return {
    tt: a.vk,
    ut: c,
    Rs: a.vk,
    Ss: c + g.G.Cw,
    dk: a.dk,
    Rr: -(g.G.On / 2 + g.G.yv),
    Ko: !0,
    Qr: !0,
  };
};
g.G.Ny = function (a, c, d, e) {
  a = g.G.ft(a, d.left, d.right, e.width);
  return {
    tt: a.vk,
    ut: c - e.height,
    Rs: a.vk,
    Ss: c - e.height - g.G.Cw,
    dk: a.dk,
    Rr: e.height - 2 * g.G.yv - g.G.On / 2,
    Ko: !1,
    Qr: !0,
  };
};
g.G.cF = function (a, c, d) {
  a = g.G.ft(a, c.left, c.right, d.width);
  return {
    tt: a.vk,
    ut: 0,
    Rs: a.vk,
    Ss: 0,
    Ko: null,
    dk: null,
    Rr: null,
    Qr: !1,
  };
};
g.G.ft = function (a, c, d, e) {
  var f = a;
  a = g.g.hc.Vl(c, a - e / 2, d - e);
  f -= g.G.On / 2;
  c = g.g.hc.Vl(g.G.tv, f - a, e - g.G.tv - g.G.On);
  return { dk: c, vk: a };
};
g.G.isVisible = function () {
  return !!g.G.ue;
};
g.G.Gk = function (a, c) {
  g.G.ue === a && (c ? g.G.Oi() : g.G.Fa());
};
g.G.Fa = function () {
  var a = g.G.lf;
  a.style.transform = "translate(0, 0)";
  a.style.opacity = 0;
  g.G.Pr = setTimeout(function () {
    g.G.Oi();
  }, 1e3 * g.G.Aq);
  g.G.jj && (g.G.jj(), (g.G.jj = null));
};
g.G.Oi = function () {
  if (g.G.isVisible()) {
    g.G.Pr && clearTimeout(g.G.Pr);
    var a = g.G.lf;
    a.style.transform = "";
    a.style.left = "";
    a.style.top = "";
    a.style.opacity = 0;
    a.style.display = "none";
    a.style.backgroundColor = "";
    a.style.borderColor = "";
    g.G.jj && (g.G.jj(), (g.G.jj = null));
    g.G.YD();
    g.G.ue = null;
    g.G.cf && (g.g.j.Ac(a, g.G.cf), (g.G.cf = ""));
    g.G.ff && (g.g.j.Ac(a, g.G.ff), (g.G.ff = ""));
    da(g.Jf());
  }
};
g.G.Xm = function (a, c, d, e) {
  a = g.G.bF(a, c, d, e);
  a.Qr
    ? ((g.G.ce.style.display = ""),
      (g.G.ce.style.transform =
        "translate(" + a.dk + "px," + a.Rr + "px) rotate(45deg)"),
      g.G.ce.setAttribute(
        "class",
        a.Ko
          ? "blocklyDropDownArrow blocklyArrowTop"
          : "blocklyDropDownArrow blocklyArrowBottom"
      ))
    : (g.G.ce.style.display = "none");
  c = Math.floor(a.tt);
  d = Math.floor(a.ut);
  e = Math.floor(a.Rs);
  var f = Math.floor(a.Ss),
    h = g.G.lf;
  h.style.left = c + "px";
  h.style.top = d + "px";
  h.style.display = "block";
  h.style.opacity = 1;
  h.style.transform = "translate(" + (e - c) + "px," + (f - d) + "px)";
  return !!a.Ko;
};
g.G.DL = function () {
  if (g.G.ue) {
    var a = g.G.ue,
      c = a.W();
    a = g.G.eA ? g.G.Qy(a) : g.G.Py(c);
    c = a.left + (a.right - a.left) / 2;
    g.G.Xm(c, a.bottom, c, a.top);
  } else g.G.Fa();
};
g.ri = function (a, c) {
  this.Dk = a;
  this.Vu = c.spacing;
  this.xz = c.length;
  this.KF = (this.Ht = a.firstChild) && this.Ht.nextSibling;
  this.zH = c.snap;
};
g.ri.prototype.ai = 1;
g.ri.prototype.L = function () {
  this.Dk = null;
};
g.ri.prototype.update = function (a) {
  this.ai = a;
  var c = this.Vu * a || 100;
  this.Dk.setAttribute("width", c);
  this.Dk.setAttribute("height", c);
  c = Math.floor(this.Vu / 2) + 0.5;
  var d = c - this.xz / 2,
    e = c + this.xz / 2;
  c *= a;
  d *= a;
  e *= a;
  fa(this.Ht, a, d, e, c, c);
  fa(this.KF, a, c, c, d, e);
};
function fa(a, c, d, e, f, h) {
  a &&
    (a.setAttribute("stroke-width", c),
    a.setAttribute("x1", d),
    a.setAttribute("y1", f),
    a.setAttribute("x2", e),
    a.setAttribute("y2", h));
}
g.ri.prototype.moveTo = function (a, c) {
  this.Dk.setAttribute("x", a);
  this.Dk.setAttribute("y", c);
  (g.g.userAgent.Fe || g.g.userAgent.pi) && this.update(this.ai);
};
g.ri.Va = function (a, c, d) {
  a = g.g.j.N(
    g.g.H.Ew,
    { id: "blocklyGridPattern" + a, patternUnits: "userSpaceOnUse" },
    d
  );
  0 < c.length && 0 < c.spacing
    ? (g.g.j.N(g.g.H.ui, { stroke: c.colour }, a),
      1 < c.length && g.g.j.N(g.g.H.ui, { stroke: c.colour }, a))
    : g.g.j.N(g.g.H.ui, {}, a);
  return a;
};
g.zi = function (a, c, d, e) {
  this.name = a;
  this.zh = c || Object.create(null);
  this.ds = d || Object.create(null);
  this.Nx = e || Object.create(null);
  this.fontStyle = Object.create(null);
  this.Xu = null;
  g.D.register(g.D.ba.Dr, a, this);
};
g.zi.prototype.Ze = function () {
  return this.name + "-theme";
};
function ha(a, c) {
  return (c = a.Nx[c]) && "string" == typeof c && ha(a, c)
    ? ha(a, c)
    : c
    ? String(c)
    : null;
}
g.zi.qE = function (a, c) {
  var d = new g.zi(a),
    e = c.base;
  e &&
    ("string" == typeof e && (e = g.D.et(g.D.ba.Dr, e)),
    e instanceof g.zi && (g.g.object.rk(d, e), (d.name = a)));
  g.g.object.rk(d.zh, c.blockStyles);
  g.g.object.rk(d.ds, c.categoryStyles);
  g.g.object.rk(d.Nx, c.componentStyles);
  g.g.object.rk(d.fontStyle, c.fontStyle);
  null != c.startHats && (d.Xu = c.startHats);
  return d;
};
g.xg = {};
g.xg.lh = {};
g.xg.lh.nE = {
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
g.xg.lh.ds = {
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
g.xg.lh = new g.zi("classic", g.xg.lh.nE, g.xg.lh.ds);
g.g.wl = {};
g.g.wl.dG = 0;
g.g.wl.Ly = function () {
  return "blockly-" + (g.g.wl.dG++).toString(36);
};
g.g.qJ = function () {};
g.g.ya = {};
g.g.ya.Fq = "categoryToolbox";
g.g.ya.Xv = "flyoutToolbox";
g.g.ya.Yd = { Gr: g.Nl, zv: g.Fo, yl: g.Me, Sj: g.Ml };
g.g.ya.ns = function (a) {
  if (!a) return null;
  if (a instanceof Element || "string" == typeof a)
    (a = g.g.ya.ou(a)), (a = g.g.ya.iE(a));
  g.g.ya.TH(a);
  return a;
};
g.g.ya.TH = function (a) {
  var c = a.kind;
  a = a.contents;
  if (c && c != g.g.ya.Xv && c != g.g.ya.Fq)
    throw Error(
      "Invalid toolbox kind " +
        c +
        ". Please supply either " +
        g.g.ya.Xv +
        " or " +
        g.g.ya.Fq
    );
  if (!a) throw Error("Toolbox must have a contents attribute.");
};
g.g.ya.Wx = function (a) {
  return a
    ? a.contents
      ? a.contents
      : Array.isArray(a) && 0 < a.length && !a[0].nodeType
      ? a
      : g.g.ya.kv(a)
    : [];
};
g.g.ya.xm = function (a) {
  if (!a) return !1;
  var c = a.kind;
  return c
    ? c == g.g.ya.Fq
    : !!a.contents.filter(function (d) {
        return "CATEGORY" == d.kind.toUpperCase();
      }).length;
};
g.g.ya.mL = function (a) {
  return a && a.contents
    ? !!a.contents.filter(function (c) {
        return "CATEGORY" == c.kind.toUpperCase();
      }).length
    : !1;
};
g.g.ya.iE = function (a) {
  var c = { contents: g.g.ya.kv(a) };
  a instanceof Node && g.g.ya.wx(a, c);
  return c;
};
g.g.ya.kv = function (a) {
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
          (f.contents = g.g.ya.kv(e));
      g.g.ya.wx(e, f);
      c.push(f);
    }
  return c;
};
g.g.ya.wx = function (a, c) {
  for (var d = 0; d < a.attributes.length; d++) {
    var e = a.attributes[d];
    -1 < e.nodeName.indexOf("css-")
      ? ((c.cssconfig = c.cssconfig || {}),
        (c.cssconfig[e.nodeName.replace("css-", "")] = e.value))
      : (c[e.nodeName] = e.value);
  }
};
g.g.ya.ou = function (a) {
  if (a) {
    if (
      ("string" != typeof a &&
        (g.g.userAgent.Fe && a.outerHTML
          ? (a = a.outerHTML)
          : a instanceof Element || (a = null)),
      "string" == typeof a &&
        ((a = g.R.fg(a)), "xml" != a.nodeName.toLowerCase()))
    )
      throw TypeError("Toolbox should be an <xml> document.");
  } else a = null;
  return a;
};
g.g.xml = {};
g.g.xml.UC = "https://developers.google.com/blockly/xml";
g.g.xml.document = function () {
  return document;
};
g.g.xml.createElement = function (a) {
  return g.g.xml.document().createElementNS(g.g.xml.UC, a);
};
g.g.xml.createTextNode = function (a) {
  return g.g.xml.document().createTextNode(a);
};
g.g.xml.JH = function (a) {
  return new DOMParser().parseFromString(a, "text/xml");
};
g.g.xml.Xc = function (a) {
  return new XMLSerializer().serializeToString(a);
};
g.h.hf = function (a) {
  g.h.hf.A.constructor.call(this);
  this.fb = (this.Kd = "undefined" == typeof a) ? "" : a.id;
  this.ic = this.Kd ? "" : a.B.id;
};
g.g.object.V(g.h.hf, g.h.Abstract);
g.h.hf.prototype.sa = function () {
  var a = g.h.hf.A.sa.call(this);
  a.blockId = this.fb;
  return a;
};
g.h.hf.prototype.aa = function (a) {
  g.h.hf.A.aa.call(this, a);
  this.fb = a.blockId;
};
g.h.kh = function (a, c, d, e, f) {
  g.h.kh.A.constructor.call(this, a);
  a &&
    ((this.element = "undefined" == typeof c ? "" : c),
    (this.name = "undefined" == typeof d ? "" : d),
    (this.oldValue = "undefined" == typeof e ? "" : e),
    (this.newValue = "undefined" == typeof f ? "" : f));
};
g.g.object.V(g.h.kh, g.h.hf);
g.h.ih = g.h.kh;
b = g.h.kh.prototype;
b.type = g.h.Fj;
b.sa = function () {
  var a = g.h.kh.A.sa.call(this);
  a.element = this.element;
  this.name && (a.name = this.name);
  a.oldValue = this.oldValue;
  a.newValue = this.newValue;
  return a;
};
b.aa = function (a) {
  g.h.kh.A.aa.call(this, a);
  this.element = a.element;
  this.name = a.name;
  this.oldValue = a.oldValue;
  this.newValue = a.newValue;
};
b.Pk = function () {
  return this.oldValue == this.newValue;
};
b.run = function (a) {
  var c = v(this).Yc(this.fb);
  if (c)
    switch (
      (c.ud && c.ud.Lb(!1),
      (a = a ? this.newValue : this.oldValue),
      this.element)
    ) {
      case "field":
        (c = ia(c, this.name))
          ? c.setValue(a)
          : console.warn("Can't set non-existent field: " + this.name);
        break;
      case "comment":
        c.al(a || null);
        break;
      case "collapsed":
        c.pj(!!a);
        break;
      case "disabled":
        c.Zf(!a);
        break;
      case "inline":
        c.$g(!!a);
        break;
      case "mutation":
        var d = "";
        c.zc && (d = (d = c.zc()) && g.R.Xc(d));
        if (c.ke) {
          var e = g.R.fg(a || "<mutation/>");
          c.ke(e);
        }
        g.h.Ea(new g.h.kh(c, "mutation", null, d, a));
        break;
      default:
        console.warn("Unknown change type: " + this.element);
    }
  else console.warn("Can't change non-existent block: " + this.fb);
};
g.h.De = function (a) {
  g.h.De.A.constructor.call(this, a);
  a &&
    (a.Ga && (this.Qa = !1),
    (this.xml = a.B.qa ? g.R.Vr(a) : g.R.Cg(a)),
    (this.Qi = g.h.Hy(a)));
};
g.g.object.V(g.h.De, g.h.hf);
g.h.Tn = g.h.De;
g.h.De.prototype.type = g.h.Yn;
g.h.De.prototype.sa = function () {
  var a = g.h.De.A.sa.call(this);
  a.xml = g.R.Xc(this.xml);
  a.ids = this.Qi;
  this.Qa || (a.recordUndo = this.Qa);
  return a;
};
g.h.De.prototype.aa = function (a) {
  g.h.De.A.aa.call(this, a);
  this.xml = g.R.fg(a.xml);
  this.Qi = a.ids;
  void 0 !== a.recordUndo && (this.Qa = a.recordUndo);
};
g.h.De.prototype.run = function (a) {
  var c = v(this);
  if (a)
    (a = g.g.xml.createElement("xml")), a.appendChild(this.xml), g.R.xk(a, c);
  else {
    a = 0;
    for (var d; (d = this.Qi[a]); a++) {
      var e = c.Yc(d);
      e
        ? e.L(!1)
        : d == this.fb &&
          console.warn("Can't uncreate non-existent block: " + d);
    }
  }
};
g.h.mf = function (a) {
  g.h.mf.A.constructor.call(this, a);
  if (a) {
    if (a.getParent()) throw Error("Connected blocks cannot be deleted.");
    a.Ga && (this.Qa = !1);
    this.Wk = a.B.qa ? g.R.Vr(a) : g.R.Cg(a);
    this.Qi = g.h.Hy(a);
  }
};
g.g.object.V(g.h.mf, g.h.hf);
g.h.lB = g.h.mf;
g.h.mf.prototype.type = g.h.oi;
g.h.mf.prototype.sa = function () {
  var a = g.h.mf.A.sa.call(this);
  a.oldXml = g.R.Xc(this.Wk);
  a.ids = this.Qi;
  this.Qa || (a.recordUndo = this.Qa);
  return a;
};
g.h.mf.prototype.aa = function (a) {
  g.h.mf.A.aa.call(this, a);
  this.Wk = g.R.fg(a.oldXml);
  this.Qi = a.ids;
  void 0 !== a.recordUndo && (this.Qa = a.recordUndo);
};
g.h.mf.prototype.run = function (a) {
  var c = v(this);
  if (a) {
    a = 0;
    for (var d; (d = this.Qi[a]); a++) {
      var e = c.Yc(d);
      e
        ? e.L(!1)
        : d == this.fb && console.warn("Can't delete non-existent block: " + d);
    }
  } else
    (a = g.g.xml.createElement("xml")), a.appendChild(this.Wk), g.R.xk(a, c);
};
g.h.wi = function (a) {
  g.h.wi.A.constructor.call(this, a);
  a &&
    (a.Ga && (this.Qa = !1),
    (a = ja(this)),
    (this.Pz = a.Xz),
    (this.Mz = a.jz),
    (this.$t = a.Xx));
};
g.g.object.V(g.h.wi, g.h.hf);
g.h.ml = g.h.wi;
b = g.h.wi.prototype;
b.type = g.h.Bl;
b.sa = function () {
  var a = g.h.wi.A.sa.call(this);
  this.gj && (a.newParentId = this.gj);
  this.fj && (a.newInputName = this.fj);
  this.Th &&
    (a.newCoordinate = Math.round(this.Th.x) + "," + Math.round(this.Th.y));
  this.Qa || (a.recordUndo = this.Qa);
  return a;
};
b.aa = function (a) {
  g.h.wi.A.aa.call(this, a);
  this.gj = a.newParentId;
  this.fj = a.newInputName;
  if (a.newCoordinate) {
    var c = a.newCoordinate.split(",");
    this.Th = new g.g.K(Number(c[0]), Number(c[1]));
  }
  void 0 !== a.recordUndo && (this.Qa = a.recordUndo);
};
b.kj = function () {
  var a = ja(this);
  this.gj = a.Xz;
  this.fj = a.jz;
  this.Th = a.Xx;
};
function ja(a) {
  var c = v(a).Yc(a.fb);
  a = {};
  var d = c.getParent();
  if (d) {
    if (((a.Xz = d.id), (c = ka(d, c)))) a.jz = c.name;
  } else a.Xx = c.Ta();
  return a;
}
b.Pk = function () {
  return this.Pz == this.gj && this.Mz == this.fj && g.g.K.Gf(this.$t, this.Th);
};
b.run = function (a) {
  var c = v(this),
    d = c.Yc(this.fb);
  if (d) {
    var e = a ? this.gj : this.Pz,
      f = a ? this.fj : this.Mz;
    a = a ? this.Th : this.$t;
    var h = null;
    if (e && ((h = c.Yc(e)), !h)) {
      console.warn("Can't connect to non-existent block: " + e);
      return;
    }
    d.getParent() && x(d);
    if (a) (f = d.Ta()), d.moveBy(a.x - f.x, a.y - f.y);
    else {
      d = d.O || d.Z;
      if (f) {
        if ((c = y(h, f))) var k = c.connection;
      } else d.type == g.Je && (k = h.Y);
      k
        ? d.connect(k)
        : console.warn("Can't connect to non-existent input: " + f);
    }
  } else console.warn("Can't move non-existent block: " + this.fb);
};
g.D.register(g.D.ba.Pb, g.h.Yn, g.h.De);
g.D.register(g.D.ba.Pb, g.h.oi, g.h.mf);
g.D.register(g.D.ba.Pb, g.h.Fj, g.h.kh);
g.D.register(g.D.ba.Pb, g.h.Bl, g.h.wi);
g.h.Jj = function (a) {
  this.Kd = "undefined" == typeof a;
  this.ic = a ? a.id : "";
  this.group = g.h.ac();
  this.Qa = !1;
};
g.g.object.V(g.h.Jj, g.h.Abstract);
g.h.Jj.prototype.type = g.h.Wv;
g.h.Jj.prototype.sa = function () {
  var a = { type: this.type };
  this.group && (a.group = this.group);
  this.ic && (a.workspaceId = this.ic);
  return a;
};
g.h.Jj.prototype.aa = function (a) {
  this.Kd = !1;
  this.ic = a.workspaceId;
  this.group = a.group;
};
g.D.register(g.D.ba.Pb, g.h.Wv, g.h.Jj);
g.h.zg = function (a) {
  g.h.zg.A.constructor.call(this);
  this.ii = (this.Kd = "undefined" == typeof a) ? "" : a.zb();
  this.ic = this.Kd ? "" : a.B.id;
};
g.g.object.V(g.h.zg, g.h.Abstract);
g.h.zg.prototype.sa = function () {
  var a = g.h.zg.A.sa.call(this);
  a.varId = this.ii;
  return a;
};
g.h.zg.prototype.aa = function (a) {
  g.h.zg.A.sa.call(this);
  this.ii = a.varId;
};
g.h.ae = function (a) {
  g.h.ae.A.constructor.call(this, a);
  a && ((this.zj = a.type), (this.yj = a.name));
};
g.g.object.V(g.h.ae, g.h.zg);
g.h.ae.prototype.type = g.h.ex;
g.h.ae.prototype.sa = function () {
  var a = g.h.ae.A.sa.call(this);
  a.varType = this.zj;
  a.varName = this.yj;
  return a;
};
g.h.ae.prototype.aa = function (a) {
  g.h.ae.A.aa.call(this, a);
  this.zj = a.varType;
  this.yj = a.varName;
};
g.h.ae.prototype.run = function (a) {
  var c = v(this);
  a ? c.We(this.yj, this.zj, this.ii) : c.Gi(this.ii);
};
g.h.Ne = function (a) {
  g.h.Ne.A.constructor.call(this, a);
  a && ((this.zj = a.type), (this.yj = a.name));
};
g.g.object.V(g.h.Ne, g.h.zg);
g.h.Ne.prototype.type = g.h.gx;
g.h.Ne.prototype.sa = function () {
  var a = g.h.Ne.A.sa.call(this);
  a.varType = this.zj;
  a.varName = this.yj;
  return a;
};
g.h.Ne.prototype.aa = function (a) {
  g.h.Ne.A.aa.call(this, a);
  this.zj = a.varType;
  this.yj = a.varName;
};
g.h.Ne.prototype.run = function (a) {
  var c = v(this);
  a ? c.Gi(this.ii) : c.We(this.yj, this.zj, this.ii);
};
g.h.vf = function (a, c) {
  g.h.vf.A.constructor.call(this, a);
  a && ((this.bu = a.name), (this.Xt = "undefined" == typeof c ? "" : c));
};
g.g.object.V(g.h.vf, g.h.zg);
g.h.vf.prototype.type = g.h.ix;
g.h.vf.prototype.sa = function () {
  var a = g.h.vf.A.sa.call(this);
  a.oldName = this.bu;
  a.newName = this.Xt;
  return a;
};
g.h.vf.prototype.aa = function (a) {
  g.h.vf.A.aa.call(this, a);
  this.bu = a.oldName;
  this.Xt = a.newName;
};
g.h.vf.prototype.run = function (a) {
  var c = v(this);
  a ? c.mj(this.ii, this.Xt) : c.mj(this.ii, this.bu);
};
g.D.register(g.D.ba.Pb, g.h.ex, g.h.ae);
g.D.register(g.D.ba.Pb, g.h.gx, g.h.Ne);
g.D.register(g.D.ba.Pb, g.h.ix, g.h.vf);
g.R = {};
g.R.TA = function (a) {
  var c = z,
    d = g.g.xml.createElement("xml"),
    e = g.R.XH(g.ma.Ax(c));
  e.hasChildNodes() && d.appendChild(e);
  var f = [].concat(c.qq);
  1 < f.length &&
    ((c.ag.offset = Math.sin(g.g.hc.uj(g.Ab.Pw))),
    c.M && (c.ag.offset *= -1),
    f.sort(c.ag));
  e = 0;
  for (var h; (h = f[e]); e++) d.appendChild(h.FA(a));
  c = c.tb(!0);
  for (e = 0; (f = c[e]); e++) d.appendChild(g.R.Vr(f, a));
  return d;
};
g.R.XH = function (a) {
  for (var c = g.g.xml.createElement("variables"), d = 0, e; (e = a[d]); d++) {
    var f = g.g.xml.createElement("variable");
    f.appendChild(g.g.xml.createTextNode(e.name));
    e.type && f.setAttribute("type", e.type);
    f.id = e.zb();
    c.appendChild(f);
  }
  return c;
};
g.R.Vr = function (a, c) {
  if (a.pe() && ((a = A(a, !1)[0]), !a)) return new DocumentFragment();
  var d;
  a.B.M && (d = a.B.Og());
  c = g.R.Cg(a, c);
  var e = a.Ta();
  c.setAttribute("x", Math.round(a.B.M ? d - e.x : e.x));
  c.setAttribute("y", Math.round(e.y));
  return c;
};
g.R.IE = function (a) {
  var c = !1;
  a.name &&
    (a.Tj
      ? (c = !0)
      : a.bo &&
        (console.warn(
          "Detected an editable field that was not serializable. Please define SERIALIZABLE property as true on all editable custom fields. Proceeding with serialization."
        ),
        (c = !0)));
  return c
    ? ((c = g.g.xml.createElement("field")),
      c.setAttribute("name", a.name || ""),
      a.EA(c))
    : null;
};
g.R.HD = function (a, c) {
  for (var d = 0, e; (e = a.T[d]); d++)
    for (var f = 0, h; (h = e.gb[f]); f++) (h = g.R.IE(h)) && c.appendChild(h);
};
g.R.Cg = function (a, c) {
  if (a.pe()) return (a = A(a, !1)[0]) ? g.R.Cg(a) : new DocumentFragment();
  var d = g.g.xml.createElement(a.Ga ? "shadow" : "block");
  d.setAttribute("type", a.type);
  c || d.setAttribute("id", a.id);
  if (a.zc) {
    var e = a.zc();
    e && (e.hasChildNodes() || e.hasAttributes()) && d.appendChild(e);
  }
  g.R.HD(a, d);
  if ((e = a.Te.text)) {
    var f = a.Te.size,
      h = a.Te.Zz,
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
  for (e = 0; (f = a.T[e]); e++) {
    var l;
    h = !0;
    if (f.type != g.Ee) {
      var m = f.connection.ra();
      f.type == g.rb
        ? (l = g.g.xml.createElement("value"))
        : f.type == g.Ua && (l = g.g.xml.createElement("statement"));
      k = f.connection.Ck();
      !k || (m && m.Ga) || l.appendChild(g.R.Lx(k, c));
      m &&
        ((k = g.R.Cg(m, c)),
        k.nodeType == g.g.j.vh.ELEMENT_NODE && (l.appendChild(k), (h = !1)));
      l.setAttribute("name", f.name);
      h || d.appendChild(l);
    }
  }
  void 0 != a.Rg && a.Rg != a.zF && d.setAttribute("inline", a.Rg);
  a.isCollapsed() && d.setAttribute("collapsed", !0);
  a.isEnabled() || d.setAttribute("disabled", !0);
  a.sd() || a.Ga || d.setAttribute("deletable", !1);
  a.Mc() || a.Ga || d.setAttribute("movable", !1);
  a.td() || d.setAttribute("editable", !1);
  if ((e = u(a)))
    (k = g.R.Cg(e, c)),
      k.nodeType == g.g.j.vh.ELEMENT_NODE &&
        ((l = g.g.xml.createElement("next")),
        l.appendChild(k),
        d.appendChild(l));
  k = a.Y && a.Y.Ck();
  !k || (e && e.Ga) || l.appendChild(g.R.Lx(k, c));
  return d;
};
g.R.Lx = function (a, c) {
  for (var d = (a = a.cloneNode(!0)), e; d; )
    if ((c && "shadow" == d.nodeName && d.removeAttribute("id"), d.firstChild))
      d = d.firstChild;
    else {
      for (; d && !d.nextSibling; )
        (e = d),
          (d = d.parentNode),
          e.nodeType == g.g.j.vh.TEXT_NODE &&
            "" == e.data.trim() &&
            d.firstChild != e &&
            g.g.j.removeNode(e);
      d &&
        ((e = d),
        (d = d.nextSibling),
        e.nodeType == g.g.j.vh.TEXT_NODE &&
          "" == e.data.trim() &&
          g.g.j.removeNode(e));
    }
  return a;
};
g.R.Xc = function (a) {
  return g.g.xml.Xc(a).replace(/<(\w+)([^<]*)\/>/g, "<$1$2></$1>");
};
g.R.XK = function (a) {
  a = g.R.Xc(a).split("<");
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
g.R.fg = function (a) {
  var c = g.g.xml.JH(a);
  if (!c || !c.documentElement || c.getElementsByTagName("parsererror").length)
    throw Error("textToDom was unable to parse: " + a);
  return c.documentElement;
};
g.R.TK = function (a, c) {
  c.rc(!1);
  c.clear();
  a = g.R.xk(a, c);
  c.rc(!0);
  return a;
};
g.R.xk = function (a, c) {
  if (a instanceof g.Ab) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToWorkspace, swap the arguments."
    );
  }
  var e;
  c.M && (e = c.Og());
  d = [];
  g.g.j.tn();
  var f = g.h.ac();
  f || g.h.ea(!0);
  c.rc && c.rc(!1);
  var h = !0;
  try {
    for (var k = 0, l; (l = a.childNodes[k]); k++) {
      var m = l.nodeName.toLowerCase(),
        n = l;
      if ("block" == m || ("shadow" == m && !g.h.Qa)) {
        var p = g.R.wk(n, c);
        d.push(p.id);
        var q = n.hasAttribute("x") ? parseInt(n.getAttribute("x"), 10) : 10,
          t = n.hasAttribute("y") ? parseInt(n.getAttribute("y"), 10) : 10;
        isNaN(q) || isNaN(t) || p.moveBy(c.M ? e - q : q, t);
        h = !1;
      } else {
        if ("shadow" == m)
          throw TypeError("Shadow block cannot be a top-level block.");
        if ("comment" == m)
          c.qa
            ? g.bk
              ? g.bk.pm(n)
              : console.warn(
                  "Missing require for Blockly.WorkspaceCommentSvg, ignoring workspace comment."
                )
            : g.sx
            ? g.sx.pm(n)
            : console.warn(
                "Missing require for Blockly.WorkspaceComment, ignoring workspace comment."
              );
        else if ("variables" == m) {
          if (h) g.R.BE(n, c);
          else
            throw Error(
              "'variables' tag must exist once before block and shadow tag elements in the workspace XML, but it was found in another location."
            );
          h = !1;
        }
      }
    }
  } finally {
    f || g.h.ea(!1), g.g.j.un();
  }
  c.rc && c.rc(!0);
  g.h.Ea(new g.h.Jj(c));
  return d;
};
g.R.OK = function (a, c) {
  var d;
  Object.prototype.hasOwnProperty.call(c, "scale") && (d = la(c));
  a = g.R.xk(a, c);
  if (d && d.top != d.bottom) {
    var e = d.bottom;
    var f = c.M ? d.right : d.left;
    var h = Infinity,
      k = -Infinity,
      l = Infinity;
    for (d = 0; d < a.length; d++) {
      var m = c.Yc(a[d]).Ta();
      m.y < l && (l = m.y);
      m.x < h && (h = m.x);
      m.x > k && (k = m.x);
    }
    e = e - l + 10;
    f = c.M ? f - k : f - h;
    for (d = 0; d < a.length; d++) c.Yc(a[d]).moveBy(f, e);
  }
  return a;
};
g.R.wk = function (a, c) {
  if (a instanceof g.Ab) {
    var d = a;
    a = c;
    c = d;
    console.warn(
      "Deprecated call to Blockly.Xml.domToBlock, swap the arguments."
    );
  }
  g.h.disable();
  d = c.Ki();
  try {
    var e = g.R.Fs(a, c),
      f = r(e, !1);
    if (c.qa) {
      ma(e, !1);
      for (var h = f.length - 1; 0 <= h; h--) f[h].Rf();
      for (h = f.length - 1; 0 <= h; h--) f[h].Ha(!1);
      setTimeout(function () {
        e.Xe || ma(e, !0);
      }, 1);
      oa(e);
      pa(c);
    } else for (h = f.length - 1; 0 <= h; h--) f[h].Si();
  } finally {
    g.h.enable();
  }
  if (g.h.isEnabled()) {
    a = g.ma.Dy(c, d);
    for (h = 0; h < a.length; h++) g.h.Ea(new g.h.ae(a[h]));
    g.h.Ea(new g.h.Tn(e));
  }
  return e;
};
g.R.BE = function (a, c) {
  for (var d = 0, e; (e = a.childNodes[d]); d++)
    if (e.nodeType == g.g.j.vh.ELEMENT_NODE) {
      var f = e.getAttribute("type"),
        h = e.getAttribute("id");
      c.We(e.textContent, f, h);
    }
};
g.R.Fs = function (a, c) {
  var d = null,
    e = a.getAttribute("type");
  if (!e) throw TypeError("Block type unspecified: " + a.outerHTML);
  var f = a.getAttribute("id");
  d = c.Vk(e, f);
  var h = null;
  f = 0;
  for (var k; (k = a.childNodes[f]); f++)
    if (k.nodeType != g.g.j.vh.TEXT_NODE) {
      for (var l, m = (h = null), n = 0; (l = k.childNodes[n]); n++)
        l.nodeType == g.g.j.vh.ELEMENT_NODE &&
          ("block" == l.nodeName.toLowerCase()
            ? (h = l)
            : "shadow" == l.nodeName.toLowerCase() && (m = l));
      n = !1;
      var p = k.getAttribute("name");
      l = k;
      switch (k.nodeName.toLowerCase()) {
        case "mutation":
          d.ke && (d.ke(l), d.Rf && (n = !0));
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
          d.al(m);
          d.Te.Zz = h;
          isNaN(k) || isNaN(l) || (d.Te.size = new g.g.Zd(k, l));
          h &&
            d.UE &&
            !d.nc &&
            setTimeout(function () {
              d.Se.Lb(!0);
            }, 1);
          break;
        case "data":
          d.data = k.textContent;
          break;
        case "title":
        case "field":
          g.R.AE(d, p, l);
          break;
        case "value":
        case "statement":
          l = y(d, p);
          if (!l) {
            console.warn("Ignoring non-existent input " + p + " in block " + e);
            break;
          }
          if (h)
            if (((h = g.R.Fs(h, c)), h.O)) l.connection.connect(h.O);
            else if (h.Z) l.connection.connect(h.Z);
            else
              throw TypeError(
                "Child block does not have output or previous statement."
              );
          m && l.connection.on(m);
          break;
        case "next":
          if (h) {
            if (!d.Y) throw TypeError("Next statement does not exist.");
            if (d.Y.isConnected())
              throw TypeError("Next statement is already connected.");
            h = g.R.Fs(h, c);
            if (!h.Z)
              throw TypeError("Next block does not have previous statement.");
            d.Y.connect(h.Z);
          }
          m && d.Y && d.Y.on(m);
          break;
        default:
          console.warn("Ignoring unknown tag: " + k.nodeName);
      }
    }
  n && d.Rf();
  (f = a.getAttribute("inline")) && d.$g("true" == f);
  (f = a.getAttribute("disabled")) && d.Zf("true" != f && "disabled" != f);
  if ((f = a.getAttribute("deletable"))) d.hm = "true" == f;
  (f = a.getAttribute("movable")) && d.fq("true" == f);
  (f = a.getAttribute("editable")) && d.Nu("true" == f);
  (f = a.getAttribute("collapsed")) && d.pj("true" == f);
  if ("shadow" == a.nodeName.toLowerCase()) {
    a = A(d, !1);
    for (f = 0; (c = a[f]); f++)
      if (!c.Ga) throw TypeError("Shadow block not allowed non-shadow child.");
    if (qa(d).length)
      throw TypeError("Shadow blocks cannot have variable references.");
    d.Pu(!0);
  }
  return d;
};
g.R.AE = function (a, c, d) {
  var e = ia(a, c);
  e
    ? e.pm(d)
    : console.warn("Ignoring non-existent field " + c + " in block " + a.type);
};
g.R.rE = function (a) {
  for (var c = 0, d; (d = a.childNodes[c]); c++)
    if ("next" == d.nodeName.toLowerCase()) {
      a.removeChild(d);
      break;
    }
};
g.kd = function (a) {
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
    d = g.g.ya.ns(a.toolbox);
    e = g.g.ya.xm(d);
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
    q = a.horizontalLayout;
  void 0 === q && (q = !1);
  var t = a.toolboxPosition;
  t = "end" !== t;
  t = q
    ? t
      ? g.g.ya.Yd.Gr
      : g.g.ya.Yd.zv
    : t == p
    ? g.g.ya.Yd.Sj
    : g.g.ya.Yd.yl;
  var B = a.css;
  void 0 === B && (B = !0);
  var ea = "https://blockly-demo.appspot.com/static/media/";
  a.media ? (ea = a.media) : a.path && (ea = a.path + "media/");
  var na = void 0 === a.oneBasedIndex ? !0 : !!a.oneBasedIndex,
    ae = a.renderer || "geras",
    be = a.plugins || {};
  this.M = p;
  this.Up = na;
  this.collapse = h;
  this.aE = k;
  this.disable = l;
  this.readOnly = c;
  this.Lm = a.maxBlocks || Infinity;
  this.Fp = a.maxInstances;
  this.Um = ea;
  this.xm = e;
  this.pc = g.kd.tG(a, e);
  this.cz = f;
  this.Gp = n;
  this.sF = m;
  this.qF = B;
  this.oe = q;
  this.Vg = d;
  this.Zy = g.kd.sG(a);
  this.ib = g.kd.vG(a);
  this.jb = t;
  this.KH = g.kd.uG(a);
  this.bq = ae;
  this.cq = a.rendererOverrides;
  this.mt = null;
  this.qc = a.parentWorkspace;
  this.plugins = be;
};
g.hI = function () {};
g.kd.tG = function (a, c) {
  var d = a.move || {},
    e = {};
  e.scrollbars =
    void 0 === d.scrollbars && void 0 === a.scrollbars
      ? c
      : !!d.scrollbars || !!a.scrollbars;
  e.ki = e.scrollbars && void 0 !== d.wheel ? !!d.wheel : !1;
  e.Fh = e.scrollbars ? (void 0 === d.drag ? !0 : !!d.drag) : !1;
  return e;
};
g.kd.vG = function (a) {
  a = a.zoom || {};
  var c = {};
  c.controls = void 0 === a.controls ? !1 : !!a.controls;
  c.ki = void 0 === a.wheel ? !1 : !!a.wheel;
  c.EH = void 0 === a.startScale ? 1 : Number(a.startScale);
  c.Mm = void 0 === a.maxScale ? 3 : Number(a.maxScale);
  c.Om = void 0 === a.minScale ? 0.3 : Number(a.minScale);
  c.oH = void 0 === a.scaleSpeed ? 1.2 : Number(a.scaleSpeed);
  c.su = void 0 === a.pinch ? c.ki || c.controls : !!a.pinch;
  return c;
};
g.kd.sG = function (a) {
  a = a.grid || {};
  var c = {};
  c.spacing = Number(a.spacing) || 0;
  c.Cb = a.colour || "#888";
  c.length = void 0 === a.length ? 1 : Number(a.length);
  c.ML = 0 < c.spacing && !!a.snap;
  return c;
};
g.kd.uG = function (a) {
  a = a.theme || g.xg.lh;
  return "string" == typeof a
    ? g.D.et(g.D.ba.Dr, a)
    : a instanceof g.zi
    ? a
    : g.zi.qE(a.name || "builtin" + g.g.wl.Ly(), a);
};
g.kd.ou = function (a) {
  g.g.us.warn(
    "Blockly.Options.parseToolboxTree",
    "September 2020",
    "September 2021",
    "Blockly.utils.toolbox.parseToolboxTree"
  );
  return g.g.ya.ou(a);
};
g.Touch = {};
g.Touch.Yw =
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
g.Touch.Bn = null;
g.Touch.tf = {};
g.g.global.PointerEvent
  ? (g.Touch.tf = {
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
  : g.Touch.Yw &&
    (g.Touch.tf = {
      mousedown: ["touchstart"],
      mousemove: ["touchmove"],
      mouseup: ["touchend", "touchcancel"],
    });
g.Dp = 0;
g.NF = function (a, c) {
  g.Rh();
  (a.changedTouches && 1 != a.changedTouches.length) ||
    (g.Dp = setTimeout(function () {
      a.changedTouches &&
        ((a.button = 2),
        (a.clientX = a.changedTouches[0].clientX),
        (a.clientY = a.changedTouches[0].clientY));
      c && ra(c, a);
    }, g.HC));
};
g.Rh = function () {
  g.Dp && (clearTimeout(g.Dp), (g.Dp = 0));
};
g.Touch.Ro = function () {
  g.Touch.Bn = null;
};
g.Touch.Uu = function (a) {
  return !g.Touch.EF(a) || g.Touch.XD(a);
};
g.Touch.pp = function (a) {
  return void 0 != a.pointerId
    ? a.pointerId
    : a.changedTouches &&
      a.changedTouches[0] &&
      void 0 !== a.changedTouches[0].identifier &&
      null !== a.changedTouches[0].identifier
    ? a.changedTouches[0].identifier
    : "mouse";
};
g.Touch.XD = function (a) {
  var c = g.Touch.pp(a);
  return void 0 !== g.Touch.Bn && null !== g.Touch.Bn
    ? g.Touch.Bn == c
    : "mousedown" == a.type || "touchstart" == a.type || "pointerdown" == a.type
    ? ((g.Touch.Bn = c), !0)
    : !1;
};
g.Touch.sH = function (a) {
  if (g.g.$a.startsWith(a.type, "touch")) {
    var c = a.changedTouches[0];
    a.clientX = c.clientX;
    a.clientY = c.clientY;
  }
};
g.Touch.EF = function (a) {
  return (
    g.g.$a.startsWith(a.type, "touch") ||
    g.g.$a.startsWith(a.type, "mouse") ||
    g.g.$a.startsWith(a.type, "pointer")
  );
};
g.Touch.Ap = function (a) {
  return (
    g.g.$a.startsWith(a.type, "touch") || g.g.$a.startsWith(a.type, "pointer")
  );
};
g.Touch.AH = function (a) {
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
g.Kl = function (a) {
  this.o = a;
  this.ne = new g.Oa(a, !0, !0, "blocklyMainWorkspaceScrollbar");
  this.Be = new g.Oa(a, !1, !0, "blocklyMainWorkspaceScrollbar");
  this.bm = g.g.j.N(
    g.g.H.Bd,
    { height: g.Oa.Bc, width: g.Oa.Bc, class: "blocklyScrollbarBackground" },
    null
  );
  g.g.j.Ik(this.bm, a.dh);
  this.Ib = null;
};
g.Kl.prototype.L = function () {
  g.g.j.removeNode(this.bm);
  this.Ib = this.o = this.bm = null;
  this.ne.L();
  this.ne = null;
  this.Be.L();
  this.Be = null;
};
g.Kl.prototype.resize = function () {
  var a = this.o.pd();
  if (a) {
    var c = !1,
      d = !1;
    this.Ib &&
    this.Ib.Kb == a.Kb &&
    this.Ib.Vb == a.Vb &&
    this.Ib.Hc == a.Hc &&
    this.Ib.wc == a.wc
      ? ((this.Ib &&
          this.Ib.Ve == a.Ve &&
          this.Ib.Eb == a.Eb &&
          this.Ib.Jc == a.Jc) ||
          (c = !0),
        (this.Ib &&
          this.Ib.nd == a.nd &&
          this.Ib.Jb == a.Jb &&
          this.Ib.xc == a.xc) ||
          (d = !0))
      : (d = c = !0);
    if (c || d) {
      try {
        g.h.disable(), c && this.ne.resize(a), d && this.Be.resize(a);
      } finally {
        g.h.enable();
      }
      sa(this.o);
    }
    (this.Ib && this.Ib.Kb == a.Kb && this.Ib.wc == a.wc) ||
      this.bm.setAttribute("x", this.Be.position.x);
    (this.Ib && this.Ib.Vb == a.Vb && this.Ib.Hc == a.Hc) ||
      this.bm.setAttribute("y", this.ne.position.y);
    this.Ib = a;
  }
};
g.Kl.prototype.set = function (a, c) {
  var d = {};
  a *= this.ne.ratio;
  c *= this.Be.ratio;
  var e = this.Be.xe,
    f = a / this.ne.xe;
  d.x = isNaN(f) ? 0 : f;
  e = c / e;
  d.y = isNaN(e) ? 0 : e;
  this.o.ln(d);
  C(this.ne, a);
  C(this.Be, c);
};
g.Oa = function (a, c, d, e) {
  this.o = a;
  this.Xk = d || !1;
  this.Pi = c;
  this.ratio = this.Ib = null;
  this.cm(e);
  this.position = new g.g.K(0, 0);
  a = g.Oa.Bc;
  c
    ? (this.Cc.setAttribute("height", a),
      this.Vf.setAttribute("height", a),
      this.vd.setAttribute("height", a - 5),
      this.vd.setAttribute("y", 2.5),
      (this.Gm = "width"),
      (this.$z = "x"))
    : (this.Cc.setAttribute("width", a),
      this.Vf.setAttribute("width", a),
      this.vd.setAttribute("width", a - 5),
      this.vd.setAttribute("x", 2.5),
      (this.Gm = "height"),
      (this.$z = "y"));
  this.Vz = g.Aa(this.Cc, "mousedown", this, this.lG);
  this.Wz = g.Aa(this.vd, "mousedown", this, this.mG);
};
b = g.Oa.prototype;
b.ku = new g.g.K(0, 0);
b.yA = 0;
b.xe = 0;
b.Ih = 0;
b.wm = 0;
b.Ug = !0;
b.Di = !0;
g.Oa.Bc = 15;
g.Touch.Yw && (g.Oa.Bc = 25);
g.Oa.QF = function (a, c) {
  return a &&
    c &&
    a.Kb == c.Kb &&
    a.Vb == c.Vb &&
    a.Eb == c.Eb &&
    a.Jb == c.Jb &&
    a.Hc == c.Hc &&
    a.wc == c.wc &&
    a.Ve == c.Ve &&
    a.nd == c.nd &&
    a.Jc == c.Jc &&
    a.xc == c.xc
    ? !0
    : !1;
};
g.Oa.prototype.L = function () {
  ta();
  g.ab(this.Vz);
  this.Vz = null;
  g.ab(this.Wz);
  this.Wz = null;
  g.g.j.removeNode(this.Vf);
  this.Cc = this.S = this.Vf = null;
  this.vd && (this.o.Ec.unsubscribe(this.vd), (this.vd = null));
  this.o = null;
};
function C(a, c) {
  a.wm = c;
  a.vd.setAttribute(a.$z, a.wm);
}
function ua(a, c) {
  a.xe = c;
  a.Vf.setAttribute(a.Gm, a.xe);
  a.Cc.setAttribute(a.Gm, a.xe);
}
g.Kl.prototype.qj = function (a) {
  this.ne.qj(a);
  this.Be.qj(a);
};
b = g.Oa.prototype;
b.setPosition = function (a, c) {
  this.position.x = a;
  this.position.y = c;
  g.g.j.jn(
    this.Vf,
    "translate(" +
      (this.position.x + this.ku.x) +
      "px," +
      (this.position.y + this.ku.y) +
      "px)"
  );
};
b.resize = function (a) {
  if (!a && ((a = this.o.pd()), !a)) return;
  g.Oa.QF(a, this.Ib) ||
    ((this.Ib = a), this.Pi ? va(this, a) : wa(this, a), xa(this));
};
function va(a, c) {
  var d = c.Kb - 1;
  a.Xk && (d -= g.Oa.Bc);
  ua(a, Math.max(0, d));
  d = c.wc + 0.5;
  a.Xk && a.o.M && (d += g.Oa.Bc);
  a.setPosition(d, c.Hc + c.Vb - g.Oa.Bc - 0.5);
  ya(a, c);
}
function ya(a, c) {
  a.Xk || a.Lb(a.xe < c.Ve);
  a.ratio = a.xe / c.Ve;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Ih = Math.max(0, c.Kb * a.ratio);
  a.vd.setAttribute(a.Gm, a.Ih);
  C(a, za(a, (c.Eb - c.Jc) * a.ratio));
}
function wa(a, c) {
  var d = c.Vb - 1;
  a.Xk && (d -= g.Oa.Bc);
  ua(a, Math.max(0, d));
  d = c.wc + 0.5;
  a.o.M || (d += c.Kb - g.Oa.Bc - 1);
  a.setPosition(d, c.Hc + 0.5);
  Aa(a, c);
}
function Aa(a, c) {
  a.Xk || a.Lb(a.xe < c.nd);
  a.ratio = a.xe / c.nd;
  if (-Infinity == a.ratio || Infinity == a.ratio || isNaN(a.ratio))
    a.ratio = 0;
  a.Ih = Math.max(0, c.Vb * a.ratio);
  a.vd.setAttribute(a.Gm, a.Ih);
  C(a, za(a, (c.Jb - c.xc) * a.ratio));
}
b.cm = function (a) {
  var c = "blocklyScrollbar" + (this.Pi ? "Horizontal" : "Vertical");
  a && (c += " " + a);
  this.Vf = g.g.j.N(g.g.H.wh, { class: c }, null);
  this.S = g.g.j.N(g.g.H.Gc, {}, this.Vf);
  this.Cc = g.g.j.N(g.g.H.Bd, { class: "blocklyScrollbarBackground" }, this.S);
  a = Math.floor((g.Oa.Bc - 5) / 2);
  this.vd = g.g.j.N(
    g.g.H.Bd,
    { class: "blocklyScrollbarHandle", rx: a, ry: a },
    this.S
  );
  this.o.Ec.subscribe(this.vd, "scrollbarColour", "fill");
  this.o.Ec.subscribe(this.vd, "scrollbarOpacity", "fill-opacity");
  g.g.j.Ik(this.Vf, w(this.o));
};
b.isVisible = function () {
  return this.Ug;
};
b.qj = function (a) {
  var c = a != this.Di;
  this.Di = a;
  c && this.En();
};
b.Lb = function (a) {
  var c = a != this.isVisible();
  if (this.Xk) throw Error("Unable to toggle visibility of paired scrollbars.");
  this.Ug = a;
  c && this.En();
};
b.En = function () {
  this.Di && this.isVisible()
    ? this.Vf.setAttribute("display", "block")
    : this.Vf.setAttribute("display", "none");
};
b.lG = function (a) {
  da(this.o);
  g.Touch.Ro();
  ta();
  if (g.g.Sk(a)) a.stopPropagation();
  else {
    var c = g.g.Qm(a, w(this.o), Ba(this.o));
    c = this.Pi ? c.x : c.y;
    var d = g.g.um(this.vd);
    d = this.Pi ? d.x : d.y;
    var e = this.wm,
      f = 0.95 * this.Ih;
    c <= d ? (e -= f) : c >= d + this.Ih && (e += f);
    C(this, za(this, e));
    xa(this);
    a.stopPropagation();
    a.preventDefault();
  }
};
b.mG = function (a) {
  da(this.o);
  ta();
  g.g.Sk(a)
    ? a.stopPropagation()
    : ((this.CH = this.wm),
      Ca(this.o),
      (this.yA = this.Pi ? a.clientX : a.clientY),
      (g.Oa.Wh = g.Aa(document, "mouseup", this, this.qG)),
      (g.Oa.Vh = g.Aa(document, "mousemove", this, this.nG)),
      a.stopPropagation(),
      a.preventDefault());
};
b.nG = function (a) {
  C(this, za(this, this.CH + ((this.Pi ? a.clientX : a.clientY) - this.yA)));
  xa(this);
};
b.qG = function () {
  Da(this.o);
  g.Touch.Ro();
  ta();
};
function ta() {
  g.mc(!0);
  g.Oa.Wh && (g.ab(g.Oa.Wh), (g.Oa.Wh = null));
  g.Oa.Vh && (g.ab(g.Oa.Vh), (g.Oa.Vh = null));
}
function za(a, c) {
  return (c = 0 >= c || isNaN(c) || a.xe < a.Ih ? 0 : Math.min(c, a.xe - a.Ih));
}
function xa(a) {
  var c = a.wm / a.xe;
  isNaN(c) && (c = 0);
  var d = {};
  a.Pi ? (d.x = c) : (d.y = c);
  a.o.ln(d);
}
b.set = function (a) {
  C(this, za(this, a * this.ratio));
  xa(this);
};
g.I = {};
g.I.visible = !1;
g.I.hk = !1;
g.I.AC = 50;
g.I.Fz = 0;
g.I.rn = 0;
g.I.Et = 0;
g.I.Ft = 0;
g.I.mb = null;
g.I.Wm = null;
g.I.ww = 0;
g.I.xw = 10;
g.I.eD = 10;
g.I.kC = 750;
g.I.$q = 5;
g.I.Ya = null;
g.I.eF = function () {
  var a = g.I.Wy(g.I.mb);
  if (a) {
    for (a = a.Ae; "function" == typeof a; ) a = a();
    if ("string" != typeof a)
      throw Error("Tooltip function must return a string.");
    return a;
  }
  return "";
};
g.I.Wy = function (a) {
  for (; a && a.Ae; ) {
    if ("string" == typeof a.Ae || "function" == typeof a.Ae) return a;
    a = a.Ae;
  }
  return null;
};
g.I.Va = function () {
  g.I.Ya ||
    ((g.I.Ya = document.createElement("div")),
    (g.I.Ya.className = "blocklyTooltipDiv"),
    (g.Vp || document.body).appendChild(g.I.Ya));
};
g.I.gk = function (a) {
  a.UF = g.Tc(a, "mouseover", null, g.I.pG);
  a.SF = g.Tc(a, "mouseout", null, g.I.oG);
  a.addEventListener("mousemove", g.I.Rm, !1);
};
g.I.dv = function (a) {
  a && (g.ab(a.UF), g.ab(a.SF), a.removeEventListener("mousemove", g.I.Rm));
};
g.I.pG = function (a) {
  g.I.hk ||
    ((a = g.I.Wy(a.currentTarget)),
    g.I.mb != a && (g.I.Fa(), (g.I.Wm = null), (g.I.mb = a)),
    clearTimeout(g.I.Fz));
};
g.I.oG = function () {
  g.I.hk ||
    ((g.I.Fz = setTimeout(function () {
      g.I.mb = null;
      g.I.Wm = null;
      g.I.Fa();
    }, 1)),
    clearTimeout(g.I.rn));
};
g.I.Rm = function (a) {
  if (g.I.mb && g.I.mb.Ae && !g.I.hk)
    if (g.I.visible) {
      var c = g.I.Et - a.pageX;
      a = g.I.Ft - a.pageY;
      Math.sqrt(c * c + a * a) > g.I.eD && g.I.Fa();
    } else
      g.I.Wm != g.I.mb &&
        (clearTimeout(g.I.rn),
        (g.I.Et = a.pageX),
        (g.I.Ft = a.pageY),
        (g.I.rn = setTimeout(g.I.xH, g.I.kC)));
};
g.I.L = function () {
  g.I.mb = null;
  g.I.Wm = null;
  g.I.Fa();
};
g.I.Fa = function () {
  g.I.visible &&
    ((g.I.visible = !1), g.I.Ya && (g.I.Ya.style.display = "none"));
  g.I.rn && clearTimeout(g.I.rn);
};
g.I.block = function () {
  g.I.Fa();
  g.I.hk = !0;
};
g.I.RH = function () {
  g.I.hk = !1;
};
g.I.xH = function () {
  if (!g.I.hk && ((g.I.Wm = g.I.mb), g.I.Ya)) {
    g.I.Ya.textContent = "";
    var a = g.I.eF();
    a = g.g.$a.UA(a, g.I.AC);
    a = a.split("\n");
    for (var c = 0; c < a.length; c++) {
      var d = document.createElement("div");
      d.appendChild(document.createTextNode(a[c]));
      g.I.Ya.appendChild(d);
    }
    a = g.I.mb.M;
    c = document.documentElement.clientWidth;
    d = document.documentElement.clientHeight;
    g.I.Ya.style.direction = a ? "rtl" : "ltr";
    g.I.Ya.style.display = "block";
    g.I.visible = !0;
    var e = g.I.Et;
    e = a ? e - (g.I.ww + g.I.Ya.offsetWidth) : e + g.I.ww;
    var f = g.I.Ft + g.I.xw;
    f + g.I.Ya.offsetHeight > d + window.scrollY &&
      (f -= g.I.Ya.offsetHeight + 2 * g.I.xw);
    a
      ? (e = Math.max(g.I.$q - window.scrollX, e))
      : e + g.I.Ya.offsetWidth > c + window.scrollX - 2 * g.I.$q &&
        (e = c - g.I.Ya.offsetWidth - 2 * g.I.$q);
    g.I.Ya.style.top = f + "px";
    g.I.Ya.style.left = e + "px";
  }
};
g.tx = function (a) {
  this.am = a;
  this.Va();
};
b = g.tx.prototype;
b.yb = null;
b.am = null;
b.Va = function () {
  this.yb ||
    ((this.yb = g.g.j.N(
      g.g.H.wh,
      {
        xmlns: g.g.j.Jl,
        "xmlns:html": g.g.j.mo,
        "xmlns:xlink": g.g.j.Oe,
        version: "1.1",
        class: "blocklyWsDragSurface blocklyOverflowVisible",
      },
      null
    )),
    this.am.appendChild(this.yb));
};
b.vj = function (a, c) {
  a = a.toFixed(0);
  c = c.toFixed(0);
  this.yb.style.display = "block";
  g.g.j.jn(this.yb, "translate3d(" + a + "px, " + c + "px, 0px)");
};
b.gt = function () {
  return g.g.le(this.yb);
};
b.Qo = function (a) {
  if (!a)
    throw Error(
      "Couldn't clear and hide the drag surface: missing new surface."
    );
  var c = this.yb.childNodes[0],
    d = this.yb.childNodes[1];
  if (
    !(
      c &&
      d &&
      g.g.j.nt(c, "blocklyBlockCanvas") &&
      g.g.j.nt(d, "blocklyBubbleCanvas")
    )
  )
    throw Error(
      "Couldn't clear and hide the drag surface. A node was missing."
    );
  null != this.vu ? g.g.j.Ik(c, this.vu) : a.insertBefore(c, a.firstChild);
  g.g.j.Ik(d, c);
  this.yb.style.display = "none";
  if (this.yb.childNodes.length) throw Error("Drag surface was not cleared.");
  g.g.j.jn(this.yb, "");
  this.vu = null;
};
g.F = function (a, c, d) {
  if (!c) throw Error("Cannot create a node without a location.");
  this.Dn = a;
  this.Lk = g.F.BF(a);
  this.xa = c;
  this.wq = null;
  (a = d || null) && a.XA && (this.wq = a.XA);
};
g.F.types = {
  Zb: "field",
  Nb: "block",
  Ud: "input",
  xi: "output",
  jd: "next",
  ld: "previous",
  rf: "stack",
  kc: "workspace",
};
g.F.uh = !1;
g.F.BB = -20;
g.F.BF = function (a) {
  switch (a) {
    case g.F.types.ld:
    case g.F.types.jd:
    case g.F.types.Ud:
    case g.F.types.xi:
      return !0;
  }
  return !1;
};
g.F.nk = function (a) {
  return a ? new g.F(g.F.types.Zb, a) : null;
};
g.F.Cf = function (a) {
  return a
    ? a.type == g.rb || (a.type == g.Ua && a.Mf())
      ? g.F.Ei(a.Mf())
      : a.type == g.Ua
      ? new g.F(g.F.types.jd, a)
      : a.type == g.Ie
      ? new g.F(g.F.types.xi, a)
      : a.type == g.Je
      ? new g.F(g.F.types.ld, a)
      : null
    : null;
};
g.F.Ei = function (a) {
  return a && a.connection ? new g.F(g.F.types.Ud, a.connection) : null;
};
g.F.Bf = function (a) {
  return a ? new g.F(g.F.types.Nb, a) : null;
};
g.F.dm = function (a) {
  return a ? new g.F(g.F.types.rf, a) : null;
};
g.F.pk = function (a, c) {
  return c && a ? new g.F(g.F.types.kc, a, { XA: c }) : null;
};
g.F.ps = function (a) {
  var c = a.Z || a.O;
  return c ? g.F.Cf(c) : g.F.Bf(a);
};
b = g.F.prototype;
b.Za = function () {
  return this.Dn;
};
function Ea(a, c) {
  a = a.xa;
  a instanceof g.fd || (a = a.W());
  if (!a || !a.B) return null;
  var d = a.$c();
  a = d.B.tb(!0);
  for (var e = 0, f; (f = a[e]); e++)
    if (d.id == f.id)
      return (
        (c = e + (c ? 1 : -1)), -1 == c || c == a.length ? null : g.F.dm(a[c])
      );
  throw Error("Couldn't find " + (c ? "next" : "previous") + " stack?!");
}
function Fa(a) {
  if (!a) return null;
  do var c = a.Z && a.Z.ra();
  while (c && u(c) == a && (a = c));
  return (c = a.Z || a.O) && c.ka && c.ka.Mf() ? g.F.Ei(c.ka.Mf()) : g.F.dm(a);
}
b.W = function () {
  return this.Za() === g.F.types.Nb
    ? this.xa
    : this.Za() === g.F.types.rf
    ? this.xa
    : this.Za() === g.F.types.kc
    ? null
    : this.xa.W();
};
b.next = function () {
  switch (this.Dn) {
    case g.F.types.rf:
      return Ea(this, !0);
    case g.F.types.xi:
      var a = this.xa;
      return g.F.Bf(a.W());
    case g.F.types.Zb:
      a: {
        var c = this.xa,
          d = c.Mf();
        a = c.W();
        c = d.gb.indexOf(c) + 1;
        d = a.T.indexOf(d);
        for (var e; (e = a.T[d]); d++) {
          for (var f = e.gb; c < f.length; ) {
            if (D(f[c]) || g.F.uh) {
              a = g.F.nk(f[c]);
              break a;
            }
            c++;
          }
          c = 0;
          if (e.connection) {
            a = g.F.Ei(e);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.Ud:
      a: {
        c = this.xa.Mf();
        a = c.W();
        for (c = a.T.indexOf(c) + 1; (d = a.T[c]); c++) {
          e = d.gb;
          f = 0;
          for (var h; (h = e[f]); f++)
            if (D(h) || g.F.uh) {
              a = g.F.nk(h);
              break a;
            }
          if (d.connection) {
            a = g.F.Ei(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.Nb:
      return g.F.Cf(this.xa.Y);
    case g.F.types.ld:
      return (a = this.xa), g.F.Bf(a.W());
    case g.F.types.jd:
      return (a = this.xa), g.F.Cf(a.ka);
  }
  return null;
};
b.Qf = function () {
  switch (this.Dn) {
    case g.F.types.kc:
      var a = this.xa.tb(!0);
      if (0 < a.length) return g.F.dm(a[0]);
      break;
    case g.F.types.rf:
      a = this.xa;
      var c = a.Z || a.O;
      return c ? g.F.Cf(c) : g.F.Bf(a);
    case g.F.types.Nb:
      a = this.xa;
      a: {
        a = a.T;
        c = 0;
        for (var d; (d = a[c]); c++) {
          for (var e = d.gb, f = 0, h; (h = e[f]); f++)
            if (D(h) || g.F.uh) {
              a = g.F.nk(h);
              break a;
            }
          if (d.connection) {
            a = g.F.Ei(d);
            break a;
          }
        }
        a = null;
      }
      return a;
    case g.F.types.Ud:
      return g.F.Cf(this.xa.ka);
  }
  return null;
};
b.we = function () {
  switch (this.Dn) {
    case g.F.types.rf:
      return Ea(this, !1);
    case g.F.types.Zb:
      a: {
        var a = this.xa;
        var c = a.Mf();
        var d = a.W();
        a = c.gb.indexOf(a) - 1;
        for (var e = d.T.indexOf(c), f; (f = d.T[e]); e--) {
          if (f.connection && f !== c) {
            c = g.F.Ei(f);
            break a;
          }
          for (f = f.gb; -1 < a; ) {
            if (D(f[a]) || g.F.uh) {
              c = g.F.nk(f[a]);
              break a;
            }
            a--;
          }
          0 <= e - 1 && (a = d.T[e - 1].gb.length - 1);
        }
        c = null;
      }
      return c;
    case g.F.types.Ud:
      a: {
        c = this.xa.Mf();
        d = c.W();
        for (a = d.T.indexOf(c); (e = d.T[a]); a--) {
          if (e.connection && e !== c) {
            c = g.F.Ei(e);
            break a;
          }
          e = e.gb;
          f = e.length - 1;
          for (var h; (h = e[f]); f--)
            if (D(h) || g.F.uh) {
              c = g.F.nk(h);
              break a;
            }
        }
        c = null;
      }
      return c;
    case g.F.types.Nb:
      return (c = this.xa), g.F.Cf(c.Z || c.O);
    case g.F.types.ld:
      c = this.xa;
      if ((c = c.ka) && !c.Mf()) return g.F.Cf(c);
      break;
    case g.F.types.jd:
      return (c = this.xa), g.F.Bf(c.W());
  }
  return null;
};
b.Uf = function () {
  switch (this.Dn) {
    case g.F.types.rf:
      var a = this.xa,
        c = a.Ta();
      return g.F.pk(a.B, new g.g.K(c.x, c.y + g.F.BB));
    case g.F.types.xi:
      return (a = this.xa), (c = a.ka) ? g.F.Cf(c) : g.F.dm(a.W());
    case g.F.types.Zb:
      return g.F.Bf(this.xa.W());
    case g.F.types.Ud:
      return (a = this.xa), g.F.Bf(a.W());
    case g.F.types.Nb:
      return (a = this.xa), Fa(a);
    case g.F.types.ld:
      return (a = this.xa), Fa(a.W());
    case g.F.types.jd:
      return (a = this.xa), Fa(a.W());
  }
  return null;
};
g.Ob = Object.create(null);
g.g.us = {};
g.g.us.warn = function (a, c, d, e) {
  a = a + " was deprecated on " + c + " and will be deleted on " + d + ".";
  e && (a += "\nUse " + e + " instead.");
  console.warn(a);
};
g.ta = function (a, c) {
  this.J = a;
  this.type = c;
};
g.ta.Vn = 0;
g.ta.Iw = 1;
g.ta.Lw = 2;
g.ta.Kw = 3;
g.ta.Fw = 4;
g.ta.Gw = 5;
g.ta.Jw = 6;
g.ta.Hw = 7;
b = g.ta.prototype;
b.ka = null;
b.Xe = !1;
b.Bh = null;
b.iq = null;
b.x = 0;
b.y = 0;
b.Ue = function (a) {
  var c = this,
    d = c.W(),
    e = a.W();
  a.isConnected() && a.disconnect();
  if (c.isConnected()) {
    var f = c.ra(),
      h = c.Ck();
    c.iq = null;
    if (f.Ga) (h = g.R.Cg(f)), f.L(!1), (f = null);
    else if (c.type == g.rb) {
      if (!f.O) throw Error("Orphan block does not have an output connection.");
      var k = g.ta.uz(e, f);
      k && (f.O.connect(k), (f = null));
    } else if (c.type == g.Ua) {
      if (!f.Z)
        throw Error("Orphan block does not have a previous connection.");
      for (k = e; k.Y; ) {
        var l = u(k);
        if (l && !l.Ga) k = l;
        else {
          E(f.B.Zl, f.Z, k.Y, !1) && (k.Y.connect(f.Z), (f = null));
          break;
        }
      }
    }
    if (f && (c.disconnect(), g.h.Qa)) {
      var m = g.h.ac();
      setTimeout(function () {
        f.B &&
          !f.getParent() &&
          (g.h.ea(m), f.O ? f.O.Op(c) : f.Z && f.Z.Op(c), g.h.ea(!1));
      }, g.Rn);
    }
    c.iq = h;
  }
  var n;
  g.h.isEnabled() && (n = new g.h.ml(e));
  g.ta.fE(c, a);
  e.hq(d);
  n && (n.kj(), g.h.Ea(n));
};
b.L = function () {
  if (this.isConnected()) {
    this.on(null);
    var a = this.ra();
    a && x(a);
  }
  this.Xe = !0;
};
b.W = function () {
  return this.J;
};
function F(a) {
  return a.type == g.rb || a.type == g.Ua;
}
b.isConnected = function () {
  return !!this.ka;
};
b.No = function (a) {
  g.g.us.warn(
    "Connection.prototype.canConnectWithReason",
    "July 2020",
    "July 2021",
    "the workspace's connection checker"
  );
  return Ga(this).No(this, a, !1);
};
function Ga(a) {
  return a.J.B.Zl;
}
b.Op = function () {};
b.connect = function (a) {
  if (this.ka != a && E(Ga(this), this, a, !1)) {
    var c = g.h.ac();
    c || g.h.ea(!0);
    F(this) ? this.Ue(a) : a.Ue(this);
    c || g.h.ea(!1);
  }
};
g.ta.fE = function (a, c) {
  if (!a || !c) throw Error("Cannot connect null connections.");
  a.ka = c;
  c.ka = a;
};
g.ta.yH = function (a, c) {
  var d = null;
  c = c.O;
  for (var e = 0; e < a.T.length; e++) {
    var f = a.T[e].connection,
      h = Ga(c);
    if (f && f.type == g.rb && E(h, c, f, !1)) {
      if (d) return null;
      d = f;
    }
  }
  return d;
};
g.ta.uz = function (a, c) {
  for (var d; (d = g.ta.yH(a, c)); ) if (((a = d.ra()), !a || a.Ga)) return d;
  return null;
};
b = g.ta.prototype;
b.disconnect = function () {
  var a = this.ka;
  if (!a) throw Error("Source connection not connected.");
  if (a.ka != this)
    throw Error("Target connection not connected to source connection.");
  if (F(this)) {
    var c = this.J;
    var d = a.W();
    a = this;
  } else (c = a.W()), (d = this.J);
  var e = g.h.ac();
  e || g.h.ea(!0);
  this.Bs(c, d);
  d.Ga || a.fn();
  e || g.h.ea(!1);
};
b.Bs = function (a, c) {
  var d;
  g.h.isEnabled() && (d = new g.h.ml(c));
  this.ka = this.ka.ka = null;
  c.hq(null);
  d && (d.kj(), g.h.Ea(d));
};
b.fn = function () {
  var a = this.W(),
    c = this.Ck();
  if (a.B && c)
    if (((a = g.R.wk(c, a.B)), a.O)) this.connect(a.O);
    else if (a.Z) this.connect(a.Z);
    else throw Error("Child block does not have output or previous statement.");
};
b.ra = function () {
  return this.isConnected() ? this.ka.W() : null;
};
b.Tz = function () {
  !this.isConnected() ||
    (this.ka && E(Ga(this), this, this.ka, !1)) ||
    x(F(this) ? this.ra() : this.J);
};
b.cd = function (a) {
  a
    ? (Array.isArray(a) || (a = [a]), (this.Bh = a), this.Tz())
    : (this.Bh = null);
  return this;
};
b.on = function (a) {
  this.iq = a;
  a = this.ra();
  a ? a.Ga && (a.L(!1), this.fn()) : this.fn();
};
b.Ck = function () {
  return this.iq;
};
b.Hz = function () {
  return [];
};
b.Mf = function () {
  for (var a = null, c = this.J, d = c.T, e = 0; e < c.T.length; e++)
    if (d[e].connection === this) {
      a = d[e];
      break;
    }
  return a;
};
b.toString = function () {
  var a = this.J;
  if (a)
    if (a.O == this) var c = "Output Connection of ";
    else if (a.Z == this) c = "Previous Connection of ";
    else if (a.Y == this) c = "Next Connection of ";
    else {
      c = null;
      for (var d = 0, e; (e = a.T[d]); d++)
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
g.na = {};
g.na.ll = {};
g.na.register = function (a, c) {
  if ("string" != typeof a || "" == a.trim())
    throw Error('Error: Invalid extension name "' + a + '"');
  if (g.na.ll[a])
    throw Error('Error: Extension "' + a + '" is already registered.');
  if ("function" != typeof c)
    throw Error('Error: Extension "' + a + '" must be a function');
  g.na.ll[a] = c;
};
g.na.XG = function () {
  var a = g.xb.zd.GC;
  if (!a || "object" != typeof a)
    throw Error('Error: Mixin "logic_ternary" must be a object');
  g.na.register("logic_ternary", function () {
    this.bf(a);
  });
};
g.na.Au = function (a, c, d, e) {
  var f = 'Error when registering mutator "' + a + '": ';
  g.na.Ix(f, c.ke, "domToMutation");
  g.na.Ix(f, c.zc, "mutationToDom");
  var h = g.na.Kx(c, f);
  if (d && "function" != typeof d)
    throw Error('Extension "' + a + '" is not a function');
  g.na.register(a, function () {
    if (h) {
      if (!g.He) throw Error(f + "Missing require for Blockly.Mutator");
      this.sA(new g.He(e || []));
    }
    this.bf(c);
    d && d.apply(this);
  });
};
g.na.unregister = function (a) {
  g.na.ll[a]
    ? delete g.na.ll[a]
    : console.warn(
        'No extension mapping for name "' + a + '" found to unregister'
      );
};
g.na.apply = function (a, c, d) {
  var e = g.na.ll[a];
  if ("function" != typeof e)
    throw Error('Error: Extension "' + a + '" not found.');
  if (d) g.na.WD(a, c);
  else var f = g.na.dt(c);
  e.apply(c);
  if (d) g.na.UD('Error after applying mutator "' + a + '": ', c);
  else if (!g.na.aG(f, c))
    throw Error(
      'Error when applying extension "' +
        a +
        '": mutation properties changed when applying a non-mutator extension.'
    );
};
g.na.Ix = function (a, c, d) {
  if (!c) throw Error(a + 'missing required property "' + d + '"');
  if ("function" != typeof c)
    throw Error(a + '" required property "' + d + '" must be a function');
};
g.na.WD = function (a, c) {
  if (g.na.dt(c).length)
    throw Error(
      'Error: tried to apply mutation "' +
        a +
        '" to a block that already has mutator functions.  Block id: ' +
        c.id
    );
};
g.na.Kx = function (a, c) {
  var d = void 0 !== a.Xl,
    e = void 0 !== a.gm;
  if (d && e) {
    if ("function" != typeof a.Xl)
      throw Error(c + "compose must be a function.");
    if ("function" != typeof a.gm)
      throw Error(c + "decompose must be a function.");
    return !0;
  }
  if (d || e)
    throw Error(c + 'Must have both or neither of "compose" and "decompose"');
  return !1;
};
g.na.UD = function (a, c) {
  if ("function" != typeof c.ke)
    throw Error(a + 'Applying a mutator didn\'t add "domToMutation"');
  if ("function" != typeof c.zc)
    throw Error(a + 'Applying a mutator didn\'t add "mutationToDom"');
  g.na.Kx(c, a);
};
g.na.dt = function (a) {
  var c = [];
  void 0 !== a.ke && c.push(a.ke);
  void 0 !== a.zc && c.push(a.zc);
  void 0 !== a.Xl && c.push(a.Xl);
  void 0 !== a.gm && c.push(a.gm);
  return c;
};
g.na.aG = function (a, c) {
  c = g.na.dt(c);
  if (c.length != a.length) return !1;
  for (var d = 0; d < c.length; d++) if (a[d] != c[d]) return !1;
  return !0;
};
g.na.Ex = function (a) {
  var c = [];
  "object" == typeof document &&
    g.g.nA(function () {
      for (var d in a) g.g.Jx(a[d]);
    });
  return function () {
    this.type &&
      -1 == c.indexOf(this.type) &&
      (g.na.VD(this, a), c.push(this.type));
    this.ye(
      function () {
        var d = String(G(this, "OP")),
          e = a[d];
        null == e
          ? -1 == c.indexOf(this.type) &&
            ((d = "No tooltip mapping for value " + d + " of field OP"),
            null != this.type && (d += " of block type " + this.type),
            console.warn(d + "."))
          : (e = g.g.df(e));
        return e;
      }.bind(this)
    );
  };
};
g.na.VD = function (a, c) {
  var d = ia(a, "OP");
  if ("function" != typeof d.dj) {
    d = d.getOptions();
    for (var e = 0; e < d.length; ++e) {
      var f = d[e][1];
      null == c[f] &&
        console.warn(
          "No tooltip mapping for value " +
            f +
            " of field OP of block type " +
            a.type
        );
    }
  }
};
g.na.QD = function () {
  "object" == typeof document &&
    g.g.nA(function () {
      g.g.Jx("%{BKY_MATH_CHANGE_TOOLTIP}");
    });
  return function () {
    this.ye(
      function () {
        var a = ia(this, "VAR");
        return g.g
          .df("%{BKY_MATH_CHANGE_TOOLTIP}")
          .replace("%1", a ? a.Hh() : "");
      }.bind(this)
    );
  };
};
g.na.HE = function () {
  this.MH = this.Ae;
  this.ye(
    function () {
      var a = this.getParent();
      return (a && Ha(a) && a.Ae) || this.MH;
    }.bind(this)
  );
};
g.na.register("parent_tooltip_when_inline", g.na.HE);
g.Hf = {};
g.Hf.register = function (a, c) {
  g.D.register(g.D.ba.Zb, a, c);
};
g.Hf.unregister = function (a) {
  g.D.unregister(g.D.ba.Zb, a);
};
g.Hf.aa = function (a) {
  var c = g.D.et(g.D.ba.Zb, a.type);
  return c
    ? c.aa(a)
    : (console.warn(
        "Blockly could not create a field of type " +
          a.type +
          ". The field is probably not being registered. This could be because the file is not loaded, the field does not register itself (Issue #1584), or the registration is not being reached."
      ),
      null);
};
g.lb = {};
g.lb.Cs = 0;
g.lb.ep = null;
g.lb.yE = function (a) {
  var c = a.B,
    d = a.pa();
  c.ee.play("delete");
  a = Ia(c, d);
  d = d.cloneNode(!0);
  d.OH = a.x;
  d.PH = a.y;
  d.setAttribute("transform", "translate(" + a.x + "," + a.y + ")");
  w(c).appendChild(d);
  d.Bx = d.getBBox();
  g.lb.py(d, c.M, new Date(), c.scale);
};
g.lb.py = function (a, c, d, e) {
  var f = (new Date() - d) / 150;
  1 < f
    ? g.g.j.removeNode(a)
    : (a.setAttribute(
        "transform",
        "translate(" +
          (a.OH + (((c ? -1 : 1) * a.Bx.width * e) / 2) * f) +
          "," +
          (a.PH + a.Bx.height * e * f) +
          ") scale(" +
          (1 - f) * e +
          ")"
      ),
      setTimeout(g.lb.py, 10, a, c, d, e));
};
g.lb.gE = function (a) {
  var c = a.B,
    d = c.scale;
  c.ee.play("click");
  if (!(1 > d)) {
    var e = Ia(c, a.pa());
    a.O
      ? ((e.x += (a.M ? 3 : -3) * d), (e.y += 13 * d))
      : a.Z && ((e.x += (a.M ? -23 : 23) * d), (e.y += 3 * d));
    a = g.g.j.N(
      g.g.H.Gq,
      {
        cx: e.x,
        cy: e.y,
        r: 0,
        fill: "none",
        stroke: "#888",
        "stroke-width": 10,
      },
      w(c)
    );
    g.lb.Rx(a, new Date(), d);
  }
};
g.lb.Rx = function (a, c, d) {
  var e = (new Date() - c) / 150;
  1 < e
    ? g.g.j.removeNode(a)
    : (a.setAttribute("r", 25 * e * d),
      (a.style.opacity = 1 - e),
      (g.lb.Cs = setTimeout(g.lb.Rx, 10, a, c, d)));
};
g.lb.xE = function (a) {
  a.B.ee.play("disconnect");
  if (!(1 > a.B.scale)) {
    var c = H(a).height;
    c = (Math.atan(10 / c) / Math.PI) * 180;
    a.M || (c *= -1);
    g.lb.oy(a.pa(), c, new Date());
  }
};
g.lb.oy = function (a, c, d) {
  var e = (new Date() - d) / 200;
  1 < e
    ? (a.sn = "")
    : ((a.sn =
        "skewX(" + Math.round(Math.sin(e * Math.PI * 3) * (1 - e) * c) + ")"),
      (g.lb.ep = a),
      (g.lb.Cs = setTimeout(g.lb.oy, 10, a, c, d)));
  a.setAttribute("transform", a.Cn + a.sn);
};
g.lb.Ds = function () {
  if (g.lb.ep) {
    clearTimeout(g.lb.Cs);
    var a = g.lb.ep;
    a.sn = "";
    a.setAttribute("transform", a.Cn);
    g.lb.ep = null;
  }
};
g.h.jf = function (a, c, d) {
  g.h.jf.A.constructor.call(this, a ? a.B.id : void 0);
  this.fb = a ? a.id : null;
  this.qz = c;
  this.Cx = d;
};
g.g.object.V(g.h.jf, g.h.$d);
g.h.jf.prototype.type = g.h.wv;
g.h.jf.prototype.sa = function () {
  var a = g.h.jf.A.sa.call(this);
  a.isStart = this.qz;
  a.blockId = this.fb;
  a.blocks = this.Cx;
  return a;
};
g.h.jf.prototype.aa = function (a) {
  g.h.jf.A.aa.call(this, a);
  this.qz = a.isStart;
  this.fb = a.blockId;
  this.Cx = a.blocks;
};
g.D.register(g.D.ba.Pb, g.h.wv, g.h.jf);
g.Ge = function (a) {
  this.fh = g.selected = a;
  this.o = a.B;
  this.Ph = this.Ct = null;
  this.om = Ja(this, this.fh);
  this.Nc = this.Rb = null;
  this.gg = !1;
  this.mm = this.rt = this.$i = null;
  this.Lo = Ka(this);
};
g.Ge.Rj = { Vq: 0, rC: 1, Nw: 2 };
g.Ge.prototype.L = function () {
  this.Lo.length = 0;
  g.h.disable();
  try {
    this.om && this.om.L(), this.Ph && this.Ph.L();
  } finally {
    g.h.enable();
  }
};
g.Ge.prototype.update = function (a, c) {
  var d = this.Rb && this.Nc ? g.pB : g.Cd;
  for (var e = null, f = null, h = 0; h < this.Lo.length; h++) {
    var k = this.Lo[h],
      l = k.closest(d, a);
    l.connection && ((e = l.connection), (f = k), (d = l.Zp));
  }
  e = ((d = { closest: e, local: f, Zp: d }), !!d.closest) && c != g.Lv;
  if (
    (this.gg = !!c && !this.fh.getParent() && this.fh.sd() && !e) ||
    La(this, d, a)
  ) {
    g.h.disable();
    d.closest
      ? ((a = this.Rb != d.closest),
        (c = this.Nc != d.local),
        this.Rb && this.Nc && (a || c || this.gg) && Ma(this))
      : Ma(this);
    this.Nc = this.Rb = this.$i = null;
    if (!this.gg && ((a = d.closest), (c = d.local), a))
      if (a == this.Rb || a.W().pe())
        console.log("Trying to connect to an insertion marker");
      else {
        this.Rb = a;
        this.Nc = c;
        a = this.Rb;
        d = this.Nc;
        c = this.fh;
        d.type == g.Ie || d.type == g.Je
          ? ((e = !a.isConnected()) ||
              ((e = a.ra()),
              d.type == g.Ie
                ? ((d = e.O), (c = g.ta.uz(c, e)))
                : ((d = e.Z), (c = c.Bp())),
              (e = c ? E(Ga(d), c, d, !1) : !1)),
            (c = e ? g.Ge.Rj.Vq : g.Ge.Rj.Nw))
          : (c = g.Ge.Rj.Vq);
        switch (c) {
          case g.Ge.Rj.rC:
            this.rt = this.Rb.W();
            break;
          case g.Ge.Rj.Vq:
            e = this.Nc;
            c = this.Rb;
            d = this.Ct && e == this.Ct ? this.Ph : this.om;
            e = d.ct(e.W(), e);
            if (e == this.$i)
              throw Error(
                "Made it to showInsertionMarker_ even though the marker isn't changing"
              );
            d.Ha();
            d.qa = !0;
            d.pa().setAttribute("visibility", "visible");
            e && c && Na(d, e, c);
            c && e.connect(c);
            this.$i = e;
            break;
          case g.Ge.Rj.Nw:
            (this.mm = this.Rb.ra()), I(this.mm.Db, "blocklyReplaceable", !0);
        }
        a &&
          ((d = a.J.B.ub.$()),
          (c = Oa(d, a)),
          a.type == g.rb || a.type == g.Ie
            ? ((d = d.$j),
              (c =
                g.g.C.moveBy(0, -d) +
                g.g.C.ca("v", d) +
                c.ve +
                g.g.C.ca("v", d)))
            : ((d = d.Dl - d.wb),
              (c =
                g.g.C.moveBy(-d, 0) +
                g.g.C.ca("h", d) +
                c.Xh +
                g.g.C.ca("h", d))),
          (d = a.J.Ta()),
          (g.ta.hz = g.g.j.N(
            g.g.H.Xd,
            {
              class: "blocklyHighlightedConnectionPath",
              d: c,
              transform:
                "translate(" +
                (a.x - d.x) +
                "," +
                (a.y - d.y) +
                ")" +
                (a.J.M ? " scale(-1 1)" : ""),
            },
            a.J.pa()
          )));
      }
    g.h.enable();
  }
};
function Ja(a, c) {
  var d = c.type;
  g.h.disable();
  try {
    var e = a.o.Vk(d);
    e.rA(!0);
    if (c.zc) {
      var f = c.zc();
      f && e.ke(f);
    }
    for (a = 0; a < c.T.length; a++) {
      var h = c.T[a];
      if (h.name != g.fd.ol) {
        var k = e.T[a];
        for (d = 0; d < h.gb.length; d++) k.gb[d].setValue(h.gb[d].getValue());
      }
    }
    e.pj(c.isCollapsed());
    e.$g(Ha(c));
    e.Rf();
    e.pa().setAttribute("visibility", "hidden");
  } finally {
    g.h.enable();
  }
  return e;
}
function Ka(a) {
  var c = a.fh.$e(!1),
    d = a.fh.Bp();
  if (d && d != a.fh.Y) {
    c.push(d);
    a.Ct = d;
    if (a.Ph) {
      g.h.disable();
      try {
        a.Ph.L();
      } finally {
        g.h.enable();
      }
    }
    a.Ph = Ja(a, d.W());
  }
  return c;
}
function La(a, c, d) {
  var e = c.local,
    f = c.closest;
  c = c.Zp;
  if (e && f) {
    if (a.Nc && a.Rb) {
      if (a.Rb == f && a.Nc == e) return !1;
      e = a.Nc.x + d.x - a.Rb.x;
      a = a.Nc.y + d.y - a.Rb.y;
      a = Math.sqrt(e * e + a * a);
      return !(f && c > a - g.uB);
    }
    if (a.Nc || a.Rb)
      console.error(
        "Only one of localConnection_ and closestConnection_ was set."
      );
    else return !0;
  } else return !(!a.Nc || !a.Rb);
  console.error(
    "Returning true from shouldUpdatePreviews, but it's not clear why."
  );
  return !0;
}
function Ma(a) {
  a.Rb && a.Rb.ra() && (g.g.j.removeNode(g.ta.hz), delete g.ta.hz);
  if (a.mm) I(a.mm.Db, "blocklyReplaceable", !1), (a.mm = null);
  else if (a.rt) a.rt = null;
  else if (a.$i)
    if (a.$i) {
      var c = a.$i,
        d = c.W(),
        e = d.Y,
        f = d.Z,
        h = d.O;
      h = c.type == g.rb && !(h && h.ka);
      !(c != e || (f && f.ka)) || h
        ? x(c.ra(), !1)
        : c.type == g.Ua && c != e
        ? ((e = c.ka),
          x(e.W(), !1),
          (f = f ? f.ka : null),
          x(d, !0),
          f && f.connect(e))
        : x(d, !0);
      if (c.ka)
        throw Error(
          "markerConnection_ still connected at the end of disconnectInsertionMarker"
        );
      a.$i = null;
      d.pa().setAttribute("visibility", "hidden");
    } else console.log("No insertion marker connection to disconnect");
}
g.Ge.prototype.Ak = function () {
  var a = [];
  this.om && a.push(this.om);
  this.Ph && a.push(this.Ph);
  return a;
};
g.li = function (a, c) {
  this.sb = a;
  this.o = c;
  this.Ff = new g.Ge(this.sb);
  this.Fi = null;
  this.gg = !1;
  this.dg = this.sb.Ta();
  this.gp = g.li.xF(a);
};
g.li.prototype.L = function () {
  this.gp.length = 0;
  this.Ff && this.Ff.L();
};
g.li.xF = function (a) {
  var c = [];
  a = r(a, !1);
  for (var d = 0, e; (e = a[d]); d++) {
    e = Pa(e);
    for (var f = 0; f < e.length; f++)
      c.push({ location: e[f].rp, icon: e[f] });
  }
  return c;
};
function Qa(a, c, d) {
  d = a.Yk(d);
  var e = g.g.K.sum(a.dg, d);
  a.sb.Vt(e);
  for (e = 0; e < a.gp.length; e++) {
    var f = a.gp[e];
    Ra(f.icon, g.g.K.sum(f.location, d));
  }
  a.Fi = Sa(a.o, c);
  a.Ff.update(d, a.Fi);
  a.gg = a.Ff.gg;
  c = a.o.Fc;
  a.gg
    ? (a.sb.kn(!0), a.Fi == g.Mq && c && Ta(c, !0))
    : (a.sb.kn(!1), c && Ta(c, !1));
}
function Ua(a, c, d) {
  Qa(a, c, d);
  a.gp = [];
  c = new g.h.jf(a.sb, !1, r(a.sb, !1));
  g.h.Ea(c);
  g.g.j.un();
  g.lb.Ds();
  d = a.Yk(d);
  c = g.g.K.sum(a.dg, d);
  var e = a.sb;
  e.In && (e.translate(c.x, c.y), e.B.Dd.Qo(e.B.vb));
  c = a.o.Fc;
  a.gg
    ? (c && setTimeout(c.Wo.bind(c), 100), a.nm(), a.sb.L(!1, !0), (g.yk = []))
    : c && c.Wo();
  a.gg ||
    (Va(a.sb, d.x, d.y),
    a.sb.bi(!1),
    a.nm(),
    a.Ff.Rb
      ? ((d = a.Ff),
        d.Rb &&
          (g.h.disable(),
          Ma(d),
          g.h.enable(),
          d.Nc.connect(d.Rb),
          d.fh.qa && (g.lb.gE((F(d.Nc) ? d.Rb : d.Nc).W()), Wa(d.fh.$c()))))
      : a.sb.Ha(),
    Xa(a.sb));
  a.o.rc(!0);
  (d = a.o.Ba) &&
    "function" == typeof d.Du &&
    d.Du(a.sb.sd() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.h.ea(!1);
}
g.li.prototype.nm = function () {
  var a = new g.h.ml(this.sb);
  a.$t = this.dg;
  a.kj();
  g.h.Ea(a);
};
g.li.prototype.Yk = function (a) {
  a = new g.g.K(a.x / this.o.scale, a.y / this.o.scale);
  this.o.Fm && a.scale(1 / this.o.options.qc.scale);
  return a;
};
g.li.prototype.Ak = function () {
  return this.Ff && this.Ff.Ak ? this.Ff.Ak() : [];
};
g.Hv = function () {};
function E(a, c, d, e, f) {
  return a.No(c, d, e, f) == g.ta.Vn;
}
g.Hv.prototype.No = function (a, c, d, e) {
  if (a && c) {
    if (F(a)) {
      var f = a.W();
      var h = c.W();
    } else (h = a.W()), (f = c.W());
    f =
      f == h
        ? g.ta.Iw
        : c.type != g.Pj[a.type]
        ? g.ta.Lw
        : f.B !== h.B
        ? g.ta.Gw
        : f.Ga && !h.Ga
        ? g.ta.Jw
        : g.ta.Vn;
  } else f = g.ta.Kw;
  return f != g.ta.Vn
    ? f
    : Ya(a, c)
    ? d && !Za(a, c, e || 0)
      ? g.ta.Hw
      : g.ta.Vn
    : g.ta.Fw;
};
function $a(a, c, d) {
  switch (a) {
    case g.ta.Iw:
      return "Attempted to connect a block to itself.";
    case g.ta.Gw:
      return "Blocks not on same workspace.";
    case g.ta.Lw:
      return "Attempt to connect incompatible types.";
    case g.ta.Kw:
      return "Target connection is null.";
    case g.ta.Fw:
      return (
        "Connection checks failed. " +
        (c + " expected " + c.Bh + ", found " + d.Bh)
      );
    case g.ta.Jw:
      return "Connecting non-shadow to shadow block.";
    case g.ta.Hw:
      return "Drag checks failed.";
    default:
      return "Unknown connection failure: this should never happen!";
  }
}
function Ya(a, c) {
  a = a.Bh;
  c = c.Bh;
  if (!a || !c) return !0;
  for (var d = 0; d < a.length; d++) if (-1 != c.indexOf(a[d])) return !0;
  return !1;
}
function Za(a, c, d) {
  if (ab(a, c) > d || c.W().pe()) return !1;
  switch (c.type) {
    case g.Je:
      return (
        a.ka || -1 != g.yk.indexOf(c)
          ? (a = !1)
          : c.ka
          ? ((a = c.ra()), (a = a.pe() ? !(a.Z && a.Z.ra()) : !1))
          : (a = !0),
        a
      );
    case g.Ie:
      if ((c.isConnected() && !c.ra().pe()) || a.isConnected()) return !1;
      break;
    case g.rb:
      if (c.isConnected() && !c.ra().Mc() && !c.ra().Ga) return !1;
      break;
    case g.Ua:
      if (c.isConnected() && !a.W().Y && !c.ra().Ga && c.ra().Y) return !1;
      break;
    default:
      return !1;
  }
  return -1 != g.yk.indexOf(c) ? !1 : !0;
}
g.D.register(g.D.ba.Ev, g.D.Lq, g.Hv);
g.Lr = function (a) {
  this.Ja = Object.create(null);
  this.B = a;
};
b = g.Lr.prototype;
b.clear = function () {
  this.Ja = Object.create(null);
};
b.Eu = function (a, c) {
  var d = this.af(c, a.type),
    e = J(this.B);
  g.h.ea(!0);
  try {
    if (d && d.zb() != a.zb()) {
      var f = a.type;
      c != d.name && bb(d, c, e);
      for (c = 0; c < e.length; c++)
        for (
          var h = void 0, k = e[c], l = a.zb(), m = d.zb(), n = 0;
          (h = k.T[n]);
          n++
        )
          for (var p = 0, q; (q = h.gb[p]); p++)
            q.$p() && l == q.getValue() && q.setValue(m);
      g.h.Ea(new g.h.Ne(a));
      this.Ja[f].splice(this.vm(f).indexOf(a), 1);
    } else bb(a, c, e);
  } finally {
    g.h.ea(!1);
  }
};
b.mj = function (a, c) {
  var d = this.Ng(a);
  if (!d) throw Error("Tried to rename a variable that didn't exist. ID: " + a);
  this.Eu(d, c);
};
function bb(a, c, d) {
  g.h.Ea(new g.h.vf(a, c));
  a.name = c;
  for (c = 0; c < d.length; c++)
    for (var e, f = d[c], h = a, k = 0; (e = f.T[k]); k++)
      for (var l = 0, m; (m = e.gb[l]); l++)
        m.$p() && h.zb() == m.getValue() && cb(m);
}
b.We = function (a, c, d) {
  var e = this.af(a, c);
  if (e) {
    if (d && e.zb() != d)
      throw Error(
        'Variable "' +
          a +
          '" is already in use and its id is "' +
          e.zb() +
          '" which conflicts with the passed in id, "' +
          d +
          '".'
      );
    return e;
  }
  if (d && this.Ng(d))
    throw Error('Variable id, "' + d + '", is already in use.');
  e = d || g.g.Kg();
  c = c || "";
  e = new g.Ol(this.B, a, c, e);
  a = this.Ja[c] || [];
  a.push(e);
  delete this.Ja[c];
  this.Ja[c] = a;
  return e;
};
b.Gi = function (a) {
  var c = this.Ng(a);
  if (c) {
    var d = c.name,
      e = this.kt(a);
    a = 0;
    for (var f; (f = e[a]); a++)
      if (
        "procedures_defnoreturn" == f.type ||
        "procedures_defreturn" == f.type
      ) {
        a = G(f, "NAME");
        d = g.m.CANNOT_DELETE_VARIABLE_PROCEDURE.replace("%1", d).replace(
          "%2",
          a
        );
        g.alert(d);
        return;
      }
    var h = this;
    1 < e.length
      ? ((d = g.m.DELETE_VARIABLE_CONFIRMATION.replace(
          "%1",
          String(e.length)
        ).replace("%2", d)),
        g.confirm(d, function (k) {
          k && c && db(h, c, e);
        }))
      : db(h, c, e);
  } else console.warn("Can't delete non-existent variable: " + a);
};
function db(a, c, d) {
  var e = g.h.ac();
  e || g.h.ea(!0);
  try {
    for (var f = 0; f < d.length; f++) d[f].L(!0);
    var h = a.Ja[c.type];
    a = 0;
    for (var k; (k = h[a]); a++)
      if (k.zb() == c.zb()) {
        h.splice(a, 1);
        g.h.Ea(new g.h.Ne(c));
        break;
      }
  } finally {
    e || g.h.ea(!1);
  }
}
b.af = function (a, c) {
  if ((c = this.Ja[c || ""]))
    for (var d = 0, e; (e = c[d]); d++) if (g.Wd.Gf(e.name, a)) return e;
  return null;
};
b.Ng = function (a) {
  for (var c = Object.keys(this.Ja), d = 0; d < c.length; d++)
    for (var e = c[d], f = 0, h; (h = this.Ja[e][f]); f++)
      if (h.zb() == a) return h;
  return null;
};
b.vm = function (a) {
  return (a = this.Ja[a || ""]) ? a.slice() : [];
};
b.jt = function (a) {
  var c = {};
  g.g.object.bf(c, this.Ja);
  a && a.Yh && g.g.object.bf(c, a.Yh.Ja);
  a = Object.keys(c);
  c = !1;
  for (var d = 0; d < a.length; d++) "" == a[d] && (c = !0);
  c || a.push("");
  return a;
};
b.Ki = function () {
  var a = [],
    c;
  for (c in this.Ja) a = a.concat(this.Ja[c]);
  return a;
};
b.Ws = function () {
  var a = [],
    c;
  for (c in this.Ja)
    for (var d = this.Ja[c], e = 0, f; (f = d[e]); e++) a.push(f.name);
  return a;
};
b.kt = function (a) {
  for (var c = [], d = J(this.B), e = 0; e < d.length; e++) {
    var f = qa(d[e]);
    if (f) for (var h = 0; h < f.length; h++) f[h].zb() == a && c.push(d[e]);
  }
  return c;
};
g.Ab = function (a) {
  this.id = g.g.Kg();
  g.Ab.Ql[this.id] = this;
  this.options = a || new g.kd({});
  this.M = !!this.options.M;
  this.oe = !!this.options.oe;
  this.jb = this.options.jb;
  this.Zl = new (g.D.Ey(g.D.ba.Ev, this.options))(this);
  this.An = [];
  this.qq = [];
  this.Yo = Object.create(null);
  this.bd = [];
  this.wj = [];
  this.cn = [];
  this.Ur = Object.create(null);
  this.hh = Object.create(null);
  this.Ja = new g.Lr(this);
  this.Yh = null;
};
b = g.Ab.prototype;
b.qa = !1;
b.yt = !1;
b.qw = 1024;
b.$o = null;
b.L = function () {
  this.bd.length = 0;
  this.clear();
  delete g.Ab.Ql[this.id];
};
g.Ab.Pw = 3;
b = g.Ab.prototype;
b.ag = function (a, c) {
  a = a.Ta();
  c = c.Ta();
  return (
    a.y +
    g.Ab.prototype.ag.offset * a.x -
    (c.y + g.Ab.prototype.ag.offset * c.x)
  );
};
b.Jo = function (a) {
  this.An.push(a);
};
b.aq = function (a) {
  if (!g.g.Tl(this.An, a))
    throw Error("Block not present in workspace's list of top-most blocks.");
};
b.tb = function (a) {
  var c = [].concat(this.An);
  a &&
    1 < c.length &&
    ((this.ag.offset = Math.sin(g.g.hc.uj(g.Ab.Pw))),
    this.M && (this.ag.offset *= -1),
    c.sort(this.ag));
  return c;
};
function eb(a, c) {
  return a.hh[c] ? a.hh[c].slice(0) : [];
}
function J(a) {
  var c = a.tb(!1);
  for (a = 0; a < c.length; a++) c.push.apply(c, A(c[a], !1));
  return c.filter(function (d) {
    return !d.pe();
  });
}
b.clear = function () {
  this.yt = !0;
  try {
    var a = g.h.ac();
    for (a || g.h.ea(!0); this.An.length; ) this.An[0].L(!1);
    for (; this.qq.length; ) this.qq[this.qq.length - 1].L(!1);
    a || g.h.ea(!1);
    this.Ja.clear();
    this.Yh && this.Yh.clear();
  } finally {
    this.yt = !1;
  }
};
b.mj = function (a, c) {
  this.Ja.mj(a, c);
};
b.We = function (a, c, d) {
  return this.Ja.We(a, c, d);
};
b.kt = function (a) {
  return this.Ja.kt(a);
};
b.Gi = function (a) {
  this.Ja.Gi(a);
};
b.af = function (a, c) {
  return this.Ja.af(a, c);
};
b.Ng = function (a) {
  return this.Ja.Ng(a);
};
b.vm = function (a) {
  return this.Ja.vm(a);
};
b.jt = function () {
  return this.Ja.jt(this);
};
b.Ki = function () {
  return this.Ja.Ki();
};
b.Ws = function () {
  return this.Ja.Ws();
};
b.Og = function () {
  return 0;
};
b.Vk = function (a, c) {
  return new g.fd(this, a, c);
};
function fb(a, c) {
  if (!gb(a)) return !0;
  var d = 0,
    e;
  for (e in c) {
    if (
      c[e] >
      (a.options.Fp
        ? (void 0 !== a.options.Fp[e] ? a.options.Fp[e] : Infinity) -
          eb(a, e).length
        : Infinity)
    )
      return !1;
    d += c[e];
  }
  return d > (isNaN(a.options.Lm) ? Infinity : a.options.Lm - J(a).length)
    ? !1
    : !0;
}
function gb(a) {
  return Infinity != a.options.Lm || !!a.options.Fp;
}
function hb(a, c) {
  var d = c ? a.cn : a.wj;
  a = c ? a.wj : a.cn;
  var e = d.pop();
  if (e) {
    for (var f = [e]; d.length && e.group && e.group == d[d.length - 1].group; )
      f.push(d.pop());
    for (d = 0; (e = f[d]); d++) a.push(e);
    f = g.h.filter(f, c);
    g.h.Qa = !1;
    try {
      for (d = 0; (e = f[d]); d++) e.run(c);
    } finally {
      g.h.Qa = !0;
    }
  }
}
function K(a, c) {
  a.bd.push(c);
}
function ib(a, c) {
  g.g.Tl(a.bd, c);
}
b.Yc = function (a) {
  return this.Ur[a] || null;
};
b.Ru = function (a) {
  this.Ja = a;
};
g.Ab.Ql = Object.create(null);
g.Ab.rm = function (a) {
  return g.Ab.Ql[a] || null;
};
g.Ab.getAll = function () {
  var a = [],
    c;
  for (c in g.Ab.Ql) a.push(g.Ab.Ql[c]);
  return a;
};
g.za = function (a, c, d, e, f, h) {
  this.o = a;
  this.Hg = c;
  this.wH = d;
  this.gu = this.fu = this.Ut = this.mA = null;
  this.Xe = !1;
  d = g.za.cB;
  this.o.M && (d = -d);
  this.KD = g.g.hc.uj(d);
  a.dh.appendChild(this.cm(c, !(!f || !h)));
  this.Xb = e;
  this.Gu && jb(this);
  (f && h) ||
    ((a = this.Hg.getBBox()),
    (f = a.width + 2 * g.za.xd),
    (h = a.height + 2 * g.za.xd));
  kb(this, f, h);
  jb(this);
  lb(this);
  this.Gu = !0;
};
g.za.xd = 6;
g.za.dB = 5;
g.za.cB = 20;
g.za.qv = 4;
g.za.$A = 8;
g.za.Wh = null;
g.za.Vh = null;
g.za.cv = function () {
  g.za.Wh && (g.ab(g.za.Wh), (g.za.Wh = null));
  g.za.Vh && (g.ab(g.za.Vh), (g.za.Vh = null));
};
g.za.PD = function () {
  g.Touch.Ro();
  g.za.cv();
};
b = g.za.prototype;
b.Gu = !1;
b.Xb = null;
b.Xf = 0;
b.$h = 0;
b.pb = 0;
b.yc = 0;
b.Sr = !0;
b.cm = function (a, c) {
  this.fe = g.g.j.N(g.g.H.Gc, {}, null);
  var d = { filter: "url(#" + this.o.ub.$().hp + ")" };
  g.g.userAgent.xC && (d = {});
  d = g.g.j.N(g.g.H.Gc, d, this.fe);
  this.Dx = g.g.j.N(g.g.H.Xd, {}, d);
  this.Mo = g.g.j.N(
    g.g.H.Bd,
    { class: "blocklyDraggable", x: 0, y: 0, rx: g.za.xd, ry: g.za.xd },
    d
  );
  c
    ? ((this.Yg = g.g.j.N(
        g.g.H.Gc,
        { class: this.o.M ? "blocklyResizeSW" : "blocklyResizeSE" },
        this.fe
      )),
      (c = 2 * g.za.xd),
      g.g.j.N(
        g.g.H.cD,
        { points: "0,x x,x x,0".replace(/x/g, c.toString()) },
        this.Yg
      ),
      g.g.j.N(
        g.g.H.ui,
        {
          class: "blocklyResizeLine",
          x1: c / 3,
          y1: c - 1,
          x2: c - 1,
          y2: c / 3,
        },
        this.Yg
      ),
      g.g.j.N(
        g.g.H.ui,
        {
          class: "blocklyResizeLine",
          x1: (2 * c) / 3,
          y1: c - 1,
          x2: c - 1,
          y2: (2 * c) / 3,
        },
        this.Yg
      ))
    : (this.Yg = null);
  this.o.options.readOnly ||
    ((this.fu = g.Aa(this.Mo, "mousedown", this, this.OD)),
    this.Yg && (this.gu = g.Aa(this.Yg, "mousedown", this, this.lH)));
  this.fe.appendChild(a);
  return this.fe;
};
b.pa = function () {
  return this.fe;
};
function mb(a, c) {
  a.fe.dataset && (a.fe.dataset.blockId = c);
}
b.OD = function (a) {
  var c = this.o.Gh(a);
  if (c) {
    if (c.Ni)
      throw Error(
        "Tried to call gesture.handleBubbleStart, but the gesture had already been started."
      );
    c.Qd || (c.Qd = this);
    c.se = a;
  }
};
b.qn = function () {};
b.sd = function () {
  return !1;
};
b.kn = function () {};
b.lH = function (a) {
  var c = this.fe.parentNode;
  c.lastChild !== this.fe && c.appendChild(this.fe);
  g.za.cv();
  g.g.Sk(a) ||
    (this.o.Wu(a, new g.g.K(this.o.M ? -this.pb : this.pb, this.yc)),
    (g.za.Wh = g.Aa(document, "mouseup", this, g.za.PD)),
    (g.za.Vh = g.Aa(document, "mousemove", this, this.mH)),
    g.mc());
  a.stopPropagation();
};
b.mH = function (a) {
  this.Sr = !1;
  var c = this.o;
  a = g.g.Qm(a, w(c), Ba(c));
  a.x /= c.scale;
  a.y /= c.scale;
  c = g.g.K.sum(c.sy, a);
  kb(this, this.o.M ? -c.x : c.x, c.y);
  this.o.M && jb(this);
};
function nb(a, c) {
  a.Ut = c;
}
function ob(a, c, d) {
  var e = a.o.M ? a.Xb.x - c.x - a.pb : c.x + a.Xb.x;
  c = c.y + a.Xb.y;
  return Math.max(
    0,
    Math.min(
      1,
      ((Math.min(e + a.pb, d.Eb + d.Kb) - Math.max(e, d.Eb)) *
        (Math.min(c + a.yc, d.Jb + d.Vb) - Math.max(c, d.Jb))) /
        (a.pb * a.yc)
    )
  );
}
function jb(a) {
  var c = a.Xb.x;
  c = a.o.M ? c - (a.Xf + a.pb) : c + a.Xf;
  a.moveTo(c, a.$h + a.Xb.y);
}
b.moveTo = function (a, c) {
  this.fe.setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.bi = function (a) {
  !a && this.Ut && this.Ut();
};
function kb(a, c, d) {
  var e = 2 * g.za.xd;
  c = Math.max(c, e + 45);
  d = Math.max(d, e + 20);
  a.pb = c;
  a.yc = d;
  a.Mo.setAttribute("width", c);
  a.Mo.setAttribute("height", d);
  a.Yg &&
    (a.o.M
      ? a.Yg.setAttribute(
          "transform",
          "translate(" + 2 * g.za.xd + "," + (d - e) + ") scale(-1 1)"
        )
      : a.Yg.setAttribute(
          "transform",
          "translate(" + (c - e) + "," + (d - e) + ")"
        ));
  if (a.Sr) {
    c = a.o.pd();
    c.Eb /= a.o.scale;
    c.Kb /= a.o.scale;
    c.Jb /= a.o.scale;
    c.Vb /= a.o.scale;
    d = -a.pb / 4;
    if (!(a.pb > c.Kb)) {
      if (a.o.M) {
        e = a.Xb.x - d;
        var f = e - a.pb;
        var h = c.Eb + c.Kb,
          k = c.Eb + g.Oa.Bc / a.o.scale;
      } else
        (f = d + a.Xb.x),
          (e = f + a.pb),
          (k = c.Eb),
          (h = c.Eb + c.Kb - g.Oa.Bc / a.o.scale);
      a.o.M
        ? f < k
          ? (d = -(k - a.Xb.x + a.pb))
          : e > h && (d = -(h - a.Xb.x))
        : f < k
        ? (d = k - a.Xb.x)
        : e > h && (d = h - a.Xb.x - a.pb);
    }
    f = d;
    d = -a.yc / 4;
    if (!(a.yc > c.Vb)) {
      e = a.Xb.y + d;
      h = e + a.yc;
      k = c.Jb;
      var l = c.Jb + c.Vb - g.Oa.Bc / a.o.scale,
        m = a.Xb.y;
      e < k ? (d = k - m) : h > l && (d = l - m - a.yc);
    }
    k = d;
    h = a.wH.getBBox();
    d = { x: f, y: -a.yc - a.o.ub.$().Al };
    e = { x: -a.pb - 30, y: k };
    k = { x: h.width, y: k };
    l = { x: f, y: h.height };
    f = h.width < h.height ? k : l;
    h = h.width < h.height ? l : k;
    k = ob(a, d, c);
    l = ob(a, e, c);
    m = ob(a, f, c);
    c = Math.max(k, l, m, ob(a, h, c));
    k == c
      ? ((a.Xf = d.x), (a.$h = d.y))
      : l == c
      ? ((a.Xf = e.x), (a.$h = e.y))
      : m == c
      ? ((a.Xf = f.x), (a.$h = f.y))
      : ((a.Xf = h.x), (a.$h = h.y));
  }
  jb(a);
  lb(a);
  a.mA && a.mA();
}
function lb(a) {
  var c = [],
    d = a.pb / 2,
    e = a.yc / 2,
    f = -a.Xf,
    h = -a.$h;
  if (d == f && e == h) c.push("M " + d + "," + e);
  else {
    h -= e;
    f -= d;
    a.o.M && (f *= -1);
    var k = Math.sqrt(h * h + f * f),
      l = Math.acos(f / k);
    0 > h && (l = 2 * Math.PI - l);
    var m = l + Math.PI / 2;
    m > 2 * Math.PI && (m -= 2 * Math.PI);
    var n = Math.sin(m),
      p = Math.cos(m),
      q = new g.g.Zd(a.pb, a.yc);
    m = (q.width + q.height) / g.za.dB;
    m = Math.min(m, q.width, q.height) / 4;
    q = 1 - g.za.$A / k;
    f = d + q * f;
    h = e + q * h;
    q = d + m * p;
    var t = e + m * n;
    d -= m * p;
    e -= m * n;
    n = l + a.KD;
    n > 2 * Math.PI && (n -= 2 * Math.PI);
    l = (Math.sin(n) * k) / g.za.qv;
    k = (Math.cos(n) * k) / g.za.qv;
    c.push("M" + q + "," + t);
    c.push(
      "C" + (q + k) + "," + (t + l) + " " + f + "," + h + " " + f + "," + h
    );
    c.push(
      "C" + f + "," + h + " " + (d + k) + "," + (e + l) + " " + d + "," + e
    );
  }
  c.push("z");
  a.Dx.setAttribute("d", c.join(" "));
}
b.Pd = function (a) {
  this.Mo.setAttribute("fill", a);
  this.Dx.setAttribute("fill", a);
};
b.L = function () {
  this.fu && g.ab(this.fu);
  this.gu && g.ab(this.gu);
  g.za.cv();
  g.g.j.removeNode(this.fe);
  this.Xe = !0;
};
b.Vt = function (a, c) {
  a ? a.vj(c.x, c.y) : this.moveTo(c.x, c.y);
  this.Xf = this.o.M ? this.Xb.x - c.x - this.pb : c.x - this.Xb.x;
  this.$h = c.y - this.Xb.y;
  lb(this);
};
b.Ta = function () {
  return new g.g.K(
    this.o.M ? -this.Xf + this.Xb.x - this.pb : this.Xb.x + this.Xf,
    this.Xb.y + this.$h
  );
};
g.za.fg = function (a) {
  var c = g.g.j.N(
    g.g.H.Ww,
    {
      class: "blocklyText blocklyBubbleText blocklyNoPointerEvents",
      y: g.za.xd,
    },
    null
  );
  a = a.split("\n");
  for (var d = 0; d < a.length; d++) {
    var e = g.g.j.N(g.g.H.Ir, { dy: "1em", x: g.za.xd }, c),
      f = document.createTextNode(a[d]);
    e.appendChild(f);
  }
  return c;
};
g.za.WK = function (a, c, d) {
  d = new g.za(c.B, a, c.Db.Mb, d, null, null);
  mb(d, c.id);
  if (c.M) {
    c = a.getBBox().width;
    for (var e = 0, f; (f = a.childNodes[e]); e++)
      f.setAttribute("text-anchor", "end"), f.setAttribute("x", c + g.za.xd);
  }
  return d;
};
g.h.jg = function (a) {
  this.yf = (this.Kd = "undefined" == typeof a) ? "" : a.id;
  this.ic = this.Kd ? "" : a.B.id;
  this.group = g.h.ac();
  this.Qa = g.h.Qa;
};
g.g.object.V(g.h.jg, g.h.Abstract);
g.h.jg.prototype.sa = function () {
  var a = g.h.jg.A.sa.call(this);
  this.yf && (a.commentId = this.yf);
  return a;
};
g.h.jg.prototype.aa = function (a) {
  g.h.jg.A.aa.call(this, a);
  this.yf = a.commentId;
};
g.h.Gj = function (a, c, d) {
  g.h.Gj.A.constructor.call(this, a);
  a &&
    ((this.Kz = "undefined" == typeof c ? "" : c),
    (this.Np = "undefined" == typeof d ? "" : d));
};
g.g.object.V(g.h.Gj, g.h.jg);
b = g.h.Gj.prototype;
b.type = g.h.Cv;
b.sa = function () {
  var a = g.h.Gj.A.sa.call(this);
  a.newContents = this.Np;
  return a;
};
b.aa = function (a) {
  g.h.Gj.A.aa.call(this, a);
  this.Np = a.newValue;
};
b.Pk = function () {
  return this.Kz == this.Np;
};
b.run = function (a) {
  var c;
  (c = v(this).Yo[this.yf] || null)
    ? c.IL(a ? this.Np : this.Kz)
    : console.warn("Can't change non-existent comment: " + this.yf);
};
g.h.kg = function (a) {
  g.h.kg.A.constructor.call(this, a);
  a && (this.xml = a.FA());
};
g.g.object.V(g.h.kg, g.h.jg);
g.h.kg.prototype.type = g.h.Wn;
g.h.kg.prototype.sa = function () {
  var a = g.h.kg.A.sa.call(this);
  a.xml = g.R.Xc(this.xml);
  return a;
};
g.h.kg.prototype.aa = function (a) {
  g.h.kg.A.aa.call(this, a);
  this.xml = g.R.fg(a.xml);
};
g.h.kg.prototype.run = function (a) {
  g.h.Gv(this, a);
};
g.h.Gv = function (a, c) {
  var d = v(a);
  c
    ? ((c = g.g.xml.createElement("xml")), c.appendChild(a.xml), g.R.xk(c, d))
    : (d = d.Yo[a.yf] || null)
    ? d.L(!1, !1)
    : console.warn("Can't uncreate non-existent comment: " + a.yf);
};
g.h.lg = function (a) {
  g.h.lg.A.constructor.call(this, a);
  a && (this.xml = a.FA());
};
g.g.object.V(g.h.lg, g.h.jg);
g.h.lg.prototype.type = g.h.Dv;
g.h.lg.prototype.sa = function () {
  return g.h.lg.A.sa.call(this);
};
g.h.lg.prototype.aa = function (a) {
  g.h.lg.A.aa.call(this, a);
};
g.h.lg.prototype.run = function (a) {
  g.h.Gv(this, !a);
};
g.h.ni = function (a) {
  g.h.ni.A.constructor.call(this, a);
  a && ((this.ls = a), (this.au = a.Yy()), (this.ej = null));
};
g.g.object.V(g.h.ni, g.h.jg);
b = g.h.ni.prototype;
b.kj = function () {
  if (!this.ls)
    throw Error(
      "Tried to record the new position of a comment on the same event twice."
    );
  this.ej = this.ls.Yy();
  this.ls = null;
};
b.type = g.h.Xn;
b.sa = function () {
  var a = g.h.ni.A.sa.call(this);
  this.ej &&
    (a.newCoordinate = Math.round(this.ej.x) + "," + Math.round(this.ej.y));
  return a;
};
b.aa = function (a) {
  g.h.ni.A.aa.call(this, a);
  a.newCoordinate &&
    ((a = a.newCoordinate.split(",")),
    (this.ej = new g.g.K(Number(a[0]), Number(a[1]))));
};
b.Pk = function () {
  return g.g.K.Gf(this.au, this.ej);
};
b.run = function (a) {
  var c;
  if ((c = v(this).Yo[this.yf] || null)) {
    a = a ? this.ej : this.au;
    var d = c.Yy();
    c.moveBy(a.x - d.x, a.y - d.y);
  } else console.warn("Can't move non-existent comment: " + this.yf);
};
g.D.register(g.D.ba.Pb, g.h.Wn, g.h.kg);
g.D.register(g.D.ba.Pb, g.h.Cv, g.h.Gj);
g.D.register(g.D.ba.Pb, g.h.Xn, g.h.ni);
g.D.register(g.D.ba.Pb, g.h.Dv, g.h.lg);
g.Un = function (a, c) {
  this.fc = a;
  this.o = c;
  this.Fi = null;
  this.vq = !1;
  this.dg = this.fc.Ta();
  this.Ii = g.g.Ui() && c.Dd ? c.Dd : null;
};
g.Un.prototype.L = function () {
  this.Ii = this.o = this.fc = null;
};
function pb(a, c, d) {
  d = a.Yk(d);
  d = g.g.K.sum(a.dg, d);
  a.fc.Vt(a.Ii, d);
  a.fc.sd() &&
    ((a.Fi = Sa(a.o, c)),
    (a.vq = a.Fi != g.Kv),
    (c = a.o.Fc),
    a.vq
      ? (a.fc.kn(!0), a.Fi == g.Mq && c && Ta(c, !0))
      : (a.fc.kn(!1), c && Ta(c, !1)));
}
function qb(a, c, d) {
  pb(a, c, d);
  c = a.Yk(d);
  c = g.g.K.sum(a.dg, c);
  a.fc.moveTo(c.x, c.y);
  c = a.o.Fc;
  a.vq
    ? (c && setTimeout(c.Wo.bind(c), 100), a.nm(), a.fc.L(!1, !0))
    : c && c.Wo();
  a.vq || (a.Ii && a.Ii.Qo(a.o.dh), a.fc.bi && a.fc.bi(!1), a.nm());
  a.o.rc(!0);
  (c = a.o.Ba) &&
    "function" == typeof c.Du &&
    c.Du(a.fc.sd() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
  g.h.ea(!1);
}
g.Un.prototype.nm = function () {
  if (this.fc.nL) {
    var a = new g.h.ni(this.fc);
    a.au = this.dg;
    a.kj();
    g.h.Ea(a);
  }
};
g.Un.prototype.Yk = function (a) {
  a = new g.g.K(a.x / this.o.scale, a.y / this.o.scale);
  this.o.Fm && a.scale(1 / this.o.options.qc.scale);
  return a;
};
g.h.kf = function (a, c, d) {
  g.h.kf.A.constructor.call(this, a ? a.B.id : c);
  this.fb = a ? a.id : null;
  this.BA = d;
};
g.g.object.V(g.h.kf, g.h.$d);
g.h.kf.prototype.type = g.h.Hq;
g.h.kf.prototype.sa = function () {
  var a = g.h.kf.A.sa.call(this);
  a.targetType = this.BA;
  this.fb && (a.blockId = this.fb);
  return a;
};
g.h.kf.prototype.aa = function (a) {
  g.h.kf.A.aa.call(this, a);
  this.BA = a.targetType;
  this.fb = a.blockId;
};
g.D.register(g.D.ba.Pb, g.h.Hq, g.h.kf);
g.Rl = function (a) {
  this.o = a;
  this.zA = new g.g.K(a.scrollX, a.scrollY);
};
g.Rl.prototype.L = function () {
  this.o = null;
};
g.Rl.prototype.Wu = function () {
  g.selected && rb(g.selected);
  Ca(this.o);
};
g.Rl.prototype.Fh = function (a) {
  a = g.g.K.sum(this.zA, a);
  this.o.scroll(a.x, a.y);
};
g.lo = function (a) {
  g.lo.A.constructor.call(this, a.o);
  this.pA = a.Ia;
  this.uF = a.oe;
};
g.g.object.V(g.lo, g.Rl);
g.lo.prototype.Fh = function (a) {
  a = g.g.K.sum(this.zA, a);
  this.uF ? this.pA.set(-a.x) : this.pA.set(-a.y);
};
g.navigation = {};
g.navigation.Uk = null;
g.navigation.Xj = 1;
g.navigation.Le = 2;
g.navigation.Yj = 3;
g.navigation.px = 40;
g.navigation.Gd = g.navigation.Le;
g.navigation.Gb = {
  ld: "previous",
  jd: "next",
  cw: "in",
  Bw: "out",
  fw: "insert",
  KC: "mark",
  EB: "disconnect",
  Er: "toolbox",
  OB: "exit",
  sD: "toggle_keyboard_nav",
  TC: "move workspace cursor up",
  QC: "move workspace cursor down",
  RC: "move workspace cursor left",
  SC: "move workspace cursor right",
};
g.navigation.zl = "local_marker_1";
g.navigation.Zc = function () {
  return g.navigation.Kf().Zc(g.navigation.zl);
};
g.navigation.Kf = function () {
  return g.Jf();
};
g.navigation.Ay = function (a) {
  if ((a = a.Ba))
    (g.navigation.Gd = g.navigation.Yj),
      g.navigation.lA(!1),
      g.navigation.Zc().Wa || g.navigation.Ot(),
      a.gL() || a.HL(0);
};
g.navigation.zy = function (a) {
  g.navigation.Gd = g.navigation.Xj;
  var c = a.Ba;
  a = c ? L(c) : L(a);
  g.navigation.Zc().Wa || g.navigation.Ot();
  a &&
    a.o &&
    ((a = a.o.tb(!0)),
    0 < a.length && ((a = a[0]), (a = g.F.dm(a)), M(g.navigation.zk(), a)));
};
g.navigation.kp = function (a) {
  g.mc();
  var c = a.ob(),
    d = !!a.Ba,
    e = a.tb(!0);
  g.navigation.lA(d);
  g.navigation.Gd = g.navigation.Le;
  0 < e.length
    ? M(c, g.F.ps(e[0]))
    : ((a = g.F.pk(a, new g.g.K(100, 100))), M(c, a));
};
g.navigation.zk = function () {
  var a = g.navigation.Kf(),
    c = null;
  a.qa && (c = (a = (c = a.Ba) ? L(c) : L(a)) ? a.o.ob() : null);
  return c;
};
g.navigation.AF = function (a) {
  var c = L(a);
  if (c && c.isVisible()) {
    var d = g.navigation.zk().Wa.xa;
    d.isEnabled()
      ? ((c = sb(c, d)),
        c.Ha(),
        ma(c, !0),
        M(a.ob(), g.F.Bf(c)),
        g.navigation.Dz() ||
          g.navigation.Oc(
            "Something went wrong while inserting a block from the flyout."
          ),
        g.navigation.kp(a),
        M(a.ob(), g.F.ps(c)),
        g.navigation.jH())
      : g.navigation.Oc("Can't insert a disabled block.");
  } else
    g.navigation.Oc(
      "Trying to insert from the flyout when the flyout does not  exist or is not visible"
    );
};
g.navigation.lA = function (a) {
  g.navigation.zk() && (g.navigation.zk().Fa(), a && L(g.navigation.Kf()).Fa());
};
g.navigation.RF = function () {
  var a = g.navigation.Zc().Wa,
    c = g.navigation.Kf().ob().Wa;
  if (!a) return g.navigation.Oc("Cannot insert with no marked node."), !1;
  if (!c) return g.navigation.Oc("Cannot insert with no cursor node."), !1;
  a = a.Za();
  c = c.Za();
  return a == g.F.types.Zb
    ? (g.navigation.Oc("Should not have been able to mark a field."), !1)
    : a == g.F.types.Nb
    ? (g.navigation.Oc("Should not have been able to mark a block."), !1)
    : a == g.F.types.rf
    ? (g.navigation.Oc("Should not have been able to mark a stack."), !1)
    : c == g.F.types.Zb
    ? (g.navigation.Oc("Cannot attach a field to anything else."), !1)
    : c == g.F.types.kc
    ? (g.navigation.Oc("Cannot attach a workspace to anything else."), !1)
    : !0;
};
g.navigation.WF = function (a, c) {
  if (!a) return !1;
  if (a.Ga)
    return g.navigation.Oc("Cannot move a shadow block to the workspace."), !1;
  a.getParent() && x(a, !1);
  a.moveTo(c.wq);
  return !0;
};
g.navigation.Dz = function () {
  var a = g.navigation.Zc().Wa,
    c = g.navigation.Kf().ob().Wa;
  if (!g.navigation.RF()) return !1;
  var d = a.Za(),
    e = c.Za(),
    f = c.xa,
    h = a.xa;
  if (a.Lk && c.Lk) return g.navigation.Ue(f, h);
  if (a.Lk && (e == g.F.types.Nb || e == g.F.types.rf))
    return g.navigation.lz(f, h);
  if (d == g.F.types.kc) return (c = c ? c.W() : null), g.navigation.WF(c, a);
  g.navigation.Oc("Unexpected state in Blockly.navigation.modify_.");
  return !1;
};
g.navigation.wE = function (a, c) {
  var d = a.W(),
    e = c.W();
  d.$c() == e.$c() &&
    (-1 < r(d, !1).indexOf(e)
      ? g.navigation.np(c).disconnect()
      : g.navigation.np(a).disconnect());
};
g.navigation.Tt = function (a, c) {
  if (!a || !c) return !1;
  var d = a.W();
  return E(Ga(a), a, c, !1)
    ? (g.navigation.wE(a, c), F(c) || Na(d.$c(), a, c), c.connect(a), !0)
    : !1;
};
g.navigation.np = function (a) {
  var c = a.W();
  return F(a) ? (c.Z ? c.Z : c.O ? c.O : null) : a;
};
g.navigation.Vy = function (a) {
  return F(a) ? a : a.ka ? a.ka : null;
};
g.navigation.Ue = function (a, c) {
  if (!a || !c) return !1;
  var d = g.navigation.np(a),
    e = g.navigation.Vy(c),
    f = g.navigation.Vy(a),
    h = g.navigation.np(c);
  if (
    (d && e && g.navigation.Tt(d, e)) ||
    (f && h && g.navigation.Tt(f, h)) ||
    g.navigation.Tt(a, c)
  )
    return !0;
  d = Ga(a).No(a, c, !1);
  g.navigation.Oc("Connection failed with error: " + $a(d, a, c));
  return !1;
};
g.navigation.lz = function (a, c) {
  switch (c.type) {
    case g.Je:
      if (g.navigation.Ue(a.Y, c)) return !0;
      break;
    case g.Ua:
      if (g.navigation.Ue(a.Z, c)) return !0;
      break;
    case g.rb:
      if (g.navigation.Ue(a.O, c)) return !0;
      break;
    case g.Ie:
      for (var d = 0; d < a.T.length; d++) {
        var e = a.T[d].connection;
        if (e && e.type === g.rb && g.navigation.Ue(e, c)) return !0;
      }
      if (a.O && g.navigation.Ue(a.O, c)) return !0;
  }
  g.navigation.Oc("This block can not be inserted at the marked location.");
  return !1;
};
g.navigation.vE = function (a) {
  var c = a.ob().Wa;
  if (c.Lk) {
    var d = c.xa;
    d.isConnected()
      ? ((c = F(d) ? d : d.ka),
        (d = F(d) ? d.ka : d),
        d.W().Ga
          ? g.navigation.It("Cannot disconnect a shadow block")
          : (c.disconnect(),
            tb(d, c),
            Wa(c.W().$c()),
            (c = g.F.Cf(c)),
            M(a.ob(), c)))
      : g.navigation.It("Cannot disconnect unconnected connection");
  } else
    g.navigation.It(
      "Cannot disconnect blocks when the cursor is not on a connection"
    );
};
g.navigation.Ot = function () {
  M(g.navigation.Zc(), g.navigation.Kf().ob().Wa);
};
g.navigation.jH = function () {
  var a = g.navigation.Zc();
  M(a, null);
  a.Fa();
};
g.navigation.$f = function (a) {
  g.navigation.Gd = a;
};
g.navigation.XF = function (a) {
  var c = g.navigation.Kf();
  if (c && (c = c.ob())) {
    var d = c.Wa;
    d = d ? d.W() : null;
    d === a
      ? d.getParent()
        ? (a = d.Z || d.O) && M(c, g.F.Cf(a.ka))
        : M(c, g.F.pk(d.B, d.Ta()))
      : d && -1 < A(a, !1).indexOf(d) && M(c, g.F.pk(d.B, d.Ta()));
  }
};
g.navigation.YF = function (a) {
  var c = g.navigation.Kf().ob();
  if (c) {
    var d = c.Wa;
    d = d ? d.W() : null;
    d === a && M(c, g.F.Bf(d));
  }
};
g.navigation.FE = function () {
  var a = g.navigation.Kf();
  a.hb || ((a.hb = !0), g.navigation.kp(a));
};
g.navigation.uE = function () {
  var a = g.navigation.Kf();
  a.hb &&
    ((a.hb = !1),
    a.ob().Fa(),
    g.navigation.Zc().Fa(),
    g.navigation.zk() && g.navigation.zk().Fa());
};
g.navigation.It = function (a) {
  g.navigation.Uk ? g.navigation.Uk("log", a) : console.log(a);
};
g.navigation.Oc = function (a) {
  g.navigation.Uk ? g.navigation.Uk("warn", a) : console.warn(a);
};
g.navigation.YK = function (a) {
  g.navigation.Uk ? g.navigation.Uk("error", a) : console.error(a);
};
g.navigation.Mp = function (a, c, d) {
  var e = a.ob(),
    f = a.ob().Wa;
  if (f.Za() !== g.F.types.kc) return !1;
  f = f.wq;
  M(
    e,
    g.F.pk(a, new g.g.K(c * g.navigation.px + f.x, d * g.navigation.px + f.y))
  );
  return !0;
};
g.navigation.jF = function (a) {
  a = a.ob().Wa;
  var c = a.Za();
  c == g.F.types.Zb
    ? ((a = a.xa), D(a) && a.di(void 0))
    : a.Lk || c == g.F.types.kc
    ? g.navigation.Ot()
    : c == g.F.types.Nb
    ? g.navigation.Oc("Cannot mark a block.")
    : c == g.F.types.rf && g.navigation.Oc("Cannot mark a stack.");
};
g.navigation.bH = function () {
  var a = {
    name: g.navigation.Gb.ld,
    Na: function (c) {
      return c.hb;
    },
    Ca: function (c, d, e) {
      d = c.Ba;
      switch (g.navigation.Gd) {
        case g.navigation.Le:
          return c.ob().Tb(e);
        case g.navigation.Xj:
          return (c = d ? L(d) : L(c)), !(!c || !c.Tb(e));
        case g.navigation.Yj:
          return d && "function" == typeof d.Tb ? d.Tb(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.Sa.D.register(a);
  N(g.g.P.lx, a.name);
};
g.navigation.$G = function () {
  var a = {
    name: g.navigation.Gb.Bw,
    Na: function (c) {
      return c.hb;
    },
    Ca: function (c, d, e) {
      switch (g.navigation.Gd) {
        case g.navigation.Le:
          return c.ob().Tb(e);
        case g.navigation.Xj:
          return g.navigation.Ay(c), !0;
        case g.navigation.Yj:
          return (c = c.Ba) && "function" == typeof c.Tb ? c.Tb(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.Sa.D.register(a);
  N(g.g.P.mv, a.name);
};
g.navigation.ZG = function () {
  var a = {
    name: g.navigation.Gb.jd,
    Na: function (c) {
      return c.hb;
    },
    Ca: function (c, d, e) {
      d = c.Ba;
      switch (g.navigation.Gd) {
        case g.navigation.Le:
          return c.ob().Tb(e);
        case g.navigation.Xj:
          return (c = d ? L(d) : L(c)), !(!c || !c.Tb(e));
        case g.navigation.Yj:
          return d && "function" == typeof d.Tb ? d.Tb(e) : !1;
        default:
          return !1;
      }
    },
  };
  g.Sa.D.register(a);
  N(g.g.P.Ow, a.name);
};
g.navigation.TG = function () {
  var a = {
    name: g.navigation.Gb.cw,
    Na: function (c) {
      return c.hb;
    },
    Ca: function (c, d, e) {
      switch (g.navigation.Gd) {
        case g.navigation.Le:
          return c.ob().Tb(e);
        case g.navigation.Yj:
          return (
            ((d = c.Ba) && "function" == typeof d.Tb && d.Tb(e)) ||
              g.navigation.zy(c),
            !0
          );
        default:
          return !1;
      }
    },
  };
  g.Sa.D.register(a);
  N(g.g.P.Iv, a.name);
};
g.navigation.VG = function () {
  var a = {
    name: g.navigation.Gb.fw,
    Na: function (c) {
      return c.hb && !c.options.readOnly;
    },
    Ca: function () {
      switch (g.navigation.Gd) {
        case g.navigation.Le:
          return g.navigation.Dz();
        default:
          return !1;
      }
    },
  };
  g.Sa.D.register(a);
  N(g.g.P.oC, a.name);
};
g.navigation.WG = function () {
  var a = {
    name: g.navigation.Gb.KC,
    Na: function (c) {
      return c.hb && !c.options.readOnly;
    },
    Ca: function (c) {
      switch (g.navigation.Gd) {
        case g.navigation.Le:
          return g.navigation.jF(c), !0;
        case g.navigation.Xj:
          return g.navigation.AF(c), !0;
        default:
          return !1;
      }
    },
  };
  g.Sa.D.register(a);
  N(g.g.P.Oq, a.name);
};
g.navigation.MG = function () {
  var a = {
    name: g.navigation.Gb.EB,
    Na: function (c) {
      return c.hb && !c.options.readOnly;
    },
    Ca: function (c) {
      switch (g.navigation.Gd) {
        case g.navigation.Le:
          return g.navigation.vE(c), !0;
        default:
          return !1;
      }
    },
  };
  g.Sa.D.register(a);
  N(g.g.P.Ho, a.name);
};
g.navigation.dH = function () {
  var a = {
    name: g.navigation.Gb.Er,
    Na: function (c) {
      return c.hb && !c.options.readOnly;
    },
    Ca: function (c) {
      switch (g.navigation.Gd) {
        case g.navigation.Le:
          return c.Ba ? g.navigation.Ay(c) : g.navigation.zy(c), !0;
        default:
          return !1;
      }
    },
  };
  g.Sa.D.register(a);
  N(g.g.P.pD, a.name);
};
g.navigation.PG = function () {
  var a = {
    name: g.navigation.Gb.OB,
    Na: function (c) {
      return c.hb;
    },
    Ca: function (c) {
      switch (g.navigation.Gd) {
        case g.navigation.Xj:
          return g.navigation.kp(c), !0;
        case g.navigation.Yj:
          return g.navigation.kp(c), !0;
        default:
          return !1;
      }
    },
  };
  g.Sa.D.register(a, !0);
  N(g.g.P.Pq, a.name, !0);
  N(g.g.P.E, a.name, !0);
};
g.navigation.cH = function () {
  var a = {
    name: g.navigation.Gb.sD,
    Ca: function (d) {
      d.hb ? g.navigation.uE() : g.navigation.FE();
      return !0;
    },
  };
  g.Sa.D.register(a);
  var c = O(g.g.P.yC, [g.g.P.jh, g.g.P.ug]);
  N(c, a.name);
};
g.navigation.fH = function () {
  var a = {
    name: g.navigation.Gb.RC,
    Na: function (d) {
      return d.hb && !d.options.readOnly;
    },
    Ca: function (d) {
      return g.navigation.Mp(d, -1, 0);
    },
  };
  g.Sa.D.register(a);
  var c = O(g.g.P.mv, [g.g.P.ug]);
  N(c, a.name);
};
g.navigation.gH = function () {
  var a = {
    name: g.navigation.Gb.SC,
    Na: function (d) {
      return d.hb && !d.options.readOnly;
    },
    Ca: function (d) {
      return g.navigation.Mp(d, 1, 0);
    },
  };
  g.Sa.D.register(a);
  var c = O(g.g.P.Iv, [g.g.P.ug]);
  N(c, a.name);
};
g.navigation.hH = function () {
  var a = {
    name: g.navigation.Gb.TC,
    Na: function (d) {
      return d.hb && !d.options.readOnly;
    },
    Ca: function (d) {
      return g.navigation.Mp(d, 0, -1);
    },
  };
  g.Sa.D.register(a);
  var c = O(g.g.P.lx, [g.g.P.ug]);
  N(c, a.name);
};
g.navigation.eH = function () {
  var a = {
    name: g.navigation.Gb.QC,
    Na: function (d) {
      return d.hb && !d.options.readOnly;
    },
    Ca: function (d) {
      return g.navigation.Mp(d, 0, 1);
    },
  };
  g.Sa.D.register(a);
  var c = O(g.g.P.Ow, [g.g.P.ug]);
  N(c, a.name);
};
g.navigation.YG = function () {
  g.navigation.TG();
  g.navigation.ZG();
  g.navigation.$G();
  g.navigation.bH();
  g.navigation.eH();
  g.navigation.fH();
  g.navigation.gH();
  g.navigation.hH();
  g.navigation.MG();
  g.navigation.PG();
  g.navigation.VG();
  g.navigation.WG();
  g.navigation.cH();
  g.navigation.dH();
};
g.nf = function (a, c) {
  this.Ez = null;
  this.Vc = new g.g.K(0, 0);
  this.Ub = this.cc = this.bl = this.cl = this.Qd = null;
  this.qs = c;
  this.Bm = this.Wi = this.Cm = this.Mi = !1;
  this.se = a;
  this.va = this.Bj = this.wf = this.Ah = this.Tp = this.Sp = null;
  this.vp = this.Ni = this.Hx = !1;
  this.dz = !g.GB;
};
b = g.nf.prototype;
b.L = function () {
  g.Touch.Ro();
  g.I.RH();
  this.qs.Kc = null;
  this.Sp && g.ab(this.Sp);
  this.Tp && g.ab(this.Tp);
  this.wf && this.wf.L();
  this.Bj && this.Bj.L();
  this.Ah && this.Ah.L();
};
function ub(a, c) {
  a.Vc = g.g.K.jm(new g.g.K(c.clientX, c.clientY), a.Ez);
  if (a.Mi) var d = !1;
  else (a.Mi = g.g.K.OF(a.Vc) > (a.va ? g.bC : g.FB)), (d = a.Mi);
  if (d) {
    if (a.Hx)
      throw Error("updateIsDragging_ should only be called once per gesture.");
    a.Hx = !0;
    if (a.Qd) {
      a.Bm = !0;
      a.Ah = new g.Un(a.Qd, a.Ub);
      d = a.Ah;
      g.h.ac() || g.h.ea(!0);
      d.o.rc(!1);
      d.fc.Sr = !1;
      d.Ii && (d.fc.moveTo(0, 0), d.Ii.vj(d.dg.x, d.dg.y), ba(d.Ii, d.fc.pa()));
      d.fc.bi && d.fc.bi(!0);
      var e = d.o.Ba;
      e &&
        "function" == typeof e.Mr &&
        e.Mr(d.fc.sd() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
      pb(a.Ah, a.se, a.Vc);
      d = !0;
    } else d = !1;
    if (!d) {
      if (a.cc)
        if (
          (a.va
            ? (a.cc && a.cc.isEnabled()
                ? ((d = !vb(a.va)) ||
                    ((d = a.Vc),
                    (d = (Math.atan2(d.y, d.x) / Math.PI) * 180),
                    (e = a.va.CE),
                    (d =
                      (d < e && d > -e) || d < -180 + e || d > 180 - e
                        ? !0
                        : !1)),
                  d
                    ? ((a.Ub = a.va.Ra),
                      wb(a.Ub),
                      g.h.ac() || g.h.ea(!0),
                      (a.bl = null),
                      (a.cc = sb(a.va, a.cc)),
                      a.cc.select(),
                      (d = !0))
                    : (d = !1))
                : (d = !1),
              (a.Wi = d))
            : a.cc.Mc() && (a.Wi = !0),
          a.Wi)
        ) {
          a.wf = new g.li(a.cc, a.Ub);
          d = a.wf;
          e = a.Vc;
          var f = a.dz;
          g.h.ac() || g.h.ea(!0);
          var h = new g.h.jf(d.sb, !0, r(d.sb, !1));
          g.h.Ea(h);
          d.o.Fm && Wa(d.sb);
          g.g.j.tn();
          d.o.rc(!1);
          g.lb.Ds();
          if (d.sb.getParent() || (f && d.sb.Y && d.sb.Y.ra()))
            x(d.sb, f),
              (e = d.Yk(e)),
              (e = g.g.K.sum(d.dg, e)),
              d.sb.translate(e.x, e.y),
              g.lb.xE(d.sb),
              (e = d.Ff),
              (e.Lo = Ka(e));
          d.sb.bi(!0);
          e = d.sb;
          e.In &&
            ((f = e.Ta()),
            e.pa().removeAttribute("transform"),
            e.B.Dd.vj(f.x, f.y),
            (f = e.pa()) && ba(e.B.Dd, f));
          (e = d.o.Ba) &&
            "function" == typeof e.Mr &&
            e.Mr(d.sb.sd() ? "blocklyToolboxDelete" : "blocklyToolboxGrab");
          Qa(a.wf, a.se, a.Vc);
          d = !0;
        } else d = !1;
      else d = !1;
      if ((d = !d))
        if (a.va) d = vb(a.va);
        else if ((d = a.Ub)) (d = a.Ub), (d = d.options.pc && d.options.pc.Fh);
      d &&
        ((a.Bj = a.va ? new g.lo(a.va) : new g.Rl(a.Ub)),
        (a.Cm = !0),
        a.Bj.Wu());
    }
    g.Rh();
  }
  a.se = c;
}
b.Es = function (a) {
  g.g.yp(a)
    ? this.cancel()
    : ((this.Ni = !0),
      g.lb.Ds(),
      wb(this.Ub),
      this.Ub.Fm && this.Ub.resize(),
      g.mc(!!this.va),
      da(this.Ub),
      (this.se = a),
      g.I.block(),
      this.cc &&
        (!this.cc.nc && a.shiftKey && this.cc.B.hb
          ? M(this.qs.ob(), g.F.ps(this.cc))
          : this.cc.select()),
      g.g.Sk(a)
        ? ra(this, a)
        : (("touchstart" != a.type.toLowerCase() &&
            "pointerdown" != a.type.toLowerCase()) ||
            "mouse" == a.pointerType ||
            g.NF(a, this),
          (this.Ez = new g.g.K(a.clientX, a.clientY)),
          (this.dz = a.altKey || a.ctrlKey || a.metaKey),
          this.gk(a)));
};
b.gk = function (a) {
  this.Sp = g.Aa(document, "mousemove", null, this.Ek.bind(this));
  this.Tp = g.Aa(document, "mouseup", null, this.qp.bind(this));
  a.preventDefault();
  a.stopPropagation();
};
b.Ek = function (a) {
  ub(this, a);
  this.Cm
    ? this.Bj.Fh(this.Vc)
    : this.Wi
    ? Qa(this.wf, this.se, this.Vc)
    : this.Bm && pb(this.Ah, this.se, this.Vc);
  a.preventDefault();
  a.stopPropagation();
};
b.qp = function (a) {
  ub(this, a);
  g.Rh();
  if (this.vp) console.log("Trying to end a gesture recursively.");
  else {
    this.vp = !0;
    if (this.Bm) qb(this.Ah, a, this.Vc);
    else if (this.Wi) Ua(this.wf, a, this.Vc);
    else if (this.Cm) {
      var c = this.Bj;
      c.Fh(this.Vc);
      Da(c.o);
    } else if (this.Qd && !this.Mi)
      this.Qd.tH && this.Qd.tH(), this.Qd.select && this.Qd.select();
    else if (xb(this)) {
      c = this.cl;
      var d = this.se;
      D(c) && c.di(d);
      yb(this);
    } else
      !this.bl || this.Mi || xb(this)
        ? this.bl ||
          this.Qd ||
          this.cl ||
          this.Mi ||
          ((c = this.qs),
          a.shiftKey && c.hb
            ? ((d = g.g.pH(c, new g.g.K(a.clientX, a.clientY))),
              (d = g.F.pk(c, d)),
              M(c.ob(), d))
            : g.selected && rb(g.selected),
          (c = new g.h.kf(null, (this.Ub || c).id, "workspace")),
          g.h.Ea(c))
        : (this.va && this.va.fk
            ? this.cc.isEnabled() &&
              (g.h.ac() || g.h.ea(!0), Xa(sb(this.va, this.cc)))
            : ((c = new g.h.kf(this.bl, this.Ub.id, "block")), g.h.Ea(c)),
          yb(this),
          g.h.ea(!1));
    a.preventDefault();
    a.stopPropagation();
    this.L();
  }
};
b.cancel = function () {
  if (!this.vp) {
    g.Rh();
    if (this.Bm) qb(this.Ah, this.se, this.Vc);
    else if (this.Wi) Ua(this.wf, this.se, this.Vc);
    else if (this.Cm) {
      var a = this.Bj;
      a.Fh(this.Vc);
      Da(a.o);
    }
    this.L();
  }
};
function ra(a, c) {
  a.cc
    ? (yb(a), g.mc(!!a.va), a.cc.qn(c))
    : a.Qd
    ? a.Qd.qn(c)
    : a.Ub && !a.va && (g.mc(), a.Ub.qn(c));
  c.preventDefault();
  c.stopPropagation();
  a.L();
}
function zb(a, c, d) {
  if (a.Ni)
    throw Error(
      "Tried to call gesture.handleWsStart, but the gesture had already been started."
    );
  a.Ub || (a.Ub = d);
  a.se = c;
  a.Es(c);
  a.Ub.hb && g.navigation.$f(g.navigation.Le);
}
function Ab(a, c, d) {
  if (a.Ni)
    throw Error(
      "Tried to call gesture.handleFlyoutStart, but the gesture had already been started."
    );
  a.va || (a.va = d);
  zb(a, c, d.o);
}
function yb(a) {
  a.cc && !a.va && Wa(a.cc);
}
function Bb(a, c) {
  a.bl || a.Qd || ((a.bl = c), c.nc && c != c.$c() ? Cb(a, c.$c()) : Cb(a, c));
}
function Cb(a, c) {
  c.Ga ? Cb(a, c.getParent()) : (a.cc = c);
}
function xb(a) {
  return (a.cl ? D(a.cl) : !1) && !a.Mi && (!a.va || !a.va.fk);
}
b.Lc = function () {
  return this.Cm || this.Wi || this.Bm;
};
b.Ak = function () {
  return this.wf ? this.wf.Ak() : [];
};
g.nf.Ri = function () {
  for (var a = g.Ab.getAll(), c = 0, d; (d = a[c]); c++) if (d.Kc) return !0;
  return !1;
};
g.Sd = function (a, c, d) {
  this.ed = this.ql;
  this.IA = this.Jn = null;
  this.dd = new g.g.Zd(0, 0);
  this.v = this.St = this.tj = this.Dc = this.Qb = this.Id = this.Xg = this.Ig = null;
  d && this.ie(d);
  this.setValue(a);
  c && (this.Jn = c);
};
b = g.Sd.prototype;
b.ql = null;
b.name = void 0;
b.Xe = !1;
b.Cz = 50;
b.J = null;
b.Sg = !0;
b.ji = !0;
b.hs = null;
g.Sd.vw = "\u00a0";
b = g.Sd.prototype;
b.bo = !0;
b.Tj = !1;
b.ie = function (a) {
  var c = a.tooltip;
  "string" == typeof c && (c = g.g.df(a.tooltip));
  c && this.ye(c);
};
b.Qu = function (a) {
  if (this.J) throw Error("Field already bound to a block.");
  this.J = a;
};
b.$ = function () {
  !this.v && this.J && this.J.B && this.J.B.qa && (this.v = this.J.B.ub.$());
  return this.v;
};
b.W = function () {
  return this.J;
};
b.Da = function () {
  this.Id ||
    ((this.Id = g.g.j.N(g.g.H.Gc, {}, null)),
    this.isVisible() || (this.Id.style.display = "none"),
    this.J.pa().appendChild(this.Id),
    this.Hk(),
    this.xj(),
    this.ye(this.IA),
    g.I.gk(Db(this)),
    (this.St = g.Aa(Db(this), "mousedown", this, this.Uh)),
    this.Si());
};
b.Hk = function () {
  Eb(this);
  Fb(this);
};
b.Si = function () {};
function Eb(a) {
  a.Qb = g.g.j.N(
    g.g.H.Bd,
    {
      rx: a.$().ho,
      ry: a.$().ho,
      x: 0,
      y: 0,
      height: a.dd.height,
      width: a.dd.width,
      class: "blocklyFieldRect",
    },
    a.Id
  );
}
function Fb(a) {
  a.Dc = g.g.j.N(g.g.H.Ww, { class: "blocklyText" }, a.Id);
  a.$().Sq && a.Dc.setAttribute("dominant-baseline", "central");
  a.tj = document.createTextNode("");
  a.Dc.appendChild(a.tj);
}
b.pm = function (a) {
  this.setValue(a.textContent);
};
b.EA = function (a) {
  a.textContent = this.getValue();
  return a;
};
b.L = function () {
  g.G.Gk(this);
  g.X.Gk(this);
  g.I.dv(Db(this));
  this.St && g.ab(this.St);
  g.g.j.removeNode(this.Id);
  this.Xe = !0;
};
b.xj = function () {
  var a = this.Id;
  this.bo &&
    a &&
    (this.J.td()
      ? (g.g.j.Hb(a, "blocklyEditableText"),
        g.g.j.Ac(a, "blocklyNonEditableText"),
        (a.style.cursor = this.Fv))
      : (g.g.j.Hb(a, "blocklyNonEditableText"),
        g.g.j.Ac(a, "blocklyEditableText"),
        (a.style.cursor = "")));
};
function D(a) {
  return !!a.J && a.J.td() && !!a.di && "function" === typeof a.di;
}
b.isVisible = function () {
  return this.ji;
};
b.Lb = function (a) {
  if (this.ji != a) {
    this.ji = a;
    var c = this.pa();
    c && (c.style.display = a ? "block" : "none");
  }
};
function Gb(a, c) {
  a.Jn = c;
}
b.Xy = function () {
  return this.Jn;
};
b.pa = function () {
  return this.Id;
};
b.$b = function () {};
b.nj = function () {
  this.tj && (this.tj.nodeValue = Hb(this));
  var a = this.$(),
    c = this.Qb ? this.$().rl : 0,
    d = 2 * c,
    e = a.io,
    f = 0;
  this.Dc && ((f = g.g.j.bt(this.Dc, a.nh, a.oh, a.mh)), (d += f));
  this.Qb && (e = Math.max(e, a.Sv));
  this.dd.height = e;
  this.dd.width = d;
  Ib(this, c, f);
  Jb(this);
};
function Ib(a, c, d) {
  if (a.Dc) {
    var e = a.$(),
      f = a.dd.height / 2;
    a.Dc.setAttribute("x", a.J.M ? a.dd.width - d - c : c);
    a.Dc.setAttribute("y", e.Sq ? f : f - e.io / 2 + e.Uv);
  }
}
function Jb(a) {
  a.Qb &&
    (a.Qb.setAttribute("width", a.dd.width),
    a.Qb.setAttribute("height", a.dd.height),
    a.Qb.setAttribute("rx", a.$().ho),
    a.Qb.setAttribute("ry", a.$().ho));
}
b.Lg = function () {
  if (!this.isVisible()) return new g.g.Zd(0, 0);
  this.Sg
    ? (this.nj(), (this.Sg = !1))
    : this.ji &&
      0 == this.dd.width &&
      (console.warn(
        "Deprecated use of setting size_.width to 0 to rerender a field. Set field.isDirty_ to true instead."
      ),
      this.nj());
  return this.dd;
};
function ca(a) {
  if (a.Qb)
    (c = a.Qb.getBoundingClientRect()),
      (a = g.g.style.Lf(a.Qb)),
      (e = c.width),
      (c = c.height);
  else {
    var c = H(a.J),
      d = a.J.B.scale;
    a = g.g.style.Lf(Db(a));
    var e = c.width * d;
    c = c.height * d;
    g.g.userAgent.gC
      ? ((a.x += 1.5 * d), (a.y += 1.5 * d))
      : g.g.userAgent.pi ||
        g.g.userAgent.Fe ||
        ((a.x -= 0.5 * d), (a.y -= 0.5 * d));
    e += 1 * d;
    c += 1 * d;
  }
  return new g.g.Rect(a.y, a.y + c, a.x, a.x + e);
}
function Hb(a) {
  var c = a.Hh();
  if (!c) return g.Sd.vw;
  c.length > a.Cz && (c = c.substring(0, a.Cz - 2) + "\u2026");
  c = c.replace(/\s/g, g.Sd.vw);
  a.J && a.J.M && (c += "\u200f");
  return c;
}
b.Hh = function () {
  if (this.ht) {
    var a = this.ht.call(this);
    if (null !== a) return String(a);
  }
  return String(this.getValue());
};
b.Jm = function () {
  this.Sg = !0;
  this.v = null;
};
function cb(a) {
  a.Sg = !0;
  a.J && a.J.qa && (a.J.Ha(), a.J.lc(), a.fv());
}
b.setValue = function (a) {
  if (null !== a) {
    var c = this.Hi(a);
    a = Kb(this, a, c);
    if (!(a instanceof Error)) {
      if ((c = this.Xy()))
        if (((c = c.call(this, a)), (a = Kb(this, a, c)), a instanceof Error))
          return;
      c = this.J;
      if (!c || !c.Xe) {
        var d = this.getValue();
        d === a
          ? this.Eh(a)
          : (c &&
              g.h.isEnabled() &&
              g.h.Ea(new g.h.ih(c, "field", this.name || null, d, a)),
            this.Eh(a),
            this.Sg && cb(this));
      }
    }
  }
};
function Kb(a, c, d) {
  if (null === d) return a.qy(), a.Sg && cb(a), Error();
  void 0 !== d && (c = d);
  return c;
}
b.getValue = function () {
  return this.ed;
};
b.Hi = function (a) {
  return null === a || void 0 === a ? null : a;
};
b.Eh = function (a) {
  this.ed = a;
  this.Sg = !0;
};
b.qy = function () {};
b.Uh = function (a) {
  if (this.J && this.J.B && (a = this.J.B.Gh(a))) {
    if (a.Ni)
      throw Error(
        "Tried to call gesture.setStartField, but the gesture had already been started."
      );
    a.cl || (a.cl = this);
  }
};
b.ye = function (a) {
  a || "" === a || (a = this.J);
  var c = Db(this);
  c ? (c.Ae = a) : (this.IA = a);
};
function Db(a) {
  return a.hs || a.pa();
}
b.$p = function () {
  return !1;
};
b.Mf = function () {
  for (var a = null, c = this.J, d = c.T, e = 0; e < c.T.length; e++)
    for (var f = d[e], h = f.gb, k = 0; k < h.length; k++)
      if (h[k] === this) {
        a = f;
        break;
      }
  return a;
};
b.rz = function () {
  return !1;
};
b.Tb = function () {
  return !1;
};
b.Zg = function (a) {
  a ? (this.Id.appendChild(a), (this.Ig = a)) : (this.Ig = null);
};
b.ah = function (a) {
  a ? (this.Id.appendChild(a), (this.Xg = a)) : (this.Xg = null);
};
b.fv = function () {
  var a = this.J.B;
  a.hb && this.Ig && a.ob().draw();
  a.hb && this.Xg && a.Zc(g.navigation.zl).draw();
};
g.gd = function (a, c, d) {
  this.Po = null;
  g.gd.A.constructor.call(this, a, null, d);
  d || (this.Po = c || null);
};
g.g.object.V(g.gd, g.Sd);
g.gd.prototype.ql = "";
g.gd.aa = function (a) {
  var c = g.g.df(a.text);
  return new g.gd(c, void 0, a);
};
g.gd.prototype.bo = !1;
g.gd.prototype.ie = function (a) {
  g.gd.A.ie.call(this, a);
  this.Po = a["class"];
};
g.gd.prototype.Hk = function () {
  Fb(this);
  this.Po && g.g.j.Hb(this.Dc, this.Po);
};
g.gd.prototype.Hi = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
g.Hf.register("field_label", g.gd);
g.kw = function (a, c, d, e) {
  if (a != g.Ee && !c)
    throw Error("Value inputs and statement inputs must have non-empty name.");
  this.type = a;
  this.name = c;
  this.J = d;
  this.connection = e;
  this.gb = [];
};
b = g.kw.prototype;
b.align = g.yq;
b.ji = !0;
b.W = function () {
  return this.J;
};
function P(a, c, d) {
  Lb(a, a.gb.length, c, d);
  return a;
}
function Lb(a, c, d, e) {
  if (0 > c || c > a.gb.length) throw Error("index " + c + " out of bounds.");
  if (!(d || ("" == d && e))) return c;
  "string" == typeof d && (d = new g.gd(d));
  d.Qu(a.J);
  a.J.qa && (d.Da(), d.$b());
  d.name = e;
  d.Lb(a.isVisible());
  e = d;
  e.uu && (c = Lb(a, c, e.uu));
  a.gb.splice(c, 0, d);
  ++c;
  e.Zu && (c = Lb(a, c, e.Zu));
  a.J.qa && ((a.J = a.J), a.J.Ha(), a.J.lc());
  return c;
}
b.isVisible = function () {
  return this.ji;
};
b.Lb = function (a) {
  if (this.ji != a) {
    this.ji = a;
    for (var c = 0, d; (d = this.gb[c]); c++) d.Lb(a);
    if (this.connection) {
      this.connection = this.connection;
      if (a) Mb(this.connection);
      else if (((c = this.connection), Nb(c, !1), c.ka))
        for (c = r(c.ra(), !1), d = 0; d < c.length; d++) {
          for (var e = c[d], f = e.$e(!0), h = 0; h < f.length; h++)
            Nb(f[h], !1);
          e = Pa(e);
          for (h = 0; h < e.length; h++) e[h].Lb(!1);
        }
      if ((c = this.connection.ra()))
        c.pa().style.display = a ? "block" : "none";
    }
  }
};
b.Jm = function () {
  for (var a = 0, c; (c = this.gb[a]); a++) c.Jm();
};
b.cd = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.cd(a);
  return this;
};
b.on = function (a) {
  if (!this.connection) throw Error("This input does not have a connection.");
  this.connection.on(a);
};
b.Ck = function () {
  if (!this.connection) throw Error("This input does not have a connection.");
  return this.connection.Ck();
};
b.Da = function () {
  if (this.J.B.qa) for (var a = 0; a < this.gb.length; a++) this.gb[a].Da();
};
b.L = function () {
  for (var a = 0, c; (c = this.gb[a]); a++) c.L();
  this.connection && this.connection.L();
  this.J = null;
};
g.fd = function (a, c, d) {
  if (g.Generator && "undefined" != typeof g.Generator.prototype[c])
    throw Error(
      'Block prototypeName "' +
        c +
        '" conflicts with Blockly.Generator members.'
    );
  this.id = d && !a.Yc(d) ? d : g.g.Kg();
  a.Ur[this.id] = this;
  this.Z = this.Y = this.O = null;
  this.T = [];
  this.Rg = void 0;
  this.disabled = !1;
  this.Ae = "";
  this.contextMenu = !0;
  this.Wf = null;
  this.Fg = [];
  this.uy = this.Gz = this.hm = !0;
  this.Ci = this.Ga = !1;
  this.Te = { text: null, Zz: !1, size: new g.g.Zd(160, 80) };
  this.YA = new g.g.K(0, 0);
  this.B = a;
  this.nc = a.Tf;
  this.M = a.M;
  this.Ok = !1;
  this.Nf = void 0;
  this.qa = null;
  if (c) {
    this.type = c;
    d = g.Ob[c];
    if (!d || "object" != typeof d) throw TypeError("Unknown block type: " + c);
    g.g.object.bf(this, d);
  }
  a.Jo(this);
  a.hh[this.type] || (a.hh[this.type] = []);
  a.hh[this.type].push(this);
  (a = g.h.ac()) || g.h.ea(!0);
  c = g.h.Qa;
  try {
    "function" == typeof this.Da && ((g.h.Qa = !1), this.Da(), (g.h.Qa = c)),
      g.h.isEnabled() && g.h.Ea(new g.h.Tn(this));
  } finally {
    a || g.h.ea(!1), (g.h.Qa = c);
  }
  this.zF = this.Rg;
  if ("function" == typeof this.onchange) {
    if ((a = this.onchange) && "function" != typeof a)
      throw Error("onchange must be a function.");
    this.Sm && ib(this.B, this.Sm);
    if ((this.onchange = a)) (this.Sm = a.bind(this)), K(this.B, this.Sm);
  }
};
g.fd.ol = "_TEMP_COLLAPSED_INPUT";
g.fd.Iq = "_TEMP_COLLAPSED_FIELD";
b = g.fd.prototype;
b.data = null;
b.Xe = !1;
b.ge = "#000000";
b.rj = null;
b.L = function (a) {
  if (this.B) {
    this.Sm && ib(this.B, this.Sm);
    x(this, a);
    g.h.isEnabled() && g.h.Ea(new g.h.lB(this));
    g.h.disable();
    try {
      if (this.B) {
        this.B.aq(this);
        var c = this.B;
        c.hh[this.type].splice(c.hh[this.type].indexOf(this), 1);
        c.hh[this.type].length || delete c.hh[this.type];
        delete this.B.Ur[this.id];
        this.B = null;
      }
      g.selected == this && (g.selected = null);
      for (var d = this.Fg.length - 1; 0 <= d; d--) this.Fg[d].L(!1);
      d = 0;
      for (var e; (e = this.T[d]); d++) e.L();
      this.T.length = 0;
      var f = this.$e(!0);
      d = 0;
      for (var h; (h = f[d]); d++) h.L();
    } finally {
      g.h.enable(), (this.Xe = !0);
    }
  }
};
b.Si = function () {
  for (var a = 0, c; (c = this.T[a]); a++)
    for (var d = 0, e; (e = c.gb[d]); d++) e.Si && e.Si();
};
function x(a, c) {
  if (a.O) {
    var d = null;
    a.O.isConnected() && ((d = a.O.ka), a.O.disconnect());
    if (d && c) {
      a: {
        c = null;
        for (var e = 0; e < a.T.length; e++) {
          var f = a.T[e].connection;
          if (f && f.type == g.rb && f.ka) {
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
        !c.ra().Ga &&
        ((c = c.ka),
        c.disconnect(),
        E(a.B.Zl, c, d, !1) ? d.connect(c) : c.Op(d));
    }
  } else
    a.Z &&
      ((d = null),
      a.Z.isConnected() && ((d = a.Z.ka), a.Z.disconnect()),
      (e = u(a)),
      c &&
        e &&
        !e.Ga &&
        ((c = a.Y.ka),
        c.disconnect(),
        d && E(a.B.Zl, d, c, !1) && d.connect(c)));
}
b.$e = function () {
  var a = [];
  this.O && a.push(this.O);
  this.Z && a.push(this.Z);
  this.Y && a.push(this.Y);
  for (var c = 0, d; (d = this.T[c]); c++) d.connection && a.push(d.connection);
  return a;
};
b.Bp = function () {
  for (var a = this.Y; a; ) {
    var c = a.ra();
    if (!c) return a;
    a = c.Y;
  }
  return null;
};
b.lc = function () {};
b.getParent = function () {
  return this.Wf;
};
function ka(a, c) {
  for (var d = 0, e; (e = a.T[d]); d++)
    if (e.connection && e.connection.ra() == c) return e;
  return null;
}
function Ob(a) {
  do {
    var c = a;
    a = a.getParent();
    if (!a) return null;
  } while (u(a) == c);
  return a;
}
function u(a) {
  return a.Y && a.Y.ra();
}
b.$c = function () {
  var a = this;
  do {
    var c = a;
    a = c.Wf;
  } while (a);
  return c;
};
function A(a, c) {
  if (!c) return a.Fg;
  c = [];
  for (var d = 0, e; (e = a.T[d]); d++)
    e.connection && (e = e.connection.ra()) && c.push(e);
  (a = u(a)) && c.push(a);
  return c;
}
b.hq = function (a) {
  if (a != this.Wf) {
    if (this.Wf) {
      g.g.Tl(this.Wf.Fg, this);
      if (this.Z && this.Z.isConnected())
        throw Error("Still connected to previous block.");
      if (this.O && this.O.isConnected())
        throw Error("Still connected to parent block.");
      this.Wf = null;
    } else this.B.aq(this);
    (this.Wf = a) ? a.Fg.push(this) : this.B.Jo(this);
  }
};
function r(a, c) {
  var d = [a];
  a = A(a, c);
  for (var e, f = 0; (e = a[f]); f++) d.push.apply(d, r(e, c));
  return d;
}
b.sd = function () {
  return this.hm && !this.Ga && !(this.B && this.B.options.readOnly);
};
b.Mc = function () {
  return this.Gz && !this.Ga && !(this.B && this.B.options.readOnly);
};
b.fq = function (a) {
  this.Gz = a;
};
b.Pu = function (a) {
  this.Ga = a;
};
b.pe = function () {
  return this.Ok;
};
b.rA = function (a) {
  this.Ok = a;
};
b.td = function () {
  return this.uy && !(this.B && this.B.options.readOnly);
};
b.Nu = function (a) {
  this.uy = a;
  a = 0;
  for (var c; (c = this.T[a]); a++)
    for (var d = 0, e; (e = c.gb[d]); d++) e.xj();
};
b.ct = function (a, c) {
  var d = this.$e(!0);
  a = a.$e(!0);
  if (d.length != a.length)
    throw Error("Connection lists did not match in length.");
  for (var e = 0; e < a.length; e++) if (a[e] == c) return d[e];
  return null;
};
b.ye = function (a) {
  this.Ae = a;
};
b.$s = function () {
  return this.ge;
};
b.Pd = function (a) {
  this.ge = g.g.Wp(a).ym;
};
b.bh = function (a) {
  this.rj = a;
};
function ia(a, c) {
  for (var d = 0, e; (e = a.T[d]); d++)
    for (var f = 0, h; (h = e.gb[f]); f++) if (h.name == c) return h;
  return null;
}
function qa(a) {
  for (var c = [], d = 0, e; (e = a.T[d]); d++)
    for (var f = 0, h; (h = e.gb[f]); f++)
      h.$p() && (h = a.B.Ng(h.getValue())) && c.push(h);
  return c;
}
function G(a, c) {
  return (a = ia(a, c)) ? a.getValue() : null;
}
b.nn = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.Z) {
      if (this.O)
        throw Error(
          "Remove output connection prior to adding previous connection."
        );
      this.Z = this.Im(g.Je);
    }
    this.Z.cd(c);
  } else if (this.Z) {
    if (this.Z.isConnected())
      throw Error(
        "Must disconnect previous statement before removing connection."
      );
    this.Z.L();
    this.Z = null;
  }
};
b.gq = function (a, c) {
  if (a)
    void 0 === c && (c = null),
      this.Y || (this.Y = this.Im(g.Ua)),
      this.Y.cd(c);
  else if (this.Y) {
    if (this.Y.isConnected())
      throw Error("Must disconnect next statement before removing connection.");
    this.Y.L();
    this.Y = null;
  }
};
b.mn = function (a, c) {
  if (a) {
    void 0 === c && (c = null);
    if (!this.O) {
      if (this.Z)
        throw Error(
          "Remove previous connection prior to adding output connection."
        );
      this.O = this.Im(g.Ie);
    }
    this.O.cd(c);
  } else if (this.O) {
    if (this.O.isConnected())
      throw Error("Must disconnect output value before removing connection.");
    this.O.L();
    this.O = null;
  }
};
b.$g = function (a) {
  this.Rg != a &&
    (g.h.Ea(new g.h.ih(this, "inline", null, this.Rg, a)), (this.Rg = a));
};
function Ha(a) {
  if (void 0 != a.Rg) return a.Rg;
  for (var c = 1; c < a.T.length; c++)
    if (a.T[c - 1].type == g.Ee && a.T[c].type == g.Ee) return !1;
  for (c = 1; c < a.T.length; c++)
    if (a.T[c - 1].type == g.rb && a.T[c].type == g.Ee) return !0;
  return !1;
}
b.isEnabled = function () {
  return !this.disabled;
};
b.Zf = function (a) {
  this.isEnabled() != a &&
    (g.h.Ea(new g.h.ih(this, "disabled", null, this.disabled, !a)),
    (this.disabled = !a));
};
function Pb(a) {
  for (a = Ob(a); a; ) {
    if (a.disabled) return !0;
    a = Ob(a);
  }
  return !1;
}
b.isCollapsed = function () {
  return this.Ci;
};
b.pj = function (a) {
  this.Ci != a &&
    (g.h.Ea(new g.h.ih(this, "collapsed", null, this.Ci, a)), (this.Ci = a));
};
b.toString = function (a, c) {
  function d(n) {
    var p = n.Bh;
    !p && n.ka && (p = n.ka.Bh);
    return !!p && (-1 != p.indexOf("Boolean") || -1 != p.indexOf("Number"));
  }
  function e() {
    k && k.Za() == l.Za() && k.xa == l.xa && (k = null);
  }
  var f = [];
  c = c || "?";
  var h = g.F.uh;
  g.F.uh = !0;
  for (var k = g.F.Bf(this), l = k; k; ) {
    switch (k.Za()) {
      case g.F.types.Ud:
        var m = k.xa;
        k.Qf() ? d(m) && f.push("(") : f.push(c);
        break;
      case g.F.types.Zb:
        (m = k.xa), m.name != g.fd.Iq && f.push(m.Hh());
    }
    m = k;
    k = m.Qf() || m.next();
    if (!k) {
      k = m.Uf();
      for (e(); k && !k.next(); )
        (k = k.Uf()),
          e(),
          k && k.Za() == g.F.types.Ud && d(k.xa) && f.push(")");
      k && (k = k.next());
    }
  }
  g.F.uh = h;
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
function Qb(a, c) {
  return a.Pe(g.rb, c);
}
function Rb(a, c) {
  var d = c.type ? 'Block "' + c.type + '": ' : "";
  if (c.output && c.previousStatement)
    throw Error(d + "Must not have both an output and a previousStatement.");
  c.style && c.style.Nf && ((a.Nf = c.style.Nf), (c.style = null));
  if (c.style && c.colour)
    throw Error(d + "Must not have both a colour and a style.");
  if (c.style) {
    var e = c.style;
    try {
      a.bh(e);
    } catch (ea) {
      console.warn(d + "Style does not exist: ", e);
    }
  } else if ("colour" in c)
    if (void 0 === c.colour) console.warn(d + "Undefined colour value.");
    else {
      e = c.colour;
      try {
        a.Pd(e);
      } catch (ea) {
        console.warn(d + "Illegal colour value: ", e);
      }
    }
  for (e = 0; void 0 !== c["message" + e]; ) {
    for (
      var f = a,
        h = c["args" + e] || [],
        k = c["lastDummyAlign" + e],
        l = d,
        m = g.g.LH(c["message" + e]),
        n = [],
        p = 0,
        q = [],
        t = 0;
      t < m.length;
      t++
    ) {
      var B = m[t];
      if ("number" == typeof B) {
        if (0 >= B || B > h.length)
          throw Error(
            'Block "' + f.type + '": Message index %' + B + " out of range."
          );
        if (n[B])
          throw Error(
            'Block "' + f.type + '": Message index %' + B + " duplicated."
          );
        n[B] = !0;
        p++;
        q.push(h[B - 1]);
      } else (B = B.trim()) && q.push(B);
    }
    if (p != h.length)
      throw Error(
        'Block "' +
          f.type +
          '": Message does not reference all ' +
          h.length +
          " arg(s)."
      );
    q.length &&
      ("string" == typeof q[q.length - 1] ||
        g.g.$a.startsWith(q[q.length - 1].type, "field_")) &&
      ((t = { type: "input_dummy" }), k && (t.align = k), q.push(t));
    k = { LEFT: g.yq, RIGHT: g.nv, CENTRE: g.xq, CENTER: g.xq };
    h = [];
    for (t = 0; t < q.length; t++)
      if (((n = q[t]), "string" == typeof n)) h.push([n, void 0]);
      else {
        m = p = null;
        do
          if (((B = !1), "string" == typeof n)) p = new g.gd(n);
          else
            switch (n.type) {
              case "input_value":
                m = Qb(f, n.name);
                break;
              case "input_statement":
                m = f.Pe(g.Ua, n.name);
                break;
              case "input_dummy":
                m = f.Pe(g.Ee, n.name || "");
                break;
              default:
                (p = g.Hf.aa(n)), !p && n.alt && ((n = n.alt), (B = !0));
            }
        while (B);
        if (p) h.push([p, n.name]);
        else if (m) {
          n.check && m.cd(n.check);
          n.align &&
            ((p = k[n.align.toUpperCase()]),
            void 0 === p
              ? console.warn(l + "Illegal align value: ", n.align)
              : ((n = m), (n.align = p), n.J.qa && ((n.J = n.J), n.J.Ha())));
          for (n = 0; n < h.length; n++) P(m, h[n][0], h[n][1]);
          h.length = 0;
        }
      }
    e++;
  }
  void 0 !== c.inputsInline && a.$g(c.inputsInline);
  void 0 !== c.output && a.mn(!0, c.output);
  void 0 !== c.previousStatement && a.nn(!0, c.previousStatement);
  void 0 !== c.nextStatement && a.gq(!0, c.nextStatement);
  void 0 !== c.tooltip && ((e = c.tooltip), (e = g.g.df(e)), a.ye(e));
  void 0 !== c.enableContextMenu &&
    ((e = c.enableContextMenu), (a.contextMenu = !!e));
  void 0 !== c.helpUrl && ((e = c.helpUrl), (e = g.g.df(e)), (a.Pg = e));
  "string" == typeof c.extensions &&
    (console.warn(
      d +
        "JSON attribute 'extensions' should be an array of strings. Found raw string in JSON for '" +
        c.type +
        "' block."
    ),
    (c.extensions = [c.extensions]));
  void 0 !== c.mutator && g.na.apply(c.mutator, a, !0);
  if (Array.isArray(c.extensions))
    for (c = c.extensions, d = 0; d < c.length; ++d) g.na.apply(c[d], a, !1);
}
b.bf = function (a, c) {
  if (void 0 !== c && "boolean" != typeof c)
    throw Error("opt_disableCheck must be a boolean if provided");
  if (!c) {
    c = [];
    for (var d in a) void 0 !== this[d] && c.push(d);
    if (c.length)
      throw Error("Mixin will overwrite block members: " + JSON.stringify(c));
  }
  g.g.object.bf(this, a);
};
b.Pe = function (a, c) {
  var d = null;
  if (a == g.rb || a == g.Ua) d = this.Im(a);
  a = new g.kw(a, c, this, d);
  this.T.push(a);
  return a;
};
b.lj = function (a, c) {
  for (var d = 0, e; (e = this.T[d]); d++)
    if (e.name == a) return e.L(), this.T.splice(d, 1), !0;
  if (c) return !1;
  throw Error("Input not found: " + a);
};
function y(a, c) {
  for (var d = 0, e; (e = a.T[d]); d++) if (e.name == c) return e;
  return null;
}
function Sb(a, c) {
  return (a = y(a, c)) && a.connection && a.connection.ra();
}
b.al = function (a) {
  this.Te.text != a &&
    (g.h.Ea(new g.h.ih(this, "comment", null, this.Te.text, a)),
    (this.Te.text = a));
};
b.sA = function () {};
b.Ta = function () {
  return this.YA;
};
b.moveBy = function (a, c) {
  if (this.Wf) throw Error("Block has parent.");
  var d = new g.h.ml(this);
  this.YA.translate(a, c);
  d.kj();
  g.h.Ea(d);
};
b.Im = function (a) {
  return new g.ta(this, a);
};
g.i = {};
g.i.bJ = function () {};
g.g.eb = {};
g.g.eb.bB = "aria-";
g.g.eb.gD = "role";
g.g.eb.zo = {
  WI: "grid",
  XI: "gridcell",
  YI: "group",
  BC: "listbox",
  NC: "menu",
  OC: "menuitem",
  oJ: "menuitemcheckbox",
  XC: "option",
  mK: "presentation",
  yr: "row",
  EK: "tree",
  FK: "treeitem",
};
g.g.eb.State = {
  ZA: "activedescendant",
  mI: "colcount",
  DB: "disabled",
  yI: "expanded",
  gw: "invalid",
  zC: "label",
  eJ: "labelledby",
  hJ: "level",
  fK: "orientation",
  lK: "posinset",
  rK: "rowcount",
  Bo: "selected",
  uK: "setsize",
  wD: "valuemax",
  xD: "valuemin",
};
g.g.eb.ci = function (a, c) {
  a.setAttribute(g.g.eb.gD, c);
};
g.g.eb.$f = function (a, c, d) {
  Array.isArray(d) && (d = d.join(" "));
  a.setAttribute(g.g.eb.bB + c, d);
};
g.g.P = {
  MK: 0,
  jJ: 3,
  eB: 8,
  qD: 9,
  uJ: 12,
  Oq: 13,
  ug: 16,
  jh: 17,
  Dj: 18,
  hK: 19,
  iI: 20,
  Pq: 27,
  kD: 32,
  aD: 33,
  $C: 34,
  MB: 35,
  jC: 36,
  yl: 37,
  bx: 38,
  Sj: 39,
  Nv: 40,
  kK: 43,
  nK: 44,
  fw: 45,
  oi: 46,
  ZERO: 48,
  ONE: 49,
  GK: 50,
  AK: 51,
  VI: 52,
  SI: 53,
  xK: 54,
  vK: 55,
  wI: 56,
  sJ: 57,
  QI: 59,
  NI: 61,
  MI: 173,
  OI: 163,
  oK: 63,
  dI: 64,
  mv: 65,
  fI: 66,
  Eq: 67,
  Iv: 68,
  E: 69,
  zI: 70,
  Gc: 71,
  ZI: 72,
  oC: 73,
  cJ: 74,
  yC: 75,
  dJ: 76,
  iJ: 77,
  rJ: 78,
  KJ: 79,
  gK: 80,
  Q: 81,
  pK: 82,
  Ow: 83,
  pD: 84,
  IK: 85,
  Kr: 86,
  lx: 87,
  Ho: 88,
  CD: 89,
  ck: 90,
  Nj: 91,
  NK: 92,
  pI: 93,
  JJ: 96,
  CJ: 97,
  IJ: 98,
  HJ: 99,
  yJ: 100,
  xJ: 101,
  GJ: 102,
  FJ: 103,
  wJ: 104,
  BJ: 105,
  AJ: 106,
  EJ: 107,
  zJ: 109,
  DJ: 110,
  vJ: 111,
  AI: 112,
  EI: 113,
  FI: 114,
  GI: 115,
  HI: 116,
  II: 117,
  JI: 118,
  KI: 119,
  LI: 120,
  BI: 121,
  CI: 122,
  DI: 123,
  tJ: 144,
  sK: 145,
  RI: 166,
  fJ: 183,
  tK: 186,
  rI: 189,
  xI: 187,
  oI: 188,
  iK: 190,
  yK: 191,
  cI: 192,
  BK: 192,
  wK: 222,
  LJ: 219,
  gI: 220,
  lI: 221,
  LK: 224,
  kJ: 224,
  lJ: 91,
  mJ: 93,
  KK: 229,
  JK: 252,
  jK: 255,
};
g.cr = function () {
  this.re = [];
  this.oj = this.mb = this.Pp = this.Jp = this.Ip = this.So = this.Kp = this.Kh = this.ju = null;
};
b = g.cr.prototype;
b.Ha = function (a) {
  var c = document.createElement("div");
  c.className = "blocklyMenu goog-menu blocklyNonSelectable";
  c.tabIndex = 0;
  this.oj && g.g.eb.ci(c, this.oj);
  this.mb = c;
  for (var d = 0, e; (e = this.re[d]); d++) c.appendChild(e.Va());
  this.Kp = g.Aa(c, "mouseover", this, this.oF, !0);
  this.So = g.Aa(c, "click", this, this.iF, !0);
  this.Ip = g.Aa(c, "mouseenter", this, this.mF, !0);
  this.Jp = g.Aa(c, "mouseleave", this, this.nF, !0);
  this.Pp = g.Aa(c, "keydown", this, this.kF);
  a.appendChild(c);
};
b.focus = function () {
  var a = this.mb;
  a && (a.focus({ preventScroll: !0 }), g.g.j.Hb(a, "blocklyFocused"));
};
b.ci = function (a) {
  this.oj = a;
};
b.L = function () {
  this.Kp && (g.ab(this.Kp), (this.Kp = null));
  this.So && (g.ab(this.So), (this.So = null));
  this.Ip && (g.ab(this.Ip), (this.Ip = null));
  this.Jp && (g.ab(this.Jp), (this.Jp = null));
  this.Pp && (g.ab(this.Pp), (this.Pp = null));
  for (var a = 0, c; (c = this.re[a]); a++) c.L();
  this.mb = null;
};
function Tb(a, c) {
  for (var d = a.mb; c && c != d; ) {
    if (g.g.j.nt(c, "blocklyMenuItem"))
      for (var e = 0, f; (f = a.re[e]); e++) if (f.mb == c) return f;
    c = c.parentElement;
  }
  return null;
}
b.ef = function (a) {
  var c = this.Kh;
  c && (c.ef(!1), (this.Kh = null));
  a &&
    (a.ef(!0),
    (this.Kh = a),
    (c = this.mb),
    g.g.style.qH(a.mb, c),
    g.g.eb.$f(c, g.g.eb.State.ZA, a.zb()));
};
function Ub(a) {
  var c = a.re.indexOf(a.Kh);
  Vb(a, 0 > c ? a.re.length : c, -1);
}
function Vb(a, c, d) {
  c += d;
  for (var e; (e = a.re[c]); ) {
    if (e.isEnabled()) {
      a.ef(e);
      break;
    }
    c += d;
  }
}
b.oF = function (a) {
  (a = Tb(this, a.target)) &&
    (a.isEnabled() ? this.Kh != a && this.ef(a) : this.ef(null));
};
b.iF = function (a) {
  var c = this.ju;
  this.ju = null;
  (c &&
    "number" == typeof a.clientX &&
    1 > g.g.K.Jg(c, new g.g.K(a.clientX, a.clientY))) ||
    ((a = Tb(this, a.target)) && a.isEnabled() && a.Sl && a.Sl(a));
};
b.mF = function () {
  this.focus();
};
b.nF = function () {
  if (this.mb) {
    var a = this.mb;
    a && (a.blur(), g.g.j.Ac(a, "blocklyFocused"));
    this.ef(null);
  }
};
b.kF = function (a) {
  if (this.re.length && !(a.shiftKey || a.ctrlKey || a.metaKey || a.altKey)) {
    var c = this.Kh;
    switch (a.keyCode) {
      case g.g.P.Oq:
      case g.g.P.kD:
        c && c.isEnabled() && c.Sl && c.Sl(c);
        break;
      case g.g.P.bx:
        Ub(this);
        break;
      case g.g.P.Nv:
        Vb(this, this.re.indexOf(this.Kh), 1);
        break;
      case g.g.P.aD:
      case g.g.P.jC:
        Vb(this, -1, 1);
        break;
      case g.g.P.$C:
      case g.g.P.MB:
        Vb(this, this.re.length, -1);
        break;
      default:
        return;
    }
    a.preventDefault();
    a.stopPropagation();
  }
};
b.Lg = function () {
  var a = this.mb,
    c = g.g.style.Lg(a);
  c.height = a.scrollHeight;
  return c;
};
g.dr = function (a, c) {
  this.Hg = a;
  this.ed = c;
  this.ip = !0;
  this.mb = null;
  this.Ku = !1;
  this.oj = null;
  this.gz = this.gs = this.fs = !1;
  this.Sl = null;
};
b = g.dr.prototype;
b.Va = function () {
  var a = document.createElement("div");
  a.id = g.g.wl.Ly();
  this.mb = a;
  a.className =
    "blocklyMenuItem goog-menuitem " +
    (this.ip ? "" : "blocklyMenuItemDisabled goog-menuitem-disabled ") +
    (this.gs ? "blocklyMenuItemSelected goog-option-selected " : "") +
    (this.gz ? "blocklyMenuItemHighlight goog-menuitem-highlight " : "") +
    (this.Ku ? "blocklyMenuItemRtl goog-menuitem-rtl " : "");
  var c = document.createElement("div");
  c.className = "blocklyMenuItemContent goog-menuitem-content";
  if (this.fs) {
    var d = document.createElement("div");
    d.className = "blocklyMenuItemCheckbox goog-menuitem-checkbox";
    c.appendChild(d);
  }
  d = this.Hg;
  "string" == typeof this.Hg && (d = document.createTextNode(this.Hg));
  c.appendChild(d);
  a.appendChild(c);
  this.oj && g.g.eb.ci(a, this.oj);
  g.g.eb.$f(a, g.g.eb.State.Bo, (this.fs && this.gs) || !1);
  g.g.eb.$f(a, g.g.eb.State.DB, !this.ip);
  return a;
};
b.L = function () {
  this.mb = null;
};
b.zb = function () {
  return this.mb.id;
};
b.getValue = function () {
  return this.ed;
};
b.ci = function (a) {
  this.oj = a;
};
b.ef = function (a) {
  this.gz = a;
  var c = this.mb;
  c &&
    this.isEnabled() &&
    (a
      ? (g.g.j.Hb(c, "blocklyMenuItemHighlight"),
        g.g.j.Hb(c, "goog-menuitem-highlight"))
      : (g.g.j.Ac(c, "blocklyMenuItemHighlight"),
        g.g.j.Ac(c, "goog-menuitem-highlight")));
};
b.isEnabled = function () {
  return this.ip;
};
b.Zf = function (a) {
  this.ip = a;
};
function Wb(a, c, d) {
  a.Sl = c.bind(d);
}
g.Xa = {};
g.Xa.ap = null;
g.Xa.oc = null;
g.Xa.show = function (a, c, d) {
  g.X.show(g.Xa, d, g.Xa.L);
  if (c.length) {
    var e = g.Xa.wG(c, d);
    g.Xa.oc = e;
    g.Xa.yG(e, a, d);
    setTimeout(function () {
      e.focus();
    }, 1);
    g.Xa.ap = null;
  } else g.Xa.Fa();
};
g.Xa.wG = function (a, c) {
  var d = new g.cr();
  d.ci(g.g.eb.zo.NC);
  for (var e = 0, f; (f = a[e]); e++) {
    var h = new g.dr(f.text);
    h.Ku = c;
    h.ci(g.g.eb.zo.OC);
    d.re.push(h);
    h.Zf(f.enabled);
    f.enabled &&
      Wb(
        h,
        function () {
          g.Xa.Fa();
          this.Ca(this.scope);
        },
        f
      );
  }
  return d;
};
g.Xa.yG = function (a, c, d) {
  var e = g.g.gF();
  c = new g.g.Rect(
    c.clientY + e.top,
    c.clientY + e.top,
    c.clientX + e.left,
    c.clientX + e.left
  );
  g.Xa.lE(a);
  var f = a.Lg();
  d &&
    ((c.left += f.width),
    (c.right += f.width),
    (e.left += f.width),
    (e.right += f.width));
  g.X.xG(e, c, f, d);
  a.focus();
};
g.Xa.lE = function (a) {
  a.Ha(g.X.Ya);
  var c = a.mb;
  g.g.j.Hb(c, "blocklyContextMenu");
  g.Aa(c, "contextmenu", null, g.g.eG);
  a.focus();
};
g.Xa.Fa = function () {
  g.X.Gk(g.Xa);
  g.Xa.ap = null;
};
g.Xa.L = function () {
  g.Xa.oc && (g.Xa.oc.L(), (g.Xa.oc = null));
};
g.Xa.RK = function (a, c) {
  return function () {
    g.h.disable();
    try {
      var d = g.R.wk(c, a.B),
        e = a.Ta();
      e.x = a.M ? e.x - g.Cd : e.x + g.Cd;
      e.y += 2 * g.Cd;
      d.moveBy(e.x, e.y);
    } finally {
      g.h.enable();
    }
    g.h.isEnabled() && !d.Ga && g.h.Ea(new g.h.Tn(d));
    d.select();
  };
};
g.Xa.UK = function (a) {
  return {
    text: g.m.REMOVE_COMMENT,
    enabled: !0,
    Ca: function () {
      g.h.ea(!0);
      a.L(!0, !0);
      g.h.ea(!1);
    },
  };
};
g.Xa.VK = function (a) {
  return {
    text: g.m.DUPLICATE_COMMENT,
    enabled: !0,
    Ca: function () {
      g.duplicate(a);
    },
  };
};
g.Xa.TL = function (a, c) {
  if (!g.bk) throw Error("Missing require for Blockly.WorkspaceCommentSvg");
  var d = { enabled: !g.g.userAgent.Fe };
  d.text = g.m.ADD_COMMENT;
  d.Ca = function () {
    var e = new g.bk(a, g.m.WORKSPACE_COMMENT_DEFAULT_TEXT, g.bk.CB, g.bk.CB),
      f = aa(a).getBoundingClientRect();
    f = new g.g.K(c.clientX - f.left, c.clientY - f.top);
    var h = g.g.um(a.vb);
    f = g.g.K.jm(f, h);
    f.scale(1 / a.scale);
    e.moveBy(f.x, f.y);
    a.qa && (e.Rf(), e.Ha(), e.select());
  };
  return d;
};
g.ua = {};
g.ua.Cu = function () {
  g.Ka.D.register({
    Wc: function () {
      return g.m.UNDO;
    },
    Na: function (a) {
      return 0 < a.B.wj.length ? "enabled" : "disabled";
    },
    Ca: function (a) {
      hb(a.B, !1);
    },
    Od: g.Ka.Sc.kc,
    id: "undoWorkspace",
    weight: 1,
  });
};
g.ua.Bu = function () {
  g.Ka.D.register({
    Wc: function () {
      return g.m.REDO;
    },
    Na: function (a) {
      return 0 < a.B.cn.length ? "enabled" : "disabled";
    },
    Ca: function (a) {
      hb(a.B, !0);
    },
    Od: g.Ka.Sc.kc,
    id: "redoWorkspace",
    weight: 2,
  });
};
g.ua.CG = function () {
  g.Ka.D.register({
    Wc: function () {
      return g.m.CLEAN_UP;
    },
    Na: function (a) {
      return a.B.Mc()
        ? 1 < a.B.tb(!1).length
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    Ca: function (a) {
      a = a.B;
      a.rc(!1);
      g.h.ea(!0);
      for (var c = a.tb(!0), d = 0, e = 0, f; (f = c[e]); e++)
        if (f.Mc()) {
          var h = f.Ta();
          f.moveBy(-h.x, d - h.y);
          Xb(f);
          d = f.Ta().y + H(f).height + a.ub.$().Al;
        }
      g.h.ea(!1);
      a.rc(!0);
    },
    Od: g.Ka.Sc.kc,
    id: "cleanWorkspace",
    weight: 3,
  });
};
g.ua.GA = function (a, c) {
  for (var d = 0, e = 0; e < c.length; e++)
    for (var f = c[e]; f; )
      setTimeout(f.pj.bind(f, a), d), (f = u(f)), (d += 10);
};
g.ua.DG = function () {
  g.Ka.D.register({
    Wc: function () {
      return g.m.COLLAPSE_ALL;
    },
    Na: function (a) {
      if (a.B.options.collapse) {
        a = a.B.tb(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (!d.isCollapsed()) return "enabled";
            d = u(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    Ca: function (a) {
      g.ua.GA(!0, a.B.tb(!0));
    },
    Od: g.Ka.Sc.kc,
    id: "collapseWorkspace",
    weight: 4,
  });
};
g.ua.QG = function () {
  g.Ka.D.register({
    Wc: function () {
      return g.m.EXPAND_ALL;
    },
    Na: function (a) {
      if (a.B.options.collapse) {
        a = a.B.tb(!1);
        for (var c = 0; c < a.length; c++)
          for (var d = a[c]; d; ) {
            if (d.isCollapsed()) return "enabled";
            d = u(d);
          }
        return "disabled";
      }
      return "hidden";
    },
    Ca: function (a) {
      g.ua.GA(!1, a.B.tb(!0));
    },
    Od: g.Ka.Sc.kc,
    id: "expandWorkspace",
    weight: 5,
  });
};
g.ua.xx = function (a, c) {
  if (a.sd()) Array.prototype.push.apply(c, r(a, !1));
  else {
    a = A(a, !1);
    for (var d = 0; d < a.length; d++) g.ua.xx(a[d], c);
  }
};
g.ua.at = function (a) {
  var c = [];
  a = a.tb(!0);
  for (var d = 0; d < a.length; d++) g.ua.xx(a[d], c);
  return c;
};
g.ua.bp = function (a, c) {
  g.h.ea(c);
  var d = a.shift();
  d && (d.B ? (d.L(!1, !0), setTimeout(g.ua.bp, 10, a, c)) : g.ua.bp(a, c));
  g.h.ea(!1);
};
g.ua.KG = function () {
  g.Ka.D.register({
    Wc: function (a) {
      if (a.B)
        return (
          (a = g.ua.at(a.B).length),
          1 == a
            ? g.m.DELETE_BLOCK
            : g.m.DELETE_X_BLOCKS.replace("%1", String(a))
        );
    },
    Na: function (a) {
      if (a.B) return 0 < g.ua.at(a.B).length ? "enabled" : "disabled";
    },
    Ca: function (a) {
      if (a.B) {
        Yb(a.B);
        var c = g.ua.at(a.B),
          d = g.g.Kg();
        2 > c.length
          ? g.ua.bp(c, d)
          : g.confirm(
              g.m.DELETE_ALL_BLOCKS.replace("%1", c.length),
              function (e) {
                e && g.ua.bp(c, d);
              }
            );
      }
    },
    Od: g.Ka.Sc.kc,
    id: "workspaceDelete",
    weight: 6,
  });
};
g.ua.iH = function () {
  g.ua.Cu();
  g.ua.Bu();
  g.ua.CG();
  g.ua.DG();
  g.ua.QG();
  g.ua.KG();
};
g.ua.NG = function () {
  g.Ka.D.register({
    Wc: function () {
      return g.m.DUPLICATE_BLOCK;
    },
    Na: function (a) {
      a = a.block;
      return !a.nc && a.sd() && a.Mc()
        ? (gb(a.B) ? fb(a.B, g.g.Xs(a, !0)) : 1)
          ? "enabled"
          : "disabled"
        : "hidden";
    },
    Ca: function (a) {
      a.block && g.duplicate(a.block);
    },
    Od: g.Ka.Sc.Nb,
    id: "blockDuplicate",
    weight: 1,
  });
};
g.ua.FG = function () {
  g.Ka.D.register({
    Wc: function (a) {
      return a.block.Se ? g.m.REMOVE_COMMENT : g.m.ADD_COMMENT;
    },
    Na: function (a) {
      a = a.block;
      return g.g.userAgent.Fe ||
        a.nc ||
        !a.B.options.aE ||
        a.isCollapsed() ||
        !a.td()
        ? "hidden"
        : "enabled";
    },
    Ca: function (a) {
      a = a.block;
      a.Se ? a.al(null) : a.al("");
    },
    Od: g.Ka.Sc.Nb,
    id: "blockComment",
    weight: 2,
  });
};
g.ua.UG = function () {
  g.Ka.D.register({
    Wc: function (a) {
      return Ha(a.block) ? g.m.EXTERNAL_INPUTS : g.m.INLINE_INPUTS;
    },
    Na: function (a) {
      a = a.block;
      if (!a.nc && a.Mc() && !a.isCollapsed())
        for (var c = 1; c < a.T.length; c++)
          if (a.T[c - 1].type != g.Ua && a.T[c].type != g.Ua) return "enabled";
      return "hidden";
    },
    Ca: function (a) {
      a.block.$g(!Ha(a.block));
    },
    Od: g.Ka.Sc.Nb,
    id: "blockInline",
    weight: 3,
  });
};
g.ua.EG = function () {
  g.Ka.D.register({
    Wc: function (a) {
      return a.block.isCollapsed() ? g.m.EXPAND_BLOCK : g.m.COLLAPSE_BLOCK;
    },
    Na: function (a) {
      a = a.block;
      return !a.nc && a.Mc() ? "enabled" : "hidden";
    },
    Ca: function (a) {
      a.block.pj(!a.block.isCollapsed());
    },
    Od: g.Ka.Sc.Nb,
    id: "blockCollapseExpand",
    weight: 4,
  });
};
g.ua.LG = function () {
  g.Ka.D.register({
    Wc: function (a) {
      return a.block.isEnabled() ? g.m.DISABLE_BLOCK : g.m.ENABLE_BLOCK;
    },
    Na: function (a) {
      a = a.block;
      return !a.nc && a.B.options.disable && a.td()
        ? Pb(a)
          ? "disabled"
          : "enabled"
        : "hidden";
    },
    Ca: function (a) {
      a = a.block;
      var c = g.h.ac();
      c || g.h.ea(!0);
      a.Zf(!a.isEnabled());
      c || g.h.ea(!1);
    },
    Od: g.Ka.Sc.Nb,
    id: "blockDisable",
    weight: 5,
  });
};
g.ua.zu = function () {
  g.Ka.D.register({
    Wc: function (a) {
      var c = a.block;
      a = r(c, !1).length;
      (c = u(c)) && (a -= r(c, !1).length);
      return 1 == a
        ? g.m.DELETE_BLOCK
        : g.m.DELETE_X_BLOCKS.replace("%1", String(a));
    },
    Na: function (a) {
      return !a.block.nc && a.block.sd() ? "enabled" : "hidden";
    },
    Ca: function (a) {
      g.h.ea(!0);
      a.block.L(!0, !0);
      g.h.ea(!1);
    },
    Od: g.Ka.Sc.Nb,
    id: "blockDelete",
    weight: 6,
  });
};
g.ua.SG = function () {
  g.Ka.D.register({
    Wc: function () {
      return g.m.HELP;
    },
    Na: function (a) {
      a = a.block;
      return ("function" == typeof a.Pg ? a.Pg() : a.Pg) ? "enabled" : "hidden";
    },
    Ca: function (a) {
      a.block.showHelp();
    },
    Od: g.Ka.Sc.Nb,
    id: "blockHelp",
    weight: 7,
  });
};
g.ua.BG = function () {
  g.ua.NG();
  g.ua.FG();
  g.ua.UG();
  g.ua.EG();
  g.ua.LG();
  g.ua.zu();
  g.ua.SG();
};
g.ua.IG = function () {
  g.ua.iH();
  g.ua.BG();
};
g.Ka = function () {
  g.Ka.D = this;
  this.Nd = {};
  g.ua.IG();
};
g.Ka.Sc = { Nb: "block", kc: "workspace" };
g.Ka.D = null;
g.Ka.prototype.register = function (a) {
  if (this.Nd[a.id])
    throw Error('Menu item with id "' + a.id + '" is already registered.');
  this.Nd[a.id] = a;
};
g.Ka.prototype.unregister = function (a) {
  if (this.Nd[a]) delete this.Nd[a];
  else throw Error('Menu item with id "' + a + '" not found.');
};
g.Ka.prototype.getItem = function (a) {
  return this.Nd[a] ? this.Nd[a] : null;
};
function Zb(a, c) {
  var d = [],
    e = g.Ka.D.Nd;
  Object.keys(e).forEach(function (f) {
    f = e[f];
    if (a == f.Od) {
      var h = f.Na(c);
      "hidden" != h &&
        ((f = {
          text: "function" == typeof f.Wc ? f.Wc(c) : f.Wc,
          enabled: "enabled" == h,
          Ca: f.Ca,
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
new g.Ka();
g.h.sf = function (a, c, d) {
  g.h.sf.A.constructor.call(this, d);
  this.Lz = a;
  this.Iz = c;
};
g.g.object.V(g.h.sf, g.h.$d);
g.h.sf.prototype.type = g.h.Bo;
g.h.sf.prototype.sa = function () {
  var a = g.h.sf.A.sa.call(this);
  a.oldElementId = this.Lz;
  a.newElementId = this.Iz;
  return a;
};
g.h.sf.prototype.aa = function (a) {
  g.h.sf.A.aa.call(this, a);
  this.Lz = a.oldElementId;
  this.Iz = a.newElementId;
};
g.D.register(g.D.ba.Pb, g.h.Bo, g.h.sf);
g.Wb = function (a, c) {
  g.Wb.A.constructor.call(this, a, c);
  this.Df = a.B.$o[c];
  this.Zx = a.B.$o[g.Pj[c]];
  this.hj = new g.g.K(0, 0);
  this.gh = g.Wb.uf.nx;
  this.ka = null;
};
g.g.object.V(g.Wb, g.ta);
g.Wb.uf = { nx: -1, ax: 0, ak: 1 };
b = g.Wb.prototype;
b.L = function () {
  g.Wb.A.L.call(this);
  this.gh == g.Wb.uf.ak && $b(this.Df, this, this.y);
};
b.W = function () {
  return g.Wb.A.W.call(this);
};
b.ra = function () {
  return g.Wb.A.ra.call(this);
};
function ab(a, c) {
  var d = a.x - c.x;
  a = a.y - c.y;
  return Math.sqrt(d * d + a * a);
}
function tb(a, c) {
  if (!a.J.B.Lc()) {
    var d = a.J.$c();
    if (!d.nc) {
      var e = !1;
      if (!d.Mc()) {
        d = c.W().$c();
        if (!d.Mc()) return;
        c = a;
        e = !0;
      }
      var f = g.selected == d;
      f || d.Io();
      var h = c.x + g.Cd + Math.floor(Math.random() * g.Dq) - a.x,
        k = c.y + g.Cd + Math.floor(Math.random() * g.Dq) - a.y;
      e && (k = -k);
      d.M && (h = c.x - g.Cd - Math.floor(Math.random() * g.Dq) - a.x);
      d.moveBy(h, k);
      f || d.dn();
    }
  }
}
b.moveTo = function (a, c) {
  if (this.gh == g.Wb.uf.nx) {
    var d = this.Df;
    d.Sb.splice(ac(d, c), 0, this);
    this.gh = g.Wb.uf.ak;
  } else
    this.gh == g.Wb.uf.ak &&
      ($b(this.Df, this, this.y),
      (d = this.Df),
      d.Sb.splice(ac(d, c), 0, this));
  this.x = a;
  this.y = c;
};
b.moveBy = function (a, c) {
  this.moveTo(this.x + a, this.y + c);
};
function bc(a, c) {
  a.moveTo(c.x + a.hj.x, c.y + a.hj.y);
}
function Q(a, c, d) {
  a.hj.x = c;
  a.hj.y = d;
}
function cc(a) {
  var c = a.ka.x - a.x,
    d = a.ka.y - a.y;
  if (0 != c || 0 != d) {
    a = a.ra();
    var e = a.pa();
    if (!e) throw Error("block is not rendered.");
    e = g.g.le(e);
    a.pa().setAttribute(
      "transform",
      "translate(" + (e.x - c) + "," + (e.y - d) + ")"
    );
    Va(a, -c, -d);
  }
}
b.closest = function (a, c) {
  var d = this.Zx;
  if (d.Sb.length) {
    var e = this.y,
      f = this.x;
    this.x = f + c.x;
    this.y = e + c.y;
    var h = ac(d, this.y);
    c = null;
    for (var k = a, l, m = h - 1; 0 <= m && Math.abs(d.Sb[m].y - this.y) <= a; )
      (l = d.Sb[m]),
        E(d.Qx, this, l, !0, k) && ((c = l), (k = ab(l, this))),
        m--;
    for (; h < d.Sb.length && Math.abs(d.Sb[h].y - this.y) <= a; )
      (l = d.Sb[h]),
        E(d.Qx, this, l, !0, k) && ((c = l), (k = ab(l, this))),
        h++;
    this.x = f;
    this.y = e;
    a = { connection: c, Zp: k };
  } else a = { connection: null, Zp: a };
  return a;
};
function Nb(a, c) {
  (c && a.gh == g.Wb.uf.ak) ||
    (!c && a.gh == g.Wb.uf.ax) ||
    a.J.nc ||
    (c
      ? ((c = a.Df), c.Sb.splice(ac(c, a.y), 0, a), (a.gh = g.Wb.uf.ak))
      : (a.gh == g.Wb.uf.ak && $b(a.Df, a, a.y), (a.gh = g.Wb.uf.ax)));
}
function Mb(a) {
  Nb(a, !0);
  var c = [];
  if (a.type != g.rb && a.type != g.Ua) return c;
  if ((a = a.ra())) {
    if (a.isCollapsed()) {
      var d = [];
      a.O && d.push(a.O);
      a.Y && d.push(a.Y);
      a.Z && d.push(a.Z);
    } else d = a.$e(!0);
    for (var e = 0; e < d.length; e++) c.push.apply(c, Mb(d[e]));
    c.length || (c[0] = a);
  }
  return c;
}
b.Op = function (a) {
  tb(this, a);
};
b.Bs = function (a, c) {
  g.Wb.A.Bs.call(this, a, c);
  a.qa && a.Ha();
  c.qa && (oa(c), c.Ha(), (c.pa().style.display = "block"));
};
b.fn = function () {
  g.Wb.A.fn.call(this);
  var a = this.ra();
  a && (a.Rf(), a.Ha(!1), (a = this.W()), a.qa && a.Ha());
};
b.Hz = function (a) {
  return dc(this.Zx, this, a);
};
b.Ue = function (a) {
  g.Wb.A.Ue.call(this, a);
  var c = this.W();
  a = a.W();
  var d = c.qa,
    e = a.qa;
  d && oa(c);
  e && oa(a);
  d && e && (this.type == g.Ua || this.type == g.Je ? a.Ha() : c.Ha());
  if ((c = ka(c, a)))
    (c = c.isVisible()), (a.pa().style.display = c ? "block" : "none");
};
b.Tz = function () {
  !this.isConnected() ||
    (this.ka && E(Ga(this), this, this.ka, !1)) ||
    (x(F(this) ? this.ra() : this.J), this.J.lc());
};
g.Cl = function () {
  this.od = this.Wa = this.Cb = null;
  this.type = "marker";
};
function M(a, c) {
  var d = a.Wa;
  a.Wa = c;
  a.od && a.od.draw(d, a.Wa);
}
g.Cl.prototype.draw = function () {
  this.od && this.od.draw(this.Wa, this.Wa);
};
g.Cl.prototype.Fa = function () {
  this.od && this.od.Fa();
};
g.Cl.prototype.L = function () {
  this.od && this.od.L();
};
g.Ij = function () {
  g.Ij.A.constructor.call(this);
  this.type = "cursor";
};
g.g.object.V(g.Ij, g.Cl);
b = g.Ij.prototype;
b.next = function () {
  var a = this.Wa;
  if (!a) return null;
  for (
    a = a.next();
    a && a.next() && (a.Za() == g.F.types.jd || a.Za() == g.F.types.Nb);

  )
    a = a.next();
  a && M(this, a);
  return a;
};
b.Qf = function () {
  var a = this.Wa;
  if (!a) return null;
  if (a.Za() == g.F.types.ld || a.Za() == g.F.types.xi) a = a.next();
  (a = a.Qf()) && M(this, a);
  return a;
};
b.we = function () {
  var a = this.Wa;
  if (!a) return null;
  for (
    a = a.we();
    a && a.we() && (a.Za() == g.F.types.jd || a.Za() == g.F.types.Nb);

  )
    a = a.we();
  a && M(this, a);
  return a;
};
b.Uf = function () {
  var a = this.Wa;
  if (!a) return null;
  (a = a.Uf()) && a.Za() == g.F.types.Nb && (a = a.we() || a);
  a && M(this, a);
  return a;
};
b.Tb = function (a) {
  if (this.Wa && this.Wa.Za() === g.F.types.Zb && this.Wa.xa.Tb(a)) return !0;
  switch (a.name) {
    case g.navigation.Gb.ld:
      return this.we(), !0;
    case g.navigation.Gb.Bw:
      return this.Uf(), !0;
    case g.navigation.Gb.jd:
      return this.next(), !0;
    case g.navigation.Gb.cw:
      return this.Qf(), !0;
    default:
      return !1;
  }
};
g.Sn = function () {
  g.Sn.A.constructor.call(this);
};
g.g.object.V(g.Sn, g.Ij);
b = g.Sn.prototype;
b.next = function () {
  var a = this.Wa;
  if (!a) return null;
  (a = ec(this, a, this.gv)) && M(this, a);
  return a;
};
b.Qf = function () {
  return this.next();
};
b.we = function () {
  var a = this.Wa;
  if (!a) return null;
  (a = fc(this, a, this.gv)) && M(this, a);
  return a;
};
b.Uf = function () {
  return this.we();
};
function ec(a, c, d) {
  if (!c) return null;
  var e = c.Qf() || c.next();
  if (d(e)) return e;
  if (e) return ec(a, e, d);
  c = gc(a, c.Uf());
  return d(c) ? c : c ? ec(a, c, d) : null;
}
function fc(a, c, d) {
  if (!c) return null;
  var e = c.we();
  e = e ? hc(a, e) : c.Uf();
  return d(e) ? e : e ? fc(a, e, d) : null;
}
b.gv = function (a) {
  var c = !1;
  a = a && a.Za();
  if (
    a == g.F.types.xi ||
    a == g.F.types.Ud ||
    a == g.F.types.Zb ||
    a == g.F.types.jd ||
    a == g.F.types.ld ||
    a == g.F.types.kc
  )
    c = !0;
  return c;
};
function gc(a, c) {
  if (!c) return null;
  var d = c.next();
  return d ? d : gc(a, c.Uf());
}
function hc(a, c) {
  if (!c.Qf()) return c;
  for (c = c.Qf(); c.next(); ) c = c.next();
  return hc(a, c);
}
g.Go = function () {
  g.Go.A.constructor.call(this);
};
g.g.object.V(g.Go, g.Sn);
g.Go.prototype.gv = function (a) {
  var c = !1,
    d = a && a.Za();
  a && ((a = a.xa), d == g.F.types.Zb && a && a.rz() && D(a) && (c = !0));
  return c;
};
g.kb = function (a, c, d) {
  this.S = g.g.j.N(g.g.H.Gc, {}, null);
  this.S.Cn = "";
  this.style = ic(a.ub.$(), null);
  this.Db = a.ub.Az(this.S, this.style);
  this.Fu = this.qa = !1;
  this.B = a;
  this.Z = this.Y = this.O = null;
  this.In = g.g.Ui() && !!a.Dd;
  var e = this.Db.Mb;
  e.Ae = this;
  g.I.gk(e);
  g.kb.A.constructor.call(this, a, c, d);
  this.S.dataset
    ? (this.S.dataset.id = this.id)
    : g.g.userAgent.Fe && this.S.setAttribute("data-id", this.id);
};
g.g.object.V(g.kb, g.fd);
g.kb.prototype.height = 0;
g.kb.prototype.width = 0;
g.kb.prototype.uq = null;
g.kb.aJ = -1;
g.kb.nI = "TEMP_COLLAPSED_WARNING_";
b = g.kb.prototype;
b.Rf = function () {
  if (!this.B.qa) throw TypeError("Workspace is headless.");
  for (var a = 0, c; (c = this.T[a]); a++) c.Da();
  c = Pa(this);
  for (a = 0; a < c.length; a++) jc(c[a]);
  this.$b();
  I(this.Db, "blocklyDraggable", this.Mc());
  a = this.pa();
  this.B.options.readOnly ||
    this.GE ||
    !a ||
    g.Aa(a, "mousedown", this, this.Uh);
  this.GE = !0;
  a.parentNode || this.B.vb.appendChild(a);
};
b.select = function () {
  if (this.Ga && this.getParent()) this.getParent().select();
  else if (g.selected != this) {
    var a = null;
    if (g.selected) {
      a = g.selected.id;
      g.h.disable();
      try {
        rb(g.selected);
      } finally {
        g.h.enable();
      }
    }
    a = new g.h.sf(a, this.id, this.B.id);
    g.h.Ea(a);
    g.selected = this;
    this.Io();
  }
};
function rb(a) {
  if (g.selected == a) {
    var c = new g.h.sf(a.id, null, a.B.id);
    c.ic = a.B.id;
    g.h.Ea(c);
    g.selected = null;
    a.dn();
  }
}
b.ud = null;
b.Se = null;
b.SA = null;
function Pa(a) {
  var c = [];
  a.ud && c.push(a.ud);
  a.Se && c.push(a.Se);
  a.SA && c.push(a.SA);
  return c;
}
b.hq = function (a) {
  var c = this.Wf;
  if (a != c) {
    g.g.j.tn();
    g.kb.A.hq.call(this, a);
    g.g.j.un();
    var d = this.pa();
    if (!this.B.yt && d) {
      var e = this.Ta();
      a
        ? (a.pa().appendChild(d),
          (a = this.Ta()),
          Va(this, a.x - e.x, a.y - e.y))
        : c && (this.B.vb.appendChild(d), this.translate(e.x, e.y));
      this.$b();
    }
  }
};
b.Ta = function () {
  var a = 0,
    c = 0,
    d = this.In ? this.B.Dd.ac() : null,
    e = this.pa();
  if (e) {
    do {
      var f = g.g.le(e);
      a += f.x;
      c += f.y;
      this.In &&
        this.B.Dd.Ef.firstChild == e &&
        ((f = this.B.Dd.gt()), (a += f.x), (c += f.y));
      e = e.parentNode;
    } while (e && e != this.B.vb && e != d);
  }
  return new g.g.K(a, c);
};
b.moveBy = function (a, c) {
  if (this.Wf) throw Error("Block has parent.");
  var d = g.h.isEnabled();
  if (d) var e = new g.h.ml(this);
  var f = this.Ta();
  this.translate(f.x + a, f.y + c);
  Va(this, a, c);
  d && (e.kj(), g.h.Ea(e));
  pa(this.B);
};
b.translate = function (a, c) {
  this.pa().setAttribute("transform", "translate(" + a + "," + c + ")");
};
b.moveTo = function (a) {
  var c = this.Ta();
  this.moveBy(a.x - c.x, a.y - c.y);
};
b.Vt = function (a) {
  this.In
    ? this.B.Dd.vj(a.x, a.y)
    : ((this.S.Cn = "translate(" + a.x + "," + a.y + ")"),
      this.S.setAttribute("transform", this.S.Cn + this.S.sn));
};
function Xb(a) {
  if (a.B && !a.B.Lc() && !a.getParent() && !a.nc) {
    var c = a.B.me;
    if (c && c.zH) {
      var d = c.Vu,
        e = d / 2,
        f = a.Ta();
      c = Math.round((f.x - e) / d) * d + e - f.x;
      d = Math.round((f.y - e) / d) * d + e - f.y;
      c = Math.round(c);
      d = Math.round(d);
      (0 == c && 0 == d) || a.moveBy(c, d);
    }
  }
}
function kc(a) {
  var c = a.Ta(),
    d = H(a);
  if (a.M) {
    a = c.x - d.width;
    var e = c.x;
  } else (a = c.x), (e = c.x + d.width);
  return new g.g.Rect(c.y, c.y + d.height, a, e);
}
b.Jm = function () {
  this.Db.mk = this.B.ub.$();
  for (var a = 0, c; (c = this.T[a]); a++) c.Jm();
};
b.pj = function (a) {
  this.Ci != a &&
    (g.kb.A.pj.call(this, a), a ? this.qa && this.Ha() : lc(this));
};
function lc(a) {
  for (var c = a.isCollapsed(), d = 0, e; (e = a.T[d]); d++)
    e.name != g.fd.ol && e.Lb(!c);
  if (c) {
    e = Pa(a);
    for (d = 0; (c = e[d]); d++) c.Lb(!1);
    d = a.toString(g.nB);
    (e = ia(a, g.fd.Iq))
      ? e.setValue(d)
      : ((e = y(a, g.fd.ol) || a.Pe(g.Ee, g.fd.ol || "")),
        P(e, new g.gd(d), g.fd.Iq));
  } else a.lj(g.fd.ol);
}
b.Uh = function (a) {
  var c = this.B && this.B.Gh(a);
  if (c) {
    if (c.Ni)
      throw Error(
        "Tried to call gesture.handleBlockStart, but the gesture had already been started."
      );
    Bb(c, this);
    c.se = a;
  }
};
b.showHelp = function () {
  var a = "function" == typeof this.Pg ? this.Pg() : this.Pg;
  a && window.open(a);
};
b.qn = function (a) {
  if (this.B.options.readOnly || !this.contextMenu) var c = null;
  else (c = Zb(g.Ka.Sc.Nb, { block: this })), this.mE && this.mE(c);
  c && c.length && (g.Xa.show(a, c, this.M), (g.Xa.ap = this));
};
function Va(a, c, d) {
  if (a.qa) {
    for (var e = a.$e(!1), f = 0; f < e.length; f++) e[f].moveBy(c, d);
    e = Pa(a);
    for (f = 0; f < e.length; f++) mc(e[f]);
    for (f = 0; f < a.Fg.length; f++) Va(a.Fg[f], c, d);
  }
}
b.bi = function (a) {
  if (a) {
    var c = this.pa();
    c.Cn = "";
    c.sn = "";
    g.yk = g.yk.concat(this.$e(!0));
    g.g.j.Hb(this.S, "blocklyDragging");
  } else (g.yk = []), g.g.j.Ac(this.S, "blocklyDragging");
  for (c = 0; c < this.Fg.length; c++) this.Fg[c].bi(a);
};
b.fq = function (a) {
  g.kb.A.fq.call(this, a);
  I(this.Db, "blocklyDraggable", a);
};
b.Nu = function (a) {
  g.kb.A.Nu.call(this, a);
  a = Pa(this);
  for (var c = 0; c < a.length; c++) a[c].xj();
};
b.Pu = function (a) {
  g.kb.A.Pu.call(this, a);
  this.$b();
};
b.rA = function (a) {
  this.Ok != a &&
    (this.Ok = a) &&
    (this.Pd(this.B.ub.$().Wq), I(this.Db, "blocklyInsertionMarker", !0));
};
b.pa = function () {
  return this.S;
};
b.L = function (a, c) {
  if (this.B) {
    g.I.L();
    g.I.dv(this.Db.Mb);
    g.g.j.tn();
    var d = this.B;
    g.selected == this && (rb(this), Yb(this.B));
    g.Xa.ap == this && g.Xa.Fa();
    this.B.hb && g.navigation.XF(this);
    c && this.qa && (x(this, a), g.lb.yE(this));
    this.qa = !1;
    if (this.uq) {
      for (var e in this.uq) clearTimeout(this.uq[e]);
      this.uq = null;
    }
    c = Pa(this);
    for (e = 0; e < c.length; e++) c[e].L();
    g.kb.A.L.call(this, !!a);
    g.g.j.removeNode(this.S);
    pa(d);
    this.S = null;
    g.g.j.un();
  }
};
b.$b = function () {
  this.Db.$b(this);
  for (var a = Pa(this), c = 0; c < a.length; c++) a[c].$b();
  for (a = 0; (c = this.T[a]); a++)
    for (var d = 0, e; (e = c.gb[d]); d++) e.$b();
};
function oa(a) {
  var c = A(a, !1);
  a.$b();
  if (!a.isCollapsed()) {
    a = 0;
    for (var d; (d = c[a]); a++) d.qa && oa(d);
  }
}
b.UE = function () {
  return this.Se;
};
b.al = function (a) {
  if (!g.Comment) throw Error("Missing require for Blockly.Comment");
  this.Te.text != a &&
    (g.kb.A.al.call(this, a),
    (a = null != a),
    !!this.Se == a
      ? this.Se.SL()
      : (a ? (this.Se = new g.Comment(this)) : (this.Se.L(), (this.Se = null)),
        this.qa && (this.Ha(), this.lc())));
};
b.sA = function (a) {
  this.ud && this.ud !== a && this.ud.L();
  a && ((a.U = this), (this.ud = a), jc(a));
  this.qa && (this.Ha(), this.lc());
};
b.Zf = function (a) {
  this.isEnabled() != a &&
    (g.kb.A.Zf.call(this, a), this.qa && !Pb(this) && oa(this));
};
b.ef = function (a) {
  this.qa && this.Db.KA(a);
};
b.Io = function () {
  I(this.Db, "blocklySelected", !0);
};
b.dn = function () {
  I(this.Db, "blocklySelected", !1);
};
b.kn = function (a) {
  I(this.Db, "blocklyDraggingDelete", a);
};
b.$s = function () {
  return this.style.Gg;
};
b.Pd = function (a) {
  g.kb.A.Pd.call(this, a);
  a = nc(this.B.ub.$(), this.ge);
  this.Db.bh(a.style);
  this.style = a.style;
  this.rj = a.name;
  this.$b();
};
b.bh = function (a) {
  var c = ic(this.B.ub.$(), a);
  this.rj = a;
  if (c)
    (this.Nf = c.Nf),
      this.Db.bh(c),
      (this.ge = c.Gg),
      (this.style = c),
      this.$b();
  else throw Error("Invalid style name: " + a);
};
function Wa(a) {
  do {
    var c = a.pa(),
      d = c.parentNode,
      e = d.childNodes;
    e[e.length - 1] !== c && d.appendChild(c);
    a = a.getParent();
  } while (a);
}
b.nn = function (a, c) {
  g.kb.A.nn.call(this, a, c);
  this.qa && (this.Ha(), this.lc());
};
b.gq = function (a, c) {
  g.kb.A.gq.call(this, a, c);
  this.qa && (this.Ha(), this.lc());
};
b.mn = function (a, c) {
  g.kb.A.mn.call(this, a, c);
  this.qa && (this.Ha(), this.lc());
};
b.$g = function (a) {
  g.kb.A.$g.call(this, a);
  this.qa && (this.Ha(), this.lc());
};
b.lj = function (a, c) {
  a = g.kb.A.lj.call(this, a, c);
  this.qa && (this.Ha(), this.lc());
  return a;
};
b.Pe = function (a, c) {
  a = g.kb.A.Pe.call(this, a, c);
  this.qa && (this.Ha(), this.lc());
  return a;
};
function ma(a, c) {
  a.Z && Nb(a.Z, c);
  a.O && Nb(a.O, c);
  if (a.Y) {
    Nb(a.Y, c);
    var d = a.Y.ra();
    d && ma(d, c);
  }
  if (!a.Ci)
    for (d = 0; d < a.T.length; d++) {
      var e = a.T[d].connection;
      e && (Nb(e, c), (e = e.ra()) && ma(e, c));
    }
}
b.$e = function (a) {
  var c = [];
  if (a || this.qa)
    if (
      (this.O && c.push(this.O),
      this.Z && c.push(this.Z),
      this.Y && c.push(this.Y),
      a || !this.Ci)
    ) {
      a = 0;
      for (var d; (d = this.T[a]); a++) d.connection && c.push(d.connection);
    }
  return c;
};
b.Bp = function () {
  return g.kb.A.Bp.call(this);
};
b.ct = function (a, c) {
  return g.kb.A.ct.call(this, a, c);
};
b.Im = function (a) {
  return new g.Wb(this, a);
};
b.lc = function () {
  if (this.B && !this.B.Lc()) {
    var a = this.$c();
    if (!a.nc)
      for (var c = this.$e(!1), d = 0, e; (e = c[d]); d++) {
        e.isConnected() && F(e) && e.ra().lc();
        for (var f = e.Hz(g.Cd), h = 0, k; (k = f[h]); h++)
          (e.isConnected() && k.isConnected()) ||
            (k.W().$c() != a && (F(e) ? tb(k, e) : tb(e, k)));
      }
  }
};
function Xa(a) {
  var c = g.h.ac();
  setTimeout(function () {
    g.h.ea(c);
    Xb(a);
    g.h.ea(!1);
  }, g.Rn / 2);
  setTimeout(function () {
    g.h.ea(c);
    a.lc();
    g.h.ea(!1);
  }, g.Rn);
}
function Na(a, c, d) {
  (c.type != g.Ua && c.type != g.rb) || a.moveBy(d.x - c.x, d.y - c.y);
}
b.getParent = function () {
  return g.kb.A.getParent.call(this);
};
b.$c = function () {
  return g.kb.A.$c.call(this);
};
b.Ha = function (a) {
  if (!this.Fu) {
    this.Fu = !0;
    try {
      this.qa = !0;
      g.g.j.tn();
      this.isCollapsed() && lc(this);
      this.B.ub.Ha(this);
      var c = this.Ta();
      this.Z && bc(this.Z, c);
      this.O && bc(this.O, c);
      for (var d = 0; d < this.T.length; d++) {
        var e = this.T[d].connection;
        e && (bc(e, c), e.isConnected() && cc(e));
      }
      this.Y && (bc(this.Y, c), this.Y.isConnected() && cc(this.Y));
      if (!1 !== a) {
        var f = this.getParent();
        f ? f.Ha(!0) : pa(this.B);
      }
      g.g.j.un();
      this.fv();
    } finally {
      this.Fu = !1;
    }
  }
};
b.fv = function () {
  this.B.hb && this.Db.fm && this.B.ob().draw();
  this.B.hb && this.Db.Pt && this.B.Zc(g.navigation.zl).draw();
};
b.Zg = function (a) {
  this.Db.Zg(a);
};
b.ah = function (a) {
  this.Db.ah(a);
};
function H(a) {
  var c = a.height,
    d = a.width,
    e = u(a);
  e &&
    ((e = H(e)),
    (a = a.B.ub.$().gr),
    (c += e.height - a),
    (d = Math.max(d, e.width)));
  return { height: c, width: d };
}
g.i.Hn = !1;
g.i.register = function (a, c) {
  g.D.register(g.D.ba.RENDERER, a, c);
};
g.i.unregister = function (a) {
  g.D.unregister(g.D.ba.RENDERER, a);
};
g.i.NL = function () {
  g.i.Hn = !0;
};
g.i.OL = function () {
  g.i.Hn = !1;
};
g.i.Da = function (a, c, d) {
  a = new (g.D.Zs(g.D.ba.RENDERER, a))(a);
  a.Da(c, d);
  return a;
};
g.Hj = function (a) {
  this.Sb = [];
  this.Qx = a;
};
function oc(a, c, d) {
  if (!a.Sb.length) return -1;
  var e = ac(a, d);
  if (e >= a.Sb.length) return -1;
  d = c.y;
  for (var f = e; 0 <= f && a.Sb[f].y == d; ) {
    if (a.Sb[f] == c) return f;
    f--;
  }
  for (; e < a.Sb.length && a.Sb[e].y == d; ) {
    if (a.Sb[e] == c) return e;
    e++;
  }
  return -1;
}
function ac(a, c) {
  if (!a.Sb.length) return 0;
  for (var d = 0, e = a.Sb.length; d < e; ) {
    var f = Math.floor((d + e) / 2);
    if (a.Sb[f].y < c) d = f + 1;
    else if (a.Sb[f].y > c) e = f;
    else {
      d = f;
      break;
    }
  }
  return d;
}
function $b(a, c, d) {
  c = oc(a, c, d);
  if (-1 == c) throw Error("Unable to find connection in connectionDB.");
  a.Sb.splice(c, 1);
}
function dc(a, c, d) {
  function e(n) {
    var p = h - f[n].x,
      q = k - f[n].y;
    Math.sqrt(p * p + q * q) <= d && m.push(f[n]);
    return q < d;
  }
  var f = a.Sb,
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
g.Hj.Da = function (a) {
  var c = [];
  c[g.rb] = new g.Hj(a);
  c[g.Ie] = new g.Hj(a);
  c[g.Ua] = new g.Hj(a);
  c[g.Je] = new g.Hj(a);
  return c;
};
g.h.wg = function (a, c) {
  g.h.wg.A.constructor.call(this, c);
  this.CA = a;
};
g.g.object.V(g.h.wg, g.h.$d);
g.h.wg.prototype.type = g.h.Xw;
g.h.wg.prototype.sa = function () {
  var a = g.h.wg.A.sa.call(this);
  a.themeName = this.CA;
  return a;
};
g.h.wg.prototype.aa = function (a) {
  g.h.wg.A.aa.call(this, a);
  this.CA = a.themeName;
};
g.D.register(g.D.ba.Pb, g.h.Xw, g.h.wg);
g.h.Bg = function (a, c, d, e) {
  g.h.Bg.A.constructor.call(this, e);
  this.Jb = a;
  this.Eb = c;
  this.scale = d;
};
g.g.object.V(g.h.Bg, g.h.$d);
g.h.Bg.prototype.type = g.h.jx;
g.h.Bg.prototype.sa = function () {
  var a = g.h.Bg.A.sa.call(this);
  a.viewTop = this.Jb;
  a.viewLeft = this.Eb;
  a.scale = this.scale;
  return a;
};
g.h.Bg.prototype.aa = function (a) {
  g.h.Bg.A.aa.call(this, a);
  this.Jb = a.viewTop;
  this.Eb = a.viewLeft;
  this.scale = a.scale;
};
g.D.register(g.D.ba.Pb, g.h.jx, g.h.Bg);
g.tw = function (a) {
  this.Ig = this.je = null;
  this.cj = {};
  this.o = a;
};
function pc(a, c) {
  var d = a.cj[c];
  if (d) d.L(), delete a.cj[c];
  else
    throw Error(
      "Marker with id " +
        c +
        " does not exist. Can only unregistermarkers that exist."
    );
}
b = g.tw.prototype;
b.ob = function () {
  return this.je;
};
b.Zc = function (a) {
  return this.cj[a];
};
function qc(a, c) {
  a.je && a.je.od && a.je.od.L();
  a.je = c;
  a.je &&
    ((c = a.je),
    (c = new g.i.pg(a.o, a.o.ub.$(), c)),
    (a.je.od = c),
    a.Zg(a.je.od.Va()));
}
b.Zg = function (a) {
  a ? (this.o.vb.appendChild(a), (this.Ig = a)) : (this.Ig = null);
};
b.ah = function (a) {
  a
    ? this.o.vb &&
      (this.Ig ? this.o.vb.insertBefore(a, this.Ig) : this.o.vb.appendChild(a))
    : (this.Xg = null);
};
b.L = function () {
  for (var a = Object.keys(this.cj), c = 0, d; (d = a[c]); c++) pc(this, d);
  this.cj = null;
  this.je && (this.je.L(), (this.je = null));
};
g.$w = function (a, c) {
  this.o = a;
  this.eh = c;
  this.vn = [];
  this.zf = Object.create(null);
};
b = g.$w.prototype;
b.Mg = function () {
  return this.eh;
};
b.pn = function (a) {
  var c = this.eh;
  this.eh = a;
  if ((a = aa(this.o))) c && g.g.j.Ac(a, c.Ze()), g.g.j.Hb(a, this.eh.Ze());
  for (c = 0; (a = this.vn[c]); c++) rc(a);
  c = 0;
  a = Object.keys(this.zf);
  for (var d; (d = a[c]); c++)
    for (var e = 0, f; (f = this.zf[d][e]); e++)
      f.element.style[f.propertyName] = (this.eh && ha(this.eh, d)) || "";
  g.mc();
};
b.subscribe = function (a, c, d) {
  this.zf[c] || (this.zf[c] = []);
  this.zf[c].push({ element: a, propertyName: d });
  a.style[d] = (this.eh && ha(this.eh, c)) || "";
};
b.unsubscribe = function (a) {
  if (a)
    for (var c = Object.keys(this.zf), d = 0, e; (e = c[d]); d++) {
      for (var f = this.zf[e], h = f.length - 1; 0 <= h; h--)
        f[h].element === a && f.splice(h, 1);
      this.zf[e].length || delete this.zf[e];
    }
};
b.L = function () {
  this.zf = this.vn = this.eh = this.ue = null;
};
g.md = function (a, c) {
  g.md.A.constructor.call(this, a, c);
  this.xp = !1;
  this.Ed = Object.create(null);
  this.xA = this.Zm = 0;
  this.oz = this.iu = null;
};
g.g.object.V(g.md, g.nf);
g.md.DD = 5;
g.md.ED = 6;
b = g.md.prototype;
b.Es = function (a) {
  this.oz = this.Ub.options.ib && this.Ub.options.ib.su;
  g.md.A.Es.call(this, a);
  !this.vp && g.Touch.Ap(a) && sc(this, a);
};
b.gk = function (a) {
  this.iu = g.Aa(document, "mousedown", null, this.pF.bind(this), !0);
  this.Sp = g.Aa(document, "mousemove", null, this.Ek.bind(this), !0);
  this.Tp = g.Aa(document, "mouseup", null, this.qp.bind(this), !0);
  a.preventDefault();
  a.stopPropagation();
};
b.pF = function (a) {
  !this.Lc() && g.Touch.Ap(a) && (sc(this, a), this.xp && g.Rh());
};
b.Ek = function (a) {
  if (this.Lc()) g.Touch.Uu(a) && g.md.A.Ek.call(this, a);
  else if (this.xp) {
    if (g.Touch.Ap(a)) {
      this.Ed[g.Touch.pp(a)] = tc(this, a);
      var c = Object.keys(this.Ed);
      if (this.oz && 2 === c.length) {
        c = Object.keys(this.Ed);
        c = g.g.K.Jg(this.Ed[c[0]], this.Ed[c[1]]) / this.xA;
        if (0 < this.Zm && Infinity > this.Zm) {
          var d = c - this.Zm;
          d = 0 < d ? d * g.md.DD : d * g.md.ED;
          var e = this.Ub,
            f = g.g.Qm(a, w(e), Ba(e));
          e.zoom(f.x, f.y, d);
        }
        this.Zm = c;
        a.preventDefault();
      } else g.md.A.Ek.call(this, a);
    }
    g.Rh();
  } else g.md.A.Ek.call(this, a);
};
b.qp = function (a) {
  if (g.Touch.Ap(a) && !this.Lc()) {
    var c = g.Touch.pp(a);
    this.Ed[c] && delete this.Ed[c];
    2 > Object.keys(this.Ed).length &&
      ((this.Ed = Object.create(null)), (this.Zm = 0));
  }
  !this.xp || this.Lc()
    ? g.Touch.Uu(a) && g.md.A.qp.call(this, a)
    : (a.preventDefault(), a.stopPropagation(), this.L());
};
b.L = function () {
  g.md.A.L.call(this);
  this.iu && g.ab(this.iu);
};
function sc(a, c) {
  a.Ed[g.Touch.pp(c)] = tc(a, c);
  var d = Object.keys(a.Ed);
  2 == d.length &&
    ((a.xA = g.g.K.Jg(a.Ed[d[0]], a.Ed[d[1]])),
    (a.xp = !0),
    c.preventDefault());
}
function tc(a, c) {
  return a.Ub
    ? new g.g.K(
        c.pageX ? c.pageX : c.changedTouches[0].pageX,
        c.pageY ? c.pageY : c.changedTouches[0].pageY
      )
    : null;
}
g.qx = function (a) {
  this.nu = a;
  this.Il = Object.create(null);
};
b = g.qx.prototype;
b.Dt = null;
b.L = function () {
  this.Il = this.nu = null;
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
    e && e.play && (this.Il[c] = e);
  }
};
b.preload = function () {
  for (var a in this.Il) {
    var c = this.Il[a];
    c.volume = 0.01;
    var d = c.play();
    void 0 !== d ? d.then(c.pause).catch(function () {}) : c.pause();
    if (g.g.userAgent.si || g.g.userAgent.iw) break;
  }
};
b.play = function (a, c) {
  var d = this.Il[a];
  d
    ? ((a = new Date()),
      (null != this.Dt && a - this.Dt < g.jD) ||
        ((this.Dt = a),
        (d = g.g.userAgent.si || g.g.userAgent.Ej ? d : d.cloneNode()),
        (d.volume = void 0 === c ? 1 : c),
        d.play()))
    : this.nu && this.nu.ee.play(a, c);
};
g.cb = function (a, c, d) {
  g.cb.A.constructor.call(this, a);
  this.pd = a.pd || g.cb.fF;
  this.ln = a.ln || g.cb.vH;
  this.$o = g.Hj.Da(this.Zl);
  c && (this.Dd = c);
  d && (this.Aj = d);
  this.rq = !!this.Aj && g.g.Ui();
  this.zm = [];
  this.ee = new g.qx(a.qc);
  this.me = this.options.mt ? new g.ri(this.options.mt, a.Zy) : null;
  this.Ld = new g.tw(this);
  this.av = {};
  this.xy = {};
  g.ma && g.ma.Ji && uc(this, g.Bi, g.ma.Ji);
  g.kx && g.kx.Ji && uc(this, g.yD, g.kx.Ji);
  g.bb && g.bb.Ji && (uc(this, g.pr, g.bb.Ji), K(this, g.bb.$F));
  this.Ec = this.options.qc
    ? this.options.qc.Ec
    : new g.$w(this, this.options.KH || g.xg.lh);
  this.Ec.vn.push(this);
  this.ub = g.i.Da(this.options.bq || "geras", this.Mg(), this.options.cq);
  this.$r = null;
  this.hb = !1;
  this.pq = [];
};
g.g.object.V(g.cb, g.Ab);
b = g.cb.prototype;
b.eq = null;
b.qa = !0;
b.Ug = !0;
b.Tf = !1;
b.Fm = !1;
b.Iu = !0;
b.scrollX = 0;
b.scrollY = 0;
b.sy = null;
b.scale = 1;
b.Qz = 1;
b.Rz = 0;
b.Nz = 0;
b.Fc = null;
b.Ia = null;
b.va = null;
b.Ba = null;
b.Kc = null;
b.Dd = null;
b.Aj = null;
b.rq = !1;
b.up = !1;
b.wt = null;
b.vz = null;
b.Ra = null;
b.mz = null;
b.xt = !0;
b.Zg = function (a) {
  this.Ld.Zg(a);
};
b.ah = function (a) {
  this.Ld.ah(a);
};
b.Zc = function (a) {
  return this.Ld ? this.Ld.Zc(a) : null;
};
b.ob = function () {
  return this.Ld ? this.Ld.ob() : null;
};
b.Mg = function () {
  return this.Ec.Mg();
};
b.pn = function (a) {
  a || (a = g.xg.lh);
  this.Ec.pn(a);
};
function rc(a) {
  a.S && a.ub.yu(a.S, a.Mg());
  vc(
    J(a).filter(function (c) {
      return void 0 !== c.rj;
    })
  );
  wc(a);
  a.Ba && rc(a.Ba);
  a.isVisible() && a.Lb(!0);
  a = new g.h.wg(a.Mg().name, a.id);
  g.h.Ea(a);
}
function vc(a) {
  for (var c = 0, d; (d = a[c]); c++) {
    var e = d.rj;
    if (e && (d.bh(e), d.ud)) {
      var f = d.ud.o;
      if (f && J(f)) {
        var h = J(f);
        for (d = 0; d < h.length; d++) (e = h[d]), e.bh(e.rj);
        if ((d = L(f)))
          for (f = J(d.o), d = 0; d < f.length; d++) (e = f[d]), e.bh(e.rj);
      }
    }
  }
}
function Ba(a) {
  if (a.xt) {
    var c = w(a).getScreenCTM();
    c && ((a.mz = c.inverse()), (a.xt = !1));
  }
  return a.mz;
}
b.Fn = function () {
  this.xt = !0;
};
b.isVisible = function () {
  return this.Ug;
};
function Ia(a, c) {
  var d = 0,
    e = 0,
    f = 1;
  if (g.g.j.containsNode(a.vb, c) || g.g.j.containsNode(a.dh, c)) f = a.scale;
  do {
    var h = g.g.le(c);
    if (c == a.vb || c == a.dh) f = 1;
    d += h.x * f;
    e += h.y * f;
    c = c.parentNode;
  } while (c && c != w(a));
  return new g.g.K(d, e);
}
function aa(a) {
  if (!a.wt)
    for (var c = a.S; c; ) {
      if (
        -1 !=
        (" " + (c.getAttribute("class") || "") + " ").indexOf(" injectionDiv ")
      ) {
        a.wt = c;
        break;
      }
      c = c.parentNode;
    }
  return a.wt;
}
b.Va = function (a) {
  this.S = g.g.j.N(g.g.H.Gc, { class: "blocklyWorkspace" }, null);
  a &&
    ((this.Cc = g.g.j.N(
      g.g.H.Bd,
      { height: "100%", width: "100%", class: a },
      this.S
    )),
    "blocklyMainBackground" == a && this.me
      ? (this.Cc.style.fill = "url(#" + this.me.Dk.id + ")")
      : this.Ec.subscribe(this.Cc, "workspaceBackgroundColour", "fill"));
  this.vb = g.g.j.N(g.g.H.Gc, { class: "blocklyBlockCanvas" }, this.S);
  this.dh = g.g.j.N(g.g.H.Gc, { class: "blocklyBubbleCanvas" }, this.S);
  this.Tf ||
    (g.Aa(this.S, "mousedown", this, this.Uh, !1, !0),
    g.Aa(this.S, "wheel", this, this.rG));
  if (this.options.xm) {
    if (!g.HK) throw Error("Missing require for Blockly.Toolbox");
    this.Ba = new (g.D.Ey(g.D.ba.Er, this.options))(this);
  }
  this.me && this.me.update(this.scale);
  xc(this);
  qc(this.Ld, new g.Ij());
  a = this.Ld;
  var c = g.navigation.zl,
    d = new g.Cl();
  a.cj[c] && pc(a, c);
  var e = new g.i.pg(a.o, a.o.ub.$(), d);
  d.od = e;
  a.ah(d.od.Va());
  a.cj[c] = d;
  this.ub.Va(this.S, this.Mg());
  return this.S;
};
b.L = function () {
  this.qa = !1;
  this.Kc && this.Kc.cancel();
  this.S && (g.g.j.removeNode(this.S), (this.S = null));
  this.dh = this.vb = null;
  this.Ba && (this.Ba.L(), (this.Ba = null));
  this.va && (this.va.L(), (this.va = null));
  this.Fc && (this.Fc.L(), (this.Fc = null));
  this.Ia && (this.Ia.L(), (this.Ia = null));
  this.Cj && (this.Cj.L(), (this.Cj = null));
  this.ee && (this.ee.L(), (this.ee = null));
  this.me && (this.me.L(), (this.me = null));
  this.ub.L();
  this.Ld && (this.Ld.L(), (this.Ld = null));
  g.cb.A.L.call(this);
  if (this.Ec) {
    var a = this.Ec,
      c = a.vn.indexOf(this);
    if (0 > c)
      throw Error(
        "Cannot unsubscribe a workspace that hasn't been subscribed."
      );
    a.vn.splice(c, 1);
    this.Ec.unsubscribe(this.Cc);
    this.options.qc || (this.Ec.L(), (this.Ec = null));
  }
  this.xy = this.av = this.$o = null;
  this.options.qc ||
    ((a = w(this)) && a.parentNode && g.g.j.removeNode(a.parentNode));
  this.eq && (g.ab(this.eq), (this.eq = null));
};
b.Vk = function (a, c) {
  return new g.kb(this, a, c);
};
function yc(a) {
  if (!g.vc) throw Error("Missing require for Blockly.Trashcan");
  a.Fc = new g.vc(a);
  var c = a.Fc.Va();
  a.S.insertBefore(c, a.vb);
}
function zc(a) {
  if (!g.FD) throw Error("Missing require for Blockly.ZoomControls");
  a.Cj = new g.FD(a);
  var c = a.Cj.Va();
  a.S.appendChild(c);
}
function Ac(a, c) {
  var d = new g.kd({
    parentWorkspace: a,
    rtl: a.M,
    oneBasedIndex: a.options.Up,
    horizontalLayout: a.oe,
    renderer: a.options.bq,
    rendererOverrides: a.options.cq,
  });
  d.jb = a.options.jb;
  if (a.oe) {
    if (!g.Uq) throw Error("Missing require for Blockly.HorizontalFlyout");
    a.va = new g.Uq(d);
  } else {
    if (!g.Ag) throw Error("Missing require for Blockly.VerticalFlyout");
    a.va = new g.Ag(d);
  }
  a.va.fk = !1;
  a.va.o.Lb(!0);
  return a.va.Va(c);
}
function L(a, c) {
  return a.va || c ? a.va : a.Ba ? L(a.Ba) : null;
}
function pa(a) {
  a.Iu && a.qa && (a.Ia && a.Ia.resize(), a.Fn());
}
b.resize = function () {
  this.Ba && this.Ba.position();
  this.va && this.va.position();
  this.Fc && this.Fc.position();
  this.Cj && this.Cj.position();
  this.Ia && this.Ia.resize();
  this.Fn();
  xc(this);
};
function wb(a) {
  var c = g.g.ZE();
  g.g.K.Gf(a.vz, c) || ((a.vz = c), a.Fn(), xc(a));
}
function w(a) {
  if (!a.$r)
    for (var c = a.S; c; ) {
      if ("svg" == c.tagName) {
        a.$r = c;
        break;
      }
      c = c.parentNode;
    }
  return a.$r;
}
function sa(a) {
  if (g.h.isEnabled()) {
    var c = a.scale,
      d = -a.scrollY,
      e = -a.scrollX;
    (c == a.Qz && 1 > Math.abs(d - a.Rz) && 1 > Math.abs(e - a.Nz)) ||
      ((a.Qz = c),
      (a.Rz = d),
      (a.Nz = e),
      (a = new g.h.Bg(d, e, c, a.id)),
      g.h.Ea(a));
  }
}
b.translate = function (a, c) {
  if (this.rq && this.up) this.Aj.vj(a, c);
  else {
    var d = "translate(" + a + "," + c + ") scale(" + this.scale + ")";
    this.vb.setAttribute("transform", d);
    this.dh.setAttribute("transform", d);
  }
  if (this.Dd) {
    d = this.Dd;
    var e = this.scale;
    d.ai = e;
    d.Ef.setAttribute(
      "transform",
      "translate(" + a.toFixed(0) + "," + c.toFixed(0) + ") scale(" + e + ")"
    );
  }
  this.me && this.me.moveTo(a, c);
  sa(this);
};
function Da(a) {
  if (a.rq) {
    a.up = !1;
    var c = a.Aj.gt();
    a.Aj.Qo(a.S);
    c = "translate(" + c.x + "," + c.y + ") scale(" + a.scale + ")";
    a.vb.setAttribute("transform", c);
    a.dh.setAttribute("transform", c);
  }
}
function Ca(a) {
  if (a.rq && !a.up) {
    a.up = !0;
    var c = a.vb.previousSibling,
      d = parseInt(w(a).getAttribute("width"), 10),
      e = parseInt(w(a).getAttribute("height"), 10),
      f = g.g.le(a.vb),
      h = a.Aj,
      k = a.vb,
      l = a.dh,
      m = a.scale;
    if (h.yb.childNodes.length) throw Error("Already dragging a block.");
    h.vu = c;
    k.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    l.setAttribute("transform", "translate(0, 0) scale(" + m + ")");
    h.yb.setAttribute("width", d);
    h.yb.setAttribute("height", e);
    h.yb.appendChild(k);
    h.yb.appendChild(l);
    h.yb.style.display = "block";
    a.Aj.vj(f.x, f.y);
  }
}
b.Og = function () {
  var a = this.pd();
  return a ? a.Kb / this.scale : 0;
};
b.Lb = function (a) {
  this.Ug = a;
  if (this.S)
    if (
      (this.Ia && this.Ia.qj(a),
      L(this) && L(this).qj(a),
      (w(this).style.display = a ? "block" : "none"),
      this.Ba && this.Ba.Lb(a),
      a)
    ) {
      a = J(this);
      for (var c = a.length - 1; 0 <= c; c--) a[c].Jm();
      this.Ha();
      this.Ba && this.Ba.position();
    } else g.mc(!0);
};
b.Ha = function () {
  for (var a = J(this), c = a.length - 1; 0 <= c; c--) a[c].Ha(!1);
  if (this.Kc) for (a = this.Kc.Ak(), c = 0; c < a.length; c++) a[c].Ha(!1);
  c = this.Ld;
  c.o.hb && c.Ig && c.o.ob().draw();
};
function Bc(a, c) {
  var d = z;
  if (void 0 === c) {
    for (var e = 0, f; (f = d.zm[e]); e++) f.ef(!1);
    d.zm.length = 0;
  }
  if ((f = a ? d.Yc(a) : null))
    (a = void 0 === c || c)
      ? -1 == d.zm.indexOf(f) && d.zm.push(f)
      : g.g.Tl(d.zm, f),
      f.ef(a);
}
b.Xp = function (a) {
  if (
    this.qa &&
    a.tagName &&
    !(
      a.getElementsByTagName("block").length >=
      (isNaN(this.options.Lm) ? Infinity : this.options.Lm - J(this).length)
    )
  )
    if ((this.Kc && this.Kc.cancel(), "comment" == a.tagName.toLowerCase())) {
      g.h.disable();
      try {
        var c = g.bk.pm(a),
          d = parseInt(a.getAttribute("x"), 10),
          e = parseInt(a.getAttribute("y"), 10);
        isNaN(d) || isNaN(e) || (this.M && (d = -d), c.moveBy(d + 50, e + 50));
      } finally {
        g.h.enable();
      }
      g.h.isEnabled() && g.sx.$K(c);
      c.select();
    } else
      a: {
        g.h.disable();
        try {
          var f = g.R.wk(a, this),
            h = this.Zc(g.navigation.zl).Wa;
          if (this.hb && h && h.Lk) {
            g.navigation.lz(f, h.xa);
            break a;
          }
          var k = parseInt(a.getAttribute("x"), 10),
            l = parseInt(a.getAttribute("y"), 10);
          if (!isNaN(k) && !isNaN(l)) {
            this.M && (k = -k);
            do {
              a = !1;
              var m = J(this);
              c = 0;
              for (var n; (n = m[c]); c++) {
                var p = n.Ta();
                if (1 >= Math.abs(k - p.x) && 1 >= Math.abs(l - p.y)) {
                  a = !0;
                  break;
                }
              }
              if (!a) {
                var q = f.$e(!1);
                c = 0;
                for (var t; (t = q[c]); c++)
                  if (t.closest(g.Cd, new g.g.K(k, l)).connection) {
                    a = !0;
                    break;
                  }
              }
              a && ((k = this.M ? k - g.Cd : k + g.Cd), (l += 2 * g.Cd));
            } while (a);
            f.moveBy(k, l);
          }
        } finally {
          g.h.enable();
        }
        g.h.isEnabled() && !f.Ga && g.h.Ea(new g.h.Tn(f));
        f.select();
      }
};
function wc(a) {
  (a = a.Tf ? a.Ra : a) && !a.Kc && a.Ba && L(a.Ba) && a.Ba.zL();
}
b.mj = function (a, c) {
  g.cb.A.mj.call(this, a, c);
  wc(this);
};
b.Gi = function (a) {
  g.cb.A.Gi.call(this, a);
  wc(this);
};
b.We = function (a, c, d) {
  a = g.cb.A.We.call(this, a, c, d);
  wc(this);
  return a;
};
function xc(a) {
  a.by = a.Fc && a.S.parentNode ? a.Fc.sm() : null;
  a.ay = a.va
    ? a.va.sm()
    : a.Ba && "function" == typeof a.Ba.sm
    ? a.Ba.sm()
    : null;
}
function Sa(a, c) {
  return a.by && a.by.contains(c.clientX, c.clientY)
    ? g.Mq
    : a.ay && a.ay.contains(c.clientX, c.clientY)
    ? g.Lv
    : g.Kv;
}
b.Uh = function (a) {
  var c = this.Gh(a);
  c && zb(c, a, this);
};
b.Wu = function (a, c) {
  a = g.g.Qm(a, w(this), Ba(this));
  a.x /= this.scale;
  a.y /= this.scale;
  this.sy = g.g.K.jm(c, a);
};
b.Lc = function () {
  return null != this.Kc && this.Kc.Lc();
};
function Cc(a) {
  return (
    (a.options.pc && a.options.pc.scrollbars) ||
    (a.options.pc && a.options.pc.ki) ||
    (a.options.pc && a.options.pc.Fh) ||
    (a.options.ib && a.options.ib.controls) ||
    (a.options.ib && a.options.ib.ki) ||
    (a.options.ib && a.options.ib.su)
  );
}
b.Mc = function () {
  return (
    (this.options.pc && this.options.pc.scrollbars) ||
    (this.options.pc && this.options.pc.ki) ||
    (this.options.pc && this.options.pc.Fh) ||
    (this.options.ib && this.options.ib.ki) ||
    (this.options.ib && this.options.ib.su)
  );
};
b.rG = function (a) {
  if (g.nf.Ri()) a.preventDefault(), a.stopPropagation();
  else {
    var c = this.options.ib && this.options.ib.ki,
      d = this.options.pc && this.options.pc.ki;
    if (c || d) {
      var e = g.g.Ry(a);
      !c || (!a.ctrlKey && d)
        ? ((c = this.scrollX - e.x),
          (d = this.scrollY - e.y),
          a.shiftKey && !e.x && ((c = this.scrollX - e.y), (d = this.scrollY)),
          this.scroll(c, d))
        : ((e = -e.y / 50),
          (c = g.g.Qm(a, w(this), Ba(this))),
          this.zoom(c.x, c.y, e));
      a.preventDefault();
    }
  }
};
function la(a) {
  a = [].concat(a.pq);
  if (!a.length) return new g.g.Rect(0, 0, 0, 0);
  for (var c = kc(a[0]), d = 1; d < a.length; d++) {
    var e = kc(a[d]);
    e.top < c.top && (c.top = e.top);
    e.bottom > c.bottom && (c.bottom = e.bottom);
    e.left < c.left && (c.left = e.left);
    e.right > c.right && (c.right = e.right);
  }
  return c;
}
b.qn = function (a) {
  if (!this.options.readOnly && !this.Tf) {
    var c = Zb(g.Ka.Sc.kc, { B: this });
    this.dE && this.dE(c, a);
    g.Xa.show(a, c, this.M);
  }
};
function da(a) {
  if (a.options.qc) da(a.options.qc);
  else {
    g.Hm = a;
    document.activeElement &&
      document.activeElement.blur &&
      document.activeElement.blur();
    try {
      w(a).focus({ preventScroll: !0 });
    } catch (c) {
      try {
        w(a).parentNode.setActive();
      } catch (d) {
        w(a).parentNode.focus({ preventScroll: !0 });
      }
    }
  }
}
b.zoom = function (a, c, d) {
  d = Math.pow(this.options.ib.oH, d);
  var e = this.scale * d;
  if (this.scale != e) {
    e > this.options.ib.Mm
      ? (d = this.options.ib.Mm / this.scale)
      : e < this.options.ib.Om && (d = this.options.ib.Om / this.scale);
    var f = this.vb.getCTM(),
      h = w(this).createSVGPoint();
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
b.setScale = function (a) {
  this.options.ib.Mm && a > this.options.ib.Mm
    ? (a = this.options.ib.Mm)
    : this.options.ib.Om && a < this.options.ib.Om && (a = this.options.ib.Om);
  this.scale = a;
  g.mc(!1);
  this.va && (this.va.xu(), xc(this));
  this.me && this.me.update(this.scale);
  a = this.pd();
  this.scrollX -= a.wc;
  this.scrollY -= a.Hc;
  a.Eb += a.wc;
  a.Jb += a.Hc;
  this.scroll(this.scrollX, this.scrollY);
  this.Ia &&
    (this.va
      ? (va(this.Ia.ne, a), wa(this.Ia.Be, a))
      : (ya(this.Ia.ne, a), Aa(this.Ia.Be, a)));
};
function Dc(a) {
  return a.options.qc ? Dc(a.options.qc) : a.scale;
}
b.scroll = function (a, c) {
  g.mc(!0);
  var d = this.pd(),
    e = d.Ve + d.Jc - d.Kb,
    f = d.nd + d.xc - d.Vb;
  a = Math.min(a, -d.Jc);
  c = Math.min(c, -d.xc);
  a = Math.max(a, -e);
  c = Math.max(c, -f);
  this.scrollX = a;
  this.scrollY = c;
  this.Ia &&
    (C(this.Ia.ne, -(a + d.Jc) * this.Ia.ne.ratio),
    C(this.Ia.Be, -(c + d.xc) * this.Ia.Be.ratio));
  a += d.wc;
  c += d.Hc;
  this.translate(a, c);
};
g.cb.Iy = function (a) {
  var c = 0,
    d = 0;
  a && ((c = a.Og()), (d = a.yc));
  return new g.g.Zd(c, d);
};
g.cb.XE = function (a, c) {
  return Cc(a) ? g.cb.WE(a, c) : g.cb.Fy(a);
};
g.cb.Fy = function (a) {
  var c = la(a),
    d = a.scale;
  a = c.top * d;
  var e = c.bottom * d,
    f = c.left * d;
  c = c.right * d;
  return { top: a, bottom: e, left: f, right: c, width: c - f, height: e - a };
};
g.cb.WE = function (a, c) {
  a = g.cb.Fy(a);
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
g.cb.fF = function () {
  var a = g.cb.Iy(this.Ba),
    c = g.cb.Iy(this.va),
    d = g.HH(w(this)),
    e = { height: d.height, width: d.width };
  if (this.Ba)
    if (this.jb == g.Nl || this.jb == g.Fo) e.height -= a.height;
    else {
      if (this.jb == g.Me || this.jb == g.Ml) e.width -= a.width;
    }
  else if (this.va)
    if (this.jb == g.Nl || this.jb == g.Fo) e.height -= c.height;
    else if (this.jb == g.Me || this.jb == g.Ml) e.width -= c.width;
  var f = g.cb.XE(this, e),
    h = 0;
  this.Ba && this.jb == g.Me
    ? (h = a.width)
    : this.va && this.jb == g.Me && (h = c.width);
  var k = 0;
  this.Ba && this.jb == g.Nl
    ? (k = a.height)
    : this.va && this.jb == g.Nl && (k = c.height);
  return {
    nd: f.height,
    Ve: f.width,
    xc: f.top,
    Jc: f.left,
    Vb: e.height,
    Kb: e.width,
    Jb: -this.scrollY,
    Eb: -this.scrollX,
    Hc: k,
    wc: h,
    PL: d.height,
    QL: d.width,
    HA: a.width,
    RL: a.height,
    jb: this.jb,
    bL: c.width,
    aL: c.height,
  };
};
g.cb.vH = function (a) {
  var c = this.pd();
  "number" == typeof a.x && (this.scrollX = -c.Ve * a.x - c.Jc);
  "number" == typeof a.y && (this.scrollY = -c.nd * a.y - c.xc);
  this.translate(this.scrollX + c.wc, this.scrollY + c.Hc);
};
b = g.cb.prototype;
b.Yc = function (a) {
  return g.cb.A.Yc.call(this, a);
};
b.tb = function (a) {
  return g.cb.A.tb.call(this, a);
};
b.Jo = function (a) {
  this.pq.push(a);
  g.cb.A.Jo.call(this, a);
};
b.aq = function (a) {
  g.g.Tl(this.pq, a);
  g.cb.A.aq.call(this, a);
};
b.rc = function (a) {
  var c = !this.Iu && a;
  this.Iu = a;
  c && pa(this);
};
b.clear = function () {
  this.rc(!1);
  g.cb.A.clear.call(this);
  this.pq = [];
  this.rc(!0);
};
function Ec(a, c) {
  if ("function" != typeof c)
    throw TypeError("Button callbacks must be functions.");
  a.xy.CREATE_VARIABLE = c;
}
function uc(a, c, d) {
  if ("function" != typeof d)
    throw TypeError("Toolbox category callbacks must be functions.");
  a.av[c] = d;
}
b.Gh = function (a) {
  var c =
      "mousedown" == a.type ||
      "touchstart" == a.type ||
      "pointerdown" == a.type,
    d = this.Kc;
  return d
    ? c && d.Ni
      ? (console.warn("Tried to start the same gesture twice."),
        d.cancel(),
        null)
      : d
    : c
    ? (this.Kc = new g.md(a, this))
    : null;
};
function Yb(a) {
  a.Kc && a.Kc.cancel();
}
g.Ti = function (a, c) {
  g.TD();
  "string" == typeof a &&
    (a = document.getElementById(a) || document.querySelector(a));
  if (!a || !g.g.j.containsNode(document, a))
    throw Error("Error: container is not in current document.");
  c = new g.kd(c || {});
  var d = document.createElement("div");
  d.className = "injectionDiv";
  d.tabIndex = 0;
  g.g.eb.$f(d, g.g.eb.State.zC, g.m.WORKSPACE_ARIA_LABEL);
  a.appendChild(d);
  a = g.cm(d, c);
  var e = new g.Av(d),
    f = new g.tx(d),
    h = g.jE(a, c, e, f);
  g.yF(h);
  g.Hm = h;
  g.zn(h);
  d.addEventListener("focusin", function () {
    g.Hm = h;
  });
  return h;
};
g.cm = function (a, c) {
  a.setAttribute("dir", "LTR");
  g.Rd.Ti(c.qF, c.Um);
  a = g.g.j.N(
    g.g.H.wh,
    {
      xmlns: g.g.j.Jl,
      "xmlns:html": g.g.j.mo,
      "xmlns:xlink": g.g.j.Oe,
      version: "1.1",
      class: "blocklySvg",
      tabindex: "0",
    },
    a
  );
  var d = g.g.j.N(g.g.H.Jv, {}, a);
  c.mt = g.ri.Va(String(Math.random()).substring(2), c.Zy, d);
  return a;
};
g.jE = function (a, c, d, e) {
  c.qc = null;
  var f = new g.cb(c, d, e);
  c = f.options;
  f.scale = c.ib.EH;
  a.appendChild(f.Va("blocklyMainBackground"));
  g.g.j.Hb(aa(f), f.ub.Ze());
  g.g.j.Hb(aa(f), f.Mg().Ze());
  !c.xm && c.Vg && ((d = Ac(f, g.g.H.wh)), g.g.j.Ik(d, a));
  c.cz && yc(f);
  c.ib && c.ib.controls && zc(f);
  f.Ec.subscribe(a, "workspaceBackgroundColour", "background-color");
  f.translate(0, 0);
  c.readOnly ||
    f.Mc() ||
    K(f, function (h) {
      if (!f.Lc() && !f.Mc() && -1 != g.h.kB.indexOf(h.type)) {
        var k = Object.create(null),
          l = f.pd(),
          m = f.scale;
        k.M = f.M;
        k.Eb = l.Eb / m;
        k.Jb = l.Jb / m;
        k.RA = (l.Eb + l.Kb) / m;
        k.QA = (l.Jb + l.Vb) / m;
        Cc(f)
          ? ((l = la(f)),
            (k.Jc = l.left),
            (k.xc = l.top),
            (k.Vx = l.right),
            (k.Sx = l.bottom))
          : ((k.Jc = l.Jc / m),
            (k.xc = l.xc / m),
            (k.Vx = (l.Jc + l.Ve) / m),
            (k.Sx = (l.xc + l.nd) / m));
        if (k.xc < k.Jb || k.Sx > k.QA || k.Jc < k.Eb || k.Vx > k.RA) {
          l = null;
          h && ((l = g.h.ac()), g.h.ea(h.group));
          switch (h.type) {
            case g.h.Bq:
            case g.h.xv:
              var n = f.Yc(h.fb);
              n && (n = n.$c());
              break;
            case g.h.Wn:
            case g.h.Xn:
              n = f.Yo[h.yf] || null;
          }
          if (n) {
            m = kc(n);
            m.height = m.bottom - m.top;
            m.width = m.right - m.left;
            var p = k.Jb,
              q = k.QA - m.height;
            q = Math.max(p, q);
            p = g.g.hc.Vl(p, m.top, q) - m.top;
            q = k.Eb;
            var t = k.RA - m.width;
            k.M ? (q = Math.min(t, q)) : (t = Math.max(q, t));
            n.moveBy(g.g.hc.Vl(q, m.left, t) - m.left, p);
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
  g.zn(f);
  g.X.Va();
  g.G.Va();
  g.I.Va();
  return f;
};
g.yF = function (a) {
  var c = a.options,
    d = w(a);
  g.Aa(d.parentNode, "contextmenu", null, function (f) {
    g.g.yp(f) || f.preventDefault();
  });
  d = g.Aa(window, "resize", null, function () {
    g.mc(!0);
    g.zn(a);
  });
  a.eq = d;
  g.Ti.LD();
  if (c.Vg) {
    d = a.Ba;
    var e = L(a, !0);
    d
      ? d.Da()
      : e && (e.Da(a), e.show(c.Vg), "function" == typeof e.oA && e.oA());
  }
  d = g.Oa.Bc;
  c.cz && (d = a.Fc.Da(d));
  c.ib && c.ib.controls && a.Cj.Da(d);
  c.pc && c.pc.scrollbars
    ? ((a.Ia = new g.Kl(a)), a.Ia.resize())
    : a.ln({ x: 0.5, y: 0.5 });
  c.sF && g.Ti.LF(c.Um, a);
};
g.Ti.LD = function () {
  g.zE ||
    (g.Aa(document, "scroll", null, function () {
      for (var a = g.Ab.getAll(), c = 0, d; (d = a[c]); c++) d.Fn && d.Fn();
    }),
    g.Aa(document, "keydown", null, g.du),
    g.Tc(document, "touchend", null, g.Rh),
    g.Tc(document, "touchcancel", null, g.Rh),
    g.g.userAgent.si &&
      g.Aa(window, "orientationchange", document, function () {
        g.zn(g.Jf());
      }));
  g.zE = !0;
};
g.Ti.LF = function (a, c) {
  function d() {
    for (; f.length; ) g.ab(f.pop());
    e.preload();
  }
  var e = c.ee;
  e.load([a + "click.mp3", a + "click.wav", a + "click.ogg"], "click");
  e.load(
    [a + "disconnect.wav", a + "disconnect.mp3", a + "disconnect.ogg"],
    "disconnect"
  );
  e.load([a + "delete.mp3", a + "delete.ogg", a + "delete.wav"], "delete");
  var f = [];
  f.push(g.Aa(document, "mousemove", null, d, !0));
  f.push(g.Aa(document, "touchstart", null, d, !0));
};
g.Wd = function (a, c) {
  this.PA = c || "";
  this.kA = Object.create(null);
  if (a) for (a = a.split(","), c = 0; c < a.length; c++) this.kA[a[c]] = !0;
  this.reset();
};
g.Wd.Nq = "DEVELOPER_VARIABLE";
g.Wd.prototype.reset = function () {
  this.Df = Object.create(null);
  this.$x = Object.create(null);
  this.Ja = null;
};
g.Wd.prototype.Ru = function (a) {
  this.Ja = a;
};
function Fc(a, c) {
  var d = g.s.il;
  if (c == g.Bi) {
    var e = a;
    d.Ja
      ? (e = (e = d.Ja.Ng(e)) ? e.name : null)
      : (console.log(
          "Deprecated call to Blockly.Names.prototype.getName without defining a variable map. To fix, add the following code in your generator's init() function:\nBlockly.YourGeneratorName.variableDB_.setVariableMap(workspace.getVariableMap());"
        ),
        (e = null));
    e && (a = e);
  }
  e = a.toLowerCase() + "_" + c;
  var f = c == g.Bi || c == g.Wd.Nq ? d.PA : "";
  if (e in d.Df) return f + d.Df[e];
  a = Gc(d, a, c);
  d.Df[e] = a.substr(f.length);
  return a;
}
function Gc(a, c, d) {
  c
    ? ((c = encodeURI(c.replace(/ /g, "_")).replace(/[^\w]/g, "_")),
      -1 != "0123456789".indexOf(c[0]) && (c = "my_" + c))
    : (c = g.m.UNNAMED_KEY || "unnamed");
  for (var e = ""; a.$x[c + e] || c + e in a.kA; ) e = e ? e + 1 : 2;
  c += e;
  a.$x[c] = !0;
  return (d == g.Bi || d == g.Wd.Nq ? a.PA : "") + c;
}
g.Wd.Gf = function (a, c) {
  return a.toLowerCase() == c.toLowerCase();
};
g.bb = {};
g.bb.uw = g.pr;
g.bb.AB = "x";
g.bb.ID = function (a) {
  var c = eb(a, "procedures_defnoreturn").map(function (d) {
    return d.Bk();
  });
  a = eb(a, "procedures_defreturn").map(function (d) {
    return d.Bk();
  });
  c.sort(g.bb.gA);
  a.sort(g.bb.gA);
  return [c, a];
};
g.bb.gA = function (a, c) {
  return a[0].toLowerCase().localeCompare(c[0].toLowerCase());
};
g.bb.JE = function (a, c) {
  if (c.nc) return a;
  for (a = a || g.m.UNNAMED_KEY || "unnamed"; !g.bb.DF(a, c.B, c); ) {
    var d = a.match(/^(.*?)(\d+)$/);
    a = d ? d[1] + (parseInt(d[2], 10) + 1) : a + "2";
  }
  return a;
};
g.bb.DF = function (a, c, d) {
  return !g.bb.FF(a, c, d);
};
g.bb.FF = function (a, c, d) {
  c = J(c);
  for (var e = 0; e < c.length; e++)
    if (c[e] != d && c[e].Bk) {
      var f = c[e].Bk();
      if (g.Wd.Gf(f[0], a)) return !0;
    }
  return !1;
};
g.bb.CL = function (a) {
  a = a.trim();
  var c = g.bb.JE(a, this.W()),
    d = this.getValue();
  if (d != a && d != c) {
    a = J(this.W().B);
    for (var e = 0; e < a.length; e++) a[e].kH && a[e].kH(d, c);
  }
  return c;
};
g.bb.Ji = function (a) {
  function c(h, k) {
    for (var l = 0; l < h.length; l++) {
      var m = h[l][0],
        n = h[l][1],
        p = g.g.xml.createElement("block");
      p.setAttribute("type", k);
      p.setAttribute("gap", 16);
      var q = g.g.xml.createElement("mutation");
      q.setAttribute("name", m);
      p.appendChild(q);
      for (m = 0; m < n.length; m++) {
        var t = g.g.xml.createElement("arg");
        t.setAttribute("name", n[m]);
        q.appendChild(t);
      }
      d.push(p);
    }
  }
  var d = [];
  if (g.Ob.procedures_defnoreturn) {
    var e = g.g.xml.createElement("block");
    e.setAttribute("type", "procedures_defnoreturn");
    e.setAttribute("gap", 16);
    var f = g.g.xml.createElement("field");
    f.setAttribute("name", "NAME");
    f.appendChild(g.g.xml.createTextNode(g.m.PROCEDURES_DEFNORETURN_PROCEDURE));
    e.appendChild(f);
    d.push(e);
  }
  g.Ob.procedures_defreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_defreturn"),
    e.setAttribute("gap", 16),
    (f = g.g.xml.createElement("field")),
    f.setAttribute("name", "NAME"),
    f.appendChild(g.g.xml.createTextNode(g.m.PROCEDURES_DEFRETURN_PROCEDURE)),
    e.appendChild(f),
    d.push(e));
  g.Ob.procedures_ifreturn &&
    ((e = g.g.xml.createElement("block")),
    e.setAttribute("type", "procedures_ifreturn"),
    e.setAttribute("gap", 16),
    d.push(e));
  d.length && d[d.length - 1].setAttribute("gap", 24);
  a = g.bb.ID(a);
  c(a[0], "procedures_callnoreturn");
  c(a[1], "procedures_callreturn");
  return d;
};
g.bb.LA = function (a) {
  for (
    var c = [], d = eb(a, "procedures_mutatorarg"), e = 0, f;
    (f = d[e]);
    e++
  )
    c.push(G(f, "NAME"));
  d = g.g.xml.createElement("xml");
  e = g.g.xml.createElement("block");
  e.setAttribute("type", "procedures_mutatorarg");
  f = g.g.xml.createElement("field");
  f.setAttribute("name", "NAME");
  c = g.g.xml.createTextNode(g.ma.Cy(g.bb.AB, c));
  f.appendChild(c);
  e.appendChild(f);
  d.appendChild(e);
  if ((c = g.g.ya.ns(d))) {
    if (!a.options.Vg)
      throw Error("Existing toolbox is null.  Can't create new toolbox.");
    if (g.g.ya.xm(c)) {
      if (!a.Ba)
        throw Error("Existing toolbox has no categories.  Can't change mode.");
      a.options.Vg = c;
      a.Ba.Ha(c);
    } else {
      if (!a.va)
        throw Error("Existing toolbox has categories.  Can't change mode.");
      a.options.Vg = c;
      a.va.show(c);
    }
  } else if (a.options.Vg) throw Error("Can't nullify an existing toolbox.");
};
g.bb.$F = function (a) {
  if (a.type == g.h.Qn && "mutator" === a.Yr && a.Qk) {
    a = g.Ab.rm(a.ic).Yc(a.fb);
    var c = a.type;
    if ("procedures_defnoreturn" == c || "procedures_defreturn" == c)
      (a = a.ud.o), g.bb.LA(a), K(a, g.bb.ZF);
  }
};
g.bb.ZF = function (a) {
  (a.type != g.h.Bq && a.type != g.h.vv && a.type != g.h.gB) ||
    g.bb.LA(g.Ab.rm(a.ic));
};
g.bb.SE = function (a, c) {
  var d = [];
  c = J(c);
  for (var e = 0; e < c.length; e++)
    if (c[e].dF) {
      var f = c[e].dF();
      f && g.Wd.Gf(f, a) && d.push(c[e]);
    }
  return d;
};
g.bb.wL = function (a) {
  var c = g.h.Qa,
    d = a.Bk()[0],
    e = a.zc(!0);
  a = g.bb.SE(d, a.B);
  d = 0;
  for (var f; (f = a[d]); d++) {
    var h = f.zc();
    h = h && g.R.Xc(h);
    f.ke(e);
    var k = f.zc();
    k = k && g.R.Xc(k);
    h != k &&
      ((g.h.Qa = !1),
      g.h.Ea(new g.h.ih(f, "mutation", null, h, k)),
      (g.h.Qa = c));
  }
};
g.bb.dL = function (a, c) {
  c = c.tb(!1);
  for (var d = 0; d < c.length; d++)
    if (c[d].Bk) {
      var e = c[d].Bk();
      if (e && g.Wd.Gf(e[0], a)) return c[d];
    }
  return null;
};
g.Fb = {};
g.Fb.names = {
  NB: "escape",
  oi: "delete",
  tB: "copy",
  yB: "cut",
  bD: "paste",
  vD: "undo",
  fD: "redo",
};
g.Fb.OG = function () {
  var a = {
    name: g.Fb.names.NB,
    Na: function (c) {
      return !c.options.readOnly;
    },
    Ca: function () {
      g.mc();
      return !0;
    },
  };
  g.Sa.D.register(a);
  N(g.g.P.Pq, a.name);
};
g.Fb.zu = function () {
  var a = {
    name: g.Fb.names.oi,
    Na: function (c) {
      return !c.options.readOnly && g.selected && g.selected.sd();
    },
    Ca: function (c, d) {
      d.preventDefault();
      if (g.nf.Ri()) return !1;
      g.ey();
      return !0;
    },
  };
  g.Sa.D.register(a);
  N(g.g.P.oi, a.name);
  N(g.g.P.eB, a.name);
};
g.Fb.GG = function () {
  var a = {
    name: g.Fb.names.tB,
    Na: function (d) {
      return (
        !d.options.readOnly &&
        !g.nf.Ri() &&
        g.selected &&
        g.selected.sd() &&
        g.selected.Mc()
      );
    },
    Ca: function () {
      g.mc();
      g.os(g.selected);
      return !0;
    },
  };
  g.Sa.D.register(a);
  var c = O(g.g.P.Eq, [g.g.P.jh]);
  N(c, a.name);
  c = O(g.g.P.Eq, [g.g.P.Dj]);
  N(c, a.name);
  c = O(g.g.P.Eq, [g.g.P.Nj]);
  N(c, a.name);
};
g.Fb.HG = function () {
  var a = {
    name: g.Fb.names.yB,
    Na: function (d) {
      return (
        !d.options.readOnly &&
        !g.nf.Ri() &&
        g.selected &&
        g.selected.sd() &&
        g.selected.Mc() &&
        !g.selected.B.Tf
      );
    },
    Ca: function () {
      g.os(g.selected);
      g.ey();
      return !0;
    },
  };
  g.Sa.D.register(a);
  var c = O(g.g.P.Ho, [g.g.P.jh]);
  N(c, a.name);
  c = O(g.g.P.Ho, [g.g.P.Dj]);
  N(c, a.name);
  c = O(g.g.P.Ho, [g.g.P.Nj]);
  N(c, a.name);
};
g.Fb.aH = function () {
  var a = {
    name: g.Fb.names.bD,
    Na: function (d) {
      return !d.options.readOnly && !g.nf.Ri();
    },
    Ca: function () {
      return g.Xp();
    },
  };
  g.Sa.D.register(a);
  var c = O(g.g.P.Kr, [g.g.P.jh]);
  N(c, a.name);
  c = O(g.g.P.Kr, [g.g.P.Dj]);
  N(c, a.name);
  c = O(g.g.P.Kr, [g.g.P.Nj]);
  N(c, a.name);
};
g.Fb.Cu = function () {
  var a = {
    name: g.Fb.names.vD,
    Na: function (d) {
      return !d.options.readOnly && !g.nf.Ri();
    },
    Ca: function (d) {
      g.mc();
      hb(d, !1);
      return !0;
    },
  };
  g.Sa.D.register(a);
  var c = O(g.g.P.ck, [g.g.P.jh]);
  N(c, a.name);
  c = O(g.g.P.ck, [g.g.P.Dj]);
  N(c, a.name);
  c = O(g.g.P.ck, [g.g.P.Nj]);
  N(c, a.name);
};
g.Fb.Bu = function () {
  var a = {
    name: g.Fb.names.fD,
    Na: function (d) {
      return !g.nf.Ri() && !d.options.readOnly;
    },
    Ca: function (d) {
      g.mc();
      hb(d, !0);
      return !0;
    },
  };
  g.Sa.D.register(a);
  var c = O(g.g.P.ck, [g.g.P.ug, g.g.P.jh]);
  N(c, a.name);
  c = O(g.g.P.ck, [g.g.P.ug, g.g.P.Dj]);
  N(c, a.name);
  c = O(g.g.P.ck, [g.g.P.ug, g.g.P.Nj]);
  N(c, a.name);
  c = O(g.g.P.CD, [g.g.P.jh]);
  N(c, a.name);
};
g.Fb.JG = function () {
  g.Fb.OG();
  g.Fb.zu();
  g.Fb.GG();
  g.Fb.HG();
  g.Fb.aH();
  g.Fb.Cu();
  g.Fb.Bu();
};
g.Sa = function () {
  g.Sa.D = this;
  this.Nd = Object.create(null);
  this.Tk = Object.create(null);
  g.Fb.JG();
  g.navigation.YG();
};
g.Sa.Hp = { zK: g.g.P.ug, qI: g.g.P.jh, eI: g.g.P.Dj, pJ: g.g.P.Nj };
g.Sa.prototype.register = function (a, c) {
  if (this.Nd[a.name] && !c)
    throw Error('Shortcut with name "' + a.name + '" already exists.');
  this.Nd[a.name] = a;
};
g.Sa.prototype.unregister = function (a) {
  if (!this.Nd[a])
    return (
      console.warn('Keyboard shortcut with name "' + a + '" not found.'), !1
    );
  for (var c in this.Tk) {
    var d = c,
      e = this.Tk[d],
      f = e.indexOf(a);
    -1 < f && (e.splice(f, 1), 0 == e.length && delete this.Tk[d]);
  }
  delete this.Nd[a];
  return !0;
};
function N(a, c, d) {
  var e = g.Sa.D,
    f = e.Tk[a];
  if (f && !d)
    throw Error(
      'Shortcut with name "' + c + '" collides with shortcuts ' + f.toString()
    );
  f && d ? f.unshift(c) : (e.Tk[a] = [c]);
}
g.Sa.prototype.du = function (a, c) {
  var d = "";
  for (e in g.Sa.Hp) c.getModifierState(e) && ("" != d && (d += "+"), (d += e));
  "" != d && c.keyCode
    ? (d = d + "+" + c.keyCode)
    : c.keyCode && (d = c.keyCode.toString());
  d = this.Tk[d] || [];
  if (!d) return !1;
  var e = 0;
  for (var f; (f = d[e]); e++)
    if (((f = this.Nd[f]), (!f.Na || f.Na(a)) && f.Ca && f.Ca(a, c, f)))
      return !0;
  return !1;
};
function O(a, c) {
  var d = "";
  if (c) {
    for (var e = g.g.object.values(g.Sa.Hp), f = 0, h; (h = c[f]); f++)
      if (0 > e.indexOf(h)) throw Error(h + " is not a valid modifier key.");
    for (var k in g.Sa.Hp)
      -1 < c.indexOf(g.Sa.Hp[k]) && ("" != d && (d += "+"), (d += k));
  }
  "" != d && a ? (d = d + "+" + a) : a && (d = a.toString());
  return d;
}
new g.Sa();
g.Ol = function (a, c, d, e) {
  this.B = a;
  this.name = c;
  this.type = d || "";
  this.wF = e || g.g.Kg();
  g.h.Ea(new g.h.ae(this));
};
g.Ol.prototype.zb = function () {
  return this.wF;
};
g.Ol.Mx = function (a, c) {
  a = a.name.toLowerCase();
  c = c.name.toLowerCase();
  return a < c ? -1 : a == c ? 0 : 1;
};
g.ma = {};
g.ma.uw = g.Bi;
g.ma.Ax = function (a) {
  var c = J(a);
  a = Object.create(null);
  for (var d = 0; d < c.length; d++) {
    var e = qa(c[d]);
    if (e)
      for (var f = 0; f < e.length; f++) {
        var h = e[f],
          k = h.zb();
        k && (a[k] = h);
      }
  }
  c = [];
  for (k in a) c.push(a[k]);
  return c;
};
g.ma.ov = {};
g.ma.GD = function (a) {
  a = J(a);
  for (var c = Object.create(null), d = 0, e; (e = a[d]); d++) {
    var f = e.eL;
    !f &&
      e.YE &&
      ((f = e.YE),
      g.ma.ov[e.type] ||
        (console.warn(
          "Function getDeveloperVars() deprecated. Use getDeveloperVariables() (block type '" +
            e.type +
            "')"
        ),
        (g.ma.ov[e.type] = !0)));
    if (f) for (e = f(), f = 0; f < e.length; f++) c[e[f]] = !0;
  }
  return Object.keys(c);
};
g.ma.Ji = function (a) {
  var c = [],
    d = document.createElement("button");
  d.setAttribute("text", "%{BKY_NEW_VARIABLE}");
  d.setAttribute("callbackKey", "CREATE_VARIABLE");
  Ec(a, function (e) {
    g.ma.Yx(e.hL());
  });
  c.push(d);
  a = g.ma.ME(a);
  return (c = c.concat(a));
};
g.ma.ME = function (a) {
  a = a.vm("");
  var c = [];
  if (0 < a.length) {
    var d = a[a.length - 1];
    if (g.Ob.variables_set) {
      var e = g.g.xml.createElement("block");
      e.setAttribute("type", "variables_set");
      e.setAttribute("gap", g.Ob.math_change ? 8 : 24);
      e.appendChild(g.ma.Vs(d));
      c.push(e);
    }
    g.Ob.math_change &&
      ((e = g.g.xml.createElement("block")),
      e.setAttribute("type", "math_change"),
      e.setAttribute("gap", g.Ob.variables_get ? 20 : 8),
      e.appendChild(g.ma.Vs(d)),
      (d = g.R.fg(
        '<value name="DELTA"><shadow type="math_number"><field name="NUM">1</field></shadow></value>'
      )),
      e.appendChild(d),
      c.push(e));
    if (g.Ob.variables_get) {
      a.sort(g.Ol.Mx);
      d = 0;
      for (var f; (f = a[d]); d++)
        (e = g.g.xml.createElement("block")),
          e.setAttribute("type", "variables_get"),
          e.setAttribute("gap", 8),
          e.appendChild(g.ma.Vs(f)),
          c.push(e);
    }
  }
  return c;
};
g.ma.hx = "ijkmnopqrstuvwxyzabcdefgh";
g.ma.OE = function (a) {
  return g.ma.Cy(g.ma.hx.charAt(0), a.Ws());
};
g.ma.Cy = function (a, c) {
  if (!c.length) return a;
  for (var d = g.ma.hx, e = "", f = d.indexOf(a); ; ) {
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
g.ma.Yx = function (a, c, d) {
  function e(h) {
    g.ma.hA(g.m.NEW_VARIABLE_TITLE, h, function (k) {
      if (k) {
        var l = g.ma.bG(k, a);
        if (l) {
          if (l.type == f)
            var m = g.m.VARIABLE_ALREADY_EXISTS.replace("%1", l.name);
          else
            (m = g.m.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE),
              (m = m.replace("%1", l.name).replace("%2", l.type));
          g.alert(m, function () {
            e(k);
          });
        } else a.We(k, f), c && c(k);
      } else c && c(null);
    });
  }
  var f = d || "";
  e("");
};
g.ma.We = g.ma.Yx;
g.ma.Eu = function (a, c) {
  function d(e) {
    var f = g.m.RENAME_VARIABLE_TITLE.replace("%1", c.name);
    g.ma.hA(f, e, function (h) {
      if (h) {
        var k = g.ma.cG(h, c.type, a);
        k
          ? ((k = g.m.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE.replace(
              "%1",
              k.name
            ).replace("%2", k.type)),
            g.alert(k, function () {
              d(h);
            }))
          : a.mj(c.zb(), h);
      }
    });
  }
  d("");
};
g.ma.hA = function (a, c, d) {
  g.prompt(a, c, function (e) {
    e &&
      ((e = e.replace(/[\s\xa0]+/g, " ").trim()),
      e == g.m.RENAME_VARIABLE || e == g.m.NEW_VARIABLE) &&
      (e = null);
    d(e);
  });
};
g.ma.cG = function (a, c, d) {
  d = d.Ja.Ki();
  a = a.toLowerCase();
  for (var e = 0, f; (f = d[e]); e++)
    if (f.name.toLowerCase() == a && f.type != c) return f;
  return null;
};
g.ma.bG = function (a, c) {
  c = c.Ja.Ki();
  a = a.toLowerCase();
  for (var d = 0, e; (e = c[d]); d++) if (e.name.toLowerCase() == a) return e;
  return null;
};
g.ma.Vs = function (a) {
  var c = g.g.xml.createElement("field");
  c.setAttribute("name", "VAR");
  c.setAttribute("id", a.zb());
  c.setAttribute("variabletype", a.type);
  a = g.g.xml.createTextNode(a.name);
  c.appendChild(a);
  return c;
};
g.ma.My = function (a, c, d, e) {
  var f = g.ma.af(a, c, d, e);
  f || (f = g.ma.kE(a, c, d, e));
  return f;
};
g.ma.af = function (a, c, d, e) {
  var f = a.Yh,
    h = null;
  if (c && ((h = a.Ng(c)), !h && f && (h = f.Ng(c)), h)) return h;
  if (d) {
    if (void 0 == e)
      throw Error("Tried to look up a variable by name without a type");
    h = a.af(d, e);
    !h && f && (h = f.af(d, e));
  }
  return h;
};
g.ma.kE = function (a, c, d, e) {
  var f = a.Yh;
  d || (d = g.ma.OE(a.Tf ? a.Ra : a));
  return f ? f.We(d, e, c) : a.We(d, e, c);
};
g.ma.Dy = function (a, c) {
  a = a.Ki();
  var d = [];
  if (c.length != a.length)
    for (var e = 0; e < a.length; e++) {
      var f = a[e];
      -1 == c.indexOf(f) && d.push(f);
    }
  return d;
};
g.X = {};
g.X.ue = null;
g.X.fp = null;
g.X.cf = "";
g.X.ff = "";
g.X.Va = function () {
  g.X.Ya ||
    ((g.X.Ya = document.createElement("div")),
    (g.X.Ya.className = "blocklyWidgetDiv"),
    (g.Vp || document.body).appendChild(g.X.Ya));
};
g.X.show = function (a, c, d) {
  g.X.Fa();
  g.X.ue = a;
  g.X.fp = d;
  a = g.X.Ya;
  a.style.direction = c ? "rtl" : "ltr";
  a.style.display = "block";
  c = g.Jf();
  g.X.cf = c.ub.Ze();
  g.X.ff = c.Mg().Ze();
  g.g.j.Hb(a, g.X.cf);
  g.g.j.Hb(a, g.X.ff);
};
g.X.Fa = function () {
  if (g.X.isVisible()) {
    g.X.ue = null;
    var a = g.X.Ya;
    a.style.display = "none";
    a.style.left = "";
    a.style.top = "";
    g.X.fp && g.X.fp();
    g.X.fp = null;
    a.textContent = "";
    g.X.cf && (g.g.j.Ac(a, g.X.cf), (g.X.cf = ""));
    g.X.ff && (g.g.j.Ac(a, g.X.ff), (g.X.ff = ""));
    da(g.Jf());
  }
};
g.X.isVisible = function () {
  return !!g.X.ue;
};
g.X.Gk = function (a) {
  g.X.ue == a && g.X.Fa();
};
g.X.Xm = function (a, c, d) {
  g.X.Ya.style.left = a + "px";
  g.X.Ya.style.top = c + "px";
  g.X.Ya.style.height = d + "px";
};
g.X.xG = function (a, c, d, e) {
  var f = g.X.SD(a, c, d);
  a = g.X.RD(a, c, d, e);
  0 > f ? g.X.Xm(a, 0, d.height + f) : g.X.Xm(a, f, d.height);
};
g.X.RD = function (a, c, d, e) {
  if (e)
    return (
      (c = Math.max(c.right - d.width, a.left)), Math.min(c, a.right - d.width)
    );
  c = Math.min(c.left, a.right - d.width);
  return Math.max(c, a.left);
};
g.X.SD = function (a, c, d) {
  return c.bottom + d.height >= a.bottom ? c.top - d.height : c.bottom;
};
g.VERSION = "uncompiled";
g.Hm = null;
g.selected = null;
g.yk = [];
g.jk = null;
g.Vo = null;
g.js = null;
g.QK = null;
g.Vp = null;
g.HH = function (a) {
  return new g.g.Zd(a.Gx, a.Fx);
};
g.EL = function (a) {
  pa(a);
};
g.zn = function (a) {
  for (; a.options.qc; ) a = a.options.qc;
  var c = w(a),
    d = c.parentNode;
  if (d) {
    var e = d.offsetWidth;
    d = d.offsetHeight;
    c.Gx != e && (c.setAttribute("width", e + "px"), (c.Gx = e));
    c.Fx != d && (c.setAttribute("height", d + "px"), (c.Fx = d));
    a.resize();
  }
};
g.du = function (a) {
  var c = g.Hm;
  !c || g.g.yp(a) || (c.qa && !c.isVisible()) || g.Sa.D.du(c, a);
};
g.ey = function () {
  var a = g.selected;
  a.B.Tf || (g.h.ea(!0), g.mc(), a.L(!0, !0), g.h.ea(!1));
};
g.os = function (a) {
  if (a.Ok) a = null;
  else {
    var c = g.R.Cg(a, !0);
    g.R.rE(c);
    var d = a.Ta();
    c.setAttribute("x", a.M ? -d.x : d.x);
    c.setAttribute("y", d.y);
    a = { xml: c, source: a.B, QH: g.g.Xs(a, !0) };
  }
  a && ((g.jk = a.xml), (g.Vo = a.source), (g.js = a.QH));
};
g.Xp = function () {
  if (!g.jk) return !1;
  var a = g.Vo;
  a.Tf && (a = a.Ra);
  return g.js && fb(a, g.js) ? (g.h.ea(!0), a.Xp(g.jk), g.h.ea(!1), !0) : !1;
};
g.duplicate = function (a) {
  var c = g.jk,
    d = g.Vo;
  g.os(a);
  a.B.Xp(g.jk);
  g.jk = c;
  g.Vo = d;
};
g.xL = function (a) {
  g.g.yp(a) || a.preventDefault();
};
g.mc = function (a) {
  g.I.Fa();
  g.X.Fa();
  g.G.Oi();
  if (!a) {
    a = g.Jf();
    if (a.Fc && a.Fc.If) {
      var c = a.Fc;
      c.If.isVisible() && (c.If.Fa(), Hc(c, !1));
    }
    (a = a.Ba) && L(a) && L(a).fk && a.SK();
  }
};
g.Jf = function () {
  return g.Hm;
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
g.JF = function (a) {
  return function () {
    Rb(this, a);
  };
};
g.ts = function (a) {
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
        : (g.Ob[e] &&
            console.warn(
              "Block definition #" +
                c +
                ' in JSON array overwrites prior definition of "' +
                e +
                '".'
            ),
          (g.Ob[e] = { Da: g.JF(d) }));
    } else
      console.warn(
        "Block definition #" + c + " in JSON array is " + d + ". Skipping."
      );
  }
};
g.Aa = function (a, c, d, e, f, h) {
  function k(t) {
    var B = !f;
    t = g.Touch.AH(t);
    for (var ea = 0, na; (na = t[ea]); ea++)
      if (!B || g.Touch.Uu(na))
        g.Touch.sH(na), d ? e.call(d, na) : e(na), (l = !0);
  }
  var l = !1,
    m = [];
  if (g.g.global.PointerEvent && c in g.Touch.tf)
    for (var n = 0, p; (p = g.Touch.tf[c][n]); n++)
      a.addEventListener(p, k, !1), m.push([a, p, k]);
  else if ((a.addEventListener(c, k, !1), m.push([a, c, k]), c in g.Touch.tf)) {
    var q = function (t) {
      k(t);
      var B = !h;
      l && B && t.preventDefault();
    };
    for (n = 0; (p = g.Touch.tf[c][n]); n++)
      a.addEventListener(p, q, !1), m.push([a, p, q]);
  }
  return m;
};
g.Tc = function (a, c, d, e) {
  function f(n) {
    d ? e.call(d, n) : e(n);
  }
  var h = [];
  if (g.g.global.PointerEvent && c in g.Touch.tf)
    for (var k = 0, l; (l = g.Touch.tf[c][k]); k++)
      a.addEventListener(l, f, !1), h.push([a, l, f]);
  else if ((a.addEventListener(c, f, !1), h.push([a, c, f]), c in g.Touch.tf)) {
    var m = function (n) {
      if (n.changedTouches && 1 == n.changedTouches.length) {
        var p = n.changedTouches[0];
        n.clientX = p.clientX;
        n.clientY = p.clientY;
      }
      f(n);
      n.preventDefault();
    };
    for (k = 0; (l = g.Touch.tf[c][k]); k++)
      a.addEventListener(l, m, !1), h.push([a, l, m]);
  }
  return h;
};
g.ab = function (a) {
  for (; a.length; ) {
    var c = a.pop();
    c[0].removeEventListener(c[1], c[2], !1);
  }
};
g.GF = function (a) {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(a);
};
g.kL = function (a) {
  return g.g.Cb.iz(a);
};
g.TD = function () {
  g.Ic("LOGIC_HUE", ["Blocks", "logic", "HUE"], void 0);
  g.Ic("LOGIC_HUE", ["Constants", "Logic", "HUE"], 210);
  g.Ic("LOOPS_HUE", ["Blocks", "loops", "HUE"], void 0);
  g.Ic("LOOPS_HUE", ["Constants", "Loops", "HUE"], 120);
  g.Ic("MATH_HUE", ["Blocks", "math", "HUE"], void 0);
  g.Ic("MATH_HUE", ["Constants", "Math", "HUE"], 230);
  g.Ic("TEXTS_HUE", ["Blocks", "texts", "HUE"], void 0);
  g.Ic("TEXTS_HUE", ["Constants", "Text", "HUE"], 160);
  g.Ic("LISTS_HUE", ["Blocks", "lists", "HUE"], void 0);
  g.Ic("LISTS_HUE", ["Constants", "Lists", "HUE"], 260);
  g.Ic("COLOUR_HUE", ["Blocks", "colour", "HUE"], void 0);
  g.Ic("COLOUR_HUE", ["Constants", "Colour", "HUE"], 20);
  g.Ic("VARIABLES_HUE", ["Blocks", "variables", "HUE"], void 0);
  g.Ic("VARIABLES_HUE", ["Constants", "Variables", "HUE"], 330);
  g.Ic("VARIABLES_DYNAMIC_HUE", ["Constants", "VariablesDynamic", "HUE"], 310);
  g.Ic("PROCEDURES_HUE", ["Blocks", "procedures", "HUE"], void 0);
};
g.Ic = function (a, c, d) {
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
g.KL = function (a) {
  g.Vp = a;
};
g.qb = function (a, c, d) {
  "function" != typeof a && g.qb.OA(a);
  this.dj = a;
  this.Zu = this.uu = this.mp = null;
  a = this.dj;
  if (Array.isArray(a)) {
    for (var e = !1, f = 0; f < a.length; f++) {
      var h = a[f][0];
      "string" == typeof h
        ? (a[f][0] = g.g.df(h))
        : (null != h.alt && (a[f][0].alt = g.g.df(h.alt)), (e = !0));
    }
    if (!(e || 2 > a.length)) {
      e = [];
      for (f = 0; f < a.length; f++) e.push(a[f][0]);
      f = g.g.$a.Su(e);
      h = g.g.$a.bE(e, f);
      var k = g.g.$a.cE(e, f);
      (!h && !k) ||
        f <= h + k ||
        (h && (this.uu = e[0].substring(0, h - 1)),
        k && (this.Zu = e[0].substr(1 - k)),
        (this.dj = g.qb.JD(a, h, k)));
    }
  }
  this.$k = this.getOptions(!1)[0];
  g.qb.A.constructor.call(this, this.$k[1], c, d);
  this.dl = this.ce = this.Qg = this.oc = this.hn = null;
};
g.g.object.V(g.qb, g.Sd);
g.qb.aa = function (a) {
  return new g.qb(a.options, void 0, a);
};
g.qb.prototype.Tj = !0;
g.qb.jI = 25;
g.qb.nJ = 0.45;
g.qb.pC = 5;
g.qb.qC = 2 * g.qb.pC;
g.qb.rv = g.g.userAgent.Ej ? "\u25bc" : "\u25be";
b = g.qb.prototype;
b.Fv = "default";
b.Hk = function () {
  this.Tu() ? Eb(this) : (this.hs = this.J.pa());
  Fb(this);
  this.Qg = g.g.j.N(g.g.H.no, {}, this.Id);
  this.$().XB
    ? ((this.dl = g.g.j.N(
        g.g.H.no,
        { height: this.$().tl + "px", width: this.$().tl + "px" },
        this.Id
      )),
      this.dl.setAttributeNS(g.g.j.Oe, "xlink:href", this.$().YB))
    : ((this.ce = g.g.j.N(g.g.H.Ir, {}, this.Dc)),
      this.ce.appendChild(
        document.createTextNode(this.J.M ? g.qb.rv + " " : " " + g.qb.rv)
      ),
      this.J.M
        ? this.Dc.insertBefore(this.ce, this.tj)
        : this.Dc.appendChild(this.ce));
  this.Qb && g.g.j.Hb(this.Qb, "blocklyDropdownRect");
};
b.Tu = function () {
  return !this.$().Rq || (this.$().Rq && !this.J.Ga);
};
b.di = function (a) {
  this.oc = this.Ms();
  this.oc.ju =
    a && "number" === typeof a.clientX ? new g.g.K(a.clientX, a.clientY) : null;
  this.oc.Ha(g.G.Gy());
  g.g.j.Hb(this.oc.mb, "blocklyDropdownMenu");
  if (this.$().WB) {
    a = this.J.Ga ? this.J.getParent().$s() : this.J.$s();
    var c = this.J.Ga ? this.J.getParent().style.xf : this.J.style.xf;
    g.G.Pd(a, c);
  }
  g.G.tA(this, this.Ns.bind(this));
  this.oc.focus();
  this.hn && this.oc.ef(this.hn);
  this.$b();
};
b.Ms = function () {
  var a = new g.cr();
  a.ci(g.g.eb.zo.BC);
  var c = this.getOptions(!1);
  this.hn = null;
  for (var d = 0; d < c.length; d++) {
    var e = c[d][0],
      f = c[d][1];
    if ("object" == typeof e) {
      var h = new Image(e.width, e.height);
      h.src = e.src;
      h.alt = e.alt || "";
      e = h;
    }
    e = new g.dr(e, f);
    e.ci(g.g.eb.zo.XC);
    e.Ku = this.J.M;
    e.fs = !0;
    a.re.push(e);
    e.gs = f == this.ed;
    f == this.ed && (this.hn = e);
    Wb(e, this.lF, this);
  }
  return a;
};
b.Ns = function () {
  this.oc && this.oc.L();
  this.hn = this.oc = null;
  this.$b();
};
b.lF = function (a) {
  g.G.Gk(this, !0);
  this.Uz(a);
};
b.Uz = function (a) {
  this.setValue(a.getValue());
};
g.qb.JD = function (a, c, d) {
  for (var e = [], f = 0; f < a.length; f++) {
    var h = a[f][0],
      k = a[f][1];
    h = h.substring(c, h.length - d);
    e[f] = [h, k];
  }
  return e;
};
b = g.qb.prototype;
b.getOptions = function (a) {
  return "function" == typeof this.dj
    ? ((this.mp && a) || ((this.mp = this.dj.call(this)), g.qb.OA(this.mp)),
      this.mp)
    : this.dj;
};
b.Hi = function (a) {
  for (var c = !1, d = this.getOptions(!0), e = 0, f; (f = d[e]); e++)
    if (f[1] == a) {
      c = !0;
      break;
    }
  return c
    ? a
    : (this.J &&
        console.warn(
          "Cannot set the dropdown's value to an unavailable option. Block type: " +
            this.J.type +
            ", Field name: " +
            this.name +
            ", Value: " +
            a
        ),
      null);
};
b.Eh = function (a) {
  g.qb.A.Eh.call(this, a);
  a = this.getOptions(!0);
  for (var c = 0, d; (d = a[c]); c++) d[1] == this.ed && (this.$k = d);
};
b.$b = function () {
  this.Qb &&
    (this.Qb.setAttribute("stroke", this.J.style.xf),
    this.oc
      ? this.Qb.setAttribute("fill", this.J.style.xf)
      : this.Qb.setAttribute("fill", "transparent"));
  this.J &&
    this.ce &&
    (this.ce.style.fill = this.J.Ga ? this.J.style.Xo : this.J.style.Gg);
};
b.nj = function () {
  this.tj.nodeValue = "";
  this.Qg.style.display = "none";
  var a = this.$k && this.$k[0];
  if (a && "object" == typeof a) {
    this.Qg.style.display = "";
    this.Qg.setAttributeNS(g.g.j.Oe, "xlink:href", a.src);
    this.Qg.setAttribute("height", a.height);
    this.Qg.setAttribute("width", a.width);
    var c = Number(a.height);
    a = Number(a.width);
    var d = !!this.Qb,
      e = Math.max(d ? this.$().Tv : 0, c + g.qb.qC);
    d = d ? this.$().rl : 0;
    var f = this.dl
      ? Ic(this, a + d, e / 2 - this.$().tl / 2)
      : g.g.j.bt(this.ce, this.$().nh, this.$().oh, this.$().mh);
    this.dd.width = a + f + 2 * d;
    this.dd.height = e;
    var h = 0;
    this.J.M
      ? this.Qg.setAttribute("x", d + f)
      : ((h = a + f),
        this.Dc.setAttribute("text-anchor", "end"),
        this.Qg.setAttribute("x", d));
    this.Qg.setAttribute("y", e / 2 - c / 2);
    Ib(this, h + d, a + f);
  } else
    (this.tj.nodeValue = Hb(this)),
      g.g.j.Hb(this.Dc, "blocklyDropdownText"),
      this.Dc.setAttribute("text-anchor", "start"),
      (e = !!this.Qb),
      (c = Math.max(e ? this.$().Tv : 0, this.$().io)),
      (a = g.g.j.bt(this.Dc, this.$().nh, this.$().oh, this.$().mh)),
      (e = e ? this.$().rl : 0),
      (d = 0),
      this.dl && (d = Ic(this, a + e, c / 2 - this.$().tl / 2)),
      (this.dd.width = a + d + 2 * e),
      (this.dd.height = c),
      Ib(this, e, a);
  Jb(this);
};
function Ic(a, c, d) {
  if (!a.dl) return 0;
  var e = a.Qb ? a.$().rl : 0,
    f = a.$().ZB,
    h = a.$().tl;
  a.dl.setAttribute(
    "transform",
    "translate(" + (a.J.M ? e : c + f) + "," + d + ")"
  );
  return h + f;
}
b.ht = function () {
  if (!this.$k) return null;
  var a = this.$k[0];
  return "object" == typeof a ? a.alt : a;
};
g.qb.OA = function (a) {
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
g.qb.prototype.Tb = function (a) {
  if (this.oc)
    switch (a.name) {
      case g.navigation.Gb.ld:
        return Ub(this.oc), !0;
      case g.navigation.Gb.jd:
        return (a = this.oc), Vb(a, a.re.indexOf(a.Kh), 1), !0;
      default:
        return !1;
    }
  return g.qb.A.Tb.call(this, a);
};
g.Hf.register("field_dropdown", g.qb);
g.h.hg = function (a, c, d) {
  g.h.hg.A.constructor.call(this, a ? a.B.id : void 0);
  this.fb = a ? a.id : null;
  this.Qk = c;
  this.Yr = d;
};
g.g.object.V(g.h.hg, g.h.$d);
g.h.hg.prototype.type = g.h.Qn;
g.h.hg.prototype.sa = function () {
  var a = g.h.hg.A.sa.call(this);
  a.isOpen = this.Qk;
  a.bubbleType = this.Yr;
  a.blockId = this.fb;
  return a;
};
g.h.hg.prototype.aa = function (a) {
  g.h.hg.A.aa.call(this, a);
  this.Qk = a.isOpen;
  this.Yr = a.bubbleType;
  this.fb = a.blockId;
};
g.D.register(g.D.ba.Pb, g.h.Qn, g.h.hg);
g.pf = function (a) {
  this.U = a;
  this.ad = null;
};
b = g.pf.prototype;
b.$D = !0;
b.Co = 17;
b.Dg = null;
b.rp = null;
function jc(a) {
  if (!a.ad) {
    a.ad = g.g.j.N(g.g.H.Gc, { class: "blocklyIconGroup" }, null);
    a.U.nc && g.g.j.Hb(a.ad, "blocklyIconGroupReadonly");
    var c = a.ad;
    g.g.j.N(
      g.g.H.Bd,
      {
        class: "blocklyIconShape",
        rx: "4",
        ry: "4",
        height: "16",
        width: "16",
      },
      c
    );
    g.g.j.N(
      g.g.H.Xd,
      {
        class: "blocklyIconSymbol",
        d:
          "m4.203,7.296 0,1.368 -0.92,0.677 -0.11,0.41 0.9,1.559 0.41,0.11 1.043,-0.457 1.187,0.683 0.127,1.134 0.3,0.3 1.8,0 0.3,-0.299 0.127,-1.138 1.185,-0.682 1.046,0.458 0.409,-0.11 0.9,-1.559 -0.11,-0.41 -0.92,-0.677 0,-1.366 0.92,-0.677 0.11,-0.41 -0.9,-1.559 -0.409,-0.109 -1.046,0.458 -1.185,-0.682 -0.127,-1.138 -0.3,-0.299 -1.8,0 -0.3,0.3 -0.126,1.135 -1.187,0.682 -1.043,-0.457 -0.41,0.11 -0.899,1.559 0.108,0.409z",
      },
      c
    );
    g.g.j.N(
      g.g.H.Gq,
      { class: "blocklyIconShape", r: "2.7", cx: "8", cy: "8" },
      c
    );
    a.U.pa().appendChild(a.ad);
    g.Aa(a.ad, "mouseup", a, a.st);
    a.xj();
  }
}
b.L = function () {
  g.g.j.removeNode(this.ad);
  this.ad = null;
  this.Lb(!1);
  this.U = null;
};
b.xj = function () {};
b.isVisible = function () {
  return !!this.Dg;
};
b.st = function (a) {
  this.U.B.Lc() || this.U.nc || g.g.Sk(a) || this.Lb(!this.isVisible());
};
b.$b = function () {
  this.isVisible() && this.Dg.Pd(this.U.style.Gg);
};
function Ra(a, c) {
  a.rp = c;
  a.isVisible() && ((a = a.Dg), (a.Xb = c), a.Gu && jb(a));
}
function mc(a) {
  var c = a.U.Ta(),
    d = g.g.le(a.ad);
  c = new g.g.K(c.x + d.x + a.Co / 2, c.y + d.y + a.Co / 2);
  g.g.K.Gf(a.rp, c) || Ra(a, c);
}
g.He = function (a) {
  g.He.A.constructor.call(this, null);
  this.iA = a;
};
g.g.object.V(g.He, g.pf);
b = g.He.prototype;
b.kl = 0;
b.Kn = 0;
b.st = function (a) {
  this.U.td() && g.pf.prototype.st.call(this, a);
};
function Jc(a) {
  a.xn = g.g.j.N(g.g.H.wh, { x: g.za.xd, y: g.za.xd }, null);
  if (a.iA.length)
    for (var c = g.g.xml.createElement("xml"), d = 0, e; (e = a.iA[d]); d++) {
      var f = g.g.xml.createElement("block");
      f.setAttribute("type", e);
      c.appendChild(f);
    }
  else c = null;
  d = new g.kd({
    disable: !1,
    parentWorkspace: a.U.B,
    media: a.U.B.options.Um,
    rtl: a.U.M,
    horizontalLayout: !1,
    renderer: a.U.B.options.bq,
    rendererOverrides: a.U.B.options.cq,
  });
  d.jb = a.U.M ? g.g.ya.Yd.Sj : g.g.ya.Yd.yl;
  if ((e = !!c)) (d.Vg = g.g.ya.ns(c)), (d.pd = a.aF.bind(a));
  a.o = new g.cb(d);
  a.o.Fm = !0;
  K(a.o, g.h.ly);
  c = e ? Ac(a.o, g.g.H.Gc) : null;
  d = a.o.Va("blocklyMutatorBackground");
  c && d.insertBefore(c, a.o.vb);
  a.xn.appendChild(d);
  return a.xn;
}
b.xj = function () {
  g.He.A.xj.call(this);
  this.U.nc ||
    (this.U.td()
      ? this.ad && g.g.j.Ac(this.ad, "blocklyIconGroupReadonly")
      : (this.Lb(!1),
        this.ad && g.g.j.Hb(this.ad, "blocklyIconGroupReadonly")));
};
function Kc(a) {
  var c = 2 * g.za.xd,
    d = a.o.vb.getBBox(),
    e = d.width + d.x,
    f = d.height + 3 * c,
    h = L(a.o);
  if (h) {
    var k = h.op();
    f = Math.max(f, k.nd + 20);
    e += h.Og();
  }
  a.U.M && (e = -d.x);
  e += 3 * c;
  if (Math.abs(a.kl - e) > c || Math.abs(a.Kn - f) > c)
    (a.kl = e),
      (a.Kn = f),
      kb(a.Dg, e + c, f + c),
      a.xn.setAttribute("width", a.kl),
      a.xn.setAttribute("height", a.Kn);
  a.U.M && a.o.vb.setAttribute("transform", "translate(" + a.kl + ",0)");
  a.o.resize();
}
b.hG = function () {
  this.o && xc(this.o);
};
b.Lb = function (a) {
  if (a != this.isVisible())
    if ((g.h.Ea(new g.h.hg(this.U, a, "mutator")), a)) {
      this.Dg = new g.za(this.U.B, Jc(this), this.U.Db.Mb, this.rp, null, null);
      mb(this.Dg, this.U.id);
      nb(this.Dg, this.hG.bind(this));
      var c = this.o.options.Vg;
      a = L(this.o);
      c && (a.Da(this.o), a.show(c));
      this.Yf = this.U.gm(this.o);
      c = r(this.Yf, !1);
      for (var d = 0, e; (e = c[d]); d++) e.Ha();
      this.Yf.fq(!1);
      this.Yf.hm = !1;
      a ? ((c = 2 * a.wb), (a = this.Yf.M ? a.Og() + c : c)) : (a = c = 16);
      this.U.M && (a = -a);
      this.Yf.moveBy(a, c);
      if (this.U.Lu) {
        var f = this,
          h = this.U;
        h.Lu(this.Yf);
        this.kq = function () {
          h.Lu(f.Yf);
        };
        K(this.U.B, this.kq);
      }
      Kc(this);
      K(this.o, this.$H.bind(this));
      this.$b();
    } else
      (this.xn = null),
        this.o.L(),
        (this.Yf = this.o = null),
        this.Dg.L(),
        (this.Dg = null),
        (this.Kn = this.kl = 0),
        this.kq && (ib(this.U.B, this.kq), (this.kq = null));
};
b.$H = function (a) {
  if (!(a.Bt || (a.type == g.h.Fj && "disabled" == a.element))) {
    if (!this.o.Lc()) {
      a = this.o.tb(!1);
      for (var c = 0, d; (d = a[c]); c++) {
        var e = d.Ta();
        20 > e.y && d.moveBy(0, 20 - e.y);
        if (d.M) {
          var f = -20,
            h = L(this.o);
          h && (f -= h.Og());
          e.x > f && d.moveBy(f - e.x, 0);
        } else 20 > e.x && d.moveBy(20 - e.x, 0);
      }
    }
    if (this.Yf.B == this.o) {
      g.h.ea(!0);
      d = this.U;
      a = (a = d.zc()) && g.R.Xc(a);
      c = d.qa;
      d.qa = !1;
      d.Xl(this.Yf);
      d.qa = c;
      d.Rf();
      g.Jf().hb && g.navigation.YF(d);
      d.qa && d.Ha();
      c = (c = d.zc()) && g.R.Xc(c);
      if (a != c) {
        g.h.Ea(new g.h.ih(d, "mutation", null, a, c));
        var k = g.h.ac();
        setTimeout(function () {
          g.h.ea(k);
          d.lc();
          g.h.ea(!1);
        }, g.Rn);
      }
      this.o.Lc() || Kc(this);
      g.h.ea(!1);
    }
  }
};
b.aF = function () {
  var a = L(this.o);
  a = a ? a.Og() : 0;
  return {
    nd: 0,
    Ve: 0,
    xc: 0,
    Jc: 0,
    Vb: this.Kn,
    Kb: this.kl - a,
    Jb: 0,
    Eb: 0,
    Hc: 0,
    wc: this.o.M ? 0 : a,
  };
};
b.L = function () {
  this.U.ud = null;
  g.pf.prototype.L.call(this);
};
g.He.wu = function (a, c, d) {
  if (a && a.W().B) {
    d = y(c, d).connection;
    var e = a.ra();
    (e && e != c) ||
      d.ka == a ||
      (d.isConnected() && d.disconnect(), d.connect(a));
  }
};
g.He.ZK = function (a) {
  var c = null;
  if (a && a.options) {
    var d = a.options.qc;
    a.Tf ? d && d.options && (c = d.options.qc) : d && (c = d);
  }
  return c;
};
g.Ob.MF = {};
g.xb = {};
g.xb.zd = {};
g.xb.zd.nC = 210;
g.ts([
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
g.ts([
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
g.xb.zd.Fr = {
  EQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_EQ}",
  NEQ: "%{BKY_LOGIC_COMPARE_TOOLTIP_NEQ}",
  LT: "%{BKY_LOGIC_COMPARE_TOOLTIP_LT}",
  LTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_LTE}",
  GT: "%{BKY_LOGIC_COMPARE_TOOLTIP_GT}",
  GTE: "%{BKY_LOGIC_COMPARE_TOOLTIP_GTE}",
  AND: "%{BKY_LOGIC_OPERATION_TOOLTIP_AND}",
  OR: "%{BKY_LOGIC_OPERATION_TOOLTIP_OR}",
};
g.na.register("logic_op_tooltip", g.na.Ex(g.xb.zd.Fr));
g.xb.zd.rB = {
  Hd: 0,
  Ye: 0,
  nq: !0,
  zc: function () {
    if (!this.Hd && !this.Ye) return null;
    var a = g.g.xml.createElement("mutation");
    this.Hd && a.setAttribute("elseif", this.Hd);
    this.Ye && a.setAttribute("else", 1);
    return a;
  },
  ke: function (a) {
    this.Hd = parseInt(a.getAttribute("elseif"), 10) || 0;
    this.Ye = parseInt(a.getAttribute("else"), 10) || 0;
    this.AG();
  },
  gm: function (a) {
    var c = a.Vk("controls_if_if");
    c.Rf();
    for (var d = c.Y, e = 1; e <= this.Hd; e++) {
      var f = a.Vk("controls_if_elseif");
      f.Rf();
      d.connect(f.Z);
      d = f.Y;
    }
    this.Ye && ((a = a.Vk("controls_if_else")), a.Rf(), d.connect(a.Z));
    return c;
  },
  Xl: function (a) {
    a = a.Y.ra();
    this.Ye = this.Hd = 0;
    for (var c = [null], d = [null], e = null; a && !a.pe(); ) {
      switch (a.type) {
        case "controls_if_elseif":
          this.Hd++;
          c.push(a.VH);
          d.push(a.Yu);
          break;
        case "controls_if_else":
          this.Ye++;
          e = a.Yu;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.Y && a.Y.ra();
    }
    this.Gn();
    this.jA(c, d, e);
  },
  Lu: function (a) {
    a = a.Y.ra();
    for (var c = 1; a; ) {
      switch (a.type) {
        case "controls_if_elseif":
          var d = y(this, "IF" + c),
            e = y(this, "DO" + c);
          a.VH = d && d.connection.ka;
          a.Yu = e && e.connection.ka;
          c++;
          break;
        case "controls_if_else":
          e = y(this, "ELSE");
          a.Yu = e && e.connection.ka;
          break;
        default:
          throw TypeError("Unknown block type: " + a.type);
      }
      a = a.Y && a.Y.ra();
    }
  },
  AG: function () {
    var a = [null],
      c = [null],
      d = null;
    y(this, "ELSE") && (d = y(this, "ELSE").connection.ka);
    for (var e = 1; y(this, "IF" + e); ) {
      var f = y(this, "DO" + e);
      a.push(y(this, "IF" + e).connection.ka);
      c.push(f.connection.ka);
      e++;
    }
    this.Gn();
    this.jA(a, c, d);
  },
  Gn: function () {
    y(this, "ELSE") && this.lj("ELSE");
    for (var a = 1; y(this, "IF" + a); )
      this.lj("IF" + a), this.lj("DO" + a), a++;
    for (a = 1; a <= this.Hd; a++)
      P(Qb(this, "IF" + a).cd("Boolean"), g.m.CONTROLS_IF_MSG_ELSEIF),
        P(this.Pe(g.Ua, "DO" + a), g.m.CONTROLS_IF_MSG_THEN);
    this.Ye && P(this.Pe(g.Ua, "ELSE"), g.m.CONTROLS_IF_MSG_ELSE);
  },
  jA: function (a, c, d) {
    for (var e = 1; e <= this.Hd; e++)
      g.He.wu(a[e], this, "IF" + e), g.He.wu(c[e], this, "DO" + e);
    g.He.wu(d, this, "ELSE");
  },
};
g.na.Au("controls_if_mutator", g.xb.zd.rB, null, [
  "controls_if_elseif",
  "controls_if_else",
]);
g.xb.zd.sB = function () {
  this.ye(
    function () {
      if (this.Hd || this.Ye) {
        if (!this.Hd && this.Ye) return g.m.CONTROLS_IF_TOOLTIP_2;
        if (this.Hd && !this.Ye) return g.m.CONTROLS_IF_TOOLTIP_3;
        if (this.Hd && this.Ye) return g.m.CONTROLS_IF_TOOLTIP_4;
      } else return g.m.CONTROLS_IF_TOOLTIP_1;
      return "";
    }.bind(this)
  );
};
g.na.register("controls_if_tooltip", g.xb.zd.sB);
g.xb.zd.FC = {
  onchange: function (a) {
    this.Ym || (this.Ym = [null, null]);
    var c = Sb(this, "A"),
      d = Sb(this, "B");
    c &&
      d &&
      !Ya(c.O, d.O) &&
      (g.h.ea(a.group),
      (a = this.Ym[0]),
      a !== c &&
        (x(c), !a || a.Xe || a.Ga || y(this, "A").connection.connect(a.O)),
      (c = this.Ym[1]),
      c !== d &&
        (x(d), !c || c.Xe || c.Ga || y(this, "B").connection.connect(c.O)),
      this.lc(),
      g.h.ea(!1));
    this.Ym[0] = Sb(this, "A");
    this.Ym[1] = Sb(this, "B");
  },
};
g.xb.zd.EC = function () {
  this.bf(g.xb.zd.FC);
};
g.na.register("logic_compare", g.xb.zd.EC);
g.xb.zd.GC = {
  fA: null,
  onchange: function (a) {
    var c = Sb(this, "THEN"),
      d = Sb(this, "ELSE"),
      e = this.O.ka;
    if ((c || d) && e)
      for (var f = 0; 2 > f; f++) {
        var h = 1 == f ? c : d;
        h &&
          !Ya(h.O, e) &&
          (g.h.ea(a.group),
          e === this.fA ? (x(this), e.W().lc()) : (x(h), h.lc()),
          g.h.ea(!1));
      }
    this.fA = e;
  },
};
g.na.XG();
g.hd = function (a, c, d) {
  this.wA = !0;
  g.hd.A.constructor.call(this, a, c, d);
  this.Rp = this.Qp = this.rd = null;
  this.lp = !1;
  this.o = null;
};
g.g.object.V(g.hd, g.Sd);
g.hd.prototype.ql = "";
g.hd.aa = function (a) {
  var c = g.g.df(a.text);
  return new g.hd(c, void 0, a);
};
g.hd.prototype.Tj = !0;
g.hd.hB = 4;
b = g.hd.prototype;
b.Fv = "text";
b.ie = function (a) {
  g.hd.A.ie.call(this, a);
  "boolean" == typeof a.spellcheck && (this.wA = a.spellcheck);
};
b.Hk = function () {
  if (this.$().Yv) {
    for (var a = 0, c = 0, d = 0, e; (e = this.J.T[d]); d++) {
      for (var f = 0; e.gb[f]; f++) a++;
      e.connection && c++;
    }
    this.lp = 1 >= a && this.J.O && !c;
  } else this.lp = !1;
  this.lp ? (this.hs = this.J.pa()) : Eb(this);
  Fb(this);
};
b.Hi = function (a) {
  return null === a || void 0 === a ? null : String(a);
};
b.qy = function () {
  if (this.Kk) {
    this.At = !1;
    var a = this.ed;
    this.ed = this.rd.SH;
    this.J &&
      g.h.isEnabled() &&
      g.h.Ea(new g.h.ih(this.J, "field", this.name || null, a, this.ed));
  }
};
b.Eh = function (a) {
  this.At = !0;
  this.ed = a;
  this.Kk || (this.Sg = !0);
};
b.$b = function () {
  this.J &&
    this.$().Yv &&
    (this.Qb
      ? this.Qb.setAttribute("stroke", this.J.style.xf)
      : this.J.Db.Mb.setAttribute("fill", this.$().Rv));
};
b.nj = function () {
  g.hd.A.nj.call(this);
  if (this.Kk) {
    Lc(this);
    var a = this.rd;
    this.At
      ? (g.g.j.Ac(a, "blocklyInvalidInput"), g.g.eb.$f(a, g.g.eb.State.gw, !1))
      : (g.g.j.Hb(a, "blocklyInvalidInput"), g.g.eb.$f(a, g.g.eb.State.gw, !0));
  }
};
b.di = function (a, c) {
  this.o = this.J.B;
  a = c || !1;
  !a && (g.g.userAgent.sw || g.g.userAgent.Ej || g.g.userAgent.si)
    ? Mc(this)
    : (g.X.show(this, this.J.M, this.ZH.bind(this)),
      (this.rd = this.hv()),
      (this.Kk = !0),
      a || (this.rd.focus({ preventScroll: !0 }), this.rd.select()));
};
function Mc(a) {
  g.prompt(
    g.m.CHANGE_VALUE_TITLE,
    a.Hh(),
    function (c) {
      this.setValue(c);
    }.bind(a)
  );
}
b.hv = function () {
  var a = g.X.Ya;
  g.g.j.Hb(Db(this), "editing");
  var c = document.createElement("input");
  c.className = "blocklyHtmlInput";
  c.setAttribute("spellcheck", this.wA);
  var d = Dc(this.o),
    e = this.$().nh * d + "pt";
  a.style.fontSize = e;
  c.style.fontSize = e;
  e = g.hd.hB * d + "px";
  if (this.lp) {
    e = ca(this);
    e = (e.bottom - e.top) / 2 + "px";
    var f = this.J.getParent() ? this.J.getParent().style.xf : this.J.style.xf;
    c.style.border = 1 * d + "px solid " + f;
    a.style.borderRadius = e;
    a.style.transition = "box-shadow 0.25s ease 0s";
    this.$().$B &&
      (a.style.boxShadow =
        "rgba(255, 255, 255, 0.3) 0px 0px 0px " + 4 * d + "px");
  }
  c.style.borderRadius = e;
  a.appendChild(c);
  c.value = c.defaultValue = String(this.ed);
  c.SH = this.ed;
  c.Sz = null;
  Lc(this);
  this.Qp = g.Aa(c, "keydown", this, this.cu);
  this.Rp = g.Aa(c, "input", this, this.kG);
  return c;
};
b.ZH = function () {
  this.Kk = !1;
  this.At = !0;
  cb(this);
  this.jG && this.jG(this.ed);
  this.Qp && (g.ab(this.Qp), (this.Qp = null));
  this.Rp && (g.ab(this.Rp), (this.Rp = null));
  var a = g.X.Ya.style;
  a.width = "auto";
  a.height = "auto";
  a.fontSize = "";
  a.transition = "";
  a.boxShadow = "";
  this.rd = null;
  g.g.j.Ac(Db(this), "editing");
};
b.cu = function (a) {
  if (a.keyCode == g.g.P.Oq) g.X.Fa(), g.G.Oi();
  else if (a.keyCode == g.g.P.Pq)
    (this.rd.value = this.rd.defaultValue), g.X.Fa(), g.G.Oi();
  else if (a.keyCode == g.g.P.qD) {
    g.X.Fa();
    g.G.Oi();
    var c = this.J,
      d = !a.shiftKey,
      e = new g.Go();
    M(e, g.F.nk(this));
    var f = e.Wa;
    e.Tb({ name: d ? g.navigation.Gb.jd : g.navigation.Gb.ld });
    (d = e.Wa) &&
      d !== f &&
      ((f = d.xa), D(f) && f.di(void 0), c.B.hb && M(c.B.ob(), d));
    a.preventDefault();
  }
};
b.kG = function () {
  var a = this.rd.value;
  a !== this.rd.Sz &&
    ((this.rd.Sz = a),
    g.h.ea(!0),
    this.setValue(a),
    cb(this),
    Lc(this),
    g.h.ea(!1));
};
function Lc(a) {
  var c = g.X.Ya,
    d = ca(a);
  c.style.width = d.right - d.left + "px";
  c.style.height = d.bottom - d.top + "px";
  a = new g.g.K(a.J.M ? d.right - c.offsetWidth : d.left, d.top);
  c.style.left = a.x + "px";
  c.style.top = a.y + "px";
}
b.rz = function () {
  return !0;
};
b.ht = function () {
  return this.Kk && this.rd ? this.rd.value : null;
};
g.Hf.register("field_input", g.hd);
g.Td = function (a, c, d, e, f, h) {
  this.Pm = -Infinity;
  this.Nm = Infinity;
  this.Zk = 0;
  this.ss = null;
  g.Td.A.constructor.call(this, a, f, h);
  h || (Nc(this, c), Oc(this, d), Pc(this, e), this.setValue(this.getValue()));
};
g.g.object.V(g.Td, g.hd);
g.Td.prototype.ql = 0;
g.Td.aa = function (a) {
  return new g.Td(a.value, void 0, void 0, void 0, void 0, a);
};
g.Td.prototype.Tj = !0;
g.Td.prototype.ie = function (a) {
  g.Td.A.ie.call(this, a);
  Nc(this, a.min);
  Oc(this, a.max);
  Pc(this, a.precision);
};
function Nc(a, c) {
  null == c ? (a.Pm = -Infinity) : ((c = Number(c)), isNaN(c) || (a.Pm = c));
}
function Oc(a, c) {
  null == c ? (a.Nm = Infinity) : ((c = Number(c)), isNaN(c) || (a.Nm = c));
}
function Pc(a, c) {
  null == c ? (a.Zk = 0) : ((c = Number(c)), isNaN(c) || (a.Zk = c));
  var d = a.Zk.toLocaleString("en-US", { maximumFractionDigits: 20 }),
    e = d.indexOf(".");
  a.ss = -1 == e ? (c ? 0 : null) : d.length - e - 1;
}
g.Td.prototype.Hi = function (a) {
  if (null === a) return null;
  a = String(a);
  a = a.replace(/O/gi, "0");
  a = a.replace(/,/g, "");
  a = a.replace(/infinity/i, "Infinity");
  a = Number(a || 0);
  if (isNaN(a)) return null;
  a = Math.min(Math.max(a, this.Pm), this.Nm);
  this.Zk && isFinite(a) && (a = Math.round(a / this.Zk) * this.Zk);
  null != this.ss && (a = Number(a.toFixed(this.ss)));
  return a;
};
g.Td.prototype.hv = function () {
  var a = g.Td.A.hv.call(this);
  -Infinity < this.Pm && g.g.eb.$f(a, g.g.eb.State.xD, this.Pm);
  Infinity > this.Nm && g.g.eb.$f(a, g.g.eb.State.wD, this.Nm);
  return a;
};
g.Hf.register("field_number", g.Td);
g.yd = function (a, c, d, e, f) {
  this.dj = g.yd.EE;
  this.pE = "string" === typeof a ? a : "";
  this.dd = new g.g.Zd(0, 0);
  f && this.ie(f);
  c && (this.Jn = c);
  f || Qc(this, d, e);
};
g.g.object.V(g.yd, g.qb);
g.yd.aa = function (a) {
  var c = g.g.df(a.variable);
  return new g.yd(c, void 0, void 0, void 0, a);
};
b = g.yd.prototype;
b.Tj = !0;
b.ie = function (a) {
  g.yd.A.ie.call(this, a);
  Qc(this, a.variableTypes, a.defaultType);
};
b.Si = function () {
  if (!this.wd) {
    var a = g.ma.My(this.J.B, null, this.pE, this.oE);
    this.Eh(a.zb());
  }
};
b.Tu = function () {
  return (
    g.yd.A.Tu.call(this) && (!this.$().Rq || "variables_get" != this.J.type)
  );
};
b.pm = function (a) {
  var c = a.getAttribute("id"),
    d = a.textContent,
    e = a.getAttribute("variabletype") || a.getAttribute("variableType") || "";
  c = g.ma.My(this.J.B, c, d, e);
  if (null != e && e !== c.type)
    throw Error(
      "Serialized variable type with id '" +
        c.zb() +
        "' had type " +
        c.type +
        ", and does not match variable field that references it: " +
        g.R.Xc(a) +
        "."
    );
  this.setValue(c.zb());
};
b.EA = function (a) {
  this.Si();
  a.id = this.wd.zb();
  a.textContent = this.wd.name;
  this.wd.type && a.setAttribute("variabletype", this.wd.type);
  return a;
};
b.Qu = function (a) {
  if (a.Ga)
    throw Error("Variable fields are not allowed to exist on shadow blocks.");
  g.yd.A.Qu.call(this, a);
};
b.getValue = function () {
  return this.wd ? this.wd.zb() : null;
};
b.Hh = function () {
  return this.wd ? this.wd.name : "";
};
b.af = function () {
  return this.wd;
};
b.Xy = function () {
  return this.wd ? this.Jn : null;
};
b.Hi = function (a) {
  if (null === a) return null;
  var c = g.ma.af(this.J.B, a);
  if (!c)
    return (
      console.warn("Variable id doesn't point to a real variable! ID was " + a),
      null
    );
  c = c.type;
  var d;
  a: if ((d = Rc(this))) {
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
b.Eh = function (a) {
  this.wd = g.ma.af(this.J.B, a);
  g.yd.A.Eh.call(this, a);
};
function Rc(a) {
  var c = a.WH;
  if (null === c && a.J && a.J.B) return a.J.B.jt();
  c = c || [""];
  if (0 == c.length)
    throw (
      ((a = a.Hh()),
      Error("'variableTypes' of field variable " + a + " was an empty list"))
    );
  return c;
}
function Qc(a, c, d) {
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
  a.oE = d;
  a.WH = c;
}
g.yd.EE = function () {
  if (!this.wd)
    throw Error(
      "Tried to call dropdownCreate on a variable field with no variable selected."
    );
  var a = this.Hh(),
    c = [];
  if (this.J && this.J.B)
    for (var d = Rc(this), e = 0; e < d.length; e++)
      c = c.concat(this.J.B.vm(d[e]));
  c.sort(g.Ol.Mx);
  d = [];
  for (e = 0; e < c.length; e++) d[e] = [c[e].name, c[e].zb()];
  d.push([g.m.RENAME_VARIABLE, g.Mw]);
  g.m.DELETE_VARIABLE && d.push([g.m.DELETE_VARIABLE.replace("%1", a), g.Mv]);
  return d;
};
g.yd.prototype.Uz = function (a) {
  a = a.getValue();
  if (this.J && this.J.B) {
    if (a == g.Mw) {
      g.ma.Eu(this.J.B, this.wd);
      return;
    }
    if (a == g.Mv) {
      this.J.B.Gi(this.wd.zb());
      return;
    }
  }
  this.setValue(a);
};
g.yd.prototype.$p = function () {
  return !0;
};
g.Hf.register("field_variable", g.yd);
g.Ob.hc = {};
g.xb.Math = {};
g.xb.Math.nC = 230;
g.ts([
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
g.xb.Math.Fr = {
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
g.na.register("math_op_tooltip", g.na.Ex(g.xb.Math.Fr));
g.xb.Math.tC = {
  zc: function () {
    var a = g.g.xml.createElement("mutation"),
      c = "DIVISIBLE_BY" == G(this, "PROPERTY");
    a.setAttribute("divisor_input", c);
    return a;
  },
  ke: function (a) {
    a = "true" == a.getAttribute("divisor_input");
    this.Gn(a);
  },
  Gn: function (a) {
    var c = y(this, "DIVISOR");
    a ? c || Qb(this, "DIVISOR").cd("Number") : c && this.lj("DIVISOR");
  },
};
g.xb.Math.uC = function () {
  Gb(ia(this, "PROPERTY"), function (a) {
    a = "DIVISIBLE_BY" == a;
    this.W().Gn(a);
  });
};
g.na.Au("math_is_divisibleby_mutator", g.xb.Math.tC, g.xb.Math.uC);
g.na.register("math_change_tooltip", g.na.QD());
g.xb.Math.DC = {
  NA: function (a) {
    "MODE" == a ? this.O.cd("Array") : this.O.cd("Number");
  },
  zc: function () {
    var a = g.g.xml.createElement("mutation");
    a.setAttribute("op", G(this, "OP"));
    return a;
  },
  ke: function (a) {
    this.NA(a.getAttribute("op"));
  },
};
g.xb.Math.CC = function () {
  Gb(
    ia(this, "OP"),
    function (a) {
      this.NA(a);
    }.bind(this)
  );
};
g.na.Au("math_modes_of_list_mutator", g.xb.Math.DC, g.xb.Math.CC);
g.la = function (a, c, d) {
  this.Wl = g.la.mB;
  this.ij = g.la.OFFSET;
  this.WA = g.la.zD;
  this.gn = g.la.hD;
  g.la.A.constructor.call(this, a, c, d);
  this.Lp = this.To = this.Uo = this.Cp = this.qm = null;
};
g.g.object.V(g.la, g.hd);
g.la.prototype.ql = 0;
g.la.aa = function (a) {
  return new g.la(a.angle, void 0, a);
};
g.la.prototype.Tj = !0;
g.la.hD = 15;
g.la.dc = 50;
g.la.mB = !1;
g.la.OFFSET = 0;
g.la.zD = 360;
g.la.sg = g.la.dc - 1;
b = g.la.prototype;
b.ie = function (a) {
  g.la.A.ie.call(this, a);
  switch (a.mode) {
    case "compass":
      this.Wl = !0;
      this.ij = 90;
      break;
    case "protractor":
      (this.Wl = !1), (this.ij = 0);
  }
  var c = a.clockwise;
  "boolean" == typeof c && (this.Wl = c);
  c = a.offset;
  null != c && ((c = Number(c)), isNaN(c) || (this.ij = c));
  c = a.wrap;
  null != c && ((c = Number(c)), isNaN(c) || (this.WA = c));
  a = a.round;
  null != a && ((a = Number(a)), isNaN(a) || (this.gn = a));
};
b.Hk = function () {
  g.la.A.Hk.call(this);
  this.AA = g.g.j.N(g.g.H.Ir, {}, null);
  this.AA.appendChild(document.createTextNode("\u00b0"));
  this.Dc.appendChild(this.AA);
};
b.nj = function () {
  g.la.A.nj.call(this);
  Sc(this);
};
b.di = function (a) {
  g.la.A.di.call(
    this,
    a,
    g.g.userAgent.sw || g.g.userAgent.Ej || g.g.userAgent.si
  );
  a = this.Ms();
  g.G.Gy().appendChild(a);
  g.G.Pd(this.J.style.Gg, this.J.style.xf);
  g.G.tA(this, this.Ns.bind(this));
  Sc(this);
};
b.Ms = function () {
  var a = g.g.j.N(
      g.g.H.wh,
      {
        xmlns: g.g.j.Jl,
        "xmlns:html": g.g.j.mo,
        "xmlns:xlink": g.g.j.Oe,
        version: "1.1",
        height: 2 * g.la.dc + "px",
        width: 2 * g.la.dc + "px",
        style: "touch-action: none",
      },
      null
    ),
    c = g.g.j.N(
      g.g.H.Gq,
      { cx: g.la.dc, cy: g.la.dc, r: g.la.sg, class: "blocklyAngleCircle" },
      a
    );
  this.qm = g.g.j.N(g.g.H.Xd, { class: "blocklyAngleGauge" }, a);
  this.Cp = g.g.j.N(
    g.g.H.ui,
    { x1: g.la.dc, y1: g.la.dc, class: "blocklyAngleLine" },
    a
  );
  for (var d = 0; 360 > d; d += 15)
    g.g.j.N(
      g.g.H.ui,
      {
        x1: g.la.dc + g.la.sg,
        y1: g.la.dc,
        x2: g.la.dc + g.la.sg - (0 == d % 45 ? 10 : 5),
        y2: g.la.dc,
        class: "blocklyAngleMarks",
        transform: "rotate(" + d + "," + g.la.dc + "," + g.la.dc + ")",
      },
      a
    );
  this.Uo = g.Aa(a, "click", this, this.tF);
  this.To = g.Aa(c, "click", this, this.Rm, !0, !0);
  this.Lp = g.Aa(c, "mousemove", this, this.Rm, !0, !0);
  return a;
};
b.Ns = function () {
  this.Uo && (g.ab(this.Uo), (this.Uo = null));
  this.To && (g.ab(this.To), (this.To = null));
  this.Lp && (g.ab(this.Lp), (this.Lp = null));
  this.Cp = this.qm = null;
};
b.tF = function () {
  g.G.Gk(this);
  g.X.Fa();
};
b.Rm = function (a) {
  var c = this.qm.ownerSVGElement.getBoundingClientRect(),
    d = a.clientX - c.left - g.la.dc;
  a = a.clientY - c.top - g.la.dc;
  c = Math.atan(-a / d);
  isNaN(c) ||
    ((c = g.g.hc.DA(c)),
    0 > d ? (c += 180) : 0 < a && (c += 360),
    (c = this.Wl ? this.ij + 360 - c : 360 - (this.ij - c)),
    Tc(this, c));
};
function Tc(a, c) {
  a.gn && (c = Math.round(c / a.gn) * a.gn);
  c = Uc(a, c);
  c != a.ed && ((a.Sg = !0), a.Kk && (a.rd.value = String(c)), a.setValue(c));
}
function Sc(a) {
  if (a.qm) {
    var c = Number(a.Hh()) + a.ij,
      d = g.g.hc.uj(c % 360);
    c = ["M ", g.la.dc, ",", g.la.dc];
    var e = g.la.dc,
      f = g.la.dc;
    if (!isNaN(d)) {
      var h = Number(a.Wl),
        k = g.g.hc.uj(a.ij),
        l = Math.cos(k) * g.la.sg,
        m = Math.sin(k) * -g.la.sg;
      h && (d = 2 * k - d);
      e += Math.cos(d) * g.la.sg;
      f -= Math.sin(d) * g.la.sg;
      d = Math.abs(Math.floor((d - k) / Math.PI) % 2);
      h && (d = 1 - d);
      c.push(
        " l ",
        l,
        ",",
        m,
        " A ",
        g.la.sg,
        ",",
        g.la.sg,
        " 0 ",
        d,
        " ",
        h,
        " ",
        e,
        ",",
        f,
        " z"
      );
    }
    a.qm.setAttribute("d", c.join(""));
    a.Cp.setAttribute("x2", e);
    a.Cp.setAttribute("y2", f);
  }
}
b.cu = function (a) {
  g.la.A.cu.call(this, a);
  var c;
  a.keyCode === g.g.P.yl
    ? (c = this.J.M ? 1 : -1)
    : a.keyCode === g.g.P.Sj
    ? (c = this.J.M ? -1 : 1)
    : a.keyCode === g.g.P.Nv
    ? (c = -1)
    : a.keyCode === g.g.P.bx && (c = 1);
  if (c) {
    var d = this.getValue();
    Tc(this, d + c * this.gn);
    a.preventDefault();
    a.stopPropagation();
  }
};
b.Hi = function (a) {
  a = Number(a);
  return isNaN(a) || !isFinite(a) ? null : Uc(this, a);
};
function Uc(a, c) {
  c %= 360;
  0 > c && (c += 360);
  c > a.WA && (c -= 360);
  return c;
}
g.Rd.register(
  ".blocklyAngleCircle {,stroke: #444;,stroke-width: 1;,fill: #ddd;,fill-opacity: .8;,},.blocklyAngleMarks {,stroke: #444;,stroke-width: 1;,},.blocklyAngleGauge {,fill: #f88;,fill-opacity: .8;,pointer-events: none;,},.blocklyAngleLine {,stroke: #f00;,stroke-width: 2;,stroke-linecap: round;,pointer-events: none;,}".split(
    ","
  )
);
g.Hf.register("field_angle", g.la);
g.Generator = function (a) {
  this.Wt = a;
  this.cC = new RegExp(this.ph, "g");
};
g.Generator.uw = "generated_function";
b = g.Generator.prototype;
b.Wj = null;
b.vg = null;
b.oo = "  ";
b.oB = 60;
b.xo = [];
b.zt = null;
function Vc(a, c) {
  return c + a.replace(/(?!\n$)\n/g, "\n" + c);
}
function Wc(a, c) {
  !1 === a.zt &&
    console.warn(
      "Generator init was not called before blockToCode was called."
    );
  if (!c) return "";
  if (!c.isEnabled()) return Wc(a, u(c));
  if (c.pe()) return Wc(a, A(c, !1)[0]);
  var d = a[c.type];
  if ("function" != typeof d)
    throw Error(
      'Language "' +
        a.Wt +
        '" does not know how to generate  code for block type "' +
        c.type +
        '".'
    );
  d = d.call(c, c);
  if (Array.isArray(d)) {
    if (!c.O)
      throw TypeError("Expecting string from statement block: " + c.type);
    return [a.Mu(c, d[0], void 0), d[1]];
  }
  if ("string" == typeof d)
    return (
      a.Wj && !c.nq && (d = Xc(a.Wj, c) + d),
      a.vg && !c.nq && (d += Xc(a.vg, c)),
      a.Mu(c, d, void 0)
    );
  if (null === d) return "";
  throw SyntaxError("Invalid code generated: " + d);
}
function R(a, c, d) {
  var e = g.s;
  if (isNaN(d)) throw TypeError("Expecting valid order from block: " + a.type);
  var f = Sb(a, c);
  if (!f) return "";
  c = Wc(e, f);
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
    for (f = !0, h = 0; h < e.xo.length; h++)
      if (e.xo[h][0] == d && e.xo[h][1] == c) {
        f = !1;
        break;
      }
  f && (a = "(" + a + ")");
  return a;
}
function Yc(a, c) {
  var d = g.s;
  a = Sb(a, c);
  c = Wc(d, a);
  if ("string" != typeof c)
    throw TypeError("Expecting code from statement block: " + (a && a.type));
  c && (c = Vc(c, d.oo));
  return c;
}
function Xc(a, c) {
  c = c.id.replace(/\$/g, "$$$$");
  return a.replace(/%1/g, "'" + c + "'");
}
b.vr = "";
function Zc(a, c) {
  a.vr += c + ",";
}
b.ph = "{leCUI8hutHZI4480Dc}";
function $c(a, c) {
  var d = g.s;
  if (!d.tk[a]) {
    var e = Gc(d.il, a, g.pr);
    d.Us[a] = e;
    c = c.join("\n").replace(d.cC, e);
    for (var f; f != c; )
      (f = c), (c = c.replace(/^(( {2})*) {2}/gm, "$1\x00"));
    c = c.replace(/\0/g, d.oo);
    d.tk[a] = c;
  }
  return d.Us[a];
}
b.Da = function () {};
b.Mu = function (a, c) {
  return c;
};
b.finish = function (a) {
  return a;
};
b.qA = function (a) {
  return a;
};
g.s = new g.Generator("JavaScript");
Zc(
  g.s,
  "break,case,catch,class,const,continue,debugger,default,delete,do,else,export,extends,finally,for,function,if,import,in,instanceof,new,return,super,switch,this,throw,try,typeof,var,void,while,with,yield,enum,implements,interface,let,package,private,protected,public,static,await,null,true,false,arguments," +
    Object.getOwnPropertyNames(g.g.global).join(",")
);
g.s.uo = 0;
g.s.aK = 1.1;
g.s.qg = 1.2;
g.s.Ad = 2;
g.s.ZJ = 3;
g.s.VJ = 3;
g.s.QJ = 4.1;
g.s.cK = 4.2;
g.s.Gl = 4.3;
g.s.ir = 4.4;
g.s.bK = 4.5;
g.s.dK = 4.6;
g.s.WJ = 4.7;
g.s.OJ = 4.8;
g.s.XJ = 5;
g.s.kr = 5.1;
g.s.El = 5.2;
g.s.Fl = 5.3;
g.s.lr = 6.1;
g.s.Qj = 6.2;
g.s.SJ = 7;
g.s.Aw = 8;
g.s.YJ = 8;
g.s.$J = 8;
g.s.zw = 9;
g.s.PJ = 10;
g.s.TJ = 11;
g.s.RJ = 12;
g.s.wo = 13;
g.s.jr = 14;
g.s.vo = 15;
g.s.NJ = 16;
g.s.eK = 17;
g.s.UJ = 18;
g.s.ec = 99;
g.s.xo = [
  [g.s.Ad, g.s.qg],
  [g.s.Ad, g.s.Ad],
  [g.s.qg, g.s.qg],
  [g.s.qg, g.s.Ad],
  [g.s.ir, g.s.ir],
  [g.s.kr, g.s.kr],
  [g.s.Qj, g.s.Qj],
  [g.s.wo, g.s.wo],
  [g.s.jr, g.s.jr],
];
g.s.zt = !1;
g.s.Da = function (a) {
  g.s.tk = Object.create(null);
  g.s.Us = Object.create(null);
  g.s.il ? g.s.il.reset() : (g.s.il = new g.Wd(g.s.vr));
  g.s.il.Ru(a.Ja);
  for (var c = [], d = g.ma.GD(a), e = 0; e < d.length; e++)
    c.push(Fc(d[e], g.Wd.Nq));
  a = g.ma.Ax(a);
  for (e = 0; e < a.length; e++) c.push(Fc(a[e].zb(), g.Bi));
  c.length && (g.s.tk.variables = "var " + c.join(", ") + ";");
  this.zt = !0;
};
g.s.finish = function (a) {
  var c = [],
    d;
  for (d in g.s.tk) c.push(g.s.tk[d]);
  delete g.s.tk;
  delete g.s.Us;
  g.s.il.reset();
  return c.join("\n\n") + "\n\n\n" + a;
};
g.s.qA = function (a) {
  return a + ";\n";
};
g.s.zG = function (a) {
  a = a.replace(/\\/g, "\\\\").replace(/\n/g, "\\\n").replace(/'/g, "\\'");
  return "'" + a + "'";
};
g.s.vL = function (a) {
  return a.split(/\n/g).map(g.s.zG).join(" + '\\n' +\n");
};
g.s.Mu = function (a, c, d) {
  var e = "";
  if (!a.O || !a.O.ka) {
    var f = a.Te.text;
    f && ((f = g.g.$a.UA(f, g.s.oB - 3)), (e += Vc(f + "\n", "// ")));
    for (var h = 0; h < a.T.length; h++)
      if (a.T[h].type == g.rb) {
        var k = a.T[h].connection.ra();
        if (k) {
          f = [];
          k = r(k, !0);
          for (var l = 0; l < k.length; l++) {
            var m = k[l].Te.text;
            m && f.push(m);
          }
          f.length && f.push("");
          (f = f.join("\n")) && (e += Vc(f, "// "));
        }
      }
  }
  a = a.Y && a.Y.ra();
  d = d ? "" : Wc(g.s, a);
  return e + c + d;
};
g.s.cL = function (a, c, d, e, f) {
  d = d || 0;
  f = f || g.s.ec;
  a.B.options.Up && d--;
  var h = a.B.options.Up ? "1" : "0";
  a =
    0 < d
      ? R(a, c, g.s.Qj) || h
      : 0 > d
      ? R(a, c, g.s.lr) || h
      : e
      ? R(a, c, g.s.Gl) || h
      : R(a, c, f) || h;
  if (g.GF(a)) (a = Number(a) + d), e && (a = -a);
  else {
    if (0 < d) {
      a = a + " + " + d;
      var k = g.s.Qj;
    } else 0 > d && ((a = a + " - " + -d), (k = g.s.lr));
    e && ((a = d ? "-(" + a + ")" : "-" + a), (k = g.s.Gl));
    k = Math.floor(k);
    f = Math.floor(f);
    k && f >= k && (a = "(" + a + ")");
  }
  return a;
};
g.s.MF = {};
g.s.controls_if = function (a) {
  var c = 0,
    d = "";
  g.s.Wj && (d += Xc(g.s.Wj, a));
  do {
    var e = R(a, "IF" + c, g.s.ec) || "false";
    var f = Yc(a, "DO" + c);
    g.s.vg && (f = Vc(Xc(g.s.vg, a), g.s.oo) + f);
    d += (0 < c ? " else " : "") + "if (" + e + ") {\n" + f + "}";
    ++c;
  } while (y(a, "IF" + c));
  if (y(a, "ELSE") || g.s.vg)
    (f = Yc(a, "ELSE")),
      g.s.vg && (f = Vc(Xc(g.s.vg, a), g.s.oo) + f),
      (d += " else {\n" + f + "}");
  return d + "\n";
};
g.s.controls_ifelse = g.s.controls_if;
g.s.logic_compare = function (a) {
  var c = { EQ: "==", NEQ: "!=", LT: "<", LTE: "<=", GT: ">", GTE: ">=" }[
      G(a, "OP")
    ],
    d = "==" == c || "!=" == c ? g.s.zw : g.s.Aw,
    e = R(a, "A", d) || "0";
  a = R(a, "B", d) || "0";
  return [e + " " + c + " " + a, d];
};
g.s.logic_operation = function (a) {
  var c = "AND" == G(a, "OP") ? "&&" : "||",
    d = "&&" == c ? g.s.wo : g.s.jr,
    e = R(a, "A", d);
  a = R(a, "B", d);
  if (e || a) {
    var f = "&&" == c ? "true" : "false";
    e || (e = f);
    a || (a = f);
  } else a = e = "false";
  return [e + " " + c + " " + a, d];
};
g.s.logic_negate = function (a) {
  var c = g.s.ir;
  return ["!" + (R(a, "BOOL", c) || "true"), c];
};
g.s.logic_boolean = function (a) {
  return ["TRUE" == G(a, "BOOL") ? "true" : "false", g.s.uo];
};
g.s.logic_null = function () {
  return ["null", g.s.uo];
};
g.s.logic_ternary = function (a) {
  var c = R(a, "IF", g.s.vo) || "false",
    d = R(a, "THEN", g.s.vo) || "null";
  a = R(a, "ELSE", g.s.vo) || "null";
  return [c + " ? " + d + " : " + a, g.s.vo];
};
g.s.hc = {};
g.s.math_number = function (a) {
  a = Number(G(a, "NUM"));
  return [a, 0 <= a ? g.s.uo : g.s.Gl];
};
g.s.math_arithmetic = function (a) {
  var c = {
      ADD: [" + ", g.s.Qj],
      MINUS: [" - ", g.s.lr],
      MULTIPLY: [" * ", g.s.kr],
      DIVIDE: [" / ", g.s.El],
      POWER: [null, g.s.ec],
    }[G(a, "OP")],
    d = c[0];
  c = c[1];
  var e = R(a, "A", c) || "0";
  a = R(a, "B", c) || "0";
  return d ? [e + d + a, c] : ["Math.pow(" + e + ", " + a + ")", g.s.Ad];
};
g.s.math_single = function (a) {
  var c = G(a, "OP");
  if ("NEG" == c)
    return (
      (a = R(a, "NUM", g.s.Gl) || "0"),
      "-" == a[0] && (a = " " + a),
      ["-" + a, g.s.Gl]
    );
  a =
    "SIN" == c || "COS" == c || "TAN" == c
      ? R(a, "NUM", g.s.El) || "0"
      : R(a, "NUM", g.s.ec) || "0";
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
  if (d) return [d, g.s.Ad];
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
  return [d, g.s.El];
};
g.s.math_constant = function (a) {
  return {
    PI: ["Math.PI", g.s.qg],
    E: ["Math.E", g.s.qg],
    GOLDEN_RATIO: ["(1 + Math.sqrt(5)) / 2", g.s.El],
    SQRT2: ["Math.SQRT2", g.s.qg],
    SQRT1_2: ["Math.SQRT1_2", g.s.qg],
    INFINITY: ["Infinity", g.s.uo],
  }[G(a, "CONSTANT")];
};
g.s.math_number_property = function (a) {
  var c = R(a, "NUMBER_TO_CHECK", g.s.Fl) || "0",
    d = G(a, "PROPERTY");
  if ("PRIME" == d) {
    var e =
      $c("mathIsPrime", [
        "function " + g.s.ph + "(n) {",
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
    return [e, g.s.Ad];
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
      (a = R(a, "DIVISOR", g.s.Fl) || "0"), (e = c + " % " + a + " == 0");
  }
  return [e, g.s.zw];
};
g.s.math_change = function (a) {
  var c = R(a, "DELTA", g.s.Qj) || "0";
  a = Fc(G(a, "VAR"), g.Bi);
  return a + " = (typeof " + a + " == 'number' ? " + a + " : 0) + " + c + ";\n";
};
g.s.math_round = g.s.math_single;
g.s.math_trig = g.s.math_single;
g.s.math_on_list = function (a) {
  var c = G(a, "OP");
  switch (c) {
    case "SUM":
      a = R(a, "LIST", g.s.qg) || "[]";
      a += ".reduce(function(x, y) {return x + y;})";
      break;
    case "MIN":
      a = R(a, "LIST", g.s.ec) || "[]";
      a = "Math.min.apply(null, " + a + ")";
      break;
    case "MAX":
      a = R(a, "LIST", g.s.ec) || "[]";
      a = "Math.max.apply(null, " + a + ")";
      break;
    case "AVERAGE":
      c = $c("mathMean", [
        "function " + g.s.ph + "(myList) {",
        "  return myList.reduce(function(x, y) {return x + y;}) / myList.length;",
        "}",
      ]);
      a = R(a, "LIST", g.s.ec) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MEDIAN":
      c = $c("mathMedian", [
        "function " + g.s.ph + "(myList) {",
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
      a = R(a, "LIST", g.s.ec) || "[]";
      a = c + "(" + a + ")";
      break;
    case "MODE":
      c = $c("mathModes", [
        "function " + g.s.ph + "(values) {",
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
      a = R(a, "LIST", g.s.ec) || "[]";
      a = c + "(" + a + ")";
      break;
    case "STD_DEV":
      c = $c("mathStandardDeviation", [
        "function " + g.s.ph + "(numbers) {",
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
      a = R(a, "LIST", g.s.ec) || "[]";
      a = c + "(" + a + ")";
      break;
    case "RANDOM":
      c = $c("mathRandomList", [
        "function " + g.s.ph + "(list) {",
        "  var x = Math.floor(Math.random() * list.length);",
        "  return list[x];",
        "}",
      ]);
      a = R(a, "LIST", g.s.ec) || "[]";
      a = c + "(" + a + ")";
      break;
    default:
      throw Error("Unknown operator: " + c);
  }
  return [a, g.s.Ad];
};
g.s.math_modulo = function (a) {
  var c = R(a, "DIVIDEND", g.s.Fl) || "0";
  a = R(a, "DIVISOR", g.s.Fl) || "0";
  return [c + " % " + a, g.s.Fl];
};
g.s.math_constrain = function (a) {
  var c = R(a, "VALUE", g.s.ec) || "0",
    d = R(a, "LOW", g.s.ec) || "0";
  a = R(a, "HIGH", g.s.ec) || "Infinity";
  return ["Math.min(Math.max(" + c + ", " + d + "), " + a + ")", g.s.Ad];
};
g.s.math_random_int = function (a) {
  var c = R(a, "FROM", g.s.ec) || "0";
  a = R(a, "TO", g.s.ec) || "0";
  return [
    $c("mathRandomInt", [
      "function " + g.s.ph + "(a, b) {",
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
    g.s.Ad,
  ];
};
g.s.math_random_float = function () {
  return ["Math.random()", g.s.Ad];
};
g.s.math_atan2 = function (a) {
  var c = R(a, "X", g.s.ec) || "0";
  return [
    "Math.atan2(" + (R(a, "Y", g.s.ec) || "0") + ", " + c + ") / Math.PI * 180",
    g.s.El,
  ];
};
var ad = {
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
  bd = "ace ar fa he mzn ps ur".split(" "),
  cd = window.BlocklyGamesLang,
  dd = window.BlocklyGamesLanguages,
  ed = /\.html$/.test(window.location.pathname),
  S,
  fd = Number,
  gd,
  hd = window.location.search.match(/[?&]level=([^&]+)/);
gd = hd ? decodeURIComponent(hd[1].replace(/\+/g, "%20")) : "NaN";
var id = fd(gd);
S = isNaN(id) ? 1 : g.g.hc.Vl(1, id, 10);
function jd() {
  document.title = document.getElementById("title").textContent;
  document.dir = -1 != bd.indexOf(cd) ? "rtl" : "ltr";
  document.head.parentElement.setAttribute("lang", cd);
  var a = document.getElementById("languageMenu");
  if (a) {
    for (var c = [], d = 0; d < dd.length; d++) {
      var e = dd[d];
      c.push([ad[e], e]);
    }
    c.sort(function (h, k) {
      return h[0] > k[0] ? 1 : h[0] < k[0] ? -1 : 0;
    });
    for (d = a.options.length = 0; d < c.length; d++) {
      var f = c[d];
      e = f[1];
      f = new Option(f[0], e);
      e == cd && (f.selected = !0);
      a.options.add(f);
    }
    1 >= a.options.length && (a.style.display = "none");
  }
  for (d = 1; 10 >= d; d++)
    (a = document.getElementById("level" + d)),
      (c = !!kd(d)),
      a && c && (a.className += " level_done");
  (d = document.querySelector('meta[name="viewport"]')) &&
    725 > screen.availWidth &&
    d.setAttribute("content", "width=725, initial-scale=.35, user-scalable=no");
  setTimeout(ld, 1);
}
function kd(a) {
  var c = md;
  try {
    var d = window.localStorage[c + a];
  } catch (e) {}
  return d;
}
function T(a) {
  var c;
  (c = document.getElementById(a))
    ? ((c = c.textContent), (c = c.replace(/\\n/g, "\n")))
    : (c = null);
  return null === c ? "[Unknown message: " + a + "]" : c;
}
function nd(a, c) {
  if (!a) throw TypeError("Element not found: " + a);
  "string" == typeof a && (a = document.getElementById(a));
  a.addEventListener("click", c, !0);
  a.addEventListener("touchend", c, !0);
}
function od(a) {
  a %= 360;
  0 > a && (a += 360);
  return a;
}
function ld() {
  if (!ed) {
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
var pd, U, qd, rd, sd, td;
g.Ob.bird_noWorm = {
  Da: function () {
    Rb(this, {
      message0: T("Bird_noWorm"),
      output: "Boolean",
      colour: 330,
      tooltip: T("Bird_noWormTooltip"),
    });
  },
};
g.s.bird_noWorm = function () {
  return ["noWorm()", g.s.Ad];
};
g.Ob.bird_heading = {
  Da: function () {
    this.Pd(290);
    P(P(this.Pe(g.Ee, ""), T("Bird_heading")), new g.la("90"), "ANGLE");
    this.nn(!0);
    this.ye(T("Bird_headingTooltip"));
  },
};
g.s.bird_heading = function (a) {
  return "heading(" + Number(G(a, "ANGLE")) + ", 'block_id_" + a.id + "');\n";
};
g.Ob.bird_position = {
  Da: function () {
    Rb(this, {
      message0: "%1",
      args0: [
        {
          type: "field_dropdown",
          name: "XY",
          options: [
            ["x", "X"],
            ["y", "Y"],
          ],
        },
      ],
      output: "Number",
      colour: 330,
      tooltip: T("Bird_positionTooltip"),
    });
  },
};
g.s.bird_position = function (a) {
  return ["get" + G(a, "XY").charAt(0) + "()", g.s.Ad];
};
g.Ob.bird_compare = {
  Da: function () {
    this.Pg = g.m.LOGIC_COMPARE_HELPURL;
    this.Pd(g.m.LOGIC_HUE);
    this.mn(!0, "Boolean");
    Qb(this, "A").cd("Number");
    P(
      Qb(this, "B").cd("Number"),
      new g.qb([
        ["\u200f<", "LT"],
        ["\u200f>", "GT"],
      ]),
      "OP"
    );
    this.$g(!0);
    var a = this;
    this.ye(function () {
      var c = G(a, "OP");
      return {
        LT: g.m.LOGIC_COMPARE_TOOLTIP_LT,
        GT: g.m.LOGIC_COMPARE_TOOLTIP_GT,
      }[c];
    });
  },
};
g.s.bird_compare = function (a) {
  var c = "LT" == G(a, "OP") ? "<" : ">",
    d = g.s.Aw,
    e = R(a, "A", d) || "0";
  a = R(a, "B", d) || "0";
  return [e + " " + c + " " + a, d];
};
g.Ob.bird_and = {
  Da: function () {
    this.Pg = g.m.LOGIC_OPERATION_HELPURL;
    this.Pd(g.m.LOGIC_HUE);
    this.mn(!0, "Boolean");
    Qb(this, "A").cd("Boolean");
    P(Qb(this, "B").cd("Boolean"), g.m.LOGIC_OPERATION_AND);
    this.$g(!0);
    this.ye(g.m.LOGIC_OPERATION_TOOLTIP_AND);
  },
};
g.s.bird_and = function (a) {
  var c = g.s.wo,
    d = R(a, "A", c);
  a = R(a, "B", c);
  d || a ? (d || (d = "true"), a || (a = "true")) : (a = d = "false");
  return [d + " && " + a, c];
};
g.Ob.bird_ifElse = {
  Da: function () {
    this.Pg = g.m.CONTROLS_IF_HELPURL;
    this.Pd(g.m.LOGIC_HUE);
    P(Qb(this, "CONDITION"), g.m.CONTROLS_IF_MSG_IF).cd("Boolean");
    P(this.Pe(g.Ua, "DO"), g.m.CONTROLS_IF_MSG_THEN);
    P(this.Pe(g.Ua, "ELSE"), g.m.CONTROLS_IF_MSG_ELSE);
    this.hm = !1;
    this.ye(g.m.CONTROLS_IF_TOOLTIP_2);
  },
};
g.s.bird_ifElse = function (a) {
  var c = R(a, "CONDITION", g.s.ec) || "false",
    d = Yc(a, "DO");
  a = Yc(a, "ELSE");
  return "if (" + c + ") {\n" + d + "} else {\n" + a + "}\n";
};
g.Ob.controls_if.gG = g.Ob.controls_if.Da;
g.Ob.controls_if.Da = function () {
  this.gG();
  this.nn(!1);
  this.gq(!1);
  this.hm = !1;
};
var ud = ud || {};
function vd(a, c) {
  function d() {}
  d.prototype = c.prototype;
  a.A = c.prototype;
  a.prototype = new d();
  a.prototype.constructor = a;
  a.PK = function (e, f, h) {
    return c.prototype[f].apply(e, Array.prototype.slice.call(arguments, 2));
  };
}
if (!wd) {
  var wd,
    xd = "";
  "undefined" !== typeof navigator &&
    navigator &&
    "string" == typeof navigator.userAgent &&
    (xd = navigator.userAgent);
  var yd = 0 == xd.indexOf("Opera");
  wd = {
    uL: { $I: "ScriptEngine" in window },
    MJ: yd,
    Fe: !yd && -1 != xd.indexOf("MSIE"),
    mx: !yd && -1 != xd.indexOf("WebKit"),
  };
}
if (!zd) var zd = {};
if (!Ad) var Ad = {};
if (!Bd) var Bd = {};
if (!Cd) var Cd = {};
if (!Dd) var Dd = {};
if (!Ed) var Ed = {};
var Fd = ud.zB ? { FL: !0 } : {},
  Gd = ud.zB ? { GL: !0 } : {};
function Hd() {
  throw Error("Do not instantiate directly");
}
Hd.prototype.Tx = null;
Hd.prototype.toString = function () {
  return this.content;
};
function Id(a) {
  if (null != a)
    switch (a.Tx) {
      case 1:
        return 1;
      case -1:
        return -1;
      case 0:
        return 0;
    }
  return null;
}
function Jd() {
  Hd.call(this);
}
vd(Jd, Hd);
Jd.prototype.Ux = Fd;
function V(a) {
  return null != a && a.Ux === Fd
    ? a
    : Kd(String(String(a)).replace(Ld, Md), Id(a));
}
var Kd = (function (a) {
    function c() {}
    c.prototype = a.prototype;
    return function (d, e) {
      var f = new c();
      f.content = String(d);
      void 0 !== e && (f.Tx = e);
      return f;
    };
  })(Jd),
  Nd = {
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
function Md(a) {
  return Nd[a];
}
var Ld = /[\x00\x22\x26\x27\x3c\x3e]/g;
function Od() {
  var a = cd,
    c = S,
    d = 10,
    e = ed,
    f = "Bird",
    h = "",
    k = !0,
    l = !1,
    m = "";
  e =
    '<table width="100%"><tr><td><h1><span id="title">' +
    ((e
      ? '<a href="index.html?lang=' + V(a) + '">'
      : '<a href="./?lang=' + V(a) + '">') +
      "Codekid</a> : " +
      V(f) +
      "</span>");
  if (c) {
    h = "" + (h ? V(h) : "");
    f = " &nbsp; ";
    for (var n = d + 1, p = 1; p < n; p++) {
      var q = "?lang=" + V(a) + "&level=" + V(p) + (h ? "&" + V(h) : "");
      f +=
        " " +
        (p == c
          ? '<span class="level_number level_done" id="level' +
            V(p) +
            '">' +
            V(p) +
            "</span>"
          : p == d
          ? '<a class="level_number" id="level' +
            V(p) +
            '" href="' +
            V(q) +
            '">' +
            V(p) +
            "</a>"
          : '<a class="level_dot" id="level' +
            V(p) +
            '" href="' +
            V(q) +
            '"></a>');
    }
    a = f;
  } else a = "";
  m = m ? "&nbsp;" + (null != m && m.Ux === Gd ? "zSoyz" : m) : "";
  return (
    '<div style="display: none"><span id="Games_name">Codekid</span><span id="Games_puzzle">Puzzle</span><span id="Games_maze">Maze</span><span id="Games_bird">Bird</span><span id="Games_turtle">Turtle</span><span id="Games_movie">Movie</span><span id="Games_music">Music</span><span id="Games_pondTutor">Pond Tutor</span><span id="Games_pond">Pond</span><span id="Games_genetics">Genetics</span><span id="Games_linesOfCode1">You solved this level with 1 line of JavaScript:</span><span id="Games_linesOfCode2">You solved this level with %1 lines of JavaScript:</span><span id="Games_nextLevel">Are you ready for level %1?</span><span id="Games_finalLevel">Are you ready for the next challenge?</span><span id="Games_submitTitle">Title:</span><span id="Games_linkTooltip">Save and link to blocks.</span><span id="Games_runTooltip">Run the program you wrote.</span><span id="Games_runProgram">Run Program</span><span id="Games_resetTooltip">Stop the program and reset the level.</span><span id="Games_resetProgram">Reset</span><span id="Games_help">Help</span><span id="Games_dialogOk">OK</span><span id="Games_dialogCancel">Cancel</span><span id="Games_catLogic">Logic</span><span id="Games_catLoops">Loops</span><span id="Games_catMath">Math</span><span id="Games_catText">Text</span><span id="Games_catLists">Lists</span><span id="Games_catColour">Colour</span><span id="Games_catVariables">Variables</span><span id="Games_catProcedures">Functions</span><span id="Games_httpRequestError">There was a problem with the request.</span><span id="Games_linkAlert">Share your blocks with this link:\\n\\n%1</span><span id="Games_hashError">Sorry, \'%1\' doesn\'t correspond with any saved program.</span><span id="Games_xmlError">Could not load your saved file. Perhaps it was created with a different version of Blockly?</span><span id="Games_submitted">Thank you for this program!  If our staff of trained monkeys like it, they will publish it to the gallery within a couple of days.</span><span id="Games_listVariable">list</span><span id="Games_textVariable">text</span><span id="Games_breakLink">Once you start editing JavaScript, you can\'t go back to editing blocks. Is this OK?</span><span id="Games_blocks">Blocks</div></div><div style="display: none"><span id="Bird_noWorm">does not have worm</span><span id="Bird_heading">heading</span><span id="Bird_noWormTooltip">The condition when the bird has not gotten the worm.</span><span id="Bird_headingTooltip">Move in the direction of the given angle: 0 is to the right, 90 is straight up, etc.</span><span id="Bird_positionTooltip">x and y mark the bird\'s position. When x = 0 the bird is near the left edge, when x = 100 it\'s near the right edge. When y = 0 the bird is at the bottom, when y = 100 it\'s at the top.</span></div>' +
    (e +
      a +
      '</h1></td><td id="header_cta" class="farSide"><select id="languageMenu"></select>' +
      (k
        ? '&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="common/1x1.gif" class="link icon21"></button>'
        : "") +
      (l ? '&nbsp;<button id="helpButton">Help</button>' : "") +
      m +
      '</td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgBird" width="400px" height="400px"></svg></div><table width="400"><tr><td style="width: 190px;"></td><td><button id="runButton" class="primary" title="Run the program you wrote."><img src="common/1x1.gif" class="run icon21"> Run Program</button><button id="resetButton" class="primary" style="display: none" title="Stop the program and reset the level."><img src="common/1x1.gif" class="stop icon21"> Reset</button></td></tr></table><xml id="toolbox" xmlns="https://developers.google.com/blockly/xml"><block type="bird_heading"></block>') +
    ((2 <= c
      ? (4 == c || 5 == c
          ? '<block type="bird_noWorm" disabled="true"></block>'
          : '<block type="bird_noWorm"></block>') +
        (4 <= c
          ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">X</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' +
            (5 <= c
              ? '<block type="bird_compare"><field name="OP">LT</field><value name="A"><block type="bird_position" movable="false"><field name="XY">Y</field></block></value><value name="B"><block type="math_number" movable="false"><field name="NUM">50</field></block></value></block>' +
                (8 <= c ? '<block type="bird_and"></block>' : "")
              : "")
          : "")
      : "") +
      '</xml><div id="blockly"></div><div id="dialogShadow" class="dialogAnimate"></div><div id="dialogBorder"></div><div id="dialog"></div><div id="dialogDone" class="dialogHiddenContent"><div style="font-size: large; margin: 1em;">Congratulations!</div><div id="dialogLinesText" style="font-size: large; margin: 1em;"></div><pre id="containerCode"></pre><div id="dialogDoneText" style="font-size: large; margin: 1em;"></div><div id="dialogDoneButtons" class="farSide" style="padding: 1ex 3ex 0"><button id="doneCancel">Cancel</button><button id="doneOk" class="secondary">OK</button></div></div><div id="dialogAbort" class="dialogHiddenContent">This level is extremely difficult. Would you like to skip it and go onto the next game? You can always come back later.<div class="farSide" style="padding: 1ex 3ex 0"><button id="abortCancel">Cancel</button><button id="abortOk" class="secondary">OK</button></div></div><div id="dialogStorage" class="dialogHiddenContent"><div id="containerStorage"></div><div class="farSide" style="padding: 1ex 3ex 0"><button class="secondary" onclick="BlocklyDialogs.hideDialog(true)">OK</button></div></div><div id="dialogHelp" class="dialogHiddenContent">') +
    (1 == c
      ? '<table><tr><td rowspan=2><img src="common/help.png"></td><td><div class="farSide"><img src="bird/help_heading.png" class="mirrorImg" height=27 width=141></div></td></tr><tr><td>Change the heading angle to make the bird get the worm and land in her nest.</td></tr></table>'
      : 2 == c
      ? '<table><tr><td><img src="common/help.png"></td><td>Use this block to go in one heading if you have the worm, or a different heading if you don\'t have the worm.</td><td><img src="bird/help_up.png"></td></tr></table>'
      : 4 == c
      ? "<table><tr><td><img src=\"common/help.png\"></td><td>'x' is your current horizontal position. Use this block to go in one heading if 'x' is less than a number, or a different heading otherwise.</td><td><img src=\"bird/help_up.png\"></td></tr></table>"
      : 5 == c
      ? '<table><tr><td><img src="bird/help_up.png"></td><td>Click the icon to modify the \'if\' block.</td><td><img src="common/help.png"></td></tr></table>'
      : 6 == c
      ? "<table><tr><td><img src=\"bird/help_up.png\"></td><td>This level needs both an 'else if' and an 'else' block.</td><td><img src=\"common/help.png\"></td></tr></table>"
      : 8 == c
      ? '<table><tr><td><img src="bird/help_up.png"></td><td>The \'and\' block is true only if both its inputs are true.</td><td><img src="common/help.png"></td></tr></table>'
      : "") +
    "</div>" +
    (5 == c
      ? '<div id="dialogMutatorHelp" class="dialogHiddenContent"><table><tr><td><img src="bird/help_mutator.png" class="mirrorImg" height=58 width=107></td><td>Drag an \'else\' block into the \'if\' block.</td></tr></table></div>'
      : "")
  );
}
g.h.yg = function (a, c) {
  g.h.yg.A.constructor.call(this, c);
  this.Qk = a;
};
g.g.object.V(g.h.yg, g.h.$d);
g.h.yg.prototype.type = g.h.Zw;
g.h.yg.prototype.sa = function () {
  var a = g.h.yg.A.sa.call(this);
  a.isOpen = this.Qk;
  return a;
};
g.h.yg.prototype.aa = function (a) {
  g.h.yg.A.aa.call(this, a);
  this.Qk = a.isOpen;
};
g.D.register(g.D.ba.Pb, g.h.Zw, g.h.yg);
g.vc = function (a) {
  this.o = a;
  this.Dh = [];
  this.If = null;
  if (!(0 >= this.o.options.Gp)) {
    a = new g.kd({
      scrollbars: !0,
      parentWorkspace: this.o,
      rtl: this.o.M,
      oneBasedIndex: this.o.options.Up,
      renderer: this.o.options.bq,
      rendererOverrides: this.o.options.cq,
    });
    if (this.o.oe) {
      a.jb = this.o.jb == g.g.ya.Yd.Gr ? g.g.ya.Yd.zv : g.g.ya.Yd.Gr;
      if (!g.Uq) throw Error("Missing require for Blockly.HorizontalFlyout");
      this.If = new g.Uq(a);
    } else {
      a.jb = this.o.jb == g.g.ya.Yd.Sj ? g.g.ya.Yd.yl : g.g.ya.Yd.Sj;
      if (!g.Ag) throw Error("Missing require for Blockly.VerticalFlyout");
      this.If = new g.Ag(a);
    }
    K(this.o, this.iG.bind(this));
  }
};
b = g.vc.prototype;
b.Pl = 47;
b.Pn = 44;
b.Mj = 16;
b.JC = 20;
b.nw = 20;
b.so = 10;
b.Br = 0;
b.Cr = 32;
b.hC = 0.1;
g.vc.aB = 80;
g.vc.pv = 4;
g.vc.yw = 0.4;
g.vc.WC = 0.8;
g.vc.pw = 45;
b = g.vc.prototype;
b.wp = !1;
b.Rt = 0;
b.S = null;
b.oq = null;
b.Gt = 0;
b.Qh = 0;
b.wz = 0;
b.JA = 0;
b.Va = function () {
  this.S = g.g.j.N(g.g.H.Gc, { class: "blocklyTrash" }, null);
  var a = String(Math.random()).substring(2);
  var c = g.g.j.N(g.g.H.Bv, { id: "blocklyTrashBodyClipPath" + a }, this.S);
  g.g.j.N(g.g.H.Bd, { width: this.Pl, height: this.Pn, y: this.Mj }, c);
  var d = g.g.j.N(
    g.g.H.no,
    {
      width: g.Uj.width,
      x: -this.Br,
      height: g.Uj.height,
      y: -this.Cr,
      "clip-path": "url(#blocklyTrashBodyClipPath" + a + ")",
    },
    this.S
  );
  d.setAttributeNS(g.g.j.Oe, "xlink:href", this.o.options.Um + g.Uj.url);
  c = g.g.j.N(g.g.H.Bv, { id: "blocklyTrashLidClipPath" + a }, this.S);
  g.g.j.N(g.g.H.Bd, { width: this.Pl, height: this.Mj }, c);
  this.oq = g.g.j.N(
    g.g.H.no,
    {
      width: g.Uj.width,
      x: -this.Br,
      height: g.Uj.height,
      y: -this.Cr,
      "clip-path": "url(#blocklyTrashLidClipPath" + a + ")",
    },
    this.S
  );
  this.oq.setAttributeNS(g.g.j.Oe, "xlink:href", this.o.options.Um + g.Uj.url);
  g.Tc(this.S, "mousedown", this, this.MD);
  g.Tc(this.S, "mouseup", this, this.click);
  g.Tc(d, "mouseover", this, this.VF);
  g.Tc(d, "mouseout", this, this.TF);
  this.Or();
  return this.S;
};
b.Da = function (a) {
  0 < this.o.options.Gp &&
    (g.g.j.Ik(this.If.Va(g.g.H.wh), w(this.o)), this.If.Da(this.o));
  this.tq = this.JC + a;
  Ta(this, !1);
  return this.tq + this.Pn + this.Mj;
};
b.L = function () {
  this.S && (g.g.j.removeNode(this.S), (this.S = null));
  this.o = this.oq = null;
  clearTimeout(this.Gt);
};
b.position = function () {
  if (this.tq) {
    var a = this.o.pd();
    a &&
      ((this.wz =
        a.jb == g.Me || (this.o.oe && !this.o.M)
          ? a.Kb + a.wc - this.Pl - this.nw - g.Oa.Bc
          : this.nw + g.Oa.Bc),
      (this.JA =
        a.jb == g.Fo ? this.tq : a.Vb + a.Hc - (this.Pn + this.Mj) - this.tq),
      this.S.setAttribute(
        "transform",
        "translate(" + this.wz + "," + this.JA + ")"
      ));
  }
};
b.sm = function () {
  if (!this.S) return null;
  var a = this.S.getBoundingClientRect(),
    c = a.top + this.Cr - this.so;
  a = a.left + this.Br - this.so;
  return new g.g.Rect(
    c,
    c + this.Mj + this.Pn + 2 * this.so,
    a,
    a + this.Pl + 2 * this.so
  );
};
function Ta(a, c) {
  a.wp != c && (clearTimeout(a.Gt), (a.wp = c), a.Or());
}
b.Or = function () {
  var a = 1 / (g.vc.pv + 1);
  this.Qh += this.wp ? a : -a;
  this.Qh = Math.min(Math.max(this.Qh, this.Rt), 1);
  Pd(this, this.Qh * g.vc.pw);
  this.S.style.opacity = g.vc.yw + this.Qh * (g.vc.WC - g.vc.yw);
  this.Qh > this.Rt &&
    1 > this.Qh &&
    (this.Gt = setTimeout(this.Or.bind(this), g.vc.aB / g.vc.pv));
};
function Pd(a, c) {
  var d = a.o.jb == g.Ml || (a.o.oe && a.o.M);
  a.oq.setAttribute(
    "transform",
    "rotate(" + (d ? -c : c) + "," + (d ? 4 : a.Pl - 4) + "," + (a.Mj - 2) + ")"
  );
}
b.Wo = function () {
  Ta(this, !1);
};
b.click = function () {
  if (this.Dh.length && !this.If.isVisible()) {
    for (var a = [], c = 0, d; (d = this.Dh[c]); c++) a[c] = g.R.fg(d);
    this.If.show(a);
    Hc(this, !0);
  }
};
function Hc(a, c) {
  a = new g.h.yg(c, a.o.id);
  g.h.Ea(a);
}
b.MD = function (a) {
  !this.If.isVisible() && this.Dh.length && a.stopPropagation();
};
b.VF = function () {
  this.Dh.length && Ta(this, !0);
};
b.TF = function () {
  Ta(this, !1);
};
b.iG = function (a) {
  if (
    !(0 >= this.o.options.Gp) &&
    a.type == g.h.vv &&
    a.Wk.tagName &&
    "shadow" != a.Wk.tagName.toLowerCase()
  ) {
    for (var c = (a = a.Wk.cloneNode(!0)); c; ) {
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
    a = g.R.Xc(a);
    if (-1 == this.Dh.indexOf(a)) {
      for (this.Dh.unshift(a); this.Dh.length > this.o.options.Gp; )
        this.Dh.pop();
      this.Rt = a = this.hC;
      this.wp || Pd(this, a * g.vc.pw);
    }
  }
};
g.jo = function () {
  g.jo.A.constructor.call(this);
};
g.g.object.V(g.jo, g.Ij);
b = g.jo.prototype;
b.Tb = function (a) {
  switch (a.name) {
    case g.navigation.Gb.ld:
      return this.we(), !0;
    case g.navigation.Gb.jd:
      return this.next(), !0;
    default:
      return !1;
  }
};
b.next = function () {
  var a = this.Wa;
  if (!a) return null;
  (a = a.next()) && M(this, a);
  return a;
};
b.Qf = function () {
  return null;
};
b.we = function () {
  var a = this.Wa;
  if (!a) return null;
  (a = a.we()) && M(this, a);
  return a;
};
b.Uf = function () {
  return null;
};
g.vl = function (a) {
  a.pd = this.op.bind(this);
  a.ln = this.uH.bind(this);
  this.o = new g.cb(a);
  this.o.Tf = !0;
  this.o.Lb(this.Ug);
  this.M = !!a.M;
  this.oe = !1;
  this.gi = a.jb;
  this.Ps = [];
  this.Km = [];
  this.Ul = [];
  this.bd = [];
  this.qu = [];
  this.fl = this.o.ub.$().Eo;
  this.Ra = null;
};
b = g.vl.prototype;
b.fk = !0;
b.Ug = !1;
b.Di = !0;
b.wb = 8;
b.rh = g.vl.prototype.wb;
b.eC = 3 * g.vl.prototype.rh;
b.fC = 3 * g.vl.prototype.rh;
b.zr = 2;
b.pb = 0;
b.yc = 0;
b.CE = 70;
b.Va = function (a) {
  this.S = g.g.j.N(a, { class: "blocklyFlyout", style: "display: none" }, null);
  this.Cc = g.g.j.N(g.g.H.Xd, { class: "blocklyFlyoutBackground" }, this.S);
  this.S.appendChild(this.o.Va());
  this.o.Ec.subscribe(this.Cc, "flyoutBackgroundColour", "fill");
  this.o.Ec.subscribe(this.Cc, "flyoutOpacity", "fill-opacity");
  qc(this.o.Ld, new g.jo());
  return this.S;
};
b.Da = function (a) {
  this.Ra = a;
  this.o.Ra = a;
  this.Ia = new g.Oa(this.o, this.oe, !1, "blocklyFlyoutScrollbar");
  this.Fa();
  Array.prototype.push.apply(this.Ps, g.Aa(this.S, "wheel", this, this.YH));
  this.fk || ((this.jp = this.Qs.bind(this)), K(this.Ra, this.jp));
  Array.prototype.push.apply(
    this.Ps,
    g.Aa(this.Cc, "mousedown", this, this.Uh)
  );
  this.o.Gh = this.Ra.Gh.bind(this.Ra);
  this.o.Ru(this.Ra.Ja);
  a = this.o;
  a.Yh = new g.Lr(a);
};
b.L = function () {
  this.Fa();
  g.ab(this.Ps);
  this.jp && (ib(this.Ra, this.jp), (this.jp = null));
  this.Ia && (this.Ia.L(), (this.Ia = null));
  this.o &&
    (this.o.Ec.unsubscribe(this.Cc),
    (this.o.Ra = null),
    this.o.L(),
    (this.o = null));
  this.S && (g.g.j.removeNode(this.S), (this.S = null));
  this.Ra = this.Cc = null;
};
b.Og = function () {
  return this.pb;
};
b.isVisible = function () {
  return this.Ug;
};
b.Lb = function (a) {
  var c = a != this.isVisible();
  this.Ug = a;
  c && this.En();
};
b.qj = function (a) {
  var c = a != this.Di;
  this.Di = a;
  c && this.En();
};
b.En = function () {
  var a = this.Di ? this.isVisible() : !1;
  this.S.style.display = a ? "block" : "none";
  this.Ia.qj(a);
};
b.Fa = function () {
  if (this.isVisible()) {
    this.Lb(!1);
    for (var a = 0, c; (c = this.bd[a]); a++) g.ab(c);
    this.bd.length = 0;
    this.Zh && (ib(this.o, this.Zh), (this.Zh = null));
  }
};
b.show = function (a) {
  this.o.rc(!1);
  this.Fa();
  Qd(this);
  "string" == typeof a && (a = Rd(this, a));
  this.Lb(!0);
  a = g.g.ya.Wx(a);
  a = Sd(this, a);
  Td(this, a.hE, a.NE);
  this.bd.push(
    g.Aa(this.Cc, "mouseover", this, function () {
      for (var c = this.o.tb(!1), d = 0, e; (e = c[d]); d++) e.dn();
    })
  );
  this.oe ? (this.yc = 0) : (this.pb = 0);
  this.o.rc(!0);
  this.xu();
  this.Qs();
  this.position();
  this.Zh = this.xu.bind(this);
  K(this.o, this.Zh);
};
function Sd(a, c) {
  var d = [],
    e = [];
  a.qu.length = 0;
  for (var f = a.oe ? a.eC : a.fC, h = 0, k; (k = c[h]); h++) {
    if (k.custom) {
      var l = Rd(a, k.custom);
      l = g.g.ya.Wx(l);
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
          ? ((k = g.R.fg(n)), (m.blockxml = k))
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
        n = g.R.wk(m, k.o);
        n.isEnabled() || k.qu.push(n);
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
        l = Ud(a, k, !0);
        d.push({ type: "button", button: l });
        e.push(f);
        break;
      case "BUTTON":
        (l = Ud(a, k, !1)), d.push({ type: "button", button: l }), e.push(f);
    }
  }
  return { hE: d, NE: e };
}
function Rd(a, c) {
  c = a.o.Ra.av[c] || null;
  if ("function" != typeof c)
    throw TypeError(
      "Couldn't find a callback function when opening a toolbox category."
    );
  a = c(a.o.Ra);
  if (!Array.isArray(a))
    throw new TypeError(
      "Result of toolbox category callback must be an array."
    );
  return a;
}
function Ud(a, c, d) {
  if (!g.dC) throw Error("Missing require for Blockly.FlyoutButton");
  return new g.dC(a.o, a.Ra, c, d);
}
function Qd(a) {
  for (var c = a.o.tb(!1), d = 0, e; (e = c[d]); d++) e.B == a.o && e.L(!1, !1);
  for (d = 0; d < a.Km.length; d++)
    if ((c = a.Km[d])) g.I.dv(c), g.g.j.removeNode(c);
  for (d = a.Km.length = 0; (c = a.Ul[d]); d++) c.L();
  a.Ul.length = 0;
  a.o.Yh.clear();
}
function Vd(a, c) {
  return function (d) {
    var e = a.Ra.Gh(d);
    e && (Bb(e, c), Ab(e, d, a));
  };
}
b.Uh = function (a) {
  var c = this.Ra.Gh(a);
  c && Ab(c, a, this);
};
function sb(a, c) {
  var d = null;
  g.h.disable();
  var e = a.Ra.Ki();
  a.Ra.rc(!1);
  try {
    var f = a.Ra;
    if (!c.pa()) throw Error("oldBlock is not rendered.");
    var h = g.R.Cg(c, !0);
    f.rc(!1);
    var k = g.R.wk(h, f);
    if (!k.pa()) throw Error("block is not rendered.");
    var l = g.g.um(f.vb),
      m = g.g.um(a.o.vb),
      n = c.Ta();
    n.scale(a.o.scale);
    var p = g.g.K.sum(m, n),
      q = g.g.K.jm(p, l);
    q.scale(1 / f.scale);
    k.moveBy(q.x, q.y);
    d = k;
  } finally {
    g.h.enable();
  }
  g.mc();
  c = g.ma.Dy(a.Ra, e);
  if (g.h.isEnabled()) {
    g.h.ea(!0);
    for (e = 0; e < c.length; e++) g.h.Ea(new g.h.ae(c[e]));
    g.h.Ea(new g.h.De(d));
  }
  a.fk ? a.Fa() : a.Qs();
  return d;
}
b.Qs = function () {
  for (var a = this.o.tb(!1), c = 0, d; (d = a[c]); c++)
    if (-1 == this.qu.indexOf(d))
      for (var e = fb(this.Ra, g.g.Xs(d)); d; ) d.Zf(e), (d = u(d));
};
b.xu = function () {
  this.Zh && ib(this.o, this.Zh);
  this.o.scale = this.Ra.scale;
  for (var a = 0, c = this.o.tb(!1), d = 0, e; (e = c[d]); d++) {
    var f = H(e).width;
    e.O && (f -= this.fl);
    a = Math.max(a, f);
  }
  for (d = 0; (e = this.Ul[d]); d++) a = Math.max(a, e.width);
  a += 1.5 * this.rh + this.fl;
  a *= this.o.scale;
  a += g.Oa.Bc;
  if (this.pb != a) {
    for (d = 0; (e = c[d]); d++) {
      if (this.M) {
        f = e.Ta().x;
        var h = a / this.o.scale - this.rh;
        e.O || (h -= this.fl);
        e.moveBy(h - f, 0);
      }
      e.yy &&
        ((f = e.yy),
        (h = e),
        (e = H(h)),
        f.setAttribute("width", e.width),
        f.setAttribute("height", e.height),
        (h = h.Ta()),
        f.setAttribute("y", h.y),
        f.setAttribute("x", this.M ? h.x - e.width : h.x));
    }
    if (this.M)
      for (d = 0; (e = this.Ul[d]); d++)
        (c = e.fL().y),
          e.moveTo(a / this.o.scale - e.width - this.rh - this.fl, c);
    this.Ra.jb != this.gi ||
      this.gi != g.Me ||
      this.Ra.Ba ||
      this.Ra.translate(this.Ra.scrollX + a, this.Ra.scrollY);
    this.pb = a;
    this.position();
  }
  this.Zh && K(this.o, this.Zh);
};
function vb(a) {
  return a.Ia ? a.Ia.isVisible() : !1;
}
b.Tb = function (a) {
  return this.o.ob().Tb(a);
};
g.Ag = function (a) {
  g.Ag.A.constructor.call(this, a);
};
g.g.object.V(g.Ag, g.vl);
g.Ag.AL = "verticalFlyout";
b = g.Ag.prototype;
b.op = function () {
  if (!this.isVisible()) return null;
  try {
    var a = this.o.vb.getBBox();
  } catch (f) {
    a = { height: 0, y: 0, width: 0, x: 0 };
  }
  var c = this.zr,
    d = this.yc - 2 * this.zr,
    e = this.pb;
  this.M || (e -= this.zr);
  return {
    nd: a.height * this.o.scale + 2 * this.rh,
    Ve: a.width * this.o.scale + 2 * this.rh,
    xc: a.y,
    Jc: a.x,
    Vb: d,
    Kb: e,
    Jb: -this.o.scrollY + a.y,
    Eb: -this.o.scrollX,
    Hc: c,
    wc: 0,
  };
};
b.uH = function (a) {
  var c = this.op();
  c &&
    ("number" == typeof a.y && (this.o.scrollY = -c.nd * a.y),
    this.o.translate(this.o.scrollX + c.wc, this.o.scrollY + c.Hc));
};
b.position = function () {
  if (this.isVisible()) {
    var a = this.Ra.pd();
    if (a) {
      this.yc = a.Vb;
      var c = this.pb - this.wb;
      a = a.Vb - 2 * this.wb;
      var d = this.gi == g.Ml,
        e = c + this.wb;
      e = ["M " + (d ? e : 0) + ",0"];
      e.push("h", d ? -c : c);
      e.push(
        "a",
        this.wb,
        this.wb,
        0,
        0,
        d ? 0 : 1,
        d ? -this.wb : this.wb,
        this.wb
      );
      e.push("v", Math.max(0, a));
      e.push(
        "a",
        this.wb,
        this.wb,
        0,
        0,
        d ? 0 : 1,
        d ? this.wb : -this.wb,
        this.wb
      );
      e.push("h", d ? c : -c);
      e.push("z");
      this.Cc.setAttribute("d", e.join(" "));
      c = (c = this.Ra.pd())
        ? this.Ra.jb == this.gi
          ? c.HA
            ? this.gi == g.Me
              ? c.HA
              : c.Kb - this.pb
            : this.gi == g.Me
            ? 0
            : c.Kb
          : this.gi == g.Me
          ? 0
          : c.Kb + c.wc - this.pb
        : 0;
      a = this.yc;
      this.S.setAttribute("width", this.pb);
      this.S.setAttribute("height", a);
      "svg" == this.S.tagName
        ? g.g.j.jn(this.S, "translate(" + c + "px,0px)")
        : this.S.setAttribute("transform", "translate(" + c + ",0)");
      this.Ia &&
        ((this.Ia.ku = new g.g.K(c, 0)),
        this.Ia.resize(),
        this.Ia.setPosition(this.Ia.position.x, this.Ia.position.y));
    }
  }
};
b.oA = function () {
  this.Ia.set(0);
};
b.YH = function (a) {
  var c = g.g.Ry(a);
  if (c.y) {
    var d = this.op();
    c = d.Jb - d.xc + c.y;
    c = Math.min(c, d.nd - d.Vb);
    c = Math.max(c, 0);
    this.Ia.set(c);
    g.X.Fa();
    g.G.Oi();
  }
  a.preventDefault();
  a.stopPropagation();
};
function Td(a, c, d) {
  a.o.scale = a.Ra.scale;
  for (var e = a.rh, f = a.M ? e : e + a.fl, h = 0, k; (k = c[h]); h++)
    if ("block" == k.type) {
      k = k.block;
      for (var l = r(k, !1), m = 0, n; (n = l[m]); m++) n.nc = !0;
      k.Ha();
      n = k.pa();
      l = H(k);
      m = k.O ? f - a.fl : f;
      k.moveBy(m, e);
      var p = a,
        q = k,
        t = h;
      m = g.g.j.N(
        g.g.H.Bd,
        {
          "fill-opacity": 0,
          x: a.M ? m - l.width : m,
          y: e,
          height: l.height,
          width: l.width,
        },
        null
      );
      m.Ae = q;
      g.I.gk(m);
      p.o.vb.insertBefore(m, q.pa());
      q.yy = m;
      p.Km[t] = m;
      p = a;
      p.bd.push(g.Aa(n, "mousedown", null, Vd(p, k)));
      p.bd.push(g.Aa(m, "mousedown", null, Vd(p, k)));
      p.bd.push(g.Tc(n, "mouseenter", k, k.Io));
      p.bd.push(g.Tc(n, "mouseleave", k, k.dn));
      p.bd.push(g.Tc(m, "mouseenter", k, k.Io));
      p.bd.push(g.Tc(m, "mouseleave", k, k.dn));
      e += l.height + d[h];
    } else
      "button" == k.type &&
        ((l = a),
        (m = k.button),
        (n = f),
        (p = e),
        (q = m.Va()),
        m.moveTo(n, p),
        m.show(),
        l.bd.push(g.Aa(q, "mousedown", l, l.Uh)),
        l.Ul.push(m),
        (e += k.button.height + d[h]));
}
b.sm = function () {
  if (!this.S) return null;
  var a = this.S.getBoundingClientRect(),
    c = a.left;
  return this.gi == g.Me
    ? new g.g.Rect(-1e9, 1e9, -1e9, c + a.width)
    : new g.g.Rect(-1e9, 1e9, c, 1e9);
};
g.D.register(g.D.ba.aC, g.D.Lq, g.Ag);
g.g.C = {};
g.g.C.La = function (a, c) {
  return " " + a + "," + c + " ";
};
g.g.C.curve = function (a, c) {
  return " " + a + c.join("");
};
g.g.C.moveTo = function (a, c) {
  return " M " + a + "," + c + " ";
};
g.g.C.moveBy = function (a, c) {
  return " m " + a + "," + c + " ";
};
g.g.C.lineTo = function (a, c) {
  return " l " + a + "," + c + " ";
};
g.g.C.line = function (a) {
  return " l" + a.join("");
};
g.g.C.ca = function (a, c) {
  return " " + a + " " + c + " ";
};
g.g.C.arc = function (a, c, d, e) {
  return a + " " + d + " " + d + " " + c + e;
};
g.i.mg = function () {
  this.qf = 0;
  this.iD = 3;
  this.Vd = 5;
  this.rw = 8;
  this.Rc = 10;
  this.Vw = this.Vd;
  this.Ll = 15;
  this.$j = 5;
  this.Eo = 8;
  this.VC = 15;
  this.gr = 4;
  this.PC = 12;
  this.IB = 16;
  this.HB = this.Ov = this.Ll;
  this.wb = 8;
  this.oD = this.Dl = 15;
  this.Sw = 0;
  this.Uw = 20;
  this.fB = 4;
  this.tD = this.Vd;
  this.uD = this.Rc;
  this.jB = this.Vd;
  this.iB = this.Rc;
  this.Nn = !1;
  this.mD = 15;
  this.nD = 100;
  this.lD = 15;
  this.Al = 24;
  this.KB = 14.5;
  this.JB = this.Ll + 11;
  this.PB = 2;
  this.LB = this.Al;
  this.Rw = g.g.C.moveBy(0, 0);
  this.vC = 12;
  this.wC = 6;
  this.nh = 11;
  this.oh = "normal";
  this.mh = "sans-serif";
  this.Uv = this.io = -1;
  this.ho = 4;
  this.Sv = 16;
  this.rl = 5;
  this.Rv = "#fff";
  this.Sq = !g.g.userAgent.Fe && !g.g.userAgent.pi;
  this.Tv = this.Sv;
  this.XB = this.WB = this.Rq = !1;
  this.ZB = this.rl;
  this.tl = 12;
  this.YB =
    "data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMi43MSIgaGVpZ2h0PSI4Ljc5IiB2aWV3Qm94PSIwIDAgMTIuNzEgOC43OSI+PHRpdGxlPmRyb3Bkb3duLWFycm93PC90aXRsZT48ZyBvcGFjaXR5PSIwLjEiPjxwYXRoIGQ9Ik0xMi43MSwyLjQ0QTIuNDEsMi40MSwwLDAsMSwxMiw0LjE2TDguMDgsOC4wOGEyLjQ1LDIuNDUsMCwwLDEtMy40NSwwTDAuNzIsNC4xNkEyLjQyLDIuNDIsMCwwLDEsMCwyLjQ0LDIuNDgsMi40OCwwLDAsMSwuNzEuNzFDMSwwLjQ3LDEuNDMsMCw2LjM2LDBTMTEuNzUsMC40NiwxMiwuNzFBMi40NCwyLjQ0LDAsMCwxLDEyLjcxLDIuNDRaIiBmaWxsPSIjMjMxZjIwIi8+PC9nPjxwYXRoIGQ9Ik02LjM2LDcuNzlhMS40MywxLjQzLDAsMCwxLTEtLjQyTDEuNDIsMy40NWExLjQ0LDEuNDQsMCwwLDEsMC0yYzAuNTYtLjU2LDkuMzEtMC41Niw5Ljg3LDBhMS40NCwxLjQ0LDAsMCwxLDAsMkw3LjM3LDcuMzdBMS40MywxLjQzLDAsMCwxLDYuMzYsNy43OVoiIGZpbGw9IiNmZmYiLz48L3N2Zz4=";
  this.$B = !1;
  this.an = String(Math.random()).substring(2);
  this.hp = "";
  this.Os = null;
  this.ny = "";
  this.em = this.rs = this.zs = null;
  this.Zn = "#cc0a0a";
  this.to = "#4286f4";
  this.ao = 100;
  this.ox = 5;
  this.$n = 10;
  this.vB = 2;
  this.xB = 4;
  this.Yv = !1;
  this.Wq = "#000000";
  this.po = 0.2;
  this.Qw = { dD: 1, Oj: 2 };
};
b = g.i.mg.prototype;
b.Da = function () {
  this.Lj = this.Kt();
  this.Oj = this.Lt();
  this.Vj = this.Nt();
  this.qr = this.Mt();
  var a = this.wb,
    c = g.g.C.arc("a", "0 0,0", a, g.g.C.La(-a, a)),
    d = g.g.C.arc("a", "0 0,0", a, g.g.C.La(a, a));
  this.qo = { width: a, height: a, pu: c, Yp: d };
  a = this.wb;
  c = g.g.C.moveBy(0, a) + g.g.C.arc("a", "0 0,1", a, g.g.C.La(a, -a));
  d = g.g.C.arc("a", "0 0,1", a, g.g.C.La(a, a));
  var e = g.g.C.arc("a", "0 0,1", a, g.g.C.La(-a, -a)),
    f = g.g.C.arc("a", "0 0,1", a, g.g.C.La(-a, a));
  this.Hl = { bv: c, NH: d, ND: f, Wr: e, nH: a };
};
b.pn = function (a) {
  this.zh = {};
  var c = a.zh,
    d;
  for (d in c) this.zh[d] = Wd(c[d]);
  this.mh =
    a.fontStyle && void 0 != a.fontStyle.family ? a.fontStyle.family : this.mh;
  this.oh =
    a.fontStyle && void 0 != a.fontStyle.weight ? a.fontStyle.weight : this.oh;
  this.nh =
    a.fontStyle && void 0 != a.fontStyle.size ? a.fontStyle.size : this.nh;
  c = g.g.j.PF(this.nh + "pt", this.oh, this.mh);
  this.io = c.height;
  this.Uv = c.Qe;
  this.Zn = ha(a, "cursorColour") || this.Zn;
  this.to = ha(a, "markerColour") || this.to;
  this.Wq = ha(a, "insertionMarkerColour") || this.Wq;
  this.po = Number(ha(a, "insertionMarkerOpacity")) || this.po;
  this.Nn = null != a.Xu ? a.Xu : this.Nn;
};
function nc(a, c) {
  var d = "auto_" + c;
  a.zh[d] || (a.zh[d] = Wd({ colourPrimary: c }));
  return { style: a.zh[d], name: d };
}
function ic(a, c) {
  return (
    a.zh[c || ""] ||
    (c && 0 == c.indexOf("auto_")
      ? nc(a, c.substring(5)).style
      : Wd({ colourPrimary: "#000000" }))
  );
}
function Wd(a) {
  var c = {};
  a && g.g.object.bf(c, a);
  a = g.g.Wp(c.colourPrimary || "#000");
  c.Gg = a.ym;
  c.colourSecondary
    ? (a = g.g.Wp(c.colourSecondary).ym)
    : ((a = c.Gg), (a = g.g.Cb.Tr("#fff", a, 0.6) || a));
  c.Xo = a;
  c.colourTertiary
    ? (a = g.g.Wp(c.colourTertiary).ym)
    : ((a = c.Gg), (a = g.g.Cb.Tr("#fff", a, 0.3) || a));
  c.xf = a;
  c.Nf = c.hat || "";
  return c;
}
b.L = function () {
  this.Os && g.g.j.removeNode(this.Os);
  this.zs && g.g.j.removeNode(this.zs);
  this.rs && g.g.j.removeNode(this.rs);
  this.em = null;
};
b.Kt = function () {
  var a = this.vC,
    c = this.wC,
    d = g.g.C.line([
      g.g.C.La(c, a / 4),
      g.g.C.La(2 * -c, a / 2),
      g.g.C.La(c, a / 4),
    ]);
  return { height: a, width: c, path: d };
};
b.Nt = function () {
  var a = this.mD,
    c = this.nD,
    d = g.g.C.curve("c", [g.g.C.La(30, -a), g.g.C.La(70, -a), g.g.C.La(c, 0)]);
  return { height: a, width: c, path: d };
};
b.Mt = function () {
  function a(h) {
    h = h ? -1 : 1;
    var k = -h,
      l = d / 2,
      m = g.g.C.La(c, h * l);
    return (
      g.g.C.curve("c", [
        g.g.C.La(0, h * (l + 2.5)),
        g.g.C.La(-c, k * (l + 0.5)),
        g.g.C.La(-c, h * l),
      ]) + g.g.C.curve("s", [g.g.C.La(c, 2.5 * k), m])
    );
  }
  var c = this.Eo,
    d = this.Ll,
    e = a(!0),
    f = a(!1);
  return { type: this.Qw.dD, width: c, height: d, ve: f, Vm: e };
};
b.Lt = function () {
  function a(k) {
    return g.g.C.line([
      g.g.C.La(k * e, d),
      g.g.C.La(3 * k, 0),
      g.g.C.La(k * e, -d),
    ]);
  }
  var c = this.VC,
    d = this.gr,
    e = (c - 3) / 2,
    f = a(1),
    h = a(-1);
  return { type: this.Qw.Oj, width: c, height: d, Xh: f, Yz: h };
};
function Oa(a, c) {
  switch (c.type) {
    case g.rb:
    case g.Ie:
      return a.qr;
    case g.Je:
    case g.Ua:
      return a.Oj;
    default:
      throw Error("Unknown connection type");
  }
}
b.Va = function (a, c, d) {
  d = this.Ys(d);
  c = "blockly-renderer-style-" + c;
  this.em = document.getElementById(c);
  var e = d.join("\n");
  this.em
    ? (this.em.firstChild.textContent = e)
    : ((d = document.createElement("style")),
      (d.id = c),
      (c = document.createTextNode(e)),
      d.appendChild(c),
      document.head.insertBefore(d, document.head.firstChild),
      (this.em = d));
  a = g.g.j.N(g.g.H.Jv, {}, a);
  c = g.g.j.N(g.g.H.Vv, { id: "blocklyEmbossFilter" + this.an }, a);
  g.g.j.N(g.g.H.TB, { in: "SourceAlpha", stdDeviation: 1, result: "blur" }, c);
  d = g.g.j.N(
    g.g.H.VB,
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
  g.g.j.N(g.g.H.UB, { x: -5e3, y: -1e4, z: 2e4 }, d);
  g.g.j.N(
    g.g.H.Qq,
    { in: "specOut", in2: "SourceAlpha", operator: "in", result: "specOut" },
    c
  );
  g.g.j.N(
    g.g.H.Qq,
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
  this.hp = c.id;
  this.Os = c;
  c = g.g.j.N(
    g.g.H.Ew,
    {
      id: "blocklyDisabledPattern" + this.an,
      patternUnits: "userSpaceOnUse",
      width: 10,
      height: 10,
    },
    a
  );
  g.g.j.N(g.g.H.Bd, { width: 10, height: 10, fill: "#aaa" }, c);
  g.g.j.N(g.g.H.Xd, { d: "M 0 0 L 10 10 M 10 0 L 0 10", stroke: "#cc0" }, c);
  this.ny = c.id;
  this.zs = c;
  g.i.Pv &&
    ((a = g.g.j.N(
      g.g.H.Vv,
      {
        id: "blocklyDebugFilter" + this.an,
        height: "160%",
        width: "180%",
        y: "-30%",
        x: "-40%",
      },
      a
    )),
    (c = g.g.j.N(g.g.H.QB, { result: "outBlur" }, a)),
    g.g.j.N(
      g.g.H.SB,
      { type: "table", tableValues: "0 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1" },
      c
    ),
    g.g.j.N(
      g.g.H.RB,
      { "flood-color": "#ff0000", "flood-opacity": 0.5, result: "outColor" },
      a
    ),
    g.g.j.N(
      g.g.H.Qq,
      { in: "outColor", in2: "outBlur", operator: "in", result: "outGlow" },
      a
    ),
    (this.rs = a));
};
b.Ys = function (a) {
  return [
    a + " .blocklyText, ",
    a + " .blocklyFlyoutLabelText {",
    "font: " + this.oh + " " + this.nh + "pt " + this.mh + ";",
    "}",
    a + " .blocklyText {",
    "fill: #fff;",
    "}",
    a + " .blocklyNonEditableText>rect,",
    a + " .blocklyEditableText>rect {",
    "fill: " + this.Rv + ";",
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
    "font-family: " + this.mh + ";",
    "font-weight: " + this.oh + ";",
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
    "fill-opacity: " + this.po + ";",
    "stroke: none;",
    "}",
  ];
};
g.h.og = function (a, c, d, e) {
  var f = a ? a.B.id : void 0;
  e && e.Za() == g.F.types.kc && (f = e.xa.id);
  g.h.og.A.constructor.call(this, f);
  this.fb = a ? a.id : null;
  this.Oz = d;
  this.Jz = e;
  this.Sf = c;
};
g.g.object.V(g.h.og, g.h.$d);
g.h.og.prototype.type = g.h.ow;
g.h.og.prototype.sa = function () {
  var a = g.h.og.A.sa.call(this);
  a.isCursor = this.Sf;
  a.blockId = this.fb;
  a.oldNode = this.Oz;
  a.newNode = this.Jz;
  return a;
};
g.h.og.prototype.aa = function (a) {
  g.h.og.A.aa.call(this, a);
  this.Sf = a.isCursor;
  this.fb = a.blockId;
  this.Oz = a.oldNode;
  this.Jz = a.newNode;
};
g.D.register(g.D.ba.Pb, g.h.ow, g.h.og);
g.i.pg = function (a, c, d) {
  this.o = a;
  this.Qt = d;
  this.Tm = null;
  this.v = c;
  this.qk = null;
  a = this.Sf() ? this.v.Zn : this.v.to;
  this.ge = d.Cb || a;
};
g.i.pg.wB = "blocklyCursor";
g.i.pg.LC = "blocklyMarker";
g.i.pg.iC = 0.75;
b = g.i.pg.prototype;
b.pa = function () {
  return this.S;
};
b.Zc = function () {
  return this.Qt;
};
b.Sf = function () {
  return "cursor" == this.Qt.type;
};
b.Va = function () {
  var a = this.Sf() ? g.i.pg.wB : g.i.pg.LC;
  this.S = g.g.j.N(g.g.H.Gc, { class: a }, null);
  this.Xg = g.g.j.N(g.g.H.Gc, { width: this.v.ao, height: this.v.ox }, this.S);
  this.Sh = g.g.j.N(
    g.g.H.Bd,
    { width: this.v.ao, height: this.v.ox, style: "display: none" },
    this.Xg
  );
  this.bj = g.g.j.N(
    g.g.H.Bd,
    { class: "blocklyVerticalMarker", rx: 10, ry: 10, style: "display: none" },
    this.Xg
  );
  this.aj = g.g.j.N(
    g.g.H.Xd,
    { transform: "", style: "display: none" },
    this.Xg
  );
  this.Wg = g.g.j.N(
    g.g.H.Xd,
    {
      transform: "",
      style: "display: none",
      fill: "none",
      "stroke-width": this.v.xB,
    },
    this.Xg
  );
  this.Sf() &&
    ((a = {
      attributeType: "XML",
      attributeName: "fill",
      dur: "1s",
      values: this.ge + ";transparent;transparent;",
      repeatCount: "indefinite",
    }),
    g.g.j.N(g.g.H.zq, a, this.Sh),
    g.g.j.N(g.g.H.zq, a, this.aj),
    (a.attributeName = "stroke"),
    g.g.j.N(g.g.H.zq, a, this.Wg));
  return this.S;
};
function Xd(a, c) {
  a.Sf()
    ? (a.Tm && a.Tm.Zg(null), c.Zg(a.pa()))
    : (a.Tm && a.Tm.ah(null), c.ah(a.pa()));
  a.Tm = c;
}
b.draw = function (a, c) {
  if (c) {
    this.v = this.o.ub.$();
    var d = this.Sf() ? this.v.Zn : this.v.to;
    this.ge = this.Qt.Cb || d;
    this.Sh.setAttribute("fill", this.ge);
    this.bj.setAttribute("stroke", this.ge);
    this.aj.setAttribute("fill", this.ge);
    this.Wg.setAttribute("stroke", this.ge);
    this.Sf() &&
      ((d = this.ge + ";transparent;transparent;"),
      this.Sh.firstChild.setAttribute("values", d),
      this.aj.firstChild.setAttribute("values", d),
      this.Wg.firstChild.setAttribute("values", d));
    d = c.xa;
    if (c.Za() == g.F.types.Nb) Yd(this, c);
    else if (c.Za() == g.F.types.xi) Yd(this, c);
    else if (d.type == g.rb) {
      var e = c.xa;
      d = e.W();
      var f = e.hj.x,
        h = e.hj.y;
      e = g.g.C.moveTo(0, 0) + Oa(this.v, e).ve;
      this.aj.setAttribute("d", e);
      this.aj.setAttribute(
        "transform",
        "translate(" + f + "," + h + ")" + (this.o.M ? " scale(-1 1)" : "")
      );
      this.qk = this.aj;
      Xd(this, d);
      Zd(this);
    } else if (d.type == g.Ua)
      (h = c.xa),
        (d = h.W()),
        (f = 0),
        (h = h.hj.y),
        (e = H(d).width),
        this.o.M && (f = -e),
        $d(this, f, h, e),
        Xd(this, d),
        Zd(this);
    else if (c.Za() == g.F.types.ld) Yd(this, c);
    else if (c.Za() == g.F.types.Zb)
      (d = c.xa),
        (f = d.Lg().width),
        (h = d.Lg().height),
        ce(this, 0, 0, f, h),
        Xd(this, d),
        Zd(this);
    else if (c.Za() == g.F.types.kc)
      (f = c.wq),
        (d = f.x),
        (f = f.y),
        this.o.M && (d -= this.v.ao),
        $d(this, d, f, this.v.ao),
        Xd(this, this.o),
        Zd(this);
    else if (c.Za() == g.F.types.rf) {
      d = c.xa;
      h = H(d);
      f = h.width + this.v.$n;
      h = h.height + this.v.$n;
      var k = (e = -this.v.$n / 2),
        l = -this.v.$n / 2;
      this.o.M && (k = -(f + e));
      ce(this, k, l, f, h);
      Xd(this, d);
      Zd(this);
    }
    d = c.W();
    a = new g.h.og(d, this.Sf(), a, c);
    g.h.Ea(a);
    a = this.qk.childNodes[0];
    void 0 !== a && a.beginElement && a.beginElement();
  } else this.Fa();
};
function Yd(a, c) {
  c = c.W();
  var d = c.width,
    e = c.height,
    f = e * g.i.pg.iC,
    h = a.v.vB;
  if (c.Z) {
    var k = Oa(a.v, c.Z);
    e = k;
    d =
      g.g.C.moveBy(-h, f) +
      g.g.C.ca("V", -h) +
      g.g.C.ca("H", a.v.Dl) +
      e.Xh +
      g.g.C.ca("H", d + 2 * h) +
      g.g.C.ca("V", f);
    a.Wg.setAttribute("d", d);
  } else
    c.O
      ? ((f = k = Oa(a.v, c.O)),
        (d =
          g.g.C.moveBy(d, 0) +
          g.g.C.ca("h", -(d - f.width)) +
          g.g.C.ca("v", a.v.$j) +
          f.ve +
          g.g.C.ca("V", e) +
          g.g.C.ca("H", d)),
        a.Wg.setAttribute("d", d))
      : ((d =
          g.g.C.moveBy(-h, f) +
          g.g.C.ca("V", -h) +
          g.g.C.ca("H", d + 2 * h) +
          g.g.C.ca("V", f)),
        a.Wg.setAttribute("d", d));
  a.o.M && a.Wg.setAttribute("transform", "scale(-1 1)");
  a.qk = a.Wg;
  Xd(a, c);
  Zd(a);
}
function Zd(a) {
  a.Fa();
  a.qk.style.display = "";
}
function $d(a, c, d, e) {
  a.Sh.setAttribute("x", c);
  a.Sh.setAttribute("y", d);
  a.Sh.setAttribute("width", e);
  a.qk = a.Sh;
}
function ce(a, c, d, e, f) {
  a.bj.setAttribute("x", c);
  a.bj.setAttribute("y", d);
  a.bj.setAttribute("width", e);
  a.bj.setAttribute("height", f);
  a.qk = a.bj;
}
b.Fa = function () {
  this.Sh.style.display = "none";
  this.bj.style.display = "none";
  this.aj.style.display = "none";
  this.Wg.style.display = "none";
};
b.L = function () {
  this.S && g.g.j.removeNode(this.S);
};
g.i.u = {
  NONE: 0,
  Zb: 1,
  Zv: 2,
  bw: 4,
  Ar: 8,
  uv: 16,
  hw: 32,
  Qv: 64,
  Ud: 128,
  dw: 256,
  Tw: 512,
  qB: 1024,
  nr: 2048,
  er: 4096,
  YC: 8192,
  Kq: 16384,
  Zq: 32768,
  Yq: 65536,
  xr: 131072,
  wr: 262144,
  lw: 524288,
  yr: 1048576,
  Hr: 2097152,
  Cq: 4194304,
  ew: 8388608,
};
g.i.u.gJ = g.i.u.Zq | g.i.u.Yq;
g.i.u.qK = g.i.u.xr | g.i.u.wr;
g.i.u.Zt = 16777216;
g.i.u.Za = function () {
  Object.prototype.hasOwnProperty.call(g.i.u, void 0) ||
    ((g.i.u[void 0] = g.i.u.Zt), (g.i.u.Zt <<= 1));
  return g.i.u[void 0];
};
g.i.u.Tg = function (a) {
  return a.type & g.i.u.Zb;
};
g.i.u.Yi = function (a) {
  return a.type & g.i.u.Zv;
};
g.i.u.Mk = function (a) {
  return a.type & g.i.u.bw;
};
g.i.u.qe = function (a) {
  return a.type & g.i.u.Ar;
};
g.i.u.pL = function (a) {
  return a.type & g.i.u.hw;
};
g.i.u.Mh = function (a) {
  return a.type & g.i.u.Ud;
};
g.i.u.Dm = function (a) {
  return a.type & g.i.u.Qv;
};
g.i.u.Lh = function (a) {
  return a.type & g.i.u.dw;
};
g.i.u.Zi = function (a) {
  return a.type & g.i.u.Tw;
};
g.i.u.Rk = function (a) {
  return a.type & g.i.u.nr;
};
g.i.u.Oh = function (a) {
  return a.type & g.i.u.er;
};
g.i.u.HF = function (a) {
  return a.type & (g.i.u.nr | g.i.u.er);
};
g.i.u.Nh = function (a) {
  return a.type & g.i.u.Yq;
};
g.i.u.pz = function (a) {
  return a.type & g.i.u.wr;
};
g.i.u.Em = function (a) {
  return a.type & g.i.u.Zq;
};
g.i.u.qL = function (a) {
  return a.type & g.i.u.xr;
};
g.i.u.oL = function (a) {
  return a.type & g.i.u.Kq;
};
g.i.u.nz = function (a) {
  return a.type & g.i.u.lw;
};
g.i.u.sL = function (a) {
  return a.type & g.i.u.yr;
};
g.i.u.lL = function (a) {
  return a.type & g.i.u.uv;
};
g.i.u.zp = function (a) {
  return a.type & g.i.u.Hr;
};
g.i.u.tp = function (a) {
  return a.type & g.i.u.Cq;
};
g.i.u.IF = function (a) {
  return a.type & (g.i.u.Hr | g.i.u.Cq);
};
g.i.u.CF = function (a) {
  return a.type & g.i.u.ew;
};
g.i.sh = function (a) {
  this.height = this.width = 0;
  this.type = g.i.u.NONE;
  this.ik = this.Ma = 0;
  this.v = a;
  this.te = this.v.Dl;
};
g.i.ta = function (a, c) {
  g.i.ta.A.constructor.call(this, a);
  this.Uc = c;
  this.shape = Oa(this.v, c);
  this.Xi = !!this.shape.isDynamic;
  this.type |= g.i.u.qB;
};
g.g.object.V(g.i.ta, g.i.sh);
g.i.mr = function (a, c) {
  g.i.mr.A.constructor.call(this, a, c);
  this.type |= g.i.u.YC;
  this.height = this.Xi ? 0 : this.shape.height;
  this.ze = this.width = this.Xi ? 0 : this.shape.width;
  this.Fd = this.v.$j;
  this.$l = 0;
};
g.g.object.V(g.i.mr, g.i.ta);
g.i.rr = function (a, c) {
  g.i.rr.A.constructor.call(this, a, c);
  this.type |= g.i.u.nr;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.V(g.i.rr, g.i.ta);
g.i.hr = function (a, c) {
  g.i.hr.A.constructor.call(this, a, c);
  this.type |= g.i.u.er;
  this.height = this.shape.height;
  this.width = this.shape.width;
};
g.g.object.V(g.i.hr, g.i.ta);
g.i.xl = function (a, c) {
  g.i.xl.A.constructor.call(this, a, c.connection);
  this.type |= g.i.u.Ud;
  this.input = c;
  this.align = c.align;
  (this.Ch = c.connection && c.connection.ra() ? c.connection.ra() : null)
    ? ((a = H(this.Ch)), (this.Yl = a.width), (this.Zo = a.height))
    : (this.Zo = this.Yl = 0);
  this.Fd = this.$l = 0;
};
g.g.object.V(g.i.xl, g.i.ta);
g.i.qh = function (a, c) {
  g.i.qh.A.constructor.call(this, a, c);
  this.type |= g.i.u.dw;
  this.Ch
    ? ((this.width = this.Yl), (this.height = this.Zo))
    : ((this.height = this.v.JB), (this.width = this.v.KB));
  this.kk = this.Xi ? this.shape.height(this.height) : this.shape.height;
  this.Af = this.Xi ? this.shape.width(this.height) : this.shape.width;
  this.Ch || (this.width += this.Af * (this.Xi ? 2 : 1));
  this.Fd = this.Xi ? this.shape.Fd(this.kk) : this.v.$j;
  this.$l = this.Xi ? this.shape.$l(this.Af) : 0;
};
g.g.object.V(g.i.qh, g.i.xl);
g.i.xh = function (a, c) {
  g.i.xh.A.constructor.call(this, a, c);
  this.type |= g.i.u.Tw;
  this.height = this.Ch ? this.Zo + this.v.Sw : this.v.LB;
  this.width = this.v.oD + this.shape.width;
};
g.g.object.V(g.i.xh, g.i.xl);
g.i.co = function (a, c) {
  g.i.co.A.constructor.call(this, a, c);
  this.type |= g.i.u.Qv;
  this.height = this.Ch ? this.Zo - this.v.$j - this.v.Vd : this.shape.height;
  this.width = this.shape.width + this.v.PB;
  this.Fd = this.v.$j;
  this.kk = this.shape.height;
  this.Af = this.shape.width;
};
g.g.object.V(g.i.co, g.i.xl);
g.i.pf = function (a, c) {
  g.i.pf.A.constructor.call(this, a);
  this.icon = c;
  this.isVisible = c.isVisible();
  this.type |= g.i.u.bw;
  a = new g.g.Zd(g.pf.prototype.Co, g.pf.prototype.Co - 2);
  this.height = a.height;
  this.width = a.width;
};
g.g.object.V(g.i.pf, g.i.sh);
g.i.Xq = function (a) {
  g.i.Xq.A.constructor.call(this, a);
  this.type |= g.i.u.lw;
  this.height = this.v.Lj.height;
  this.width = this.v.Lj.width;
};
g.g.object.V(g.i.Xq, g.i.sh);
g.i.Sd = function (a, c) {
  g.i.Sd.A.constructor.call(this, a);
  this.vy = c;
  this.td = c.bo;
  this.LE = !1;
  this.type |= g.i.u.Zb;
  a = this.vy.Lg();
  this.height = a.height;
  this.width = a.width;
};
g.g.object.V(g.i.Sd, g.i.sh);
g.i.Tq = function (a) {
  g.i.Tq.A.constructor.call(this, a);
  this.type |= g.i.u.Zv;
  this.height = this.v.Vj.height;
  this.width = this.v.Vj.width;
  this.ek = this.height;
};
g.g.object.V(g.i.Tq, g.i.sh);
g.i.Zj = function (a, c) {
  g.i.Zj.A.constructor.call(this, a);
  this.type = (c && "left" != c ? g.i.u.xr : g.i.u.Zq) | g.i.u.Kq;
  this.width = this.height = this.v.qf;
};
g.g.object.V(g.i.Zj, g.i.sh);
g.i.Ao = function (a, c) {
  g.i.Ao.A.constructor.call(this, a);
  this.type = (c && "left" != c ? g.i.u.wr : g.i.u.Yq) | g.i.u.Kq;
  this.width = this.v.wb;
  this.height = this.v.wb / 2;
};
g.g.object.V(g.i.Ao, g.i.sh);
g.i.ng = function (a, c) {
  g.i.ng.A.constructor.call(this, a);
  this.type = this.type | g.i.u.Ar | g.i.u.hw;
  this.width = c;
  this.height = this.v.lD;
};
g.g.object.V(g.i.ng, g.i.sh);
g.i.yi = function (a) {
  this.type = g.i.u.yr;
  this.elements = [];
  this.Ma = this.jc = this.gf = this.minWidth = this.minHeight = this.width = this.height = 0;
  this.az = this.Fk = this.ot = this.bc = this.Jh = !1;
  this.v = a;
  this.te = this.v.Dl;
  this.align = null;
};
g.i.yi.prototype.measure = function () {
  throw Error("Unexpected attempt to measure a base Row.");
};
function W(a) {
  for (var c = a.elements.length - 1, d; (d = a.elements[c]); c--)
    if (g.i.u.Mh(d)) return d;
  return null;
}
g.i.yi.prototype.mq = function () {
  return !0;
};
g.i.yi.prototype.lm = function () {
  return !0;
};
g.i.Ai = function (a) {
  g.i.Ai.A.constructor.call(this, a);
  this.type |= g.i.u.Hr;
  this.ek = this.Eg = 0;
  this.rF = !1;
  this.connection = null;
};
g.g.object.V(g.i.Ai, g.i.yi);
g.i.Ai.prototype.qt = function (a) {
  var c = (a.Nf ? "cap" === a.Nf : this.v.Nn) && !a.O && !a.Z,
    d = a.Z && a.Z.ra();
  return !!a.O || c || (d ? u(d) == a : !1);
};
g.i.Ai.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.i.u.qe(f) ||
        (g.i.u.Yi(f) ? (d = Math.max(d, f.ek)) : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.Eg = this.ek = d;
  this.gf = this.width;
};
g.i.Ai.prototype.mq = function () {
  return !1;
};
g.i.Ai.prototype.lm = function () {
  return !1;
};
g.i.mi = function (a) {
  g.i.mi.A.constructor.call(this, a);
  this.type |= g.i.u.Cq;
  this.bz = !1;
  this.connection = null;
  this.Qe = this.im = 0;
};
g.g.object.V(g.i.mi, g.i.yi);
g.i.mi.prototype.qt = function (a) {
  return !!a.O || !!u(a);
};
g.i.mi.prototype.measure = function () {
  for (var a = 0, c = 0, d = 0, e = 0, f; (f = this.elements[e]); e++)
    (c += f.width),
      g.i.u.qe(f) ||
        (g.i.u.Oh(f)
          ? (d = Math.max(d, f.height))
          : (a = Math.max(a, f.height)));
  this.width = Math.max(this.minWidth, c);
  this.height = Math.max(this.minHeight, a) + d;
  this.im = d;
  this.gf = this.width;
};
g.i.mi.prototype.mq = function () {
  return !1;
};
g.i.mi.prototype.lm = function () {
  return !1;
};
g.i.Do = function (a, c, d) {
  g.i.Do.A.constructor.call(this, a);
  this.type = this.type | g.i.u.Ar | g.i.u.uv;
  this.width = d;
  this.height = c;
  this.By = !1;
  this.gf = 0;
  this.elements = [new g.i.ng(this.v, d)];
};
g.g.object.V(g.i.Do, g.i.yi);
g.i.Do.prototype.measure = function () {};
g.i.Kj = function (a) {
  g.i.Kj.A.constructor.call(this, a);
  this.type |= g.i.u.ew;
  this.Px = 0;
};
g.g.object.V(g.i.Kj, g.i.yi);
g.i.Kj.prototype.measure = function () {
  this.width = this.minWidth;
  this.height = this.minHeight;
  for (var a = 0, c = 0, d; (d = this.elements[c]); c++)
    (this.width += d.width),
      g.i.u.Mh(d) &&
        (g.i.u.Zi(d)
          ? (a += d.Yl)
          : g.i.u.Dm(d) && 0 != d.Yl && (a += d.Yl - d.Af)),
      g.i.u.qe(d) || (this.height = Math.max(this.height, d.height));
  this.Px = a;
  this.gf = this.width + a;
};
g.i.Kj.prototype.lm = function () {
  return !this.Jh && !this.bc;
};
g.i.Ke = function (a, c) {
  this.U = c;
  this.ub = a;
  this.v = this.ub.$();
  this.O = c.O ? new g.i.mr(this.v, c.O) : null;
  this.Nk = Ha(c) && !c.isCollapsed();
  this.isCollapsed = c.isCollapsed();
  this.pe = c.pe();
  this.M = c.M;
  this.ei = this.width = this.jl = this.height = 0;
  this.rows = [];
  this.kz = [];
  this.fz = [];
  this.Yb = new g.i.Ai(this.v);
  this.Bb = new g.i.mi(this.v);
  this.lq = this.ze = 0;
};
b = g.i.Ke.prototype;
b.measure = function () {
  var a = !!this.U.Z,
    c = (this.U.Nf ? "cap" === this.U.Nf : this.v.Nn) && !this.O && !a;
  this.Yb.qt(this.U)
    ? this.Yb.elements.push(new g.i.Zj(this.v))
    : this.Yb.elements.push(new g.i.Ao(this.v));
  c
    ? ((a = new g.i.Tq(this.v)), this.Yb.elements.push(a), (this.Yb.Eg = a.ek))
    : a &&
      ((this.Yb.rF = !0),
      (this.Yb.connection = new g.i.rr(this.v, this.U.Z)),
      this.Yb.elements.push(this.Yb.connection));
  this.U.T.length && this.U.T[0].type == g.Ua && !this.U.isCollapsed()
    ? (this.Yb.minHeight = this.v.uD)
    : (this.Yb.minHeight = this.v.tD);
  this.Yb.elements.push(new g.i.Zj(this.v, "right"));
  this.rows.push(this.Yb);
  a = new g.i.Kj(this.v);
  this.kz.push(a);
  var d = Pa(this.U);
  if (d.length) {
    c = 0;
    for (var e; (e = d[c]); c++) {
      var f = new g.i.pf(this.v, e);
      this.isCollapsed && e.$D ? this.fz.push(f) : a.elements.push(f);
    }
  }
  e = null;
  for (c = 0; (d = this.U.T[c]); c++)
    if (d.isVisible()) {
      !e ||
        (d.type != g.Ua &&
          e.type != g.Ua &&
          ((d.type != g.rb && d.type != g.Ee) || this.Nk)) ||
        (this.rows.push(a), (a = new g.i.Kj(this.v)), this.kz.push(a));
      for (e = 0; (f = d.gb[e]); e++) a.elements.push(new g.i.Sd(this.v, f, d));
      this.zx(d, a);
      e = d;
    }
  this.isCollapsed && ((a.az = !0), a.elements.push(new g.i.Xq(this.v)));
  (a.elements.length || a.Fk) && this.rows.push(a);
  this.tu();
  this.rows.push(this.Bb);
  this.yx();
  a = this.rows;
  this.rows = [];
  for (c = 0; c < a.length; c++)
    if ((this.rows.push(a[c]), c != a.length - 1)) {
      d = this.rows;
      e = d.push;
      f = a[c];
      var h = a[c + 1],
        k = new g.i.Do(this.v, this.Ty(f, h), this.width - this.ze);
      f.bc && (k.By = !0);
      h.bc && (k.yL = !0);
      e.call(d, k);
    }
  for (e = d = c = a = 0; (f = this.rows[e]); e++)
    f.measure(),
      (c = Math.max(c, f.width)),
      f.bc && (a = Math.max(a, f.width - W(f).width)),
      (d = Math.max(d, f.gf));
  this.ei = a;
  this.width = c;
  for (e = 0; (f = this.rows[e]); e++) f.bc && (f.ei = this.ei);
  this.jl = Math.max(c, d);
  this.O &&
    ((this.ze = this.O.width),
    (this.width += this.O.width),
    (this.jl += this.O.width));
  this.Nr();
  this.wy();
};
b.tu = function () {
  this.Bb.bz = !!this.U.Y;
  this.Bb.minHeight =
    this.U.T.length && this.U.T[this.U.T.length - 1].type == g.Ua
      ? this.v.iB
      : this.v.jB;
  this.Bb.qt(this.U)
    ? this.Bb.elements.push(new g.i.Zj(this.v))
    : this.Bb.elements.push(new g.i.Ao(this.v));
  this.Bb.bz &&
    ((this.Bb.connection = new g.i.hr(this.v, this.U.Y)),
    this.Bb.elements.push(this.Bb.connection));
  this.Bb.elements.push(new g.i.Zj(this.v, "right"));
};
b.zx = function (a, c) {
  this.Nk && a.type == g.rb
    ? (c.elements.push(new g.i.qh(this.v, a)), (c.ot = !0))
    : a.type == g.Ua
    ? (c.elements.push(new g.i.xh(this.v, a)), (c.bc = !0))
    : a.type == g.rb
    ? (c.elements.push(new g.i.co(this.v, a)), (c.Jh = !0))
    : a.type == g.Ee &&
      ((c.minHeight = Math.max(
        c.minHeight,
        a.W() && a.W().Ga ? this.v.HB : this.v.Ov
      )),
      (c.Fk = !0));
  null == c.align && (c.align = a.align);
};
b.yx = function () {
  for (var a = 0, c; (c = this.rows[a]); a++) {
    var d = c.elements;
    c.elements = [];
    c.mq() && c.elements.push(new g.i.ng(this.v, this.Li(null, d[0])));
    if (d.length) {
      for (var e = 0; e < d.length - 1; e++)
        c.elements.push(d[e]),
          c.elements.push(new g.i.ng(this.v, this.Li(d[e], d[e + 1])));
      c.elements.push(d[d.length - 1]);
      c.lm() &&
        c.elements.push(new g.i.ng(this.v, this.Li(d[d.length - 1], null)));
    }
  }
};
b.Li = function (a, c) {
  if (!a && c && g.i.u.Zi(c)) return this.v.Uw;
  if (a && g.i.u.Mh(a) && !c) {
    if (g.i.u.Dm(a)) return this.v.qf;
    if (g.i.u.Lh(a)) return this.v.Rc;
    if (g.i.u.Zi(a)) return this.v.qf;
  }
  return a && g.i.u.Em(a) && c && (g.i.u.Rk(c) || g.i.u.Oh(c))
    ? c.te
    : a && g.i.u.Nh(a) && c && (g.i.u.Rk(c) || g.i.u.Oh(c))
    ? c.te - this.v.wb
    : this.v.Vd;
};
b.Nr = function () {
  for (var a = 0, c; (c = this.rows[a]); a++)
    if (c.bc) de(this, c);
    else {
      var d = this.tm(c) - c.width;
      0 < d && ee(c, d);
      g.i.u.IF(c) && (c.gf = c.width);
    }
};
b.tm = function () {
  return this.width - this.ze;
};
function ee(a, c) {
  a: {
    var d = 0;
    for (var e; (e = a.elements[d]); d++)
      if (g.i.u.qe(e)) {
        d = e;
        break a;
      }
    d = null;
  }
  a: {
    e = a.elements.length - 1;
    for (var f; (f = a.elements[e]); e--)
      if (g.i.u.qe(f)) {
        e = f;
        break a;
      }
    e = null;
  }
  if (a.Jh || a.bc) a.gf += c;
  a.align == g.yq
    ? (e.width += c)
    : a.align == g.xq
    ? ((d.width += c / 2), (e.width += c / 2))
    : a.align == g.nv
    ? (d.width += c)
    : (e.width += c);
  a.width += c;
}
function de(a, c) {
  var d = W(c),
    e = c.width - d.width,
    f = a.ei;
  e = f - e;
  0 < e && ee(c, e);
  e = c.width;
  f = a.tm(c);
  d.width += f - e;
  d.height = Math.max(d.height, c.height);
  c.width += f - e;
  c.gf = Math.max(c.width, a.ei + c.Px);
}
b.Ty = function () {
  return this.v.Vd;
};
b.Jy = function (a, c) {
  return g.i.u.qe(c)
    ? a.jc + c.height / 2
    : g.i.u.tp(a)
    ? ((a = a.jc + a.height - a.im),
      g.i.u.Oh(c) ? a + c.height / 2 : a - c.height / 2)
    : g.i.u.zp(a)
    ? g.i.u.Yi(c)
      ? a.Eg - c.height / 2
      : a.Eg + c.height / 2
    : a.jc + a.height / 2;
};
function fe(a, c) {
  for (var d = c.Ma, e = 0, f; (f = c.elements[e]); e++)
    g.i.u.qe(f) && (f.height = c.height),
      (f.Ma = d),
      (f.ik = a.Jy(c, f)),
      (d += f.width);
}
b.wy = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++)
    (e.jc = c),
      (e.Ma = this.ze),
      (c += e.height),
      (a = Math.max(a, e.gf)),
      fe(this, e);
  this.O &&
    this.U.Y &&
    this.U.Y.isConnected() &&
    (a = Math.max(a, H(this.U.Y.ra()).width));
  this.jl = a + this.ze;
  this.height = c;
  this.lq = this.Yb.Eg;
  this.Bb.Qe = c - this.Bb.im;
};
g.i.Qc = function (a, c) {
  this.U = a;
  this.wa = c;
  a.Ta();
  this.sp = this.Pa = "";
  this.v = c.ub.$();
};
b = g.i.Qc.prototype;
b.draw = function () {
  ge(this);
  he(this);
  ie(this);
  this.U.Db.Ou(this.Pa + "\n" + this.sp);
  this.wa.M && this.U.Db.Ts();
  g.i.Hn && this.U.Hu.DE(this.U, this.wa);
  je(this);
};
function je(a) {
  a.U.height = a.wa.height;
  a.U.width = a.wa.jl;
}
function ge(a) {
  for (var c = 0, d; (d = a.wa.fz[c]); c++)
    d.icon.ad.setAttribute("display", "none");
}
function he(a) {
  a.Ks();
  for (var c = 1; c < a.wa.rows.length - 1; c++) {
    var d = a.wa.rows[c];
    d.az ? a.km(d) : d.bc ? a.Js(d) : d.Jh ? a.Ls(d) : a.ty(d);
  }
  a.Gs();
  a.Is();
}
b.Ks = function () {
  var a = this.wa.Yb,
    c = a.elements,
    d = this.wa.Yb;
  if (d.connection) {
    var e = d.Ma + d.te;
    Q(d.connection.Uc, this.wa.M ? -e : e, 0);
  }
  this.Pa += g.g.C.moveBy(a.Ma, this.wa.lq);
  for (d = 0; (e = c[d]); d++)
    g.i.u.Nh(e)
      ? (this.Pa += this.v.Hl.bv)
      : g.i.u.pz(e)
      ? (this.Pa += this.v.Hl.NH)
      : g.i.u.Rk(e)
      ? (this.Pa += e.shape.Xh)
      : g.i.u.Yi(e)
      ? (this.Pa += this.v.Vj.path)
      : g.i.u.qe(e) && (this.Pa += g.g.C.ca("h", e.width));
  this.Pa += g.g.C.ca("v", a.height);
};
b.km = function (a) {
  this.Pa += this.v.Lj.path + g.g.C.ca("v", a.height - this.v.Lj.height);
};
b.Ls = function (a) {
  var c = W(a);
  this.aA(a);
  var d = "function" == typeof c.shape.ve ? c.shape.ve(c.height) : c.shape.ve;
  this.Pa += g.g.C.ca("H", c.Ma + c.width) + d + g.g.C.ca("v", a.height - c.kk);
};
b.Js = function (a) {
  var c = W(a);
  this.Pa +=
    g.g.C.ca("H", c.Ma + c.te + c.shape.width) +
    (c.shape.Yz + g.g.C.ca("h", -(c.te - this.v.qo.width)) + this.v.qo.pu) +
    g.g.C.ca("v", a.height - 2 * this.v.qo.height) +
    this.v.qo.Yp +
    g.g.C.ca("H", a.Ma + a.width);
  this.dA(a);
};
b.ty = function (a) {
  this.Pa += g.g.C.ca("V", a.jc + a.height);
};
b.Gs = function () {
  var a = this.wa.Bb,
    c = a.elements;
  this.cA();
  for (var d = 0, e = "", f = c.length - 1, h; (h = c[f]); f--)
    g.i.u.Oh(h)
      ? (e += h.shape.Yz)
      : g.i.u.Em(h)
      ? (e += g.g.C.ca("H", a.Ma))
      : g.i.u.Nh(h)
      ? (e += this.v.Hl.Wr)
      : g.i.u.pz(h)
      ? ((e += this.v.Hl.ND), (d = this.v.Hl.nH))
      : g.i.u.qe(h) && (e += g.g.C.ca("h", -1 * h.width));
  this.Pa += g.g.C.ca("V", a.Qe - d);
  this.Pa += e;
};
b.Is = function () {
  var a = this.wa.O;
  if (this.wa.O) {
    var c = this.wa.ze + this.wa.O.$l;
    Q(this.U.O, this.wa.M ? -c : c, this.wa.O.Fd);
  }
  a &&
    ((c = a.Fd + a.height),
    (a = "function" == typeof a.shape.Vm ? a.shape.Vm(a.height) : a.shape.Vm),
    (this.Pa += g.g.C.ca("V", c) + a));
  this.Pa += "z";
};
function ie(a) {
  for (var c = 0, d; (d = a.wa.rows[c]); c++)
    for (var e = 0, f; (f = d.elements[e]); e++)
      if (g.i.u.Lh(f)) a.Hs(f);
      else if (g.i.u.Mk(f) || g.i.u.Tg(f)) {
        var h = a;
        if (g.i.u.Tg(f)) var k = f.vy.pa();
        else g.i.u.Mk(f) && (k = f.icon.ad);
        var l = f.ik - f.height / 2,
          m = f.Ma,
          n = "";
        h.wa.M &&
          ((m = -(m + f.width)), f.LE && ((m += f.width), (n = "scale(-1 1)")));
        g.i.u.Mk(f)
          ? (k.setAttribute("display", "block"),
            k.setAttribute("transform", "translate(" + m + "," + l + ")"),
            mc(f.icon))
          : k.setAttribute("transform", "translate(" + m + "," + l + ")" + n);
        h.wa.pe && k.setAttribute("display", "none");
      }
}
b.Hs = function (a) {
  var c = a.width,
    d = a.height,
    e = a.Fd,
    f = a.kk + e;
  this.sp +=
    g.g.C.moveTo(a.Ma + a.Af, a.ik - d / 2) +
    g.g.C.ca("v", e) +
    a.shape.ve +
    g.g.C.ca("v", d - f) +
    g.g.C.ca("h", c - a.Af) +
    g.g.C.ca("v", -d) +
    "z";
  this.bA(a);
};
b.bA = function (a) {
  var c = a.ik - a.height / 2;
  if (a.Uc) {
    var d = a.Ma + a.Af + a.$l;
    this.wa.M && (d *= -1);
    Q(a.Uc, d, c + a.Fd);
  }
};
b.dA = function (a) {
  var c = W(a);
  if (c.Uc) {
    var d = a.Ma + a.ei + c.te;
    this.wa.M && (d *= -1);
    Q(c.Uc, d, a.jc);
  }
};
b.aA = function (a) {
  var c = W(a);
  if (c.Uc) {
    var d = a.Ma + a.width;
    this.wa.M && (d *= -1);
    Q(c.Uc, d, a.jc);
  }
};
b.cA = function () {
  var a = this.wa.Bb;
  if (a.connection) {
    var c = a.connection,
      d = c.Ma;
    Q(c.Uc, this.wa.M ? -d : d, a.Qe);
  }
};
g.i.rg = function (a, c, d) {
  this.mk = d;
  this.eg = a;
  this.Mb = g.g.j.N(g.g.H.Xd, { class: "blocklyPath" }, this.eg);
  this.style = c;
  this.Pt = this.fm = null;
};
b = g.i.rg.prototype;
b.Ou = function (a) {
  this.Mb.setAttribute("d", a);
};
b.Ts = function () {
  this.Mb.setAttribute("transform", "scale(-1 1)");
};
b.Zg = function (a) {
  a ? (this.eg.appendChild(a), (this.fm = a)) : (this.fm = null);
};
b.ah = function (a) {
  a
    ? (this.fm ? this.eg.insertBefore(a, this.fm) : this.eg.appendChild(a),
      (this.Pt = a))
    : (this.Pt = null);
};
b.$b = function (a) {
  this.Mb.setAttribute("stroke", this.style.xf);
  this.Mb.setAttribute("fill", this.style.Gg);
  this.MA(a.Ga);
  this.ev(!a.isEnabled() || Pb(a));
};
b.bh = function (a) {
  this.style = a;
};
function I(a, c, d) {
  d ? g.g.j.Hb(a.eg, c) : g.g.j.Ac(a.eg, c);
}
b.KA = function (a) {
  a
    ? this.Mb.setAttribute("filter", "url(#" + this.mk.hp + ")")
    : this.Mb.setAttribute("filter", "none");
};
b.MA = function (a) {
  a &&
    (this.Mb.setAttribute("stroke", "none"),
    this.Mb.setAttribute("fill", this.style.Xo));
};
b.ev = function (a) {
  I(this, "blocklyDisabled", a);
  a && this.Mb.setAttribute("fill", "url(#" + this.mk.ny + ")");
};
g.i.tg = function (a) {
  this.name = a;
  this.mu = this.v = null;
};
b = g.i.tg.prototype;
b.Ze = function () {
  return this.name + "-renderer";
};
b.Da = function (a, c) {
  this.v = this.Jt();
  c && ((this.mu = c), g.g.object.bf(this.v, c));
  this.v.pn(a);
  this.v.Da();
};
b.Va = function (a, c) {
  this.v.Va(a, this.name + "-" + c.name, "." + this.Ze() + "." + c.Ze());
};
b.yu = function (a, c) {
  var d = this.$();
  d.L();
  this.v = this.Jt();
  this.mu && g.g.object.bf(this.v, this.mu);
  this.v.an = d.an;
  this.v.pn(c);
  this.v.Da();
  this.Va(a, c);
};
b.L = function () {
  this.v && this.v.L();
};
b.Jt = function () {
  return new g.i.mg();
};
b.Bz = function (a) {
  return new g.i.Ke(this, a);
};
b.zz = function (a, c) {
  return new g.i.Qc(a, c);
};
b.Az = function (a, c) {
  return new g.i.rg(a, c, this.v);
};
b.$ = function () {
  return this.v;
};
b.Ha = function (a) {
  if (g.i.Hn && !a.Hu) {
    if (!g.i.Pv)
      throw Error("Missing require for Blockly.blockRendering.Debug");
    var c = new g.i.Pv(this.$());
    a.Hu = c;
  }
  c = this.Bz(a);
  c.measure();
  this.zz(a, c).draw();
};
g.ga = {};
g.ga.mg = function () {
  g.ga.mg.A.constructor.call(this);
  this.Sq = !1;
  this.tc = 1;
  this.MC = 30;
  this.Sw = -this.gr / 2;
};
g.g.object.V(g.ga.mg, g.i.mg);
g.ga.mg.prototype.Ys = function (a) {
  return g.ga.mg.A.Ys.call(this, a).concat([
    a + " .blocklyInsertionMarker>.blocklyPathLight,",
    a + " .blocklyInsertionMarker>.blocklyPathDark {",
    "fill-opacity: " + this.po + ";",
    "stroke: none;",
    "}",
  ]);
};
g.ga.aw = function (a) {
  this.wa = a;
  this.Am = this.oa = "";
  this.uc = this.wa.M;
  a = a.ub;
  this.v = a.$();
  this.Jd = a.Jd;
  this.qd = this.Jd.OFFSET;
  this.lu = this.Jd.ZC;
  this.Jk = this.Jd.sC;
  this.$m = this.Jd.qr;
  this.fG = this.Jd.Oj;
  this.DH = this.Jd.Vj;
  this.sz = this.Jd.Lj;
};
g.ga.aw.prototype.km = function (a) {
  this.wa.M &&
    (this.oa +=
      this.sz.Xh + g.g.C.ca("v", a.height - this.sz.height - this.qd));
};
function ke(a, c) {
  var d = c.Ma + c.width - a.qd;
  c.By && (a.oa += g.g.C.ca("H", d));
  a.uc &&
    ((a.oa += g.g.C.ca("H", d)),
    c.height > a.qd && (a.oa += g.g.C.ca("V", c.jc + c.height - a.qd)));
}
g.ga.qh = function (a, c) {
  g.ga.qh.A.constructor.call(this, a, c);
  this.Ch && ((this.width += this.v.tc), (this.height += this.v.tc));
};
g.g.object.V(g.ga.qh, g.i.qh);
g.ga.xh = function (a, c) {
  g.ga.xh.A.constructor.call(this, a, c);
  this.Ch && (this.height += this.v.tc);
};
g.g.object.V(g.ga.xh, g.i.xh);
g.ga.Ke = function (a, c) {
  g.ga.Ke.A.constructor.call(this, a, c);
};
g.g.object.V(g.ga.Ke, g.i.Ke);
b = g.ga.Ke.prototype;
b.tu = function () {
  g.ga.Ke.A.tu.call(this);
  (this.U.T.length && this.U.T[this.U.T.length - 1].type == g.Ua) ||
    (this.Bb.minHeight = this.v.Vd - this.v.tc);
};
b.zx = function (a, c) {
  this.Nk && a.type == g.rb
    ? (c.elements.push(new g.ga.qh(this.v, a)), (c.ot = !0))
    : a.type == g.Ua
    ? (c.elements.push(new g.ga.xh(this.v, a)), (c.bc = !0))
    : a.type == g.rb
    ? (c.elements.push(new g.i.co(this.v, a)), (c.Jh = !0))
    : a.type == g.Ee &&
      ((c.minHeight = Math.max(c.minHeight, this.v.Ov)), (c.Fk = !0));
  this.Nk || null != c.align || (c.align = a.align);
};
b.yx = function () {
  for (var a = !1, c = 0, d; (d = this.rows[c]); c++) d.Jh && (a = !0);
  for (c = 0; (d = this.rows[c]); c++) {
    var e = d.elements;
    d.elements = [];
    d.mq() && d.elements.push(new g.i.ng(this.v, this.Li(null, e[0])));
    if (e.length) {
      for (var f = 0; f < e.length - 1; f++) {
        d.elements.push(e[f]);
        var h = this.Li(e[f], e[f + 1]);
        d.elements.push(new g.i.ng(this.v, h));
      }
      d.elements.push(e[e.length - 1]);
      d.lm() &&
        ((h = this.Li(e[e.length - 1], null)),
        a && d.Fk && (h += this.v.Eo),
        d.elements.push(new g.i.ng(this.v, h)));
    }
  }
};
b.Li = function (a, c) {
  if (!a)
    return c && g.i.u.Tg(c) && c.td
      ? this.v.Vd
      : c && g.i.u.Lh(c)
      ? this.v.rw
      : c && g.i.u.Zi(c)
      ? this.v.Uw
      : this.v.Rc;
  if (!g.i.u.Mh(a) && (!c || g.i.u.Zi(c)))
    return g.i.u.Tg(a) && a.td
      ? this.v.Vd
      : g.i.u.Mk(a)
      ? 2 * this.v.Rc + 1
      : g.i.u.Yi(a)
      ? this.v.qf
      : g.i.u.HF(a)
      ? this.v.Rc
      : g.i.u.Nh(a)
      ? this.v.PC
      : g.i.u.nz(a)
      ? this.v.qf
      : this.v.Rc;
  if (g.i.u.Mh(a) && !c) {
    if (g.i.u.Dm(a)) return this.v.qf;
    if (g.i.u.Lh(a)) return this.v.Rc;
    if (g.i.u.Zi(a)) return this.v.qf;
  }
  if (!g.i.u.Mh(a) && c && g.i.u.Mh(c)) {
    if (g.i.u.Tg(a) && a.td) {
      if (g.i.u.Lh(c) || g.i.u.Dm(c)) return this.v.iD;
    } else {
      if (g.i.u.Lh(c) || g.i.u.Dm(c)) return this.v.rw;
      if (g.i.u.Zi(c)) return this.v.Rc;
    }
    return this.v.Rc - 1;
  }
  if (g.i.u.Mk(a) && c && !g.i.u.Mh(c)) return this.v.Rc;
  if (g.i.u.Lh(a) && c && g.i.u.Tg(c)) return c.td ? this.v.Vd : this.v.Rc;
  if (g.i.u.Em(a) && c) {
    if (g.i.u.Yi(c)) return this.v.qf;
    if (g.i.u.Rk(c)) return c.te;
    if (g.i.u.Oh(c)) return (a = ((this.M ? 1 : -1) * this.v.tc) / 2), c.te + a;
  }
  if (g.i.u.Nh(a) && c) {
    if (g.i.u.Rk(c)) return c.te - this.v.wb;
    if (g.i.u.Oh(c))
      return (a = ((this.M ? 1 : -1) * this.v.tc) / 2), c.te - this.v.wb + a;
  }
  return (g.i.u.Tg(a) && c && g.i.u.Tg(c) && a.td == c.td) || (c && g.i.u.nz(c))
    ? this.v.Rc
    : this.v.Vd;
};
b.Ty = function (a, c) {
  return g.i.u.zp(a) && g.i.u.tp(c)
    ? this.v.IB
    : g.i.u.zp(a) || g.i.u.tp(c)
    ? this.v.qf
    : a.Jh && c.Jh
    ? this.v.Rc
    : !a.bc && c.bc
    ? this.v.fB
    : (a.bc && c.bc) || (!a.bc && c.Fk) || a.Fk
    ? this.v.Rc
    : this.v.Vd;
};
b.Jy = function (a, c) {
  if (g.i.u.qe(c)) return a.jc + c.height / 2;
  if (g.i.u.tp(a))
    return (
      (a = a.jc + a.height - a.im),
      g.i.u.Oh(c) ? a + c.height / 2 : a - c.height / 2
    );
  if (g.i.u.zp(a))
    return g.i.u.Yi(c) ? a.Eg - c.height / 2 : a.Eg + c.height / 2;
  var d = a.jc;
  g.i.u.Tg(c) || g.i.u.Mk(c)
    ? ((d += c.height / 2),
      (a.ot || a.bc) && c.height + this.v.Vw <= a.height && (d += this.v.Vw))
    : (d = g.i.u.Lh(c) ? d + c.height / 2 : d + a.height / 2);
  return d;
};
b.Nr = function () {
  if (this.Nk) {
    for (
      var a = 0, c = null, d = this.rows.length - 1, e;
      (e = this.rows[d]);
      d--
    )
      (e.Yt = a),
        g.i.u.CF(e) &&
          (e.bc && de(this, e),
          c && c.bc && e.width < c.width ? (e.Yt = c.width) : (a = e.width),
          (c = e));
    for (d = a = 0; (e = this.rows[d]); d++)
      e.bc
        ? (a = this.tm(e))
        : g.i.u.qe(e)
        ? (e.width = Math.max(a, e.Yt))
        : ((a = Math.max(a, e.Yt) - e.width), 0 < a && ee(e, a), (a = e.width));
  } else g.ga.Ke.A.Nr.call(this);
};
b.tm = function (a) {
  return this.Nk && a.bc
    ? this.ei + this.v.MC + this.ze
    : g.ga.Ke.A.tm.call(this, a);
};
b.wy = function () {
  for (var a = 0, c = 0, d = 0, e; (e = this.rows[d]); d++) {
    e.jc = c;
    e.Ma = this.ze;
    c += e.height;
    a = Math.max(a, e.gf);
    var f = c - this.Yb.ek;
    e == this.Bb &&
      f < this.v.Al &&
      ((f = this.v.Al - f), (this.Bb.height += f), (c += f));
    fe(this, e);
  }
  this.O &&
    this.U.Y &&
    this.U.Y.isConnected() &&
    (a = Math.max(a, H(this.U.Y.ra()).width - this.v.tc));
  this.Bb.Qe = c - this.Bb.im;
  this.jl = a + this.ze + this.v.tc;
  this.width += this.v.tc;
  this.height = c + this.v.tc;
  this.lq = this.Yb.Eg;
};
g.ga.Qc = function (a, c) {
  g.ga.Qc.A.constructor.call(this, a, c);
  this.Pf = new g.ga.aw(c);
};
g.g.object.V(g.ga.Qc, g.i.Qc);
b = g.ga.Qc.prototype;
b.draw = function () {
  ge(this);
  he(this);
  ie(this);
  var a = this.U.Db;
  a.Ou(this.Pa + "\n" + this.sp);
  var c = this.Pf;
  a.sj.setAttribute("d", c.oa + "\n" + c.Am);
  this.wa.M && a.Ts();
  g.i.Hn && this.U.Hu.DE(this.U, this.wa);
  je(this);
};
b.Ks = function () {
  var a = this.Pf,
    c = this.wa.Yb;
  a.oa += g.g.C.moveBy(c.Ma, a.wa.lq);
  for (var d = 0, e; (e = c.elements[d]); d++)
    g.i.u.Em(e)
      ? (a.oa += a.Jd.Rw)
      : g.i.u.Nh(e)
      ? (a.oa += a.lu.bv(a.uc))
      : g.i.u.Rk(e)
      ? (a.oa += a.fG.Xh)
      : g.i.u.Yi(e)
      ? (a.oa += a.DH.path(a.uc))
      : g.i.u.qe(e) &&
        0 != e.width &&
        (a.oa += g.g.C.ca("H", e.Ma + e.width - a.qd));
  a.oa += g.g.C.ca("H", c.Ma + c.width - a.qd);
  ke(this.Pf, this.wa.Yb);
  g.ga.Qc.A.Ks.call(this);
};
b.km = function (a) {
  this.Pf.km(a);
  g.ga.Qc.A.km.call(this, a);
};
b.Ls = function (a) {
  var c = this.Pf,
    d = W(a);
  if (c.uc) {
    var e = a.height - d.kk;
    c.oa +=
      g.g.C.moveTo(d.Ma + d.width - c.qd, a.jc) +
      c.$m.ve(c.uc) +
      g.g.C.ca("v", e);
  } else c.oa += g.g.C.moveTo(d.Ma + d.width, a.jc) + c.$m.ve(c.uc);
  g.ga.Qc.A.Ls.call(this, a);
};
b.Js = function (a) {
  var c = this.Pf,
    d = W(a);
  if (c.uc) {
    var e = a.height - 2 * c.Jk.height;
    c.oa +=
      g.g.C.moveTo(d.Ma, a.jc) +
      c.Jk.pu(c.uc) +
      g.g.C.ca("v", e) +
      c.Jk.Yp(c.uc) +
      g.g.C.lineTo(a.width - d.Ma - c.Jk.width, 0);
  } else
    c.oa +=
      g.g.C.moveTo(d.Ma, a.jc + a.height) +
      c.Jk.Yp(c.uc) +
      g.g.C.lineTo(a.width - d.Ma - c.Jk.width, 0);
  g.ga.Qc.A.Js.call(this, a);
};
b.ty = function (a) {
  ke(this.Pf, a);
  this.Pa += g.g.C.ca("H", a.Ma + a.width) + g.g.C.ca("V", a.jc + a.height);
};
b.Gs = function () {
  var a = this.Pf,
    c = this.wa.Bb;
  if (a.uc) a.oa += g.g.C.ca("V", c.Qe - a.qd);
  else {
    var d = a.wa.Bb.elements[0];
    g.i.u.Em(d)
      ? (a.oa += g.g.C.moveTo(c.Ma + a.qd, c.Qe - a.qd))
      : g.i.u.Nh(d) &&
        ((a.oa += g.g.C.moveTo(c.Ma, c.Qe)), (a.oa += a.lu.Wr()));
  }
  g.ga.Qc.A.Gs.call(this);
};
b.Is = function () {
  var a = this.Pf,
    c = a.wa.O;
  c &&
    ((c = c.Fd + c.height),
    a.uc
      ? (a.oa += g.g.C.moveTo(a.wa.ze, c))
      : ((a.oa += g.g.C.moveTo(a.wa.ze + a.qd, a.wa.Bb.Qe - a.qd)),
        (a.oa += g.g.C.ca("V", c))),
    (a.oa += a.$m.Vm(a.uc)));
  a.uc ||
    ((c = a.wa.Yb),
    (a.oa = g.i.u.Nh(c.elements[0])
      ? a.oa + g.g.C.ca("V", a.lu.height)
      : a.oa + g.g.C.ca("V", c.Eg + a.qd)));
  g.ga.Qc.A.Is.call(this);
};
b.Hs = function (a) {
  var c = this.Pf,
    d = c.qd,
    e = a.Ma + a.Af,
    f = a.ik - a.height / 2,
    h = a.width - a.Af,
    k = f + d;
  if (c.uc) {
    f = a.Fd - d;
    var l = a.height - (a.Fd + a.kk) + d;
    c.Am +=
      g.g.C.moveTo(e - d, k) +
      g.g.C.ca("v", f) +
      c.$m.ve(c.uc) +
      g.g.C.ca("v", l) +
      g.g.C.ca("h", h);
  } else
    c.Am +=
      g.g.C.moveTo(a.Ma + a.width + d, k) +
      g.g.C.ca("v", a.height) +
      g.g.C.ca("h", -h) +
      g.g.C.moveTo(e, f + a.Fd) +
      c.$m.ve(c.uc);
  g.ga.Qc.A.Hs.call(this, a);
};
b.bA = function (a) {
  var c = a.ik - a.height / 2;
  if (a.Uc) {
    var d = a.Ma + a.Af + this.v.tc;
    this.wa.M && (d *= -1);
    Q(a.Uc, d, c + a.Fd + this.v.tc);
  }
};
b.dA = function (a) {
  var c = W(a);
  if (c.Uc) {
    var d = a.Ma + a.ei + c.te;
    d = this.wa.M ? -1 * d : d + this.v.tc;
    Q(c.Uc, d, a.jc + this.v.tc);
  }
};
b.aA = function (a) {
  var c = W(a);
  if (c.Uc) {
    var d = a.Ma + a.width + this.v.tc;
    this.wa.M && (d *= -1);
    Q(c.Uc, d, a.jc);
  }
};
b.cA = function () {
  var a = this.wa.Bb;
  if (a.connection) {
    var c = a.connection,
      d = c.Ma;
    Q(c.Uc, (this.wa.M ? -d : d) + this.v.tc / 2, a.Qe + this.v.tc);
  }
};
g.ga.$v = function (a) {
  this.lk = a;
  this.OFFSET = 0.5;
  this.Rw = g.g.C.moveBy(this.OFFSET, this.OFFSET);
};
b = g.ga.$v.prototype;
b.Da = function () {
  this.sC = le(this);
  this.ZC = me(this);
  this.qr = this.Mt();
  this.Oj = this.Lt();
  this.Lj = this.Kt();
  this.Vj = this.Nt();
};
function le(a) {
  var c = a.lk.wb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c + a) - a,
    e =
      g.g.C.moveBy(d, d) + g.g.C.arc("a", "0 0,0", c, g.g.C.La(-d - a, c - d)),
    f = g.g.C.arc("a", "0 0,0", c + a, g.g.C.La(c + a, c + a)),
    h =
      g.g.C.moveBy(d, -d) +
      g.g.C.arc("a", "0 0,0", c + a, g.g.C.La(c - d, d + a));
  return {
    width: c + a,
    height: c,
    pu: function (k) {
      return k ? e : "";
    },
    Yp: function (k) {
      return k ? f : h;
    },
  };
}
function me(a) {
  var c = a.lk.wb;
  a = a.OFFSET;
  var d = (1 - Math.SQRT1_2) * (c - a) + a,
    e =
      g.g.C.moveBy(d, d) +
      g.g.C.arc("a", "0 0,1", c - a, g.g.C.La(c - d, -d + a)),
    f =
      g.g.C.moveBy(a, c) + g.g.C.arc("a", "0 0,1", c - a, g.g.C.La(c, -c + a)),
    h = -d,
    k =
      g.g.C.moveBy(d, h) +
      g.g.C.arc("a", "0 0,1", c - a, g.g.C.La(-d + a, -h - c));
  return {
    height: c,
    bv: function (l) {
      return l ? e : f;
    },
    Wr: function () {
      return k;
    },
  };
}
b.Mt = function () {
  var a = this.lk.Eo,
    c = this.lk.Ll,
    d = g.g.C.moveBy(-2, -c + 3.4) + g.g.C.lineTo(-0.45 * a, -2.1),
    e =
      g.g.C.ca("v", 2.5) +
      g.g.C.moveBy(0.97 * -a, 2.5) +
      g.g.C.curve("q", [g.g.C.La(0.05 * -a, 10), g.g.C.La(0.3 * a, 9.5)]) +
      g.g.C.moveBy(0.67 * a, -1.9) +
      g.g.C.ca("v", 2.5),
    f =
      g.g.C.ca("v", -1.5) +
      g.g.C.moveBy(-0.92 * a, -0.5) +
      g.g.C.curve("q", [g.g.C.La(-0.19 * a, -5.5), g.g.C.La(0, -11)]) +
      g.g.C.moveBy(0.92 * a, 1),
    h = g.g.C.moveBy(-5, c - 0.7) + g.g.C.lineTo(0.46 * a, -2.1);
  return {
    width: a,
    height: c,
    Vm: function (k) {
      return k ? d : f;
    },
    ve: function (k) {
      return k ? e : h;
    },
  };
};
b.Lt = function () {
  return { Xh: g.g.C.ca("h", this.OFFSET) + this.lk.Oj.Xh };
};
b.Kt = function () {
  return {
    Xh:
      g.g.C.lineTo(5.1, 2.6) +
      g.g.C.moveBy(-10.2, 6.8) +
      g.g.C.lineTo(5.1, 2.6),
    height: 12,
    width: 10.2,
  };
};
b.Nt = function () {
  var a = this.lk.Vj.height,
    c =
      g.g.C.moveBy(25, -8.7) +
      g.g.C.curve("c", [
        g.g.C.La(29.7, -6.2),
        g.g.C.La(57.2, -0.5),
        g.g.C.La(75, 8.7),
      ]),
    d =
      g.g.C.curve("c", [
        g.g.C.La(17.8, -9.2),
        g.g.C.La(45.3, -14.9),
        g.g.C.La(75, -8.7),
      ]) + g.g.C.moveTo(100.5, a + 0.5);
  return {
    path: function (e) {
      return e ? c : d;
    },
  };
};
g.ga.rg = function (a, c, d) {
  this.mk = d;
  this.eg = a;
  this.yn = g.g.j.N(
    g.g.H.Xd,
    { class: "blocklyPathDark", transform: "translate(1,1)" },
    this.eg
  );
  this.Mb = g.g.j.N(g.g.H.Xd, { class: "blocklyPath" }, this.eg);
  this.sj = g.g.j.N(g.g.H.Xd, { class: "blocklyPathLight" }, this.eg);
  this.ks = "#000000";
  this.style = c;
};
g.g.object.V(g.ga.rg, g.i.rg);
b = g.ga.rg.prototype;
b.Ou = function (a) {
  this.Mb.setAttribute("d", a);
  this.yn.setAttribute("d", a);
};
b.Ts = function () {
  this.Mb.setAttribute("transform", "scale(-1 1)");
  this.sj.setAttribute("transform", "scale(-1 1)");
  this.yn.setAttribute("transform", "translate(1,1) scale(-1 1)");
};
b.$b = function (a) {
  this.sj.style.display = "";
  this.yn.style.display = "";
  this.sj.setAttribute("stroke", this.style.xf);
  this.yn.setAttribute("fill", this.ks);
  g.ga.rg.A.$b.call(this, a);
  this.Mb.setAttribute("stroke", "none");
};
b.bh = function (a) {
  this.style = a;
  this.ks = g.g.Cb.Tr("#000", this.style.Gg, 0.2) || this.ks;
};
b.KA = function (a) {
  a
    ? (this.Mb.setAttribute("filter", "url(#" + this.mk.hp + ")"),
      (this.sj.style.display = "none"))
    : (this.Mb.setAttribute("filter", "none"),
      (this.sj.style.display = "inline"));
};
b.MA = function (a) {
  a &&
    ((this.sj.style.display = "none"),
    this.yn.setAttribute("fill", this.style.Xo),
    this.Mb.setAttribute("stroke", "none"),
    this.Mb.setAttribute("fill", this.style.Xo));
};
b.ev = function (a) {
  g.ga.rg.A.ev.call(this, a);
  a && this.Mb.setAttribute("stroke", "none");
};
g.ga.tg = function (a) {
  g.ga.tg.A.constructor.call(this, a);
  this.Jd = null;
};
g.g.object.V(g.ga.tg, g.i.tg);
b = g.ga.tg.prototype;
b.Da = function (a, c) {
  g.ga.tg.A.Da.call(this, a, c);
  this.Jd = new g.ga.$v(this.$());
  this.Jd.Da();
};
b.yu = function (a, c) {
  g.ga.tg.A.yu.call(this, a, c);
  this.Jd.Da();
};
b.Jt = function () {
  return new g.ga.mg();
};
b.Bz = function (a) {
  return new g.ga.Ke(this, a);
};
b.zz = function (a, c) {
  return new g.ga.Qc(a, c);
};
b.Az = function (a, c) {
  return new g.ga.rg(a, c, this.$());
};
g.i.register("geras", g.ga.tg);
g.m.ADD_COMMENT = "Add Comment";
g.m.CANNOT_DELETE_VARIABLE_PROCEDURE =
  "Can't delete the variable '%1' because it's part of the definition of the function '%2'";
g.m.CHANGE_VALUE_TITLE = "Change value:";
g.m.CLEAN_UP = "Clean up Blocks";
g.m.COLLAPSE_ALL = "Collapse Blocks";
g.m.COLLAPSE_BLOCK = "Collapse Block";
g.m.CONTROLS_IF_ELSEIF_TOOLTIP = "Add a condition to the if block.";
g.m.CONTROLS_IF_ELSE_TOOLTIP =
  "Add a final, catch-all condition to the if block.";
g.m.CONTROLS_IF_HELPURL = "https://github.com/google/blockly/wiki/IfElse";
g.m.CONTROLS_IF_IF_TOOLTIP =
  "Add, remove, or reorder sections to reconfigure this if block.";
g.m.CONTROLS_IF_MSG_ELSE = "else";
g.m.CONTROLS_IF_MSG_ELSEIF = "else if";
g.m.CONTROLS_IF_MSG_IF = "if";
g.m.CONTROLS_IF_TOOLTIP_1 = "If a value is true, then do some statements.";
g.m.CONTROLS_IF_TOOLTIP_2 =
  "If a value is true, then do the first block of statements. Otherwise, do the second block of statements.";
g.m.CONTROLS_IF_TOOLTIP_3 =
  "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements.";
g.m.CONTROLS_IF_TOOLTIP_4 =
  "If the first value is true, then do the first block of statements. Otherwise, if the second value is true, do the second block of statements. If none of the values are true, do the last block of statements.";
g.m.CONTROLS_REPEAT_INPUT_DO = "do";
g.m.DELETE_ALL_BLOCKS = "Delete all %1 blocks?";
g.m.DELETE_BLOCK = "Delete Block";
g.m.DELETE_VARIABLE = "Delete the '%1' variable";
g.m.DELETE_VARIABLE_CONFIRMATION = "Delete %1 uses of the '%2' variable?";
g.m.DELETE_X_BLOCKS = "Delete %1 Blocks";
g.m.DISABLE_BLOCK = "Disable Block";
g.m.DUPLICATE_BLOCK = "Duplicate";
g.m.DUPLICATE_COMMENT = "Duplicate Comment";
g.m.ENABLE_BLOCK = "Enable Block";
g.m.EXPAND_ALL = "Expand Blocks";
g.m.EXPAND_BLOCK = "Expand Block";
g.m.EXTERNAL_INPUTS = "External Inputs";
g.m.HELP = "Help";
g.m.INLINE_INPUTS = "Inline Inputs";
g.m.LOGIC_BOOLEAN_FALSE = "false";
g.m.LOGIC_BOOLEAN_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#values";
g.m.LOGIC_BOOLEAN_TOOLTIP = "Returns either true or false.";
g.m.LOGIC_BOOLEAN_TRUE = "true";
g.m.LOGIC_COMPARE_HELPURL =
  "https://en.wikipedia.org/wiki/Inequality_(mathematics)";
g.m.LOGIC_COMPARE_TOOLTIP_EQ = "Return true if both inputs equal each other.";
g.m.LOGIC_COMPARE_TOOLTIP_GT =
  "Return true if the first input is greater than the second input.";
g.m.LOGIC_COMPARE_TOOLTIP_GTE =
  "Return true if the first input is greater than or equal to the second input.";
g.m.LOGIC_COMPARE_TOOLTIP_LT =
  "Return true if the first input is smaller than the second input.";
g.m.LOGIC_COMPARE_TOOLTIP_LTE =
  "Return true if the first input is smaller than or equal to the second input.";
g.m.LOGIC_COMPARE_TOOLTIP_NEQ =
  "Return true if both inputs are not equal to each other.";
g.m.LOGIC_NEGATE_HELPURL = "https://github.com/google/blockly/wiki/Logic#not";
g.m.LOGIC_NEGATE_TITLE = "not %1";
g.m.LOGIC_NEGATE_TOOLTIP =
  "Returns true if the input is false. Returns false if the input is true.";
g.m.LOGIC_NULL = "null";
g.m.LOGIC_NULL_HELPURL = "https://en.wikipedia.org/wiki/Nullable_type";
g.m.LOGIC_NULL_TOOLTIP = "Returns null.";
g.m.LOGIC_OPERATION_AND = "and";
g.m.LOGIC_OPERATION_HELPURL =
  "https://github.com/google/blockly/wiki/Logic#logical-operations";
g.m.LOGIC_OPERATION_OR = "or";
g.m.LOGIC_OPERATION_TOOLTIP_AND = "Return true if both inputs are true.";
g.m.LOGIC_OPERATION_TOOLTIP_OR =
  "Return true if at least one of the inputs is true.";
g.m.LOGIC_TERNARY_CONDITION = "test";
g.m.LOGIC_TERNARY_HELPURL = "https://en.wikipedia.org/wiki/%3F:";
g.m.LOGIC_TERNARY_IF_FALSE = "if false";
g.m.LOGIC_TERNARY_IF_TRUE = "if true";
g.m.LOGIC_TERNARY_TOOLTIP =
  "Check the condition in 'test'. If the condition is true, returns the 'if true' value; otherwise returns the 'if false' value.";
g.m.MATH_ADDITION_SYMBOL = "+";
g.m.MATH_ARITHMETIC_HELPURL = "https://en.wikipedia.org/wiki/Arithmetic";
g.m.MATH_ARITHMETIC_TOOLTIP_ADD = "Return the sum of the two numbers.";
g.m.MATH_ARITHMETIC_TOOLTIP_DIVIDE = "Return the quotient of the two numbers.";
g.m.MATH_ARITHMETIC_TOOLTIP_MINUS = "Return the difference of the two numbers.";
g.m.MATH_ARITHMETIC_TOOLTIP_MULTIPLY = "Return the product of the two numbers.";
g.m.MATH_ARITHMETIC_TOOLTIP_POWER =
  "Return the first number raised to the power of the second number.";
g.m.MATH_ATAN2_HELPURL = "https://en.wikipedia.org/wiki/Atan2";
g.m.MATH_ATAN2_TITLE = "atan2 of X:%1 Y:%2";
g.m.MATH_ATAN2_TOOLTIP =
  "Return the arctangent of point (X, Y) in degrees from -180 to 180.";
g.m.MATH_CHANGE_HELPURL =
  "https://en.wikipedia.org/wiki/Programming_idiom#Incrementing_a_counter";
g.m.MATH_CHANGE_TITLE = "change %1 by %2";
g.m.MATH_CHANGE_TOOLTIP = "Add a number to variable '%1'.";
g.m.MATH_CONSTANT_HELPURL =
  "https://en.wikipedia.org/wiki/Mathematical_constant";
g.m.MATH_CONSTANT_TOOLTIP =
  "Return one of the common constants: \u03c0 (3.141\u2026), e (2.718\u2026), \u03c6 (1.618\u2026), sqrt(2) (1.414\u2026), sqrt(\u00bd) (0.707\u2026), or \u221e (infinity).";
g.m.MATH_CONSTRAIN_HELPURL =
  "https://en.wikipedia.org/wiki/Clamping_(graphics)";
g.m.MATH_CONSTRAIN_TITLE = "constrain %1 low %2 high %3";
g.m.MATH_CONSTRAIN_TOOLTIP =
  "Constrain a number to be between the specified limits (inclusive).";
g.m.MATH_DIVISION_SYMBOL = "\u00f7";
g.m.MATH_IS_DIVISIBLE_BY = "is divisible by";
g.m.MATH_IS_EVEN = "is even";
g.m.MATH_IS_NEGATIVE = "is negative";
g.m.MATH_IS_ODD = "is odd";
g.m.MATH_IS_POSITIVE = "is positive";
g.m.MATH_IS_PRIME = "is prime";
g.m.MATH_IS_TOOLTIP =
  "Check if a number is an even, odd, prime, whole, positive, negative, or if it is divisible by certain number. Returns true or false.";
g.m.MATH_IS_WHOLE = "is whole";
g.m.MATH_MODULO_HELPURL = "https://en.wikipedia.org/wiki/Modulo_operation";
g.m.MATH_MODULO_TITLE = "remainder of %1 \u00f7 %2";
g.m.MATH_MODULO_TOOLTIP = "Return the remainder from dividing the two numbers.";
g.m.MATH_MULTIPLICATION_SYMBOL = "\u00d7";
g.m.MATH_NUMBER_HELPURL = "https://en.wikipedia.org/wiki/Number";
g.m.MATH_NUMBER_TOOLTIP = "A number.";
g.m.MATH_ONLIST_HELPURL = "";
g.m.MATH_ONLIST_OPERATOR_AVERAGE = "average of list";
g.m.MATH_ONLIST_OPERATOR_MAX = "max of list";
g.m.MATH_ONLIST_OPERATOR_MEDIAN = "median of list";
g.m.MATH_ONLIST_OPERATOR_MIN = "min of list";
g.m.MATH_ONLIST_OPERATOR_MODE = "modes of list";
g.m.MATH_ONLIST_OPERATOR_RANDOM = "random item of list";
g.m.MATH_ONLIST_OPERATOR_STD_DEV = "standard deviation of list";
g.m.MATH_ONLIST_OPERATOR_SUM = "sum of list";
g.m.MATH_ONLIST_TOOLTIP_AVERAGE =
  "Return the average (arithmetic mean) of the numeric values in the list.";
g.m.MATH_ONLIST_TOOLTIP_MAX = "Return the largest number in the list.";
g.m.MATH_ONLIST_TOOLTIP_MEDIAN = "Return the median number in the list.";
g.m.MATH_ONLIST_TOOLTIP_MIN = "Return the smallest number in the list.";
g.m.MATH_ONLIST_TOOLTIP_MODE =
  "Return a list of the most common item(s) in the list.";
g.m.MATH_ONLIST_TOOLTIP_RANDOM = "Return a random element from the list.";
g.m.MATH_ONLIST_TOOLTIP_STD_DEV = "Return the standard deviation of the list.";
g.m.MATH_ONLIST_TOOLTIP_SUM = "Return the sum of all the numbers in the list.";
g.m.MATH_POWER_SYMBOL = "^";
g.m.MATH_RANDOM_FLOAT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.m.MATH_RANDOM_FLOAT_TITLE_RANDOM = "random fraction";
g.m.MATH_RANDOM_FLOAT_TOOLTIP =
  "Return a random fraction between 0.0 (inclusive) and 1.0 (exclusive).";
g.m.MATH_RANDOM_INT_HELPURL =
  "https://en.wikipedia.org/wiki/Random_number_generation";
g.m.MATH_RANDOM_INT_TITLE = "random integer from %1 to %2";
g.m.MATH_RANDOM_INT_TOOLTIP =
  "Return a random integer between the two specified limits, inclusive.";
g.m.MATH_ROUND_HELPURL = "https://en.wikipedia.org/wiki/Rounding";
g.m.MATH_ROUND_OPERATOR_ROUND = "round";
g.m.MATH_ROUND_OPERATOR_ROUNDDOWN = "round down";
g.m.MATH_ROUND_OPERATOR_ROUNDUP = "round up";
g.m.MATH_ROUND_TOOLTIP = "Round a number up or down.";
g.m.MATH_SINGLE_HELPURL = "https://en.wikipedia.org/wiki/Square_root";
g.m.MATH_SINGLE_OP_ABSOLUTE = "absolute";
g.m.MATH_SINGLE_OP_ROOT = "square root";
g.m.MATH_SINGLE_TOOLTIP_ABS = "Return the absolute value of a number.";
g.m.MATH_SINGLE_TOOLTIP_EXP = "Return e to the power of a number.";
g.m.MATH_SINGLE_TOOLTIP_LN = "Return the natural logarithm of a number.";
g.m.MATH_SINGLE_TOOLTIP_LOG10 = "Return the base 10 logarithm of a number.";
g.m.MATH_SINGLE_TOOLTIP_NEG = "Return the negation of a number.";
g.m.MATH_SINGLE_TOOLTIP_POW10 = "Return 10 to the power of a number.";
g.m.MATH_SINGLE_TOOLTIP_ROOT = "Return the square root of a number.";
g.m.MATH_SUBTRACTION_SYMBOL = "-";
g.m.MATH_TRIG_ACOS = "acos";
g.m.MATH_TRIG_ASIN = "asin";
g.m.MATH_TRIG_ATAN = "atan";
g.m.MATH_TRIG_COS = "cos";
g.m.MATH_TRIG_HELPURL = "https://en.wikipedia.org/wiki/Trigonometric_functions";
g.m.MATH_TRIG_SIN = "sin";
g.m.MATH_TRIG_TAN = "tan";
g.m.MATH_TRIG_TOOLTIP_ACOS = "Return the arccosine of a number.";
g.m.MATH_TRIG_TOOLTIP_ASIN = "Return the arcsine of a number.";
g.m.MATH_TRIG_TOOLTIP_ATAN = "Return the arctangent of a number.";
g.m.MATH_TRIG_TOOLTIP_COS = "Return the cosine of a degree (not radian).";
g.m.MATH_TRIG_TOOLTIP_SIN = "Return the sine of a degree (not radian).";
g.m.MATH_TRIG_TOOLTIP_TAN = "Return the tangent of a degree (not radian).";
g.m.NEW_VARIABLE = "Create variable...";
g.m.NEW_VARIABLE_TITLE = "New variable name:";
g.m.PROCEDURES_DEFNORETURN_PROCEDURE = "do something";
g.m.REDO = "Redo";
g.m.REMOVE_COMMENT = "Remove Comment";
g.m.RENAME_VARIABLE = "Rename variable...";
g.m.RENAME_VARIABLE_TITLE = "Rename all '%1' variables to:";
g.m.UNDO = "Undo";
g.m.UNNAMED_KEY = "unnamed";
g.m.VARIABLES_DEFAULT_NAME = "item";
g.m.VARIABLE_ALREADY_EXISTS = "A variable named '%1' already exists.";
g.m.VARIABLE_ALREADY_EXISTS_FOR_ANOTHER_TYPE =
  "A variable named '%1' already exists for another type: '%2'.";
g.m.WORKSPACE_ARIA_LABEL = "Blockly Workspace";
g.m.WORKSPACE_COMMENT_DEFAULT_TEXT = "Say something...";
g.m.CONTROLS_IF_ELSEIF_TITLE_ELSEIF = g.m.CONTROLS_IF_MSG_ELSEIF;
g.m.CONTROLS_IF_ELSE_TITLE_ELSE = g.m.CONTROLS_IF_MSG_ELSE;
g.m.CONTROLS_IF_IF_TITLE_IF = g.m.CONTROLS_IF_MSG_IF;
g.m.CONTROLS_IF_MSG_THEN = g.m.CONTROLS_REPEAT_INPUT_DO;
g.m.MATH_CHANGE_TITLE_ITEM = g.m.VARIABLES_DEFAULT_NAME;
g.m.PROCEDURES_DEFRETURN_PROCEDURE = g.m.PROCEDURES_DEFNORETURN_PROCEDURE;
g.m.LOGIC_HUE = "210";
var BlocklyStorage = {},
  ne = null,
  oe = null,
  pe = null;
function qe() {
  var a = ne();
  re("xml=" + encodeURIComponent(a), se);
}
var te = {};
function re(a, c) {
  te["/storage"] && te["/storage"].abort();
  te["/storage"] = new XMLHttpRequest();
  te["/storage"].onload = function () {
    200 === this.status
      ? c && c.call(this)
      : ue(T("Games_httpRequestError") + "\nXHR status: " + this.status);
    te["/storage"] = null;
  };
  te["/storage"].open("POST", "/storage");
  te["/storage"].setRequestHeader(
    "Content-Type",
    "application/x-www-form-urlencoded"
  );
  te["/storage"].send(a);
}
function se() {
  window.location.hash = this.responseText.trim();
  ue(T("Games_linkAlert").replace("%1", window.location.href));
  pe = ne();
}
function ve() {
  var a = this.responseText.trim();
  a.length
    ? oe(a)
    : ue(T("Games_hashError").replace("%1", window.location.hash));
  pe = ne();
}
function ue(a) {
  if ("object" === typeof X) {
    var c = document.getElementById("linkButton");
    X.GH(c, a);
  } else alert(a);
}
var z = null,
  we = "",
  xe = "";
function ye() {
  jd();
  var a = document.getElementById("linkButton");
  a && (ed ? (a.style.display = "none") : ((ne = ze), (oe = Ae), nd(a, qe)));
  (a = document.getElementById("languageMenu")) &&
    a.addEventListener("change", Be, !0);
}
function Ce() {
  var a =
    1 == S
      ? '<xml><block type="bird_heading" x="70" y="70"></block></xml>'
      : 5 > S
      ? '<xml><block type="bird_ifElse" x="70" y="70"></block></xml>'
      : '<xml><block type="controls_if" x="70" y="70"></block></xml>';
  if (!ed && 1 < window.location.hash.length)
    re("key=" + encodeURIComponent(window.location.hash.substring(1)), ve);
  else {
    var c = null;
    try {
      c = window.sessionStorage.yz;
    } catch (e) {}
    c && delete window.sessionStorage.yz;
    var d = kd(S);
    (a = c || d || a) && Ae(a);
  }
}
function Ae(a) {
  a = g.R.fg(a);
  z.clear();
  g.R.xk(a, z);
  a = z;
  a.wj.length = 0;
  a.cn.length = 0;
  g.h.ZD();
}
function ze() {
  var a = g.R.TA(!0);
  if (1 == z.tb(!1).length && a.querySelector) {
    var c = a.querySelector("block");
    c && (c.removeAttribute("x"), c.removeAttribute("y"));
  }
  return g.R.Xc(a);
}
function De() {
  "object" == typeof BlocklyStorage &&
    null !== pe &&
    pe != ze() &&
    ((window.location.hash = ""), (pe = null));
}
function Ee(a) {
  var c = document.getElementById("toolbox");
  c && (a.toolbox = c);
  a.media = "third-party/blockly/media/";
  a.oneBasedIndex = !1;
  z = g.Ti("blockly", a);
  K(z, De);
}
function Fe() {
  window.location = (ed ? "index.html" : "./") + "?lang=" + cd;
}
function Be() {
  window.sessionStorage && (window.sessionStorage.yz = ze());
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
function Ge() {
  10 > S
    ? (window.location =
        window.location.protocol +
        "//" +
        window.location.host +
        window.location.pathname +
        "?lang=" +
        cd +
        "&level=" +
        (S + 1))
    : Fe();
}
function He(a) {
  if (a) {
    var c = a.match(/^block_id_([^']+)$/);
    c && (a = c[1]);
  }
  Bc(a, void 0);
}
function Ie(a) {
  a = a.replace(/(,\s*)?'block_id_[^']+'\)/g, ")");
  return a.replace(/\s+$/, "");
}
function Je(a) {
  if (
    ("click" == a.type && "touchend" == Ke && Le + 2e3 > Date.now()) ||
    (Ke == a.type && Le + 400 > Date.now())
  )
    return a.preventDefault(), a.stopPropagation(), !0;
  Ke = a.type;
  Le = Date.now();
  return !1;
}
var Ke = null,
  Le = 0;
function Me() {
  setTimeout(function () {
    var a = document.createElement("script");
    a.type = "text/javascript";
    a.src = "third-party/JS-Interpreter/compressed.js";
    document.head.appendChild(a);
  }, 1);
}
function Ne() {
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
var X = {
  Vi: !1,
  iy: null,
  cp: null,
  jq: function (a, c, d, e, f, h) {
    function k() {
      X.Vi &&
        ((l.style.visibility = "visible"),
        (l.style.zIndex = 10),
        (m.style.visibility = "hidden"));
    }
    if (!a) throw TypeError("Content not found: " + a);
    X.Vi && X.Of(!1);
    g.Jf() && g.mc(!0);
    X.Vi = !0;
    X.iy = c;
    X.cp = h;
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
      (X.vs = g.Tc(e, "mousedown", null, X.sE)));
    l.appendChild(a);
    a.className = a.className.replace("dialogHiddenContent", "");
    d && c ? (X.Ep(c, !1, 0.2), X.Ep(l, !0, 0.8), setTimeout(k, 175)) : k();
  },
  jy: 0,
  ky: 0,
  sE: function (a) {
    X.ys();
    if (!g.g.Sk(a)) {
      var c = document.getElementById("dialog");
      X.jy = c.offsetLeft - a.clientX;
      X.ky = c.offsetTop - a.clientY;
      X.xs = g.Tc(document, "mouseup", null, X.ys);
      X.ws = g.Tc(document, "mousemove", null, X.tE);
      a.stopPropagation();
    }
  },
  tE: function (a) {
    var c = document.getElementById("dialog"),
      d = X.jy + a.clientX;
    a = X.ky + a.clientY;
    a = Math.max(a, 0);
    a = Math.min(a, window.innerHeight - c.offsetHeight);
    d = Math.max(d, 0);
    d = Math.min(d, window.innerWidth - c.offsetWidth);
    c.style.left = d + "px";
    c.style.top = a + "px";
  },
  ys: function () {
    X.xs && (g.ab(X.xs), (X.xs = null));
    X.ws && (g.ab(X.ws), (X.ws = null));
  },
  Of: function (a) {
    function c() {
      e.style.zIndex = -1;
      e.style.visibility = "hidden";
      document.getElementById("dialogBorder").style.visibility = "hidden";
    }
    if (X.Vi) {
      X.ys();
      X.vs && (g.ab(X.vs), (X.vs = null));
      X.Vi = !1;
      X.cp && X.cp();
      X.cp = null;
      var d = !1 === a ? null : X.iy;
      a = document.getElementById("dialog");
      var e = document.getElementById("dialogShadow");
      e.style.opacity = 0;
      d && a ? (X.Ep(a, !1, 0.8), X.Ep(d, !0, 0.2), setTimeout(c, 175)) : c();
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
  Ep: function (a, c, d) {
    function e() {
      f.style.width = h.width + "px";
      f.style.height = h.height + "px";
      f.style.left = h.x + "px";
      f.style.top = h.y + "px";
      f.style.opacity = d;
    }
    if (a) {
      var f = document.getElementById("dialogBorder"),
        h = X.PE(a);
      c
        ? ((f.className = "dialogAnimate"), setTimeout(e, 1))
        : ((f.className = ""), e());
      f.style.visibility = "visible";
    }
  },
  PE: function (a) {
    var c = g.g.style.Lf(a);
    c = { x: c.x, y: c.y };
    a.getBBox
      ? ((a = a.getBBox()), (c.height = a.height), (c.width = a.width))
      : ((c.height = a.offsetHeight), (c.width = a.offsetWidth));
    return c;
  },
  GH: function (a, c) {
    var d = document.getElementById("containerStorage");
    d.textContent = "";
    c = c.split("\n");
    for (var e = 0; e < c.length; e++) {
      var f = document.createElement("p");
      f.appendChild(document.createTextNode(c[e]));
      d.appendChild(f);
    }
    d = document.getElementById("dialogStorage");
    X.jq(d, a, !0, !0, { width: "50%", left: "25%", top: "5em" }, X.FH);
    X.BH();
  },
  vx: function () {
    if (!kd(S))
      if (X.Vi || z.Lc()) setTimeout(X.vx, 15e3);
      else {
        var a = document.getElementById("dialogAbort"),
          c = document.getElementById("abortCancel");
        c.addEventListener("click", X.Of, !0);
        c.addEventListener("touchend", X.Of, !0);
        c = document.getElementById("abortOk");
        c.addEventListener("click", Fe, !0);
        c.addEventListener("touchend", Fe, !0);
        X.jq(
          a,
          null,
          !1,
          !0,
          { width: "40%", left: "30%", top: "3em" },
          function () {
            document.body.removeEventListener("keydown", X.ux, !0);
          }
        );
        document.body.addEventListener("keydown", X.ux, !0);
      }
  },
  eE: function () {
    var a = document.getElementById("dialogDone");
    if (z) {
      var c = document.getElementById("dialogLinesText");
      c.textContent = "";
      var d = xe;
      d = Ie(d);
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
    c.addEventListener("click", X.Of, !0);
    c.addEventListener("touchend", X.Of, !0);
    c = document.getElementById("doneOk");
    c.addEventListener("click", Ge, !0);
    c.addEventListener("touchend", Ge, !0);
    X.jq(
      a,
      null,
      !1,
      !0,
      { width: "40%", left: "30%", top: "3em" },
      function () {
        document.body.removeEventListener("keydown", X.Ox, !0);
      }
    );
    document.body.addEventListener("keydown", X.Ox, !0);
    document.getElementById("dialogDoneText").textContent = d;
  },
  gy: function (a) {
    !X.Vi ||
      (13 != a.keyCode && 27 != a.keyCode && 32 != a.keyCode) ||
      (X.Of(!0), a.stopPropagation(), a.preventDefault());
  },
  BH: function () {
    document.body.addEventListener("keydown", X.gy, !0);
  },
  FH: function () {
    document.body.removeEventListener("keydown", X.gy, !0);
  },
  Ox: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      X.Of(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && Ge();
  },
  ux: function (a) {
    if (13 == a.keyCode || 27 == a.keyCode || 32 == a.keyCode)
      X.Of(!0),
        a.stopPropagation(),
        a.preventDefault(),
        27 != a.keyCode && Fe();
  },
};
window.BlocklyDialogs = X;
X.hideDialog = X.Of;
var md = "bird";
function Y(a, c, d, e) {
  this.Ln = a;
  this.Mn = c;
  this.x1 = d;
  this.y1 = e;
}
Y.prototype.Jg = function (a) {
  var c = this.x1 - this.Ln,
    d = this.y1 - this.Mn,
    e = (a.x - this.Ln) * c + (a.y - this.Mn) * d,
    f = c * c + d * d;
  e = f ? e / f : -1;
  return g.g.K.Jg(
    a,
    0 > e
      ? new g.g.K(this.Ln, this.Mn)
      : 1 < e
      ? new g.g.K(this.x1, this.y1)
      : new g.g.K(this.Ln + e * c, this.Mn + e * d)
  );
};
var Z = [
    void 0,
    {
      start: new g.g.K(20, 20),
      cg: 90,
      Pc: new g.g.K(50, 50),
      Md: new g.g.K(80, 80),
      Ce: [],
    },
    {
      start: new g.g.K(20, 20),
      cg: 0,
      Pc: new g.g.K(80, 20),
      Md: new g.g.K(80, 80),
      Ce: [new Y(0, 50, 60, 50)],
    },
    {
      start: new g.g.K(20, 70),
      cg: 270,
      Pc: new g.g.K(50, 20),
      Md: new g.g.K(80, 70),
      Ce: [new Y(50, 50, 50, 100)],
    },
    {
      start: new g.g.K(20, 80),
      cg: 0,
      Pc: null,
      Md: new g.g.K(80, 20),
      Ce: [new Y(0, 0, 65, 65)],
    },
    {
      start: new g.g.K(80, 80),
      cg: 270,
      Pc: null,
      Md: new g.g.K(20, 20),
      Ce: [new Y(0, 100, 65, 35)],
    },
    {
      start: new g.g.K(20, 40),
      cg: 0,
      Pc: new g.g.K(80, 20),
      Md: new g.g.K(20, 80),
      Ce: [new Y(0, 59, 50, 59)],
    },
    {
      start: new g.g.K(80, 80),
      cg: 180,
      Pc: new g.g.K(80, 20),
      Md: new g.g.K(20, 20),
      Ce: [new Y(0, 70, 40, 70), new Y(70, 50, 100, 50)],
    },
    {
      start: new g.g.K(20, 25),
      cg: 90,
      Pc: new g.g.K(80, 25),
      Md: new g.g.K(80, 75),
      Ce: [
        new Y(50, 0, 50, 25),
        new Y(75, 50, 100, 50),
        new Y(50, 100, 50, 75),
        new Y(0, 50, 25, 50),
      ],
    },
    {
      start: new g.g.K(80, 70),
      cg: 180,
      Pc: new g.g.K(20, 20),
      Md: new g.g.K(80, 20),
      Ce: [new Y(0, 69, 31, 100), new Y(40, 50, 71, 0), new Y(80, 50, 100, 50)],
    },
    {
      start: new g.g.K(20, 20),
      cg: 90,
      Pc: new g.g.K(80, 50),
      Md: new g.g.K(20, 20),
      Ce: [
        new Y(40, 60, 60, 60),
        new Y(40, 60, 60, 30),
        new Y(60, 30, 100, 30),
      ],
    },
  ][S],
  Oe = [];
function Pe() {
  var a = document.getElementById("svgBird");
  Z.Ce.push(
    new Y(-5, -5, -5, 105),
    new Y(-5, 105, 105, 105),
    new Y(105, 105, 105, -5),
    new Y(105, -5, -5, -5)
  );
  for (var c = 0, d; (d = Z.Ce[c]); c++)
    g.g.j.N(
      "line",
      {
        x1: (d.Ln / 100) * 400,
        y1: 400 * (1 - d.Mn / 100),
        x2: (d.x1 / 100) * 400,
        y2: 400 * (1 - d.y1 / 100),
        stroke: "#CCB",
        "stroke-width": 10,
        "stroke-linecap": "round",
      },
      a
    );
  g.g.j
    .N("image", { id: "nest", height: 100, width: 100 }, a)
    .setAttributeNS(g.g.j.Oe, "xlink:href", "bird/nest.png");
  Z.Pc &&
    g.g.j
      .N("image", { id: "worm", height: 100, width: 100 }, a)
      .setAttributeNS(g.g.j.Oe, "xlink:href", "bird/worm.png");
  c = g.g.j.N("clipPath", { id: "birdClipPath" }, a);
  g.g.j.N("rect", { id: "clipRect", height: 120, width: 120 }, c);
  g.g.j
    .N(
      "image",
      {
        id: "bird",
        height: 480,
        width: 1440,
        "clip-path": "url(#birdClipPath)",
      },
      a
    )
    .setAttributeNS(g.g.j.Oe, "xlink:href", "bird/birds-120.png");
  g.g.j.N("rect", { class: "edges", height: 400, width: 400 }, a);
  d = 3 < S;
  var e = 4 < S,
    f = 1;
  for (c = 0.1; 0.9 > c; c += 0.1) {
    d &&
      g.g.j.N(
        "line",
        { class: "edges", x1: 400 * c, y1: 400, x2: 400 * c, y2: 400 - 9 * f },
        a
      );
    e &&
      g.g.j.N(
        "line",
        { class: "edges", x1: 0, y1: 400 * c, x2: 9 * c * f, y2: 400 * c },
        a
      );
    if (2 == f) {
      if (d) {
        var h = g.g.j.N("text", { class: "edgeX", x: 400 * c + 2, y: 396 }, a);
        h.appendChild(document.createTextNode(Math.round(100 * c)));
      }
      e &&
        ((h = g.g.j.N("text", { class: "edgeY", x: 3, y: 400 * c - 2 }, a)),
        h.appendChild(document.createTextNode(Math.round(100 - 100 * c))));
    }
    f = 1 == f ? 2 : 1;
  }
}
window.addEventListener("load", function () {
  function a() {
    d.style.top = Math.max(10, e.offsetTop - window.pageYOffset) + "px";
    d.style.left = c ? "10px" : "420px";
    d.style.width = window.innerWidth - 440 + "px";
  }
  document.body.innerHTML = Od();
  ye();
  var c = -1 != bd.indexOf(cd),
    d = document.getElementById("blockly"),
    e = document.getElementById("visualization");
  window.addEventListener("scroll", function () {
    a(null);
    g.zn(z);
  });
  window.addEventListener("resize", a);
  a(null);
  Ee({ rtl: c, trashcan: !0 });
  z.ee.load(["bird/quack.ogg", "bird/quack.mp3"], "quack");
  z.ee.load(["bird/whack.mp3", "bird/whack.ogg"], "whack");
  z.ee.load(["bird/worm.mp3", "bird/worm.ogg"], "worm");
  1 < S && K(z, g.h.ly);
  Zc(g.s, "noWorm,heading,getX,getY");
  Pe();
  Ce();
  Qe(!0);
  nd("runButton", Re);
  nd("resetButton", Se);
  setTimeout(function () {
    K(z, function () {
      Te();
    });
    Te();
  }, 5e3);
  8 < S && setTimeout(X.vx, 3e5);
  Me();
  Ne();
});
var Ue = 0;
function Te() {
  if (!z.Lc() && !kd(S)) {
    var a = -1 != bd.indexOf(cd),
      c = g.R.Xc(g.R.TA()),
      d = z.va.o.tb(!0),
      e = document.getElementById("dialogHelp"),
      f = null,
      h = null;
    if (1 == S)
      (-1 == c.indexOf(">90<") && -1 != c.indexOf("bird_heading")) ||
        g.X.isVisible() ||
        ((h = { width: "370px", top: "140px" }),
        (h[a ? "right" : "left"] = "215px"),
        (f = z.tb(!0)),
        (f = f.length ? f[0].pa() : d[0].pa()));
    else if (2 == S)
      -1 == c.indexOf("bird_noWorm") &&
        ((h = { width: "350px", top: "170px" }),
        (h[a ? "right" : "left"] = "180px"),
        (f = d[1].pa()));
    else if (4 == S)
      -1 == c.indexOf("bird_compare") &&
        ((h = { width: "350px", top: "230px" }),
        (h[a ? "right" : "left"] = "180px"),
        (f = d[2].pa()));
    else if (5 == S) {
      if (
        (Ue || (Ue = setInterval(Te, 100)), -1 == c.indexOf("mutation else"))
      ) {
        f = z.tb(!1);
        for (h = 0; (d = f[h]) && "controls_if" != d.type; h++);
        d.ud.isVisible()
          ? ((e = document.getElementById("dialogMutatorHelp")),
            (f = d.ud.o.va.Km[1]),
            (c = g.g.style.Lf(f)),
            (h = { width: "340px", top: c.y + 60 + "px" }),
            (h.left = c.x - (a ? 310 : 0) + "px"))
          : ((c = g.g.style.Lf(d.pa())),
            (h = { width: "340px", top: c.y + 100 + "px" }),
            (h.left = c.x - (a ? 280 : 0) + "px"),
            (f = d.pa()));
      }
    } else if (6 == S) {
      if (-1 == c.indexOf("mutation")) {
        f = z.tb(!1);
        for (h = 0; (d = f[h]) && "controls_if" != d.type; h++);
        c = g.g.style.Lf(d.pa());
        h = { width: "350px", top: c.y + 220 + "px" };
        h.left = c.x - (a ? 350 : 0) + "px";
        f = d.pa();
      }
    } else
      8 == S &&
        -1 == c.indexOf("bird_and") &&
        ((h = { width: "350px", top: "360px" }),
        (h[a ? "right" : "left"] = "450px"),
        (f = d[4].pa()));
    h
      ? e.parentNode != document.getElementById("dialog") &&
        X.jq(e, f, !0, !1, h, null)
      : X.Of(!1);
  }
}
function Qe(a) {
  for (var c = 0; c < Oe.length; c++) clearTimeout(Oe[c]);
  Oe = [];
  U = new g.g.K(Z.start.x, Z.start.y);
  rd = qd = Z.cg;
  sd = !Z.Pc;
  a
    ? (Ve(3),
      Oe.push(
        setTimeout(function () {
          Ve(2);
          Oe.push(
            setTimeout(function () {
              Ve(1);
            }, 400)
          );
        }, 400)
      ))
    : Ve(1);
  if ((a = document.getElementById("worm")))
    a.setAttribute("x", (Z.Pc.x / 100) * 400 - 50),
      a.setAttribute("y", 400 * (1 - Z.Pc.y / 100) - 50),
      (a.style.visibility = "visible");
  a = document.getElementById("nest");
  a.setAttribute("x", (Z.Md.x / 100) * 400 - 50);
  a.setAttribute("y", 400 * (1 - Z.Md.y / 100) - 50);
}
function Re(a) {
  if (!Je(a)) {
    a = document.getElementById("runButton");
    var c = document.getElementById("resetButton");
    c.style.minWidth || (c.style.minWidth = a.offsetWidth + "px");
    a.style.display = "none";
    c.style.display = "inline";
    Qe(!1);
    We();
  }
}
function Se(a) {
  Je(a) ||
    ((document.getElementById("runButton").style.display = "inline"),
    (document.getElementById("resetButton").style.display = "none"),
    Bc(null),
    Qe(!1));
}
function Xe(a, c) {
  a.setProperty(
    c,
    "heading",
    a.createNativeFunction(function (d, e) {
      var f = g.g.hc.uj(d);
      U.x += Math.cos(f);
      U.y += Math.sin(f);
      qd = d;
      td.push(["move", U.x, U.y, qd, e]);
      if (sd && 15 > g.g.K.Jg(U, Z.Md))
        throw (
          (td.push(["play", "quack", null]),
          Ye(Z.Md),
          td.push(["finish", null]),
          !0)
        );
      !sd &&
        Z.Pc &&
        15 > g.g.K.Jg(U, Z.Pc) &&
        (Ye(Z.Pc),
        td.push(["worm", null]),
        td.push(["play", "worm", null]),
        (sd = !0));
      a: {
        for (d = 0; (e = Z.Ce[d]); d++)
          if (6 > e.Jg(U)) {
            d = !0;
            break a;
          }
        d = !1;
      }
      if (d) throw (td.push(["play", "whack", null]), !1);
    })
  );
  a.setProperty(
    c,
    "noWorm",
    a.createNativeFunction(function () {
      return !sd;
    })
  );
  a.setProperty(
    c,
    "getX",
    a.createNativeFunction(function () {
      return U.x;
    })
  );
  a.setProperty(
    c,
    "getY",
    a.createNativeFunction(function () {
      return U.y;
    })
  );
}
function We() {
  if ("Interpreter" in window) {
    td = [];
    g.selected && rb(g.selected);
    var a = g.s;
    var c = z;
    c ||
      (console.warn(
        "No workspace specified in workspaceToCode call.  Guessing."
      ),
      (c = g.Jf()));
    var d = [];
    a.Da(c);
    c = c.tb(!0);
    for (var e = 0, f; (f = c[e]); e++) {
      var h = Wc(a, f);
      Array.isArray(h) && (h = h[0]);
      h &&
        (f.O &&
          ((h = a.qA(h)),
          a.Wj && !f.nq && (h = Xc(a.Wj, f) + h),
          a.vg && !f.nq && (h += Xc(a.vg, f))),
        d.push(h));
    }
    d = d.join("\n");
    d = a.finish(d);
    d = d.replace(/^\s+\n/, "");
    d = d.replace(/\n\s+$/, "\n");
    xe = a = d = d.replace(/[ \t]+\n/g, "\n");
    we = ze();
    d = a.indexOf("if (");
    c = a.indexOf("}\n");
    -1 != d && -1 != c && (a = a.substring(d, c + 2));
    d = 0;
    a = new Interpreter("while(true) {\n" + a + "}", Xe);
    try {
      for (c = 1e5; a.step(); ) if (0 >= c--) throw Infinity;
      d = -1;
    } catch (k) {
      Infinity === k
        ? (d = 2)
        : !0 === k
        ? (d = 1)
        : !1 === k
        ? (d = -2)
        : ((d = -2), window.alert(k));
    }
    pd = 1 == d ? 10 : 15;
    Qe(!1);
    Oe.push(setTimeout(Ze, 1));
  } else setTimeout(We, 250);
}
function Ze() {
  Oe = [];
  var a = td.shift();
  a
    ? (He(a.pop()),
      "move" == a[0] || "goto" == a[0]
        ? ((U.x = a[1]), (U.y = a[2]), (qd = a[3]), Ve("move" == a[0] ? 2 : 1))
        : "worm" == a[0]
        ? (document.getElementById("worm").style.visibility = "hidden")
        : "finish" == a[0]
        ? (Ve(3),
          window.localStorage && (window.localStorage[md + S] = we),
          X.eE())
        : "play" == a[0] && z.ee.play(a[1], 0.5),
      Oe.push(setTimeout(Ze, 5 * pd)))
    : He(null);
}
function Ve(a) {
  var c = od(rd - qd);
  180 < c && (c -= 360);
  rd = 10 >= Math.abs(c) ? qd : od(rd + (0 > c ? 10 : -10));
  c = (14 - Math.round((rd / 360) * 12)) % 12;
  var d = rd % 30;
  15 <= d && (d -= 30);
  d *= -1;
  if (1 == a) var e = 0;
  else if (3 == a) e = 3;
  else if (2 == a) e = Math.round(Date.now() / 100) % 3;
  else throw Error("Unknown pose.");
  a = (U.x / 100) * 400 - 60;
  var f = 400 * (1 - U.y / 100) - 60,
    h = document.getElementById("bird");
  h.setAttribute("x", a - 120 * c);
  h.setAttribute("y", f - 120 * e);
  h.setAttribute(
    "transform",
    "rotate(" + d + ", " + (a + 60) + ", " + (f + 60) + ")"
  );
  c = document.getElementById("clipRect");
  c.setAttribute("x", a);
  c.setAttribute("y", f);
}
function Ye(a) {
  var c = Math.round(g.g.K.Jg(U, a));
  a = od(g.g.hc.DA(Math.atan2(a.y - U.y, a.x - U.x)));
  for (var d = g.g.hc.uj(a), e = 0; e < c; e++)
    (U.x += Math.cos(d)),
      (U.y += Math.sin(d)),
      td.push(["goto", U.x, U.y, a, null]);
}
