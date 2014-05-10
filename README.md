# jquery.headliner.js

## What it does
Scales up text to fit it's parents elements width.

WARNING: Will not work on blocks of text (e.g. paragraphs)

## Usage

``` html
<script src='jquery.js'></script>
<script src='jquery.headliner.js'></script>
```

Call plugin
``` javascript
$("#element").headliner();
```


## Options

``` javascript
{
  max_font_size: Number.POSITIVE_INFINITY,    // set's max font size
  animate: false                              // animates resizing of font
};
```
