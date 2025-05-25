"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Layers, ChevronDown, ChevronUp } from "lucide-react"

const NarvalDEXCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Card className="relative overflow-hidden backdrop-blur-sm bg-background/80 border border-border/50 shadow-md group">
      <AnimatedBorder />
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="rounded-full p-2 bg-primary/10 text-primary">
            <Layers className="h-5 w-5" />
          </div>
          <CardTitle className="text-xl">Narval DEX</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground mb-4">Hybrid AMM, concentrated liquidity, allows collateral and debt to act as DEX liquidity, gas efficient, dynamic fees.</p>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex items-center text-sm text-primary hover:underline">
            {isOpen ? "Show less" : "Learn more"}
            {isOpen ? <ChevronUp className="h-4 w-4 ml-1" /> : <ChevronDown className="h-4 w-4 ml-1" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 text-sm text-muted-foreground">
            <p>Narval DEX uses a hybrid automated market maker model that intelligently allocates liquidity across different price ranges. This approach maximizes capital efficiency while maintaining deep liquidity for traders. Collateral and debt can act as DEX LP, earning trading fees while maximizing your leverage. Gas efficient and supports dynamic fees.</p>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
      <AnimatedSparkles />
    </Card>
  )
}

const AnimatedBorder = () => {
  return (
    <div className="absolute inset-0 rounded-xl z-[-1]">
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-primary/50 animate-pulse" />
      <div className="absolute inset-y-0 right-0 w-[2px] bg-primary/50 animate-pulse" />
      <div className="absolute inset-x-0 top-0 h-[2px] bg-primary/50 animate-pulse" />
      <div className="absolute inset-y-0 left-0 w-[2px] bg-primary/50 animate-pulse" />
    </div>
  )
}

const AnimatedSparkles = () => (
  <div className="h-40 w-px absolute top-20 right-10 m-auto z-40 bg-gradient-to-b from-transparent via-primary/50 to-transparent animate-pulse">
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
          className="inline-block bg-primary"
        />
      ))}
    </div>
  )
}

export default NarvalDEXCard; 