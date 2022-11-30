import { Paragraph } from "react-native-paper";
import React, { useEffect, useState } from "react";
import MapView, { MapMarker } from "react-native-maps";
// import { StyleSheet, View } from "react-native";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { Marker } from "react-native-maps";

// import MapView from "react-native-maps";


export const MapaSeguro = () => {
  const [region, setRegion] = useState({
    latitude: -26.304682069338412, 
    longitude: -48.84377889427914,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
  const [markers, setMarkers] = useState([
    {
      id: 1,
      title: "Aventureiro",
      description: "3",
      latitude: -26.249510573040787, 
      longitude: -48.82313519131454,
      pinColor: "red",
    },
    {
      id: 2,
      title: "Jardim Iririú",	
      description: "3",
      latitude: -26.260576065562258, 
      longitude: -48.80689268492651,
      pinColor: "red",
    },
    {
      id: 3,
      title: "Comasa",
      description: "5",
      latitude: -26.277454793401986, 
      longitude: -48.80648595892831,
      pinColor: "yellow",
    },
    {
      id: 4,
      title: "Espinheiros",
      description: "5",
      latitude: -26.287764237184007, 
      longitude: -48.77778279028256,
      pinColor: "yellow",
    },
    {
      id: 5,
      title: "Guanabara",
      description: "6",
      latitude: -26.320720812462426, 
      longitude: -48.82562792195892,
      pinColor: "yellow",
    },
    {
      id: 6,
      title: "Boa Vista",
      description: "6",
      latitude: -26.29968712487448, 
      longitude: -48.82398867338181,
      pinColor: "yellow",
    },
    {
      id: 7,
      title: "Pirabeiraba centro",
      description: "9",
      latitude: -26.214016724623868, 
      longitude: -48.8950761182909,
      pinColor: "green",
    },
    {
      id: 8,
      title: "Jardim Paraíso",
      description: "3",
      latitude: -26.21252434906239, 
      longitude: -48.82421227244989,
      pinColor: "red",
    },
    {
      id: 9,
      title: "Jardim Sofia",
      description: "7",
      latitude: -26.235093330645764, 
      longitude: -48.83200998763792,
      pinColor: "green",
    },
    {
      id: 10,
      title: "Bom Retiro",
      description: "8",
      latitude: -26.26450043475362, 
      longitude: -48.844312034336056,
      pinColor: "green",
    },
    {
      id: 11,
      title: "Santo Antônio",
      description: "8",
      latitude: -26.27472592582176, 
      longitude: -48.855438172882984,
      pinColor: "green",
    },
    {
      id: 12,
      title: "Costa e Silva",
      description: "8",
      latitude: -26.273810357163807, 
      longitude: -48.873158791995394,
      pinColor: "green",
    },
    {
      id: 13,
      title: "Vila Nova",
      description: "6",
      latitude: -26.29169929299872,
      longitude:  -48.903182166998164,
      pinColor: "yellow",
    },
    {
      id: 14,
      title: "Iririú",
      description: "6",
      latitude: -26.27113453699082, 
      longitude: -48.82210416379101,
      pinColor: "yellow",
    },
    {
      id: 15,
      title: "Bucarein",
      description: "9",
      latitude: -26.31422135046157, 
      longitude:  -48.841078259407105,
      pinColor: "green",
    },
    {
      id: 16,
      title: "Fátima",
      description: "8",
      latitude: -26.320030030957582,
      longitude:  -48.815932157855464,
      pinColor: "green",
    },
    {
      id: 17,
      title: "Ademar Garcia",
      description: "8",
      latitude: -26.32358163733244,
      longitude:   -48.80552128387399,
      pinColor: "green",
    },
    {
      id: 18,
      title: "Jarivatuba",
      description: "5",
      latitude: -26.332286340380158, 
      longitude: -48.80592163613666,
      pinColor: "yellow",
    },
    {
      id: 19,
      title: "Ulysses Guimarães",
      description: "6",
      latitude: -26.328012032351463,
      longitude:  -48.79429267201309,
      pinColor: "yellow",
    },
    {
      id: 31,
      title: "São Marcos",
      description: "10",
      latitude: -26.31950535753837, 
      longitude:  -48.87521990140665,
      pinColor: "green",
    },
 


  ]);
  return (
<View style={styles.container}>
    <MapView
      style={styles.map}
      initialRegion={region} //your region data goes here.
    >
      {/*Make sure the Marker component is a child of MapView. Otherwise it won't render*/}
      <Marker
      title={markers[0].title}
      description={markers[0].description}
      coordinate={{
        latitude: markers[0].latitude,
        longitude: markers[0].longitude,
      }}
      pinColor={markers[0].pinColor}
      
      />
      <Marker
      title={markers[1].title}
      description={markers[1].description}
      coordinate={{
        latitude: markers[1].latitude,
        longitude: markers[1].longitude,
      }}
      pinColor={markers[1].pinColor}

      />
      <Marker
      title={markers[2].title}
      description={markers[2].description}
      coordinate={{
        latitude: markers[2].latitude,
        longitude: markers[2].longitude,
      }}
      pinColor={markers[2].pinColor}

      />
      <Marker
      title={markers[3].title}
      description={markers[3].description}
      coordinate={{
        latitude: markers[3].latitude,
        longitude: markers[3].longitude,
      }}
      pinColor={markers[3].pinColor}

      />
      <Marker
      title={markers[4].title}
      description={markers[4].description}
      coordinate={{
        latitude: markers[4].latitude,
        longitude: markers[4].longitude,
      }}
      pinColor={markers[4].pinColor}

      />
      <Marker
      title={markers[5].title}
      description={markers[5].description}
      coordinate={{
        latitude: markers[5].latitude,
        longitude: markers[5].longitude,
      }}
      pinColor={markers[5].pinColor}
      
      />
      <Marker
      title={markers[6].title}
      description={markers[6].description}
      coordinate={{
        latitude: markers[6].latitude,
        longitude: markers[6].longitude,
      }}
      pinColor={markers[6].pinColor}

      />
      <Marker
      title={markers[7].title}
      description={markers[7].description}
      coordinate={{
        latitude: markers[7].latitude,
        longitude: markers[7].longitude,
      }}
      pinColor={markers[7].pinColor}

      />
      <Marker
      title={markers[8].title}
      description={markers[8].description}
      coordinate={{
        latitude: markers[8].latitude,
        longitude: markers[8].longitude,
      }}
      pinColor={markers[8].pinColor}

      />
      <Marker
      title={markers[9].title}
      description={markers[9].description}
      coordinate={{
        latitude: markers[9].latitude,
        longitude: markers[9].longitude,
      }}
      pinColor={markers[9].pinColor}

      />
      <Marker
      title={markers[10].title}
      description={markers[10].description}
      coordinate={{
        latitude: markers[10].latitude,
        longitude: markers[10].longitude,
      }}
      pinColor={markers[10].pinColor}

      />
      <Marker
      title={markers[11].title}
      description={markers[11].description}
      coordinate={{
        latitude: markers[11].latitude,
        longitude: markers[11].longitude,
      }}
      pinColor={markers[11].pinColor}

      />
      <Marker
      title={markers[12].title}
      description={markers[12].description}
      coordinate={{
        latitude: markers[12].latitude,
        longitude: markers[12].longitude,
      }}
      pinColor={markers[12].pinColor}

      />
      <Marker
      title={markers[13].title}
      description={markers[13].description}
      coordinate={{
        latitude: markers[13].latitude,
        longitude: markers[13].longitude,
      }}
      pinColor={markers[13].pinColor}

      />
      <Marker
      title={markers[14].title}
      description={markers[14].description}
      coordinate={{
        latitude: markers[14].latitude,
        longitude: markers[14].longitude,
      }}
      pinColor={markers[14].pinColor}

      />
      <Marker
      title={markers[15].title}
      description={markers[15].description}
      coordinate={{
        latitude: markers[15].latitude,
        longitude: markers[15].longitude,
      }}
      pinColor={markers[15].pinColor}

      />
      <Marker
      title={markers[16].title}
      description={markers[16].description}
      coordinate={{
        latitude: markers[16].latitude,
        longitude: markers[16].longitude,
      }}
      pinColor={markers[16].pinColor}

      />
      <Marker
      title={markers[17].title}
      description={markers[17].description}
      coordinate={{
        latitude: markers[17].latitude,
        longitude: markers[17].longitude,
      }}
      pinColor={markers[17].pinColor}

      />
      <Marker
      title={markers[18].title}
      description={markers[18].description}
      coordinate={{
        latitude: markers[18].latitude,
        longitude: markers[18].longitude,
      }}
      pinColor={markers[18].pinColor}

      />
      <Marker
      title={markers[19].title}
      description={markers[19].description}
      coordinate={{
        latitude: markers[19].latitude,
        longitude: markers[19].longitude,
      }}
      pinColor={markers[19].pinColor}

      />
      <Marker
      title={'São Marcos'}
      description={'10'}
      coordinate={{
        latitude: -26.31950535753837, 
        longitude:  -48.87521990140665,
      }}
      pinColor={'green'}

      />
    
    </MapView>
  </View>
  );
};

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height; 
const LATITUDE = -26.30418348253829;
const LONGITUDE = -48.8458497078148;
const LATITUDE_DELTA = 0.0922;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const customStyle = [
  {
    elementType: "geometry",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#242f3e",
      },
    ],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [
      {
        color: "#263c3f",
      },
    ],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#6b9a76",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [
      {
        color: "#38414e",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#212a37",
      },
    ],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#9ca5b3",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [
      {
        color: "#746855",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [
      {
        color: "#1f2835",
      },
    ],
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#f3d19c",
      },
    ],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [
      {
        color: "#2f3948",
      },
    ],
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#d59563",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [
      {
        color: "#515c6d",
      },
    ],
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [
      {
        color: "#17263c",
      },
    ],
  },
];

class MapStyle extends React.Component {
  constructor() {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          provider={this.props.provider}
          style={styles.map}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          customMapStyle={customStyle}
        >
        <Marker
          coordinate={{   
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421 }}
          title="This is a title"
          description="This is a description"
        />
          </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});

// export default MapStyle;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: 400,
//     height: 400,
//   },
// });
