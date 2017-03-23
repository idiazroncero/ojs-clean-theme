# CLEAN THEME
## Un tema para OJS 3.0 basado en Clean-RWD

## File structure

Following [OJS theming conventions][ThemingGuide], the file structure of this theme is as follows:

`/styles/` Compiled assets.<br>
`/templates/` Template overrides. Includes:<br>
	`/components`<br>
  `/templates/objects`<br>
  `/templates/pages`<br>
`/src/` Original, unminified, uncompiled CSS and JS assets & manifest files.<br> 
`/src/sass` Original Sass Files. <br>

By Ignacio Díaz-Roncero

## Third-party dependencies

All third-party dependencies are handled using npm.

Run `npm install` to install them.

Clean Theme uses the following third-party projects:

- OkayNav for handling menus on resize avoiding the dreaded hamburger menu


[ThemingGuide]: https://pkp.gitbooks.io/pkp-theming-guide/content/en/css-less.html