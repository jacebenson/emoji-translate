function translate(text){
    var endpoint = "/emoji?text=" + text;
    jQuery('#result').text("loading...");
    jQuery.get(endpoint, function (data) {
        jQuery('#result').text(data.text);
    });
}
var lastValue = "";
setInterval(function(){
    var newValue = jQuery('#text').val();
    if(lastValue != newValue){
        lastValue = newValue;
        translate(newValue);
    }
}, 1000);
