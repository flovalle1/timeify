# Effekt Template

> [!WARNING]
> This is a work-in-progress, feel free to contribute!

This template provides a starting point for Effekt projects.

## Table of contents

- [First steps](#first-steps)
- [Useful commands](#useful-commands)
  - [Effekt commands](#effekt-commands)
  - [Nix-related commands](#nix-related-commands)
- [Example projects](#example-projects-using-this-template)
- [Repository structure](#repository-structure)
- [CI](#ci)

---

## First steps

After using this template, follow these steps to set up your project:

1. Set up your development environment:
   - Clone this repository locally.
   - Open it in VSCode.
   - Install the Effekt VSCode extension offered in the pop-up in the bottom right.

2. Customize the project:
   - Open `flake.nix` and update the project name and other relevant values (follow the comments).
   - Push your `flake.nix` file after the changes and see if the CI agrees.

3. Set-up auto-update CI:
   - Go to Settings -> Actions -> General and check "Allow GitHub Actions to create and approve pull requests"
     in order to get weekly Pull Requests on Tuesday that update the Effekt version in CI.
   - See the [CI](#ci) section for more details

3. Replace this `README` with your own!
   - Please link back to this repo if you can :)

## Useful commands

### Effekt commands

Run the main file:
```sh
effekt src/main.effekt
```
This (like many other Effekt commands) uses the JavaScript backend by default.
To use a different backend, add the `--backend <backend>` flag.

Run the tests:
```sh
effekt src/test.effekt
```

Open the REPL:
```sh
effekt
```

Build the project:
```sh
effekt --build src/main.effekt
```
This builds the project into the `out/` directory, creating a runnable file `out/main`.

To see all available options and backends, run:
```sh
effekt --help
```

### Nix-related commands

While Nix installation is optional, it provides several benefits:

Update dependencies (also runs automatically in CI):
```sh
nix flake update
```

Open a shell with all necessary dependencies:
```sh
nix develop
```

Run the main entry point:
```sh
nix run
```

Build the project (output in `result/bin/`):
```sh
nix build
```

## Example projects using this template

- [`effekt-stm`](https://github.com/jiribenes/effekt-stm)
- This very project!

## Repository structure

- `.github/workflows/*.yml`: Contains the [CI](#ci) definitions
- `src/`: Contains the source code
  - `main.effekt`: Main entry point
  - `test.effekt`: Entry point for tests
  - `lib.effekt`: Library code imported by `main` and `test`
- `flake.nix`: Package configuration in a Nix flake
- `flake.lock`: Auto-generated lockfile for dependencies
- `LICENSE`: Project license
- `README`: This README file

## CI

Two GitHub Actions are set up:

1. `flake-check`:
   - Checks the `flake.nix` file, builds and tests the project
   - Runs on demand, on `main`, and on PRs
   - To run custom commands, add a step using:
     - `nix run -- <ARGS>` to run the main entry point with the given arguments
     - `nix develop -c '<bash command to run>'` to run commands in the correct environment

2. `update-flake-lock`:
   - Updates package versions in `flake.nix`
   - Runs on demand and weekly (Tuesdays at 00:00 UTC)
