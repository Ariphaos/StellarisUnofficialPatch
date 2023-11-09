# ChangeLog

## November 9th

- Implemented some fixes for modded galaxy sizes. The game now calculates this based on the number of existing systems, not by setup string.
- Implemented a policy to disable military ship production in juggernauts. Ship production is disabled by default.
- Some fleet strength checks for AI and curator evaluation of your fleet now account for game difficulty.
- Living Sea will not survive on machine or hive worlds.
- Alien pets and titanic life will not survive on machine worlds.
- Fixed a trigger for a Cascading Catastrophe anomaly option.
- Pulled in some more AI improvements from StarNet.

- I have begun a much more comprehensive AI rebuild.

## October 26th

- Fixed a bug (my fault) that blocked sythetic traits from ascended machine empires.

## October 20th

- 3.9.3 update

## September 26th

3.9.2 Update

- Paradox has finally removed "Mean Time To Happen" from Stellaris, which clobbers one of my projects and a few fixes. 

## September 12th

3.9 Update

Patch Bugs Paradox fixed in 3.9:

- Some ghost pop bugs were fixed.
- Prevent various Become the Crisis shenanigans with Unaligned League
- Synth exposed will no longer hit Legendary or Renowned leaders
- LGate tech is dangerous
- Corrected a bunch of improper breach logic in resolutions.
- Erronious FROZ_BASE_CAT blocker removed (Risa bug!)
- Destroyed habitats no longer leave ghost megastructures behind.
- Bubbles no longer hates you from the start.

Patch changes

- Moved more balancey-things over to balance patch. 
- The only thing that should remain is vassalization acceptance. All else is either a bug on my end or is actually there for a reason. Feel free to submit bug reports accordingly. 
- Vassalization acceptance should get moved once the balance patch is released.

New bugfixes

- Fixed broken destroy trigger for hyper entertainment forum
- Disallow buildings while planet is occupied (severe AI planning bug)
- Should now block Enigmatic Fortress event spam if you don't choose to start the chain. (Had already blocked it before)
- Non-AE factions should also avoid the Great Wound system
- Default empires will be more skittish about really dangerous systems
- Added some more flexible logic to some fleet calculation strengths
- Fixed economic category for some FE buildings
- Pruned a few more spammy notifications (rivalry declarations, etc)
- Fixed more scope errors
- Applied 'nice faction' to some more appropriate ships.
- Applied new Habitat destruction effect to other cases where habitat is destroyed

## August 26th

Imported fixes from Vanilla Fixes that I didn't already fix:

- Lots of missing scope checks (what else is new)
- A few scope resolution errors
- Don't get mad at yourself for killing your own pops
- Handful of localization fixes
- Basically everything not in Vanilla Fixes fixed that I haven't fixed already that isn't in gfx
- gfx skipped because it's significantly harder to track that folder.

## August 5th

A couple of in-patch bugs:

- Fixed gestalts selling to private collectors.
- Fixed machine empires not being able to hire the caretaker

- Fixed some more events targeting inappropriate leaders (gestalt nodes, etc.)
- Fixed some more missing scope errors.

## June 20th

- Reverted gene tailoring requirements for AI as it caused a bug and was no longer necessary.
- Made sure AI void dwellers can get their habitat tech.

## June 16th

Paradox Fixes:

- I'm keeping my fix for the Great Khan's traits. Slightly stronger but also a bit more diverse and flavorful. 
- Also keeping my fix for Paragon ruler's forced authority change. cooldown = no so you aren't forced to live with removed civics.


Patch bugfix: 

- Stop enclaves from producing useless constructor or science ships

- Subjects won't ask to join 'you' if you didn't break away from your overlord (Nider001)
- Restrict number of species most AI will generate.
- Fix waste reprocessing center economy allocation (17blue17)
- Fix Doomslayer event (FirePrince)
- Fix Doorway divination (FirePrince)

## May 30th

- Paradox fixed Chosen being able to get covenent traits even if the wrong class by dropping the class checks entirely. 
- Paradox finally checks if a leader is psionic before making them a Chosen candidate.
- Paradox fixed new anomaly scoping.

- I've begun moving more balance-y changes over to a new balance mod. 
- Laying some groundwork for some more performance improvements.
- Fixed a potential crash bug if some other mod killed a pop on on_pop_purged.

- You can now merge AH4B into a fleet (finally looking at it, this is clearly a bug).
- In the event a Chosen somehow regains the psionic trait, they shouldn't get eaten by their patron.
- Prevent legendary leaders and origin from getting eaten similarly.
- Shroud manifestations shouldn't mutate Chosen. And homicidal empires should be less understanding.
- Fixed the Think Tank events for 3.8 (they should skip your ruler, legendary leaders have other priorities, etc.)

## May 14th

- Made a mistake with trying to block Baol from getting generated in black hole systems, instead forcing it to them. Apologies to those affected.

- Chosen don't get 'healthcare expert'
- Upped some Marauder regen as they didn't handle getting whittled down well.
- Fixed puddle technician drones (Melor Seltic)
- Enigmatic Cache should now eventually finally leave.

