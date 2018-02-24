## What the actual fuck is this page?!

If you reached this repository then most probably you are an addon reviewer who is wondering what the hell is this page.

In order to better understand why it was required to use this custom module, you must understand the frustration story behind it. (You might not know, but all the *few* apps under [Hater Apps](https://www.haterapps.com) *brand* have a frustration story behind them. This page is no exception.)

<br />

#### The frustration:

The Fake Data extension, as of Feb. 2018, is published on 3 main browser stores. 2 of them have people that actually review the code, which is great. The problem is that **all** of the reviewers, and I really mean **all** of them have noticed some weird code on the first (eye) scan. That has never been a problem because all the code was legitimate, explained and finally approved.<br />
The problem is that every each of them (the reviewers) are always noticing the same things, which might be frustrating especially when doing updates quite often.

<br />

#### The actual reason for this page:

One of the problems was that the compiled and minified source code did not match the one that was bundled with the extension. The differences were caused / generated by the libraries that were used as a dependency.


**Let's get more technical!**

After a lot of investigation, frustrations, hate, swearing, blaming I can finally write a very good explanation of what caused the problem. If somebody is actually interested in reading this.

All of the differences created were from the [Vue.js](https://vuejs.org/) library, and were of two kinds:
* Differences that could be fixed by rewriting parts of the code
	* For example, Vue has a feature where you can write scoped CSS, which means that the styles will only apply in the current component. The way it was doing this was by generating classes with random names. Those random names were...random...on every build. The fix was to not use them anymore and rewrite the CSS a bit.
	* Another difference was caused by the [vue-loader](https://vue-loader.vuejs.org/en/) library (the library that allows Vue to be used with webpack), which was adding some extra *stuff* in the code if there was no environmental variable on the compile time set with the value of "production". This was fixed easily, as you might have guessed.
	
* Besides the "features" that were mentioned above, there were some libraries that generated some random ids in the code which could not be stopped from doing this, or could them...?
	* This is where this module comes in place. There were 4 libraries installed that were using a module called [hash-sum](https://www.npmjs.com/package/hash-sum). What it does is pretty self explanatory from the description, although I was not really curious of what actually does in the code. All I knew was that I cannot control how the hashes were generated. So I ditched it. But I could not ditch the libraries that were using it.
	Because of this, I have created another module with the same name and same called function that I can control.
	
<br />

You might ask yourself now if this is less secure because, uhm.., it has hash in name and it must be used in some cryptographic shit, or whatever. The answer is no, it is not less secure to the use case in those modules. The hash was only used in generating random module names, and that doesn't affect the security in any way at all.


<br />

#### Is this allowed?

I was asking myself if using this kind of hack might be allowed or not. Then I read the addon policies from both browsers and it stated nowhere that the modules used to compile the obfuscated code must be downloaded only from npmjs.com or github.com

The module contains 8 non-empty lines of code, which we can all agree, in less than 30 seconds, that there is no shady stuff in there.

This module can and should be considered as part of the extension, and not as an unapproved, or unofficial javascript library or framework.

Based on all of the above statements, on what I have presented until now, and on the fact that there is no security concern involved in transition from the original module to this one, I see no problem in using this workaround in order to not get asked over and over again about why the generated code is not the same.

<br />
<br />

[![Hater Apps](https://www.haterapps.com/assets/logo_text_black_bg.png)](https://www.haterapps.com)