1) For my creative protion I implemented a "name" feature. First, 
the names of each animal are preset to the type of animal it is. If 
the user wants to change the name they can delete the current name and
type it into the box. This name will be saved for each animal. That is,
if a user names an animal and clicks on another animal, when they come
back to the first animal the given name will be saved.

2) I implemented this by putting a textbox above the animal in the imageview 
area. I then placed constraints so that the textbox would always be at the top
and center of the screen. Then, I made the textbox output a variable and created a
function that saves the text within the texbox as the variable each time and assigns
it to the "name" instance of each Pet. This variable is constantly getting
updated as the user types in the texbox.

3) I implemented this feature because when we have pets we often enjoy naming them.
As such, it only makes sense that a pet app would also have a feature in which you
can give each one of your pets a different name.