## May 13th

- Imperial/Dictatorial rulers can get the shroud age modifier.
- Shroud age removed on becoming Chosen (it just takes up space)
- Shroud age applies to all mortal psionic leaders, rather than checking species.
- Upscaling the lessenger actually works.
- Fanatic xenophobe AI won't try to make market nominations.
- Fixed a rare bug with wormholes where 'root' somehow fails
- Failed divination situations will actually end properly.
- Galactic Emperor can use community catapults.
- Removed the ability to colonize consecrated worlds. (Lets you remove it from the planner).
- (Hopefully) fixed enigmatic ascension not properly changing your dominant species.
- Fixed an error from jaunting traveler due to the dummy country having no name.
- Allow chosen ones to get the covenant trait even if they are the wrong class (probably are ruler or angling for it anyhow).
- The Khan now has traits as an admiral.

## May 11th

- Patch issue: Reduced minimum-wanted scientists from 4 to 2 (vanilla default is still 1).
- Restored original can_leader_get_normal_trait rule as Paradox fixed the issue.

- Fixed fallen empire gift events.
- Materialist FE won't demand your ruler or paragon/legendary scientists.
- Made Zroni try to first spawn from your borders.
- Remove inappropriate civics on paragon origin switching to imperial.
- AI blocked from building habitats on any world potentially capable of supporting a ring (terraformable, etc).
- Started a project to get the AI to build hyper relays in a sensible, restrained fashion.
- AI is somewhat delayed from gatting habitats, hyper relays, and gene tailoring (unless hivemind)
- Machines only get one chance to rebel against a given preftl.

## May 9th

- Paradox fixed a number of leader trait issues by removing class distinctions.

- Can't get both psionic and chosen on a ruler with Caravaneer boxes.
- Prevent <spoiler> from becoming Chosen, for the same reason.
- Make it so <spoiler> can't die a normal death from attempting to become Chosen. If there are going to be bugs they should at least be showy.
- Pruned some cases where immortal leaders can be killed.
- Some scope fixes.
- Made an English version of anomaly.144.desc. Fixed the description ids for the chain.
- Egalitarian councilors no longer promote authoritarian ethics.
- Block death events when handing over a scientist to the materialist FE.
- End the Manifesti chain after crackdown.
- Don't spam toast on shroud age.
- Fixed some breach resolutions.
- Removed old opinion-based code for resolutions.


## May 4th

- Fix AI triggering a divide by zero error.

## March 29th

- Paradox fixed the multi-Galatron bug.
- Paradox fixed the class 4 singularity building.

- Only the top two ranks of market nominees compete against each other.
- Insight techs no longer have 'prerequisites'.
- Made non-corporate/despoiler/etc. ai a bit less eager for mercenary resolutions after the first, and matched proposals to repeals.
- Allow you to avoid making peace with mercenary enclaves.
- Allow other living standards for displacement purging.
- Take care of Fear of the Dark secret fealty wonkiness.
- Fix uplifting description triggers in wrong scope. (Fireprince)

## March 21st

- Paradox fixed the low opinion boosting for accepting a protectorate request (30 -> 150, I only went to 100)

- Paradox's fixes to preftls nuking themselves only apply to those primitives where outposts aren't build. Thus I've kept my fix though made it a bit less extreme.
- Abandoned Terraforming Equipment won't trigger on Sea of Consciousness

## March 18th

- Presapients should no longer trigger 'What Separates Us'
- Fixed displacement-only purge policy
- Fixed one of the Locus events triggering on captured planets.
- Allow inward perfectionists to have a policy of non-interference (And encourage it for AI)
- Removed unity cap on precursor discovery (9,999 unity is not what it used to be)
- Fear of the Dark and similar primitives that start in your home system will not nuke themselves.
- Made some adjustments to the Missing Scientist chain - it needs more work with the new system.
- Calmed down preftl nuking frequency.
- Hopefully don't wipe out FE buildings when invading.
- Can now build class 4 singularities from artifact reconstruction.

## March 14th

Fixes now done by Paradox:

- Most Ghost pop issues should now be resolved in vanilla.
- Major cleanup of the First Contact event. 
- Scrapped all observation fixes.

- Factions are not outraged by getting the resolutions they want.
- AI get their anomaly events again.



## March 10th

- Fixed invalid scope for faction check (SirBlackAxe)
- Restored station_uninhabitable_category (HyperLordBender)
- Fixed some error spamming from a couple events. (koras321)
- Fixed erroneous sector scope for starbase building. (koras321)


## December 6th

- 3.6.1 Release
- Added surveillance_supercomputer_system_spawned flag for people/mods who want a way to safely guarantee the system spawns.

Paradox Fixes:

- Horizon signal functions on shattered ring origin.

## November

- 3.6 Release

Paradox fixes:

- AI preference grants alpine habitability
- Erudite and enigmatic intelligence affect all science-producing jobs on a planet
- Fixed first contact opinion weights
- Fixed opinions for destroying caravaneer home
- A handful of SirBlackAxe's faction logic fixes

## November 3rd

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
