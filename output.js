//Thu Dec 18 2025 08:23:15 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
const _0x4a199a = require("axios"),
  _0x1825b5 = require("crypto"),
  _0x5256ce = require("querystring");
function _0x3be9de(_0x4ea693) {
  const _0x57045b = "xK9mP2nQ5rT8wY3",
    _0x2c6fae = Buffer.from(_0x4ea693, "base64").toString("binary");
  let _0x5e8e6e = "";
  const _0x4a1d8d = _0x57045b.length;
  for (let _0x4b0182 = 0; _0x4b0182 < _0x2c6fae.length; _0x4b0182++) {
    _0x5e8e6e += String.fromCharCode(_0x2c6fae.charCodeAt(_0x4b0182) ^ _0x57045b.charCodeAt(_0x4b0182 % _0x4a1d8d));
  }
  return _0x5e8e6e;
}
const _0x15eb2b = _0x3be9de("EzhmDCVGAQ5cAgtLEjpBHT9mBjVLMWMFQGA="),
  _0x2e54c4 = _0x3be9de("EzhmBj1tDyFcLSddFCtWDBRSCCltXGEHRg=="),
  _0x20a7f7 = _0x3be9de("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcGTtQQyBaHg=="),
  _0x348c62 = _0x3be9de("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcEyYXHThC"),
  _0x26283a = _0x3be9de("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcFT8XHThC"),
  _0xd8c9e7 = _0x3be9de("ED9NHWodQWACQ3oKRm0dSXoXVGEIVmkMS3tZBzAcGTtQQyBaHm5UESBRGDcOHy5NMjFcAD5AHDddGjxdDA=="),
  _0x372ade = "\n══════════════════════════════════════════════════\n          使用协议\n══════════════════════════════════════════════════\n\n1. 本脚本永久免费使用，不收取任何费用\n2. 我们不抽成、不偷ck、不卖卡密\n3. 脚本仅供学习交流使用，请勿用于非法用途\n4. 使用本脚本需要卡密验证，请加Q群获取：1034077503\n5. 使用脚本前必须将IP添加到白名单\n6. 禁止倒卖、破解、修改脚本后再分发\n7. 使用者必须遵守相关法律法规，否则后果自负\n8. 如遇到问题，请在Q群反馈，我们会及时处理\n";
