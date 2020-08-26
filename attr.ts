// function readonly (target:any, name:any, desc:any):any {
//     console.log('target', target);
//     console.log('name', name);
//     console.log('desc', desc);
//     desc.writable = false;

//     return desc;
// } 

// let a = {
//     @readonly
//     name= 'wang'
// };

// console.log('a.name', a.name);
// a.name = 'li'
// console.log('a', a.name);


class Person {
    static MIN_AGE = 0;
    constructor(public name: string){
        name = name;
    }

    @duration
    request() {
      return new Promise((resolve, reject) => {
            setTimeout(() => {
            resolve({status: 0})
            }, 3000);
      })
    }
}

let aa = new Person('waa');
console.log('a.name', aa.name);

function duration(target, key, desc) {
    const { value } = desc;
    console.info('target ', target);
    console.info('key ', key, 'typeof key', typeof key);
    let _time = Date.now();
    desc.value = function(...args) {
        let res = value.apply(this, args);
        if (res && typeof res.then === 'function') {
            res.then(() => {
              console.log(`${key}() ==> 耗时:${Date.now() - _time}ms`);
            }, () => {
              console.log(`${key}() ==> 耗时:${Date.now() - _time}ms`);
            })
        } else {
            console.log(`${key}() ==> 耗时:${Date.now() - _time}ms`);
        }
        return res;
    }
    return desc;
}
var p = new Person('liuyan');
p.request();