
I will endeavor to keep this updated. However, it is exceedingly prone to bit rot, especially when files get refactored. More eyes are welcome.

# General Changes

These aren't necessarily all documented in the individual file entries.

### Bugfixes

* Exclude astral scars from most planet selection events.
* Scope existence checks.
* spawn_habitat_cracker_effect replaces remove_planet for habitats.

### Code Structure

Generally these are done by contributors rather than myself, but I sometimes do this to make it more readable for myself.

* Commenting out unused structures.
* Prune duplicated checks.
* Replace some sequential or erroneous NOT entries with NOR
* Remove useless title/desc entries on events with hidden windows.

### Mod Support

* Replace triple-homicidal checks with singular is_homicidal check.
* Replace checking for both fallen and awakened fallen empires with is_fallen_empire
* Replace `_country { ... is_country_type = default` with _playable_country to support non-default playable empires (but modders should be warned this is a bad idea).

### Performance

* Replace checking for ships with checking for fleets.

### Sanity Enforcement / Legacy

Sometimes Paradox has fixed something or something should not normally occur. I leave these in either as an assurance against regressions and sometimes as a modding aid. They do not meaningfully impact performance.

* Check for trait existence before removing.
* Legendary Leaders specifically excluded from death events.
* Moving is_ai pretrigger to triggers.

# Fixes As Events

## Soldier Counting

These events track soldier counts for limited types - Azizians, Imperial Legion, and Titanic Life. They allow you to purchase new ones if one dies, and occasional recounts track things there is no current trigger for.

Additionally, the mod now supports titanic life being recruited from multiple planets, as was desired by the devs when they first wrote it but 'it was not possible with scripting' at the time.

# Individual File Changes

## advisor_events.txt

General fixes (Astral Scar exclusions). Not likely to happen, but some mod may add one or something.

## an4_events.txt

General fixes (Astral Scar exclusions)

## ancient_relics_arcsite_events_1.txt

### Bugfixes

* Gestalts don't get the Zroni chain.
* Try to make the Zroni dig chain a bit more reliable.

### Flavor

* Block Baol spawn from appearing on a holy world. 

### Mod Support

* Generate systems a bit closer, for denser galaxies.

## ancient_relics_arcsite_events_2.txt

### Bugfixes

* Homicidals don't get Zarqlan. (Balance? Seems out of order.)
* Make sure Wilderness empires have an option for the First League.

### Mod Support

* Add flag catch for Ultima Vigilis.

## anomaly_events_1.txt

### Bugfixes

* General scope checking fixes.
* Allow Xenophile empires to let their citizens be entranced by Eddic, Monolithic.
* Properly apply traits to the Exile.
* Make Projecting Moon make sense.
* Dimensional science ship starts stance as evasive.
* Start Limbo projects in country scope.
* Limbobots won't try to colonize a holy world.

## anomaly_events_2.txt

### Bugfixes

* Allow Salvaged ship to be merged into a fleet.
* Start The Prince in country scope.

## anomaly_events_3.txt

### Bugfixes

* Make sure Diamond in the Rough gets their traits.
* Start special projects in country scope.
* Don't let the rampaging general murder a councilor. Especially not your ruler.

### Restorations

* The planetary roombas may vroom again.

## anomaly_events_4.txt

### Bugfixes

* Fix Tollok Rong (Baldarak) for multiplayer.
* Prevent them from clobbering resources.
* Flipped Cascading Catastrophe check for unfriendlies so homicidals won't take. (Not certain what was intended here, so picked a middle ground.)

## anomaly_events_AI.txt

* (Paradox fixed as of 3.12) Revert the weird event ids so the AI actually gets something from surveying.

## apocalypse_events.txt

### Bugfixes

* Only default countries care about L-Gates.
* Start colossus project in country rather than capital scope.

## caravaneer_events.txt

### Bugfixes

* Block psionic traits and synthetics/machines from getting psionic from lootboxes.

## colony_events_1.txt

### Bugfixes

