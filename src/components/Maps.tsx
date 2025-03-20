import { useEffect, useRef, useState } from "react";

interface Coordinates {
  lat: number;
  lng: number;
}

// 🔹 Replace with your actual store's coordinates
const storeLocation: Coordinates = { lat: 40.712776, lng: -74.005974 }; // Example: New York City

const Map: React.FC = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService | null>(null);
  const [directionsRenderer, setDirectionsRenderer] = useState<google.maps.DirectionsRenderer | null>(null);
  const [userLocation, setUserLocation] = useState<string>("");
  const [error, setError] = useState<string>(""); // State for error message

  useEffect(() => {
    if (typeof window !== "undefined" && window.google) {
      const map = new google.maps.Map(mapRef.current as HTMLDivElement, {
        center: storeLocation,
        zoom: 15,
      });

      new google.maps.Marker({
        position: storeLocation,
        map,
        title: "Our Store",
      });

      setDirectionsService(new google.maps.DirectionsService());
      const renderer = new google.maps.DirectionsRenderer();
      renderer.setMap(map);
      setDirectionsRenderer(renderer);
    }
  }, []);

  const calculateRoute = () => {
    if (!userLocation.trim()) {
      setError("Please enter your location.");
      return;
    }

    if (directionsService && directionsRenderer) {
      setError(""); // Clear any previous error
      directionsService.route(
        {
          origin: userLocation,
          destination: storeLocation,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            directionsRenderer.setDirections(result);
            setError(""); // Clear error if successful
          } else {
            setError("Could not find directions. Please try again with a valid location.");
          }
        }
      );
    }
  };

  return (
    <div>
      <h2>Find Us</h2>
      <input
        type="text"
        placeholder="Enter your location"
        value={userLocation}
        onChange={(e) => setUserLocation(e.target.value)}
        style={{ display: "block", marginBottom: "5px" }}
      />
      <button onClick={calculateRoute}>Get Directions</button>

      {/* Error Message */}
      {error && <p style={{ color: "red", marginTop: "5px" }}>{error}</p>}

      <div ref={mapRef} style={{ height: "400px", width: "100%", marginTop: "10px" }}></div>
    </div>
  );
};

export default Map;
