SEI Project 1 : “Echo”

Echo is a spin-off of the popular game “Simon”, where the player essentially echoes the sequence of notes played by the game. The game signifies which “button” to press by flashing a light and playing a sound corresponding to that button. The game then adds that key to a sequence, that the player must echo. The player then has a certain amount of time to “echo” that sequence. As the player correctly inputs the sequence, the sequence grows longer and longer, and it becomes a battle of memory. 



Technologies Used: HTML, CSS, Javascript, Flexbox, Grid, Bootstrap, jQuery, 



Instructions:

Press any Key to start

Select Difficulty Level :	Cake : 		Lights; White Keys; !Black Keys;
					        Normal : 	Lights; White Keys; Black Keys;
					        Hard : 		!Lights; White Keys; !Black Keys;
					        Insane : 	!Lights ; White Keys; Black Keys; InstantGameOver

Features in Future Updates :			Difficulty Customizer : ?
								
							      	    Health Points - Allow Errors depending on Calculation
							      	    (ie: (sequence.length - sequence) * levelMod) where levelMod = level 1-5 : 5, level 6-10 : 4, level 11-15 : 3... etc)



Background Gradient : Changes depending on HP

60% <= HP <= 80%

background: rgb(44,92,116);
background: linear-gradient(90deg, rgba(44,92,116,1) 0%, rgba(150,205,232,1) 60%, rgba(203,225,236,1) 100%);

20% <= HP <= 59%

background: rgb(44,92,116);
background: linear-gradient(90deg, rgba(44,92,116,1) 0%, rgba(150,205,232,1) 60%, rgba(203,225,236,1) 100%);

HP <= 19%

background: rgb(44,92,116);
background: linear-gradient(90deg, rgba(44,92,116,1) 0%, rgba(150,205,232,1) 80%, rgba(203,225,236,1) 100%);

