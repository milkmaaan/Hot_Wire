Game.Preloader = function(game){
	this.preloadBar = null;
	this.player = null;
};

Game.Preloader.prototype = {
	preload:function(){
	
		//titlescreen background with Logo
		this.load.image("background", "assets/backgrounds/background.png");
		this.load.image("background_selectmode", "assets/backgrounds/background_selectmode.png");
		this.load.image("background_steuerung", "assets/backgrounds/background_steuerung.png");
		this.load.image("background_anleitung", "assets/backgrounds/background_anleitung.png");
		this.load.image("background_highscore", "assets/backgrounds/background_highscore.png");
		this.load.image("background_clear", "assets/backgrounds/background_clear.png");
		this.load.image("anleitungneu", "assets/backgrounds/anleitungneu.png");


		//trophies
		this.load.image("trophygold", "assets/trophies/trophy_gold.png");
		this.load.image("trophysilber", "assets/trophies/trophy_silber.png");
		this.load.image("trophybronze", "assets/trophies/trophy_bronze.png");
		this.load.image("trophytimehard1", "assets/trophies/hardlevel1.png");

		//trophyboard
		this.load.image("trophyschrank", "assets/trophies/trophyschrank.png");
		this.load.image("pokalschrank_schwer", "assets/trophies/pokalschrank_schwer.png");

		//Player Sprite
		this.load.spritesheet('player', 'assets/sprites/player.png',59,59);

		//backgrounds
		this.load.image("pauseBackground", "assets/backgrounds/pause_background.png");
		this.load.image("doneBackground", "assets/backgrounds/done_background.png");
		this.load.image("gameoverBackground", "assets/backgrounds/gameover_background.png");

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
		
		//buttons
		this.load.image("buttonHauptmenu", "assets/buttons/button_hauptmenu.png");
		this.load.image("buttonWeiter", "assets/buttons/button_weiter.png");
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

		//sounds
		this.game.load.audio("failsound", "assets/sounds/gameover.wav");
		this.game.load.audio("clicksound", "assets/sounds/click.wav");
		this.game.load.audio("winsound", "assets/sounds/win.wav");
	},

	create:function(){
		//this.state.start('MainMenu');
		this.state.start('Level7_easy');
		//this.state.start('Level5_easy');
		//this.state.start('Level7_hard');
		//this.state.start('Level2_hard');
		
	}
};