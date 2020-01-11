function translate(text){
    var endpoint = "/emoji?text=" + text;
    jQuery.get(endpoint, function (data) {
        jQuery('#result').text(data.text);
    });
}
jQuery('#translate').bind("click touchend", function(){
    translate(jQuery('#text').val());
});