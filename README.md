# NpmModuleTemplate
This is a simple base project for npm packages.

###Steps

0.- Make sure you have installed npm and nodeJs

1.- Initialize your own git repository.

2.- Configure your default npm data 

> npm set init-author-email "your.email@domain.com"

> npm set init-author-name "Your Name"

> npm set init-author-url "https://your-page.domain.com"

> npm set init-license "YourPreferredLicense"


for example:

> npm set init-author-email "hery.chemo@gmail.com"

> npm set init-author-name "Heriberto Reyes Esparza"

> npm set init-author-url "https://herychemo.github.io"

> npm set init-license "MIT"


2.1.- Also you might want to set:

> npm set save-exact = true

3.- Initialize your npm project

4.- Install base dev packages 

> npm install --save-dev babel babel-cli babel-core babel-eslint babel-preset-es2015 eslint eslint-config-airbnb-base eslint-plugin-import tap-spec tape

5.- Create folder structure and configuration files based on this project 

6.- Implement your module using ES2015, and tests.

7.- Enjoy
