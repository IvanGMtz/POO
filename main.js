/**
*
* ! Set y Get: Metodos de encapsulamiento*
* ? class (clase): Plantilla utilizada para la creacion de un objeto que contiene sus caracteristicas*
* ? this: palabra clave utilizada en una clase para aclarar lo que hace parte de si misma. Ejemplo: sus atributos*
* ? Atributo publico: Caracteristicas de un objeto que es accesible desde cualquier lugar*
* ? Atributo privado: Caracteristicas de un objeto que es accesible dentro de la clase*
*/


class lapiz{
    color;
    tamano;
    #material;
    #mina;

    /**
    * Todo *
    * @param {lapiz} *Clase padre, plantilla guía para la creación de dicho objeto 
    * @param {color} *Atributo publico
    * @param {tamano} *Atributo publico
    * @param {material} *Atributo privado
    * @param {mina} *Atributo privado
     */

    constructor({color="Amarillo", tamano="5cm", material="madera", mina="carbon"}){
        this.color = color;
        this.tamano = tamano;
        this.#material = material;
        this.#mina = mina;
    }

    /**
     * 
     * @param {p1} *Atributo(Mina) tomado por el metodo GET para poder ingresar al metodo estatico 
     * @param {p2} *Atributo tomado(Material) por el metodo GET para poder ingresar al metodo estatico
     */
    static afilar(p1, p2){
        return `el lapiz de ${p2}, se le afiló la mina de ${p1}`;
    }
    


    set setMaterial(material){
        this.#material=material;
    }

    get getMaterial(){
        return this.#material;
    }

    set setMina(mina){
        this.#mina=mina;
    }

    get getMina(){
        return this.#mina;
    }
    
}


let lapiz1 = new lapiz({material:"diamente"});
let lapiz2 = new lapiz("Rojo", "10cm", "oro", "grafito");

/**
 * @param {.setMina} *el metodo SET permite modificar el atributo en cuestion
 * @param {.getMina} *el metodo GET permite acceder el atributo en cuestion
 */

lapiz1.setMina = "Tinta"


console.log(lapiz1);
console.log(lapiz2);
console.log(lapiz.afilar(lapiz1.getMina, lapiz1.getMaterial));

/**
 * ! Boligrafo
 * Clase hijo que hereda las propiedades de la clase base o padre(Lapiz)
 */
class boligrafo extends lapiz{
    /**
     * 
     * @param {super} *Palabra reservada para llamar los atributos heredados
     */
    constructor({mina="Metalica"}){
        super({mina});
    }

    /**
     * 
     * @param {static afilar} * "Se hizo polimorfismo", se asemejó a dicho acción adaptando el metodo padre afilar y se volvió a utilizar de diferente manera. 
     */
    static afilar(p1){
        return `Se afiló la mina de ${p1}`;
    }
}

let lapicito = new boligrafo({});
lapicito.setMina="Aluminio";
console.log(lapicito.getMina);
console.log(boligrafo.afilar(lapicito.getMina));