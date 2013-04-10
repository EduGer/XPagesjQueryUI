function getChartData(){
	var out = "{\"data\": [";
	var vw:NotesView = database.getView("Contacts By Country");
	var nav:NotesViewNavigator = vw.createViewNav();
	var entry:NotesViewEntry = nav.getFirst();
	var index = 0;
	while (entry != null){
		if (index > 0){
			out += ", ";
		}
		out += "{ \"category\": \"" + entry.getColumnValues().elementAt(0) + "\", \"value\": " + entry.getDescendantCount() + "}\n";
		index++;
		var nextentry:NotesViewEntry = nav.getNextCategory();
		entry.recycle();
		entry = nextentry;
	}
	out += "]}"
	return out;
}