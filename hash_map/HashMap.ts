// export class HashMap<K,V>{
//     size : number
//     hashTable : Entry<K,V>[];
//
//     constructor() {
//         this.size = 16;
//     }
//
//     set(key : K, val : V){
//         const hash = Number(key) % 16;
//         let node = this.hashTable[hash];
//         if(!node){
//             this.hashTable[hash] = new Entry<K, V>(key, val);
//         }else{
//
//         }
//     }
//
//     get(key : K) : V{
//         return new V();
//     }
// }
//
// class Entry<K,V>{
//     key : K
//     value : V
//     next : Entry<K,V>
//
//     constructor(key : K, value : V) {
//         this.key = key;
//         this.value = value;
//     }
// }
//
// function mapMain(){
//     let mp = new HashMap<number, number>();
//     mp.set(1,1);
//     mp.get(1);
// }
//
// mapMain();