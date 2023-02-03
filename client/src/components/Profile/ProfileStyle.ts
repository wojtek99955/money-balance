import styled from "styled-components";
import { device } from "../../assets/devices.js";

export const DeleteAccountBtn = styled.button`
  background-color: #e65016;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  padding: 0.7rem 1.4rem;
`;

export const ProfileWrapper = styled.div`
  input {
    border-radius: 8px;
    padding: 0.5rem;
    border: ${({ theme }) => `2px solid ${theme.colors.grey}`};
    font-size: 1rem;
  }
`;

export const UsernameContainer = styled.div`
  margin-bottom: 2rem;
`;
export const Username = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  strong {
    font-size: 1.2rem;
    padding: 1rem 0;
  }
  button {
    border: ${({ theme }) => `2px solid ${theme.colors.main.default}`};
    background-color: ${({ theme }) => theme.colors.main.default};
    color: white;
    font-size: 1rem;
    padding: 0.5rem 1.4rem;
    border-radius: 8px;
    cursor: pointer;
    width: 5rem;
  }
`;

export const EditUsernameContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem 0;
  button {
    border: ${({ theme }) => `2px solid ${theme.colors.main.default}`};
    color: black;
    background-color: transparent;
    font-size: 1rem;
    padding: 0.5rem 1.4rem;
    border-radius: 8px;
    cursor: pointer;
    width: 5rem;

    &:hover {
      background-color: ${({ theme }) => theme.colors.main.default};
      color: white;
    }
  }
`;

export const RouteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;

  @media ${device.tablet} {
    flex-direction: row;
  }
`;
