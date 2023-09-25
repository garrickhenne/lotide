# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @garrickhenne/lotide`

**Require it:**

`const _ = require('@username/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(...)`: returns the first element of an array
* `tail(...)`: returns an array containing all elements from array but excluding the first element.
* `middle(...)`: returns an array containing the middle element of the array. Will return the two middle elements on arrays with even size.
* `assertArraysEqual(...)`: Creates a console output asserting that the two arrays passed in are equal. Compares by element in arrays.
* `assertEqual(...)`: Creates a console output asserting that two primitive typed values are equal.
* `assertObjectsEqual(...)`: Creates a console output asserting that two objects are equal. Performs a property comparison.
* `countLetters(...)`: Returns an object containing letter properties with count of occurrences as value.
* `countOnly(...)`: Given an array of strings, and an object specifying what to count, returns a count of occurrences of the specified strings.
* `eqArrays(...)`: Performs deep equality comparison on two arrays.
* `eqObjects(...)`: Performs deep equality comparison on two objects.
* `findKey(...)`: Given object to search through, and a callback, returns key contained in object that returns true callback.
* `findKeyByValue(...)`: Given object to search through, and a key as a string, returns key contained in object with value.
* `letterPositions(...)`: Given a string, returns an object of key:value pairs with keys of chars in sentence (excluding white-space) and a value array of indexes that the letter is found in sentence.
* `map(...)`: Given an array, and callback, performs map function.
* `takeUntil(...)`: Given an array and callback, iterates through array and returns all elements iterated through until callback returns true once. 
* `without(...)`: Returns an array with all elements in second array that were contained in first array.