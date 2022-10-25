# ChangeLog

- AI is more likely to comply with galactic law regarding Amoebas, and gives more weight to the strength of its convictions.
- Should have removed the last of the legacy AI economic code.
- Purging fix now fires fire_on_action appropriately.
- Corrected a bunch of is_robotic_species entries.
- Handled is_robotic/lithoid/organic species checks in a more robust fashion.
- Spiritualist FE is no longer isolationist.
- AI will promote/suppress factions to maintain or regain unmodifiable civics. A few ascension perks also modify this.
- Fanatic purifiers get 30 support for the supremacist faction instead of 10 because that's what they lose out on.
- Successor khanates are not ignored for TECHNOLOGIST_TECH_LEAP.

- More logic for resolutions. (Some inspired from SirBlackAxe)
- Tomb world result of abandoned terraforming equipment won't kill radiotrophic or other nuke-loving species. (SirBlackAxe)
- Fixed some logical oddities with the Wasteland Radiation and Pacifist Movement colony events. (SirBlackAxe)
- AI is smarter about military applications of minor artifacts. (SirBlackAxe)
- Zombies and Nerve Stapled pops have -1000% demotion time from specialist or ruler. (SirBlackAxe)
- Apline habitability for AI preference. (SirBlackAxe)
- Expel corporation functions for all war allies. (SirBlackAxe)
- LGate activation tech marked as dangerous. (SirBlackAxe)
- Allow single-planet empires to research colonial and galactic bureaucracy if they have sufficient pops. (SirBlackAxe)
- Blocker techs no longer require multiple planets, so single-planet AI can clear their own blockers if needed. (SirBlackAxe)
- Hive mind AI more likely to research terraforming techs. (SirBlackAxe)
- Restrict zombies from full military service. (SirBlackAxe)
- Prevent precursor initializers from clobbering resources. (SirBlackAxe)
- Block gestalts from solar sails and crashed ship anomalies they cannot use. (SirBlackAxe)
- Replaced is_regular_empire checks with is_gestalt checks in buildings, deposits, and districts for increased robustness. (SirBlackAxe)
- Fixed industrial ecumenopolis colony designation. (SirBlackAxe)
- Attempt to make sure leaders don't begin with slave optimization agendas unless appropriate. (SirBlackAxe)
- Allow gestalts to sell artifacts to private collectors if they have galactic market access. (SirBlackAxe)
- Further triggers to make the AI smarter about handling minor artifacts. (SirBlackAxe)
- More logic for automation exceptions. (SirBlackAxe)
- Disable robot assembly control if you can't actually assemble robots. (SirBlackAxe)
- Add some AI logic to strip mining decision. (SirBlackAxe)
- Fix for shattered ring world scrap miner job descriptions. (SirBlackAxe)
- Catalytic machine empires only get artisan drones from industrial ringworld segments if they are servitors. (SirBlackAxe)
- Sanity checks for agricultural jobs on habitats. (SirBlackAxe)
- Living metal construction also requires mega-engineering. (SirBlackAxe)
- Planets require at least 2 pops for auto-migration. (SirBlackAxe)
- Weaker empires will avoid the lgates and l-cluster while the nanite crisis is active. (SirBlackAxe)
- More thorough rules regarding bypass access. (SirBlackAxe)
- Corporations won't become metalheads without criminal heritage. (SirBlackAxe)
- Made some AI personalities be more flexible with traits. (SirBlackAxe)
- Allow tomb worlds to be generated with high/low gravity. (SirBlackAxe)
- Hive empath AIs will have gentler first contact policies. More militaristic gestalts less so. (SirBlackAxe)
- Corrupt drones no longer produce trade value. (SirBlackAxe)
- Criminals generate trade value from decadent lifestyle. (SirBlackAxe)
- Corrupt and Deviant drones no longer check for living standards, and use pop_amenities_usage_no_happiness_base instead. (SirBlackAxe)
- Factions no longer give -.001 approval for anything. It is either 0 (if the other option is positive) or +.001 (otherwise). (SirBlackAxe)
- Increased visibility of faction demands that are normally hidden. (SirBlackAxe)
- Moved is_enslaved and is_being_purged from can_join_faction to can_join_pre_triggers for totalitarians. (SirBlackAxe)
- civic_indentured_assets now fulfills TOTALITARIAN_STRATIFICATION. (SirBlackAxe)
- TOTALITARIAN_EXTRANATIONAL_AUTHORITY now fulfilled by being galactic emperor. (SirBlackAxe)
- Attraction x0.25 for being a different species now for not being a citizen, as recommended by dev comment. (SirBlackAxe)
- Giant massacre no longer goes away if you kill the last leviathan. (SirBlackAxe)
- Scholariums count towards TECHNOLOGIST_RESEARCH_TREATIES. (SirBlackAxe)
- Fallen Empires won't trigger synth envy. (SirBlackAxe)
- Subjects can fulfill TECHNOLOGIST_TECH_LEAP. (SirBlackAxe)
- Imperialists won't whine if you have no rivals just because you don't have anyone who you can rival. (SirBlackAxe)
- Added weights to bias leaders to certain classes. (SirBlackAxe)
- Fixed economic categories for fallen empire pop jobs. (SirBlackAxe)
- Stop job bouncing because some jobs give high weight to not having the job. (SirBlackAxe)
- Diadochi get a second random civic to start, and have better starting placement for their starbases. (SirBlackAxe)
- Marauder mercenary general trait actually gets used. (SirBlackAxe)
- Fallen empire humiliation also clears subject claims. (SirBlackAxe)
- Communications jammer won't block unrelated starbase buildings. (SirBlackAxe)
- AI won't build transit hubs unless a planet in the system could use them. (SirBlackAxe)
- AI less likely to build shroud beacons if they already encompass them. (SirBlackAxe)
- Don't allow disruption fields in pulsar systems. (SirBlackAxe)
- Fixed check for oligarchic government. (SirBlackAxe)
- Made sure military leaders can think. (SirBlackAxe)
- Rogue Servitors can accept refugees too. (SirBlackAxe)
- Added some missing checks for good food planets. (SirBlackAxe)
- Excluded Wenkwort from being considered a good mineral planet if it is under custodianship. (SirBlackAxe)
- Modified some events to prevent the creation of ghost pops. (SirBlackAxe)
- More refinement in AI starbase handling. (SirBlackAxe)

