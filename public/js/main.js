function translate(text){
    var endpoint = "/emoji?text=" + text;
    jQuery('#result').text("loading...");
    jQuery('#text').val(text);
    jQuery.get(endpoint, function (data) {
        jQuery('#result').text(data.text);
    });
}


var urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('text')){
    translate(urlParams.get('text'));
} // true

