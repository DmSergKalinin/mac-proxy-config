
function FindProxyForURL(url, host) {
    host = host.toLowerCase();

    const proxy = "SOCKS5 150.241.231.229:12324";

    const domains = [
        "youtube.com",
        "youtu.be",
        "googlevideo.com",
        "ytimg.com",
        "youtubei.googleapis.com",
        "youtube-nocookie.com",
        "chatgpt.com",
        "openai.com",
        "oaistatic.com",
        "oaiusercontent.com",
        "oaistatsig.com",
        "challenges.cloudflare.com"
    ];

    for (var i = 0; i < domains.length; i++) {
        var domain = domains[i];

        if (
            host === domain ||
            dnsDomainIs(host, "." + domain)
        ) {
            return proxy;
        }
    }

    return "DIRECT";
}
