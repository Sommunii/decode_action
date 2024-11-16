/*
@蛋炒饭
APP：速读免费小说
变量名：sdmfxsck
变量值：找到https://welfare-dj.palmestore.com/welfare/web/task/list?，将？后面所有的内容复制作为变量#需要提现的金额#（提现方式：微信：wechat，支付宝：alipay），多账号换行隔开
定时：8点会执行签到，每天运行20次，可以30分钟运行一次的那种
*/

NAME = "速读免费小说";
VALY = ["sdmfxsck"];
CK = "";
LOGS = 0;
usid = 0;

var rs = require("jsrsasign");

nowhour = Math.round(new Date().getHours()).toString();

const fs = require("fs");
Notify = 1;
var privateKeyString = "-----BEGIN PRIVATE KEY-----\nMIICdQIBADANBgkqhkiG9w0BAQEFAASCAl8wggJbAgEAAoGBAMXGjyS3p+3AVnlBJe5VQ6tC9inh8tVBve4r+yBjC5HQD6th2n3tSyuNVYaNRAFSEq+OENwnwwhjbYUnjLWb+qZscB43K1+4/WlKdvfgwQVXm0ZQ2+jMBf+165UBEEuuWT2WqXeKkkUqPQta5lrt4eFfbo53JcOO4D5fDSGQS5bZAgMBAAECgYAor4I/AXEQXeLsKtTMxMmY77uIPi0gZdfWqUGOFhIJOw4eKZEzGp++I+MWPPVieCnT55vcTmm2zg13uP0fVykmukWqZszG/ZNpPKYleOqnZOqQj7O3au8Ywz18F/pqD++PsUzxRVeXxSOOwmjQ0D2Pe/9yutz62pyiFGAzDsaI6QJBAMn8DeBT3AtcWuONdiHL3yC4NkGJDdyBbMOaWyvrcvUUZr13uS9mZO6pLTN6v9tkmPUdvYxcPTJ9wdGR7NcNPDsCQQD6qluGI2VAlz4s5UoDnelFKrwDPeiruE3I6wsrasK6h37DsAE6OrQgx2dm4yH7ntJHUlJCZ5ay1EBNfEexgQv7AkA1r2vUwxVKY7q4nqHWa8SbgrrRAmePw0qwVreC3erJHyoLk+XBpnqPQKIF+8tAueU5yTTXOLD/WZOJazrDEf5/AkBpwG+Ggu5Xtrcbd8ynA/sDHElf0MGVmNbwOgFnWs42pa1cX6fU6ilOXvIH3TFcF6A9SMS9kThpz9QlHJaek4P7AkAavQillA/wnrha9GsK5UFmzmwNfkjLLW4psAUsXOsqFXWMoxTd0xWuSbuVOzERpbFMBl1VoZQmD9BLSVOTNe+v\n-----END PRIVATE KEY-----";

function gogogo(_0x5bbc70, _0x50228b, _0x4b95ab) {
  const _0x2d204e = new URL("http://test.com?" + _0x4b95ab);

  for (let _0x10f801 = 0; _0x10f801 < _0x50228b.length; _0x10f801++) {
    const _0x145646 = _0x50228b[_0x10f801];
    _0x5bbc70[_0x145646] = _0x2d204e.searchParams.get(_0x145646);
  }
}

class Bar {
  constructor(_0x203923) {
    this.url = _0x203923.split("#")[0];
    this.tx = _0x203923.split("#")[1];
    this.txff = _0x203923.split("#")[2];
    this._ = ++usid;
    this.f = "小主 [" + this._ + "] ";
    let _0x4de020 = ["usr", "p1", "p2", "p3", "p4", "p5", "p7", "p9", "p12", "p16", "p21", "p22", "p25", "p26", "p28", "p29", "p30", "p31", "p33", "p34", "zyeid", "kt", "firm"];
    gogogo(this, _0x4de020, this.url);
    this.message = "";
    this.logs = true;
  }

  async getsign(_0x102ac8) {
    let _0x249def = $.getSHA1withRSA(_0x102ac8);

    return _0x249def;
  }

  async getsign2(_0x2fb154, _0x4a72da, _0xdde6a6) {
    const _0x124db4 = require("crypto-js"),
          _0x250013 = require("qs"),
          _0x18fd00 = _0x2fb154.split("?");

    let _0x216258 = _0x18fd00[0];

    const _0x4e3353 = Object.assign(Object.assign({}, _0xdde6a6), _0x250013.parse(_0x18fd00[1]));

    _0x216258 += _0x250013.stringify(_0x4e3353, {
      encode: false,
      sort: (_0x40c02b, _0x2e838f) => _0x40c02b.localeCompare(_0x2e838f)
    });

    const _0x17df27 = _0x124db4.SHA256(_0x216258).toString();

    let _0x10e601 = Date.now() / 1000 | 0,
        _0x349dc6 = _0x10e601.toString(16);

    const _0x15d636 = _0x124db4.SHA256(_0x17df27.substring(9, 25) + _0x10e601).toString();

    return {
      sign: _0x15d636,
      nonce: _0x349dc6
    };
  }

