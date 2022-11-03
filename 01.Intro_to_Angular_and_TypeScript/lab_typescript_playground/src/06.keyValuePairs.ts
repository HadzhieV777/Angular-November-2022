class KeyValuePair<T, U> {
  private key?: T;
  private val?: U;

  setKeyValue(key: T, val: U): void {
    this.key = key;
    this.val = val;
  }

  display(): void {
    console.log(`Key = ${this.key}, val = ${this.val}`);
  }
}

export default KeyValuePair;

// Map-Methods 	                Descriptions
// map.set(key, value) 	       It is used to add entries in the map.
// map.get(key) 	              It is used to retrieve entries from the map. It returns undefined if the key does not exist in the map.
// map.has(key) 	              It returns true if the key is present in the map. Otherwise, it returns false.
// map.delete(key)               	It is used to remove the entries by the key.
// map.size()               	It is used to returns the size of the map.
// map.clear() 	              It removes everything from the map.
