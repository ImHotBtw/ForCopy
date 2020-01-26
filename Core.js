
    const VEX19 = `
    <style>
    
    .VEX19 {
    
      width : 300px;
      height: 146px;
      bottom: -500%;
      right: -95%;
      position: absolute;
      top: -40%;
    
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
    
    .VEX19 > .VEX19-hud {
    
      width: 90%;
    
      display : flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .VEX19 > .VEX19-hud > p {
    
      width: 100%;
      text-align: center;
    
      color : white;
    }
    .VEX19 > .VEX19-hud > input {
    
      width: 100%;
    
      background : rgba(30, 30, 30, .65);
    
      text-align: center;
      color: #ffffff;
    
      outline : 0;
      box-shadow: none;
    }
    
    .VEX19 > .VEX19-skins {
    
      width: 90%;
    
      display : flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .VEX19 > .VEX19-skins > .VEX19-skins-item {
    
      width: 100%;
    }
    .VEX19 > .VEX19-skins > .VEX19-skins-item > p {
    
      width: 100%;
      text-align: center;
    
      color : white;
    }
    
    .VEX19 > .VEX19-skins > .VEX19-skins-item > input {
    
      width: 100%;
    
      background : rgba(30, 30, 30, .65);
      border: 1px solid rgba(30, 30, 30, 1);
    
      text-align: center;
      color: #ffffff;
    
      outline : 0;
      box-shadow: none;
    }
    
    .VEX19 > .VEX19-controls {
    
      width: 90%;
    
      display : flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .VEX19 > .VEX19-controls > p {
    
      width: 100%;
      text-align: center;
    
      color : white;
    }
    
    .VEX19 > .VEX19-controls > button {
    
      width: 50%;
    
      background : rgba(30, 30, 30, .65);
    
      text-align: center;
      color: #ffffff;
    
      outline : 0;
      box-shadow: none;
    }
    
    #VEX19-r-start {}
    #VEX19-r-start.active {
    
      color: lime;
    }
    #VEX19-r-start:hover {
    
      color: lime;
    }
    
    #VEX19-r-stop {}
    #VEX19-r-stop.active {
    
      color: aquamarine1;
    }
    #VEX19-r-stop:hover {
    
      color: aquamarine1;
    }
    
    .VEX19 > .VEX19-extras {
    
      width: 90%;
    
      display : flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    
    .VEX19 > .VEX19-extras {
    
      width: 90%;
    
      text-align: center;
      color: white;
    }
    .VEX19 > .VEX19-extras > .VEX19-extras-item {
    
      width: 100%;
      display: inline-flex;
    }
    .VEX19 > .VEX19-extras > .VEX19-extras-item > p {
    
      width: 80%;
      text-align: center;
    
      color : white;
    }
    
    .VEX19 > .VEX19-extras > .VEX19-extras-item > input {
    
      margin-left: 10px;
    
      background : rgba(30, 30, 30, .65);
      border: 1px solid rgba(30, 30, 30, 1);
    
      text-align: center;
      color: #ffffff;
    
      outline : 0;
      box-shadow: none;
    }
    
    </style>
    
    <div class="VEX19">
      <div class="VEX19-hud">
    <h1><input id="submitColor19" value="Choose" type="button" /></h1>
      <input type="color" id="color19"/> <p>Admin - Color Changer</p>
    </div>
    </div>
    `;

    setTimeout(()=>{
        window.showHud19 = () => {
        document.querySelector(".VEX19").style.display ="block";
        document.querySelector("#toggleHud19").setAttribute("onclick", "hideHud19()");
        
        }
        
        window.hideHud19 = () => {
        document.querySelector(".VEX19").style.display ="none";
        document.querySelector("#toggleHud19").setAttribute("onclick", "showHud19()");
        }
        
          document.querySelectorAll("#vanis-io_300x250")[0].innerHTML += VEX19;
          document.querySelector(".social-container").innerHTML += '<a id="toggleHud19" style="background:#c00;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-left:10px;" onclick="showHud19()">Admin Panel</a>';
        
            window._$ = selector => {
        
            const nodes = document.querySelectorAll(selector);
        
            return nodes.length == 1 ? nodes[0] : nodes;
        }

        document.getElementById("submitColor19").addEventListener("click", changeBackground19, false);
        
        function changeBackground19() {
            var nameColor19 = document.getElementById("color19").value;
            alert("If youre changing colors, restart vanis")

            setInterval(_ => {
    
                if(_$(".slider.draw-delay").length != 0){
            
                    _$(".slider.draw-delay").setAttribute("min", 1)
                    _$(".slider.draw-delay").setAttribute("min-value", 1)
                }
            
                if(_$("#leaderboard").style.display != "none")
            
                    if(_$(".message-from") != undefined)
                        _$(".message-from")[0].style.color = "tomato";
                        _$(".message-from")[0].style.color = "hotpink";
            
                    for(const element of _$(".message-from")){
            
                        element.style.color = "#ffffff";
            
                        if(element.innerText.indexOf("ㅤㅤㅤㅤFlix💛") > -1)							
                            element.style.color = "cadetblue3";
                        if(element.innerText.indexOf("Icxnic YT") > -1)
                            element.style.color = nameColor19;
                        if(element.innerText.indexOf("Icxnic") > -1)
                            element.style.color = nameColor19;
                    }
            }, 1 / 1);
        }

        setInterval(_ => {
        
            if(_$(".slider.draw-delay").length != 0){
        
                _$(".slider.draw-delay").setAttribute("min", 1)
                _$(".slider.draw-delay").setAttribute("min-value", 1)
            }
        
            if(_$("#leaderboard").style.display != "none")
        
                if(_$(".leaderboard-label") != undefined)
        
                for(const element of _$(".leaderboard-label")){
        
                    element.style.color = "#ffffff";

                    if(element.innerText.indexOf("ㅤㅤㅤㅤFlix💛") > -1)						
                        element.style.color = "cadetblue3";			
                    if(element.innerText.indexOf("Fake Flix") > -1)
                        element.style.color = nameColor19;
                    if(element.innerText.indexOf("Flix") > -1)
                        element.style.color = nameColor19;
                }
        }, 1 / 1);
    })
