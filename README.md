# integrate-admin-vue-spa
基于 Vue 和 Element 开发的后台系统项目雏形 (SPA式)<br>
* 工程化采用 gulp + webpack 搭建，主任务由 webpack 完成，gulp 只完成了小部分的工作
* 由于使用了 SPA 的设计，它不适合做太过复杂的系统（例如有需要打开新页面的场景，与 SPA 本身就存在冲突了）
* src 是源码目录，里面的代码未经过编译合并，无法直接执行
* dist 是发布目录，里面的代码是经过编译合并，已压缩的代码，用于上线发布
