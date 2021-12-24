import React, { useState, useEffect } from "react";
import { Dimensions, StyleSheet, Text, View, ScrollView } from "react-native";
import * as Location from "expo-location";

const exam = [
  {
    name: "TEST",
    age: 24,
  },
  {
    name: "TEST",
    age: 23,
  },
  {
    name: "TEST",
    age: 22,
  },
  {
    name: "TEST",
    age: 21,
  },
];

interface ILocationInfoProps {}
const LocationInfo: React.FC<ILocationInfoProps> = () => {
  const [location, setLocation] = useState<string>("");

  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status === "granted") {
      let {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });
      const nowLoc = await Location.reverseGeocodeAsync(
        { latitude, longitude },
        {
          useGoogleMaps: false,
        }
      );

      setLocation(
        nowLoc[0].region + " " + nowLoc[0].city + " " + nowLoc[0].district
      );
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={headerStyles.container}>
        <Text style={headerStyles.text}>
          현재위치:
          <Text style={{ fontSize: 24, padding: 8 }}>{location}</Text>
        </Text>
      </View>
      <ScrollView
        horizontal={true}
        pagingEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {exam.map((data, key) => (
          <View style={listStyles.item} key={key}>
            <Text style={listStyles.name}>
              {key} {data.name}
            </Text>
            <Text style={listStyles.age}>{data.age}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const headerStyles = StyleSheet.create({
  container: {
    flex: 0.3,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 18,
    color: "white",
  },
});

const listStyles = StyleSheet.create({
  item: {
    width: Dimensions.get("window").width,
    alignItems: "center",
  },
  name: {
    fontSize: 36,
  },
  age: {
    fontSize: 24,
  },
});

export default LocationInfo;
