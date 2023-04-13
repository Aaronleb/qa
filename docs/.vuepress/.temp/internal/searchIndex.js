export const searchIndex = [
  {
    "title": "",
    "headers": [],
    "path": "/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "班级问题",
    "headers": [],
    "path": "/zh/admin/class.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "课程问题",
    "headers": [],
    "path": "/zh/admin/course.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "管理后台问题",
    "headers": [],
    "path": "/zh/admin/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "补课问题",
    "headers": [
      {
        "level": 2,
        "title": "一、视频补课",
        "slug": "一、视频补课",
        "link": "#一、视频补课",
        "children": [
          {
            "level": 3,
            "title": "1.1 下课后学员无法查看回放视频",
            "slug": "_1-1-下课后学员无法查看回放视频",
            "link": "#_1-1-下课后学员无法查看回放视频",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "二、临时听课",
        "slug": "二、临时听课",
        "link": "#二、临时听课",
        "children": []
      },
      {
        "level": 2,
        "title": "三、补课教室",
        "slug": "三、补课教室",
        "link": "#三、补课教室",
        "children": []
      }
    ],
    "path": "/zh/admin/makeup.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "付款问题汇总",
    "headers": [
      {
        "level": 2,
        "title": "一、缴费",
        "slug": "一、缴费",
        "link": "#一、缴费",
        "children": [
          {
            "level": 3,
            "title": "1.1",
            "slug": "_1-1",
            "link": "#_1-1",
            "children": []
          }
        ]
      },
      {
        "level": 2,
        "title": "二、退费",
        "slug": "二、退费",
        "link": "#二、退费",
        "children": []
      },
      {
        "level": 2,
        "title": "三、其他缴费",
        "slug": "三、其他缴费",
        "link": "#三、其他缴费",
        "children": []
      }
    ],
    "path": "/zh/admin/pay.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "电子教室问题",
    "headers": [],
    "path": "/zh/client/classroom.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "课程显示问题",
    "headers": [],
    "path": "/zh/client/course.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "客户端问题",
    "headers": [],
    "path": "/zh/client/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/zh/client/install.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "TTS客户端问题",
    "headers": [],
    "path": "/zh/client/tts.html",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "服务号问题",
    "headers": [],
    "path": "/zh/wechat/",
    "pathLocale": "/",
    "extraFields": []
  },
  {
    "title": "",
    "headers": [],
    "path": "/404.html",
    "pathLocale": "/",
    "extraFields": []
  }
]

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSearchIndex) {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ searchIndex }) => {
    __VUE_HMR_RUNTIME__.updateSearchIndex(searchIndex)
  })
}
