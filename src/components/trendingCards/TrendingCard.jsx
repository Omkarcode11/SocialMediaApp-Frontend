import React from "react";
import "./TrendingCard.css";

function TrendingCard({
  title = "Trending Hash Tag",
  tags = ["love", "happy", "sad", "sun"],
}) {
  return (
    <div className="trending-card-layout">
      <h1 className="trending-tags-title">{title}</h1>
      {tags.map((item, i) => (
        <div className="trending-tags">{item}</div>
      ))}
    </div>
  );
}

export default TrendingCard;
