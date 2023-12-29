import React, { Fragment } from "react";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <Fragment>
      <WebView source={{ uri: "https://akelbait.com/" }} style={{ flex: 1 }} />
    </Fragment>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });
