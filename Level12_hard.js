Game.Level12_hard = function(game){
	this.player = null;
};

var level12hardcountera = 0;
var level12hardcounterb = 0;
var level12hardcounterc = 0;
var level12hardcounterd = 0;
var countera = 0;
var localStorageName = "drahtscore";
var highscore;
var sprite;
var levelText;
var t;
var currentTimeText = 0;

Game.Level12_hard.prototype = {

	create:function(game){
        level12hardcountera = 0;
        level12hardcounterb = 0;
        level12hardcounterc = 0;
        level12hardcounterd = 0;
        //black fade
        this.camera.flash('#000000');

        //add wood for background
        this.game.add.tileSprite(0, 0, 1090, 1920, 'holz');

        //scale mode - central
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //scale mode - customized
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;

        //status bar
        pauseIcon = this.game.add.sprite(1088, this.game.height / - 600, "pauseIcon");
        pauseIcon.inputEnabled = true;
        pauseIcon.events.onInputDown.add(this.pauseEvent, this);

        if (localStorage.getItem('sounds') == 1) {
            musicIcon = this.game.add.sprite(1217, this.game.height / 2 - 600, "soundOn");
            musicIcon.angle = 90;
            musicIcon.inputEnabled = true;
            musicIcon.events.onInputDown.add(this.muteMusic, this);
        } else {
            musicIcon = this.game.add.sprite(1217, this.game.height / 2 - 600, "soundOff");
            musicIcon.angle = 90;
            musicIcon.inputEnabled = true;
            musicIcon.events.onInputDown.add(this.muteMusic, this);
        }

        schwerIcon = this.game.add.sprite(1200, this.game.height / 2 - 130, "schwerIcon");
        schwerIcon.angle = 90;

        levelText = this.add.text(1204, this.game.height / 2 + 80, 'LEVEL \n12', { fill: "#ffffff", font: "45px Arial", fontWeight: "bold", align: "center" });
        levelText.angle = 90;

        fail = game.add.sprite(this.game.width / 2 + 495, 1660, 'rot');
        good = game.add.sprite(this.game.width / 2 + 495, 1660, 'gruen');

        good.visible = true;

        counterText = this.add.text(1208, this.game.width + 580, 'ZEIT', { fill: "#ffc000", font: "45px Arial", fontWeight: "bold" });
        counterText.angle = 90;

        currentTimeText = this.add.text(1145, this.game.width + 605, '0', { fill: "#ffffff", font: "45px Arial", fontWeight: "bold" });
        currentTimeText.angle = 90;
        
        //hot wire
        draht1 = game.add.sprite(this.game.width / 2 - 88.5, 0, 'draht7');    
        draht2 = game.add.sprite(this.game.width / 2 - 88.5, 200, 'draht3');    
        draht3 = game.add.sprite(this.game.width / 2 - 289, 200, 'draht8');    
        draht4 = game.add.sprite(this.game.width / 2 - 348, 200, 'draht1');    
        draht5 = game.add.sprite(this.game.width / 2 - 348, 259, 'draht5');    
        draht6 = game.add.sprite(this.game.width / 2 - 348, 659, 'draht4');    
        draht7 = game.add.sprite(this.game.width / 2 - 289, 659, 'draht6');    
        draht8 = game.add.sprite(this.game.width / 2 + 111, 659, 'draht3');    
        draht9 = game.add.sprite(this.game.width / 2 + 111, 459, 'draht7');    
        draht10 = game.add.sprite(this.game.width / 2 + 111, 400, 'draht2');    
        draht11 = game.add.sprite(this.game.width / 2 - 89, 400, 'draht8');    
        draht12 = game.add.sprite(this.game.width / 2 - 148, 400, 'draht1');    
        draht13 = game.add.sprite(this.game.width / 2 - 148, 440, 'draht5');    
        draht14 = game.add.sprite(this.game.width / 2 - 148, 840, 'draht7'); 
        draht15 = game.add.sprite(this.game.width / 2 - 148, 860, 'draht7');       
        draht16 = game.add.sprite(this.game.width / 2 - 148, 1059, 'draht3');    
        draht17 = game.add.sprite(this.game.width / 2 - 348, 1059, 'draht8');    
        draht18 = game.add.sprite(this.game.width / 2 - 407, 1059, 'draht4');    
        draht19 = game.add.sprite(this.game.width / 2 - 407, 880, 'draht7');    
        draht20 = game.add.sprite(this.game.width / 2 - 407, 845, 'draht1');    
        draht21 = game.add.sprite(this.game.width / 2 - 348, 845, 'draht6');    
        draht22 = game.add.sprite(this.game.width / 2 + 52, 845, 'draht2');    
        draht23 = game.add.sprite(this.game.width / 2 + 52, 880, 'draht5');    
        draht24 = game.add.sprite(this.game.width / 2 + 52, 1259, 'draht7');    
        draht25 = game.add.sprite(this.game.width / 2 + 52, 1459, 'draht4');    
        draht26 = game.add.sprite(this.game.width / 2 + 111, 1459, 'draht8');    
        draht27 = game.add.sprite(this.game.width / 2 + 311, 1459, 'draht3');    
        draht28 = game.add.sprite(this.game.width / 2 + 311, 1059, 'draht5');    
        draht29 = game.add.sprite(this.game.width / 2 + 311, 659, 'draht5');    
        draht30 = game.add.sprite(this.game.width / 2 + 311, 259, 'draht5');    
        draht31 = game.add.sprite(this.game.width / 2 + 311, 118, 'draht7');    
        draht32 = game.add.sprite(this.game.width / 2 + 311, 59, 'draht2'); 
        draht33 = game.add.sprite(this.game.width / 2 + 111, 59, 'draht8');       
        draht34 = game.add.sprite(this.game.width / 2 - 289, 59, 'draht6');    //if
        draht35 = game.add.sprite(this.game.width / 2 - 489, 59, 'draht8');
        draht36 = game.add.sprite(this.game.width / 2 - 548, 59, 'draht1');
        draht37 = game.add.sprite(this.game.width / 2 - 548, 118, 'draht5');
        draht38 = game.add.sprite(this.game.width / 2 - 548, 518, 'draht5');
        draht39 = game.add.sprite(this.game.width / 2 - 548, 918, 'draht5');
        draht40 = game.add.sprite(this.game.width / 2 - 548, 1318, 'draht5');
        draht41 = game.add.sprite(this.game.width / 2 - 548, 1718, 'draht4');
        draht42 = game.add.sprite(this.game.width / 2 - 489, 1718, 'draht6');
        draht43 = game.add.sprite(this.game.width / 2 - 89, 1718, 'draht3');
        draht44 = game.add.sprite(this.game.width / 2 - 89, 1318, 'draht5');
        draht45 = game.add.sprite(this.game.width / 2 - 89, 1259, 'draht2');
        draht46 = game.add.sprite(this.game.width / 2 - 289, 1259, 'draht8');
        draht47 = game.add.sprite(this.game.width / 2 - 348, 1259, 'draht1');
        draht48 = game.add.sprite(this.game.width / 2 - 348, 1318, 'draht7');
        draht49 = game.add.sprite(this.game.width / 2 - 348, 1400, 'draht7');
        draht50 = game.add.sprite(this.game.width / 2 - 348, 1600, 'draht4');
        draht51 = game.add.sprite(this.game.width / 2 - 289, 1600, 'draht6');
        draht52 = game.add.sprite(this.game.width / 2 + 111, 1600, 'draht2');
        draht53 = game.add.sprite(this.game.width / 2 + 111, 1659, 'draht7');
        draht54 = game.add.sprite(this.game.width / 2 + 111, 1661, 'draht7');
        ziel = game.add.sprite(this.game.width / 2 + 111, this.game.height - 59, 'ziel');
		
        //add player
        sprite = game.add.sprite(this.game.width / 2 - 59, 1300, 'player');
		sprite.inputEnabled = true;
		sprite.input.enableDrag();
        sprite.anchor.set(0.5);

        flaechehard12a = this.game.add.sprite(0, 0, 'flaechehard12a');  
        flaechehard12b = this.game.add.sprite(0, 0, 'flaechehard12b');
        flaechehard12b.alpha = 0;
        flaechehard12c = this.game.add.sprite(0, 0, 'flaechehard12c');

  


        //add timer
        timer = this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
        this.game.time.events.start();

        //add sounds
        failsound = this.game.add.audio('failsound');
        winsound = this.game.add.audio('winsound');
        clicksound = this.game.add.audio('clicksound');

        //set variable to 0 for failsound
        t = 0;

        this.game.add.sprite(0, 0, 'schattenhard12');  

	},
	
	gamePause:function(){
		this.game.paused=true;
    },
    
	gamePlay:function(){
		this.game.paused=false;
	},

	updateCounter:function() {
        counter++;
        currentTimeText.setText(counter);
	},

	update:function(){

		if (this.checkOverlap(sprite, draht1))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
		}
		else if (this.checkOverlap(sprite, draht2))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
		}
		else if (this.checkOverlap(sprite, draht3))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht4))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht5))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht6))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
		}
		else if (this.checkOverlap(sprite, draht7))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht8))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht9))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht10))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht11))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
            level12hardcounterb = 2;
        }
        else if (this.checkOverlap(sprite, draht12))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
		}
		else if (this.checkOverlap(sprite, draht13))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
            if(level12hardcounterb == 2){
            }
            else{
                fail.visible = true;
                good.visible = false;
                this.wrongwayMessageBox(1512, 1050)
                sprite.inputEnabled = false;
                t++;
            }
        }
        else if (this.checkOverlap(sprite, draht14))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht15))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht16))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht17))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
		}
		else if (this.checkOverlap(sprite, draht18))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht19))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
            level12hardcounterc = 3;
        }
        else if (this.checkOverlap(sprite, draht20))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht21))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
            if(level12hardcounterc == 3){
            }
            else{
                fail.visible = true;
                good.visible = false;
                this.wrongwayMessageBox(1512, 1050)
                sprite.inputEnabled = false;
                t++;
            }
        }
        else if (this.checkOverlap(sprite, draht22))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht23))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
		}
		else if (this.checkOverlap(sprite, draht24))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht25))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht26))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
		}
		else if (this.checkOverlap(sprite, draht27))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
		}
		else if (this.checkOverlap(sprite, draht28))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht29))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht30))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht31))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
            level12hardcountera = 1;
		}
		else if (this.checkOverlap(sprite, draht32))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht33))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht34))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
            if(level12hardcountera == 1){
            }
            else{
                fail.visible = true;
                good.visible = false;
                this.wrongwayMessageBox(1512, 1050)
                sprite.inputEnabled = false;
                t++;
            }
        }
        else if (this.checkOverlap(sprite, draht35))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht36))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht37))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
		}
		else if (this.checkOverlap(sprite, draht38))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht39))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht40))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht41))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht42))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
		}
		else if (this.checkOverlap(sprite, draht43))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht44))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht45))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht46))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht47))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht48))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
		}
		else if (this.checkOverlap(sprite, draht49))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
            level12hardcounterd = 4;
        }
        else if (this.checkOverlap(sprite, draht50))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht51))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
            if(level12hardcounterd == 4){
            }
            else{
                fail.visible = true;
                good.visible = false;
                this.wrongwayMessageBox(1512, 1050)
                sprite.inputEnabled = false;
                t++;
            }
        }
        else if (this.checkOverlap(sprite, draht52))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht53))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht54))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, ziel))
		{
            if (localStorage.getItem('level12_hard') === null) {
                //kein Highscore gespeicher
                localStorage.setItem('level12_hard', counter);
            } else if (localStorage.getItem('level12_hard') > counter) {
                //neuer Highscore
                localStorage.setItem('level12_hard', counter);
            }

            if(localStorage.getItem('finish') == null){
                this.game.time.events.stop();
                this.finishMessageBox(1512, 1050);
                sprite.inputEnabled = false;
                t++;
            }
            
            else {
            this.game.time.events.stop();
            this.doneMessageBox(1512, 1050);
            sprite.inputEnabled = false;
            t++;
            }
		}
        
		else
        {
            fail.visible = true;
            good.visible = false;

            this.failMessageBox(1512, 1050);
            this.game.time.events.stop();
            sprite.inputEnabled = false;
            t++;
            //text.text = 'Drag the sprites. Overlapping: false';
        }
        if(this.checkOverlap(sprite, draht9)){
            flaechehard12a.alpha = 0;
        }
        if(this.checkOverlap(sprite, draht19)){
            flaechehard12b.alpha = 1;
        }
        if(this.checkOverlap(sprite, draht46)){
            flaechehard12c.alpha = 0;
        }
    },

	checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);
    },
    
    pauseMessageBox(w = 1050, h = 1512) {
        if (this.msgBox) {
            this.msgBox.destroy();
        }

        //group for all box-itmes
        var msgBox = this.game.add.group();

        //background for messagebox
        var back = this.game.add.sprite(0, 0, "pauseBackground");
        
        //add buttons to messagebox
        var rightButton = this.game.add.sprite(0, 0, "buttonWeiterKlein");
        var middleButton = this.game.add.sprite(0, 0, "buttonNochmalKlein");
        var leftButton = this.game.add.sprite(0, 0, "buttonMenuKlein");

        var style = {font:"70px Arial", align:"center"};
        var pauseText = this.game.add.text(0, 0, "Du hast das Level pausiert.\n Diese Zeiten werden benötigt, um die jeweiligen Pokale zu erreichen.", style);

        var trophytime = this.game.add.sprite(0, 0, "trophytimehard12");

        pauseText.wordWrap = true;
        pauseText.wordWrapWidth = w * .9;

        //set the width and height passed in the parameters
        back.width = w;
        back.height = h;

        //add elements to group        
        msgBox.add(back);
        msgBox.add(rightButton);
        msgBox.add(middleButton);
        msgBox.add(leftButton);
        msgBox.add(pauseText);
        msgBox.add(trophytime);
		msgBox.angle = 90;

        //configurate rightButton
        rightButton.x = back.width / 2 + 250;
        rightButton.y = back.height - rightButton.height - 90;    
        rightButton.inputEnabled = true;
        rightButton.events.onInputDown.add(this.unpauseEvent, this);

        //configurate middleButton
        middleButton.x = back.width / 2 - 200;
        middleButton.y = back.height - middleButton.height - 90;    
        middleButton.inputEnabled = true;
        middleButton.events.onInputDown.add(this.loadThisLevelEvent, this);

        //configurate leftButton
        leftButton.x = back.width / 2 - 650;
        leftButton.y = back.height - leftButton.height - 90; 
        leftButton.inputEnabled = true;
        leftButton.events.onInputDown.add(this.backToSelectModeEvent, this);

        pauseText.x = back.width / 2 - pauseText.width / 2;
        pauseText.y = back.height / 2 - pauseText.height / 2 - 145;

        trophytime.x = back.width / 2 - pauseText.width / 2 + 100;
        trophytime.y = back.height / 2 - pauseText.height / 2 + 125;

        //set the message box in the center
        msgBox.x = this.game.width / 2 + msgBox.height/2;
        msgBox.y = this.game.height / 2 - msgBox.width / 2;

        this.msgBox = msgBox;
    },

    doneMessageBox(w = 1050, h = 1512) {
    	//destroy messagebox already exists
        if (this.msgBox) {
            this.msgBox.destroy();
        }
        
        //group for all box-items
        var msgBox = this.game.add.group();
        var back = this.game.add.sprite(0, 0, "doneBackground");
        var rightButton = this.game.add.sprite(0, 0, "buttonWeiterKlein");
        var middleButton = this.game.add.sprite(0, 0, "buttonNochmalKlein");
        var leftButton = this.game.add.sprite(0, 0, "buttonMenuKlein");
    
        //make a text field
        var style = {font:"50px Arial", align:"center"};
        var style2 = {font:"50px Arial", align:"center", fill:"#ff0000", fontWeight:"bold"};

        var doneText1 = this.game.add.text(0, 0, "Du hast das Level geschafft!\nDeine Zeit: " + counter + " Sekunden", style);
        var doneText2 = this.game.add.text(0, 0, "Bestzeit: "+ localStorage.getItem('level12_hard') + " Sekunden", style2);
        
        //set time for trophies
        var goldtime = 23;
        var silbertime = 28;

        //show trophy
        if (counter <= goldtime) {
            //gold
            var trophy = this.game.add.sprite(0, 0, "trophygold");
            var trophyText = this.game.add.text(0, 0, "Du hast den goldenen Pokal freigeschaltet!", style2);
        }
        else if (counter > goldtime && counter <= silbertime) {
            //silver
            var trophy = this.game.add.sprite(0, 0, "trophysilber");
            var trophyText = this.game.add.text(0, 0, "Du hast den silbernen Pokal freigeschaltet!", style2);
        }
        else {
            //bronze
            var trophy = this.game.add.sprite(0, 0, "trophybronze");
            var trophyText = this.game.add.text(0, 0, "Du hast den brozenen Pokal freigeschaltet!", style2);
        }

        doneText1.wordWrap = true;
        doneText1.wordWrapWidth = w * .9;

        doneText2.wordWrap = true;
        doneText2.wordWrapWidth = w * .9;

        back.width = w;
        back.height = h;

        //add elements to group
        msgBox.add(back);
        msgBox.add(leftButton);
        msgBox.add(middleButton);
        msgBox.add(rightButton);
        msgBox.add(doneText1);
        msgBox.add(doneText2);
        msgBox.add(trophy);
        msgBox.add(trophyText);
        msgBox.angle = 90;

        //configurate rightButton
        rightButton.x = back.width / 2 + 250;
        rightButton.y = back.height - rightButton.height - 90;
        rightButton.inputEnabled = true;
        rightButton.events.onInputDown.add(this.loadNextLevelEvent, this);

        //configurate middleButton
        middleButton.x = back.width / 2 - 200;
        middleButton.y = back.height - middleButton.height - 90;    
        middleButton.inputEnabled = true;
        middleButton.events.onInputDown.add(this.loadThisLevelEvent, this);

        //configurate leftButton
        leftButton.x = back.width / 2 - 650;
        leftButton.y = back.height - leftButton.height - 90;
        leftButton.inputEnabled = true;
		leftButton.events.onInputDown.add(this.backToSelectModeEvent, this);
        
        //set the message box in the center
        msgBox.x = this.game.width / 2 + msgBox.height/2;
        msgBox.y = this.game.height / 2 - msgBox.width / 2;

        //set trophy
        trophy.x = back.width / 2 - trophy.width / 2;
        trophy.y = back.height / 2 - trophy.height / 2 + 30;
        
        //text position
        doneText1.x = back.width / 2 - doneText1.width / 2;
        doneText1.y = back.height / 2 - doneText1.height / 2 - 230;
        doneText2.x = back.width / 2 - doneText2.width / 2;
        doneText2.y = back.height / 2 - doneText2.height / 2 + 150;
        trophyText.x = back.width / 2 - trophyText.width / 2;
        trophyText.y = back.height / 2 - trophyText.height / 2 - 100;

        this.msgBox = msgBox;

        if(t==1) {
            winsound.play();
            }
    },

    failMessageBox(w = 1050, h = 1512) {
        //destroy messagebox if already exists
        if (this.msgBox) {
            this.msgBox.destroy();
        }

        //group for all boxitmes
        var msgBox = this.game.add.group();
		var back = this.game.add.sprite(0, 0, "gameoverBackground");
        var rightButton = this.game.add.sprite(0, 0, "buttonAgain");
        var leftButton = this.game.add.sprite(0, 0, "buttonHauptmenu");
        
		//make a text field
        var style = {font:"70px Arial", align:"center"};

        var doneText1 = this.game.add.text(0, 0, "Du hast den heißen Draht verlassen!", style);

        doneText1.wordWrap = true;
        doneText1.wordWrapWidth = w * .9;

        //set the width and height passed in the parameters
        back.width = w;
        back.height = h;

        //add elements to group
        msgBox.add(back);
        msgBox.add(rightButton);
        msgBox.add(leftButton);
        msgBox.add(doneText1);
        msgBox.angle = 90;
        
        //configurate rightButton
        rightButton.x = back.width / 2 + 100;
        rightButton.y = back.height - rightButton.height - 90;
        rightButton.inputEnabled = true;
        rightButton.events.onInputDown.add(this.loadThisLevelEvent, this);   

        //configurate leftButton
        leftButton.x = back.width / 2 - 600;
        leftButton.y = back.height - leftButton.height - 90;
        leftButton.inputEnabled = true;
        leftButton.events.onInputDown.add(this.backToSelectModeEvent, this);

        //set the message box in the center
        msgBox.x = this.game.width / 2 + msgBox.height/2;
        msgBox.y = this.game.height / 2 - msgBox.width / 2;
        
        //text position
        doneText1.x = back.width / 2 - doneText1.width / 2;
        doneText1.y = back.height / 2 - doneText1.height / 2 - 200;

        this.msgBox = msgBox;

        if(t==1) {
            failsound.play();
        }
},

