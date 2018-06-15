Game.Level2_hard = function(game){
	this.player = null;
};

var counter = 0;
var localStorageName = "drahtscore";
var highscore;
var sprite;
var levelText;
var t;

Game.Level2_hard.prototype = {

	create:function(game){

        //Black Fade
        this.camera.flash('#000000');

        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        //add wood for background
        this.game.add.tileSprite(0, 0, 1216, 1920, 'holz');
        
        //add hot wire
		draht1 = game.add.sprite(this.game.width / 2 -29.5, 0, 'draht5');    
        draht2 = game.add.sprite(this.game.width / 2 -29.5 , 400, 'draht4');
        draht3 = game.add.sprite(this.game.width / 2 + 29, 400, 'draht8');
        draht4 = game.add.sprite(this.game.width / 2 + 229, 400, 'draht2');
        draht5 = game.add.sprite(this.game.width / 2 + 229.5, 459, 'draht5');
        draht6 = game.add.sprite(this.game.width / 2 + 229.5, 859, 'draht3');
        draht7 = game.add.sprite(this.game.width / 2 - 170, 859, 'draht6');
        draht8 = game.add.sprite(this.game.width / 2 - 229, 859, 'draht1');
        draht9 = game.add.sprite(this.game.width / 2 - 229, 918, 'draht5');
        draht10 = game.add.sprite(this.game.width / 2 - 229, 1318, 'draht4');
        draht11 = game.add.sprite(this.game.width / 2 - 170, 1318, 'draht8');
        draht12 = game.add.sprite(this.game.width / 2 + 30, 1318, 'draht2');
        draht13 = game.add.sprite(this.game.width / 2 + 30, 1377, 'draht5');
        draht14 = game.add.sprite(this.game.width / 2 + 30, this.game.height - 259, 'draht7');
        ziel = game.add.sprite(this.game.width / 2 + 30, this.game.height - 59, 'ziel');

        fail = game.add.sprite(this.game.width / 2 + 440, 1760, 'rot');
        good = game.add.sprite(this.game.width / 2 + 440, 1760, 'gruen');

        good.visible = true;
		
        this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.refresh();

        //show current level
        levelText = this.add.text(1204, this.game.height / 2 - 160, 'LEVEL 2 [SCHWER]', { fill: "#454545", font: "45px Arial" });
        levelText.angle = 90;

        sprite = game.add.sprite(this.game.width / 2 , 50, 'player');
		sprite.inputEnabled = true;
		sprite.input.enableDrag();
        sprite.anchor.set(0.5);

        //text = game.add.text(16, 16, 'Drag the sprites. Overlapping: false', { fill: '#ffffff' });
   
        this.game.input.onTap.add(this.onTap, this);
        
        timerText = this.add.text(1200, 16, 'Zeit: 0');
        timerText.angle = 90;

        timer = this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);
        this.game.time.events.start();

        //add sounds
        failsound = this.game.add.audio('failsound');
        winsound = this.game.add.audio('winsound');
        clicksound = this.game.add.audio('clicksound');

        //set variable to 0 for failsound
        t = 0;

	},
	//double tap = pause
	onTap:function(pointer, doubleTap) {
		if (doubleTap)
		{
			//this.gamePause();
			//this.pauseMessageBox(1512, 1050);
		}
	},
	gamePause:function(){
		this.game.paused=true;
	},
	gamePlay:function(){
		this.game.paused=false;
	},

	updateCounter:function() {
        counter++;
        timerText.setText("Zeit: " + counter);
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
        else if (this.checkOverlap(sprite, ziel))
		{
            this.game.time.events.stop();
            this.doneMessageBox(1512, 1050);
            sprite.inputEnabled = false;
            t++;

            if (localStorage.getItem('level2_hard') === null) {
                //kein Hifhscore gespeicher
                localStorage.setItem('level2_hard', counter);
            } else if (localStorage.getItem('level2_hard') > counter) {
                //neuer Highscore
                localStorage.setItem('level2_hard', counter);
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
    
    reload() {
        this.state.start('Level2_hard');
    },

    showfailMessage() {
        this.failMessageBox(1512, 1050);
    },

	checkOverlap:function(spriteA, spriteB) {

    var boundsA = spriteA.getBounds();
    var boundsB = spriteB.getBounds();

    return Phaser.Rectangle.intersects(boundsA, boundsB);

	},
    pauseMessageBox(w = 1050, h = 1512) {
        //destroy messagebox if already exists
        if (this.msgBox) {
            this.msgBox.destroy();
        }
        //group for all boxitmes
        var msgBox = this.game.add.group();
        //background for message box
		var back = this.game.add.sprite(0, 0, "pauseBackground");
        //add buttons
		var upperButton = this.game.add.sprite(0, 0, "buttonWeiter");
		var lowerButton = this.game.add.sprite(0, 0, "buttonHauptmenu");

        //set the width and height passed in the parameters
        back.width = w;
        back.height = h;

        //add elements to group
        msgBox.add(back);
		msgBox.add(upperButton);
		msgBox.add(lowerButton);
		msgBox.angle = 90;

        //set the button in the center
        upperButton.x = back.width / 2 - upperButton.width / 2;
		upperButton.y = back.height - upperButton.height - 450;to

		lowerButton.x = back.width / 2 - upperButton.width / 2;
		lowerButton.y = back.height - upperButton.height-150;
	
        //enable button for input
		upperButton.inputEnabled = true;
        lowerButton.inputEnabled = true;
        
        //add listener to destroy box
		upperButton.events.onInputDown.add(this.unpauseEvent, this);
		lowerButton.events.onInputDown.add(this.backToSelectModeEvent, this);

        //set the message box in the center
        msgBox.x = this.game.width / 2 + msgBox.height/2;
        msgBox.y = this.game.height / 2 - msgBox.width / 2;

        //make a state reference to the messsage box
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
        var upperButton = this.game.add.sprite(0, 0, "buttonWeiter");
        var lowerButton = this.game.add.sprite(0, 0, "buttonHauptmenu");
        
		//make a text field
        var style = {font:"70px Arial", align:"center"};
        var style2 = {font:"70px Arial", align:"center", fill:"#daa520", fontWeight:"bold"};

        var doneText1 = this.game.add.text(0, 0, "Du hast das Level geschafft!\n Deine Zeit: " + counter + " Sekunden", style);

        var highscoretxt = this.game.add.text(0, 0, "Dein Highscore: " + localStorage.getItem('level2_hard') +" Sekunden", style2);

        doneText1.wordWrap = true;
        doneText1.wordWrapWidth = w * .9;

        highscoretxt.wordWrap = true;
        highscoretxt.wordWrapWidth = w * .9;
 
        //set the width and height passed in the parameters
        back.width = w;
        back.height = h;

        //add the elements to the group
        msgBox.add(back);
        msgBox.add(upperButton);
        msgBox.add(lowerButton);
        msgBox.add(doneText1);
        msgBox.add(highscoretxt);
        msgBox.angle = 90;
        
        //set the button in the center
        upperButton.x = back.width / 2 + 100;
        upperButton.y = back.height - upperButton.height - 120;

        lowerButton.x = back.width / 2 - 600;
		lowerButton.y = back.height - lowerButton.height - 120;
	
        //enable button for input
        upperButton.inputEnabled = true;
        lowerButton.inputEnabled = true;

        //add listener to destroy the box
        upperButton.events.onInputDown.add(this.loadNextLevelEvent, this);
        lowerButton.events.onInputDown.add(this.backToSelectModeEvent, this);

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
    
// Messagebox Fail!!!!!!!!!!!!!

failMessageBox(w = 1050, h = 1512) {
        //destroy messagebox if already exists
        if (this.msgBox) {
            this.msgBox.destroy();
        }
        //group for all boxitmes
        var msgBox = this.game.add.group();
		var back = this.game.add.sprite(0, 0, "gameoverBackground");
        var upperButton = this.game.add.sprite(0, 0, "buttonAgain");
        var lowerButton = this.game.add.sprite(0, 0, "buttonHauptmenu");
        
		//make a text field
        var style = {font:"70px Arial", align:"center"};
        var style2 = {font:"70px Arial", align:"center", fill:"#ff0000", fontWeight:"bold"};

        var doneText1 = this.game.add.text(0, 0, "Du hast den heißen Draht verlassen!", style);

        doneText1.wordWrap = true;
        doneText1.wordWrapWidth = w * .9;

        //set the width and height passed in the parameters
        back.width = w;
        back.height = h;

        //add elements to group
        msgBox.add(back);
        msgBox.add(upperButton);
        msgBox.add(lowerButton);
        msgBox.add(doneText1);
        msgBox.angle = 90;
        
        //set the button in the center
        upperButton.x = back.width / 2 - upperButton.width / 2;
		upperButton.y = back.height - upperButton.height - 400;

		lowerButton.x = back.width / 2 - upperButton.width / 2;
		lowerButton.y = back.height - upperButton.height-100;
	
        //enable button for input
        upperButton.inputEnabled = true;
        lowerButton.inputEnabled = true;

        //add a listener to destroy box
        upperButton.events.onInputDown.add(this.loadThisLevelEvent, this);
        lowerButton.events.onInputDown.add(this.backToSelectModeEvent, this);

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

	backToSelectModeEvent() {
		this.gamePlay();
		this.state.start('SelectMode');
		counter = 0;
        this.msgBox.destroy();	
        clicksound.play();	
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
    },
    
	createButton: function(game, string, x, y, w, h, callback) {
        var button1 = game.add.button(x, y, 'back', callback, this, 2, 1, 0);

        button1.anchor.setTo(0.5,0.5);
        button1.width = w;
        button1.height = h;

        var txt = game.add.text(button1.x, button1.y, string, {
            font:"25px Arial",
            fill:"#000",
            align:"center"
        });

        txt.anchor.setTo(0.5,0.5);
    }
}