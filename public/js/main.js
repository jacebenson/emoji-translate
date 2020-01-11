function translate(text){
    var endpoint = "/emoji?text=" + text;
    jQuery.get(endpoint, function (data) {
        jQuery('#result').text(data.text);
    });
}
jQuery('#text').on('keyup input', function(){
    translate(jQuery('#text').val());
});