'use client'

import { useCurrentAccount } from '@mysten/dapp-kit'
import { Link } from '@radix-ui/themes'
import Faucet from '@suiware/kit/Faucet'
import { HeartIcon, SearchIcon } from 'lucide-react'
import {
  CONTRACT_PACKAGE_VARIABLE_NAME,
  EXPLORER_URL_VARIABLE_NAME,
} from '../../config/network'
import { packageUrl } from '../../helpers/network'
import { notification } from '../../helpers/notification'
import useNetworkConfig from '../../hooks/useNetworkConfig'
import ThemeSwitcher from '../ThemeSwitcher'
import { Github, Twitter } from 'lucide-react'
import SocialLink from './SocialLink'

const Footer = () => {
  const { useNetworkVariables } = useNetworkConfig()
  const networkVariables = useNetworkVariables()
  const explorerUrl = networkVariables[EXPLORER_URL_VARIABLE_NAME]
  const packageId = networkVariables[CONTRACT_PACKAGE_VARIABLE_NAME]
  const currentAccount = useCurrentAccount()

  return (
    <footer className="z-10 relative mt-16 border-t border-white/10 bg-slate-900/80 backdrop-blur-sm flex flex-col items-center w-full">
      {/* Branding and social links */}
      <div className="max-w-6xl w-full mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          {/* <Image src="/logo.svg" alt="NarvalFi Logo" width={40} height={40} className="h-10 mb-3" /> */}
          <p className="text-sm text-white/60 text-center md:text-left">
            The next generation of DeFi liquidity infrastructure
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <SocialLink 
            icon={<Github className="w-5 h-5" />} 
            href="https://github.com/LaozpGZ/Sui-Overflow2025-NarvalFi" 
            label="GitHub" 
          />
          <SocialLink 
            icon={<Twitter className="w-5 h-5" />} 
            href="https://x.com/narvalfinance" 
            label="Twitter" 
          />
        </div>
      </div>
      {/* Existing functional and community links */}
      <div className="flex w-full flex-col items-center justify-between gap-3 p-3 sm:flex-row sm:items-end">
        <div className="flex flex-row gap-3 lg:w-1/3">
          {currentAccount != null && (
            <>
              <Faucet
                onError={notification.error}
                onSuccess={notification.success}
              />
              <Link
                href={packageUrl(explorerUrl, packageId)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-row items-center gap-1"
                highContrast={true}
              >
                <SearchIcon className="h-4 w-4" />
                <span>Block Explorer</span>
              </Link>
            </>
          )}
        </div>
        <div className="flex flex-grow flex-col items-center justify-center gap-1">
          <div className="flex flex-row items-center justify-center gap-1">
            <span>Built with</span>
            <HeartIcon className="h-4 w-4" />
            <span>by</span>
            <Link
              href="https://github.com/LaozpGZ/Sui-Overflow2025-NarvalFi"
              target="_blank"
              rel="noopener noreferrer"
              highContrast={true}
            >
              @OLend
            </Link>
            <span>·</span>
            <Link
              href="https://github.com/suiware/sui-dapp-starter/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              highContrast={true}
            >
              Support
            </Link>
          </div>
          <div className="text-center text-sm opacity-70">
            SVG graphics, used in NFTs, have been borrowed from{' '}
            <Link
              href="https://github.com/twitter/twemoji"
              target="_blank"
              rel="noopener noreferrer"
              highContrast={true}
            >
              twitter/twemoji
            </Link>
            <br />
            and licensed under{' '}
            <Link
              href="https://creativecommons.org/licenses/by/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              highContrast={true}
            >
              CC-BY 4.0
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-end lg:w-1/3">
          <ThemeSwitcher />
        </div>
      </div>
      {/* Legal and copyright links */}
      <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 w-full max-w-6xl px-4">
        <div className="text-sm text-white/60">
          © {new Date().getFullYear()} NarvalFi. All rights reserved.
        </div>
        <div className="flex gap-6">
          <a href="/terms" className="text-sm text-white/60 hover:text-white transition-colors">Terms</a>
          <a href="/privacy" className="text-sm text-white/60 hover:text-white transition-colors">Privacy</a>
          <a href="https://narval.fi" className="text-sm text-white/60 hover:text-white transition-colors">narval.fi</a>
        </div>
      </div>
      {/* Bottom divider */}
      <div className="w-full border-t border-white/20 mt-4"></div>
    </footer>
  )
}
export default Footer
