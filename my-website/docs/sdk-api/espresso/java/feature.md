# Feature enum
Enable optional Eyes features by passing values defined by this Enum to [Configuration.setFeatures](./configuration#setfeatures-method). 
###### - PIXEL_COPY_SCREENSHOT 
 Enable this feature if you want the SDK to use the Android's PixelCopy method to capture screenshots. Using PixelCopy to capture screenshots can help solve rendering issues such as missing shadow layers. PixelCopy is available from Android API version 26. Example use is:

Java

    /* test suite setup */  
        suiteConfig = new Configuration() 
            .setFeatures(Feature.PIXEL_COPY_SCREENSHOT)
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig); 
     /* test suite setup */  
        suiteConfig = new Configuration() 
            .setFeatures(Feature.PIXEL_COPY_SCREENSHOT)
    /* ... other configurations */  ; 
        /*
         * Assign the configuration to all newly created Eyes instances
         */
        eyes = new Eyes(runner);
        eyes.setConfiguration(suiteConfig); 
