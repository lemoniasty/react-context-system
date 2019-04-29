## Context vs Redux Recap

### What Redux does?
* Distributes data to various components,
* Centralizes data in a store,
* Provides mechanisms for changing data in the store.

### What Context does?
* Distributes data to various components.

## Why still use a Redux in any serious application we plan to work on?

* With Redux we have excellent documentation,
* With Redux there are extremely well-known design patterns. Online there are dozens of hundreds of thousands of 
  different tutorials that tell you exactly how to work with Redux and how to handle a variety of different scenarios,
* Tremendous amount of Open Source libraries.

## Why we would use Context?

* With Context, we don't have to use an extra library and... that's it.

By using a context there are some challenges (eg. hard to build a "store" component with crosscutting concerns).

## So in summary...

It is still better to stick with Redux ;)