# TextRegionSettings class
An object of this type is used to pass options to [Eyes.extractTextRegions](./eyes#extracttextregions-method).
This feature is experimental. Please note that the functionality and/or API may change.

Typically you call the class constructor, and then call the methods of this class chained in a Fluent API style to set the required options.

For more information see [Eyes OCR support](https://applitools.com/docs/features/ocr.html) . 
 ### Import statement 
``` 
import com.applitools.eyes.locators.TextRegionSettings;
 
 ``` 

 #### Example 
Java

    String[] patternList = {};
    Map<String, List<TextRegion>> resultRegions = eyes.extractTextRegions(
            new TextRegionSettings(
                    ".+",
                    "Click",
                    "\\S+: \\d+",
                    "\\S+: .+").ignoreCase(true));
    for (Map.Entry<String, List<TextRegion>> entry : resultRegions.entrySet()) {
        System.out.printf("for pattern '%s' found:\n", entry.getKey());
        for (TextRegion info : entry.getValue()) {
            System.out.printf("x: %d, y: %d, width: %d, heigth: %d, text: '%s'\n",
                    info.getX(), info.getY(), info.getWidth(), info.getHeight(), info.getText());
        }