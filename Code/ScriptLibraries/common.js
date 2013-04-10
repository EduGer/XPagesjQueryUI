$(document).ready( function() {
	var theme = getDemoTheme();
    $("#menu").jqxMenu();

    $("#animation").on('change', function (event) {
        var value = event.args.checked;
        // enable or disable the menu's animation.
        if (!value) {
            $("#jqxMenu").jqxMenu({ animationShowDuration: 0, animationHideDuration: 0, animationShowDelay: 0 });
        }
        else {
            $("#jqxMenu").jqxMenu({ animationShowDuration: 300, animationHideDuration: 200, animationShowDelay: 200 });
        }
    });

    $("#hover").on('change', function (event) {
        var value = event.args.checked;
        // enable or disable the menu's hover effect.
        if (!value) {
            $("#jqxMenu").jqxMenu({ enableHover: false });
        }
        else {
            $("#jqxMenu").jqxMenu({ enableHover: true });
        }
    });

    $("#open").on('change', function (event) {
        var value = event.args.checked;
        // enable or disable the opening of the top level menu items when the user hovers them.
        if (!value) {
            $("#jqxMenu").jqxMenu({ autoOpen: false });
        }
        else {
            $("#jqxMenu").jqxMenu({ autoOpen: true });
        }
    });
    $("#topLevelArrows").on('change', function (event) {
        var value = event.args.checked;
        // enable or disable the opening of the top level menu items when the user hovers them.
        if (!value) {
            $("#jqxMenu").jqxMenu({ showTopLevelArrows: false });
        }
        else {
            $("#jqxMenu").jqxMenu({ showTopLevelArrows: true });
        }
    });
});

function getDemoTheme() {
    var theme =  $.data(document.body, 'theme');
    if (theme == null) {
        theme = '';
    }
    else {
        return theme;
    }
    var themestart = window.location.toString().indexOf('?');
    if (themestart == -1) {
        return '';
    }

    var theme = window.location.toString().substring(1 + themestart);
    var url = "jqwidgets/styles/jqx." + theme + '.css';

    if (document.createStyleSheet != undefined) {
        var hasStyle = false;
        $.each(document.styleSheets, function (index, value) {
            if (value.href != undefined && value.href.indexOf(theme) != -1) {
                hasStyle = true;
                return false;
            }
        });
        if (!hasStyle) {
            document.createStyleSheet(url);
        } 
    }
    else $(document).find('head').append('<link rel="stylesheet" href="' + url + '" media="screen" />');
  
    return theme;
};