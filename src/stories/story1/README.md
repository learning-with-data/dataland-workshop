# Creating a data story

> A data-story is structured as a computational notebook, where textual content is interweaved with code—in this case instances of the Dataland editor.

## Overall structure

The story itself lives in the `Story` React component defined in the `index.js` file in this directory. The editor is parameterized, and when a user logs in for the first time to a story, the component "seeds" the backend database with starter or template project for each "code cell". This is a one-time process.

A code cell may also be empty---in that case, the Dataland editor simply shows up with a blank project. 

## Adding or changing seed projects

Any project created with Dataland can be a seed project. Those project files live in the `projectfiles` sub-directory. The file names are ordered in the sequence of how they would appear in the story (e.g., `1.dbp`, `2.dbp`, …). The number of project files do not need to be exactly the same as the number of code cells. If there are `n` project files and `m` code cells, the first `n` of the code cells will get seeded, and the rest will be blank projects. If a blank project is required in an in-between cell, a blank project can be saved from the Dataland editor and given the appropriate file name. 

Once a new project is added, or a project is changed, the following command needs to be run in this directory:

```
npm run generate-blobfile
```

This will generate (or update) a `blobs.json` file, which is then used by the codebase for seeding. `blobs.json` should be tracked by and checked into version control.


__Note:__ If a project already exists in the database (i.e., the user has already visited the story earlier), changes to a corresponding seed project will _not_ cause the users' projects to be updated or overwritten.