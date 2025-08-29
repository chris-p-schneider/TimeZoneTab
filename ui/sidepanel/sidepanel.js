console.log('ExtensionTemplate: sidepanel');

function formDataToObject(form, fd) {
    const obj = {};
    for (const [key, value] of fd) {
        obj[key] = value;
    }
    return {
        form: form.id,
        data: obj,
    };
}

addEventListener('load', () => {
    const form = document.querySelector('#sidepanel-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const fd = new FormData(e.target);
        alert('submitted');
        console.log(JSON.stringify(
            formDataToObject(e.target, fd), null, 2
        ));
    });
});