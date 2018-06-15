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

var level5hardgold = 2
var level5hardsilber = 5

var level6hardgold = 4
var level6hardsilber = 10

var level7hardgold = 6
var level7hardsilber = 12

var level8hardgold = 8
var level8hardsilber = 14

var level9hardgold = 2
var level9hardsilber = 5

var level10hardgold = 4
var level10hardsilber = 10

var level11hardgold = 6
var level11hardsilber = 12

var level12hardgold = 8
var level12hardsilber = 14

Game.Highscores.prototype = {
    create:function(game) {

        //black Fade
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

        //hard
        if (localStorage.getItem('level1_hard') != null) {

            highscore_schwer1 = this.game.add.text(855, 570, (localStorage.getItem('level1_hard') + " Sek."), style);
            highscore_schwer1.angle = 90;

            //show trophy
            if (localStorage.getItem('level1_hard') <= level1hardgold) {
                //gold
                trophyhard1 = game.add.sprite(788, 535,'trophygold');
                trophyhard1.angle = 90;
            }
            else if (localStorage.getItem('level1_hard') > level1hardgold && localStorage.getItem('level1_hard') <= level1hardsilber) {
                //silber
                trophyhard1 = game.add.sprite(788, 535,'trophysilber');
                trophyhard1.angle = 90;
            }
            else {
                //bronze
                trophyhard1 = game.add.sprite(788, 535,'trophybronze');
                trophyhard1.angle = 90;
            }
        }

        if (localStorage.getItem('level2_hard') != null) {

            highscore_schwer2 = this.game.add.text(855, 788, (localStorage.getItem('level2_hard') + " Sek."), style);
            highscore_schwer2.angle = 90;

            //show trophy
            if (localStorage.getItem('level2_hard') <= level2hardgold) {
                //gold
                trophyhard2 = game.add.sprite(788, 753,'trophygold');
                trophyhard2.angle = 90;
            }
            else if (localStorage.getItem('level2_hard') > level2hardgold && localStorage.getItem('level2_hard') <= level2hardsilber) {
                //silber
                trophyhard2 = game.add.sprite(788, 753,'trophysilber');
                trophyhard2.angle = 90;
            }
            else {
                //bronze
                trophyhard2 = game.add.sprite(788, 753,'trophybronze');
                trophyhard2.angle = 90;
            }
        }

        if (localStorage.getItem('level3_hard') != null) {

            highscore_schwer3 = this.game.add.text(855, 1006, (localStorage.getItem('level3_hard') + " Sek."), style);
            highscore_schwer3.angle = 90;

            //show trophy
            if (localStorage.getItem('level3_hard') <= level3hardgold) {
                //gold
                trophyhard3 = game.add.sprite(788, 971,'trophygold');
                trophyhard3.angle = 90;
            }
            else if (localStorage.getItem('level3_hard') > level3hardgold && localStorage.getItem('level3_hard') <= level3hardsilber) {
                //silber
                trophyhard3 = game.add.sprite(788, 971,'trophysilber');
                trophyhard3.angle = 90;
            }
            else {
                //bronze
                trophyhard3 = game.add.sprite(788, 971,'trophybronze');
                trophyhard3.angle = 90;
            }
        }

        if (localStorage.getItem('level4_hard') != null) {

            highscore_schwer4 = this.game.add.text(855, 1224, (localStorage.getItem('level4_hard') + " Sek."), style);
            highscore_schwer4.angle = 90;

            //show trophy
            if (localStorage.getItem('level4_hard') <= level4hardgold) {
                //gold
                trophyhard4 = game.add.sprite(788, 1189,'trophygold');
                trophyhard4.angle = 90;
            }
            else if (localStorage.getItem('level4_hard') > level4hardgold && localStorage.getItem('level4_hard') <= level4hardsilber) {
                //silber
                trophyhard4 = game.add.sprite(788, 1189,'trophysilber');
                trophyhard4.angle = 90;
            }
            else {
                //bronze
                trophyhard4 = game.add.sprite(788, 1189,'trophybronze');
                trophyhard4.angle = 90;
            }
        }

        if (localStorage.getItem('level5_hard') != null) {

            highscore_schwer5 = this.game.add.text(576, 570, (localStorage.getItem('level5_hard') + " Sek."), style);
            highscore_schwer5.angle = 90;

            //show trophy
            if (localStorage.getItem('level5_hard') <= level5hardgold) {
                //gold
                trophyhard5 = game.add.sprite(510, 535,'trophygold');
                trophyhard5.angle = 90;
            }
            else if (localStorage.getItem('level5_hard') > level5hardgold && localStorage.getItem('level5_hard') <= level5hardsilber) {
                //silber
                trophyhard5 = game.add.sprite(510, 535,'trophysilber');
                trophyhard5.angle = 90;
            }
            else {
                //bronze
                trophyhard5 = game.add.sprite(510, 535,'trophybronze');
                trophyhard5.angle = 90;
            }
        }

        if (localStorage.getItem('level6_hard') != null) {

            highscore_schwer6 = this.game.add.text(576, 788, (localStorage.getItem('level6_hard') + " Sek."), style);
            highscore_schwer6.angle = 90;

            //show trophy
            if (localStorage.getItem('level6_hard') <= level6hardgold) {
                //gold
                trophyhard6 = game.add.sprite(510, 753,'trophygold');
                trophyhard6.angle = 90;
            }
            else if (localStorage.getItem('level6_hard') > level6hardgold && localStorage.getItem('level6_hard') <= level6hardsilber) {
                //silber
                trophyhard6 = game.add.sprite(510, 753,'trophysilber');
                trophyhard6.angle = 90;
            }
            else {
                //bronze
                trophyhard6 = game.add.sprite(510, 753,'trophybronze');
                trophyhard6.angle = 90;
            }
        }

        if (localStorage.getItem('level7_hard') != null) {

            highscore_schwer7 = this.game.add.text(576, 1006, (localStorage.getItem('level7_hard') + " Sek."), style);
            highscore_schwer7.angle = 90;

            //show trophy
            if (localStorage.getItem('level7_hard') <= level7hardgold) {
                //gold
                trophyhard7 = game.add.sprite(510, 971,'trophygold');
                trophyhard7.angle = 90;
            }
            else if (localStorage.getItem('level7_hard') > level7hardgold && localStorage.getItem('level7_hard') <= level7hardsilber) {
                //silber
                trophyhard7 = game.add.sprite(510, 971,'trophysilber');
                trophyhard7.angle = 90;
            }
            else {
                //bronze
                trophyhard7 = game.add.sprite(510, 971,'trophybronze');
                trophyhard7.angle = 90;
            }
        }

        if (localStorage.getItem('level8_hard') != null) {

            highscore_schwer8 = this.game.add.text(576, 1224, (localStorage.getItem('level8_hard') + " Sek."), style);
            highscore_schwer8.angle = 90;

            //show trophy
            if (localStorage.getItem('level8_hard') <= level8hardgold) {
                //gold
                trophyhard8 = game.add.sprite(510, 1189,'trophygold');
                trophyhard8.angle = 90;
            }
            else if (localStorage.getItem('level8_hard') > level8hardgold && localStorage.getItem('level8_hard') <= level8hardsilber) {
                //silber
                trophyhard8 = game.add.sprite(510, 1189,'trophysilber');
                trophyhard8.angle = 90;
            }
            else {
                //bronze
                trophyhard8 = game.add.sprite(510, 1189,'trophybronze');
                trophyhard8.angle = 90;
            }
        }

        if (localStorage.getItem('level9_hard') != null) {

            highscore_schwer9 = this.game.add.text(297, 570, (localStorage.getItem('level9_hard') + " Sek."), style);
            highscore_schwer9.angle = 90;

            //show trophy
            if (localStorage.getItem('level9_hard') <= level9hardgold) {
                //gold
                trophyhard9 = game.add.sprite(232, 535,'trophygold');
                trophyhard9.angle = 90;
            }
            else if (localStorage.getItem('level9_hard') > level9hardgold && localStorage.getItem('level9_hard') <= level9hardsilber) {
                //silber
                trophyhard9 = game.add.sprite(232, 535,'trophysilber');
                trophyhard9.angle = 90;
            }
            else {
                //bronze
                trophyhard9 = game.add.sprite(232, 535,'trophybronze');
                trophyhard9.angle = 90;
            }
        }

        if (localStorage.getItem('level10_hard') != null) {

            highscore_schwer10 = this.game.add.text(297, 788, (localStorage.getItem('level10_hard') + " Sek."), style);
            highscore_schwer10.angle = 90;

            //show trophy
            if (localStorage.getItem('level10_hard') <= level10hardgold) {
                //gold
                trophyhard10 = game.add.sprite(232, 753,'trophygold');
                trophyhard10.angle = 90;
            }
            else if (localStorage.getItem('level10_hard') > level10hardgold && localStorage.getItem('level10_hard') <= level10hardsilber) {
                //silber
                trophyhard10 = game.add.sprite(232, 753,'trophysilber');
                trophyhard10.angle = 90;
            }
            else {
                //bronze
                trophyhard10 = game.add.sprite(232, 753,'trophybronze');
                trophyhard10.angle = 90;
            }
        }

        if (localStorage.getItem('level11_hard') != null) {

            highscore_schwer11 = this.game.add.text(297, 1006, (localStorage.getItem('level11_hard') + " Sek."), style);
            highscore_schwer11.angle = 90;

            //show trophy
            if (localStorage.getItem('level11_hard') <= level11hardgold) {
                //gold
                trophyhard11 = game.add.sprite(232, 971,'trophygold');
                trophyhard11.angle = 90;
            }
            else if (localStorage.getItem('level11_hard') > level11hardgold && localStorage.getItem('level11_hard') <= level11hardsilber) {
                //silber
                trophyhard11 = game.add.sprite(232, 971,'trophysilber');
                trophyhard11.angle = 90;
            }
            else {
                //bronze
                trophyhard11 = game.add.sprite(232, 971,'trophybronze');
                trophyhard11.angle = 90;
            }
        }

        if (localStorage.getItem('level12_hard') != null) {

            highscore_schwer12 = this.game.add.text(297, 1224, (localStorage.getItem('level12_hard') + " Sek."), style);
            highscore_schwer12.angle = 90;

            //show trophy
            if (localStorage.getItem('level12_hard') <= level12hardgold) {
                //gold
                trophyhard12 = game.add.sprite(232, 1189,'trophygold');
                trophyhard12.angle = 90;
            }
            else if (localStorage.getItem('level12_hard') > level12hardgold && localStorage.getItem('level12_hard') <= level12hardsilber) {
                //silber
                trophyhard12 = game.add.sprite(232, 1189,'trophysilber');
                trophyhard12.angle = 90;
            }
            else {
                //bronze
                trophyhard12 = game.add.sprite(232, 1189,'trophybronze');
                trophyhard12.angle = 90;
            }
        }
        
        this.createButton(game,"",game.world.centerX+450,game.world.centerY-800, 196, 196, "buttonZurueck",
        function(){
            clicksound.play();
            this.state.start('SelectMode');
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