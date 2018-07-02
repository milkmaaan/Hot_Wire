Game.Highscores = function(game) {
    this.player = null;
};

//hard
var level1hardgold = 7
var level1hardsilber = 12

var level2hardgold = 12
var level2hardsilber = 17

var level3hardgold = 14
var level3hardsilber = 19

var level4hardgold = 13
var level4hardsilber = 18

var level5hardgold = 12
var level5hardsilber = 17

var level6hardgold = 16
var level6hardsilber = 21

var level7hardgold = 13
var level7hardsilber = 18

var level8hardgold = 16
var level8hardsilber = 21

var level9hardgold = 14
var level9hardsilber = 19

var level10hardgold = 18
var level10hardsilber = 23

var level11hardgold = 20
var level11hardsilber = 25

var level12hardgold = 23
var level12hardsilber = 28

Game.Highscores.prototype = {
    create:function(game) {

        //black fade
        this.camera.flash('#000000');

        //scale mode - central
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //scale mode - customized
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;

        //background
        game.add.tileSprite(0, 0, 1216, 1920, 'background_clear');

        //sound
		clicksound = this.game.add.audio('clicksound');

        var style = {font:"40px Arial", align:"center", fill:"#ffffff"};

        trophyschrankhard = game.add.sprite(900, 485, 'trophyschrank');
        trophyschrankhard.angle = 90;

        schwerIcon = this.game.add.sprite(1100, 750, "pokalschrank_schwer");
        schwerIcon.angle = 90;

        //hard
        if (localStorage.getItem('level1_hardhd') != null) {

            highscore_schwer1 = this.game.add.text(855, 555, (localStorage.getItem('level1_hardhd') + " Sek."), style);
            highscore_schwer1.angle = 90;

            //show trophy
            if (localStorage.getItem('level1_hardhd') <= level1hardgold) {
                //gold
                trophyhard1 = game.add.sprite(788, 535,'trophygold');
                trophyhard1.angle = 90;
            }
            else if (localStorage.getItem('level1_hardhd') > level1hardgold && localStorage.getItem('level1_hardhd') <= level1hardsilber) {
                //silver
                trophyhard1 = game.add.sprite(788, 535,'trophysilber');
                trophyhard1.angle = 90;
            }
            else {
                //bronze
                trophyhard1 = game.add.sprite(788, 535,'trophybronze');
                trophyhard1.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard1.inputEnabled = true;
            trophyhard1.events.onInputDown.add(function() {
                this.state.start("Level1_hard");
            }, this);
        }

        if (localStorage.getItem('level2_hardhd') != null) {

            highscore_schwer2 = this.game.add.text(855, 773, (localStorage.getItem('level2_hardhd') + " Sek."), style);
            highscore_schwer2.angle = 90;

            //show trophy
            if (localStorage.getItem('level2_hardhd') <= level2hardgold) {
                //gold
                trophyhard2 = game.add.sprite(788, 753,'trophygold');
                trophyhard2.angle = 90;
            }
            else if (localStorage.getItem('level2_hardhd') > level2hardgold && localStorage.getItem('level2_hardhd') <= level2hardsilber) {
                //silver
                trophyhard2 = game.add.sprite(788, 753,'trophysilber');
                trophyhard2.angle = 90;
            }
            else {
                //bronze
                trophyhard2 = game.add.sprite(788, 753,'trophybronze');
                trophyhard2.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard2.inputEnabled = true;
            trophyhard2.events.onInputDown.add(function() {
                this.state.start("Level2_hard");
            }, this);
        }

        if (localStorage.getItem('level3_hardhd') != null) {

            highscore_schwer3 = this.game.add.text(855, 991, (localStorage.getItem('level3_hardhd') + " Sek."), style);
            highscore_schwer3.angle = 90;

            //show trophy
            if (localStorage.getItem('level3_hardhd') <= level3hardgold) {
                //gold
                trophyhard3 = game.add.sprite(788, 971,'trophygold');
                trophyhard3.angle = 90;
            }
            else if (localStorage.getItem('level3_hardhd') > level3hardgold && localStorage.getItem('level3_hardhd') <= level3hardsilber) {
                //silver
                trophyhard3 = game.add.sprite(788, 971,'trophysilber');
                trophyhard3.angle = 90;
            }
            else {
                //bronze
                trophyhard3 = game.add.sprite(788, 971,'trophybronze');
                trophyhard3.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard3.inputEnabled = true;
            trophyhard3.events.onInputDown.add(function() {
                this.state.start("Level3_hard");
            }, this);
        }

        if (localStorage.getItem('level4_hardhd') != null) {

            highscore_schwer4 = this.game.add.text(855, 1209, (localStorage.getItem('level4_hardhd') + " Sek."), style);
            highscore_schwer4.angle = 90;

            //show trophy
            if (localStorage.getItem('level4_hardhd') <= level4hardgold) {
                //gold
                trophyhard4 = game.add.sprite(788, 1189,'trophygold');
                trophyhard4.angle = 90;
            }
            else if (localStorage.getItem('level4_hardhd') > level4hardgold && localStorage.getItem('level4_hardhd') <= level4hardsilber) {
                //silver
                trophyhard4 = game.add.sprite(788, 1189,'trophysilber');
                trophyhard4.angle = 90;
            }
            else {
                //bronze
                trophyhard4 = game.add.sprite(788, 1189,'trophybronze');
                trophyhard4.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard4.inputEnabled = true;
            trophyhard4.events.onInputDown.add(function() {
                this.state.start("Level4_hard");
            }, this);
        }

        if (localStorage.getItem('level5_hardhd') != null) {

            highscore_schwer5 = this.game.add.text(576, 555, (localStorage.getItem('level5_hardhd') + " Sek."), style);
            highscore_schwer5.angle = 90;

            //show trophy
            if (localStorage.getItem('level5_hardhd') <= level5hardgold) {
                //gold
                trophyhard5 = game.add.sprite(510, 535,'trophygold');
                trophyhard5.angle = 90;
            }
            else if (localStorage.getItem('level5_hardhd') > level5hardgold && localStorage.getItem('level5_hardhd') <= level5hardsilber) {
                //silver
                trophyhard5 = game.add.sprite(510, 535,'trophysilber');
                trophyhard5.angle = 90;
            }
            else {
                //bronze
                trophyhard5 = game.add.sprite(510, 535,'trophybronze');
                trophyhard5.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard5.inputEnabled = true;
            trophyhard5.events.onInputDown.add(function() {
                this.state.start("Level5_hard");
            }, this);
        }

        if (localStorage.getItem('level6_hardhd') != null) {

            highscore_schwer6 = this.game.add.text(576, 773, (localStorage.getItem('level6_hardhd') + " Sek."), style);
            highscore_schwer6.angle = 90;

            //show trophy
            if (localStorage.getItem('level6_hardhd') <= level6hardgold) {
                //gold
                trophyhard6 = game.add.sprite(510, 753,'trophygold');
                trophyhard6.angle = 90;
            }
            else if (localStorage.getItem('level6_hardhd') > level6hardgold && localStorage.getItem('level6_hardhd') <= level6hardsilber) {
                //silver
                trophyhard6 = game.add.sprite(510, 753,'trophysilber');
                trophyhard6.angle = 90;
            }
            else {
                //bronze
                trophyhard6 = game.add.sprite(510, 753,'trophybronze');
                trophyhard6.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard6.inputEnabled = true;
            trophyhard6.events.onInputDown.add(function() {
                this.state.start("Level6_hard");
            }, this);
        }

        if (localStorage.getItem('level7_hardhd') != null) {

            highscore_schwer7 = this.game.add.text(576, 991, (localStorage.getItem('level7_hardhd') + " Sek."), style);
            highscore_schwer7.angle = 90;

            //show trophy
            if (localStorage.getItem('level7_hardhd') <= level7hardgold) {
                //gold
                trophyhard7 = game.add.sprite(510, 971,'trophygold');
                trophyhard7.angle = 90;
            }
            else if (localStorage.getItem('level7_hardhd') > level7hardgold && localStorage.getItem('level7_hardhd') <= level7hardsilber) {
                //silver
                trophyhard7 = game.add.sprite(510, 971,'trophysilber');
                trophyhard7.angle = 90;
            }
            else {
                //bronze
                trophyhard7 = game.add.sprite(510, 971,'trophybronze');
                trophyhard7.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard7.inputEnabled = true;
            trophyhard7.events.onInputDown.add(function() {
                this.state.start("Level7_hard");
            }, this);
        }

        if (localStorage.getItem('level8_hardhd') != null) {

            highscore_schwer8 = this.game.add.text(576, 1209, (localStorage.getItem('level8_hardhd') + " Sek."), style);
            highscore_schwer8.angle = 90;

            //show trophy
            if (localStorage.getItem('level8_hardhd') <= level8hardgold) {
                //gold
                trophyhard8 = game.add.sprite(510, 1189,'trophygold');
                trophyhard8.angle = 90;
            }
            else if (localStorage.getItem('level8_hardhd') > level8hardgold && localStorage.getItem('level8_hardhd') <= level8hardsilber) {
                //silver
                trophyhard8 = game.add.sprite(510, 1189,'trophysilber');
                trophyhard8.angle = 90;
            }
            else {
                //bronze
                trophyhard8 = game.add.sprite(510, 1189,'trophybronze');
                trophyhard8.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard8.inputEnabled = true;
            trophyhard8.events.onInputDown.add(function() {
                this.state.start("Level8_hard");
            }, this);
        }

        if (localStorage.getItem('level9_hardhd') != null) {

            highscore_schwer9 = this.game.add.text(297, 555, (localStorage.getItem('level9_hardhd') + " Sek."), style);
            highscore_schwer9.angle = 90;

            //show trophy
            if (localStorage.getItem('level9_hardhd') <= level9hardgold) {
                //gold
                trophyhard9 = game.add.sprite(232, 535,'trophygold');
                trophyhard9.angle = 90;
            }
            else if (localStorage.getItem('level9_hardhd') > level9hardgold && localStorage.getItem('level9_hardhd') <= level9hardsilber) {
                //silver
                trophyhard9 = game.add.sprite(232, 535,'trophysilber');
                trophyhard9.angle = 90;
            }
            else {
                //bronze
                trophyhard9 = game.add.sprite(232, 535,'trophybronze');
                trophyhard9.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard9.inputEnabled = true;
            trophyhard9.events.onInputDown.add(function() {
                this.state.start("Level9_hard");
            }, this);
        }

        if (localStorage.getItem('level10_hardhd') != null) {

            highscore_schwer10 = this.game.add.text(297, 773, (localStorage.getItem('level10_hardhd') + " Sek."), style);
            highscore_schwer10.angle = 90;

            //show trophy
            if (localStorage.getItem('level10_hardhd') <= level10hardgold) {
                //gold
                trophyhard10 = game.add.sprite(232, 753,'trophygold');
                trophyhard10.angle = 90;
            }
            else if (localStorage.getItem('level10_hardhd') > level10hardgold && localStorage.getItem('level10_hardhd') <= level10hardsilber) {
                //silver
                trophyhard10 = game.add.sprite(232, 753,'trophysilber');
                trophyhard10.angle = 90;
            }
            else {
                //bronze
                trophyhard10 = game.add.sprite(232, 753,'trophybronze');
                trophyhard10.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard10.inputEnabled = true;
            trophyhard10.events.onInputDown.add(function() {
                this.state.start("Level10_hard");
            }, this);
        }

        if (localStorage.getItem('level11_hardhd') != null) {

            highscore_schwer11 = this.game.add.text(297, 991, (localStorage.getItem('level11_hardhd') + " Sek."), style);
            highscore_schwer11.angle = 90;

            //show trophy
            if (localStorage.getItem('level11_hardhd') <= level11hardgold) {
                //gold
                trophyhard11 = game.add.sprite(232, 971,'trophygold');
                trophyhard11.angle = 90;
            }
            else if (localStorage.getItem('level11_hardhd') > level11hardgold && localStorage.getItem('level11_hardhd') <= level11hardsilber) {
                //silver
                trophyhard11 = game.add.sprite(232, 971,'trophysilber');
                trophyhard11.angle = 90;
            }
            else {
                //bronze
                trophyhard11 = game.add.sprite(232, 971,'trophybronze');
                trophyhard11.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard11.inputEnabled = true;
            trophyhard11.events.onInputDown.add(function() {
                this.state.start("Level11_hard");
            }, this);
        }

        if (localStorage.getItem('level12_hardhd') != null) {

            highscore_schwer12 = this.game.add.text(297, 1209, (localStorage.getItem('level12_hardhd') + " Sek."), style);
            highscore_schwer12.angle = 90;

            //show trophy
            if (localStorage.getItem('level12_hardhd') <= level12hardgold) {
                //gold
                trophyhard12 = game.add.sprite(232, 1189,'trophygold');
                trophyhard12.angle = 90;
            }
            else if (localStorage.getItem('level12_hardhd') > level12hardgold && localStorage.getItem('level12_hardhd') <= level12hardsilber) {
                //silver
                trophyhard12 = game.add.sprite(232, 1189,'trophysilber');
                trophyhard12.angle = 90;
            }
            else {
                //bronze
                trophyhard12 = game.add.sprite(232, 1189,'trophybronze');
                trophyhard12.angle = 90;
            }
            //if trophy won, able to retry level
            trophyhard12.inputEnabled = true;
            trophyhard12.events.onInputDown.add(function() {
                this.state.start("Level12_hard");
            }, this);
        }
        
        this.createButton(game,"",game.world.centerX+450,game.world.centerY-800, 196, 245, "buttonZurueck",
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