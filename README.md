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

[IMG of service blueprint]

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

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />

## Task 2: Access OrthoConsult Services

- Touchpoint: Website
- Screen: Login or Registration
- Goal: Register potential clients

<br />

### `Option 1: Sign Up`

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

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

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

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

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

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

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />

The verification badge is replaced with a cases overview which lets clients see what stage their cases, and by extentsion feedback, is at from a quick glance when they visit their dashboard. Building off of this, they are able to click the buttons under each section and see a filtered list of cases based on what stage they are at and what actions they can complete. I'll cover what that looks like later on though.

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />
<br />

## Task 6: Complete Case Evaluation

- Touchpoint: Evaluation Form
- Screen: Evaluation Form
- Goal: Digitize Patient Data & Records

<br />

Since new users won't have any cases attached to their account, they must first complete a case evaluation by clicking the new evaluation button on the bottom of the dashboard nav.

<br />

### `Part 1: Case Type`

Before getting into the case evaluation, users are prompted to categorize what type of case we will be looking at. This is done for three reasons:

1. Determines the base price of how much the case evaluation will cost (pending additional ceph tracing)
2. Future use in linking cases to view patient progress over time
3. Potential for conditionally toggling what is displayed as the next form step

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />

### `Part 2: Patient Info`

When a user gets to this section they are asked to fill out a variety of information pertaining to the identity and characteristics of a particular patient.

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

UX Note: This works well for users that select "New Case", as it assumes that this patient's details aren't currently provided to our system. However, when a user selects "Ongoing Case", it is under the assumption we have already collected most of the information they are providing and doing so again would just be a repeat of the information we already have. To alleviate this, this part of the form could be branching where presiding "New Case" selections leads to the current iteration of the form below, but "Ongoing Case" selections lead to a variation where users can select from a dropdown of their patients and edit what information they have already provided for this iteration of the case.

<br />

### `Part 3: Evaluation`

Regardless of case type, all users will fill out the same case evaluation fields. In terms of design, rather than having a long list of fields that users would fill out on one page I have instead opted to break down each question onto their own page. This was down for the following reasons:

1. Focuses the user's attention to one question at a time
2. Reduces the chance of a user missing a question in a wall of information
3. Encourages a user to fully consider each question as each field requires an input 

<br />

```javascript
    // EvaluationProvider.jsx (line 23 - 134)

    export const EvaluationProvider = ({ children }) => {
        const initialData = database; 
        const [ dataState, dataDispatch ] = useReducer(dataReducer, initialData);

        // lines 31 - 120

        return (
            <EvaluationContext.Provider 
                value={{ 
                    loading,
                    dataState, 
                    dataDispatch, 
                    submitCase }}>
                {children}
            </EvaluationContext.Provider>
        )
    }
```

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

UX Note: Due to the multi-step nature and length of this form, it was important to ensure users were aware of system status throughout their progress. This UX heuristic was acheived by:

1. Indicators for what step of the form they were on
2. What steps and information they might be expected to know as the form progressed
3. Progress header for current question in relation to total questions
4. Empty records container for anticipated content later on

<br />

### `Part 4: Records`

Using the drag and drop feature users are able to submit individual files, or multiple at a time. After providing a file, the records list on the right will updatee to showcase what files have been submitted, what they are currently called, and how large of a file it is. Should the user upload an exceptionally large file, they will be notified both on the offending file as well as on the bottom based on how large of an upload it will be. To alleviate these issues, users are able to remove any file they upload by clicking the options button (kebab) for each file listing.

