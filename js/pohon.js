
// Initialize AOS
        // Inisialisasi AOS
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: false
        });
$(document).ready(function() {
    // Simulating point adding functionality
    $('.add-points').click(function() {
        let points = parseInt($(this).data('points'));
        let currentPoints = parseInt($('#total-points').text());
        let maxPoints = parseInt($('#max-points').text());
        let newPoints = currentPoints + points;
        
        // Update points and animate
        $('#total-points').text(newPoints);
        $('#current-points').text(newPoints);
        
        // Calculate new progress
        let progress = (newPoints / maxPoints) * 100;
        if (progress > 100) progress = 100;
        
        // Update progress bar
        $('#progress-bar').css('width', progress + '%');
        
        // Show sparkle effect
        $('#tree-sparkle').css('opacity', '1');
        setTimeout(function() {
            $('#tree-sparkle').css('opacity', '0');
        }, 1500);
        
        // Show toast notification
        showToast('🎉', '+' + points + ' points earned!');
        
        // Fire confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        // Check for level up
        if (newPoints >= maxPoints) {
            levelUp();
        }
    });
    
    // Daily challenge completion
    $('#complete-challenge').click(function() {
        $(this).prop('disabled', true).text('Completed!');
        $(this).closest('.challenge-card').find('.bg-orange-400').css('width', '100%');
        $(this).closest('.challenge-card').find('.text-xs.text-orange-600 span').text('1/1');
        
        // Add points
        let currentPoints = parseInt($('#total-points').text());
        let newPoints = currentPoints + 25;
        $('#total-points').text(newPoints);
        $('#current-points').text(newPoints);
        
        // Show notification
        showToast('🎉', 'Daily challenge completed! +25 points');
        
        // Update progress bar
        updateProgress();
        
        // Fire confetti
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    });
    
    // Show toast notification function
    function showToast(emoji, message) {
        $('#toast-emoji').text(emoji);
        $('#toast-message').text(message);
        $('#toast-notification').addClass('show');
        
        setTimeout(function() {
            $('#toast-notification').removeClass('show');
        }, 3000);
    }
    
    // Level up function
    function levelUp() {
        let currentLevel = parseInt($('#current-level').text());
        let newLevel = currentLevel + 1;
        
        // Update level
        $('#current-level').text(newLevel);
        $('#ribbon-level').text(newLevel);
        
        // Reset progress bar
        $('#progress-bar').css('width', '0%');
        
        // Update max points (making it harder each level)
        let newMax = 200 + (newLevel * 50);
        $('#max-points').text(newMax);
        
        // Show notification
        showToast('🌟', 'Level Up! You reached level ' + newLevel);
        
        // Update tree image based on level
        if (newLevel >= 3) {
            $('#tree-image').attr('src', '../img/Puwohon[1].png');
        } else if (newLevel >= 2) {
            $('#tree-image').attr('src', '../img/Bibit[1].png');
        }
        
        // Big celebration
        confetti({
            particleCount: 200,
            spread: 180,
            origin: { y: 0.6 }
        });
        
        // Animate the tree
        $('#tree-image').addClass('pulse-animation');
        setTimeout(function() {
            $('#tree-image').removeClass('pulse-animation');
        }, 2000);
    }
    
    // Update progress function
    function updateProgress() {
        let currentPoints = parseInt($('#current-points').text());
        let maxPoints = parseInt($('#max-points').text());
        let progress = (currentPoints / maxPoints) * 100;
        if (progress > 100) progress = 100;
        $('#progress-bar').css('width', progress + '%');
    }
    
    // Create falling leaves animation
    function createLeaves() {
        const colors = ['#8fb860', '#5fa832', '#accf8e', '#3b721e'];
        const leafCount = 5;
        
        for (let i = 0; i < leafCount; i++) {
            setTimeout(() => {
                const leaf = document.createElement('div');
                leaf.className = 'leaf';
                
                // Randomize leaf properties
                const size = Math.random() * 15 + 10;
                const color = colors[Math.floor(Math.random() * colors.length)];
                const rotation = Math.random() * 360;
                const xPos = Math.random() * 100;
                
                leaf.style.width = `${size}px`;
                leaf.style.height = `${size}px`;
                leaf.style.backgroundColor = color;
                leaf.style.borderRadius = '40% 70% 40% 60%';
                leaf.style.left = `${xPos}%`;
                leaf.style.top = '-20px';
                leaf.style.transform = `rotate(${rotation}deg)`;
                
                document.querySelector('.tree-container').appendChild(leaf);
                
                // Animate the leaf falling
                gsap.to(leaf, {
                    y: 300,
                    x: 50 * (Math.random() - 0.5),
                    rotation: rotation + 360,
                    duration: 1 + Math.random() * 10,
                    ease: "power1.inOut",
                    onComplete: () => {
                        leaf.remove();
                    }
                });
            }, i * 700);
        }
    }
    
    // Countdown timer for daily challenge
    function updateTimer() {
        const now = new Date();
        const midnight = new Date();
        midnight.setHours(24, 0, 0, 0);
        
        let diff = midnight - now;
        const hours = Math.floor(diff / (1000 * 60 * 60));
        diff -= hours * (1000 * 60 * 60);
        const mins = Math.floor(diff / (1000 * 60));
        diff -= mins * (1000 * 60);
        const secs = Math.floor(diff / 1000);
        
        $('#challenge-timer').text(
            (hours < 10 ? '0' : '') + hours + ':' +
            (mins < 10 ? '0' : '') + mins + ':' +
            (secs < 10 ? '0' : '') + secs
        );
    }
    
    // Initialize animations and timers
    setInterval(updateTimer, 1000);
    updateTimer();
    
    // Create leaves occasionally
    setInterval(createLeaves, 15000);
    setTimeout(createLeaves, 2000);
});
