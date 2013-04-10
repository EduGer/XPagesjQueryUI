$(document).ready( function() {
	var theme = getDemoTheme();
	var url = "jsonView.xsp/getRows";
	// prepare the data
		var source = {
			datatype : "json",
			datafields : [ {
				name : 'FirstName',
				type : 'string'
			}, {
				name : 'LastName',
				type : 'string'
			}, {
				name : 'Country',
				type : 'string'
			}, {
				name : 'DateOfBirth',
				type : 'date'
			}, {
				name : 'Email',
				type : 'string'
			}, {
				name : 'Telephone',
				type : 'string'
			}, {
				name : 'Twitter',
				type : 'string'
			} ],
			id : 'UNID',
			url : url,
			root : 'data'
		};

		var cellsrenderer = function(row, columnfield, value, defaulthtml,
				columnproperties) {
			if (value < 20) {
				return '<span style="margin: 4px; float: '
						+ columnproperties.cellsalign + '; color: #ff0000;">'
						+ value + '</span>';
			} else {
				return '<span style="margin: 4px; float: '
						+ columnproperties.cellsalign + '; color: #008000;">'
						+ value + '</span>';
			}
		}
		var dataAdapter = new $.jqx.dataAdapter(source, {
			downloadComplete : function(data, status, xhr) {
			},
			loadComplete : function(data) {
			},
			loadError : function(xhr, status, error) {
			}
		});
		$("#jqxgrid").jqxGrid( {
			width : 800,
			source : dataAdapter,
			theme : theme,
			pageable : true,
			autoheight : true,
			sortable : true,
			filterable : true,
			groupable : true,
			altrows : true,
			enabletooltips : true,
			editable : false,
			selectionmode : 'singlerow',

			columns : [ {
				text : 'First Name',
				datafield : 'FirstName',
				width : 120
			}, {
				text : 'Last Name',
				datafield : 'LastName',
				width : 120
			}, {
				text : 'Country',
				datafield : 'Country',
				width : 120
			}, {
				text : 'Date of Birth',
				datafield : 'DateOfBirth',
				cellsformat : 'd',
				width : 100
			}, {
				text : 'Email',
				datafield : 'Email',
				width : 200
			}, {
				text : 'Telephone',
				datafield : 'Telephone',
				width : 140
			}, {
				text : 'UNID',
				datafield : 'UNID',
				width : 0
			} ]
		});

		$('#jqxgrid').on('rowselect', function(event) {
			var args = event.args;
			var row = args.rowindex;
			var details = $('#jqxgrid').jqxGrid('getRowData', row);
			window.location.href="contact.xsp?action=editDocument&documentId=" + details.uid;
		});
	});