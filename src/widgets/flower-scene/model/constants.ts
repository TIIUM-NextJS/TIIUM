export const CAMERA_POSITION = [0, 4, 15] as const;
export const FIXED_POLAR_ANGLE = Math.acos(
  CAMERA_POSITION[1] /
    Math.hypot(CAMERA_POSITION[0], CAMERA_POSITION[1], CAMERA_POSITION[2]),
);
