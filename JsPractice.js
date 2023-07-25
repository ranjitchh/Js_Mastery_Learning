// return the length of the argument passed

var argumentsLength = function(...args) {
    let number=[];
    number=args;
    return number.length;
};

let ans=argumentsLength(1, 2, 3); 
let ans2=argumentsLength({},undefined, "ranjit","3"); 
console.log(ans);
console.log(ans2);

