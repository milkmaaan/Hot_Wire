var Game = {};

Game.Boot = function(game) {
};

Game.Boot.prototype = {
	init:function(){
		this.input.maxPointers = 1;
		this.stage.disableVisibilityChange = true;
		localStorage.setItem('finish', 0);
	},

	preload:function(){
	},

	create:function(){
		this.state.start('Preloader');
	}
}