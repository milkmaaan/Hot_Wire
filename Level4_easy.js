Game.Level4_easy = function(game){
	this.player = null;
};

var counter = 0;
var sprite;
var levelText;
var t;

Game.Level4_easy.prototype = {

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

        einfachIcon = this.game.add.sprite(1200, this.game.height / 2 - 130, "einfachIcon");
        einfachIcon.angle = 90;

        levelText = this.add.text(1204, this.game.height / 2 + 80, 'LEVEL \n4', { fill: "#ffffff", font: "45px Arial", fontWeight: "bold", align: "center" });
        levelText.angle = 90;

        fail = game.add.sprite(this.game.width / 2 + 495, 1800, 'rot');
        good = game.add.sprite(this.game.width / 2 + 495, 1800, 'gruen');

        good.visible = true;

         //add hot wire
        draht1 = game.add.sprite(this.game.width / 2 - 118, 0, 'draht15');
        draht2 = game.add.sprite(this.game.width / 2 - 118, 200, 'draht12');
        draht3 = game.add.sprite(this.game.width / 2 , 200, 'draht16');
        draht4 = game.add.sprite(this.game.width / 2 + 88, 200, 'draht16');  
        draht5 = game.add.sprite(this.game.width / 2 + 288, 200, 'draht10');  
        draht6 = game.add.sprite(this.game.width / 2 + 288, 318, 'draht13');
        draht7 = game.add.sprite(this.game.width / 2 + 288, 718, 'draht13');
        draht8 = game.add.sprite(this.game.width / 2 + 288, 1118, 'draht11');
        draht9 = game.add.sprite(this.game.width / 2 - 112, 1118, 'draht14');
        draht10 = game.add.sprite(this.game.width / 2 - 312, 1118, 'draht16');
        draht11 = game.add.sprite(this.game.width / 2 - 430, 1118, 'draht9');
        draht12 = game.add.sprite(this.game.width / 2 - 430, 1236, 'draht13');
        draht13 = game.add.sprite(this.game.width / 2 -430, 1636, 'draht12');
        draht14 = game.add.sprite(this.game.width / 2 - 321, 1636, 'draht14');
        draht15 = game.add.sprite(this.game.width / 2 + 79, 1636, 'draht10');
        draht16 = game.add.sprite(this.game.width / 2 + 79, 1702, 'draht12');
        draht17 = game.add.sprite(this.game.width / 2 + 79, 1702, 'draht10');
        ziel = game.add.sprite(this.game.width / 2 + 79, this.game.height - 118, 'ziell');
        
        //add player
        sprite = game.add.sprite(this.game.width / 2 -59 , 59, 'playerBig');
		sprite.inputEnabled = true;
		sprite.input.enableDrag();
        sprite.anchor.set(0.5);
   
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
        }
        else if (this.checkOverlap(sprite, draht12))
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
        else if (this.checkOverlap(sprite, ziel))
		{
            this.doneMessageBox(1512, 1050);
            sprite.inputEnabled = false;
            t++;
		}
		else
        {
            fail.visible = true;
            good.visible = false;

            this.failMessageBox(1512, 1050);
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
    	//destroy messagebox if already exists
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
        var pauseText = this.game.add.text(0, 0, "Du hast das Level pausiert.", style);

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

        //set the message box in the center
        msgBox.x = this.game.width / 2 + msgBox.height/2;
        msgBox.y = this.game.height / 2 - msgBox.width / 2;

        this.msgBox = msgBox;
    },

    doneMessageBox(w = 1050, h = 1512) {
        //destroy messagebox if already exists
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
        var style = {font:"70px Arial", align:"center"};

        var doneText1 = this.game.add.text(0, 0, "Du hast das Level geschafft!", style);

        doneText1.wordWrap = true;
        doneText1.wordWrapWidth = w * .9;
 
        //set the width and height passed in the parameters
        back.width = w;
        back.height = h;

        //add elements to group
        msgBox.add(back);
        msgBox.add(rightButton);
        msgBox.add(middleButton);
        msgBox.add(leftButton);
        msgBox.add(doneText1);
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
        
        //text position
        doneText1.x = back.width / 2 - doneText1.width / 2;
        doneText1.y = back.height / 2 - doneText1.height / 2 - 150;

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

        //group for all boxitems
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
        msgBox.angle = 90

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
		this.state.start('Level5_easy');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();	
        winsound.stop();	
    },

    loadThisLevelEvent() {
		this.gamePlay();
		this.state.start('Level4_easy');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();	
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