Game.Steuerung = function(game) {
    this.player = null;
};

var titlescreen;

Game.Steuerung.prototype = {
    create:function(game) {

        //black Fade
        this.camera.flash('#000000');

        //scale mode - central
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //scale mode - customized
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;

        //add background
        game.add.tileSprite(0, 0, 1216, 1920, 'background_steuerung');

        //speaker
        //speaker = game.add.sprite(1140, 1200, "speakerIcon");
        //speaker.angle = 90;

        //add clicksound
		clicksound = this.game.add.audio('clicksound');
		soundsteuerung = this.game.add.audio('soundsteuerung');

        this.createButton(game,"",game.world.centerX+450,game.world.centerY-800, 196, 245, "buttonZurueck",
        function(){
            soundsteuerung.stop();
            clicksound.play();
            this.state.start('MainMenu');

            if(localStorage.getItem('soundshd') == 1) {
                this.game.sound.mute = false;
            } else {
                this.game.sound.mute = true;
            }
        });

        //Speaker
        this.createButton(game,"",1060, 1260, 150, 150, "speakerIcon",
        function(){
            soundsteuerung.play();
            this.game.sound.mute = false;
        });
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