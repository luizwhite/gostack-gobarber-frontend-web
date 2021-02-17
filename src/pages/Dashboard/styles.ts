import styled from 'styled-components';
import { shade } from 'polished';

import ArrowLeftIcon from '../../assets/ArrowLeftIcon.svg';
import ArrowRightIcon from '../../assets/ArrowRightIcon.svg';
// import { rootColors } from '../../styles/global';

export const Container = styled.div``;

export const Header = styled.header`
  padding: 32px 0;
  background-color: var(--header-bg);
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;

  > img {
    height: 80px;
  }

  button {
    margin-left: auto;
    background: transparent;
    border: 0;

    svg {
      color: var(--gray-default);
      width: 20px;
      height: 20px;
    }
  }

  div a:hover {
    opacity: 0.7;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 80px;

  img {
    width: 56px;
    height: 56px;

    border-radius: 50%;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-left: 16px;
    line-height: 24px;

    span {
      color: var(--link-color);
    }

    strong {
      color: var(--button-bg);
    }
  }
`;

export const Content = styled.main`
  max-width: 1120px;
  margin: 64px auto;
  display: flex;
`;

export const Schedule = styled.div`
  flex: 1;
  margin-right: 120px;

  h1 {
    font-size: 36px;
  }

  span {
    display: flex;
    align-items: center;
  }

  p {
    display: flex;
    align-items: center;
    margin-top: 8px;

    color: var(--button-bg);
    font-weight: 400;

    span + span::before {
      content: '';
      width: 1px;
      height: 12px;
      background-color: var(--button-bg);
      margin: 0 8px;
    }
  }
`;

export const NextAppointment = styled.div`
  margin-top: 64px;

  > strong {
    color: var(--gray-default);
    font-size: 20px;
    font-weight: 400;
  }

  div {
    display: flex;
    align-items: center;
    margin-top: 24px;
    padding: 16px 24px;
    background: #3e3b47;

    border-radius: 10px;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 80%;
      width: 1px;

      background-color: var(--button-bg);

      left: 0;
      top: 10%;
    }

    img {
      width: 80px;
      height: 80px;

      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 20px;
    }

    span {
      display: flex;
      align-items: center;
      margin-left: auto;

      color: var(--gray-default);

      svg {
        margin-right: 8px;
        color: var(--button-bg);
      }
    }
  }
`;

export const Section = styled.section`
  margin-top: 48px;

  > strong {
    display: block;
    padding-bottom: 16px;
    margin-bottom: 16px;

    border-bottom: 1px solid #3e3b47;

    color: var(--gray-default);
    font-size: 20px;
    line-height: 26px;
  }

  > p {
    color: var(--gray-default);
  }
`;

export const Appointment = styled.div`
  display: flex;
  align-items: center;

  span {
    display: flex;
    align-items: center;
    margin-left: auto;
    width: 70px;

    color: var(--link-color);

    svg {
      margin-right: 8px;
      color: var(--button-bg);
    }
  }

  div {
    display: flex;
    align-items: center;
    flex: 1;
    margin-left: 24px;
    padding: 16px 24px;
    background: #3e3b47;

    border-radius: 10px;

    img {
      width: 56px;
      height: 56px;

      border-radius: 50%;
    }

    strong {
      margin-left: 24px;
      color: #fff;
      font-size: 16px;
    }
  }

  & + div {
    margin-top: 16px;
  }
`;

export const Calendar = styled.aside`
  width: 380px;

  .DayPicker {
    border-radius: 0.6rem;
  }

  .DayPicker-wrapper {
    padding-bottom: 0;
    background: #3e3b47;
    border-radius: 0.6rem;
  }

  .DayPicker,
  .DayPicker-Month {
    width: 100%;
  }

  .DayPicker-NavButton {
    color: #999591 !important;
  }

  .DayPicker-NavButton--prev {
    background: url(${ArrowLeftIcon}) no-repeat center;
    right: auto;
    left: 1.5rem;
    margin-right: 0;
  }

  .DayPicker-NavButton--next {
    background: url(${ArrowRightIcon}) no-repeat center;
  }

  .DayPicker-Month {
    border-collapse: separate;
    border-spacing: 8px;
    margin: 1rem 0 0 0;
    padding: 16px;
    background-color: #28262e;
    border-radius: 0 0 10px 10px;
  }

  .DayPicker-Caption {
    margin-bottom: 1rem;
    padding: 0 1rem;
    color: #f4ede8;

    > div {
      text-align: center;
    }
  }

  .DayPicker-Weekday {
    color: #666360;
  }

  .DayPicker-Day {
    width: 2.5rem;
    height: 2.5rem;
  }

  .DayPicker-Day--available:not(.DayPicker-Day--outside) {
    background: #3e3b47;
    border-radius: 0.6rem;
  }

  .DayPicker:not(.DayPicker--interactionDisabled)
    .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover {
    background: ${shade(0.2, '#3e3b47')};
  }

  .DayPicker-Day--today {
    font-weight: normal;
    color: #fff;
  }

  .DayPicker-Day--disabled {
    color: #666360;
    background: transparent !important;
  }

  .DayPicker-Day--selected {
    background: #ff9000 !important;
    border-radius: 0.6rem;
    color: #232129 !important;
  }
`;
