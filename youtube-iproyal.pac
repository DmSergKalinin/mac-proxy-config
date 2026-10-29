
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

// Telegram: domains and IPv4 server networks
  if (
    host === "telegram.org" ||
    dnsDomainIs(host, ".telegram.org") ||
    host === "t.me" ||
    dnsDomainIs(host, ".t.me") ||
    host === "telegram.me" ||
    dnsDomainIs(host, ".telegram.me") ||
    host === "telegra.ph" ||
    dnsDomainIs(host, ".telegra.ph") ||
    host === "telegram-cdn.org" ||
    dnsDomainIs(host, ".telegram-cdn.org")
  ) {
    return "SOCKS5 150.241.231.229:12324";
  }

  if (/^\d+\.\d+\.\d+\.\d+$/.test(host)) {
    var tgNetworks = [
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

    for (var j = 0; j < tgNetworks.length; j++) {
      if (isInNet(host, tgNetworks[j][0], tgNetworks[j][1])) {
        return "SOCKS5 150.241.231.229:12324";
      }
    }
  }
    return "DIRECT";
}
