/**请求字典
 * 将业务所有接口统一起来便于维护，如果项目很大可以将 url 独立成文件，接口分成不同的模块
 */
import { http } from "./service";

export function getMsg(res) {
  return http.get(
    "/queryEvent.php?key=56ff26f9b8e4598df16e5bfcb5675077&date=" + res
  );
}
