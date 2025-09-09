This is far from finished.

# AI Espionage

* Rogue Servitors are more willing to exfiltrate pops from slavers and purgers.

# Anomalies

## General

* There a handful of anomalies that clobber strategic resources which Paradox didn't get to or missed.
* There are a handful of max_once_global entries that remain after Paradox took a number of them in 3.11. Some of these are more involved so may be understandable, but I should go over them and see. 

## Individual

* AST_DEBRIS_FIELD_1_CAT - Corrected the conditions for this to make the maximum amount of sense.
* GAS_CLOUDY_CAT - Don't let the Tollok Rong kill themselves.
* INTEMPORAL_ORB_CAT - Scope check (blew up my error log anyway)
* DISTAR_WRECK_CAT - Make sure we have fleet access for the event conditions.
* DISTAR_DIAMOND_CAT - Needs to only avoid energy-producing stars or no one is ever going to get this.
* DISTAR_WARFORM_CAT - Previously I removed the max_once_global for this. Instead, I have blocked empires with ai_outlawed from getting it in multiplayer to give the friendly bugger a chance.
* AIANOM_MININGDEPO_CAT - Don't let them put mineral deposits on stars, don't put them on colonizable worlds.
* AIANOM_RESEARCHDEPO_CAT - Not for colonizable worlds.
* AIANOM_LUMP_CAT - Make energy/minerals more likely than science.

# AI Budget

* Scramble for some extra exotic gasses if a hospital/entertainment upgrade is possible and a planet is low on amenities.

# Archaeological Sites

* Zroni chain: Require the intro flag.
* Baol chain: Require the intro flag.
* Cosmic Storms chains likewise require their respective intro flags.

# Armies

* Allow additional titanic life armies if the country has multiple planets with the completed project.

# Artifact Actions

* The AI is more likely to use minor artifacts for military purposes if they neighbor a crisis. (Paradox took everything from my mod in this file except this. I wonder.)

# Ascension Perks

* A number of AI tweaks to tradition and path choices. 
* Most commonly, it makes them less likely to make it their 3rd pick unless they have a quick-access origin, but much more common beginning with their 5th pick.
* Others are to better reflect AI ethics, personality, or position.

# Attitudes

* Make the AI somewhat more aggressive if they hate or fear you.

# Bombardment Stances

* Back during the days when the AI could only choose selective, we got creative with forcing them to intermediate or armageddon.
* Forcing the AI to intermediate remains, unless locked to selective.
* Machine terminators will always use armageddon bombardment.
* Fixed a bug handling raiding stance in systems where the bombarder has a claim.

# Buildings

Currently, nearly everything here is for the AI. 

## General

* Added `is_occupied = no` to all `allow = {}` blocks. This keeps the AI from bricking its plans when a planet gets invaded.

### Capital Buildings

* Give 100 less enforcers to the AI unless they need it.
* Give resort worlds some default enforcers.

### Pop Assembly

* Pop number no longer matters, so this can finally die.

### Resource Buildings

* AI will limit building of hydroponics farms to situations where food may be scarce, and dismantle them when it is plentiful.

### Manufacturing Buildings

* AI will not build a ministry of production / production center without a significant manufacturing presence.
* Don't let the AI lock itself if it doesn't have sufficient minor artifacts.

* Temporary Balance Fix: Reduce Ancient Refinery output by a factor of 5, and have an empire limit of 1.

### Research Buildings

* Similarly for institute / supercomputer.
* Don't let the AI lock itself if it doesn't have sufficient minor artifacts.

### Amenity Buildings

* A bug in the hyper entertainment forum specification won't allow the building to be destroyed unless the owner has the dystopian society civic, rather than being one of a number of possible destruction triggers.
* Loosened the restrictions on AI medical buildings.
* Advanced logic for handling AI housing.

### Army Buildings

* The AI will keep shield generators around in chokepoint systems.

### Fallen Empire Buildings

* Prevent autodestruction of some special buildings.

# Bypasses

* Prevent a bunch of NPC country types from using Gateways, LGates, or Hyper Relays. Space critters, caravaneers, etc. (Performance and aesthetics.)
* The emperor is also free to yeet fleets where he/she/it/whatever wills.

# Colony Automation Crisis Exceptions

* Added support for thrall worlds facing high crime

# Colony Types

* Machine empires with a habitat as their capital won't lose the capital designation to a bureau.
* Correct duplicated entry for industrial ecumenopolis designation.

