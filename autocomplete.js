(function( $ ){

  $.fn.autocomplete = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'hdnname'         : 'hdndefault',
    }, options);

    this.hide();
    
    
    return this.each(function() {
      var $this = $(this);
      
      var hdn = '<input type="hidden" name="' + options.hdnname + '" id="' + options.hdnname + '">';

      var searchform = $this.prev('form.ui-listview-filter').find('input');
      $this.parent().append(hdn);
      
      searchform.bind('focus', function(ev){
          $this.show();
        });

      searchform.bind('blur', function(ev){
          setTimeout(function(){
            $this.hide(250);
          },500);
        });
        
      $this.find('li').click(function(ev){
        var val = $(this).attr('data-val');
        var text = $(this).html();
        $this.prev('form.ui-listview-filter').find('input').val(text);
        $("#" + options.hdnname).val(val);
        var nrn = 0;
      });
        
    });

  };
})( jQuery );