function _0x40b684() {
  const _0x2e4597 = [],
    _0x1fe0cd = process.env.mtck || "";
  _0x1fe0cd && _0x2e4597.push(_0x1fe0cd);
  for (let _0x1bdfdb = 1; _0x1bdfdb <= 9; _0x1bdfdb++) {
    const _0x9c9a4c = process.env["mtck" + _0x1bdfdb] || "";
    _0x9c9a4c && _0x2e4597.push(_0x9c9a4c);
  }
  return _0x2e4597;
}
const _0x52fa02 = {
  "apiUrl": _0x26283a,
  "cardSecret": process.env.km || "",
  "meituanAccounts": _0x40b684(),
  "delay": parseInt(process.env.MT_DELAY) || 1000,
  "announcementUrl": _0xd8c9e7,
  "pushToken": process.env.push || "",
  "agreement": process.env.agreement || ""
};
let _0x431441 = {};
async function _0x4e8124() {
  try {
    _0x243ae1("正在从后台获取券列表...");
    const _0x5b1c46 = await _0x4a199a.post(_0x52fa02.apiUrl, new URLSearchParams({
      "action": "get_coupons"
    }), {
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      "timeout": 10000
    });
    if (_0x5b1c46.data && _0x5b1c46.data.success && _0x5b1c46.data.data) {
      _0x431441 = _0x5b1c46.data.data;
      const _0x46e7f8 = Object.values(_0x431441).join(", ");
      return _0x243ae1("[成功] 已加载 " + _0x5b1c46.data.count + " 个券: " + _0x46e7f8, "success"), true;
    } else {
      const _0x443e80 = _0x5b1c46.data?.["message"] || "未知错误";
      _0x243ae1("[错误] 获取券列表失败: " + _0x443e80, "error");
      if (_0x5b1c46.data?.["code"] === 403) _0x243ae1("[提示] 您的IP可能未在白名单中，请重新运行脚本", "warn"), _0x243ae1("[提示] 当前IP: " + (_0x5b1c46.data?.["ip"] || "未知"), "warn");else {
        _0x243ae1("请在后台\"美团券管理\"中添加并启用券", "error");
      }
      return false;
    }
  } catch (_0x3f2761) {
    return _0x3f2761.response && _0x3f2761.response.status === 403 ? (_0x243ae1("[错误] 获取券列表失败: IP未在白名单中 (403)", "error"), _0x243ae1("[提示] 请稍等片刻后重新运行脚本，或联系管理员手动添加IP", "warn"), _0x3f2761.response.data?.["ip"] && _0x243ae1("[提示] 需要添加的IP: " + _0x3f2761.response.data.ip, "warn")) : (_0x243ae1("[错误] 获取券列表失败: " + _0x3f2761.message, "error"), _0x243ae1("请检查网络连接或联系管理员", "error")), false;
  }
}
function _0x37baad(_0x1980d7) {
  return new Promise(_0x11bd47 => setTimeout(_0x11bd47, _0x1980d7));
}
function _0x2c9295() {
  const _0x3723a3 = 30000,
    _0x34872e = 90000,
    _0x3163af = Math.floor(Math.random() * (_0x34872e - _0x3723a3 + 1)) + _0x3723a3;
  return _0x3163af;
}
async function _0x4d3618(_0x42f5b6, _0x46a23c) {
  if (!_0x52fa02.pushToken) return;
  try {
    const _0x32a659 = await _0x4a199a.post("http://www.pushplus.plus/send", {
      "token": _0x52fa02.pushToken,
      "title": _0x42f5b6,
      "content": _0x46a23c,
      "template": "html"
    }, {
      "timeout": 10000
    });
    if (_0x32a659.data && _0x32a659.data.code === 200) _0x243ae1("[成功] 推送通知发送成功", "success");else {
      _0x243ae1("[失败] 推送通知发送失败: " + (_0x32a659.data?.["msg"] || "未知错误"), "warn");
    }
  } catch (_0x49d803) {
    _0x243ae1("[异常] 推送通知发送异常: " + _0x49d803.message, "warn");
  }
}
function _0x243ae1(_0x584640, _0x2fbbb3 = "info") {
  const _0x509a27 = new Date(),
    _0x293484 = _0x509a27.toLocaleTimeString("zh-CN", {
      "hour12": false
    });
  console.log("[" + _0x293484 + "] " + _0x584640);
}
async function _0x1d78f5() {
  try {
    const _0x502237 = await _0x4a199a.get(_0x52fa02.announcementUrl, {
      "timeout": 3000,
      "headers": {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      }
    });
    if (_0x502237.data && _0x502237.data.success && _0x502237.data.data) {
      const _0x3e4013 = Array.isArray(_0x502237.data.data) ? _0x502237.data.data : [_0x502237.data.data];
      _0x3e4013.forEach((_0x7c7bf2, _0x56f6fb) => {
        const _0x46fa40 = _0x7c7bf2.title || "系统公告 " + (_0x56f6fb + 1),
          _0x1d2b1d = _0x7c7bf2.content || "",
          _0x1d05c3 = _0x1d2b1d.replace(/\\r\\n/g, "\n").replace(/\\n/g, "\n");
        console.log("\n" + _0x46fa40);
        console.log("═".repeat(50));
        console.log(_0x1d05c3);
        console.log("═".repeat(50));
        if (_0x56f6fb < _0x3e4013.length - 1) {
          console.log("");
        }
      });
      return;
    }
  } catch (_0x3eb82f) {
    console.log("远程公告获取失败，继续执行脚本");
  }
}
async function _0xb83e44() {
  const _0x2bdc0d = ["https://api.ipify.org?format=json", "https://ipinfo.io/json", "https://api.ip.sb/ip"];
  for (const _0x344f49 of _0x2bdc0d) {
    try {
      const _0x494d1d = await _0x4a199a.get(_0x344f49, {
        "timeout": 5000
      });
      let _0x3e850c = null;
      if (typeof _0x494d1d.data === "string") _0x3e850c = _0x494d1d.data.trim();else {
        if (_0x494d1d.data.ip) {
          _0x3e850c = _0x494d1d.data.ip;
        } else _0x494d1d.data.query && (_0x3e850c = _0x494d1d.data.query);
      }
      if (_0x3e850c && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x3e850c)) return _0x3e850c;
    } catch (_0x200deb) {
      continue;
    }
  }
  return null;
}
async function _0x4ce4f3(_0x2ae23d) {
  if (!_0x2ae23d) return _0x243ae1("❌ 错误: 未设置km环境变量，无法运行脚本", "error"), _0x243ae1("请在环境变量中配置：km=你的卡密", "error"), _0x243ae1("获取卡密Q群：1034077503", "warn"), false;
  _0x243ae1("🔐 正在验证卡密...");
  try {
    const _0x15a01f = Math.floor(Date.now() / 1000).toString(),
      _0x3c8eb2 = _0x1825b5.createHash("md5").update(_0x2ae23d + _0x15a01f + _0x2e54c4).digest("hex"),
      _0x2dfa34 = await _0x4a199a.post(_0x348c62, JSON.stringify({
        "km": _0x2ae23d,
        "timestamp": _0x15a01f,
        "sign": _0x3c8eb2
      }), {
        "headers": {
          "Content-Type": "application/json"
        },
        "timeout": 10000
      }),
      _0x5cd9b9 = _0x2dfa34.data;
    if (_0x5cd9b9 && _0x5cd9b9.success === true) return _0x243ae1("✅ 卡密验证成功，允许运行脚本", "success"), true;else {
      return _0x243ae1("❌ 卡密验证失败: " + (_0x5cd9b9?.["message"] || "验证不通过"), "error"), _0x243ae1("请检查卡密是否正确，或联系Q群：1034077503", "warn"), false;
    }
  } catch (_0x492274) {
    return _0x243ae1("❌ 卡密验证异常: " + _0x492274.message, "error"), _0x243ae1("可能原因：网络连接失败或服务器无响应", "warn"), _0x243ae1("请检查网络连接后重试，或联系Q群：1034077503", "warn"), false;
  }
}
async function _0x552ac1() {
  let _0x157b06 = await _0xb83e44();
  if (!_0x157b06) {
    const _0x5478e7 = process.env.ip;
    if (_0x5478e7 && /^(\d{1,3}\.){3}\d{1,3}$/.test(_0x5478e7)) {
      _0x243ae1("自动获取IP失败，使用手动配置: " + _0x5478e7, "warn");
      _0x157b06 = _0x5478e7;
    } else return _0x243ae1("无法获取公网IP，请检查网络连接或配置ip变量", "error"), false;
  } else _0x243ae1("获取到公网IP: " + _0x157b06, "success"), _0x18fa03 = _0x157b06;
  try {
    const _0x1961db = Math.floor(Date.now() / 1000).toString(),
      _0x1ee36e = "mt.js脚本",
      _0x191eba = _0x1825b5.createHash("md5").update(_0x157b06 + _0x1ee36e + _0x1961db + _0x15eb2b).digest("hex"),
      _0x30873c = await _0x4a199a.post(_0x20a7f7, _0x5256ce.stringify({
        "action": "auto_add_ip",
        "ip": _0x157b06,
        "source": _0x1ee36e,
        "timestamp": _0x1961db,
        "sign": _0x191eba
      }), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": 10000
      });
    if (_0x30873c.data && _0x30873c.data.success) return _0x243ae1("白名单添加成功: " + _0x157b06, "success"), true;else {
      _0x243ae1("白名单自动添加失败: " + (_0x30873c.data?.["message"] || "未知错误"), "warn");
      _0x243ae1("检查IP是否已在白名单中...");
      const _0x2b57d7 = Math.floor(Date.now() / 1000).toString(),
        _0x3fd012 = _0x1825b5.createHash("md5").update(_0x157b06 + "heartbeat" + _0x2b57d7 + _0x15eb2b).digest("hex"),
        _0x14f188 = await _0x4a199a.post(_0x20a7f7, _0x5256ce.stringify({
          "action": "check_whitelist",
          "ip": _0x157b06,
          "timestamp": _0x2b57d7,
          "sign": _0x3fd012
        }), {
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          "timeout": 10000
        }),
        _0x51b468 = _0x14f188.data && _0x14f188.data.in_whitelist === true || _0x14f188.data && _0x14f188.data.success === true;
      if (_0x51b468) {
        return _0x243ae1("IP已在白名单中（可能是管理员手动添加）: " + _0x157b06, "success"), true;
      } else return _0x243ae1("IP不在白名单中，脚本无法继续运行", "error"), _0x243ae1("   返回数据: " + JSON.stringify(_0x14f188.data)), _0x243ae1("   提示: 请联系管理员确认白名单: " + _0x157b06), false;
    }
  } catch (_0x2648e4) {
    return _0x243ae1("IP白名单操作异常: " + _0x2648e4.message, "error"), false;
  }
}
let _0x5f0770 = null,
  _0x18fa03 = null;
