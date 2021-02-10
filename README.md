# OrthoConsult

OrthoConsult is a SaaS for providing clients with online orthodontic & orthopedic case evaluation and consultation services.

<br />
<br />

# Project Overview

This project is my first in-depth UX Development project that has a real life context that will be used by real people and has actual functionality as a product. In its current state, OrthoConsult is made of three parts, namely:

1. Marketing website 
2. Multi-step case evaluation form
3. Limited client-facing dashboard

<br />

### Client constraints

Due to this, a lot of the design decisions made for this project are based on assumptions. 

Even though a lot of this project was based largely on assumptions, I worked collaboratively with the client to ensure elements like copy would be familiar to their specialized users to form a rough base to work with if they are released from their contract and I could then start worrking with actual users.

<br />

### Service Blueprint

My focus for this project was in building out the basic functionality for this platform that would enable my client to continue providing their services should their contract end. Based on our talks on their business, the minimum functionality for this would rely on client-facing touchpoints with the following task flow.

[image of service blueprint]

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

## Task 1: Gain understanding of service offering

- Touchpoint: Website
- Screen: Landing Page
- Goal: Contextualize value proposition

<br />

[GIF of website scroll]

<br />

## Task 2: Access OrthoConsult Services

- Touchpoint: Website
- Screen: Login or Registration
- Goal: Register potential clients

<br />

### `Option 1: Sign Up`

[GIF of Sign Up Screen]

<br />

```javascript
    // AuthProvider.jsx (line 18 - 22)
    
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }
```

<br />

```javascript
    // AuthProvider.jsx (line 64 - 88)
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const clientRef = await createClient(userAuth);

                clientRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        uid: snapShot.id,
                        ...snapShot.data()
                    });
                })
                
                // lines 76 - 80

            } else {
                setCurrentUser(userAuth);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);
```

<br />

```javascript
    // AuthProvider.jsx (line 38 - 61)
    
    const createClient = async (userAuth, additionalData) => {
        if (!userAuth) { return };
    
        const clientRef = firestore.doc(`clients/${userAuth.uid}`);
        const snapShot = await clientRef.get();
    
        if (!snapShot.exists) {
            const { displayName, email } = userAuth;
            const createdOn = new Date();
    
            try {
                await clientRef.set({
                    displayName,
                    email,
                    createdOn,
                    ...additionalData
                });
                verifyClient();
            } catch (error) {
                console.log('error creating user', error.message)
            }
        }
        return clientRef;
    }
```

<br />

### `Option 2: Sign In`

[GIF of Sign In Screen]

<br />

```javascript
    // AuthProvider.jsx (line 28 - 30)

    const logout = () => {
        return auth.signOut();
    }
```

<br />

```javascript
    // AuthProvider.jsx (line 23 - 25)

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }
```

<br />


## Task 3: Determine next steps

- Touchpoint: Dashboard
- Screen: Dashboard Home
- Goal: Encourage users to verify account

<br />

When a client registers with OrthoConsult they are able to browse all aspects of the client dashboard but are largely limited to interacting with the resources and self-study sections. Due to this, whenever a client signs in to the OrthoConsult dashboard they are presented with prompts suggesting they continue to these sections of the website. This was important for two reasons:

<br />

1. It provides some value for providing personal details, even if they have no intent of using all our services
2. It lowers the barrier to transitioning to a full client as we essentially have their required account details on file

<br />

However, in order to truly engage with the platform they are required to verify their account using the email they signed up with. Since a user won't automatically be verified when they register, and may not even be aware it is something they should do, one of the first prompts of the Dashboard Home is a banner letting them know to check their personal email to complete account verification.

<br />

[img of verification badge]

<br />

## Task 4: Verify account email

- Touchpoint: Email
- Screen: Automated Verification Email
- Goal: Enable clear line of communication with client

<br />

```javascript
    // AuthProvider.jsx (line 33 - 35)
    
    const verifyClient = async () => {
        return await auth.currentUser.sendEmailVerification();
    }
```

<br />

## Task 5: Determine next steps

- Touchpoint: Dashboard
- Screen: Dashboard Home
- Goal: Contextualize case status

<br />

After verifying their account, users now have full access to the OrthoConsult platform and can now submit case evaluations whenever they want. In light of this change, the banner that previously prompted a user to verify their account is replaced by a cases overview based on where in the feedback process a case currently is at while the altenative actions (available to all users) maintains its spot at the bottom of the screen. 

<br />

[IMG New Dashboard Home]

<br />

The verification badge is replaced with a cases overview which lets clients see what stage their cases, and by extentsion feedback, is at from a quick glance when they visit their dashboard. Building off of this, they are able to click the buttons under each section and see a filtered list of cases based on what stage they are at and what actions they can complete. I'll cover what that looks like later on though.

<br />

[IMG of Cases Filtering]

<br />

## Task 6: Complete Case Evaluation

- Touchpoint: Evaluation Form
- Screen: Evaluation Form
- Goal: Digitize Patient Data & Records

<br />

Since new users won't have any cases attached to their account, they must first complete a case evaluation by clicking the new evaluation button on the bottom of the dashboard nav.

Note: the following also covers where I intend to go with the form, not just what I have currently built out.

<br />

### `Part 1: Case Type`

The first field a user is presented with asks for 

<br />

[IMG Case Evaluation Part 1]

<br />

### `Part 2: Patient Info`

When a user gets to this section they are asked to fill out a variety of information pertaining to the identity and characteristics of a particular patient.

<br />

[IMG Case Evaluation Part 1]

Note: This works well for users that select "New Case", as it assumes that this patient's details aren't currently provided to our system. However, when a user selects "Ongoing Case", it is under the assumption we have already collected most of the information they are providing and doing so again would just be a repeat of the information we already have. To alleviate this, this part of the form could be branching where presiding "New Case" selections leads to the current iteration of the form below, but "Ongoing Case" selections lead to a variation where users can select from a dropdown of their patients and edit what information they have already provided for this iteration of the case.

<br />

### `Part 3: Evaluation`

<br />

### `Part 4: Records`

<br />

### `Part 5: Confirmation & Submission`

<br/>

[IMG Case Evaluation]

<br />

## Task 7: Confirm Submission

- Touchpoint: Dashboard or Email
- Screen: Dasboard Case # or Personal Email
- Goal: Provide visibility of case status

### `Option 1: By Email`

### `Option 2: By Dashboard`

<br />

## Task 8: Access Case Invoice

- Touchpoint: Dashboard or Email
- Screen: Dasboard Case # or Personal Email
- Goal: Ensure compensation for expected work

### `Option 1: By Email`

### `Option 2: By Dashboard`

<br />

## Task 9: Pay Case Invoice

- Touchpoint: Stripe
- Screen: Stripe Hosted Invoice
- Goal: Provide secure payment handling

<br />

## Task 10: Confirm All Actions are Completed

- Touchpoint: Dashboard
- Screen: Dashboard Case #
- Goal: Let clients know no further action is required

### `Option 1: By Email`

### `Option 2: By Dashboard`

<br />

## Task 11: Download Case Feedback

- Touchpoint: Dashboard
- Screen: Dashboard Case #
- Goal: Provide downloadable feedback

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
