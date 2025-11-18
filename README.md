                                                              TypeScript Blog 
  1. What are some differences between interfaces and types in TypeScript?
    => 1.Interface এর মাধ্যমে declaration গুলো একসাথে একত্রিত করা ও Extend করা যাই,যা Type এর মাধ্যমে করা যাই না। 
       2.Type এর মাধ্যমে Unions,Tuples ও Primitives ইত্যাদি করা যাই, আর interface ব্যবহার হয় Object Oriented typescript ক্ষেত্রে । 
       3.interface ডিফাইন করার পর পরবর্তীতে একই নাম দিয়ে নতুন properties যোগ করা যায়,যা type এর করা যাই না। 
 
  2. Provide an example of using union and intersection types in TypeScript?
     =>    // union  |

type Userprofile ="Id" | "name" |"email";
const UserprofileDeshboard =(role:Userprofile)=>{
    if(role ==="Id"){
        return "Id Dashboard";
    }
    else if(role === "name"){
        return "name dashboard"
    }
    else{
        return "email dashboard";
    }
};
UserprofileDeshboard("email")




//intersection &
        
      
type student ={
    id:string;
    name:string;
    
};
type teacher ={
    phone:string;
    teacherSize:number;
}

type Studentandteacher = student & teacher

const ikram: Studentandteacher ={
    id: '12345',
    name: 'Ikram',
    phone:'01998882343',
    teacherSize:20
}
console.log(ikram.name)




        
