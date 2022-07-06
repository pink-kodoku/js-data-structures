import LinkedList from "./LinkedList";


test('should return first inserted value', () => {
  let linkedList = new LinkedList();

  linkedList.addFirst(10)
  linkedList.addFirst(20)
  linkedList.addFirst(30)

  expect(linkedList.removeFirst()).toBe(30);
});

test('we can insert objects', () => {
  let linkedList = new LinkedList();

  let obj = {
    name: "Petia",
    age: 19
  }

  let obj2 = {
    name: "John",
    age: 25
  }

  let obj3 = {
    name: "Ann",
    age: 21
  }


  linkedList.addFirst(obj)
  linkedList.addFirst(obj2)
  linkedList.addFirst(obj3)

  expect(linkedList.removeFirst()).toEqual({
    name: "Ann",
    age: 21
  });
});

test('should return last inserted value', () => {
  let linkedList = new LinkedList();

  linkedList.addFirst(10)
  linkedList.addFirst(20)
  linkedList.addFirst(30)

  expect(linkedList.removeLast()).toBe(10);
});

test('check is LinkedList is empty, shoud return false', () => {
  let linkedList = new LinkedList();

  linkedList.addFirst(10)

  expect(linkedList.isEmpty()).toBe(false);
});

test('check is LinkedList is not empty, shoud return false', () => {
  let linkedList = new LinkedList();

  linkedList.addFirst(10)

  expect(linkedList.isEmpty()).toBe(false);
});

test('check is LinkedList is empty, shoud return true', () => {
  let linkedList = new LinkedList();

  linkedList.addFirst(10);
  linkedList.removeLast();

  expect(linkedList.isEmpty()).toBe(true);
});

test('check is LinkedList is empty, shoud return true', () => {
  let linkedList = new LinkedList();

  linkedList.addFirst(10);
  linkedList.removeFirst();

  expect(linkedList.isEmpty()).toBe(true);
});

test('check is LinkedList is empty, shoud return true', () => {
  let linkedList = new LinkedList();

  linkedList.addLast(10);
  linkedList.removeFirst();

  expect(linkedList.isEmpty()).toBe(true);
});

test('check is LinkedList is empty, shoud return true', () => {
  let linkedList = new LinkedList();

  linkedList.addLast(10);
  linkedList.removeLast();

  expect(linkedList.isEmpty()).toBe(true);
});

test('check is LinkedList contains value', () => {
  let linkedList = new LinkedList();

  linkedList.addLast(10);
  linkedList.addLast(20);

  expect(linkedList.contains(20)).toBe(true);
});

test("check is LinkedList doesn't contains value", () => {
  let linkedList = new LinkedList();

  linkedList.addLast(10);
  linkedList.addLast(20);

  expect(linkedList.contains(30)).toBe(false);
});


test("LinkedList should return an array of values", () => {
  let linkedList = new LinkedList();

  linkedList.addLast(10);
  linkedList.addLast(20);
  linkedList.addLast(30);
  linkedList.removeLast();

  expect(linkedList.toArray()).toEqual([10, 20]);
});


test("Clear the LinkedList", () => {
  let linkedList = new LinkedList();

  linkedList.addLast(10);
  linkedList.addLast(20);
  linkedList.addLast(30);
  linkedList.clear();

  expect(linkedList.isEmpty()).toBe(true);
});

test("Should reverse LinkedList", () => {
  let linkedList = new LinkedList();

  linkedList.addLast(10);
  linkedList.addLast(20);
  linkedList.addLast(30);
  linkedList.reverse();

  expect(linkedList.toArray()).toEqual([30, 20, 10]);
});

test("Should remove value", () => {
  let linkedList = new LinkedList<number>();

  linkedList.addLast(10);
  linkedList.addLast(20);
  linkedList.addLast(30);
  linkedList.remove(30);

  console.log(linkedList.removeLast())
//  expect(linkedList.toArray()).toEqual([30, 20, 10]);
});