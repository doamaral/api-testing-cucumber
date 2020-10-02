# api-testing-cucumber-supertest-chai
Testing Trello API using CucumberJS, Supertest, FakerJS, ChaiJS and Page Objects

## Run
In order to run, you need
 - Add API Key and Token provided by Trello as SO Environment variables
   1. YOUR_TRELLO_KEY
   2. YOUR_TRELLO_TOKEN
 - setup initial Data: Board and List ids (vide //TODO section) figuring it out how to generate everything in the `BeforeAll` hook

## //TODO
- Remove data dependency from
  - hooks.js
  - cardCreation.feature
  - cardUpdate.feature

## Extras
- ESLint
- Github Actions
