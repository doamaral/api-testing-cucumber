const { Given, When, Then, AfterAll } = require("@cucumber/cucumber");
const expect = require('chai').expect;
const faker = require('faker');
const CardComponent = require("../../page-objects/components/cardComponent");

const card = new CardComponent();
