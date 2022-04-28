var quote = document.getElementById('quote');
var randomQuotes = ['A group of miners are protesting outside a noble’s estate over poor work conditions. They are all covered in coal dust, holding signs that say "NO ORE NO MORE".',
                    'A noble invites the players to a house party. The noble, a female Dwarf named Bronsyl wants the party to pretend they are the nobles friends to impress the other nobles at the party.',
                    'An older gentleman is yelling at his young apprentice for making a mistake. The older man walks away angrily, while the young apprentice A male Half-Elf named Sylzaren, is left standing there distraught.',
                    'You see the city guards raid a store. Guards preventing people from coming close say that it’s a front for illegal activities. Rumors are that the owners ticked off the wrong person forgot to pay protection money and the guards are corrupt.',
                    'A child with an obvious injury begging for money pleads to the party for money. Later that day the party sees the same kid running around playing tag.',
                    'A terrified ex-Warlock begs the party for help, their old patron sends shadow mastiffs after them every night to kill them. They have not slept in days. Killing the hounds doesnt stop them coming back the next night.',
                    'Street sign posts keep moving about in the night, causing confusion. Locals thought it was kids messing around but then 3 people were found hanged from sign posts in one night. Each victim had a compass on their person.',
                    'People keep seeing the same thing out of the corner of their eye. A hideous naked old woman with putrid wounds stands watching until looked at directly when she disappears. only one person sees her at a time.',
                    'A wealthy merchant offers to pay one of the PC to be the target of a special spell then get them selves arrested so that they can pass the spell effects to another prisoner. The merchant says they will also pay whatever the bail is, but will actually only pay up to 10gp.',
                    'A local alchemist shop has caught fire! There is panic in the streets! Water could make the chemical blaze worse. Someone help!.',
                    'A trinket shop has been ransacked and the PCs know the individual that did it (somebody they like). This individual was being mind controlled, and they were caught specifically stealing an ancient censer linked to a forgotten cult.',
                    'As the group walks down the street, they see a Goblin arguing with three guards. Apparently, while apprehending a criminal, the guards heavily damaged the goblins market stand and he demands reparation.',
                    'On this street corner, a zealot follower of Helm( or insert god who had bad relations with Orc gods) tries to whip up a mob into a frenzy. Their goal is to lead this mob into the Foreign Quarter and kill any Orc they find. A small force of Guards tries to deescalate the situation.',
                    'Three well dressed young men are bullying an old beggar sitting by an alleyway. They kicked his begging bowl over and insult him. If the players decide to step in, the three will begrudgingly stop. They all wear the symbol of a rather influential House.',
                    'Two philosophers are having a debate by a street corner. They loudly discuss what does or doesnt constitute a "Sandwich". As the group walks by, the older of the two waves you over and asks your opinions on the matter.',
                    'A totally drunk half-orc tries to get on his wagon and drive away. His Halfling friend tries to stop him, to no avail.',
                    'A rather awkward young man, who looks like he hasnt slept in days, approaches a single character. He asks them to kill him, but wants to be taken unaware. If the player doesnt want to do that, he will pester them for the time they spent in the city, stalking them.',
                    'Ricardo, a human Bard, is trying to woe Francesca, the leader of the Fighters Guild. Two things are working against Ricardo though: Francesca already has a secret fiancé and Ricardo isnt as good of a bard as he thinks.',
                    'A Tiefling merchant selling potions out of a traveling wagon. When asked about the origin of the potions, only vague answers are given. Rouges with ties to the local Thieves Guild might know them.',
                    'Some young men have stolen a large keg of what they think is ale. They are pushing it laboriously up a steep hill, joking and grunting from the effort. A few minutes later a frantic alchemist can be seen running around asking if anyone has seen a barrel of Alchemists Fire that has disappeared.',
                    'A golem is trudging in a treadmill. Suddenly, the mill comes off its axle. The mill and the golem propelling it, shoot forwards wobbling into the town and picking up speed.',
                    'A pair of wagon drivers are preparing to race down the main street of the town. The street has been mostly cleared, although clearly by local gangs rather than any legitimate authority. There is a large amount of betting going on about who is going to win.',
                    'A local ditch digger found an inanimate Shield Guardian buried in rubbish in a sewer out spill. The Guardian has a distinctive motif on their shield, chest and helmet. The ditch digger is offering a reward to anyone that finds the device that controls the Guardian.',
                    'While walking down the street, the adventurers hear a large crash then yelling coming from a nearby shop. Upon further investigation, they discover a womans child had damaged expensive goods in the shop and the merchant wont let them leave until the mother pays up.',
                    'You’ve arrived in town for the annual harvest festival. Pie eating contests, catching greased pigs, and other fair activities are happening all around you.',
                    'A young nobleman is trying to beat his drinking habit. He wants you to stay with him and not let him drink.',
                    'A boy hoping to impress a girl begs you to pretend to harass her and then pretend to be driven off when he intervenes.',
                    'Two competing chefs want an impartial judge to decide whose creation is more delicious.',
                    'You have apparently entered the foreign quarter, as the background chatter becomes unintelligible and the pedestrians more exotic. Some kids in the street lose control of the ball they were playing with and upset a board game two elderly gentlemen are sitting around.',
                    'The beasts of burden (can be horses, griffins, drakes, whatever) pulling a carriage have gotten spooked or agitated by nothing in particular, and the driver cant get them back under control.',
                    'A crier, news board or booksellers stall proudly touts the newest tract in an ongoing pamphlet war between two mages which is clearly centered more around a mutual personal grudge than whatever arcane theory theyre arguing over.',
                    'Two lovebirds with disapproving parents meet in secret. They could be separated by social class, different races, or feuding families.',
                    'A religious party is preaching about a god you are not familiar with. It quickly becomes apparent to people proficient with religion he is only preaching nonsense, but many people are paying attention to him.',
                    'A beehive falls from a building, and the bees begin to harrass a passing noble. The noble seems to believe your party has something to do with the falling beehive.',
                    'There is a project to demolish a condemned building, however the plan fell thru. The demolish crew is now wondering how they can remove the building (safely).',
                    'A sewer grate bursts open, and 1d6+3 swarms of rats burst out of it. Underneath, a druid is leading them to overrun a business that has been rumored to pollute the nearby river. These rumors however turn out to be false.',
                    'A protest is taking place after it was revealed the local priest had a mistress. The priest is attempting to skip town and may attempt to bribe to party for assistances.',
                    'An apple sellers cart has broken down in front of a tanners shop. The tanner is not happy about it and has started crushing apples.',
                    'Someone is stealing the coins from a well or fountain that people toss coins in for good luck.',
                    'A group of monks are showing off fancy fighting moves but one of them looks like theyre making things up and is looking around nervously. This person is trying to show someone special theyve changed. They havent.',
                    'After the players walk by an open door in the city, on an abandoned street, a player with a Very high passive perception barely sees a tentacles reach out and close the door quietly after they pass. Its the house of a former Warlock and after she died the house has remained sentient.',
                    'One of the players trip on a loose cobble. Underneath it there is a strange coin and as soon as they pick it up they begin to hear children laughing, very clearly as if they were close, but there is no one here. They cannot discard the coin any way except by making someone else trip over it.',
                    'As the players pass by a furniture store a small table hurriedly runs out and walks quietly behind the party. The store owner gives chase and accuses the PCs of theft and the city guard seems in agreement. Turns out there is a faery-base mage/warlock/bard with an Animate Object spell .',
                    'Some obvious mobsters want to throw a surprise party for their Boss, but there is ZERO chance this wont lead to a surprising amount of bloodshed so they need to hire some DURABLE people to handle the first few rounds after yelling SURPRISE!.',
                    'City Guard is inspecting the feet of anyone who comes into town, assisted by a terrified looking academic. On the shoes of the lowest INT player is a Bookworm, that literally eats magical books. This player is arrested by a previously unknown Library Police and made to stand trial for their crimes.',
                    'Everywhere the partys toughest character goes in town, they seem to always accidentally be standing under or next to the image of a Mind Flayer. Even when it seems like they arent, it turns out theyre in the Mind Flayer section, or the Tentacle Room, or in the Tasty Brain bleachers..',
                    'A PC eats a rotten bit of cheese and as a direct result is visited that night be three ghosts. Unlike other stories, they ghosts just want you to help them relive rowdy and drunken days of their misspent youth, while pretending to be giving you Moral Lessons.',
                    'Someone has been stealing manhole covers and then using Silent Image to make them LOOK like they are there and then mugging people who fall down into the sewer.',
                    'The PC with the most languages notices that the laundry drying on twine in the alley spells a secret message asking for help, when looked at a particular way. Turns out an academic has been kidnapped and used as a laundress, but was previously a linguist and used her skill to try and find help.',
                    'A market vendor forces a large lizard with a hood over its head into a PCs hands, and says, Finally, take this thing and deliver it to the tower. It might be dangerous so dont take off the hood. Before he disappears from sight.',
                    ];

function changeQuotes() {
  var i = Math.floor((Math.random() * randomQuotes.length));
           quote.innerText = randomQuotes[i];
}

changeQuotes();
