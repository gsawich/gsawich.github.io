var logo;
var time;
var page;
var logoSize = .8;
var pointDist = 64;
var distance = 5;
var linkSize = 80;
var title;
var fil;
var gitlink;
var fblink;
var sclink;
var mommadiv;
var daddydiv;
var dispH;
var momtyle;
var dadstyle;
var linky;
var rt3over2=0.866

var articles = [
	 {
	 	"id":"0",
	 	"type":"contact",
	 	"title":"gsawich@gmail.com",
	 	"description":""
	 },
		{
			"id":"1",
			"type":"music",
			"title":"Taste The Bass Season I",
			"description":
				"Taste The Bass was a weekly terrestrial radio show dedicated to showcaMath.sing the hottest and latest in the growing bass-music scene. Introducing the airwaves to post-dubstep, future beats, glitch-hop and more, this 10-episode season ran from September-December 2013 on WVUM 90.5FM",
			"img":"/tastethebass/TasteTheBassBanner.png"
		},
		{
			"id":"2",
			"type":"music",
			"title":"Taste The Bass Season II",
			"description":
				"The collection of Taste The Bass mixes from January-May 2014, showcaMath.sing the hottest sounds from Jersey Club to Future Trap.",
			"img":"/tastethebass/TasteTheBassBannerII.png"
		},
		{
			"id":"3",
			"type":"music",
			"title":"Taste The Bass Finale",
			"description":
				"The final episode of Taste The Bass to air on WVUM - a compilation of all my favorites from the entire series.",
				"music":
				"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/149173569&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
		},
		{
			"id":"4",
			"type":"hack",
			"title":"DIY 3D Printed Smartwatch",
			"description":
			"First experiment with 3D printing and Arduino. Communicates with an Android phone through RetroWatch app by @godstale",
			"img":
			"/pics/retrowatch.jpg"
		},
		{
			"id":"5",
			"type":"music",
			"title":"Taste The Bass Returns",
			"description":
				"A web-only exclusive mix of favorites from 2015",
				"music":
				"https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/222869151&amp;color=ff5500&amp;auto_play=false&amp;hide_related=false&amp;show_comments=true&amp;show_user=true&amp;show_reposts=false"
		},
		{
			"id":"6",
			"type":"hack",
			"title":"vivantvintage.com",
			"description":
			"Homemade web design and development for Vivant Vintage in Boston, MA",
			"img":"/pics/vivant.jpg"
		},
		{
			"id":"7",
			"title":"Triton",
			"description":
			"A planetary simulator for the Android which visualizes the positions of the solar system at any given date in both 2D and 3D.",
			"img":"/pics/triton.jpg"
		},
		{
			"id":"8",
			"type":"hack",
			"title":"Raspberry Pi Packet Sniffer",
			"description":
			"This innocous little device is a fully automated, passive plug'n'play promiscuous Wireshark packet collector. More info <a href ='https://docs.google.com/presentation/d/13gKhPqni91q7Gcan7A6nPYA_7iR2CuMPuJ4jx6vkT2g/edit?usp=sharing'>here</a>",
			"img":"/pics/raspacket.jpg"
		},
		{
			"id":"9",
			"type":"hack",
			"title":"Dionysus Brite",
			"description":
			"A three-piece sound-reactive LED Math.costume.",
			"img":"/pics/dionysus.jpg"
		}
	];

	p5.disableFriendlyErrors = true;

function preload() {
	logo = loadImage("LogoRot.png");

}

function setup() {
	dispH = (articles.length+1)*1024;
	createCanvas(windowWidth, dispH);
	time = 0;
	page = 0; //Latest
 linkSize = logoSize*(windowWidth/12);
	gitlink = createA("http://github.com/gsawich","github.com/gsawich", "_blank");
	fblink = createA("http://facebook.com/gabe.sawich", "facebook.com/gabe.sawich", "_blank");
	sclink = createA("http://soundcloud.com/drliquidglitch", "soundcloud.com/drliquidglitch", "_blank");
 gitlink.class("headLink");
 fblink.class("headLink");
 sclink.class("headLink");
	daddydiv = createDiv("");
 dadstyle = new p5.Element(daddydiv.elt);
 mommadiv = createDiv("");
 momstyle = new p5.Element(mommadiv.elt);


 //frameRate(60);
 
 for(var i = 0; i < articles.length; i++){
 	var newdiv = createDiv("");
 	var newdivT = createElement('h2', articles[i].title);
 	newdivT.class("bodytitle");
 	newdiv.class("bodydiv");
 	newdiv.child(newdivT);
 	

 	if (articles[i].hasOwnProperty('img')) {
 		var newdivImg = createImg(articles[i].img);
 		newdiv.child(newdivImg);
 	}
 	if (articles[i].hasOwnProperty('music')) {
 		var newdivP = createElement('iframe', "");
 		newdivP.style('height', '166');
 		newdivP.attribute('scrolling', 'no');
 		newdivP.attribute('frameborder', 'no');
 		newdivP.attribute('src', articles[i].music);
 		newdiv.child(newdivP);
 	}
 	
 	var newdivD = createP(articles[i].description);
 	newdiv.child(newdivD);
 	newdiv.style("padding:16");
 	
 	mommadiv.child(newdiv);
 }
 daddydiv.child(mommadiv);

}

