class Box<T> {
  private _boxes: any[] = [];

  public add(el: T) {
    this._boxes.push(el);
  }

  public remove() {
    this._boxes.pop();
  }

  get count(): number {
    return this._boxes.length;
  }
}

export default Box;
