Game.Anleitung = function(game) {
    this.player = null;
};

var titlescreen;

Game.Anleitung.prototype = {
    create:function(game) {

        //Black Fade
        this.camera.flash('#000000');

        //Hintergrund
        game.add.tileSprite(0, 0, 1216, 1920, 'background_anleitung');

        //clicksound
        clicksound = this.game.add.audio('clicksound');
        
        //clicksound
		coinsound = this.game.add.audio('coinsound');

        game.add.sprite(0, 0, 'anleitung1');


 


        pageText = this.add.text(game.world.centerX+505,game.world.centerY+615, 'Seite 1 / 2', { fill: "#ffffff", font: "45px Arial", fontWeight: "bold", align: "center" });
        pageText.angle = 90;

        
        this.createButton(game,"",game.world.centerX+450,game.world.centerY-800, 196, 245, "buttonZurueck",
        function(){
            clicksound.play();
            this.state.start('MainMenu');
        });

        //Speaker
        this.createButton(game,"",1060, 1260, 150, 150, "speakerIcon",
        function(){
            clicksound.play();
        });

        //Player (Kugel) - Wird benötigt, damit nicht 'velocity' of null
        sprite = game.add.sprite(-199, -199, 'player');
        this.game.physics.enable(sprite);
        sprite.body.setSize(64, 64, 2, 2);
        
        //Variante 1 - mittig
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //Variante 2 - fullscreen
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;

        //Seite zurück
        this.createButton(game,"",game.world.centerX+480,game.world.centerY+570, 57, 91, "buttonPageLeft",
        function(){
            game.add.sprite(0, 0, 'anleitung1');
            pageText.setText("Seite 1 / 2");
            clicksound.play();
        });

        //Seite vor
        this.createButton(game,"",game.world.centerX+480,game.world.centerY+870, 57, 91, "buttonPageRight",
        function(){
            game.add.sprite(0, 0, 'anleitung2');
            pageText.setText("Seite 2 / 2");
            clicksound.play();
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