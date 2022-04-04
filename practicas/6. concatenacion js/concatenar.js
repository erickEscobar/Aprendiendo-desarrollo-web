let a = ['aba', 'acb', 'b', 'cab'];
let b = ['ei', 'ou', 'eeo', 'uie'];
let ab = new Array(4);
let k = 0
ab[0] = new Array(4);
ab[1] = new Array(4);
ab[2] = new Array(4);
ab[3] = new Array(4);

for(let i=0; i<b.length; i++){
    for(let j=0; j<a.length; j++){
        ab[i][j] = a[i]+b[j];
    }
}

console.log(ab);