# Component Templates

* General: Replace currently useless `radius` parameter with `system_wide = yes/no` appropriately.
* The AI will make use of dark matter components if it has access to the technology and resources.

### Auxiliary 

* The AI will use boosters if it is falling behind in generator tech.
* Energy weapons can benefit from fire control.

### Role Computers

* Treat precognitive as an upgrade to sapient computers. (This used to work, check for 4.0 and perhaps give 'ai' a bypass if they have the tech.)
* AI without the path will not use it if they somehow get it.

### Shields

* Treat psionic shields as an upgrade to dark matter shields.
* AI with the tradition tree will use psionic shields

# Country Types

* Let angry nomads actually destroy things.
* Ruined marauders cannot enforce borders.
* Don't let merc enclaves pollute observation mode.

# Decisions

* Hide some decisions if they are not applicable.
* Hard-block the AI from some decisions they cannot currently handle.
* Allow thrall worlds to be made with established rural districts.
* Don't delete the dimensional portal when making an ecumenopolis.
* Better logic for dealing with crime.
* AI shouldn't be so eager to remove potentially beneficial planet modifiers.
* Some more logic for strip mining decision. 

# Defines

## Game Affecting

* MILITARY_POWER_HEALTH_WEIGHT = 0.4 # For the player. The AI already knows health is overvalued in power calculations.

* SYSTEM_BOTTLENECK_RADIUS = 3 # Largely to help the AI make better decisions. It does impact galaxy generation slightly.

* HABITABILITY_OPPOSITE_PLANET = 0.50 # Events trigger below 50% habitability. This is largely graphical and UX and probably should be in unchecked defines.

* HABITABILITY_AUTO_MIGRATION = 0.50 # Ditto.

## Mod support

* STARBASE_CAPACITY_MAX = 9999

## Vassalization Adjustments

I modify this partially in diplomatic actions, but some values are better tweaked here. 

The idea is to make vassalization to be about the same difficulty if the target empire is under serious threat, but more difficult otherwise.

* VASSALIZATION_ACCEPTANCE_OTHER_ATTITUDE = -100
* VASSALIZATION_ACCEPTANCE_ATTITUDE_ATTACK = -9999
* VASSALIZATION_ACCEPTANCE_ATTITUDE_COEXIST = -50
* VASSALIZATION_ACCEPTANCE_ATTITUDE_ALLIANCE = 0

* VASSALIZATION_ACCEPTANCE_OTHER_THREAT_MULT = 0.5
* VASSALIZATION_ACCEPTANCE_OTHER_THREAT_MAX = 100
* VASSALIZATION_ACCEPTANCE_DISTANCE_MULT = -1	

## AI Adjustments

* AI_LEAVE_POPS_WHEN_RESETTLING = 1000 # Avoid growth penalties, and don't lock out of upgrades.
* AI_DESIGNATION_COOLDOWN = 360 # Let AI change designations yearly.
* AI_MIN_HABITABILITY_TO_COLONIZE = 0.5 # Events happen below 50% hability, and it is now no longer a great idea to colonize everything you find.

* TERRAFORMING_RESOURCE_THRESHOLD_FACTOR = 1.5	# Slightly larger energy guarantee.

* STARBASE_COLONY_SCORE = 9 # Failing evaluating the map, we have only these numbers to play with.
* STARBASE_HABITABLE_PLANET_SCORE = 9
* STARBASE_CHOKEPOINT_SCORE = 6
* STARBASE_MEGASTRUCTURE_SCORE = 2
* STARBASE_BYPASS_SCORE = 4

* AI_SLAVE_MARKET_SELL_LIMIT = 1200 # AI seems much less likely to sell, so increasing the limit for those that do.
* SLAVE_BUY_UNEMPLOYMENT_THRESHOLD = 100
* SLAVE_BUY_HABITABILITY_THRESHOLD = 0.5

* MIN_WANTED_SCIENTISTS = 3 # To prioritize exploration, especially early
* MIN_FLEET_FOR_OPERATIONS = 900
* MIN_FLEET_THREAT_TO_CRISIS = 40000

* TRANSPORT_RETREAT_HEALTH_THRESHOLD = 0.8	# Should be a bit more cowardly.

* SHIP_FLEET_POWER_UPGRADE_THRESHOLD = 1.2 # Even this might be too high.

