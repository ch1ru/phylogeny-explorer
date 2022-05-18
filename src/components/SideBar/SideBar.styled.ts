import styled from 'styled-components';
import Icon from 'components/Icon';
import { SmallText } from 'components/Typography';

interface WrapperProps {
  isOpen: boolean;
}

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  z-index: 1;
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.black};
  color: ${props => props.theme.white};
  filter: drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.14))
    drop-shadow(0px 3px 1px rgba(0, 0, 0, 0.12))
    drop-shadow(0px 1px 5px rgba(0, 0, 0, 0.2));
`;

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-gap: ${props => props.theme.spacer}px;
  align-items: center;
  padding: ${props => props.theme.smallSpacer}px;
  background: ${props => props.theme.primary};
  color: ${props => props.theme.white};
`;

export const HeaderIcon = styled(Icon)`
  color: ${props => props.theme.black};
`;

export const Content = styled.div`
  display: grid;
  grid-gap: ${props => props.theme.largeSpacer}px;
  padding: ${props => props.theme.largeSpacer}px
    ${props => props.theme.xLargeSpacer}px;
`;

export const Section = styled.div``;

export const Authority = styled(SmallText)`
  color: ${props => props.theme.vlgrey};
`;

export const Buttons = styled.div`
  display: grid;
  grid-auto-flow: column;
`;
