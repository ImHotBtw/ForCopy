function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function inis() {
	await sleep(5000);
  }

inis();

if(document.body == undefined)
	window.location.href = "/";

newPageTitle = 'Operation AE'; 
document.title = newPageTitle; 

window._$ = selector => {

	const nodes = document.querySelectorAll(selector);

	return nodes.length == 1 ? nodes[0] : nodes;
}

const __MODC__ = {
	clrscr: isNodeJs => isNodeJs ? (process.stdout.write('\033c')) : console.clear(),
	printo: console.dir,
	printt: console.table,
	pwarn: console.warn,
	perror: console.error,
	sizeof: element => element.length
};

Object.assign(window, __MODC__);

const __UTIL__ = {

	uuidv4: _ => {

		return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c){
			var r = Math.random() * 16 | 0,
				v = c == 'x' ? r : (r & 0x3 | 0x8);
			return v.toString(16);
		});
	}
};


function guiAccess() {
const OAE = `
<style>
body {
	background: #141414;
}

.OAE {
	width: 350px;
	height: 98vh;
	position: fixed;
	top: calc(1%);
	left: 0%;
	border: 1px solid rgba(20, 20, 20, 0.5);
	border-radius: 4px;
	font-family: Monospace;
	font-weight: 500;
	color: #ffffff;
}

.OAE p {
	text-align: center;
}

.OAE p p {
	font-size: 9px;
}

.OAE > .OAE-menu {
	width: 96%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-left: 2%;
}

.OAE > .OAE-menu .item-group {
	width: 96%;
	display: inline-flex;
	justify-content: space-between;
}

.OAE > .OAE-menu .menu-item {
	width: 96%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 10px;
	background: rgba(20, 20, 20, 0.5);
}

.OAE > .OAE-menu .menu-item p {
	width: 100%;
	font-size : 12px;
}

.OAE > .OAE-menu .menu-item button {
	width: 100%;
}

.OAE > .OAE-menu .menu-item input {
	width: 96%;
	height: 25px;
	border: none;
	padding: 0px;
	background: #141414;
	text-align: center;
	color: #ffffff;
}

.OAE > .OAE-menu .menu-item.slim {
	width: 30%;
}

.OAE > .OAE-menu .menu-item.slim input {
	width: 90% !important;
}

.OAE.hide {
	left: -325px;
}

#OAE-hc-picker {
	width: 90%;
	height: 20px !important;
	border: 1px solid #ffffff;
}

#OAE-mc-picker {
	width: 90%;
	height: 20px !important;
	border: 1px solid #ffffff;
}

.skin-changer {
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
}

.skin-changer input {
	width: 96% !important;
	height: 25px !important;
	border: none;
	padding: 0px;
	background: #141414;
	text-align: center;
	color: #ffffff;
}

.skin-changer .preview {
	width: 100px;
	height: 100px;
	border: 1px solid black;
	border-radius: 50%;
}

.skin-changer .controls {
	width: 96%;
	display: inline-flex;
}

.skin-changer .controls button {
	width: 49%;
	background: #141414;
	border: none;
	outline: none;
	color: #ffffff;
	margin: 5px;
}

</style>
`;

setTimeout(()=>{
	window.showHudV = () => {
	document.querySelector(".OAE").style.display ="block";
	document.querySelector("#toggleHudV").setAttribute("onclick", "hideHudV()");
	
	}
	
	window.hideHudV = () => {
	document.querySelector(".OAE").style.display ="none";
	document.querySelector("#toggleHudV").setAttribute("onclick", "showHudV()");
	}
	
	  document.querySelectorAll("#vanis-io_300x250")[0].innerHTML += OAE;
	  document.querySelector(".social-container").innerHTML += '<a id="toggleHudV" style="background:#b5b3b8;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-left:10px;" onclick="showHudV()">Functions Beta</a>';
	
		window._$ = selector => {
	
		const nodes = document.querySelectorAll(selector);
	
		return nodes.length == 1 ? nodes[0] : nodes;
		}
	}
)
}

let script, link;

script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://unpkg.com/mithril@2.0.4/mithril.min.js";

document.querySelector("head").appendChild(script);

script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js";

document.querySelector("head").appendChild(script);

script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://unpkg.com/vanilla-picker@2.10.1/dist/vanilla-picker.min.js";

document.querySelector("head").appendChild(script);

const __REQ_IVL__ = setInterval(_ => {

	if(window.m != undefined && window.Picker != undefined){

		clearInterval(__REQ_IVL__);
		init();
	}
}, 1 / 5)

switch(window.location.hash){

	case '#vreset':

		localStorage.removeItem("OAE_config")
		window.location.href = "/";
	break;
};


