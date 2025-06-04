# Change Log - 2025

## June 4th

4.0 Update, apologies for the delay, all.

Special thanks to Cheesemongle (Slightly Smarter AI) and SushiDragon (Stellaris Fixes) for allowing me to incorporate their fixes and improvements.

* Everything Stellaris Fixes included was incorporated, save for:
* * Gravity Snares counting as a kill (In theory no, but if you just end up culling them it should),
* * Genetic Memory's documentation was changed to a 25% maximum, so it is no longer a bug.

Bringing in more advanced economic plans and war strategies is a larger project. The AI is certainly more effective with my patch, but my own work focuses on keeping the AI to its character, more than trying to be the absolute best it can be. 

### New Features

* Added .25 hyperlanes to all default starts, for those who want them.
* Moved the precursor unity limit changes to an overrideable variable, which is set to the default for the patch.

### New Fixes

* Fix for spiritualist crystal research description.
* Synthetic / individual machine empires shouldn't be able to attach brainslugs. (Or if there is, there should be more to it.)
* Remove the Payback debris field from the B planet if it has it. (SushiDragon) 
* Make sure Wilderness empires have an option for the First League capital (SushiDragon)
* Superlight event can no longer terraform nanite worlds into deserts. (SushiDragon)
* Loosened the restrictions on AI building upgraded hospital buildings.
* Set return_to_formation_distance to 600 in ship behaviors to de-hamstring short-range ships. (TheDeadlyShoe)
* AI should be able to budget for any edict.
* Orbital rings shouldn't count as outposts.
* Scramble for some extra exotic gasses if a hospital/entertainment upgrade is possible and a planet is low on amenities. (Cheesemongle)
* Don't let the AI lock itself on buildings requiring minor artifacts. (Cheesemongle)
* Restrict AI to only build its archaeotech facility on a relic world.
* Some logic for farming automation (Cheesemongle)
* Make the AI a bit smarter about its section usage (Cheesemongle)
* Some logic for energy automation
* The slave trade returns to the galaxy.
* Building a ringworld doesn't remove astral scars.
* Stop the AI from sending countless science ships into Last Thought.
* Awakened Emperor resolution should draw support from subjects of said awakened emperor, and not other fallen empires.
* Base Starlit Citadel links off of star count rather than galaxy size strings.
* Block anomalies on Fevor's moon; they can block the reward you get from the chain.
* AI should only assimilate one species at a time.
* The curators will not assist homicidal countries with their collections.
* Add Fallen Hive to FE Cluster checks.
* Try to keep Marauders from spawning too close to a Fallen Empire, else the FE will just nuke it.
* Allow envoys to get species-wide traits.
* Matched a few missing opposite trait entries.
* Refugee fix. I'm not sure if 100% is actually what is desired, but that seemed to be what the intent was?
* Properly clear observation event blocking flag on conclusion of implant removal chain, and properly clear the event block on the outpost also.
* Don't tell everyone the Artisans have been wiped out if they still have stations left. (SushiDragon)

### Alterations from prior versions.

* Most economic categories changes are not currently included as I am building a proper build system for the patch, which will be able to handle this mess with more grace on updating. jasonpepe's mod covers more mods, anyway.
* The mod's purging logic has been removed. It needs a rethink with the new update, and a good a time as any to shunt that over to the balance patch.
* Removed pop crime loss changes (where you lose 300-400 pops every few years because crime). They will be addressed in the balance patch. 
* Several more minor 'balance' changes were caught and removed, as well.

### Paradox Changes in 4.0 Addressing Past Fixes

* The Caravaneer partygoers event no longer creates half-species, so there is no more need to fix this event. (VFix)
* Missing = sign in progress.2 - discovery of alien life (First found by 17blue17)
* Self modification events have been purged in 4.0, at least for now. This means various sanity checks like having 6 pops being magically peaceful, and not allowing pops to destroy their own kind no longer apply. If these events return, will check them accordingly.
* Ersatz brain slugs require a habitable world.
* Let the vol (and others) make tomb worlds.
* Pop number no longer matters, so attempts to get the AI to self-limit no longer matter.
* Paradox has implemented something roughly the same as my prior full-citizenship fix.
* Ditto for full military service.
* Bunch of traits are now opposite for syncretic proles. I think quarrelsome is the only one that may be missing now?
* Paradox partially addressed vassals of one AE supporting the other AE in the Galactic Senate.

## May 5th

Final Pi update. Had a vacation from Stellaris, apologies, everyone.

* The End of the Cycle won't convert Shattered Ring segments to shrouded worlds (Nguyen)
* The End of the Cycle will better handle bypasses. (Nguyen)
* district_resort is a district, not a set of them (FirePrince)
* FirePrince found a couple of other bugs in my script, for bombardment and the disband gdf resolution. Thanks FirePrince.