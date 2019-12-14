# React Bootstrap Sass

This is a simple [Bootstrap][bs-site] project demonstrating how to use [Sass][sass-site] without having painstakingly attempt to override Bootstrap styles with custom CSS


---


## Overview

Frameworks such as **[Bootstrap][bs-site]** are popular in part because writing and debugging your own custom CSS to work across [all browsers][w3s-browser] _and_ [devices][mdn-css-device-compatibility] is like a _sweaty octopus trying to unhook a bra_.

**[Sass/Scss][sass-site]** is [CSS preprocessor][mdn-css-preprocessor]--a *powerful* language in which you can use basic programming concepts in your stylesheets like *functions* and *variables*, not to mention be able to *nest* your styles!

**[Create-React-App][cra-site]** makes implementing the above two technologies [so][cra-sass] damn [simple][cra-bs]!


---


## Getting Started

If you want to use the finished product and play around with it (there isn't really much though), here's a simple set of instructions that just tells you to clone it and install dependencies.

**Requirements**
 - Node.js >= 8.10 and npm >= 5.6
 - Git
 - Computer
 - Internet

Clone the repository:
```bash
git clone https://github.com/loljoho/react-bootstrap-sass.git
```

Enter the directory:
```bash
cd react-bootstrap-sass/
```

Install dependencies:
```bash
npm install
```

Run the local development server:
```bash
npm start
```


---


## Procedure

This section will outline the procedure from scratch.  

You can also follow along by examining my [commit history](https://github.com/loljoho/react-bootstrap-sass/commits/master).

We'll be doing the following:
 1. **Initial Commit** - creating a new React app with `create-react-app`
 2. **Install Sass** - installing `node-sass` 
 3. **Rename Stylesheets** - changing all our `.css` files into `.scss`
 4. **Install Bootstrap** - installing Bootstrap with `npm` instead of using a CDN
 5. **Import Bootstrap** - importing the Bootstrap `.scss` files from `node_modules/`
 6. **Define Variables** - customise your Bootstrap build by plugging in values for Bootstrap variables
 7. **Play Around** - add some Bootstrap elements into your React app and customise it


### 1. Initial Commit

Create a new React App:
```bash
npx create-react-app react-bootstrap-sass
```

Enter the directory:
```bash
cd react-bootstrap-sass/
```

**Note:** I added an `.editorconfig` file which is my *modus operandi* with new projects, but you may choose not to.  You can read more about it [here](https://editorconfig.org/).

[Here](https://github.com/loljoho/react-bootstrap-sass/tree/dd95bafa656d71f156a175a3870b84ca89e99fc0) is what the repository looks like at this time.


### 2. Install Sass

(See the [official CRA documentation][cra-sass] on adding Sass to your project)

Install the `node-sass` npm package:
```bash
npm install node-sass
```

**Note:** I forgot to commit my `package-lock.json` in the previous step.

[Here](https://github.com/loljoho/react-bootstrap-sass/tree/555bcd585db5c2a2066d4b24cd5dbf1ef4076bc5) is what the repository looks like at this time.


### 3. Rename Stylesheets

Change the extension of our `.css` files to `.scss`:
```bash
mv src/index.css src/index.scss
mv src/App.css src/App.scss
```

And don't forget to update the `import` paths in the corresponding `.js` files!

Line 3 in `index.js`:
```js
import './index.scss';
```

Line 3 in `App.js`:
```js
import './App.scss';
```

[Here](https://github.com/loljoho/react-bootstrap-sass/tree/c928d2a002c411e502f055835e8270020bc7c899) is what the repository looks like at this time.


### 4. Install Bootstrap

Rather than use a CDN to link the full compiled `.css` file, we're going to use `npm` to install Bootstrap.  This way we have access to the [individual `.scss` files][bs-gh-scss] that are bundled up into the giant `.css` file you normally use!

Install the `bootstrap` npm package:
```bash
npm install bootstrap
```

[Here](https://github.com/loljoho/react-bootstrap-sass/tree/82698e5936da99cb83fc0ebcc598c468b219439e) is what the repository looks like at this time.


### 5. Import Bootstrap

Add the following to your `index.scss`:
```scss
@import '~bootstrap/scss/bootstrap';
```

This line uses the CSS `@import` rule to import the styles from `/node_modules/bootstrap/scss/bootstrap.scss`.

(Alternatively, you can use `@import` for only the individual `.scss` files you want, but this gets tricky with a large library of styles like Bootstrap, as there are a number of base functions and mixins that the rest of the styles rely on)

If you want to see how Bootstrap's **partials** (i.e. the `.scss` files with a `_` prefix in their name) are structured, check them out below or in the [official repository][bs-gh-scss].

<details><summary>Click to Expand/Collapse</summary>
<p>
Structure of Bootstrap `.scss` files and directories within `node_modules/`:

```
bootstrap/
├── scss
│   ├── mixins
│   │   ├── _alert.scss
│   │   ├── _background-variant.scss
│   │   ├── _badge.scss
│   │   ├── _border-radius.scss
│   │   ├── _box-shadow.scss
│   │   ├── _breakpoints.scss
│   │   ├── _buttons.scss
│   │   ├── _caret.scss
│   │   ├── _clearfix.scss
│   │   ├── _deprecate.scss
│   │   ├── _float.scss
│   │   ├── _forms.scss
│   │   ├── _gradients.scss
│   │   ├── _grid-framework.scss
│   │   ├── _grid.scss
│   │   ├── _hover.scss
│   │   ├── _image.scss
│   │   ├── _list-group.scss
│   │   ├── _lists.scss
│   │   ├── _nav-divider.scss
│   │   ├── _pagination.scss
│   │   ├── _reset-text.scss
│   │   ├── _resize.scss
│   │   ├── _screen-reader.scss
│   │   ├── _size.scss
│   │   ├── _table-row.scss
│   │   ├── _text-emphasis.scss
│   │   ├── _text-hide.scss
│   │   ├── _text-truncate.scss
│   │   ├── _transition.scss
│   │   └── _visibility.scss
│   ├── utilities
│   │   ├── _align.scss
│   │   ├── _background.scss
│   │   ├── _borders.scss
│   │   ├── _clearfix.scss
│   │   ├── _display.scss
│   │   ├── _embed.scss
│   │   ├── _flex.scss
│   │   ├── _float.scss
│   │   ├── _overflow.scss
│   │   ├── _position.scss
│   │   ├── _screenreaders.scss
│   │   ├── _shadows.scss
│   │   ├── _sizing.scss
│   │   ├── _spacing.scss
│   │   ├── _stretched-link.scss
│   │   ├── _text.scss
│   │   └── _visibility.scss
│   ├── vendor
│   │   └── _rfs.scss
│   ├── _alert.scss
│   ├── _badge.scss
│   ├── _breadcrumb.scss
│   ├── _button-group.scss
│   ├── _buttons.scss
│   ├── _card.scss
│   ├── _carousel.scss
│   ├── _close.scss
│   ├── _code.scss
│   ├── _custom-forms.scss
│   ├── _dropdown.scss
│   ├── _forms.scss
│   ├── _functions.scss
│   ├── _grid.scss
│   ├── _images.scss
│   ├── _input-group.scss
│   ├── _jumbotron.scss
│   ├── _list-group.scss
│   ├── _media.scss
│   ├── _mixins.scss
│   ├── _modal.scss
│   ├── _navbar.scss
│   ├── _nav.scss
│   ├── _pagination.scss
│   ├── _popover.scss
│   ├── _print.scss
│   ├── _progress.scss
│   ├── _reboot.scss
│   ├── _root.scss
│   ├── _spinners.scss
│   ├── _tables.scss
│   ├── _toasts.scss
│   ├── _tooltip.scss
│   ├── _transitions.scss
│   ├── _type.scss
│   ├── _utilities.scss
│   ├── _variables.scss
│   ├── bootstrap-grid.scss
│   ├── bootstrap-reboot.scss
│   └── bootstrap.scss
├── dist/
├── js/
├── LICENSE
├── package.json
└── README.md
```
</p>
</details>

[Here](https://github.com/loljoho/react-bootstrap-sass/tree/4498a62fb6bc90273b35c612be462e8f1fb64109) is what the repository looks like at this time.


### 6. Define Variables

If you examined the files in the previous step, you'll have noticed a [`_variables.scss`](https://github.com/twbs/bootstrap/blob/master/scss/_variables.scss).  What we're going to do is make our own copy of this for our project so we can customise the values ourselves.

Create a copy of `_variables.scss` in `src/`:
```bash
cp node_modules/bootstrap/scss/_variables.scss ./src/
```

Modify our `@import`s in `index.scss`:
```scss
@import '~bootstrap/scss/functions';
@import 'variables';
@import '~bootstrap/scss/bootstrap';
```

Because the `_variables.scss` partial requires some of Bootstrap's functions, we need to `@import` the `_functions.scss` partial beforehand.

**Oops:** Before I forget, ditch the extra styles in `index.scss` that were generated by Create-React-App like [so](https://github.com/loljoho/react-bootstrap-sass/blob/master/src/index.scss).

**Oops:** You'll also notice I added a [custom font](https://github.com/loljoho/react-bootstrap-sass/blob/master/src/index.scss#L1).  Feel free to pick your own (I used [Google Fonts][gfonts]).  Make sure you also [update the `font-family-` variables accordingly](https://github.com/loljoho/react-bootstrap-sass/blob/master/src/_variables.scss#L281-L283)!

[Here](https://github.com/loljoho/react-bootstrap-sass/tree/42c4eaab27bc891c040ad33baf8d38eefac8c6dc) is what the repository looks like at this time.


### 7. Play Around

Last but not least, let's play around!

We'll begin by adding some basic Bootstrap components into our application.  Nothing too fancy yet (you can split these up into individual React Components later on).

I threw bunch of Bootstrap components into my `App.js`, which you can find [here](https://github.com/loljoho/react-bootstrap-sass/blob/master/src/App.js).

Then I went into my `_variables.scss` and changed some of my colours, which you can see [here](https://github.com/loljoho/react-bootstrap-sass/blob/master/src/_variables.scss#L37-L76), amongst many other things!

**Note:** You can remove the `!default` in the variable declarations as you go along.

Something something danger zone.


---


## Links & Resources

 - [Adding a Sass Stylesheet](https://create-react-app.dev/docs/adding-a-sass-stylesheet)
 - [Sass: Syntactically Awesome Style Sheets](https://sass-lang.com/)
 - [Can I use... Support tables for HTML5, CSS3, etc](https://caniuse.com)

[cra-site]:https://create-react-app.dev/
[cra-sass]:https://create-react-app.dev/docs/adding-a-sass-stylesheet
[cra-bs]:https://create-react-app.dev/docs/adding-bootstrap

[sass-site]:https://sass-lang.com/
[sass-docs]:https://sass-lang.com/documentation

[bs-site]:https://getbootstrap.com/
[bs-gh-scss]:https://github.com/twbs/bootstrap/tree/master/scss

[gfonts]:https://fonts.google.com/

[w3s-browser]:https://www.w3schools.com/cssref/css3_browsersupport.asp
[mdn-css-device-compatibility]:https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Device_Adaptation#Browser_compatibility
[mdn-css-preprocessor]:https://developer.mozilla.org/en-US/docs/Glossary/CSS_preprocessor