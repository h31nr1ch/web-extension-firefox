# Web-extension-firefox #

## What is this repositoy for? ##

Web extension for firefox, the extension goal is capturing user information using JS.

## How do I get set up? ##

* Firefox > 50 or higher
* JavaScript

## Install ##

In Arch linux, just install:

```
sudo pacman -S firefox apache 
sudo systemctl restart httpd
```

and clone repository in /srv/http/

```
cd /src/http/ ; sudo git clone https://github.com/h31nr1ch/web-extension-firefox
```

## Software configuration ##

Open firefox and in the bar search type:

```
about:debugging
```
after that, just load Temporary Add-on

## Contribution guidelines ##

* h31nr1ch (owner)

