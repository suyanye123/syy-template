var QQ = (rule, value, callback) => {
  if (value == "" || value == undefined) {
    callback(new Error("请输入QQ号"));
  } else if (/^[1-9][0-9]{4,10}$/.test(value)) {
    callback();
  } else {
    callback(new Error("QQ号格式不正确"));
  }
};
//微信
var wxNo = (rule, value, callback) => {
  if (value == "" || value == undefined) {
    callback();
  } else if (/^[a-zA-Z0-9_]+$/.test(value)) {
    if (value.length < 6 || value.length > 20) {
      callback(new Error("微信号长度范围6-20"));
    } else {
      callback();
    }
  } else {
    callback(new Error("微信号格式不正确"));
  }
};
//身份证
export function IdNum(rule, value, callback) {
  const reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}[0-9Xx]$)/;
  if (value == "" || value == undefined) {
    return callback(new Error("请输入身份证"));
  } else if (!reg.test(value)) {
    return callback(new Error("身份证格式不正确"));
  } else {
    callback();
  }
}
// 正整数
export function InterPositiveNum(rule, value, callback) {
  const reg = /^[1-9]\d*$/;
  if (value == "" || value == undefined) {
    return callback(new Error("请输入数字"));
  } else if (!reg.test(value)) {
    return callback(new Error("请输入正整数"));
  } else if (value.length > 11) {
    return callback(new Error("整数位不超过11位"));
  } else {
    callback();
  }
}
// 正整数非必填
export function InterPositiveNumNo(rule, value, callback) {
  const reg = /^[1-9]\d*$/;
  if (value == "" || value == undefined) {
    callback();
  } else {
    if (!reg.test(value)) {
      return callback(new Error("请输入正整数"));
    } else if (value.length > 11) {
      return callback(new Error("整数位不超过11位"));
    } else {
      callback();
    }
  }
}
// 自然数
export function InterZiran(rule, value, callback) {
  const reg = /^(0|[1-9][0-9]*)$/;
  if (value == "" || value == undefined) {
    return callback(new Error("请输入数字"));
  } else if (!reg.test(value)) {
    return callback(new Error("请输入自然数"));
  } else if (value.length > 11) {
    return callback(new Error("整数位不超过11位"));
  } else {
    callback();
  }
}
// 整数
export function InterNum(rule, value, callback) {
  const reg = /^(0|[1-9][0-9]*|-[1-9][0-9]*)$/;
  if (value == "" || value == undefined) {
    return callback(new Error("请输入数字"));
  } else if (!reg.test(value)) {
    return callback(new Error("请输入整数"));
  } else if (value.length > 11) {
    return callback(new Error("整数位不超过11位"));
  } else {
    callback();
  }
}
//银行卡号
export function bankNum(rule, value, callback) {
  const reg = /^([0-9]{1})\d{15,24}$/;
  if (value == "" || value == undefined) {
    return callback(new Error("请输入银行卡号"));
  } else if (!reg.test(value)) {
    return callback(new Error("银行卡号格式不正确"));
  } else {
    callback();
  }
}
//手机号
export function phone(rule, value, callback) {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  if (value == "" || value == undefined) {
    return callback(new Error("请输入手机号"));
  } else if (!reg.test(value)) {
    return callback(new Error("手机号码格式不正确"));
  } else {
    callback();
  }
}
//手机号非必填
export function phoneNo(rule, value, callback) {
  const reg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
  if (value == "" || value == undefined) {
    callback();
  } else {
    if (!reg.test(value)) {
      return callback(new Error("手机号码格式不正确"));
    } else {
      callback();
    }
  }
}
export function fixedPhoneNo(rule, value, callback) {
  if (value == "" || value == undefined) {
    callback();
  } else {
    const reg = /^[0-9]{7,8}$/;
    if (!reg.test(value)) {
      return callback(new Error("固定电话格式不正确"));
    } else {
      callback();
    }
  }
}
export function fixedPhoneAllNo(rule, value, callback) {
  if (value == "" || value == undefined) {
    callback();
  } else {
    const reg = /0\d{2,3}-\d{7,8}(|([-\u8f6c]{1}\d{1,5}))$/;
    if (!reg.test(value)) {
      return callback(new Error("固定电话格式不正确"));
    } else {
      callback();
    }
  }
}
//邮箱
export function email(rule, value, callback) {
  const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
  if (value == "" || value == undefined) {
    return callback(new Error("请输入邮箱"));
  } else if (!reg.test(value)) {
    return callback(new Error("邮箱格式不正确"));
  } else if (value.length > 30) {
    return callback(new Error("长度不能超过30位"));
  } else {
    callback();
  }
}
//邮箱不必填
export function emailNo(rule, value, callback) {
  const reg = /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/;
  if (value == "" || value == undefined) {
    callback();
  } else {
    if (!reg.test(value)) {
      return callback(new Error("邮箱格式不正确"));
    } else if (value.length > 30) {
      return callback(new Error("长度不能超过30位"));
    } else {
      callback();
    }
  }
}

