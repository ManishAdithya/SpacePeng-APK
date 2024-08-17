// Making the player invisible
Java.perform(function() {

    // Searching the app memory for Director System instances
    Java.choose('de.fgerbig.spacepeng.systems.DirectorSystem', {
        // If an instance has been found
        onMatch: function(instance) {
            send("Making the player now invisible");
            // Calling the setPlayerInvisible method ( makes player invisible )
            instance.setPlayerInvisible();

        },
        onComplete: function() {
            // We are done scanning the app memory
            send("Done scanning the memory for DirectorSystem instances");
        }

    })
}); 