# All Changes

As of the 2.8 release this should include all substantive changes. I may have missed some. 

## Exploits

* Purging rework. Past a certain population, pops being purged have a 'half life'. Currently some issues with this but should work them out alright in 2.8.1. As of the 3.0.1 patch this threshold is over 20 pops.

* megastructures/00_ring_world: Don't allow construction in AI hubs. A better solution would be to move the hubs to binary / trinary systems.

* events/caravaneer_events: Prevent multiple Galatrons.

## Functionality

* Grant living metal tech option if a deposit is in territory.

* Grant a 2-year grace period for moving pop strata at game start - "Political Restructuring". This is mostly for certain bugs involving ruler-adjusting civics (Exalted Priesthood, etc.) but can be taken advantage of. May no longer be necessary.

* game_rules: Can sell pops while purging them.

* events/on_action_events: Automatically close borders at end of truce if appropriate for policy.

* species_rights/00_citizenship_types: Allow purging of robots without full ai rights.
* species_rights/00_citizenship_types: Machine empires can purge to their heart's content as long as they aren't rogue servitors.
* species_rights/05_species_controls: Machine and Synthetic pops can be allowed to migrate.
* species_rights/05_species_controls: Can always control population for slaves and robots in servitude.

## Bugfixes (General)

* projects (many): Move many special projects to country scope rather than location scope.

* anomalies (some): rewrite trigger limits into the anomalies themselves, so they don't fail silently. Paradox has fixed most of these, but a few remain.
* anomalies (some): Use uninhabitable_regular_planet scripted trigger rather than convoluted attempts to get to the same point that either miss something or aren't restrictive enough.

* anomalies/01_anomaly_categories: Fixed Projecting Moon anomaly.
* anomalies/01_anomaly_categories: Fix Voyager anomalies (blocker in wrong location).
* anomalies/95_anomaly_categories_distant_stars: Corrupt data (planetary hologram) won't disappear a dig site.
* anomalies/99_anomaly_categories_ai: Don't add mining deposits to stars.

* archaeological_site_types/arc_sites_1: Don't allow the AI to snipe the last Zroni site. (They fixed all the others but *not this one*!?)
* archaeological_site_types/arc_sites_2: Don't allow the AI to snipe Baol dig sites. 

* colony_types: Prevent habitat capitals from getting silly colony types set.

* component_templates/00_utilities_reactors: Split juggernaut power out of starbase power and gave starbase power a boost.
* component_templates/00_weapons_extra_large: Perdition beam counts as an energy weapon.
* component_templates/00_utilities: Armor upgrades to dragon armor if known.
* component_templates/00_utilities_shields: Provide upgrade path to precognitive interface.
* component_templates/00_utilities_shields: Provide upgrade path to psi shields.

* countries/00_country_types: Ruined marauders don't enforce borders.

* decisions/02_special_decisions: When making an ecumenopolis, clear natural planet modifiers and bring the dimensional portal with.

* planet_modifiers: Added missing triggers for alpine and savannah worlds.

* pop_faction_types/00_totalitarian: Totalitarians won't get angered by presapients or assimilating pops.

* pop_jobs/06_event_jobs: Make underground trade worker trigger on xenophobe rather than xenophile.
* pop_jobs/06_event_jobs: Fix feral overload jobs.

* resolutions: Can't ban the galactic slave trade before the galactic market is founded.

* scripted_effects/00_scripted_effects: Awakened FE not part of the War in Heaven don't give LNAP relation penalties.
* scripted_effects/00_scripted_effects: Cleaned up leader trait modifying script and made sure it all applied properly in a compatible fashion.

* solar_system_initializers/megacorp: Prevented Chor's Compass from spawning in bottlenecks. Seems to confuse the AI.

* ship_sizes/00_ship_sizes: Sponsored colony ships are treated as colony ships.
* ship_sizes/00_ship_sizes: Removed conflicting acceleration entry for transport ships.
* ship_sizes/00_starbases: Treat ion cannons as ships like others.
* ship_sizes/marauder_ships: Moved ship_weapon_range_mult to a ship_modifier block for marauder stations.

