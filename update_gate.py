import re

with open("components/ui/Gate.tsx", "r") as f:
    content = f.read()

# Add states
old_states = """  const [bypassed, setBypassed] = useState(false);
  const [mounted, setMounted] = useState(false);"""
new_states = """  const [bypassed, setBypassed] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(false);"""

content = content.replace(old_states, new_states)

# Add lock screen logic
old_return = "  if (!mounted || now === null) return null;\n"
new_return = """  if (!mounted || now === null) return null;

  if (!isAuthenticated) {
    return (
      <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink text-white overflow-hidden">
        <SVGPets />
        <Balloons count={10} className="z-[-1]" />
        
        <div className="relative z-10 glass p-8 rounded-3xl max-w-sm w-full mx-4 text-center">
          <h2 className="font-display text-3xl font-bold mb-2 text-gradient">Locked</h2>
          <p className="text-white/60 mb-6 text-sm">Enter the secret password to continue</p>
          <form onSubmit={(e) => {
            e.preventDefault();
            if (password.toLowerCase() === "yaashiloml") {
              setIsAuthenticated(true);
            } else {
              setError(true);
              setTimeout(() => setError(false), 2000);
            }
          }}>
            <input 
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-sun transition-all mb-4"
            />
            {error && <p className="text-red-400 text-sm mb-4">Incorrect password</p>}
            <button 
              type="submit"
              className="w-full bg-sun text-ink font-bold py-3 rounded-xl hover:bg-sun/90 transition-colors"
            >
              Enter
            </button>
          </form>
        </div>
      </div>
    );
  }
"""

content = content.replace(old_return, new_return)

with open("components/ui/Gate.tsx", "w") as f:
    f.write(content)

print("Updated Gate.tsx")