const init = _ => {

	let vinject = document.createElement("div");
		vinject.setAttribute(`data-v-${__UTIL__.uuidv4().split("-")[0]}`, '');

	_$("body").appendChild(vinject);

	const root = _$(`div[${vinject.attributes[0].name}`)

	const ConfigModel = {

		db_prefix: 'OAE_',
		db_name: 'config',

		model: {

			//hud
			H: {


				leaderboardserver: false,

			},

			//functions
			F: {

				autorespawn: false,
				skipstats: false,
				mouseline: true
			},

			//skins
			S: {

				_tpl: {

					id: 0,
					url: '',
					favourite: false
				},

				skins: [],
				offset: 0,
				current: {},
			},

			//profiles
			P: {

				_tpl: {

					id: 0,
					name: '',
					skin: {}
				},

				profiles: [],
				offset: 0,
				current: {}
			},

			//BINDS
			B: {

				vtoggle : '',

				ultrasplit: 'p',
				ultrafeed : '',
				freeze: ''
			}
		},

		//H

		getHudColor: _ => ConfigModel.model.H.color,
		setHudColor: value => ConfigModel.model.H.color = value,

		getHudMapColor: _ => ConfigModel.model.H.mcolor,
		setHudMapColor: value => ConfigModel.model.H.mcolor = value,

		getHudLeaderboardServer: _ => ConfigModel.model.H.leaderboardserver,
		setHudLeaderboardServer: value => ConfigModel.model.H.leaderboardserver = value,
		
		getHudLeaderboardHide: _ => ConfigModel.model.H.leaderboardhide,
		setHudLeaderboardHide: value => ConfigModel.model.H.leaderboardhide = value,

		getHudIngamemenu: _ => ConfigModel.model.H.ingamemenu,
		setHudIngamemenu: value => ConfigModel.model.H.ingamemenu = value,

		//F

		getFunctionAutoRespawn: _ => ConfigModel.model.F.autorespawn,
		setFunctionAutoRespawn: _ => (ConfigModel.model.F.autorespawn) ? (ConfigModel.model.F.autorespawn = false) : (ConfigModel.model.F.autorespawn = true),

		getFunctionSkipStats: _ => ConfigModel.model.F.skipstats,
		setFunctionSkipStats: _ => (ConfigModel.model.F.skipstats) ? (ConfigModel.model.F.skipstats = false) : (ConfigModel.model.F.skipstats = true),

		getFunctionSkinRotator: _ => ConfigModel.model.F.skinrotator,
		setFunctionSkinRotator: _ => (ConfigModel.model.F.skinrotator) ? (ConfigModel.model.F.skinrotator = false) : (ConfigModel.model.F.skinrotator = true),

		//S

		getSkinTemplate: _ => ConfigModel.model.S._tpl,
		getSkinList: _ => ConfigModel.model.S.skins,
		getSkinOffset: _ => ConfigModel.model.S.offset,
		getSkinCurrent: _ => ConfigModel.model.S.current,

		setSkinOffset: value => ConfigModel.model.S.offset = value,
		setSkinCurrent: _ => (ConfigModel.model.S.skins[ConfigModel.model.S.offset]) ? (ConfigModel.model.S.current = ConfigModel.model.S.skins[ConfigModel.model.S.offset]) : false,

		setSkinCurrentUrl: url => (ConfigModel.model.S.current) ? ConfigModel.model.S.current.url = url : false,
		setSkinCurrentFavourite: _ => (ConfigModel.model.S.current) ? ((ConfigModel.model.S.current.favourite) ? (ConfigModel.model.S.current.favourite = false) : (ConfigModel.model.S.current.favourite = true)) : false,

		//P

		getProfileTemplate: _ => ConfigModel.model.P._tpl,
		getProfileList: _ => ConfigModel.model.P.profiles,
		getProfileOffset: _ => ConfigModel.model.P.offset,
		getProfileCurrent: _ => ConfigModel.model.P.current,

		setProfileCurrentName: name => (ConfigModel.model.P.current) ? ConfigModel.model.P.current.name = name : false,

		//B
		getBind: key => (ConfigModel.model.B[key]) ? ConfigModel.model.B[key] : false,

		setBind: (key, value) => ConfigModel.model.B[key] = value,

		//D

		getObject: _ => ConfigModel.model,

		_save: _ => {

			localStorage.setItem(`${ConfigModel.db_prefix}${ConfigModel.db_name}`, JSON.stringify(ConfigModel.getObject()));
		},

		_load: _ => {

			let DB = JSON.parse(localStorage.getItem(`${ConfigModel.db_prefix}${ConfigModel.db_name}`));

			if(DB == null)
				ConfigModel._sync();

			ConfigModel.model = DB;
		},

		_sync: _ => {

			ConfigModel._save();
			ConfigModel._load();
		}
	};

	ConfigModel._load();

	const HudController = {

		_DOM_: {

			blb: _$("#leaderboard"),
			blbtitle: _$("#leaderboard > div.leaderboard-title"),

			iskini: _$("img#skin"),
			iskinurl: _$("input#skinurl"),

			elements: []
		},

		getDom: _ => {

			HudController._DOM_.elements = [

				_$(".OAE")
			];

			if(!_$("#overlay").length == 0)
				HudController._DOM_.elements.push(_$("#overlay"));

			if(!_$(".fade").length == 0)
				for(const element of _$(".fade"))
					HudController._DOM_.elements.push(element);

			if(!_$(".fade-box").length == 0)
				for(const element of _$(".fade-box"))
					HudController._DOM_.elements.push(element);

			if(_$(".discord").length == void(0))
				HudController._DOM_.elements.push(_$(".discord"));

			if(_$(".progress-bar").length == void(0))
				HudController._DOM_.elements.push(_$(".progress-bar"));
		},

		showLeaderboard : _ => {

			HudController._DOM_.blb.style.display = "";
		},

		hideLeaderboard: _ => {

			HudController._DOM_.blb.style.display = "none";
		},

		setHudColor: color => {

			for(const element of HudController._DOM_.elements)
				if(element != void(0))
					element.style.background = "darkslategray";
		},

		setHudMapColor: color => {

			if(_$(".webgl-options input").length != 0)
				_$(".webgl-options input")[_$(".webgl-options input").length - 1].value = color;

			window.settings.backgroundColor = color;
			localStorage.setItem("settings", JSON.stringify(window.settings))
		},

		setLeaderboardText: text => {

			HudController._DOM_.blbtitle.innerHTML = text;
		},

		setLeaderboardColor: color => {

			HudController._DOM_.blb.style.color = color || "#ffffff";
		}
	}

	HudController.getDom();

	const SkinchangerView = {

		current: {},

		view: _ => {

			return m(".menu-item",

				m("p", "YOUR SKIN"),

				m(".skin-changer",

					m(".preview", {
						style: `background-image: url("${SkinchangerView.current.url}"); background-repeat: no-repeat; background-size: cover;`
					}),

					m("input", {
						value: SkinchangerView.current.url,
						onchange: event => SkinchangerController.setCurrentUrl(event.target.value)
					}),
					),
			)
		}
	};

	const SkinchangerController = {

		_DOM_: {

			sinput: _$("#player-data > input#skinurl"),
			sprev: _$("#player-data > img#skin")
		},

		prev: _ => {

			if(ConfigModel.getSkinOffset() > 0)
				ConfigModel.setSkinOffset(ConfigModel.getSkinOffset() - 1)

			ConfigModel.setSkinCurrent();

			SkinchangerView.current = ConfigModel.getSkinCurrent();
			SkinchangerController.setCurrent(ConfigModel.getSkinCurrent())

			ConfigModel._save();

			return ConfigModel.getSkinOffset()
		},

		next: _ => {

			if(ConfigModel.getSkinOffset() < ConfigModel.getSkinList().length - 1)
				ConfigModel.setSkinOffset(ConfigModel.getSkinOffset() + 1)

			ConfigModel.setSkinCurrent();

			SkinchangerView.current = ConfigModel.getSkinCurrent();
			SkinchangerController.setCurrent(ConfigModel.getSkinCurrent())

			ConfigModel._save();

			return ConfigModel.getSkinOffset()
		},

		setCurrent: _ => {

			SkinchangerController._DOM_.sinput.value = ConfigModel.getSkinCurrent().url;
			SkinchangerController._DOM_.sprev.src = ConfigModel.getSkinCurrent().url;

			SkinchangerView.current = ConfigModel.getSkinCurrent();

			ConfigModel._save();
		},

		setCurrentUrl: value => {

			ConfigModel.setSkinCurrentUrl(value)

			SkinchangerView.current = ConfigModel.getSkinCurrent();

			ConfigModel._save();
		},

		setCurrentFavourite: value => {

			ConfigModel.setSkinCurrentFavourite();

			SkinchangerView.current = ConfigModel.getSkinCurrent();

			ConfigModel._save();
		},

		add: _ => {

			let skin = {

				id: ConfigModel.getSkinList().length,
				url: '',
				favourite: true
			};

			ConfigModel.model.S.skins.push(skin)
			ConfigModel.setSkinOffset(ConfigModel.getSkinList().length - 1);
			ConfigModel.setSkinCurrent();
			SkinchangerController.setCurrent(ConfigModel.getSkinCurrent())

			ConfigModel._save();
		},

		remove: _ => {

			if(ConfigModel.getSkinCurrent() != void(0))
				for(const item of ConfigModel.model.S.skins)
					if(item.id == ConfigModel.getSkinCurrent().id)
						ConfigModel.model.S.skins.splice(ConfigModel.model.S.skins.indexOf(item), 1);

			ConfigModel.setSkinOffset(ConfigModel.getSkinList().length - 1);
			ConfigModel.setSkinCurrent();

			if(ConfigModel.getSkinList().length - 1 == -1)
				SkinchangerView.current = {
					id: 0,
					url: 'https://skins.vanis.io/s/vanis1',
					favourite: false
				};

			SkinchangerView.current = ConfigModel.getSkinCurrent();

			ConfigModel._save();
		}
	};

	SkinchangerView.current = ConfigModel.getSkinCurrent();

	const MenuView = {

		view: _ => {

			return m(".OAE-menu",

				m(".menu-item",
					m(".item-group",

						m("",

							m(""),
							m("", { oninit: vnode => {

								setTimeout(_ => {

									const picker = new Picker({

										parent: vnode.dom,
										popup: 'right',
										editor: false,
                                        editorFormat: 'rgb',
										color: ConfigModel.getHudColor(),
										onDone: color => {

											ConfigModel.setHudColor(color.rgbaString);
											ConfigModel._sync();

											HudController.setHudColor(ConfigModel.getHudColor());
										},

										onChange: color => {

											ConfigModel.setHudColor(color.rgbaString)
											vnode.dom.style.background = ConfigModel.getHudColor();
										}
									});
								}, 50)
							}}, ''),
						),

						m("",

							m(""),
							m("", { oninit: vnode => {

								setTimeout(_ => {

									const picker = new Picker({

										parent: vnode.dom,
										popup: 'left',
										editor: false,
										editorFormat: 'rgb',
										alpha: false,
										color: ConfigModel.getHudMapColor(),
										onDone: color => {

											const option = confirm("Restart Vanis To Apply Changes", "OK", "CANCEL");

											if(option == true){

												ConfigModel.setHudMapColor(color.hex.substring(0, 7));
												ConfigModel._sync();

												window.location.href = "/";
											}

											HudController.setHudMapColor(ConfigModel.getHudMapColor());
										},

										onChange: color => {

											ConfigModel.setHudMapColor(color.hex.substring(0, 7))
											vnode.dom.style.background = ConfigModel.getHudMapColor();
										}
									});
								}, 50)
							}}, '')
						),
					),
					m(".menu-item.slim",

						m("p", "Auto Respawn"),
						m("input[type=checkbox]", {
							checked: ConfigModel.getFunctionAutoRespawn(),
							onchange: event => ConfigModel.setFunctionAutoRespawn()
						})
					)
				),

				m(SkinchangerView),



						m("",

							m("p"),
							m("", {

								
							})
						),
						m("",

							m("p"),
							m("", {
								
							},
						m(".menu-item.slim",

							m("p", "Freeze"),
							m("input[type=text]", {
								value: ConfigModel.getBind("freeze"),
								onchange: event => {

									ConfigModel.setBind("freeze", event.target.value)
									ConfigModel._sync();
								}
							})
						),
					)
				),

				m(".item-group",

					m(".menu-item.slim",

						m("p", "Hide The Leaderboard"),
						m("input[type=checkbox]", {
							checked: ConfigModel.getHudLeaderboardHide(),
							onchange: event => ConfigModel.setHudLeaderboardHide(event.target.checked)
						})
					),

					m(".menu-item.slim",

						m("p", "Server On Leaderboard"),
						m("input[type=checkbox]", {
							checked: ConfigModel.getHudLeaderboardServer(),
							onchange: event => ConfigModel.setHudLeaderboardServer(event.target.checked)
						})
					),

					m("",

						m("p"),
						m("", {
						})
					)
				)
			)
		}
	};

	const OAEView = {

		view: _ => {

			return m(".OAE", {

					class: `${OAEController.visible ? '' : 'hide'}`,
					onclick: event => {

						OAEController.toggle(event)
						_$("canvas#canvas").click()
					}
				},

				m(".toggle"),
				m("p", ["Operation AE", m("p", "Menu Inspired By OAE", m("p", "Made By Flix - Sub2Icxnic"))]),
				m(MenuView)
			)
		}
	};

	const OAEController = {

		visible: true,

		toggle: event => {

			if(event.target.classList[0] != 'OAE')
				return;

			if(OAEController.visible){

				OAEController.visible = false;

				return;
			}

			OAEController.visible = true;
		},

		hide: _ => {

			_$(".OAE").style.display = "none";
		},

		show: _ => {

			_$(".OAE").style.display = "initial";
		}
	};

	m.mount(root, OAEView);

	setInterval(_ => {

		Player.nick != localStorage.getItem("nickname") ? (Player.nick = localStorage.getItem("nickname")) : Player.nick = Player.nick;
		Player.tag != localStorage.getItem("teamtag") ? (Player.tag = localStorage.getItem("teamtag")) : Player.tag = Player.tag;

		HudController.getDom();
		HudController.setHudColor(ConfigModel.getHudColor());
		HudController.setHudMapColor(ConfigModel.getHudMapColor())

		if(ConfigModel.getFunctionAutoRespawn())
			Functions.RESPAWN();

		if(ConfigModel.getFunctionSkipStats())
			Functions.SKIPSTAT();

		if(HudController._DOM_.iskinurl.value != SkinchangerView.current.url)
			HudController._DOM_.iskinurl.value = SkinchangerView.current.url;

		if(HudController._DOM_.iskini.src != HudController._DOM_.iskinurl.value)
			HudController._DOM_.iskini.src = HudController._DOM_.iskinurl.value;

		if(ConfigModel.getHudLeaderboardServer())
			HudController.setLeaderboardText(Functions.getCurrentServer())

		if(ConfigModel.getHudLeaderboardServer() == false)
			HudController.setLeaderboardText("Leaderboard");

		if(ConfigModel.getHudLeaderboardHide())
			HudController.hideLeaderboard();

		if(ConfigModel.getHudLeaderboardHide() == false)
			HudController.showLeaderboard();

		if(ConfigModel.getHudIngamemenu() == true && (!_$(".OAE").style.display != "") && _$("#overlay").style.display == "")
			OAEController.hide();

		if(ConfigModel.getHudIngamemenu() == true && (!_$(".OAE").style.display != "") && _$("#overlay").style.display == "")
			OAEController.hide();

}
	)


	const Player = {

		nick: '',

		x: 0,
		y: 0,

		tx: null,
		ty: null,

		freeze: false,

		_socket: null,

		getServerUrl: _ => {

			if(Player._socket)
				return Player._socket.url;
		},

		getCoords: _ => ({x: Player.x,y: Player.y}),
		getX: _ => Player.x,
		getY: _ => Player.y,

		setCoords: (x, y) => (Player.x = x | 0) && (Player.x = y | 0),
		setX: value => Player.x = value | 0,
		setY: value => Player.y = value | 0,

		getTarget: _ => ({x: Player.tx, y: Player.ty}),
		getTargetX: _ => Player.tx,
		getTargetY: _ => Player.ty,

		setTarget: (x, y) => (Player.tx = x | 0) && (Player.ty = y | 0),
		setTargetX: value => Player.tx = value | 0,
		setTargetY: value => Player.ty = value | 0,

		moveTo: (x, y) => {

			const packet = new DataView(new ArrayBuffer(9));
			packet.setUint8(0, 16);
			packet.setInt32(1, x);
			packet.setInt32(5, y);

			if(Player._socket)
				Player._socket._send(packet);
		},

		spawn: _ => {

			if(Player._socket)
				Player._socket._send(Player._pspawn);
		},

		eject : _ => {

			const packet = new DataView(new ArrayBuffer(1));
			packet.setUint8(0, 21);
			// packet.setUint8(1, 0);

			if(Player._socket)
				Player._socket._send(packet);
		},

		splitMax: _ => {

			const packet = new DataView(new ArrayBuffer(2));
			packet.setUint8(0, 17);
			packet.setUint8(1, Player.getX());

			if(Player._socket)
				Player._socket._send(packet);
		},

		_pinit: new Uint8Array([]),
		_pspawn: new Uint8Array([]),
	};

	const Bot = {};

	Object.assign(Bot, Player)

	const Functions = {

		RESPAWN: (mode = true) => {

			// JSON.parse(localStorage.getItem("hotkeys")).respawn

			const STAT_SCREEN = _$(".container")[2]

			if(STAT_SCREEN.style.display != "none"){

				_$("button.continue").click();

				if(mode){

					Player.spawn();
					_$("#overlay").style.display = "none";

					_$("#overlay").dispatchEvent(new KeyboardEvent("keydown", {

						altKey: false,
						bubbles: true,
						cancelBubble: false,
						cancelable: true,
						charCode: 0,
						code: "Escape",
						composed: true,
						ctrlKey: false,
						currentTarget: null,
						defaultPrevented: false,
						isComposing: false,
						isTrusted: true,
						key: "Escape",
						keyCode: 27,
						metaKey: false,
						returnValue: true,
						shiftKey: false,
						type: "keydown",
						which: 27
					}));

					_$("canvas#canvas").dispatchEvent(new KeyboardEvent("keydown", {

						altKey: false,
						bubbles: true,
						cancelBubble: false,
						cancelable: true,
						charCode: 0,
						code: "Escape",
						composed: true,
						ctrlKey: false,
						currentTarget: null,
						defaultPrevented: false,
						detail: 0,
						eventPhase: 0,
						isComposing: false,
						isTrusted: true,
						key: "Escape",
						keyCode: 27,
						location: 0,
						metaKey: false,
						path: [document.body, document, document, window],
						repeat: false,
						returnValue: true,
						shiftKey: false,
						sourceCapabilities: new InputDeviceCapabilities({
							firesTouchEvents: false
						}),
						srcElement: document.body,
						target: document.body,
						type: "keydown",
						view: window,
						which: 27
					}))

					_$("#overlay").dispatchEvent(new KeyboardEvent("keyup", {

						altKey: false,
						bubbles: true,
						cancelBubble: false,
						cancelable: true,
						charCode: 0,
						code: "Escape",
						composed: true,
						ctrlKey: false,
						currentTarget: null,
						defaultPrevented: false,
						detail: 0,
						eventPhase: 0,
						isComposing: false,
						isTrusted: true,
						key: "Escape",
						keyCode: 27,
						location: 0,
						metaKey: false,
						path: [document.body, document, document, window],
						repeat: false,
						returnValue: true,
						shiftKey: false,
						sourceCapabilities: new InputDeviceCapabilities({
							firesTouchEvents: false
						}),
						srcElement: document.body,
						target: document.body,
						type: "keydown",
						view: window,
						which: 27
					}));

					_$("canvas#canvas").dispatchEvent(new KeyboardEvent("keyup", {

						altKey: false,
						bubbles: true,
						cancelBubble: false,
						cancelable: true,
						charCode: 0,
						code: "Escape",
						composed: true,
						ctrlKey: false,
						currentTarget: null,
						defaultPrevented: false,
						detail: 0,
						eventPhase: 0,
						isComposing: false,
						isTrusted: true,
						key: "Escape",
						keyCode: 27,
						location: 0,
						metaKey: false,
						path: [document.body, document, document, window],
						repeat: false,
						returnValue: true,
						shiftKey: false,
						sourceCapabilities: new InputDeviceCapabilities({
							firesTouchEvents: false
						}),
						srcElement: document.body,
						target: document.body,
						type: "keydown",
						view: window,
						which: 27
					}))
				}
			}
		},

		SKIPSTAT: _ => Functions.RESPAWN(false),

		getServerList: _ => {

			return fetch("https://vanis.io/gameservers.json").then(response => response.text()).then(data => {

				return JSON.parse(data);
			})
		},

		getCurrentServer: _ => {

			//Player._socket.url.split("://")[1]

			for(const element of _$(".vanis-list-item"))
				if(element)
					if(element.className.indexOf("active") > -1)
						return element.innerText;
		}
	}

	window["WebSocket2"] = window['WebSocket'];

	WebSocket.prototype._send = WebSocket.prototype.send
	WebSocket.prototype.send = function(buffer){

		if(buffer.byteLength == 2 && buffer.byteLength < 5)

		if(buffer.byteLength >= 2 && buffer.byteLength < 100 && buffer[0] == 5)
			Player._pinit = buffer;

		if(buffer.byteLength > 1 && buffer.byteLength < 100 && buffer[0] == 1)
			Player._pspawn = buffer;

		if(buffer.byteLength == 9 && buffer.getUint8() == 16){

			Player.setX(buffer.getInt32(1, true));
			Player.setY(buffer.getInt32(5, true));

			if(Player.getX() == Player.getTargetX() && Player.getY() == Player.getTargetY())
				Player.setTarget(null, null);

			if(Player.freeze && Player.tx == null && Player.ty == null)
				return;

			if(Player.freeze && Player.tx != null && Player.ty != null){

				Player.moveTo(Player.tx, Player.ty);
				return;
			}
		}

		Player._socket = this;

		this._send(buffer);
	}

	document.addEventListener('keydown', event => {

		if(event.target.id == "chatbox-input")
			return;

		switch(event.key){

			case ConfigModel.getBind("ultrasplit"):

				for(let i=0; i<5; i++)
					Player.splitMax();

				_$(".OAE input")[5].style.background = "tomato";

				setTimeout(_ => {

					_$(".OAE input")[5].style.background = "";
				}, 100)
			break;

			case ConfigModel.getBind("ultrafeed"):

				for(let i=0; i<5; i++)
					Player.eject();

				_$(".OAE input")[6].style.background = "tomato";

				setTimeout(_ => {

					_$(".OAE input")[6].style.background = "";
				}, 100)
			break;

			case ConfigModel.getBind("freeze"):

				(!Player.freeze) ? Player.freeze = true: Player.freeze = false;

				if(Player.freeze){

					_$(".OAE input")[7].style.background = "tomato"
					return;
				}

				_$(".OAE input")[7].style.background = ""
			break;

			case ConfigModel.getBind("vtoggle"):

				OAEController.toggle();
			break;
		};
	}, false);

	window.OAE = {

		ConfigModel: ConfigModel,
		HudController: HudController,
		SkinchangerView: SkinchangerView,
		SkinchangerController: SkinchangerController,
		MenuView: MenuView,
		OAEView: OAEView,
		OAEController: OAEController,
		Player: Player,
		Functions: Functions
		
	}
}

