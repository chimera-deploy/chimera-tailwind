# ABOUT
A static site for hosting the Chimera write-up on Github pages. 
Built using React and Tailwind.

Read the writeup at [www.chimera-deploy.dev](https://chimera-deploy.dev/)

## Steps for Updating and Deploying
- The main React project is located on branch `Main`
- The deployed static build files are located on branch `gh-pages`
- To deploy updates:
  - Confirm `package.json` has been updated with:
    - `"homepage": "http://chimera-deploy.dev" ,` at the top level
    - in existing `scripts` add:
      ```
      "scripts": {
        //...
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
        }
      ```
  - run `npm run deploy`
    - creates new build
    - pushes build to `gh-pages` branch
  - remember to add, commit, and push any changes to branch `Main`