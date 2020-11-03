# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @hermit_at/lotide`

**Require it:**

`const _ = require('@hermit_at/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: return only the first item of an array
* `tail(...)`: return all items of an array EXCEPT the first
* `middle(...)`: return the item(s) in the midpoint of an array
* `countLetters(...)`: return an object that displays the # of times each letter appears in a string
* `countOnly(...)`: return the number of instances the desired item(s) appear in an array/string
* `eqArrays(...)`: determine if the contents and structure of two arrays are equal
* `eqObjects(...)`: determine if the contents and structure of two objects are equal
* `findKey(...)`: find the first key within an object that contains the desired key-value pair
* `findKeyByValue(...)`: return the name of the key within an object that contains the desired value
* `flatten(...)`: return the contents of a nested array in a single array
* `letterPositions(...)`: return all of the index positions that letters appear in a string
* `map(...)`: return an array based on the result of a callback function exceuted on an array
* `takeUntil(...)`: return all items in an array that appear BEFORE the desired stopping value
* `without(...)`: filter an array to return all items that did not appear within our comparable array