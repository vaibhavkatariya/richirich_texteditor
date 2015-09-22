/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var editorconfiguration = {
    cssStyle :  {
      'pointer-events' : 'none',
      'cursor' : 'none'
    },
     cssStyle2 :  {
      'pointer-events' : 'auto',
      'cursor' : 'pointer'
    },
    // for making any document edited by the user we must turn "on" the designer mode
   designermode : function () {
     window.frames["edii"].document.designMode = 'On';
  },
  // the douument execcommand we build the functions it will select atomatically the selected text an perform operation on it
  fontBold : function(){
           window.frames["edii"].document.execCommand('bold', false, null); 
  },
  fontItalic : function(){
       window.frames["edii"].document.execCommand('italic', false, null);
  },
  underLinetext : function(){
      window.frames["edii"].document.execCommand('underline', false, null);
  },
  textUndo : function(){
      window.frames["edii"].document.execCommand('undo', false, null);
  },
  textRedo : function(){
      window.frames["edii"].document.execCommand('redo', false, null);
  },
  htmleditor : function(){
      if( $('#maincontainer .code-button').hasClass('htmleditor_off')){
          $('#maincontainer .code-button').addClass("htmleditor_on").removeClass("htmleditor_off");
                var geteditedtext =  window.frames["edii"].document.body.innerHTML ;
                   $('#maincontainer #htmlcontent').text(geteditedtext).css('display', 'block');
                   $('#maincontainer #edii').css('display', 'none');   
                  $('#maincontainer').addClass('controls-disable'); 
                  
                  $('#maincontainer #controls .maincontrols div').css(this.cssStyle).addClass('disable'); 
                  $('#maincontainer #controls .control-panel div:not(.code-button)').css(this.cssStyle).addClass('disable'); 
      }else{
          $('#maincontainer .code-button').addClass("htmleditor_off").removeClass("htmleditor_on");
           var geteditedHTMLtext =      document.getElementById('htmlcontent') ;
            var tex = geteditedHTMLtext.textContent ||  geteditedHTMLtext.innerText;
         //alert(tex);
            window.frames["edii"].document.body.innerHTML = tex ;
              $('#maincontainer #htmlcontent').css('display', 'none');
               $('#maincontainer #edii').css('display', 'block');
               $('#maincontainer').removeClass('controls-disable'); 
                 $('#maincontainer #controls .maincontrols div').css(this.cssStyle2).removeClass('disable'); 
                    $('#maincontainer #controls .control-panel div:not(.code-button)').css(this.cssStyle2).removeClass('disable'); 
      }

  },
  sourcElem : function(e){
 var elem, evt = e ? e:event;
 if (evt.srcElement)  elem = evt.srcElement;
 else if (evt.target) elem = evt.target;
 document.getElementById("wrappingElementtext").innerHTML =" " + elem.tagName.toLowerCase() + " " + 'tag';
  return true;
  },
  headingSelector : function(){
     var headopt = document.getElementById("headingChange");
    var opt = headopt.selectedIndex;
      //alert(opt);
//        var x = document.getElementById("mySelect").selectedIndex;
      //alert(headopt.getElementsByTagName("option")[opt].value);
     var optVal = headopt.getElementsByTagName("option")[opt].value; 
      
        //alert (optVal);
      //window.frames["edii"].document.execCommand('heading', false, "H4");
      window.frames["edii"].document.execCommand('formatBlock', false, '<'+ optVal + '>');
  },
  indent : function() {
      window.frames["edii"].document.execCommand('indent', false, null);
  },
  outdent : function() {
      window.frames["edii"].document.execCommand('outdent', false, null);
  },
  strike : function(){
       window.frames["edii"].document.execCommand('strikeThrough', false, null);
  },
  subscript : function(){
       window.frames["edii"].document.execCommand('subscript', false, null);
  },
  superscript : function(){
       window.frames["edii"].document.execCommand('superscript', false, null);
  },
  selectall : function(){
       window.frames["edii"].document.execCommand('selectAll', false, null);
  },
  delete : function(){
       window.frames["edii"].document.execCommand('delete', false, null);
  },
  center : function(){
       window.frames["edii"].document.execCommand('justifyCenter', false, null);
  },
  left : function(){
       window.frames["edii"].document.execCommand('justifyLeft', false, null);
  },
  right : function(){
       window.frames["edii"].document.execCommand('justifyRight', false, null);
  },
  justify : function(){
       window.frames["edii"].document.execCommand('justifyFull', false, null);
  },
  ul : function(){
       window.frames["edii"].document.execCommand('insertUnorderedList', false, null);
  },
  ol : function(){
       window.frames["edii"].document.execCommand('insertOrderedList', false, null);
  },
  link : function(){
       window.frames["edii"].document.execCommand('createLink', false, null);
  },
  unlink : function(){
       window.frames["edii"].document.execCommand('unlink', false, null);
  },
  hr : function(){
       window.frames["edii"].document.execCommand('insertHorizontalRule', false, null);
  },
  removestyle : function(){
       window.frames["edii"].document.execCommand('removeFormat', false, null);
  },
  ctrlPanel : function(){
      if($("#maincontainer #controls .control-panel").hasClass('close')){
               $("#maincontainer #controls .control-panel").slideDown('slow').addClass('open').removeClass('close');
               $("#maincontainer #controls .maincontrols .control-panel-controlerbutton i").addClass('fa-times').removeClass('fa-bars');
      }else{
                $("#maincontainer #controls .control-panel").slideUp('slow').addClass('close').removeClass('open');
                $("#maincontainer #controls .maincontrols .control-panel-controlerbutton i").addClass('fa-bars').removeClass('fa-times');
      }
 
      
  }
};
