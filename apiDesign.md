FASE 0

    Detalle del evento
        GET /event/owner/{hash}
            respuesta: 
            event:{
                title: string,
                description: string,
                deadline: date,
                creationDate: date,
                maxGuest: number,
                minGuest: number,
                status: string,
                owner: user,
                hashOwner:string,
                hashGuest: string,
                guests: list<user>
            }
            user:{
                name:string,
                mail : string
            }
        GET /event/guest/{hash}
            respuesta: 
            event:{
                title: string,
                description: string,
                deadline: date,
                creationDate: date,
                maxGuest: number,
                minGuest: number,
                status: string,
                owner: user,
                hashOwner:string,
                hashGuest: string,
                guests: list<user>
            }
            user:{
                name:string,
                mail : string
            }

        POST /event
        body:{
         title: string,
                description: string,
                deadline: date,
                creationDate: date,
                maxGuest: number,
                minGuest: number,
                status: string,
                owner: user,
                hashOwner:string,
                hashGuest: string,
                guests: list<user>
            }
            user:{
                name:string,
                mail : string
            }

        PUT /event/{hashOwner}
                {
                    status:string
                }
        
        
Fase 1

Join
POST /event/{hashGuest}/guest
            {
                name:string,
                mail:string
            }
    