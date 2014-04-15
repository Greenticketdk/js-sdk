Greenticket-JS-SDK
==================

Javascript SDK for the Greenticket Semi Closed API

##Introduktion
For at bruge Greenticket’s Javascript integration skal du først have oprettet en App hos Greenticket. Dette gøres ved at kontakte apps@greenticket.dk.
Ved oprettelse får du leveret et App ID samt en Secret. Gem dem et sikkert sted, de skal bruges når du bruger SDK’et.

##Load Javascript SDK
Start med at inkludere den seneste implementation af Greenticket’s Javascript SDK i bunden af dit “body” tag:

```HTML
<script type="text/javascript" src="https://s3-eu-west-1.amazonaws.com/greenticket-dk/code/js/GT-Api-latest.min.js"></script>
```
Der er ikke brug for at hente andre libraries eller toolkits for at GT-Api virker.

##Initialiser GT-Api
Efter du har inkluderet GT-Api skal du initialisere api’en:
```HTML
<script type="text/javascript" src=“https://s3-eu-west-1.amazonaws.com/greenticket-dk/code/js/GT-Api-latest.min.js"></script>
<script type=“text/javascript”>
  GT.init({
    app_id: DIT_APP_ID,
		secret: DIN_SECRET
  });
</script>
```

Dette gør GT-Api klar til at bruges og informerer dig hvis din app ikke kunne identificeres.

##Kald Greenticket’s API
Efter du har initialiseret GT-Api kan du kalde vores åbne api med functionen GT.api:

```Javascript
  GT.api(’REQUEST_URL’, ‘METODE’, function(response){
	   //TODO Handle response
  });
```

Hvor:

* REQUEST_URL er den URL efter https://www.greenticket.dk/api, du vil at kalde.
* METODE er den metode du vil bruge til kaldet (GET, POST, PUT, DELETE)
* function(response) er den function der bliver kaldt, når din request er blevet udført, her kan du håndtere svaret fra Greenticket’s api.

##Greenticket queries
De queries du kan kalde på Greenticket’s API kan findes http://docs.greenticketdk.apiary.io "her" (Ikke komplet). Din mulighed for at kalde de forskellige vil variere alt efter hvad Greenticket har givet dig adgang til.
