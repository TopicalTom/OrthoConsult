# OrthoConsult

<br />

OrthoConsult is a SaaS for providing clients with online orthodontic & orthopedic case evaluation and consultation services. This project is my first in-depth full stack development project with a real life context and constraints. In developing this project I built out the base infastructure for a marketing splash page, a multi-step evaluation form and a dashboard that are supported by Firebase and Stripe integrations to enable storing of user case data/records and invoice generation for managing payment for the client's services.

- Timeline: Dec 2020 - Feb 2021
- Role: Full Stack Developer
- Type: Consultation

<br />
<br />

## The Challenge

At a high-level, my client provides orthodontic & orthopadic case consultation by looking over a patient's dental records and offering their professional advice on how to proceed with treatment. The need for this project arose from my clients' contract with a compnay potentially ending and them wanting a platform as backup to continue their services with the customer base they have built over the years.

<br />

## Business Context

In order for a customer to recieve my client's consultation services they are required to fill out a pre-case evaluation questionaire form and send any relevant dental records by email. This form (recreated below using non-personally identifying info) is crucial for their business as that it documents all the information needed to provide a thorough assessment of a patient's direction for treatment:

<br />
<a href="https://ibb.co/Wnxjytc"><img src="https://i.ibb.co/G7xN2TV/Ortho-Consult-Print-Form.jpg" alt="Ortho-Consult-Print-Form" border="0"></a>
<br />

However, while this is how my client currently conducts their business, they also informed me of the following paint points:

1. Some customers may not fill out (or miss) all the form fields
2. Some customers don't send all the dental records

This is troublesome for my client as an accurate assessment of a patient is only as good as the information they are provided as they themselves are not physically seeing a patient. Due to this, signing a legal contract with each customer every time they conduct an evaluation is absolutely necessary in their line of field.

<br />

## Customer Journey

While the core of my clients business revolves around the act of filling out the aforementioned form, it in a broader sense occurs within a larger customer journey that spans from initially learning about the service all the way to recieiving their case assessment. Unfortunately, due to the contract mentioned above, one of the major constraints was the inability to involve actual clients in this process as it would break the terms of agreement.

For this reason I was unable to involve actual customers in uncovering this journey and instead had to rely on my understanding of touchpoints presented to customers and what my client was able to explain about their business. As such, the following is an assumption of the high-level flow for the customer journey:

1. Visit the website
2. Navigate to the Case Evaluation Tab
3. Click the Pre-Case Evaluation Link
4. Download & Print Out the Pre-Evaluation Questionaire
5. Fills Out Questionaire
6. Emails Completed Questionaire with any relevant Dental Records

  [ 1 - 2 working Days]

7. Recieves a Legal/Payment Contract
8. Agrees to Terms and provides Payment

  [ 5 working Days ]
  
9. Recieves a Proposed Treatment Plan

<br />

## Project Objective

Taking all of this into consideration, any solution to my clients needs would have to enable the following:

1. Collecting and Storing Raw Data and Files
2. Communicate directly with potential customers
3. Ensure payment for providing Consulting Services

<br />
<br />

# Project Overview

<br />

## Service Flow

Using all of the information above, I constructed a rough flow chart for potential user types as they engaged with the projected experience from a front-end and back-end perspective. For the sake of clarity, the “Users” communicated below are the Client’s “Clients” while the Client is classified as the “Owner”.

<br />

<img src="https://i.ibb.co/FVQ1FZ0/Ortho-Consult-Flow.jpg" alt="Ortho-Consult-Flow" border="0">

<br />

While this diagram provides a comprehensive overview of where the OrthoConsult platform as a whole can go, my initial focus was building out a minimum valuable experience (MVP) based on what would enable the client to effectively continue their consulting work. Therefore, the following task flow and functionality was focused on:

<br />

