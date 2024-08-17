// setPlayerUncollidable
Java.perform(function() {

    // Scanning for the DirectorSystem instances 
    Java.choose('de.fgerbig.spacepeng.systems.DirectorSystem', {
        
        // If an instance has been found
        onMatch: function(instance) {

            send("Found instance = "  + instance);

            // Calling setPlayerUncollidable --> will make the player invincible 
            instance.setPlayerUncollidable();

        },
        // Finished scanning the memory for DirectorSystem instances
        onComplete: function() {

            send("Done scanning memory regarding to DirectorSystem instance");
        }

    })

})
