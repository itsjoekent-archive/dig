class Camera {
  /**
   * Create a camera.
   * The Camera is used to shift coordinates from the internal grid to the external canvas.
   * @param {canvas} canvas - HTML5 Canvas.
   * @param {number} width - Camera width.
   * @param {number} height - Camera height.
   */
  constructor(canvas, width, height, player) {
    this.canvas = canvas;
    this.width = width;
    this.height = height;
    this.player = player;

    this.tx = this.translateX.bind(this);
    this.ty = this.translateY.bind(this);
    this.sx = this.scaleX.bind(this);
    this.sy = this.scaleY.bind(this);

    this.getCenterX = this.getCenterX.bind(this);
    this.getCenterY = this.getCenterY.bind(this);
    this.calculate = this.recalculate.bind(this);

    this.recalculate();
  }

  recalculate() {
    this.cachedCenterX = (this.canvas.width / 2) - (this.player.dimensions.x / 2);
    this.cachedCenterY = (this.canvas.height / 2) - (this.player.dimensions.y / 2);
    this.cachedScaleX = (this.canvas.width / this.width);
    this.cachedScaleY = (this.canvas.height / this.height);
  }

  getCenterX() {
    return this.cachedCenterX;
  }

  getCenterY() {
    return this.cachedCenterY;
  }

  /**
   * Scale the value based on this grid.
   * Useful for variables like width which are relative to the actual coordinate.
   * @param {number} x
   */
  scaleX(x) {
    return this.cachedScaleX * x;
  }

  /**
   * Translate the given X value based on this grid.
   * @param {number} x
   */
  translateX(x) {
    return this.scaleX(x - this.player.location.x) + this.getCenterX();
  }

  /**
   * Scale the value based on this grid.
   * Useful for variables like height which are relative to the actual coordinate.
   * @param {number} y
   */
  scaleY(y) {
    return this.cachedScaleY * y;
  }

  /**
   * Translate the given Y value based on this grid.
   * @param {number} y
   */
  translateY(y) {
    return this.scaleY(this.player.location.y - y) + this.getCenterY();
  }
}
