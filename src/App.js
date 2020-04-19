import React from "react";
import WrappedMap from "./components/Map";
function App() {
	return (
		<div style={{ width: "100vw", height: "100vh", border: "1px solid #000" }}>
			<WrappedMap
				googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCnBZihIsa3OoECWan1p1W1cO1ciWPyMlo`}
				loadingElement={<div style={{ height: "100%" }} />}
				containerElement={<div style={{ height: "100%" }} />}
				mapElement={<div style={{ height: "100%" }} />}
			/>
		</div>
	);
}

export default App;
