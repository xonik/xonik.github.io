## Things needed to make react work with custom domain and GitHub Pages 

### Custom domain ###
A file with the name CNAME in /public containing site address (www.xonik.no), this tells 
GitHub to redirect requests for this address to your repo. 

"homepage" attribute with full url in `package.json`, including protocol:

```"homepage": "https://www.xonik.no"``` 

If protocol is not included, all resource calls will fail as they will go to 
yourdomain.com/yourdomain.com/yourresource

### Branching

Code lives in the `dev`branch and is built to and deployed from `master`. Add this to your
scripts block in `package.json` 

```"deploy": "gh-pages -d build --branch master"```

which is called when running 

```npm run deploy```

because if your repo is named 

`something.github.io`
 
the only branch that will be possible to use 
as GitHub Pages source is `master` (You will see the message "User pages must
 be built from the master branch." when trying to change source branch).
 
You should also change your default branch in GitHub to `dev` to make sure 
pull requests etc go to `dev` instead of `master`.

### React

React router won't work out of the box, but requires you to set the basename
for the site and use BrowserRouter instead of the standard Router:

```<BrowserRouter history={history} basename={process.env.PUBLIC_URL}>```

I found this trick on [Medium](https://medium.com/@Dragonza/react-router-problem-with-gh-pages-c93a5e243819)

