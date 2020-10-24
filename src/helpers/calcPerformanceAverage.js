// First Contentful Paint 15%
// Largest Contentful Paint 25%
// Speed Index 15%
// Time to Interactive 15%
// Total Blocking Time 25%
// Cumulative Layout Shift 5%

export default function (avgScoreArray) {
  const averageScore = (avgScoreArray[0] * 0.15) + (avgScoreArray[1] * 0.25) + (avgScoreArray[2] * 0.15) + (avgScoreArray[3] * 0.15) +  (avgScoreArray[4] * 0.25) + (avgScoreArray[5] * 0.15)
  const finalScore = Math.round(averageScore * 100)
  return finalScore
}