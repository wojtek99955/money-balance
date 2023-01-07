import styled from "styled-components";

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
  margin-bottom: 2rem;
`;
export const RouteWrapper = styled.div`
  width: 100%;
`;
export const InputContainer = styled.div`
  width: 14rem;
  input {
    display: block;
    border-radius: 12px;
    border: none;
    width: 100%;
    padding: 0.4rem;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;
  span {
    font-weight: 600;
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
  gap: 1rem;
`;

export const AvatarContainer = styled.div`
  border-radius: 50%;
  width: 4rem;
  height: 4rem;
  position: relative;
  overflow: hidden;
  background-color: white;
`;
