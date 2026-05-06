# Lab 5 - Starter
Make sure you make a PR to your own repo's main and not the class' repo!! Otherwise you will lose points!!

https://n8l1n.github.io/Lab5_Starter/expose.html

https://n8l1n.github.io/Lab5_Starter/explore.html

Nathan Lin

### Check Your Understanding
1) I would not use a unit test to test the "message" feature of a messaging application because part of the messaging feature allows a user to write and send a message to another user. One of the cons of unit testing is that it cannot test how individual components interact with eachother, so it would be difficult to track if the functionality of the message feature works as intended (In short, there are too many features that go into sending a message to another user for the unit test to be effective here).

2) Yes, I would use a unit test to test the "max message length" of a messaging application since this is an example of debugging on a small scale. We can have test cases for edge cases such as an empty message (length 0), and messages with lengths of 79, 80, and 81.