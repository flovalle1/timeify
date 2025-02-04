# Timify

Timify is an Effekt-based time tracker. You can create projects, track time on projects and summarize your time spendings. 

## Project Overview

- **Effekt** is used for the source code in `src/`:  
  - `main.effekt`: Main entry point.  
  - `test.effekt`: Entry point for tests.  
  - `lib.effekt`: Shared library code.  
  - `jsondb.effekt`: Functions for interaction with json streams.
- **Nix Flake** configuration is in `flake.nix` for easy reproduction and CI.

## Getting Started

1. **Clone the Repository**:  
   ```bash
   git clone <this-repo-url>
   cd Timify
   ```
2. **Optional: Enter Nix Shell**:  
   ```bash
   nix develop
   ```
3. **Install Effekt**:  
   Download and install from [Effekt's repository](https://github.com/effekt-lang/effekt).

## Usage

- **Run the Cronjob server**:  
  ```bash
  cd cronjob
  node server.js
  ```
- **Run the CLI Application**:  
  ```bash
  effekt src/main.effekt
  ```
- **Run Tests**:  
  ```bash
  effekt src/test.effekt
  ```

## License

MIT License.
