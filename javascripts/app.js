
var Pdf = require('pdfkit');
var fs = require('fs');
var gui = require('nw.gui');
var win = gui.Window.get();

/*
 * Script App.js
 * @Author Anthony Cluse
*/
( function($){
	$(document).ready( function(){
		fs.exists('doc.pdf', function(exists){
			if( exists ) fs.unlink('doc.pdf');
		});
		$('form').submit( function(e){
			e.preventDefault();
			var message = $('textarea').val();
			var pdf = new Pdf();
			pdf.fontSize(25).text(message, 100, 100);
			pdf.write('doc.pdf');
			var new_win = gui.Window.get(
			  window.open('doc.pdf')
			);
			new_win.reload();
		});
	});
})(jQuery);