## October 11th

- Fixed First League homeworld description as it is now habitable. (www)
- Exempted Erudite from 'enigmatically unlucky'. (www)
- Fixed crime/deviency error spam. (Inny)

Paradox fixes:

- They fixed the toxoid traits.
- Fix for anomaly.3040, though they left the base chance in.

## October 9th

- (Patch bug) Fixed inappropriate removal of Military Academies.
- (Patch bug) Fixed some incorrect things in economic categories.
- (Patch bug) Replaced is_robotic with is_robotic_species so modders can interrupt.
- Corrected missing is_phototrophic = no from some drone job triggers. (Inny)
- Added cooldown to Brood Queen activation. This was commented out intentionally for some reason but I cannot fathom why. (Inny)

## September 20th

- 3.5 release

- Fixed some scope errors.
- Paradox has implemented something similar to my own terraforming fix, so that can go away.

## September 19th

- Final 3.4 release.
- Fixed some improper keywords.

## July 8th

- 3.4.5 release
- Fix for nanite swam event (FirePrince)


## June 22nd

- Incorporated some missing exists = owner lines. That this is necessary is a bug but also shouldn't cause future problems.
- Disabled the Dragon Season fix as I think it should function properly now. Some code has been left behind in case it needs to be reimplemented.

## May 21st

- Forwarded a 3.4.4 fix
- Reduced subjugation attractiveness.

## May 19th

- 3.4.3 release
- Restored some previous AI fixes that got clobbered.


Patch fixes now applied by Paradox:

- Non-standard colony ships were not being tracked under colony economy.

## May 12th

- 3.4.2 release

Fixes Paradox fixed in 3.4

- You no longer get multiples of the same tech result from the Shroud once you already have the option
- A handful of resolution fixes.

## May 8th

- Performance fix for slaver AI empires with chemical bliss when certain galactic policies are active.

## March 31st

- Make AI less aggressive about destroying military academies and shield generators.
- Don't spawn hyperlanes to the sealed system.

## March 16th

- 3.3.3 update. Will work with 3.3.2 saves - some bugfixes and a few AI enhancements.
- Re-implemented market nomination fix.

## February 26th

- Version 3.3.2 updates
- Removed some fixes that no longer properly functioned.
- Amoeba will now attack Tiyanki as originally. Buffed Tiyanki fleet count slightly to compensate.
- Can't tame dragon multiple times. (FireGolem)

## January 18th
- All starbases marked as shipyards (SirBlackAxe)

## December 23th
- Fixed Pirate Thalassocracy spawn point find (FireGolem)

## November 18th

- Fixed Nomad hostility (FireGolem)
- Restricted Gray goo planet events (FireGolem - performance fix included in 3.2)
- AI checks no longer applied to fortress upgrades.
- Can again see city district slots on unowned worlds (this was always a cosmetic issue)

## October 7th

