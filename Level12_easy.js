Game.Level12_easy = function(game){
	this.player = null;
};

var counter = 0;
var level12counter = 0;
var sprite;
var levelText;
var t;
var s;

Game.Level12_easy.prototype = {

	create:function(game){
        level12counter = 0;
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

        levelText = this.add.text(1204, this.game.height / 2 + 80, 'LEVEL \n12', { fill: "#ffffff", font: "45px Arial", fontWeight: "bold", align: "center" });
        levelText.angle = 90;

        fail = game.add.sprite(this.game.width / 2 + 495, 1800, 'rot');
        good = game.add.sprite(this.game.width / 2 + 495, 1800, 'gruen');

        good.visible = true;
   
        //add hot-wire
        draht1 = game.add.sprite(this.game.width / 2 - 118, 0, 'draht15');  
        draht2 = game.add.sprite(this.game.width / 2 - 118, 200, 'draht12');  
        draht3 = game.add.sprite(this.game.width / 2 - 50, 200, 'draht16');  
        draht4 = game.add.sprite(this.game.width / 2 + 130, 200, 'draht10');  
        draht5 = game.add.sprite(this.game.width / 2 + 130, 318, 'draht15');  
        draht6 = game.add.sprite(this.game.width / 2 + 130, 518, 'draht11');  
        draht7 = game.add.sprite(this.game.width / 2 - 250, 518, 'draht14');  
        draht8 = game.add.sprite(this.game.width / 2 - 368, 518, 'draht9');  
        draht9 = game.add.sprite(this.game.width / 2 - 368, 636, 'draht15');  
        draht10 = game.add.sprite(this.game.width / 2 - 368, 836, 'draht12');  
        draht11 = game.add.sprite(this.game.width / 2 - 250, 836, 'draht14');  
        draht12 = game.add.sprite(this.game.width / 2 + 130, 836, 'draht10');  
        draht13 = game.add.sprite(this.game.width / 2 + 130, 954, 'draht15');  
        draht14 = game.add.sprite(this.game.width / 2 + 130, 1154, 'draht11');  
        draht15 = game.add.sprite(this.game.width / 2 - 250, 1154, 'draht14');  
        draht16 = game.add.sprite(this.game.width / 2 - 368, 1154, 'draht9');  
        draht17 = game.add.sprite(this.game.width / 2 - 368, 1260, 'draht15');  
        draht18 = game.add.sprite(this.game.width / 2 - 368, 1410, 'draht12');  
        draht19 = game.add.sprite(this.game.width / 2 - 250, 1410, 'draht14');  
        draht20 = game.add.sprite(this.game.width / 2 + 150, 1410, 'draht16');  
        draht21 = game.add.sprite(this.game.width / 2 + 330, 1410, 'draht11');  
        draht22 = game.add.sprite(this.game.width / 2 + 330, 1010, 'draht13');  
        draht23 = game.add.sprite(this.game.width / 2 + 330, 610, 'draht13');  
        draht24 = game.add.sprite(this.game.width / 2 + 330, 210, 'draht13');  
        draht25 = game.add.sprite(this.game.width / 2 + 330, 160, 'draht15');  
        draht26 = game.add.sprite(this.game.width / 2 + 330, 42, 'draht10');  
        draht27 = game.add.sprite(this.game.width / 2 + 130, 42, 'draht16');  
        draht28 = game.add.sprite(this.game.width / 2 - 270, 42, 'draht14');  //if 1
        draht29 = game.add.sprite(this.game.width / 2 - 430, 42, 'draht16');
        draht30 = game.add.sprite(this.game.width / 2 - 548, 42, 'draht9');
        draht31 = game.add.sprite(this.game.width / 2 - 548, 160, 'draht13');
        draht32 = game.add.sprite(this.game.width / 2 - 548, 560, 'draht13');
        draht33 = game.add.sprite(this.game.width / 2 - 548, 960, 'draht13');
        draht34 = game.add.sprite(this.game.width / 2 - 548, 1284, 'draht13');
        draht35 = game.add.sprite(this.game.width / 2 - 548, 1684, 'draht12');
        draht36 = game.add.sprite(this.game.width / 2 - 430, 1684, 'draht14');
        draht37 = game.add.sprite(this.game.width / 2 - 30, 1684, 'draht10');
        ziel = game.add.sprite(this.game.width / 2 - 30, this.game.height - 118, 'ziell');
        
        this.game.add.sprite(0, 0, 'schatteneasy12');  

        //add player
        sprite = game.add.sprite(this.game.width / 2 -59 , 59, 'playerBig');
		sprite.inputEnabled = true;
		sprite.input.enableDrag();
        sprite.anchor.set(0.5);

        flaecheeasy12 = this.game.add.sprite(0, 0, 'flaecheeasy12');  
   
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
        }
        else if (this.checkOverlap(sprite, draht10))
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
            level12counter = 1;
        }
		else if (this.checkOverlap(sprite, draht28))
		{
            //text.text = 'Drag the sprites. Overlapping: true';
            if(level12counter  == 1){
            }
            else{
                fail.visible = true;
                good.visible = false;
                this.wrongwayMessageBox(1512, 1050)
                sprite.inputEnabled = false;
                t++;            }
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
        else if (this.checkOverlap(sprite, ziel))
		{
            if(localStorage.getItem('finisheasyhd') == null){
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
            sprite.inputEnabled = false;
            t++;
            //text.text = 'Drag the sprites. Overlapping: false';
        }     
        if(this.checkOverlap(sprite, draht23)){
            flaecheeasy12.alpha = 0;
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
    var rightButton = this.game.add.sprite(0, 0, "buttonHauptmenugold");
    
    this.game.add.sprite(550, 300, "confetti1");
    this.game.add.sprite(550, 1450, "confetti2");

    //make a text field
    var style = {font:"60px Arial", align:"center", fill:"#a67c00", fontWeight:"bold"};

    var doneText1 = this.game.add.text(0, 0, "Du hast alle Level im Schwierigkeitsgrad EINFACH \nerfolgreich abgeschlossen!", style);

    doneText1.wordWrap = true;
    doneText1.wordWrapWidth = w * .9;

    back.width = w;
    back.height = h;

    //add elements to group
    msgBox.add(back);
    msgBox.add(rightButton);
    msgBox.add(doneText1);
    msgBox.angle = 90;

    //configurate rightButton
    rightButton.x = back.width / 2 - 260;
    rightButton.y = back.height - rightButton.height - 90;
    rightButton.inputEnabled = true;
    rightButton.events.onInputDown.add(this.backToSelectModefinishEvent, this);
    
    //set the message box in the center
    msgBox.x = this.game.width / 2 + msgBox.height/2;
    msgBox.y = this.game.height / 2 - msgBox.width / 2;
    
    doneText1.x = back.width / 2 - doneText1.width / 2;
    doneText1.y = back.height / 2 - doneText1.height / 2 - 100;
   
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

    backToSelectModefinishEvent() {
		this.gamePlay();
		this.state.start('SelectMode');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();
        winsound.stop();	
        localStorage.setItem('finisheasyhd', 1);			
    },
    
	loadNextLevelEvent() {
		this.gamePlay();
		this.state.start('Level12_easy');
		counter = 0;
        this.msgBox.destroy();
        clicksound.play();	
        winsound.stop();	
    },

    loadThisLevelEvent() {
		this.gamePlay();
		this.state.start('Level12_easy');
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