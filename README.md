# To view this site, visit:
- www.hollygoldgrabe.com

# To Run Locally: 
- Clone the repo and `npm install`
- Dev locally: `npm run dev` and visit `localhost:3000`
- Build static assets: `npm run build && npm run export` - outputs files into ./out (these files shouldn't be committed)

# Deploy:
- Github actions automatically builds the site when a commit is pushed to master.
- Assets are saved to the branch `gh-pages` and served via Github Pages