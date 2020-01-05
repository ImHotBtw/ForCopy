if(document.body == undefined)
	window.location.href = "/";

newPageTitle = 'Vanis Revamp V3.2'; 
document.title = newPageTitle; 

window._$ = selector => {

	const nodes = document.querySelectorAll(selector);

	return nodes.length == 1 ? nodes[0] : nodes;
}

const __MODC__ = {
	clrscr: isNodeJs => isNodeJs ? (process.stdout.write('\033c')) : console.clear(),
	print: console.log,
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

const GUI_CSS = `
body {
	background: #141414;
}

.vex {
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

.vex p {
	text-align: center;
}

.vex p p {
	font-size: 9px;
}

.vex > .vex-menu {
	width: 96%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-left: 2%;
}

.vex > .vex-menu .item-group {
	width: 96%;
	display: inline-flex;
	justify-content: space-between;
}

.vex > .vex-menu .menu-item {
	width: 96%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	margin-top: 10px;
	background: rgba(20, 20, 20, 0.5);
}

.vex > .vex-menu .menu-item p {
	width: 100%;
	font-size : 12px;
}

.vex > .vex-menu .menu-item button {
	width: 100%;
}

.vex > .vex-menu .menu-item input {
	width: 96%;
	height: 25px;
	border: none;
	padding: 0px;
	background: #141414;
	text-align: center;
	color: #ffffff;
}

.vex > .vex-menu .menu-item.slim {
	width: 30%;
}

.vex > .vex-menu .menu-item.slim input {
	width: 90% !important;
}

.vex.hide {
	left: -325px;
}

#vex-hc-picker {
	width: 90%;
	height: 20px !important;
	border: 1px solid #ffffff;
}

#vex-mc-picker {
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
`;

document.head.innerHTML += `<style>${GUI_CSS}</style>`;

let script, link;

script = document.createElement("script");
script.type = "text/javascript";
script.src = "https://unpkg.com/mithril@2.0.4/mithril.min.js";

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
}, 5)

switch(window.location.hash){

	case '#vreset':

		localStorage.removeItem("vex_config")
		window.location.href = "/";
	break;
};


