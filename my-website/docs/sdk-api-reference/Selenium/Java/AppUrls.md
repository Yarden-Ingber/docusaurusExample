# AppUrls

An object of this class is contained in the [StepInfo](./StepInfo) object, which is in itself an object in the [TestResults](./TestResults) object returned by the [close](./Eyes#close) method. The properties in this class are used to retrieve a URI that can be used in a browser to open the Test Manager on a page that displays information about a particular step.

## getStep
The value returned by this method is a URI that when opened in a browser will display the Test Manager Test result page scrolled to the thumbnail for this step.

#### Syntax

```java
String value = appurls.getStep();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getStepEditor
The value returned by this method is a URI, that when opened in a browser will display the Test Manager Step Editor page loaded with the results of this step.

#### Syntax

```java
String value = appurls.getStepEditor();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`