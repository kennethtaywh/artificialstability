var img, secondImg, thirdImg, fourthImg, fifthImg;
var backgroundArray = [];
var bg;
var chapterText = "";
var smallPoint, largePoint;
var speed = 60;




function preload() {
  img = loadImage("data/marinaBaySands.jpg");
  backgroundArray.push(img);
  secondImg = loadImage("data/sandReclamation.png", "png");
  backgroundArray.push(secondImg);
  thirdImg = loadImage("data/landAreaSingapore.png", "png");
  backgroundArray.push(thirdImg);
  fourthImg = loadImage("data/sandSation1999.jpg");
  backgroundArray.push(fourthImg);
  fifthImg = loadImage("data/georgeYeo.jpg");
  backgroundArray.push(fifthImg);
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(194, 178, 128)
  smallPoint = 4;
  largePoint = 8;
  imageMode(CENTER);
  noStroke();
  
}

function draw() {

frameRate(speed);

textSize(20)
textStyle(BOLD)
textAlign(LEFT)
fill(255)
text("ARTIFICIAL" +"\n" + "STABILITY", 0.02*width, 0.05*height);

textSize(10)
textStyle(NORMAL)
fill(255)
text("This page is divided into five segments. Click across the page to navigate. Click and hold to stabilize the page.", 0.02*width, 0.98*height);


  	if (mouseX < 0.20*width && mouseIsPressed){
  		bg = backgroundArray[0];
  		imageMode(CORNER)
  		background(bg);
  		
  		chapterText = "This is an image of the infinity pool, located on the top of Marina Bay Sands, Singapore." +"\n" + "Today, the integrated casino resort has become something of an icon, a first stop for" + "\n" + "tourists hoping to soak in the views of Singapore’s downtown skyline. Indeed, the" + "\n" + "vantage point offered by the infinity pool could not have been more strategic an expression" + "\n" + "of Singapore's wealth. Overlooking Singapore’s financial centre and out towards the seas," + "\n" + "with the containers and port cranes dotting the horizon, the infinity pool offers an imagined" + "\n" + "seamlessness between these different spaces. In other words, the pool doubles up" +"\n" +"essentially as an observation deck from which to witness the flows and rhythms of" + "\n" + "Singapore, and a place for the affluent to monitor the vital signs of the global economy." + "\n" + "\n" + "Yet, about twenty five years ago, the land on which the infinity pool sits did not exist." + "\n" + "Itself a product on trade flows, land in this downtown area of Singapore has been built" + "\n" + "entirely on sand sourced from elsewhere, through a process of land reclamation that" + "\n" + "was completed around the early 1990s. We ought then to think of the infinity pool’s" + "\n" +"design as a knowing and self-satisfied acknowledgement of the fact that what has been" + "\n" + "built here on site has simply risen from the seas. Even the name 'Marina Bay Sands'" + "\n" + "itself starts to take on a different register, for this Atlantis built on sand.";
  		textSize(20)
  		textStyle(BOLD)
  		textAlign(LEFT)
  		fill(255)
  		text(chapterText, 0.25*width, 0.05*height);
	} 

	if (mouseX > 0.2*width && mouseX < 0.4*width && mouseIsPressed){
		bg = backgroundArray[1];
		imageMode(CORNER)
		background(bg);
		
		var c = color('rgba(0,0,0,0.2)');
		fill(c);
		rect(0.24*width, 0.005*height, 0.67*width, 0.87*height);

		chapterText = "Since its national independence in 1965, Singapore has been steadily geo-engineering" + "\n" + "its land and borders. Beginning first with levelling its own hills before relying heavily" + "\n" + "on its regional neighbors for imported sand, Singapore has in the last fifty years" + "\n" + "grown from 581.5 square kilometers (224.5 square miles) to 721.5 square kilometers" + "\n" + "(278.6 square miles). To put things further into perspective, just to create 1 square" + "\n" + "kilometers (0.6 square miles) worth of new land requires a total of 37.5 million cubic" + "\n" + " meters of sand. That is enough sand to fill three and a half Empire State Buildings." + "\n" + "Taking account of Singapore’s total land reclamation thus far, Singapore has" + "\n" + "used enough sand to fill close to 500 Empire State Buildings." + "\n" + "\n" + "But as impressive as these numbers may be, there is still a huge discrepancy between" + "\n" + "the figures reported by Singapore and the figures released by its neighbors from" + "\n" + "whom Singapore imports its sand. In 2008, for instance, Singapore declared that" + "\n" + "it had only imported 3 million tons of sand from Malaysia; yet Malaysia’s figures" + "\n" + "showed that a staggering 133 million tons of sand were reportedly exported to" + "\n" + "Singapore. It is difficult to point the finger at either side to say who is muddying up" + "\n" + "the figures. There is, in other words, data everywhere, but nothing conclusive in this" + "\n" + "sea of data. Yet, it is clear that should this epistemological and political uncertainty" + "\n" + "persists, the odds surely favor a Singapore with its long-held image of a clean and" + "\n" + "efficient government, and its reputation as a secure and corruption-free space to do" + "\n" + "business."
		textSize(20);
  		textStyle(BOLD)
  		textAlign(LEFT)
  		fill(255)
  		text(chapterText, 0.25*width, 0.05*height);
	}

	if (mouseX > 0.4*width && mouseX < 0.6*width && mouseIsPressed){
		bg = backgroundArray[2];
		imageMode(CORNER)
		background(bg);
		
		chapterText = "But suppose we course-correct our approach. That is, what if we suspend our" + "\n" + "suspicions of muddied data, stop looking elsewhere for dirt on the Singaporean" + "\n" + "government where the odds are stacked against us, and instead perform a drift" + "\n" + "through the data published thus far and through the archives looking for ‘sand’?" + "\n" + "\n" + "As part of its open data efforts, the Singapore government has released data regarding" + "\n" + "its land area size, recorded on a yearly basis since 1959. What’s interesting about" + "\n" + "this data visualization released by the government are two periods that clearly stood" + "\n" + "out in terms of their gradient: (1) 1973 to 1976, (2) 1997 to 1999. Two steep periods" + "\n" + "that suggest Singapore went through a significant increase in size. Why was it that" + "\n" + "between 1997 and 1999 Singapore experienced what looks like the most accelerated" + "\n" + "increase in its land area?" + "\n" + "\n" + "The simplest answer in this case might be the Asian Financial Crisis, which occured" + "\n" + "between 1997 and 1999. Because Singapore remained relatively unhurt compared to" + "\n" + "others, this regional crisis presented an opportunity for Singapore to buy up sand from" + "\n" + "its neighbors for far less than its usual price. All this, despite Malaysia having already" + "\n" + "imposed an official ban on sand export to Singapore since 1997. The Asian Financial" + "\n" + "Crisis, which began after the Thai government decided to float its currency, was" + "\n" + "followed by calls for each affected economy to start regulating its own financial" + "\n" + "flows, thus marking a period of correcitonal regulations extending beyond the" + "\n" + "region's flows of sand.";
		textSize(20)
  		textStyle(BOLD)
  		textAlign(LEFT)
  		fill(194, 178, 128)
  		text(chapterText, 0.25*width, 0.05*height);	
	}

	if (mouseX > 0.6*width && mouseX < 0.8*width && mouseIsPressed){
		bg = backgroundArray[3];
		imageMode(CORNER)
		background(bg);
		
		var c = color('rgba(0,0,0,0.2)');
		fill(c);
		rect(0.24*width, 0.005*height, 0.67*width, 0.8*height);
		
		chapterText = "As if to add further insult to the injuries of its neighbors, Singapore held its first" + "\n" + "international sand-sculpting competition ‘Sandsation’ in 1999. The first of its kind" + "\n" + "in Asia, the top prize for the inaugural competition went to a sand sculpture depicting" + "\n" + "the first Chinese emperor Qin Shi Huang presiding over his creation, the Great Wall" + "\n" + "of China. It’s tempting here to speculate on why such a work was awarded the top prize," + "\n" + "given the controversies surrounding Singapore’s continued importation of sand from" + "\n" + "Malaysia and with the recency of the Asian Financial Crisis. While much has been" + "\n" + "written about the Great Wall being constructed to keep off invading enemies from" + "\n" + "the north, much less is said of its double function as a trade corridor for the flow of" + "\n" + "goods, ideas, and people." + "\n" + "\n" + "Returning to the situation in Singapore, sand is integral to Singapore’s continued" + "\n" + "expansion, so that Singapore can continue to build more infrastructural spaces (e.g." + "\n" + "ports) which would then secure Singapore’s critical position in the flows of the global" + "\n" + "economy, making it easier and more lucrative for sand to be imported into Singapore." + "\n" + "It is a circuitous logic between security and accumulation that is perhaps not that" + "\n" + "different from the form of the prize-winning sand sculpture. Perhaps the real winner of" + "\n" + "the Sandsation competition should really have been awarded to the Singaporean state" + "\n" + "itself for being the most accomplished sand-sculptor."
		textSize(20)
  		textStyle(BOLD)
  		textAlign(LEFT)
  		fill(255)
  		text(chapterText, 0.25*width, 0.05*height);
	}

	if (mouseX > 0.8*width && mouseIsPressed){
		bg = backgroundArray[4];
		imageMode(CORNER)
		background(bg);
		
		var c = color('rgba(0,0,0,0.35)');
		fill(c);
		rect(0.24*width, 0.005*height, 0.67*width, 0.95*height);
		
		chapterText = "A few months after he officiated the opening of Sandsation 1999, Singapore’s then" + "\n" + "Minister for Trade and Industry George Yeo flew to Hong Kong for the Golden Jubilee" + "\n" + "of the New Asia College. The minister began his speech by quoting the physics concept" + "\n" + "of 'artificial stability.' Through the example of a jet plane, Yeo explained how the plane is" + "\n" + "designed to be unstable, in order for it to turn swiftly in the air, and thus requires a pilot" + "\n" + "to maintain constant stability throughout. Artificial stability thus refers to the need to" + "\n" + "maintain order and stability on an otherwise chaotic and unstable situation." + "\n" + "\n" + "Yeo then remarked on the occasion coinciding with the 50th anniversary of the Chinese" + "\n" + "revolution: 'The Chinese revolution which overthrew imperial rule is still ongoing.' He" + "\n" + "was of course complimenting the ceaseless energy and dynamism of the Chinese;" + "\n" + "but he could have been talking about Singapore. The geo-engineering of Singapore's" + "\n" + "land has placed the island-nation in a permanent territorial revolution. This permanent" + "\n" + "revolution is made possible by what is essentially a product of the Earth's dynamism." + "\n" + "Sand is created when rocks crumble over time due to weathering, or through molten" + "\n" + "rocks spewing from a volcanic eruption. We might think then of Singapore's land" + "\n" + "reclamation as 'artificial stability,' turning what is naturally a product of Earth's" + "\n" + "instability (sand) into stabilized, controllable spaces (land)." + "\n" + "\n" + "The Asian Financial Crisis is a period marked not only by issues of financial regulations" + "\n" + "and Singapore’s massive importing of sand. It needs to be remembered as a time" + "\n" + "Singapore exported the concept of “artificial stability” to the world: every crisis is" + "\n" + "always an opportunity to assert some artificial stability; there is profit to be made."
		textSize(20)
  		textStyle(BOLD)
  		textAlign(LEFT)
  		fill(255)
  		text(chapterText, 0.25*width, 0.05*height);
  		
  		textSize(10)
		textAlign(RIGHT)
		textStyle(NORMAL)
		text("^ References", 0.98*width, 0.98*height)
	}
		if (mouseX > 0.91*width && mouseY > 0.96*height && mouseIsPressed){
			background(194, 178, 128)
			textSize(20)
			textAlign(LEFT)
			textStyle(BOLD)
			text("References" + "\n" + "\n" + "Charmaine Chua, 'Sunny island set in the sea: Singapore's land reclamation" + "\n" + "as a colonial project,' The Funambulist 17 (May-June 2018): 20-25." + "\n" + "\n" + "Chris Milton, 'The Sand Smugglers,' Foreign Policy, August 4, 2010," + "\n" + "http://foreignpolicy.com/2010/08/04/the-sand-smugglers/." + "\n" + "\n" + "Singapore Land Authority, 'Total Land Area of Singapore,' Data.gov.sg," + "\n" + "https://data.gov.sg/dataset/total-land-area-of-singapore." + "\n" + "\n" + "Kenneth Tay, 'Sand/Land,' are.na channel, https://www.are.na/kenneth-tay/sand-land." + "\n" + "\n" + "\n" + "Image Credits" + "\n" + "Chia Ming Chien, National Archives Singapore, Singapore Land Authority", 0.25*width, 0.05*height);
		}


if (mouseIsPressed){
  		speed = 1
  	} else {
  		speed = 60
  	}

  var pointillize = map(mouseX, 0, width, largePoint, smallPoint);
  var x = floor(random(img.width));
  var y = floor(random(img.height));
  // var pix = img.get(x, y);
  fill(194, 178, 128);
  ellipse(x, y, pointillize, pointillize);  

}


