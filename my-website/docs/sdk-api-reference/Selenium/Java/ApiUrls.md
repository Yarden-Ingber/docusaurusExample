# ApiUrls
An object of this class is contained in the [StepInfo](./StepInfo) object, which is in itself an object in the [TestResults](./TestResults) object returned by the [Eyes.closeAsync](./Eyes#closeasync) or Eyes.close method.The methods in this class are used to retrieve a URI that can be used with the REST API to obtain information about a particular step.

## getBaselineImage
The value returned by this method is a URI that can be used with the REST API to obtain the baseline image of this step.

#### Syntax

```java
String value = apiurls.getBaselineImage();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getCheckpointImage
The value returned by this method is a URI that can be used with the REST API to obtain the checkpoint image of this step.

#### Syntax

```java
String value = apiurls.getCheckpointImage();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getCheckpointImageThumbnail
The value returned by this method is a URI that can be used with the REST API to obtain the checkpoint thumbnail image of this step.

#### Syntax

```java
String value = apiurls.getCheckpointImageThumbnail();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`

## getDiffImage
The value returned by this method is a URI that can be used with the REST API to obtain the checkpoint image of this step, overlayed with pink areas where there are differences.

#### Syntax

```java
String value = apiurls.getDiffImage();
```

#### Parameters
This method does not take any parameters.

#### Return value
Type: `String`