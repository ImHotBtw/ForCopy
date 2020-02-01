function SkinsPanel() {
		const OAE55 = `
		<style>
		
		.OAE55 {
		
		  width : 300px;
		  height: 146px;
		  bottom: 2%;
		  right: 2%;
		  position: fixed;
		
		  display: none;
		  flex-wrap : wrap;
		  justify-content: center;
		
		  background: rgba(30, 30, 30, .75);
		  background-color: transparent;
		  padding: 10px;
		  border: 3px solid black;
		  border-radius: 15px;
		
		  font-family : Monospace;
		
		  z-index: 9999;
		}
		
		.OAE55 > .OAE55-hud {
		
		  width: 90%;
		
		  display : flex;
		  flex-wrap: wrap;
		  justify-content: center;
		}
		
		.OAE55 > .OAE55-hud > p {
		
		  width: 100%;
		  text-align: center;
		
		  color : white;
		}
		.OAE55 > .OAE55-hud > input {
		
		  width: 100%;
		
		  background : rgba(30, 30, 30, .65);
		
		  text-align: center;
		  color: #ffffff;
		
		  outline : 0;
		  box-shadow: none;
		}
		
		.OAE55 > .OAE55-skins {
		
		  width: 90%;
		
		  display : flex;
		  flex-wrap: wrap;
		  justify-content: center;
		}
		
		.OAE55 > .OAE55-skins > .OAE55-skins-item {
		
		  width: 100%;
		}
		.OAE55 > .OAE55-skins > .OAE55-skins-item > p {
		
		  width: 100%;
		  text-align: center;
		
		  color : white;
		}
		
		.OAE55 > .OAE55-skins > .OAE55-skins-item > input {
		
		  width: 100%;
		
		  background : rgba(30, 30, 30, .65);
		  border: 1px solid rgba(30, 30, 30, 1);
		
		  text-align: center;
		  color: #ffffff;
		
		  outline : 0;
		  box-shadow: none;
		}
		
		.OAE55 > .OAE55-controls {
		
		  width: 90%;
		
		  display : flex;
		  flex-wrap: wrap;
		  justify-content: center;
		}
		
		.OAE55 > .OAE55-controls > p {
		
		  width: 100%;
		  text-align: center;
		
		  color : white;
		}
		
		.OAE55 > .OAE55-controls > button {
		
		  width: 50%;
		
		  background : rgba(30, 30, 30, .65);
		
		  text-align: center;
		  color: #ffffff;
		
		  outline : 0;
		  box-shadow: none;
		}
		
		#OAE55-r-start {}
		#OAE55-r-start.active {
		
		  color: lime;
		}
		#OAE55-r-start:hover {
		
		  color: lime;
		}
		
		#OAE55-r-stop {}
		#OAE55-r-stop.active {
		
		  color: aquamarine1;
		}
		#OAE55-r-stop:hover {
		
		  color: aquamarine1;
		}
		
		.OAE55 > .OAE55-extras {
		
		  width: 90%;
		
		  display : flex;
		  flex-wrap: wrap;
		  justify-content: center;
		}
		
		.OAE55 > .OAE55-extras {
		
		  width: 90%;
		
		  text-align: center;
		  color: white;
		}
		.OAE55 > .OAE55-extras > .OAE55-extras-item {
		
		  width: 100%;
		  display: inline-flex;
		}
		.OAE55 > .OAE55-extras > .OAE55-extras-item > p {
		
		  width: 80%;
		  text-align: center;
		
		  color : white;
		}
		
		.OAE55 > .OAE55-extras > .OAE55-extras-item > input {
		
		  margin-left: 10px;
		
		  background : rgba(30, 30, 30, .65);
		  border: 1px solid rgba(30, 30, 30, 1);
		
		  text-align: center;
		  color: #ffffff;
		
		  outline : 0;
		  box-shadow: none;
		}

		input.bigCheck {
		width: 20px;
		height: 20px;
		}
		
		</style>
		
		<div class="OAE55">
		  <div class="OAE55-hud">
		<h1><iframe src="https://skins.vanis.io/"></iframe></h1>
		</div>
		</div>
		`;
	
		setTimeout(()=>{
			window.showHud55 = () => {
			document.querySelector(".OAE55").style.display ="block";
			document.querySelector("#toggleHud55").setAttribute("onclick", "hideHud55()");
			
			}
			
			window.hideHud55 = () => {
			document.querySelector(".OAE55").style.display ="none";
			document.querySelector("#toggleHud55").setAttribute("onclick", "showHud55()");
			}
			
			  document.querySelectorAll("#vanis-io_300x250")[0].innerHTML += OAE55;
			  document.querySelector("#player-container > div.tabs").innerHTML += '<a id="toggleHud55" style="background:#2f4f4f;cursor:pointer;padding:9px;color:#dadada;box-shadow:0 0 1px 1px #000;" onclick="showHud55()">Skins</a>';
			
				window._$ = selector => {
			
				const nodes = document.querySelectorAll(selector);
			
				return nodes.length == 1 ? nodes[0] : nodes;