* special_projects/00_projects: Add abort trigger if another manages to research a shielded world first. (Less necessary now, but no reason to remove.)
* special_projects/00_projects_5: Don't try to colonize holy worlds.

## Bugfixes (Events)

* events (many): Moved is_ai = no from pre_triggers to owner triggers, as the pre_trigger does not function.
* events (many): Correct newly spawned leaders to make sure they have appropriate psionic/etc. traits per their species.
* events (many): Fixes for generated 'normal' leader traits.
* events (many): Prevent various critters from spawning as hostile when they shouldn't.

* events/ancient_relics_events_3: Some scope fixes for Rubricator chain.
* events/anomaly_events_3: Fixes for projecting moon event.
* events/anomaly_events_5: Can't recruit AI admiral if AI is outlawed.
* events/anomaly_events_7: Limbolians won't try to colonize a Holy World.
* events/apocalypse_events: Don't bother non-default countries about lgates.
* events/apocalypse_events: Actually have Neutron Sweep show up for spiritualists only if they can't get the Godray, as the dev comment clearly intends.
* events/colony_events_2: Prevent drone chain from clobbering deposits.
* events/colony_events_2: Moved invalid has_owner pretrigger to from trigger in Pheremone Frenzy chain.
* events/colony_events_4: Prevent the odd factory from spawning on relic worlds (where it can get clobbered) or ecumenopoli (where it isn't that odd).
* events/country_events: Surveying a relic world counts for habitable worrlds chain.
* events/country_events: Require species portrait to be human for the Hyacinth chain (the flag gets saved if you make countries off of the UNE/COM, requiring portrait mitigtes this a bit).
* events/crime_events: Telepaths and slave enforcers also fight crime.
* events/crime_events: Unified clearing deviancy and crime flags (can help some bugs).
* events/crisis_events_1: Make sure early warning systems are accurate.
* events/crisis_events_1: Don't spawn Sentinels out of the sealed system or L-Cluster.
* events/crisis_events_1: Fallback for de-infesting infested worlds (may need more work).
* events/crisis_events_2: Fix extradimensionals hostile to their own portals.
* events/crisis_events_2: Extradimensionals won't spawn in each others' territory.
* events/crisis_events_2: Extradimensionals won't open their portal inside other extradimensional territory.
* events/crisis_events_3: Prevent systems from spawning off of the sealed system.
* events/distant_stars_events: Can't cheat out of distar.32
* events/distant_stars_events: Assorted brainslug fixes.
* events/distant_stars_events: Give Ketlings nd Prikki starting bureaucracy buildings.
* events/distant_stars_events: Ketlings properly create mining stations within borders.
* events/distant_stars_events: Ketling contact fixes.
* events/distant_stars_events: Assorted fixes for the Star Crazy chain.
* events/distant_stars_events: Handle Curator POI for Elderly Tiyanki and Scavenger Bot.
* events/fallen_empire_tasks_events: Don't give useless bio tech to robots.
* events/fallen_machine_empire_events: Machine FE won't try to make you colonize holy worlds unless you have a head.
* events/gray_goo_events: Fix end of threat for GC resolution.
* events/horizonsignal_events: Rogue admiral will be of primary species.
* events/horizonsignal_events: Remove districts from the Waiting World.
* events/horizonsignal_events: Reroll changed planets at end of chain.
* events/leader_events_1: Don't lock out Gestalts from leader traits they can get.
* events/leviathans_events: Add Curator POI for Elderly Tiyanki and Scavenger Bot.
* events/leviathans_events: Fixed Curator Leviathan-hunting ('Tell us something we don't know'). May bug out for wraiths.
* events/nomad_events: Nomads won't colonize Holy Worlds.
* events/observation_events: Prevent ringworld nuking.
* events/on_action_events: New contact modifiers go both ways.
* events/on_action_events: Ensure rebels start with ethea, and enough alloys for a spaceport.
* events/on_action_events: Don't remove robot armies just because AI is outlawed.
* events/on_action_events: Armageddon/Pox bombardment fix. (May no longer be working - investigate)
* events/pop_events: Self-modified pops always based off of root species.
* events/pop_events: Self-modified pops won't attack other self-modified pops.
* events/pop_events: Self-modified pops lose slow breeders if they gain rapid breeders.
* events/pop_events: Self-modified pops lose weak if they gain strong.
* events/primitive_events: Switch home_planet scopes to capital_scope
* events/primitive_events: Primitives no longer require an observation outpost to into space.
* events/primitive_events: Primitives get some consumer goods and alloys when they into space.
* events/synthetic_dawn_events: Properly give the option to play the machine uprising.
* events/utopia_megastructure_events: Some minor fixes for the Dyson chain.
* events/utopia_megastructure_events: Prevent think tank chain from triggering on restored think tank (since it can't actually upgrade).
* events/utopia_on_action_events: Tons of leader fixes.
* events/utopia_shroud_events: You won't receive psionic tech events if you already have the option.
* events/utopia_shroud_events: Fix for ruler/heir not being psychic for some reason.
* events/utopia_shroud_events: Zro crystal applies equally to all options.
* events/utopia_shroud_events: Make sure chosen rulers get their leader trait too.
* events/war_in_heaven_events: Restrict the War in Heaven to its participants. For example, if you crack a holy world just after one awakes and picks a rival.

## Subjectives (General)

* anomalies (some): remove max_once_global from anomalies where it isn't necessary.

* anomalies/00_anomaly_categories: Terraforming candidate anomaly are max_once, but sprinkle some through worldgen.
* anomalies/01_anomaly_categories: Make it so other human starts (primitives, nuked) can support the Pioneer anomaly.
* anomalies/01_anomaly_categories: Don't block anomaly.175 just because you got anomaly.170 first.
* anomalies/01_anomaly_categories: Fake gas giant won't fool the Baldarak (compatibility)
* anomalies/95_anomaly_categories_distant_stars: Require target empire to have access to the system for Supply Wreckage.
* anomalies/95_anomaly_categories_distant_stars: Allow Diamond Star to trigger in binary or trinary systems.

* global_ship_designs/event_ship_designs_anomalies: Made the salvage cruiser a proper fleet ship. Still can't be upgraded.

* scripted_effects/00_scripted_effects: Xenophobe FE servants are based off of someone.
* scripted_effects/00_scripted_effects: Points of Interest for Distant Stars guardians.

* special_projects/00_projects: Added contact weights for homicidals and rogue servitors.
* special_projects/00_projects_2: Drastically simplified the crystal manufactury project. Some things were no longer possible.

* traits/admiral_traits: Stuff for re-adding Unstable Code Base.
* traits/syntheticdawn_leader_traits: Make Unstable Code Base an admiral rather than ruler trait.

## Subjectives (Events)

* events (many): Destroying a habitat clears the object's has_megastructure flag.
* events (many): Reduced the maximum spawn distance of systems to 20.

* events/anomaly_events_2: Localized flags so it can occur for multiple empires. 
* events/distant_stars_events: Supply Wreckage chain targets an empire with access to the system.
* events/fallen_empire_events: Allow multiple FEs to make demands at once.
* events/fallen_machine_empire_events: Machine FE may make some requests of other machine empies.
* events/game_start_events: Don't spawn wormholes inside FE territory.
* events/gray_goo_events: Cleaned up Gray army diplomacy.
* events/leader_events_1: Incorporate Unstable Code Base as appropriate.
* events/observation_events: Move rogue agent to relation flags.
* events/observation_events: Rework flag checking issues with observation_outpost_owner scope. (May no longer be necessary)
* events/primitive_events: Stone/Bronze/Iron ages take longer to leave.
* events/primitive_events: Some logic for when a new space nation ascends when the system is already owned. Not properly working yet.

## Balance 

* crisis: Spawn up to 6 constructors rather than 4/5.

* anomalies (many): Prevent most anomalies from clobbering resources.

* anomalies/01_anomaly_categories: Add another condition to make finding Below Zro a bit more likely.

* buildings/00_capital_buildings: Allow Imperious Architecture to add to non-standard capitals.
* buildings/02_government_buildings: Reenable 3rd tier organic bureaucracy building. (Explicitely stated as being intentionally removed at 2.7's release. Still leaving in for now.)
* buildings/03_unity_buildings: Sacred Nexus adds 8 jobs like other tier 3 buildings.

* colony_types: Support third tier bureaucratic building. (Will probably stay as mod support)

* countries/00_country_types: Nomads destroy starbases when mad.

* diplomatic_actions: Migration treaties require more effort. Fanatic Xenophobes and Fanatic Authoritarians won't permit such treaties.

* on_actions: Far more likely to get Zroni or Baol in appropriate systems.

* ship_sizes/marauder_ships: Added armor to marauder ships. Leftover from Risa's fixes but doesn't really hurt things.

* species_rights/04_purge_types: 'Normal purging' is drastically sped up. Part of overall purge fix.

* traits/species_traits: Remove "Erudite" from enigmatic intelligence opposites.

* map/setup_scenarios: Increased min_bridges to 3 for small/medium/large/huge galaxies, to help prevent box-in.

* events/ancient_relics_events_1: Prevent gestalts from getting Zroni chain.
* events/anomaly_events_2: Prevent Baldarak chain from clobbering resources or showing up somewhere you can't reach.
* events/anomaly_events_5: Reenable the Roombas.
* events/communications_spread: Prevent homicidals and inward perfection empires from spreading communications. Others can still spread knowledge about them, of course.
* events/communications_spread: Xenophobia/philia slows down/speeds up communications spread.
* events/distant_stars_events: Homicidals don't get to make exceptions.
* events/distant_stars_events: Enigmatic Engineering will block Ketlings or Prikki from copying techs.
* events/distant_stars_events: Add terraforming candidate to Locusts world.
* events/distant_stars_events: Enigmatic Cache isn't blocked just because the player is at war.
* events/distant_stars_events: Prevent Invisible Death from sending you somewhere impossible.
* events/distant_stars_events: Prevent wormhole generator from dropping a wormhole on someone's starting system or into a Fallen Empire.
* events/marauder_events: Create extra constructors, set them to evasive.
* events/nomad_events: Nomads will actually cause damage when angered.
* events/observation_events: Smuggler trade adds acquired tech modifier if failed.
* events/story_events: Surveyor won't clobber resources.
* events/synthetic_dawn_events: Machine uprising only on worlds with machine pops.
* events/synthetic_dawn_events: Organic empire receives full claims on machine territory.

## Performance

* bypasses: Disallow space monsters, guardians (dragon), and caravaneers from using gateways or lgates.

* events (many): any_ship -> any_owned_ship. 

* events/colony_events: Move has_ground_combat trigger to pretriggers.
* events/colony_events_3: Some triggers moved to pretriggers
* events/country_events: Call country.51 from country.52 rather than have a mtth 1 day event.
* events/crime_events: Move has_owner to pre_triggers.
* events/distant_stars_events: Prevent distar.231 and distar.1082 from getting called constantly with no need.
* events/distant_stars_events: Keep previous fix for Star Crazy so it doesn't need to spawn a new system.

## Mod Support

* crisis: Support modded governments.

* economic_categories: Add a full set of modifiers. This generates a mess in the log but I've verified it does not impact performance.

* events/pirate_events: Support modded governments. Paradox pushed half of a fix for this, oddly...

* map/galaxy: Ring galaxy radius reduced from 1.1 to 1.0. Prevents box-out in some modded setup scenarios.

## AI Improvements

* crisis: Set constructor stances to evasive.

* defines: Changed AI weight to support 5 science ships.
* defines: Reduced acceptance of migration pacts.
* defines: Set bottleneck threshold to 3.
* defines: Adjusted starbase preferences.
* defines: Don't colonize planets or buy slaves for less than half habitability.
* defines: Lower unemployed threshold for buying slaves to 1.
* defines: Increase fleet power AI prefers to use.

* anomalies/00_anomaly_categories: AI can can get Terraforming Candidate and Living Metal anomalies.
* anomalies/95_anomaly_categories_distant_stars: Allow the AI to get the Mercury anomaly.

* ascenscion_perks: Made the AI a bit more intelligent about choosing perks.

* bombardment_stances: Attempt to force the AI to take more aggressive bombardment stances.

* buildings/03_resource_buildings: Add some AI restrictions to hydroponics farm construction.
* buildings/03_unity_buildings: Add some AI restrictions to organic sanctuary construction.

* component_templates/00_utilities_roles: AI won't use sapient tech if AI is outlawed (heh).

* countries/00_country_types: Default science ships min and max 5 each.
* countries/00_country_types: Default constructor ships min and max 6 each.
* countries/00_country_types: Default max titans at 5.
* countries/00_country_types: Awakened FEs go for 5 constructors and up to 5 titans.

* decisions/02_special_decisions: Block the AI from making fancy world types it doesn't understand how to use.

* deposits/01_blocker_deposits: Prioritize blockers that generate pops, deprioritize most others.

* game_rules: Add Distant Stars guardians and crystal/amoeba/drone home systems to systems dormant fallen empires won't mess with.
* game_rules: Stop AI from selling pops it is assimilating.
* game_rules: Stop AI from selling its syncretic population.

* megastructures/habitats: AI not allowed to have multiple uncolonized habitats at once.

* policies: Infiltrator AI won't invade primitives.
* policies: Add AI weights to food policies.

* resolutions: Added more logic to many resolutions.
* resolutions: In particular the War in Heaven resolutions will get backed by their respective factions and opposed by the others.

* scripted_triggers/00_scripted_triggers_ai: Made the evaluation of unemployment and such significantly more robust.

* species_rights/00_citizenship_types: Added some AI weights for slavery/purging intelligence.
* species_rights/01_living_standards: AI will not break itself maintaining subsistance standards.
* species_rights/03_slavery_types: AI will not make very strong syncretics into battle thralls. Too much of a hit to early economy.
* species_rights/05_species_controls: AI tweaks for certain preferences.

* traits/species_traits_basic_characteristics: Syncretic proles have "trait_talented" "trait_quick_learners", and "trait_decadent" as opposites. This is largely for the AI (so it doesn't give them useless traits) but may also benefit newer players.

* events/fallen_empire_tasks_events: Let the AI get its scientist abducted since it knows how to replace them now.
* events/marauder_events: Awakened Marauders contact AI empires.
* events/on_action_events: Allow AI to contact and research space critters.
* events/story_events: Added AI weights to various space critter research options.
* events/war_in_heaven_events: Rivals might not join the LNAP, depending on ethea.
* events/war_in_heaven_events: Increase AI peace duration in case the war doesn't trigger right away.

## Cosmetics

* diplomatic_actions: Turned off notifications for some relations. (Starnet)

* events (several): Fixed missing or inappropriate go-to locations.

* events/distant_stars_events: Added flavor origins for Ketlings and Prikki
* events/progress_events: Add unique flavor text for when Gaia, Relic, etc. worlds are your first colony. 
* events/progress_events: More things trigger the discovery of Remnants. Relic worlds, etc.

* interface: diplomacy_status_window: Removed empty background statement from smoothListboxType
* interface: current_traits_container: Increased max_slots_horizontal from 6 to 9. This prevents traits in the species modification interface from overflowing in vanilla, as well as less aggressive extra trait mods.

* random_names/base: Removed some duplicate names.
* random_names/base: Removed the underscore from "High_" - "High Humans" not "High_Humans"