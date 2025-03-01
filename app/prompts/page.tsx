'use client'
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import { HiClipboardCopy, HiCheck } from "react-icons/hi";

const mainCategories: Record<string, Record<string, string[]>> = {
  "T-Shirts": {
    "T-Shirt Design Prompts": [
      "Create a design for printing featuring a minimalist Earth illustration with 'Protect Our Planet' in stylish typography.",
      "Create a design for printing of a tree with roots forming a recycling symbol.",
      "Create a design for printing showcasing a mountain landscape with 'Nature is Home' in handwritten script.",
      "Create a design for printing with an abstract pattern of green leaves and blue water waves.",
      "Create a design for printing featuring a cute Earth character wearing sunglasses and smiling.",
      "Create a design for printing of a minimal line-art whale with 'Save the Oceans' written beneath it.",
      "Create a design for printing inspired by a vintage eco-conscious badge with 'Go Green, Stay Clean.'",
      "Create a design for printing featuring a futuristic eco-city with solar panels and wind turbines.",
      "Create a design for printing of a silhouette of a rainforest inside an animal shape.",
      "Create a design for printing with a watercolor-style tree growing inside a lightbulb.",
      "Create a design for printing featuring 'FEARLESS' in glitch-style bold typography.",
      "Create a design for printing of the word 'HUSTLE' in a metallic 3D effect.",
      "Create a design for printing showcasing 'Dream Big' in retro neon-style typography.",
      "Create a design for printing of 'GRIND MODE' with a shattered text effect.",
      "Create a design for printing with 'SUCCESS' written in minimal, futuristic font.",
      "Create a design for printing featuring 'Stay Wild' in a brush-stroke calligraphy style.",
      "Create a design for printing of 'WORK HARD' written in a street graffiti-inspired font.",
      "Create a design for printing with 'LIFE IS SHORT' inside a barcode-style design.",
      "Create a design for printing of 'NO LIMITS' with 3D isometric typography.",
      "Create a design for printing showcasing 'BREAK THE RULES' in distorted, dynamic text."
    ],
    "Streetwear & Urban Fashion T-Shirt Designs 🏙": [
    "Create a design for printing featuring a graffiti-style spray paint can with neon splashes.",
    "Create a design for printing of a masked urban character with a hoodie and chains.",
    "Create a design for printing showcasing a sneaker with a futuristic cyberpunk glow.",
    "Create a design for printing of a street-style monkey wearing sunglasses and headphones.",
    "Create a design for printing with bold text saying 'No Rules' in a glitchy style.",
    "Create a design for printing featuring a roaring tiger with a chain around its neck.",
    "Create a design for printing of a city skyline at night with neon lights.",
    "Create a design for printing showcasing an urban skater mid-air doing a trick.",
    "Create a design for printing inspired by hip-hop album covers with a unique color scheme.",
    "Create a design for printing of a cyberpunk-style gas mask with holographic reflections."
  ],
  "Motivational & Inspirational T-Shirt Designs ": [
    "Create a design for printing featuring 'Stay Strong' in bold, brush-stroke typography.",
    "Create a design for printing of a mountain peak with 'Keep Climbing' written below.",
    "Create a design for printing showcasing 'Never Give Up' with a shattered effect.",
    "Create a design for printing of a rising sun with 'New Day, New Opportunities.'",
    "Create a design for printing with 'One More Rep' for gym and fitness lovers.",
    "Create a design for printing featuring a lion’s face with 'Lead with Strength.'",
    "Create a design for printing of an eagle soaring with 'Sky’s the Limit.'",
    "Create a design for printing showcasing 'Dream Big, Work Hard' in a retro style.",
    "Create a design for printing of a silhouette of a runner with 'Push Beyond Limits.'",
    "Create a design for printing featuring 'Progress Not Perfection' in minimal typography."
  ],
  },
 "Mugs": {
    "Minimalist & Aesthetic Mugs": [
      "Create a design for printing with a single-line abstract face drawing in black on a pastel background.",
      "Create a design for printing featuring a minimal coffee cup outline with 'But First, Coffee' in a sleek font.",
      "Create a design for printing showcasing a soft watercolor mountain landscape in neutral tones.",
      "Create a design for printing of delicate golden geometric shapes forming a unique pattern.",
      "Create a design for printing featuring a minimalist moon phase cycle with a calming color scheme.",
      "Create a design for printing of simple hand-drawn leaves and floral elements in black and white.",
      "Create a design for printing showcasing a minimalist cat stretching, designed in a sleek style.",
      "Create a design for printing featuring a monochrome palm tree silhouette with a beachy vibe.",
      "Create a design for printing of a line-art city skyline with a modern, clean look.",
      "Create a design for printing showcasing the words 'Breathe & Relax' in soft, handwritten typography."
    ],
    "Streetwear & Urban Graffiti Mugs": [
      "Create a design for printing featuring bold graffiti text saying 'Stay Real' with neon colors.",
      "Create a design for printing showcasing a spray-paint effect with dripping ink typography.",
      "Create a design for printing of a hip-hop inspired skull wearing headphones in an urban style.",
      "Create a design for printing featuring an abstract graffiti explosion with vibrant shades.",
      "Create a design for printing of a skateboarder mid-air with a dynamic motion effect.",
      "Create a design for printing showcasing the phrase 'Hustle Hard' with a street-style font.",
      "Create a design for printing featuring a colorful cityscape in a graffiti-inspired brushstroke style.",
      "Create a design for printing of a masked street artist with paint splatters.",
      "Create a design for printing showcasing a gritty, urban 'No Limits' sign with bold typography.",
      "Create a design for printing featuring a stylized sneaker with abstract graffiti elements."
    ],
    "Cyberpunk & Futuristic Mugs": [
      "Create a design for printing featuring a neon cyberpunk skyline with glowing signs.",
      "Create a design for printing showcasing a futuristic robot face with glowing blue eyes.",
      "Create a design for printing of a glitch-effect digital skull with cyber-inspired patterns.",
      "Create a design for printing featuring a holographic-style circuit board design.",
      "Create a design for printing showcasing a neon samurai warrior with a futuristic city backdrop.",
      "Create a design for printing of a cyberpunk-style female character with neon streaks in her hair.",
      "Create a design for printing featuring a VR headset with a reflection of a futuristic world.",
      "Create a design for printing showcasing a digital rain effect with a hacker-style aesthetic.",
      "Create a design for printing of a cyber ninja holding two glowing katanas.",
      "Create a design for printing featuring a 'Neon Dreams' typography design in a sci-fi style."
    ],
    "Space & Galaxy Mugs": [
      "Create a design for printing featuring a cosmic nebula with a dreamy color gradient.",
      "Create a design for printing showcasing an astronaut floating in deep space with glowing planets.",
      "Create a design for printing of a stylized UFO abducting a cup of coffee.",
      "Create a design for printing featuring a futuristic city floating in outer space.",
      "Create a design for printing showcasing a black hole with light being pulled in.",
      "Create a design for printing of an astronaut sitting on the moon, sipping coffee.",
      "Create a design for printing featuring the phrase 'Lost in Space' with planetary elements.",
      "Create a design for printing showcasing a cosmic tiger with glowing star-like patterns on its fur.",
      "Create a design for printing of a stylized rocket ship launching into the galaxy.",
      "Create a design for printing featuring a dreamy pastel-colored milky way design."
    ],
    "Dark & Gothic Mugs": [
      "Create a design for printing featuring a dark skull with intricate floral details.",
      "Create a design for printing showcasing a raven sitting on a tombstone under the moonlight.",
      "Create a design for printing of a gothic Victorian-style clock with vines creeping around it.",
      "Create a design for printing featuring a misty graveyard scene with a haunting glow.",
      "Create a design for printing showcasing 'Stay Creepy' in gothic calligraphy.",
      "Create a design for printing of a vampire biting a red rose with dark, dramatic lighting.",
      "Create a design for printing featuring an eerie candle-lit scene with shadowy figures.",
      "Create a design for printing showcasing a gothic cathedral silhouette against a blood-red sky.",
      "Create a design for printing of an abandoned haunted house with crows flying around.",
      "Create a design for printing featuring a dark angel with glowing red eyes and black wings."
    ],
    "Pop Art & Retro Mugs": [
      "Create a design for printing featuring a pop art comic-style explosion with 'BOOM!' in the center.",
      "Create a design for printing showcasing a vintage cassette tape with neon splashes.",
      "Create a design for printing of a classic 80s arcade machine with pixel art elements.",
      "Create a design for printing featuring a stylish retro sunglasses reflection of a beach.",
      "Create a design for printing showcasing a neon-lit palm tree with a vaporwave aesthetic.",
      "Create a design for printing of a funky disco ball with a colorful glow.",
      "Create a design for printing featuring a pixelated heart with the phrase 'Level Up.'",
      "Create a design for printing showcasing a retro television with static glitch effects.",
      "Create a design for printing of a 70s-style van with bright, psychedelic patterns.",
      "Create a design for printing featuring a vinyl record with a rainbow soundwave pattern."
    ],
    "Motivational & Inspirational Mugs": [
      "Create a design for printing featuring 'Start Your Day Strong' with a rising sun.",
      "Create a design for printing of a mountain peak with 'Keep Climbing.'",
      "Create a design for printing showcasing 'Hard Work Pays Off' in bold typography.",
      "Create a design for printing of a roaring lion with 'Lead with Strength.'",
      "Create a design for printing featuring 'Dream Big, Work Hard' in a futuristic font.",
      "Create a design for printing of an astronaut reaching for the stars with 'Limitless.'",
      "Create a design for printing showcasing 'Wake Up & Hustle' with an alarm clock icon.",
      "Create a design for printing featuring 'Success is a Journey' with a road illustration.",
      "Create a design for printing of a cup of coffee with 'Fuel for Greatness.'",
      "Create a design for printing showcasing 'Focus, Grind, Repeat' in a stylish layout."
    ],
    "Anime & Manga Mugs": [
      "Create a design for printing featuring a chibi-style anime girl holding a coffee cup.",
      "Create a design for printing of a shadowy anime warrior with glowing red eyes.",
      "Create a design for printing showcasing a cute anime fox drinking tea.",
      "Create a design for printing of a manga panel with 'Coffee First, Battles Later.'",
      "Create a design for printing featuring a cyberpunk anime character in a futuristic city.",
      "Create a design for printing of a samurai fox with cherry blossoms in the background.",
      "Create a design for printing showcasing a kawaii-style coffee mug with a smiling face.",
      "Create a design for printing featuring 'Shonen Energy' in fiery calligraphy.",
      "Create a design for printing of a mecha robot holding a giant coffee mug.",
      "Create a design for printing showcasing a mysterious anime assassin with a katana."
    ],
  },
  "Caps": {
    "Streetwear & Hip-Hop Caps": [
      "Create a design for printing featuring bold graffiti-style typography with a city skyline.",
      "Create a design for printing showcasing a neon skull wearing headphones in a street art style.",
      "Create a design for printing of a roaring lion with a hip-hop crown and golden chains.",
      "Create a design for printing featuring a spray paint can with an explosion of colors.",
      "Create a design for printing showcasing a skateboard with flames and a grunge texture.",
      "Create a design for printing of a hand holding a vintage microphone with hip-hop elements.",
      "Create a design for printing featuring a DJ turntable with musical notes floating around.",
      "Create a design for printing showcasing the word 'VIBES' in a glitchy street-style font.",
      "Create a design for printing of a masked urban ninja with glowing blue eyes.",
      "Create a design for printing featuring a roaring tiger with lightning effects."
    ],
    "Gaming & Esports Caps": [
      "Create a design for printing featuring a futuristic gaming controller with neon effects.",
      "Create a design for printing showcasing a pixelated 'GAME OVER' sign with a glitch effect.",
      "Create a design for printing of a cyberpunk-style gamer wearing a VR headset.",
      "Create a design for printing featuring a retro arcade machine with electric sparks.",
      "Create a design for printing showcasing a first-person shooter character with a sniper rifle.",
      "Create a design for printing of a gaming mouse with a trail of speed effects.",
      "Create a design for printing featuring a battle royale-inspired skull with crossed swords.",
      "Create a design for printing showcasing a 'Respawn Ready' text with a futuristic theme.",
      "Create a design for printing of a glowing power button symbol with circuit board elements.",
      "Create a design for printing featuring a joystick with a 'Level Up' banner."
    ],
    "Minimalist & Aesthetic Caps": [
      "Create a design for printing featuring a simple black and white mountain outline.",
      "Create a design for printing showcasing a tiny crescent moon and stars in a minimal style.",
      "Create a design for printing of a single brushstroke forming a wolf silhouette.",
      "Create a design for printing featuring a small, delicate lotus flower sketch.",
      "Create a design for printing showcasing a simple wave line representing the ocean.",
      "Create a design for printing of a geometric deer head with thin golden lines.",
      "Create a design for printing featuring the word 'Balance' in an elegant, thin font.",
      "Create a design for printing showcasing an abstract spiral representing energy and focus.",
      "Create a design for printing of a clean, modern infinity loop design.",
      "Create a design for printing featuring a soft gradient sunset with a bird silhouette."
    ],
    "Motivational & Quote-Based Caps": [
      "Create a design for printing featuring 'Dream Big, Hustle Hard' in a bold font.",
      "Create a design for printing showcasing 'Never Give Up' with a lightning bolt icon.",
      "Create a design for printing of 'Born to Win' in a brushstroke-style font.",
      "Create a design for printing featuring 'Stay Humble' with a simple underline.",
      "Create a design for printing showcasing 'Success is a Mindset' in a modern layout.",
      "Create a design for printing of 'Fearless' with an eagle silhouette.",
      "Create a design for printing featuring 'Grind Now, Shine Later' with a dynamic font.",
      "Create a design for printing showcasing 'Believe & Achieve' with a rising sun effect.",
      "Create a design for printing of 'No Pain, No Gain' with a gym dumbbell icon.",
      "Create a design for printing featuring 'Good Vibes Only' in a colorful aesthetic."
    ],
    "Pakistani Cultural & Patriotic Caps": [
      "Create a design for printing featuring the crescent and star with a calligraphy effect.",
      "Create a design for printing showcasing a truck art-inspired floral pattern.",
      "Create a design for printing of the word 'Pakistan' in traditional Urdu script.",
      "Create a design for printing featuring Minar-e-Pakistan with a grunge effect.",
      "Create a design for printing showcasing an artistic rendering of Quaid-e-Azam's portrait.",
      "Create a design for printing of the phrase 'Dil Dil Pakistan' in a stylized font.",
      "Create a design for printing featuring a cricket bat and ball with 'Game On!' written.",
      "Create a design for printing showcasing a green and white wave pattern representing the flag.",
      "Create a design for printing of a truck art peacock with vibrant colors.",
      "Create a design for printing featuring a traditional ajrak pattern in a minimal style."
    ],
    "Nature & Wildlife Caps": [
      "Create a design for printing featuring a roaring bear in a mountain landscape.",
      "Create a design for printing showcasing an eagle in flight with sharp details.",
      "Create a design for printing of a silhouette of a deer standing in a forest.",
      "Create a design for printing featuring a wolf howling at the moon.",
      "Create a design for printing showcasing a hummingbird hovering near a flower.",
      "Create a design for printing of a tiger's eyes with a dark jungle background.",
      "Create a design for printing featuring a whale diving into the ocean.",
      "Create a design for printing showcasing a desert scene with a lone cactus.",
      "Create a design for printing of a dolphin jumping over the waves.",
      "Create a design for printing featuring a cherry blossom branch with petals falling."
    ],
    "Futuristic & Sci-Fi Caps": [
      "Create a design for printing featuring a UFO hovering over a city at night.",
      "Create a design for printing showcasing a robotic hand with glowing circuits.",
      "Create a design for printing of a cybernetic wolf with neon highlights.",
      "Create a design for printing featuring a planet with a futuristic space station.",
      "Create a design for printing showcasing a time traveler stepping into a portal.",
      "Create a design for printing of a holographic skull with digital effects.",
      "Create a design for printing featuring a robotic samurai with energy swords.",
      "Create a design for printing showcasing an astronaut floating in a galaxy.",
      "Create a design for printing of a futuristic city skyline with flying cars.",
      "Create a design for printing featuring an alien face with glowing eyes."
    ],
    "Abstract & Geometric Caps": [
      "Create a design for printing featuring a pattern of interconnected triangles.",
      "Create a design for printing showcasing an optical illusion spiral.",
      "Create a design for printing of a broken glass effect with light reflections.",
      "Create a design for printing featuring a three-dimensional cube pattern.",
      "Create a design for printing showcasing a maze-like geometric design.",
      "Create a design for printing of an abstract face formed with simple lines.",
      "Create a design for printing featuring a colorful, overlapping circle pattern.",
      "Create a design for printing showcasing a futuristic grid with neon lights.",
      "Create a design for printing of a surreal melting clock design.",
      "Create a design for printing featuring a hypnotic vortex swirl."
    ],
  },
};

