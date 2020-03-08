let x =3;
let arr=[];
for( let i=1;i<=x; i++) {
    for ( let j = 1; j <= i; j++) {
        arr.push('*');
    }
    console.log(arr);
    arr.length =0;
}