// Smooth scrolling with offset for fixed header
// Handles both in-page and external anchor links

document.addEventListener('DOMContentLoaded', function() {
    // Get the height of the fixed header
    var headerHeight = 0;
    var header = document.querySelector('.masthead');
    if (header) {
        headerHeight = header.offsetHeight;
    }
    
    // Handle all anchor links
    var links = document.querySelectorAll('a[href*="#"]');
    
    links.forEach(function(link) {
        link.addEventListener('click', function(e) {
            var hash = this.href.split('#')[1];
            if (hash) {
                var target = document.getElementById(hash) || document.querySelector('[name="' + hash + '"]');
                if (target) {
                    e.preventDefault();
                    
                    // Calculate position with offset
                    var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                    
                    // Smooth scroll to position
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                    
                    // Update URL hash
                    history.pushState(null, null, '#' + hash);
                }
            }
        });
    });
    
    // Handle page load with hash in URL
    if (window.location.hash) {
        var hash = window.location.hash.substring(1);
        var target = document.getElementById(hash) || document.querySelector('[name="' + hash + '"]');
        if (target) {
            var targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    }
});
