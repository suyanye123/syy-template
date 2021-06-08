/**
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

/**
 * @param {function} func 输入函数
 * @param {number} wait 间隔时间
 * @return {function} 返回debounce防抖处理后的函数
 */
export function debounce(func, wait) {}
