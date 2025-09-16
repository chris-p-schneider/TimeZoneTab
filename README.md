# TimeZoneTab

Chrome extension that adds a custom new tab that displays digital clocks with different timezones. Forked from my [ExtensionTemplate](https://github.com/chris-p-schneider/ExtensionTemplate).

I used a really similar new tab extension from the Chrome web store but it wasn't very responsively designed and doesn't look good on my vertical monitor. So, here's my version. 

## <digital-clock> Web Component
The new tab clocks are implemented with a custom autonomous web component with the following attributes and CSS custom properties:

```html
<digital-clock show-date show-seconds
    city="City Display Text"
    timezone="continent/location"
    style="--base-unit: 1rem;
           --font-color: white;">
</digital-clock>
```

For more information on timezones, please see the [MDN Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#timezone).

Note that for the `--base-unit`, you can pass a `min()` function with a `vw` and `vh` parameter that work for landscape or portrait orientation, ie. `min(6vw, 6vh)` works great for my screen sizes.

----------

## Setup
1. In Chrome, open: `chrome://extensions`
2. Set Developer mode to `true`
3. Click "Load unpacked"
4. Select this folder

## Development
1. Pin the extension in Chrome
2. Click the icon to activate the extension
3. Click the refresh icon in `chrome://extensions` to reload changes.