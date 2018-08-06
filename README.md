# vue-douban

> 基于 vue 实现豆瓣电影

## 运行

- quick start

``` bash
git clone git@github.com:shenqingqing/vue-douban.git
cd vue-douban
npm install 
```
## 目录结构

```bash
|__ src
    |__ App.vue
    |__ components                            
      |__ tabs                                # tab
        |__ board                               # 榜单
        |__ main                                # 关于我
        |__ search                              # 电影搜索
    |__ api                                   # api
      |__ config.js                             # 公用常量
      |__ getMovieData.js                       # 电影模块接口
    |__ common                                # 组件
      |__ mrTabbar                              # tab组件
      |__ mrHeader                              # head组件
      |__ filter                                # 过滤器
      |__ js                                    # 公用js
        |__ comaxios                              # axios配置
    |__ assets                                # 静态资源
      |__ css                                   # css
      |__ image                                 # 图片
      |__ remSupport                            # rem文件
      |__ ui                                    # ui框架
        |__ scroller                              # 滑动组件
    |__ main.js
    |__ store                                 # vuex
      |__ index.js                              # 全局
      |__ modules                               # 模块
        |__ item.js                               # 电影详情->对应 pages/item
      |__ mutations-type.js                     # mutations 常量
    |__ router                                # 路由
      |__ index.js                              # 路由配置
    |__ mock                                  # mock数据
      |__ mock.js                               # mock接口数据
|__ static                                    # 静态资源
    |__ .gitkeep
    
```
- development

```bash
npm run dev
```

- build

```bash
npm run build
```
```bash
持续更新中
```
