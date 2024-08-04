# Om

Code meditation


##  Init

```
git clone ...
npx lefthook install
```

## Packages

- `@nonlux/fetcher` node-fetch extension
  - [ ] avoid json parse if server send html
  - [ ] chunk loading paginated data

##  Mono Features
- [nx](https://nx.dev/getting-started/intro?utm_medium=website&utm_campaign=homepage_links&utm_content=cta_hero_get_started#try-nx-yourself)
- [swc](https://swc.rs/) + [jest](https://swc.rs/docs/usage/jest)
- [biome](https://biomejs.dev/)
- [volta](https://volta.sh/)
- [lefthook](https://github.com/evilmartians/lefthook)
    - https://biomejs.dev/recipes/git-hooks/
- [ ] pnpm https://github.com/pnpm/pnpm
- [ ] ncu
- [ ] npm-scripts-info
- [ ] correct email for git
- [ ] nx + semver
- [ ] audit
- [ ] nx project for root
- [ ] project lint ci


## NX

[Guide](https://nx.dev/getting-started/intro?utm_medium=website&utm_campaign=homepage_links&utm_content=cta_hero_get_started#try-nx-yourself)

### Running tasks

To execute tasks with Nx use the following syntax:

```
npx nx <target> <project> <...options>
```

You can also run multiple targets:

```
npx nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
npx nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Defined in `projects.json`

Learn more [in the docs](https://nx.dev/features/run-tasks).


### View project details

```
npx nx show project @nonlux/fetcher --web
```

Run `npx nx list`

### Explore the project graph

Run `npx nx graph` to show the graph of the workspace.

## Biome

 [Configuration](https://biomejs.dev/reference/configuration/#formatter)

 **Required manual installtion for project**
```
biome init
 #vim project.json to add lint task
```

## Volta

 **Required manual installtion for project**

```
volta pin node@22
```

## Lefthook

```
npx lefthook install
```
