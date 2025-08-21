import Image from 'next/image';
import Link from 'next/link';
import { ConnectWalletButton } from '../../features/wallet/ConnectWalletButton';

const Logo = '/images/logos/Logo_text.webp';

export function Header() {
  return (
    <header className="w-full px-4 py-3 sm:px-6 lg:px-8">
      <div className="container-box mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-12 w-48">
            <Image 
              src={Logo} 
              alt="Paxeer Bridge" 
              fill 
              style={{ objectFit: 'contain' }}
              priority
            />
          </div>
        </Link>
        <div className="flex items-center gap-4">
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
}
