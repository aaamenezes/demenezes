import Section from '@/components/designSysyem/Section';
import { Menu } from 'lucide-react';
import { useCallback, useState } from 'react';
import Navigation from '.';
import Button from '../../base/Button';

export default function NavigationStory() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpenMenu(currentState => !currentState);
  }, []);

  return (
    <>
      <Section
        heading="Default (diminua a tela e use o botão para abrir o menu mobile)"
        backgroundColor="var(--color-neutral-900)"
      >
        <Navigation isOpenMenu={isOpenMenu} toggleMenu={toggleMenu} />
        <Button onClick={toggleMenu}>
          <Menu />
        </Button>
      </Section>
    </>
  );
}
