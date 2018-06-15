Game.SelectMode = function(game) {
    this.player = null;
};

var titlescreen;
var modeText;
var selectedMode;
var start;

Game.SelectMode.prototype = {
    create:function(game) {

        //black Fade
        this.camera.flash('#000000');

        //scale mode - central
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //scale mode - customized
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;

        //add background
        game.add.tileSprite(0, 0, 1216, 1920, 'background_selectmode');

        //add clicksound
		clicksound = this.game.add.audio('clicksound');
        
        this.createButton(game,"",game.world.centerX+450,game.world.centerY-800, 196, 196, "buttonZurueck",
        function(){
            clicksound.play();
            this.state.start('MainMenu');
        });

        this.createButton(game,"",game.world.centerX+450,game.world.centerY+800, 196, 196, "buttonHighscores",
        function(){
            clicksound.play();
            this.state.start('Highscores');
        });

        var style = {font:"40px Arial", align:"left", fill:"#ffffff", fontWeight:"bold"};
        
        var easybutton = game.add.sprite(this.game.world.centerX / 2 + 280, this.game.world.centerY / 2 + 600, 'buttonEinfachSmall');
        easybutton.inputEnabled = true;
        easybutton.events.onInputDown.add(this.einfachlistener, this);
        easybutton.angle = 90;

        var hardbutton = game.add.sprite(this.game.world.centerX / 2 + 120, this.game.world.centerY / 2 + 600, 'buttonSchwerSmall');
        hardbutton.inputEnabled = true;
        hardbutton.events.onInputDown.add(this.schwerlistener, this);
        hardbutton.angle = 90;

        this.modeText = this.game.add.text(this.game.world.centerX, this.game.world.centerY / 2 - 350, "Schwierigkeitsgrad auswählen...", style);
        this.modeText.angle = 90;

        start = this.createButton(game,"",game.world.centerX-480,game.world.centerY+640, 474, 102, "buttonStart",
        function(){
            clicksound.play();
            this.state.start(selectedMode);
        });
    },

    einfachlistener () {
        var easybutton = this.game.add.sprite(this.game.world.centerX / 2 + 280, this.game.world.centerY / 2 + 600, 'buttonEinfachSmallAktiv');
        easybutton.angle = 90;
        var hardbutton = this.game.add.sprite(this.game.world.centerX / 2 + 120, this.game.world.centerY / 2 + 600, 'buttonSchwerSmall');
        hardbutton.angle = 90;

        selectedMode = "Level1_easy";

        this.modeText.setText("Schwierigkeitsgrad Einfach:\n\n● für Anfänger\n● erreiche das Ziel\n● verlasse nicht den Draht");
        this.modeText.angle = 90;

        clicksound.play();
    },

    schwerlistener () {
        var hardbutton = this.game.add.sprite(this.game.world.centerX / 2 + 120, this.game.world.centerY / 2 + 600, 'buttonSchwerSmallAktiv');
        hardbutton.angle = 90;
        var easybutton = this.game.add.sprite(this.game.world.centerX / 2 + 280, this.game.world.centerY / 2 + 600, 'buttonEinfachSmall');
        easybutton.angle = 90;

        selectedMode = "Level1_hard";

        this.modeText.setText("Schwierigkeitsgrad Schwer:\n\n● für Fortgeschrittene\n● erreiche das Ziel schnellstmöglich\n● dünnerer Draht\n● versuche einen neuen Highscore aufzustellen");
        this.modeText.angle = 90;

        clicksound.play();

    },
    
    update:function(game) {

    },
    createButton: function(game, string, x, y, w, h, wallpaper, callback) {
        var button1 = game.add.button(x, y, wallpaper, callback, this, 2, 1, 0);

        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;
        button1.angle = 90;

        var txt = game.add.text(button1.x, button1.y, string, {
            font:"25px Arial",
            fill:"#000",
            align:"center"
        });

        txt.anchor.setTo(0.5,0.5);
        txt.angle = 90;
    }
}