* Don't put abandoned terraforming equipment on the Living Sea.
* Asteroids have difficulty being aggressive. Make them hate the player directly. 
* Allow wasteland radiation and pacifist movement on armageddon nuked tomb worlds.
* The latter requires thinking pops.

## colony_events_2.txt

### Bugfixes

* General pretrigger fixes.
* Don't let relic/city worlds get the odd factory.
* "What separates us" should not target presapients.

## colony_events_3.txt

### AI

* Allow AI to recruit titanic life.

### Bugfixes

* Titanic life can now grant up to 3 troops per planet.
* Copy `original_owner` out of pretriggers.
* Move other things as pretriggers where needed.
* Corrupted Knight fix.
* Some further restrictions to Feral Overload to prevent issues.
* Don't let Negative Mass hit a ruler.
* Remove the Payback debris field from the B planet if it has it.

### Mod Support

* Let someone bring back Insidious Ophidians if they want.

## communications_spread.txt

### Bugfixes

* Having a starting event chain shouldn't block communications spread. (Why was that ever there?)
* Communications won't spread through homicidals or inwards perfection empires.
* Added more weights to communication spread rates.

## country_events_1.txt

### Bugfixes

* General fixes (scope checking)
* Relic worlds are habitable worlds too.
* Try not to drop the cultist fleet in someone else's territory.
* Sanity check for starting the Hyacinth chain, make sure you are 'human'.
* More robust star flag removal.

### Mod Support

* Make spawned systems closer for denser galaxies.

## crime_events.txt

### Bugfixes

* Count overseers as enforcers.
* Legendary/chosen block remains on the governor killing event in case the governor gets swapped out in that time.

## crisis_events_1.txt

### Bugfixes

* Accurately predict where the Swarm is going to strike.
* Set constructor stance to evasive.
* Switch to checking `crisis_spawn_exclude` for sentinel system. 
* Fallback to deinfest worlds if devastation doesn't trigger.
* Spawn AI control limit of constructors (8).

### Mod Support

* Support modded governments.
* Spawn Sentinel system closer to originating star.

## crisis_events_2.txt

### Bugfixes

* Give the Unbidden factions the constructors they can support (8).
* Don't spawn additional factions within Unbidden territory.
* Set constructor fleet stance to evasive.
* Don't redefine dimensional_portal and instead target portals individually. (Maybe somewhat legacy as this is from when I first unbroke this Crisis.)
* Don't try to redeclare `portal_holder_1`

### Mod Support

* Give default options for important events for mod-added governments.

### Sanity Enforcement

* Specify portal hostility.

## crisis_events_3.txt

### Bugfixes

* Don't allow synth replacement/assassination of rulers.
* Don't allow final AI/Cybrex systems to spawn off of `crisis_spawn_exclude` systems.
* Start infiltration project in country scope.
* Give them max usable constructors (8).

### Mod Support

* Reduce distance of generated systems.

## distant_stars_events_1.txt

### Bugfixes

* Don't let the player cheese delaying the rage event.
* Bubbles shouldn't deny its new friends the secrets of pacification just because they've already met amoebas.
* Big friendly warform belongs to the nice faction.
* Homicidals not exactly keen on attaching other thinking beings to their brainstems.
* Machines should lack the ability.
* Allow AH4B and Big Friendly Warform to join fleets.
* Ketlings can't live on shattered worlds.
* Workaround if creation of mining stations would fail for Ketlings.

### Features

* Allow multiple empires to get distar.231

### Performance

* The Enigmatic Cache will eventually leave the galaxy. (One less fleet, ship, and country is one less fleet, ship, and country.)

### Sanity Enforcement

* Switching  `owner = { is_same_value = ...` to `is_owned_by`

## distant_stars_events_2.txt

General Fixes (Astral Scar exclusion, ship checks to fleet checks, scope existence checks)

### Bugfixes

* With the performance enhancement for Star Crazy below, it can be made non-global.
* Don't let the Ketlings or Prikki copy tech from Enigmatic Engineering empires.
* Give the Prikki some tech.
* Start projects in country rather than location scope.
* A number of enigmatic cache fixes.
* Invisible Death won't spawn in systems owned by other empires. (Paradox specifically didn't incorporate this, leaving it for now because it can otherwise spawn in Marauder systems.)
* Prevent wormhole generator from connecting to problematic systems.
* Set starting ethos for our favorite murder lizards so they don't decide they love people.

