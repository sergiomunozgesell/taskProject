


export class Validator{

    static getPort():number {
        const value = process.env.PORT;
        const port = Number(value);
        if(!value || isNaN(port) || port <= 0){
            throw new Error("La variable de entorno PORT no esta definida correctamente");
        }
        
        return port;

    }

}