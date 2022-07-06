import Queue from "./Queue";

test('should not be false', () => {
  let queue = new Queue(4);

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);

  expect(queue.isEmpty()).toBe(false);
});

test('should be empty', () => {
  let queue = new Queue(4);

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);

  expect(queue.isEmpty()).toBe(false);
});

test('should return first element', () => {
  let queue = new Queue(4);

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);

  expect(queue.dequeue()).toEqual(10);
});


test('should return sizes of a queue', () => {
  let queue = new Queue<number>(4);

  queue.enqueue(10);
  queue.enqueue(20);
  queue.enqueue(30);

  expect(queue.size()).toEqual(3);
});