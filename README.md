>In this Typescript based multi step React I used React Context to manage state for multiple forms across multiple tabs.


[LIVE LINK](https://priceless-clarke-c7acf9.netlify.app/) 

![Alt Text](https://github.com/venky4c/multi-step-form-router/blob/master/dist/src/multi-step.gif)

**Key Learnings**

- Implementing [React Context](https://github.com/venky4c/multi-step-form-router/blob/master/dist/src/components/SignupFormContext.tsx) using TS was a challenge due to the additional Types and Interfaces to be declared upfront
- [Custom hook](https://github.com/venky4c/multi-step-form-router/blob/master/dist/src/components/ProfileForm.tsx) **useForm** from the *react-hook-form* library is used. This has many inbuilt capabilities for custom messages, validation and error handling.
- **useHistory** hook from *React Router* is used to navigate between tabs
- Tabs are conditionally disabled if the user is not yet permitted to reach a tab
- Checking if the object 
  ````javascript
  isEmpty(obj){
        return (Object.keys(obj).length === 0) 
      }
  ````
  does not work in TS scenario as we have already initialized the useState hook with some empty strings. Finding [alternate solution](https://github.com/venky4c/multi-step-form-router/blob/master/dist/src/components/SignupFormContext.tsx) was a good challenge.
- Dark mode was implemented using an external library that requires [just one line of code](https://github.com/venky4c/multi-step-form-router/blob/master/dist/public/index.html)
