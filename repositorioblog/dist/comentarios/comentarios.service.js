"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComentariosService = void 0;
const common_1 = require("@nestjs/common");
let ComentariosService = class ComentariosService {
    constructor() {
        this.comentarios = [];
    }
    getComentarios() {
        return this.comentarios;
    }
    postComentarios(comentario, idpost, autor) {
        const common = { id: this.comentarios.length + 1, comentario, idpost, autor };
        this.comentarios.push(common);
        return common;
    }
    deleteComentario(id) {
        const comentarioIndex = this.comentarios.findIndex(comentario => comentario.id === id);
        if (comentarioIndex === -1) {
            throw new common_1.NotFoundException('Comentario no encontrado');
        }
        const deletedComentario = this.comentarios.splice(comentarioIndex, 1);
        return deletedComentario;
    }
    updateComentario(id, updatedComentario) {
        const comentarioIndex = this.comentarios.findIndex(comentario => comentario.id === id);
        if (comentarioIndex === -1) {
            throw new common_1.NotFoundException('Comentario no encontrado');
        }
        const comentarioToUpdate = this.comentarios[comentarioIndex];
        if (!comentarioToUpdate) {
            throw new common_1.NotFoundException('Comentario no encontrado');
        }
        const updatedComentarioObject = {
            ...comentarioToUpdate,
            ...updatedComentario
        };
        this.comentarios[comentarioIndex] = updatedComentarioObject;
        return updatedComentarioObject;
    }
};
exports.ComentariosService = ComentariosService;
exports.ComentariosService = ComentariosService = __decorate([
    (0, common_1.Injectable)()
], ComentariosService);
//# sourceMappingURL=comentarios.service.js.map