import * as React from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View, Alert } from 'react-native';
import MapView, { Marker, animateToRegion } from 'react-native-maps';

const MapScreen = () => {
    const [origin, setOrigin] = React.useState({
        latitude: 20.676959673708946,
        longitude: -103.34695175509462,
    });

    const mapViewRef = React.useRef(null);

    React.useEffect(() => {
        getLocationPermission();
    }, [])
    async function getLocationPermission() {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('Permission denied');
            return;
        }
        let location = await Location.getCurrentPositionAsync({});
        const current = {
            latitude: location.coords.latitude,
            longitude: location.coords.longitude
        }
        setOrigin(current);

        mapViewRef.current.animateToRegion({
            latitude: current.latitude,
            longitude: current.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }, 1000);
    }



    return (
        <View style={styles.container}>
            <MapView
                ref={mapViewRef}
                style={styles.map}
                initialRegion={{
                    latitude: origin.latitude,
                    longitude: origin.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            >
                <Marker
                    draggable
                    coordinate={origin}
                    onDragEnd={(direction) => setOrigin(direction.nativeEvent.coordinate)}
                />
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    map: {
        width: '100%',
        height: '100%',
        flex: 1,
    }
})

export default MapScreen
