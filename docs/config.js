var langs = [
  {title: 'English', path: '/'},
  {title: '简体中文', path: '/zh-Hans/'},
  {title: '繁體中文', path: '/zh-Hant/'},
  {title: '日本語', path: '/jp/'}
]

self.$config = {
  title: 'Docute',
  repo: 'egoist/docute',
  twitter: 'rem_rin_rin',
  'edit-link': 'https://github.com/egoist/docute/blob/master/docs',
  nav: {
    default: [
      {
        title: 'Home', path: '/'
      },
      {
        title: 'Languages', type: 'dropdown', items: langs
      },
      {
        title: 'Command-Line Tool', path: '/cli'
      }
    ],
    'zh-Hans': [
      {
        title: '首页', path: '/zh-Hans/'
      },
      {
        title: '选择语言', type: 'dropdown', items: langs
      },
      {
        title: '命令行工具', path: '/zh-Hans/cli'
      }
    ],
    'zh-Hant': [
      {
        title: '首頁', path: '/zh-Hant/'
      },
      {
        title: '選擇語言', type: 'dropdown', items: langs
      },
      {
        title: '命令行工具', path: '/zh-Hant/cli'
      }
    ]
  },
  icons: [
    {
      label: '关注我的微博',
      svgId: 'i-weibo',
      svgClass: 'weibo-icon',
      link: 'http://weibo.com/zengxinyu'
    }
  ]
}
