var header = (function() {
    
    var _headerDesign = function() {
        var html = '';

        html += '<header class="header_area">'
        html += '<div class="container">';
        html += '<div class="row">';
        html += '<div class="col-12 d-flex">';
        html += '<div class="logo_area">';
        html += '<a class="d-flex align-items-center justify-content-center" href="index.html">';
        html += '<span class="logo-tag">Menu</span>';
        html += '</a>';
        html += '</div>';
        html += '<div class="menu-open-close d-flex align-items-center justify-content-center">';
        html += '<div id="nav-icon">';
        html += '<span></span>';
        html += '<span></span>';
        html += '<span></span>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        html += '</header>';

        html += `
        
        `;

        return html;
    }

    var render = function() {
        var headerContainer = document.getElementById('main-menu');
        headerContainer.innerHTML = _headerDesign();
    }

    return {
        init: render
    }

})();

header.init();