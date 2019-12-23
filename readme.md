## Things needed to make react work with custom domain and GitHub Pages 

### Custom domain ###
A file with the name CNAME in /public containing site address (www.xonik.no), this tells 
GitHub to redirect requests for this address to your repo. 

"homepage" attribute with full url in `package.json`, including protocol:

```"homepage": "https://www.xonik.no"``` 

If protocol is not included, all resource calls will fail as they will go to 
yourdomain.com/yourdomain.com/yourresource

### Branching

Since our repo is following the old Github pages style 

`something.github.io`
 
the only branch that will be possible to use as GitHub Pages source is `master` 
(You will see the message "User pages must be built from the master branch." when trying to change source branch).

Because of this, code lives in the `dev`branch and is built to and deployed from `master`. Add this to your
scripts block in `package.json` 

```"deploy": "gh-pages -d build --branch master"```

which is called when running 

```npm run deploy```

You should also change your default branch in GitHub to `dev` to make sure 
pull requests etc go to `dev` instead of `master`.

### React

Github follows the paths in the browser and tries to find a matching subdirectory. 
This interferes with React router which also expects paths. To let a user access a
 subpath directly, we have to let the github error page, `404.html`, point to our app.

By adding a step to the build script, this is done automatically:

```"build": "react-scripts build && cp build/index.html build/404.html"```

PS: A lot of other gh-pages examples says that you have to use

```<BrowserRouter basename={process.env.PUBLIC_URL}>```

to add a base to the paths. This is however only necessary if your app is hosted
in a subdir, like xonik.github.io/myapp. This app is hosted directly on root 
(xonik.no) so we can use the normal Router.

PPS: You have to use `<Link>` to make hyperlinks between pages use the React router. 
Using `<a href` will reload the page.