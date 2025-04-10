//Thu Apr 10 2025 05:53:40 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const $ = new Env("酷我音乐"),
  version = "V1.0.0",
  appName = "kwyyapp";
let kwyyapp = $.getjson(appName, []);
const fs = $.isNode() ? require("fs") : "",
  WebSocket = $.isNode() ? require("ws") : "",
  file = "david_cookies.js";
$.isNode() && !fs.existsSync(file) && ($.log("🔔 外挂ck文件不存在，开始创建模版>>>"), fs.writeFileSync("./david_cookies.js", "//独立CK文件，主要用来处理多账号大数据量CK,注意JRTTAPP外边不用加引号，依葫芦画瓢。\n//今日头条(三个账号)\nlet JRTTAPP = [{},{},{}]\n//番茄小说(一个账号)\nlet FQXSAPP = [{}]\n//抖音极速版(两个账号)\nlet DYJSBAPP = [{},{}]\n    \nlet APPS = {\n    JRTT: JRTTAPP,\n    FQXS: FQXSAPP,\n    DYJSB: DYJSBAPP\n}\n\nmodule.exports = APPS", C => {}));
const http = $.isNode() ? require("http") : "",
  notify = $.isNode() ? require("./sendNotify") : "",
  COOKIES = $.isNode() ? require("./david_cookies") : "";
let userId = $.getdata("tguserid") || 1,
  activeCode = $.getdata("kwyyactivecode") || 0,
  kwyyuserck = $.getval("kwyyuserck") || 1,
  apiHost = $.getval("apiHost") || "http://106.15.104.124:8080";
$.getval("apiHosts") && (apiHost = $.getval("apiHosts"));
let flushCash = $.getval("cleanCache") || false;
const debug = 0;
let tz = $.getval("tz") || "1",
  helpUtils = undefined,
  CryptoJS = undefined,
  saveFile = false,
  kwyy_ck_file = "kwyy_cookies.json";
var hour = "",
  minute = "";
let sendlogs = "",
  kwyylogs = [],
  wss = [],
  channels_status = [],
  reconectCounts = [],
  requestObjects = [],
  requestSigns = [],
  loginUids = [],
  loginSids = [],
  loginStatus = [],
  httpResult = "",
  userAuth = "",
  scriptAuth = "",
  newest_version = "",
  runAuth = "",
  systemNotify = "",
  vipAuth = "",
  isCharge = "",
  multiAccount = 1,
  buyCount = 1,
  runTotalCounts = 1,
  runedCounts = 1,
  userRank = "",
  invicode = "";
let numbers = 3,
  vipDate = "";
