import 'reflect-metadata'
let obj = {
    age: 23
}

Reflect.defineMetadata('age', 'hello', obj);
console.log(Reflect.getOwnMetadataKeys(obj));
console.log(Reflect.getOwnPropertyDescriptor(obj, 'age'));
console.log(Reflect.getMetadataKeys(obj));
console.log(Reflect.get);

console.log('obj', obj);

