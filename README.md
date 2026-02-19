# LumenTech Website

Production-ready multi-page tech company marketing site built with Next.js, Tailwind CSS, and Framer Motion.

## Pages

- Home
- About
- Services
- Contact (validated form ready for email API integration)

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Git + PR troubleshooting (Codex)

If Codex cannot create a PR, the most common cause is that this local clone is not connected to your new GitHub repository or the branch is not pushed.

### 1) Confirm remotes

```bash
git remote -v
```

If nothing is shown, add your new repo:

```bash
git remote add origin <your-repo-url>
```

If `origin` exists but points to the wrong repository:

```bash
git remote set-url origin <your-repo-url>
```

### 2) Push current branch

```bash
git push -u origin work
```

### 3) Verify PR prerequisites

```bash
git branch --show-current
git rev-parse --abbrev-ref --symbolic-full-name @{u}
```

You should see:
- current branch = `work`
- upstream branch = `origin/work`

Once these are set, Codex PR creation has the branch context it needs.
