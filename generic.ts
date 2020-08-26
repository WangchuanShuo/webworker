class BeeKeeper {
    hasMask: boolean;
}

class ZooKeeper {
    nametag: string;
}

class Animal {
    numLegs: number;
}

class Bee extends Animal {
    keeper: BeeKeeper;
}

class Lion extends Animal {
    keeper: ZooKeeper;
}

function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
}

let a = createInstance(Lion);  // typechecks!
// createInstance(Bee).keeper.hasMask;  
a.numLegs = 10;
// console.log('a', Refl);