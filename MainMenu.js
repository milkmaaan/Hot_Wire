Game.MainMenu = function(game) {
    this.player = null;
};

Game.MainMenu.prototype = {
    create:function(game) {

        //black Fade
        this.camera.flash('#000000');

        //scale mode - central
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //scale mode - customized
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;

        //add background
        game.add.tileSprite(0, 0, 1216, 1920, 'background');

        //add clicksound
		clicksound = this.game.add.audio('clicksound');
        
        this.createButton(game,"",game.world.centerX-250,game.world.centerY, 947, 204, "buttonStartgame",
        function(){
            clicksound.play();
            this.state.start('SelectMode');
        });

        this.createButton(game,"",game.world.centerX+450,game.world.centerY-800, 196, 245, "buttonAnleitung",
        function(){
            clicksound.play();
            this.state.start('Anleitung');
        });

        this.createButton(game,"",game.world.centerX+450,game.world.centerY+800, 196, 245, "buttonSteuerung",
        function(){
            clicksound.play();
            this.state.start('Steuerung');
        });
          
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