import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 150px;
  width: 100%;
  max-width: calc((100% - 15px) / 2);
  border-radius: 16px;
  background-color: black;
  margin-top: 8px;
  padding: 12px;
  box-shadow: 0 4px 3px 0 rgba(0, 0, 0, 0.2);

  @media (min-width: 768px) {
    height: 170px;
  }

  h3.title {
    font-size: 14px;
    text-align: right;
    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  svg {
    font-size: 24px;
  }

  &.mood {
    background-color: #fde7e3;

    svg {
      color: #f24f25;
    }

    span,
    h2,
    h3 {
      color: #f24f25;
    }
  }

  &.food-intake {
    background-color: #fea482;
    svg {
      color: #fff6e1;
    }

    span,
    h2,
    h3 {
      color: #fff6e1;
    }
  }

  &.regular-medication {
    background-color: #e0f4fb;

    svg {
      color: #12acdd;
    }

    span,
    h2,
    h3 {
      color: #12acdd;
    }
  }

  &.fluid-intake {
    background-color: #e3d8fe;
    svg {
      color: #6446b9;
    }

    span,
    h2,
    h3 {
      color: #6446b9;
    }
  }
`

const Area = styled.div`
  display: flex;
  justify-content: space-between;
`

export const Header = styled(Area)``

export const Footer = styled(Area)`
  align-items: flex-end;

  svg {
    cursor: pointer;
  }
`

export const TooltipArea = styled.div`
  width: 240px;
`
