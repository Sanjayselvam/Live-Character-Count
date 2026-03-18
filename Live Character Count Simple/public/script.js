document.addEventListener('DOMContentLoaded', () => {
    const textarea = document.getElementById('text-input');
    const charCount = document.getElementById('char-count');
    const saveBtn = document.getElementById('save-btn');

    textarea.addEventListener('input',() => {
        charCount.textContent = `Characters: ${textarea.value.length}`;
    });

    saveBtn.addEventListener('click', async () => {
        await fetch('/submit', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({text: textarea.value})
        });
        alert('Text saved!')
    });

    async function loadLastText() {
        const res = await fetch('/last');
        const data = await res.json();
        textarea.value = data.text || '';
        charCount.textContent = `Characters: ${textarea.value.length}`;
    
    }

    loadLastText();
});


