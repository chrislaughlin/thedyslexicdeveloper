---
title: Quick Tip - Boolean Filter
date: "2018-06-28"
---

QUICK TIP TIME!!!!!

I found this on twitter a while back but can't remeber the person who tweeted. I finally used it in my project today so I thought I would 
share. 

When filtering an array for only the `true` values you can do this multiple was but I find this really neat.

```javascript
[false, true, false].filter(Boolean); //[true]
```

It saves some trying and looks cool. 
