function translate(text){
    var endpoint = "/emoji?text=" + text;
    jQuery.get(endpoint, function (data) {
        jQuery('#result').text(data.text);
    });
}
jQuery('#text').keyup("click touchend", function(){
    translate(jQuery('#text').val());
});