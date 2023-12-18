import styled from "styled-components";

export const HeroContainer = styled.div`
.hero-mobile{
  display: none;
}

.hero-desktop{
  display: block;
}
  @media screen and (max-width: 800px) {
    .hero-mobile{
  display: block;
}

.hero-desktop{
  display: none;
}
  }
`;
