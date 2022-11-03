class Data {
    constructor(
      public method: string,
      public uri: string,
      public version: string,
      public message: string,
      public response: string = 'undefined',
      public fulfilled: boolean = false,
    ) {}
  }

export default Data;