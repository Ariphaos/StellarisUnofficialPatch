This is to document and explain new systems the patch introduces to correct bugs. They don't change anything existing.

# Features

## Juggernaut Shipyard

* Policy is available to disable.

# AI / Bugfixes / Modding

## Autoprune

This is a (currently non-functioning) part of the economic system, to try to focus the AI economy a bit more intelligently. It destroys districts on worlds where it makes sense to do so.

## Mass Purging

An event for handling purging on densely populated (> 50 pops) worlds for exterminating purge types. Normal, processing, amalgamation, labor camps.

This was originally an exploit fix, because people can dump thousands of pops onto a grid amalgamation, processing, or labor camp world, and generate obscene resources. Meanwhile, 'normal' extermination could take forever and your capital could last decades in the warm embrace of the Swarm.

For exploitative purging, there is a 2% chance a pop will be eliminated. For normal, it is 10%. Refugee triggers are handled normally.

The event does not trigger on worlds with ground combat, and there is a 1-month grace period. 

## Political Restructuring

This was created to correct for two bugs in vanilla Stellaris.

The first was ruler pops could sometimes be left 'unemployed' from the result of certain civics. Demotion time is drastically reduced for the first two years to compensate.

The second was the script to assign pop ethics based on government ethics did not originally function. This script handles this.

## Soldier Counting

These events track soldier counts for limited types - Azizians, Imperial Legion, and Titanic Life. They allow you to purchase new ones if one dies, and occasional recounts track things there is no current trigger for.

## Variables for mods

Allow mods to set variables to change various elements in the game and this patch more consistently. These are located and documented in `common/scripted_variables/~~ariphaos_patch_overridable.txt`.

