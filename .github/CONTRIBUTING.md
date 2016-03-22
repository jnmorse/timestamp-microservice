# Contributing Guide

If you would like to make a contribution to this project, please follow the
steps that I have outlined here.

## Bugs

Open a issue under the repositories issues tab, and open a new issue, describing
the problem and give as many details as possible as to how to recreate the bug.

## Create a Fork

For more information on creating forks, please read this [article][1].

## Create a Branch

Please do all your work on a branch, and not on master.

```sh
git branch mybranch
git checkout mybranch
```

or

```sh
git checkout -b mybranch
```

Replace **mybranch** with a more descriptive branch name.

Please limit your commits to one commit if possible, providing a short
descriptive message and if applicable a longer message.

## Create a Pull Request

When creating a pull request, please be as descriptive as possible as to what
changes you are suggesting.

Please also mention if you have tested these changes locally and/or if any unit
tests where created, and make sure your pull request is from your branch and
not master.

If you need more information on creating a pull request, see this [article][2].

## What to do if Your Pull Request is not Excepted

If you pull request is not excepted, I will try to give you a reason as to why
it was not accepted.  You may try again if the reason was one of the following.

1. The Change did not work on my end
2. Code Formating issue
3. Improvements needed

[1]: https://help.github.com/articles/fork-a-repo/ (Fork a Repo)
[2]: https://help.github.com/articles/using-pull-requests/ (Using Pull Requests)
