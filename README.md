# This is a guid to setup a development enviroment using this template

## Software you need to have installed

- [ ] [Shopify Themekit](https://shopify.dev/tools/theme-kit/getting-started)
- [ ] It's recommended to install extensions like Prettier


## Setup the environment

- [ ] Create a new repository using this template
- [ ] `git clone` the repository to your machine
- [ ] duplicate the `config.example.yml` and change the name to `config.yml`
- [ ] Enter Store details (enter the ID for your new Development Theme)

## How to develop

* Your task is to implement a About us page, all of your HTML/Liquid needs to be put in the `sections/page-about-us.liquid`
* Put your CSS in the `custom.css` in the `assets` folder
* Put your JS in the `custom.js` in the `assets` folder

## Challenge

Here is the [prototype](https://www.figma.com/file/dVNRDkZ62MDp61aepGSFKV/Untitled?node-id=1%3A7)

* Create a small about us page. All Elements (Texts, Images, URLs) should be easily changable for a potential customer and therefore made with the Section Schema (check links below)
  * You can obviously first create a static page and change to dynamic later on
* Small Javascript challenge: When the `Follow us now` button is clicked, open a browser dialog and ask for the email address, when a input is sent changed the color of the button to green and the text to 'Thanks!' (if possible switch back to inital status after 3 seconds)
* For the image after the quote, it'll be a square input. **Make it round :)**
* The Buttom `our products` should link to `collections/all`


## Important Links

* [Intro into Liquid](https://shopify.dev/docs/themes/liquid/reference)

* [Section Schema](https://shopify.dev/docs/themes/sections#static-and-dynamic-sections)
* [Schema Tutorial](https://www.shopify.com/partners/blog/how-to-create-your-first-shopify-theme-section)
* [Input Types](https://shopify.dev/docs/themes/settings#input-setting-types)
