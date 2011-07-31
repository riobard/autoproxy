var PROXY = 'SOCKS5 127.0.0.1:1234;SOCKS 127.0.0.1:1234';
var BLOCKED = [
    'twitter.com',
    'facebook.com',
    'google.com',
    'gmail.com',
    'appspot.com',
    'blogspot.com',
    'geoiptool.com',
    'dropbox.com',
    'cl.ly',
    't.co',
    'j.mp',
    'python.org',
    'yfrog.com',
    'dailymotion.com',
    'thepiratebay.org',
    'googleusercontent.com',
    'youtube.com',
    'img.ly',
    'bbc.co.uk',
    'tinypic.com',
    'posterous.com',
    'flickr.com',
    'blogger.com',
    'mashable.com',
    'wikipedia.org',
    'ycombinator.com',
    'rfa.org',
    'bullogger.com',
];

function FindProxyForURL(url, host) 
{
    if (isInNet(host, '159.106.121.75', '255.255.255.0'))       // Twitter
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
