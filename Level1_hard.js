Game.Level1_hard = function(game){
	this.player = null;
};

var counter = 0;
var localStorageName = "drahtscore";
var highscore;
var sprite;
var levelText;
var t;
var timerText = 0;
var currentTimeText = 0;

Game.Level1_hard.prototype = {

	create:function(game){

        //black Fade
        this.camera.flash('#000000');

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //add wood for background
        this.game.add.tileSprite(0, 0, 1090, 1920, 'holz');

        //status bar
        pauseIcon = this.game.add.sprite(1088, this.game.height / - 600, "pauseIcon");
        pauseIcon.inputEnabled = true;
        pauseIcon.events.onInputDown.add(this.pauseEvent, this);

        schwerIcon = this.game.add.sprite(1200, this.game.height / 2 - 130, "schwerIcon");
        schwerIcon.angle = 90;

        levelText = this.add.text(1204, this.game.height / 2 + 80, 'LEVEL \n1', { fill: "#ffffff", font: "45px Arial", fontWeight: "bold", align: "center" });
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
        draht2 = game.add.sprite(this.game.width / 2 - 88.5 , 400, 'draht5');
        draht3 = game.add.sprite(this.game.width / 2 - 88.5 , 800, 'draht5');
        draht4 = game.add.sprite(this.game.width / 2 - 88.5, 1200, 'draht5');
        draht5 = game.add.sprite(this.game.width / 2 - 88.5, 1462, 'draht5');
        ziel = game.add.sprite(this.game.width / 2 - 88.5, this.game.height - 59, 'ziel');
		
        //scale mode - central
        //this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

        //scale mode - customized
        this.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
        this.scale.pageAlignHorizontally = true;

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
        else if (this.checkOverlap(sprite, ziel))
		{
            this.game.time.events.stop();
            this.doneMessageBox(1512, 1050);
            sprite.inputEnabled = false;
            t++;

            if (localStorage.getItem('level1_hard') === null) {
                //kein Highscore gespeichert
                localStorage.setItem('level1_hard', counter);
            } else if (localStorage.getItem('level1_hard') > counter) {
                //neuer Highscore
                localStorage.setItem('level1_hard', counter);
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
        var rightButton = this.game.add.sprite(0, 0, "buttonWeiter");
        var leftButton = this.game.add.sprite(0, 0, "buttonHauptmenu");

        var style = {font:"70px Arial", align:"center"};
        var pauseText = this.game.add.text(0, 0, "Du hast das Level pausiert.\n Diese Zeiten werden benötigt, um die jeweiligen Pokale zu erreichen.", style);

        var trophytime = this.game.add.sprite(0, 0, "trophytimehard1");

        pauseText.wordWrap = true;
        pauseText.wordWrapWidth = w * .9;

        //set the width and height passed in the parameters
        back.width = w;
        back.height = h;

        //add elements to group        
        msgBox.add(back);
        msgBox.add(rightButton);
        msgBox.add(leftButton);
        msgBox.add(pauseText);
        msgBox.add(trophytime);
		msgBox.angle = 90;

        //configurate rightButton
        rightButton.x = back.width / 2 + 100;
        rightButton.y = back.height - rightButton.height - 90;    
        rightButton.inputEnabled = true;
        rightButton.events.onInputDown.add(this.unpauseEvent, this);

        //configurate leftButton
        leftButton.x = back.width / 2 - 600;
        leftButton.y = back.height - leftButton.height - 90; 
        leftButton.inputEnabled = true;
        leftButton.events.onInputDown.add(this.backToSelectModeEvent, this);

        pauseText.x = back.width / 2 - pauseText.width / 2;
        pauseText.y = back.height / 2 - pauseText.height / 2 - 145;

        trophytime.x = back.width / 2 - pauseText.width / 2 + 100;
        trophytime.y = back.height / 2 - pauseText.height / 2 + 125;

        msgBox.x = this.game.width / 2 + msgBox.height/2;
        msgBox.y = this.game.height / 2 - msgBox.width / 2;

        this.msgBox = msgBox;

    },
    doneMessageBox(w = 1050, h = 1512) {
    	//destroy messagebox already exists
        if (this.msgBox) {
            this.msgBox.destroy();
        }
        //group for all items
        var msgBox = this.game.add.group();
		var back = this.game.add.sprite(0, 0, "doneBackground");
        var rightButton = this.game.add.sprite(0, 0, "buttonWeiter");
        var leftButton = this.game.add.sprite(0, 0, "buttonHauptmenu");
        
		//make a text field
        var style = {font:"70px Arial", align:"center"};
        var style2 = {font:"70px Arial", align:"center", fill:"#daa520", fontWeight:"bold"};

        var doneText1 = this.game.add.text(0, 0, "Du hast das Level geschafft!\n Deine Zeit: " + counter + " Sekunden", style);

        var highscoretxt = this.game.add.text(0, 0, "Dein Highscore: " + localStorage.getItem('level1_hard') +" Sekunden", style2);

        doneText1.wordWrap = true;
        doneText1.wordWrapWidth = w * .9;

        highscoretxt.wordWrap = true;
        highscoretxt.wordWrapWidth = w * .9;
 
        //set the width and height passed in the parameters
        back.width = w;
        back.height = h;

        //add elements to group
        msgBox.add(back);
        msgBox.add(rightButton);
        msgBox.add(leftButton);
        msgBox.add(doneText1);
        msgBox.add(highscoretxt);
        msgBox.angle = 90;
        
        //configurate rightButton
        rightButton.x = back.width / 2 + 100;
        rightButton.y = back.height - rightButton.height - 90;
        rightButton.inputEnabled = true;
        rightButton.events.onInputDown.add(this.loadNextLevelEvent, this);

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
        doneText1.y = back.height / 2 - doneText1.height / 2 - 150;

        highscoretxt.x = back.width / 2 - highscoretxt.width / 2;
        highscoretxt.y = back.height / 2 - highscoretxt.height / 2 -25 ;

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
    },
    
	loadNextLevelEvent() {
		this.gamePlay();
		this.state.start('Level2_hard');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();	
        winsound.stop();
    },

    loadThisLevelEvent() {
		this.gamePlay();
		this.state.start('Level1_hard');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();			
    },
    
}