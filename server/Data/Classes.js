const classes = {
  classes: [
    {
      name: "Bard",
      description: "Bards are the most charismatic people in all the realms. Members of this class are masters of captivation and specialize in a variety of performance types, including singing, playing musical instruments, weaving tales, or telling jokes. Whether performing for an audience or speaking to an individual, bards thrive in social situations. Members of this profession bond and train at schools or guilds, but a current of egotism runs through those of the bardic persuasion. While they may be the most likely class to bring people together, a bard of ill temper can just as easily tear a party apart.",
      domains: "Grace & Codex",
      evasion: 10,
      hitPoints: 5,
      classItem: "A romance novel or a letter never opened",
      hopeftr: "Make a Scene: Spend 3 Hope to temporarily Distract a target within Close range, giving them a -2 penalty to their Difficulty",
      classftr: {
        name: "Rally",
        description: "Once per session, describe how you rally the party and give yourself and each of your allies a Rally Die. At level 1, your Rally Die is a d6. A PC can spend their Rally Die to roll it, adding the result to their action roll, reaction roll, damage roll, or to clear a number of Stress equal to the result. At the end of each session, clear all unspent Rally Dice. At level 5, your Rally Die increases to a d8.",
      },
      subclass: [
        {
          subclassName: "Troubadour",
          subclassDescription: "Play the Troubadour if you want to play music to bolster your allies.",
          spellcast: "presence",
          foundation: [
            {
              name: "Gifted Performer",
              description: "You can play three different types of songs, once each per long rest; describe how you perform for others to gain the listed benefit: • Relaxing Song: You and all allies within Close range clear a Hit Point. • Epic Song: Make a target within Close range temporarily Vulnerable. • Heartbreaking Song: You and all allies within Close range gain a Hope."
            }
          ],
          specialization: [
            {
              name: "Maestro",
              description: "Your rallying songs steel the courage of those who listen. When you give a Rally Die to an ally, they can gain a Hope or clear a Stress"
            }
          ],
          mastery: [{
            name: "Virtuoso",
            description: "You are among the greatest of your craft and your skill is boundless. You can perform each of your “Gifted Performer” feature’s songs twice per long rest"
          }
          ]
        },
        {
          subclassName: "Wordsmith",
          subclassDescription: "Play the Wordsmith if you want to use clever wordplay and captivate crowds.",
          spellcast: "Presence",
          foundation: [
            {
              name: "Rousing Speech",
              description: "Once per long rest, you can give a heartfelt, inspiring speech. All allies within Far range clear 2 Stress"
            },
            {
              name: "Heart of a Poet",
              description: "After you make an action roll to impress, persuade, or offend someone, you can spend a Hope to add a d4 to the roll."
            }
          ],
          specialization: [
            {
              name: "Eloquent",
              description: "Your moving words boost morale. Once per session, when you encourage an ally, you can do one of the following: • Allow them to find a mundane object or tool they need. • Help an Ally without spending Hope. • Give them an additional downtime move during their next rest"
            }
          ],
          mastery: [
            {
              name: "Epic Poetry.",
              description: "Your Rally Die increases to a d10. Additionally, when you Help an Ally, you can narrate the moment as if you were writing the tale of their heroism in a memoir. When you do, roll a d10 as your advantage die",
            }
          ]
        }
      ],
      background: [
        "Who from your community taught you to have such confidence in yourself?",
        "You were in love once. Who did you adore, and how did they hurt you?",
        "You’ve always looked up to another bard. Who are they, and why do you idolize them?"
      ],
      connections: [
        "What made you realize we were going to be such good friends?",
        "What do I do that annoys you?",
        "Why do you grab my hand at night?"
      ]
    },
    {
      name: "Druid",
      description: "Becoming a druid is more than an occupation; it’s a calling for those who wish to learn from and protect the magic of the wilderness. While one might underestimate a gentle druid who practices the often-quiet work of cultivating flora, druids who channel the untamed forces of nature are terrifying to behold. Druids cultivate their abilities in small groups, often connected by a specific ethos or locale, but some choose to work alone. Through years of study and dedication, druids can learn to transform into beasts and shape nature itself.",
      domains: "Sage & Arcana",
      evasion: 10,
      hitPoints: 6,
      classItem: "A small bag of rocks and bones or a strange pendant found in the dirt",
      hopeftr: "Evolution: Spend 3 Hope to transform into a Beastform without marking a Stress. When you do, choose one trait to raise by +1 until you drop out of that Beastform",
      classftr: [
        {
          name: "Beastform",
          description: "Mark a Stress to magically transform into a creature of your tier or lower from the Beastform list. You can drop out of this form at any time. While transformed, you can’t use weapons or cast spells from domain cards, but you can still use other features or abilities you have access to. Spells you cast before you transform stay active and last for their normal duration, and you can talk and communicate as normal. Additionally, you gain the Beastform’s features, add their Evasion bonus to your Evasion, and use the trait specified in their statistics for your attack. While you’re in a Beastform, your armor becomes part of your body and you mark Armor Slots as usual; when you drop out of a Beastform, those marked Armor Slots remain marked. If you mark your last Hit Point, you automatically drop out of this form."
        },
        {
          name: "Wildtouch",
          description: "You can perform harmless, subtle effects that involve nature—such as causing a flower to rapidly grow, summoning a slight gust of wind, or starting a campfire— at will."
        }
      ],
      subclass: [
        {
          subclassName: "Warden of the Elements",
          subclassDescription: "Play the Warden of the Elements if you want to embody the natural elements of the wild",
          spellcast: "Instinct",
          foundation: [
            {
              name: "Elemental Incarnation",
              description: "Mark a Stress to Channel one of the following elements until you take Severe damage or until your next rest: • Fire: When an adversary within Melee range deals damage to you, they take 1d10 magic damage. • Earth: Gain a bonus to your damage thresholds equal to your Proficiency. • Water: When you deal damage to an adversary within Melee range, all other adversaries within Very Close range must mark a Stress. • Air: You can hover, gaining advantage on Agility Rolls"
            }
          ],
          specialization: [
            {
              name: "Elemental Aura",
              description: "Once per rest while Channeling, you can assume an aura matching your element. The aura affects targets within Close range until your Channeling ends. • Fire: When an adversary marks 1 or more Hit Points, they must also mark a Stress. • Earth: Your allies gain a +1 bonus to Strength. • Water: When an adversary deals damage to you, you can mark a Stress to move them anywhere within Very Close range of where they are. • Air: When you or an ally takes damage from an attack beyond Melee range, reduce the damage by 1d8."
            }
          ],
          mastery: [
            {
              name: "Elemental Dominion",
              description: "ou further embody your element. While Channeling, you gain the following benefit: • Fire: You gain a +1 bonus to your Proficiency for attacks and spells that deal damage. • Earth: When you would mark Hit Points, roll a d6 per Hit Point marked. For each result of 6, reduce the number of Hit Points you mark by 1. • Water: When an attack against you succeeds, you can mark a Stress to make the attacker temporarily Vulnerable. • Air: You gain a +1 bonus to your Evasion and can fly.",
            }
          ]
        },
        {
          subclassName: "Warden of Renewal",
          subclassDescription: "Play the Warden of Renewal if you want to use powerful magic to heal your party",
          spellcast: "Instinct",
          foundation: [
            {
              name: "Clarity of Nature:",
              description: "Once per long rest, you can create a space of natural serenity within Close range. When you spend a few minutes resting within the space, clear Stress equal to your Instinct, distributed as you choose between you and your allies."
            },
            {
              name: "Regeneration",
              description: "Touch a creature and spend 3 Hope. That creature clears 1d4 Hit Points"
            }
          ],
          specialization: [
            {
              name: "Regenerative Reach",
              description: "You can target creatures within Very Close range with your “Regeneration” feature."
            },
            {
              name: "Warden’s Protection",
              description: "Once per long rest, spend 2 Hope to clear 2 Hit Points on 1d4 allies within Close range."
            }
          ],
          mastery: [
            {
              name: "Defender",
              description: "Your animal transformation embodies a healing guardian spirit. When you’re in Beastform and an ally within Close range marks 2 or more Hit Points, you can mark a Stress to reduce the number of Hit Points they mark by 1",
            }
          ]
        }
      ],
      background: [
        "Why was the community you grew up in so reliant on nature and its creatures?",
        "Who was the first wild animal you bonded with? Why did your bond end?",
        "Who has been trying to hunt you down? What do they want from you?"
      ],
      connections: [
        "What did you confide in me that makes me leap into danger for you every time?",
        "What animal do I say you remind me of?",
        "What affectionate nickname have you given me?"
      ]
    },
    {
      name: "Guardian",
      description: "The title of guardian represents an array of martial professions, speaking more to their moral compass and unshakeable fortitude than the means by which they fight. While many guardians join groups of militants for either a country or cause, they’re more likely to follow those few they truly care for, majority be damned. Guardians are known for fighting with remarkable ferocity even against overwhelming odds, defending their cohort above all else. Woe betide those who harm the ally of a guardian, as the guardian will answer this injury in kind",
      domains: "Valor and Blade",
      evasion: 9,
      hitPoints: 7,
      classItem: "A totem from your mentor or a secret key",
      hopeftr: "Frontline Tank: Spend 3 Hope to clear 2 Armor Slots.",
      classftr: "Unstoppable: Once per long rest, you can become Unstoppable. You gain an Unstoppable Die. At level 1, your Unstoppable Die is a d4. Place it on your character sheet in the space provided, starting with the 1 value facing up. After you make a damage roll that deals 1 or more Hit Points to a target, increase the Unstoppable Die value by one. When the die’s value would exceed its maximum value or when the scene ends, remove the die and drop out of Unstoppable. At level 5, your Unstoppable Die increases to a d6. While Unstoppable, you gain the following benefits: • You reduce the severity of physical damage by one threshold (Severe to Major, Major to Minor, Minor to None). • You add the current value of the Unstoppable Die to your damage roll. • You can’t be Restrained or Vulnerable",
      subclass: [
        {
          subclassName: "Stalwart",
          subclassDescription: "Play the Stalwart if you want to take heavy blows and keep fighting.",
          spellcast: "none",
          foundation: [
            {
              name: "Unwavering",
              description: "Gain a permanent +1 bonus to your damage thresholds"
            },
            {
              name: "Iron Will",
              description: "When you take physical damage, you can mark an additional Armor Slot to reduce the severity"
            }
          ],
          specialization: [
            {
              name: "Unrelenting",
              description: "Gain a permanent +2 bonus to your damage thresholds."
            },
            {
              name: "Partners-in-Arms",
              description: "When an ally within Very Close range takes damage, you can mark an Armor Slot to reduce the severity by one threshold."
            }
          ],
          mastery: [
            {
              name: "Undaunted",
              description: "Gain a permanent +3 bonus to your damage thresholds",
            },
            {
              name: "Loyal Protector",
              description: "When an ally within Close range has 2 or fewer Hit Points and would take damage, you can mark a Stress to sprint to their side and take the damage instead."
            }
          ]
        },
        {
          subclassName: "Vengance",
          subclassDescription: "Play the Vengeance if you want to strike down enemies who harm you or your allies",
          spellcast: "none",
          foundation: [
            {
              name: "At Ease",
              description: "Gain an additional Stress slot"
            },
            {
              name: "Revenge",
              description: "When an adversary within Melee range succeeds on an attack against you, you can mark 2 Stress to force the attacker to mark a Hit Point"
            }
          ],
          specialization: [
            {
              name: "Act of Reprisal",
              description: "When an adversary damages an ally within Melee range, you gain a +1 bonus to your Proficiency for the next successful attack you make against that adversary."
            }
          ],
          mastery: [
            {
              name: "Nemesis",
              description: "Spend 2 Hope to Prioritize an adversary until your next rest. When you make an attack against your Prioritized adversary, you can swap the results of your Hope and Fear Dice. You can only Prioritize one adversary at a time",
            }
          ]
        }
      ],
      background: [
        "Who from your community did you fail to protect, and why do you still think of them?",
        "You’ve been tasked with protecting something important and delivering it somewhere dangerous. What is it, and where does it need to go?",
        "You consider an aspect of yourself to be a weakness. What is it, and how has it affected you?"
      ],
      connections: [
        "How did I save your life the first time we met?",
        "What small gift did you give me that you notice I always carry with me?",
        "What lie have you told me about yourself that I absolutely believe?"
      ]
    },
    {
      name: "Ranger",
      description: "Rangers are highly skilled hunters who, despite their martial abilities, rarely lend their skills to an army. Through mastery of the body and a deep understanding of the wilderness, rangers become sly tacticians, pursuing their quarry with cunning and patience. Many rangers track and fight alongside an animal companion with whom they’ve forged a powerful spiritual bond. By honing their skills in the wild, rangers become expert trackers, as likely to ensnare their foes in a trap as they are to assail them head-on.",
      domains: "Bone & Sage",
      evasion: 12,
      hitPoints: 6,
      classItem: "A trophy from your first kill or a seemingly broken compass",
      hopeftr: "Hold Them Off: Spend 3 Hope when you succeed on an attack with a weapon to use that same roll against two additional adversaries within range of the attack.",
      classftr: "Ranger’s Focus: Spend a Hope and make an attack against a target. On a success, deal your attack’s normal damage and temporarily make the attack’s target your Focus. Until this feature ends or you make a different creature your Focus, you gain the following benefits against your Focus: • You know precisely what direction they are in. • When you deal damage to them, they must mark a Stress. • When you fail an attack against them, you can end your Ranger’s Focus feature to reroll your Duality Dice.",
      subclass: [
        {
          subclassName: "Beastbound",
          subclassDescription: "Play the Beastbound if you want to form a deep bond with an animal ally.",
          spellcast: "Agility",
          foundation: [
            {
              name: "Companion",
              description: "You have an animal companion of your choice (at the GM’s discretion). They stay by your side unless you tell them otherwise. Take the Ranger Companion sheet. When you level up your character, choose a level-up option for your companion from this sheet as well."
            }
          ],
          specialization: [
            {
              name: "Expert Training",
              description: "Choose an additional level-up option for your companion"
            },
            {
              name: "Battle-Bonded",
              description: "When an adversary attacks you while they’re within your companion’s Melee range, you gain a +2 bonus to your Evasion against the attack"
            }
          ],
          mastery: [
            {
              name: "Advanced Training",
              description: "Choose two additional level-up options for your companion.",
            },
            {
              name: "Loyal Friend",
              description: "Once per long rest, when the damage from an attack would mark your companion’s last Stress or your last Hit Point and you’re within Close range of each other, you or your companion can rush to the other’s side and take that damage instead."
            }
          ]
        },
        {
          subclassName: "Wayfinder",
          subclassDescription: "Play the Wayfinder if you want to hunt your prey and strike with deadly force.",
          spellcast: "Agility",
          foundation: [
            {
              name: "Ruthless Predator",
              description: "When you make a damage roll, you can mark a Stress to gain a +1 bonus to your Proficiency. Additionally, when you deal Severe damage to an adversary, they must mark a Stress."
            },
            {
              name: "Path Forward",
              description: "When you’re traveling to a place you’ve previously visited or you carry an object that has been at the location before, you can identify the shortest, most direct path to your destination."
            }
          ],
          specialization: [
            {
              name: "Elusive Predator",
              description: "When your Focus makes an attack against you, you gain a +2 bonus to your Evasion against the attack"
            }
          ],
          mastery: [
            {
              name: "Apex Predator",
              description: "Before you make an attack roll against your Focus, you can spend a Hope. On a successful attack, you remove a Fear from the GM’s Fear pool.",
            }
          ]
        }
      ],
      background: [
        "A terrible creature hurt your community, and you’ve vowed to hunt them down. What are they, and what unique trail or sign do they leave behind?",
        "Your first kill almost killed you, too. What was it, and what part of you was never the same after that event?",
        "You’ve traveled many dangerous lands, but what is the one place you refuse to go?"
      ],
      connections: [
        "What friendly competition do we have?",
        "Why do you act differently when we’re alone than when others are around?",
        "What threat have you asked me to watch for, and why are you worried about it?"
      ]
    },
    {
      name: "Rogue",
      description: "Rogues are scoundrels, often in both attitude and practice. Broadly known as liars and thieves, the best among this class move through the world anonymously. Utilizing their sharp wits and blades, rogues trick their foes through social manipulation as easily as breaking locks, climbing through windows, or dealing underhanded blows. These masters of magical craft manipulate shadow and movement, adding an array of useful and deadly tools to their repertoire. Rogues frequently establish guilds to meet future accomplices, hire out jobs, and hone secret skills, proving that there’s honor among thieves for those who know where to look.",
      domains: "Midnight & Grace",
      evasion: 12,
      hitPoints: 6,
      classItem: "A set of forgery tools or a grappling hook",
      hopeftr: "Rogue’s Dodge: Spend 3 Hope to gain a +2 bonus to your Evasion until the next time an attack succeeds against you. Otherwise, this bonus lasts until your next rest.",
      classftr: "Cloaked: Any time you would be Hidden, you are instead Cloaked. In addition to the benefits of the Hidden condition, while Cloaked you remain unseen if you are stationary when an adversary moves to where they would normally see you. After you make an attack or end a move within line of sight of an adversary, you are no longer Cloaked. Sneak Attack: When you succeed on an attack while Cloaked or while an ally is within Melee range of your target, add a number of d6s equal to your tier to your damage roll. • Level 1  Tier 1 • Levels 2–4  Tier 2 • Levels 5–7  Tier 3 • Levels 8–10  Tier 4",
      subclass: [
        {
          subclassName: "Nightwalker",
          subclassDescription: "Play the Nightwalker if you want to manipulate shadows to maneuver through the environment.",
          spellcast: "Finesse",
          foundation: [
            {
              name: "Shadow Stepper",
              description: "You can move from shadow to shadow. When you move into an area of darkness or a shadow cast by another creature or object, you can mark a Stress to disappear from where you are and reappear inside another shadow within Far range. When you reappear, you are Cloaked"
            }
          ],
          specialization: [
            {
              name: "Dark Cloud",
              description: "Make a Spellcast Roll (15). On a success, create a temporary dark cloud that covers any area within Close range. Anyone in this cloud can’t see outside of it, and anyone outside of it can’t see in. You’re considered Cloaked from any adversary for whom the cloud blocks line of sight."
            },
            {
              name: "Adrenaline",
              description: "While you're Vulnerable, add your level to your damage rolls."
            }
          ],
          mastery: [
            {
              name: "Fleeting Shadow",
              description: "Gain a permanent +1 bonus to your Evasion. You can use your “Shadow Stepper” feature to move within Very Far range",
            },
            {
              name: "Vanishing Act",
              description: "Mark a Stress to become Cloaked at any time. When Cloaked from this feature, you automatically clear the Restrained condition if you have it. You remain Cloaked in this way until you roll with Fear or until your next rest."
            }
          ]
        },
        {
          subclassName: "Syndicate",
          subclassDescription: "Play the Syndicate if you want to have a web of contacts everywhere you go.",
          spellcast: "Finesse",
          foundation: [
            {
              name: "Well-Connected",
              description: "When you arrive in a prominent town or environment, you know somebody who calls this place home. Give them a name, note how you think they could be useful, and choose one fact from the following list: • They owe me a favor, but they’ll be hard to find. • They’re going to ask for something in exchange. • They’re always in a great deal of trouble. • We used to be together. It’s a long story. • We didn’t part on great terms."
            }
          ],
          specialization: [
            {
              name: "Contacts Everywhere",
              description: "Once per session, you can briefly call on a shady contact. Choose one of the following benefits and describe what brought them here to help you in this moment: • They provide 1 handful of gold, a unique tool, or a mundane object that the situation requires. • On your next action roll, their help provides a +3 bonus to the result of your Hope or Fear Die. • The next time you deal damage, they snipe from the shadows, adding 2d8 to your damage roll."
            }
          ],
          mastery: [
            {
              name: "Reliable Backup",
              description: "You can use your “Contacts Everywhere” feature three times per session. The following options are added to the list of benefits you can choose from when you use that feature: • When you mark 1 or more Hit Points, they can rush out to shield you, reducing the Hit Points marked by 1. • When you make a Presence Roll in conversation, they back you up. You can roll a d20 as your Hope Die.",
            }
          ]
        }
      ],
      background: [
        "What did you get caught doing that got you exiled from your home community?",
        "You used to have a different life, but you’ve tried to leave it behind. Who from your past is still chasing you?",
        "Who from your past were you most sad to say goodbye to?"
      ],
      connections: [
        "What did I recently convince you to do that got us both in trouble?",
        "What have I discovered about your past that I hold secret from the others?",
        "Who do you know from my past, and how have they influenced your feelings about me?"
      ]
    },
    {
      name: "Seraph",
      description: "Seraphs are divine fighters and healers imbued with sacred purpose. A wide array of deities exist within the realms, and thus numerous kinds of seraphs are appointed by these gods. Their ethos traditionally aligns with the domain or goals of their god, such as defending the weak, exacting vengeance, protecting a land or artifact, or upholding a particular faith. Some seraphs ally themselves with an army or locale, much to the satisfaction of their rulers, but other crusaders fight in opposition to the follies of the Mortal Realm. It is better to be a seraph’s ally than their enemy, as they are terrifying foes to those who defy their purpose",
      domains: "Splendor & Valor",
      evasion: 9,
      hitPoints: 7,
      classItem: "A bundle of offerings or a sigil of your god",
      hopeftr: "Life Support: Spend 3 Hope to clear a Hit Point on an ally within Close range.",
      classftr: "Prayer Dice: At the beginning of each session, roll a number of d4s equal to your subclass’s Spellcast trait and place them on your character sheet in the space provided. These are your Prayer Dice. You can spend any number of Prayer Dice to aid yourself or an ally within Far range. You can use a spent die’s value to reduce incoming damage, add to a roll’s result after the roll is made, or gain Hope equal to the result. At the end of each session, clear all unspent Prayer Dice",
      subclass: [
        {
          subclassName: "Divine Wielder",
          subclassDescription: "",
          spellcast: "",
          foundation: [
            {
              name: "",
              description: ""
            }
          ],
          specialization: [
            {
              name: "",
              description: ""
            }
          ],
          mastery: [
            {
              name: "",
              description: "",
            }
          ]
        },
        {
          subclassName: "",
          subclassDescription: "",
          spellcast: "",
          foundation: [
            {
              name: "",
              description: ""
            }
          ],
          specialization: [
            {
              name: "",
              description: ""
            }
          ],
          mastery: [
            {
              name: "",
              description: "",
            }
          ]
        }
      ]
    },
    {
      name: "",
      description: "",
      domains: "",
      evasion: 0,
      hitPoints: 0,
      classItem: "",
      hopeftr: "",
      classftr: "",
      subclass: [
        {
          subclassName: "",
          subclassDescription: "",
          spellcast: "",
          foundation: [
            {
              name: "",
              description: ""
            }
          ],
          specialization: [
            {
              name: "",
              description: ""
            }
          ],
          mastery: [
            {
              name: "",
              description: "",
            }
          ]
        },
        {
          subclassName: "",
          subclassDescription: "",
          spellcast: "",
          foundation: [
            {
              name: "",
              description: ""
            }
          ],
          specialization: [
            {
              name: "",
              description: ""
            }
          ],
          mastery: [
            {
              name: "",
              description: "",
            }
          ]
        }
      ]
    },
    {
      name: "",
      description: "",
      domains: "",
      evasion: 0,
      hitPoints: 0,
      classItem: "",
      hopeftr: "",
      classftr: "",
      subclass: [
        {
          subclassName: "",
          subclassDescription: "",
          spellcast: "",
          foundation: [
            {
              name: "",
              description: ""
            }
          ],
          specialization: [
            {
              name: "",
              description: ""
            }
          ],
          mastery: [
            {
              name: "",
              description: "",
            }
          ]
        },
        {
          subclassName: "",
          subclassDescription: "",
          spellcast: "",
          foundation: [
            {
              name: "",
              description: ""
            }
          ],
          specialization: [
            {
              name: "",
              description: ""
            }
          ],
          mastery: [
            {
              name: "",
              description: "",
            }
          ]
        }
      ]
    },
    {
      name: "",
      description: "",
      domains: "",
      evasion: 0,
      hitPoints: 0,
      classItem: "",
      hopeftr: "",
      classftr: "",
      subclass: [
        {
          subclassName: "",
          subclassDescription: "",
          spellcast: "",
          foundation: [
            {
              name: "",
              description: ""
            }
          ],
          specialization: [
            {
              name: "",
              description: ""
            }
          ],
          mastery: [
            {
              name: "",
              description: "",
            }
          ]
        },
        {
          subclassName: "",
          subclassDescription: "",
          spellcast: "",
          foundation: [
            {
              name: "",
              description: ""
            }
          ],
          specialization: [
            {
              name: "",
              description: ""
            }
          ],
          mastery: [
            {
              name: "",
              description: "",
            }
          ]
        }
      ]
    }
  ]
}

module.exports = classes;