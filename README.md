# OrthoConsult

OrthoConsult is a SaaS for providing clients with online orthodontic & orthopedic case evaluation and consultation services.

<br />
<br />

# Project Overview

This project is my first in-depth UX Development project that has a real life context that will be used by real people and has actual functionality as a product. In its current state, OrthoConsult is made of three parts, namely, a marketing website, multi-step case evaluation form, and a limited client-facing dashboard.

<br />

### Client constraints

Due to this, a lot of the design decisions made for this project are based on assumptions. 

Even though a lot of this project was based largely on assumptions, I worked collaboratively with the client to ensure elements like copy would be familiar to their specialized users to form a rough base to work with if they are released from their contract and I could then start worrking with actual users.

<br />

### MVP Features & Task Flow

Based on this overarching constaint, my focus for this project was in building out the basic functionality for this platform that would enable my client to continue providing their services should their contract end. Based on our talks on their business, the minimum functionality for this would rely on client-facing touchpoints with the following task flow which I have listed under the touchpoints they would most likely fall under.

[image of the following]
1. Website: Contextualize Service
2. Website: Sign Up Clients
2a. Website: Sign In Client
3. Dashboard: Account Overview (Ask verification)
4. Email -> Verify Client Email
5. Evaluation Form: Collect Data / Records
6. Dashboard: Display Provided Case Details
7a. Email -> Get invoice notice
7b. Dashboard -> Complete payment button
8. Stripe: Handle Payment processing
9: Dashboard: Display Case (updated status)
10a: Email -> Notification for Case Feedback + Direct Download
10b: Dashboard -> Click Download Feedback

<br />

### Tech stack

Based on these outlined features this project required the ability to store, view and manage data/files, process payments for the consulting services provided while linking all of the above to specific users. At the time of starting this project I had little to no experience in these areas but took the leap into learning Firebase and Stripe in order to add the needed functionality to this project.

In addition to these three major aspects, I also ventured into using CSS Grid for building better layouts rather than relying just on my previous flexbox knowledge. In all, the current (but growing) list of dependencies I relied on for this project are the following:

- [CSS Grid](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
- [Dependencies](https://firebase.google.com/)
  - [HTML Drag & Drop](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
  - [React Signatures](https://developer.mozilla.org/en-US/docs/Web/API/HTML_Drag_and_Drop_API)
  - [React Router](https://reactrouter.com/web/guides/quick-start)
- [React Hooks](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [useState](https://reactjs.org/docs/hooks-reference.html#usestate)
  - [useEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [useLayoutEffect](https://reactjs.org/docs/hooks-reference.html#useeffect)
  - [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)
  - [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)
  - [useRef](https://reactjs.org/docs/hooks-reference.html#useref)
- [Firebase](https://firebase.google.com/)
  - [FireStore](https://firebase.google.com/products/firestore)
  - [Storage](https://firebase.google.com/products/storage)
  - [Authentication](https://firebase.google.com/products/auth)
  - [Hosting](https://firebase.google.com/products/hosting)
  - [Functions](https://firebase.google.com/products/functions)
- [Stripe](https://stripe.com/)
  - [Invoices Extension](https://firebase.google.com/products/firestore)

<br />
<br />

# MVP Task Flow

## Task 1: Contextualize service

- Touchpoint: Website
- Screen: Landing Page

<br />

## Task 2: Access Client Services

- Touchpoint: Website
- Screen: Login or Register

<br />

### `Option 1: Sign Up`

### `Option 2: Sign In`

<br />


## Task 3: Dashboard introduction

- Touchpoint: Dashboard
- Screen: Dashboard Home

<br />

From this point the client is within the OrthoConsult ecosystem and can browse our client dashboard. However, in order to truly engage with our platform, they must verify their account with the email they used during client registration. Based on this, this opening page of the client has two versions: verified account and not.

<br />

### `Version 1: Encourage verification`

Since a user won't automatically be verified once they sign-up, all users will be presented with the following badge when they access the dashboard:

[img of verification badge]

Even if a user isn't interested in verifying right now, potentially because they won't be submitting case evaluations, they are instead able to focus in on the primary free aspects of OrthoConsult such as our resources and self study pages.

<br />


### `Version 2: Showcase Case status's`

Should a user verify their account, they will instead be presented with the following:

[img of case statuses]

The verification badge is replaced with a cases overview which lets clients see what stage their cases, and by extentsion feedback, is at from a quick glance when they visit their dashboard. Building off of this, they are able to click the buttons under each section and see a filtered list of cases based on what stage they are at and what actions they can complete. I'll cover what that looks like later on though.

<br />

## Task 4: Verify email

- Touchpoint: Email
- Screen: Automated Verification Email

<br />

## Task 5: Provide Case Data / Records

- Touchpoint: Evaluation Form
- Screen: Evaluation Form

<br />

## Task 6: View Submitted Case

- Touchpoint: Dashboard
- Screen: Dasboard Case #

<br />

## Task 7: Review Invoice

- Touchpoint: Dashboard or Email
- Screen: Dasboard Case # or Personal Email

### `Option 1: By Email`

### `Option 2: By Dashboard`

<br />

## Task 8: Pay Case Invoice

- Touchpoint: Stripe Hosted Invoice
- Screen: External Client Link

<br />

## Task 9: View Case Details

- Touchpoint: Dashboard
- Screen: Dashboard Case #

<br />

## Task 10: Download Case Feedback

- Touchpoint: Dashboard
- Screen: Dashboard Case #

### `Option 1: By Email`

### `Option 2: By Dashboard`

<br />

<br />
<br />

# Known Issues

As I am new to development, largely in uncharted territory as I work on this project, and am working solo, my focus has been more on getting rough functionality for this project down and then ensuring all bugs along the way are fixed. As it currently stands I am fully acknowledge the following issues with my code.

<br />
<br />

# Next Steps

Aside from incorporating the tasks that still need to be completed and fixing known bugs, my next step for this project would to get actual users into the process as it could influence how I go about designing the platform.

<br />
<br />
