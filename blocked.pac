var PROXY = 'SOCKS5 127.0.0.1:1234;SOCKS 127.0.0.1:1234';
var BLOCKED = [
    'twitter.com',
    'facebook.com',
    'google.com',
    'gmail.com',
    'appspot.com',
    'geoiptool.com'
];

function FindProxyForURL(url, host) 
{
    for (var i=0, l=BLOCKED.length; i<l; i++)
    {
        var exp = BLOCKED[i];
        if (((typeof exp === 'string') && dnsDomainIs(host, exp)) || 
            ((typeof exp === 'function') && ('test' in exp) && exp.test(url)))
            return PROXY;
    }
    return 'DIRECT';
}
