# syy-uniapp-template

### #使用方法：

#### 1.安装依赖

```bash
npm install
```

#### 2.根据package里的script运行项目
```bash
npm run wx
或 npm run dev
```



------
<br/>

### #不同版本：

master分支——官方模板

uView-version分支——引入了uView UI库，并安装了sass和sass-loader



------
<br/>
### #可能出现的问题：

1.使用uView-version，安装依赖失败

通常是因为 sass下载失败，多安装几次，或者有能力的话建议翻墙



2.使用uView-version，第一次跑项目时出错提示

```bash
TypeError: this.getOptions is not a function
```

是因为 sass 和 sass-loader 对应本地的 node版本匹配的原因

查看自己的node版本  `node -v`

<img src=".\public\sass-v.png" alt="image-20210531154308278" style="zoom:67%;" />

如图所示，比如我的node版本为14，那么就应该安装 sass 4.14版本

对应的loader版本为7.3.1

```markdown
sass-loader 4.1.1，node-sass 4.3.0
sass-loader 7.0.3，node-sass 4.7.2
sass-loader 7.3.1，node-sass 4.7.2
sass-loader 7.3.1，node-sass 4.14.1
```

所以

```
npm uninstall node-sass sass-loader		//卸载sass及loader
npm install sass-loader@版本号 node-sass@版本号    //安装对应的版本
```

或者升级或降级本地node版本