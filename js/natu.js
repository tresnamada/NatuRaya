
// Mascot interactions
function mascotWave() {
    const mascot = document.querySelector('.mascot');
    mascot.classList.add('animate__animated', 'animate__wobble');
    setTimeout(() => {
        mascot.classList.remove('animate__animated', 'animate__wobble');
    }, 1000);
    addBotMessage("Hai juga! Senang bertemu denganmu 😊");
}

function mascotDance() {
    const mascot = document.querySelector('.mascot');
    mascot.classList.add('animate__animated', 'animate__rubberBand');
    setTimeout(() => {
        mascot.classList.remove('animate__animated', 'animate__rubberBand');
    }, 1000);
    addBotMessage("Wuuush! Ini tarian kemenangan untuk bumi yang lebih bersih! 💃");
}

function mascotExplain() {
    const mascot = document.querySelector('.mascot');
    mascot.classList.add('animate__animated', 'animate__heartBeat');
    setTimeout(() => {
        mascot.classList.remove('animate__animated', 'animate__heartBeat');
    }, 1000);
    addBotMessage("Aku EcoBot, maskot kebersihan lingkungan. Aku di sini untuk menginspirasi dan membantu kamu menjaga bumi kita tetap bersih dan hijau! 🌱");
}

// Chatbot functions
function sendMessage() {
    const input = document.getElementById('user-input');
    const message = input.value.trim();
    
    if (message) {
        addUserMessage(message);
        input.value = '';
        
        // Show typing indicator
        const typingIndicator = document.createElement('div');
        typingIndicator.id = 'typing-indicator';
        typingIndicator.className = 'flex items-start mb-4';
        typingIndicator.innerHTML = `
            <div class="bg-blue-100 rounded-full p-2 mr-3">
                <i class='bx bx-bot text-blue-600 text-xl'></i>
            </div>
            <div class="bg-white p-3 rounded-lg shadow-sm max-w-[80%]">
                <p class="typing-indicator text-gray-500">EcoBot mengetik</p>
            </div>
        `;
        document.getElementById('chat-messages').appendChild(typingIndicator);
        
        // Scroll to bottom
        const container = document.querySelector('.chat-container');
        container.scrollTop = container.scrollHeight;
        
        // Simulate bot response after delay
        setTimeout(() => {
            document.getElementById('typing-indicator').remove();
            generateBotResponse(message);
        }, 1500);
    }
}

function sendQuickMessage(message) {
    document.getElementById('user-input').value = message;
    sendMessage();
}

function handleKeyPress(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
}

function addUserMessage(message) {
    const chatContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex items-start justify-end';
    messageDiv.innerHTML = `
        <div class="bg-blue-500 text-white p-3 rounded-lg shadow-sm max-w-[80%] message-entering">
            <p>${message}</p>
            <p class="text-xs text-blue-100 mt-1">Baru saja</p>
        </div>
        <div class="bg-blue-100 rounded-full p-2 ml-3">
            <i class='bx bx-user text-blue-600 text-xl'></i>
        </div>
    `;
    chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    const container = document.querySelector('.chat-container');
    container.scrollTop = container.scrollHeight;
}

function addBotMessage(message) {
    const chatContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'flex items-start';
    messageDiv.innerHTML = `
        <div class="bg-blue-100 rounded-full p-2 mr-3">
            <i class='bx bx-bot text-blue-600 text-xl'></i>
        </div>
        <div class="bg-white p-3 rounded-lg shadow-sm max-w-[80%] message-entering">
            <p class="text-gray-800">${message}</p>
            <p class="text-xs text-gray-500 mt-1">Baru saja</p>
        </div>
    `;
    chatContainer.appendChild(messageDiv);
    
    // Scroll to bottom
    const container = document.querySelector('.chat-container');
    container.scrollTop = container.scrollHeight;
}

function generateBotResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();
    let response = "";
    
    if (lowerMessage.includes('hallo') || lowerMessage.includes('hai') || lowerMessage.includes('hi')) {
        response = "Halo juga! Ada yang bisa saya bantu terkait event kebersihan? 😊";
    } 
    else if (lowerMessage.includes('event') || lowerMessage.includes('acara') || lowerMessage.includes('kegiatan')) {
        response = "Kami punya beberapa event seru:<br>1. Bersih Pantai Serentak (15 Juni)<br>2. Workshop Daur Ulang (22 Juni)<br>3. Penanaman 1000 Pohon (30 Juni)<br><br>Anda bisa lihat detailnya di halaman event kami.";
    }
    else if (lowerMessage.includes('daftar') || lowerMessage.includes('registrasi') || lowerMessage.includes('ikut')) {
        response = "Untuk mendaftar, Anda bisa:<br>1. Klik tombol 'Daftar Sekarang' pada event yang diminati<br>2. Isi formulir pendaftaran<br>3. Konfirmasi akan dikirim ke email Anda<br><br>Butuh bantuan lebih lanjut?";
    }
    else if (lowerMessage.includes('manfaat') || lowerMessage.includes('untung') || lowerMessage.includes('keuntungan')) {
        response = "Manfaat ikut event kebersihan:<br>• Berkontribusi untuk lingkungan<br>• Dapat relasi baru<br>• Pengalaman berharga<br>• Sertifikat partisipasi<br>• Hadiah untuk peserta teraktif!";
    }
    else if (lowerMessage.includes('syarat') || lowerMessage.includes('perlu') || lowerMessage.includes('butuh')) {
        response = "Syarat umum:<br>• Semangat menjaga kebersihan<br>• Usia minimal 12 tahun<br>• Membawa perlengkapan sendiri (sarung tangan, masker)<br>• Untuk event tertentu mungkin ada biaya pendaftaran";
    }
    else {
        response = "Maaf, saya tidak sepenuhnya memahami pertanyaan Anda. Saya bisa membantu dengan:<br>• Info event kebersihan<br>• Proses pendaftaran<br>• Pertanyaan umum tentang lingkungan<br><br>Coba tanyakan dengan format yang lebih sederhana ya!";
    }
    
    addBotMessage(response);
}
