export const hexToReadableTime = (hex = "0x670fb678") => {
  // Convert hex to decimal
  const timestamp = parseInt(hex, 16);

  // Create a new Date object
  const date = new Date(timestamp * 1000); // Assuming the hex value represents a Unix timestamp in seconds

  // Format the date to a readable string
  return date.toISOString(); // You can change this to your preferred format
};
