<h2>Restaurant Map</h2> 

Simply a map of restaurants I like near McMaster & Downtown Hamilton.

**Link to project: https://alamn5.github.io/map/**



<h3>How It's Made:</h3>

Tech used: HTML, CSS, JavaScript, VS Code



<h3>Some Functions:</h3>


```ruby
var Restaurant = L.marker([X, Y]).addTo(map);		  ← to create a marker
```

```ruby
Restaurant.bindPopup("Restaurant");                       ← to create a tag
```

```ruby
<div>
<input type="checkbox" id="toggleRestaurant" checked>Restaurant<br>
<button class="center-button" onclick="centerMap(Restaurant)">O</button>
</div> 							← to add to the checklist
```

```ruby
document.getElementById('toggleRestaurant').addEventListener('change', function(e) {
	if (e.target.checked) {
 		map.addLayer(Restaurant);
	} else {
		map.removeLayer(Restaurant);
} });					        ← to make it functional within the checklist
```



<h3>Conclusion:</h3>

Still a lot of features I can add and optimize, right now this is a rough demo just to practice some html+css+js, and learn about uploading to GitHub. Will potentially come back to this project one day in the future 🙏












