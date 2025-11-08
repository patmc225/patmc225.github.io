// Tab Switching
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

function switchTab(tabName) {
    // Remove active class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Find and activate the correct tab button
    const targetButton = document.querySelector(`.tab-button[data-tab="${tabName}"]`);
    if (targetButton) {
        targetButton.classList.add('active');
    }
    
    // Show corresponding tab content
    const targetContent = document.getElementById(`${tabName}-tab`);
    if (targetContent) {
        targetContent.classList.add('active');
    }
    
    // Scroll to top of tabs
    document.querySelector('.tabs-container').scrollIntoView({ behavior: 'smooth' });
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const tabName = button.getAttribute('data-tab');
        switchTab(tabName);
    });
});

// Tab Navigation Buttons (at bottom of tabs)
const tabNavButtons = document.querySelectorAll('.tab-nav-btn');
tabNavButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-target');
        switchTab(targetTab);
    });
});

// Article Preview Toggle
const articlePreviewToggle = document.getElementById('articlePreviewToggle');
const previewToggleBtn = document.getElementById('previewToggleBtn');
const articlesGrid = document.getElementById('articlesGrid');

if (articlePreviewToggle && previewToggleBtn && articlesGrid) {
    articlePreviewToggle.addEventListener('click', () => {
        const isHidden = articlesGrid.style.display === 'none';
        
        if (isHidden) {
            articlesGrid.style.display = 'grid';
            previewToggleBtn.textContent = '−';
        } else {
            articlesGrid.style.display = 'none';
            previewToggleBtn.textContent = '+';
        }
    });
}
