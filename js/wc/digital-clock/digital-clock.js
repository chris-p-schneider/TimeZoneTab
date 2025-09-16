import { html } from './digital-clock.html.js';

export default class DigitalClock extends HTMLElement {
    constructor() {
        super();
        const sr = this.attachShadow({mode: 'open'});
        sr.innerHTML = html;
        this.#tick = this.#_tick.bind(this);
    }

    // Date
    #initialDate = new Date();
    #timeZone = 'UTC';

    // Elements
    #city;
    #hours;
    #minutes;
    #seconds;
    #date;

    // Bound Methods
    #tick;

    static get observedAttributes() {
        return ['city', 'show-seconds', 'show-date', 'timezone'];
    }

    attributeChangedCallback(attr, oldValue, newValue) {
        if (attr === 'city' && newValue) {
            this.#setCity(newValue);
        }
        else if (attr === 'timezone') {
            this.#timeZone = newValue ? newValue : 'UTC';
        }
    }

    connectedCallback() {
        this.#initElements();
        this.#setCity(this.getAttribute('city'));
        this.#setDate();
        setInterval(this.#tick, 100);
    }

    disconnectedCallback() {
        clearInterval(this.#tick);
    }

    #initElements() {
        const sr = this.shadowRoot;
        this.#city    = sr.querySelector('#city');
        this.#hours   = sr.querySelector('#hours');
        this.#minutes = sr.querySelector('#minutes');
        this.#seconds = sr.querySelector('#seconds');
        this.#date    = sr.querySelector('#date');
    }

    #setCity(city) {
        if (this.#city) {
            this.#city.textContent = city;
        }
    }

    #setTime() {
        const dtf = new Intl.DateTimeFormat('en-US', {
            timeZone: this.#timeZone,
            hour: '2-digit',
            hour12: false,
            minute: '2-digit',
            second: '2-digit',
        }).formatToParts(new Date());

        this.#hours.textContent   = dtf[0].value;
        this.#minutes.textContent = dtf[2].value;
        this.#seconds.textContent = dtf[4].value;
    }

    #setDate() {
        this.#date.textContent = new Intl.DateTimeFormat('en-US', {
            timeZone: this.#timeZone,
            dateStyle: 'full',
        }).format(new Date());
    }

    #_tick() {
        this.#setTime();
    }
}