* DEEPSPACE_CITADEL_INNER_RADIUS_PERCENTAGE = 0.5 # You want these close enough to your starbase to support it.

# Deposits

* Some AI weight adjustments, particularly for starting deposits. Prioritize releasing pops, other things can wait until later.

# Diplomatic Actions

* Reduce message spam. This is of course based on my judgement, but I have had no complaints.
* Much more detailed acceptance logic for subjugation and release. 

# Districts

### City

* TODO: Need some logic for district caps.
* district_resort is a district, not a district set.

### Arcology

* Some scope fixes, most made irrelevant in 4.0.

# Economic Categories

This doesn't do everything it did in previous versions just yet. I am moving to a build system. For now, if you need all of the modifiers, use jasonpepe's mod.

## AI

* Allow budgeting for most edicts.

## Bugs

* Orbital rings shouldn't count as outposts. 

# Edicts

* Require mega engineering for living metal megaconstruction so it is not wasted.

# Game Rules

* Limit the number of subspecies AI can make.
* Hide consecrated worlds from the colonization planner.
* More extensive rules to restrict systems for the AI.
* Allow resettlement of self modified pops if they are slaves.
* Allow pops to be sold if they are being purged.
* Do not allow the AI to sell pops being assimilated. (The AI suddenly thinks they are useless.)
* Restrict relay network connections to allies/subjects/overlords. (Performance)
* Disallow trading rulers or legendary leaders.
* Infinity Root Leader should not count towards cap.

# Global Ship Designs

* Edit the Shroud Cruiser and Salvaged Cruiser so they can merge with a fleet and not have upgrade options.

# Governments

* A couple of empty origins for the Ketlings and Prikki-Ti.
* Match exclusions between environmentalist and environmental architects civics.

# Inline Scripts

* Edit outraged faction entry so you are green if you haven't angered them.
* Edit pleased faction entry so the faction is actually pleased with you.
* Set a 'default' species sound for modded species. Should probably make something, for now set to Fungoid.
* General missing context switch checks.
* Fix for Chimeral Consciousness empire size reduction not being applied to Gestalts.

# Megastructures

## Bugs

* Give proper refund for dismantling megastructures.
* You can't build a ringworld out of an astral rift. Don't remove them, either.
* Don't allow building infinite orbital rings on the same planet.

## AI

* Somewhat restrict where the AI may build hyper relays. (Have more work to do on this.)
* AI won't build more habitats if one is already uncolonized.
* AI won't build habitat/orbital structures over planets that could potentially become colonies (and thus build orbital rings instead).
* Don't limit void dweller habitat count.
* AI won't build quantum catapults as they do not know how to use them.

# Opinion Modifiers

* Certain empires will be slower to forgive necrophaging. (Paradox specifically did not include this, may move to balance.)
* Start empires off a bit less friendly to each other. (This is to reduce how quickly pacts and alliances form.)
* Selective Kinship shouldn't matter to fallen empires. 

# Personalities

* Generify trait checks. E.g. if something is looking for Strong (like Metalheads) also allow Very Strong.
* Toggle Infiltrator and Dominator for evangelising zealots.
* Block most megacorps from metalheads, except syndicates.

# Planet Classes

* Ecumenopoli get `@cap_planet_buildings` for building slots. (For mods that change the cap.) (No longer relevant as of 4.0)

# Policies

Some of these are AI weight tweaks or mod support. Things I consider to be bona-fide bugs are:

* Conquerors and Subjugators shouldn't get a higher weight for liberation wars.
* Liberation wars should have a higher weight if the appropriate galactic resolutions have been passed.
* Logic for selective bombardment is suspect.
* Pacifist xenophobes should be willing to leave primitives alone.
* Inward perfection empires should prefer to do so.
* There are a couple places where `is_xenophile` should be `values_others`.

# Pop Categories

* Scope checks.

# Pop Faction Types

* For the sake of UI cleanliness, it should always be possible to get green in everything, so .001 favor is given for not causing offense on some lines. It should be yellow if they are simply 'not pleased', giving flat 0 favor rather than a fractional penalty.
* Add AI weights to promoting/suppressing factions, particularly for empires whose civics are dependent.

### Imperialists

* Heavy leader preference for commanders.
* If you subjugate the last free empire, they should still be happy for you.
* Only demand there be rivals if someone is actually available to rival.
* Strong diplo stance will always be visible unless stance is cooperative.
* Military applications visible if you have any minor artifacts.

