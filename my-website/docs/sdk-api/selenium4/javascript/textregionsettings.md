# OCRSettings class
An object of this type is used to pass options to [Eyes.extractTextRegions](./eyes#extracttextregions-method).
This feature is experimental. Please note that the functionality and/or API may change.

Typically you call the class constructor, and then call the methods of this class chained in a Fluent API style to set the required options.

For more information see [Eyes OCR support](https://applitools.com/docs/features/ocr.html) .
        
 ####  Example 
JavaScript

    let patternList = ['.+','Click','\\S+: \\d+','\\S+: .+'];
    const resultRegions = await eyes.extractTextRegions({
      patterns: patternList,
      ignoreCase: true,
    })
    for (let region in resultRegions) {
      let infoList = resultRegions[region];
      console.log(`for pattern '${region}' found:`);
      for (info of infoList) {
          console.log(`x: ${info.x}, y: ${info.y}, width: ${info.width}, height: ${info.height}, text: '${info.text}'`);
      }