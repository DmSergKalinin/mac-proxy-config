
function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    var proxy = "SOCKS5 150.241.231.229:12324; SOCKS 150.241.231.229:12324";

    var domains = [
        // YouTube
        "youtube.com",
        "youtu.be",
        "googlevideo.com",
        "ytimg.com",
        "youtubei.googleapis.com",
        "youtube-nocookie.com",

        // ChatGPT
        "chatgpt.com",
        "openai.com",
        "oaistatic.com",
        "oaiusercontent.com",
        "oaistatsig.com",
        "challenges.cloudflare.com",

        // Telegram
        "telegram.org",
        "t.me",
        "telegram.me",
        "telegra.ph",
        "telegram-cdn.org"
    ];

    for (var i = 0; i < domains.length; i++) {
        if (
            host === domains[i] ||
            dnsDomainIs(host, "." + domains[i])
        ) {
            return proxy;
        }
    }

    // Telegram IPv4 server networks
    if (/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
        var networks = [
            ["91.105.192.0", "255.255.254.0"],
            ["91.108.4.0", "255.255.252.0"],
            ["91.108.8.0", "255.255.252.0"],
            ["91.108.12.0", "255.255.252.0"],
            ["91.108.16.0", "255.255.252.0"],
            ["91.108.20.0", "255.255.252.0"],
            ["91.108.56.0", "255.255.252.0"],
            ["149.154.160.0", "255.255.240.0"],
            ["185.76.151.0", "255.255.255.0"]
        ];

        for (var j = 0; j < networks.length; j++) {
            if (isInNet(host, networks[j][0], networks[j][1])) {
                return proxy;
            }
        }
    }

    return "DIRECT";
}
