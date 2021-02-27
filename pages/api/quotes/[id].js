import {quotes} from '../../../quotes';

export default function handler({query : {id}}, res) {
    const filteredQuote = quotes.filter(quote=>quote.id==parseInt(id));
    if (filteredQuote.length>0){
        res.status(200).json(filteredQuote[0])
    } else{
        res.status(404).json({message:`Quote not found with id ${id}`})
    }
    
}
 