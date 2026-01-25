
var map = L.map('map').setView([43.262, -79.91], 14); 
//setview for initial point in leaflet, then zoom level - this is centered around mcmaster

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var Ricon = L.icon({
  iconUrl: 'images/ricon.png',
  iconSize: [36, 41], //size of the icon (literally length width)
  iconAnchor: [19, 38], //anchor point of the icon
  popupAnchor: [0, 0] // Point from which the popup should open relative to the iconAnchor 
})

var Ricon_Half = L.icon({
  iconUrl: 'images/ricon_half.png',
  iconSize: [36, 41], 
  iconAnchor: [19, 38], 
  popupAnchor: [0, 0]
})

var legend_icon = L.icon({
  iconUrl: 'images/legend.png',
  iconSize: [36, 41],
  iconAnchor: [19, 38], 
  popupAnchor: [0, 0]
})

var customOptions =
        {
        'maxWidth': '1000',
        'className' : 'custom',
        offset: L.point(-100,0),
        
        }

//var name = L.marker([coord], {icon: Ricon});
//name.bindPopup("name"); 


var the_legend = L.marker([0, 0], {icon: legend_icon}).addTo(map);
the_legend.bindPopup("Example Marker Test");

var McMaster = L.marker([43.26369, -79.91768]).addTo(map);
McMaster.bindPopup("<b>McMaster</b>");
//ok below is where we add the restaurant markers

var Vida = L.marker([43.2583587645654, -79.87623152127732], {icon: Ricon}); //📕
Vida.bindPopup("Vida La Pita", customOptions); //kingst

var Burrito_Band = L.marker([43.258764059307346, -79.87616432515605], {icon: Ricon}); //📕
Burrito_Band.bindPopup("Burrito Bandidos", customOptions); //kingst

var Tomah = L.marker([43.258855276925836, -79.87646896801628], {icon: Ricon}); //📕
Tomah.bindPopup("Tomah", customOptions); //kingst

var Popeyes = L.marker([43.25669276996115, -79.86861480452325], {icon: Ricon}); //jackson 📕
Popeyes.bindPopup("Popeyes", customOptions); //honorary close to jackson

var Kajun = L.marker([43.25701757090197, -79.86972792126438], {icon: Ricon});
Kajun.bindPopup("Kajun", customOptions); //jackson square

var Everest = L.marker([43.25744693576734, -79.87118135175177], {icon: Ricon});
Everest.bindPopup("Everest", customOptions); //jackson square

var KFC = L.marker([43.25804989750966, -79.87141549491307], {icon: Ricon});
KFC.bindPopup("KFC", customOptions); //jackson square

var Fit4life = L.marker([43.258225282191624, -79.87127514802313], {icon: Ricon});
Fit4life.bindPopup("Fit For Life", customOptions); //jackson square

var Teahut = L.marker([43.25418258194645, -79.86523511704918], {icon: Ricon_Half}).addTo(map); //📕
Teahut.bindPopup("TeaHut", customOptions);

var Boardwalk = L.marker([43.2569988745446, -79.93406936135824], {icon: Ricon}).addTo(map); //📕
Boardwalk.bindPopup("Boardwalk", customOptions); 

var SRoyale = L.marker([43.26002429297247, -79.87255349148477], {icon: Ricon}).addTo(map); //📕
SRoyale.bindPopup("Shawarma Royale", customOptions); 

var Caesar = L.marker([43.26201524486109, -79.877759225567], {icon: Ricon}).addTo(map);
Caesar.bindPopup("Big Caesar Shawarma", customOptions); 

var RSPizza = L.marker([43.25961509683813, -79.86291705938046], {icon: Ricon}).addTo(map); //📕
RSPizza.bindPopup("Red Swan Pizza", customOptions); 

var Lava = L.marker([43.2633162978512, -79.90084302405585], {icon: Ricon_Half}).addTo(map);
Lava.bindPopup("Lava Pizza", customOptions); 

var Hottakes = L.marker([43.25934042653128, -79.89974549915925], {icon: Ricon}).addTo(map);
Hottakes.bindPopup("Hot Takes", customOptions); 

var Dosa = L.marker([43.25886905574572, -79.88437541377685], {icon: Ricon}).addTo(map);
Dosa.bindPopup("Dosa Place", customOptions); 

var August8 = L.marker([43.25933213450475, -79.86673461116884], {icon: Ricon_Half}).addTo(map);
August8.bindPopup("August 8", customOptions); 

var Sapporo = L.marker([43.25407606492277, -79.8662195970458], {icon: Ricon_Half}).addTo(map);
Sapporo.bindPopup("Sapporo", customOptions); 

var Cowabunga = L.marker([43.260004855888965, -79.86803795436835], {icon: Ricon_Half}).addTo(map);
Cowabunga.bindPopup("Cowabunga", customOptions); 

var Tondou = L.marker([43.25880871087903, -79.87628162773483], {icon: Ricon_Half});
Tondou.bindPopup("Tondou", customOptions); //kingst