//统一社会信用代码
export function creditNo(rule, value, callback) {
  const reg = /^[0-9A-Z]{18}$/;
  if (value == "" || value == undefined) {
    return callback(new Error("请输入统一社会信用代码"));
  } else if (!reg.test(value)) {
    return callback(new Error("统一社会信用代码格式不正确"));
  } else {
    callback();
  }
}

//IP校验 不必填
export function IpNo(rule, value, callback) {
  const reg = /^((1[0-9][0-9]\.)|(2[0-4][0-9]\.)|(25[0-5]\.)|([1-9][0-9]\.)|([0-9]\.)){3}((1[0-9][0-9])|(2[0-4][0-9])|(25[0-5])|([1-9][0-9])|([0-9]))$/;
  // const reg =  /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/;
  if (value == "" || value == undefined) {
    return callback();
  } else if (!reg.test(value)) {
    return callback(new Error("IP格式不正确"));
  } else {
    callback();
  }
}

//姓名校验
export function validName(rule, value, callback) {
  if (value == "" || value == undefined) {
    return callback(new Error("请输入姓名"));
  } else if (!/^[\u4e00-\u9fa5]+$/.test(value) && !/^[a-zA-Z]+$/.test(value)) {
    callback(new Error("只能输入全汉字或全英文"));
  } else if (value.length > 15) {
    callback(new Error("字符长度不能超过15位"));
  } else {
    callback();
  }
}
export function validNameNo(rule, value, callback) {
  if (value == "" || value == undefined) {
    return callback();
  } else if (!/^[\u4e00-\u9fa5]+$/.test(value) && !/^[a-zA-Z]+$/.test(value)) {
    callback(new Error("只能输入全汉字或全英文"));
  } else if (value.length > 15) {
    callback(new Error("字符长度不能超过15位"));
  } else {
    callback();
  }
}

//url地址校验必须加上协议 不必填
export function httpUrlNo(rule, value, callback) {
  const reg = /(http|https):\/\/([\w.]+\/?)\S*/;
  if (value == "" || value == undefined) {
    return callback();
  } else if (!reg.test(value)) {
    return callback(new Error("格式不正确，必须以http或https开头"));
  } else {
    callback();
  }
}

//url地址校验 不必填
export function urlNo(rule, value, callback) {
  const strRegex =
    "^((https|http|ftp|rtsp|mms)?://)" +
    "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" + //ftp的user@
    "(([0-9]{1,3}.){3}[0-9]{1,3}" + // IP形式的URL- 199.194.52.184
    "|" + // 允许IP和DOMAIN（域名）
    "([0-9a-z_!~*'()-]+.)*" + // 域名- www.
    "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]." + // 二级域名
    "[a-z]{2,6})" + // first level domain- .com or .museum
    "(:[0-9]{1,4})?" + // 端口- :80
    "((/?)|" + // a slash isn't required if there is no file name
    "(/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+/?)$";
  const reg = new RegExp(strRegex);
  if (value == "" || value == undefined) {
    return callback();
  } else if (!reg.test(value)) {
    return callback(new Error("格式不正确"));
  } else {
    callback();
  }
}

