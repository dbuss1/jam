import React, { useEffect, useState } from "react";

const Waveform = ({ url }) => {
  const [samples, setSamples] = useState([]);

  useEffect(() => {
    async function fetchSamples() {
      const resp = await fetch(url);
      const json = await resp.json();
      setSamples(json.samples);
    }
    fetchSamples();
  }, [url]);

  return (
    <div className="waveform">
      {samples.join(", ")}
      <style jsx>{`
        .waveform {
        }
      `}</style>
    </div>
  );
};

export default Waveform;
