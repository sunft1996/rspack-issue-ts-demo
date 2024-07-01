import { a } from '@alias/a';
import { b } from '@alias/b';

const xhr = { status: 200 }
console.log(( xhr || "text" ) !== "text"  || typeof xhr !== "string")

console.log(a, b);
