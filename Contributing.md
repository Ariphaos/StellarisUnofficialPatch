
# Contributing

I highly suggest using a three-way merge tool, such as [Winmerge](https://winmerge.org/), when managing this project. It makes updating for new releases, evaluating other fixes, and so on a comparative breeze. Updating this project to a new Stellaris release takes me a couple hours, roughly. For 2.8 I took the time to re-document everything for Github here.

* Please document your changes clearly. Include relevant updates to the appropriate Changes- and ChangeLog files if making a PR.

* Please do not make unnecessary changes e.g. to whitespace.

* Understand that your contribution will be shared with the wider community and that you will be allowing others to build on your fixes.

## What is in scope

We accept fixes for the following issues. Some issues might span multiple categories.

* **Crashes** Naturally. We've fixed two of these so far.

* **Exploits** Things that were clearly not intended by the developers that can give the player an edge or circumvent a problem. This needs to be fairly serious.

* **Functionality** Added abilities that do not affect the balance of the game e.g. allowing the player to disable their juggernaut shipyard(s).

* **AI** Tweaks to the AI to make it handle situations more intelligently. Some of these are taken from Glavius or StarNet.

* **Bugfixes** General bugfixes that aren't necessarily critical.

* **Oversights** These are issues that look like bugs. Things like the Baldarak going to a fake gas giant and other elements that impact flavor more than game balance. As some of these impact numbers there is always a bit of subjectivity here, but it should never feel out of line.

* **Performance** These fixes do not meaningfully impact gameplay, but remove extraneous processing. Removing MTTH events, using less expensive functions, and so on.

* **Mod Support** Fixes that do not affect vanilla gameplay, but instead ensure that mods adding certain things, like new government types, do not break parts of the game.

* **User Experience** Correcting UX issues.

* **Cosmetics** Typos, incorrect icons, graphical issues, and other elements that do not impact gameplay in any fashion.

## What is out of scope

* **Tuning/Balance** If something is functioning but merely 'unbalanced', it isn't our job to fix it. This is only appropriate when necessary as a part of a larger fix, where numbers are needed and Paradox provides none.

* I am slowly putting together my own balance mod, which will make more drastic changes to the game.

## Branch Policy

Every major (x.x) release of Stellaris will get its own branch (2.6, 2.7, etc) at the end of that version's release cycle. 'Master' will be used as the general development branch for the current version.