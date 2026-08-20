import re

with open("components/sections/Numbers.tsx", "r") as f:
    content = f.read()

# Add useState import
if "import { useState } from \"react\";" not in content:
    content = content.replace('"use client";\n', '"use client";\n\nimport { useState } from "react";\n')

# Add state
if "const [isExpanded, setIsExpanded] = useState(false);" not in content:
    content = content.replace("export default function Numbers() {\n", "export default function Numbers() {\n  const [isExpanded, setIsExpanded] = useState(false);\n")

# Replace the image block
old_image_block = """          <div className="mb-10 flex justify-center">
            <div className="relative h-64 w-64 sm:h-80 sm:w-80 overflow-hidden rounded-full border-4 border-white/10 shadow-[0_0_80px_rgba(251,191,36,0.2)] glass">
              <Image 
                src="/main.png" 
                alt="My beautiful girl" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>"""

new_image_block = """          <div className="mb-10 flex justify-center">
            <motion.div 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative w-64 sm:w-80 aspect-[4/5] overflow-hidden rounded-2xl border-4 border-white/10 shadow-[0_0_80px_rgba(251,191,36,0.2)] glass cursor-pointer"
              onClick={() => setIsExpanded(true)}
            >
              <Image 
                src="/main.png" 
                alt="My beautiful girl" 
                fill 
                className="object-cover"
                priority
              />
            </motion.div>
          </div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsExpanded(false)}
                className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 cursor-zoom-out"
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.9, opacity: 0 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative max-w-full max-h-full rounded-xl overflow-hidden shadow-2xl ring-1 ring-white/20"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img 
                    src="/main.png" 
                    alt="My beautiful girl" 
                    className="max-w-[90vw] max-h-[90vh] object-contain"
                  />
                  
                  <button 
                    onClick={() => setIsExpanded(false)}
                    className="absolute top-4 right-4 bg-black/50 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-md transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>"""

content = content.replace(old_image_block, new_image_block)

with open("components/sections/Numbers.tsx", "w") as f:
    f.write(content)

print("Updated Numbers.tsx")
