# Project: “Echo”

Echo is a spin-off of the popular game “Simon”, where the player essentially echoes the sequence of notes played by the game. The game signifies which “button” to press by flashing a light and playing a sound corresponding to that button. The game then adds that key to a sequence, that the player must echo. The player then has a certain amount of time to “echo” that sequence. As the player correctly inputs the sequence, the sequence grows longer and longer, and it becomes a battle of memory. Playing on Hard or Hell difficulty will also improve your relative pitch ability! Learn to distinguish the distance of notes relative to one another!

---

## **Instructions**:

### **Forking Repository**:

1. Make sure you're logged into GitHub with your account.
2. Find the GitHub repository with which you'd like to work.
3. Click the Fork button on the upper right-hand side of the repository's page.

### **Making a Local Clone**:

1. On GitHub, navigate to the main page of the repository.
2. Under the repository name, click **Clone or download**.
3. In the Clone with HTTPs section, click copy the clone URL for the repository.
4. Open Git Bash.
5. Change the current working directory to the location where you want the cloned directory to be made.
6. Type `git clone` , and then paste the URL you copied in Step 2.
7. Press **Enter**. Your local clone will be created.
   
---

## **How to Play**:

### Enter your name in the input field on the bar!

**To keep track of how far you've reached, enter your name into the input field. Closing or Refreshing the browser will not delete your saved progress!**

### Press the **Spacebar** to Start the game!

You can either press the keys with the mouse, or play the keys on your Keyboard.   

### Starting from the Left:

**Black Keys**: &nbsp;&nbsp;&nbsp;&nbsp;**S - D - - - G - H - J**

**White Keys**: **Z - X - C - V - B - N - M**

### **Select Difficulty Level** :

**Easy** : Keys light up; White Keys Only;    
**Normal** : Keys light up; White Keys & Black Keys;   
**Hard** : Keys don't light up; White Keys Only;   
**Hell** : Keys don't light up; White Keys & Black Keys;   
   
---

## **Patch Notes** : 

**Version 1.2 Update!**
**Complete overhaul of UX/UI Design.**

Added Media query breakpoint of 1150px width.
Try playing on your phone!
Enjoy the clean sleek new look?

**Version 1.1 Update!**   

Now saves your progress to your local storage!
Displays Top 5 High Scores in the BAR UI.

---

## **Planned Future Implementations** :

**Health Point System** - Allow Errors depending on a HealthPoint Calculation formula.   

levelModifier = (level1-5:5), (level6-10:3), (level11-15:2), (level16+:1)   
damageTaken = (gamePattern.length - userClickedNotes.length) * levelModifier

**Free Play Mode** - Allow Player to casually play the piano.

**Learn a Song!** - Choose from a playlist of classic piano pieces, and learn to play them by "echoing" the phrases and sections!
   
---

## **Technologies Used**: 

HTML, CSS, Javascript, jQuery, Flexbox, Grid, Bootstrap, localStorage, JSON

## **Screenshots of Game** : 

![Game-Idle-Image](https://raw.githubusercontent.com/simpleCodify/Project-Echo/master/images/Game-Idle.png)

![Game-In-Progress-Image](https://raw.githubusercontent.com/simpleCodify/Project-Echo/master/images/Game-In-Progress.png)

![Game-Mobile-Image](https://raw.githubusercontent.com/simpleCodify/Project-Echo/master/images/Game-Mobile-Idle.png)

![Game-Mobile-Idle](https://raw.githubusercontent.com/simpleCodify/Project-Echo/master/images/Game-Mobile-Idle.png)

![Game-Over-Image](https://raw.githubusercontent.com/simpleCodify/Project-Echo/master/images/Game-Over.png)

[Play Now!](https://simplecodify.github.io/Project-Echo/)

