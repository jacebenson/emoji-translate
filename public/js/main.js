function translate(text){
    var endpoint = "/emoji?text=" + text;
    jQuery.get(endpoint, function (data) {
        jQuery('#result').text(data.text);
    });
}
jQuery('#translate').on('touchstart', function(){
    translate(jQuery('#text').val());
});
jQuery('#translate').on('click', function () {
    translate(jQuery('#text').val());
});