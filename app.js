//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

  },
  globalData: {
    Online_environment_src: 'https://cbdpurse.1juke.cn',
    Request_address: 'https://cbdpursetest.1juke.cn/api.aspx',
    userInfo: null
  }
})