var Kenzo = L.marker([43.256575564140306, -79.86828623391892], {icon: Ricon_Half});
Kenzo.bindPopup("Kenzo", customOptions); 

var Lazeez = L.marker([43.26153491794926, -79.90634098087486], {icon: Ricon}).addTo(map);
Lazeez.bindPopup("Lazeez Shawarma", customOptions); 




//var name = L.marker([coord], {icon: Ricon});
//name.bindPopup("name"); 

var kingst = L.markerClusterGroup({
  maxClusterRadius: 12.3 //adjust, amount of zoom needed to cluster icons
});                   // (lower num means markers cluster at a higher zoom)
var kingstArray = [Vida, Burrito_Band, Tomah, Tondou]; //adding all the places in an array
var kingstLayerGroup = L.layerGroup(kingstArray); //putting that array in a layer group
kingst.addLayer(kingstLayerGroup); //adding the layer to our cluster
map.addLayer(kingst); //printing the cluster on the map

var jackson = L.markerClusterGroup({
  maxClusterRadius: 25 //adjust, amount of zoom needed to cluster icons
});                   // (lower num means markers cluster at a higher zoom)
var jacksonArray = [Popeyes, Kajun, Everest, KFC, Fit4life, Kenzo]; //adding all the places in an array
var jacksonLayerGroup = L.layerGroup(jacksonArray); //putting that array in a layer group
jackson.addLayer(jacksonLayerGroup); //adding the layer to our cluster
map.addLayer(jackson); //printing the cluster on the map

//https://leaflet.github.io/Leaflet.markercluster/example/marker-clustering-realworld.388.html
//Leaflet.markercluster
//OverlappingMarkerSpiderfier-Leaflet

//empire✅
//vida ✅
//tomah ✅ 
//burrito bandidos✅
//popeyes ✅
//boardwalk✅ 
//shawarma royale ✅
//big caesar shawarma ✅
//red swan pizza ✅
//dosa place ✅
//lazeez✅
//everest ✅
//kajun ✅
//kfc✅
//fit4life✅
//la luna 43.25940514503133, -79.8784846480909
//mandarin
//pur and simple ew what
//pancake house (beside mac)
//nandos
//misa
//temmys

//not halal but has halal options
//august 8 sushi✅
//cowabunga pizza ✅
//sapporo ✅
//teahut✅
//williams
//kenzo ✅
//tondou ✅
//lava pizza ✅
//jimmy the greek idk



//future ideas:
// toggle restaruant checklist? where you can turn markers on and off✅
// ^ also want one maybe for chains like just tims 

//checklist that can highlight a restaurant or maybe search function
//maybe a select all (or deselects all) button
//being able to close and open the list
//organize categories (like pizza, shawarma, boba, dessert)



