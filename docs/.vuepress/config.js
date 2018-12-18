module.exports = {
    dest: 'vuepress',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '小程序学习手册',
            description: 'Vue 驱动的静态站点生成工具'
        }
    },
    head: [
        ['link', { rel: 'icon', href: `/logo.png` }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png` }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    serviceWorker: true,
    theme: 'vue',
    themeConfig: {
        repo: 'docschina/vuepress',
        editLinks: false,
        docsDir: 'docs',
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '编辑此页',
                lastUpdated: '上次更新',
                nav: [{
                        text: '指南',
                        link: '/guide/',
                    },
                    {
                        text: 'nodejs',
                        link: '/nodejs/'
                    },
                    {
                        text: 'react',
                        link: '/react/'
                    },
                    {
                        text: 'wepy',
                        link: '/wepy/'
                    },
                    {
                        text: 'redux',
                        link: '/redux/'
                    },
                    {
                        text: '小程序',
                        link: '/miniProgram/'
                    },
                ],
                sidebar: {
                    '/guide/': genSidebarConfig('指南'),
                    '/nodejs/': nodejsSidebarConfig('nodejs'),
                    '/react/': reactSidebarConfig('react'),
                    '/redux/': reduxSidebarConfig('redux'),
                    '/wepy/': wepySidebarConfig('wepy'),
                    '/miniProgram/': miniProgramSidebarConfig('起步')
                }
            }
        }
    }
}

function reactSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            "",
            "install",
            "jsx",
            "component",
            "router",
            "communicate"

        ]
    }]
}

function nodejsSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            "",
            "package",
            "install",
            "middleware",
        ]
    }]
}

function reduxSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            "",
            "store",
            "action",
            "reducer",
            "react-redux",
            "wepy-redux"
        ]
    }]
}

function wepySidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            "",
            "install",
            "catalog",
            "entry",
            "application",
            "component",
            "repeat"
        ]
    }]
}

function miniProgramSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            "",
            'wx-guide',
            'wx-install',
            'wx-catalog',
            'wx-template',
            'wx-data',
            'wx-loop',
            'wx-event',
            'wx-request',
            'wx-route',
            'wx-component-custom',
            'wx-component-native',
            'wx-life-cycle',
            'wx-sdk',
            'wx-storage'
        ]
    }]
}

function genSidebarConfig(title) {
    return [{
        title,
        collapsable: false,
        children: [
            '',
            'getting-started',
            'basic-config',
            'assets',
            'markdown',
            'using-vue',
            'custom-themes',
            'i18n',
            'deploy'
        ]
    }]
}