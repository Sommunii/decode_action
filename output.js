//Mon Nov 10 2025 06:32:21 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
console.log("\n╔══════════════════════════════════════════════════════════════╗");
console.log("║                    📢 购卡地址提示                           ║");
console.log("╠══════════════════════════════════════════════════════════════╣");
console.log("║  购卡地址: https://t.me/+U1IwSeGh-CA1Yjk1                    ║");
console.log("╚══════════════════════════════════════════════════════════════╝\n");
const qs = require("querystring"),
  axios = require("axios"),
  querystring = require("querystring"),
  {
    SocksProxyAgent
  } = require("socks-proxy-agent");
function is_live_ad(_0x56b4b0 = {}) {
  try {
    let _0x5af0c5 = _0x56b4b0.adExtInfo || _0x56b4b0.extInfo || _0x56b4b0?.["ad"]?.["adExtInfo"] || "{}";
    if (typeof _0x5af0c5 === "string") {
      try {
        _0x5af0c5 = JSON.parse(_0x5af0c5);
      } catch (_0x1d606a) {
        _0x5af0c5 = {};
      }
    }
    const _0x4d706e = ["直播", "live", "主播", "LIVE", "zb", "ZB"],
      _0x470ae0 = String(_0x56b4b0.creativeId || _0x56b4b0?.["ad"]?.["creativeId"] || "").toLowerCase(),
      _0x264293 = String(_0x5af0c5.description || "").toLowerCase(),
      _0x87884 = String(_0x5af0c5.title || _0x56b4b0.title || "").toLowerCase(),
      _0x44d617 = String(_0x5af0c5.caption || _0x56b4b0.caption || "").toLowerCase(),
      _0x670a6c = [_0x470ae0, _0x264293, _0x87884, _0x44d617, JSON.stringify(_0x5af0c5 || {})];
    for (const _0x53bb7a of _0x670a6c) {
      for (const _0x3de522 of _0x4d706e) {
        if (_0x53bb7a && _0x53bb7a.includes(_0x3de522.toLowerCase())) {
          return true;
        }
      }
    }
    const _0x27d100 = _0x56b4b0.materialTime || _0x56b4b0?.["ad"]?.["materialTime"] || 0;
    if (_0x27d100 > 60000) {
      return true;
    }
    if (_0x470ae0.startsWith("live_") || _0x470ae0.startsWith("zb_") || _0x470ae0.startsWith("live-") || _0x470ae0.startsWith("zb-")) {
      return true;
    }
    return false;
  } catch (_0x1c02c5) {
    return false;
  }
}
function getEnvNumber(_0x5d8048, _0x3f9417) {
  const _0x446d00 = parseInt(process.env[_0x5d8048], 10);
  return isNaN(_0x446d00) ? _0x3f9417 : _0x446d00;
}
function getEnvString(_0x2033e7, _0x753211) {
  const _0x30e3e7 = process.env[_0x2033e7];
  return _0x30e3e7 ? _0x30e3e7.trim() : _0x753211;
}
function getEnvRange(_0x80252f, _0x44c3dc, _0x3e7790) {
  const _0x56e479 = process.env[_0x80252f];
  if (!_0x56e479) {
    return [_0x44c3dc, _0x3e7790];
  }
  const _0x5e22fb = _0x56e479.trim();
  const _0x442ea1 = _0x5e22fb.includes("-") ? "-" : ",",
    _0x28b3d1 = _0x5e22fb.split(_0x442ea1).map(_0x5275ee => _0x5275ee.trim()).filter(Boolean);
  if (_0x28b3d1.length === 2) {
    const _0x521594 = parseInt(_0x28b3d1[0], 10),
      _0x1f414f = parseInt(_0x28b3d1[1], 10);
    if (!isNaN(_0x521594) && !isNaN(_0x1f414f) && _0x521594 <= _0x1f414f) {
      return [_0x521594, _0x1f414f];
    }
  }
  return [_0x44c3dc, _0x3e7790];
}
const KSCOIN_LIMIT = getEnvNumber("KSCOIN_LIMIT", 500000),
  KSLOW_REWARD_THRESHOLD = getEnvNumber("KSLOW_REWARD_THRESHOLD", 10),
  KSLOW_REWARD_LIMIT = getEnvNumber("KSLOW_REWARD_LIMIT", 3),
  KSLOOK_COUNT = getEnvNumber("KSLOOK_COUNT", 50),
  KSFOLLOW_COUNT = getEnvNumber("KSFOLLOW_COUNT", 2),
  KSSEARCH_COUNT = getEnvNumber("KSSEARCH_COUNT", 10),
  KSSEARCHFOLLOW_COUNT = getEnvNumber("KSSEARCHFOLLOW_COUNT", 2),
  KSBOX_COUNT = getEnvNumber("KSBOX_COUNT", 10),
  KSFOOD_COUNT = getEnvNumber("KSFOOD_COUNT", 10),
  KSKBOX_COUNT = getEnvNumber("KSKBOX_COUNT", 1),
  [KSROUND_START_WAIT_MIN, KSROUND_START_WAIT_MAX] = getEnvRange("KSROUND_START_WAIT", 7, 15),
  [KSWATCH_AD_TIME_MIN, KSWATCH_AD_TIME_MAX] = getEnvRange("KSWATCH_AD_TIME", 30, 40),
  [KSPRE_LOOK_FOLLOW_WAIT_MIN, KSPRE_LOOK_FOLLOW_WAIT_MAX] = getEnvRange("KSPRE_LOOK_FOLLOW_WAIT", 15, 30),
  [KSBETWEEN_LOOK_FOLLOW_WAIT_MIN, KSBETWEEN_LOOK_FOLLOW_WAIT_MAX] = getEnvRange("KSBETWEEN_LOOK_FOLLOW_WAIT", 35, 50),
  [KSPRE_SEARCH_FOLLOW_WAIT_MIN, KSPRE_SEARCH_FOLLOW_WAIT_MAX] = getEnvRange("KSPRE_SEARCH_FOLLOW_WAIT", 15, 30);
const [KSBETWEEN_SEARCH_FOLLOW_WAIT_MIN, KSBETWEEN_SEARCH_FOLLOW_WAIT_MAX] = getEnvRange("KSBETWEEN_SEARCH_FOLLOW_WAIT", 15, 30),
  [KSROUND_END_WAIT_MIN, KSROUND_END_WAIT_MAX] = getEnvRange("KSROUND_END_WAIT", 10, 20),
  [KSTASK_SWITCH_WAIT_MIN, KSTASK_SWITCH_WAIT_MAX] = getEnvRange("KSTASK_SWITCH_WAIT", 15, 30),
  SCRIPT_VERSION = "v2",
  DEVICE_ID_FILE = ".device_id.txt",
  AUTH_API_URL = "http://47.95.197.104/auth.php",
  AUTH_KEY = getEnvString("AUTH_KEY", getEnvString("KAMICARD_KEY", ""));
const ENABLE_AUTH = AUTH_KEY && AUTH_KEY.length > 0,
  _0x217086 = {
    isValid: false,
    lastCheckTime: 0,
    keyStatus: null,
    expiresAt: null,
    checkInterval: null
  };
const KAMICARD_CHECK_INTERVAL = 600000,
  SKIP_LIVE_ADS = ["1", "true", "yes", "on"].includes(getEnvString("SKIP_LIVE_ADS", "1").toLowerCase()),
  SKIP_LIVE_MAX_RETRIES = Math.max(1, getEnvNumber("SKIP_LIVE_MAX_RETRIES", 5));
function getTasksToExecute() {
  const _0x523c2e = process.env.Task;
  if (!_0x523c2e) {
    return ["look", "box", "food", "kbox", "search", "look_follow", "search_follow"];
  }
  const _0x1939ee = _0x523c2e.split(",").map(_0x277583 => _0x277583.trim().toLowerCase()).filter(Boolean),
    _0x3a51fd = ["look", "box", "food", "kbox", "search", "look_follow", "search_follow"],
    _0x2e583b = _0x1939ee.filter(_0x469104 => _0x3a51fd.includes(_0x469104));
  if (_0x2e583b.length === 0) {
    return ["look", "box", "food", "kbox", "search", "look_follow", "search_follow"];
  }
  return _0x2e583b;
}
function getAccountConfigsFromEnv() {
  const _0x411d77 = [],
    _0x35850d = new Set();
  if (process.env.ksck) {
    const _0x2b1e37 = process.env.ksck,
      configStrings = _0x2b1e37.split("&").map(_0x16b89c => _0x16b89c.trim()).filter(Boolean);
    _0x411d77.push(...configStrings);
  }
  for (let _0xc7536f = 1; _0xc7536f <= 666; _0xc7536f++) {
    const _0x1cc935 = "ksck" + _0xc7536f;
    if (process.env[_0x1cc935]) {
      const _0x1e0c6f = process.env[_0x1cc935],
        configStrings = _0x1e0c6f.split("&").map(_0x6503f1 => _0x6503f1.trim()).filter(Boolean);
      _0x411d77.push(...configStrings);
    }
  }
  const _0x566ebf = [];
  for (const _0xbb089b of _0x411d77) {
    !_0x35850d.has(_0xbb089b) && (_0x35850d.add(_0xbb089b), _0x566ebf.push(_0xbb089b));
  }
  return _0x566ebf;
}
const accountConfigs = getAccountConfigsFromEnv(),
  accountCount = accountConfigs.length,
  tasksToExecute = getTasksToExecute();
function generateKuaishouDid() {
  try {
    const generateRandomHexString = _0x53ca54 => {
        const _0x78f35b = "0123456789abcdef";
        let _0x3a8091 = "";
        for (let _0x6147bf = 0; _0x6147bf < _0x53ca54; _0x6147bf++) {
          _0x3a8091 += _0x78f35b.charAt(Math.floor(Math.random() * _0x78f35b.length));
        }
        return _0x3a8091;
      },
      _0x489bf5 = generateRandomHexString(32),
      _0x5304cf = _0x489bf5;
    return _0x5304cf;
  } catch (_0xcf20de) {
    console.log("生成did失败: " + _0xcf20de.message);
    const _0x50be1b = Date.now().toString(16).toUpperCase();
    let _0x2cc704 = _0x50be1b;
    while (_0x2cc704.length < 32) {
      _0x2cc704 += Math.random().toString(16).substring(2);
    }
    return _0x2cc704.substring(0, 32);
  }
}
function getOrCreateDeviceId() {
  const _0x29713a = require("fs");
  try {
    if (_0x29713a.existsSync(DEVICE_ID_FILE)) {
      const _0x16e642 = _0x29713a.readFileSync(DEVICE_ID_FILE, "utf8").trim();
      if (_0x16e642 && _0x16e642.length === 32) {
        return _0x16e642;
      } else {
        if (_0x16e642 && _0x16e642.length > 0) {
          try {
            _0x29713a.unlinkSync(DEVICE_ID_FILE);
          } catch (_0x541031) {}
        }
      }
    }
    const _0x51c4b5 = generateKuaishouDid();
    try {
      _0x29713a.writeFileSync(DEVICE_ID_FILE, _0x51c4b5, "utf8");
    } catch (writeError) {
      console.log("保存设备ID失败: " + writeError.message);
    }
    return _0x51c4b5;
  } catch (_0x2dfb26) {
    console.log("读取设备ID失败: " + _0x2dfb26.message);
    return generateKuaishouDid();
  }
}
async function sendRequest(_0x4b24dc, _0x5a5482 = null, _0xd31fa4 = "Unknown Request") {
  const _0x252981 = {
      ..._0x4b24dc
    },
    _0x19e12f = _0x252981;
  let _0x31084e = null;
  if (_0x5a5482) {
    try {
      _0x31084e = new SocksProxyAgent(_0x5a5482);
    } catch (proxyError) {
      console.log("[错误] " + _0xd31fa4 + " 代理URL无效(" + proxyError.message + ")，尝试直连模式");
    }
  }
  try {
    const _0x4db75f = {
        method: _0x19e12f.method || "GET",
        url: _0x19e12f.url,
        headers: _0x19e12f.headers || {},
        data: _0x19e12f.body || _0x19e12f.form,
        timeout: _0x19e12f.timeout || 30000,
        ...(_0x31084e && {
          httpAgent: _0x31084e,
          httpsAgent: _0x31084e
        })
      },
      _0x3cbac6 = await axios(_0x4db75f),
      _0x1386ad = {
        response: _0x3cbac6,
        body: _0x3cbac6.data
      };
    return _0x1386ad;
  } catch (_0xcf6904) {
    if (_0xcf6904.response) {
      const _0x9f6fd = _0xcf6904.response.data || null,
        _0x4dd507 = {
          response: _0xcf6904.response,
          body: _0x9f6fd
        };
      return _0x4dd507;
    } else {
      if (_0xcf6904.request) {
        _0xcf6904.name === "AggregateError" && Array.isArray(_0xcf6904.errors);
      }
    }
    const _0x57413a = {
      response: null,
      body: null
    };
    return _0x57413a;
  }
}
function isValidIP(_0xc22827) {
  if (!_0xc22827 || typeof _0xc22827 !== "string") {
    return false;
  }
  if (_0xc22827.includes("<html>") || _0xc22827.includes("503 Service Temporarily Unavailable") || _0xc22827.includes("502 Bad Gateway") || _0xc22827.includes("504 Gateway Timeout")) {
    return false;
  }
  const _0x4db6d2 = /^(\d{1,3}\.){3}\d{1,3}$/,
    _0x292691 = /^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
  if (_0x4db6d2.test(_0xc22827)) {
    const _0x39baf4 = _0xc22827.split(".");
    for (const _0x5d60b8 of _0x39baf4) {
      const _0x4bb08b = parseInt(_0x5d60b8, 10);
      if (_0x4bb08b < 0 || _0x4bb08b > 255 || isNaN(_0x4bb08b)) {
        return false;
      }
    }
    return true;
  }
  return _0x292691.test(_0xc22827);
}
async function testProxyConnectivity(_0x5a8cb7, _0x4ad35d = "代理连通性检测", _0x447a2f = 10) {
  if (!_0x5a8cb7) {
    const _0x157f89 = {
      ok: true,
      msg: "✅ 未配置代理（直连模式）",
      ip: "localhost"
    };
    return _0x157f89;
  }
  let lastError = null;
  const _0x1cdc93 = ["https://httpbin.org/ip", "https://api.ipify.org?format=json", "https://jsonip.com", "https://api.my-ip.io/ip.json"];
  for (let _0x618430 = 1; _0x618430 <= _0x447a2f; _0x618430++) {
    for (const _0x8a511b of _0x1cdc93) {
      try {
        const _0x2ca1cc = {
          "User-Agent": "ProxyTester/1.0"
        };
        const _0x156583 = {
          method: "GET",
          url: _0x8a511b,
          headers: _0x2ca1cc,
          timeout: 15000
        };
        const {
          response: _0x2b009b,
          body: _0x5a5058
        } = await sendRequest(_0x156583, _0x5a8cb7, _0x4ad35d + " → " + new URL(_0x8a511b).hostname);
        if (typeof _0x5a5058 === "string" && (_0x5a5058.includes("<html>") || _0x5a5058.includes("503 Service Temporarily Unavailable") || _0x5a5058.includes("502 Bad Gateway") || _0x5a5058.includes("504 Gateway Timeout"))) {
          continue;
        }
        if (_0x5a5058) {
          let _0x30688f = null;
          if (_0x8a511b.includes("httpbin.org") && _0x5a5058.origin) {
            _0x30688f = _0x5a5058.origin;
          } else {
            if (_0x8a511b.includes("ipify.org") && _0x5a5058.ip) {
              _0x30688f = _0x5a5058.ip;
            } else {
              if (_0x8a511b.includes("jsonip.com") && _0x5a5058.ip) {
                _0x30688f = _0x5a5058.ip;
              } else {
                if (_0x8a511b.includes("my-ip.io") && _0x5a5058.ip) {
                  _0x30688f = _0x5a5058.ip;
                } else {
                  typeof _0x5a5058 === "string" && !_0x5a5058.includes("<") && (_0x30688f = _0x5a5058.trim());
                }
              }
            }
          }
          if (_0x30688f && isValidIP(_0x30688f)) {
            const _0x43de2a = {
              ok: true,
              msg: "✅ SOCKS5代理正常，出口IP: " + _0x30688f,
              ip: _0x30688f
            };
            return _0x43de2a;
          }
        }
      } catch (_0x4a08f8) {
        lastError = _0x4a08f8;
        continue;
      }
      await new Promise(_0x3d897a => setTimeout(_0x3d897a, 500));
    }
    if (_0x618430 < _0x447a2f) {
      const _0x2202ee = _0x618430 * 2000;
      await new Promise(_0x5266ee => setTimeout(_0x5266ee, _0x2202ee));
    }
  }
  try {
    new URL(_0x5a8cb7);
  } catch (_0x57fcf0) {
    const _0x2d9e9d = {
      ok: false,
      msg: "❌ 代理URL格式错误: " + _0x57fcf0.message,
      ip: null
    };
    return _0x2d9e9d;
  }
  const _0x1611b2 = {
    ok: false,
    msg: "❌ 代理测试失败: " + (lastError?.["message"] || "所有测试端点均无法访问"),
    ip: null
  };
  return _0x1611b2;
}
const usedProxies = new Set();
async function getAccountBasicInfo(_0x5c0d66, _0xe912bd, _0x42f751 = "?") {
  const _0x21ae20 = "https://nebula.kuaishou.com/rest/n/nebula/activity/earn/overview/basicInfo?source=bottom_guide_first",
    _0x4905ac = {
      Host: "nebula.kuaishou.com",
      "User-Agent": "kwai-android aegon/3.56.0",
      Cookie: _0x5c0d66,
      "Content-Type": "application/x-www-form-urlencoded"
    };
  const _0x17ad6a = {
    method: "GET",
    url: _0x21ae20,
    headers: _0x4905ac,
    timeout: 12000
  };
  const {
    body: _0x400a8a
  } = await sendRequest(_0x17ad6a, _0xe912bd, "账号[" + _0x42f751 + "] 获取基本信息");
  if (_0x400a8a && _0x400a8a.result === 1 && _0x400a8a.data) {
    let _0x4a49b0 = null;
    _0x400a8a.data.userData && (_0x4a49b0 = _0x400a8a.data.userData.ud || _0x400a8a.data.userData.userId || _0x400a8a.data.userData.user_id || _0x400a8a.data.userData.id || null);
    !_0x4a49b0 && (_0x4a49b0 = _0x400a8a.data.ud || _0x400a8a.data.userId || _0x400a8a.data.user_id || null);
    const _0x467ac9 = {
      nickname: _0x400a8a.data.userData?.["nickname"] || null,
      totalCoin: _0x400a8a.data.totalCoin ?? null,
      allCash: _0x400a8a.data.allCash ?? null,
      ud: _0x4a49b0
    };
    return _0x467ac9;
  }
  return null;
}
const forceColor = String(process.env.FORCE_COLOR || "").toLowerCase(),
  disableColor = String(process.env.NO_COLOR || "").toLowerCase() === "1",
  supportsColor = !disableColor && forceColor !== "0",
  _0x560113 = {
    reset: "[0m",
    bright: "[1m",
    dim: "[2m",
    red: "[31m",
    green: "[32m",
    yellow: "[33m",
    blue: "[34m",
    magenta: "[35m",
    cyan: "[36m",
    white: "[37m"
  };
