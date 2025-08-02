function nope(){
    document.getElementById('button1').innerHTML = "Nope";
    document.getElementById('button1').onclick = jk 
}
function jk(){
    document.getElementById('button1').innerHTML = "Just Kidding";
    document.getElementById('button1').onclick = wait
}
function wait(){
    document.getElementById('button1').innerHTML = "waitt";
    document.getElementById('button1').onclick = openit10

}
function openit10(){
    document.getElementById('button1').innerHTML = "Open it in 10";
    document.getElementById('button1').onclick = openit9

}
function openit9(){
    document.getElementById('button1').innerHTML = "Open it in 9";
    document.getElementById('button1').onclick = openit8
}
function openit8(){
    document.getElementById('button1').innerHTML = "Open it in 8";
    document.getElementById('button1').onclick = openit7
}
function openit7(){
    document.getElementById('button1').innerHTML = "Open it in 7";
    document.getElementById('button1').onclick = openit6

}
function openit6(){
    document.getElementById('button1').innerHTML = "Open it in 6";
    document.getElementById('button1').onclick = openit5
}
function openit5(){
    document.getElementById('button1').innerHTML = "Open it in 5";
    document.getElementById('button1').onclick = openit4

}
function openit4(){
    document.getElementById('button1').innerHTML = "Open it in 4";
    document.getElementById('button1').onclick = openit3
}
function openit3(){
    document.getElementById('button1').innerHTML = "Open it in 3";
    document.getElementById('button1').onclick = openit2
}
function openit2(){
    document.getElementById('button1').innerHTML = "Open it in 2";
    document.getElementById('button1').onclick = openit1
}
function openit1(){
    document.getElementById('button1').innerHTML = "Open it in 1";
    document.getElementById('button1').onclick = openit0
}
function openit0(){
    document.getElementById('button1').innerHTML = "Open it :D";
    document.getElementById('button1').onclick = opened
}

function opened(){
        document.getElementById('envelope').src='shiro2.png';
        document.getElementById('upperEnvelope').style.visibility = 'visible';
        document.getElementById('button1').innerHTML = "Next";
        document.getElementById('button1').onclick = close 
        
    }


function close(){
    document.getElementById('envelope').remove();
    document.getElementById('upperEnvelope').remove();
    document.getElementById('teks').style.backgroundColor = "rgb(255, 251, 159)";
    document.getElementById('button1').remove();
    
    const content = document.getElementById('content');
    const judul = document.createElement('p');
    const teksJudul = document.createTextNode('Happy Birtdhay Shiro <3');

    judul.appendChild(teksJudul);

    const surat = document.getElementById('teks');

    surat.appendChild(judul);

    content.style.height = "800px";
    document.getElementById('box').style.height = "800px";
    document.getElementById('com').style.marginTop = "200px";
    document.getElementById('teks').style.height = "800px";

    judul.style.justifyContent = "center";
    judul.style.display = "flex";
    judul.style.alignItems = "center";

    judul.style.width = "500px";
    judul.style.height = "40px";
    judul.style.fontSize = "30px";
    judul.style.fontFamily = "minecraft";
    judul.style.textShadow = "2px 2px 2px black";
    judul.style.color = "white";
    judul.style.marginTop = "50px";
    // judul.style.marginBottom = "30px";

    const kalimat = document.createElement('p');
    const tekskalimat = document.createTextNode('Happy birthday kak, the beautiful girl, the sweet girl, the loving girl, the smart girl, the independent girl, the sunflower girl, the genuinely kind hearted girl. Thank you for holding on, thank you for growing up with very strong. I dont have much to say, i just want you to be yourself, love yourself, and spend time by time with sincerity. Wherever and whenever you are, stay kind, humble, and happy. Please, never be afraid to step forward and keep going on to through the day. There will be many people who love, take care of, and support you, so keep being the cheerful and positive girl. You have done your best. You nailed it to through today so up, Congratulations! All prayers and hopes are bless with you.');

    kalimat.appendChild(tekskalimat);
    surat.appendChild(kalimat);

    kalimat.style.justifyContent = "center";
    kalimat.style.display = "flex";
    // kalimat.style.alignItems = "center";

    kalimat.style.width = "440px";
    kalimat.style.height = "300px";
    kalimat.style.fontSize = "20px";
    kalimat.style.fontFamily = "minecraft";
    kalimat.style.textShadow = "2px 2px 2px black";
    kalimat.style.color = "white";
    kalimat.style.marginLeft = "30px";
    kalimat.style.marginRight = "30px";



}
