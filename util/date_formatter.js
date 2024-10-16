// dateFormatter.js
export const formatTimestampToReadableTime = (timestamp) => {
  const date = new Date(timestamp);
  return date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  });
};

// Usage example in another file
// import { formatTimestampToReadableTime } from './dateFormatter.js';
// const readableTime = formatTimestampToReadableTime("2024-10-16T10:12:40.598422067Z");
// console.log(readableTime);
