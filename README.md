# Timify

Timify is an Effekt-based time tracker. You can create projects, track time on projects and summarize your time spendings. 

## Project Overview

- **Effekt** is used for the source code in `src/`:  
  - `main.effekt`: Main entry point.  
  - `test.effekt`: Entry point for tests.  
  - `lib.effekt`: Shared library code.  
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
3. **Install Effekt (if not using Nix)**:  
   Download and install from [Effekt's repository](https://github.com/effekt-lang/effekt).

## Usage

- **Run the Application**:  
  ```bash
  effekt src/main.effekt
  ```
- **Run Tests**:  
  ```bash
  effekt src/test.effekt
  ```

## Contributing

- Update `flake.nix` to adjust dependencies.  
- Submit PRs to improve the code or docs.

## License

MIT License.
