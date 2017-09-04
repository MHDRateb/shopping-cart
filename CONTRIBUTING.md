# Contributing

## Adding the upstream repo

When working with Git, there are 3 main repositories (versions of your project) you have to keep track of:
- local: this is your local project, where you make changes first
- origin: this is your forked repository on GitHub, which only you have permission to edit, and this is where you push your changes first
- upstream: this is the main repository, the one only the project owner has permission to merge and accept pull request. The only way you can add changes into this project is by submitting a **pull request** and having the project owner review it and accept it. 

First, do a `git remote -v`. This should show you only your `origin` repo. It should point to a URL containing your username.
Then, add the upstream repository:
`git remote add upstream git@github.com:kabaros/shopping-cart.git`

Now, if you do a `git remote -v` it should show you two remotes: an origin pointing to a URL with your username in it, and an upstream, pointing to **git@github.com:kabaros/shopping-cart.git**.

## Starting work:

Before starting work on any changes make sure you create a new branch for them, based on master:
`git branch new-work-name master` (make sure you replace "new-work-name" with a small indication of the work you're doing)

Switch to that branch:
`git checkout new-work-name`

## Working on the branch

Do your changes, commiting them as you work:
`git add .`
`git commit -m "my commit message"`

## Ready to submit

Before you submit your changes, make sure you get any latest changes that have been merged in to the upstream repo:

```
git pull --rebase upstream master
```

If there are any merge conflicts, this is the part where you will be asked to solve them.

Once you are ok with your changes push them to your forked repository:
`git push -u origin new-work-name`

## Pull Request
Go to your forked repository's GitHub page where you should now see a button to add a PR.

- Make sure that PR title is descriptive.
- Reference the Github Issue number in the description of the PR, and and anymore information that is relevant.
