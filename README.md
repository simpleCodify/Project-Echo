# Project: “Echo”

Echo is a spin-off of the popular game “Simon”, where the player essentially echoes the sequence of notes played by the game. The game signifies which “button” to press by flashing a light and playing a sound corresponding to that button. The game then adds that key to a sequence, that the player must echo. The player then has a certain amount of time to “echo” that sequence. As the player correctly inputs the sequence, the sequence grows longer and longer, and it becomes a battle of memory. 

---

## Instructions:

### Forking Repository:

1. Make sure you're logged into GitHub with your account.
2. Find the GitHub repository with which you'd like to work.
3. Click the Fork button on the upper right-hand side of the repository's page.

### Making a Local Clone:

1. On GitHub, navigate to the main page of the repository.
2. Under the repository name, click **Clone or download**.
3. In the Clone with HTTPs section, click copy the clone URL for the repository.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone` , and then paste the URL you copied in Step 2.
7. Press **Enter**. Your local clone will be created.

## How to Play:

Press the Spacebar to Start the game!

You can either press the keys with the mouse, or play the keys on your Keyboard.
Starting from the Left:

  S   D       G   H   J
Z   X   C   V   B   N   M

---

Technologies Used: HTML, CSS, Javascript, Flexbox, Grid, Bootstrap, jQuery, 


Select Difficulty Level :

Cake : 		Lights; White Keys; !Black Keys;
Normal : 	Lights; White Keys; Black Keys;
Hard : 		!Lights; White Keys; !Black Keys;
Insane : 	!Lights ; White Keys; Black Keys; InstantGameOver

Upcoming Patch Notes :

Difficulty Customizer : Customize the Settings
Health Points - Allow Errors depending on a HealthPoint Calculation formula.
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

Prototype (Alpha 1.0) Layout:

![alt text](https://git.generalassemb.ly/SimplyGA/Project-Piano/blob/master/images/Alpha%201.0.png)