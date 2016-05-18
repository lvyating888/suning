$(function(){
	/*xiangshang*/
var xsflag=true;
var xs=0;
var $xsul=$('.ggul');

var $xsli=$('.ggul .ggabox');
 
var $xsh=$('.ggul a').height();

$xsul.css({
	 height:$xsh*$xsli.length+"px",
})
function xiangshang(){
        if(!xsflag){return}
          xsflag=false;
        var $first=$('.ggabox a:first-child');
        var $last=$('.ggabox a:last-child');
          $xsli.animate({top:-$xsh},function(){
            $first.insertAfter($last);
            $(this).css({
                top:0
            })
            xsflag=true;
          })
        
    }
    //xiangshang()
  var $xst=setInterval(xiangshang,2000)
 
 $xsul.hover(
      function(){
       clearInterval($xst);
      },
      function(){
      $xst=setInterval(xiangshang,2000);
      }
  )
var $top=$('#top');
//console.log($top)

 window.onscroll=function(){
   //alert(1)
     var doc=document.body.scrollTop?document.body:document.documentElement;
    $top[0].onclick=function(){
      doc.scrollTop=0;
    }
  }

})