## Tech stack

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
  - [Cloud Functions](https://firebase.google.com/products/functions)
  - [Trigger Emails Extension](https://firebase.google.com/products/firestore)
  - [Stripe Invoices Extension](https://firebase.google.com/products/firestore)
- [Stripe](https://stripe.com/)

<br />
<br />

# Project MVP

<br />

## Task 1: Gain understanding of service offering

- Touchpoint: Website
- Screen: Landing Page
- Goal: Contextualize value proposition

<br />

Upon arriving on the landing page, new leads are able to continue to register or scroll to learn more about what OrthoConsult has to offer.

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />

## Task 2: Access OrthoConsult Services

- Touchpoint: Website
- Screen: Login or Registration
- Goal: Register potential clients

<br />

Depending on whether the user is a pre-existing client or a new lead, they will visit either the "Registration" Screen or the "Sign In" Screen. Both of these

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />

### `Option 1: Register`

<br/>

Whenever a new lead completes the registration form by filling out their full name, email, province and agree to our terms of service; a new user is created with Firebase Auth using the "Create user with Email and Password" function.

<br />

```javascript
    // AuthProvider.jsx (line 18 - 22)
    
    const signup = (email, password) => {
        return auth.createUserWithEmailAndPassword(email, password);
    }
```

<br />

While this function links an email and password to our Firebases services it doesn't intrinsically store the other information a user provided. To alleviate this limitation, a useEffect hook was used to watch for Auth changes which:

- Calls the "Retrieve Client" function
- Sets "Current User" using a unique identifier from a snapshot of Firebase Auth
- Sets "Loading" state to false for adjusting button UI

<br />

```javascript
    // AuthProvider.jsx (line 64 - 88)
    
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const clientRef = await retrieveClient(userAuth);

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

When this "Retrieve Client" function is called, it will look for a document within the Clients FireStore database that matches the currrent userAuth uid. When no matching document exists it will instead create a new document with the registration form data and send a verification email to the current user. This in turn enables us to store all of the information they provided during registration.

<br />

```javascript
    // AuthProvider.jsx (line 38 - 61)
    
    const retrieveClient = async (userAuth, additionalData) => {
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

<br />

This functionality is achieved by calling the "Sign In With Email and Password" Firebase Auth function before using the UseEffect Hook from before to set the curent user.

<br />

```javascript
    // AuthProvider.jsx (line 23 - 25)

    const login = (email, password) => {
        return auth.signInWithEmailAndPassword(email, password);
    }
```

<br />

Should users decide to sign out, they are able to click on the profile icon on the top right of the dashboard and click the "Logout" button in order to return to a logged out state. This state is achieved by calling the Firebase Auth "Sign Out" function before being redirected back to the Landing Page.

<br />

```javascript
    // AuthProvider.jsx (line 28 - 30)

    const logout = () => {
        return auth.signOut();
    }
```

<br />

## Task 3: Determine next steps

- Touchpoint: Dashboard
- Screen: Dashboard Home
- Goal: Encourage users to verify account

<br />

When a client registers with OrthoConsult they are able to browse all aspects of the client dashboard but are largely limited to interacting with the resources and self-study sections. Due to this, whenever a client signs in to the OrthoConsult dashboard they are presented with prompts suggesting they continue to these sections of the website. This was important for two reasons:

1. It provides some value for providing personal details, even if they have no intent of using all our services
2. It lowers the barrier to transitioning to a full client as we essentially have their required account details on file

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

These features are placed on the Dashboard Home as it provides clients with a quick overview of system status and a quick way to navigate to an area of the dashboard that requires their immediate attention. This is achieved with the buttons under each section that redirects to the Dashboard Case Screen with a filtered list of cases based on what stage they are at and what actions they can complete. 

However, since new users won't have any cases attached to their account, they must first complete a case evaluation by clicking the new evaluation button on the bottom of the dashboard nav.

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />

## Task 6: Complete Case Evaluation

- Touchpoint: Evaluation Form
- Screen: Evaluation Form
- Goal: Digitize Patient Data & Records

<br />

### `Part 1: Case Type`

Before getting into the case evaluation, users are prompted to categorize what type of case we will be looking at. This is done for three reasons:

1. Determines the base price of how much the case evaluation will cost (pending additional ceph tracing)
2. Future use in linking cases to view patient progress over time
3. Potential for conditionally toggling what is displayed as the next form step

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

<br />

### `Part 2: Patient`

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

```javascript
    // dataReducer.js (line 2 - 47)

    function dataReducer(dataState, action) {
        const { name, value, group, path } = action.payload;
        switch (action.type) {

            // Stores Data at the top level of state
            case "STORE_DATA":
                return {
                    ...dataState,
                    [name]: value
                };

            // Stores Data within an object of state
            case "STORE_AS_NESTED_DATA":            
                return {
                    ...dataState,
                    [group]: {
                        ...path,
                        [name]: value
                    }
                }; 
            
            // line (23 - 42)

            default:
                return dataState;
        }
    }

    export default dataReducer;
```

<br />

<a href="https://ibb.co/Phbyz4V"><img src="https://i.ibb.co/J7bTF2S/Case-Evaluation-Step-1.png" alt="Case-Evaluation-Step-1" border="0"></a>

UX Note: Due to the multi-step nature and length of this form, it was important to ensure users were aware of system status throughout their progress. This UX heuristic was acheived by:

1. Indicators for what step of the form they were on
2. What steps and information they might be expected to know as the form progressed
3. Progress header for current question in relation to total questions
4. Empty records container for anticipated content later on

<br />

### `Part 4: Upload Records`

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

```javascript
    // recordReducer.js (line 2 - 58)

    function recordReducer(recordState, action) {
        switch (action.type) {
        
            // lines 5 - 32

            // Adds new record to records list
            case "ADD_RECORD":
                return {
                    ...recordState,
                    records: [
                        ...recordState.records,
                        action.payload
                    ]
                };  

            // Returns records of non-matching ID
            case "REMOVE_RECORD":
                const updatedRecords = recordState.records
                    .filter(item => item.id !== action.payload.id);

                return {
                    ...recordState,
                    records: [...updatedRecords]
                };

            default:
                return recordState;
        }
    }

    export default recordReducer;
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

```javascript
    // DashboardProvider.jsx (line 2 - 58)

    export function DashboardProvider({ children }) {

        // Gets Short-form Client Case listings
    
        const retrieveCase = (caseId) => {
            const caseRef = firestore.collection('cases').doc(caseId);

            // Retrievies data from Case FireStore Collection
            caseRef.get()
                .then((doc) => {
                    const data = doc.data();
                    setCaseDetails(data);
                    setCurrentCase(caseId);
                })
                .catch((error) => {
                    console.log(error);
                })
        }

        return (
            <DashboardContext.Provider 
                // line 
            </DashboardContext.Provider>
        )
    }
```

<br />

```javascript
    // DashboardProvider.jsx (line 2 - 58)

    export function DashboardProvider({ children }) {

        // Gets Short-form Client Case listings
    
        const retrieveRecords = async (caseId) => {
            const recordsRef = storage.ref();
            const folderRef = recordsRef.child(`${caseId}`);

            let images = [];
            const newImages = images;
        
            setLoading(true);
    
            // Retrievies data from Case Storage Collection
            await folderRef.listAll()
                .then((res) => {
                    res.items.forEach(imgRef => {
                        imgRef.getDownloadURL()
                            .then(url => {
                                const image = {
                                    title: "Image Title",
                                    src: url
                                }
                                newImages.push(image);
                            })
                            .catch(error => console.log(error))
                    })
                })
                .catch((error) => {
                    console.log(error);
                })
                .finally(() => setLoading(false))

            setCaseRecords(newImages)
        }

        return (
            <DashboardContext.Provider 
                // line 
            </DashboardContext.Provider>
        )
    }
```

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
                fetchFromAPI('create-email', {
                    body: { 
                        customer_uid: auth.currentUser.uid, 
                        email_items: {
                          emailType: 'case-submission',
                          caseData: dataState
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

# Next Steps

Aside from incorporating the tasks that still need to be completed and fixing known bugs, my next step for this project would to get actual users into the process as it could influence how I go about designing the platform.

<br />

- Phase 1
  - Incorporate updateInvoice Stripe Webhook
  - Add Email Notifications based on invoice changes
- Phase 2
- Phase 3

<br />
<br />
