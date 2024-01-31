import styled from 'styled-components';
import CustomButton from '../../common/CustomButton/CustomButton';
import HeaderProgress from './HeaderProgress/HeaderProgress';

const StyledHeader = styled.header`
  z-index: var(--z-index-header);
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  & nav {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5.3rem 4rem 0;
  }

  & nav .logo {
    font-size: 18px;
    line-height: 1;
    font-weight: 600;
  }

  & nav button {
    padding: 1rem;
  }

  & nav button .line {
    display: block;
    width: 22px;
    height: 2px;
    background-color: white;
  }

  & nav button .line:first-child {
    margin-bottom: 8px;
  }

  @media screen and (max-width: 860px) {
    & nav {
      padding: 3rem 4rem 0;
    }
  }

  @media screen and (max-width: 430px) {
    & nav {
      padding: 2rem 2rem 0;
    }
    & nav .logo {
      font-size: 16px;
    }
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <HeaderProgress />
      <nav>
        <p className="logo">JIWOO YU</p>
        <CustomButton>
          <span className="line"></span>
          <span className="line"></span>
        </CustomButton>
      </nav>
    </StyledHeader>
  );
};

export default Header;
