
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

/////////////////////////// part 1, add restaurants to this list ///////////////////////////

//note zoom is auto set later down to 17
const restaurants = [
  {
    name: "Vida La Pita",
    coords: [43.2583587645654, -79.87623152127732],
    icon: "Ricon",
    cluster: "kingst",
    zoom: 17
  },

  {
    name: "Burrito Bandidos",
    coords: [43.258764059307346, -79.87616432515605],
    icon: "Ricon",
    cluster: "kingst",
  },

  {
    name: "Tomah",
    coords: [43.258855276925836, -79.87646896801628],
    icon: "Ricon",
    cluster: "kingst"
  },

  {
    name: "Tondou",
    coords: [43.25880871087903, -79.87628162773483],
    icon: "Ricon_Half",
    cluster: "kingst"
  },

  {
    name: "Popeyes",
    coords: [43.25669276996115, -79.86861480452325],
    icon: "Ricon",
    cluster: "jackson"
  },

  {
    name: "Popeyes Mac",
    coords: [43.25695289113719, -79.93508772281018],
    icon: "Ricon",
    cluster: null
  },

  {
    name: "Kajun",
    coords: [43.25701757090197, -79.86972792126438],
    icon: "Ricon",
    cluster: "jackson"
  },

  {
    name: "KFC",
    coords: [43.25804989750966, -79.87141549491307],
    icon: "Ricon",
    cluster: "jackson"
  },

  {
    name: "Fit For Life",
    coords: [43.258225282191624, -79.87127514802313],
    icon: "Ricon",
    cluster: "jackson"
  },

  {
    name: "Kenzo",
    coords: [43.256575564140306, -79.86828623391892],
    icon: "Ricon_Half",
    cluster: "jackson"
  },

  {
    name: "TeaHut",
    coords: [43.25418258194645, -79.86523511704918],
    icon: "Ricon_Half",
    cluster: null
  },

  {
    name: "Boardwalk",
    coords: [43.2569888142346, -79.93406936135824],
    icon: "Ricon",
    cluster: null
  },

  {
    name: "Shawarma Royale",
    coords: [43.26002429297247, -79.87255349148477],
    icon: "Ricon",
    cluster: null
  },

  {
    name: "Red Swan Pizza",
    coords: [43.25961509683813, -79.86291705938046],
    icon: "Ricon",
    cluster: null
  },

  {
    name: "Lava Pizza",
    coords: [43.2633162978512, -79.90084302405585],
    icon: "Ricon_Half",
    cluster: null
  },

  {
    name: "Hot Takes",
    coords: [43.25934042653128, -79.89974549915925],
    icon: "Ricon",
    cluster: null
  },

  {
    name: "Dosa Place",
    coords: [43.25886905574572, -79.88437541377685],
    icon: "Ricon",
    cluster: null
  },

  {
    name: "August 8",
    coords: [43.25933213450475, -79.86673461116884],
    icon: "Ricon_Half",
    cluster: null
  },

  {
    name: "Sapporo",
    coords: [43.25407606492277, -79.8662195970458],
    icon: "Ricon_Half",
    cluster: null
  },

  {
    name: "Cowabunga",
    coords: [43.260004855888965, -79.86803795436835],
    icon: "Ricon_Half",
    cluster: null
  },

  {
    name: "Lazeez Shawarma",
    coords: [43.26153491794926, -79.90634098087486],
    icon: "Ricon",
    cluster: null
  },

  {
    name: "Pancake House",
    coords: [43.25782023508247, -79.92340730344885],
    icon: "Ricon_Half",
    cluster: null
  },

  {
    name: "Mandarin",
    coords: [43.20603535062695, -79.89324189614968],
    icon: "Ricon_Half",
    cluster: null,
    zoom: 13
  },

  {
    name: "Temmys",
    coords: [43.26293098949164, -79.877748468236],
    icon: "Ricon",
    cluster: null
  },

  {
    name: "name",
    coords: [0,0],
    icon: "Ricon",
    cluster: null
  }


];

