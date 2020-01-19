function drawLoginPanel() {
	const VEX4 = `
<style>

.VEX4 {

  width : 350px;
  height: 300px;
  bottom: 0%;
  right: 2%;
  position: fixed;
  top: calc(50% - 400px);

  display: none;
  flex-wrap : wrap;
  justify-content: center;

  background: rgba(30, 30, 30, .75);
  border: 1px solid red;

  font-family : Monospace;

  z-index: 9999;
}

.VEX4 > .VEX4-hud {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX4 > .VEX4-hud > p {

  width: 100%;
  text-align: center;

  color : white;
}
.VEX4 > .VEX4-hud > input {

  width: 100%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

.VEX4 > .VEX4-skins {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX4 > .VEX4-skins > .VEX4-skins-item {

  width: 100%;
}
.VEX4 > .VEX4-skins > .VEX4-skins-item > p {

  width: 100%;
  text-align: center;

  color : white;
}

.VEX4 > .VEX4-skins > .VEX4-skins-item > input {

  width: 100%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

.VEX4 > .VEX4-controls {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX4 > .VEX4-controls > p {

  width: 100%;
  text-align: center;

  color : white;
}

.VEX4 > .VEX4-controls > button {

  width: 50%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

#VEX4-r-start {}
#VEX4-r-start.active {

  color: lime;
}
#VEX4-r-start:hover {

  color: lime;
}

#VEX4-r-stop {}
#VEX4-r-stop.active {

  color: aquamarine1;
}
#VEX4-r-stop:hover {

  color: aquamarine1;
}

.VEX4 > .VEX4-extras {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX4 > .VEX4-extras {

  width: 90%;

  text-align: center;
  color: white;
}
.VEX4 > .VEX4-extras > .VEX4-extras-item {

  width: 100%;
  display: inline-flex;
}
.VEX4 > .VEX4-extras > .VEX4-extras-item > p {

  width: 80%;
  text-align: center;

  color : white;
}

.VEX4 > .VEX4-extras > .VEX4-extras-item > input {

  margin-left: 10px;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

</style>

<div class="VEX4">
  <div class="VEX4-hud">
<h1>Flix Panel</h1>
	<div class="VEX4-extras">
	<div class="VEX4-extras-item">
	<p>Name: Fake Reverse - Color: Pink</p>
	<input id="RevPink" type="checkbox" />
	<p>Name: Fake Reverse - Color: Turqoise</p>
	<input id="RevTurq" type="checkbox" />
	<p>Name: Fake Reverse - Color: Purple</p>
	<input id="RevPurp" type="checkbox" />
	<p>Name: Fake Reverse - Color: Red</p>
	<input id="RevRed" type"checkbox" />
	<p>Name: Fake Reverse - Color: Gray</p>
	<input id="RevGray" type"checkbox" />
</div>
</div>
`;

setTimeout(()=>{
window.showHud2 = () => {
document.querySelector(".VEX4").style.display ="block";
document.querySelector("#toggleHud2").setAttribute("onclick", "hideHud2()");

}

window.hideHud2 = () => {
document.querySelector(".VEX4").style.display ="none";
document.querySelector("#toggleHud2").setAttribute("onclick", "showHud2()");
}

  document.querySelectorAll("#vanis-io_300x250")[0].innerHTML += VEX4;
  document.querySelector(".social-container").innerHTML += '<a id="toggleHud2" style="background:#c00;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-left:10px;" onclick="showHud2()">Flix Panel</a>';

    window._$ = selector => {

    const nodes = document.querySelectorAll(selector);

	return nodes.length == 1 ? nodes[0] : nodes;
	}
})
}
