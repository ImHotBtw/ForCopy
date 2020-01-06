const VEX4 = `
<html>
<body>

<p>Click the button to create a VAR element with some text.</p>

<button onclick="myFunction()">Try it</button>

<script>
function myFunction() {
  var x = document.createElement("VAR");
  var t = document.createTextNode(massCount);
  var l = document.createTextNode(mass);
  document.body.appendChild(x);
  x.appendChild(t);
  document.body.appendChild(x);
  document.querySelector("#hud > div.stats > div:nth-child(1)")

  var mass = document.querySelector("#hud > div.stats > div:nth-child(3)")
  mass.id = "massCount"
}
</script>

</body>
</html>
`;

setInterval(_ => {
    document.querySelector("#hud > div.stats > div:nth-child(1)")

    var mass = document.querySelector("#hud > div.stats > div:nth-child(3)")
    mass.id = "massCount"

}, 1 / 25);

setTimeout(()=>{
    window.showHud2 = () => {
    document.querySelector(".VEX4").style.display ="block";
    document.querySelector("#toggleHud2").setAttribute("onclick", "alertme()");
    
    }
    
    window.hideHud2 = () => {
    document.querySelector(".VEX4").style.display ="none";
    document.querySelector("#toggleHud2").setAttribute("onclick", "showHud2()");
    }

    var lmo = document.getElementById("massCount")
      document.querySelectorAll("#vanis-io_300x250")[0].innerHTML += VEX4;
      document.querySelector(".social-container").innerHTML += '<a id="toggleHud2" style="background:#c00;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-left:10px;" onclick="alert(lmo)">Reverse Panel</a>';
    
        window._$ = selector => {
    
        const nodes = document.querySelectorAll(selector);
    
        return nodes.length == 1 ? nodes[0] : nodes;
        }
    })