  async userinfo() {
    let _0x21110c = encodeURIComponent(this.p1),
        _0x56c374 = $.time(13),
        _0x5565dc = "timestamp=" + _0x56c374 + "&usr=" + this.usr,
        _0x3eea0d = await this.getsign(_0x5565dc),
        _0x3b24e2 = _0x3eea0d.replace(/_/g, "/").replace(/-/g, "+"),
        _0x29501a = await $.task("get", "https://dj.palmestore.com/zyuc/api/user/accountInfo?pluginVersion=800.4&sign=" + _0x3b24e2 + "=&timestamp=" + _0x56c374 + "&usr=" + this.usr + "&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x21110c + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=" + this.firm + "&d1=2.0.6", {});

    if (_0x29501a.code == 0) {
      this.name = _0x29501a.body.userInfo.userNick;
      this.yue = _0x29501a.body.gold.totalCash;
      console.log("【" + this.name + "】登陆成功，当前余额:" + _0x29501a.body.gold.totalCash + "，当前金币" + _0x29501a.body.gold.goldAmount);
      this.message += "【" + this.name + "】当前余额:" + _0x29501a.body.gold.totalCash + "，当前金币" + _0x29501a.body.gold.goldAmount;
      this.logs = true;
    } else {
      this.logs = false;
    }
  }

  async upload() {
    let _0x55a9cc = encodeURIComponent(this.p1),
        _0x1ab9f1 = $.time(13),
        _0x23c875 = $.SJS(32, 2),
        _0x2f38e7 = "appKey=5722025043134&deviceToken=" + _0x23c875 + "&platform=android_searchmaster&timestamp=" + _0x1ab9f1,
        _0x1d146e = await this.getsign(_0x2f38e7),
        _0x43e5d1 = encodeURIComponent(_0x1d146e);
  }

  async tasklist() {
    let _0x50d136 = encodeURIComponent(this.p1),
        _0x2b1f81 = "/welfare/web/task/list?&source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=232.76&mcTacid=&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x50d136 + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit",
        _0x4622ba = "get",
        _0x4b4a23 = await this.getsign2(_0x2b1f81, _0x4622ba, {}),
        _0x423cb4 = {
      "x-sign": _0x4b4a23.sign,
      "x-nonce": _0x4b4a23.nonce
    },
        _0x41b3f2 = await $.task("get", "https://welfare-dj.palmestore.com" + _0x2b1f81, _0x423cb4),
        _0x12c30d = _0x41b3f2.body.task_info.box.reward_list,
        _0x17e382 = _0x41b3f2.body.task_info.box.id,
        _0xa84181 = _0x41b3f2.body.task_info.box.task_type,
        _0x1c9fa0 = _0x41b3f2.body.task_info.sign.id,
        _0x102a1c = _0x41b3f2.body.task_info.sign.task_type;

    _0x41b3f2.body.task_info.box.box_status_data.count <= 20 && (await this.box(_0x12c30d, _0x17e382, _0xa84181));

    for (let _0x417bef of _0x41b3f2.body.task_info.sign.detail_list) {
      let _0x435881 = _0x41b3f2.body.task_info.sign.detail_list.find(_0xb4f2c3 => _0xb4f2c3.sign_status === 1)?.["sub_id"];

      if (_0x417bef.days == "30") {
        let _0x2c35c5 = "签到";
        (nowhour == 10 || nowhour == 9) && (await this.signin(_0x1c9fa0, _0x102a1c, _0x435881, _0x2c35c5));
      }
    }

    let _0x241670 = _0x41b3f2.body.task_info.times;

    for (let _0x1906c5 of _0x241670.item) {
      let _0x1bdabe = _0x1906c5.start_time.split(":")[0],
          _0x1181e9 = _0x1906c5.end_time.split(":")[0];

      if (nowhour >= _0x1bdabe && nowhour < _0x1181e9 && _0x1906c5.reward_status == 1) {
        let _0x3f1109 = _0x1906c5.id,
            _0x40c4ea = _0x1906c5.task_type,
            _0x17be1f = _0x1906c5.sub_type,
            _0x4109a2 = "领取三餐";
        await this.signin(_0x3f1109, _0x40c4ea, _0x17be1f, _0x4109a2);
      }
    }

    let _0x4fe8a3 = _0x41b3f2.body.task_info.video,
        _0x1d6eb5 = _0x4fe8a3.id,
        _0x320100 = _0x4fe8a3.task_type,
        _0x5f07de = _0x4fe8a3.process.done_count + 1,
        _0x3f2ada = "看视频";

    await this.signin(_0x1d6eb5, _0x320100, _0x5f07de, _0x3f2ada);
    let _0x4be3a6 = _0x41b3f2.body.task_info.ad_wall,
        _0x45195f = _0x4be3a6.id;

    if (_0x4be3a6.process.done_count < _0x4be3a6.process.total_count) {
      await this.newss(_0x45195f);
    }
  }

  async findMaxCoinSubId(_0x2bc849) {
    let _0x1a6bd0 = -Infinity,
        _0x59b056 = null;

    for (let _0x3b15f8 = 0; _0x3b15f8 < _0x2bc849.length; _0x3b15f8++) {
      const _0x695ef5 = _0x2bc849[_0x3b15f8];

      if (_0x695ef5.coin > _0x1a6bd0) {
        _0x1a6bd0 = _0x695ef5.coin;
        _0x59b056 = _0x695ef5.sub_id;
      }
    }

    return {
      maxCoin: _0x1a6bd0,
      maxSubId: _0x59b056
    };
  }

