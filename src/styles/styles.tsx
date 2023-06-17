'use client';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Body = styled.body`
  margin: 0px;
  padding: 0px;
  outline: none;
  box-sizing: border-box;
`;

export { Title, Body, Container };
