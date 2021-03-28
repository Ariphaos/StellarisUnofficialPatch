
## March 28th

* Fix Assimilation Rights bug (FireGolem)
* Fix Mass Extinction Event Chain for multiplayer (FireGolem)
* Improved whole L-Cluster event init (FireGolem)

## February 27th

* Attempted to fix bug where tree of life AI would try to save up the Lithoid Tree of Life budget, meaning they never save enough food to colonize.
* Pop self-modification actually does something with six pops. (thanks manuCR)
* Self-modified pops won't set themselves as non-modified.
* Fixed the Grand Dragon's shipclass names.
* Fixed 'Fire from Stars' (FireGolem)
* Hopefully a simple fix for the Fortress chain (FireGolem)
* Fix for fanatic purifier necrophage abductions (GhostWraith)

* Thanks Anaphysik for these and following fixes - and apologies for getting them out so late:
* Fixed the end of the Fall of the Shallarians chain. 
* Fixed literally unplayable Atomic Clock timing.
* Fixed a number of literally unplayable typos.
* Fixed a small bug in the Oracle chain.
* Fixed a bug in the Monolith anomaly resolution.
* 'Ammonia Biosphere' triggers primitive life rather than remnants.
* Fixed localisation error in Cunning Flora followup
* Can no longer avoid consequences of asteroid strikes with specific numbers of pops.
* Fixed error in technician job weighting.
* Fix for colonial remains in origin_events_3. This will break down on extremely dense starts, but should be fine for 99% of games (and still won't do worse, usually).

## November 13th

* Fix patch bug in Eat or be Eaten
* Prevent Enigmatic Cache from scanning primitives or other planetary enclaves in owned territory.
* Paradox fixed switching to the machine side in the uprising. Forwarded their fix.
* Paradox finally fixed some purge oddities. When 1.8.1 is out I'll change my purge script to hit only much larger worlds.
* Other 1.8.1 Cross-compatible fixes.

## November 4th

* Forwarded the one 1.8.1 change to the events so far.

* resolutions: Can't ban the galactic slave trade before the galactic market is founded.
* resolutions: Added significant AI logic to one of the industrial chain.
* solar_system_initializers/megacorp: Prevented Chor's Compass from spawning in bottlenecks. Seems to confuse the AI.
* species_rights/05_species_controls: Fixed some Necrophage AI issues with the patch AI.
* events/ancient_relics_events_3: Fixed bug in Rubricator chain.

### November 1st

* countries: Increased AI constructors to 6 (Glavius)
* diplomatic_actions: Turned off notifications for some relations. (Starnet)
* Re-disabled action.31 as Paradox appears to have fixed FE contact.
* Fixed patch bug in last Zroni site.

### October 31st

* Updated to 2.8
* All changes are now recorded in AllChanges.md
* A few new fixes, plus fixes of fixes.
* Some aspects of bombardment and purging will need to wait for 2.8.1 for a proper fix. Will attempt to forward changes to make it compatible with both as before.

#### Addressed by Paradox in 2.8

* Paradox fixed a number of scope issues.
* Paradox fixed the AI being able to snipe most of the Zroni chain sites (but not the Baol, oddly).
* Paradox fixed machine unit pops getting iced by Pox bombardment.
* Paradox fixed the alien box event.
* Paradox made Unsupervised Settlement blocker no longer create robot pops.
* Paradox let droids be colonists again.

### Sep 11st
* Fix location target Event: Dyson Sphere (utopia.30)
* Add location to graygoo.181
* Fix location rubricator_dragon_fleet (ancrel.40180)
* Fix pre_triggers id = colony.1533
* Merge needless (and conflicting?) double "allow" again (graygoo.503)
* Use widely pre_triggers (performance)
* remove widely unnecessary logical operators 

### Sep 6st
* Merge needless and conflicting double "allow" (graygoo.503)
** minor scope/syntax fixes on Distars events.

* L-Cluster quest only for reasonable empires (not bother fully incapable countries)

* Scope fix: any_ship to any_owned_ship.
* Some more scope fixes.

### August 31st

* Only change from release in this upload is tweaking the purging script to be less aggressive for resource extraction, per feedback.

