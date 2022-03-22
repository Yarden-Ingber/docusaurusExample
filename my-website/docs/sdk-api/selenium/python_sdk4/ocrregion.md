# OCRRegion class
An object of this type is used to define where OCR text extraction should be done.
This feature is experimental. Please note that the functionality and/or API may change.

You can extract text from an application window using OCR by passing one or more [OCRRegion](#) objects to the method [Eyes.extract\_text](./eyes#extracttext-method). Each such object defines a region in the application window. In addition, use the [hint](./ocrregion#hint-method) method to specify literal text or a regular expression-like pattern that should match the text found. The pattern passed as a hint helps overcome ambiguities that arise when using OCR. It can be used, for example, to disinguish between the digit 0 (zero) and the letter O.

For more information see [Eyes OCR support](https://applitools.com/docs/features/ocr.html) . 
 ### Import statement 
``` 
from applitools.selenium import OCRRegion
 
 ``` 

 #### Example 
Python

    element = driver.find_element_by_id("btn_click_txt")
    texts_found = eyes.extract_text(
        OCRRegion(element),
        OCRRegion(Region(5, 8, 76, 30)),
        OCRRegion("#btn_click_txt").hint("click me"),
        OCRRegion("h2"),
        OCRRegion("#allpage")
    )
    for i, text in enumerate(texts_found):
        print("{}) found '{}'".format(i, text))