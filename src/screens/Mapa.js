export function Mapa (){
    
  
            L_NO_TOUCH = false;
            L_DISABLE_3D = false;
     
    
   
   
    <script src="https://cdn.jsdelivr.net/npm/leaflet@1.6.0/dist/leaflet.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.js"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/leaflet@1.6.0/dist/leaflet.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/css/bootstrap-theme.min.css"/>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Leaflet.awesome-markers/2.0.2/leaflet.awesome-markers.css"/>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/python-visualization/folium/folium/templates/leaflet.awesome.rotate.min.css"/>
    
            <meta name="viewport" content="width=device-width,
                initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
            
        
</head>
<body>    
    
            <div class="folium-map" id="map_65487e1a7e4f105fc00859cbd617f590" ></div>
        
</body>
<>    
    
            var map_65487e1a7e4f105fc00859cbd617f590 = L.map(
                "map_65487e1a7e4f105fc00859cbd617f590",
                {
                    center: [-26.3051, -48.8461],
                    crs: L.CRS.EPSG3857,
                    zoom: 12,
                    zoomControl: true,
                    preferCanvas: false,
                }
            );

            

        
    
            var tile_layer_3a754fece76ea88a045358c484739bc0 = L.tileLayer(
                "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
                {"attribution": "Data by \u0026copy; \u003ca href=\"http://openstreetmap.org\"\u003eOpenStreetMap\u003c/a\u003e, under \u003ca href=\"http://www.openstreetmap.org/copyright\"\u003eODbL\u003c/a\u003e.", "detectRetina": false, "maxNativeZoom": 18, "maxZoom": 18, "minZoom": 0, "noWrap": false, "opacity": 1, "subdomains": "abc", "tms": false}
            ).addTo(map_65487e1a7e4f105fc00859cbd617f590);
        
    
            var marker_c07094996e699b71099695f8eca784ed = L.marker(
                [-26.3051, -48.8461],
                {}
            ).addTo(map_65487e1a7e4f105fc00859cbd617f590);
        
    
            var icon_29b531a66a02a3adec96e34d92ab87c4 = L.AwesomeMarkers.icon(
                {"extraClasses": "fa-rotate-0", "icon": "info-sign", "iconColor": "white", "markerColor": "red", "prefix": "glyphicon"}
            );
            marker_c07094996e699b71099695f8eca784ed.setIcon(icon_29b531a66a02a3adec96e34d92ab87c4);
        
    
        var popup_bd3fbf91ea88a117865b2d5bcb2e9fc0 = L.popup({"maxWidth": "100%"});

        
            
                var html_71f063e182a18176235ca052ef73b804 = $(`<div id="html_71f063e182a18176235ca052ef73b804" style="width: 100.0%; height: 100.0%;">Some Other Location</div>`)[0];
                popup_bd3fbf91ea88a117865b2d5bcb2e9fc0.setContent(html_71f063e182a18176235ca052ef73b804);
            
        

        marker_c07094996e699b71099695f8eca784ed.bindPopup(popup_bd3fbf91ea88a117865b2d5bcb2e9fc0)
        ;

        
    
    
                function newMarker(e){
                    var new_mark = L.marker().setLatLng(e.latlng).addTo(map_65487e1a7e4f105fc00859cbd617f590);
                    new_mark.dragging.enable();
                    new_mark.on('dblclick', function(e){ map_65487e1a7e4f105fc00859cbd617f590.removeLayer(e.target)})
                    var lat = e.latlng.lat.toFixed(4),
                       lng = e.latlng.lng.toFixed(4);
                    new_mark.bindPopup("Alerta de ataques");
                    };
                map_65487e1a7e4f105fc00859cbd617f590.on('click', newMarker);
            
}