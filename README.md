# Get started with webpack (with the help of this template repository)
1. open vscode terminal and type `npm install`.
	{npm will read 'package.json' and download necessary [node_modules]}
2. create a folder [src] and create 3 files inside of the folder.
	"src/template.html", "src/index.js", "src/styles.css"
3. put `import './styles.css'` at the top of the index.js file.
4. uncomment the last 2 rules in 'webpack.congif.js' if you want to load images.
	// the first rule applies when you use <img> in html
	// the second rule applies when you load images using javascript
5. after editing files, run `npx webpack`. this will create a folder [dist] and 
	there will be 2 files inside. "dist/index.html" and "dist/main.js".
	open the html file in a browser.
6. if you want something like the vscode live service extension, run `npx webpack serve`
	and type the url in your browser. {if you edit any of the javscript files in "src/"
	you have to run the command again.}
7. you could name your files inside of "src/" anything you want. however you have to 
	configure 'webpack.config.js'. change 'template.html' and 'index.js' to your liking.
	'burger.html', 'meow.js', 'evil.css' etc. for the css, use 
	`import './yourfilename.css` like mentioned in the step 3. 