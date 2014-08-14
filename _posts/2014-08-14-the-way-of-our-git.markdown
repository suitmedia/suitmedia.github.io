---
layout:   post
title:    "The Way Of Our Git"
date:     2014-08-14 00:00:00
author:   Edwin Lunando
author_t: edwinlunando
excerpt:  Suitmedia backend team method to use Git.
---

Hi, everyone! [Git][git] is a distributed version control system that we use to keep out code safe and clean. It is an essential part of our development process. There are numerous way to Git, since it is a flexible tools like [Git flow][git-flow]. The problem is that until now, we leave the method of using Git to the developer. We realized that this is bad practice until a project has scrambled Git structure. We spend a lot of time on refactoring the Git repository, deleting commits, and rollback the code a few times. It was not fun. So, we want to standarize out Git method. For us that work by 1-3 month project, we believe that Git flow is overkill with so many branching feature. So, we made our own Git method.

## The Branches ##

We came up to the idea of two simple branches. The `develop` and `master` branch. The default branch on local development machine is the `develop`. The `master` branch is used to deploy or release the application. We find it hard to maintain if we create a new branch for every new feature or every new hotfix for 1-3 months project. So, we first push all the code, feature implementation, and bug fix to the `develop` branch and then, we merge the `develop` branch to the `master`.

![Master Develop Icon][master-develop]

This two branches system is used because we need to deploy a version of our code in the middle of the development. To make sure the our development code does not clash with the deployed code, we deploy our code from the `master`. For hot fixes, we let the developers to commit to the `master`. And one thing to remember, always pull your code first and solve the conflict before commiting and pushing the files.

## The Files ##

The first rule of putting files on git, do not use `git add -A`. The second rule on putting files on git do not use `git add .`. Using those two commands as a habit will bring harm to your fellow developers in the future. Our experience has told us the truth. We do not want unwanted files that make our repository bloated. On binary files, we permitted on commiting static files like images, css, and js files. We prohibit on commiting user uploaded files and library files. The [.gitignore][gitignore] file will always be used to make the git structure is clean. Thanks to GitHub to provide us [collection of .gitignore files][github-gitignore] for every kind of project. To commit or not to commit, that is the question.

## The Tags ##

We use git tagging to set our application version. We follow [semantic versioning][semver] to set our version. You can read the detail on the website. The point of semantic versioning is these three numbers. MAJOR.MINOR.PATCH. i.e 1.6.5.

1. MAJOR version when you make incompatible changes,
2. MINOR version when you add functionality in a backwards-compatible manner, and
3. PATCH version when you make backwards-compatible bug fixes.

This way, we believe it will make out development quality is better and happier. Thank you for reading. Stay tuned for more development trick to make you happier.

[git]: http://git-scm.com/
[git-flow]: http://nvie.com/posts/a-successful-git-branching-model/
[master-develop]: http://nvie.com/img/2009/12/bm002.png
[gitignore]: http://git-scm.com/docs/gitignore
[github-gitignore]: https://github.com/github/gitignore
[semver]: http://semver.org/
