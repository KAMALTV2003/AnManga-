document.addEventListener('DOMContentLoaded', function() {
    let startY = 0;
    let currentY = 0;
    const threshold = 100;

    document.addEventListener('touchstart', function(e) {
        startY = e.touches[0].pageY;
    });

    document.addEventListener('touchmove', function(e) {
        currentY = e.touches[0].pageY;
        if (currentY - startY > threshold) {
            location.reload();
        }
    });
});
