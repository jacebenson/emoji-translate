function translate(text){
    var endpoint = "/emoji?text=" + text;
    jQuery('#result').text("loading...");
    jQuery.get(endpoint, function (data) {
        jQuery('#result').text(data.text);
    });
}
jQuery('#text').on('keyup', function(){
    translate(jQuery('#text').val());
});