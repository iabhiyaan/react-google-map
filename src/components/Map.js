import React, { useState } from "react";
import { GoogleMap, withGoogleMap, withScriptjs, Marker, InfoWindow } from "react-google-maps";
import * as parks from "../data/index.json";

function Map() {
	const [ selectedPark, setSelectedPark ] = useState(null);

	return (
		<div>
			<GoogleMap defaultZoom={10} defaultCenter={{ lat: 45.421532, lng: -75.697189 }}>
				{parks.features.map((park) => (
					<Marker
						key={park.properties.PARK_ID}
						position={{ lat: park.geometry.coordinates[1], lng: park.geometry.coordinates[0] }}
						onClick={() => {
							console.log("Clicked");
							setSelectedPark(park);
						}}
					/>
				))}
				{selectedPark && (
					<InfoWindow
						position={{
							lat: selectedPark.geometry.coordinates[1],
							lng: selectedPark.geometry.coordinates[0]
						}}
						onCloseClick={() => setSelectedPark(null)}
					>
						<div>
							<h5>{selectedPark.properties.NAME}</h5>
							<p>{selectedPark.properties.DESCRIPTIO}</p>
						</div>
					</InfoWindow>
				)}
			</GoogleMap>
		</div>
	);
}

export default withScriptjs(withGoogleMap(Map));