const Index = () => {
  const [expandedMainCategory, setExpandedMainCategory] = useState<string | null>(null);
  const [expandedSubCategories, setExpandedSubCategories] = useState<string[]>([]);
  const [copiedPrompts, setCopiedPrompts] = useState<string[]>([]);

  const toggleMainCategory = (category: string) => {
    setExpandedMainCategory((prev) => (prev === category ? null : category));
    setExpandedSubCategories([]);
  };

  const toggleSubCategory = (subCategory: string) => {
    setExpandedSubCategories((prev) =>
      prev.includes(subCategory) ? prev.filter((cat) => cat !== subCategory) : [...prev, subCategory]
    );
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedPrompts((prev) => [...prev, text]);
      alert("Copied to clipboard!");
      setTimeout(() => {
        setCopiedPrompts((prev) => prev.filter((p) => p !== text));
      }, 2000);
    } catch (err) {
      alert("Failed to copy. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#4c6489] to-[#001534] dark:from-neutral-900 dark:to-neutral-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-8">
        <motion.div className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-extraipbold text-neutral-100 dark:text-neutral-50">AI Prompt Collection</h1>
          <p className="text-neutral-100 dark:text-neutral-400 max-w-2xl mx-auto text-lg">
            Select a category to explore design prompts.
          </p>
        </motion.div>

        <motion.div className="grid gap-6">
          {Object.entries(mainCategories).map(([mainCategory, subCategories]) => (
            <motion.div key={mainCategory} className="rounded-2xl overflow-hidden border bg-gray-200 dark:bg-neutral-900 shadow-sm">
              <motion.button
                onClick={() => toggleMainCategory(mainCategory)}
                className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
              >
                <span className="text-lg font-medium text-neutral-900 dark:text-neutral-100">{mainCategory}</span>
                <motion.div animate={{ rotate: expandedMainCategory === mainCategory ? 180 : 0 }}>
                  <IoChevronDown className="w-5 h-5 text-neutral-500" />
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {expandedMainCategory === mainCategory && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t">
                    <div className="grid gap-4 p-4">
                      {Object.entries(subCategories).map(([subCategory, prompts]) => (
                        <motion.div key={subCategory} className="rounded-xl border bg-white dark:bg-neutral-800">
                          <motion.button
                            onClick={() => toggleSubCategory(subCategory)}
                            className="w-full px-6 py-3 flex justify-between items-center text-left hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
                          >
                            <span className="text-md font-medium text-neutral-900 dark:text-neutral-100">{subCategory}</span>
                            <motion.div animate={{ rotate: expandedSubCategories.includes(subCategory) ? 180 : 0 }}>
                              <IoChevronDown className="w-5 h-5 text-neutral-500" />
                            </motion.div>
                          </motion.button>

                          <AnimatePresence>
                            {expandedSubCategories.includes(subCategory) && (
                              <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="border-t">
                                <div className="grid gap-2 p-4">
                                  {prompts.map((prompt) => (
                                    <motion.div key={prompt} className="group p-4 rounded-xl bg-neutral-50 dark:bg-neutral-800 flex justify-between items-center gap-4">
                                      <span className="text-neutral-700 dark:text-neutral-300 text-sm sm:text-base">{prompt}</span>
                                      <button
                                        onClick={() => copyToClipboard(prompt)}
                                        className="shrink-0 p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 hover:bg-white dark:hover:bg-neutral-800"
                                        aria-label="Copy to clipboard"
                                      >
                                        {copiedPrompts.includes(prompt) ? <HiCheck className="w-5 h-5" /> : <HiClipboardCopy className="w-5 h-5" />}
                                      </button>
                                    </motion.div>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Index;