export function randomColor() {
  const colors = [
    "hsl(230, 25%, 50%)", // Darker Dusty Periwinkle (still with a cool blue tone)
    "hsl(210, 15%, 60%)", // Darker Mist Blue Gray (softer, no purple)
    "hsl(340, 20%, 70%)", // Muted Powder Rose (less vibrant pink)
    "hsl(300, 10%, 40%)", // Darker Ash Plum (more of a muted mauve)
    "hsl(200, 15%, 50%)", // Cool Steel Blue (deep but soft blue)
    "hsl(220, 15%, 45%)", // Faded Slate Blue (blue-gray without purple)
    "hsl(220, 20%, 35%)", // Darker Faded Steel Blue (moody blue-gray)
    "hsl(240, 8%, 30%)", // Charcoal Wash (soft charcoal gray)
    "hsl(350, 10%, 55%)", // Subtle Cool Blush (muted, less bright pink)
  
    "hsl(5, 20%, 60%)",   // Dusty Coral Pink
    "hsl(0, 15%, 65%)",   // Muted Rosewood
    "hsl(10, 25%, 70%)",  // Warm Clay Pink
    "hsl(345, 20%, 65%)", // Gentle Blush Pink
    "hsl(355, 18%, 58%)", // Faded Rosé
    ];

  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}