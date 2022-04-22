type Foo1<T> = T extends {a: string , b: string} ? string : T;

type T1 = Foo1<{a: string , b: number[]}> ;

const A1: T1 = {a:"Elmar" , b:[1,2,3]};
/*********************************************************************************************** */

type Foo2<T> = T extends {a: infer R , b: infer R} ? R : T;

type T2 = Foo2<{a: string , b: number[]}> ;

const F2: Foo2<{a: string , b: number[]}> = "Elmar";
const F3: Foo2<{a: string , b: number[]}> = [1,1,2,3];
const F4: T2 = "Eldar";
const F5: T2 = [1,2,3,4]

// _________________________________________Function Infer Type ________________________________//
type Bar<T> = T extends {a: (p1: infer U)=> void } ? U : never;
const BarFn: Bar<{a : (p: string)=> void}> = "Elmar";