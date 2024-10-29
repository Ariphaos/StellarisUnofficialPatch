# Change Log - 2024

# October 29th

3.13.2 update (better late than never?)

- Fixed missing = sign in progress_events (17blue17)
- Made juggernaut shipyard policy apply to Cosmogenesis ships (Dobrynja )

# September 24th

3.13.1 update

# September 10th

3.13 update

- Applied site-sniping fix code to new precursors.

Paradox fixed the following in 3.13:

- Scope error in action.740
- A lot of basic mod support fixes
- Nanites will no longer terraform astral scars (distar.311)
- Scope check in paragon.5223
- Removed broken wormhole traversal logic

## September 7th

Final 3.12 patch

- (Patch Bug) Fixed an erroneous line in border_policy
- (Patch Bug) Gestalts shouldn't see robot assembly decisions.
- (Patch Bug) Don't block imperial chosen rulers from getting the extra civic.

- Don't block rulers without the imperial heir trait from getting the extra civic in the chosen one event.
- Add missing @auth_cyber_dictatorial_collectivist_tech entry (Arc)

## July 16th

So my dev machine developed a memory fault I ended up with other priorities. Apologies everyone.

3.12.5 update

- Paradox correctly added can_think for military leadership.

- (Patch Bug) Modularity ascension now gets synthetics as they should.
- (Patch Bug) Minor AI issue in starbase modules (17blue17)
- (Patch Bug) Impossible Organism no longer needs scope fix. (ThePwnageKitty)

- Deconstructing megastructures now properly returns the correct amount of resources (Night)
- Crisis can purge again (Zomifi)
- Let the Aberrant and Vehement use their construction ships (Zomifi)
- Fix Scourge colonization (Zomifi)
- Infinity Root leader should not count towards leader cap. (Govannon)

## June 1st

3.12.4 update

- Fixed a missing bracket in specialist jobs.

## May 30th

3.12.3 update

- Fixed some sky glitches my patch introduced (Sorry)
- Stopped mercenaries from polluting observe mode (Zomifi)
- Hopefully blocked the AI from asking non-leaders to leave hegemonies. (Let me know if it works.)

## May 16th

3.12.2 update

## May 7th

Now live for 3.12.

Paradox has incorporated several more of my fixes into 3.12:

- AI anomalies function again
- Buildings have proper economic resources
- Fallen Empire buildings no longer auto-destruct.

## May 6th

Final 3.11 patch

- Re-did fix for the Remnants origin somewhat, as Paradox has increased the maximum number of jumps to your guaranteed colonies to six. I need to make something for the balance patch to make this a bit more sane.

## April 11th

- 3.11.3 update. Also a busy day for me.

- [I now have a Patreon](https://www.patreon.com/Ariphaos). I would just like to cover my Patreon expenses, really.

- Replace outdated "order by = level" with has_skill trigger. (President Memes)

## March 12th

3.11.2 update. Apologies for the delay, busy day.

- Added some missing descriptions for some new resolution tweaks.

Patch issues fixed by Paradox:

- Paradox fixed an issue with scrap miners on shattered ringworlds. 

## March 9th

- AI won't research or build quantum catapults as it does not know how to use them.
- Made priests want to keep their job a bit more, and weight them to ethics.
- Fix for a Federations event missing a closing bracket. (17blue17)
- Selective Kinship doesn't matter for Fallen Empires.
- Adjusted names of tradition and building cap variables to match the defines. Mods that set the same variables will be taken into account for game logic.
- Corrected some resolution/policy issues for PreFTL policy.
- Reduced MILITARY_POWER_HEALTH_WEIGHT to better reflect actual combat results.
- Fix Riftworld origin contact event.
- Fix for Seddom. The irony. There is an event that fixes this if you have been affected by the bug.

## February 27th

- 3.11 Update. Yes, this still fixes several hundred bugs; Paradox only got to a fraction of them. About twice as many as they listed, though their patch notes usually only document about half of the fixes they get to in a major patch, so this is no real surprise.
- There are a few I know they looked at and did not adopt. Some of these have been removed, some were oversights, some will get moved to the balance patch, some I am not sure if they figured the why of it. These have / will be listed in the documentation.

- I have begun a project to document every change this patch makes. It is a colossal undertaking, and I am not yet finished, but you can see the work so far in the various Changes- files. I will attempt to keep them updated.
- With this I have reverted a number of chances to better prepare for moving to a build system. This will make the project easier to maintain, and more powerful for modders to rely on.

- Dystopian living standard also decreases slave political power.

## February 21st

- Final 3.10 release.

- Fix for terraforming candidate not being removed on terraforming directly to a machine world.
