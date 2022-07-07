import {Heap} from "./Heap";

test('should not throw error when insert', () => {
  let heap = new Heap<number>();

  heap.insert(5);
  heap.insert(6);
  heap.insert(3);


});

test('should not be full', () => {
  let heap = new Heap<number>();

  heap.insert(5);
  heap.insert(6);
  heap.insert(3);

  expect(heap.isFull()).toBe(false);
});

test('should not be empty', () => {
  let heap = new Heap<number>();

  heap.insert(5);
  heap.insert(6);
  heap.insert(3);

  expect(heap.isEmpty()).toBe(false);
});

test('should return max value', () => {
  let heap = new Heap<number>();

  heap.insert(5);
  heap.insert(6);
  heap.insert(3);

  expect(heap.max()).toEqual(6);
});

test('should remove the max value', () => {
  let heap = new Heap<number>();

  heap.insert(5);
  heap.insert(6);
  heap.insert(3);
  heap.remove()

  expect(heap.max()).toEqual(5);
});

test('should remove and return the max value', () => {
  let heap = new Heap<number>();

  heap.insert(5);
  heap.insert(6);
  heap.insert(3);
  heap.insert(7);

  expect(heap.remove()).toEqual(7);
});