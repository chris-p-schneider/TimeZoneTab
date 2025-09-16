import { css } from './digital-clock.css.js';

export const html = `
    <style>${css}</style>
    <span id="city"></span>
    <time>
        <pre id="hours">00</pre>
        <pre id="minutes">00</pre>
        <pre id="seconds">00</pre>
    </time>
    <span id="date"></span>
`;