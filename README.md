# Om

Code meditation

## Packages

- `@nonlux/fetcher` node-fetch extension
  - [ ] avoid json parse if server send html
  - [ ] chunk loading paginated data

##  Mono Features
- swc + jest

## Todo

- [ ] biome for root

## Running tasks


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

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/features/run-tasks).



## Nx plugins and code generators

Add Nx plugins to leverage their code generators and automated, inferred tasks.

```
# Add plugin
npx nx add @nx/react

# Use code generator
npx nx generate @nx/react:app demo

# Run development server
npx nx serve demo

# View project details
npx nx show project demo --web
```

Run `npx nx list` to get a list of available plugins and whether they have generators. Then run `npx nx list <plugin-name>` to see what generators are available.

Learn more about [code generators](https://nx.dev/features/generate-code) and [inferred tasks](https://nx.dev/concepts/inferred-tasks) in the docs.


## Explore the project graph

Run `npx nx graph` to show the graph of the workspace.
It will show tasks that you can run with Nx.
- [Learn more about Exploring the Project Graph](https://nx.dev/core-features/explore-graph)


## Biome

 [Configuration](https://biomejs.dev/reference/configuration/#formatter)