var objPeople = [
	{ // Object @ 0 index
		username1: "Tripex",
		password: "AE14"
	},
	{ // Object @ 1 index
		username2: "Reverse",
		password: ""
	},
	{ // Object @ 2 index
		username: "Admin",
		password: "Admin"
	},
	{
		username5: "Apollo",
		password: "ollopa"
	},
	{
		username7: "Zerul",
		password: "x"
	},
	{
		username9: "Gon",
		password: "Small pp"
	},
	{
		username10: "Veynome",
		password: "king"
	},
	{
		username11: "Leo",
		password: "yello"
	},
	{
		username12: "Zodiak",
		password: "Zodiak5534"
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username1 && password == objPeople[i].password) {
			alert("Operation AE - Welcome back Tripex!")
			hideHud();
			AEPanel();
			guiAccess();
		}
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert("Operation AE - Welcome Back Admin!")
			hideHud();
			AEPanel();
			guiAccess();
			adminAccess();
		}
		if(username == objPeople[i].username5 && password == objPeople[i].password) {
			alert("Operation AE - Welcome back Apollo!")
			hideHud();
			AEPanel();
			guiAccess();
		}
		if(username == objPeople[i].username7 && password == objPeople[i].password) {
			alert("Operation AE - Welcome back Zerul x!")
			hideHud();
			AEPanel();
			guiAccess();
		}
		if(username == objPeople[i].username9 && password == objPeople[i].password) {
			alert("Operation AE - Welcome back Gon!")
			hideHud();
			AEPanel();
			guiAccess();
		}
		if(username == objPeople[i].username10 && password == objPeople[i].password) {
			alert("Operation AE - Welcome back Veynome!")
			hideHud();
			AEPanel();
			guiAccess();
		}
		if(username == objPeople[i].username11 && password == objPeople[i].password) {
			alert("Operation AE - Welcome back Leo!")
			hideHud();
			AEPanel();
			guiAccess();
		}
		if(username == objPeople[i].username12 && password == objPeople[i].password) {
			alert("Operation AE - Welcome back Zodiak!")
			hideHud();
			AEPanel();
			guiAccess();
		}
	}

