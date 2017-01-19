//Declare the new object
	var Sprite = new OsuSprite("Background", "Centre", "sb/test.png", new Cords(320,240));
	//make it move
	//Syntax
	// Object.move(new OsbEasing("EasingType"),StartTime,EndTime,new Cords(X,Y) StartCords,new Cords(X,Y) EndCords);
	Sprite.move(new OsbEasing("none"),0,1000, new Cords(320,240), new Cords(0,0));
	Sprite.moveX(new OsbEasing(0),1000,2000,320,0);
	Sprite.moveY(new OsbEasing("none"),1000,2000,240,0);
	Sprite.fade(new OsbEasing("none"),0,500,0,0.5);
	Sprite.compile();
	console.log(Sprite.final);