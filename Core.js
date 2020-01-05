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
					element.style.color = nameColor;
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
<h1>Reverse Panel</h1>
	<div class="VEX4-extras">
	<div class="VEX4-extras-item">
	<p>Name: Reverse - Color Changer</p>
	<input id="color" type="text" placeholder="HEX - #FFFFFF"/>
	<input id="submitColor" value="Submit" type="button" />
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
document.getElementById("submitColor").addEventListener("click", changeBackground, false);

function changeBackground() {
	var nameColor = document.getElementById("color").value;
}
{
}

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
	<p>Name: Flix - Color Changer</p>
	<input id="vex-hc" type="text" placeholder="hex/rgb ex. HEX - #ffffff RGB - (255, 0, 0)">
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

	const VEX_DOM_HC = _$("#vex-hc");
	let VEX_HUD_COLOR = "";

	VEX_DOM_HC.addEventListener("change", event => {

		if(event.target.value == localStorage.getItem("vex-hc"))
		  return;
	  
		localStorage.setItem("vex-hc", event.target.value);
	  
		VEX_HUD_COLOR = localStorage.getItem("vex-hc");
	  
		VEX_HUD_COLOR_FUNC();
	  }, false)

	  const init = () => {
		VEX_DOM_HC.value = localStorage.getItem("vex-hc") || "";
		VEX_HUD_COLOR = VEX_DOM_HC.value;
		VEX_HUD_COLOR_FUNC();

	const VEX_HUD_COLOR_FUNC = () => {

		for(const element of _$(".fade"))
		  element.style.background = VEX_HUD_COLOR;
	  
		_$("#overlay").style.background = "radial-gradient("+VEX_HUD_COLOR+" 300px,"+VEX_HUD_COLOR+")";
	  };
}})}})}