### Flavor

* Give the Ketlings and Prikki an origin.
* Stranded Scientist no longer global.

### Performance

* No need to create a new star system for the Star Crazy chain, just add the energy to an existing energy-producing star. Can then be made non-global, accordingly.

### Sanity Enforcement

* Replace `this` with `event_target:ratling_pre_space_country` because I was hunting for why it sometimes failed.

## distant_stars_events_3.txt

### Bugfixes

* General fixes (scope checking, duplication)
* Liquidate clues from aborted L-Cluster project.
* Check if the L-Cluster is open before informing us if an AI is close. (Rare but can happen with odd timing.)
* Don't bother oddball country types with discovering gateways.

### Sanity enforcement

* is_discovered = no for spawned L-Cluster systems.

## envoy_events.txt

### Bugfix

* Re-add potentially cleared event target to .230 if it is missing. (From vFix, not sure of the necessity of this.) 

## faction_events.txt

General scope check fixes.

## fallen_empire_events.txt

### Bugfixes

* Allow more than one demand to take place at a time for a given fallen empire.
* Prevent chosen and paragon origin rulers from getting offed on losing a war.

## fallen_empire_tasks_events.txt

### Bugfixes

* FE won't give machine/synthetic empires 'selected lineages' as a reward.
* The Materialist FE can ask AI for scientists.
* Block them from asking for rulers or renowned/legendary leaders.
* Block death events for them as they aren't getting killed.

## fallen_machine_empire_events.txt

### Bugfixes

* Machine FE won't ask you to colonize holy worlds unless you are a head collector.
* A couple of tasks are opened up for machine empires.

## federations_election_events.txt

### Bugfix

* Removed doubled entry for mercenary warrior.

## federations_events_2.txt

### Bugfixes

* Make sure options for Shallash are always available.
* Dancing plague cannot spawn on relic worlds. (Leads to other issues.)

## first_contact_dlc_events.txt

### Mod Support

* Flag block to make sure Chosen only spawn once.

## first_contact_NPC_country_types_events.txt

### AI

* AI will be somewhat intelligent about choosing between hunt/study/pacify options, influenced by personality.

### Bugfixes

* Start projects in country rather than capital scope.

## galactic_features_events.txt

### AI

* Make it a bit smarter and more consistent about the Amoeba protection resolution.

### Bugfix

* General scope check for VLUUR
* Superlight event can no longer terraform nanite worlds into deserts.

### Mod Support

* Actually calculate the galaxy size and use that for Tiyanki spawning, rather than the setting string.

## game_start.txt

### Bugfixes

* Prevent wormholes from leading to Ultima Vigilis or into Fallen Empires.

### Flavor

* Let Amoebae fight Tiyanki.

### Mod Support

* Run trait checks on starting leaders.
* Move wormhole multiplier into a variable.

## grand_archive_events.txt

### Mod Support

* Support different galaxy sizes for Voidworm and Cutholoid spawning.

## gray_goo_events.txt

### Bugfixes

* Liquidate L-Cluster clues for possible stragglers.
* Spawn nanite worlds if population is reduced to zero before devastation reaches 100
* Remove, correct, and simplify duplicated allow triggers for Gray.
* Fixes for tamed nanites, scope checking and preventing multiple triggers.

### Flavor

* Give Dessanu a homeworld.

## horizonsignal_events.txt

### Bugfixes

* General fixes (scope checking, astral scar exclusions, pretriggers)
* Start special projects in country rather than capital scope.
* Ensure Syzygy commander is of same species.
* Destroy buildings/districts on temporal reversion.
* Don't reroll currently inhabited planets on embracing the worm.
* ...but do reroll the new black holes.

## leader_events_1.txt

### Bugfixes

* New admiral event properly adds traits from psionic/cybernetic/erudite/synthetic/etc. (TODO: Need to also add civic traits.)
* Adding nervous or unyielding properly checks for opposites and other levels.
* Don't block gestalt leaders from gaining Scout trait.

