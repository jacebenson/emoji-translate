
jQuery('#translate').on('click', function () {
    var text = jQuery('#text').val();
    console.log('translating', text);
    var endpoint = "/emoji?text=" + text;
    jQuery.get(endpoint, function (data) {
        console.log(data);
        jQuery('#result').text(data.text);
    });
});