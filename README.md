# AJO Integration Demo
This project is meant for demo purposes only.
The AJO integration is not in a production-ready state and still requires some manual steps to be performed.

## How to use
1. Setup sidekick with this repository.
2. Use either the preview or live environment, both are available for the demo.
3. In sidekick, there is an additional button called "AJO". It will open a small dialog to login and send the email to AJO.
4. Opening the AJO dialog for the first time will require you to login. This will generate a token which is valid for one day.
5. Click Login. It will open a new tab. Login to the Sites Internal organization. Any other organization will not work.
6. After logging in, the tab will close, or you might have to close it manually, depending on your browser.
7. The dialog will not refresh automatically. Refresh the page manually, then open the dialog again. In this step it will load the configuration, but it might not show it yet, and you have to refresh a second time.
8. Now you should see two input fields (name and description) and a button to send the email to AJO.
9. Clicking the "Send to AJO" button will not display you any success message or give you any feedback. It will just send the email to AJO in the background.
    
### Logging in again
After 24 hours, the token will expire and you have to login again.
However, the token is not cleared from the session storage, so you have to clear it manually.
1. Open the developer tools.
2. Go to the "Application" tab.
3. In the left sidebar, click on "Session Storage".
4. Click on the domain of the site.
5. In the top right corner, click on "Clear all".

It might be that IMS also saved some additional cookies that will prevent you from logging in again. In this case, you have to clear the cookies as well.
1. Open the developer tools.
2. Go to the "Application" tab.
3. In the left sidebar, click on "Cookies".
4. Click on the IMS domain.
5. In the top right corner, click on "Clear all".

## Environments
- Preview: https://main--email-ajo-integration--aemsites.hlx.page/demo-email
- Live: https://main--email-ajo-integration--aemsites.hlx.live/demo-email

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template and add a mountpoint in the `fstab.yaml`
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/aem-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)
