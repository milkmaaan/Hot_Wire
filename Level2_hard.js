Game.Level2_hard = function(game){
	this.player = null;
};

var counter = 0;
var localStorageName = "drahtscorehd";
var highscore;
var sprite;
var levelText;
var t;
var currentTimeText = 0;

Game.Level2_hard.prototype = {

	create:function(game){

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

        if (localStorage.getItem('soundshd') == 1) {
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

        levelText = this.add.text(1204, this.game.height / 2 + 80, 'LEVEL \n2', { fill: "#ffffff", font: "45px Arial", fontWeight: "bold", align: "center" });
        levelText.angle = 90;

        fail = game.add.sprite(this.game.width / 2 + 495, 1660, 'rot');
        good = game.add.sprite(this.game.width / 2 + 495, 1660, 'gruen');

        good.visible = true;

        counterText = this.add.text(1208, this.game.width + 580, 'ZEIT', { fill: "#ffc000", font: "45px Arial", fontWeight: "bold" });
        counterText.angle = 90;

        currentTimeText = this.add.text(1145, this.game.width + 605, '0', { fill: "#ffffff", font: "45px Arial", fontWeight: "bold" });
        currentTimeText.angle = 90;
        
        //add hot wire
        draht1 = game.add.sprite(this.game.width / 2 - 88.5, 0, 'draht5');    
        draht2 = game.add.sprite(this.game.width / 2 - 88.5 , 400, 'draht4');
        draht3 = game.add.sprite(this.game.width / 2 - 29.5, 400, 'draht8');
        draht4 = game.add.sprite(this.game.width / 2 + 29, 400, 'draht8');
        draht5 = game.add.sprite(this.game.width / 2 + 229, 400, 'draht2');
        draht6 = game.add.sprite(this.game.width / 2 + 229.5, 459, 'draht5');
        draht7 = game.add.sprite(this.game.width / 2 + 229.5, 859, 'draht3');
        draht8 = game.add.sprite(this.game.width / 2 - 170, 859, 'draht6');
        draht9 = game.add.sprite(this.game.width / 2 - 229, 859, 'draht1');
        draht10 = game.add.sprite(this.game.width / 2 - 229, 918, 'draht5');
        draht11 = game.add.sprite(this.game.width / 2 - 229, 1318, 'draht4');
        draht12 = game.add.sprite(this.game.width / 2 - 170, 1318, 'draht8');
        draht13 = game.add.sprite(this.game.width / 2 + 30, 1318, 'draht2');
        draht14 = game.add.sprite(this.game.width / 2 + 30, 1377, 'draht5');
        draht15 = game.add.sprite(this.game.width / 2 + 30, this.game.height - 259, 'draht7');
        ziel = game.add.sprite(this.game.width / 2 + 30, this.game.height - 59, 'ziel');
		

        //add player
        sprite = game.add.sprite(this.game.width / 2 - 59, 50, 'player');
		sprite.inputEnabled = true;
		sprite.input.enableDrag();
        sprite.anchor.set(0.5);

        //add timer
        timer = this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
        this.game.time.events.start();

        //add sounds
        failsound = this.game.add.audio('failsound');
        winsound = this.game.add.audio('winsound');
        clicksound = this.game.add.audio('clicksound');

        //set variable to 0 for failsound
        t = 0;
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
        }else if (this.checkOverlap(sprite, draht10))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht11))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }else if (this.checkOverlap(sprite, draht12))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht13))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht14))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht15))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, ziel))
		{
            this.game.time.events.stop();
            this.doneMessageBox(1512, 1050);
            sprite.inputEnabled = false;
            t++;

            if (localStorage.getItem('level2_hardhd') === null) {
                //kein Highscore gespeicher
                localStorage.setItem('level2_hardhd', counter);
            } else if (localStorage.getItem('level2_hardhd') > counter) {
                //neuer Highscore
                localStorage.setItem('level2_hardhd', counter);
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

        var trophytime = this.game.add.sprite(0, 0, "trophytimehard2");

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
        var doneText2 = this.game.add.text(0, 0, "Bestzeit: "+ localStorage.getItem('level2_hardhd') + " Sekunden", style2);
        
        //set time for trophies
        var goldtime = 12;
        var silbertime = 17;

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
		this.state.start('Level3_hard');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();	
        winsound.stop();
    },

    loadThisLevelEvent() {
		this.gamePlay();
		this.state.start('Level2_hard');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();	
        winsound.stop();
        winsound.stop();			
    },

    muteMusic() {
        if (localStorage.getItem('soundshd') == 1) {
            musicIcon = this.game.add.sprite(1217, this.game.height / 2 - 600, "soundOff");
            musicIcon.angle = 90;
            localStorage.setItem('soundshd', 0);
            this.game.sound.mute = true;
        } else {
            musicIcon = this.game.add.sprite(1217, this.game.height / 2 - 600, "soundOn");
            musicIcon.angle = 90;
            localStorage.setItem('soundshd', 1);
            this.game.sound.mute = false;
        }
    },
    
}