const Player = {

	nick: '',

	x: 0,
	y: 0,

	tx: null,
	ty: null,

	freeze: false,

	_socket: null,

	getServerUrl: _ => {

		if(Player._socket)
			return Player._socket.url;
	},

	getCoords: _ => ({x: Player.x,y: Player.y}),
	getX: _ => Player.x,
	getY: _ => Player.y,

	setCoords: (x, y) => (Player.x = x | 0) && (Player.x = y | 0),
	setX: value => Player.x = value | 0,
	setY: value => Player.y = value | 0,

	getTarget: _ => ({x: Player.tx, y: Player.ty}),
	getTargetX: _ => Player.tx,
	getTargetY: _ => Player.ty,

	setTarget: (x, y) => (Player.tx = x | 0) && (Player.ty = y | 0),
	setTargetX: value => Player.tx = value | 0,
	setTargetY: value => Player.ty = value | 0,

	moveTo: (x, y) => {

		const packet = new DataView(new ArrayBuffer(9));
		packet.setUint8(0, 16);
		packet.setInt32(1, x);
		packet.setInt32(5, y);

		if(Player._socket)
			Player._socket._send(packet);
	},

	spawn: _ => {

		if(Player._socket)
			Player._socket._send(Player._pspawn);
	},
}

const Bot = {};