const init = _ => {

	let vinject = document.createElement("div");
		vinject.setAttribute(`data-v-${__UTIL__.uuidv4().split("-")[0]}`, '');

	_$("body").appendChild(vinject);

	const root = _$(`div[${vinject.attributes[0].name}`)

	const ConfigModel = {

		db_prefix: 'vex_',
		db_name: 'config',

		model: {

			//hud
			H: {

				color: '',
				mcolor: '',

				leaderboardhide : false,
				leaderboardserver: false,

				ingamemenu: false,
			},

			//functions
			F: {

				autorespawn: false,
				skipstats: false,
				skinrotator: false,
				mouseline: false
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

				ultrasplit: '',
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

				_$(".vex")
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
					element.style.background = color;
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

				m("p", "SKINS"),

				m(".skin-changer",

					m(".preview", {
						style: `background-image: url("${SkinchangerView.current.url}"); background-repeat: no-repeat; background-size: cover;`
					}),
					m("input[type=checkbox]", {
						checked: SkinchangerView.current.favourite,
						onchange: event => SkinchangerController.setCurrentFavourite()
					}),

					m("input", {
						value: SkinchangerView.current.url,
						onchange: event => SkinchangerController.setCurrentUrl(event.target.value)
					}),

					m(".controls",

						m("button", {
							onclick: event => SkinchangerController.prev()
						}, "Previous"),
						m("button", {
							onclick: event => SkinchangerController.next()
						}, "Next"),
					),

					m(".controls",

						m("button", {
							onclick: event => SkinchangerController.add()
						}, "Add"),
						m("button", {
							onclick: event => SkinchangerController.remove()
						}, "Remove"),
					),
				)
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
				favourite: false
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

			return m(".vex-menu",

				m(".menu-item",
					m(".item-group",

						m(".menu-item.slim", { style: 'height: 50px' },

							m("p", "HUD COLOR"),
							m("#vex-hc-picker", { oninit: vnode => {

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

						m(".menu-item.slim", { style: 'height: 100px' },

							m("p", "MAP COLOR"),
							m("#vex-mc-picker", { oninit: vnode => {

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
				),

				m(".item-group",

					m(".menu-item.slim",

						m("p", "Auto respawn"),
						m("input[type=checkbox]", {
							checked: ConfigModel.getFunctionAutoRespawn(),
							onchange: event => ConfigModel.setFunctionAutoRespawn()
						})
					),
					m(".menu-item.slim",

						m("p", "Skip stats"),
						m("input[type=checkbox]", {
							checked: ConfigModel.getFunctionSkipStats(),
							onchange: event => ConfigModel.setFunctionSkipStats()
						})
					),

					m(".menu-item.slim",

						m("p", "Menu visible"),
						m("input[type=checkbox]", {
							checked: ConfigModel.getHudIngamemenu(),
							onchange: event => ConfigModel.setHudIngamemenu(event.target.checked)
						})
					)
				),

				m(SkinchangerView),

				m(".menu-item",

					m("p", "BINDS"),

					m(".item-group",

						m(".menu-item.slim",

							m("p", "Ultra Split"),
							m("input[type=text]", {
								value: ConfigModel.getBind("ultrasplit"),
								onchange: event => {

									ConfigModel.setBind("ultrasplit", event.target.value)
									ConfigModel._sync();
								}
							})
						),
						m(".menu-item.slim",

							m("p", "Ultra feed"),
							m("input[type=text]", {
								value: ConfigModel.getBind("ultrafeed"),
								onchange: event => {

									ConfigModel.setBind("ultrafeed", event.target.value)
									ConfigModel._sync();
								}
							})
						),
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

						m("p", "Leaderboard Hide"),
						m("input[type=checkbox]", {
							checked: ConfigModel.getHudLeaderboardHide(),
							onchange: event => ConfigModel.setHudLeaderboardHide(event.target.checked)
						})
					),

					m(".menu-item.slim",

						m("p", "Leaderboard Server"),
						m("input[type=checkbox]", {
							checked: ConfigModel.getHudLeaderboardServer(),
							onchange: event => ConfigModel.setHudLeaderboardServer(event.target.checked)
						})
					),

					m(".menu-item.slim",

						m("p", "Random skin"),
						m("input[type=checkbox]", {
							checked: ConfigModel.getFunctionSkinRotator(),
							onchange: event => ConfigModel.setFunctionSkinRotator()
						})
					)
				)
			)
		}
	};

	const VexView = {

		view: _ => {

			return m(".vex", {

					class: `${VexController.visible ? '' : 'hide'}`,
					onclick: event => {

						VexController.toggle(event)
						_$("canvas#canvas").click()
					}
				},

				m(".toggle"),
				m("p", ["Vanis Revamp", m("p", "For You", m("p", "By Flix"))]),
				m(MenuView)
			)
		}
	};

	const VexController = {

		visible: true,

		toggle: event => {

			if(event.target.classList[0] != 'vex')
				return;

			if(VexController.visible){

				VexController.visible = false;

				return;
			}

			VexController.visible = true;
		},

		hide: _ => {

			_$(".vex").style.display = "none";
		},

		show: _ => {

			_$(".vex").style.display = "initial";
		}
	};

	m.mount(root, VexView);

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

		if(ConfigModel.getHudIngamemenu() == false && (!_$(".vex").style.display != "none") && _$("#overlay").style.display == "none")
			VexController.hide();

		if(ConfigModel.getHudIngamemenu() == false && (!_$(".vex").style.display != "none") && _$("#overlay").style.display == "")
			VexController.show();

		//

		if(_$(".slider.draw-delay").length != 0){

			_$(".slider.draw-delay").setAttribute("min", 5)
			_$(".slider.draw-delay").setAttribute("min-value", 5)
		}

		if(_$("#leaderboard").style.display != "none")

			if(_$(".leaderboard-label") != undefined)
				_$(".leaderboard-label")[0].style.color = "tomato";
				_$(".leaderboard-label")[0].style.color = "hotpink";

			for(const element of _$(".leaderboard-label")){

				element.style.color = "#ffffff";

				if(element.innerText.indexOf("Flix") > -1)
					element.style.color = "tomato";
			}
	}, 1000 / 25);

function drawIt() {
	username.includes("Copy");
	console.log("you are Copy")
	return;
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
			console.log(buffer)

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

				for(let i=0; i<4; i++)
					Player.splitMax();

				_$(".vex input")[5].style.background = "tomato";

				setTimeout(_ => {

					_$(".vex input")[5].style.background = "";
				}, 100)
			break;

			case ConfigModel.getBind("ultrafeed"):

				for(let i=0; i<5; i++)
					Player.eject();

				_$(".vex input")[6].style.background = "tomato";

				setTimeout(_ => {

					_$(".vex input")[6].style.background = "";
				}, 100)
			break;

			case ConfigModel.getBind("freeze"):

				(!Player.freeze) ? Player.freeze = true: Player.freeze = false;

				if(Player.freeze){

					_$(".vex input")[7].style.background = "tomato"
					return;
				}

				_$(".vex input")[7].style.background = ""
			break;

			case ConfigModel.getBind("vtoggle"):

				VexController.toggle();
			break;
		};
	}, false);

	window.vex = {

		ConfigModel: ConfigModel,
		HudController: HudController,
		SkinchangerView: SkinchangerView,
		SkinchangerController: SkinchangerController,
		MenuView: MenuView,
		VexView: VexView,
		VexController: VexController,
		Player: Player,
		Functions: Functions
		
	}
}


function login(password) {
    var storedPassword = 'Copy';
    var storedPassword = 'Reverse';
    var storedPassword = 'Flix';

    return password == storedPassword;
}

function status() {
  if(loggedIn) {
    console.log('You are in :)');
  } else {
    console.log('You are not in :(');
  }
}

var objPeople = [
	{ // Object @ 0 index
		username1: "Copy",
		password: ""
	},
	{ // Object @ 1 index
		username2: "Reverse",
		password: ""
	},
	{ // Object @ 2 index
		username: "Flix",
		password: ""
	}

]

function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].username1 && password == objPeople[i].password) {
			alert("Welcome back to Revamp Copy!")
		}
		if(username == objPeople[i].username && password == objPeople[i].password) {
			alert("Welcome back to Revamp Flix!")
			drawLoginPanel();
		}
		if(username == objPeople[i].username2 && password == objPeople[i].password) {
			alert("Welcome back to Revamp Reverse!")
			reversePanel();
		}
	}
    console.log("incorrect username or password")
}

const VEX2 = `
<style>

.VEX2 {

  width : 350px;
  height: 300px;
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

.VEX2 > .VEX2-hud {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX2 > .VEX2-hud > p {

  width: 100%;
  text-align: center;

  color : white;
}
.VEX2 > .VEX2-hud > input {

  width: 100%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

.VEX2 > .VEX2-skins {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX2 > .VEX2-skins > .VEX2-skins-item {

  width: 100%;
}
.VEX2 > .VEX2-skins > .VEX2-skins-item > p {

  width: 100%;
  text-align: center;

  color : white;
}

.VEX2 > .VEX2-skins > .VEX2-skins-item > input {

  width: 100%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

.VEX2 > .VEX2-controls {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX2 > .VEX2-controls > p {

  width: 100%;
  text-align: center;

  color : white;
}

.VEX2 > .VEX2-controls > button {

  width: 50%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

#VEX2-r-start {}
#VEX2-r-start.active {

  color: lime;
}
#VEX2-r-start:hover {

  color: lime;
}

#VEX2-r-stop {}
#VEX2-r-stop.active {

  color: aquamarine1;
}
#VEX2-r-stop:hover {

  color: aquamarine1;
}

.VEX2 > .VEX2-extras {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX2 > .VEX2-extras {

  width: 90%;

  text-align: center;
  color: white;
}
.VEX2 > .VEX2-extras > .VEX2-extras-item {

  width: 100%;
  display: inline-flex;
}
.VEX2 > .VEX2-extras > .VEX2-extras-item > p {

  width: 80%;
  text-align: center;

  color : white;
}

.VEX2 > .VEX2-extras > .VEX2-extras-item > input {

  margin-left: 10px;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

</style>

<div class="VEX2">
  <div class="VEX2-hud">
<h1>LOGIN</h1>
<input type="text" id="username" placeholder="Choose Username">
<input type="password" id="password" placeholer="Choose Password">
<button type="button" onclick="getInfo()">Login</button>
</div>
`;



setTimeout(()=>{
window.showHud = () => {
document.querySelector(".VEX2").style.display ="block";
document.querySelector("#toggleHud").setAttribute("onclick", "hideHud()");

}

window.hideHud = () => {
document.querySelector(".VEX2").style.display ="none";
document.querySelector("#toggleHud").setAttribute("onclick", "showHud()");
}

  document.querySelectorAll("#vanis-io_300x250")[0].innerHTML += VEX2;
  document.querySelector(".social-container").innerHTML += '<a id="toggleHud" style="background:#c00;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-left:10px;" onclick="showHud()">Login</a>';

    window._$ = selector => {

    const nodes = document.querySelectorAll(selector);

    return nodes.length == 1 ? nodes[0] : nodes;
    }
{
}
})

function reversePanel() {
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
	<script src="jscolor.js"></script>
	Color: <input class="jscolor" value="ab2567">
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

	const checkbox = document.getElementById('RevPink')

	checkbox.addEventListener('change', (event) => {
	  if (event.target.checked) {
		alert("Fake Reverse - Pink name is ON");
		if(element.innerText.indexOf("Fake Reverse") > -1)
			element.style.color = "hotpink1";
			revPinkon();
		
	  } else {
		alert("Fake Reverse - Pink name is OFF");
		if(element.innerText.indexOf("Fake Reverse") > -1)
			element.style.color = "GhostWhite";
			revPinkoff();
	  }
	const checkbox = document.getElementById('RevTurq')

	checkbox.addEventListener('change', (event) => {
	  if (event.target.checked) {
		alert("Fake Reverse - Turquoise name is ON");
		if(element.innerText.indexOf("Fake Reverse") > -1)
			element.style.color = "turquoise1";
		
	  } else {
		alert("Fake Reverse - Turquoise name is OFF");
		if(element.innerText.indexOf("Fake Reverse") > -1)
			element.style.color = "GhostWhite";
	  }
	const checkbox = document.getElementById('RevPurp')

	checkbox.addEventListener('change', (event) => {
	  if (event.target.checked) {
		alert("Fake Reverse - Purple name is ON");
		if(element.innerText.indexOf("Fake Reverse") > -1)
			element.style.color = "darkorchid4";
		
	  } else {
		alert("Fake Reverse - Purple name is OFF");
		if(element.innerText.indexOf("Fake Reverse") > -1)
			element.style.color = "GhostWhite";
	  }
	const checkbox = document.getElementById('RevGray')

	checkbox.addEventListener('change', (event) => {
	  if (event.target.checked) {
		alert("Fake Reverse - Gray name is ON");
		if(element.innerText.indexOf("Fake Reverse") > -1)
			element.style.color = "gray59";
		
	  } else {
		alert("Fake Reverse - Gray name is OFF");
		if(element.innerText.indexOf("Fake Reverse") > -1)
			element.style.color = "GhostWhite";
	  }
	  const checkbox = document.getElementById('RevRed')

	  checkbox.addEventListener('change', (event) => {
		if (event.target.checked) {
		  alert("Fake Reverse - Red name is ON");
		  if(element.innerText.indexOf("Fake Reverse") > -1)
			  element.style.color = "firebrick2";
		  
		} else {
		  alert("Fake Reverse - Red name is OFF");
		  if(element.innerText.indexOf("Fake Reverse") > -1)
			  element.style.color = "GhostWhite";
	{
	}
}
	  })

function drawLoginPanel() {
	const VEX3 = `
<style>

.VEX3 {

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

.VEX3 > .VEX3-hud {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX3 > .VEX3-hud > p {

  width: 100%;
  text-align: center;

  color : white;
}
.VEX3 > .VEX3-hud > input {

  width: 100%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

.VEX3 > .VEX3-skins {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX3 > .VEX3-skins > .VEX3-skins-item {

  width: 100%;
}
.VEX3 > .VEX3-skins > .VEX3-skins-item > p {

  width: 100%;
  text-align: center;

  color : white;
}

.VEX3 > .VEX3-skins > .VEX3-skins-item > input {

  width: 100%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

.VEX3 > .VEX3-controls {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX3 > .VEX3-controls > p {

  width: 100%;
  text-align: center;

  color : white;
}

.VEX3 > .VEX3-controls > button {

  width: 50%;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

#VEX3-r-start {}
#VEX3-r-start.active {

  color: lime;
}
#VEX3-r-start:hover {

  color: lime;
}

#VEX3-r-stop {}
#VEX3-r-stop.active {

  color: aquamarine1;
}
#VEX3-r-stop:hover {

  color: aquamarine1;
}

.VEX3 > .VEX3-extras {

  width: 90%;

  display : flex;
  flex-wrap: wrap;
  justify-content: center;
}

.VEX3 > .VEX3-extras {

  width: 90%;

  text-align: center;
  color: white;
}
.VEX3 > .VEX3-extras > .VEX3-extras-item {

  width: 100%;
  display: inline-flex;
}
.VEX3 > .VEX3-extras > .VEX3-extras-item > p {

  width: 80%;
  text-align: center;

  color : white;
}

.VEX3 > .VEX3-extras > .VEX3-extras-item > input {

  margin-left: 10px;

  background : rgba(30, 30, 30, .65);
  border: 1px solid rgba(30, 30, 30, 1);

  text-align: center;
  color: #ffffff;

  outline : 0;
  box-shadow: none;
}

</style>

<div class="VEX3">
  <div class="VEX3-hud">
<h1>Flix Panel</h1>
	<div class="vex3-extras">
	<div class="vex3-extras-item">
	<p>Name: Flix - Color: Blue</p>
	<input id="FlixBlue" type="checkbox" />
	<p>Name: Fake Flix - Color: Pink</p>
</div>
	})
),
	div class="vex3-extras">
	<div class="vex3-extras-item">
	<p>Skip Stats</p>
	<input id="vex3-e-ss" type="checkbox">
	})
</div>
`;

setTimeout(()=>{
window.showHud = () => {
document.querySelector(".VEX3").style.display ="block";
document.querySelector("#toggleHud").setAttribute("onclick", "hideHud()");

}

window.hideHud = () => {
document.querySelector(".VEX3").style.display ="none";
document.querySelector("#toggleHud").setAttribute("onclick", "showHud()");
}

  document.querySelectorAll("#vanis-io_300x250")[0].innerHTML += VEX3;
  document.querySelector(".social-container").innerHTML += '<a id="toggleHud" style="background:#c00;cursor:pointer;outline:none;border:0;padding:5px;color:#dadada;box-shadow:0 0 1px 1px #000;border-radius:4px;font-size:16px;text-shadow:1px 1px 2px #000;margin-left:10px;" onclick="showHud()">Flix Panel</a>';

    window._$ = selector => {

    const nodes = document.querySelectorAll(selector);

	return nodes.length == 1 ? nodes[0] : nodes;
	}
		

	const checkbox = document.getElementById('FlixBlue')

	checkbox.addEventListener('change', (event) => {
	  if (event.target.checked) {
		alert("Copy - Blue name is ON");
		if(element.innerText.indexOf("Flix") > -1)
			element.style.color = "blue1";
		
	  } else {
		alert("Flix - Blue name is OFF");
		if(element.innerText.indexOf("Flix") > -1)
			element.style.color = "GhostWhite";
	  }
	})
})
}
	})
})
	})
	})
})
}

