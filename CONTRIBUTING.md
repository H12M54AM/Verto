# Contributing to Verto 🧩

First off, thank you for considering contributing to Verto! It’s people like you who make Verto a premier logic puzzle platform.

By contributing to this project, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md) and license your contributions under the **GNU Affero General Public License v3 (AGPL-3.0)**.

---

## 📜 Licensing Notice (AGPL-3.0)

Verto is licensed under the **AGPL-3.0**. This means:
1. **Reciprocity**: If you modify Verto and run it on a server for others to use, you **must** make your modified source code available to those users.
2. **Persistence**: Your contributions will remain free and open-source forever.
3. **Patent Grant**: You grant a patent license to all users of the software, and in return, you are protected by the community's collective patent peace treaty.

---

## 🛠 Tech Stack Requirements

To keep the codebase maintainable and high-performance, please ensure your environment matches our production stack:
- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript 5
- **Engine**: Mutabie Canada Inc. Proprietary Validation Logic

---

## 🚀 How Can I Contribute?

### 1. Reporting Bugs 🐛
- Search existing issues to see if the bug has been reported.
- If not, open a new issue using the **Bug Report** template.
- Include your OS, browser version, and clear steps to reproduce the error.

### 2. Suggesting Enhancements 💡
- We love new puzzle mechanics! Open an issue with the tag `enhancement` to discuss the logic before implementation.

### 3. Pull Requests (PRs) 📥
1. **Fork** the repo and create your branch from `main`.
2. **Format**: Run `npm run lint` and `npm run format` before committing.
3. **Logic Check**: If you modify the Hamiltonian path generator, you **must** include tests proving the grid remains 100% solvable.
4. **No Backtracking**: Ensure your code follows the "Single Path" rule—don't break the core game loop!
5. **Submit**: Open a PR with a clear description of the "What" and the "Why."

---

## 🧪 Development Setup

```bash
# Clone your fork
git clone [https://github.com/your-username/verto.git](https://github.com/your-username/verto.git)

# Install dependencies
npm install

# Run development server
npm run dev