function draw() {
	time = (time+1);
 var cosover400 = 4*Math.cos(time/400);
 var cosover200 = 4*Math.cos(time/200);
 var sinover100 = 4*Math.sin(time/100);

	var bgcol = color(15*abs(Math.cos(time/500)),0,25);
	background(bgcol);
	
	imageMode(CENTER);
	translate(windowWidth/2, logoSize*(windowWidth/5));
	strokeWeight(4);
	stroke(color(255,255,255));

 for (i = 0; i < (pointDist/2); i++) {
		var distMod = (i/(pointDist/8))*logoSize;
		var siniover200 = Math.sin((i)+(time/200));
  var cosiover200 = Math.cos((i)+(time/200));
		point(i*(windowWidth/pointDist), (siniover200)*(windowWidth/32)*distMod);
		point(i*(windowWidth/pointDist), (cosiover200)*(windowWidth/32)*distMod);
		point(-i*(windowWidth/pointDist), (siniover200)*(windowWidth/32)*distMod)
		point(-i*(windowWidth/pointDist), (cosiover200)*(windowWidth/32)*distMod);
	}
	
		textAlign(CENTER);
		strokeWeight(4);
		stroke(255);
		if (distance < windowWidth/6) distance*=1.04;
		else distance=windowWidth/6;
		var ld = distance+(0.5*distance*abs(Math.sin(time/50)/(time/50)));
		fill(color('rgba(255,255,255,1)'));
		if(mouseOver(windowWidth/2, (logoSize*(windowWidth/5))+ld+(sinover100)+linkSize, linkSize)==true) {
			fill(color('rgba(255,255,255,0.5)'));
			if(mouseIsPressed) page = 2;
		}
		stroke(0);
		quad(0, ld+(sinover100),
							linkSize, linkSize+ld+(sinover100),
							0, (2*linkSize)+ld+(sinover100),
							-linkSize, linkSize+ld+(sinover100));
		textSize(linkSize/3);
		fill(color(0));
		stroke(255);
		text("hacks", 0, ld+linkSize+(linkSize/8));
		fill(color('rgba(255,255,255,1)'));
		if(mouseOver((windowWidth/2)-(rt3over2)*(ld+(cosover200)), (logoSize*(windowWidth/5))+(ld/2)+(cosover200), linkSize)) {
			fill(color('rgba(255,255,255,0.5)'));
			if(mouseIsPressed) page = 1;
		}
		stroke(0);
		quad(-(rt3over2)*(ld+(cosover200)), (ld/2)+(cosover200-linkSize), 
							-(rt3over2)*(ld+(cosover200))+linkSize, (ld/2)+(cosover200),
							-(rt3over2)*(ld+(cosover200)), (ld/2)+(cosover200)+(linkSize),
							-linkSize-(rt3over2)*(ld+(cosover200)), (ld/2)+(cosover200));
		fill(color(0));
		stroke(255);
		text("music", -(rt3over2)*(ld+(cosover200)), (ld/2)+(linkSize/8)+(cosover200));
		stroke(0);
		fill(color('rgba(255,255,255,1)'));
		if(mouseOver((windowWidth/2)+(rt3over2)*(ld+(cosover400)), (logoSize*(windowWidth/5))+(ld/2)+(cosover400), linkSize)) {
			fill(color('rgba(255,255,255,0.5)'));
			if(mouseIsPressed) page = 3;
		}
		stroke(0);
		quad((rt3over2)*(ld+(cosover400)), (ld/2)+(cosover400-linkSize), 
							(rt3over2)*(ld+(cosover400))+linkSize, (ld/2)+(cosover400),
							(rt3over2)*(ld+(cosover400)), (ld/2)+(cosover400)+(linkSize),
							-linkSize+(rt3over2)*(ld+(cosover400)), (ld/2)+(cosover400));
		fill(color(0));
		stroke(255);
		text("contact", (rt3over2)*(ld+(cosover400)), (ld/2)+(linkSize/8)+(cosover400));
		stroke(0);
		
	if(mouseOver((windowWidth/2), logoSize*(windowWidth/5), logoSize*windowWidth/10)) {
		if(mouseIsPressed) page = 0;
		}
	rotate(-QUARTER_PI);
	image(logo, 0,0, logoSize*(windowWidth/4), logoSize*(windowWidth/4));
	rotate(QUARTER_PI);
	
	fill(color('rgba(255,255,255,1)'));
	translate(-windowWidth/2, windowWidth/6);
	textAlign(LEFT);
	textSize(linkSize/2);
	text("Gabriel Sawich", 32, 0);
	textSize(linkSize/4);
	linky = logoSize*(windowWidth/2.5);
	gitlink.position(40, linky+(linkSize/2));
	fblink.position(40, linky+(linkSize));
	sclink.position(40, linky+(linkSize*1.5));
	
	switch(page){
		case(0):
			title = "Latest: ";
			fil = "music";
			break;
		case(1):
			title = "Music: ";
			fil = "music";
			break;
		case(2):
			title = "Hacks: ";
			fil = "hack";
			break;
		case(3):
			title = "Contact: ";
			fil = "contact";
			break;
		default: 
			title= "ERROR 404";
			break;
	}
	
	textSize(linkSize);
	text(title, 64, linkSize*3);
	momstyle.style("background:"+bgcol);
	dadstyle.style("background:"+bgcol);
	momstyle.style("margin:16");
 dadstyle.style("width:100%; height:100%");
 dadstyle.style("margin:16");
 daddydiv.position(0,(linky/1.1)+(linkSize*4));
	mommadiv.position(96, 0);
}

function mouseOver(x, y, size) {
	var mx = mouseX;
	var my = mouseY;
	
	if (((mx > x-size) && (mx < x+size)) && ((my > y-size) && (my < y+size))) {
		return true;
	}
	return false;
}

function windowResized() {
  resizeCanvas(windowWidth, displayHeight);
  linkSize = logoSize*(windowWidth/12);
}
