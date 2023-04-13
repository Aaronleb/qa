export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"actionText\":\"快速开始 →\",\"actionLink\":\"/zh/guide/\",\"actions\":[{\"text\":\"客户端\",\"link\":\"/zh/client/index.md\",\"type\":\"primary\"},{\"text\":\"后台\",\"link\":\"/zh/admin/index.md\",\"type\":\"secondary\"},{\"text\":\"服务号\",\"link\":\"/zh/wechat/index.md\",\"type\":\"thirdary\"}],\"features\":[{\"title\":\"使用人员\",\"details\":\"在线学管&值班老师\"},{\"title\":\"文档内容\",\"details\":\"常见问题及解决方案\"},{\"title\":\"文档作用\",\"details\":\"帮助学管老师快速定位解决问题\"}],\"footer\":\"MIT Licensed | Copyright © 2023\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