//金额不必填（正数   整数位最多16位 小数位2位）
export function moneyNo(rule, value, callback) {
  const reg = /^[0-9]+([.]{1}[0-9]{1,2})?$/; //整数部分不限制 小数部分最多2位
  if (value == "" || value == undefined) {
    callback();
  } else {
    if (!reg.test(value)) {
      return callback(new Error("请输入最多2位小数的整数"));
    } else {
      let intNum = Math.trunc(value); //获取输入值整数部分（会将数字的小数部分去掉，只保留整数部分）
      if (String(intNum).length > 16) {
        return callback(new Error("整数部分最多16位"));
      } else {
        callback();
      }
    }
  }
}
//传真不必填
export function faxNo(rule, value, callback) {
  const reg = /^(\d{3,4}-)?\d{7,8}$/;
  if (value == "" || value == undefined) {
    callback();
  } else {
    if (!reg.test(value)) {
      return callback(new Error("传真号格式不正确"));
    } else {
      callback();
    }
  }
}
//邮编不必填
export function postNumNo(rule, value, callback) {
  const reg = /^[0-8][0-7]\d{4}$/;
  if (value == "" || value == undefined) {
    callback();
  } else {
    if (!reg.test(value)) {
      return callback(new Error("邮编格式不正确"));
    } else {
      callback();
    }
  }
}
//银行账号不必填
export function bankNo(rule, value, callback) {
  const reg = /^([0-9]{1})\d{11,29}$/;
  if (value == "" || value == undefined) {
    callback();
  } else {
    if (!reg.test(value)) {
      return callback(new Error("银行账号格式不正确"));
    } else {
      callback();
    }
  }
}

//较少字段（姓名缩写、菜单栏目（影响前台展示）...）
export function validLength10(rule, value, callback) {
  if (value == "" || value == undefined) {
    callback();
  } else if (value.length > 10) {
    return callback(new Error("长度不能超过10位"));
  } else {
    callback();
  }
}
//影响页面展示的字段（姓名、资源分组、角色分组...）
export function validLength15(rule, value, callback) {
  if (value == "" || value == undefined) {
    callback();
  } else if (value.length > 15) {
    return callback(new Error("长度不能超过15位"));
  } else {
    callback();
  }
}
//普通输入框
export function validLength30(rule, value, callback) {
  if (value == "" || value == undefined) {
    callback();
  } else if (value.length > 30) {
    return callback(new Error("长度不能超过30位"));
  } else {
    callback();
  }
}
//普通文本框
export function validLength50(rule, value, callback) {
  if (value == "" || value == undefined) {
    callback();
  } else if (value.length > 50) {
    return callback(new Error("长度不能超过50位"));
  } else {
    callback();
  }
}
//特定长度 （如 流程类别 返回路径）
export function validLength100(rule, value, callback) {
  if (value == "" || value == undefined) {
    callback();
  } else if (value.length > 100) {
    return callback(new Error("长度不能超过100位"));
  } else {
    callback();
  }
}
//备注文本框
export function validLength500(rule, value, callback) {
  if (value == "" || value == undefined) {
    callback();
  } else if (value.length > 500) {
    return callback(new Error("长度不能超过500位"));
  } else {
    callback();
  }
}

