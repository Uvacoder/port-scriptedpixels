---
title: 'M1 MacBook Air for Web Development'
date: '2021-04-22'
tags: ['MacBook Pro', 'M1', 'Apple', 'Front-end', 'CSS', 'HTML', 'JavaScript', 'Git', 'IDE']
category: 'Web Development'
---

<p class="introduction">Migrating from my top-end early 2015 13" MacBook Pro was a breeze. I decided to do a clean install and use iCloud backup/restore for my user profile & documents. This meant I would only install what I actually needed...</p>

## What the Air replaced
My 2015 MacBook Pro (MBP) was a pretty beefy machine. It was spec'd out and I upgraded the SSD to help make it run faster - it all helped in the long run and I easily could've kept using it for another year or 2.

Then Apple announced the M1 Silicone in the Air's chasis, along side a 13" MacBook Pro. I've always loved the design of the Air. It's the ultimate portable laptop, but it lacked power due to the CPU and cooling system. So I'd never wanted to use it for design and development. Now they've made it a powerhouse with the new Apple Silicone. I had to get my hands on it to see how it stacked up against my 2015 MBP.

TLDR; it's' faster and better in all the ways possible. The 2 USB-C Ports haven't been much of a pain as I thought they may have. I [use this](https://www.amazon.co.uk/gp/product/B08K7KS2K9/ref=ppx_yo_dt_b_search_asin_title?ie=UTF8&psc=1) to add additional ports, which hasn't been often!

Safari browser [Speedometer](https://browserbench.org/Speedometer2.0/) test results:

2015 MBP:

<article-image src="blog/macsetup/MacBookPro2015.png" alt="trackpad settings" class="mb-10" ></article-image>


2020 MacBook Air:

<article-image src="blog/macsetup/MacBookAir2020.jpg" alt="trackpad settings" class="mb-10" ></article-image>


### MacBook Air Spec
- [Apple Silicone M1 Chip](https://www.apple.com/uk/newsroom/2020/11/apple-unleashes-m1/)
- 8 Core CPU & GPU
- 16GB
- Space Grey
- Refurbished
- Total: <strong>£1165.83</strong>

## IDE
- [Visual Studio Code](https://code.visualstudio.com/?wt.mc_id=DX_841432)
- [Webstorm](https://www.jetbrains.com/webstorm/)
- Font-ligatures - enable and use a font like [Fira Code](https://github.com/tonsky/FiraCode)

## Browsers
- Most important setting for any browser
  - <strong>Change default search engine to DuckDuckGo</strong> - I don't like Google services and I stay away from them as much as possible, except YouTube, so I use a throw-away account that's only used for their services
- Safari - mostly used for personal day to day and also development
- Safari Tech preview - used to test out pre-release changes
- FireFox - used for its devtools and my main development browser
- Chrome - used for dev tools and client work
- Microsoft Edge - hardly used but it's good to do some cross browser testing

## Applications
- [GitTower](https://www.git-tower.com/mac)
  - git GUI application. I used to use Git all via the command-line, but after discovering this app I decided that I could work faster and better with the GUI. It's now on Windows too.
  - **If you're intrested in purchasing a license then I'd recommend using my [Referral link](https://www.git-tower.com/p/refer-a-friend/R-V6U62EWPZV)** 🙏🏽
- [MAMPPro](https://www.mamp.info/en/downloads/) - mostly used for WordPress
- [RunJS](https://runjs.app) - small JS scratchpad
- [LuLu](https://objective-see.com/products/lulu.html) - network monitor to block adware etc
- [MalwareBytes](https://www.malwarebytes.com/mac) - Mac’s are now being targeted alot more
- [Lockdown](https://apps.apple.com/us/app/lockdown-privacy-desktop/id1483255076?mt=12) - adware/social-crap blocker
- [Sketch](https://www.sketch.com/) / [Figma](https://www.figma.com/downloads/) / [Adobe XD](https://www.adobe.com/uk/products/xd.html)
- [Sequel Pro](https://www.sequelpro.com)

## Terminal
- [Oh my zsh](http://ohmyz.sh/)
- [HomeBrew](https://brew.sh) - don’t use it all the time but it’s perfect for Iterm setup
- [NodeJs](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com)
- [Xcode dev tools]()
- [iTerm2](https://iterm2.com) - Set key mapping
- SSH Keys generation - Git access etc
- Check your Profile PATH - it breaks way too often and can get messy

## MACOS Settings
I was a long term Windows user before switching to MacOS and I had to make some changes to the way it worked to make myself feel at home.

### Trackpad
I'm a big fan of the trackpad and the way it works, especially compared to the Windows laptops. The defaults are ok, but I prefer having the following settings set:

<article-image src="blog/macsetup/Trackpad.png" alt="trackpad settings" ></article-image>

### 3 Finger Dragging
I wasn't a fan of the default single click, hold and drag so I opted for the 3 finger dragging for app windows:

<article-image src="blog/macsetup/3FingerDragging.png" alt="enable 3 Finger Dragging" ></article-image>

### Dock Settings
I want to make use of the whole screen so I choose to have the Dock hide automatically, and I pin it to the left of the screen so I don't accidentally hover over icons when using apps. I also remove all the apps from the Dock so there's litreally nothing in there except the apps that are running. I use the `command + space` keys to use Spotlight to search for apps.

<article-image src="blog/macsetup/DockSettings.png" alt="Dock Setting" ></article-image>

### Firewall
I thought I'd add this as it's always best to make sure it's enabled.

<article-image src="blog/macsetup/Firewall.png" alt="Firewall" ></article-image>

### Keyboard
I prefer to use the F-Keys for their default functionality when in applications. I hold down the `fn` key when I need to use the device settings, like brightness and volume. This is really usefull if you want to hit `F5` multiple times to refresh a browser page.

<article-image src="blog/macsetup/Keyboard-FKeys.png" alt="F keys" ></article-image>

The other thing that I odd on MacOS was the keyboard Tab key wouldn't tab between OS Promt options. Changing the below enables this.

<article-image src="blog/macsetup/Keyboard-TabNavigation.png" alt="Tab key" ></article-image>

### Apple Watch unlock

If you've got an Apple Watch then this is a no brainer. Open the laptop lid and if you've got your watch on then it'll unlock the laptop 🤯

<article-image src="blog/macsetup/AppleWatch.png" alt="Unlock with Apple Watch" ></article-image>