  async box(_0x58c3ca, _0x14e3d6, _0x2ea341) {
    let _0x58935c = await this.findMaxCoinSubId(_0x58c3ca),
        _0x3e55fa = "/welfare/web/task/receive?id=" + _0x14e3d6 + "&task_type=" + _0x2ea341 + "&sub_id=" + _0x58935c.maxSubId + "&" + this.url,
        _0x5c8775 = "get",
        _0x65a8af = await this.getsign2(_0x3e55fa, _0x5c8775, {}),
        _0x4b8204 = {
      "x-sign": _0x65a8af.sign,
      "x-nonce": _0x65a8af.nonce
    },
        _0x23ceb6 = await $.task("get", "https://welfare-dj.palmestore.com/welfare/web/task/receive?id=" + _0x14e3d6 + "&task_type=" + _0x2ea341 + "&sub_id=" + _0x58935c.maxSubId + "&" + this.url, _0x4b8204);

    _0x23ceb6.code == 0 && (console.log("【" + this.name + "】开宝箱成功,获得" + _0x58935c.maxCoin + "金币"), await $.wait(8000, 15000), await this.boxvideo());
  }

  async boxvideo() {
    let _0x8f755a = encodeURIComponent(this.p1),
        _0xea5a51 = $.time(13),
        _0x52ea7e = "p2=" + this.p2 + "&param=11105&timestamp=" + _0xea5a51 + "&usr=" + this.usr,
        _0x1fc7b6 = await this.getsign(_0x52ea7e),
        _0x50d219 = encodeURIComponent(_0x1fc7b6.replace(/_/g, "/").replace(/-/g, "+")),
        _0x5c0ea2 = "/welfare/web/video/report?source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=45.79&mcTacid=&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x8f755a + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit&param=11105&sign=" + _0x50d219 + "%3D&timestamp=" + _0xea5a51 + "&param=11105&pos=VIDEO_POP_WINDOW&source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=45.79&mcTacid=&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x8f755a + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit",
        _0x5a5f6c = "get",
        _0x13cc0d = await this.getsign2(_0x5c0ea2, _0x5a5f6c, {}),
        _0x11b07f = {
      "x-sign": _0x13cc0d.sign,
      "x-nonce": _0x13cc0d.nonce
    },
        _0x179c71 = await $.task("get", "https://welfare-dj.palmestore.com/welfare/web/video/report?source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=45.79&mcTacid=&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x8f755a + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit&param=11105&sign=" + _0x50d219 + "%3D&timestamp=" + _0xea5a51 + "&param=11105&pos=VIDEO_POP_WINDOW&source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=45.79&mcTacid=&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x8f755a + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit", _0x11b07f);

    if (_0x179c71.code == 0) {
      console.log("【" + this.name + "】观看宝箱视频成功，获得" + _0x179c71.body.gold + "金币");
    }
  }

  async signin(_0x304ee3, _0xa4f140, _0x26ab37, _0x2b2c86) {
    let _0x49c7a0 = encodeURIComponent(this.p1),
        _0x23b6c8 = "/welfare/web/task/receive?id=" + _0x304ee3 + "&task_type=" + _0xa4f140 + "&sub_id=" + _0x26ab37 + "&source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=232.76&mcTacid=&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x49c7a0 + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit",
        _0x53f60c = "get",
        _0x360e89 = await this.getsign2(_0x23b6c8, _0x53f60c, {}),
        _0x21f729 = {
      "x-sign": _0x360e89.sign,
      "x-nonce": _0x360e89.nonce
    },
        _0x47daab = await $.task("get", "https://welfare-dj.palmestore.com/welfare/web/task/receive?id=" + _0x304ee3 + "&task_type=" + _0xa4f140 + "&sub_id=" + _0x26ab37 + "&source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=232.76&mcTacid=&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x49c7a0 + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit", _0x21f729);

    if (_0x47daab.code == 0) {
      console.log("【" + this.name + "】" + _0x2b2c86 + "成功,获得" + _0x47daab.body.reward_amount + "金币");
    } else {
      console.log("【" + this.name + "】" + _0x2b2c86 + "失败,可能原因：" + _0x47daab.msg);
    }
  }

  async newss(_0x55a688) {
    let _0x5b69af = encodeURIComponent(this.p1),
        _0x5c0a2a = $.time(13),
        _0x8d175f = "positionId=" + _0x55a688 + "&timestamp=" + _0x5c0a2a + "&usr=" + this.usr,
        _0x16a27 = await this.getsign(_0x8d175f),
        _0x4d4c09 = encodeURIComponent(_0x16a27.replace(/_/g, "/").replace(/-/g, "+")),
        _0x20da53 = await $.task("get", "https://dj.palmestore.com/zycl/api/gold/adWallReward?rewardCount=200&positionId=" + _0x55a688 + "&positionType=2&rewardType=1&sign=" + _0x4d4c09 + "%3D&adWallId=94&timestamp=" + _0x5c0a2a + "&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x5b69af + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=" + this.firm + "&d1=2.0.6", {});

    _0x20da53.code == 0 && (console.log("【" + this.name + "】观看资讯成功，获得200金币"), await this.dianjinews(_0x55a688));
  }

  async dianjinews(_0x471cda) {
    let _0x3fa5a2 = encodeURIComponent(this.p1),
        _0x2c5b36 = $.time(13),
        _0x4d68a8 = "positionId=" + _0x471cda + "&timestamp=" + _0x2c5b36 + "&usr=" + this.usr,
        _0xecba6c = await this.getsign(_0x4d68a8),
        _0x181255 = encodeURIComponent(_0xecba6c.replace(/_/g, "/").replace(/-/g, "+")),
        _0x38e396 = await $.task("get", "https://dj.palmestore.com/zycl/api/gold/adWallReward?rewardCount=50&positionId=" + _0x471cda + "&positionType=2&rewardType=2&sign=" + _0x181255 + "%3D&adWallId=94&timestamp=" + _0x2c5b36 + "&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x3fa5a2 + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=" + this.firm + "&d1=2.0.6", {});

    _0x38e396.code == 0 && console.log("【" + this.name + "】点击资讯成功，获得50金币");
  }

