function FindProxyForURL(url, host) {
  if (isPlainHostName(host) || dnsDomainIs(host, ".mydomain.com")) {
    return "DIRECT";
  } else if (shExpMatch(host, "*.cloud.cupronickel.goog")) {
    return "SOCKS5 192.168.1.105:7890; DIRECT";
  } else if (shExpMatch(host, "*.googleapis.com")) {
    return "SOCKS5 192.168.1.105:7890; DIRECT";
  } else if (shExpMatch(host, "*.cloud.cupronickel.goog")) {
    return "SOCKS5 192.168.1.105:7890; DIRECT";
  } else if (shExpMatch(host, "*.google.com")) {
    return "SOCKS5 192.168.1.105:7890; DIRECT";
  } else {
    return "DIRECT";
  }
}
