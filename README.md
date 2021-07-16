# fe-ui

## 项目启动
```
npm install
```

### 本地开发环境启动
```
npm run dev
```

### 编译项目
```
npm run build
```

### 单独启本地mock服务
```
npm run mock
```



```
fe-ui
├─ mock //mock数据存储
│  └─ index.js
└─ src
   ├─ assets
   │  └─ logo.png
   ├─ components // 组件文件目录
   │  └─ QiniuUpload.vue
   ├─ css // 公共样式文件
   │  ├─ .DS_Store
   │  └─ element-ui
   │     └─ element-css.css
   ├─ font // 字体目录
   ├─ js
   │  └─ common // 公共JS
   │     ├─ ajax
   │     │  └─ index.js
   │     ├─ axios.js
   │     └─ init.js
   ├─ libs // 第三方库
   │  ├─ .DS_Store
   │  ├─ element-ui
   │  │  └─ index.js
   │  └─ qiniu
   │     ├─ .DS_Store
   │     └─ qiniu.min.js
   ├─ stories // 组件文档及示例目录
   │  ├─ Introduction.stories.mdx
   │  └─ upload // 以文件夹形式区分组件类别
   │     ├─ QiniuUpload.stories.js
   │     └─ notes.md
   └─ views

```