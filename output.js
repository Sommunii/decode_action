//Tue Aug 13 2024 03:21:06 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("读嘉");
const notify = $.isNode() ? require("../sendNotify") : "";
(() => {
  function b(af) {
    b = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (ai) {
      return typeof ai;
    } : function (ai) {
      return ai && "function" == typeof Symbol && ai.constructor === Symbol && ai !== Symbol.prototype ? "symbol" : typeof ai;
    };
    return b(af);
  }
  function c(af, ag) {
    var ai = "undefined" != typeof Symbol && af[Symbol.iterator] || af["@@iterator"];
    if (!ai) {
      if (Array.isArray(af) || (ai = d(af)) || ag && af && "number" == typeof af.length) {
        ai && (af = ai);
        var aj = 0,
          ak = function () {};
        return {
          s: ak,
          n: function () {
            var ar = {
              done: !0
            };
            return aj >= af.length ? ar : {
              done: !1,
              value: af[aj++]
            };
          },
          e: function (aq) {
            throw aq;
          },
          f: ak
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var al,
      am = !0,
      an = !1;
    return {
      s: function () {
        ai = ai.call(af);
      },
      n: function () {
        var ar = ai.next();
        am = ar.done;
        return ar;
      },
      e: function (ar) {
        an = !0;
        al = ar;
      },
      f: function () {
        try {
          am || null == ai.return || ai.return();
        } finally {
          if (an) {
            throw al;
          }
        }
      }
    };
  }
  function d(af, ag) {
    if (af) {
      if ("string" == typeof af) {
        return f(af, ag);
      }
      var ai = {}.toString.call(af).slice(8, -1);
      "Object" === ai && af.constructor && (ai = af.constructor.name);
      return "Map" === ai || "Set" === ai ? Array.from(af) : "Arguments" === ai || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(ai) ? f(af, ag) : void 0;
    }
  }
  function f(af, ag) {
    (null == ag || ag > af.length) && (ag = af.length);
    for (var ai = 0, aj = Array(ag); ai < ag; ai++) {
      aj[ai] = af[ai];
    }
    return aj;
  }
  function g() {
    'use strict';

    g = function () {
      return ah;
    };
    var ag,
      ah = {},
      ai = Object.prototype,
      aj = ai.hasOwnProperty,
      ak = Object.defineProperty || function (aM, aN, aO) {
        aM[aN] = aO.value;
      },
      al = "function" == typeof Symbol ? Symbol : {},
      am = al.iterator || "@@iterator",
      an = al.asyncIterator || "@@asyncIterator",
      ao = al.toStringTag || "@@toStringTag";
    function ap(aM, aN, aO) {
      var aP = {
        value: aO,
        enumerable: !0,
        configurable: !0,
        writable: !0
      };
      Object.defineProperty(aM, aN, aP);
      return aM[aN];
    }
    try {
      ap({}, "");
    } catch (aN) {
      ap = function (aP, aQ, aR) {
        return aP[aQ] = aR;
      };
    }
    function aq(aP, aQ, aR, aS) {
      var aT = aQ && aQ.prototype instanceof ax ? aQ : ax,
        aU = Object.create(aT.prototype),
        aV = new aK(aS || []);
      ak(aU, "_invoke", {
        value: aG(aP, aR, aV)
      });
      return aU;
    }
    function ar(aP, aQ, aR) {
      try {
        return {
          type: "normal",
          arg: aP.call(aQ, aR)
        };
      } catch (aU) {
        var aS = {
          type: "throw",
          arg: aU
        };
        return aS;
      }
    }
    ah.wrap = aq;
    var as = "suspendedStart",
      at = "suspendedYield",
      au = "executing",
      av = "completed",
      aw = {};
    function ax() {}
    function ay() {}
    function az() {}
    var aA = {};
    ap(aA, am, function () {
      return this;
    });
    var aB = Object.getPrototypeOf,
      aC = aB && aB(aB(aL([])));
    aC && aC !== ai && aj.call(aC, am) && (aA = aC);
    az.prototype = ax.prototype = Object.create(aA);
    var aD = az.prototype;
    function aE(aP) {
      ["next", "throw", "return"].forEach(function (aS) {
        ap(aP, aS, function (aU) {
          return this._invoke(aS, aU);
        });
      });
    }
    function aF(aP, aQ) {
      function aT(aU, aV, aW, aX) {
        var aZ = ar(aP[aU], aP, aV);
        if ("throw" !== aZ.type) {
          var b0 = aZ.arg,
            b1 = b0.value;
          return b1 && "object" == b(b1) && aj.call(b1, "__await") ? aQ.resolve(b1.__await).then(function (b2) {
            aT("next", b2, aW, aX);
          }, function (b2) {
            aT("throw", b2, aW, aX);
          }) : aQ.resolve(b1).then(function (b2) {
            b0.value = b2;
            aW(b0);
          }, function (b2) {
            return aT("throw", b2, aW, aX);
          });
        }
        aX(aZ.arg);
      }
      var aS;
      ak(this, "_invoke", {
        value: function (aU, aV) {
          function aX() {
            return new aQ(function (aZ, b0) {
              aT(aU, aV, aZ, b0);
            });
          }
          return aS = aS ? aS.then(aX, aX) : aX();
        }
      });
    }
    function aG(aP, aQ, aR) {
      var aT = as;
      return function (aV, aW) {
        if (aT === au) {
          throw Error("Generator is already running");
        }
        if (aT === av) {
          if ("throw" === aV) {
            throw aW;
          }
          var aY = {
            value: ag,
            done: !0
          };
          return aY;
        }
        for (aR.method = aV, aR.arg = aW;;) {
          var aZ = aR.delegate;
          if (aZ) {
            var b0 = aH(aZ, aR);
            if (b0) {
              if (b0 === aw) {
                continue;
              }
              return b0;
            }
          }
          if ("next" === aR.method) {
            aR.sent = aR._sent = aR.arg;
          } else {
            if ("throw" === aR.method) {
              if (aT === as) {
                throw aT = av, aR.arg;
              }
              aR.dispatchException(aR.arg);
            } else {
              "return" === aR.method && aR.abrupt("return", aR.arg);
            }
          }
          aT = au;
          var b1 = ar(aP, aQ, aR);
          if ("normal" === b1.type) {
            if (aT = aR.done ? av : at, b1.arg === aw) {
              continue;
            }
            var b2 = {};
            b2.value = b1.arg;
            b2.done = aR.done;
            return b2;
          }
          "throw" === b1.type && (aT = av, aR.method = "throw", aR.arg = b1.arg);
        }
      };
    }
    function aH(aP, aQ) {
      var aV = aQ.method,
        aW = aP.iterator[aV];
      if (aW === ag) {
        aQ.delegate = null;
        "throw" === aV && aP.iterator.return && (aQ.method = "return", aQ.arg = ag, aH(aP, aQ), "throw" === aQ.method) || "return" !== aV && (aQ.method = "throw", aQ.arg = new TypeError("The iterator does not provide a '" + aV + "' method"));
        return aw;
      }
      var aU = ar(aW, aP.iterator, aQ.arg);
      if ("throw" === aU.type) {
        aQ.method = "throw";
        aQ.arg = aU.arg;
        aQ.delegate = null;
        return aw;
      }
      var aT = aU.arg;
      return aT ? aT.done ? (aQ[aP.resultName] = aT.value, aQ.next = aP.nextLoc, "return" !== aQ.method && (aQ.method = "next", aQ.arg = ag), aQ.delegate = null, aw) : aT : (aQ.method = "throw", aQ.arg = new TypeError("iterator result is not an object"), aQ.delegate = null, aw);
    }
    function aI(aP) {
      var aR = {
        tryLoc: aP[0]
      };
      var aS = aR;
      1 in aP && (aS.catchLoc = aP[1]);
      2 in aP && (aS.finallyLoc = aP[2], aS.afterLoc = aP[3]);
      this.tryEntries.push(aS);
    }
    function aJ(aP) {
      var aR = aP.completion || {};
      aR.type = "normal";
      delete aR.arg;
      aP.completion = aR;
    }
    function aK(aP) {
      var aQ = {
        tryLoc: "root"
      };
      this.tryEntries = [aQ];
      aP.forEach(aI, this);
      this.reset(!0);
    }
    function aL(aP) {
      if (aP || "" === aP) {
        var aR = aP[am];
        if (aR) {
          return aR.call(aP);
        }
        if ("function" == typeof aP.next) {
          return aP;
        }
        if (!isNaN(aP.length)) {
          var aS = -1,
            aT = function aV() {
              for (; ++aS < aP.length;) {
                if (aj.call(aP, aS)) {
                  aV.value = aP[aS];
                  aV.done = !1;
                  return aV;
                }
              }
              aV.value = ag;
              aV.done = !0;
              return aV;
            };
          return aT.next = aT;
        }
      }
      throw new TypeError(b(aP) + " is not iterable");
    }
    ay.prototype = az;
    ak(aD, "constructor", {
      value: az,
      configurable: !0
    });
    ak(az, "constructor", {
      value: ay,
      configurable: !0
    });
    ay.displayName = ap(az, ao, "GeneratorFunction");
    ah.isGeneratorFunction = function (aP) {
      var aQ = "function" == typeof aP && aP.constructor;
      return !!aQ && (aQ === ay || "GeneratorFunction" === (aQ.displayName || aQ.name));
    };
    ah.mark = function (aP) {
      Object.setPrototypeOf ? Object.setPrototypeOf(aP, az) : (aP.__proto__ = az, ap(aP, ao, "GeneratorFunction"));
      aP.prototype = Object.create(aD);
      return aP;
    };
    ah.awrap = function (aP) {
      var aQ = {
        __await: aP
      };
      return aQ;
    };
    aE(aF.prototype);
    ap(aF.prototype, an, function () {
      return this;
    });
    ah.AsyncIterator = aF;
    ah.async = function (aP, aQ, aR, aS, aT) {
      void 0 === aT && (aT = Promise);
      var aV = new aF(aq(aP, aQ, aR, aS), aT);
      return ah.isGeneratorFunction(aQ) ? aV : aV.next().then(function (aW) {
        return aW.done ? aW.value : aV.next();
      });
    };
    aE(aD);
    ap(aD, ao, "Generator");
    ap(aD, am, function () {
      return this;
    });
    ap(aD, "toString", function () {
      return "[object Generator]";
    });
    ah.keys = function (aP) {
      var aR = Object(aP),
        aS = [];
      for (var aT in aR) aS.push(aT);
      aS.reverse();
      return function aU() {
        for (; aS.length;) {
          var aV = aS.pop();
          if (aV in aR) {
            aU.value = aV;
            aU.done = !1;
            return aU;
          }
        }
        aU.done = !0;
        return aU;
      };
    };
    ah.values = aL;
    aK.prototype = {
      constructor: aK,
      reset: function (aP) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = ag, this.done = !1, this.delegate = null, this.method = "next", this.arg = ag, this.tryEntries.forEach(aJ), !aP) {
          for (var aR in this) "t" === aR.charAt(0) && aj.call(this, aR) && !isNaN(+aR.slice(1)) && (this[aR] = ag);
        }
      },
      stop: function () {
        this.done = !0;
        var aP = this.tryEntries[0].completion;
        if ("throw" === aP.type) {
          throw aP.arg;
        }
        return this.rval;
      },
      dispatchException: function (aP) {
        if (this.done) {
          throw aP;
        }
        var aR = this;
        function aY(aZ, b0) {
          aU.type = "throw";
          aU.arg = aP;
          aR.next = aZ;
          b0 && (aR.method = "next", aR.arg = ag);
          return !!b0;
        }
        for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
          var aT = this.tryEntries[aS],
            aU = aT.completion;
          if ("root" === aT.tryLoc) {
            return aY("end");
          }
          if (aT.tryLoc <= this.prev) {
            var aV = aj.call(aT, "catchLoc"),
              aW = aj.call(aT, "finallyLoc");
            if (aV && aW) {
              if (this.prev < aT.catchLoc) {
                return aY(aT.catchLoc, !0);
              }
              if (this.prev < aT.finallyLoc) {
                return aY(aT.finallyLoc);
              }
            } else {
              if (aV) {
                if (this.prev < aT.catchLoc) {
                  return aY(aT.catchLoc, !0);
                }
              } else {
                if (!aW) {
                  throw Error("try statement without catch or finally");
                }
                if (this.prev < aT.finallyLoc) {
                  return aY(aT.finallyLoc);
                }
              }
            }
          }
        }
      },
      abrupt: function (aP, aQ) {
        for (var aS = this.tryEntries.length - 1; aS >= 0; --aS) {
          var aT = this.tryEntries[aS];
          if (aT.tryLoc <= this.prev && aj.call(aT, "finallyLoc") && this.prev < aT.finallyLoc) {
            var aU = aT;
            break;
          }
        }
        aU && ("break" === aP || "continue" === aP) && aU.tryLoc <= aQ && aQ <= aU.finallyLoc && (aU = null);
        var aV = aU ? aU.completion : {};
        aV.type = aP;
        aV.arg = aQ;
        return aU ? (this.method = "next", this.next = aU.finallyLoc, aw) : this.complete(aV);
      },
      complete: function (aP, aQ) {
        if ("throw" === aP.type) {
          throw aP.arg;
        }
        "break" === aP.type || "continue" === aP.type ? this.next = aP.arg : "return" === aP.type ? (this.rval = this.arg = aP.arg, this.method = "return", this.next = "end") : "normal" === aP.type && aQ && (this.next = aQ);
        return aw;
      },
      finish: function (aP) {
        for (var aQ = this.tryEntries.length - 1; aQ >= 0; --aQ) {
          var aR = this.tryEntries[aQ];
          if (aR.finallyLoc === aP) {
            this.complete(aR.completion, aR.afterLoc);
            aJ(aR);
            return aw;
          }
        }
      },
      catch: function (aP) {
        for (var aR = this.tryEntries.length - 1; aR >= 0; --aR) {
          var aS = this.tryEntries[aR];
          if (aS.tryLoc === aP) {
            var aT = aS.completion;
            if ("throw" === aT.type) {
              var aU = aT.arg;
              aJ(aS);
            }
            return aU;
          }
        }
        throw Error("illegal catch attempt");
      },
      delegateYield: function (aP, aQ, aR) {
        this.delegate = {
          iterator: aL(aP),
          resultName: aQ,
          nextLoc: aR
        };
        "next" === this.method && (this.arg = ag);
        return aw;
      }
    };
    return ah;
  }
  function h(af, ag, ah, ai, aj, ak, al) {
    try {
      var an = af[ak](al),
        ao = an.value;
    } catch (ar) {
      return void ah(ar);
    }
    an.done ? ag(ao) : Promise.resolve(ao).then(ai, aj);
  }
  function i(af) {
    return function () {
      var ai = this,
        aj = arguments;
      return new Promise(function (ak, al) {
        var an = af.apply(ai, aj);
        function ao(aq) {
          h(an, ak, al, ao, ap, "next", aq);
        }
        function ap(aq) {
          h(an, ak, al, ao, ap, "throw", aq);
        }
        ao(void 0);
      });
    };
  }
  var j = ($.isNode() ? process.env.DuJia : $.getdata("DuJia")) || "",
    k = ($.isNode() ? process.env.OCR_SERVER : $.getdata("OCR_SERVER")) || "https://ddddocr.xzxxn7.live",
    l = void 0,
    m = "",
    n = "",
    o = "",
    p = "",
    q = "",
    r = "",
    s = "",
    t = "",
    u = "",
    v = "46",
    w = "10020",
    x = "FR*r!isE5W",
    y = "7200328065bd807fe056fbaadd92deed",
    z = "",
    A = "",
    B = "",
    D = "";
  function E() {
    return F.apply(this, arguments);
  }
  function F() {
    F = i(g().mark(function ag() {
      var ai, aj, ak, al, am, an, ao, ap, aq, ar, as, at, au, av, aw, ax, ay, az, aA, aB, aC, aD, aE, aF, aG, aH, aI, aJ, aK, aL, aM, aN, aO, aP, aQ, aR, aS, aT, aU, aV, aW, aX, aY, aZ, b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, ba, bb, bc, bd, bf, bg, bh, bi, bj, bk, bl, bm, bn, bo, bp, bq, br, bs, bt, bu;
      return g().wrap(function (bv) {
        for (;;) {
          switch (bv.prev = bv.next) {
            case 0:
              if (console.log("作者：@xzxxn777\n频道：https://t.me/xzxxn777\n群组：https://t.me/xzxxn7777\n自用机场推荐：https://xn--diqv0fut7b.com\n"), j) {
                bv.next = 6;
                break;
              }
              console.log("先去boxjs填写账号密码");
              bv.next = 5;
              return ad("先去boxjs填写账号密码");
            case 5:
              return bv.abrupt("return");
            case 6:
              bv.next = 8;
              return ab();
            case 8:
              l = bv.sent;
              ai = j.split(" ");
              aj = c(ai);
              bv.prev = 11;
              aj.s();
            case 13:
              if ((ak = aj.n()).done) {
                bv.next = 297;
                break;
              }
              al = ak.value;
              console.log("随机生成UA");
              am = a7();
              t = am.ua;
              u = am.commonUa;
              console.log(t);
              console.log(u);
              q = al.split("&")[0];
              r = al.split("&")[1];
              s = al.split("&")[2];
              console.log("用户：".concat(q, "开始任务"));
              console.log("获取sessionId");
              bv.next = 28;
              return M("/api/account/init");
            case 28:
              an = bv.sent;
              o = an.data.session.id;
              console.log(o);
              console.log("获取signature_key");
              bv.next = 34;
              return G("/web/init?client_id=".concat(w));
            case 34:
              ao = bv.sent;
              m = ao.data.client.signature_key;
              console.log(m);
              console.log("获取code");
              bv.next = 40;
              return I("/web/oauth/credential_auth");
            case 40:
              if (ap = bv.sent, ap.data) {
                bv.next = 44;
                break;
              }
              console.log(ap.message);
              return bv.abrupt("continue", 295);
            case 44:
              aq = ap.data.authorization_code.code;
              console.log(aq);
              console.log("登录");
              bv.next = 49;
              return M("/api/zbtxz/login", "check_token=&code=".concat(aq, "&token=&type=-1&union_id="));
            case 49:
              if (ar = bv.sent, console.log("登录成功"), p = ar.data.session.account_id, o = ar.data.session.id, console.log("————————————"), console.log("阅读抽奖"), console.log("获取id"), z) {
                bv.next = 69;
                break;
              }
              bv.next = 59;
              return K("/api/buoy/list");
            case 59:
              as = bv.sent;
              at = decodeURIComponent(as.data.new_down.icon_list[2].turn_to.url);
              bv.next = 63;
              return O(at);
            case 63:
              for (at = bv.sent, au = at.split("?")[1], av = {}, aw = au.split("&"), ax = 0, ay = aw.length; ax < ay; ax++) {
                az = aw[ax].split("=");
                av[az[0]] = az[1];
              }
              z = av.id;
            case 69:
              if (z) {
                bv.next = 72;
                break;
              }
              console.log("获取id失败");
              return bv.abrupt("continue", 295);
            case 72:
              console.log(z);
              console.log("获取apiDt");
              bv.next = 76;
              return Q("/aosbase/_auth_dt");
            case 76:
              aA = bv.sent;
              A = aA.data.substring(32, 68);
              console.log(A);
              B = "0";
              aB = {
                app_user_token: o,
                appid: "jiaxing",
                noncestr: aa(6, !1),
                phone: q,
                portrait_url: ar.data.account.image_url,
                timestamp: Math.round(new Date().getTime() / 1000).toString(),
                user_id: ar.data.account.id,
                user_name: ar.data.account.nick_name,
                wx_openid: "",
                wx_unionid: ""
              };
              aB.signature = l.md5(a8(aB) + "&appkey=".concat(y));
              bv.next = 84;
              return X("/aosbase/_auth_appuserinit", aB);
            case 84:
              aC = bv.sent;
              D = aC.data.access_token;
              B = aC.data.data.user_id;
              console.log("阅读token：".concat(D));
              aD = "";
              aE = Date.now() + "" + Math.floor(10000000 * Math.random());
              bv.next = 92;
              return T("/aoslearnfoot/_optionp_list?activity_id=".concat(z));
            case 92:
              aF = bv.sent;
              aG = c(aF.data);
              bv.prev = 94;
              aG.s();
            case 96:
              if ((aH = aG.n()).done) {
                bv.next = 183;
                break;
              }
              aI = aH.value;
              aJ = aI.id;
              console.log(aI.title);
              bv.next = 102;
              return T("/aoslearnfoot/optionp_detail?id=".concat(aI.id));
            case 102:
              if (aK = bv.sent, aK.data.task_num != aK.data.user_done_num) {
                bv.next = 106;
                break;
              }
              console.log("已完成");
              return bv.abrupt("continue", 181);
            case 106:
              if (aD) {
                bv.next = 147;
                break;
              }
              console.log("获取滑块token");
              aL = 0;
            case 109:
              if (!(aL < 3)) {
                bv.next = 147;
                break;
              }
              aM = aa(10, !1);
              aN = Math.round(new Date().getTime() / 1000).toString();
              aO = "https://jiaxing.y-h5.iyunxh.com/module-study/pass-detail/pass-detail?pass_id=".concat(aJ);
              aP = a5({
                once: aM,
                referer: aO,
                timestamp: aN,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bv.next = 116;
              return T("/basemodule/_captcha_get?once=".concat(aM, "&referer=").concat(aO, "&timestamp=").concat(aN, "&type=1&signature=").concat(encodeURIComponent(aP)));
            case 116:
              aQ = bv.sent;
              console.log("滑块：".concat(aQ.data.block));
              console.log("背景：".concat(aQ.data.background));
              bv.next = 121;
              return Z({
                slidingImage: aQ.data.block,
                backImage: aQ.data.background
              });
            case 121:
              if (aR = bv.sent, aR) {
                bv.next = 127;
                break;
              }
              console.log("ddddocr服务异常");
              bv.next = 126;
              return ad("ddddocr服务异常");
            case 126:
              return bv.abrupt("continue", 144);
            case 127:
              console.log(aR);
              aS = aR.result;
              aT = a5({
                x: aS,
                width: 384,
                track: [{
                  x: Math.floor(aS / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aS / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aS / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(aS / 4),
                  y: 0,
                  time: 100
                }, {
                  x: aS / 2,
                  y: 0,
                  time: 100
                }, {
                  x: aS,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bv.next = 133;
              return X("/basemodule/_captcha_check", {
                token: aQ.data.token,
                data: aT,
                referer: aO,
                type: aQ.data.type
              });
            case 133:
              if (aU = bv.sent, !aU.data.result) {
                bv.next = 143;
                break;
              }
              bv.next = 137;
              return X("/aosbasemodule/intelverifcode_check", {
                validate: aU.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 137:
              aV = bv.sent;
              aD = aV.data.tokenid;
              console.log("滑块token：".concat(aD));
              return bv.abrupt("break", 147);
            case 143:
              console.log("验证失败");
            case 144:
              aL++;
              bv.next = 109;
              break;
            case 147:
              if (aD) {
                bv.next = 149;
                break;
              }
              return bv.abrupt("break", 183);
            case 149:
              bv.next = 151;
              return T("/aosbasemodule/_task_list?offset=0&count=".concat(aI.task_num, "&module_id=").concat(aI.m_id, "&activity_id=").concat(aI.id));
            case 151:
              aW = bv.sent;
              aX = c(aW.data);
              bv.prev = 153;
              aX.s();
            case 155:
              if ((aY = aX.n()).done) {
                bv.next = 173;
                break;
              }
              if (aZ = aY.value, console.log("文章：".concat(aZ.title)), 1 != aZ.user_done) {
                bv.next = 161;
                break;
              }
              console.log("已完成");
              return bv.abrupt("continue", 171);
            case 161:
              var bx = {};
              bx.task_id = aZ.id;
              bv.next = 163;
              return X("/aosbasemodule/task_create", bx);
            case 163:
              b0 = bv.sent;
              bv.next = 166;
              return K("/api/article/detail?id=".concat(JSON.parse(aZ.rule).news_id));
            case 166:
              var by = {};
              by.task_record_id = b0.data.task_record_id;
              by.collect_info = "";
              by.afs_tokenid = aD;
              by.device_token = aE;
              bv.sent;
              bv.next = 169;
              return X("/aosbasemodule/task_done", by);
            case 169:
              b1 = bv.sent;
              console.log("阅读：".concat(b1.msg));
            case 171:
              bv.next = 155;
              break;
            case 173:
              bv.next = 178;
              break;
            case 175:
              bv.prev = 175;
              bv.t0 = bv.catch(153);
              aX.e(bv.t0);
            case 178:
              bv.prev = 178;
              aX.f();
              return bv.finish(178);
            case 181:
              bv.next = 96;
              break;
            case 183:
              bv.next = 188;
              break;
            case 185:
              bv.prev = 185;
              bv.t1 = bv.catch(94);
              aG.e(bv.t1);
            case 188:
              bv.prev = 188;
              aG.f();
              return bv.finish(188);
            case 191:
              bv.next = 193;
              return T("/aoslearnfoot/_ac_detail?id=".concat(z));
            case 193:
              b2 = bv.sent;
              b3 = JSON.parse(b2.data.other_set).lottery.id;
              bv.next = 197;
              return T("/aoslottery/ac_lottery_times?id=".concat(b3));
            case 197:
              if (b4 = bv.sent, console.log("拥有".concat(b4.data.all_remain, "次抽奖")), !(b4.data.all_remain > 0)) {
                bv.next = 261;
                break;
              }
              console.log("获取抽奖滑块token");
              b5 = "";
              b6 = 0;
            case 203:
              if (!(b6 < 3)) {
                bv.next = 241;
                break;
              }
              b7 = aa(10, !1);
              b8 = Math.round(new Date().getTime() / 1000).toString();
              b9 = "https://jiaxing.y-h5.iyunxh.com/module-study/home/home?hide_back=1";
              ba = a5({
                once: b7,
                referer: b9,
                timestamp: b8,
                type: "1"
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              bv.next = 210;
              return T("/basemodule/_captcha_get?once=".concat(b7, "&referer=").concat(b9, "&timestamp=").concat(b8, "&type=1&signature=").concat(encodeURIComponent(ba)));
            case 210:
              bb = bv.sent;
              console.log("滑块：".concat(bb.data.block));
              console.log("背景：".concat(bb.data.background));
              bv.next = 215;
              return Z({
                slidingImage: bb.data.block,
                backImage: bb.data.background
              });
            case 215:
              if (bc = bv.sent, bc) {
                bv.next = 221;
                break;
              }
              console.log("ddddocr服务异常");
              bv.next = 220;
              return ad("ddddocr服务异常");
            case 220:
              return bv.abrupt("continue", 238);
            case 221:
              console.log(bc);
              bd = bc.result;
              bf = a5({
                x: bd,
                width: 384,
                track: [{
                  x: Math.floor(bd / 10),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bd / 8),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bd / 6),
                  y: 0,
                  time: 100
                }, {
                  x: Math.floor(bd / 4),
                  y: 0,
                  time: 100
                }, {
                  x: bd / 2,
                  y: 0,
                  time: 100
                }, {
                  x: bd,
                  y: 0,
                  time: 100
                }]
              }, "7Pf0cfZPHy1L7PS2PfCfP8r2BGi461LG", "8RsVKSCH8mQ4l7cu");
              console.log("验证滑块");
              bv.next = 227;
              return X("/basemodule/_captcha_check", {
                token: bb.data.token,
                data: bf,
                referer: b9,
                type: bb.data.type
              });
            case 227:
              if (bg = bv.sent, !bg.data.result) {
                bv.next = 237;
                break;
              }
              bv.next = 231;
              return X("/aosbasemodule/intelverifcode_check", {
                validate: bg.data.token,
                verif_type: 3,
                afs_uuid: "",
                source: "yundian"
              });
            case 231:
              bh = bv.sent;
              b5 = bh.data.tokenid;
              console.log("抽奖滑块token：".concat(b5));
              return bv.abrupt("break", 241);
            case 237:
              console.log("验证失败");
            case 238:
              b6++;
              bv.next = 203;
              break;
            case 241:
              if (b5) {
                bv.next = 243;
                break;
              }
              return bv.abrupt("continue", 295);
            case 243:
              bv.next = 245;
              return T("/aoslottery/_ac_detail?id=".concat(b3));
            case 245:
              bi = bv.sent;
              bj = 0;
            case 247:
              if (!(bj < b4.data.all_remain)) {
                bv.next = 261;
                break;
              }
              bv.next = 250;
              return X("/aosstat/_event_sub", {
                _need_stat: 0,
                _need_task: 0,
                _need_behavior: 1,
                event: "lotteryTake",
                action: "take",
                brief: "抽奖提交",
                client_type: 1,
                module_id: bi.data.m_id,
                content_id: bi.data.id,
                num: 1,
                duration: 0,
                column_id: 0,
                column_title: "",
                title: bi.data.title,
                device_token: aE,
                user_id: aC.data.data.user_id,
                user_name: aC.data.data.user_name,
                phone_num: q,
                page_path: "module-study/home/home",
                version: "1.0.0",
                network: "wifi",
                client_model: "android",
                system_version: "Android 11",
                resolution: "",
                baidu_longitude: "",
                baidu_latitude: "",
                longitude: 0,
                latitude: 0,
                province: "",
                city: "",
                area: "",
                street: "",
                address: ""
              });
            case 250:
              if (bk = bv.sent, console.log("抽奖提交：".concat(bk.msg)), 0 == bk.code) {
                bv.next = 254;
                break;
              }
              return bv.abrupt("continue", 258);
            case 254:
              var bz = {};
              bz.id = b3;
              bz.verif_uuid = "";
              bz.verif_code = "";
              bz.afs_tokenid = b5;
              bz.collect_info = "";
              bz.longitude = 0;
              bz.latitude = 0;
              bz.device_token = aE;
              bv.next = 256;
              return X("/aoslottery/ac_sub", bz);
            case 256:
              bl = bv.sent;
              0 == bl.code ? (console.log("抽奖获得：".concat(null == bl || null === (bm = bl.data) || void 0 === bm ? void 0 : bm.title)), 3 == (null == bl || null === (bn = bl.data) || void 0 === bn ? void 0 : bn.type) && console.log("抽奖获得：".concat(null == bl || null === (bo = bl.data) || void 0 === bo ? void 0 : bo.title))) : "o d w" == bl.msg ? console.log("谢谢参与") : console.log(bl.msg);
            case 258:
              bj++;
              bv.next = 247;
              break;
            case 261:
              bv.next = 263;
              return T("/aoslottery/_ac_detail?id=".concat(b3));
            case 263:
              bp = bv.sent;
              bv.next = 266;
              return T("/aoslottery/act_user?offset=0&count=20&activity_id=".concat(b3, "&module_id=").concat(bp.data.m_id));
            case 266:
              if (bq = bv.sent, !bq.data) {
                bv.next = 295;
                break;
              }
              br = c(bq.data);
              bv.prev = 269;
              br.s();
            case 271:
              if ((bs = br.n()).done) {
                bv.next = 287;
                break;
              }
              if (bt = bs.value, 3 != bt.type || 0 != bt.state) {
                bv.next = 285;
                break;
              }
              if (console.log("奖品：".concat(bt.title)), !s) {
                bv.next = 283;
                break;
              }
              console.log("领取奖品");
              bv.next = 279;
              return V("/aosbasemodule/cash_send?module_id=".concat(bt.module_id, "&activity_id=").concat(bt.id, "&cash_code=").concat(bt.code, "&cash_sign=").concat(bt.cash_data.cash_sign));
            case 279:
              bu = bv.sent;
              0 == bu.code ? (console.log("领取成功"), n += "用户：".concat(q, " 抽奖获得：").concat(bt.title, " 领取结果：领取成功\n")) : (console.log(bu.msg), n += "用户：".concat(q, " 抽奖获得：").concat(bt.title, " 领取结果：").concat(bu.msg, "\n"));
              bv.next = 285;
              break;
            case 283:
              console.log("请配置wxToken");
              n += "用户：".concat(q, " 请配置wxToken\n");
            case 285:
              bv.next = 271;
              break;
            case 287:
              bv.next = 292;
              break;
            case 289:
              bv.prev = 289;
              bv.t2 = bv.catch(269);
              br.e(bv.t2);
            case 292:
              bv.prev = 292;
              br.f();
              return bv.finish(292);
            case 295:
              bv.next = 13;
              break;
            case 297:
              bv.next = 302;
              break;
            case 299:
              bv.prev = 299;
              bv.t3 = bv.catch(11);
              aj.e(bv.t3);
            case 302:
              bv.prev = 302;
              aj.f();
              return bv.finish(302);
            case 305:
              if (!n) {
                bv.next = 308;
                break;
              }
              bv.next = 308;
              return ad(n);
            case 308:
            case "end":
              return bv.stop();
          }
        }
      }, ag, null, [[11, 299, 302, 305], [94, 185, 188, 191], [153, 175, 178, 181], [269, 289, 292, 295]]);
    }));
    return F.apply(this, arguments);
  }
  function G(af) {
    return H.apply(this, arguments);
  }
  function H() {
    H = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  url: "https://passport.tmuyun.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "Cache-Control": "no-cache",
                    "X-REQUEST-ID": a4(),
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  }
                };
                $.get(am, function () {
                  var ap = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            try {
                              as ? (console.log("".concat(JSON.stringify(as))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(au));
                            } catch (az) {
                              $.logErr(az, at);
                            } finally {
                              ak();
                            }
                          case 1:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ar);
                  }));
                  return function (as, at, au) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return H.apply(this, arguments);
  }
  function I(af) {
    return J.apply(this, arguments);
  }
  function J() {
    J = i(g().mark(function ah(ai) {
      var ak;
      return g().wrap(function (al) {
        for (;;) {
          switch (al.prev = al.next) {
            case 0:
              ak = a1();
              return al.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://passport.tmuyun.com".concat(ai),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-REQUEST-ID": ak.uuid,
                    "X-SIGNATURE": ak.signature,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
                    "Accept-Encoding": "gzip",
                    "user-agent": t
                  },
                  body: ak.body
                };
                $.post(ao, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            try {
                              ar ? (console.log("".concat(JSON.stringify(ar))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : am(JSON.parse(at));
                            } catch (aw) {
                              $.logErr(aw, as);
                            } finally {
                              am();
                            }
                          case 1:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, aq);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return al.stop();
          }
        }
      }, ah);
    }));
    return J.apply(this, arguments);
  }
  function K(af) {
    return L.apply(this, arguments);
  }
  function L() {
    L = i(g().mark(function ag(ah) {
      var ai;
      return g().wrap(function (aj) {
        for (;;) {
          switch (aj.prev = aj.next) {
            case 0:
              ai = a2(ah);
              return aj.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://vapp.jiaxingren.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": ai.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": ai.uuid,
                    "X-SIGNATURE": ai.signature,
                    "X-TENANT-ID": v,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  }
                };
                $.get(ao, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !as) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(au));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, at);
                          case 14:
                            av.prev = 14;
                            am();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ar, null, [[0, 11, 14, 17]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return aj.stop();
          }
        }
      }, ag);
    }));
    return L.apply(this, arguments);
  }
  function M(af, ag) {
    return N.apply(this, arguments);
  }
  function N() {
    N = i(g().mark(function ag(ah, ai) {
      var al;
      return g().wrap(function (am) {
        for (;;) {
          switch (am.prev = am.next) {
            case 0:
              al = a2(ah);
              return am.abrupt("return", new Promise(function (an) {
                var ap = {
                  url: "https://vapp.jiaxingren.com".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "X-TIMESTAMP": al.time,
                    "X-SESSION-ID": o,
                    "X-REQUEST-ID": al.uuid,
                    "X-SIGNATURE": al.signature,
                    "X-TENANT-ID": v,
                    "X-ACCOUNT-ID": p,
                    "Cache-Control": "no-cache",
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Encoding": "gzip",
                    "user-agent": u
                  },
                  body: ai
                };
                $.post(ap, function () {
                  var ar = i(g().mark(function as(at, au, av) {
                    return g().wrap(function (aw) {
                      for (;;) {
                        switch (aw.prev = aw.next) {
                          case 0:
                            if (aw.prev = 0, !at) {
                              aw.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(at)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            aw.next = 9;
                            break;
                          case 6:
                            aw.next = 8;
                            return $.wait(2000);
                          case 8:
                            an(JSON.parse(av));
                          case 9:
                            aw.next = 14;
                            break;
                          case 11:
                            aw.prev = 11;
                            aw.t0 = aw.catch(0);
                            $.logErr(aw.t0, au);
                          case 14:
                            aw.prev = 14;
                            an();
                            return aw.finish(14);
                          case 17:
                          case "end":
                            return aw.stop();
                        }
                      }
                    }, as, null, [[0, 11, 14, 17]]);
                  }));
                  return function (at, au, av) {
                    return ar.apply(this, arguments);
                  };
                }());
              }));
            case 2:
            case "end":
              return am.stop();
          }
        }
      }, ag);
    }));
    return N.apply(this, arguments);
  }
  function O(af) {
    return P.apply(this, arguments);
  }
  function P() {
    P = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var al = {
                  Connection: "Keep-Alive",
                  "Upgrade-Insecure-Requests": "1",
                  "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                  Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
                  "X-Requested-With": "com.hoge.android.app.hdd",
                  "Sec-Fetch-Site": "none",
                  "Sec-Fetch-Mode": "navigate",
                  "Sec-Fetch-User": "?1",
                  "Sec-Fetch-Dest": "document",
                  Referer: "https://jiaxing.y-h5.iyunxh.com/",
                  "Accept-Encoding": "gzip, deflate",
                  "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                };
                var am = {
                  url: "".concat(ag),
                  headers: al,
                  followRedirect: !1
                };
                $.get(am, function () {
                  var ao = i(g().mark(function ap(aq, ar, as) {
                    var at;
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !aq) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(aq)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 10;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            at = ar.headers.location || ar.headers.Location;
                            ak(at);
                          case 10:
                            au.next = 15;
                            break;
                          case 12:
                            au.prev = 12;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, ar);
                          case 15:
                            au.prev = 15;
                            ak();
                            return au.finish(15);
                          case 18:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, ap, null, [[0, 12, 15, 18]]);
                  }));
                  return function (aq, ar, as) {
                    return ao.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return P.apply(this, arguments);
  }
  function Q(af) {
    return R.apply(this, arguments);
  }
  function R() {
    R = i(g().mark(function ag(ah) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var an = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-T-Id-In": "41",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": Date.now(),
                    "Access-T-Id": "41",
                    Accept: "*/*",
                    Origin: "https://jiaxing.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.hdd",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaxing.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !ar) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            am();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return R.apply(this, arguments);
  }
  function T(af) {
    return U.apply(this, arguments);
  }
  function U() {
    U = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var al = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ah),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": a3(),
                    "Access-T-Id-In": "41",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Access-Api-Dt": A,
                    "Access-T-Id": "41",
                    Accept: "*/*",
                    Origin: "https://jiaxing.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.hdd",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaxing.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  }
                };
                $.get(al, function () {
                  var an = i(g().mark(function ao(ap, aq, ar) {
                    return g().wrap(function (at) {
                      for (;;) {
                        switch (at.prev = at.next) {
                          case 0:
                            if (at.prev = 0, !ap) {
                              at.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ap)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            at.next = 9;
                            break;
                          case 6:
                            at.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(ar));
                          case 9:
                            at.next = 14;
                            break;
                          case 11:
                            at.prev = 11;
                            at.t0 = at.catch(0);
                            $.logErr(at.t0, aq);
                          case 14:
                            at.prev = 14;
                            ak();
                            return at.finish(14);
                          case 17:
                          case "end":
                            return at.stop();
                        }
                      }
                    }, ao, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ap, aq, ar) {
                    return an.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return U.apply(this, arguments);
  }
  function V(af) {
    return W.apply(this, arguments);
  }
  function W() {
    W = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var am = {
                  Connection: "Keep-Alive",
                  "Access-T-Id-In": "1",
                  "Access-Wxclient-Type": "wx_minipro",
                  "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                  "Access-Token": s,
                  "Access-Api-Unique-Token": "1",
                  "Access-T-Id": "1",
                  Accept: "*/*",
                  Referer: "https://servicewechat.com/wx57d3a2086852ddcd/14/page-frame.html",
                  "Accept-Encoding": "gzip,compress,br,deflate"
                };
                var an = {
                  url: "https://ya.iyunxh.com/api".concat(ag),
                  headers: am
                };
                $.get(an, function () {
                  var ap = i(g().mark(function aq(ar, as, at) {
                    return g().wrap(function (au) {
                      for (;;) {
                        switch (au.prev = au.next) {
                          case 0:
                            if (au.prev = 0, !ar) {
                              au.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(ar)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            au.next = 9;
                            break;
                          case 6:
                            au.next = 8;
                            return $.wait(2000);
                          case 8:
                            ak(JSON.parse(at));
                          case 9:
                            au.next = 14;
                            break;
                          case 11:
                            au.prev = 11;
                            au.t0 = au.catch(0);
                            $.logErr(au.t0, as);
                          case 14:
                            au.prev = 14;
                            ak();
                            return au.finish(14);
                          case 17:
                          case "end":
                            return au.stop();
                        }
                      }
                    }, aq, null, [[0, 11, 14, 17]]);
                  }));
                  return function (ar, as, at) {
                    return ap.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return W.apply(this, arguments);
  }
  function X(af, ag) {
    return Y.apply(this, arguments);
  }
  function Y() {
    Y = i(g().mark(function ah(ai, aj) {
      return g().wrap(function (ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              return ak.abrupt("return", new Promise(function (am) {
                var ao = {
                  url: "https://yapi.y-h5.iyunxh.com/api".concat(ai),
                  headers: {
                    Connection: "Keep-Alive",
                    "Access-User-Id": B,
                    "Access-Api-Signature": a3(),
                    "Access-T-Id-In": "41",
                    "Access-Wxclient-Type": "wx_app",
                    "User-Agent": "Mozilla/5.0 (Linux; Android 11; 21091116AC Build/RP1A.200720.011; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/94.0.4606.85 Mobile Safari/537.36;xsb_dujia;xsb_dujia;8.1.1;native_app;6.12.0",
                    "Access-Token": D,
                    "Access-Api-Unique-Token": "1",
                    "Content-Type": "application/json",
                    "Access-Api-Dt": A,
                    "Access-T-Id": "41",
                    Accept: "*/*",
                    Origin: "https://jiaxing.y-h5.iyunxh.com",
                    "X-Requested-With": "com.hoge.android.app.hdd",
                    "Sec-Fetch-Site": "same-site",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Dest": "empty",
                    Referer: "https://jiaxing.y-h5.iyunxh.com/",
                    "Accept-Encoding": "gzip, deflate",
                    "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
                  },
                  body: JSON.stringify(aj)
                };
                $.post(ao, function () {
                  var aq = i(g().mark(function ar(as, at, au) {
                    return g().wrap(function (av) {
                      for (;;) {
                        switch (av.prev = av.next) {
                          case 0:
                            if (av.prev = 0, !as) {
                              av.next = 6;
                              break;
                            }
                            console.log("".concat(JSON.stringify(as)));
                            console.log("".concat($.name, " API请求失败，请检查网路重试"));
                            av.next = 9;
                            break;
                          case 6:
                            av.next = 8;
                            return $.wait(2000);
                          case 8:
                            am(JSON.parse(au));
                          case 9:
                            av.next = 14;
                            break;
                          case 11:
                            av.prev = 11;
                            av.t0 = av.catch(0);
                            $.logErr(av.t0, at);
                          case 14:
                            av.prev = 14;
                            am();
                            return av.finish(14);
                          case 17:
                          case "end":
                            return av.stop();
                        }
                      }
                    }, ar, null, [[0, 11, 14, 17]]);
                  }));
                  return function (as, at, au) {
                    return aq.apply(this, arguments);
                  };
                }());
              }));
            case 1:
            case "end":
              return ak.stop();
          }
        }
      }, ah);
    }));
    return Y.apply(this, arguments);
  }
  function Z(af) {
    return a0.apply(this, arguments);
  }
  function a0() {
    a0 = i(g().mark(function af(ag) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              return ai.abrupt("return", new Promise(function (ak) {
                var al = {
                  "Content-Type": "application/json"
                };
                var am = {
                  url: "".concat(k, "/capcode"),
                  headers: al,
                  body: JSON.stringify(ag)
                };
                $.post(am, function (an, ao, ap) {
                  try {
                    an ? (console.log("".concat(JSON.stringify(an))), console.log("".concat($.name, " API请求失败，请检查网路重试"))) : ak(JSON.parse(ap));
                  } catch (aq) {
                    $.logErr(aq, ao);
                  } finally {
                    ak();
                  }
                });
              }));
            case 1:
            case "end":
              return ai.stop();
          }
        }
      }, af);
    }));
    return a0.apply(this, arguments);
  }
  function a1() {
    var an = new (l.loadJSEncrypt())();
    an.setPublicKey("MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQD6XO7e9YeAOs+cFqwa7ETJ+WXizPqQeXv68i5vqw9pFREsrqiBTRcg7wB0RIp3rJkDpaeVJLsZqYm5TW7FWx/iOiXFc+zCPvaKZric2dXCw27EvlH5rq+zwIPDAJHGAfnn1nmQH7wR3PCatEIb8pz5GFlTHMlluw4ZYmnOwg+thwIDAQAB");
    r = an.encrypt(r);
    var ah = a4(),
      ai = "client_id=".concat(w, "&password=").concat(r, "&phone_number=").concat(q),
      aj = "post%%/web/oauth/credential_auth?".concat(ai, "%%").concat(ah, "%%");
    ai = "client_id=".concat(w, "&password=").concat(encodeURIComponent(r), "&phone_number=").concat(q);
    CryptoJS = l.createCryptoJS();
    var ak = CryptoJS.HmacSHA256(aj, m),
      al = CryptoJS.enc.Hex.stringify(ak);
    var am = {};
    am.uuid = ah;
    am.signature = al;
    am.body = ai;
    return am;
  }
  function a2(af) {
    var ag = a4(),
      ah = Date.now();
    af.indexOf("?") > 0 && (af = af.substring(0, af.indexOf("?")));
    CryptoJS = l.createCryptoJS();
    var ai = CryptoJS.SHA256("".concat(af, "&&").concat(o, "&&").concat(ag, "&&").concat(ah, "&&").concat(x, "&&").concat(v)).toString(),
      aj = {
        uuid: ag,
        time: ah,
        signature: ai
      };
    return aj;
  }
  function a3() {
    var af = Date.now(),
      ag = aa(32, !1),
      ah = "jiaxing".concat(ag).concat(af, "bdcd70c1c7c3544a34c1a1d45b1fdef0"),
      ai = l.md5(ah);
    return "jiaxing;".concat(ag, ";").concat(af, ";").concat(ai);
  }
  function a4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (af) {
      var ag = 16 * Math.random() | 0,
        ah = "x" === af ? ag : 3 & ag | 8;
      return ah.toString(16);
    });
  }
  function a5(af, ag, ah) {
    var ai = l.createCryptoJS(),
      aj = ai.enc.Utf8.parse(ag),
      ak = ai.enc.Utf8.parse(ah),
      al = ai.enc.Utf8.parse(JSON.stringify(af)),
      am = ai.AES.encrypt(al, aj, {
        iv: ak,
        mode: ai.mode.CBC,
        padding: ai.pad.Pkcs7
      });
    return ai.enc.Base64.stringify(am.ciphertext);
  }
  function a6(af) {
    return af[Math.floor(Math.random() * af.length)];
  }
  function a7() {
    var af = "8.1.1",
      ag = a4(),
      ah = a6(["M1903F2A", "M2001J2E", "M2001J2C", "M2001J1E", "M2001J1C", "M2002J9E", "M2011K2C", "M2102K1C", "M2101K9C", "2107119DC", "2201123C", "2112123AC", "2201122C", "2211133C", "2210132C", "2304FPN6DC", "23127PN0CC", "24031PN0DC", "23090RA98C", "2312DRA50C", "2312CRAD3C", "2312DRAABC", "22101316UCP", "22101316C"]),
      ai = "Xiaomi " + ah,
      aj = "Android",
      ak = "".concat(aj.toUpperCase(), ";").concat("11", ";").concat(w, ";").concat(af, ";1.0;null;").concat(ah),
      al = "".concat(af, ";").concat(ag, ";").concat(ai, ";").concat(aj, ";").concat("11", ";Release;").concat("6.12.0"),
      am = {
        ua: ak,
        commonUa: al
      };
    return am;
  }
  function a8() {
    var af = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
      ag = [];
    for (var ah in af) {
      var ai = af[ah];
      ag.push(ah + "=" + a9(ai));
    }
    return ag.length ? "" + ag.join("&") : "";
  }
  function a9(af) {
    af = (af + "").toString();
    return encodeURIComponent(af).replace(/!/g, "%21").replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/\*/g, "%2A").replace(/%20/g, "+").replace(/~/g, "%7E");
  }
  function aa() {
    var af = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32,
      ag = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
      ah = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
      ai = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""),
      aj = [];
    if (ah = ah || ai.length, af) {
      for (var ak = 0; ak < af; ak++) {
        aj[ak] = ai[0 | Math.random() * ah];
      }
    } else {
      var al;
      aj[8] = aj[13] = aj[18] = aj[23] = "-";
      aj[14] = "4";
      for (var am = 0; am < 36; am++) {
        aj[am] || (al = 0 | 16 * Math.random(), aj[am] = ai[19 == am ? 3 & al | 8 : al]);
      }
    }
    return ag ? (aj.shift(), "u" + aj.join("")) : aj.join("");
  }
  function ab() {
    return ac.apply(this, arguments);
  }
  function ac() {
    ac = i(g().mark(function ag() {
      var ai;
      return g().wrap(function aj(ak) {
        for (;;) {
          switch (ak.prev = ak.next) {
            case 0:
              if (ai = $.getdata("Utils_Code") || "", !ai || !Object.keys(ai).length) {
                ak.next = 5;
                break;
              }
              console.log("✅ ".concat($.name, ": 缓存中存在Utils代码, 跳过下载"));
              eval(ai);
              return ak.abrupt("return", creatUtils());
            case 5:
              console.log("🚀 ".concat($.name, ": 开始下载Utils代码"));
              return ak.abrupt("return", new Promise(function () {
                var am = i(g().mark(function an(ao) {
                  return g().wrap(function aq(ar) {
                    for (;;) {
                      switch (ar.prev = ar.next) {
                        case 0:
                          $.getScript("https://mirror.ghproxy.com/https://raw.githubusercontent.com/xzxxn777/Surge/main/Utils/Utils.js").then(function (as) {
                            $.setdata(as, "Utils_Code");
                            eval(as);
                            console.log("✅ Utils加载成功, 请继续");
                            ao(creatUtils());
                          });
                        case 1:
                        case "end":
                          return ar.stop();
                      }
                    }
                  }, an);
                }));
                return function (ao) {
                  return am.apply(this, arguments);
                };
              }()));
            case 7:
            case "end":
              return ak.stop();
          }
        }
      }, ag);
    }));
    return ac.apply(this, arguments);
  }
  function ad(af) {
    return ae.apply(this, arguments);
  }
  function ae() {
    ae = i(g().mark(function ag(ah) {
      return g().wrap(function (ai) {
        for (;;) {
          switch (ai.prev = ai.next) {
            case 0:
              if (!$.isNode()) {
                ai.next = 5;
                break;
              }
              ai.next = 3;
              return notify.sendNotify($.name, ah);
            case 3:
              ai.next = 6;
              break;
            case 5:
              $.msg($.name, "", ah);
            case 6:
            case "end":
              return ai.stop();
          }
        }
      }, ag);
    }));
    return ae.apply(this, arguments);
  }
  i(g().mark(function af() {
    return g().wrap(function (ag) {
      for (;;) {
        switch (ag.prev = ag.next) {
          case 0:
            ag.next = 2;
            return E();
          case 2:
          case "end":
            return ag.stop();
        }
      }
    }, af);
  }))().catch(function (ag) {
    $.log(ag);
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