  async shuavideo() {
    for (let _0xbd10c = 0; _0xbd10c < 8; _0xbd10c++) {
      let _0x46442e = encodeURIComponent(this.p1),
          _0x34d6d8 = $.time(13),
          _0x540a45 = "p2=" + this.p2 + "&param=11227&timestamp=" + _0x34d6d8 + "&usr=" + this.usr,
          _0x238e0d = await this.getsign(_0x540a45),
          _0x4324e6 = encodeURIComponent(_0x238e0d.replace(/_/g, "/").replace(/-/g, "+")),
          _0x113bb8 = "/welfare/web/video/report?zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x46442e + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&param=11227&sign=" + _0x4324e6 + "%3D&timestamp=" + _0x34d6d8 + "&param=11227&pos=BUTTONVIDEO&" + this.url,
          _0x5e3f76 = "get",
          _0x163409 = await this.getsign2(_0x113bb8, _0x5e3f76, {}),
          _0x4124c3 = {
        "x-sign": _0x163409.sign,
        "x-nonce": _0x163409.nonce
      },
          _0x3b441c = await $.task("get", "https://welfare-dj.palmestore.com/welfare/web/video/report?zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x46442e + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&param=11227&sign=" + _0x4324e6 + "%3D&timestamp=" + _0x34d6d8 + "&param=11227&pos=BUTTONVIDEO&" + this.url, _0x4124c3);

      _0x3b441c.code == 0 && console.log("【" + this.name + "】刷视频成功，获得" + _0x3b441c.body.gold + "金币");
    }
  }

  async cxlogin() {
    let _0x32cf03 = encodeURIComponent(this.p1),
        _0x7b8dd2 = "/welfare/web/user/withdraw/schedule?source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=70.05&mcTacid=&&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x32cf03 + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit",
        _0x20a17c = "get",
        _0x1d7382 = await this.getsign2(_0x7b8dd2, _0x20a17c, {}),
        _0x252dc5 = {
      "x-sign": _0x1d7382.sign,
      "x-nonce": _0x1d7382.nonce
    },
        _0x1b2ba8 = await $.task("get", "https://welfare-dj.palmestore.com/welfare/web/user/withdraw/schedule?source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=70.05&mcTacid=&&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x32cf03 + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit", _0x252dc5),
        _0x57bb18 = _0x1b2ba8.body.continue_login_days;

    return _0x57bb18;
  }

  async txid() {
    let _0xf17a67 = await this.cxlogin(),
        _0x1c6c1b = encodeURIComponent(this.p1),
        _0xe4157e = "/welfare/web/withdraw/info?source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=70.05&mcTacid=&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x1c6c1b + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit",
        _0x16f92d = "get",
        _0x4997cf = await this.getsign2(_0xe4157e, _0x16f92d, {}),
        _0x267004 = {
      "x-sign": _0x4997cf.sign,
      "x-nonce": _0x4997cf.nonce
    },
        _0x1e5536 = await $.task("get", "https://welfare-dj.palmestore.com/welfare/web/withdraw/info?source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=70.05&mcTacid=&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x1c6c1b + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit", _0x267004);

    if (_0x1e5536.code == 0) {
      for (let _0x15fb87 of _0x1e5536.body.withdraw_products) {
        let _0x566977 = _0x15fb87.id;

        for (let _0x43a267 of _0x15fb87.list) {
          if (this.tx == _0x43a267.cash) {
            let _0x1929ee = _0x43a267.id,
                _0x408e85 = _0x43a267.start_day,
                _0x3a102f = _0x43a267.coin;

            if (this.yue >= this.tx && _0xf17a67 >= _0x408e85) {
              await this.txs(_0x566977, _0x1929ee, _0x3a102f);
            } else {
              console.log("【" + this.name + "】不满足提现条件，请检查余额或连续签到天数");
            }
          }
        }
      }
    }
  }

