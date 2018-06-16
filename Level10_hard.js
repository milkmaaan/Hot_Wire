Game.Level10_hard = function(game){
	this.player = null;
};

var counter = 0;
var countera = 0;
var localStorageName = "drahtscore";
var highscore;
var sprite;
var levelText;
var t;
var timerText = 0;
var currentTimeText = 0;

Game.Level10_hard.prototype = {

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

        levelText = this.add.text(1204, this.game.height / 2 + 80, 'LEVEL \n10', { fill: "#ffffff", font: "45px Arial", fontWeight: "bold", align: "center" });
        levelText.angle = 90;

        fail = game.add.sprite(this.game.width / 2 + 495, 1660, 'rot');
        good = game.add.sprite(this.game.width / 2 + 495, 1660, 'gruen');

        good.visible = true;

        counterText = this.add.text(1208, this.game.width + 580, 'ZEIT', { fill: "#ffc000", font: "45px Arial", fontWeight: "bold" });
        counterText.angle = 90;

        currentTimeText = this.add.text(1145, this.game.width + 605, '0', { fill: "#ffffff", font: "45px Arial", fontWeight: "bold" });
        currentTimeText.angle = 90;
        
        //add hot wire
        draht1 = game.add.sprite(this.game.width / 2 - 88.5, 0, 'draht7');    
        draht2 = game.add.sprite(this.game.width / 2 - 88.5, 200, 'draht3');    
        draht3 = game.add.sprite(this.game.width / 2 - 489, 200, 'draht6');    
        draht4 = game.add.sprite(this.game.width / 2 - 548, 200, 'draht1');    
        draht5 = game.add.sprite(this.game.width / 2 - 548, 259, 'draht7');    
        draht6 = game.add.sprite(this.game.width / 2 - 548, 459, 'draht4');    
        draht7 = game.add.sprite(this.game.width / 2 - 489, 459, 'draht6');    
        draht8 = game.add.sprite(this.game.width / 2 - 89, 459, 'draht6');    
        draht9 = game.add.sprite(this.game.width / 2 + 311, 459, 'draht2');    
        draht10 = game.add.sprite(this.game.width / 2 + 311, 518, 'draht7');    
        draht11 = game.add.sprite(this.game.width / 2 + 311, 718, 'draht3');    
        draht12 = game.add.sprite(this.game.width / 2 - 89, 718, 'draht6');    
        draht13 = game.add.sprite(this.game.width / 2 - 489, 718, 'draht6');    
        draht14 = game.add.sprite(this.game.width / 2 - 548, 718, 'draht1');
        draht15 = game.add.sprite(this.game.width / 2 - 548, 777, 'draht7');    
        draht16 = game.add.sprite(this.game.width / 2 - 548, 977, 'draht4');    
        draht17 = game.add.sprite(this.game.width / 2 - 489, 977, 'draht6');    
        draht18 = game.add.sprite(this.game.width / 2 - 89, 977, 'draht6');    
        draht19 = game.add.sprite(this.game.width / 2 + 311, 977, 'draht2');    
        draht20 = game.add.sprite(this.game.width / 2 + 311, 1036, 'draht7');    
        draht21 = game.add.sprite(this.game.width / 2 + 311, 1236, 'draht3');    
        draht22 = game.add.sprite(this.game.width / 2 - 89, 1236, 'draht6');    
        draht23 = game.add.sprite(this.game.width / 2 - 148, 1236, 'draht1');    
        draht24 = game.add.sprite(this.game.width / 2 - 148, 1295, 'draht5');    
        draht25 = game.add.sprite(this.game.width / 2 - 148, 1695, 'draht4');    
        draht26 = game.add.sprite(this.game.width / 2 - 98, 1695, 'draht8');    
        draht27 = game.add.sprite(this.game.width / 2 + 102, 1695, 'draht3');    
        draht28 = game.add.sprite(this.game.width / 2 + 102, 1495, 'draht7');    
        draht29 = game.add.sprite(this.game.width / 2 + 102, 1436, 'draht2');    
        draht30 = game.add.sprite(this.game.width / 2 - 298, 1436, 'draht6');    
        draht31 = game.add.sprite(this.game.width / 2 - 354, 1436, 'draht1');    
        draht32 = game.add.sprite(this.game.width / 2 - 354, 1494, 'draht7');    
        draht33 = game.add.sprite(this.game.width / 2 - 354, 1659, 'draht7');    
        ziel = game.add.sprite(this.game.width / 2 - 354, this.game.height - 59, 'ziel');
		
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
        }
        else if (this.checkOverlap(sprite, draht20))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht21))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht22))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht23))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }else if (this.checkOverlap(sprite, draht24))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht25))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }else if (this.checkOverlap(sprite, draht26))
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
            countera = 1;
        }
        else if (this.checkOverlap(sprite, draht30))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
            if(countera == 1){
            }
            else{
                this.wrongwayMessageBox(1512, 1050)
                sprite.inputEnabled = false;
            }
        }
        else if (this.checkOverlap(sprite, draht31))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht32))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, draht33))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
        }
        else if (this.checkOverlap(sprite, ziel))
		{
            this.game.time.events.stop();
            this.doneMessageBox(1512, 1050);
            sprite.inputEnabled = false;
            t++;

            if (localStorage.getItem('level10_hard') === null) {
                //kein Highscore gespeicher
                localStorage.setItem('level10_hard', counter);
            } else if (localStorage.getItem('level10_hard') > counter) {
                //neuer Highscore
                localStorage.setItem('level10_hard', counter);
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

        var highscoretxt = this.game.add.text(0, 0, "Dein Highscore: " + localStorage.getItem('level10_hard') +" Sekunden", style2);

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

wrongwayMessageBox(w = 1050, h = 1512) {
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

    var doneText1 = this.game.add.text(0, 0, "Du bist den falschen Weg gegangen!", style);

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

    this.game.time.events.stop();
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
		this.state.start('Level11_hard');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();	
        winsound.stop();
    },

    loadThisLevelEvent() {
		this.gamePlay();
		this.state.start('Level10_hard');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();			
    },
    
}