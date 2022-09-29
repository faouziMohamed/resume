# Kutok CV

Build your static online resume by just adding your data to files validated by
following schema defined on typescript interfaces.

## how to use

### Adding data

1. Star and Fork this repo
1. Edit files on [src/data/resumeData](src/data/resumeData) folder to add your
   data to the resume. Each file represents a section of the resume.
1. Replace the image
   on [public/images/userProfilePicture.jpeg](public/images/userProfilePicture.jpeg)
   folder with
   your own image.
1. Generate your favicon by
   using wesbsite like [https://favicomatic.com/](https://favicomatic.com/)
   or [favicon.io](https://favicon.io/favicon-converter/)
   and replace the files on [public/images/favicon](public/images/favicon)
   folder.

### Building the resume

1. Install nodejs, yarn and typescript on your machine
1. Run `yarn install` to install dependencies
1. To test the resume locally run `yarn dev`
1. To build from nextjs to static files run `yarn build`
1. To serve the static files run `yarn start`

## Deploying to Vercel (recommended)

1. Create an account on [Vercel](https://vercel.com/)
1. Create a new project on vercel and connect it to your github account
1. Select the forked repo and deploy it
1. You can now access your resume on the url provided by vercel

## License

MIT License (MIT) - see [LICENSE](LICENSE) for more details
