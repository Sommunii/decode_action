//Tue Aug 13 2024 02:54:33 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("西施眼");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(a6) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a8) {
      return typeof a8;
    } : function (a8) {
      return a8 && "function" == typeof Symbol && a8.constructor === Symbol && a8 !== Symbol.prototype ? "symbol" : typeof a8;
    };
    return b(a6);
  }
  function c(a6, a7) {
    var a9 = "undefined" != typeof Symbol && a6[Symbol.iterator] || a6["@@iterator"];
    if (!a9) {
      if (Array.isArray(a6) || (a9 = g(a6)) || a7 && a6 && "number" == typeof a6.length) {
        a9 && (a6 = a9);
        var aa = 0,
          ab = function () {};
        return {
          s: ab,
          n: function () {
            var ah = {
              done: !0
            };
            return aa >= a6.length ? ah : {
              done: !1,
              value: a6[aa++]
            };
          },
          e: function (ah) {
            throw ah;
          },
          f: ab
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var ac,
      ad = !0,
      ae = !1;
    return {
      s: function () {
        a9 = a9.call(a6);
      },
      n: function () {
        var ai = a9.next();
        ad = ai.done;
        return ai;
      },
      e: function (ai) {
        ae = !0;
        ac = ai;
      },
      f: function () {
        try {
          ad || null == a9.return || a9.return();
        } finally {
          if (ae) {
            throw ac;
          }
        }
      }
    };
  }
  function d(a6, a7) {
    return j(a6) || i(a6, a7) || g(a6, a7) || f();
  }
  function f() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function g(a6, a7) {
    if (a6) {
      if ("string" == typeof a6) {
        return h(a6, a7);
      }
      var a9 = {}.toString.call(a6).slice(8, -1);
      "Object" === a9 && a6.constructor && (a9 = a6.constructor.name);
      return "Map" === a9 || "Set" === a9 ? Array.from(a6) : "Arguments" === a9 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a9) ? h(a6, a7) : void 0;
    }
  }
  function h(a6, a7) {
    (null == a7 || a7 > a6.length) && (a7 = a6.length);
    for (var a8 = 0, a9 = Array(a7); a8 < a7; a8++) {
      a9[a8] = a6[a8];
    }
    return a9;
  }
  function i(a6, a7) {
    var a9 = null == a6 ? null : "undefined" != typeof Symbol && a6[Symbol.iterator] || a6["@@iterator"];
    if (null != a9) {
      var aa,
        ab,
        ac,
        ad,
        ae = [],
        af = !0,
        ag = !1;
      try {
        if (ac = (a9 = a9.call(a6)).next, 0 === a7) {
          if (Object(a9) !== a9) {
            return;
          }
          af = !1;
        } else {
          for (; !(af = (aa = ac.call(a9)).done) && (ae.push(aa.value), ae.length !== a7); af = !0) {}
        }
      } catch (al) {
        ag = !0;
        ab = al;
      } finally {
        try {
          if (!af && null != a9.return && (ad = a9.return(), Object(ad) !== ad)) {
            return;
          }
        } finally {
          if (ag) {
            throw ab;
          }
        }
      }
      return ae;
    }
  }
  function j(a6) {
    if (Array.isArray(a6)) {
      return a6;
    }
  }
  function k() {
    'use strict';

    k = function () {
      return a8;
    };
    var a7,
      a8 = {},
      a9 = Object.prototype,
      aa = a9.hasOwnProperty,
      ab = Object.defineProperty || function (aD, aE, aF) {
        aD[aE] = aF.value;
      },
      ac = "function" == typeof Symbol ? Symbol : {},
      ad = ac.iterator || "@@iterator",
      ae = ac.asyncIterator || "@@asyncIterator",
      af = ac.toStringTag || "@@toStringTag";
    function ag(aD, aE, aF) {
      var aI = {
        value: aF,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aD, aE, aI);
      return aD[aE];
    }
    try {
      ag({}, "");
    } catch (aE) {
      ag = function (aG, aH, aI) {
        return aG[aH] = aI;
      };
    }
    function ah(aG, aH, aI, aJ) {
      var aK = aH && aH.prototype instanceof ao ? aH : ao,
        aL = Object.create(aK.prototype),
        aM = new aB(aJ || []);
      ab(aL, "_invoke", {
        value: ax(aG, aI, aM)
      });
      return aL;
    }
    function ai(aG, aH, aI) {
      try {
        return {
          type: "normal",
          arg: aG.call(aH, aI)
        };
      } catch (aM) {
        var aK = {
          type: "throw",
          arg: aM
        };
        return aK;
      }
    }
    a8.wrap = ah;
    var aj = "suspendedStart",
      ak = "suspendedYield",
      al = "executing",
      am = "completed",
      an = {};
    function ao() {}
    function ap() {}
    function aq() {}
    var ar = {};
    ag(ar, ad, function () {
      return this;
    });
    var as = Object.getPrototypeOf,
      at = as && as(as(aC([])));
    at && at !== a9 && aa.call(at, ad) && (ar = at);
    aq.prototype = ao.prototype = Object.create(ar);
    var au = aq.prototype;
    function av(aG) {
      ["next", "throw", "return"].forEach(function (aI) {
        ag(aG, aI, function (aK) {
          return this._invoke(aI, aK);
        });
      });
    }
    function aw(aG, aH) {
      function aL(aM, aN, aO, aP) {
        var aR = ai(aG[aM], aG, aN);
        if ("throw" !== aR.type) {
          var aS = aR.arg,
            aT = aS.value;
          return aT && "object" == b(aT) && aa.call(aT, "__await") ? aH.resolve(aT.__await).then(function (aV) {
            aL("next", aV, aO, aP);
          }, function (aV) {
            aL("throw", aV, aO, aP);
          }) : aH.resolve(aT).then(function (aV) {
            aS.value = aV;
            aO(aS);
          }, function (aV) {
            return aL("throw", aV, aO, aP);
          });
        }
        aP(aR.arg);
      }
      var aJ;
      ab(this, "_invoke", {
        value: function (aM, aN) {
          function aP() {
            return new aH(function (aS, aT) {
              aL(aM, aN, aS, aT);
            });
          }
          return aJ = aJ ? aJ.then(aP, aP) : aP();
        }
      });
    }
    function ax(aG, aH, aI) {
      var aK = aj;
      return function (aL, aM) {
        if (aK === al) {
          throw Error("Generator is already running");
        }
        if (aK === am) {
          if ("throw" === aL) {
            throw aM;
          }
          var aO = {
            value: a7,
            done: !0
          };
          return aO;
        }
        for (aI.method = aL, aI.arg = aM;;) {
          var aP = aI.delegate;
          if (aP) {
            var aQ = ay(aP, aI);
            if (aQ) {
              if (aQ === an) {
                continue;
              }
              return aQ;
            }
          }
          if ("next" === aI.method) {
            aI.sent = aI._sent = aI.arg;
          } else {
            if ("throw" === aI.method) {
              if (aK === aj) {
                throw aK = am, aI.arg;
              }
              aI.dispatchException(aI.arg);
            } else {
              "return" === aI.method && aI.abrupt("return", aI.arg);
            }
          }
          aK = al;
          var aR = ai(aG, aH, aI);
          if ("normal" === aR.type) {
            if (aK = aI.done ? am : ak, aR.arg === an) {
              continue;
            }
            var aS = {};
            aS.value = aR.arg;
            aS.done = aI.done;
            return aS;
          }
          "throw" === aR.type && (aK = am, aI.method = "throw", aI.arg = aR.arg);
        }
      };
    }
    function ay(aG, aH) {
      var aL = aH.method,
        aM = aG.iterator[aL];
      if (aM === a7) {
        aH.delegate = null;
        "throw" === aL && aG.iterator.return && (aH.method = "return", aH.arg = a7, ay(aG, aH), "throw" === aH.method) || "return" !== aL && (aH.method = "throw", aH.arg = new TypeError("The iterator does not provide a '" + aL + "' method"));
        return an;
      }
      var aN = ai(aM, aG.iterator, aH.arg);
      if ("throw" === aN.type) {
        aH.method = "throw";
        aH.arg = aN.arg;
        aH.delegate = null;
        return an;
      }
      var aO = aN.arg;
      return aO ? aO.done ? (aH[aG.resultName] = aO.value, aH.next = aG.nextLoc, "return" !== aH.method && (aH.method = "next", aH.arg = a7), aH.delegate = null, an) : aO : (aH.method = "throw", aH.arg = new TypeError("iterator result is not an object"), aH.delegate = null, an);
    }
    function az(aG) {
      var aH = {
        tryLoc: aG[0]
      };
      var aI = aH;
      1 in aG && (aI.catchLoc = aG[1]);
      2 in aG && (aI.finallyLoc = aG[2], aI.afterLoc = aG[3]);
      this.tryEntries.push(aI);
    }
    function aA(aG) {
      var aH = aG.completion || {};
      aH.type = "normal";
      delete aH.arg;
      aG.completion = aH;
    }
    function aB(aG) {
      var aH = {
        tryLoc: "root"
      };
      this.tryEntries = [aH];
      aG.forEach(az, this);
      this.reset(!0);
    }
    function aC(aG) {
      if (aG || "" === aG) {
        var aI = aG[ad];
        if (aI) {
          return aI.call(aG);
        }
        if ("function" == typeof aG.next) {
          return aG;
        }
        if (!isNaN(aG.length)) {
          var aJ = -1,
            aK = function aN() {
              for (; ++aJ < aG.length;) {
                if (aa.call(aG, aJ)) {
                  aN.value = aG[aJ];
                  aN.done = !1;
                  return aN;
                }
              }
              aN.value = a7;
              aN.done = !0;
              return aN;
            };
          return aK.next = aK;
        }
      }
      throw new TypeError(b(aG) + " is not iterable");
    }
    ap.prototype = aq;
    ab(au, "constructor", {
      value: aq,
      configurable: !0
    });
    ab(aq, "constructor", {
      value: ap,
      configurable: !0
    });
    ap.displayName = ag(aq, af, "GeneratorFunction");
    a8.isGeneratorFunction = function (aG) {
      var aH = "function" == typeof aG && aG.constructor;
      return !!aH && (aH === ap || "GeneratorFunction" === (aH.displayName || aH.name));
    };
    a8.mark = function (aG) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aG, aq) : (aG.__proto__ = aq, ag(aG, af, "GeneratorFunction"));
      aG.prototype = Object.create(au);
      return aG;
    };
    a8.awrap = function (aG) {
      var aH = {
        __await: aG
      };
      return aH;
    };
    av(aw.prototype);
    ag(aw.prototype, ae, function () {
      return this;
    });
    a8.AsyncIterator = aw;
    a8.async = function (aG, aH, aI, aJ, aK) {
      void 0 === aK && (aK = Promise);
      var aM = new aw(ah(aG, aH, aI, aJ), aK);
      return a8.isGeneratorFunction(aH) ? aM : aM.next().then(function (aO) {
        return aO.done ? aO.value : aM.next();
      });
    };
    av(au);
    ag(au, af, "Generator");
    ag(au, ad, function () {
      return this;
    });
    ag(au, "toString", function () {
      return "[object Generator]";
    });
    a8.keys = function (aG) {
      var aH = Object(aG),
        aI = [];
      for (var aJ in aH) aI.push(aJ);
      aI.reverse();
      return function aL() {
        for (; aI.length;) {
          var aN = aI.pop();
          if (aN in aH) {
            aL.value = aN;
            aL.done = !1;
            return aL;
          }
        }
        aL.done = !0;
        return aL;
      };
    };
    a8.values = aC;
    aB.prototype = {
      constructor: aB,
      reset: function (aG) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = a7, this.done = !1, this.delegate = null, this.method = "next", this.arg = a7, this.tryEntries.forEach(aA), !aG) {
          for (var aH in this) "t" === aH.charAt(0) && aa.call(this, aH) && !isNaN(+aH.slice(1)) && (this[aH] = a7);
        }
      },
      stop: function () {
        this.done = !0;
        var aG = this.tryEntries[0].completion;
        if ("throw" === aG.type) {
          throw aG.arg;
        }
        return this.rval;
      },
      dispatchException: function (aG) {
        if (this.done) {
          throw aG;
        }
        var aI = this;
        function aP(aQ, aR) {
          aL.type = "throw";
          aL.arg = aG;
          aI.next = aQ;
          aR && (aI.method = "next", aI.arg = a7);
          return !!aR;
        }
        for (var aJ = this.tryEntries.length - 1; aJ >= 0; --aJ) {
          var aK = this.tryEntries[aJ],
            aL = aK.completion;
          if ("root" === aK.tryLoc) {
            return aP("end");
          }
          if (aK.tryLoc <= this.prev) {
            var aM = aa.call(aK, "catchLoc"),
              aN = aa.call(aK, "finallyLoc");
            if (aM && aN) {
              if (this.prev < aK.catchLoc) {
                return aP(aK.catchLoc, !0);
              }
              if (this.prev < aK.finallyLoc) {
                return aP(aK.finallyLoc);
              }
            } else {
              if (aM) {
                if (this.prev < aK.catchLoc) {
                  return aP(aK.catchLoc, !0);
                }
              } else {
                if (!aN) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aK.finallyLoc) {
                  return aP(aK.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aG, aH) {
        for (var aI = this.tryEntries.length - 1; aI >= 0; --aI) {
          var aJ = this.tryEntries[aI];
          if (aJ.tryLoc <= this.prev && aa.call(aJ, "finallyLoc") && this.prev < aJ.finallyLoc) {
            var aK = aJ;
            break;
          }
        }
        aK && ("break" === aG || "continue" === aG) && aK.tryLoc <= aH && aH <= aK.finallyLoc && (aK = null);
        var aL = aK ? aK.completion : {};
        aL.type = aG;
        aL.arg = aH;
        return aK ? (this.method = "next", this.next = aK.finallyLoc, an) : this.complete(aL);
      },
      complete: function (aG, aH) {
        if ("throw" === aG.type) {
          throw aG.arg;
        }
        "break" === aG.type || "continue" === aG.type ? this.next = aG.arg : "return" === aG.type ? (this.rval = this.arg = aG.arg, this.method = "return", this.next = "end") : "normal" === aG.type && aH && (this.next = aH);
        return an;
      },
      finish: function (aG) {
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH];
          if (aI.finallyLoc === aG) {
            this.complete(aI.completion, aI.afterLoc);
            aA(aI);
            return an;
          }
        }
      },
      catch: function (aG) {
        for (var aH = this.tryEntries.length - 1; aH >= 0; --aH) {
          var aI = this.tryEntries[aH];
          if (aI.tryLoc === aG) {
            var aJ = aI.completion;
            if ("throw" === aJ.type) {
              var aK = aJ.arg;
              aA(aI);
            }
            return aK;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aG, aH, aI) {
        this.delegate = {
          iterator: aC(aG),
          resultName: aH,
          nextLoc: aI
        };
        "next" === this.method && (this.arg = a7);
        return an;
      }
    };
    return a8;
  }
  function l(a6, a7, a8, a9, aa, ab, ac) {
    try {
      var af = a6[ab](ac),
        ag = af.value;
    } catch (ai) {
      return void a8(ai);
    }
    af.done ? a7(ag) : Promise.resolve(ag).then(a9, aa);
  }
  function m(a6) {
    return function () {
      var a8 = this,
        a9 = arguments;
      return new Promise(function (aa, ab) {
        var ad = a6.apply(a8, a9);
        function ae(ag) {
          l(ad, aa, ab, ae, af, "next", ag);
        }
        function af(ag) {
          l(ad, aa, ab, ae, af, "throw", ag);
        }
        ae(void 0);
      });
    };
  }
  var n = ($.isNode() ? process.env.XiShiYan : $.getdata("XiShiYan")) || "",
    o = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    p = void 0,
    q = "",
    r = "",
    s = "",
    t = "34",
    u = "",
    v = "50",
    w = "",
    x = "",
    y = "",
    z = "",
    A = "",
    B = "",
    C = "uhzfzpj5l78yq6di",
    D = "35c782a2",
    E = "FR*r!isE5W";
  function F() {
    return G.apply(this, arguments);
  }
  function G() {
    G = m(k().mark(function a9() {
      var ab, ac, ad, af, ag, ah, ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba;
      return k().wrap(function (bb) {
        for (;;) {
          switch (bb.prev = bb.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), n) {
                bb.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bb.next = 5;
              return a4("先去boxjs填写账号密码");
            case 5:
              return bb.abrupt("return");
            case 6:
              bb.next = 8;
              return a2();
            case 8:
              p = bb.sent;
              ab = n.split(" ");
              ac = c(ab);
              bb.prev = 11;
              ac.s();
            case 13:
              if ((ad = ac.n()).done) {
                bb.next = 263;
                break;
              }
              af = ad.value;
              console.log("随机生成UA");
              ag = a1();
              y = ag.ua;
              z = ag.commonUa;
              A = ag.uuid;
              console.log(y);
              console.log(z);
              w = af.split("&")[0];
              x = af.split("&")[1];
              console.log("用户：".concat(w, "开始任务"));
              console.log("获取sessionId");
              bb.next = 28;
              return N("/api/account/init");
            case 28:
              ah = bb.sent;
              s = ah.data.session.id;
              console.log(s);
              console.log("获取signature_key");
              bb.next = 34;
              return H("/web/init?client_id=".concat(v));
            case 34:
              ai = bb.sent;
              q = ai.data.client.signature_key;
              console.log(q);
              console.log("获取code");
              bb.next = 40;
              return J("/web/oauth/credential_auth");
            case 40:
              if (aj = bb.sent, aj.data) {
                bb.next = 44;
                break;
              }
              console.log(aj.message);
              return bb.abrupt("continue", 261);
            case 44:
              ak = aj.data.authorization_code.code;
              console.log(ak);
              console.log("登录");
              bb.next = 49;
              return N("/api/zbtxz/login", "check_token=&code=".concat(ak, "&token=&type=-1&union_id="));
            case 49:
              al = bb.sent;
              console.log("登录成功");
              u = al.data.session.account_id;
              s = al.data.session.id;
              console.log("————————————");
              console.log("阅读抽奖");
              console.log("获取id");
              bb.next = 58;
              return L("/api/article/channel_list?channel_id=5de768411b011b48a65b772f&isDiFangHao=false&is_new=true&list_count=0&size=30");
            case 58:
              am = bb.sent;
              an = am.data.focus_list[0].channel_article_id;
              console.log(an);
              bb.next = 63;
              return L("/api/article/detail?id=".concat(an));
            case 63:
              for (ao = bb.sent, url = ao.data.article.share_url, urlStr = url.split("?")[1], result = {}, paramsArr = urlStr.split("&"), ap = 0, aq = paramsArr.length; ap < aq; ap++) {
                ar = paramsArr[ap].split("=");
                result[ar[0]] = ar[1];
              }
              var bd = {};
              bd.debug = 0;
              bd.userId = "";
              as = result.id;
              console.log(as);
              console.log("获取key和token");
              bb.next = 74;
              return P("/api/member/login", bd);
            case 74:
              at = bb.sent;
              D = at.data.key;
              B = "Bearer " + at.data.token;
              console.log(D);
              console.log(B);
              console.log("获取抽奖id");
              bb.next = 82;
              return R("/api/study/detail?id=".concat(as), {
                id: as
              });
            case 82:
              au = bb.sent;
              av = au.data.lottery.lottery_id;
              console.log(av);
              console.log("开始阅读");
              aw = c(au.data.levels);
              bb.prev = 87;
              aw.s();
            case 89:
              if ((ax = aw.n()).done) {
                bb.next = 119;
                break;
              }
              ay = ax.value;
              bb.next = 93;
              return R("/api/study/level?id=".concat(ay.id), {
                id: ay.id
              });
            case 93:
              if (az = bb.sent, console.log(az.data.level.name), az.data.level.task_num != az.data.completedTasks.length) {
                bb.next = 98;
                break;
              }
              console.log("已完成");
              return bb.abrupt("continue", 117);
            case 98:
              aA = c(az.data.tasks);
              bb.prev = 99;
              aA.s();
            case 101:
              if ((aB = aA.n()).done) {
                bb.next = 109;
                break;
              }
              aC = aB.value;
              bb.next = 105;
              return P("/api/study/task/complete", {
                id: aC.id
              });
            case 105:
              aD = bb.sent;
              console.log(aD.message);
            case 107:
              bb.next = 101;
              break;
            case 109:
              bb.next = 114;
              break;
            case 111:
              bb.prev = 111;
              bb.t0 = bb.catch(99);
              aA.e(bb.t0);
            case 114:
              bb.prev = 114;
              aA.f();
              return bb.finish(114);
            case 117:
              bb.next = 89;
              break;
            case 119:
              bb.next = 124;
              break;
            case 121:
              bb.prev = 121;
              bb.t1 = bb.catch(87);
              aw.e(bb.t1);
            case 124:
              bb.prev = 124;
              aw.f();
              return bb.finish(124);
            case 127:
              bb.next = 129;
              return P("/api/lotterybigwheel/_ac_lottery_count", {
                id: av,
                module: "study"
              });
            case 129:
              aE = bb.sent;
              aF = 0;
            case 131:
              if (!(aF < aE.data.count)) {
                bb.next = 172;
                break;
              }
              var be = {};
              be.id = av;
              be.app_id = C;
              be.module = "study";
              be.optionHash = "";
              bb.next = 134;
              return P("/api/lotterybigwheel/_ac_lottery", be);
            case 134:
              if (aG = bb.sent, 10000 != aG.code) {
                bb.next = 168;
                break;
              }
              console.log(aG.message);
              bb.next = 139;
              return P("/api/captcha/get", {
                activity_id: av,
                module: "bigWheel"
              });
            case 139:
              aH = bb.sent;
              aI = aH.data.jigsawImageUrl;
              aJ = aH.data.originalImageUrl;
              console.log("滑块：".concat(aI));
              console.log("背景：".concat(aJ));
              aK = aH.data.token;
              aL = aH.data.secretKey;
              console.log("秘钥：".concat(aL));
              bb.next = 149;
              return T({
                slidingImage: aI,
                backImage: aJ
              });
            case 149:
              if (aM = bb.sent, aM) {
                bb.next = 155;
                break;
              }
              console.log("ddddocr服务异常");
              bb.next = 154;
              return a4("ddddocr服务异常");
            case 154:
              return bb.abrupt("continue", 169);
            case 155:
              console.log(aM);
              aN = V(JSON.stringify({
                x: aM.result,
                y: 5
              }), aL);
              bb.next = 159;
              return P("/api/captcha/check", {
                activity_id: av,
                module: "bigWheel",
                cap_token: aK,
                point: aN
              });
            case 159:
              if (aO = bb.sent, console.log("验证滑块：" + aO.message), "操作成功" != aO.message) {
                bb.next = 166;
                break;
              }
              bb.next = 164;
              return P("/api/lotterybigwheel/_ac_lottery", {
                id: av,
                app_id: C,
                module: "study",
                optionHash: ""
              });
            case 164:
              aG = bb.sent;
              console.log("抽奖获得：".concat(aG.data.title));
            case 166:
              bb.next = 169;
              break;
            case 168:
              console.log("抽奖获得：".concat(aG.data.title));
            case 169:
              aF++;
              bb.next = 131;
              break;
            case 172:
              console.log("————————————");
              console.log("开始签到");
              bb.next = 176;
              return L("/api/user_mumber/sign");
            case 176:
              aP = bb.sent;
              console.log("签到获得：".concat(aP.data.signIntegral, "积分"));
              console.log("————————————");
              console.log("开始任务");
              aQ = !0;
              aR = !0;
              aS = !0;
              bb.next = 185;
              return L("/api/user_center/task?type=1&current=1&size=20");
            case 185:
              aT = bb.sent;
              aU = c(aT.data.list);
              bb.prev = 187;
              aU.s();
            case 189:
              if ((aV = aU.n()).done) {
                bb.next = 211;
                break;
              }
              if (aW = aV.value, console.log("任务：".concat(aW.name)), 1 != aW.completed) {
                bb.next = 195;
                break;
              }
              console.log("任务已完成");
              return bb.abrupt("continue", 209);
            case 195:
              if (console.log("任务进度：".concat(aW.finish_times, "/").concat(aW.frequency)), "使用本地服务" != aW.name) {
                bb.next = 206;
                break;
              }
              aX = aW.finish_times;
            case 198:
              if (!(aX < aW.frequency)) {
                bb.next = 206;
                break;
              }
              bb.next = 201;
              return N("/api/user_mumber/doTask", "memberType=6&member_type=6");
            case 201:
              aY = bb.sent;
              console.log("任务完成获得：".concat(aY.data.score_notify.integral, "积分"));
            case 203:
              aX++;
              bb.next = 198;
              break;
            case 206:
              "新闻资讯阅读" == aW.name && (aQ = !1);
              "新闻资讯点赞" == aW.name && (aR = !1);
              "分享资讯给好友" == aW.name && (aS = !1);
            case 209:
              bb.next = 189;
              break;
            case 211:
              bb.next = 216;
              break;
            case 213:
              bb.prev = 213;
              bb.t2 = bb.catch(187);
              aU.e(bb.t2);
            case 216:
              bb.prev = 216;
              aU.f();
              return bb.finish(216);
            case 219:
              if (aQ && aR && aS) {
                bb.next = 254;
                break;
              }
              bb.next = 222;
              return L("/api/article/channel_list?channel_id=5de768411b011b48a65b772f&isDiFangHao=false&is_new=true&list_count=0&size=30");
            case 222:
              aZ = bb.sent;
              b0 = c(aZ.data.article_list);
              bb.prev = 224;
              b0.s();
            case 226:
              if ((b1 = b0.n()).done) {
                bb.next = 246;
                break;
              }
              if (b2 = b1.value, b3 = b2.id, aQ) {
                bb.next = 234;
                break;
              }
              bb.next = 232;
              return L("/api/article/read_time?channel_article_id=".concat(b3, "&is_end=true&read_time=3051"));
            case 232:
              b4 = bb.sent;
              b4.data.score_notify ? console.log("阅读获得：".concat(null === (b5 = b4.data) || void 0 === b5 || null === (b5 = b5.score_notify) || void 0 === b5 ? void 0 : b5.integral, "积分")) : console.log("文章已经阅读过了");
            case 234:
              if (aR) {
                bb.next = 239;
                break;
              }
              bb.next = 237;
              return N("/api/favorite/like", "action=true&id=".concat(b3));
            case 237:
              b6 = bb.sent;
              b6.data ? console.log("点赞获得：".concat(null === (b7 = b6.data) || void 0 === b7 || null === (b7 = b7.score_notify) || void 0 === b7 ? void 0 : b7.integral, "积分")) : console.log("文章已经点赞过了");
            case 239:
              if (aS) {
                bb.next = 244;
                break;
              }
              bb.next = 242;
              return N("/api/user_mumber/doTask", "memberType=3&member_type=3&target_id==".concat(b3));
            case 242:
              b8 = bb.sent;
              b8.data.score_notify ? console.log("分享获得：".concat(null === (b9 = b8.data) || void 0 === b9 || null === (b9 = b9.score_notify) || void 0 === b9 ? void 0 : b9.integral, "积分")) : console.log("文章已经分享过了");
            case 244:
              bb.next = 226;
              break;
            case 246:
              bb.next = 251;
              break;
            case 248:
              bb.prev = 248;
              bb.t3 = bb.catch(224);
              b0.e(bb.t3);
            case 251:
              bb.prev = 251;
              b0.f();
              return bb.finish(251);
            case 254:
              console.log("————————————");
              console.log("查询积分");
              bb.next = 258;
              return L("/api/user_mumber/account_detail");
            case 258:
              ba = bb.sent;
              console.log("拥有积分：".concat(ba.data.rst.total_integral, "\n"));
              r += "用户：".concat(w, " 积分：").concat(ba.data.rst.total_integral, "\n");
            case 261:
              bb.next = 13;
              break;
            case 263:
              bb.next = 268;
              break;
            case 265:
              bb.prev = 265;
              bb.t4 = bb.catch(11);
              ac.e(bb.t4);
            case 268:
              bb.prev = 268;
              ac.f();
              return bb.finish(268);
            case 271:
              if (!r) {
                bb.next = 274;
                break;
              }
              bb.next = 274;
              return a4(r);
            case 274:
            case "end":
              return bb.stop();
          }
        }
      }, a9, null, [[11, 265, 268, 271], [87, 121, 124, 127], [99, 111, 114, 117], [187, 213, 216, 219], [224, 248, 251, 254]]);
    }));
    return G.apply(this, arguments);
  }
  function H(a6) {
    return I.apply(this, arguments);
  }
  function I() {
    I = m(k().mark(function a7(a8) {
      return k().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ad = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": Z(),
                    "Accept-Encoding": "gzip",
                    "user-agent": y
                  }
                };
                $.get(ad, function () {
                  var ae = m(k().mark(function af(ag, ah, ai) {
                    return k().wrap(function (ak) {
                      for (;;) {
                        switch (ak.prev = ak.next) {
                          case 0:
                            try {
                              ag ? (console.log("".concat(JSON.stringify(ag))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(ai));
                            } catch (an) {
                              $.logErr(an, ah);
                            } finally {
                              ab();
                            }
                          case 1:
                          case "end":
                            return ak.stop();
                        }
                      }
                    }, af);
                  }));
                  return function (ag, ah, ai) {
                    return ae.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a7);
    }));
    return I.apply(this, arguments);
  }
  function J(a6) {
    return K.apply(this, arguments);
  }
  function K() {
    K = m(k().mark(function a7(a8) {
      var a9;
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = W();
              return aa.abrupt("return", new Promise(function (ac) {
                var ad = {
                  Connection: "Keep-Alive",
                  "X-REQUEST-ID": a9.uuid,
                  "X-SIGNATURE": a9.signature,
                  "Cache-Control": "no-cache",
                  "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                  "Accept-Encoding": "gzip",
                  "user-agent": y
                };
                var ae = {
                  url: "https://passport.tmuyun.com".concat(a8),
                  headers: ad,
                  body: a9.body
                };
                $.post(ae, function () {
                  var ag = m(k().mark(function ah(ai, aj, ak) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            try {
                              ai ? (console.log("".concat(JSON.stringify(ai))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ac(JSON.parse(ak));
                            } catch (an) {
                              $.logErr(an, aj);
                            } finally {
                              ac();
                            }
                          case 1:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ah);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return K.apply(this, arguments);
  }
  function L(a6) {
    return M.apply(this, arguments);
  }
  function M() {
    M = m(k().mark(function a7(a8) {
      var a9;
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              a9 = Y(a8);
              return aa.abrupt("return", new Promise(function (ac) {
                var ae = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": a9.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": a9.uuid,
                    "X-SIGNATURE": a9.signature,
                    "X-TENANT-ID": t,
                    "X-ACCOUNT-ID": u,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  }
                };
                $.get(ae, function () {
                  var ag = m(k().mark(function ah(ai, aj, ak) {
                    return k().wrap(function (al) {
                      for (;;) {
                        switch (al.prev = al.next) {
                          case 0:
                            if (al.prev = 0, !ai) {
                              al.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ai)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            al.next = 9;
                            break;
                          case 6:
                            al.next = 8;
                            return $.wait(2000);
                          case 8:
                            ac(JSON.parse(ak));
                          case 9:
                            al.next = 14;
                            break;
                          case 11:
                            al.prev = 11;
                            al.t0 = al.catch(0);
                            $.logErr(al.t0, aj);
                          case 14:
                            al.prev = 14;
                            ac();
                            return al.finish(14);
                          case 17:
                          case "end":
                            return al.stop();
                        }
                      }
                    }, ah, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ai, aj, ak) {
                    return ag.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aa.stop();
          }
        }
      }, a7);
    }));
    return M.apply(this, arguments);
  }
  function N(a6, a7) {
    return O.apply(this, arguments);
  }
  function O() {
    O = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = Y(a8);
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://vapp.tmuyun.com".concat(a8),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ab.time,
                    "X-SESSION-ID": s,
                    "X-REQUEST-ID": ab.uuid,
                    "X-SIGNATURE": ab.signature,
                    "X-TENANT-ID": t,
                    "X-ACCOUNT-ID": u,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": z
                  },
                  body: a9
                };
                $.post(ag, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !aj) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(al));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, ak);
                          case 14:
                            an.prev = 14;
                            ae();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return O.apply(this, arguments);
  }
  function P(a6, a7) {
    return Q.apply(this, arguments);
  }
  function Q() {
    Q = m(k().mark(function a6(a7, a8) {
      var aa;
      return k().wrap(function (ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              aa = X(a8);
              return ab.abrupt("return", new Promise(function (ad) {
                var af = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a7),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": A,
                    "access-auth-id": u,
                    "access-api-signature": aa.signature,
                    "access-nonce-str": aa.uuid,
                    authorization: B,
                    "access-app-id": C,
                    "access-timestamp": aa.time,
                    "access-api-token": s,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_zhuji;xsb_zhuji;1.3.2;native_app;6.10.0",
                    "content-type": "application/json; charset=UTF-8",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(a8)
                };
                $.post(af, function () {
                  var ah = m(k().mark(function ai(aj, ak, al) {
                    return k().wrap(function (am) {
                      for (;;) {
                        switch (am.prev = am.next) {
                          case 0:
                            if (am.prev = 0, !aj) {
                              am.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aj)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            am.next = 9;
                            break;
                          case 6:
                            am.next = 8;
                            return $.wait(2000);
                          case 8:
                            ad(JSON.parse(al));
                          case 9:
                            am.next = 14;
                            break;
                          case 11:
                            am.prev = 11;
                            am.t0 = am.catch(0);
                            $.logErr(am.t0, ak);
                          case 14:
                            am.prev = 14;
                            ad();
                            return am.finish(14);
                          case 17:
                          case "end":
                            return am.stop();
                        }
                      }
                    }, ai, null, [[0, 11, 14, 17]]);
                  }));
                  return function (aj, ak, al) {
                    return ah.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ab.stop();
          }
        }
      }, a6);
    }));
    return Q.apply(this, arguments);
  }
  function R(a6, a7) {
    return S.apply(this, arguments);
  }
  function S() {
    S = m(k().mark(function a7(a8, a9) {
      var ab;
      return k().wrap(function (ac) {
        for (;;) {
          switch (ac.prev = ac.next) {
            case 0:
              ab = X(a9);
              return ac.abrupt("return", new Promise(function (ae) {
                var ag = {
                  url: "https://op-api.cloud.jinhua.com.cn".concat(a8),
                  headers: {
                    "access-type": "app",
                    "access-module": "study",
                    "access-device-id": A,
                    "access-auth-id": u,
                    "access-api-signature": ab.signature,
                    "access-nonce-str": ab.uuid,
                    authorization: B,
                    "access-app-id": C,
                    "access-timestamp": ab.time,
                    "access-api-token": s,
                    accept: "application/json, text/plain, */*",
                    "user-agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_zhuji;xsb_zhuji;1.3.2;native_app;6.10.0",
                    origin: "https://op-h5.cloud.jinhua.com.cn",
                    "x-requested-with": "com.zjonline.zhuji",
                    "sec-fetch-site": "same-site",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-dest": "empty",
                    referer: "https://op-h5.cloud.jinhua.com.cn/",
                    "accept-encoding": "gzip, deflate",
                    "accept-language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(ag, function () {
                  var ai = m(k().mark(function aj(ak, al, am) {
                    return k().wrap(function (an) {
                      for (;;) {
                        switch (an.prev = an.next) {
                          case 0:
                            if (an.prev = 0, !ak) {
                              an.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ak)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            an.next = 9;
                            break;
                          case 6:
                            an.next = 8;
                            return $.wait(2000);
                          case 8:
                            ae(JSON.parse(am));
                          case 9:
                            an.next = 14;
                            break;
                          case 11:
                            an.prev = 11;
                            an.t0 = an.catch(0);
                            $.logErr(an.t0, al);
                          case 14:
                            an.prev = 14;
                            ae();
                            return an.finish(14);
                          case 17:
                          case "end":
                            return an.stop();
                        }
                      }
                    }, aj, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ak, al, am) {
                    return ai.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return ac.stop();
          }
        }
      }, a7);
    }));
    return S.apply(this, arguments);
  }
  function T(a6) {
    return U.apply(this, arguments);
  }
  function U() {
    U = m(k().mark(function a7(a8) {
      return k().wrap(function (a9) {
        for (;;) {
          switch (a9.prev = a9.next) {
            case 0:
              return a9.abrupt("return", new Promise(function (ab) {
                var ac = {
                  url: "".concat(o, "/capcode"),
                  headers: {
                    "Content-Type": "application/json"
                  },
                  body: JSON.stringify(a8)
                };
                $.post(ac, function (ad, ae, af) {
                  try {
                    ad ? (console.log("".concat(JSON.stringify(ad))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ab(JSON.parse(af));
                  } catch (ag) {
                    $.logErr(ag, ae);
                  } finally {
                    ab();
                  }
                });
              }));
            case 1:
            case "end":
              return a9.stop();
          }
        }
      }, a7);
    }));
    return U.apply(this, arguments);
  }
  function V(a6, a7) {
    CryptoJS = p.createCryptoJS();
    var a8 = CryptoJS.enc.Utf8.parse(a7),
      a9 = CryptoJS.enc.Utf8.parse(a6),
      aa = CryptoJS.AES.encrypt(a9, a8, {
        mode: CryptoJS.mode.ECB,
        padding: CryptoJS.pad.Pkcs7
      });
    return aa.toString();
  }
  function W() {
    var ab = new (p.loadJSEncrypt())();
    ab.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    x = ab.encrypt(x);
    var a8 = Z(),
      a9 = "client_id=".concat(v, "&password=").concat(x, "&phone_number=").concat(w),
      aa = "post%%/web/oauth/credential_auth?".concat(a9, "%%").concat(a8, "%%");
    a9 = "client_id=".concat(v, "&password=").concat(encodeURIComponent(x), "&phone_number=").concat(w);
    CryptoJS = p.createCryptoJS();
    var ad = CryptoJS.HmacSHA256(aa, q),
      ae = CryptoJS.enc.Hex.stringify(ad);
    var ac = {};
    ac.uuid = a8;
    ac.signature = ae;
    ac.body = a9;
    return ac;
  }
  function X(a6) {
    var ae = Z(),
      af = Date.now(),
      ag = {
        app_id: C,
        device_id: A,
        nonce_str: ae,
        source_type: "app",
        timestamp: af,
        auth_id: u,
        token: s
      };
    Object.entries(a6).forEach(function (ah) {
      var ai = d(ah, 2),
        aj = ai[0],
        ak = ai[1];
      ag[aj] = ak;
    });
    var a9 = Object.keys(ag).sort(),
      aa = a9.map(function (ah) {
        return "".concat(ah, "=").concat(ag[ah]);
      }).join("&&");
    aa = aa + "&&" + D;
    CryptoJS = p.createCryptoJS();
    var ab = CryptoJS.SHA256(aa).toString();
    var ad = {};
    ad.uuid = ae;
    ad.time = af;
    ad.signature = ab;
    return ad;
  }
  function Y(a6) {
    var a7 = Z(),
      a8 = Date.now();
    a6.indexOf("?") > 0 && (a6 = a6.substring(0, a6.indexOf("?")));
    CryptoJS = p.createCryptoJS();
    var a9 = CryptoJS.SHA256("".concat(a6, "&&").concat(s, "&&").concat(a7, "&&").concat(a8, "&&").concat(E, "&&").concat(t)).toString(),
      aa = {
        uuid: a7,
        time: a8,
        signature: a9
      };
    return aa;
  }
  function Z() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (a6) {
      var a7 = 16 * Math.random() | 0,
        a8 = "x" === a6 ? a7 : 3 & a7 | 8;
      return a8.toString(16);
    });
  }
  function a0(a6) {
    return a6[Math.floor(Math.random() * a6.length)];
  }
  function a1() {
    var a6 = "1.3.2",
      a7 = Z(),
      a8 = a0(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      a9 = "Xiaomi " + a8,
      aa = "Android",
      ab = "".concat(aa.toUpperCase(), ";").concat("11", ";").concat(v, ";").concat(a6, ";1.0;null;").concat(a8),
      ac = "".concat(a6, ";").concat(a7, ";").concat(a9, ";").concat(aa, ";").concat("11", ";").concat("Release", ";").concat("6.10.0"),
      ad = {
        ua: ab,
        commonUa: ac,
        uuid: a7
      };
    return ad;
  }
  function a2() {
    return a3.apply(this, arguments);
  }
  function a3() {
    a3 = m(k().mark(function a7() {
      var a9;
      return k().wrap(function aa(ab) {
        for (;;) {
          switch (ab.prev = ab.next) {
            case 0:
              if (a9 = $.getdata("Utils_Code") || "", !a9 || !Object.keys(a9).length) {
                ab.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(a9);
              return ab.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ab.abrupt("return", new Promise(function () {
                var ad = m(k().mark(function ae(af) {
                  return k().wrap(function ah(ai) {
                    for (;;) {
                      switch (ai.prev = ai.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (ak) {
                            $.setdata(ak, "Utils_Code");
                            eval(ak);
                            console.log("✅ Utils加载成功, 请继续");
                            af(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ai.stop();
                      }
                    }
                  }, ae);
                }));
                return function (af) {
                  return ad.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ab.stop();
          }
        }
      }, a7);
    }));
    return a3.apply(this, arguments);
  }
  function a4(a6) {
    return a5.apply(this, arguments);
  }
  function a5() {
    a5 = m(k().mark(function a8(a9) {
      return k().wrap(function (aa) {
        for (;;) {
          switch (aa.prev = aa.next) {
            case 0:
              if (!$.isNode()) {
                aa.next = 5;
                break;
              }
              aa.next = 3;
              return notify.sendNotify($.name, a9);
            case 3:
              aa.next = 6;
              break;
            case 5:
              $.msg($.name, "", a9);
            case 6:
            case "end":
              return aa.stop();
          }
        }
      }, a8);
    }));
    return a5.apply(this, arguments);
  }
  m(k().mark(function a6() {
    return k().wrap(function (a9) {
      for (;;) {
        switch (a9.prev = a9.next) {
          case 0:
            a9.next = 2;
            return F();
          case 2:
          case "end":
            return a9.stop();
        }
      }
    }, a6);
  }))().catch(function (a7) {
    $.log(a7);
  }).finally(function () {
    $.done({});
  });
})();
function Env(t, e) {
  class s {
    constructor(t) {
      this.env = t;
    }
    send(t, e = "GET") {
      t = "string" == typeof t ? {
        url: t
      } : t;
      let s = this.get;
      "POST" === e && (s = this.post);
      return new Promise((e, i) => {
        s.call(this, t, (t, s, o) => {
          t ? i(t) : e(s);
        });
      });
    }
    get(t) {
      return this.send.call(this.env, t);
    }
    post(t) {
      return this.send.call(this.env, t, "POST");
    }
  }
  return new class {
    constructor(t, e) {
      this.logLevels = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      this.logLevelPrefixs = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevel = "info";
      this.name = t;
      this.http = new s(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, e);
      this.log("", `🔔${this.name}, 开始!`);
    }
    getEnv() {
      return "undefined" != typeof $environment && $environment["surge-version"] ? "Surge" : "undefined" != typeof $environment && $environment["stash-version"] ? "Stash" : "undefined" != typeof module && module.exports ? "Node.js" : "undefined" != typeof $task ? "Quantumult X" : "undefined" != typeof $loon ? "Loon" : "undefined" != typeof $rocket ? "Shadowrocket" : void 0;
    }
    isNode() {
      return "Node.js" === this.getEnv();
    }
    isQuanX() {
      return "Quantumult X" === this.getEnv();
    }
    isSurge() {
      return "Surge" === this.getEnv();
    }
    isLoon() {
      return "Loon" === this.getEnv();
    }
    isShadowrocket() {
      return "Shadowrocket" === this.getEnv();
    }
    isStash() {
      return "Stash" === this.getEnv();
    }
    toObj(t, e = null) {
      try {
        return JSON.parse(t);
      } catch {
        return e;
      }
    }
    toStr(t, e = null, ...s) {
      try {
        return JSON.stringify(t, ...s);
      } catch {
        return e;
      }
    }
    getjson(t, e) {
      let s = e;
      if (this.getdata(t)) {
        try {
          s = JSON.parse(this.getdata(t));
        } catch {}
      }
      return s;
    }
    setjson(t, e) {
      try {
        return this.setdata(JSON.stringify(t), e);
      } catch {
        return !1;
      }
    }
    getScript(t) {
      return new Promise(e => {
        this.get({
          url: t
        }, (t, s, i) => e(i));
      });
    }
    runScript(t, e) {
      return new Promise(s => {
        let i = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        i = i ? i.replace(/\n/g, "").trim() : i;
        let o = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        o = o ? 1 * o : 20;
        o = e && e.timeout ? e.timeout : o;
        const [r, a] = i.split("@"),
          n = {
            url: `http://${a}/v1/scripting/evaluate`,
            body: {
              script_text: t,
              mock_type: "cron",
              timeout: o
            },
            headers: {
              "X-Key": r,
              Accept: "*/*"
            },
            timeout: o
          };
        this.post(n, (t, e, i) => s(i));
      }).catch(t => this.logErr(t));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e);
        if (!s && !i) {
          return {};
        }
        {
          const i = s ? t : e;
          try {
            return JSON.parse(this.fs.readFileSync(i));
          } catch (t) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const t = this.path.resolve(this.dataFile),
          e = this.path.resolve(process.cwd(), this.dataFile),
          s = this.fs.existsSync(t),
          i = !s && this.fs.existsSync(e),
          o = JSON.stringify(this.data);
        s ? this.fs.writeFileSync(t, o) : i ? this.fs.writeFileSync(e, o) : this.fs.writeFileSync(t, o);
      }
    }
    lodash_get(t, e, s) {
      const i = e.replace(/\[(\d+)\]/g, ".$1").split(".");
      let o = t;
      for (const t of i) if (o = Object(o)[t], void 0 === o) {
        return s;
      }
      return o;
    }
    lodash_set(t, e, s) {
      Object(t) !== t || (Array.isArray(e) || (e = e.toString().match(/[^.[\]]+/g) || []), e.slice(0, -1).reduce((t, s, i) => Object(t[s]) === t[s] ? t[s] : t[s] = Math.abs(e[i + 1]) >> 0 == +e[i + 1] ? [] : {}, t)[e[e.length - 1]] = s);
      return t;
    }
    getdata(t) {
      let e = this.getval(t);
      if (/^@/.test(t)) {
        const [, s, i] = /^@(.*?)\.(.*?)$/.exec(t),
          o = s ? this.getval(s) : "";
        if (o) {
          try {
            const t = JSON.parse(o);
            e = t ? this.lodash_get(t, i, "") : e;
          } catch (t) {
            e = "";
          }
        }
      }
      return e;
    }
    setdata(t, e) {
      let s = !1;
      if (/^@/.test(e)) {
        const [, i, o] = /^@(.*?)\.(.*?)$/.exec(e),
          r = this.getval(i),
          a = i ? "null" === r ? null : r || "{}" : "{}";
        try {
          const e = JSON.parse(a);
          this.lodash_set(e, o, t);
          s = this.setval(JSON.stringify(e), i);
        } catch (e) {
          const r = {};
          this.lodash_set(r, o, t);
          s = this.setval(JSON.stringify(r), i);
        }
      } else {
        s = this.setval(t, e);
      }
      return s;
    }
    getval(t) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(t);
        case "Quantumult X":
          return $prefs.valueForKey(t);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[t];
        default:
          return this.data && this.data[t] || null;
      }
    }
    setval(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(t, e);
        case "Quantumult X":
          return $prefs.setValueForKey(t, e);
        case "Node.js":
          this.data = this.loaddata();
          this.data[e] = t;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[e] || null;
      }
    }
    initGotEnv(t) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      t && (t.headers = t.headers ? t.headers : {}, t && (t.headers = t.headers ? t.headers : {}, void 0 === t.headers.cookie && void 0 === t.headers.Cookie && void 0 === t.cookieJar && (t.cookieJar = this.ckjar)));
    }
    get(t, e = () => {}) {
      switch (t.headers && (delete t.headers["Content-Type"], delete t.headers["Content-Length"], delete t.headers["content-type"], delete t.headers["content-length"]), t.params && (t.url += "?" + this.queryStr(t.params)), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient.get(t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let s = require("iconv-lite");
          this.initGotEnv(t);
          this.got(t).on("redirect", (t, e) => {
            try {
              if (t.headers["set-cookie"]) {
                const s = t.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                s && this.ckjar.setCookieSync(s, null);
                e.cookieJar = this.ckjar;
              }
            } catch (t) {
              this.logErr(t);
            }
          }).then(t => {
            const {
                statusCode: i,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = s.decode(a, this.encoding);
            e(null, {
              status: i,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: i,
              response: o
            } = t;
            e(i, o, o && s.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    post(t, e = () => {}) {
      const s = t.method ? t.method.toLocaleLowerCase() : "post";
      switch (t.body && t.headers && !t.headers["Content-Type"] && !t.headers["content-type"] && (t.headers["content-type"] = "application/x-www-form-urlencoded"), t.headers && (delete t.headers["Content-Length"], delete t.headers["content-length"]), void 0 === t.followRedirect || t.followRedirect || ((this.isSurge() || this.isLoon()) && (t["auto-redirect"] = !1), this.isQuanX() && (t.opts ? t.opts.redirection = !1 : t.opts = {
        redirection: !1
      })), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          this.isSurge() && this.isNeedRewrite && (t.headers = t.headers || {}, Object.assign(t.headers, {
            "X-Surge-Skip-Scripting": !1
          }));
          $httpClient[s](t, (t, s, i) => {
            !t && s && (s.body = i, s.statusCode = s.status ? s.status : s.statusCode, s.status = s.statusCode);
            e(t, s, i);
          });
          break;
        case "Quantumult X":
          t.method = s;
          this.isNeedRewrite && (t.opts = t.opts || {}, Object.assign(t.opts, {
            hints: !1
          }));
          $task.fetch(t).then(t => {
            const {
              statusCode: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            } = t;
            e(null, {
              status: s,
              statusCode: i,
              headers: o,
              body: r,
              bodyBytes: a
            }, r, a);
          }, t => e(t && t.error || "UndefinedError"));
          break;
        case "Node.js":
          let i = require("iconv-lite");
          this.initGotEnv(t);
          const {
            url: o,
            ...r
          } = t;
          this.got[s](o, r).then(t => {
            const {
                statusCode: s,
                statusCode: o,
                headers: r,
                rawBody: a
              } = t,
              n = i.decode(a, this.encoding);
            e(null, {
              status: s,
              statusCode: o,
              headers: r,
              rawBody: a,
              body: n
            }, n);
          }, t => {
            const {
              message: s,
              response: o
            } = t;
            e(s, o, o && i.decode(o.rawBody, this.encoding));
          });
          break;
      }
    }
    time(t, e = null) {
      const s = e ? new Date(e) : new Date();
      let i = {
        "M+": s.getMonth() + 1,
        "d+": s.getDate(),
        "H+": s.getHours(),
        "m+": s.getMinutes(),
        "s+": s.getSeconds(),
        "q+": Math.floor((s.getMonth() + 3) / 3),
        S: s.getMilliseconds()
      };
      /(y+)/.test(t) && (t = t.replace(RegExp.$1, (s.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let e in i) new RegExp("(" + e + ")").test(t) && (t = t.replace(RegExp.$1, 1 == RegExp.$1.length ? i[e] : ("00" + i[e]).substr(("" + i[e]).length)));
      return t;
    }
    queryStr(t) {
      let e = "";
      for (const s in t) {
        let i = t[s];
        null != i && "" !== i && ("object" == typeof i && (i = JSON.stringify(i)), e += `${s}=${i}&`);
      }
      e = e.substring(0, e.length - 1);
      return e;
    }
    msg(e = t, s = "", i = "", o = {}) {
      const r = t => {
        const {
          $open: e,
          $copy: s,
          $media: i,
          $mediaMime: o
        } = t;
        switch (typeof t) {
          case void 0:
            return t;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                return {
                  url: t
                };
              case "Loon":
              case "Shadowrocket":
                return t;
              case "Quantumult X":
                return {
                  "open-url": t
                };
              case "Node.js":
                return;
            }
          case "object":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              case "Shadowrocket":
              default:
                {
                  const r = {};
                  let a = t.openUrl || t.url || t["open-url"] || e;
                  a && Object.assign(r, {
                    action: "open-url",
                    url: a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  if (n && Object.assign(r, {
                    action: "clipboard",
                    text: n
                  }), i) {
                    let t, e, s;
                    if (i.startsWith("http")) {
                      t = i;
                    } else {
                      if (i.startsWith("data:")) {
                        const [t] = i.split(";"),
                          [, o] = i.split(",");
                        e = o;
                        s = t.replace("data:", "");
                      } else {
                        e = i;
                        s = (t => {
                          const e = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var s in e) if (0 === t.indexOf(s)) {
                            return e[s];
                          }
                          return null;
                        })(i);
                      }
                    }
                    Object.assign(r, {
                      "media-url": t,
                      "media-base64": e,
                      "media-base64-mime": o ?? s
                    });
                  }
                  Object.assign(r, {
                    "auto-dismiss": t["auto-dismiss"],
                    sound: t.sound
                  });
                  return r;
                }
              case "Loon":
                {
                  const s = {};
                  let o = t.openUrl || t.url || t["open-url"] || e;
                  o && Object.assign(s, {
                    openUrl: o
                  });
                  let r = t.mediaUrl || t["media-url"];
                  i?.startsWith("http") && (r = i);
                  r && Object.assign(s, {
                    mediaUrl: r
                  });
                  console.log(JSON.stringify(s));
                  return s;
                }
              case "Quantumult X":
                {
                  const o = {};
                  let r = t["open-url"] || t.url || t.openUrl || e;
                  r && Object.assign(o, {
                    "open-url": r
                  });
                  let a = t["media-url"] || t.mediaUrl;
                  i?.startsWith("http") && (a = i);
                  a && Object.assign(o, {
                    "media-url": a
                  });
                  let n = t["update-pasteboard"] || t.updatePasteboard || s;
                  n && Object.assign(o, {
                    "update-pasteboard": n
                  });
                  console.log(JSON.stringify(o));
                  return o;
                }
              case "Node.js":
                return;
            }
          default:
            return;
        }
      };
      if (!this.isMute) {
        switch (this.getEnv()) {
          case "Surge":
          case "Loon":
          case "Stash":
          case "Shadowrocket":
          default:
            $notification.post(e, s, i, r(o));
            break;
          case "Quantumult X":
            $notify(e, s, i, r(o));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let t = ["", "==============📣系统通知📣=============="];
        t.push(e);
        s && t.push(s);
        i && t.push(i);
        console.log(t.join("\n"));
        this.logs = this.logs.concat(t);
      }
    }
    debug(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.debug}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    info(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.info}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    warn(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.warn}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    error(...t) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (t.length > 0 && (this.logs = [...this.logs, ...t]), console.log(`${this.logLevelPrefixs.error}${t.map(t => t ?? String(t)).join(this.logSeparator)}`));
    }
    log(...t) {
      t.length > 0 && (this.logs = [...this.logs, ...t]);
      console.log(t.map(t => t ?? String(t)).join(this.logSeparator));
    }
    logErr(t, e) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", `❗️${this.name}, 错误!`, e, t);
          break;
        case "Node.js":
          this.log("", `❗️${this.name}, 错误!`, e, void 0 !== t.message ? t.message : t, t.stack);
          break;
      }
    }
    wait(t) {
      return new Promise(e => setTimeout(e, t));
    }
    done(t = {}) {
      const e = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", `🔔${this.name}, 结束! 🕛 ${e} 秒`), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(t);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(t, e);
}