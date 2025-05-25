"use client"

import { motion, useAnimation } from "framer-motion"
import React, { useEffect, useState } from "react"
import { Coins, ChevronDown } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const SmartCollateralDebtCard: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false)
  const controls = useAnimation()

  useEffect(() => {
    controls.start({
      pathLength: [0, 1],
      opacity: 1,
      transition: {
        pathLength: {
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse"
        },
        opacity: {
          duration: 0.2
        }
      }
    })
  }, [controls])

  return (
    <Card className="relative overflow-hidden backdrop-blur-md border border-border/50 bg-background/70 shadow-[0px_0px_8px_0px_rgba(248,248,248,0.25)_inset]">
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full">
          <motion.rect
            x="0"
            y="0"
            width="100%"
            height="100%"
            rx="8"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeOpacity="0.2"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={controls}
            className="text-primary"
          />
        </svg>
      </div>
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-full flex items-center justify-center bg-primary/10 p-3 text-primary">
            <Coins className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-foreground">Smart Collateral & Smart Debt</h3>
            <p className="mt-2 text-sm text-muted-foreground">Maximize leverage effective liquidity with our innovative DeFi solution.</p>
            <motion.div 
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <p className="mt-4 text-sm text-foreground/80">Collateral and debt can act as DEX LP, earning trading fees while maximizing your leverage. This innovative approach enables up to 39x effective liquidity compared to traditional DeFi protocols, giving you more capital efficiency and higher potential returns.</p>
            </motion.div>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-4 flex items-center text-xs font-medium text-primary hover:text-primary/80 transition-colors"
            >
              {isExpanded ? "Show less" : "Learn more"}
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="ml-1 h-4 w-4" />
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
  <div className="absolute inset-0 pointer-events-none [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,transparent_60%,#000_100%)]">
    {[...Array(12)].map((_, i) => (
      <motion.span
        key={`star-${i}`}
        animate={{
          top: `calc(${Math.random() * 100}% + ${Math.random() * 2 - 1}px)`,
          left: `calc(${Math.random() * 100}% + ${Math.random() * 2 - 1}px)`,
          opacity: Math.random(),
          scale: [1, 1.2, 0],
        }}
        transition={{
          duration: Math.random() * 2 + 4,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          position: "absolute",
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          width: `2px`,
          height: `2px`,
          borderRadius: "50%",
          zIndex: 1,
        }}
        className="inline-block bg-primary/50"
      />
    ))}
  </div>
)

export default SmartCollateralDebtCard; 