Object.assign(Bot, Player)

}


const OAE2 = `
<style>

.OAE2 {

  width : 1450px;
  height: 789px;
  right: 1%;
  position: fixed;
  top: calc(50% - 400px);

  display: none;
  flex-wrap : wrap;
  justify-content: center;

  background: rgba(30, 30, 30);

  font-family : Monospace;

  z-index: 9999;
}

.OAE2 > .OAE2-hud {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.OAE2 > .OAE2-hud > p {

  width: 100%;
  text-align: center;

  color : white;
}
.OAE2 > .OAE2-hud > input {

  width: 100%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

.OAE2 > .OAE2-skins {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.OAE2 > .OAE2-skins > .OAE2-skins-item {

  width: 100%;
}
.OAE2 > .OAE2-skins > .OAE2-skins-item > p {

  width: 100%;
  text-align: center;

  color : white;
}

.OAE2 > .OAE2-skins > .OAE2-skins-item > input {

  width: 100%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

.OAE2 > .OAE2-controls {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.OAE2 > .OAE2-controls > p {

  width: 100%;
  text-align: center;

  color : white;
}

.OAE2 > .OAE2-controls > button {

  width: 50%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

#OAE2-r-start {}
#OAE2-r-start.active {

  color: lime;
}
#OAE2-r-start:hover {

  color: lime;
}

#OAE2-r-stop {}
#OAE2-r-stop.active {

  color: aquamarine1;
}
#OAE2-r-stop:hover {

  color: aquamarine1;
}

.OAE2 > .OAE2-extras {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.OAE2 > .OAE2-extras {

  width: 90%;

  text-align: center;
  color: white;
}
.OAE2 > .OAE2-extras > .OAE2-extras-item {

  width: 100%;
  display: inline-flex;
}
.OAE2 > .OAE2-extras > .OAE2-extras-item > p {

  width: 80%;
  text-align: center;

  color : white;
}

.OAE2 > .OAE2-extras > .OAE2-extras-item > input {

  margin-left: 10px;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

</style>

<div class="OAE2">
  <div class="OAE2-hud">
<h1>LOGIN</h1>
<input type="text" id="username" placeholder="Username">
<input type="password" id="password" placeholer="Choose Password">
<button type="button" onclick="getInfo()">Login</button>
<p></p>
<p>Login is required</p>
<p style="color:white;">This extension is privately made for members of AE Clan</p>
<a style="color:rgba(22, 175, 199);"<a href="https://discord.gg/FYzcRhf">Aesthetic Clan Discord</a>
<p></p>
<a style="color:rgba(22, 175, 199);"<a href="https://discord.gg/DHcc4Gm">Extension Discord</a>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<p></p>
<small><a style="color:gray;"<a href="https://www.youtube.com/channel/UCQmWDTrFRE96e25SL48shvQ/featured">Sub2Icxnic</a><small>
<p></p>
</div>
`;

