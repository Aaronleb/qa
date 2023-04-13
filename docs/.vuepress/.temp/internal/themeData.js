export const themeData = JSON.parse("{\"logo\":\"/img/logo.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"}],\"sidebar\":[{\"text\":\"客户端\",\"children\":[{\"text\":\"安装包\",\"link\":\"/zh/client/install.md\"},{\"text\":\"电子教室\",\"link\":\"/zh/client/classroom.md\"},{\"text\":\"课程中心\",\"link\":\"/zh/client/course.md\"},{\"text\":\"TTS客户端\",\"link\":\"/zh/client/tts.md\"}]},{\"text\":\"管理后台\",\"children\":[{\"text\":\"缴费&退费\",\"link\":\"/zh/admin/pay.md\"},{\"text\":\"补课问题\",\"link\":\"/zh/admin/makeup.md\"},{\"text\":\"课程问题\",\"link\":\"/zh/admin/course.md\"},{\"text\":\"班级问题\",\"link\":\"/zh/admin/class.md\"}]},{\"text\":\"服务号\",\"children\":[{\"text\":\"协议确认\",\"link\":\"/zh/wechat/pay.md\"}]}],\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
