(function( $ ){

  $.fn.autocomplete = function( options ) {  

    // Create some defaults, extending them with any options that were provided
    var settings = $.extend( {
      'location'         : 'top',
      'background-color' : 'blue'
    }, options);

    this.hide();
    
    
    return this.each(function() {
      var $this = $(this);
      
      var hdn = '<input type="hidden" name="hdnval" id="hdnval">';

      var searchform = $this.prev('form.ui-listview-filter').find('input');
      $(hdn).appendTo($this).parent();
      
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
      });
        
    });

  };
})( jQuery );