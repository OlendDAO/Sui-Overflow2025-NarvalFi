"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronUp, Wallet } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState } from "react"

const VaultProtocolCard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Card className={cn(
      "relative overflow-hidden backdrop-blur-sm bg-background/80 border border-border/50 shadow-lg",
      "before:absolute before:inset-0 before:rounded-xl before:border before:border-border/20 before:bg-gradient-to-r before:from-transparent before:to-indigo-500/10 before:opacity-0 before:transition",
      "hover:before:opacity-100"
    )}>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Wallet className="h-5 w-5" />
          </div>
          <CardTitle className="text-xl">Vault Protocol</CardTitle>
        </div>
        <CardDescription className="mt-2 text-sm text-muted-foreground">
          User-facing interface for borrowing with single-asset collateral and debt.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleTrigger className="flex w-full items-center justify-between text-sm font-medium text-primary hover:underline">
            {isOpen ? "Hide details" : "Show details"}
            {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-2 space-y-2">
            <div className="rounded-md bg-muted/50 p-3 text-sm">
              Vault Protocol offers high Loan-to-Value (LTV) ratios with low liquidation penalties. The system is designed with deep integration capabilities for smart collateral and debt management. Users can borrow against their assets while maintaining optimal capital efficiency and minimizing risk exposure.
            </div>
            <AnimatedSparkles />
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}

const AnimatedSparkles = () => (
  <div className="h-40 w-px absolute bottom-4 right-8 z-40 bg-gradient-to-b from-transparent via-cyan-500 to-transparent animate-pulse">
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
          className="inline-block bg-primary"
        />
      ))}
    </div>
  )
}

export default VaultProtocolCard; 