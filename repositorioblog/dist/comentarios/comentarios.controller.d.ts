import { ComentariosService } from './comentarios.service';
import { CreateComenarioDto } from './dto/comentario.dto';
export declare class ComentariosController {
    private comentariosService;
    constructor(comentariosService: ComentariosService);
    getComentarios(): import("./comentarios.entity").Comentario[];
    postComentarios(newComentario: CreateComenarioDto): {
        id: number;
        comentario: string | undefined;
        idpost: string | undefined;
        autor: string | undefined;
    };
    deleteComentario(id: string): import("./comentarios.entity").Comentario[];
    updateComentario(id: string, updatedComentario: CreateComenarioDto): Promise<{
        id: number | undefined;
        comentario: string | undefined;
        idpost: string | undefined;
        autor: string | undefined;
    }>;
}
