document.addEventListener('DOMContentLoaded', () => {
    const clueForm = document.getElementById('clueForm');
    const clueInput = document.getElementById('clueInput');
    const clueList = document.getElementById('clueList');
    const checkMurdererButton = document.getElementById('checkMurderer');
    const result = document.getElementById('result');
    
    let clues = [];

    clueForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const clue = clueInput.value.trim();
        if (clue) {
            clues.push(clue);
            updateClueList();
            clueInput.value = '';
        }
    });

    checkMurdererButton.addEventListener('click', () => {
        const murderer = determineMurderer(clues);
        result.textContent = `The murderer is: ${murderer}`;
    });

    function updateClueList() {
        clueList.innerHTML = '';
        clues.forEach(clue => {
            const li = document.createElement('li');
            li.textContent = clue;
            clueList.appendChild(li);
        });
    }

    function determineMurderer(clues) {
        // Simple logic for demonstration; replace with actual game logic
        if (clues.includes('knife') && clues.includes('blood')) {
            return 'Dr. Black';
        } else if (clues.includes('gun')) {
            return 'Mrs. White';
        } else {
            return 'Unknown';
        }
    }
});
