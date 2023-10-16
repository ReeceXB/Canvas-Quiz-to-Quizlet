# Canvas-Quiz-to-Quizlet

A simple GPT3.5 generated script that takes a Canvas Quiz page and converts it into a Quizlet readable .txt file.

## One Paste Command
You can paste the following command to instantly run the script:
```js
  fetch('https://raw.githubusercontent.com/ReeceXB/Canvas-Quiz-to-Quizlet/main/script.js')
  .then(response => response.text())
  .then(script => eval(script))
  .catch(error => console.error('An error occurred:', error));
```

## Information
- This script excludes questions marked as 'Incorrect'.
- This script does NOT promote cheating NOR does it facilitate it, this is SIMPLY a way to instantly turn your *completed* Canvas quiz into Quizlet format.
- This question works exclusively on 'Multiple Choice' and 'Text Input' style questions.
- Feel free to use this code in a personal project, I may look to make this into a Chrome Extension.

## How To for any Chrome or any *Chromium based browser*
1. Click the three dots in the top right corner.
2. Hover over the 'More Tools'.
3. Select 'Developer Tools'.
4. Select 'Console'.
5. Paste the contents of *script.js* and/or the 'One Paste Command' into the console, and hit 'Enter'.
6. Create a new set on Quizlet.
7. Click 'Import Set'.
8. Paste the contents of the exported .txt file from the script.
9. Click import.
10. You are finished!
