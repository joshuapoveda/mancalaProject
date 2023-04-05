# Mancala
### A board game:

_For 2 players – Ages 7 to Adult._

 >Mancala is an ancient family of board games, and there are numerous variants. This is a variant of the basic game, known as two-rank Mancala and also known as Kalah. 
 >>In this current build of the game, players __cannot__ steal pieces from other players–a ruleset in other forms of the game.

 Rule: Players will distribute pieces found in pits or 'cells', consecutively, in a counter-clockwise direction. The game ends when player one's or player two's side of the board is empty, which triggers all remaining pieces to go to the player opposite of the emptied board. Tally up how many pieces are in each player's store. The player with the most 0's wins

__The Inspiration__ to build this game comes from my childhood. I played it in school and it was an interesting way to learn basic arithmetic. It's ancient past always fascinated me:

___"Mancala is a generic name for this type of “count and capture” game and stems from the Arabic word which means “to move.” Examples of this game have been found in Egyptian ruins dated from 1400 B.C.E..." (https://umaine.edu/hudsonmuseum/teacher-resources/games-crafts/mancala-game/#:~:text=Mancala%20is%20a%20generic%20name,of%20Memphis%2C%20Thebes%20and%20Luxor.)___

__Build Status:__

The game is currently in its most basic form. There are edge cases, such as having a large (15+) number of pieces in single pit that cause bugs. ___However___, in the basic form of the game, where starting with 4 pieces in each cell is standard, these bugs do not occur. 

There are multi-board versions of mancala and the potential for the game to be used educationally is high. These would be my reasons to refactor and improve on the current build.

__Tech:__

The build consists of html for structure, css for styling, and javascript for game functionality. 

The gaming logic is contained within 6 functions:
>setBoard():
>>sets the board at game-start (equal number of pieces to each player)

>resetBoard():
>>resets board to game-start by reloading page

>setPlayer():
>>indicates player turn

>playerOneTurn():
>>houses all conditions for turn, re-turn, score, and end-game conditions. Operates as a click-on-target-event

>playerTwoTurn():
>>similiar logic to above function

>endGame():
>>checks for end-game condition (player 1 win, player 2 win, tie)

__How to use__:

Read the instructions for gameplay. Two players will choose who goes first. Player 1 is blue and player two is red. follow the prompt for your turn. If someone has already won, or decides to end the game early, press the reset button to start the board. 

__Challenges__:

desigining the board was a challenge becuase of the left-to-right nature of HTML. Shout out 🗣️ to Tishana for suggesting the board be built with a counter-clockwise enumeration. Shout out 🗣️ to Kasper for suggesting the NodeList of elements (AKA, the board) be saved as an array and sorted.

This made it easier to loop across the levels of the board by a random number of pieces in each cell easier to calculate (with the help of some basic arithmetic). The logic uses the board position, ID, and number of pieces to predict where the last piece will land, adding one piece to each pit along the way.

Since the player-turn functions are already called upon load but actived by event-listeners, It was a bit of trouble to create conditions that would limit each player's interaction with the board (especially when it was not their turn).

Shout out 🗣️ to Ashley for suggesting that I use css to display and hide certain conditions and 🗣️ Jenna for discussing the project in a way that led to more ideas. 🗣️ Kasper also suggested the use of the pointer-events property to limit player interaction. Finally, Dylan suggested the turn-based mechanic first embedded in each player function be its own independent function (setPlayer()). This tied it all together.

Thanks to everyone for helping! Next stop: Refactor-ville!










