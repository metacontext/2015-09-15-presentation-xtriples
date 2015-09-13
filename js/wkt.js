function dynamicQuery (containerID, filter) {
	var queryString = "SELECT DISTINCT ?WKT ?name WHERE { ?letter cd:sentFrom ?sentFrom . ?letter cd:sentTo ?sentTo . " + filter + " ?sentFrom geo:lat ?latitudeSentFrom ; geo:long ?longitudeSentFrom . ?sentTo geo:lat ?latitudeSentTo ; geo:long ?longitudeSentTo . BIND (concat('POLYGON((',str(?longitudeSentFrom),' ',str(?latitudeSentFrom),',',str(?longitudeSentTo),' ',str(?latitudeSentTo),'))') AS ?WKT) . BIND (CONCAT(str(?nameSentFrom),' - ',str(?nameSentTo)) AS ?name) . } LIMIT 469",
	Q = new sgvizler.Query();
	Q.query(queryString)
		.endpointURL("http://t.spatialhumanities.de/openrdf-sesame/repositories/correspSearch-owlim")
		.chartFunction("sgvizler.visualization.MapWKT")
		.draw(containerID);
}
$(function() {
	$("#wkt_select").click(function() {
		$( "#wkt" ).empty();
		if ($("#correspondent").val() == "alle") {
			filter = "";
		} else {
			filter = "?letter cd:communicating <" + $("#correspondent").val() + "> .";
		}
		dynamicQuery('wkt', filter);
	});
	$("#wkt_soemmering").click(function() {
		$( "#wkt" ).empty();
		filter = "FILTER (regex(str(?letter), '^http://correspsearch.bbaw.de/id/SOE20/')) ."; 
		dynamicQuery('wkt', filter);
	});
	$("#wkt_alle").click(function() {
		$( "#wkt" ).empty();
		filter = "";
		dynamicQuery('wkt', filter);
	});
	$("#wkt_17").click(function() {
		$( "#wkt" ).empty();
		filter = "?letter owltime:xsdDateTime ?date . FILTER (regex(str(?date), '^17')) .";
		dynamicQuery('wkt', filter);
	});
	$("#wkt_18").click(function() {
		$( "#wkt" ).empty();
		filter = "?letter owltime:xsdDateTime ?date . FILTER (regex(str(?date), '^18')) .";
		dynamicQuery('wkt', filter);
	});
	$( document ).ajaxSend(function() {
		$("#wkt").css("background", "url(../images/spinner.gif) center no-repeat");
	});
	$( document ).ajaxComplete(function() {
		$("#wkt").css("background", "none");
	});
});