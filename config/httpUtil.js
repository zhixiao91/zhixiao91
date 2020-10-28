/**
 * 请求头
 */
var header = {
  'content-Type': 'application/x-www-form-urlencoded',
  'Authorization': 'Bearer ' + wx.getStorageSync('token'),
  'version': '1.0.0',
  'device_token': 'ebc9f523e570ef14',
}

/**
 * GET请求封装
 */
function get(url, params, onSuccess, onFailed) {
  console.log('请求方式：','GET')
  return wx.request(url, params, 'GET', onSuccess, onFailed);
}

/**
 * POST请求封装
 */
function post(url, params, onSuccess, onFailed) {
  console.log('请求方式：','POST')
  return request(url, params, 'POST', onSuccess, onFailed);
}

/**
 * function: 封装网络请求
 * @url URL地址 
 * @params 请求参数
 * @method 请求方式：GET/POST
 * @onSuccess 成功回调
 * @onFailed  失败回调
 */
function request(url, params, method, onSuccess, onFailed) {

  console.log('请求url：' + url);
  wx.showLoading({
    title: '正在加载中...',
  })
  console.log('请求头：', header)
  wx.request({
    url: url,
    data: dealParams(params),
    method: method,
    header: header,
    success: function(res) {
      wx.hideLoading();
      console.log('相应', res.data);
      if (res.data) {
        // start 根据需求，接口的返回状态码进行处理
        if (res.statusCode == 200) {
          onSuccess(res.data);
        } else {
          onFailed(res.data.message);
        }
      }
    },
    fail: function(err) {
      wx.hideLoading();
      onFailed('');
    }
  })
}

/**
 * function: 根据需求处理请求参数：添加固定参数配置等
 * @params 请求参数
 */
function dealParams(params) {
  console.log('请求参数：', params)
  return params;
}

// 通过module.exports方式提供给外部调用
module.exports = {
  postRequest: post,
  getRequest: get,
}
