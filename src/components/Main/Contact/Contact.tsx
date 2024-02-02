import styled from 'styled-components';
import CustomAnchor from '../../common/CustonAnchor/CustonAnchor';
import IconGithub from '../../common/Icon/IconGithub';
import IconBaekjoon from '../../common/Icon/IconBaekjoon';

const ContactSection = styled.div`
  overflow: hidden;

  & .wrap {
    display: flex;
    justify-content: space-between;
    padding: 100px 6rem;
  }

  & .wrap .title {
    font-size: var(--heading-2);
    line-height: 1;
  }

  & .info .box {
    padding-bottom: 30px;
  }

  & .info .box:nth-child(2) {
    padding-bottom: 60px;
  }

  & .info .box h6 {
    color: var(--color-grey);
    line-height: 1.8;
    font-size: 18px;
    padding-bottom: 5px;
  }

  & .info .box a p {
    font-size: 18px;
  }

  & .info .archive a,
  & .info .archive .flex-box {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }

  & .info .archive a {
    margin-right: 30px;
  }

  & .info .archive a:last-child {
    margin-right: 0;
  }

  & .info .archive a svg {
    width: 30px;
  }

  & .info .archive a p {
    padding-left: 15px;
  }

  & a:hover p {
    text-decoration: underline;
  }

  & .wrap .copyright {
    color: var(--color-grey);
    line-height: 1.8;
    font-size: 18px;
  }

  @media screen and (max-width: 860px) {
    & .wrap {
      padding: 40px 2rem;
      flex-direction: column;
    }

    & .wrap .info {
      padding-top: 40px;
    }
  }

  @media screen and (max-width: 430px) {
    & .wrap {
      padding: 60px 1rem;
    }

    & .wrap .info {
      padding-top: 40px;
    }

    & .info .box {
      padding-bottom: 25px;
    }

    & .info .box h6 {
      font-size: 16px;
      padding-bottom: 8px;
    }

    & .info .box a p {
      font-size: 16px;
    }

    & .info .archive a svg {
      width: 24px;
    }

    & .info .archive a p {
      padding-left: 10px;
    }

    & .wrap .copyright {
      font-size: 14px;
    }
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <div className="wrap">
        <h1 className="title">
          PLEASE
          <br />
          CONTACT
        </h1>
        <div className="info">
          <div className="box">
            <h6>CONTACT</h6>
            <CustomAnchor href="mailto:yuziwoo@naver.com">
              <p>yuziwoo@naver.com</p>
            </CustomAnchor>
          </div>
          <div className="box archive">
            <h6>ARCHIVE</h6>
            <div className="flex-box">
              <CustomAnchor href="https://github.com/yuziwoo">
                <IconGithub color="white" />
                <p>GITHUB</p>
              </CustomAnchor>
              <CustomAnchor href="https://www.acmicpc.net/user/yuziwoo">
                <IconBaekjoon color="white" />
                <p>BEAKJOON</p>
              </CustomAnchor>
            </div>
          </div>
          <p className="copyright">© 2024 YUJIWOO. All Rights Reserved.</p>
        </div>
      </div>
    </ContactSection>
  );
};

export default Contact;
