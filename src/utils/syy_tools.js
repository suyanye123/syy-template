/** 时间戳转换年月日
 * @param {number} time 时间戳
 * @param {string} icon 间隔符号
 * @param {number} length 1输出小时分秒,2输出年月日，其他输出全部
 * @return {string} 时间戳转时间
 */
export function mytime(time, icon, length) {
  if (!time) {
    return "";
  }
  let TimeText = "";
  let year, month, day, hour, minute, second;
  const date = new Date(time);
  year = date.getFullYear();
  month = date.getMonth() + 1;
  day = date.getDate();
  hour = date.getHours();
  hour = hour > 9 ? hour : "0" + hour;
  minute = date.getMinutes();
  minute = minute > 9 ? minute : "0" + minute;
  second = date.getSeconds();
  second = second > 9 ? second : "0" + second;
  if (length == 1) {
    TimeText = year + icon + month + icon + day;
  } else if (length == 2) {
    TimeText = hour + ":" + minute + ":" + second;
  } else {
    TimeText =
      year +
      icon +
      month +
      icon +
      day +
      "-" +
      hour +
      ":" +
      minute +
      ":" +
      second;
  }
  return TimeText;
}

/** 防抖
 * @param {function} func 输入函数
 * @param {number} wait 间隔时间
 * @return {function} 返回debounce防抖处理后的函数
 */
export function debounce(func, wait) {}



/** obj转字符串
 * @param  obj -需要转换成路径参数的对象
 * @param  NeedParmas -需要从对象里面提取的参数
 */
export function ObjToParam(Obj, NeedParmas = []) {
  let ParmasObj = {};
  let url = "?";
  if (NeedParmas.length) {
    NeedParmas.forEach((item) => {
      ParmasObj[item] = Obj[item];
    });
  } else {
    ParmasObj = Obj;
  }
  for (const key in ParmasObj) {
    if (Object.hasOwnProperty.call(ParmasObj, key)) {
      url += key + "=" + ParmasObj[key] + "&";
    }
  }
  url = url.substring(0, url.length - 1);
  console.log("url", url);
  return url;
}