export const css = `
    :host {
        --base-unit: 2rem;
        --font-color: inherit;

        display: flex;
        flex-flow: column nowrap;
        width: fit-content;
        color: var(--font-color);

        time {
            display: flex;
            flex-flow: row nowrap;
            justify-content: center;
            align-items: center;
            font-family: 'Consolas', monospace;
            font-size: calc(5 * var(--base-unit));

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

        #city, #date {
            display: none;
            text-align: center;
            margin: calc(0.25 * var(--base-unit)) 0;
        }

        #city {
            font-size: calc(1.667 * var(--base-unit));
        }

        #date {
            font-size: calc(1 * var(--base-unit));
        }
    }

    :host([city]:not(:empty)) {
        #city { display: block; }
    }

    :host([show-seconds]) {
        #seconds { display: inline-block; }
        time {
            font-size: calc(3 * var(--base-unit));
        }
    }

    :host([show-date]) {
        #date { display: block; }
    }
`;