### Isolationists

* Check for citizenship rights for attraction instead, like the scriptor suggests.
* Leaders prefer officials, disfavor scientists.

### Progressives

* Check for citizenship rights for attraction instead, like the scriptor suggests.

### Prosperity

* Check for citizenship rights for attraction instead, like the scriptor suggests.
* Mercantile stance preference is always visible unless belligerent/supremacist.
* Peaceful applications visible if you have any minor artifacts.

### Supremacists

* Leader preference for officials.
* Alright with hegemony federations if the leader.
* Check for defensive pacts for domination demand.
* Proclaim superiority visible if you have any minor artifacts.
* Strong diplo stance always visible if not cooperative.
* Purifier demand gives 40 points if fulfilled, what they lose from not having access to other demands, and -10 if not. Potential is if they have the civic at all.

### Technologists

* Heavy leader preference for scientists.
* Non-materialist robots may pick something else.
* Tech leap no longer excepts subjects or successor khanates.
* Count scholariums for research treaties.
* Don't count fallen empires for synth envy.
* Secret knowledge always visible if curators have been contacted.
* Technologist arcana always visible if you have any minor artifacts.
* Cooperative demand always visible.

### Totalitarians

* Check for both citizenship and owner species.
* Leadership favors officials, disfavors scientists. Heavily favors rulers and heirs.
* Fix check for stratification demand.
* Indentured assets counts too.
* Galactic emperorship counts for extranational authority.

### Traditionalists

* Disfavor scientists, favor officials.
* Consecrate worlds demand will be visible until it is no longer possible to take.
* Religious finding always visible as long as you have minor artifacts.
* Left in the hate for research federations.

### Xenoists

* Leader favors scientists, disfavors commanders.
* No primitive invasion visible as long as primitives are visible.
* Celebrate diversity visible as long as you have any minor artifacts.
* Cooperative demand is always visible.

# Pop Jobs

* Fixed a bug where crisis purge may fail.
* Made slaves more likely to be entertainers.
* Don't let drones take normal gas extractor or mote harvester jobs.
* Applied some weights for ethics and robots to initiates.
* Economic category fix for some fallen empire jobs.

# Random Names

* Remove some duplicated names.
* Replace `High_` with `"High "`

# Resolutions

* My AI changes here are numerous, and it would be futile to list them all. The AI is far more consistent, somewhat strategic, and generally won't do things like vote itself into censure.

# Script Values

* Set minimum rebellion power to 100 for calculations. Originally to stop a divide by zero, but now it remains to ensure the resulting weight for the event isn't in the septillions.
* Get the AI up to 8 constructors. This is as many as the AI can handle.
* Decades since game start should actually count decades rather than centuries.
* Some better bounds around science ships.
* Base Cosmic Storm size off of star count rather than hardcoded size strings. (Mod Support)
* Voidworm spawning based on star count instead of size strings. (Mod Support)
* Starlit Citadel, same reason.

# Scripted Effects