//ESSAY IN LONG FORM HERE:

//Artificial Stability

//This is an image of the infinity pool, located on the top of Marina Bay Sands, Singapore. 
//Today, the integrated casino resort has become something of an icon, a first stop for tourists 
//hoping to soak in the views of Singapore’s downtown skyline. Indeed, the vantage point offered by 
//the infinity pool could not have been more strategic an expression of Singapore’s wealth. 
//Overlooking Singapore’s financial centre and out towards the seas, with the containers and port cranes
//dotting the horizon, the infinity pool offers an imagined seamlessness between these different spaces. 
//In other words, the pool doubles up essentially as an observation deck from which to witness the flows 
//and rhythms of Singapore, and a place for the affluent to monitor the vital signs of the global economy.  
//Yet, about twenty five years ago, the land on which the infinity pool sits did not exist. 
//Itself a product on trade flows, land in this downtown area of Singapore has been built entirely on sand
//sourced from elsewhere, through a process of land reclamation that was completed around the early 1990s. 
//We ought then to think of the infinity pool’s design as a knowing and self-satisfied acknowledgement of 
//the fact that what has been built on site has simply risen from the seas. Even the name “Marina Bay Sands” 
//itself starts to take on a different register, for this Atlantis built on sand.

//Since its national independence in 1965, Singapore has been steadily geo-engineering its land and borders. 
//Beginning first with levelling its own hills before relying heavily on its regional neighbors for imported 
//sand, Singapore has in the last fifty years grown from 581.5 square kilometers (224.5 square miles) to 
//721.5 square kilometers (278.6 square miles). The sheer size of this increase may not be much, 
//Singapore is after all still smaller than the entire size of New York City; but the scale corresponds to 
//what is roughly a quarter of Singapore’s original size. And to put things further into perspective, 
//just to create 1 square kilometers (0.6 square miles) worth of new land requires a total of 37.5 million 
//cubic meters of sand. That alone is enough sand to fill three and a half Empire State Buildings, or to 
//fill up 1.4 million dump trucks. Taking account of Singapore’s total land reclamation thus far, 
//Singapore has used enough sand to fill close to 500 Empire State Buildings, and 200 million dump trucks.
//But as impressive as these numbers may be, they tell only the side of Singapore’s story. Just as the term 
//“land reclamation” places an emphasis on Singapore’s territorial claims and shifts attention away from the 
//territory being taken away literally from elsewhere. Indeed, much of these data have been published openly 
//by the Singaporean government. And while it is in Singapore’s interest as a global financial center to be 
//transparent as much as possible about its own business transactions, Singapore’s land reclamation is also 
//heavily reliant on outsourcing corruption to the neighboring countries that are selling sand, often illegally, 
//to Singapore. As Chris Milton observed, although sand import and export figures are published in the common 
//database of the UN’s Comtrade database, there is a huge discrepancy between the figures reported by Singapore 
//and its neighbors: “For example, in 2008, Singapore declared it has imported only 3 million tons of sand from 
//Malaysia — yet Malaysia’s figures show that a staggering 133 million tons of sand were reportedly exported to 
//Singapore.” It is difficult to point the finger at either side to say who is muddying up the figures. 
//There is, in other words, data everywhere, but nothing conclusive in this sea of data. 
//Yet, it is clear that should this epistemological and political uncertainty persists, the odds surely favor 
//a Singapore with its long-held image of a clean and efficient government, and its reputation as a secure and 
//corruption-free space to do business.