wrongwayMessageBox(w = 1050, h = 1512) {
    //destroy messagebox if already exists
    if (this.msgBox) {
        this.msgBox.destroy();
    }
    
    //group for all boxitmes
    var msgBox = this.game.add.group();
    var back = this.game.add.sprite(0, 0, "gameoverBackground");
    var rightButton = this.game.add.sprite(0, 0, "buttonAgain");
    var leftButton = this.game.add.sprite(0, 0, "buttonHauptmenu");
    
    //make a text field
    var style = {font:"70px Arial", align:"center"};
    var style2 = {font:"70px Arial", align:"center", fill:"#ff0000", fontWeight:"bold"};

    var doneText1 = this.game.add.text(0, 0, "Du bist den falschen Weg gegangen!", style);

    doneText1.wordWrap = true;
    doneText1.wordWrapWidth = w * .9;

    //set the width and height passed in the parameters
    back.width = w;
    back.height = h;

    //add elements to group
    msgBox.add(back);
    msgBox.add(rightButton);
    msgBox.add(leftButton);
    msgBox.add(doneText1);
    msgBox.angle = 90;
    
    //configurate rightButton
    rightButton.x = back.width / 2 + 100;
    rightButton.y = back.height - rightButton.height - 90;
    rightButton.inputEnabled = true;
    rightButton.events.onInputDown.add(this.loadThisLevelEvent, this);   

    //configurate leftButton
    leftButton.x = back.width / 2 - 600;
    leftButton.y = back.height - leftButton.height - 90;
    leftButton.inputEnabled = true;
    leftButton.events.onInputDown.add(this.backToSelectModeEvent, this);

    //set the message box in the center
    msgBox.x = this.game.width / 2 + msgBox.height/2;
    msgBox.y = this.game.height / 2 - msgBox.width / 2;
    
    //text position
    doneText1.x = back.width / 2 - doneText1.width / 2;
    doneText1.y = back.height / 2 - doneText1.height / 2 - 200;

    this.game.time.events.stop();
    this.msgBox = msgBox;

    if(t==1) {
        failsound.play();
    }
},

