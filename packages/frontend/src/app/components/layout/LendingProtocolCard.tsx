"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Coins, ChevronDown, ChevronUp } from "lucide-react"

const LendingProtocolCard: React.FC = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Card
      className={
        "relative w-full max-w-md mx-auto overflow-hidden backdrop-blur-sm border border-[rgba(255,255,255,0.10)] dark:bg-[rgba(40,40,40,0.70)] bg-gray-100/80 shadow-[2px_4px_16px_0px_rgba(248,248,248,0.06)_inset] group"
      }
    >
      <AnimatedBorder />
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10 text-primary">
            <Coins className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground mb-2">Lending Protocol</h3>
            <p className="text-sm text-muted-foreground mb-3">Standardized yield-bearing tokens that represent your share in the lending protocol.</p>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: expanded ? "auto" : 0,
                opacity: expanded ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-2 pb-1 text-sm text-foreground/80">
                ERC4626 is a standard for tokenized vaults that provides a standardized API for yield-bearing tokens. Our fTokens implement this standard, making them easily composable with other DeFi protocols and applications.
              </div>
            </motion.div>
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex items-center text-xs text-primary mt-2 hover:text-primary/80 transition-colors"
            >
              {expanded ? (
                <>
                  <span>Show less</span>
                  <ChevronUp className="ml-1 h-3 w-3" />
                </>
              ) : (
                <>
                  <span>Learn more</span>
                  <ChevronDown className="ml-1 h-3 w-3" />
                </>
              )}
            </button>
          </div>
        </div>
      </CardContent>
      <AnimatedSparkles />
    </Card>
  )
}

const AnimatedBorder = () => {
  return (
    <div className="absolute inset-0 z-[-1] pointer-events-none">
      <div className="absolute inset-px rounded-xl bg-gradient-to-r from-indigo-500 to-blue-500 opacity-20 animate-pulse" />
    </div>
  )
}

const AnimatedSparkles = () => (
  <div className="h-40 w-px absolute top-20 right-8 m-auto z-[-1] bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-move">
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
      {[...Array(12)].map((_, i) => (
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
          className="inline-block bg-primary/60"
        />
      ))}
    </div>
  )
}

export default LendingProtocolCard; 