Furthermore, users are also able to opt-in to an additional service of ceph tracing (if they don't have the file themself) by clicking the checkbox that will add $50 CDN to the price of the base case evaluation type they selected in Part 1.

<br />


```javascript
    // EvaluationProvider.jsx (line 23 - 134)

    export const EvaluationProvider = ({ children }) => {
        const initialRecords = records; 
        const [ recordState, recordDispatch ] = useReducer(recordReducer, initialRecords);

        // lines 31 - 120

        return (
            <EvaluationContext.Provider 
                value={{ 
                    loading,
                    recordState, 
                    recordDispatch, 
                    submitCase }}>
                {children}
            </EvaluationContext.Provider>
        )
    }
```

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

UX Note: There is currently a button labeled "Help" that would provide users with a guide for what records are required or suggested for submission as the client has had isssues in the past of people (their clients) not sending the right records needed to provide adequate feedback. This feature aims to guide users towards best practices should they be unaware or confused about what to provide. Additonally, an advanced option, denoted by the "Advanced" button could lead to an individual form where users could rename files or add notes to the files they submit for future use when reviewing their case.

<br />

### `Part 5: Confirmation & Submission`

After completing all required fields, users are finally able to submit their case evaluation once they agree to our terms of service and privacy policy. While users agree to both of these legal documents when they signup as a client, it is provided again just in-case.

<br />

```javascript
    // EvaluationProvider.jsx (line 92 - 120)
    
    const submitCase = async () => {
        const newCaseId = uuidv4();
        setLoading(true);

        await Promise
            .all([
                uploadData(newCaseId),
                uploadRecords(newCaseId),
                linkClient(newCaseId)
            ])
            .then(() => {
                // lines 103 - 111
                history.push(`/dashboard/cases?filter=None&case=${newCaseId}`);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => 
                setLoading(false)
            );
    };
```

<br />

```javascript
    // EvaluationProvider.jsx (line 32 - 42)
    
    const uploadData = (newCaseId) => {
        firestore.collection("cases")
            .doc(newCaseId)
            .set(dataState)
            .then(() => {
                console.log("Success");
            })
            .catch(error => {
                console.log(error);
            });
    }
```

<br />

```javascript
    // EvaluationProvider.jsx (line 45 - 69)
    
    const uploadRecords = (newCaseId) => {
        const storageRef = storage.ref(newCaseId);
        {recordState.records.map((item) => {

            if (item.id !== "base64") {
                storageRef.child(item.id)
                    .put(item.meta)
                    .then(() => {
                        console.log("Records Uploaded")
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            } else {
                storageRef.child(item.name)
                    .putString(item.meta.file, 'data_url')
                    .then(() => {
                        console.log("Records Uploaded")
                    })
                    .catch((error) => {
                        console.log(error)
                    })
            }
        })}
    }
```

<br />

```javascript
    // EvaluationProvider.jsx (line 72 - 89)
    
    const linkClient = (newCaseId) => {
        firestore.collection("clients")
            .doc(auth.currentUser.uid).collection("cases")
            .doc(newCaseId)
            .set({
                uid: newCaseId,
                type: dataState.caseType,
                patient: dataState.patient,
                createdAt: new Date(),
                status: "Awaiting payment"
            })
            .then(() => {
                console.log("Case linked to client")
            })
            .catch((error) => {
                console.log(error)
            })
    }
```

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

UX Note: Before submitting a user may want to look over the content they have provided to ensure they have everything submitted properly. This is especially the case given how what information they provided is used to provided curated feedback where incorrect information could go on to negatively influence they type of treatment a patient recieives. Due to the importance of getting information correct, an option to tab between viewing records provided with details provided would allow users to quickly check their details for errors without having to go back through the form and ensure they submit the case details sooner.

<br/>
<br />

## Task 7: Confirm Submission

- Touchpoint: Dashboard or Email
- Screen: Dasboard Case # or Personal Email
- Goal: Provide visibility of case status

<br />

### `By Dashboard (Primary)`

After submitting their case evaluation, users are redirected back to the cases page of their dashboard with a digitized documentation of the case file. From this screen users can look over the data and records they just submitted.

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />

### `By Email (Secondary)`

While users are automatically redirected back to their dashboard after submitting, they also receive a case confirmation to their email as backup. This provides a quick way to get back to their case details if they aren't actively using our dashboard.

<br />

```javascript
    // EvaluationProvider.jsx (line 72 - 89)
    
    const submitCase = async () => {
        const newCaseId = uuidv4();
        setLoading(true);

        await Promise
        
            // line 97 - 101
            
            .then(() => {
                fetchFromAPI('create-invoice', {
                    body: { 
                        customer_uid: auth.currentUser.uid, 
                        invoice_items: {
                            caseType: dataState.caseType,
                            cephalometric: dataState.cephalometric
                        }
                    },
                });
                history.push(`/dashboard/cases?filter=None&case=${newCaseId}`);
            })
            
            // line 114 - 119
    };
```

<br />
<br />

## Task 8: Access Case Invoice

- Touchpoint: Dashboard or Email
- Screen: Dasboard Case # or Personal Email
- Goal: Ensure compensation for expected work

<br />

### `By Dashboard (Primary)`

At the top of the case page users are presented with 

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />

### `By Email (Secondary)`

Alternatively, users also are emailed

<br />

```javascript
    // EvaluationProvider.jsx (line 72 - 89)
    
    const submitCase = async () => {
        const newCaseId = uuidv4();
        setLoading(true);

        await Promise
        
            // line 97 - 101
            
            .then(() => {
                fetchFromAPI('create-invoice', {
                    body: { 
                        customer_uid: auth.currentUser.uid, 
                        invoice_items: {
                            caseType: dataState.caseType,
                            cephalometric: dataState.cephalometric
                        }
                    },
                });
                history.push(`/dashboard/cases?filter=None&case=${newCaseId}`);
            })
            
            // line 114 - 119
    };
```

<br />
<br />

## Task 9: Pay Case Invoice

- Touchpoint: Stripe
- Screen: Stripe Hosted Invoice
- Goal: Provide secure payment handling

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />
<br />

## Task 10: Confirm All Actions are Completed

- Touchpoint: Dashboard
- Screen: Dashboard Case #
- Goal: Let clients know no further action is required

<br />

### `By Dashboard (Primary)`

At the top of the case page users are presented with 

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />

### `By Email (Secondary)`

Alternatively, users also are emailed

<br />
<br />

## Task 11: Download Case Feedback

- Touchpoint: Dashboard
- Screen: Dashboard Case #
- Goal: Provide downloadable feedback

<br />

### `By Dashboard (Primary)`

At the top of the case page users are presented with 

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />

### `By Email (Secondary)`

Alternatively, users also are emailed

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
