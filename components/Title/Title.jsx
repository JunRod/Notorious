"use client";

import { useFollowPointer } from "@hooks/useFollowePointer";
import {
  Container,
  Cursor,
  Ious,
  Line,
  Notor,
  TitleComponent,
  TitleComponents3DEffect,
  TitleComponentsBlur,
} from "@styles/TitleStyles";
import { useRef } from "react";
import Words from "./Words";

const Title = () => {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const coords = {
    x: x + 620,
    y,
  };

  return (
    <Cursor ref={ref}>
      <Container top={true}>
        <TitleComponents3DEffect
          style={{
            backgroundImage: `radial-gradient(farthest-side at ${coords.x}px ${coords.y}px, #FFE5FF 20%, #FF9CFF, #773D77)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Words />
        </TitleComponents3DEffect>

        <TitleComponent>
          <Words />
        </TitleComponent>

        <TitleComponentsBlur
          style={{
            backgroundImage: `radial-gradient(farthest-side at ${coords.x}px ${coords.y}px, #FFBCFF 20%, #AA42AA, #570057)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Words />
        </TitleComponentsBlur>
      </Container>

      <Container>
        <TitleComponents3DEffect
          style={{
            backgroundImage: `radial-gradient(farthest-side at ${coords.x}px ${coords.y}px, #FFE5FF 20%, #FF9CFF, #773D77)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Words />
        </TitleComponents3DEffect>

        <TitleComponent>
          <Words />
        </TitleComponent>

        <TitleComponentsBlur
          style={{
            backgroundImage: `radial-gradient(farthest-side at ${coords.x}px ${coords.y}px, #FFBCFF 20%, #AA42AA, #410041)`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          <Words />
        </TitleComponentsBlur>
      </Container>

      <Line
        style={{
          backgroundImage: `radial-gradient(closest-corner at ${coords.x}px 5px, #fff1ff 20%, #ffa9ff 30%, rgba(255,255,255,0) 50%)`,
        }}
      />

      <Line
        blur={true}
        style={{
          backgroundImage: `radial-gradient(closest-corner at ${coords.x}px 5px, rgb(255, 242, 255) 20%, #ffa9ff 30%, rgba(255,255,255,0) 70%)`,
        }}
      />

      <Line
        blur={true}
        style={{
          backgroundImage: `radial-gradient(closest-corner at ${coords.x}px 5px, #fff8ff 15%, #ffa9ff 25%, rgba(255,255,255,0) 30%)`,
        }}
      />
    </Cursor>
  );
};

export default Title;