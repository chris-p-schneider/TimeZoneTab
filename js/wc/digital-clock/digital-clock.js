export default class DigitialClock extends HTMLElement {
    constructor() {
        super();
        this.#initialDate = new Date();
        const sr = this.attachShadow({mode: 'open'});
        sr.innerHTML = `
            <style>
                :host {
                    --base-unit: 2rem;
                    display: flex;
                    flex-flow: column nowrap;
                    width: fit-content;
                    margin: auto;
                    time {
                        display: flex;
                        flex-flow: row nowrap;
                        justify-content: center;
                        align-items: center;
                        font-family: 'Consolas', monospace;
                        font-size: calc(3 * var(--base-unit));
                        pre {
                            margin: 0;
                            display: inline-block;
                        }
                        #minutes::before, #seconds::before {
                            display: inline-block;
                            content: ":";
                        }
                        #seconds { display: none; }
                    }
                    #date {
                        display: none;
                        text-align: center;
                        font-size: calc(1 * var(--base-unit));
                        margin: calc(0.334 * var(--base-unit)) 0;
                    }
                }
                :host([show-seconds]) {
                    #seconds { display: inline-block; }
                }
                :host([show-date]) {
                    #date { display: block; }
                }
            </style>
            <time>
                <pre id="hours">00</pre>
                <pre id="minutes">00</pre>
                <pre id="seconds">00</pre>
            </time>
            <span id="date"></span>
        `;
        this.#tick = this.#_tick.bind(this);
    }

    // Date
    #initialDate;

    // Elements
    #hours;
    #minutes;
    #seconds;
    #date;

    // Bound Methods
    #tick;

    static get observedAttributes() {
        return ['show-seconds', 'show-date'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        // ...
    }

    connectedCallback() {
        this.#initElements();
        this.#setDate();
        setInterval(this.#tick, 100);
    }

    disconnectedCallback() {
        clearInterval(this.#tick);
    }

    #initElements() {
        const sr = this.shadowRoot;
        this.#hours = sr.querySelector('#hours');
        this.#minutes = sr.querySelector('#minutes');
        this.#seconds = sr.querySelector('#seconds');
        this.#date = sr.querySelector('#date');
    }

    #setTime() {
        const d = new Date();
        this.#hours.textContent = d.getHours();
        this.#minutes.textContent = d.getMinutes();
        this.#seconds.textContent = String(d.getSeconds()).padStart(2, '0');
    }

    #setDate() {
        this.#date.textContent = new Intl.DateTimeFormat('en-US', {
            timeZone: 'America/New_York',
            dateStyle: 'full',
        }).format(new Date());
    }

    #_tick() {
        this.#setTime();
    }
}