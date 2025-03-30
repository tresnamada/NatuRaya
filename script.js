document.addEventListener('DOMContentLoaded', function() {
    const text = "Hai, Sahabat AlamSatwa! Aku NatuBot, asisten AI di NatuRaya. Aku punya misi penting: menjaga lingkungan dan menciptakan masa depan yang hijau Tapi aku tidak bisa melakukannya sendirian... Aku butuh bantuanmu! 💚";
    const element = document.getElementById('typing-text');
    let i = 0;
    
    // Add typing class initially
    element.classList.add('typing-text');
    
    function typeWriter() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typeWriter, 50); // Adjust typing speed here
        } else {
            // Remove cursor animation after typing completes
            element.classList.remove('typing-text');
        }
    }
    
    // Start typing after a short delay
    setTimeout(typeWriter, 1000);
    
    // Optional: Reset and retype every 10 seconds
    setInterval(() => {
        i = 0;
        element.innerHTML = '';
        element.classList.add('typing-text');
        typeWriter();
    }, 15000);
});

            // Animasi pertumbuhan pohon berdasarkan progress
            document.addEventListener('DOMContentLoaded', function() {
                const tree = document.getElementById('virtual-tree');
                const progress = 0.3; // Ganti dengan progress aktual user
                
                // Scale tree based on progress (0.3 is 30% progress)
                tree.style.transform = `scale(${1 + progress * 0.5})`;
                
                // Change tree image based on progress level
                if (progress > 0.7) {
                    tree.src = "https://cdn-icons-png.flaticon.com/512/3079/3079165.png"; // Big tree
                } else if (progress > 0.4) {
                    tree.src = "https://cdn-icons-png.flaticon.com/512/3079/3079160.png"; // Medium tree
                }
                
                // Update progress circle
                document.documentElement.style.setProperty('--progress', progress);
            });


            document.getElementById('try-natubot').addEventListener('click', function() {
                const botMessage = document.getElementById('bot-message');
                
                // Animate the button
                this.classList.add('animate__animated', 'animate__pulse');
                
                // Change the bot message
                setTimeout(() => {
                    botMessage.innerHTML = `
                        <div class="flex items-start">
                            <div class="flex-shrink-0 bg-green-100 p-2 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div class="ml-3">
                                <p class="font-medium text-gray-800">Great choice! 🎉</p>
                                <p class="text-gray-600 mt-1">Let's find the perfect way for you to contribute. What causes are you passionate about?</p>
                                <div class="mt-3 flex flex-wrap gap-2">
                                    <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Environment</span>
                                    <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Education</span>
                                    <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Health</span>
                                    <span class="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">Animals</span>
                                </div>
                            </div>
                        </div>
                    `;
                    botMessage.classList.add('animate__fadeIn');
                    
                    // Here you would typically open your chatbox interface
                    alert("NatuBot chat interface will open here! (This will be implemented with your actual chatbox)");
                }, 500);
                
                // Remove animation after it completes
                setTimeout(() => {
                    this.classList.remove('animate__animated', 'animate__pulse');
                }, 1000);
            });

            document.addEventListener('DOMContentLoaded', function() {
                // Get all tab buttons and content sections
                const tabButtons = document.querySelectorAll('.community-tabs button');
                const tabContents = document.querySelectorAll('.tab-content');
                
                // Initialize - show first tab content, hide others
                if(tabContents.length > 0) {
                    tabContents.forEach((content, index) => {
                        if(index === 0) {
                            content.classList.remove('hidden');
                        } else {
                            content.classList.add('hidden');
                        }
                    });
                }
                
                // Add click event to each tab button
                tabButtons.forEach((button, index) => {
                    button.addEventListener('click', () => {
                        // Remove active class from all buttons
                        tabButtons.forEach(btn => {
                            btn.classList.remove('text-green-600', 'border-b-2', 'border-green-500');
                            btn.classList.add('text-gray-500');
                        });
                        
                        // Add active class to clicked button
                        button.classList.remove('text-gray-500');
                        button.classList.add('text-green-600', 'border-b-2', 'border-green-500');
                        
                        // Hide all tab contents
                        tabContents.forEach(content => {
                            content.classList.add('hidden');
                            content.classList.remove('animate-fadeIn');
                        });
                        
                        // Show selected tab content with animation
                        if(tabContents[index]) {
                            tabContents[index].classList.remove('hidden');
                            setTimeout(() => {
                                tabContents[index].classList.add('animate-fadeIn');
                            }, 10);
                        }
                    });
                });
                
                // Event Registration Animation
                const registerButtons = document.querySelectorAll('.event-register-btn');
                registerButtons.forEach(button => {
                    button.addEventListener('click', function(e) {
                        e.preventDefault();
                        
                        // Visual feedback
                        const originalText = this.innerHTML;
                        this.innerHTML = '<i class="fas fa-check"></i> Terdaftar';
                        this.classList.remove('bg-green-500', 'bg-blue-500', 'bg-yellow-500');
                        this.classList.add('bg-gray-500');
                        
                        // Disable button
                        this.disabled = true;
                        
                        // Show notification
                        showNotification('Berhasil mendaftar untuk event!');
                    });
                });
                
                // View All Events button animation
                const viewAllButton = document.querySelector('.view-all-btn');
                if(viewAllButton) {
                    viewAllButton.addEventListener('mouseenter', function() {
                        this.querySelector('i').classList.add('animate-bounce');
                    });
                    
                    viewAllButton.addEventListener('mouseleave', function() {
                        this.querySelector('i').classList.remove('animate-bounce');
                    });
                }
                
                // Community Feature Cards hover effect
                const featureCards = document.querySelectorAll('.community-feature');
                featureCards.forEach(card => {
                    card.addEventListener('mouseenter', function() {
                        this.querySelector('.feature-icon').classList.add('animate-pulse');
                    });
                    
                    card.addEventListener('mouseleave', function() {
                        this.querySelector('.feature-icon').classList.remove('animate-pulse');
                    });
                });
            });
            
            // Notification function
            function showNotification(message) {
                // Create notification element
                const notification = document.createElement('div');
                notification.className = 'fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 transform translate-y-20 opacity-0 transition-all duration-500';
                notification.innerHTML = `
                    <div class="flex items-center gap-2">
                        <i class="fas fa-check-circle"></i>
                        <p>${message}</p>
                    </div>
                `;
                
                // Add to DOM
                document.body.appendChild(notification);
                
                // Animate in
                setTimeout(() => {
                    notification.classList.remove('translate-y-20', 'opacity-0');
                }, 10);
                
                // Remove after delay
                setTimeout(() => {
                    notification.classList.add('translate-y-20', 'opacity-0');
                    setTimeout(() => {
                        document.body.removeChild(notification);
                    }, 500);
                }, 3000);
            }

            document.addEventListener('DOMContentLoaded', function() {
                // Project cards hover effect
                const projectCards = document.querySelectorAll('.project-card');
                if (projectCards) {
                    projectCards.forEach(card => {
                        card.addEventListener('mouseenter', function() {
                            this.querySelector('img').classList.add('scale-110', 'transition-all', 'duration-700');
                        });
                        
                        card.addEventListener('mouseleave', function() {
                            this.querySelector('img').classList.remove('scale-110');
                        });
                    });
                }
                
                // Featured project animation
                const featuredProject = document.getElementById('featured-project');
                if (featuredProject) {
                    // Add subtle animation
                    setInterval(() => {
                        featuredProject.classList.add('shadow-2xl', 'shadow-yellow-100');
                        setTimeout(() => {
                            featuredProject.classList.remove('shadow-2xl', 'shadow-yellow-100');
                        }, 1000);
                    }, 5000);
                }
                
                // Support project buttons
                const supportButtons = document.querySelectorAll('.project-card button');
                if (supportButtons) {
                    supportButtons.forEach(button => {
                        button.addEventListener('click', function(e) {
                            e.preventDefault();
                            
                            // Get project name
                            const projectName = this.closest('.project-card').querySelector('h3').textContent;
                            
                            // Show donation modal (you would implement this)
                            alert(`Terima kasih telah mendukung proyek: ${projectName}. Halaman donasi akan segera dibuka.`);
                        });
                    });
                }
            });