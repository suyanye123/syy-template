import {
  baseurl,
  request,
  api
} from "./request.js";
//获取个人信息
function geMine() {
  return new Promise((resovle, reject) => {
    uni
      .request({
        method: "GET",
        url: baseurl + api.getUserMsg,

      })
      .then((res) => {
        console.log("res获取userID", res[1].data);
        if (res[1].data.code == 200) {
          resovle(res[1].data);
          allId.userId =
            res[1].data.result.loginAuthDto.userId;
          allId.loginName =
            res[1].data.result.loginAuthDto.loginName;
        }
      });
  });
}
//获取shopID
function getShopId() {
  return new Promise((resovle, reject) => {
    uni
      .request({
        method: "Get",
        url: baseurl + api.getShopId + allId.userId,

      })
      .then((res) => {
        console.log("获取shopID", res);
        if (
          res[1].data.result !== null &&
          res[1].data.result.shopType !== 0 &&
          res[1].data.result.teamStatus == 2
        ) {
          console.log("是团长");

          //0 普通 1商家 3 供应商 4
          allId.shopId = res[1].data.result.shopId;
          console.log(
            "shopID 获取shopI",
            res[1].data.result.shopId,
            allId
          );
          resovle(allId);

          uni.setStorage({
            key: "allId",
            data: allId,
            success: () => {
              console.log("设置allid成功");
            },
            fail: () => {
              console.log("设置allID失败");
            },
          });
          uni.setStorage({
            key: "Chief",
            data: true,
            success: () => {
              console.log("设置chiefsuccess");
            },
            fail: () => {
              console.log("设置chief失败");
            },
          });
        } else {
          //普通用户
          uni.getLocation({
            type: "gcj02", //返回可以用于uni.openLocation的经纬度
            success: (res) => {
              console.log("res", res);
              let a =
                "?longitude=" +
                res.longitude +
                "&latitude=" +
                res.latitude;
              uni.request({
                method: "GET",
                url: baseurl + api.Home_nearStore + a,
                success: (res) => {
                  console.log("附近店铺", res);
                  allId.shopId =
                    res.data.result.list[0].shopId;
                  console.log("shopID", allId);
                  resovle(allId);
                  uni.setStorage({
                    key: "allId",
                    data: allId,
                    success: (res) => {
                      console.log(
                        "不为团长时的allId",
                        res
                      );
                    },
                  });
                  uni.setStorage({
                    key: "Chief",
                    data: false,
                  });
                },
              });
            },
            fail: (err) => {
              uni.removeStorage({
                key: "token",
                success: (res) => {
                  uni.hideLoading();
                },
              });
              uni.showModal({
                content: "检测到您没打开获取位置功能权限，是否去设置打开？",
                confirmText: "确认",
                cancelText: "取消",
                success: (res) => {
                  if (res.confirm) {
                    uni.openSetting({
                      success: (res) => {
                        uni.showToast({
                          title: "授权后请重新打开此页面",
                          icon: "none",
                          success: function () {},
                        });
                      },
                      fail: (err) => {
                        console.log(err);
                      },
                    });
                  } else {
                    uni.showToast({
                      title: "获取地理位置授权失败",
                      icon: "none",
                      success: function () {},
                    });
                  }
                },
              });
              uni.showToast({
                title: "微信登录授权失败",
                icon: "none",
              });
            },
          });
        }
      });
  });
}
//获取仓库Id
function warehouseIdN() {
  return new Promise((resovle, reject) => {
    uni
      .request({
        method: "Get",
        url: baseurl + api.getInfo,

      })
      .then((res) => {
        console.log("获取仓库Id", res);
        let warehouseId;
        if (res[1].data.code == 200) {
          uni.hideLoading();
          warehouseId =
            res[1].data.result.groupInfo.warehouseId;
          resovle(warehouseId);
          if (warehouseId == null) return;
          uni.setStorage({
            key: "warehouseId",
            data: warehouseId,
          });
        }
      });
  });
}
let p = new Promise((resovle, reject) => {
  resovle()
})
// export const getUserInfo = p.then(geMine)
//   .then(getShopId)
//   .then(warehouseIdN)
//   .then(() => {
//     uni.getStorage({
//       key: "allId",
//       success: (res) => {
//         console.log("最后", res);
//       },
//     });
//   });