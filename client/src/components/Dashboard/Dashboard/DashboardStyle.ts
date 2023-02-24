import styled from "styled-components";
import { device } from "../../../assets/devices.js";

export const Title = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.title};
  }
  p {
    color: ${({ theme }) => theme.colors.grey};
  }
`;

export const TopSection = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const RouteWrapper = styled.div`
  width: 100%;
`;
export const InputContainer = styled.div`
  width: 14rem;
  display: none;
  input {
    display: block;
    border-radius: 12px;
    border: none;
    width: 100%;
    padding: 0.4rem;
  }
  @media ${device.laptop} {
    display: block;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  z-index: 100;

  span {
    font-weight: 600;
    display: none;
    @media ${device.tablet} {
      display: block;
    }
  }
  img {
    height: 100%;
    width: 100%;
    border-radius: 50%;
    object-fit: cover;
    object-position: center;
    color: transparent;
  }
`;

export const RecentOperations = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;

export const AvatarContainer = styled.div`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  position: relative;
  overflow: hidden;
  background-color: white;
`;

export const TopSectionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 2rem;
`;
