(function () {
  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["xlsx-dist-xlsx-mini-min"], {
    /***/
    4:
    /*!********************!*\
      !*** fs (ignored) ***!
      \********************/

    /*! no static exports found */

    /***/
    function _(module, exports) {
      /* (ignored) */

      /***/
    },

    /***/
    "UWmM":
    /*!*************************************************!*\
      !*** ./node_modules/xlsx/dist/xlsx.mini.min.js ***!
      \*************************************************/

    /*! no static exports found */

    /***/
    function UWmM(module, exports, __webpack_require__) {
      /*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */
      var DO_NOT_EXPORT_CODEPAGE = true;
      var DO_NOT_EXPORT_JSZIP = true;
      var XLSX = {};

      function make_xlsx_lib(e) {
        e.version = "0.16.9";
        var r = 1200,
            t = 1252;
        var a = [874, 932, 936, 949, 950];

        for (var n = 0; n <= 8; ++n) {
          a.push(1250 + n);
        }

        var i = {
          0: 1252,
          1: 65001,
          2: 65001,
          77: 1e4,
          128: 932,
          129: 949,
          130: 1361,
          134: 936,
          136: 950,
          161: 1253,
          162: 1254,
          163: 1258,
          177: 1255,
          178: 1256,
          186: 1257,
          204: 1251,
          222: 874,
          238: 1250,
          255: 1252,
          69: 6969
        };

        var s = function s(e) {
          if (a.indexOf(e) == -1) return;
          t = i[0] = e;
        };

        function l() {
          s(1252);
        }

        var o = function o(e) {
          r = e;
          s(e);
        };

        function f() {
          o(1200);
          l();
        }

        function c(e) {
          var r = [];

          for (var t = 0, a = e.length; t < a; ++t) {
            r[t] = e.charCodeAt(t);
          }

          return r;
        }

        function h(e) {
          var r = [];

          for (var t = 0; t < e.length >> 1; ++t) {
            r[t] = String.fromCharCode(e.charCodeAt(2 * t) + (e.charCodeAt(2 * t + 1) << 8));
          }

          return r.join("");
        }

        function u(e) {
          var r = [];

          for (var t = 0; t < e.length >> 1; ++t) {
            r[t] = String.fromCharCode(e.charCodeAt(2 * t + 1) + (e.charCodeAt(2 * t) << 8));
          }

          return r.join("");
        }

        var d = function d(e) {
          var r = e.charCodeAt(0),
              t = e.charCodeAt(1);
          if (r == 255 && t == 254) return h(e.slice(2));
          if (r == 254 && t == 255) return u(e.slice(2));
          if (r == 65279) return e.slice(1);
          return e;
        };

        var p = function Rl(e) {
          return String.fromCharCode(e);
        };

        var v = function Il(e) {
          return String.fromCharCode(e);
        };

        var m = null;
        var g = true;

        var b = function Ll() {
          var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          return {
            encode: function encode(r) {
              var t = "";
              var a = 0,
                  n = 0,
                  i = 0,
                  s = 0,
                  l = 0,
                  o = 0,
                  f = 0;

              for (var c = 0; c < r.length;) {
                a = r.charCodeAt(c++);
                s = a >> 2;
                n = r.charCodeAt(c++);
                l = (a & 3) << 4 | n >> 4;
                i = r.charCodeAt(c++);
                o = (n & 15) << 2 | i >> 6;
                f = i & 63;

                if (isNaN(n)) {
                  o = f = 64;
                } else if (isNaN(i)) {
                  f = 64;
                }

                t += e.charAt(s) + e.charAt(l) + e.charAt(o) + e.charAt(f);
              }

              return t;
            },
            decode: function r(t) {
              var a = "";
              var n = 0,
                  i = 0,
                  s = 0,
                  l = 0,
                  o = 0,
                  f = 0,
                  c = 0;
              t = t.replace(/[^\w\+\/\=]/g, "");

              for (var h = 0; h < t.length;) {
                l = e.indexOf(t.charAt(h++));
                o = e.indexOf(t.charAt(h++));
                n = l << 2 | o >> 4;
                a += String.fromCharCode(n);
                f = e.indexOf(t.charAt(h++));
                i = (o & 15) << 4 | f >> 2;

                if (f !== 64) {
                  a += String.fromCharCode(i);
                }

                c = e.indexOf(t.charAt(h++));
                s = (f & 3) << 6 | c;

                if (c !== 64) {
                  a += String.fromCharCode(s);
                }
              }

              return a;
            }
          };
        }();

        var w = typeof Buffer !== "undefined" && typeof process !== "undefined" && typeof process.versions !== "undefined" && !!process.versions.node;

        var k = function k() {};

        if (typeof Buffer !== "undefined") {
          var y = !Buffer.from;
          if (!y) try {
            Buffer.from("foo", "utf8");
          } catch (x) {
            y = true;
          }
          k = y ? function (e, r) {
            return r ? new Buffer(e, r) : new Buffer(e);
          } : Buffer.from.bind(Buffer);
          if (!Buffer.alloc) Buffer.alloc = function (e) {
            return new Buffer(e);
          };
          if (!Buffer.allocUnsafe) Buffer.allocUnsafe = function (e) {
            return new Buffer(e);
          };
        }

        function _(e) {
          return w ? Buffer.alloc(e) : new Array(e);
        }

        function C(e) {
          return w ? Buffer.allocUnsafe(e) : new Array(e);
        }

        var S = function Bl(e) {
          if (w) return k(e, "binary");
          return e.split("").map(function (e) {
            return e.charCodeAt(0) & 255;
          });
        };

        function A(e) {
          if (typeof ArrayBuffer === "undefined") return S(e);
          var r = new ArrayBuffer(e.length),
              t = new Uint8Array(r);

          for (var a = 0; a != e.length; ++a) {
            t[a] = e.charCodeAt(a) & 255;
          }

          return r;
        }

        function E(e) {
          if (Array.isArray(e)) return e.map(function (e) {
            return String.fromCharCode(e);
          }).join("");
          var r = [];

          for (var t = 0; t < e.length; ++t) {
            r[t] = String.fromCharCode(e[t]);
          }

          return r.join("");
        }

        function F(e) {
          if (typeof Uint8Array === "undefined") throw new Error("Unsupported");
          return new Uint8Array(e);
        }

        function T(e) {
          if (typeof ArrayBuffer == "undefined") throw new Error("Unsupported");
          if (e instanceof ArrayBuffer) return T(new Uint8Array(e));
          var r = new Array(e.length);

          for (var t = 0; t < e.length; ++t) {
            r[t] = e[t];
          }

          return r;
        }

        var O = function O(e) {
          return [].concat.apply([], e);
        };

        var D = /\u0000/g,
            M = /[\u0001-\u0006]/g;
        var N = {};

        var P = function zl(e) {
          e.version = "0.11.2";

          function r(e) {
            var r = "",
                t = e.length - 1;

            while (t >= 0) {
              r += e.charAt(t--);
            }

            return r;
          }

          function t(e, r) {
            var t = "";

            while (t.length < r) {
              t += e;
            }

            return t;
          }

          function a(e, r) {
            var a = "" + e;
            return a.length >= r ? a : t("0", r - a.length) + a;
          }

          function n(e, r) {
            var a = "" + e;
            return a.length >= r ? a : t(" ", r - a.length) + a;
          }

          function i(e, r) {
            var a = "" + e;
            return a.length >= r ? a : a + t(" ", r - a.length);
          }

          function s(e, r) {
            var a = "" + Math.round(e);
            return a.length >= r ? a : t("0", r - a.length) + a;
          }

          function l(e, r) {
            var a = "" + e;
            return a.length >= r ? a : t("0", r - a.length) + a;
          }

          var o = Math.pow(2, 32);

          function f(e, r) {
            if (e > o || e < -o) return s(e, r);
            var t = Math.round(e);
            return l(t, r);
          }

          function c(e, r) {
            r = r || 0;
            return e.length >= 7 + r && (e.charCodeAt(r) | 32) === 103 && (e.charCodeAt(r + 1) | 32) === 101 && (e.charCodeAt(r + 2) | 32) === 110 && (e.charCodeAt(r + 3) | 32) === 101 && (e.charCodeAt(r + 4) | 32) === 114 && (e.charCodeAt(r + 5) | 32) === 97 && (e.charCodeAt(r + 6) | 32) === 108;
          }

          var h = [["Sun", "Sunday"], ["Mon", "Monday"], ["Tue", "Tuesday"], ["Wed", "Wednesday"], ["Thu", "Thursday"], ["Fri", "Friday"], ["Sat", "Saturday"]];
          var u = [["J", "Jan", "January"], ["F", "Feb", "February"], ["M", "Mar", "March"], ["A", "Apr", "April"], ["M", "May", "May"], ["J", "Jun", "June"], ["J", "Jul", "July"], ["A", "Aug", "August"], ["S", "Sep", "September"], ["O", "Oct", "October"], ["N", "Nov", "November"], ["D", "Dec", "December"]];

          function d(e) {
            e[0] = "General";
            e[1] = "0";
            e[2] = "0.00";
            e[3] = "#,##0";
            e[4] = "#,##0.00";
            e[9] = "0%";
            e[10] = "0.00%";
            e[11] = "0.00E+00";
            e[12] = "# ?/?";
            e[13] = "# ??/??";
            e[14] = "m/d/yy";
            e[15] = "d-mmm-yy";
            e[16] = "d-mmm";
            e[17] = "mmm-yy";
            e[18] = "h:mm AM/PM";
            e[19] = "h:mm:ss AM/PM";
            e[20] = "h:mm";
            e[21] = "h:mm:ss";
            e[22] = "m/d/yy h:mm";
            e[37] = "#,##0 ;(#,##0)";
            e[38] = "#,##0 ;[Red](#,##0)";
            e[39] = "#,##0.00;(#,##0.00)";
            e[40] = "#,##0.00;[Red](#,##0.00)";
            e[45] = "mm:ss";
            e[46] = "[h]:mm:ss";
            e[47] = "mmss.0";
            e[48] = "##0.0E+0";
            e[49] = "@";
            e[56] = '"上午/下午 "hh"時"mm"分"ss"秒 "';
          }

          var p = {};
          d(p);
          var v = [];
          var m = 0;

          for (m = 5; m <= 8; ++m) {
            v[m] = 32 + m;
          }

          for (m = 23; m <= 26; ++m) {
            v[m] = 0;
          }

          for (m = 27; m <= 31; ++m) {
            v[m] = 14;
          }

          for (m = 50; m <= 58; ++m) {
            v[m] = 14;
          }

          for (m = 59; m <= 62; ++m) {
            v[m] = m - 58;
          }

          for (m = 67; m <= 68; ++m) {
            v[m] = m - 58;
          }

          for (m = 72; m <= 75; ++m) {
            v[m] = m - 58;
          }

          for (m = 67; m <= 68; ++m) {
            v[m] = m - 57;
          }

          for (m = 76; m <= 78; ++m) {
            v[m] = m - 56;
          }

          for (m = 79; m <= 81; ++m) {
            v[m] = m - 34;
          }

          var g = [];
          g[5] = g[63] = '"$"#,##0_);\\("$"#,##0\\)';
          g[6] = g[64] = '"$"#,##0_);[Red]\\("$"#,##0\\)';
          g[7] = g[65] = '"$"#,##0.00_);\\("$"#,##0.00\\)';
          g[8] = g[66] = '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)';
          g[41] = '_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)';
          g[42] = '_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)';
          g[43] = '_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)';
          g[44] = '_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)';

          function b(e, r, t) {
            var a = e < 0 ? -1 : 1;
            var n = e * a;
            var i = 0,
                s = 1,
                l = 0;
            var o = 1,
                f = 0,
                c = 0;
            var h = Math.floor(n);

            while (f < r) {
              h = Math.floor(n);
              l = h * s + i;
              c = h * f + o;
              if (n - h < 5e-8) break;
              n = 1 / (n - h);
              i = s;
              s = l;
              o = f;
              f = c;
            }

            if (c > r) {
              if (f > r) {
                c = o;
                l = i;
              } else {
                c = f;
                l = s;
              }
            }

            if (!t) return [0, a * l, c];
            var u = Math.floor(a * l / c);
            return [u, a * l - u * c, c];
          }

          function w(e, r, t) {
            if (e > 2958465 || e < 0) return null;
            var a = e | 0,
                n = Math.floor(86400 * (e - a)),
                i = 0;
            var s = [];
            var l = {
              D: a,
              T: n,
              u: 86400 * (e - a) - n,
              y: 0,
              m: 0,
              d: 0,
              H: 0,
              M: 0,
              S: 0,
              q: 0
            };
            if (Math.abs(l.u) < 1e-6) l.u = 0;
            if (r && r.date1904) a += 1462;

            if (l.u > .9999) {
              l.u = 0;

              if (++n == 86400) {
                l.T = n = 0;
                ++a;
                ++l.D;
              }
            }

            if (a === 60) {
              s = t ? [1317, 10, 29] : [1900, 2, 29];
              i = 3;
            } else if (a === 0) {
              s = t ? [1317, 8, 29] : [1900, 1, 0];
              i = 6;
            } else {
              if (a > 60) --a;
              var o = new Date(1900, 0, 1);
              o.setDate(o.getDate() + a - 1);
              s = [o.getFullYear(), o.getMonth() + 1, o.getDate()];
              i = o.getDay();
              if (a < 60) i = (i + 6) % 7;
              if (t) i = E(o, s);
            }

            l.y = s[0];
            l.m = s[1];
            l.d = s[2];
            l.S = n % 60;
            n = Math.floor(n / 60);
            l.M = n % 60;
            n = Math.floor(n / 60);
            l.H = n;
            l.q = i;
            return l;
          }

          e.parse_date_code = w;
          var k = new Date(1899, 11, 31, 0, 0, 0);
          var y = k.getTime();
          var x = new Date(1900, 2, 1, 0, 0, 0);

          function _(e, r) {
            var t = e.getTime();
            if (r) t -= 1461 * 24 * 60 * 60 * 1e3;else if (e >= x) t += 24 * 60 * 60 * 1e3;
            return (t - (y + (e.getTimezoneOffset() - k.getTimezoneOffset()) * 6e4)) / (24 * 60 * 60 * 1e3);
          }

          function C(e) {
            return e.toString(10);
          }

          e._general_int = C;

          var S = function $() {
            var e = /(?:\.0*|(\.\d*[1-9])0+)$/;

            function r(r) {
              return r.indexOf(".") == -1 ? r : r.replace(e, "$1");
            }

            var t = /(?:\.0*|(\.\d*[1-9])0+)[Ee]/;
            var a = /(E[+-])(\d)$/;

            function n(e) {
              if (e.indexOf("E") == -1) return e;
              return e.replace(t, "$1E").replace(a, "$10$2");
            }

            function i(e) {
              var t = e < 0 ? 12 : 11;
              var a = r(e.toFixed(12));
              if (a.length <= t) return a;
              a = e.toPrecision(10);
              if (a.length <= t) return a;
              return e.toExponential(5);
            }

            function s(e) {
              var t = r(e.toFixed(11));
              return t.length > (e < 0 ? 12 : 11) || t === "0" || t === "-0" ? e.toPrecision(6) : t;
            }

            function l(e) {
              var t = Math.floor(Math.log(Math.abs(e)) * Math.LOG10E),
                  a;
              if (t >= -4 && t <= -1) a = e.toPrecision(10 + t);else if (Math.abs(t) <= 9) a = i(e);else if (t === 10) a = e.toFixed(10).substr(0, 12);else a = s(e);
              return r(n(a.toUpperCase()));
            }

            return l;
          }();

          e._general_num = S;

          function A(e, r) {
            switch (typeof e) {
              case "string":
                return e;

              case "boolean":
                return e ? "TRUE" : "FALSE";

              case "number":
                return (e | 0) === e ? e.toString(10) : S(e);

              case "undefined":
                return "";

              case "object":
                if (e == null) return "";
                if (e instanceof Date) return z(14, _(e, r && r.date1904), r);
            }

            throw new Error("unsupported value in General format: " + e);
          }

          e._general = A;

          function E(e, r) {
            r[0] -= 581;
            var t = e.getDay();
            if (e < 60) t = (t + 6) % 7;
            return t;
          }

          function F(e, r, t, n) {
            var i = "",
                s = 0,
                l = 0,
                o = t.y,
                f,
                c = 0;

            switch (e) {
              case 98:
                o = t.y + 543;

              case 121:
                switch (r.length) {
                  case 1:
                    ;

                  case 2:
                    f = o % 100;
                    c = 2;
                    break;

                  default:
                    f = o % 1e4;
                    c = 4;
                    break;
                }

                break;

              case 109:
                switch (r.length) {
                  case 1:
                    ;

                  case 2:
                    f = t.m;
                    c = r.length;
                    break;

                  case 3:
                    return u[t.m - 1][1];

                  case 5:
                    return u[t.m - 1][0];

                  default:
                    return u[t.m - 1][2];
                }

                break;

              case 100:
                switch (r.length) {
                  case 1:
                    ;

                  case 2:
                    f = t.d;
                    c = r.length;
                    break;

                  case 3:
                    return h[t.q][0];

                  default:
                    return h[t.q][1];
                }

                break;

              case 104:
                switch (r.length) {
                  case 1:
                    ;

                  case 2:
                    f = 1 + (t.H + 11) % 12;
                    c = r.length;
                    break;

                  default:
                    throw "bad hour format: " + r;
                }

                break;

              case 72:
                switch (r.length) {
                  case 1:
                    ;

                  case 2:
                    f = t.H;
                    c = r.length;
                    break;

                  default:
                    throw "bad hour format: " + r;
                }

                break;

              case 77:
                switch (r.length) {
                  case 1:
                    ;

                  case 2:
                    f = t.M;
                    c = r.length;
                    break;

                  default:
                    throw "bad minute format: " + r;
                }

                break;

              case 115:
                if (r != "s" && r != "ss" && r != ".0" && r != ".00" && r != ".000") throw "bad second format: " + r;
                if (t.u === 0 && (r == "s" || r == "ss")) return a(t.S, r.length);
                if (n >= 2) l = n === 3 ? 1e3 : 100;else l = n === 1 ? 10 : 1;
                s = Math.round(l * (t.S + t.u));
                if (s >= 60 * l) s = 0;
                if (r === "s") return s === 0 ? "0" : "" + s / l;
                i = a(s, 2 + n);
                if (r === "ss") return i.substr(0, 2);
                return "." + i.substr(2, r.length - 1);

              case 90:
                switch (r) {
                  case "[h]":
                    ;

                  case "[hh]":
                    f = t.D * 24 + t.H;
                    break;

                  case "[m]":
                    ;

                  case "[mm]":
                    f = (t.D * 24 + t.H) * 60 + t.M;
                    break;

                  case "[s]":
                    ;

                  case "[ss]":
                    f = ((t.D * 24 + t.H) * 60 + t.M) * 60 + Math.round(t.S + t.u);
                    break;

                  default:
                    throw "bad abstime format: " + r;
                }

                c = r.length === 3 ? 1 : 2;
                break;

              case 101:
                f = o;
                c = 1;
                break;
            }

            var d = c > 0 ? a(f, c) : "";
            return d;
          }

          function T(e) {
            var r = 3;
            if (e.length <= r) return e;
            var t = e.length % r,
                a = e.substr(0, t);

            for (; t != e.length; t += r) {
              a += (a.length > 0 ? "," : "") + e.substr(t, r);
            }

            return a;
          }

          var O = function U() {
            var e = /%/g;

            function s(r, a, n) {
              var i = a.replace(e, ""),
                  s = a.length - i.length;
              return O(r, i, n * Math.pow(10, 2 * s)) + t("%", s);
            }

            function l(e, r, t) {
              var a = r.length - 1;

              while (r.charCodeAt(a - 1) === 44) {
                --a;
              }

              return O(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
            }

            function o(e, r) {
              var t;
              var a = e.indexOf("E") - e.indexOf(".") - 1;

              if (e.match(/^#+0.0E\+0$/)) {
                if (r == 0) return "0.0E+0";else if (r < 0) return "-" + o(e, -r);
                var n = e.indexOf(".");
                if (n === -1) n = e.indexOf("E");
                var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
                if (i < 0) i += n;
                t = (r / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n);

                if (t.indexOf("e") === -1) {
                  var s = Math.floor(Math.log(r) * Math.LOG10E);
                  if (t.indexOf(".") === -1) t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i);else t += "E+" + (s - i);

                  while (t.substr(0, 2) === "0.") {
                    t = t.charAt(0) + t.substr(2, n) + "." + t.substr(2 + n);
                    t = t.replace(/^0+([1-9])/, "$1").replace(/^0+\./, "0.");
                  }

                  t = t.replace(/\+-/, "-");
                }

                t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (e, r, t, a) {
                  return r + t + a.substr(0, (n + i) % n) + "." + a.substr(i) + "E";
                });
              } else t = r.toExponential(a);

              if (e.match(/E\+00$/) && t.match(/e[+-]\d$/)) t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1);
              if (e.match(/E\-/) && t.match(/e\+/)) t = t.replace(/e\+/, "e");
              return t.replace("e", "E");
            }

            var c = /# (\?+)( ?)\/( ?)(\d+)/;

            function h(e, r, i) {
              var s = parseInt(e[4], 10),
                  l = Math.round(r * s),
                  o = Math.floor(l / s);
              var f = l - o * s,
                  c = s;
              return i + (o === 0 ? "" : "" + o) + " " + (f === 0 ? t(" ", e[1].length + 1 + e[4].length) : n(f, e[1].length) + e[2] + "/" + e[3] + a(c, e[4].length));
            }

            function u(e, r, a) {
              return a + (r === 0 ? "" : "" + r) + t(" ", e[1].length + 2 + e[4].length);
            }

            var d = /^#*0*\.([0#]+)/;
            var p = /\).*[0#]/;
            var v = /\(###\) ###\\?-####/;

            function m(e) {
              var r = "",
                  t;

              for (var a = 0; a != e.length; ++a) {
                switch (t = e.charCodeAt(a)) {
                  case 35:
                    break;

                  case 63:
                    r += " ";
                    break;

                  case 48:
                    r += "0";
                    break;

                  default:
                    r += String.fromCharCode(t);
                }
              }

              return r;
            }

            function g(e, r) {
              var t = Math.pow(10, r);
              return "" + Math.round(e * t) / t;
            }

            function w(e, r) {
              var t = e - Math.floor(e),
                  a = Math.pow(10, r);
              if (r < ("" + Math.round(t * a)).length) return 0;
              return Math.round(t * a);
            }

            function k(e, r) {
              if (r < ("" + Math.round((e - Math.floor(e)) * Math.pow(10, r))).length) {
                return 1;
              }

              return 0;
            }

            function y(e) {
              if (e < 2147483647 && e > -2147483648) return "" + (e >= 0 ? e | 0 : e - 1 | 0);
              return "" + Math.floor(e);
            }

            function x(e, u, _) {
              if (e.charCodeAt(0) === 40 && !u.match(p)) {
                var C = u.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
                if (_ >= 0) return x("n", C, _);
                return "(" + x("n", C, -_) + ")";
              }

              if (u.charCodeAt(u.length - 1) === 44) return l(e, u, _);
              if (u.indexOf("%") !== -1) return s(e, u, _);
              if (u.indexOf("E") !== -1) return o(u, _);
              if (u.charCodeAt(0) === 36) return "$" + x(e, u.substr(u.charAt(1) == " " ? 2 : 1), _);
              var S;
              var A,
                  E,
                  F,
                  D = Math.abs(_),
                  M = _ < 0 ? "-" : "";
              if (u.match(/^00+$/)) return M + f(D, u.length);

              if (u.match(/^[#?]+$/)) {
                S = f(_, 0);
                if (S === "0") S = "";
                return S.length > u.length ? S : m(u.substr(0, u.length - S.length)) + S;
              }

              if (A = u.match(c)) return h(A, D, M);
              if (u.match(/^#+0+$/)) return M + f(D, u.length - u.indexOf("0"));

              if (A = u.match(d)) {
                S = g(_, A[1].length).replace(/^([^\.]+)$/, "$1." + m(A[1])).replace(/\.$/, "." + m(A[1])).replace(/\.(\d*)$/, function (e, r) {
                  return "." + r + t("0", m(A[1]).length - r.length);
                });
                return u.indexOf("0.") !== -1 ? S : S.replace(/^0\./, ".");
              }

              u = u.replace(/^#+([0.])/, "$1");

              if (A = u.match(/^(0*)\.(#*)$/)) {
                return M + g(D, A[2].length).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, A[1].length ? "0." : ".");
              }

              if (A = u.match(/^#{1,3},##0(\.?)$/)) return M + T(f(D, 0));

              if (A = u.match(/^#,##0\.([#0]*0)$/)) {
                return _ < 0 ? "-" + x(e, u, -_) : T("" + (Math.floor(_) + k(_, A[1].length))) + "." + a(w(_, A[1].length), A[1].length);
              }

              if (A = u.match(/^#,#*,#0/)) return x(e, u.replace(/^#,#*,/, ""), _);

              if (A = u.match(/^([0#]+)(\\?-([0#]+))+$/)) {
                S = r(x(e, u.replace(/[\\-]/g, ""), _));
                E = 0;
                return r(r(u.replace(/\\/g, "")).replace(/[0#]/g, function (e) {
                  return E < S.length ? S.charAt(E++) : e === "0" ? "0" : "";
                }));
              }

              if (u.match(v)) {
                S = x(e, "##########", _);
                return "(" + S.substr(0, 3) + ") " + S.substr(3, 3) + "-" + S.substr(6);
              }

              var N = "";

              if (A = u.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
                E = Math.min(A[4].length, 7);
                F = b(D, Math.pow(10, E) - 1, false);
                S = "" + M;
                N = O("n", A[1], F[1]);
                if (N.charAt(N.length - 1) == " ") N = N.substr(0, N.length - 1) + "0";
                S += N + A[2] + "/" + A[3];
                N = i(F[2], E);
                if (N.length < A[4].length) N = m(A[4].substr(A[4].length - N.length)) + N;
                S += N;
                return S;
              }

              if (A = u.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
                E = Math.min(Math.max(A[1].length, A[4].length), 7);
                F = b(D, Math.pow(10, E) - 1, true);
                return M + (F[0] || (F[1] ? "" : "0")) + " " + (F[1] ? n(F[1], E) + A[2] + "/" + A[3] + i(F[2], E) : t(" ", 2 * E + 1 + A[2].length + A[3].length));
              }

              if (A = u.match(/^[#0?]+$/)) {
                S = f(_, 0);
                if (u.length <= S.length) return S;
                return m(u.substr(0, u.length - S.length)) + S;
              }

              if (A = u.match(/^([#0?]+)\.([#0]+)$/)) {
                S = "" + _.toFixed(Math.min(A[2].length, 10)).replace(/([^0])0+$/, "$1");
                E = S.indexOf(".");
                var P = u.indexOf(".") - E,
                    R = u.length - S.length - P;
                return m(u.substr(0, P) + S + u.substr(u.length - R));
              }

              if (A = u.match(/^00,000\.([#0]*0)$/)) {
                E = w(_, A[1].length);
                return _ < 0 ? "-" + x(e, u, -_) : T(y(_)).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function (e) {
                  return "00," + (e.length < 3 ? a(0, 3 - e.length) : "") + e;
                }) + "." + a(E, A[1].length);
              }

              switch (u) {
                case "###,##0.00":
                  return x(e, "#,##0.00", _);

                case "###,###":
                  ;

                case "##,###":
                  ;

                case "#,###":
                  var I = T(f(D, 0));
                  return I !== "0" ? M + I : "";

                case "###,###.00":
                  return x(e, "###,##0.00", _).replace(/^0\./, ".");

                case "#,###.00":
                  return x(e, "#,##0.00", _).replace(/^0\./, ".");

                default:
                  ;
              }

              throw new Error("unsupported format |" + u + "|");
            }

            function _(e, r, t) {
              var a = r.length - 1;

              while (r.charCodeAt(a - 1) === 44) {
                --a;
              }

              return O(e, r.substr(0, a), t / Math.pow(10, 3 * (r.length - a)));
            }

            function C(r, a, n) {
              var i = a.replace(e, ""),
                  s = a.length - i.length;
              return O(r, i, n * Math.pow(10, 2 * s)) + t("%", s);
            }

            function S(e, r) {
              var t;
              var a = e.indexOf("E") - e.indexOf(".") - 1;

              if (e.match(/^#+0.0E\+0$/)) {
                if (r == 0) return "0.0E+0";else if (r < 0) return "-" + S(e, -r);
                var n = e.indexOf(".");
                if (n === -1) n = e.indexOf("E");
                var i = Math.floor(Math.log(r) * Math.LOG10E) % n;
                if (i < 0) i += n;
                t = (r / Math.pow(10, i)).toPrecision(a + 1 + (n + i) % n);

                if (!t.match(/[Ee]/)) {
                  var s = Math.floor(Math.log(r) * Math.LOG10E);
                  if (t.indexOf(".") === -1) t = t.charAt(0) + "." + t.substr(1) + "E+" + (s - t.length + i);else t += "E+" + (s - i);
                  t = t.replace(/\+-/, "-");
                }

                t = t.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/, function (e, r, t, a) {
                  return r + t + a.substr(0, (n + i) % n) + "." + a.substr(i) + "E";
                });
              } else t = r.toExponential(a);

              if (e.match(/E\+00$/) && t.match(/e[+-]\d$/)) t = t.substr(0, t.length - 1) + "0" + t.charAt(t.length - 1);
              if (e.match(/E\-/) && t.match(/e\+/)) t = t.replace(/e\+/, "e");
              return t.replace("e", "E");
            }

            function A(e, s, l) {
              if (e.charCodeAt(0) === 40 && !s.match(p)) {
                var o = s.replace(/\( */, "").replace(/ \)/, "").replace(/\)/, "");
                if (l >= 0) return A("n", o, l);
                return "(" + A("n", o, -l) + ")";
              }

              if (s.charCodeAt(s.length - 1) === 44) return _(e, s, l);
              if (s.indexOf("%") !== -1) return C(e, s, l);
              if (s.indexOf("E") !== -1) return S(s, l);
              if (s.charCodeAt(0) === 36) return "$" + A(e, s.substr(s.charAt(1) == " " ? 2 : 1), l);
              var f;
              var h,
                  g,
                  w,
                  k = Math.abs(l),
                  y = l < 0 ? "-" : "";
              if (s.match(/^00+$/)) return y + a(k, s.length);

              if (s.match(/^[#?]+$/)) {
                f = "" + l;
                if (l === 0) f = "";
                return f.length > s.length ? f : m(s.substr(0, s.length - f.length)) + f;
              }

              if (h = s.match(c)) return u(h, k, y);
              if (s.match(/^#+0+$/)) return y + a(k, s.length - s.indexOf("0"));

              if (h = s.match(d)) {
                f = ("" + l).replace(/^([^\.]+)$/, "$1." + m(h[1])).replace(/\.$/, "." + m(h[1]));
                f = f.replace(/\.(\d*)$/, function (e, r) {
                  return "." + r + t("0", m(h[1]).length - r.length);
                });
                return s.indexOf("0.") !== -1 ? f : f.replace(/^0\./, ".");
              }

              s = s.replace(/^#+([0.])/, "$1");

              if (h = s.match(/^(0*)\.(#*)$/)) {
                return y + ("" + k).replace(/\.(\d*[1-9])0*$/, ".$1").replace(/^(-?\d*)$/, "$1.").replace(/^0\./, h[1].length ? "0." : ".");
              }

              if (h = s.match(/^#{1,3},##0(\.?)$/)) return y + T("" + k);

              if (h = s.match(/^#,##0\.([#0]*0)$/)) {
                return l < 0 ? "-" + A(e, s, -l) : T("" + l) + "." + t("0", h[1].length);
              }

              if (h = s.match(/^#,#*,#0/)) return A(e, s.replace(/^#,#*,/, ""), l);

              if (h = s.match(/^([0#]+)(\\?-([0#]+))+$/)) {
                f = r(A(e, s.replace(/[\\-]/g, ""), l));
                g = 0;
                return r(r(s.replace(/\\/g, "")).replace(/[0#]/g, function (e) {
                  return g < f.length ? f.charAt(g++) : e === "0" ? "0" : "";
                }));
              }

              if (s.match(v)) {
                f = A(e, "##########", l);
                return "(" + f.substr(0, 3) + ") " + f.substr(3, 3) + "-" + f.substr(6);
              }

              var x = "";

              if (h = s.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/)) {
                g = Math.min(h[4].length, 7);
                w = b(k, Math.pow(10, g) - 1, false);
                f = "" + y;
                x = O("n", h[1], w[1]);
                if (x.charAt(x.length - 1) == " ") x = x.substr(0, x.length - 1) + "0";
                f += x + h[2] + "/" + h[3];
                x = i(w[2], g);
                if (x.length < h[4].length) x = m(h[4].substr(h[4].length - x.length)) + x;
                f += x;
                return f;
              }

              if (h = s.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/)) {
                g = Math.min(Math.max(h[1].length, h[4].length), 7);
                w = b(k, Math.pow(10, g) - 1, true);
                return y + (w[0] || (w[1] ? "" : "0")) + " " + (w[1] ? n(w[1], g) + h[2] + "/" + h[3] + i(w[2], g) : t(" ", 2 * g + 1 + h[2].length + h[3].length));
              }

              if (h = s.match(/^[#0?]+$/)) {
                f = "" + l;
                if (s.length <= f.length) return f;
                return m(s.substr(0, s.length - f.length)) + f;
              }

              if (h = s.match(/^([#0]+)\.([#0]+)$/)) {
                f = "" + l.toFixed(Math.min(h[2].length, 10)).replace(/([^0])0+$/, "$1");
                g = f.indexOf(".");
                var E = s.indexOf(".") - g,
                    F = s.length - f.length - E;
                return m(s.substr(0, E) + f + s.substr(s.length - F));
              }

              if (h = s.match(/^00,000\.([#0]*0)$/)) {
                return l < 0 ? "-" + A(e, s, -l) : T("" + l).replace(/^\d,\d{3}$/, "0$&").replace(/^\d*$/, function (e) {
                  return "00," + (e.length < 3 ? a(0, 3 - e.length) : "") + e;
                }) + "." + a(0, h[1].length);
              }

              switch (s) {
                case "###,###":
                  ;

                case "##,###":
                  ;

                case "#,###":
                  var D = T("" + k);
                  return D !== "0" ? y + D : "";

                default:
                  if (s.match(/\.[0#?]*$/)) return A(e, s.slice(0, s.lastIndexOf(".")), l) + m(s.slice(s.lastIndexOf(".")));
              }

              throw new Error("unsupported format |" + s + "|");
            }

            return function E(e, r, t) {
              return (t | 0) === t ? A(e, r, t) : x(e, r, t);
            };
          }();

          function D(e) {
            var r = [];
            var t = false;

            for (var a = 0, n = 0; a < e.length; ++a) {
              switch (e.charCodeAt(a)) {
                case 34:
                  t = !t;
                  break;

                case 95:
                  ;

                case 42:
                  ;

                case 92:
                  ++a;
                  break;

                case 59:
                  r[r.length] = e.substr(n, a - n);
                  n = a + 1;
              }
            }

            r[r.length] = e.substr(n);
            if (t === true) throw new Error("Format |" + e + "| unterminated string ");
            return r;
          }

          e._split = D;
          var M = /\[[HhMmSs\u0E0A\u0E19\u0E17]*\]/;

          function N(e) {
            var r = 0,
                t = "",
                a = "";

            while (r < e.length) {
              switch (t = e.charAt(r)) {
                case "G":
                  if (c(e, r)) r += 6;
                  r++;
                  break;

                case '"':
                  for (; e.charCodeAt(++r) !== 34 && r < e.length;) {}

                  ++r;
                  break;

                case "\\":
                  r += 2;
                  break;

                case "_":
                  r += 2;
                  break;

                case "@":
                  ++r;
                  break;

                case "B":
                  ;

                case "b":
                  if (e.charAt(r + 1) === "1" || e.charAt(r + 1) === "2") return true;

                case "M":
                  ;

                case "D":
                  ;

                case "Y":
                  ;

                case "H":
                  ;

                case "S":
                  ;

                case "E":
                  ;

                case "m":
                  ;

                case "d":
                  ;

                case "y":
                  ;

                case "h":
                  ;

                case "s":
                  ;

                case "e":
                  ;

                case "g":
                  return true;

                case "A":
                  ;

                case "a":
                  ;

                case "上":
                  if (e.substr(r, 3).toUpperCase() === "A/P") return true;
                  if (e.substr(r, 5).toUpperCase() === "AM/PM") return true;
                  if (e.substr(r, 5).toUpperCase() === "上午/下午") return true;
                  ++r;
                  break;

                case "[":
                  a = t;

                  while (e.charAt(r++) !== "]" && r < e.length) {
                    a += e.charAt(r);
                  }

                  if (a.match(M)) return true;
                  break;

                case ".":
                  ;

                case "0":
                  ;

                case "#":
                  while (r < e.length && ("0#?.,E+-%".indexOf(t = e.charAt(++r)) > -1 || t == "\\" && e.charAt(r + 1) == "-" && "0#".indexOf(e.charAt(r + 2)) > -1)) {}

                  break;

                case "?":
                  while (e.charAt(++r) === t) {}

                  break;

                case "*":
                  ++r;
                  if (e.charAt(r) == " " || e.charAt(r) == "*") ++r;
                  break;

                case "(":
                  ;

                case ")":
                  ++r;
                  break;

                case "1":
                  ;

                case "2":
                  ;

                case "3":
                  ;

                case "4":
                  ;

                case "5":
                  ;

                case "6":
                  ;

                case "7":
                  ;

                case "8":
                  ;

                case "9":
                  while (r < e.length && "0123456789".indexOf(e.charAt(++r)) > -1) {}

                  break;

                case " ":
                  ++r;
                  break;

                default:
                  ++r;
                  break;
              }
            }

            return false;
          }

          e.is_date = N;

          function P(e, r, t, a) {
            var n = [],
                i = "",
                s = 0,
                l = "",
                o = "t",
                f,
                h,
                u;
            var d = "H";

            while (s < e.length) {
              switch (l = e.charAt(s)) {
                case "G":
                  if (!c(e, s)) throw new Error("unrecognized character " + l + " in " + e);
                  n[n.length] = {
                    t: "G",
                    v: "General"
                  };
                  s += 7;
                  break;

                case '"':
                  for (i = ""; (u = e.charCodeAt(++s)) !== 34 && s < e.length;) {
                    i += String.fromCharCode(u);
                  }

                  n[n.length] = {
                    t: "t",
                    v: i
                  };
                  ++s;
                  break;

                case "\\":
                  var p = e.charAt(++s),
                      v = p === "(" || p === ")" ? p : "t";
                  n[n.length] = {
                    t: v,
                    v: p
                  };
                  ++s;
                  break;

                case "_":
                  n[n.length] = {
                    t: "t",
                    v: " "
                  };
                  s += 2;
                  break;

                case "@":
                  n[n.length] = {
                    t: "T",
                    v: r
                  };
                  ++s;
                  break;

                case "B":
                  ;

                case "b":
                  if (e.charAt(s + 1) === "1" || e.charAt(s + 1) === "2") {
                    if (f == null) {
                      f = w(r, t, e.charAt(s + 1) === "2");
                      if (f == null) return "";
                    }

                    n[n.length] = {
                      t: "X",
                      v: e.substr(s, 2)
                    };
                    o = l;
                    s += 2;
                    break;
                  }

                  ;

                case "M":
                  ;

                case "D":
                  ;

                case "Y":
                  ;

                case "H":
                  ;

                case "S":
                  ;

                case "E":
                  l = l.toLowerCase();

                case "m":
                  ;

                case "d":
                  ;

                case "y":
                  ;

                case "h":
                  ;

                case "s":
                  ;

                case "e":
                  ;

                case "g":
                  if (r < 0) return "";

                  if (f == null) {
                    f = w(r, t);
                    if (f == null) return "";
                  }

                  i = l;

                  while (++s < e.length && e.charAt(s).toLowerCase() === l) {
                    i += l;
                  }

                  if (l === "m" && o.toLowerCase() === "h") l = "M";
                  if (l === "h") l = d;
                  n[n.length] = {
                    t: l,
                    v: i
                  };
                  o = l;
                  break;

                case "A":
                  ;

                case "a":
                  ;

                case "上":
                  var m = {
                    t: l,
                    v: l
                  };
                  if (f == null) f = w(r, t);

                  if (e.substr(s, 3).toUpperCase() === "A/P") {
                    if (f != null) m.v = f.H >= 12 ? "P" : "A";
                    m.t = "T";
                    d = "h";
                    s += 3;
                  } else if (e.substr(s, 5).toUpperCase() === "AM/PM") {
                    if (f != null) m.v = f.H >= 12 ? "PM" : "AM";
                    m.t = "T";
                    s += 5;
                    d = "h";
                  } else if (e.substr(s, 5).toUpperCase() === "上午/下午") {
                    if (f != null) m.v = f.H >= 12 ? "下午" : "上午";
                    m.t = "T";
                    s += 5;
                    d = "h";
                  } else {
                    m.t = "t";
                    ++s;
                  }

                  if (f == null && m.t === "T") return "";
                  n[n.length] = m;
                  o = l;
                  break;

                case "[":
                  i = l;

                  while (e.charAt(s++) !== "]" && s < e.length) {
                    i += e.charAt(s);
                  }

                  if (i.slice(-1) !== "]") throw 'unterminated "[" block: |' + i + "|";

                  if (i.match(M)) {
                    if (f == null) {
                      f = w(r, t);
                      if (f == null) return "";
                    }

                    n[n.length] = {
                      t: "Z",
                      v: i.toLowerCase()
                    };
                    o = i.charAt(1);
                  } else if (i.indexOf("$") > -1) {
                    i = (i.match(/\$([^-\[\]]*)/) || [])[1] || "$";
                    if (!N(e)) n[n.length] = {
                      t: "t",
                      v: i
                    };
                  }

                  break;

                case ".":
                  if (f != null) {
                    i = l;

                    while (++s < e.length && (l = e.charAt(s)) === "0") {
                      i += l;
                    }

                    n[n.length] = {
                      t: "s",
                      v: i
                    };
                    break;
                  }

                  ;

                case "0":
                  ;

                case "#":
                  i = l;

                  while (++s < e.length && "0#?.,E+-%".indexOf(l = e.charAt(s)) > -1) {
                    i += l;
                  }

                  n[n.length] = {
                    t: "n",
                    v: i
                  };
                  break;

                case "?":
                  i = l;

                  while (e.charAt(++s) === l) {
                    i += l;
                  }

                  n[n.length] = {
                    t: l,
                    v: i
                  };
                  o = l;
                  break;

                case "*":
                  ++s;
                  if (e.charAt(s) == " " || e.charAt(s) == "*") ++s;
                  break;

                case "(":
                  ;

                case ")":
                  n[n.length] = {
                    t: a === 1 ? "t" : l,
                    v: l
                  };
                  ++s;
                  break;

                case "1":
                  ;

                case "2":
                  ;

                case "3":
                  ;

                case "4":
                  ;

                case "5":
                  ;

                case "6":
                  ;

                case "7":
                  ;

                case "8":
                  ;

                case "9":
                  i = l;

                  while (s < e.length && "0123456789".indexOf(e.charAt(++s)) > -1) {
                    i += e.charAt(s);
                  }

                  n[n.length] = {
                    t: "D",
                    v: i
                  };
                  break;

                case " ":
                  n[n.length] = {
                    t: l,
                    v: l
                  };
                  ++s;
                  break;

                case "$":
                  n[n.length] = {
                    t: "t",
                    v: "$"
                  };
                  ++s;
                  break;

                default:
                  if (",$-+/():!^&'~{}<>=€acfijklopqrtuvwxzP".indexOf(l) === -1) throw new Error("unrecognized character " + l + " in " + e);
                  n[n.length] = {
                    t: "t",
                    v: l
                  };
                  ++s;
                  break;
              }
            }

            var g = 0,
                b = 0,
                k;

            for (s = n.length - 1, o = "t"; s >= 0; --s) {
              switch (n[s].t) {
                case "h":
                  ;

                case "H":
                  n[s].t = d;
                  o = "h";
                  if (g < 1) g = 1;
                  break;

                case "s":
                  if (k = n[s].v.match(/\.0+$/)) b = Math.max(b, k[0].length - 1);
                  if (g < 3) g = 3;

                case "d":
                  ;

                case "y":
                  ;

                case "M":
                  ;

                case "e":
                  o = n[s].t;
                  break;

                case "m":
                  if (o === "s") {
                    n[s].t = "M";
                    if (g < 2) g = 2;
                  }

                  break;

                case "X":
                  break;

                case "Z":
                  if (g < 1 && n[s].v.match(/[Hh]/)) g = 1;
                  if (g < 2 && n[s].v.match(/[Mm]/)) g = 2;
                  if (g < 3 && n[s].v.match(/[Ss]/)) g = 3;
              }
            }

            switch (g) {
              case 0:
                break;

              case 1:
                if (f.u >= .5) {
                  f.u = 0;
                  ++f.S;
                }

                if (f.S >= 60) {
                  f.S = 0;
                  ++f.M;
                }

                if (f.M >= 60) {
                  f.M = 0;
                  ++f.H;
                }

                break;

              case 2:
                if (f.u >= .5) {
                  f.u = 0;
                  ++f.S;
                }

                if (f.S >= 60) {
                  f.S = 0;
                  ++f.M;
                }

                break;
            }

            var y = "",
                x;

            for (s = 0; s < n.length; ++s) {
              switch (n[s].t) {
                case "t":
                  ;

                case "T":
                  ;

                case " ":
                  ;

                case "D":
                  break;

                case "X":
                  n[s].v = "";
                  n[s].t = ";";
                  break;

                case "d":
                  ;

                case "m":
                  ;

                case "y":
                  ;

                case "h":
                  ;

                case "H":
                  ;

                case "M":
                  ;

                case "s":
                  ;

                case "e":
                  ;

                case "b":
                  ;

                case "Z":
                  n[s].v = F(n[s].t.charCodeAt(0), n[s].v, f, b);
                  n[s].t = "t";
                  break;

                case "n":
                  ;

                case "?":
                  x = s + 1;

                  while (n[x] != null && ((l = n[x].t) === "?" || l === "D" || (l === " " || l === "t") && n[x + 1] != null && (n[x + 1].t === "?" || n[x + 1].t === "t" && n[x + 1].v === "/") || n[s].t === "(" && (l === " " || l === "n" || l === ")") || l === "t" && (n[x].v === "/" || n[x].v === " " && n[x + 1] != null && n[x + 1].t == "?"))) {
                    n[s].v += n[x].v;
                    n[x] = {
                      v: "",
                      t: ";"
                    };
                    ++x;
                  }

                  y += n[s].v;
                  s = x - 1;
                  break;

                case "G":
                  n[s].t = "t";
                  n[s].v = A(r, t);
                  break;
              }
            }

            var _ = "",
                C,
                S;

            if (y.length > 0) {
              if (y.charCodeAt(0) == 40) {
                C = r < 0 && y.charCodeAt(0) === 45 ? -r : r;
                S = O("n", y, C);
              } else {
                C = r < 0 && a > 1 ? -r : r;
                S = O("n", y, C);

                if (C < 0 && n[0] && n[0].t == "t") {
                  S = S.substr(1);
                  n[0].v = "-" + n[0].v;
                }
              }

              x = S.length - 1;
              var E = n.length;

              for (s = 0; s < n.length; ++s) {
                if (n[s] != null && n[s].t != "t" && n[s].v.indexOf(".") > -1) {
                  E = s;
                  break;
                }
              }

              var T = n.length;

              if (E === n.length && S.indexOf("E") === -1) {
                for (s = n.length - 1; s >= 0; --s) {
                  if (n[s] == null || "n?".indexOf(n[s].t) === -1) continue;

                  if (x >= n[s].v.length - 1) {
                    x -= n[s].v.length;
                    n[s].v = S.substr(x + 1, n[s].v.length);
                  } else if (x < 0) n[s].v = "";else {
                    n[s].v = S.substr(0, x + 1);
                    x = -1;
                  }

                  n[s].t = "t";
                  T = s;
                }

                if (x >= 0 && T < n.length) n[T].v = S.substr(0, x + 1) + n[T].v;
              } else if (E !== n.length && S.indexOf("E") === -1) {
                x = S.indexOf(".") - 1;

                for (s = E; s >= 0; --s) {
                  if (n[s] == null || "n?".indexOf(n[s].t) === -1) continue;
                  h = n[s].v.indexOf(".") > -1 && s === E ? n[s].v.indexOf(".") - 1 : n[s].v.length - 1;
                  _ = n[s].v.substr(h + 1);

                  for (; h >= 0; --h) {
                    if (x >= 0 && (n[s].v.charAt(h) === "0" || n[s].v.charAt(h) === "#")) _ = S.charAt(x--) + _;
                  }

                  n[s].v = _;
                  n[s].t = "t";
                  T = s;
                }

                if (x >= 0 && T < n.length) n[T].v = S.substr(0, x + 1) + n[T].v;
                x = S.indexOf(".") + 1;

                for (s = E; s < n.length; ++s) {
                  if (n[s] == null || "n?(".indexOf(n[s].t) === -1 && s !== E) continue;
                  h = n[s].v.indexOf(".") > -1 && s === E ? n[s].v.indexOf(".") + 1 : 0;
                  _ = n[s].v.substr(0, h);

                  for (; h < n[s].v.length; ++h) {
                    if (x < S.length) _ += S.charAt(x++);
                  }

                  n[s].v = _;
                  n[s].t = "t";
                  T = s;
                }
              }
            }

            for (s = 0; s < n.length; ++s) {
              if (n[s] != null && "n?".indexOf(n[s].t) > -1) {
                C = a > 1 && r < 0 && s > 0 && n[s - 1].v === "-" ? -r : r;
                n[s].v = O(n[s].t, n[s].v, C);
                n[s].t = "t";
              }
            }

            var D = "";

            for (s = 0; s !== n.length; ++s) {
              if (n[s] != null) D += n[s].v;
            }

            return D;
          }

          e._eval = P;
          var R = /\[[=<>]/;
          var I = /\[(=|>[=]?|<[>=]?)(-?\d+(?:\.\d*)?)\]/;

          function L(e, r) {
            if (r == null) return false;
            var t = parseFloat(r[2]);

            switch (r[1]) {
              case "=":
                if (e == t) return true;
                break;

              case ">":
                if (e > t) return true;
                break;

              case "<":
                if (e < t) return true;
                break;

              case "<>":
                if (e != t) return true;
                break;

              case ">=":
                if (e >= t) return true;
                break;

              case "<=":
                if (e <= t) return true;
                break;
            }

            return false;
          }

          function B(e, r) {
            var t = D(e);
            var a = t.length,
                n = t[a - 1].indexOf("@");
            if (a < 4 && n > -1) --a;
            if (t.length > 4) throw new Error("cannot find right format for |" + t.join("|") + "|");
            if (typeof r !== "number") return [4, t.length === 4 || n > -1 ? t[t.length - 1] : "@"];

            switch (t.length) {
              case 1:
                t = n > -1 ? ["General", "General", "General", t[0]] : [t[0], t[0], t[0], "@"];
                break;

              case 2:
                t = n > -1 ? [t[0], t[0], t[0], t[1]] : [t[0], t[1], t[0], "@"];
                break;

              case 3:
                t = n > -1 ? [t[0], t[1], t[0], t[2]] : [t[0], t[1], t[2], "@"];
                break;

              case 4:
                break;
            }

            var i = r > 0 ? t[0] : r < 0 ? t[1] : t[2];
            if (t[0].indexOf("[") === -1 && t[1].indexOf("[") === -1) return [a, i];

            if (t[0].match(R) != null || t[1].match(R) != null) {
              var s = t[0].match(I);
              var l = t[1].match(I);
              return L(r, s) ? [a, t[0]] : L(r, l) ? [a, t[1]] : [a, t[s != null && l != null ? 2 : 1]];
            }

            return [a, i];
          }

          function z(e, r, t) {
            if (t == null) t = {};
            var a = "";

            switch (typeof e) {
              case "string":
                if (e == "m/d/yy" && t.dateNF) a = t.dateNF;else a = e;
                break;

              case "number":
                if (e == 14 && t.dateNF) a = t.dateNF;else a = (t.table != null ? t.table : p)[e];
                if (a == null) a = t.table && t.table[v[e]] || p[v[e]];
                if (a == null) a = g[e] || "General";
                break;
            }

            if (c(a, 0)) return A(r, t);
            if (r instanceof Date) r = _(r, t.date1904);
            var n = B(a, r);
            if (c(n[1])) return A(r, t);
            if (r === true) r = "TRUE";else if (r === false) r = "FALSE";else if (r === "" || r == null) return "";
            return P(n[1], r, t, n[0]);
          }

          function W(e, r) {
            if (typeof r != "number") {
              r = +r || -1;

              for (var t = 0; t < 392; ++t) {
                if (p[t] == undefined) {
                  if (r < 0) r = t;
                  continue;
                }

                if (p[t] == e) {
                  r = t;
                  break;
                }
              }

              if (r < 0) r = 391;
            }

            p[r] = e;
            return r;
          }

          e.load = W;
          e._table = p;

          e.get_table = function j() {
            return p;
          };

          e.load_table = function H(e) {
            for (var r = 0; r != 392; ++r) {
              if (e[r] !== undefined) W(e[r], r);
            }
          };

          e.init_table = d;
          e.format = z;
        };

        P(N);
        var R = {
          "General Number": "General",
          "General Date": N._table[22],
          "Long Date": "dddd, mmmm dd, yyyy",
          "Medium Date": N._table[15],
          "Short Date": N._table[14],
          "Long Time": N._table[19],
          "Medium Time": N._table[18],
          "Short Time": N._table[20],
          Currency: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
          Fixed: N._table[2],
          Standard: N._table[4],
          Percent: N._table[10],
          Scientific: N._table[11],
          "Yes/No": '"Yes";"Yes";"No";@',
          "True/False": '"True";"True";"False";@',
          "On/Off": '"Yes";"Yes";"No";@'
        };
        var I = {
          5: '"$"#,##0_);\\("$"#,##0\\)',
          6: '"$"#,##0_);[Red]\\("$"#,##0\\)',
          7: '"$"#,##0.00_);\\("$"#,##0.00\\)',
          8: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
          23: "General",
          24: "General",
          25: "General",
          26: "General",
          27: "m/d/yy",
          28: "m/d/yy",
          29: "m/d/yy",
          30: "m/d/yy",
          31: "m/d/yy",
          32: "h:mm:ss",
          33: "h:mm:ss",
          34: "h:mm:ss",
          35: "h:mm:ss",
          36: "m/d/yy",
          41: '_(* #,##0_);_(* (#,##0);_(* "-"_);_(@_)',
          42: '_("$"* #,##0_);_("$"* (#,##0);_("$"* "-"_);_(@_)',
          43: '_(* #,##0.00_);_(* (#,##0.00);_(* "-"??_);_(@_)',
          44: '_("$"* #,##0.00_);_("$"* (#,##0.00);_("$"* "-"??_);_(@_)',
          50: "m/d/yy",
          51: "m/d/yy",
          52: "m/d/yy",
          53: "m/d/yy",
          54: "m/d/yy",
          55: "m/d/yy",
          56: "m/d/yy",
          57: "m/d/yy",
          58: "m/d/yy",
          59: "0",
          60: "0.00",
          61: "#,##0",
          62: "#,##0.00",
          63: '"$"#,##0_);\\("$"#,##0\\)',
          64: '"$"#,##0_);[Red]\\("$"#,##0\\)',
          65: '"$"#,##0.00_);\\("$"#,##0.00\\)',
          66: '"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',
          67: "0%",
          68: "0.00%",
          69: "# ?/?",
          70: "# ??/??",
          71: "m/d/yy",
          72: "m/d/yy",
          73: "d-mmm-yy",
          74: "d-mmm",
          75: "mmm-yy",
          76: "h:mm",
          77: "h:mm:ss",
          78: "m/d/yy h:mm",
          79: "mm:ss",
          80: "[h]:mm:ss",
          81: "mmss.0"
        };
        var L = /[dD]+|[mM]+|[yYeE]+|[Hh]+|[Ss]+/g;

        function B(e) {
          var r = typeof e == "number" ? N._table[e] : e;
          r = r.replace(L, "(\\d+)");
          return new RegExp("^" + r + "$");
        }

        function z(e, r, t) {
          var a = -1,
              n = -1,
              i = -1,
              s = -1,
              l = -1,
              o = -1;
          (r.match(L) || []).forEach(function (e, r) {
            var f = parseInt(t[r + 1], 10);

            switch (e.toLowerCase().charAt(0)) {
              case "y":
                a = f;
                break;

              case "d":
                i = f;
                break;

              case "h":
                s = f;
                break;

              case "s":
                o = f;
                break;

              case "m":
                if (s >= 0) l = f;else n = f;
                break;
            }
          });

          if (o >= 0 && l == -1 && n >= 0) {
            l = n;
            n = -1;
          }

          var f = ("" + (a >= 0 ? a : new Date().getFullYear())).slice(-4) + "-" + ("00" + (n >= 1 ? n : 1)).slice(-2) + "-" + ("00" + (i >= 1 ? i : 1)).slice(-2);
          if (f.length == 7) f = "0" + f;
          if (f.length == 8) f = "20" + f;
          var c = ("00" + (s >= 0 ? s : 0)).slice(-2) + ":" + ("00" + (l >= 0 ? l : 0)).slice(-2) + ":" + ("00" + (o >= 0 ? o : 0)).slice(-2);
          if (s == -1 && l == -1 && o == -1) return f;
          if (a == -1 && n == -1 && i == -1) return c;
          return f + "T" + c;
        }

        var W = true;
        var U;

        (function (e) {
          e(U = {});
        })(function (e) {
          e.version = "1.2.0";

          function r() {
            var e = 0,
                r = new Array(256);

            for (var t = 0; t != 256; ++t) {
              e = t;
              e = e & 1 ? -306674912 ^ e >>> 1 : e >>> 1;
              e = e & 1 ? -306674912 ^ e >>> 1 : e >>> 1;
              e = e & 1 ? -306674912 ^ e >>> 1 : e >>> 1;
              e = e & 1 ? -306674912 ^ e >>> 1 : e >>> 1;
              e = e & 1 ? -306674912 ^ e >>> 1 : e >>> 1;
              e = e & 1 ? -306674912 ^ e >>> 1 : e >>> 1;
              e = e & 1 ? -306674912 ^ e >>> 1 : e >>> 1;
              e = e & 1 ? -306674912 ^ e >>> 1 : e >>> 1;
              r[t] = e;
            }

            return typeof Int32Array !== "undefined" ? new Int32Array(r) : r;
          }

          var t = r();

          function a(e, r) {
            var a = r ^ -1,
                n = e.length - 1;

            for (var i = 0; i < n;) {
              a = a >>> 8 ^ t[(a ^ e.charCodeAt(i++)) & 255];
              a = a >>> 8 ^ t[(a ^ e.charCodeAt(i++)) & 255];
            }

            if (i === n) a = a >>> 8 ^ t[(a ^ e.charCodeAt(i)) & 255];
            return a ^ -1;
          }

          function n(e, r) {
            if (e.length > 1e4) return i(e, r);
            var a = r ^ -1,
                n = e.length - 3;

            for (var s = 0; s < n;) {
              a = a >>> 8 ^ t[(a ^ e[s++]) & 255];
              a = a >>> 8 ^ t[(a ^ e[s++]) & 255];
              a = a >>> 8 ^ t[(a ^ e[s++]) & 255];
              a = a >>> 8 ^ t[(a ^ e[s++]) & 255];
            }

            while (s < n + 3) {
              a = a >>> 8 ^ t[(a ^ e[s++]) & 255];
            }

            return a ^ -1;
          }

          function i(e, r) {
            var a = r ^ -1,
                n = e.length - 7;

            for (var i = 0; i < n;) {
              a = a >>> 8 ^ t[(a ^ e[i++]) & 255];
              a = a >>> 8 ^ t[(a ^ e[i++]) & 255];
              a = a >>> 8 ^ t[(a ^ e[i++]) & 255];
              a = a >>> 8 ^ t[(a ^ e[i++]) & 255];
              a = a >>> 8 ^ t[(a ^ e[i++]) & 255];
              a = a >>> 8 ^ t[(a ^ e[i++]) & 255];
              a = a >>> 8 ^ t[(a ^ e[i++]) & 255];
              a = a >>> 8 ^ t[(a ^ e[i++]) & 255];
            }

            while (i < n + 7) {
              a = a >>> 8 ^ t[(a ^ e[i++]) & 255];
            }

            return a ^ -1;
          }

          function s(e, r) {
            var a = r ^ -1;

            for (var n = 0, i = e.length, s, l; n < i;) {
              s = e.charCodeAt(n++);

              if (s < 128) {
                a = a >>> 8 ^ t[(a ^ s) & 255];
              } else if (s < 2048) {
                a = a >>> 8 ^ t[(a ^ (192 | s >> 6 & 31)) & 255];
                a = a >>> 8 ^ t[(a ^ (128 | s & 63)) & 255];
              } else if (s >= 55296 && s < 57344) {
                s = (s & 1023) + 64;
                l = e.charCodeAt(n++) & 1023;
                a = a >>> 8 ^ t[(a ^ (240 | s >> 8 & 7)) & 255];
                a = a >>> 8 ^ t[(a ^ (128 | s >> 2 & 63)) & 255];
                a = a >>> 8 ^ t[(a ^ (128 | l >> 6 & 15 | (s & 3) << 4)) & 255];
                a = a >>> 8 ^ t[(a ^ (128 | l & 63)) & 255];
              } else {
                a = a >>> 8 ^ t[(a ^ (224 | s >> 12 & 15)) & 255];
                a = a >>> 8 ^ t[(a ^ (128 | s >> 6 & 63)) & 255];
                a = a >>> 8 ^ t[(a ^ (128 | s & 63)) & 255];
              }
            }

            return a ^ -1;
          }

          e.table = t;
          e.bstr = a;
          e.buf = n;
          e.str = s;
        });

        var j = function Wl() {
          var e = {};
          e.version = "1.1.4";

          function r(e, r) {
            var t = e.split("/"),
                a = r.split("/");

            for (var n = 0, i = 0, s = Math.min(t.length, a.length); n < s; ++n) {
              if (i = t[n].length - a[n].length) return i;
              if (t[n] != a[n]) return t[n] < a[n] ? -1 : 1;
            }

            return t.length - a.length;
          }

          function t(e) {
            if (e.charAt(e.length - 1) == "/") return e.slice(0, -1).indexOf("/") === -1 ? e : t(e.slice(0, -1));
            var r = e.lastIndexOf("/");
            return r === -1 ? e : e.slice(0, r + 1);
          }

          function a(e) {
            if (e.charAt(e.length - 1) == "/") return a(e.slice(0, -1));
            var r = e.lastIndexOf("/");
            return r === -1 ? e : e.slice(r + 1);
          }

          function n(e, r) {
            if (typeof r === "string") r = new Date(r);
            var t = r.getHours();
            t = t << 6 | r.getMinutes();
            t = t << 5 | r.getSeconds() >>> 1;

            e._W(2, t);

            var a = r.getFullYear() - 1980;
            a = a << 4 | r.getMonth() + 1;
            a = a << 5 | r.getDate();

            e._W(2, a);
          }

          function i(e) {
            var r = e._R(2) & 65535;
            var t = e._R(2) & 65535;
            var a = new Date();
            var n = t & 31;
            t >>>= 5;
            var i = t & 15;
            t >>>= 4;
            a.setMilliseconds(0);
            a.setFullYear(t + 1980);
            a.setMonth(i - 1);
            a.setDate(n);
            var s = r & 31;
            r >>>= 5;
            var l = r & 63;
            r >>>= 6;
            a.setHours(r);
            a.setMinutes(l);
            a.setSeconds(s << 1);
            return a;
          }

          function s(e) {
            Yr(e, 0);
            var r = {};
            var t = 0;

            while (e.l <= e.length - 4) {
              var a = e._R(2);

              var n = e._R(2),
                  i = e.l + n;

              var s = {};

              switch (a) {
                case 21589:
                  {
                    t = e._R(1);
                    if (t & 1) s.mtime = e._R(4);

                    if (n > 5) {
                      if (t & 2) s.atime = e._R(4);
                      if (t & 4) s.ctime = e._R(4);
                    }

                    if (s.mtime) s.mt = new Date(s.mtime * 1e3);
                  }
                  break;
              }

              e.l = i;
              r[a] = s;
            }

            return r;
          }

          var l;

          function o() {
            return l || (l = __webpack_require__(
            /*! fs */
            4));
          }

          function f(e, r) {
            if (e[0] == 80 && e[1] == 75) return Ae(e, r);
            if (e.length < 512) throw new Error("CFB file size " + e.length + " < 512");
            var t = 3;
            var a = 512;
            var n = 0;
            var i = 0;
            var s = 0;
            var l = 0;
            var o = 0;
            var f = [];
            var p = e.slice(0, 512);
            Yr(p, 0);
            var m = c(p);
            t = m[0];

            switch (t) {
              case 3:
                a = 512;
                break;

              case 4:
                a = 4096;
                break;

              case 0:
                if (m[1] == 0) return Ae(e, r);

              default:
                throw new Error("Major Version: Expected 3 or 4 saw " + t);
            }

            if (a !== 512) {
              p = e.slice(0, a);
              Yr(p, 28);
            }

            var b = e.slice(0, a);
            h(p, t);

            var w = p._R(4, "i");

            if (t === 3 && w !== 0) throw new Error("# Directory Sectors: Expected 0 saw " + w);
            p.l += 4;
            s = p._R(4, "i");
            p.l += 4;
            p.chk("00100000", "Mini Stream Cutoff Size: ");
            l = p._R(4, "i");
            n = p._R(4, "i");
            o = p._R(4, "i");
            i = p._R(4, "i");

            for (var y = -1, x = 0; x < 109; ++x) {
              y = p._R(4, "i");
              if (y < 0) break;
              f[x] = y;
            }

            var _ = u(e, a);

            v(o, i, _, a, f);
            var C = g(_, s, f, a);
            C[s].name = "!Directory";
            if (n > 0 && l !== I) C[l].name = "!MiniFAT";
            C[f[0]].name = "!FAT";
            C.fat_addrs = f;
            C.ssz = a;
            var S = {},
                A = [],
                E = [],
                F = [];
            k(s, C, _, A, n, S, E, l);
            d(E, F, A);
            A.shift();
            var T = {
              FileIndex: E,
              FullPaths: F
            };
            if (r && r.raw) T.raw = {
              header: b,
              sectors: _
            };
            return T;
          }

          function c(e) {
            if (e[e.l] == 80 && e[e.l + 1] == 75) return [0, 0];
            e.chk(L, "Header Signature: ");
            e.l += 16;

            var r = e._R(2, "u");

            return [e._R(2, "u"), r];
          }

          function h(e, r) {
            var t = 9;
            e.l += 2;

            switch (t = e._R(2)) {
              case 9:
                if (r != 3) throw new Error("Sector Shift: Expected 9 saw " + t);
                break;

              case 12:
                if (r != 4) throw new Error("Sector Shift: Expected 12 saw " + t);
                break;

              default:
                throw new Error("Sector Shift: Expected 9 or 12 saw " + t);
            }

            e.chk("0600", "Mini Sector Shift: ");
            e.chk("000000000000", "Reserved: ");
          }

          function u(e, r) {
            var t = Math.ceil(e.length / r) - 1;
            var a = [];

            for (var n = 1; n < t; ++n) {
              a[n - 1] = e.slice(n * r, (n + 1) * r);
            }

            a[t - 1] = e.slice(t * r);
            return a;
          }

          function d(e, r, t) {
            var a = 0,
                n = 0,
                i = 0,
                s = 0,
                l = 0,
                o = t.length;
            var f = [],
                c = [];

            for (; a < o; ++a) {
              f[a] = c[a] = a;
              r[a] = t[a];
            }

            for (; l < c.length; ++l) {
              a = c[l];
              n = e[a].L;
              i = e[a].R;
              s = e[a].C;

              if (f[a] === a) {
                if (n !== -1 && f[n] !== n) f[a] = f[n];
                if (i !== -1 && f[i] !== i) f[a] = f[i];
              }

              if (s !== -1) f[s] = a;

              if (n !== -1 && a != f[a]) {
                f[n] = f[a];
                if (c.lastIndexOf(n) < l) c.push(n);
              }

              if (i !== -1 && a != f[a]) {
                f[i] = f[a];
                if (c.lastIndexOf(i) < l) c.push(i);
              }
            }

            for (a = 1; a < o; ++a) {
              if (f[a] === a) {
                if (i !== -1 && f[i] !== i) f[a] = f[i];else if (n !== -1 && f[n] !== n) f[a] = f[n];
              }
            }

            for (a = 1; a < o; ++a) {
              if (e[a].type === 0) continue;
              l = a;
              if (l != f[l]) do {
                l = f[l];
                r[a] = r[l] + "/" + r[a];
              } while (l !== 0 && -1 !== f[l] && l != f[l]);
              f[a] = -1;
            }

            r[0] += "/";

            for (a = 1; a < o; ++a) {
              if (e[a].type !== 2) r[a] += "/";
            }
          }

          function p(e, r, t) {
            var a = e.start,
                n = e.size;
            var i = [];
            var s = a;

            while (t && n > 0 && s >= 0) {
              i.push(r.slice(s * R, s * R + R));
              n -= R;
              s = Wr(t, s * 4);
            }

            if (i.length === 0) return Kr(0);
            return O(i).slice(0, e.size);
          }

          function v(e, r, t, a, n) {
            var i = I;

            if (e === I) {
              if (r !== 0) throw new Error("DIFAT chain shorter than expected");
            } else if (e !== -1) {
              var s = t[e],
                  l = (a >>> 2) - 1;
              if (!s) return;

              for (var o = 0; o < l; ++o) {
                if ((i = Wr(s, o * 4)) === I) break;
                n.push(i);
              }

              v(Wr(s, a - 4), r - 1, t, a, n);
            }
          }

          function m(e, r, t, a, n) {
            var i = [],
                s = [];
            if (!n) n = [];
            var l = a - 1,
                o = 0,
                f = 0;

            for (o = r; o >= 0;) {
              n[o] = true;
              i[i.length] = o;
              s.push(e[o]);
              var c = t[Math.floor(o * 4 / a)];
              f = o * 4 & l;
              if (a < 4 + f) throw new Error("FAT boundary crossed: " + o + " 4 " + a);
              if (!e[c]) break;
              o = Wr(e[c], f);
            }

            return {
              nodes: i,
              data: vr([s])
            };
          }

          function g(e, r, t, a) {
            var n = e.length,
                i = [];
            var s = [],
                l = [],
                o = [];
            var f = a - 1,
                c = 0,
                h = 0,
                u = 0,
                d = 0;

            for (c = 0; c < n; ++c) {
              l = [];
              u = c + r;
              if (u >= n) u -= n;
              if (s[u]) continue;
              o = [];
              var p = [];

              for (h = u; h >= 0;) {
                p[h] = true;
                s[h] = true;
                l[l.length] = h;
                o.push(e[h]);
                var v = t[Math.floor(h * 4 / a)];
                d = h * 4 & f;
                if (a < 4 + d) throw new Error("FAT boundary crossed: " + h + " 4 " + a);
                if (!e[v]) break;
                h = Wr(e[v], d);
                if (p[h]) break;
              }

              i[u] = {
                nodes: l,
                data: vr([o])
              };
            }

            return i;
          }

          function k(e, r, t, a, n, i, s, l) {
            var o = 0,
                f = a.length ? 2 : 0;
            var c = r[e].data;
            var h = 0,
                u = 0,
                d;

            for (; h < c.length; h += 128) {
              var v = c.slice(h, h + 128);
              Yr(v, 64);
              u = v._R(2);
              d = gr(v, 0, u - f);
              a.push(d);
              var g = {
                name: d,
                type: v._R(1),
                color: v._R(1),
                L: v._R(4, "i"),
                R: v._R(4, "i"),
                C: v._R(4, "i"),
                clsid: v._R(16),
                state: v._R(4, "i"),
                start: 0,
                size: 0
              };

              var b = v._R(2) + v._R(2) + v._R(2) + v._R(2);

              if (b !== 0) g.ct = y(v, v.l - 8);

              var w = v._R(2) + v._R(2) + v._R(2) + v._R(2);

              if (w !== 0) g.mt = y(v, v.l - 8);
              g.start = v._R(4, "i");
              g.size = v._R(4, "i");

              if (g.size < 0 && g.start < 0) {
                g.size = g.type = 0;
                g.start = I;
                g.name = "";
              }

              if (g.type === 5) {
                o = g.start;
                if (n > 0 && o !== I) r[o].name = "!StreamData";
              } else if (g.size >= 4096) {
                g.storage = "fat";
                if (r[g.start] === undefined) r[g.start] = m(t, g.start, r.fat_addrs, r.ssz);
                r[g.start].name = g.name;
                g.content = r[g.start].data.slice(0, g.size);
              } else {
                g.storage = "minifat";
                if (g.size < 0) g.size = 0;else if (o !== I && g.start !== I && r[o]) {
                  g.content = p(g, r[o].data, (r[l] || {}).data);
                }
              }

              if (g.content) Yr(g.content, 0);
              i[d] = g;
              s.push(g);
            }
          }

          function y(e, r) {
            return new Date((zr(e, r + 4) / 1e7 * Math.pow(2, 32) + zr(e, r) / 1e7 - 11644473600) * 1e3);
          }

          function x(e, r) {
            o();
            return f(l.readFileSync(e), r);
          }

          function A(e, r) {
            switch (r && r.type || "base64") {
              case "file":
                return x(e, r);

              case "base64":
                return f(S(b.decode(e)), r);

              case "binary":
                return f(S(e), r);
            }

            return f(e, r);
          }

          function E(e, r) {
            var t = r || {},
                a = t.root || "Root Entry";
            if (!e.FullPaths) e.FullPaths = [];
            if (!e.FileIndex) e.FileIndex = [];
            if (e.FullPaths.length !== e.FileIndex.length) throw new Error("inconsistent CFB structure");

            if (e.FullPaths.length === 0) {
              e.FullPaths[0] = a + "/";
              e.FileIndex[0] = {
                name: a,
                type: 5
              };
            }

            if (t.CLSID) e.FileIndex[0].clsid = t.CLSID;
            F(e);
          }

          function F(e) {
            var r = "Sh33tJ5";
            if (j.find(e, "/" + r)) return;
            var t = Kr(4);
            t[0] = 55;
            t[1] = t[3] = 50;
            t[2] = 54;
            e.FileIndex.push({
              name: r,
              type: 2,
              content: t,
              size: 4,
              L: 69,
              R: 69,
              C: 69
            });
            e.FullPaths.push(e.FullPaths[0] + r);
            T(e);
          }

          function T(e, n) {
            E(e);
            var i = false,
                s = false;

            for (var l = e.FullPaths.length - 1; l >= 0; --l) {
              var o = e.FileIndex[l];

              switch (o.type) {
                case 0:
                  if (s) i = true;else {
                    e.FileIndex.pop();
                    e.FullPaths.pop();
                  }
                  break;

                case 1:
                  ;

                case 2:
                  ;

                case 5:
                  s = true;
                  if (isNaN(o.R * o.L * o.C)) i = true;
                  if (o.R > -1 && o.L > -1 && o.R == o.L) i = true;
                  break;

                default:
                  i = true;
                  break;
              }
            }

            if (!i && !n) return;
            var f = new Date(1987, 1, 19),
                c = 0;
            var h = [];

            for (l = 0; l < e.FullPaths.length; ++l) {
              if (e.FileIndex[l].type === 0) continue;
              h.push([e.FullPaths[l], e.FileIndex[l]]);
            }

            for (l = 0; l < h.length; ++l) {
              var u = t(h[l][0]);
              s = false;

              for (c = 0; c < h.length; ++c) {
                if (h[c][0] === u) s = true;
              }

              if (!s) h.push([u, {
                name: a(u).replace("/", ""),
                type: 1,
                clsid: z,
                ct: f,
                mt: f,
                content: null
              }]);
            }

            h.sort(function (e, t) {
              return r(e[0], t[0]);
            });
            e.FullPaths = [];
            e.FileIndex = [];

            for (l = 0; l < h.length; ++l) {
              e.FullPaths[l] = h[l][0];
              e.FileIndex[l] = h[l][1];
            }

            for (l = 0; l < h.length; ++l) {
              var d = e.FileIndex[l];
              var p = e.FullPaths[l];
              d.name = a(p).replace("/", "");
              d.L = d.R = d.C = -(d.color = 1);
              d.size = d.content ? d.content.length : 0;
              d.start = 0;
              d.clsid = d.clsid || z;

              if (l === 0) {
                d.C = h.length > 1 ? 1 : -1;
                d.size = 0;
                d.type = 5;
              } else if (p.slice(-1) == "/") {
                for (c = l + 1; c < h.length; ++c) {
                  if (t(e.FullPaths[c]) == p) break;
                }

                d.C = c >= h.length ? -1 : c;

                for (c = l + 1; c < h.length; ++c) {
                  if (t(e.FullPaths[c]) == t(p)) break;
                }

                d.R = c >= h.length ? -1 : c;
                d.type = 1;
              } else {
                if (t(e.FullPaths[l + 1] || "") == t(p)) d.R = l + 1;
                d.type = 2;
              }
            }
          }

          function N(e, r) {
            var t = r || {};
            T(e);
            if (t.fileType == "zip") return Fe(e, t);

            var a = function (e) {
              var r = 0,
                  t = 0;

              for (var a = 0; a < e.FileIndex.length; ++a) {
                var n = e.FileIndex[a];
                if (!n.content) continue;
                var i = n.content.length;

                if (i > 0) {
                  if (i < 4096) r += i + 63 >> 6;else t += i + 511 >> 9;
                }
              }

              var s = e.FullPaths.length + 3 >> 2;
              var l = r + 7 >> 3;
              var o = r + 127 >> 7;
              var f = l + t + s + o;
              var c = f + 127 >> 7;
              var h = c <= 109 ? 0 : Math.ceil((c - 109) / 127);

              while (f + c + h + 127 >> 7 > c) {
                h = ++c <= 109 ? 0 : Math.ceil((c - 109) / 127);
              }

              var u = [1, h, c, o, s, t, r, 0];
              e.FileIndex[0].size = r << 6;
              u[7] = (e.FileIndex[0].start = u[0] + u[1] + u[2] + u[3] + u[4] + u[5]) + (u[6] + 7 >> 3);
              return u;
            }(e);

            var n = Kr(a[7] << 9);
            var i = 0,
                s = 0;
            {
              for (i = 0; i < 8; ++i) {
                n._W(1, B[i]);
              }

              for (i = 0; i < 8; ++i) {
                n._W(2, 0);
              }

              n._W(2, 62);

              n._W(2, 3);

              n._W(2, 65534);

              n._W(2, 9);

              n._W(2, 6);

              for (i = 0; i < 3; ++i) {
                n._W(2, 0);
              }

              n._W(4, 0);

              n._W(4, a[2]);

              n._W(4, a[0] + a[1] + a[2] + a[3] - 1);

              n._W(4, 0);

              n._W(4, 1 << 12);

              n._W(4, a[3] ? a[0] + a[1] + a[2] - 1 : I);

              n._W(4, a[3]);

              n._W(-4, a[1] ? a[0] - 1 : I);

              n._W(4, a[1]);

              for (i = 0; i < 109; ++i) {
                n._W(-4, i < a[2] ? a[1] + i : -1);
              }
            }

            if (a[1]) {
              for (s = 0; s < a[1]; ++s) {
                for (; i < 236 + s * 127; ++i) {
                  n._W(-4, i < a[2] ? a[1] + i : -1);
                }

                n._W(-4, s === a[1] - 1 ? I : s + 1);
              }
            }

            var l = function l(e) {
              for (s += e; i < s - 1; ++i) {
                n._W(-4, i + 1);
              }

              if (e) {
                ++i;

                n._W(-4, I);
              }
            };

            s = i = 0;

            for (s += a[1]; i < s; ++i) {
              n._W(-4, W.DIFSECT);
            }

            for (s += a[2]; i < s; ++i) {
              n._W(-4, W.FATSECT);
            }

            l(a[3]);
            l(a[4]);
            var o = 0,
                f = 0;
            var c = e.FileIndex[0];

            for (; o < e.FileIndex.length; ++o) {
              c = e.FileIndex[o];
              if (!c.content) continue;
              f = c.content.length;
              if (f < 4096) continue;
              c.start = s;
              l(f + 511 >> 9);
            }

            l(a[6] + 7 >> 3);

            while (n.l & 511) {
              n._W(-4, W.ENDOFCHAIN);
            }

            s = i = 0;

            for (o = 0; o < e.FileIndex.length; ++o) {
              c = e.FileIndex[o];
              if (!c.content) continue;
              f = c.content.length;
              if (!f || f >= 4096) continue;
              c.start = s;
              l(f + 63 >> 6);
            }

            while (n.l & 511) {
              n._W(-4, W.ENDOFCHAIN);
            }

            for (i = 0; i < a[4] << 2; ++i) {
              var h = e.FullPaths[i];

              if (!h || h.length === 0) {
                for (o = 0; o < 17; ++o) {
                  n._W(4, 0);
                }

                for (o = 0; o < 3; ++o) {
                  n._W(4, -1);
                }

                for (o = 0; o < 12; ++o) {
                  n._W(4, 0);
                }

                continue;
              }

              c = e.FileIndex[i];
              if (i === 0) c.start = c.size ? c.start - 1 : I;
              var u = i === 0 && t.root || c.name;
              f = 2 * (u.length + 1);

              n._W(64, u, "utf16le");

              n._W(2, f);

              n._W(1, c.type);

              n._W(1, c.color);

              n._W(-4, c.L);

              n._W(-4, c.R);

              n._W(-4, c.C);

              if (!c.clsid) for (o = 0; o < 4; ++o) {
                n._W(4, 0);
              } else n._W(16, c.clsid, "hex");

              n._W(4, c.state || 0);

              n._W(4, 0);

              n._W(4, 0);

              n._W(4, 0);

              n._W(4, 0);

              n._W(4, c.start);

              n._W(4, c.size);

              n._W(4, 0);
            }

            for (i = 1; i < e.FileIndex.length; ++i) {
              c = e.FileIndex[i];

              if (c.size >= 4096) {
                n.l = c.start + 1 << 9;

                for (o = 0; o < c.size; ++o) {
                  n._W(1, c.content[o]);
                }

                for (; o & 511; ++o) {
                  n._W(1, 0);
                }
              }
            }

            for (i = 1; i < e.FileIndex.length; ++i) {
              c = e.FileIndex[i];

              if (c.size > 0 && c.size < 4096) {
                for (o = 0; o < c.size; ++o) {
                  n._W(1, c.content[o]);
                }

                for (; o & 63; ++o) {
                  n._W(1, 0);
                }
              }
            }

            while (n.l < n.length) {
              n._W(1, 0);
            }

            return n;
          }

          function P(e, r) {
            var t = e.FullPaths.map(function (e) {
              return e.toUpperCase();
            });
            var a = t.map(function (e) {
              var r = e.split("/");
              return r[r.length - (e.slice(-1) == "/" ? 2 : 1)];
            });
            var n = false;

            if (r.charCodeAt(0) === 47) {
              n = true;
              r = t[0].slice(0, -1) + r;
            } else n = r.indexOf("/") !== -1;

            var i = r.toUpperCase();
            var s = n === true ? t.indexOf(i) : a.indexOf(i);
            if (s !== -1) return e.FileIndex[s];
            var l = !i.match(M);
            i = i.replace(D, "");
            if (l) i = i.replace(M, "!");

            for (s = 0; s < t.length; ++s) {
              if ((l ? t[s].replace(M, "!") : t[s]).replace(D, "") == i) return e.FileIndex[s];
              if ((l ? a[s].replace(M, "!") : a[s]).replace(D, "") == i) return e.FileIndex[s];
            }

            return null;
          }

          var R = 64;
          var I = -2;
          var L = "d0cf11e0a1b11ae1";
          var B = [208, 207, 17, 224, 161, 177, 26, 225];
          var z = "00000000000000000000000000000000";
          var W = {
            MAXREGSECT: -6,
            DIFSECT: -4,
            FATSECT: -3,
            ENDOFCHAIN: I,
            FREESECT: -1,
            HEADER_SIGNATURE: L,
            HEADER_MINOR_VERSION: "3e00",
            MAXREGSID: -6,
            NOSTREAM: -1,
            HEADER_CLSID: z,
            EntryTypes: ["unknown", "storage", "stream", "lockbytes", "property", "root"]
          };

          function $(e, r, t) {
            o();
            var a = N(e, t);
            l.writeFileSync(r, a);
          }

          function H(e) {
            var r = new Array(e.length);

            for (var t = 0; t < e.length; ++t) {
              r[t] = String.fromCharCode(e[t]);
            }

            return r.join("");
          }

          function V(e, r) {
            var t = N(e, r);

            switch (r && r.type) {
              case "file":
                o();
                l.writeFileSync(r.filename, t);
                return t;

              case "binary":
                return H(t);

              case "base64":
                return b.encode(H(t));
            }

            return t;
          }

          var X;

          function G(e) {
            try {
              var r = e.InflateRaw;
              var t = new r();

              t._processChunk(new Uint8Array([3, 0]), t._finishFlushFlag);

              if (t.bytesRead) X = e;else throw new Error("zlib does not expose bytesRead");
            } catch (a) {
              console.error("cannot use native zlib: " + (a.message || a));
            }
          }

          function Y(e, r) {
            if (!X) return Ce(e, r);
            var t = X.InflateRaw;
            var a = new t();

            var n = a._processChunk(e.slice(e.l), a._finishFlushFlag);

            e.l += a.bytesRead;
            return n;
          }

          function J(e) {
            return X ? X.deflateRawSync(e) : ue(e);
          }

          var K = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
          var q = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258];
          var Z = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577];

          function Q(e) {
            var r = (e << 1 | e << 11) & 139536 | (e << 5 | e << 15) & 558144;
            return (r >> 16 | r >> 8 | r) & 255;
          }

          var ee = typeof Uint8Array !== "undefined";
          var re = ee ? new Uint8Array(1 << 8) : [];

          for (var te = 0; te < 1 << 8; ++te) {
            re[te] = Q(te);
          }

          function ae(e, r) {
            var t = re[e & 255];
            if (r <= 8) return t >>> 8 - r;
            t = t << 8 | re[e >> 8 & 255];
            if (r <= 16) return t >>> 16 - r;
            t = t << 8 | re[e >> 16 & 255];
            return t >>> 24 - r;
          }

          function ne(e, r) {
            var t = r & 7,
                a = r >>> 3;
            return (e[a] | (t <= 6 ? 0 : e[a + 1] << 8)) >>> t & 3;
          }

          function ie(e, r) {
            var t = r & 7,
                a = r >>> 3;
            return (e[a] | (t <= 5 ? 0 : e[a + 1] << 8)) >>> t & 7;
          }

          function se(e, r) {
            var t = r & 7,
                a = r >>> 3;
            return (e[a] | (t <= 4 ? 0 : e[a + 1] << 8)) >>> t & 15;
          }

          function le(e, r) {
            var t = r & 7,
                a = r >>> 3;
            return (e[a] | (t <= 3 ? 0 : e[a + 1] << 8)) >>> t & 31;
          }

          function oe(e, r) {
            var t = r & 7,
                a = r >>> 3;
            return (e[a] | (t <= 1 ? 0 : e[a + 1] << 8)) >>> t & 127;
          }

          function fe(e, r, t) {
            var a = r & 7,
                n = r >>> 3,
                i = (1 << t) - 1;
            var s = e[n] >>> a;
            if (t < 8 - a) return s & i;
            s |= e[n + 1] << 8 - a;
            if (t < 16 - a) return s & i;
            s |= e[n + 2] << 16 - a;
            if (t < 24 - a) return s & i;
            s |= e[n + 3] << 24 - a;
            return s & i;
          }

          function ce(e, r) {
            var t = e.length,
                a = 2 * t > r ? 2 * t : r + 5,
                n = 0;
            if (t >= r) return e;

            if (w) {
              var i = C(a);
              if (e.copy) e.copy(i);else for (; n < e.length; ++n) {
                i[n] = e[n];
              }
              return i;
            } else if (ee) {
              var s = new Uint8Array(a);
              if (s.set) s.set(e);else for (; n < e.length; ++n) {
                s[n] = e[n];
              }
              return s;
            }

            e.length = a;
            return e;
          }

          function he(e) {
            var r = new Array(e);

            for (var t = 0; t < e; ++t) {
              r[t] = 0;
            }

            return r;
          }

          var ue = function () {
            var e = function () {
              return function e(r, t) {
                var a = 0;

                while (a < r.length) {
                  var n = Math.min(65535, r.length - a);
                  var i = a + n == r.length;

                  t._W(1, +i);

                  t._W(2, n);

                  t._W(2, ~n & 65535);

                  while (n-- > 0) {
                    t[t.l++] = r[a++];
                  }
                }

                return t.l;
              };
            }();

            return function (r) {
              var t = Kr(50 + Math.floor(r.length * 1.1));
              var a = e(r, t);
              return t.slice(0, a);
            };
          }();

          function de(e, r, t) {
            var a = 1,
                n = 0,
                i = 0,
                s = 0,
                l = 0,
                o = e.length;
            var f = ee ? new Uint16Array(32) : he(32);

            for (i = 0; i < 32; ++i) {
              f[i] = 0;
            }

            for (i = o; i < t; ++i) {
              e[i] = 0;
            }

            o = e.length;
            var c = ee ? new Uint16Array(o) : he(o);

            for (i = 0; i < o; ++i) {
              f[n = e[i]]++;
              if (a < n) a = n;
              c[i] = 0;
            }

            f[0] = 0;

            for (i = 1; i <= a; ++i) {
              f[i + 16] = l = l + f[i - 1] << 1;
            }

            for (i = 0; i < o; ++i) {
              l = e[i];
              if (l != 0) c[i] = f[l + 16]++;
            }

            var h = 0;

            for (i = 0; i < o; ++i) {
              h = e[i];

              if (h != 0) {
                l = ae(c[i], a) >> a - h;

                for (s = (1 << a + 4 - h) - 1; s >= 0; --s) {
                  r[l | s << h] = h & 15 | i << 4;
                }
              }
            }

            return a;
          }

          var pe = ee ? new Uint16Array(512) : he(512);
          var ve = ee ? new Uint16Array(32) : he(32);

          if (!ee) {
            for (var me = 0; me < 512; ++me) {
              pe[me] = 0;
            }

            for (me = 0; me < 32; ++me) {
              ve[me] = 0;
            }
          }

          (function () {
            var e = [];
            var r = 0;

            for (; r < 32; r++) {
              e.push(5);
            }

            de(e, ve, 32);
            var t = [];
            r = 0;

            for (; r <= 143; r++) {
              t.push(8);
            }

            for (; r <= 255; r++) {
              t.push(9);
            }

            for (; r <= 279; r++) {
              t.push(7);
            }

            for (; r <= 287; r++) {
              t.push(8);
            }

            de(t, pe, 288);
          })();

          var ge = ee ? new Uint16Array(32768) : he(32768);
          var be = ee ? new Uint16Array(32768) : he(32768);
          var we = ee ? new Uint16Array(128) : he(128);
          var ke = 1,
              ye = 1;

          function xe(e, r) {
            var t = le(e, r) + 257;
            r += 5;
            var a = le(e, r) + 1;
            r += 5;
            var n = se(e, r) + 4;
            r += 4;
            var i = 0;
            var s = ee ? new Uint8Array(19) : he(19);
            var l = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
            var o = 1;
            var f = ee ? new Uint8Array(8) : he(8);
            var c = ee ? new Uint8Array(8) : he(8);
            var h = s.length;

            for (var u = 0; u < n; ++u) {
              s[K[u]] = i = ie(e, r);
              if (o < i) o = i;
              f[i]++;
              r += 3;
            }

            var d = 0;
            f[0] = 0;

            for (u = 1; u <= o; ++u) {
              c[u] = d = d + f[u - 1] << 1;
            }

            for (u = 0; u < h; ++u) {
              if ((d = s[u]) != 0) l[u] = c[d]++;
            }

            var p = 0;

            for (u = 0; u < h; ++u) {
              p = s[u];

              if (p != 0) {
                d = re[l[u]] >> 8 - p;

                for (var v = (1 << 7 - p) - 1; v >= 0; --v) {
                  we[d | v << p] = p & 7 | u << 3;
                }
              }
            }

            var m = [];
            o = 1;

            for (; m.length < t + a;) {
              d = we[oe(e, r)];
              r += d & 7;

              switch (d >>>= 3) {
                case 16:
                  i = 3 + ne(e, r);
                  r += 2;
                  d = m[m.length - 1];

                  while (i-- > 0) {
                    m.push(d);
                  }

                  break;

                case 17:
                  i = 3 + ie(e, r);
                  r += 3;

                  while (i-- > 0) {
                    m.push(0);
                  }

                  break;

                case 18:
                  i = 11 + oe(e, r);
                  r += 7;

                  while (i-- > 0) {
                    m.push(0);
                  }

                  break;

                default:
                  m.push(d);
                  if (o < d) o = d;
                  break;
              }
            }

            var g = m.slice(0, t),
                b = m.slice(t);

            for (u = t; u < 286; ++u) {
              g[u] = 0;
            }

            for (u = a; u < 30; ++u) {
              b[u] = 0;
            }

            ke = de(g, ge, 286);
            ye = de(b, be, 30);
            return r;
          }

          function _e(e, r) {
            if (e[0] == 3 && !(e[1] & 3)) {
              return [_(r), 2];
            }

            var t = 0;
            var a = 0;
            var n = C(r ? r : 1 << 18);
            var i = 0;
            var s = n.length >>> 0;
            var l = 0,
                o = 0;

            while ((a & 1) == 0) {
              a = ie(e, t);
              t += 3;

              if (a >>> 1 == 0) {
                if (t & 7) t += 8 - (t & 7);
                var f = e[t >>> 3] | e[(t >>> 3) + 1] << 8;
                t += 32;

                if (!r && s < i + f) {
                  n = ce(n, i + f);
                  s = n.length;
                }

                if (typeof e.copy === "function") {
                  e.copy(n, i, t >>> 3, (t >>> 3) + f);
                  i += f;
                  t += 8 * f;
                } else while (f-- > 0) {
                  n[i++] = e[t >>> 3];
                  t += 8;
                }

                continue;
              } else if (a >>> 1 == 1) {
                l = 9;
                o = 5;
              } else {
                t = xe(e, t);
                l = ke;
                o = ye;
              }

              if (!r && s < i + 32767) {
                n = ce(n, i + 32767);
                s = n.length;
              }

              for (;;) {
                var c = fe(e, t, l);
                var h = a >>> 1 == 1 ? pe[c] : ge[c];
                t += h & 15;
                h >>>= 4;
                if ((h >>> 8 & 255) === 0) n[i++] = h;else if (h == 256) break;else {
                  h -= 257;
                  var u = h < 8 ? 0 : h - 4 >> 2;
                  if (u > 5) u = 0;
                  var d = i + q[h];

                  if (u > 0) {
                    d += fe(e, t, u);
                    t += u;
                  }

                  c = fe(e, t, o);
                  h = a >>> 1 == 1 ? ve[c] : be[c];
                  t += h & 15;
                  h >>>= 4;
                  var p = h < 4 ? 0 : h - 2 >> 1;
                  var v = Z[h];

                  if (p > 0) {
                    v += fe(e, t, p);
                    t += p;
                  }

                  if (!r && s < d) {
                    n = ce(n, d);
                    s = n.length;
                  }

                  while (i < d) {
                    n[i] = n[i - v];
                    ++i;
                  }
                }
              }
            }

            return [r ? n : n.slice(0, i), t + 7 >>> 3];
          }

          function Ce(e, r) {
            var t = e.slice(e.l || 0);

            var a = _e(t, r);

            e.l += a[1];
            return a[0];
          }

          function Se(e, r) {
            if (e) {
              if (typeof console !== "undefined") console.error(r);
            } else throw new Error(r);
          }

          function Ae(e, r) {
            var t = e;
            Yr(t, 0);
            var a = [],
                n = [];
            var i = {
              FileIndex: a,
              FullPaths: n
            };
            E(i, {
              root: r.root
            });
            var l = t.length - 4;

            while ((t[l] != 80 || t[l + 1] != 75 || t[l + 2] != 5 || t[l + 3] != 6) && l >= 0) {
              --l;
            }

            t.l = l + 4;
            t.l += 4;

            var o = t._R(2);

            t.l += 6;

            var f = t._R(4);

            t.l = f;

            for (l = 0; l < o; ++l) {
              t.l += 20;

              var c = t._R(4);

              var h = t._R(4);

              var u = t._R(2);

              var d = t._R(2);

              var p = t._R(2);

              t.l += 8;

              var v = t._R(4);

              var m = s(t.slice(t.l + u, t.l + u + d));
              t.l += u + d + p;
              var g = t.l;
              t.l = v + 4;
              Ee(t, c, h, i, m);
              t.l = g;
            }

            return i;
          }

          function Ee(e, r, t, a, n) {
            e.l += 2;

            var l = e._R(2);

            var o = e._R(2);

            var f = i(e);
            if (l & 8257) throw new Error("Unsupported ZIP encryption");

            var c = e._R(4);

            var h = e._R(4);

            var u = e._R(4);

            var d = e._R(2);

            var p = e._R(2);

            var v = "";

            for (var m = 0; m < d; ++m) {
              v += String.fromCharCode(e[e.l++]);
            }

            if (p) {
              var g = s(e.slice(e.l, e.l + p));
              if ((g[21589] || {}).mt) f = g[21589].mt;
              if (((n || {})[21589] || {}).mt) f = n[21589].mt;
            }

            e.l += p;
            var b = e.slice(e.l, e.l + h);

            switch (o) {
              case 8:
                b = Y(e, u);
                break;

              case 0:
                break;

              default:
                throw new Error("Unsupported ZIP Compression method " + o);
            }

            var w = false;

            if (l & 8) {
              c = e._R(4);

              if (c == 134695760) {
                c = e._R(4);
                w = true;
              }

              h = e._R(4);
              u = e._R(4);
            }

            if (h != r) Se(w, "Bad compressed size: " + r + " != " + h);
            if (u != t) Se(w, "Bad uncompressed size: " + t + " != " + u);
            var k = U.buf(b, 0);
            if (c >> 0 != k >> 0) Se(w, "Bad CRC32 checksum: " + c + " != " + k);
            Oe(a, v, b, {
              unsafe: true,
              mt: f
            });
          }

          function Fe(e, r) {
            var t = r || {};
            var a = [],
                i = [];
            var s = Kr(1);
            var l = t.compression ? 8 : 0,
                o = 0;
            var f = false;
            if (f) o |= 8;
            var c = 0,
                h = 0;
            var u = 0,
                d = 0;
            var p = e.FullPaths[0],
                v = p,
                m = e.FileIndex[0];
            var g = [];
            var b = 0;

            for (c = 1; c < e.FullPaths.length; ++c) {
              v = e.FullPaths[c].slice(p.length);
              m = e.FileIndex[c];
              if (!m.size || !m.content || v == "Sh33tJ5") continue;
              var w = u;
              var k = Kr(v.length);

              for (h = 0; h < v.length; ++h) {
                k._W(1, v.charCodeAt(h) & 127);
              }

              k = k.slice(0, k.l);
              g[d] = U.buf(m.content, 0);
              var y = m.content;
              if (l == 8) y = J(y);
              s = Kr(30);

              s._W(4, 67324752);

              s._W(2, 20);

              s._W(2, o);

              s._W(2, l);

              if (m.mt) n(s, m.mt);else s._W(4, 0);

              s._W(-4, o & 8 ? 0 : g[d]);

              s._W(4, o & 8 ? 0 : y.length);

              s._W(4, o & 8 ? 0 : m.content.length);

              s._W(2, k.length);

              s._W(2, 0);

              u += s.length;
              a.push(s);
              u += k.length;
              a.push(k);
              u += y.length;
              a.push(y);

              if (o & 8) {
                s = Kr(12);

                s._W(-4, g[d]);

                s._W(4, y.length);

                s._W(4, m.content.length);

                u += s.l;
                a.push(s);
              }

              s = Kr(46);

              s._W(4, 33639248);

              s._W(2, 0);

              s._W(2, 20);

              s._W(2, o);

              s._W(2, l);

              s._W(4, 0);

              s._W(-4, g[d]);

              s._W(4, y.length);

              s._W(4, m.content.length);

              s._W(2, k.length);

              s._W(2, 0);

              s._W(2, 0);

              s._W(2, 0);

              s._W(2, 0);

              s._W(4, 0);

              s._W(4, w);

              b += s.l;
              i.push(s);
              b += k.length;
              i.push(k);
              ++d;
            }

            s = Kr(22);

            s._W(4, 101010256);

            s._W(2, 0);

            s._W(2, 0);

            s._W(2, d);

            s._W(2, d);

            s._W(4, b);

            s._W(4, u);

            s._W(2, 0);

            return O([O(a), O(i), s]);
          }

          function Te(e) {
            var r = {};
            E(r, e);
            return r;
          }

          function Oe(e, r, t, n) {
            var i = n && n.unsafe;
            if (!i) E(e);
            var s = !i && j.find(e, r);

            if (!s) {
              var l = e.FullPaths[0];
              if (r.slice(0, l.length) == l) l = r;else {
                if (l.slice(-1) != "/") l += "/";
                l = (l + r).replace("//", "/");
              }
              s = {
                name: a(r),
                type: 2
              };
              e.FileIndex.push(s);
              e.FullPaths.push(l);
              if (!i) j.utils.cfb_gc(e);
            }

            s.content = t;
            s.size = t ? t.length : 0;

            if (n) {
              if (n.CLSID) s.clsid = n.CLSID;
              if (n.mt) s.mt = n.mt;
              if (n.ct) s.ct = n.ct;
            }

            return s;
          }

          function De(e, r) {
            E(e);
            var t = j.find(e, r);
            if (t) for (var a = 0; a < e.FileIndex.length; ++a) {
              if (e.FileIndex[a] == t) {
                e.FileIndex.splice(a, 1);
                e.FullPaths.splice(a, 1);
                return true;
              }
            }
            return false;
          }

          function Me(e, r, t) {
            E(e);
            var n = j.find(e, r);
            if (n) for (var i = 0; i < e.FileIndex.length; ++i) {
              if (e.FileIndex[i] == n) {
                e.FileIndex[i].name = a(t);
                e.FullPaths[i] = t;
                return true;
              }
            }
            return false;
          }

          function Ne(e) {
            T(e, true);
          }

          e.find = P;
          e.read = A;
          e.parse = f;
          e.write = V;
          e.writeFile = $;
          e.utils = {
            cfb_new: Te,
            cfb_add: Oe,
            cfb_del: De,
            cfb_mov: Me,
            cfb_gc: Ne,
            ReadShift: Ur,
            CheckField: Gr,
            prep_blob: Yr,
            bconcat: O,
            use_zlib: G,
            _deflateRaw: ue,
            _inflateRaw: Ce,
            consts: W
          };
          return e;
        }();

        if (true && typeof W === "undefined") {
          module.exports = j;
        }

        var H;
        if (true) try {
          H = __webpack_require__(
          /*! fs */
          4);
        } catch (x) {}

        function V(e) {
          if (typeof e === "string") return A(e);
          if (Array.isArray(e)) return F(e);
          return e;
        }

        function X(e, r, t) {
          if (typeof H !== "undefined" && H.writeFileSync) return t ? H.writeFileSync(e, r, t) : H.writeFileSync(e, r);
          var a = t == "utf8" ? Je(r) : r;
          if (typeof IE_SaveFile !== "undefined") return IE_SaveFile(a, e);

          if (typeof Blob !== "undefined") {
            var n = new Blob([V(a)], {
              type: "application/octet-stream"
            });
            if (typeof navigator !== "undefined" && navigator.msSaveBlob) return navigator.msSaveBlob(n, e);
            if (typeof saveAs !== "undefined") return saveAs(n, e);

            if (typeof URL !== "undefined" && typeof document !== "undefined" && document.createElement && URL.createObjectURL) {
              var i = URL.createObjectURL(n);

              if (typeof chrome === "object" && typeof (chrome.downloads || {}).download == "function") {
                if (URL.revokeObjectURL && typeof setTimeout !== "undefined") setTimeout(function () {
                  URL.revokeObjectURL(i);
                }, 6e4);
                return chrome.downloads.download({
                  url: i,
                  filename: e,
                  saveAs: true
                });
              }

              var s = document.createElement("a");

              if (s.download != null) {
                s.download = e;
                s.href = i;
                document.body.appendChild(s);
                s.click();
                document.body.removeChild(s);
                if (URL.revokeObjectURL && typeof setTimeout !== "undefined") setTimeout(function () {
                  URL.revokeObjectURL(i);
                }, 6e4);
                return i;
              }
            }
          }

          if (typeof $ !== "undefined" && typeof File !== "undefined" && typeof Folder !== "undefined") try {
            var l = File(e);
            l.open("w");
            l.encoding = "binary";
            if (Array.isArray(r)) r = E(r);
            l.write(r);
            l.close();
            return r;
          } catch (o) {
            if (!o.message || !o.message.match(/onstruct/)) throw o;
          }
          throw new Error("cannot save file " + e);
        }

        function G(e) {
          if (typeof H !== "undefined") return H.readFileSync(e);
          if (typeof $ !== "undefined" && typeof File !== "undefined" && typeof Folder !== "undefined") try {
            var r = File(e);
            r.open("r");
            r.encoding = "binary";
            var t = r.read();
            r.close();
            return t;
          } catch (a) {
            if (!a.message || !a.message.match(/onstruct/)) throw a;
          }
          throw new Error("Cannot access file " + e);
        }

        function Y(e) {
          var r = Object.keys(e),
              t = [];

          for (var a = 0; a < r.length; ++a) {
            if (Object.prototype.hasOwnProperty.call(e, r[a])) t.push(r[a]);
          }

          return t;
        }

        function J(e, r) {
          var t = [],
              a = Y(e);

          for (var n = 0; n !== a.length; ++n) {
            if (t[e[a[n]][r]] == null) t[e[a[n]][r]] = a[n];
          }

          return t;
        }

        function K(e) {
          var r = [],
              t = Y(e);

          for (var a = 0; a !== t.length; ++a) {
            r[e[t[a]]] = t[a];
          }

          return r;
        }

        function q(e) {
          var r = [],
              t = Y(e);

          for (var a = 0; a !== t.length; ++a) {
            r[e[t[a]]] = parseInt(t[a], 10);
          }

          return r;
        }

        function Z(e) {
          var r = [],
              t = Y(e);

          for (var a = 0; a !== t.length; ++a) {
            if (r[e[t[a]]] == null) r[e[t[a]]] = [];
            r[e[t[a]]].push(t[a]);
          }

          return r;
        }

        var Q = new Date(1899, 11, 30, 0, 0, 0);

        function ee(e, r) {
          var t = e.getTime();
          if (r) t -= 1462 * 24 * 60 * 60 * 1e3;
          var a = Q.getTime() + (e.getTimezoneOffset() - Q.getTimezoneOffset()) * 6e4;
          return (t - a) / (24 * 60 * 60 * 1e3);
        }

        var re = new Date();
        var te = Q.getTime() + (re.getTimezoneOffset() - Q.getTimezoneOffset()) * 6e4;
        var ae = re.getTimezoneOffset();

        function ne(e) {
          var r = new Date();
          r.setTime(e * 24 * 60 * 60 * 1e3 + te);

          if (r.getTimezoneOffset() !== ae) {
            r.setTime(r.getTime() + (r.getTimezoneOffset() - ae) * 6e4);
          }

          return r;
        }

        function ie(e) {
          var r = 0,
              t = 0,
              a = false;
          var n = e.match(/P([0-9\.]+Y)?([0-9\.]+M)?([0-9\.]+D)?T([0-9\.]+H)?([0-9\.]+M)?([0-9\.]+S)?/);
          if (!n) throw new Error("|" + e + "| is not an ISO8601 Duration");

          for (var i = 1; i != n.length; ++i) {
            if (!n[i]) continue;
            t = 1;
            if (i > 3) a = true;

            switch (n[i].slice(n[i].length - 1)) {
              case "Y":
                throw new Error("Unsupported ISO Duration Field: " + n[i].slice(n[i].length - 1));

              case "D":
                t *= 24;

              case "H":
                t *= 60;

              case "M":
                if (!a) throw new Error("Unsupported ISO Duration Field: M");else t *= 60;

              case "S":
                break;
            }

            r += t * parseInt(n[i], 10);
          }

          return r;
        }

        var se = new Date("2017-02-19T19:06:09.000Z");
        if (isNaN(se.getFullYear())) se = new Date("2/19/17");
        var le = se.getFullYear() == 2017;

        function oe(e, r) {
          var t = new Date(e);

          if (le) {
            if (r > 0) t.setTime(t.getTime() + t.getTimezoneOffset() * 60 * 1e3);else if (r < 0) t.setTime(t.getTime() - t.getTimezoneOffset() * 60 * 1e3);
            return t;
          }

          if (e instanceof Date) return e;

          if (se.getFullYear() == 1917 && !isNaN(t.getFullYear())) {
            var a = t.getFullYear();
            if (e.indexOf("" + a) > -1) return t;
            t.setFullYear(t.getFullYear() + 100);
            return t;
          }

          var n = e.match(/\d+/g) || ["2017", "2", "19", "0", "0", "0"];
          var i = new Date(+n[0], +n[1] - 1, +n[2], +n[3] || 0, +n[4] || 0, +n[5] || 0);
          if (e.indexOf("Z") > -1) i = new Date(i.getTime() - i.getTimezoneOffset() * 60 * 1e3);
          return i;
        }

        function fe(e) {
          var r = "";

          for (var t = 0; t != e.length; ++t) {
            r += String.fromCharCode(e[t]);
          }

          return r;
        }

        function ce(e) {
          if (typeof JSON != "undefined" && !Array.isArray(e)) return JSON.parse(JSON.stringify(e));
          if (typeof e != "object" || e == null) return e;
          if (e instanceof Date) return new Date(e.getTime());
          var r = {};

          for (var t in e) {
            if (Object.prototype.hasOwnProperty.call(e, t)) r[t] = ce(e[t]);
          }

          return r;
        }

        function he(e, r) {
          var t = "";

          while (t.length < r) {
            t += e;
          }

          return t;
        }

        function ue(e) {
          var r = Number(e);
          if (!isNaN(r)) return r;
          if (!/\d/.test(e)) return r;
          var t = 1;
          var a = e.replace(/([\d]),([\d])/g, "$1$2").replace(/[$]/g, "").replace(/[%]/g, function () {
            t *= 100;
            return "";
          });
          if (!isNaN(r = Number(a))) return r / t;
          a = a.replace(/[(](.*)[)]/, function (e, r) {
            t = -t;
            return r;
          });
          if (!isNaN(r = Number(a))) return r / t;
          return r;
        }

        function de(e) {
          var r = new Date(e),
              t = new Date(NaN);
          var a = r.getYear(),
              n = r.getMonth(),
              i = r.getDate();
          if (isNaN(i)) return t;
          if (a < 0 || a > 8099) return t;
          if ((n > 0 || i > 1) && a != 101) return r;
          if (e.toLowerCase().match(/jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec/)) return r;
          if (e.match(/[^-0-9:,\/\\]/)) return t;
          return r;
        }

        var pe = "abacaba".split(/(:?b)/i).length == 5;

        function ve(e, r, t) {
          if (pe || typeof r == "string") return e.split(r);
          var a = e.split(r),
              n = [a[0]];

          for (var i = 1; i < a.length; ++i) {
            n.push(t);
            n.push(a[i]);
          }

          return n;
        }

        function me(e) {
          if (!e) return null;
          if (e.data) return d(e.data);
          if (e.asNodeBuffer && w) return d(e.asNodeBuffer().toString("binary"));
          if (e.asBinary) return d(e.asBinary());
          if (e._data && e._data.getContent) return d(fe(Array.prototype.slice.call(e._data.getContent(), 0)));
          if (e.content && e.type) return d(fe(e.content));
          return null;
        }

        function ge(e) {
          if (!e) return null;
          if (e.data) return c(e.data);
          if (e.asNodeBuffer && w) return e.asNodeBuffer();

          if (e._data && e._data.getContent) {
            var r = e._data.getContent();

            if (typeof r == "string") return c(r);
            return Array.prototype.slice.call(r);
          }

          if (e.content && e.type) return e.content;
          return null;
        }

        function be(e) {
          return e && e.name.slice(-4) === ".bin" ? ge(e) : me(e);
        }

        function we(e, r) {
          var t = e.FullPaths || Y(e.files);
          var a = r.toLowerCase(),
              n = a.replace(/\\/g, "/");

          for (var i = 0; i < t.length; ++i) {
            var s = t[i].replace(/^Root Entry[\/]/, "").toLowerCase();
            if (a == s || n == s) return e.FileIndex[i];
          }

          return null;
        }

        function ke(e, r) {
          var t = we(e, r);
          if (t == null) throw new Error("Cannot find file " + r + " in zip");
          return t;
        }

        function ye(e, r, t) {
          if (!t) return be(ke(e, r));
          if (!r) return null;

          try {
            return ye(e, r);
          } catch (a) {
            return null;
          }
        }

        function xe(e, r, t) {
          if (!t) return me(ke(e, r));
          if (!r) return null;

          try {
            return xe(e, r);
          } catch (a) {
            return null;
          }
        }

        function _e(e) {
          var r = e.FullPaths || Y(e.files),
              t = [];

          for (var a = 0; a < r.length; ++a) {
            if (r[a].slice(-1) != "/") t.push(r[a].replace(/^Root Entry[\/]/, ""));
          }

          return t.sort();
        }

        function Ce(e, r, t) {
          if (e.FullPaths) j.utils.cfb_add(e, r, typeof t == "string" ? w ? k(t) : S(Je(t)) : t);else e.file(r, t);
        }

        function Se() {
          return j.utils.cfb_new();
        }

        function Ae(e, r) {
          var t;

          switch (r.type) {
            case "base64":
              t = j.read(e, {
                type: "base64"
              });
              break;

            case "binary":
              t = j.read(e, {
                type: "binary"
              });
              break;

            case "buffer":
              ;

            case "array":
              t = j.read(e, {
                type: "buffer"
              });
              break;

            default:
              throw new Error("Unrecognized type " + r.type);
          }

          return t;
        }

        function Ee(e, r) {
          if (e.charAt(0) == "/") return e.slice(1);
          var t = r.split("/");
          if (r.slice(-1) != "/") t.pop();
          var a = e.split("/");

          while (a.length !== 0) {
            var n = a.shift();
            if (n === "..") t.pop();else if (n !== ".") t.push(n);
          }

          return t.join("/");
        }

        var Fe = '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>\r\n';
        var Te = /([^"\s?>\/]+)\s*=\s*((?:")([^"]*)(?:")|(?:')([^']*)(?:')|([^'">\s]+))/g;
        var Oe = /<[\/\?]?[a-zA-Z0-9:_-]+(?:\s+[^"\s?>\/]+\s*=\s*(?:"[^"]*"|'[^']*'|[^'">\s=]+))*\s?[\/\?]?>/gm;
        if (!Fe.match(Oe)) Oe = /<[^>]*>/g;
        var De = /<\w*:/,
            Me = /<(\/?)\w+:/;

        function Ne(e, r, t) {
          var a = {};
          var n = 0,
              i = 0;

          for (; n !== e.length; ++n) {
            if ((i = e.charCodeAt(n)) === 32 || i === 10 || i === 13) break;
          }

          if (!r) a[0] = e.slice(0, n);
          if (n === e.length) return a;
          var s = e.match(Te),
              l = 0,
              o = "",
              f = 0,
              c = "",
              h = "",
              u = 1;
          if (s) for (f = 0; f != s.length; ++f) {
            h = s[f];

            for (i = 0; i != h.length; ++i) {
              if (h.charCodeAt(i) === 61) break;
            }

            c = h.slice(0, i).trim();

            while (h.charCodeAt(i + 1) == 32) {
              ++i;
            }

            u = (n = h.charCodeAt(i + 1)) == 34 || n == 39 ? 1 : 0;
            o = h.slice(i + 1 + u, h.length - u);

            for (l = 0; l != c.length; ++l) {
              if (c.charCodeAt(l) === 58) break;
            }

            if (l === c.length) {
              if (c.indexOf("_") > 0) c = c.slice(0, c.indexOf("_"));
              a[c] = o;
              if (!t) a[c.toLowerCase()] = o;
            } else {
              var d = (l === 5 && c.slice(0, 5) === "xmlns" ? "xmlns" : "") + c.slice(l + 1);
              if (a[d] && c.slice(l - 3, l) == "ext") continue;
              a[d] = o;
              if (!t) a[d.toLowerCase()] = o;
            }
          }
          return a;
        }

        function Pe(e) {
          return e.replace(Me, "<$1");
        }

        var Re = {
          "&quot;": '"',
          "&apos;": "'",
          "&gt;": ">",
          "&lt;": "<",
          "&amp;": "&"
        };
        var Ie = K(Re);

        var Le = function () {
          var e = /&(?:quot|apos|gt|lt|amp|#x?([\da-fA-F]+));/gi,
              r = /_x([\da-fA-F]{4})_/gi;
          return function t(a) {
            var n = a + "",
                i = n.indexOf("<![CDATA[");
            if (i == -1) return n.replace(e, function (e, r) {
              return Re[e] || String.fromCharCode(parseInt(r, e.indexOf("x") > -1 ? 16 : 10)) || e;
            }).replace(r, function (e, r) {
              return String.fromCharCode(parseInt(r, 16));
            });
            var s = n.indexOf("]]>");
            return t(n.slice(0, i)) + n.slice(i + 9, s) + t(n.slice(s + 3));
          };
        }();

        var Be = /[&<>'"]/g,
            ze = /[\u0000-\u0008\u000b-\u001f]/g;

        function We(e) {
          var r = e + "";
          return r.replace(Be, function (e) {
            return Ie[e];
          }).replace(ze, function (e) {
            return "_x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + "_";
          });
        }

        function $e(e) {
          return We(e).replace(/ /g, "_x0020_");
        }

        var Ue = /[\u0000-\u001f]/g;

        function je(e) {
          var r = e + "";
          return r.replace(Be, function (e) {
            return Ie[e];
          }).replace(/\n/g, "<br/>").replace(Ue, function (e) {
            return "&#x" + ("000" + e.charCodeAt(0).toString(16)).slice(-4) + ";";
          });
        }

        function He(e) {
          var r = e + "";
          return r.replace(Be, function (e) {
            return Ie[e];
          }).replace(Ue, function (e) {
            return "&#x" + e.charCodeAt(0).toString(16).toUpperCase() + ";";
          });
        }

        var Ve = function () {
          var e = /&#(\d+);/g;

          function r(e, r) {
            return String.fromCharCode(parseInt(r, 10));
          }

          return function t(a) {
            return a.replace(e, r);
          };
        }();

        var Xe = function () {
          return function e(r) {
            return r.replace(/(\r\n|[\r\n])/g, "&#10;");
          };
        }();

        function Ge(e) {
          switch (e) {
            case 1:
              ;

            case true:
              ;

            case "1":
              ;

            case "true":
              ;

            case "TRUE":
              return true;

            default:
              return false;
          }
        }

        var Ye = function $l(e) {
          var r = "",
              t = 0,
              a = 0,
              n = 0,
              i = 0,
              s = 0,
              l = 0;

          while (t < e.length) {
            a = e.charCodeAt(t++);

            if (a < 128) {
              r += String.fromCharCode(a);
              continue;
            }

            n = e.charCodeAt(t++);

            if (a > 191 && a < 224) {
              s = (a & 31) << 6;
              s |= n & 63;
              r += String.fromCharCode(s);
              continue;
            }

            i = e.charCodeAt(t++);

            if (a < 240) {
              r += String.fromCharCode((a & 15) << 12 | (n & 63) << 6 | i & 63);
              continue;
            }

            s = e.charCodeAt(t++);
            l = ((a & 7) << 18 | (n & 63) << 12 | (i & 63) << 6 | s & 63) - 65536;
            r += String.fromCharCode(55296 + (l >>> 10 & 1023));
            r += String.fromCharCode(56320 + (l & 1023));
          }

          return r;
        };

        var Je = function Je(e) {
          var r = [],
              t = 0,
              a = 0,
              n = 0;

          while (t < e.length) {
            a = e.charCodeAt(t++);

            switch (true) {
              case a < 128:
                r.push(String.fromCharCode(a));
                break;

              case a < 2048:
                r.push(String.fromCharCode(192 + (a >> 6)));
                r.push(String.fromCharCode(128 + (a & 63)));
                break;

              case a >= 55296 && a < 57344:
                a -= 55296;
                n = e.charCodeAt(t++) - 56320 + (a << 10);
                r.push(String.fromCharCode(240 + (n >> 18 & 7)));
                r.push(String.fromCharCode(144 + (n >> 12 & 63)));
                r.push(String.fromCharCode(128 + (n >> 6 & 63)));
                r.push(String.fromCharCode(128 + (n & 63)));
                break;

              default:
                r.push(String.fromCharCode(224 + (a >> 12)));
                r.push(String.fromCharCode(128 + (a >> 6 & 63)));
                r.push(String.fromCharCode(128 + (a & 63)));
            }
          }

          return r.join("");
        };

        if (w) {
          var Ke = function Ul(e) {
            var r = Buffer.alloc(2 * e.length),
                t,
                a,
                n = 1,
                i = 0,
                s = 0,
                l;

            for (a = 0; a < e.length; a += n) {
              n = 1;
              if ((l = e.charCodeAt(a)) < 128) t = l;else if (l < 224) {
                t = (l & 31) * 64 + (e.charCodeAt(a + 1) & 63);
                n = 2;
              } else if (l < 240) {
                t = (l & 15) * 4096 + (e.charCodeAt(a + 1) & 63) * 64 + (e.charCodeAt(a + 2) & 63);
                n = 3;
              } else {
                n = 4;
                t = (l & 7) * 262144 + (e.charCodeAt(a + 1) & 63) * 4096 + (e.charCodeAt(a + 2) & 63) * 64 + (e.charCodeAt(a + 3) & 63);
                t -= 65536;
                s = 55296 + (t >>> 10 & 1023);
                t = 56320 + (t & 1023);
              }

              if (s !== 0) {
                r[i++] = s & 255;
                r[i++] = s >>> 8;
                s = 0;
              }

              r[i++] = t % 256;
              r[i++] = t >>> 8;
            }

            return r.slice(0, i).toString("ucs2");
          };

          var qe = "foo bar bazâð£";
          if (Ye(qe) == Ke(qe)) Ye = Ke;

          var Ze = function jl(e) {
            return k(e, "binary").toString("utf8");
          };

          if (Ye(qe) == Ze(qe)) Ye = Ze;

          Je = function Je(e) {
            return k(e, "utf8").toString("binary");
          };
        }

        var Qe = function () {
          var e = {};
          return function r(t, a) {
            var n = t + "|" + (a || "");
            if (e[n]) return e[n];
            return e[n] = new RegExp("<(?:\\w+:)?" + t + '(?: xml:space="preserve")?(?:[^>]*)>([\\s\\S]*?)</(?:\\w+:)?' + t + ">", a || "");
          };
        }();

        var er = function () {
          var e = [["nbsp", " "], ["middot", "·"], ["quot", '"'], ["apos", "'"], ["gt", ">"], ["lt", "<"], ["amp", "&"]].map(function (e) {
            return [new RegExp("&" + e[0] + ";", "ig"), e[1]];
          });
          return function r(t) {
            var a = t.replace(/^[\t\n\r ]+/, "").replace(/[\t\n\r ]+$/, "").replace(/>\s+/g, ">").replace(/\s+</g, "<").replace(/[\t\n\r ]+/g, " ").replace(/<\s*[bB][rR]\s*\/?>/g, "\n").replace(/<[^>]*>/g, "");

            for (var n = 0; n < e.length; ++n) {
              a = a.replace(e[n][0], e[n][1]);
            }

            return a;
          };
        }();

        var rr = function () {
          var e = {};
          return function r(t) {
            if (e[t] !== undefined) return e[t];
            return e[t] = new RegExp("<(?:vt:)?" + t + ">([\\s\\S]*?)</(?:vt:)?" + t + ">", "g");
          };
        }();

        var tr = /<\/?(?:vt:)?variant>/g,
            ar = /<(?:vt:)([^>]*)>([\s\S]*)</;

        function nr(e, r) {
          var t = Ne(e);
          var a = e.match(rr(t.baseType)) || [];
          var n = [];

          if (a.length != t.size) {
            if (r.WTF) throw new Error("unexpected vector length " + a.length + " != " + t.size);
            return n;
          }

          a.forEach(function (e) {
            var r = e.replace(tr, "").match(ar);
            if (r) n.push({
              v: Ye(r[2]),
              t: r[1]
            });
          });
          return n;
        }

        var ir = /(^\s|\s$|\n)/;

        function sr(e, r) {
          return "<" + e + (r.match(ir) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e + ">";
        }

        function lr(e) {
          return Y(e).map(function (r) {
            return " " + r + '="' + e[r] + '"';
          }).join("");
        }

        function or(e, r, t) {
          return "<" + e + (t != null ? lr(t) : "") + (r != null ? (r.match(ir) ? ' xml:space="preserve"' : "") + ">" + r + "</" + e : "/") + ">";
        }

        function fr(e, r) {
          try {
            return e.toISOString().replace(/\.\d*/, "");
          } catch (t) {
            if (r) throw t;
          }

          return "";
        }

        function cr(e, r) {
          switch (typeof e) {
            case "string":
              var t = or("vt:lpwstr", We(e));
              if (r) t = t.replace(/&quot;/g, "_x0022_");
              return t;

            case "number":
              return or((e | 0) == e ? "vt:i4" : "vt:r8", We(String(e)));

            case "boolean":
              return or("vt:bool", e ? "true" : "false");
          }

          if (e instanceof Date) return or("vt:filetime", fr(e));
          throw new Error("Unable to serialize " + e);
        }

        var hr = {
          dc: "http://purl.org/dc/elements/1.1/",
          dcterms: "http://purl.org/dc/terms/",
          dcmitype: "http://purl.org/dc/dcmitype/",
          mx: "http://schemas.microsoft.com/office/mac/excel/2008/main",
          r: "http://schemas.openxmlformats.org/officeDocument/2006/relationships",
          sjs: "http://schemas.openxmlformats.org/package/2006/sheetjs/core-properties",
          vt: "http://schemas.openxmlformats.org/officeDocument/2006/docPropsVTypes",
          xsi: "http://www.w3.org/2001/XMLSchema-instance",
          xsd: "http://www.w3.org/2001/XMLSchema"
        };
        hr.main = ["http://schemas.openxmlformats.org/spreadsheetml/2006/main", "http://purl.oclc.org/ooxml/spreadsheetml/main", "http://schemas.microsoft.com/office/excel/2006/main", "http://schemas.microsoft.com/office/excel/2006/2"];
        var ur = {
          o: "urn:schemas-microsoft-com:office:office",
          x: "urn:schemas-microsoft-com:office:excel",
          ss: "urn:schemas-microsoft-com:office:spreadsheet",
          dt: "uuid:C2F41010-65B3-11d1-A29F-00AA00C14882",
          mv: "http://macVmlSchemaUri",
          v: "urn:schemas-microsoft-com:vml",
          html: "http://www.w3.org/TR/REC-html40"
        };

        function dr(e, r) {
          var t = 1 - 2 * (e[r + 7] >>> 7);
          var a = ((e[r + 7] & 127) << 4) + (e[r + 6] >>> 4 & 15);
          var n = e[r + 6] & 15;

          for (var i = 5; i >= 0; --i) {
            n = n * 256 + e[r + i];
          }

          if (a == 2047) return n == 0 ? t * Infinity : NaN;
          if (a == 0) a = -1022;else {
            a -= 1023;
            n += Math.pow(2, 52);
          }
          return t * Math.pow(2, a - 52) * n;
        }

        function pr(e, r, t) {
          var a = (r < 0 || 1 / r == -Infinity ? 1 : 0) << 7,
              n = 0,
              i = 0;
          var s = a ? -r : r;

          if (!isFinite(s)) {
            n = 2047;
            i = isNaN(r) ? 26985 : 0;
          } else if (s == 0) n = i = 0;else {
            n = Math.floor(Math.log(s) / Math.LN2);
            i = s * Math.pow(2, 52 - n);

            if (n <= -1023 && (!isFinite(i) || i < Math.pow(2, 52))) {
              n = -1022;
            } else {
              i -= Math.pow(2, 52);
              n += 1023;
            }
          }

          for (var l = 0; l <= 5; ++l, i /= 256) {
            e[t + l] = i & 255;
          }

          e[t + 6] = (n & 15) << 4 | i & 15;
          e[t + 7] = n >> 4 | a;
        }

        var vr = function vr(e) {
          var r = [],
              t = 10240;

          for (var a = 0; a < e[0].length; ++a) {
            if (e[0][a]) for (var n = 0, i = e[0][a].length; n < i; n += t) {
              r.push.apply(r, e[0][a].slice(n, n + t));
            }
          }

          return r;
        };

        var mr = vr;

        var gr = function gr(e, r, t) {
          var a = [];

          for (var n = r; n < t; n += 2) {
            a.push(String.fromCharCode(Lr(e, n)));
          }

          return a.join("").replace(D, "");
        };

        var br = gr;

        var wr = function wr(e, r, t) {
          var a = [];

          for (var n = r; n < r + t; ++n) {
            a.push(("0" + e[n].toString(16)).slice(-2));
          }

          return a.join("");
        };

        var kr = wr;

        var yr = function yr(e, r, t) {
          var a = [];

          for (var n = r; n < t; n++) {
            a.push(String.fromCharCode(Ir(e, n)));
          }

          return a.join("");
        };

        var xr = yr;

        var _r = function _r(e, r) {
          var t = zr(e, r);
          return t > 0 ? yr(e, r + 4, r + 4 + t - 1) : "";
        };

        var Cr = _r;

        var Sr = function Sr(e, r) {
          var t = zr(e, r);
          return t > 0 ? yr(e, r + 4, r + 4 + t - 1) : "";
        };

        var Ar = Sr;

        var Er = function Er(e, r) {
          var t = 2 * zr(e, r);
          return t > 0 ? yr(e, r + 4, r + 4 + t - 1) : "";
        };

        var Fr = Er;
        var Tr, Or;

        Tr = Or = function Hl(e, r) {
          var t = zr(e, r);
          return t > 0 ? gr(e, r + 4, r + 4 + t) : "";
        };

        var Dr = function Dr(e, r) {
          var t = zr(e, r);
          return t > 0 ? yr(e, r + 4, r + 4 + t) : "";
        };

        var Mr = Dr;
        var Nr, Pr;

        Nr = Pr = function Pr(e, r) {
          return dr(e, r);
        };

        var Rr = function Vl(e) {
          return Array.isArray(e);
        };

        if (w) {
          gr = function gr(e, r, t) {
            if (!Buffer.isBuffer(e)) return br(e, r, t);
            return e.toString("utf16le", r, t).replace(D, "");
          };

          wr = function wr(e, r, t) {
            return Buffer.isBuffer(e) ? e.toString("hex", r, r + t) : kr(e, r, t);
          };

          _r = function Xl(e, r) {
            if (!Buffer.isBuffer(e)) return Cr(e, r);
            var t = e.readUInt32LE(r);
            return t > 0 ? e.toString("utf8", r + 4, r + 4 + t - 1) : "";
          };

          Sr = function Gl(e, r) {
            if (!Buffer.isBuffer(e)) return Ar(e, r);
            var t = e.readUInt32LE(r);
            return t > 0 ? e.toString("utf8", r + 4, r + 4 + t - 1) : "";
          };

          Er = function Yl(e, r) {
            if (!Buffer.isBuffer(e)) return Fr(e, r);
            var t = 2 * e.readUInt32LE(r);
            return e.toString("utf16le", r + 4, r + 4 + t - 1);
          };

          Tr = function Jl(e, r) {
            if (!Buffer.isBuffer(e)) return Or(e, r);
            var t = e.readUInt32LE(r);
            return e.toString("utf16le", r + 4, r + 4 + t);
          };

          Dr = function Kl(e, r) {
            if (!Buffer.isBuffer(e)) return Mr(e, r);
            var t = e.readUInt32LE(r);
            return e.toString("utf8", r + 4, r + 4 + t);
          };

          yr = function ql(e, r, t) {
            return Buffer.isBuffer(e) ? e.toString("utf8", r, t) : xr(e, r, t);
          };

          vr = function vr(e) {
            return e[0].length > 0 && Buffer.isBuffer(e[0][0]) ? Buffer.concat(e[0]) : mr(e);
          };

          O = function O(e) {
            return Buffer.isBuffer(e[0]) ? Buffer.concat(e) : [].concat.apply([], e);
          };

          Nr = function Zl(e, r) {
            if (Buffer.isBuffer(e)) return e.readDoubleLE(r);
            return Pr(e, r);
          };

          Rr = function Ql(e) {
            return Buffer.isBuffer(e) || Array.isArray(e);
          };
        }

        if (typeof cptable !== "undefined") {
          gr = function gr(e, r, t) {
            return cptable.utils.decode(1200, e.slice(r, t)).replace(D, "");
          };

          yr = function yr(e, r, t) {
            return cptable.utils.decode(65001, e.slice(r, t));
          };

          _r = function _r(e, r) {
            var a = zr(e, r);
            return a > 0 ? cptable.utils.decode(t, e.slice(r + 4, r + 4 + a - 1)) : "";
          };

          Sr = function Sr(e, t) {
            var a = zr(e, t);
            return a > 0 ? cptable.utils.decode(r, e.slice(t + 4, t + 4 + a - 1)) : "";
          };

          Er = function Er(e, r) {
            var t = 2 * zr(e, r);
            return t > 0 ? cptable.utils.decode(1200, e.slice(r + 4, r + 4 + t - 1)) : "";
          };

          Tr = function Tr(e, r) {
            var t = zr(e, r);
            return t > 0 ? cptable.utils.decode(1200, e.slice(r + 4, r + 4 + t)) : "";
          };

          Dr = function Dr(e, r) {
            var t = zr(e, r);
            return t > 0 ? cptable.utils.decode(65001, e.slice(r + 4, r + 4 + t)) : "";
          };
        }

        var Ir = function Ir(e, r) {
          return e[r];
        };

        var Lr = function Lr(e, r) {
          return e[r + 1] * (1 << 8) + e[r];
        };

        var Br = function Br(e, r) {
          var t = e[r + 1] * (1 << 8) + e[r];
          return t < 32768 ? t : (65535 - t + 1) * -1;
        };

        var zr = function zr(e, r) {
          return e[r + 3] * (1 << 24) + (e[r + 2] << 16) + (e[r + 1] << 8) + e[r];
        };

        var Wr = function Wr(e, r) {
          return e[r + 3] << 24 | e[r + 2] << 16 | e[r + 1] << 8 | e[r];
        };

        var $r = function $r(e, r) {
          return e[r] << 24 | e[r + 1] << 16 | e[r + 2] << 8 | e[r + 3];
        };

        function Ur(e, t) {
          var a = "",
              n,
              i,
              s = [],
              l,
              o,
              f,
              c;

          switch (t) {
            case "dbcs":
              c = this.l;
              if (w && Buffer.isBuffer(this)) a = this.slice(this.l, this.l + 2 * e).toString("utf16le");else for (f = 0; f < e; ++f) {
                a += String.fromCharCode(Lr(this, c));
                c += 2;
              }
              e *= 2;
              break;

            case "utf8":
              a = yr(this, this.l, this.l + e);
              break;

            case "utf16le":
              e *= 2;
              a = gr(this, this.l, this.l + e);
              break;

            case "wstr":
              if (typeof cptable !== "undefined") a = cptable.utils.decode(r, this.slice(this.l, this.l + 2 * e));else return Ur.call(this, e, "dbcs");
              e = 2 * e;
              break;

            case "lpstr-ansi":
              a = _r(this, this.l);
              e = 4 + zr(this, this.l);
              break;

            case "lpstr-cp":
              a = Sr(this, this.l);
              e = 4 + zr(this, this.l);
              break;

            case "lpwstr":
              a = Er(this, this.l);
              e = 4 + 2 * zr(this, this.l);
              break;

            case "lpp4":
              e = 4 + zr(this, this.l);
              a = Tr(this, this.l);
              if (e & 2) e += 2;
              break;

            case "8lpp4":
              e = 4 + zr(this, this.l);
              a = Dr(this, this.l);
              if (e & 3) e += 4 - (e & 3);
              break;

            case "cstr":
              e = 0;
              a = "";

              while ((l = Ir(this, this.l + e++)) !== 0) {
                s.push(p(l));
              }

              a = s.join("");
              break;

            case "_wstr":
              e = 0;
              a = "";

              while ((l = Lr(this, this.l + e)) !== 0) {
                s.push(p(l));
                e += 2;
              }

              e += 2;
              a = s.join("");
              break;

            case "dbcs-cont":
              a = "";
              c = this.l;

              for (f = 0; f < e; ++f) {
                if (this.lens && this.lens.indexOf(c) !== -1) {
                  l = Ir(this, c);
                  this.l = c + 1;
                  o = Ur.call(this, e - f, l ? "dbcs-cont" : "sbcs-cont");
                  return s.join("") + o;
                }

                s.push(p(Lr(this, c)));
                c += 2;
              }

              a = s.join("");
              e *= 2;
              break;

            case "cpstr":
              if (typeof cptable !== "undefined") {
                a = cptable.utils.decode(r, this.slice(this.l, this.l + e));
                break;
              }

              ;

            case "sbcs-cont":
              a = "";
              c = this.l;

              for (f = 0; f != e; ++f) {
                if (this.lens && this.lens.indexOf(c) !== -1) {
                  l = Ir(this, c);
                  this.l = c + 1;
                  o = Ur.call(this, e - f, l ? "dbcs-cont" : "sbcs-cont");
                  return s.join("") + o;
                }

                s.push(p(Ir(this, c)));
                c += 1;
              }

              a = s.join("");
              break;

            default:
              switch (e) {
                case 1:
                  n = Ir(this, this.l);
                  this.l++;
                  return n;

                case 2:
                  n = (t === "i" ? Br : Lr)(this, this.l);
                  this.l += 2;
                  return n;

                case 4:
                  ;

                case -4:
                  if (t === "i" || (this[this.l + 3] & 128) === 0) {
                    n = (e > 0 ? Wr : $r)(this, this.l);
                    this.l += 4;
                    return n;
                  } else {
                    i = zr(this, this.l);
                    this.l += 4;
                  }

                  return i;

                case 8:
                  ;

                case -8:
                  if (t === "f") {
                    if (e == 8) i = Nr(this, this.l);else i = Nr([this[this.l + 7], this[this.l + 6], this[this.l + 5], this[this.l + 4], this[this.l + 3], this[this.l + 2], this[this.l + 1], this[this.l + 0]], 0);
                    this.l += 8;
                    return i;
                  } else e = 8;

                case 16:
                  a = wr(this, this.l, e);
                  break;
              }

              ;
          }

          this.l += e;
          return a;
        }

        var jr = function jr(e, r, t) {
          e[t] = r & 255;
          e[t + 1] = r >>> 8 & 255;
          e[t + 2] = r >>> 16 & 255;
          e[t + 3] = r >>> 24 & 255;
        };

        var Hr = function Hr(e, r, t) {
          e[t] = r & 255;
          e[t + 1] = r >> 8 & 255;
          e[t + 2] = r >> 16 & 255;
          e[t + 3] = r >> 24 & 255;
        };

        var Vr = function Vr(e, r, t) {
          e[t] = r & 255;
          e[t + 1] = r >>> 8 & 255;
        };

        function Xr(e, r, a) {
          var n = 0,
              i = 0;

          if (a === "dbcs") {
            for (i = 0; i != r.length; ++i) {
              Vr(this, r.charCodeAt(i), this.l + 2 * i);
            }

            n = 2 * r.length;
          } else if (a === "sbcs") {
            if (typeof cptable !== "undefined" && t == 874) {
              for (i = 0; i != r.length; ++i) {
                var s = cptable.utils.encode(t, r.charAt(i));
                this[this.l + i] = s[0];
              }
            } else {
              r = r.replace(/[^\x00-\x7F]/g, "_");

              for (i = 0; i != r.length; ++i) {
                this[this.l + i] = r.charCodeAt(i) & 255;
              }
            }

            n = r.length;
          } else if (a === "hex") {
            for (; i < e; ++i) {
              this[this.l++] = parseInt(r.slice(2 * i, 2 * i + 2), 16) || 0;
            }

            return this;
          } else if (a === "utf16le") {
            var l = Math.min(this.l + e, this.length);

            for (i = 0; i < Math.min(r.length, e); ++i) {
              var o = r.charCodeAt(i);
              this[this.l++] = o & 255;
              this[this.l++] = o >> 8;
            }

            while (this.l < l) {
              this[this.l++] = 0;
            }

            return this;
          } else switch (e) {
            case 1:
              n = 1;
              this[this.l] = r & 255;
              break;

            case 2:
              n = 2;
              this[this.l] = r & 255;
              r >>>= 8;
              this[this.l + 1] = r & 255;
              break;

            case 3:
              n = 3;
              this[this.l] = r & 255;
              r >>>= 8;
              this[this.l + 1] = r & 255;
              r >>>= 8;
              this[this.l + 2] = r & 255;
              break;

            case 4:
              n = 4;
              jr(this, r, this.l);
              break;

            case 8:
              n = 8;

              if (a === "f") {
                pr(this, r, this.l);
                break;
              }

              ;

            case 16:
              break;

            case -4:
              n = 4;
              Hr(this, r, this.l);
              break;
          }

          this.l += n;
          return this;
        }

        function Gr(e, r) {
          var t = wr(this, this.l, e.length >> 1);
          if (t !== e) throw new Error(r + "Expected " + e + " saw " + t);
          this.l += e.length >> 1;
        }

        function Yr(e, r) {
          e.l = r;
          e._R = Ur;
          e.chk = Gr;
          e._W = Xr;
        }

        function Jr(e, r) {
          e.l += r;
        }

        function Kr(e) {
          var r = _(e);

          Yr(r, 0);
          return r;
        }

        function qr(e, r, t) {
          if (!e) return;
          var a, n, i;
          Yr(e, e.l || 0);
          var s = e.length,
              l = 0,
              o = 0;

          while (e.l < s) {
            l = e._R(1);
            if (l & 128) l = (l & 127) + ((e._R(1) & 127) << 7);
            var f = XLSBRecordEnum[l] || XLSBRecordEnum[65535];
            a = e._R(1);
            i = a & 127;

            for (n = 1; n < 4 && a & 128; ++n) {
              i += ((a = e._R(1)) & 127) << 7 * n;
            }

            o = e.l + i;
            var c = (f.f || Jr)(e, i, t);
            e.l = o;
            if (r(c, f.n, l)) return;
          }
        }

        function Zr() {
          var e = [],
              r = w ? 256 : 2048;

          var t = function o(e) {
            var r = Kr(e);
            Yr(r, 0);
            return r;
          };

          var a = t(r);

          var n = function f() {
            if (!a) return;

            if (a.length > a.l) {
              a = a.slice(0, a.l);
              a.l = a.length;
            }

            if (a.length > 0) e.push(a);
            a = null;
          };

          var i = function c(e) {
            if (a && e < a.length - a.l) return a;
            n();
            return a = t(Math.max(e + 1, r));
          };

          var s = function h() {
            n();
            return vr([e]);
          };

          var l = function u(e) {
            n();
            a = e;
            if (a.l == null) a.l = a.length;
            i(r);
          };

          return {
            next: i,
            push: l,
            end: s,
            _bufs: e
          };
        }

        function Qr(e, r, t, a) {
          var n = +XLSBRE[r],
              i;
          if (isNaN(n)) return;
          if (!a) a = XLSBRecordEnum[n].p || (t || []).length || 0;
          i = 1 + (n >= 128 ? 1 : 0) + 1;
          if (a >= 128) ++i;
          if (a >= 16384) ++i;
          if (a >= 2097152) ++i;
          var s = e.next(i);
          if (n <= 127) s._W(1, n);else {
            s._W(1, (n & 127) + 128);

            s._W(1, n >> 7);
          }

          for (var l = 0; l != 4; ++l) {
            if (a >= 128) {
              s._W(1, (a & 127) + 128);

              a >>= 7;
            } else {
              s._W(1, a);

              break;
            }
          }

          if (a > 0 && Rr(t)) e.push(t);
        }

        function et(e, r, t) {
          var a = ce(e);

          if (r.s) {
            if (a.cRel) a.c += r.s.c;
            if (a.rRel) a.r += r.s.r;
          } else {
            if (a.cRel) a.c += r.c;
            if (a.rRel) a.r += r.r;
          }

          if (!t || t.biff < 12) {
            while (a.c >= 256) {
              a.c -= 256;
            }

            while (a.r >= 65536) {
              a.r -= 65536;
            }
          }

          return a;
        }

        function rt(e, r, t) {
          var a = ce(e);
          a.s = et(a.s, r.s, t);
          a.e = et(a.e, r.s, t);
          return a;
        }

        function tt(e, r) {
          if (e.cRel && e.c < 0) {
            e = ce(e);

            while (e.c < 0) {
              e.c += r > 8 ? 16384 : 256;
            }
          }

          if (e.rRel && e.r < 0) {
            e = ce(e);

            while (e.r < 0) {
              e.r += r > 8 ? 1048576 : r > 5 ? 65536 : 16384;
            }
          }

          var t = pt(e);
          if (!e.cRel && e.cRel != null) t = ct(t);
          if (!e.rRel && e.rRel != null) t = st(t);
          return t;
        }

        function at(e, r) {
          if (e.s.r == 0 && !e.s.rRel) {
            if (e.e.r == (r.biff >= 12 ? 1048575 : r.biff >= 8 ? 65536 : 16384) && !e.e.rRel) {
              return (e.s.cRel ? "" : "$") + ft(e.s.c) + ":" + (e.e.cRel ? "" : "$") + ft(e.e.c);
            }
          }

          if (e.s.c == 0 && !e.s.cRel) {
            if (e.e.c == (r.biff >= 12 ? 16383 : 255) && !e.e.cRel) {
              return (e.s.rRel ? "" : "$") + it(e.s.r) + ":" + (e.e.rRel ? "" : "$") + it(e.e.r);
            }
          }

          return tt(e.s, r.biff) + ":" + tt(e.e, r.biff);
        }

        function nt(e) {
          return parseInt(lt(e), 10) - 1;
        }

        function it(e) {
          return "" + (e + 1);
        }

        function st(e) {
          return e.replace(/([A-Z]|^)(\d+)$/, "$1$$$2");
        }

        function lt(e) {
          return e.replace(/\$(\d+)$/, "$1");
        }

        function ot(e) {
          var r = ht(e),
              t = 0,
              a = 0;

          for (; a !== r.length; ++a) {
            t = 26 * t + r.charCodeAt(a) - 64;
          }

          return t - 1;
        }

        function ft(e) {
          if (e < 0) throw new Error("invalid column " + e);
          var r = "";

          for (++e; e; e = Math.floor((e - 1) / 26)) {
            r = String.fromCharCode((e - 1) % 26 + 65) + r;
          }

          return r;
        }

        function ct(e) {
          return e.replace(/^([A-Z])/, "$$$1");
        }

        function ht(e) {
          return e.replace(/^\$([A-Z])/, "$1");
        }

        function ut(e) {
          return e.replace(/(\$?[A-Z]*)(\$?\d*)/, "$1,$2").split(",");
        }

        function dt(e) {
          var r = 0,
              t = 0;

          for (var a = 0; a < e.length; ++a) {
            var n = e.charCodeAt(a);
            if (n >= 48 && n <= 57) r = 10 * r + (n - 48);else if (n >= 65 && n <= 90) t = 26 * t + (n - 64);
          }

          return {
            c: t - 1,
            r: r - 1
          };
        }

        function pt(e) {
          var r = e.c + 1;
          var t = "";

          for (; r; r = (r - 1) / 26 | 0) {
            t = String.fromCharCode((r - 1) % 26 + 65) + t;
          }

          return t + (e.r + 1);
        }

        function vt(e) {
          var r = e.indexOf(":");
          if (r == -1) return {
            s: dt(e),
            e: dt(e)
          };
          return {
            s: dt(e.slice(0, r)),
            e: dt(e.slice(r + 1))
          };
        }

        function mt(e, r) {
          if (typeof r === "undefined" || typeof r === "number") {
            return mt(e.s, e.e);
          }

          if (typeof e !== "string") e = pt(e);
          if (typeof r !== "string") r = pt(r);
          return e == r ? e : e + ":" + r;
        }

        function gt(e) {
          var r = {
            s: {
              c: 0,
              r: 0
            },
            e: {
              c: 0,
              r: 0
            }
          };
          var t = 0,
              a = 0,
              n = 0;
          var i = e.length;

          for (t = 0; a < i; ++a) {
            if ((n = e.charCodeAt(a) - 64) < 1 || n > 26) break;
            t = 26 * t + n;
          }

          r.s.c = --t;

          for (t = 0; a < i; ++a) {
            if ((n = e.charCodeAt(a) - 48) < 0 || n > 9) break;
            t = 10 * t + n;
          }

          r.s.r = --t;

          if (a === i || e.charCodeAt(++a) === 58) {
            r.e.c = r.s.c;
            r.e.r = r.s.r;
            return r;
          }

          for (t = 0; a != i; ++a) {
            if ((n = e.charCodeAt(a) - 64) < 1 || n > 26) break;
            t = 26 * t + n;
          }

          r.e.c = --t;

          for (t = 0; a != i; ++a) {
            if ((n = e.charCodeAt(a) - 48) < 0 || n > 9) break;
            t = 10 * t + n;
          }

          r.e.r = --t;
          return r;
        }

        function bt(e, r) {
          var t = e.t == "d" && r instanceof Date;
          if (e.z != null) try {
            return e.w = N.format(e.z, t ? ee(r) : r);
          } catch (a) {}

          try {
            return e.w = N.format((e.XF || {}).numFmtId || (t ? 14 : 0), t ? ee(r) : r);
          } catch (a) {
            return "" + r;
          }
        }

        function wt(e, r, t) {
          if (e == null || e.t == null || e.t == "z") return "";
          if (e.w !== undefined) return e.w;
          if (e.t == "d" && !e.z && t && t.dateNF) e.z = t.dateNF;
          if (r == undefined) return bt(e, e.v);
          return bt(e, r);
        }

        function kt(e, r) {
          var t = r && r.sheet ? r.sheet : "Sheet1";
          var a = {};
          a[t] = e;
          return {
            SheetNames: [t],
            Sheets: a
          };
        }

        function yt(e, r, t) {
          var a = t || {};
          var n = e ? Array.isArray(e) : a.dense;
          if (m != null && n == null) n = m;
          var i = e || (n ? [] : {});
          var s = 0,
              l = 0;

          if (i && a.origin != null) {
            if (typeof a.origin == "number") s = a.origin;else {
              var o = typeof a.origin == "string" ? dt(a.origin) : a.origin;
              s = o.r;
              l = o.c;
            }
            if (!i["!ref"]) i["!ref"] = "A1:A1";
          }

          var f = {
            s: {
              c: 1e7,
              r: 1e7
            },
            e: {
              c: 0,
              r: 0
            }
          };

          if (i["!ref"]) {
            var c = gt(i["!ref"]);
            f.s.c = c.s.c;
            f.s.r = c.s.r;
            f.e.c = Math.max(f.e.c, c.e.c);
            f.e.r = Math.max(f.e.r, c.e.r);
            if (s == -1) f.e.r = s = c.e.r + 1;
          }

          for (var h = 0; h != r.length; ++h) {
            if (!r[h]) continue;
            if (!Array.isArray(r[h])) throw new Error("aoa_to_sheet expects an array of arrays");

            for (var u = 0; u != r[h].length; ++u) {
              if (typeof r[h][u] === "undefined") continue;
              var d = {
                v: r[h][u]
              };
              var p = s + h,
                  v = l + u;
              if (f.s.r > p) f.s.r = p;
              if (f.s.c > v) f.s.c = v;
              if (f.e.r < p) f.e.r = p;
              if (f.e.c < v) f.e.c = v;
              if (r[h][u] && typeof r[h][u] === "object" && !Array.isArray(r[h][u]) && !(r[h][u] instanceof Date)) d = r[h][u];else {
                if (Array.isArray(d.v)) {
                  d.f = r[h][u][1];
                  d.v = d.v[0];
                }

                if (d.v === null) {
                  if (d.f) d.t = "n";else if (!a.sheetStubs) continue;else d.t = "z";
                } else if (typeof d.v === "number") d.t = "n";else if (typeof d.v === "boolean") d.t = "b";else if (d.v instanceof Date) {
                  d.z = a.dateNF || N._table[14];

                  if (a.cellDates) {
                    d.t = "d";
                    d.w = N.format(d.z, ee(d.v));
                  } else {
                    d.t = "n";
                    d.v = ee(d.v);
                    d.w = N.format(d.z, d.v);
                  }
                } else d.t = "s";
              }

              if (n) {
                if (!i[p]) i[p] = [];
                if (i[p][v] && i[p][v].z) d.z = i[p][v].z;
                i[p][v] = d;
              } else {
                var g = pt({
                  c: v,
                  r: p
                });
                if (i[g] && i[g].z) d.z = i[g].z;
                i[g] = d;
              }
            }
          }

          if (f.s.c < 1e7) i["!ref"] = mt(f);
          return i;
        }

        function xt(e, r) {
          return yt(null, e, r);
        }

        var _t = 2;
        var Ct = 3;
        var St = 11;
        var At = 12;
        var Et = 19;
        var Ft = 30;
        var Tt = 64;
        var Ot = 65;
        var Dt = 71;
        var Mt = 4096;
        var Nt = 80;
        var Pt = 81;
        var Rt = [Nt, Pt];
        var It = {
          1: {
            n: "CodePage",
            t: _t
          },
          2: {
            n: "Category",
            t: Nt
          },
          3: {
            n: "PresentationFormat",
            t: Nt
          },
          4: {
            n: "ByteCount",
            t: Ct
          },
          5: {
            n: "LineCount",
            t: Ct
          },
          6: {
            n: "ParagraphCount",
            t: Ct
          },
          7: {
            n: "SlideCount",
            t: Ct
          },
          8: {
            n: "NoteCount",
            t: Ct
          },
          9: {
            n: "HiddenCount",
            t: Ct
          },
          10: {
            n: "MultimediaClipCount",
            t: Ct
          },
          11: {
            n: "ScaleCrop",
            t: St
          },
          12: {
            n: "HeadingPairs",
            t: Mt | At
          },
          13: {
            n: "TitlesOfParts",
            t: Mt | Ft
          },
          14: {
            n: "Manager",
            t: Nt
          },
          15: {
            n: "Company",
            t: Nt
          },
          16: {
            n: "LinksUpToDate",
            t: St
          },
          17: {
            n: "CharacterCount",
            t: Ct
          },
          19: {
            n: "SharedDoc",
            t: St
          },
          22: {
            n: "HyperlinksChanged",
            t: St
          },
          23: {
            n: "AppVersion",
            t: Ct,
            p: "version"
          },
          24: {
            n: "DigSig",
            t: Ot
          },
          26: {
            n: "ContentType",
            t: Nt
          },
          27: {
            n: "ContentStatus",
            t: Nt
          },
          28: {
            n: "Language",
            t: Nt
          },
          29: {
            n: "Version",
            t: Nt
          },
          255: {}
        };
        var Lt = {
          1: {
            n: "CodePage",
            t: _t
          },
          2: {
            n: "Title",
            t: Nt
          },
          3: {
            n: "Subject",
            t: Nt
          },
          4: {
            n: "Author",
            t: Nt
          },
          5: {
            n: "Keywords",
            t: Nt
          },
          6: {
            n: "Comments",
            t: Nt
          },
          7: {
            n: "Template",
            t: Nt
          },
          8: {
            n: "LastAuthor",
            t: Nt
          },
          9: {
            n: "RevNumber",
            t: Nt
          },
          10: {
            n: "EditTime",
            t: Tt
          },
          11: {
            n: "LastPrinted",
            t: Tt
          },
          12: {
            n: "CreatedDate",
            t: Tt
          },
          13: {
            n: "ModifiedDate",
            t: Tt
          },
          14: {
            n: "PageCount",
            t: Ct
          },
          15: {
            n: "WordCount",
            t: Ct
          },
          16: {
            n: "CharCount",
            t: Ct
          },
          17: {
            n: "Thumbnail",
            t: Dt
          },
          18: {
            n: "Application",
            t: Nt
          },
          19: {
            n: "DocSecurity",
            t: Ct
          },
          255: {}
        };
        var Bt = {
          2147483648: {
            n: "Locale",
            t: Et
          },
          2147483651: {
            n: "Behavior",
            t: Et
          },
          1919054434: {}
        };

        (function () {
          for (var e in Bt) {
            if (Object.prototype.hasOwnProperty.call(Bt, e)) It[e] = Lt[e] = Bt[e];
          }
        })();

        var zt = J(It, "n");
        var Wt = J(Lt, "n");
        var $t = {
          1: "US",
          2: "CA",
          3: "",
          7: "RU",
          20: "EG",
          30: "GR",
          31: "NL",
          32: "BE",
          33: "FR",
          34: "ES",
          36: "HU",
          39: "IT",
          41: "CH",
          43: "AT",
          44: "GB",
          45: "DK",
          46: "SE",
          47: "NO",
          48: "PL",
          49: "DE",
          52: "MX",
          55: "BR",
          61: "AU",
          64: "NZ",
          66: "TH",
          81: "JP",
          82: "KR",
          84: "VN",
          86: "CN",
          90: "TR",
          105: "JS",
          213: "DZ",
          216: "MA",
          218: "LY",
          351: "PT",
          354: "IS",
          358: "FI",
          420: "CZ",
          886: "TW",
          961: "LB",
          962: "JO",
          963: "SY",
          964: "IQ",
          965: "KW",
          966: "SA",
          971: "AE",
          972: "IL",
          974: "QA",
          981: "IR",
          65535: "US"
        };
        var Ut = [null, "solid", "mediumGray", "darkGray", "lightGray", "darkHorizontal", "darkVertical", "darkDown", "darkUp", "darkGrid", "darkTrellis", "lightHorizontal", "lightVertical", "lightDown", "lightUp", "lightGrid", "lightTrellis", "gray125", "gray0625"];

        function jt(e) {
          return e.map(function (e) {
            return [e >> 16 & 255, e >> 8 & 255, e & 255];
          });
        }

        var Ht = jt([0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 0, 16777215, 16711680, 65280, 255, 16776960, 16711935, 65535, 8388608, 32768, 128, 8421376, 8388736, 32896, 12632256, 8421504, 10066431, 10040166, 16777164, 13434879, 6684774, 16744576, 26316, 13421823, 128, 16711935, 16776960, 65535, 8388736, 8388608, 32896, 255, 52479, 13434879, 13434828, 16777113, 10079487, 16751052, 13408767, 16764057, 3368703, 3394764, 10079232, 16763904, 16750848, 16737792, 6710937, 9868950, 13158, 3381606, 13056, 3355392, 10040064, 10040166, 3355545, 3355443, 16777215, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        var Vt = ce(Ht);
        var Xt = {
          0: "#NULL!",
          7: "#DIV/0!",
          15: "#VALUE!",
          23: "#REF!",
          29: "#NAME?",
          36: "#NUM!",
          42: "#N/A",
          43: "#GETTING_DATA",
          255: "#WTF?"
        };
        var Gt = q(Xt);
        var Yt = {
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml": "workbooks",
          "application/vnd.ms-excel.binIndexWs": "TODO",
          "application/vnd.ms-excel.intlmacrosheet": "TODO",
          "application/vnd.ms-excel.binIndexMs": "TODO",
          "application/vnd.openxmlformats-package.core-properties+xml": "coreprops",
          "application/vnd.openxmlformats-officedocument.custom-properties+xml": "custprops",
          "application/vnd.openxmlformats-officedocument.extended-properties+xml": "extprops",
          "application/vnd.openxmlformats-officedocument.customXmlProperties+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.customProperty": "TODO",
          "application/vnd.ms-excel.pivotTable": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotTable+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.drawingml.chart+xml": "TODO",
          "application/vnd.ms-office.chartcolorstyle+xml": "TODO",
          "application/vnd.ms-office.chartstyle+xml": "TODO",
          "application/vnd.ms-office.chartex+xml": "TODO",
          "application/vnd.ms-excel.calcChain": "calcchains",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.calcChain+xml": "calcchains",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.printerSettings": "TODO",
          "application/vnd.ms-office.activeX": "TODO",
          "application/vnd.ms-office.activeX+xml": "TODO",
          "application/vnd.ms-excel.attachedToolbars": "TODO",
          "application/vnd.ms-excel.connections": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.connections+xml": "TODO",
          "application/vnd.ms-excel.externalLink": "links",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.externalLink+xml": "links",
          "application/vnd.ms-excel.sheetMetadata": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheetMetadata+xml": "TODO",
          "application/vnd.ms-excel.pivotCacheDefinition": "TODO",
          "application/vnd.ms-excel.pivotCacheRecords": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheDefinition+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.pivotCacheRecords+xml": "TODO",
          "application/vnd.ms-excel.queryTable": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.queryTable+xml": "TODO",
          "application/vnd.ms-excel.userNames": "TODO",
          "application/vnd.ms-excel.revisionHeaders": "TODO",
          "application/vnd.ms-excel.revisionLog": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionHeaders+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.revisionLog+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.userNames+xml": "TODO",
          "application/vnd.ms-excel.tableSingleCells": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.tableSingleCells+xml": "TODO",
          "application/vnd.ms-excel.slicer": "TODO",
          "application/vnd.ms-excel.slicerCache": "TODO",
          "application/vnd.ms-excel.slicer+xml": "TODO",
          "application/vnd.ms-excel.slicerCache+xml": "TODO",
          "application/vnd.ms-excel.wsSortMap": "TODO",
          "application/vnd.ms-excel.table": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.table+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.theme+xml": "themes",
          "application/vnd.openxmlformats-officedocument.themeOverride+xml": "TODO",
          "application/vnd.ms-excel.Timeline+xml": "TODO",
          "application/vnd.ms-excel.TimelineCache+xml": "TODO",
          "application/vnd.ms-office.vbaProject": "vba",
          "application/vnd.ms-office.vbaProjectSignature": "vba",
          "application/vnd.ms-office.volatileDependencies": "TODO",
          "application/vnd.openxmlformats-officedocument.spreadsheetml.volatileDependencies+xml": "TODO",
          "application/vnd.ms-excel.controlproperties+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.model+data": "TODO",
          "application/vnd.ms-excel.Survey+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.drawing+xml": "drawings",
          "application/vnd.openxmlformats-officedocument.drawingml.chartshapes+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.drawingml.diagramColors+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.drawingml.diagramData+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.drawingml.diagramLayout+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.drawingml.diagramStyle+xml": "TODO",
          "application/vnd.openxmlformats-officedocument.vmlDrawing": "TODO",
          "application/vnd.openxmlformats-package.relationships+xml": "rels",
          "application/vnd.openxmlformats-officedocument.oleObject": "TODO",
          "image/png": "TODO",
          sheet: "js"
        };

        var Jt = function () {
          var e = {
            workbooks: {
              xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml",
              xlsm: "application/vnd.ms-excel.sheet.macroEnabled.main+xml",
              xlsb: "application/vnd.ms-excel.sheet.binary.macroEnabled.main",
              xlam: "application/vnd.ms-excel.addin.macroEnabled.main+xml",
              xltx: "application/vnd.openxmlformats-officedocument.spreadsheetml.template.main+xml"
            },
            strs: {
              xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sharedStrings+xml",
              xlsb: "application/vnd.ms-excel.sharedStrings"
            },
            comments: {
              xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.comments+xml",
              xlsb: "application/vnd.ms-excel.comments"
            },
            sheets: {
              xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml",
              xlsb: "application/vnd.ms-excel.worksheet"
            },
            charts: {
              xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.chartsheet+xml",
              xlsb: "application/vnd.ms-excel.chartsheet"
            },
            dialogs: {
              xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.dialogsheet+xml",
              xlsb: "application/vnd.ms-excel.dialogsheet"
            },
            macros: {
              xlsx: "application/vnd.ms-excel.macrosheet+xml",
              xlsb: "application/vnd.ms-excel.macrosheet"
            },
            styles: {
              xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml",
              xlsb: "application/vnd.ms-excel.styles"
            }
          };
          Y(e).forEach(function (r) {
            ["xlsm", "xlam"].forEach(function (t) {
              if (!e[r][t]) e[r][t] = e[r].xlsx;
            });
          });
          Y(e).forEach(function (r) {
            Y(e[r]).forEach(function (t) {
              Yt[e[r][t]] = r;
            });
          });
          return e;
        }();

        var Kt = Z(Yt);
        hr.CT = "http://schemas.openxmlformats.org/package/2006/content-types";

        function qt() {
          return {
            workbooks: [],
            sheets: [],
            charts: [],
            dialogs: [],
            macros: [],
            rels: [],
            strs: [],
            comments: [],
            links: [],
            coreprops: [],
            extprops: [],
            custprops: [],
            themes: [],
            styles: [],
            calcchains: [],
            vba: [],
            drawings: [],
            TODO: [],
            xmlns: ""
          };
        }

        function Zt(e) {
          var r = qt();
          if (!e || !e.match) return r;
          var t = {};
          (e.match(Oe) || []).forEach(function (e) {
            var a = Ne(e);

            switch (a[0].replace(De, "<")) {
              case "<?xml":
                break;

              case "<Types":
                r.xmlns = a["xmlns" + (a[0].match(/<(\w+):/) || ["", ""])[1]];
                break;

              case "<Default":
                t[a.Extension] = a.ContentType;
                break;

              case "<Override":
                if (r[Yt[a.ContentType]] !== undefined) r[Yt[a.ContentType]].push(a.PartName);
                break;
            }
          });
          if (r.xmlns !== hr.CT) throw new Error("Unknown Namespace: " + r.xmlns);
          r.calcchain = r.calcchains.length > 0 ? r.calcchains[0] : "";
          r.sst = r.strs.length > 0 ? r.strs[0] : "";
          r.style = r.styles.length > 0 ? r.styles[0] : "";
          r.defaults = t;
          delete r.calcchains;
          return r;
        }

        var Qt = or("Types", null, {
          xmlns: hr.CT,
          "xmlns:xsd": hr.xsd,
          "xmlns:xsi": hr.xsi
        });
        var ea = [["xml", "application/xml"], ["bin", "application/vnd.ms-excel.sheet.binary.macroEnabled.main"], ["vml", "application/vnd.openxmlformats-officedocument.vmlDrawing"], ["data", "application/vnd.openxmlformats-officedocument.model+data"], ["bmp", "image/bmp"], ["png", "image/png"], ["gif", "image/gif"], ["emf", "image/x-emf"], ["wmf", "image/x-wmf"], ["jpg", "image/jpeg"], ["jpeg", "image/jpeg"], ["tif", "image/tiff"], ["tiff", "image/tiff"], ["pdf", "application/pdf"], ["rels", Kt.rels[0]]].map(function (e) {
          return or("Default", null, {
            Extension: e[0],
            ContentType: e[1]
          });
        });

        function ra(e, r) {
          var t = [],
              a;
          t[t.length] = Fe;
          t[t.length] = Qt;
          t = t.concat(ea);

          var n = function n(_n2) {
            if (e[_n2] && e[_n2].length > 0) {
              a = e[_n2][0];
              t[t.length] = or("Override", null, {
                PartName: (a[0] == "/" ? "" : "/") + a,
                ContentType: Jt[_n2][r.bookType || "xlsx"]
              });
            }
          };

          var i = function i(a) {
            (e[a] || []).forEach(function (e) {
              t[t.length] = or("Override", null, {
                PartName: (e[0] == "/" ? "" : "/") + e,
                ContentType: Jt[a][r.bookType || "xlsx"]
              });
            });
          };

          var s = function s(r) {
            (e[r] || []).forEach(function (e) {
              t[t.length] = or("Override", null, {
                PartName: (e[0] == "/" ? "" : "/") + e,
                ContentType: Kt[r][0]
              });
            });
          };

          n("workbooks");
          i("sheets");
          i("charts");
          s("themes");
          ["strs", "styles"].forEach(n);
          ["coreprops", "extprops", "custprops"].forEach(s);
          s("vba");
          s("comments");
          s("drawings");

          if (t.length > 2) {
            t[t.length] = "</Types>";
            t[1] = t[1].replace("/>", ">");
          }

          return t.join("");
        }

        var ta = {
          WB: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
          SHEET: "http://sheetjs.openxmlformats.org/officeDocument/2006/relationships/officeDocument",
          HLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/hyperlink",
          VML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/vmlDrawing",
          XPATH: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLinkPath",
          XMISS: "http://schemas.microsoft.com/office/2006/relationships/xlExternalLinkPath/xlPathMissing",
          XLINK: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/externalLink",
          CXML: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXml",
          CXMLP: "http://schemas.openxmlformats.org/officeDocument/2006/relationships/customXmlProps",
          VBA: "http://schemas.microsoft.com/office/2006/relationships/vbaProject"
        };

        function aa(e) {
          var r = e.lastIndexOf("/");
          return e.slice(0, r + 1) + "_rels/" + e.slice(r + 1) + ".rels";
        }

        function na(e, r) {
          var t = {
            "!id": {}
          };
          if (!e) return t;

          if (r.charAt(0) !== "/") {
            r = "/" + r;
          }

          var a = {};
          (e.match(Oe) || []).forEach(function (e) {
            var n = Ne(e);

            if (n[0] === "<Relationship") {
              var i = {};
              i.Type = n.Type;
              i.Target = n.Target;
              i.Id = n.Id;
              i.TargetMode = n.TargetMode;
              var s = n.TargetMode === "External" ? n.Target : Ee(n.Target, r);
              t[s] = i;
              a[n.Id] = i;
            }
          });
          t["!id"] = a;
          return t;
        }

        hr.RELS = "http://schemas.openxmlformats.org/package/2006/relationships";
        var ia = or("Relationships", null, {
          xmlns: hr.RELS
        });

        function sa(e) {
          var r = [Fe, ia];
          Y(e["!id"]).forEach(function (t) {
            r[r.length] = or("Relationship", null, e["!id"][t]);
          });

          if (r.length > 2) {
            r[r.length] = "</Relationships>";
            r[1] = r[1].replace("/>", ">");
          }

          return r.join("");
        }

        var la = [ta.HLINK, ta.XPATH, ta.XMISS];

        function oa(e, r, t, a, n, i) {
          if (!n) n = {};
          if (!e["!id"]) e["!id"] = {};
          if (r < 0) for (r = 1; e["!id"]["rId" + r]; ++r) {}
          n.Id = "rId" + r;
          n.Type = a;
          n.Target = t;
          if (i) n.TargetMode = i;else if (la.indexOf(n.Type) > -1) n.TargetMode = "External";
          if (e["!id"][n.Id]) throw new Error("Cannot rewrite rId " + r);
          e["!id"][n.Id] = n;
          e[("/" + n.Target).replace("//", "/")] = n;
          return r;
        }

        var fa = [["cp:category", "Category"], ["cp:contentStatus", "ContentStatus"], ["cp:keywords", "Keywords"], ["cp:lastModifiedBy", "LastAuthor"], ["cp:lastPrinted", "LastPrinted"], ["cp:revision", "RevNumber"], ["cp:version", "Version"], ["dc:creator", "Author"], ["dc:description", "Comments"], ["dc:identifier", "Identifier"], ["dc:language", "Language"], ["dc:subject", "Subject"], ["dc:title", "Title"], ["dcterms:created", "CreatedDate", "date"], ["dcterms:modified", "ModifiedDate", "date"]];
        hr.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/metadata/core-properties";
        ta.CORE_PROPS = "http://schemas.openxmlformats.org/package/2006/relationships/metadata/core-properties";

        var ca = function () {
          var e = new Array(fa.length);

          for (var r = 0; r < fa.length; ++r) {
            var t = fa[r];
            var a = "(?:" + t[0].slice(0, t[0].indexOf(":")) + ":)" + t[0].slice(t[0].indexOf(":") + 1);
            e[r] = new RegExp("<" + a + "[^>]*>([\\s\\S]*?)</" + a + ">");
          }

          return e;
        }();

        function ha(e) {
          var r = {};
          e = Ye(e);

          for (var t = 0; t < fa.length; ++t) {
            var a = fa[t],
                n = e.match(ca[t]);
            if (n != null && n.length > 0) r[a[1]] = Le(n[1]);
            if (a[2] === "date" && r[a[1]]) r[a[1]] = oe(r[a[1]]);
          }

          return r;
        }

        var ua = or("cp:coreProperties", null, {
          "xmlns:cp": hr.CORE_PROPS,
          "xmlns:dc": hr.dc,
          "xmlns:dcterms": hr.dcterms,
          "xmlns:dcmitype": hr.dcmitype,
          "xmlns:xsi": hr.xsi
        });

        function da(e, r, t, a, n) {
          if (n[e] != null || r == null || r === "") return;
          n[e] = r;
          r = We(r);
          a[a.length] = t ? or(e, r, t) : sr(e, r);
        }

        function pa(e, r) {
          var t = r || {};
          var a = [Fe, ua],
              n = {};
          if (!e && !t.Props) return a.join("");

          if (e) {
            if (e.CreatedDate != null) da("dcterms:created", typeof e.CreatedDate === "string" ? e.CreatedDate : fr(e.CreatedDate, t.WTF), {
              "xsi:type": "dcterms:W3CDTF"
            }, a, n);
            if (e.ModifiedDate != null) da("dcterms:modified", typeof e.ModifiedDate === "string" ? e.ModifiedDate : fr(e.ModifiedDate, t.WTF), {
              "xsi:type": "dcterms:W3CDTF"
            }, a, n);
          }

          for (var i = 0; i != fa.length; ++i) {
            var s = fa[i];
            var l = t.Props && t.Props[s[1]] != null ? t.Props[s[1]] : e ? e[s[1]] : null;
            if (l === true) l = "1";else if (l === false) l = "0";else if (typeof l == "number") l = String(l);
            if (l != null) da(s[0], l, null, a, n);
          }

          if (a.length > 2) {
            a[a.length] = "</cp:coreProperties>";
            a[1] = a[1].replace("/>", ">");
          }

          return a.join("");
        }

        var va = [["Application", "Application", "string"], ["AppVersion", "AppVersion", "string"], ["Company", "Company", "string"], ["DocSecurity", "DocSecurity", "string"], ["Manager", "Manager", "string"], ["HyperlinksChanged", "HyperlinksChanged", "bool"], ["SharedDoc", "SharedDoc", "bool"], ["LinksUpToDate", "LinksUpToDate", "bool"], ["ScaleCrop", "ScaleCrop", "bool"], ["HeadingPairs", "HeadingPairs", "raw"], ["TitlesOfParts", "TitlesOfParts", "raw"]];
        hr.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/extended-properties";
        ta.EXT_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/extended-properties";
        var ma = ["Worksheets", "SheetNames", "NamedRanges", "DefinedNames", "Chartsheets", "ChartNames"];

        function ga(e, r, t, a) {
          var n = [];
          if (typeof e == "string") n = nr(e, a);else for (var i = 0; i < e.length; ++i) {
            n = n.concat(e[i].map(function (e) {
              return {
                v: e
              };
            }));
          }
          var s = typeof r == "string" ? nr(r, a).map(function (e) {
            return e.v;
          }) : r;
          var l = 0,
              o = 0;
          if (s.length > 0) for (var f = 0; f !== n.length; f += 2) {
            o = +n[f + 1].v;

            switch (n[f].v) {
              case "Worksheets":
                ;

              case "工作表":
                ;

              case "Листы":
                ;

              case "أوراق العمل":
                ;

              case "ワークシート":
                ;

              case "גליונות עבודה":
                ;

              case "Arbeitsblätter":
                ;

              case "Çalışma Sayfaları":
                ;

              case "Feuilles de calcul":
                ;

              case "Fogli di lavoro":
                ;

              case "Folhas de cálculo":
                ;

              case "Planilhas":
                ;

              case "Regneark":
                ;

              case "Hojas de cálculo":
                ;

              case "Werkbladen":
                t.Worksheets = o;
                t.SheetNames = s.slice(l, l + o);
                break;

              case "Named Ranges":
                ;

              case "Rangos con nombre":
                ;

              case "名前付き一覧":
                ;

              case "Benannte Bereiche":
                ;

              case "Navngivne områder":
                t.NamedRanges = o;
                t.DefinedNames = s.slice(l, l + o);
                break;

              case "Charts":
                ;

              case "Diagramme":
                t.Chartsheets = o;
                t.ChartNames = s.slice(l, l + o);
                break;
            }

            l += o;
          }
        }

        function ba(e, r, t) {
          var a = {};
          if (!r) r = {};
          e = Ye(e);
          va.forEach(function (t) {
            var n = (e.match(Qe(t[0])) || [])[1];

            switch (t[2]) {
              case "string":
                if (n) r[t[1]] = Le(n);
                break;

              case "bool":
                r[t[1]] = n === "true";
                break;

              case "raw":
                var i = e.match(new RegExp("<" + t[0] + "[^>]*>([\\s\\S]*?)</" + t[0] + ">"));
                if (i && i.length > 0) a[t[1]] = i[1];
                break;
            }
          });
          if (a.HeadingPairs && a.TitlesOfParts) ga(a.HeadingPairs, a.TitlesOfParts, r, t);
          return r;
        }

        var wa = or("Properties", null, {
          xmlns: hr.EXT_PROPS,
          "xmlns:vt": hr.vt
        });

        function ka(e) {
          var r = [],
              t = or;
          if (!e) e = {};
          e.Application = "SheetJS";
          r[r.length] = Fe;
          r[r.length] = wa;
          va.forEach(function (a) {
            if (e[a[1]] === undefined) return;
            var n;

            switch (a[2]) {
              case "string":
                n = We(String(e[a[1]]));
                break;

              case "bool":
                n = e[a[1]] ? "true" : "false";
                break;
            }

            if (n !== undefined) r[r.length] = t(a[0], n);
          });
          r[r.length] = t("HeadingPairs", t("vt:vector", t("vt:variant", "<vt:lpstr>Worksheets</vt:lpstr>") + t("vt:variant", t("vt:i4", String(e.Worksheets))), {
            size: 2,
            baseType: "variant"
          }));
          r[r.length] = t("TitlesOfParts", t("vt:vector", e.SheetNames.map(function (e) {
            return "<vt:lpstr>" + We(e) + "</vt:lpstr>";
          }).join(""), {
            size: e.Worksheets,
            baseType: "lpstr"
          }));

          if (r.length > 2) {
            r[r.length] = "</Properties>";
            r[1] = r[1].replace("/>", ">");
          }

          return r.join("");
        }

        hr.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/custom-properties";
        ta.CUST_PROPS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/custom-properties";
        var ya = /<[^>]+>[^<]*/g;

        function xa(e, r) {
          var t = {},
              a = "";
          var n = e.match(ya);
          if (n) for (var i = 0; i != n.length; ++i) {
            var s = n[i],
                l = Ne(s);

            switch (l[0]) {
              case "<?xml":
                break;

              case "<Properties":
                break;

              case "<property":
                a = Le(l.name);
                break;

              case "</property>":
                a = null;
                break;

              default:
                if (s.indexOf("<vt:") === 0) {
                  var o = s.split(">");
                  var f = o[0].slice(4),
                      c = o[1];

                  switch (f) {
                    case "lpstr":
                      ;

                    case "bstr":
                      ;

                    case "lpwstr":
                      t[a] = Le(c);
                      break;

                    case "bool":
                      t[a] = Ge(c);
                      break;

                    case "i1":
                      ;

                    case "i2":
                      ;

                    case "i4":
                      ;

                    case "i8":
                      ;

                    case "int":
                      ;

                    case "uint":
                      t[a] = parseInt(c, 10);
                      break;

                    case "r4":
                      ;

                    case "r8":
                      ;

                    case "decimal":
                      t[a] = parseFloat(c);
                      break;

                    case "filetime":
                      ;

                    case "date":
                      t[a] = oe(c);
                      break;

                    case "cy":
                      ;

                    case "error":
                      t[a] = Le(c);
                      break;

                    default:
                      if (f.slice(-1) == "/") break;
                      if (r.WTF && typeof console !== "undefined") console.warn("Unexpected", s, f, o);
                  }
                } else if (s.slice(0, 2) === "</") {} else if (r.WTF) throw new Error(s);

            }
          }
          return t;
        }

        var _a = or("Properties", null, {
          xmlns: hr.CUST_PROPS,
          "xmlns:vt": hr.vt
        });

        function Ca(e) {
          var r = [Fe, _a];
          if (!e) return r.join("");
          var t = 1;
          Y(e).forEach(function a(n) {
            ++t;
            r[r.length] = or("property", cr(e[n], true), {
              fmtid: "{D5CDD505-2E9C-101B-9397-08002B2CF9AE}",
              pid: t,
              name: We(n)
            });
          });

          if (r.length > 2) {
            r[r.length] = "</Properties>";
            r[1] = r[1].replace("/>", ">");
          }

          return r.join("");
        }

        var Sa = function () {
          var e = {
            1: 437,
            2: 850,
            3: 1252,
            4: 1e4,
            100: 852,
            101: 866,
            102: 865,
            103: 861,
            104: 895,
            105: 620,
            106: 737,
            107: 857,
            120: 950,
            121: 949,
            122: 936,
            123: 932,
            124: 874,
            125: 1255,
            126: 1256,
            150: 10007,
            151: 10029,
            152: 10006,
            200: 1250,
            201: 1251,
            202: 1254,
            203: 1253,
            0: 20127,
            8: 865,
            9: 437,
            10: 850,
            11: 437,
            13: 437,
            14: 850,
            15: 437,
            16: 850,
            17: 437,
            18: 850,
            19: 932,
            20: 850,
            21: 437,
            22: 850,
            23: 865,
            24: 437,
            25: 437,
            26: 850,
            27: 437,
            28: 863,
            29: 850,
            31: 852,
            34: 852,
            35: 852,
            36: 860,
            37: 850,
            38: 866,
            55: 850,
            64: 852,
            77: 936,
            78: 949,
            79: 950,
            80: 874,
            87: 1252,
            88: 1252,
            89: 1252,
            255: 16969
          };
          var r = K({
            1: 437,
            2: 850,
            3: 1252,
            4: 1e4,
            100: 852,
            101: 866,
            102: 865,
            103: 861,
            104: 895,
            105: 620,
            106: 737,
            107: 857,
            120: 950,
            121: 949,
            122: 936,
            123: 932,
            124: 874,
            125: 1255,
            126: 1256,
            150: 10007,
            151: 10029,
            152: 10006,
            200: 1250,
            201: 1251,
            202: 1254,
            203: 1253,
            0: 20127
          });
          var a = [2, 3, 48, 49, 131, 139, 140, 245];

          function n(r, t) {
            var a = [];

            var n = _(1);

            switch (t.type) {
              case "base64":
                n = S(b.decode(r));
                break;

              case "binary":
                n = S(r);
                break;

              case "buffer":
                ;

              case "array":
                n = r;
                break;
            }

            Yr(n, 0);

            var i = n._R(1);

            var s = false;
            var l = false,
                o = false;

            switch (i) {
              case 2:
                ;

              case 3:
                break;

              case 48:
                l = true;
                s = true;
                break;

              case 49:
                l = true;
                break;

              case 131:
                s = true;
                break;

              case 139:
                s = true;
                break;

              case 140:
                s = true;
                o = true;
                break;

              case 245:
                s = true;
                break;

              default:
                throw new Error("DBF Unsupported Version: " + i.toString(16));
            }

            var f = 0,
                c = 0;
            if (i == 2) f = n._R(2);
            n.l += 3;
            if (i != 2) f = n._R(4);
            if (i != 2) c = n._R(2);

            var h = n._R(2);

            var u = 1252;

            if (i != 2) {
              n.l += 16;

              n._R(1);

              if (n[n.l] !== 0) u = e[n[n.l]];
              n.l += 1;
              n.l += 2;
            }

            if (o) n.l += 36;
            var d = [],
                p = {};
            var v = c - 10 - (l ? 264 : 0),
                m = o ? 32 : 11;

            while (i == 2 ? n.l < n.length && n[n.l] != 13 : n.l < v) {
              p = {};
              p.name = cptable.utils.decode(u, n.slice(n.l, n.l + m)).replace(/[\u0000\r\n].*$/g, "");
              n.l += m;
              p.type = String.fromCharCode(n._R(1));
              if (i != 2 && !o) p.offset = n._R(4);
              p.len = n._R(1);
              if (i == 2) p.offset = n._R(2);
              p.dec = n._R(1);
              if (p.name.length) d.push(p);
              if (i != 2) n.l += o ? 13 : 14;

              switch (p.type) {
                case "B":
                  if ((!l || p.len != 8) && t.WTF) console.log("Skipping " + p.name + ":" + p.type);
                  break;

                case "G":
                  ;

                case "P":
                  if (t.WTF) console.log("Skipping " + p.name + ":" + p.type);
                  break;

                case "C":
                  ;

                case "D":
                  ;

                case "F":
                  ;

                case "I":
                  ;

                case "L":
                  ;

                case "M":
                  ;

                case "N":
                  ;

                case "O":
                  ;

                case "T":
                  ;

                case "Y":
                  ;

                case "0":
                  ;

                case "@":
                  ;

                case "+":
                  break;

                default:
                  throw new Error("Unknown Field Type: " + p.type);
              }
            }

            if (n[n.l] !== 13) n.l = c - 1;else if (i == 2) n.l = 521;

            if (i != 2) {
              if (n._R(1) !== 13) throw new Error("DBF Terminator not found " + n.l + " " + n[n.l]);
              n.l = c;
            }

            var g = 0,
                w = 0;
            a[0] = [];

            for (w = 0; w != d.length; ++w) {
              a[0][w] = d[w].name;
            }

            while (f-- > 0) {
              if (n[n.l] === 42) {
                n.l += h;
                continue;
              }

              ++n.l;
              a[++g] = [];
              w = 0;

              for (w = 0; w != d.length; ++w) {
                var k = n.slice(n.l, n.l + d[w].len);
                n.l += d[w].len;
                Yr(k, 0);
                var y = cptable.utils.decode(u, k);

                switch (d[w].type) {
                  case "C":
                    a[g][w] = cptable.utils.decode(u, k);
                    a[g][w] = a[g][w].trim();
                    break;

                  case "D":
                    if (y.length === 8) a[g][w] = new Date(+y.slice(0, 4), +y.slice(4, 6) - 1, +y.slice(6, 8));else a[g][w] = y;
                    break;

                  case "F":
                    a[g][w] = parseFloat(y.trim());
                    break;

                  case "+":
                    ;

                  case "I":
                    a[g][w] = o ? k._R(-4, "i") ^ 2147483648 : k._R(4, "i");
                    break;

                  case "L":
                    switch (y.toUpperCase()) {
                      case "Y":
                        ;

                      case "T":
                        a[g][w] = true;
                        break;

                      case "N":
                        ;

                      case "F":
                        a[g][w] = false;
                        break;

                      case " ":
                        ;

                      case "?":
                        a[g][w] = false;
                        break;

                      default:
                        throw new Error("DBF Unrecognized L:|" + y + "|");
                    }

                    break;

                  case "M":
                    if (!s) throw new Error("DBF Unexpected MEMO for type " + i.toString(16));
                    a[g][w] = "##MEMO##" + (o ? parseInt(y.trim(), 10) : k._R(4));
                    break;

                  case "N":
                    a[g][w] = +y.replace(/\u0000/g, "").trim();
                    break;

                  case "@":
                    a[g][w] = new Date(k._R(-8, "f") - 621356832e5);
                    break;

                  case "T":
                    a[g][w] = new Date((k._R(4) - 2440588) * 864e5 + k._R(4));
                    break;

                  case "Y":
                    a[g][w] = k._R(4, "i") / 1e4;
                    break;

                  case "O":
                    a[g][w] = -k._R(-8, "f");
                    break;

                  case "B":
                    if (l && d[w].len == 8) {
                      a[g][w] = k._R(8, "f");
                      break;
                    }

                    ;

                  case "G":
                    ;

                  case "P":
                    k.l += d[w].len;
                    break;

                  case "0":
                    if (d[w].name === "_NullFlags") break;

                  default:
                    throw new Error("DBF Unsupported data type " + d[w].type);
                }
              }
            }

            if (i != 2) if (n.l < n.length && n[n.l++] != 26) throw new Error("DBF EOF Marker missing " + (n.l - 1) + " of " + n.length + " " + n[n.l - 1].toString(16));
            if (t && t.sheetRows) a = a.slice(0, t.sheetRows);
            return a;
          }

          function i(e, r) {
            var t = r || {};
            if (!t.dateNF) t.dateNF = "yyyymmdd";
            return xt(n(e, t), t);
          }

          function s(e, r) {
            try {
              return kt(i(e, r), r);
            } catch (t) {
              if (r && r.WTF) throw t;
            }

            return {
              SheetNames: [],
              Sheets: {}
            };
          }

          var l = {
            B: 8,
            C: 250,
            L: 1,
            D: 8,
            "?": 0,
            "": 0
          };

          function f(e, a) {
            var n = a || {};
            if (+n.codepage >= 0) o(+n.codepage);
            if (n.type == "string") throw new Error("Cannot write DBF to JS string");
            var i = Zr();
            var s = Al(e, {
              header: 1,
              raw: true,
              cellDates: true
            });
            var f = s[0],
                c = s.slice(1);
            var h = 0,
                u = 0,
                d = 0,
                p = 1;

            for (h = 0; h < f.length; ++h) {
              if (h == null) continue;
              ++d;
              if (typeof f[h] === "number") f[h] = f[h].toString(10);
              if (typeof f[h] !== "string") throw new Error("DBF Invalid column name " + f[h] + " |" + typeof f[h] + "|");
              if (f.indexOf(f[h]) !== h) for (u = 0; u < 1024; ++u) {
                if (f.indexOf(f[h] + "_" + u) == -1) {
                  f[h] += "_" + u;
                  break;
                }
              }
            }

            var v = gt(e["!ref"]);
            var m = [];

            for (h = 0; h <= v.e.c - v.s.c; ++h) {
              var g = [];

              for (u = 0; u < c.length; ++u) {
                if (c[u][h] != null) g.push(c[u][h]);
              }

              if (g.length == 0 || f[h] == null) {
                m[h] = "?";
                continue;
              }

              var b = "",
                  w = "";

              for (u = 0; u < g.length; ++u) {
                switch (typeof g[u]) {
                  case "number":
                    w = "B";
                    break;

                  case "string":
                    w = "C";
                    break;

                  case "boolean":
                    w = "L";
                    break;

                  case "object":
                    w = g[u] instanceof Date ? "D" : "C";
                    break;

                  default:
                    w = "C";
                }

                b = b && b != w ? "C" : w;
                if (b == "C") break;
              }

              p += l[b] || 0;
              m[h] = b;
            }

            var k = i.next(32);

            k._W(4, 318902576);

            k._W(4, c.length);

            k._W(2, 296 + 32 * d);

            k._W(2, p);

            for (h = 0; h < 4; ++h) {
              k._W(4, 0);
            }

            k._W(4, 0 | (+r[t] || 3) << 8);

            for (h = 0, u = 0; h < f.length; ++h) {
              if (f[h] == null) continue;
              var y = i.next(32);
              var x = (f[h].slice(-10) + "\0\0\0\0\0\0\0\0\0\0\0").slice(0, 11);

              y._W(1, x, "sbcs");

              y._W(1, m[h] == "?" ? "C" : m[h], "sbcs");

              y._W(4, u);

              y._W(1, l[m[h]] || 0);

              y._W(1, 0);

              y._W(1, 2);

              y._W(4, 0);

              y._W(1, 0);

              y._W(4, 0);

              y._W(4, 0);

              u += l[m[h]] || 0;
            }

            var _ = i.next(264);

            _._W(4, 13);

            for (h = 0; h < 65; ++h) {
              _._W(4, 0);
            }

            for (h = 0; h < c.length; ++h) {
              var C = i.next(p);

              C._W(1, 0);

              for (u = 0; u < f.length; ++u) {
                if (f[u] == null) continue;

                switch (m[u]) {
                  case "L":
                    C._W(1, c[h][u] == null ? 63 : c[h][u] ? 84 : 70);

                    break;

                  case "B":
                    C._W(8, c[h][u] || 0, "f");

                    break;

                  case "D":
                    if (!c[h][u]) C._W(8, "00000000", "sbcs");else {
                      C._W(4, ("0000" + c[h][u].getFullYear()).slice(-4), "sbcs");

                      C._W(2, ("00" + (c[h][u].getMonth() + 1)).slice(-2), "sbcs");

                      C._W(2, ("00" + c[h][u].getDate()).slice(-2), "sbcs");
                    }
                    break;

                  case "C":
                    var S = String(c[h][u] || "");

                    C._W(1, S, "sbcs");

                    for (d = 0; d < 250 - S.length; ++d) {
                      C._W(1, 32);
                    }

                    break;
                }
              }
            }

            i.next(1)._W(1, 26);

            return i.end();
          }

          return {
            versions: a,
            to_workbook: s,
            to_sheet: i,
            from_sheet: f
          };
        }();

        var Aa = function () {
          var e = {
            AA: "À",
            BA: "Á",
            CA: "Â",
            DA: 195,
            HA: "Ä",
            JA: 197,
            AE: "È",
            BE: "É",
            CE: "Ê",
            HE: "Ë",
            AI: "Ì",
            BI: "Í",
            CI: "Î",
            HI: "Ï",
            AO: "Ò",
            BO: "Ó",
            CO: "Ô",
            DO: 213,
            HO: "Ö",
            AU: "Ù",
            BU: "Ú",
            CU: "Û",
            HU: "Ü",
            Aa: "à",
            Ba: "á",
            Ca: "â",
            Da: 227,
            Ha: "ä",
            Ja: 229,
            Ae: "è",
            Be: "é",
            Ce: "ê",
            He: "ë",
            Ai: "ì",
            Bi: "í",
            Ci: "î",
            Hi: "ï",
            Ao: "ò",
            Bo: "ó",
            Co: "ô",
            Do: 245,
            Ho: "ö",
            Au: "ù",
            Bu: "ú",
            Cu: "û",
            Hu: "ü",
            KC: "Ç",
            Kc: "ç",
            q: "æ",
            z: "œ",
            a: "Æ",
            j: "Œ",
            DN: 209,
            Dn: 241,
            Hy: 255,
            S: 169,
            c: 170,
            R: 174,
            B: 180,
            0: 176,
            1: 177,
            2: 178,
            3: 179,
            5: 181,
            6: 182,
            7: 183,
            Q: 185,
            k: 186,
            b: 208,
            i: 216,
            l: 222,
            s: 240,
            y: 248,
            "!": 161,
            '"': 162,
            "#": 163,
            "(": 164,
            "%": 165,
            "'": 167,
            "H ": 168,
            "+": 171,
            ";": 187,
            "<": 188,
            "=": 189,
            ">": 190,
            "?": 191,
            "{": 223
          };
          var r = new RegExp("N(" + Y(e).join("|").replace(/\|\|\|/, "|\\||").replace(/([?()+])/g, "\\$1") + "|\\|)", "gm");

          var t = function t(r, _t2) {
            var a = e[_t2];
            return typeof a == "number" ? v(a) : a;
          };

          var a = function a(e, r, t) {
            var a = r.charCodeAt(0) - 32 << 4 | t.charCodeAt(0) - 48;
            return a == 59 ? e : v(a);
          };

          e["|"] = 254;

          function n(e, r) {
            switch (r.type) {
              case "base64":
                return i(b.decode(e), r);

              case "binary":
                return i(e, r);

              case "buffer":
                return i(e.toString("binary"), r);

              case "array":
                return i(fe(e), r);
            }

            throw new Error("Unrecognized type " + r.type);
          }

          function i(e, n) {
            var i = e.split(/[\n\r]+/),
                s = -1,
                l = -1,
                f = 0,
                c = 0,
                h = [];
            var u = [];
            var d = null;
            var p = {},
                v = [],
                m = [],
                g = [];
            var b = 0,
                w;
            if (+n.codepage >= 0) o(+n.codepage);

            for (; f !== i.length; ++f) {
              b = 0;
              var k = i[f].trim().replace(/\x1B([\x20-\x2F])([\x30-\x3F])/g, a).replace(r, t);
              var y = k.replace(/;;/g, "\0").split(";").map(function (e) {
                return e.replace(/\u0000/g, ";");
              });

              var x = y[0],
                  _;

              if (k.length > 0) switch (x) {
                case "ID":
                  break;

                case "E":
                  break;

                case "B":
                  break;

                case "O":
                  break;

                case "P":
                  if (y[1].charAt(0) == "P") u.push(k.slice(3).replace(/;;/g, ";"));
                  break;

                case "C":
                  var C = false,
                      S = false;

                  for (c = 1; c < y.length; ++c) {
                    switch (y[c].charAt(0)) {
                      case "X":
                        l = parseInt(y[c].slice(1)) - 1;
                        S = true;
                        break;

                      case "Y":
                        s = parseInt(y[c].slice(1)) - 1;
                        if (!S) l = 0;

                        for (w = h.length; w <= s; ++w) {
                          h[w] = [];
                        }

                        break;

                      case "K":
                        _ = y[c].slice(1);
                        if (_.charAt(0) === '"') _ = _.slice(1, _.length - 1);else if (_ === "TRUE") _ = true;else if (_ === "FALSE") _ = false;else if (!isNaN(ue(_))) {
                          _ = ue(_);
                          if (d !== null && N.is_date(d)) _ = ne(_);
                        } else if (!isNaN(de(_).getDate())) {
                          _ = oe(_);
                        }
                        if (typeof cptable !== "undefined" && typeof _ == "string" && (n || {}).type != "string" && (n || {}).codepage) _ = cptable.utils.decode(n.codepage, _);
                        C = true;
                        break;

                      case "E":
                        var A = qn(y[c].slice(1), {
                          r: s,
                          c: l
                        });
                        h[s][l] = [h[s][l], A];
                        break;

                      default:
                        if (n && n.WTF) throw new Error("SYLK bad record " + k);
                    }
                  }

                  if (C) {
                    h[s][l] = _;
                    d = null;
                  }

                  break;

                case "F":
                  var E = 0;

                  for (c = 1; c < y.length; ++c) {
                    switch (y[c].charAt(0)) {
                      case "X":
                        l = parseInt(y[c].slice(1)) - 1;
                        ++E;
                        break;

                      case "Y":
                        s = parseInt(y[c].slice(1)) - 1;

                        for (w = h.length; w <= s; ++w) {
                          h[w] = [];
                        }

                        break;

                      case "M":
                        b = parseInt(y[c].slice(1)) / 20;
                        break;

                      case "F":
                        break;

                      case "G":
                        break;

                      case "P":
                        d = u[parseInt(y[c].slice(1))];
                        break;

                      case "S":
                        break;

                      case "D":
                        break;

                      case "N":
                        break;

                      case "W":
                        g = y[c].slice(1).split(" ");

                        for (w = parseInt(g[0], 10); w <= parseInt(g[1], 10); ++w) {
                          b = parseInt(g[2], 10);
                          m[w - 1] = b === 0 ? {
                            hidden: true
                          } : {
                            wch: b
                          };
                          nn(m[w - 1]);
                        }

                        break;

                      case "C":
                        l = parseInt(y[c].slice(1)) - 1;
                        if (!m[l]) m[l] = {};
                        break;

                      case "R":
                        s = parseInt(y[c].slice(1)) - 1;
                        if (!v[s]) v[s] = {};

                        if (b > 0) {
                          v[s].hpt = b;
                          v[s].hpx = fn(b);
                        } else if (b === 0) v[s].hidden = true;

                        break;

                      default:
                        if (n && n.WTF) throw new Error("SYLK bad record " + k);
                    }
                  }

                  if (E < 1) d = null;
                  break;

                default:
                  if (n && n.WTF) throw new Error("SYLK bad record " + k);
              }
            }

            if (v.length > 0) p["!rows"] = v;
            if (m.length > 0) p["!cols"] = m;
            if (n && n.sheetRows) h = h.slice(0, n.sheetRows);
            return [h, p];
          }

          function s(e, r) {
            var t = n(e, r);
            var a = t[0],
                i = t[1];
            var s = xt(a, r);
            Y(i).forEach(function (e) {
              s[e] = i[e];
            });
            return s;
          }

          function l(e, r) {
            return kt(s(e, r), r);
          }

          function f(e, r, t, a) {
            var n = "C;Y" + (t + 1) + ";X" + (a + 1) + ";K";

            switch (e.t) {
              case "n":
                n += e.v || 0;
                if (e.f && !e.F) n += ";E" + Qn(e.f, {
                  r: t,
                  c: a
                });
                break;

              case "b":
                n += e.v ? "TRUE" : "FALSE";
                break;

              case "e":
                n += e.w || e.v;
                break;

              case "d":
                n += '"' + (e.w || e.v) + '"';
                break;

              case "s":
                n += '"' + e.v.replace(/"/g, "") + '"';
                break;
            }

            return n;
          }

          function c(e, r) {
            r.forEach(function (r, t) {
              var a = "F;W" + (t + 1) + " " + (t + 1) + " ";
              if (r.hidden) a += "0";else {
                if (typeof r.width == "number") r.wpx = Qa(r.width);
                if (typeof r.wpx == "number") r.wch = en(r.wpx);
                if (typeof r.wch == "number") a += Math.round(r.wch);
              }
              if (a.charAt(a.length - 1) != " ") e.push(a);
            });
          }

          function h(e, r) {
            r.forEach(function (r, t) {
              var a = "F;";
              if (r.hidden) a += "M0;";else if (r.hpt) a += "M" + 20 * r.hpt + ";";else if (r.hpx) a += "M" + 20 * on(r.hpx) + ";";
              if (a.length > 2) e.push(a + "R" + (t + 1));
            });
          }

          function u(e, r) {
            var t = ["ID;PWXL;N;E"],
                a = [];
            var n = gt(e["!ref"]),
                i;
            var s = Array.isArray(e);
            var l = "\r\n";
            t.push("P;PGeneral");
            t.push("F;P0;DG0G8;M255");
            if (e["!cols"]) c(t, e["!cols"]);
            if (e["!rows"]) h(t, e["!rows"]);
            t.push("B;Y" + (n.e.r - n.s.r + 1) + ";X" + (n.e.c - n.s.c + 1) + ";D" + [n.s.c, n.s.r, n.e.c, n.e.r].join(" "));

            for (var o = n.s.r; o <= n.e.r; ++o) {
              for (var u = n.s.c; u <= n.e.c; ++u) {
                var d = pt({
                  r: o,
                  c: u
                });
                i = s ? (e[o] || [])[u] : e[d];
                if (!i || i.v == null && (!i.f || i.F)) continue;
                a.push(f(i, e, o, u, r));
              }
            }

            return t.join(l) + l + a.join(l) + l + "E" + l;
          }

          return {
            to_workbook: l,
            to_sheet: s,
            from_sheet: u
          };
        }();

        var Ea = function () {
          function e(e, t) {
            switch (t.type) {
              case "base64":
                return r(b.decode(e), t);

              case "binary":
                return r(e, t);

              case "buffer":
                return r(e.toString("binary"), t);

              case "array":
                return r(fe(e), t);
            }

            throw new Error("Unrecognized type " + t.type);
          }

          function r(e, r) {
            var t = e.split("\n"),
                a = -1,
                n = -1,
                i = 0,
                s = [];

            for (; i !== t.length; ++i) {
              if (t[i].trim() === "BOT") {
                s[++a] = [];
                n = 0;
                continue;
              }

              if (a < 0) continue;
              var l = t[i].trim().split(",");
              var o = l[0],
                  f = l[1];
              ++i;
              var c = t[i].trim();

              switch (+o) {
                case -1:
                  if (c === "BOT") {
                    s[++a] = [];
                    n = 0;
                    continue;
                  } else if (c !== "EOD") throw new Error("Unrecognized DIF special command " + c);

                  break;

                case 0:
                  if (c === "TRUE") s[a][n] = true;else if (c === "FALSE") s[a][n] = false;else if (!isNaN(ue(f))) s[a][n] = ue(f);else if (!isNaN(de(f).getDate())) s[a][n] = oe(f);else s[a][n] = f;
                  ++n;
                  break;

                case 1:
                  c = c.slice(1, c.length - 1);
                  s[a][n++] = c !== "" ? c : null;
                  break;
              }

              if (c === "EOD") break;
            }

            if (r && r.sheetRows) s = s.slice(0, r.sheetRows);
            return s;
          }

          function t(r, t) {
            return xt(e(r, t), t);
          }

          function a(e, r) {
            return kt(t(e, r), r);
          }

          var n = function () {
            var e = function t(e, r, a, n, i) {
              e.push(r);
              e.push(a + "," + n);
              e.push('"' + i.replace(/"/g, '""') + '"');
            };

            var r = function a(e, r, t, n) {
              e.push(r + "," + t);
              e.push(r == 1 ? '"' + n.replace(/"/g, '""') + '"' : n);
            };

            return function n(t) {
              var a = [];
              var n = gt(t["!ref"]),
                  i;
              var s = Array.isArray(t);
              e(a, "TABLE", 0, 1, "sheetjs");
              e(a, "VECTORS", 0, n.e.r - n.s.r + 1, "");
              e(a, "TUPLES", 0, n.e.c - n.s.c + 1, "");
              e(a, "DATA", 0, 0, "");

              for (var l = n.s.r; l <= n.e.r; ++l) {
                r(a, -1, 0, "BOT");

                for (var o = n.s.c; o <= n.e.c; ++o) {
                  var f = pt({
                    r: l,
                    c: o
                  });
                  i = s ? (t[l] || [])[o] : t[f];

                  if (!i) {
                    r(a, 1, 0, "");
                    continue;
                  }

                  switch (i.t) {
                    case "n":
                      var c = g ? i.w : i.v;
                      if (!c && i.v != null) c = i.v;

                      if (c == null) {
                        if (g && i.f && !i.F) r(a, 1, 0, "=" + i.f);else r(a, 1, 0, "");
                      } else r(a, 0, c, "V");

                      break;

                    case "b":
                      r(a, 0, i.v ? 1 : 0, i.v ? "TRUE" : "FALSE");
                      break;

                    case "s":
                      r(a, 1, 0, !g || isNaN(i.v) ? i.v : '="' + i.v + '"');
                      break;

                    case "d":
                      if (!i.w) i.w = N.format(i.z || N._table[14], ee(oe(i.v)));
                      if (g) r(a, 0, i.w, "V");else r(a, 1, 0, i.w);
                      break;

                    default:
                      r(a, 1, 0, "");
                  }
                }
              }

              r(a, -1, 0, "EOD");
              var h = "\r\n";
              var u = a.join(h);
              return u;
            };
          }();

          return {
            to_workbook: a,
            to_sheet: t,
            from_sheet: n
          };
        }();

        var Fa = function () {
          function e(e) {
            return e.replace(/\\b/g, "\\").replace(/\\c/g, ":").replace(/\\n/g, "\n");
          }

          function r(e) {
            return e.replace(/\\/g, "\\b").replace(/:/g, "\\c").replace(/\n/g, "\\n");
          }

          function t(r, t) {
            var a = r.split("\n"),
                n = -1,
                i = -1,
                s = 0,
                l = [];

            for (; s !== a.length; ++s) {
              var o = a[s].trim().split(":");
              if (o[0] !== "cell") continue;
              var f = dt(o[1]);
              if (l.length <= f.r) for (n = l.length; n <= f.r; ++n) {
                if (!l[n]) l[n] = [];
              }
              n = f.r;
              i = f.c;

              switch (o[2]) {
                case "t":
                  l[n][i] = e(o[3]);
                  break;

                case "v":
                  l[n][i] = +o[3];
                  break;

                case "vtf":
                  var c = o[o.length - 1];

                case "vtc":
                  switch (o[3]) {
                    case "nl":
                      l[n][i] = +o[4] ? true : false;
                      break;

                    default:
                      l[n][i] = +o[4];
                      break;
                  }

                  if (o[2] == "vtf") l[n][i] = [l[n][i], c];
              }
            }

            if (t && t.sheetRows) l = l.slice(0, t.sheetRows);
            return l;
          }

          function a(e, r) {
            return xt(t(e, r), r);
          }

          function n(e, r) {
            return kt(a(e, r), r);
          }

          var i = ["socialcalc:version:1.5", "MIME-Version: 1.0", "Content-Type: multipart/mixed; boundary=SocialCalcSpreadsheetControlSave"].join("\n");
          var s = ["--SocialCalcSpreadsheetControlSave", "Content-type: text/plain; charset=UTF-8"].join("\n") + "\n";
          var l = ["# SocialCalc Spreadsheet Control Save", "part:sheet"].join("\n");
          var o = "--SocialCalcSpreadsheetControlSave--";

          function f(e) {
            if (!e || !e["!ref"]) return "";
            var t = [],
                a = [],
                n,
                i = "";
            var s = vt(e["!ref"]);
            var l = Array.isArray(e);

            for (var o = s.s.r; o <= s.e.r; ++o) {
              for (var f = s.s.c; f <= s.e.c; ++f) {
                i = pt({
                  r: o,
                  c: f
                });
                n = l ? (e[o] || [])[f] : e[i];
                if (!n || n.v == null || n.t === "z") continue;
                a = ["cell", i, "t"];

                switch (n.t) {
                  case "s":
                    ;

                  case "str":
                    a.push(r(n.v));
                    break;

                  case "n":
                    if (!n.f) {
                      a[2] = "v";
                      a[3] = n.v;
                    } else {
                      a[2] = "vtf";
                      a[3] = "n";
                      a[4] = n.v;
                      a[5] = r(n.f);
                    }

                    break;

                  case "b":
                    a[2] = "vt" + (n.f ? "f" : "c");
                    a[3] = "nl";
                    a[4] = n.v ? "1" : "0";
                    a[5] = r(n.f || (n.v ? "TRUE" : "FALSE"));
                    break;

                  case "d":
                    var c = ee(oe(n.v));
                    a[2] = "vtc";
                    a[3] = "nd";
                    a[4] = "" + c;
                    a[5] = n.w || N.format(n.z || N._table[14], c);
                    break;

                  case "e":
                    continue;
                }

                t.push(a.join(":"));
              }
            }

            t.push("sheet:c:" + (s.e.c - s.s.c + 1) + ":r:" + (s.e.r - s.s.r + 1) + ":tvf:1");
            t.push("valueformat:1:text-wiki");
            return t.join("\n");
          }

          function c(e) {
            return [i, s, l, s, f(e), o].join("\n");
          }

          return {
            to_workbook: n,
            to_sheet: a,
            from_sheet: c
          };
        }();

        var Ta = function () {
          function e(e, r, t, a, n) {
            if (n.raw) r[t][a] = e;else if (e === "TRUE") r[t][a] = true;else if (e === "FALSE") r[t][a] = false;else if (e === "") {} else if (!isNaN(ue(e))) r[t][a] = ue(e);else if (!isNaN(de(e).getDate())) r[t][a] = oe(e);else r[t][a] = e;
          }

          function r(r, t) {
            var a = t || {};
            var n = [];
            if (!r || r.length === 0) return n;
            var i = r.split(/[\r\n]/);
            var s = i.length - 1;

            while (s >= 0 && i[s].length === 0) {
              --s;
            }

            var l = 10,
                o = 0;
            var f = 0;

            for (; f <= s; ++f) {
              o = i[f].indexOf(" ");
              if (o == -1) o = i[f].length;else o++;
              l = Math.max(l, o);
            }

            for (f = 0; f <= s; ++f) {
              n[f] = [];
              var c = 0;
              e(i[f].slice(0, l).trim(), n, f, c, a);

              for (c = 1; c <= (i[f].length - l) / 10 + 1; ++c) {
                e(i[f].slice(l + (c - 1) * 10, l + c * 10).trim(), n, f, c, a);
              }
            }

            if (a.sheetRows) n = n.slice(0, a.sheetRows);
            return n;
          }

          var t = {
            44: ",",
            9: "\t",
            59: ";"
          };
          var a = {
            44: 3,
            9: 2,
            59: 1
          };

          function n(e) {
            var r = {},
                n = false,
                i = 0,
                s = 0;

            for (; i < e.length; ++i) {
              if ((s = e.charCodeAt(i)) == 34) n = !n;else if (!n && s in t) r[s] = (r[s] || 0) + 1;
            }

            s = [];

            for (i in r) {
              if (Object.prototype.hasOwnProperty.call(r, i)) {
                s.push([r[i], i]);
              }
            }

            if (!s.length) {
              r = a;

              for (i in r) {
                if (Object.prototype.hasOwnProperty.call(r, i)) {
                  s.push([r[i], i]);
                }
              }
            }

            s.sort(function (e, r) {
              return e[0] - r[0] || a[e[1]] - a[r[1]];
            });
            return t[s.pop()[1]];
          }

          function i(e, r) {
            var t = r || {};
            var a = "";
            if (m != null && t.dense == null) t.dense = m;
            var i = t.dense ? [] : {};
            var s = {
              s: {
                c: 0,
                r: 0
              },
              e: {
                c: 0,
                r: 0
              }
            };

            if (e.slice(0, 4) == "sep=") {
              if (e.charCodeAt(5) == 13 && e.charCodeAt(6) == 10) {
                a = e.charAt(4);
                e = e.slice(7);
              } else if (e.charCodeAt(5) == 13 || e.charCodeAt(5) == 10) {
                a = e.charAt(4);
                e = e.slice(6);
              }
            } else a = n(e.slice(0, 1024));

            var l = 0,
                o = 0,
                f = 0;
            var c = 0,
                h = 0,
                u = a.charCodeAt(0),
                d = false,
                p = 0;
            e = e.replace(/\r\n/gm, "\n");
            var v = t.dateNF != null ? B(t.dateNF) : null;

            function g() {
              var r = e.slice(c, h);
              var a = {};
              if (r.charAt(0) == '"' && r.charAt(r.length - 1) == '"') r = r.slice(1, -1).replace(/""/g, '"');
              if (r.length === 0) a.t = "z";else if (t.raw) {
                a.t = "s";
                a.v = r;
              } else if (r.trim().length === 0) {
                a.t = "s";
                a.v = r;
              } else if (r.charCodeAt(0) == 61) {
                if (r.charCodeAt(1) == 34 && r.charCodeAt(r.length - 1) == 34) {
                  a.t = "s";
                  a.v = r.slice(2, -1).replace(/""/g, '"');
                } else if (ti(r)) {
                  a.t = "n";
                  a.f = r.slice(1);
                } else {
                  a.t = "s";
                  a.v = r;
                }
              } else if (r == "TRUE") {
                a.t = "b";
                a.v = true;
              } else if (r == "FALSE") {
                a.t = "b";
                a.v = false;
              } else if (!isNaN(f = ue(r))) {
                a.t = "n";
                if (t.cellText !== false) a.w = r;
                a.v = f;
              } else if (!isNaN(de(r).getDate()) || v && r.match(v)) {
                a.z = t.dateNF || N._table[14];
                var n = 0;

                if (v && r.match(v)) {
                  r = z(r, t.dateNF, r.match(v) || []);
                  n = 1;
                }

                if (t.cellDates) {
                  a.t = "d";
                  a.v = oe(r, n);
                } else {
                  a.t = "n";
                  a.v = ee(oe(r, n));
                }

                if (t.cellText !== false) a.w = N.format(a.z, a.v instanceof Date ? ee(a.v) : a.v);
                if (!t.cellNF) delete a.z;
              } else {
                a.t = "s";
                a.v = r;
              }

              if (a.t == "z") {} else if (t.dense) {
                if (!i[l]) i[l] = [];
                i[l][o] = a;
              } else i[pt({
                c: o,
                r: l
              })] = a;

              c = h + 1;
              if (s.e.c < o) s.e.c = o;
              if (s.e.r < l) s.e.r = l;
              if (p == u) ++o;else {
                o = 0;
                ++l;
                if (t.sheetRows && t.sheetRows <= l) return true;
              }
            }

            e: for (; h < e.length; ++h) {
              switch (p = e.charCodeAt(h)) {
                case 34:
                  d = !d;
                  break;

                case u:
                  ;

                case 10:
                  ;

                case 13:
                  if (!d && g()) break e;
                  break;

                default:
                  break;
              }
            }

            if (h - c > 0) g();
            i["!ref"] = mt(s);
            return i;
          }

          function s(e, t) {
            if (!(t && t.PRN)) return i(e, t);
            if (e.slice(0, 4) == "sep=") return i(e, t);
            if (e.indexOf("\t") >= 0 || e.indexOf(",") >= 0 || e.indexOf(";") >= 0) return i(e, t);
            return xt(r(e, t), t);
          }

          function l(e, r) {
            var t = "",
                a = r.type == "string" ? [0, 0, 0, 0] : il(e, r);

            switch (r.type) {
              case "base64":
                t = b.decode(e);
                break;

              case "binary":
                t = e;
                break;

              case "buffer":
                if (r.codepage == 65001) t = e.toString("utf8");else if (r.codepage && typeof cptable !== "undefined") t = cptable.utils.decode(r.codepage, e);else t = e.toString("binary");
                break;

              case "array":
                t = fe(e);
                break;

              case "string":
                t = e;
                break;

              default:
                throw new Error("Unrecognized type " + r.type);
            }

            if (a[0] == 239 && a[1] == 187 && a[2] == 191) t = Ye(t.slice(3));else if (r.type == "binary" && typeof cptable !== "undefined" && r.codepage) t = cptable.utils.decode(r.codepage, cptable.utils.encode(1252, t));
            if (t.slice(0, 19) == "socialcalc:version:") return Fa.to_sheet(r.type == "string" ? t : Ye(t), r);
            return s(t, r);
          }

          function o(e, r) {
            return kt(l(e, r), r);
          }

          function f(e) {
            var r = [];
            var t = gt(e["!ref"]),
                a;
            var n = Array.isArray(e);

            for (var i = t.s.r; i <= t.e.r; ++i) {
              var s = [];

              for (var l = t.s.c; l <= t.e.c; ++l) {
                var o = pt({
                  r: i,
                  c: l
                });
                a = n ? (e[i] || [])[l] : e[o];

                if (!a || a.v == null) {
                  s.push("          ");
                  continue;
                }

                var f = (a.w || (wt(a), a.w) || "").slice(0, 10);

                while (f.length < 10) {
                  f += " ";
                }

                s.push(f + (l === 0 ? " " : ""));
              }

              r.push(s.join(""));
            }

            return r.join("\n");
          }

          return {
            to_workbook: o,
            to_sheet: l,
            from_sheet: f
          };
        }();

        function Oa(e, r) {
          var t = r || {},
              a = !!t.WTF;
          t.WTF = true;

          try {
            var n = Aa.to_workbook(e, t);
            t.WTF = a;
            return n;
          } catch (i) {
            t.WTF = a;
            if (!i.message.match(/SYLK bad record ID/) && a) throw i;
            return Ta.to_workbook(e, r);
          }
        }

        function Da(e) {
          var r = {},
              t = e.match(Oe),
              a = 0;
          var n = false;
          if (t) for (; a != t.length; ++a) {
            var s = Ne(t[a]);

            switch (s[0].replace(/\w*:/g, "")) {
              case "<condense":
                break;

              case "<extend":
                break;

              case "<shadow":
                if (!s.val) break;

              case "<shadow>":
                ;

              case "<shadow/>":
                r.shadow = 1;
                break;

              case "</shadow>":
                break;

              case "<charset":
                if (s.val == "1") break;
                r.cp = i[parseInt(s.val, 10)];
                break;

              case "<outline":
                if (!s.val) break;

              case "<outline>":
                ;

              case "<outline/>":
                r.outline = 1;
                break;

              case "</outline>":
                break;

              case "<rFont":
                r.name = s.val;
                break;

              case "<sz":
                r.sz = s.val;
                break;

              case "<strike":
                if (!s.val) break;

              case "<strike>":
                ;

              case "<strike/>":
                r.strike = 1;
                break;

              case "</strike>":
                break;

              case "<u":
                if (!s.val) break;

                switch (s.val) {
                  case "double":
                    r.uval = "double";
                    break;

                  case "singleAccounting":
                    r.uval = "single-accounting";
                    break;

                  case "doubleAccounting":
                    r.uval = "double-accounting";
                    break;
                }

                ;

              case "<u>":
                ;

              case "<u/>":
                r.u = 1;
                break;

              case "</u>":
                break;

              case "<b":
                if (s.val == "0") break;

              case "<b>":
                ;

              case "<b/>":
                r.b = 1;
                break;

              case "</b>":
                break;

              case "<i":
                if (s.val == "0") break;

              case "<i>":
                ;

              case "<i/>":
                r.i = 1;
                break;

              case "</i>":
                break;

              case "<color":
                if (s.rgb) r.color = s.rgb.slice(2, 8);
                break;

              case "<family":
                r.family = s.val;
                break;

              case "<vertAlign":
                r.valign = s.val;
                break;

              case "<scheme":
                break;

              case "<extLst":
                ;

              case "<extLst>":
                ;

              case "</extLst>":
                break;

              case "<ext":
                n = true;
                break;

              case "</ext>":
                n = false;
                break;

              default:
                if (s[0].charCodeAt(1) !== 47 && !n) throw new Error("Unrecognized rich format " + s[0]);
            }
          }
          return r;
        }

        var Ma = function () {
          var e = Qe("t"),
              r = Qe("rPr");

          function t(t) {
            var a = t.match(e);
            if (!a) return {
              t: "s",
              v: ""
            };
            var n = {
              t: "s",
              v: Le(a[1])
            };
            var i = t.match(r);
            if (i) n.s = Da(i[1]);
            return n;
          }

          var a = /<(?:\w+:)?r>/g,
              n = /<\/(?:\w+:)?r>/;
          return function i(e) {
            return e.replace(a, "").split(n).map(t).filter(function (e) {
              return e.v;
            });
          };
        }();

        var Na = function eo() {
          var e = /(\r\n|\n)/g;

          function r(e, r, t) {
            var a = [];
            if (e.u) a.push("text-decoration: underline;");
            if (e.uval) a.push("text-underline-style:" + e.uval + ";");
            if (e.sz) a.push("font-size:" + e.sz + "pt;");
            if (e.outline) a.push("text-effect: outline;");
            if (e.shadow) a.push("text-shadow: auto;");
            r.push('<span style="' + a.join("") + '">');

            if (e.b) {
              r.push("<b>");
              t.push("</b>");
            }

            if (e.i) {
              r.push("<i>");
              t.push("</i>");
            }

            if (e.strike) {
              r.push("<s>");
              t.push("</s>");
            }

            var n = e.valign || "";
            if (n == "superscript" || n == "super") n = "sup";else if (n == "subscript") n = "sub";

            if (n != "") {
              r.push("<" + n + ">");
              t.push("</" + n + ">");
            }

            t.push("</span>");
            return e;
          }

          function t(t) {
            var a = [[], t.v, []];
            if (!t.v) return "";
            if (t.s) r(t.s, a[0], a[2]);
            return a[0].join("") + a[1].replace(e, "<br/>") + a[2].join("");
          }

          return function a(e) {
            return e.map(t).join("");
          };
        }();

        var Pa = /<(?:\w+:)?t[^>]*>([^<]*)<\/(?:\w+:)?t>/g,
            Ra = /<(?:\w+:)?r>/;
        var Ia = /<(?:\w+:)?rPh.*?>([\s\S]*?)<\/(?:\w+:)?rPh>/g;

        function La(e, r) {
          var t = r ? r.cellHTML : true;
          var a = {};
          if (!e) return {
            t: ""
          };

          if (e.match(/^\s*<(?:\w+:)?t[^>]*>/)) {
            a.t = Le(Ye(e.slice(e.indexOf(">") + 1).split(/<\/(?:\w+:)?t>/)[0] || ""));
            a.r = Ye(e);
            if (t) a.h = je(a.t);
          } else if (e.match(Ra)) {
            a.r = Ye(e);
            a.t = Le(Ye((e.replace(Ia, "").match(Pa) || []).join("").replace(Oe, "")));
            if (t) a.h = Na(Ma(a.r));
          }

          return a;
        }

        var Ba = /<(?:\w+:)?sst([^>]*)>([\s\S]*)<\/(?:\w+:)?sst>/;
        var za = /<(?:\w+:)?(?:si|sstItem)>/g;
        var Wa = /<\/(?:\w+:)?(?:si|sstItem)>/;

        function $a(e, r) {
          var t = [],
              a = "";
          if (!e) return t;
          var n = e.match(Ba);

          if (n) {
            a = n[2].replace(za, "").split(Wa);

            for (var i = 0; i != a.length; ++i) {
              var s = La(a[i].trim(), r);
              if (s != null) t[t.length] = s;
            }

            n = Ne(n[1]);
            t.Count = n.count;
            t.Unique = n.uniqueCount;
          }

          return t;
        }

        ta.SST = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/sharedStrings";
        var Ua = /^\s|\s$|[\t\n\r]/;

        function ja(e, r) {
          if (!r.bookSST) return "";
          var t = [Fe];
          t[t.length] = or("sst", null, {
            xmlns: hr.main[0],
            count: e.Count,
            uniqueCount: e.Unique
          });

          for (var a = 0; a != e.length; ++a) {
            if (e[a] == null) continue;
            var n = e[a];
            var i = "<si>";
            if (n.r) i += n.r;else {
              i += "<t";
              if (!n.t) n.t = "";
              if (n.t.match(Ua)) i += ' xml:space="preserve"';
              i += ">" + We(n.t) + "</t>";
            }
            i += "</si>";
            t[t.length] = i;
          }

          if (t.length > 2) {
            t[t.length] = "</sst>";
            t[1] = t[1].replace("/>", ">");
          }

          return t.join("");
        }

        function Ha(e) {
          var r = e.slice(e[0] === "#" ? 1 : 0).slice(0, 6);
          return [parseInt(r.slice(0, 2), 16), parseInt(r.slice(2, 4), 16), parseInt(r.slice(4, 6), 16)];
        }

        function Va(e) {
          for (var r = 0, t = 1; r != 3; ++r) {
            t = t * 256 + (e[r] > 255 ? 255 : e[r] < 0 ? 0 : e[r]);
          }

          return t.toString(16).toUpperCase().slice(1);
        }

        function Xa(e) {
          var r = e[0] / 255,
              t = e[1] / 255,
              a = e[2] / 255;
          var n = Math.max(r, t, a),
              i = Math.min(r, t, a),
              s = n - i;
          if (s === 0) return [0, 0, r];
          var l = 0,
              o = 0,
              f = n + i;
          o = s / (f > 1 ? 2 - f : f);

          switch (n) {
            case r:
              l = ((t - a) / s + 6) % 6;
              break;

            case t:
              l = (a - r) / s + 2;
              break;

            case a:
              l = (r - t) / s + 4;
              break;
          }

          return [l / 6, o, f / 2];
        }

        function Ga(e) {
          var r = e[0],
              t = e[1],
              a = e[2];
          var n = t * 2 * (a < .5 ? a : 1 - a),
              i = a - n / 2;
          var s = [i, i, i],
              l = 6 * r;
          var o;
          if (t !== 0) switch (l | 0) {
            case 0:
              ;

            case 6:
              o = n * l;
              s[0] += n;
              s[1] += o;
              break;

            case 1:
              o = n * (2 - l);
              s[0] += o;
              s[1] += n;
              break;

            case 2:
              o = n * (l - 2);
              s[1] += n;
              s[2] += o;
              break;

            case 3:
              o = n * (4 - l);
              s[1] += o;
              s[2] += n;
              break;

            case 4:
              o = n * (l - 4);
              s[2] += n;
              s[0] += o;
              break;

            case 5:
              o = n * (6 - l);
              s[2] += o;
              s[0] += n;
              break;
          }

          for (var f = 0; f != 3; ++f) {
            s[f] = Math.round(s[f] * 255);
          }

          return s;
        }

        function Ya(e, r) {
          if (r === 0) return e;
          var t = Xa(Ha(e));
          if (r < 0) t[2] = t[2] * (1 + r);else t[2] = 1 - (1 - t[2]) * (1 - r);
          return Va(Ga(t));
        }

        var Ja = 6,
            Ka = 15,
            qa = 1,
            Za = Ja;

        function Qa(e) {
          return Math.floor((e + Math.round(128 / Za) / 256) * Za);
        }

        function en(e) {
          return Math.floor((e - 5) / Za * 100 + .5) / 100;
        }

        function rn(e) {
          return Math.round((e * Za + 5) / Za * 256) / 256;
        }

        function tn(e) {
          return rn(en(Qa(e)));
        }

        function an(e) {
          var r = Math.abs(e - tn(e)),
              t = Za;
          if (r > .005) for (Za = qa; Za < Ka; ++Za) {
            if (Math.abs(e - tn(e)) <= r) {
              r = Math.abs(e - tn(e));
              t = Za;
            }
          }
          Za = t;
        }

        function nn(e) {
          if (e.width) {
            e.wpx = Qa(e.width);
            e.wch = en(e.wpx);
            e.MDW = Za;
          } else if (e.wpx) {
            e.wch = en(e.wpx);
            e.width = rn(e.wch);
            e.MDW = Za;
          } else if (typeof e.wch == "number") {
            e.width = rn(e.wch);
            e.wpx = Qa(e.width);
            e.MDW = Za;
          }

          if (e.customWidth) delete e.customWidth;
        }

        var sn = 96,
            ln = sn;

        function on(e) {
          return e * 96 / ln;
        }

        function fn(e) {
          return e * ln / 96;
        }

        var cn = {
          None: "none",
          Solid: "solid",
          Gray50: "mediumGray",
          Gray75: "darkGray",
          Gray25: "lightGray",
          HorzStripe: "darkHorizontal",
          VertStripe: "darkVertical",
          ReverseDiagStripe: "darkDown",
          DiagStripe: "darkUp",
          DiagCross: "darkGrid",
          ThickDiagCross: "darkTrellis",
          ThinHorzStripe: "lightHorizontal",
          ThinVertStripe: "lightVertical",
          ThinReverseDiagStripe: "lightDown",
          ThinHorzCross: "lightGrid"
        };

        function hn(e, r, t, a) {
          r.Borders = [];
          var n = {};
          var i = false;
          (e[0].match(Oe) || []).forEach(function (e) {
            var t = Ne(e);

            switch (Pe(t[0])) {
              case "<borders":
                ;

              case "<borders>":
                ;

              case "</borders>":
                break;

              case "<border":
                ;

              case "<border>":
                ;

              case "<border/>":
                n = {};
                if (t.diagonalUp) n.diagonalUp = Ge(t.diagonalUp);
                if (t.diagonalDown) n.diagonalDown = Ge(t.diagonalDown);
                r.Borders.push(n);
                break;

              case "</border>":
                break;

              case "<left/>":
                break;

              case "<left":
                ;

              case "<left>":
                break;

              case "</left>":
                break;

              case "<right/>":
                break;

              case "<right":
                ;

              case "<right>":
                break;

              case "</right>":
                break;

              case "<top/>":
                break;

              case "<top":
                ;

              case "<top>":
                break;

              case "</top>":
                break;

              case "<bottom/>":
                break;

              case "<bottom":
                ;

              case "<bottom>":
                break;

              case "</bottom>":
                break;

              case "<diagonal":
                ;

              case "<diagonal>":
                ;

              case "<diagonal/>":
                break;

              case "</diagonal>":
                break;

              case "<horizontal":
                ;

              case "<horizontal>":
                ;

              case "<horizontal/>":
                break;

              case "</horizontal>":
                break;

              case "<vertical":
                ;

              case "<vertical>":
                ;

              case "<vertical/>":
                break;

              case "</vertical>":
                break;

              case "<start":
                ;

              case "<start>":
                ;

              case "<start/>":
                break;

              case "</start>":
                break;

              case "<end":
                ;

              case "<end>":
                ;

              case "<end/>":
                break;

              case "</end>":
                break;

              case "<color":
                ;

              case "<color>":
                break;

              case "<color/>":
                ;

              case "</color>":
                break;

              case "<extLst":
                ;

              case "<extLst>":
                ;

              case "</extLst>":
                break;

              case "<ext":
                i = true;
                break;

              case "</ext>":
                i = false;
                break;

              default:
                if (a && a.WTF) {
                  if (!i) throw new Error("unrecognized " + t[0] + " in borders");
                }

                ;
            }
          });
        }

        function un(e, r, t, a) {
          r.Fills = [];
          var n = {};
          var i = false;
          (e[0].match(Oe) || []).forEach(function (e) {
            var t = Ne(e);

            switch (Pe(t[0])) {
              case "<fills":
                ;

              case "<fills>":
                ;

              case "</fills>":
                break;

              case "<fill>":
                ;

              case "<fill":
                ;

              case "<fill/>":
                n = {};
                r.Fills.push(n);
                break;

              case "</fill>":
                break;

              case "<gradientFill>":
                break;

              case "<gradientFill":
                ;

              case "</gradientFill>":
                r.Fills.push(n);
                n = {};
                break;

              case "<patternFill":
                ;

              case "<patternFill>":
                if (t.patternType) n.patternType = t.patternType;
                break;

              case "<patternFill/>":
                ;

              case "</patternFill>":
                break;

              case "<bgColor":
                if (!n.bgColor) n.bgColor = {};
                if (t.indexed) n.bgColor.indexed = parseInt(t.indexed, 10);
                if (t.theme) n.bgColor.theme = parseInt(t.theme, 10);
                if (t.tint) n.bgColor.tint = parseFloat(t.tint);
                if (t.rgb) n.bgColor.rgb = t.rgb.slice(-6);
                break;

              case "<bgColor/>":
                ;

              case "</bgColor>":
                break;

              case "<fgColor":
                if (!n.fgColor) n.fgColor = {};
                if (t.theme) n.fgColor.theme = parseInt(t.theme, 10);
                if (t.tint) n.fgColor.tint = parseFloat(t.tint);
                if (t.rgb != null) n.fgColor.rgb = t.rgb.slice(-6);
                break;

              case "<fgColor/>":
                ;

              case "</fgColor>":
                break;

              case "<stop":
                ;

              case "<stop/>":
                break;

              case "</stop>":
                break;

              case "<color":
                ;

              case "<color/>":
                break;

              case "</color>":
                break;

              case "<extLst":
                ;

              case "<extLst>":
                ;

              case "</extLst>":
                break;

              case "<ext":
                i = true;
                break;

              case "</ext>":
                i = false;
                break;

              default:
                if (a && a.WTF) {
                  if (!i) throw new Error("unrecognized " + t[0] + " in fills");
                }

                ;
            }
          });
        }

        function dn(e, r, t, a) {
          r.Fonts = [];
          var n = {};
          var s = false;
          (e[0].match(Oe) || []).forEach(function (e) {
            var l = Ne(e);

            switch (Pe(l[0])) {
              case "<fonts":
                ;

              case "<fonts>":
                ;

              case "</fonts>":
                break;

              case "<font":
                ;

              case "<font>":
                break;

              case "</font>":
                ;

              case "<font/>":
                r.Fonts.push(n);
                n = {};
                break;

              case "<name":
                if (l.val) n.name = Ye(l.val);
                break;

              case "<name/>":
                ;

              case "</name>":
                break;

              case "<b":
                n.bold = l.val ? Ge(l.val) : 1;
                break;

              case "<b/>":
                n.bold = 1;
                break;

              case "<i":
                n.italic = l.val ? Ge(l.val) : 1;
                break;

              case "<i/>":
                n.italic = 1;
                break;

              case "<u":
                switch (l.val) {
                  case "none":
                    n.underline = 0;
                    break;

                  case "single":
                    n.underline = 1;
                    break;

                  case "double":
                    n.underline = 2;
                    break;

                  case "singleAccounting":
                    n.underline = 33;
                    break;

                  case "doubleAccounting":
                    n.underline = 34;
                    break;
                }

                break;

              case "<u/>":
                n.underline = 1;
                break;

              case "<strike":
                n.strike = l.val ? Ge(l.val) : 1;
                break;

              case "<strike/>":
                n.strike = 1;
                break;

              case "<outline":
                n.outline = l.val ? Ge(l.val) : 1;
                break;

              case "<outline/>":
                n.outline = 1;
                break;

              case "<shadow":
                n.shadow = l.val ? Ge(l.val) : 1;
                break;

              case "<shadow/>":
                n.shadow = 1;
                break;

              case "<condense":
                n.condense = l.val ? Ge(l.val) : 1;
                break;

              case "<condense/>":
                n.condense = 1;
                break;

              case "<extend":
                n.extend = l.val ? Ge(l.val) : 1;
                break;

              case "<extend/>":
                n.extend = 1;
                break;

              case "<sz":
                if (l.val) n.sz = +l.val;
                break;

              case "<sz/>":
                ;

              case "</sz>":
                break;

              case "<vertAlign":
                if (l.val) n.vertAlign = l.val;
                break;

              case "<vertAlign/>":
                ;

              case "</vertAlign>":
                break;

              case "<family":
                if (l.val) n.family = parseInt(l.val, 10);
                break;

              case "<family/>":
                ;

              case "</family>":
                break;

              case "<scheme":
                if (l.val) n.scheme = l.val;
                break;

              case "<scheme/>":
                ;

              case "</scheme>":
                break;

              case "<charset":
                if (l.val == "1") break;
                l.codepage = i[parseInt(l.val, 10)];
                break;

              case "<color":
                if (!n.color) n.color = {};
                if (l.auto) n.color.auto = Ge(l.auto);
                if (l.rgb) n.color.rgb = l.rgb.slice(-6);else if (l.indexed) {
                  n.color.index = parseInt(l.indexed, 10);
                  var o = Vt[n.color.index];
                  if (n.color.index == 81) o = Vt[1];
                  if (!o) throw new Error(e);
                  n.color.rgb = o[0].toString(16) + o[1].toString(16) + o[2].toString(16);
                } else if (l.theme) {
                  n.color.theme = parseInt(l.theme, 10);
                  if (l.tint) n.color.tint = parseFloat(l.tint);

                  if (l.theme && t.themeElements && t.themeElements.clrScheme) {
                    n.color.rgb = Ya(t.themeElements.clrScheme[n.color.theme].rgb, n.color.tint || 0);
                  }
                }
                break;

              case "<color/>":
                ;

              case "</color>":
                break;

              case "<AlternateContent":
                s = true;
                break;

              case "</AlternateContent>":
                s = false;
                break;

              case "<extLst":
                ;

              case "<extLst>":
                ;

              case "</extLst>":
                break;

              case "<ext":
                s = true;
                break;

              case "</ext>":
                s = false;
                break;

              default:
                if (a && a.WTF) {
                  if (!s) throw new Error("unrecognized " + l[0] + " in fonts");
                }

                ;
            }
          });
        }

        function pn(e, r, t) {
          r.NumberFmt = [];
          var a = Y(N._table);

          for (var n = 0; n < a.length; ++n) {
            r.NumberFmt[a[n]] = N._table[a[n]];
          }

          var i = e[0].match(Oe);
          if (!i) return;

          for (n = 0; n < i.length; ++n) {
            var s = Ne(i[n]);

            switch (Pe(s[0])) {
              case "<numFmts":
                ;

              case "</numFmts>":
                ;

              case "<numFmts/>":
                ;

              case "<numFmts>":
                break;

              case "<numFmt":
                {
                  var l = Le(Ye(s.formatCode)),
                      o = parseInt(s.numFmtId, 10);
                  r.NumberFmt[o] = l;

                  if (o > 0) {
                    if (o > 392) {
                      for (o = 392; o > 60; --o) {
                        if (r.NumberFmt[o] == null) break;
                      }

                      r.NumberFmt[o] = l;
                    }

                    N.load(l, o);
                  }
                }
                break;

              case "</numFmt>":
                break;

              default:
                if (t.WTF) throw new Error("unrecognized " + s[0] + " in numFmts");
            }
          }
        }

        function vn(e) {
          var r = ["<numFmts>"];
          [[5, 8], [23, 26], [41, 44], [50, 392]].forEach(function (t) {
            for (var a = t[0]; a <= t[1]; ++a) {
              if (e[a] != null) r[r.length] = or("numFmt", null, {
                numFmtId: a,
                formatCode: We(e[a])
              });
            }
          });
          if (r.length === 1) return "";
          r[r.length] = "</numFmts>";
          r[0] = or("numFmts", null, {
            count: r.length - 2
          }).replace("/>", ">");
          return r.join("");
        }

        var mn = ["numFmtId", "fillId", "fontId", "borderId", "xfId"];
        var gn = ["applyAlignment", "applyBorder", "applyFill", "applyFont", "applyNumberFormat", "applyProtection", "pivotButton", "quotePrefix"];

        function bn(e, r, t) {
          r.CellXf = [];
          var a;
          var n = false;
          (e[0].match(Oe) || []).forEach(function (e) {
            var i = Ne(e),
                s = 0;

            switch (Pe(i[0])) {
              case "<cellXfs":
                ;

              case "<cellXfs>":
                ;

              case "<cellXfs/>":
                ;

              case "</cellXfs>":
                break;

              case "<xf":
                ;

              case "<xf/>":
                a = i;
                delete a[0];

                for (s = 0; s < mn.length; ++s) {
                  if (a[mn[s]]) a[mn[s]] = parseInt(a[mn[s]], 10);
                }

                for (s = 0; s < gn.length; ++s) {
                  if (a[gn[s]]) a[gn[s]] = Ge(a[gn[s]]);
                }

                if (a.numFmtId > 392) {
                  for (s = 392; s > 60; --s) {
                    if (r.NumberFmt[a.numFmtId] == r.NumberFmt[s]) {
                      a.numFmtId = s;
                      break;
                    }
                  }
                }

                r.CellXf.push(a);
                break;

              case "</xf>":
                break;

              case "<alignment":
                ;

              case "<alignment/>":
                var l = {};
                if (i.vertical) l.vertical = i.vertical;
                if (i.horizontal) l.horizontal = i.horizontal;
                if (i.textRotation != null) l.textRotation = i.textRotation;
                if (i.indent) l.indent = i.indent;
                if (i.wrapText) l.wrapText = Ge(i.wrapText);
                a.alignment = l;
                break;

              case "</alignment>":
                break;

              case "<protection":
                break;

              case "</protection>":
                ;

              case "<protection/>":
                break;

              case "<AlternateContent":
                n = true;
                break;

              case "</AlternateContent>":
                n = false;
                break;

              case "<extLst":
                ;

              case "<extLst>":
                ;

              case "</extLst>":
                break;

              case "<ext":
                n = true;
                break;

              case "</ext>":
                n = false;
                break;

              default:
                if (t && t.WTF) {
                  if (!n) throw new Error("unrecognized " + i[0] + " in cellXfs");
                }

                ;
            }
          });
        }

        function wn(e) {
          var r = [];
          r[r.length] = or("cellXfs", null);
          e.forEach(function (e) {
            r[r.length] = or("xf", null, e);
          });
          r[r.length] = "</cellXfs>";
          if (r.length === 2) return "";
          r[0] = or("cellXfs", null, {
            count: r.length - 2
          }).replace("/>", ">");
          return r.join("");
        }

        var kn = function ro() {
          var e = /<(?:\w+:)?numFmts([^>]*)>[\S\s]*?<\/(?:\w+:)?numFmts>/;
          var r = /<(?:\w+:)?cellXfs([^>]*)>[\S\s]*?<\/(?:\w+:)?cellXfs>/;
          var t = /<(?:\w+:)?fills([^>]*)>[\S\s]*?<\/(?:\w+:)?fills>/;
          var a = /<(?:\w+:)?fonts([^>]*)>[\S\s]*?<\/(?:\w+:)?fonts>/;
          var n = /<(?:\w+:)?borders([^>]*)>[\S\s]*?<\/(?:\w+:)?borders>/;
          return function i(s, l, o) {
            var f = {};
            if (!s) return f;
            s = s.replace(/<!--([\s\S]*?)-->/gm, "").replace(/<!DOCTYPE[^\[]*\[[^\]]*\]>/gm, "");
            var c;
            if (c = s.match(e)) pn(c, f, o);
            if (c = s.match(a)) dn(c, f, l, o);
            if (c = s.match(t)) un(c, f, l, o);
            if (c = s.match(n)) hn(c, f, l, o);
            if (c = s.match(r)) bn(c, f, o);
            return f;
          };
        }();

        var yn = or("styleSheet", null, {
          xmlns: hr.main[0],
          "xmlns:vt": hr.vt
        });
        ta.STY = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles";

        function xn(e, r) {
          var t = [Fe, yn],
              a;
          if (e.SSF && (a = vn(e.SSF)) != null) t[t.length] = a;
          t[t.length] = '<fonts count="1"><font><sz val="12"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts>';
          t[t.length] = '<fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills>';
          t[t.length] = '<borders count="1"><border><left/><right/><top/><bottom/><diagonal/></border></borders>';
          t[t.length] = '<cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs>';
          if (a = wn(r.cellXfs)) t[t.length] = a;
          t[t.length] = '<cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles>';
          t[t.length] = '<dxfs count="0"/>';
          t[t.length] = '<tableStyles count="0" defaultTableStyle="TableStyleMedium9" defaultPivotStyle="PivotStyleMedium4"/>';

          if (t.length > 2) {
            t[t.length] = "</styleSheet>";
            t[1] = t[1].replace("/>", ">");
          }

          return t.join("");
        }

        ta.THEME = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/theme";
        var _n = ["</a:lt1>", "</a:dk1>", "</a:lt2>", "</a:dk2>", "</a:accent1>", "</a:accent2>", "</a:accent3>", "</a:accent4>", "</a:accent5>", "</a:accent6>", "</a:hlink>", "</a:folHlink>"];

        function Cn(e, r, t) {
          r.themeElements.clrScheme = [];
          var a = {};
          (e[0].match(Oe) || []).forEach(function (e) {
            var n = Ne(e);

            switch (n[0]) {
              case "<a:clrScheme":
                ;

              case "</a:clrScheme>":
                break;

              case "<a:srgbClr":
                a.rgb = n.val;
                break;

              case "<a:sysClr":
                a.rgb = n.lastClr;
                break;

              case "<a:dk1>":
                ;

              case "</a:dk1>":
                ;

              case "<a:lt1>":
                ;

              case "</a:lt1>":
                ;

              case "<a:dk2>":
                ;

              case "</a:dk2>":
                ;

              case "<a:lt2>":
                ;

              case "</a:lt2>":
                ;

              case "<a:accent1>":
                ;

              case "</a:accent1>":
                ;

              case "<a:accent2>":
                ;

              case "</a:accent2>":
                ;

              case "<a:accent3>":
                ;

              case "</a:accent3>":
                ;

              case "<a:accent4>":
                ;

              case "</a:accent4>":
                ;

              case "<a:accent5>":
                ;

              case "</a:accent5>":
                ;

              case "<a:accent6>":
                ;

              case "</a:accent6>":
                ;

              case "<a:hlink>":
                ;

              case "</a:hlink>":
                ;

              case "<a:folHlink>":
                ;

              case "</a:folHlink>":
                if (n[0].charAt(1) === "/") {
                  r.themeElements.clrScheme[_n.indexOf(n[0])] = a;
                  a = {};
                } else {
                  a.name = n[0].slice(3, n[0].length - 1);
                }

                break;

              default:
                if (t && t.WTF) throw new Error("Unrecognized " + n[0] + " in clrScheme");
            }
          });
        }

        function Sn() {}

        function An() {}

        var En = /<a:clrScheme([^>]*)>[\s\S]*<\/a:clrScheme>/;
        var Fn = /<a:fontScheme([^>]*)>[\s\S]*<\/a:fontScheme>/;
        var Tn = /<a:fmtScheme([^>]*)>[\s\S]*<\/a:fmtScheme>/;

        function On(e, r, t) {
          r.themeElements = {};
          var a;
          [["clrScheme", En, Cn], ["fontScheme", Fn, Sn], ["fmtScheme", Tn, An]].forEach(function (n) {
            if (!(a = e.match(n[1]))) throw new Error(n[0] + " not found in themeElements");
            n[2](a, r, t);
          });
        }

        var Dn = /<a:themeElements([^>]*)>[\s\S]*<\/a:themeElements>/;

        function Mn(e, r) {
          if (!e || e.length === 0) return Mn(Nn());
          var t;
          var a = {};
          if (!(t = e.match(Dn))) throw new Error("themeElements not found in theme");
          On(t[0], a, r);
          a.raw = e;
          return a;
        }

        function Nn(e, r) {
          if (r && r.themeXLSX) return r.themeXLSX;
          if (e && typeof e.raw == "string") return e.raw;
          var t = [Fe];
          t[t.length] = '<a:theme xmlns:a="http://schemas.openxmlformats.org/drawingml/2006/main" name="Office Theme">';
          t[t.length] = "<a:themeElements>";
          t[t.length] = '<a:clrScheme name="Office">';
          t[t.length] = '<a:dk1><a:sysClr val="windowText" lastClr="000000"/></a:dk1>';
          t[t.length] = '<a:lt1><a:sysClr val="window" lastClr="FFFFFF"/></a:lt1>';
          t[t.length] = '<a:dk2><a:srgbClr val="1F497D"/></a:dk2>';
          t[t.length] = '<a:lt2><a:srgbClr val="EEECE1"/></a:lt2>';
          t[t.length] = '<a:accent1><a:srgbClr val="4F81BD"/></a:accent1>';
          t[t.length] = '<a:accent2><a:srgbClr val="C0504D"/></a:accent2>';
          t[t.length] = '<a:accent3><a:srgbClr val="9BBB59"/></a:accent3>';
          t[t.length] = '<a:accent4><a:srgbClr val="8064A2"/></a:accent4>';
          t[t.length] = '<a:accent5><a:srgbClr val="4BACC6"/></a:accent5>';
          t[t.length] = '<a:accent6><a:srgbClr val="F79646"/></a:accent6>';
          t[t.length] = '<a:hlink><a:srgbClr val="0000FF"/></a:hlink>';
          t[t.length] = '<a:folHlink><a:srgbClr val="800080"/></a:folHlink>';
          t[t.length] = "</a:clrScheme>";
          t[t.length] = '<a:fontScheme name="Office">';
          t[t.length] = "<a:majorFont>";
          t[t.length] = '<a:latin typeface="Cambria"/>';
          t[t.length] = '<a:ea typeface=""/>';
          t[t.length] = '<a:cs typeface=""/>';
          t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
          t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
          t[t.length] = '<a:font script="Hans" typeface="宋体"/>';
          t[t.length] = '<a:font script="Hant" typeface="新細明體"/>';
          t[t.length] = '<a:font script="Arab" typeface="Times New Roman"/>';
          t[t.length] = '<a:font script="Hebr" typeface="Times New Roman"/>';
          t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>';
          t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>';
          t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>';
          t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>';
          t[t.length] = '<a:font script="Khmr" typeface="MoolBoran"/>';
          t[t.length] = '<a:font script="Knda" typeface="Tunga"/>';
          t[t.length] = '<a:font script="Guru" typeface="Raavi"/>';
          t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>';
          t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
          t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
          t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
          t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
          t[t.length] = '<a:font script="Deva" typeface="Mangal"/>';
          t[t.length] = '<a:font script="Telu" typeface="Gautami"/>';
          t[t.length] = '<a:font script="Taml" typeface="Latha"/>';
          t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
          t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>';
          t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>';
          t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
          t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
          t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
          t[t.length] = '<a:font script="Viet" typeface="Times New Roman"/>';
          t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
          t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
          t[t.length] = "</a:majorFont>";
          t[t.length] = "<a:minorFont>";
          t[t.length] = '<a:latin typeface="Calibri"/>';
          t[t.length] = '<a:ea typeface=""/>';
          t[t.length] = '<a:cs typeface=""/>';
          t[t.length] = '<a:font script="Jpan" typeface="ＭＳ Ｐゴシック"/>';
          t[t.length] = '<a:font script="Hang" typeface="맑은 고딕"/>';
          t[t.length] = '<a:font script="Hans" typeface="宋体"/>';
          t[t.length] = '<a:font script="Hant" typeface="新細明體"/>';
          t[t.length] = '<a:font script="Arab" typeface="Arial"/>';
          t[t.length] = '<a:font script="Hebr" typeface="Arial"/>';
          t[t.length] = '<a:font script="Thai" typeface="Tahoma"/>';
          t[t.length] = '<a:font script="Ethi" typeface="Nyala"/>';
          t[t.length] = '<a:font script="Beng" typeface="Vrinda"/>';
          t[t.length] = '<a:font script="Gujr" typeface="Shruti"/>';
          t[t.length] = '<a:font script="Khmr" typeface="DaunPenh"/>';
          t[t.length] = '<a:font script="Knda" typeface="Tunga"/>';
          t[t.length] = '<a:font script="Guru" typeface="Raavi"/>';
          t[t.length] = '<a:font script="Cans" typeface="Euphemia"/>';
          t[t.length] = '<a:font script="Cher" typeface="Plantagenet Cherokee"/>';
          t[t.length] = '<a:font script="Yiii" typeface="Microsoft Yi Baiti"/>';
          t[t.length] = '<a:font script="Tibt" typeface="Microsoft Himalaya"/>';
          t[t.length] = '<a:font script="Thaa" typeface="MV Boli"/>';
          t[t.length] = '<a:font script="Deva" typeface="Mangal"/>';
          t[t.length] = '<a:font script="Telu" typeface="Gautami"/>';
          t[t.length] = '<a:font script="Taml" typeface="Latha"/>';
          t[t.length] = '<a:font script="Syrc" typeface="Estrangelo Edessa"/>';
          t[t.length] = '<a:font script="Orya" typeface="Kalinga"/>';
          t[t.length] = '<a:font script="Mlym" typeface="Kartika"/>';
          t[t.length] = '<a:font script="Laoo" typeface="DokChampa"/>';
          t[t.length] = '<a:font script="Sinh" typeface="Iskoola Pota"/>';
          t[t.length] = '<a:font script="Mong" typeface="Mongolian Baiti"/>';
          t[t.length] = '<a:font script="Viet" typeface="Arial"/>';
          t[t.length] = '<a:font script="Uigh" typeface="Microsoft Uighur"/>';
          t[t.length] = '<a:font script="Geor" typeface="Sylfaen"/>';
          t[t.length] = "</a:minorFont>";
          t[t.length] = "</a:fontScheme>";
          t[t.length] = '<a:fmtScheme name="Office">';
          t[t.length] = "<a:fillStyleLst>";
          t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
          t[t.length] = '<a:gradFill rotWithShape="1">';
          t[t.length] = "<a:gsLst>";
          t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="50000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
          t[t.length] = '<a:gs pos="35000"><a:schemeClr val="phClr"><a:tint val="37000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
          t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="15000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
          t[t.length] = "</a:gsLst>";
          t[t.length] = '<a:lin ang="16200000" scaled="1"/>';
          t[t.length] = "</a:gradFill>";
          t[t.length] = '<a:gradFill rotWithShape="1">';
          t[t.length] = "<a:gsLst>";
          t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="100000"/><a:shade val="100000"/><a:satMod val="130000"/></a:schemeClr></a:gs>';
          t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:tint val="50000"/><a:shade val="100000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
          t[t.length] = "</a:gsLst>";
          t[t.length] = '<a:lin ang="16200000" scaled="0"/>';
          t[t.length] = "</a:gradFill>";
          t[t.length] = "</a:fillStyleLst>";
          t[t.length] = "<a:lnStyleLst>";
          t[t.length] = '<a:ln w="9525" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"><a:shade val="95000"/><a:satMod val="105000"/></a:schemeClr></a:solidFill><a:prstDash val="solid"/></a:ln>';
          t[t.length] = '<a:ln w="25400" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
          t[t.length] = '<a:ln w="38100" cap="flat" cmpd="sng" algn="ctr"><a:solidFill><a:schemeClr val="phClr"/></a:solidFill><a:prstDash val="solid"/></a:ln>';
          t[t.length] = "</a:lnStyleLst>";
          t[t.length] = "<a:effectStyleLst>";
          t[t.length] = "<a:effectStyle>";
          t[t.length] = "<a:effectLst>";
          t[t.length] = '<a:outerShdw blurRad="40000" dist="20000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="38000"/></a:srgbClr></a:outerShdw>';
          t[t.length] = "</a:effectLst>";
          t[t.length] = "</a:effectStyle>";
          t[t.length] = "<a:effectStyle>";
          t[t.length] = "<a:effectLst>";
          t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
          t[t.length] = "</a:effectLst>";
          t[t.length] = "</a:effectStyle>";
          t[t.length] = "<a:effectStyle>";
          t[t.length] = "<a:effectLst>";
          t[t.length] = '<a:outerShdw blurRad="40000" dist="23000" dir="5400000" rotWithShape="0"><a:srgbClr val="000000"><a:alpha val="35000"/></a:srgbClr></a:outerShdw>';
          t[t.length] = "</a:effectLst>";
          t[t.length] = '<a:scene3d><a:camera prst="orthographicFront"><a:rot lat="0" lon="0" rev="0"/></a:camera><a:lightRig rig="threePt" dir="t"><a:rot lat="0" lon="0" rev="1200000"/></a:lightRig></a:scene3d>';
          t[t.length] = '<a:sp3d><a:bevelT w="63500" h="25400"/></a:sp3d>';
          t[t.length] = "</a:effectStyle>";
          t[t.length] = "</a:effectStyleLst>";
          t[t.length] = "<a:bgFillStyleLst>";
          t[t.length] = '<a:solidFill><a:schemeClr val="phClr"/></a:solidFill>';
          t[t.length] = '<a:gradFill rotWithShape="1">';
          t[t.length] = "<a:gsLst>";
          t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="40000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
          t[t.length] = '<a:gs pos="40000"><a:schemeClr val="phClr"><a:tint val="45000"/><a:shade val="99000"/><a:satMod val="350000"/></a:schemeClr></a:gs>';
          t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="20000"/><a:satMod val="255000"/></a:schemeClr></a:gs>';
          t[t.length] = "</a:gsLst>";
          t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="-80000" r="50000" b="180000"/></a:path>';
          t[t.length] = "</a:gradFill>";
          t[t.length] = '<a:gradFill rotWithShape="1">';
          t[t.length] = "<a:gsLst>";
          t[t.length] = '<a:gs pos="0"><a:schemeClr val="phClr"><a:tint val="80000"/><a:satMod val="300000"/></a:schemeClr></a:gs>';
          t[t.length] = '<a:gs pos="100000"><a:schemeClr val="phClr"><a:shade val="30000"/><a:satMod val="200000"/></a:schemeClr></a:gs>';
          t[t.length] = "</a:gsLst>";
          t[t.length] = '<a:path path="circle"><a:fillToRect l="50000" t="50000" r="50000" b="50000"/></a:path>';
          t[t.length] = "</a:gradFill>";
          t[t.length] = "</a:bgFillStyleLst>";
          t[t.length] = "</a:fmtScheme>";
          t[t.length] = "</a:themeElements>";
          t[t.length] = "<a:objectDefaults>";
          t[t.length] = "<a:spDef>";
          t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="1"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="3"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="2"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="lt1"/></a:fontRef></a:style>';
          t[t.length] = "</a:spDef>";
          t[t.length] = "<a:lnDef>";
          t[t.length] = '<a:spPr/><a:bodyPr/><a:lstStyle/><a:style><a:lnRef idx="2"><a:schemeClr val="accent1"/></a:lnRef><a:fillRef idx="0"><a:schemeClr val="accent1"/></a:fillRef><a:effectRef idx="1"><a:schemeClr val="accent1"/></a:effectRef><a:fontRef idx="minor"><a:schemeClr val="tx1"/></a:fontRef></a:style>';
          t[t.length] = "</a:lnDef>";
          t[t.length] = "</a:objectDefaults>";
          t[t.length] = "<a:extraClrSchemeLst/>";
          t[t.length] = "</a:theme>";
          return t.join("");
        }

        function Pn() {}

        function Rn(e, r, t, a) {
          if (!e) return e;
          var n = a || {};
          var i = false,
              s = false;
          qr(e, function l(e, r, t) {
            if (s) return;

            switch (t) {
              case 359:
                ;

              case 363:
                ;

              case 364:
                ;

              case 366:
                ;

              case 367:
                ;

              case 368:
                ;

              case 369:
                ;

              case 370:
                ;

              case 371:
                ;

              case 472:
                ;

              case 577:
                ;

              case 578:
                ;

              case 579:
                ;

              case 580:
                ;

              case 581:
                ;

              case 582:
                ;

              case 583:
                ;

              case 584:
                ;

              case 585:
                ;

              case 586:
                ;

              case 587:
                break;

              case 35:
                i = true;
                break;

              case 36:
                i = false;
                break;

              default:
                if ((r || "").indexOf("Begin") > 0) {} else if ((r || "").indexOf("End") > 0) {} else if (!i || n.WTF) throw new Error("Unexpected record " + t.toString(16) + " " + r);

            }
          }, n);
        }

        ta.IMG = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/image";
        ta.DRAW = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/drawing";

        function In(e, r) {
          if (!e) return "??";
          var t = (e.match(/<c:chart [^>]*r:id="([^"]*)"/) || ["", ""])[1];
          return r["!id"][t].Target;
        }

        var Ln = 1024;

        function Bn(e, r) {
          var t = [21600, 21600];
          var a = ["m0,0l0", t[1], t[0], t[1], t[0], "0xe"].join(",");
          var n = [or("xml", null, {
            "xmlns:v": ur.v,
            "xmlns:o": ur.o,
            "xmlns:x": ur.x,
            "xmlns:mv": ur.mv
          }).replace(/\/>/, ">"), or("o:shapelayout", or("o:idmap", null, {
            "v:ext": "edit",
            data: e
          }), {
            "v:ext": "edit"
          }), or("v:shapetype", [or("v:stroke", null, {
            joinstyle: "miter"
          }), or("v:path", null, {
            gradientshapeok: "t",
            "o:connecttype": "rect"
          })].join(""), {
            id: "_x0000_t202",
            "o:spt": 202,
            coordsize: t.join(","),
            path: a
          })];

          while (Ln < e * 1e3) {
            Ln += 1e3;
          }

          r.forEach(function (e) {
            var r = dt(e[0]);
            var t = {
              color2: "#BEFF82",
              type: "gradient"
            };
            if (t.type == "gradient") t.angle = "-180";
            var a = t.type == "gradient" ? or("o:fill", null, {
              type: "gradientUnscaled",
              "v:ext": "view"
            }) : null;
            var i = or("v:fill", a, t);
            var s = {
              on: "t",
              obscured: "t"
            };
            ++Ln;
            n = n.concat(["<v:shape" + lr({
              id: "_x0000_s" + Ln,
              type: "#_x0000_t202",
              style: "position:absolute; margin-left:80pt;margin-top:5pt;width:104pt;height:64pt;z-index:10" + (e[1].hidden ? ";visibility:hidden" : ""),
              fillcolor: "#ECFAD4",
              strokecolor: "#edeaa1"
            }) + ">", i, or("v:shadow", null, s), or("v:path", null, {
              "o:connecttype": "none"
            }), '<v:textbox><div style="text-align:left"></div></v:textbox>', '<x:ClientData ObjectType="Note">', "<x:MoveWithCells/>", "<x:SizeWithCells/>", sr("x:Anchor", [r.c + 1, 0, r.r + 1, 0, r.c + 3, 20, r.r + 5, 20].join(",")), sr("x:AutoFill", "False"), sr("x:Row", String(r.r)), sr("x:Column", String(r.c)), e[1].hidden ? "" : "<x:Visible/>", "</x:ClientData>", "</v:shape>"]);
          });
          n.push("</xml>");
          return n.join("");
        }

        ta.CMNT = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/comments";

        function zn(e, r) {
          var t = Array.isArray(e);
          var a;
          r.forEach(function (r) {
            var n = dt(r.ref);

            if (t) {
              if (!e[n.r]) e[n.r] = [];
              a = e[n.r][n.c];
            } else a = e[r.ref];

            if (!a) {
              a = {
                t: "z"
              };
              if (t) e[n.r][n.c] = a;else e[r.ref] = a;
              var i = gt(e["!ref"] || "BDWGO1000001:A1");
              if (i.s.r > n.r) i.s.r = n.r;
              if (i.e.r < n.r) i.e.r = n.r;
              if (i.s.c > n.c) i.s.c = n.c;
              if (i.e.c < n.c) i.e.c = n.c;
              var s = mt(i);
              if (s !== e["!ref"]) e["!ref"] = s;
            }

            if (!a.c) a.c = [];
            var l = {
              a: r.author,
              t: r.t,
              r: r.r
            };
            if (r.h) l.h = r.h;
            a.c.push(l);
          });
        }

        function Wn(e, r) {
          if (e.match(/<(?:\w+:)?comments *\/>/)) return [];
          var t = [];
          var a = [];
          var n = e.match(/<(?:\w+:)?authors>([\s\S]*)<\/(?:\w+:)?authors>/);
          if (n && n[1]) n[1].split(/<\/\w*:?author>/).forEach(function (e) {
            if (e === "" || e.trim() === "") return;
            var r = e.match(/<(?:\w+:)?author[^>]*>(.*)/);
            if (r) t.push(r[1]);
          });
          var i = e.match(/<(?:\w+:)?commentList>([\s\S]*)<\/(?:\w+:)?commentList>/);
          if (i && i[1]) i[1].split(/<\/\w*:?comment>/).forEach(function (e) {
            if (e === "" || e.trim() === "") return;
            var n = e.match(/<(?:\w+:)?comment[^>]*>/);
            if (!n) return;
            var i = Ne(n[0]);
            var s = {
              author: i.authorId && t[i.authorId] || "sheetjsghost",
              ref: i.ref,
              guid: i.guid
            };
            var l = dt(i.ref);
            if (r.sheetRows && r.sheetRows <= l.r) return;
            var o = e.match(/<(?:\w+:)?text>([\s\S]*)<\/(?:\w+:)?text>/);
            var f = !!o && !!o[1] && La(o[1]) || {
              r: "",
              t: "",
              h: ""
            };
            s.r = f.r;
            if (f.r == "<t></t>") f.t = f.h = "";
            s.t = f.t.replace(/\r\n/g, "\n").replace(/\r/g, "\n");
            if (r.cellHTML) s.h = f.h;
            a.push(s);
          });
          return a;
        }

        var $n = or("comments", null, {
          xmlns: hr.main[0]
        });

        function Un(e) {
          var r = [Fe, $n];
          var t = [];
          r.push("<authors>");
          e.forEach(function (e) {
            e[1].forEach(function (e) {
              var a = We(e.a);
              if (t.indexOf(a) > -1) return;
              t.push(a);
              r.push("<author>" + a + "</author>");
            });
          });
          r.push("</authors>");
          r.push("<commentList>");
          e.forEach(function (e) {
            e[1].forEach(function (a) {
              r.push('<comment ref="' + e[0] + '" authorId="' + t.indexOf(We(a.a)) + '"><text>');
              r.push(sr("t", a.t == null ? "" : We(a.t)));
              r.push("</text></comment>");
            });
          });
          r.push("</commentList>");

          if (r.length > 2) {
            r[r.length] = "</comments>";
            r[1] = r[1].replace("/>", ">");
          }

          return r.join("");
        }

        var jn = "application/vnd.ms-office.vbaProject";

        function Hn(e) {
          var r = j.utils.cfb_new({
            root: "R"
          });
          e.FullPaths.forEach(function (t, a) {
            if (t.slice(-1) === "/" || !t.match(/_VBA_PROJECT_CUR/)) return;
            var n = t.replace(/^[^\/]*/, "R").replace(/\/_VBA_PROJECT_CUR\u0000*/, "");
            j.utils.cfb_add(r, n, e.FileIndex[a].content);
          });
          return j.write(r);
        }

        function Vn(e, r) {
          r.FullPaths.forEach(function (t, a) {
            if (a == 0) return;
            var n = t.replace(/[^\/]*[\/]/, "/_VBA_PROJECT_CUR/");
            if (n.slice(-1) !== "/") j.utils.cfb_add(e, n, r.FileIndex[a].content);
          });
        }

        var Xn = ["xlsb", "xlsm", "xlam", "biff8", "xla"];
        ta.DS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/dialogsheet";
        ta.MS = "http://schemas.microsoft.com/office/2006/relationships/xlMacrosheet";

        function Gn() {
          return {
            "!type": "dialog"
          };
        }

        function Yn() {
          return {
            "!type": "dialog"
          };
        }

        function Jn() {
          return {
            "!type": "macro"
          };
        }

        function Kn() {
          return {
            "!type": "macro"
          };
        }

        var qn = function () {
          var e = /(^|[^A-Za-z_])R(\[?-?\d+\]|[1-9]\d*|)C(\[?-?\d+\]|[1-9]\d*|)(?![A-Za-z0-9_])/g;
          var r = {
            r: 0,
            c: 0
          };

          function t(e, t, a, n) {
            var i = false,
                s = false;
            if (a.length == 0) s = true;else if (a.charAt(0) == "[") {
              s = true;
              a = a.slice(1, -1);
            }
            if (n.length == 0) i = true;else if (n.charAt(0) == "[") {
              i = true;
              n = n.slice(1, -1);
            }
            var l = a.length > 0 ? parseInt(a, 10) | 0 : 0,
                o = n.length > 0 ? parseInt(n, 10) | 0 : 0;
            if (i) o += r.c;else --o;
            if (s) l += r.r;else --l;
            return t + (i ? "" : "$") + ft(o) + (s ? "" : "$") + it(l);
          }

          return function a(n, i) {
            r = i;
            return n.replace(e, t);
          };
        }();

        var Zn = /(^|[^._A-Z0-9])([$]?)([A-Z]{1,2}|[A-W][A-Z]{2}|X[A-E][A-Z]|XF[A-D])([$]?)(10[0-3]\d{4}|104[0-7]\d{3}|1048[0-4]\d{2}|10485[0-6]\d|104857[0-6]|[1-9]\d{0,5})(?![_.\(A-Za-z0-9])/g;

        var Qn = function () {
          return function e(r, t) {
            return r.replace(Zn, function (e, r, a, n, i, s) {
              var l = ot(n) - (a ? 0 : t.c);
              var o = nt(s) - (i ? 0 : t.r);
              var f = o == 0 ? "" : !i ? "[" + o + "]" : o + 1;
              var c = l == 0 ? "" : !a ? "[" + l + "]" : l + 1;
              return r + "R" + f + "C" + c;
            });
          };
        }();

        function ei(e, r) {
          return e.replace(Zn, function (e, t, a, n, i, s) {
            return t + (a == "$" ? a + n : ft(ot(n) + r.c)) + (i == "$" ? i + s : it(nt(s) + r.r));
          });
        }

        function ri(e, r, t) {
          var a = vt(r),
              n = a.s,
              i = dt(t);
          var s = {
            r: i.r - n.r,
            c: i.c - n.c
          };
          return ei(e, s);
        }

        function ti(e) {
          if (e.length == 1) return false;
          return true;
        }

        function ai(e) {
          return e.replace(/_xlfn\./g, "");
        }

        var ni = {};
        var ii = {};
        ta.WS = ["http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet", "http://purl.oclc.org/ooxml/officeDocument/relationships/worksheet"];
        var si = typeof Map !== "undefined";

        function li(e, r, t) {
          var a = 0,
              n = e.length;

          if (t) {
            if (si ? t.has(r) : Object.prototype.hasOwnProperty.call(t, r)) {
              var i = si ? t.get(r) : t[r];

              for (; a < i.length; ++a) {
                if (e[i[a]].t === r) {
                  e.Count++;
                  return i[a];
                }
              }
            }
          } else for (; a < n; ++a) {
            if (e[a].t === r) {
              e.Count++;
              return a;
            }
          }

          e[n] = {
            t: r
          };
          e.Count++;
          e.Unique++;

          if (t) {
            if (si) {
              if (!t.has(r)) t.set(r, []);
              t.get(r).push(n);
            } else {
              if (!Object.prototype.hasOwnProperty.call(t, r)) t[r] = [];
              t[r].push(n);
            }
          }

          return n;
        }

        function oi(e, r) {
          var t = {
            min: e + 1,
            max: e + 1
          };
          var a = -1;
          if (r.MDW) Za = r.MDW;
          if (r.width != null) t.customWidth = 1;else if (r.wpx != null) a = en(r.wpx);else if (r.wch != null) a = r.wch;

          if (a > -1) {
            t.width = rn(a);
            t.customWidth = 1;
          } else if (r.width != null) t.width = r.width;

          if (r.hidden) t.hidden = true;
          return t;
        }

        function fi(e, r) {
          if (!e) return;
          var t = [.7, .7, .75, .75, .3, .3];
          if (r == "xlml") t = [1, 1, 1, 1, .5, .5];
          if (e.left == null) e.left = t[0];
          if (e.right == null) e.right = t[1];
          if (e.top == null) e.top = t[2];
          if (e.bottom == null) e.bottom = t[3];
          if (e.header == null) e.header = t[4];
          if (e.footer == null) e.footer = t[5];
        }

        function ci(e, r, t) {
          var a = t.revssf[r.z != null ? r.z : "General"];
          var n = 60,
              i = e.length;

          if (a == null && t.ssf) {
            for (; n < 392; ++n) {
              if (t.ssf[n] == null) {
                N.load(r.z, n);
                t.ssf[n] = r.z;
                t.revssf[r.z] = a = n;
                break;
              }
            }
          }

          for (n = 0; n != i; ++n) {
            if (e[n].numFmtId === a) return n;
          }

          e[i] = {
            numFmtId: a,
            fontId: 0,
            fillId: 0,
            borderId: 0,
            xfId: 0,
            applyNumberFormat: 1
          };
          return i;
        }

        function hi(e, r, t, a, n, i) {
          try {
            if (a.cellNF) e.z = N._table[r];
          } catch (s) {
            if (a.WTF) throw s;
          }

          if (e.t === "z") return;
          if (e.t === "d" && typeof e.v === "string") e.v = oe(e.v);
          if (!a || a.cellText !== false) try {
            if (N._table[r] == null) N.load(I[r] || "General", r);
            if (e.t === "e") e.w = e.w || Xt[e.v];else if (r === 0) {
              if (e.t === "n") {
                if ((e.v | 0) === e.v) e.w = N._general_int(e.v);else e.w = N._general_num(e.v);
              } else if (e.t === "d") {
                var l = ee(e.v);
                if ((l | 0) === l) e.w = N._general_int(l);else e.w = N._general_num(l);
              } else if (e.v === undefined) return "";else e.w = N._general(e.v, ii);
            } else if (e.t === "d") e.w = N.format(r, ee(e.v), ii);else e.w = N.format(r, e.v, ii);
          } catch (s) {
            if (a.WTF) throw s;
          }
          if (!a.cellStyles) return;
          if (t != null) try {
            e.s = i.Fills[t];

            if (e.s.fgColor && e.s.fgColor.theme && !e.s.fgColor.rgb) {
              e.s.fgColor.rgb = Ya(n.themeElements.clrScheme[e.s.fgColor.theme].rgb, e.s.fgColor.tint || 0);
              if (a.WTF) e.s.fgColor.raw_rgb = n.themeElements.clrScheme[e.s.fgColor.theme].rgb;
            }

            if (e.s.bgColor && e.s.bgColor.theme) {
              e.s.bgColor.rgb = Ya(n.themeElements.clrScheme[e.s.bgColor.theme].rgb, e.s.bgColor.tint || 0);
              if (a.WTF) e.s.bgColor.raw_rgb = n.themeElements.clrScheme[e.s.bgColor.theme].rgb;
            }
          } catch (s) {
            if (a.WTF && i.Fills) throw s;
          }
        }

        function ui(e, r, t) {
          if (e && e["!ref"]) {
            var a = gt(e["!ref"]);
            if (a.e.c < a.s.c || a.e.r < a.s.r) throw new Error("Bad range (" + t + "): " + e["!ref"]);
          }
        }

        function di(e, r) {
          var t = gt(r);
          if (t.s.r <= t.e.r && t.s.c <= t.e.c && t.s.r >= 0 && t.s.c >= 0) e["!ref"] = mt(t);
        }

        var pi = /<(?:\w:)?mergeCell ref="[A-Z0-9:]+"\s*[\/]?>/g;
        var vi = /<(?:\w+:)?sheetData[^>]*>([\s\S]*)<\/(?:\w+:)?sheetData>/;
        var mi = /<(?:\w:)?hyperlink [^>]*>/gm;
        var gi = /"(\w*:\w*)"/;
        var bi = /<(?:\w:)?col\b[^>]*[\/]?>/g;
        var wi = /<(?:\w:)?autoFilter[^>]*([\/]|>([\s\S]*)<\/(?:\w:)?autoFilter)>/g;
        var ki = /<(?:\w:)?pageMargins[^>]*\/>/g;
        var yi = /<(?:\w:)?sheetPr\b(?:[^>a-z][^>]*)?\/>/;
        var xi = /<(?:\w:)?sheetViews[^>]*(?:[\/]|>([\s\S]*)<\/(?:\w:)?sheetViews)>/;

        function _i(e, r, t, a, n, i, s) {
          if (!e) return e;
          if (!a) a = {
            "!id": {}
          };
          if (m != null && r.dense == null) r.dense = m;
          var l = r.dense ? [] : {};
          var o = {
            s: {
              r: 2e6,
              c: 2e6
            },
            e: {
              r: 0,
              c: 0
            }
          };
          var f = "",
              c = "";
          var h = e.match(vi);

          if (h) {
            f = e.slice(0, h.index);
            c = e.slice(h.index + h[0].length);
          } else f = c = e;

          var u = f.match(yi);
          if (u) Si(u[0], l, n, t);
          var d = (f.match(/<(?:\w*:)?dimension/) || {
            index: -1
          }).index;

          if (d > 0) {
            var p = f.slice(d, d + 50).match(gi);
            if (p) di(l, p[1]);
          }

          var v = f.match(xi);
          if (v && v[1]) Bi(v[1], n);
          var g = [];

          if (r.cellStyles) {
            var b = f.match(bi);
            if (b) Ni(g, b);
          }

          if (h) $i(h[1], l, r, o, i, s);
          var w = c.match(wi);
          if (w) l["!autofilter"] = Ri(w[0]);
          var k = [];
          var y = c.match(pi);
          if (y) for (d = 0; d != y.length; ++d) {
            k[d] = gt(y[d].slice(y[d].indexOf('"') + 1));
          }
          var x = c.match(mi);
          if (x) Oi(l, x, a);

          var _ = c.match(ki);

          if (_) l["!margins"] = Di(Ne(_[0]));
          if (!l["!ref"] && o.e.c >= o.s.c && o.e.r >= o.s.r) l["!ref"] = mt(o);

          if (r.sheetRows > 0 && l["!ref"]) {
            var C = gt(l["!ref"]);

            if (r.sheetRows <= +C.e.r) {
              C.e.r = r.sheetRows - 1;
              if (C.e.r > o.e.r) C.e.r = o.e.r;
              if (C.e.r < C.s.r) C.s.r = C.e.r;
              if (C.e.c > o.e.c) C.e.c = o.e.c;
              if (C.e.c < C.s.c) C.s.c = C.e.c;
              l["!fullref"] = l["!ref"];
              l["!ref"] = mt(C);
            }
          }

          if (g.length > 0) l["!cols"] = g;
          if (k.length > 0) l["!merges"] = k;
          return l;
        }

        function Ci(e) {
          if (e.length === 0) return "";
          var r = '<mergeCells count="' + e.length + '">';

          for (var t = 0; t != e.length; ++t) {
            r += '<mergeCell ref="' + mt(e[t]) + '"/>';
          }

          return r + "</mergeCells>";
        }

        function Si(e, r, t, a) {
          var n = Ne(e);
          if (!t.Sheets[a]) t.Sheets[a] = {};
          if (n.codeName) t.Sheets[a].CodeName = Le(Ye(n.codeName));
        }

        function Ai(e, r, t, a, n) {
          var i = false;
          var s = {},
              l = null;

          if (a.bookType !== "xlsx" && r.vbaraw) {
            var o = r.SheetNames[t];

            try {
              if (r.Workbook) o = r.Workbook.Sheets[t].CodeName || o;
            } catch (f) {}

            i = true;
            s.codeName = Je(We(o));
          }

          if (e && e["!outline"]) {
            var c = {
              summaryBelow: 1,
              summaryRight: 1
            };
            if (e["!outline"].above) c.summaryBelow = 0;
            if (e["!outline"].left) c.summaryRight = 0;
            l = (l || "") + or("outlinePr", null, c);
          }

          if (!i && !l) return;
          n[n.length] = or("sheetPr", l, s);
        }

        var Ei = ["objects", "scenarios", "selectLockedCells", "selectUnlockedCells"];
        var Fi = ["formatColumns", "formatRows", "formatCells", "insertColumns", "insertRows", "insertHyperlinks", "deleteColumns", "deleteRows", "sort", "autoFilter", "pivotTables"];

        function Ti(e) {
          var r = {
            sheet: 1
          };
          Ei.forEach(function (t) {
            if (e[t] != null && e[t]) r[t] = "1";
          });
          Fi.forEach(function (t) {
            if (e[t] != null && !e[t]) r[t] = "0";
          });
          if (e.password) r.password = crypto_CreatePasswordVerifier_Method1(e.password).toString(16).toUpperCase();
          return or("sheetProtection", null, r);
        }

        function Oi(e, r, t) {
          var a = Array.isArray(e);

          for (var n = 0; n != r.length; ++n) {
            var i = Ne(Ye(r[n]), true);
            if (!i.ref) return;
            var s = ((t || {})["!id"] || [])[i.id];

            if (s) {
              i.Target = s.Target;
              if (i.location) i.Target += "#" + i.location;
            } else {
              i.Target = "#" + i.location;
              s = {
                Target: i.Target,
                TargetMode: "Internal"
              };
            }

            i.Rel = s;

            if (i.tooltip) {
              i.Tooltip = i.tooltip;
              delete i.tooltip;
            }

            var l = gt(i.ref);

            for (var o = l.s.r; o <= l.e.r; ++o) {
              for (var f = l.s.c; f <= l.e.c; ++f) {
                var c = pt({
                  c: f,
                  r: o
                });

                if (a) {
                  if (!e[o]) e[o] = [];
                  if (!e[o][f]) e[o][f] = {
                    t: "z",
                    v: undefined
                  };
                  e[o][f].l = i;
                } else {
                  if (!e[c]) e[c] = {
                    t: "z",
                    v: undefined
                  };
                  e[c].l = i;
                }
              }
            }
          }
        }

        function Di(e) {
          var r = {};
          ["left", "right", "top", "bottom", "header", "footer"].forEach(function (t) {
            if (e[t]) r[t] = parseFloat(e[t]);
          });
          return r;
        }

        function Mi(e) {
          fi(e);
          return or("pageMargins", null, e);
        }

        function Ni(e, r) {
          var t = false;

          for (var a = 0; a != r.length; ++a) {
            var n = Ne(r[a], true);
            if (n.hidden) n.hidden = Ge(n.hidden);
            var i = parseInt(n.min, 10) - 1,
                s = parseInt(n.max, 10) - 1;
            delete n.min;
            delete n.max;
            n.width = +n.width;

            if (!t && n.width) {
              t = true;
              an(n.width);
            }

            nn(n);

            while (i <= s) {
              e[i++] = ce(n);
            }
          }
        }

        function Pi(e, r) {
          var t = ["<cols>"],
              a;

          for (var n = 0; n != r.length; ++n) {
            if (!(a = r[n])) continue;
            t[t.length] = or("col", null, oi(n, a));
          }

          t[t.length] = "</cols>";
          return t.join("");
        }

        function Ri(e) {
          var r = {
            ref: (e.match(/ref="([^"]*)"/) || [])[1]
          };
          return r;
        }

        function Ii(e, r, t, a) {
          var n = typeof e.ref == "string" ? e.ref : mt(e.ref);
          if (!t.Workbook) t.Workbook = {
            Sheets: []
          };
          if (!t.Workbook.Names) t.Workbook.Names = [];
          var i = t.Workbook.Names;
          var s = vt(n);

          if (s.s.r == s.e.r) {
            s.e.r = vt(r["!ref"]).e.r;
            n = mt(s);
          }

          for (var l = 0; l < i.length; ++l) {
            var o = i[l];
            if (o.Name != "_xlnm._FilterDatabase") continue;
            if (o.Sheet != a) continue;
            o.Ref = "'" + t.SheetNames[a] + "'!" + n;
            break;
          }

          if (l == i.length) i.push({
            Name: "_xlnm._FilterDatabase",
            Sheet: a,
            Ref: "'" + t.SheetNames[a] + "'!" + n
          });
          return or("autoFilter", null, {
            ref: n
          });
        }

        var Li = /<(?:\w:)?sheetView(?:[^>a-z][^>]*)?\/?>/;

        function Bi(e, r) {
          if (!r.Views) r.Views = [{}];
          (e.match(Li) || []).forEach(function (e, t) {
            var a = Ne(e);
            if (!r.Views[t]) r.Views[t] = {};
            if (Ge(a.rightToLeft)) r.Views[t].RTL = true;
          });
        }

        function zi(e, r, t, a) {
          var n = {
            workbookViewId: "0"
          };
          if ((((a || {}).Workbook || {}).Views || [])[0]) n.rightToLeft = a.Workbook.Views[0].RTL ? "1" : "0";
          return or("sheetViews", or("sheetView", null, n), {});
        }

        function Wi(e, r, t, a) {
          if (e.v === undefined && typeof e.f !== "string" || e.t === "z") return "";
          var n = "";
          var i = e.t,
              s = e.v;
          if (e.t !== "z") switch (e.t) {
            case "b":
              n = e.v ? "1" : "0";
              break;

            case "n":
              n = "" + e.v;
              break;

            case "e":
              n = Xt[e.v];
              break;

            case "d":
              if (a && a.cellDates) n = oe(e.v, -1).toISOString();else {
                e = ce(e);
                e.t = "n";
                n = "" + (e.v = ee(oe(e.v)));
              }
              if (typeof e.z === "undefined") e.z = N._table[14];
              break;

            default:
              n = e.v;
              break;
          }
          var l = sr("v", We(n)),
              o = {
            r: r
          };
          var f = ci(a.cellXfs, e, a);
          if (f !== 0) o.s = f;

          switch (e.t) {
            case "n":
              break;

            case "d":
              o.t = "d";
              break;

            case "b":
              o.t = "b";
              break;

            case "e":
              o.t = "e";
              break;

            case "z":
              break;

            default:
              if (e.v == null) {
                delete e.t;
                break;
              }

              if (a && a.bookSST) {
                l = sr("v", "" + li(a.Strings, e.v, a.revStrings));
                o.t = "s";
                break;
              }

              o.t = "str";
              break;
          }

          if (e.t != i) {
            e.t = i;
            e.v = s;
          }

          if (typeof e.f == "string" && e.f) {
            var c = e.F && e.F.slice(0, r.length) == r ? {
              t: "array",
              ref: e.F
            } : null;
            l = or("f", We(e.f), c) + (e.v != null ? l : "");
          }

          if (e.l) t["!links"].push([r, e.l]);
          if (e.c) t["!comments"].push([r, e.c]);
          return or("c", l, o);
        }

        var $i = function () {
          var e = /<(?:\w+:)?c[ \/>]/,
              r = /<\/(?:\w+:)?row>/;
          var t = /r=["']([^"']*)["']/,
              a = /<(?:\w+:)?is>([\S\s]*?)<\/(?:\w+:)?is>/;
          var n = /ref=["']([^"']*)["']/;
          var i = Qe("v"),
              s = Qe("f");
          return function l(o, f, c, h, u, d) {
            var p = 0,
                v = "",
                m = [],
                g = [],
                b = 0,
                w = 0,
                k = 0,
                y = "",
                x;

            var _,
                C = 0,
                S = 0;

            var A, E;
            var F = 0,
                T = 0;
            var O = Array.isArray(d.CellXf),
                D;
            var M = [];
            var P = [];
            var R = Array.isArray(f);
            var I = [],
                L = {},
                B = false;
            var z = !!c.sheetStubs;

            for (var W = o.split(r), $ = 0, U = W.length; $ != U; ++$) {
              v = W[$].trim();
              var j = v.length;
              if (j === 0) continue;

              for (p = 0; p < j; ++p) {
                if (v.charCodeAt(p) === 62) break;
              }

              ++p;
              _ = Ne(v.slice(0, p), true);
              C = _.r != null ? parseInt(_.r, 10) : C + 1;
              S = -1;
              if (c.sheetRows && c.sheetRows < C) continue;
              if (h.s.r > C - 1) h.s.r = C - 1;
              if (h.e.r < C - 1) h.e.r = C - 1;

              if (c && c.cellStyles) {
                L = {};
                B = false;

                if (_.ht) {
                  B = true;
                  L.hpt = parseFloat(_.ht);
                  L.hpx = fn(L.hpt);
                }

                if (_.hidden == "1") {
                  B = true;
                  L.hidden = true;
                }

                if (_.outlineLevel != null) {
                  B = true;
                  L.level = +_.outlineLevel;
                }

                if (B) I[C - 1] = L;
              }

              m = v.slice(p).split(e);

              for (var H = 0; H != m.length; ++H) {
                if (m[H].trim().charAt(0) != "<") break;
              }

              m = m.slice(H);

              for (p = 0; p != m.length; ++p) {
                v = m[p].trim();
                if (v.length === 0) continue;
                g = v.match(t);
                b = p;
                w = 0;
                k = 0;
                v = "<c " + (v.slice(0, 1) == "<" ? ">" : "") + v;

                if (g != null && g.length === 2) {
                  b = 0;
                  y = g[1];

                  for (w = 0; w != y.length; ++w) {
                    if ((k = y.charCodeAt(w) - 64) < 1 || k > 26) break;
                    b = 26 * b + k;
                  }

                  --b;
                  S = b;
                } else ++S;

                for (w = 0; w != v.length; ++w) {
                  if (v.charCodeAt(w) === 62) break;
                }

                ++w;
                _ = Ne(v.slice(0, w), true);
                if (!_.r) _.r = pt({
                  r: C - 1,
                  c: S
                });
                y = v.slice(w);
                x = {
                  t: ""
                };
                if ((g = y.match(i)) != null && g[1] !== "") x.v = Le(g[1]);

                if (c.cellFormula) {
                  if ((g = y.match(s)) != null && g[1] !== "") {
                    x.f = Le(Ye(g[1])).replace(/\r\n/g, "\n");
                    if (!c.xlfn) x.f = ai(x.f);

                    if (g[0].indexOf('t="array"') > -1) {
                      x.F = (y.match(n) || [])[1];
                      if (x.F.indexOf(":") > -1) M.push([gt(x.F), x.F]);
                    } else if (g[0].indexOf('t="shared"') > -1) {
                      E = Ne(g[0]);
                      var V = Le(Ye(g[1]));
                      if (!c.xlfn) V = ai(V);
                      P[parseInt(E.si, 10)] = [E, V, _.r];
                    }
                  } else if (g = y.match(/<f[^>]*\/>/)) {
                    E = Ne(g[0]);
                    if (P[E.si]) x.f = ri(P[E.si][1], P[E.si][2], _.r);
                  }

                  var X = dt(_.r);

                  for (w = 0; w < M.length; ++w) {
                    if (X.r >= M[w][0].s.r && X.r <= M[w][0].e.r) if (X.c >= M[w][0].s.c && X.c <= M[w][0].e.c) x.F = M[w][1];
                  }
                }

                if (_.t == null && x.v === undefined) {
                  if (x.f || x.F) {
                    x.v = 0;
                    x.t = "n";
                  } else if (!z) continue;else x.t = "z";
                } else x.t = _.t || "n";

                if (h.s.c > S) h.s.c = S;
                if (h.e.c < S) h.e.c = S;

                switch (x.t) {
                  case "n":
                    if (x.v == "" || x.v == null) {
                      if (!z) continue;
                      x.t = "z";
                    } else x.v = parseFloat(x.v);

                    break;

                  case "s":
                    if (typeof x.v == "undefined") {
                      if (!z) continue;
                      x.t = "z";
                    } else {
                      A = ni[parseInt(x.v, 10)];
                      x.v = A.t;
                      x.r = A.r;
                      if (c.cellHTML) x.h = A.h;
                    }

                    break;

                  case "str":
                    x.t = "s";
                    x.v = x.v != null ? Ye(x.v) : "";
                    if (c.cellHTML) x.h = je(x.v);
                    break;

                  case "inlineStr":
                    g = y.match(a);
                    x.t = "s";

                    if (g != null && (A = La(g[1]))) {
                      x.v = A.t;
                      if (c.cellHTML) x.h = A.h;
                    } else x.v = "";

                    break;

                  case "b":
                    x.v = Ge(x.v);
                    break;

                  case "d":
                    if (c.cellDates) x.v = oe(x.v, 1);else {
                      x.v = ee(oe(x.v, 1));
                      x.t = "n";
                    }
                    break;

                  case "e":
                    if (!c || c.cellText !== false) x.w = x.v;
                    x.v = Gt[x.v];
                    break;
                }

                F = T = 0;
                D = null;

                if (O && _.s !== undefined) {
                  D = d.CellXf[_.s];

                  if (D != null) {
                    if (D.numFmtId != null) F = D.numFmtId;

                    if (c.cellStyles) {
                      if (D.fillId != null) T = D.fillId;
                    }
                  }
                }

                hi(x, F, T, c, u, d);

                if (c.cellDates && O && x.t == "n" && N.is_date(N._table[F])) {
                  x.t = "d";
                  x.v = ne(x.v);
                }

                if (R) {
                  var G = dt(_.r);
                  if (!f[G.r]) f[G.r] = [];
                  f[G.r][G.c] = x;
                } else f[_.r] = x;
              }
            }

            if (I.length > 0) f["!rows"] = I;
          };
        }();

        function Ui(e, r, t, a) {
          var n = [],
              i = [],
              s = gt(e["!ref"]),
              l = "",
              o,
              f = "",
              c = [],
              h = 0,
              u = 0,
              d = e["!rows"];
          var p = Array.isArray(e);
          var v = {
            r: f
          },
              m,
              g = -1;

          for (u = s.s.c; u <= s.e.c; ++u) {
            c[u] = ft(u);
          }

          for (h = s.s.r; h <= s.e.r; ++h) {
            i = [];
            f = it(h);

            for (u = s.s.c; u <= s.e.c; ++u) {
              o = c[u] + f;
              var b = p ? (e[h] || [])[u] : e[o];
              if (b === undefined) continue;
              if ((l = Wi(b, o, e, r, t, a)) != null) i.push(l);
            }

            if (i.length > 0 || d && d[h]) {
              v = {
                r: f
              };

              if (d && d[h]) {
                m = d[h];
                if (m.hidden) v.hidden = 1;
                g = -1;
                if (m.hpx) g = on(m.hpx);else if (m.hpt) g = m.hpt;

                if (g > -1) {
                  v.ht = g;
                  v.customHeight = 1;
                }

                if (m.level) {
                  v.outlineLevel = m.level;
                }
              }

              n[n.length] = or("row", i.join(""), v);
            }
          }

          if (d) for (; h < d.length; ++h) {
            if (d && d[h]) {
              v = {
                r: h + 1
              };
              m = d[h];
              if (m.hidden) v.hidden = 1;
              g = -1;
              if (m.hpx) g = on(m.hpx);else if (m.hpt) g = m.hpt;

              if (g > -1) {
                v.ht = g;
                v.customHeight = 1;
              }

              if (m.level) {
                v.outlineLevel = m.level;
              }

              n[n.length] = or("row", "", v);
            }
          }
          return n.join("");
        }

        var ji = or("worksheet", null, {
          xmlns: hr.main[0],
          "xmlns:r": hr.r
        });

        function Hi(e, r, t, a) {
          var n = [Fe, ji];
          var i = t.SheetNames[e],
              s = 0,
              l = "";
          var o = t.Sheets[i];
          if (o == null) o = {};
          var f = o["!ref"] || "A1";
          var c = gt(f);

          if (c.e.c > 16383 || c.e.r > 1048575) {
            if (r.WTF) throw new Error("Range " + f + " exceeds format limit A1:XFD1048576");
            c.e.c = Math.min(c.e.c, 16383);
            c.e.r = Math.min(c.e.c, 1048575);
            f = mt(c);
          }

          if (!a) a = {};
          o["!comments"] = [];
          var h = [];
          Ai(o, t, e, r, n);
          n[n.length] = or("dimension", null, {
            ref: f
          });
          n[n.length] = zi(o, r, e, t);
          if (r.sheetFormat) n[n.length] = or("sheetFormatPr", null, {
            defaultRowHeight: r.sheetFormat.defaultRowHeight || "16",
            baseColWidth: r.sheetFormat.baseColWidth || "10",
            outlineLevelRow: r.sheetFormat.outlineLevelRow || "7"
          });
          if (o["!cols"] != null && o["!cols"].length > 0) n[n.length] = Pi(o, o["!cols"]);
          n[s = n.length] = "<sheetData/>";
          o["!links"] = [];

          if (o["!ref"] != null) {
            l = Ui(o, r, e, t, a);
            if (l.length > 0) n[n.length] = l;
          }

          if (n.length > s + 1) {
            n[n.length] = "</sheetData>";
            n[s] = n[s].replace("/>", ">");
          }

          if (o["!protect"] != null) n[n.length] = Ti(o["!protect"]);
          if (o["!autofilter"] != null) n[n.length] = Ii(o["!autofilter"], o, t, e);
          if (o["!merges"] != null && o["!merges"].length > 0) n[n.length] = Ci(o["!merges"]);
          var u = -1,
              d,
              p = -1;

          if (o["!links"].length > 0) {
            n[n.length] = "<hyperlinks>";
            o["!links"].forEach(function (e) {
              if (!e[1].Target) return;
              d = {
                ref: e[0]
              };

              if (e[1].Target.charAt(0) != "#") {
                p = oa(a, -1, We(e[1].Target).replace(/#.*$/, ""), ta.HLINK);
                d["r:id"] = "rId" + p;
              }

              if ((u = e[1].Target.indexOf("#")) > -1) d.location = We(e[1].Target.slice(u + 1));
              if (e[1].Tooltip) d.tooltip = We(e[1].Tooltip);
              n[n.length] = or("hyperlink", null, d);
            });
            n[n.length] = "</hyperlinks>";
          }

          delete o["!links"];
          if (o["!margins"] != null) n[n.length] = Mi(o["!margins"]);
          if (!r || r.ignoreEC || r.ignoreEC == void 0) n[n.length] = sr("ignoredErrors", or("ignoredError", null, {
            numberStoredAsText: 1,
            sqref: f
          }));

          if (h.length > 0) {
            p = oa(a, -1, "../drawings/drawing" + (e + 1) + ".xml", ta.DRAW);
            n[n.length] = or("drawing", null, {
              "r:id": "rId" + p
            });
            o["!drawing"] = h;
          }

          if (o["!comments"].length > 0) {
            p = oa(a, -1, "../drawings/vmlDrawing" + (e + 1) + ".vml", ta.VML);
            n[n.length] = or("legacyDrawing", null, {
              "r:id": "rId" + p
            });
            o["!legacy"] = p;
          }

          if (n.length > 1) {
            n[n.length] = "</worksheet>";
            n[1] = n[1].replace("/>", ">");
          }

          return n.join("");
        }

        ta.CHART = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chart";
        ta.CHARTEX = "http://schemas.microsoft.com/office/2014/relationships/chartEx";

        function Vi(e) {
          var r = [];
          var t = e.match(/^<c:numCache>/);
          var a;
          (e.match(/<c:pt idx="(\d*)">(.*?)<\/c:pt>/gm) || []).forEach(function (e) {
            var a = e.match(/<c:pt idx="(\d*?)"><c:v>(.*)<\/c:v><\/c:pt>/);
            if (!a) return;
            r[+a[1]] = t ? +a[2] : a[2];
          });
          var n = Le((e.match(/<c:formatCode>([\s\S]*?)<\/c:formatCode>/) || ["", "General"])[1]);
          (e.match(/<c:f>(.*?)<\/c:f>/gm) || []).forEach(function (e) {
            a = e.replace(/<.*?>/g, "");
          });
          return [r, n, a];
        }

        function Xi(e, r, t, a, n, i) {
          var s = i || {
            "!type": "chart"
          };
          if (!e) return i;
          var l = 0,
              o = 0,
              f = "A";
          var c = {
            s: {
              r: 2e6,
              c: 2e6
            },
            e: {
              r: 0,
              c: 0
            }
          };
          (e.match(/<c:numCache>[\s\S]*?<\/c:numCache>/gm) || []).forEach(function (e) {
            var r = Vi(e);
            c.s.r = c.s.c = 0;
            c.e.c = l;
            f = ft(l);
            r[0].forEach(function (e, t) {
              s[f + it(t)] = {
                t: "n",
                v: e,
                z: r[1]
              };
              o = t;
            });
            if (c.e.r < o) c.e.r = o;
            ++l;
          });
          if (l > 0) s["!ref"] = mt(c);
          return s;
        }

        ta.CS = "http://schemas.openxmlformats.org/officeDocument/2006/relationships/chartsheet";
        var Gi = or("chartsheet", null, {
          xmlns: hr.main[0],
          "xmlns:r": hr.r
        });

        function Yi(e, r, t, a, n) {
          if (!e) return e;
          if (!a) a = {
            "!id": {}
          };
          var i = {
            "!type": "chart",
            "!drawel": null,
            "!rel": ""
          };
          var s;
          var l = e.match(yi);
          if (l) Si(l[0], i, n, t);
          if (s = e.match(/drawing r:id="(.*?)"/)) i["!rel"] = s[1];
          if (a["!id"][i["!rel"]]) i["!drawel"] = a["!id"][i["!rel"]];
          return i;
        }

        function Ji(e, r, t, a) {
          var n = [Fe, Gi];
          n[n.length] = or("drawing", null, {
            "r:id": "rId1"
          });
          oa(a, -1, "../drawings/drawing" + (e + 1) + ".xml", ta.DRAW);

          if (n.length > 2) {
            n[n.length] = "</chartsheet>";
            n[1] = n[1].replace("/>", ">");
          }

          return n.join("");
        }

        function Ki(e, r) {
          e.l += 10;
          var t = parse_XLWideString(e, r - 10);
          return {
            name: t
          };
        }

        function qi(e, r, t, a, n) {
          if (!e) return e;
          if (!a) a = {
            "!id": {}
          };
          var i = {
            "!type": "chart",
            "!drawel": null,
            "!rel": ""
          };
          var s = [];
          var l = false;
          qr(e, function o(e, a, f) {
            switch (f) {
              case 550:
                i["!rel"] = e;
                break;

              case 651:
                if (!n.Sheets[t]) n.Sheets[t] = {};
                if (e.name) n.Sheets[t].CodeName = e.name;
                break;

              case 562:
                ;

              case 652:
                ;

              case 669:
                ;

              case 679:
                ;

              case 551:
                ;

              case 552:
                ;

              case 476:
                ;

              case 3072:
                break;

              case 35:
                l = true;
                break;

              case 36:
                l = false;
                break;

              case 37:
                s.push(a);
                break;

              case 38:
                s.pop();
                break;

              default:
                if ((a || "").indexOf("Begin") > 0) s.push(a);else if ((a || "").indexOf("End") > 0) s.pop();else if (!l || r.WTF) throw new Error("Unexpected record " + f + " " + a);
            }
          }, r);
          if (a["!id"][i["!rel"]]) i["!drawel"] = a["!id"][i["!rel"]];
          return i;
        }

        function Zi() {
          var e = Zr();
          Qr(e, "BrtBeginSheet");
          Qr(e, "BrtEndSheet");
          return e.end();
        }

        var Qi = [["allowRefreshQuery", false, "bool"], ["autoCompressPictures", true, "bool"], ["backupFile", false, "bool"], ["checkCompatibility", false, "bool"], ["CodeName", ""], ["date1904", false, "bool"], ["defaultThemeVersion", 0, "int"], ["filterPrivacy", false, "bool"], ["hidePivotFieldList", false, "bool"], ["promptedSolutions", false, "bool"], ["publishItems", false, "bool"], ["refreshAllConnections", false, "bool"], ["saveExternalLinkValues", true, "bool"], ["showBorderUnselectedTables", true, "bool"], ["showInkAnnotation", true, "bool"], ["showObjects", "all"], ["showPivotChartFilter", false, "bool"], ["updateLinks", "userSet"]];
        var es = [["activeTab", 0, "int"], ["autoFilterDateGrouping", true, "bool"], ["firstSheet", 0, "int"], ["minimized", false, "bool"], ["showHorizontalScroll", true, "bool"], ["showSheetTabs", true, "bool"], ["showVerticalScroll", true, "bool"], ["tabRatio", 600, "int"], ["visibility", "visible"]];
        var rs = [];
        var ts = [["calcCompleted", "true"], ["calcMode", "auto"], ["calcOnSave", "true"], ["concurrentCalc", "true"], ["fullCalcOnLoad", "false"], ["fullPrecision", "true"], ["iterate", "false"], ["iterateCount", "100"], ["iterateDelta", "0.001"], ["refMode", "A1"]];

        function as(e, r) {
          for (var t = 0; t != e.length; ++t) {
            var a = e[t];

            for (var n = 0; n != r.length; ++n) {
              var i = r[n];
              if (a[i[0]] == null) a[i[0]] = i[1];else switch (i[2]) {
                case "bool":
                  if (typeof a[i[0]] == "string") a[i[0]] = Ge(a[i[0]]);
                  break;

                case "int":
                  if (typeof a[i[0]] == "string") a[i[0]] = parseInt(a[i[0]], 10);
                  break;
              }
            }
          }
        }

        function ns(e, r) {
          for (var t = 0; t != r.length; ++t) {
            var a = r[t];
            if (e[a[0]] == null) e[a[0]] = a[1];else switch (a[2]) {
              case "bool":
                if (typeof e[a[0]] == "string") e[a[0]] = Ge(e[a[0]]);
                break;

              case "int":
                if (typeof e[a[0]] == "string") e[a[0]] = parseInt(e[a[0]], 10);
                break;
            }
          }
        }

        function is(e) {
          ns(e.WBProps, Qi);
          ns(e.CalcPr, ts);
          as(e.WBView, es);
          as(e.Sheets, rs);
          ii.date1904 = Ge(e.WBProps.date1904);
        }

        function ss(e) {
          if (!e.Workbook) return "false";
          if (!e.Workbook.WBProps) return "false";
          return Ge(e.Workbook.WBProps.date1904) ? "true" : "false";
        }

        var ls = "][*?/\\".split("");

        function os(e, r) {
          if (e.length > 31) {
            if (r) return false;
            throw new Error("Sheet names cannot exceed 31 chars");
          }

          var t = true;
          ls.forEach(function (a) {
            if (e.indexOf(a) == -1) return;
            if (!r) throw new Error("Sheet name cannot contain : \\ / ? * [ ]");
            t = false;
          });
          return t;
        }

        function fs(e, r, t) {
          e.forEach(function (a, n) {
            os(a);

            for (var i = 0; i < n; ++i) {
              if (a == e[i]) throw new Error("Duplicate Sheet Name: " + a);
            }

            if (t) {
              var s = r && r[n] && r[n].CodeName || a;
              if (s.charCodeAt(0) == 95 && s.length > 22) throw new Error("Bad Code Name: Worksheet" + s);
            }
          });
        }

        function cs(e) {
          if (!e || !e.SheetNames || !e.Sheets) throw new Error("Invalid Workbook");
          if (!e.SheetNames.length) throw new Error("Workbook is empty");
          var r = e.Workbook && e.Workbook.Sheets || [];
          fs(e.SheetNames, r, !!e.vbaraw);

          for (var t = 0; t < e.SheetNames.length; ++t) {
            ui(e.Sheets[e.SheetNames[t]], e.SheetNames[t], t);
          }
        }

        var hs = /<\w+:workbook/;

        function us(e, r) {
          if (!e) throw new Error("Could not find file");
          var t = {
            AppVersion: {},
            WBProps: {},
            WBView: [],
            Sheets: [],
            CalcPr: {},
            Names: [],
            xmlns: ""
          };
          var a = false,
              n = "xmlns";
          var i = {},
              s = 0;
          e.replace(Oe, function l(o, f) {
            var c = Ne(o);

            switch (Pe(c[0])) {
              case "<?xml":
                break;

              case "<workbook":
                if (o.match(hs)) n = "xmlns" + o.match(/<(\w+):/)[1];
                t.xmlns = c[n];
                break;

              case "</workbook>":
                break;

              case "<fileVersion":
                delete c[0];
                t.AppVersion = c;
                break;

              case "<fileVersion/>":
                ;

              case "</fileVersion>":
                break;

              case "<fileSharing":
                break;

              case "<fileSharing/>":
                break;

              case "<workbookPr":
                ;

              case "<workbookPr/>":
                Qi.forEach(function (e) {
                  if (c[e[0]] == null) return;

                  switch (e[2]) {
                    case "bool":
                      t.WBProps[e[0]] = Ge(c[e[0]]);
                      break;

                    case "int":
                      t.WBProps[e[0]] = parseInt(c[e[0]], 10);
                      break;

                    default:
                      t.WBProps[e[0]] = c[e[0]];
                  }
                });
                if (c.codeName) t.WBProps.CodeName = Ye(c.codeName);
                break;

              case "</workbookPr>":
                break;

              case "<workbookProtection":
                break;

              case "<workbookProtection/>":
                break;

              case "<bookViews":
                ;

              case "<bookViews>":
                ;

              case "</bookViews>":
                break;

              case "<workbookView":
                ;

              case "<workbookView/>":
                delete c[0];
                t.WBView.push(c);
                break;

              case "</workbookView>":
                break;

              case "<sheets":
                ;

              case "<sheets>":
                ;

              case "</sheets>":
                break;

              case "<sheet":
                switch (c.state) {
                  case "hidden":
                    c.Hidden = 1;
                    break;

                  case "veryHidden":
                    c.Hidden = 2;
                    break;

                  default:
                    c.Hidden = 0;
                }

                delete c.state;
                c.name = Le(Ye(c.name));
                delete c[0];
                t.Sheets.push(c);
                break;

              case "</sheet>":
                break;

              case "<functionGroups":
                ;

              case "<functionGroups/>":
                break;

              case "<functionGroup":
                break;

              case "<externalReferences":
                ;

              case "</externalReferences>":
                ;

              case "<externalReferences>":
                break;

              case "<externalReference":
                break;

              case "<definedNames/>":
                break;

              case "<definedNames>":
                ;

              case "<definedNames":
                a = true;
                break;

              case "</definedNames>":
                a = false;
                break;

              case "<definedName":
                {
                  i = {};
                  i.Name = Ye(c.name);
                  if (c.comment) i.Comment = c.comment;
                  if (c.localSheetId) i.Sheet = +c.localSheetId;
                  if (Ge(c.hidden || "0")) i.Hidden = true;
                  s = f + o.length;
                }
                break;

              case "</definedName>":
                {
                  i.Ref = Le(Ye(e.slice(s, f)));
                  t.Names.push(i);
                }
                break;

              case "<definedName/>":
                break;

              case "<calcPr":
                delete c[0];
                t.CalcPr = c;
                break;

              case "<calcPr/>":
                delete c[0];
                t.CalcPr = c;
                break;

              case "</calcPr>":
                break;

              case "<oleSize":
                break;

              case "<customWorkbookViews>":
                ;

              case "</customWorkbookViews>":
                ;

              case "<customWorkbookViews":
                break;

              case "<customWorkbookView":
                ;

              case "</customWorkbookView>":
                break;

              case "<pivotCaches>":
                ;

              case "</pivotCaches>":
                ;

              case "<pivotCaches":
                break;

              case "<pivotCache":
                break;

              case "<smartTagPr":
                ;

              case "<smartTagPr/>":
                break;

              case "<smartTagTypes":
                ;

              case "<smartTagTypes>":
                ;

              case "</smartTagTypes>":
                break;

              case "<smartTagType":
                break;

              case "<webPublishing":
                ;

              case "<webPublishing/>":
                break;

              case "<fileRecoveryPr":
                ;

              case "<fileRecoveryPr/>":
                break;

              case "<webPublishObjects>":
                ;

              case "<webPublishObjects":
                ;

              case "</webPublishObjects>":
                break;

              case "<webPublishObject":
                break;

              case "<extLst":
                ;

              case "<extLst>":
                ;

              case "</extLst>":
                ;

              case "<extLst/>":
                break;

              case "<ext":
                a = true;
                break;

              case "</ext>":
                a = false;
                break;

              case "<ArchID":
                break;

              case "<AlternateContent":
                ;

              case "<AlternateContent>":
                a = true;
                break;

              case "</AlternateContent>":
                a = false;
                break;

              case "<revisionPtr":
                break;

              default:
                if (!a && r.WTF) throw new Error("unrecognized " + c[0] + " in workbook");
            }

            return o;
          });
          if (hr.main.indexOf(t.xmlns) === -1) throw new Error("Unknown Namespace: " + t.xmlns);
          is(t);
          return t;
        }

        var ds = or("workbook", null, {
          xmlns: hr.main[0],
          "xmlns:r": hr.r
        });

        function ps(e) {
          var r = [Fe];
          r[r.length] = ds;
          var t = e.Workbook && (e.Workbook.Names || []).length > 0;
          var a = {
            codeName: "ThisWorkbook"
          };

          if (e.Workbook && e.Workbook.WBProps) {
            Qi.forEach(function (r) {
              if (e.Workbook.WBProps[r[0]] == null) return;
              if (e.Workbook.WBProps[r[0]] == r[1]) return;
              a[r[0]] = e.Workbook.WBProps[r[0]];
            });

            if (e.Workbook.WBProps.CodeName) {
              a.codeName = e.Workbook.WBProps.CodeName;
              delete a.CodeName;
            }
          }

          r[r.length] = or("workbookPr", null, a);
          var n = e.Workbook && e.Workbook.Sheets || [];
          var i = 0;

          if (n && n[0] && !!n[0].Hidden) {
            r[r.length] = "<bookViews>";

            for (i = 0; i != e.SheetNames.length; ++i) {
              if (!n[i]) break;
              if (!n[i].Hidden) break;
            }

            if (i == e.SheetNames.length) i = 0;
            r[r.length] = '<workbookView firstSheet="' + i + '" activeTab="' + i + '"/>';
            r[r.length] = "</bookViews>";
          }

          r[r.length] = "<sheets>";

          for (i = 0; i != e.SheetNames.length; ++i) {
            var s = {
              name: We(e.SheetNames[i].slice(0, 31))
            };
            s.sheetId = "" + (i + 1);
            s["r:id"] = "rId" + (i + 1);
            if (n[i]) switch (n[i].Hidden) {
              case 1:
                s.state = "hidden";
                break;

              case 2:
                s.state = "veryHidden";
                break;
            }
            r[r.length] = or("sheet", null, s);
          }

          r[r.length] = "</sheets>";

          if (t) {
            r[r.length] = "<definedNames>";
            if (e.Workbook && e.Workbook.Names) e.Workbook.Names.forEach(function (e) {
              var t = {
                name: e.Name
              };
              if (e.Comment) t.comment = e.Comment;
              if (e.Sheet != null) t.localSheetId = "" + e.Sheet;
              if (e.Hidden) t.hidden = "1";
              if (!e.Ref) return;
              r[r.length] = or("definedName", We(e.Ref), t);
            });
            r[r.length] = "</definedNames>";
          }

          if (r.length > 2) {
            r[r.length] = "</workbook>";
            r[1] = r[1].replace("/>", ">");
          }

          return r.join("");
        }

        function vs(e, r, t) {
          if (r.slice(-4) === ".bin") return parse_wb_bin(e, t);
          return us(e, t);
        }

        function ms(e, r, t, a, n, i, s, l) {
          if (r.slice(-4) === ".bin") return parse_ws_bin(e, a, t, n, i, s, l);
          return _i(e, a, t, n, i, s, l);
        }

        function gs(e, r, t, a, n, i, s, l) {
          if (r.slice(-4) === ".bin") return qi(e, a, t, n, i, s, l);
          return Yi(e, a, t, n, i, s, l);
        }

        function bs(e, r, t, a, n, i, s, l) {
          if (r.slice(-4) === ".bin") return Jn(e, a, t, n, i, s, l);
          return Kn(e, a, t, n, i, s, l);
        }

        function ws(e, r, t, a, n, i, s, l) {
          if (r.slice(-4) === ".bin") return Gn(e, a, t, n, i, s, l);
          return Yn(e, a, t, n, i, s, l);
        }

        function ks(e, r, t, a) {
          if (r.slice(-4) === ".bin") return parse_sty_bin(e, t, a);
          return kn(e, t, a);
        }

        function ys(e, r, t) {
          return Mn(e, t);
        }

        function xs(e, r, t) {
          if (r.slice(-4) === ".bin") return parse_sst_bin(e, t);
          return $a(e, t);
        }

        function _s(e, r, t) {
          if (r.slice(-4) === ".bin") return parse_comments_bin(e, t);
          return Wn(e, t);
        }

        function Cs(e, r, t) {
          if (r.slice(-4) === ".bin") return parse_cc_bin(e, r, t);
          return parse_cc_xml(e, r, t);
        }

        function Ss(e, r, t, a) {
          if (t.slice(-4) === ".bin") return Rn(e, r, t, a);
          return Pn(e, r, t, a);
        }

        function As(e, r, t) {
          return (r.slice(-4) === ".bin" ? write_wb_bin : ps)(e, t);
        }

        function Es(e, r, t, a, n) {
          return (r.slice(-4) === ".bin" ? write_ws_bin : Hi)(e, t, a, n);
        }

        function Fs(e, r, t, a, n) {
          return (r.slice(-4) === ".bin" ? Zi : Ji)(e, t, a, n);
        }

        function Ts(e, r, t) {
          return (r.slice(-4) === ".bin" ? write_sty_bin : xn)(e, t);
        }

        function Os(e, r, t) {
          return (r.slice(-4) === ".bin" ? write_sst_bin : ja)(e, t);
        }

        function Ds(e, r, t) {
          return (r.slice(-4) === ".bin" ? write_comments_bin : Un)(e, t);
        }

        var Ms = function () {
          function e(e, r) {
            var t = r || {};
            if (m != null && t.dense == null) t.dense = m;
            var a = t.dense ? [] : {};
            e = e.replace(/<!--.*?-->/g, "");
            var n = e.match(/<table/i);
            if (!n) throw new Error("Invalid HTML: could not find <table>");
            var i = e.match(/<\/table/i);
            var s = n.index,
                l = i && i.index || e.length;
            var o = ve(e.slice(s, l), /(:?<tr[^>]*>)/i, "<tr>");
            var f = -1,
                c = 0,
                h = 0,
                u = 0;
            var d = {
              s: {
                r: 1e7,
                c: 1e7
              },
              e: {
                r: 0,
                c: 0
              }
            };
            var p = [];

            for (s = 0; s < o.length; ++s) {
              var v = o[s].trim();
              var g = v.slice(0, 3).toLowerCase();

              if (g == "<tr") {
                ++f;

                if (t.sheetRows && t.sheetRows <= f) {
                  --f;
                  break;
                }

                c = 0;
                continue;
              }

              if (g != "<td" && g != "<th") continue;
              var b = v.split(/<\/t[dh]>/i);

              for (l = 0; l < b.length; ++l) {
                var w = b[l].trim();
                if (!w.match(/<t[dh]/i)) continue;
                var k = w,
                    y = 0;

                while (k.charAt(0) == "<" && (y = k.indexOf(">")) > -1) {
                  k = k.slice(y + 1);
                }

                for (var x = 0; x < p.length; ++x) {
                  var _ = p[x];

                  if (_.s.c == c && _.s.r < f && f <= _.e.r) {
                    c = _.e.c + 1;
                    x = -1;
                  }
                }

                var C = Ne(w.slice(0, w.indexOf(">")));
                u = C.colspan ? +C.colspan : 1;
                if ((h = +C.rowspan) > 1 || u > 1) p.push({
                  s: {
                    r: f,
                    c: c
                  },
                  e: {
                    r: f + (h || 1) - 1,
                    c: c + u - 1
                  }
                });
                var S = C.t || "";

                if (!k.length) {
                  c += u;
                  continue;
                }

                k = er(k);
                if (d.s.r > f) d.s.r = f;
                if (d.e.r < f) d.e.r = f;
                if (d.s.c > c) d.s.c = c;
                if (d.e.c < c) d.e.c = c;
                if (!k.length) continue;
                var A = {
                  t: "s",
                  v: k
                };

                if (t.raw || !k.trim().length || S == "s") {} else if (k === "TRUE") A = {
                  t: "b",
                  v: true
                };else if (k === "FALSE") A = {
                  t: "b",
                  v: false
                };else if (!isNaN(ue(k))) A = {
                  t: "n",
                  v: ue(k)
                };else if (!isNaN(de(k).getDate())) {
                  A = {
                    t: "d",
                    v: oe(k)
                  };
                  if (!t.cellDates) A = {
                    t: "n",
                    v: ee(A.v)
                  };
                  A.z = t.dateNF || N._table[14];
                }

                if (t.dense) {
                  if (!a[f]) a[f] = [];
                  a[f][c] = A;
                } else a[pt({
                  r: f,
                  c: c
                })] = A;

                c += u;
              }
            }

            a["!ref"] = mt(d);
            if (p.length) a["!merges"] = p;
            return a;
          }

          function r(r, t) {
            return kt(e(r, t), t);
          }

          function t(e, r, t, a) {
            var n = e["!merges"] || [];
            var i = [];

            for (var s = r.s.c; s <= r.e.c; ++s) {
              var l = 0,
                  o = 0;

              for (var f = 0; f < n.length; ++f) {
                if (n[f].s.r > t || n[f].s.c > s) continue;
                if (n[f].e.r < t || n[f].e.c < s) continue;

                if (n[f].s.r < t || n[f].s.c < s) {
                  l = -1;
                  break;
                }

                l = n[f].e.r - n[f].s.r + 1;
                o = n[f].e.c - n[f].s.c + 1;
                break;
              }

              if (l < 0) continue;
              var c = pt({
                r: t,
                c: s
              });
              var h = a.dense ? (e[t] || [])[s] : e[c];
              var u = h && h.v != null && (h.h || je(h.w || (wt(h), h.w) || "")) || "";
              var d = {};
              if (l > 1) d.rowspan = l;
              if (o > 1) d.colspan = o;
              d.t = h && h.t || "z";
              if (a.editable) u = '<span contenteditable="true">' + u + "</span>";
              d.id = (a.id || "sjs") + "-" + c;

              if (d.t != "z") {
                d.v = h.v;
                if (h.z != null) d.z = h.z;
              }

              i.push(or("td", u, d));
            }

            var p = "<tr>";
            return p + i.join("") + "</tr>";
          }

          function a(e, r, t) {
            var a = [];
            return a.join("") + "<table" + (t && t.id ? ' id="' + t.id + '"' : "") + ">";
          }

          var n = '<html><head><meta charset="utf-8"/><title>SheetJS Table Export</title></head><body>';
          var i = "</body></html>";

          function s(e, r) {
            var s = r || {};
            var l = s.header != null ? s.header : n;
            var o = s.footer != null ? s.footer : i;
            var f = [l];
            var c = vt(e["!ref"]);
            s.dense = Array.isArray(e);
            f.push(a(e, c, s));

            for (var h = c.s.r; h <= c.e.r; ++h) {
              f.push(t(e, c, h, s));
            }

            f.push("</table>" + o);
            return f.join("");
          }

          return {
            to_workbook: r,
            to_sheet: e,
            _row: t,
            BEGIN: n,
            END: i,
            _preamble: a,
            from_sheet: s
          };
        }();

        function Ns(e, r, t) {
          var a = t || {};
          if (m != null) a.dense = m;
          var n = 0,
              i = 0;

          if (a.origin != null) {
            if (typeof a.origin == "number") n = a.origin;else {
              var s = typeof a.origin == "string" ? dt(a.origin) : a.origin;
              n = s.r;
              i = s.c;
            }
          }

          var l = r.getElementsByTagName("tr");
          var o = Math.min(a.sheetRows || 1e7, l.length);
          var f = {
            s: {
              r: 0,
              c: 0
            },
            e: {
              r: n,
              c: i
            }
          };

          if (e["!ref"]) {
            var c = vt(e["!ref"]);
            f.s.r = Math.min(f.s.r, c.s.r);
            f.s.c = Math.min(f.s.c, c.s.c);
            f.e.r = Math.max(f.e.r, c.e.r);
            f.e.c = Math.max(f.e.c, c.e.c);
            if (n == -1) f.e.r = n = c.e.r + 1;
          }

          var h = [],
              u = 0;
          var d = e["!rows"] || (e["!rows"] = []);
          var p = 0,
              v = 0,
              g = 0,
              b = 0,
              w = 0,
              k = 0;
          if (!e["!cols"]) e["!cols"] = [];

          for (; p < l.length && v < o; ++p) {
            var y = l[p];

            if (Is(y)) {
              if (a.display) continue;
              d[v] = {
                hidden: true
              };
            }

            var x = y.children;

            for (g = b = 0; g < x.length; ++g) {
              var _ = x[g];
              if (a.display && Is(_)) continue;
              var C = _.hasAttribute("v") ? _.getAttribute("v") : er(_.innerHTML);

              var S = _.getAttribute("z");

              for (u = 0; u < h.length; ++u) {
                var A = h[u];

                if (A.s.c == b + i && A.s.r < v + n && v + n <= A.e.r) {
                  b = A.e.c + 1 - i;
                  u = -1;
                }
              }

              k = +_.getAttribute("colspan") || 1;
              if ((w = +_.getAttribute("rowspan") || 1) > 1 || k > 1) h.push({
                s: {
                  r: v + n,
                  c: b + i
                },
                e: {
                  r: v + n + (w || 1) - 1,
                  c: b + i + (k || 1) - 1
                }
              });
              var E = {
                t: "s",
                v: C
              };
              var F = _.getAttribute("t") || "";

              if (C != null) {
                if (C.length == 0) E.t = F || "z";else if (a.raw || C.trim().length == 0 || F == "s") {} else if (C === "TRUE") E = {
                  t: "b",
                  v: true
                };else if (C === "FALSE") E = {
                  t: "b",
                  v: false
                };else if (!isNaN(ue(C))) E = {
                  t: "n",
                  v: ue(C)
                };else if (!isNaN(de(C).getDate())) {
                  E = {
                    t: "d",
                    v: oe(C)
                  };
                  if (!a.cellDates) E = {
                    t: "n",
                    v: ee(E.v)
                  };
                  E.z = a.dateNF || N._table[14];
                }
              }

              if (E.z === undefined && S != null) E.z = S;

              if (a.dense) {
                if (!e[v + n]) e[v + n] = [];
                e[v + n][b + i] = E;
              } else e[pt({
                c: b + i,
                r: v + n
              })] = E;

              if (f.e.c < b + i) f.e.c = b + i;
              b += k;
            }

            ++v;
          }

          if (h.length) e["!merges"] = (e["!merges"] || []).concat(h);
          f.e.r = Math.max(f.e.r, v - 1 + n);
          e["!ref"] = mt(f);
          if (v >= o) e["!fullref"] = mt((f.e.r = l.length - p + v - 1 + n, f));
          return e;
        }

        function Ps(e, r) {
          var t = r || {};
          var a = t.dense ? [] : {};
          return Ns(a, e, r);
        }

        function Rs(e, r) {
          return kt(Ps(e, r), r);
        }

        function Is(e) {
          var r = "";
          var t = Ls(e);
          if (t) r = t(e).getPropertyValue("display");
          if (!r) r = e.style.display;
          return r === "none";
        }

        function Ls(e) {
          if (e.ownerDocument.defaultView && typeof e.ownerDocument.defaultView.getComputedStyle === "function") return e.ownerDocument.defaultView.getComputedStyle;
          if (typeof getComputedStyle === "function") return getComputedStyle;
          return null;
        }

        function Bs(e, r) {
          if (!r) return 0;
          var t = e.SheetNames.indexOf(r);
          if (t == -1) throw new Error("Sheet not found: " + r);
          return t;
        }

        function zs(e) {
          return function r(t, a) {
            var n = Bs(t, a.sheet);
            return e.from_sheet(t.Sheets[t.SheetNames[n]], a, t);
          };
        }

        var Ws = zs(Ms);
        var $s = zs({
          from_sheet: Tl
        });
        var Us = zs(typeof Aa !== "undefined" ? Aa : {});
        var js = zs(typeof Ea !== "undefined" ? Ea : {});
        var Hs = zs(typeof Ta !== "undefined" ? Ta : {});
        var Vs = zs(typeof RTF !== "undefined" ? RTF : {});
        var Xs = zs({
          from_sheet: Ol
        });
        var Gs = zs(typeof Sa !== "undefined" ? Sa : {});
        var Ys = zs(typeof Fa !== "undefined" ? Fa : {});

        function Js(e) {
          return function r(t) {
            for (var a = 0; a != e.length; ++a) {
              var n = e[a];
              if (t[n[0]] === undefined) t[n[0]] = n[1];
              if (n[2] === "n") t[n[0]] = Number(t[n[0]]);
            }
          };
        }

        var Ks = function Ks(e) {
          Js([["cellNF", false], ["cellHTML", true], ["cellFormula", true], ["cellStyles", false], ["cellText", true], ["cellDates", false], ["sheetStubs", false], ["sheetRows", 0, "n"], ["bookDeps", false], ["bookSheets", false], ["bookProps", false], ["bookFiles", false], ["bookVBA", false], ["password", ""], ["WTF", false]])(e);
        };

        var qs = Js([["cellDates", false], ["bookSST", false], ["bookType", "xlsx"], ["compression", false], ["WTF", false]]);

        function Zs(e) {
          if (ta.WS.indexOf(e) > -1) return "sheet";
          if (ta.CS && e == ta.CS) return "chart";
          if (ta.DS && e == ta.DS) return "dialog";
          if (ta.MS && e == ta.MS) return "macro";
          return e && e.length ? e : "sheet";
        }

        function Qs(e, r) {
          if (!e) return 0;

          try {
            e = r.map(function a(r) {
              if (!r.id) r.id = r.strRelID;
              return [r.name, e["!id"][r.id].Target, Zs(e["!id"][r.id].Type)];
            });
          } catch (t) {
            return null;
          }

          return !e || e.length === 0 ? null : e;
        }

        function el(e, r, t, a, n, i, s, l, o, f, c, h) {
          try {
            i[a] = na(xe(e, t, true), r);
            var u = ye(e, r);
            var d;

            switch (l) {
              case "sheet":
                d = ms(u, r, n, o, i[a], f, c, h);
                break;

              case "chart":
                d = gs(u, r, n, o, i[a], f, c, h);
                if (!d || !d["!drawel"]) break;
                var p = Ee(d["!drawel"].Target, r);
                var v = aa(p);
                var m = In(xe(e, p, true), na(xe(e, v, true), p));
                var g = Ee(m, p);
                var b = aa(g);
                d = Xi(xe(e, g, true), g, o, na(xe(e, b, true), g), f, d);
                break;

              case "macro":
                d = bs(u, r, n, o, i[a], f, c, h);
                break;

              case "dialog":
                d = ws(u, r, n, o, i[a], f, c, h);
                break;

              default:
                throw new Error("Unrecognized sheet type " + l);
            }

            s[a] = d;
            var w = [];
            if (i && i[a]) Y(i[a]).forEach(function (t) {
              if (i[a][t].Type == ta.CMNT) {
                var n = Ee(i[a][t].Target, r);
                w = _s(ye(e, n, true), n, o);
                if (!w || !w.length) return;
                zn(d, w);
              }
            });
          } catch (k) {
            if (o.WTF) throw k;
          }
        }

        function rl(e) {
          return e.charAt(0) == "/" ? e.slice(1) : e;
        }

        function tl(e, r) {
          P(N);
          r = r || {};
          Ks(r);
          if (we(e, "META-INF/manifest.xml")) return parse_ods(e, r);
          if (we(e, "objectdata.xml")) return parse_ods(e, r);
          if (we(e, "Index/Document.iwa")) throw new Error("Unsupported NUMBERS file");

          var t = _e(e);

          var a = Zt(xe(e, "[Content_Types].xml"));
          var n = false;
          var i, s;

          if (a.workbooks.length === 0) {
            s = "xl/workbook.xml";
            if (ye(e, s, true)) a.workbooks.push(s);
          }

          if (a.workbooks.length === 0) {
            s = "xl/workbook.bin";
            if (!ye(e, s, true)) throw new Error("Could not find workbook");
            a.workbooks.push(s);
            n = true;
          }

          if (a.workbooks[0].slice(-3) == "bin") n = true;
          var l = {};
          var o = {};

          if (!r.bookSheets && !r.bookProps) {
            ni = [];
            if (a.sst) try {
              ni = xs(ye(e, rl(a.sst)), a.sst, r);
            } catch (f) {
              if (r.WTF) throw f;
            }
            if (r.cellStyles && a.themes.length) l = ys(xe(e, a.themes[0].replace(/^\//, ""), true) || "", a.themes[0], r);
            if (a.style) o = ks(ye(e, rl(a.style)), a.style, l, r);
          }

          a.links.map(function (t) {
            try {
              var a = na(xe(e, aa(rl(t))), t);
              return Ss(ye(e, rl(t)), a, t, r);
            } catch (n) {}
          });
          var c = vs(ye(e, rl(a.workbooks[0])), a.workbooks[0], r);
          var h = {},
              u = "";

          if (a.coreprops.length) {
            u = ye(e, rl(a.coreprops[0]), true);
            if (u) h = ha(u);

            if (a.extprops.length !== 0) {
              u = ye(e, rl(a.extprops[0]), true);
              if (u) ba(u, h, r);
            }
          }

          var d = {};

          if (!r.bookSheets || r.bookProps) {
            if (a.custprops.length !== 0) {
              u = xe(e, rl(a.custprops[0]), true);
              if (u) d = xa(u, r);
            }
          }

          var p = {};

          if (r.bookSheets || r.bookProps) {
            if (c.Sheets) i = c.Sheets.map(function O(e) {
              return e.name;
            });else if (h.Worksheets && h.SheetNames.length > 0) i = h.SheetNames;

            if (r.bookProps) {
              p.Props = h;
              p.Custprops = d;
            }

            if (r.bookSheets && typeof i !== "undefined") p.SheetNames = i;
            if (r.bookSheets ? p.SheetNames : r.bookProps) return p;
          }

          i = {};
          var v = {};
          if (r.bookDeps && a.calcchain) v = Cs(ye(e, rl(a.calcchain)), a.calcchain, r);
          var m = 0;
          var g = {};
          var b, w;
          {
            var k = c.Sheets;
            h.Worksheets = k.length;
            h.SheetNames = [];

            for (var y = 0; y != k.length; ++y) {
              h.SheetNames[y] = k[y].name;
            }
          }
          var x = n ? "bin" : "xml";

          var _ = a.workbooks[0].lastIndexOf("/");

          var C = (a.workbooks[0].slice(0, _ + 1) + "_rels/" + a.workbooks[0].slice(_ + 1) + ".rels").replace(/^\//, "");
          if (!we(e, C)) C = "xl/_rels/workbook." + x + ".rels";
          var S = na(xe(e, C, true), C);
          if (S) S = Qs(S, c.Sheets);
          var A = ye(e, "xl/worksheets/sheet.xml", true) ? 1 : 0;

          e: for (m = 0; m != h.Worksheets; ++m) {
            var E = "sheet";

            if (S && S[m]) {
              b = "xl/" + S[m][1].replace(/[\/]?xl\//, "");
              if (!we(e, b)) b = S[m][1];
              if (!we(e, b)) b = C.replace(/_rels\/.*$/, "") + S[m][1];
              E = S[m][2];
            } else {
              b = "xl/worksheets/sheet" + (m + 1 - A) + "." + x;
              b = b.replace(/sheet0\./, "sheet.");
            }

            w = b.replace(/^(.*)(\/)([^\/]*)$/, "$1/_rels/$3.rels");
            if (r && r.sheets != null) switch (typeof r.sheets) {
              case "number":
                if (m != r.sheets) continue e;
                break;

              case "string":
                if (h.SheetNames[m].toLowerCase() != r.sheets.toLowerCase()) continue e;
                break;

              default:
                if (Array.isArray && Array.isArray(r.sheets)) {
                  var F = false;

                  for (var T = 0; T != r.sheets.length; ++T) {
                    if (typeof r.sheets[T] == "number" && r.sheets[T] == m) F = 1;
                    if (typeof r.sheets[T] == "string" && r.sheets[T].toLowerCase() == h.SheetNames[m].toLowerCase()) F = 1;
                  }

                  if (!F) continue e;
                }

                ;
            }
            el(e, b, w, h.SheetNames[m], m, g, i, E, r, c, l, o);
          }

          p = {
            Directory: a,
            Workbook: c,
            Props: h,
            Custprops: d,
            Deps: v,
            Sheets: i,
            SheetNames: h.SheetNames,
            Strings: ni,
            Styles: o,
            Themes: l,
            SSF: N.get_table()
          };

          if (r && r.bookFiles) {
            p.keys = t;
            p.files = e.files;
          }

          if (r && r.bookVBA) {
            if (a.vba.length > 0) p.vbaraw = ye(e, rl(a.vba[0]), true);else if (a.defaults && a.defaults.bin === jn) p.vbaraw = ye(e, "xl/vbaProject.bin", true);
          }

          return p;
        }

        function al(e, r) {
          var t = r || {};
          var a = "Workbook",
              n = j.find(e, a);

          try {
            a = "/!DataSpaces/Version";
            n = j.find(e, a);
            if (!n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
            parse_DataSpaceVersionInfo(n.content);
            a = "/!DataSpaces/DataSpaceMap";
            n = j.find(e, a);
            if (!n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
            var i = parse_DataSpaceMap(n.content);
            if (i.length !== 1 || i[0].comps.length !== 1 || i[0].comps[0].t !== 0 || i[0].name !== "StrongEncryptionDataSpace" || i[0].comps[0].v !== "EncryptedPackage") throw new Error("ECMA-376 Encrypted file bad " + a);
            a = "/!DataSpaces/DataSpaceInfo/StrongEncryptionDataSpace";
            n = j.find(e, a);
            if (!n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
            var s = parse_DataSpaceDefinition(n.content);
            if (s.length != 1 || s[0] != "StrongEncryptionTransform") throw new Error("ECMA-376 Encrypted file bad " + a);
            a = "/!DataSpaces/TransformInfo/StrongEncryptionTransform/!Primary";
            n = j.find(e, a);
            if (!n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
            parse_Primary(n.content);
          } catch (l) {}

          a = "/EncryptionInfo";
          n = j.find(e, a);
          if (!n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
          var o = parse_EncryptionInfo(n.content);
          a = "/EncryptedPackage";
          n = j.find(e, a);
          if (!n || !n.content) throw new Error("ECMA-376 Encrypted file missing " + a);
          if (o[0] == 4 && typeof decrypt_agile !== "undefined") return decrypt_agile(o[1], n.content, t.password || "", t);
          if (o[0] == 2 && typeof decrypt_std76 !== "undefined") return decrypt_std76(o[1], n.content, t.password || "", t);
          throw new Error("File is password-protected");
        }

        function nl(e, r) {
          Ln = 1024;
          if (r.bookType == "ods") return write_ods(e, r);

          if (e && !e.SSF) {
            e.SSF = N.get_table();
          }

          if (e && e.SSF) {
            P(N);
            N.load_table(e.SSF);
            r.revssf = q(e.SSF);
            r.revssf[e.SSF[65535]] = 0;
            r.ssf = e.SSF;
          }

          r.rels = {};
          r.wbrels = {};
          r.Strings = [];
          r.Strings.Count = 0;
          r.Strings.Unique = 0;
          if (si) r.revStrings = new Map();else {
            r.revStrings = {};
            r.revStrings.foo = [];
            delete r.revStrings.foo;
          }
          var t = r.bookType == "xlsb" ? "bin" : "xml";
          var a = Xn.indexOf(r.bookType) > -1;
          var n = qt();
          qs(r = r || {});
          var i = Se();
          var s = "",
              l = 0;
          r.cellXfs = [];
          ci(r.cellXfs, {}, {
            revssf: {
              General: 0
            }
          });
          if (!e.Props) e.Props = {};
          s = "docProps/core.xml";
          Ce(i, s, pa(e.Props, r));
          n.coreprops.push(s);
          oa(r.rels, 2, s, ta.CORE_PROPS);
          s = "docProps/app.xml";

          if (e.Props && e.Props.SheetNames) {} else if (!e.Workbook || !e.Workbook.Sheets) e.Props.SheetNames = e.SheetNames;else {
            var o = [];

            for (var f = 0; f < e.SheetNames.length; ++f) {
              if ((e.Workbook.Sheets[f] || {}).Hidden != 2) o.push(e.SheetNames[f]);
            }

            e.Props.SheetNames = o;
          }

          e.Props.Worksheets = e.Props.SheetNames.length;
          Ce(i, s, ka(e.Props, r));
          n.extprops.push(s);
          oa(r.rels, 3, s, ta.EXT_PROPS);

          if (e.Custprops !== e.Props && Y(e.Custprops || {}).length > 0) {
            s = "docProps/custom.xml";
            Ce(i, s, Ca(e.Custprops, r));
            n.custprops.push(s);
            oa(r.rels, 4, s, ta.CUST_PROPS);
          }

          for (l = 1; l <= e.SheetNames.length; ++l) {
            var c = {
              "!id": {}
            };
            var h = e.Sheets[e.SheetNames[l - 1]];
            var u = (h || {})["!type"] || "sheet";

            switch (u) {
              case "chart":
                ;

              default:
                s = "xl/worksheets/sheet" + l + "." + t;
                Ce(i, s, Es(l - 1, s, r, e, c));
                n.sheets.push(s);
                oa(r.wbrels, -1, "worksheets/sheet" + l + "." + t, ta.WS[0]);
            }

            if (h) {
              var d = h["!comments"];
              var p = false;

              if (d && d.length > 0) {
                var v = "xl/comments" + l + "." + t;
                Ce(i, v, Ds(d, v, r));
                n.comments.push(v);
                oa(c, -1, "../comments" + l + "." + t, ta.CMNT);
                p = true;
              }

              if (h["!legacy"]) {
                if (p) Ce(i, "xl/drawings/vmlDrawing" + l + ".vml", Bn(l, h["!comments"]));
              }

              delete h["!comments"];
              delete h["!legacy"];
            }

            if (c["!id"].rId1) Ce(i, aa(s), sa(c));
          }

          if (r.Strings != null && r.Strings.length > 0) {
            s = "xl/sharedStrings." + t;
            Ce(i, s, Os(r.Strings, s, r));
            n.strs.push(s);
            oa(r.wbrels, -1, "sharedStrings." + t, ta.SST);
          }

          s = "xl/workbook." + t;
          Ce(i, s, As(e, s, r));
          n.workbooks.push(s);
          oa(r.rels, 1, s, ta.WB);
          s = "xl/theme/theme1.xml";
          Ce(i, s, Nn(e.Themes, r));
          n.themes.push(s);
          oa(r.wbrels, -1, "theme/theme1.xml", ta.THEME);
          s = "xl/styles." + t;
          Ce(i, s, Ts(e, s, r));
          n.styles.push(s);
          oa(r.wbrels, -1, "styles." + t, ta.STY);

          if (e.vbaraw && a) {
            s = "xl/vbaProject.bin";
            Ce(i, s, e.vbaraw);
            n.vba.push(s);
            oa(r.wbrels, -1, "vbaProject.bin", ta.VBA);
          }

          Ce(i, "[Content_Types].xml", ra(n, r));
          Ce(i, "_rels/.rels", sa(r.rels));
          Ce(i, "xl/_rels/workbook." + t + ".rels", sa(r.wbrels));
          delete r.revssf;
          delete r.ssf;
          return i;
        }

        function il(e, r) {
          var t = "";

          switch ((r || {}).type || "base64") {
            case "buffer":
              return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];

            case "base64":
              t = b.decode(e.slice(0, 12));
              break;

            case "binary":
              t = e;
              break;

            case "array":
              return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7]];

            default:
              throw new Error("Unrecognized type " + (r && r.type || "undefined"));
          }

          return [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3), t.charCodeAt(4), t.charCodeAt(5), t.charCodeAt(6), t.charCodeAt(7)];
        }

        function sl(e, r) {
          if (j.find(e, "EncryptedPackage")) return al(e, r);
          return parse_xlscfb(e, r);
        }

        function ll(e, r) {
          var t,
              a = e;
          var n = r || {};
          if (!n.type) n.type = w && Buffer.isBuffer(e) ? "buffer" : "base64";
          t = Ae(a, n);
          return tl(t, n);
        }

        function ol(e, r) {
          var t = 0;

          e: while (t < e.length) {
            switch (e.charCodeAt(t)) {
              case 10:
                ;

              case 13:
                ;

              case 32:
                ++t;
                break;

              case 60:
                return parse_xlml(e.slice(t), r);

              default:
                break e;
            }
          }

          return Ta.to_workbook(e, r);
        }

        function fl(e, r) {
          var t = "",
              a = il(e, r);

          switch (r.type) {
            case "base64":
              t = b.decode(e);
              break;

            case "binary":
              t = e;
              break;

            case "buffer":
              t = e.toString("binary");
              break;

            case "array":
              t = fe(e);
              break;

            default:
              throw new Error("Unrecognized type " + r.type);
          }

          if (a[0] == 239 && a[1] == 187 && a[2] == 191) t = Ye(t);
          return ol(t, r);
        }

        function cl(e, r) {
          var t = e;
          if (r.type == "base64") t = b.decode(t);
          t = cptable.utils.decode(1200, t.slice(2), "str");
          r.type = "binary";
          return ol(t, r);
        }

        function hl(e) {
          return !e.match(/[^\x00-\x7F]/) ? e : Je(e);
        }

        function ul(e, r, t, a) {
          if (a) {
            t.type = "string";
            return Ta.to_workbook(e, t);
          }

          return Ta.to_workbook(r, t);
        }

        function dl(e, r) {
          f();
          if (typeof ArrayBuffer !== "undefined" && e instanceof ArrayBuffer) return dl(new Uint8Array(e), r);
          var t = e,
              a = [0, 0, 0, 0],
              n = false;
          var i = r || {};

          if (i.cellStyles) {
            i.cellNF = true;
            i.sheetStubs = true;
          }

          ii = {};
          if (i.dateNF) ii.dateNF = i.dateNF;
          if (!i.type) i.type = w && Buffer.isBuffer(e) ? "buffer" : "base64";

          if (i.type == "file") {
            i.type = w ? "buffer" : "binary";
            t = G(e);
          }

          if (i.type == "string") {
            n = true;
            i.type = "binary";
            i.codepage = 65001;
            t = hl(e);
          }

          if (i.type == "array" && typeof Uint8Array !== "undefined" && e instanceof Uint8Array && typeof ArrayBuffer !== "undefined") {
            var s = new ArrayBuffer(3),
                l = new Uint8Array(s);
            l.foo = "bar";

            if (!l.foo) {
              i = ce(i);
              i.type = "array";
              return dl(T(t), i);
            }
          }

          switch ((a = il(t, i))[0]) {
            case 208:
              if (a[1] === 207 && a[2] === 17 && a[3] === 224 && a[4] === 161 && a[5] === 177 && a[6] === 26 && a[7] === 225) return sl(j.read(t, i), i);
              break;

            case 9:
              if (a[1] <= 4) return parse_xlscfb(t, i);
              break;

            case 60:
              return parse_xlml(t, i);

            case 73:
              if (a[1] === 68) return Oa(t, i);
              break;

            case 84:
              if (a[1] === 65 && a[2] === 66 && a[3] === 76) return Ea.to_workbook(t, i);
              break;

            case 80:
              return a[1] === 75 && a[2] < 9 && a[3] < 9 ? ll(t, i) : ul(e, t, i, n);

            case 239:
              return a[3] === 60 ? parse_xlml(t, i) : ul(e, t, i, n);

            case 255:
              if (a[1] === 254) {
                return cl(t, i);
              }

              break;

            case 0:
              if (a[1] === 0 && a[2] >= 2 && a[3] === 0) return WK_.to_workbook(t, i);
              break;

            case 3:
              ;

            case 131:
              ;

            case 139:
              ;

            case 140:
              return Sa.to_workbook(t, i);

            case 123:
              if (a[1] === 92 && a[2] === 114 && a[3] === 116) return RTF.to_workbook(t, i);
              break;

            case 10:
              ;

            case 13:
              ;

            case 32:
              return fl(t, i);
          }

          if (Sa.versions.indexOf(a[0]) > -1 && a[2] <= 12 && a[3] <= 31) return Sa.to_workbook(t, i);
          return ul(e, t, i, n);
        }

        function pl(e, r) {
          var t = r || {};
          t.type = "file";
          return dl(e, t);
        }

        function vl(e, r) {
          switch (r.type) {
            case "base64":
              ;

            case "binary":
              break;

            case "buffer":
              ;

            case "array":
              r.type = "";
              break;

            case "file":
              return X(r.file, j.write(e, {
                type: w ? "buffer" : ""
              }));

            case "string":
              throw new Error("'string' output type invalid for '" + r.bookType + "' files");

            default:
              throw new Error("Unrecognized type " + r.type);
          }

          return j.write(e, r);
        }

        function ml(e, r) {
          var t = r || {};
          var a = nl(e, t);
          var n = {};
          if (t.compression) n.compression = "DEFLATE";
          if (t.password) n.type = w ? "nodebuffer" : "string";else switch (t.type) {
            case "base64":
              n.type = "base64";
              break;

            case "binary":
              n.type = "string";
              break;

            case "string":
              throw new Error("'string' output type invalid for '" + t.bookType + "' files");

            case "buffer":
              ;

            case "file":
              n.type = w ? "nodebuffer" : "string";
              break;

            default:
              throw new Error("Unrecognized type " + t.type);
          }
          var i = a.FullPaths ? j.write(a, {
            fileType: "zip",
            type: {
              nodebuffer: "buffer",
              string: "binary"
            }[n.type] || n.type
          }) : a.generate(n);
          if (t.password && typeof encrypt_agile !== "undefined") return vl(encrypt_agile(i, t.password), t);
          if (t.type === "file") return X(t.file, i);
          return t.type == "string" ? Ye(i) : i;
        }

        function gl(e, r) {
          var t = r || {};
          var a = write_xlscfb(e, t);
          return vl(a, t);
        }

        function bl(e, r, t) {
          if (!t) t = "";
          var a = t + e;

          switch (r.type) {
            case "base64":
              return b.encode(Je(a));

            case "binary":
              return Je(a);

            case "string":
              return e;

            case "file":
              return X(r.file, a, "utf8");

            case "buffer":
              {
                if (w) return k(a, "utf8");else return bl(a, {
                  type: "binary"
                }).split("").map(function (e) {
                  return e.charCodeAt(0);
                });
              }
              ;
          }

          throw new Error("Unrecognized type " + r.type);
        }

        function wl(e, r) {
          switch (r.type) {
            case "base64":
              return b.encode(e);

            case "binary":
              return e;

            case "string":
              return e;

            case "file":
              return X(r.file, e, "binary");

            case "buffer":
              {
                if (w) return k(e, "binary");else return e.split("").map(function (e) {
                  return e.charCodeAt(0);
                });
              }
              ;
          }

          throw new Error("Unrecognized type " + r.type);
        }

        function kl(e, r) {
          switch (r.type) {
            case "string":
              ;

            case "base64":
              ;

            case "binary":
              var t = "";

              for (var a = 0; a < e.length; ++a) {
                t += String.fromCharCode(e[a]);
              }

              return r.type == "base64" ? b.encode(t) : r.type == "string" ? Ye(t) : t;

            case "file":
              return X(r.file, e);

            case "buffer":
              return e;

            default:
              throw new Error("Unrecognized type " + r.type);
          }
        }

        function yl(e, r) {
          f();
          cs(e);
          var t = r || {};

          if (t.cellStyles) {
            t.cellNF = true;
            t.sheetStubs = true;
          }

          if (t.type == "array") {
            t.type = "binary";
            var a = yl(e, t);
            t.type = "array";
            return A(a);
          }

          switch (t.bookType || "xlsb") {
            case "xml":
              ;

            case "xlml":
              return bl(write_xlml(e, t), t);

            case "slk":
              ;

            case "sylk":
              return bl(Us(e, t), t);

            case "htm":
              ;

            case "html":
              return bl(Ws(e, t), t);

            case "txt":
              return wl(Xs(e, t), t);

            case "csv":
              return bl($s(e, t), t, "\uFEFF");

            case "dif":
              return bl(js(e, t), t);

            case "dbf":
              return kl(Gs(e, t), t);

            case "prn":
              return bl(Hs(e, t), t);

            case "rtf":
              return bl(Vs(e, t), t);

            case "eth":
              return bl(Ys(e, t), t);

            case "fods":
              return bl(write_ods(e, t), t);

            case "biff2":
              if (!t.biff) t.biff = 2;

            case "biff3":
              if (!t.biff) t.biff = 3;

            case "biff4":
              if (!t.biff) t.biff = 4;
              return kl(write_biff_buf(e, t), t);

            case "biff5":
              if (!t.biff) t.biff = 5;

            case "biff8":
              ;

            case "xla":
              ;

            case "xls":
              if (!t.biff) t.biff = 8;
              return gl(e, t);

            case "xlsx":
              ;

            case "xlsm":
              ;

            case "xlam":
              ;

            case "xlsb":
              ;

            case "ods":
              return ml(e, t);

            default:
              throw new Error("Unrecognized bookType |" + t.bookType + "|");
          }
        }

        function xl(e) {
          if (e.bookType) return;
          var r = {
            xls: "biff8",
            htm: "html",
            slk: "sylk",
            socialcalc: "eth",
            Sh33tJS: "WTF"
          };
          var t = e.file.slice(e.file.lastIndexOf(".")).toLowerCase();
          if (t.match(/^\.[a-z]+$/)) e.bookType = t.slice(1);
          e.bookType = r[e.bookType] || e.bookType;
        }

        function _l(e, r, t) {
          var a = t || {};
          a.type = "file";
          a.file = r;
          xl(a);
          return yl(e, a);
        }

        function Cl(e, r, t, a) {
          var n = t || {};
          n.type = "file";
          n.file = e;
          xl(n);
          n.type = "buffer";
          var i = a;
          if (!(i instanceof Function)) i = t;
          return H.writeFile(e, yl(r, n), i);
        }

        function Sl(e, r, t, a, n, i, s, l) {
          var o = it(t);
          var f = l.defval,
              c = l.raw || !Object.prototype.hasOwnProperty.call(l, "raw");
          var h = true;
          var u = n === 1 ? [] : {};

          if (n !== 1) {
            if (Object.defineProperty) try {
              Object.defineProperty(u, "__rowNum__", {
                value: t,
                enumerable: false
              });
            } catch (d) {
              u.__rowNum__ = t;
            } else u.__rowNum__ = t;
          }

          if (!s || e[t]) for (var p = r.s.c; p <= r.e.c; ++p) {
            var v = s ? e[t][p] : e[a[p] + o];

            if (v === undefined || v.t === undefined) {
              if (f === undefined) continue;

              if (i[p] != null) {
                u[i[p]] = f;
              }

              continue;
            }

            var m = v.v;

            switch (v.t) {
              case "z":
                if (m == null) break;
                continue;

              case "e":
                m = void 0;
                break;

              case "s":
                ;

              case "d":
                ;

              case "b":
                ;

              case "n":
                break;

              default:
                throw new Error("unrecognized type " + v.t);
            }

            if (i[p] != null) {
              if (m == null) {
                if (f !== undefined) u[i[p]] = f;else if (c && m === null) u[i[p]] = null;else continue;
              } else {
                u[i[p]] = c || l.rawNumbers && v.t == "n" ? m : wt(v, m, l);
              }

              if (m != null) h = false;
            }
          }
          return {
            row: u,
            isempty: h
          };
        }

        function Al(e, r) {
          if (e == null || e["!ref"] == null) return [];
          var t = {
            t: "n",
            v: 0
          },
              a = 0,
              n = 1,
              i = [],
              s = 0,
              l = "";
          var o = {
            s: {
              r: 0,
              c: 0
            },
            e: {
              r: 0,
              c: 0
            }
          };
          var f = r || {};
          var c = f.range != null ? f.range : e["!ref"];
          if (f.header === 1) a = 1;else if (f.header === "A") a = 2;else if (Array.isArray(f.header)) a = 3;else if (f.header == null) a = 0;

          switch (typeof c) {
            case "string":
              o = gt(c);
              break;

            case "number":
              o = gt(e["!ref"]);
              o.s.r = c;
              break;

            default:
              o = c;
          }

          if (a > 0) n = 0;
          var h = it(o.s.r);
          var u = [];
          var d = [];
          var p = 0,
              v = 0;
          var m = Array.isArray(e);
          var g = o.s.r,
              b = 0,
              w = 0;
          if (m && !e[g]) e[g] = [];

          for (b = o.s.c; b <= o.e.c; ++b) {
            u[b] = ft(b);
            t = m ? e[g][b] : e[u[b] + h];

            switch (a) {
              case 1:
                i[b] = b - o.s.c;
                break;

              case 2:
                i[b] = u[b];
                break;

              case 3:
                i[b] = f.header[b - o.s.c];
                break;

              default:
                if (t == null) t = {
                  w: "__EMPTY",
                  t: "s"
                };
                l = s = wt(t, null, f);
                v = 0;

                for (w = 0; w < i.length; ++w) {
                  if (i[w] == l) l = s + "_" + ++v;
                }

                i[b] = l;
            }
          }

          for (g = o.s.r + n; g <= o.e.r; ++g) {
            var k = Sl(e, o, g, u, a, i, m, f);
            if (k.isempty === false || (a === 1 ? f.blankrows !== false : !!f.blankrows)) d[p++] = k.row;
          }

          d.length = p;
          return d;
        }

        var El = /"/g;

        function Fl(e, r, t, a, n, i, s, l) {
          var o = true;
          var f = [],
              c = "",
              h = it(t);

          for (var u = r.s.c; u <= r.e.c; ++u) {
            if (!a[u]) continue;
            var d = l.dense ? (e[t] || [])[u] : e[a[u] + h];
            if (d == null) c = "";else if (d.v != null) {
              o = false;
              c = "" + (l.rawNumbers && d.t == "n" ? d.v : wt(d, null, l));

              for (var p = 0, v = 0; p !== c.length; ++p) {
                if ((v = c.charCodeAt(p)) === n || v === i || v === 34 || l.forceQuotes) {
                  c = '"' + c.replace(El, '""') + '"';
                  break;
                }
              }

              if (c == "ID") c = '"ID"';
            } else if (d.f != null && !d.F) {
              o = false;
              c = "=" + d.f;
              if (c.indexOf(",") >= 0) c = '"' + c.replace(El, '""') + '"';
            } else c = "";
            f.push(c);
          }

          if (l.blankrows === false && o) return null;
          return f.join(s);
        }

        function Tl(e, r) {
          var t = [];
          var a = r == null ? {} : r;
          if (e == null || e["!ref"] == null) return "";
          var n = gt(e["!ref"]);
          var i = a.FS !== undefined ? a.FS : ",",
              s = i.charCodeAt(0);
          var l = a.RS !== undefined ? a.RS : "\n",
              o = l.charCodeAt(0);
          var f = new RegExp((i == "|" ? "\\|" : i) + "+$");
          var c = "",
              h = [];
          a.dense = Array.isArray(e);
          var u = a.skipHidden && e["!cols"] || [];
          var d = a.skipHidden && e["!rows"] || [];

          for (var p = n.s.c; p <= n.e.c; ++p) {
            if (!(u[p] || {}).hidden) h[p] = ft(p);
          }

          for (var v = n.s.r; v <= n.e.r; ++v) {
            if ((d[v] || {}).hidden) continue;
            c = Fl(e, n, v, h, s, o, i, a);

            if (c == null) {
              continue;
            }

            if (a.strip) c = c.replace(f, "");
            t.push(c + l);
          }

          delete a.dense;
          return t.join("");
        }

        function Ol(e, r) {
          if (!r) r = {};
          r.FS = "\t";
          r.RS = "\n";
          var t = Tl(e, r);
          if (typeof cptable == "undefined" || r.type == "string") return t;
          var a = cptable.utils.encode(1200, t, "str");
          return String.fromCharCode(255) + String.fromCharCode(254) + a;
        }

        function Dl(e) {
          var r = "",
              t,
              a = "";
          if (e == null || e["!ref"] == null) return [];
          var n = gt(e["!ref"]),
              i = "",
              s = [],
              l;
          var o = [];
          var f = Array.isArray(e);

          for (l = n.s.c; l <= n.e.c; ++l) {
            s[l] = ft(l);
          }

          for (var c = n.s.r; c <= n.e.r; ++c) {
            i = it(c);

            for (l = n.s.c; l <= n.e.c; ++l) {
              r = s[l] + i;
              t = f ? (e[c] || [])[l] : e[r];
              a = "";
              if (t === undefined) continue;else if (t.F != null) {
                r = t.F;
                if (!t.f) continue;
                a = t.f;
                if (r.indexOf(":") == -1) r = r + ":" + r;
              }
              if (t.f != null) a = t.f;else if (t.t == "z") continue;else if (t.t == "n" && t.v != null) a = "" + t.v;else if (t.t == "b") a = t.v ? "TRUE" : "FALSE";else if (t.w !== undefined) a = "'" + t.w;else if (t.v === undefined) continue;else if (t.t == "s") a = "'" + t.v;else a = "" + t.v;
              o[o.length] = r + "=" + a;
            }
          }

          return o;
        }

        function Ml(e, r, t) {
          var a = t || {};
          var n = +!a.skipHeader;
          var i = e || {};
          var s = 0,
              l = 0;

          if (i && a.origin != null) {
            if (typeof a.origin == "number") s = a.origin;else {
              var o = typeof a.origin == "string" ? dt(a.origin) : a.origin;
              s = o.r;
              l = o.c;
            }
          }

          var f;
          var c = {
            s: {
              c: 0,
              r: 0
            },
            e: {
              c: l,
              r: s + r.length - 1 + n
            }
          };

          if (i["!ref"]) {
            var h = gt(i["!ref"]);
            c.e.c = Math.max(c.e.c, h.e.c);
            c.e.r = Math.max(c.e.r, h.e.r);

            if (s == -1) {
              s = h.e.r + 1;
              c.e.r = s + r.length - 1 + n;
            }
          } else {
            if (s == -1) {
              s = 0;
              c.e.r = r.length - 1 + n;
            }
          }

          var u = a.header || [],
              d = 0;
          r.forEach(function (e, r) {
            Y(e).forEach(function (t) {
              if ((d = u.indexOf(t)) == -1) u[d = u.length] = t;
              var o = e[t];
              var c = "z";
              var h = "";
              var p = pt({
                c: l + d,
                r: s + r + n
              });
              f = Pl.sheet_get_cell(i, p);

              if (o && typeof o === "object" && !(o instanceof Date)) {
                i[p] = o;
              } else {
                if (typeof o == "number") c = "n";else if (typeof o == "boolean") c = "b";else if (typeof o == "string") c = "s";else if (o instanceof Date) {
                  c = "d";

                  if (!a.cellDates) {
                    c = "n";
                    o = ee(o);
                  }

                  h = a.dateNF || N._table[14];
                }
                if (!f) i[p] = f = {
                  t: c,
                  v: o
                };else {
                  f.t = c;
                  f.v = o;
                  delete f.w;
                  delete f.R;
                  if (h) f.z = h;
                }
                if (h) f.z = h;
              }
            });
          });
          c.e.c = Math.max(c.e.c, l + u.length - 1);
          var p = it(s);
          if (n) for (d = 0; d < u.length; ++d) {
            i[ft(d + l) + p] = {
              t: "s",
              v: u[d]
            };
          }
          i["!ref"] = mt(c);
          return i;
        }

        function Nl(e, r) {
          return Ml(null, e, r);
        }

        var Pl = {
          encode_col: ft,
          encode_row: it,
          encode_cell: pt,
          encode_range: mt,
          decode_col: ot,
          decode_row: nt,
          split_cell: ut,
          decode_cell: dt,
          decode_range: vt,
          format_cell: wt,
          get_formulae: Dl,
          make_csv: Tl,
          make_json: Al,
          make_formulae: Dl,
          sheet_add_aoa: yt,
          sheet_add_json: Ml,
          sheet_add_dom: Ns,
          aoa_to_sheet: xt,
          json_to_sheet: Nl,
          table_to_sheet: Ps,
          table_to_book: Rs,
          sheet_to_csv: Tl,
          sheet_to_txt: Ol,
          sheet_to_json: Al,
          sheet_to_html: Ms.from_sheet,
          sheet_to_formulae: Dl,
          sheet_to_row_object_array: Al
        };

        (function (e) {
          e.consts = e.consts || {};

          function r(r) {
            r.forEach(function (r) {
              e.consts[r[0]] = r[1];
            });
          }

          function t(e, r, t) {
            return e[r] != null ? e[r] : e[r] = t;
          }

          function a(e, r, t) {
            if (typeof r == "string") {
              if (Array.isArray(e)) {
                var n = dt(r);
                if (!e[n.r]) e[n.r] = [];
                return e[n.r][n.c] || (e[n.r][n.c] = {
                  t: "z"
                });
              }

              return e[r] || (e[r] = {
                t: "z"
              });
            }

            if (typeof r != "number") return a(e, pt(r));
            return a(e, pt({
              r: r,
              c: t || 0
            }));
          }

          e.sheet_get_cell = a;

          function n(e, r) {
            if (typeof r == "number") {
              if (r >= 0 && e.SheetNames.length > r) return r;
              throw new Error("Cannot find sheet # " + r);
            } else if (typeof r == "string") {
              var t = e.SheetNames.indexOf(r);
              if (t > -1) return t;
              throw new Error("Cannot find sheet name |" + r + "|");
            } else throw new Error("Cannot find sheet |" + r + "|");
          }

          e.book_new = function () {
            return {
              SheetNames: [],
              Sheets: {}
            };
          };

          e.book_append_sheet = function (e, r, t) {
            if (!t) for (var a = 1; a <= 65535; ++a, t = undefined) {
              if (e.SheetNames.indexOf(t = "Sheet" + a) == -1) break;
            }
            if (!t || e.SheetNames.length >= 65535) throw new Error("Too many worksheets");
            os(t);
            if (e.SheetNames.indexOf(t) >= 0) throw new Error("Worksheet with name |" + t + "| already exists!");
            e.SheetNames.push(t);
            e.Sheets[t] = r;
          };

          e.book_set_sheet_visibility = function (e, r, a) {
            t(e, "Workbook", {});
            t(e.Workbook, "Sheets", []);
            var i = n(e, r);
            t(e.Workbook.Sheets, i, {});

            switch (a) {
              case 0:
                ;

              case 1:
                ;

              case 2:
                break;

              default:
                throw new Error("Bad sheet visibility setting " + a);
            }

            e.Workbook.Sheets[i].Hidden = a;
          };

          r([["SHEET_VISIBLE", 0], ["SHEET_HIDDEN", 1], ["SHEET_VERY_HIDDEN", 2]]);

          e.cell_set_number_format = function (e, r) {
            e.z = r;
            return e;
          };

          e.cell_set_hyperlink = function (e, r, t) {
            if (!r) {
              delete e.l;
            } else {
              e.l = {
                Target: r
              };
              if (t) e.l.Tooltip = t;
            }

            return e;
          };

          e.cell_set_internal_link = function (r, t, a) {
            return e.cell_set_hyperlink(r, "#" + t, a);
          };

          e.cell_add_comment = function (e, r, t) {
            if (!e.c) e.c = [];
            e.c.push({
              t: r,
              a: t || "SheetJS"
            });
          };

          e.sheet_set_array_formula = function (e, r, t) {
            var n = typeof r != "string" ? r : gt(r);
            var i = typeof r == "string" ? r : mt(r);

            for (var s = n.s.r; s <= n.e.r; ++s) {
              for (var l = n.s.c; l <= n.e.c; ++l) {
                var o = a(e, s, l);
                o.t = "n";
                o.F = i;
                delete o.v;
                if (s == n.s.r && l == n.s.c) o.f = t;
              }
            }

            return e;
          };

          return e;
        })(Pl);

        if (typeof parse_xlscfb !== "undefined") e.parse_xlscfb = parse_xlscfb;
        e.parse_zip = tl;
        e.read = dl;
        e.readFile = pl;
        e.readFileSync = pl;
        e.write = yl;
        e.writeFile = _l;
        e.writeFileSync = _l;
        e.writeFileAsync = Cl;
        e.utils = Pl;
        e.SSF = N;
        if (typeof j !== "undefined") e.CFB = j;
      }

      if (true) make_xlsx_lib(exports);else {}
      var XLS = XLSX,
          ODS = XLSX;
      /***/
    }
  }]);
})();
//# sourceMappingURL=xlsx-dist-xlsx-mini-min-es5.js.map