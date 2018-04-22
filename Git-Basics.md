# Git Basics
Git is a tool that we use to track the progress/changes of our project. As we make changes 
to our code, Git helps us make checkpoints of our codebase, so that if we need to
go back to older version of the code, we have access to it.

## How You'll Usually Use Git
1. Open up our project.
```
    cd marcs-web-project
```
2. Download the latest version of our code from Github. This is important in case
other people on the team make changes to the code will you're away.
```
    git pull
```
3. Make changes to the codebase (like edit `app.js`).

4. When you're ready to commit (save) your changes, check the status of our project
by running the command below. This will tell us what files we have changed.
```
    git status
```

5. Specify the files you want to commit.
```
    git add file_you_edited.js
    git add other_file_you_edited.txt
```

6. Commit your changes. Add a brief message saying what you did.
```
    git commit -m "I added a few new files"
```

7. Push your changes to Github. That way if your computer dies, we're still good ;)
```
    git push origin master
```

## Useful Tricks
- See a log of all our commits.
```
    git log
```

- What if you made some changes, and something broke, and you want to go back to our previous commit?
```
    git checkout -- file_you_want_to_reset.js
```

- See the files with uncommitted changes.
```
    git status
```

- See the uncommitted changes (since the last commit) in a file.
```
    git diff file_you_changed.js
```
