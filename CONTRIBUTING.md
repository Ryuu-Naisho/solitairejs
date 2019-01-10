# Contributing to Solitairejs

   The purpose of Solitairejs is to provide a javascript library for making solitaire and custom solitaire games. It's written in ES6 with a few exceptions, for example, importing and exporting modules (running this locally will throw a CORS exception). 
    
# Getting started
 - Download or clone the repo
 - Add the src folder to the directory where you'll be making your solitaire game.
 - Create an html file outside the src folder and import the "solitairejs.js" file (doesn't exists yet but I'm wokring on it). For now just import the file you'll be working on
    -  Example: `<script type="text/javascript" src="src/components/Card.js"></script>`

# Making Changes
- Post a new issue for new feature or fix but make sure that no one else is wokring on the same issue.
- If you haven't done so already, clone the repo. Then create a new branch with the issue type and number(you will find this number where you posted the issue) 
    - like so: feature#123
- One commit per issue only
- Make sure to ` git diff --check ` before commiting 
- Lastly, on the commit message, write the type and feature number. Then a breif message that explains what has been done. If needed an explanation, you may write a paragraph below the brief message. Like so:

```sh
feature#123 Create brief message.<br/>

This is a long paragraph, doing some explanation. x'D.```

# Writing Standards 
- Use four spaces for indentions
- Class declarations will have no indents unless it's nested.
- Methods and fields will have indents according to the nested level. Only indent once beyond the parent. 
- Document every method and class you write. Use `/** ` if you believe it should be in the documentation html that will be generated. Use `/***` If you know it doesn't need to be in the documentation html. Your documentation should look like this:
```
/***
* Does something
* @param {number} someNumber
* @return {number} anotherNumber
*/
```
The @param {number} and @return {number} are important as they will be used  to generate the html file.
- Naming convention use camelCase with the first word lowercased. Constants will be all capitals. 