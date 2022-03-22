# MatchLevel enum
Values that define different types of Image matching. These are used in various commands that set the match level. See [How to use Eyes match levels](https://applitools.com/docs/common/cmn-eyes-match-levels.html) for details. 
###### - None 
 With this level Eyes won't do any matching at all, whatever the content is, will be considered to be matched. 
 ###### - Layout 
 This level is useful for validating that the page layout is consistent. With this level Eyes identifies the various page elements in the checkpoint image, and the baseline image- text, images, buttons, columns and so on. It then validates that the relative positions of these elements are consistent. It can detect elements that have moved as well as elements that have disappeared. With this match level, the Eyes matching engine ignores differences in the actual content text and graphics, color and other style changes. This match level is most effective when used to validate pages with dynamic content, language localization, responsive design, and _cross-environment testing_ which means using a single baseline for a variety of execution environment - multiple operating systems, browsers, devices and viewport form factors and orientation. 
 ###### - Content 
 This match level is similar to the strict match level but ignores differences in color. It is effective when your content is static, but the color can vary. 
 ###### - Strict 
 This is the recommended level when you want to validate the precise content of the page. With this level, Eyes detects changes in text, font, color, graphics, and position of elements. It aims to detect differences that are visible to the human eye while ignoring differences in pixel values that are platform dependent due to the rendering software and hardware. Strict match level is most effective when used for regression tests on a particular browser/OS with static content. 
 ###### - Exact 
 This match level is not recommended for ordinary validation purposes. With this match level, Eyes does a pixel to pixel comparison of the two images. This means that it is sensitive to differences that are not visible to the human eye, for example, because of rendering anomalies. 
 