let num = 0;
const claimFreeCredit = ()=>{
 const amount = 200000;
 const sum = amount + num;
 num = sum;
 return num;
}

export {claimFreeCredit}