//Suppose we attempt to course-correct our approach. That is, what if we suspend our suspicions of muddied data, 
//stop looking elsewhere for dirt on the Singaporean government where the odds are stacked against us, and instead 
//place our trust on the data that Singapore has published openly? What else might we find from these data, and 
//what else might we be able to say about the issue of sand?
//As part of its open data efforts, the Singapore government has released data regarding its land area size, 
//recorded on a yearly basis since 1959. What’s interesting about this data visualization through the plotting 
//of a graph are two periods that clearly stood out in terms of their gradient: (1) 1973 to 1976, (2) 1997 to 1999. 
//Two steep periods that suggest Singapore went through a significant increase in size; two steep periods in which 
//Singapore was experiencing a massive influx of sand and undergoing tremendous land reclamations. 
//This interests me a great deal, mostly because existing criticisms of Singapore’s land reclamations have largely 
//focused on the issue of legality (i.e. whether the sand imported into Singapore is obtained through legal means, 
//and how the Singaporean government might be implicated in all this) or on the environmental justice of this practice 
//(i.e. how communities from where sand is extracted have been affected, whether this is a question of a compromised 
//biodiversity or the utter disappearance of islands). While these are all important and critical issues that we would 
//have to continue debating, much of the engagement with this data has been a cursory quotation of the land area increase 
//since the 1960s (much in the same way this essay began). Here, I am rather interested in asking the question why was it that 
//between 1997 and 1999 Singapore experienced what looks like the most accelerated increase in its land area? 
//What are the factors during this period that led to this development? 

