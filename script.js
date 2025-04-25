document.addEventListener('DOMContentLoaded', () => {
    const startButtons = document.querySelectorAll('.start-btn');
    
    startButtons.forEach(button => {
        button.addEventListener('click', () => {
            const route = button.getAttribute('data-route');
            startRoute(route);
        });
    });
});

function startRoute(routeNumber) {
    // Здесь будет логика для каждого маршрута
    switch(routeNumber) {
        case '1':
            window.location.href = 'route1.html';
            break;
        case '2':
            window.location.href = 'route2.html';
            break;
        case '3':
            window.location.href = 'route3.html';
            break;
        default:
            console.log('Unknown route');
    }
} 