import HashMap from "./HashMap";

test('should return first inserted value', () => {
  let hashMap = new HashMap<number, string>();

  hashMap.put(1, "Petia");
  hashMap.put(2, "John");
  hashMap.put(3, "Mary");
  hashMap.put(4, "ЛАкщалк");
  hashMap.put(5, "вз32лавз32а");

  expect(hashMap.get(3)).toBe("Mary");
});


test('should remove the value', () => {
  let hashMap = new HashMap<number, string>();

  hashMap.put(1, "Petia");
  hashMap.put(2, "John");
  hashMap.put(3, "Mary");
  hashMap.put(4, "ЛАкщалк");
  hashMap.put(5, "вз32лавз32а");
  hashMap.remove(3)

  expect(hashMap.get(3)).toBe(null);
});


