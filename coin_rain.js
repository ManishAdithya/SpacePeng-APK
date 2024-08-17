// dispenseRandomCoin
function spawncoin() {
    Java.perform(function() {

        // Searching the app memory for CoinSpawningSystem instance
        Java.choose('de.fgerbig.spacepeng.systems.CoinSpawningSystem', {
            // Found an instance
            onMatch: function(instance) {

                send("Creating a new coin!");
                
                // Calling the instance method "dispenseRandomCoin()"
                for(var i = 0; i < 100; i++) {
                    instance.dispenseRandomCoin();
                }
            },
            // Done Scanning
            onComplete: function() {
                send("Finished scanning");
            }

        })

    })
}