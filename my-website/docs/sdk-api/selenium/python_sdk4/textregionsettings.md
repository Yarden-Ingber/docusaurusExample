# TextRegionSettings class
An object of this type is used to pass options to [Eyes.extract\_text\_regions](./eyes#extracttextregions-method).
This feature is experimental. Please note that the functionality and/or API may change.

Typically you call the class constructor, and then call the methods of this class chained in a Fluent API style to set the required options.

For more information see [Eyes OCR support](https://applitools.com/docs/features/ocr.html) . 
 ### Import statement 
``` 
from applitools.selenium import TextRegionSettings
 
 ``` 

 #### Example 
Python

    driver.get("https://applitools.com/docs/apps/ocr/ocr_search1.html")
    result_regions = eyes.extract_text_regions(
        TextRegionSettings(
            ".+", "Click", "\\S+: \\d+", "\\S+: .+"
        ).ignore_case(True)
    )
    for entry, regions in result_regions.items():
        print("for pattern '{}' found:".format(entry))
        for reg in regions:
            print(
                "x: {}, y: {}, width: {}, height: {}, text: '{}'".format(
                    reg.x, reg.y, reg.width, reg.height, reg.text
                )
            )