/**
 * jscolor - JavaScript Color Picker
 *
 * @link    http://jscolor.com
 * @license For open source use: GPLv3
 *          For commercial use: JSColor Commercial License
 * @author  Jan Odvarko
 * @version 2.0.5
 *
 * See usage examples at http://jscolor.com/examples/
 */


"use strict";


if (!window.jscolor) { window.jscolor = (function () {


var jsc = {


	register : function () {
		jsc.attachDOMReadyEvent(jsc.init);
		jsc.attachEvent(document, 'mousedown', jsc.onDocumentMouseDown);
		jsc.attachEvent(document, 'touchstart', jsc.onDocumentTouchStart);
		jsc.attachEvent(window, 'resize', jsc.onWindowResize);
	},


	init : function () {
		if (jsc.jscolor.lookupClass) {
			jsc.jscolor.installByClassName(jsc.jscolor.lookupClass);
		}
	},


	tryInstallOnElements : function (elms, className) {
		var matchClass = new RegExp('(^|\\s)(' + className + ')(\\s*(\\{[^}]*\\})|\\s|$)', 'i');

		for (var i = 0; i < elms.length; i += 1) {
			if (elms[i].type !== undefined && elms[i].type.toLowerCase() == 'color') {
				if (jsc.isColorAttrSupported) {
					// skip inputs of type 'color' if supported by the browser
					continue;
				}
			}
			var m;
			if (!elms[i].jscolor && elms[i].className && (m = elms[i].className.match(matchClass))) {
				var targetElm = elms[i];
				var optsStr = null;

				var dataOptions = jsc.getDataAttr(targetElm, 'jscolor');
				if (dataOptions !== null) {
					optsStr = dataOptions;
				} else if (m[4]) {
					optsStr = m[4];
				}

				var opts = {};
				if (optsStr) {
					try {
						opts = (new Function ('return (' + optsStr + ')'))();
					} catch(eParseError) {
						jsc.warn('Error parsing jscolor options: ' + eParseError + ':\n' + optsStr);
					}
				}
				targetElm.jscolor = new jsc.jscolor(targetElm, opts);
			}
		}
	},


	isColorAttrSupported : (function () {
		var elm = document.createElement('input');
		if (elm.setAttribute) {
			elm.setAttribute('type', 'color');
			if (elm.type.toLowerCase() == 'color') {
				return true;
			}
		}
		return false;
	})(),


	isCanvasSupported : (function () {
		var elm = document.createElement('canvas');
		return !!(elm.getContext && elm.getContext('2d'));
	})(),


	fetchElement : function (mixed) {
		return typeof mixed === 'string' ? document.getElementById(mixed) : mixed;
	},


	isElementType : function (elm, type) {
		return elm.nodeName.toLowerCase() === type.toLowerCase();
	},


	getDataAttr : function (el, name) {
		var attrName = 'data-' + name;
		var attrValue = el.getAttribute(attrName);
		if (attrValue !== null) {
			return attrValue;
		}
		return null;
	},


	attachEvent : function (el, evnt, func) {
		if (el.addEventListener) {
			el.addEventListener(evnt, func, false);
		} else if (el.attachEvent) {
			el.attachEvent('on' + evnt, func);
		}
	},


	detachEvent : function (el, evnt, func) {
		if (el.removeEventListener) {
			el.removeEventListener(evnt, func, false);
		} else if (el.detachEvent) {
			el.detachEvent('on' + evnt, func);
		}
	},


	_attachedGroupEvents : {},


	attachGroupEvent : function (groupName, el, evnt, func) {
		if (!jsc._attachedGroupEvents.hasOwnProperty(groupName)) {
			jsc._attachedGroupEvents[groupName] = [];
		}
		jsc._attachedGroupEvents[groupName].push([el, evnt, func]);
		jsc.attachEvent(el, evnt, func);
	},


	detachGroupEvents : function (groupName) {
		if (jsc._attachedGroupEvents.hasOwnProperty(groupName)) {
			for (var i = 0; i < jsc._attachedGroupEvents[groupName].length; i += 1) {
				var evt = jsc._attachedGroupEvents[groupName][i];
				jsc.detachEvent(evt[0], evt[1], evt[2]);
			}
			delete jsc._attachedGroupEvents[groupName];
		}
	},


	attachDOMReadyEvent : function (func) {
		var fired = false;
		var fireOnce = function () {
			if (!fired) {
				fired = true;
				func();
			}
		};

		if (document.readyState === 'complete') {
			setTimeout(fireOnce, 1); // async
			return;
		}

		if (document.addEventListener) {
			document.addEventListener('DOMContentLoaded', fireOnce, false);

			// Fallback
			window.addEventListener('load', fireOnce, false);

		} else if (document.attachEvent) {
			// IE
			document.attachEvent('onreadystatechange', function () {
				if (document.readyState === 'complete') {
					document.detachEvent('onreadystatechange', arguments.callee);
					fireOnce();
				}
			})

			// Fallback
			window.attachEvent('onload', fireOnce);

			// IE7/8
			if (document.documentElement.doScroll && window == window.top) {
				var tryScroll = function () {
					if (!document.body) { return; }
					try {
						document.documentElement.doScroll('left');
						fireOnce();
					} catch (e) {
						setTimeout(tryScroll, 1);
					}
				};
				tryScroll();
			}
		}
	},


	warn : function (msg) {
		if (window.console && window.console.warn) {
			window.console.warn(msg);
		}
	},


	preventDefault : function (e) {
		if (e.preventDefault) { e.preventDefault(); }
		e.returnValue = false;
	},


	captureTarget : function (target) {
		// IE
		if (target.setCapture) {
			jsc._capturedTarget = target;
			jsc._capturedTarget.setCapture();
		}
	},


	releaseTarget : function () {
		// IE
		if (jsc._capturedTarget) {
			jsc._capturedTarget.releaseCapture();
			jsc._capturedTarget = null;
		}
	},


	fireEvent : function (el, evnt) {
		if (!el) {
			return;
		}
		if (document.createEvent) {
			var ev = document.createEvent('HTMLEvents');
			ev.initEvent(evnt, true, true);
			el.dispatchEvent(ev);
		} else if (document.createEventObject) {
			var ev = document.createEventObject();
			el.fireEvent('on' + evnt, ev);
		} else if (el['on' + evnt]) { // alternatively use the traditional event model
			el['on' + evnt]();
		}
	},


	classNameToList : function (className) {
		return className.replace(/^\s+|\s+$/g, '').split(/\s+/);
	},


	// The className parameter (str) can only contain a single class name
	hasClass : function (elm, className) {
		if (!className) {
			return false;
		}
		return -1 != (' ' + elm.className.replace(/\s+/g, ' ') + ' ').indexOf(' ' + className + ' ');
	},


	// The className parameter (str) can contain multiple class names separated by whitespace
	setClass : function (elm, className) {
		var classList = jsc.classNameToList(className);
		for (var i = 0; i < classList.length; i += 1) {
			if (!jsc.hasClass(elm, classList[i])) {
				elm.className += (elm.className ? ' ' : '') + classList[i];
			}
		}
	},


	// The className parameter (str) can contain multiple class names separated by whitespace
	unsetClass : function (elm, className) {
		var classList = jsc.classNameToList(className);
		for (var i = 0; i < classList.length; i += 1) {
			var repl = new RegExp(
				'^\\s*' + classList[i] + '\\s*|' +
				'\\s*' + classList[i] + '\\s*$|' +
				'\\s+' + classList[i] + '(\\s+)',
				'g'
			);
			elm.className = elm.className.replace(repl, '$1');
		}
	},


	getStyle : function (elm) {
		return window.getComputedStyle ? window.getComputedStyle(elm) : elm.currentStyle;
	},


	setStyle : (function () {
		var helper = document.createElement('div');
		var getSupportedProp = function (names) {
			for (var i = 0; i < names.length; i += 1) {
				if (names[i] in helper.style) {
					return names[i];
				}
			}
		};
		var props = {
			borderRadius: getSupportedProp(['borderRadius', 'MozBorderRadius', 'webkitBorderRadius']),
			boxShadow: getSupportedProp(['boxShadow', 'MozBoxShadow', 'webkitBoxShadow'])
		};
		return function (elm, prop, value) {
			switch (prop.toLowerCase()) {
			case 'opacity':
				var alphaOpacity = Math.round(parseFloat(value) * 100);
				elm.style.opacity = value;
				elm.style.filter = 'alpha(opacity=' + alphaOpacity + ')';
				break;
			default:
				elm.style[props[prop]] = value;
				break;
			}
		};
	})(),


	setBorderRadius : function (elm, value) {
		jsc.setStyle(elm, 'borderRadius', value || '0');
	},


	setBoxShadow : function (elm, value) {
		jsc.setStyle(elm, 'boxShadow', value || 'none');
	},


	getElementPos : function (e, relativeToViewport) {
		var x=0, y=0;
		var rect = e.getBoundingClientRect();
		x = rect.left;
		y = rect.top;
		if (!relativeToViewport) {
			var viewPos = jsc.getViewPos();
			x += viewPos[0];
			y += viewPos[1];
		}
		return [x, y];
	},


	getElementSize : function (e) {
		return [e.offsetWidth, e.offsetHeight];
	},


	// get pointer's X/Y coordinates relative to viewport
	getAbsPointerPos : function (e) {
		if (!e) { e = window.event; }
		var x = 0, y = 0;
		if (typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {
			// touch devices
			x = e.changedTouches[0].clientX;
			y = e.changedTouches[0].clientY;
		} else if (typeof e.clientX === 'number') {
			x = e.clientX;
			y = e.clientY;
		}
		return { x: x, y: y };
	},


	// get pointer's X/Y coordinates relative to target element
	getRelPointerPos : function (e) {
		if (!e) { e = window.event; }
		var target = e.target || e.srcElement;
		var targetRect = target.getBoundingClientRect();

		var x = 0, y = 0;

		var clientX = 0, clientY = 0;
		if (typeof e.changedTouches !== 'undefined' && e.changedTouches.length) {
			// touch devices
			clientX = e.changedTouches[0].clientX;
			clientY = e.changedTouches[0].clientY;
		} else if (typeof e.clientX === 'number') {
			clientX = e.clientX;
			clientY = e.clientY;
		}

		x = clientX - targetRect.left;
		y = clientY - targetRect.top;
		return { x: x, y: y };
	},


	getViewPos : function () {
		var doc = document.documentElement;
		return [
			(window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
			(window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0)
		];
	},


	getViewSize : function () {
		var doc = document.documentElement;
		return [
			(window.innerWidth || doc.clientWidth),
			(window.innerHeight || doc.clientHeight),
		];
	},


	redrawPosition : function () {

		if (jsc.picker && jsc.picker.owner) {
			var thisObj = jsc.picker.owner;

			var tp, vp;

			if (thisObj.fixed) {
				// Fixed elements are positioned relative to viewport,
				// therefore we can ignore the scroll offset
				tp = jsc.getElementPos(thisObj.targetElement, true); // target pos
				vp = [0, 0]; // view pos
			} else {
				tp = jsc.getElementPos(thisObj.targetElement); // target pos
				vp = jsc.getViewPos(); // view pos
			}

			var ts = jsc.getElementSize(thisObj.targetElement); // target size
			var vs = jsc.getViewSize(); // view size
			var ps = jsc.getPickerOuterDims(thisObj); // picker size
			var a, b, c;
			switch (thisObj.position.toLowerCase()) {
				case 'left': a=1; b=0; c=-1; break;
				case 'right':a=1; b=0; c=1; break;
				case 'top':  a=0; b=1; c=-1; break;
				default:     a=0; b=1; c=1; break;
			}
			var l = (ts[b]+ps[b])/2;

			// compute picker position
			if (!thisObj.smartPosition) {
				var pp = [
					tp[a],
					tp[b]+ts[b]-l+l*c
				];
			} else {
				var pp = [
					-vp[a]+tp[a]+ps[a] > vs[a] ?
						(-vp[a]+tp[a]+ts[a]/2 > vs[a]/2 && tp[a]+ts[a]-ps[a] >= 0 ? tp[a]+ts[a]-ps[a] : tp[a]) :
						tp[a],
					-vp[b]+tp[b]+ts[b]+ps[b]-l+l*c > vs[b] ?
						(-vp[b]+tp[b]+ts[b]/2 > vs[b]/2 && tp[b]+ts[b]-l-l*c >= 0 ? tp[b]+ts[b]-l-l*c : tp[b]+ts[b]-l+l*c) :
						(tp[b]+ts[b]-l+l*c >= 0 ? tp[b]+ts[b]-l+l*c : tp[b]+ts[b]-l-l*c)
				];
			}

			var x = pp[a];
			var y = pp[b];
			var positionValue = thisObj.fixed ? 'fixed' : 'absolute';
			var contractShadow =
				(pp[0] + ps[0] > tp[0] || pp[0] < tp[0] + ts[0]) &&
				(pp[1] + ps[1] < tp[1] + ts[1]);

			jsc._drawPosition(thisObj, x, y, positionValue, contractShadow);
		}
	},


	_drawPosition : function (thisObj, x, y, positionValue, contractShadow) {
		var vShadow = contractShadow ? 0 : thisObj.shadowBlur; // px

		jsc.picker.wrap.style.position = positionValue;
		jsc.picker.wrap.style.left = x + 'px';
		jsc.picker.wrap.style.top = y + 'px';

		jsc.setBoxShadow(
			jsc.picker.boxS,
			thisObj.shadow ?
				new jsc.BoxShadow(0, vShadow, thisObj.shadowBlur, 0, thisObj.shadowColor) :
				null);
	},


	getPickerDims : function (thisObj) {
		var displaySlider = !!jsc.getSliderComponent(thisObj);
		var dims = [
			2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.width +
				(displaySlider ? 2 * thisObj.insetWidth + jsc.getPadToSliderPadding(thisObj) + thisObj.sliderSize : 0),
			2 * thisObj.insetWidth + 2 * thisObj.padding + thisObj.height +
				(thisObj.closable ? 2 * thisObj.insetWidth + thisObj.padding + thisObj.buttonHeight : 0)
		];
		return dims;
	},


	getPickerOuterDims : function (thisObj) {
		var dims = jsc.getPickerDims(thisObj);
		return [
			dims[0] + 2 * thisObj.borderWidth,
			dims[1] + 2 * thisObj.borderWidth
		];
	},


	getPadToSliderPadding : function (thisObj) {
		return Math.max(thisObj.padding, 1.5 * (2 * thisObj.pointerBorderWidth + thisObj.pointerThickness));
	},


	getPadYComponent : function (thisObj) {
		switch (thisObj.mode.charAt(1).toLowerCase()) {
			case 'v': return 'v'; break;
		}
		return 's';
	},


	getSliderComponent : function (thisObj) {
		if (thisObj.mode.length > 2) {
			switch (thisObj.mode.charAt(2).toLowerCase()) {
				case 's': return 's'; break;
				case 'v': return 'v'; break;
			}
		}
		return null;
	},


	onDocumentMouseDown : function (e) {
		if (!e) { e = window.event; }
		var target = e.target || e.srcElement;

		if (target._jscLinkedInstance) {
			if (target._jscLinkedInstance.showOnClick) {
				target._jscLinkedInstance.show();
			}
		} else if (target._jscControlName) {
			jsc.onControlPointerStart(e, target, target._jscControlName, 'mouse');
		} else {
			// Mouse is outside the picker controls -> hide the color picker!
			if (jsc.picker && jsc.picker.owner) {
				jsc.picker.owner.hide();
			}
		}
	},


	onDocumentTouchStart : function (e) {
		if (!e) { e = window.event; }
		var target = e.target || e.srcElement;

		if (target._jscLinkedInstance) {
			if (target._jscLinkedInstance.showOnClick) {
				target._jscLinkedInstance.show();
			}
		} else if (target._jscControlName) {
			jsc.onControlPointerStart(e, target, target._jscControlName, 'touch');
		} else {
			if (jsc.picker && jsc.picker.owner) {
				jsc.picker.owner.hide();
			}
		}
	},


	onWindowResize : function (e) {
		jsc.redrawPosition();
	},


	onParentScroll : function (e) {
		// hide the picker when one of the parent elements is scrolled
		if (jsc.picker && jsc.picker.owner) {
			jsc.picker.owner.hide();
		}
	},


	_pointerMoveEvent : {
		mouse: 'mousemove',
		touch: 'touchmove'
	},
	_pointerEndEvent : {
		mouse: 'mouseup',
		touch: 'touchend'
	},


	_pointerOrigin : null,
	_capturedTarget : null,


	onControlPointerStart : function (e, target, controlName, pointerType) {
		var thisObj = target._jscInstance;

		jsc.preventDefault(e);
		jsc.captureTarget(target);

		var registerDragEvents = function (doc, offset) {
			jsc.attachGroupEvent('drag', doc, jsc._pointerMoveEvent[pointerType],
				jsc.onDocumentPointerMove(e, target, controlName, pointerType, offset));
			jsc.attachGroupEvent('drag', doc, jsc._pointerEndEvent[pointerType],
				jsc.onDocumentPointerEnd(e, target, controlName, pointerType));
		};

		registerDragEvents(document, [0, 0]);

		if (window.parent && window.frameElement) {
			var rect = window.frameElement.getBoundingClientRect();
			var ofs = [-rect.left, -rect.top];
			registerDragEvents(window.parent.window.document, ofs);
		}

		var abs = jsc.getAbsPointerPos(e);
		var rel = jsc.getRelPointerPos(e);
		jsc._pointerOrigin = {
			x: abs.x - rel.x,
			y: abs.y - rel.y
		};

		switch (controlName) {
		case 'pad':
			// if the slider is at the bottom, move it up
			switch (jsc.getSliderComponent(thisObj)) {
			case 's': if (thisObj.hsv[1] === 0) { thisObj.fromHSV(null, 100, null); }; break;
			case 'v': if (thisObj.hsv[2] === 0) { thisObj.fromHSV(null, null, 100); }; break;
			}
			jsc.setPad(thisObj, e, 0, 0);
			break;

		case 'sld':
			jsc.setSld(thisObj, e, 0);
			break;
		}

		jsc.dispatchFineChange(thisObj);
	},


	onDocumentPointerMove : function (e, target, controlName, pointerType, offset) {
		return function (e) {
			var thisObj = target._jscInstance;
			switch (controlName) {
			case 'pad':
				if (!e) { e = window.event; }
				jsc.setPad(thisObj, e, offset[0], offset[1]);
				jsc.dispatchFineChange(thisObj);
				break;

			case 'sld':
				if (!e) { e = window.event; }
				jsc.setSld(thisObj, e, offset[1]);
				jsc.dispatchFineChange(thisObj);
				break;
			}
		}
	},


	onDocumentPointerEnd : function (e, target, controlName, pointerType) {
		return function (e) {
			var thisObj = target._jscInstance;
			jsc.detachGroupEvents('drag');
			jsc.releaseTarget();
			// Always dispatch changes after detaching outstanding mouse handlers,
			// in case some user interaction will occur in user's onchange callback
			// that would intrude with current mouse events
			jsc.dispatchChange(thisObj);
		};
	},


	dispatchChange : function (thisObj) {
		if (thisObj.valueElement) {
			if (jsc.isElementType(thisObj.valueElement, 'input')) {
				jsc.fireEvent(thisObj.valueElement, 'change');
			}
		}
	},


	dispatchFineChange : function (thisObj) {
		if (thisObj.onFineChange) {
			var callback;
			if (typeof thisObj.onFineChange === 'string') {
				callback = new Function (thisObj.onFineChange);
			} else {
				callback = thisObj.onFineChange;
			}
			callback.call(thisObj);
		}
	},


	setPad : function (thisObj, e, ofsX, ofsY) {
		var pointerAbs = jsc.getAbsPointerPos(e);
		var x = ofsX + pointerAbs.x - jsc._pointerOrigin.x - thisObj.padding - thisObj.insetWidth;
		var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;

		var xVal = x * (360 / (thisObj.width - 1));
		var yVal = 100 - (y * (100 / (thisObj.height - 1)));

		switch (jsc.getPadYComponent(thisObj)) {
		case 's': thisObj.fromHSV(xVal, yVal, null, jsc.leaveSld); break;
		case 'v': thisObj.fromHSV(xVal, null, yVal, jsc.leaveSld); break;
		}
	},


	setSld : function (thisObj, e, ofsY) {
		var pointerAbs = jsc.getAbsPointerPos(e);
		var y = ofsY + pointerAbs.y - jsc._pointerOrigin.y - thisObj.padding - thisObj.insetWidth;

		var yVal = 100 - (y * (100 / (thisObj.height - 1)));

		switch (jsc.getSliderComponent(thisObj)) {
		case 's': thisObj.fromHSV(null, yVal, null, jsc.leavePad); break;
		case 'v': thisObj.fromHSV(null, null, yVal, jsc.leavePad); break;
		}
	},


	_vmlNS : 'jsc_vml_',
	_vmlCSS : 'jsc_vml_css_',
	_vmlReady : false,


	initVML : function () {
		if (!jsc._vmlReady) {
			// init VML namespace
			var doc = document;
			if (!doc.namespaces[jsc._vmlNS]) {
				doc.namespaces.add(jsc._vmlNS, 'urn:schemas-microsoft-com:vml');
			}
			if (!doc.styleSheets[jsc._vmlCSS]) {
				var tags = ['shape', 'shapetype', 'group', 'background', 'path', 'formulas', 'handles', 'fill', 'stroke', 'shadow', 'textbox', 'textpath', 'imagedata', 'line', 'polyline', 'curve', 'rect', 'roundrect', 'oval', 'arc', 'image'];
				var ss = doc.createStyleSheet();
				ss.owningElement.id = jsc._vmlCSS;
				for (var i = 0; i < tags.length; i += 1) {
					ss.addRule(jsc._vmlNS + '\\:' + tags[i], 'behavior:url(#default#VML);');
				}
			}
			jsc._vmlReady = true;
		}
	},


	createPalette : function () {

		var paletteObj = {
			elm: null,
			draw: null
		};

		if (jsc.isCanvasSupported) {
			// Canvas implementation for modern browsers

			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');

			var drawFunc = function (width, height, type) {
				canvas.width = width;
				canvas.height = height;

				ctx.clearRect(0, 0, canvas.width, canvas.height);

				var hGrad = ctx.createLinearGradient(0, 0, canvas.width, 0);
				hGrad.addColorStop(0 / 6, '#F00');
				hGrad.addColorStop(1 / 6, '#FF0');
				hGrad.addColorStop(2 / 6, '#0F0');
				hGrad.addColorStop(3 / 6, '#0FF');
				hGrad.addColorStop(4 / 6, '#00F');
				hGrad.addColorStop(5 / 6, '#F0F');
				hGrad.addColorStop(6 / 6, '#F00');

				ctx.fillStyle = hGrad;
				ctx.fillRect(0, 0, canvas.width, canvas.height);

				var vGrad = ctx.createLinearGradient(0, 0, 0, canvas.height);
				switch (type.toLowerCase()) {
				case 's':
					vGrad.addColorStop(0, 'rgba(255,255,255,0)');
					vGrad.addColorStop(1, 'rgba(255,255,255,1)');
					break;
				case 'v':
					vGrad.addColorStop(0, 'rgba(0,0,0,0)');
					vGrad.addColorStop(1, 'rgba(0,0,0,1)');
					break;
				}
				ctx.fillStyle = vGrad;
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			};

			paletteObj.elm = canvas;
			paletteObj.draw = drawFunc;

		} else {
			// VML fallback for IE 7 and 8

			jsc.initVML();

			var vmlContainer = document.createElement('div');
			vmlContainer.style.position = 'relative';
			vmlContainer.style.overflow = 'hidden';

			var hGrad = document.createElement(jsc._vmlNS + ':fill');
			hGrad.type = 'gradient';
			hGrad.method = 'linear';
			hGrad.angle = '90';
			hGrad.colors = '16.67% #F0F, 33.33% #00F, 50% #0FF, 66.67% #0F0, 83.33% #FF0'

			var hRect = document.createElement(jsc._vmlNS + ':rect');
			hRect.style.position = 'absolute';
			hRect.style.left = -1 + 'px';
			hRect.style.top = -1 + 'px';
			hRect.stroked = false;
			hRect.appendChild(hGrad);
			vmlContainer.appendChild(hRect);

			var vGrad = document.createElement(jsc._vmlNS + ':fill');
			vGrad.type = 'gradient';
			vGrad.method = 'linear';
			vGrad.angle = '180';
			vGrad.opacity = '0';

			var vRect = document.createElement(jsc._vmlNS + ':rect');
			vRect.style.position = 'absolute';
			vRect.style.left = -1 + 'px';
			vRect.style.top = -1 + 'px';
			vRect.stroked = false;
			vRect.appendChild(vGrad);
			vmlContainer.appendChild(vRect);

			var drawFunc = function (width, height, type) {
				vmlContainer.style.width = width + 'px';
				vmlContainer.style.height = height + 'px';

				hRect.style.width =
				vRect.style.width =
					(width + 1) + 'px';
				hRect.style.height =
				vRect.style.height =
					(height + 1) + 'px';

				// Colors must be specified during every redraw, otherwise IE won't display
				// a full gradient during a subsequential redraw
				hGrad.color = '#F00';
				hGrad.color2 = '#F00';

				switch (type.toLowerCase()) {
				case 's':
					vGrad.color = vGrad.color2 = '#FFF';
					break;
				case 'v':
					vGrad.color = vGrad.color2 = '#000';
					break;
				}
			};
			
			paletteObj.elm = vmlContainer;
			paletteObj.draw = drawFunc;
		}

		return paletteObj;
	},


	createSliderGradient : function () {

		var sliderObj = {
			elm: null,
			draw: null
		};

		if (jsc.isCanvasSupported) {
			// Canvas implementation for modern browsers

			var canvas = document.createElement('canvas');
			var ctx = canvas.getContext('2d');

			var drawFunc = function (width, height, color1, color2) {
				canvas.width = width;
				canvas.height = height;

				ctx.clearRect(0, 0, canvas.width, canvas.height);

				var grad = ctx.createLinearGradient(0, 0, 0, canvas.height);
				grad.addColorStop(0, color1);
				grad.addColorStop(1, color2);

				ctx.fillStyle = grad;
				ctx.fillRect(0, 0, canvas.width, canvas.height);
			};

			sliderObj.elm = canvas;
			sliderObj.draw = drawFunc;

		} else {
			// VML fallback for IE 7 and 8

			jsc.initVML();

			var vmlContainer = document.createElement('div');
			vmlContainer.style.position = 'relative';
			vmlContainer.style.overflow = 'hidden';

			var grad = document.createElement(jsc._vmlNS + ':fill');
			grad.type = 'gradient';
			grad.method = 'linear';
			grad.angle = '180';

			var rect = document.createElement(jsc._vmlNS + ':rect');
			rect.style.position = 'absolute';
			rect.style.left = -1 + 'px';
			rect.style.top = -1 + 'px';
			rect.stroked = false;
			rect.appendChild(grad);
			vmlContainer.appendChild(rect);

			var drawFunc = function (width, height, color1, color2) {
				vmlContainer.style.width = width + 'px';
				vmlContainer.style.height = height + 'px';

				rect.style.width = (width + 1) + 'px';
				rect.style.height = (height + 1) + 'px';

				grad.color = color1;
				grad.color2 = color2;
			};
			
			sliderObj.elm = vmlContainer;
			sliderObj.draw = drawFunc;
		}

		return sliderObj;
	},


	leaveValue : 1<<0,
	leaveStyle : 1<<1,
	leavePad : 1<<2,
	leaveSld : 1<<3,


	BoxShadow : (function () {
		var BoxShadow = function (hShadow, vShadow, blur, spread, color, inset) {
			this.hShadow = hShadow;
			this.vShadow = vShadow;
			this.blur = blur;
			this.spread = spread;
			this.color = color;
			this.inset = !!inset;
		};

		BoxShadow.prototype.toString = function () {
			var vals = [
				Math.round(this.hShadow) + 'px',
				Math.round(this.vShadow) + 'px',
				Math.round(this.blur) + 'px',
				Math.round(this.spread) + 'px',
				this.color
			];
			if (this.inset) {
				vals.push('inset');
			}
			return vals.join(' ');
		};

		return BoxShadow;
	})(),


	//
	// Usage:
	// var myColor = new jscolor(<targetElement> [, <options>])
	//

	jscolor : function (targetElement, options) {

		// General options
		//
		this.value = null; // initial HEX color. To change it later, use methods fromString(), fromHSV() and fromRGB()
		this.valueElement = targetElement; // element that will be used to display and input the color code
		this.styleElement = targetElement; // element that will preview the picked color using CSS backgroundColor
		this.required = true; // whether the associated text <input> can be left empty
		this.refine = true; // whether to refine the entered color code (e.g. uppercase it and remove whitespace)
		this.hash = false; // whether to prefix the HEX color code with # symbol
		this.uppercase = true; // whether to show the color code in upper case
		this.onFineChange = null; // called instantly every time the color changes (value can be either a function or a string with javascript code)
		this.activeClass = 'jscolor-active'; // class to be set to the target element when a picker window is open on it
		this.overwriteImportant = false; // whether to overwrite colors of styleElement using !important
		this.minS = 0; // min allowed saturation (0 - 100)
		this.maxS = 100; // max allowed saturation (0 - 100)
		this.minV = 0; // min allowed value (brightness) (0 - 100)
		this.maxV = 100; // max allowed value (brightness) (0 - 100)

		// Accessing the picked color
		//
		this.hsv = [0, 0, 100]; // read-only  [0-360, 0-100, 0-100]
		this.rgb = [255, 255, 255]; // read-only  [0-255, 0-255, 0-255]

		// Color Picker options
		//
		this.width = 181; // width of color palette (in px)
		this.height = 101; // height of color palette (in px)
		this.showOnClick = true; // whether to display the color picker when user clicks on its target element
		this.mode = 'HSV'; // HSV | HVS | HS | HV - layout of the color picker controls
		this.position = 'bottom'; // left | right | top | bottom - position relative to the target element
		this.smartPosition = true; // automatically change picker position when there is not enough space for it
		this.sliderSize = 16; // px
		this.crossSize = 8; // px
		this.closable = false; // whether to display the Close button
		this.closeText = 'Close';
		this.buttonColor = '#000000'; // CSS color
		this.buttonHeight = 18; // px
		this.padding = 12; // px
		this.backgroundColor = '#FFFFFF'; // CSS color
		this.borderWidth = 1; // px
		this.borderColor = '#BBBBBB'; // CSS color
		this.borderRadius = 8; // px
		this.insetWidth = 1; // px
		this.insetColor = '#BBBBBB'; // CSS color
		this.shadow = true; // whether to display shadow
		this.shadowBlur = 15; // px
		this.shadowColor = 'rgba(0,0,0,0.2)'; // CSS color
		this.pointerColor = '#4C4C4C'; // px
		this.pointerBorderColor = '#FFFFFF'; // px
        this.pointerBorderWidth = 1; // px
        this.pointerThickness = 2; // px
		this.zIndex = 1000;
		this.container = null; // where to append the color picker (BODY element by default)


		for (var opt in options) {
			if (options.hasOwnProperty(opt)) {
				this[opt] = options[opt];
			}
		}


		this.hide = function () {
			if (isPickerOwner()) {
				detachPicker();
			}
		};


		this.show = function () {
			drawPicker();
		};


		this.redraw = function () {
			if (isPickerOwner()) {
				drawPicker();
			}
		};


		this.importColor = function () {
			if (!this.valueElement) {
				this.exportColor();
			} else {
				if (jsc.isElementType(this.valueElement, 'input')) {
					if (!this.refine) {
						if (!this.fromString(this.valueElement.value, jsc.leaveValue)) {
							if (this.styleElement) {
								this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;
								this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;
								this.styleElement.style.color = this.styleElement._jscOrigStyle.color;
							}
							this.exportColor(jsc.leaveValue | jsc.leaveStyle);
						}
					} else if (!this.required && /^\s*$/.test(this.valueElement.value)) {
						this.valueElement.value = '';
						if (this.styleElement) {
							this.styleElement.style.backgroundImage = this.styleElement._jscOrigStyle.backgroundImage;
							this.styleElement.style.backgroundColor = this.styleElement._jscOrigStyle.backgroundColor;
							this.styleElement.style.color = this.styleElement._jscOrigStyle.color;
						}
						this.exportColor(jsc.leaveValue | jsc.leaveStyle);

					} else if (this.fromString(this.valueElement.value)) {
						// managed to import color successfully from the value -> OK, don't do anything
					} else {
						this.exportColor();
					}
				} else {
					// not an input element -> doesn't have any value
					this.exportColor();
				}
			}
		};


		this.exportColor = function (flags) {
			if (!(flags & jsc.leaveValue) && this.valueElement) {
				var value = this.toString();
				if (this.uppercase) { value = value.toUpperCase(); }
				if (this.hash) { value = '#' + value; }

				if (jsc.isElementType(this.valueElement, 'input')) {
					this.valueElement.value = value;
				} else {
					this.valueElement.innerHTML = value;
				}
			}
			if (!(flags & jsc.leaveStyle)) {
				if (this.styleElement) {
					var bgColor = '#' + this.toString();
					var fgColor = this.isLight() ? '#000' : '#FFF';

					this.styleElement.style.backgroundImage = 'none';
					this.styleElement.style.backgroundColor = bgColor;
					this.styleElement.style.color = fgColor;

					if (this.overwriteImportant) {
						this.styleElement.setAttribute('style',
							'background: ' + bgColor + ' !important; ' +
							'color: ' + fgColor + ' !important;'
						);
					}
				}
			}
			if (!(flags & jsc.leavePad) && isPickerOwner()) {
				redrawPad();
			}
			if (!(flags & jsc.leaveSld) && isPickerOwner()) {
				redrawSld();
			}
		};


		// h: 0-360
		// s: 0-100
		// v: 0-100
		//
		this.fromHSV = function (h, s, v, flags) { // null = don't change
			if (h !== null) {
				if (isNaN(h)) { return false; }
				h = Math.max(0, Math.min(360, h));
			}
			if (s !== null) {
				if (isNaN(s)) { return false; }
				s = Math.max(0, Math.min(100, this.maxS, s), this.minS);
			}
			if (v !== null) {
				if (isNaN(v)) { return false; }
				v = Math.max(0, Math.min(100, this.maxV, v), this.minV);
			}

			this.rgb = HSV_RGB(
				h===null ? this.hsv[0] : (this.hsv[0]=h),
				s===null ? this.hsv[1] : (this.hsv[1]=s),
				v===null ? this.hsv[2] : (this.hsv[2]=v)
			);

			this.exportColor(flags);
		};


		// r: 0-255
		// g: 0-255
		// b: 0-255
		//
		this.fromRGB = function (r, g, b, flags) { // null = don't change
			if (r !== null) {
				if (isNaN(r)) { return false; }
				r = Math.max(0, Math.min(255, r));
			}
			if (g !== null) {
				if (isNaN(g)) { return false; }
				g = Math.max(0, Math.min(255, g));
			}
			if (b !== null) {
				if (isNaN(b)) { return false; }
				b = Math.max(0, Math.min(255, b));
			}

			var hsv = RGB_HSV(
				r===null ? this.rgb[0] : r,
				g===null ? this.rgb[1] : g,
				b===null ? this.rgb[2] : b
			);
			if (hsv[0] !== null) {
				this.hsv[0] = Math.max(0, Math.min(360, hsv[0]));
			}
			if (hsv[2] !== 0) {
				this.hsv[1] = hsv[1]===null ? null : Math.max(0, this.minS, Math.min(100, this.maxS, hsv[1]));
			}
			this.hsv[2] = hsv[2]===null ? null : Math.max(0, this.minV, Math.min(100, this.maxV, hsv[2]));

			// update RGB according to final HSV, as some values might be trimmed
			var rgb = HSV_RGB(this.hsv[0], this.hsv[1], this.hsv[2]);
			this.rgb[0] = rgb[0];
			this.rgb[1] = rgb[1];
			this.rgb[2] = rgb[2];

			this.exportColor(flags);
		};


		this.fromString = function (str, flags) {
			var m;
			if (m = str.match(/^\W*([0-9A-F]{3}([0-9A-F]{3})?)\W*$/i)) {
				// HEX notation
				//

				if (m[1].length === 6) {
					// 6-char notation
					this.fromRGB(
						parseInt(m[1].substr(0,2),16),
						parseInt(m[1].substr(2,2),16),
						parseInt(m[1].substr(4,2),16),
						flags
					);
				} else {
					// 3-char notation
					this.fromRGB(
						parseInt(m[1].charAt(0) + m[1].charAt(0),16),
						parseInt(m[1].charAt(1) + m[1].charAt(1),16),
						parseInt(m[1].charAt(2) + m[1].charAt(2),16),
						flags
					);
				}
				return true;

			} else if (m = str.match(/^\W*rgba?\(([^)]*)\)\W*$/i)) {
				var params = m[1].split(',');
				var re = /^\s*(\d*)(\.\d+)?\s*$/;
				var mR, mG, mB;
				if (
					params.length >= 3 &&
					(mR = params[0].match(re)) &&
					(mG = params[1].match(re)) &&
					(mB = params[2].match(re))
				) {
					var r = parseFloat((mR[1] || '0') + (mR[2] || ''));
					var g = parseFloat((mG[1] || '0') + (mG[2] || ''));
					var b = parseFloat((mB[1] || '0') + (mB[2] || ''));
					this.fromRGB(r, g, b, flags);
					return true;
				}
			}
			return false;
		};


		this.toString = function () {
			return (
				(0x100 | Math.round(this.rgb[0])).toString(16).substr(1) +
				(0x100 | Math.round(this.rgb[1])).toString(16).substr(1) +
				(0x100 | Math.round(this.rgb[2])).toString(16).substr(1)
			);
		};


		this.toHEXString = function () {
			return '#' + this.toString().toUpperCase();
		};


		this.toRGBString = function () {
			return ('rgb(' +
				Math.round(this.rgb[0]) + ',' +
				Math.round(this.rgb[1]) + ',' +
				Math.round(this.rgb[2]) + ')'
			);
		};


		this.isLight = function () {
			return (
				0.213 * this.rgb[0] +
				0.715 * this.rgb[1] +
				0.072 * this.rgb[2] >
				255 / 2
			);
		};


		this._processParentElementsInDOM = function () {
			if (this._linkedElementsProcessed) { return; }
			this._linkedElementsProcessed = true;

			var elm = this.targetElement;
			do {
				// If the target element or one of its parent nodes has fixed position,
				// then use fixed positioning instead
				//
				// Note: In Firefox, getComputedStyle returns null in a hidden iframe,
				// that's why we need to check if the returned style object is non-empty
				var currStyle = jsc.getStyle(elm);
				if (currStyle && currStyle.position.toLowerCase() === 'fixed') {
					this.fixed = true;
				}

				if (elm !== this.targetElement) {
					// Ensure to attach onParentScroll only once to each parent element
					// (multiple targetElements can share the same parent nodes)
					//
					// Note: It's not just offsetParents that can be scrollable,
					// that's why we loop through all parent nodes
					if (!elm._jscEventsAttached) {
						jsc.attachEvent(elm, 'scroll', jsc.onParentScroll);
						elm._jscEventsAttached = true;
					}
				}
			} while ((elm = elm.parentNode) && !jsc.isElementType(elm, 'body'));
		};


		// r: 0-255
		// g: 0-255
		// b: 0-255
		//
		// returns: [ 0-360, 0-100, 0-100 ]
		//
		function RGB_HSV (r, g, b) {
			r /= 255;
			g /= 255;
			b /= 255;
			var n = Math.min(Math.min(r,g),b);
			var v = Math.max(Math.max(r,g),b);
			var m = v - n;
			if (m === 0) { return [ null, 0, 100 * v ]; }
			var h = r===n ? 3+(b-g)/m : (g===n ? 5+(r-b)/m : 1+(g-r)/m);
			return [
				60 * (h===6?0:h),
				100 * (m/v),
				100 * v
			];
		}


		// h: 0-360
		// s: 0-100
		// v: 0-100
		//
		// returns: [ 0-255, 0-255, 0-255 ]
		//
		function HSV_RGB (h, s, v) {
			var u = 255 * (v / 100);

			if (h === null) {
				return [ u, u, u ];
			}

			h /= 60;
			s /= 100;

			var i = Math.floor(h);
			var f = i%2 ? h-i : 1-(h-i);
			var m = u * (1 - s);
			var n = u * (1 - s * f);
			switch (i) {
				case 6:
				case 0: return [u,n,m];
				case 1: return [n,u,m];
				case 2: return [m,u,n];
				case 3: return [m,n,u];
				case 4: return [n,m,u];
				case 5: return [u,m,n];
			}
		}


		function detachPicker () {
			jsc.unsetClass(THIS.targetElement, THIS.activeClass);
			jsc.picker.wrap.parentNode.removeChild(jsc.picker.wrap);
			delete jsc.picker.owner;
		}


		function drawPicker () {

			// At this point, when drawing the picker, we know what the parent elements are
			// and we can do all related DOM operations, such as registering events on them
			// or checking their positioning
			THIS._processParentElementsInDOM();

			if (!jsc.picker) {
				jsc.picker = {
					owner: null,
					wrap : document.createElement('div'),
					box : document.createElement('div'),
					boxS : document.createElement('div'), // shadow area
					boxB : document.createElement('div'), // border
					pad : document.createElement('div'),
					padB : document.createElement('div'), // border
					padM : document.createElement('div'), // mouse/touch area
					padPal : jsc.createPalette(),
					cross : document.createElement('div'),
					crossBY : document.createElement('div'), // border Y
					crossBX : document.createElement('div'), // border X
					crossLY : document.createElement('div'), // line Y
					crossLX : document.createElement('div'), // line X
					sld : document.createElement('div'),
					sldB : document.createElement('div'), // border
					sldM : document.createElement('div'), // mouse/touch area
					sldGrad : jsc.createSliderGradient(),
					sldPtrS : document.createElement('div'), // slider pointer spacer
					sldPtrIB : document.createElement('div'), // slider pointer inner border
					sldPtrMB : document.createElement('div'), // slider pointer middle border
					sldPtrOB : document.createElement('div'), // slider pointer outer border
					btn : document.createElement('div'),
					btnT : document.createElement('span') // text
				};

				jsc.picker.pad.appendChild(jsc.picker.padPal.elm);
				jsc.picker.padB.appendChild(jsc.picker.pad);
				jsc.picker.cross.appendChild(jsc.picker.crossBY);
				jsc.picker.cross.appendChild(jsc.picker.crossBX);
				jsc.picker.cross.appendChild(jsc.picker.crossLY);
				jsc.picker.cross.appendChild(jsc.picker.crossLX);
				jsc.picker.padB.appendChild(jsc.picker.cross);
				jsc.picker.box.appendChild(jsc.picker.padB);
				jsc.picker.box.appendChild(jsc.picker.padM);

				jsc.picker.sld.appendChild(jsc.picker.sldGrad.elm);
				jsc.picker.sldB.appendChild(jsc.picker.sld);
				jsc.picker.sldB.appendChild(jsc.picker.sldPtrOB);
				jsc.picker.sldPtrOB.appendChild(jsc.picker.sldPtrMB);
				jsc.picker.sldPtrMB.appendChild(jsc.picker.sldPtrIB);
				jsc.picker.sldPtrIB.appendChild(jsc.picker.sldPtrS);
				jsc.picker.box.appendChild(jsc.picker.sldB);
				jsc.picker.box.appendChild(jsc.picker.sldM);

				jsc.picker.btn.appendChild(jsc.picker.btnT);
				jsc.picker.box.appendChild(jsc.picker.btn);

				jsc.picker.boxB.appendChild(jsc.picker.box);
				jsc.picker.wrap.appendChild(jsc.picker.boxS);
				jsc.picker.wrap.appendChild(jsc.picker.boxB);
			}

			var p = jsc.picker;

			var displaySlider = !!jsc.getSliderComponent(THIS);
			var dims = jsc.getPickerDims(THIS);
			var crossOuterSize = (2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize);
			var padToSliderPadding = jsc.getPadToSliderPadding(THIS);
			var borderRadius = Math.min(
				THIS.borderRadius,
				Math.round(THIS.padding * Math.PI)); // px
			var padCursor = 'crosshair';

			// wrap
			p.wrap.style.clear = 'both';
			p.wrap.style.width = (dims[0] + 2 * THIS.borderWidth) + 'px';
			p.wrap.style.height = (dims[1] + 2 * THIS.borderWidth) + 'px';
			p.wrap.style.zIndex = THIS.zIndex;

			// picker
			p.box.style.width = dims[0] + 'px';
			p.box.style.height = dims[1] + 'px';

			p.boxS.style.position = 'absolute';
			p.boxS.style.left = '0';
			p.boxS.style.top = '0';
			p.boxS.style.width = '100%';
			p.boxS.style.height = '100%';
			jsc.setBorderRadius(p.boxS, borderRadius + 'px');

			// picker border
			p.boxB.style.position = 'relative';
			p.boxB.style.border = THIS.borderWidth + 'px solid';
			p.boxB.style.borderColor = THIS.borderColor;
			p.boxB.style.background = THIS.backgroundColor;
			jsc.setBorderRadius(p.boxB, borderRadius + 'px');

			// IE hack:
			// If the element is transparent, IE will trigger the event on the elements under it,
			// e.g. on Canvas or on elements with border
			p.padM.style.background =
			p.sldM.style.background =
				'#FFF';
			jsc.setStyle(p.padM, 'opacity', '0');
			jsc.setStyle(p.sldM, 'opacity', '0');

			// pad
			p.pad.style.position = 'relative';
			p.pad.style.width = THIS.width + 'px';
			p.pad.style.height = THIS.height + 'px';

			// pad palettes (HSV and HVS)
			p.padPal.draw(THIS.width, THIS.height, jsc.getPadYComponent(THIS));

			// pad border
			p.padB.style.position = 'absolute';
			p.padB.style.left = THIS.padding + 'px';
			p.padB.style.top = THIS.padding + 'px';
			p.padB.style.border = THIS.insetWidth + 'px solid';
			p.padB.style.borderColor = THIS.insetColor;

			// pad mouse area
			p.padM._jscInstance = THIS;
			p.padM._jscControlName = 'pad';
			p.padM.style.position = 'absolute';
			p.padM.style.left = '0';
			p.padM.style.top = '0';
			p.padM.style.width = (THIS.padding + 2 * THIS.insetWidth + THIS.width + padToSliderPadding / 2) + 'px';
			p.padM.style.height = dims[1] + 'px';
			p.padM.style.cursor = padCursor;

			// pad cross
			p.cross.style.position = 'absolute';
			p.cross.style.left =
			p.cross.style.top =
				'0';
			p.cross.style.width =
			p.cross.style.height =
				crossOuterSize + 'px';

			// pad cross border Y and X
			p.crossBY.style.position =
			p.crossBX.style.position =
				'absolute';
			p.crossBY.style.background =
			p.crossBX.style.background =
				THIS.pointerBorderColor;
			p.crossBY.style.width =
			p.crossBX.style.height =
				(2 * THIS.pointerBorderWidth + THIS.pointerThickness) + 'px';
			p.crossBY.style.height =
			p.crossBX.style.width =
				crossOuterSize + 'px';
			p.crossBY.style.left =
			p.crossBX.style.top =
				(Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2) - THIS.pointerBorderWidth) + 'px';
			p.crossBY.style.top =
			p.crossBX.style.left =
				'0';

			// pad cross line Y and X
			p.crossLY.style.position =
			p.crossLX.style.position =
				'absolute';
			p.crossLY.style.background =
			p.crossLX.style.background =
				THIS.pointerColor;
			p.crossLY.style.height =
			p.crossLX.style.width =
				(crossOuterSize - 2 * THIS.pointerBorderWidth) + 'px';
			p.crossLY.style.width =
			p.crossLX.style.height =
				THIS.pointerThickness + 'px';
			p.crossLY.style.left =
			p.crossLX.style.top =
				(Math.floor(crossOuterSize / 2) - Math.floor(THIS.pointerThickness / 2)) + 'px';
			p.crossLY.style.top =
			p.crossLX.style.left =
				THIS.pointerBorderWidth + 'px';

			// slider
			p.sld.style.overflow = 'hidden';
			p.sld.style.width = THIS.sliderSize + 'px';
			p.sld.style.height = THIS.height + 'px';

			// slider gradient
			p.sldGrad.draw(THIS.sliderSize, THIS.height, '#000', '#000');

			// slider border
			p.sldB.style.display = displaySlider ? 'block' : 'none';
			p.sldB.style.position = 'absolute';
			p.sldB.style.right = THIS.padding + 'px';
			p.sldB.style.top = THIS.padding + 'px';
			p.sldB.style.border = THIS.insetWidth + 'px solid';
			p.sldB.style.borderColor = THIS.insetColor;

			// slider mouse area
			p.sldM._jscInstance = THIS;
			p.sldM._jscControlName = 'sld';
			p.sldM.style.display = displaySlider ? 'block' : 'none';
			p.sldM.style.position = 'absolute';
			p.sldM.style.right = '0';
			p.sldM.style.top = '0';
			p.sldM.style.width = (THIS.sliderSize + padToSliderPadding / 2 + THIS.padding + 2 * THIS.insetWidth) + 'px';
			p.sldM.style.height = dims[1] + 'px';
			p.sldM.style.cursor = 'default';

			// slider pointer inner and outer border
			p.sldPtrIB.style.border =
			p.sldPtrOB.style.border =
				THIS.pointerBorderWidth + 'px solid ' + THIS.pointerBorderColor;

			// slider pointer outer border
			p.sldPtrOB.style.position = 'absolute';
			p.sldPtrOB.style.left = -(2 * THIS.pointerBorderWidth + THIS.pointerThickness) + 'px';
			p.sldPtrOB.style.top = '0';

			// slider pointer middle border
			p.sldPtrMB.style.border = THIS.pointerThickness + 'px solid ' + THIS.pointerColor;

			// slider pointer spacer
			p.sldPtrS.style.width = THIS.sliderSize + 'px';
			p.sldPtrS.style.height = sliderPtrSpace + 'px';

			// the Close button
			function setBtnBorder () {
				var insetColors = THIS.insetColor.split(/\s+/);
				var outsetColor = insetColors.length < 2 ? insetColors[0] : insetColors[1] + ' ' + insetColors[0] + ' ' + insetColors[0] + ' ' + insetColors[1];
				p.btn.style.borderColor = outsetColor;
			}
			p.btn.style.display = THIS.closable ? 'block' : 'none';
			p.btn.style.position = 'absolute';
			p.btn.style.left = THIS.padding + 'px';
			p.btn.style.bottom = THIS.padding + 'px';
			p.btn.style.padding = '0 15px';
			p.btn.style.height = THIS.buttonHeight + 'px';
			p.btn.style.border = THIS.insetWidth + 'px solid';
			setBtnBorder();
			p.btn.style.color = THIS.buttonColor;
			p.btn.style.font = '12px sans-serif';
			p.btn.style.textAlign = 'center';
			try {
				p.btn.style.cursor = 'pointer';
			} catch(eOldIE) {
				p.btn.style.cursor = 'hand';
			}
			p.btn.onmousedown = function () {
				THIS.hide();
			};
			p.btnT.style.lineHeight = THIS.buttonHeight + 'px';
			p.btnT.innerHTML = '';
			p.btnT.appendChild(document.createTextNode(THIS.closeText));

			// place pointers
			redrawPad();
			redrawSld();

			// If we are changing the owner without first closing the picker,
			// make sure to first deal with the old owner
			if (jsc.picker.owner && jsc.picker.owner !== THIS) {
				jsc.unsetClass(jsc.picker.owner.targetElement, THIS.activeClass);
			}

			// Set the new picker owner
			jsc.picker.owner = THIS;

			// The redrawPosition() method needs picker.owner to be set, that's why we call it here,
			// after setting the owner
			if (jsc.isElementType(container, 'body')) {
				jsc.redrawPosition();
			} else {
				jsc._drawPosition(THIS, 0, 0, 'relative', false);
			}

			if (p.wrap.parentNode != container) {
				container.appendChild(p.wrap);
			}

			jsc.setClass(THIS.targetElement, THIS.activeClass);
		}


		function redrawPad () {
			// redraw the pad pointer
			switch (jsc.getPadYComponent(THIS)) {
			case 's': var yComponent = 1; break;
			case 'v': var yComponent = 2; break;
			}
			var x = Math.round((THIS.hsv[0] / 360) * (THIS.width - 1));
			var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));
			var crossOuterSize = (2 * THIS.pointerBorderWidth + THIS.pointerThickness + 2 * THIS.crossSize);
			var ofs = -Math.floor(crossOuterSize / 2);
			jsc.picker.cross.style.left = (x + ofs) + 'px';
			jsc.picker.cross.style.top = (y + ofs) + 'px';

			// redraw the slider
			switch (jsc.getSliderComponent(THIS)) {
			case 's':
				var rgb1 = HSV_RGB(THIS.hsv[0], 100, THIS.hsv[2]);
				var rgb2 = HSV_RGB(THIS.hsv[0], 0, THIS.hsv[2]);
				var color1 = 'rgb(' +
					Math.round(rgb1[0]) + ',' +
					Math.round(rgb1[1]) + ',' +
					Math.round(rgb1[2]) + ')';
				var color2 = 'rgb(' +
					Math.round(rgb2[0]) + ',' +
					Math.round(rgb2[1]) + ',' +
					Math.round(rgb2[2]) + ')';
				jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);
				break;
			case 'v':
				var rgb = HSV_RGB(THIS.hsv[0], THIS.hsv[1], 100);
				var color1 = 'rgb(' +
					Math.round(rgb[0]) + ',' +
					Math.round(rgb[1]) + ',' +
					Math.round(rgb[2]) + ')';
				var color2 = '#000';
				jsc.picker.sldGrad.draw(THIS.sliderSize, THIS.height, color1, color2);
				break;
			}
		}


		function redrawSld () {
			var sldComponent = jsc.getSliderComponent(THIS);
			if (sldComponent) {
				// redraw the slider pointer
				switch (sldComponent) {
				case 's': var yComponent = 1; break;
				case 'v': var yComponent = 2; break;
				}
				var y = Math.round((1 - THIS.hsv[yComponent] / 100) * (THIS.height - 1));
				jsc.picker.sldPtrOB.style.top = (y - (2 * THIS.pointerBorderWidth + THIS.pointerThickness) - Math.floor(sliderPtrSpace / 2)) + 'px';
			}
		}


		function isPickerOwner () {
			return jsc.picker && jsc.picker.owner === THIS;
		}


		function blurValue () {
			THIS.importColor();
		}


		// Find the target element
		if (typeof targetElement === 'string') {
			var id = targetElement;
			var elm = document.getElementById(id);
			if (elm) {
				this.targetElement = elm;
			} else {
				jsc.warn('Could not find target element with ID \'' + id + '\'');
			}
		} else if (targetElement) {
			this.targetElement = targetElement;
		} else {
			jsc.warn('Invalid target element: \'' + targetElement + '\'');
		}

		if (this.targetElement._jscLinkedInstance) {
			jsc.warn('Cannot link jscolor twice to the same element. Skipping.');
			return;
		}
		this.targetElement._jscLinkedInstance = this;

		// Find the value element
		this.valueElement = jsc.fetchElement(this.valueElement);
		// Find the style element
		this.styleElement = jsc.fetchElement(this.styleElement);

		var THIS = this;
		var container =
			this.container ?
			jsc.fetchElement(this.container) :
			document.getElementsByTagName('body')[0];
		var sliderPtrSpace = 3; // px

		// For BUTTON elements it's important to stop them from sending the form when clicked
		// (e.g. in Safari)
		if (jsc.isElementType(this.targetElement, 'button')) {
			if (this.targetElement.onclick) {
				var origCallback = this.targetElement.onclick;
				this.targetElement.onclick = function (evt) {
					origCallback.call(this, evt);
					return false;
				};
			} else {
				this.targetElement.onclick = function () { return false; };
			}
		}

		/*
		var elm = this.targetElement;
		do {
			// If the target element or one of its offsetParents has fixed position,
			// then use fixed positioning instead
			//
			// Note: In Firefox, getComputedStyle returns null in a hidden iframe,
			// that's why we need to check if the returned style object is non-empty
			var currStyle = jsc.getStyle(elm);
			if (currStyle && currStyle.position.toLowerCase() === 'fixed') {
				this.fixed = true;
			}

			if (elm !== this.targetElement) {
				// attach onParentScroll so that we can recompute the picker position
				// when one of the offsetParents is scrolled
				if (!elm._jscEventsAttached) {
					jsc.attachEvent(elm, 'scroll', jsc.onParentScroll);
					elm._jscEventsAttached = true;
				}
			}
		} while ((elm = elm.offsetParent) && !jsc.isElementType(elm, 'body'));
		*/

		// valueElement
		if (this.valueElement) {
			if (jsc.isElementType(this.valueElement, 'input')) {
				var updateField = function () {
					THIS.fromString(THIS.valueElement.value, jsc.leaveValue);
					jsc.dispatchFineChange(THIS);
				};
				jsc.attachEvent(this.valueElement, 'keyup', updateField);
				jsc.attachEvent(this.valueElement, 'input', updateField);
				jsc.attachEvent(this.valueElement, 'blur', blurValue);
				this.valueElement.setAttribute('autocomplete', 'off');
			}
		}

		// styleElement
		if (this.styleElement) {
			this.styleElement._jscOrigStyle = {
				backgroundImage : this.styleElement.style.backgroundImage,
				backgroundColor : this.styleElement.style.backgroundColor,
				color : this.styleElement.style.color
			};
		}

		if (this.value) {
			// Try to set the color from the .value option and if unsuccessful,
			// export the current color
			this.fromString(this.value) || this.exportColor();
		} else {
			this.importColor();
		}
	}

};


//================================
// Public properties and methods
//================================


// By default, search for all elements with class="jscolor" and install a color picker on them.
//
// You can change what class name will be looked for by setting the property jscolor.lookupClass
// anywhere in your HTML document. To completely disable the automatic lookup, set it to null.
//
jsc.jscolor.lookupClass = 'jscolor';


jsc.jscolor.installByClassName = function (className) {
	var inputElms = document.getElementsByTagName('input');
	var buttonElms = document.getElementsByTagName('button');

	jsc.tryInstallOnElements(inputElms, className);
	jsc.tryInstallOnElements(buttonElms, className);
};


jsc.register();


return jsc.jscolor;


})(); }
