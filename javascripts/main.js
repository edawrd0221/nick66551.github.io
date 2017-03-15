var sectionHeight = function() {
  var total    = $(window).height(),
      $section = $('section').css('height','auto');

  if ($section.outerHeight(true) < total) {
    var margin = $section.outerHeight(true) - $section.height();
    $section.height(total - margin - 20);
  } else {
    $section.css('height','auto');
  }
}

$(window).resize(sectionHeight);

$(document).ready(function(){
  $("section h1, section h2").each(function(){
    $("nav ul").append("<li class='tag-" + this.nodeName.toLowerCase() + "'><a href='#" + $(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,'') + "'>" + $(this).text() + "</a></li>");
    $(this).attr("id",$(this).text().toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g,''));
    $("nav ul li:first-child a").parent().addClass("active");
  });
  
  $("nav ul li").on("click", "a", function(event) {
    var position = $($(this).attr("href")).offset().top - 190;
    $("html, body").animate({scrollTop: position}, 400);
    $("nav ul li a").parent().removeClass("active");
    $(this).parent().addClass("active");
    event.preventDefault();    
  });
  
  sectionHeight();
  
  $('img').load(sectionHeight);
});

fixScale = function(doc) {

  var addEvent = 'addEventListener',
      type = 'gesturestart',
      qsa = 'querySelectorAll',
      scales = [1, 1],
      meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

  function fix() {
    meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
    doc.removeEventListener(type, fix, true);
  }

  if ((meta = meta[meta.length - 1]) && addEvent in doc) {
    fix();
    scales = [.25, 1.6];
    doc[addEvent](type, fix, true);
  }
};

function check(){
  var talk=true;
  var name = $("input#name").val();
  var contact = $("input#contact").val();
  var prefer = $("input#prefer").val();
  var languageOpt = $("input#howareyou");
  var languages=[];
  for(var i=0; i<languageOpt.length; i++){
    if( $(languageOpt[i]).prop("checked") ){
       if($(languageOpt[i]).val()=='我不喜歡說話'){
         talk=false;
       }
      languages.push( $(languageOpt[i]).val() );
    }
  }
  if(talk){
  alert("嗨"+name+"你好，您的聯絡方式為："+contact+"，我會根據你的喜好："+prefer+"跟你聯絡聊聊。你喜歡的語言是"+languages.join());
  }
  else{
  alert("嗨"+name+"你好，您的聯絡方式為："+contact+"，我會根據你的喜好："+prefer+"跟你聯絡聊聊。");
  }
  
  $("input#name").val("");
  $("input#contact").val("");
  $("input#prefer").val("");
  
 }
