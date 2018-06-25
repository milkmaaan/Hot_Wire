Game.Preloader = function(game){
	this.preloadBar = null;
	this.player = null;
};

Game.Preloader.prototype = {
	preload:function(){
	
		this.load.image("confetti1", "assets/trophies/confetti1.png");
		this.load.image("confetti2", "assets/trophies/confetti2.png");


		//backgrounds
		this.load.image("background", "assets/backgrounds/background_mainmenu.png");
		this.load.image("background_selectmode", "assets/backgrounds/background_selectmode.png");
		this.load.image("background_steuerung", "assets/backgrounds/background_steuerung.png");
		this.load.image("background_anleitung", "assets/backgrounds/background_anleitung.png");
		this.load.image("background_highscore", "assets/backgrounds/background_highscore.png");
		this.load.image("background_clear", "assets/backgrounds/background_clear.png");
		this.load.image("anleitung1", "assets/backgrounds/anleitung1.png");
		this.load.image("anleitung2", "assets/backgrounds/anleitung2.png");
		this.load.image("pauseBackground", "assets/backgrounds/pause_background.png");
		this.load.image("doneBackground", "assets/backgrounds/done_background.png");
		this.load.image("doneBackgroundgold", "assets/backgrounds/done_background_gold.png");
		this.load.image("gameoverBackground", "assets/backgrounds/gameover_background.png");

		//trophies
		this.load.image("trophygold", "assets/trophies/trophy_gold.png");
		this.load.image("trophysilber", "assets/trophies/trophy_silber.png");
		this.load.image("trophybronze", "assets/trophies/trophy_bronze.png");
		this.load.image("trophytimehard1", "assets/trophies/hardlevel1.png");
		this.load.image("trophytimehard2", "assets/trophies/hardlevel2.png");
		this.load.image("trophytimehard3", "assets/trophies/hardlevel3.png");
		this.load.image("trophytimehard4", "assets/trophies/hardlevel4.png");
		this.load.image("trophytimehard5", "assets/trophies/hardlevel5.png");
		this.load.image("trophytimehard6", "assets/trophies/hardlevel6.png");
		this.load.image("trophytimehard7", "assets/trophies/hardlevel7.png");
		this.load.image("trophytimehard8", "assets/trophies/hardlevel8.png");
		this.load.image("trophytimehard9", "assets/trophies/hardlevel9.png");
		this.load.image("trophytimehard10", "assets/trophies/hardlevel10.png");
		this.load.image("trophytimehard11", "assets/trophies/hardlevel11.png");
		this.load.image("trophytimehard12", "assets/trophies/hardlevel12.png");

		//trophyboard
		this.load.image("trophyschrank", "assets/trophies/trophyschrank.png");
		this.load.image("pokalschrank_schwer", "assets/trophies/pokalschrank_schwer.png");

		//player sprite
		this.load.spritesheet('player', 'assets/sprites/player.png',59,59);

		//sprites for gamebackground and goal
		this.load.image("holz", "assets/sprites/holz.jpg");
		this.load.image("ziel", "assets/sprites/ziel.png");
		this.load.image("ziell", "assets/sprites/ziell.png");

		//status bar
		this.game.load.image("einfachIcon", "assets/statusbar/einfach.png");
		this.game.load.image("schwerIcon", "assets/statusbar/schwer.png");
		this.game.load.image("pauseIcon", "assets/statusbar/pauseicon.png");
		this.load.image("rot", "assets/statusbar/rot.png");
		this.load.image("gruen", "assets/statusbar/gruen.png");	
		this.load.image("soundOff", "assets/statusbar/musicoff.png");
		this.load.image("soundOn", "assets/statusbar/musicon.png");

		//wires easy
		this.load.image("draht9", "assets/sprites/1l.png");
		this.load.image("draht10", "assets/sprites/2l.png");
		this.load.image("draht11", "assets/sprites/3l.png");
		this.load.image("draht12", "assets/sprites/4l.png");
		this.load.image("draht13", "assets/sprites/5l.png");
		this.load.image("draht14", "assets/sprites/6l.png");
		this.load.image("draht15", "assets/sprites/7l.png");
		this.load.image("draht16", "assets/sprites/8l.png");

		//wires hard
		this.load.image("draht1", "assets/sprites/1.png");
		this.load.image("draht2", "assets/sprites/2.png");
		this.load.image("draht3", "assets/sprites/3.png");
		this.load.image("draht4", "assets/sprites/4.png");
		this.load.image("draht5", "assets/sprites/5.png");
		this.load.image("draht6", "assets/sprites/6.png");
		this.load.image("draht7", "assets/sprites/7.png");
		this.load.image("draht8", "assets/sprites/8.png");

		//shadow
		this.load.image("schatteneasy7", "assets/shadows/schatteneasy7.png");
		this.load.image("schatteneasy10", "assets/shadows/schatteneasy10.png");
		this.load.image("schatteneasy12", "assets/shadows/schatteneasy12.png");

		this.load.image("schattenhard7", "assets/shadows/schattenhard7.png");
		this.load.image("schattenhard9", "assets/shadows/schattenhard9.png");
		this.load.image("schattenhard10", "assets/shadows/schattenhard10.png");
		this.load.image("schattenhard11", "assets/shadows/schattenhard11.png");
		this.load.image("schattenhard12", "assets/shadows/schattenhard12.png");

		this.load.image("flaecheeasy7", "assets/shadows/flaecheeasy7.png");
		this.load.image("flaecheeasy10", "assets/shadows/flaecheeasy10.png");
		this.load.image("flaecheeasy12", "assets/shadows/flaecheeasy12.png");

		this.load.image("flaechehard7", "assets/shadows/flaechehard7.png");
		this.load.image("flaechehard9", "assets/shadows/flaechehard9.png");
		this.load.image("flaechehard10", "assets/shadows/flaechehard10.png");
		this.load.image("flaechehard11", "assets/shadows/flaechehard11.png");
		this.load.image("flaechehard12a", "assets/shadows/flaechehard12a.png");
		this.load.image("flaechehard12b", "assets/shadows/flaechehard12b.png");
		this.load.image("flaechehard12c", "assets/shadows/flaechehard12c.png");
		
		//buttons
		this.load.image("buttonHauptmenu", "assets/buttons/button_hauptmenu.png");
		this.load.image("buttonHauptmenugold", "assets/buttons/button_hauptmenu_gold.png");
		this.load.image("buttonWeiter", "assets/buttons/button_weiter.png");
		this.load.image("buttonWeitergold", "assets/buttons/button_weiter_gold.png");
		this.load.image("buttonStartgame", "assets/buttons/button_startgame.png");
		this.load.image("buttonEinfachSmall", "assets/buttons/button_einfach_small.png");
		this.load.image("buttonSchwerSmall", "assets/buttons/button_schwer_small.png");
		this.load.image("buttonEinfachSmallAktiv", "assets/buttons/button_einfach_small_aktiv.png");
		this.load.image("buttonSchwerSmallAktiv", "assets/buttons/button_schwer_small_aktiv.png");
		this.load.image("buttonStart", "assets/buttons/button_start.png");
		this.load.image("buttonAgain", "assets/buttons/button_nochmal.png");
		this.load.image("buttonSteuerung", "assets/buttons/button_steuerung.png");
		this.load.image("buttonAnleitung", "assets/buttons/button_anleitung.png");
		this.load.image("buttonZurueck", "assets/buttons/button_zurueck.png");
		this.load.image("buttonHighscores", "assets/buttons/button_highscores.png");
		this.load.image("speakerIcon", "assets/buttons/speaker.png");
		this.load.image("buttonPageLeft", "assets/buttons/button_pageleft.png");
		this.load.image("buttonPageRight", "assets/buttons/button_pageright.png");
		this.load.image("buttonMenuKlein", "assets/buttons/menu_klein.png");
		this.load.image("buttonWeiterKlein", "assets/buttons/weiter_klein.png");
		this.load.image("buttonNochmalKlein", "assets/buttons/nochmal_klein.png");


		//sounds
		this.game.load.audio("failsound", "assets/sounds/gameover.wav");
		this.game.load.audio("clicksound", "assets/sounds/click.wav");
		this.game.load.audio("winsound", "assets/sounds/win.wav");
		this.game.load.audio("soundsteuerung", "assets/sounds/hwsteuerung.wav");
		this.game.load.audio("soundanleitung", "assets/sounds/hwanleitung.wav");

	},

	create:function(){
		//this.state.start('MainMenu');
		//this.state.start('Level1_easy');
		this.state.start('Level1_hard');
		
	}
};