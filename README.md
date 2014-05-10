# jquery.headliner.js

## What it does
Scales text to fit it's parent elements width.

WARNING: Not for use on blocks of text (e.g. paragraphs) or text that wraps

## Usage

``` html
<script src='jquery.js'></script>
<script src='jquery.headliner.js'></script>
```

Call plugin
``` javascript
$("#element").headliner([options]);
```


## Options

``` javascript
{
  max_font_size: Number.POSITIVE_INFINITY,    // set's max font size
  animate: false                              // animates resizing of font
};
```

CAVEAT: Results can be a little flakey if custom fonts are used.
