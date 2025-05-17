window.config={
    logo: 'https://vip.yeye8.top/logohls.png', // 网站logo
    title:"荷鲁斯", // 网站标题
    host:"https://hls.herefor.top/", // 后端接口地址
    storeHome: {
        title: '选择最适合你的订阅计划', // 套餐页标题
        description: '若您已购买订阅且当前未过期，再次购买相同套餐将在原过期时间上追加时长，购买其他套餐则对原有订阅进行折抵' // 套餐页描述
    },
    SignPage: {
        title: '覆盖全球的高速网络，您的高速旅程从 荷鲁斯 开始', // 登录页标题
        desc1: 'High-speed network covering the whole world', // 登录页描述1
        desc2: 'Your high-speed journey starts with IHLS', // 登录页描述2
        inviteCodeEdit: false, // 是否允许用户修改邀请码
    },
    homeClient: {
        display: false, // 是否显示客户端下载教程卡片
        clients: [
            {
                key: 'windows',
                title: 'Windows客户端',
                icon: 'ri:windows-fill',
                downloadLink: 'https://yeye8.top/App/mihomo-party-windows-1.5.6-x64-portable.7z/', // Windows客户端下载地址
                knowledgeLink: 'https://lovechina.mingri.icu/dashboard/knowledge/11', // 使用教程地址
            },
            {
                key: 'mac',
                title: 'Mac客户端',
                icon: 'ri:finder-fill',
                downloadLink: 'https://yeye8.top/App/mihomo-party-catalina-1.5.6-arm64.pkg/', // Mac客户端下载地址
                knowledgeLink: 'https://lovechina.mingri.icu/dashboard/knowledge/12', // 使用教程地址
            },
            {
                key: 'android',
                title: 'Android客户端',
                icon: 'ri:android-fill',
                downloadLink: 'https://vip.yeye8.top/App/ihorus.apk/', // Android客户端下载地址
                knowledgeLink: 'https://v2theme.pages.dev/#/dashboard/knowledge/13', // 使用教程地址
            },
            {
                key: 'android',
                title: 'Android客户端2',
                icon: 'ri:android-fill',
                downloadLink: 'https://yeye8.top/App/clash_meta.apk', // Android客户端下载地址
                knowledgeLink: 'https://lovechina.mingri.icu/dashboard/knowledge/7', // 使用教程地址
            },
            {
                key: 'ios',
                title: 'iOS客户端',
                icon: 'ri:apple-fill',
                downloadLink: 'https://idappstore.net/mg/182.html', // iOS客户端下载地址
                knowledgeLink: 'https://lovechina.mingri.icu/dashboard/knowledge/', // 使用教程地址
            },
            {
                key: 'knowledge',
                title: '查看其它教程',
                icon: 'ri:questionnaire-fill',
                downloadLink: null,
                knowledgeLink: 'https://lovechina.mingri.icu/dashboard/knowledge', // 使用教程地址
            }
        ],
    },
    homeBanner: {
        display: true, // 是否显示首页横幅
        title: '邀请好友，共享优惠', // 首页banner标题
        link: '/dashboard/invite', // 首页banner链接，站内链接
        btnText: '立即邀请', // 首页banner按钮文字
        element: 'https://gd-hbimg.huaban.com/e68ceb12ffbd7dbeb698b3c5f4d2ed90185241be25183e-tShOmr_fw1200webp', // 首页banner元素图片
        bgImg: 'https://gd-hbimg.huaban.com/246ac6f06aeeab3b0c7e5908e7693b9a0e1b8a5249899-hB42f3_fw1200', // 首页banner背景图片
    }
}
