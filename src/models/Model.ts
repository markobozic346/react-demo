

class Show  {
    id: number
    title: string
    image: string
    desc: string
    genres: string[]
    rating: number

    constructor(show){
        this.id= show.id
        this.title= show.name
        this.image= show.image.original
        this.desc= show.summary
        this.genres= show.genres
        this.rating= show.rating.average
        
    }
    get cardInfo() {
        return {
             cardTitle: this.title,
             cardImage: this.image,
             shortDesc: this.desc
        }
    }
}

export default Show