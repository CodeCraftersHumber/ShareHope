function searchPages() {
    var searchTerm = document.getElementById("searchInput").value.toLowerCase();
    var pageRedirect = '';

    switch (searchTerm) {
        case 'child':
            pageRedirect = 'child.html';
            break;
        case 'elder':
            pageRedirect = 'elders.html';
            break;
        case 'disaster':
            pageRedirect = 'disaster.html';
            break;
        case 'disability':
            pageRedirect = 'disability.html';
            break;
        case 'about':
            pageRedirect = 'aboutUs.html';
            break;
        case 'contact':
            pageRedirect = 'contactUs.html';
            break;
        default:
            alert('Page not found. Please try again.');
            return;
    }

    window.location.href = pageRedirect;
}
