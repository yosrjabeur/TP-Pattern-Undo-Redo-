class UndoManager {
    constructor() {
        this.redoStack = new Stack()
        this.undoStack = new Stack()
    }

    executeCommand(commande) {
        commande.execute()
        this.undoStack.push(commande)
    }

    undo() {
        if (this.canUndo()) {
            this.element = this.undoStack.pop()
            this.element.undo()
            this.redoStack.push(this.element)
        }
    }
    canUndo() {
        if (this.undoStack.isEmpty()) {
            return false
        } else {
            return true
        }
    }
    redo() {
        if (this.canRedo()) {
            this.element = this.redoStack.pop()
            this.element.execute()
            this.undoStack.push(this.element)
        }
    }

    canRedo() {
        if (this.redoStack.isEmpty()) {
            return false
        } else {
            return true
        }
    }
    
}