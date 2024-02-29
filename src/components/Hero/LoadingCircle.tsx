export default function LoadingCircle() {
  // Define the radius of the circle
  const radius = 250; // This should be less than half the width/height of the SVG
  const strokeWidth = 2; // The stroke width you want for the circle
  const circumference = 2 * Math.PI * radius; // The circumference of the circle

  return (
    <svg
      className="loading-circle"
      width={radius * 2 + strokeWidth} // Width of the SVG canvas
      height={radius * 2 + strokeWidth} // Height of the SVG canvas
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${radius * 2 + strokeWidth} ${radius * 2 + strokeWidth}`} // Set viewBox to accommodate the entire circle and its stroke
    >
      <circle
        cx={radius + strokeWidth / 2} // Center x-coordinate of the circle
        cy={radius + strokeWidth / 2} // Center y-coordinate of the circle
        r={radius} // Radius of the circle
        fill="none"
        stroke="#00cc45"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        strokeLinecap="round" // For rounded stroke ends
      />
    </svg>
  );
}