* Contingency and Marauders should have up to 8 constructors.
* Make sure they are set to evasive stance.
* Fix scope for cybernetic species creation.
* Normalization for species -> leader traits.
* Make sure to about the LCluster project if they were beaten to it.
* Set citizenship appropriately after assimilation.
* Don't stick Baol colonies on holy worlds. (Paradox specifically didn't include this one.)
* Paradox missed a sealed system check when absorbing some of my fixes.
* Star cracker shouldn't break astral scars.
* Subject check for joining war on declared crisis.
* Compute star count directly and use that rather than getting a setup string.
* Only the top two tiers of market nominees are considered. The equation is otherwise the same as vanilla.
* Give Xenophobic FE slaves a root species they can be reverted to.
* Check to make sure opinion modifications during the War in Heaven only involve the Sleepers (as opposed to e.g. an angry Spiritualist FE after someone blew up a holy world.)
* Don't put tech blocks on primitive-inspired tech options.
* Give Marauder generals the mercenary warrior trait.
* Give the Diadochi starting starbase the fleet academy and crew quarters buildings. (Paradox specifically didn't include this.)
* Use star count for the imperial fiefdom origin.
* Refugee fix. I'm not sure if 100% is actually what is desired, but that seemed to be what the intent was?

# Scripted Triggers

* Some fixes for shackled robot detection.
* Make sure military leaders can think.
* Displacement purging still counts as allowing purging. (May not be the best fix for what this addresses.)
* Fix is_oligarchy trigger.
* Third Baol project will first try to find a habitable world inside borders, and won't target a holy world.
* Add additional modifiers to the districts_good_* triggers.
* Astral Scars are not valid for the scholarium sensors or research candidates.
* Add Fallen Hive to FE Cluster trigger

# Scripted Variables

* Add missing inline script variable, @auth_cyber_dictatorial_collectivist_tech

# Section Templates

* Fix fire from star for a number of critters and crisises.
* Fix two guns sharing same locator on ancient stations.
* Convince the AI to use a better spread of sections depending on its preferred weapon.

# Ship Behaviors

* Set Return to Formation range to 600, so mixed fleets and carriers are not hamstrung.

# Ship Sizes

* Policy to turn off Juggernaut shipyards (they'll still repair/upgrade).
* Restrict juggernauts from building titans (way too slow) or colonizers.

* Fix Marauder Range bonus
* Give the Marauder battleship some base armor.

# Solar System Initializers

* Removed scope from some Distant Stars checks that don't need it and sometimes get confused.
* Don't let the Caravaneers set up in a bottleneck system. (Alternate idea: Require it?)
* Check star count rather than galaxy_size string for Overlord initializers.
* Don't let the Chosen spawn off of any crisis_spawn_exclude system.
* Block anomalies on Fevor's moon; they can block the reward you get from the chain.

# Special Projects

## Projects moved to Country Scope

Starting projects in country scope was one of Risa's original fixes. I have received notice of these being buggy, however I am unable to replicate the problems people have. Saves would be appreciated.

* Handle Synth Inflitration project in country scope, otherwise the player loses it if they lose their capital.
* Handle first contact space critter projects in country scope.
* Handle The Prince in country scope.
* Handle the Masters' Writings projects in country scope.
* Handle the Cryopod in country scope.
* Handle Mystery Cream in country scope
* Handle Limb in country scope.
* Handle Colossus project in country scope.
* Handle messenger pod projects in country scope.
* Handle ldragon taming in country scope.
* Handle Enigmatic Cache project in country scope.
* Handle impossible organism in country scope.

## Other Fixes

* Fix the Crystal Manufactory project.
* Don't let the Limbo fellows drop themselves on a holy world.
* Uncomment Snek project if someone wants to unleash this again.
* Don't count erudites and similar intelligent traits as being 'unintelligent' for the Enigmatic Cache.

# Species Rights

## Citizenship Types

* Only assimilate one species at a time.
* Permit purging robots so long as AI does not have full rights.
* Some AI logic about which species an empire might be less inclined to keep.
* Fix for machine purging.
* Psionic assimilation requires thinking pops.

## Colonization Control

* Necrophage AI will not restrict colonization.

## Living Standards

* Lathe/Displacement/Neutering is more permissive about allowed living standards, but they are blocked from 'none.'
* Rather than a weight reduction, AI will only flout the galactic community about subsistence living standards if they are rather unfriendly.
* Psionic assimilation requires thinking pops.

## Population Controls

* Necrophages will do no such thing.
* Slaver AI will be more inclined to enact them on less desireable slaves.

## Slavery Types

* A lot of logic for how the AI determines who to put into indentured servitude.

# Starbase Buildings

* Really powerful AI may build a second titan yard.
* Split titan yard and colossus yard across multiple starbases.
* Shroud Beacon is less attractive if an enclave is already in the AI's territory.
* Don't allow a disruption field inside a pulsar system where shields are stripped anyway.
* Aborting transit hub construction aborts transit hub construction, and not the communications jammer.
* Ditto with the command center.

# Starbase Types

* A lot of AI logic. A lot more is needed.

# Strategic Resources

* Allow mods to increase the Influence cap.

# Technology

* AI won't research quantum catapults.
* AI won't research hyper relays before Hyperdrive III

* Don't block terraforming techs from empires with less than one planet. Can screw over primitives, or empires that have lost their capital.
* Similarly for the bureaucracy techs, base if off of pop count rather than planet count.

# Terraform

* Remove terraforming candidate from newly minted hive worlds.

# Traits

* Shroud Age requires psionic, and won't be added to already-immortal chosen ones.
* Don't make erudite an opposite of enigmatic intelligence. (Hey hope you don't mind we screw you out of your ascension...)
* Allow envoys to get their species traits.
* Matched a few missing opposite trait entries.





