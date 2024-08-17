// Rapid fire mode
Java.perform(function() {

    // Getting the PlayerInputSystem class reference
    Java.choose('de.fgerbig.spacepeng.systems.PlayerInputSystem', {
        
        // Getting the instance if found
        onMatch: function(instance) {

            send("PlayerInputSystem instance has been found" + instance);

            // Permanently overwriting the timeToShoot instance field with 0.
            // Note: While loops blocks the rest of our frida script.
            while (true) {
                instance.timeToShoot.value = 0;
            }
        }
    });
})
