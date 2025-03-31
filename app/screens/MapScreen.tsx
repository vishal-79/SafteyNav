import React, { useEffect, useState } from 'react';
import { StyleSheet, View, ActivityIndicator, Alert } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Heatmap, LatLng } from 'react-native-maps';
import axios from 'axios';
import * as Location from 'expo-location';

const MapScreen = () => {
  const [heatmapPoints, setHeatmapPoints] = useState<LatLng[]>([]);
  const [loading, setLoading] = useState(true);
  const [region, setRegion] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  // Dynamic radius calculation based on zoom level
  const calculateRadius = (latitudeDelta: number) => {
    return Math.min(Math.max(20, 60 - latitudeDelta * 100), 50);
  };

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert("Permission Denied", "Location permission is required to fetch nearby crime data.");
        setLoading(false);
        return;
      }
  
      let location = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = location.coords;
  
      setRegion({
        latitude,
        longitude,
        latitudeDelta: 0.05, // Reduced for better focus on your location
        longitudeDelta: 0.05,
      });
  
      fetchCrimeData(latitude, longitude);
    })();
  }, []);
  

  const fetchCrimeData = async (latitude: number, longitude: number) => {
    try {
      const response = await axios.get(
        `https://data.sfgov.org/resource/wg3w-h783.json`, 
        {
          params: {
            $limit: 2000,
            $where: `latitude IS NOT NULL AND longitude IS NOT NULL AND latitude > ${latitude - 0.1} AND latitude < ${latitude + 0.1} AND longitude > ${longitude - 0.1} AND longitude < ${longitude + 0.1}`
          },
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      const data = response.data;

      const points = data.map((item: any) => ({
        latitude: parseFloat(item.latitude),
        longitude: parseFloat(item.longitude)
      }));

      const validPoints = points.filter(point => 
        !isNaN(point.latitude) && !isNaN(point.longitude)
      );

      setHeatmapPoints(validPoints);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching crime data: ", error.response?.data || error.message);
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <MapView
          provider={PROVIDER_GOOGLE}
          style={StyleSheet.absoluteFillObject}
          region={region}
          showsUserLocation={true}
          showsMyLocationButton={true}
          onRegionChangeComplete={(newRegion) => setRegion(newRegion)}
        >
          <Heatmap
            points={heatmapPoints}
            radius={calculateRadius(region.latitudeDelta)} // Dynamically calculated radius
            opacity={0.7}
            gradient={{
              colors: ['#00FF00', '#FFFF00', '#FFA500', '#FF4500', '#FF0000'],
              startPoints: [0.1, 0.3, 0.5, 0.7, 0.9],
              colorMapSize: 256,
            }}
          />
        </MapView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MapScreen;
