import * as sorts from '../InsertionSort';

let expect = require('expect.js');

describe("[insertionSort]", () => {
   it("should be able to sort ", () => {
      const arr = [1,3,2,4,30];

      const result = sorts.insertionSort(arr);

      expect(arr).to.eql([1,2,3,4,30]);
   });
});