import uni_request from "../utils/uni_request";

// 开发环境时为线下地址，生产时为线上
const baseurl =
  process.env.NODE_ENV == "development"
    ? "https://www.apiopen.top/journalismApi"
    : "https://www.apiopen.top/journalismApi";
console.log(process.env.NODE_ENV, "baseURL是", baseurl);

const request = uni_request({ baseurl });

export default request;
