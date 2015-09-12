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

1. TEI-XML und RDF – Implizite und explizite Semantik
2. Ein Ontologiebeispiel für &lt;correspDesc&gt;
3. XTriples in 3 Minuten
4. Visualisierungsbeispiele für semantische Daten

---

Beispielhafte Fragestellungen, die mit semantischen Technologien 
beantwortet werden können

---

## Implizite und explizite Semantik

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

Hier das Ganze als RDF Statements

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
