Game.Highscores = function(game) {
    this.player = null;
};

var titlescreen;

//hard
var level1hardgold = 2
var level1hardsilber = 5

var level2hardgold = 4
var level2hardsilber = 10

var level3hardgold = 6
var level3hardsilber = 12

var level4hardgold = 8
var level4hardsilber = 14

Game.Highscores.prototype = {
    create:function(game) {

        //Black Fade
        this.camera.flash('#000000');

        // Variante - mittig
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //Variante - angepasst
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;

        //Hintergrund
        game.add.tileSprite(0, 0, 1216, 1920, 'background_clear');

        //clicksound
		clicksound = this.game.add.audio('clicksound');

        var style = {font:"40px Arial", align:"center", fill:"#ffffff"};

        trophyschrankhard = game.add.sprite(900, 485, 'trophyschrank');
        trophyschrankhard.angle = 90;

        schwerIcon = this.game.add.sprite(1100, 750, "pokalschrank_schwer");
        schwerIcon.angle = 90;

        //HARD

        if (localStorage.getItem('level1_hard') != null) {

            highscore_schwer1 = this.game.add.text(855, 570, (localStorage.getItem('level1_hard') + " Sek."), style);
            highscore_schwer1.angle = 90;

            //show trophy
            if (localStorage.getItem('level1_hard') <= level1hardgold) {
                //gold
                trophyhard1 = game.add.sprite(789, 535,'trophygold');
                trophyhard1.angle = 90;
            }
            else if (localStorage.getItem('level1_hard') > level1hardgold && localStorage.getItem('level1_hard') <= level1hardsilber) {
                //silber
                trophyhard1 = game.add.sprite(789, 535,'trophysilber');
                trophyhard1.angle = 90;
            }
            else {
                //bronze
                trophyhard1 = game.add.sprite(789, 535,'trophybronze');
                trophyhard1.angle = 90;
            }
        }

        if (localStorage.getItem('level2_hard') != null) {

            highscore_schwer2 = this.game.add.text(855, 788, (localStorage.getItem('level2_hard') + " Sek."), style);
            highscore_schwer2.angle = 90;

            //show trophy
            if (localStorage.getItem('level2_hard') <= level2hardgold) {
                //gold
                trophyhard2 = game.add.sprite(789, 753,'trophygold');
                trophyhard2.angle = 90;
            }
            else if (localStorage.getItem('level2_hard') > level2hardgold && localStorage.getItem('level2_hard') <= level2hardsilber) {
                //silber
                trophyhard2 = game.add.sprite(789, 753,'trophysilber');
                trophyhard2.angle = 90;
            }
            else {
                //bronze
                trophyhard2 = game.add.sprite(789, 753,'trophybronze');
                trophyhard2.angle = 90;
            }
        }

        if (localStorage.getItem('level3_hard') != null) {

            highscore_schwer3 = this.game.add.text(855, 1006, (localStorage.getItem('level3_hard') + " Sek."), style);
            highscore_schwer3.angle = 90;

            //show trophy
            if (localStorage.getItem('level3_hard') <= level3hardgold) {
                //gold
                trophyhard3 = game.add.sprite(789, 971,'trophygold');
                trophyhard3.angle = 90;
            }
            else if (localStorage.getItem('level3_hard') > level3hardgold && localStorage.getItem('level3_hard') <= level3hardsilber) {
                //silber
                trophyhard3 = game.add.sprite(789, 971,'trophysilber');
                trophyhard3.angle = 90;
            }
            else {
                //bronze
                trophyhard3 = game.add.sprite(789, 971,'trophybronze');
                trophyhard3.angle = 90;
            }
        }

        if (localStorage.getItem('level4_hard') != null) {

            highscore_schwer4 = this.game.add.text(855, 1224, (localStorage.getItem('level4_hard') + " Sek."), style);
            highscore_schwer4.angle = 90;

            //show trophy
            if (localStorage.getItem('level4_hard') <= level4hardgold) {
                //gold
                trophyhard4 = game.add.sprite(789, 1189,'trophygold');
                trophyhard4.angle = 90;
            }
            else if (localStorage.getItem('level4_hard') > level4hardgold && localStorage.getItem('level4_hard') <= level4hardsilber) {
                //silber
                trophyhard4 = game.add.sprite(789, 1189,'trophysilber');
                trophyhard4.angle = 90;
            }
            else {
                //bronze
                trophyhard4 = game.add.sprite(789, 1189,'trophybronze');
                trophyhard4.angle = 90;
            }
        }
        
        this.createButton(game,"",game.world.centerX+450,game.world.centerY-800, 196, 196, "buttonZurueck",
        function(){
            clicksound.play();
            this.state.start('SelectMode');
        });

        //Player (Kugel) - Wird benötigt, damit nicht 'velocity' of null
        sprite = game.add.sprite(-199, -199, 'player');
        this.game.physics.enable(sprite);
        sprite.body.setSize(64, 64, 2, 2);
          
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