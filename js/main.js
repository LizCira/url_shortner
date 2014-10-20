function getMobileOperatingSystem() {
  var userAgent = navigator.userAgent || navigator.vendor || window.opera;

  if( userAgent.match( /iPad/i ) || userAgent.match( /iPhone/i ) || userAgent.match( /iPod/i ) )
  {
    return 'iOS';

    }
    else if( userAgent.match( /Android/i ) )
    {

      return 'Android';
    }
    else
    {
      return 'desktop';
    }
  }


function shortlink(original){

  var os = getMobileOperatingSystem();
  $("#linkContainer").append("<li>Shortlink: <a href='http://" + original + "''>http://wwww.mtvshortlink.com/" + n + "</a></li><li>Original link: " + original + "</li><li>Operating system: " + os + "</li>");
  return n++
}

$(document).ready(function() {

   n = 1

	$("#button").click(function(){
     var originalLink = $("#deeplink").val()
    shortlink(originalLink);

	})


});