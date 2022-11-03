abstract class Melon {
  public weight: number;
  public melonSort: string;
  public arrayMelon: string[];

  constructor(weight: number, melonSort: string) {
    if (new.target === Melon) {
      throw new TypeError("Abstract class cannot be instantiated directly!");
    }
    this.weight = weight;
    this.melonSort = melonSort;
    this.arrayMelon = [];
  }

  public getWeight(): number {
    return this.weight;
  }

  public getMelonSort(): string {
    return this.melonSort;
  }

  public toString(): string {
    return `Sort: ${this.melonSort}\n`;
  }
}

export class Watermelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
    this.arrayMelon.push("Water");
  }

  public get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  public toString(): string {
    return (
      `Element: ${this.arrayMelon[0]}\n` +
      super.toString() +
      `Element Index: ${this.elementIndex}`
    ); // Idex започваше с малка буква
  }
}

export class Firemelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
    this.arrayMelon.push("Fire");
  }

  public get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  public toString(): string {
    return (
      `Element: ${this.arrayMelon[0]}\n` +
      super.toString() +
      `Element Index: ${this.elementIndex}`
    ); // Idex започваше с малка буква
  }
}

export class Earthmelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
    this.arrayMelon.push("Earth");
  }

  public get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  public toString(): string {
    return (
      `Element: ${this.arrayMelon[0]}\n` +
      super.toString() +
      `Element Index: ${this.elementIndex}`
    ); // Idex започваше с малка буква
  }
}

export class Airmelon extends Melon {
  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
    this.arrayMelon.push("Air");
  }

  public get elementIndex(): number {
    return this.weight * this.melonSort.length;
  }

  public toString(): string {
    return (
      `Element: ${this.arrayMelon[0]}\n` +
      super.toString() +
      `Element Index: ${this.elementIndex}`
    ); // Idex започваше с малка буква
  }
}

export class Melolemonmelon extends Watermelon {
  public counter: number;
  public elArr: string[];
  public element: string;

  constructor(weight: number, melonSort: string) {
    super(weight, melonSort);
    this.element = "Water";
    this.counter = 0;
    this.elArr = ["Water", "Fire", "Earth", "Air"];
  }

  public morph(): void {
    const currentEl = this.elArr.shift();
    if (typeof currentEl == "string") {
      this.elArr.push(currentEl);
      this.element = this.elArr[0];
    }
  }

  public toString(): string {
    return `Element: ${this.element}\nSort: ${this.melonSort}\nElement Index: ${this.elementIndex}`;
  }
}