finishMessageBox(w = 1050, h = 1512) {
    //destroy messagebox already exists
    if (this.msgBox) {
        this.msgBox.destroy();
    }

    var msgBox = this.game.add.group();
    var back = this.game.add.sprite(0, 0, "doneBackgroundgold");
    var rightButton = this.game.add.sprite(0, 0, "buttonWeitergold");
    
    this.game.add.sprite(750, 300, "confetti1");
    this.game.add.sprite(750, 1450, "confetti2");

    //make a text field
    var style = {font:"60px Arial", align:"center", fill:"#a67c00", fontWeight:"bold"};

    var doneText1 = this.game.add.text(0, 0, "Du hast alle Level erfolgreich \nabgeschlossen!", style);
    var doneText2 = this.game.add.text(0, 0,  "\n Deine Zeit: " + counter + " Sekunden", style);

    //Set time for trophies
    var goldtime = 15;
    var silbertime = 30;

    //show trophy
    if (counter <= goldtime) {
        //gold
        var trophy = this.game.add.sprite(0, 0, "trophygold");
        //var trophyText = this.game.add.text(0, 0, "Du hast den goldenen Pokal freigeschaltet!", style2);
    }
    else if (counter > goldtime && counter <= silbertime) {
        //silber
        var trophy = this.game.add.sprite(0, 0, "trophysilber");
        //var trophyText = this.game.add.text(0, 0, "Du hast den silbernen Pokal freigeschaltet!", style2);
    }
    else {
        //bronze
        var trophy = this.game.add.sprite(0, 0, "trophybronze");
        //var trophyText = this.game.add.text(0, 0, "Du hast den brozenen Pokal freigeschaltet!", style2);
    }

    doneText1.wordWrap = true;
    doneText1.wordWrapWidth = w * .9;

    doneText2.wordWrap = true;
    doneText2.wordWrapWidth = w * .9;

    back.width = w;
    back.height = h;

    //add elements to group
    msgBox.add(back);
    msgBox.add(rightButton);
    msgBox.add(doneText1);
    msgBox.add(doneText2);
    msgBox.add(trophy);
    msgBox.angle = 90;

    //configurate rightButton
    rightButton.x = back.width / 2 - 260;
    rightButton.y = back.height - rightButton.height - 90;
    rightButton.inputEnabled = true;
    rightButton.events.onInputDown.add(this.loadHighscoresEvent, this);
    
    //set the message box in the center
    msgBox.x = this.game.width / 2 + msgBox.height/2;
    msgBox.y = this.game.height / 2 - msgBox.width / 2;

    //set trophy
    trophy.x = back.width / 2 - trophy.width / 2;
    trophy.y = back.height / 2 - trophy.height / 2 - 10;
    
    doneText1.x = back.width / 2 - doneText1.width / 2;
    doneText1.y = back.height / 2 - doneText1.height / 2 -200;
    doneText2.x = back.width / 2 - doneText2.width / 2;
    doneText2.y = back.height / 2 - doneText2.height / 2 + 100;
   
    this.msgBox = msgBox;

    if(t==1) {
        winsound.play();
        }
},
	unpauseEvent() {
		this.gamePlay();
        this.msgBox.destroy();
        clicksound.play();	
    },

    pauseEvent() {
        this.gamePause();
        this.pauseMessageBox(1512, 1050);
        clicksound.play();	
    },

	backToSelectModeEvent() {
		this.gamePlay();
		this.state.start('SelectMode');
		counter = 0;
        this.msgBox.destroy();	
        clicksound.play();
        winsound.stop();		
    },
    
	loadNextLevelEvent() {
		this.gamePlay();
		this.state.start('Level12_hard');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();	
        winsound.stop();
    },

    loadThisLevelEvent() {
		this.gamePlay();
		this.state.start('Level12_hard');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();			
    },

    loadHighscoresEvent() {
		this.gamePlay();
		this.state.start('Highscores');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();
        winsound.stop();
        winsound.stop();
        localStorage.setItem('finish', 1);		
    },

    muteMusic() {
        if (localStorage.getItem('sounds') == 1) {
            musicIcon = this.game.add.sprite(1217, this.game.height / 2 - 600, "soundOff");
            musicIcon.angle = 90;
            localStorage.setItem('sounds', 0);
            this.game.sound.mute = true;
        } else {
            musicIcon = this.game.add.sprite(1217, this.game.height / 2 - 600, "soundOn");
            musicIcon.angle = 90;
            localStorage.setItem('sounds', 1);
            this.game.sound.mute = false;
        }
    },
    
    
}




