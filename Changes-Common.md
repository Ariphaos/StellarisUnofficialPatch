This is far from finished.

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

# Archaeological Sites

* Zroni chain: Require the intro flag.
* Baol chain: Require the intro flag.

# Artifact Actions

* The AI is more likely to use minor artifacts for military purposes if they neighbor a crisis. (Paradox took everything from my mod in this file except this. I wonder.)

# Ascension Perks

* Tradition check block checks against a `@cap_tradition_categories` variable, which can be easily overridden by tradition cap mods.
* A number of AI tweaks to tradition and path choices. 
* One common theme is the AI is unlikely to pick an ascension path before their 3rd pick, but starting with their 5th they are heavily incentivized to do so.

# Attitudes

* Make the AI somewhat more aggressive.

# Bombardment Stances

* Back during the days when the AI could only choose selective we got creative with forcing them to intermediate or armageddon.
* Forcing the AI to intermediate remains, unless locked to selective.
* Machine terminators will always use armageddon bombardment.
* Fixed a bug handling raiding stance in systems where the bombarder has a claim.

# Buildings

Currently, nearly everything here is for the AI. 

## General

* Added `is_occupied = no` to all `allow = {}` blocks. This keeps the AI from bricking its plans when a planet gets invaded.

### Capital Buildings

* Give 1 less enforcer to the AI unless they need it.
* Give resort worlds some default enforcers.

### Pop Assembly

* AI will dismantle pop assembly buildings of their population exceeds a defined variable.

### Resource Buildings

* AI will limit building of hydroponics farms to situations where food may be scarce, and dismantle them when it is plentiful.

### Manufacturing Buildings

* AI will not build a ministry of production / production center without a significant manufacturing presence.

### Research Buildings

* Similarly for institute / supercomputer.

### Amenity Buildings

* A bug in the hyper entertainment forum specification won't allow the building to be destroyed unless the owner has the dystopian society civic, rather than being one of a number of possible destruction triggers.
* Advanced logic for handling AI housing.

### Army Buildings

* The AI will keep shield generators around in chokepoint systems.

### Event Buildings

* Fix category for waste reprocessing center

### Fallen Empire Buildings

* Fix category for class 4 singularity and nourishment center.
* Prevent buildable FE buildings from being autodestroyed. For example if you capture one from a non-FE.

### Branch Office Buildings

* Some AI weight editing.

# Bypasses

* Prevent a bunch of NPC country types from using Gateways, LGates, or Hyper Relays (Performance)
* Wormholes can use normal empire access rules just fine. (Performance, solves an issue with custodian / galactic emperor access.)

# Colony Automation Exceptions

* Some support for thrall worlds, though I need to dig into this more.

# Colony Types

* Correct duplicated entry for industrial ecumenopolis designation.

# Component Templates

* General: Replace currently useless `radius` parameter with `system_wide = yes/no` appropriately.
* The AI will make use of dark matter components if it has access to the technology and resources.

### Auxiliary 

* The AI will use boosters if it is falling behind in generator tech.
* Energy weapons can benefit from fire control.

### Role Computers

* Treat precognitive as an upgrade to sapient computers. (This used to work.)
* AI without the path will not use it if they somehow get it.

### Shields

* Treat psionic shields as an upgrade to dark matter shields.
* AI without the path will not use it.

### Cloud Critter Weapon

* AI will prioritize these if they have them in the event of an Unbidden invasion.

# Country Types

* Let angry nomads actually destroy things.
* Ruined marauders cannot enforce borders.

# Decisions

* Hide some decisions if they are not applicable.
* Hard-block the AI from some decisions they cannot currently handle.
* Allow thrall worlds to be made with established rural districts.
* Don't delete the dimensional portal when making an ecumenopolis.
* Better logic for dealing with crime.
* Some more logic for strip mining decision. (Paradox took most of this for 3.11)

# Defines

* STARBASE_CAPACITY_MAX = 9999 # For mod support.
* MILITARY_POWER_HEALTH_WEIGHT = 0.4 # For the player, the AI already knows this is bupkiss.

All remaining define entries help the AI.

* SYSTEM_BOTTLENECK_RADIUS = 3 # Help the AI make better decisions

* HABITABILITY_OPPOSITE_PLANET = 0.50 # Events trigger below 50% habitability. This is largely graphical and UX and probably should be in unchecked defines.
* HABITABILITY_AUTO_MIGRATION = 0.50 # Ditto.
* AI_MIN_HABITABILITY_TO_COLONIZE = 0.5 # ""
* SLAVE_BUY_HABITABILITY_THRESHOLD = 0.5 ""

