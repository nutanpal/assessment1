/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
const gitDefinition =
  "Git is a program with version control system capability for coding projects. It track changes to code and stores all versions (historic snapshots) in a single folder (repository). It helps developers keep track of changes while working on different parts of the same project. Helps multiple programmers collaborate over its many branches without loss of progress and bugs.";

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
const gitHubDefinition =
  " Github is a website that can integrate with Git. It lets us upload /  download files from our local git repository to its cloud repository .";

//////////////////PROBLEM 3////////////////////
/*
    Create a variable called 'gitInitDefinition'.  
    It should be a string containing your best definition of what 'git init' does.
*/

const gitInitDefinition =
  "git init command Initializes a new git repository (local) right here in the current folder. First command to place a project under revision control.";

//////////////////PROBLEM 4////////////////////
/*
    Create a variable called 'gitCloneDefinition'.  
    It should be a string containing your best definition of what 'git clone' does.
*/

//CODE HERE
const gitCloneDefinition =
  " git clone makes a copy of an existing repository at a different location in a new directory. It creates remote-tracking branches for each branch in the cloned repository.";

//////////////////PROBLEM 5////////////////////
/*
    Create a variable called 'gitStatusDefinition'.  
    It should be a string containing your best definition of what 'git status' does.
*/

//CODE HERE
const gitStatusDefinition =
  " git status displays the current state of working directory( local repository) and staging area. It shows changes that have been staged, any tracked or untracked files.Commited project history is not shown. ";

//////////////////PROBLEM 6////////////////////
/*
    Create a variable called 'gitAddDefinition'.  
    It should be a string containing your best definition of what 'git add' does.

    Create another variable called 'gitAddCode'.  
    It should be a string containing the code to add all files.
*/

//CODE HERE
const gitAddDefinition =
  " git add - adds any new/changed file/folder in your working directory to the git staging area (that has a list of all files recently changed). It tells git that you want to add update to a certain file in the next commit.";

const gitAddCode = " git add --all ";

//////////////////PROBLEM 7////////////////////
/*
    Create a variable called 'gitCommitDefinition'.  
    It should be a string containing your best definition of what 'git commit' does.

    Create a variable called 'gitCommitCode'.  
    It should be a string containing the code to commit using the message "initial commit".
*/

const gitCommitDefinition =
  "git commit captures a snapshot of all the currntly staged changes in project. Adding commit keep track of our progress and changes while working.Each commit is a save- point in project you can go back to if there is a bug or change needed.Git will not change them unless you ask it explicitly.";

const gitCommitCode = 'git commit -m "initial commit"  '

//////////////////PROBLEM 8////////////////////
/*
    Create a variable called 'gitPushDefinition'.  
    It should be a string containing your best definition of what 'git push' does.
*/

//CODE HERE

const gitPushDefinition = "After a local repositrory has been modified a push is used to upload local repository contents, transfer all commited changes to a remote (central) repository."  