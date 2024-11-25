import styled from "styled-components";

interface ComponentAProps {
  name: string;
}

const StyledButton = styled.button
`background-color: black;
font-size: 40px;
color: white;
`;

const ComponentA = (props: ComponentAProps) => {
  return (
    <div>

        {/* Inline Style Css in react */}

      <p style={{color:"red", fontSize:"40px"}}>Halo,{props.name}</p>
      <p>Test</p>
      <h3>Test Lagi</h3>
      <StyledButton>Custom Button</StyledButton>
    </div>
  );
};

export default ComponentA;
