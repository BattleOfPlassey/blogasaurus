---
title: 'GIT : God''s way of semantic versioning'
authors:
  - palash_programmer
date: 2022-07-31T18:30:00.000Z
tags:
  - git
  - programming
  - vcs
description: Blog By Palash Shrivastava
hide_table_of_contents: false
slug: git-essentials
draft: false
image: 'https://avatars.githubusercontent.com/u/35087196?v=4'
---

Here are some of the GIT hacks everyone should know of

<!--truncate-->

### 1. GitLens

[GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens) is a VSCode extension. This has been a lifesaver for me and my team. It works beautifully with vs code. I can compare commits, and code from different branches, check current blame by just hovering, manage stashes, check blame, heatmap, file changes, push & pull code, etc with so much ease.

### 2. Moving or Migrating stashes from old computer to new.

* First, List all your stashes.

```bash
git stash list
```

* Second, Export to Patch files. You'll have to specify your stash ID and provide a name for your patch file. Do this for all the stashes you want to move.

```bash
# stash@{0} is your stash id which is printed with above command, copy and paste below
git stash show -p stash@{0} > stash-name-0
git stash show -p stash@{1} > stash-name-1
```

* Patch files will be created in the current directory. Copy the patch file into the new directory on the new machine.
* Finally, Apply your stashes and finally Re-Stash them

```bash
cd /new/project/dir
git apply stash-name-0
git stash
git apply stash-name-1
git stash
```

### 3. Delete branch on local and remote

```bash
# to delete branch on local repo
git branch -d <branch-name>

# to push delete branch on remote after deleting on local
git push origin -d <branch-name>
```

### 4. Stage all files and commit in one line

```bash
git commit -am "add all and commit"
```

### 5. Take a fresh pull of an existing branch without resolving merge conflicts

Need to delete your local branch and re-fetch it cleanly from the remote.

```bash

# Steps to Take Fresh Pull of an Existing Branch

<Admonition type="warning">
  This will discard all local changes in that branch. Make sure to back up anything you want to keep.
</Admonition>

# 1. Switch to another branch (like main or master)
git checkout main

# 2. Delete the local branch (force delete, since it has conflicts)
git branch -D your-branch-name

# 3. Fetch the latest branches from remote
git fetch origin

# 4. Checkout the branch freshly from remote
git checkout -b your-branch-name origin/your-branch-name
```
