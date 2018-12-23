class Shape {
    constructor(ctx, x = 0, y = 0) {
        this.c = ctx;
        this.x = x;
        this.y = y;
        this.xVel = 0;
        this.yVel = 0;
        this._hasGravity = false;
    }
    calc = () => {
        if (this._hasGravity) {
            this.yVel += 0.25;
            this.y += this.yVel;
        }
    };
    addGravity = () => {
        this._hasGravity = true;
    };
}

export default Shape;
