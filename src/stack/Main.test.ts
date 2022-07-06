import Stack from "./Stack";


test('stack should return correct size', () => {

  let stack = new Stack();
  stack.push(10)
  stack.push(20)
  stack.push(30)

  expect(stack.size()).toBe(3);
});

test('correctly pop items', () => {

  let stack = new Stack();
  stack.push(10)
  stack.push(20)
  stack.push(30)

  expect(stack.pop()).toBe(30);
});

test('should not be empty', () => {

  let stack = new Stack();
  stack.push(10)
  stack.push(20)
  stack.push(30)

  expect(stack.isEmpty()).toBe(false);
});

test('should be empty', () => {

  let stack = new Stack();
  stack.push(10)
  stack.push(20)
  stack.push(30)
  stack.pop()
  stack.pop()
  stack.pop()

  expect(stack.isEmpty()).toBe(true);
});

test('should peek the last item', () => {

  let stack = new Stack();
  stack.push(10)
  stack.push(20)
  stack.push(30)

  expect(stack.peek()).toBe(30);
});