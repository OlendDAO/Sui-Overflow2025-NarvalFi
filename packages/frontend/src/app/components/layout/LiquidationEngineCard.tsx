"use client"

import { motion, useAnimation } from "framer-motion"
import React, { useEffect, useState } from "react"
import { Droplets, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const LiquidationEngineCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      },
    })
  }, [controls])

  return (
    <Card
      className="relative overflow-hidden backdrop-blur-md border border-border/50 bg-background/70 transition-all duration-300 group"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={controls}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-[0.03] dark:opacity-[0.07]" />
        <div className="absolute inset-0 border border-indigo-500/20 rounded-lg" />
      </motion.div>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg text-primary">
            <Droplets className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-1">Liquidation Engine</h3>
            <p className="text-sm text-muted-foreground">Advanced liquidation mechanism inspired by Uniswap technology</p>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden mt-2"
            >
              <div className="pt-2 border-t border-border/50 mt-2">
                <p className="text-sm text-foreground/80">Our liquidation engine features batch/range liquidation capabilities, allowing for ultra-high LTV ratios with ultra-low penalties. The system is gas efficient and entirely market-driven, ensuring optimal performance even during high volatility periods.</p>
              </div>
            </motion.div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-3 flex items-center text-xs text-primary hover:text-primary/80 transition-colors"
            >
              {isExpanded ? "Hide details" : "Show details"}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-4 w-4 ml-1" />
              </motion.div>
            </button>
          </div>
        </div>
      </CardContent>
      <AnimatedSparkles />
    </Card>
  )
}

const AnimatedSparkles = () => (
  <div className="h-40 w-px absolute top-20 right-10 m-auto z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-move">
    <div className="w-10 h-32 top-1/2 -translate-y-1/2 absolute -left-10">
      <Sparkles />
    </div>
  </div>
)

const Sparkles = () => {
  const randomMove = () => Math.random() * 2 - 1
  const randomOpacity = () => Math.random()
  const random = () => Math.random()

  return (
    <div className="absolute inset-0">
      {[...Array(8)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0],
          }}
          transition={{
            duration: random() * 2 + 4,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            borderRadius: "50%",
            zIndex: 1,
          }}
          className="inline-block bg-primary/70"
        />
      ))}
    </div>
  )
}

export default LiquidationEngineCard; 