- Reduced or implemented opinion maximums for declining war and voting against proposals. (Ariphaos)
- Prevent the Great Khan from leaving his fleet. (FireGolem)
- Fixed privateer sabotage for empires with >= 200000 fleet power. (Ariphaos)
- Blocked bureaucratic buildings on slave/resort colonies. (Ariphaos)
- Lowered weight for decadent pops to take soldier jobs (ends up being a high enough priority for them to ignore 'respectable' work). (Ariphaos)
- Ecumenopoli add 36 building slots, instead (for people with mods adding more building slots). (Ariphaos)
- Fixed some bugs in my AI work.

## September 29th

- end_war_effect fix (FireGolem)
- Fix for auto-surveying on station destruction (FireGolem)
-- Excluded dormant marauders from this effect.
- Caravaneers and Xenophile FEs treat amoebas and crystals as pacified (there were situations caravaneer pathfinding couldn't resolve). (Ariphaos)
- Stop AI from filling the planet with city districts. (Ariphaos)
- More AI improvements (some from StarNet, some of mine)
- Shine Divine would spare bugged robots (Ariphaos)
- Bombardment policy fix (FireGolem and Inny)

## September 22nd

- Some more AI improvements from StarNet (Salvor)
- More of my own AI improvements (Ariphaos - mostly to resolutions)
-- Notably, the AI takes into account how much it likes someone for targeted resolutions. Could probably use a bit more nuance but should suffice for consistency.
- Fixes for killed/disbanded limited troops (corsairmarks)
- Manifesti Autonomous Munitions demand fix (corsairmarks)
- Moon sky fix (corsairmarks)

## September 18th

Lem release.

### Patch bugs fixed by Paradox

- Gestalt crime reduction fix.

## August 25th

- Minor fix bombardment stance raiding ai_weight scope. (FirePrince)

## August 16th

- Minor performance fix for distar.10955 (monthly event). (FirePrince)
- Minor fix for marauder.4: if a Marauder faction got destroyed by a non default empire an notify claims return but they do not. (FirePrince)
- Minor fix for marauder.6: add missing event_target:attacked_system. (FirePrince)
- Some minor (old) syntax replacements (+NOR/NAND/else_if/xxx_playable_country) for distar & marauder & war_in_heaven. (FirePrince)

## June 14th

- Replaced one of Risa's fixes in on_actions to make it cleaner and more mod-friendly. (FirePrince)
- Fixed some merge bugs. (FirePrince)
- Fix not ending L-Gate event chain (FirePrince)
- Fix L-Cluster outcome randomizing (global bug on game start) (FirePrince)

## June 3rd

- Fixed a colony event that got broken somewhere (Thanks Keukotis)
- The Emperor won't kneel before an awakened empire.
- Small AI improvements.
- Prevent imperial legion counter being decremented multiple times when slain - Tsundere Saph (Definitely a Hat)
- Removed some on_action changes to be more compatible with mods that alter leader generation

## April 29th

- Increased job weight of unemployed pops on the same strata. (Dr. Seldon)
- Resort complex capital upgrade only needs 10 pops (to reflect similar changes in 3.0.3)

### Patch bugs fixed by Paradox

- Necrophage Purge Fix
- AI Lithoid Tree of Life not budgeting for colonies
- Dragon armor is now in the autoupgrade path.
- Perdition Beam and Titan Lance now are energy weapons.
- Starbase power insufficient.
- Massive performance boost for L-Cluster generation
- Homicidals don't get to adopt Bubbles

### Paradox fixes superceded by patch

- First colony event now checks for relic and tomb worlds (keeping my fix because I wrote descriptions for them).

## April 23rd

- Galactic Custodian/Emperor can explore and use wormholes of community members, even with closed borders.
- Bugfix for bombardment error. (FireGolem)

## April 17th

- FORCED_SPECIES_GROWTH_PENALTY set to .1, the same as the penalty to growth rate. The way pop growth currently works, .5 is simply too punishing in the late game.
- From Beyond ship has fleet stance set to evasive.

## April 16th

Beta for 3.0.1

### Patched Bugs Stellaris Devs fixed in 3.0.1

#### They finally fixed the Ringworld crash bug

- Shard dragon naming bug.
- Starting pop ethea distribution is no longer random.
- New leviathans now have proper POIs
- Gave the Ketlings and Prikkiki-Ti bureaucratic buildings
- Some any_ship scopes were changed to any_fleet (some we missed, even, but they stll missed others)
- Fix for the Enigmatic Fortress chain
- A crazy number of contact-related bugs.
- Clash of the Titans achievement (Because)
- Fixed one of the Limbo empires refusing to be destroyed, but not the other.
- Fix for neutron sweep availability
- Helpful drones no longer clobber deposits
- Mass Extinction Through the Ages MP chain fixed
- Queen breeding fix
- The Galaxy knows when the Gray Goo crisis is over now
- AI defense station economy
- Partial Totalitarian faction fix
- Syncretics more likely to default to normal slavery
- Crystal Manufactory fixes
- Species modding ui fix

### Some other bugs I noticed got fixed

- You can now pacify the amoebas if you recruit Bubbles (something I fixed in my own personal mod, but wasn't sure if it would be appropriate).
- Gave the Ketlings and Prikkiki-Ti adjectives (but they still don't get an origin)
- A certain meme star has been removed.

### New issues revealed

- The has_owner planet pre_trigger is only sometimes functional, if ever. Am not certain if any pre_triggers actually function.

## April 2nd

- Fix Feral overload event flag (colony_event); interrupts with any other colony event chain (Tannhäuser Cake)

## April 1st

- Allow the Awoken to be destroyed (FireGolem)
- Enable boosting nominated planet during relocation.
- Bugfixes from my own mistakes.

## March 28th

- Fix Assimilation Rights bug (FireGolem)
- Fix Mass Extinction Event Chain for multiplayer (FireGolem)
- Improved whole L-Cluster event init (FireGolem)

## February 27th

- Attempted to fix bug where tree of life AI would try to save up the Lithoid Tree of Life budget, meaning they never save enough food to colonize.
- Pop self-modification actually does something with six pops. (thanks manuCR)
- Self-modified pops won't set themselves as non-modified.
- Fixed the Grand Dragon's shipclass names.
- Fixed 'Fire from Stars' (FireGolem)
- Hopefully a simple fix for the Fortress chain (FireGolem)
- Fix for fanatic purifier necrophage abductions (GhostWraith)
- Thanks Anaphysik for these and following fixes - and apologies for getting them out so late:
- Fixed the end of the Fall of the Shallarians chain.
- Fixed literally unplayable Atomic Clock timing.
- Fixed a number of literally unplayable typos.
- Fixed a small bug in the Oracle chain.
- Fixed a bug in the Monolith anomaly resolution.
- 'Ammonia Biosphere' triggers primitive life rather than remnants.
- Fixed localisation error in Cunning Flora followup
- Can no longer avoid consequences of asteroid strikes with specific numbers of pops.
- Fixed error in technician job weighting.
- Fix for colonial remains in origin_events_3. This will break down on extremely dense starts, but should be fine for 99% of games (and still won't do worse, usually).

## November 13th

- Fix patch bug in Eat or be Eaten
- Prevent Enigmatic Cache from scanning primitives or other planetary enclaves in owned territory.
- Paradox fixed switching to the machine side in the uprising. Forwarded their fix.
- Paradox finally fixed some purge oddities. When 1.8.1 is out I'll change my purge script to hit only much larger worlds.
- Other 1.8.1 Cross-compatible fixes.

## November 4th

- Forwarded the one 1.8.1 change to the events so far.
- resolutions: Can't ban the galactic slave trade before the galactic market is founded.
- resolutions: Added significant AI logic to one of the industrial chain.
- solar_system_initializers/megacorp: Prevented Chor's Compass from spawning in bottlenecks. Seems to confuse the AI.
- species_rights/05_species_controls: Fixed some Necrophage AI issues with the patch AI.
- events/ancient_relics_events_3: Fixed bug in Rubricator chain.

### November 1st

- countries: Increased AI constructors to 6 (Glavius)
- diplomatic_actions: Turned off notifications for some relations. (Starnet)
- Re-disabled action.31 as Paradox appears to have fixed FE contact.
- Fixed patch bug in last Zroni site.

### October 31st

- Updated to 2.8
- All changes are now recorded in AllChanges.md
- A few new fixes, plus fixes of fixes.
- Some aspects of bombardment and purging will need to wait for 2.8.1 for a proper fix. Will attempt to forward changes to make it compatible with both as before.

#### Addressed by Paradox in 2.8

- Paradox fixed a number of scope issues.
- Paradox fixed the AI being able to snipe most of the Zroni chain sites (but not the Baol, oddly).
- Paradox fixed machine unit pops getting iced by Pox bombardment.
- Paradox fixed the alien box event.
- Paradox made Unsupervised Settlement blocker no longer create robot pops.
- Paradox let droids be colonists again.

### Sep 11st

- Fix location target Event: Dyson Sphere (utopia.30)
- Add location to graygoo.181
- Fix location rubricator_dragon_fleet (ancrel.40180)
- Fix pre_triggers id = colony.1533
- Merge needless (and conflicting?) double "allow" again (graygoo.503)
- Use widely pre_triggers (performance)
- remove widely unnecessary logical operators

### Sep 6st

- Merge needless and conflicting double "allow" (graygoo.503)
  \*\* minor scope/syntax fixes on Distars events.
- L-Cluster quest only for reasonable empires (not bother fully incapable countries)
- Scope fix: any_ship to any_owned_ship.
- Some more scope fixes.

### August 31st

- Only change from release in this upload is tweaking the purging script to be less aggressive for resource extraction, per feedback.
