---
title: Sequence Name
---

# setSequenceName(sequenceName)

Use this method to set the batch sequence name for a batch.

A batch sequence name can be associated with one or more batches. You can then view status and statistical information regarding the batches associated with the sequence name. If the sequence name is not provided explicitly, then the value of the environment variable `APPLITOOLS_BATCH_SEQUENCE` is used, if it is defined. Otherwise, the sequence name is undefined and Insight statistics are not available. For more details see [Insights batch statistics](https://applitools.com/docs/topics/test-manager/pages/page-insights/tm-page-insights-batches.html).

## Syntax

```java
//typical code sequence using setSequenceName
Batchinfo batchInfo = new BatchInfo('my batch name');
String sequenceName = 'My sequence name';
batchInfo.setSequenceName(sequenceName);
eyes.setBatch(batchInfo);
```

## Parameters
sequenceName<br />
Type: `String`<br />
The name to be assigned to the batch sequence

## Return value
Type: void

## Remarks
If you do not set this attribute and the environment variable `APPLITOOLS_BATCH_SEQUENCE` is defined, then the value of the environment variable will be used as the sequence name. If the environment variable is not defined, then the batch will not be associated with any sequence name.