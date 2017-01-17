# Magnesium - [Hugo](//gohugo.io) Theme

## Demo Page

[https://milligramme.github.io/magnesium/](https://milligramme.github.io/magnesium/)

## Features

- [Pure](http://purecss.io/) based
- [Font Awesome](http://fontawesome.io/) supported
- [highlight\.js](https://highlightjs.org/) code highlight
- [Lightbox](http://lokeshdhakar.com/projects/lightbox2/) lightbox image
- Development Mode
- No Humberger
- Google Adsense (Optional)
- Disqus Comment (Optional)

## Installation

```
$ cd themes
$ git clone https://github.com/milligramme/magnesium.git
```

## Sample Configuration

```toml
baseurl = "http://replace-this-with-your-hugo-site.com/"
title = "Your site title"
author = "Your name"
theme = "magnesium"

copyright = "<i class='fa fa-copyright fa-fw'></i> 2016. All rights reserved."
canonifyurls = true
paginate = 10

# for CJK lang
hasCJKLanguage = true

googleAnalytics = "Your Google Analytics tracking ID"
disqusShortname = "Your Disqus Shortname"

[indexes]
  tag = "tags"
  category = "categories"

[params]
  author = "Your name"
  subtitle = "Subtitle"
  brand = "magnesium"

  # CSS name for highlight.js https://highlightjs.org/static/demo/
  highlightjs = "atom-one-light"
  
  dateFormat = "2006-01-02 15:04"
  
  [params.dev]
    # Set local working dir to edit with TextMate
    # This work under Development Mode
    workingdir = "/path/to/hugo/content"

  [params.social]
    twitter = "#"
    facebook = "#"
    googleplus = "#"
    tumblr = "www"
    pinterest = "#"
    stackoverflow = "#"
    github = "#"
    bitbucket = "#"
    gitlab = "#"
    instagram = "#"
    flickr = "#"
    linkedin = "#"
    vimeo = "#"
    soundcloud = "#"
    lastfm = "#"
    youtube = "#"
    pinboard = "pinboard"
    slideshare = "#"
    speakerdeck = "#"
    amazon = "amzn.asia/#"

  [params.adsense]
    # optional
    # add these html-files in <your_blog_root>/layouts/partials/adsense
    # mobile_anchor = "adsense/mobile_anchor_adv"
    # responsive1 = "adsense/responsive_adv1"
    # responsive2 = "adsense/responsive_adv2"


[menu]
  [[menu.main]]
    name = "Home"
    pre = "<i class='fa fa-home fa-fw'></i>"
    weight = 0
    identifier = "home"
    url = "/"
  [[menu.main]]
    name = "Posts"
    pre = "<i class='fa fa-file-text-o fa-fw'></i>"
    weight = 1
    identifier = "post"
    url = "/post/"
  [[menu.main]]
    name = "Tags"
    pre = "<i class='fa fa-tags fa-fw'></i>"
    weight = 2
    identifier = "tags"
    url = "/tags/"
  [[menu.main]]
    name = "categories"
    pre = "<i class='fa fa-folder-o fa-fw'></i>"
    weight = 2
    identifier = "categories"
    url = "/categories/"
  [[menu.main]]
    name = "About"
    pre = "<i class='fa fa-smile-o fa-fw'></i>"
    weight = 3
    identifier = "about"
    url = "/about/"
```

## Shortcodes

### Image

```
{{% img src="images/image.jpg" %}}
{{% img src="images/image.jpg" class="right" %}}
{{% img src="images/image.jpg" class="left" %}}
{{% img src="images/image.jpg" caption="Referenced from wikipedia." href="https://en.wikipedia.org/wiki/Lorem_ipsum" %}}
```

[Lightbox](http://lokeshdhakar.com/projects/lightbox2/) supported.
By default `data-lightbox="roundtrip"` is set.

## Run ExampleSite

```
$ cd themes/magnesium/exampleSite
$ hugo server -D -w -t=../..
```

## Development Mode

Supported development mode.

```
$ env HUGO_ENV="DEV" hugo server --watch --buildDrafts=true --buildFuture=true --theme magnesium
```

This mode is

* Not show Google Analytics tags.
* Show `IsDraft`.
* Show `Edit` button for TextMate. ( `.Site.Params.workingdir` is required )

And set `{{ if ne (getenv "HUGO_ENV") "DEV" }} Set elements here. {{ end }}` if you want to place only in a production environment.
