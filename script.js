document.getElementById("bh-form").addEventListener("submit", function(event) {
    event.preventDefault(); 
let rent = parseFloat(document.getElementById("rent").value);
let Waterbill = parseFloat(document.getElementById("Waterbill").value);
let Msc = parseFloat(document.getElementById("Msc").value);
let Ireneo = parseFloat(document.getElementById("Ireneo").value);
let Holly = parseFloat(document.getElementById("Holly").value);
let Rifanie = parseFloat(document.getElementById("Rifanie").value);
let Leiz = parseFloat(document.getElementById("Leiz").value);
let Axel = parseFloat(document.getElementById("Axel").value);


let result1 = rent-(5*3000)-Waterbill-Msc;
let result2 = Ireneo+Holly+Rifanie+Leiz+Axel;
let result3 = result1/result2;

let ireneo=result3*Ireneo+3000+Waterbill/5+Msc/5;
let holly=result3*Holly+3000+Waterbill/5+Msc/5;
let rifanie=result3*Rifanie+3000+Waterbill/5+Msc/5;
let leiz=result3*Leiz+3000+Waterbill/5+Msc/5;
let axel=result3*Axel+3000+Waterbill/5+Msc/5;

document.getElementById("result").innerHTML = 
`<strong>Ireneo: </strong>${ireneo.toFixed(2)}<br>
<strong>Holly: </strong>${holly.toFixed(2)}<br>
<strong>Rifanie: </strong>${rifanie.toFixed(2)}<br>
<strong>Leiz: </strong>${leiz.toFixed(2)}<br>
<strong>Axel: </strong>${axel.toFixed(2)}`;
}
);