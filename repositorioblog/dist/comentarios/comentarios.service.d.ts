import { Comentario } from './comentarios.entity';
export declare class ComentariosService {
    private comentarios;
    getComentarios(): Comentario[];
    postComentarios(comentario: string | undefined, idpost: string | undefined, autor: string | undefined): {
        id: number;
        comentario: string | undefined;
        idpost: string | undefined;
        autor: string | undefined;
    };
    deleteComentario(id: number): Comentario[];
    updateComentario(id: number, updatedComentario: Partial<Comentario>): {
        id: number | undefined;
        comentario: string | undefined;
        idpost: string | undefined;
        autor: string | undefined;
    };
}
