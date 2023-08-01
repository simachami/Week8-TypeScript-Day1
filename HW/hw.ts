
/*
Question #1

Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values  */

type CTStudent = {
    id:string,
    name:string,
    age:number,
    isTired:boolean,
    projectsCompleted:string[],
    pet?:string
}


 let student1 : CTStudent={
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}

let student22 : CTStudent= {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}

let student3 : CTStudent= {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
} 

console.log(student1)
console.log(student22)
console.log(student3)






/* 
Question #2

Write a function that will accept an object of type `Fruit`, the object of type Fruit could also be `null`.  If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function  */

type Fruit={
  color:string,
  shape:string
}

let apple:Fruit={color:"red", shape:"sphere"}
let eaten:Fruit|null=null

function fruitColor(fruit:Fruit|null):void{
    if(fruit !== null){
        console.log(fruit.color)
    } else {
        console.log('You ate my fruit already')
    }
}

fruitColor(apple)
fruitColor(eaten)

/* 
Question #3

Create a Intersection Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new intersection type */
type Book={
  isbn:string,
  title:string,
  author:string
}

type DigitalBook={
  fileType:string,
}

type EBooks = Book & DigitalBook

let mixedBooks: EBooks = {
    isbn:'125478541',
    title:'The world of books',
    author: 'David Bowie',
    fileType:'pdf'
}
console.log(mixedBooks)
/* 
Question #4

Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

- All ShopItems have an numeric id that can not be edited 
- All ShopItems have a price
- All ShopItems have a description
- Some ShopItems have a color
- All ShopItems have a Category represented with an enum 
    - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
- All ShopItems have a list of keywords used to help search for the ShopItem 
    - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

After Creating the `ShopItem` type create 3 items using this type */

enum Category{
    Shirts = "Shirts",
    Shoes = "Shoes",
    Pants = "Pants",
    Hats = "Hats"
}

type ShopItem = {
    readonly id:number,
    price:string,
    description:string,
    color?:string,
    category:Category,
    keywords:string[]
}

let ironMan: ShopItem = {
    id:1,
    price:"24.99",
    description:"A fancy shirt. Don't question it",
    color:"blue",
    category:Category.Shirts,
    keywords:["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]
}

let ironMan2: ShopItem = {
    id:2,
    price:"49.99",
    description:"Best shoes in town",
    category:Category.Shoes,
    keywords:["Fitness", "Sports", "Dress"]
}

let ironMan3: ShopItem = {
    id:3,
    price:"59.99",
    description:"A hat, but not just any hat",
    category:Category.Hats,
    keywords:["Boater", "Fedora", "Beanie"]
}

console.log(ironMan)
console.log(ironMan2)
console.log(ironMan3)