const _0x581a8e = {
  reset: "",
  bright: "",
  dim: "",
  red: "",
  green: "",
  yellow: "",
  blue: "",
  magenta: "",
  cyan: "",
  white: ""
};
const colors = supportsColor ? _0x560113 : _0x581a8e;
function colorize(_0x33c7d5, _0x3e48dd) {
  if (!supportsColor || !_0x3e48dd) {
    return String(_0x33c7d5);
  }
  return "" + _0x3e48dd + _0x33c7d5 + colors.reset;
}
function formatAccountTag(_0x460b90) {
  return colorize("[" + _0x460b90 + "]", colors.bright + colors.cyan);
}
function formatCoin(_0x9647ba) {
  return colorize("[" + _0x9647ba + "]", colors.bright + colors.green);
}
function formatReward(_0x489433) {
  return colorize("[" + _0x489433 + "]", colors.bright + colors.yellow);
}
function centerAlign(_0xf4549, _0x782c60) {
  _0xf4549 = String(_0xf4549);
  if (_0xf4549.length >= _0x782c60) {
    return _0xf4549.substring(0, _0x782c60);
  }
  const _0xc7e602 = _0x782c60 - _0xf4549.length,
    _0x2fa1f2 = Math.floor(_0xc7e602 / 2),
    _0x591de4 = _0xc7e602 - _0x2fa1f2;
  return " ".repeat(_0x2fa1f2) + _0xf4549 + " ".repeat(_0x591de4);
}
class KuaishouAdTask {
  constructor({
    index: _0x2c77d3,
    salt: _0x328796,
    cookie: _0x3284f8,
    nickname = "",
    proxyUrl = null,
    tasksToExecute = ["look"],
    remark = "",
    udFromLogin = null
  }) {
    this.index = _0x2c77d3;
    this.salt = _0x328796;
    this.cookie = _0x3284f8;
    this.nickname = nickname || remark || "账号" + _0x2c77d3;
    this.remark = remark;
    this.proxyUrl = proxyUrl;
    this.coinLimit = KSCOIN_LIMIT;
    this.coinExceeded = false;
    this.tasksToExecute = tasksToExecute;
    this.adaddnum = 0;
    this.extractCookieInfo();
    if (udFromLogin && udFromLogin.trim()) {
      const _0x22e2b3 = String(udFromLogin).trim();
      _0x22e2b3 && (this.userId = _0x22e2b3);
    }
    this.headers = {
      Host: "nebula.kuaishou.com",
      Connection: "keep-alive",
      "User-Agent": "Mozilla/5.0 (Linux; Android 10; MI 8 Lite Build/QKQ1.190910.002; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/87.0.4280.101 Mobile Safari/537.36",
      Cookie: this.cookie,
      "content-type": "application/json"
    };
    this.taskReportPath = "/rest/r/ad/task/report";
    this.startTime = Date.now();
    this.endTime = this.startTime - 30000;
    this.queryParams = "mod=Xiaomi(MI 11)&appver=" + this.appver + "&egid=" + this.egid + "&did=" + this.did;
    const _0x4c2ddb = {
      name: "看广告得金币",
      businessId: 672,
      posId: 24067,
      subPageId: 100026367,
      requestSceneType: 1,
      taskType: 1
    };
    const _0x501937 = {
      name: "追加看广告得金币",
      businessId: 672,
      posId: 24067,
      subPageId: 100026367,
      requestSceneType: 2,
      taskType: 1
    };
    const _0x3c501d = {
      name: "宝箱广告",
      businessId: 606,
      posId: 20346,
      subPageId: 100024064,
      requestSceneType: 1,
      taskType: 1
    };
    const _0x24b8a4 = {
      name: "饭补广告",
      businessId: 9362,
      posId: 24067,
      subPageId: 100026367,
      requestSceneType: 7,
      taskType: 2
    };
    const _0x284365 = {
      name: "开宝箱",
      businessId: 606,
      posId: 20346,
      subPageId: 100024064,
      requestSceneType: 1,
      taskType: 1
    };
    const _0x50b471 = {
      name: "搜索任务",
      pageId: 11014,
      businessId: 7076,
      posId: 216268,
      subPageId: 100161537,
      requestSceneType: 1,
      taskType: 1
    };
    const _0x38f518 = {
      name: "搜索任务追加",
      pageId: 11014,
      businessId: 7076,
      posId: 216268,
      subPageId: 100161537,
      requestSceneType: 7,
      taskType: 2
    };
    const _0x2a5fb6 = {
      look: _0x4c2ddb,
      look_follow: _0x501937,
      box: _0x3c501d,
      food: _0x24b8a4,
      kbox: _0x284365,
      search: _0x50b471,
      search_follow: _0x38f518
    };
    this.taskConfigs = _0x2a5fb6;
    this.taskStats = {};
    const _0x2a9cf2 = new Set(this.tasksToExecute);
    _0x2a9cf2.add("look_follow");
    _0x2a9cf2.add("search");
    _0x2a9cf2.add("search_follow");
    _0x2a9cf2.forEach(_0xc38fac => {
      if (this.taskConfigs[_0xc38fac]) {
        const _0x4430bd = {
          success: 0,
          failed: 0,
          totalReward: 0
        };
        this.taskStats[_0xc38fac] = _0x4430bd;
      }
    });
    this.lowRewardStreak = 0;
    this.lowRewardThreshold = KSLOW_REWARD_THRESHOLD;
    this.lowRewardLimit = KSLOW_REWARD_LIMIT;
    this.stopAllTasks = false;
    this.taskLimitReached = {};
    const _0x441ed9 = new Set(this.tasksToExecute);
    _0x441ed9.add("look_follow");
    _0x441ed9.add("search");
    _0x441ed9.add("search_follow");
    _0x441ed9.forEach(_0x1605dd => {
      this.taskConfigs[_0x1605dd] && (this.taskLimitReached[_0x1605dd] = false);
    });
  }
  getAccountDisplayName() {
    const _0x47e3d8 = this.remark || this.nickname || "账号" + this.index;
    if (supportsColor) {
      const _0x4faccf = "" + colors.bright + colors.cyan + "账号" + colors.reset;
      return "" + _0x4faccf + formatAccountTag(_0x47e3d8);
    }
    return "账号[" + _0x47e3d8 + "]";
  }
  async checkUdBindStatusForAccount() {
    if (!ENABLE_AUTH || !AUTH_KEY) {
      const _0x461fc8 = {
        valid: true,
        message: "未启用卡密验证"
      };
      return _0x461fc8;
    }
    if (!this.userId || !this.userId.trim()) {
      const _0x537094 = {
        valid: true,
        message: "账号UD未获取，等待获取"
      };
      return _0x537094;
    }
    try {
      const _0x4ba30a = AUTH_API_URL.replace("/auth.php", "/admin.php"),
        _0x10df27 = _0x4ba30a + "?api=check_key&key=" + encodeURIComponent(AUTH_KEY) + "&script_version=" + encodeURIComponent(SCRIPT_VERSION),
        _0x34142f = {
          timeout: 10000
        };
      const _0x3b1245 = await axios.get(_0x10df27, _0x34142f);
      if (_0x3b1245.data && _0x3b1245.data.status) {
        const _0x45bc39 = _0x3b1245.data.data || {},
          _0x141252 = _0x45bc39.ud_bind_enabled === true || _0x45bc39.ud_bind_enabled === "1" || _0x45bc39.ud_bind_enabled === 1,
          _0x2b8242 = _0x45bc39.bound_uds || [],
          _0x462b9b = this.userId.trim();
        if (!_0x141252) {
          const _0x5b823a = {
            valid: true,
            message: "UD绑定未启用"
          };
          return _0x5b823a;
        }
        if (_0x141252) {
          if (_0x2b8242.length > 0) {
            const _0x776a07 = _0x2b8242.map(_0x489b11 => String(_0x489b11).trim());
            if (!_0x776a07.includes(_0x462b9b)) {
              const _0x338ea0 = {
                valid: false,
                message: "UD绑定验证失败：当前账号UD（" + _0x462b9b + "）不在云端绑定列表中，脚本已停止运行"
              };
              return _0x338ea0;
            }
            const _0x155736 = {
              valid: true,
              message: "UD绑定验证通过"
            };
            return _0x155736;
          }
          const _0x198f8e = {
            valid: true,
            message: "等待首次UD绑定"
          };
          return _0x198f8e;
        }
      }
      const _0x2b26dc = {
        valid: true,
        message: "无法获取UD绑定状态，继续执行"
      };
      return _0x2b26dc;
    } catch (_0x10f8af) {
      const _0x471968 = {
        valid: true,
        message: "检查UD绑定状态时出错，继续执行"
      };
      return _0x471968;
    }
  }
  async checkDeviceIdBindStatus() {
    if (!ENABLE_AUTH || !AUTH_KEY) {
      const _0x170726 = {
        valid: true,
        message: "未启用卡密验证"
      };
      return _0x170726;
    }
    try {
      const _0x39bf73 = getOrCreateDeviceId(),
        _0x4a72df = AUTH_API_URL.replace("/auth.php", "/admin.php"),
        _0x12fcf8 = _0x4a72df + "?api=check_key&key=" + encodeURIComponent(AUTH_KEY) + "&script_version=" + encodeURIComponent(SCRIPT_VERSION),
        _0xa6d120 = {
          timeout: 10000
        };
      const _0x5297cb = await axios.get(_0x12fcf8, _0xa6d120);
      if (_0x5297cb.data && _0x5297cb.data.status) {
        const _0x287a94 = _0x5297cb.data.data || {},
          _0x20e5a0 = _0x287a94.device_bind_enabled === true || _0x287a94.device_bind_enabled === "1" || _0x287a94.device_bind_enabled === 1,
          _0x5b9dbd = _0x287a94.bound_device_id || null;
        if (!_0x20e5a0) {
          const _0x2ddb82 = {
            valid: true,
            message: "设备ID绑定未启用"
          };
          return _0x2ddb82;
        }
        if (_0x20e5a0) {
          if (_0x5b9dbd) {
            if (_0x39bf73 !== _0x5b9dbd) {
              const _0xd063ec = {
                valid: false,
                message: "设备ID绑定验证失败：本地设备ID（" + _0x39bf73 + "）与云端绑定的设备ID（" + _0x5b9dbd + "）不一致，脚本已停止运行"
              };
              return _0xd063ec;
            }
            const _0x287554 = {
              valid: true,
              message: "设备ID绑定验证通过"
            };
            return _0x287554;
          }
          const _0x3969db = {
            valid: true,
            message: "等待首次设备ID绑定"
          };
          return _0x3969db;
        }
      }
      const _0x12b357 = {
        valid: true,
        message: "无法获取设备ID绑定状态，继续执行"
      };
      return _0x12b357;
    } catch (_0x4618a9) {
      const _0x4553ec = {
        valid: true,
        message: "检查设备ID绑定状态时出错，继续执行"
      };
      return _0x4553ec;
    }
  }
  getTaskTotalCount(_0x56e34a) {
    switch (_0x56e34a) {
      case "look":
        return KSLOOK_COUNT;
      case "look_follow":
        return this.tasksToExecute.includes("look") ? KSLOOK_COUNT * KSFOLLOW_COUNT : 0;
      case "search":
        return KSSEARCH_COUNT;
      case "search_follow":
        return this.tasksToExecute.includes("search") ? KSSEARCH_COUNT * KSSEARCHFOLLOW_COUNT : 0;
      case "box":
        return KSBOX_COUNT;
      case "food":
        return KSFOOD_COUNT;
      case "kbox":
        return KSKBOX_COUNT;
      default:
        return 0;
    }
  }
  async checkCoinLimit() {
    try {
      const _0x72bbdd = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index);
      if (_0x72bbdd && _0x72bbdd.totalCoin) {
        const _0x237e18 = parseInt(_0x72bbdd.totalCoin);
        if (_0x237e18 >= this.coinLimit) {
          console.log("⚠️ " + this.getAccountDisplayName() + " 金币已达 " + _0x237e18 + "，超过 " + this.coinLimit + " 阈值，将停止任务");
          this.coinExceeded = true;
          this.stopAllTasks = true;
          return true;
        }
      }
      return false;
    } catch (_0x25f335) {
      console.log("❌ " + this.getAccountDisplayName() + " 金币检查异常: " + _0x25f335.message);
      return false;
    }
  }
  extractCookieInfo() {
    try {
      const _0x3ceb67 = (_0x1902a8, _0x147ff0 = "") => {
        const _0x34bccc = _0x5574f3 => {
            return _0x5574f3.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
          },
          _0xa3a329 = _0x34bccc(_0x1902a8),
          _0x31b814 = [new RegExp(_0xa3a329 + "\\s*=\\s*\"([^\"]+)\"", "i"), new RegExp(_0xa3a329 + "\\s*=\\s*([^;\\s]+)", "i"), new RegExp(_0xa3a329 + "\\s*:\\s*\"([^\"]+)\"", "i"), new RegExp(_0xa3a329 + "\\s*:\\s*([^,;\\s]+)", "i")];
        for (const _0x302870 of _0x31b814) {
          const _0x3f02c5 = this.cookie.match(_0x302870);
          if (_0x3f02c5 && _0x3f02c5[1] && _0x3f02c5[1].trim()) {
            return _0x3f02c5[1].trim();
          }
        }
        return _0x147ff0;
      };
      this.egid = _0x3ceb67("egid");
      this.did = _0x3ceb67("did") || _0x3ceb67("oDid");
      this.userId = _0x3ceb67("ud") || _0x3ceb67("userId");
      this.kuaishouApiSt = _0x3ceb67("kuaishou.api_st") || _0x3ceb67("kuaishou_api_st") || _0x3ceb67("api_st");
      this.appver = _0x3ceb67("appver", "13.7.20.10468");
      const _0x5cfe9c = [];
      if (!this.egid) {
        _0x5cfe9c.push("egid");
      }
      if (!this.did) {
        _0x5cfe9c.push("did");
      }
      if (!this.userId) {
        _0x5cfe9c.push("ud/userId");
      }
      _0x5cfe9c.length > 0 && !this.userId && console.log("⚠️ " + this.getAccountDisplayName() + " 未检测到UD（ud/userId），可能影响签名功能");
    } catch (_0x10a62a) {
      console.log("❌ " + this.getAccountDisplayName() + " 解析cookie失败: " + _0x10a62a.message);
    }
  }
  getTaskStats() {
    return this.taskStats;
  }
  printTaskStats() {
    console.log("\n📊 " + this.getAccountDisplayName() + " 任务执行统计:");
    for (const [_0x464fbd, _0x2e2f2b] of Object.entries(this.taskStats)) {
      const _0x4c0a3a = this.taskConfigs[_0x464fbd].name;
      console.log("  " + _0x4c0a3a + ": 成功" + _0x2e2f2b.success + "次, 失败" + _0x2e2f2b.failed + "次, 总奖励" + _0x2e2f2b.totalReward + "金币");
    }
  }
  async retryOperation(_0x19c068, _0x756756, _0x493d95 = 3, _0x336077 = 2000) {
    let _0x5e80f0 = 0,
      lastError = null;
    while (_0x5e80f0 < _0x493d95) {
      try {
        const _0x4cedac = await _0x19c068();
        if (_0x4cedac) {
          return _0x4cedac;
        }
        lastError = new Error(_0x756756 + " 返回空结果");
      } catch (_0x526e73) {
        lastError = _0x526e73;
      }
      _0x5e80f0++;
      _0x5e80f0 < _0x493d95 && (await new Promise(_0x9007f2 => setTimeout(_0x9007f2, _0x336077)));
    }
    return null;
  }
  async getAdInfo(_0x5bc48c, _0x1a1c3d = 0) {
    try {
      const _0x299726 = SKIP_LIVE_ADS ? SKIP_LIVE_MAX_RETRIES : 1,
        _0x2be820 = "/rest/e/reward/mixed/ad",
        _0x533ee5 = {
          encData: "|encData|",
          sign: "|sign|",
          cs: "false",
          client_key: "2ac2a76d",
          videoModelCrowdTag: "1_23",
          os: "android",
          "kuaishou.api_st": this.kuaishouApiSt,
          uQaTag: "1##swLdgl:99#ecPp:-9#cmNt:-0#cmHs:-3#cmMnsl:-0"
        };
      !this.userId;
      const _0x373851 = {
        earphoneMode: "1",
        mod: "Xiaomi(23116PN5BC)",
        appver: this.appver,
        isp: "CUCC",
        language: "zh-cn",
        ud: this.userId || "",
        did_tag: "0",
        net: "WIFI",
        kcv: "1599",
        app: "0",
        kpf: "ANDROID_PHONE",
        ver: "11.6",
        android_os: "0",
        boardPlatform: "pineapple",
        kpn: "NEBULA",
        androidApiLevel: "35",
        country_code: "cn",
        sys: "ANDROID_15",
        sw: "1080",
        sh: "2400",
        abi: "arm64",
        userRecoBit: "0"
      };
      let impExtDataString = "{}";
      if (_0x5bc48c.businessId === 7076) {
        const _0x37001f = "eyJwYWdlSWQiOiAxMTAxNCwgInN1YlBhZ2VJZCI6IDEwMDE2MTUzNywgInBvc0lkIjogMjE2MjY4LCAiYnVzaW5lc3NJZCI6IDcwNzYsICJleHRQYXJhbXMiOiAiIiwgImN1c3RvbURhdGEiOiB7ImV4aXRJbmZvIjogeyJ0b2FzdERlc2MiOiBudWxsLCAidG9hc3RJbWdVcmwiOiBudWxsfX0sICJwZW5kYW50VHlwZSI6IDEsICJkaXNwbGF5VHlwZSI6IDIsICJzaW5nbGVQYWdlSWQiOiAwLCAic2luZ2xlU3ViUGFnZUlkIjogMCwgImNoYW5uZWwiOiAwLCAiY291bnRkb3duUmVwb3J0IjogZmFsc2UsICJ0aGVtZVR5cGUiOiAwLCAibWl4ZWRBZCI6IHRydWUsICJmdWxsTWl4ZWQiOiB0cnVlLCAiYXV0b1JlcG9ydCI6IHRydWUsICJmcm9tVGFza0NlbnRlciI6IHRydWUsICJzZWFyY2hJbnNwaXJlU2NoZW1lSW5mbyI6IG51bGwsICJhbW91bnQiOiAwfQ==",
          _0xadd9b6 = {
            openH5AdCount: 0,
            sessionLookedCompletedCount: this.adaddnum,
            sessionType: _0x5bc48c.requestSceneType === 2 ? "2" : "1",
            searchKey: "短剧小说",
            triggerType: "2",
            disableReportToast: true,
            businessEnterAction: "7",
            neoParams: _0x37001f
          };
        impExtDataString = JSON.stringify(_0xadd9b6);
      }
      const _0x8a9187 = {
        appId: "kuaishou_nebula",
        name: "快手极速版",
        packageName: "com.kuaishou.nebula",
        version: this.appver,
        versionCode: -1
      };
      const _0x2d4fe0 = {
        width: 1080,
        height: 2249
      };
      const _0x4acc44 = {
        osType: 1,
        osVersion: "15",
        deviceId: this.did,
        screenSize: _0x2d4fe0,
        ftt: ""
      };
      const _0x28039a = {
        userId: this.userId || "",
        age: 0,
        gender: ""
      };
      const _0x1f2c5a = {
        pageId: _0x5bc48c.pageId || 11101,
        subPageId: _0x5bc48c.subPageId,
        action: 0,
        browseType: 3,
        impExtData: impExtDataString,
        mediaExtData: "{}"
      };
      const _0x42c143 = {
        appInfo: _0x8a9187,
        deviceInfo: _0x4acc44,
        userInfo: _0x28039a,
        impInfo: [_0x1f2c5a]
      };
      const _0x52635f = Buffer.from(JSON.stringify(_0x42c143)).toString("base64");
      let _0x44bf63 = await this.getSign(_0x52635f);
      if (!_0x44bf63) {
        console.log("❌ " + this.getAccountDisplayName() + " 获取签名失败");
        return null;
      }
      _0x533ee5.encData = _0x44bf63.encdata;
      _0x533ee5.sign = _0x44bf63.sign;
      let _0x508ae2 = await this.requestSignService({
        urlpath: _0x2be820,
        reqdata: qs.stringify(_0x533ee5) + "&" + qs.stringify(_0x373851),
        api_client_salt: this.salt
      }, "获取广告签名");
      if (!_0x508ae2) {
        console.log("❌ " + this.getAccountDisplayName() + " 获取广告签名失败");
        return null;
      }
      const _0x39ff79 = {
        ..._0x373851,
        sig: _0x508ae2.sig,
        __NS_sig3: _0x508ae2.__NS_sig3,
        __NS_xfalcon: _0x508ae2.__NS_xfalcon || "",
        __NStokensig: _0x508ae2.__NStokensig
      };
      const _0x4e00d0 = "https://api.e.kuaishou.com" + _0x2be820 + "?" + querystring.stringify(_0x39ff79),
        {
          response: _0x45f55a,
          body: _0x2d0e1e
        } = await sendRequest({
          method: "POST",
          url: _0x4e00d0,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Host: "api.e.kuaishou.com",
            "User-Agent": "kwai-android aegon/3.56.0",
            Cookie: "kuaishou_api_st=" + this.kuaishouApiSt
          },
          form: _0x533ee5,
          timeout: 30000
        }, this.proxyUrl, this.getAccountDisplayName() + " 获取广告");
      if (!_0x45f55a || !_0x2d0e1e) {
        return null;
      }
      if (_0x2d0e1e.errorMsg === "OK" && _0x2d0e1e.feeds && _0x2d0e1e.feeds[0] && _0x2d0e1e.feeds[0].ad) {
        const _0x555cf4 = _0x2d0e1e.feeds[0],
          _0x303c04 = _0x555cf4?.["ad"]?.["creativeId"] ?? _0x555cf4?.["creativeId"],
          _0x72a4eb = _0x555cf4.exp_tag || "",
          _0x3c6d47 = _0x72a4eb.split("/")[1]?.["split"]("_")?.[0] || "";
        if (!_0x303c04) {
          console.log("⚠️ " + this.getAccountDisplayName() + " 未能解析广告 creativeId");
          return null;
        }
        if (SKIP_LIVE_ADS) {
          const _0x1c4164 = _0x555cf4.ad ? {
              ..._0x555cf4.ad
            } : {
              ..._0x555cf4
            },
            _0xccab5c = _0x555cf4?.["ad"]?.["adDataV2"]?.["inspireAdInfo"]?.["adExtInfo"] ?? _0x555cf4?.["ad"]?.["adExtInfo"] ?? _0x555cf4?.["adExtInfo"] ?? "{}";
          _0x1c4164.creativeId = _0x1c4164.creativeId ?? _0x303c04;
          _0x1c4164.materialTime = _0x1c4164.materialTime ?? _0x555cf4.materialTime ?? 0;
          _0x1c4164.adExtInfo = typeof _0xccab5c === "string" ? _0xccab5c : JSON.stringify(_0xccab5c);
          if (is_live_ad(_0x1c4164)) {
            console.log("⏭️ " + this.getAccountDisplayName() + " 检测到直播广告，重试 " + (_0x1a1c3d + 1) + "/" + _0x299726);
            if (_0x1a1c3d < _0x299726 - 1) {
              return await this.getAdInfo(_0x5bc48c, _0x1a1c3d + 1);
            }
            console.log("⚠️ " + this.getAccountDisplayName() + " 多次获取直播广告，停止当前任务");
            return null;
          }
        }
        const _0x49eae1 = (_0x555cf4.caption || _0x555cf4?.["ad"]?.["caption"] || "").slice(0, 20),
          _0x36f812 = colors.bright + colors.blue;
        console.log(colorize("ℹ️", _0x36f812) + " " + this.getAccountDisplayName() + " 获取广告: " + (_0x49eae1 || "无标题"));
        const _0x5b0746 = {
          cid: _0x303c04,
          llsid: _0x3c6d47
        };
        return _0x5b0746;
      } else {
        if (_0x2d0e1e.result === 1003) {
          console.log("🚫 " + this.getAccountDisplayName() + " 账号被限制");
        } else {
          if (_0x2d0e1e.result === 20107 || _0x2d0e1e.result === 20108) {
            console.log("🚫 " + this.getAccountDisplayName() + " 任务已达上限");
          } else {
            _0x2d0e1e.result === 415 ? console.log("🚫 " + this.getAccountDisplayName() + " 签名验证失败") : console.log("⚠️ " + this.getAccountDisplayName() + " 获取广告失败: errorMsg=" + (_0x2d0e1e.errorMsg || "N/A") + ", result=" + (_0x2d0e1e.result || "N/A"));
          }
        }
      }
      return null;
    } catch (_0x40a5da) {
      return null;
    }
  }
  async generateSignature(_0x1d379b, _0x10a2b3, _0x84520c, _0x433727) {
    try {
      const _0x48940a = {
        businessId: _0x433727.businessId,
        endTime: this.endTime,
        extParams: "",
        mediaScene: "video",
        neoInfos: [{
          creativeId: _0x1d379b,
          extInfo: "",
          llsid: _0x10a2b3,
          requestSceneType: _0x433727.requestSceneType,
          taskType: _0x433727.taskType,
          watchExpId: "",
          watchStage: 0
        }],
        pageId: _0x433727.pageId || 11101,
        posId: _0x433727.posId,
        reportType: 0,
        sessionId: "",
        startTime: this.startTime,
        subPageId: _0x433727.subPageId
      };
      const _0x27e026 = JSON.stringify(_0x48940a),
        _0x491a28 = "bizStr=" + encodeURIComponent(_0x27e026) + "&cs=false&client_key=2ac2a76d&kuaishou.api_st=" + this.kuaishouApiSt,
        _0x1f3f58 = this.queryParams + "&" + _0x491a28,
        _0x4d7a1f = await this.requestSignService({
          urlpath: this.taskReportPath,
          reqdata: _0x1f3f58,
          api_client_salt: this.salt
        }, this.getAccountDisplayName() + " 生成报告签名");
      if (!_0x4d7a1f) {
        return null;
      }
      const _0x1ff05b = {
        sig: _0x4d7a1f.sig,
        sig3: _0x4d7a1f.__NS_sig3,
        sigtoken: _0x4d7a1f.__NStokensig,
        xfalcon: _0x4d7a1f.__NS_xfalcon || "",
        post: _0x491a28
      };
      return _0x1ff05b;
    } catch (_0x56296d) {
      return null;
    }
  }
  async submitReport(_0x371a4f, _0xcb6009, _0x48802a, _0x179115, _0x3263fe, _0x1c011c, _0x421ef9) {
    try {
      const _0x18a394 = "https://api.e.kuaishou.com" + this.taskReportPath + "?" + (this.queryParams + "&sig=" + _0x371a4f + "&__NS_sig3=" + _0xcb6009 + "&__NS_xfalcon=" + (_0x179115 || "") + "&__NStokensig=" + _0x48802a),
        {
          response: _0x22867f,
          body: _0x2e3327
        } = await sendRequest({
          method: "POST",
          url: _0x18a394,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            Host: "api.e.kuaishou.cn",
            "User-Agent": "kwai-android aegon/3.56.0",
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: _0x3263fe,
          timeout: 12000
        }, this.proxyUrl, "账号[" + this.nickname + "]" + (this.remark ? "（" + this.remark + "）" : "") + " 提交任务");
      if (!_0x2e3327) {
        const _0x1fbfe1 = {
          success: false,
          reward: 0
        };
        return _0x1fbfe1;
      }
      if (_0x2e3327.result === 1) {
        const _0x3e3115 = _0x2e3327.data?.["neoAmount"] || 0;
        _0x3e3115 <= this.lowRewardThreshold ? (this.lowRewardStreak++, this.did = generateKuaishouDid(), console.log("⚠️ " + this.getAccountDisplayName() + " 金币奖励(" + _0x3e3115 + ")低于阈值(" + this.lowRewardThreshold + ")，模拟下载应用提升权重，当前连续低奖励次数：" + this.lowRewardStreak + "/" + this.lowRewardLimit), this.lowRewardStreak >= this.lowRewardLimit && (console.log("🏁 " + this.getAccountDisplayName() + " 连续" + this.lowRewardLimit + "次奖励≤" + this.lowRewardThreshold + "，停止全部任务"), this.stopAllTasks = true)) : this.lowRewardStreak = 0;
        const _0x3146f6 = {
          success: true,
          reward: _0x3e3115
        };
        return _0x3146f6;
      }
      if ([20107, 20108, 1003, 415].includes(_0x2e3327.result)) {
        console.log("⚠️ " + this.getAccountDisplayName() + " " + _0x421ef9.name + " 已达上限");
        this.taskLimitReached[_0x1c011c] = true;
        const _0x4fb629 = {
          success: false,
          reward: 0
        };
        return _0x4fb629;
      }
      const _0x1be7b5 = {
        success: false,
        reward: 0
      };
      return _0x1be7b5;
    } catch (_0x2baa16) {
      const _0x556e07 = {
        success: false,
        reward: 0
      };
      return _0x556e07;
    }
  }
  async getSign(_0x17b25e) {
    const _0x220dd0 = await this.checkUdBindStatusForAccount();
    if (!_0x220dd0.valid) {
      console.log("❌ " + this.getAccountDisplayName() + " " + _0x220dd0.message);
      this.stopAllTasks = true;
      _0x220dd0.message.includes("不在云端绑定列表中") && process.exit(1);
      return null;
    }
    const _0xb4b5c1 = 3;
    for (let _0x3360c8 = 1; _0x3360c8 <= _0xb4b5c1; _0x3360c8++) {
      try {
        const _0x228642 = await getSignServiceUrl();
        if (_0x228642.error || !_0x228642.signUrl) {
          if (_0x3360c8 >= _0xb4b5c1) {
            console.log("❌ " + this.getAccountDisplayName() + " 获取签名服务地址失败: " + (_0x228642.error || "地址为空"));
            return null;
          }
          continue;
        }
        const _0x22e296 = AUTH_API_URL,
          _0x48a551 = getOrCreateDeviceId(),
          _0xc1baa3 = {
            key: AUTH_KEY,
            type: "encsign",
            data: _0x17b25e,
            ud: this.userId || "",
            script_version: SCRIPT_VERSION,
            device_id: _0x48a551
          };
        const _0x2e7ee5 = JSON.stringify(_0xc1baa3),
          _0x4ee403 = {
            "Content-Type": "application/json",
            "X-Auth-Key": AUTH_KEY
          };
        const _0x15721d = {
          method: "POST",
          url: _0x22e296,
          body: _0x2e7ee5,
          headers: _0x4ee403,
          timeout: 30000
        };
        const {
          response: _0x45c380,
          body: _0x2c17bd
        } = await sendRequest(_0x15721d, this.proxyUrl, this.getAccountDisplayName() + " encsign签名");
        if (!_0x45c380) {
          if (_0x3360c8 < _0xb4b5c1) {
            continue;
          } else {
            return null;
          }
        }
        if (!_0x2c17bd) {
          if (_0x3360c8 < _0xb4b5c1) {
            console.log("⚠️ " + this.getAccountDisplayName() + " encsign签名：响应数据为空，立即重新请求（尝试 " + _0x3360c8 + "/" + _0xb4b5c1 + "）");
            continue;
          } else {
            console.log("❌ " + this.getAccountDisplayName() + " encsign签名：响应数据为空");
            return null;
          }
        }
        let _0x3e31d0 = _0x2c17bd;
        if (typeof _0x2c17bd === "string") {
          try {
            _0x3e31d0 = JSON.parse(_0x2c17bd);
          } catch (_0x317258) {
            try {
              const _0x7634d3 = /^[A-Za-z0-9+\/]+=*$/,
                _0x39cf02 = _0x2c17bd.trim();
              if (_0x7634d3.test(_0x39cf02) && _0x39cf02.length > 20) {
                const _0x3b9a2f = Buffer.from(_0x39cf02, "base64").toString("utf8");
                _0x3e31d0 = JSON.parse(_0x3b9a2f);
              } else {
                throw _0x317258;
              }
            } catch (decodeError) {
              if (_0x3360c8 < _0xb4b5c1) {
                console.log("⚠️ " + this.getAccountDisplayName() + " encsign签名：响应格式错误（无法解析JSON），立即重新请求（尝试 " + _0x3360c8 + "/" + _0xb4b5c1 + "）");
                continue;
              } else {
                console.log("❌ " + this.getAccountDisplayName() + " encsign签名：响应格式错误（无法解析JSON）");
                return null;
              }
            }
          }
        }
        if (typeof _0x3e31d0 !== "object" || _0x3e31d0 === null) {
          if (_0x3360c8 < _0xb4b5c1) {
            console.log("⚠️ " + this.getAccountDisplayName() + " encsign签名：响应格式错误（非对象），立即重新请求（尝试 " + _0x3360c8 + "/" + _0xb4b5c1 + "）");
            continue;
          } else {
            console.log("❌ " + this.getAccountDisplayName() + " encsign签名：响应格式错误（非对象）");
            return null;
          }
        }
        if (_0x3e31d0 && _0x3e31d0.status) {
          let _0x14bbf8 = _0x3e31d0.data;
          if (typeof _0x14bbf8 === "string") {
            try {
              _0x14bbf8 = JSON.parse(_0x14bbf8);
            } catch (_0xfccc6c) {
              if (_0x3360c8 < _0xb4b5c1) {
                continue;
              } else {
                return null;
              }
            }
          }
          if (_0x14bbf8.status === false) {
            const _0x2efaa2 = _0x14bbf8.error || _0x14bbf8.message || "签名服务返回错误";
            if (_0x3360c8 < _0xb4b5c1) {
              continue;
            } else {
              console.log("❌ " + this.getAccountDisplayName() + " encsign签名失败：" + _0x2efaa2);
              return null;
            }
          }
          let _0x3c8c1a = _0x14bbf8;
          _0x14bbf8.data && typeof _0x14bbf8.data === "object" && (_0x3c8c1a = _0x14bbf8.data);
          return _0x3c8c1a;
        }
        const _0x5ccd30 = _0x3e31d0?.["message"] || _0x3e31d0?.["error"] || "签名服务失败";
        if (_0x3360c8 >= _0xb4b5c1) {
          console.log("❌ " + this.getAccountDisplayName() + " encsign签名失败：" + _0x5ccd30);
          return null;
        } else {
          continue;
        }
      } catch (_0x233603) {
        let _0x4f2d57 = _0x233603.message || "请求异常";
        if (_0x233603.response && _0x233603.response.data) {
          try {
            const _0x3963b2 = typeof _0x233603.response.data === "string" ? JSON.parse(_0x233603.response.data) : _0x233603.response.data;
            _0x3963b2 && _0x3963b2.message && (_0x4f2d57 = _0x3963b2.message);
          } catch (_0x3a4d1a) {}
        }
        if (_0x3360c8 < _0xb4b5c1) {
          console.log("⚠️ " + this.getAccountDisplayName() + " encsign请求异常，立即重新请求（尝试 " + _0x3360c8 + "/" + _0xb4b5c1 + "）: " + _0x4f2d57);
          continue;
        } else {
          console.log("❌ " + this.getAccountDisplayName() + " encsign请求异常: " + _0x4f2d57);
          return null;
        }
      }
    }
    return null;
  }
  async requestSignService(_0x2b77f0, _0x68f56d) {
    const _0x4b1864 = await this.checkDeviceIdBindStatus();
    if (!_0x4b1864.valid) {
      console.log("❌ " + this.getAccountDisplayName() + " " + _0x4b1864.message);
      this.stopAllTasks = true;
      _0x4b1864.message.includes("不一致") && (console.log("\n⚠️  设备ID本地与云端绑定不一致，脚本已停止运行！"), console.log("   请检查设备ID绑定状态或联系管理员。\n"), process.exit(1));
      return null;
    }
    const _0xfdb0ab = await this.checkUdBindStatusForAccount();
    if (!_0xfdb0ab.valid) {
      console.log("❌ " + this.getAccountDisplayName() + " " + _0xfdb0ab.message);
      this.stopAllTasks = true;
      _0xfdb0ab.message.includes("不在云端绑定列表中") && process.exit(1);
      return null;
    }
    const _0x1cb510 = 3;
    for (let _0x15ba1b = 1; _0x15ba1b <= _0x1cb510; _0x15ba1b++) {
      try {
        const _0x3316e4 = await getSignServiceUrl();
        if (_0x3316e4.error || !_0x3316e4.signUrl) {
          if (_0x15ba1b >= _0x1cb510) {
            console.log("❌ " + this.getAccountDisplayName() + " 获取签名服务地址失败: " + (_0x3316e4.error || "地址为空"));
            return null;
          }
          continue;
        }
        const _0x14fcae = AUTH_API_URL,
          _0x3c91fc = getOrCreateDeviceId(),
          _0x1356f0 = {
            key: AUTH_KEY,
            type: "nssig",
            path: _0x2b77f0.urlpath,
            data: _0x2b77f0.reqdata,
            salt: _0x2b77f0.api_client_salt,
            ud: this.userId || "",
            script_version: SCRIPT_VERSION,
            device_id: _0x3c91fc
          };
        const _0x174212 = JSON.stringify(_0x1356f0),
          _0x331dfb = {
            "Content-Type": "application/json",
            "X-Auth-Key": AUTH_KEY,
            "User-Agent": "Mozilla/5.0"
          };
        const _0x5a79fa = {
          method: "POST",
          url: _0x14fcae,
          headers: _0x331dfb,
          body: _0x174212,
          timeout: 15000
        };
        const {
          response: _0x507b3b,
          body: _0x5672ac
        } = await sendRequest(_0x5a79fa, this.proxyUrl, _0x68f56d + "（签名服务）");
        if (!_0x5672ac) {
          if (_0x15ba1b < _0x1cb510) {
            continue;
          } else {
            return null;
          }
        }
        if (!_0x5672ac.data) {
          if (_0x15ba1b < _0x1cb510) {
            continue;
          } else {
            return null;
          }
        }
        if (_0x5672ac && _0x5672ac.status) {
          let _0x55b9b3 = _0x5672ac.data;
          if (typeof _0x55b9b3 === "string") {
            try {
              _0x55b9b3 = JSON.parse(_0x55b9b3);
            } catch (_0x309b1f) {
              if (_0x15ba1b < _0x1cb510) {
                continue;
              } else {
                return null;
              }
            }
          }
          let _0x477506 = _0x55b9b3;
          _0x55b9b3.data && typeof _0x55b9b3.data === "object" && (_0x477506 = _0x55b9b3.data);
          let _0x423f60 = _0x477506.nssig3 || _0x477506.__NS_sig3,
            _0x219fdf = _0x477506.nstokensig || _0x477506.__NStokensig,
            _0x282cf0 = _0x477506.nssig4 || _0x477506.__NS_xfalcon || "",
            _0x29d439 = _0x477506.sig;
          const _0x2aed6d = {
            __NS_sig3: _0x423f60,
            __NStokensig: _0x219fdf,
            sig: _0x29d439,
            __NS_xfalcon: _0x282cf0
          };
          return _0x2aed6d;
        }
        const _0x1ef85a = _0x5672ac?.["message"] || _0x5672ac?.["error"] || "签名服务失败";
        if (_0x15ba1b >= _0x1cb510) {
          console.log("❌ " + this.getAccountDisplayName() + " nssig签名失败：" + _0x1ef85a);
          return null;
        } else {
          continue;
        }
      } catch (_0x1664ed) {
        if (_0x15ba1b < _0x1cb510) {
          continue;
        } else {
          return null;
        }
      }
    }
    return null;
  }
  async executeTask(_0x5df172) {
    if (ENABLE_AUTH && !_0x217086.isValid) {
      console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务");
      this.stopAllTasks = true;
      return false;
    }
    if (!this.tasksToExecute.includes(_0x5df172)) {
      return false;
    }
    const _0x548010 = this.taskConfigs[_0x5df172];
    if (!_0x548010) {
      console.log("❌ " + this.getAccountDisplayName() + " 未知任务: " + _0x5df172);
      return false;
    }
    if (this.taskLimitReached[_0x5df172]) {
      return false;
    }
    try {
      const _0x2d38ce = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index),
        _0x3f0d61 = _0x2d38ce?.["totalCoin"] || 0,
        _0xc617b0 = await this.retryOperation(() => this.getAdInfo(_0x548010), "获取" + _0x548010.name + "信息", 3);
      if (!_0xc617b0) {
        this.taskStats[_0x5df172].failed++;
        return false;
      }
      const _0x2990aa = (Math.floor(Math.random() * (KSWATCH_AD_TIME_MAX - KSWATCH_AD_TIME_MIN + 1)) + KSWATCH_AD_TIME_MIN) * 1000;
      await new Promise(_0x1a2486 => setTimeout(_0x1a2486, _0x2990aa));
      const _0x5ec304 = await this.generateSignature(_0xc617b0.cid, _0xc617b0.llsid, _0x5df172, _0x548010);
      if (!_0x5ec304) {
        this.taskStats[_0x5df172].failed++;
        return false;
      }
      const _0x266899 = await this.retryOperation(() => this.submitReport(_0x5ec304.sig, _0x5ec304.sig3, _0x5ec304.sigtoken, _0x5ec304.xfalcon || "", _0x5ec304.post, _0x5df172, _0x548010), "提交" + _0x548010.name + "报告", 3);
      if (_0x266899?.["success"]) {
        this.taskStats[_0x5df172].success++;
        this.taskStats[_0x5df172].totalReward += _0x266899.reward || 0;
        const _0x16612b = await getAccountBasicInfo(this.cookie, this.proxyUrl, this.index),
          _0x1dd9b0 = _0x16612b?.["totalCoin"] || _0x3f0d61,
          _0xde50ac = _0x266899.reward || 0,
          _0x5a61a3 = this.remark || this.nickname || "备注";
        let _0xe9bb4e = "获取到广告",
          _0x1b6b1e = colors.bright + colors.cyan;
        if (_0x5df172 === "kbox") {
          _0xe9bb4e = "获取到宝箱";
          _0x1b6b1e = colors.bright + colors.magenta;
        } else {
          if (_0x5df172 === "box") {
            _0xe9bb4e = "获取到宝箱广告";
            _0x1b6b1e = colors.bright + colors.blue;
          } else {
            if (_0x5df172 === "food") {
              _0xe9bb4e = "获取到饭补广告";
              _0x1b6b1e = colors.bright + colors.green;
            } else {
              if (_0x5df172 === "look_follow") {
                _0xe9bb4e = "获取追加广告";
                _0x1b6b1e = colors.bright + colors.yellow;
              } else {
                if (_0x5df172 === "search_follow") {
                  _0xe9bb4e = "获取到搜索追加广告";
                  _0x1b6b1e = colors.bright + colors.yellow;
                } else {
                  if (_0x5df172 === "look") {
                    _0xe9bb4e = "获取到广告";
                    _0x1b6b1e = colors.bright + colors.cyan;
                  } else {
                    _0x5df172 === "search" && (_0xe9bb4e = "获取到搜索广告", _0x1b6b1e = colors.bright + colors.cyan);
                  }
                }
              }
            }
          }
        }
        const _0x1bc25f = this.taskStats[_0x5df172].success,
          _0x5a38cd = this.getTaskTotalCount(_0x5df172),
          _0x21005a = _0xde50ac >= 100 ? "" + colors.bright + colors.red + "💰[高额奖励]" + colors.reset : "" + colors.bright + colors.green + "💰[奖励]" + colors.reset,
          _0x9c85da = formatAccountTag(_0x5a61a3),
          _0x4857c2 = colorize(_0xe9bb4e, _0x1b6b1e);
        console.log(_0x21005a + " " + _0x9c85da + " " + _0x4857c2 + "（第" + _0x1bc25f + "/" + _0x5a38cd + "次）==>" + formatReward(_0xde50ac) + "金币 —— 当前金币 " + formatCoin(_0x1dd9b0));
        return true;
      }
      this.taskStats[_0x5df172].failed++;
      return false;
    } catch (_0x4ced87) {
      this.taskStats[_0x5df172].failed++;
      return false;
    }
  }
  async executeAllTasksByPriority() {
    if (ENABLE_AUTH && !_0x217086.isValid) {
      console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务");
      this.stopAllTasks = true;
      return {};
    }
    const _0xcf3a16 = _0x471846 => this.tasksToExecute.includes(_0x471846);
    if (_0xcf3a16("look") && !this.taskLimitReached.look) {
      for (let _0x42d0e7 = 0; _0x42d0e7 < KSLOOK_COUNT; _0x42d0e7++) {
        if (this.stopAllTasks || this.taskLimitReached.look || ENABLE_AUTH && !_0x217086.isValid) {
          ENABLE_AUTH && !_0x217086.isValid && (console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务"), this.stopAllTasks = true);
          break;
        }
        const _0x4996be = await this.executeTask("look");
        if (_0x4996be && _0xcf3a16("look_follow") && !this.stopAllTasks && !this.taskLimitReached.look_follow && KSFOLLOW_COUNT > 0) {
          const _0x550a80 = (Math.floor(Math.random() * (KSPRE_LOOK_FOLLOW_WAIT_MAX - KSPRE_LOOK_FOLLOW_WAIT_MIN + 1)) + KSPRE_LOOK_FOLLOW_WAIT_MIN) * 1000;
          console.log("⏱ " + this.getAccountDisplayName() + " look→look_follow 等待 " + Math.round(_0x550a80 / 1000) + " 秒");
          await new Promise(_0x4e12dc => setTimeout(_0x4e12dc, _0x550a80));
          for (let _0x497450 = 0; _0x497450 < KSFOLLOW_COUNT; _0x497450++) {
            if (this.stopAllTasks || this.taskLimitReached.look_follow) {
              break;
            }
            await this.executeTask("look_follow");
            if (_0x497450 < KSFOLLOW_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.look_follow) {
              const _0x328ea4 = (Math.floor(Math.random() * (KSBETWEEN_LOOK_FOLLOW_WAIT_MAX - KSBETWEEN_LOOK_FOLLOW_WAIT_MIN + 1)) + KSBETWEEN_LOOK_FOLLOW_WAIT_MIN) * 1000;
              console.log("⏱ " + this.getAccountDisplayName() + " look_follow 间隔 等待 " + Math.round(_0x328ea4 / 1000) + " 秒");
              await new Promise(_0x11bb92 => setTimeout(_0x11bb92, _0x328ea4));
            }
          }
        }
        if (_0x42d0e7 < KSLOOK_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.look) {
          const _0x157a02 = (Math.floor(Math.random() * (KSROUND_END_WAIT_MAX - KSROUND_END_WAIT_MIN + 1)) + KSROUND_END_WAIT_MIN) * 1000;
          console.log("⏱ " + this.getAccountDisplayName() + " look 间隔 等待 " + Math.round(_0x157a02 / 1000) + " 秒");
          await new Promise(_0x171448 => setTimeout(_0x171448, _0x157a02));
        }
      }
      if (!this.stopAllTasks) {
        const _0x53e7f8 = (Math.floor(Math.random() * (KSTASK_SWITCH_WAIT_MAX - KSTASK_SWITCH_WAIT_MIN + 1)) + KSTASK_SWITCH_WAIT_MIN) * 1000;
        console.log("⏱ " + this.getAccountDisplayName() + " 任务切换 等待 " + Math.round(_0x53e7f8 / 1000) + " 秒");
        await new Promise(_0xf496a5 => setTimeout(_0xf496a5, _0x53e7f8));
      }
    }
    if (_0xcf3a16("search") && !this.taskLimitReached.search) {
      for (let _0xe70dbb = 0; _0xe70dbb < KSSEARCH_COUNT; _0xe70dbb++) {
        if (this.stopAllTasks || this.taskLimitReached.search || ENABLE_AUTH && !_0x217086.isValid) {
          ENABLE_AUTH && !_0x217086.isValid && (console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务"), this.stopAllTasks = true);
          break;
        }
        const _0x5bd3fd = await this.executeTask("search");
        if (_0x5bd3fd && _0xcf3a16("search_follow") && !this.stopAllTasks && !this.taskLimitReached.search_follow && KSSEARCHFOLLOW_COUNT > 0) {
          const _0x34e7f9 = (Math.floor(Math.random() * (KSPRE_SEARCH_FOLLOW_WAIT_MAX - KSPRE_SEARCH_FOLLOW_WAIT_MIN + 1)) + KSPRE_SEARCH_FOLLOW_WAIT_MIN) * 1000;
          console.log("⏱ " + this.getAccountDisplayName() + " search→search_follow 等待 " + Math.round(_0x34e7f9 / 1000) + " 秒");
          await new Promise(_0x3fa97f => setTimeout(_0x3fa97f, _0x34e7f9));
          for (let _0x3a5464 = 0; _0x3a5464 < KSSEARCHFOLLOW_COUNT; _0x3a5464++) {
            if (this.stopAllTasks || this.taskLimitReached.search_follow) {
              break;
            }
            this.adaddnum++;
            await this.executeTask("search_follow");
            this.adaddnum = 0;
            if (_0x3a5464 < KSSEARCHFOLLOW_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.search_follow) {
              const _0x317a2f = (Math.floor(Math.random() * (KSBETWEEN_SEARCH_FOLLOW_WAIT_MAX - KSBETWEEN_SEARCH_FOLLOW_WAIT_MIN + 1)) + KSBETWEEN_SEARCH_FOLLOW_WAIT_MIN) * 1000;
              console.log("⏱ " + this.getAccountDisplayName() + " search_follow 间隔 等待 " + Math.round(_0x317a2f / 1000) + " 秒");
              await new Promise(_0x560370 => setTimeout(_0x560370, _0x317a2f));
            }
          }
        }
        if (_0xe70dbb < KSSEARCH_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.search) {
          const _0x5e2c89 = (Math.floor(Math.random() * (KSROUND_END_WAIT_MAX - KSROUND_END_WAIT_MIN + 1)) + KSROUND_END_WAIT_MIN) * 1000;
          console.log("⏱ " + this.getAccountDisplayName() + " search 间隔 等待 " + Math.round(_0x5e2c89 / 1000) + " 秒");
          await new Promise(_0x403fb1 => setTimeout(_0x403fb1, _0x5e2c89));
        }
      }
      if (!this.stopAllTasks) {
        const _0x9b5169 = (Math.floor(Math.random() * (KSTASK_SWITCH_WAIT_MAX - KSTASK_SWITCH_WAIT_MIN + 1)) + KSTASK_SWITCH_WAIT_MIN) * 1000;
        console.log("⏱ " + this.getAccountDisplayName() + " 任务切换 等待 " + Math.round(_0x9b5169 / 1000) + " 秒");
        await new Promise(_0x4167d1 => setTimeout(_0x4167d1, _0x9b5169));
      }
    }
    if (_0xcf3a16("box") && !this.taskLimitReached.box) {
      for (let _0x1608fa = 0; _0x1608fa < KSBOX_COUNT; _0x1608fa++) {
        if (this.stopAllTasks || this.taskLimitReached.box || ENABLE_AUTH && !_0x217086.isValid) {
          ENABLE_AUTH && !_0x217086.isValid && (console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务"), this.stopAllTasks = true);
          break;
        }
        await this.executeTask("box");
        if (_0x1608fa < KSBOX_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.box) {
          const _0x13f8d0 = (Math.floor(Math.random() * (KSTASK_SWITCH_WAIT_MAX - KSTASK_SWITCH_WAIT_MIN + 1)) + KSTASK_SWITCH_WAIT_MIN) * 1000;
          console.log("⏱ " + this.getAccountDisplayName() + " box 间隔 等待 " + Math.round(_0x13f8d0 / 1000) + " 秒");
          await new Promise(_0x2898b5 => setTimeout(_0x2898b5, _0x13f8d0));
        }
      }
      if (!this.stopAllTasks) {
        const _0x221597 = (Math.floor(Math.random() * (KSTASK_SWITCH_WAIT_MAX - KSTASK_SWITCH_WAIT_MIN + 1)) + KSTASK_SWITCH_WAIT_MIN) * 1000;
        console.log("⏱ " + this.getAccountDisplayName() + " 任务切换 等待 " + Math.round(_0x221597 / 1000) + " 秒");
        await new Promise(_0x236a68 => setTimeout(_0x236a68, _0x221597));
      }
    }
    if (_0xcf3a16("food") && !this.taskLimitReached.food) {
      for (let _0x19bfaf = 0; _0x19bfaf < KSFOOD_COUNT; _0x19bfaf++) {
        if (this.stopAllTasks || this.taskLimitReached.food || ENABLE_AUTH && !_0x217086.isValid) {
          ENABLE_AUTH && !_0x217086.isValid && (console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务"), this.stopAllTasks = true);
          break;
        }
        await this.executeTask("food");
        if (_0x19bfaf < KSFOOD_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.food) {
          const _0x18fe48 = (Math.floor(Math.random() * (KSTASK_SWITCH_WAIT_MAX - KSTASK_SWITCH_WAIT_MIN + 1)) + KSTASK_SWITCH_WAIT_MIN) * 1000;
          console.log("⏱ " + this.getAccountDisplayName() + " food 间隔 等待 " + Math.round(_0x18fe48 / 1000) + " 秒");
          await new Promise(_0x1fa1c1 => setTimeout(_0x1fa1c1, _0x18fe48));
        }
      }
      if (!this.stopAllTasks) {
        const _0x530c20 = (Math.floor(Math.random() * (KSTASK_SWITCH_WAIT_MAX - KSTASK_SWITCH_WAIT_MIN + 1)) + KSTASK_SWITCH_WAIT_MIN) * 1000;
        console.log("⏱ " + this.getAccountDisplayName() + " 任务切换 等待 " + Math.round(_0x530c20 / 1000) + " 秒");
        await new Promise(_0x534ec4 => setTimeout(_0x534ec4, _0x530c20));
      }
    }
    if (_0xcf3a16("kbox") && !this.taskLimitReached.kbox) {
      for (let _0x4dd53c = 0; _0x4dd53c < KSKBOX_COUNT; _0x4dd53c++) {
        if (this.stopAllTasks || this.taskLimitReached.kbox || ENABLE_AUTH && !_0x217086.isValid) {
          ENABLE_AUTH && !_0x217086.isValid && (console.log("❌ " + this.getAccountDisplayName() + " 卡密验证失败，停止执行任务"), this.stopAllTasks = true);
          break;
        }
        await this.executeTask("kbox");
        if (_0x4dd53c < KSKBOX_COUNT - 1 && !this.stopAllTasks && !this.taskLimitReached.kbox) {
          const _0x38d689 = (Math.floor(Math.random() * (KSTASK_SWITCH_WAIT_MAX - KSTASK_SWITCH_WAIT_MIN + 1)) + KSTASK_SWITCH_WAIT_MIN) * 1000;
          console.log("⏱ " + this.getAccountDisplayName() + " kbox 间隔 等待 " + Math.round(_0x38d689 / 1000) + " 秒");
          await new Promise(_0x523df0 => setTimeout(_0x523df0, _0x38d689));
        }
      }
    }
    return {};
  }
}
function parseAccountConfig(configString) {
  const _0x1f34a0 = String(configString || "").trim();
  if (!_0x1f34a0) {
    return null;
  }
  let _0x79fd5e = "";
  let _0x34f3d2 = "",
    _0x4c6408 = "",
    _0x469544 = null;
  const _0x16ebf0 = _0x1f34a0.includes("#") ? "#" : _0x1f34a0.includes("@") ? "@" : null;
  let _0x443977 = _0x16ebf0 ? _0x1f34a0.split(_0x16ebf0) : [_0x1f34a0];
  if (_0x443977.length < 2) {
    const _0x18fbbd = {
      remark: "",
      salt: "",
      cookie: _0x1f34a0,
      proxyUrl: null
    };
    return _0x18fbbd;
  }
  if (_0x443977.length === 2) {
    _0x34f3d2 = _0x443977[0];
    _0x4c6408 = _0x443977[1];
  } else {
    if (_0x443977.length === 3) {
      /^socks5:\/\//i.test(_0x443977[2]) || _0x443977[2].includes("|") ? (_0x34f3d2 = _0x443977[0], _0x4c6408 = _0x443977[1], _0x469544 = _0x443977[2]) : (_0x79fd5e = _0x443977[0], _0x34f3d2 = _0x443977[1], _0x4c6408 = _0x443977[2]);
    } else {
      _0x443977.length >= 4 && (_0x79fd5e = _0x443977[0], _0x34f3d2 = _0x443977[1], _0x4c6408 = _0x443977.slice(2, _0x443977.length - 1).join(_0x16ebf0 || "#"), _0x469544 = _0x443977[_0x443977.length - 1]);
    }
  }
  if (_0x469544) {
    if (_0x469544 === "0" || _0x469544.toLowerCase() === "none") {
      _0x469544 = null;
    } else {
      if (_0x469544.includes("|")) {
        const _0x154a00 = _0x469544.split("|");
        if (_0x154a00.length >= 2) {
          const [_0x3e8fe1, _0x118244, _0x28878f = "", _0x2e1b58 = ""] = _0x154a00.map(_0x469ac9 => String(_0x469ac9 || "").trim());
          if (_0x3e8fe1 && _0x118244) {
            const _0x3cf2fe = _0x28878f || _0x2e1b58 ? encodeURIComponent(_0x28878f) + ":" + encodeURIComponent(_0x2e1b58) + "@" : "";
            _0x469544 = "socks5://" + _0x3cf2fe + _0x3e8fe1 + ":" + _0x118244;
          } else {
            console.log("⚠️ 代理格式缺少IP或端口，忽略：" + _0x469544);
            _0x469544 = null;
          }
        } else {
          console.log("⚠️ 代理格式错误，忽略：" + _0x469544);
          _0x469544 = null;
        }
      }
    }
    if (_0x469544 && /^socks5:\/\//i.test(_0x469544)) {
      try {
        new URL(_0x469544);
      } catch (_0x2bfd84) {
        console.log("❌ 代理URL格式错误: " + _0x469544);
        _0x469544 = null;
      }
    } else {
      _0x469544 && (console.log("⚠️ 代理字段不是 socks5:// URL，忽略：" + _0x469544), _0x469544 = null);
    }
  }
  const _0xb333c4 = {
    remark: _0x79fd5e || "",
    salt: _0x4c6408,
    cookie: _0x34f3d2,
    proxyUrl: _0x469544
  };
  return _0xb333c4;
}
function loadAccountsFromEnv() {
  const _0x28d69e = getAccountConfigsFromEnv(),
    _0x2b35e5 = [];
  for (const configString of _0x28d69e) {
    const _0x1eda0b = parseAccountConfig(configString);
    _0x1eda0b ? _0x2b35e5.push(_0x1eda0b) : console.log("账号格式错误：" + configString);
  }
  _0x2b35e5.forEach((_0x2cf24c, _0x267359) => {
    _0x2cf24c.index = _0x267359 + 1;
  });
  return _0x2b35e5;
}
async function concurrentExecute(_0x1392d9, _0x2f7877, processor) {
  const _0x74c61c = new Array(_0x1392d9.length);
  let _0x3fac89 = 0;
  async function _0x441688() {
    while (true) {
      const _0x49872a = _0x3fac89++;
      if (_0x49872a >= _0x1392d9.length) {
        return;
      }
      const _0x7f716a = _0x1392d9[_0x49872a];
      try {
        _0x74c61c[_0x49872a] = await processor(_0x7f716a, _0x49872a);
      } catch (_0x1ebc3b) {
        console.log("并发执行异常（index=" + (_0x49872a + 1) + "）：" + _0x1ebc3b.message);
        _0x74c61c[_0x49872a] = null;
      }
    }
  }
  const _0x5b0208 = Array.from({
    length: Math.min(_0x2f7877, _0x1392d9.length)
  }, _0x441688);
  await Promise.all(_0x5b0208);
  return _0x74c61c;
}
function getAccountDisplayName(_0x9f1ec1, _0x501326, _0x1d2e0c) {
  const _0x437c9c = "账号[" + (_0x501326 || _0x9f1ec1) + "]" + (_0x1d2e0c ? "（" + _0x1d2e0c + "）" : "");
  return "" + colors.bright + colors.cyan + _0x437c9c + colors.reset;
}
async function processAccount(_0x42ff33) {
  if (_0x42ff33.proxyUrl) {
    const _0xec6108 = getAccountDisplayName(_0x42ff33.index, null, _0x42ff33.remark),
      _0x190a9e = await testProxyConnectivity(_0x42ff33.proxyUrl, _0xec6108);
    console.log("  - " + (_0x190a9e.ok ? "✅ 代理验证通过" : "❌ 代理验证失败") + ": " + _0x190a9e.msg);
    if (_0x190a9e.ok && _0x190a9e.ip && _0x190a9e.ip !== "localhost") {
      usedProxies.has(_0x190a9e.ip) ? console.log("⚠️ 存在相同代理IP（" + _0x190a9e.ip + "），继续执行其余账号...") : usedProxies.add(_0x190a9e.ip);
      console.log("🌐 " + _0xec6108 + " 使用代理: " + _0x42ff33.proxyUrl);
    } else {
      if (!_0x190a9e.ok) {
        console.log("❌ " + _0xec6108 + " 代理测试失败，跳过该账号");
        const _0x3950cb = {
          index: _0x42ff33.index,
          remark: _0x42ff33.remark || "无备注",
          nickname: "账号" + _0x42ff33.index,
          initialCoin: 0,
          finalCoin: 0,
          coinChange: 0,
          initialCash: 0,
          finalCash: 0,
          cashChange: 0,
          error: "代理测试失败: " + _0x190a9e.msg,
          skipped: true
        };
        return _0x3950cb;
      }
    }
  } else {
    const _0x4c17f3 = getAccountDisplayName(_0x42ff33.index, null, _0x42ff33.remark);
    console.log("🌐 " + _0x4c17f3 + " 未配置代理，走直连");
  }
  const _0x32b10b = getAccountDisplayName(_0x42ff33.index, null, _0x42ff33.remark);
  console.log("🔍 " + _0x32b10b + " 获取账号信息中...");
  let _0x15d2c5 = await getAccountBasicInfo(_0x42ff33.cookie, _0x42ff33.proxyUrl, _0x42ff33.index),
    _0x11c566 = _0x15d2c5?.["nickname"] || "账号" + _0x42ff33.index;
  if (_0x15d2c5) {
    const _0x2f9a09 = _0x15d2c5.totalCoin != null ? _0x15d2c5.totalCoin : "未知",
      _0x4f3583 = _0x15d2c5.allCash != null ? _0x15d2c5.allCash : "未知",
      _0x55edb = getAccountDisplayName(_0x42ff33.index, _0x11c566, _0x42ff33.remark),
      _0x3e464f = _0x15d2c5.ud ? "，UD: " + _0x15d2c5.ud : "";
    supportsColor ? console.log("✅ " + _0x55edb + " 登录成功，💰 当前金币: " + formatCoin(_0x2f9a09) + "，💸 当前余额: " + colorize(_0x4f3583, colors.bright + colors.yellow) + _0x3e464f) : console.log("✅ " + _0x55edb + " 登录成功，💰 当前金币: " + _0x2f9a09 + "，💸 当前余额: " + _0x4f3583 + _0x3e464f);
  } else {
    const _0x106fc5 = getAccountDisplayName(_0x42ff33.index, _0x11c566, _0x42ff33.remark);
    console.log("❌ " + _0x106fc5 + " 基本信息获取失败，但仍继续执行任务");
  }
  const _0x6e7381 = _0x15d2c5?.["ud"] || null,
    _0x11103a = {
      ..._0x42ff33,
      nickname: _0x11c566,
      tasksToExecute: tasksToExecute,
      udFromLogin: _0x6e7381
    };
  const _0x385a6f = new KuaishouAdTask(_0x11103a);
  if (_0x15d2c5) {
    await _0x385a6f.checkCoinLimit();
    if (_0x385a6f.coinExceeded) {
      console.log("⚠️ " + _0x385a6f.getAccountDisplayName() + " 初始金币已超过阈值，不执行任务");
      const _0x41625b = await getAccountBasicInfo(_0x42ff33.cookie, _0x42ff33.proxyUrl, _0x42ff33.index),
        _0x27eb6e = _0x15d2c5?.["totalCoin"] || 0,
        _0x105d63 = _0x41625b?.["totalCoin"] || 0,
        _0x7ae3f8 = _0x105d63 - _0x27eb6e,
        _0x344e19 = _0x15d2c5?.["allCash"] || 0,
        _0x35154b = _0x41625b?.["allCash"] || 0,
        _0x594c96 = _0x35154b - _0x344e19;
      return {
        index: _0x42ff33.index,
        remark: _0x42ff33.remark || "无备注",
        nickname: _0x11c566,
        initialCoin: _0x27eb6e,
        finalCoin: _0x105d63,
        coinChange: _0x7ae3f8,
        initialCash: _0x344e19,
        finalCash: _0x35154b,
        cashChange: _0x594c96,
        stats: _0x385a6f.getTaskStats(),
        coinLimitExceeded: true
      };
    }
  }
  await _0x385a6f.executeAllTasksByPriority();
  const _0x2d8ff2 = await getAccountBasicInfo(_0x42ff33.cookie, _0x42ff33.proxyUrl, _0x42ff33.index),
    _0x38f30c = _0x15d2c5?.["totalCoin"] || 0,
    _0x2d0a6f = _0x2d8ff2?.["totalCoin"] || 0,
    _0x32545e = _0x2d0a6f - _0x38f30c,
    _0x48b5aa = _0x15d2c5?.["allCash"] || 0,
    _0x3f170d = _0x2d8ff2?.["allCash"] || 0,
    _0x5737dc = _0x3f170d - _0x48b5aa;
  _0x385a6f.printTaskStats();
  return {
    index: _0x42ff33.index,
    remark: _0x42ff33.remark || "无备注",
    nickname: _0x11c566,
    initialCoin: _0x38f30c,
    finalCoin: _0x2d0a6f,
    coinChange: _0x32545e,
    initialCash: _0x48b5aa,
    finalCash: _0x3f170d,
    cashChange: _0x5737dc,
    stats: _0x385a6f.getTaskStats(),
    coinLimitExceeded: _0x385a6f.coinExceeded,
    infoFetchFailed: !_0x15d2c5
  };
}
function printAccountsSummary(_0x20551c) {
  if (!_0x20551c.length) {
    console.log("\n没有可显示的账号信息。");
    return;
  }
  const _0x4a8660 = _0x20551c.reduce((_0x4bf49f, _0x180745) => {
    return _0x4bf49f + (parseInt(_0x180745.initialCoin) || 0);
  }, 0);
  const _0x55d831 = _0x20551c.reduce((_0x189de1, _0x2e6d01) => {
      return _0x189de1 + (parseInt(_0x2e6d01.finalCoin) || 0);
    }, 0),
    _0x219d45 = _0x55d831 - _0x4a8660,
    _0x39a6ed = _0x20551c.reduce((_0x427f49, _0x432a25) => {
      return _0x427f49 + (parseFloat(_0x432a25.initialCash) || 0);
    }, 0),
    _0x5208be = _0x20551c.reduce((_0x362fc4, _0x1ba352) => {
      return _0x362fc4 + (parseFloat(_0x1ba352.finalCash) || 0);
    }, 0),
    _0x858b37 = _0x5208be - _0x39a6ed;
  let _0x52ec00 = 0,
    _0xfa9e9 = 0,
    _0x1ba402 = 0;
  _0x20551c.forEach(_0x35deb7 => {
    _0x35deb7.stats && Object.values(_0x35deb7.stats).forEach(_0x59c426 => {
      _0x52ec00 += _0x59c426.success + _0x59c426.failed;
      _0xfa9e9 += _0x59c426.success;
      _0x1ba402 += _0x59c426.totalReward;
    });
  });
  const _0x4a7060 = _0x52ec00 > 0 ? (_0xfa9e9 / _0x52ec00 * 100).toFixed(1) : "0.0",
    _0x2b36a5 = _0x20551c.filter(_0x4a2634 => _0x4a2634.skipped).length;
  console.log("\n\n" + "=".repeat(80));
  console.log("|" + centerAlign("      快手养号任务执行结果汇总表      ", 78) + "|");
  console.log("=".repeat(80));
  console.log("|" + ("总账号数: " + _0x20551c.length).padEnd(22) + ("跳过账号: " + _0x2b36a5).padEnd(22) + ("总任务数: " + _0x52ec00).padEnd(22) + ("任务成功率: " + _0x4a7060 + "%").padEnd(10) + "|");
  console.log("|" + ("总金币变化: " + _0x219d45).padEnd(26) + ("总金币奖励: " + _0x1ba402).padEnd(26) + ("总余额变化: " + _0x858b37.toFixed(2)).padEnd(24) + "|");
  console.log("-".repeat(80));
  const _0xf368be = ["序号", "备注", "账号昵称", "初始金币", "最终金币", "金币变化", "初始余额", "最终余额", "余额变化", "状态"],
    _0x1e13f0 = [6, 16, 16, 12, 12, 12, 12, 12, 12, 10];
  let _0x421b6a = "|";
  _0xf368be.forEach((_0x261414, _0x4ba215) => {
    _0x421b6a += centerAlign(_0x261414, _0x1e13f0[_0x4ba215]) + "|";
  });
  console.log(_0x421b6a);
  let _0x24ac22 = "|";
  _0x1e13f0.forEach(_0x37c370 => {
    _0x24ac22 += "-".repeat(_0x37c370) + "|";
  });
  console.log(_0x24ac22);
  _0x20551c.forEach(_0x41b61b => {
    let _0x4cd026 = "|";
    _0x4cd026 += centerAlign(_0x41b61b.index, _0x1e13f0[0]) + "|";
    _0x4cd026 += centerAlign(_0x41b61b.remark, _0x1e13f0[1]) + "|";
    let _0x107d3e = _0x41b61b.nickname || "-";
    if (_0x41b61b.skipped) {
      _0x107d3e += " ❌";
    } else {
      if (_0x41b61b.coinLimitExceeded) {
        _0x107d3e += " ⚠️";
      } else {
        _0x41b61b.infoFetchFailed && (_0x107d3e += " 🔶");
      }
    }
    _0x4cd026 += centerAlign(_0x107d3e.substring(0, _0x1e13f0[2] - 2), _0x1e13f0[2]) + "|";
    _0x4cd026 += centerAlign(_0x41b61b.initialCoin, _0x1e13f0[3]) + "|";
    _0x4cd026 += centerAlign(_0x41b61b.finalCoin, _0x1e13f0[4]) + "|";
    const _0x5a44d3 = _0x41b61b.coinChange >= 0 ? "+" + _0x41b61b.coinChange : _0x41b61b.coinChange;
    _0x4cd026 += centerAlign(_0x5a44d3, _0x1e13f0[5]) + "|";
    _0x4cd026 += centerAlign(_0x41b61b.initialCash, _0x1e13f0[6]) + "|";
    _0x4cd026 += centerAlign(_0x41b61b.finalCash, _0x1e13f0[7]) + "|";
    const _0x332ce3 = _0x41b61b.cashChange >= 0 ? "+" + _0x41b61b.cashChange.toFixed(2) : _0x41b61b.cashChange.toFixed(2);
    _0x4cd026 += centerAlign(_0x332ce3, _0x1e13f0[8]) + "|";
    let _0x3c6904 = "完成";
    if (_0x41b61b.skipped) {
      _0x3c6904 = "跳过";
    } else {
      if (_0x41b61b.coinLimitExceeded) {
        _0x3c6904 = "超限";
      } else {
        _0x41b61b.infoFetchFailed && (_0x3c6904 = "无信息");
      }
    }
    _0x4cd026 += centerAlign(_0x3c6904, _0x1e13f0[9]) + "|";
    console.log(_0x4cd026);
  });
  console.log("=".repeat(80));
  console.log("|" + centerAlign("      任务执行完成，请查看详细结果      ", 78) + "|");
  console.log("=".repeat(80));
}
async function getSignServiceUrl() {
  if (!ENABLE_AUTH || !AUTH_KEY) {
    const _0x5d87e = {
      signUrl: null,
      error: "未设置卡密"
    };
    return _0x5d87e;
  }
  try {
    const _0x4be5de = getOrCreateDeviceId(),
      _0x365f14 = {
        key: AUTH_KEY,
        action: "get_sign_url",
        script_version: SCRIPT_VERSION,
        device_id: _0x4be5de
      };
    const _0x8f9c7d = {
      "X-Auth-Key": AUTH_KEY,
      "Content-Type": "application/json"
    };
    const _0x5266c0 = await axios.post(AUTH_API_URL, _0x365f14, {
      timeout: 10000,
      headers: _0x8f9c7d,
      validateStatus: function (_0x279e4d) {
        return _0x279e4d >= 200 && _0x279e4d < 600;
      }
    });
    if (_0x5266c0 && _0x5266c0.data) {
      let _0x3979a0 = _0x5266c0.data;
      if (typeof _0x3979a0 === "string") {
        try {
          _0x3979a0 = JSON.parse(_0x3979a0);
        } catch (_0x4d40e0) {
          const _0x439994 = {
            signUrl: null,
            error: "响应格式错误"
          };
          return _0x439994;
        }
      }
      if (_0x3979a0.status === true) {
        const _0x1ca01e = _0x3979a0.data?.["sign_url"] || null;
        if (!_0x1ca01e) {
          const _0x3f23d6 = {
            signUrl: null,
            error: "签名服务地址为空"
          };
          return _0x3f23d6;
        }
        const _0x58f829 = {
          signUrl: _0x1ca01e,
          error: null
        };
        return _0x58f829;
      } else {
        const _0x5f17f2 = _0x3979a0.message || _0x3979a0.error || "获取签名服务地址失败",
          _0x3e11fa = {
            signUrl: null,
            error: _0x5f17f2
          };
        return _0x3e11fa;
      }
    } else {
      const _0x3aa112 = {
        signUrl: null,
        error: "服务器响应为空"
      };
      return _0x3aa112;
    }
  } catch (_0x35ba6e) {
    let _0x1cb23e = "网络请求失败";
    if (_0x35ba6e.response) {
      const _0x278f63 = _0x35ba6e.response.data || {};
      _0x1cb23e = _0x278f63.message || _0x278f63.error || "HTTP " + _0x35ba6e.response.status + ": " + _0x35ba6e.response.statusText;
    } else {
      _0x35ba6e.request ? _0x1cb23e = "网络连接失败: " + (_0x35ba6e.message || "无法连接到服务器") : _0x1cb23e = _0x35ba6e.message || "未知错误";
    }
    const _0x4c1e2e = {
      signUrl: null,
      error: _0x1cb23e
    };
    return _0x4c1e2e;
  }
}
async function validateKamicardAndGetSignUrl() {
  if (!ENABLE_AUTH || !AUTH_KEY) {
    const _0x27db15 = {
      isValid: false,
      signApiUrl: null,
      message: "未设置卡密"
    };
    return _0x27db15;
  }
  try {
    const _0x5e4d93 = getOrCreateDeviceId(),
      _0x593f54 = AUTH_API_URL.replace("/auth.php", "/admin.php"),
      _0xc23ba2 = new URLSearchParams();
    _0xc23ba2.append("api", "check_key");
    _0xc23ba2.append("key", AUTH_KEY);
    _0xc23ba2.append("script_version", SCRIPT_VERSION);
    _0xc23ba2.append("device_id", _0x5e4d93);
    const _0x4f2fbb = {
      "Content-Type": "application/x-www-form-urlencoded"
    };
    const _0x307307 = {
      timeout: 10000,
      headers: _0x4f2fbb,
      validateStatus: function (_0x123ab8) {
        return _0x123ab8 >= 200 && _0x123ab8 < 600;
      }
    };
    const _0x5c7010 = await axios.post(_0x593f54, _0xc23ba2, _0x307307);
    if (!_0x5c7010 || !_0x5c7010.data) {
      _0x217086.isValid = false;
      const _0x365a3a = {
        isValid: false,
        signApiUrl: null,
        message: "服务器响应为空，请检查网络连接或服务器状态"
      };
      return _0x365a3a;
    }
    let _0x1c6e2b = _0x5c7010.data;
    if (typeof _0x1c6e2b === "string") {
      try {
        _0x1c6e2b = JSON.parse(_0x1c6e2b);
      } catch (_0x405c36) {
        _0x217086.isValid = false;
        return {
          isValid: false,
          signApiUrl: null,
          message: "服务器响应格式错误: " + _0x1c6e2b.substring(0, 100)
        };
      }
    }
    if (_0x5c7010.status === 426 || _0x1c6e2b.code === 426 || _0x1c6e2b.error_code === "VERSION_MISMATCH" || _0x1c6e2b.error_code === "VERSION_MISSING") {
      const requiredVersion = _0x1c6e2b.data?.["required_version"] || "v1";
      console.log("\n⚠️  脚本版本不匹配！");
      console.log("   当前版本: " + SCRIPT_VERSION);
      console.log("   需要版本: " + requiredVersion);
      console.log("\n⚠️  脚本已停止运行，请手动更新到正确版本后重新运行。");
      _0x217086.isValid = false;
      const _0x190ac3 = {
        isValid: false,
        signApiUrl: null,
        message: "脚本版本不匹配，需要版本: " + requiredVersion
      };
      return _0x190ac3;
    }
    if (_0x1c6e2b.status === true) {
      const _0xb810c6 = _0x1c6e2b.data || {},
        _0x1fcad5 = _0xb810c6.key_status || "active",
        _0xb7b51b = _0xb810c6.expires_at;
      if (_0x1fcad5 !== "active") {
        _0x217086.isValid = false;
        const _0x22b8d0 = {
          isValid: false,
          signApiUrl: null,
          message: "卡密已被禁用（状态: " + _0x1fcad5 + "）"
        };
        return _0x22b8d0;
      }
      if (_0xb7b51b) {
        const _0x5b37be = new Date(_0xb7b51b).getTime(),
          _0x55042f = Date.now();
        if (_0x55042f >= _0x5b37be) {
          _0x217086.isValid = false;
          const _0x33db12 = {
            isValid: false,
            signApiUrl: null,
            message: "卡密已过期（过期时间: " + _0xb7b51b + "）"
          };
          return _0x33db12;
        }
      }
      if (_0xb810c6.max_uses !== null && _0xb810c6.max_uses > 0 && _0xb810c6.used_count >= _0xb810c6.max_uses) {
        _0x217086.isValid = false;
        const _0x2a6202 = {
          isValid: false,
          signApiUrl: null,
          message: "卡密使用次数已达上限（" + _0xb810c6.used_count + "/" + _0xb810c6.max_uses + "）"
        };
        return _0x2a6202;
      }
      const _0x4fc145 = await getSignServiceUrl();
      if (_0x4fc145.error) {
        _0x217086.isValid = false;
        const _0x1784dc = {
          isValid: false,
          signApiUrl: null,
          message: "获取签名服务地址失败: " + _0x4fc145.error
        };
        return _0x1784dc;
      }
      _0x217086.isValid = true;
      _0x217086.lastCheckTime = Date.now();
      _0x217086.keyStatus = _0x1fcad5;
      _0x217086.expiresAt = _0xb7b51b;
      const _0x428064 = {
        isValid: true,
        signApiUrl: _0x4fc145.signUrl,
        message: "卡密验证成功"
      };
      return _0x428064;
    } else {
      const _0x192d3a = _0x1c6e2b.message || _0x1c6e2b.error || _0x1c6e2b.msg || "未知错误",
        _0xfbce9d = _0x5c7010.status || _0x5c7010.statusCode || "N/A";
      _0x217086.isValid = false;
      let _0x54a6dc = _0x192d3a;
      (_0x192d3a === "未知错误" || !_0x192d3a) && (_0x54a6dc = "卡密验证失败（HTTP状态码: " + _0xfbce9d + "）");
      const _0x2207ea = {
        isValid: false,
        signApiUrl: null,
        message: _0x54a6dc
      };
      return _0x2207ea;
    }
  } catch (_0x1388c6) {
    let _0x10615e = "网络请求失败";
    if (_0x1388c6.response) {
      const _0x3ef2f1 = _0x1388c6.response.data || {};
      _0x10615e = _0x3ef2f1.message || _0x3ef2f1.error || _0x3ef2f1.msg || "HTTP " + _0x1388c6.response.status + ": " + _0x1388c6.response.statusText;
    } else {
      _0x1388c6.request ? _0x10615e = "网络连接失败: " + (_0x1388c6.message || "无法连接到服务器") : _0x10615e = _0x1388c6.message || "未知错误";
    }
    _0x217086.isValid = false;
    const _0xda3c02 = {
      isValid: false,
      signApiUrl: null,
      message: "卡密验证异常: " + _0x10615e
    };
    return _0xda3c02;
  }
}
async function checkKamicardStatus() {
  const _0x3c60f9 = await validateKamicardAndGetSignUrl();
  if (!_0x3c60f9.isValid) {
    console.log("\n❌ 卡密验证失败: " + _0x3c60f9.message);
    console.log("💡 提示: 任务将停止执行，请检查卡密状态");
    _0x217086.isValid = false;
    _0x217086.checkInterval && (clearInterval(_0x217086.checkInterval), _0x217086.checkInterval = null);
    return false;
  }
  return true;
}
function startKamicardValidationTimer() {
  if (!ENABLE_AUTH || !AUTH_KEY) {
    return;
  }
  _0x217086.checkInterval && clearInterval(_0x217086.checkInterval);
  _0x217086.checkInterval = setInterval(async () => {
    await checkKamicardStatus();
  }, KAMICARD_CHECK_INTERVAL);
}
function stopKamicardValidationTimer() {
  _0x217086.checkInterval && (clearInterval(_0x217086.checkInterval), _0x217086.checkInterval = null);
}
async function checkUdBindStatus() {
  if (!ENABLE_AUTH || !AUTH_KEY) {
    return null;
  }
  try {
    const _0x4a409c = AUTH_API_URL.replace("/auth.php", "/admin.php"),
      _0x49b8a3 = _0x4a409c + "?api=check_key&key=" + encodeURIComponent(AUTH_KEY) + "&script_version=" + encodeURIComponent(SCRIPT_VERSION),
      _0x369f7e = {
        timeout: 10000
      };
    const _0x352263 = await axios.get(_0x49b8a3, _0x369f7e);
    if (_0x352263.data && _0x352263.data.status) {
      const _0x143996 = _0x352263.data.data || {},
        _0x1c41ca = {
          enabled: _0x143996.ud_bind_enabled || false,
          maxBindCount: _0x143996.max_ud_bind_count || 0,
          boundCount: (_0x143996.bound_uds || []).length,
          boundUds: _0x143996.bound_uds || [],
          keyStatus: _0x143996.key_status || "active",
          expiresAt: _0x143996.expires_at,
          usedCount: _0x143996.used_count || 0,
          maxUses: _0x143996.max_uses
        };
      return _0x1c41ca;
    } else {
      return null;
    }
  } catch (_0x3283fe) {
    return null;
  }
}
async function autoUploadUd() {
  if (!ENABLE_AUTH || !AUTH_KEY) {
    return null;
  }
  try {
    const _0x342c5f = await checkUdBindStatus();
    if (!_0x342c5f) {
      return null;
    }
    if (!_0x342c5f.enabled) {
      return null;
    }
    console.log("\n🔍 正在检测卡密UD绑定状态...");
    console.log("✅ 云端已启用UD绑定功能");
    _0x342c5f.maxBindCount > 0 ? console.log("   绑定状态: " + _0x342c5f.boundCount + "/" + _0x342c5f.maxBindCount + " 个账号") : console.log("   已绑定: " + _0x342c5f.boundCount + " 个账号（无限制）");
    const _0x2e3c34 = loadAccountsFromEnv(),
      _0x576add = [],
      _0x57632a = (_0x22ecab, _0x1556e5) => {
        const _0x3d8ad2 = _0x3c0b78 => _0x3c0b78.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
        const _0x34c08d = _0x3d8ad2(_0x1556e5),
          _0x4781fd = [new RegExp(_0x34c08d + "\\s*=\\s*\"([^\"]+)\"", "i"), new RegExp(_0x34c08d + "\\s*=\\s*([^;\\s]+)", "i"), new RegExp(_0x34c08d + "\\s*:\\s*\"([^\"]+)\"", "i"), new RegExp(_0x34c08d + "\\s*:\\s*([^,;\\s]+)", "i")];
        for (const _0xe26491 of _0x4781fd) {
          const _0x20dbc1 = _0x22ecab.match(_0xe26491);
          if (_0x20dbc1 && _0x20dbc1[1] && _0x20dbc1[1].trim()) {
            return _0x20dbc1[1].trim();
          }
        }
        return null;
      };
    for (let _0x5de9ea = 0; _0x5de9ea < _0x2e3c34.length; _0x5de9ea++) {
      const _0xab96c4 = _0x2e3c34[_0x5de9ea];
      if (_0xab96c4.cookie) {
        const _0x29936e = _0x57632a(_0xab96c4.cookie, "ud") || _0x57632a(_0xab96c4.cookie, "userId");
        if (_0x29936e && _0x29936e.trim()) {
          const _0x4e2207 = _0x29936e.trim();
          if (!_0x576add.find(_0x18de11 => _0x18de11.ud === _0x4e2207)) {
            if (_0x342c5f.maxBindCount > 0 && _0x342c5f.boundCount >= _0x342c5f.maxBindCount) {
              if (_0x342c5f.boundUds.includes(_0x4e2207)) {
                continue;
              }
            }
            _0x576add.push({
              ud: _0x4e2207,
              index: _0x5de9ea + 1,
              remark: _0xab96c4.remark || "账号" + (_0x5de9ea + 1)
            });
          }
        }
      }
    }
    if (_0x576add.length === 0) {
      if (_0x342c5f.maxBindCount > 0 && _0x342c5f.boundCount >= _0x342c5f.maxBindCount) {
        const _0x6c11f = _0x2e3c34.every(_0x1031b6 => {
          if (!_0x1031b6.cookie) {
            return true;
          }
          const _0x30b926 = _0x57632a(_0x1031b6.cookie, "ud") || _0x57632a(_0x1031b6.cookie, "userId");
          return !_0x30b926 || !_0x30b926.trim() || _0x342c5f.boundUds.includes(_0x30b926.trim());
        });
        if (_0x6c11f) {
          console.log("✅ 所有账号的UD已在绑定列表中，无需重复绑定");
          const _0x5caf0e = [];
          for (let _0x2823a1 = 0; _0x2823a1 < _0x2e3c34.length; _0x2823a1++) {
            const _0x51adae = _0x2e3c34[_0x2823a1];
            if (_0x51adae.cookie) {
              const _0x4a3061 = _0x57632a(_0x51adae.cookie, "ud") || _0x57632a(_0x51adae.cookie, "userId");
              _0x4a3061 && _0x4a3061.trim() && _0x5caf0e.push({
                ud: _0x4a3061.trim(),
                index: _0x2823a1 + 1,
                remark: _0x51adae.remark || "账号" + (_0x2823a1 + 1)
              });
            }
          }
          const _0x365c2e = _0x342c5f.boundUds || [],
            _0x495771 = _0x5caf0e.filter(_0x1cf385 => !_0x365c2e.includes(_0x1cf385.ud));
          if (_0x495771.length > 0) {
            const _0x1dbdc6 = {
              success: false,
              successCount: 0,
              failCount: _0x495771.length,
              totalCount: _0x5caf0e.length,
              unboundUds: _0x495771
            };
            return _0x1dbdc6;
          }
          const _0xd4da03 = {
            success: true,
            successCount: _0x5caf0e.length,
            failCount: 0,
            totalCount: _0x5caf0e.length,
            boundUds: _0x365c2e
          };
          return _0xd4da03;
        } else {
          const _0x219fee = [];
          for (let _0x561233 = 0; _0x561233 < _0x2e3c34.length; _0x561233++) {
            const _0x2ebe66 = _0x2e3c34[_0x561233];
            if (_0x2ebe66.cookie) {
              const _0x23d15 = _0x57632a(_0x2ebe66.cookie, "ud") || _0x57632a(_0x2ebe66.cookie, "userId");
              if (_0x23d15 && _0x23d15.trim()) {
                const _0x52f303 = _0x23d15.trim();
                if (!_0x342c5f.boundUds.includes(_0x52f303)) {
                  const _0x12f6bd = {
                    ud: _0x52f303,
                    index: _0x561233 + 1,
                    remark: _0x2ebe66.remark || "账号" + (_0x561233 + 1)
                  };
                  _0x219fee.push(_0x12f6bd);
                }
              }
            }
          }
          const _0x4bf03f = {
            success: false,
            successCount: 0,
            failCount: _0x219fee.length,
            totalCount: _0x219fee.length,
            unboundUds: _0x219fee
          };
          return _0x4bf03f;
        }
      } else {
        const _0x561e84 = [];
        for (let _0x42ee28 = 0; _0x42ee28 < _0x2e3c34.length; _0x42ee28++) {
          const _0x5b92dd = _0x2e3c34[_0x42ee28];
          if (_0x5b92dd.cookie) {
            const _0x3bdaff = _0x57632a(_0x5b92dd.cookie, "ud") || _0x57632a(_0x5b92dd.cookie, "userId");
            _0x3bdaff && _0x3bdaff.trim() && _0x561e84.push({
              ud: _0x3bdaff.trim(),
              index: _0x42ee28 + 1,
              remark: _0x5b92dd.remark || "账号" + (_0x42ee28 + 1)
            });
          }
        }
        if (_0x561e84.length === 0) {
          console.log("⚠️  未检测到任何账号的UD，跳过UD绑定");
          return null;
        }
        const _0x3c787b = _0x342c5f.boundUds || [],
          _0x1e9231 = _0x561e84.filter(_0xf9b62a => !_0x3c787b.includes(_0xf9b62a.ud));
        if (_0x1e9231.length > 0) {
          const _0x12a97 = {
            success: false,
            successCount: 0,
            failCount: _0x1e9231.length,
            totalCount: _0x561e84.length,
            unboundUds: _0x1e9231
          };
          return _0x12a97;
        }
        const _0x16e59e = {
          success: true,
          successCount: _0x561e84.length,
          failCount: 0,
          totalCount: _0x561e84.length,
          boundUds: _0x3c787b
        };
        return _0x16e59e;
      }
    }
    console.log("\n🔍 检测到 " + _0x576add.length + " 个快手UD，开始自动上传绑定...");
    const _0x86f17b = AUTH_API_URL.replace("/auth.php", "/admin.php"),
      uploadPromises = _0x576add.map(async ({
        ud: _0x492d5a,
        index: _0x44ebb9,
        remark: _0x58041d
      }) => {
        const _0x421cdb = new URLSearchParams();
        _0x421cdb.append("action", "upload_ud");
        _0x421cdb.append("key", AUTH_KEY);
        _0x421cdb.append("ud", _0x492d5a);
        try {
          const _0x170f1e = {
            "Content-Type": "application/x-www-form-urlencoded"
          };
          const _0x387b6d = {
            headers: _0x170f1e,
            timeout: 10000,
            validateStatus: function (_0x495865) {
              return _0x495865 >= 200 && _0x495865 < 600;
            }
          };
          const _0x5bbd0e = await axios.post(_0x86f17b, _0x421cdb.toString(), _0x387b6d);
          if (!_0x5bbd0e || !_0x5bbd0e.data) {
            console.log("❌ [" + _0x58041d + "] UD: " + _0x492d5a + " 上传失败: 服务器响应为空");
            const _0x5c7404 = {
              success: false,
              ud: _0x492d5a,
              remark: _0x58041d,
              error: "服务器响应为空"
            };
            return _0x5c7404;
          }
          let _0x12c3d2 = _0x5bbd0e.data;
          if (typeof _0x12c3d2 === "string") {
            try {
              _0x12c3d2 = JSON.parse(_0x12c3d2);
            } catch (_0x149650) {
              console.log("❌ [" + _0x58041d + "] UD: " + _0x492d5a + " 上传失败: 响应格式错误（无法解析JSON）");
              const _0x4e625e = {
                success: false,
                ud: _0x492d5a,
                remark: _0x58041d,
                error: "响应格式错误"
              };
              return _0x4e625e;
            }
          }
          if (_0x12c3d2 && _0x12c3d2.status) {
            const _0x28165b = _0x12c3d2.data?.["bound_count"] || 0,
              _0x1b912e = _0x12c3d2.data?.["max_bind_count"] || 0,
              _0x4d7d7f = _0x12c3d2.data?.["already_bound"] || false;
            if (_0x4d7d7f) {
              console.log("ℹ️  [" + _0x58041d + "] UD: " + _0x492d5a + " 已在绑定列表中");
            } else {
              _0x1b912e > 0 ? console.log("✅ [" + _0x58041d + "] UD: " + _0x492d5a + " 绑定成功 (" + _0x28165b + "/" + _0x1b912e + ")") : console.log("✅ [" + _0x58041d + "] UD: " + _0x492d5a + " 绑定成功 (已绑定: " + _0x28165b + ")");
            }
            const _0x205453 = {
              success: true,
              ud: _0x492d5a,
              remark: _0x58041d
            };
            return _0x205453;
          } else {
            const _0x25ab6e = _0x12c3d2 || {},
              _0x462465 = _0x25ab6e.message || "未知错误",
              _0x2f085d = _0x25ab6e.code || "UNKNOWN_ERROR",
              _0xeb6967 = _0x25ab6e.data || {};
            let _0x1b2168 = "";
            if (_0x2f085d === "UD_BIND_DISABLED") {
              _0x1b2168 = "💡 提示: 该卡密未启用UD绑定功能，请联系管理员在后台启用";
            } else {
              if (_0x2f085d === "MAX_BIND_LIMIT") {
                _0x1b2168 = "💡 提示: 已达到最大绑定数（" + (_0xeb6967.max_bind_count || "未知") + "个），无法添加新的UD";
              } else {
                if (_0x462465.includes("卡密不存在") || _0x462465.includes("卡密无效")) {
                  _0x1b2168 = "💡 提示: 请检查AUTH_KEY环境变量是否正确";
                } else {
                  _0x462465.includes("已被禁用") && (_0x1b2168 = "💡 提示: 卡密已被禁用，请联系管理员");
                }
              }
            }
            console.log("❌ [" + _0x58041d + "] UD: " + _0x492d5a + " 绑定失败: " + _0x462465);
            _0x1b2168 && console.log("   " + _0x1b2168);
            if (_0x462465.includes("已在绑定列表中")) {
              const _0x9c435e = {
                success: true,
                ud: _0x492d5a,
                remark: _0x58041d,
                message: _0x462465
              };
              return _0x9c435e;
            }
            const _0x1b6ae8 = {
              success: false,
              ud: _0x492d5a,
              remark: _0x58041d,
              message: _0x462465,
              errorCode: _0x2f085d
            };
            return _0x1b6ae8;
          }
        } catch (_0x18947c) {
          let _0x3b23e6 = "网络请求失败";
          if (_0x18947c.response) {
            const _0x312e7c = _0x18947c.response.data || {};
            if (typeof _0x312e7c === "string") {
              try {
                const _0x5d2d4b = JSON.parse(_0x312e7c);
                _0x3b23e6 = _0x5d2d4b.message || _0x5d2d4b.error || "HTTP " + _0x18947c.response.status + ": " + _0x18947c.response.statusText;
              } catch (_0x41c18c) {
                _0x3b23e6 = "HTTP " + _0x18947c.response.status + ": " + _0x18947c.response.statusText;
              }
            } else {
              typeof _0x312e7c === "object" ? _0x3b23e6 = _0x312e7c.message || _0x312e7c.error || "HTTP " + _0x18947c.response.status + ": " + _0x18947c.response.statusText : _0x3b23e6 = "HTTP " + _0x18947c.response.status + ": " + _0x18947c.response.statusText;
            }
          } else {
            _0x18947c.request ? _0x3b23e6 = "网络连接失败: " + (_0x18947c.message || "无法连接到服务器") : _0x3b23e6 = _0x18947c.message || "未知错误";
          }
          console.log("❌ [" + _0x58041d + "] UD: " + _0x492d5a + " 上传失败: " + _0x3b23e6);
          if (_0x18947c.response && _0x18947c.response.data) {
            const _0x5e6df9 = _0x18947c.response.data;
            if (typeof _0x5e6df9 === "object" && _0x5e6df9.message) {
              console.log("   错误详情: " + _0x5e6df9.message);
              _0x5e6df9.code && console.log("   错误代码: " + _0x5e6df9.code);
            } else {
              typeof _0x5e6df9 === "string" && _0x5e6df9.length < 500 && console.log("   错误详情: " + _0x5e6df9);
            }
          }
          const _0x3dfa36 = {
            success: false,
            ud: _0x492d5a,
            remark: _0x58041d,
            error: _0x3b23e6
          };
          return _0x3dfa36;
        }
      }),
      _0x214075 = 5,
      _0x41d878 = [];
    for (let _0x28c8ee = 0; _0x28c8ee < uploadPromises.length; _0x28c8ee += _0x214075) {
      const _0x50c57e = uploadPromises.slice(_0x28c8ee, _0x28c8ee + _0x214075),
        _0x259238 = await Promise.all(_0x50c57e);
      _0x41d878.push(..._0x259238);
    }
    const _0x3e90d0 = _0x41d878.filter(_0x321c84 => _0x321c84.success).length,
      _0x217b94 = _0x41d878.filter(_0xf2f626 => !_0xf2f626.success).length;
    console.log("\n📊 UD自动绑定完成: 成功 " + _0x3e90d0 + " 个，失败 " + _0x217b94 + " 个，总计 " + _0x576add.length + " 个");
    if (_0x217b94 > 0) {
      return {
        success: false,
        successCount: _0x3e90d0,
        failCount: _0x217b94,
        totalCount: _0x576add.length,
        failedUds: _0x41d878.filter(_0x307d35 => !_0x307d35.success).map(_0x540816 => ({
          ud: _0x540816.ud,
          remark: _0x540816.remark,
          error: _0x540816.error || _0x540816.message
        }))
      };
    }
    const _0x4ea26a = [];
    for (let _0x526123 = 0; _0x526123 < _0x2e3c34.length; _0x526123++) {
      const _0x57f547 = _0x2e3c34[_0x526123];
      if (_0x57f547.cookie) {
        const _0x17295f = _0x57632a(_0x57f547.cookie, "ud") || _0x57632a(_0x57f547.cookie, "userId");
        _0x17295f && _0x17295f.trim() && _0x4ea26a.push({
          ud: _0x17295f.trim(),
          index: _0x526123 + 1,
          remark: _0x57f547.remark || "账号" + (_0x526123 + 1)
        });
      }
    }
    const _0x238448 = await checkUdBindStatus();
    if (_0x238448 && _0x238448.enabled) {
      const _0x409c60 = _0x238448.boundUds || [],
        _0x158fb6 = _0x4ea26a.filter(_0x11a184 => !_0x409c60.includes(_0x11a184.ud));
      if (_0x158fb6.length > 0) {
        const _0x167b58 = {
          success: false,
          successCount: _0x3e90d0,
          failCount: _0x217b94 + _0x158fb6.length,
          totalCount: _0x4ea26a.length,
          unboundUds: _0x158fb6
        };
        return _0x167b58;
      }
    }
    return {
      success: true,
      successCount: _0x3e90d0,
      failCount: _0x217b94,
      totalCount: _0x576add.length,
      boundUds: _0x576add.map(_0x3e46d4 => _0x3e46d4.ud)
    };
  } catch (_0xd70613) {
    const _0x301f03 = {
      success: false,
      error: _0xd70613.message || "未知错误"
    };
    return _0x301f03;
  }
}
async function fetchServerScriptVersion() {
  try {
    const _0x448c31 = AUTH_API_URL.replace("/auth.php", "/admin.php"),
      _0x228207 = _0x448c31 + "?api=get_script_version";
    try {
      const _0x401608 = await axios.get(_0x228207, {
        timeout: 10000,
        validateStatus: function (_0x1ef92a) {
          return _0x1ef92a >= 200 && _0x1ef92a < 600;
        }
      });
      if (_0x401608.status === 401) {
        console.log("⚠️  获取版本号需要登录");
        return null;
      }
      let _0x39110c = _0x401608.data;
      if (typeof _0x39110c === "string") {
        try {
          _0x39110c = JSON.parse(_0x39110c);
        } catch (_0xf7c346) {
          console.log("⚠️  服务器响应格式错误");
          return null;
        }
      }
      if (_0x39110c && _0x39110c.status === true && _0x39110c.data && _0x39110c.data.configured_version) {
        const _0x376e24 = _0x39110c.data.configured_version.trim();
        return _0x376e24;
      } else {
        const _0x1e39fb = _0x39110c?.["message"] || "响应格式不正确";
        console.log("⚠️  无法从服务器获取版本号: " + _0x1e39fb);
        return null;
      }
    } catch (fetchError) {
      const _0x169307 = fetchError.response?.["data"]?.["message"] || fetchError.message || "未知错误";
      console.log("⚠️  获取服务器版本号失败: " + _0x169307);
      return null;
    }
  } catch (_0x116008) {
    console.log("⚠️  获取版本号出错: " + _0x116008.message);
    return null;
  }
}
async function checkAndUpdateScript() {
  try {
    console.log("\n🔍 正在检查脚本版本...");
    console.log("   本地版本: " + SCRIPT_VERSION);
    const _0x27683d = await fetchServerScriptVersion();
    !_0x27683d && (console.log("\n⚠️  无法从服务器获取版本号，脚本已停止运行"), process.exit(1));
    console.log("   服务器版本: " + _0x27683d);
    const _0x1cd1a4 = SCRIPT_VERSION.toLowerCase().trim(),
      _0x1987f5 = _0x27683d.toLowerCase().trim();
    _0x1987f5 !== _0x1cd1a4 ? (console.log("\n⚠️  脚本版本不匹配！"), console.log("   本地版本: " + SCRIPT_VERSION), console.log("   服务器版本: " + _0x27683d), console.log("\n⚠️  脚本已停止运行，请更新到正确版本后重新运行。"), process.exit(1)) : console.log("✅ 脚本版本检查通过 (版本: " + SCRIPT_VERSION + ")");
  } catch (_0x411e08) {
    console.log("\n⚠️  版本检查出错: " + _0x411e08.message);
    console.log("\n⚠️  脚本已停止运行。");
    process.exit(1);
  }
}
(async () => {
  AUTH_KEY && AUTH_KEY.length > 0 ? await checkAndUpdateScript() : (console.log("\n🔍 脚本版本: " + SCRIPT_VERSION), console.log("⚠️  未设置卡密，跳过版本检查"));
  const _0x55a24f = getOrCreateDeviceId();
  !AUTH_KEY && (console.error("❌ 错误: 未设置卡密（AUTH_KEY）"), console.log("\n💡 使用方法:"), console.log("   1. 设置环境变量: export AUTH_KEY=your_kamicard_key"), console.log("   2. 或设置环境变量: export KAMICARD_KEY=your_kamicard_key"), process.exit(1));
  console.log("\n🔍 正在验证卡密状态...");
  const _0x3ca657 = await validateKamicardAndGetSignUrl();
  !_0x3ca657.isValid && (console.error("\n❌ 卡密验证失败: " + _0x3ca657.message), console.log("💡 提示: 请检查卡密状态或联系管理员"), console.log("\n⚠️  脚本已停止执行，请解决卡密问题后重新运行"), process.exit(1));
  console.log("✅ " + _0x3ca657.message);
  if (ENABLE_AUTH && AUTH_KEY) {
    try {
      const _0x4a18dc = AUTH_API_URL.replace("/auth.php", "/admin.php"),
        _0x12b3c3 = _0x4a18dc + "?api=check_key&key=" + encodeURIComponent(AUTH_KEY) + "&script_version=" + encodeURIComponent(SCRIPT_VERSION),
        _0x57855f = {
          timeout: 10000
        };
      const _0x1adff1 = await axios.get(_0x12b3c3, _0x57855f);
      if (_0x1adff1.data && _0x1adff1.data.status) {
        const _0x292e65 = _0x1adff1.data.data || {},
          _0x564625 = _0x292e65.device_bind_enabled === true || _0x292e65.device_bind_enabled === "1" || _0x292e65.device_bind_enabled === 1,
          _0x5e789d = _0x292e65.bound_device_id || null;
        if (_0x564625) {
          console.log("\n🔍 正在检查设备ID绑定状态...");
          if (_0x5e789d) {
            if (_0x55a24f !== _0x5e789d) {
              console.error("\n❌ 设备ID绑定验证失败！");
              console.error("\n⚠️  设备ID本地与云端绑定不一致，脚本已停止运行！");
              console.error("   请检查设备ID绑定状态或联系管理员。");
              console.error("   如需更换设备，请联系管理员解绑原设备ID。\n");
              process.exit(1);
            } else {
              console.log("✅ 设备ID绑定验证通过（本地: " + _0x55a24f + "，云端: " + _0x5e789d + "）");
            }
          } else {
            console.log("ℹ️  设备ID绑定已启用，等待首次绑定（首次使用将自动绑定当前设备ID）");
          }
        }
      }
    } catch (_0x18ca83) {
      console.log("⚠️  检查设备ID绑定状态时出错: " + _0x18ca83.message + "，继续执行脚本");
    }
  }
  if (ENABLE_AUTH && AUTH_KEY) {
    try {
      const _0x374d4d = AUTH_API_URL.replace("/auth.php", "/admin.php"),
        _0x324539 = _0x374d4d + "?api=check_key&key=" + encodeURIComponent(AUTH_KEY) + "&script_version=" + encodeURIComponent(SCRIPT_VERSION),
        _0x347cdc = {
          timeout: 10000
        };
      const _0x559fc0 = await axios.get(_0x324539, _0x347cdc);
      if (_0x559fc0.data && _0x559fc0.data.status) {
        const _0x54598a = _0x559fc0.data.data || {},
          _0x615b97 = _0x54598a.ud_bind_enabled === true || _0x54598a.ud_bind_enabled === "1" || _0x54598a.ud_bind_enabled === 1,
          _0x3fc70a = _0x54598a.bound_uds || [],
          _0x1aa740 = _0x54598a.max_ud_bind_count || 0;
        _0x615b97 && (console.log("\n🔍 正在检查UD绑定状态..."), _0x3fc70a.length > 0 ? (console.log("✅ 云端已启用UD绑定功能"), _0x1aa740 > 0 ? console.log("   绑定状态: " + _0x3fc70a.length + "/" + _0x1aa740 + " 个账号") : console.log("   已绑定: " + _0x3fc70a.length + " 个账号（无限制）"), console.log("   已绑定UD列表: " + _0x3fc70a.join(", "))) : console.log("ℹ️  UD绑定已启用，等待首次绑定（首次使用将自动绑定账号UD）"));
      }
    } catch (_0x2608ba) {
      console.log("⚠️  检查UD绑定状态时出错: " + _0x2608ba.message + "，继续执行脚本");
    }
  }
  startKamicardValidationTimer();
  const _0x82d0d9 = loadAccountsFromEnv();
  !_0x82d0d9.length && (console.error("\n❌ 错误: 未配置账号信息"), console.log("\n💡 请设置环境变量 ksck 或 ksck1, ksck2... 来配置账号"), stopKamicardValidationTimer(), process.exit(1));
  let _0xc4003c = null;
  if (ENABLE_AUTH) {
    _0xc4003c = await autoUploadUd();
    if (_0xc4003c !== null) {
      const _0x4a5657 = await checkUdBindStatus();
      _0x4a5657 && _0x4a5657.enabled && (!_0xc4003c.success ? (console.error("\n❌ UD绑定验证失败，脚本已终止"), stopKamicardValidationTimer(), process.exit(1)) : console.log("✅ UD绑定验证通过: 所有账号的UD都已成功绑定"));
    }
  }
  console.log("═══════════════════════════════════════════════════════════════");
  console.log("📋 当前配置信息：");
  console.log("  金币上限 (KSCOIN_LIMIT): " + KSCOIN_LIMIT);
  console.log("  低奖励阈值 (KSLOW_REWARD_THRESHOLD): " + KSLOW_REWARD_THRESHOLD);
  console.log("  连续低奖励上限 (KSLOW_REWARD_LIMIT): " + KSLOW_REWARD_LIMIT);
  console.log("  并发策略: 每个账号同时进行 (" + accountCount + " 并发)");
  console.log("  跳过直播广告 (SKIP_LIVE_ADS): " + (SKIP_LIVE_ADS ? "启用，重试" + SKIP_LIVE_MAX_RETRIES + "次" : "禁用"));
  console.log("  执行任务 (Task): " + tasksToExecute.join(", "));
  tasksToExecute.includes("look") && console.log("  look 总执行次数 (KSLOOK_COUNT): " + KSLOOK_COUNT);
  tasksToExecute.includes("box") && console.log("  box 总执行次数 (KSBOX_COUNT): " + KSBOX_COUNT);
  tasksToExecute.includes("food") && console.log("  food 总执行次数 (KSFOOD_COUNT): " + KSFOOD_COUNT);
  tasksToExecute.includes("kbox") && console.log("  kbox 总执行次数 (KSKBOX_COUNT): " + KSKBOX_COUNT);
  tasksToExecute.includes("search") && console.log("  search 总执行次数 (KSSEARCH_COUNT): " + KSSEARCH_COUNT);
  tasksToExecute.includes("look_follow") && console.log("  每次 look 成功追加 look_follow 次数 (KSFOLLOW_COUNT): " + KSFOLLOW_COUNT);
  tasksToExecute.includes("search_follow") && console.log("  每次 search 成功追加 search_follow 次数 (KSSEARCHFOLLOW_COUNT): " + KSSEARCHFOLLOW_COUNT);
  console.log("  账号数量: " + _0x82d0d9.length);
  console.log("═══════════════════════════════════════════════════════════════\n");
  const _0x524bd9 = [];
  await concurrentExecute(_0x82d0d9, _0x82d0d9.length, async _0x4e0eca => {
    try {
      const _0xdc5546 = await processAccount(_0x4e0eca),
        _0x81b8de = {
          index: _0x4e0eca.index,
          remark: _0x4e0eca.remark || "无备注",
          nickname: _0xdc5546?.["nickname"] || "账号" + _0x4e0eca.index,
          initialCoin: _0xdc5546?.["initialCoin"] || 0,
          finalCoin: _0xdc5546?.["finalCoin"] || 0,
          coinChange: _0xdc5546?.["coinChange"] || 0,
          initialCash: _0xdc5546?.["initialCash"] || 0,
          finalCash: _0xdc5546?.["finalCash"] || 0,
          cashChange: _0xdc5546?.["cashChange"] || 0,
          stats: _0xdc5546?.["stats"] || {},
          coinLimitExceeded: _0xdc5546?.["coinLimitExceeded"] || false,
          skipped: _0xdc5546?.["skipped"] || false,
          infoFetchFailed: _0xdc5546?.["infoFetchFailed"] || false,
          error: _0xdc5546?.["error"] || null
        };
      _0x524bd9.push(_0x81b8de);
    } catch (_0x44d727) {
      console.log("账号[" + _0x4e0eca.index + "]" + (_0x4e0eca.remark ? "（" + _0x4e0eca.remark + "）" : "") + " ❌ 执行异常：" + _0x44d727.message);
      const _0x9873d4 = {
        index: _0x4e0eca.index,
        remark: _0x4e0eca.remark || "无备注",
        nickname: "账号" + _0x4e0eca.index,
        initialCoin: 0,
        finalCoin: 0,
        coinChange: 0,
        initialCash: 0,
        finalCash: 0,
        cashChange: 0,
        error: _0x44d727.message,
        skipped: true
      };
      _0x524bd9.push(_0x9873d4);
    }
  });
  _0x524bd9.sort((_0x239c20, _0x24d62a) => _0x239c20.index - _0x24d62a.index);
  stopKamicardValidationTimer();
  console.log("\n全部完成。", "✅");
  console.log("\n---------------------------------------------- 账号信息汇总 ----------------------------------------------");
  printAccountsSummary(_0x524bd9);
})();