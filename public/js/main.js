function translate(text){
    var endpoint = "/emoji?text=" + text;
    jQuery.get(endpoint, function (data) {
        jQuery('#result').text(data.text);
    });
}
jQuery('#translate').bind("click touchstart", function(){
    translate(jQuery('#text').val());
});