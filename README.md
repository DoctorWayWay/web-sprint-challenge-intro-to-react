# Intro to React Sprint Challenge

**Read these instructions carefully. Understand exactly what is expected _before_ starting this Sprint Challenge.**

This challenge allows you to practice the concepts and techniques learned over the past sprint and apply them in a concrete project. This sprint explored **introductory React**. During this sprint, you studied **React components and advanced styling**.

In your challenge this week, you will demonstrate your mastery of these skills by creating **a Star Wars page** using data from an API.

This is an individual assessment. All work must be your own. All projects will be submitted to Codegrade for automated review. You will also be given feedback by code reviewers. For more information on the review process [click here.](https://www.notion.so/lambdaschool/How-to-View-Feedback-in-CodeGrade-c5147cee220c4044a25de28bcb6bb54a)

You are not allowed to collaborate during the sprint challenge.

## Project Set Up

- [x] Fork and clone the repo. Delete your old fork from Github first if you are repeating this Unit.
- [x] Open the assignment in Canvas and click on the "Set up git" option (Or, depending, if you see something along the lines of 'Load Sprint Challenge Submission in a new window' click that).
- [x] Wire your fork to Codegrade using the "Click here for instructions on setting up Git submissions" link, select Github, authorize Github.
- [x] Push your first commit: `git commit --allow-empty -m "first commit" && git push`. MAKE SURE TO PUSH TO MAIN, YOU NO LONGER NEED TO CREATE A NEW BRANCH!!
- [x] Make commits often! PUSH TO MAIN!!!
- [x] You can run tests locally by running npm run test.
- [x] Check to see that Codegrade has accepted your git submission.

## Project Instructions

### Introduction

In this challenge you will create a web page that presents a styled list of characters obtained from an API. Being able to render out data to a web page is a large part of what JavaScript developers do, this challenge assesses your ability to achieve such a task.

In meeting the minimum viable product (MVP) specifications listed below, your project might look somewhat similar to the solution examples below:

[Example](https://tk-assets.lambdaschool.com/b011a132-0916-4ed2-8955-14192de03a75_sample-screenshot.png)

[Another example](https://tk-assets.lambdaschool.com/3b82c793-2352-4d4d-a81d-e55bf350f7bd_sample-screenshot2.png)

### Instructions

Your finished project must include all of the following requirements:

- [ ] Use the endpoint `[GET] https://swapi.dev/api/people` (mocked in [msw](https://github.com/mswjs/msw)) to obtain characters.
- [ ] Set the list of characters into state.
- [ ] Render your characters to the DOM:

  1. Build a React component named 'Character' to render an individual character.
  1. Map over the list in state, and for each character render a Character to the page.
  1. Each rendered character must display its name in the DOM (e.g. "Luke Skywalker").
  1. The character's name can't be hard-coded into the HTML. This data must be obtained from the API.
  1. The components must be styled with **styled-components**.

  **Notes:**

- Data obtained from the endpoint using browser-run JavaScript is mocked with [msw](https://github.com/mswjs/msw).
- If you test the endpoint using HTTPie or Postman you will obtain different results, as msw won't intercept the request.
- You are welcome to create additional files but **do not move or rename existing files** or folders.
- Do not alter your `package.json` file except to install extra libraries.
- The `start` process can sometimes choke after adding new dependencies and may need to be restarted.
- In your solution, it is essential that you follow best practices and produce clean and professional results.
- Schedule time to review and polish your work, including spell-checking and grammar-checking.
- It is better to submit a challenge that meets MVP than one that attempts too much and does not.

### Stretch Goals

After finishing your required elements, you can push your work further. These goals may or may not be things you have learned in this module but they build on the material you just studied. Time allowing, stretch your limits and see if you can deliver on any the following optional goals:

- [ ] Make the Character component more complex and break it into several subcomponents.
- [ ] Use the endpoint `[GET] https://swapi.dev/api/films` (mocked in msw) to obtain movie information to render with the characters.
- [ ] Create a helper function in separate module to remove unneeded information from the API data, before putting it in state.
- [ ] Create transitions or animations with styled-components.
- [ ] Use Promise.all to resolve an array of promises.

## Submission format

- [ ] Submit via Codegrade by committing and pushing any new changes to the main branch.
- [ ] Check Codegrade for automated feedback.
- [ ] Check Codegrade in the days following the Sprint Challenge for reviewer feedback.
- [ ] Any changes pushed after the deadline will not receive any feedback.

## Interview Questions

Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. Put your answers underneath the questions:

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.
   - React JS is an open source JavaScript library that helps developers build user interface components and manage state with far more ease when compared to vanilla JavaScript. React also provides the JSX language, which is like HTML in JavaScript. Creating elements in JSX is immensly faster than creating elements in vanilla JavaScript. The ReactDOM library (which should be used with React) allows developers to render components and state changes to the DOM in a more optimized way. ReactDOM creates a virtual DOM, and the virtual DOM gets updated, then compared to the real DOM, and only makes changes to what has been changed, rather than rebuilding the entire DOM with each update.
2. Describe component state.
   - Component state is basically data used in a components that is ment to be changed. Let's say I have a React app that has an image of a dog, and a button right under the image that says "Click me for new dog". First, I will import the `useState` hook from React. Now I can manage state with ease. I would create a state hook called dogImage that holds a url of a dog image, and with that a method called `setDogImage()`. This is all done through the command `const [dogImage, setDogImage] = useState();` (thanks React). Now that I have a state of `dogImage`, I will place `dogImage` into my component as the source attribute for my image element, that way the image can change with the state of the dog image. Now I would set an on click event to my button that fetches an image from a dog API and sets my dog image with to the response data from the API request (`setDogImage(response)`). Hopefully the dog API has it set to respond with a random dog image on each request. Since the image tag's source attribute in our component is using `dogImage` as its value, the React app now has a component state that holds a random dog image with each click of the button under the image.
3. Describe props.
   - Props are properties passed into components. They hold information that the component will use to fill its content. Props can be passed down to child components, who will need to access the same data as their parent. Unlike state, props should never be altered.
4. What are side effects, and how do you sync effects in a React component to changes of certain state or props?
   - A side effect is a change that occurs outside of an executed function by executing that function. For example, if I have a component that uses a state hook called fruit, and something changes the state of the fruit, a side effect will have occured. I can use side effects in React with the `useEffect` hook from React. The use effect hook takes two inputs, a callback or anonymous function, and a variable to sync with, which is inputed as an array. It would look something like this: `useEffect(function, [what to sync to])`. The `useEffect` function can sync to multiple things by simply adding more things to the array. Here is another example using an arrow funtion: `useEffect(() => {requesting a responce from an API}, [thing1, thing2, thing3])`. If you leave the second parameter empty, the effect hook will run with every single change (which can be a bad thing).