//function to add custom control for toggleable list
function addCustomControl(){ /////////////////////////////////////////////////////////////////////////////////////////////////////
  var customControl = L.control({position: 'topright'}); //this is where the maps positioned duh

  customControl.onAdd = function (map) { //the list itself
      var div = L.DomUtil.create('div', 'toggleable-list');
      div.innerHTML = `
          <h4>Restaurants</h4>

          <div>
            <input type="checkbox" id="toggleVida" checked> Vida La Pita<br>
            <button class="center-button" onclick="centerMap(Vida)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleTeahut" checked> TeaHut<br>
            <button class="center-button" onclick="centerMap(Vida)">O</button>
          </div>

          <div>
            <input type="checkbox" id="togglePopeyes" checked> Popeyes<br>
            <button class="center-button" onclick="centerMap(Popeyes)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleBoardwalk" checked> Boardwalk<br>
            <button class="center-button" onclick="centerMap(Boardwalk)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleTomah" checked> Tomah<br>
            <button class="center-button" onclick="centerMap(Tomah)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleBurrito Bandidos" checked> Burrito Bandidos<br>
            <button class="center-button" onclick="centerMap(Burrito_Band)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleCaesar" checked> Caesar<br>
            <button class="center-button" onclick="centerMap(Caesar)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleSRoyale" checked> Shawarma Royale<br>
            <button class="center-button" onclick="centerMap(SRoyale)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleRSPizza" checked> Red Swan Pizza<br>
            <button class="center-button" onclick="centerMap(RSPizza)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleKajun" checked> Kajun <br>
            <button class="center-button" onclick="centerMap(Kajun)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleEverest" checked> Everest <br>
            <button class="center-button" onclick="centerMap(Everest)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleKFC" checked> KFC <br>
            <button class="center-button" onclick="centerMap(KFC)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleFit4life" checked> Fit4Life <br>
            <button class="center-button" onclick="centerMap(Fit4life)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleLava" checked> Lava Pizza <br>
            <button class="center-button" onclick="centerMap(Lava)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleHottakes" checked> Hot Takes <br>
            <button class="center-button" onclick="centerMap(Hottakes)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleDosa" checked> Dosa <br>
            <button class="center-button" onclick="centerMap(Dosa)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleLazeez" checked> Lazeez <br>
            <button class="center-button" onclick="centerMap(Lazeez)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleAugust8" checked> August8 <br>
            <button class="center-button" onclick="centerMap(August8)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleCowabunga" checked> Cowabunga <br>
            <button class="center-button" onclick="centerMap(Cowabunga)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleSapporo" checked> Sapporo <br>
            <button class="center-button" onclick="centerMap(Sapporo)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleTondou" checked> Tondou <br>
            <button class="center-button" onclick="centerMap(Tondou)">O</button>
          </div>

          <div>
            <input type="checkbox" id="toggleKenzo" checked> Kenzo <br>
            <button class="center-button" onclick="centerMap(Kenzo)">O</button>
          </div>
      `;
      return div;
  };

  customControl.addTo(map);

  //adding ALL the event listeners for toggling markers ////////////////////////////////////////////////////////////////////

  document.getElementById('toggleVida').addEventListener('change', function(e) {
      if (e.target.checked) {
        kingst.addLayer(Vida); // <--
      } else {
        kingst.removeLayer(Vida);// <-- notice for cluster groups u gotta remove and add the right layers
      }
  });

  document.getElementById('toggleTeahut').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(Teahut);
    } else {
        map.removeLayer(Teahut);
    }
});

  document.getElementById('toggleTomah').addEventListener('change', function(e) {
    if (e.target.checked) {
        kingst.addLayer(Tomah);
    } else {
        kingst.removeLayer(Tomah);
    }
  });

  document.getElementById('toggleBurrito Bandidos').addEventListener('change', function(e) {
    if (e.target.checked) {
        kingst.addLayer(Burrito_Band);
    } else {
        kingst.removeLayer(Burrito_Band);
    }
  });


  document.getElementById('togglePopeyes').addEventListener('change', function(e) {
      if (e.target.checked) {
          jackson.addLayer(Popeyes);
      } else {
          jackson.removeLayer(Popeyes);
      }
  });

  document.getElementById('toggleBoardwalk').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(Boardwalk);
    } else {
        map.removeLayer(Boardwalk);
    }
  });

  document.getElementById('toggleCaesar').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(Caesar);
    } else {
        map.removeLayer(Caesar);
    }
  });

  document.getElementById('toggleSRoyale').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(SRoyale);
    } else {
        map.removeLayer(SRoyale);
    }
  });

  document.getElementById('toggleRSPizza').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(RSPizza);
    } else {
        map.removeLayer(RSPizza);
    }
  });

  document.getElementById('toggleKajun').addEventListener('change', function(e) {
    if (e.target.checked) {
        jackson.addLayer(Kajun);
    } else {
        jackson.removeLayer(Kajun);
    }
  });

  document.getElementById('toggleEverest').addEventListener('change', function(e) {
    if (e.target.checked) {
        jackson.addLayer(Everest);
    } else {
        jackson.removeLayer(Everest);
    }
  });

  document.getElementById('toggleKFC').addEventListener('change', function(e) {
    if (e.target.checked) {
        jackson.addLayer(KFC);
    } else {
        jackson.removeLayer(KFC);
    }
  });

  document.getElementById('toggleFit4life').addEventListener('change', function(e) {
    if (e.target.checked) {
        jackson.addLayer(Fit4life);
    } else {
        jackson.removeLayer(Fit4life);
    }
  });

  document.getElementById('toggleLava').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(Lava);
    } else {
        map.removeLayer(Lava);
    }
  });

  document.getElementById('toggleHottakes').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(Hottakes);
    } else {
        map.removeLayer(Hottakes);
    }
  });

  document.getElementById('toggleDosa').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(Dosa);
    } else {
        map.removeLayer(Dosa);
    }
  });

  document.getElementById('toggleLazeez').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(Lazeez);
    } else {
        map.removeLayer(Lazeez);
    }
  });

  document.getElementById('toggleAugust8').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(August8);
    } else {
        map.removeLayer(August8);
    }
  });

  document.getElementById('toggleCowabunga').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(Cowabunga);
    } else {
        map.removeLayer(Cowabunga);
    }
  });

  document.getElementById('toggleSapporo').addEventListener('change', function(e) {
    if (e.target.checked) {
        map.addLayer(Sapporo);
    } else {
        map.removeLayer(Sapporo);
    }
  });

  document.getElementById('toggleTondou').addEventListener('change', function(e) {
    if (e.target.checked) {
        kingst.addLayer(Tondou);
    } else {
        kingst.removeLayer(Tondou);
    }
  });

  document.getElementById('toggleKenzo').addEventListener('change', function(e) {
    if (e.target.checked) {
        jackson.addLayer(Kenzo);
    } else {
        jackson.removeLayer(Kenzo);
    }
  });

}//end of checklist

//calling the function to add the custom control
addCustomControl();////////////////////////////////////////////////////////////////////////////////////////////////////


function centerMap(marker) { //this is the function that lets us zoom in on each restuarant when clicked
  map.setView(marker.getLatLng(), 17); //adjust zoom level
  marker.openPopup();
}