  async txs(_0x405c6a, _0x45ff39, _0x2e50b6) {
    let _0x5c4b10 = encodeURIComponent(this.p1),
        _0x2f42e6 = "/welfare/web/withdraw/exec?type=cash_wallet&coin=" + _0x2e50b6 + "&price=" + this.tx + "&product_id=" + _0x405c6a + "&item_id=" + _0x45ff39 + "&method=" + this.txff + "&sign=&smboxid=BLH5IaZ8vy3ZKCZpvrmvqoBwoS1ak1XbK5%2FZEixhEX3azcmHR9ZnMHjNJuLF4dELarKZumBh66z70k00SoHXCBQ%3D%3D&reward_type=&discount=false&source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=70.05&mcTacid=&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x5c4b10 + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit",
        _0x5772d8 = "get",
        _0x259b3f = await this.getsign2(_0x2f42e6, _0x5772d8, {}),
        _0x147085 = {
      "x-sign": _0x259b3f.sign,
      "x-nonce": _0x259b3f.nonce
    },
        _0x1e24f2 = await $.task("get", "https://welfare-dj.palmestore.com/welfare/web/withdraw/exec?type=cash_wallet&coin=" + _0x2e50b6 + "&price=" + this.tx + "&product_id=" + _0x405c6a + "&item_id=" + _0x45ff39 + "&method=" + this.txff + "&sign=&smboxid=BLH5IaZ8vy3ZKCZpvrmvqoBwoS1ak1XbK5%2FZEixhEX3azcmHR9ZnMHjNJuLF4dELarKZumBh66z70k00SoHXCBQ%3D%3D&reward_type=&discount=false&source=welfare&showContentInStatusBar=1&ecpmMix=0.0&ecpmVideo=70.05&mcTacid=&zyeid=" + this.zyeid + "&usr=" + this.usr + "&rgt=7&p1=" + _0x5c4b10 + "&ku=" + this.usr + "&kt=" + this.kt + "&pc=10&p2=" + this.p2 + "&&p3=" + this.p3 + "&p4=" + this.p4 + "&p5=" + this.p5 + "&p7=" + this.p7 + "&p9=" + this.p9 + "&p12=&p16=" + this.p16 + "&p21=" + this.p21 + "&p22=" + this.p22 + "&p25=" + this.p25 + "&p26=" + this.p26 + "&p28=" + this.p28 + "&p29=" + this.p29 + "&p30=&p31=" + this.p31 + "&p33=" + this.p33 + "&p34=" + this.p34 + "&firm=Xiaomi&d1=2.0.6&pca=channel-visit", _0x147085);

    _0x1e24f2.code == 0 ? console.log("【" + this.name + "】成功提现" + this.tx + "元") : console.log(_0x1e24f2);
  }

}

$ = DD();
!(async () => {
  console.log(NAME);

    await $.ExamineCookie();

      await $.Multithreading("upload");
      await $.Multithreading("userinfo");

      let _0x414430 = $.cookie_list.filter(_0x1b1404 => _0x1b1404.logs == true);

      if (_0x414430.length == 0) {
        console.log("Cookie格式错误 或 账号被禁封");
        return;
      } else {
        await $.Multithreading("tasklist");
        await $.Multithreading("shuavideo");
        await $.Multithreading("txid");
      }
  let _0x59f04d = [];

  for (let _0x303847 of $.cookie_list) {
    if (_0x303847.message) {
      _0x59f04d.push(_0x303847.message);
    }
  }

  if (_0x59f04d.length > 0) {
    await $.SendMsg(_0x59f04d.join("\n"));
  }
})().catch(_0x32638e => {
  console.log(_0x32638e);
}).finally(() => {});

