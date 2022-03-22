# OCRRegion class
An object of this type is used to define where OCR text extraction should be done.
This feature is experimental. Please note that the functionality and/or API may change.

You can extract text from an application window using OCR by passing one or more [OCRRegion](#) objects to the method [Eyes.extractText](./eyes#extracttext-method). Each such object defines a region in the application window. In addition, use the [hint](./ocrregion#hint-method) method to specify literal text or a regular expression-like pattern that should match the text found. The pattern passed as a hint helps overcome ambiguities that arise when using OCR. It can be used, for example, to disinguish between the digit 0 (zero) and the letter O.

For more information see [Eyes OCR support](https://applitools.com/docs/features/ocr.html) .
        
 ####  Example 
Example not yet available.