* STARBASE_COLONY_SCORE = 9 # Failing evaluating the map, we have only these numbers to play with.
* STARBASE_HABITABLE_PLANET_SCORE = 9
* STARBASE_CHOKEPOINT_SCORE = 6
* STARBASE_MEGASTRUCTURE_SCORE = 2
* STARBASE_BYPASS_SCORE = 4

* SLAVE_BUY_UNEMPLOYMENT_THRESHOLD = 1
* MIN_WANTED_SCIENTISTS = 3
* MIN_FLEET_FOR_OPERATIONS = 900
* MIN_FLEET_THREAT_TO_CRISIS = 40000

# Deposits

* Some AI weight adjustments, particularly for starting deposits. Prioritize releasing pops and other things can wait until later.

# Diplomatic Actions

* Reduce message spam. This is of course based on my judgement, but I have had no complaints.
* Much more detailed acceptance logic for subjugation and release. 

# Districts

### City

* Scope checking
* Caps the amount of city districts the AI will build on a world. May need some mod awareness.

### Arcology

* Fixed some inappropriately placed scope checks.

# Economic Modifiers

* Essentially create as many likely-to-be-used modifiers as possible. I have verified this does not impact performance, and it allows mods to use many new modifiers without creating conflicting edits of this file.
* My edits here are strictly vanilla. If a mod says it requires Jasonpepe's mod instead, it probably does.

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

# Global Ship Designs

* Edit the Shroud Cruiser and Salvaged Cruiser so they can merge with a fleet and not have upgrade options.

# Governments

* A couple of empty origins for the Ketlings and Prikki-Ti.

# Inline Scripts

* Edit outraged faction entry so you are green if you haven't angered them.
* Edit pleased faction entry so the faction is actually pleased with you.
* Set a 'default' species sound for modded species. Should probably make something, for now set to Fungoid.

# Megastructures

* You can't build a ringworld out of an astral rift.
* Somewhat restrict where the AI may build hyper relays. (Have more work to do on this.)
* AI won't build more habitats if one is already uncolonized.
* AI won't build habitat/orbital structures over planets that could potentially become colonies (and thus build orbital rings instead).
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

* Ecumenopoli get `@cap_planet_buildings` for building slots. (For mods that change the cap.)

# Policies

Some of these are weight tweaks. Things I consider to be bona-fide bugs are:

* Conquerors and Subjugators shouldn't get a higher weight for liberation wars.
* Liberation wars should have a higher weight if the appropriate galactic resolutions have been passed.
* Logic for selective bombardment is suspect.
* Pacifist xenophobes should be willing to leave primitives alone.
* Inward perfection empires should prefer to do so.
* There are a couple places where `is_xenophile` should be `values_others`.

# Pop Faction Types

* For the sake of UI cleanliness, it should always be possible to get green in everything, so .001 favor is given for not causing offense on some line. It should be yellow if they are simply 'not pleased', giving flat 0 favor rather than a penalty.
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

* In general `not = { has_job =` ... checks with factors > 1 are removed to discourage bouncing.
* Some scope checks were added for some weird errors.
* Add/correct resource categories for FE jobs.
* Add some weights for Feral Overload event jobs.
* Give mortal initiates some ethic weights.
* Decadent pops are less interested in the soldier life.
* Made priests want to keep their job a bit more, and ethics-weight them.

# Random Names

* Remove some duplicated names.
* Replace `High_` with `"High "`

# Resolutions

* My AI changes here are numerous. The AI is far more consistent, somewhat strategic, and generally won't do things like vote itself into censure.

# Script Values

* Set minimum rebellion power to 100 for calculations.
* Get the AI up to 8 constructors.
* Country type check on science ships for safety.

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
* Only the top two tiers of market nominees are considered.
* Give Xenophobic FE slaves a root species they can be reverted to.
* Check to make sure opinion modifications during the War in Heaven only involve the Sleepers (as opposed to e.g. an angry Spiritualist FE after someone blew up a holy world.)
* Don't put tech blocks on primitive-inspired tech options.
* Give Marauder generals the mercenary warrior trait.
* Give the Diadochi starting starbase the fleet academy and crew quarters buildings. (Paradox specifically didn't include this.)