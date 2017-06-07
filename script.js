/* Created by casad on 6/5/2017. */
function startuj(){
    var brojac = 0;
    var instructions = document.getElementById("objasnjenje");
    instructions.parentNode.removeChild(instructions);
    window.a = setInterval(function(){stvoriKocku()}, 2000);
    a();
    function stvoriKocku(){
        brojac += 1;
        var x = Math.floor((Math.random() * 480) + 1);
        var y = Math.floor((Math.random() * 480) + 1);
        var novo = document.createElement("DIV");
        novo.className = "kockica";
        novo.onclick = function ajmo(e){
            var a = document.getElementById("polje");
            if(e.target === a.lastElementChild){
                a.lastElementChild.remove();
                brojac--;
                if(brojac === 50){
                    alert("GAME OVER");
                    clearInterval(window.a || window.c || window.d || window.f);
                }
                dodajPoene();
            }
        };
        novo.style.top = y + 'px';
        novo.style.left = x + 'px';
        var polje = document.getElementById('polje');
        polje.appendChild(novo);
    }
    function dodajPoene(){
        var poeni = document.getElementById("poeni").innerHTML;
        var a = parseInt(poeni) + 10;
        document.getElementById("poeni").innerHTML = String(a);
        document.getElementById("bar").style.height = a + "px";

        if(a === 100){
            clearInterval(window.a);
            document.getElementById("obavestenje").innerHTML = "Bravo!";
            document.getElementById("obavestenje").style.backgroundColor = "gold";
            document.getElementById("obavestenje").style.boxShadow = "10px 10px 5px #888888";
            setTimeout(function(){
                document.getElementById("obavestenje").innerHTML = "";
                document.getElementById("obavestenje").style.backgroundColor = "";
                document.getElementById("obavestenje").style.boxShadow = "0 0 0 0 #ffffff";}, 3000);
            window.c = setInterval(function(){stvoriKocku()}, 1700);
            c();
        } else if(a === 200){
            clearInterval(window.c);
            document.getElementById("obavestenje").innerHTML = "Well done!";
            document.getElementById("obavestenje").style.backgroundColor = "gold";
            document.getElementById("obavestenje").style.boxShadow = "10px 10px 5px #888888";
            setTimeout(function(){
                document.getElementById("obavestenje").innerHTML = "";
                document.getElementById("obavestenje").style.backgroundColor = "";
                document.getElementById("obavestenje").style.boxShadow = "0 0 0 0 #ffffff";}, 3000);
            window.d = setInterval(function(){stvoriKocku()}, 1400);
            d();
        } else if(a === 300){
            clearInterval(window.d);
            document.getElementById("obavestenje").innerHTML = "You are great!!!!";
            document.getElementById("obavestenje").style.backgroundColor = "gold";
            document.getElementById("obavestenje").style.boxShadow = "10px 10px 5px #888888";
            setTimeout(function(){
                document.getElementById("obavestenje").innerHTML = "";
                document.getElementById("obavestenje").style.backgroundColor = "";
                document.getElementById("obavestenje").style.boxShadow = "0 0 0 0 #ffffff";}, 3000);
            window.f = setInterval(function(){stvoriKocku()},1100);
            f();
        } else if(a === 400){
            clearInterval(window.f);
            document.getElementById("obavestenje").innerHTML = "Almost there!!!!";
            document.getElementById("obavestenje").style.backgroundColor = "gold";
            document.getElementById("obavestenje").style.boxShadow = "10px 10px 5px #888888";
            setTimeout(function(){
                document.getElementById("obavestenje").innerHTML = "";
                document.getElementById("obavestenje").style.backgroundColor = "";
                document.getElementById("obavestenje").style.boxShadow = "0 0 0 0 #ffffff";}, 3000);
            window.g = setInterval(function(){stvoriKocku()}, 800);
            g();
        } else if (a === 500){
            clearInterval(window.g);
            alert("YOU WON!!!");
        }
    }
}