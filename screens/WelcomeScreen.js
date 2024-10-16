import axios from "axios";
import { React, useState, useEffect, useContext } from "react";

import {
  Platform,
  View,
  Text,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { formatTimestampToReadableTime } from "../util/date_formatter";
import { hexToDecimal } from "../util/decimal_hex";
import { hexToReadableTime } from "../util/hex_time";
import { AuthContext } from "../store/auth-context";

const API_URL =
  Platform.OS === "android"
    ? "http://10.0.2.2:8080/api/v1/"
    : "http://localhost:8080/api/v1/";

function WelcomeScreen() {
  const { width } = useWindowDimensions();

  const isLargeScreen = width > 768;

  // state variable to holde data
  const [mainnetPosMissedCheckpoint, setMainnetPosMissedCheckpoint] =
    useState();

  const [testnetPosMissedCheckpoint, setTestnetPosMissedCheckpoint] =
    useState();

  const [heimdallBlockHeightMainnet, setMainnetHeimdallBlockHeight] =
    useState();

  const [heimdallBlockHeightTestnet, setTestnetHeimdallBlockHeight] =
    useState();

  const [borLatestBlockDetailMainnet, setMainnetBorLatestBlockDetails] =
    useState();

  const [borLatestBlockDetailTestnet, setTestnetBorLatestBlockDetails] =
    useState();

  authCtx = useContext(AuthContext);
  token = authCtx.token;

  const fetchMainnetPosMissedCheckpoint = async () => {
    try {
      const response = await axios.get(
        API_URL + "pos/mainnet/mainnet-missed-checkpoint",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setMainnetPosMissedCheckpoint(response.data.data);
    } catch (error) {
      console.error(error);
      authCtx.logout();
    }
  };

  const fetchTestnetPosMissedCheckpoint = async () => {
    try {
      const response = await axios.get(
        API_URL + "pos/testnet/testnet-missed-checkpoint",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setTestnetPosMissedCheckpoint(response.data.data);
    } catch (error) {
      console.error(error);
      authCtx.logout();
    }
  };

  const mainnetHeimdallBlockHeight = async () => {
    try {
      const response = await axios.get(
        API_URL + "pos/mainnet/heimdal-block-height",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setMainnetHeimdallBlockHeight(response.data.data.result.block.header);
    } catch (error) {
      console.error(error);
      authCtx.logout();
    }
  };

  const testnetHeimdallBlockHeight = async () => {
    try {
      const response = await axios.get(
        API_URL + "pos/testnet/heimdal-block-height",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setTestnetHeimdallBlockHeight(response.data.data.result.block.header);
    } catch (error) {
      console.error(error);
      authCtx.logout();
    }
  };

  const mainnetBorLatestBlockDetails = async () => {
    try {
      const response = await axios.get(
        API_URL + "pos/mainnet/bor-latest-block-details",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data.data.result);
      setMainnetBorLatestBlockDetails(response.data.data.result);
    } catch (error) {
      console.error(error);
      authCtx.logout();
    }
  };

  const testnetBorLatestBlockDetails = async () => {
    try {
      const response = await axios.get(
        API_URL + "pos/testnet/bor-latest-block-details",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      console.log(response.data.data.result);
      setTestnetBorLatestBlockDetails(response.data.data.result);
    } catch (error) {
      console.error(error);
      authCtx.logout();
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await fetchMainnetPosMissedCheckpoint();
      await fetchTestnetPosMissedCheckpoint();
      await mainnetHeimdallBlockHeight();
      await testnetHeimdallBlockHeight();
      await mainnetBorLatestBlockDetails();
      await testnetBorLatestBlockDetails();
    };

    fetchData();
  }, [token]);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View
          style={[
            styles.cardsContainer,
            isLargeScreen && styles.largeScreenContainer,
          ]}>
          <View style={[styles.card, isLargeScreen && styles.largeCard]}>
            <View style={styles.iconSide}>
              <FontAwesome name="chain" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>
                Missed Checkpoints (POS Mainnet).
              </Text>
              <View style={styles.line} />
              <Text style={styles.header}>
                {mainnetPosMissedCheckpoint?.checkpointConsidered}
              </Text>
              <Text style={styles.footerText}>POS Mainnet</Text>
            </View>
          </View>

          <View style={[styles.card, isLargeScreen && styles.largeCard]}>
            <View style={styles.iconSide}>
              <FontAwesome name="chain" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>
                Missed Checkpoints (POS Testnet).
              </Text>
              <View style={styles.line} />
              <Text style={styles.header}>
                {testnetPosMissedCheckpoint?.checkpointConsidered}
              </Text>
              <Text style={styles.footerText}>POS Testnet</Text>
            </View>
          </View>

          <View style={[styles.card, isLargeScreen && styles.largeCard]}>
            <View style={styles.iconSide}>
              <FontAwesome name="chain" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>
                Heimdall Block Height (POS Mainnet)
              </Text>
              <View style={styles.line} />
              <Text style={styles.header}>
                {heimdallBlockHeightMainnet?.height}
              </Text>
              <Text style={styles.footerText}>
                {formatTimestampToReadableTime(
                  heimdallBlockHeightMainnet?.time
                )}
              </Text>
            </View>
          </View>

          <View style={[styles.card, isLargeScreen && styles.largeCard]}>
            <View style={styles.iconSide}>
              <FontAwesome name="chain" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>
                Heimdall Block Height (POS Testnet)
              </Text>
              <View style={styles.line} />
              <Text style={styles.header}>
                {heimdallBlockHeightTestnet?.height}
              </Text>
              <Text style={styles.footerText}>
                {formatTimestampToReadableTime(
                  heimdallBlockHeightTestnet?.time
                )}
              </Text>
            </View>
          </View>

          <View style={[styles.card, isLargeScreen && styles.largeCard]}>
            <View style={styles.iconSide}>
              <FontAwesome name="chain" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>
                Bor latest block details (POS Mainnet)
              </Text>
              <View style={styles.line} />
              <Text style={styles.header}>
                {hexToDecimal(borLatestBlockDetailMainnet?.number)}
              </Text>
              <Text style={styles.footerText}>
                {hexToReadableTime(borLatestBlockDetailMainnet?.timestamp)}
              </Text>
            </View>
          </View>

          <View style={[styles.card, isLargeScreen && styles.largeCard]}>
            <View style={styles.iconSide}>
              <FontAwesome name="chain" size={40} color="#333" />
            </View>
            <View style={styles.content}>
              <Text style={styles.description}>
                Bor latest block details (POS Testnet)
              </Text>
              <View style={styles.line} />
              <Text style={styles.header}>
                {hexToDecimal(borLatestBlockDetailTestnet?.number)}
              </Text>
              <Text style={styles.footerText}>
                {hexToReadableTime(borLatestBlockDetailTestnet?.timestamp)}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
  },
  scrollContainer: {
    alignItems: "center",
    paddingVertical: 20,
  },
  cardsContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  largeScreenContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  card: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    width: "90%", // Make the card width responsive on mobile
    maxWidth: 300, // Cap the maximum width on mobile
  },
  largeCard: {
    width: "45%", // Adjust width for larger screens
    maxWidth: 400, // Cap the max width on large screens
  },
  iconSide: {
    marginRight: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    flex: 1,
  },
  header: {
    margin: 0,
    fontSize: 24,
    color: "#333",
  },
  description: {
    marginVertical: 8,
    color: "#666",
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginVertical: 8,
  },
  footerText: {
    marginTop: 8,
    fontSize: 12,
    color: "#aaa",
    textAlign: "right",
  },
});

export default WelcomeScreen;