export default {
  QQ: [
    {
      //QQ
      required: true,
      validator: QQ,
      trigger: "blur",
    },
  ],
  wxNo: [
    {
      validator: wxNo,
      trigger: "blur",
    },
  ],
  phone: [
    {
      //手机
      required: true,
      validator: phone,
      trigger: "blur",
    },
  ],
  phoneNo: [
    {
      //手机不必填
      validator: phoneNo,
      trigger: "blur",
    },
  ],
  fixedPhoneNo: [
    {
      //固定电话不必填
      validator: fixedPhoneNo,
      trigger: "blur",
    },
  ],
  fixedPhoneAllNo: [
    {
      //固定电话不必填
      validator: fixedPhoneAllNo,
      trigger: "blur",
    },
  ],
  email: [
    {
      //邮箱
      required: true,
      validator: email,
      trigger: "blur",
    },
  ],
  emailNo: [
    {
      //邮箱不必填
      validator: emailNo,
      trigger: "blur",
    },
  ],
  IdNum: [
    {
      // 身份证
      required: true,
      validator: IdNum,
      trigger: "blur",
    },
  ],
  bankNum: [
    {
      // 银行卡号
      required: true,
      validator: bankNum,
      trigger: "blur",
    },
  ],
  InterZiran: [
    {
      // 自然数
      required: true,
      validator: InterZiran,
      trigger: "blur",
    },
  ],
  InterPositiveNum: [
    {
      // 正整数
      required: true,
      validator: InterPositiveNum,
      trigger: "blur",
    },
  ],
  InterPositiveNumNo: [
    {
      // 正整数非必填
      validator: InterPositiveNumNo,
      trigger: "blur",
    },
  ],
  InterNum: [
    {
      // 整数
      required: true,
      validator: InterNum,
      trigger: "blur",
    },
  ],
  creditNo: [
    {
      //统一社会信用代码
      required: true,
      validator: creditNo,
      trigger: "blur",
    },
  ],
  IpNo: [
    {
      //IP 非必填
      validator: IpNo,
      trigger: "blur",
    },
  ],
  validName: [
    {
      //姓名
      required: true,
      validator: validName,
      trigger: "blur",
    },
  ],
  validNameNo: [
    {
      //姓名不必填
      validator: validNameNo,
      trigger: "blur",
    },
  ],
  validatorName: validNameNo, //页面必填 validator里面引用
  httpUrlNo: [
    {
      //url（带协议 http...） 非必填
      validator: httpUrlNo,
      trigger: "blur",
    },
  ],
  urlNo: [
    {
      //url 非必填
      validator: urlNo,
      trigger: "blur",
    },
  ],
  moneyNo: [
    {
      //金额
      validator: moneyNo,
      trigger: "blur",
    },
  ],
  faxNo: [
    {
      //传真不必填
      validator: faxNo,
      trigger: "blur",
    },
  ],
  postNumNo: [
    {
      //邮编不必填
      validator: postNumNo,
      trigger: "blur",
    },
  ],
  bankNo: [
    {
      //银行账号不必填
      validator: bankNo,
      trigger: "blur",
    },
  ],
  validLength10: [
    {
      //长度校验
      validator: validLength10,
      trigger: "blur",
    },
  ],
  validatorLength10: validLength10, //页面必填 validator里面引用
  validLength15: [
    {
      //长度校验
      validator: validLength15,
      trigger: "blur",
    },
  ],
  validatorLength15: validLength15, //页面必填 validator里面引用
  validLength30: [
    {
      //长度校验
      validator: validLength30,
      trigger: "blur",
    },
  ],
  validatorLength30: validLength30, //页面必填 validator里面引用
  validLength50: [
    {
      //长度校验
      validator: validLength50,
      trigger: "blur",
    },
  ],
  validatorLength50: validLength50, //页面必填 validator里面引用
  validLength100: [
    {
      //长度校验
      validator: validLength100,
      trigger: "blur",
    },
  ],
  validatorLength100: validLength100, //页面必填 validator里面引用
  validLength500: [
    {
      //长度校验
      validator: validLength500,
      trigger: "blur",
    },
  ],
  validatorLength500: validLength500, //页面必填 validator里面引用
};
