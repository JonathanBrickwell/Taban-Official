  
var footer = (function() {

    var _footerDesign = function() {

        var html = '';
        html += '<div class="footer-content text-center">';
        html += '<small><b>Copyright &copy; Kristijan Fištrek</b></small>';
        html += '</div>';

        return html;
    }

    var render = function() {
        var footerContainer = document.querySelector('footer');
        footerContainer.innerHTML = _footerDesign();
    }

    return {
        init: render
    }

})();

footer.init();