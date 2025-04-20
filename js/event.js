   // Initialize AOS
   AOS.init({
    duration: 800,
    once: true
});

// Initialize Fancybox
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});

// Modal functions
function openModal(eventId) {
    document.getElementById('eventId').value = eventId;
    document.getElementById('registrationModal').classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    
    // Set modal title based on event
    let title = '';
    if (eventId === 'event1') title = 'Pendaftaran Bersih Pantai Serentak';
    else if (eventId === 'event2') title = 'Pendaftaran Workshop Daur Ulang';
    else if (eventId === 'event3') title = 'Pendaftaran Penanaman 1000 Pohon';
    
    document.getElementById('modalTitle').textContent = title;
}

function closeModal() {
    document.getElementById('registrationModal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

function closeSuccessModal() {
    document.getElementById('successModal').classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
}

// Form submission
document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    // For demo, we'll just show the success modal
    closeModal();
    document.getElementById('successModal').classList.remove('hidden');
    document.getElementById('registrationForm').reset();
});

// Close modals when clicking outside
window.addEventListener('click', function(e) {
    if (e.target === document.getElementById('registrationModal')) {
        closeModal();
    }
    if (e.target === document.getElementById('successModal')) {
        closeSuccessModal();
    }
});