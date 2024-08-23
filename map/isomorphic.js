//Leetcode - 205. Isomorphic Strings

var isIsomorphic = function(s, t) {

   let map = new Map();

   if(s.length !== t.length){
       return false;
   }

   for(let i=0; i<s.length; i++){
       if(map.has(s[i])){
           if(map.get(s[i]) !== t[i]){
               return false;
           }
           
       }else{
           for(const x of map.values()){
               if(x === t[i]){
                   return false;
               }
           }
           map.set(s[i], t[i]);
       }
   }
   return true;
};


// let s = "egg", t = "add";
let s = "foo", t = "bar"
console.log(isIsomorphic(s,t));