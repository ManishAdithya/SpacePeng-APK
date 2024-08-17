/*Attempt1
Java.perform(function(){

    var lives = Java.use('de.fgerbig.spacepeng.components.Player');
    lives.DEFAULT_LIVES.value = 999;
    send('Player lives increase to ' + lives.DEFAULT_LIVES.value);
});*/



Java.perform(function(){

    //java.choose(className, {callbacks})
    Java.choose('de.fgerbig.spacepeng.components.Player',{

        onMatch: function(instance){
            send("Player instance found"+ instance);
            send("PLayer life is now "+ instance.lives.value);
            instance.lives.value = 999;
        },
        onComplete: function(){
            send("Memory Scanning complete");

        }
    })
})