function DD() {
  return new class {
    constructor() {
      this.cookie_list = [];
      this.message = "";
      this.CryptoJS = require("crypto-js");
      this.NodeRSA = require("node-rsa");
      this.request = require("request");
      this.Sha_Rsa = require("jsrsasign");
    }

    async Multithreading(_0x1405ea, _0x44300e, _0x862274) {
      let _0x53e54c = [];
      !_0x862274 && (_0x862274 = 1);

      while (_0x862274--) {
        for (let _0x3420cf of $.cookie_list) {
          _0x53e54c.push(_0x3420cf[_0x1405ea](_0x44300e));
        }
      }

      await Promise.allSettled(_0x53e54c);
    }

    ExamineCookie() {
      let _0x5529ea = process.env[VALY] || CK,
          _0xdcf259 = 0;

      if (_0x5529ea) {
        for (let _0xcda652 of _0x5529ea.split("\n").filter(_0x5226b8 => !!_0x5226b8)) {
          $.cookie_list.push(new Bar(_0xcda652));
        }

        _0xdcf259 = $.cookie_list.length;
      } else {
        console.log("\n【" + NAME + "】：未填写变量: " + VALY);
      }

      console.log("共找到" + _0xdcf259 + "个账号");
      return $.cookie_list;
    }

    task(_0x3e3a9e, _0x64f356, _0x2ac3b9, _0x2a80e9, _0x507c34) {
      if (_0x3e3a9e == "delete") {
        _0x3e3a9e = _0x3e3a9e.toUpperCase();
      } else {
        _0x3e3a9e = _0x3e3a9e;
      }

      if (_0x3e3a9e == "post") {
        delete _0x2ac3b9["content-type"];
        delete _0x2ac3b9["Content-type"];
        delete _0x2ac3b9["content-Type"];

        if ($.safeGet(_0x2a80e9)) {
          _0x2ac3b9["Content-Type"] = "application/json;charset=UTF-8";
        } else {
          _0x2ac3b9["Content-Type"] = "application/x-www-form-urlencoded";
        }

        if (_0x2a80e9) {
          _0x2ac3b9["Content-Length"] = $.lengthInUtf8Bytes(_0x2a80e9);
        }
      }

      if (_0x3e3a9e == "get") {
        delete _0x2ac3b9["content-type"];
        delete _0x2ac3b9["Content-type"];
        delete _0x2ac3b9["content-Type"];
        delete _0x2ac3b9["Content-Length"];
      }

      _0x2ac3b9.Host = _0x64f356.replace("//", "/").split("/")[1];
      return new Promise(async _0x16c6b9 => {
        if (_0x3e3a9e.indexOf("T") < 0) {
          var _0x24fbda = {
            url: _0x64f356,
            headers: _0x2ac3b9,
            body: _0x2a80e9,
            proxy: "http://" + _0x507c34
          };
        } else {
          var _0x24fbda = {
            url: _0x64f356,
            headers: _0x2ac3b9,
            form: JSON.parse(_0x2a80e9),
            proxy: "http://" + _0x507c34
          };
        }

        !_0x507c34 && delete _0x24fbda.proxy;

        this.request[_0x3e3a9e.toLowerCase()](_0x24fbda, (_0x73d250, _0x5e0db0, _0x33c9f8) => {
          try {
            _0x33c9f8 && LOGS == 1 && (console.log("================ 请求 ================"), console.log(_0x24fbda), console.log("================ 返回 ================"), $.safeGet(_0x33c9f8) ? console.log(JSON.parse(_0x33c9f8)) : console.log(_0x33c9f8));
          } catch (_0x7feb72) {
            console.log(_0x7feb72, _0x64f356 + "\n" + _0x2ac3b9);
          } finally {
            let _0x1e7b17 = "";

            if (!_0x73d250) {
              if ($.safeGet(_0x33c9f8)) {
                _0x1e7b17 = JSON.parse(_0x33c9f8);
              } else {
                _0x33c9f8.indexOf("/") != -1 && _0x33c9f8.indexOf("+") != -1 ? _0x1e7b17 = _0x33c9f8 : _0x1e7b17 = _0x33c9f8;
              }
            } else {
              _0x1e7b17 = _0x64f356 + "   API请求失败，请检查网络重试\n" + _0x73d250;
            }

            return _0x16c6b9(_0x1e7b17);
          }
        });
      });
    }

    parseHTML(_0x5528a4) {
      const _0xd6937c = require("cheerio"),
            _0x10de91 = _0xd6937c.load(_0x5528a4),
            _0x45f957 = [],
            _0xeb5eaa = _0x10de91(".task_module");

      _0xeb5eaa.each((_0x1d6f76, _0x2f04ea) => {
        const _0x164c7a = _0x10de91(_0x2f04ea),
              _0x59c774 = _0x164c7a.find(".welfare_title h1").text(),
              _0x3e6e7f = _0x164c7a.find(".task_list .list_item"),
              _0x124a29 = [];

        _0x3e6e7f.each((_0x46c574, _0xb66e57) => {
          const _0x2159ec = _0x10de91(_0xb66e57),
                _0x41a78a = _0x2159ec.find(".task_name").text().trim(),
                _0x2d6489 = _0x2159ec.find(".havegold").text().trim(),
                _0x3d474e = _0x2159ec.find(".task_other").text().trim(),
                _0x51aea1 = {
            name: _0x41a78a,
            reward: _0x2d6489,
            other: _0x3d474e
          };

          _0x124a29.push(_0x51aea1);
        });

        const _0x433501 = {
          title: _0x59c774,
          tasks: _0x124a29
        };

        _0x45f957.push(_0x433501);
      });

      return _0x45f957;
    }

    async readUUID() {
      const _0x205881 = "uuid.txt";
      await $.generateUUID(_0x205881);

      try {
        const _0x358b0a = fs.readFileSync(_0x205881, "utf8"),
              _0x42983f = _0x358b0a.trim();

        return _0x42983f;
      } catch (_0x77e03b) {
        return null;
      }
    }

    generateUUID(_0x5a33ea) {
      if (fs.existsSync(_0x5a33ea)) {
        return;
      }

      const _0x91b670 = uuidv4();

      fs.writeFile(_0x5a33ea, _0x91b670, "utf8", _0x18b2a2 => {
        if (_0x18b2a2) {
          console.error("写入文件出错: " + _0x18b2a2.message);
          return;
        }

        console.log("uuid.txt 文件已创建并写入 UUID。");
      });
    }

    async getkami() {
      let _0x51f644 = await $.readUUID(),
          _0x4340ba = await $.task("get", "http://" + dcfhost + ":5705/query?dcf=" + dcfkey + "&MA=" + _0x51f644, {});

      return _0x4340ba;
    }

    async SendMsg(_0xb9806f) {
      if (!_0xb9806f) {
        return;
      }

      if (Notify == 1) {
        var _0x4252e1 = require("./sendNotify");

        await _0x4252e1.sendNotify(NAME, _0xb9806f);
      }
    }

    lengthInUtf8Bytes(_0x5b6624) {
      let _0x7a9fb9 = encodeURIComponent(_0x5b6624).match(/%[89ABab]/g);

      return _0x5b6624.length + (_0x7a9fb9 ? _0x7a9fb9.length : 0);
    }

    randomArr(_0x2e5098) {
      return _0x2e5098[parseInt(Math.random() * _0x2e5098.length, 10)];
    }

    wait(_0x3f89bd) {
      return new Promise(_0x5328f5 => setTimeout(_0x5328f5, _0x3f89bd));
    }

    time(_0x59f268) {
      if (_0x59f268 == 10) {
        return Math.round(+new Date() / 1000);
      } else {
        return +new Date();
      }
    }

    timenow(_0x48ee90) {
      let _0x4bcd7c = new Date();

      if (_0x48ee90 == undefined) {
        let _0x52af99 = new Date(),
            _0x4f5fe5 = _0x52af99.getFullYear() + "-",
            _0x933885 = (_0x52af99.getMonth() + 1 < 10 ? "0" + (_0x52af99.getMonth() + 1) : _0x52af99.getMonth() + 1) + "-",
            _0x1971ed = _0x52af99.getDate() + " ",
            _0x366c20 = _0x52af99.getHours() + ":",
            _0xaf4c37 = _0x52af99.getMinutes() + ":",
            _0xfc6d8 = _0x52af99.getSeconds() + 1 < 10 ? "0" + _0x52af99.getSeconds() : _0x52af99.getSeconds();

        return _0x4f5fe5 + _0x933885 + _0x1971ed + _0x366c20 + _0xaf4c37 + _0xfc6d8;
      } else {
        if (_0x48ee90 == 0) {
          return _0x4bcd7c.getFullYear();
        } else {
          if (_0x48ee90 == 1) {
            return _0x4bcd7c.getMonth() + 1 < 10 ? "0" + (_0x4bcd7c.getMonth() + 1) : _0x4bcd7c.getMonth() + 1;
          } else {
            if (_0x48ee90 == 2) {
              return _0x4bcd7c.getDate();
            } else {
              if (_0x48ee90 == 3) {
                return _0x4bcd7c.getHours();
              } else {
                if (_0x48ee90 == 4) {
                  return _0x4bcd7c.getMinutes();
                } else {
                  if (_0x48ee90 == 5) {
                    return _0x4bcd7c.getSeconds() + 1 < 10 ? "0" + _0x4bcd7c.getSeconds() : _0x4bcd7c.getSeconds();
                  }
                }
              }
            }
          }
        }
      }
    }

    safeGet(_0x1b6d3e) {
      try {
        if (typeof JSON.parse(_0x1b6d3e) == "object") {
          return true;
        }
      } catch (_0x2f14e7) {
        return false;
      }
    }

    SJS(_0x591436, _0x4978ba) {
      if (_0x4978ba == 0) {
        let _0x3e4cda = "QWERTYUIOPASDFGHJKLZXCVBNM01234567890123456789",
            _0x54f0c0 = _0x3e4cda.length,
            _0x3f44d3 = "";

        for (let _0x5e87a6 = 0; _0x5e87a6 < _0x591436; _0x5e87a6++) {
          _0x3f44d3 += _0x3e4cda.charAt(Math.floor(Math.random() * _0x54f0c0));
        }

        return _0x3f44d3;
      } else {
        if (_0x4978ba == 1) {
          let _0x47daf4 = "qwertyuiopasdfghjklzxcvbnm0123456789",
              _0x19c2b4 = _0x47daf4.length,
              _0x570616 = "";

          for (let _0x5980ff = 0; _0x5980ff < _0x591436; _0x5980ff++) {
            _0x570616 += _0x47daf4.charAt(Math.floor(Math.random() * _0x19c2b4));
          }

          return _0x570616;
        } else {
          let _0x1640a4 = "0123456789",
              _0x86ba1e = _0x1640a4.length,
              _0x118a28 = "";

          for (let _0x38711b = 0; _0x38711b < _0x591436; _0x38711b++) {
            _0x118a28 += _0x1640a4.charAt(Math.floor(Math.random() * _0x86ba1e));
          }

          return _0x118a28;
        }
      }
    }

    udid(_0x3704fc) {
      function _0x59b951() {
        return ((1 + Math.random()) * 65536 | 0).toString(16).substring(1);
      }

      let _0x551fa5 = _0x59b951() + _0x59b951() + "-" + _0x59b951() + "-" + _0x59b951() + "-" + _0x59b951() + "-" + _0x59b951() + _0x59b951() + _0x59b951();

      return _0x3704fc == 0 ? _0x551fa5.toUpperCase() : _0x551fa5.toLowerCase();
    }

    encodeUnicode(_0x902ff9) {
      var _0x2bf270 = [];

      for (var _0x1f9357 = 0; _0x1f9357 < _0x902ff9.length; _0x1f9357++) {
        _0x2bf270[_0x1f9357] = ("00" + _0x902ff9.charCodeAt(_0x1f9357).toString(16)).slice(-4);
      }

      return "\\u" + _0x2bf270.join("\\u");
    }

    base64ToHex(_0x171105) {
      const _0xd7b452 = atob(_0x171105),
            _0x59044e = new Uint8Array(_0xd7b452.length);

      for (let _0x34aaf8 = 0; _0x34aaf8 < _0xd7b452.length; _0x34aaf8++) {
        _0x59044e[_0x34aaf8] = _0xd7b452.charCodeAt(_0x34aaf8);
      }

      let _0x2b71b4 = "";

      for (let _0xacfa60 = 0; _0xacfa60 < _0x59044e.length; _0xacfa60++) {
        const _0x41b916 = _0x59044e[_0xacfa60].toString(16).padStart(2, "0");

        _0x2b71b4 += _0x41b916;
      }

      return _0x2b71b4;
    }

    decodeUnicode(_0x2f71d2) {
      _0x2f71d2 = _0x2f71d2.replace(/\\u/g, "%u");
      return unescape(unescape(_0x2f71d2));
    }

    RT(_0x5cf25b, _0x5e54e4) {
      return Math.round(Math.random() * (_0x5e54e4 - _0x5cf25b) + _0x5cf25b);
    }

    arrNull(_0x27aea7) {
      var _0x4b63bb = _0x27aea7.filter(_0x202aa9 => {
        return _0x202aa9 && _0x202aa9.trim();
      });

      return _0x4b63bb;
    }

    nowtime() {
      return new Date(new Date().getTime() + new Date().getTimezoneOffset() * 60 * 1000 + 28800000);
    }

    timecs() {
      let _0x1dd940 = $.nowtime();

      JSON.stringify(_0x1dd940).indexOf(" ") >= 0 && (_0x1dd940 = _0x1dd940.replace(" ", "T"));
      return new Date(_0x1dd940).getTime() - 28800000;
    }

    rtjson(_0x1b5857, _0x26a986, _0x449a47, _0xd47b6a) {
      if (_0xd47b6a == 0) {
        return JSON.stringify(_0x1b5857.split(_0x26a986).reduce((_0x216f8b, _0x289b21) => {
          let _0x59b2cd = _0x289b21.split(_0x449a47);

          _0x216f8b[_0x59b2cd[0].trim()] = _0x59b2cd[1].trim();
          return _0x216f8b;
        }, {}));
      } else {
        return _0x1b5857.split(_0x26a986).reduce((_0x4eeef3, _0x53708c) => {
          let _0x482d5a = _0x53708c.split(_0x449a47);

          _0x4eeef3[_0x482d5a[0].trim()] = _0x482d5a[1].trim();
          return _0x4eeef3;
        }, {});
      }
    }

    MD5Encrypt(_0xb52650, _0x40998e) {
      if (_0xb52650 == 0) {
        return this.CryptoJS.MD5(_0x40998e).toString().toLowerCase();
      } else {
        if (_0xb52650 == 1) {
          return this.CryptoJS.MD5(_0x40998e).toString().toUpperCase();
        } else {
          if (_0xb52650 == 2) {
            return this.CryptoJS.MD5(_0x40998e).toString().substring(8, 24).toLowerCase();
          } else {
            if (_0xb52650 == 3) {
              return this.CryptoJS.MD5(_0x40998e).toString().substring(8, 24).toUpperCase();
            }
          }
        }
      }
    }

    SHA_Encrypt(_0x484efa, _0x39f05d, _0x36e783) {
      if (_0x484efa == 0) {
        return this.CryptoJS[_0x39f05d](_0x36e783).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x39f05d](_0x36e783).toString();
      }
    }

    HmacSHA_Encrypt(_0x31e749, _0x23ccb7, _0x2fafff, _0x107f30) {
      if (_0x31e749 == 0) {
        return this.CryptoJS[_0x23ccb7](_0x2fafff, _0x107f30).toString(this.CryptoJS.enc.Base64);
      } else {
        return this.CryptoJS[_0x23ccb7](_0x2fafff, _0x107f30).toString();
      }
    }

    Base64(_0x5e63d2, _0x51494d) {
      return _0x5e63d2 == 0 ? this.CryptoJS.enc.Base64.stringify(this.CryptoJS.enc.Utf8.parse(_0x51494d)) : this.CryptoJS.enc.Utf8.stringify(this.CryptoJS.enc.Base64.parse(_0x51494d));
    }

    DecryptCrypto(_0x1a857e, _0x283309, _0x1a2416, _0x463848, _0x10bbd1, _0x42bc3a, _0x202965) {
      if (_0x1a857e == 0) {
        const _0x2868c6 = this.CryptoJS[_0x283309].encrypt(this.CryptoJS.enc.Utf8.parse(_0x10bbd1), this.CryptoJS.enc.Utf8.parse(_0x42bc3a), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x202965),
          mode: this.CryptoJS.mode[_0x1a2416],
          padding: this.CryptoJS.pad[_0x463848]
        });

        return _0x2868c6.toString();
      } else {
        const _0x3efb25 = this.CryptoJS[_0x283309].decrypt(_0x10bbd1, this.CryptoJS.enc.Utf8.parse(_0x42bc3a), {
          iv: this.CryptoJS.enc.Utf8.parse(_0x202965),
          mode: this.CryptoJS.mode[_0x1a2416],
          padding: this.CryptoJS.pad[_0x463848]
        });

        return _0x3efb25.toString(this.CryptoJS.enc.Utf8);
      }
    }

    RSA(_0x1cd5c9, _0x382fa3) {
      const _0x1b05fc = require("node-rsa");

      let _0x12d32a = new _0x1b05fc("-----BEGIN PUBLIC KEY-----\n" + _0x382fa3 + "\n-----END PUBLIC KEY-----");

      _0x12d32a.setOptions({
        encryptionScheme: "pkcs1"
      });

      return _0x12d32a.encrypt(_0x1cd5c9, "base64", "utf8");
    }

    getSHA1withRSA(_0x320edf) {
      const _0x406eb4 = rs.KEYUTIL.getKey(privateKeyString),
            _0x2421df = new rs.KJUR.crypto.Signature({
        alg: "SHA1withRSA"
      });

      _0x2421df.init(_0x406eb4);

      _0x2421df.updateString(_0x320edf);

      const _0x68959b = _0x2421df.sign(),
            _0x59c96d = rs.hextob64u(_0x68959b);

      return _0x59c96d;
    }

    hexToBase64(_0x4a67cb) {
      const _0x48f27a = [];

      for (let _0x7ff0d5 = 0; _0x7ff0d5 < _0x4a67cb.length; _0x7ff0d5 += 2) {
        _0x48f27a.push(parseInt(_0x4a67cb.substr(_0x7ff0d5, 2), 16));
      }

      const _0x34070b = btoa(String.fromCharCode(..._0x48f27a));

      return _0x34070b;
    }

    Sha1withRsa(_0x22f480) {
      const {
        KEYUTIL: _0x403cfc,
        KJUR: _0x458439,
        b64utoutf8: _0x29e406,
        utf8tob64: _0xddc269
      } = require("jsrsasign"),
            _0x5f0ebb = _0x403cfc.getKey(Key),
            _0x34a917 = new _0x458439.crypto.Signature({
        alg: "SHA1withRSA"
      });

      _0x34a917.init(_0x5f0ebb);

      _0x34a917.updateString(_0x22f480);

      const _0x18c219 = _0x34a917.sign();

      let _0x335004 = $.hexToBase64(_0x18c219);

      return _0x335004;
    }

  }();
}
