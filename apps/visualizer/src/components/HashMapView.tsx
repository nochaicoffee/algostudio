interface HashMapViewProps {
  hashMap: Record<string, number>;
}

export function HashMapView({ hashMap }: HashMapViewProps) {
  const entries = Object.entries(hashMap);

  if (entries.length === 0) {
    return (
      <div className="hashmap-view">
        <h4>Hash Map</h4>
        <p className="hashmap-empty">empty</p>
      </div>
    );
  }

  return (
    <div className="hashmap-view">
      <h4>Hash Map</h4>
      <div className="hashmap-entries">
        {entries.map(([key, value]) => (
          <div key={key} className="hashmap-entry">
            <span className="hashmap-key">{key}</span>
            <span className="hashmap-arrow">&rarr;</span>
            <span className="hashmap-value">{value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
