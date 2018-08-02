function GetValue()
{
    var myarray= new Array("Sexy Fish","Crazy Bear","Shard", "Duck & Waffle", "Sushi Samba", "Beni Hana",
  "MASH", "Hackasan", "Nobu", "London Shell Co", "Gods Own Junkyard", "Mr Foggs", "STK", "Aviary", "Radio Rooftop", "Flight Club",
  "Tonight Josephine", "Clos Maggiore", "Bob Bob Ricard", "Shaka Zulu", "Mestizo", "Mayfield Lavendar Farm", "Bike Ride", "New Forest",
  "London Zoo", "Bath", "Cambridge", "5k/10k Race", "Tough Mudder", "Battersea Park", "Ballie Ballerson", "Lake District", "Boxing Match",
  "The Great Masked Ball", "The Globe", "The Ballet", "Orchestra", "Comedy Club", "Glengarry Glenross", "BBC Proms", "Fleetwood Mack", "Beautiful South");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    document.getElementById("message").innerHTML=random;
}
