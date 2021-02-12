let num_Array= prompt('Введите числа через пробел');
let ar = num_Array.split(' ');
for (let i=0;i<ar.length;i++){
    if (ar[i]%3==0){
    console.log(ar[i]);
            var div = document.getElementById("res");
        div.insertAdjacentHTML("afterEnd", "<p></p>" + ar[i] + '  кратное 3  ' );
    }
    
}