if ($.isNode()) {
  process.env.KWYYAPP ? kwyyapp = JSON.parse(process.env.KWYYAPP) : kwyyapp = COOKIES.KWYY;
  userId = process.env.TGUSERID;
  activeCode = process.env.KWYYACTIVECODE;
  process.env.APIHOST && (apiHost = process.env.APIHOST);
  process.env.APIHOSTS && (apiHost = process.env.APIHOSTS);
  process.env.CLEANCACHE && (flushCash = JSON.parse(process.env.CLEANCACHE));
  hour = new Date(new Date().getTime()).getHours();
  minute = new Date(new Date().getTime()).getMinutes();
  $.log("🔔 当前环境: Node, 当前时间：" + hour + "点");
} else {
  hour = new Date().getHours();
  minute = new Date().getMinutes();
  $.log("🔔 当前环境: 手机代理, 当前时间：" + hour + "点");
}
!(async () => {
  if (typeof $request !== "undefined") {
    await getCk();
  } else {
    if (!kwyyapp) {
      $.log("📢 很抱歉，😭 没有找到账号信息！你确定配置账号信息了吗？");
      return;
    }
    $.log("📢 开始检测服务器接口状态>>>");
    let f = false;
    const R = apiHost.split("&"),
      l = R.length;
    for (let G = 0; G < l; G++) {
      if ($.isNode()) {
        f = await checkAddress("" + R[G], 2500);
      } else {
        if ($.isSurge() || $.isLoon()) {
          f = await httpClientRequest("" + R[G], 2500);
        } else {
          f = await fetchRequest("" + R[G], 2500);
        }
      }
      if (f == true) {
        apiHost = R[G];
        $.log("📢 接口" + (G + 1) + "[" + R[G] + "]服务器接口正常! 🎉");
        break;
      }
      if (G == l - 1 && f == false) {
        $.log("📢 抱歉，所有接口都不可用, 请前往交流群置顶获取最新的接口地址! 😭");
        $.msg($.name, "所有接口都不可用, 请尽快前往交流群置顶获取最新的接口地址!");
        return;
      }
    }
    if (!activeCode || !userId || userId == 1 || activeCode == 0 || activeCode.length != 32) {
      $.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    await getScriptAuth(appName, userId, activeCode);
    $.log("📢 " + systemNotify);
    $.log("🔔 当前脚本版本号: " + version + "，最新版本号: " + newest_version);
    if (vipDate != "") {
      let d = new Date(vipDate).getTime(),
        P = new Date().getTime();
      if (P > d) {
        $.log("❗️ 抱歉，VIP到期了，请及时付费。");
        return;
      }
    }
    if (version < newest_version) {
      $.log("❗️ 当前脚本版本号低于服务器版本，请更新脚本吧！");
      sendMsg("🔔 当前脚本版本号低于服务器版本，请更新脚本吧！");
      return;
    }
    if (scriptAuth != true) {
      $.log("❗️ 抱歉, 此脚本已停用。");
      return;
    }
    if (userRank != true) {
      $.log("❗️ 抱歉, 用户不合法，请先私聊机器人加入交流区。 https://t.me/DavidLoveBot");
      return;
    }
    if (userAuth != true) {
      $.log("❗️ 抱歉，你没有权限运行此脚本, 请关注电报机器人: https://t.me/DavidLoveBot");
      return;
    }
    isCharge == true ? $.log("🔔 此脚本采用付费模式。🔒") : $.log("🔔 此脚本采用免费模式。🔓");
    if (vipDate != "") {
      if (isCharge == true) {
        let H = new Date(vipDate).getTime(),
          D = new Date().getTime();
        if (D > H) {
          $.log("❗️ 抱歉，VIP到期了，请及时付费。");
          return;
        } else {
          $.log("🔔 尊敬的会员：您好，你是VIP用户！🔐");
        }
      }
    } else {
      if (isCharge == true) {
        if (vipAuth != true) {
          $.log("❗️ 抱歉，你不是付费用户, 你没有权限运行此脚本, 需要使用请查看使用说明。");
          return;
        } else {
          $.log("🔔 尊敬的会员：您好，你是付费用户！🔐");
        }
      }
    }
    if (multiAccount > 1) {
      $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一次可以运行" + numbers * multiAccount + "个账号。");
    }
    if (buyCount > 1) {
      $.log("🔔 尊敬的会员，您好！你使用的是付费多用户授权账号，一共可以运行" + runTotalCounts + "次, 已经运行了" + runedCounts + "次。");
    }
    if (runAuth != true) {
      $.log("❗️ 抱歉,  该用户今天可能已经达到最大运行次数，明天再试吧！");
      return;
    }
    if (kwyyapp.length > numbers * multiAccount) {
      $.log("❗️ 当前用户一次最多运行" + numbers * multiAccount + "个账号，需要增加账号请查看置顶说明。");
      return;
    }
    if (kwyyapp.length == 0) {
      $.log("先抓取账号ck，再运行脚本吧！");
      return;
    }
    if (runedCounts + kwyyapp.length > runTotalCounts) {
      $.log("📢 一共发现了" + kwyyapp.length + "个账号");
      $.log("❗️ 当前用户运行次数剩余" + (runTotalCounts - runedCounts) + "次，还可以运行" + (runTotalCounts - runedCounts) + "个账号，还需要" + (kwyyapp.length - (runTotalCounts - runedCounts)) + "次，可以通过赞赏后增加运行次数！");
      return;
    }
    if (vipDate != "") {
      $.log("📢 你的会员有效期到： " + vipDate);
    }
    $.log("📢 一共发现了" + kwyyapp.length + "个账号");
    if ($.isNode()) {
      if (!fs.existsSync(kwyy_ck_file)) {
        kwyy_cks = {};
      } else {
        kwyy_cks = JSON.parse(fs.readFileSync(kwyy_ck_file, "utf8"));
      }
    }
    let z = [],
      N = kwyyapp.length,
      t = 0;
    if ($.isNode() && process.env.KWYY_THREAD_COUNT) {
      t = parseInt(process.env.KWYY_THREAD_COUNT);
    } else {
      t = N;
    }
    let o = kwyyapp.length;
    if (t >= N) {
      t = N;
      o = 1;
      $.log("📢 你设置的线程数是" + t + "，账号个数是" + N + "，" + o + "次可全部跑完。");
      for (let C2 = 0; C2 < kwyyapp.length; C2++) {
        z.push(runMultiTasks(C2));
        kwyylogs[C2] = "";
        if ($.isNode()) {
          channels_status[C2] = 0;
          await init_ws(C2);
        } else {
          channels_status[C2] = 1;
        }
      }
      await Promise.allSettled(z).then(C6 => {
        if ($.isNode() && saveFile) {
          $.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数");
          fs.writeFileSync(kwyy_ck_file, JSON.stringify(kwyy_cks, null, 2));
        }
        $.log("日志整理功能如下：");
        $.log("---------------日志整理开始--------------");
        for (let CC = 0; CC < kwyyapp.length; CC++) {
          $.log(kwyylogs[CC]);
          sendlogs += kwyylogs[CC];
        }
        $.log("---------------日志整理结束--------------");
        sendMsg(sendlogs);
      });
    } else {
      o = Math.ceil(N / t);
      $.log("📢 你设置的线程数是" + t + "，账号个数是" + N + "，计算后分" + o + "次执行，一次可执行" + t + "个账号，最后一次如果不够" + t + "个账号，剩多少个账号就跑几个账号。");
      for (let C6 = 0; C6 < o; C6++) {
        for (let C7 = C6 * t; C7 < t * (C6 + 1) && C7 < N; C7++) {
          z.push(runMultiTasks(C7));
          kwyylogs[C7] = "";
          channels_status[C7] = 0;
          await init_ws(C7);
        }
        await Promise.allSettled(z).then(C9 => {
          z = [];
          if (C6 == o - 1) {
            $.isNode() && saveFile && ($.log("[温馨提醒]: 即将本地化token，这样可以有效降低登录次数"), fs.writeFileSync(kwyy_ck_file, JSON.stringify(kwyy_cks, null, 2)));
            $.log("日志整理功能如下：");
            $.log("---------------日志整理开始--------------");
            for (let Cf = 0; Cf < kwyyapp.length; Cf++) {
              $.log(kwyylogs[Cf]);
              sendlogs += kwyylogs[Cf];
            }
            $.log("---------------日志整理结束--------------");
            sendMsg(sendlogs);
          }
        });
      }
    }
  }
})().catch(C => $.logErr(C)).finally(() => $.done());
async function runMultiTasks(C) {
  return new Promise((T, f) => {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 开始执行 working......");
    runSubTask(T, C);
  });
}
async function init_ws(C) {
  if ($.isNode()) {
    if (reconectCounts[C] > 0) {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 尝试重新连接服务器>>>>>>");
    }
    wss[C] = new WebSocket(apiHost.replace("http", "ws") + "/ws");
    wss[C].on("open", function f() {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 签名通道已连接");
    });
    wss[C].on("close", function R() {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 签名通道已关闭，原因是任务已处理完成");
    });
    wss[C].on("error", function l() {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 签名通道已关闭，原因是出现错误");
      channels_status[C] = 1;
      reconectCounts[C]++;
      reconectCounts[C] <= 3 && init_ws(C);
    });
  }
}
async function runSubTask(C, W) {
  if ($.isNode()) {
    await $.wait(3000, 5000);
  }
  loginStatus[W] = true;
  await selectChannel(W, kwyyapp[W].platform + "@" + kwyyapp[W].loginKey);
  await login(W);
  if (loginStatus[W] == false) {
    if ($.isNode()) {
      await wss[W].close();
    }
    C();
    return;
  }
  await todayStatus(W);
  await lotteryInfo(W);
  await taskPage(W);
  $.isNode() && (await wss[W].close());
  await runComplete(appName, userId);
  C();
}
async function getCk() {
  if ($request.url.match(/\/kuwo\/login_by_weixin/)) {
    const z = $request.url,
      N = new URL(z),
      t = new URLSearchParams(N.search),
      o = t.get("f"),
      m = t.get("q");
    let G = kwyyuserck - 1;
    if (kwyyapp[G]) {
      kwyyapp[G].loginKey = m;
      kwyyapp[G].platform = o;
    } else {
      const L = {
        loginKey: m,
        platform: o
      };
      kwyyapp[G] = L;
    }
    $.setdata(JSON.stringify(kwyyapp, null, 2), "kwyyapp");
    $.msg($.name, "酷我音乐账号" + (G + 1) + "key获取成功！🎉");
  }
  if ($request.url.match(/\/earningSignIn\/newUserSignList/)) {
    const Q = $request.url,
      v = new URL(Q),
      s = new URLSearchParams(v.search),
      x = s.get("devId"),
      V = s.get("appUid");
    let d = kwyyuserck - 1;
    if (kwyyapp[d]) {
      kwyyapp[d].appUid = V;
      kwyyapp[d].deviceId = x;
    } else {
      const U = {
        appUid: V,
        deviceId: x
      };
      kwyyapp[d] = U;
    }
    $.setdata(JSON.stringify(kwyyapp, null, 2), "kwyyapp");
    $.msg($.name, "酷我音乐账号" + (d + 1) + "key获取成功！🎉");
  }
}
function initParams(C) {
  const W = Object.keys(C).map(T => encodeURIComponent(T) + "=" + encodeURIComponent(C[T])).join("&");
  return W;
}
async function login(C) {
  let T = requestSigns[C];
  if (T.indexOf("None") == -1) {
    nickeName = T.split("@")[0];
    loginUids[C] = T.split("@")[2];
    loginSids[C] = T.split("@")[1];
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + unicodeToString(nickeName));
    kwyylogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> " + unicodeToString(nickeName) + "\n";
  } else {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> 获取用户名失败");
    kwyylogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> 获取用户名失败\n";
    loginStatus[C] = false;
  }
}
async function todayStatus(C) {
  const T = "https://integralapi.kuwo.cn/api/v1/online/sign/new/todayStatus?loginUid=" + loginUids[C];
  let f = "";
  await getReqObject(T, f, C);
  await httpRequest("get", requestObjects[C], printCaller());
  let R = httpResult;
  if (R != null && R.code == 200) {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 总金币=> " + R.data.remainScore);
    kwyylogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 总金币=> " + R.data.remainScore + "\n";
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 余额=> " + R.data.balance);
    kwyylogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 余额=> " + R.data.balance + "\n";
    R.data.isUserTodaySign == 0 && (await sign(C));
  } else {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 账户信息=> 获取失败");
    kwyylogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 用户名=> 获取失败\n";
  }
}
async function sign(W) {
  const f = {
    loginUid: loginUids[W],
    loginSid: loginSids[W],
    devId: kwyyapp[W].deviceId,
    appUid: kwyyapp[W].appUid,
    apiVer: "3",
    source: "kwplayer_ar_11.1.4.1_40.apk",
    function: "1",
    terminal: "1",
    version: "11.1.4.1",
    scoreInfo: "",
    apiv: "5",
    t: "0.5542786369581496"
  };
  const l = "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newUserSignList?" + initParams(f);
  let z = "";
  await getReqObject(l, z, W);
  await httpRequest("get", requestObjects[W], printCaller());
  let N = httpResult;
  if (N != null && N.code == 200) {
    if (N.data.obtain == "0") {
      $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签到=> 今天已完成签到");
      kwyylogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签到=> 今天已完成签到\n";
    } else {
      $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签到=> 成功！获得" + N.data.obtain + "金币");
      kwyylogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签到=> 成功！获得" + N.data.obtain + "金币\n";
    }
    await doTask(W, {
      loginUid: loginUids[W],
      loginSid: loginSids[W],
      appUid: kwyyapp[W].appUid,
      terminal: "ar",
      from: "sign",
      adverId: "20130802-13059416115",
      extraGoldNum: 88,
      clickExtraGoldNum: 0
    }, "签到广告");
  } else {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签到任务=> 失败！" + N.msg);
    kwyylogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 签到任务=> 失败！" + N.msg + "\n";
  }
}
async function doTask(C, W, T) {
  const R = "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newDoListen?" + initParams(W);
  let l = "";
  await getReqObject(R, l, C);
  await httpRequest("get", requestObjects[C], printCaller());
  let z = httpResult;
  if (z != null && z.code == 200) {
    if (z.data.status == 1) {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: " + T + "=> 完成，获得" + z.data.obtain + "金币");
      kwyylogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: " + T + "=> 完成，获得" + z.data.obtain + "金币\n";
    } else {
      $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: " + T + "=> 失败！" + z.data.description);
      kwyylogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: " + T + "=> 失败！" + z.data.description + "\n";
    }
  } else {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: " + T + "=> 失败！" + z.msg);
    kwyylogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: " + T + "=> 失败！" + z.msg + "\n";
  }
}
async function taskPage(C) {
  const T = "https://integralapi.kuwo.cn/api/v1/online/sign/v1/earningSignIn/newUserSignList?loginUid=" + loginUids[C] + "&loginSid=" + loginSids[C];
  let f = "";
  await getReqObject(T, f, C);
  await httpRequest("get", requestObjects[C], printCaller());
  let R = httpResult;
  if (R != null && R.code == 200) {
    let z = R.data.dataList.find(O => O.taskType == "videoadver");
    if (z) {
      let O = z.list;
      if (z.finishCount < O.length) {
        await doTask(C, {
          loginUid: loginUids[C],
          loginSid: loginSids[C],
          appUid: kwyyapp[C].appUid,
          terminal: "ar",
          from: "videoadver",
          goldNum: 58,
          clickExtraGoldNum: 0
        }, z.title);
      }
    }
    let N = R.data.dataList.find(v => v.taskType == "listen");
    if (N) {
      let v = N.listenList;
      for (let s = 0; s < v.length; s++) {
        let V = v[s];
        if (V.status == "0") {
          await doTask(C, {
            apiversion: 38,
            adverSpace: "",
            verifyStr: "",
            loginUid: loginUids[C],
            loginSid: loginSids[C],
            appUid: kwyyapp[C].appUid,
            terminal: "ar",
            from: "listen",
            goldNum: V.goldNum,
            baseTaskGold: 0,
            adverId: "",
            token: "",
            clickExtraGoldNum: 0,
            secondRewardFlag: 0,
            yyzdSecondRewardFlag: 0,
            surpriseType: "",
            verificationId: "BgbvAwMh38pto%2BlDq%2FTmFis%2Fe4%2BzVel6eKQUv%2FX%2Bl6fhpEm8ZBc2yl5%2BDoiT8F3nyFp2VjaODf05FVW71kiKupA%3D%3D",
            mobile: "FStUZR+DwXjZXQH5pNPuUw==",
            listenTime: V.time,
            apiv: 5,
            unit: V.unit
          }, N.title);
          await $.wait(helpUtils.randomNum(3000, 5000));
        }
      }
    }
    let t = R.data.dataList.find(X => X.taskType == "box");
    t && (await boxInfo(C));
    let o = R.data.dataList.find(U => U.taskType == "novel");
    o && o.finishCount == 0 && (await doTask(C, {
      loginUid: loginUids[C],
      loginSid: loginSids[C],
      appUid: kwyyapp[C].appUid,
      terminal: "ar",
      from: "novel",
      goldNum: 18,
      clickExtraGoldNum: 0
    }, o.title));
    let m = R.data.dataList.find(a => a.taskType == "collect");
    m && m.finishCount == 0 && (await doTask(C, {
      loginUid: loginUids[C],
      loginSid: loginSids[C],
      appUid: kwyyapp[C].appUid,
      terminal: "ar",
      from: "collect",
      goldNum: 18,
      clickExtraGoldNum: 0
    }, m.title));
    let G = R.data.dataList.find(c => c.taskType == "mobile");
    G && G.finishCount == 0 && (await doTask(C, {
      loginUid: loginUids[C],
      loginSid: loginSids[C],
      appUid: kwyyapp[C].appUid,
      terminal: "ar",
      from: "mobile",
      goldNum: 18,
      clickExtraGoldNum: 0
    }, G.title));
  } else {
    $.log("[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 任务列表=> 获取失败");
    kwyylogs[C] += "[账号" + (C + 1 < 10 ? "0" + (C + 1) : C + 1) + "]: 任务列表=> 获取失败\n";
  }
}
async function lotteryInfo(W) {
  const f = {
    loginUid: loginUids[W],
    loginSid: loginSids[W],
    appUid: kwyyapp[W].appUid
  };
  const l = "https://integralapi.kuwo.cn/api/v1/online/sign/loterry/getlotterys?" + initParams(f);
  let z = "";
  await getReqObject(l, z, W);
  await httpRequest("get", requestObjects[W], printCaller());
  let N = httpResult;
  if (N != null && N.code == 200) {
    let t = N.data.ulotterynums;
    t > 0 && (await draw(W, "free"));
  } else {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 抽奖信息=> 失败！" + N.description);
    kwyylogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 抽奖信息=> 失败！" + N.description + "\n";
  }
}
async function draw(W, T) {
  const R = {
    loginUid: loginUids[W],
    loginSid: loginSids[W],
    appUid: kwyyapp[W].appUid,
    source: "kwplayer_ar_10.7.6.2_18.apk",
    type: T
  };
  const z = "https://integralapi.kuwo.cn/api/v1/online/sign/loterry/getLucky?" + initParams(R);
  let N = "";
  await getReqObject(z, N, W);
  await httpRequest("get", requestObjects[W], printCaller());
  let t = httpResult;
  if (t != null && t.code == 200) {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 抽奖=> 完成，获得" + t.data.loterryname);
    kwyylogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 抽奖=> 完成，获得" + t.data.loterryname + "\n";
  } else {
    await draw(W, "video");
  }
}
async function boxInfo(W) {
  const f = {
    loginUid: loginUids[W],
    loginSid: loginSids[W],
    appUid: kwyyapp[W].appUid
  };
  const l = "https://integralapi.kuwo.cn/api/v1/online/sign/new/boxList?" + initParams(f);
  let z = "";
  await getReqObject(l, z, W);
  await httpRequest("get", requestObjects[W], printCaller());
  let N = httpResult;
  if (N != null && N.code == 200) {
    let t = N.data.list;
    if (t) {
      for (let m = 0; m < t.length; m++) {
        let k = t[m];
        if (k.status == "1") {
          await openBox(W, k.time);
          await $.wait(helpUtils.randomNum(3000, 10000));
        }
      }
    }
  } else {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 宝箱信息=> 失败！" + N.description);
    kwyylogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 宝箱信息=> 失败！" + N.description + "\n";
  }
}
async function openBox(W, T) {
  const R = {
    loginUid: loginUids[W],
    loginSid: loginSids[W],
    appUid: kwyyapp[W].appUid,
    devId: kwyyapp[W].deviceId,
    source: "kwplayer_ar_10.7.6.2_18.apk",
    version: "kwplayer_ar_10.7.6.2",
    action: "new",
    time: T,
    goldNum: 30,
    extraGoldnum: 38,
    clickExtraGoldNum: 600
  };
  const z = "https://integralapi.kuwo.cn/api/v1/online/sign/new/newBoxFinish?" + initParams(R);
  let N = "";
  await getReqObject(z, N, W);
  await httpRequest("get", requestObjects[W], printCaller());
  let t = httpResult;
  if (t != null && t.code == 200) {
    $.log("[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 宝箱时段(" + T + ")任务=> 完成，获得" + t.data.obtain + "金币");
    kwyylogs[W] += "[账号" + (W + 1 < 10 ? "0" + (W + 1) : W + 1) + "]: 宝箱时段(" + T + ")任务=> 完成，获得" + t.data.obtain + "金币\n";
  }
}
function getScriptAuth(C, W, T) {
  return new Promise((R, l) => {
    const N = apiHost + "/script/permissions/lastest",
      t = {
        appName: C,
        userId: W,
        activityCode: T,
        version: version
      };
    const m = {};
    m["Content-Type"] = "application/json";
    m.accept = "application/json";
    const G = {
      url: N,
      headers: m,
      body: JSON.stringify(t)
    };
    $.post(G, async (k, O, L) => {
      if (L && L != null && L.replace(/\"/g, "").length > 50) {
        const x = L.replace(/\"/g, "").slice(34);
        helpUtils = await loadUtils(flushCash);
        CryptoJS = helpUtils.createCryptoJS();
        result = JSON.parse(CryptoJS.enc.Base64.parse(x).toString(CryptoJS.enc.Utf8));
        try {
          newest_version = result.version;
          userAuth = result.userAuth;
          scriptAuth = result.scriptAuth;
          runAuth = result.runAuth;
          systemNotify = result.notify;
          vipAuth = result.vipAuth;
          isCharge = result.isCharge;
          multiAccount = result.runAcounts;
          buyCount = result.buyCount;
          runedCounts = result.runedCounts;
          runTotalCounts = result.runTotalCounts;
          userRank = result.userRank;
          invicode = result.invicate;
          numbers = result.accountNumbers;
          vipDate = result.vipDate;
        } catch (X) {
          $.log(X);
        }
      } else {
        $.log("请求服务器接口出现错误，请检查网络连接情况");
      }
      R();
    });
  });
}
function runComplete(C, W) {
  return new Promise((f, R) => {
    const N = apiHost + "/script/run/add",
      t = {
        appName: C,
        userId: W,
        activityCode: activeCode,
        version: version
      };
    const m = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const G = {
      url: N,
      headers: m,
      body: JSON.stringify(t)
    };
    $.post(G, async (k, O, L) => {
      f();
    });
  });
}
function loadToken(C) {
  let T = kwyyapp[C].mobile;
  kwyy_item = kwyy_cks["" + T];
  if (kwyy_item) {
    kwyyapp[C].refreshToken = kwyy_item.refreshToken;
    kwyyapp[C].accessToken = kwyy_item.accessToken;
    return true;
  } else {
    return false;
  }
}
function saveToken(C) {
  kwyy_cks[kwyyapp[C].mobile] = {
    refreshToken: kwyyapp[C].refreshToken,
    accessToken: kwyyapp[C].accessToken,
    ts: ts13()
  };
}
async function loadUtils(C) {
  let T = $.getdata("Utils_Code") || "";
  if (!C && T && Object.keys(T).length) {
    $.log("📢 缓存中存在JS-Utils");
    eval(T);
    return creatUtils();
  }
  $.log("📢 开始初始化JS-Utils");
  return new Promise(async R => {
    $.getScript("http://script.david2024.top/scripts/tools/JS-Utils.js").then(l => {
      $.setdata(l, "Utils_Code");
      eval(l);
      $.log("📢 JS-Utils加载成功");
      R(creatUtils());
    });
  });
}
function checkAddress(C, W) {
  return new Promise((f, R) => {
    const N = setTimeout(() => {
        f(false);
      }, W),
      t = http.get(C, o => {
        clearTimeout(N);
        if (o.statusCode === 404) {
          f(true);
        } else {
          f(false);
        }
      });
    t.on("error", o => {
      clearTimeout(N);
      f(false);
    });
    t.on("timeout", () => {
      t.abort();
      R(new Error("请求超时"));
    });
  });
}
async function fetchRequest(C, W = 3000) {
  return new Promise((f, R) => {
    const N = {
      url: C + "/docs"
    };
    setTimeout(() => {
      f(false);
    }, W);
    $.get(N, async (t, o, m) => {
      if (o.status == 401) {
        f(true);
      } else {
        f(false);
      }
    });
  });
}
async function httpClientRequest(C, W = 3000) {
  return new Promise((f, R) => {
    const N = {
      url: C + "/"
    };
    setTimeout(() => {
      f(false);
    }, W);
    $httpClient.get(N, async (t, o, m) => {
      if (m == "{\"detail\":\"Not Found\"}") {
        f(true);
      } else {
        f(false);
      }
    });
  });
}
async function redisGet(C, W, T) {
  return new Promise((R, l) => {
    const t = apiHost + "/redis/hash/get/" + W + "/" + T,
      o = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const m = {
      url: t,
      headers: o
    };
    $.get(m, async (k, O, L) => {
      const Q = L.replace(/\"/g, "");
      answerTexts[C] = Q;
      R();
    });
  });
}
function redisSet(C, W, T) {
  return new Promise((R, l) => {
    const N = apiHost + "/redis/hash/set",
      t = {
        key: C,
        hashKey: W,
        hashValue: T
      };
    const m = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const G = {
      url: N,
      headers: m,
      body: JSON.stringify(t)
    };
    $.post(G, async (k, O, L) => {
      R();
    });
  });
}
function redisPop(C) {
  return new Promise((f, R) => {
    const t = apiHost + "/redis/set/pop/" + C,
      o = {
        "Content-Type": "application/json",
        accept: "application/json"
      };
    const m = {
      url: t,
      headers: o
    };
    $.get(m, async (k, O, L) => {
      const v = L.replace(/\"/g, "");
      popCookie = v;
      f();
    });
  });
}
async function getReqObject(T, f, R) {
  let z = "%E9%85%B7%E6%88%91%E9%9F%B3%E4%B9%90/11056 CFNetwork/3826.400.120 Darwin/24.3.0";
  if (kwyyapp[R].platform == 0) {
    z = "Mozilla/5.0 (Linux; Android 14; LE2110 Build/UKQ1.230924.001; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/117.0.0.0 Mobile Safari/537.36/ kuwopage";
  }
  if (kwyyapp[R].ua && kwyyapp[R].ua != "") {
    z = kwyyapp[R].ua;
  }
  let N = getHostname(T);
  const t = {
    "Content-Type": "application/json",
    "User-Agent": z,
    Host: N
  };
  const o = {
    url: T,
    headers: t
  };
  if (f) {
    o.body = f;
  }
  requestObjects[R] = o;
  return o;
}
function getReqObject_(T, f, R) {
  let z = "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 MicroMessenger/8.0.31(0x18001f34) NetType/WIFI Language/zh_CN";
  if (kwyyapp[R].ua && kwyyapp[R].ua != "") {
    z = kwyyapp[R].ua;
  }
  let N = getHostname(T);
  const t = {
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": z,
    Authorization: kwyyapp[R].auth,
    Host: N
  };
  const o = {
    url: T,
    headers: t
  };
  if (f) {
    o.body = f;
  }
  requestObjects[R] = o;
  return o;
}
function unicodeToString(C) {
  return C.replace(/%u([0-9A-F]{4})/g, (T, f) => {
    return String.fromCharCode(parseInt(f, 16));
  });
}
async function httpRequest(C, W, T) {
  httpResult = null;
  return new Promise(R => {
    $[C](W, async (z, N, t) => {
      try {
        if (z) {
          $.log(T + ": " + C + "请求失败");
          $.log(JSON.stringify(z));
          $.logErr(z);
        } else {
          if (W.url.indexOf("kuwo/login_kw") != -1) {
            let O = N.headers["set-cookie"],
              L = O.find(P => P.indexOf("uname3=") != -1),
              Q = L.split("; ")[0].split("uname3=")[1];
            Q = unicodeToString(Q);
            let v = O.find(P => P.indexOf("userid=") != -1),
              s = v.split("; ")[0].split("userid=")[1],
              x = O.find(P => P.indexOf("websid=") != -1),
              V = x.split("; ")[0].split("websid=")[1];
            const d = {
              userName: Q,
              loginUid: s,
              loginSid: V
            };
            httpResult = d;
          } else {
            if (safeGet(t)) {
              httpResult = JSON.parse(t);
            } else {
              const c = new URL(W.url);
              $.log(c.pathname + "发起" + C + "请求时，出现错误，请处理");
            }
          }
        }
      } catch (h) {
        $.logErr(h, N);
      } finally {
        R(httpResult);
      }
    });
  });
}
async function selectChannel(C, W) {
  if (channels_status[C] == 0) {
    await getSign_(C, W);
  } else {
    await getSign(C, W);
  }
}
function getSign_(C, W) {
  return new Promise((f, R) => {
    function N(t) {
      let m = t.toString("utf8");
      requestSigns[C] = m;
      wss[C].removeListener("message", N);
      f(m);
    }
    wss[C].on("message", N);
    if (wss[C].readyState === 1) {
      const o = {
        method: appName,
        params: {}
      };
      o.params.content = W;
      o.params.appName = appName;
      o.params.uuid = userId;
      wss[C].send(JSON.stringify(o), m => {
        if (m) {
          R(m);
        }
      });
    } else {
      f(getSign(C, W));
      wss[C].removeListener("message", N);
    }
  });
}
function getSign(C, W) {
  return new Promise((f, R) => {
    const l = apiHost + "/sign/kwyy",
      z = {
        content: W,
        appName: appName,
        uuid: userId
      };
    const t = {
      "Content-Type": "application/json",
      accept: "application/json"
    };
    const o = {
      url: l,
      headers: t,
      body: JSON.stringify(z)
    };
    $.post(o, async (m, G, k) => {
      const L = k.replace(/\"/g, "");
      requestSigns[C] = L;
      f();
    });
  });
}
function sortUrlParams(C, W, T) {
  const R = url2obj(C);
  W.forEach(N => {
    delete R[N];
  });
  Object.assign(R, T);
  const l = Object.keys(R).sort(),
    z = l.map(N => N + "=" + R[N]).join("&");
  return z;
}
function url2obj(C) {
  C = C.replace(/\"/g, "");
  var T;
  var f = {};
  var R = C.slice(C.indexOf("?") + 1).split("&");
  for (var l = 0; l < R.length; l++) {
    T = R[l].split("=");
    f[T[0]] = T[1];
  }
  return f;
}
function convertStringToJson(W) {
  const R = W.replace(/[{} ]/g, ""),
    l = R.split(",");
  const z = {};
  l.forEach(N => {
    const [o, m] = N.split("=");
    z[o] = m;
  });
  return z;
}
function getHostname(C) {
  let T = C.substr(C.indexOf("//") + 2),
    f = T.substr(0, T.indexOf("/"));
  let R = "",
    l = f.indexOf(":");
  if (l > 0) {
    R = f.substr(0, l);
  } else {
    R = f;
  }
  return R;
}
function calculateTimeDifference(W, T) {
  var N = new Date(W);
  var m = new Date(T);
  var t = m - N;
  var o = Math.floor(t / 1000);
  return o;
}
function cutString(C, W) {
  if (C.length * 2 <= W) {
    return C;
  }
  var f = 0,
    R = "";
  for (var l = 0; l < C.length; l++) {
    R = R + C.charAt(l);
    if (C.charCodeAt(l) > 128) {
      f = f + 2;
      if (f >= W) {
        return R.substring(0, R.length - 1) + "...";
      }
    } else {
      f = f + 1;
      if (f >= W) {
        return R.substring(0, R.length - 2) + "...";
      }
    }
  }
  return R;
}
function printCaller() {
  return new Error().stack.split("\n")[3].split("@")[0];
}
function safeGet(W) {
  try {
    if (typeof JSON.parse(W) == "object") {
      return true;
    }
  } catch (z) {
    console.log(z);
    console.log("服务器访问数据为空，请检查自身设备网络情况");
    return false;
  }
}
function jsonToUrl(C) {
  var T = Object.keys(C).map(function (f) {
    return encodeURIComponent(f) + "=" + encodeURIComponent(C[f]);
  }).join("&");
  return T;
}
function compileStr(C) {
  var T = String.fromCharCode(C.charCodeAt(0) + C.length);
  for (var f = 1; f < C.length; f++) {
    T += String.fromCharCode(C.charCodeAt(f) + C.charCodeAt(f - 1));
  }
  return escape(T);
}
function uncompileStr(C) {
  C = unescape(C);
  var T = String.fromCharCode(C.charCodeAt(0) - C.length);
  for (var f = 1; f < C.length; f++) {
    T += String.fromCharCode(C.charCodeAt(f) - T.charCodeAt(f - 1));
  }
  return T;
}
function randomMac() {
  return "XX:XX:XX:XX:XX:XX".replace(/X/g, function () {
    return "0123456789ABCDEF".charAt(Math.floor(Math.random() * 16));
  });
}
function txt_api(C) {
  return new Promise((T, f) => {
    const R = "https://v1.hitokoto.cn/?c=e",
      l = {
        accept: "application/json"
      };
    const z = {
      url: R,
      headers: l
    };
    $.get(z, async (t, o, m) => {
      let G = JSON.parse(m),
        k = G.hitokoto;
      contents[C] = k + " " + k;
      T();
    });
  });
}
function getTime_8() {
  return new Promise((W, T) => {
    const l = "http://api.m.taobao.com/rest/api3.do?api=mtop.common.getTimestamp",
      z = {
        url: l
      };
    $.get(z, async (t, o, m) => {
      W(m);
    });
  });
}
function message() {
  if (tz == 1) {
    $.msg($.name, "", $.message);
  }
}
async function sendMsg(C) {
  if (hour == 9 || hour == 12 || hour == 18) {
    if (tz == 1) {
      if ($.isNode()) {
        await notify.sendNotify($.name, C);
      } else {
        $.msg($.name, "", C);
      }
    } else {
      $.log(C);
    }
  }
}
async function wxPush(C, W, T) {
  return new Promise((R, l) => {
    const t = "https://wxpusher.zjiecode.com/api/send/message",
      o = {
        appToken: "AT_6BZsE2IyJuVLPp3mcOkKvpoF245GR9xn",
        content: W,
        summary: "快手答题余额通知",
        contentType: 1,
        uids: [T],
        verifyPay: false
      };
    const G = {
      "Content-Type": "application/json"
    };
    const k = {
      url: t,
      headers: G,
      body: JSON.stringify(o)
    };
    $.post(k, async (O, L, Q) => {
      R();
    });
  });
}
function Env(C, W) {
  class f {
    constructor(R) {
      this.env = R;
    }
    send(R, l = "GET") {
      R = "string" == typeof R ? {
        url: R
      } : R;
      let o = this.get;
      "POST" === l && (o = this.post);
      return new Promise((m, G) => {
        o.call(this, R, (O, L, Q) => {
          O ? G(O) : m(L);
        });
      });
    }
    get(R) {
      return this.send.call(this.env, R);
    }
    post(R) {
      return this.send.call(this.env, R, "POST");
    }
  }
  return new class {
    constructor(R, l) {
      const N = {
        debug: 0,
        info: 1,
        warn: 2,
        error: 3
      };
      const o = {
        debug: "[DEBUG] ",
        info: "[INFO] ",
        warn: "[WARN] ",
        error: "[ERROR] "
      };
      this.logLevels = N;
      this.logLevelPrefixs = o;
      this.logLevel = "info";
      this.name = R;
      this.http = new f(this);
      this.data = null;
      this.dataFile = "box.dat";
      this.logs = [];
      this.isMute = !1;
      this.isNeedRewrite = !1;
      this.logSeparator = "\n";
      this.encoding = "utf-8";
      this.startTime = new Date().getTime();
      Object.assign(this, l);
      this.log("", "🔔 " + this.name + ", 开始!");
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
    toObj(R, l = null) {
      try {
        return JSON.parse(R);
      } catch {
        return l;
      }
    }
    toStr(R, l = null, ...z) {
      try {
        return JSON.stringify(R, ...z);
      } catch {
        return l;
      }
    }
    getjson(R, l) {
      let z = l;
      if (this.getdata(R)) {
        try {
          z = JSON.parse(this.getdata(R));
        } catch {}
      }
      return z;
    }
    setjson(R, l) {
      try {
        return this.setdata(JSON.stringify(R), l);
      } catch {
        return !1;
      }
    }
    getScript(R) {
      return new Promise(l => {
        const N = {
          url: R
        };
        this.get(N, (o, m, G) => l(G));
      });
    }
    runScript(R, l) {
      return new Promise(N => {
        let k = this.getdata("@chavy_boxjs_userCfgs.httpapi");
        k = k ? k.replace(/\n/g, "").trim() : k;
        let O = this.getdata("@chavy_boxjs_userCfgs.httpapi_timeout");
        O = O ? 1 * O : 20;
        O = l && l.timeout ? l.timeout : O;
        const L = {
          script_text: R,
          mock_type: "cron",
          timeout: O
        };
        const [Q, v] = k.split("@"),
          x = {
            url: "http://" + v + "/v1/scripting/evaluate",
            body: L,
            headers: {
              "X-Key": Q,
              Accept: "*/*"
            },
            timeout: O
          };
        this.post(x, (V, d, P) => N(P));
      }).catch(N => this.logErr(N));
    }
    loaddata() {
      if (!this.isNode()) {
        return {};
      }
      {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const z = this.path.resolve(this.dataFile),
          N = this.path.resolve(process.cwd(), this.dataFile),
          o = this.fs.existsSync(z),
          m = !o && this.fs.existsSync(N);
        if (!o && !m) {
          return {};
        }
        {
          const k = o ? z : N;
          try {
            return JSON.parse(this.fs.readFileSync(k));
          } catch (L) {
            return {};
          }
        }
      }
    }
    writedata() {
      if (this.isNode()) {
        this.fs = this.fs ? this.fs : require("fs");
        this.path = this.path ? this.path : require("path");
        const l = this.path.resolve(this.dataFile),
          z = this.path.resolve(process.cwd(), this.dataFile),
          N = this.fs.existsSync(l),
          m = !N && this.fs.existsSync(z),
          G = JSON.stringify(this.data);
        N ? this.fs.writeFileSync(l, G) : m ? this.fs.writeFileSync(z, G) : this.fs.writeFileSync(l, G);
      }
    }
    lodash_get(R, l, z) {
      const m = l.replace(/\[(\d+)\]/g, ".$1").split(".");
      let G = R;
      for (const k of m) if (G = Object(G)[k], void 0 === G) {
        return z;
      }
      return G;
    }
    lodash_set(R, l, z) {
      Object(R) !== R || (Array.isArray(l) || (l = l.toString().match(/[^.[\]]+/g) || []), l.slice(0, -1).reduce((N, o, m) => Object(N[o]) === N[o] ? N[o] : N[o] = Math.abs(l[m + 1]) >> 0 == +l[m + 1] ? [] : {}, R)[l[l.length - 1]] = z);
      return R;
    }
    getdata(R) {
      let z = this.getval(R);
      if (/^@/.test(R)) {
        const [, N, m] = /^@(.*?)\.(.*?)$/.exec(R),
          G = N ? this.getval(N) : "";
        if (G) {
          try {
            const O = JSON.parse(G);
            z = O ? this.lodash_get(O, m, "") : z;
          } catch (L) {
            z = "";
          }
        }
      }
      return z;
    }
    setdata(R, l) {
      let N = !1;
      if (/^@/.test(l)) {
        const [, G, k] = /^@(.*?)\.(.*?)$/.exec(l),
          O = this.getval(G),
          L = G ? "null" === O ? null : O || "{}" : "{}";
        try {
          const v = JSON.parse(L);
          this.lodash_set(v, k, R);
          N = this.setval(JSON.stringify(v), G);
        } catch (x) {
          const V = {};
          this.lodash_set(V, k, R);
          N = this.setval(JSON.stringify(V), G);
        }
      } else {
        N = this.setval(R, l);
      }
      return N;
    }
    getval(R) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.read(R);
        case "Quantumult X":
          return $prefs.valueForKey(R);
        case "Node.js":
          this.data = this.loaddata();
          return this.data[R];
        default:
          return this.data && this.data[R] || null;
      }
    }
    setval(R, l) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
          return $persistentStore.write(R, l);
        case "Quantumult X":
          return $prefs.setValueForKey(R, l);
        case "Node.js":
          this.data = this.loaddata();
          this.data[l] = R;
          this.writedata();
          return !0;
        default:
          return this.data && this.data[l] || null;
      }
    }
    initGotEnv(R) {
      this.got = this.got ? this.got : require("got");
      this.cktough = this.cktough ? this.cktough : require("tough-cookie");
      this.ckjar = this.ckjar ? this.ckjar : new this.cktough.CookieJar();
      R && (R.headers = R.headers ? R.headers : {}, R && (R.headers = R.headers ? R.headers : {}, void 0 === R.headers.cookie && void 0 === R.headers.Cookie && void 0 === R.cookieJar && (R.cookieJar = this.ckjar)));
    }
    get(R, l = () => {}) {
      const o = {
        redirection: !1
      };
      switch (R.headers && (delete R.headers["Content-Type"], delete R.headers["Content-Length"], delete R.headers["content-type"], delete R.headers["content-length"]), R.params && (R.url += "?" + this.queryStr(R.params)), void 0 === R.followRedirect || R.followRedirect || ((this.isSurge() || this.isLoon()) && (R["auto-redirect"] = !1), this.isQuanX() && (R.opts ? R.opts.redirection = !1 : R.opts = o)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const m = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (R.headers = R.headers || {}, Object.assign(R.headers, m));
          $httpClient.get(R, (O, L, Q) => {
            !O && L && (L.body = Q, L.statusCode = L.status ? L.status : L.statusCode, L.status = L.statusCode);
            l(O, L, Q);
          });
          break;
        case "Quantumult X":
          const G = {};
          G.hints = !1;
          this.isNeedRewrite && (R.opts = R.opts || {}, Object.assign(R.opts, G));
          $task.fetch(R).then(O => {
            const {
                statusCode: v,
                statusCode: x,
                headers: V,
                body: d,
                bodyBytes: P
              } = O,
              X = {
                status: v,
                statusCode: x,
                headers: V,
                body: d,
                bodyBytes: P
              };
            l(null, X, d, P);
          }, O => l(O && O.error || "UndefinedError"));
          break;
        case "Node.js":
          let k = require("iconv-lite");
          this.initGotEnv(R);
          this.got(R).on("redirect", (O, L) => {
            try {
              if (O.headers["set-cookie"]) {
                const V = O.headers["set-cookie"].map(this.cktough.Cookie.parse).toString();
                V && this.ckjar.setCookieSync(V, null);
                L.cookieJar = this.ckjar;
              }
            } catch (d) {
              this.logErr(d);
            }
          }).then(O => {
            const {
                statusCode: Q,
                statusCode: v,
                headers: x,
                rawBody: V
              } = O,
              d = k.decode(V, this.encoding),
              P = {
                status: Q,
                statusCode: v,
                headers: x,
                rawBody: V,
                body: d
              };
            l(null, P, d);
          }, O => {
            const {
              message: L,
              response: Q
            } = O;
            l(L, Q, Q && k.decode(Q.rawBody, this.encoding));
          });
          break;
      }
    }
    post(R, l = () => {}) {
      const m = R.method ? R.method.toLocaleLowerCase() : "post",
        G = {
          redirection: !1
        };
      switch (R.body && R.headers && !R.headers["Content-Type"] && !R.headers["content-type"] && (R.headers["content-type"] = "application/x-www-form-urlencoded"), R.headers && (delete R.headers["Content-Length"], delete R.headers["content-length"]), void 0 === R.followRedirect || R.followRedirect || ((this.isSurge() || this.isLoon()) && (R["auto-redirect"] = !1), this.isQuanX() && (R.opts ? R.opts.redirection = !1 : R.opts = G)), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        default:
          const k = {
            "X-Surge-Skip-Scripting": !1
          };
          this.isSurge() && this.isNeedRewrite && (R.headers = R.headers || {}, Object.assign(R.headers, k));
          $httpClient[m](R, (x, V, d) => {
            !x && V && (V.body = d, V.statusCode = V.status ? V.status : V.statusCode, V.status = V.statusCode);
            l(x, V, d);
          });
          break;
        case "Quantumult X":
          const O = {
            hints: !1
          };
          R.method = m;
          this.isNeedRewrite && (R.opts = R.opts || {}, Object.assign(R.opts, O));
          $task.fetch(R).then(x => {
            const {
                statusCode: d,
                statusCode: P,
                headers: X,
                body: U,
                bodyBytes: c
              } = x,
              b = {
                status: d,
                statusCode: P,
                headers: X,
                body: U,
                bodyBytes: c
              };
            l(null, b, U, c);
          }, x => l(x && x.error || "UndefinedError"));
          break;
        case "Node.js":
          let L = require("iconv-lite");
          this.initGotEnv(R);
          const {
            url: Q,
            ...v
          } = R;
          this.got[m](Q, v).then(x => {
            const {
                statusCode: d,
                statusCode: P,
                headers: X,
                rawBody: U
              } = x,
              c = L.decode(U, this.encoding),
              b = {
                status: d,
                statusCode: P,
                headers: X,
                rawBody: U,
                body: c
              };
            l(null, b, c);
          }, x => {
            const {
              message: X,
              response: U
            } = x;
            l(X, U, U && L.decode(U.rawBody, this.encoding));
          });
          break;
      }
    }
    time(R, l = null) {
      const N = l ? new Date(l) : new Date();
      let o = {
        "M+": N.getMonth() + 1,
        "d+": N.getDate(),
        "H+": N.getHours(),
        "m+": N.getMinutes(),
        "s+": N.getSeconds(),
        "q+": Math.floor((N.getMonth() + 3) / 3),
        S: N.getMilliseconds()
      };
      /(y+)/.test(R) && (R = R.replace(RegExp.$1, (N.getFullYear() + "").substr(4 - RegExp.$1.length)));
      for (let m in o) new RegExp("(" + m + ")").test(R) && (R = R.replace(RegExp.$1, 1 == RegExp.$1.length ? o[m] : ("00" + o[m]).substr(("" + o[m]).length)));
      return R;
    }
    queryStr(R) {
      let N = "";
      for (const o in R) {
        let G = R[o];
        null != G && "" !== G && ("object" == typeof G && (G = JSON.stringify(G)), N += o + "=" + G + "&");
      }
      N = N.substring(0, N.length - 1);
      return N;
    }
    msg(R = C, l = "", z = "", N = {}) {
      const m = G => {
        const {
          $open: O,
          $copy: L,
          $media: Q,
          $mediaMime: v
        } = G;
        switch (typeof G) {
          case void 0:
            return G;
          case "string":
            switch (this.getEnv()) {
              case "Surge":
              case "Stash":
              default:
                const x = {
                  url: G
                };
                return x;
              case "Loon":
              case "Shadowrocket":
                return G;
              case "Quantumult X":
                const V = {
                  "open-url": G
                };
                return V;
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
                  const d = {};
                  let P = G.openUrl || G.url || G["open-url"] || O;
                  P && Object.assign(d, {
                    action: "open-url",
                    url: P
                  });
                  let X = G["update-pasteboard"] || G.updatePasteboard || L;
                  if (X && Object.assign(d, {
                    action: "clipboard",
                    text: X
                  }), Q) {
                    let c, b, h;
                    if (Q.startsWith("http")) {
                      c = Q;
                    } else {
                      if (Q.startsWith("data:")) {
                        const [S] = Q.split(";"),
                          [, y] = Q.split(",");
                        b = y;
                        h = S.replace("data:", "");
                      } else {
                        b = Q;
                        h = (H => {
                          const J = {
                            JVBERi0: "application/pdf",
                            R0lGODdh: "image/gif",
                            R0lGODlh: "image/gif",
                            iVBORw0KGgo: "image/png",
                            "/9j/": "image/jpg"
                          };
                          for (var D in J) if (0 === H.indexOf(D)) {
                            return J[D];
                          }
                          return null;
                        })(Q);
                      }
                    }
                    Object.assign(d, {
                      "media-url": c,
                      "media-base64": b,
                      "media-base64-mime": v ?? h
                    });
                  }
                  const U = {
                    "auto-dismiss": G["auto-dismiss"],
                    sound: G.sound
                  };
                  Object.assign(d, U);
                  return d;
                }
              case "Loon":
                {
                  const H = {};
                  let D = G.openUrl || G.url || G["open-url"] || O;
                  D && Object.assign(H, {
                    openUrl: D
                  });
                  let J = G.mediaUrl || G["media-url"];
                  Q?.["startsWith"]("http") && (J = Q);
                  J && Object.assign(H, {
                    mediaUrl: J
                  });
                  console.log(JSON.stringify(H));
                  return H;
                }
              case "Quantumult X":
                {
                  const p = {};
                  let w = G["open-url"] || G.url || G.openUrl || O;
                  w && Object.assign(p, {
                    "open-url": w
                  });
                  let I = G["media-url"] || G.mediaUrl;
                  Q?.["startsWith"]("http") && (I = Q);
                  I && Object.assign(p, {
                    "media-url": I
                  });
                  let E = G["update-pasteboard"] || G.updatePasteboard || L;
                  E && Object.assign(p, {
                    "update-pasteboard": E
                  });
                  console.log(JSON.stringify(p));
                  return p;
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
            $notification.post(R, l, z, m(N));
            break;
          case "Quantumult X":
            $notify(R, l, z, m(N));
            break;
          case "Node.js":
            break;
        }
      }
      if (!this.isMuteLog) {
        let G = ["", "==============📣系统通知📣=============="];
        G.push(R);
        l && G.push(l);
        z && G.push(z);
        console.log(G.join("\n"));
        this.logs = this.logs.concat(G);
      }
    }
    debug(...R) {
      this.logLevels[this.logLevel] <= this.logLevels.debug && (R.length > 0 && (this.logs = [...this.logs, ...R]), console.log("" + this.logLevelPrefixs.debug + R.map(l => l ?? String(l)).join(this.logSeparator)));
    }
    info(...R) {
      this.logLevels[this.logLevel] <= this.logLevels.info && (R.length > 0 && (this.logs = [...this.logs, ...R]), console.log("" + this.logLevelPrefixs.info + R.map(l => l ?? String(l)).join(this.logSeparator)));
    }
    warn(...R) {
      this.logLevels[this.logLevel] <= this.logLevels.warn && (R.length > 0 && (this.logs = [...this.logs, ...R]), console.log("" + this.logLevelPrefixs.warn + R.map(l => l ?? String(l)).join(this.logSeparator)));
    }
    error(...R) {
      this.logLevels[this.logLevel] <= this.logLevels.error && (R.length > 0 && (this.logs = [...this.logs, ...R]), console.log("" + this.logLevelPrefixs.error + R.map(l => l ?? String(l)).join(this.logSeparator)));
    }
    log(...R) {
      R.length > 0 && (this.logs = [...this.logs, ...R]);
      console.log(R.map(l => l ?? String(l)).join(this.logSeparator));
    }
    logErr(R, l) {
      switch (this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          this.log("", "❗️" + this.name + ", 错误!", l, R);
          break;
        case "Node.js":
          this.log("", "❗️" + this.name + ", 错误!", l, void 0 !== R.message ? R.message : R, R.stack);
          break;
      }
    }
    wait(R) {
      return new Promise(l => setTimeout(l, R));
    }
    done(R = {}) {
      const l = (new Date().getTime() - this.startTime) / 1000;
      switch (this.log("", "🔔" + this.name + ", 结束! 🕛 " + l + " 秒"), this.log(), this.getEnv()) {
        case "Surge":
        case "Loon":
        case "Stash":
        case "Shadowrocket":
        case "Quantumult X":
        default:
          $done(R);
          break;
        case "Node.js":
          process.exit(1);
      }
    }
  }(C, W);
}