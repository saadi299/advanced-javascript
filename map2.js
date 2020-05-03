const students =[
    {id:1, name:"saadi"},
    {id:2, name:"neaz"},
    {id:3, name:"ishtiaq"},
    {id:4, name:"sami"},
    {id:5, name:"namfiz"}
    
];


const name = students.map(s=>s.name);
 const id = students.map(s=>s.id);
const bigger=students.filter(s=>s.id>2);
const name2 =bigger.map(s=>s.name);

console.log(name2);
console.log(bigger);


