var PROXY = 'SOCKS5 127.0.0.1:1234;SOCKS 127.0.0.1:1234';
var WHITELIST = [
    'zhihu.com',
    'botime.com',
    'zhi.hu',
    'ip138.com',
    'renren.com',
    'tudou.com',
    'youku.com',
    'qq.com',
    '163.com',
    'sina.com',
    'sina.com.cn',
    'weibo.com',
    'google.cn',
    'xiami.com',
    'yishouge.com',
    'baidu.com',
    'alipay.com',
    'taobao.com',
    'ccb.com',
    'airchina.com.cn',
    'qunar.com',
    'ubuntu.com.cn',
    /^https?:\/\/.*\.zhihu\.com/,
    /^https?:\/\/.*.com.cn/,
    /^https?:\/\/.*\.cn/,
    /^https?:\/\/cn..*/,
];

function FindProxyForURL(url, host) 
{
    for (var i=0, l=WHITELIST.length; i<l; i++)
    {
        var exp = WHITELIST[i];
        if (((typeof exp === 'string') && dnsDomainIs(host, exp)) || 
            ((typeof exp === 'function') && ('test' in exp) && exp.test(url)))
            return 'DIRECT';
    }
    return PROXY;
}