setTimeout(()=>{
window.showHud = () => {
document.querySelector(".OAE2").style.display ="block";
document.querySelector("#toggleHud").setAttribute("onclick", "hideHud()");

}

window.hideHud = () => {
document.querySelector(".OAE2").style.display ="none";
document.querySelector("#toggleHud").setAttribute("onclick", "showHud()");

}

  document.querySelectorAll("#vanis-io_300x250")[0].innerHTML += OAE2;
  document.querySelector("#player-container > div.tabs").innerHTML += '<a id="toggleHud" style="background:#2f4f4f;cursor:pointer;border-right:2px solid #000;padding:9px;color:#dadada;box-shadow:0 0 1px 1px #000;" onclick="showHud()"><img src="https://i.imgur.com/6c8IbJ8.png"></a>';
  

    window._$ = selector => {

    const nodes = document.querySelectorAll(selector);

	return nodes.length == 1 ? nodes[0] : nodes;
	}
}
)

	function AEPanel() {
		const OAE19 = `
		<style>
		
		.OAE19 {
		
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
		
		.OAE19 > .OAE19-hud {
		
		  width: 90%;
		
		  display : flex;
		  flex-wrap: wrap;
		  justify-content: center;
		}
		
		.OAE19 > .OAE19-hud > p {
		
		  width: 100%;
		  text-align: center;
		
		  color : white;
		}
		.OAE19 > .OAE19-hud > input {
		
		  width: 100%;
		
		  background : rgba(30, 30, 30, .65);
		
		  text-align: center;
		  color: #ffffff;
		
		  outline : 0;
		  box-shadow: none;
		}
		
		.OAE19 > .OAE19-skins {
		
		  width: 90%;
		
		  display : flex;
		  flex-wrap: wrap;
		  justify-content: center;
		}
		
		.OAE19 > .OAE19-skins > .OAE19-skins-item {
		
		  width: 100%;
		}
		.OAE19 > .OAE19-skins > .OAE19-skins-item > p {
		
		  width: 100%;
		  text-align: center;
		
		  color : white;
		}
		
		.OAE19 > .OAE19-skins > .OAE19-skins-item > input {
		
		  width: 100%;
		
		  background : rgba(30, 30, 30, .65);
		  border: 1px solid rgba(30, 30, 30, 1);
		
		  text-align: center;
		  color: #ffffff;
		
		  outline : 0;
		  box-shadow: none;
		}
		
		.OAE19 > .OAE19-controls {
		
		  width: 90%;
		
		  display : flex;
		  flex-wrap: wrap;
		  justify-content: center;
		}
		
		.OAE19 > .OAE19-controls > p {
		
		  width: 100%;
		  text-align: center;
		
		  color : white;
		}
		
		.OAE19 > .OAE19-controls > button {
		
		  width: 50%;
		
		  background : rgba(30, 30, 30, .65);
		
		  text-align: center;
		  color: #ffffff;
		
		  outline : 0;
		  box-shadow: none;
		}
		
		#OAE19-r-start {}
		#OAE19-r-start.active {
		
		  color: lime;
		}
		#OAE19-r-start:hover {
		
		  color: lime;
		}
		
		#OAE19-r-stop {}
		#OAE19-r-stop.active {
		
		  color: aquamarine1;
		}
		#OAE19-r-stop:hover {
		
		  color: aquamarine1;
		}
		
		.OAE19 > .OAE19-extras {
		
		  width: 90%;
		
		  display : flex;
		  flex-wrap: wrap;
		  justify-content: center;
		}
		
		.OAE19 > .OAE19-extras {
		
		  width: 90%;
		
		  text-align: center;
		  color: white;
		}
		.OAE19 > .OAE19-extras > .OAE19-extras-item {
		
		  width: 100%;
		  display: inline-flex;
		}
		.OAE19 > .OAE19-extras > .OAE19-extras-item > p {
		
		  width: 80%;
		  text-align: center;
		
		  color : white;
		}
		
		.OAE19 > .OAE19-extras > .OAE19-extras-item > input {
		
		  margin-left: 10px;
		
		  background : rgba(30, 30, 30, .65);
		  border: 1px solid rgba(30, 30, 30, 1);
		
		  text-align: center;
		  color: #ffffff;
		
		  outline : 0;
		  box-shadow: none;
		}
		
		</style>
		
		<div class="OAE19">
		  <div class="OAE19-hud">
		<h1><input id="submitColor19" value="Choose" type="button" onclick="getInfo()"/></h1>
		  <input type="color" id="color19"/> <p>Admin - Color Changer</p>
		</div>
		</div>
		`;

		
		function colorChange() {
			var nameColor19 = document.getElementById("color19").value;
			alert("If youre changing colors, restart vanis")
		}
	
		setTimeout(()=>{
			window.showHud19 = () => {
			document.querySelector(".OAE19").style.display ="block";
			document.querySelector("#toggleHud19").setAttribute("onclick", "hideHud19()");
			
			}
			
			window.hideHud19 = () => {
			document.querySelector(".OAE19").style.display ="none";
			document.querySelector("#toggleHud19").setAttribute("onclick", "showHud19()");
			}
			
			  document.querySelectorAll("#vanis-io_300x250")[0].innerHTML += OAE19;
			  document.querySelector(".social-container").innerHTML += '<a id="toggleHud19" style="background:#c00;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-left:10px;" onclick="showHud19()">Admin Panel</a>';
			
				window._$ = selector => {
			
				const nodes = document.querySelectorAll(selector);
			
				return nodes.length == 1 ? nodes[0] : nodes;
			}

	
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
	}
		)
}
