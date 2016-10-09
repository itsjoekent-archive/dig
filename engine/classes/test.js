class TestPlayer extends PhysicsEntity {
  constructor() {
    super(new Vector2(0, 532), new Vector2(CELL, CELL * 2), 10, 1);
  }

  update(world) {
    // // this.addForce(new Vector2(1, 1));
    // this.addForce(new Vector2(0, -GRAVITY.y));
  }

  render(pipeline) {
    const ctx = pipeline.ctx;
    const camera = pipeline.camera;
    pipeline.ctx.fillStyle = 'red';
    ctx.fillRect(camera.getCenterX(), camera.getCenterY(), camera.sx(this.dimensions.x), camera.sy(this.dimensions.y));
  }
}