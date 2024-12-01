import styled, { css } from 'styled-components';
import MobileBackgroundImage from 'src/assets/images/mobileBackground.svg';
import DesktopBackgroundImage from 'src/assets/images/desktopBackground.svg';
import { NaeYangKkuTheme } from 'src/style/theme';

export const MainWrap = styled.div<{ isOpen: boolean }>`
  width: calc(100vw - 76px);
  height: calc(100vh - 141px);

  display: flex;
  flex-direction: column;

  background-image: url(${DesktopBackgroundImage});
  background-repeat: no-repeat;
  background-size: cover;

  padding: 73px 38px 68px 38px;

  justify-content: space-evenly;
  gap: 20px;

  p {
    color: rgba(255, 255, 255, 0.8);
    font-family: 'GangwonEdu Modu';
    font-size: 13px;
    font-weight: 400;
    line-height: 22px; /* 169.231% */
  }

  @media (min-width: 1170px) {
    width: calc(100vw - 170px);
    height: calc(100vh - 100px);
    padding: 40px 20px 68px 150px;
    background-image: url(${MobileBackgroundImage});

    p {
      position: absolute;
      top: 94%;

      font-size: 38px;
      left: 17%;
    }
  }

  @media (min-width: 1080px) {
    width: calc(100vw - 140px);
    height: calc(100vh - 188px);
    padding: 140px 20px 48px 120px;
    background-image: url(${MobileBackgroundImage});

    p {
      position: absolute;
      top: 94%;

      font-size: 38px;
      left: 17%;
    }
  }

  ${({ isOpen }) =>
    isOpen &&
    css`
      background-color: rgba(0, 0, 0, 0.5);
    `};
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;

  gap: 8px;
  align-items: flex-start;

  h1 {
    color: #fff;
    font-family: 'GangwonEduSaeeum';
    font-size: 8vw;
    font-weight: 400;
    height: fit-content;
    margin-block-start: 0;
    margin-block-end: 0;
    line-height: 22px;
  }

  @media (min-width: 1170px) {
    gap: 50px;
  }

  @media (min-width: 1080px) {
    h1 {
      font-size: 80px;
    }
  }
`;

export const letterCountSpan = styled.span`
  color: #fff;
  font-family: 'GangwonEduSaeeum';
  font-size: 7vw;
  font-weight: 400;
  width: fit-content;
  letter-spacing: 10px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (min-width: 1080px) {
    font-size: 70px;
  }
`;

export const SocksWrap = styled.div`
  width: 100%;
  height: 60%;
  position: relative;

  @media (min-width: 1170px) {
    width: 85%;
    height: 60%;

    bottom: 10%;
  }

  @media (min-width: 1080px) {
    width: 85%;
    height: 60%;
  }
`;

export const IconWrap = styled.div`
  width: 100%;
  height: fit-content;
  position: absolute;

  @media (min-width: 1170px) {
    width: 100%;
    height: 400px;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;

    span {
      color: #fff;
      text-align: center;
      font-family: 'GangwonEduSaeeum';
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px; /* 122.222% */
    }

    @media (min-width: 1170px) {
      img {
        width: 150px !important;
        height: 150px !important;
      }

      span {
        font-size: 42px;
      }
    }

    @media (min-width: 1080px) {
      img {
        width: 150px !important;
        height: 150px !important;
      }

      span {
        font-size: 42px;
      }
    }
  }
`;

export const Button = styled.div<{ isOwner: boolean }>`
  width: 30%;
  height: 8%;

  border: none;
  border-radius: 40px;
  box-shadow: 0px 4px 24px 0px rgba(0, 0, 0, 0.5);

  background-color: ${({ isOwner }) => (isOwner ? '#776F6B' : NaeYangKkuTheme.secondlyNormal)};

  color: #fff;
  font-family: 'GangwonEduPower';
  font-size: 18px;

  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  gap: 20px;
  line-height: 22px;

  cursor: pointer;

  @media (min-width: 1170px) {
    width: 80%;
    height: 6%;

    position: absolute;
    left: 50%;
    top: 93%;
    transform: translate(-50%, -93%);

    font-size: 48px;
  }

  @media (min-width: 1179px) {
    width: 90%;
  }

  @media (min-width: 1080px) {
    width: 80%;
    height: 6%;

    position: absolute;
    left: 50%;
    top: 93%;
    transform: translate(-50%, -93%);

    font-size: 48px;
  }
`;
