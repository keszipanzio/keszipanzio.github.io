/* Hungarian initialisation for the jQuery UI date picker plugin. */
/* Written by Istvan Karaszi (jquerycalendar@spam.raszi.hu). */
jQuery(function($){
        $.datepicker.regional['hu'] = {
                closeText: 'bezárás',
                prevText: '&laquo;&nbsp;vissza',
                nextText: 'elõre&nbsp;&raquo;',
                currentText: 'ma',
                monthNames: ['Január', 'Február', 'Március', 'Április', 'Május', 'Június',
                'Július', 'Augusztus', 'Szeptember', 'Október', 'November', 'December'],
                monthNamesShort: ['Jan', 'Feb', 'Már', 'Ápr', 'Máj', 'Jún',
                'Júl', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
                dayNames: ['Vasámap', 'Hétfö', 'Kedd', 'Szerda', 'Csütörtök', 'Péntek', 'Szombat'],
                dayNamesShort: ['Vas', 'Hét', 'Ked', 'Sze', 'Csü', 'Pén', 'Szo'],
                dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                dateFormat: 'yy-mm-dd', firstDay: 1,
                isRTL: false};
		//$.datepicker.setDefaults($.datepicker.regional['hu']);
		$.datepicker.regional['de'] = {clearText: 'löschen', clearStatus: 'aktuelles Datum löschen',
                closeText: 'schließen', closeStatus: 'ohne Änderungen schließen',
                prevText: '<zurück', prevStatus: 'letzten Monat zeigen',
                nextText: 'Vor>', nextStatus: 'nächsten Monat zeigen',
                currentText: 'heute', currentStatus: '',
                monthNames: ['Januar','Februar','März','April','Mai','Juni',
                'Juli','August','September','Oktober','November','Dezember'],
                monthNamesShort: ['Jan','Feb','Mär','Apr','Mai','Jun',
                'Jul','Aug','Sep','Okt','Nov','Dez'],
                monthStatus: 'anderen Monat anzeigen', yearStatus: 'anderes Jahr anzeigen',
                weekHeader: 'Wo', weekStatus: 'Woche des Monats',
                dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
                dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
                dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
                dayStatus: 'Setze DD als ersten Wochentag', dateStatus: 'Wähle D, M d',
                dateFormat: 'dd.mm.yy', firstDay: 1, 
                initStatus: 'Wähle ein Datum', isRTL: false};
        //$.datepicker.setDefaults($.datepicker.regional['de']);
});


/*
     FILE ARCHIVED ON 01:25:55 Oct 26, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:57:49 Dec 29, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/