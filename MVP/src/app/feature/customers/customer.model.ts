
/** Customer Model */
export class Customer {
  public id: number;
  public name: string;
  public age: number;
  public email: string;
  public gender: string;
 public phoneNumber:string;
  public category: string;
  constructor(
    id: number,
    name: string,
    age: number,
    email: string,
    gender: string,
    phoneNumber:string,
    category: string
  ) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.phoneNumber = phoneNumber;
    this.category = category;
  }
}

/** User Form Model */
export class CustomerForm {
  //   name:string,
  //   email:string,
  //   age:number,
  //   gender:string
  // }
  /** mentor Form Model */
  /** mentor Form Model */
  value(value: any) {
    throw new Error('Method not implemented.');
  }
  public name: string;
  public age: number;
  public email: string;
  public gender: string;
  public phoneNumber: string;
  public category: string;
  valid: any;
  constructor(
    name: string,
    age: number,
    email: string,
    gender: string,
    phoneNumber: string,
    category: string
  ) {
    this.name = name;
    this.age = age;
    this.email = email;
    this.gender = gender;
    this.phoneNumber =  phoneNumber;
    this.category = category;
  }
}

export class Category {
  public id: number;
  public name: string;
  constructor(
    id: number,
    name: string
  ) {
    this.id = id
    this.name = name
  }
}

// export interface filterdata{
//   name:string,
//   email:string,
//   age:number,
//   gender:string
// }


/** mentor Form Model */
  /** mentor Form Model */
  export class FilterForm {
    public name: string;
    public email: string;
    public age: number;
   
    public gender: string;
    constructor(
      name: string,
      email: string,
      age: number,
    
      gender: string
    ) {
      this.name = name;
      this.email = email;
      this.age = age;
      this.gender = gender;
    }
  }

  //cars
  export class cars {
    public id: number;
    public carname: string;
   
    constructor(
      id: number,
      carname: string,
     
    ) {
      this.id = id;
      this.carname = carname;
    }
  }



  // /** User Edit Details Model */
  // export class UserEditDetails {
  //   public CustomerForm: CustomerForm;
  //   public id: number;
  //   constructor(
  //     userForm: CustomerForm,
  //     id: number
  //   ) {
  //     this.CustomerForm = CustomerForm;
  //     this.id = id;
  //   }
  // }