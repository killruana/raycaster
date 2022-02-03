import { Vector2 } from "./vector2";

/**
 * @brief A camera
 */
export class Camera {
    /** @brief Position of the camera in the word */
    position: Vector2;

    /** @brief Direction of the camera (where it look in the world) */
    direction: Vector2;

    /** @brief Horizontal field of view, in radians */
    fov: number;

    /**
     * @brief Construct a new camera
     * @param position Position of the camera. (default=Vector2.zero)
     * @param direction Direction of the camera. (default = north)
     * @param fov Horizontal field of view, in radians (default=120°)
     */
    constructor(position?: Vector2, direction?: Vector2, fov?: number) {
        this.position = position !== undefined ? position : Vector2.zero();
        this.direction = direction !== undefined ? direction : new Vector2(0, -1);
        this.fov = fov !== undefined ? fov : 2 * Math.PI / 3; // 120° = 2 Pi / 3
    }

    /**
     * @brief get the direction of the right side of the camera
     * @returns the direction to the left side
     */
    left(): Vector2 {
        return this.direction.rotate_by(-this.fov / 2);
    }
}
