import { useRef, AnimationEvent, CSSProperties } from "react";
import { LoaderProps } from "./loader.types";
import {
  FirstSquare,
  SecondSquare,
  ThirdSquare,
  Wrapper,
  expandHeight,
} from "./loader.styles";

const restartAnimation = (animation: Animation) => {
  animation.cancel();
  animation.play();
};

export const Loader = ({
  stepDuration = 0.3,
  size = 50,
  squareGap = 3,
  backgroundColor = "rgba(255,255,255,1)",
  squareBorderRadius = "3px",
}: LoaderProps) => {
  const squares = useRef<HTMLDivElement[]>([]);

  const onAnimationEnd = (e: AnimationEvent<HTMLDivElement>) => {
    const { animationName } = e;

    if (animationName.includes(expandHeight.getName())) {
      if (!squares.current) return;
      squares.current.forEach((square) => {
        if (square) square.getAnimations().forEach(restartAnimation);
      });
    }
  };

  return (
    <Wrapper
      style={
        {
          "--loader-size": `${size}px`,
          "--loader-square-gap": `${squareGap}px`,
          "--loader-background-color": backgroundColor,
          "--loader-square-border-radius": squareBorderRadius,
          "--loader-time-unit": `${stepDuration}s`,
        } as CSSProperties
      }
    >
      <FirstSquare ref={(el) => el && squares.current.push(el)} />
      <SecondSquare
        ref={(el) => el && squares.current.push(el)}
        onAnimationEnd={onAnimationEnd}
      />
      <ThirdSquare ref={(el) => el && squares.current.push(el)} />
    </Wrapper>
  );
};