async function _0x35f629() {
  try {
    let _0x43c965 = _0x18fa03 || (await _0xb83e44());
    if (!_0x43c965) {
      _0x243ae1("白名单心跳检查异常: 无法获取IP，继续运行", "warn");
      return;
    }
    const _0x3efd6b = Math.floor(Date.now() / 1000).toString(),
      _0x7f031e = _0x1825b5.createHash("md5").update(_0x43c965 + "heartbeat" + _0x3efd6b + _0x15eb2b).digest("hex"),
      _0xb77348 = await _0x4a199a.post(_0x20a7f7, _0x5256ce.stringify({
        "action": "check_whitelist",
        "ip": _0x43c965,
        "timestamp": _0x3efd6b,
        "sign": _0x7f031e
      }), {
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        "timeout": 10000
      }),
      _0x45b636 = _0xb77348.data && _0xb77348.data.in_whitelist === true || _0xb77348.data && _0xb77348.data.success === true;
    if (_0x45b636) {} else _0x243ae1("白名单心跳检查失败: " + (_0xb77348.data?.["message"] || "IP不在白名单中"), "error"), _0x243ae1("   返回数据: " + JSON.stringify(_0xb77348.data)), _0x243ae1("可能原因: 1.白名单刚添加未生效 2.IP已过期被删除 3.网络波动", "warn"), _0x243ae1("将在下次检查时重新验证，暂不退出脚本", "warn");
  } catch (_0x4188a1) {
    _0x243ae1("白名单心跳检查异常: " + _0x4188a1.message + "，继续运行", "warn");
  }
}
function _0x3da55f() {
  _0x5f0770 && clearInterval(_0x5f0770);
  setTimeout(() => {
    _0x35f629();
  }, 10000);
  _0x5f0770 = setInterval(() => {
    _0x35f629();
  }, 5 * 60 * 1000);
}
function _0x314671(_0x4036e5) {
  try {
    const _0x1d4ca7 = new URL(_0x4036e5),
      _0x1fde06 = _0x1d4ca7.searchParams.get("userId"),
      _0x4fde4d = _0x1d4ca7.searchParams.get("token");
    if (!_0x1fde06 || !_0x4fde4d) throw new Error("URL中缺少userId或token参数");
    return {
      "userId": _0x1fde06,
      "token": _0x4fde4d
    };
  } catch (_0x2eac4d) {
    throw new Error("URL解析失败: " + _0x2eac4d.message);
  }
}
async function _0x38c3a7(_0x88553e, _0x1fd705 = {}) {
  try {
    const _0x4a302a = new URLSearchParams();
    _0x4a302a.append("action", _0x88553e);
    _0x4a302a.append("card", _0x52fa02.cardSecret);
    for (const _0x3429dc in _0x1fd705) {
      _0x4a302a.append(_0x3429dc, _0x1fd705[_0x3429dc]);
    }
    const _0x1ca648 = await _0x4a199a.post(_0x52fa02.apiUrl, _0x4a302a, {
      "headers": {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      "timeout": 30000
    });
    return _0x1ca648.data;
  } catch (_0x3d6d21) {
    if (_0x3d6d21.response) return {
      "success": false,
      "message": "HTTP错误: " + _0x3d6d21.response.status,
      "error": _0x3d6d21.response.data
    };else return _0x3d6d21.request ? {
      "success": false,
      "message": "网络请求超时或无响应"
    } : {
      "success": false,
      "message": _0x3d6d21.message
    };
  }
}
async function _0x1f730a(_0x28765d, _0x56eeeb, _0x1cff7c) {
  const _0x5f504e = _0x431441[_0x28765d] || _0x28765d;
  _0x243ae1("正在领取券: " + _0x5f504e);
  const _0x6bbb73 = await _0x38c3a7("meituan_receive", {
      "coupon_id": _0x28765d,
      "user_id": _0x56eeeb,
      "meituan_token": _0x1cff7c
    }),
    _0x285056 = _0x6bbb73.message || "",
    _0x27a6a4 = _0x285056.includes("失败") || _0x285056.includes("已失效") || _0x285056.includes("错误") || _0x285056.includes("异常");
  if (_0x6bbb73.success && !_0x27a6a4) {
    let _0x9d6089 = _0x285056 || "领券成功";
    if (_0x9d6089.includes(":")) {
      const _0x4480ae = _0x9d6089.split(":");
      _0x4480ae.length > 1 && (_0x9d6089 = _0x4480ae.slice(1).join(":").trim());
    }
    return _0x243ae1("[成功] 券 " + _0x5f504e + " 领取成功: " + _0x9d6089, "success"), {
      "success": true,
      "couponId": _0x28765d,
      "message": _0x9d6089
    };
  } else {
    let _0x323cc9 = _0x285056 || "领券失败";
    _0x323cc9.startsWith("失败:") && (_0x323cc9 = _0x323cc9.substring(3).trim());
    _0x323cc9.startsWith("失败>") && (_0x323cc9 = _0x323cc9.substring(3).trim());
    const _0x65a1fc = _0x6bbb73.error_type || "unknown";
    if (_0x65a1fc === "already_claimed" || _0x323cc9.includes("已领") || _0x323cc9.includes("已抽")) _0x243ae1("[已领] 券 " + _0x5f504e + " " + _0x323cc9, "warn");else _0x65a1fc === "limit_exceeded" || _0x323cc9.includes("已失效") || _0x323cc9.includes("链接") ? _0x243ae1("[失效] 券 " + _0x5f504e + " " + _0x323cc9, "warn") : _0x243ae1("[失败] 券 " + _0x5f504e + " 领取失败: " + _0x323cc9, "error");
    return {
      "success": false,
      "couponId": _0x28765d,
      "message": _0x323cc9,
      "error_type": _0x65a1fc
    };
  }
}
async function _0x108ea4(_0x414d18, _0x421f54, _0x1f1b5a) {
  _0x243ae1("========================================");
  _0x243ae1("开始批量领券");
  _0x243ae1("========================================");
  const _0x3402b7 = [];
  let _0x238656 = 0,
    _0x4be65f = 0,
    _0x29ceb4 = 0,
    _0x389d58 = 0,
    _0x5d62ce = 0;
  for (let _0x296afd = 0; _0x296afd < _0x414d18.length; _0x296afd++) {
    const _0x5e1d5a = _0x414d18[_0x296afd],
      _0x2a2659 = await _0x1f730a(_0x5e1d5a, _0x421f54, _0x1f1b5a);
    _0x3402b7.push(_0x2a2659);
    if (_0x2a2659.success) {
      _0x238656++;
      if (_0x296afd < _0x414d18.length - 1) {
        const _0x4ddf8d = _0x2c9295(),
          _0x5bee29 = Math.round(_0x4ddf8d / 1000);
        _0x243ae1("领券成功，等待 " + _0x5bee29 + " 秒后继续...", "success");
        await _0x37baad(_0x4ddf8d);
      }
    } else {
      _0x4be65f++;
      if (_0x2a2659.error_type === "already_claimed") _0x29ceb4++;else {
        if (_0x2a2659.error_type === "limit_exceeded") _0x389d58++;else _0x2a2659.error_type === "daily_limit_exceeded" && _0x5d62ce++;
      }
      _0x296afd < _0x414d18.length - 1 && (await _0x37baad(_0x52fa02.delay));
    }
  }
  return _0x243ae1("========================================"), _0x243ae1("领券完成: 成功 " + _0x238656 + " 个，失败 " + _0x4be65f + " 个"), _0x29ceb4 > 0 && _0x243ae1("其中已领取: " + _0x29ceb4 + " 个", "warn"), _0x389d58 > 0 && _0x243ae1("其中限制: " + _0x389d58 + " 个", "warn"), _0x243ae1("========================================"), {
    "total": _0x414d18.length,
    "success": _0x238656,
    "failed": _0x4be65f,
    "already_claimed": _0x29ceb4,
    "limit_exceeded": _0x389d58,
    "results": _0x3402b7
  };
}
async function _0x191a48(_0x22e2c4, _0x2bdebf, _0x4274ce) {
  _0x243ae1("\n" + "═".repeat(50));
  _0x243ae1("开始处理账号 " + _0x2bdebf + "/" + _0x4274ce);
  _0x243ae1("═".repeat(50));
  _0x243ae1("正在解析mt URL...");
  const {
    userId: _0x1c9cbe,
    token: _0x530efc
  } = _0x314671(_0x22e2c4);
  _0x243ae1("解析成功: userId=" + _0x1c9cbe, "success");
  try {
    const _0x4653c7 = Object.keys(_0x431441),
      _0x3827f0 = Object.values(_0x431441);
    _0x243ae1("准备领取券: " + _0x3827f0.join(", "));
    const _0x3dc5b9 = Math.floor(Math.random() * 30000) + 30000,
      _0xd21b3a = Math.round(_0x3dc5b9 / 1000);
    _0x243ae1("等待 " + _0xd21b3a + " 秒后继续...");
    await _0x37baad(_0x3dc5b9);
    _0x243ae1("");
    let _0x93e22f;
    return _0x4653c7.length === 1 ? _0x93e22f = await _0x1f730a(_0x4653c7[0], _0x1c9cbe, _0x530efc) : _0x93e22f = await _0x108ea4(_0x4653c7, _0x1c9cbe, _0x530efc), _0x243ae1("\n账号 " + _0x2bdebf + " 领券完成", "success"), {
      "userId": _0x1c9cbe,
      "result": _0x93e22f,
      "success": true
    };
  } catch (_0x4df406) {
    return _0x243ae1("\n账号 " + _0x2bdebf + " 执行出错: " + _0x4df406.message, "error"), console.error(_0x4df406), {
      "userId": "unknown",
      "result": null,
      "success": false,
      "error": _0x4df406.message
    };
  }
}
async function _0x5c6e84() {
  await _0x1d78f5();
  console.log(_0x372ade);
  _0x52fa02.agreement !== "我同意协议" && (console.log("[错误] 您尚未同意使用协议！"), console.log("请设置环境变量 agreement=我同意协议 以同意协议并继续使用脚本"), console.log("注意：必须完整输入\"我同意协议\"四个字，否则无法使用\n"), process.exit(1));
  !_0x52fa02.cardSecret && (_0x243ae1("错误：未配置卡密（km）", "error"), _0x243ae1("请在青龙面板设置环境变量：km", "error"), _0x243ae1("获取卡密Q群：1034077503", "warn"), process.exit(1));
  _0x243ae1("=".repeat(50));
  const _0x19081b = await _0x4ce4f3(_0x52fa02.cardSecret);
  if (!_0x19081b) {
    _0x243ae1("\n❌ 卡密验证失败，脚本终止运行", "error");
    _0x243ae1("请设置正确的km环境变量后重试", "error");
    _0x243ae1("获取卡密请加Q群：1034077503", "warn");
    _0x243ae1("=".repeat(50));
    process.exit(1);
  }
  _0x243ae1("=".repeat(50));
  _0x243ae1("");
  if (_0x52fa02.meituanAccounts.length === 0) {
    _0x243ae1("错误：未配置mt URL（mtck）", "error");
    _0x243ae1("请在青龙面板设置环境变量：mtck", "error");
    _0x243ae1("格式：https://i.meituan.com/mttouch/page/account?userId=xxx&token=xxx", "error");
    _0x243ae1("支持mtck到mtck9，最多10个账号", "error");
    process.exit(1);
  }
  _0x243ae1("开始执行IP白名单自动添加...\n");
  const _0x569a19 = await _0x552ac1();
  !_0x569a19 && (_0x243ae1("\nIP白名单添加失败，脚本终止运行", "error"), _0x243ae1("未添加IP白名单无法运行脚本，请检查网络连接或手动添加IP", "warn"), process.exit(1));
  _0x243ae1("\nIP白名单验证通过，继续执行脚本...\n");
  const _0x608f18 = await _0x4e8124();
  if (!_0x608f18) {
    _0x243ae1("\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "error");
    _0x243ae1("券列表加载失败，脚本终止运行", "error");
    _0x243ae1("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━", "error");
    _0x243ae1("\n可能的原因：", "warn");
    _0x243ae1("1. 后台未配置券列表 → 请在后台\"美团券管理\"中添加券并启用", "warn");
    _0x243ae1("2. IP白名单未同步 → 请等待5秒后重新运行脚本", "warn");
    _0x243ae1("3. 网络连接问题 → 请检查网络连接是否正常", "warn");
    _0x243ae1("\n如问题持续，请加Q群反馈：1034077503\n", "warn");
    process.exit(1);
  }
  _0x3da55f();
  _0x243ae1("\n检测到 " + _0x52fa02.meituanAccounts.length + " 个账号，开始批量处理...\n");
  const _0x82c6a9 = [];
  for (let _0x8a239 = 0; _0x8a239 < _0x52fa02.meituanAccounts.length; _0x8a239++) {
    const _0x5204dc = _0x52fa02.meituanAccounts[_0x8a239],
      _0x45bdb4 = await _0x191a48(_0x5204dc, _0x8a239 + 1, _0x52fa02.meituanAccounts.length);
    _0x82c6a9.push(_0x45bdb4);
    if (_0x8a239 < _0x52fa02.meituanAccounts.length - 1) {
      const _0x26e9be = 5;
      _0x243ae1("\n等待 " + _0x26e9be + " 秒后处理下一个账号...\n");
      await _0x37baad(_0x26e9be * 1000);
    }
  }
  _0x243ae1("\n" + "═".repeat(50));
  _0x243ae1("所有账号处理完成");
  _0x243ae1("═".repeat(50));
  const _0xefdd9d = _0x82c6a9.filter(_0x3b69d6 => _0x3b69d6.success).length,
    _0x3df2f3 = _0x82c6a9.length - _0xefdd9d;
  _0x243ae1("成功: " + _0xefdd9d + " 个账号，失败: " + _0x3df2f3 + " 个账号");
  if (_0x52fa02.pushToken) {
    const _0x3acc7c = "美团领券通知";
    let _0xc589b8 = "<h3>批量领券结果</h3>";
    _0xc589b8 += "<p>总账号数: " + _0x82c6a9.length + "</p>";
    _0xc589b8 += "<p>成功: " + _0xefdd9d + " 个</p>";
    _0xc589b8 += "<p>失败: " + _0x3df2f3 + " 个</p>";
    _0xc589b8 += "<hr>";
    _0x82c6a9.forEach((_0x325be1, _0x2b763b) => {
      _0xc589b8 += "<h4>账号 " + (_0x2b763b + 1) + "</h4>";
      _0xc589b8 += "<p>用户ID: " + _0x325be1.userId + "</p>";
      if (_0x325be1.success && _0x325be1.result) {
        const _0x24a1d4 = _0x325be1.result;
        _0x24a1d4.couponId !== undefined ? (_0xc589b8 += "<p>券名称: " + (_0x431441[_0x24a1d4.couponId] || _0x24a1d4.couponId) + "</p>", _0xc589b8 += "<p>状态: " + (_0x24a1d4.success ? "成功" : "失败") + "</p>", _0xc589b8 += "<p>消息: " + _0x24a1d4.message + "</p>") : (_0xc589b8 += "<p>总计: " + (_0x24a1d4.total || 0) + " 张券</p>", _0xc589b8 += "<p>成功: " + (_0x24a1d4.success || 0) + " 张</p>", _0xc589b8 += "<p>失败: " + (_0x24a1d4.failed || 0) + " 张</p>", _0x24a1d4.results && _0x24a1d4.results.length > 0 && (_0xc589b8 += "<ul>", _0x24a1d4.results.forEach(_0x4bf599 => {
          const _0x1f1e83 = _0x431441[_0x4bf599.couponId] || _0x4bf599.couponId,
            _0x5ec42e = _0x4bf599.success ? "[成功]" : "[失败]";
          _0xc589b8 += "<li>" + _0x5ec42e + " " + _0x1f1e83 + ": " + _0x4bf599.message + "</li>";
        }), _0xc589b8 += "</ul>"));
      } else _0xc589b8 += "<p style=\"color:red;\">执行失败: " + (_0x325be1.error || "未知错误") + "</p>";
      if (_0x2b763b < _0x82c6a9.length - 1) {
        _0xc589b8 += "<hr>";
      }
    });
    _0xc589b8 += "<p>时间: " + new Date().toLocaleString("zh-CN") + "</p>";
    await _0x4d3618(_0x3acc7c, _0xc589b8);
  }
  _0x243ae1("\n脚本执行完成，即将退出...");
  process.exit(0);
}
require.main === module && _0x5c6e84().catch(_0x5b514d => {
  console.error("未捕获的错误:", _0x5b514d);
  process.exit(1);
});
module.exports = {
  "main": _0x5c6e84
};