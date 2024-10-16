class ConcreteCommand extends Command {
    constructor(polyline, layer) {
        super();
        this.polyline = polyline;
        this.layer = layer;
    }

    execute() {
        this.layer.add(this.polyline);
        this.layer.draw();
    }

    undo() {
        this.polyline.remove();
        this.layer.draw();
    }
}