---
title: Bash and Git Alias
date: "2019-09-03"
---

![Command Line](bash.gif)

I was recently on-boarding a new intern and I made me realise I have spent a long time setting up my machine to work well 
and have taken this for granted. While installing different tools etc we needed to run some tasks via the command line. It was 
then I realised I have built up a system of Alia's that could be useful to others. 

_I work on a macbook and most of this will work on a linux setup however none will work on windows_

Lets get started! 

First lets look at what I have in my bash_profile.

```bash
alias gut="git"
alias get="git"
alias npmclean="rm -rf node_modules && npm i"
alias runDev="npm run dev"
alias tests="npm t"
alias openChrome="open -a Google\ Chrome --args --disable-web-security --allow-running-insecure-content"
```  

Lets breakdown what these do:
- `gut` | `get`: I constantly fat finger type or get mixed up when typing so if I type gut ot get it will run git for me
- `npmclean`: This is very useful for a JavaScript developer, if you are like me when anything stops working the first 
thing you do is delete your node modules and reinstall. 
- `runDev`: Something I run maybe 1000 times a day. The main npm script to start local development on my project is the 
the dev command, out of sheer laziness I dont want to type more than I need.
- `tests`: This is another short hand for a npm command, it allows me to quickly run my project tests. 
- `openChrome`: Finally this alias allows me to open chrome in an insecure mode, which ignores cors and other browser based
 security. This is useful for debugging issues with projects before changing loads of configurations
 
Secondly lets look at my gitConfig file
_Note: I have a lot more in the file but these are the only ones I use every day_

```bash
co = checkout
br = branch
ci = commit
st = status
prb = "push origin HEAD"
``` 

As long as you know git all should make some sense expect the `prb` command. The way that I work with git is to branch off 
our development branch do my feature work then push that branch to the remote on github. This command allows me to push the 
current branch to github and then quickly open a pull request. 

So how do we add these to our own setups

First you need to edit your `.bash_profile` file you can do this by running:
 
`vi ~/.bash_profile`

This will open the VI editor, you can then press `i` which will enter editing mode you can move around copy paste and all 
that jazz. Then to exit to the key combo `Esc :qw`. Dont @ me telling me to use vim or some other keyboard warrior editor 
I'm not a command line hero.  

you can do the same as about for the gitconfig. This just tip of the ice berg you can do so much with these dot file. 
I have taken bits and pieces from many others dot files. 

I recommend [this](https://github.com/paulirish/dotfiles) as a good resource.

 
 