//As if to add further insult to the injuries of its neighbors, Singapore held its first international sand-sculpting 
//competition “Sandsation” in 1999. The first of its kind in Asia, the top prize for the inaugural competition went 
//to a sand sculpture depicting the first Chinese emperor Qin Shi Huang presiding over his creation, the Great Wall of China. 
//It’s tempting here to speculate on why such a work was awarded the top prize, given the controversies surrounding Singapore’s 
//continued importation of sand from Malaysia despite the official ban and that of the Asian Financial Crisis. 
//As Joshua Comaroff argues, “sand security is a safeguard of the [Singaporean] state’s right to development … 
//Sand, like money, must remain liquid for the economy to keep moving.” This relationship between security and movement 
//is of course pertinent to the Great Wall. While most people are aware that the Great Wall was constructed by the emperor to 
//keep off invading enemies from the north, much less is said of its double function as a trade corridor for the flow of 
//goods, ideas and people. Returning to the situation in Singapore, sand is integral to Singapore’s continued expansion 
//in order to build more infrastructural spaces (such as the ports) which would then secure Singapore’s critical position 
//in the flows of the global economy. It is a circuitous logic between security and accumulation that is perhaps not that 
//different from the form of the prize-winning sand sculpture. Perhaps the real winner of the inaugural Sandsation competition 
//should really have been awarded to the Singaporean state itself for being the most accomplished sand-sculptor.

