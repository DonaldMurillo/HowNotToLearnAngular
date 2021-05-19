# HOW IS IT ALL (NOT) SET UP
- Created using Dev Containers 
	- Needs Docker
	- Visual Studio Code
	- Remote Containers Extension
- On the folder you want to start your container, click the green icon at the bottom right corner of your VSC and select Reopen with container
- Added all relevant (to me) extensions to the .devcontainers file.
- Installed Angular CLI `npm install -g @angular/cli` (v12 was installed). https://angular.io/cli
- Created a new angular project using `ng new app-name --routing --style=scss`
	- `ng` is Angular CLI
	- `new app-name` is the command we ran, in this case it is a new app
	- `--routing` it is a command option to make a routing module
	- `--style=scss` it is a command option to make scss the default style sheet file/format. https://www.digitalocean.com/community/tutorials/using-sass-with-the-angular-cli

# STRUCTURE
- Each terrible tutorial will be it's own branch.
- Each tutorial will show you terrible features of Angular.
- Each tutorial will also tell you how (not) to do basic things right.

# REQUIREMENTS:
if you are not using a devcontainer:
- Install node version 14.17 LTS https://nodejs.org/en/download/
- install git version control (you do not need the GUI specially if you are using VSC) https://git-scm.com/downloads 

These previous packages install globally in your machine. They give you command line super powers.
- Using npm (installed with node) in a temrinal install the npm angular cli package `npm install -g @angular/cli` (v12 will be needed). https://angular.io/cli
- Create a folder in your documents to put your repositories in. Mine is called programming because I am very original
- open the temrinal inside the folder (if you do not know how to do that please learn it you will need it A LOT) and  type `git clone https://github.com/DonaldMurillo/HowNotToLearnAngular.git`
