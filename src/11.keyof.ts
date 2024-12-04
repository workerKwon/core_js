type Person = {
    name: string;
    age: number;
}

const person: Person = {
    name: 'tiger',
    age: 20
}

function getProperty(obj: Person, key: keyof Person) {
    return obj[key]
}

getProperty(person, 'name');

function validCssProperty<T extends keyof CSSStyleDeclaration, A, B>(prop: T, se: A, fi: B): boolean {
    return prop in document.body.style
}

validCssProperty(1, 'color', 'red')














const product = {
    id: 1,
    name: 'mac-book',
    price: 3000000
}

function setProperty<T, K extends keyof T>(product: T, key: K, value: T[K]): T {
    product[key] = value
    return product
}

setProperty(product, 'price', 1000)















const products = [
    { name: 'mac', price: 300 },
    { name: 'win', price: 800 },
    { name: 'linux', price: 100 },
]


function getProperties<T, K extends keyof T>(products: T[], key: K): T[K][] {
    return products.map(product => product[key])
}


getProperties(products, 'name')