/* Hungarian initialisation for the jQuery UI date picker plugin. */
/* Written by Istvan Karaszi (jquerycalendar@spam.raszi.hu). */
jQuery(function($){
        $.datepicker.regional['hu'] = {
                closeText: 'bez�r�s',
                prevText: '&laquo;&nbsp;vissza',
                nextText: 'el�re&nbsp;&raquo;',
                currentText: 'ma',
                monthNames: ['Janu�r', 'Febru�r', 'M�rcius', '�prilis', 'M�jus', 'J�nius',
                'J�lius', 'Augusztus', 'Szeptember', 'Okt�ber', 'November', 'December'],
                monthNamesShort: ['Jan', 'Feb', 'M�r', '�pr', 'M�j', 'J�n',
                'J�l', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
                dayNames: ['Vas�map', 'H�tf�', 'Kedd', 'Szerda', 'Cs�t�rt�k', 'P�ntek', 'Szombat'],
                dayNamesShort: ['Vas', 'H�t', 'Ked', 'Sze', 'Cs�', 'P�n', 'Szo'],
                dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
                dateFormat: 'yy-mm-dd', firstDay: 1,
                isRTL: false};
		//$.datepicker.setDefaults($.datepicker.regional['hu']);
		$.datepicker.regional['de'] = {clearText: 'l�schen', clearStatus: 'aktuelles Datum l�schen',
                closeText: 'schlie�en', closeStatus: 'ohne �nderungen schlie�en',
                prevText: '<zur�ck', prevStatus: 'letzten Monat zeigen',
                nextText: 'Vor>', nextStatus: 'n�chsten Monat zeigen',
                currentText: 'heute', currentStatus: '',
                monthNames: ['Januar','Februar','M�rz','April','Mai','Juni',
                'Juli','August','September','Oktober','November','Dezember'],
                monthNamesShort: ['Jan','Feb','M�r','Apr','Mai','Jun',
                'Jul','Aug','Sep','Okt','Nov','Dez'],
                monthStatus: 'anderen Monat anzeigen', yearStatus: 'anderes Jahr anzeigen',
                weekHeader: 'Wo', weekStatus: 'Woche des Monats',
                dayNames: ['Sonntag','Montag','Dienstag','Mittwoch','Donnerstag','Freitag','Samstag'],
                dayNamesShort: ['So','Mo','Di','Mi','Do','Fr','Sa'],
                dayNamesMin: ['So','Mo','Di','Mi','Do','Fr','Sa'],
                dayStatus: 'Setze DD als ersten Wochentag', dateStatus: 'W�hle D, M d',
                dateFormat: 'dd.mm.yy', firstDay: 1, 
                initStatus: 'W�hle ein Datum', isRTL: false};
        //$.datepicker.setDefaults($.datepicker.regional['de']);
});


/*
     FILE ARCHIVED ON 01:25:55 Oct 26, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 13:57:49 Dec 29, 2017.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/