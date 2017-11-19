import {InsertionSort} from '../InsertionSort';

let expect = require('expect.js');

describe("[InsertionSort]", () => {
   it("should be able to sort ", () => {
      const arr = [1,3,2,4,30];
      const result = InsertionSort(arr);
      expect(arr).to.eql([1,2,3,4,30]);

   });
});