function translate(text){
    var endpoint = '/emoji?text=' + text;
    jQuery('#result').text('loading...');
    jQuery('#text').val(text);
    var apiEndpoint = window.location.protocol + '//';
    apiEndpoint += window.location.host + endpoint;
    jQuery('#api-request').text(apiEndpoint);
    jQuery('#api-request').attr('href',apiEndpoint);
    jQuery.get(endpoint, function (data) {
        jQuery('#api-result').text(JSON.stringify(data));
        jQuery('#result').text(data.text);
    });
}

var urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('text')){
    translate(urlParams.get('text'));
}

