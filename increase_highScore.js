//Method-1
/*Java.perform(function(){
    Java.choose('de.fgerbig.spacepeng.services.Profile', {

        onMatch: function(profile){
            profile.setHighScore(9999);
        },
        onComplete: function(){
            send("Memory scan Complete")
        }
    })
})
*/

Java.perform(function(){

    var profile = Java.use('de.fgerbig.spacepeng.services.Profile');
    profile.setNewHighScore.implementation = function(param_1){
        this.setNewHighScore(9999);
        return true;
    }
})