import { useState, useEffect } from 'react';

export default () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(
      position => setLat(position.coords.latitude), // to update the state we use the setstate
      err => setErrorMessage(err.message)
    );
  },[]);

  return [lat, errorMessage];
}