//A few months after he officiated the opening of Sandsation 1999, Singapore’s then Minister for Trade and Industry George Yeo 
//flew to Hong Kong for the Golden Jubilee of the New Asia College. Speaking to a post-1997-Handover audience, the minister began 
//his speech by quoting the physics concept of “artificial stability.” Explaining the concept through the example of a jet plane, 
//Yeo described how the plane is designed to be unstable in order to manoeuvre and turn speedily in air, and the pilot is necessary 
//to maintain constant stability throughout. Artificial stability thus refer to the constant need to maintain order and stability 
//on an otherwise chaotic and unstable situation. But Yeo was also using the concept to explain how, quoting the Chinese revolutionary 
//Sun Yat-Sen, the Chinese civilisation was a “tray of loose sand,” fiercely loyal to the family but often lacking in public spirit. 
//Chinese dynasties have survived by constantly applying artificial stability on its people. This was not in any case a dismissal 
//of the Chinese, as Yeo quickly explain that the instability inherent in the Chinese was also what made the people creative, dynamic, and 
//thus inclined towards revolutions when necessary.

//The minister ended his speech on Chinese statecraft by reminding his audience that the Golden Jubilee of the New Asia College coincides 
//also with the 50th anniversary of the Chinese revolution, when China was proclaimed to be the People’s Republic of China by Mao Zedong. 
//“The Chinese revolution which overthrew imperial rule is still ongoing.” He was of course completing the ceaseless energy and dynamism 
//of the Chinese; but the minister could just as well have been talking about Singapore’s statecraft. The constant geo-engineering of 
//Singapore’s land has led to a sense in which the island-nation is in a permanent territorial revolution. After all, this permanent revolution 
//is made possible by what is essentially a product of the Earth’s dynamic processes: sand. Sand can be made simply by when rocks crumble over time 
//due to weathering, or when molten rocks spewing from a volcanic eruption cools and shatters in the air. In other words, we might think then of 
//Singapore’s land reclamation as “artificial stability,” turning what is naturally a product of the Earth’s dynamic instability (sand) into 
//stabilized, controllable spaces (land). 

//If the Asian Financial Crisis was a period marked by questions of financial regulations alongside Singapore’s massive importing of sand, 
//it must also be remembered by a particular Singaporean export: Singapore’s concept of artificial stability — an understanding that the 
//world is inherently unstable, but the instability of any crisis is also a dynamism that brings out opportunities, wonderful, profitable 
//opportunities to assert some artificial stability.       

