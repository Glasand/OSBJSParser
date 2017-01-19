function OsuSprite(Layer,origin,path,Cordinates)
{
	this.x = Cordinates.x;
	this.y = Cordinates.y;
	this.path = path;
	this.layer = Layer;
	this.origin = origin;
	this.declare = "Sprite," + this.layer + "," + this.origin + "," + "\"" + this.path + "\"," + this.x + "," + this.y;
	this.cmds = [];
	this.move = function(Easing,startTime,EndTime,StartCords,EndCords)
	{
		this.move.easing = Easing.Num;
		this.move.startTime = startTime;
		this.move.endTime = EndTime;
		this.move.startX = StartCords.x;
		this.move.startY = StartCords.y;
		this.move.endX = EndCords.x;
		this.move.endY = EndCords.y;
		this.move.command = "\n M," + this.move.easing + "," + this.move.startTime + "," + this.move.endTime + "," + this.move.startX + "," + this.move.startY + "," + this.move.endX + "," + this.move.endY;
		this.cmds.push(this.move.command);
	}
	this.moveX = function(Easing,startTime,EndTime,StartCords,EndCords)
	{
		this.moveX.easing = Easing.Num;
		this.moveX.startTime = startTime;
		this.moveX.endTime = EndTime;
		this.moveX.startX = StartCords;
		this.moveX.endX = EndCords;
		this.moveX.command = "\n MX," + this.moveX.easing + "," + this.moveX.startTime + "," + this.moveX.endTime + "," + this.moveX.startX + "," + this.moveX.endX;
		this.cmds.push(this.moveX.command);
	}
	this.moveY = function(Easing,startTime,EndTime,StartCords,EndCords)
	{
		this.moveY.easing = Easing.Num;
		this.moveY.startTime = startTime;
		this.moveY.endTime = EndTime;
		this.moveY.startY = StartCords;
		this.moveY.endY = EndCords;
		this.moveY.command = "\n MY," + this.moveY.easing + "," + this.moveY.startTime + "," + this.moveY.endTime + "," + this.moveY.startY + "," + this.moveY.endY;
		this.cmds.push(this.moveY.command);
	}
	this.fade = function(Easing,startTime,EndTime,StartOpacity,EndOpacity)
	{
		this.fade.easing = Easing.Num;
		this.fade.startTime = startTime;
		this.fade.endTime = EndTime;
		this.fade.startOpacity = StartOpacity;
		this.fade.endOpacity = EndOpacity;
		this.fade.command = "\n F," + this.fade.easing + "," + this.fade.startTime + "," + this.fade.endTime + "," + this.fade.startOpacity + "," + this.fade.endOpacity;
		this.cmds.push(this.fade.command);
	}
	this.scale = function(Easing,startTime,EndTime,StartScale,EndScale)
	{
		this.scale.easing = Easing.Num;
		this.scale.startTime = startTime;
		this.scale.endTime = EndTime;
		this.scale.startScale = StartScale;
		this.scale.endScale = EndScale;
		this.scale.command = "\n S," + this.scale.easing + "," + this.scale.startTime + "," + this.scale.endTime + "," + this.scale.startScale + "," + this.scale.endScale;
		this.cmds.push(this.scale.command);
	}
	this.scaleV = function(Easing,startTime,EndTime,StartScale,EndScale)
	{
		this.scaleV.easing = Easing.Num;
		this.scaleV.startTime = startTime;
		this.scaleV.endTime = EndTime;
		this.scaleV.startX = StartScale.x;
		this.scaleV.startY = StartScale.y;
		this.scaleV.endX = EndScale.x;
		this.scaleV.endY = EndScale.y;
		this.scaleV.command = "\n M," + this.scaleV.easing + "," + this.scaleV.startTime + "," + this.scaleV.endTime + "," + this.scaleV.startX + "," + this.scaleV.startY + "," + this.scaleV.endX + "," + this.scaleV.endY;
		this.cmds.push(this.scaleV.command);
	}
	this.rotate = function(Easing,startTime,EndTime,StartRotate,EndRotate)
	{
		this.rotate.easing = Easing.Num;
		this.rotate.startTime = startTime;
		this.rotate.endTime = EndTime;
		this.rotate.startRotate = StartRotate;
		this.rotate.endRotate = EndRotate;
		this.rotate.command = "\n R," + this.rotate.easing + "," + this.rotate.startTime + "," + this.rotateendTime + "," + this.rotate.startRotate + "," + this.rotate.endRotate;
		this.cmds.push(this.rotate.command);
	}
	this.color = function(Easing,startTime,EndTime,StartCords,EndCords)
	{
		this.color.easing = Easing.Num;
		this.color.startTime = startTime;
		this.color.endTime = EndTime;
		this.color.startR = StartColor.r;
		this.color.startG = StartColor.g;
		this.color.startB = StartColor.b;
		this.color.endR = EndColor.r;
		this.color.endG = EndColor.g;
		this.color.endB = EndColor.b;
		this.color.command = "\n C," + this.color.easing + "," + this.color.startTime + "," + this.color.endTime + "," + this.color.startR + "," + this.color.startG + "," + this.color.startb + "," + this.color.endR + "," + this.color.endG + "," + this.color.endB;
		this.cmds.push(this.color.command);
	}
	this.compile = function()
	{
		this.final = this.declare;
		for (var i = this.cmds.length - 1; i >= 0; i--) {
			this.final = this.final + this.cmds[i];
		};
		
	}

}

function Cords(x,y)
{
	this.x = x;
	this.y = y;
}

function OsbEasing(type)
{
	if(typeof type == "string"){
	this.type = type.toUpperCase();
	}
	this.Num = 0;
	if(this.type == "NONE" || this.type == 0)
	{
		this.Num = 0;
	}
}

function degressToRadians(degree)
{
	return (degree * (Math.PI/180));
}

function color4(r,g,b)
{
	this.r = r;
	this.g = g;
	this.b = b;
}

function OSBStoryboardGenerate(SpriteList)
{

		this.SpriteFileContents = SpriteList.join("\n");
		SpriteFileURI = "data:application/octet-stream," + encodeURIComponent(this.SpriteFileContents);
		console.log(SpriteFileURI);
		var SpriteFileLinkHTML = document.createElement("a");
		// Add script content
		var linkText = document.createTextNode("Download");
		SpriteFileLinkHTML.appendChild(linkText);
		SpriteFileLinkHTML.title = "Download";
		SpriteFileLinkHTML.href = SpriteFileURI;
		document.body.appendChild(SpriteFileLinkHTML);
	
}