## leviathans_events_1.txt

### Bugfixes

* Move dragon incubation from capital to country scope.
* Fix for dragon vengeance mission scopes.
* Homicidals don't get to ask the Curators about their Collection.

### Feature

* Curators account for difficulty when suggesting if you can beat a leviathan.

## leviathans_events_2.txt

### Bugfixes

* Block enigmatic fortress event spam.
* Block hivers from triggering again.
* Don't let empires off the hook just because they weren't the ones to build on the hivers
* General scope fixes.

### Performance

* Move hiver mtth event to a yearly pulse event.

## machine_age_crisis_events.txt

### Mod Support

* Support non-standard galaxy sizes, for Cosmogenesis and the Queen.

## marauder_events.txt

### Bugfixes

* Fixed marauder mercenary vengeance.
* Raiders won't target occupied worlds. (Wierd things happen.)
* Khan generation fix. (Also fixed by Paradox. However, I liked my version better, so I kept it. It does make the Khan slightly stronger.)
* Give Marauders 8 constructors. (What the AI can handle.)
* More generous with army generation.
* Marauders account for difficulty when checking to build new fleets.
* Give marauder admirals the admiral subclass.
* General fixes (lots)

### Mod Support

* Flag fix if someone decides multiple khans is a good idea.

## megastructure_events_1.txt

### Bugfixes

* Think tank chain only triggers on newly built science megastructures. (Restored ones will 'work' but not actually be able to upgrade after killing your scientist.)
* Prevent legendary leaders and rulers from qualifying for the chain.
* Anti-aging cream project doesn't depend on capital.
* Megastructure built notifications scope to system rather than the structure in case an empire doesn't have intel.

## necroids_events_1.txt

### Bugfix

* Replicate conquest events for AI.

## nemesis_crisis_events.txt

### Mod Support

* Support nonstantard galaxy sizes.

## nemesis_espionage_events.txt

### Bugfix

* Make sure a living envoy is available before triggering events for them (VFix)

## nomad_events.txt

### Bugfixes

* Nomads won't try to colonize holy worlds.
* Nomads go after starbases instead.
* General scope checking fixes.

## observation_events.txt

### Bugfixes

* Don't let FotD primitives nuke themselves.
* Only let Rogue Scientist chain fire once. It can get quite annoying after happening a dozen times.
* Don't let the Fear of the Dark kill themselves in their terror.
* There are some further fixes here that I could do to tie the chain together.
* Properly clear event blocker flag in obervation.1202, and unlock the outpost.

### AI
* Added some AI personality tweaks for when they demand their savior back.

## on_action_events_1.txt

### Balance

* Xenophobes may not notice terror bombing if they like you or hate your enemies.

### Bugfixes

* AI is not excluded from benefits of primitive conquest.
* New contact is reciprocal.
* Prevent rebels from getting ethics twice. (Probably no longer necessary, costs nothing to leave it.)
* Alien pets and titanic life don't survive machine world terraforming.
* Don't kill robotic armies on only outlawing ai.
* Remmove all districts on bombing a planet into a tomb world.
* Patch fallback for if tomb world is not properly triggered for some reason.

### Feature

* If border policy is closed, auto-close borders at truce end.

## on_action_events_2.txt

### Bugfixes

* Correct invalid flag: pirate_relation -> scientist_pirate_relation

## origin_events_3.txt

### Bugfixes

* Flag added for relic origin remnant worlds at game start.

## origin_events_4.txt

### Bugfixes

* Declining healthcare should be a lot more persistent as it is supposed to be removed later on.
* Stage 3 clinic should also block the above event.

## origin_events_astral_planes.txt

### Bugfixes

* Spoilers should only be talking to the people with the origin, not everyone without it.

## origin_events_paragon.txt

### Bugfixes

* No cooldown for forced authority change.

## overlord_enclaves_events.txt

### Bugfix

