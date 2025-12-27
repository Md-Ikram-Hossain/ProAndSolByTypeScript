# TypeScript Interview Questions – সহজ ভাষায় ব্যাখ্যা

এই প্রোজেক্টে TypeScript-এর গুরুত্বপূর্ণ Interview Questions-এর সহজ ও সংক্ষিপ্ত ব্যাখ্যা দেওয়া হয়েছে।  
বাংলা ভাষায় উদাহরণসহ ব্যাখ্যা করা হয়েছে, যাতে নতুনদের জন্যও বোঝা সহজ হয়।  

---

##  বিষয়সমূহ

1. Interface ও Type-এর পার্থক্য
2. Declaration Merging
3. keyof কীওয়ার্ডের ব্যবহার
4. any, unknown, এবং never টাইপ
5. Enum – Numeric ও String
6. Union এবং Intersection Types

---

## 1. Interface ও Type

TypeScript-এ `interface` এবং `type` দুটোই অবজেক্টের স্ট্রাকচার নির্ধারণ করতে ব্যবহার হয়।  

### **Interface**
```ts
interface User {
  name: string;
}

interface Admin extends User {
  role: string;
}

```
## 2. keyof কী 

keyof কোনো object type-এর সব property name কে union type হিসেবে রিটার্ন করে।



```ts
type Person = {
  name: string;
  age: number;
  isStudent: boolean;
};

type PersonKeys = keyof Person; // "name" | "age" | "isStudent"
```

## 3 any, unknown, never

any

any টাইপ TypeScript-এর চেক বন্ধ করে দেয়।

```ts
let value: any = 123;
value = "hello";
value.toUpperCase(); // OK
```
unknown

unknown হলো any-এর নিরাপদ সংস্করণ।
যেকোনো মান রাখা যায়, তবে ব্যবহার করার আগে টাইপ চেক করতে হয়।

```ts
let value: unknown = "hello";

value.toUpperCase(); //  Error

if (typeof value === "string") {
  value.toUpperCase(); //  Safe
}
```
never

যে ফাংশন কখনো রিটার্ন হয় না বা error ছোড়ে, তার জন্য never ব্যবহার হয়।

```ts
function fail(msg: string): never {
  throw new Error(msg);
}
```


## 4 Enum

Enums ব্যবহৃত হয় নির্দিষ্ট কিছু constant value একত্রে রাখতে।

Numeric Enum

```ts
enum Status {
  Pending,    // 0
  Active,     // 1
  Completed   // 2
}

const s: Status = Status.Active;
```

String Enum

```ts
enum Role {
  Admin = "ADMIN",
  User = "USER",
  Guest = "GUEST",
}
```

##  5. Union ও Intersection Types

Union Type

একটি value একাধিক টাইপের যেকোনো একটি হতে পারে

```ts
let value: string | number;
value = "Hello";
value = 42;
```

Intersection Type

একাধিক টাইপ একত্রে combine হয় — সব properties থাকতে হবে।

```ts
type A = { name: string };
type B = { age: number };

type Person = A & B;

const p: Person = {
  name: "Dadu",
  age: 24,
};
```




        
