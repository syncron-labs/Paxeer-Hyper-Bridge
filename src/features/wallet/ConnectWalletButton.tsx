import { ConnectWalletButton as ConnectWalletButtonInner } from '@hyperlane-xyz/widgets';
import { useMultiProvider } from '../chains/hooks';
import { useStore } from '../store';

export function ConnectWalletButton() {
  const multiProvider = useMultiProvider();
  const { originChainName } = useStore((s) => ({
    originChainName: s.originChainName,
  }));

  const { setShowEnvSelectModal, setIsSideBarOpen } = useStore((s) => ({
    setShowEnvSelectModal: s.setShowEnvSelectModal,
    setIsSideBarOpen: s.setIsSideBarOpen,
  }));

  return (
    <ConnectWalletButtonInner
      multiProvider={multiProvider}
      onClickWhenUnconnected={() => setShowEnvSelectModal(true)}
      onClickWhenConnected={() => setIsSideBarOpen(true)}
      className="rounded-lg bg-transparent border border-primary-400 hover:bg-primary-900/30 text-white px-4 py-2 transition-colors duration-200"
      countClassName="bg-primary-500 text-white"
      chainName={originChainName}
    />
  );
}