* Make sure the leader exists before trying to fire them.
* Fix 'All Too Lucid' to only fire on original owner worlds.
* Allow Shroud Fragment to join fleets.
* Dimensional Portal divination shouldn't block itself.
* Shroud tunnels shouldn't affect Chosen.
* Homicidals don't just let mutated leaders live.
* Be sure to destroy the divination situation if a divination fails. 
* General fixes (Astral Scar checks)

### Feature

* It is possible to permanently reject a mercenary enclave's offer of peace.

### Flavor

* Mercenaries have different responses to homicidals and people who permanently reject tthem.

## paragon_events.txt

### Flavor

* Block mercenaries from getting funeral service.

### Safeguard

* Block multiple Beholder spawns.

## paragon_events_4.txt

General fixes (astral scar exclusion).

## pirate_events.txt

### Bugfixes

* Scope fixes so Bemat Thalassocracy may properly spawn.

### Mod Support

* Don't log extra errors when encountering a modded government.

## planet_destruction_events.txt

No longer relevant as of 4.0.

## pop_events.txt

This entire file has been nuked as of 4.0.

### Bugfixes

* 6 is not a magic peace number.
* Make sure violence only occurs between self-modified and non-self-modified pops.
* Don't allow traits to be added with their opposites.

## pre_ftl_awareness_events.txt

### Bugfixes

* Change solar_system scope in cloaked fleet arrival to from. This action seems to trigger before the fleet is actually in the system, thus the solar_system scope doesn't actually exist yet. 

## precursor_events.txt

### Balance

* Moved unity reward limit to a variable, so a balance patch or other mod can adjust if desired.

### Mod Support

* Reduce generated system distance. (Helps with denser galaxies.) TODO: This should probably instead start with no hyperlanes and generate two of them.

## progress_events.txt

### Flavor

* First Colony text for non-standard worlds (Gaia, Tomb, Relic, Ring, and modded). This 'fix' inspired the mod, and was my (Ariphaos') first change.

## story_events.txt

### AI

* Push AI to pick crystal armor option for crystal research result if they do not seem to have an easy shot at getting it.

### Bugfixes

* Fix invalid flag: pirate_relation -> scientist_pirate_relation
* Surveyor won't clobber existing resources.
* Fix for spiritualist crystal research description.

## synthetic_dawn_events.txt

### AI

* AI will most likely not pass up on patching out the coming rebellion.

### Bugfix

* Empires get claims on rebelling territory.
* Planets without robot pops won't revolt.

## utopia_on_action_events.txt

### Mod Support

* Only prevent erudite from being added to machine/mechanical pops.
* Don't try to make the chosen one covenent-chosen twice if it somehow comes up again.

## utopia_shroud_events.txt

### Bugfixes

* Shroud age should apply to all and only psionic leaders, but not for immortals. Disable notifications for it as you already know it is happening. Also removed on becoming Chosen.
* Better handling if the ruler is not psionic.
* Zro crystal applies to all options.
* Properly trigger chosen becoming ruler effect if the ruler doesn't have the imperial heir trait (for civic).
* Chosen and Legendary characters don't get eaten/devolved/become an hero.
* Replace outdated "order by = level" with has_skill trigger.
* The End of the Cycle won't convert Shattered Ring segments to shrouded worlds.
* The End of the Cycle will better handle bypasses.

### Hijinks

* Paragon origin rulers go big or go boom with Chosen one chances. (Killing the Paragon was not well-handled, so I figured something interesting should at least happen.)

### Mod Support

* Prevent oddities if something triggers multiple Chosen One events.

## war_in_heaven_events.txt

### AI

* Increase ai_no_wars variable to prevent AI from starting inappropriate wars.
* Become the Crisis AI will not join an Awakened Empire faction. (Paradox got one of these in 3.11 and skipped the other...) 
* AI may reject rivals' attempts to join the non-aligned league.

### Bugfixes

* Galactic Emperor now barred from joining an AE faction (Questionable? It seemed out of line what with all the other exceptions they got.)
* Don't remove the triggering AE from the War in Heaven until the end, to prevent subjects from being forced to continue the war.
* Prevent the War in Heaven from triggering on an AE that isn't actually part of the War in Heaven. (Spiritualists getting triggered early, for example.)