//var name = L.marker([coord], {icon: Ricon});
//name.bindPopup("name");
//other way to make standalone markers, we make them using the func in restaurants.forEach
var the_legend = L.marker([0, 0], {icon: legend_icon}).addTo(map);
the_legend.bindPopup("Example Marker Test");

var McMaster = L.marker([43.26369, -79.91768]).addTo(map);
McMaster.bindPopup("<b>McMaster</b>");
//ok below is where we add the restaurant markers


/////////////////////////// part 2, clusters + making the markers ///////////////////////////

//add clusters here, which you can add into the next funcs 'if' statement section
var kingst = L.markerClusterGroup({ maxClusterRadius: 12.3 });
var jackson = L.markerClusterGroup({ maxClusterRadius: 25 });

restaurants.forEach(r => {
    const icon = r.icon === "Ricon" ? Ricon : Ricon_Half;
    const marker = L.marker(r.coords, { icon: icon }).bindPopup(r.name, customOptions);
    r.marker = marker;

    //add markers to the cluster, or map directly if individual
    if (r.cluster === "kingst") kingst.addLayer(marker);
    else if (r.cluster === "jackson") jackson.addLayer(marker);
    else map.addLayer(marker);
});

//add the cluster layers to the map
map.addLayer(kingst);
map.addLayer(jackson);


//vida ✅
//tomah ✅ 
//burrito bandidos✅
//popeyes ✅
//boardwalk✅ 
//shawarma royale ✅
//red swan pizza ✅
//dosa place ✅
//lazeez✅
//everest ✅
//kajun ✅
//kfc✅
//fit4life✅
//mandarin ✅
//pancake house ✅
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


/////////////////////////// restaurant list and toggle ///////////////////////////
var sidebarDiv;

//function to add custom control for toggleable list
function addCustomControl(){
    var customControl = L.control({ position: 'topleft' });

    customControl.onAdd = function(map){
        sidebarDiv = L.DomUtil.create('div', 'sidebar');

        L.DomEvent.disableScrollPropagation(sidebarDiv);//this is so that when you're hovering over the list you can scroll down/up
        L.DomEvent.disableClickPropagation(sidebarDiv);
        
        restaurantListGenerate();//calling the func
        // Return the complete <div> so Leaflet can add it to the map
        return sidebarDiv;
    };

    customControl.addTo(map);

    //we have the restaurant list, now we need to add its functionality (event listener)
    restaurants.forEach(r => {

        const row = document.querySelector(
          `.restaurant-row[data-name="${r.name}"]`
        );

        row.addEventListener('click', () => {
          centerMap(r.marker, r.zoom);
        });
        //now if its clicked on, we go to it (using our centerMap func)

        // Generate the same unique ID as before to find the checkbox in the DOM
        const id = "toggle_" + r.name.replace(/\s+/g, '');
        const marker = r.marker;
        //add more clustergroups here
        const clusterGroup = r.cluster === "kingst" ? kingst 
                             : r.cluster === "jackson" ? jackson 
                             : null;

                             

    }); //end of restaurants.forEach
  
} //end of func addCustomControl

//calling the function to add the custom control
addCustomControl();


/////////////////////////// this func that lets us zoom in on each restaurant when clicked ///////////////////////////
function centerMap(marker, zoom = 17) {
  map.setView(marker.getLatLng(), zoom);
  marker.openPopup();
}

///////////////////////////
function restaurantListGenerate(){

  sidebarDiv.innerHTML += `
    <div class="restaurant-row" onclick="centerMap(McMaster, 12.5)">
    <strong>📍 McMaster University</strong>
    </div>

    <hr>

    <h4>Restaurants</h4>
  `;

  // Loop through each restaurant in the array to create it in the checklist
  restaurants.forEach(r => {

      //add restaurant name to the list
    sidebarDiv.innerHTML += `
        <div class="restaurant-row" data-name="${r.name}">
          ${r.name}
        </div>
      `;
  });
}

///////////////////////////
//function openRestaurant(){
//}
