import * as React from "react";
import Skeleton, {
  SkeletonStyleProps,
  SkeletonTheme
} from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

export interface SkeletonProps extends SkeletonStyleProps {
  intent?: "primary";
  size?: "sm" | "md" | "lg";
  className?: string;
  borderRadius?: string;
  width?: string;
  height?: string;
  color?: string;
  circle?: boolean;
  count?: number;
  containerClassName?: string;
}
const SkeletonComponent = ({
  circle,
  className,
  borderRadius,
  width,
  height,
  color,
  containerClassName,
  count
}: SkeletonProps) => {
  return (
    <SkeletonTheme borderRadius={borderRadius}>
      <Skeleton
        containerClassName={containerClassName}
        className={className}
        baseColor={color}
        count={count}
        width={width}
        height={height}
        circle={circle}
      />
    </SkeletonTheme>
  );
};

export default SkeletonComponent;
