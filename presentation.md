---
title: Briefeditionen im Semantic Web
author: Torsten Schrade
---

### Briefeditionen im Semantic Web
# XTriples
## Semantische Aussagen aus XML
### __Torsten Schrade (Mainz) | 15.09.2015__

---

## Gliederung

1. Implizite und explizite Semantik
2. Ontologiebeispiel für &lt;correspDesc&gt;
3. XTriples in 3 Minuten
4. Visualisierungsbeispiele

---

## Implizite Semantik (TEI-XML)

<pre>
<code class="xml">
&lt;correspDesc key="686" cs:source="#SOE20"&gt;
	&lt;correspAction type="sent"&gt;
		&lt;persName ref="http://d-nb.info/gnd/118540238"&gt;
			Johann Wolfgang von Goethe
		&lt;/persName&gt;
		&lt;placeName ref="http://www.geonames.org/2812482"&gt;
			Weimar
		&lt;/placeName&gt;
		&lt;date when="1793-12-05"&gt;5.12.1793&lt;/date&gt;
	&lt;/correspAction&gt;
	&lt;correspAction type="received"&gt;
		&lt;persName ref="http://d-nb.info/gnd/118805193"&gt;
			Soemmerring, Samuel Thomas
		&lt;/persName&gt;
		&lt;placeName ref="http://www.geonames.org/2874225"&gt;
			Mainz
		&lt;/placeName&gt;
	&lt;/correspAction&gt;
&lt;/correspDesc&gt;
</code>
</pre>

---

## Explizite Semantik (RDF)

<form>
	<textarea class="code" name="code" id="code2">

	PREFIX v: &lt;http://www.beispiel.verben#&gt;

	Goethe 			v:ist				Person ;
					v:sendet			Brief .

	Brief			v:datiert			1793 ;
					v:gesendet_aus		Weimar .

	Weimar			v:ist				Stadt .

	Soemmering		v:ist				Person ;
					v:empfaengt			Brief .

	Brief			v:empfangen_in		Mainz .
	</textarea>
</form>

---

## Semantische Fragestellungen

* Wer korrespondiert mit wem?
* Wieviele Briefe sind von Dichtern/Wissenschaftlern/etc.?
* Welche Personen mit welchen Berufen schrieben an Carl Maria von Weber?
* In welcher Stadt wurden die meisten Briefe verschickt/empfangen?
* Zwischen welchen Städten wurden Briefe verschickt?
* Wer war in welcher Stadt und wann?
* Wo war Person X im Jahr Y?

---

## Ontologie-Beispiel

<ol class="steps">
<li><a href="#/step-2/#step1" id="step1">1</a></li>
<li><a href="#/step-2/#step2" id="step2">2</a></li>
<li><a href="#/step-2/#step3" id="step3">3</a></li>
<li><a href="#/step-2/#step4" id="step4">4</a></li>
<li><a href="#/step-2/#step5" id="step5">5</a></li>
<li><a href="#/step-2/#step6" id="step6">6</a></li>
<li><a href="#/step-2/#step7" id="step7">7</a></li>
</ol>
<ul class="legend five columns">
<li id="gnd">GND</li>
<li id="cs">correspSearch</li>
<li id="geonames">Geonames</li>
</ul>
<div id="model" style="border: 1px solid #333"></div>
<script src="js/model.js" type="text/javascript"></script>

---

## XTriples in 3 Minuten

---

## Visualisierungsbeispiele

---

## Stuff

<form>
	<textarea class="code" name="code" id="code1">

PREFIX rdfs: &lt;http://www.w3.org/2000/01/rdf-schema#&gt;
PREFIX rdf: &lt;http://www.w3.org/1999/02/22-rdf-syntax-ns#&gt;
PREFIX owl: &lt;http://www.w3.org/2002/07/owl#&gt;

PREFIX owltime: &lt;http://www.w3.org/2006/time#&gt;

PREFIX foaf: &lt;http://xmlns.com/foaf/0.1/&gt;
PREFIX rel: &lt;http://purl.org/vocab/relationship/&gt;

PREFIX geo: &lt;http://www.w3.org/2003/01/geo/wgs84_pos#&gt;
PREFIX gn: &lt;http://www.geonames.org/ontology#&gt;

PREFIX gndo: &lt;http://d-nb.info/standards/elementset/gnd#&gt;

PREFIX cd: &lt;http://www.tei-c.org/ns/1.0/correspDesc#&gt;

	</textarea>
</form>

<script>
	var editor1 = CodeMirror.fromTextArea(document.getElementById("code1"), {
		mode: "application/sparql-query",
		matchBrackets: true
	});
	var editor2 = CodeMirror.fromTextArea(document.getElementById("code2"), {
		mode: "application/sparql-query",
		matchBrackets: true
	});
</script>