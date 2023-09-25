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

* `head(array)`: returns the first element of `array`
* `tail(array)`: returns an array containing all elements from `array` but excluding the first element.
* `middle(array)`: returns an array containing the middle element of `array`. Will return the two middle elements on arrays with even size.
* `assertArraysEqual(arr1, arr2)`: Creates a console output asserting that `arr1` and `arr2` are equal. Compares by element in arrays.
* `assertEqual(val1, val2)`: Creates a console output asserting that two primitive typed values are equal.
* `assertObjectsEqual(obj1, obj2)`: Creates a console output asserting that two objects are equal. Performs a property comparison.
* `countLetters(string)`: Returns an object containing letter properties with count of occurrences as value.
* `countOnly(arr, obj)`: Given an array of strings, and an object specifying what to count, returns a count of occurrences of the specified strings.
* `eqArrays(arr1, arr2)`: Performs deep equality comparison on two arrays.
* `eqObjects(obj1, obj2)`: Performs deep equality comparison on two objects.
* `findKey(obj, callback)`: Given object to search through, and a callback, returns key contained in object that returns true callback.
* `findKeyByValue(obj, value)`: Given object to search through, and a key as a string, returns key contained in object with value.
* `letterPositions(string)`: Given a string, returns an object of key:value pairs with keys of chars in sentence (excluding white-space) and a value array of indexes that the letter is found in sentence.
* `map(array, callback)`: Given an array, and callback, performs map function.
* `takeUntil(array, callback)`: Given an array and callback, iterates through array and returns all elements iterated through until callback returns true once. 
* `without(array1, array2)`: Returns an array with all elements in second array that were contained in first array.
* `flatten(array)`: Returns an array with all sub-arrays presented into one-dimensional array.