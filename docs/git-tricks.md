---
id: git-tricks
title: GIT tricks I think everyone should know
sidebar_label: GIT-Tricks
# sidebar_position: 1


---

### Moving or Migrating GIT stashes from old computer to new. 

1. First, List all your stashes.
```bash 
L:\Project1> git stash list
stash@{0}: On parallax-effect-feature: setting aside animated feature code
stash@{1}: On parallax-effect-feature: testing parallex
```

2. Export to Patch files. You'll have to specify your stash ID and provide a name for your patch file. Do this for the stashes you want to move.
```bash 
git stash show -p stash@{0} > AnimatedPatch
git stash show -p stash@{1} > ParallexPatch
```
3. Patch files will be created in your pwd. Copy the patch file in new directory in the new machine.
4. Apply your stashes and finally Re-Stash them
```bash
cd /new/project/dir
git apply AnimatedPatch
git stash
git apply ParallexPatch
git stash
```

### GIT add all and commit in 1 line
```bash
git commit -am "add all and commit"
``` 