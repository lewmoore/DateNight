function GetValue()
{
    var myarray= new Array("Sexy Fish","Crazy Bear","Shard");
    var random = myarray[Math.floor(Math.random() * myarray.length)];
    //alert(random);
    document.getElementById("message").innerHTML=random;
}

module.exports = GetValue()
