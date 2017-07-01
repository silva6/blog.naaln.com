---
layout: post
title: Dnsmasq
date: 2013/06/22 05:56:00
categories: 
- 技术
tags: 
- dnsmasq
---

# Dnsmasq

[Dnsmasq](http://en.wikipedia.org/wiki/Dnsmasq "http://en.wikipedia.org/wiki/Dnsmasq") is lightweight, easy to configure DNS forwarder and DHCP server. It is designed to provide DNS and, optionally, DHCP, to a small network. It can serve the names of local machines which are not in the global DNS. The DHCP server integrates with the DNS server and allows machines with DHCP-allocated addresses to appear in the DNS with names configured either in each host or in a central configuration file. Dnsmasq supports static and dynamic DHCP leases and BOOTP for network booting of disk-less machines. 

It is already installed and preconfigured on OpenWrt. See → [/etc/config/dhcp](http://wiki.openwrt.org/doc/uci/dhcp "doc:uci:dhcp"). 

## Configuration

The configuration is done with help of the uci-configuration file: [/etc/config/dhcp](http://wiki.openwrt.org/doc/uci/dhcp "doc:uci:dhcp"), but you can use this together with the file `[/etc/dnsmasq.conf](http://wiki.openwrt.org/doc/uci/dhcp?&#using_plain_dnsmasqconf "doc:uci:dhcp")`. 

Depending on the setting in the uci-file, you may also use the files `/etc/ethers` and `/etc/hosts` additionally. 

### /etc/config/dhcp

→ [/etc/config/dhcp](http://wiki.openwrt.org/doc/uci/dhcp "doc:uci:dhcp") is a UCI configuration file and as such documented exclusively in [uci](http://wiki.openwrt.org/doc/uci "doc:uci"). Almost all settings can be configured with it! 

### /etc/dnsmasq.conf

You can use `/etc/dnsmasq.conf` in addition, see above. 

Example: By default, dnsmasq comes configured to put your hosts into the `.lan` domain. This is specified in the configuration file as: 

```
   # allow /etc/hosts and dhcp lookups via *.lan
   local=/lan/
   domain=lan
```

You can change this to whatever you'd like your home domain to be. Also, if you want your hosts to be available via your home domain without having to specify the domain in your 

```
   /etc/hosts
```

file, add the `expand-hosts` directive to your `/etc/dnsmasq.conf`-file. 

As an example, without `expand-hosts`, you can only reach _router, ubuntu-desktop and ubuntu-laptop_. With _expand-hosts_ on, you can reach _router, router.lan, ubuntu-desktop, ubuntu-desktop.lan, etc_. This probably matches what you're looking for anyway. 

Without this setting, you'll have to add _.lan_ entries to your `/etc/hosts`. 

### /etc/ethers

In `/etc/ethers` static lease entries can be assigned. See → [static_leases](http://wiki.openwrt.org/doc/uci/dhcp#static_leases "doc:uci:dhcp"). 

### /etc/hosts

In `/etc/hosts` DNS entries are configured. dnsmasq will utilize these entries to answer DNS queries on your network. 

Format: 
```
   [IP_address] host_name host_name_short ...
```

Example: 

```
   192.168.1.1 router OpenWrt localhost
   192.168.1.2 debian-server
   192.168.1.3 ubuntu-laptop
```

### DNS and DHCP Ports

DNS needs TCP and UDP port 53 open on the firewall. DHCP needs UDP ports 67 and 68 open from your zone to/from the firewall. See [http://wiki.openwrt.org/doc/recipes/guest-wlan](http://wiki.openwrt.org/doc/recipes/guest-wlan "http://wiki.openwrt.org/doc/recipes/guest-wlan") and [http://www.thekelleys.org.uk/dnsmasq/docs/dnsmasq-man.html](http://www.thekelleys.org.uk/dnsmasq/docs/dnsmasq-man.html "http://www.thekelleys.org.uk/dnsmasq/docs/dnsmasq-man.html") (viz "–dhcp-alternate-port") for more information. 

## Examples

### Add a secondary DNS

What to do if you already have a DNS server(secondary DNS server) but you want your router(primary DNS server) to resolve some of the DNS queries? Simply do the following: 

```
   rm /etc/resolv.conf
```

That will remove the resolv.conf symlink. Then we will add the ip address of the secondary DNS inside the /etc/resolv.conf file 
```
   echo "nameserver 192.168.1.2"&gt;/etc/resolv.conf
```

Replace 192.168.1.2 by the ip of your dns server then reboot or restart the dnsmasq service. 
```
   reboot
```

or 
```
   killall dnsmasq
   /etc/init.d/dnsmasq start
```

Then you'll need to set up your secondary dns for resolving internet's DNS queries: ssh into your router then: 
```
   cat /tmp/resolv.conf.auto
```

it will give you something like this: 
```
   nameserver 212.68.193.110
   nameserver 212.68.193.196
```

Copy the information and then add it to your secondary DNS's /etc/resolv.conf: into your secondary dns do: 
```
   rm /etc/resolv.conf
   echo "nameserver 212.68.193.110"&gt;&gt;/etc/resolv.conf
   echo "nameserver 212.68.193.196"&gt;&gt;/etc/resolv.conf
```

Replace 212.68.193.110 and 212.68.193.196 with the IP addresses you have gotten with the cat /tmp/resolv.conf.auto command. 

### Configuring dnsmasq to forward dns requests to public dns servers

If you want to use public dns servers*[1)](#fn__1)* to resolve public dns queries, you can configure dnsmasq for it. You can even specify more than three nameservers*[2)](#fn__2)*. 

Just add the following lines to /etc/dnsmasq.conf to use Google Public DNS. 
```
   server=8.8.8.8
   server=8.8.4.4
```

In case you prefer to use [OpenWrt UCI](http://wiki.openwrt.org/doc/techref/uci "doc:techref:uci"), you may issue the following commands. 
```
   uci add_list dhcp.@dnsmasq[-1].server=8.8.8.8
   uci add_list dhcp.@dnsmasq[-1].server=8.8.4.4
   uci commit dhcp
```

You may also edit /etc/config/dhcp directly. 

```
   config dnsmasq
       option domainneeded '1'
       option boguspriv '1'
       option localise_queries '1'
       option local '/lan/'
       option domain 'lan'
       option expandhosts '1'
       option authoritative '1'
       option readethers '1'
       option leasefile '/tmp/dhcp.leases'
       option resolvfile '/tmp/resolv.conf.auto'
       option rebind_protection '0'
       option server '8.8.8.8'
       option server '8.8.4.4'
```

In case you want to use OpenDNS (there are 4 public dns servers) 

```
   uci add_list dhcp.@dnsmasq[-1].server=202.67.222.222
   uci add_list dhcp.@dnsmasq[-1].server=202.67.220.220
   uci add_list dhcp.@dnsmasq[-1].server=202.67.222.220
   uci add_list dhcp.@dnsmasq[-1].server=202.67.220.222
   uci commit dhcp
```

Of course, you can use another dns servers. Just send a SIGHUP to dnsmasq process or restart dnsmasq service to apply the newly added forwarding DNS servers. 

### Configuring dnsmasq to use different IP ranges for wired and wireless

Suppose you have the following: 

```
   vlan0     Link encap:Ethernet  HWaddr XX:XX:XX:XX:XX:XX
             inet addr:192.168.1.1    Bcast:192.168.1.255    Mask:255.255.255.0
   eth1      Link encap:Ethernet  HWaddr XX:XX:XX:XX:XX:XX
             inet addr:10.75.9.1      Bcast:10.75.9.255      Mask:255.255.255.0
```

Simply put 2 "dhcp-range" options in your 

```
   /etc/dnsmasq.conf
```

file:

```
   # dhcp-range=[network-id,],[[,],][,]
   dhcp-range=lan,192.168.1.101,192.168.1.104,255.255.255.0,24h
   dhcp-range=wlan,10.75.9.111,10.75.9.119,255.255.255.0,2h
```

You can then use the different "network-id" values with "dhcp-option" to customize the options your DHCP server will supply to your wired and wireless DHCP clients. 

for example 

```
   set the default route for dhcp clients on the wlan side to 10.10.6.33
   dhcp-option=wlan,3,10.10.6.33
   #set the dns server for the dhcp clients on the wlan side to 10.10.6.33
   dhcp-option=wlan,6,10.10.6.33
   #set the default route for dhcp clients on the lan side to 10.10.6.1
   dhcp-option=lan,3,10.10.6.1
   #set the dns server for the dhcp clients on the lan side to 10.10.6.1
   dhcp-option=lan,6,10.10.6.1
```

### Configuring dnsmasq to generate DHCP responses to ONLY known clients

There are situations where you want dnsmasq to generate DHCP addresses for only known clients (as defined in `/etc/ethers`). First, set `lan_dhcp_num=0` to indicate that no addresses are to be generated. Then, modify the file 

```
`/etc/init.d/S60dnsmasq` to included the lines 
       if [ "${num:-150}" = "0" ]; then
               END=static
       fi
```

after the calls to 

`ipcalc.sh` . Restart the daemon or reboot. 

### Configuring dnsmasq to associate client hostnames with DHCP-supplied IP addresses

You will need the following lines in your 

`/etc/dnsmasq.conf` file: (Adjust IP address if your router is not 192.168.1.1) 

```
   dhcp-option=3,192.168.1.1
   dhcp-option=6,192.168.1.1
```

That's it for dnsmasq on the router. The trick is that the DHCP client must send its hostname during the DHCP negotiation. The 

`dhclient.conf` file, which may be in `/etc/` (debian) or `/etc/dhcp3/` (kubuntu), needs to have a single line uncommented and edited: `send host-name "hostname";`

Save the file, then restart the interface. Repeat on all client systems. 

### Configuring dnsmasq to broadcast WINS server information

You will need the following line in your 

`/etc/dnsmasq.conf` file: (Adjust IP address if your WINS server is not 192.168.1.2) `dhcp-option=44,192.168.1.2`

Now as your machines release and renew DHCP information they will obtain the address of the WINS server automatically. 

### Configuring dnsmasq to broadcast External DNS server information

The following change to your `/etc/dnsmasq.conf` file will allow for automatic configuration of your DHCP clients to use DNS servers other than one on the router. 

`dhcp-option=6,ipaddress1,ipaddress2`

Or you can do the same in `/etc/config/dhcp`: 

```
   ...
   config 'dhcp' 'lan'
       list 'dhcp_option' '6,ipaddress1,ipaddress2'
   ...
```

As your machines release and renew their DHCP configuration they will obtain the address of the new DNS servers automatically. 

### SIP-Phones and dnsmasq

By default, the option filterwin2k in dnsmasq is activated, which seems to cause to block queries for `SRV` records. 

`SRV` records are **not only used by Windows** computers to find their domaincontrollers but also used by e.g SIP-Phones to find the server responsible for a given domain. 

`SRV` records are a kind of generalized `MX` records. 

Therefore, the `filterwin2k` option needs to be disabled in order to let SIP-Phones work that use dnsmasq as their DNS server. 

Commented out in `/etc/dnsmasq.conf` or de-activate it in the web-interface. 

Or you can do the same in `/etc/config/dhcp`: 

```
   config 'dnsmasq'
       option 'filterwin2k' '0'
   ...
```

### DNS filtering

*   [OpenWrt Forum: Blocking tracking, ad, spyware sites from router](https://forum.openwrt.org/viewtopic.php?id=35023 "https://forum.openwrt.org/viewtopic.php?id=35023")

## Troubleshooting

### log continuously filled with DHCPINFORM / DHCPACK

Windows 7 among others ask for proxy settings using DHCP. The issue is that they do not stop asking until they have received an answer. This results in that the log contains a lot information about these requests, an example can be found below (thanks for [http://wiki.excito.org](http://wiki.excito.org "http://wiki.excito.org") for the info). 
   Jul 1 06:34:09 MorganB3 dnsmasq-dhcp[1638]: DHCPINFORM(br0) 10.69.10.59 00:23:14:c5:33:fc
   Jul 1 06:34:09 MorganB3 dnsmasq-dhcp[1638]: DHCPACK(br0) 10.69.10.59 00:23:14:c5:33:fc MorgansVaioF12Z

To solve this, edit /etc/dnsmasq.conf and add the following lines: 
   # This will tell DHCP clients to not ask for proxy information
   # Some clients, like Windows 7, will constantly ask if not told NO
   dhcp-option=252,"\n"

and restart dnsmasq with /etc/init.d/dnsmasq restart 

### Assigning dnsmasq Queryport

The queryport is not the dns server port used by dhcp clients, it is the outgoing port dnsmasq uses to query other servers, and is integral to dnsmasq succesfully assigning DNS values to the DHCP clients. The default settings create arbitrary high port number connections on a range of ports. By assigning an option line like " option queryport '30000' " in /etc/config/dhcp, one can constrain those connections to a port you assign. Be certain that your firewall allows outbound connections from the router on the query port that you assign. 

As a caution, dnsmasq runs as user "nobody" on openwrt so it is not allowed to create listening sockets on ports < 1024\. Using the standard DNS port 53 for these queries will fail. The failure can be found in the logs. Logread will show an "ignoring nameserver" error line like: 
   Jan 01 01:01:01 MyRoutersName daemon.warn dnsmasq[3490]: ignoring nameserver 8.8.8.8 - cannot make/bind socket: Permission denied

Do not assign query ports less than 1024 to the queryport. 

## Notes

*   Project Homepage: [http://thekelleys.org.uk/dnsmasq/doc.html](http://thekelleys.org.uk/dnsmasq/doc.html "http://thekelleys.org.uk/dnsmasq/doc.html")

*   Tutorial [http://www.enterprisenetworkingplanet.com/netos/article.php/3377351](http://www.enterprisenetworkingplanet.com/netos/article.php/3377351 "http://www.enterprisenetworkingplanet.com/netos/article.php/3377351")

*   Tutorial [http://martybugs.net/wireless/openwrt/dnsmasq.cgi](http://martybugs.net/wireless/openwrt/dnsmasq.cgi "http://martybugs.net/wireless/openwrt/dnsmasq.cgi")

*[1)](#fnt__1)* such as [Google Public DNS](https://developers.google.com/speed/public-dns/docs/using "https://developers.google.com/speed/public-dns/docs/using") and [OpenDNS](https://www.opendns.com "https://www.opendns.com")*[2)](#fnt__2)* currently, linux /etc/resolv.conf file is limited to three nameservers, [see resolv.conf(5) manpage](http://manpages.ubuntu.com/manpages/trusty/man5/resolver.5.html "http://manpages.ubuntu.com/manpages/trusty/man5/resolver.5.html")
