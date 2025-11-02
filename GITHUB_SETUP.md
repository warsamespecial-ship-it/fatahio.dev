# GitHub Setup Instructions

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Fill in the repository details:
   - **Repository name**: `fatahio.dev` (or any name you prefer)
   - **Description**: "Personal portfolio website built with React.js"
   - **Visibility**: Choose Public or Private
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

## Step 2: Add Remote and Push

After creating the repository, GitHub will show you the repository URL. Use this URL in the commands below.

Run these commands in your terminal (replace YOUR_REPO_URL with your actual repository URL):

```bash
# Add the GitHub repository as remote
git remote add origin https://github.com/warsamespecial-ship-it/fatahio.dev.git

# Or if you prefer SSH:
# git remote add origin git@github.com:warsamespecial-ship-it/fatahio.dev.git

# Rename branch to main (GitHub's default)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

## Step 3: Verify

After pushing, refresh your GitHub repository page. You should see all your files there!

## Quick Setup (All in One)

If you've already created the repository on GitHub, you can run:

```bash
git remote add origin https://github.com/warsamespecial-ship-it/fatahio.dev.git
git branch -M main
git push -u origin main
```

**Note:** If you named your repository differently, replace `fatahio.dev` with your actual repository name.

