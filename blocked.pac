var PROXY = 'SOCKS5 127.0.0.1:1234;SOCKS 127.0.0.1:1234';
var BLOCKED = [
    'twitter.com',
    'facebook.com',
    'google.com',
    'gmail.com',
    'appspot.com',
    'geoiptool.com',
    'dropbox.com',
    'cl.ly',
    'j.mp',
    't.co',
];

function FindProxyForURL(url, host) 
{
    if (isInNet(host, '159.106.121.75', '255.255.255.0'))
        return PROXY;


    for (var i=0, l=BLOCKED.length; i<l; i++)
    {
        var exp = BLOCKED[i];
        if (((typeof exp === 'string') && dnsDomainIs(host, exp)) || 
            ((typeof exp === 'function') && ('test' in exp) && exp.test(url)))
            return PROXY;
    }
    return 'DIRECT';
}
