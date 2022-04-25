// 如果不想使用原生tabbar，可以使用uView的自定义tabbar,需要在App.vue隐藏原生，然后在各个页面引入
export const mybar = [
  {
    iconPath: "/static/img/Home.png",
    selectedIconPath: "/static/img/HomeS.png",
    text: "首页",
    // count: 2,
    // isDot: true,
    // activeColor:'#F22B32',
    // inactiveColor:'#C1C5C7',
    customIcon: false,
    pagePath: "/pages/home/index",
  },
  {
    iconPath: "/static/img/other.png",
    selectedIconPath: "/static/img/others.png",
    text: "其他",
    customIcon: false,
    pagePath: "/pages/other/index",
  },
  {
    iconPath: "/static/img/mine.png",
    selectedIconPath: "/static/img/mines.png",
    text: "我的",
    // count: 23,
    isDot: false,
    customIcon: false,
    pagePath: "/pages/mine/index",
  },
];
